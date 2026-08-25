<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Hierdie bladsy is 'n outomatiese vertaling. By twyfel geld die [oorspronklike Engelse dokumentasie](../README.md). Lees 'n sin verkeerd? Alle hulp is welkom, en om [hierdie bladsy reg te stel](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.af.md) neem net 'n minuut: GitHub sorg vir die fork en die pull request. By voorbaat dankie! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lees dit in 'n ander taal](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card is 'n minimalistiese en aanpasbare kaartversameling vir Home Assistant, met moderne pop-ups en 'n geïntegreerde Module Store met meer as 100 modules wat deur die gemeenskap gemaak is.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Inhoudsopgawe

**[`Installasie`](#installasie)**  **[`Konfigurasie`](#konfigurasie)**  **[`Entiteitvoorstelle`](#entiteitvoorstelle)**  **[`Pop-up`](#pop-up)**  **[`Horisontale knoppiestapel`](#horisontale-knoppiestapel)**  **[`Knoppie`](#knoppie)**  **[`Mediaspeler`](#mediaspeler)**  **[`Bedekking`](#bedekking)**  **[`Keuse`](#keuse)**  **[`Klimaat`](#klimaat)**  **[`Kalender`](#kalender)**  **[`Skeier`](#skeier)**  **[`Leë kolom`](#leë-kolom)**  **[`Slegs subknoppies`](#slegs-subknoppies)**  **[`Subknoppies`](#subknoppies)**  **[`Kaartuitlegte`](#kaartuitlegte)**  **[`Voorwaardes`](#voorwaardes)**  **[`Aksies`](#tik--dubbeltik--en-hou-aksies)**  **[`Styl`](#styl)**  **[`Sjablone`](#sjablone)**  **[`Modules`](#modules)**  **[`Lokalisering`](#lokalisering)**  **[`Hulp`](#hulp)**  **[`Bydraes`](#bydraes)**  **[`Skenk`](#skenk)**

<br>

## Installasie

**Laagste ondersteunde Home Assistant-weergawe:** 2023.9.0

<details>

<summary>Sonder HACS</summary>

<br>

1. Laai hierdie lêer af: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Voeg hierdie lêer by jou `<config>/www`-vouer. Om die redigeerder in jou taal te kry, laai ook `bubble-card-<lang>.json` uit die [dist-vouer](https://github.com/Clooos/Bubble-Card/tree/main/dist) af, byvoorbeeld `bubble-card-fr.json`, en plaas dit langs `bubble-card.js` (sonder dit bly die redigeerder in Engels)
3. Klik op jou paneelbord op die ikoon in die boonste regterhoek en dan op `Redigeer paneelbord`
4. Klik weer op daardie ikoon en klik dan op `Bestuur hulpbronne`
5. Klik op `Voeg hulpbron by`
6. Kopieer en plak dit: `/local/bubble-card.js?v=1`
7. Klik op `JavaScript-module` en dan op `Skep`
8. Gaan terug en verfris jou bladsy
9. Jy kan nou op `Voeg kaart by` in die onderste regterhoek klik en vir `Bubble Card` soek
10. Na enige bywerking van die lêer sal jy `/local/bubble-card.js?v=1` moet wysig en die weergawe na enige hoër nommer moet verander

As dit nie werk nie, probeer net om jou blaaier se kas skoon te maak.

</details>

<details>

<summary>Met HACS (Aanbeveel)</summary>

<br>

Met hierdie metode kry jy bywerkings direk in die Home Assistant Community Store

1. As HACS nog nie geïnstalleer is nie, laai dit af deur die instruksies op [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) te volg
2. Gaan voort met die aanvanklike konfigurasie van HACS deur die instruksies op [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) te volg
3. Gaan in jou sybalk na "HACS"
4. Soek vir "Bubble Card", of klik op die blou knoppie hieronder
5. Klik op "Aflaai"
6. Gaan terug na jou paneelbord en klik op die ikoon in die boonste regterhoek en dan op `Redigeer paneelbord`
7. Jy kan nou op `Voeg kaart by` in die onderste regterhoek klik en vir `Bubble Card` soek

As dit nie werk nie, probeer om jou blaaier- of toepassingskas skoon te maak (op al jou toestelle indien nodig).

#### Video's

Jy kan ook na my YouTube-kanaal kyk vir stap-vir-stap-video's.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Maak Bubble Card oop op die Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurasie

Al die opsies kan in die Home Assistant-redigeerder gekonfigureer word. Maar jy kan meer besonderhede en die YAML in die dokumentasie hieronder vind.

<details>

<summary><b>Hoofopsies (YAML + beskrywing)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `type` | string | **Vereis** | `custom:bubble-card` | Tipe van die kaart |
| `card_type` | string | **Vereis** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` of `sub-buttons` | Tipe van die Bubble Card, sien hieronder |
| `styles` | object list | Opsioneel | Enige CSS-stylblaaie | Laat jou toe om die CSS van jou Bubble Card aan te pas, sien [styl](#styl) |

</details>

<details>

<summary><b>Globale CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Randradius vir alle ondersteunde elemente |
| `--bubble-main-background-color` | `color` | Hoofagtergrondkleur vir alle ondersteunde elemente |
| `--bubble-secondary-background-color` | `color` | Sekondêre agtergrondkleur vir alle ondersteunde elemente |
| `--bubble-accent-color` | `color` | Aksentkleur vir alle ondersteunde elemente |
| `--bubble-icon-border-radius` | `px` | Ikoonrandradius vir alle ondersteunde elemente |
| `--bubble-icon-background-color` | `color` | Ikoonagtergrondkleur vir alle ondersteunde elemente |
| `--bubble-sub-button-border-radius` | `px` | Randradius vir alle subknoppies |
| `--bubble-sub-button-background-color` | `color` | Agtergrondkleur vir alle subknoppies |
| `--bubble-box-shadow` | sien [box-shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskadu vir alle ondersteunde elemente |
| `--bubble-border` | sien [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Rand vir alle ondersteunde kaarte |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Kyk na hierdie [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) om meer oor Bubble Card en sy vermoëns te leer.** My YouTube-kanaal is nog redelik nuut en fokus op tutoriale oor Home Assistant en Bubble Card. Moenie huiwer om in te teken nie, dit help om my kanaal se sigbaarheid te verhoog. By voorbaat dankie!

<br>

---

<br>

## Entiteitvoorstelle

Sedert Home Assistant 2026.6 bied die kaartkieser jou 'n paar klaargemaakte kaarte aan wanneer jy 'n entiteit kies, en Bubble Card voeg sy eie resepte by daardie lys. Kies 'n lig en jy kry 'n kaart met 'n helderheidskuifbalk, plus 'n kleurtemperatuur-, 'n kleur- en 'n versadigingsvariant wanneer jou lig hulle ondersteun. Kies 'n bedekking en jy kry sy posisieskuifbalk, kies 'n mediaspeler en jy kry ook 'n variant met sy bronlys, kies 'n stofsuier en jy kry sy begin-, wag- en dok-knoppies. Elke voorstel is 'n gewone Bubble Card-konfigurasie wat as 'n lewendige voorskou gewys word, sodat jy die naaste een kan neem en dit soos gewoonlik verder kan redigeer.

Wat aangebied word, hang af van wat jou entiteit werklik kan doen: 'n lig sonder 'n helderheidskanaal kry 'n wisselaar in plaas van 'n skuifbalk, 'n bedekking wat nie kan kantel nie kry geen kantelvariant nie, en 'n klimaat-entiteit kry sy voorafinstellings net wanneer dit sommige het. Die klassieke inskrywings volg onder die Bubble Card-voorstelle wanneer hulle van toepassing is: die kaart wat aan daardie soort entiteit gewy is, 'n gewone knoppie en 'n skuifbalk.

> [!TIP]
> Modules kan hul eie voorstelle by daardie lys voeg, sien [modules](#modules).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Met hierdie kaart kan jy 'n pop-up met enige inhoud skep. Elke pop-up is **by verstek versteek** en kan oopgemaak word deur sy skakel te teiken (bv. `'#pop-up-name'`), met enige kaart wat die `navigate`-[aksie](#tik--dubbeltik--en-hou-aksies) ondersteun, of met die [horisontale knoppiestapel](#horisontale-knoppiestapel) wat ingesluit is.

> [!TIP]
> ### Pop-up-sneller 
> Met hierdie funksie kan jy 'n pop-up oopmaak op grond van die toestand van enige entiteit. Jy kan byvoorbeeld 'n "Sekuriteit"-pop-up met 'n kamera oopmaak wanneer iemand voor jou huis is. Jy kan ook 'n wisselhelper (input_boolean) skep en die oopmaak/toemaak daarvan in 'n outomatisering sneller.
> <details>
> <summary>Maak 'n pop-up oop wanneer 'n <code>binary_sensor</code> <code>on</code> is</summary>
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
> ### Verskillende maniere om 'n pop-up toe te maak 
> Daar is baie maniere om 'n pop-up toe te maak. Jy kan byvoorbeeld van die pop-up se opskrif na onder vee, 'n lang veeg binne die pop-up na onder doen, Escape op rekenaar druk, die hutswaarde uit die URL verwyder, of eenvoudig op die toemaakknoppie druk.
>


### Pop-up-opsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `hash` | string | **Vereis** | Enige unieke hutswaarde (bv. `'#kitchen'`) met ' ' | Dit is hoe jy jou pop-up sal oopmaak |
| `popup_style` | string | Opsioneel | `bubble` (verstek) of `classic` | Definieer die visuele styl van die pop-up |
| `popup_mode` | string | Opsioneel | `default` (verstek), `fit-content`, `centered` of `adaptive-dialog` | Definieer die uitlegmodus van die pop-up |
| `with_bottom_offset` | boolean | Opsioneel | `true` of `false` (verstek) | Word slegs gebruik met `popup_mode: fit-content` of `adaptive-dialog`. Pas 'n onderste verskuiwing op mobiel toe, nuttig wanneer jou paneelbord 'n voettekskaart insluit. |
| `full_width_on_mobile` | boolean | Opsioneel | `true` of `false` (verstek) | Word slegs gebruik met `popup_mode: centered`. Brei die pop-up uit tot die volle skermbreedte op mobiel, nuttig op kleiner skerms. |
| `performance_mode` | string | Opsioneel | `default` (verstek) of `performance` | Optimaliseer die oopmaakanimasie van die pop-up. `performance` vertraag die weergee van die inhoud en die agtergrondvervaging effens, en deaktiveer ook die backdrop-vervaging as dit gestel is. |
| `auto_close` | string | Opsioneel | 'n Uitteltyd in millisekondes (bv. `10000` vir 10s) | Maak die pop-up outomaties toe na 'n uitteltyd |
| `close_on_click` | boolean | Opsioneel | `true` of `false` (verstek) | Maak die pop-up outomaties toe na enige interaksie |
| `close_by_clicking_outside` | boolean | Opsioneel | `true` (verstek) of `false` | Maak die pop-up toe deur daarbuite te klik |
| `width_desktop` | string | Opsioneel | Enige CSS-waarde | Breedte op rekenaar (by verstek `100%` op mobiel) |
| `margin` | string | Opsioneel | Enige CSS-waarde | Gebruik dit **slegs** as jou pop-up nie goed gesentreer is op mobiel nie (bv. `13px`) |
| `margin_top_mobile` | string | Opsioneel | Enige CSS-waarde | Boonste kantlyn op mobiel (bv. `-56px` as jou opskrif versteek is) |
| `margin_top_desktop` | string | Opsioneel | Enige CSS-waarde | Boonste kantlyn op rekenaar (bv. `50vh` vir 'n halfgrootte pop-up of `calc(100vh - 400px)` vir 'n vaste hoogte van `400px`) |
| `bg_color` | string | Opsioneel | Enige hex-, rgb- of rgba-waarde | Die agtergrondkleur van jou pop-up (bv. `#ffffff` vir 'n wit agtergrond) |
| `bg_opacity` | string | Opsioneel | Enige waarde van `0` tot `100` | Die agtergronddeursigtigheid van jou pop-up (bv. `100` vir geen deursigtigheid nie) |
| `bg_blur` | string | Opsioneel | Enige waarde van `0` tot `100` | Die agtergrondvervagingseffek van jou pop-up, **dit werk slegs as `bg_opacity` nie op `100` gestel is nie** (bv. `0` vir geen vervaging nie)|
| `shadow_opacity` | string | Opsioneel | Enige waarde van `0` tot `100` | Die skadudeursigtigheid van jou pop-up (bv. `0` om dit te versteek) |
| `hide_backdrop` | boolean | Opsioneel | `true` of `false` (verstek) | Stel dit op true op die eerste pop-up van jou hoofpaneelbord om die backdrop op alle pop-ups te deaktiveer. |
| `background_update` | boolean | Opsioneel | `true` of `false` (verstek) | Werk die pop-up-inhoud in die agtergrond by (nie aanbeveel nie) |
| `trigger` | objek of lys | Opsioneel | Sien [voorwaardes](#voorwaardes) | Maak hierdie pop-up oop wanneer aan die voorwaardes voldoen word |
| `trigger_entity` | string | Opsioneel | Enige entiteit | Maak hierdie pop-up oop op grond van die toestand van enige entiteit, die eenvoudige vorm van `trigger` |
| `trigger_state` | string | Opsioneel (**Vereis** as `trigger_entity` gedefinieer is) | Enige entiteitstoestand | Entiteitstoestand om die pop-up oop te maak |
| `trigger_close` | boolean | Opsioneel | `true` (verstek) of `false` | Maak die pop-up toe wanneer daar nie meer aan die voorwaardes voldoen word nie. Dit is eerder `false` by verstek wanneer jy die ouer paar `trigger_entity` en `trigger_state` gebruik |
| `open_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Sneller 'n aksie wanneer die pop-up oopmaak |
| `close_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Sneller 'n aksie wanneer die pop-up toemaak |
| `show_header` | boolean | Opsioneel | `true` (verstek) of `false` | Wys/versteek die pop-up-opskrif volledig |
| `show_previous_button` | boolean | Opsioneel | `true` of `false` (verstek) | Wys 'n vorige-knoppie langs die toemaakknoppie en navigeer terug na die vorige pop-up wanneer beskikbaar |
| `show_close_button` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die toemaakknoppie terwyl die res van die opskrif sigbaar bly |
| `buttons_position` | string | Opsioneel | `right` (verstek) of `left` | Posisie van die toemaak- en vorige-knoppies in die opskrif |
| `cards` | list | Opsioneel | Enige Bubble Card, Home Assistant-kaart of pasgemaakte kaart | Definieer die inhoud van jou pop-up. Sien die pop-up-voorbeeld hieronder. |
| Jy het ook toegang tot [al die knoppie-instellings](#knoppie) vir die opskrif van die pop-up. | | Opsioneel | | As dit ongedefinieer is, sal geen opskrif gewys word nie |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Randradius vir die pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Hoofagtergrondkleur vir ondersteunde elemente van die pop-up |
| `--bubble-pop-up-background-color` | `color` | Agtergrondkleur van die pop-up |
| `--bubble-backdrop-background-color` | `color` | Agtergrondkleur vir die backdrop |
| Jy het ook toegang tot [al die knoppie-CSS-veranderlikes](#knoppie-opsies) vir die opskrif van die pop-up. | | |

</details>


### Selfstandige pop-up-formaat (v3.2.0+)

Sedert v3.2.0 gebruik pop-ups 'n nuwe selfstandige formaat waar die inhoudskaarte direk binne die pop-up gedefinieer word met die `cards`-opsie. Dit bied beter werkverrigting en 'n nuwe afdelinggebaseerde sleep-en-los-redigeerervaring.


#### Voorbeelde

<details>

<summary>'n Pop-up (selfstandige formaat)</summary>

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

<summary>'n Knoppie om die pop-up oop te maak</summary>

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

## Horisontale knoppiestapel

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Hierdie kaart is 'n goeie metgesel vir die opspringerkaart, want daarmee kan jy die ooreenstemmende opspringers oopmaak. Jy kan ook enige bladsy van jou paneelbord daarmee oopmaak. Boonop kan jy jou bewegings-/teenwoordigheidsensors byvoeg sodat die volgorde van die knoppies aanpas volgens die vertrek wat jy pas binnegegaan het. Hierdie kaart kan gerol word, bly sigbaar en dien as 'n voeteks.

> [!IMPORTANT]  
> Hierdie kaart moet die laaste een in jou aansig wees (na elke kaart en opspringer). Dit kan nie binne enige stapel wees nie.

### Opsies vir die horisontale knoppiestapel

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Vereis** | Die opspringer se hutswaarde (bv. `'#kitchen'`) met ' ' of enige skakel | 'n Skakel om oop te maak |
| `1_name` | string | Opsioneel | Enige string | 'n Naam vir jou knoppie |
| `1_icon` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou knoppie |
| `1_entity` | string | Opsioneel | Enige lig of liggroep | Vertoon die kleur van daardie lig in die agtergrond |
| `1_pir_sensor` | string | Opsioneel | Enige binêre sensor | Ten minste een pir-sensor of meer vir `auto_order`, dit werk trouens ook met enige entiteitstipe, jy kan byvoorbeeld liggroepe byvoeg en die volgorde sal verander op grond van die toestande wat laas verander het. |
| `auto_order` | boolean | Opsioneel | `true` of `false` (verstek) | Verander die volgorde van die knoppies volgens die tyd toe die `_pir_sensor` laas verander het, **dit moet `false` wees as jy geen `_pir_sensor` in jou kode het nie** |
| `margin` | string | Opsioneel | Enige CSS-waarde | Gebruik dit **slegs** as jou `horizontal-buttons-stack` nie goed gesentreer is op mobiel nie (bv. `13px`) |
| `width_desktop` | string | Opsioneel | Enige CSS-waarde | Breedte op rekenaar (by verstek `100%` op mobiel) |
| `is_sidebar_hidden` | boolean | Opsioneel | `true` of `false` (verstek) | Herstel die posisie van die horisontale knoppiestapel as die kantbalk op die rekenaar versteek is (slegs as jy self 'n wysiging aangebring het om dit te versteek) |
| `rise_animation` | boolean | Opsioneel | `true` (verstek) of `false` | Stel dit op `false` om die animasie te deaktiveer wat geaktiveer word sodra die bladsy gelaai is |
| `highlight_current_view` | boolean | Opsioneel | `true` of `false` (verstek) | Merk die huidige hutswaarde / aansig met 'n gladde animasie |
| `hide_gradient` | boolean | Opsioneel | `true` of `false` (verstek) | Stel dit op `false` om die gradiënt te versteek |

> [!IMPORTANT]  
> Die veranderlikes wat met 'n syfer begin, definieer jou knoppies, verander net hierdie syfer om meer knoppies by te voeg (sien voorbeeld hieronder).

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Randradius vir die knoppies van die horisontale knoppiestapel |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Agtergrondkleur vir die knoppies van die horisontale knoppiestapel |

</details>


#### Voorbeeld

<details>

<summary>'n Horisontale knoppiestapel wat homself herrangskik op grond van teenwoordigheidsensors</summary>

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

## Knoppie

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Hierdie kaart is baie veelsydig. Dit kan gebruik word as 'n **skakelaar**-, **skuifbalk**-, **toestand**- of **naam/teks**-knoppie.

> [!TIP]
> ### Wat is die verskille tussen al die knoppietipes?
>
> - **Skakelaarknoppie:** Dit is die verstekknoppietipe. By verstek wissel dit 'n entiteit en verander die agtergrondkleur op grond van die entiteit se toestand of die kleur van 'n lig. Jy kan die aksie daarvan verander in die afdeling **Tik-aksie op die kaart**.
>
> - **Skuifbalkknoppie:** Met hierdie knoppietipe kan jy entiteite met verstelbare reekse beheer. Dit is ideaal om ligte te verdof, en die vulkleur pas by die lig se kleur aan. Jy kan dit ook gebruik om waardes te vertoon, soos 'n batteryvlak.
>   Ondersteunde entiteite vir skuifbalke:
>   - Lig (helderheid)
>   - Mediaspeler (volume)
>   - Bedekking (posisie)
>   - Waaier (persentasie)
>   - Klimaat (temperatuur)
>   - Input number en number (waarde)
>   - Batterysensor (persentasie, slegs lees)
>
>   Jy kan ook enige entiteit met 'n numeriese toestand gebruik deur die entiteitfilter in **Skuifbalkinstellings** te deaktiveer, en dan die `min`- en `max`-waardes te definieer. Hierdie opsie is slegs lees.
>
> - **Toestandknoppie:** Perfek om inligting van 'n sensor of enige entiteit te vertoon. Wanneer jy daarop druk, sal dit die entiteit se "Meer inligting"-paneel wys. Die agtergrondkleur verander nie.
>
> - **Naam/teks-knoppie:** Die enigste knoppietipe wat nie 'n entiteit nodig het nie. Dit laat jou toe om 'n kort teks, 'n naam of 'n titel te vertoon. Jy kan ook aksies daarby voeg. Die agtergrondkleur verander nie.

### Knoppie-opsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Vereis** | Enige entiteit | 'n Entiteit om te beheer |
| `button_type` | string | Opsioneel | `switch` (verstek), `slider`, `state` of `name` | Die gedrag van jou knoppie |
| `name` | string | Opsioneel | Enige string | 'n Naam vir jou knoppie, as dit nie gedefinieer is nie sal dit die entiteitnaam vertoon |
| `icon` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou knoppie, as dit nie gedefinieer is nie sal dit die entiteitikoon of die `entity-picture` vertoon |
| `force_icon` | boolean | Opsioneel | `true` of `false` (verstek) | Gee voorkeur aan die ikoon bo die `entity-picture` |
| `use_accent_color` | boolean | Opsioneel (`false` verstek) | **Slegs vir ligte.** Gebruik die tema se aksentkleur in plaas van die lig se kleur.                         |
| `show_state` | boolean | Opsioneel | `true` of `false` (verstek) | Wys of versteek die toestand van jou `entity` |
| `show_name` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die naam |
| `show_icon` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die ikoon |
| `show_last_changed` | boolean | Opsioneel | `true` of `false` (verstek) | Wys die tyd toe jou `entity` laas verander het |
| `show_last_updated` | boolean | Opsioneel | `true` of `false` (verstek) | Wys die tyd toe jou `entity` laas bygewerk is |
| `show_attribute` | boolean | Opsioneel | `true` of `false` (verstek) | Wys 'n attribuut van jou `entity` onder sy `name` |
| `attribute` | string | Opsioneel (vereis as `show_attribute` op `true` gestel is) | 'n Attribuut van jou `entity` | Die attribuut om te wys (bv. `brightness`) |
| `scrolling_effect` | boolean | Opsioneel | `true` (verstek) of `false` | Laat teks toe om te rol wanneer die inhoud groter is as sy houer |
| `button_action` | object | Opsioneel | `tap_action`, `double_tap_action` of `hold_action`, sien hieronder | Laat jou toe om die verstekaksies by 'n klik op die knoppie te verander. |
| `tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n klik op die ikoon, as dit nie gedefinieer is nie word `more-info` gebruik |
| `double_tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n dubbelklik op die ikoon, as dit nie gedefinieer is nie word `none` gebruik |
| `hold_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer die ikoon gehou word, as dit nie gedefinieer is nie word `more-info` gebruik |
| `card_layout` | string | Opsioneel | `normal` (verstek buite 'n afdelingsaansig), `large` (verstek in 'n afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | number | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |
| `sub_button` | object | Opsioneel | Sien [subknoppies](#subknoppies) | Voeg pasgemaakte knoppies by wat regs vasgemaak is |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Hoofagtergrondkleur vir ondersteunde elemente in die knoppie |
| `--bubble-button-border-radius` | `px` | Randradius vir die knoppie |
| `--bubble-button-icon-border-radius` | `px` | Randradius vir die knoppie se ikoonhouer |
| `--bubble-button-icon-background-color` | `color` | Agtergrondkleur vir die knoppie se ikoonhouer |
| `--bubble-light-white-color` | `color` | Vervang die verstek wit kleur van ligknoppies/-skuifbalke |
| `--bubble-light-color` | `color` | Vervang die kleur van ligknoppies/-skuifbalke (selfs RGB-ligte) |
| `--bubble-button-box-shadow` | Sien [boksskadu](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskadu vir die knoppie |

</details>

Hierdie opsies is slegs beskikbaar wanneer `button_type` op `slider` gestel is.

<details>

<summary><b>Skuifbalkopsies (YAML + beskrywings)</b></summary>

| Naam                  | Tipe    | Vereiste                        | Beskrywing                                                                                              |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opsioneel                       | Die minimum waarde van die skuifbalk. Vir pasgemaakte skuifbalke.                                       |
| `max_value`             | number  | Opsioneel                       | Die maksimum waarde van die skuifbalk. Vir pasgemaakte skuifbalke.                                      |
| `step`                  | number  | Opsioneel                       | Die stapwaarde van die skuifbalk.                                                                       |
| `tap_to_slide`          | boolean | Opsioneel (`false` verstek)     | Aktiveer die vorige skuifbalkgedrag waar jy tik om die skuifbalk te aktiveer, in plaas daarvan om dit te hou. |
| `relative_slide`        | boolean | Opsioneel (`false` verstek)     | Werk die waarde by relatief tot die beginwaarde, eerder as die beginraakpunt.                           |
| `read_only_slider`      | boolean | Opsioneel (`false` verstek)     | Maak die skuifbalk slegs-lees. Word outomaties geaktiveer vir sommige entiteite soos sensors.           |
| `slider_live_update`    | boolean | Opsioneel (`false` verstek)     | Die entiteit se toestand word tydens die skuif bygewerk. **Hierdie funksie word nie vir alle entiteite aanbeveel nie.** |
| `slider_fill_orientation` | string | Opsioneel | `left`, `right`, `top` of `bottom` | Verander die vulrigting van die skuifbalk. Van links na regs wanneer dit nie gedefinieer is nie, gespieël in [tale wat van regs na links loop](#lokalisering) |
| `slider_value_position` | string | Opsioneel | `right`, `left`, `center` of `hidden` | Posisie van die waardevertoning. Aan die regterkant wanneer dit nie gedefinieer is nie, en links in [tale wat van regs na links loop](#lokalisering) |
| `invert_slider_value` | boolean | Opsioneel (`false` verstek) | Keer die skuifbalkrigting om (100% vulling stem ooreen met die minimum). Nie beskikbaar vir kleurskuifbalke nie. |
| `light_slider_type` | string | Opsioneel | `brightness` (verstek), `hue`, `saturation`, `white_temp` | **Slegs vir ligte.** Kies die skuifbalkmodus |
| `cover_slider_type` | string | Opsioneel | `position` (verstek), `tilt_position` | **Slegs vir bedekkings.** Kies die skuifbalkmodus (posisie of kanteling) |
| `hue_force_saturation` | boolean | Opsioneel (`false` verstek) | **Slegs vir ligte (tintmodus).** Forseer versadiging wanneer die tint aangepas word |
| `hue_force_saturation_value` | number | Opsioneel (`100` verstek) | **Slegs vir ligte (tintmodus).** Geforseerde versadigingswaarde (0-100) |
| `use_accent_color` | boolean | Opsioneel (`false` verstek) | **Slegs vir ligte (helderheidsmodus).** Gebruik die tema se aksentkleur in plaas van die ligkleur |
| `allow_light_slider_to_0` | boolean | Opsioneel (`false` verstek)   | **Slegs vir ligte.** Laat die skuifbalk toe om 0% te bereik, wat die lig afskakel. Nie beskikbaar met `tap_to_slide` nie. |
| `light_transition`      | boolean | Opsioneel (`false` verstek)     | **Slegs vir ligte.** Aktiveer gladde helderheidsoorgange vir ondersteunde ligte.                        |
| `light_transition_time` | number  | Opsioneel (`500` verstek)       | **Slegs vir ligte.** Die oorgangstyd in millisekondes. Vereis `light_transition: true`.                 |

</details>

#### Voorbeelde

<details>

<summary>'n Skuifbalkknoppie wat die helderheid van 'n lig kan beheer</summary>

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

<summary>'n Knoppie met meer opsies</summary>

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

## Mediaspeler

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Met hierdie kaart kan jy 'n mediaspeler-entiteit beheer.

### Mediaspeler-opsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Vereis** | Enige mediaspeler | Die mediaspeler om te beheer |
| `name` | string | Opsioneel | Enige string | 'n Naam vir jou mediaspeler, as dit nie gedefinieer is nie sal dit die entiteitnaam vertoon |
| `icon` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou mediaspeler, as dit nie gedefinieer is nie sal dit die entiteitikoon of die `entity-picture` vertoon |
| `force_icon` | boolean | Opsioneel | `true` of `false` (verstek) | Gee voorkeur aan die ikoon bo die `entity-picture` |
| `show_state` | boolean | Opsioneel | `true` of `false` (verstek) | Wys of versteek die toestand van jou `entity` |
| `show_name` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die naam |
| `show_icon` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die ikoon |
| `show_last_changed` | boolean | Opsioneel | `true` of `false` (verstek) | Wys die tyd toe jou `entity` laas verander het |
| `show_last_updated` | boolean | Opsioneel | `true` of `false` (verstek) | Wys die tyd toe jou `entity` laas bygewerk is |
| `show_attribute` | boolean | Opsioneel | `true` of `false` (verstek) | Wys 'n attribuut van jou `entity` onder sy `name` |
| `attribute` | string | Opsioneel (vereis as `show_attribute` op `true` gestel is) | 'n Attribuut van jou `entity` | Die attribuut om te wys (bv. `brightness`) |
| `scrolling_effect` | boolean | Opsioneel | `true` (verstek) of `false` | Laat teks toe om te rol wanneer die inhoud groter is as sy houer |
| `min_volume` | number | Opsioneel | Enige getal | Die minimum waarde van die volumeskuifbalk. |
| `max_volume` | number | Opsioneel | Enige getal | Die maksimum waarde van die volumeskuifbalk. |
| `cover_background` | boolean | Opsioneel | `true` of `false` (verstek) | Gebruik 'n vervaagde media-omslag as die kaart se agtergrond. |
| `button_action` | object | Opsioneel | `tap_action`, `double_tap_action` of `hold_action`, sien [aksies](#tik--dubbeltik--en-hou-aksies) | Laat jou toe om die verstekaksies by 'n klik op die knoppie te verander. |
| `tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n klik op die ikoon, as dit nie gedefinieer is nie word `more-info` gebruik. |
| `double_tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n dubbelklik op die ikoon, as dit nie gedefinieer is nie word `none` gebruik. |
| `hold_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer die ikoon gehou word, as dit nie gedefinieer is nie word `more-info` gebruik. |
| `main_buttons_position` | string | Opsioneel | `default` of `bottom` | Skuif die omslag se aksieknoppies na die onderkant (vas) |
| `main_buttons_full_width` | boolean | Opsioneel | `true` of `false` | Maak die onderste aksieknoppies oor die volle breedte (verstek: `true` wanneer die posisie `bottom` is) |
| `main_buttons_alignment` | string | Opsioneel | `end` (verstek), `center`, `start`, `space-between` | Belyning van die onderste aksieknoppies wanneer hulle nie oor die volle breedte is nie |
| `card_layout` | string | Opsioneel | `normal` (verstek buite 'n afdelingsaansig), `large` (verstek in 'n afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | number | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |
| `sub_button` | object | Opsioneel | Sien [subknoppies](#subknoppies) | Voeg pasgemaakte knoppies by wat regs vasgemaak is |
| `hide` | object | Opsioneel | Sien hieronder | Versteek knoppies van die kaart |

#### Versteek-opsies

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opsioneel | `true` of `false` (verstek) | Versteek die speel/pouse-knoppie |
| `volume_button` | boolean | Opsioneel | `true` of `false` (verstek) | Versteek die volumeknoppie |
| `previous_button` | boolean | Opsioneel | `true` of `false` (verstek) | Versteek die vorige-knoppie |
| `next_button` | boolean | Opsioneel | `true` of `false` (verstek) | Versteek die volgende-knoppie |
| `power_button` | boolean | Opsioneel | `true` of `false` (verstek) | Versteek die aan/af-knoppie |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Hoofagtergrondkleur vir die mediaspeler |
| `--bubble-media-player-border-radius` | `px` | Randradius vir die mediaspeler |
| `--bubble-media-player-buttons-border-radius` | `px` | Randradius vir die mediaspelerknoppies |
| `--bubble-media-player-slider-background-color` | `color` | Agtergrondkleur vir die volumeskuifbalk |
| `--bubble-media-player-icon-border-radius` | `px` | Randradius vir die mediaspeler se ikoonhouer |
| `--bubble-media-player-icon-background-color` | `color` | Agtergrondkleur vir die mediaspeler se ikoonhouer |
| `--bubble-media-player-box-shadow` | Sien [boksskadu](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskadu vir die mediaspeler |

</details>


#### Voorbeelde

<details>

<summary>'n Mediaspeler met al die opsies</summary>

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

## Bedekking

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Met hierdie kaart kan jy jou `cover`-entiteite beheer.

### Bedekkingsopsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Vereis** | Enige bedekking | 'n Bedekking om te beheer |
| `name` | string | Opsioneel | Enige string | 'n Naam vir jou bedekking, indien nie gedefinieer nie sal die entiteitnaam vertoon word |
| `force_icon` | boolean | Opsioneel | `true` of `false` (verstek) | Gee voorrang aan die ikoon in plaas van die `entity-picture` |
| `show_state` | boolean | Opsioneel | `true` of `false` (verstek) | Wys of versteek die toestand van jou `entity` |
| `show_name` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die naam |
| `show_icon` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die ikoon |
| `show_last_changed` | boolean | Opsioneel | `true` of `false` (verstek) | Wys wanneer jou `entity` laas verander is |
| `show_last_updated` | boolean | Opsioneel | `true` of `false` (verstek) | Wys wanneer jou `entity` laas bygewerk is |
| `show_attribute` | boolean | Opsioneel | `true` of `false` (verstek) | Wys 'n attribuut van jou `entity` onder sy `name` |
| `attribute` | string | Opsioneel (vereis as `show_attribute` op `true` gestel is) | 'n Attribuut van jou `entity` | Die attribuut om te wys (bv. `brightness`) |
| `scrolling_effect` | boolean | Opsioneel | `true` (verstek) of `false` | Laat teks rol wanneer die inhoud groter is as sy houer |
| `icon_open` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou oop bedekking, indien nie gedefinieer nie sal die verstek-ikoon vir 'n oop bedekking vertoon word |
| `icon_close` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou toe bedekking, indien nie gedefinieer nie sal die verstek-ikoon vir 'n toe bedekking vertoon word |
| `icon_up` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou oopmaakknoppie, indien nie gedefinieer nie sal die verstek-ikoon vir 'n oop bedekking vertoon word |
| `icon_down` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou toemaakknoppie, indien nie gedefinieer nie sal die verstek-ikoon vir 'n toe bedekking vertoon word |
| `open_service` | string | Opsioneel | Enige diens of skrip | 'n Diens om jou bedekking oop te maak, verstek is `cover.open_cover` |
| `stop_service` | string | Opsioneel | Enige diens of skrip | 'n Diens om jou bedekking te stop, verstek is `cover.stop_cover` |
| `close_service` | string | Opsioneel | Enige diens of skrip | 'n Diens om jou bedekking toe te maak, verstek is `cover.close_cover` |
| `tilt_buttons` | string | Opsioneel | `top` (verstek), `bottom`, `left`, `right`, `hidden` | Posisie van die kantelknoppies (word slegs gewys as die bedekking kanteling ondersteun) |
| `open_tilt_service` | string | Opsioneel | Enige diens of skrip | 'n Diens om die kanteling oop te maak, verstek is `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opsioneel | Enige diens of skrip | 'n Diens om die kanteling toe te maak, verstek is `cover.close_cover_tilt` |
| `button_action` | object | Opsioneel | `tap_action`, `double_tap_action` of `hold_action`, sien [aksies](#tik--dubbeltik--en-hou-aksies) | Laat jou toe om die verstekaksies by 'n klik op die knoppie te verander. |
| `tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n klik op die ikoon, indien ongedefinieer word `more-info` gebruik. |
| `double_tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n dubbelklik op die ikoon, indien ongedefinieer word `none` gebruik. |
| `hold_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer die ikoon gehou word, indien ongedefinieer word `more-info` gebruik. |
| `main_buttons_position` | string | Opsioneel | `default` of `bottom` | Skuif die beheerknoppies na die onderkant (vas) |
| `main_buttons_full_width` | boolean | Opsioneel | `true` of `false` | Maak die onderste beheerknoppies volle breedte (verstek: `true` wanneer die posisie `bottom` is) |
| `main_buttons_alignment` | string | Opsioneel | `end` (verstek), `center`, `start`, `space-between` | Belyning van die onderste beheerknoppies wanneer nie volle breedte nie |
| `card_layout` | string | Opsioneel | `normal` (verstek indien nie in 'n afdelingsaansig nie), `large` (verstek in 'n afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | number | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |
| `sub_button` | object | Opsioneel | Sien [subknoppies](#subknoppies) | Voeg pasgemaakte knoppies by wat regs vasgeheg is |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Hoofagtergrondkleur vir ondersteunde elemente in die bedekkingskaart |
| `--bubble-cover-border-radius` | `px` | Hoekradius vir die bedekkingskaart |
| `--bubble-cover-icon-border-radius` | `px` | Hoekradius vir die ikoonhouer van die bedekkingskaart |
| `--bubble-cover-icon-background-color` | `color` | Agtergrondkleur vir die ikoonhouer van die bedekkingskaart |
| `--bubble-cover-box-shadow` | Sien [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskadu vir die bedekkingskaart |
| `--bubble-button-box-shadow` | Sien [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskadu vir knoppies in die bedekkingskaart |

</details>


#### Voorbeeld

<details>

<summary>'n Kaart wat 'n rolgordyn kan beheer</summary>

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

## Keuse

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Met hierdie kaart kan jy 'n aftreklys byvoeg vir jou `input_select`- / `select`-entiteite. Hierdie kaart ondersteun ook die subknoppies en al die algemene funksies van Bubble Card.

> [!TIP]
> Jy kan ook keuse-subknoppies hê as jy wil, hierdie funksie is beskikbaar in al die kaarte wat die subknoppies ondersteun.

### Keuse-opsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Vereis** | Enige entiteit | 'n Entiteit om te beheer |
| `name` | string | Opsioneel | Enige string | 'n Naam vir jou keusekaart, indien nie gedefinieer nie sal die entiteitnaam vertoon word |
| `icon` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou keusekaart, indien nie gedefinieer nie sal die entiteit-ikoon of die `entity-picture` vertoon word |
| `force_icon` | boolean | Opsioneel | `true` of `false` (verstek) | Gee voorrang aan die ikoon in plaas van die `entity-picture` |
| `show_state` | boolean | Opsioneel | `true` of `false` (verstek) | Wys of versteek die toestand van jou `entity` |
| `show_name` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die naam |
| `show_icon` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die ikoon |
| `show_last_changed` | boolean | Opsioneel | `true` of `false` (verstek) | Wys wanneer jou `entity` laas verander is |
| `show_last_updated` | boolean | Opsioneel | `true` of `false` (verstek) | Wys wanneer jou `entity` laas bygewerk is |
| `show_attribute` | boolean | Opsioneel | `true` of `false` (verstek) | Wys 'n attribuut van jou `entity` onder sy `name` |
| `attribute` | string | Opsioneel (vereis as `show_attribute` op `true` gestel is) | 'n Attribuut van jou `entity` | Die attribuut om te wys (bv. `brightness`) |
| `scrolling_effect` | boolean | Opsioneel | `true` (verstek) of `false` | Laat teks rol wanneer die inhoud groter is as sy houer |
| `tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n klik op die ikoon, indien ongedefinieer word `more-info` gebruik. |
| `double_tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n dubbelklik op die ikoon, indien ongedefinieer word `none` gebruik. |
| `hold_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer die ikoon gehou word, indien ongedefinieer word `more-info` gebruik. |
| `card_layout` | string | Opsioneel | `normal` (verstek indien nie in 'n afdelingsaansig nie), `large` (verstek in 'n afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | number | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |
| `sub_button` | object | Opsioneel | Sien [subknoppies](#subknoppies) | Voeg pasgemaakte knoppies by wat regs vasgeheg is |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Hoofagtergrondkleur vir ondersteunde elemente in die keusekaart |
| `--bubble-select-background-color` | `color` | Agtergrondkleur vir die keusekaart |
| `--bubble-select-list-border-radius` | `px` | Hoekradius vir die aftreklys in die kaart |
| `--bubble-select-list-item-accent-color` | `color` | Aksentkleur vir die gekose item |
| `--bubble-select-list-background-color` | `color` | Agtergrondkleur vir die aftreklys in die kaart |
| `--bubble-select-list-width` | `px` | Breedte van die aftreklys in die kaart |
| `--bubble-select-arrow-background-color` | `color` | Agtergrondkleur vir die aftrekpyltjie |
| `--bubble-select-button-border-radius` | `px` | Hoekradius vir die keuseknoppie |
| `--bubble-select-border-radius` | `px` | Hoekradius vir die keusekaart |
| `--bubble-select-icon-border-radius` | `px` | Hoekradius vir die ikoonhouer van die keusekaart |
| `--bubble-select-icon-background-color` | `color` | Agtergrondkleur vir die ikoonhouer van die keusekaart |
| `--bubble-select-box-shadow` | Sien [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskadu vir die keusekaart |

</details>


#### Voorbeelde

<details>

<summary>'n Keusekaart met 'n lys tonele</summary>

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

## Klimaat

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Met hierdie kaart kan jy jou `climate`-entiteite beheer.

> [!TIP]
> Die moduskeuselys is 'n [subknoppie](#subknoppies) wat outomaties bygevoeg word wanneer die kaart geskep word. Jy kan dit daarna na wense wysig of verwyder.

### Klimaatopsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam                     | Tipe    | Vereiste                            | Ondersteunde opsies                              | Beskrywing                                                                                                      |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Vereis**                          | Klimaatentiteit                                  | Die entiteit om te beheer (bv. `climate.living_room`).                                                          |
| `name`                  | string  | Opsioneel                           | Enige string                                     | 'n Pasgemaakte naam vir die kaart. Indien nie gedefinieer nie, sal die entiteitnaam vertoon word.               |
| `icon`                  | string  | Opsioneel                           | Enige `mdi:`-ikoon                               | 'n Pasgemaakte ikoon vir die kaart. Indien nie gedefinieer nie, word die entiteit-ikoon of `entity-picture` gebruik. |
| `force_icon`            | boolean | Opsioneel                           | `true` of `false` (verstek)                     | Gee voorrang aan die ikoon bo die `entity-picture`.                                                             |
| `show_state`            | boolean | Opsioneel                           | `true` of `false` (verstek)                     | Wys of versteek die huidige toestand van die `entity`.                                                          |
| `show_name`             | boolean | Opsioneel                           | `true` (verstek) of `false`                     | Wys of versteek die naam van die entiteit.                                                                      |
| `show_icon`             | boolean | Opsioneel                           | `true` (verstek) of `false`                     | Wys of versteek die ikoon.                                                                                      |
| `hide_target_temp_low`  | boolean | Opsioneel (slegs vir entiteite wat `target_temp_low` ondersteun) | `true` of `false` (verstek) | Versteek die beheer vir die onderste teikentemperatuur as die `entity` dit ondersteun.                          |
| `hide_target_temp_high` | boolean | Opsioneel (slegs vir entiteite wat `target_temp_high` ondersteun)| `true` of `false` (verstek) | Versteek die beheer vir die boonste teikentemperatuur as die `entity` dit ondersteun.                           |
| `state_color`           | boolean | Opsioneel                           | `true` of `false` (verstek)                     | Pas 'n konstante agtergrondkleur toe wanneer die klimaatentiteit AAN is.                                        |
| `step` | number | Opsioneel | Enige getal | Die temperatuurstap. |
| `min_temp` | number | Opsioneel | Enige getal | Die minimum temperatuur. |
| `max_temp` | number | Opsioneel | Enige getal | Die maksimum temperatuur. |
| `button_action` | object | Opsioneel | `tap_action`, `double_tap_action` of `hold_action`, sien [aksies](#tik--dubbeltik--en-hou-aksies) | Laat jou toe om die verstekaksies by 'n klik op die knoppie te verander. |
| `tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n klik op die ikoon, indien ongedefinieer word `more-info` gebruik. |
| `double_tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n dubbelklik op die ikoon, indien ongedefinieer word `none` gebruik. |
| `hold_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer die ikoon gehou word, indien ongedefinieer word `more-info` gebruik. |                              |
| `main_buttons_position` | string | Opsioneel | `default` of `bottom` | Skuif die klimaataksieknoppies na die onderkant (vas) |
| `main_buttons_full_width` | boolean | Opsioneel | `true` of `false` | Maak die onderste aksieknoppies volle breedte (verstek: `true` wanneer die posisie `bottom` is) |
| `main_buttons_alignment` | string | Opsioneel | `end` (verstek), `center`, `start`, `space-between` | Belyning van die onderste aksieknoppies wanneer nie volle breedte nie |
| `card_layout` | string | Opsioneel | `normal` (verstek indien nie in 'n afdelingsaansig nie), `large` (verstek in 'n afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | number | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |
| `sub_button`            | object  | Opsioneel                           | Sien [subknoppies](#subknoppies)               | Voeg pasgemaakte knoppies by wat regs vasgeheg is. Nuttig vir 'n keuselys vir klimaatmodusse.                   |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Hoofagtergrondkleur vir ondersteunde elemente in die klimaatkaart |
| `--bubble-climate-border-radius` | `px` | Hoekradius vir ondersteunde elemente in die klimaatkaart |
| `--bubble-climate-button-background-color` | `color` | Agtergrondkleur vir die knoppies van die klimaatkaart |
| `--bubble-climate-icon-border-radius` | `px` | Hoekradius vir die ikoonhouer van die klimaatkaart |
| `--bubble-state-climate-fan-only-color` | `color` | Oorlegkleur vir die fan-only-toestand |
| `--bubble-state-climate-dry-color` | `color` | Oorlegkleur vir die dry-toestand |
| `--bubble-state-climate-cool-color` | `color` | Oorlegkleur vir die cool-toestand |
| `--bubble-state-climate-heat-color` | `color` | Oorlegkleur vir die heat-toestand |
| `--bubble-state-climate-auto-color` | `color` | Oorlegkleur vir die auto-toestand |
| `--bubble-state-climate-heat-cool-color` | `color` | Oorlegkleur vir die heat-cool-toestand |
| `--bubble-climate-accent-color` | `color` | Aksentkleur vir die klimaatkaart |
| `--bubble-climate-box-shadow` | Sien [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskadu vir die klimaathouer. |

</details>


#### Voorbeelde

<details>

<summary>'n Klimaatkaart met 'n aftreklys vir HVAC-modusse</summary>

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

## Kalender

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Met hierdie kaart kan jy jou kalenderentiteite vertoon. Die inhoud is rolbaar, sodat jy maklik deur komende gebeurtenisse kan blaai.

### Kalenderopsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam                | Tipe    | Vereiste     | Ondersteunde opsies                             | Beskrywing                                                                              |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Opsioneel    | Enige getal (minimum: 1)                       | Aantal kalenderdae waarvoor gebeurtenisse opgehaal word, van nou tot die einde van die Nde dag (verstek: 7) |
| `entities`          | object  | **Vereis**   | 'n Kalenderentiteit-objek (sien hieronder)      | Die entiteit om te beheer (bv. `calendar.main_calendar`).                               |
| `entities.entity`   | string  | **Vereis**   | 'n Kalenderentiteit                             | Die kalenderentiteit om te vertoon                                                      |
| `entities.color`    | string  | Opsioneel    | 'n Kleur                                        | 'n Pasgemaakte kleur vir die kalenderetiket. Indien nie gedefinieer nie, word 'n kleur outomaties gekies |
| `days`              | number  | Opsioneel    | Enige getal (minimum: 1)                        | Aantal kalenderdae waarvoor gebeurtenisse opgehaal word, van nou tot die einde van die Nde dag (verstek: 7) |
| `limit`             | number  | Opsioneel    | 'n Getal                                        | Die aantal gebeurtenisse wat op die kaart vertoon sal word                              |
| `show_end`          | boolean | Opsioneel    | `true` of `false` (verstek)                     | Wys of versteek die eindtyd van gebeurtenisse                                           |
| `show_progress`     | boolean | Opsioneel    | `true` (verstek) of `false`                     | Wys of versteek die vorderingsbalk van die gebeurtenis                                  |
| `show_started_events`| boolean | Opsioneel    | `true` (verstek) of `false`                     | Wys of versteek gebeurtenisse wat tans aan die gang is. Meerdaagse gebeurtenisse word dag vir dag beoordeel, sodat net die dag wat aan die gang is versteek word en die dae wat kom sigbaar bly |
| `scrolling_effect`  | boolean | Opsioneel | `true` (verstek) of `false` | Laat teks rol wanneer die inhoud groter is as sy houer |
| `event_action` | object | Opsioneel | `tap_action`, `double_tap_action` of `hold_action`, sien [aksies](#tik--dubbeltik--en-hou-aksies) | Laat jou toe om aksies by 'n klik op 'n gebeurtenis by te voeg. |
| `tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n klik op 'n dag, indien ongedefinieer word `none` gebruik. |
| `double_tap_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie by 'n dubbelklik op 'n dag, indien ongedefinieer word `none` gebruik. |
| `hold_action` | object | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer 'n dag gehou word, indien ongedefinieer word `none` gebruik. |
| `card_layout` | string | Opsioneel | `normal` (verstek indien nie in 'n afdelingsaansig nie), `large` (verstek in 'n afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | number | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |
| `sub_button` | object | Opsioneel | Sien [subknoppies](#subknoppies) | Voeg pasgemaakte knoppies by wat regs vasgeheg is |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike                              | Verwagte waarde | Beskrywing                                                         |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Hoofagtergrondkleur vir ondersteunde elemente in die kalenderkaart |
| `--bubble-calendar-border-radius`         | `px`           | Hoekradius vir ondersteunde elemente in die kalenderkaart          |
| `--bubble-calendar-height`                | `px`           | Hoogte van die kalenderkaart                                        |

</details>

#### Voorbeelde

<details>

<summary>'n Kalenderkaart met 'n beperkte aantal gebeurtenisse</summary>

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

<summary>'n Kalenderkaart met 'n eindtyd en 'n vorderingsbalk</summary>

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


## Skeier

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Hierdie kaart is 'n eenvoudige skeier om jou opspringer in kategorieë / afdelings te verdeel, bv. Ligte, Toestelle, Bedekkings, Instellings, Outomatisasies...

### Skeier-opsies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `name` | string | Opsioneel maar aanbeveel | Enige string | 'n Naam vir jou skeier |
| `icon` | string | Opsioneel maar aanbeveel | Enige `mdi:`-ikoon | 'n Ikoon vir jou skeier |
| `card_layout` | string | Opsioneel | `normal` (verstek indien nie in die afdelingsaansig nie), `large` (verstek in die afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | getal | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |
| `sub_button` | objek | Opsioneel | Sien [subknoppies](#subknoppies) | Voeg pasgemaakte knoppies by wat regs vasgemaak is |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Agtergrondkleur van die lyn in die skeier |

</details>

#### Voorbeeld

<details>

<summary>'n Skeier/verdeler vir 'n "Bedekkings"-afdeling</summary>

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

## Leë kolom

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Hierdie kaart is daar om 'n leë kolom te vul. Dit is nuttig as jy 'n `horizontal-stack` met net een kaart in jou opspringer het. Kyk na die regteronderste hoek van hierdie skermskoot om dit (nie) te sien (nie).

### Leë-kolom-opsies

Hierdie kaart het geen opsies nie en ondersteun nie [styl](#styl) nie, maar dit ondersteun wel uitlegopsies vir HA-afdelings.

#### Voorbeeld

<details>

<summary>'n Leë kolom in 'n horisontale stapel</summary>

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

## Slegs subknoppies

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Hierdie kaart is uitsluitlik vir subknoppies bedoel. Dit is perfek vir kieslyste, vinnige aksies, informatiewe chips, of 'n vaste voeteks aan die onderkant van die bladsy.

> [!IMPORTANT]  
> Hierdie kaart gebruik die nuwe subknoppie-skema. Gebruik `sub_button.bottom` om jou knoppies te definieer. Die `sub_button.main`-afdeling word geïgnoreer.

### Opsies vir Slegs subknoppies

<details>

<summary><b>Opsies (YAML + beskrywings)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `sub_button` | objek | **Vereis** | Sien [subknoppies](#subknoppies) | Definieer jou subknoppies met die `bottom`-afdeling |
| `hide_main_background` | boolean | Opsioneel | `true` of `false` (verstek) | Verwyder die kaartagtergrond |
| `footer_mode` | boolean | Opsioneel | `true` of `false` (verstek) | Maak die kaart aan die onderkant van die bladsy vas |
| `footer_full_width` | boolean | Opsioneel | `true` of `false` (verstek) | Maak die voeteks oor die volle breedte (100%) |
| `footer_width` | getal | Opsioneel | Enige getal | Voeteksbreedte in pixels wanneer `footer_full_width` `false` is |
| `footer_bottom_offset` | getal | Opsioneel | Enige getal | Afstand vanaf die onderkant van die bladsy in pixels (verstek: `16`) |
| `card_layout` | string | Opsioneel | `normal` (verstek indien nie in die afdelingsaansig nie), `large` (verstek in die afdelingsaansig), `large-2-rows`, `large-sub-buttons-grid` | Styluitleg van die kaart, sien [kaartuitlegte](#kaartuitlegte) |
| `rows` | getal | Opsioneel | Enige getal | Aantal rye (hoogte) (bv. `2`) |

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Voeteksbreedte wanneer `footer_full_width` `false` is |
| `--bubble-footer-bottom` | `px` | Onderste afstand van die voeteks |
| `--bubble-footer-box-shadow` | sien [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow vir die voetekshouer |

</details>

#### Voorbeelde

<details>

<summary>In die styl van chips (soos op die skermskoot)</summary>

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

<summary>'n Vaste voeteks-kieslys</summary>

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

## Subknoppies

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

In elke kaart wat daardie opsie ondersteun, kan jy subknoppies byvoeg om jou kaarte nog verder aan te pas. Jy kan byvoorbeeld 'n knoppie skep wat 'n stofsuier kan beheer, 'n weerkaart, of amper enigiets wat jy kan uitdink. Hierdie subknoppies ondersteun die tik-aksies en die meeste van die knoppie-opsies.

Subknoppies ondersteun nou drie tipes: **Verstek (knoppie)**, **Skuifbalk** en **Aftreklys / Keuselys**. Jy kan tipes in dieselfde kaart meng, subknoppies bo of onder plaas, en hulle in groepe organiseer vir meer gevorderde uitlegte.

#### Plasing en groepe van subknoppies

<details>

<summary><b>Subknoppie-struktuur (main / bottom + groepe)</b></summary>

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

**Notas:**
- `main` en `bottom` is twee onafhanklike afdelings. Onderste subknoppies word aan die onderkant van die kaart vasgemaak.
- `main_layout` en `bottom_layout` aanvaar `inline` (verstek) of `rows` om groepe vertikaal te stapel.
- Groepe is objekte met 'n `group`-lys en 'n opsionele `buttons_layout` (`inline` of `column`).
- `justify_content` is slegs vir **onderste groepe** beskikbaar (`start`, `center`, `end`, `fill`).
- Wanneer onderste subknoppies teenwoordig is, skakel die kaartuitleg outomaties oor na `large`, tensy jy uitdruklik 'n ander uitleg stel.
- Ou `sub_button`-lyste word steeds ondersteun en as die `main`-afdeling hanteer.

</details>

### Subknoppie-opsies

<details>

<summary><b>Opsies (YAML + beskrywing)</b></summary>

| Naam | Tipe | Vereiste | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- | --- |
| `entity` | string | Opsioneel | Enige entiteit | 'n Entiteit om te beheer |
| `name` | string | Opsioneel | Enige string | 'n Naam vir jou subknoppie, indien nie gedefinieer nie sal dit die entiteitnaam vertoon |
| `icon` | string | Opsioneel | Enige `mdi:`-ikoon | 'n Ikoon vir jou subknoppie, indien nie gedefinieer nie sal dit die entiteit se ikoon of die entiteitsprent vertoon |
| `force_icon` | boolean | Opsioneel | `true` of `false` (verstek) | Forseer die ikoon selfs al is 'n entiteitsprent beskikbaar |
| `sub_button_type` | string | Opsioneel | `default`, `slider` of `select` | Kies die subknoppietipe |
| `show_background` | boolean | Opsioneel | `true` (verstek) of `false` | Wys 'n agtergrond vir jou subknoppie, dit sal van kleur verander op grond van jou entiteit se toestand |
| `state_background` | boolean | Opsioneel | `true` (verstek) of `false` | Gebruik die toestandkleur wanneer die entiteit `on` is |
| `light_background` | boolean | Opsioneel | `true` (verstek) of `false` | Gebruik die ligkleur vir die agtergrond wanneer beskikbaar |
| `show_state` | boolean | Opsioneel | `true` of `false` (verstek) | Wys of versteek die toestand van jou `entity` |
| `show_name` | boolean | Opsioneel | `true` of `false` (verstek) | Wys of versteek die naam |
| `show_icon` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die ikoon |
| `show_last_changed` | boolean | Opsioneel | `true` of `false` (verstek) | Wys wanneer jou `entity` laas verander het |
| `show_last_updated` | boolean | Opsioneel | `true` of `false` (verstek) | Wys wanneer jou `entity` laas bygewerk is |
| `show_attribute` | boolean | Opsioneel | `true` of `false` (verstek) | Wys 'n attribuut van jou `entity` onder sy `name` |
| `attribute` | string | Opsioneel (vereis as `show_attribute` op `true` gestel is) | 'n Attribuut van jou `entity` | Die attribuut om te wys (bv. `brightness`) |
| `select_attribute` | string | Opsioneel | 'n Attribuutlys van jou `entity` (sien die ondersteunde opsies hierbo) | Hierdie attribuutlys sal 'n aftreklys oopmaak wanneer daarop geklik word (bv. `effect_list`) |
| `show_arrow` | boolean | Opsioneel | `true` (verstek) of `false` | Wys of versteek die aftreklys-pyltjie vir keuselys-subknoppies |
| `scrolling_effect` | boolean | Opsioneel | `true` (verstek) of `false` | Laat teks rol wanneer die inhoud groter as die houer is |
| `tap_action` | objek | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer op die subknoppie geklik word, indien ongedefinieer word `more-info` gebruik. |
| `double_tap_action` | objek | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer op die subknoppie gedubbelklik word, indien ongedefinieer word `none` gebruik. |
| `hold_action` | objek | Opsioneel | Sien [aksies](#tik--dubbeltik--en-hou-aksies) | Definieer die tipe aksie wanneer die subknoppie gehou word, indien ongedefinieer word `more-info` gebruik. |
| `fill_width` | boolean | Opsioneel | `true` of `false` | Vul die beskikbare breedte (verstek: `false` vir main, `true` vir bottom) |
| `width` | getal of string | Opsioneel | Enige getal of CSS-lengte | Pasgemaakte breedte (by verstek `px` vir die main-afdeling, `%` vir die bottom-afdeling) |
| `custom_height` | getal | Opsioneel | Enige getal | Pasgemaakte hoogte in pixels |
| `content_layout` | string | Opsioneel | `icon-left` (verstek), `icon-top`, `icon-bottom`, `icon-right` | Ikoonplasing binne die subknoppie |
| `always_visible` | boolean | Opsioneel | `true` of `false` (verstek) | **Slegs skuifbalk.** Wys die skuifbalk altyd in plaas daarvan om dit met 'n tik oop te maak |
| `show_button_info` | boolean | Opsioneel | `true` of `false` (verstek) | **Slegs skuifbalk.** Wys ikoon/naam/toestand wanneer `always_visible` geaktiveer is |
| `visibility` | objek of lys | Opsioneel | Sien [voorwaardes](#voorwaardes) | Wys of versteek die subknoppie op grond van voorwaardes |
| `hide_when_parent_unavailable` | boolean | Opsioneel | `true` of `false` (verstek) | Versteek die subknoppie as die ouerkaart se entiteit nie beskikbaar is nie |
| `css_class` | string | Opsioneel | Enige string | 'n Ekstra CSS-klas op die subknoppie, om dit in jou [style](#styl) te teiken ongeag sy naam (bv. `My value` gee `.my-value`) |

</details>

<details>

<summary><b>Opsies vir skuifbalk-subknoppies (dieselfde as knoppie-skuifbalke)</b></summary>

<br>

Skuifbalk-subknoppies ondersteun dieselfde skuifbalkopsies as knoppie-skuifbalke, insluitend:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-veranderlikes (sien <a href="#styl">Styl</a>)</b></summary>

| Veranderlike | Verwagte waarde | Beskrywing |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Randradius van die subknoppies |
| `--bubble-sub-button-background-color` | `color` | Agtergrondkleur van die subknoppies |
| `--bubble-sub-button-outline` | `box-shadow` | Omlyning wat by 'n subknoppie of 'n skuifbalk gevoeg word, net wanneer daardie element dieselfde kleur as die kaart daaragter verf, wat dit onsigbaar sou maak (stel dit op `none` om dit te verwyder) |
| `--bubble-sub-slider-border-radius` | `px` | Randradius van skuifbalk-subknoppies |
| `--bubble-sub-slider-background-color` | `color` | Agtergrondkleur van skuifbalk-subknoppies |
| `--bubble-sub-slider-height` | `px` | Hoogte van altyd sigbare skuifbalk-subknoppies |
| `--bubble-sub-slider-outline` | `box-shadow` | Omlyning van slegs die skuifbalk-subknoppies, val terug op `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Tekskleur op helder subknoppie-agtergronde |

</details>

#### Voorbeelde

<details>

<summary>'n Knoppie met 'n paar subknoppies om 'n stofsuierkaart te maak (soos op die skermskoot)</summary>

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

<summary>'n Skuifbalkknoppie met 'n subknoppie wat die helderheid wys en een wat die lig wissel (soos op die skermskoot)</summary>

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

<summary>'n Knoppie wat die binne- en buitetemperatuur wys, met die weer vir vandag en môre (skermskoot ingesluit)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Ongelukkig vir my is dit heeltyd bewolk, maar al die ikone verander op grond van die weer.

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

## Kaartuitlegte

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card ondersteun die Home Assistant-afdelingsaansig ten volle. Jy kan die kaartuitleg verander om die kaart groter te maak en ook die aantal kolomme of rye verander wat die kaart in jou afdelingsaansig moet beslaan (slegs op die kaarte wat daardie opsie ondersteun). Hierdie uitlegte word ook in alle ander aansigtipes ondersteun.

<details>

<summary><b>Beskikbare kaartuitlegte</b></summary>

| Uitleg | Beskrywing |
| --- | --- |
| `normal` | Die gewone uitleg (nie vir die afdelingsaansig geoptimaliseer nie) |
| `large` | 'n Groter uitleg wat aanpas by die gekose rye in die afdelingsaansig (geoptimaliseer vir die afdelingsaansig) |
| `large-2-rows` | 'n Groter uitleg met 2 rye subknoppies wat aanpas by die gekose rye in die afdelingsaansig (geoptimaliseer vir die afdelingsaansig) |
| `large-sub-buttons-grid` | Hierdie uitleg vertoon subknoppies in 'n rooster, `rows` moet op ten minste `2` gestel word.

</details>

#### Voorbeelde

<details>

<summary>'n Groot knoppie wat energiestatistieke wys met 2 rye subknoppies (skermkiekie ingesluit)</summary>

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

<summary>'n Groot knoppie met meerdere rye en 12 subknoppies</summary>

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

## Voorwaardes

Sommige opsies word deur voorwaardes gedryf, presies geskryf soos dié van die Home Assistant [voorwaardelike kaart](https://www.home-assistant.io/dashboards/conditional/):

- `visibility` op 'n [subknoppie](#subknoppies), om dit te wys of te versteek
- `trigger` op 'n [pop-up](#pop-up), om dit oop te maak wanneer aan die voorwaardes voldoen word
- `checkConditionsMet(conditions, hass)` binne jou [sjablone](#sjablone), wanneer jy die antwoord in jou eie kode nodig het

Elke voorwaardetipe van Home Assistant word geëvalueer: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, en die `and`-, `or`- en `not`-groepe. Die voorwaardes van die Home Assistant-voorwaardebouer werk ook, dié wat na hul domein vernoem is soos `sun.is_up`, `light.is_on`, `zone.in_zone` of `temperature.is_value`, met hul `target`-, `options`-, `behavior`- en `for`-instellings.

<details>

<summary><b>Voorbeeld</b></summary>

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
> Voorwaardes word in jou blaaier geëvalueer, dus kan die paar van hulle wat die Home Assistant-bediener nodig het nie presies wees nie: sonop en sononder word uit die `sun.sun`-entiteit gelees in plaas daarvan om herbereken te word, en 'n `for`-duur word vanaf die laaste toestandsverandering gemeet, sonder die recorder-geskiedenis.
>
> `view_columns` word aanvaar maar slaag altyd, aangesien Bubble Card nooit die een is wat die kolomme van jou aansig uitlê nie. 'n Voorwaardetipe wat Bubble Card nie ken nie meld homself een keer in jou blaaierkonsole aan in plaas daarvan om stil te misluk, sodat jy 'n tikfout van 'n ontbrekende funksie kan onderskei.

<br>

---

<br>

## Tik-, dubbeltik- en hou-aksies

Jy kan ook Home Assistant se verstek tik-aksies, dubbeltik-aksies en hou-aksies gebruik op die kaarte wat hierdie opsie ondersteun. Dit laat jou byvoorbeeld toe om die “Meer inligting”-venster te vertoon deur 'n knoppie-ikoon te hou, of om 'n diens uit te voer wanneer 'n subknoppie gedruk word.

**Let wel: Wanneer 'n `double_tap_action` gekonfigureer is, sal die gewone `tap_action` 'n vertraging van 200ms hê om die opsporing
van 'n dubbeltik moontlik te maak. As hierdie vertraging ongewens is, stel `double_tap_action` op `none` om die hantering van dubbeltikke te deaktiveer.**

### Aksie-opsies

<details>

<summary><b>Opsies (YAML + beskrywing)</b></summary>

| Naam | Tipe | Ondersteunde opsies | Beskrywing |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Aksie om uit te voer |
| `target` | object |  | Werk slegs met `call-service`. Volg die [home-assistant-sintaksis](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Enige pad van jou paneelbord | Pad om na toe te navigeer (bv. `'#kitchen'` om 'n opspringer oop te maak) wanneer die aksie as navigate gedefinieer is |
| `url_path` | string | Enige skakel | URL om oop te maak by 'n klik (bv. `https://www.google.com`) wanneer die aksie `url` is |
| `service` | string | Enige diens | Diens om te roep (bv. `media_player.media_play_pause`) wanneer `action` as `call-service` gedefinieer is |
| `data` of `service_data` | object | Enige diensdata | Diensdata om in te sluit (bv. `entity_id: media_player.kitchen`) wanneer `action` as `call-service` gedefinieer is |
| `confirmation` | object | Sien [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Vertoon 'n bevestigingsopspringer (nie 'n Bubble Card-een nie), oorskryf die verstek `confirmation`-objek |

</details>

#### Voorbeeld

<details>

<summary>'n Knoppie om 'n opspringer oop te maak</summary>

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

## Styl

Jy kan pasgemaakte style byvoeg om die CSS van alle kaarte te wysig, **sonder om card-mod te gebruik**, op vier maniere:

- Gaan in die redigeerder na die kaart wat jy wil wysig, navigeer dan na _Stylopsies > Pasgemaakte style en JS-sjablone_, en voeg jou pasgemaakte style by (kyk na die wenke en voorbeelde hieronder).
- Gaan in die redigeerder (of in [YAML](#modules)) na die kaart wat jy wil wysig, navigeer dan na _Modules_, en skep 'n nuwe module (dit sal vir alle kaarte beskikbaar wees), of gaan na die **Module Store** om enige beskikbare module te installeer (meer besonderhede oor modules is [hieronder](#modules) te vinde).
- In 'n [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes)-lêer deur CSS-veranderlikes in YAML by te voeg (hierdie is beskikbaar in elke kaart se dokumentasie hierbo). Dit maak globale wysigings moontlik.

  <details>
  
  <summary>Voorbeeld</a></summary>
  
  <br>

  Moenie die `Bubble:`-reël kopieer nie, dit is die naam van die tema wat jy gebruik. Jy moet ook die `--` van die veranderlikes verwyder.

  Jy moet die [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes)-aksie uitvoer om die tema na enige wysigings te verfris.

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
  
- In YAML deur `styles: |` by te voeg, gevolg deur jou pasgemaakte style (kyk na die wenke en voorbeelde hieronder).

> [!TIP]  
> **Om te verstaan watter stylklasse gewysig kan word**, kan jy na die [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards)-gids in hierdie bewaarplek kyk. In elke kaartgids sal jy 'n lêer met die naam `styles.css` vind. Hierdie lêers bevat al die toegepaste style. Dit bied baie meer moontlikhede as CSS-veranderlikes, maar dit moet afsonderlik by elke kaart gevoeg word.
> 
> Jy kan ook baie [voorbeelde van die gemeenskap](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) vind, of 'n paar op die [Home Assistant-forum](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) deur 'n bietjie te soek.
>
> Die Bubble-tema vir Home Assistant (soos op die skermkiekies) is [hier](https://github.com/Clooos/Bubble) te vinde.
>
> 'n Tutoriaalvideo kom binnekort op my [YouTube-kanaal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Let asseblief daarop dat jy dalk `!important;` moet byvoeg by sommige CSS-style wat reeds gedefinieer is (sien voorbeelde hieronder).

> [!TIP]  
> Subknoppies kan geteiken word met klasse gebaseer op hul naam. Byvoorbeeld, 'n subknoppie met die naam "My sub-button" kan gestileer word met `.my-sub-button`. Skuifbalk-subknoppies stel ook `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, ens. beskikbaar.
>
> 'n Naamgebaseerde klas verander wanneer jy 'n subknoppie hernoem, en dit word vertaal wanneer die naam vertaal word. Stel `css_class` op die subknoppie in om jou eie klas te kry wat nooit skuif nie, ongeag sy naam en ongeag die taal.

#### Voorbeelde

<details>

<summary>Die lettergrootte van enige Bubble Card verander</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Die agtergrondkleur van 'n enkele knoppie in 'n horisontale knoppiestapel verander</summary>

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

<summary>Die agtergrondkleur van 'n kaart verander</summary>

<br>

Hierdie een werk op alle Bubble Card-tipes (behalwe vir die opspringers):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Hierdie een doen dieselfde in slegs 'n knoppiekaart (dit werk vir die opspringerkopstuk): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Om die kleur te verander wanneer dit `on` is, kyk na die stylsjablone hieronder.

</details>

<details>

<summary>Die kleur van 'n knoppieskuifbalk verander</summary>

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

<summary>Die lynkleur van 'n skeier verander</summary>

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

<summary>Die kleur van 'n ikoon verander</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Vir 'n ikoon in 'n horisontale knoppiestapel.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Die agtergrondkleur van 'n ikoonhouer verander</summary>

<br>

Hierdie een werk op alle Bubble Card-tipes (behalwe vir die opspringers):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Hierdie een doen dieselfde vir die opspringerkopstuk: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Die grootte van die subknoppies verander (perfek vir die groot uitleg)</summary>

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

<summary>Die agtergrondkleur van die tweede subknoppie verander</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Die grootte van 'n ikoon verander</summary>

<br>

Vir die hoofikoon.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Vir die subknoppie-ikone.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>'n Prent eerder as 'n ikoon in 'n subknoppie gebruik</summary>

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

Laai net hierdie prent op in 'n “pictures”-gids (of die naam wat jy wil) in die Home Assistant-gids “www”.

</details>

<details>

<summary>Gevorderde voorbeeld: 'n Horisontale ry subknoppies skep (skermkiekie ingesluit)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ek is regtig lief vir hierdie een, ek gebruik dit as 'n kopstuk op my paneelbord.

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

## Sjablone

**Bubble Card ondersteun nie Jinja-sjablone nie**, maar gevorderde gebruikers kan sjablone in JS direk in hul [pasgemaakte style](#styl) byvoeg. Dit laat jou byvoorbeeld toe om 'n ikoon, die tekste of die kleure van 'n element dinamies te verander, om 'n element voorwaardelik te wys of te versteek (soos 'n subknoppie), of byna enigiets op grond van 'n toestand, 'n attribuut en meer.

> [!TIP]  
> Meer inligting oor JS-sjablone [hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). My raad is om **altyd na jou blaaierkonsole te kyk** om seker te maak dat alles korrek werk.

> [!IMPORTANT]  
> **Alle sjablone wat nie 'n CSS-eienskap wysig nie, moet aan die einde geplaas word! Soos die wysiging van 'n ikoon, 'n teks of enige element.**

#### Beskikbare veranderlikes en funksies

<details>

<summary>Veranderlikes</summary>

<br>

Jy het toegang tot hierdie veranderlikes in die meeste kaarte:

- `state` gee die toestand van jou gedefinieerde `entity` terug.
  
- `entity` gee die entiteit terug wat jy gedefinieer het, soos `switch.test` in hierdie voorbeeld.
  
- `icon` kan so gebruik word om die ikoon te verander: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` gee die toestand terug van die `entity` wat vir jou eerste subknoppie gedefinieer is, `[0]` is die eerste subknoppie se toestand, `[1]` die tweede...
  
- `subButtonIcon[0]` kan so gebruik word om die eerste subknoppie se ikoon te verander: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` is die eerste subknoppie se ikoon, `[1]` die tweede...
  
- `card` gee die kaartelement in die DOM terug.
  
- `hass` is 'n gevorderde veranderlike wat jou nog meer beheer gee, jy kan byvoorbeeld die toestand van `light.kitchen` so terugkry: `hass.states['light.kitchen'].state`, of 'n attribuut so: `hass.states[entity].attributes.brightness`.

- `this` gee baie nuttige inligting oor jou opstelling en paneelbord terug, gebruik dit slegs as jy weet wat jy doen.

</details>

<details>

<summary>Funksies</summary>

<br>

Jy het toegang tot al die globale JS-funksies, maar jy het ook toegang tot:

- `getWeatherIcon` kan gebruik word om 'n weerikoon terug te gee op grond van 'n toestand wat die weer teruggee. Jy kan byvoorbeeld dit doen: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` om die derde subknoppie se ikoon na vandag se weerikoon te verander, `.forecast[1]?.condition` is vir môre...

  Jy sal daarvoor 'n sjabloonsensor moet skep. Hier is wat jy in jou `configuration.yaml` kan byvoeg:
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
- `checkConditionsMet(conditions, hass)` gee `true` terug wanneer aan 'n lys [voorwaardes](#voorwaardes) voldoen word, byvoorbeeld `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` kan gebruik word om 'n toestand te vertaal (Kan ook gebruik word om 'n toestand se eenheid te kry, sonder om dit handmatig by te voeg).
- `hass.formatEntityAttributeValue(state, "attribute")` kan gebruik word om 'n attribuut te vertaal (Kan ook gebruik word om 'n toestand se eenheid te kry, sonder om dit handmatig by te voeg).

</details>

#### Voorbeelde

Jy kan baie voorbeelde hieronder vind, maar jy kan ook baie gevorderde sjablone op my [Patreon-bladsy](https://www.patreon.com/c/Clooos) vind, soos een (my gunsteling) wat tot vier voorwaardelike kentekens rondom die kaart se ikone moontlik maak. Dit is ook 'n uitstekende manier om al die moontlikhede van Bubble Card se pasgemaakte style en sjablone te leer ken!

<details>
<summary>Voorbeelde van my Patreon-bladsy</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Voorbeeld 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Voeg Home Assistant-agtige kentekens by enige kaart</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Voorbeeld 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Wys geformateerde datum en tyd in 'n skeier sonder om enige entiteit te gebruik</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Voorbeeld 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Wys 'n subknoppie se toestand op twee reëls</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Voorbeeld 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Pas etikette en ikone binne 'n keuse-subknoppie aan</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Voorbeeld 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Voeg 'n blywende herinnering-opspringer by wat slegs verskyn wanneer nodig</a>
</p>

<br>

</details>

<details>

<summary>Verander die agtergrondkleur van 'n knoppie sodat dit rooi is wanneer dit <code>off</code> is en blou wanneer dit <code>on</code> is</summary>

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

<summary>Verander die agtergrondkleur van 'n knoppie op grond van 'n entiteit vir die horisontale knoppiestapel</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Wys/versteek 'n subknoppie voorwaardelik</summary>

<br>

Hierdie een wys die eerste subknoppie slegs wanneer my stofsuier vasgeval is.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Hierdie een wys 'n subknoppie wanneer die battery onder 10% is. Nuttig saam met 'n subknoppie wat "Battery byna pap" wys.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Verander 'n ikoon of subknoppie-ikoon voorwaardelik</summary>

<br>

Hierdie een verander 'n knoppie se ikoon slegs wanneer 'n stofsuier vasgeval is.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Hierdie een verander die eerste subknoppie se ikoon slegs wanneer 'n stofsuier vasgeval is.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Verander die kleur van 'n ikoon of subknoppie-ikoon voorwaardelik</summary>

<br>

Hierdie een verander 'n knoppie-ikoon se kleur op grond van sy toestand.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Hierdie een verander 'n subknoppie-ikoon se kleur op grond van sy toestand. `.bubble-sub-button-1` is die eerste subknoppie, vervang `1` as jy 'n ander subknoppie se ikoon wil verander.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animeer 'n waaier-ikoon voorwaardelik</summary>

<br>

Hierdie een laat 'n knoppie se ikoon draai wanneer 'n waaier `on` is.
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

<summary>Sjablone vir tekste (soos naam of toestand)</summary>

<br>

Hierdie een verander 'n knoppie se naam/toestand na "It's currently sunny" afhangend van jou weer.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
of wanneer dit op subknoppies toegepas word:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


As jy 'n sjabloon vir die toestand (`.bubble-state`) wil gebruik, moenie `show_state: true` aanskakel nie, skakel net `show_attribute: true` aan sonder enige attribuut.

</details>

<details>

<summary>Gevorderde voorbeeld: Verander die kleur van 'n subknoppie wanneer 'n opspringer oop is</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Gevorderde voorbeeld: 'n Sjabloon vir 'n skeiernaam op grond van 'n toestand wat na jou taal vertaal is</summary>

<br>

Jy kan `hass.formatEntityState(state)` gebruik om 'n toestand te vertaal en `hass.formatEntityAttributeValue(state, "attribute")` om 'n attribuut te vertaal.

Hierdie een verander die naam en die ikoon op grond van die weer, "Nuageux" beteken "Bewolk" in Frans.

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

## Modules

Modules is 'n kragtige funksie waarmee jy jou pasgemaakte style en sjablone kan stoor, hergebruik en deel oor al jou Bubble Cards heen. In plaas daarvan om dieselfde kode in verskeie kaarte te kopieer en te plak, kan jy 'n module skep en dit toepas waar jy dit ook al nodig het. Dit maak die bestuur van jou paneelbord se voorkoms baie makliker en doeltreffender.

Maar hierdie funksie is soveel kragtiger as dit, dit laat jou toe om self werklike funksies in die Bubble Card-redigeerder by te voeg, met al die verstek [Home Assistant-vorm](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)-opsies!  
Die objekkieser is verbeter om veranderinge lewendig te wys en om attribute korrek te ondersteun.

'n Module kan ook op die Home Assistant-kaartkieser antwoord langs die ingeboude [entiteitvoorstelle](#entiteitvoorstelle): gebruik `suggestions` vir die kaarte wat dit vooraf kan beskryf, en `suggestions_code` wanneer hulle uit jou opstelling bereken moet word, byvoorbeeld 'n pop-up wat uit elke entiteit gebou word van die area waaraan die gekose entiteit behoort. Albei sleutels word [hier](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) gedokumenteer.

Jy kan ook deur die **Module Store** blaai om [modules wat deur die gemeenskap geskep is](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) te vind en te installeer, of jou eie skeppings deel!

> [!TIP]
> 'n Module se kode werk presies dieselfde as die kode in die `styles`-afdeling van 'n kaart. Al dieselfde veranderlikes en funksies uit die [Sjablone](#sjablone)-afdeling is beskikbaar.

<br>

### Aanvanklike opstelling

> [!IMPORTANT]
> Vanaf v3.1.0 is Bubble Card Tools die aanbevole stoorplek vir modules. Die ou sjabloonsensormetode werk steeds vir bestaande opstellings, maar nuwe modules en Module Store-funksies word die beste via Bubble Card Tools ondersteun.

Die Bubble Card Tools-integrasie aktiveer die moduleredigeerder en die Module Store, en stoor modules as individuele YAML-lêers. Bestaande modules word outomaties gemigreer.

Die installasie- en konfigurasiestappe word hier verduidelik:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Die moduleredigeerder

Jy kan toegang tot die moduleredigeerder kry vanuit enige kaart se instellings, onder die **Modules**-afdeling. Die redigeerder bied twee hoofoortjies:

#### My modules-oortjie

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Hierdie oortjie wys al jou geïnstalleerde modules en laat jou toe om:

- Bestaande modules op die huidige kaart **toe te pas**
- 'n Nuwe module van nuuts af te **skep**
- Bestaande modules met 'n lewendige voorskou te **redigeer**
- Modules wat jy nie meer nodig het nie **uit te vee**
- Modules te **soek** en te **sorteer** (alfabeties, onlangs, aktief eerste)
- **Globale status te stel** sodat 'n module outomaties op alle kaarte toegepas word
- Modules **in/uit te voer** vir rugsteun of om te deel
- **Entiteitvoorstelle te skryf** in die module-redigeerder, onder **Opsioneel: entiteitvoorstelle**, sodat jou module in die Home Assistant-kaartkieser aangebied word. Beide die reëls en die berekende voorstelle word nagegaan terwyl jy skryf, 'n fout daar verhoed stoor, en die voorskou wys die voorgestelde kaarte vir enige entiteit wat jy kies

#### Module Store-oortjie

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Hierdie oortjie vertoon [al die beskikbare modules van die gemeenskap](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), en laat jou toe om:

- Deur al die modules wat deur die gemeenskap geskep is te **blaai**
- Modules te **soek** en te filtreer volgens naam, versoenbaarheid of sleutelwoorde
- Modules met een klik te **installeer**
- Geïnstalleerde modules **by te werk** wanneer nuwe weergawes beskikbaar is

> [!TIP]
> In die redigeerder kan jy nie-ondersteunde modules aktiveer om modules te toets wat nog nie as versoenbaar met 'n gegewe kaarttipe gemerk is nie.

<br>

### Hoe om modules te gebruik

#### Skep 'n nuwe module

<details>

<summary>Klik om uit te vou</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gaan na enige kaart se redigeerder en vou die **Modules**-afdeling uit.
2. Klik op **Skep nuwe module**.
3. Vul die module-inligting in.
4. Skryf jou CSS- en/of JavaScript-sjabloonkode in die **Kode**-redigeerder.
5. (Opsioneel) Skep 'n pasgemaakte konfigurasiekoppelvlak in die **Redigeerder**-afdeling (soos die kleurkieser in die skermkiekie hierbo, volledige dokumentasie beskikbaar [hier](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Opsioneel) Skryf jou **Entiteitvoorstelle** sodat jou module in die Home Assistant-kaartkieser aangebied word. Die paneel gaan na wat jy skryf terwyl jy tik, en sy voorskou wys die voorgestelde kaarte self vir die entiteit van jou keuse.
7. Klik op **Stoor**.

Jou module is nou beskikbaar om op enige van jou kaarte gebruik te word!

<br>

</details>

#### Pas 'n module op 'n kaart toe

<details>

<summary>Klik om uit te vou</summary>

<br>

- **Via die redigeerder:**

  - Gaan na die redigeerder van die kaart waarop jy die module wil toepas.
  - Vou die **Modules**-afdeling uit.
  - Klik op die module wat jy uit die lys wil toepas.
  - Klik onder "Pas toe op" op "Hierdie kaart". Die module is nou aktief. Jy kan verskeie modules op dieselfde kaart toepas.

- **Via YAML:**

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

#### Pas 'n module globaal toe

<details>

<summary>Klik om uit te vou</summary>

<br>

Jy kan 'n module instel om outomaties op alle Bubble Cards toegepas te word:

**Dit is nie beskikbaar vir modules met 'n redigeerder nie, aangesien dié 'n spesifieke konfigurasie nodig het om te werk.**

- **Via die redigeerder:**

  - Vind jou module in die moduleredigeerder in die **My modules**-oortjie.
  - Skakel die **Alle kaarte**-knoppie langs die modulenaam aan.
  - Die module sal nou outomaties op alle kaarte toegepas word.
 
- **Via YAML:**

  Voeg net `is_global: true` by in jou module se YAML-konfigurasie (in `bubble-modules.yaml`).

<br>

</details>

#### Sluit 'n enkele kaart uit van 'n globale module

<details>

<summary>Klik om uit te vou</summary>

<br>

As jy 'n globale module het, maar dit van 'n spesifieke kaart wil uitsluit:

- **Via die redigeerder:**
  
  - In die kaart se **Modules**-afdeling sal jy die globale modules gelys sien.
  - Klik op 'n globale module en deaktiveer "Hierdie kaart" om dit van hierdie spesifieke kaart uit te sluit.

- **Via YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Deel jou module in die Module Store

<details>

<summary>Klik om uit te vou</summary>

<br>

Om jou module in die Module Store te deel, klik in die moduleredigeerder, heel onder in "Voer module uit", op "Kopieer vir GitHub" en plak die inhoud in 'n nuwe bespreking in die [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)-kategorie. **Redigeer die beskrywing** (indien nodig), **die voorbeeld** (vir YAML-gebruikers), en onthou om **ten minste een skermkiekie** vir die Module Store **in te sluit**.

**Jou module word direk daarna beskikbaar** (na 'n verversing van die Store), dubbelkontroleer dus dat alles korrek geskryf is en dat die module werk soos verwag. Jy kan die module natuurlik redigeer/bywerk nadat dit gedeel is.

<br>

</details>

#### Weergawebestuur

<details>

<summary>Klik om uit te vou</summary>

<br>

Die Module Store kontroleer outomaties vir bywerkings van geïnstalleerde modules. Wanneer bywerkings beskikbaar is:

1. Sal jy 'n bywerkingsaanwyser in die **Module Store**-oortjie sien.
2. Klik op **Werk by** in modules met beskikbare bywerkings.
3. Bevestig die bywerking in die Module Store.

<br>

</details>

#### Definieer ondersteunde kaarttipes

<details>

<summary>Klik om uit te vou</summary>

<br>

Sommige modules is dalk nie met alle kaarttipes versoenbaar nie. Jy kan spesifiseer watter kaarte 'n module ondersteun.  
As jy wil hê 'n module moet met **alle kaarte** versoenbaar wees, laat eenvoudig die `supported`-veld weg (of gebruik die **Alle kaarte**-opsie in die redigeerder).

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

### Voorbeelde

<details>
<summary>Eenvoudige stylmodule</summary>

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
<summary>Module met pasgemaakte konfigurasie</summary>

<br>

Hierdie module is [hier](https://github.com/Clooos/Bubble-Card/discussions/1231) beskikbaar.

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

Meer voorbeelde kan in die Module Store gevind word, of [hier](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalisering

Bubble Card praat jou taal. Sy redigeerder is vertaal in die 64 tale wat Home Assistant ondersteun, en oral waar Home Assistant reeds 'n woord vir iets het, word sy eie bewoording hergebruik, sodat jy dieselfde terme in albei koppelvlakke lees.

Onderaan die redigeerder, langs die weergawenommer, volg 'n **Outomaties**-skakelaar jou Home Assistant-taal. Skakel dit af en die hele redigeerder gaan terug na Engels, wat handig is om 'n tutoriaal te volg of om 'n probleem aan te meld. Jou keuse word in jou blaaier onthou.

Hierdie dokumentasie is ook vertaal, [in 62 tale](languages.md), almal behalwe Britse Engels, wat die oorspronklike lees. Daardie bladsye is vir almal oop, dus kan 'n bewoording wat nie by jou eie Home Assistant pas nie in 'n paar kliks reggemaak word. Die Engelse weergawe bly die verwysing vir die inhoud self.

<br>

---

<br>

## Hulp

Maak gerus 'n probleemmelding oop as iets nie werk soos verwag nie. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Het jy vrae of gedagtes oor Bubble Card? Wil jy jou paneelborde of ontdekkings deel? Jy kan na die Home Assistant-forum gaan, na die Bubble Card-subreddit of na die GitHub Discussions-afdeling.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bydraes

Bydraes is welkom! Of dit nou foutregstellings, nuwe funksies, vertalings of verbeterings aan die dokumentasie is, maak gerus 'n pull request oop.

Lees asseblief eers die [ontwikkelaarsgids](DEVELOPERS.md) voordat jy begin. Dit dek hoe om jou plaaslike omgewing op te stel, die projek te bou en jou veranderings te toets.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Skenk

Ek wy die meeste van my vrye tyd daaraan om hierdie projek so goed as moontlik te maak. As jy my werk waardeer, sou enige skenking 'n wonderlike manier wees om jou ondersteuning te wys 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Dankie aan almal vir julle ondersteuning, julle is my grootste motivering!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
