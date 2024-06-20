# Bubble Card

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card is a minimalist and customizable card collection for Home Assistant with a nice pop-up touch.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card)](#) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR)

<br>

## Table of contents

**[`Installation`](#installation)**  **[`Configuration`](#configuration)**  **[`Pop-up`](#pop-up)**  **[`Horizontal buttons stack`](#horizontal-buttons-stack)**  **[`Button`](#button)**  **[`Media player`](#media-player)**  **[`Cover`](#cover)**  **[`Separator`](#separator)**  **[`Empty column`](#empty-column)**  **[`Sub-buttons`](#sub-buttons)**  **[`Card layouts`](#card-layouts)**  **[`Actions`](#tap-double-tap-and-hold-actions)**  **[`Styling`](#styling)**  **[`Templates`](#templates)**  **[`Conflicts`](#custom-components-conflicts)**  **[`Help`](#help)**  **[`Donate`](#donate)**

<br>

## Installation

**Home Assistant lowest supported version:** 2023.9.0

<details>

<summary>Without HACS</summary>

<br>

1. Download these files: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js) and [bubble-pop-up-fix.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-pop-up-fix.js)
2. Add these files to your `<config>/www` folder
3. On your dashboard click on the icon at the right top corner then on `Edit dashboard`
4. Click again on that icon and then click on `Manage resources`
5. Click on `Add resource`
6. Copy and paste this: `/local/bubble-card.js?v=1`
7. Click on `JavaScript Module` then `Create`
8. Go back and refresh your page
9. You can now click on `Add card` in the bottom right corner and search for `Bubble Card`
10. After any update of the file you will have to edit `/local/bubble-card.js?v=1` and change the version to any higher number

If it's not working, just try to clear your browser cache.`

</details>

<details>

<summary>With HACS (Recommended)</summary>

<br>

This method allows you to get updates directly on the HACS main page

1. If HACS is not installed yet, download it following the instructions on [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download/)
2. Proceed to the HACS initial configuration following the instructions on [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. On your sidebar go to `HACS` > `Frontend`
4. Click on the `+` button at the bottom right corner
5. Now search for `Bubble Card` and then click on the button at the bottom right corner to download it
6. Go back on your dashboard and click on the icon at the right top corner then on `Edit dashboard`
7. You can now click on `Add card` in the bottom right corner and search for `Bubble Card`

If it's not working, try to clear your browser cache.

#### Videos

There is also a detailed setup video from **BeardedTinker**, thank you so much to you!  
▶ [YouTube - Pop-up cards with Bubble Card in Home Assistant](https://www.youtube.com/watch?v=oCpxhNk5JkE)

And also a video for the German users from **smart-live.net**, thanks a lot to you too!  
▶ [YouTube - Home Assistant Dashboard Bubble Card - Eine der Besten Karten 2023?](https://youtu.be/6ju6mTntvMI?si=EGvKm4qwjhcZdTyl)

</details>

<br>

## Configuration

All options can be configured in the Home Assistant editor. But you can find more details and the YAML in the documentation below.

<details>

**<summary>Main options (YAML + description)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:bubble-card` | Type of the card |
| `card_type` | string | **Required** | `button`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up` or `separator` | Type of the Bubble Card, see below |
| `styles` | object list | Optional | Any CSS stylesheets | Allows you to customize your Bubble Card CSS, see [styling](#styling) |

</details>

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

This card allows you to convert any vertical stack into a pop-up. Each pop-up is **hidden by default** and can be opened by targeting its link (e.g. `'#pop-up-name'`), with any card that supports the `navigate` [action](#tap-double-tap-and-hold-actions), or with the [horizontal buttons stack](#horizontal-buttons-stack) that is included.

> [!IMPORTANT]  
> This card must be placed within a [vertical stack](https://www.home-assistant.io/dashboards/vertical-stack/) card at the topmost position to function properly. To avoid misalignment with your view, place vertical stacks/pop-ups after all other dashboard cards. In a section view (recommended), you can place them anywhere. It should be called from the same view to work.

> [!TIP]
> ### Pop-up trigger 
> This feature allows you to open a pop-up based on the state of any entity, for example, you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.
> <details>
> <summary>Opening a pop-up when a <code>binary_sensor</code> is <code>on</code></summary>
> <br>
>
> ```yaml
> type: custom:bubble-card
> card_type: pop-up
> hash: '#kitchen'
> name: Security
> icon: mdi:video
> trigger_entity: binary_sensor.front_door_motion
> trigger_state: 'on'
> trigger_close: true
> ```
> 
> </details>
>
> ### Different ways to close a pop-up 
> They are many ways to close a pop-up. For instance, you can swipe from the pop-up header to the bottom, by doing a long swipe inside the pop-up to the bottom, by pressing Escape on desktop, by removing the hash in the URL or by simply pressing the close button.
>
> ### Pop-up initialization fix
> If you notice that pop-up content appears upon page load, consider installing this fix as an additional module.
> <details>
> <summary>Installation</summary>
> <br>
>
> You can do this by adding `bubble-pop-up-fix.js` to your `configuration.yaml` like so:
> ```yaml
> frontend:
>   extra_module_url:
>     - /hacsfiles/Bubble-Card/bubble-pop-up-fix.js
> ```
> If you didn't install it with HACS, change the path accordingly. Then, clear your browser cache.
> 
> For Android Home Assistant Companion App users, you can close the app, then clear the app cache. If it's still not working, you can close and restart the app again.
> 
> For iOS Home Assistant Companion App users, you can go to your Home Assistant settings, then navigate to Companion App > Debug > Clear Frontend Cache (or something similar), then refresh the page or restart the app.
> 
> For previous users of the **Optimized mode**, you will need to replace your `type: custom:bubble-pop-up` with this in YAML mode:
> 
> ```yaml
> type: vertical-stack
> cards:
>   - type: custom:bubble-card
>     card_type: pop-up
> ```
> 
> </details>

### Pop-up options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `hash` | string | **Required** | Any unique hash (e.g. `'#kitchen'`) with ' ' | This is how you will open your pop-up |
| `auto_close` | string | Optional | A timeout in milliseconds (e.g. `10000` for 10s) | Auto close the pop-up after a timeout |
| `close_on_click` | boolean | Optional | `true` or `false` (default) | Automatically close the pop-up after any interaction |
| `close_by_clicking_outside` | boolean | Optional | `true` (default) or `false` | Close the pop-up by clicking outside of it |
| `width_desktop` | string | Optional | Any CSS value | Width on desktop (`100%` by default on mobile) |
| `margin` | string | Optional | Any CSS value | Use this **only** if your pop-up is not well centered on mobile (e.g. `13px`) |
| `margin_top_mobile` | string | Optional | Any CSS value | Top margin on mobile (e.g. `-56px` if your header is hidden) |
| `margin_top_desktop` | string | Optional | Any CSS value | Top margin on desktop (e.g. `50vh` for a half-sized pop-up or `calc(100vh - 400px)` for a fixed height of `400px`) |
| `bg_color` | string | Optional | Any hex, rgb or rgba value | The background color of your pop-up (e.g. `#ffffff` for a white background) |
| `bg_opacity` | string | Optional | Any value from `0` to `100` | The background opacity of your pop-up (e.g. `100` for no transparency) |
| `bg_blur` | string | Optional | Any value from `0` to `100` | The background blur effect of your pop-up, **this only work if `bg_opacity` is not set to `100`** (e.g. `0` for no blur)|
| `shadow_opacity` | string | Optional | Any value from `0` to `100` | The shadow opacity of your pop-up (e.g. `0` to hide it) |
| `hide_backdrop` | boolean | Optional | `true` or `false` (default) | Set this to true on the first pop-up of your main dashboard to disable the backdrop on all pop-ups. |
| `background_update` | boolean | Optional | `true` or `false` (default) | Update pop-up content in background (not recommended) |
| `trigger_entity` | string | Optional | Any entity | Open this pop-up based on the state of any entity |
| `trigger_state` | string | Optional (**Required** if `trigger_entity` is defined) | Any entity state | Entity state to open the pop-up |
| `trigger_close` | boolean | Optional | `true` or `false` (default) | Close the pop-up when `trigger_state` is different |
| `card_layout` | string | Optional | `normal` (default), `large`, `large-2-rows` | Styling layout of the header, see [card layouts](#card-layouts) |
| You also have access to [all the button settings](#button) for the header of the pop-up. | | Optional | | If undefined no header will be shown |

</details>

#### Examples

<details>
  
<summary>How to create a pop-up in the editor</summary>

<br>
 
1. To add a pop-up you first need to add a `vertical-stack` card to your dashboard
2. This `vertical-stack` must be before all your other cards in your view order
3. Now add a `Bubble Card` with the `Pop-up` type
4. Just fill in the `Hash` input and the ones you need

</details>

<details>

<summary>A pop-up</summary>

<br>

```yaml
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: '#kitchen'
    name: Kitchen
    icon: mdi:fridge
    entity: light.kitchen
```

</details>
<details>

<summary>A button to open the pop-up</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: name
name: Kitchen
icon: mdi:fridge
button_action:
  tap_action:
    action: navigate
    navigation_path: '#kitchen'
```

</details>

<details>

<summary>A pop-up with a fixed height</summary>

<br>

Replace `400px` with the size you need.

```yaml
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: '#kitchen'
    name: Kitchen
    icon: mdi:fridge
    entity: light.kitchen
    margin_top_mobile: calc(100vh - 400px)
    margin_top_desktop: calc(100vh - 400px)
```

</details>

<br>

---

<br>

## Horizontal buttons stack

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

This card is a good companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion/occupancy sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible, and acts as a footer.

> [!IMPORTANT]  
> This card has to be the last one in your view (after every card and pop-up). It can't be inside any stack.

### Horizontal buttons stack options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Required** | The pop-up hash (e.g. `'#kitchen'`) with ' ' or any link | A link to open |
| `1_name` | string | Optional | Any string | A name for your button |
| `1_icon` | string | Optional | Any `mdi:` icon | An icon for your button |
| `1_entity` | string | Optional | Any light or light group | Display the color of that light in background |
| `1_pir_sensor` | string | Optional | Any binary sensor | At least one pir sensor or more for `auto_order`, in fact it also works with any entity type, for example you can add light groups and the order will change based on the last changed states. |
| `auto_order` | boolean | Optional | `true` or `false` (default) | Change the order of the buttons according to the `_pir_sensor` last changed time, **it needs to be `false` if you don't have any `_pir_sensor` in your code** |
| `margin` | string | Optional | Any CSS value | Use this **only** if your `horizontal-buttons-stack` is not well centered on mobile (e.g. `13px`) |
| `width_desktop` | string | Optional | Any CSS value | Width on desktop (`100%` by default on mobile) |
| `is_sidebar_hidden` | boolean | Optional | `true` or `false` (default) | Fix the horizontal buttons stack position if the sidebar is hidden on the desktop (only if you have made a modification to hide it yourself) |
| `rise_animation` | boolean | Optional | `true` (default) or `false` | Set this to `false` to disable the animation that activates once the page has loaded |
| `highlight_current_view` | boolean | Optional | `true` or `false` (default) | Highlight current hash / view with a smooth animation |
| `hide_gradient` | boolean | Optional | `true` or `false` (default) | Set this to `false` to hide the gradient |

> [!IMPORTANT]  
> The variables starting with a number define your buttons, just change this number to add more buttons (see example below).

</details>

#### Example

<details>

<summary>An horizontal buttons stack that reorganize itself based on occupancy sensors</summary>

<br>

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

</details>

<br>

---

<br>

## Button

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

This card allows you to control your entities and can be customized in many ways. To access color / control of an entity, simply tap on the icon.

> [!TIP]
> ### What are the differences between all the button types?
>
> - **The button switch** is the default one. By default, it toggles an entity and its background color changes based on the entity’s state or the color of a light.
>
> - **The button slider** can control the brightness of a light, the volume of a media player, the position of a cover, and it also supports input numbers. Its background color can change based on the color of a light.
>
> - **The button state** is perfect for displaying information from a sensor or any entity. When you press it, it will show the "More info" panel of the entity. Its background color does not change.
>
> - **The button name** is the only one that doesn't need an entity and allows you to display a short text, a name or a title. You can also add some actions to it. Its background color does not change.

### Button options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | An entity to control |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | The behavior of your button |
| `name` | string | Optional | Any string | A name for your button, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon | An icon for your button, if not defined it will display the entity icon or the `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Give the priority to the icon instead of the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Allow to change the default actions on button click. Not available for the `slider` type. |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |
| `card_layout` | string | Optional | `normal` (default), `large`, `large-2-rows` | Styling layout of the card, see [card layouts](#card-layouts) |
| `columns` | string | Optional | `1`, `2`, `3` or `4` (default) | Number of columns when placed in a **section view** (e.g. `2` is 2/4) |
| `rows` | string | Optional | `1` (default), `2`, `3` or `4` | Number of rows when placed in a **section view** (e.g. `2` is 2/4) |
| `sub_button` | object | Optional | See [sub-buttons](#sub-buttons) | Add customized buttons fixed to the right |

</details>

#### Examples

<details>

<summary>A slider button that can control the brightness of a light</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: slider
entity: light.kitchen_led
name: Kitchen LED
icon: mdi:led-strip-variant
```

</details>

<details>

<summary>A button with all the options</summary>

<br>

```yaml
entity: light.your_light
button_type: switch
show_icon: true
force_icon: true
show_name: true
show_last_changed: true
show_state: true
show_last_updated: true
show_attribute: true
attribute: brightness
scrolling_effect: true
card_layout: large
button_action:
  tap_action:
    action: toggle
tap_action:
  action: more-info
sub_button:
  - entity: light.your_light
    icon: ''
    show_state: false
    show_attribute: true
    attribute: brightness
    show_icon: false
    show_background: false
    show_name: false
```

</details>

<br>

---

<br>

## Media player

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

This card allows you to control a media player. You can tap on the icon to get more control.

### Media player options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | The media player to control |
| `name` | string | Optional | Any string | A name for your media player, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon | An icon for your media player, if not defined it will display the entity icon or the `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Give the priority to the icon instead of the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |
| `card_layout` | string | Optional | `normal` (default), `large`, `large-2-rows` | Styling layout of the card, see [card layouts](#card-layouts) |
| `columns` | string | Optional | `1`, `2`, `3` or `4` (default) | Number of columns when placed in a **section view** (e.g. `2` is 2/4) |
| `rows` | string | Optional | `1` (default), `2`, `3` or `4` | Number of rows when placed in a **section view** |
| `sub_button` | object | Optional | See [sub-buttons](#sub-buttons) | Add customized buttons fixed to the right |
| `hide` | object | Optional | See below | Show or hide buttons |

#### Hide options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` (default) or `false` | Show or hide the play/pause button |
| `volume_button` | boolean | Optional | `true` (default) or `false` | Show or hide the volume button |
| `previous_button` | boolean | Optional | `true` (default) or `false` | Show or hide the previous button |
| `next_button` | boolean | Optional | `true` (default) or `false` | Show or hide the next button |
| `power_button` | boolean | Optional | `true` (default) or `false` | Show or hide the power button |


</details>

#### Examples

<details>

<summary>A media player with all the options</summary>

<br>

```yaml
type: custom:bubble-card
card_type: media-player
name: Media player
entity: media_player.your_media_player
show_state: true
show_last_updated: true
show_attribute: true
attribute: assumed_state
card_layout: large
scrolling_effect: false
show_icon: false
force_icon: true
show_name: false
show_last_changed: true
columns: 2
rows: 1
tap_action:
  action: toggle
hide:
  play_pause_button: true
  volume_button: true
  previous_button: true
  next_button: true
  power_button: true
sub_button:
  - entity: media_player.salon_2
    icon: mdi:volume-high
    name: Volume level
    tap_action:
      action: more-info
    show_name: false
    show_state: false
    show_last_updated: false
    show_attribute: true
    show_background: false
    attribute: volume_level
```

</details>

<br>

---

<br>

## Cover

![readme-cover](https://github.com/Clooos/Bubble-Card/assets/36499953/27d1c329-76ab-480b-b424-c79c9e68c788)

This card allows you to control your covers.

### Cover options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | A cover to control |
| `name` | string | Optional | Any string | A name for your cover, if not defined it will display the entity name |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Give the priority to the icon instead of the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `icon_open` | string | Optional | Any `mdi:` icon | An icon for your open cover, if not defined it will display the default open cover icon |
| `icon_close` | string | Optional | Any `mdi:` icon | An icon for your closed cover, if not defined it will display the default closed cover icon |
| `icon_up` | string | Optional | Any `mdi:` icon | An icon for your open cover button, if not defined it will display the default open cover icon |
| `icon_down` | string | Optional | Any `mdi:` icon | An icon for your close cover button, if not defined it will display the default close cover icon |
| `open_service` | string | Optional | Any service or script | A service to open your cover, default to `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | A service to stop your cover, default to `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | A service to close your cover, default to `cover.close_cover` |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |
| `card_layout` | string | Optional | `normal` (default), `large`, `large-2-rows` | Styling layout of the card, see [card layouts](#card-layouts) |
| `columns` | string | Optional | `1`, `2`, `3` or `4` (default) | Number of columns when placed in a **section view** (e.g. `2` is 2/4) |
| `rows` | string | Optional | `1` (default), `2`, `3` or `4` | Number of rows when placed in a **section view** |
| `sub_button` | object | Optional | See [sub-buttons](#sub-buttons) | Add customized buttons fixed to the right |

</details>

#### Example

<details>

<summary>A card that can control a roller shade</summary>

<br>

```yaml
type: custom:bubble-card
card_type: cover
entity: cover.kitchen
name: Kitchen
icon_open: mdi:roller-shade
icon_close: mdi:roller-shade-closed
```

</details>

<br>

---

<br>

## Separator

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...

### Separator options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `name` | string | Optional but recommended | Any string | A name for your separator |
| `icon` | string | Optional but recommended | Any `mdi:` icon | An icon for your separator |
| `card_layout` | string | Optional | `normal` (default), `large`, `large-2-rows` | Styling layout of the card, see [card layouts](#card-layouts) |
| `columns` | string | Optional | `1`, `2`, `3` or `4` (default) | Number of columns when placed in a **section view** (e.g. `2` is 2/4) |
| `rows` | string | Optional | `1` (default), `2`, `3` or `4` | Number of rows when placed in a **section view** |
| `sub_button` | object | Optional | See [sub-buttons](#sub-buttons) | Add customized buttons fixed to the right |

</details>

#### Example

<details>

<summary>A separator/divider for a "Covers" section</summary>

<br>

```yaml
type: custom:bubble-card
card_type: separator
name: Covers
icon: mdi:window-shutter
```

</details>

<br>

---

<br>

## Empty column

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

This card is here to fill an empty column. This is useful if you have an `horizontal-stack` in your pop-up with only one card. Take a look at the bottom right corner of this screenshot to (not) see it.

### Empty column options

This card has no options and doesn’t supports [styling](#styling).

#### Example

<details>

<summary>An empty column in an horizontal stack</summary>

<br>

```yaml
type: horizontal-stack
cards:
  - type: custom:bubble-card
    card_type: button
    ...
  - type: custom:bubble-card
    card_type: empty-column
```

</details>

<br>

---

<br>

## Sub-buttons

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

In every cards that supports that option you can add sub-buttons to customize your cards even more. You can for exemple create a button that can control a vacuum, a weather card or almost anything that you can come up with. These sub-buttons supports the tap actions and most of the button options.

### Sub-buttons options

<details>

**<summary>Options (YAML + description)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | Optional | Any entity | An entity to control |
| `name` | string | Optional | Any string | A name for your sub-button, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon | An icon for your sub-button, if not defined it will display the entity icon |
| `show_background` | boolean | Optional | `true` (default) or `false` | Show a background for your sub-button, it will change its color based on your entity state |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` or `false` (default) | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on sub-button click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on sub-button double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on sub-button hold, if undefined, `more-info` will be used. |

</details>

#### Examples

<details>

<summary>A button with some sub-buttons to makes a vacuum card (like on the screenshot)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: switch
name: Vacuum
entity: vacuum.downstairs
icon: mdi:robot-vacuum
show_state: true
show_last_changed: true
tap_action:
  action: more-info
button_action:
  tap_action:
    action: more-info
sub_button:
  - name: Battery
    icon: mdi:battery
    show_name: false
    show_icon: true
    show_background: false
    show_attribute: true
    attribute: battery_level
  - name: Return to dock
    icon: mdi:home
    show_background: false
    tap_action:
      action: call-service
      service: vacuum.return_to_base
      target:
        entity_id: vacuum.downstairs
  - name: Pause
    icon: mdi:pause
    show_background: false
    tap_action:
      action: call-service
      service: vacuum.pause
      target:
        entity_id: vacuum.downstairs
  - name: Start
    icon: mdi:play
    tap_action:
      action: call-service
      service: vacuum.start
      target:
        entity_id: vacuum.downstairs
styles: >-
  .bubble-button-card-container {
    /* Change the background color when the vacuum get an error (optional), more details in the styles template section */
    background: ${state === 'error' ? 'rgb(200, 80, 40)' : ''} !important;
  }
  /* Change the first sub-button battery icon based on the battery_icon attribute, more details in the styles template section */
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].attributes.battery_icon)}
```

</details>

<details>

<summary>A button slider with a sub-button that shows the brightness and one that toggle the light (like on the screenshot)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: slider
name: Kitchen
entity: light.kitchen
icon: mdi:fridge-outline
show_last_updated: true
sub_button:
  - name: Brightness
    icon: mdi:fridge-outline
    show_icon: false
    show_background: false
    show_attribute: true
    attribute: brightness
  - name: Toggle button
    icon: mdi:lightbulb
    tap_action:
      action: toggle
```

</details>

<details>

<summary>A button that shows the inside and outside temperature with the weather for today and tomorrow (screenshot included)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Bad luck for me it's cloudy all the time but all the icons are changing based on the weather.

```yaml
type: custom:bubble-card
card_type: button
button_type: state
entity: weather.openweathermap
name: Weather
show_state: true
card_layout: large-2-rows
sub_button:
  - name: Home temperature
    icon: mdi:home-thermometer-outline
    entity: sensor.home_temperature
    show_state: true
    show_icon: true
    show_background: false
  - name: Outside temperature
    entity: sensor.outside_temperature
    show_state: true
    show_background: false
  - name: Today
    entity: sensor.home_realfeel_temperature_max_0d
    show_name: true
    show_state: true
    tap_action:
      action: more-info
  - name: Tomorrow
    entity: sensor.home_realfeel_temperature_max_1d
    show_name: true
    show_state: true
    show_background: false
styles: >-
  /* Change the third and fourth sub-button icon based on the forecast.condition attribute, more details in the styles template section */
  ${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}
  ${subButtonIcon[3].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[1]?.condition))}
```

</details>

<br>

---

<br>

## Card layouts

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card fully supports the Home Assistant section view, you can change the card layout to make the card bigger and also change the number of columns or rows the card should occupy in your section view (only on the cards that support that option). These layouts are also supported in all other view types.

<details>

**<summary>Available card layouts</summary>**

| Layout | Description |
| --- | --- |
| `normal` | The regular layout (not optimized for the section view) |
| `large` | A larger layout (optimized for the section view) |
| `large_2_rows` | A larger layout with 2 rows of sub-buttons (optimized for the section view) |

</details>

#### Example

<details>

<summary>A large button that shows energy statistics with 2 rows of sub-buttons (screenshot included)</summary>

<br>

<img width="547" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/faa643d5-5d1e-488d-b4a5-6bedd043c747">

```yaml
type: custom:bubble-card
card_type: button
button_type: state
card_layout: large-2-rows
name: Energy
entity: sensor.current_power_production
icon: mdi:home-lightning-bolt-outline
show_state: true
button_action:
  tap_action:
    action: navigate
    navigation_path: '#energy'
sub_button:
  - entity: sensor.electricity_counter
    icon: mdi:counter
    show_background: false
    show_state: true
    tap_action:
      action: more-info
  - entity: sensor.today_s_energy_production
    show_state: true
    show_background: false
  - entity: sensor.average_daily_consumption
    show_background: false
    show_state: true
  - entity: sensor.this_week_production
    show_state: true
    show_background: false
    icon: mdi:calendar-week
```

</details>

<br>

---

<br>

## Tap, double tap and hold actions

You can also use Home Assistant default tap actions, double tap actions and hold actions on the cards that supports this option. For example, this allows you to display the “more info” window by holding a button icon or running a service when a sub-button is pressed.

### Action options

<details>

**<summary>Options (YAML + description)</summary>**

| Name | Type | Supported options | Description |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Action to perform |
| `target` | object |  | Only works with `call-service`. Follows the [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Any path of your dashboard | Path to navigate to (e.g. `'#kitchen'` for opening a pop-up) when action defined as navigate |
| `url_path` | string | Any link | URL to open on click (e.g. `https://www.google.com`) when action is `url` |
| `service` | string | Any service | Service to call (e.g. `media_player.media_play_pause`) when `action` defined as `call-service` |
| `data` or `service_data` | object | Any service data | Service data to include (e.g. `entity_id: media_player.kitchen`) when `action` defined as `call-service` |
| `confirmation` | object | See [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Display a confirmation pop-up (not a Bubble Card one), overrides the default `confirmation` object |

</details>

#### Example

<details>

<summary>A button to open a pop-up</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: name
name: Kitchen
icon: mdi:fridge
button_action:
  tap_action:
    action: navigate
    navigation_path: '#kitchen'
```

</details>

<br>

---

<br>

## Styling

You can add custom styles in the editor or by adding `styles: |` in YAML **without using card-mod** which allows you to modify the CSS style of all the cards.

> [!TIP]  
> **To understand which style classes can be modified**, you can take a look at the [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) folder in this repository. In each card folder, you will find a file named `styles.ts`. These files contain all the applied styles.
> 
> You can also find a lot of examples on the [Home Assistant forum](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) by doing a bit of searching.
>
> The Bubble theme for Home Assistant (like on the screenshots) can be found [here](https://github.com/Clooos/Bubble).

> [!IMPORTANT]  
> Please note that you will have to add `!important;` to some CSS styles that are already defined (see examples below).

#### Examples

<details>

<summary>Changing the font size of any Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Changing the background color of a single button in an horizontal buttons stack</summary>

<br>

```yaml
styles: >
  /* Selector for the '#kitchen' button */
  .kitchen > .color-background {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Changing the background color of a button</summary>

<br>

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

To change the color when it's `on` take a look at the style templates below.

</details>

<details>

<summary>Changing the color of a button slider</summary>

<br>

```yaml
styles: |
  .bubble-range-fill { 
    background: rgba(79, 69, 87, 1) !important;
    opacity: 1 !important;
  }
```

</details>

<details>

<summary>Changing the line color of a separator</summary>

<br>

```yaml
styles: |
  .bubble-line {
    background: var(--primary-text-color);
    opacity: 0.1;
  }
```

</details>

<details>

<summary>Changing the color of an icon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

For an horizontal buttons stack icon.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Changing the background color of an icon container</summary>

<br>

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41);
  }
```

</details>

<details>

<summary>Changing the size of the sub-buttons (perfect for the large layout)</summary>

<br>

```yaml
styles: |
  .bubble-sub-button {
    height: 48px !important;
    min-width: 48px !important;
  }
```

</details>

<details>

<summary>Changing the background color of the second sub-button</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Changing the size of an icon</summary>

<br>

For the main icon.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

For the sub-button icons.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Using a picture rather than an icon in a sub button</summary>

<br>

```yaml
sub_button:
  - icon: none
styles: |-
  .bubble-sub-button-1 {
    background-image: url("/local/pictures/your_picture.jpg");
    background-size: cover;
  }
```

Just upload this picture in a “pictures” folder (or the name you want) in the Home Assistant “www” folder.

</details>

<details>

<summary>Advanced example: Creating an horizontal row of sub-buttons (screenshot included)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> I really love this one, I use it as a header on my dashboard.

```yaml
type: custom:bubble-card
card_type: button
card_layout: large
button_type: name
show_icon: false
show_name: false
sub_button:
  - name: Mute
    icon: mdi:volume-off
    tap_action:
      action: toggle
      service: input_boolean.toggle
    entity: input_boolean.silent_mode
  - name: Covers
    entity: cover.all_group
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#cover'
  - name: Shopping list
    icon: mdi:cart-outline
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#shopping-list'
  - name: Security
    icon: mdi:video-outline
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#security'
  - name: Settings
    icon: mdi:cog
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#configuration'
styles: |
  .card-content {
    width: 100%;
    margin: 0 !important;
  }
  .bubble-button-card-container {
    background: none;
  }
  .bubble-sub-button {
    height: 46px !important;
    width: 46px !important;
  }
  .bubble-sub-button-container {
    width: 100%;
    justify-content: space-between !important;
  }
  .bubble-sub-button-icon {
    --mdc-icon-size: inherit !important;
  }
  .bubble-name-container {
    margin-right: 0px !important;
  }
```

![Sub-buttons-everywhere](https://github.com/Clooos/Bubble-Card/assets/36499953/3bf04969-e00d-4755-89df-481e8f7d73b2)

</details>

<br>

### Templates

Advanced users can add templates in JS directly in their custom styles (Bubble Card doesn’t support Jinja templates). For example, this allows you to dynamically change an icon, the name or the color of an element, to show or hide an element conditionnaly (like a sub-button), or almost anything based on a state, an attribute and more.

> [!TIP]  
> More information about JS templates [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator). My advice is to always take a look at your browser console to be sure that everything is working correctly.

#### Available variables and functions

<details>

<summary>Variables</summary>

<br>

You have access to these variables in most cards:

- `state` will return the state of your defined `entity`.
  
- `entity` will return your entity you defined like `switch.test` in this example.
  
- `icon` can be used like this to change the icon `icon.setAttribute("icon", "mdi:lightbulb")`.
  
- `subButtonIcon[0]` can be used like this to change the first sub-button icon `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` is the first sub-button icon, `[1]` the second...
  
- `card` will return the card element in the DOM.
  
- `hass` is an advanced variable that allows you even more control, for example you can return the state of `light.kitchen` like this `hass.states['light.kitchen'].state` or an attribute like this `hass.states[entity].attributes.brightness`.

- `this` will return a lot of usefull informations about your setup and dashboard, only use this if you know what you are doing.

</details>

<details>

<summary>Functions (<code>getWeatherIcon</code>)</summary>

<br>

You have access to all the global JS functions, but you have also access to:

- `getWeatherIcon` can be used to return a weather icon based on a state that return the weather. For example, you can can do this `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` to change the third sub-button icon to today's weather icon, `.forecast[1]?.condition` is for tomorrow...

  You will have to create a template sensor for that. Here is what you can add in your `configuration.yaml`:
  ```yaml
    - trigger:
        - platform: time_pattern
          hours: /2
      action:
        - service: weather.get_forecasts
          data:
            type: daily
          target:
            entity_id: weather.home
          response_variable: daily
      sensor:
        - name: Weather Forecast Daily
          unique_id: weather_forecast_daily
          state: "{{ now().isoformat() }}"
          attributes:
            forecast: "{{ daily['weather.home'].forecast }}"
  ```
</details>

#### Examples

<details>

<summary>Changing the background color of a button that is red when it's <code>off</code> and green when it's <code>on</code></summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
entity: switch.test
name: Test
styles: |
  .bubble-button-background {
    opacity: 1 !important;
    background-color: ${state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Changing the background color of a button based on an entity for the horizontal buttons stack</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Showing/Hiding a sub-button conditionnaly</summary>

<br>

This one is showing the first sub-button only when my vacuum is stuck.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

This one is showing a sub-button when the battery is below 10%. Usefull with a sub-button that shows "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Changing an icon or sub-button icon conditionnaly</summary>

<br>

This one is changing a button icon only when a vacuum is stuck.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

This one is changing the first sub-button icon only when a vacuum is stuck.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Changing an icon or sub-button icon color conditionnaly</summary>

<br>

This one is changing a button icon color based on its state.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

This one is changing a sub-button icon color based on its state. `.bubble-sub-button-1` is the first sub-button, replace `1` if you want to change another sub-button icon.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animating a fan icon conditionnaly</summary>

<br>

This one is rotating a button icon when a fan is `on`.
```yaml
styles: |-
  .bubble-icon {
    animation: ${hass.states['fan.you_fan'].state === 'on' ? 'slow-rotate 2s linear infinite' : ''};
  }
  @keyframes slow-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
```

</details>

<details>

<summary>Templating a button name</summary>

<br>

This one is changing a button name/state with "It's currently sunny" depending on your weather.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```

If you want to template the state (`.bubble-state`) don't toggle `show_state: true` just toggle `show_attribute: true` without any attribute.

</details>

<details>

<summary>Advanced example: Changing the color of a sub-button when a pop-up is open</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Advanced example: Templating a separator name based on a state translated to your language</summary>

<br>

You can use `hass.formatEntityState(state)` to transtale a state and `hass.formatEntityAttributeValue(state, "attribute")` to translate an attribute.

This one is changing the name and the icon based on the weather, "Nuageux" means "Cloudy" in French.

![image](https://github.com/Clooos/Bubble-Card/assets/36499953/35ac9d0f-c3b8-4c09-9c15-fe6954011d55)

```yaml
type: custom:bubble-card
card_type: separator
icon: mdi:weather-cloudy
sub_button:
  - entity: sensor.outside_temperature
    icon: mdi:thermometer
    name: Temperature
    show_state: true
    show_background: false
styles: >
  .bubble-line {
    background: white;
    opacity: 1;
  }

  ${card.querySelector('.bubble-name').innerText =
  hass.formatEntityState(hass.states['weather.maison'])}

  ${icon.setAttribute("icon",
  getWeatherIcon(hass.states['weather.maison'].state))}
```

</details>

<br>

---

<br>

## Custom components conflicts

⚠️ For now there are some features that are not working with:

- Kiosk mode, but this is fixed in Kiosk mode v6.0.1

<br>

---

<br>

## Help

Feel free to open an issue if something is not working as expected. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github)](https://github.com/Clooos/Bubble-Card/issues)

Got questions or thoughts about Bubble Card? Want to share your dashboards or discoveries? You can go on the Home Assistant forum, on the Bubble Card subreddit or on the GitHub Discussions section.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Donate

I dedicate most of my spare time to making this project the best it can be. So if you appreciate my work, any donation would be a great way to show your support 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR)

<br>

Thank you everyone for your support, you all are my greatest motivation!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
