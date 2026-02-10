const POPUP_HASH_STORAGE_KEY = 'bubble-card-popup-hashes';
const POPUP_HASH_UPDATE_EVENT = 'bubble-popup-hashes-updated';
const POPUP_NAVIGATION_SECTION_ID = 'bubble_popups';
const POPUP_NAVIGATION_GROUP_LABEL = 'Bubble Card pop-ups';

function normalizePopUpHash(hash) {
    if (typeof hash !== 'string') return null;
    const trimmedHash = hash.trim();
    if (!trimmedHash) return null;
    if (trimmedHash.startsWith('/')) return null;
    return trimmedHash.startsWith('#') ? trimmedHash : `#${trimmedHash}`;
}

function getGlobalPopUpHashMap() {
    if (!window.__bubbleRegisteredPopUpHashes) {
        window.__bubbleRegisteredPopUpHashes = new Map();
    }
    // Migrate from legacy Set to Map
    if (window.__bubbleRegisteredPopUpHashes instanceof Set) {
        const legacySet = window.__bubbleRegisteredPopUpHashes;
        window.__bubbleRegisteredPopUpHashes = new Map();
        legacySet.forEach((hash) => {
            window.__bubbleRegisteredPopUpHashes.set(hash, {});
        });
    }
    return window.__bubbleRegisteredPopUpHashes;
}

function persistPopUpHashes() {
    try {
        const hashMap = getGlobalPopUpHashMap();
        const entries = [];
        hashMap.forEach((meta, hash) => {
            entries.push({ hash, name: meta.name || null, icon: meta.icon || null });
        });
        localStorage.setItem(POPUP_HASH_STORAGE_KEY, JSON.stringify(entries));
    } catch (_) {
        // no-op
    }
}

function loadPersistedPopUpHashes() {
    try {
        const rawHashes = localStorage.getItem(POPUP_HASH_STORAGE_KEY);
        if (!rawHashes) return;
        const parsedHashes = JSON.parse(rawHashes);
        if (!Array.isArray(parsedHashes)) return;

        const hashMap = getGlobalPopUpHashMap();
        parsedHashes.forEach((entry) => {
            // Support legacy format (plain string) and new format (object with hash, name, icon)
            const isObject = entry && typeof entry === 'object';
            const rawHash = isObject ? entry.hash : entry;
            const normalizedHash = normalizePopUpHash(rawHash);
            if (normalizedHash) {
                hashMap.set(normalizedHash, {
                    name: (isObject && entry.name) || null,
                    icon: (isObject && entry.icon) || null
                });
            }
        });
    } catch (_) {
        // no-op
    }
}

function injectPopUpHashesIntoNavigationPicker(picker) {
    if (!picker || !picker._navigationGroups || !picker._navigationItems) {
        return;
    }

    const hashMap = getGlobalPopUpHashMap();
    const nativeItems = [
        ...(picker._navigationGroups.related || []),
        ...(picker._navigationGroups.dashboards || []),
        ...(picker._navigationGroups.views || []),
        ...(picker._navigationGroups.other_routes || [])
    ];
    const existingIds = new Set(nativeItems.map((item) => item?.id));
    const bubbleItems = [];

    hashMap.forEach((meta, hash) => {
        if (!hash || existingIds.has(hash)) return;
        bubbleItems.push({
            id: hash,
            primary: meta.name || hash,
            secondary: meta.name ? hash : 'Bubble Card pop-up hash',
            icon: meta.icon || 'mdi:pound',
            sorting_label: `zzz_bubble_pop_up_${hash}`
        });
    });

    const sortedBubbleItems = typeof picker._sortBySortingLabel === 'function'
        ? [...bubbleItems].sort((itemA, itemB) => picker._sortBySortingLabel(itemA, itemB))
        : bubbleItems;
    picker.__bubblePopUpNavigationItems = sortedBubbleItems;

    picker._navigationItems = [
        ...nativeItems,
        ...sortedBubbleItems
    ];
}

function refreshNavigationPickers() {
    const pickers = document.querySelectorAll('ha-navigation-picker');
    pickers.forEach((picker) => {
        try {
            injectPopUpHashesIntoNavigationPicker(picker);
            if (typeof picker.requestUpdate === 'function') {
                picker.requestUpdate();
            }
        } catch (_) {
            // no-op
        }
    });
}

function patchNavigationPicker() {
    const HaNavigationPicker = customElements.get('ha-navigation-picker');
    if (!HaNavigationPicker || !HaNavigationPicker.prototype) return false;

    const prototype = HaNavigationPicker.prototype;
    if (prototype.__bubblePopUpHashesPatched) return true;

    const originalLoadNavigationItems = prototype._loadNavigationItems;
    const originalUpdated = prototype.updated;
    if (typeof originalLoadNavigationItems !== 'function') return false;

    // _getItems is an instance field in HA, so it must be patched per instance.
    function patchInstanceGetItems(instance) {
        if (instance.__bubbleGetItemsPatched) return;
        const instanceGetItems = instance._getItems;
        if (typeof instanceGetItems !== 'function') return;

        instance._getItems = function (searchString, section) {
            injectPopUpHashesIntoNavigationPicker(instance);

            const bubbleItems = [...(instance.__bubblePopUpNavigationItems || [])];
            const normalizedSearch = typeof searchString === 'string' ? searchString.trim().toLowerCase() : '';
            const filteredBubbleItems = normalizedSearch
                ? bubbleItems.filter((item) => (
                    (item.id || '').toLowerCase().includes(normalizedSearch) ||
                    (item.primary || '').toLowerCase().includes(normalizedSearch) ||
                    (item.secondary || '').toLowerCase().includes(normalizedSearch)
                ))
                : bubbleItems;

            if (section === POPUP_NAVIGATION_SECTION_ID) {
                return filteredBubbleItems;
            }

            const items = instanceGetItems.call(instance, searchString, section);
            if (section) return items;
            if (filteredBubbleItems.length === 0) return items;

            return [
                ...items,
                POPUP_NAVIGATION_GROUP_LABEL,
                ...filteredBubbleItems
            ];
        };
        instance.__bubbleGetItemsPatched = true;
    }

    prototype._loadNavigationItems = async function (...args) {
        await originalLoadNavigationItems.apply(this, args);
        patchInstanceGetItems(this);
        injectPopUpHashesIntoNavigationPicker(this);
    };

    prototype.updated = function (changedProps) {
        if (typeof originalUpdated === 'function') {
            originalUpdated.call(this, changedProps);
        }

        try {
            patchInstanceGetItems(this);
            injectPopUpHashesIntoNavigationPicker(this);
            const picker = this.renderRoot?.querySelector('ha-generic-picker');
            if (!picker) return;

            const hasBubbleItems = (this.__bubblePopUpNavigationItems || []).length > 0;
            const baseSections = Array.isArray(picker.sections) ? picker.sections : [];
            const nonBubbleSections = baseSections.filter(
                (section) => section?.id !== POPUP_NAVIGATION_SECTION_ID
            );

            if (!hasBubbleItems) {
                if (nonBubbleSections.length !== baseSections.length) {
                    picker.sections = nonBubbleSections;
                }
                return;
            }

            picker.sections = [
                ...nonBubbleSections,
                { id: POPUP_NAVIGATION_SECTION_ID, label: POPUP_NAVIGATION_GROUP_LABEL }
            ];
        } catch (_) {
            // no-op
        }
    };

    prototype.__bubblePopUpHashesPatched = true;
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

    window.addEventListener(POPUP_HASH_UPDATE_EVENT, () => {
        refreshNavigationPickers();
    }, { passive: true });
}

export function registerPopUpHash(hash, { name, icon } = {}) {
    const normalizedHash = normalizePopUpHash(hash);
    if (!normalizedHash) return;

    const hashMap = getGlobalPopUpHashMap();
    const existing = hashMap.get(normalizedHash);
    const newMeta = {
        name: name || null,
        icon: icon || null
    };

    const isNew = !existing;
    const metaChanged = existing && (existing.name !== newMeta.name || existing.icon !== newMeta.icon);

    hashMap.set(normalizedHash, newMeta);

    if (isNew || metaChanged) {
        persistPopUpHashes();
        window.dispatchEvent(new Event(POPUP_HASH_UPDATE_EVENT));
    }
}

