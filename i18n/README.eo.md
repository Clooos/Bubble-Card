<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ĉi tiu paĝo estas aŭtomata traduko. En dubo, la [originala angla dokumentaro](../README.md) superregas. Ĉu iu frazo aspektas malĝusta? Ĉia helpo estas bonvena, kaj [korekti ĉi tiun paĝon](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.eo.md) daŭras nur unu minuton: GitHub prizorgas la forkon kaj la tirpeton. Antaŭdankon! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Legi ĉi tion en alia lingvo](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card estas minimalisma kaj personigebla kolekto da kartoj por Home Assistant, kun modernaj ŝprucfenestroj kaj integrita Module Store kun pli ol 100 komunumaj moduloj.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Enhavtabelo

**[`Instalado`](#instalado)**  **[`Agordado`](#agordado)**  **[`Sugestoj pri entoj`](#sugestoj-pri-entoj)**  **[`Ŝprucfenestro`](#ŝprucfenestro)**  **[`Horizontala stako de butonoj`](#horizontala-stako-de-butonoj)**  **[`Butono`](#butono)**  **[`Plurmedia ludilo`](#plurmedia-ludilo)**  **[`Kovrilo`](#kovrilo)**  **[`Elektilo`](#elektilo)**  **[`Klimatizilo`](#klimatizilo)**  **[`Kalendaro`](#kalendaro)**  **[`Apartigilo`](#apartigilo)**  **[`Malplena kolumno`](#malplena-kolumno)**  **[`Nur subbutonoj`](#nur-subbutonoj)**  **[`Subbutonoj`](#subbutonoj)**  **[`Aranĝoj de la karto`](#aranĝoj-de-la-karto)**  **[`Kondiĉoj`](#kondiĉoj)**  **[`Agoj`](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi)**  **[`Stiligo`](#stiligo)**  **[`Ŝablonoj`](#ŝablonoj)**  **[`Moduloj`](#moduloj)**  **[`Lokalizado`](#lokalizado)**  **[`Helpo`](#helpo)**  **[`Kontribuado`](#kontribuado)**  **[`Donaci`](#donaci)**

<br>

## Instalado

**Home Assistant plej malnova subtenata versio:** 2023.9.0

<details>

<summary>Sen HACS</summary>

<br>

1. Elŝutu `bubble-card.zip` el la [plej nova eldono](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Malpaku ĝin en via dosierujo `<config>/www`, vi devus ricevi `bubble-card.js` kaj apude dosierujon `translations` (tiu dosierujo enhavas la vortarojn de la redaktilo, sen ĝi la redaktilo restas en la angla)
3. Sur via panelo, alklaku la piktogramon en la supra dekstra angulo, poste alklaku `Edit dashboard`
4. Alklaku denove tiun piktogramon, poste alklaku `Manage resources`
5. Alklaku `Add resource`
6. Kopiu kaj algluu: `/local/bubble-card.js?v=1`
7. Alklaku `JavaScript Module`, poste `Create`
8. Reiru kaj refreŝigu vian paĝon
9. Nun vi povas alklaki `Add card` en la malsupra dekstra angulo kaj serĉi `Bubble Card`
10. Post ĉiu ĝisdatigo de la dosiero, vi devos redakti `/local/bubble-card.js?v=1` kaj ŝanĝi la version al iu ajn pli alta numero

Se tio ne funkcias, simple provu viŝi la kaŝmemoron de via retumilo.

</details>

<details>

<summary>Kun HACS (Rekomendata)</summary>

<br>

Ĉi tiu metodo permesas al vi ricevi ĝisdatigojn rekte per la Home Assistant Community Store

1. Se HACS ankoraŭ ne estas instalita, elŝutu ĝin laŭ la instrukcioj ĉe [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Daŭrigu al la komenca agordo de HACS laŭ la instrukcioj ĉe [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. En via flanka breto, iru al "HACS"
4. Serĉu "Bubble Card", aŭ alklaku la bluan butonon sube
5. Alklaku "Download"
6. Reiru al via panelo kaj alklaku la piktogramon en la supra dekstra angulo, poste alklaku `Edit dashboard`
7. Nun vi povas alklaki `Add card` en la malsupra dekstra angulo kaj serĉi `Bubble Card`

Se tio ne funkcias, provu viŝi la kaŝmemoron de via retumilo/aplikaĵo (sur ĉiuj viaj aparatoj se necese).

#### Videoj

Vi ankaŭ povas rigardi mian YouTube-kanalon por paŝo-post-paŝaj videoj.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Agordado

Ĉiuj opcioj estas agordeblaj en la Home Assistant redaktilo. Sed vi povas trovi pliajn detalojn kaj la YAML en la dokumentado sube.

<details>

<summary><b>Ĉefaj opcioj (YAML + priskribo)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `type` | string | **Postulata** | `custom:bubble-card` | Tipo de la karto |
| `card_type` | string | **Postulata** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` aŭ `sub-buttons` | Tipo de la Bubble Card, vidu sube |
| `styles` | object list | Malnepra | Iuj ajn CSS-stilfolioj | Permesas al vi personigi vian Bubble Card CSS, vidu [stiligon](#stiligo) |

</details>

<details>

<summary><b>Mallokaj CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Angula radiuso por ĉiuj subtenataj elementoj |
| `--bubble-main-background-color` | `color` | Ĉefa fona koloro por ĉiuj subtenataj elementoj |
| `--bubble-secondary-background-color` | `color` | Sekundara fona koloro por ĉiuj subtenataj elementoj |
| `--bubble-accent-color` | `color` | Akcenta koloro por ĉiuj subtenataj elementoj |
| `--bubble-icon-border-radius` | `px` | Angula radiuso de la piktogramo por ĉiuj subtenataj elementoj |
| `--bubble-icon-background-color` | `color` | Fona koloro de la piktogramo por ĉiuj subtenataj elementoj |
| `--bubble-sub-button-border-radius` | `px` | Angula radiuso por ĉiuj subbutonoj |
| `--bubble-sub-button-background-color` | `color` | Fona koloro por ĉiuj subbutonoj |
| `--bubble-box-shadow` | vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skatola ombro por ĉiuj subtenataj elementoj |
| `--bubble-border` | vidu [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Bordero por ĉiuj subtenataj kartoj |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Rigardu ĉi tiun [videon](https://www.youtube.com/watch?v=0hSQOlBxKKI) por lerni pri Bubble Card kaj ĝiaj kapabloj.** Mia YouTube-kanalo estas ankoraŭ sufiĉe nova kaj temas pri lernigiloj pri Home Assistant kaj Bubble Card. Ne hezitu aboni por helpi plivastigi la videblecon de mia kanalo. Antaŭdankon!

<br>

---

<br>

## Sugestoj pri entoj

Ekde Home Assistant 2026.6, elekti enton en la kartoelektilo proponas al vi kelkajn pretajn kartojn, kaj Bubble Card aldonas siajn proprajn receptojn al tiu listo. Elektu lumon kaj oni proponas al vi karton kun heleca glitilo, plus varianton kun kolortemperaturo, unu kun koloro kaj unu kun satureco, kiam via lumo subtenas ilin. Elektu kovrilon kaj vi ricevas la glitilon de ĝia pozicio, elektu plurmedian ludilon kaj vi ricevas ankaŭ varianton kun ĝia listo de fontoj, elektu polvosuĉilon kaj vi ricevas ĝiajn butonojn por starti, paŭzi kaj reveni al la bazo. Ĉiu sugesto estas ordinara agordo de Bubble Card montrata kiel viva antaŭrigardo, do vi povas preni la plej proksiman kaj plu redakti ĝin kiel kutime.

Kio estas proponata al vi dependas de tio, kion via ento vere kapablas: lumo sen heleca kanalo ricevas ŝaltilon anstataŭ glitilon, kovrilo kiu ne povas klini ne ricevas klinan varianton, kaj klimatiza ento ricevas siajn antaŭagordojn nur kiam ĝi havas iujn. La klasikaj eroj sekvas sub la sugestoj de Bubble Card kiam ili taŭgas: la karto dediĉita al tiu speco de ento, simpla butono kaj glitilo.

> [!TIP]
> Moduloj povas aldoni siajn proprajn sugestojn al tiu listo, vidu [modulojn](#moduloj).

<br>

---

<br>

## Ŝprucfenestro

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ĉi tiu karto permesas al vi krei ŝprucfenestron kun ajna enhavo. Ĉiu ŝprucfenestro estas **kaŝita defaŭlte** kaj povas esti malfermita per celado de ĝia ligilo (ekz. `'#pop-up-name'`), per ajna karto kiu subtenas la `navigate` [agon](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi), aŭ per la [horizontala stako de butonoj](#horizontala-stako-de-butonoj) kiu estas inkluzivita.

> [!TIP]
> ### Ekigilo de ŝprucfenestro
> Ĉi tiu funkcio permesas al vi malfermi ŝprucfenestron laŭ la stato de ajna ento, ekzemple vi povas malfermi ŝprucfenestron "Sekureco" kun kamerao kiam persono estas antaŭ via domo. Vi ankaŭ povas krei ŝanĝilan helpanton (input_boolean) kaj ekigi ĝian malfermon/fermon en aŭtomatigo.
> <details>
> <summary>Malfermi ŝprucfenestron kiam <code>binary_sensor</code> estas <code>on</code></summary>
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
> ### Malsamaj manieroj fermi ŝprucfenestron
> Estas multaj manieroj fermi ŝprucfenestron. Ekzemple, vi povas gliti de la kapo de la ŝprucfenestro al la malsupro, per longa glito interne de la ŝprucfenestro al la malsupro, per premo de Escape sur komputilo, per forigo de la haketilo (hash) en la URL, aŭ simple per premo de la ferma butono.
>


### Opcioj de la ŝprucfenestro

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `hash` | string | **Postulata** | Ajna unika haketilo (ekz. `'#kitchen'`) kun ' ' | Tio estas kiel vi malfermos vian ŝprucfenestron |
| `popup_style` | string | Malnepra | `bubble` (defaŭlta) aŭ `classic` | Difinas la vidan stilon de la ŝprucfenestro |
| `popup_mode` | string | Malnepra | `default` (defaŭlta), `fit-content`, `centered` aŭ `adaptive-dialog` | Difinas la aranĝan reĝimon de la ŝprucfenestro |
| `with_bottom_offset` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Uzata nur kun `popup_mode: fit-content` aŭ `adaptive-dialog`. Aplikas malsupran deŝovon sur poŝtelefono, utila kiam via panelo enhavas piedan karton. |
| `full_width_on_mobile` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Uzata nur kun `popup_mode: centered`. Vastigas la ŝprucfenestron al plena ekrana larĝo sur poŝtelefono, utila sur pli malgrandaj ekranoj. |
| `performance_mode` | string | Malnepra | `default` (defaŭlta) aŭ `performance` | Optimumigas la malferman animacion de la ŝprucfenestro. `performance` iomete prokrastas la bildigon de la enhavo kaj la fonan malfokusigon, kaj ankaŭ malŝaltas la fonan malfokusigon se tio estas agordita. |
| `auto_close` | string | Malnepra | Tempolimo en milisekundoj (ekz. `10000` por 10s) | Aŭtomate fermas la ŝprucfenestron post tempolimo |
| `close_on_click` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Aŭtomate fermas la ŝprucfenestron post ajna interago |
| `close_by_clicking_outside` | boolean | Malnepra | `true` (defaŭlta) aŭ `false` | Fermas la ŝprucfenestron per klako ekster ĝi |
| `width_desktop` | string | Malnepra | Ajna CSS-valoro | Larĝo sur komputilo (`100%` defaŭlte sur poŝtelefono) |
| `margin` | string | Malnepra | Ajna CSS-valoro | Uzu tion **nur** se via ŝprucfenestro ne estas bone centrigita sur poŝtelefono (ekz. `13px`) |
| `margin_top_mobile` | string | Malnepra | Ajna CSS-valoro | Supra marĝeno sur poŝtelefono (ekz. `-56px` se via kapo estas kaŝita) |
| `margin_top_desktop` | string | Malnepra | Ajna CSS-valoro | Supra marĝeno sur komputilo (ekz. `50vh` por duongranda ŝprucfenestro aŭ `calc(100vh - 400px)` por fiksita alto de `400px`) |
| `bg_color` | string | Malnepra | Ajna deksesuma, rgb aŭ rgba valoro | La fona koloro de via ŝprucfenestro (ekz. `#ffffff` por blanka fono) |
| `bg_opacity` | string | Malnepra | Ajna valoro de `0` ĝis `100` | La fona opakeco de via ŝprucfenestro (ekz. `100` por neniu travidebleco) |
| `bg_blur` | string | Malnepra | Ajna valoro de `0` ĝis `100` | La fona malfokusiga efiko de via ŝprucfenestro, **tio funkcias nur se `bg_opacity` ne estas agordita al `100`** (ekz. `0` por neniu malfokusigo)|
| `shadow_opacity` | string | Malnepra | Ajna valoro de `0` ĝis `100` | La ombra opakeco de via ŝprucfenestro (ekz. `0` por kaŝi ĝin) |
| `hide_backdrop` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Agordu tion al true ĉe la unua ŝprucfenestro de via ĉefa panelo por malŝalti la fonon (backdrop) por ĉiuj ŝprucfenestroj. |
| `background_update` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Ĝisdatigas la enhavon de la ŝprucfenestro fone (ne rekomendata) |
| `trigger` | object aŭ list | Malnepra | Vidu [kondiĉojn](#kondiĉoj) | Malfermas ĉi tiun ŝprucfenestron kiam la kondiĉoj estas plenumitaj |
| `trigger_entity` | string | Malnepra | Ajna ento | Malfermas ĉi tiun ŝprucfenestron laŭ la stato de ajna ento, la simpla formo de `trigger` |
| `trigger_state` | string | Malnepra (**Postulata** se `trigger_entity` estas difinita) | Ajna stato de ento | Stato de ento por malfermi la ŝprucfenestron |
| `trigger_close` | boolean | Malnepra | `true` (defaŭlta) aŭ `false` | Fermas la ŝprucfenestron kiam la kondiĉoj ne plu estas plenumitaj. La defaŭlto estas anstataŭe `false`, kiam vi uzas la pli malnovan paron `trigger_entity` kaj `trigger_state` |
| `open_action` | object | Malnepra | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Ekigas agon kiam la ŝprucfenestro malfermiĝas |
| `close_action` | object | Malnepra | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Ekigas agon kiam la ŝprucfenestro fermiĝas |
| `show_header` | boolean | Malnepra | `true` (defaŭlta) aŭ `false` | Montras/Kaŝas plene la kapon de la ŝprucfenestro |
| `show_previous_button` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Montras antaŭan butonon apud la ferma butono kaj navigas al la antaŭa ŝprucfenestro kiam disponebla |
| `show_close_button` | boolean | Malnepra | `true` (defaŭlta) aŭ `false` | Montras aŭ kaŝas la ferman butonon dum konservado de la resto de la kapo videbla |
| `buttons_position` | string | Malnepra | `right` (defaŭlta) aŭ `left` | Pozicio de la fermaj kaj antaŭaj butonoj en la kapo |
| `cards` | list | Malnepra | Ajna Bubble Card, Home Assistant karto aŭ propra karto | Difinas la enhavon de via ŝprucfenestro. Vidu la ekzemplon de ŝprucfenestro sube. |
| Vi ankaŭ havas aliron al [ĉiuj butonaj agordoj](#butono) por la kapo de la ŝprucfenestro. | | Malnepra | | Se nedifinita, neniu kapo estos montrata |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Angula radiuso por la ŝprucfenestro |
| `--bubble-pop-up-main-background-color` | `color` | Ĉefa fona koloro por subtenataj elementoj de la ŝprucfenestro |
| `--bubble-pop-up-background-color` | `color` | Fona koloro de la ŝprucfenestro |
| `--bubble-backdrop-background-color` | `color` | Fona koloro por la fono (backdrop) |
| Vi ankaŭ havas aliron al [ĉiuj CSS-variabloj de la butono](#opcioj-de-la-butono) por la kapo de la ŝprucfenestro. | | |

</details>


### Sendependa formato de ŝprucfenestro (v3.2.0+)

Ekde v3.2.0, ŝprucfenestroj uzas novan sendependan formaton, kie la enhavaj kartoj estas difinitaj rekte interne de la ŝprucfenestro per la opcio `cards`. Tio provizas pli bonan rendimenton kaj novan sekci-bazitan tren-kaj-lasan redaktan sperton.


#### Ekzemploj

<details>

<summary>Ŝprucfenestro (sendependa formato)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: pop-up
hash: '#kitchen'
name: Kitchen
icon: mdi:fridge
entity: light.kitchen
cards:
  - type: custom:bubble-card
    card_type: button
    entity: light.kitchen
  # More cards...
```

</details>
<details>

<summary>Butono por malfermi la ŝprucfenestron</summary>

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

## Horizontala stako de butonoj

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ĉi tiu karto estas bona kunulo por la ŝprucfenestra karto, permesante al vi malfermi la respondajn ŝprucfenestrojn. Ĝi ankaŭ permesas al vi malfermi ajnan paĝon de via panelo. Krome, vi povas aldoni viajn movo-/ĉeest-sensilojn tiel ke la ordo de la butonoj adaptiĝas laŭ la ĉambro en kiun vi ĵus eniris. Ĉi tiu karto estas rulumebla, restas videbla, kaj agas kiel piedo.

> [!IMPORTANT]  
> Ĉi tiu karto devas esti la lasta en via vido (post ĉiu karto kaj ŝprucfenestro). Ĝi ne povas esti interne de ajna stako.

### Opcioj de la horizontala stako de butonoj

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Postulata** | La haketilo de la ŝprucfenestro (ekz. `'#kitchen'`) kun ' ' aŭ ajna ligilo | Ligilo por malfermi |
| `1_name` | string | Malnepra | Ajna teksto | Nomo por via butono |
| `1_icon` | string | Malnepra | Ajna `mdi:` piktogramo | Piktogramo por via butono |
| `1_entity` | string | Malnepra | Ajna lumo aŭ luma grupo | Montras la koloron de tiu lumo en la fono |
| `1_pir_sensor` | string | Malnepra | Ajna duuma sensilo | Almenaŭ unu pir-sensilo aŭ pli por `auto_order`, fakte tio ankaŭ funkcias kun ajna tipo de ento, ekzemple vi povas aldoni lumajn grupojn kaj la ordo ŝanĝiĝos laŭ la lastaj ŝanĝitaj statoj. |
| `auto_order` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Ŝanĝas la ordon de la butonoj laŭ la lasta ŝanĝa tempo de `_pir_sensor`, **ĝi devas esti `false` se vi ne havas ajnan `_pir_sensor` en via kodo** |
| `margin` | string | Malnepra | Ajna CSS-valoro | Uzu tion **nur** se via `horizontal-buttons-stack` ne estas bone centrigita sur poŝtelefono (ekz. `13px`) |
| `width_desktop` | string | Malnepra | Ajna CSS-valoro | Larĝo sur komputilo (`100%` defaŭlte sur poŝtelefono) |
| `is_sidebar_hidden` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Fiksas la pozicion de la horizontala stako de butonoj se la flanka breto estas kaŝita sur komputilo (nur se vi mem faris modifon por kaŝi ĝin) |
| `rise_animation` | boolean | Malnepra | `true` (defaŭlta) aŭ `false` | Agordu tion al `false` por malŝalti la animacion kiu ekaktiviĝas post kiam la paĝo ŝarĝiĝis |
| `highlight_current_view` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Emfazas la nunan haketilon/vidon per glata animacio |
| `hide_gradient` | boolean | Malnepra | `true` aŭ `false` (defaŭlta) | Agordu tion al `false` por kaŝi la gradienton |

> [!IMPORTANT]  
> La variabloj komencantaj per numero difinas viajn butonojn, simple ŝanĝu tiun numeron por aldoni pliajn butonojn (vidu la ekzemplon sube).

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Angula radiuso por la butonoj de la horizontala stako |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Fona koloro por la butonoj de la horizontala stako |

</details>


#### Ekzemplo

<details>

<summary>Horizontala stako de butonoj kiu reorganizas sin laŭ ĉeest-sensiloj</summary>

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

## Butono

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ĉi tiu karto estas tre versatila. Ĝi povas esti uzata kiel **ŝaltilo**, **glitilo**, **stato** aŭ **nomo/teksto**-butono.

> [!TIP]
> ### Kio diferencas inter ĉiuj tipoj de butonoj?
>
> - **Ŝaltilo-butono:** Tio estas la defaŭlta tipo de butono. Defaŭlte, ĝi baskuligas eron kaj ĝia fona koloro ŝanĝiĝas laŭ la stato de la ero aŭ la koloro de lumo. Vi povas ŝanĝi ĝian agon en la sekcio **Tap action on card**.
>
> - **Glitilo-butono:** Ĉi tiu tipo de butono ebligas kontroli erojn kun alĝustigeblaj amplekso. Ĝi estas ideala por malheligi lumojn, kaj ĝia plenigokoloro adaptiĝos al la koloro de la lumo. Vi ankaŭ povas uzi ĝin por montri valorojn, kiel bateria nivelo.
>   Subtenataj eroj por glitiloj:
>   - Lumo (heleco)
>   - Plurmedia ludilo (laŭteco)
>   - Kovrilo (pozicio)
>   - Ventolilo (procento)
>   - Klimatizilo (temperaturo)
>   - Enira nombro kaj nombro (valoro)
>   - Bateria sensilo (procento, nur legebla)
>
>   Vi ankaŭ povas uzi iun ajn eron kun nombra stato, malŝaltante la eran filtrilon en **Slider settings**, kaj tiam difini la valorojn `min` kaj `max`. Ĉi tiu opcio estas nur legebla.
>
> - **Stato-butono:** Perfekta por montri informojn de sensilo aŭ iu ajn ero. Kiam vi premas ĝin, ĝi montros la panelon "Pliaj informoj" de la ero. Ĝia fona koloro ne ŝanĝiĝas.
>
> - **Nomo/teksto-butono:** La sola tipo de butono, kiu ne bezonas eron. Ĝi ebligas montri mallongan tekston, nomon aŭ titolon. Vi ankaŭ povas aldoni agojn al ĝi. Ĝia fona koloro ne ŝanĝiĝas.

### Opcioj de la butono

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `entity` | string | **Deviga** | Ajna ero | Ero por kontroli |
| `button_type` | string | Nedeviga | `switch` (defaŭlta), `slider`, `state` aŭ `name` | La konduto de via butono |
| `name` | string | Nedeviga | Ajna string | Nomo por via butono, se ne difinita ĝi montros la nomon de la ero |
| `icon` | string | Nedeviga | Ajna `mdi:`-ikono | Ikono por via butono, se ne difinita ĝi montros la ikonon de la ero aŭ la `entity-picture` |
| `force_icon` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Doni prioritaton al la ikono anstataŭ la `entity-picture` |
| `use_accent_color` | boolean | Nedeviga (`false` defaŭlta) | **Nur por lumoj.** Uzi la akcentan koloron de la etoso anstataŭ la koloron de la lumo.                         |
| `show_state` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri aŭ kaŝi la staton de via `entity` |
| `show_name` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la nomon |
| `show_icon` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la ikonon |
| `show_last_changed` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ŝanĝan tempon de via `entity` |
| `show_last_updated` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ĝisdatigan tempon de via `entity` |
| `show_attribute` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri atributon de via `entity` sub ĝia `name` |
| `attribute` | string | Nedeviga (deviga se `show_attribute` estas agordita al `true`) | Atributo de via `entity` | La atributo por montri (ekz. `brightness`) |
| `scrolling_effect` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Permesi al teksto ruli kiam la enhavo superas la grandon de sia ujo |
| `button_action` | object | Nedeviga | `tap_action`, `double_tap_action` aŭ `hold_action`, vidu sube | Permesi ŝanĝi la defaŭltajn agojn ĉe klako sur la butono. |
| `tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe klako sur la ikono, se nedifinita, `more-info` estos uzata |
| `double_tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe duobla klako sur la ikono, se nedifinita, `none` estos uzata |
| `hold_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe premtenado de la ikono, se nedifinita, `more-info` estos uzata |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en sekcia vido), `large` (defaŭlta se en sekcia vido), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alteco) (ekz. `2`) |
| `sub_button` | object | Nedeviga | Vidu [subbutonojn](#subbutonoj) | Aldoni personigitajn butonojn fiksitajn dekstre |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Ĉefa fona koloro por subtenataj elementoj en la butono |
| `--bubble-button-border-radius` | `px` | Borderadiuso por la butono |
| `--bubble-button-icon-border-radius` | `px` | Borderadiuso por la ikonujo de la butono |
| `--bubble-button-icon-background-color` | `color` | Fona koloro por la ikonujo de la butono |
| `--bubble-light-white-color` | `color` | Anstataŭigi la defaŭltan blankan koloron de lumaj butonoj/glitiloj |
| `--bubble-light-color` | `color` | Anstataŭigi la koloron de lumaj butonoj/glitiloj (eĉ RGB-lumoj) |
| `--bubble-button-box-shadow` | Vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombro (box shadow) por la butono |

</details>

Ĉi tiuj opcioj disponeblas nur kiam `button_type` estas agordita al `slider`.

<details>

<summary><b>Glitilaj opcioj (YAML + priskriboj)</b></summary>

| Nomo                  | Tipo    | Postulo                     | Priskribo                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Nedeviga                        | La minimuma valoro de la glitilo. Por personigitaj glitiloj.                                                    |
| `max_value`             | number  | Nedeviga                        | La maksimuma valoro de la glitilo. Por personigitaj glitiloj.                                                    |
| `step`                  | number  | Nedeviga                        | La paŝa valoro de la glitilo.                                                                           |
| `tap_to_slide`          | boolean | Nedeviga (`false` defaŭlta)      | Ŝalti la antaŭan konduton de la glitilo, kie vi tuŝetas por aktivigi la glitilon, anstataŭ teni ĝin.        |
| `relative_slide`        | boolean | Nedeviga (`false` defaŭlta )     | Ĝisdatigi la valoron relative al la komenca valoro, anstataŭ la komenca tuŝpunkto.                      |
| `read_only_slider`      | boolean | Nedeviga (`false` defaŭlta)      | Fari la glitilon nur-legebla. Aŭtomate ŝaltita por kelkaj eroj kiel sensiloj.                        |
| `slider_live_update`    | boolean | Nedeviga (`false` defaŭlta)      | La stato de la ero ĝisdatiĝas dum glitado. **Ĉi tiu funkcio ne estas rekomendata por ĉiuj eroj.**        |
| `slider_fill_orientation` | string | Nedeviga | `left`, `right`, `top` aŭ `bottom` | Ŝanĝi la plenigan direkton de la glitilo. De maldekstre dekstren kiam nedifinita, spegulita en [lingvoj skribataj de dekstre maldekstren](#lokalizado) |
| `slider_value_position` | string | Nedeviga | `right`, `left`, `center` aŭ `hidden` | Pozicio de la valora montrilo. Dekstre kiam nedifinita, kaj maldekstre en [lingvoj skribataj de dekstre maldekstren](#lokalizado) |
| `invert_slider_value` | boolean | Nedeviga (`false` defaŭlta) | Inversigi la direkton de la glitilo (100% pleniĝo egalas al la minimumo). Ne disponebla por kolorglitiloj. |
| `light_slider_type` | string | Nedeviga | `brightness` (defaŭlta), `hue`, `saturation`, `white_temp` | **Nur por lumoj.** Elekti la reĝimon de la glitilo |
| `cover_slider_type` | string | Nedeviga | `position` (defaŭlta), `tilt_position` | **Nur por kovriloj.** Elekti la reĝimon de la glitilo (pozicio aŭ klino) |
| `hue_force_saturation` | boolean | Nedeviga (`false` defaŭlta) | **Nur por lumoj (reĝimo Hue).** Devigi saturon dum alĝustigo de Hue |
| `hue_force_saturation_value` | number | Nedeviga (`100` defaŭlta) | **Nur por lumoj (reĝimo Hue).** Devigita satura valoro (0-100) |
| `use_accent_color` | boolean | Nedeviga (`false` defaŭlta) | **Nur por lumoj (reĝimo Brightness).** Uzi la akcentan koloron de la etoso anstataŭ la koloron de la lumo |
| `allow_light_slider_to_0` | boolean | Nedeviga (`false` defaŭlta)    | **Nur por lumoj.** Permesas al la glitilo atingi 0%, kio malŝaltas la lumon. Ne disponebla kun `tap_to_slide`. |
| `light_transition`      | boolean | Nedeviga (`false` defaŭlta)      | **Nur por lumoj.** Ŝalti glatajn helectransirojn por subtenataj lumoj.                           |
| `light_transition_time` | number  | Nedeviga (`500` defaŭlta)        | **Nur por lumoj.** La transira tempo en milisekundoj. Postulas `light_transition: true`.            |

</details>

#### Ekzemploj

<details>

<summary>Glitila butono, kiu povas kontroli la helecon de lumo</summary>

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

<summary>Butono kun pliaj opcioj</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
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

## Plurmedia ludilo

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ĉi tiu karto ebligas kontroli plurmedian ludilan eron.

### Opcioj de la plurmedia ludilo

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `entity` | string | **Deviga** | Ajna plurmedia ludilo | La plurmedia ludilo por kontroli |
| `name` | string | Nedeviga | Ajna string | Nomo por via plurmedia ludilo, se ne difinita ĝi montros la nomon de la ero |
| `icon` | string | Nedeviga | Ajna `mdi:`-ikono | Ikono por via plurmedia ludilo, se ne difinita ĝi montros la ikonon de la ero aŭ la `entity-picture` |
| `force_icon` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Doni prioritaton al la ikono anstataŭ la `entity-picture` |
| `show_state` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri aŭ kaŝi la staton de via `entity` |
| `show_name` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la nomon |
| `show_icon` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la ikonon |
| `show_last_changed` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ŝanĝan tempon de via `entity` |
| `show_last_updated` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ĝisdatigan tempon de via `entity` |
| `show_attribute` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri atributon de via `entity` sub ĝia `name` |
| `attribute` | string | Nedeviga (deviga se `show_attribute` estas agordita al `true`) | Atributo de via `entity` | La atributo por montri (ekz. `brightness`) |
| `scrolling_effect` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Permesi al teksto ruli kiam la enhavo superas la grandon de sia ujo |
| `min_volume` | number | Nedeviga | Ajna nombro | La minimuma valoro de la laŭteca glitilo. |
| `max_volume` | number | Nedeviga | Ajna nombro | La maksimuma valoro de la laŭteca glitilo. |
| `cover_background` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Uzi malklaran plurmedian kovrilon kiel fonon de la karto. |
| `button_action` | object | Nedeviga | `tap_action`, `double_tap_action` aŭ `hold_action`, vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Permesi ŝanĝi la defaŭltajn agojn ĉe klako sur la butono. |
| `tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe klako sur la ikono, se nedifinita, `more-info` estos uzata. |
| `double_tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe duobla klako sur la ikono, se nedifinita, `none` estos uzata. |
| `hold_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe premtenado de la ikono, se nedifinita, `more-info` estos uzata. |
| `main_buttons_position` | string | Nedeviga | `default` aŭ `bottom` | Movi la kovrilajn agbutonojn al la malsupro (fiksita) |
| `main_buttons_full_width` | boolean | Nedeviga | `true` aŭ `false` | Fari la malsuprajn agbutonojn plenlarĝaj (defaŭlte: `true` kiam pozicio estas `bottom`) |
| `main_buttons_alignment` | string | Nedeviga | `end` (defaŭlta), `center`, `start`, `space-between` | Ĝisrandigo de la malsupraj agbutonoj kiam ne plenlarĝaj |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en sekcia vido), `large` (defaŭlta se en sekcia vido), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alteco) (ekz. `2`) |
| `sub_button` | object | Nedeviga | Vidu [subbutonojn](#subbutonoj) | Aldoni personigitajn butonojn fiksitajn dekstre |
| `hide` | object | Nedeviga | Vidu sube | Kaŝi butonojn de la karto |

#### Kaŝopcioj

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Kaŝi la ludi/paŭzi-butonon |
| `volume_button` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Kaŝi la laŭtecan butonon |
| `previous_button` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Kaŝi la antaŭan butonon |
| `next_button` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Kaŝi la sekvan butonon |
| `power_button` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Kaŝi la potencan butonon |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Ĉefa fona koloro por la plurmedia ludilo |
| `--bubble-media-player-border-radius` | `px` | Borderadiuso por la plurmedia ludilo |
| `--bubble-media-player-buttons-border-radius` | `px` | Borderadiuso por la butonoj de la plurmedia ludilo |
| `--bubble-media-player-slider-background-color` | `color` | Fona koloro por la laŭteca glitilo |
| `--bubble-media-player-icon-border-radius` | `px` | Borderadiuso por la ikonujo de la plurmedia ludilo |
| `--bubble-media-player-icon-background-color` | `color` | Fona koloro por la ikonujo de la plurmedia ludilo |
| `--bubble-media-player-box-shadow` | Vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombro (box shadow) por la plurmedia ludilo |

</details>


#### Ekzemploj

<details>

<summary>Plurmedia ludilo kun ĉiuj opcioj</summary>

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
min_volume: 10
max_volume: 80
cover_background: true
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

## Kovrilo

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ĉi tiu karto ebligas kontroli viajn `cover`-erojn.

### Opcioj de la kovrilo

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `entity` | string | **Deviga** | Ajna kovrilo | Kovrilo por kontroli |
| `name` | string | Nedeviga | Ajna string | Nomo por via kovrilo, se ne difinita ĝi montros la nomon de la ero |
| `force_icon` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Doni prioritaton al la ikono anstataŭ la `entity-picture` |
| `show_state` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri aŭ kaŝi la staton de via `entity` |
| `show_name` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la nomon |
| `show_icon` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la ikonon |
| `show_last_changed` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ŝanĝan tempon de via `entity` |
| `show_last_updated` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ĝisdatigan tempon de via `entity` |
| `show_attribute` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri atributon de via `entity` sub ĝia `name` |
| `attribute` | string | Nedeviga (deviga se `show_attribute` estas agordita al `true`) | Atributo de via `entity` | La atributo por montri (ekz. `brightness`) |
| `scrolling_effect` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Permesi al teksto ruli kiam la enhavo superas la grandon de sia ujo |
| `icon_open` | string | Nedeviga | Ajna `mdi:`-ikono | Ikono por via malfermita kovrilo, se ne difinita ĝi montros la defaŭltan ikonon de malfermita kovrilo |
| `icon_close` | string | Nedeviga | Ajna `mdi:`-ikono | Ikono por via fermita kovrilo, se ne difinita ĝi montros la defaŭltan ikonon de fermita kovrilo |
| `icon_up` | string | Nedeviga | Ajna `mdi:`-ikono | Ikono por via malfermbutono de kovrilo, se ne difinita ĝi montros la defaŭltan ikonon de malfermita kovrilo |
| `icon_down` | string | Nedeviga | Ajna `mdi:`-ikono | Ikono por via fermbutono de kovrilo, se ne difinita ĝi montros la defaŭltan ikonon de fermita kovrilo |
| `open_service` | string | Nedeviga | Ajna servo aŭ skripto | Servo por malfermi vian kovrilon, defaŭlte `cover.open_cover` |
| `stop_service` | string | Nedeviga | Ajna servo aŭ skripto | Servo por halti vian kovrilon, defaŭlte `cover.stop_cover` |
| `close_service` | string | Nedeviga | Ajna servo aŭ skripto | Servo por fermi vian kovrilon, defaŭlte `cover.close_cover` |
| `tilt_buttons` | string | Nedeviga | `top` (defaŭlta), `bottom`, `left`, `right`, `hidden` | Pozicio de la klinkontrolaj butonoj (montrata nur se la kovrilo subtenas klinon) |
| `open_tilt_service` | string | Nedeviga | Ajna servo aŭ skripto | Servo por malfermi klinon, defaŭlte `cover.open_cover_tilt` |

| `close_tilt_service` | string | Nedeviga | Ajna servo aŭ skripto | Servo por fermi klinon, defaŭlte `cover.close_cover_tilt` |
| `button_action` | object | Nedeviga | `tap_action`, `double_tap_action` aŭ `hold_action`, vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Permesi ŝanĝi la defaŭltajn agojn ĉe klako sur la butono. |
| `tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe klako sur la ikono, se nedifinita, `more-info` estos uzata. |
| `double_tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe duobla klako sur la ikono, se nedifinita, `none` estos uzata. |
| `hold_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe premtenado de la ikono, se nedifinita, `more-info` estos uzata. |
| `main_buttons_position` | string | Nedeviga | `default` aŭ `bottom` | Movi la mediajn kontrolilojn al la malsupro (fiksita) |
| `main_buttons_full_width` | boolean | Nedeviga | `true` aŭ `false` | Fari la malsuprajn kontrolilojn plenlarĝaj (defaŭlte: `true` kiam pozicio estas `bottom`) |
| `main_buttons_alignment` | string | Nedeviga | `end` (defaŭlta), `center`, `start`, `space-between` | Ĝisrandigo de la malsupraj kontroliloj kiam ne plenlarĝaj |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en sekcia vido), `large` (defaŭlta se en sekcia vido), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alteco) (ekz. `2`) |
| `sub_button` | object | Nedeviga | Vidu [subbutonojn](#subbutonoj) | Aldoni personigitajn butonojn fiksitajn dekstre |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Ĉefa fona koloro por subtenataj elementoj en la kovrila karto |
| `--bubble-cover-border-radius` | `px` | Borderadiuso por la kovrila karto |
| `--bubble-cover-icon-border-radius` | `px` | Borderadiuso por la ikonujo de la kovrila karto |
| `--bubble-cover-icon-background-color` | `color` | Fona koloro por la ikonujo de la kovrila karto |
| `--bubble-cover-box-shadow` | Vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombro (box shadow) por la kovrila karto |
| `--bubble-button-box-shadow` | Vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombro (box shadow) por butonoj en la kovrila karto |

</details>


#### Ekzemplo

<details>

<summary>Karto, kiu povas kontroli rulkurtenon</summary>

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

## Elektilo

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ĉi tiu karto ebligas aldoni falmenuon por viaj `input_select` / `select`-eroj. Ĉi tiu karto ankaŭ subtenas la subbutonojn kaj ĉiujn komunajn funkciojn de Bubble Card.

> [!TIP]
> Vi ankaŭ povas havi elektilajn subbutonojn se vi volas, ĉi tiu funkcio disponeblas en ĉiuj kartoj, kiuj subtenas la subbutonojn.

### Opcioj de la elektilo

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `entity` | string | **Deviga** | Ajna ero | Ero por kontroli |
| `name` | string | Nedeviga | Ajna string | Nomo por via elektilo, se ne difinita ĝi montros la nomon de la ero |
| `icon` | string | Nedeviga | Ajna `mdi:`-ikono | Ikono por via elektilo, se ne difinita ĝi montros la ikonon de la ero aŭ la `entity-picture` |
| `force_icon` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Doni prioritaton al la ikono anstataŭ la `entity-picture` |
| `show_state` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri aŭ kaŝi la staton de via `entity` |
| `show_name` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la nomon |
| `show_icon` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la ikonon |
| `show_last_changed` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ŝanĝan tempon de via `entity` |
| `show_last_updated` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la lastan ĝisdatigan tempon de via `entity` |
| `show_attribute` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri atributon de via `entity` sub ĝia `name` |
| `attribute` | string | Nedeviga (deviga se `show_attribute` estas agordita al `true`) | Atributo de via `entity` | La atributo por montri (ekz. `brightness`) |
| `scrolling_effect` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Permesi al teksto ruli kiam la enhavo superas la grandon de sia ujo |
| `tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe klako sur la ikono, se nedifinita, `more-info` estos uzata. |
| `double_tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe duobla klako sur la ikono, se nedifinita, `none` estos uzata. |
| `hold_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe premtenado de la ikono, se nedifinita, `more-info` estos uzata. |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en sekcia vido), `large` (defaŭlta se en sekcia vido), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alteco) (ekz. `2`) |
| `sub_button` | object | Nedeviga | Vidu [subbutonojn](#subbutonoj) | Aldoni personigitajn butonojn fiksitajn dekstre |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Ĉefa fona koloro por subtenataj elementoj en la elektila karto |
| `--bubble-select-background-color` | `color` | Fona koloro por la elektila karto |
| `--bubble-select-list-border-radius` | `px` | Borderadiuso por la falmenuo en la karto |
| `--bubble-select-list-item-accent-color` | `color` | Akcenta koloro por la elektita ero |
| `--bubble-select-list-background-color` | `color` | Fona koloro por la falmenuo en la karto |
| `--bubble-select-list-width` | `px` | Larĝo de la falmenuo en la karto |
| `--bubble-select-arrow-background-color` | `color` | Fona koloro por la falmenua sago |
| `--bubble-select-button-border-radius` | `px` | Borderadiuso por la elektila butono |
| `--bubble-select-border-radius` | `px` | Borderadiuso por la elektila karto |
| `--bubble-select-icon-border-radius` | `px` | Borderadiuso por la ikonujo de la elektila karto |
| `--bubble-select-icon-background-color` | `color` | Fona koloro por la ikonujo de la elektila karto |
| `--bubble-select-box-shadow` | Vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombro (box shadow) por la elektila karto |

</details>


#### Ekzemploj

<details>

<summary>Elektila karto kun listo de scenoj</summary>

<br>

```yaml
type: custom:bubble-card
card_type: select
name: Scene
entity: input_select.scenes
icon: mdi:brightness-4
show_state: true
```

</details>

<br>

---

<br>

## Klimatizilo

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ĉi tiu karto ebligas kontroli viajn `climate`-erojn.

> [!TIP]
> La reĝima elektomenuo estas [subbutono](#subbutonoj), kiu aŭtomate aldoniĝas kreante la karton. Vi poste povas modifi aŭ forigi ĝin laŭvole.

### Opcioj de la klimatizilo

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo                     | Tipo    | Postulo                         | Subtenataj opcioj                                  | Priskribo                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Deviga**                        | Klimatiziloero                                   | La ero por kontroli (ekz. `climate.living_room`).                                                            |
| `name`                  | string  | Nedeviga                            | Ajna string                                       | Personigita nomo por la karto. Se ne difinita, ĝi montros la nomon de la ero.                                    |
| `icon`                  | string  | Nedeviga                            | Ajna `mdi:`-ikono                                  | Personigita ikono por la karto. Se ne difinita, la ikono de la ero aŭ la `entity-picture` estos uzata.                   |
| `force_icon`            | boolean | Nedeviga                            | `true` aŭ `false` (defaŭlta)                     | Donas prioritaton al la ikono anstataŭ la `entity-picture`.                                                           |
| `show_state`            | boolean | Nedeviga                            | `true` aŭ `false` (defaŭlta)                     | Montri aŭ kaŝi la nunan staton de la `entity`.                                                                 |
| `show_name`             | boolean | Nedeviga                            | `true` (defaŭlta) aŭ `false`                     | Montri aŭ kaŝi la nomon de la ero.                                                                            |
| `show_icon`             | boolean | Nedeviga                            | `true` (defaŭlta) aŭ `false`                     | Montri aŭ kaŝi la ikonon.                                                                                          |
| `hide_target_temp_low`  | boolean | Nedeviga (nur por eroj subtenantaj `target_temp_low`) | `true` aŭ `false` (defaŭlta) | Kaŝas la malaltan celtemperaturan kontrolilon se subtenata de la `entity`.                                          |
| `hide_target_temp_high` | boolean | Nedeviga (nur por eroj subtenantaj `target_temp_high`)| `true` aŭ `false` (defaŭlta) | Kaŝas la altan celtemperaturan kontrolilon se subtenata de la `entity`.                                         |
| `state_color`           | boolean | Nedeviga                            | `true` aŭ `false` (defaŭlta)                     | Aplikas konstantan fonan koloron kiam la klimatizila ero estas ŜALTITA.                                              |
| `step` | number | Nedeviga | Ajna nombro | La temperatura paŝo. |
| `min_temp` | number | Nedeviga | Ajna nombro | La minimuma temperaturo. |
| `max_temp` | number | Nedeviga | Ajna nombro | La maksimuma temperaturo. |
| `button_action` | object | Nedeviga | `tap_action`, `double_tap_action` aŭ `hold_action`, vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Permesi ŝanĝi la defaŭltajn agojn ĉe klako sur la butono. |
| `tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe klako sur la ikono, se nedifinita, `more-info` estos uzata. |
| `double_tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe duobla klako sur la ikono, se nedifinita, `none` estos uzata. |
| `hold_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe premtenado de la ikono, se nedifinita, `more-info` estos uzata. |                              |
| `main_buttons_position` | string | Nedeviga | `default` aŭ `bottom` | Movi la klimatizilajn agbutonojn al la malsupro (fiksita) |
| `main_buttons_full_width` | boolean | Nedeviga | `true` aŭ `false` | Fari la malsuprajn agbutonojn plenlarĝaj (defaŭlte: `true` kiam pozicio estas `bottom`) |
| `main_buttons_alignment` | string | Nedeviga | `end` (defaŭlta), `center`, `start`, `space-between` | Ĝisrandigo de la malsupraj agbutonoj kiam ne plenlarĝaj |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en sekcia vido), `large` (defaŭlta se en sekcia vido), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alteco) (ekz. `2`) |
| `sub_button`            | object  | Nedeviga                            | Vidu [subbutonojn](#subbutonoj)                | Aldonas personigitajn butonojn fiksitajn dekstre. Utila por klimatizila reĝima elektomenuo.                                  |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Ĉefa fona koloro por subtenataj elementoj en la klimatizila karto |
| `--bubble-climate-border-radius` | `px` | Borderadiuso por subtenataj elementoj de la klimatizila karto |
| `--bubble-climate-button-background-color` | `color` | Fona koloro por la butonoj de la klimatizila karto |
| `--bubble-climate-icon-border-radius` | `px` | Borderadiuso por la ikonujo de la klimatizila karto |
| `--bubble-state-climate-fan-only-color` | `color` | Surkovra koloro por la stato "nur-ventumilo" |
| `--bubble-state-climate-dry-color` | `color` | Surkovra koloro por la seka stato |
| `--bubble-state-climate-cool-color` | `color` | Surkovra koloro por la malvarmiga stato |
| `--bubble-state-climate-heat-color` | `color` | Surkovra koloro por la varmiga stato |
| `--bubble-state-climate-auto-color` | `color` | Surkovra koloro por la aŭtomata stato |
| `--bubble-state-climate-heat-cool-color` | `color` | Surkovra koloro por la varmig-malvarmiga stato |
| `--bubble-climate-accent-color` | `color` | Akcenta koloro por la klimatizila karto |
| `--bubble-climate-box-shadow` | Vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombro (box shadow) por la klimatizila ujo. |

</details>


#### Ekzemploj

<details>

<summary>Klimatizila karto kun falmenuo de HVAC-reĝimoj</summary>

<br>

```yaml
type: custom:bubble-card
card_type: climate
entity: climate.test_climate
sub_button:
  - name: HVAC modes menu
    select_attribute: hvac_modes
    show_arrow: false
    state_background: false
```

</details>

<br>

---

<br>

## Kalendaro

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ĉi tiu karto ebligas montri viajn kalendarajn erojn. Ĝia enhavo estas rulumebla, do vi povas facile foliumi la venontajn eventojn.

### Opcioj de la kalendaro

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo                | Tipo    | Postulo  | Subtenataj opcioj                               | Priskribo                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Nedeviga     | Ajna nombro (minimumo: 1)                        | Nombro da kalendaraj tagoj por preni eventojn, de nun ĝis la fino de la N-a tago (defaŭlte: 7) |
| `entities`          | object  | **Deviga** | Objekto de kalendara ero (vidu sube)            | La ero por kontroli (ekz. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Deviga** | Kalendara ero                               | La kalendara ero por montri                                                          |
| `entities.color`    | string  | Nedeviga     | Koloro                                         | Personigita koloro por la kalendara marko. Se ne difinita, aŭtomata koloro estos elektita |
| `days`              | number  | Nedeviga     | Ajna nombro (minimumo: 1)                         | Nombro da kalendaraj tagoj por preni eventojn, de nun ĝis la fino de la N-a tago (defaŭlte: 7) |
| `limit`             | number  | Nedeviga     | Nombro                                        | La kvanto da eventoj, kiuj estos montrataj sur la karto                                  |
| `show_end`          | boolean | Nedeviga     | `true` aŭ `false` (defaŭlta)                     | Montri aŭ kaŝi la finan tempon de eventoj                                                    |
| `show_progress`     | boolean | Nedeviga     | `true` (defaŭlta) aŭ `false`                     | Montri aŭ kaŝi la progresbreton de la evento                                                     |
| `show_started_events`| boolean | Nedeviga     | `true` (defaŭlta) aŭ `false`                     | Montri aŭ kaŝi eventojn, kiuj nune okazas. Plurtagaj eventoj estas juĝataj tagon post tago, do nur la kuranta tago estas kaŝata kaj la venontaj tagoj restas videblaj |
| `scrolling_effect`  | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Permesi al teksto ruli kiam la enhavo superas la grandon de sia ujo |
| `event_action` | object | Nedeviga | `tap_action`, `double_tap_action` aŭ `hold_action`, vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Permesi aldoni agojn ĉe klako sur evento. |
| `tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe klako sur tago, se nedifinita, `none` estos uzata. |
| `double_tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe duobla klako sur tago, se nedifinita, `none` estos uzata. |
| `hold_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe premtenado de tago, se nedifinita, `none` estos uzata. |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en sekcia vido), `large` (defaŭlta se en sekcia vido), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alteco) (ekz. `2`) |
| `sub_button` | object | Nedeviga | Vidu [subbutonojn](#subbutonoj) | Aldoni personigitajn butonojn fiksitajn dekstre |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligo</a>)</b></summary>

| Variablo                                  | Atendata valoro | Priskribo                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Ĉefa fona koloro por subtenataj elementoj en la kalendara karto  |
| `--bubble-calendar-border-radius`         | `px`           | Borderadiuso por subtenataj elementoj de la kalendara karto |
| `--bubble-calendar-height`                | `px`           | Alteco por la kalendara karto                                        |

</details>

#### Ekzemploj

<details>

<summary>Kalendara karto kun limigita kvanto da eventoj</summary>

<br>

```yaml
type: custom:bubble-card
card_type: calendar
entities:
  - entity: calendar.main_calendar
    color: '#ffb010'
limit: 1
```

</details>

<details>

<summary>Kalendara karto kun fina tempo kaj progresbreto</summary>

<br>

```yaml
type: custom:bubble-card
card_type: calendar
entities:
  - entity: calendar.main_calendar
    color: '#ffb010'
show_end: true
show_progress: true
```

</details>

<br>

---

<br>


## Apartigilo

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ĉi tiu karto estas simpla apartigilo por dividi vian ŝprucfenestron en kategoriojn / sekciojn. Ekz. Lumoj, Aparatoj, Kovriloj, Agordoj, Aŭtomatigoj...

### Opcioj de la apartigilo

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `name` | string | Nedeviga sed rekomendata | Ajna teksto | Nomo por via apartigilo |
| `icon` | string | Nedeviga sed rekomendata | Ajna `mdi:` piktogramo | Piktogramo por via apartigilo |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en seksia rigardo), `large` (defaŭlta se en seksia rigardo), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alto) (ekz. `2`) |
| `sub_button` | object | Nedeviga | Vidu [subbutonojn](#subbutonoj) | Aldoni personigitajn butonojn fiksitajn dekstre |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligon</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Fona koloro por la linio en la apartigilo |

</details>

#### Ekzemplo

<details>

<summary>Apartigilo/dividilo por sekcio "Kovriloj"</summary>

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

## Malplena kolumno

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ĉi tiu karto ekzistas por plenigi malplenan kolumnon. Tio utilas se vi havas `horizontal-stack` en via ŝprucfenestro kun nur unu karto. Rigardu la malsupran dekstran angulon de ĉi tiu ekrankopio por (ne) vidi ĝin.

### Opcioj de la malplena kolumno

Ĉi tiu karto ne havas opciojn kaj ne subtenas [stiligon](#stiligo), tamen ĝi subtenas aranĝajn opciojn por HA-sekcioj.

#### Ekzemplo

<details>

<summary>Malplena kolumno en horizontala stako</summary>

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

## Nur subbutonoj

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Ĉi tiu karto estas dediĉita nur al subbutonoj. Ĝi estas perfekta por menuoj, rapidaj agoj, informaj etikedoj, aŭ fiksa piedo ĉe la malsupro de la paĝo.

> [!IMPORTANT]  
> Ĉi tiu karto uzas la novan skemon de subbutonoj. Uzu `sub_button.bottom` por difini viajn butonojn. La sekcio `sub_button.main` estas ignorata.

### Opcioj de nur subbutonoj

<details>

<summary><b>Opcioj (YAML + priskriboj)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Deviga** | Vidu [subbutonojn](#subbutonoj) | Difini viajn subbutonojn per la sekcio `bottom` |
| `hide_main_background` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Forigi la fonon de la karto |
| `footer_mode` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Fiksi la karton ĉe la malsupro de la paĝo |
| `footer_full_width` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Fari la piedon plenlarĝa (100%) |
| `footer_width` | number | Nedeviga | Ajna nombro | Larĝo de la piedo en pikseloj kiam `footer_full_width` estas `false` |
| `footer_bottom_offset` | number | Nedeviga | Ajna nombro | Distanco de la malsupro de la paĝo en pikseloj (defaŭlte: `16`) |
| `card_layout` | string | Nedeviga | `normal` (defaŭlta se ne en seksia rigardo), `large` (defaŭlta se en seksia rigardo), `large-2-rows`, `large-sub-buttons-grid` | Stila aranĝo de la karto, vidu [aranĝojn de la karto](#aranĝoj-de-la-karto) |
| `rows` | number | Nedeviga | Ajna nombro | Nombro da vicoj (alto) (ekz. `2`) |

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligon</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Larĝo de la piedo kiam `footer_full_width` estas `false` |
| `--bubble-footer-bottom` | `px` | Malsupra deŝovo de la piedo |
| `--bubble-footer-box-shadow` | vidu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombro de skatolo por la piedujo |

</details>

#### Ekzemploj

<details>

<summary>Etikedoj (kiel en la ekrankopio)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: sub-buttons
hide_main_background: true
sub_button:
  main: []
  bottom:
    - name: Chips
      buttons_layout: inline
      group:
        - entity: person.quentin
          show_name: true
          fill_width: false
        - entity: sensor.geraldine_presence
          show_name: true
          fill_width: false
        - entity: input_boolean.alarme
          fill_width: false
          name: Alarm
          show_name: true
          tap_action:
            action: toggle
        - entity: sensor.salle_de_bain_temperature
          fill_width: false
          show_state: true
          state_background: false
        - entity: input_select.test
          fill_width: false
          sub_button_type: select
          name: Scene
          icon: mdi:weather-sunny
          show_state: true
      justify_content: center
rows: 0.941
```

</details>

<details>

<summary>Fiksa piedmenuo</summary>

<br>

```yaml
type: custom:bubble-card
card_type: sub-buttons
footer_mode: true
footer_full_width: true
sub_button:
  bottom:
    - name: Home
      icon: mdi:home
      tap_action:
        action: navigate
        navigation_path: '#home'
    - name: Lights
      icon: mdi:lightbulb
      tap_action:
        action: navigate
        navigation_path: '#lights'
    - name: Settings
      icon: mdi:cog
      tap_action:
        action: navigate
        navigation_path: '#config'
rows: 0.941
```

</details>

<br>

---

<br>

## Subbutonoj

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

En ĉiu karto kiu subtenas tiun opcion, vi povas aldoni subbutonojn por ankoraŭ pli personigi viajn kartojn. Vi povas, ekzemple, krei butonon kiu regas polvosuĉilon, veterkarton, aŭ preskaŭ ion ajn, kion vi elpensos. Ĉi tiuj subbutonoj subtenas la tuŝagojn kaj la plimulton de la butonaj opcioj.

Subbutonoj nun subtenas tri tipojn: **Defaŭlta (butono)**, **Ŝovilo**, kaj **Falmenuo / Elekto**. Vi povas miksi tipojn en la sama karto, meti subbutonojn supre aŭ malsupre, kaj organizi ilin en grupojn por pli progresintaj aranĝoj.

#### Loko kaj grupoj de subbutonoj

<details>

<summary><b>Strukturo de subbutonoj (main / bottom + grupoj)</b></summary>

<br>

```yaml
sub_button:
  main:
    - group:
        - entity: sensor.temperature
          show_state: true
          show_background: false
        - entity: sensor.humidity
          show_state: true
          show_background: false
      buttons_layout: column
  bottom:
    - group:
        - entity: light.living_room
        - entity: light.bedroom
      buttons_layout: inline
      justify_content: center
  main_layout: inline
  bottom_layout: rows
```

**Notoj:**
- `main` kaj `bottom` estas du sendependaj sekcioj. Malsupraj subbutonoj estas fiksitaj ĉe la malsupro de la karto.
- `main_layout` kaj `bottom_layout` akceptas `inline` (defaŭlta) aŭ `rows` por staki grupojn vertikale.
- Grupoj estas objektoj kun tabelo `group` kaj nedeviga `buttons_layout` (`inline` aŭ `column`).
- `justify_content` disponeblas nur por **malsupraj grupoj** (`start`, `center`, `end`, `fill`).
- Kiam malsupraj subbutonoj ĉeestas, la karta aranĝo aŭtomate ŝanĝiĝas al `large`, krom se vi eksplicite agordas alian aranĝon.
- Malnovaj `sub_button`-tabeloj ankoraŭ estas subtenataj kaj traktataj kiel la sekcio `main`.

</details>

### Opcioj de subbutonoj

<details>

<summary><b>Opcioj (YAML + priskribo)</b></summary>

| Nomo | Tipo | Postulo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- | --- |
| `entity` | string | Nedeviga | Ajna ento | Ento por regi |
| `name` | string | Nedeviga | Ajna teksto | Nomo por via subbutono, se ne difinita ĝi montros la nomon de la ento |
| `icon` | string | Nedeviga | Ajna `mdi:` piktogramo | Piktogramo por via subbutono, se ne difinita ĝi montros la piktogramon aŭ la bildon de la ento |
| `force_icon` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Devigi la piktogramon eĉ se bildo de ento haveblas |
| `sub_button_type` | string | Nedeviga | `default`, `slider` aŭ `select` | Elekti la tipon de la subbutono |
| `show_background` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri fonon por via subbutono, ĝi ŝanĝos sian koloron laŭ la stato de via ento |
| `state_background` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Uzi la statan koloron kiam la ento estas `on` |
| `light_background` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Uzi la lumkoloron por la fono, kiam havebla |
| `show_state` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri aŭ kaŝi la staton de via `entity` |
| `show_name` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri aŭ kaŝi la nomon |
| `show_icon` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la piktogramon |
| `show_last_changed` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la tempon de lasta ŝanĝo de via `entity` |
| `show_last_updated` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri la tempon de lasta ĝisdatigo de via `entity` |
| `show_attribute` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Montri atributon de via `entity` sub ĝia `name` |
| `attribute` | string | Nedeviga (deviga se `show_attribute` estas `true`) | Atributo de via `entity` | La atributo montrenda (ekz. `brightness`) |
| `select_attribute` | string | Nedeviga | Atributa listo de via `entity` (vidu subtenatajn opciojn supre) | Ĉi tiu atributa listo malfermos falmenuon se alklakita (ekz. `effect_list`) |
| `show_arrow` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Montri aŭ kaŝi la falmenuan sagon por elektaj subbutonoj |
| `scrolling_effect` | boolean | Nedeviga | `true` (defaŭlta) aŭ `false` | Permesi al teksto ruliĝi kiam la enhavo superas la grandon de la ujo |
| `tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe alklako de la subbutono, se ne difinita, `more-info` estos uzata. |
| `double_tap_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe duobla alklako de la subbutono, se ne difinita, `none` estos uzata. |
| `hold_action` | object | Nedeviga | Vidu [agojn](#agoj-tuŝeti-duoble-tuŝeti-kaj-longe-premi) | Difini la tipon de ago ĉe premteno de la subbutono, se ne difinita, `more-info` estos uzata. |
| `fill_width` | boolean | Nedeviga | `true` aŭ `false` | Plenigi la disponeblan larĝon (defaŭlte: `false` por main, `true` por bottom) |
| `width` | number aŭ string | Nedeviga | Ajna nombro aŭ CSS-longo | Propra larĝo (`px` por la sekcio main, `%` por la sekcio bottom defaŭlte) |
| `custom_height` | number | Nedeviga | Ajna nombro | Propra alto en pikseloj |
| `content_layout` | string | Nedeviga | `icon-left` (defaŭlta), `icon-top`, `icon-bottom`, `icon-right` | Loko de la piktogramo interne de la subbutono |
| `always_visible` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | **Nur por ŝoviloj.** Ĉiam montri la ŝovilon anstataŭ malfermi ĝin ĉe tuŝeto |
| `show_button_info` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | **Nur por ŝoviloj.** Montri piktogramon/nomon/staton kiam `always_visible` estas ŝaltita |
| `visibility` | object aŭ list | Nedeviga | Vidu [kondiĉojn](#kondiĉoj) | Montri aŭ kaŝi la subbutonon laŭ kondiĉoj |
| `hide_when_parent_unavailable` | boolean | Nedeviga | `true` aŭ `false` (defaŭlta) | Kaŝi la subbutonon se la ento de la patra karto ne haveblas |
| `css_class` | string | Nedeviga | Ajna signoĉeno | Kroma CSS-klaso sur la subbutono, por celi ĝin en via [stiligo](#stiligo) kia ajn estu ĝia nomo (ekz. `My value` donas `.my-value`) |

</details>

<details>

<summary><b>Opcioj de ŝovila subbutono (samaj kiel butonaj ŝoviloj)</b></summary>

<br>

Ŝovilaj subbutonoj subtenas la samajn ŝovilajn opciojn kiel butonaj ŝoviloj, inkluzive de:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-variabloj (vidu <a href="#stiligo">Stiligon</a>)</b></summary>

| Variablo | Atendata valoro | Priskribo |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Rondeco de anguloj por la subbutonoj |
| `--bubble-sub-button-background-color` | `color` | Fona koloro por la subbutonoj |
| `--bubble-sub-button-outline` | `box-shadow` | Konturo aldonata al subbutono aŭ ŝovilo, nur kiam tiu elemento estas pentrata en la sama koloro kiel la karto malantaŭ ĝi, kio farus ĝin nevidebla (agordu ĝin al `none` por forigi ĝin) |
| `--bubble-sub-slider-border-radius` | `px` | Rondeco de anguloj por ŝovilaj subbutonoj |
| `--bubble-sub-slider-background-color` | `color` | Fona koloro por ŝovilaj subbutonoj |
| `--bubble-sub-slider-height` | `px` | Alto por ĉiam-videblaj ŝovilaj subbutonoj |
| `--bubble-sub-slider-outline` | `box-shadow` | Konturo nur de la ŝovilaj subbutonoj, retropaŝas al `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Teksta koloro sur helaj fonoj de subbutonoj |

</details>

#### Ekzemploj

<details>

<summary>Butono kun kelkaj subbutonoj por krei polvosuĉilan karton (kiel en la ekrankopio)</summary>

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

<summary>Butona ŝovilo kun subbutono kiu montras la brilecon kaj alia kiu baskuligas la lumon (kiel en la ekrankopio)</summary>

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

<summary>Butono kiu montras la internan kaj eksteran temperaturon kun la vetero por hodiaŭ kaj morgaŭ (kun ekrankopio)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Malbonŝance por mi estas nuba la tutan tempon, sed ĉiuj piktogramoj ŝanĝiĝas laŭ la vetero.

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

## Aranĝoj de la karto

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card plene subtenas la sekcian rigardon de Home Assistant, vi povas ŝanĝi la kartan aranĝon por igi la karton pli grandan kaj ankaŭ ŝanĝi la nombron da kolumnoj aŭ vicoj kiujn la karto okupu en via sekcia rigardo (nur ĉe la kartoj kiuj subtenas tiun opcion). Ĉi tiuj aranĝoj ankaŭ estas subtenataj en ĉiuj aliaj rigardaj tipoj.

<details>

<summary><b>Haveblaj kartaj aranĝoj</b></summary>

| Aranĝo | Priskribo |
| --- | --- |
| `normal` | La kutima aranĝo (ne optimumigita por la sekcia rigardo) |
| `large` | Pli granda aranĝo kiu regrandiĝos laŭ la elektitaj vicoj en la sekcia rigardo (optimumigita por la sekcia rigardo) |
| `large-2-rows` | Pli granda aranĝo kun 2 vicoj de subbutonoj kiu regrandiĝos laŭ la elektitaj vicoj en la sekcia rigardo (optimumigita por la sekcia rigardo) |
| `large-sub-buttons-grid` | Ĉi tiu aranĝo montras subbutonojn en krado, `rows` devas esti agordita al almenaŭ `2`.

</details>

#### Ekzemploj

<details>

<summary>Granda butono kiu montras energiajn statistikojn kun 2 vicoj de subbutonoj (kun ekrankopio)</summary>

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

<details>

<summary>Granda butono kun pluraj vicoj kaj 12 subbutonoj</summary>

<br>

<img width="547" alt="image" src="/img/Example_Layout_Large_multi-row.png">

```yaml
type: custom:bubble-card
card_type: button
button_type: state
entity: sun.sun
card_layout: large-sub-buttons-grid
grid_options:
  rows: 3
sub_button:
  - entity: sun.sun
    icon: mdi:numeric-0
  - entity: sun.sun
    icon: mdi:numeric-1
  - entity: sun.sun
    icon: mdi:numeric-2
  - entity: sun.sun
    icon: mdi:numeric-3
  - entity: sun.sun
    icon: mdi:numeric-4
  - entity: sun.sun
    icon: mdi:numeric-5
  - entity: sun.sun
    icon: mdi:numeric-6
  - entity: sun.sun
    icon: mdi:numeric-7
  - entity: sun.sun
    icon: mdi:numeric-8
  - entity: sun.sun
    icon: mdi:numeric-9
  - entity: sun.sun
    icon: mdi:numeric-10
  - entity: sun.sun
    icon: mdi:numeric-negative-1
```

</details>

<br>

---

<br>

## Kondiĉoj

Kelkaj opcioj estas regataj de kondiĉoj, skribataj ekzakte kiel tiuj de la [kondiĉa karto](https://www.home-assistant.io/dashboards/conditional/) de Home Assistant:

- `visibility` sur [subbutono](#subbutonoj), por montri aŭ kaŝi ĝin
- `trigger` sur [ŝprucfenestro](#ŝprucfenestro), por malfermi ĝin kiam la kondiĉoj estas plenumitaj
- `checkConditionsMet(conditions, hass)` ene de viaj [ŝablonoj](#ŝablonoj), kiam vi bezonas la respondon en via propra kodo

Ĉiu kondiĉotipo de Home Assistant estas taksata: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, kaj la grupoj `and`, `or` kaj `not`. Ankaŭ la kondiĉoj de la kondiĉkonstruilo de Home Assistant funkcias, tiuj nomitaj laŭ sia domajno kiel `sun.is_up`, `light.is_on`, `zone.in_zone` aŭ `temperature.is_value`, kun siaj agordoj `target`, `options`, `behavior` kaj `for`.

<details>

<summary><b>Ekzemplo</b></summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
entity: light.kitchen
sub_button:
  - name: Night mode
    icon: mdi:weather-night
    visibility:
      - condition: sun.is_set
      - condition: state
        entity: person.me
        state: home
```

</details>

> [!NOTE]
> Kondiĉoj estas taksataj en via retumilo, do la malmultaj el ili kiuj bezonas la servilon de Home Assistant ne povas esti ekzaktaj: sunleviĝo kaj sunsubiro estas legataj el la ento `sun.sun` anstataŭ esti rekalkulataj, kaj daŭro `for` estas mezurata de la lasta ŝanĝo de stato, sen la historio de recorder.
>
> `view_columns` estas akceptata sed ĉiam sukcesas, ĉar Bubble Card neniam estas tiu, kiu aranĝas la kolumnojn de via vido. Kondiĉotipo, kiun Bubble Card ne konas, anoncas sin unufoje en via retumila konzolo anstataŭ silente malsukcesi, do vi povas distingi tajperaron de mankanta funkcio.

<br>

---

<br>

## Agoj tuŝeti, duoble tuŝeti kaj longe premi

Vi ankaŭ povas uzi la defaŭltajn tuŝ-agojn, duoblajn tuŝ-agojn kaj premo-agojn de Home Assistant sur la kartoj, kiuj subtenas tiun opcion. Ekzemple, tio ebligas montri la fenestron "pli da informoj" per longa premo sur butona piktogramo, aŭ ruli servon kiam subbutono estas premita.

**Noto: Kiam `double_tap_action` estas agordita, la kutima `tap_action` havos prokraston de 200ms por permesi la detekton
de duobla tuŝo. Se ĉi tiu prokrasto estas nedezirata, agordu `double_tap_action` al `none` por malŝalti la traktadon de duobla tuŝo.**

### Agaj opcioj

<details>

<summary><b>Opcioj (YAML + priskribo)</b></summary>

| Nomo | Tipo | Subtenataj opcioj | Priskribo |
| --- | --- | --- | --- |
| `action` | ĉeno | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Ago plenumenda |
| `target` | objekto |  | Funkcias nur kun `call-service`. Sekvas la [sintakson de home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | ĉeno | Ajna vojo de via panelo | Vojo al kiu navigi (ekz. `'#kitchen'` por malfermi ŝprucfenestron) kiam la ago estas difinita kiel navigate |
| `url_path` | ĉeno | Ajna ligilo | URL malfermenda ĉe alklako (ekz. `https://www.google.com`) kiam la ago estas `url` |
| `service` | ĉeno | Ajna servo | Servo alvokenda (ekz. `media_player.media_play_pause`) kiam `action` estas difinita kiel `call-service` |
| `data` aŭ `service_data` | objekto | Ajnaj servo-datumoj | Servo-datumoj kunmetendaj (ekz. `entity_id: media_player.kitchen`) kiam `action` estas difinita kiel `call-service` |
| `confirmation` | objekto | Vidu [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Montri konfirman ŝprucfenestron (ne tiun de Bubble Card), superregas la defaŭltan objekton `confirmation` |

</details>

#### Ekzemplo

<details>

<summary>Butono por malfermi ŝprucfenestron</summary>

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

## Stiligo

Vi povas aldoni proprajn stilojn por modifi la CSS de ĉiuj kartoj **sen uzi card-mod** laŭ kvar manieroj:

- En la redaktilo, iru al la karto, kiun vi volas modifi, poste navigu al _Styling options > Custom styles & JS templates_, kaj aldonu viajn proprajn stilojn (kontrolu la konsiletojn kaj ekzemplojn sube).
- En la redaktilo (aŭ en [YAML](#moduloj)), iru al la karto, kiun vi volas modifi, poste navigu al _Modules_, kaj poste kreu novan modulon (ĝi estos disponebla por ĉiuj kartoj), aŭ iru al la **Module Store** por instali kiun ajn disponeblan modulon (pli da detaloj pri moduloj troveblas [sube](#moduloj)).
- En dosiero de [etoso](https://www.home-assistant.io/integrations/frontend/#defining-themes) (theme) aldonante CSS-variablojn en YAML (ĉi tiuj disponeblas en la dokumentado de ĉiu karto supre). Tio ebligas tutmondajn modifojn.

  <details>
  
  <summary>Ekzemplo</a></summary>
  
  <br>

  Ne kopiu la linion `Bubble:`, tio estas la nomo de la etoso, kiun vi uzas. Vi ankaŭ devas forigi la `--` el la variabloj.

  Vi devas ruli la agon [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) por refreŝigi la etoson post iuj ajn modifoj.

  ```yaml
  Bubble:  
    # Bubble Card variables test
    bubble-border-radius: "8px"
    bubble-main-background-color: "rgb(50,70,90)"
    bubble-secondary-background-color: "rgb(0,70,90)"
    bubble-pop-up-main-background-color: "rgba(200,200,200,0.5)"
    bubble-accent-color: "rgb(100,140,180)"
    bubble-icon-background-color: "rgb(50,80,100)"
    bubble-select-list-width: "200px"
    bubble-select-list-background-color: "rgb(100,140,180)"
  ```
  
  </details>
  
- En YAML aldonante `styles: |` sekvatan de viaj propraj stiloj (kontrolu la konsiletojn kaj ekzemplojn sube).

> [!TIP]  
> **Por kompreni, kiuj stilklasoj estas modifeblaj**, vi povas rigardi la dosierujon [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) en tiu ĉi deponejo. En ĉiu kartodosierujo, vi trovos dosieron nomitan `styles.css`. Ĉi tiuj dosieroj enhavas ĉiujn aplikatajn stilojn. Tio ebligas multe pli da eblecoj ol CSS-variabloj, sed ĝi devas esti aldonita unuope al ĉiu karto.
> 
> Vi ankaŭ povas trovi multajn [ekzemplojn de la komunumo](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), aŭ kelkajn el la [Home Assistant-forumo](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) per iom da serĉado.
>
> La Bubble-etoso por Home Assistant (kiel sur la ekrankopioj) troveblas [ĉi tie](https://github.com/Clooos/Bubble).
>
> Instrua video baldaŭ venos sur mia [YouTube-kanalo](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Bonvolu noti, ke eble vi devos aldoni `!important;` al kelkaj CSS-stiloj, kiuj estas jam difinitaj (vidu ekzemplojn sube).

> [!TIP]  
> Subbutonoj povas esti celataj per nom-bazitaj klasoj. Ekzemple, subbutono nomita "My sub-button" povas esti stiligita per `.my-sub-button`. Ŝovilaj subbutonoj ankaŭ havigas `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, ktp.
>
> Nom-bazita klaso ŝanĝiĝas kiam vi renomas subbutonon, kaj ĝi estas tradukata kiam la nomo estas tradukata. Agordu `css_class` sur la subbutono por havi propran klason, kiu neniam moviĝas, kia ajn estu ĝia nomo kaj kia ajn estu la lingvo.

#### Ekzemploj

<details>

<summary>Ŝanĝi la tiparograndon de kiu ajn Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Ŝanĝi la fonkoloron de unu sola butono en horizontala stako de butonoj</summary>

<br>

```yaml
styles: >
  /* Selector for the '#kitchen' button */
  .kitchen > .bubble-background-color {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ŝanĝi la fonkoloron de karto</summary>

<br>

Ĉi tiu funkcias sur ĉiuj tipoj de Bubble Card (krom la ŝprucfenestroj):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ĉi tiu faras la saman nur en butonkarto (ĝi funkcias por la ŝprucfenestra kaplinio): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Por ŝanĝi la koloron kiam la stato estas `on`, rigardu la stilŝablonojn sube.

</details>

<details>

<summary>Ŝanĝi la koloron de butona ŝovilo</summary>

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

<summary>Ŝanĝi la linikoloron de apartigilo</summary>

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

<summary>Ŝanĝi la koloron de piktogramo</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Por piktogramo en horizontala stako de butonoj.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Ŝanĝi la fonkoloron de piktograma ujo</summary>

<br>

Ĉi tiu funkcias sur ĉiuj tipoj de Bubble Card (krom la ŝprucfenestroj):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ĉi tiu faras la saman por la ŝprucfenestra kaplinio: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Ŝanĝi la grandon de la subbutonoj (perfekta por la granda aranĝo)</summary>

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

<summary>Ŝanĝi la fonkoloron de la dua subbutono</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ŝanĝi la grandon de piktogramo</summary>

<br>

Por la ĉefa piktogramo.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Por la subbutonaj piktogramoj.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Uzi bildon anstataŭ piktogramo en subbutono</summary>

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

Simple alŝutu tiun bildon en dosierujon "pictures" (aŭ la nomo, kiun vi volas) en la dosierujo "www" de Home Assistant.

</details>

<details>

<summary>Progresinta ekzemplo: Krei horizontalan vicon da subbutonoj (kun ekrankopio)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Mi vere amas ĉi tiun, mi uzas ĝin kiel kaplinion en mia panelo.

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
    border: none;
  }
  .bubble-sub-button {
    height: 46px !important;
    width: 46px !important;
  }
  .bubble-sub-button-container {
    display: flex !important;
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

## Ŝablonoj

**Bubble Card ne subtenas Jinja-ŝablonojn**, sed spertaj uzantoj povas aldoni ŝablonojn en JS rekte en siaj [propraj stiloj](#stiligo). Ekzemple, tio ebligas dinamike ŝanĝi piktogramon, la tekstojn aŭ la kolorojn de elemento, montri aŭ kaŝi elementon laŭkondiĉe (kiel subbutonon), aŭ preskaŭ ion ajn bazitan sur stato, atributo kaj pli.

> [!TIP]  
> Pli da informoj pri JS-ŝablonoj [ĉi tie](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mia konsilo estas **ĉiam rigardi la konzolon de via retumilo** por certiĝi, ke ĉio funkcias ĝuste.

> [!IMPORTANT]  
> **Ĉiuj ŝablonoj, kiuj ne modifas CSS-econ, devas esti metitaj ĉe la fino! Kiel modifi piktogramon, tekston aŭ kiun ajn elementon.**

#### Disponeblaj variabloj kaj funkcioj

<details>

<summary>Variabloj</summary>

<br>

Vi havas aliron al ĉi tiuj variabloj en la plej multaj kartoj:

- `state` liveros la staton de via difinita `entity`.
  
- `entity` liveros vian entity, kiun vi difinis kiel `switch.test` en ĉi tiu ekzemplo.
  
- `icon` uzeblas tiel por ŝanĝi la piktogramon `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` liveros la staton de la difinita `entity` de via unua subbutono, `[0]` estas la stato de la unua subbutono, `[1]` la dua...
  
- `subButtonIcon[0]` uzeblas tiel por ŝanĝi la piktogramon de la unua subbutono `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` estas la piktogramo de la unua subbutono, `[1]` la dua...
  
- `card` liveros la kartan elementon en la DOM.
  
- `hass` estas progresinta variablo, kiu donas al vi eĉ pli da regado, ekzemple vi povas liveri la staton de `light.kitchen` tiel `hass.states['light.kitchen'].state` aŭ atributon tiel `hass.states[entity].attributes.brightness`.

- `this` liveros multajn utilajn informojn pri via agordo kaj panelo, uzu tion nur se vi scias, kion vi faras.

</details>

<details>

<summary>Funkcioj</summary>

<br>

Vi havas aliron al ĉiuj tutmondaj JS-funkcioj, sed vi ankaŭ havas aliron al:

- `getWeatherIcon` uzeblas por liveri veteran piktogramon bazitan sur stato, kiu redonas la veteron. Ekzemple, vi povas fari tion `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` por ŝanĝi la piktogramon de la tria subbutono al la hodiaŭa vetera piktogramo, `.forecast[1]?.condition` estas por morgaŭ...

  Vi devos krei ŝablonan sensilon por tio. Jen kion vi povas aldoni en via `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` redonas `true` kiam listo de [kondiĉoj](#kondiĉoj) estas plenumita, ekzemple `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` uzeblas por traduki staton (ankaŭ uzeblas por ricevi la unuon de stato, sen bezono aldoni ĝin permane).
- `hass.formatEntityAttributeValue(state, "attribute")` uzeblas por traduki atributon (ankaŭ uzeblas por ricevi la unuon de stato, sen bezono aldoni ĝin permane).

</details>

#### Ekzemploj

Vi povas trovi multajn ekzemplojn sube, sed vi ankaŭ povas trovi tre progresintajn ŝablonojn sur mia [Patreon-paĝo](https://www.patreon.com/c/Clooos), kiel unu (mia plej ŝatata), kiu ebligas ĝis kvar laŭkondiĉajn insignojn lokitajn ĉirkaŭ la piktogramoj de la karto. Tio ankaŭ estas bonega maniero lerni pri ĉiuj eblecoj de la propraj stiloj kaj ŝablonoj de Bubble Card!

<details>
<summary>Ekzemploj de mia Patreon-paĝo</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Aldoni al kiu ajn karto insignojn similajn al tiuj de Home Assistant</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Montri formatitan daton kaj horon en apartigilo sen uzi ajnan entity</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Montri staton de subbutono sur du linioj</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personecigi etikedojn kaj piktogramojn interne de elekta subbutono</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Aldoni daŭran memorigan ŝprucfenestron, kiu aperas nur kiam necese</a>
</p>

<br>

</details>

<details>

<summary>Ŝanĝi la fonkoloron de butono, kiu estas ruĝa kiam ĝi estas <code>off</code> kaj blua kiam ĝi estas <code>on</code></summary>

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

<summary>Ŝanĝi la fonkoloron de butono bazita sur entity por la horizontala stako de butonoj</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Montri/Kaŝi subbutonon laŭkondiĉe</summary>

<br>

Ĉi tiu montras la unuan subbutonon nur kiam mia polvosuĉilo estas blokita.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ĉi tiu montras subbutonon kiam la baterio estas sub 10%. Utila kun subbutono, kiu montras "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ŝanĝi piktogramon aŭ subbutonan piktogramon laŭkondiĉe</summary>

<br>

Ĉi tiu ŝanĝas butonan piktogramon nur kiam polvosuĉilo estas blokita.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ĉi tiu ŝanĝas la piktogramon de la unua subbutono nur kiam polvosuĉilo estas blokita.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Ŝanĝi la koloron de piktogramo aŭ subbutona piktogramo laŭkondiĉe</summary>

<br>

Ĉi tiu ŝanĝas la koloron de butona piktogramo bazita sur ĝia stato.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ĉi tiu ŝanĝas la koloron de subbutona piktogramo bazita sur ĝia stato. `.bubble-sub-button-1` estas la unua subbutono, anstataŭigu `1` se vi volas ŝanĝi alian subbutonan piktogramon.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animacii ventoluman piktogramon laŭkondiĉe</summary>

<br>

Ĉi tiu turnas butonan piktogramon kiam ventolilo estas `on`.
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

<summary>Ŝablonigi tekstojn (kiel nomo aŭ stato)</summary>

<br>

Ĉi tiu ŝanĝas butonan nomon/staton al "Nun estas sune" depende de via vetero.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
aŭ kiam aplikite por subbutonoj:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Se vi volas ŝablonigi la staton (`.bubble-state`), ne ŝaltu `show_state: true`, simple ŝaltu `show_attribute: true` sen ajna atributo.

</details>

<details>

<summary>Progresinta ekzemplo: Ŝanĝi la koloron de subbutono kiam ŝprucfenestro estas malfermita</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Progresinta ekzemplo: Ŝablonigi nomon de apartigilo bazitan sur stato tradukita al via lingvo</summary>

<br>

Vi povas uzi `hass.formatEntityState(state)` por traduki staton kaj `hass.formatEntityAttributeValue(state, "attribute")` por traduki atributon.

Ĉi tiu ŝanĝas la nomon kaj la piktogramon bazitajn sur la vetero, "Nuageux" signifas "nuba" en la franca.

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

## Moduloj

Moduloj estas potenca funkcio, kiu ebligas al vi konservi, reuzi kaj kunhavigi viajn proprajn stilojn kaj ŝablonojn tra ĉiuj viaj Bubble Cards. Anstataŭ kopii kaj alglui la saman kodon en plurajn kartojn, vi povas krei modulon kaj apliki ĝin kie ajn vi bezonas. Tio faras la administradon de la aspekto de via panelo multe pli facila kaj efika.

Sed ĉi tiu funkcio estas multe pli potenca ol tio, ĝi ebligas al vi mem aldoni verajn funkciojn en la redaktilo de Bubble Card, uzante ĉiujn defaŭltajn opciojn de [Home Assistant-formularo](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
La objekto-elektilo estis plibonigita por montri vivajn ŝanĝojn kaj por korekte subteni atributojn.

Modulo povas ankaŭ respondi al la kartoelektilo de Home Assistant apud la enkonstruitaj [sugestoj pri entoj](#sugestoj-pri-entoj): uzu `suggestions` por la kartoj, kiujn ĝi povas priskribi anticipe, kaj `suggestions_code` kiam ili devas esti kalkulataj el via instalaĵo, ekzemple ŝprucfenestro konstruita el ĉiuj entoj de la areo al kiu apartenas la elektita ento. Ambaŭ ŝlosiloj estas dokumentitaj [ĉi tie](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Vi ankaŭ povas foliumi la **Module Store** por trovi kaj instali [modulojn kreitajn de la komunumo](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), aŭ kunhavigi viajn proprajn kreaĵojn!

> [!TIP]
> La kodo de modulo funkcias ekzakte same kiel la kodo en la sekcio `styles` de karto. Ĉiuj samaj variabloj kaj funkcioj el la sekcio [Ŝablonoj](#ŝablonoj) estas disponeblaj.

<br>

### Komenca agordado

> [!IMPORTANT]
> Ekde v3.1.0, Bubble Card Tools estas la rekomendata konserva sistemo por moduloj. La malnova metodo per ŝablona sensilo ankoraŭ funkcias por ekzistantaj agordoj, sed novaj moduloj kaj Module Store-funkcioj plej bone subtenataj per Bubble Card Tools.

La integraĵo Bubble Card Tools ebligas la Module Editor kaj la Module Store, kaj konservas modulojn kiel unuopajn YAML-dosierojn. Ekzistantaj moduloj estas migrataj aŭtomate.

La instalaj kaj agordaj paŝoj estas klarigitaj ĉi tie:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### La Module Editor

Vi povas aliri la Module Editor el la agordoj de ajna karto, sub la sekcio **Modules**. La redaktilo provizas du ĉefajn langetojn:

#### La langeto My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Ĉi tiu langeto montras ĉiujn viajn instalitajn modulojn kaj ebligas al vi:

- **Apliki** ekzistantajn modulojn al la nuna karto
- **Krei** novan modulon de nulo
- **Redakti** ekzistantajn modulojn kun viva antaŭrigardo
- **Forigi** modulojn, kiujn vi ne plu bezonas
- **Serĉi** kaj **ordigi** modulojn (alfabete, laste uzitaj, aktivaj unue)
- **Agordi tutmondan staton** por igi modulon aŭtomate aplikita al ĉiuj kartoj
- **Enporti/Elporti** modulojn por sekurkopio aŭ kunhavigo
- **Skribi sugestojn pri entoj** en la modula redaktilo, sub **Nedeviga: sugestoj pri entoj**, por ke via modulo estu proponata en la kartoelektilo de Home Assistant. Kaj la reguloj kaj la kalkulitaj sugestoj estas kontrolataj dum vi skribas, eraro tie malebligas konservi, kaj la antaŭrigardo montras la sugestitajn kartojn por ajna ento, kiun vi elektas

#### La langeto Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Ĉi tiu langeto montros [ĉiujn disponeblajn modulojn de la komunumo](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), kaj ebligas al vi:

- **Foliumi** ĉiujn de la komunumo kreitajn modulojn
- **Serĉi** kaj filtri modulojn laŭ nomo, kongruo aŭ ŝlosilvortoj
- **Instali** modulojn per unu klako
- **Ĝisdatigi** instalitajn modulojn, kiam novaj versioj disponeblas

> [!TIP]
> En la redaktilo, vi povas ŝalti nesubtenatajn modulojn por testi modulojn, kiuj ankoraŭ ne markitaj kiel kongruaj kun difinita karta tipo.

<br>

### Kiel uzi modulojn

#### Krei novan modulon

<details>

<summary>Klaku por etendi</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Iru al la redaktilo de ajna karto kaj etendu la sekcion **Modules**.
2. Klaku sur **Create new module**.
3. Plenigu la informojn de la modulo.
4. Skribu vian CSS- kaj/aŭ JavaScript-ŝablonan kodon en la redaktilo **Code**.
5. (Malnepre) Kreu propran agordan interfacon en la sekcio **Editor** (kiel la kolorelektilo en la ekrankopio supre, plena dokumentado disponebla [ĉi tie](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Malnepre) Skribu viajn **Sugestojn pri entoj** por ke via modulo estu proponata en la kartoelektilo de Home Assistant. La panelo kontrolas tion, kion vi skribas, dum vi tajpas, kaj ĝia antaŭrigardo montras la sugestitajn kartojn mem por la ento laŭ via elekto.
7. Klaku **Save**.

Via modulo nun disponeblas por esti uzata sur ajna el viaj kartoj!

<br>

</details>

#### Apliki modulon al karto

<details>

<summary>Klaku por etendi</summary>

<br>

- **Per la redaktilo:**

  - Iru al la redaktilo de la karto, al kiu vi volas apliki la modulon.
  - Etendu la sekcion **Modules**.
  - Klaku sur la modulo, kiun vi volas apliki, el la listo.
  - Sub "Apply to", klaku sur "This card". La modulo nun estas aktiva. Vi povas apliki plurajn modulojn al la sama karto.

- **Per YAML:**

  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - module_id_1
    - module_id_2
  ```

<br>

</details>

#### Apliki modulon tutmonde

<details>

<summary>Klaku por etendi</summary>

<br>

Vi povas agordi modulon por esti aŭtomate aplikata al ĉiuj Bubble Cards:

**Ĉi tio ne disponeblas por moduloj kun redaktilo, ĉar tiuj postulas specifan agordon por funkcii.**

- **Per la redaktilo:**

  - En la Module editor, trovu vian modulon en la langeto **My Modules**.
  - Ŝaltu la butonon **All cards** apud la nomo de la modulo.
  - La modulo nun estos aplikata aŭtomate al ĉiuj kartoj.
 
- **Per YAML:**

  En via YAML-agordo de modulo (en `bubble-modules.yaml`), simple aldonu `is_global: true`.

<br>

</details>

#### Ekskludi unuopan karton el tutmonda modulo

<details>

<summary>Klaku por etendi</summary>

<br>

Se vi havas tutmondan modulon sed volas ekskludi ĝin el specifa karto:

- **Per la redaktilo:**
  
  - En la sekcio **Modules** de la karto, vi vidos listigitajn tutmondajn modulojn.
  - Klaku sur tutmonda modulo, malŝaltu "This card" por ekskludi ĝin el ĉi tiu specifa karto.

- **Per YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Kunhavigi vian modulon al la Module Store

<details>

<summary>Klaku por etendi</summary>

<br>

Por kunhavigi vian modulon al la Module Store, en la Module Editor, malsupre en "Export Module", klaku sur "Copy for GitHub" kaj algluu la enhavon en novan diskuton en la kategorio [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Redaktu la priskribon** (se necese), **la ekzemplon** (por YAML-uzantoj), kaj memoru **inkluzivi almenaŭ unu ekrankopion** por la Module Store.

**Via modulo fariĝas disponebla tuj post tio** (post refreŝigo de la Store), do dufoje kontrolu, ke ĉio estas korekte skribita kaj ke la modulo funkcias kiel atendite. Vi kompreneble povas redakti/ĝisdatigi la modulon post kiam ĝi estas kunhavigita.

<br>

</details>

#### Versia administrado

<details>

<summary>Klaku por etendi</summary>

<br>

La Module Store aŭtomate kontrolas ĝisdatigojn de instalitaj moduloj. Kiam ĝisdatigoj disponeblas:

1. Vi vidos indikilon de ĝisdatigo en la langeto **Module Store**.
2. Klaku **Update** ĉe moduloj kun disponeblaj ĝisdatigoj.
3. Konfirmu la ĝisdatigon en la Module Store.

<br>

</details>

#### Difini subtenatajn kartajn tipojn

<details>

<summary>Klaku por etendi</summary>

<br>

Kelkaj moduloj eble ne kongruas kun ĉiuj kartaj tipoj. Vi povas difini, kiujn kartojn subtenas modulo.  
Se vi volas, ke modulo kongruu kun **ĉiuj kartoj**, simple preterlasu la kampon `supported` (aŭ uzu la opcion **All cards** en la redaktilo).

```yaml
my_module:
  name: "Button Only Module"
  supported:
    - button
  code: |
    /* Your module code here */
```

</details>

<br>

### Ekzemploj

<details>
<summary>Baza stiliga modulo</summary>

<br>

```yaml
blue_cards:
  name: "Blue Cards Theme"
  version: "1.0"
  creator: "Your Name"
  description: "Makes all cards backgrounds blue"
  code: |
    ha-card {
      --bubble-main-background-color: #007acc;
    }
```

<br>

</details>

<details>
<summary>Modulo kun propra agordo</summary>

<br>

Ĉi tiu modulo disponeblas [ĉi tie](https://github.com/Clooos/Bubble-Card/discussions/1231).

```yaml
icon_container_color:
  name: 'Example: Customize the icon container color'
  version: v1.2
  creator: Clooos
  supported:
    - calendar
    - pop-up
    - cover
    - button
    - media-player
    - climate
    - select
  description: |
    A list of predefined colors to customize the icon container color.
    Configure this module via the editor or in YAML, for example:
    <br><br>
    <code-block><pre>
    icon_container_color: 
        color: light-blue
    </pre></code-block>
  code: |
    .bubble-icon-container,
    .bubble-day-chip {
      opacity: 1 !important;
      --bubble-icon-background-color: var(--${this.config.icon_container_color?.color}-color) !important;
    }
  editor:
    - name: color
      label: Color
      selector:
        ui_color:
          include_none: true
```

<br>

</details>

Pli da ekzemploj troveblas en la Module Store, aŭ [ĉi tie](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizado

Bubble Card parolas vian lingvon. Ĝia redaktilo estas tradukita en la 64 lingvojn, kiujn Home Assistant subtenas, kaj ĉie kie Home Assistant jam havas vorton por io, ĝia propra formulado estas reuzata, do vi legas la samajn terminojn en ambaŭ interfacoj.

Sube en la redaktilo, apud la versinumero, ŝaltilo **Aŭtomata** sekvas vian lingvon de Home Assistant. Malŝaltu ĝin kaj la tuta redaktilo revenas al la angla, kio utilas por sekvi lernilon aŭ por raporti problemon. Via elekto estas memorata en via retumilo.

Ankaŭ ĉi tiu dokumentaro estas tradukita, [en 62 lingvojn](languages.md), en ĉiujn krom la britan anglan, kiu montras la originalon. Tiuj paĝoj estas malfermitaj al ĉiuj, do formulado, kiu ne kongruas kun via propra Home Assistant, korekteblas per kelkaj klakoj. La angla versio restas la referenco por la enhavo mem.

<br>

---

<br>

## Helpo

Ne hezitu malfermi problemon, se io ne funkcias kiel atendite. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Ĉu vi havas demandojn aŭ pensojn pri Bubble Card? Ĉu vi volas kunhavigi viajn panelojn aŭ malkovraĵojn? Vi povas iri al la Home Assistant-forumo, al la Bubble Card-subreddito aŭ al la sekcio GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Kontribuado

Kontribuoj estas bonvenaj! Ĉu temas pri cimriparoj, novaj funkcioj, tradukoj aŭ plibonigoj de dokumentado, ne hezitu malfermi kirlopeton (pull request).

Antaŭ ol komenci, bonvolu legi la [gvidilon por programistoj](DEVELOPERS.md), kiu klarigas kiel starigi vian lokan medion, konstrui la projekton kaj testi viajn ŝanĝojn.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donaci

Mi dediĉas plej multe de mia libertempo por fari ĉi tiun projekton kiel eble plej bona. Do se vi ŝatas mian laboron, ajna donaco estus bonega maniero montri vian subtenon 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Dankon al ĉiuj pro via subteno, vi ĉiuj estas mia plej granda motivo!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
