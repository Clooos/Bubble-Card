const POPUP_HASH_STORAGE_KEY = 'bubble-card-popup-hashes';
const POPUP_HASH_UPDATE_EVENT = 'bubble-popup-hashes-updated';
const POPUP_NAVIGATION_SECTION_ID = 'bubble_popups';
const POPUP_NAVIGATION_GROUP_LABEL = 'Bubble Card pop-ups';
const NAVIGATION_GROUP_KEYS = ['related', 'dashboards', 'views', 'other_routes'];

function getCurrentPagePath() {
    try { return location.pathname; }
    catch (_) { return '/'; }
}

function normalizePopUpHash(hash) {
    if (typeof hash !== 'string') return null;
    const trimmed = hash.trim();
    if (!trimmed || trimmed.startsWith('/')) return null;
    return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function getGlobalPopUpHashMap() {
    if (!(window.__bubbleRegisteredPopUpHashes instanceof Map)) {
        window.__bubbleRegisteredPopUpHashes = new Map();
    }
    return window.__bubbleRegisteredPopUpHashes;
}

// Tracks hashes actively registered by connected pop-ups
const liveHashes = new Set();

// Element registry: tracks which card element owns which hash (WeakRef-based)
const popUpRegistrations = [];

function isHashOwnedByLivingElement(hash) {
    return popUpRegistrations.some(
        reg => reg.hash === hash && reg.ref.deref()?.isConnected
    );
}

function removeHashIfOrphaned(hash) {
    if (!hash || isHashOwnedByLivingElement(hash)) return false;
    liveHashes.delete(hash);
    const meta = getGlobalPopUpHashMap().get(hash);
    if (meta?.path === getCurrentPagePath()) {
        getGlobalPopUpHashMap().delete(hash);
    }
    return true;
}

// Cleans up disconnected elements and orphaned hashes
function cleanupDeadRegistrations() {
    const orphanedHashes = new Set();
    for (let i = popUpRegistrations.length - 1; i >= 0; i--) {
        const reg = popUpRegistrations[i];
        if (!reg.ref.deref()?.isConnected) {
            orphanedHashes.add(reg.hash);
            popUpRegistrations.splice(i, 1);
        }
    }
    let changed = false;
    orphanedHashes.forEach(hash => {
        if (removeHashIfOrphaned(hash)) changed = true;
    });
    return changed;
}

function persistAndNotify() {
    try {
        const hashMap = getGlobalPopUpHashMap();
        const currentPath = getCurrentPagePath();
        const grouped = {};
        hashMap.forEach((meta, hash) => {
            const path = meta.path || '/';
            if (path === currentPath && !liveHashes.has(hash)) return;
            (grouped[path] ??= []).push({ hash, name: meta.name || null, icon: meta.icon || null });
        });
        localStorage.setItem(POPUP_HASH_STORAGE_KEY, JSON.stringify(grouped));
    } catch (_) {
        // no-op
    }
    window.dispatchEvent(new Event(POPUP_HASH_UPDATE_EVENT));
}

function loadPersistedPopUpHashes() {
    try {
        const raw = localStorage.getItem(POPUP_HASH_STORAGE_KEY);
        if (!raw) return;
        const grouped = JSON.parse(raw);
        if (!grouped || typeof grouped !== 'object' || Array.isArray(grouped)) return;

        const hashMap = getGlobalPopUpHashMap();
        for (const [path, entries] of Object.entries(grouped)) {
            if (!Array.isArray(entries)) continue;
            for (const entry of entries) {
                const normalized = normalizePopUpHash(entry?.hash);
                if (normalized) {
                    hashMap.set(normalized, { name: entry.name || null, icon: entry.icon || null, path });
                }
            }
        }
    } catch (_) {
        // no-op
    }
}

function isLiveOnCurrentPage(hash) {
    if (!liveHashes.has(hash)) return false;
    const meta = getGlobalPopUpHashMap().get(hash);
    return meta?.path === getCurrentPagePath();
}

function getNativeItems(picker) {
    return NAVIGATION_GROUP_KEYS.flatMap(key => picker._navigationGroups?.[key] || []);
}

function filterItemsBySearch(items, searchString) {
    const normalized = typeof searchString === 'string' ? searchString.trim().toLowerCase() : '';
    if (!normalized) return items;
    return items.filter(item =>
        [item.id, item.primary, item.secondary].some(
            field => (field || '').toLowerCase().includes(normalized)
        )
    );
}

function injectPopUpHashes(picker) {
    if (!picker?._navigationGroups || !picker?._navigationItems) return;

    const hashMap = getGlobalPopUpHashMap();
    const currentPath = getCurrentPagePath();
    const nativeItems = getNativeItems(picker);
    const existingIds = new Set(nativeItems.map(item => item?.id));
    const bubbleItems = [];

    hashMap.forEach((meta, hash) => {
        if (meta.path !== currentPath || !liveHashes.has(hash)) return;
        if (!hash || existingIds.has(hash)) return;
        bubbleItems.push({
            id: hash,
            primary: meta.name || hash,
            secondary: meta.name ? hash : 'Bubble Card pop-up hash',
            icon: meta.icon || 'mdi:pound',
            sorting_label: `zzz_bubble_pop_up_${hash}`
        });
    });

    if (typeof picker._sortBySortingLabel === 'function') {
        bubbleItems.sort((a, b) => picker._sortBySortingLabel(a, b));
    }

    picker.__bubblePopUpNavigationItems = bubbleItems;
    picker._navigationItems = [...nativeItems, ...bubbleItems];
}

function updatePickerSections(picker) {
    const genericPicker = picker.renderRoot?.querySelector('ha-generic-picker');
    if (!genericPicker) return;

    const hasBubbleItems = picker.__bubblePopUpNavigationItems?.length > 0;
    const sections = Array.isArray(genericPicker.sections) ? genericPicker.sections : [];
    const filtered = sections.filter(s => s?.id !== POPUP_NAVIGATION_SECTION_ID);

    if (hasBubbleItems) {
        genericPicker.sections = [
            ...filtered,
            { id: POPUP_NAVIGATION_SECTION_ID, label: POPUP_NAVIGATION_GROUP_LABEL }
        ];
    } else if (filtered.length !== sections.length) {
        genericPicker.sections = filtered;
    }
}

function refreshNavigationPickers() {
    document.querySelectorAll('ha-navigation-picker').forEach(picker => {
        try {
            injectPopUpHashes(picker);
            picker.requestUpdate?.();
        } catch (_) {
            // no-op
        }
    });
}

function patchInstanceGetItems(instance) {
    if (instance.__bubbleGetItemsPatched) return;
    const originalGetItems = instance._getItems;
    if (typeof originalGetItems !== 'function') return;

    instance._getItems = function (searchString, section) {
        injectPopUpHashes(instance);
        const bubbleItems = filterItemsBySearch(
            instance.__bubblePopUpNavigationItems || [], searchString
        );

        if (section === POPUP_NAVIGATION_SECTION_ID) return bubbleItems;

        const items = originalGetItems.call(instance, searchString, section);
        if (section || !bubbleItems.length) return items;
        return [...items, POPUP_NAVIGATION_GROUP_LABEL, ...bubbleItems];
    };
    instance.__bubbleGetItemsPatched = true;
}

function patchNavigationPicker() {
    const HaNavigationPicker = customElements.get('ha-navigation-picker');
    if (!HaNavigationPicker?.prototype) return false;

    const proto = HaNavigationPicker.prototype;
    if (proto.__bubblePopUpHashesPatched) return true;

    const originalLoad = proto._loadNavigationItems;
    const originalUpdated = proto.updated;
    if (typeof originalLoad !== 'function') return false;

    proto._loadNavigationItems = async function (...args) {
        await originalLoad.apply(this, args);
        patchInstanceGetItems(this);
        injectPopUpHashes(this);
    };

    proto.updated = function (changedProps) {
        originalUpdated?.call(this, changedProps);
        try {
            patchInstanceGetItems(this);
            injectPopUpHashes(this);
            updatePickerSections(this);
        } catch (_) {
            // no-op
        }
    };

    proto.__bubblePopUpHashesPatched = true;
    return true;
}

export function initPopUpHashNavigationBridge() {
    if (window.__bubblePopUpHashNavigationBridgeInitialized) return;
    window.__bubblePopUpHashNavigationBridgeInitialized = true;

    loadPersistedPopUpHashes();

    if (!patchNavigationPicker()) {
        customElements.whenDefined('ha-navigation-picker').then(() => {
            patchNavigationPicker();
            refreshNavigationPickers();
        }).catch(() => {
            // no-op
        });
    }

    window.addEventListener(POPUP_HASH_UPDATE_EVENT, refreshNavigationPickers, { passive: true });

    let lastPath = getCurrentPagePath();
    window.addEventListener('location-changed', () => {
        const newPath = getCurrentPagePath();
        if (newPath !== lastPath) {
            lastPath = newPath;
            refreshNavigationPickers();
        }
    }, { passive: true });
}

export function isHashOnCurrentPage(hash, excludeHash) {
    const normalizedHash = normalizePopUpHash(hash);
    if (!normalizedHash) return false;

    cleanupDeadRegistrations();

    const normalizedExclude = normalizePopUpHash(excludeHash);

    // Same hash as excluded: duplicate only if 2+ distinct elements own it
    if (normalizedHash === normalizedExclude) {
        const currentPath = getCurrentPagePath();
        return popUpRegistrations.filter(
            reg => reg.path === currentPath && reg.hash === normalizedHash
        ).length > 1;
    }

    return isLiveOnCurrentPage(normalizedHash);
}

export function registerPopUpHash(hash, { name, icon, isConnected = true, element } = {}) {
    // Skip registration for disconnected cards to prevent
    // pop-ups from other views overwriting the path with the current view
    if (!isConnected) return;

    const normalizedHash = normalizePopUpHash(hash);
    if (!normalizedHash) return;

    const currentPath = getCurrentPagePath();
    let changed = false;

    if (element) {
        if (cleanupDeadRegistrations()) changed = true;

        const existing = popUpRegistrations.find(reg => reg.ref.deref() === element);
        if (existing) {
            if (existing.hash !== normalizedHash || existing.path !== currentPath) {
                const oldHash = existing.hash;
                existing.hash = normalizedHash;
                existing.path = currentPath;
                removeHashIfOrphaned(oldHash);
                changed = true;
            }
        } else {
            popUpRegistrations.push({ ref: new WeakRef(element), hash: normalizedHash, path: currentPath });
            changed = true;
        }
    }

    liveHashes.add(normalizedHash);

    const hashMap = getGlobalPopUpHashMap();
    const existingMeta = hashMap.get(normalizedHash);
    const newMeta = { name: name || null, icon: icon || null, path: currentPath };

    const metaChanged = !existingMeta ||
        existingMeta.name !== newMeta.name ||
        existingMeta.icon !== newMeta.icon ||
        existingMeta.path !== newMeta.path;

    hashMap.set(normalizedHash, newMeta);

    if (changed || metaChanged) {
        persistAndNotify();
    }
}
