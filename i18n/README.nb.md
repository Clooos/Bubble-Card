<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Denne siden er en automatisk oversettelse. Ved tvil er det den [originale engelske dokumentasjonen](../README.md) som gjelder. Er det en setning som leses feil? All hjelp er velkommen, og å [rette denne siden](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.nb.md) tar bare ett minutt: GitHub tar seg av forken og pull-forespørselen. Tusen takk på forhånd! 🍻

# Bubble Card

🌐 **[Les dette på et annet språk](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card er en minimalistisk og tilpassbar kortsamling for Home Assistant, med moderne pop-uper og et integrert Module Store med over 100 fellesskapsutviklede moduler.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Innholdsfortegnelse

**[`Installasjon`](#installasjon)**  **[`Konfigurasjon`](#konfigurasjon)**  **[`Pop-up`](#pop-up)**  **[`Horisontal knapperad`](#horisontal-knapperad)**  **[`Knapp`](#knapp)**  **[`Mediespiller`](#mediespiller)**  **[`Gardin`](#gardin)**  **[`Velg`](#velg)**  **[`Klima`](#klima)**  **[`Kalender`](#kalender)**  **[`Skilletegn`](#skilletegn)**  **[`Tom kolonne`](#tom-kolonne)**  **[`Bare underknapper`](#bare-underknapper)**  **[`Underknapper`](#underknapper)**  **[`Kortoppsett`](#kortoppsett)**  **[`Handlinger`](#trykk--dobbelttrykk--og-holdehandlinger)**  **[`Styling`](#styling)**  **[`Maler`](#maler)**  **[`Moduler`](#moduler)**  **[`Hjelp`](#hjelp)**  **[`Bidra`](#bidra)**  **[`Doner`](#doner)**

<br>

## Installasjon

**Laveste støttede versjon av Home Assistant:** 2023.9.0

<details>

<summary>Uten HACS</summary>

<br>

1. Last ned denne filen: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Legg denne filen i mappen din `<config>/www`
3. På dashbordet ditt klikker du på ikonet øverst til høyre og deretter på `Rediger dashbord`
4. Klikk på ikonet igjen og deretter på `Administrer ressurser`
5. Klikk på `Legg til ressurs`
6. Kopier og lim inn dette: `/local/bubble-card.js?v=1`
7. Klikk på `JavaScript-modul` og deretter `Opprett`
8. Gå tilbake og oppdater siden
9. Du kan nå klikke på `Legg til kort` nederst til høyre og søke etter `Bubble Card`
10. Etter enhver oppdatering av filen må du redigere `/local/bubble-card.js?v=1` og endre versjonen til et høyere tall

Hvis det ikke fungerer, prøv å tømme nettleserens buffer.

</details>

<details>

<summary>Med HACS (anbefalt)</summary>

<br>

Denne metoden lar deg få oppdateringer direkte via Home Assistant Community Store

1. Hvis HACS ikke er installert ennå, laster du det ned ved å følge instruksjonene på [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Fullfør den innledende konfigurasjonen av HACS ved å følge instruksjonene på [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Gå til "HACS" i sidepanelet
4. Søk etter "Bubble Card", eller klikk på den blå knappen nedenfor
5. Klikk på "Last ned"
6. Gå tilbake til dashbordet og klikk på ikonet øverst til høyre og deretter på `Rediger dashbord`
7. Du kan nå klikke på `Legg til kort` nederst til høyre og søke etter `Bubble Card`

Hvis det ikke fungerer, prøv å tømme nettleserens/appens buffer (på alle enhetene dine om nødvendig).

#### Videoer

Du kan også ta en titt på YouTube-kanalen min for steg-for-steg-videoer.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurasjon

Alle valg kan konfigureres i Home Assistant-editoren. Men du finner flere detaljer og YAML-koden i dokumentasjonen nedenfor.

<details>

<summary><b>Hovedvalg (YAML + beskrivelse)</b></summary>

| Navn | Type | Krav | Støttede valg | Beskrivelse |
| --- | --- | --- | --- | --- |
| `type` | string | **Påkrevd** | `custom:bubble-card` | Korttype |
| `card_type` | string | **Påkrevd** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` eller `sub-buttons` | Typen Bubble Card, se under |
| `styles` | object list | Valgfritt | Alle CSS-stilark | Lar deg tilpasse CSS-en til Bubble Card, se [styling](#styling) |

</details>

<details>

<summary><b>Globale CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Kanteradius for alle støttede elementer |
| `--bubble-main-background-color` | `color` | Hovedbakgrunnsfarge for alle støttede elementer |
| `--bubble-secondary-background-color` | `color` | Sekundær bakgrunnsfarge for alle støttede elementer |
| `--bubble-accent-color` | `color` | Aksentfarge for alle støttede elementer |
| `--bubble-icon-border-radius` | `px` | Kanteradius for ikoner på alle støttede elementer |
| `--bubble-icon-background-color` | `color` | Bakgrunnsfarge for ikoner på alle støttede elementer |
| `--bubble-sub-button-border-radius` | `px` | Kanteradius for alle underknapper |
| `--bubble-sub-button-background-color` | `color` | Bakgrunnsfarge for alle underknapper |
| `--bubble-box-shadow` | se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for alle støttede elementer |
| `--bubble-border` | se [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Kant for alle støttede kort |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Ta en titt på denne [videoen](https://www.youtube.com/watch?v=0hSQOlBxKKI) for å lære om Bubble Card og hva den kan gjøre.** YouTube-kanalen min er ganske ny og fokuserer på veiledninger om Home Assistant og Bubble Card. Ikke nøl med å abonnere for å hjelpe meg med å øke synligheten til kanalen. Tusen takk på forhånd!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Dette kortet lar deg lage en pop-up med hvilket som helst innhold. Hver pop-up er **skjult som standard** og kan åpnes ved å målrette lenken (f.eks. `'#pop-up-name'`), med et hvilket som helst kort som støtter [handlingen](#trykk--dobbelttrykk--og-holdehandlinger) `navigate`, eller med den [horisontale knapperaden](#horisontal-knapperad) som følger med.

> [!TIP]
> ### Pop-up-utløser 
> Denne funksjonen lar deg åpne en pop-up basert på tilstanden til en hvilken som helst entitet, for eksempel kan du åpne en "Sikkerhet"-pop-up med et kamera når en person står foran huset ditt. Du kan også lage en veksle-hjelper (input_boolean) og utløse åpning/lukking av den i en automatisering.
> <details>
> <summary>Åpne en pop-up når en <code>binary_sensor</code> er <code>on</code></summary>
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
> ### Ulike måter å lukke en pop-up på 
> Det finnes mange måter å lukke en pop-up på. Du kan for eksempel sveipe fra pop-up-toppteksten og ned, gjøre et langt sveip inni pop-upen og ned, trykke på Escape på datamaskin, fjerne hashen i URL-en eller ganske enkelt trykke på lukkeknappen.
>


### Pop-up-valg

<details>

<summary><b>Valg (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede valg | Beskrivelse |
| --- | --- | --- | --- | --- |
| `hash` | string | **Påkrevd** | En hvilken som helst unik hash (f.eks. `'#kitchen'`) med ' ' | Dette er hvordan du åpner pop-upen din |
| `popup_style` | string | Valgfritt | `bubble` (standard) eller `classic` | Angir det visuelle uttrykket til pop-upen |
| `popup_mode` | string | Valgfritt | `default` (standard), `fit-content`, `centered` eller `adaptive-dialog` | Angir layoutmodusen til pop-upen |
| `with_bottom_offset` | boolean | Valgfritt | `true` eller `false` (standard) | Brukes bare med `popup_mode: fit-content` eller `adaptive-dialog`. Legger til en bunnforskyvning på mobil, nyttig når dashbordet ditt har et bunntekst-kort. |
| `full_width_on_mobile` | boolean | Valgfritt | `true` eller `false` (standard) | Brukes bare med `popup_mode: centered`. Utvider pop-upen til full skjermbredde på mobil, nyttig på mindre skjermer. |
| `performance_mode` | string | Valgfritt | `default` (standard) eller `performance` | Optimaliserer åpningsanimasjonen til pop-upen. `performance` forsinker gjengivelsen av innhold og bakgrunnsuskarpheten litt, og deaktiverer også bakgrunnsuskarphet hvis den er satt. |
| `auto_close` | string | Valgfritt | En tidsavbrudd i millisekunder (f.eks. `10000` for 10s) | Lukk pop-upen automatisk etter en gitt tid |
| `close_on_click` | boolean | Valgfritt | `true` eller `false` (standard) | Lukk pop-upen automatisk etter enhver interaksjon |
| `close_by_clicking_outside` | boolean | Valgfritt | `true` (standard) eller `false` | Lukk pop-upen ved å klikke utenfor den |
| `width_desktop` | string | Valgfritt | En hvilken som helst CSS-verdi | Bredde på datamaskin (`100%` som standard på mobil) |
| `margin` | string | Valgfritt | En hvilken som helst CSS-verdi | Bruk denne **bare** hvis pop-upen din ikke er godt sentrert på mobil (f.eks. `13px`) |
| `margin_top_mobile` | string | Valgfritt | En hvilken som helst CSS-verdi | Toppmarg på mobil (f.eks. `-56px` hvis toppteksten din er skjult) |
| `margin_top_desktop` | string | Valgfritt | En hvilken som helst CSS-verdi | Toppmarg på datamaskin (f.eks. `50vh` for en halvstor pop-up eller `calc(100vh - 400px)` for en fast høyde på `400px`) |
| `bg_color` | string | Valgfritt | En hvilken som helst hex-, rgb- eller rgba-verdi | Bakgrunnsfargen til pop-upen din (f.eks. `#ffffff` for en hvit bakgrunn) |
| `bg_opacity` | string | Valgfritt | En hvilken som helst verdi fra `0` til `100` | Bakgrunnens opasitet til pop-upen din (f.eks. `100` for ingen gjennomsiktighet) |
| `bg_blur` | string | Valgfritt | En hvilken som helst verdi fra `0` til `100` | Bakgrunnsuskarphetseffekten til pop-upen din, **dette fungerer bare hvis `bg_opacity` ikke er satt til `100`** (f.eks. `0` for ingen uskarphet)|
| `shadow_opacity` | string | Valgfritt | En hvilken som helst verdi fra `0` til `100` | Skyggens opasitet til pop-upen din (f.eks. `0` for å skjule den) |
| `hide_backdrop` | boolean | Valgfritt | `true` eller `false` (standard) | Sett denne til true på den første pop-upen på hoveddashbordet ditt for å deaktivere bakgrunnslaget på alle pop-uper. |
| `background_update` | boolean | Valgfritt | `true` eller `false` (standard) | Oppdater pop-up-innhold i bakgrunnen (anbefales ikke) |
| `trigger_entity` | string | Valgfritt | En hvilken som helst entitet | Åpne denne pop-upen basert på tilstanden til en hvilken som helst entitet |
| `trigger_state` | string | Valgfritt (**Påkrevd** hvis `trigger_entity` er angitt) | En hvilken som helst entitetstilstand | Entitetstilstand som åpner pop-upen |
| `trigger_close` | boolean | Valgfritt | `true` eller `false` (standard) | Lukk pop-upen når `trigger_state` er forskjellig |
| `open_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Utløs en handling når pop-upen åpnes |
| `close_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Utløs en handling når pop-upen lukkes |
| `show_header` | boolean | Valgfritt | `true` (standard) eller `false` | Vis/skjul pop-up-toppteksten helt |
| `show_previous_button` | boolean | Valgfritt | `true` eller `false` (standard) | Vis en tilbakeknapp ved siden av lukkeknappen, og naviger tilbake til forrige pop-up når det er mulig |
| `show_close_button` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul lukkeknappen samtidig som resten av toppteksten holdes synlig |
| `buttons_position` | string | Valgfritt | `right` (standard) eller `left` | Posisjonen til lukke- og tilbakeknappene i toppteksten |
| `cards` | list | Valgfritt | Et hvilket som helst Bubble Card, Home Assistant-kort eller egendefinert kort | Angi innholdet i pop-upen din. Se eksemplet på pop-up under. |
| Du har også tilgang til [alle knappeinnstillingene](#knapp) for toppteksten til pop-upen. | | Valgfritt | | Hvis ikke angitt vises ingen topptekst |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Kanteradius for pop-upen |
| `--bubble-pop-up-main-background-color` | `color` | Hovedbakgrunnsfarge for støttede elementer i pop-upen |
| `--bubble-pop-up-background-color` | `color` | Bakgrunnsfarge for pop-upen |
| `--bubble-backdrop-background-color` | `color` | Bakgrunnsfarge for bakgrunnslaget |
| Du har også tilgang til [alle CSS-variablene for knapper](#knappevalg) for toppteksten til pop-upen. | | |

</details>


### Frittstående pop-up-format (v3.2.0+)

Fra og med v3.2.0 bruker pop-uper et nytt frittstående format der innholdskortene defineres direkte inni pop-upen ved hjelp av valget `cards`. Dette gir bedre ytelse og en ny seksjonsbasert dra-og-slipp-redigeringsopplevelse.


#### Eksempler

<details>

<summary>En pop-up (frittstående format)</summary>

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

<summary>En knapp som åpner pop-upen</summary>

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

## Horisontal knapperad

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Dette kortet er en god følgesvenn til pop-up-kortet, og lar deg åpne de tilhørende pop-upene. Det lar deg også åpne hvilken som helst side i dashbordet ditt. I tillegg kan du legge til bevegelses-/tilstedeværelsessensorene dine, slik at rekkefølgen på knappene tilpasser seg etter hvilket rom du nettopp gikk inn i. Dette kortet kan rulles, forblir synlig og fungerer som en bunntekst.

> [!IMPORTANT]  
> Dette kortet må være det siste i visningen din (etter alle kort og pop-uper). Det kan ikke være inni en stack.

### Alternativer for horisontal knapperad

<details>

<summary><b>Alternativer (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede alternativer | Beskrivelse |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Påkrevd** | Pop-up-hashen (f.eks. `'#kitchen'`) med ' ' eller en hvilken som helst lenke | En lenke å åpne |
| `1_name` | string | Valgfritt | Hvilken som helst streng | Et navn for knappen din |
| `1_icon` | string | Valgfritt | Et hvilket som helst `mdi:`-ikon | Et ikon for knappen din |
| `1_entity` | string | Valgfritt | Et hvilket som helst lys eller en lysgruppe | Vis fargen til det lyset i bakgrunnen |
| `1_pir_sensor` | string | Valgfritt | En hvilken som helst binærsensor | Minst én pir-sensor eller flere for `auto_order`, faktisk fungerer det også med hvilken som helst entitetstype, for eksempel kan du legge til lysgrupper, og rekkefølgen vil endres basert på når tilstandene sist ble endret. |
| `auto_order` | boolean | Valgfritt | `true` eller `false` (standard) | Endre rekkefølgen på knappene i henhold til `_pir_sensor` sin siste endringstid, **den må være `false` hvis du ikke har noen `_pir_sensor` i koden din** |
| `margin` | string | Valgfritt | Enhver CSS-verdi | Bruk dette **kun** hvis `horizontal-buttons-stack` ikke er godt sentrert på mobil (f.eks. `13px`) |
| `width_desktop` | string | Valgfritt | Enhver CSS-verdi | Bredde på skrivebord (`100%` som standard på mobil) |
| `is_sidebar_hidden` | boolean | Valgfritt | `true` eller `false` (standard) | Fikser posisjonen til den horisontale knapperaden hvis sidepanelet er skjult på skrivebordet (kun hvis du selv har gjort en endring for å skjule det) |
| `rise_animation` | boolean | Valgfritt | `true` (standard) eller `false` | Sett denne til `false` for å deaktivere animasjonen som aktiveres når siden er lastet inn |
| `highlight_current_view` | boolean | Valgfritt | `true` eller `false` (standard) | Uthev gjeldende hash / visning med en jevn animasjon |
| `hide_gradient` | boolean | Valgfritt | `true` eller `false` (standard) | Sett denne til `false` for å skjule gradienten |

> [!IMPORTANT]  
> Variablene som starter med et tall, definerer knappene dine. Bare endre dette tallet for å legge til flere knapper (se eksempelet under).

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Kantradius for knappene i den horisontale knapperaden |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Bakgrunnsfarge for knappene i den horisontale knapperaden |

</details>


#### Eksempel

<details>

<summary>En horisontal knapperad som omorganiserer seg selv basert på tilstedeværelsessensorer</summary>

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

## Knapp

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Dette kortet er svært allsidig. Det kan brukes som en **bryter**, en **glidebryter**, en **tilstand** eller en **navn/tekst**-knapp.

> [!TIP]
> ### Hva er forskjellene mellom alle knappetypene?
>
> - **Bryterknapp:** Dette er standard knappetype. Som standard veksler den en entitet, og bakgrunnsfargen endres basert på entitetens tilstand eller fargen på et lys. Du kan endre handlingen dens i seksjonen **Trykkhandling på kort**.
>
> - **Glidebryterknapp:** Denne knappetypen lar deg styre entiteter med justerbare områder. Den er ideell for å dimme lys, og fyllfargen tilpasser seg lysets farge. Du kan også bruke den til å vise verdier, for eksempel et batterinivå.
>   Støttede entiteter for glidebrytere:
>   - Lys (lysstyrke)
>   - Mediespiller (volum)
>   - Gardin (posisjon)
>   - Vifte (prosent)
>   - Klima (temperatur)
>   - Input number og number (verdi)
>   - Batterisensor (prosent, skrivebeskyttet)
>
>   Du kan også bruke en hvilken som helst entitet med en numerisk tilstand ved å deaktivere entitetsfilteret i **Glidebryterinnstillinger**, og deretter angi verdiene `min` og `max`. Dette valget er skrivebeskyttet.
>
> - **Tilstandsknapp:** Perfekt for å vise informasjon fra en sensor eller en hvilken som helst entitet. Når du trykker på den, vises entitetens "Mer info"-panel. Bakgrunnsfargen endres ikke.
>
> - **Navn/tekst-knapp:** Den eneste knappetypen som ikke trenger en entitet. Den lar deg vise en kort tekst, et navn eller en tittel. Du kan også legge til handlinger på den. Bakgrunnsfargen endres ikke.

### Knappevalg

<details>

<summary><b>Alternativer (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede alternativer | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkrevd** | En hvilken som helst entitet | En entitet å styre |
| `button_type` | string | Valgfritt | `switch` (standard), `slider`, `state` eller `name` | Oppførselen til knappen din |
| `name` | string | Valgfritt | Hvilken som helst streng | Et navn for knappen din, hvis ikke definert vises entitetsnavnet |
| `icon` | string | Valgfritt | Et hvilket som helst `mdi:`-ikon | Et ikon for knappen din, hvis ikke definert vises entitetsikonet eller `entity-picture` |
| `force_icon` | boolean | Valgfritt | `true` eller `false` (standard) | Gi prioritet til ikonet fremfor `entity-picture` |
| `use_accent_color` | boolean | Valgfritt (`false` standard) | **Kun for lys.** Bruk temaets aksentfarge i stedet for lysets farge.                         |
| `show_state` | boolean | Valgfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity` |
| `show_name` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring av `entity` |
| `show_last_updated` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering av `entity` |
| `show_attribute` | boolean | Valgfritt | `true` eller `false` (standard) | Vis et attributt for `entity` under `name` |
| `attribute` | string | Valgfritt (påkrevd hvis `show_attribute` er satt til `true`) | Et attributt fra `entity` | Attributtet som skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfritt | `true` (standard) eller `false` | Tillat at tekst ruller når innholdet overskrider størrelsen på beholderen deres |
| `button_action` | object | Valgfritt | `tap_action`, `double_tap_action` eller `hold_action`, se under | Lar deg endre standardhandlingene ved knappeklikk. |
| `tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved klikk på ikonet, hvis udefinert brukes `more-info` |
| `double_tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved dobbeltklikk på ikonet, hvis udefinert brukes `none` |
| `hold_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved hold på ikonet, hvis udefinert brukes `more-info` |
| `card_layout` | string | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Stiloppsett for kortet, se [kortoppsett](#kortoppsett) |
| `rows` | number | Valgfritt | Et hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |
| `sub_button` | object | Valgfritt | Se [underknapper](#underknapper) | Legg til tilpassede knapper festet til høyre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Hovedbakgrunnsfarge for støttede elementer i knappen |
| `--bubble-button-border-radius` | `px` | Kantradius for knappen |
| `--bubble-button-icon-border-radius` | `px` | Kantradius for knappens ikonbeholder |
| `--bubble-button-icon-background-color` | `color` | Bakgrunnsfarge for knappens ikonbeholder |
| `--bubble-light-white-color` | `color` | Erstatt standard hvitfarge for lysknapper/glidebrytere |
| `--bubble-light-color` | `color` | Erstatt fargen på lysknapper/glidebrytere (selv RGB-lys) |
| `--bubble-button-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for knappen |

</details>

Disse alternativene er kun tilgjengelige når `button_type` er satt til `slider`.

<details>

<summary><b>Glidebryteralternativer (YAML + beskrivelser)</b></summary>

| Navn                  | Type    | Krav                     | Beskrivelse                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Valgfritt                        | Minimumsverdien for glidebryteren. For egendefinerte glidebrytere.                                                    |
| `max_value`             | number  | Valgfritt                        | Maksimumsverdien for glidebryteren. For egendefinerte glidebrytere.                                                    |
| `step`                  | number  | Valgfritt                        | Stegverdien for glidebryteren.                                                                           |
| `tap_to_slide`          | boolean | Valgfritt (`false` standard)      | Aktiver den tidligere glidebryteroppførselen der du trykker for å aktivere glidebryteren, i stedet for å holde den.        |
| `relative_slide`        | boolean | Valgfritt (`false` standard )     | Oppdater verdien relativt til startverdien, i stedet for startpunktet for berøringen.                      |
| `read_only_slider`      | boolean | Valgfritt (`false` standard)      | Gjør glidebryteren skrivebeskyttet. Aktiveres automatisk for enkelte entiteter, som sensorer.                        |
| `slider_live_update`    | boolean | Valgfritt (`false` standard)      | Entitetens tilstand oppdateres mens du skyver. **Denne funksjonen anbefales ikke for alle entiteter.**        |
| `slider_fill_orientation` | string | Valgfritt | `left` (standard), `right`, `top`, `bottom` | Endre fyllretningen for glidebryteren |
| `slider_value_position` | string | Valgfritt | `right` (standard), `left`, `center`, `hidden` | Posisjon for verdivisningen |
| `invert_slider_value` | boolean | Valgfritt (`false` standard) | Inverter glidebryterens retning (100 % fylling tilsvarer minimum). Ikke tilgjengelig for fargeglidebrytere. |
| `light_slider_type` | string | Valgfritt | `brightness` (standard), `hue`, `saturation`, `white_temp` | **Kun for lys.** Velg glidebrytermodus |
| `cover_slider_type` | string | Valgfritt | `position` (standard), `tilt_position` | **Kun for gardiner.** Velg glidebrytermodus (posisjon eller vipping) |
| `hue_force_saturation` | boolean | Valgfritt (`false` standard) | **Kun for lys (fargetonemodus).** Tving metning ved justering av fargetone |
| `hue_force_saturation_value` | number | Valgfritt (`100` standard) | **Kun for lys (fargetonemodus).** Tvungen metningsverdi (0-100) |
| `use_accent_color` | boolean | Valgfritt (`false` standard) | **Kun for lys (lysstyrkemodus).** Bruk temaets aksentfarge i stedet for lysfargen |
| `allow_light_slider_to_0` | boolean | Valgfritt (`false` standard)    | **Kun for lys.** Lar glidebryteren nå 0 %, som slår av lyset. Ikke tilgjengelig med `tap_to_slide`. |
| `light_transition`      | boolean | Valgfritt (`false` standard)      | **Kun for lys.** Aktiver myke overganger for lysstyrke for lys som støtter det.                           |
| `light_transition_time` | number  | Valgfritt (`500` standard)        | **Kun for lys.** Overgangstiden i millisekunder. Krever `light_transition: true`.            |

</details>

#### Eksempler

<details>

<summary>En glidebryterknapp som kan styre lysstyrken til et lys</summary>

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

<summary>En knapp med flere alternativer</summary>

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

## Mediespiller

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Dette kortet lar deg styre en mediespillerentitet.

### Mediespilleralternativer

<details>

<summary><b>Alternativer (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede alternativer | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkrevd** | En hvilken som helst mediespiller | Mediespilleren som skal styres |
| `name` | string | Valgfritt | Hvilken som helst streng | Et navn for mediespilleren din, hvis ikke definert vises entitetsnavnet |
| `icon` | string | Valgfritt | Et hvilket som helst `mdi:`-ikon | Et ikon for mediespilleren din, hvis ikke definert vises entitetsikonet eller `entity-picture` |
| `force_icon` | boolean | Valgfritt | `true` eller `false` (standard) | Gi prioritet til ikonet fremfor `entity-picture` |
| `show_state` | boolean | Valgfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity` |
| `show_name` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring av `entity` |
| `show_last_updated` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering av `entity` |
| `show_attribute` | boolean | Valgfritt | `true` eller `false` (standard) | Vis et attributt for `entity` under `name` |
| `attribute` | string | Valgfritt (påkrevd hvis `show_attribute` er satt til `true`) | Et attributt fra `entity` | Attributtet som skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfritt | `true` (standard) eller `false` | Tillat at tekst ruller når innholdet overskrider størrelsen på beholderen deres |
| `min_volume` | number | Valgfritt | Et hvilket som helst tall | Minimumsverdien for volumglidebryteren. |
| `max_volume` | number | Valgfritt | Et hvilket som helst tall | Maksimumsverdien for volumglidebryteren. |
| `cover_background` | boolean | Valgfritt | `true` eller `false` (standard) | Bruk et uskarpt mediecover som bakgrunn for kortet. |
| `button_action` | object | Valgfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Lar deg endre standardhandlingene ved knappeklikk. |
| `tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved klikk på ikonet, hvis udefinert brukes `more-info`. |
| `double_tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved dobbeltklikk på ikonet, hvis udefinert brukes `none`. |
| `hold_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved hold på ikonet, hvis udefinert brukes `more-info`. |
| `main_buttons_position` | string | Valgfritt | `default` eller `bottom` | Flytt covers handlingsknapper til bunnen (fast) |
| `main_buttons_full_width` | boolean | Valgfritt | `true` eller `false` | Gjør handlingsknappene i bunnen fullbredde (standard: `true` når posisjonen er `bottom`) |
| `main_buttons_alignment` | string | Valgfritt | `end` (standard), `center`, `start`, `space-between` | Justering av handlingsknappene i bunnen når de ikke er fullbredde |
| `card_layout` | string | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Stiloppsett for kortet, se [kortoppsett](#kortoppsett) |
| `rows` | number | Valgfritt | Et hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |
| `sub_button` | object | Valgfritt | Se [underknapper](#underknapper) | Legg til tilpassede knapper festet til høyre |
| `hide` | object | Valgfritt | Se under | Skjul knapper fra kortet |

#### Alternativer for skjuling

| Navn | Type | Krav | Støttede alternativer | Beskrivelse |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Valgfritt | `true` eller `false` (standard) | Skjul spill av/pause-knappen |
| `volume_button` | boolean | Valgfritt | `true` eller `false` (standard) | Skjul volumknappen |
| `previous_button` | boolean | Valgfritt | `true` eller `false` (standard) | Skjul forrige-knappen |
| `next_button` | boolean | Valgfritt | `true` eller `false` (standard) | Skjul neste-knappen |
| `power_button` | boolean | Valgfritt | `true` eller `false` (standard) | Skjul av/på-knappen |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Hovedbakgrunnsfarge for mediespilleren |
| `--bubble-media-player-border-radius` | `px` | Kantradius for mediespilleren |
| `--bubble-media-player-buttons-border-radius` | `px` | Kantradius for mediespillerens knapper |
| `--bubble-media-player-slider-background-color` | `color` | Bakgrunnsfarge for volumglidebryteren |
| `--bubble-media-player-icon-border-radius` | `px` | Kantradius for mediespillerens ikonbeholder |
| `--bubble-media-player-icon-background-color` | `color` | Bakgrunnsfarge for mediespillerens ikonbeholder |
| `--bubble-media-player-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for mediespilleren |

</details>


#### Eksempler

<details>

<summary>En mediespiller med alle alternativene</summary>

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

## Gardin

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Dette kortet lar deg styre `cover`-entitetene dine.

### Gardinvalg

<details>

<summary><b>Valg (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede valg | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatorisk** | Enhver gardin | En gardin å styre |
| `name` | string | Valgfritt | Enhver streng | Et navn for gardinen din, hvis ikke definert vises entitetsnavnet |
| `force_icon` | boolean | Valgfritt | `true` eller `false` (standard) | Prioriterer ikonet fremfor `entity-picture` |
| `show_state` | boolean | Valgfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity` |
| `show_name` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring for `entity` |
| `show_last_updated` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering for `entity` |
| `show_attribute` | boolean | Valgfritt | `true` eller `false` (standard) | Vis et attributt fra `entity` under `name` |
| `attribute` | string | Valgfritt (obligatorisk hvis `show_attribute` er satt til `true`) | Et attributt fra `entity` | Attributtet som skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfritt | `true` (standard) eller `false` | Lar teksten rulle når innholdet overskrider størrelsen på beholderen |
| `icon_open` | string | Valgfritt | Ethvert `mdi:`-ikon | Et ikon for åpen gardin, hvis ikke definert vises standardikonet for åpen gardin |
| `icon_close` | string | Valgfritt | Ethvert `mdi:`-ikon | Et ikon for lukket gardin, hvis ikke definert vises standardikonet for lukket gardin |
| `icon_up` | string | Valgfritt | Ethvert `mdi:`-ikon | Et ikon for knappen som åpner gardinen, hvis ikke definert vises standardikonet for åpen gardin |
| `icon_down` | string | Valgfritt | Ethvert `mdi:`-ikon | Et ikon for knappen som lukker gardinen, hvis ikke definert vises standardikonet for lukket gardin |
| `open_service` | string | Valgfritt | En hvilken som helst tjeneste eller skript | En tjeneste for å åpne gardinen, standard er `cover.open_cover` |
| `stop_service` | string | Valgfritt | En hvilken som helst tjeneste eller skript | En tjeneste for å stoppe gardinen, standard er `cover.stop_cover` |
| `close_service` | string | Valgfritt | En hvilken som helst tjeneste eller skript | En tjeneste for å lukke gardinen, standard er `cover.close_cover` |
| `tilt_buttons` | string | Valgfritt | `top` (standard), `bottom`, `left`, `right`, `hidden` | Posisjon for vippekontrollknappene (vises bare hvis gardinen støtter vipping) |
| `open_tilt_service` | string | Valgfritt | En hvilken som helst tjeneste eller skript | En tjeneste for å åpne vipping, standard er `cover.open_cover_tilt` |

| `close_tilt_service` | string | Valgfritt | En hvilken som helst tjeneste eller skript | En tjeneste for å lukke vipping, standard er `cover.close_cover_tilt` |
| `button_action` | object | Valgfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Lar deg endre standardhandlingene ved klikk på knappen. |
| `tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved klikk på ikonet, hvis udefinert brukes `more-info`. |
| `double_tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved dobbeltklikk på ikonet, hvis udefinert brukes `none`. |
| `hold_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved holding av ikonet, hvis udefinert brukes `more-info`. |
| `main_buttons_position` | string | Valgfritt | `default` eller `bottom` | Flytter mediekontrollene til bunnen (fast plassert) |
| `main_buttons_full_width` | boolean | Valgfritt | `true` eller `false` | Gjør bunnkontrollene fullbredde (standard: `true` når posisjon er `bottom`) |
| `main_buttons_alignment` | string | Valgfritt | `end` (standard), `center`, `start`, `space-between` | Justering av bunnkontrollene når de ikke er fullbredde |
| `card_layout` | string | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Styling-oppsett for kortet, se [kortoppsett](#kortoppsett) |
| `rows` | number | Valgfritt | Et hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |
| `sub_button` | object | Valgfritt | Se [underknapper](#underknapper) | Legg til tilpassede knapper festet til høyre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Hovedbakgrunnsfarge for støttede elementer i gardinkortet |
| `--bubble-cover-border-radius` | `px` | Kantradius for gardinkortet |
| `--bubble-cover-icon-border-radius` | `px` | Kantradius for ikonbeholderen i gardinkortet |
| `--bubble-cover-icon-background-color` | `color` | Bakgrunnsfarge for ikonbeholderen i gardinkortet |
| `--bubble-cover-box-shadow` | Se [boksskygge](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for gardinkortet |
| `--bubble-button-box-shadow` | Se [boksskygge](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for knappene i gardinkortet |

</details>


#### Eksempel

<details>

<summary>Et kort som kan styre en rullegardin</summary>

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

## Velg

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Dette kortet lar deg legge til en nedtrekksmeny for `input_select`- / `select`-entitetene dine. Dette kortet støtter også underknapper og alle de vanlige Bubble Card-funksjonene.

> [!TIP]
> Du kan også ha valg-underknapper hvis du ønsker det, denne funksjonen er tilgjengelig i alle kortene som støtter underknapper.

### Velg-valg

<details>

<summary><b>Valg (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede valg | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatorisk** | Enhver entitet | En entitet å styre |
| `name` | string | Valgfritt | Enhver streng | Et navn for valget ditt, hvis ikke definert vises entitetsnavnet |
| `icon` | string | Valgfritt | Ethvert `mdi:`-ikon | Et ikon for valget ditt, hvis ikke definert vises entitetsikonet eller `entity-picture` |
| `force_icon` | boolean | Valgfritt | `true` eller `false` (standard) | Prioriterer ikonet fremfor `entity-picture` |
| `show_state` | boolean | Valgfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity` |
| `show_name` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring for `entity` |
| `show_last_updated` | boolean | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering for `entity` |
| `show_attribute` | boolean | Valgfritt | `true` eller `false` (standard) | Vis et attributt fra `entity` under `name` |
| `attribute` | string | Valgfritt (obligatorisk hvis `show_attribute` er satt til `true`) | Et attributt fra `entity` | Attributtet som skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfritt | `true` (standard) eller `false` | Lar teksten rulle når innholdet overskrider størrelsen på beholderen |
| `tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved klikk på ikonet, hvis udefinert brukes `more-info`. |
| `double_tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved dobbeltklikk på ikonet, hvis udefinert brukes `none`. |
| `hold_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved holding av ikonet, hvis udefinert brukes `more-info`. |
| `card_layout` | string | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Styling-oppsett for kortet, se [kortoppsett](#kortoppsett) |
| `rows` | number | Valgfritt | Et hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |
| `sub_button` | object | Valgfritt | Se [underknapper](#underknapper) | Legg til tilpassede knapper festet til høyre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Hovedbakgrunnsfarge for støttede elementer i valg-kortet |
| `--bubble-select-background-color` | `color` | Bakgrunnsfarge for valg-kortet |
| `--bubble-select-list-border-radius` | `px` | Kantradius for nedtrekksmenyen i kortet |
| `--bubble-select-list-item-accent-color` | `color` | Aksentfarge for det valgte elementet |
| `--bubble-select-list-background-color` | `color` | Bakgrunnsfarge for nedtrekksmenyen i kortet |
| `--bubble-select-list-width` | `px` | Bredde på nedtrekksmenyen i kortet |
| `--bubble-select-arrow-background-color` | `color` | Bakgrunnsfarge for nedtrekkspilen |
| `--bubble-select-button-border-radius` | `px` | Kantradius for valgknappen |
| `--bubble-select-border-radius` | `px` | Kantradius for valg-kortet |
| `--bubble-select-icon-border-radius` | `px` | Kantradius for ikonbeholderen i valg-kortet |
| `--bubble-select-icon-background-color` | `color` | Bakgrunnsfarge for ikonbeholderen i valg-kortet |
| `--bubble-select-box-shadow` | Se [boksskygge](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for valg-kortet |

</details>


#### Eksempler

<details>

<summary>Et valg-kort med en liste over scener</summary>

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

## Klima

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Dette kortet lar deg styre `climate`-entitetene dine.

> [!TIP]
> Modusvalgmenyen er en [underknapp](#underknapper) som legges til automatisk når kortet opprettes. Du kan deretter endre eller fjerne den som du vil.

### Klimavalg

<details>

<summary><b>Valg (YAML + beskrivelser)</b></summary>

| Navn                     | Type    | Krav                                 | Støttede valg                                  | Beskrivelse                                                                                                     |
|--------------------------|---------|---------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obligatorisk**                     | Klimaentitet                                   | Entiteten som skal styres (f.eks. `climate.living_room`).                                                       |
| `name`                  | string  | Valgfritt                            | Enhver streng                                       | Et tilpasset navn for kortet. Hvis ikke definert, vises entitetsnavnet.                                          |
| `icon`                  | string  | Valgfritt                            | Ethvert `mdi:`-ikon                                  | Et tilpasset ikon for kortet. Hvis ikke definert, brukes entitetsikonet eller `entity-picture`.                 |
| `force_icon`            | boolean | Valgfritt                            | `true` eller `false` (standard)                     | Prioriterer ikonet fremfor `entity-picture`.                                                           |
| `show_state`            | boolean | Valgfritt                            | `true` eller `false` (standard)                     | Vis eller skjul gjeldende tilstand for `entity`.                                                                 |
| `show_name`             | boolean | Valgfritt                            | `true` (standard) eller `false`                     | Vis eller skjul navnet på entiteten.                                                                            |
| `show_icon`             | boolean | Valgfritt                            | `true` (standard) eller `false`                     | Vis eller skjul ikonet.                                                                                          |
| `hide_target_temp_low`  | boolean | Valgfritt (kun for entiteter som støtter `target_temp_low`) | `true` eller `false` (standard) | Skjuler kontrollen for lav måltemperatur hvis det støttes av `entity`.                                          |
| `hide_target_temp_high` | boolean | Valgfritt (kun for entiteter som støtter `target_temp_high`)| `true` eller `false` (standard) | Skjuler kontrollen for høy måltemperatur hvis det støttes av `entity`.                                         |
| `state_color`           | boolean | Valgfritt                            | `true` eller `false` (standard)                     | Bruker en konstant bakgrunnsfarge når klimaentiteten er PÅ.                                              |
| `step` | number | Valgfritt | Et hvilket som helst tall | Temperaturtrinnet. |
| `min_temp` | number | Valgfritt | Et hvilket som helst tall | Minimumstemperaturen. |
| `max_temp` | number | Valgfritt | Et hvilket som helst tall | Maksimumstemperaturen. |
| `button_action` | object | Valgfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Lar deg endre standardhandlingene ved klikk på knappen. |
| `tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved klikk på ikonet, hvis udefinert brukes `more-info`. |
| `double_tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved dobbeltklikk på ikonet, hvis udefinert brukes `none`. |
| `hold_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved holding av ikonet, hvis udefinert brukes `more-info`. |                              |
| `main_buttons_position` | string | Valgfritt | `default` eller `bottom` | Flytter klimahandlingsknappene til bunnen (fast plassert) |
| `main_buttons_full_width` | boolean | Valgfritt | `true` eller `false` | Gjør bunnknappene fullbredde (standard: `true` når posisjon er `bottom`) |
| `main_buttons_alignment` | string | Valgfritt | `end` (standard), `center`, `start`, `space-between` | Justering av bunnknappene når de ikke er fullbredde |
| `card_layout` | string | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Styling-oppsett for kortet, se [kortoppsett](#kortoppsett) |
| `rows` | number | Valgfritt | Et hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |
| `sub_button`            | object  | Valgfritt                            | Se [underknapper](#underknapper)                | Legger til tilpassede knapper festet til høyre. Nyttig for en klimamodus-valgmeny.                                  |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Hovedbakgrunnsfarge for støttede elementer i klimakortet |
| `--bubble-climate-border-radius` | `px` | Kantradius for støttede elementer i klimakortet |
| `--bubble-climate-button-background-color` | `color` | Bakgrunnsfarge for knappene i klimakortet |
| `--bubble-climate-icon-border-radius` | `px` | Kantradius for ikonbeholderen i klimakortet |
| `--bubble-state-climate-fan-only-color` | `color` | Overleggsfarge for vifte-tilstanden |
| `--bubble-state-climate-dry-color` | `color` | Overleggsfarge for tørketilstanden |
| `--bubble-state-climate-cool-color` | `color` | Overleggsfarge for kjøletilstanden |
| `--bubble-state-climate-heat-color` | `color` | Overleggsfarge for varmetilstanden |
| `--bubble-state-climate-auto-color` | `color` | Overleggsfarge for auto-tilstanden |
| `--bubble-state-climate-heat-cool-color` | `color` | Overleggsfarge for varme/kjøle-tilstanden |
| `--bubble-climate-accent-color` | `color` | Aksentfarge for klimakortet |
| `--bubble-climate-box-shadow` | Se [boksskygge](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for klimabeholderen. |

</details>


#### Eksempler

<details>

<summary>Et klimakort med en nedtrekksmeny for HVAC-moduser</summary>

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

Dette kortet lar deg vise kalenderentitetene dine. Innholdet er rullbart, slik at du enkelt kan bla gjennom kommende hendelser.

### Kalendervalg

<details>

<summary><b>Valg (YAML + beskrivelser)</b></summary>

| Navn                | Type    | Krav         | Støttede valg                               | Beskrivelse                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Valgfritt    | Et hvilket som helst tall (minimum: 1)                        | Antall kalenderdager det hentes hendelser for, fra nå til slutten av den N-te dagen (standard: 7) |
| `entities`          | object  | **Obligatorisk** | Et kalenderentitetsobjekt (se nedenfor)            | Entiteten som skal styres (f.eks. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obligatorisk** | En kalenderentitet                               | Kalenderentiteten som skal vises                                                          |
| `entities.color`    | string  | Valgfritt     | En farge                                         | En tilpasset farge for kalenderchippen. Hvis ikke definert, velges en automatisk farge |
| `days`              | number  | Valgfritt    | Et hvilket som helst tall (minimum: 1)                         | Antall kalenderdager det hentes hendelser for, fra nå til slutten av den N-te dagen (standard: 7) |
| `limit`             | number  | Valgfritt     | Et tall                                        | Antall hendelser som vises på kortet                                  |
| `show_end`          | boolean | Valgfritt     | `true` eller `false` (standard)                     | Vis eller skjul sluttidspunktet for hendelser                                                    |
| `show_progress`     | boolean | Valgfritt     | `true` (standard) eller `false`                     | Vis eller skjul fremdriftslinjen for hendelsen                                                     |
| `show_started_events`| boolean | Valgfritt     | `true` (standard) eller `false`                     | Vis eller skjul hendelser som pågår                                                 |
| `scrolling_effect`  | boolean | Valgfritt | `true` (standard) eller `false` | Lar teksten rulle når innholdet overskrider størrelsen på beholderen |
| `event_action` | object | Valgfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Lar deg legge til handlinger ved klikk på en hendelse. |
| `tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved klikk på en dag, hvis udefinert brukes `none`. |
| `double_tap_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved dobbeltklikk på en dag, hvis udefinert brukes `none`. |
| `hold_action` | object | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definerer typen handling ved holding av en dag, hvis udefinert brukes `none`. |
| `card_layout` | string | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Styling-oppsett for kortet, se [kortoppsett](#kortoppsett) |
| `rows` | number | Valgfritt | Et hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |
| `sub_button` | object | Valgfritt | Se [underknapper](#underknapper) | Legg til tilpassede knapper festet til høyre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel                                  | Forventet verdi | Beskrivelse                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Hovedbakgrunnsfarge for støttede elementer i kalenderkortet  |
| `--bubble-calendar-border-radius`         | `px`           | Kantradius for støttede elementer i kalenderkortet |
| `--bubble-calendar-height`                | `px`           | Høyde for kalenderkortet                                        |

</details>

#### Eksempler

<details>

<summary>Et kalenderkort med et begrenset antall hendelser</summary>

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

<summary>Et kalenderkort med sluttidspunkt og fremdriftslinje</summary>

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


## Skilletegn

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Dette kortet er et enkelt skilletegn for å dele pop-upen din inn i kategorier / seksjoner. F.eks. Lys, Enheter, Gardiner, Innstillinger, Automasjoner...

### Skilletegnvalg

<details>

<summary><b>Valg (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede valg | Beskrivelse |
| --- | --- | --- | --- | --- |
| `name` | streng | Valgfritt, men anbefalt | Hvilken som helst streng | Et navn for skilletegnet |
| `icon` | streng | Valgfritt, men anbefalt | Ethvert `mdi:`-ikon | Et ikon for skilletegnet |
| `card_layout` | streng | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets stilling for oppsett, se [kortoppsett](#kortoppsett) |
| `rows` | tall | Valgfritt | Hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |
| `sub_button` | objekt | Valgfritt | Se [underknapper](#underknapper) | Legg til tilpassede knapper festet til høyre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Bakgrunnsfarge for linjen i skilletegnet |

</details>

#### Eksempel

<details>

<summary>Et skilletegn/skille for en "Gardiner"-seksjon</summary>

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

## Tom kolonne

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Dette kortet er her for å fylle en tom kolonne. Dette er nyttig hvis du har en `horizontal-stack` i pop-upen din med bare ett kort. Ta en titt i det nedre høyre hjørnet av dette skjermbildet for å (ikke) se det.

### Valg for tom kolonne

Dette kortet har ingen valg og støtter ikke [styling](#styling), men det støtter oppsettvalg for HA-seksjoner.

#### Eksempel

<details>

<summary>En tom kolonne i en horisontal stabel</summary>

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

## Bare underknapper

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Dette kortet er dedikert til bare underknapper. Det er perfekt for menyer, hurtighandlinger, informasjonschips eller en fast bunntekst nederst på siden.

> [!IMPORTANT]  
> Dette kortet bruker det nye skjemaet for underknapper. Bruk `sub_button.bottom` for å definere knappene dine. Seksjonen `sub_button.main` blir ignorert.

### Valg for bare underknapper

<details>

<summary><b>Valg (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Støttede valg | Beskrivelse |
| --- | --- | --- | --- | --- |
| `sub_button` | objekt | **Påkrevd** | Se [underknapper](#underknapper) | Definer underknappene dine ved hjelp av `bottom`-seksjonen |
| `hide_main_background` | boolsk | Valgfritt | `true` eller `false` (standard) | Fjern kortets bakgrunn |
| `footer_mode` | boolsk | Valgfritt | `true` eller `false` (standard) | Fest kortet nederst på siden |
| `footer_full_width` | boolsk | Valgfritt | `true` eller `false` (standard) | Gjør bunnteksten i full bredde (100 %) |
| `footer_width` | tall | Valgfritt | Hvilket som helst tall | Bunntekstens bredde i piksler når `footer_full_width` er `false` |
| `footer_bottom_offset` | tall | Valgfritt | Hvilket som helst tall | Avstand fra bunnen av siden i piksler (standard: `16`) |
| `card_layout` | streng | Valgfritt | `normal` (standard hvis ikke i seksjonsvisning), `large` (standard hvis i seksjonsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets stilling for oppsett, se [kortoppsett](#kortoppsett) |
| `rows` | tall | Valgfritt | Hvilket som helst tall | Antall rader (høyde) (f.eks. `2`) |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Bunntekstens bredde når `footer_full_width` er `false` |
| `--bubble-footer-bottom` | `px` | Bunntekstens avstand fra bunnen |
| `--bubble-footer-box-shadow` | se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for bunntekstbeholderen |

</details>

#### Eksempler

<details>

<summary>Chips (som på skjermbildet)</summary>

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

<summary>En fast bunntekstmeny</summary>

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

## Underknapper

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

I alle kort som støtter dette valget, kan du legge til underknapper for å tilpasse kortene dine enda mer. Du kan for eksempel lage en knapp som kan styre en robotstøvsuger, et værkort, eller nesten hva som helst du kan finne på. Disse underknappene støtter trykkhandlinger og de fleste av knappevalgene.

Underknapper støtter nå tre typer: **Standard (knapp)**, **Glidebryter** og **Nedtrekksmeny / Velg**. Du kan blande typer i det samme kortet, plassere underknapper øverst eller nederst, og organisere dem i grupper for mer avanserte oppsett.

#### Plassering og grupper for underknapper

<details>

<summary><b>Struktur for underknapper (main / bottom + grupper)</b></summary>

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

**Merknader:**
- `main` og `bottom` er to uavhengige seksjoner. Nedre underknapper er festet til bunnen av kortet.
- `main_layout` og `bottom_layout` godtar `inline` (standard) eller `rows` for å stable grupper vertikalt.
- Grupper er objekter med en `group`-array og valgfri `buttons_layout` (`inline` eller `column`).
- `justify_content` er tilgjengelig **bare for nedre grupper** (`start`, `center`, `end`, `fill`).
- Når nedre underknapper er til stede, bytter kortoppsettet automatisk til `large` med mindre du eksplisitt angir et annet oppsett.
- Eldre `sub_button`-arrays støttes fortsatt og behandles som `main`-seksjonen.

</details>

### Valg for underknapper

<details>

<summary><b>Valg (YAML + beskrivelse)</b></summary>

| Navn | Type | Krav | Støttede valg | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | streng | Valgfritt | Hvilken som helst entitet | En entitet å styre |
| `name` | streng | Valgfritt | Hvilken som helst streng | Et navn for underknappen din, hvis ikke definert vises entitetsnavnet |
| `icon` | streng | Valgfritt | Ethvert `mdi:`-ikon | Et ikon for underknappen din, hvis ikke definert vises entitetens ikon eller entitetsbilde |
| `force_icon` | boolsk | Valgfritt | `true` eller `false` (standard) | Tving frem ikonet selv om et entitetsbilde er tilgjengelig |
| `sub_button_type` | streng | Valgfritt | `default`, `slider` eller `select` | Velg typen underknapp |
| `show_background` | boolsk | Valgfritt | `true` (standard) eller `false` | Vis en bakgrunn for underknappen din, den vil endre farge basert på entitetens tilstand |
| `state_background` | boolsk | Valgfritt | `true` (standard) eller `false` | Bruk tilstandsfargen når entiteten er `on` |
| `light_background` | boolsk | Valgfritt | `true` (standard) eller `false` | Bruk lysfargen for bakgrunnen når tilgjengelig |
| `show_state` | boolsk | Valgfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity` |
| `show_name` | boolsk | Valgfritt | `true` eller `false` (standard) | Vis eller skjul navnet |
| `show_icon` | boolsk | Valgfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolsk | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring av `entity` |
| `show_last_updated` | boolsk | Valgfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering av `entity` |
| `show_attribute` | boolsk | Valgfritt | `true` eller `false` (standard) | Vis en attributt til `entity` under `name` |
| `attribute` | streng | Valgfritt (påkrevd hvis `show_attribute` er satt til `true`) | En attributt fra `entity` | Attributten som skal vises (f.eks. `brightness`) |
| `select_attribute` | streng | Valgfritt | En attributtliste fra `entity` (se støttede valg over) | Denne attributtlisten åpner en nedtrekksmeny hvis den trykkes på (f.eks. `effect_list`) |
| `show_arrow` | boolsk | Valgfritt | `true` (standard) eller `false` | Vis eller skjul nedtrekkspilen for underknapper med velg |
| `scrolling_effect` | boolsk | Valgfritt | `true` (standard) eller `false` | Tillat at teksten ruller når innholdet overskrider beholderens størrelse |
| `tap_action` | objekt | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved trykk på underknappen, hvis ikke definert brukes `more-info` |
| `double_tap_action` | objekt | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved dobbelttrykk på underknappen, hvis ikke definert brukes `none` |
| `hold_action` | objekt | Valgfritt | Se [handlinger](#trykk--dobbelttrykk--og-holdehandlinger) | Definer typen handling ved hold på underknappen, hvis ikke definert brukes `more-info` |
| `fill_width` | boolsk | Valgfritt | `true` eller `false` | Fyll tilgjengelig bredde (standard: `false` for main, `true` for bottom) |
| `width` | tall eller streng | Valgfritt | Hvilket som helst tall eller CSS-lengde | Egendefinert bredde (`px` for main-seksjonen, `%` for bottom-seksjonen som standard) |
| `custom_height` | tall | Valgfritt | Hvilket som helst tall | Egendefinert høyde i piksler |
| `content_layout` | streng | Valgfritt | `icon-left` (standard), `icon-top`, `icon-bottom`, `icon-right` | Ikonplassering inne i underknappen |
| `always_visible` | boolsk | Valgfritt | `true` eller `false` (standard) | **Bare glidebryter.** Vis alltid glidebryteren i stedet for å åpne den ved trykk |
| `show_button_info` | boolsk | Valgfritt | `true` eller `false` (standard) | **Bare glidebryter.** Vis ikon/navn/tilstand når `always_visible` er aktivert |
| `visibility` | objekt eller liste | Valgfritt | Se [betingelser](https://www.home-assistant.io/docs/scripts/conditions/) | Vis eller skjul underknappen basert på betingelser |
| `hide_when_parent_unavailable` | boolsk | Valgfritt | `true` eller `false` (standard) | Skjul underknappen hvis den overordnede kortentiteten er utilgjengelig |

</details>

<details>

<summary><b>Valg for glidebryter-underknapper (samme som knappeglidebrytere)</b></summary>

<br>

Underknapper av typen glidebryter støtter de samme glidebrytervalgene som knappeglidebrytere, inkludert:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet verdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Hjørneradius for underknappene |
| `--bubble-sub-button-background-color` | `color` | Bakgrunnsfarge for underknappene |
| `--bubble-sub-slider-border-radius` | `px` | Hjørneradius for underknapper av typen glidebryter |
| `--bubble-sub-slider-background-color` | `color` | Bakgrunnsfarge for underknapper av typen glidebryter |
| `--bubble-sub-slider-height` | `px` | Høyde for alltid synlige underknapper av typen glidebryter |
| `--bubble-sub-button-dark-text-color` | `color` | Tekstfarge på lyse underknapp-bakgrunner |

</details>

#### Eksempler

<details>

<summary>En knapp med noen underknapper for å lage et robotstøvsugerkort (som på skjermbildet)</summary>

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

<summary>En knappeglidebryter med en underknapp som viser lysstyrken og en som slår lyset av/på (som på skjermbildet)</summary>

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

<summary>En knapp som viser innendørs- og utendørstemperaturen med været for i dag og i morgen (skjermbilde inkludert)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Uflaks for meg, det er overskyet hele tiden, men alle ikonene endrer seg basert på været.

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

## Kortoppsett

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card støtter fullt ut seksjonsvisningen i Home Assistant. Du kan endre kortoppsettet for å gjøre kortet større, og også endre antall kolonner eller rader kortet skal oppta i seksjonsvisningen din (bare på kortene som støtter dette valget). Disse oppsettene støttes også i alle andre visningstyper.

<details>

<summary><b>Tilgjengelige kortoppsett</b></summary>

| Oppsett | Beskrivelse |
| --- | --- |
| `normal` | Det vanlige oppsettet (ikke optimalisert for seksjonsvisningen) |
| `large` | Et større oppsett som endrer størrelse etter de valgte radene i seksjonsvisningen (optimalisert for seksjonsvisningen) |
| `large-2-rows` | Et større oppsett med 2 rader med underknapper som endrer størrelse etter de valgte radene i seksjonsvisningen (optimalisert for seksjonsvisningen) |
| `large-sub-buttons-grid` | Dette oppsettet viser underknapper i et rutenett, `rows` må settes til minst `2`.

</details>

#### Eksempler

<details>

<summary>En stor knapp som viser energistatistikk med 2 rader underknapper (skjermbilde inkludert)</summary>

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

<summary>En stor knapp med flere rader og 12 underknapper</summary>

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

## Trykk-, dobbelttrykk- og holdehandlinger

Du kan også bruke Home Assistants standard trykkhandlinger, dobbelttrykkhandlinger og holdehandlinger på kortene som støtter dette valget. Dette gjør det for eksempel mulig å vise "mer info"-vinduet ved å holde nede et knappeikon, eller kjøre en tjeneste når en underknapp trykkes.

**Merk: Når en `double_tap_action` er konfigurert, får den vanlige `tap_action` en forsinkelse på 200ms for å muliggjøre
gjenkjenning av et dobbelttrykk. Hvis denne forsinkelsen er uønsket, sett `double_tap_action` til `none` for å deaktivere håndtering av dobbelttrykk.**

### Handlingsvalg

<details>

<summary><b>Valg (YAML + beskrivelse)</b></summary>

| Navn | Type | Støttede valg | Beskrivelse |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Handling som skal utføres |
| `target` | object |  | Fungerer bare med `call-service`. Følger [home-assistant-syntaksen](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Enhver sti i dashbordet ditt | Sti det skal navigeres til (f.eks. `'#kitchen'` for å åpne en pop-up) når handlingen er definert som navigate |
| `url_path` | string | Enhver lenke | URL som skal åpnes ved klikk (f.eks. `https://www.google.com`) når `action` er `url` |
| `service` | string | Enhver tjeneste | Tjeneste som skal kalles (f.eks. `media_player.media_play_pause`) når `action` er definert som `call-service` |
| `data` eller `service_data` | object | Enhver tjenestedata | Tjenestedata som skal inkluderes (f.eks. `entity_id: media_player.kitchen`) når `action` er definert som `call-service` |
| `confirmation` | object | Se [bekreftelse](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Vis en bekreftelses-pop-up (ikke en Bubble Card-pop-up), overstyrer standard `confirmation`-objektet |

</details>

#### Eksempel

<details>

<summary>En knapp for å åpne en pop-up</summary>

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

Du kan legge til egendefinerte stiler for å endre CSS-en til alle kort **uten å bruke card-mod**, på fire måter:

- I redigereren går du til kortet du vil endre, deretter til _Stilvalg > Egendefinerte stiler og JS-maler_, og legger til dine egendefinerte stiler (se tips og eksempler nedenfor).
- I redigereren (eller i [YAML](#moduler)) går du til kortet du vil endre, deretter til _Moduler_, og oppretter en ny modul (den blir tilgjengelig for alle kort), eller går til **Module Store** for å installere en av de tilgjengelige modulene (mer informasjon om moduler finner du [nedenfor](#moduler)).
- I en [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes)-fil ved å legge til CSS-variabler i YAML (disse er tilgjengelige i hvert korts dokumentasjon ovenfor). Dette gir mulighet for globale endringer.

  <details>
  
  <summary>Eksempel</a></summary>
  
  <br>

  Ikke kopier linjen `Bubble:`, dette er navnet på temaet du bruker. Du må også fjerne `--` fra variablene.

  Du må kjøre handlingen [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) for å oppdatere temaet etter eventuelle endringer.

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
  
- I YAML ved å legge til `styles: |` etterfulgt av dine egendefinerte stiler (se tips og eksempler nedenfor).

> [!TIP]  
> **For å forstå hvilke stilklasser som kan endres**, kan du ta en titt i mappen [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) i dette repositoriet. I hver kortmappe finner du en fil som heter `styles.css`. Disse filene inneholder alle de anvendte stilene. Dette gir langt flere muligheter enn CSS-variabler, men det må legges til individuelt for hvert kort.
> 
> Du kan også finne mange [eksempler fra fellesskapet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), eller noen fra [Home Assistant-forumet](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) ved å søke litt.
>
> Bubble-temaet for Home Assistant (som på skjermbildene) finner du [her](https://github.com/Clooos/Bubble).
>
> En veiledningsvideo kommer snart på [YouTube-kanalen](https://www.youtube.com/@cloooos) min!

> [!IMPORTANT]  
> Vær oppmerksom på at du kanskje må legge til `!important;` til enkelte CSS-stiler som allerede er definert (se eksemplene nedenfor).

> [!TIP]  
> Underknapper kan målrettes med navnebaserte klasser. For eksempel kan en underknapp med navnet "My sub-button" stiles med `.my-sub-button`. Glidebryter-underknapper eksponerer også `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, osv.

#### Eksempler

<details>

<summary>Endre skriftstørrelsen på et hvilket som helst Bubble Card-kort</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Endre bakgrunnsfargen til en enkelt knapp i en horisontal knapperad</summary>

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

<summary>Endre bakgrunnsfargen til et kort</summary>

<br>

Denne fungerer på alle Bubble Card-korttyper (unntatt pop-uper):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Denne gjør det samme, men bare i et knappekort (den fungerer også for pop-up-toppteksten): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

For å endre fargen når den er `on`, se stilmalene nedenfor.

</details>

<details>

<summary>Endre fargen på en knappeglidebryter</summary>

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

<summary>Endre linjefargen til et skilletegn</summary>

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

<summary>Endre fargen på et ikon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

For et ikon i en horisontal knapperad.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Endre bakgrunnsfargen til en ikonbeholder</summary>

<br>

Denne fungerer på alle Bubble Card-korttyper (unntatt pop-uper):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Denne gjør det samme for pop-up-toppteksten: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Endre størrelsen på underknappene (perfekt for det store oppsettet)</summary>

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

<summary>Endre bakgrunnsfargen til den andre underknappen</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Endre størrelsen på et ikon</summary>

<br>

For hovedikonet.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

For underknapp-ikonene.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Bruke et bilde i stedet for et ikon i en underknapp</summary>

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

Bare last opp dette bildet i en mappe kalt "pictures" (eller navnet du vil ha) i "www"-mappen i Home Assistant.

</details>

<details>

<summary>Avansert eksempel: Lage en horisontal rad med underknapper (skjermbilde inkludert)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Jeg elsker virkelig denne, jeg bruker den som en topptekst på dashbordet mitt.

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

## Maler

**Bubble Card støtter ikke Jinja-maler**, men avanserte brukere kan legge til maler i JS direkte i [egendefinerte stiler](#styling). Dette gjør det for eksempel mulig å dynamisk endre et ikon, tekstene eller fargene til et element, vise eller skjule et element betinget (som en underknapp), eller nesten hva som helst basert på en tilstand, et attributt og mer.

> [!TIP]  
> Mer informasjon om JS-maler finner du [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mitt råd er å **alltid sjekke nettleserkonsollen** for å være sikker på at alt fungerer som det skal.

> [!IMPORTANT]  
> **Alle maler som ikke endrer en CSS-egenskap må plasseres helt til slutt! Som for eksempel å endre et ikon, en tekst eller et hvilket som helst element.**

#### Tilgjengelige variabler og funksjoner

<details>

<summary>Variabler</summary>

<br>

Du har tilgang til disse variablene i de fleste kort:

- `state` returnerer tilstanden til den definerte `entity`.
  
- `entity` returnerer entiteten du har definert, som `switch.test` i dette eksempelet.
  
- `icon` kan brukes slik for å endre ikonet: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` returnerer tilstanden til den definerte `entity` for din første underknapp, `[0]` er tilstanden til den første underknappen, `[1]` den andre...
  
- `subButtonIcon[0]` kan brukes slik for å endre ikonet til den første underknappen: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` er ikonet til den første underknappen, `[1]` den andre...
  
- `card` returnerer kortelementet i DOM.
  
- `hass` er en avansert variabel som gir deg enda mer kontroll, for eksempel kan du returnere tilstanden til `light.kitchen` slik: `hass.states['light.kitchen'].state`, eller et attributt slik: `hass.states[entity].attributes.brightness`.

- `this` returnerer mye nyttig informasjon om oppsettet og dashbordet ditt, bruk dette bare hvis du vet hva du gjør.

</details>

<details>

<summary>Funksjoner</summary>

<br>

Du har tilgang til alle globale JS-funksjoner, men du har også tilgang til:

- `getWeatherIcon` kan brukes til å returnere et værikon basert på en tilstand som returnerer været. For eksempel kan du gjøre dette `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` for å endre ikonet til den tredje underknappen til dagens værikon, `.forecast[1]?.condition` er for i morgen...

  Du må opprette en malsensor for dette. Her er hva du kan legge til i `configuration.yaml`:
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
- `hass.formatEntityState(state)` kan brukes til å oversette en tilstand (kan også brukes til å hente en tilstandsenhet, uten at du trenger å legge den til manuelt).
- `hass.formatEntityAttributeValue(state, "attribute")` kan brukes til å oversette et attributt (kan også brukes til å hente en tilstandsenhet, uten at du trenger å legge den til manuelt).

</details>

#### Eksempler

Du finner mange eksempler nedenfor, men du finner også svært avanserte maler på min [Patreon-side](https://www.patreon.com/c/Clooos), som en (min favoritt) som gjør det mulig med opptil fire betingede merker plassert rundt kortets ikoner. Det er også en flott måte å lære om alle mulighetene med egendefinerte stiler og maler i Bubble Card!

<details>
<summary>Eksempler fra min Patreon-side</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Legge til Home Assistant-lignende merker på et hvilket som helst kort</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Vise formatert dato og klokkeslett i et skilletegn uten å bruke noen entitet</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Vise tilstanden til en underknapp på to linjer</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Tilpasse etiketter og ikoner inne i en underknapp for velg</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Legge til en vedvarende påminnelses-pop-up som bare vises når det trengs</a>
</p>

<br>

</details>

<details>

<summary>Endre bakgrunnsfargen til en knapp som er rød når den er <code>off</code> og blå når den er <code>on</code></summary>

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

<summary>Endre bakgrunnsfargen til en knapp basert på en entitet for den horisontale knapperaden</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Vise/skjule en underknapp betinget</summary>

<br>

Dette eksempelet viser den første underknappen bare når støvsugeren min sitter fast.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Dette eksempelet viser en underknapp når batteriet er under 10 %. Nyttig med en underknapp som viser "Lavt batteri".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Endre et ikon eller et underknapp-ikon betinget</summary>

<br>

Dette eksempelet endrer et knappeikon bare når en støvsuger sitter fast.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Dette eksempelet endrer ikonet til den første underknappen bare når en støvsuger sitter fast.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Endre fargen på et ikon eller et underknapp-ikon betinget</summary>

<br>

Dette eksempelet endrer fargen på et knappeikon basert på tilstanden.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Dette eksempelet endrer fargen på et underknapp-ikon basert på tilstanden. `.bubble-sub-button-1` er den første underknappen, bytt ut `1` hvis du vil endre et annet underknapp-ikon.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animere et vifteikon betinget</summary>

<br>

Dette eksempelet roterer et knappeikon når en vifte er `on`.
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

<summary>Bruke maler for tekster (som navn eller tilstand)</summary>

<br>

Dette eksempelet endrer navnet/tilstanden til en knapp med "Det er for tiden sol" avhengig av været ditt.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
eller når det brukes for underknapper:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Hvis du vil lage en mal for tilstanden (`.bubble-state`), ikke slå på `show_state: true`, slå bare på `show_attribute: true` uten noe attributt.

</details>

<details>

<summary>Avansert eksempel: Endre fargen på en underknapp når en pop-up er åpen</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Avansert eksempel: Lage en mal for et skilletegnnavn basert på en tilstand oversatt til ditt språk</summary>

<br>

Du kan bruke `hass.formatEntityState(state)` for å oversette en tilstand og `hass.formatEntityAttributeValue(state, "attribute")` for å oversette et attributt.

Dette eksempelet endrer navnet og ikonet basert på været, "Nuageux" betyr "Overskyet" på fransk.

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

## Moduler

Moduler er en kraftig funksjon som lar deg lagre, gjenbruke og dele egendefinerte stiler og maler på tvers av alle Bubble Card-kortene dine. I stedet for å kopiere og lime inn den samme koden i flere kort, kan du opprette en modul og bruke den der du trenger den. Dette gjør det mye enklere og mer effektivt å administrere utseendet og følelsen til dashbordet ditt.

Men denne funksjonen er så mye kraftigere enn som så. Den lar deg selv legge til ekte funksjoner i Bubble Card-redigereren, ved hjelp av alle standardvalgene fra [Home Assistant-skjemaet](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Objektvelgeren er forbedret slik at den viser endringer i sanntid og støtter attributter riktig.

Du kan også utforske **Module Store** for å finne og installere [moduler laget av fellesskapet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), eller dele dine egne kreasjoner!

> [!TIP]
> Koden til en modul fungerer nøyaktig på samme måte som koden i `styles`-delen av et kort. Alle de samme variablene og funksjonene fra [Maler](#maler)-delen er tilgjengelige.

<br>

### Oppstart

> [!IMPORTANT]
> Fra og med v3.1.0 er Bubble Card Tools den anbefalte lagringsløsningen for moduler. Den gamle metoden med malsensor fungerer fortsatt for eksisterende oppsett, men nye moduler og Module Store-funksjoner støttes best via Bubble Card Tools.

Bubble Card Tools-integrasjonen aktiverer Modulredigereren og Module Store, og lagrer moduler som individuelle YAML-filer. Eksisterende moduler migreres automatisk.

Installasjons- og konfigurasjonstrinnene er forklart her:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Modulredigereren

Du får tilgang til Modulredigereren fra innstillingene til et hvilket som helst kort, under **Moduler**-delen. Redigereren har to hovedfaner:

#### Fanen Mine moduler

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Denne fanen viser alle de installerte modulene dine og lar deg:

- **Bruke** eksisterende moduler på det gjeldende kortet
- **Opprette** en ny modul fra bunnen av
- **Redigere** eksisterende moduler med sanntidsforhåndsvisning
- **Slette** moduler du ikke lenger trenger
- **Søke** og **sortere** moduler (alfabetisk, nyeste, aktive først)
- **Sette global status** slik at en modul automatisk brukes på alle kort
- **Importere/eksportere** moduler for sikkerhetskopiering eller deling

#### Fanen Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Denne fanen viser [alle tilgjengelige moduler fra fellesskapet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), og lar deg:

- **Utforske** alle moduler laget av fellesskapet
- **Søke** og filtrere moduler etter navn, kompatibilitet eller nøkkelord
- **Installere** moduler med ett klikk
- **Oppdatere** installerte moduler når nye versjoner er tilgjengelige

> [!TIP]
> I redigereren kan du aktivere moduler som ikke støttes, for å teste moduler som ennå ikke er merket som kompatible med en gitt korttype.

<br>

### Slik bruker du moduler

#### Opprette en ny modul

<details>

<summary>Klikk for å utvide</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gå til redigereren for et hvilket som helst kort og utvid **Moduler**-delen.
2. Klikk på **Opprett ny modul**.
3. Fyll inn informasjonen om modulen.
4. Skriv CSS- og/eller JavaScript-malkoden din i **Kode**-redigereren.
5. (Valgfritt) Opprett et egendefinert konfigurasjonsgrensesnitt i **Redigerer**-delen (som fargevelgeren i skjermbildet ovenfor, full dokumentasjon tilgjengelig [her](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Klikk på **Lagre**.

Modulen din er nå tilgjengelig for bruk på alle kortene dine!

<br>

</details>

#### Bruke en modul på et kort

<details>

<summary>Klikk for å utvide</summary>

<br>

- **Via redigereren:**

  - Gå til redigereren for kortet du vil bruke modulen på.
  - Utvid **Moduler**-delen.
  - Klikk på modulen du vil bruke fra listen.
  - Under "Bruk på", klikk på "Dette kortet". Modulen er nå aktiv. Du kan bruke flere moduler på det samme kortet.

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

#### Bruke en modul globalt

<details>

<summary>Klikk for å utvide</summary>

<br>

Du kan sette en modul til å automatisk brukes på alle Bubble Cards:

**Dette er ikke tilgjengelig for moduler med en redigerer, siden disse krever en spesifikk konfigurasjon for å fungere.**

- **Via redigereren:**

  - I Modulredigereren, finn modulen din i fanen **Mine moduler**.
  - Slå på **Alle kort**-bryteren ved siden av modulnavnet.
  - Modulen vil nå bli brukt på alle kort automatisk.
 
- **Via YAML:**

  I YAML-konfigurasjonen til modulen (i `bubble-modules.yaml`), bare legg til `is_global: true`.

<br>

</details>

#### Ekskludere et enkelt kort fra en global modul

<details>

<summary>Klikk for å utvide</summary>

<br>

Hvis du har en global modul, men vil ekskludere den fra et bestemt kort:

- **Via redigereren:**
  
  - I kortets **Moduler**-del ser du de globale modulene oppført.
  - Klikk på en global modul, slå av "Dette kortet" for å ekskludere den fra dette bestemte kortet.

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

#### Dele modulen din til Module Store

<details>

<summary>Klikk for å utvide</summary>

<br>

For å dele modulen din til Module Store, klikk i Modulredigereren, nederst under "Eksporter modul", på "Kopier for GitHub" og lim inn innholdet i en ny diskusjon i kategorien [Del modulene dine](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Rediger beskrivelsen** (om nødvendig), **eksempelet** (for YAML-brukere), og husk å **inkludere minst ett skjermbilde** for Module Store.

**Modulen din blir tilgjengelig rett etterpå** (etter en oppdatering av Store), så dobbeltsjekk at alt er riktig skrevet og at modulen fungerer som forventet. Du kan selvfølgelig redigere/oppdatere modulen etter at den er delt.

<br>

</details>

#### Versjonshåndtering

<details>

<summary>Klikk for å utvide</summary>

<br>

Module Store sjekker automatisk om det finnes oppdateringer til installerte moduler. Når oppdateringer er tilgjengelige:

1. Du vil se en oppdateringsindikator i **Module Store**-fanen.
2. Klikk på **Oppdater** på moduler med tilgjengelige oppdateringer.
3. Bekreft oppdateringen i Module Store.

<br>

</details>

#### Definere støttede korttyper

<details>

<summary>Klikk for å utvide</summary>

<br>

Enkelte moduler er kanskje ikke kompatible med alle korttyper. Du kan angi hvilke kort en modul støtter.  
Hvis du vil at en modul skal være kompatibel med **alle kort**, kan du ganske enkelt utelate `supported`-feltet (eller bruke **Alle kort**-valget i redigereren).

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

### Eksempler

<details>
<summary>Enkel stilingsmodul</summary>

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
<summary>Modul med egendefinert konfigurasjon</summary>

<br>

Denne modulen er tilgjengelig [her](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Flere eksempler finner du i Module Store, eller [her](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Hjelp

Du kan gjerne åpne en issue hvis noe ikke fungerer som forventet. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Har du spørsmål eller tanker om Bubble Card? Vil du dele dashbordene eller oppdagelsene dine? Du kan gå til Home Assistant-forumet, til Bubble Card-subredditen eller til GitHub Discussions-seksjonen.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bidra

Bidrag er velkomne! Enten det er feilrettinger, nye funksjoner, oversettelser eller forbedringer av dokumentasjonen, kan du gjerne åpne en pull request.

Før du begynner, vennligst les [utviklerguiden](DEVELOPERS.md), som forklarer hvordan du setter opp det lokale miljøet ditt, bygger prosjektet og tester endringene dine.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Doner

Jeg bruker mesteparten av fritiden min på å gjøre dette prosjektet så bra som mulig. Så hvis du setter pris på arbeidet mitt, ville enhver donasjon vært en fin måte å vise støtten din på 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Tusen takk til alle for støtten deres, dere er min største motivasjon!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
