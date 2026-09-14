import { html } from 'lit';
import setupTranslation, { ensureEditorTranslations } from '../../tools/localize.js';
import { tTemplate } from '../../editor/utils.js';

// Rendered by pop-up/create.js on the runtime path, so it lives apart from
// editor.js: importing it from there pulled the pop-up, button and slider
// editors into the initial bundle for a card that is only being displayed.
export function renderPopupOnboarding(context) {
  const hass = context?._hass ?? context?.hass;
  ensureEditorTranslations(hass);
  const t = setupTranslation(hass);
  const mode = context?.config?.popup_mode ?? 'default';
  const fullWidth = context?.config?.full_width_on_mobile ? 'true' : 'false';
  const bottomOffset = context?.config?.with_bottom_offset ? 'true' : 'false';
  return html`
    <style>
      .bubble-popup-onboarding {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 16px 12px 8px;
        contain: layout paint style;
      }
      .bhp-visual {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
        max-width: 280px;
        container-type: inline-size;
      }
      .bhp-screen {
        position: relative;
        width: 100%;
        aspect-ratio: 210 / 130;
        background: var(--primary-background-color);
        border: 1.5px solid var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        border-radius: 11.7cqw;
        overflow: hidden;
        container-type: inline-size;
      }
      .bhp-bg {
        position: absolute;
        inset: 3.81cqw;
        display: flex;
        flex-direction: column;
        gap: 3.81cqw;
      }
      .bhp-bg-row {
        flex: 1;
        border-radius: 9.52cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        opacity: 0.3;
      }
      .bhp-overlay {
        position: absolute;
        inset: 0;
        background: var(--bubble-backdrop-background-color, var(--bubble-default-backdrop-background-color));
        opacity: 0;
        animation: bhp-overlay 5s ease infinite;
      }
      /* === popup shell === */
      .bhp-popup {
        position: absolute;
        inset: auto 0 0;
        height: 48.57cqw;
        border-radius: 11.43cqw 11.43cqw 0 0;
        background: var(--ha-card-background, var(--card-background-color));
        display: flex;
        flex-direction: column;
        gap: 3.81cqw;
        padding: 5.71cqw;
        box-sizing: border-box;
        transform: translateY(100%);
        animation: bhp-slide 5s ease infinite;
      }
      /* header row */
      .bhp-popup-header {
        display: flex;
        align-items: center;
        gap: 3.81cqw;
        flex-shrink: 0;
        height: 16.67cqw;
      }
      /* placeholder for the header button/entity card */
      .bhp-popup-header-card {
        flex: 1;
        height: 16.67cqw;
        border-radius: 8.57cqw;
        background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));
      }
      /* close button — mirrors .bubble-header-action-button */
      .bhp-popup-close-btn {
        width: 16.67cqw;
        height: 16.67cqw;
        border-radius: 8.57cqw;
        background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));
        flex-shrink: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bhp-popup-close-btn::before,
      .bhp-popup-close-btn::after {
        content: '';
        position: absolute;
        width: 6.19cqw;
        height: 0.71cqw;
        border-radius: 0.48cqw;
        background: var(--primary-text-color);
        opacity: 0.55;
      }
      .bhp-popup-close-btn::before { transform: rotate(45deg); }
      .bhp-popup-close-btn::after  { transform: rotate(-45deg); }
      /* content rows */
      .bhp-popup-content {
        flex: 0 0 16.67cqw;
        display: flex;
        flex-direction: column;
      }
      .bubble-popup-onboarding[data-bottom-offset="true"] .bhp-popup-content {
        padding-bottom: 9.52cqw;
      }
      .bubble-popup-onboarding[data-bottom-offset="true"] .bhp-popup {
        height: 58.57cqw;
      }
      .bhp-popup-row {
        flex: 1;
        border-radius: 9.52cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
      }
      /* === default mode (full-height bottom sheet) === */
      .bubble-popup-onboarding[data-mode="default"] .bhp-popup {
        inset: 0;
        height: auto;
      }
      /* === centered mode === */
      .bubble-popup-onboarding[data-mode="centered"] .bhp-popup {
        inset: 50% 4.76cqw auto;
        height: 48.57cqw;
        border-radius: 11.43cqw;
        transform: translateY(-50%) scale(0.85);
        opacity: 0;
        animation: bhp-center 5s ease infinite;
      }
      .bubble-popup-onboarding[data-mode="centered"][data-full-width="true"] .bhp-popup {
        inset: 50% 0 auto;
        border-radius: 11.43cqw;
      }
      /* === adaptive-dialog (alternates: centered dialog → bottom sheet) === */
      .bubble-popup-onboarding[data-mode="adaptive-dialog"] .bhp-popup {
        animation: bhp-adaptive 10s ease infinite;
      }
      .bubble-popup-onboarding[data-mode="adaptive-dialog"][data-bottom-offset="true"] .bhp-popup {
        animation: bhp-adaptive-offset 10s ease infinite;
      }
      @media (max-width: 767px) {
        .bubble-popup-onboarding[data-mode="centered"][data-full-width="true"] .bhp-popup {
          inset: auto 0 0;
          border-radius: 11.43cqw 11.43cqw 0 0;
        }
      }
      /* === trigger button === */
      .bhp-button {
        position: relative;
        display: flex;
        align-items: center;
        gap: 4.76cqw;
        width: 100%;
        height: 20.95cqw;
        border-radius: 10.48cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        padding: 0 4.29cqw;
        box-sizing: border-box;
        overflow: hidden;
        animation: bhp-press 5s ease infinite;
      }
      .bhp-icon {
        width: 13.33cqw;
        height: 13.33cqw;
        border-radius: 50%;
        background: var(--primary-background-color);
        flex-shrink: 0;
      }
      .bhp-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.9cqw;
      }
      .bhp-text-line {
        height: 3.33cqw;
        border-radius: 1.9cqw;
        background: var(--primary-text-color);
        opacity: 0.12;
      }
      .bhp-text-line--long  { width: 65%; }
      .bhp-text-line--short { width: 42%; }
      .bhp-ripple {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--primary-text-color);
        opacity: 0;
        transform: scale(0);
        animation: bhp-ripple 5s ease infinite;
      }
      .bhp-desc {
        width: 100%;
        max-width: 280px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 32px;
      }
      .bhp-desc-body {
        margin: 0;
        line-height: 1.5;
        color: var(--secondary-text-color);
      }
      .bhp-step {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        background: var(--card-background-color, var(--primary-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 8px 10px;
      }
      .bhp-step-num {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        color: var(--on-primary-color, white);
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        display: inline-block;
      }
      .bhp-step-text {
        line-height: 1.5;
        color: var(--secondary-text-color);
      }
      @keyframes bhp-slide {
        0%,  15% { transform: translateY(100%); }
        28%, 55% { transform: translateY(0); }
        65%, 100%{ transform: translateY(100%); }
      }
      @keyframes bhp-center {
        0%,  15% { transform: translateY(-50%) scale(0.85); opacity: 0; }
        28%, 55% { transform: translateY(-50%) scale(1);    opacity: 1; }
        65%, 100%{ transform: translateY(-50%) scale(0.85); opacity: 0; }
      }
      @keyframes bhp-adaptive {
        /* === centered dialog phase (first 5s mapped to 0-50%) === */
        /* 0%,15% of bhp-center → 0%,7.5% */
        0%, 7.5%   { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* 28%,55% of bhp-center → 14%,27.5% */
        14%, 27.5% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(1);    opacity: 1; }
        /* 65%,100% of bhp-center → 32.5%,49% */
        32.5%, 49% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* snap to bottom while invisible */
        50%        { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 0; }
        /* === bottom-sheet phase (second 5s mapped to 50-100%) === */
        /* 0%,15% of bhp-slide → 50%,57.5% */
        57.5%      { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
        /* 28%,55% of bhp-slide → 64%,77.5% */
        64%, 77.5% { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(0);    opacity: 1; }
        /* 65%,100% of bhp-slide → 82.5%,100% */
        82.5%, 100%{ inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
      }
      @keyframes bhp-adaptive-offset {
        /* === centered dialog phase — same as bhp-adaptive === */
        0%, 7.5%   { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        14%, 27.5% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(1);    opacity: 1; }
        32.5%, 49% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* snap to bottom while invisible */
        50%        { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 0; }
        /* === bottom-sheet phase — 58.57cqw to show offset === */
        57.5%      { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
        64%, 77.5% { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(0);    opacity: 1; }
        82.5%, 100%{ inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
      }
      @keyframes bhp-overlay {
        0%,  15% { opacity: 0; }
        28%, 55% { opacity: 1; }
        65%, 100%{ opacity: 0; }
      }
      @keyframes bhp-press {
        0%,  8%  { transform: scale(1); }
        12%      { transform: scale(0.93); }
        17%      { transform: scale(1); }
        100%     { transform: scale(1); }
      }
      @keyframes bhp-ripple {
        0%,  10% { opacity: 0;    transform: scale(0); }
        11%      { opacity: 0.12; transform: scale(0); }
        22%      { opacity: 0;    transform: scale(2); }
        100%     { opacity: 0;    transform: scale(0); }
      }
    </style>
    <div class="bubble-popup-onboarding" data-mode="${mode}" data-full-width="${fullWidth}" data-bottom-offset="${bottomOffset}">
      <div class="bhp-visual" aria-hidden="true">
        <div class="bhp-screen">
          <div class="bhp-bg">
            <div class="bhp-bg-row"></div>
            <div class="bhp-bg-row"></div>
            <div class="bhp-bg-row"></div>
          </div>
          <div class="bhp-overlay"></div>
          <div class="bhp-popup">
            <div class="bhp-popup-header">
              <div class="bhp-popup-header-card"></div>
              <div class="bhp-popup-close-btn"></div>
            </div>
            <div class="bhp-popup-content">
              <div class="bhp-popup-row"></div>
            </div>
          </div>
        </div>
        <div class="bhp-button">
          <div class="bhp-icon"></div>
          <div class="bhp-text">
            <div class="bhp-text-line bhp-text-line--long"></div>
            <div class="bhp-text-line bhp-text-line--short"></div>
          </div>
          <div class="bhp-ripple"></div>
        </div>
      </div>
      <div class="bhp-desc">
        <p class="bhp-desc-body">${tTemplate(t('editor.popup.onboarding_body'), {
          bold: html`<b>${t('editor.popup.onboarding_body_bold')}</b>`,
          navigate: html`<b>${t('editor.popup.navigate')}</b>`
        })}</p>
        <div class="bhp-step">
          <span class="bhp-step-num">1</span>
          <span class="bhp-step-text"><b>${t('editor.popup.step1_title')}</b> ${tTemplate(t('editor.popup.step1_body'), { code: html`<code>#kitchen</code>` })}</span>
        </div>
        <div class="bhp-step">
          <span class="bhp-step-num">2</span>
          <span class="bhp-step-text"><b>${t('editor.popup.step2_title')}</b> ${tTemplate(t('editor.popup.step2_body'), { navigate: html`<b>${t('editor.popup.navigate')}</b>` })}</span>
        </div>
      </div>
    </div>
  `;
}
