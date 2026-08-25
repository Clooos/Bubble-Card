import { html } from 'lit';
import setupTranslation from '../tools/localize.js';
import { getTranslationTargetLang, isModuleTranslationEnabled, setModuleTranslationEnabled, warmupBrowserTranslator } from './translate.js';

// Machine-translated module text (Module Store descriptions, My Modules
// descriptions and editor labels) always carries the same note, and the same
// per-module opt-out: showing the original reverts every translated part of
// that module, not just the paragraph the link sits under.

export function isShowingOriginal(context, id) {
  return !!context._storeDescOriginal?.has(id);
}

export function setShowOriginal(context, id, showOriginal) {
  context._storeDescOriginal = context._storeDescOriginal || new Set();
  if (showOriginal) {
    context._storeDescOriginal.add(id);
  } else {
    context._storeDescOriginal.delete(id);
  }
  context.requestUpdate();
}

/**
 * Renders the "Automatic translation · Show original" note.
 * `translated` tells whether the text currently displayed is a translation.
 */
export function renderTranslationNote(context, id, translated) {
  const t = setupTranslation(context._hassRender ?? context.hass);
  const showingOriginal = isShowingOriginal(context, id);
  if (!translated && !showingOriginal) return '';

  return html`
    <p class="module-translation-note" style="opacity: 0.7; font-size: 0.85em; display: flex; align-items: center; gap: 4px;">
      <ha-icon icon="mdi:translate" style="--mdc-icon-size: 14px;"></ha-icon>
      ${translated ? html`<em>${t('editor.store.machine_translated')}</em>` : ''}
      <a href="#" style="color: var(--primary-color);" @click=${(e) => {
        e.preventDefault();
        setShowOriginal(context, id, translated);
      }}>${translated ? t('editor.store.show_original') : t('editor.store.show_translation')}</a>
    </p>
  `;
}

// Machine translation is off until asked for, so a reader whose language is not
// English would otherwise never learn the option exists. The offer says what it
// costs, in one sentence, and can be sent away for good.

const NOTICE_STORAGE_KEY = 'bubble-card-translate-notice';
let noticeDismissed;

function isOfferDismissed() {
  if (noticeDismissed === undefined) {
    try {
      noticeDismissed = localStorage.getItem(NOTICE_STORAGE_KEY) === '1';
    } catch (_) {
      noticeDismissed = false;
    }
  }
  return noticeDismissed;
}

function dismissOffer() {
  noticeDismissed = true;
  try {
    localStorage.setItem(NOTICE_STORAGE_KEY, '1');
  } catch (_) {}
}

/**
 * Renders the note about machine translation, above the module lists, until it
 * is sent away. Everyone is asked the same question from the same starting
 * point, whatever they did during the beta.
 *
 * Never shown to a reader with nothing to gain: an English editor would be
 * translating English into English.
 */
export function renderTranslationOffer(context) {
  const hass = context._hassRender ?? context.hass;
  if (!getTranslationTargetLang(hass)) return '';
  if (isModuleTranslationEnabled() || isOfferDismissed()) return '';

  const t = setupTranslation(hass);
  const close = () => { dismissOffer(); context.requestUpdate(); };

  return html`
    <div class="bubble-info bubble-translate-offer">
      <h4 class="bubble-section-title">
        <ha-icon icon="mdi:translate"></ha-icon>
        ${t('editor.store.translate_offer_title')}
      </h4>
      <div class="content">
        <p>${t('editor.store.translate_offer_body')}</p>
        <p class="bubble-translate-offer-actions">
          <a href="#" @click=${(e) => {
            e.preventDefault();
            setModuleTranslationEnabled(true);
            warmupBrowserTranslator(hass);
            close();
          }}>${t('editor.common.enable')}</a>
          <a href="#" @click=${(e) => { e.preventDefault(); close(); }}>${t('editor.common.dismiss')}</a>
        </p>
      </div>
    </div>
  `;
}
