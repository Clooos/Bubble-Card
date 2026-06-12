import { html, css, LitElement, nothing } from "lit";

/**
 * Collapsible section for fields sharing a `group` — a drop-in for ha-form's
 * built-in `expandable` type (same schema contract: title, icon, expanded,
 * flatten) with one difference: the schema item carries the per-field
 * `warnings` map and the element re-applies it to its nested ha-form.
 * ha-form-expandable doesn't forward the `warning` prop, which forced
 * grouped fields to degrade their warning to a ⚠️ helper line; here they
 * keep the native amber ha-alert with the description intact.
 */
export class HaFormBcGroup extends LitElement {
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
      <ha-expansion-panel outlined .expanded=${Boolean(this.schema?.expanded)}>
        ${this.schema?.icon
          ? html`<ha-icon slot="leading-icon" .icon=${this.schema.icon}></ha-icon>`
          : nothing}
        <div slot="header" role="heading" aria-level="3">${this.schema?.title}</div>
        <div class="content">
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
        </div>
      </ha-expansion-panel>
    `;
  }

  static styles = css`
    :host {
      display: flex !important;
      flex-direction: column;
    }
    :host ha-form {
      display: block;
    }
    .content {
      padding: 12px;
    }
    ha-expansion-panel {
      display: block;
      --expansion-panel-content-padding: 0;
      border-radius: 6px;
      --ha-card-border-radius: 6px;
    }
    ha-icon[slot="leading-icon"] {
      color: var(--secondary-text-color);
    }
  `;
}

customElements.define("ha-form-bc_group", HaFormBcGroup);
