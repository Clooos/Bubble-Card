# Bubble Card Module Editor schema documentation

This documentation covers all available options for creating editor schemas in Bubble Card modules. These schemas define the user interface presented to users when configuring your module.

<img width="455" alt="image" src="https://github.com/user-attachments/assets/6c04ebef-d8f7-4816-9006-808f80a7e14e" />

## Table of contents

- [Basic structure](#basic-structure)
- [Accessing configuration values in your module code](#accessing-configuration-values-in-your-module-code)
  - [Accessing configuration in JavaScript/CSS templates](#accessing-configuration-in-javascriptcss-templates)
  - [Tips for working with configuration values](#tips-for-working-with-configuration-values)
  - [Example: Complete module with editor and code](#example-complete-module-with-editor-and-code)
- [Field properties](#field-properties)
- [Field types](#field-types)
  - [Selector-based fields](#selector-based-fields-recommended)
    - [Text input selector](#text-input-selectors)
    - [Number selector](#number-selector)
    - [Boolean selector](#boolean-selector)
    - [Select selector](#select-selector)
    - [Color selector](#color-selector)
    - [Icon selector](#icon-selector)
    - [Entity selector](#entity-selector)
    - [Device selector](#device-selector)
    - [Area selector](#area-selector)
    - [Theme selector](#theme-selector)
    - [Action selector](#action-selector)
    - [Time selector](#time-selector)
    - [Date selector](#date-selector)
    - [Datetime selector](#datetime-selector)
    - [Media selector](#media-selector)
    - [Attribute selector](#attribute-selector)
    - [State selector](#state-selector)
    - [Target selector](#target-selector)
    - [Config entry selector](#config-entry-selector)
    - [Addon selector](#addon-selector)
  - [Legacy type-based fields](#legacy-type-based-fields)
    - [String field](#string-field)
    - [Integer field](#integer-field)
    - [Float field](#float-field)
    - [Boolean field](#boolean-field)
    - [Select field](#select-field)
    - [Multi-select field](#multi-select-field)
- [Advanced structure](#advanced-structure)
  - [Grid layout](#grid-layout)
  - [Expandable sections](#expandable-sections)
- [Best practices](#best-practices)
- [Example: Complete module editor schema](#example-complete-module-editor-schema)
- [References](#references)

---

## Basic structure

A module editor schema is an array of objects, where each object represents a form field:

```yaml
editor:
  - name: color
    label: "Color"
    selector:
      select:
        options:
          - label: "Red"
            value: "red"
          - label: "Blue"
            value: "blue"
  - name: icon_size
    label: "Icon Size"
    selector:
      number:
        min: 20
        max: 50
        unit_of_measurement: "px"
```

## Accessing configuration values in your module code

When creating a Bubble Card module, you'll need to access the values configured by users through the editor. These values are available in your module's code through the `this.config` object.

### Accessing configuration in JavaScript/CSS templates

In your module's `code` section, you can access the configured values using JavaScript template literals. The configuration values follow a specific structure:

```
this.config.module_id?.field_name
```

Where:
- `module_id` is the ID of your module as defined in your module definition
- `field_name` corresponds directly to the `name` property of the field in your editor schema

For example, if you have this editor schema:

```yaml
editor:
  - name: color                # This becomes "color" in your code
    label: "Background Color"
    selector:
      ui_color: {}
  - name: size                 # This becomes "size" in your code
    label: "Icon Size"
    selector:
      number:
        min: 10
        max: 50
        unit_of_measurement: "px"
  - name: show_icon            # This becomes "show_icon" in your code
    label: "Show Icon"
    selector:
      boolean: {}
```

Then in your module's `code` section, you would access these values like this:

```yaml
.bubble-icon-container {
  /* Access the "color" field */
  background: var(--${this.config.module_id?.color}-color) !important;
  
  /* Access the "size" field with a default value if undefined */
  --mdc-icon-size: ${this.config.module_id?.size || 24}px;
  
  /* Access the "show_icon" boolean field */
  display: ${this.config.module_id?.show_icon ? 'flex' : 'none'};
}
```

Remember to replace `module_id` with your actual module ID in your code.

### Tips for working with configuration values

- **Use optional chaining**: Always use the optional chaining operator (`?.`) when accessing nested configuration properties to prevent errors if the configuration is missing.

- **Provide default values if possible**: In some cases, use the OR operator (`||`) to supply default values in case the configuration value is undefined.

### Example: Complete module with editor and code

Here's a complete example of a module definition showing both the editor schema and how to use the values in the code:

```yaml
icon_container_color:
  name: 'Example: Customize the icon container color'
  version: v1.1
  creator: Clooos
  link: https://github.com/Clooos/Bubble-Card/discussions/1231
  unsupported:
    - horizontal-buttons-stack
    - separator
  description: |
    A list of predefined colors to customize the icon container color.
    Configure this module via the editor or in YAML, for example:
    <br><br>
    <code-block><pre>
    icon_container_color: 
        color: light-blue
    </pre></code-block>
  code: |
    .bubble-icon-container {
      opacity: 1 !important;
      background: var(--${this.config.icon_container_color?.color}-color) !important;
    }
  editor:
    - name: color
      label: Color
      selector:
        ui_color:
          include_none: true
```

## Field properties

Every field in your editor schema can have these common properties:

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | **Required**. The key used to store the value in the module configuration |
| `label` | string | The displayed name for the field |
| `required` | boolean | Whether the field is required |
| `disabled` | boolean | Whether the field is disabled |
| `default` | any | Default value if no value is provided |
| `description` | object | Additional info with optional `suffix` text |

## Field types

You can define fields using either the legacy type syntax or the modern selector syntax.

> [!IMPORTANT]
> **Not** all selector types have been tested with Bubble Card modules. Some selectors might not work correctly or might not be fully compatible. If you encounter an issue, please report it [here](https://github.com/Clooos/Bubble-Card/issues).

### Selector-based fields (Recommended)

Selector-based fields provide rich UI controls. Simply use the `selector` property with one of the following selector types:

#### Text input selectors

```yaml
- name: title
  label: "Title"
  selector:
    text: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `multiline` | boolean | Enable multiline text input |
| `type` | string | HTML input type (e.g., "email", "url", "password") |
| `autocomplete` | string | Browser autocomplete attribute |
| `prefix` | string | Text to display before the input |
| `suffix` | string | Text to display after the input |

#### Number selector

```yaml
- name: opacity
  label: "Opacity"
  selector:
    number:
      min: 0
      max: 100
      step: 5
      unit_of_measurement: "%"
```

| Option | Type | Description |
|--------|------|-------------|
| `min` | number | Minimum value |
| `max` | number | Maximum value |
| `step` | number | Step value |
| `mode` | string | Display mode: "box" or "slider" (default: "slider") |
| `unit_of_measurement` | string | Unit label |
| `min_step` | number | Minimum step value |

#### Boolean selector

```yaml
- name: show_icon
  label: "Show Icon"
  selector:
    boolean: {}
```

*No additionnal option for this selector.*

#### Select selector

```yaml
- name: theme
  label: "Theme"
  selector:
    select:
      options:
        - label: "Light"
          value: "light"
        - label: "Dark"
          value: "dark"
        - label: "Auto"
          value: "auto"
      multiple: false
      custom_value: false
      mode: "dropdown"
```

| Option | Type | Description |
|--------|------|-------------|
| `options` | array | List of options with label/value pairs, or simple string arrays |
| `translation_key` | string | Translation key for the options |
| `multiple` | boolean | Allow multiple selection |
| `custom_value` | boolean | Allow custom values |
| `mode` | string | Display mode: "dropdown" or "list" |

#### Color selector

```yaml
- name: background_color
  label: "Background Color"
  selector:
    ui_color: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `default_color` | string | Default color to use if no color is selected |
| `include_none` | boolean | Include an option to select no color |
| `include_state` | boolean | Include a color based on the entity state |

#### Icon selector

```yaml
- name: custom_icon
  label: "Custom Icon"
  selector:
    icon: {}
```

*No additionnal option for this selector.*

#### Entity selector

```yaml
- name: target_entity
  label: "Target Entity"
  selector:
    entity:
      filter:
        domain: light
```

| Option | Type | Description |
|--------|------|-------------|
| `filter.domain` | string \| string[] | Filter by entity domain(s) |
| `filter.device_class` | string \| string[] | Filter by device class(es) |
| `filter.integration` | string | Filter by integration |
| `filter.supported_features` | number \| number[] | Filter by supported features flags |
| `include_entities` | string[] | List of entities to include |
| `exclude_entities` | string[] | List of entities to exclude |
| `multiple` | boolean | Allow multiple selection |

#### Device selector

```yaml
- name: device
  label: "Device"
  selector:
    device:
      filter:
        integration: zwave
```

| Option | Type | Description |
|--------|------|-------------|
| `filter.integration` | string \| string[] | Filter by integration(s) |
| `filter.manufacturer` | string \| string[] | Filter by manufacturer(s) |
| `filter.model` | string \| string[] | Filter by model(s) |
| `entity.domain` | string \| string[] | Filter by entity domain(s) |
| `entity.device_class` | string \| string[] | Filter by entity device class(es) |
| `multiple` | boolean | Allow multiple selection |

#### Area selector

```yaml
- name: area
  label: "Area"
  selector:
    area: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `entity.domain` | string \| string[] | Filter by entities in area with domain(s) |
| `entity.device_class` | string \| string[] | Filter by entities in area with device class(es) |
| `device.integration` | string \| string[] | Filter by devices in area with integration(s) |
| `device.manufacturer` | string \| string[] | Filter by devices in area with manufacturer(s) |
| `device.model` | string \| string[] | Filter by devices in area with model(s) |
| `multiple` | boolean | Allow multiple selection |

#### Theme selector

```yaml
- name: card_theme
  label: "Card Theme"
  selector:
    theme: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `include_default` | boolean | Include the default theme |

#### Action selector

```yaml
- name: tap_action
  label: "Tap Action"
  selector:
    action: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `actions` | string[] | List of allowed actions (e.g., ["more-info", "toggle", "call-service", "navigate", "url", "none"]) |

#### Time selector

```yaml
- name: start_time
  label: "Start Time"
  selector:
    time: {}
```

*Aucune option supplémentaire pour ce sélecteur.*

#### Date selector

```yaml
- name: event_date
  label: "Event Date"
  selector:
    date: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `min` | string | Minimum date in ISO format (YYYY-MM-DD) |
| `max` | string | Maximum date in ISO format (YYYY-MM-DD) |

#### Datetime selector

```yaml
- name: event_datetime
  label: "Event Date and Time"
  selector:
    datetime: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `min` | string | Minimum datetime in ISO format |
| `max` | string | Maximum datetime in ISO format |

#### Media selector

```yaml
- name: media
  label: "Media"
  selector:
    media: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `filter_media_source` | boolean | Filter media sources |
| `filter_local_media` | boolean | Filter local media |

#### Attribute selector

```yaml
- name: attribute
  label: "Attribute"
  selector:
    attribute:
      entity_id: sensor.temperature
```

| Option | Type | Description |
|--------|------|-------------|
| `entity_id` | string | Required: Entity ID to select attribute from |
| `hide_attributes` | string[] | List of attributes to exclude |

#### State selector

```yaml
- name: target_state
  label: "Target State"
  selector:
    state:
      entity_id: climate.living_room
```

| Option | Type | Description |
|--------|------|-------------|
| `entity_id` | string | Required: Entity ID to select state from |
| `attribute` | string | Select from entity attribute rather than state |

#### Target selector

```yaml
- name: target
  label: "Target"
  selector:
    target:
      entity:
        domain: light
```

| Option | Type | Description |
|--------|------|-------------|
| `entity` | object | Entity filters (same as entity selector) |
| `device` | object | Device filters (same as device selector) |
| `area` | object | Area filters (same as area selector) |

#### Config entry selector

```yaml
- name: config_entry
  label: "Integration"
  selector:
    config_entry:
      domain: zwave_js
```

| Option | Type | Description |
|--------|------|-------------|
| `domain` | string | Filter by domain |

#### Addon selector

```yaml
- name: addon
  label: "Add-on"
  selector:
    addon: {}
```

| Option | Type | Description |
|--------|------|-------------|
| `name` | string | Filter by add-on name |

### Legacy type-based fields

While selector-based fields are recommended, you can also use the legacy type syntax:

#### String field

```yaml
- name: title
  label: "Title"
  type: string
```

#### Integer field

```yaml
- name: count
  label: "Count"
  type: integer
  valueMin: 0
  valueMax: 100
```

#### Float field

```yaml
- name: opacity
  label: "Opacity"
  type: float
```

#### Boolean field

```yaml
- name: enabled
  label: "Enabled"
  type: boolean
```

#### Select field

```yaml
- name: mode
  label: "Mode"
  type: select
  options:
    - ["auto", "Automatic"]
    - ["manual", "Manual"]
```

#### Multi-select field

```yaml
- name: features
  label: "Features"
  type: multi_select
  options:
    - ["animations", "Animations"]
    - ["colors", "Custom Colors"]
    - ["icons", "Custom Icons"]
```

## Advanced structure

### Grid layout

You can organize fields in a grid layout:

```yaml
- type: grid
  name: appearance
  schema:
    - name: color
      label: "Color"
      selector:
        select:
          options:
            - label: "Red"
              value: "red"
            - label: "Blue"
              value: "blue"
    - name: size
      label: "Size"
      selector:
        number:
          min: 10
          max: 100
```

| Option | Type | Description |
|--------|------|-------------|
| `column_min_width` | string | Minimum column width (CSS value) |
| `schema` | array | Fields in the grid |

### Expandable sections

You can create collapsible sections:

```yaml
- type: expandable
  name: advanced_settings
  title: "Advanced Settings"
  icon: "mdi:tune"
  expanded: false
  schema:
    - name: animation_speed
      label: "Animation Speed"
      selector:
        number:
          min: 1
          max: 10
```

| Option | Type | Description |
|--------|------|-------------|
| `title` | string | Section title |
| `icon` | string | Section icon (Material Design Icons) |
| `expanded` | boolean | Initially expanded |
| `schema` | array | Fields in the section |

## Best practices

1. **Keep it simple**: Only include fields that users actually need to configure
2. **Use clear labels**: Make field labels descriptive but concise
3. **Provide defaults**: Set sensible default values where possible
4. **Group related fields**: Use grid or expandable sections to organize complex options
5. **Add descriptions**: Use the description property to explain complex options
6. **Test your UI**: Ensure your form is user-friendly before sharing

## Example: Complete module editor schema

```yaml
editor:
  - name: color_mode
    label: "Color Mode"
    selector:
      select:
        options:
          - label: "Custom Color"
            value: "custom"
          - label: "Theme Color"
            value: "theme"
  - name: custom_color
    label: "Custom Color"
    selector:
      ui_color: {}
  - type: expandable
    title: "Advanced Settings"
    expanded: false
    schema:
      - name: animation
        label: "Animation"
        selector:
          boolean: {}
      - name: animation_speed
        label: "Animation Speed"
        selector:
          number:
            min: 1
            max: 10
            step: 0.1
      - name: opacity
        label: "Opacity"
        selector:
          number:
            min: 0
            max: 100
            unit_of_measurement: "%"
```

This schema creates a form with a select dropdown for color mode, a color picker, and an expandable section with animation controls. This is the example shown in the screenshot at the top of this documentation.

## References

This documentation is based on Home Assistant's form schemas:
- [Home Assistant Form Types](https://github.com/home-assistant/frontend/blob/03a415beff6e6f9c87a95287804f6c03c8fef3d5/src/components/ha-form/types.ts)
- [Home Assistant Selectors](https://github.com/home-assistant/frontend/blob/03a415beff6e6f9c87a95287804f6c03c8fef3d5/src/data/selector.ts) 
