# Bubble Card

Bubble Card is a minimalist card collection for Home Assistant with a nice pop-up touch.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card)](#) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Buy%20me%20a-beer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos)

## Table of contents

**[`Installation`](#installation)** | **[`Configuration`](#configuration)** | **[`Pop-up`](#pop-up)** | **[`Horizontal buttons stack`](#horizontal-buttons-stack)** | **[`Button`](#button)** | **[`Custom button`](#custom-button)** | **[`Cover`](#cover)** | **[`Separator`](#separator)** | **[`Empty column`](#empty-column)** | **[`Actions`](#tap-double-tap-and-hold-actions)** | **[`Full example`](#full-example)** | **[`Styling`](#styling)** | **[`Conflicts`](#custom-components-conflicts)** | **[`Help`](#help)** 


## Screenshots and features

<img width="2048" alt="Bubble Card Cover" src="https://github.com/Clooos/Bubble-Card/assets/36499953/681e99e0-17ce-471d-a71b-9ef8158af6d5">
<img width="2048" alt="Bubble Card 1" src="https://github.com/Clooos/Bubble-Card/assets/36499953/286d3c0d-677f-4bd7-8d7e-667754af9019">
<img width="2048" alt="Bubble Card 2" src="https://github.com/Clooos/Bubble-Card/assets/36499953/dd182185-a092-43f2-8b5e-b194da85bcb9">
<img width="2048" alt="Bubble Card 3" src="https://github.com/Clooos/Bubble-Card/assets/36499953/c348db22-f3c7-46e2-b3ff-3978fcb4eb42">
<img width="2048" alt="Bubble Card 4" src="https://github.com/Clooos/Bubble-Card/assets/36499953/ca92ad56-4e59-49e3-b050-39544ad523e2">
<img width="2048" alt="Bubble Card 5" src="https://github.com/Clooos/Bubble-Card/assets/36499953/252a61c6-dc93-40e4-991a-28979a02eafc">
<img width="2048" alt="Bubble Card Video Preview" src="https://github.com/Clooos/Bubble-Card/assets/36499953/6dd13476-42c5-427c-a4d8-ad4981fc2db7">

## Installation

### Without HACS

1. Download this file: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/bubble-card.js)
2. Add this file into your `<config>/www` folder
3. On your dashboard click on the icon at the right top corner then on `Edit dashboard`
4. Click again on that icon and then on `Manage resources`
5. Click on `Add resource`
6. Copy and paste this: `/local/bubble-card.js?v=1`
7. Click on `JavaScript Module` then `Create`
8. Go back and refresh your page
9. You can now click on `Add card` in the bottom right corner and search for `Bubble Card`
10. After any update of the file you will have to edit `/local/bubble-card.js?v=1` and change the version to any higher number

### With HACS

This method allows you to get updates directly in the HACS main page

1. Download HACS following the instructions on [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download/)
2. Proceed to the initial configuration following the instructions on [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. On your sidebar go to `HACS` > `Integrations`
4. click on the icon at the right top corner then on `Custom repositories`
5. For the repository add this: `https://github.com/Clooos/Bubble-Card`
6. For the category select `Lovelace` then click `Add`
7. Now click on `Bubble Card` then on the `Download` button
8. Go back on your dashboard and click on the icon at the right top corner then on `Edit dashboard`
9. You can now click on `Add card` in the bottom right corner and search for `Bubble Card`

Coming soon in the HACS default repo (still waiting for validation).

## Configuration

Most options can be configured in the GUI editor, please note that some cards don't have a preview in real time (for now).

### Main options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:bubble-card` | Type of the card |
| `card_type` | string | **Required** | `button`, `cover`, `empty-column`, `horizontal-buttons-stack`, `pop-up` or `separator` | Type of the Bubble Card, see below |
| `styles` | object list | Optional | Any CSS stylesheets | Allows you to customize your cards, see [styling](#styling) |

## Pop-up

This card allows you to convert any `vertical-stack` card into a pop-up. Each pop-up must have an unique hash (e.g. `'#kitchen'`), you can open them with any card that allows `navigation_path` or with the `horizontal-buttons-stack` that is included. This card come with an header for your pop-up, if you add an entity to this card you will have a button to toggle this entity in that header, you can also display the state of an entity (e.g. the temperature of a room).

1. To add a pop-up you first need to add a `vertical-stack` card to your dashboard
2. This `vertical-stack` must be after all your other cards and before your `horizontal-buttons-stack` if you have one
3. Now add a `Bubble Card` with the type `pop-up` in it
4. Just fill in the required inputs and the ones you need

### Options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `hash` | string | **Required** | Any unique hash (e.g. `'#kitchen'`) with ' ' | This is how you will open your pop-up |
| `name` | string | Optional but recommended | Any string | A name for your pop-up header |
| `icon` | string | Optional but recommended | Any `mdi:` icon | An icon for your pop-up header |
| `entity` | string | Optional | Any switchable entity | Display a button to toggle this entity |
| `state` | string | Optional | Any entity | Display its state in your pop-up header |
| `state_unit` | string | Optional | Any unit of measurement | An unit of measurement for the displayed state (e.g. `°F`, `°C`, `%`) |
| `width_desktop` | string | Optional | Any CSS value | Width on desktop (`100%` by default on mobile) |
| `is_sidebar_hidden` | boolean | Optional | `true` or `false` (default) | Fix the pop-up position if the sidebar is hidden on desktop |
| `margin_top_mobile` | string | Optional | Any CSS value | Top margin on mobile (e.g. `-56px` if your header is hidden) |
| `margin_top_desktop` | string | Optional | Any CSS value | Top margin on desktop (e.g. `50%` for an half sized pop-up) |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |

### Example

A pop-up
```yaml
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: '#kitchen'
    name: Kitchen
    icon: mdi:fridge
    entity: light.kitchen
    state: sensor.kitchen_temperature
    state_unit: °C
    width_desktop: 600px
    margin_top_mobile: 18px
    margin_top_desktop: 74px
```
A button to open the pop-up (not a Bubble Card one)
```yaml
type: button
tap_action:
  action: navigate
  navigation_path: '#kitchen'
name: Kitchen
icon: mdi:fridge
```

## Horizontal buttons stack

This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer. This card will have more features in the future.

### Options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Required** | The pop-up hash (e.g. `'#kitchen'`) with ' ' or any link | A link to open |
| `1_name` | string | Optional | Any string | A name for your button |
| `1_icon` | string | Optional | Any `mdi:` icon | An icon for your button |
| `1_entity` | string | Optional | Any light or light group | Display the color of that light in background |
| `1_pir_sensor` | string | Optional | Any binary sensor | At least one pir sensor or more for `auto_order` |
| `auto_order` | boolean | Optional | `true` or `false` (default) | Change the order of the buttons according to the room you just entered, **it need to be `false` if you don't have any `_pir_sensor` in your code** |

**The variables starting with a number defines your buttons, just change this number to add more buttons (see example below).**

### Example

```yaml
type: custom:bubble-card
card_type: horizontal-buttons-stack
auto_order: true
1_name: Living room
1_icon: mdi:sofa
1_link: '#living-room'
1_entity: light.living_room
1_pir_sensor: binary_sensor.living_room_motion
2_name: Kitchen
2_icon: mdi:fridge
2_link: '#kitchen'
2_entity: light.kitchen
2_pir_sensor: binary_sensor.kitchen_motion
3_name: Dining room
3_icon: mdi:silverware-fork-knife
3_link: '#dining-room'
3_entity: light.dining_room
3_pir_sensor: binary_sensor.dining_room_motion
```

## Button

This card can be a slider or a button, allowing you to toggle your entities or automations, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.

### Options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any switchable entity, any media player or any light | An entity to control |
| `button_type` | string | Optional | `switch` (default) or `slider` | The behavior of your button |
| `name` | string | Optional | Any string | A name for your button, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon or a link to a square image | An icon for your button, if not defined it will display the entity icon or the `entity-picture` |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |

### Example

```yaml
type: custom:bubble-card
card_type: button
button_type: slider
entity: light.kitchen_led
name: Kitchen LED
icon: mdi:led-strip-variant
```

## Custom button

This is a customizable button (similar to the switch button) that allows you to use all actions directly on the whole button allowing you to use it for almost everything. 

This is still experimental and more customizations are coming.

### Options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** (and soon optional) | Any entity that can be on/off or true/false, any media player, cover or light | An entity for the state of the button |
| `button_type` | string | **Required** | `custom` | The behavior of your button |
| `name` | string | Optional | Any string | A name for your button, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon or a link to a square image | An icon for your button, if not defined it will display the entity icon or the `entity-picture` |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on button click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on button double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on button hold, if undefined, `more-info` will be used. |

### Example

Here is an example of a button that toggle all the lights of a room and if you double tap or hold it, it will open a pop-up with all your other lights:

```yaml
type: custom:bubble-card
card_type: button
button_type: custom
entity: light.kitchen
name: Kitchen
icon: mdi:fridge
tap_action:
  action: toggle
double_tap_action:
  action: navigate
  navigation_path: '#kitchen'
hold_action:
  action: navigate
  navigation_path: '#kitchen'
```

## Cover

This card allows you to control your covers.

### Options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | A cover to control |
| `name` | string | Optional | Any string | A name for your cover, if not defined it will display the entity name |
| `icon_open` | string | Optional | Any `mdi:` icon | An icon for your open cover, if not defined it will display the default open cover icon |
| `icon_close` | string | Optional | Any `mdi:` icon | An icon for your closed cover, if not defined it will display the default closed cover icon |
| `open_service` | string | Optional | Any service or script | A service to open your cover, default to `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | A service to stop your cover, default to `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | A service to close your cover, default to `cover.close_cover` |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |

### Example

```yaml
type: custom:bubble-card
card_type: cover
entity: cover.kitchen
name: Kitchen
icon_open: mdi:roller-shade
icon_close: mdi:roller-shade-closed
```

## Separator

This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...

### Options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `name` | string | Optional but recommended | Any string | A name for your separator |
| `icon` | string | Optional but recommended | Any `mdi:` icon | An icon for your separator |

### Example

```yaml
type: custom:bubble-card
card_type: separator
name: Covers
icon: mdi:window-shutter
```

## Empty column

This card is here to fill an empty column. This is useful if you have an `horizontal-stack` in your pop-up with only one card. Take a look at the bottom right corner of the second screenshot to (don't) see it.

### Options

This card has no options.

### Example

```yaml
type: custom:bubble-card
card_type: empty-column
```

## Tap, double tap and hold actions

You can also use HA default tap actions, double tap actions and hold actions on the icons of the buttons, the pop-ups and the covers. This allows you to display the “more info” window by holding the icon and to turn on/off the lamp of a slider by a single tap for example. 

This is still experimental and only available in YAML for now.

### Options

| Name | Type | Supported options | Description |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Action to perform |
| `target` | object |  | Only works with `call-service`. Follows the [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Any path of your dashboard | Path to navigate to (e.g. `'#kitchen'` for opening a pop-up) when action defined as navigate |
| `url_path` | string | Any link | URL to open on click (e.g. `https://www.google.com`) when action is `url` |
| `service` | string | Any service | Service to call (e.g. `media_player.media_play_pause`) when `action` defined as `call-service` |
| `data` or `service_data` | object | Any service data | Service data to include (e.g. `entity_id: media_player.kitchen`) when `action` defined as `call-service` |
| `confirmation` | object | See [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Display a confirmation popup, overrides the default `confirmation` object |

### Example

```yaml
tap_action: 
  action: toggle 
double_tap_action: 
  action: call-service 
  service: script.dark_scene 
hold_action: 
  action: more-info
```

## Full example

Here is the raw code of my "Cuisine" pop-up (Kitchen in english) as seen in some screenshots :

```yaml
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    entity: light.cuisine
    icon: mdi:fridge-outline
    name: Cuisine
    hash: '#cuisine'
    state: sensor.cuisine_temperature
    state_unit: °C
    margin_top: 74px
    width_desktop: 600px
    margin_top_mobile: 18px
    margin_top_desktop: 74px
    styles: |
      #root {
        /* This is a fix for older Safari (for my wall mounted iPad) but it won't work on Firefox, this is optional */
        display: grid !important;
      }
  - type: custom:bubble-card
    card_type: separator
    name: Lampes
    icon: mdi:lightbulb
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: light.led_cuisine
        name: LED
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: light.bar_cuisine
        name: Bar
        icon: mdi:light-recessed
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: light.spots_cuisine
        name: Plan de travail
      - type: custom:bubble-card
        card_type: button
        button_type: switch
        entity: light.hotte_cuisine
        name: Hotte
  - type: custom:bubble-card
    card_type: separator
    name: Appareils
    icon: mdi:connection
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: media_player.google_nest_cuisine
        name: Google Mini
        icon: mdi:speaker
      - type: custom:bubble-card
        card_type: button
        button_type: switch
        entity: fan.hotte_cuisine
        name: Hotte
        icon: mdi:fan
  - type: custom:bubble-card
    card_type: separator
    name: Volets
    icon: mdi:window-shutter
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: cover
        entity: cover.cuisine
        name: Cuisine
        icon_open: mdi:blinds-horizontal
        icon_closed: mdi:blinds-horizontal-closed
      - type: custom:bubble-card
        card_type: empty-column
```

## Styling

You can directly use `styles: |` in YAML **without card-mod** which allows you to modify the CSS style of the pop-ups and all the other cards.

Please note that you will have to add `!important;` to some CSS styles that are already defined (see examples below).

Some cards needs a page refresh to display your CSS modifications (like the pop-ups).

### Examples

Here is how to change the pop-ups opacity:

```yaml
styles: | 
  #root { 
    opacity: 0.95; 
  }
```

To change the font size of any Bubble Card:

```yaml
styles: |
  ha-card { 
    font-size: 12px;
  }
```

To change the background color of a button:

```yaml
styles: | 
  ha-card > div > div > div { 
    background: blue !important; 
  }
```

Or the color of a slider:

```yaml
styles: |
  ha-card > div > div > div > div.range-fill { 
    background: blue !important; 
  }
```

The Bubble theme (like on the screenshots) can be found here: 
https://github.com/Clooos/Bubble

## Custom components conflicts

⚠️ For now there are some features that are not working with:

- UI Lovelace Minimalist (see https://github.com/Clooos/Bubble-Card/issues/41)

## Help

Feel free to open an [issue](https://github.com/Clooos/Bubble-Card/issues) if something is not working as expected. 

And for your questions you can go ask here on the forum to get some help from me or the community :

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) 

## Donate

If you like my project and want to support me, please consider making a donation. Any amount is welcome and very much appreciated.

[![Buy me a beer](https://img.shields.io/badge/Buy%20me%20a-beer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos)

Thank you everyone for your support, you all are my greatest motivation!
