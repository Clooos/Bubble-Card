# Bubble Card

Bubble Card is a minimalist card collection for Home Assistant with a nice pop-up touch.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card)](#) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit)](https://www.reddit.com/user/Clooooos/submitted/) [![Buy me a beer](https://img.shields.io/badge/Buy%20me%20a-beer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos)

## Screenshots and features

<img width="2048" alt="Bubble Card Cover" src="https://github.com/Clooos/Bubble-Card/assets/36499953/681e99e0-17ce-471d-a71b-9ef8158af6d5">
<img width="2048" alt="Bubble Card 1" src="https://github.com/Clooos/Bubble-Card/assets/36499953/286d3c0d-677f-4bd7-8d7e-667754af9019">
<img width="2048" alt="Bubble Card 2" src="https://github.com/Clooos/Bubble-Card/assets/36499953/dd182185-a092-43f2-8b5e-b194da85bcb9">
<img width="2048" alt="Bubble Card 3" src="https://github.com/Clooos/Bubble-Card/assets/36499953/c348db22-f3c7-46e2-b3ff-3978fcb4eb42">
<img width="2048" alt="Bubble Card 4" src="https://github.com/Clooos/Bubble-Card/assets/36499953/ca92ad56-4e59-49e3-b050-39544ad523e2">
<img width="2048" alt="Bubble Card 5" src="https://github.com/Clooos/Bubble-Card/assets/36499953/252a61c6-dc93-40e4-991a-28979a02eafc">

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

1. Download HACS following the instructions on [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download/)
2. Proceed to the initial configuration following the instructions on [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. On your sidebar go to `HACS` > `Integrations`
4. click on the icon at the right top corner then on `Custom repositories`
5. For the repository add this: `https://github.com/Clooos/Bubble-Card`
6. For the category select `Lovelace` then click `Add`
7. Now click on `Bubble Card` then on the `Dowload` button
8. Go back on your dashboard and click on the icon at the right top corner then on `Edit dashboard`
9. You can now click on `Add card` in the bottom right corner and search for `Bubble Card`

Coming soon in the HACS default repo (still waiting for validation).

## Configuration

### Main options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:bubble-card` | Type of the card |
| `card_type` | string | **Required** | `button`, `cover`, `empty-column`, `horizontal-buttons-stack`, `pop-up` or `separator` | Type of the Bubble Card |

## Pop-up

This card allows you to convert any `vertical-stack` card into a pop-up. Each pop-up must have an unique hash (e.g. `#kitchen`), you can open them with any card that allows `navigation_path` or with the `horizontal-buttons-stack` that is included. This card come with an header for your pop-up, if you add an entity to this card you will have a button to toggle this entity in that header, you can also display the state of an entity (e.g. the temperature of a room).

1. To add a pop-up you first need to add a `vertical-stack` card to your dashboard
2. This `vertical-stack` must be after all your other cards (this is important)
3. Now add a `Bubble Card` with the type `pop-up` in it
4. Just fill in the required inputs and the ones you need

### Pop-up options

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `hash` | string | **Required** | Any unique hash (e.g. `'#kitchen'`) with ' ' | This is how you will open your pop-up |
| `name` | string | Optional but recommended | Any string | A name for your pop-up header |
| `icon` | string | Optional but recommended | Any `mdi:` icon | An icon for your pop-up header |
| `entity` | string | Optional | Any switchable entity | It display a button to toggle this entity |
| `state` | string | Optional | Any entity | Display its state in your pop-up header |
| `state_unit` | string | Optional | Any unit of measurement | An unit of measurement for the displayed state (e.g. `°F`, `°C`, `%`) |
| `width_desktop` | string | Optional | Any CSS value | Width on desktop (`100%` by default on mobile) |
| `margin_top_mobile` | string | Optional | Any CSS value | Top margin on mobile (e.g. `-56px` if your header is hidden) |
| `margin_top_desktop` | string | Optional | Any CSS value | Top margin on desktop (e.g. `50%` for an half sized pop-up) |

### Pop-up example

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
A button to open the pop-up
```yaml
type: button
tap_action:
  action: navigate
  navigation_path: '#kitchen'
name: Kitchen
icon: mdi:fridge
```

## Horizontal buttons stack

WIP

## Button

WIP

## Cover

WIP

## Separator

WIP

## Empty column

WIP


