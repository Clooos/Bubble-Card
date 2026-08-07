<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Cyfieithiad awtomatig yw'r dudalen hon. Os oes amheuaeth, y [ddogfennaeth Saesneg wreiddiol](../README.md) sy'n cael y gair olaf. Ydy brawddeg yn darllen yn chwithig? Mae croeso i unrhyw help, ac nid yw [cywiro'r dudalen hon](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.cy.md) ond yn cymryd munud: bydd GitHub yn gofalu am y fforc a'r pull request. Diolch yn fawr ymlaen llaw! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Darllenwch hyn mewn iaith arall](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Mae Bubble Card yn gasgliad o gardiau minimalaidd a chyfaddasadwy ar gyfer Home Assistant, sy'n cynnwys naidlenni modern a Module Store integredig gyda dros 100 o fodiwlau a wnaed gan y gymuned.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Tabl cynnwys

**[`Gosod`](#gosod)**  **[`Ffurfweddu`](#ffurfweddu)**  **[`Awgrymiadau endid`](#awgrymiadau-endid)**  **[`Naidlen`](#naidlen)**  **[`Pentwr botymau llorweddol`](#pentwr-botymau-llorweddol)**  **[`Botwm`](#botwm)**  **[`Chwaraeydd cyfryngau`](#chwaraeydd-cyfryngau)**  **[`Gorchudd`](#gorchudd)**  **[`Dewis`](#dewis)**  **[`Hinsawdd`](#hinsawdd)**  **[`Calendr`](#calendr)**  **[`Gwahanydd`](#gwahanydd)**  **[`Colofn wag`](#colofn-wag)**  **[`Is-fotymau yn unig`](#is-fotymau-yn-unig)**  **[`Is-fotymau`](#is-fotymau)**  **[`Cynlluniau cardiau`](#cynlluniau-cardiau)**  **[`Amodau`](#amodau)**  **[`Gweithredoedd`](#gweithredoedd-tapio-tapio-dwbl-a-dal)**  **[`Arddull`](#arddull)**  **[`Templedi`](#templedi)**  **[`Modiwlau`](#modiwlau)**  **[`Lleoleiddio`](#lleoleiddio)**  **[`Cymorth`](#cymorth)**  **[`Cyfrannu`](#cyfrannu)**  **[`Rhoi`](#rhoi)**

<br>

## Gosod

**Fersiwn isaf o Home Assistant a gefnogir:** 2023.9.0

<details>

<summary>Heb HACS</summary>

<br>

1. Llwythwch `bubble-card.zip` i lawr o'r [rhyddhad diweddaraf](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Echdynnwch ef i'ch ffolder `<config>/www`, dylech gael `bubble-card.js` a ffolder `translations` wrth ei ymyl (mae'r ffolder honno'n dal geiriaduron y golygydd, hebddi mae'r golygydd yn aros yn Saesneg)
3. Ar eich dangosfwrdd cliciwch ar yr eicon yng nghornel dde uchaf yna ar `Edit dashboard`
4. Cliciwch eto ar yr eicon hwnnw ac yna cliciwch ar `Manage resources`
5. Cliciwch ar `Add resource`
6. Copïwch a gludwch hyn: `/local/bubble-card.js?v=1`
7. Cliciwch ar `JavaScript Module` yna `Create`
8. Ewch yn ôl ac adnewyddwch eich tudalen
9. Gallwch nawr glicio ar `Add card` yng nghornel dde isaf a chwilio am `Bubble Card`
10. Ar ôl unrhyw ddiweddariad o'r ffeil bydd angen i chi olygu `/local/bubble-card.js?v=1` a newid y fersiwn i unrhyw rif uwch

Os nad yw'n gweithio, ceisiwch glirio storfa'ch porwr.

</details>

<details>

<summary>Gyda HACS (Argymhellir)</summary>

<br>

Mae'r dull hwn yn caniatáu i chi gael diweddariadau'n uniongyrchol ar y Home Assistant Community Store

1. Os nad yw HACS wedi'i osod eto, llwythwch ef i lawr gan ddilyn y cyfarwyddiadau ar [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Ewch ymlaen i ffurfweddiad cychwynnol HACS gan ddilyn y cyfarwyddiadau ar [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Ar eich bar ochr ewch i "HACS"
4. Chwiliwch am "Bubble Card", neu cliciwch ar y botwm glas isod
5. Cliciwch ar "Download"
6. Ewch yn ôl ar eich dangosfwrdd a chliciwch ar yr eicon yng nghornel dde uchaf yna ar `Edit dashboard`
7. Gallwch nawr glicio ar `Add card` yng nghornel dde isaf a chwilio am `Bubble Card`

Os nad yw'n gweithio, ceisiwch glirio storfa'ch porwr/ap (ar bob un o'ch dyfeisiau os oes angen).

#### Fideos

Gallwch hefyd fwrw golwg dros fy sianel YouTube am fideos cam wrth gam.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Ffurfweddu

Gellir ffurfweddu pob opsiwn yng ngolygydd Home Assistant. Ond gallwch ddod o hyd i fwy o fanylion a'r YAML yn y ddogfennaeth isod.

<details>

<summary><b>Prif opsiynau (YAML + disgrifiad)</b></summary>

| Enw | Math | Angenrheidiol | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `type` | string | **Gofynnol** | `custom:bubble-card` | Math o'r cerdyn |
| `card_type` | string | **Gofynnol** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` or `sub-buttons` | Math o'r Bubble Card, gweler isod |
| `styles` | object list | Dewisol | Unrhyw daflenni arddull CSS | Yn caniatáu i chi gyfaddasu CSS eich Bubble Card, gweler [arddull](#arddull) |

</details>

<details>

<summary><b>Newidynnau CSS byd-eang (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radiws ymyl ar gyfer pob elfen a gefnogir |
| `--bubble-main-background-color` | `color` | Prif liw cefndir ar gyfer pob elfen a gefnogir |
| `--bubble-secondary-background-color` | `color` | Ail liw cefndir ar gyfer pob elfen a gefnogir |
| `--bubble-accent-color` | `color` | Lliw acen ar gyfer pob elfen a gefnogir |
| `--bubble-icon-border-radius` | `px` | Radiws ymyl eicon ar gyfer pob elfen a gefnogir |
| `--bubble-icon-background-color` | `color` | Lliw cefndir eicon ar gyfer pob elfen a gefnogir |
| `--bubble-sub-button-border-radius` | `px` | Radiws ymyl ar gyfer pob is-fotwm |
| `--bubble-sub-button-background-color` | `color` | Lliw cefndir ar gyfer pob is-fotwm |
| `--bubble-box-shadow` | gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer pob elfen a gefnogir |
| `--bubble-border` | gweler [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Ymyl ar gyfer pob cerdyn a gefnogir |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bwrwch olwg dros y [fideo](https://www.youtube.com/watch?v=0hSQOlBxKKI) hwn i ddysgu am Bubble Card a'i alluoedd.** Mae fy sianel YouTube yn eithaf newydd ac yn canolbwyntio ar diwtorialau am Home Assistant a Bubble Card. Peidiwch ag oedi cyn tanysgrifio i helpu cynyddu gwelededd fy sianel. Diolch ymlaen llaw!

<br>

---

<br>

## Awgrymiadau endid

Ers Home Assistant 2026.6, mae dewis endid yn y dewisydd cardiau yn cynnig ychydig o gardiau parod i chi, ac mae Bubble Card yn ateb y cwestiwn hwnnw gyda'i ryseitiau ei hun. Dewiswch olau a chynigir cerdyn i chi gyda llithrydd disgleirdeb, ynghyd ag amrywiad tymheredd lliw, un lliw ac un dirlawnder pan fydd eich golau'n eu cefnogi. Dewiswch orchudd a chewch lithrydd ei safle, dewiswch chwaraeydd cyfryngau a chewch amrywiad gyda'i restr ffynonellau hefyd, dewiswch sugnwr llwch a chewch ei fotymau cychwyn, oedi a dychwelyd i'r doc. Mae pob awgrym yn ffurfweddiad Bubble Card arferol a ddangosir fel rhagolwg byw, felly gallwch gymryd yr un agosaf a dal ati i'w olygu fel arfer.

Mae'r hyn a gynigir i chi yn dibynnu ar yr hyn y gall eich endid ei wneud mewn gwirionedd: mae golau heb sianel ddisgleirdeb yn cael switsh yn lle llithrydd, nid yw gorchudd na all ogwyddo yn cael amrywiad gogwyddo, ac nid yw endid hinsawdd yn cael ei foddau rhagosodedig oni bai bod rhai ganddo. Daw'r cofnodion clasurol oddi tanynt pan fyddant yn berthnasol: cerdyn pwrpasol y parth, botwm plaen a llithrydd.

> [!TIP]
> Gall modiwlau ychwanegu eu hawgrymiadau eu hunain at y rhestr honno, gweler [modiwlau](#modiwlau).

<br>

---

<br>

## Naidlen

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Mae'r cerdyn hwn yn caniatáu i chi greu naidlen gydag unrhyw gynnwys. Mae pob naidlen yn **guddiedig yn ddiofyn** a gellir ei hagor drwy dargedu ei chysylltiad (e.e. `'#pop-up-name'`), gydag unrhyw gerdyn sy'n cefnogi'r [gweithred](#gweithredoedd-tapio-tapio-dwbl-a-dal) `navigate`, neu gyda'r [pentwr botymau llorweddol](#pentwr-botymau-llorweddol) sydd wedi'i gynnwys.

> [!TIP]
> ### Sbardun naidlen 
> Mae'r nodwedd hon yn caniatáu i chi agor naidlen yn seiliedig ar gyflwr unrhyw endid, er enghraifft, gallwch agor naidlen "Diogelwch" gyda chamera pan fydd person o flaen eich tŷ. Gallwch hefyd greu cynorthwyydd toglo (input_boolean) a sbarduno ei agor/cau mewn awtomeiddiad.
> <details>
> <summary>Agor naidlen pan fo <code>binary_sensor</code> yn <code>on</code></summary>
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
> ### Ffyrdd gwahanol o gau naidlen 
> Mae yna nifer o ffyrdd o gau naidlen. Er enghraifft, gallwch sweipio o bennyn y naidlen i lawr, drwy wneud sweip hir y tu mewn i'r naidlen i lawr, drwy wasgu Escape ar gyfrifiadur bwrdd gwaith, drwy dynnu'r hash o'r URL neu drwy syml wasgu'r botwm cau.
>


### Opsiynau'r naidlen

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Angenrheidiol | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `hash` | string | **Gofynnol** | Unrhyw hash unigryw (e.e. `'#kitchen'`) gyda ' ' | Dyma sut y byddwch yn agor eich naidlen |
| `popup_style` | string | Dewisol | `bubble` (diofyn) or `classic` | Diffiniwch arddull weledol y naidlen |
| `popup_mode` | string | Dewisol | `default` (diofyn), `fit-content`, `centered` or `adaptive-dialog` | Diffiniwch fodd cynllun y naidlen |
| `with_bottom_offset` | boolean | Dewisol | `true` or `false` (diofyn) | Dim ond gyda `popup_mode: fit-content` neu `adaptive-dialog` y'i defnyddir. Yn rhoi atred waelod ar symudol, defnyddiol pan fo'ch dangosfwrdd yn cynnwys cerdyn troedyn. |
| `full_width_on_mobile` | boolean | Dewisol | `true` or `false` (diofyn) | Dim ond gyda `popup_mode: centered` y'i defnyddir. Yn ehangu'r naidlen i led llawn y sgrin ar symudol, defnyddiol ar sgriniau llai. |
| `performance_mode` | string | Dewisol | `default` (diofyn) or `performance` | Optimeiddio animeiddiad agor y naidlen. Mae `performance` yn oedi ychydig ar rendro'r cynnwys a phylurwch y cefndir, ac yn analluogi hefyd blur y cefndir os yw wedi'i osod. |
| `auto_close` | string | Dewisol | Terfyn amser mewn milieiliadau (e.e. `10000` am 10eil) | Cau'r naidlen yn awtomatig ar ôl terfyn amser |
| `close_on_click` | boolean | Dewisol | `true` or `false` (diofyn) | Cau'r naidlen yn awtomatig ar ôl unrhyw ryngweithiad |
| `close_by_clicking_outside` | boolean | Dewisol | `true` (diofyn) or `false` | Cau'r naidlen drwy glicio y tu allan iddi |
| `width_desktop` | string | Dewisol | Unrhyw werth CSS | Lled ar gyfrifiadur bwrdd gwaith (`100%` yn ddiofyn ar symudol) |
| `margin` | string | Dewisol | Unrhyw werth CSS | Defnyddiwch hyn **dim ond** os nad yw'ch naidlen wedi'i chanoli'n dda ar symudol (e.e. `13px`) |
| `margin_top_mobile` | string | Dewisol | Unrhyw werth CSS | Ymyl uchaf ar symudol (e.e. `-56px` os yw'ch pennyn wedi'i guddio) |
| `margin_top_desktop` | string | Dewisol | Unrhyw werth CSS | Ymyl uchaf ar gyfrifiadur bwrdd gwaith (e.e. `50vh` am naidlen hanner maint neu `calc(100vh - 400px)` am uchder sefydlog o `400px`) |
| `bg_color` | string | Dewisol | Unrhyw werth hex, rgb neu rgba | Lliw cefndir eich naidlen (e.e. `#ffffff` am gefndir gwyn) |
| `bg_opacity` | string | Dewisol | Unrhyw werth o `0` i `100` | Didreiddedd cefndir eich naidlen (e.e. `100` am ddim tryloywder) |
| `bg_blur` | string | Dewisol | Unrhyw werth o `0` i `100` | Effaith pylu cefndir eich naidlen, **dim ond os nad yw `bg_opacity` wedi'i osod i `100`** y mae hyn yn gweithio (e.e. `0` am ddim pylu)|
| `shadow_opacity` | string | Dewisol | Unrhyw werth o `0` i `100` | Didreiddedd cysgod eich naidlen (e.e. `0` i'w guddio) |
| `hide_backdrop` | boolean | Dewisol | `true` or `false` (diofyn) | Gosodwch hyn yn true ar naidlen gyntaf eich prif ddangosfwrdd i analluogi'r cefnlen ar bob naidlen. |
| `background_update` | boolean | Dewisol | `true` or `false` (diofyn) | Diweddaru cynnwys y naidlen yn y cefndir (ni argymhellir) |
| `trigger` | object neu list | Dewisol | Gweler [amodau](#amodau) | Agor y naidlen hon pan fodlonir yr amodau |
| `trigger_entity` | string | Dewisol | Unrhyw endid | Agor y naidlen hon yn seiliedig ar gyflwr unrhyw endid, ffurf syml `trigger` |
| `trigger_state` | string | Dewisol (**Gofynnol** os yw `trigger_entity` wedi'i ddiffinio) | Unrhyw gyflwr endid | Cyflwr endid i agor y naidlen |
| `trigger_close` | boolean | Dewisol | `true` neu `false` | Cau'r naidlen pan na fodlonir yr amodau mwyach (diofyn: `true` gyda `trigger`, `false` gyda `trigger_state`) |
| `open_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Sbarduno gweithred wrth agor y naidlen |
| `close_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Sbarduno gweithred wrth gau'r naidlen |
| `show_header` | boolean | Dewisol | `true` (diofyn) or `false` | Dangos/Cuddio pennyn y naidlen yn llwyr |
| `show_previous_button` | boolean | Dewisol | `true` or `false` (diofyn) | Dangos botwm blaenorol wrth ymyl y botwm cau a mynd yn ôl i'r naidlen flaenorol pan fo ar gael |
| `show_close_button` | boolean | Dewisol | `true` (diofyn) or `false` | Dangos neu guddio'r botwm cau tra'n cadw gweddill y pennyn yn weladwy |
| `buttons_position` | string | Dewisol | `right` (diofyn) or `left` | Safle'r botymau cau a blaenorol yn y pennyn |
| `cards` | list | Dewisol | Unrhyw Bubble Card, cerdyn Home Assistant neu gerdyn cyfaddas | Diffiniwch gynnwys eich naidlen. Gweler yr enghraifft naidlen isod. |
| Mae gennych hefyd fynediad i [holl osodiadau'r botwm](#botwm) ar gyfer pennyn y naidlen. | | Dewisol | | Os na chaiff ei ddiffinio ni ddangosir unrhyw bennyn |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radiws ymyl y naidlen |
| `--bubble-pop-up-main-background-color` | `color` | Prif liw cefndir elfennau a gefnogir y naidlen |
| `--bubble-pop-up-background-color` | `color` | Lliw cefndir y naidlen |
| `--bubble-backdrop-background-color` | `color` | Lliw cefndir y cefnlen |
| Mae gennych hefyd fynediad i [holl newidynnau CSS y botwm](#opsiynaur-botwm) ar gyfer pennyn y naidlen. | | |

</details>


### Fformat naidlen annibynnol (v3.2.0+)

Ers v3.2.0, mae naidlenni'n defnyddio fformat annibynnol newydd lle diffinnir cardiau cynnwys yn uniongyrchol y tu mewn i'r naidlen gan ddefnyddio'r opsiwn `cards`. Mae hyn yn darparu perfformiad gwell a phrofiad golygu llusgo-a-gollwng newydd sy'n seiliedig ar adrannau.


#### Enghreifftiau

<details>

<summary>Naidlen (fformat annibynnol)</summary>

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

<summary>Botwm i agor y naidlen</summary>

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

## Pentwr botymau llorweddol

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Mae'r cerdyn hwn yn gydymaith da i'r cerdyn naidlen, gan ganiatáu i chi agor y naidlenni cyfatebol. Mae hefyd yn caniatáu i chi agor unrhyw dudalen o'ch dangosfwrdd. Yn ogystal, gallwch ychwanegu eich synwyryddion symudiad/meddiannaeth fel bod trefn y botymau yn addasu yn ôl yr ystafell rydych newydd fynd i mewn iddi. Gellir sgrolio'r cerdyn hwn, mae'n aros yn weladwy, ac mae'n gweithredu fel troedyn.

> [!IMPORTANT]  
> Rhaid i'r cerdyn hwn fod y diwethaf yn eich golwg (ar ôl pob cerdyn a naidlen). Ni all fod y tu mewn i unrhyw bentwr.

### Opsiynau'r pentwr botymau llorweddol

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Angenrheidiol | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Gofynnol** | Hash y naidlen (e.e. `'#kitchen'`) gyda ' ' neu unrhyw gysylltiad | Cysylltiad i'w agor |
| `1_name` | string | Dewisol | Unrhyw linyn | Enw ar gyfer eich botwm |
| `1_icon` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich botwm |
| `1_entity` | string | Dewisol | Unrhyw olau neu grŵp golau | Dangos lliw'r golau hwnnw yn y cefndir |
| `1_pir_sensor` | string | Dewisol | Unrhyw synhwyrydd deuaidd | O leiaf un synhwyrydd pir neu fwy ar gyfer `auto_order`, mewn gwirionedd mae hefyd yn gweithio gydag unrhyw fath o endid, er enghraifft gallwch ychwanegu grwpiau golau a bydd y drefn yn newid yn seiliedig ar y cyflyrau a newidiwyd ddiwethaf. |
| `auto_order` | boolean | Dewisol | `true` or `false` (diofyn) | Newid trefn y botymau yn ôl amser newid diwethaf `_pir_sensor`, **rhaid iddo fod yn `false` os nad oes gennych unrhyw `_pir_sensor` yn eich cod** |
| `margin` | string | Dewisol | Unrhyw werth CSS | Defnyddiwch hyn **dim ond** os nad yw'ch `horizontal-buttons-stack` wedi'i ganoli'n dda ar symudol (e.e. `13px`) |
| `width_desktop` | string | Dewisol | Unrhyw werth CSS | Lled ar gyfrifiadur bwrdd gwaith (`100%` yn ddiofyn ar symudol) |
| `is_sidebar_hidden` | boolean | Dewisol | `true` or `false` (diofyn) | Trwsio safle'r pentwr botymau llorweddol os yw'r bar ochr wedi'i guddio ar y cyfrifiadur bwrdd gwaith (dim ond os ydych wedi gwneud addasiad i'w guddio eich hun) |
| `rise_animation` | boolean | Dewisol | `true` (diofyn) or `false` | Gosodwch hyn i `false` i analluogi'r animeiddiad sy'n cychwyn unwaith y bydd y dudalen wedi llwytho |
| `highlight_current_view` | boolean | Dewisol | `true` or `false` (diofyn) | Amlygu'r hash / golwg gyfredol gydag animeiddiad llyfn |
| `hide_gradient` | boolean | Dewisol | `true` or `false` (diofyn) | Gosodwch hyn i `false` i guddio'r graddiant |

> [!IMPORTANT]  
> Mae'r newidynnau sy'n dechrau gyda rhif yn diffinio'ch botymau, newidiwch y rhif hwn yn unig i ychwanegu mwy o fotymau (gweler yr enghraifft isod).

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Radiws ymyl botymau'r pentwr botymau llorweddol |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Lliw cefndir botymau'r pentwr botymau llorweddol |

</details>


#### Enghraifft

<details>

<summary>Pentwr botymau llorweddol sy'n ad-drefnu ei hun yn seiliedig ar synwyryddion meddiannaeth</summary>

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

## Botwm

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Mae'r cerdyn hwn yn amryddawn iawn. Gellir ei ddefnyddio fel **switsh**, **llithrydd**, **cyflwr** neu fotwm **enw/testun**.

> [!TIP]
> ### Beth yw'r gwahaniaethau rhwng pob math o fotwm?
>
> - **Botwm switsh:** Dyma'r math botwm rhagosodedig. Yn ddiofyn, mae'n toglo endid ac mae ei liw cefndir yn newid yn seiliedig ar gyflwr yr endid neu liw'r golau. Gallwch newid ei weithred yn adran **Tap action on card**.
>
> - **Botwm llithrydd:** Mae'r math hwn o fotwm yn eich galluogi i reoli endidau â chylchoedd y gellir eu haddasu. Mae'n ddelfrydol ar gyfer pylu goleuadau, a bydd ei liw llenwi yn addasu i liw'r golau. Gallwch hefyd ei ddefnyddio i ddangos gwerthoedd, fel lefel batri.
>   Endidau a gefnogir gan lithryddion:
>   - Golau (llewyrch)
>   - Chwaraeydd cyfryngau (lefel sain)
>   - Gorchudd (safle)
>   - Gwyntyll (canran)
>   - Hinsawdd (tymheredd)
>   - Rhif mewnbwn a rhif (gwerth)
>   - Synhwyrydd batri (canran, darllen yn unig)
>
>   Gallwch hefyd ddefnyddio unrhyw endid sydd â chyflwr rhifiadol drwy analluogi'r hidlydd endid yn **Slider settings**, ac yna diffinio'r gwerthoedd `min` a `max`. Mae'r opsiwn hwn yn ddarllen yn unig.
>
> - **Botwm cyflwr:** Perffaith ar gyfer dangos gwybodaeth o synhwyrydd neu unrhyw endid. Pan fyddwch yn ei bwyso, bydd yn dangos panel "More info" yr endid. Nid yw ei liw cefndir yn newid.
>
> - **Botwm enw/testun:** Yr unig fath o fotwm nad oes angen endid arno. Mae'n eich galluogi i ddangos testun byr, enw neu deitl. Gallwch hefyd ychwanegu gweithredoedd ato. Nid yw ei liw cefndir yn newid.

### Opsiynau'r botwm

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Gofyniad | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `entity` | string | **Angenrheidiol** | Unrhyw endid | Endid i'w reoli |
| `button_type` | string | Dewisol | `switch` (rhagosodedig), `slider`, `state` neu `name` | Ymddygiad eich botwm |
| `name` | string | Dewisol | Unrhyw linyn | Enw ar gyfer eich botwm, os na chaiff ei ddiffinio bydd yn dangos enw'r endid |
| `icon` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich botwm, os na chaiff ei ddiffinio bydd yn dangos eicon yr endid neu'r `entity-picture` |
| `force_icon` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Rhoi blaenoriaeth i'r eicon yn hytrach na'r `entity-picture` |
| `use_accent_color` | boolean | Dewisol (`false` yn ddiofyn) | **Ar gyfer goleuadau yn unig.** Defnyddio lliw acen y thema yn lle lliw'r golau.                         |
| `show_state` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos neu guddio cyflwr eich `entity` |
| `show_name` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r enw |
| `show_icon` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r eicon |
| `show_last_changed` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser newid diwethaf eich `entity` |
| `show_last_updated` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser diweddaru diwethaf eich `entity` |
| `show_attribute` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos priodoledd eich `entity` islaw ei `name` |
| `attribute` | string | Dewisol (angenrheidiol os yw `show_attribute` wedi'i osod i `true`) | Priodoledd o'ch `entity` | Y briodoledd i'w dangos (e.e. `brightness`) |
| `scrolling_effect` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Caniatáu i destun sgrolio pan fydd y cynnwys yn fwy na maint eu cynhwysydd |
| `button_action` | object | Dewisol | `tap_action`, `double_tap_action` neu `hold_action`, gweler isod | Caniatáu newid y gweithredoedd rhagosodedig wrth glicio'r botwm. |
| `tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio'r eicon, os na chaiff ei ddiffinio, defnyddir `more-info` |
| `double_tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio dwbl yr eicon, os na chaiff ei ddiffinio, defnyddir `none` |
| `hold_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth ddal yr eicon, os na chaiff ei ddiffinio, defnyddir `more-info` |
| `card_layout` | string | Dewisol | `normal` (rhagosodedig os nad yw mewn golwg adran), `large` (rhagosodedig os mewn golwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |
| `sub_button` | object | Dewisol | Gweler [is-fotymau](#is-fotymau) | Ychwanegu botymau wedi'u haddasu wedi'u sefydlogi ar y dde |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Prif liw cefndir ar gyfer elfennau a gefnogir yn y botwm |
| `--bubble-button-border-radius` | `px` | Radiws border ar gyfer y botwm |
| `--bubble-button-icon-border-radius` | `px` | Radiws border ar gyfer cynhwysydd eicon y botwm |
| `--bubble-button-icon-background-color` | `color` | Lliw cefndir ar gyfer cynhwysydd eicon y botwm |
| `--bubble-light-white-color` | `color` | Amnewid lliw gwyn rhagosodedig botymau/llithryddion golau |
| `--bubble-light-color` | `color` | Amnewid lliw botymau/llithryddion golau (hyd yn oed goleuadau RGB) |
| `--bubble-button-box-shadow` | Gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer y botwm |

</details>

Mae'r opsiynau hyn ar gael dim ond pan fydd `button_type` wedi'i osod i `slider`.

<details>

<summary><b>Opsiynau'r llithrydd (YAML + disgrifiadau)</b></summary>

| Enw                  | Math    | Gofyniad                     | Disgrifiad                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Dewisol                        | Gwerth lleiaf y llithrydd. Ar gyfer llithryddion cyfaddas.                                                    |
| `max_value`             | number  | Dewisol                        | Gwerth mwyaf y llithrydd. Ar gyfer llithryddion cyfaddas.                                                    |
| `step`                  | number  | Dewisol                        | Gwerth cam y llithrydd.                                                                                           |
| `tap_to_slide`          | boolean | Dewisol (`false` yn ddiofyn)      | Galluogi ymddygiad blaenorol y llithrydd lle rydych yn tapio i'w actifadu, yn lle ei ddal.        |
| `relative_slide`        | boolean | Dewisol (`false` yn ddiofyn )     | Diweddaru gwerth yn gymharol i'r gwerth cychwynnol, yn hytrach na'r pwynt cyffwrdd cychwynnol.                      |
| `read_only_slider`      | boolean | Dewisol (`false` yn ddiofyn)      | Gwneud y llithrydd yn ddarllen yn unig. Yn cael ei alluogi'n awtomatig ar gyfer rhai endidau fel synwyryddion.                        |
| `slider_live_update`    | boolean | Dewisol (`false` yn ddiofyn)      | Diweddarir cyflwr yr endid wrth lithro. **Ni argymhellir y nodwedd hon ar gyfer pob endid.**        |
| `slider_fill_orientation` | string | Dewisol | `left`, `right`, `top` neu `bottom` | Newid cyfeiriad llenwi'r llithrydd. O'r chwith i'r dde pan nad yw wedi'i ddiffinio, wedi'i adlewyrchu mewn [ieithoedd o'r dde i'r chwith](#lleoleiddio) |
| `slider_value_position` | string | Dewisol | `right`, `left`, `center` neu `hidden` | Safle dangos y gwerth. Ar yr ochr derfynol pan nad yw wedi'i ddiffinio, felly ar y chwith mewn [ieithoedd o'r dde i'r chwith](#lleoleiddio) |
| `invert_slider_value` | boolean | Dewisol (`false` yn ddiofyn) | Gwrthdroi cyfeiriad y llithrydd (mae llenwad 100% yn gyfwerth â'r lleiafswm). Ddim ar gael ar gyfer llithryddion lliw. |
| `light_slider_type` | string | Dewisol | `brightness` (rhagosodedig), `hue`, `saturation`, `white_temp` | **Ar gyfer goleuadau yn unig.** Dewis modd y llithrydd |
| `cover_slider_type` | string | Dewisol | `position` (rhagosodedig), `tilt_position` | **Ar gyfer gorchuddion yn unig.** Dewis modd y llithrydd (safle neu ogwydd) |
| `hue_force_saturation` | boolean | Dewisol (`false` yn ddiofyn) | **Ar gyfer goleuadau yn unig (modd Hue).** Gorfodi dirlawnder wrth addasu Hue |
| `hue_force_saturation_value` | number | Dewisol (`100` yn ddiofyn) | **Ar gyfer goleuadau yn unig (modd Hue).** Gwerth dirlawnder gorfodedig (0-100) |
| `use_accent_color` | boolean | Dewisol (`false` yn ddiofyn) | **Ar gyfer goleuadau yn unig (modd Llewyrch).** Defnyddio lliw acen y thema yn lle lliw'r golau |
| `allow_light_slider_to_0` | boolean | Dewisol (`false` yn ddiofyn)    | **Ar gyfer goleuadau yn unig.** Caniatáu i'r llithrydd gyrraedd 0%, sy'n diffodd y golau. Ddim ar gael gyda `tap_to_slide`. |
| `light_transition`      | boolean | Dewisol (`false` yn ddiofyn)      | **Ar gyfer goleuadau yn unig.** Galluogi trawsnewidiadau llewyrch llyfn ar gyfer goleuadau a gefnogir.                           |
| `light_transition_time` | number  | Dewisol (`500` yn ddiofyn)        | **Ar gyfer goleuadau yn unig.** Amser y trawsnewid mewn milieiliadau. Angen `light_transition: true`.            |

</details>

#### Enghreifftiau

<details>

<summary>Botwm llithrydd sy'n gallu rheoli llewyrch golau</summary>

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

<summary>Botwm â mwy o opsiynau</summary>

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

## Chwaraeydd cyfryngau

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Mae'r cerdyn hwn yn eich galluogi i reoli endid chwaraeydd cyfryngau.

### Opsiynau'r chwaraeydd cyfryngau

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Gofyniad | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `entity` | string | **Angenrheidiol** | Unrhyw chwaraeydd cyfryngau | Y chwaraeydd cyfryngau i'w reoli |
| `name` | string | Dewisol | Unrhyw linyn | Enw ar gyfer eich chwaraeydd cyfryngau, os na chaiff ei ddiffinio bydd yn dangos enw'r endid |
| `icon` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich chwaraeydd cyfryngau, os na chaiff ei ddiffinio bydd yn dangos eicon yr endid neu'r `entity-picture` |
| `force_icon` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Rhoi blaenoriaeth i'r eicon yn hytrach na'r `entity-picture` |
| `show_state` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos neu guddio cyflwr eich `entity` |
| `show_name` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r enw |
| `show_icon` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r eicon |
| `show_last_changed` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser newid diwethaf eich `entity` |
| `show_last_updated` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser diweddaru diwethaf eich `entity` |
| `show_attribute` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos priodoledd eich `entity` islaw ei `name` |
| `attribute` | string | Dewisol (angenrheidiol os yw `show_attribute` wedi'i osod i `true`) | Priodoledd o'ch `entity` | Y briodoledd i'w dangos (e.e. `brightness`) |
| `scrolling_effect` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Caniatáu i destun sgrolio pan fydd y cynnwys yn fwy na maint eu cynhwysydd |
| `min_volume` | number | Dewisol | Unrhyw rif | Gwerth lleiaf y llithrydd sain. |
| `max_volume` | number | Dewisol | Unrhyw rif | Gwerth mwyaf y llithrydd sain. |
| `cover_background` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Defnyddio clawr cyfryngau aneglur fel cefndir y cerdyn. |
| `button_action` | object | Dewisol | `tap_action`, `double_tap_action` neu `hold_action`, gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Caniatáu newid y gweithredoedd rhagosodedig wrth glicio'r botwm. |
| `tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio'r eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `double_tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio dwbl yr eicon, os na chaiff ei ddiffinio, defnyddir `none`. |
| `hold_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth ddal yr eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `main_buttons_position` | string | Dewisol | `default` neu `bottom` | Symud botymau gweithredu'r clawr i'r gwaelod (sefydlog) |
| `main_buttons_full_width` | boolean | Dewisol | `true` neu `false` | Gwneud botymau gweithredu'r gwaelod yn llawn led (rhagosodedig: `true` pan fydd y safle yn `bottom`) |
| `main_buttons_alignment` | string | Dewisol | `end` (rhagosodedig), `center`, `start`, `space-between` | Aliniad botymau gweithredu'r gwaelod pan nad ydynt yn llawn led |
| `card_layout` | string | Dewisol | `normal` (rhagosodedig os nad yw mewn golwg adran), `large` (rhagosodedig os mewn golwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |
| `sub_button` | object | Dewisol | Gweler [is-fotymau](#is-fotymau) | Ychwanegu botymau wedi'u haddasu wedi'u sefydlogi ar y dde |
| `hide` | object | Dewisol | Gweler isod | Cuddio botymau o'r cerdyn |

#### Opsiynau cuddio

| Enw | Math | Gofyniad | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Cuddio'r botwm chwarae/oedi |
| `volume_button` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Cuddio'r botwm sain |
| `previous_button` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Cuddio'r botwm blaenorol |
| `next_button` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Cuddio'r botwm nesaf |
| `power_button` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Cuddio'r botwm pŵer |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Prif liw cefndir ar gyfer y chwaraeydd cyfryngau |
| `--bubble-media-player-border-radius` | `px` | Radiws border ar gyfer y chwaraeydd cyfryngau |
| `--bubble-media-player-buttons-border-radius` | `px` | Radiws border ar gyfer botymau'r chwaraeydd cyfryngau |
| `--bubble-media-player-slider-background-color` | `color` | Lliw cefndir ar gyfer y llithrydd sain |
| `--bubble-media-player-icon-border-radius` | `px` | Radiws border ar gyfer cynhwysydd eicon y chwaraeydd cyfryngau |
| `--bubble-media-player-icon-background-color` | `color` | Lliw cefndir ar gyfer cynhwysydd eicon y chwaraeydd cyfryngau |
| `--bubble-media-player-box-shadow` | Gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer y chwaraeydd cyfryngau |

</details>


#### Enghreifftiau

<details>

<summary>Chwaraeydd cyfryngau â phob un o'r opsiynau</summary>

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

## Gorchudd

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Mae'r cerdyn hwn yn eich galluogi i reoli eich endidau `cover`.

### Opsiynau'r gorchudd

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Gofyniad | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `entity` | string | **Angenrheidiol** | Unrhyw orchudd | Gorchudd i'w reoli |
| `name` | string | Dewisol | Unrhyw linyn | Enw ar gyfer eich gorchudd, os na chaiff ei ddiffinio bydd yn dangos enw'r endid |
| `force_icon` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Rhoi blaenoriaeth i'r eicon yn hytrach na'r `entity-picture` |
| `show_state` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos neu guddio cyflwr eich `entity` |
| `show_name` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r enw |
| `show_icon` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r eicon |
| `show_last_changed` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser newid diwethaf eich `entity` |
| `show_last_updated` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser diweddaru diwethaf eich `entity` |
| `show_attribute` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos priodoledd eich `entity` islaw ei `name` |
| `attribute` | string | Dewisol (angenrheidiol os yw `show_attribute` wedi'i osod i `true`) | Priodoledd o'ch `entity` | Y briodoledd i'w dangos (e.e. `brightness`) |
| `scrolling_effect` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Caniatáu i destun sgrolio pan fydd y cynnwys yn fwy na maint eu cynhwysydd |
| `icon_open` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich gorchudd agored, os na chaiff ei ddiffinio bydd yn dangos yr eicon gorchudd agored rhagosodedig |
| `icon_close` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich gorchudd caeedig, os na chaiff ei ddiffinio bydd yn dangos yr eicon gorchudd caeedig rhagosodedig |
| `icon_up` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich botwm agor gorchudd, os na chaiff ei ddiffinio bydd yn dangos yr eicon gorchudd agored rhagosodedig |
| `icon_down` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich botwm cau gorchudd, os na chaiff ei ddiffinio bydd yn dangos yr eicon gorchudd caeedig rhagosodedig |
| `open_service` | string | Dewisol | Unrhyw wasanaeth neu sgript | Gwasanaeth i agor eich gorchudd, yn ddiofyn `cover.open_cover` |
| `stop_service` | string | Dewisol | Unrhyw wasanaeth neu sgript | Gwasanaeth i atal eich gorchudd, yn ddiofyn `cover.stop_cover` |
| `close_service` | string | Dewisol | Unrhyw wasanaeth neu sgript | Gwasanaeth i gau eich gorchudd, yn ddiofyn `cover.close_cover` |
| `tilt_buttons` | string | Dewisol | `top` (rhagosodedig), `bottom`, `left`, `right`, `hidden` | Safle botymau rheoli gogwydd (dim ond yn dangos os yw'r gorchudd yn cefnogi gogwydd) |
| `open_tilt_service` | string | Dewisol | Unrhyw wasanaeth neu sgript | Gwasanaeth i agor y gogwydd, yn ddiofyn `cover.open_cover_tilt` |

| `close_tilt_service` | string | Dewisol | Unrhyw wasanaeth neu sgript | Gwasanaeth i gau'r gogwydd, yn ddiofyn `cover.close_cover_tilt` |
| `button_action` | object | Dewisol | `tap_action`, `double_tap_action` neu `hold_action`, gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Caniatáu newid y gweithredoedd rhagosodedig wrth glicio'r botwm. |
| `tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio'r eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `double_tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio dwbl yr eicon, os na chaiff ei ddiffinio, defnyddir `none`. |
| `hold_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth ddal yr eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `main_buttons_position` | string | Dewisol | `default` neu `bottom` | Symud rheolyddion y cyfryngau i'r gwaelod (sefydlog) |
| `main_buttons_full_width` | boolean | Dewisol | `true` neu `false` | Gwneud rheolyddion y gwaelod yn llawn led (rhagosodedig: `true` pan fydd y safle yn `bottom`) |
| `main_buttons_alignment` | string | Dewisol | `end` (rhagosodedig), `center`, `start`, `space-between` | Aliniad rheolyddion y gwaelod pan nad ydynt yn llawn led |
| `card_layout` | string | Dewisol | `normal` (rhagosodedig os nad yw mewn golwg adran), `large` (rhagosodedig os mewn golwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |
| `sub_button` | object | Dewisol | Gweler [is-fotymau](#is-fotymau) | Ychwanegu botymau wedi'u haddasu wedi'u sefydlogi ar y dde |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Prif liw cefndir ar gyfer elfennau a gefnogir yng ngherdyn y gorchudd |
| `--bubble-cover-border-radius` | `px` | Radiws border ar gyfer cerdyn y gorchudd |
| `--bubble-cover-icon-border-radius` | `px` | Radiws border ar gyfer cynhwysydd eicon cerdyn y gorchudd |
| `--bubble-cover-icon-background-color` | `color` | Lliw cefndir ar gyfer cynhwysydd eicon cerdyn y gorchudd |
| `--bubble-cover-box-shadow` | Gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer cerdyn y gorchudd |
| `--bubble-button-box-shadow` | Gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer botymau yng ngherdyn y gorchudd |

</details>


#### Enghraifft

<details>

<summary>Cerdyn sy'n gallu rheoli bleind rholio</summary>

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

## Dewis

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Mae'r cerdyn hwn yn eich galluogi i ychwanegu dewislen ollwng ar gyfer eich endidau `input_select` / `select`. Mae'r cerdyn hwn hefyd yn cefnogi'r is-fotymau a holl nodweddion cyffredin Bubble Card.

> [!TIP]
> Gallwch hefyd gael is-fotymau dewis os ydych am hynny, mae'r nodwedd hon ar gael ym mhob cerdyn sy'n cefnogi'r is-fotymau.

### Opsiynau'r dewis

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Gofyniad | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `entity` | string | **Angenrheidiol** | Unrhyw endid | Endid i'w reoli |
| `name` | string | Dewisol | Unrhyw linyn | Enw ar gyfer eich dewis, os na chaiff ei ddiffinio bydd yn dangos enw'r endid |
| `icon` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich dewis, os na chaiff ei ddiffinio bydd yn dangos eicon yr endid neu'r `entity-picture` |
| `force_icon` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Rhoi blaenoriaeth i'r eicon yn hytrach na'r `entity-picture` |
| `show_state` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos neu guddio cyflwr eich `entity` |
| `show_name` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r enw |
| `show_icon` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Dangos neu guddio'r eicon |
| `show_last_changed` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser newid diwethaf eich `entity` |
| `show_last_updated` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos amser diweddaru diwethaf eich `entity` |
| `show_attribute` | boolean | Dewisol | `true` neu `false` (rhagosodedig) | Dangos priodoledd eich `entity` islaw ei `name` |
| `attribute` | string | Dewisol (angenrheidiol os yw `show_attribute` wedi'i osod i `true`) | Priodoledd o'ch `entity` | Y briodoledd i'w dangos (e.e. `brightness`) |
| `scrolling_effect` | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Caniatáu i destun sgrolio pan fydd y cynnwys yn fwy na maint eu cynhwysydd |
| `tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio'r eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `double_tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio dwbl yr eicon, os na chaiff ei ddiffinio, defnyddir `none`. |
| `hold_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth ddal yr eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `card_layout` | string | Dewisol | `normal` (rhagosodedig os nad yw mewn golwg adran), `large` (rhagosodedig os mewn golwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |
| `sub_button` | object | Dewisol | Gweler [is-fotymau](#is-fotymau) | Ychwanegu botymau wedi'u haddasu wedi'u sefydlogi ar y dde |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Prif liw cefndir ar gyfer elfennau a gefnogir yng ngherdyn y dewis |
| `--bubble-select-background-color` | `color` | Lliw cefndir ar gyfer cerdyn y dewis |
| `--bubble-select-list-border-radius` | `px` | Radiws border ar gyfer y ddewislen ollwng yn y cerdyn |
| `--bubble-select-list-item-accent-color` | `color` | Lliw acen ar gyfer yr eitem a ddewiswyd |
| `--bubble-select-list-background-color` | `color` | Lliw cefndir ar gyfer y ddewislen ollwng yn y cerdyn |
| `--bubble-select-list-width` | `px` | Lled y ddewislen ollwng yn y cerdyn |
| `--bubble-select-arrow-background-color` | `color` | Lliw cefndir ar gyfer saeth y ddewislen ollwng |
| `--bubble-select-button-border-radius` | `px` | Radiws border ar gyfer botwm y dewis |
| `--bubble-select-border-radius` | `px` | Radiws border ar gyfer cerdyn y dewis |
| `--bubble-select-icon-border-radius` | `px` | Radiws border ar gyfer cynhwysydd eicon cerdyn y dewis |
| `--bubble-select-icon-background-color` | `color` | Lliw cefndir ar gyfer cynhwysydd eicon cerdyn y dewis |
| `--bubble-select-box-shadow` | Gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer cerdyn y dewis |

</details>


#### Enghreifftiau

<details>

<summary>Cerdyn dewis â rhestr o olygfeydd</summary>

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

## Hinsawdd

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Mae'r cerdyn hwn yn eich galluogi i reoli eich endidau `climate`.

> [!TIP]
> Mae'r ddewislen dewis modd yn [is-fotwm](#is-fotymau) sy'n cael ei ychwanegu'n awtomatig wrth greu'r cerdyn. Gallwch wedyn ei addasu neu ei dynnu fel y dymunwch.

### Opsiynau'r hinsawdd

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw                     | Math    | Gofyniad                         | Opsiynau a gefnogir                                  | Disgrifiad                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Angenrheidiol**                        | Endid hinsawdd                                   | Yr endid i'w reoli (e.e. `climate.living_room`).                                                            |
| `name`                  | string  | Dewisol                            | Unrhyw linyn                                       | Enw cyfaddas ar gyfer y cerdyn. Os na chaiff ei ddiffinio, bydd yn dangos enw'r endid.                                    |
| `icon`                  | string  | Dewisol                            | Unrhyw eicon `mdi:`                                  | Eicon cyfaddas ar gyfer y cerdyn. Os na chaiff ei ddiffinio, defnyddir eicon yr endid neu'r `entity-picture`.                   |
| `force_icon`            | boolean | Dewisol                            | `true` neu `false` (rhagosodedig)                     | Yn rhoi blaenoriaeth i'r eicon dros yr `entity-picture`.                                                           |
| `show_state`            | boolean | Dewisol                            | `true` neu `false` (rhagosodedig)                     | Dangos neu guddio cyflwr cyfredol yr `entity`.                                                                 |
| `show_name`             | boolean | Dewisol                            | `true` (rhagosodedig) neu `false`                     | Dangos neu guddio enw'r endid.                                                                            |
| `show_icon`             | boolean | Dewisol                            | `true` (rhagosodedig) neu `false`                     | Dangos neu guddio'r eicon.                                                                                          |
| `hide_target_temp_low`  | boolean | Dewisol (dim ond ar gyfer endidau sy'n cefnogi `target_temp_low`) | `true` neu `false` (rhagosodedig) | Cuddio'r rheolydd tymheredd targed isel os yw'r `entity` yn ei gefnogi.                                          |
| `hide_target_temp_high` | boolean | Dewisol (dim ond ar gyfer endidau sy'n cefnogi `target_temp_high`)| `true` neu `false` (rhagosodedig) | Cuddio'r rheolydd tymheredd targed uchel os yw'r `entity` yn ei gefnogi.                                         |
| `state_color`           | boolean | Dewisol                            | `true` neu `false` (rhagosodedig)                     | Cymhwyso lliw cefndir cyson pan fydd yr endid hinsawdd YMLAEN.                                              |
| `step` | number | Dewisol | Unrhyw rif | Cam y tymheredd. |
| `min_temp` | number | Dewisol | Unrhyw rif | Y tymheredd lleiaf. |
| `max_temp` | number | Dewisol | Unrhyw rif | Y tymheredd mwyaf. |
| `button_action` | object | Dewisol | `tap_action`, `double_tap_action` neu `hold_action`, gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Caniatáu newid y gweithredoedd rhagosodedig wrth glicio'r botwm. |
| `tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio'r eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `double_tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio dwbl yr eicon, os na chaiff ei ddiffinio, defnyddir `none`. |
| `hold_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth ddal yr eicon, os na chaiff ei ddiffinio, defnyddir `more-info`. |                              |
| `main_buttons_position` | string | Dewisol | `default` neu `bottom` | Symud botymau gweithredu'r hinsawdd i'r gwaelod (sefydlog) |
| `main_buttons_full_width` | boolean | Dewisol | `true` neu `false` | Gwneud botymau gweithredu'r gwaelod yn llawn led (rhagosodedig: `true` pan fydd y safle yn `bottom`) |
| `main_buttons_alignment` | string | Dewisol | `end` (rhagosodedig), `center`, `start`, `space-between` | Aliniad botymau gweithredu'r gwaelod pan nad ydynt yn llawn led |
| `card_layout` | string | Dewisol | `normal` (rhagosodedig os nad yw mewn golwg adran), `large` (rhagosodedig os mewn golwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |
| `sub_button`            | object  | Dewisol                            | Gweler [is-fotymau](#is-fotymau)                | Ychwanegu botymau cyfaddas wedi'u sefydlogi ar y dde. Defnyddiol ar gyfer dewislen dewis modd hinsawdd.                                  |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Prif liw cefndir ar gyfer elfennau a gefnogir yng ngherdyn yr hinsawdd |
| `--bubble-climate-border-radius` | `px` | Radiws border ar gyfer elfennau a gefnogir yng ngherdyn yr hinsawdd |
| `--bubble-climate-button-background-color` | `color` | Lliw cefndir ar gyfer botymau cerdyn yr hinsawdd |
| `--bubble-climate-icon-border-radius` | `px` | Radiws border ar gyfer cynhwysydd eicon cerdyn yr hinsawdd |
| `--bubble-state-climate-fan-only-color` | `color` | Lliw troshaen ar gyfer y cyflwr gwyntyll-yn-unig |
| `--bubble-state-climate-dry-color` | `color` | Lliw troshaen ar gyfer y cyflwr sych |
| `--bubble-state-climate-cool-color` | `color` | Lliw troshaen ar gyfer y cyflwr oeri |
| `--bubble-state-climate-heat-color` | `color` | Lliw troshaen ar gyfer y cyflwr gwresogi |
| `--bubble-state-climate-auto-color` | `color` | Lliw troshaen ar gyfer y cyflwr awtomatig |
| `--bubble-state-climate-heat-cool-color` | `color` | Lliw troshaen ar gyfer y cyflwr gwresogi-oeri |
| `--bubble-climate-accent-color` | `color` | Lliw acen ar gyfer cerdyn yr hinsawdd |
| `--bubble-climate-box-shadow` | Gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer cynhwysydd yr hinsawdd. |

</details>


#### Enghreifftiau

<details>

<summary>Cerdyn hinsawdd â dewislen ollwng moddau HVAC</summary>

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

## Calendr

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Mae'r cerdyn hwn yn eich galluogi i ddangos eich endidau calendr. Gellir sgrolio drwy ei gynnwys, felly gallwch bori digwyddiadau sydd i ddod yn hawdd.

### Opsiynau'r calendr

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw                | Math    | Gofyniad  | Opsiynau a gefnogir                               | Disgrifiad                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Dewisol     | Unrhyw rif (lleiafswm: 1)                        | Nifer y diwrnodau calendr i nôl digwyddiadau ar eu cyfer, o nawr hyd at ddiwedd yr Nfed diwrnod (rhagosodedig: 7) |
| `entities`          | object  | **Angenrheidiol** | Gwrthrych endid calendr (gweler isod)            | Yr endid i'w reoli (e.e. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Angenrheidiol** | Endid calendr                               | Yr endid calendr i'w ddangos                                                          |
| `entities.color`    | string  | Dewisol     | Lliw                                         | Lliw cyfaddas ar gyfer sglodyn y calendr. Os na chaiff ei ddiffinio, dewisir lliw awtomatig |
| `days`              | number  | Dewisol     | Unrhyw rif (lleiafswm: 1)                         | Nifer y diwrnodau calendr i nôl digwyddiadau ar eu cyfer, o nawr hyd at ddiwedd yr Nfed diwrnod (rhagosodedig: 7) |
| `limit`             | number  | Dewisol     | Rhif                                        | Nifer y digwyddiadau a fydd yn cael eu dangos ar y cerdyn                                  |
| `show_end`          | boolean | Dewisol     | `true` neu `false` (rhagosodedig)                     | Dangos neu guddio amser gorffen digwyddiadau                                                    |
| `show_progress`     | boolean | Dewisol     | `true` (rhagosodedig) neu `false`                     | Dangos neu guddio bar cynnydd y digwyddiad                                                     |
| `show_started_events`| boolean | Dewisol     | `true` (rhagosodedig) neu `false`                     | Dangos neu guddio digwyddiadau sydd ar y gweill ar hyn o bryd. Bernir digwyddiadau aml-ddydd un diwrnod ar y tro, felly dim ond y diwrnod sydd ar y gweill sy'n cael ei guddio ac mae'r dyddiau i ddod yn aros yn weladwy |
| `scrolling_effect`  | boolean | Dewisol | `true` (rhagosodedig) neu `false` | Caniatáu i destun sgrolio pan fydd y cynnwys yn fwy na maint eu cynhwysydd |
| `event_action` | object | Dewisol | `tap_action`, `double_tap_action` neu `hold_action`, gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Caniatáu ychwanegu gweithredoedd wrth glicio digwyddiad. |
| `tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio diwrnod, os na chaiff ei ddiffinio, defnyddir `none`. |
| `double_tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio dwbl diwrnod, os na chaiff ei ddiffinio, defnyddir `none`. |
| `hold_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth ddal diwrnod, os na chaiff ei ddiffinio, defnyddir `none`. |
| `card_layout` | string | Dewisol | `normal` (rhagosodedig os nad yw mewn golwg adran), `large` (rhagosodedig os mewn golwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |
| `sub_button` | object | Dewisol | Gweler [is-fotymau](#is-fotymau) | Ychwanegu botymau wedi'u haddasu wedi'u sefydlogi ar y dde |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn                                  | Gwerth disgwyliedig | Disgrifiad                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Prif liw cefndir ar gyfer elfennau a gefnogir yng ngherdyn y calendr  |
| `--bubble-calendar-border-radius`         | `px`           | Radiws border ar gyfer elfennau a gefnogir yng ngherdyn y calendr |
| `--bubble-calendar-height`                | `px`           | Uchder cerdyn y calendr                                        |

</details>

#### Enghreifftiau

<details>

<summary>Cerdyn calendr â nifer cyfyngedig o ddigwyddiadau</summary>

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

<summary>Cerdyn calendr ag amser gorffen a bar cynnydd</summary>

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


## Gwahanydd

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Mae'r cerdyn hwn yn wahanydd syml ar gyfer rhannu eich naidlen yn gategorïau/adrannau, e.e. Goleuadau, Dyfeisiau, Gorchuddion, Gosodiadau, Awtomeiddiadau...

### Opsiynau'r gwahanydd

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Angenrheidiol | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `name` | string | Dewisol ond argymhellir | Unrhyw linyn | Enw ar gyfer eich gwahanydd |
| `icon` | string | Dewisol ond argymhellir | Unrhyw eicon `mdi:` | Eicon ar gyfer eich gwahanydd |
| `card_layout` | string | Dewisol | `normal` (rhagosodiad os nad yw'n olwg adran), `large` (rhagosodiad os yw'n olwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |
| `sub_button` | object | Dewisol | Gweler [is-fotymau](#is-fotymau) | Ychwanegu botymau wedi'u haddasu wedi'u sefydlogi i'r dde |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Lliw cefndir ar gyfer y llinell yn y gwahanydd |

</details>

#### Enghraifft

<details>

<summary>Gwahanydd/rhaniad ar gyfer adran "Gorchuddion"</summary>

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

## Colofn wag

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Mae'r cerdyn hwn yma i lenwi colofn wag. Mae hyn yn ddefnyddiol os oes gennych `horizontal-stack` yn eich naidlen gydag un cerdyn yn unig. Edrychwch ar gornel dde isaf y sgrinlun hwn i (beidio) â'i weld.

### Opsiynau'r golofn wag

Nid oes gan y cerdyn hwn unrhyw opsiynau ac nid yw'n cefnogi [arddull](#arddull), er ei fod yn cefnogi opsiynau cynllun ar gyfer adrannau HA.

#### Enghraifft

<details>

<summary>Colofn wag mewn pentwr llorweddol</summary>

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

## Is-fotymau yn unig

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Mae'r cerdyn hwn wedi'i neilltuo i is-fotymau yn unig. Mae'n berffaith ar gyfer dewislenni, gweithredoedd cyflym, sglodion gwybodaeth, neu droedyn sefydlog ar waelod y dudalen.

> [!IMPORTANT]  
> Mae'r cerdyn hwn yn defnyddio'r sgema is-fotymau newydd. Defnyddiwch `sub_button.bottom` i ddiffinio eich botymau. Anwybyddir yr adran `sub_button.main`.

### Opsiynau is-fotymau yn unig

<details>

<summary><b>Opsiynau (YAML + disgrifiadau)</b></summary>

| Enw | Math | Angenrheidiol | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Angenrheidiol** | Gweler [is-fotymau](#is-fotymau) | Diffiniwch eich is-fotymau gan ddefnyddio'r adran `bottom` |
| `hide_main_background` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Tynnu cefndir y cerdyn |
| `footer_mode` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Sefydlogi'r cerdyn ar waelod y dudalen |
| `footer_full_width` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Gwneud y troedyn yn llawn led (100%) |
| `footer_width` | number | Dewisol | Unrhyw rif | Lled y troedyn mewn picseli pan fo `footer_full_width` yn `false` |
| `footer_bottom_offset` | number | Dewisol | Unrhyw rif | Pellter o waelod y dudalen mewn picseli (rhagosodiad: `16`) |
| `card_layout` | string | Dewisol | `normal` (rhagosodiad os nad yw'n olwg adran), `large` (rhagosodiad os yw'n olwg adran), `large-2-rows`, `large-sub-buttons-grid` | Cynllun arddull y cerdyn, gweler [cynlluniau cardiau](#cynlluniau-cardiau) |
| `rows` | number | Dewisol | Unrhyw rif | Nifer y rhesi (uchder) (e.e. `2`) |

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Lled y troedyn pan fo `footer_full_width` yn `false` |
| `--bubble-footer-bottom` | `px` | Atred waelod y troedyn |
| `--bubble-footer-box-shadow` | gweler [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cysgod blwch ar gyfer cynhwysydd y troedyn |

</details>

#### Enghreifftiau

<details>

<summary>Sglodion (fel yn y sgrinlun)</summary>

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

<summary>Dewislen droedyn sefydlog</summary>

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

## Is-fotymau

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Ym mhob cerdyn sy'n cefnogi'r opsiwn hwnnw, gallwch ychwanegu is-fotymau i addasu eich cardiau ymhellach byth. Gallwch, er enghraifft, greu botwm sy'n gallu rheoli sugnwr llwch, cerdyn tywydd, neu bron unrhyw beth y gallwch chi feddwl amdano. Mae'r is-fotymau hyn yn cefnogi'r gweithredoedd tapio a'r rhan fwyaf o opsiynau'r botwm.

Erbyn hyn mae is-fotymau'n cefnogi tri math: **Rhagosodedig (botwm)**, **Llithrydd**, a **Gollwng i lawr/Dewis**. Gallwch gymysgu mathau yn yr un cerdyn, gosod is-fotymau ar y brig neu'r gwaelod, a'u trefnu'n grwpiau ar gyfer cynlluniau mwy datblygedig.

#### Lleoliad a grwpiau is-fotymau

<details>

<summary><b>Strwythur is-fotymau (main / bottom + grwpiau)</b></summary>

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

**Nodiadau:**
- Mae `main` a `bottom` yn ddwy adran annibynnol. Mae is-fotymau `bottom` yn sefydlog ar waelod y cerdyn.
- Mae `main_layout` a `bottom_layout` yn derbyn `inline` (rhagosodiad) neu `rows` i bentyrru grwpiau'n fertigol.
- Mae grwpiau'n wrthrychau gyda threfn `group` ac opsiynol `buttons_layout` (`inline` neu `column`).
- Mae `justify_content` ar gael ar gyfer **grwpiau bottom yn unig** (`start`, `center`, `end`, `fill`).
- Pan fo is-fotymau bottom yn bresennol, mae cynllun y cerdyn yn newid yn awtomatig i `large` oni bai eich bod chi'n gosod cynllun arall yn benodol.
- Mae trefnau `sub_button` hen ffasiwn yn dal i gael eu cefnogi ac yn cael eu trin fel yr adran `main`.

</details>

### Opsiynau is-fotymau

<details>

<summary><b>Opsiynau (YAML + disgrifiad)</b></summary>

| Enw | Math | Angenrheidiol | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- | --- |
| `entity` | string | Dewisol | Unrhyw endid | Endid i'w reoli |
| `name` | string | Dewisol | Unrhyw linyn | Enw ar gyfer eich is-fotwm, os na chaiff ei ddiffinio bydd yn dangos enw'r endid |
| `icon` | string | Dewisol | Unrhyw eicon `mdi:` | Eicon ar gyfer eich is-fotwm, os na chaiff ei ddiffinio bydd yn dangos eicon neu lun yr endid |
| `force_icon` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Gorfodi'r eicon hyd yn oed os oes llun endid ar gael |
| `sub_button_type` | string | Dewisol | `default`, `slider` neu `select` | Dewiswch fath yr is-fotwm |
| `show_background` | boolean | Dewisol | `true` (rhagosodiad) neu `false` | Dangos cefndir ar gyfer eich is-fotwm, bydd yn newid ei liw yn seiliedig ar gyflwr eich endid |
| `state_background` | boolean | Dewisol | `true` (rhagosodiad) neu `false` | Defnyddio lliw'r cyflwr pan fo'r endid yn `on` |
| `light_background` | boolean | Dewisol | `true` (rhagosodiad) neu `false` | Defnyddio lliw'r golau ar gyfer y cefndir pan fo ar gael |
| `show_state` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Dangos neu guddio cyflwr eich `entity` |
| `show_name` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Dangos neu guddio'r enw |
| `show_icon` | boolean | Dewisol | `true` (rhagosodiad) neu `false` | Dangos neu guddio'r eicon |
| `show_last_changed` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Dangos amser newid diwethaf eich `entity` |
| `show_last_updated` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Dangos amser diweddaru diwethaf eich `entity` |
| `show_attribute` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Dangos priodwedd o'ch `entity` islaw ei `name` |
| `attribute` | string | Dewisol (angenrheidiol os yw `show_attribute` wedi'i osod i `true`) | Priodwedd o'ch `entity` | Y briodwedd i'w dangos (e.e. `brightness`) |
| `select_attribute` | string | Dewisol | Rhestr briodweddau o'ch `entity` (gweler yr opsiynau a gefnogir uchod) | Bydd y rhestr briodweddau hon yn agor gollwng i lawr os caiff ei glicio (e.e. `effect_list`) |
| `show_arrow` | boolean | Dewisol | `true` (rhagosodiad) neu `false` | Dangos neu guddio saeth y gollwng i lawr ar gyfer is-fotymau dewis |
| `scrolling_effect` | boolean | Dewisol | `true` (rhagosodiad) neu `false` | Caniatáu i destun sgrolio pan fo'r cynnwys yn fwy na maint y cynhwysydd |
| `tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio'r is-fotwm, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `double_tap_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth glicio dwbl yr is-fotwm, os na chaiff ei ddiffinio, defnyddir `none`. |
| `hold_action` | object | Dewisol | Gweler [gweithredoedd](#gweithredoedd-tapio-tapio-dwbl-a-dal) | Diffinio math y weithred wrth ddal yr is-fotwm, os na chaiff ei ddiffinio, defnyddir `more-info`. |
| `fill_width` | boolean | Dewisol | `true` neu `false` | Llenwi'r lled sydd ar gael (rhagosodiad: `false` ar gyfer main, `true` ar gyfer bottom) |
| `width` | number or string | Dewisol | Unrhyw rif neu hyd CSS | Lled wedi'i addasu (`px` ar gyfer yr adran main, `%` ar gyfer yr adran bottom yn rhagosodedig) |
| `custom_height` | number | Dewisol | Unrhyw rif | Uchder wedi'i addasu mewn picseli |
| `content_layout` | string | Dewisol | `icon-left` (rhagosodiad), `icon-top`, `icon-bottom`, `icon-right` | Lleoliad yr eicon o fewn yr is-fotwm |
| `always_visible` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | **Llithrydd yn unig.** Dangos y llithrydd bob amser yn hytrach na'i agor wrth dapio |
| `show_button_info` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | **Llithrydd yn unig.** Dangos eicon/enw/cyflwr pan fo `always_visible` wedi'i alluogi |
| `visibility` | object or list | Dewisol | Gweler [amodau](#amodau) | Dangos neu guddio'r is-fotwm yn seiliedig ar amodau |
| `hide_when_parent_unavailable` | boolean | Dewisol | `true` neu `false` (rhagosodiad) | Cuddio'r is-fotwm os yw endid y cerdyn rhiant ddim ar gael |
| `css_class` | string | Dewisol | Unrhyw linyn | Dosbarth CSS ychwanegol ar yr is-fotwm, i'w dargedu yn eich [arddull](#arddull) beth bynnag fo'i enw (e.e. mae `My value` yn rhoi `.my-value`) |

</details>

<details>

<summary><b>Opsiynau is-fotymau llithrydd (yr un fath â llithryddion botwm)</b></summary>

<br>

Mae is-fotymau llithrydd yn cefnogi'r un opsiynau llithrydd â llithryddion botwm, gan gynnwys:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Newidynnau CSS (gweler <a href="#arddull">Arddull</a>)</b></summary>

| Newidyn | Gwerth disgwyliedig | Disgrifiad |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radiws ymyl ar gyfer yr is-fotymau |
| `--bubble-sub-button-background-color` | `color` | Lliw cefndir ar gyfer yr is-fotymau |
| `--bubble-sub-button-outline` | `box-shadow` | Amlinelliad a ychwanegir at is-fotwm neu lithrydd dim ond pan fydd yn cael ei baentio yn yr un lliw â'r cerdyn y tu ôl iddo, a fyddai'n ei wneud yn anweledig (gosodwch ef i `none` i'w dynnu) |
| `--bubble-sub-slider-border-radius` | `px` | Radiws ymyl ar gyfer is-fotymau llithrydd |
| `--bubble-sub-slider-background-color` | `color` | Lliw cefndir ar gyfer is-fotymau llithrydd |
| `--bubble-sub-slider-height` | `px` | Uchder ar gyfer is-fotymau llithrydd gweladwy bob amser |
| `--bubble-sub-slider-outline` | `box-shadow` | Amlinelliad yr is-fotymau llithrydd yn unig, yn syrthio'n ôl ar `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Lliw testun ar gefndiroedd is-fotwm llachar |

</details>

#### Enghreifftiau

<details>

<summary>Botwm gydag is-fotymau i wneud cerdyn sugnwr llwch (fel yn y sgrinlun)</summary>

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

<summary>Llithrydd botwm gydag is-fotwm sy'n dangos y disgleirdeb ac un sy'n toglo'r golau (fel yn y sgrinlun)</summary>

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

<summary>Botwm sy'n dangos y tymheredd tu mewn a thu allan gyda'r tywydd ar gyfer heddiw ac yfory (sgrinlun wedi'i gynnwys)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Anlwc i mi, mae'n gymylog trwy'r amser ond mae'r holl eiconau'n newid yn seiliedig ar y tywydd.

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

## Cynlluniau cardiau

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Mae Bubble Card yn cefnogi'n llawn olwg adran Home Assistant, gallwch newid cynllun y cerdyn i wneud y cerdyn yn fwy a hefyd newid nifer y colofnau neu resi y dylai'r cerdyn eu meddiannu yn eich golwg adran (dim ond ar y cardiau sy'n cefnogi'r opsiwn hwnnw). Mae'r cynlluniau hyn hefyd yn cael eu cefnogi ym mhob math arall o olwg.

<details>

<summary><b>Cynlluniau cardiau sydd ar gael</b></summary>

| Cynllun | Disgrifiad |
| --- | --- |
| `normal` | Y cynllun arferol (heb ei optimeiddio ar gyfer yr olwg adran) |
| `large` | Cynllun mwy a fydd yn ailfeintio i'r rhesi a ddewiswyd yn yr olwg adran (wedi'i optimeiddio ar gyfer yr olwg adran) |
| `large-2-rows` | Cynllun mwy gyda 2 res o is-fotymau a fydd yn ailfeintio i'r rhesi a ddewiswyd yn yr olwg adran (wedi'i optimeiddio ar gyfer yr olwg adran) |
| `large-sub-buttons-grid` | Bydd y cynllun hwn yn dangos is-fotymau mewn grid, rhaid gosod `rows` i o leiaf `2`.

</details>

#### Enghreifftiau

<details>

<summary>Botwm mawr sy'n dangos ystadegau ynni gyda 2 res o is-fotymau (sgrinlun wedi'i gynnwys)</summary>

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

<summary>Botwm mawr gyda sawl rhes a 12 is-fotwm</summary>

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

## Amodau

Mae rhai opsiynau'n cael eu gyrru gan amodau, wedi'u hysgrifennu'n union fel rhai [cerdyn amodol](https://www.home-assistant.io/dashboards/conditional/) Home Assistant:

- `visibility` ar [is-fotwm](#is-fotymau), i'w ddangos neu ei guddio
- `trigger` ar [naidlen](#naidlen), i'w hagor pan fodlonir yr amodau
- `checkConditionsMet(conditions, hass)` y tu mewn i'ch [templedi](#templedi), pan fydd angen yr ateb arnoch yn eich cod eich hun

Gwerthusir pob math o amod yn Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, a'r grwpiau `and`, `or` a `not`. Mae amodau adeiladwr amodau Home Assistant yn gweithio hefyd, y rhai a enwir ar ôl eu parth fel `sun.is_up`, `light.is_on`, `zone.in_zone` neu `temperature.is_value`, gyda'u gosodiadau `target`, `options`, `behavior` a `for`.

<details>

<summary><b>Enghraifft</b></summary>

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
> Gwerthusir amodau yn eich porwr, felly ni all yr ychydig ohonynt sydd angen gweinydd Home Assistant fod yn union: darllenir codiad a machlud haul o'r endid `sun.sun` yn lle cael eu hailgyfrifo, ac mae hyd `for` yn cael ei fesur o'r newid stad diwethaf, heb hanes y recorder.
>
> Derbynnir `view_columns` ond mae bob amser yn pasio, gan nad Bubble Card sy'n gosod colofnau eich golwg byth. Mae math o amod nad yw Bubble Card yn ei adnabod yn adrodd amdano'i hun unwaith yng nghonsol eich porwr yn lle methu'n dawel, felly gallwch wahaniaethu rhwng gwall teipio a nodwedd goll.

<br>

---

<br>

## Gweithredoedd tapio, tapio dwbl a dal

Gallwch hefyd ddefnyddio gweithredoedd tapio, gweithredoedd tapio dwbl a gweithredoedd dal rhagosodedig Home Assistant ar y cardiau sy'n cefnogi'r opsiwn hwn. Er enghraifft, mae hyn yn caniatáu ichi ddangos y ffenestr "mwy o wybodaeth" trwy ddal eicon botwm neu redeg gwasanaeth pan gaiff is-fotwm ei bwyso.

**Sylwer: Pan fo `double_tap_action` wedi'i ffurfweddu, bydd oedi o 200ms ar y `tap_action` arferol i ganiatáu canfod
tapiad dwbl. Os yw'r oedi hwn yn annymunol, gosodwch `double_tap_action` i `none` i analluogi trin tapiadau dwbl.**

### Opsiynau gweithred

<details>

<summary><b>Opsiynau (YAML + disgrifiad)</b></summary>

| Enw | Math | Opsiynau a gefnogir | Disgrifiad |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Gweithred i'w chyflawni |
| `target` | object |  | Dim ond yn gweithio gyda `call-service`. Yn dilyn [cystrawen home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Unrhyw lwybr o'ch dangosfwrdd | Llwybr i lywio iddo (e.e. `'#kitchen'` i agor naidlen) pan ddiffinnir y weithred fel navigate |
| `url_path` | string | Unrhyw ddolen | URL i'w agor wrth glicio (e.e. `https://www.google.com`) pan fo'r weithred yn `url` |
| `service` | string | Unrhyw wasanaeth | Gwasanaeth i'w alw (e.e. `media_player.media_play_pause`) pan ddiffinnir `action` fel `call-service` |
| `data` or `service_data` | object | Unrhyw ddata gwasanaeth | Data gwasanaeth i'w gynnwys (e.e. `entity_id: media_player.kitchen`) pan ddiffinnir `action` fel `call-service` |
| `confirmation` | object | Gweler [cadarnhad](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Dangos naidlen gadarnhad (nid un Bubble Card), yn drech na'r gwrthrych `confirmation` rhagosodedig |

</details>

#### Enghraifft

<details>

<summary>Botwm i agor naidlen</summary>

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

## Arddull

Gallwch ychwanegu arddulliau addasiedig i newid CSS pob cerdyn **heb ddefnyddio card-mod** mewn pedair ffordd:

- Yn y golygydd, ewch i'r cerdyn rydych am ei addasu, yna ewch i _Opsiynau arddull > Arddulliau a thempledi JS addasiedig_, ac ychwanegwch eich arddulliau addasiedig (edrychwch ar y cynghorion a'r enghreifftiau isod).
- Yn y golygydd (neu yn [YAML](#ffurfweddu)), ewch i'r cerdyn rydych am ei addasu, yna ewch i _Modiwlau_, yna crëwch fodiwl newydd (bydd ar gael i bob cerdyn), neu ewch i'r **Module Store** i osod unrhyw Fodiwl sydd ar gael (mwy o fanylion am fodiwlau i'w cael [isod](#modiwlau)).
- Mewn ffeil [thema](https://www.home-assistant.io/integrations/frontend/#defining-themes) drwy ychwanegu newidynnau CSS mewn YAML (mae'r rhain ar gael yn nogfennaeth pob cerdyn uchod). Mae hyn yn caniatáu addasiadau eang.

  <details>
  
  <summary>Enghraifft</a></summary>
  
  <br>

  Peidiwch â chopïo'r llinell `Bubble:`, enw'r thema rydych chi'n ei defnyddio yw hon. Mae angen i chi hefyd dynnu'r `--` o'r newidynnau.

  Mae angen i chi redeg y gweithred [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) i adnewyddu'r thema ar ôl unrhyw addasiadau.

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
  
- Yn YAML drwy ychwanegu `styles: |` wedi'i ddilyn gan eich arddulliau addasiedig (edrychwch ar y cynghorion a'r enghreifftiau isod).

> [!TIP]  
> **I ddeall pa ddosbarthiadau arddull y gellir eu haddasu**, gallwch edrych ar y ffolder [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) yn y repo hwn. Ym mhob ffolder cerdyn, fe welwch ffeil o'r enw `styles.css`. Mae'r ffeiliau hyn yn cynnwys yr holl arddulliau a gymhwysir. Mae hyn yn caniatáu llawer mwy o bosibiliadau na newidynnau CSS, ond mae angen ei ychwanegu'n unigol i bob cerdyn.
> 
> Gallwch hefyd ddod o hyd i lawer o [enghreifftiau gan y gymuned](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), neu rai o'r [fforwm Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) drwy chwilio ychydig.
>
> Mae modd dod o hyd i'r thema Bubble ar gyfer Home Assistant (fel yn y sgrinluniau) [yma](https://github.com/Clooos/Bubble).
>
> Bydd fideo tiwtorial ar gael cyn hir ar fy [sianel YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Sylwer efallai y bydd angen i chi ychwanegu `!important;` at rai arddulliau CSS sydd eisoes wedi'u diffinio (gweler yr enghreifftiau isod).

> [!TIP]  
> Gellir targedu is-fotymau drwy ddosbarthiadau seiliedig ar enw. Er enghraifft, gellir arddulli is-fotwm o'r enw "My sub-button" gyda `.my-sub-button`. Mae is-fotymau llithrydd hefyd yn dangos `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, ac ati.
>
> Mae dosbarth seiliedig ar enw yn newid pan fyddwch yn ailenwi is-fotwm, ac mae'n cael ei gyfieithu pan gyfieithir yr enw. Gosodwch `css_class` ar yr is-fotwm i gael dosbarth eich hun nad yw byth yn symud, beth bynnag fo'i enw a beth bynnag fo'r iaith.

#### Enghreifftiau

<details>

<summary>Newid maint ffont unrhyw Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Newid lliw cefndir un botwm mewn pentwr botymau llorweddol</summary>

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

<summary>Newid lliw cefndir cerdyn</summary>

<br>

Mae hwn yn gweithio ar bob math o Bubble Card (heblaw'r naidlenni):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Mae hwn yn gwneud yr un peth mewn cerdyn botwm yn unig (mae'n gweithio ar gyfer pennawd y naidlen): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

I newid y lliw pan mae'n `on` edrychwch ar y templedi arddull isod.

</details>

<details>

<summary>Newid lliw llithrydd botwm</summary>

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

<summary>Newid lliw llinell gwahanydd</summary>

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

<summary>Newid lliw eicon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Ar gyfer eicon pentwr botymau llorweddol.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Newid lliw cefndir cynhwysydd eicon</summary>

<br>

Mae hwn yn gweithio ar bob math o Bubble Card (heblaw'r naidlenni):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Mae hwn yn gwneud yr un peth ar gyfer pennawd y naidlen: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Newid maint yr is-fotymau (perffaith ar gyfer y cynllun mawr)</summary>

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

<summary>Newid lliw cefndir yr ail is-fotwm</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Newid maint eicon</summary>

<br>

Ar gyfer y prif eicon.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Ar gyfer eiconau'r is-fotymau.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Defnyddio llun yn hytrach nag eicon mewn is-fotwm</summary>

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

Llwythwch y llun hwn i ffolder "pictures" (neu'r enw a ddymunwch) yn ffolder "www" Home Assistant.

</details>

<details>

<summary>Enghraifft uwch: Creu rhes lorweddol o is-fotymau (sgrinlun wedi'i gynnwys)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Rwyf wrth fy modd gyda hwn, rwy'n ei ddefnyddio fel pennawd ar fy dashfwrdd.

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

## Templedi

**Nid yw Bubble Card yn cefnogi templedi Jinja** ond gall defnyddwyr uwch ychwanegu templedi mewn JS yn uniongyrchol yn eu [harddulliau addasiedig](#arddull). Er enghraifft, mae hyn yn caniatáu newid eicon, testunau neu liwiau elfen yn ddeinamig, dangos neu guddio elfen yn amodol (fel is-fotwm), neu bron unrhyw beth yn seiliedig ar stad, priodoledd a mwy.

> [!TIP]  
> Mwy o wybodaeth am dempledi JS [yma](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Fy nghyngor i yw **edrych bob amser ar gonsol eich porwr** i sicrhau bod popeth yn gweithio'n gywir.

> [!IMPORTANT]  
> **Rhaid gosod pob templed nad yw'n addasu priodoledd CSS ar y diwedd! Fel newid eicon, testun neu unrhyw elfen.**

#### Newidynnau a ffwythiannau ar gael

<details>

<summary>Newidynnau</summary>

<br>

Mae gennych fynediad at y newidynnau hyn yn y rhan fwyaf o gardiau:

- Bydd `state` yn dychwelyd stad eich `entity` diffiniedig.
  
- Bydd `entity` yn dychwelyd eich endid a ddiffiniwyd fel `switch.test` yn yr enghraifft hon.
  
- Gellir defnyddio `icon` fel hyn i newid yr eicon `icon.setAttribute("icon", "mdi:lightbulb")`.

- Bydd `subButtonState[0]` yn dychwelyd stad `entity` diffiniedig eich is-fotwm cyntaf, `[0]` yw stad yr is-fotwm cyntaf, `[1]` yr ail...
  
- Gellir defnyddio `subButtonIcon[0]` fel hyn i newid eicon yr is-fotwm cyntaf `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` yw eicon yr is-fotwm cyntaf, `[1]` yr ail...
  
- Bydd `card` yn dychwelyd elfen y cerdyn yn y DOM.
  
- Mae `hass` yn newidyn uwch sy'n rhoi hyd yn oed mwy o reolaeth i chi, er enghraifft gallwch ddychwelyd stad `light.kitchen` fel hyn `hass.states['light.kitchen'].state` neu briodoledd fel hyn `hass.states[entity].attributes.brightness`.

- Bydd `this` yn dychwelyd llawer o wybodaeth ddefnyddiol am eich gosodiad a'ch dashfwrdd, defnyddiwch hwn dim ond os ydych chi'n gwybod beth rydych chi'n ei wneud.

</details>

<details>

<summary>Ffwythiannau</summary>

<br>

Mae gennych fynediad at bob ffwythiant JS byd-eang, ond mae gennych fynediad hefyd at:

- Gellir defnyddio `getWeatherIcon` i ddychwelyd eicon tywydd yn seiliedig ar stad sy'n dychwelyd y tywydd. Er enghraifft, gallwch wneud hyn `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` i newid eicon y trydydd is-fotwm i eicon tywydd heddiw, mae `.forecast[1]?.condition` ar gyfer yfory...

  Bydd angen i chi greu synhwyrydd templed ar gyfer hynny. Dyma'r hyn y gallwch ei ychwanegu yn eich `configuration.yaml`:
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
- Mae `checkConditionsMet(conditions, hass)` yn dychwelyd `true` pan fodlonir rhestr o [amodau](#amodau), er enghraifft `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- Gellir defnyddio `hass.formatEntityState(state)` i gyfieithu stad (gellir ei ddefnyddio hefyd i gael uned stad, heb fod angen ei hychwanegu â llaw).
- Gellir defnyddio `hass.formatEntityAttributeValue(state, "attribute")` i gyfieithu priodoledd (gellir ei ddefnyddio hefyd i gael uned stad, heb fod angen ei hychwanegu â llaw).

</details>

#### Enghreifftiau

Fe welwch lawer o enghreifftiau isod, ond gallwch hefyd ddod o hyd i dempledi uwch iawn ar fy [nhudalen Patreon](https://www.patreon.com/c/Clooos), fel un (fy ffefryn) sy'n caniatáu hyd at bedair bathodyn amodol wedi'u gosod o amgylch eiconau'r cerdyn. Mae hefyd yn ffordd wych o ddysgu am holl bosibiliadau arddulliau a thempledi addasiedig Bubble Card!

<details>
<summary>Enghreifftiau o fy nhudalen Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Ychwanegu bathodynnau tebyg i Home Assistant i unrhyw gerdyn</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Dangos dyddiad ac amser wedi'u fformatio mewn gwahanydd heb ddefnyddio unrhyw endid</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Dangos stad is-fotwm ar ddwy linell</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Addasu labeli ac eiconau y tu mewn i is-fotwm dewis</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Ychwanegu naidlen atgoffa barhaus sy'n ymddangos dim ond pan fo angen</a>
</p>

<br>

</details>

<details>

<summary>Newid lliw cefndir botwm sy'n goch pan mae'n <code>off</code> ac yn las pan mae'n <code>on</code></summary>

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

<summary>Newid lliw cefndir botwm yn seiliedig ar endid ar gyfer y pentwr botymau llorweddol</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Dangos/Cuddio is-fotwm yn amodol</summary>

<br>

Mae hwn yn dangos yr is-fotwm cyntaf dim ond pan fo fy sugnwr llwch yn sownd.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Mae hwn yn dangos is-fotwm pan fo'r batri o dan 10%. Defnyddiol gydag is-fotwm sy'n dangos "Batri isel".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Newid eicon neu eicon is-fotwm yn amodol</summary>

<br>

Mae hwn yn newid eicon botwm dim ond pan fo sugnwr llwch yn sownd.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Mae hwn yn newid eicon yr is-fotwm cyntaf dim ond pan fo sugnwr llwch yn sownd.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Newid lliw eicon neu eicon is-fotwm yn amodol</summary>

<br>

Mae hwn yn newid lliw eicon botwm yn seiliedig ar ei stad.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Mae hwn yn newid lliw eicon is-fotwm yn seiliedig ar ei stad. `.bubble-sub-button-1` yw'r is-fotwm cyntaf, newidiwch `1` os ydych chi am newid eicon is-fotwm arall.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animeiddio eicon ffan yn amodol</summary>

<br>

Mae hwn yn cylchdroi eicon botwm pan fo ffan yn `on`.
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

<summary>Templedu testunau (fel enw neu stad)</summary>

<br>

Mae hwn yn newid enw/stad botwm gyda "Mae'n heulog ar hyn o bryd" yn dibynnu ar eich tywydd.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
neu pan gymhwysir ar gyfer is-fotymau:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Os ydych chi am dempledu'r stad (`.bubble-state`) peidiwch â throi `show_state: true` ymlaen, dim ond trowch `show_attribute: true` ymlaen heb unrhyw briodoledd.

</details>

<details>

<summary>Enghraifft uwch: Newid lliw is-fotwm pan fo naidlen ar agor</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Enghraifft uwch: Templedu enw gwahanydd yn seiliedig ar stad wedi'i chyfieithu i'ch iaith</summary>

<br>

Gallwch ddefnyddio `hass.formatEntityState(state)` i gyfieithu stad a `hass.formatEntityAttributeValue(state, "attribute")` i gyfieithu priodoledd.

Mae hwn yn newid yr enw a'r eicon yn seiliedig ar y tywydd, ystyr "Nuageux" yw "Cymylog" yn Ffrangeg.

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

## Modiwlau

Mae modiwlau'n nodwedd bwerus sy'n eich galluogi i gadw, ailddefnyddio a rhannu eich arddulliau a'ch templedi addasiedig ar draws pob un o'ch Bubble Cards. Yn hytrach na chopïo a gludo'r un cod i mewn i sawl cerdyn, gallwch greu Modiwl a'i gymhwyso lle bynnag y bydd ei angen. Mae hyn yn gwneud rheoli golwg a theimlad eich dashfwrdd yn llawer haws ac yn fwy effeithlon.

Ond mae'r nodwedd hon yn llawer mwy pwerus na hynny, mae'n gadael i chi ychwanegu nodweddion go iawn eich hun yng ngolygydd Bubble Card, gan ddefnyddio holl opsiynau'r [ffurflen ddiofyn Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Mae'r dewisydd gwrthrych wedi'i wella i ddangos newidiadau byw ac i gefnogi priodoleddau'n gywir.

Gall modiwl hefyd ateb dewisydd cardiau Home Assistant ochr yn ochr â'r [awgrymiadau endid](#awgrymiadau-endid) mewnol: defnyddiwch `suggestions` ar gyfer y cardiau y gall eu disgrifio ymlaen llaw, a `suggestions_code` pan fo'n rhaid eu cyfrifo o'ch gosodiad, er enghraifft naidlen wedi'i hadeiladu o bob endid yn yr ardal y mae'r endid a ddewiswyd yn perthyn iddi. Dogfennir y ddwy allwedd [yma](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Gallwch hefyd bori'r **Module Store** i ddod o hyd i a gosod [modiwlau a grëwyd gan y gymuned](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), neu rannu eich creadigaethau eich hun!

> [!TIP]
> Mae cod Modiwl yn gweithio yn union yr un ffordd â'r cod yn adran `styles` cerdyn. Mae'r un newidynnau a ffwythiannau o'r adran [Templedi](#templedi) ar gael.

<br>

### Sefydlu cychwynnol

> [!IMPORTANT]
> O v3.1.0 ymlaen, Bubble Card Tools yw'r cefn storio a argymhellir ar gyfer modiwlau. Mae'r dull hen synhwyrydd templed yn dal i weithio ar gyfer gosodiadau presennol, ond mae modiwlau newydd a nodweddion Module Store yn cael eu cefnogi orau drwy Bubble Card Tools.

Mae'r integreiddiad Bubble Card Tools yn galluogi'r Module Editor a'r Module Store, ac yn storio modiwlau fel ffeiliau YAML unigol. Mae modiwlau presennol yn cael eu mudo'n awtomatig.

Esbonnir y camau gosod a ffurfweddu yma:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Golygydd y Modiwlau

Gallwch gael mynediad at olygydd y Modiwlau o osodiadau unrhyw gerdyn, o dan yr adran **Modiwlau**. Mae'r golygydd yn cynnig dwy brif dab:

#### Tab My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Mae'r tab hwn yn dangos pob un o'ch modiwlau gosodedig ac yn eich galluogi i:

- **Gymhwyso** modiwlau presennol i'r cerdyn cyfredol
- **Greu** modiwl newydd o'r dechrau
- **Olygu** modiwlau presennol gyda rhagolwg byw
- **Ddileu** modiwlau nad oes eu hangen mwyach
- **Chwilio** a **threfnu** modiwlau (yn nhrefn yr wyddor, diweddar, gweithredol yn gyntaf)
- **Osod stad byd-eang** i wneud i fodiwl gael ei gymhwyso i bob cerdyn yn awtomatig
- **Fewnforio/Allforio** modiwlau ar gyfer copi wrth gefn neu rannu
- **Ysgrifennu awgrymiadau endid** yn y golygydd modiwlau, o dan **Dewisol: awgrymiadau endid**, fel bod eich modiwl yn cael ei gynnig yn newisydd cardiau Home Assistant. Gwirir y rheolau a'r awgrymiadau wedi'u cyfrifo wrth i chi ysgrifennu, mae gwall yno'n atal cadw, ac mae'r rhagolwg yn dangos y cardiau a awgrymir ar gyfer unrhyw endid a ddewiswch

#### Tab Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Bydd y tab hwn yn dangos [pob modiwl sydd ar gael gan y gymuned](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ac yn eich galluogi i:

- **Bori** pob modiwl a grëwyd gan y gymuned
- **Chwilio** a hidlo modiwlau yn ôl enw, cydnawsedd, neu eiriau allweddol
- **Osod** modiwlau ag un clic
- **Ddiweddaru** modiwlau gosodedig pan fo fersiynau newydd ar gael

> [!TIP]
> Yn y golygydd, gallwch alluogi modiwlau anghefnogol i brofi modiwlau nad ydynt eto wedi'u marcio fel rhai cydnaws â math penodol o gerdyn.

<br>

### Sut i ddefnyddio modiwlau

#### Creu modiwl newydd

<details>

<summary>Cliciwch i ehangu</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Ewch i olygydd unrhyw gerdyn ac ehangu'r adran **Modiwlau**.
2. Cliciwch ar **Create new module**.
3. Llenwch wybodaeth y modiwl.
4. Ysgrifennwch eich cod templed CSS a/neu JavaScript yn y golygydd **Code**.
5. (Dewisol) Crëwch UI ffurfweddu addasiedig yn yr adran **Editor** (fel y dewisydd lliw yn y sgrinlun uchod, dogfennaeth lawn ar gael [yma](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Dewisol) Ysgrifennwch eich **Awgrymiadau endid** fel bod eich modiwl yn cael ei gynnig yn newisydd cardiau Home Assistant. Mae'r panel yn gwirio'r hyn rydych yn ei ysgrifennu wrth i chi deipio, ac mae ei ragolwg yn dangos y cardiau a awgrymir eu hunain ar gyfer yr endid o'ch dewis.
7. Cliciwch **Save**.

Mae eich modiwl bellach ar gael i'w ddefnyddio ar unrhyw un o'ch cardiau!

<br>

</details>

#### Cymhwyso modiwl i gerdyn

<details>

<summary>Cliciwch i ehangu</summary>

<br>

- **Drwy'r golygydd:**

  - Ewch i olygydd y cerdyn rydych am gymhwyso'r modiwl iddo.
  - Ehangwch yr adran **Modiwlau**.
  - Cliciwch ar y modiwl rydych am ei gymhwyso o'r rhestr.
  - O dan "Apply to", cliciwch ar "This card". Mae'r modiwl bellach yn weithredol. Gallwch gymhwyso sawl modiwl i'r un cerdyn.

- **Drwy YAML:**

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

#### Cymhwyso modiwl yn fyd-eang

<details>

<summary>Cliciwch i ehangu</summary>

<br>

Gallwch osod modiwl i'w gymhwyso'n awtomatig i bob Bubble Card:

**Nid yw hyn ar gael ar gyfer modiwlau sydd â golygydd, gan fod y rheiny angen ffurfweddiad penodol i weithio.**

- **Drwy'r golygydd:**

  - Yng ngolygydd y Modiwlau, dewch o hyd i'ch modiwl yn y tab **My Modules**.
  - Trowch y botwm **All cards** wrth ochr enw'r modiwl.
  - Bydd y modiwl bellach yn cael ei gymhwyso i bob cerdyn yn awtomatig.
 
- **Drwy YAML:**

  Yn ffurfweddiad YAML eich modiwl (yn `bubble-modules.yaml`), ychwanegwch `is_global: true`.

<br>

</details>

#### Eithrio un cerdyn o fodiwl byd-eang

<details>

<summary>Cliciwch i ehangu</summary>

<br>

Os oes gennych fodiwl byd-eang ond eisiau ei eithrio o gerdyn penodol:

- **Drwy'r golygydd:**
  
  - Yn adran **Modiwlau** y cerdyn, fe welwch fodiwlau byd-eang wedi'u rhestru.
  - Cliciwch ar fodiwl byd-eang, analluogwch "This card" i'w eithrio o'r cerdyn penodol hwn.

- **Drwy YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Rhannu eich modiwl i'r Module Store

<details>

<summary>Cliciwch i ehangu</summary>

<br>

I rannu eich Modiwl i'r Module Store, yng Ngolygydd y Modiwlau, ar y gwaelod yn "Export Module", cliciwch ar "Copy for GitHub" a gludwch y cynnwys mewn trafodaeth newydd yn y categori [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Golygwch y disgrifiad** (os oes angen), **yr enghraifft** (ar gyfer defnyddwyr YAML), a chofiwch **gynnwys o leiaf un sgrinlun** ar gyfer y Module Store.

**Mae eich Modiwl ar gael yn syth wedi hynny** (ar ôl adnewyddu'r Store), felly gwiriwch eto fod popeth wedi'i ysgrifennu'n gywir a bod y Modiwl yn gweithio fel y disgwylir. Wrth gwrs, gallwch olygu/ddiweddaru'r Modiwl ar ôl ei rannu.

<br>

</details>

#### Rheoli fersiynau

<details>

<summary>Cliciwch i ehangu</summary>

<br>

Mae'r Module Store yn gwirio'n awtomatig am ddiweddariadau i fodiwlau gosodedig. Pan fo diweddariadau ar gael:

1. Fe welwch ddangosydd diweddaru yn nhab y **Module Store**.
2. Cliciwch **Update** ar fodiwlau sydd â diweddariadau ar gael.
3. Cadarnhewch y diweddariad yn y Module Store.

<br>

</details>

#### Diffinio mathau o gardiau a gefnogir

<details>

<summary>Cliciwch i ehangu</summary>

<br>

Efallai na fydd rhai modiwlau yn gydnaws â phob math o gerdyn. Gallwch nodi pa gardiau y mae modiwl yn eu cefnogi.  
Os ydych chi am i fodiwl fod yn gydnaws â **phob cerdyn**, hepgorwch y maes `supported` yn syml (neu defnyddiwch yr opsiwn **All cards** yn y golygydd).

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

### Enghreifftiau

<details>
<summary>Modiwl arddull sylfaenol</summary>

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
<summary>Modiwl gyda ffurfweddiad addasiedig</summary>

<br>

Mae'r modiwl hwn ar gael [yma](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Ceir mwy o enghreifftiau yn y Module Store, neu [yma](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lleoleiddio

Mae Bubble Card yn siarad eich iaith. Mae ei olygydd wedi'i gyfieithu i'r 64 iaith y mae Home Assistant yn eu cefnogi, a lle bynnag y mae gan Home Assistant air am rywbeth eisoes, ailddefnyddir ei eiriad ei hun, felly rydych yn darllen yr un termau yn y ddau ryngwyneb.

Ar waelod y golygydd, wrth ymyl rhif y fersiwn, mae switsh **Awtomatig** yn dilyn iaith eich Home Assistant. Diffoddwch ef ac mae'r golygydd cyfan yn dychwelyd i'r Saesneg, sy'n ddefnyddiol i ddilyn tiwtorial neu i adrodd am broblem. Cofir eich dewis yn eich porwr.

Mae'r ddogfennaeth hon wedi'i chyfieithu hefyd, [i 62 iaith](languages.md). Mae'r tudalennau hynny'n agored i bawb, felly gellir cywiro geiriad nad yw'n cyfateb i'ch Home Assistant chi mewn ychydig o gliciau. Mae'r fersiwn Saesneg yn aros yn gyfeirnod ar gyfer y cynnwys ei hun.

<br>

---

<br>

## Cymorth

Mae croeso i chi agor mater os nad yw rhywbeth yn gweithio fel y disgwylir. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Oes gennych chi gwestiynau neu syniadau am Bubble Card? Eisiau rhannu eich dashfyrddau neu ddarganfyddiadau? Gallwch fynd ar fforwm Home Assistant, ar is-Reddit Bubble Card neu ar adran GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Cyfrannu

Mae cyfraniadau'n cael croeso! Boed yn drwsio namau, nodweddion newydd, cyfieithiadau, neu welliannau dogfennaeth, mae croeso i chi agor pull request.

Cyn dechrau, darllenwch y [canllaw datblygwr](DEVELOPERS.md) sy'n esbonio sut i osod eich amgylchedd lleol, adeiladu'r prosiect, a phrofi eich newidiadau.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Rhoi

Rwy'n cysegru y rhan fwyaf o fy amser sbâr i wneud y prosiect hwn cystal ag y gall fod. Felly os ydych chi'n gwerthfawrogi fy ngwaith, byddai unrhyw rodd yn ffordd wych o ddangos eich cefnogaeth 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Diolch i bawb am eich cefnogaeth, chi i gyd yw fy nghymhelliant mwyaf!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
