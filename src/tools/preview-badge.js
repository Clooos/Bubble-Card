// A badge drawn on a card's own preview, inside the suggestion picker only.
//
// The picker offers a pop-up and the button that opens it as two separate
// entries, because a Home Assistant suggestion inserts exactly one card
// (`CardSuggestion` is `{ label, config }`, nothing else) and because a closed
// pop-up renders nothing in a view, so it is unreachable on its own. Nothing in
// the picker says the two belong together: the label does, but a label is read
// last, if at all.
//
// So each preview states its own address. A pop-up shows the hash it answers to,
// its button shows the hash it navigates to, and the pair is obvious at a glance
// because the two chips read the same. It also tells a user browsing anyone
// else's pop-up suggestion that the card they are about to add needs something
// to open it.
//
// WHY IT LIVES HERE and not in the picker: `hui-suggestion-card` is Home
// Assistant's component and its badge is computed from its own truncation count.
// Adding to its shadow root would be patching a surface Bubble Card does not
// own, which breaks on the next release. This draws in the card's OWN shadow
// root instead, and only ever there.
//
// SCOPED TO THE PICKER, deliberately. `preview` is true on every card of a
// dashboard in edit mode (hui-masonry-view assigns it per card, hui-section
// forwards it), so keying off `preview` alone would stamp a chip on every card
// the moment a user starts editing.

import { isSuggestionPickerPreview } from './lazy-preview.js';

const BADGE_CLASS = 'bubble-preview-badge';

// Matches the picker's own "+N more" chip, so it reads as part of the dialog
// rather than as something the card drew. The fallbacks matter: these tokens
// are recent, and a card must never render an unstyled chip on an older theme.
const BADGE_STYLE = [
  'position:absolute',
  'top:6px',
  'inset-inline-end:6px',
  'z-index:2',
  'pointer-events:none',
  'padding:2px 8px',
  'border-radius:var(--ha-border-radius-md,12px)',
  'background:var(--ha-color-fill-neutral-quiet-resting,var(--secondary-background-color))',
  'color:var(--ha-color-text-secondary,var(--secondary-text-color))',
  'font-family:var(--ha-font-family-body,inherit)',
  'font-size:var(--ha-font-size-s,12px)',
  'font-weight:var(--ha-font-weight-medium,500)',
  'line-height:1.6',
  'white-space:nowrap',
  'max-width:calc(100% - 12px)',
  'overflow:hidden',
  'text-overflow:ellipsis',
].join(';');

// Every place a Bubble card can carry a navigation, in the order a user would
// think of them: the card body, the icon, then the sub-buttons.
function navigationTarget(config) {
  const actions = [
    config?.button_action?.tap_action,
    config?.tap_action,
    ...collectSubButtonActions(config),
  ];
  for (const action of actions) {
    const path = action?.action === 'navigate' ? action.navigation_path : null;
    if (typeof path === 'string' && path.startsWith('#')) return path;
  }
  return null;
}

function collectSubButtonActions(config) {
  const groups = config?.sub_button;
  const lists = Array.isArray(groups) ? [groups] : [groups?.main, groups?.bottom];
  const actions = [];
  for (const list of lists) {
    if (!Array.isArray(list)) continue;
    for (const button of list) {
      if (!button) continue;
      actions.push(button.tap_action);
      if (Array.isArray(button.group)) {
        for (const child of button.group) actions.push(child?.tap_action);
      }
    }
  }
  return actions;
}

// What this card's preview should say about its address, or null when it has
// nothing to say. A pop-up ANSWERS a hash, everything else NAVIGATES to one, and
// the arrow is what makes a pair readable without reading either label.
export function previewBadgeText(config) {
  if (!config || typeof config !== 'object') return null;

  if (config.card_type === 'pop-up') {
    return typeof config.hash === 'string' && config.hash.startsWith('#') ? config.hash : null;
  }

  const target = navigationTarget(config);
  return target ? `→ ${target}` : null;
}

function removeBadge(context) {
  const existing = context._previewBadgeElement;
  if (existing) {
    try { existing.remove(); } catch (_) {}
    context._previewBadgeElement = null;
  }
  context._previewBadgeText = null;
  // Only ever set by this module, so clearing it cannot fight the card's own
  // styling: a card is `inline-block` and `static` by default.
  try { context.style?.removeProperty?.('position'); } catch (_) {}
}

// Called at the end of every render pass. Cheap on the common path: one property
// read for a card that is not a preview, one string compare for one that is.
export function updatePreviewBadge(context) {
  try {
    if (!context?.preview) {
      if (context?._previewBadgeElement) removeBadge(context);
      return;
    }

    const text = previewBadgeText(context.config);
    if (!text || !isSuggestionPickerPreview(context)) {
      if (context._previewBadgeElement) removeBadge(context);
      return;
    }

    // The render pass rebuilds the card's content, so the badge has to be
    // re-attached even when its text has not changed.
    const attached = context._previewBadgeElement?.isConnected;
    if (attached && context._previewBadgeText === text) return;

    const root = context.shadowRoot;
    if (!root) return;

    let badge = context._previewBadgeElement;
    if (!badge || !attached) {
      badge = context.ownerDocument?.createElement?.('div') ?? document.createElement('div');
      badge.className = BADGE_CLASS;
      badge.setAttribute('style', BADGE_STYLE);
      context._previewBadgeElement = badge;
    }
    badge.textContent = text;
    context._previewBadgeText = text;

    // The host is `static` by default, so the chip would anchor to whatever
    // ancestor happens to be positioned, which in the picker is the dialog.
    context.style.position = 'relative';
    root.appendChild(badge);
  } catch (_) {
    /* A preview affordance must never be able to break a render. */
  }
}
