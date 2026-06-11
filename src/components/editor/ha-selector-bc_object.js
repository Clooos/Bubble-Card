import { html, css, LitElement, nothing } from "lit";
import { fireEvent } from "../../tools/utils.js";

/**
 * Custom object selector for Bubble Card that supports dynamic context
 * for entity-attribute linking. This fixes the limitation in ha-selector-object
 * where the context is not passed to the form dialog.
 */
export class HaBcObjectSelector extends LitElement {
  static properties = {
    hass: { attribute: false },
    selector: { attribute: false },
    value: { attribute: false },
    label: {},
    helper: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    localizeValue: { attribute: false },
  };

  constructor() {
    super();
    this.disabled = false;
    this.required = false;
  }

  // A field's optional `visible_if` is a JS expression evaluated against the
  // item's current data (`item`). The schema is regenerated on every change,
  // so fields show/hide live. Fails open: a broken expression keeps the field
  // visible rather than making it unreachable.
  _fieldVisible(field, itemData) {
    if (!field.visible_if) return true;
    try {
      this._visibleIfCache = this._visibleIfCache || {};
      const fn = this._visibleIfCache[field.visible_if] ||
        (this._visibleIfCache[field.visible_if] =
          new Function("item", `return !!(${field.visible_if});`));
      return fn(itemData || {});
    } catch (e) {
      return true;
    }
  }

  // Generate schema from selector fields, including context for entity-attribute linking
  _generateSchema(fields, itemData) {
    if (!fields) return [];

    const fieldEntries = Array.isArray(fields)
      ? fields.map((f, i) => [f.name || i, f])
      : Object.entries(fields);

    // Find entity field name for context
    let entityFieldName = null;
    for (const [key, field] of fieldEntries) {
      if (field.selector && field.selector.entity) {
        entityFieldName = key;
        break;
      }
    }

    // Fields sharing a `group` are wrapped in a collapsible expandable section
    // (flattened, so the stored config keys stay top-level). Fields without a
    // group render flat, exactly as before.
    const schema = [];
    const groups = new Map();

    for (const [key, field] of fieldEntries) {
      if (!this._fieldVisible(field, itemData)) continue;

      const schemaItem = {
        name: key,
        selector: field.selector,
        required: field.required ?? false,
      };

      // Add context for attribute selectors to link to entity field
      if (field.selector && field.selector.attribute && entityFieldName) {
        schemaItem.context = { filter_entity: entityFieldName };
      }

      const group = field.group;
      if (!group) {
        schema.push(schemaItem);
        continue;
      }

      let section = groups.get(group);
      if (!section) {
        section = {
          name: `bc_group_${groups.size}`,
          type: "expandable",
          flatten: true,
          title: group,
          expanded: false,
          schema: [],
        };
        if (field.group_icon) section.icon = field.group_icon;
        groups.set(group, section);
        schema.push(section);
      } else if (!section.icon && field.group_icon) {
        section.icon = field.group_icon;
      }
      section.schema.push(schemaItem);
    }

    return schema;
  }

  _computeLabel(schema) {
    const field = this.selector?.bc_object?.fields?.[schema.name];
    if (field?.label) return field.label;

    const translationKey = this.selector?.bc_object?.translation_key;
    if (this.localizeValue && translationKey) {
      const label = this.localizeValue(`${translationKey}.fields.${schema.name}.name`) ||
                    this.localizeValue(`${translationKey}.fields.${schema.name}`);
      if (label) return label;
    }
    return schema.name;
  }

  _computeHelper(schema) {
    const field = this.selector?.bc_object?.fields?.[schema.name];
    if (field?.description) return field.description;

    const translationKey = this.selector?.bc_object?.translation_key;
    if (this.localizeValue && translationKey) {
      const helper = this.localizeValue(`${translationKey}.fields.${schema.name}.description`);
      if (helper) return helper;
    }
    return "";
  }

  _formatValue(item, selector) {
    if (!item || !this.hass) return "";
    
    const labelField = this.selector?.bc_object?.label_field || 
                       Object.keys(this.selector?.bc_object?.fields || {})[0];
    
    if (!labelField) return "";
    
    const value = item[labelField];
    if (!value) return "";

    // Try to format entity names nicely
    if (this.selector?.bc_object?.fields?.[labelField]?.selector?.entity) {
      const state = this.hass.states[value];
      if (state) {
        return state.attributes.friendly_name || value;
      }
    }
    
    return String(value);
  }

  _getDescription(item) {
    const descField = this.selector?.bc_object?.description_field;
    if (!descField || !item) return "";
    return item[descField] || "";
  }

  render() {
    const isMultiple = this.selector?.bc_object?.multiple || false;
    const fields = this.selector?.bc_object?.fields;

    if (!fields) {
      return html`<div>No fields defined</div>`;
    }

    if (isMultiple) {
      return this._renderMultiple();
    }
    return this._renderSingle();
  }

  _renderMultiple() {
    const items = Array.isArray(this.value) ? this.value : [];

    return html`
      ${this.label ? html`<label class="bc-object-label">${this.label}</label>` : nothing}
      <div class="bc-object-items">
        ${items.map((item, index) => this._renderItem(item, index))}
        <ha-button 
          class="bc-object-add-button"
          @click=${this._addItem}
          ?disabled=${this.disabled}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this.hass?.localize?.("ui.common.add") || "Add"}
        </ha-button>
      </div>
      ${this.helper ? html`<ha-input-helper-text>${this.helper}</ha-input-helper-text>` : nothing}
    `;
  }

  _renderSingle() {
    if (this.value) {
      return html`
        ${this.label ? html`<label class="bc-object-label">${this.label}</label>` : nothing}
        <div class="bc-object-items">
          ${this._renderItem(this.value, 0)}
        </div>
        ${this.helper ? html`<ha-input-helper-text>${this.helper}</ha-input-helper-text>` : nothing}
      `;
    }

    return html`
      ${this.label ? html`<label class="bc-object-label">${this.label}</label>` : nothing}
      <ha-button 
        class="bc-object-add-button"
        @click=${this._addItem}
        ?disabled=${this.disabled}
      >
        <ha-icon icon="mdi:plus"></ha-icon>
        ${this.hass?.localize?.("ui.common.add") || "Add"}
      </ha-button>
      ${this.helper ? html`<ha-input-helper-text>${this.helper}</ha-input-helper-text>` : nothing}
    `;
  }

  _renderItem(item, index) {
    const label = this._formatValue(item, this.selector) || `Item ${index + 1}`;
    const description = this._getDescription(item);
    const isMultiple = this.selector?.bc_object?.multiple || false;

    return html`
      <ha-expansion-panel outlined class="bc-object-item">
        <h4 slot="header" class="bc-object-item-header">
          <div class="bc-object-item-title-container">
            <span class="bc-object-item-label">${label}</span>
            ${description ? html`<span class="bc-object-item-description">${description}</span>` : nothing}
          </div>
          <div class="button-container" @click=${(e) => e.stopPropagation()} @mousedown=${(e) => e.stopPropagation()} @touchstart=${(e) => e.stopPropagation()}>
            <ha-icon-button
              class="delete-icon"
              @click=${() => this._deleteItem(index)}
              ?disabled=${this.disabled}
              .label="${this.hass?.localize?.("ui.common.delete") || "Delete"}"
            >
              <ha-icon icon="${isMultiple ? 'mdi:delete' : 'mdi:close'}"></ha-icon>
            </ha-icon-button>
          </div>
        </h4>
        <div class="bc-object-item-content">
          <ha-form
            .hass=${this.hass}
            .data=${item}
            .schema=${this._generateSchema(this.selector?.bc_object?.fields, item)}
            .disabled=${this.disabled}
            .computeLabel=${(schema) => this._computeLabel(schema)}
            .computeHelper=${(schema) => this._computeHelper(schema)}
            .localizeValue=${this.localizeValue}
            @value-changed=${(ev) => this._itemChanged(ev, index)}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `;
  }

  _addItem() {
    const isMultiple = this.selector?.bc_object?.multiple || false;

    if (isMultiple) {
      const newValue = [...(Array.isArray(this.value) ? this.value : []), {}];
      fireEvent(this, "value-changed", { value: newValue });
    } else {
      fireEvent(this, "value-changed", { value: {} });
    }
  }

  _deleteItem(index) {
    const isMultiple = this.selector?.bc_object?.multiple || false;

    if (isMultiple) {
      const newValue = [...(this.value || [])];
      newValue.splice(index, 1);
      fireEvent(this, "value-changed", { value: newValue });
    } else {
      fireEvent(this, "value-changed", { value: undefined });
    }
  }

  _itemChanged(ev, index) {
    ev.stopPropagation();
    const isMultiple = this.selector?.bc_object?.multiple || false;

    if (isMultiple) {
      const newValue = [...(this.value || [])];
      newValue[index] = ev.detail.value;
      fireEvent(this, "value-changed", { value: newValue });
    } else {
      fireEvent(this, "value-changed", { value: ev.detail.value });
    }
  }

  static styles = css`
    :host {
      display: block;
    }

    .bc-object-label {
      display: block;
      margin-bottom: 8px;
      font-weight: var(--ha-font-weight-medium, 500);
    }

    .bc-object-items {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .bc-object-item {
      --expansion-panel-summary-padding: 0 16px;
      width: 100% !important;
      max-width: 100% !important;
    }

    .bc-object-item-header {
      display: flex;
      align-items: center;
      margin: 0;
      width: 100%;
      justify-content: space-between;
    }

    .bc-object-item-title-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 12px 0;
      overflow: hidden;
    }

    .bc-object-item-label {
      font-weight: var(--ha-font-weight-medium, 500);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-description {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-content {
      padding: 16px;
      width: 100% !important;
      box-sizing: border-box;
    }

    .button-container {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }

    .delete-icon {
      color: var(--secondary-text-color);
    }

    .delete-icon ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-icon[disabled] {
      color: var(--disabled-text-color);
      opacity: 0.5;
    }

    .bc-object-add-button {
      align-self: flex-start;
    }

    ha-input-helper-text {
      display: block;
      margin-top: 4px;
    }
  `;
}

customElements.define("ha-selector-bc_object", HaBcObjectSelector);

