import { html, css, LitElement } from "lit";

// A switch and its label on one line, where a press on the label toggles the
// switch. The editors used ha-formfield for that, which Home Assistant 2026.11
// removed: left unknown, it lost the label given as an attribute and dropped
// the label written beside the switch onto the next line. This one keeps the
// layout ha-formfield had, on every version of Home Assistant.
//
// The label comes either from the `label` attribute or, as most editors write
// it, from a `.mdc-form-field` block slotted after the switch.
const CONTROLS = new Set(['HA-SWITCH', 'HA-CHECKBOX', 'HA-RADIO']);

export class BubbleFormfield extends LitElement {
  static properties = {
    label: { type: String },
    disabled: { type: Boolean, reflect: true },
  };

  render() {
    return html`
      <div class="field">
        <slot @click=${this._onSlotClick}></slot>
        ${this.label ? html`<label @click=${this._toggle}>${this.label}</label>` : ''}
      </div>
    `;
  }

  _control() {
    return [...this.children].find((child) => CONTROLS.has(child.tagName)) || null;
  }

  // Only a press on the slotted label, never one on the switch itself or on
  // anything else that sits in the field.
  _onSlotClick(ev) {
    const path = ev.composedPath();
    const index = path.indexOf(this);
    const inside = index > 0 ? path.slice(0, index) : path;
    if (inside.some((node) => CONTROLS.has(node.tagName))) return;
    if (!inside.some((node) => node.classList?.contains('mdc-form-field') || node.tagName === 'LABEL')) return;
    this._toggle();
  }

  _toggle() {
    const input = this._control();
    if (!input || input.disabled || this.disabled) return;
    input.focus?.();
    if (input.tagName === 'HA-CHECKBOX') {
      input.checked = !input.checked;
      input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      return;
    }
    input.click();
  }

  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }
    :host([hidden]) {
      display: none;
    }
    .field {
      display: inline-flex;
      align-items: var(--ha-formfield-align-items, center);
      gap: var(--ha-space-1, 4px);
      width: 100%;
      font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ha-font-family-body, Roboto, sans-serif)));
      font-size: var(--mdc-typography-body2-font-size, 0.875rem);
      line-height: var(--mdc-typography-body2-line-height, 1.25rem);
      font-weight: var(--mdc-typography-body2-font-weight, 400);
      letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
      color: var(--mdc-theme-text-primary-on-background, var(--primary-text-color));
    }
    ::slotted(ha-switch) {
      margin-inline-end: 10px;
      margin-inline-start: initial;
    }
    ::slotted(.mdc-form-field) {
      cursor: pointer;
    }
    label {
      direction: var(--direction);
      margin-inline-start: 0;
      margin-inline-end: auto;
      padding: 0;
      cursor: pointer;
    }
    :host([disabled]) label,
    :host([disabled]) ::slotted(.mdc-form-field) {
      color: var(--disabled-text-color);
      cursor: default;
    }
  `;
}

customElements.define("bubble-formfield", BubbleFormfield);
