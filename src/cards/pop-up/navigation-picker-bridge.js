import { tGlobal } from '../../tools/localize.js';
import { getCurrentViewPopUps, normalizePopUpHash } from './view-popups.js';
const POPUP_NAVIGATION_SECTION_ID = 'bubble_popups';
const getNavigationGroupLabel = () => tGlobal('editor.navigation.group');
const NAVIGATION_GROUP_KEYS = ['related', 'dashboards', 'views', 'other_routes'];

function getCurrentPagePath() {
    try { return location.pathname; }
    catch (_) { return '/'; }
}

// Pop-ups rendered on this page, the cards of the view and the copy the card
// editor previews. Each element holds one entry, so a hash it moves away from,
// or one typed on the way to it, is let go of at once. A preview is listed,
// since it may carry a hash not saved yet, but never owns its hash, or the
// pop-up being edited would look duplicated by its own preview.
const popUpRegistrations = [];

function isRenderedOn(reg, path) {
    return reg.path === path && !!reg.ref.deref()?.isConnected;
}

// Remove disconnected popup registrations.
function cleanupDeadRegistrations() {
    for (let i = popUpRegistrations.length - 1; i >= 0; i--) {
        if (!popUpRegistrations[i].ref.deref()?.isConnected) {
            popUpRegistrations.splice(i, 1);
        }
    }
}

function countOwnersOnCurrentPage(hash) {
    const currentPath = getCurrentPagePath();
    return popUpRegistrations.filter(
        reg => !reg.preview && reg.path === currentPath && reg.hash === hash
    ).length;
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

    const currentPath = getCurrentPagePath();
    const nativeItems = getNativeItems(picker);
    const existingIds = new Set(nativeItems.map(item => item?.id));
    const bubbleItems = [];
    const listed = new Set();
    const addItem = (hash, meta) => {
        if (!hash || listed.has(hash) || existingIds.has(hash)) return;
        listed.add(hash);
        bubbleItems.push({
            id: hash,
            primary: meta.name || hash,
            secondary: meta.name ? hash : tGlobal('editor.navigation.hash_hint'),
            icon: meta.icon || 'mdi:pound',
            sorting_label: `zzz_bubble_pop_up_${hash}`
        });
    };

    // A rendered pop-up names itself best, with what its templates show.
    const rendered = new Map();
    popUpRegistrations.forEach((reg) => {
        if (isRenderedOn(reg, currentPath) && !rendered.has(reg.hash)) rendered.set(reg.hash, reg);
    });

    // The config of the view on screen first, so a pop-up that is closed, not
    // rendered or out of the page is still listed. Then what is rendered and
    // the config does not have yet, a pop-up the editor is creating or one a
    // template builds.
    getCurrentViewPopUps().forEach((popUp) => addItem(popUp.hash, rendered.get(popUp.hash) || popUp));
    rendered.forEach((reg, hash) => addItem(hash, reg));

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
            { id: POPUP_NAVIGATION_SECTION_ID, label: getNavigationGroupLabel() }
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
        return [...items, getNavigationGroupLabel(), ...bubbleItems];
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

    if (!patchNavigationPicker()) {
        customElements.whenDefined('ha-navigation-picker').then(() => {
            patchNavigationPicker();
            refreshNavigationPickers();
        }).catch(() => {
            // no-op
        });
    }

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
    const owners = countOwnersOnCurrentPage(normalizedHash);

    // Checking a pop-up against its own hash, so it takes another owner to make
    // it a duplicate.
    if (normalizedHash === normalizedExclude) {
        return owners > 1;
    }

    return owners > 0;
}

export function registerPopUpHash(hash, { name, icon, isConnected = true, element, preview = false } = {}) {
    // Ignore disconnected cards so other views keep their own hash path.
    if (!isConnected || !element) return;

    cleanupDeadRegistrations();

    const index = popUpRegistrations.findIndex(reg => reg.ref.deref() === element);
    const normalizedHash = normalizePopUpHash(hash);
    if (!normalizedHash) {
        if (index !== -1) popUpRegistrations.splice(index, 1);
        return;
    }

    // A card that outlived a navigation would otherwise keep claiming its hash
    // on the view it came from.
    const registration = {
        hash: normalizedHash,
        path: getCurrentPagePath(),
        name: name || null,
        icon: icon || null,
        preview: Boolean(preview)
    };

    if (index !== -1) {
        Object.assign(popUpRegistrations[index], registration);
    } else {
        popUpRegistrations.push({ ref: new WeakRef(element), ...registration });
    }
}
