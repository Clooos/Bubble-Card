// Pure config-tree helpers, split out of standalone-dialog-bridge.js so the
// runtime path (pop-up migration) can use them without pulling the whole
// editor dialog bridge into the initial bundle.
export function cloneConfig(value) {
    if (value === undefined) {
        return undefined;
    }

    if (typeof structuredClone === 'function') {
        return structuredClone(value);
    }

    return JSON.parse(JSON.stringify(value));
}

export function normalizeHash(value) {
    if (typeof value !== 'string') {
        return '';
    }

    const trimmed = value.trim();
    if (!trimmed) {
        return '';
    }

    return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

export function serializeConfig(value) {
    try {
        return JSON.stringify(value);
    } catch (_) {
        return null;
    }
}

// A traversal compares every node it visits against the same target, and the
// target is usually the largest config in play. Serializing it once per search
// instead of once per node is what keeps a deep dashboard walk affordable.
// The rejections below are all implied by string equality, so gating the
// candidate's own serialization on them changes no answer.
export function createConfigComparator(target) {
    const targetIsArray = Array.isArray(target);
    const targetHash = normalizeHash(target?.hash);
    const targetType = typeof target?.type === 'string' ? target.type : null;
    const targetCardType = typeof target?.card_type === 'string' ? target.card_type : null;

    let targetJson;
    let targetJsonReady = false;

    return (candidate) => {
        if (candidate === target) {
            return true;
        }

        if (Array.isArray(candidate) !== targetIsArray) {
            return false;
        }

        const candidateHash = normalizeHash(candidate?.hash);
        if (candidateHash && targetHash && candidateHash !== targetHash) {
            return false;
        }

        if (targetType !== null && candidate?.type !== targetType) {
            return false;
        }

        if (targetCardType !== null && candidate?.card_type !== targetCardType) {
            return false;
        }

        if (!targetJsonReady) {
            targetJson = serializeConfig(target);
            targetJsonReady = true;
        }

        if (targetJson === null) {
            return false;
        }

        return serializeConfig(candidate) === targetJson;
    };
}

export function configsAreEqual(left, right) {
    if (left === right) {
        return true;
    }

    return createConfigComparator(right)(left);
}

export function getConfigMatchScore(candidate, target, isEqualToTarget) {
    if (!candidate || !target || typeof candidate !== 'object' || typeof target !== 'object') {
        return -1;
    }

    const equals = isEqualToTarget || ((value) => configsAreEqual(value, target));
    if (equals(candidate)) {
        return 1000;
    }

    let score = 0;

    if (candidate.type && candidate.type === target.type) {
        score += 10;
    }

    if (candidate.card_type && candidate.card_type === target.card_type) {
        score += 10;
    }

    const candidateHash = normalizeHash(candidate.hash);
    const targetHash = normalizeHash(target.hash);
    if (candidateHash && targetHash) {
        if (candidateHash !== targetHash) {
            return -1;
        }
        score += 100;
    }

    if (candidate.entity && candidate.entity === target.entity) {
        score += 8;
    }

    if (candidate.name && candidate.name === target.name) {
        score += 4;
    }

    if (candidate.icon && candidate.icon === target.icon) {
        score += 2;
    }

    return score > 0 ? score : -1;
}

export function getConfigAtPath(config, path = []) {
    if (!Array.isArray(path)) {
        return undefined;
    }

    let target = config;
    for (const segment of path) {
        if (target === undefined || target === null) {
            return undefined;
        }
        target = target[segment];
    }

    return target;
}

export function replaceConfigAtPath(config, path, nextValue) {
    if (!Array.isArray(path) || path.length === 0) {
        return cloneConfig(nextValue);
    }

    const clonedConfig = cloneConfig(config);
    let target = clonedConfig;

    for (let index = 0; index < path.length - 1; index += 1) {
        target = target?.[path[index]];
        if (target === undefined) {
            return clonedConfig;
        }
    }

    target[path[path.length - 1]] = cloneConfig(nextValue);
    return clonedConfig;
}

export function findConfigPath(rootConfig, targetConfig) {
    // Fast path: if the root IS the target (same reference or same hash), no traversal needed.
    if (rootConfig === targetConfig) return null;
    if (rootConfig?.card_type === targetConfig?.card_type && rootConfig?.card_type === 'pop-up') {
        const rHash = normalizeHash(rootConfig.hash);
        const tHash = normalizeHash(targetConfig.hash);
        if (rHash && tHash && rHash === tHash) return null;
    }

    let bestPath = null;
    let bestScore = -1;

    // Target hash for O(1) rejection during traversal.
    const targetHash = normalizeHash(targetConfig?.hash);
    const targetCardType = targetConfig?.card_type || targetConfig?.type;
    const isEqualToTarget = createConfigComparator(targetConfig);

    const visit = (node, path) => {
        if (!node || typeof node !== 'object') {
            return;
        }

        // Hash-based fast match: if node has the same hash as target, it's a direct hit.
        if (targetHash) {
            const nodeHash = normalizeHash(node.hash);
            if (nodeHash && nodeHash === targetHash) {
                // Same hash = same popup. Check card_type too for safety.
                if (!targetCardType || node.card_type === targetCardType || node.type === targetCardType) {
                    const s = 1000;
                    if (s > bestScore) {
                        bestScore = s;
                        bestPath = path;
                    }
                    return; // Early termination - hash match is definitive.
                }
            }
            // If node has a different hash, skip deep scoring.
            if (nodeHash && nodeHash !== targetHash) {
                // Still need to visit children (target could be nested inside).
            }
        }

        // Quick rejection: if target has a known card_type/type, skip nodes that can't match.
        if (targetCardType && node.type !== targetCardType && node.card_type !== targetCardType) {
            // Only skip leaf-like nodes; still traverse containers.
            const isContainer = Array.isArray(node) ||
                (typeof node.cards === 'object') ||
                (typeof node.card === 'object') ||
                (typeof node.view === 'object') ||
                (typeof node.views === 'object');
            if (!isContainer) return;
        }

        const score = getConfigMatchScore(node, targetConfig, isEqualToTarget);
        if (score > bestScore) {
            bestScore = score;
            bestPath = path;
        }

        if (Array.isArray(node)) {
            const newPath = path ? path.concat([node.length]) : [node.length];
            // Use index-based path properly.
            for (let i = 0; i < node.length; i++) {
                const childPath = path ? path.slice() : [];
                childPath.push(i);
                visit(node[i], childPath);
            }
            return;
        }

        const entries = Object.entries(node);
        for (let i = 0; i < entries.length; i++) {
            const [key, value] = entries[i];
            if (value && typeof value === 'object') {
                const childPath = path ? path.slice() : [];
                childPath.push(key);
                visit(value, childPath);
            }
        }
    };

    visit(rootConfig, []);

    return bestScore >= 0 ? bestPath : null;
}

