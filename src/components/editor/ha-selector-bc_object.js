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

  // The card's own config, found by walking up the shadow-root host chain
  // to the editor element. Entity-linked fields (attribute pickers,
  // visible_if/warn_if expressions) fall back to the card's entity when an
  // item doesn't set its own — mirroring how cards resolve entities at
  // render time.
  get _cardConfig() {
    let node = this;
    for (let i = 0; node && i < 20; i++) {
      const host = node.getRootNode?.()?.host;
      if (!host) return undefined;
      if (host._config && typeof host._config === "object") return host._config;
      node = host;
    }
    return undefined;
  }

  // A field's optional `visible_if` is a JS expression evaluated against the
  // item's current data (`item`) and the live `hass` object (entity-aware
  // conditions). The schema is regenerated on every change, so fields
  // show/hide live. Fails open: a broken expression keeps the field visible
  // rather than making it unreachable.
  _fieldVisible(field, itemData) {
    if (!field.visible_if) return true;
    try {
      this._visibleIfCache = this._visibleIfCache || {};
      const fn = this._visibleIfCache[field.visible_if] ||
        (this._visibleIfCache[field.visible_if] =
          new Function("item", "hass", "card", `return !!(${field.visible_if});`));
      return fn(itemData || {}, this.hass, this._cardConfig);
    } catch (e) {
      return true;
    }
  }

  // A field's optional `warn_if` is a JS expression evaluated against the
  // item's current data (`item`) and the live `hass` object (entity-aware
  // warnings: missing entities, unknown attributes). When true, `warn_text`
  // is shown as the field's helper. Fails silent: a broken expression never
  // warns.
  _fieldWarning(field, itemData) {
    if (!field.warn_if) return "";
    try {
      this._warnIfCache = this._warnIfCache || {};
      const fn = this._warnIfCache[field.warn_if] ||
        (this._warnIfCache[field.warn_if] =
          new Function("item", "hass", "card", `return !!(${field.warn_if});`));
      return fn(itemData || {}, this.hass, this._cardConfig) ? (field.warn_text || "Check this value") : "";
    } catch (e) {
      return "";
    }
  }

  // Fields with `arm_of: <base>` are alternative representations ("arms") of
  // the base field (e.g. a static color vs. a state->color map vs. a JS
  // expression). The form shows one mode dropdown per family plus only the
  // active arm's input, instead of every arm as its own field. The dropdown
  // is a synthetic `__<base>_mode` key that lives in per-item UI state and is
  // stripped from the emitted value, so the stored config never changes shape.
  _armFamilies(fields) {
    const fieldEntries = Array.isArray(fields)
      ? fields.map((f, i) => [f.name || i, f])
      : Object.entries(fields || {});
    const fams = {};
    for (const [key, field] of fieldEntries) {
      if (field.arm_of && fields[field.arm_of]) {
        (fams[field.arm_of] = fams[field.arm_of] || []).push({ key, field });
      }
    }
    return fams;
  }

  _armHasData(itemData, key) {
    const v = itemData?.[key];
    return v !== undefined && v !== null && v !== "" &&
      !(typeof v === "object" && Object.keys(v).length === 0);
  }

  // Default mode per family: the first declared arm that has data, else Static.
  _armDefaults(fields, itemData) {
    const out = {};
    for (const [base, arms] of Object.entries(this._armFamilies(fields))) {
      const withData = arms.find((a) => this._armHasData(itemData, a.key));
      out[`__${base}_mode`] = withData ? (withData.field.arm || withData.key) : "Static";
    }
    return out;
  }

  // Generate schema from selector fields, including context for entity-attribute linking.
  // Per-field metadata (arm helpers, warnings) is keyed by item index so that
  // forms of different items in the same list never read each other's state.
  _generateSchema(fields, itemData, index = 0) {
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

    const families = this._armFamilies(fields);
    this._armMeta = this._armMeta || {};
    this._warnMeta = this._warnMeta || {};

    const makeItem = (key, field) => {
      // A declared default surfaces as the text input's placeholder, so an
      // empty field shows what value it falls back to.
      let selector = field.selector;
      if (field.default !== undefined && selector?.text &&
          selector.text.placeholder === undefined) {
        selector = { text: { ...selector.text, placeholder: String(field.default) } };
      }
      const schemaItem = {
        name: key,
        selector,
        required: field.required ?? false,
      };
      // Add context for attribute selectors to link to entity field; when
      // the item has no entity of its own, link to the synthetic
      // __card_entity key (the card's entity) instead.
      if (field.selector && field.selector.attribute && entityFieldName) {
        const useCard = !itemData?.[entityFieldName] && itemData?.__card_entity;
        schemaItem.context = { filter_entity: useCard ? "__card_entity" : entityFieldName };
      }
      const warn = this._fieldWarning(field, itemData);
      if (warn) this._warnMeta[`${index}:${key}`] = warn;
      else delete this._warnMeta[`${index}:${key}`];
      return schemaItem;
    };

    // Fields sharing a `group` are wrapped in a collapsible expandable section
    // (flattened, so the stored config keys stay top-level). Fields without a
    // group render flat, exactly as before.
    const schema = [];
    const groups = new Map();

    const place = (field, schemaItems) => {
      const group = field.group;
      if (!group) {
        schema.push(...schemaItems);
        return;
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
      section.schema.push(...schemaItems);
    };

    for (const [key, field] of fieldEntries) {
      // Arm fields render through their base family, never on their own
      if (field.arm_of && fields[field.arm_of]) continue;
      if (!this._fieldVisible(field, itemData)) continue;

      const arms = families[key];
      if (!arms) {
        place(field, [makeItem(key, field)]);
        continue;
      }

      const modeKey = `__${key}_mode`;
      const options = ["Static", ...arms.map((a) => a.field.arm || a.key)];
      const mode = options.includes(itemData?.[modeKey]) ? itemData[modeKey] : "Static";
      const activeArm = arms.find((a) => (a.field.arm || a.key) === mode);

      // Warn when an inactive arm still has data — the module's priority
      // rules decide which one wins, which is invisible otherwise.
      const othersWithData = arms
        .filter((a) => a !== activeArm && this._armHasData(itemData, a.key))
        .map((a) => a.field.arm || a.key);
      if (mode !== "Static" && this._armHasData(itemData, key)) {
        othersWithData.unshift("Static");
      }
      this._armMeta[`${index}:${modeKey}`] = {
        label: field.label || key,
        helper: othersWithData.length
          ? `Other modes also set: ${othersWithData.join(", ")} — the module's priority decides which wins.`
          : "",
      };

      const modeItem = {
        name: modeKey,
        selector: {
          select: { options, multiple: false, custom_value: false, mode: "dropdown" },
        },
        required: false,
      };
      const activeItem = activeArm
        ? makeItem(activeArm.key, activeArm.field)
        : makeItem(key, field);
      place(field, [modeItem, activeItem]);
    }

    return schema;
  }

  _computeLabel(schema, index = 0) {
    if (this._armMeta?.[`${index}:${schema.name}`]) return this._armMeta[`${index}:${schema.name}`].label;

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

  _computeHelper(schema, index = 0) {
    // An active warning replaces the regular helper — it's the thing the
    // user needs to read right now.
    const warn = this._warnMeta?.[`${index}:${schema.name}`];
    if (warn) return `⚠️ ${warn}`;

    if (this._armMeta?.[`${index}:${schema.name}`]) return this._armMeta[`${index}:${schema.name}`].helper;

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
      <ha-sortable
        handle-selector=".reorder-handle"
        draggable-selector=".bc-object-item"
        .disabled=${this.disabled}
        @item-moved=${this._itemMoved}
      >
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
      </ha-sortable>
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

  // Item data extended with synthetic `__*` UI-only keys (arm mode dropdowns):
  // defaults derived from which keys hold data, overridden by this item's
  // transient UI state. Never part of the emitted value.
  _itemFormData(item, index) {
    const fields = this.selector?.bc_object?.fields;
    return {
      ...item,
      ...this._armDefaults(fields, item),
      ...(this._uiState?.[index] || {}),
      // Always fresh — the card's entity, for attribute pickers on items
      // that inherit it (synthetic key, stripped from the emitted value).
      __card_entity: this._cardConfig?.entity,
    };
  }

  _renderItem(item, index) {
    const label = this._formatValue(item, this.selector) || `Item ${index + 1}`;
    const description = this._getDescription(item);
    const isMultiple = this.selector?.bc_object?.multiple || false;
    const formData = this._itemFormData(item, index);

    return html`
      <ha-expansion-panel outlined class="bc-object-item">
        <h4 slot="header" class="bc-object-item-header">
          ${isMultiple ? html`
            <ha-icon-button
              class="reorder-handle"
              @click=${(e) => e.stopPropagation()}
              .label="${this.hass?.localize?.("ui.common.move") || "Move"}"
            >
              <ha-icon icon="mdi:drag"></ha-icon>
            </ha-icon-button>
          ` : nothing}
          <div class="bc-object-item-title-container">
            <span class="bc-object-item-label">${label}</span>
            ${description ? html`<span class="bc-object-item-description">${description}</span>` : nothing}
          </div>
          <div class="button-container" @click=${(e) => e.stopPropagation()} @mousedown=${(e) => e.stopPropagation()} @touchstart=${(e) => e.stopPropagation()}>
            ${isMultiple ? html`
              <ha-icon-button
                class="duplicate-icon"
                @click=${() => this._duplicateItem(index)}
                ?disabled=${this.disabled}
                .label="${this.hass?.localize?.("ui.common.duplicate") || "Duplicate"}"
              >
                <ha-icon icon="mdi:content-copy"></ha-icon>
              </ha-icon-button>
            ` : nothing}
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
            .data=${formData}
            .schema=${this._generateSchema(this.selector?.bc_object?.fields, formData, index)}
            .disabled=${this.disabled}
            .computeLabel=${(schema) => this._computeLabel(schema, index)}
            .computeHelper=${(schema) => this._computeHelper(schema, index)}
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

  _duplicateItem(index) {
    const items = Array.isArray(this.value) ? this.value : [];
    const copy = JSON.parse(JSON.stringify(items[index] || {}));

    if (this._uiState) {
      const shifted = {};
      for (const [i, state] of Object.entries(this._uiState)) {
        const n = Number(i);
        shifted[n > index ? n + 1 : n] = state;
      }
      shifted[index + 1] = { ...(this._uiState[index] || {}) };
      this._uiState = shifted;
    }

    const newValue = [...items];
    newValue.splice(index + 1, 0, copy);
    fireEvent(this, "value-changed", { value: newValue });
  }

  // ha-sortable reports the DOM move; mirror it in the value array and remap
  // per-item UI state (arm mode dropdowns) so each item keeps its own state.
  _itemMoved(ev) {
    ev.stopPropagation();
    const { oldIndex, newIndex } = ev.detail;
    if (oldIndex === newIndex) return;

    const newValue = [...(Array.isArray(this.value) ? this.value : [])];
    const [moved] = newValue.splice(oldIndex, 1);
    newValue.splice(newIndex, 0, moved);

    if (this._uiState) {
      const remap = (n) => {
        if (n === oldIndex) return newIndex;
        if (oldIndex < newIndex) return n > oldIndex && n <= newIndex ? n - 1 : n;
        return n >= newIndex && n < oldIndex ? n + 1 : n;
      };
      const shifted = {};
      for (const [i, state] of Object.entries(this._uiState)) {
        shifted[remap(Number(i))] = state;
      }
      this._uiState = shifted;
    }

    fireEvent(this, "value-changed", { value: newValue });
  }

  _deleteItem(index) {
    const isMultiple = this.selector?.bc_object?.multiple || false;

    if (this._uiState) {
      const shifted = {};
      for (const [i, state] of Object.entries(this._uiState)) {
        const n = Number(i);
        if (n < index) shifted[n] = state;
        else if (n > index) shifted[n - 1] = state;
      }
      this._uiState = shifted;
    }

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

    // Split synthetic `__*` UI keys (arm mode dropdowns) out of the form
    // value: they stay in per-item element state, never in the stored config.
    const clean = {};
    const ui = {};
    for (const [k, v] of Object.entries(ev.detail.value || {})) {
      (k.startsWith("__") ? ui : clean)[k] = v;
    }
    this._uiState = { ...(this._uiState || {}) };
    this._uiState[index] = { ...(this._uiState[index] || {}), ...ui };
    this.requestUpdate();

    if (isMultiple) {
      const newValue = [...(this.value || [])];
      newValue[index] = clean;
      fireEvent(this, "value-changed", { value: newValue });
    } else {
      fireEvent(this, "value-changed", { value: clean });
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

    .delete-icon,
    .duplicate-icon {
      color: var(--secondary-text-color);
    }

    .reorder-handle {
      color: var(--secondary-text-color);
      cursor: grab;
      margin-right: 4px;
    }

    .reorder-handle ha-icon,
    .duplicate-icon ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
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

