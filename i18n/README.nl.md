<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Deze pagina is een automatische vertaling. Bij twijfel geldt de [originele Engelse documentatie](../README.md). Leest een zin krom? Alle hulp is welkom, en [deze pagina verbeteren](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.nl.md) kost maar een minuut: GitHub regelt de fork en de pull request. Alvast bedankt! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lees dit in een andere taal](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card is een minimalistische en aanpasbare kaartcollectie voor Home Assistant, met moderne pop-ups en een geïntegreerde Module Store met meer dan 100 door de community gemaakte modules.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Inhoudsopgave

**[`Installatie`](#installatie)**  **[`Configuratie`](#configuratie)**  **[`Pop-up`](#pop-up)**  **[`Horizontale knoppenstack`](#horizontale-knoppenstack)**  **[`Knop`](#knop)**  **[`Mediaspeler`](#mediaspeler)**  **[`Zonwering`](#zonwering)**  **[`Select`](#select)**  **[`Klimaat`](#klimaat)**  **[`Agenda`](#agenda)**  **[`Scheidingslijn`](#scheidingslijn)**  **[`Lege kolom`](#lege-kolom)**  **[`Alleen subknoppen`](#alleen-subknoppen)**  **[`Subknoppen`](#subknoppen)**  **[`Kaartlay-outs`](#kaartlay-outs)**  **[`Acties`](#tik--dubbeltik--en-vasthoudacties)**  **[`Stijl`](#stijl)**  **[`Sjablonen`](#sjablonen)**  **[`Modules`](#modules)**  **[`Hulp`](#hulp)**  **[`Bijdragen`](#bijdragen)**  **[`Doneren`](#doneren)**

<br>

## Installatie

**Laagst ondersteunde versie van Home Assistant:** 2023.9.0

<details>

<summary>Zonder HACS</summary>

<br>

1. Download dit bestand: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Voeg dit bestand toe aan je map `<config>/www`
3. Klik op je dashboard rechtsboven op het pictogram en dan op `Dashboard bewerken`
4. Klik opnieuw op dat pictogram en klik dan op `Bronnen beheren`
5. Klik op `Bron toevoegen`
6. Kopieer en plak dit: `/local/bubble-card.js?v=1`
7. Klik op `JavaScript-module` en dan op `Aanmaken`
8. Ga terug en vernieuw je pagina
9. Je kunt nu rechtsonder op `Kaart toevoegen` klikken en zoeken naar `Bubble Card`
10. Na elke update van het bestand moet je `/local/bubble-card.js?v=1` bewerken en het versienummer verhogen

Als het niet werkt, probeer dan gewoon je browsercache te legen.

</details>

<details>

<summary>Met HACS (Aanbevolen)</summary>

<br>

Met deze methode krijg je updates rechtstreeks via de Home Assistant Community Store

1. Als HACS nog niet is geïnstalleerd, download het dan via de instructies op [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Doorloop de initiële configuratie van HACS via de instructies op [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Ga in je zijbalk naar "HACS"
4. Zoek naar "Bubble Card", of klik op de blauwe knop hieronder
5. Klik op "Download"
6. Ga terug naar je dashboard en klik rechtsboven op het pictogram en dan op `Dashboard bewerken`
7. Je kunt nu rechtsonder op `Kaart toevoegen` klikken en zoeken naar `Bubble Card`

Als het niet werkt, probeer dan je browser- of appcache te legen (indien nodig op al je apparaten).

#### Video's

Je kunt ook een kijkje nemen op mijn YouTube-kanaal voor stapsgewijze video's.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configuratie

Alle opties kunnen worden geconfigureerd in de editor van Home Assistant. Maar hieronder vind je meer details en de YAML in de documentatie.

<details>

<summary><b>Hoofdopties (YAML + beschrijving)</b></summary>

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `type` | string | **Vereist** | `custom:bubble-card` | Type van de kaart |
| `card_type` | string | **Vereist** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` of `sub-buttons` | Type van de Bubble Card, zie hieronder |
| `styles` | object list | Optioneel | Elk CSS-stylesheet | Hiermee kun je de CSS van je Bubble Card aanpassen, zie [Stijl](#stijl) |

</details>

<details>

<summary><b>Globale CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Randradius voor alle ondersteunde elementen |
| `--bubble-main-background-color` | `color` | Hoofdachtergrondkleur voor alle ondersteunde elementen |
| `--bubble-secondary-background-color` | `color` | Secundaire achtergrondkleur voor alle ondersteunde elementen |
| `--bubble-accent-color` | `color` | Accentkleur voor alle ondersteunde elementen |
| `--bubble-icon-border-radius` | `px` | Randradius van het pictogram voor alle ondersteunde elementen |
| `--bubble-icon-background-color` | `color` | Achtergrondkleur van het pictogram voor alle ondersteunde elementen |
| `--bubble-sub-button-border-radius` | `px` | Randradius voor alle subknoppen |
| `--bubble-sub-button-background-color` | `color` | Achtergrondkleur voor alle subknoppen |
| `--bubble-box-shadow` | zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boxschaduw voor alle ondersteunde elementen |
| `--bubble-border` | zie [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Rand voor alle ondersteunde kaarten |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bekijk deze [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) om meer te leren over Bubble Card en zijn mogelijkheden.** Mijn YouTube-kanaal is nog vrij nieuw en richt zich op tutorials over Home Assistant en Bubble Card. Aarzel niet om je te abonneren, dat helpt om de zichtbaarheid van mijn kanaal te vergroten. Alvast bedankt!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Met deze kaart kun je een pop-up met willekeurige inhoud maken. Elke pop-up is **standaard verborgen** en kan worden geopend door naar zijn link te verwijzen (bijv. `'#pop-up-name'`), met elke kaart die de [actie](#tik--dubbeltik--en-vasthoudacties) `navigate` ondersteunt, of met de meegeleverde [horizontale knoppenstack](#horizontale-knoppenstack).

> [!TIP]
> ### Pop-uptrigger 
> Met deze functie kun je een pop-up openen op basis van de status van elke entiteit, bijvoorbeeld je kunt een pop-up "Beveiliging" openen met een camera wanneer er iemand voor je huis staat. Je kunt ook een schakelhelper (input_boolean) maken en het openen/sluiten ervan activeren in een automatisering.
> <details>
> <summary>Een pop-up openen wanneer een <code>binary_sensor</code> <code>on</code> is</summary>
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
> ### Verschillende manieren om een pop-up te sluiten 
> Er zijn veel manieren om een pop-up te sluiten. Je kunt bijvoorbeeld vanaf de koptekst van de pop-up naar beneden vegen, door binnen in de pop-up een lange veegbeweging naar beneden te maken, door op Escape te drukken op desktop, door de hash in de URL te verwijderen of door simpelweg op de sluitknop te klikken.
>


### Pop-upopties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `hash` | string | **Vereist** | Elke unieke hash (bijv. `'#kitchen'`) met ' ' | Hiermee open je je pop-up |
| `popup_style` | string | Optioneel | `bubble` (standaard) of `classic` | Bepaalt de visuele stijl van de pop-up |
| `popup_mode` | string | Optioneel | `default` (standaard), `fit-content`, `centered` of `adaptive-dialog` | Bepaalt de lay-outmodus van de pop-up |
| `with_bottom_offset` | boolean | Optioneel | `true` of `false` (standaard) | Alleen gebruikt met `popup_mode: fit-content` of `adaptive-dialog`. Past een onderste marge toe op mobiel, handig wanneer je dashboard een voettekstkaart bevat. |
| `full_width_on_mobile` | boolean | Optioneel | `true` of `false` (standaard) | Alleen gebruikt met `popup_mode: centered`. Vergroot de pop-up naar de volledige schermbreedte op mobiel, handig op kleinere schermen. |
| `performance_mode` | string | Optioneel | `default` (standaard) of `performance` | Optimaliseert de openingsanimatie van de pop-up. `performance` vertraagt het renderen van de inhoud en de achtergrondvervaging iets, en schakelt ook de backdrop-vervaging uit als die is ingesteld. |
| `auto_close` | string | Optioneel | Een timeout in milliseconden (bijv. `10000` voor 10s) | Sluit de pop-up automatisch na een timeout |
| `close_on_click` | boolean | Optioneel | `true` of `false` (standaard) | Sluit de pop-up automatisch na elke interactie |
| `close_by_clicking_outside` | boolean | Optioneel | `true` (standaard) of `false` | Sluit de pop-up door erbuiten te klikken |
| `width_desktop` | string | Optioneel | Elke CSS-waarde | Breedte op desktop (standaard `100%` op mobiel) |
| `margin` | string | Optioneel | Elke CSS-waarde | Gebruik dit **alleen** als je pop-up niet goed gecentreerd is op mobiel (bijv. `13px`) |
| `margin_top_mobile` | string | Optioneel | Elke CSS-waarde | Bovenmarge op mobiel (bijv. `-56px` als je koptekst verborgen is) |
| `margin_top_desktop` | string | Optioneel | Elke CSS-waarde | Bovenmarge op desktop (bijv. `50vh` voor een pop-up met halve hoogte of `calc(100vh - 400px)` voor een vaste hoogte van `400px`) |
| `bg_color` | string | Optioneel | Elke hex-, rgb- of rgba-waarde | De achtergrondkleur van je pop-up (bijv. `#ffffff` voor een witte achtergrond) |
| `bg_opacity` | string | Optioneel | Elke waarde van `0` tot `100` | De achtergrondopaciteit van je pop-up (bijv. `100` voor geen transparantie) |
| `bg_blur` | string | Optioneel | Elke waarde van `0` tot `100` | Het achtergrondvervagingseffect van je pop-up, **dit werkt alleen als `bg_opacity` niet is ingesteld op `100`** (bijv. `0` voor geen vervaging)|
| `shadow_opacity` | string | Optioneel | Elke waarde van `0` tot `100` | De schaduwopaciteit van je pop-up (bijv. `0` om die te verbergen) |
| `hide_backdrop` | boolean | Optioneel | `true` of `false` (standaard) | Zet dit op true bij de eerste pop-up van je hoofddashboard om de backdrop op alle pop-ups uit te schakelen. |
| `background_update` | boolean | Optioneel | `true` of `false` (standaard) | Werk de inhoud van de pop-up op de achtergrond bij (niet aanbevolen) |
| `trigger_entity` | string | Optioneel | Elke entiteit | Open deze pop-up op basis van de status van elke entiteit |
| `trigger_state` | string | Optioneel (**Vereist** als `trigger_entity` is ingesteld) | Elke entiteitsstatus | Entiteitsstatus om de pop-up te openen |
| `trigger_close` | boolean | Optioneel | `true` of `false` (standaard) | Sluit de pop-up wanneer `trigger_state` afwijkt |
| `open_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Activeert een actie wanneer de pop-up wordt geopend |
| `close_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Activeert een actie wanneer de pop-up wordt gesloten |
| `show_header` | boolean | Optioneel | `true` (standaard) of `false` | De koptekst van de pop-up volledig tonen/verbergen |
| `show_previous_button` | boolean | Optioneel | `true` of `false` (standaard) | Toon een terugknop naast de sluitknop en navigeer terug naar de vorige pop-up indien beschikbaar |
| `show_close_button` | boolean | Optioneel | `true` (standaard) of `false` | Toon of verberg de sluitknop terwijl de rest van de koptekst zichtbaar blijft |
| `buttons_position` | string | Optioneel | `right` (standaard) of `left` | Positie van de sluit- en terugknop in de koptekst |
| `cards` | list | Optioneel | Elke Bubble Card, Home Assistant-kaart of aangepaste kaart | Bepaalt de inhoud van je pop-up. Zie het voorbeeld van de pop-up hieronder. |
| Je hebt ook toegang tot [alle knopinstellingen](#knop) voor de koptekst van de pop-up. | | Optioneel | | Als dit niet is ingesteld wordt er geen koptekst getoond |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Randradius voor de pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Hoofdachtergrondkleur voor ondersteunde elementen van de pop-up |
| `--bubble-pop-up-background-color` | `color` | Achtergrondkleur van de pop-up |
| `--bubble-backdrop-background-color` | `color` | Achtergrondkleur voor de backdrop |
| Je hebt ook toegang tot [alle CSS-variabelen van de knop](#knopopties) voor de koptekst van de pop-up. | | |

</details>


### Standalone pop-upformaat (v3.2.0+)

Sinds v3.2.0 gebruiken pop-ups een nieuw standalone formaat waarbij inhoudskaarten rechtstreeks binnen de pop-up worden gedefinieerd via de optie `cards`. Dit zorgt voor betere prestaties en een nieuwe, op secties gebaseerde bewerkervaring met slepen en neerzetten.


#### Voorbeelden

<details>

<summary>Een pop-up (standalone formaat)</summary>

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

<summary>Een knop om de pop-up te openen</summary>

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

## Horizontale knoppenstack

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Deze kaart is een goede aanvulling op de pop-up kaart, waarmee je de bijbehorende pop-ups kunt openen. Je kunt er ook elke pagina van je dashboard mee openen. Daarnaast kun je je bewegings/aanwezigheidssensoren toevoegen, zodat de volgorde van de knoppen zich aanpast aan de kamer waar je net binnenkomt. Deze kaart is scrollbaar, blijft zichtbaar en fungeert als voettekst.

> [!IMPORTANT]  
> Deze kaart moet de laatste zijn in je weergave (na elke kaart en pop-up). Ze kan niet in een stack zitten.

### Opties van de horizontale knoppenstack

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Verplicht** | De pop-up hash (bijv. `'#kitchen'`) met ' ' of een willekeurige link | Een link om te openen |
| `1_name` | string | Optioneel | Elke tekenreeks | Een naam voor je knop |
| `1_icon` | string | Optioneel | Elk `mdi:` pictogram | Een pictogram voor je knop |
| `1_entity` | string | Optioneel | Elke lamp of lichtgroep | Toont de kleur van die lamp als achtergrond |
| `1_pir_sensor` | string | Optioneel | Elke binaire sensor | Minstens één pir-sensor of meer voor `auto_order`, in feite werkt het ook met elk type entiteit, je kunt bijvoorbeeld lichtgroepen toevoegen en de volgorde verandert op basis van de laatst gewijzigde status. |
| `auto_order` | boolean | Optioneel | `true` of `false` (standaard) | Wijzigt de volgorde van de knoppen op basis van het laatste wijzigingstijdstip van `_pir_sensor`, **dit moet `false` zijn als je geen `_pir_sensor` in je code hebt** |
| `margin` | string | Optioneel | Elke CSS-waarde | Gebruik dit **alleen** als je `horizontal-buttons-stack` niet goed gecentreerd is op mobiel (bijv. `13px`) |
| `width_desktop` | string | Optioneel | Elke CSS-waarde | Breedte op desktop (`100%` standaard op mobiel) |
| `is_sidebar_hidden` | boolean | Optioneel | `true` of `false` (standaard) | Corrigeert de positie van de horizontale knoppenstack als de zijbalk verborgen is op desktop (alleen als je zelf een aanpassing hebt gedaan om ze te verbergen) |
| `rise_animation` | boolean | Optioneel | `true` (standaard) of `false` | Zet dit op `false` om de animatie uit te schakelen die start zodra de pagina is geladen |
| `highlight_current_view` | boolean | Optioneel | `true` of `false` (standaard) | Markeert de huidige hash/weergave met een vloeiende animatie |
| `hide_gradient` | boolean | Optioneel | `true` of `false` (standaard) | Zet dit op `false` om het kleurverloop te verbergen |

> [!IMPORTANT]  
> De variabelen die met een cijfer beginnen, definiëren je knoppen, verander gewoon dit cijfer om meer knoppen toe te voegen (zie het voorbeeld hieronder).

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Randradius voor de knoppen van de horizontale knoppenstack |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Achtergrondkleur voor de knoppen van de horizontale knoppenstack |

</details>


#### Voorbeeld

<details>

<summary>Een horizontale knoppenstack die zichzelf herschikt op basis van aanwezigheidssensoren</summary>

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

## Knop

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Deze kaart is erg veelzijdig. Je kunt hem gebruiken als **schakelaar**, **slider**, **status** of **naam/tekst** knop.

> [!TIP]
> ### Wat zijn de verschillen tussen alle knoptypen?
>
> - **Schakelaarknop:** Dit is het standaardknoptype. Standaard schakelt hij een entiteit om en verandert zijn achtergrondkleur op basis van de status van de entiteit of de kleur van een lamp. Je kunt de actie wijzigen in het gedeelte **Tikactie op kaart**.
>
> - **Sliderknop:** Met dit knoptype bedien je entiteiten met instelbare bereiken. Ideaal om lampen te dimmen, en de vulkleur past zich aan de kleur van de lamp aan. Je kunt hem ook gebruiken om waarden weer te geven, zoals een batterijniveau.
>   Ondersteunde entiteiten voor sliders:
>   - Lamp (helderheid)
>   - Mediaspeler (volume)
>   - Zonwering (positie)
>   - Ventilator (percentage)
>   - Klimaat (temperatuur)
>   - Input number en number (waarde)
>   - Batterijsensor (percentage, alleen-lezen)
>
>   Je kunt ook elke entiteit met een numerieke status gebruiken door het entiteitsfilter uit te schakelen in **Sliderinstellingen**, en daarna de waarden `min` en `max` te definiëren. Deze optie is alleen-lezen.
>
> - **Statusknop:** Perfect om informatie van een sensor of elke andere entiteit weer te geven. Als je erop drukt, verschijnt het "Meer info" paneel van de entiteit. De achtergrondkleur verandert niet.
>
> - **Naam/Tekstknop:** Het enige knoptype dat geen entiteit nodig heeft. Hiermee kun je een korte tekst, een naam of een titel weergeven. Je kunt er ook acties aan toevoegen. De achtergrondkleur verandert niet.

### Knopopties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `entity` | string | **Verplicht** | Elke entiteit | Een entiteit om te bedienen |
| `button_type` | string | Optioneel | `switch` (standaard), `slider`, `state` of `name` | Het gedrag van je knop |
| `name` | string | Optioneel | Elke tekenreeks | Een naam voor je knop, indien niet gedefinieerd wordt de naam van de entiteit weergegeven |
| `icon` | string | Optioneel | Elk `mdi:` pictogram | Een pictogram voor je knop, indien niet gedefinieerd wordt het pictogram van de entiteit of de `entity-picture` weergegeven |
| `force_icon` | boolean | Optioneel | `true` of `false` (standaard) | Geeft het pictogram voorrang boven de `entity-picture` |
| `use_accent_color` | boolean | Optioneel (`false` standaard) | **Alleen voor lampen.** Gebruikt de accentkleur van het thema in plaats van de kleur van de lamp.                         |
| `show_state` | boolean | Optioneel | `true` of `false` (standaard) | Toont of verbergt de status van je `entity` |
| `show_name` | boolean | Optioneel | `true` (standaard) of `false` | Toont of verbergt de naam |
| `show_icon` | boolean | Optioneel | `true` (standaard) of `false` | Toont of verbergt het pictogram |
| `show_last_changed` | boolean | Optioneel | `true` of `false` (standaard) | Toont het tijdstip van de laatste wijziging van je `entity` |
| `show_last_updated` | boolean | Optioneel | `true` of `false` (standaard) | Toont het tijdstip van de laatste update van je `entity` |
| `show_attribute` | boolean | Optioneel | `true` of `false` (standaard) | Toont een attribuut van je `entity` onder de `name` |
| `attribute` | string | Optioneel (verplicht als `show_attribute` op `true` staat) | Een attribuut van je `entity` | Het te tonen attribuut (bijv. `brightness`) |
| `scrolling_effect` | boolean | Optioneel | `true` (standaard) of `false` | Laat tekst scrollen wanneer de inhoud groter is dan hun container |
| `button_action` | object | Optioneel | `tap_action`, `double_tap_action` of `hold_action`, zie hieronder | Hiermee kun je de standaardacties bij het klikken op de knop wijzigen. |
| `tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieert het type actie bij het klikken op het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt |
| `double_tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieert het type actie bij het dubbelklikken op het pictogram, indien niet gedefinieerd wordt `none` gebruikt |
| `hold_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieert het type actie bij het vasthouden van het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt |
| `card_layout` | string | Optioneel | `normal` (standaard indien niet in sectieweergave), `large` (standaard indien in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |
| `sub_button` | object | Optioneel | Zie [subknoppen](#subknoppen) | Voegt aangepaste knoppen toe, vastgezet aan de rechterkant |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Hoofdachtergrondkleur voor ondersteunde elementen in de knop |
| `--bubble-button-border-radius` | `px` | Randradius voor de knop |
| `--bubble-button-icon-border-radius` | `px` | Randradius voor de pictogramcontainer van de knop |
| `--bubble-button-icon-background-color` | `color` | Achtergrondkleur voor de pictogramcontainer van de knop |
| `--bubble-light-white-color` | `color` | Vervangt de standaard witte kleur van lichtknoppen/sliders |
| `--bubble-light-color` | `color` | Vervangt de kleur van lichtknoppen/sliders (zelfs RGB lampen) |
| `--bubble-button-box-shadow` | Zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schaduw voor de knop |

</details>

Deze opties zijn alleen beschikbaar wanneer `button_type` is ingesteld op `slider`.

<details>

<summary><b>Slideropties (YAML + beschrijvingen)</b></summary>

| Naam                  | Type    | Vereiste                     | Beschrijving                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optioneel                        | De minimumwaarde van de slider. Voor aangepaste sliders.                                                    |
| `max_value`             | number  | Optioneel                        | De maximumwaarde van de slider. Voor aangepaste sliders.                                                    |
| `step`                  | number  | Optioneel                        | De stapwaarde van de slider.                                                                           |
| `tap_to_slide`          | boolean | Optioneel (`false` standaard)      | Schakelt het vorige slidergedrag in, waarbij je tikt om de slider te activeren, in plaats van vast te houden.        |
| `relative_slide`        | boolean | Optioneel (`false` standaard )     | Werkt de waarde bij relatief aan de startwaarde, in plaats van aan het startpunt van de aanraking.                      |
| `read_only_slider`      | boolean | Optioneel (`false` standaard)      | Maakt de slider alleen-lezen. Wordt automatisch ingeschakeld voor sommige entiteiten zoals sensoren.                        |
| `slider_live_update`    | boolean | Optioneel (`false` standaard)      | De status van de entiteit wordt bijgewerkt tijdens het schuiven. **Deze functie wordt niet voor alle entiteiten aanbevolen.**        |
| `slider_fill_orientation` | string | Optioneel | `left` (standaard), `right`, `top`, `bottom` | Wijzigt de vulrichting van de slider |
| `slider_value_position` | string | Optioneel | `right` (standaard), `left`, `center`, `hidden` | Positie van de weergegeven waarde |
| `invert_slider_value` | boolean | Optioneel (`false` standaard) | Keert de sliderrichting om (100% vulling komt overeen met het minimum). Niet beschikbaar voor kleursliders. |
| `light_slider_type` | string | Optioneel | `brightness` (standaard), `hue`, `saturation`, `white_temp` | **Alleen voor lampen.** Kiest de slidermodus |
| `cover_slider_type` | string | Optioneel | `position` (standaard), `tilt_position` | **Alleen voor zonwering.** Kiest de slidermodus (positie of kanteling) |
| `hue_force_saturation` | boolean | Optioneel (`false` standaard) | **Alleen voor lampen (tintmodus).** Forceert de verzadiging bij het aanpassen van de tint |
| `hue_force_saturation_value` | number | Optioneel (`100` standaard) | **Alleen voor lampen (tintmodus).** Geforceerde verzadigingswaarde (0-100) |
| `use_accent_color` | boolean | Optioneel (`false` standaard) | **Alleen voor lampen (helderheidsmodus).** Gebruikt de accentkleur van het thema in plaats van de kleur van de lamp |
| `allow_light_slider_to_0` | boolean | Optioneel (`false` standaard)    | **Alleen voor lampen.** Laat de slider 0% bereiken, waardoor de lamp uitgaat. Niet beschikbaar met `tap_to_slide`. |
| `light_transition`      | boolean | Optioneel (`false` standaard)      | **Alleen voor lampen.** Schakelt vloeiende helderheidsovergangen in voor ondersteunde lampen.                           |
| `light_transition_time` | number  | Optioneel (`500` standaard)        | **Alleen voor lampen.** De overgangstijd in milliseconden. Vereist `light_transition: true`.            |

</details>

#### Voorbeelden

<details>

<summary>Een sliderknop waarmee je de helderheid van een lamp kunt bedienen</summary>

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

<summary>Een knop met meer opties</summary>

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

Met deze kaart kun je een mediaspelerentiteit bedienen.

### Mediaspeleropties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `entity` | string | **Verplicht** | Elke mediaspeler | De te bedienen mediaspeler |
| `name` | string | Optioneel | Elke tekenreeks | Een naam voor je mediaspeler, indien niet gedefinieerd wordt de naam van de entiteit weergegeven |
| `icon` | string | Optioneel | Elk `mdi:` pictogram | Een pictogram voor je mediaspeler, indien niet gedefinieerd wordt het pictogram van de entiteit of de `entity-picture` weergegeven |
| `force_icon` | boolean | Optioneel | `true` of `false` (standaard) | Geeft het pictogram voorrang boven de `entity-picture` |
| `show_state` | boolean | Optioneel | `true` of `false` (standaard) | Toont of verbergt de status van je `entity` |
| `show_name` | boolean | Optioneel | `true` (standaard) of `false` | Toont of verbergt de naam |
| `show_icon` | boolean | Optioneel | `true` (standaard) of `false` | Toont of verbergt het pictogram |
| `show_last_changed` | boolean | Optioneel | `true` of `false` (standaard) | Toont het tijdstip van de laatste wijziging van je `entity` |
| `show_last_updated` | boolean | Optioneel | `true` of `false` (standaard) | Toont het tijdstip van de laatste update van je `entity` |
| `show_attribute` | boolean | Optioneel | `true` of `false` (standaard) | Toont een attribuut van je `entity` onder de `name` |
| `attribute` | string | Optioneel (verplicht als `show_attribute` op `true` staat) | Een attribuut van je `entity` | Het te tonen attribuut (bijv. `brightness`) |
| `scrolling_effect` | boolean | Optioneel | `true` (standaard) of `false` | Laat tekst scrollen wanneer de inhoud groter is dan hun container |
| `min_volume` | number | Optioneel | Elk getal | De minimumwaarde van de volumeslider. |
| `max_volume` | number | Optioneel | Elk getal | De maximumwaarde van de volumeslider. |
| `cover_background` | boolean | Optioneel | `true` of `false` (standaard) | Gebruikt een vervaagde mediahoes als achtergrond van de kaart. |
| `button_action` | object | Optioneel | `tap_action`, `double_tap_action` of `hold_action`, zie [acties](#tik--dubbeltik--en-vasthoudacties) | Hiermee kun je de standaardacties bij het klikken op de knop wijzigen. |
| `tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieert het type actie bij het klikken op het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `double_tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieert het type actie bij het dubbelklikken op het pictogram, indien niet gedefinieerd wordt `none` gebruikt. |
| `hold_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieert het type actie bij het vasthouden van het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `main_buttons_position` | string | Optioneel | `default` of `bottom` | Verplaatst de bedieningsknoppen van de hoes naar onder (vast) |
| `main_buttons_full_width` | boolean | Optioneel | `true` of `false` | Maakt de onderste actieknoppen over de volledige breedte (standaard: `true` wanneer positie `bottom` is) |
| `main_buttons_alignment` | string | Optioneel | `end` (standaard), `center`, `start`, `space-between` | Uitlijning van de onderste actieknoppen wanneer ze niet de volledige breedte innemen |
| `card_layout` | string | Optioneel | `normal` (standaard indien niet in sectieweergave), `large` (standaard indien in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |
| `sub_button` | object | Optioneel | Zie [subknoppen](#subknoppen) | Voegt aangepaste knoppen toe, vastgezet aan de rechterkant |
| `hide` | object | Optioneel | Zie hieronder | Verbergt knoppen van de kaart |

#### Verbergopties

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optioneel | `true` of `false` (standaard) | Verbergt de afspelen/pauzeren-knop |
| `volume_button` | boolean | Optioneel | `true` of `false` (standaard) | Verbergt de volumeknop |
| `previous_button` | boolean | Optioneel | `true` of `false` (standaard) | Verbergt de vorige-knop |
| `next_button` | boolean | Optioneel | `true` of `false` (standaard) | Verbergt de volgende-knop |
| `power_button` | boolean | Optioneel | `true` of `false` (standaard) | Verbergt de aan/uit-knop |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Hoofdachtergrondkleur voor de mediaspeler |
| `--bubble-media-player-border-radius` | `px` | Randradius voor de mediaspeler |
| `--bubble-media-player-buttons-border-radius` | `px` | Randradius voor de knoppen van de mediaspeler |
| `--bubble-media-player-slider-background-color` | `color` | Achtergrondkleur voor de volumeslider |
| `--bubble-media-player-icon-border-radius` | `px` | Randradius voor de pictogramcontainer van de mediaspeler |
| `--bubble-media-player-icon-background-color` | `color` | Achtergrondkleur voor de pictogramcontainer van de mediaspeler |
| `--bubble-media-player-box-shadow` | Zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schaduw voor de mediaspeler |

</details>


#### Voorbeelden

<details>

<summary>Een mediaspeler met alle opties</summary>

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

## Zonwering

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Met deze kaart bedien je je `cover`-entiteiten.

### Zonweringopties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `entity` | string | **Verplicht** | Elke cover | Een cover om te bedienen |
| `name` | string | Optioneel | Elke tekenreeks | Een naam voor je zonwering, indien niet gedefinieerd wordt de entiteitsnaam weergegeven |
| `force_icon` | boolean | Optioneel | `true` of `false` (standaard) | Geeft voorrang aan het pictogram in plaats van de `entity-picture` |
| `show_state` | boolean | Optioneel | `true` of `false` (standaard) | Toon of verberg de status van je `entity` |
| `show_name` | boolean | Optioneel | `true` (standaard) of `false` | Toon of verberg de naam |
| `show_icon` | boolean | Optioneel | `true` (standaard) of `false` | Toon of verberg het pictogram |
| `show_last_changed` | boolean | Optioneel | `true` of `false` (standaard) | Toon het tijdstip van de laatste wijziging van je `entity` |
| `show_last_updated` | boolean | Optioneel | `true` of `false` (standaard) | Toon het tijdstip van de laatste update van je `entity` |
| `show_attribute` | boolean | Optioneel | `true` of `false` (standaard) | Toon een attribuut van je `entity` onder de `name` |
| `attribute` | string | Optioneel (verplicht als `show_attribute` op `true` staat) | Een attribuut van je `entity` | Het te tonen attribuut (bijv. `brightness`) |
| `scrolling_effect` | boolean | Optioneel | `true` (standaard) of `false` | Laat tekst scrollen wanneer de inhoud groter is dan de container |
| `icon_open` | string | Optioneel | Elk `mdi:`-pictogram | Een pictogram voor je geopende zonwering, indien niet gedefinieerd wordt het standaard pictogram voor geopende zonwering weergegeven |
| `icon_close` | string | Optioneel | Elk `mdi:`-pictogram | Een pictogram voor je gesloten zonwering, indien niet gedefinieerd wordt het standaard pictogram voor gesloten zonwering weergegeven |
| `icon_up` | string | Optioneel | Elk `mdi:`-pictogram | Een pictogram voor je knop om de zonwering te openen, indien niet gedefinieerd wordt het standaard pictogram voor geopende zonwering weergegeven |
| `icon_down` | string | Optioneel | Elk `mdi:`-pictogram | Een pictogram voor je knop om de zonwering te sluiten, indien niet gedefinieerd wordt het standaard pictogram voor gesloten zonwering weergegeven |
| `open_service` | string | Optioneel | Elke service of elk script | Een service om je zonwering te openen, standaard `cover.open_cover` |
| `stop_service` | string | Optioneel | Elke service of elk script | Een service om je zonwering te stoppen, standaard `cover.stop_cover` |
| `close_service` | string | Optioneel | Elke service of elk script | Een service om je zonwering te sluiten, standaard `cover.close_cover` |
| `tilt_buttons` | string | Optioneel | `top` (standaard), `bottom`, `left`, `right`, `hidden` | Positie van de kantelknoppen (alleen zichtbaar als de zonwering kantelen ondersteunt) |
| `open_tilt_service` | string | Optioneel | Elke service of elk script | Een service om te kantelen naar open, standaard `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optioneel | Elke service of elk script | Een service om te kantelen naar gesloten, standaard `cover.close_cover_tilt` |
| `button_action` | object | Optioneel | `tap_action`, `double_tap_action` of `hold_action`, zie [acties](#tik--dubbeltik--en-vasthoudacties) | Hiermee wijzig je de standaardacties bij het klikken op de knop. |
| `tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het klikken op het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `double_tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het dubbelklikken op het pictogram, indien niet gedefinieerd wordt `none` gebruikt. |
| `hold_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het vasthouden van het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `main_buttons_position` | string | Optioneel | `default` of `bottom` | Verplaats de mediabediening naar onderen (vast) |
| `main_buttons_full_width` | boolean | Optioneel | `true` of `false` | Maak de onderste bediening even breed als de kaart (standaard: `true` wanneer positie `bottom` is) |
| `main_buttons_alignment` | string | Optioneel | `end` (standaard), `center`, `start`, `space-between` | Uitlijning van de onderste bediening wanneer deze niet de volledige breedte gebruikt |
| `card_layout` | string | Optioneel | `normal` (standaard buiten sectieweergave), `large` (standaard in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |
| `sub_button` | object | Optioneel | Zie [subknoppen](#subknoppen) | Voeg aangepaste knoppen toe die aan de rechterkant vastzitten |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Belangrijkste achtergrondkleur voor ondersteunde elementen in de zonweringkaart |
| `--bubble-cover-border-radius` | `px` | Randstraal voor de zonweringkaart |
| `--bubble-cover-icon-border-radius` | `px` | Randstraal voor de pictogramcontainer van de zonweringkaart |
| `--bubble-cover-icon-background-color` | `color` | Achtergrondkleur voor de pictogramcontainer van de zonweringkaart |
| `--bubble-cover-box-shadow` | Zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow voor de zonweringkaart |
| `--bubble-button-box-shadow` | Zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow voor knoppen in de zonweringkaart |

</details>


#### Voorbeeld

<details>

<summary>Een kaart om een rolgordijn te bedienen</summary>

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

## Select

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Met deze kaart voeg je een dropdownmenu toe voor je `input_select`- / `select`-entiteiten. Deze kaart ondersteunt ook subknoppen en alle gangbare Bubble Card-functies.

> [!TIP]
> Je kunt ook select-subknoppen gebruiken als je dat wilt, deze functie is beschikbaar in alle kaarten die subknoppen ondersteunen.

### Selectopties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereiste | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `entity` | string | **Verplicht** | Elke entiteit | Een entiteit om te bedienen |
| `name` | string | Optioneel | Elke tekenreeks | Een naam voor je select, indien niet gedefinieerd wordt de entiteitsnaam weergegeven |
| `icon` | string | Optioneel | Elk `mdi:`-pictogram | Een pictogram voor je select, indien niet gedefinieerd wordt het entiteitspictogram of de `entity-picture` weergegeven |
| `force_icon` | boolean | Optioneel | `true` of `false` (standaard) | Geeft voorrang aan het pictogram in plaats van de `entity-picture` |
| `show_state` | boolean | Optioneel | `true` of `false` (standaard) | Toon of verberg de status van je `entity` |
| `show_name` | boolean | Optioneel | `true` (standaard) of `false` | Toon of verberg de naam |
| `show_icon` | boolean | Optioneel | `true` (standaard) of `false` | Toon of verberg het pictogram |
| `show_last_changed` | boolean | Optioneel | `true` of `false` (standaard) | Toon het tijdstip van de laatste wijziging van je `entity` |
| `show_last_updated` | boolean | Optioneel | `true` of `false` (standaard) | Toon het tijdstip van de laatste update van je `entity` |
| `show_attribute` | boolean | Optioneel | `true` of `false` (standaard) | Toon een attribuut van je `entity` onder de `name` |
| `attribute` | string | Optioneel (verplicht als `show_attribute` op `true` staat) | Een attribuut van je `entity` | Het te tonen attribuut (bijv. `brightness`) |
| `scrolling_effect` | boolean | Optioneel | `true` (standaard) of `false` | Laat tekst scrollen wanneer de inhoud groter is dan de container |
| `tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het klikken op het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `double_tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het dubbelklikken op het pictogram, indien niet gedefinieerd wordt `none` gebruikt. |
| `hold_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het vasthouden van het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `card_layout` | string | Optioneel | `normal` (standaard buiten sectieweergave), `large` (standaard in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |
| `sub_button` | object | Optioneel | Zie [subknoppen](#subknoppen) | Voeg aangepaste knoppen toe die aan de rechterkant vastzitten |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Belangrijkste achtergrondkleur voor ondersteunde elementen in de selectkaart |
| `--bubble-select-background-color` | `color` | Achtergrondkleur voor de selectkaart |
| `--bubble-select-list-border-radius` | `px` | Randstraal voor het dropdownmenu in de kaart |
| `--bubble-select-list-item-accent-color` | `color` | Accentkleur voor het geselecteerde item |
| `--bubble-select-list-background-color` | `color` | Achtergrondkleur voor het dropdownmenu in de kaart |
| `--bubble-select-list-width` | `px` | Breedte van het dropdownmenu in de kaart |
| `--bubble-select-arrow-background-color` | `color` | Achtergrondkleur voor de dropdownpijl |
| `--bubble-select-button-border-radius` | `px` | Randstraal voor de selectknop |
| `--bubble-select-border-radius` | `px` | Randstraal voor de selectkaart |
| `--bubble-select-icon-border-radius` | `px` | Randstraal voor de pictogramcontainer van de selectkaart |
| `--bubble-select-icon-background-color` | `color` | Achtergrondkleur voor de pictogramcontainer van de selectkaart |
| `--bubble-select-box-shadow` | Zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow voor de selectkaart |

</details>


#### Voorbeelden

<details>

<summary>Een selectkaart met een lijst met scènes</summary>

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

Met deze kaart bedien je je `climate`-entiteiten.

> [!TIP]
> Het modusselectiemenu is een [subknop](#subknoppen) die automatisch wordt toegevoegd bij het aanmaken van de kaart. Je kunt deze daarna naar wens aanpassen of verwijderen.

### Klimaatopties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam                     | Type    | Vereiste                         | Ondersteunde opties                                  | Beschrijving                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Verplicht**                        | Klimaatentiteit                                   | De te bedienen entiteit (bijv. `climate.living_room`).                                                            |
| `name`                  | string  | Optioneel                            | Elke tekenreeks                                       | Een aangepaste naam voor de kaart. Indien niet gedefinieerd wordt de entiteitsnaam weergegeven.                                    |
| `icon`                  | string  | Optioneel                            | Elk `mdi:`-pictogram                                  | Een aangepast pictogram voor de kaart. Indien niet gedefinieerd wordt het entiteitspictogram of de `entity-picture` gebruikt.                   |
| `force_icon`            | boolean | Optioneel                            | `true` of `false` (standaard)                     | Geeft voorrang aan het pictogram in plaats van de `entity-picture`.                                                           |
| `show_state`            | boolean | Optioneel                            | `true` of `false` (standaard)                     | Toon of verberg de huidige status van de `entity`.                                                                 |
| `show_name`             | boolean | Optioneel                            | `true` (standaard) of `false`                     | Toon of verberg de naam van de entiteit.                                                                            |
| `show_icon`             | boolean | Optioneel                            | `true` (standaard) of `false`                     | Toon of verberg het pictogram.                                                                                          |
| `hide_target_temp_low`  | boolean | Optioneel (alleen voor entiteiten die `target_temp_low` ondersteunen) | `true` of `false` (standaard) | Verbergt de bediening voor de lage doeltemperatuur indien ondersteund door de `entity`.                                          |
| `hide_target_temp_high` | boolean | Optioneel (alleen voor entiteiten die `target_temp_high` ondersteunen)| `true` of `false` (standaard) | Verbergt de bediening voor de hoge doeltemperatuur indien ondersteund door de `entity`.                                         |
| `state_color`           | boolean | Optioneel                            | `true` of `false` (standaard)                     | Past een constante achtergrondkleur toe wanneer de klimaatentiteit AAN staat.                                              |
| `step` | number | Optioneel | Elk getal | De temperatuurstap. |
| `min_temp` | number | Optioneel | Elk getal | De minimumtemperatuur. |
| `max_temp` | number | Optioneel | Elk getal | De maximumtemperatuur. |
| `button_action` | object | Optioneel | `tap_action`, `double_tap_action` of `hold_action`, zie [acties](#tik--dubbeltik--en-vasthoudacties) | Hiermee wijzig je de standaardacties bij het klikken op de knop. |
| `tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het klikken op het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `double_tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het dubbelklikken op het pictogram, indien niet gedefinieerd wordt `none` gebruikt. |
| `hold_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het vasthouden van het pictogram, indien niet gedefinieerd wordt `more-info` gebruikt. |                              |
| `main_buttons_position` | string | Optioneel | `default` of `bottom` | Verplaats de klimaatactieknoppen naar onderen (vast) |
| `main_buttons_full_width` | boolean | Optioneel | `true` of `false` | Maak de onderste actieknoppen even breed als de kaart (standaard: `true` wanneer positie `bottom` is) |
| `main_buttons_alignment` | string | Optioneel | `end` (standaard), `center`, `start`, `space-between` | Uitlijning van de onderste actieknoppen wanneer deze niet de volledige breedte gebruiken |
| `card_layout` | string | Optioneel | `normal` (standaard buiten sectieweergave), `large` (standaard in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |
| `sub_button`            | object  | Optioneel                            | Zie [subknoppen](#subknoppen)                | Voegt aangepaste knoppen toe die aan de rechterkant vastzitten. Handig voor een selectiemenu voor klimaatmodi.                                  |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Belangrijkste achtergrondkleur voor ondersteunde elementen in de klimaatkaart |
| `--bubble-climate-border-radius` | `px` | Randstraal voor ondersteunde elementen in de klimaatkaart |
| `--bubble-climate-button-background-color` | `color` | Achtergrondkleur voor de knoppen van de klimaatkaart |
| `--bubble-climate-icon-border-radius` | `px` | Randstraal voor de pictogramcontainer van de klimaatkaart |
| `--bubble-state-climate-fan-only-color` | `color` | Overlaykleur voor de status alleen ventilator |
| `--bubble-state-climate-dry-color` | `color` | Overlaykleur voor de droogstatus |
| `--bubble-state-climate-cool-color` | `color` | Overlaykleur voor de koelstatus |
| `--bubble-state-climate-heat-color` | `color` | Overlaykleur voor de verwarmingsstatus |
| `--bubble-state-climate-auto-color` | `color` | Overlaykleur voor de automatische status |
| `--bubble-state-climate-heat-cool-color` | `color` | Overlaykleur voor de status verwarmen/koelen |
| `--bubble-climate-accent-color` | `color` | Accentkleur voor de klimaatkaart |
| `--bubble-climate-box-shadow` | Zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow voor de klimaatcontainer. |

</details>


#### Voorbeelden

<details>

<summary>Een klimaatkaart met een dropdownmenu voor HVAC-modi</summary>

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

## Agenda

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Met deze kaart toon je je agenda-entiteiten. De inhoud is scrolbaar, zodat je gemakkelijk door de aankomende evenementen kunt bladeren.

### Agenda-opties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam                | Type    | Vereiste  | Ondersteunde opties                               | Beschrijving                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Optioneel     | Elk getal (minimum: 1)                        | Aantal agendadagen om evenementen voor op te halen, vanaf nu tot het einde van de N-de dag (standaard: 7) |
| `entities`          | object  | **Verplicht** | Een agenda-entiteitobject (zie hieronder)            | De te bedienen entiteit (bijv. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Verplicht** | Een agenda-entiteit                               | De weer te geven agenda-entiteit                                                          |
| `entities.color`    | string  | Optioneel     | Een kleur                                         | Een aangepaste kleur voor het agenda-label. Indien niet gedefinieerd wordt automatisch een kleur gekozen |
| `days`              | number  | Optioneel     | Elk getal (minimum: 1)                         | Aantal agendadagen om evenementen voor op te halen, vanaf nu tot het einde van de N-de dag (standaard: 7) |
| `limit`             | number  | Optioneel     | Een getal                                        | Het aantal evenementen dat op de kaart wordt weergegeven                                  |
| `show_end`          | boolean | Optioneel     | `true` of `false` (standaard)                     | Toon of verberg het eindtijdstip van evenementen                                                    |
| `show_progress`     | boolean | Optioneel     | `true` (standaard) of `false`                     | Toon of verberg de voortgangsbalk van het evenement                                                     |
| `show_started_events`| boolean | Optioneel     | `true` (standaard) of `false`                     | Toon of verberg evenementen die momenteel bezig zijn                                                 |
| `scrolling_effect`  | boolean | Optioneel | `true` (standaard) of `false` | Laat tekst scrollen wanneer de inhoud groter is dan de container |
| `event_action` | object | Optioneel | `tap_action`, `double_tap_action` of `hold_action`, zie [acties](#tik--dubbeltik--en-vasthoudacties) | Hiermee voeg je acties toe bij het klikken op een evenement. |
| `tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het klikken op een dag, indien niet gedefinieerd wordt `none` gebruikt. |
| `double_tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het dubbelklikken op een dag, indien niet gedefinieerd wordt `none` gebruikt. |
| `hold_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Definieer het type actie bij het vasthouden van een dag, indien niet gedefinieerd wordt `none` gebruikt. |
| `card_layout` | string | Optioneel | `normal` (standaard buiten sectieweergave), `large` (standaard in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |
| `sub_button` | object | Optioneel | Zie [subknoppen](#subknoppen) | Voeg aangepaste knoppen toe die aan de rechterkant vastzitten |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele                                  | Verwachte waarde | Beschrijving                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Belangrijkste achtergrondkleur voor ondersteunde elementen in de agendakaart  |
| `--bubble-calendar-border-radius`         | `px`           | Randstraal voor ondersteunde elementen in de agendakaart |
| `--bubble-calendar-height`                | `px`           | Hoogte van de agendakaart                                        |

</details>

#### Voorbeelden

<details>

<summary>Een agendakaart met een beperkt aantal evenementen</summary>

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

<summary>Een agendakaart met een eindtijd en een voortgangsbalk</summary>

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


## Scheidingslijn

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Deze kaart is een eenvoudige scheidingslijn om je pop-up in categorieën/secties op te delen. Bijvoorbeeld Lampen, Apparaten, Zonwering, Instellingen, Automatiseringen...

### Scheidingslijnopties

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereist | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `name` | string | Optioneel maar aanbevolen | Elke tekst | Een naam voor je scheidingslijn |
| `icon` | string | Optioneel maar aanbevolen | Elk `mdi:`-pictogram | Een pictogram voor je scheidingslijn |
| `card_layout` | string | Optioneel | `normal` (standaard buiten sectieweergave), `large` (standaard in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |
| `sub_button` | object | Optioneel | Zie [subknoppen](#subknoppen) | Voeg aangepaste knoppen toe die rechts vastgezet worden |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Achtergrondkleur voor de lijn in de scheidingslijn |

</details>

#### Voorbeeld

<details>

<summary>Een scheidingslijn voor een sectie "Zonwering"</summary>

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

## Lege kolom

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Deze kaart is bedoeld om een lege kolom op te vullen. Dit is handig als je een `horizontal-stack` in je pop-up hebt met maar één kaart. Kijk naar de rechter onderhoek van deze schermafbeelding om hem (niet) te zien.

### Opties voor lege kolom

Deze kaart heeft geen opties en ondersteunt geen [stijl](#stijl), al ondersteunt hij wel lay-outopties voor HA-secties.

#### Voorbeeld

<details>

<summary>Een lege kolom in een horizontale stack</summary>

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

## Alleen subknoppen

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Deze kaart is uitsluitend gewijd aan subknoppen. Perfect voor menu's, snelle acties, informatieve chips, of een vaste voettekst onderaan de pagina.

> [!IMPORTANT]  
> Deze kaart gebruikt het nieuwe subknoppenschema. Gebruik `sub_button.bottom` om je knoppen te definiëren. Het gedeelte `sub_button.main` wordt genegeerd.

### Opties voor alleen subknoppen

<details>

<summary><b>Opties (YAML + beschrijvingen)</b></summary>

| Naam | Type | Vereist | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Vereist** | Zie [subknoppen](#subknoppen) | Definieer je subknoppen via het gedeelte `bottom` |
| `hide_main_background` | boolean | Optioneel | `true` of `false` (standaard) | Verwijder de achtergrond van de kaart |
| `footer_mode` | boolean | Optioneel | `true` of `false` (standaard) | Zet de kaart vast onderaan de pagina |
| `footer_full_width` | boolean | Optioneel | `true` of `false` (standaard) | Maak de voettekst volledig breed (100%) |
| `footer_width` | number | Optioneel | Elk getal | Voettekstbreedte in pixels wanneer `footer_full_width` op `false` staat |
| `footer_bottom_offset` | number | Optioneel | Elk getal | Afstand tot de onderkant van de pagina in pixels (standaard: `16`) |
| `card_layout` | string | Optioneel | `normal` (standaard buiten sectieweergave), `large` (standaard in sectieweergave), `large-2-rows`, `large-sub-buttons-grid` | Stijllay-out van de kaart, zie [kaartlay-outs](#kaartlay-outs) |
| `rows` | number | Optioneel | Elk getal | Aantal rijen (hoogte) (bijv. `2`) |

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Voettekstbreedte wanneer `footer_full_width` op `false` staat |
| `--bubble-footer-bottom` | `px` | Afstand van de voettekst tot de onderkant |
| `--bubble-footer-box-shadow` | zie [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schaduw voor de voettekstcontainer |

</details>

#### Voorbeelden

<details>

<summary>Chips zoals op de schermafbeelding</summary>

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

<summary>Een vast voettekstmenu</summary>

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

## Subknoppen

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

In elke kaart die deze optie ondersteunt, kun je subknoppen toevoegen om je kaarten nog verder aan te passen. Je kunt bijvoorbeeld een knop maken die een stofzuiger, een weerkaart of bijna alles wat je maar kunt bedenken bedient. Deze subknoppen ondersteunen de tikacties en de meeste knopopties.

Subknoppen ondersteunen nu drie typen: **Standaard (knop)**, **Slider**, en **Dropdown / Select**. Je kunt typen mengen in dezelfde kaart, subknoppen boven of onder plaatsen, en ze groeperen voor meer geavanceerde lay-outs.

#### Plaatsing en groepen van subknoppen

<details>

<summary><b>Structuur van subknoppen (main/bottom + groepen)</b></summary>

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

**Opmerkingen:**
- `main` en `bottom` zijn twee onafhankelijke secties. Onderste subknoppen worden onderaan de kaart vastgezet.
- `main_layout` en `bottom_layout` accepteren `inline` (standaard) of `rows` om groepen verticaal te stapelen.
- Groepen zijn objecten met een `group`-array en optioneel `buttons_layout` (`inline` of `column`).
- `justify_content` is alleen beschikbaar voor **onderste groepen** (`start`, `center`, `end`, `fill`).
- Wanneer er onderste subknoppen aanwezig zijn, schakelt de kaartlay-out automatisch over naar `large`, tenzij je expliciet een andere lay-out instelt.
- Verouderde `sub_button`-arrays worden nog steeds ondersteund en behandeld als de `main`-sectie.

</details>

### Opties voor subknoppen

<details>

<summary><b>Opties (YAML + beschrijving)</b></summary>

| Naam | Type | Vereist | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- | --- |
| `entity` | string | Optioneel | Elke entiteit | Een entiteit om te bedienen |
| `name` | string | Optioneel | Elke tekst | Een naam voor je subknop, indien niet gedefinieerd wordt de entiteitsnaam getoond |
| `icon` | string | Optioneel | Elk `mdi:`-pictogram | Een pictogram voor je subknop, indien niet gedefinieerd wordt het entiteitspictogram of de entiteitsafbeelding getoond |
| `force_icon` | boolean | Optioneel | `true` of `false` (standaard) | Forceer het pictogram, zelfs als er een entiteitsafbeelding beschikbaar is |
| `sub_button_type` | string | Optioneel | `default`, `slider` of `select` | Kies het type subknop |
| `show_background` | boolean | Optioneel | `true` (standaard) of `false` | Toon een achtergrond voor je subknop, deze verandert van kleur op basis van de status van je entiteit |
| `state_background` | boolean | Optioneel | `true` (standaard) of `false` | Gebruik de statuskleur wanneer de entiteit `on` is |
| `light_background` | boolean | Optioneel | `true` (standaard) of `false` | Gebruik de lichtkleur voor de achtergrond indien beschikbaar |
| `show_state` | boolean | Optioneel | `true` of `false` (standaard) | Toon of verberg de status van je `entity` |
| `show_name` | boolean | Optioneel | `true` of `false` (standaard) | Toon of verberg de naam |
| `show_icon` | boolean | Optioneel | `true` (standaard) of `false` | Toon of verberg het pictogram |
| `show_last_changed` | boolean | Optioneel | `true` of `false` (standaard) | Toon de tijd van de laatste wijziging van je `entity` |
| `show_last_updated` | boolean | Optioneel | `true` of `false` (standaard) | Toon de tijd van de laatste update van je `entity` |
| `show_attribute` | boolean | Optioneel | `true` of `false` (standaard) | Toon een attribuut van je `entity` onder de `name` |
| `attribute` | string | Optioneel (vereist als `show_attribute` op `true` staat) | Een attribuut van je `entity` | Het te tonen attribuut (bijv. `brightness`) |
| `select_attribute` | string | Optioneel | Een attributenlijst van je `entity` (zie ondersteunde opties hierboven) | Deze attributenlijst opent een dropdown bij een klik (bijv. `effect_list`) |
| `show_arrow` | boolean | Optioneel | `true` (standaard) of `false` | Toon of verberg de dropdownpijl voor select-subknoppen |
| `scrolling_effect` | boolean | Optioneel | `true` (standaard) of `false` | Laat tekst scrollen wanneer de inhoud groter is dan de container |
| `tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Bepaal het type actie bij een klik op de subknop, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `double_tap_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Bepaal het type actie bij een dubbelklik op de subknop, indien niet gedefinieerd wordt `none` gebruikt. |
| `hold_action` | object | Optioneel | Zie [acties](#tik--dubbeltik--en-vasthoudacties) | Bepaal het type actie bij het vasthouden van de subknop, indien niet gedefinieerd wordt `more-info` gebruikt. |
| `fill_width` | boolean | Optioneel | `true` of `false` | Vul de beschikbare breedte (standaard: `false` voor main, `true` voor bottom) |
| `width` | number of string | Optioneel | Elk getal of elke CSS-lengte | Aangepaste breedte (`px` voor de main-sectie, standaard `%` voor de bottom-sectie) |
| `custom_height` | number | Optioneel | Elk getal | Aangepaste hoogte in pixels |
| `content_layout` | string | Optioneel | `icon-left` (standaard), `icon-top`, `icon-bottom`, `icon-right` | Plaatsing van het pictogram binnen de subknop |
| `always_visible` | boolean | Optioneel | `true` of `false` (standaard) | **Alleen slider.** Toon de slider altijd in plaats van hem te openen bij een tik |
| `show_button_info` | boolean | Optioneel | `true` of `false` (standaard) | **Alleen slider.** Toon pictogram/naam/status wanneer `always_visible` is ingeschakeld |
| `visibility` | object of list | Optioneel | Zie [voorwaarden](https://www.home-assistant.io/docs/scripts/conditions/) | Toon of verberg de subknop op basis van voorwaarden |
| `hide_when_parent_unavailable` | boolean | Optioneel | `true` of `false` (standaard) | Verberg de subknop als de entiteit van de bovenliggende kaart niet beschikbaar is |

</details>

<details>

<summary><b>Slideropties voor subknoppen (hetzelfde als knopsliders)</b></summary>

<br>

Slider-subknoppen ondersteunen dezelfde slideropties als knopsliders, waaronder:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-variabelen (zie <a href="#stijl">Stijl</a>)</b></summary>

| Variabele | Verwachte waarde | Beschrijving |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Randradius voor de subknoppen |
| `--bubble-sub-button-background-color` | `color` | Achtergrondkleur voor de subknoppen |
| `--bubble-sub-slider-border-radius` | `px` | Randradius voor slider-subknoppen |
| `--bubble-sub-slider-background-color` | `color` | Achtergrondkleur voor slider-subknoppen |
| `--bubble-sub-slider-height` | `px` | Hoogte voor altijd zichtbare slider-subknoppen |
| `--bubble-sub-button-dark-text-color` | `color` | Tekstkleur op lichte subknopachtergronden |

</details>

#### Voorbeelden

<details>

<summary>Een knop met wat subknoppen om een stofzuigerkaart te maken (zoals op de schermafbeelding)</summary>

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

<summary>Een knopslider met een subknop die de helderheid toont en een die de lamp aan/uit schakelt (zoals op de schermafbeelding)</summary>

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

<summary>Een knop die de binnen- en buitentemperatuur toont met het weer voor vandaag en morgen (met schermafbeelding)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Pech voor mij, het is bij mij altijd bewolkt, maar alle pictogrammen veranderen wel op basis van het weer.

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

## Kaartlay-outs

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card ondersteunt de sectieweergave van Home Assistant volledig, je kunt de kaartlay-out wijzigen om de kaart groter te maken en ook het aantal kolommen of rijen dat de kaart in je sectieweergave moet innemen aanpassen (alleen bij de kaarten die deze optie ondersteunen). Deze lay-outs worden ook ondersteund in alle andere weergavetypes.

<details>

<summary><b>Beschikbare kaartlay-outs</b></summary>

| Lay-out | Beschrijving |
| --- | --- |
| `normal` | De normale lay-out (niet geoptimaliseerd voor de sectieweergave) |
| `large` | Een grotere lay-out die zich aanpast aan de geselecteerde rijen in de sectieweergave (geoptimaliseerd voor de sectieweergave) |
| `large-2-rows` | Een grotere lay-out met 2 rijen subknoppen die zich aanpast aan de geselecteerde rijen in de sectieweergave (geoptimaliseerd voor de sectieweergave) |
| `large-sub-buttons-grid` | Deze lay-out toont subknoppen in een raster, `rows` moet minimaal op `2` ingesteld zijn.

</details>

#### Voorbeelden

<details>

<summary>Een grote knop die energiestatistieken toont met 2 rijen subknoppen (met screenshot)</summary>

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

<summary>Een grote knop met meerdere rijen met 12 subknoppen</summary>

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

## Tik-, dubbeltik- en vasthoudacties

Je kunt ook de standaard tikacties, dubbeltikacties en vasthoudacties van Home Assistant gebruiken bij de kaarten die deze optie ondersteunen. Dit maakt het bijvoorbeeld mogelijk om het venster "meer info" te tonen door een knoppictogram vast te houden, of om een service uit te voeren wanneer op een subknop wordt getikt.

**Let op: wanneer een `double_tap_action` is geconfigureerd, krijgt de normale `tap_action` een vertraging van 200 ms om een dubbeltik
te kunnen detecteren. Als deze vertraging ongewenst is, stel je `double_tap_action` in op `none` om de afhandeling van dubbeltikken uit te schakelen.**

### Actie-opties

<details>

<summary><b>Opties (YAML + beschrijving)</b></summary>

| Naam | Type | Ondersteunde opties | Beschrijving |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Uit te voeren actie |
| `target` | object |  | Werkt alleen met `call-service`. Volgt de [syntaxis van Home Assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Elk pad van je dashboard | Pad om naartoe te navigeren (bijv. `'#kitchen'` om een pop-up te openen) wanneer de actie is ingesteld op navigate |
| `url_path` | string | Elke link | URL om te openen bij een klik (bijv. `https://www.google.com`) wanneer `action` is ingesteld op url |
| `service` | string | Elke service | Service om aan te roepen (bijv. `media_player.media_play_pause`) wanneer `action` is ingesteld op call-service |
| `data` of `service_data` | object | Willekeurige servicegegevens | Servicegegevens om mee te sturen (bijv. `entity_id: media_player.kitchen`) wanneer `action` is ingesteld op call-service |
| `confirmation` | object | Zie [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Toont een bevestigingspop-up (niet die van Bubble Card), overschrijft het standaard `confirmation`-object |

</details>

#### Voorbeeld

<details>

<summary>Een knop om een pop-up te openen</summary>

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

## Stijl

Je kunt op vier manieren aangepaste stijlen toevoegen om de CSS van alle kaarten te wijzigen **zonder card-mod te gebruiken**:

- In de editor ga je naar de kaart die je wilt aanpassen, en navigeer je vervolgens naar _Stijlopties > Aangepaste stijlen & JS-sjablonen_, waar je je aangepaste stijlen toevoegt (bekijk de tips en voorbeelden hieronder).
- In de editor (of in [YAML](#modules)) ga je naar de kaart die je wilt aanpassen, navigeer je vervolgens naar _Modules_, en maak je een nieuwe module aan (die beschikbaar wordt voor alle kaarten), of ga je naar de **Module Store** om een beschikbare Module te installeren (meer details over modules vind je [hieronder](#modules)).
- In een [thema](https://www.home-assistant.io/integrations/frontend/#defining-themes)-bestand door CSS-variabelen in YAML toe te voegen (deze staan bij elke kaart hierboven in de documentatie). Dit maakt globale aanpassingen mogelijk.

  <details>
  
  <summary>Voorbeeld</a></summary>
  
  <br>

  Kopieer de regel `Bubble:` niet, dit is de naam van het thema dat je gebruikt. Je moet ook de `--` uit de variabelen verwijderen.

  Je moet de actie [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) uitvoeren om het thema na wijzigingen te vernieuwen.

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
  
- In YAML door `styles: |` toe te voegen, gevolgd door je aangepaste stijlen (bekijk de tips en voorbeelden hieronder).

> [!TIP]  
> **Om te begrijpen welke stijlklassen aangepast kunnen worden**, kun je een kijkje nemen in de map [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) in deze repository. In elke kaartmap vind je een bestand genaamd `styles.css`. Deze bestanden bevatten alle toegepaste stijlen. Dit biedt veel meer mogelijkheden dan CSS-variabelen, maar moet per kaart afzonderlijk worden toegevoegd.
> 
> Je kunt ook veel [voorbeelden van de community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) vinden, of enkele van het [Home Assistant forum](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) door een beetje te zoeken.
>
> Het Bubble-thema voor Home Assistant (zoals op de screenshots) vind je [hier](https://github.com/Clooos/Bubble).
>
> Er komt binnenkort een tutorialvideo op mijn [YouTube-kanaal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Let op: het kan zijn dat je `!important;` moet toevoegen aan sommige CSS-stijlen die al gedefinieerd zijn (zie de voorbeelden hieronder).

> [!TIP]  
> Subknoppen kunnen worden aangesproken via klassen op basis van hun naam. Een subknop met de naam "My sub-button" kan bijvoorbeeld gestyled worden met `.my-sub-button`. Slidersubknoppen bieden ook `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, enzovoort.

#### Voorbeelden

<details>

<summary>De lettergrootte van elke Bubble Card wijzigen</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>De achtergrondkleur van één knop in een horizontale knoppenstack wijzigen</summary>

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

<summary>De achtergrondkleur van een kaart wijzigen</summary>

<br>

Dit werkt bij alle Bubble Card-types (behalve bij de pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Dit doet hetzelfde, maar alleen bij een knopkaart (het werkt ook bij de pop-upkoptekst): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Om de kleur te wijzigen wanneer de status `on` is, bekijk je de stijlsjablonen hieronder.

</details>

<details>

<summary>De kleur van een knopslider wijzigen</summary>

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

<summary>De lijnkleur van een scheidingslijn wijzigen</summary>

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

<summary>De kleur van een pictogram wijzigen</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Voor het pictogram van een horizontale knoppenstack.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>De achtergrondkleur van een pictogramcontainer wijzigen</summary>

<br>

Dit werkt bij alle Bubble Card-types (behalve bij de pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Dit doet hetzelfde voor de pop-upkoptekst: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>De grootte van de subknoppen wijzigen (perfect voor de grote lay-out)</summary>

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

<summary>De achtergrondkleur van de tweede subknop wijzigen</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>De grootte van een pictogram wijzigen</summary>

<br>

Voor het hoofdpictogram.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Voor de pictogrammen van de subknoppen.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Een afbeelding gebruiken in plaats van een pictogram in een subknop</summary>

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

Upload deze afbeelding gewoon in een map "pictures" (of de naam die je zelf kiest) in de "www"-map van Home Assistant.

</details>

<details>

<summary>Geavanceerd voorbeeld: een horizontale rij subknoppen maken (met screenshot)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ik ben hier echt fan van, ik gebruik dit als koptekst op mijn dashboard.

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

## Sjablonen

**Bubble Card ondersteunt geen Jinja-sjablonen**, maar gevorderde gebruikers kunnen sjablonen in JS rechtstreeks toevoegen in hun [aangepaste stijlen](#stijl). Zo kun je bijvoorbeeld dynamisch een pictogram, de teksten of de kleuren van een element wijzigen, een element voorwaardelijk tonen of verbergen (zoals een subknop), of bijna alles op basis van een status, een attribuut en meer.

> [!TIP]  
> Meer informatie over JS-sjablonen [hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mijn advies is om **altijd een blik te werpen op je browserconsole** om er zeker van te zijn dat alles correct werkt.

> [!IMPORTANT]  
> **Alle sjablonen die geen CSS-eigenschap wijzigen, moeten helemaal aan het einde geplaatst worden! Zoals het wijzigen van een pictogram, een tekst of een ander element.**

#### Beschikbare variabelen en functies

<details>

<summary>Variabelen</summary>

<br>

Je hebt toegang tot deze variabelen in de meeste kaarten:

- `state` geeft de status van je gedefinieerde `entity` terug.
  
- `entity` geeft je gedefinieerde entiteit terug, zoals `switch.test` in dit voorbeeld.
  
- `icon` kan zo gebruikt worden om het pictogram te wijzigen `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` geeft de status van de gedefinieerde entiteit van je eerste subknop terug, `[0]` is de status van de eerste subknop, `[1]` de tweede...
  
- `subButtonIcon[0]` kan zo gebruikt worden om het pictogram van de eerste subknop te wijzigen `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` is het pictogram van de eerste subknop, `[1]` de tweede...
  
- `card` geeft het kaartelement in de DOM terug.
  
- `hass` is een geavanceerde variabele die je nog meer controle geeft, je kunt bijvoorbeeld de status van `light.kitchen` zo terugkrijgen `hass.states['light.kitchen'].state` of een attribuut zo `hass.states[entity].attributes.brightness`.

- `this` geeft veel nuttige informatie over je opzet en dashboard terug, gebruik dit alleen als je weet wat je doet.

</details>

<details>

<summary>Functies</summary>

<br>

Je hebt toegang tot alle globale JS-functies, maar ook tot:

- `getWeatherIcon` kan gebruikt worden om een weerpictogram terug te geven op basis van een status die het weer teruggeeft. Zo kun je bijvoorbeeld dit doen `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` om het pictogram van de derde subknop te wijzigen naar het weerpictogram van vandaag, `.forecast[1]?.condition` is voor morgen...

  Hiervoor moet je een sjabloonsensor aanmaken. Dit kun je toevoegen aan je `configuration.yaml`:
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
- `hass.formatEntityState(state)` kan gebruikt worden om een status te vertalen (kan ook gebruikt worden om een eenheid van een status te krijgen, zonder deze handmatig te moeten toevoegen).
- `hass.formatEntityAttributeValue(state, "attribute")` kan gebruikt worden om een attribuut te vertalen (kan ook gebruikt worden om een eenheid van een status te krijgen, zonder deze handmatig te moeten toevoegen).

</details>

#### Voorbeelden

Je vindt hieronder veel voorbeelden, maar je vindt ook zeer geavanceerde sjablonen op mijn [Patreon-pagina](https://www.patreon.com/c/Clooos), zoals een (mijn favoriet) die het mogelijk maakt om tot vier voorwaardelijke badges rond de pictogrammen van de kaart te plaatsen. Het is ook een geweldige manier om alle mogelijkheden van de aangepaste stijlen en sjablonen van Bubble Card te leren kennen!

<details>
<summary>Voorbeelden van mijn Patreon-pagina</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant-achtige badges toevoegen aan elke kaart</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Geformatteerde datum en tijd tonen in een scheidingslijn zonder een entiteit te gebruiken</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">De status van een subknop op twee regels tonen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Labels en pictogrammen in een select-subknop aanpassen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Een blijvende herinneringspop-up toevoegen die alleen verschijnt wanneer nodig</a>
</p>

<br>

</details>

<details>

<summary>De achtergrondkleur van een knop wijzigen die rood is wanneer deze <code>off</code> is en blauw wanneer deze <code>on</code> is</summary>

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

<summary>De achtergrondkleur van een knop wijzigen op basis van een entiteit voor de horizontale knoppenstack</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Een subknop voorwaardelijk tonen/verbergen</summary>

<br>

Dit voorbeeld toont de eerste subknop alleen wanneer mijn stofzuigrobot vastzit.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Dit voorbeeld toont een subknop wanneer de batterij onder 10% is. Nuttig met een subknop die "Batterij bijna leeg" toont.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Een pictogram of subknoppictogram voorwaardelijk wijzigen</summary>

<br>

Dit voorbeeld wijzigt een knoppictogram alleen wanneer een stofzuigrobot vastzit.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Dit voorbeeld wijzigt het pictogram van de eerste subknop alleen wanneer een stofzuigrobot vastzit.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>De kleur van een pictogram of subknoppictogram voorwaardelijk wijzigen</summary>

<br>

Dit voorbeeld wijzigt de kleur van een knoppictogram op basis van de status ervan.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Dit voorbeeld wijzigt de kleur van een subknoppictogram op basis van de status ervan. `.bubble-sub-button-1` is de eerste subknop, vervang `1` als je het pictogram van een andere subknop wilt wijzigen.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Een ventilatorpictogram voorwaardelijk animeren</summary>

<br>

Dit voorbeeld laat een knoppictogram draaien wanneer een ventilator `on` is.
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

<summary>Teksten sjabloneren (zoals naam of status)</summary>

<br>

Dit voorbeeld wijzigt de naam/status van een knop in "Het is momenteel zonnig" afhankelijk van je weer.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
of toegepast voor subknoppen:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Als je de status (`.bubble-state`) wilt sjabloneren, schakel dan niet `show_state: true` in, maar alleen `show_attribute: true` zonder attribuut.

</details>

<details>

<summary>Geavanceerd voorbeeld: de kleur van een subknop wijzigen wanneer een pop-up geopend is</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Geavanceerd voorbeeld: de naam van een scheidingslijn sjabloneren op basis van een status vertaald naar je taal</summary>

<br>

Je kunt `hass.formatEntityState(state)` gebruiken om een status te vertalen en `hass.formatEntityAttributeValue(state, "attribute")` om een attribuut te vertalen.

Dit voorbeeld wijzigt de naam en het pictogram op basis van het weer, "Nuageux" betekent "Bewolkt" in het Frans.

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

Modules zijn een krachtige functie waarmee je je aangepaste stijlen en sjablonen kunt opslaan, hergebruiken en delen tussen al je Bubble Cards. In plaats van dezelfde code steeds opnieuw te kopiëren en plakken in meerdere kaarten, kun je een module maken en deze toepassen waar je hem nodig hebt. Dit maakt het beheren van de look en feel van je dashboard veel eenvoudiger en efficiënter.

Maar deze functie is nog veel krachtiger dan dat: hiermee kun je zelf echte functies toevoegen in de Bubble Card-editor, met gebruik van alle standaard [Home Assistant-formulier](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)-opties!  
De objectkiezer is verbeterd om live wijzigingen te tonen en attributen correct te ondersteunen.

Je kunt ook door de **Module Store** bladeren om [modules gemaakt door de community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) te vinden en te installeren, of om je eigen creaties te delen!

> [!TIP]
> De code van een module werkt precies hetzelfde als de code in de `styles`-sectie van een kaart. Alle dezelfde variabelen en functies uit de sectie [Sjablonen](#sjablonen) zijn beschikbaar.

<br>

### Eerste instelling

> [!IMPORTANT]
> Vanaf v3.1.0 is Bubble Card Tools de aanbevolen opslagbackend voor modules. De oude methode met sjabloonsensor werkt nog steeds voor bestaande installaties, maar nieuwe modules en Module Store-functies worden het best ondersteund via Bubble Card Tools.

De Bubble Card Tools-integratie schakelt de module-editor en de Module Store in, en slaat modules op als individuele YAML-bestanden. Bestaande modules worden automatisch gemigreerd.

De installatie- en configuratiestappen worden hier uitgelegd:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### De module-editor

Je hebt toegang tot de module-editor vanuit de instellingen van elke kaart, onder de sectie **Modules**. De editor biedt twee hoofdtabbladen:

#### Tabblad Mijn modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Dit tabblad toont al je geïnstalleerde modules en biedt de mogelijkheid om:

- Bestaande modules **toe te passen** op de huidige kaart
- Een nieuwe module **te maken** vanaf nul
- Bestaande modules **te bewerken** met live voorbeeld
- Modules die je niet meer nodig hebt **te verwijderen**
- Modules **te zoeken** en **te sorteren** (alfabetisch, recent, actief eerst)
- De **globale status in te stellen** zodat een module automatisch op alle kaarten wordt toegepast
- Modules **te importeren/exporteren** voor back-up of delen

#### Tabblad Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Dit tabblad toont [alle beschikbare modules van de community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), en biedt de mogelijkheid om:

- Alle door de community gemaakte modules **te bladeren**
- Modules **te zoeken** en te filteren op naam, compatibiliteit of trefwoorden
- Modules **te installeren** met één klik
- Geïnstalleerde modules **bij te werken** wanneer er nieuwe versies beschikbaar zijn

> [!TIP]
> In de editor kun je niet-ondersteunde modules inschakelen om modules te testen die nog niet als compatibel met een bepaald kaarttype gemarkeerd zijn.

<br>

### Hoe modules te gebruiken

#### Een nieuwe module maken

<details>

<summary>Klik om uit te klappen</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Ga naar de editor van een kaart en klap de sectie **Modules** uit.
2. Klik op **Nieuwe module maken**.
3. Vul de moduleinformatie in.
4. Schrijf je CSS- en/of JavaScript-sjabloonscode in de code-editor **Code**.
5. (Optioneel) Maak een aangepaste configuratie-interface in de sectie **Editor** (zoals de kleurkiezer in de bovenstaande schermafbeelding, volledige documentatie beschikbaar [hier](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Klik op **Opslaan**.

Je module is nu beschikbaar om te gebruiken op elk van je kaarten!

<br>

</details>

#### Een module toepassen op een kaart

<details>

<summary>Klik om uit te klappen</summary>

<br>

- **Via de editor:**

  - Ga naar de editor van de kaart waarop je de module wilt toepassen.
  - Klap de sectie **Modules** uit.
  - Klik op de module die je uit de lijst wilt toepassen.
  - Klik onder "Toepassen op" op "Deze kaart". De module is nu actief. Je kunt meerdere modules toepassen op dezelfde kaart.

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

#### Een module globaal toepassen

<details>

<summary>Klik om uit te klappen</summary>

<br>

Je kunt een module instellen om automatisch op alle Bubble Cards toegepast te worden:

**Dit is niet beschikbaar voor modules met een editor, aangezien deze een specifieke configuratie nodig hebben om te werken.**

- **Via de editor:**

  - Zoek in de module-editor je module op in het tabblad **Mijn modules**.
  - Schakel de knop **Alle kaarten** naast de modulenaam in.
  - De module wordt nu automatisch op alle kaarten toegepast.
 
- **Via YAML:**

  Voeg in je module-YAML-configuratie (in `bubble-modules.yaml`) gewoon `is_global: true` toe.

<br>

</details>

#### Een enkele kaart uitsluiten van een globale module

<details>

<summary>Klik om uit te klappen</summary>

<br>

Als je een globale module hebt maar deze wilt uitsluiten voor een specifieke kaart:

- **Via de editor:**
  
  - In de sectie **Modules** van de kaart zie je de globale modules vermeld staan.
  - Klik op een globale module, schakel "Deze kaart" uit om deze uit te sluiten voor deze specifieke kaart.

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

#### Je module delen op de Module Store

<details>

<summary>Klik om uit te klappen</summary>

<br>

Om je module te delen op de Module Store, klik je in de module-editor, onderaan bij "Module exporteren", op "Kopiëren voor GitHub" en plak je de inhoud in een nieuwe discussie in de categorie [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Bewerk de beschrijving** (indien nodig), **het voorbeeld** (voor YAML-gebruikers), en vergeet niet om **minstens één screenshot toe te voegen** voor de Module Store.

**Je module wordt direct daarna beschikbaar** (na een verversing van de Store), controleer dus goed of alles correct geschreven is en de module werkt zoals verwacht. Je kunt de module natuurlijk na het delen nog bewerken/bijwerken.

<br>

</details>

#### Versiebeheer

<details>

<summary>Klik om uit te klappen</summary>

<br>

De Module Store controleert automatisch op updates voor geïnstalleerde modules. Wanneer updates beschikbaar zijn:

1. Zie je een update-indicator in het tabblad **Module Store**.
2. Klik op **Bijwerken** bij modules met beschikbare updates.
3. Bevestig de update in de Module Store.

<br>

</details>

#### Ondersteunde kaarttypen bepalen

<details>

<summary>Klik om uit te klappen</summary>

<br>

Sommige modules zijn misschien niet compatibel met alle kaarttypen. Je kunt opgeven welke kaarten een module ondersteunt.  
Als je wilt dat een module compatibel is met **alle kaarten**, laat je het veld `supported` gewoon weg (of gebruik je de optie **Alle kaarten** in de editor).

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

### Voorbeelden

<details>
<summary>Basisstijlmodule</summary>

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
<summary>Module met aangepaste configuratie</summary>

<br>

Deze module is [hier](https://github.com/Clooos/Bubble-Card/discussions/1231) beschikbaar.

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

Meer voorbeelden zijn te vinden in de Module Store, of [hier](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Hulp

Aarzel niet om een issue te openen als iets niet werkt zoals verwacht. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Heb je vragen of ideeën over Bubble Card? Wil je je dashboards of ontdekkingen delen? Je kunt terecht op het Home Assistant forum, op de Bubble Card subreddit of in de GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bijdragen

Bijdragen zijn welkom! Of het nu gaat om bugfixes, nieuwe functies, vertalingen of verbeteringen aan de documentatie, aarzel niet om een pull request te openen.

Lees voordat je begint de [ontwikkelaarshandleiding](DEVELOPERS.md), waarin wordt uitgelegd hoe je je lokale omgeving opzet, het project bouwt en je wijzigingen test.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Doneren

Ik besteed het grootste deel van mijn vrije tijd aan dit project zo goed mogelijk maken. Dus als je mijn werk waardeert, is elke donatie een mooie manier om je steun te tonen 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Bedankt aan iedereen voor jullie steun, jullie zijn mijn grootste motivatie!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
