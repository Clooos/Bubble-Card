import { version } from './var/version.js';
import setupTranslation, { ensureEditorTranslations, tGlobal } from './tools/localize.js';
import { initializeContent } from './tools/init.js';
import { cleanupTapActions } from './tools/tap-actions.js';
import { preloadYAMLStyles } from './modules/registry.js';
import { createBubbleDefaultColor } from './tools/style.js';
import { updateThemeBackgroundColor } from './cards/pop-up/backdrop.js';
import { invalidateStyleCache, stopTimerInterval, stopRelativeTimeInterval } from './tools/utils.js';
import { cleanupScrollingEffects, resumeScrollingEffects } from './tools/text-scrolling.js';
import { cancelDeferredCardUpdate, deferCardUpdate } from './tools/deferred-card-updates.js';
import { awaitsPreviewHydration, notePreviewHeight, observePreviewHydration, setPreviewMode, unobservePreviewHydration } from './tools/lazy-preview.js';
import { updatePreviewBadge } from './tools/preview-badge.js';
import { getEntitySuggestion } from './modules/suggestions.js';
import { registerPopupContext, shouldHoldDashboardHassUpdate } from './cards/pop-up/helpers.js';
import { hasClassicHeader } from './cards/pop-up/style.js';
import { shouldSkipRender, noteRender, resetRenderGate } from './tools/render-gate.js';
import { beginTemplateRender, sweepTemplates, releaseTemplates, refreshTemplateStyles, TEMPLATE_STYLE } from './tools/render-template.js';
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
import { runModuleTeardowns } from './tools/module-teardown.js';
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

// `name: {{ states('x') }}` without quotes is a YAML mapping, not a string,
// and it would display as "[object Object]". Home Assistant's own cards reject
// it at setConfig, so does this one, with a message that says what to do.
function isTemplateShapedObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function hasUnquotedTemplate(config) {
  if (isTemplateShapedObject(config.name) || isTemplateShapedObject(config.icon)) return true;
  for (const key in config) {
    if (/^\d+_(?:name|icon)$/.test(key) && isTemplateShapedObject(config[key])) return true;
  }
  const subButtons = config.sub_button;
  const check = (list) => Array.isArray(list) && list.some((item) => item && (
    isTemplateShapedObject(item.name) || isTemplateShapedObject(item.icon) || check(item.group)
  ));
  if (Array.isArray(subButtons)) return check(subButtons);
  if (subButtons && typeof subButtons === 'object') return check(subButtons.main) || check(subButtons.bottom);
  return false;
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

// A card Home Assistant moves in the DOM takes its pop-up shell out of the
// document and straight back, and a transition only runs from a style the shell
// already had in the document. A close that starts right after the move, or one
// already under way, would land at its end in one frame (#2589). So the shell
// gets its style back at once, in the open position where it stood a frame ago,
// and a close already under way is put back on top of it. A pop-up simply open
// for a while has no close to replay and keeps its place. Opacity is read because
// it only needs the style, where transform would lay out the view being rebuilt.
function settlePopUpShellAfterMove(context) {
  const popUp = context?.popUp;
  if (!popUp?.isConnected) return;
  const closing = popUp.classList.contains('is-closing');
  if (closing) popUp.classList.remove('is-closing');
  void getComputedStyle(popUp).opacity;
  if (closing) popUp.classList.add('is-closing');
}

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
    // Back from a move, with the pop-up still whole.
    if (this._popUpTeardownTimer) {
      clearTimeout(this._popUpTeardownTimer);
      this._popUpTeardownTimer = null;
      try { settlePopUpShellAfterMove(this); } catch (e) {}
    }
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
        // Home Assistant takes a card down and puts it straight back whenever
        // it moves it in the DOM, which a view rebuilt on navigation does on
        // the way in and on the way back (#2589, uix-forge). Tearing the pop-up
        // down in between closed it in one frame without its slide, so the
        // teardown waits one task and a card already back keeps its pop-up.
        clearTimeout(this._popUpTeardownTimer);
        this._popUpTeardownTimer = setTimeout(() => {
          this._popUpTeardownTimer = null;
          if (!this.isConnected) cleanupPopUp(this);
        }, 0);
      }
    } catch (e) {}
    try { if (this.content) cleanupScrollingEffects(this.content); } catch (e) {}
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
      stopRelativeTimeInterval(this);
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
      // Modules get their one chance to release what they started for this
      // card. A pop-up rebuilds every card on every open, so without this a
      // module's timers and observers accumulate for the life of the page.
      runModuleTeardowns(this);
    } catch (e) {}
    try {
      // The templates this card rendered outlive it for a while in the store,
      // so a card Home Assistant merely moved in the DOM finds them again, but
      // the store must not keep rendering into an element that is gone.
      releaseTemplates(this);
    } catch (e) {}
    if (this._templateHoldTimer) {
      clearTimeout(this._templateHoldTimer);
      this._templateHoldTimer = null;
    }
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

  // True only for the copies Home Assistant builds inside the card editor.
  // `detectedEditor` cannot answer that question: it calls every card an editor
  // card while the edit dialog is open, and Home Assistant turns `editor` on for
  // the whole view as soon as the dashboard is in edit mode.
  //
  // The full shadow-piercing ancestor walk plus two document probes ran on every
  // update of every card. The result can only change through a DOM move, and any
  // move fires the lifecycle callbacks that reset this memo.
  get inEditorPreview() {
    if (this._detectedEditorMemo === undefined) {
      this._detectedEditorMemo = this._isInsideCardEditor();
    }

    return this._detectedEditorMemo;
  }

  get detectedEditor() {
    if (this.editor && window.history?.state?.dialog === "hui-dialog-edit-card") {
      return true;
    }

    return this.inEditorPreview;
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

    // Nothing this card was built from has moved, so rendering it again would
    // reproduce what is already on screen. The fresh hass is stored above, so
    // any later render still reads the current state.
    if (shouldSkipRender(this)) {
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

  // Called by the template store when a template this card holds has a new
  // result. `kinds` says what the card read the changed templates for: a
  // change that only concerns its styles costs a style pass, anything else a
  // render. A card held behind an opening pop-up stays held, the drain of
  // that gate renders it from the store afterwards.
  onTemplateResults(kinds) {
    this._templateResultVersion = (this._templateResultVersion || 0) + 1;
    this.lastEvaluatedStyles = '';
    if (this._bb_cache) this._bb_cache.lastStateSignature = '';
    if (shouldHoldDashboardHassUpdate(this)) return;
    if (kinds === TEMPLATE_STYLE && this.isConnected && this.card && this.config?.card_type !== 'pop-up') {
      try {
        if (refreshTemplateStyles(this)) return;
      } catch (e) {
        console.error('Bubble Card: Error while refreshing styles from a template', e);
        return;
      }
    }
    this.renderCoalesced();
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
    // Every template this render reads is stamped with this generation, and
    // the ones it no longer reads are let go of below.
    beginTemplateRender(this);
    this._templatePending = false;
    const type = this.config.card_type;
    if (handlers[type]) {
      try {
        handlers[type](this);
      } catch (e) {
        console.error(`Bubble Card: Error in handler for card_type '${type}'`, e);
      }
    }
    try { sweepTemplates(this); } catch (e) {}
    // Records the inputs this render was built from, which is what the next
    // tick is compared against.
    try { noteRender(this); } catch (e) {}
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
    // A reconfigured card names different entities and its recorded reads
    // belong to the previous config.
    resetRenderGate(this);
    // Its templates too: the next render subscribes to the ones it still uses,
    // and the store keeps their values meanwhile.
    releaseTemplates(this, true);
    const workingConfig = { ...config };

    if (!workingConfig.card_type) throw new Error(tGlobal('editor.errors.card_type_required'));
    if (hasUnquotedTemplate(workingConfig)) throw new Error(tGlobal('editor.errors.unquoted_template'));
    if (workingConfig.grid_options?.rows !== undefined) {
      workingConfig.rows = workingConfig.grid_options.rows;
    }

    if (workingConfig.card_type === 'pop-up') {
      // A header copying the more info dialog is a title, built as a switch with
      // no entity to read, so it is the one shape of header that asks for none.
      // Both styles wear it, which the exemption used to say of `classic` alone.
      if (workingConfig.hash && workingConfig.button_type && workingConfig.button_type !== 'name' && !workingConfig.entity && workingConfig.modules && !hasClassicHeader(workingConfig) && workingConfig.show_header !== false) {
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
