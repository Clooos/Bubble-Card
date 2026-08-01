// Every assumption Bubble Card makes about Home Assistant's own DOM lives
// here. HA's frontend is internal API: element names, wrapper structure and
// dialog surfaces change between releases, and each of those assumptions used
// to be duplicated across the codebase, so a single rename meant hunting down
// several sites — and the failure was silent everywhere.
//
// The rules for anything added here:
//   - recognise a SHAPE, not one exact name, whenever that is possible;
//   - degrade to a defined behaviour instead of throwing;
//   - be covered by a contract test, so a HA bump fails the suite during an
//     upgrade instead of breaking users' dashboards.

// The per-card wrapper HA puts around every card in a view. Bubble Card needs
// it to collapse the grid cell reserved for a (visually absent) pop-up.
export const HA_CARD_WRAPPER_TAG = 'hui-card';

export function isHaCardWrapper(node) {
    const tag = node?.tagName;
    return typeof tag === 'string' && tag.toLowerCase() === HA_CARD_WRAPPER_TAG;
}

// Dialog surfaces. Used to decide whether a click landed inside a dialog and
// therefore must NOT close the pop-up underneath. An unrecognised dialog makes
// a click inside it count as "outside", closing the pop-up: recognise the
// shape rather than maintaining a list patched every HA release.
const knownDialogTags = new Set(['HA-DIALOG', 'HA-MORE-INFO-DIALOG', 'HA-DIALOG-DATE-PICKER']);

// Matches DIALOG, HA-DIALOG, HA-MD-DIALOG, HA-DIALOG-DATE-PICKER, MWC-DIALOG…
const dialogTagPattern = /(^|-)DIALOG(-|$)/;

export function isDialogNode(node) {
    const tag = node?.nodeName;
    if (typeof tag !== 'string') {
        return false;
    }

    if (knownDialogTags.has(tag) || dialogTagPattern.test(tag)) {
        return true;
    }

    // Whatever the tag is, the platform's own accessibility contract marks
    // modal dialog content. Menus and tooltips use other roles, so this does
    // not swallow ordinary popovers.
    try {
        const role = typeof node.getAttribute === 'function' ? node.getAttribute('role') : null;
        return role === 'dialog' || role === 'alertdialog';
    } catch (_) {
        return false;
    }
}

// The legacy (pre-standalone) pop-up shell is HA's vertical-stack card render
// root. '#root' is an internal id of hui-vertical-stack-card; when it moves,
// fall back to the first element child so the pop-up still has a shell to work
// with instead of failing into the onboarding error card.
export function resolveLegacyStackRoot(verticalStack) {
    if (!verticalStack || typeof verticalStack.querySelector !== 'function') {
        return null;
    }

    const root = verticalStack.querySelector('#root');
    if (root) {
        return root;
    }

    const fallback = verticalStack.firstElementChild || null;
    if (fallback) {
        console.warn(
            'Bubble Card: Home Assistant no longer exposes the "#root" container this version builds legacy ' +
            'pop-ups on. Falling back to the stack\'s first child; please report this so Bubble Card can be updated.'
        );
    }
    return fallback;
}
