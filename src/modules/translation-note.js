import { html } from 'lit';
import setupTranslation from '../tools/localize.js';

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
