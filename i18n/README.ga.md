<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Is aistriúchán uathoibríoch é an leathanach seo. I gcás amhrais, is é an [doiciméadú bunaidh i mBéarla](../README.md) a bhíonn i réim. An bhfuil abairt mícheart? Tá fáilte roimh chabhair ar bith, agus ní thógann sé ach nóiméad [an leathanach seo a cheartú](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ga.md): tugann GitHub aire don fhorc agus don iarratas tarraingthe. Go raibh maith agat roimh ré! 🍻

# Bubble Card

🌐 **[Léigh é seo i dteanga eile](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Is bailiúchán cárta íogair agus insaincheaptha é Bubble Card do Home Assistant, ina bhfuil preabfhuinneoga nua-aimseartha agus Module Store comhtháite le breis agus 100 modúl a chruthaigh an pobal.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Clár na n-ábhar

**[`Suiteáil`](#suiteáil)**  **[`Cumraíocht`](#cumraíocht)**  **[`Preabfhuinneog`](#preabfhuinneog)**  **[`Cruach chothrománach cnaipí`](#cruach-chothrománach-cnaipí)**  **[`Cnaipe`](#cnaipe)**  **[`Seinnteoir meán`](#seinnteoir-meán)**  **[`Clúdach`](#clúdach)**  **[`Roghnú`](#roghnú)**  **[`Aeráid`](#aeráid)**  **[`Féilire`](#féilire)**  **[`Deighilteoir`](#deighilteoir)**  **[`Colún folamh`](#colún-folamh)**  **[`Fochnaipí amháin`](#fochnaipí-amháin)**  **[`Fochnaipí`](#fochnaipí)**  **[`Leaganacha amach na gcártaí`](#leaganacha-amach-na-gcártaí)**  **[`Gníomhartha`](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála)**  **[`Stíliú`](#stíliú)**  **[`Teimpléid`](#teimpléid)**  **[`Modúil`](#modúil)**  **[`Cabhair`](#cabhair)**  **[`Rannchuidiú`](#rannchuidiú)**  **[`Síntiús a thabhairt`](#síntiús-a-thabhairt)**

<br>

## Suiteáil

**An leagan Home Assistant is ísle a dtacaítear leis:** 2023.9.0

<details>

<summary>Gan HACS</summary>

<br>

1. Íoslódáil an comhad seo: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Cuir an comhad seo isteach i d'fhillteán `<config>/www`
3. Ar do dhaisbord, cliceáil ar an deilbhín sa chúinne thuas ar dheis agus ansin ar `Edit dashboard`
4. Cliceáil arís ar an deilbhín sin agus ansin cliceáil ar `Manage resources`
5. Cliceáil ar `Add resource`
6. Cóipeáil agus greamaigh é seo: `/local/bubble-card.js?v=1`
7. Cliceáil ar `JavaScript Module` agus ansin ar `Create`
8. Téigh ar ais agus athnuaigh do leathanach
9. Is féidir leat anois cliceáil ar `Add card` sa chúinne thíos ar dheis agus `Bubble Card` a chuardach
10. Tar éis nuashonrú ar bith den chomhad, beidh ort `/local/bubble-card.js?v=1` a chur in eagar agus an leagan a athrú go huimhir níos airde

Mura n-oibríonn sé, bain triail as taisce do bhrabhsálaí a ghlanadh.

</details>

<details>

<summary>Le HACS (Molta)</summary>

<br>

Leis an modh seo gheobhaidh tú nuashonruithe go díreach ar an Home Assistant Community Store

1. Mura bhfuil HACS suiteáilte fós, íoslódáil é ag leanúint na dtreoracha ar [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Lean ar aghaidh leis an gcéad chumraíocht HACS ag leanúint na dtreoracha ar [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Ar an mbarra taoibh, téigh go "HACS"
4. Cuardaigh "Bubble Card", nó cliceáil ar an gcnaipe gorm thíos
5. Cliceáil ar "Download"
6. Téigh ar ais ar do dhaisbord agus cliceáil ar an deilbhín sa chúinne thuas ar dheis agus ansin ar `Edit dashboard`
7. Is féidir leat anois cliceáil ar `Add card` sa chúinne thíos ar dheis agus `Bubble Card` a chuardach

Mura n-oibríonn sé, bain triail as taisce do bhrabhsálaí/aip a ghlanadh (ar do chuid gléasanna go léir más gá).

#### Físeáin

Is féidir leat féachaint freisin ar mo chainéal YouTube le haghaidh físeáin chéim ar chéim.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Cumraíocht

Is féidir gach rogha a chumrú in eagarthóir Home Assistant. Ach gheobhaidh tú tuilleadh sonraí agus an YAML sa doiciméadú thíos.

<details>

<summary><b>Príomhroghanna (YAML + cur síos)</b></summary>

| Ainm | Cineál | Riachtanas | Roghanna a dtacaítear leo | Cur síos |
| --- | --- | --- | --- | --- |
| `type` | string | **Riachtanach** | `custom:bubble-card` | Cineál an chárta |
| `card_type` | string | **Riachtanach** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` nó `sub-buttons` | Cineál an Bubble Card, féach thíos |
| `styles` | object list | Roghnach | Aon bhileog stíl CSS | Ligeann sé duit CSS do Bubble Card a shaincheapadh, féach [stíliú](#stíliú) |

</details>

<details>

<summary><b>Athróga comhchoiteanna CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Athróg | Luach ionchais | Cur síos |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Gha imlíne do gach eilimint a dtacaítear leo |
| `--bubble-main-background-color` | `color` | Príomhdhath cúlra do gach eilimint a dtacaítear leo |
| `--bubble-secondary-background-color` | `color` | Dath cúlra tánaisteach do gach eilimint a dtacaítear leo |
| `--bubble-accent-color` | `color` | Dath aicinte do gach eilimint a dtacaítear leo |
| `--bubble-icon-border-radius` | `px` | Gha imlíne deilbhín do gach eilimint a dtacaítear leo |
| `--bubble-icon-background-color` | `color` | Dath cúlra deilbhín do gach eilimint a dtacaítear leo |
| `--bubble-sub-button-border-radius` | `px` | Gha imlíne do gach fochnaipe |
| `--bubble-sub-button-background-color` | `color` | Dath cúlra do gach fochnaipe |
| `--bubble-box-shadow` | féach [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth bosca do gach eilimint a dtacaítear leo |
| `--bubble-border` | féach [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Imlíne do gach cárta a dtacaítear leis |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Féach ar an [bhfíseán](https://www.youtube.com/watch?v=0hSQOlBxKKI) seo chun eolas a fháil ar Bubble Card agus a chumas.** Tá mo chainéal YouTube nua go leor agus dírithe ar theagascóirí faoi Home Assistant agus Bubble Card. Ná bíodh drogall ort liostáil chun cabhrú le hinfheictheacht mo chainéil a mhéadú. Go raibh maith agat roimh ré!

<br>

---

<br>

## Preabfhuinneog

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ligeann an cárta seo duit preabfhuinneog a chruthú le hábhar ar bith. Bíonn gach preabfhuinneog **folaithe de réir réamhshocraithe** agus is féidir í a oscailt trí dhíriú ar a nasc (m.sh. `'#pop-up-name'`), le cárta ar bith a dtacaíonn sé leis an [ngníomh](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) `navigate`, nó leis an [gcruach chothrománach cnaipí](#cruach-chothrománach-cnaipí) atá san áireamh.

> [!TIP]
> ### Truicear na preabfhuinneoige 
> Ligeann an ghné seo duit preabfhuinneog a oscailt bunaithe ar staid aon aonáin, mar shampla, is féidir leat preabfhuinneog "Slándáil" a oscailt le ceamara nuair a bhíonn duine os comhair do thí. Is féidir leat freisin cúntóir scoránaithe (input_boolean) a chruthú agus a oscailt/dúnadh a spreagadh in uathoibriú.
> <details>
> <summary>Ag oscailt preabfhuinneoige nuair atá <code>binary_sensor</code> ar <code>on</code></summary>
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
> ### Bealaí éagsúla chun preabfhuinneog a dhúnadh 
> Tá go leor bealaí ann chun preabfhuinneog a dhúnadh. Mar shampla, is féidir leat sleamhnú ó cheanntásc na preabfhuinneoige síos go bun, sleamhnú fada laistigh den phreabfhuinneog síos go bun, brú ar Escape ar an deasc oibre, an hais a bhaint as an URL, nó go simplí brú ar an gcnaipe dúnta.
>


### Roghanna na preabfhuinneoige

<details>

<summary><b>Roghanna (YAML + cur síos)</b></summary>

| Ainm | Cineál | Riachtanas | Roghanna a dtacaítear leo | Cur síos |
| --- | --- | --- | --- | --- |
| `hash` | string | **Riachtanach** | Aon hais uathúil (m.sh. `'#kitchen'`) le ' ' | Seo mar a osclóidh tú do phreabfhuinneog |
| `popup_style` | string | Roghnach | `bubble` (réamhshocraithe) nó `classic` | Sainigh stíl amhairc na preabfhuinneoige |
| `popup_mode` | string | Roghnach | `default` (réamhshocraithe), `fit-content`, `centered` nó `adaptive-dialog` | Sainigh mód leagan amach na preabfhuinneoige |
| `with_bottom_offset` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Ní úsáidtear é ach le `popup_mode: fit-content` nó `adaptive-dialog`. Cuireann sé fritháireamh bun i bhfeidhm ar an bhfón póca, úsáideach nuair a bhíonn cárta buntásc i do dhaisbord. |
| `full_width_on_mobile` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Ní úsáidtear é ach le `popup_mode: centered`. Leathnaíonn sé an phreabfhuinneog go leithead iomlán an scáileáin ar an bhfón póca, úsáideach ar scáileáin níos lú. |
| `performance_mode` | string | Roghnach | `default` (réamhshocraithe) nó `performance` | Optamaigh beochan oscailte na preabfhuinneoige. Cuireann `performance` beagán moille ar rindreáil an ábhair agus doiléiriú an chúlra, agus díchumasaíonn sé doiléiriú an chúlbhrait má tá sé socraithe. |
| `auto_close` | string | Roghnach | Am istigh i milleasoicindí (m.sh. `10000` do 10s) | Dún an phreabfhuinneog go huathoibríoch tar éis am istigh |
| `close_on_click` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Dún an phreabfhuinneog go huathoibríoch tar éis idirghníomhaíocht ar bith |
| `close_by_clicking_outside` | boolean | Roghnach | `true` (réamhshocraithe) nó `false` | Dún an phreabfhuinneog trí chliceáil lasmuigh di |
| `width_desktop` | string | Roghnach | Aon luach CSS | Leithead ar an deasc oibre (`100%` de réir réamhshocraithe ar an bhfón póca) |
| `margin` | string | Roghnach | Aon luach CSS | Ná húsáid é seo ach **amháin** mura bhfuil do phreabfhuinneog láraithe i gceart ar an bhfón póca (m.sh. `13px`) |
| `margin_top_mobile` | string | Roghnach | Aon luach CSS | Corrlach barr ar an bhfón póca (m.sh. `-56px` má tá do cheanntásc folaithe) |
| `margin_top_desktop` | string | Roghnach | Aon luach CSS | Corrlach barr ar an deasc oibre (m.sh. `50vh` do phreabfhuinneog leath-mhéide nó `calc(100vh - 400px)` d'airde socraithe `400px`) |
| `bg_color` | string | Roghnach | Aon luach heicseadheachúlach, rgb nó rgba | Dath cúlra do phreabfhuinneoige (m.sh. `#ffffff` do chúlra bán) |
| `bg_opacity` | string | Roghnach | Aon luach ó `0` go `100` | Teimhneacht chúlra do phreabfhuinneoige (m.sh. `100` gan trédhearcacht ar bith) |
| `bg_blur` | string | Roghnach | Aon luach ó `0` go `100` | Éifeacht doiléiriú chúlra do phreabfhuinneoige, **ní oibríonn sé seo ach amháin mura bhfuil `bg_opacity` socraithe go `100`** (m.sh. `0` gan doiléiriú ar bith) |
| `shadow_opacity` | string | Roghnach | Aon luach ó `0` go `100` | Teimhneacht scáile do phreabfhuinneoige (m.sh. `0` chun é a fholach) |
| `hide_backdrop` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Socraigh é seo go true ar an gcéad phreabfhuinneog de do phríomhdhaisbord chun an cúlbhrat a dhíchumasú ar gach preabfhuinneog. |
| `background_update` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Nuashonraigh ábhar na preabfhuinneoige sa chúlra (ní mholtar é) |
| `trigger_entity` | string | Roghnach | Aon aonán | Oscail an phreabfhuinneog seo bunaithe ar staid aon aonáin |
| `trigger_state` | string | Roghnach (**Riachtanach** má tá `trigger_entity` sainithe) | Aon staid aonáin | Staid aonáin chun an phreabfhuinneog a oscailt |
| `trigger_close` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Dún an phreabfhuinneog nuair atá `trigger_state` difriúil |
| `open_action` | object | Roghnach | Féach [gníomhartha](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Spreag gníomh nuair a osclaítear an phreabfhuinneog |
| `close_action` | object | Roghnach | Féach [gníomhartha](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Spreag gníomh nuair a dhúntar an phreabfhuinneog |
| `show_header` | boolean | Roghnach | `true` (réamhshocraithe) nó `false` | Taispeáin/Folaigh ceanntásc na preabfhuinneoige go hiomlán |
| `show_previous_button` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Taispeáin cnaipe roimhe seo in aice leis an gcnaipe dúnta agus nascleanúint ar ais go dtí an phreabfhuinneog roimhe seo nuair atá sé ar fáil |
| `show_close_button` | boolean | Roghnach | `true` (réamhshocraithe) nó `false` | Taispeáin nó folaigh an cnaipe dúnta agus fág an chuid eile den cheanntásc infheicthe |
| `buttons_position` | string | Roghnach | `right` (réamhshocraithe) nó `left` | Suíomh na gcnaipí dúnta agus roimhe seo sa cheanntásc |
| `cards` | list | Roghnach | Aon Bubble Card, cárta Home Assistant nó cárta saincheaptha | Sainigh ábhar do phreabfhuinneoige. Féach an sampla preabfhuinneoige thíos. |
| Tá rochtain agat freisin ar [gach socrú cnaipe](#cnaipe) do cheanntásc na preabfhuinneoige. | | Roghnach | | Mura bhfuil sé sainithe ní thaispeánfar aon cheanntásc |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Athróg | Luach ionchais | Cur síos |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Gha imlíne don phreabfhuinneog |
| `--bubble-pop-up-main-background-color` | `color` | Príomhdhath cúlra d'eilimintí a dtacaítear leo sa phreabfhuinneog |
| `--bubble-pop-up-background-color` | `color` | Dath cúlra na preabfhuinneoige |
| `--bubble-backdrop-background-color` | `color` | Dath cúlra don chúlbhrat |
| Tá rochtain agat freisin ar [gach athróg CSS an chnaipe](#roghanna-an-chnaipe) do cheanntásc na preabfhuinneoige. | | |

</details>


### Formáid neamhspleách preabfhuinneoige (v3.2.0+)

Ó v3.2.0 i leith, úsáideann preabfhuinneoga formáid neamhspleách nua ina sainítear cártaí ábhair go díreach laistigh den phreabfhuinneog leis an rogha `cards`. Cuireann sé seo feidhmíocht níos fearr ar fáil chomh maith le taithí eagarthóireachta tarraing agus scaoil nua bunaithe ar rannáin.


#### Samplaí

<details>

<summary>Preabfhuinneog (formáid neamhspleách)</summary>

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

<summary>Cnaipe chun an phreabfhuinneog a oscailt</summary>

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

## Cruach chothrománach cnaipí

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Is comhpháirtí maith é an cárta seo don chárta preabfhuinneoige, rud a ligeann duit na preabfhuinneoga comhfhreagracha a oscailt. Ligeann sé duit freisin leathanach ar bith de do dhaisbord a oscailt. Ina theannta sin, is féidir leat do bhraiteoirí gluaisne/áitíochta a chur leis ionas go n-oiriúnaíonn ord na gcnaipí de réir an tseomra a bhfuil tú díreach tar éis dul isteach ann. Is féidir scrollú tríd an gcárta seo, fanann sé infheicthe, agus feidhmíonn sé mar bhuntásc.

> [!IMPORTANT]  
> Ní mór don chárta seo a bheith an ceann deireanach i do radharc (tar éis gach cárta agus preabfhuinneoige). Ní féidir leis a bheith laistigh d'aon chruach.

### Roghanna na cruaiche cothrománaí cnaipí

<details>

<summary><b>Roghanna (YAML + cur síos)</b></summary>

| Ainm | Cineál | Riachtanas | Roghanna a dtacaítear leo | Cur síos |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Riachtanach** | Hais na preabfhuinneoige (m.sh. `'#kitchen'`) le ' ' nó nasc ar bith | Nasc le hoscailt |
| `1_name` | string | Roghnach | Aon teaghrán | Ainm do do chnaipe |
| `1_icon` | string | Roghnach | Aon deilbhín `mdi:` | Deilbhín do do chnaipe |
| `1_entity` | string | Roghnach | Aon solas nó grúpa solais | Taispeáin dath an tsolais sin sa chúlra |
| `1_pir_sensor` | string | Roghnach | Aon bhraiteoir dénártha | Braiteoir PIR amháin ar a laghad, nó níos mó, do `auto_order`, agus déanta na fírinne oibríonn sé freisin le haon chineál aonáin, mar shampla is féidir leat grúpaí solais a chur leis agus athróidh an t-ord bunaithe ar na staideanna athraithe is déanaí. |
| `auto_order` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Athraigh ord na gcnaipí de réir am athraithe is déanaí an `_pir_sensor`, **ní mór dó a bheith `false` mura bhfuil aon `_pir_sensor` i do chód** |
| `margin` | string | Roghnach | Aon luach CSS | Ná húsáid é seo ach **amháin** mura bhfuil do `horizontal-buttons-stack` láraithe i gceart ar an bhfón póca (m.sh. `13px`) |
| `width_desktop` | string | Roghnach | Aon luach CSS | Leithead ar an deasc oibre (`100%` de réir réamhshocraithe ar an bhfón póca) |
| `is_sidebar_hidden` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Socraigh suíomh na cruaiche cothrománaí cnaipí má tá an barra taoibh folaithe ar an deasc oibre (amháin má rinne tú modhnú tú féin chun é a fholach) |
| `rise_animation` | boolean | Roghnach | `true` (réamhshocraithe) nó `false` | Socraigh é seo go `false` chun an bheochan a dhíchumasú a ghníomhaíonn a luaithe a luchtaítear an leathanach |
| `highlight_current_view` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Aibhsigh an hais/radharc reatha le beochan réidh |
| `hide_gradient` | boolean | Roghnach | `true` nó `false` (réamhshocraithe) | Socraigh é seo go `false` chun an grádán a fholach |

> [!IMPORTANT]  
> Sainíonn na hathróga a thosaíonn le huimhir do chnaipí, ní gá ach an uimhir seo a athrú chun tuilleadh cnaipí a chur leis (féach an sampla thíos).

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Athróg | Luach ionchais | Cur síos |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Gha imlíne do chnaipí na cruaiche cothrománaí cnaipí |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Dath cúlra do chnaipí na cruaiche cothrománaí cnaipí |

</details>


#### Sampla

<details>

<summary>Cruach chothrománach cnaipí a athchóiríonn í féin bunaithe ar bhraiteoirí áitíochta</summary>

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

## Cnaipe

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Tá an cárta seo an-ildánach. Is féidir é a úsáid mar **lasc**, mar **shleamhnán**, mar **staid** nó mar chnaipe **ainm/téacs**.

> [!TIP]
> ### Cad iad na difríochtaí idir na cineálacha cnaipe ar fad?
>
> - **Cnaipe lasc:** Is é seo an cineál cnaipe réamhshocraithe. De réir réamhshocraithe, scoránaíonn sé eintiteas agus athraíonn dath a chúlra de réir staid an eintitis nó dath an tsolais. Is féidir leat a ghníomh a athrú sa rannán **Tap action on card**.
>
> - **Cnaipe sleamhnáin:** Ligeann an cineál cnaipe seo duit eintitis a bhfuil raonta inchoigeartaithe acu a rialú. Tá sé oiriúnach go háirithe do sholas a mhaolú, agus feileann dath a líonta do dhath an tsolais. Is féidir leat é a úsáid freisin chun luachanna a thaispeáint, amhail leibhéal cadhnra.
>   Eintitis a dtacaítear leo do shleamhnáin:
>   - Solas (gile)
>   - Seinnteoir meán (airde fuaime)
>   - Clúdach (suíomh)
>   - Gaothrán (céatadán)
>   - Aeráid (teocht)
>   - Uimhir ionchuir agus uimhir (luach)
>   - Braiteoir cadhnra (céatadán, léamh amháin)
>
>   Is féidir leat freisin eintiteas ar bith a bhfuil staid uimhriúil aige a úsáid trí scagaire an eintitis a dhíchumasú in **Slider settings**, agus ansin na luachanna `min` agus `max` a shocrú. Is léamh amháin an rogha seo.
>
> - **Cnaipe staide:** Foirfe chun faisnéis ó bhraiteoir nó ó eintiteas ar bith a thaispeáint. Nuair a bhrúnn tú air, taispeánfaidh sé painéal "More info" an eintitis. Ní athraíonn a dhath cúlra.
>
> - **Cnaipe ainm/téacs:** An t-aon chineál cnaipe nach dteastaíonn eintiteas uaidh. Ligeann sé duit téacs gairid, ainm nó teideal a thaispeáint. Is féidir leat gníomhartha a chur leis freisin. Ní athraíonn a dhath cúlra.

### Roghanna an chnaipe

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Eintiteas atá le rialú |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Iompar do chnaipe |
| `name` | string | Optional | Any string | Ainm do do chnaipe, mura sonraítear é taispeánfar ainm an eintitis |
| `icon` | string | Optional | Any `mdi:` icon | Deilbhín do do chnaipe, mura sonraítear é taispeánfar deilbhín an eintitis nó an `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Tabhair tosaíocht don deilbhín seachas don `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **For lights only.** Úsáid dath aicinte an téama seachas dath an tsolais.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Taispeáin nó folaigh staid do `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an t-ainm |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an deilbhín |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar athraíodh do `entity` go deireanach |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar nuashonraíodh do `entity` go deireanach |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Taispeáin airí de do `entity` faoina `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | An t-airí atá le taispeáint (m.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lig don téacs scrollú nuair a shárálann an t-ábhar méid a choimeádáin |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Ceadaíonn sé na gníomhartha réamhshocraithe a athrú nuair a chliceáiltear ar an gcnaipe. |
| `tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil an deilbhín, mura sonraítear é úsáidfear `more-info` |
| `double_tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil dhúbailte an deilbhín, mura sonraítear é úsáidfear `none` |
| `hold_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar choinneáil síos an deilbhín, mura sonraítear é úsáidfear `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stíle an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Optional | Any number | Líon na sraitheanna (airde) (m.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#fochnaipí) | Cuir cnaipí saincheaptha leis atá socraithe ar dheis |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Príomhdhath cúlra do na heilimintí a dtacaítear leo sa chnaipe |
| `--bubble-button-border-radius` | `px` | Ga cúinne don chnaipe |
| `--bubble-button-icon-border-radius` | `px` | Ga cúinne do choimeádán dheilbhín an chnaipe |
| `--bubble-button-icon-background-color` | `color` | Dath cúlra do choimeádán dheilbhín an chnaipe |
| `--bubble-light-white-color` | `color` | Cuir in ionad an dath bán réamhshocraithe ar chnaipí/sleamhnáin solais |
| `--bubble-light-color` | `color` | Cuir in ionad dath na gcnaipí/sleamhnán solais (fiú soilse RGB) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth boscaí don chnaipe |

</details>

Níl na roghanna seo ar fáil ach amháin nuair a shocraítear `button_type` go `slider`.

<details>

<summary><b>Roghanna an tsleamhnáin (YAML + tuairiscí)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Luach íosta an tsleamhnáin. Le haghaidh sleamhnán saincheaptha.                                                    |
| `max_value`             | number  | Optional                        | Luach uasta an tsleamhnáin. Le haghaidh sleamhnán saincheaptha.                                                    |
| `step`                  | number  | Optional                        | Luach na céime don sleamhnán.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Cumasaigh iompar an tsean-sleamhnáin, ina mbrúnn tú chun an sleamhnán a ghníomhachtú in ionad é a choinneáil síos.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Nuashonraigh an luach i gcoibhneas leis an luach tosaigh, seachas leis an bpointe tadhaill tosaigh.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Déan an sleamhnán léamh amháin. Cumasaithe go huathoibríoch do roinnt eintiteas amhail braiteoirí.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Nuashonraítear staid an eintitis fad is atá tú ag sleamhnú. **Ní mholtar an ghné seo do gach eintiteas.**        |
| `slider_fill_orientation` | string | Optional | `left` (default), `right`, `top`, `bottom` | Athraigh treo líonta an tsleamhnáin |
| `slider_value_position` | string | Optional | `right` (default), `left`, `center`, `hidden` | Suíomh thaispeáint an luacha |
| `invert_slider_value` | boolean | Optional (`false` default) | Inbhéartaigh treo an tsleamhnáin (is ionann líonadh 100% agus an t-íosluach). Níl sé ar fáil do shleamhnáin datha. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **For lights only.** Roghnaigh mód an tsleamhnáin |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **For covers only.** Roghnaigh mód an tsleamhnáin (suíomh nó fiar) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **For lights only (Hue mode).** Fórsáil an sáithiú agus tú ag coigeartú na Lí |
| `hue_force_saturation_value` | number | Optional (`100` default) | **For lights only (Hue mode).** Luach fórsáilte an tsáithithe (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **For lights only (Brightness mode).** Úsáid dath aicinte an téama seachas dath an tsolais |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **For lights only.** Ligeann sé don sleamhnán 0% a bhaint amach, rud a mhúchann an solas. Níl sé ar fáil le `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **For lights only.** Cumasaigh aistrithe míne gile do sholais a dtacaítear leo.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **For lights only.** Am an aistrithe i milleasoicindí. Teastaíonn `light_transition: true` uaidh.            |

</details>

#### Samplaí

<details>

<summary>Cnaipe sleamhnáin ar féidir leis gile solais a rialú</summary>

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

<summary>Cnaipe le tuilleadh roghanna</summary>

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

## Seinnteoir meán

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ligeann an cárta seo duit eintiteas seinnteora meán a rialú.

### Roghanna an tseinnteora meán

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | An seinnteoir meán atá le rialú |
| `name` | string | Optional | Any string | Ainm do do sheinnteoir meán, mura sonraítear é taispeánfar ainm an eintitis |
| `icon` | string | Optional | Any `mdi:` icon | Deilbhín do do sheinnteoir meán, mura sonraítear é taispeánfar deilbhín an eintitis nó an `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Tabhair tosaíocht don deilbhín seachas don `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Taispeáin nó folaigh staid do `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an t-ainm |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an deilbhín |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar athraíodh do `entity` go deireanach |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar nuashonraíodh do `entity` go deireanach |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Taispeáin airí de do `entity` faoina `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | An t-airí atá le taispeáint (m.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lig don téacs scrollú nuair a shárálann an t-ábhar méid a choimeádáin |
| `min_volume` | number | Optional | Any number | Luach íosta shleamhnán na hairde fuaime. |
| `max_volume` | number | Optional | Any number | Luach uasta shleamhnán na hairde fuaime. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Úsáid clúdach meán doiléirithe mar chúlra an chárta. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Ceadaíonn sé na gníomhartha réamhshocraithe a athrú nuair a chliceáiltear ar an gcnaipe. |
| `tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil an deilbhín, mura sonraítear é úsáidfear `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil dhúbailte an deilbhín, mura sonraítear é úsáidfear `none`. |
| `hold_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar choinneáil síos an deilbhín, mura sonraítear é úsáidfear `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Bog cnaipí gnímh an chlúdaigh go dtí an bun (seasta) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Déan cnaipí gnímh an bhuin a leathnú go leithead iomlán (réamhshocrú: `true` nuair is é an bun an suíomh) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Ailíniú chnaipí gnímh an bhuin nuair nach bhfuil siad ar leithead iomlán |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stíle an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Optional | Any number | Líon na sraitheanna (airde) (m.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#fochnaipí) | Cuir cnaipí saincheaptha leis atá socraithe ar dheis |
| `hide` | object | Optional | See below | Folaigh cnaipí ón gcárta |

#### Roghanna folaithe

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Folaigh an cnaipe seinm/sos |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Folaigh an cnaipe airde fuaime |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Folaigh an cnaipe roimhe seo |
| `next_button` | boolean | Optional | `true` or `false` (default) | Folaigh an chéad chnaipe eile |
| `power_button` | boolean | Optional | `true` or `false` (default) | Folaigh an cnaipe cumhachta |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Príomhdhath cúlra don seinnteoir meán |
| `--bubble-media-player-border-radius` | `px` | Ga cúinne don seinnteoir meán |
| `--bubble-media-player-buttons-border-radius` | `px` | Ga cúinne do chnaipí an tseinnteora meán |
| `--bubble-media-player-slider-background-color` | `color` | Dath cúlra do shleamhnán na hairde fuaime |
| `--bubble-media-player-icon-border-radius` | `px` | Ga cúinne do choimeádán dheilbhín an tseinnteora meán |
| `--bubble-media-player-icon-background-color` | `color` | Dath cúlra do choimeádán dheilbhín an tseinnteora meán |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth boscaí don seinnteoir meán |

</details>


#### Samplaí

<details>

<summary>Seinnteoir meán leis na roghanna go léir</summary>

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

## Clúdach

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ligeann an cárta seo duit d'eintitis `cover` a rialú.

### Roghanna an chlúdaigh

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Clúdach atá le rialú |
| `name` | string | Optional | Any string | Ainm do do chlúdach, mura sonraítear é taispeánfar ainm an eintitis |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Tabhair tosaíocht don deilbhín seachas don `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Taispeáin nó folaigh staid do `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an t-ainm |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an deilbhín |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar athraíodh do `entity` go deireanach |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar nuashonraíodh do `entity` go deireanach |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Taispeáin airí de do `entity` faoina `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | An t-airí atá le taispeáint (m.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lig don téacs scrollú nuair a shárálann an t-ábhar méid a choimeádáin |
| `icon_open` | string | Optional | Any `mdi:` icon | Deilbhín do do chlúdach oscailte, mura sonraítear é taispeánfar an deilbhín réamhshocraithe don chlúdach oscailte |
| `icon_close` | string | Optional | Any `mdi:` icon | Deilbhín do do chlúdach dúnta, mura sonraítear é taispeánfar an deilbhín réamhshocraithe don chlúdach dúnta |
| `icon_up` | string | Optional | Any `mdi:` icon | Deilbhín do chnaipe oscailte an chlúdaigh, mura sonraítear é taispeánfar an deilbhín réamhshocraithe don chlúdach oscailte |
| `icon_down` | string | Optional | Any `mdi:` icon | Deilbhín do chnaipe dúnta an chlúdaigh, mura sonraítear é taispeánfar an deilbhín réamhshocraithe don chlúdach dúnta |
| `open_service` | string | Optional | Any service or script | Seirbhís chun do chlúdach a oscailt, réamhshocraithe go `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Seirbhís chun do chlúdach a stopadh, réamhshocraithe go `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Seirbhís chun do chlúdach a dhúnadh, réamhshocraithe go `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Suíomh chnaipí rialaithe an fhiaraithe (ní thaispeántar iad ach amháin má thacaíonn an clúdach le fiarú) |
| `open_tilt_service` | string | Optional | Any service or script | Seirbhís chun an fiarú a oscailt, réamhshocraithe go `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Seirbhís chun an fiarú a dhúnadh, réamhshocraithe go `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Ceadaíonn sé na gníomhartha réamhshocraithe a athrú nuair a chliceáiltear ar an gcnaipe. |
| `tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil an deilbhín, mura sonraítear é úsáidfear `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil dhúbailte an deilbhín, mura sonraítear é úsáidfear `none`. |
| `hold_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar choinneáil síos an deilbhín, mura sonraítear é úsáidfear `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Bog na rialtáin mheáin go dtí an bun (seasta) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Déan na rialtáin bhuin a leathnú go leithead iomlán (réamhshocrú: `true` nuair is é an bun an suíomh) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Ailíniú na rialtán buin nuair nach bhfuil siad ar leithead iomlán |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stíle an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Optional | Any number | Líon na sraitheanna (airde) (m.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#fochnaipí) | Cuir cnaipí saincheaptha leis atá socraithe ar dheis |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Príomhdhath cúlra do na heilimintí a dtacaítear leo sa chárta clúdaigh |
| `--bubble-cover-border-radius` | `px` | Ga cúinne don chárta clúdaigh |
| `--bubble-cover-icon-border-radius` | `px` | Ga cúinne do choimeádán dheilbhín an chárta clúdaigh |
| `--bubble-cover-icon-background-color` | `color` | Dath cúlra do choimeádán dheilbhín an chárta clúdaigh |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth boscaí don chárta clúdaigh |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth boscaí do na cnaipí sa chárta clúdaigh |

</details>


#### Sampla

<details>

<summary>Cárta ar féidir leis scáileán rollta a rialú</summary>

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

## Roghnú

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ligeann an cárta seo duit roghchlár anuas a chur le d'eintitis `input_select` / `select`. Tacaíonn an cárta seo freisin leis na fochnaipí agus le gnéithe coitianta Bubble Card ar fad.

> [!TIP]
> Is féidir leat fochnaipí roghnaithe a bheith agat freisin más mian leat, tá an ghné seo ar fáil i ngach cárta a dtacaítear leis na fochnaipí ann.

### Roghanna roghnaithe

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Eintiteas atá le rialú |
| `name` | string | Optional | Any string | Ainm do do roghnú, mura sonraítear é taispeánfar ainm an eintitis |
| `icon` | string | Optional | Any `mdi:` icon | Deilbhín do do roghnú, mura sonraítear é taispeánfar deilbhín an eintitis nó an `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Tabhair tosaíocht don deilbhín seachas don `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Taispeáin nó folaigh staid do `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an t-ainm |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Taispeáin nó folaigh an deilbhín |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar athraíodh do `entity` go deireanach |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Taispeáin an t-am ar nuashonraíodh do `entity` go deireanach |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Taispeáin airí de do `entity` faoina `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | An t-airí atá le taispeáint (m.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lig don téacs scrollú nuair a shárálann an t-ábhar méid a choimeádáin |
| `tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil an deilbhín, mura sonraítear é úsáidfear `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil dhúbailte an deilbhín, mura sonraítear é úsáidfear `none`. |
| `hold_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar choinneáil síos an deilbhín, mura sonraítear é úsáidfear `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stíle an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Optional | Any number | Líon na sraitheanna (airde) (m.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#fochnaipí) | Cuir cnaipí saincheaptha leis atá socraithe ar dheis |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Príomhdhath cúlra do na heilimintí a dtacaítear leo sa chárta roghnaithe |
| `--bubble-select-background-color` | `color` | Dath cúlra don chárta roghnaithe |
| `--bubble-select-list-border-radius` | `px` | Ga cúinne don roghchlár anuas sa chárta |
| `--bubble-select-list-item-accent-color` | `color` | Dath aicinte don mhír roghnaithe |
| `--bubble-select-list-background-color` | `color` | Dath cúlra don roghchlár anuas sa chárta |
| `--bubble-select-list-width` | `px` | Leithead an roghchláir anuas sa chárta |
| `--bubble-select-arrow-background-color` | `color` | Dath cúlra don tsaighead anuas |
| `--bubble-select-button-border-radius` | `px` | Ga cúinne don chnaipe roghnaithe |
| `--bubble-select-border-radius` | `px` | Ga cúinne don chárta roghnaithe |
| `--bubble-select-icon-border-radius` | `px` | Ga cúinne do choimeádán dheilbhín an chárta roghnaithe |
| `--bubble-select-icon-background-color` | `color` | Dath cúlra do choimeádán dheilbhín an chárta roghnaithe |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth boscaí don chárta roghnaithe |

</details>


#### Samplaí

<details>

<summary>Cárta roghnaithe le liosta radharcanna</summary>

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

## Aeráid

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ligeann an cárta seo duit d'eintitis `climate` a rialú.

> [!TIP]
> Is [fochnaipe](#fochnaipí) é an roghchlár roghnaithe móid, a chuirtear leis go huathoibríoch nuair a chruthaítear an cárta. Is féidir leat é a athrú nó a bhaint ansin de réir mar is mian leat.

### Roghanna aeráide

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | An t-eintiteas atá le rialú (m.sh. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Ainm saincheaptha don chárta. Mura sonraítear é, taispeánfar ainm an eintitis.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Deilbhín saincheaptha don chárta. Mura sonraítear é, úsáidfear deilbhín an eintitis nó an `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Tugann sé tosaíocht don deilbhín seachas don `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Taispeáin nó folaigh staid reatha an `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Taispeáin nó folaigh ainm an eintitis.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Taispeáin nó folaigh an deilbhín.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Folaíonn sé an rialtán íosteochta sprice má thacaíonn an `entity` leis.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Folaíonn sé an rialtán uasteochta sprice má thacaíonn an `entity` leis.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Cuireann sé dath cúlra seasta i bhfeidhm nuair atá an t-eintiteas aeráide ANN.                                              |
| `step` | number | Optional | Any number | Céim na teochta. |
| `min_temp` | number | Optional | Any number | An teocht íosta. |
| `max_temp` | number | Optional | Any number | An teocht uasta. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Ceadaíonn sé na gníomhartha réamhshocraithe a athrú nuair a chliceáiltear ar an gcnaipe. |
| `tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil an deilbhín, mura sonraítear é úsáidfear `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil dhúbailte an deilbhín, mura sonraítear é úsáidfear `none`. |
| `hold_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar choinneáil síos an deilbhín, mura sonraítear é úsáidfear `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Bog cnaipí gnímh na haeráide go dtí an bun (seasta) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Déan cnaipí gnímh an bhuin a leathnú go leithead iomlán (réamhshocrú: `true` nuair is é an bun an suíomh) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Ailíniú chnaipí gnímh an bhuin nuair nach bhfuil siad ar leithead iomlán |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stíle an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Optional | Any number | Líon na sraitheanna (airde) (m.sh. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#fochnaipí)                | Cuireann sé cnaipí saincheaptha leis atá socraithe ar dheis. Úsáideach do roghchlár roghnaithe móid aeráide.                                  |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Príomhdhath cúlra do na heilimintí a dtacaítear leo sa chárta aeráide |
| `--bubble-climate-border-radius` | `px` | Ga cúinne do na heilimintí a dtacaítear leo sa chárta aeráide |
| `--bubble-climate-button-background-color` | `color` | Dath cúlra do chnaipí an chárta aeráide |
| `--bubble-climate-icon-border-radius` | `px` | Ga cúinne do choimeádán dheilbhín an chárta aeráide |
| `--bubble-state-climate-fan-only-color` | `color` | Dath forleagain don staid gaothrán amháin |
| `--bubble-state-climate-dry-color` | `color` | Dath forleagain don staid triomaithe |
| `--bubble-state-climate-cool-color` | `color` | Dath forleagain don staid fuaraithe |
| `--bubble-state-climate-heat-color` | `color` | Dath forleagain don staid téimh |
| `--bubble-state-climate-auto-color` | `color` | Dath forleagain don staid uathoibríoch |
| `--bubble-state-climate-heat-cool-color` | `color` | Dath forleagain don staid téamh-fuaraithe |
| `--bubble-climate-accent-color` | `color` | Dath aicinte don chárta aeráide |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth boscaí do choimeádán na haeráide. |

</details>


#### Samplaí

<details>

<summary>Cárta aeráide le roghchlár anuas de mhóid HVAC</summary>

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

## Féilire

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ligeann an cárta seo duit d'eintitis féilire a thaispeáint. Is féidir a ábhar a scrollú, mar sin is furasta imeachtaí atá le teacht a bhrabhsáil.

### Roghanna féilire

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Líon na laethanta féilire a bhfaighfear imeachtaí ina leith, ón am seo go deireadh an Nú lá (réamhshocrú: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | An t-eintiteas atá le rialú (m.sh. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | An t-eintiteas féilire atá le taispeáint                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Dath saincheaptha don sliseog féilire. Mura sonraítear é, roghnófar dath go huathoibríoch |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Líon na laethanta féilire a bhfaighfear imeachtaí ina leith, ón am seo go deireadh an Nú lá (réamhshocrú: 7) |
| `limit`             | number  | Optional     | A number                                        | Líon na n-imeachtaí a thaispeánfar ar an gcárta                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Taispeáin nó folaigh an t-am deiridh d'imeachtaí                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Taispeáin nó folaigh barra dul chun cinn an imeachta                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Taispeáin nó folaigh imeachtaí atá ar siúl faoi láthair                                                 |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Lig don téacs scrollú nuair a shárálann an t-ábhar méid a choimeádáin |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Ceadaíonn sé gníomhartha a chur le cliceáil imeachta. |
| `tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil lae, mura sonraítear é úsáidfear `none`. |
| `double_tap_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar chliceáil dhúbailte lae, mura sonraítear é úsáidfear `none`. |
| `hold_action` | object | Optional | See [actions](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh ar choinneáil síos lae, mura sonraítear é úsáidfear `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stíle an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Optional | Any number | Líon na sraitheanna (airde) (m.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#fochnaipí) | Cuir cnaipí saincheaptha leis atá socraithe ar dheis |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Príomhdhath cúlra do na heilimintí a dtacaítear leo sa chárta féilire  |
| `--bubble-calendar-border-radius`         | `px`           | Ga cúinne do na heilimintí a dtacaítear leo sa chárta féilire |
| `--bubble-calendar-height`                | `px`           | Airde an chárta féilire                                        |

</details>

#### Samplaí

<details>

<summary>Cárta féilire le líon teoranta imeachtaí</summary>

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

<summary>Cárta féilire le ham deiridh agus barra dul chun cinn</summary>

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


## Deighilteoir

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Is deighilteoir simplí é an cárta seo chun do phreabfhuinneog a roinnt ina catagóirí / rannáin, m.sh. Soilse, Gléasanna, Clúdaigh, Socruithe, Uathoibriúcháin...

### Roghanna an deighilteora

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Ainm | Cineál | Riachtanas | Roghanna a dtacaítear leo | Cur síos |
| --- | --- | --- | --- | --- |
| `name` | string | Roghnach ach molta | Aon teaghrán | Ainm do do dheighilteoir |
| `icon` | string | Roghnach ach molta | Aon deilbhín `mdi:` | Deilbhín do do dheighilteoir |
| `card_layout` | string | Roghnach | `normal` (réamhshocrú mura bhfuil i radharc rannán), `large` (réamhshocrú má tá i radharc rannán), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stílithe an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Roghnach | Aon uimhir | Líon na sraitheanna (airde) (m.sh. `2`) |
| `sub_button` | object | Roghnach | Féach [fochnaipí](#fochnaipí) | Cuir cnaipí saincheaptha leis atá socraithe ar dheis |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Athróg | Luach a bhfuiltear ag súil leis | Cur síos |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Dath cúlra na líne sa deighilteoir |

</details>

#### Sampla

<details>

<summary>Deighilteoir/roinnteoir do rannán "Clúdaigh"</summary>

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

## Colún folamh

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Tá an cárta seo anseo chun colún folamh a líonadh. Tá sé úsáideach má tá `horizontal-stack` agat i do phreabfhuinneog nach bhfuil ann ach cárta amháin. Bí ag féachaint ar an gcúinne thíos ar dheis den ghrianghraf seo chun é a (neamh)fheiceáil.

### Roghanna an cholúin fholaimh

Níl aon roghanna ag an gcárta seo agus ní thacaíonn sé le [stíliú](#stíliú), cé go dtacaíonn sé le roghanna leagan amach do rannáin HA.

#### Sampla

<details>

<summary>Colún folamh i gcruach chothrománach</summary>

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

## Fochnaipí amháin

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Tá an cárta seo tiomnaithe d'fhochnaipí amháin. Tá sé foirfe le haghaidh roghchláir, gníomhartha tapa, sceallóga faisnéise, nó buntásc socraithe ag bun an leathanaigh.

> [!IMPORTANT]  
> Baineann an cárta seo úsáid as an scéimre nua fochnaipí. Bain úsáid as `sub_button.bottom` chun do chnaipí a shainiú. Déantar neamhaird den rannán `sub_button.main`.

### Roghanna na bhfochnaipí amháin

<details>

<summary><b>Roghanna (YAML + tuairiscí)</b></summary>

| Ainm | Cineál | Riachtanas | Roghanna a dtacaítear leo | Cur síos |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Riachtanach** | Féach [fochnaipí](#fochnaipí) | Sainigh do chuid fochnaipí ag baint úsáide as an rannán `bottom` |
| `hide_main_background` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Bain cúlra an chárta |
| `footer_mode` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Socraigh an cárta ag bun an leathanaigh |
| `footer_full_width` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Déan an buntásc a leathnú go leithead iomlán (100%) |
| `footer_width` | number | Roghnach | Aon uimhir | Leithead an bhuntáisc i bpicteilíní nuair is `false` é `footer_full_width` |
| `footer_bottom_offset` | number | Roghnach | Aon uimhir | Fad ó bhun an leathanaigh i bpicteilíní (réamhshocrú: `16`) |
| `card_layout` | string | Roghnach | `normal` (réamhshocrú mura bhfuil i radharc rannán), `large` (réamhshocrú má tá i radharc rannán), `large-2-rows`, `large-sub-buttons-grid` | Leagan amach stílithe an chárta, féach [leaganacha amach na gcártaí](#leaganacha-amach-na-gcártaí) |
| `rows` | number | Roghnach | Aon uimhir | Líon na sraitheanna (airde) (m.sh. `2`) |

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Athróg | Luach a bhfuiltear ag súil leis | Cur síos |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Leithead an bhuntáisc nuair is `false` é `footer_full_width` |
| `--bubble-footer-bottom` | `px` | Fritháireamh bun an bhuntáisc |
| `--bubble-footer-box-shadow` | féach [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Scáth bosca don soitheach buntáisc |

</details>

#### Samplaí

<details>

<summary>Sceallóga (mar atá sa ghrianghraf)</summary>

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

<summary>Roghchlár socraithe ag an mbun</summary>

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

## Fochnaipí

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

I ngach cárta a dtacaíonn leis an rogha sin, is féidir leat fochnaipí a chur leis chun do chuid cártaí a shaincheapadh fiú níos mó. Is féidir leat, mar shampla, cnaipe a chruthú a rialaíonn folúsghlantóir, cárta aimsire, nó beagnach rud ar bith is féidir leat a smaoineamh air. Tacaíonn na fochnaipí seo leis na gníomhartha tapála agus le formhór roghanna an chnaipe.

Tacaíonn fochnaipí anois le trí chineál: **Réamhshocraithe (cnaipe)**, **Sleamhnán**, agus **Anuas / Roghnú**. Is féidir leat cineálacha a mheascadh sa chárta céanna, fochnaipí a chur ag an mbarr nó ag an mbun, agus iad a eagrú i ngrúpaí do leaganacha amach níos casta.

#### Socrú agus grúpaí na bhfochnaipí

<details>

<summary><b>Struchtúr na bhfochnaipí (main / bottom + grúpaí)</b></summary>

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

**Nótaí:**
- Is dhá rannán neamhspleácha iad `main` agus `bottom`. Tá na fochnaipí `bottom` socraithe ag bun an chárta.
- Glacann `main_layout` agus `bottom_layout` le `inline` (réamhshocrú) nó `rows` chun na grúpaí a chruachadh go hingearach.
- Is oibiachtaí iad grúpaí le heagar `group` agus `buttons_layout` roghnach (`inline` nó `column`).
- Tá `justify_content` ar fáil do **ghrúpaí bottom amháin** (`start`, `center`, `end`, `fill`).
- Nuair atá fochnaipí bottom i láthair, aistríonn leagan amach an chárta go huathoibríoch go `large` mura socraíonn tú leagan amach eile go sainráite.
- Tacaítear fós le heagair `sub_button` oidhreachta agus caitear leo mar an rannán `main`.

</details>

### Roghanna na bhfochnaipí

<details>

<summary><b>Roghanna (YAML + cur síos)</b></summary>

| Ainm | Cineál | Riachtanas | Roghanna a dtacaítear leo | Cur síos |
| --- | --- | --- | --- | --- |
| `entity` | string | Roghnach | Aon aonán | Aonán le rialú |
| `name` | string | Roghnach | Aon teaghrán | Ainm do d'fhochnaipe, mura sainmhínítear é taispeánfar ainm an aonáin |
| `icon` | string | Roghnach | Aon deilbhín `mdi:` | Deilbhín do d'fhochnaipe, mura sainmhínítear é taispeánfar deilbhín nó pictiúr an aonáin |
| `force_icon` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Cuir an deilbhín i bhfeidhm go héigeantach fiú má tá pictiúr aonáin ar fáil |
| `sub_button_type` | string | Roghnach | `default`, `slider` nó `select` | Roghnaigh cineál na fochnaipe |
| `show_background` | boolean | Roghnach | `true` (réamhshocrú) nó `false` | Taispeáin cúlra do d'fhochnaipe, athróidh sé a dhath bunaithe ar staid d'aonáin |
| `state_background` | boolean | Roghnach | `true` (réamhshocrú) nó `false` | Bain úsáid as dath na staide nuair atá an t-aonán `on` |
| `light_background` | boolean | Roghnach | `true` (réamhshocrú) nó `false` | Bain úsáid as dath an tsolais don chúlra nuair atá sé ar fáil |
| `show_state` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Taispeáin nó folaigh staid d'aonáin |
| `show_name` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Taispeáin nó folaigh an t-ainm |
| `show_icon` | boolean | Roghnach | `true` (réamhshocrú) nó `false` | Taispeáin nó folaigh an deilbhín |
| `show_last_changed` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Taispeáin an t-am ar athraíodh d'aonán go deireanach |
| `show_last_updated` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Taispeáin an t-am ar nuashonraíodh d'aonán go deireanach |
| `show_attribute` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Taispeáin airí de d'aonán faoina `name` |
| `attribute` | string | Roghnach (riachtanach má tá `show_attribute` socraithe go `true`) | Airí de d'aonán | An t-airí atá le taispeáint (m.sh. `brightness`) |
| `select_attribute` | string | Roghnach | Liosta airíonna de d'aonán (féach na roghanna a dtacaítear leo thuas) | Osclóidh an liosta airíonna seo anuas má chliceáiltear air (m.sh. `effect_list`) |
| `show_arrow` | boolean | Roghnach | `true` (réamhshocrú) nó `false` | Taispeáin nó folaigh an tsaighead anuas do fhochnaipí roghnaithe |
| `scrolling_effect` | boolean | Roghnach | `true` (réamhshocrú) nó `false` | Ceadaigh don téacs scrollú nuair a sháraíonn an t-ábhar méid an choimeádáin |
| `tap_action` | object | Roghnach | Féach [gníomhartha](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh nuair a chliceáiltear ar an bhfochnaipe, mura sainmhínítear é bainfear úsáid as `more-info`. |
| `double_tap_action` | object | Roghnach | Féach [gníomhartha](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh nuair a chliceáiltear faoi dhó ar an bhfochnaipe, mura sainmhínítear é bainfear úsáid as `none`. |
| `hold_action` | object | Roghnach | Féach [gníomhartha](#gníomhartha-tapála-tapála-dúbailte-agus-coinneála) | Sainigh cineál an ghnímh nuair a choinnítear síos ar an bhfochnaipe, mura sainmhínítear é bainfear úsáid as `more-info`. |
| `fill_width` | boolean | Roghnach | `true` nó `false` | Líon an leithead atá ar fáil (réamhshocrú: `false` do main, `true` do bottom) |
| `width` | number nó string | Roghnach | Aon uimhir nó fad CSS | Leithead saincheaptha (`px` don rannán main, `%` don rannán bottom mar réamhshocrú) |
| `custom_height` | number | Roghnach | Aon uimhir | Airde shaincheaptha i bpicteilíní |
| `content_layout` | string | Roghnach | `icon-left` (réamhshocrú), `icon-top`, `icon-bottom`, `icon-right` | Socrú an deilbhín laistigh den fhochnaipe |
| `always_visible` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | **Sleamhnán amháin.** Taispeáin an sleamhnán i gcónaí in ionad é a oscailt ar thapáil |
| `show_button_info` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | **Sleamhnán amháin.** Taispeáin deilbhín/ainm/staid nuair atá `always_visible` cumasaithe |
| `visibility` | object nó list | Roghnach | Féach [coinníollacha](https://www.home-assistant.io/docs/scripts/conditions/) | Taispeáin nó folaigh an fhochnaipe bunaithe ar choinníollacha |
| `hide_when_parent_unavailable` | boolean | Roghnach | `true` nó `false` (réamhshocrú) | Folaigh an fhochnaipe má tá aonán an chárta tuismitheora neamh-ar-fáil |

</details>

<details>

<summary><b>Roghanna sleamhnáin na bhfochnaipí (mar an gcéanna le sleamhnáin cnaipe)</b></summary>

<br>

Tacaíonn fochnaipí sleamhnáin leis na roghanna sleamhnáin céanna le sleamhnáin cnaipe, lena n-áirítear:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Athróga CSS (féach <a href="#stíliú">Stíliú</a>)</b></summary>

| Athróg | Luach a bhfuiltear ag súil leis | Cur síos |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Ga chúinne do na fochnaipí |
| `--bubble-sub-button-background-color` | `color` | Dath cúlra do na fochnaipí |
| `--bubble-sub-slider-border-radius` | `px` | Ga chúinne d'fhochnaipí sleamhnáin |
| `--bubble-sub-slider-background-color` | `color` | Dath cúlra d'fhochnaipí sleamhnáin |
| `--bubble-sub-slider-height` | `px` | Airde d'fhochnaipí sleamhnáin atá i gcónaí infheicthe |
| `--bubble-sub-button-dark-text-color` | `color` | Dath téacs ar chúlraí geala fochnaipí |

</details>

#### Samplaí

<details>

<summary>Cnaipe le roinnt fochnaipí chun cárta folúsghlantóra a dhéanamh (mar atá sa ghrianghraf)</summary>

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

<summary>Sleamhnán cnaipe le fochnaipe a thaispeánann an gile agus ceann a scoránaíonn an solas (mar atá sa ghrianghraf)</summary>

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

<summary>Cnaipe a thaispeánann an teocht istigh agus amuigh mar aon leis an aimsir don lá inniu agus amárach (grianghraf san áireamh)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Mí-ádh domsa tá sé scamallach an t-am ar fad ach tá gach deilbhín ag athrú bunaithe ar an aimsir.

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

## Leaganacha amach na gcártaí

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Tacaíonn Bubble Card go hiomlán le radharc rannán Home Assistant, is féidir leat leagan amach an chárta a athrú chun an cárta a dhéanamh níos mó agus chun líon na gcolún nó na sraitheanna a ghlacann an cárta i do radharc rannán a athrú freisin (ar na cártaí a dtacaíonn leis an rogha sin amháin). Tacaítear leis na leaganacha amach seo freisin i ngach cineál radharc eile.

<details>

<summary><b>Leaganacha amach cártaí atá ar fáil</b></summary>

| Leagan amach | Cur síos |
| --- | --- |
| `normal` | An leagan amach gnáthach (nach bhfuil optamaithe don radharc rannán) |
| `large` | Leagan amach níos mó a athraíonn go dtí na sraitheanna roghnaithe sa radharc rannán (optamaithe don radharc rannán) |
| `large-2-rows` | Leagan amach níos mó le 2 shraith d'fhochnaipí a athraíonn go dtí na sraitheanna roghnaithe sa radharc rannán (optamaithe don radharc rannán) |
| `large-sub-buttons-grid` | Taispeánfaidh an leagan amach seo fochnaipí i ngreille, ní mór `rows` a shocrú go dtí `2` ar a laghad.

</details>

#### Samplaí

<details>

<summary>Cnaipe mór a thaispeánann staitisticí fuinnimh le 2 shraith d'fhochnaipí (grianghraf san áireamh)</summary>

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

<summary>Cnaipe mór le sraitheanna iolracha agus 12 fhochnaipe</summary>

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

## Gníomhartha tapála, tapála dúbailte agus coinneála

Is féidir leat freisin gníomhartha réamhshocraithe Home Assistant a bhaint úsáid as, mar shampla gníomhartha tapála, gníomhartha tapála dúbailte agus gníomhartha coinneála ar na cártaí a dtacaíonn leis an rogha seo. Mar shampla, ceadaíonn sé seo duit an fhuinneog "tuilleadh eolais" a thaispeáint trí choinneáil síos ar dheilbhín cnaipe nó trí sheirbhís a rith nuair a bhrúitear ar fhochnaipe.

**Nóta: Nuair atá `double_tap_action` cumraithe, beidh moill 200ms ag an ngnáth-`tap_action` chun tapáil dhúbailte a bhrath.
Mura bhfuil an mhoill seo inmhianaithe, socraigh `double_tap_action` go `none` chun láimhseáil na tapála dúbailte a dhíchumasú.**

### Roghanna an ghnímh

<details>

<summary><b>Roghanna (YAML + cur síos)</b></summary>

| Ainm | Cineál | Roghanna a dtacaítear leo | Cur síos |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Gníomh atá le déanamh |
| `target` | object |  | Ní oibríonn sé ach le `call-service`. Leanann sé [comhréir Home Assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Aon chosán de do dhaisbord | Cosán le nascleanúint chuige (m.sh. `'#kitchen'` chun preabfhuinneog a oscailt) nuair atá an gníomh sainmhínithe mar navigate |
| `url_path` | string | Aon nasc | URL le hoscailt ar chliceáil (m.sh. `https://www.google.com`) nuair is `url` é an gníomh |
| `service` | string | Aon tseirbhís | Seirbhís le glaoch uirthi (m.sh. `media_player.media_play_pause`) nuair atá `action` sainmhínithe mar `call-service` |
| `data` nó `service_data` | object | Aon sonraí seirbhíse | Sonraí seirbhíse le cur san áireamh (m.sh. `entity_id: media_player.kitchen`) nuair atá `action` sainmhínithe mar `call-service` |
| `confirmation` | object | Féach [deimhniú](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Taispeáin preabfhuinneog dheimhnithe (ní ceann de chuid Bubble Card), sáraíonn sé an oibiacht réamhshocraithe `confirmation` |

</details>

#### Sampla

<details>

<summary>Cnaipe chun preabfhuinneog a oscailt</summary>

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

## Stíliú

Is féidir leat stíleanna saincheaptha a chur leis chun CSS gach cárta a mhodhnú **gan card-mod a úsáid** ar cheithre bhealach:

- San eagarthóir, téigh chuig an gcárta ar mian leat a mhodhnú, ansin téigh chuig _Styling options > Custom styles & JS templates_, agus cuir do stíleanna saincheaptha leis (féach na leideanna agus na samplaí thíos).
- San eagarthóir (nó i [YAML](#modúil)), téigh chuig an gcárta ar mian leat a mhodhnú, ansin téigh chuig _Modules_, ansin cruthaigh modúl nua (beidh sé ar fáil do gach cárta), nó téigh chuig an **Module Store** chun aon Mhodúl atá ar fáil a shuiteáil (tuilleadh sonraí faoi mhodúil le fáil [thíos](#modúil)).
- I gcomhad [téama](https://www.home-assistant.io/integrations/frontend/#defining-themes) trí athróga CSS a chur leis in YAML (tá siad seo ar fáil i ndoiciméadú gach cárta thuas). Ligeann sé seo athruithe uilíocha a dhéanamh.

  <details>
  
  <summary>Sampla</a></summary>
  
  <br>

  Ná cóipeáil an líne `Bubble:`, is é seo ainm an téama a úsáideann tú. Ní mór duit an `--` a bhaint de na hathróga freisin.

  Ní mór duit an gníomh [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) a rith chun an téama a athnuachan tar éis aon mhodhnaithe.

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
  
- In YAML by adding `styles: |` followed by your custom styles (check the tips and examples below).

> [!TIP]  
> **Chun tuiscint a fháil ar na haicmí stíle is féidir a mhodhnú**, is féidir leat súil a chaitheamh ar an bhfillteán [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) sa stór seo. I bhfillteán gach cárta, gheobhaidh tú comhad darb ainm `styles.css`. Tá gach stíl feidhmithe iontu seo. Ligeann sé seo i bhfad níos mó féidearthachtaí ná athróga CSS, ach ní mór é a chur leis go haonair do gach cárta.
> 
> Is féidir leat go leor [samplaí ón bpobal](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) a fháil freisin, nó cuid acu ó [fhóram Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) trí bheagán cuardaigh a dhéanamh.
>
> Tá an téama Bubble do Home Assistant (mar atá sna scáileáin ghrianghraif) le fáil [anseo](https://github.com/Clooos/Bubble).
>
> Beidh físeán teagaisc ar fáil go luath ar mo [chainéal YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Tabhair faoi deara go mb'fhéidir go mbeidh ort `!important;` a chur le roinnt stíleanna CSS atá sainithe cheana féin (féach na samplaí thíos).

> [!TIP]  
> Is féidir fochnaipí a spriocdhíriú trí aicmí bunaithe ar ainm. Mar shampla, is féidir fochnaipe darb ainm "My sub-button" a stíliú le `.my-sub-button`. Nochtann fochnaipí sleamhnáin `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, srl. freisin.

#### Samplaí

<details>

<summary>Méid an chló a athrú d'aon Chárta Bubble</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Dath cúlra cnaipe amháin a athrú i gcruach chothrománach cnaipí</summary>

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

<summary>Dath cúlra cárta a athrú</summary>

<br>

Oibríonn an ceann seo ar gach cineál Cárta Bubble (seachas na preabfhuinneoga):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Déanann an ceann seo an rud céanna i gcárta cnaipe amháin (oibríonn sé don cheanntásc preabfhuinneoige): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Chun an dath a athrú nuair atá sé `on`, féach na teimpléid stíle thíos.

</details>

<details>

<summary>Dath sleamhnán cnaipe a athrú</summary>

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

<summary>Dath líne deighilteora a athrú</summary>

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

<summary>Dath deilbhín a athrú</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Do dheilbhín i gcruach chothrománach cnaipí.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Dath cúlra coimeádán deilbhín a athrú</summary>

<br>

Oibríonn an ceann seo ar gach cineál Cárta Bubble (seachas na preabfhuinneoga):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Déanann an ceann seo an rud céanna don cheanntásc preabfhuinneoige: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Méid na bhfochnaipí a athrú (foirfe don leagan amach mór)</summary>

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

<summary>Dath cúlra an dara fochnaipe a athrú</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Méid deilbhín a athrú</summary>

<br>

Don phríomhdheilbhín.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Do dheilbhíní na bhfochnaipí.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Pictiúr a úsáid seachas deilbhín i bhfochnaipe</summary>

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

Ná déan ach an pictiúr seo a uaslódáil i bhfillteán "pictures" (nó an t-ainm is mian leat) i bhfillteán "www" de Home Assistant.

</details>

<details>

<summary>Sampla casta: Sraith chothrománach fochnaipí a chruthú (scáileán grianghraif san áireamh)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Is aoibhinn liom an ceann seo, úsáidim é mar cheanntásc ar mo dhaisbord.

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

## Teimpléid

**Ní thacaíonn Bubble Card le teimpléid Jinja** ach is féidir le húsáideoirí ardleibhéil teimpléid a chur leis i JS go díreach ina [stíleanna saincheaptha](#stíliú). Mar shampla, ligeann sé seo duit deilbhín a athrú go dinimiciúil, na téacsanna nó dathanna eiliminte a athrú, eilimint a thaispeáint nó a fholú go coinníollach (cosúil le fochnaipe), nó nach mór aon rud eile bunaithe ar staid, ar aitreabúid agus níos mó.

> [!TIP]  
> Tuilleadh eolais faoi theimpléid JS [anseo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Is é mo chomhairle ná **súil a choinneáil i gcónaí ar chonsól do bhrabhsálaí** lena chinntiú go bhfuil gach rud ag obair i gceart.

> [!IMPORTANT]  
> **Ní mór aon teimpléad nach bhfuil ag modhnú airí CSS a chur ag an deireadh! Mar shampla, deilbhín, téacs nó aon eilimint a athrú.**

#### Athróga agus feidhmeanna atá ar fáil

<details>

<summary>Athróga</summary>

<br>

Tá rochtain agat ar na hathróga seo i bhformhór na gcártaí:

- Tabharfaidh `state` staid do `entity` shainithe ar ais.
  
- Tabharfaidh `entity` an eintiteas a shainigh tú, mar shampla `switch.test`, ar ais.
  
- Is féidir `icon` a úsáid mar seo chun an deilbhín a athrú `icon.setAttribute("icon", "mdi:lightbulb")`.

- Tabharfaidh `subButtonState[0]` staid do chéad fhochnaipe shainithe `entity` ar ais, is é `[0]` an chéad staid fochnaipe, `[1]` an dara ceann...
  
- Is féidir `subButtonIcon[0]` a úsáid mar seo chun deilbhín na chéad fhochnaipe a athrú `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, is é `[0]` an chéad deilbhín fochnaipe, `[1]` an dara ceann...
  
- Tabharfaidh `card` eilimint an chárta sa DOM ar ais.
  
- Is athróg ardleibhéil é `hass` a thugann i bhfad níos mó rialaithe duit, mar shampla is féidir leat staid `light.kitchen` a thabhairt ar ais mar seo `hass.states['light.kitchen'].state` nó aitreabúid mar seo `hass.states[entity].attributes.brightness`.

- Tabharfaidh `this` go leor faisnéise úsáideach faoi do shocrú agus do dhaisbord ar ais, ná húsáid é seo ach amháin má tá a fhios agat cad atá á dhéanamh agat.

</details>

<details>

<summary>Feidhmeanna</summary>

<br>

Tá rochtain agat ar gach feidhm dhomhanda JS, ach tá rochtain agat freisin ar:

- Is féidir `getWeatherIcon` a úsáid chun deilbhín aimsire a thabhairt ar ais bunaithe ar staid a thugann an aimsir ar ais. Mar shampla, is féidir leat seo a dhéanamh `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` chun deilbhín na tríú fochnaipe a athrú go dtí deilbhín aimsire an lae inniu, is é `.forecast[1]?.condition` do amárach...

  Beidh ort braiteoir teimpléid a chruthú dó sin. Seo an méid is féidir leat a chur le do `configuration.yaml`:
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
- Is féidir `hass.formatEntityState(state)` a úsáid chun staid a aistriú (Is féidir é a úsáid freisin chun aonad staide a fháil, gan gá é a chur leis de láimh).
- Is féidir `hass.formatEntityAttributeValue(state, "attribute")` a úsáid chun aitreabúid a aistriú (Is féidir é a úsáid freisin chun aonad staide a fháil, gan gá é a chur leis de láimh).

</details>

#### Samplaí

Gheobhaidh tú go leor samplaí thíos, ach is féidir leat teimpléid an-chasta a fháil freisin ar mo [leathanach Patreon](https://www.patreon.com/c/Clooos), mar shampla ceann amháin (mo cheann is fearr) a ligeann suas le ceithre shuaitheantas coinníollacha a chur timpeall dheilbhíní an chárta. Is bealach iontach é freisin chun foghlaim faoi gach féidearthacht de stíleanna agus teimpléid saincheaptha Bubble Card!

<details>
<summary>Samplaí ó mo leathanach Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Suaitheantais dhealraitheach le Home Assistant a chur le haon chárta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Dáta agus am formáidithe a thaispeáint i ndeighilteoir gan aon eintiteas a úsáid</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Staid fochnaipe a thaispeáint ar dhá líne</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Lipéid agus deilbhíní laistigh d'fhochnaipe roghnaithe a shaincheapadh</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Preabfhuinneog buan meabhrúcháin a chur leis nach dtaispeántar ach nuair is gá</a>
</p>

<br>

</details>

<details>

<summary>Dath cúlra cnaipe a athrú a bhíonn dearg nuair atá sé <code>off</code> agus gorm nuair atá sé <code>on</code></summary>

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

<summary>Dath cúlra cnaipe a athrú bunaithe ar eintiteas don chruach chothrománach cnaipí</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Fochnaipe a thaispeáint/a fholú go coinníollach</summary>

<br>

Taispeánann an ceann seo an chéad fhochnaipe amháin nuair atá mo ghlantóir folúis greamaithe.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Taispeánann an ceann seo fochnaipe nuair atá an ceallraí faoi bhun 10%. Úsáideach le fochnaipe a thaispeánann "Ceallraí íseal".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Deilbhín nó deilbhín fochnaipe a athrú go coinníollach</summary>

<br>

Athraíonn an ceann seo deilbhín cnaipe ach amháin nuair atá glantóir folúis greamaithe.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Athraíonn an ceann seo deilbhín na chéad fhochnaipe ach amháin nuair atá glantóir folúis greamaithe.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Dath deilbhín nó deilbhín fochnaipe a athrú go coinníollach</summary>

<br>

Athraíonn an ceann seo dath deilbhín cnaipe bunaithe ar a staid.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Athraíonn an ceann seo dath deilbhín fochnaipe bunaithe ar a staid. Is í `.bubble-sub-button-1` an chéad fhochnaipe, cuir `1` in ionad má tá tú ag iarraidh deilbhín fochnaipe eile a athrú.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Deilbhín ghaothráin a bheochan go coinníollach</summary>

<br>

Rothlaíonn an ceann seo deilbhín cnaipe nuair atá gaothrán `on`.
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

<summary>Téacsanna a theimpléadú (mar ainm nó staid)</summary>

<br>

Athraíonn an ceann seo ainm/staid cnaipe le "Tá sé grianmhar faoi láthair" ag brath ar do chuid aimsire.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
nó nuair a chuirtear i bhfeidhm é d'fhochnaipí:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Más mian leat an staid a theimpléadú (`.bubble-state`) ná scoránaigh `show_state: true`, ach scoránaigh `show_attribute: true` gan aon aitreabúid.

</details>

<details>

<summary>Sampla casta: Dath fochnaipe a athrú nuair atá preabfhuinneog oscailte</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Sampla casta: Ainm deighilteora a theimpléadú bunaithe ar staid aistrithe go dtí do theanga</summary>

<br>

Is féidir leat `hass.formatEntityState(state)` a úsáid chun staid a aistriú agus `hass.formatEntityAttributeValue(state, "attribute")` chun aitreabúid a aistriú.

Athraíonn an ceann seo an t-ainm agus an deilbhín bunaithe ar an aimsir, ciallaíonn "Nuageux" "Scamallach" i bhFraincis.

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

## Modúil

Is gné chumhachtach iad Modúil a ligeann duit do stíleanna agus teimpléid shaincheaptha a shábháil, a athúsáid agus a roinnt ar fud do chuid Cártaí Bubble go léir. In ionad an cód céanna a chóipeáil agus a ghreamú i gcártaí iolracha, is féidir leat Modúl a chruthú agus é a chur i bhfeidhm cibé áit is gá duit é. Fágann sé seo go bhfuil sé i bhfad níos éasca agus níos éifeachtaí cuma agus mothú do dhaisbord a bhainistiú.

Ach tá an ghné seo i bhfad níos cumhachtaí ná sin, ligeann sí duit gnéithe iarbhír a chur leis tú féin in eagarthóir Bubble Card, ag baint úsáide as gach rogha réamhshocraithe [foirm Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Feabhsaíodh an roghnóir oibiachta chun athruithe beo a thaispeáint agus chun tacú i gceart le hairíonna.

Is féidir leat brabhsáil freisin sa **Module Store** chun [modúil a chruthaigh an pobal](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) a aimsiú agus a shuiteáil, nó do chruthúcháin féin a roinnt!

> [!TIP]
> Oibríonn cód Modúil go díreach ar an mbealach céanna leis an gcód in earnáil `styles` cárta. Tá na hathróga agus na feidhmeanna céanna ón rannóg [Teimpléid](#teimpléid) ar fáil.

<br>

### Socrú Tosaigh

> [!IMPORTANT]
> Ag tosú le v3.1.0, is é Bubble Card Tools an t-inneall stórála molta do mhodúil. Oibríonn an modh braiteora teimpléid oidhreachta fós do shocruithe atá ann cheana, ach tacaítear níos fearr le modúil nua agus le gnéithe an Module Store trí Bubble Card Tools.

Cumasaíonn an comhtháthú Bubble Card Tools an tEagarthóir Modúl agus an Module Store, agus stórálann sé modúil mar chomhaid YAML aonair. Aistrítear modúil atá ann cheana go huathoibríoch.

Mínítear na céimeanna suiteála agus cumraíochta anseo:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### An tEagarthóir Modúl

Is féidir leat an tEagarthóir Modúl a rochtain ó shocruithe aon chárta, faoin rannóg **Modúil**. Cuireann an t-eagarthóir dhá phríomhchluaisín ar fáil:

#### Cluaisín My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Taispeánann an cluaisín seo do mhodúil suiteáilte go léir agus ligeann sé duit:

- Modúil atá ann cheana a **chur i bhfeidhm** ar an gcárta reatha
- Modúl nua a **chruthú** ó thús
- Modúil atá ann cheana a **chur in eagar** le réamhamharc beo
- Modúil nach bhfuil ag teastáil uait a thuilleadh a **scriosadh**
- Modúil a **chuardach** agus a **shórtáil** (aibítreach, is déanaí, gníomhach ar dtús)
- **Stádas domhanda a shocrú** chun modúl a chur i bhfeidhm ar gach cárta go huathoibríoch
- Modúil a **Iompórtáil/Easpórtáil** le haghaidh cúltaca nó comhroinnte

#### Cluaisín Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Taispeánfaidh an cluaisín seo [na modúil go léir atá ar fáil ón bpobal](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), agus ligeann sé duit:

- **Brabhsáil** trí gach modúl a chruthaigh an pobal
- Modúil a **chuardach** agus a scagadh de réir ainm, comhoiriúnachta nó eochairfhocal
- Modúil a **shuiteáil** le cliceáil amháin
- Modúil suiteáilte a **nuashonrú** nuair a bhíonn leaganacha nua ar fáil

> [!TIP]
> San eagarthóir, is féidir leat modúil neamhthacaithe a chumasú chun tástáil a dhéanamh ar mhodúil nach bhfuil marcáilte fós mar chomhoiriúnach le cineál cárta ar leith.

<br>

### Conas modúil a úsáid

#### Modúl nua a chruthú

<details>

<summary>Cliceáil chun leathnú</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Téigh chuig eagarthóir aon chárta agus leathnaigh an rannóg **Modúil**.
2. Cliceáil ar **Create new module**.
3. Líon isteach faisnéis an mhodúil.
4. Scríobh do chód teimpléid CSS agus/nó JavaScript san eagarthóir **Code**.
5. (Roghnach) Cruthaigh comhéadan cumraíochta saincheaptha sa rannóg **Editor** (cosúil leis an roghnóir dathanna sa scáileán grianghraif thuas, tá doiciméadú iomlán le fáil [anseo](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Cliceáil **Save**.

Tá do mhodúl ar fáil anois le húsáid ar aon cheann de do chuid cártaí!

<br>

</details>

#### Modúl a chur i bhfeidhm ar chárta

<details>

<summary>Cliceáil chun leathnú</summary>

<br>

- **Tríd an eagarthóir:**

  - Téigh chuig eagarthóir an chárta ar mian leat an modúl a chur i bhfeidhm air.
  - Leathnaigh an rannóg **Modúil**.
  - Cliceáil ar an modúl ar mian leat a chur i bhfeidhm ón liosta.
  - Faoi "Apply to", cliceáil ar "This card". Tá an modúl gníomhach anois. Is féidir leat modúil iolracha a chur i bhfeidhm ar an gcárta céanna.

- **Trí YAML:**

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

#### Modúl a chur i bhfeidhm go domhanda

<details>

<summary>Cliceáil chun leathnú</summary>

<br>

Is féidir leat modúl a shocrú le cur i bhfeidhm go huathoibríoch ar gach Cárta Bubble:

**Níl sé seo ar fáil do mhodúil a bhfuil eagarthóir acu, ós rud é go dteastaíonn cumraíocht ar leith uathu sin le hoibriú.**

- **Tríd an eagarthóir:**

  - San eagarthóir Modúl, aimsigh do mhodúl sa chluaisín **My Modules**.
  - Scoránaigh an cnaipe **All cards** in aice le hainm an mhodúil.
  - Beidh an modúl curtha i bhfeidhm ar gach cárta go huathoibríoch anois.
 
- **Trí YAML:**

  I do chumraíocht YAML mhodúil (i `bubble-modules.yaml`), ná déan ach `is_global: true` a chur leis.

<br>

</details>

#### Cárta amháin a eisiamh ó mhodúl domhanda

<details>

<summary>Cliceáil chun leathnú</summary>

<br>

Má tá modúl domhanda agat ach gur mian leat é a eisiamh ó chárta ar leith:

- **Tríd an eagarthóir:**
  
  - I rannóg **Modúil** an chárta, feicfidh tú na modúil dhomhanda liostaithe.
  - Cliceáil ar mhodúl domhanda, díchumasaigh "This card" chun é a eisiamh ón gcárta ar leith seo.

- **Trí YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Do mhodúl a roinnt leis an Module Store

<details>

<summary>Cliceáil chun leathnú</summary>

<br>

Chun do Mhodúl a roinnt leis an Module Store, san Eagarthóir Modúl, ag an mbun in "Export Module", cliceáil ar "Copy for GitHub" agus greamaigh an t-ábhar i bplé nua sa chatagóir [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Cuir an cur síos in eagar** (más gá), **an sampla** (d'úsáideoirí YAML), agus ná déan dearmad **grianghraf amháin ar a laghad a chur san áireamh** don Module Store.

**Beidh do Mhodúl ar fáil díreach ina dhiaidh sin** (tar éis athnuachan an Stórais), mar sin déan seiceáil dhúbailte go bhfuil gach rud scríofa i gceart agus go bhfuil an Modúl ag obair mar a bhíothas ag súil leis. Ar ndóigh is féidir leat an Modúl a chur in eagar/a nuashonrú tar éis é a roinnt.

<br>

</details>

#### Bainistiú leaganacha

<details>

<summary>Cliceáil chun leathnú</summary>

<br>

Seiceálann an Module Store go huathoibríoch le haghaidh nuashonruithe ar mhodúil suiteáilte. Nuair a bhíonn nuashonruithe ar fáil:

1. Feicfidh tú táscaire nuashonraithe sa chluaisín **Module Store**.
2. Cliceáil **Update** ar mhodúil a bhfuil nuashonruithe ar fáil dóibh.
3. Deimhnigh an nuashonrú sa Module Store.

<br>

</details>

#### Cineálacha cártaí tacaithe a shainiú

<details>

<summary>Cliceáil chun leathnú</summary>

<br>

Seans nach mbeidh roinnt modúl comhoiriúnach le gach cineál cárta. Is féidir leat sonrú a dhéanamh ar na cártaí a dtacaíonn modúl leo.  
Más mian leat go mbeadh modúl comhoiriúnach le **gach cárta**, ná déan ach an réimse `supported` a fhágáil ar lár (nó úsáid an rogha **All cards** san eagarthóir).

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

### Samplaí

<details>
<summary>Modúl bunúsach stíliúcháin</summary>

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
<summary>Modúl le cumraíocht shaincheaptha</summary>

<br>

Tá an modúl seo ar fáil [anseo](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Tá tuilleadh samplaí le fáil sa Module Store, nó [anseo](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Cabhair

Ná bíodh drogall ort saincheist a oscailt mura bhfuil rud éigin ag obair mar a bhíothas ag súil leis. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

An bhfuil ceisteanna nó smaointe agat faoi Bubble Card? Ar mhaith leat do dhaisbord nó do chuid fionnachtana a roinnt? Is féidir leat dul chuig fóram Home Assistant, chuig fo-Reddit Bubble Card nó chuig rannóg GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Rannchuidiú

Fáiltítear roimh rannchuidithe! Cibé acu is ceartúcháin fabhtanna, gnéithe nua, aistriúcháin nó feabhsuithe doiciméadaithe iad, ná bíodh drogall ort iarratas tarraingthe a oscailt.

Sula dtosaíonn tú, léigh an [treoir forbróra](DEVELOPERS.md) le do thoil ina bpléitear conas do thimpeallacht áitiúil a shocrú, an tionscadal a thógáil, agus do chuid athruithe a thástáil.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Síntiús a thabhairt

Caithim an chuid is mó de m'am spártha ag déanamh an tionscadail seo chomh maith agus is féidir. Mar sin, más maith leat mo chuid oibre, bheadh aon síntiús ina bhealach iontach chun do thacaíocht a thaispeáint 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Go raibh maith agaibh go léir as bhur dtacaíocht, is sibhse mo mhórspreagadh!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
