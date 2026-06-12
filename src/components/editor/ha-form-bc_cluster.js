import { html, css, LitElement } from "lit";

/**
 * Visual-only container for an arm family (mode dropdown + active value
 * field): always open, no chevron — a thin left rail marks the rows as one
 * unit, guiding the eye without the weight of an expandable group.
 *
 * ha-form resolves it through its dynamic `ha-form-${type}` lookup, and
 * `flatten: true` on the schema item keeps the stored keys top-level —
 * the same contract ha-form-expandable uses. Unlike expandable, the schema
 * item carries the per-field `warnings` map, so nested fields keep their
 * native amber ha-alert instead of degrading to a helper line.
 */
export class HaFormBcCluster extends LitElement {
  static properties = {
    hass: { attribute: false },
    data: { attribute: false },
    schema: { attribute: false },
    disabled: { type: Boolean },
    computeLabel: { attribute: false },
    computeHelper: { attribute: false },
    localizeValue: { attribute: false },
  };

  render() {
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.data}
        .schema=${this.schema?.schema || []}
        .warning=${this.schema?.warnings || {}}
        .computeWarning=${(warning) => warning}
        .disabled=${this.disabled}
        .computeLabel=${this.computeLabel}
        .computeHelper=${this.computeHelper}
        .localizeValue=${this.localizeValue}
      ></ha-form>
    `;
  }

  static styles = css`
    :host {
      display: block;
      border-left: 2px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      padding-left: 12px;
    }
  `;
}

customElements.define("ha-form-bc_cluster", HaFormBcCluster);
