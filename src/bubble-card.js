import { version } from './var/version.js';
import setupTranslation, { ensureEditorTranslations, tGlobal } from './tools/localize.js';
import { initializeContent } from './tools/init.js';
import { cleanupTapActions } from './tools/tap-actions.js';
import { preloadYAMLStyles } from './modules/registry.js';
import { createBubbleDefaultColor } from './tools/style.js';
import { updateThemeBackgroundColor } from './cards/pop-up/backdrop.js';
import { invalidateStyleCache, stopTimerInterval } from './tools/utils.js';
import { cleanupScrollingEffects, resumeScrollingEffects } from './tools/text-scrolling.js';
import { cancelSubButtonOutlines } from './components/sub-button/outline.js';
import { cancelDeferredCardUpdate, deferCardUpdate } from './tools/deferred-card-updates.js';
import { awaitsPreviewHydration, notePreviewHeight, observePreviewHydration, setPreviewMode, unobservePreviewHydration } from './tools/lazy-preview.js';
import { updatePreviewBadge } from './tools/preview-badge.js';
import { getEntitySuggestion } from './modules/suggestions.js';
import { registerPopupContext, shouldHoldDashboardHassUpdate } from './cards/pop-up/helpers.js';
import { maybeShowMigrationNotice } from './cards/pop-up/migration.js';
import { registerForIconRefresh, unregisterForIconRefresh } from './tools/icon.js';
import { monotonicNow } from './tools/monotonic-time.js';
import BubbleCardEditor from './editor/bubble-card-editor.js';

import { cleanupPopUp, handlePopUp } from './cards/pop-up/index.js';
import { handleButton } from './cards/button/index.js';
import { handleSubButtons } from './cards/sub-buttons/index.js';
import { handleSeparator } from './cards/separator/index.js';
import { handleCover } from './cards/cover/index.js';
import { handleEmptyColumn } from './cards/empty-column/index.js';
import { handleHorizontalButtonsStack } from './cards/horizontal-buttons-stack/index.js';
import { releaseButtonHighlightListener } from './cards/horizontal-buttons-stack/highlight.js';
import { handleCalendar } from './cards/calendar/index.js';
import { handleMediaPlayer } from './cards/media-player/index.js';
import { handleSelect } from './cards/select/index.js';
import { handleClimate } from './cards/climate/index.js';

let _lastSeenThemes = null;

// Cards re-render themselves when the editor's language switch flips: their
// content (placeholders, onboarding, errors) is built outside the editor.
const connectedCards = new Set();
try {
  window.addEventListener('bubble-card-language-changed', () => {
    connectedCards.forEach((card) => {
      try { card.updateBubbleCard(); } catch (_) {}
    });
  });
} catch (_) {}

function isInsidePopupOpeningScope(element) {
  if (typeof element?.closest !== 'function') {
    return false;
  }

  return element.closest('.bubble-pop-up')?.dataset?.bubblePopupOpening === 'true';
}

const handlers = {
  'pop-up': handlePopUp,
  'button': handleButton,
  'sub-buttons': handleSubButtons,
  'separator': handleSeparator,
  'cover': handleCover,
  'empty-column': handleEmptyColumn,
  'horizontal-buttons-stack': handleHorizontalButtonsStack,
  'calendar': handleCalendar,
  'media-player': handleMediaPlayer,
  'select': handleSelect,
  'climate': handleClimate,
};

// Home Assistant replaces the whole hass object on every state change anywhere
// in the installation and hands the new one to every card, so a burst of state
// changes costs one full render pass per card per change. Measured on an 88-card
// dashboard: six changes inside 36 ms, six full passes each, all producing the
// same result. A card that has just rendered therefore waits out this window and
// renders once for the whole burst. Nothing is ever dropped: `_hass` already
// holds the newest object by the time the waiting pass reads it, so a card can
// only ever be one window late, never stale. An isolated change, which is what a
// user interaction produces, still renders immediately.
const hassRenderWindowMs = 50;

class BubbleCard extends HTMLElement {
  editor = false;
  isConnected = false;
  // Home Assistant hands `hass` to an element it has not attached yet, so a
  // pop-up — the one card type that keeps rendering while detached — would
  // otherwise run its handler before anything knows where it is going to land.
  _everConnected = false;
  _editorUpdateTimeout = null;
  _detectedEditorMemo = undefined;
  _hassRenderTimer = null;
  // -Infinity, not 0: a card that has never rendered must render at once, and 0
  // is a real reading of the monotonic clock early in a page load.
  _lastRenderAt = -Infinity;
  _preview = false;

  connectedCallback() {
    this.isConnected = true;
    this._everConnected = true;
    connectedCards.add(this);
    // Editor detection depends on the ancestor chain, which only changes
    // through a DOM move: both lifecycle callbacks reset the memo.
    this._detectedEditorMemo = undefined;
    initializeContent(this);
    preloadYAMLStyles(this);
    createBubbleDefaultColor();

    // Only now is it knowable whether this preview may wait for its first
    // intersection: `preview` is assigned before the element is attached, and
    // the answer is in the ancestors. Resolved before anything below claims a
    // shared resource, because a held preview must claim none of them.
    observePreviewHydration(this);
    const held = awaitsPreviewHydration(this);

    // Re-register immediately on reconnect so the centralized URL dispatcher
    // always has a fresh reference, without waiting for the next set hass call.
    // A picker preview never registers: its hash is whatever the suggestion
    // proposes, and claiming it would take the dispatcher away from the real
    // pop-up card of the dashboard being edited, then delete it on close.
    if (!held && this.config?.card_type === 'pop-up' && this.config?.hash) {
      registerPopupContext(this);
    }

    // Notify the user if this pop-up has not been migrated to standalone mode yet.
    if (!held && this.config?.card_type === 'pop-up' && !Array.isArray(this.config?.cards) && !this.editor) {
      maybeShowMigrationNotice(this._hass);
    }

    // Register for icon refresh so cards re-render when icon data loads from WebSocket
    registerForIconRefresh(this);

    // Re-observe the scrolling texts suspended on the way out. The update below
    // cannot be relied on for this: everything except the name sits behind a
    // "nothing changed" memo, and a re-parented view changes nothing.
    try { if (this.content) resumeScrollingEffects(this.content); } catch (e) {}

    if (this._hass) {
      // Defer the heavy update work when a popup is being opened. The pop-up
      // flushes this on its reveal frame, before anything is on screen: this
      // first pass is what creates the sub-buttons and puts the slider fill in
      // place, so waiting out the delay reveals bare pills and fills them in
      // once the pop-up has stopped moving. The delay only stands for a card
      // whose pop-up never reaches that frame.
      if (isInsidePopupOpeningScope(this) && this.config?.card_type !== 'pop-up') {
        deferCardUpdate(this, () => {
          if (this.isConnected) this.updateBubbleCard();
        }, 320); // Slightly longer than the 300ms animation duration
      } else {
        this.updateBubbleCard();
      }
    }
  }

  disconnectedCallback() {
    this.isConnected = false;
    connectedCards.delete(this);
    this._detectedEditorMemo = undefined;
    cleanupTapActions();
    try {
      if (this.config?.card_type === 'pop-up') {
        cleanupPopUp(this);
      }
    } catch (e) {}
    try { if (this.content) cleanupScrollingEffects(this.content); } catch (e) {}
    try { cancelSubButtonOutlines(this); } catch (e) {}
    try {
      if (this.elements?._volumeOutsideHandler) {
        document.removeEventListener('click', this.elements._volumeOutsideHandler);
        this.elements._volumeOutsideHandler = null;
        this.elements._volumeOutsideListenerAdded = false;
      }
    } catch (e) {}
    try {
      // The element itself is the context keyed into the timer registry
      // (base-card changes.js passes the bubble-card element to
      // startTimerInterval), so it must be the key used to stop it.
      stopTimerInterval(this);
    } catch (e) {}
    try {
      if (this._moduleChangeHandler) {
        window.removeEventListener('bubble-card-modules-changed', this._moduleChangeHandler);
        window.removeEventListener('bubble-card-module-updated', this._moduleChangeHandler);
        document.removeEventListener('yaml-modules-updated', this._moduleChangeHandler);
        this._moduleChangeHandler = null;
        this._moduleChangeListenerAdded = false;
      }
    } catch (e) {}
    try {
      // The handler closes over this element, so leaving it on window would
      // pin the element and its last hass. handleHorizontalButtonsStack runs
      // on every render, so a card moved in the DOM registers again by itself.
      releaseButtonHighlightListener(this);
    } catch (e) {}
    try {
      // Remove the template-change subscriber from the module-level Set, it
      // would otherwise retain this element (and its last hass) forever.
      if (this._templateChangeUnsubscribe) {
        this._templateChangeUnsubscribe();
        this._templateChangeUnsubscribe = null;
        this._templateChangeHandler = null;
      }
    } catch (e) {}
    try {
      unregisterForIconRefresh(this);
    } catch (e) {}
    try {
      // The gate survives the disconnect on purpose: a card moved in the DOM is
      // observed again by the connectedCallback that follows the move.
      unobservePreviewHydration(this);
    } catch (e) {}
    clearTimeout(this._editorUpdateTimeout);
    if (this._hassRenderTimer !== null) {
      clearTimeout(this._hassRenderTimer);
      this._hassRenderTimer = null;
    }
    cancelDeferredCardUpdate(this);
  }

  get detectedEditor() {
    if (this.editor && window.history?.state?.dialog === "hui-dialog-edit-card") {
      return true;
    }

    // The full shadow-piercing ancestor walk plus two document probes ran on
    // every update of every card. The result can only change through a DOM
    // move, and any move fires the lifecycle callbacks that reset this memo.
    if (this._detectedEditorMemo === undefined) {
      this._detectedEditorMemo = this._isInsideCardEditor();
    }

    return this._detectedEditorMemo;
  }

  _isInsideCardEditor() {
    const editorTags = new Set([
      'hui-card-preview',
      'hui-section-preview',
      'hui-card-element-editor',
      'hui-dialog-edit-card',
      'nested-lovelace-card-editor',
    ]);

    try {
      let element = this;
      while (element) {
        const tagName = element.tagName?.toLowerCase?.();
        if (tagName && editorTags.has(tagName)) {
          return true;
        }

        if (element.classList?.contains?.('element-preview')) {
          return true;
        }

        if (element.parentNode) {
          element = element.parentNode;
          continue;
        }

        const root = element.getRootNode?.();
        if (root instanceof ShadowRoot && root.host) {
          element = root.host;
          continue;
        }

        break;
      }

      const dialog = document.querySelector('body > home-assistant')
        ?.shadowRoot
        ?.querySelector('hui-dialog-edit-card');

      return Boolean(dialog?.contains?.(this));
    } catch (_) {
      return false;
    }
  }

  // Home Assistant assigns `preview` on the elements it builds for the picker and
  // the card editor before it attaches them, then assigns `editMode = preview`
  // right after for backwards compatibility. Both setters end up calling
  // updateBubbleCard, and both are answered by the single gate inside it, so the
  // pair cannot double-render or fight over the flag.
  set preview(preview) {
    const value = Boolean(preview);
    if (this._preview === value) return;
    this._preview = value;
    setPreviewMode(this, value);
  }

  get preview() {
    return this._preview;
  }

  set editMode(editMode) {
    if (this.editor === editMode) return;
    this.editor = editMode;
    if (['pop-up', 'horizontal-buttons-stack', 'sub-buttons'].includes(this.config.card_type)) {
      this.updateBubbleCard();
    }
  }

  set hass(hass) {
    if (hass?.themes !== _lastSeenThemes) {
      _lastSeenThemes = hass?.themes ?? null;
      // Home Assistant is the only reliable signal that the theme changed: drop the
      // resolved variables before recomputing, otherwise both colors below are
      // rebuilt from the previous theme's cached values.
      invalidateStyleCache();
      updateThemeBackgroundColor();
      createBubbleDefaultColor();
    }
    this._hass = hass;

    // An off-screen preview keeps the newest hass and pays nothing else. The
    // picker holds every preview it built live and hands each of them a
    // brand-new hass on every state change in the installation; hydration reads
    // `_hass` above, so waiting here can never render a stale state.
    if (awaitsPreviewHydration(this)) return;

    // While a pop-up open is in flight behind a covering backdrop, dashboard
    // cards hold their update (the fresh hass is already stored above) and
    // flush progressively once the open settles.
    if (shouldHoldDashboardHassUpdate(this)) {
      return;
    }

    this.renderCoalesced();

    if (this.isConnected && this.config?.card_type === 'pop-up' && !Array.isArray(this.config?.cards) && !this.editor) {
      maybeShowMigrationNotice(hass);
    }
  }

  // Renders now when the card has been idle for a window, otherwise waits out the
  // rest of it and renders once. Only the hass path goes through here: every
  // other trigger (connection, icon refresh, the pop-up open flush, the editor)
  // calls updateBubbleCard directly and stays immediate.
  renderCoalesced() {
    const elapsed = monotonicNow() - this._lastRenderAt;
    if (elapsed >= hassRenderWindowMs) {
      this.updateBubbleCard();
      return;
    }

    if (this._hassRenderTimer !== null) return;
    this._hassRenderTimer = setTimeout(() => {
      this._hassRenderTimer = null;
      this.updateBubbleCard();
    }, hassRenderWindowMs - elapsed);
  }

  updateBubbleCard() {
    // The single answer to every entry point a preview has: hass, editMode, the
    // icon refresh and the connection itself all end up here.
    if (awaitsPreviewHydration(this)) return;
    // A pop-up keeps rendering while detached — that is how a closed legacy
    // pop-up stays reachable by hash and by trigger, its shell being parked out
    // of the stack it lives in — but only once it has been connected at least
    // once. Before that it has nothing to render into, and Home Assistant hands
    // `hass` to a card element well before it puts it in the DOM.
    if (!this.isConnected && (this.config.card_type !== 'pop-up' || !this._everConnected)) return;
    // Kept below the guards above: a call that renders nothing must not start the
    // coalescing window, or the first real render would be made to wait.
    this._lastRenderAt = monotonicNow();
    const type = this.config.card_type;
    if (handlers[type]) {
      try {
        handlers[type](this);
      } catch (e) {
        console.error(`Bubble Card: Error in handler for card_type '${type}'`, e);
      }
    }
    try { this._notifyEditorContext(); } catch (e) {}
    // A preview that drew tells the gate what its card type really measures, so
    // the previews still waiting below the fold reserve the right box, and
    // states the hash it answers to or navigates to, which is what makes a
    // pop-up and its trigger button read as a pair in the picker.
    if (this._preview) {
      notePreviewHeight(this);
      updatePreviewBadge(this);
    }
  }

  setConfig(config) {
    if (config.error) throw new Error(config.error);
    const workingConfig = { ...config };

    if (!workingConfig.card_type) throw new Error(tGlobal('editor.errors.card_type_required'));
    if (workingConfig.grid_options?.rows !== undefined) {
      workingConfig.rows = workingConfig.grid_options.rows;
    }

    if (workingConfig.card_type === 'pop-up') {
      if (workingConfig.hash && workingConfig.button_type && workingConfig.button_type !== 'name' && !workingConfig.entity && workingConfig.modules && workingConfig.popup_style !== 'classic' && workingConfig.show_header !== false) {
        throw new Error(tGlobal('editor.errors.entity_required'));
      }
    } else if (workingConfig.card_type === 'horizontal-buttons-stack') {
      const definedLinks = {};
      for (const key in workingConfig) {
        if (/^\d+_icon$/.test(key)) {
          const linkKey = key.replace('_icon', '_link');
          if (workingConfig[linkKey] === undefined) {
            throw new Error(tGlobal('editor.errors.link_required').replace('{key}', linkKey));
          }
          if (definedLinks[workingConfig[linkKey]]) {
            throw new Error(tGlobal('editor.errors.duplicate_link').replace('{value}', workingConfig[linkKey]));
          }
          definedLinks[workingConfig[linkKey]] = true;
        }
      }
    } else if (['button', 'cover', 'climate', 'select', 'media-player'].includes(workingConfig.card_type)) {
      if (!workingConfig.entity && workingConfig.button_type !== 'name') {
        throw new Error(tGlobal('editor.errors.entity_required'));
      }
    } else if (workingConfig.card_type === 'calendar') {
      if (!workingConfig.entities) throw new Error(tGlobal('editor.errors.entity_list_required'));
    }

    if (workingConfig.card_type === 'select' && workingConfig.entity && !workingConfig.select_attribute) {
      const isSelectEntity = workingConfig.entity.startsWith("input_select") || workingConfig.entity.startsWith("select");
      if (!isSelectEntity) throw new Error(tGlobal('editor.errors.select_menu_missing').replace('{option}', tGlobal('editor.select.select_menu')));
    }

    this.config = workingConfig;
  }

  getCardSize() {
    switch (this.config.card_type) {
      case 'pop-up': return Array.isArray(this.config?.cards) ? 0 : -100000;
      case 'button':
      case 'sub-buttons':
      case 'separator':
      case 'empty-column':
      case 'horizontal-buttons-stack':
      case 'calendar':
      case 'media-player':
      case 'select':
      case 'climate': return 1;
      case 'cover': return 2;
    }
  }

  getGridOptions() {
    const currentColumns = this.config.columns;
    const convertedColumns = currentColumns ? currentColumns * 3 : 12;
    const baseRowsForGrid = this.config.rows ?? 'auto';
    let options = { columns: convertedColumns, rows: baseRowsForGrid };

    if (this.config.card_type === 'horizontal-buttons-stack') {
      options.rows = 1.3;
    } else if (this.config.card_type === 'separator' && !(this.config.grid_options?.rows !== undefined)) {
      options.rows = !this.config.rows ? 0.8 : 'auto';
    }

    return options;
  }

  getLayoutOptions() {
    let defaultRows = 1;
    if (this.config.card_type === 'pop-up') defaultRows = 0;
    else if (this.config.card_type === 'horizontal-buttons-stack') defaultRows = 1;
    else if (this.config.card_type === 'cover') defaultRows = 2;

    let defaultColumns = 4;
    if (this.config.card_type === 'pop-up') defaultColumns = 0;
    else if (this.config.card_type === 'horizontal-buttons-stack') defaultColumns = 4;

    return {
      grid_columns: this.config.columns ?? defaultColumns,
      grid_rows: this.config.rows ?? defaultRows,
    };
  }

  static getConfigElement() {
    return document.createElement("bubble-card-editor");
  }

  _notifyEditorContext() {
    try {
      const detectedEditor = this.detectedEditor;
      if ((!this.editor && !detectedEditor) || !this.config || !this.card) return;
      const detail = {
        context: this,
        card: this.card,
        config: this.config,
        card_type: this.config.card_type,
        entity: this.config.entity,
        hash: this.config.hash,
        isEditor: detectedEditor,
        editMode: this.editor || detectedEditor
      };
      window.dispatchEvent(new CustomEvent('bubble-card-context', { detail }));
    } catch (_) {
      /* no-op */
    }
  }
}

customElements.define("bubble-card", BubbleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "bubble-card",
  name: "Bubble Card",
  preview: false,
  // Resolved when Home Assistant renders the card picker rather than at
  // registration time: `hass` (and the fetched dictionary) only exist later.
  get description() {
    const hass = document.querySelector('home-assistant')?.hass;
    ensureEditorTranslations(hass);
    return setupTranslation(hass)('editor.card_picker.description');
  },
  documentationURL: "https://github.com/Clooos/Bubble-Card/",
  getEntitySuggestion,
});

console.info(
  `%c Bubble Card %c ${version} `,
  'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
  'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);
