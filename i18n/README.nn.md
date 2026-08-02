<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Denne sida er ei automatisk omsetjing. Er du i tvil, gjeld den [originale engelske dokumentasjonen](../README.md). Er det ei setning som les feil? All hjelp er velkomen, og å [rette opp denne sida](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.nn.md) tek berre eitt minutt: GitHub tek seg av forken og pull-forespurnaden. Tusen takk på førehand! 🍻

# Bubble Card

🌐 **[Les dette på eit anna språk](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card er ei minimalistisk og tilpassbar kortsamling for Home Assistant, med moderne pop-up-vindauge og ein integrert Module Store med over 100 modular laga av fellesskapet.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Innhaldsliste

**[`Installasjon`](#installasjon)**  **[`Konfigurasjon`](#konfigurasjon)**  **[`Pop-up`](#pop-up)**  **[`Horisontal knapperad`](#horisontal-knapperad)**  **[`Knapp`](#knapp)**  **[`Mediespelar`](#mediespelar)**  **[`Gardin`](#gardin)**  **[`Select`](#select)**  **[`Klima`](#klima)**  **[`Kalender`](#kalender)**  **[`Skiljeteikn`](#skiljeteikn)**  **[`Tom kolonne`](#tom-kolonne)**  **[`Berre underknappar`](#berre-underknappar)**  **[`Underknappar`](#underknappar)**  **[`Kortoppsett`](#kortoppsett)**  **[`Handlingar`](#trykk--dobbelttrykk--og-haldhandlingar)**  **[`Styling`](#styling)**  **[`Malar`](#malar)**  **[`Modular`](#modular)**  **[`Hjelp`](#hjelp)**  **[`Bidra`](#bidra)**  **[`Doner`](#doner)**

<br>

## Installasjon

**Lågaste støtta versjon av Home Assistant:** 2023.9.0

<details>

<summary>Utan HACS</summary>

<br>

1. Last ned denne fila: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Legg denne fila i mappa `<config>/www`
3. På dashbordet ditt, klikk på ikonet oppe i høgre hjørne og deretter på `Edit dashboard`
4. Klikk på ikonet igjen og deretter på `Manage resources`
5. Klikk på `Add resource`
6. Kopier og lim inn dette: `/local/bubble-card.js?v=1`
7. Klikk på `JavaScript Module` og deretter på `Create`
8. Gå tilbake og last sida på nytt
9. No kan du klikke på `Add card` nede i høgre hjørne og søkje etter `Bubble Card`
10. Etter kvar oppdatering av fila må du redigere `/local/bubble-card.js?v=1` og endre versjonen til eit høgare tal

Om det ikkje fungerer, prøv å tømme nettlesarens buffer.

</details>

<details>

<summary>Med HACS (anbefalt)</summary>

<br>

Denne metoden gjer at du får oppdateringar direkte via Home Assistant Community Store

1. Om HACS ikkje er installert enno, last det ned etter instruksjonane på [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Gjennomfør den innleiande konfigurasjonen av HACS etter instruksjonane på [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Gå til "HACS" i sidefeltet
4. Søk etter "Bubble Card", eller klikk på den blå knappen under
5. Klikk på "Download"
6. Gå tilbake til dashbordet og klikk på ikonet oppe i høgre hjørne og deretter på `Edit dashboard`
7. No kan du klikke på `Add card` nede i høgre hjørne og søkje etter `Bubble Card`

Om det ikkje fungerer, prøv å tømme buffer i nettlesaren/appen (på alle einingane dine om nødvendig).

#### Videoar

Du kan også ta ein kikk på YouTube-kanalen min for steg-for-steg-videoar.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurasjon

Alle val kan setjast opp i Home Assistant-editoren. Men du finn fleire detaljar og YAML-en i dokumentasjonen under.

<details>

<summary><b>Hovudval (YAML + skildring)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `type` | string | **Påkravd** | `custom:bubble-card` | Type kort |
| `card_type` | string | **Påkravd** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` eller `sub-buttons` | Type Bubble Card, sjå under |
| `styles` | objektliste | Valfritt | Alle CSS-stilsett | Lèt deg tilpasse CSS-en for Bubble Card, sjå [styling](#styling) |

</details>

<details>

<summary><b>Globale CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Kantradius for alle støtta element |
| `--bubble-main-background-color` | `color` | Hovudbakgrunnsfarge for alle støtta element |
| `--bubble-secondary-background-color` | `color` | Sekundær bakgrunnsfarge for alle støtta element |
| `--bubble-accent-color` | `color` | Aksentfarge for alle støtta element |
| `--bubble-icon-border-radius` | `px` | Kantradius for ikon på alle støtta element |
| `--bubble-icon-background-color` | `color` | Bakgrunnsfarge for ikon på alle støtta element |
| `--bubble-sub-button-border-radius` | `px` | Kantradius for alle underknappar |
| `--bubble-sub-button-background-color` | `color` | Bakgrunnsfarge for alle underknappar |
| `--bubble-box-shadow` | sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskugge for alle støtta element |
| `--bubble-border` | sjå [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Kant for alle støtta kort |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Ta ein kikk på denne [videoen](https://www.youtube.com/watch?v=0hSQOlBxKKI) for å lære om Bubble Card og kva han kan gjere.** YouTube-kanalen min er ganske ny og fokuserer på opplæringsvideoar om Home Assistant og Bubble Card. Ikkje nøl med å abonnere for å hjelpe kanalen min med å bli meir synleg. Takk på førehand!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Dette kortet lèt deg lage ein pop-up med kva innhald du vil. Kvar pop-up er **skjult som standard** og kan opnast ved å peike på lenkja si (t.d. `'#pop-up-name'`), med kva kort som helst som støttar `navigate`-[handlinga](#trykk--dobbelttrykk--og-haldhandlingar), eller med [den horisontale knapperaden](#horisontal-knapperad) som følgjer med.

> [!TIP]
> ### Utløysar for pop-up 
> Denne funksjonen lèt deg opne ein pop-up basert på tilstanden til ei eining, til dømes kan du opne ein "Tryggleik"-pop-up med eit kamera når ein person er utanfor huset ditt. Du kan også lage ein brytar-hjelpar (input_boolean) og utløyse opning/lukking av han i ein automasjon.
> <details>
> <summary>Opne ein pop-up når ein <code>binary_sensor</code> er <code>on</code></summary>
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
> ### Ulike måtar å lukke ein pop-up på 
> Det er mange måtar å lukke ein pop-up på. Du kan til dømes sveipe frå toppteksten til pop-uppen og ned, gjere eit langt sveip inne i pop-uppen og ned, trykke Escape på skrivebord, fjerne hashen i URL-en eller berre trykke på lukkeknappen.
>


### Val for pop-up

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `hash` | string | **Påkravd** | Ein unik hash (t.d. `'#kitchen'`) med ' ' | Slik opnar du pop-uppen din |
| `popup_style` | string | Valfritt | `bubble` (standard) eller `classic` | Definerer det visuelle utsjånaden til pop-uppen |
| `popup_mode` | string | Valfritt | `default` (standard), `fit-content`, `centered` eller `adaptive-dialog` | Definerer oppsettmodusen til pop-uppen |
| `with_bottom_offset` | boolean | Valfritt | `true` eller `false` (standard) | Berre brukt med `popup_mode: fit-content` eller `adaptive-dialog`. Legg til ein botnforskyving på mobil, nyttig når dashbordet ditt har eit bunnkort. |
| `full_width_on_mobile` | boolean | Valfritt | `true` eller `false` (standard) | Berre brukt med `popup_mode: centered`. Utvidar pop-uppen til full skjermbreidd på mobil, nyttig på mindre skjermar. |
| `performance_mode` | string | Valfritt | `default` (standard) eller `performance` | Optimaliserer opningsanimasjonen til pop-uppen. `performance` forseinkar innhaldsvisinga og bakgrunnsuskarpinga litt, og slår også av bakgrunnsuskarping viss det er sett. |
| `auto_close` | string | Valfritt | Ei tidsgrense i millisekund (t.d. `10000` for 10s) | Lukk pop-uppen automatisk etter ei tidsgrense |
| `close_on_click` | boolean | Valfritt | `true` eller `false` (standard) | Lukk pop-uppen automatisk etter kva interaksjon som helst |
| `close_by_clicking_outside` | boolean | Valfritt | `true` (standard) eller `false` | Lukk pop-uppen ved å klikke utanfor han |
| `width_desktop` | string | Valfritt | Kva CSS-verdi som helst | Breidd på skrivebord (`100%` som standard på mobil) |
| `margin` | string | Valfritt | Kva CSS-verdi som helst | Bruk dette **berre** viss pop-uppen din ikkje er godt sentrert på mobil (t.d. `13px`) |
| `margin_top_mobile` | string | Valfritt | Kva CSS-verdi som helst | Toppmarg på mobil (t.d. `-56px` viss toppteksten din er skjult) |
| `margin_top_desktop` | string | Valfritt | Kva CSS-verdi som helst | Toppmarg på skrivebord (t.d. `50vh` for ein halvstor pop-up eller `calc(100vh - 400px)` for ei fast høgd på `400px`) |
| `bg_color` | string | Valfritt | Kva hex-, rgb- eller rgba-verdi som helst | Bakgrunnsfargen til pop-uppen din (t.d. `#ffffff` for kvit bakgrunn) |
| `bg_opacity` | string | Valfritt | Kva verdi som helst frå `0` til `100` | Bakgrunnsgjennomsikta til pop-uppen din (t.d. `100` for inga gjennomsikt) |
| `bg_blur` | string | Valfritt | Kva verdi som helst frå `0` til `100` | Bakgrunnsuskarpinga til pop-uppen din, **dette verkar berre viss `bg_opacity` ikkje er sett til `100`** (t.d. `0` for inga uskarping)|
| `shadow_opacity` | string | Valfritt | Kva verdi som helst frå `0` til `100` | Skuggegjennomsikta til pop-uppen din (t.d. `0` for å skjule han) |
| `hide_backdrop` | boolean | Valfritt | `true` eller `false` (standard) | Set denne til true på den første pop-uppen på hovuddashbordet ditt for å slå av bakteppet på alle pop-uppar. |
| `background_update` | boolean | Valfritt | `true` eller `false` (standard) | Oppdater innhaldet i pop-uppen i bakgrunnen (ikkje anbefalt) |
| `trigger_entity` | string | Valfritt | Kva eining som helst | Opne denne pop-uppen basert på tilstanden til ei eining |
| `trigger_state` | string | Valfritt (**Påkravd** viss `trigger_entity` er definert) | Kva einingstilstand som helst | Einingstilstand som opnar pop-uppen |
| `trigger_close` | boolean | Valfritt | `true` eller `false` (standard) | Lukk pop-uppen når `trigger_state` er ulik |
| `open_action` | objekt | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Utløys ei handling når pop-uppen opnar |
| `close_action` | objekt | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Utløys ei handling når pop-uppen lukkar |
| `show_header` | boolean | Valfritt | `true` (standard) eller `false` | Vis/skjul toppteksten til pop-uppen heilt |
| `show_previous_button` | boolean | Valfritt | `true` eller `false` (standard) | Vis ein "forrige"-knapp ved sida av lukkeknappen og naviger tilbake til førre pop-up når det er mogleg |
| `show_close_button` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul lukkeknappen medan resten av toppteksten held fram med å vere synleg |
| `buttons_position` | string | Valfritt | `right` (standard) eller `left` | Plassering av lukke- og forrige-knappane i toppteksten |
| `cards` | liste | Valfritt | Kva Bubble Card, Home Assistant-kort eller tilpassa kort som helst | Definerer innhaldet i pop-uppen din. Sjå pop-up-eksempelet under. |
| Du har også tilgang til [alle knappeinnstillingane](#knapp) for toppteksten til pop-uppen. | | Valfritt | | Viss ikkje definert vert ingen topptekst vist |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Kantradius for pop-uppen |
| `--bubble-pop-up-main-background-color` | `color` | Hovudbakgrunnsfarge for støtta element i pop-uppen |
| `--bubble-pop-up-background-color` | `color` | Bakgrunnsfarge for pop-uppen |
| `--bubble-backdrop-background-color` | `color` | Bakgrunnsfarge for bakteppet |
| Du har også tilgang til [alle CSS-variablane for knappar](#knappeval) for toppteksten til pop-uppen. | | |

</details>


### Frittståande pop-up-format (v3.2.0+)

Sidan v3.2.0 brukar pop-uppar eit nytt frittståande format der innhaldskort vert definerte direkte inne i pop-uppen med valet `cards`. Dette gjev betre ytelse og ei ny seksjonsbasert dra-og-slepp-redigeringsoppleving.


#### Eksempel

<details>

<summary>Ein pop-up (frittståande format)</summary>

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

<summary>Ein knapp som opnar pop-uppen</summary>

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

Dette kortet er ein god følgjesvenn til pop-up-kortet, og lèt deg opne dei tilhøyrande pop-uppane. Det lèt deg også opne kva side som helst av dashbordet ditt. I tillegg kan du leggje til rørsle-/tilstadesensorane dine slik at rekkjefølgja på knappane tilpassar seg etter kva rom du nettopp gjekk inn i. Dette kortet er rullbart, held seg synleg, og fungerer som ein bunntekst.

> [!IMPORTANT]  
> Dette kortet må vere det siste i visinga di (etter alle kort og pop-uppar). Det kan ikkje vere inni ein stabel.

### Val for horisontal knapperad

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Påkravd** | Hashen til pop-uppen (t.d. `'#kitchen'`) med ' ' eller kva lenkje som helst | Ei lenkje å opne |
| `1_name` | string | Valfritt | Kva streng som helst | Eit namn for knappen din |
| `1_icon` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for knappen din |
| `1_entity` | string | Valfritt | Kva lys eller lysgruppe som helst | Vis fargen på det lyset i bakgrunnen |
| `1_pir_sensor` | string | Valfritt | Kva binærsensor som helst | Minst éin pir-sensor eller fleire for `auto_order`, det verkar faktisk også med kva einingstype som helst, du kan til dømes leggje til lysgrupper og rekkjefølgja endrar seg basert på sist endra tilstand. |
| `auto_order` | boolean | Valfritt | `true` eller `false` (standard) | Endrar rekkjefølgja på knappane etter når `_pir_sensor` sist endra seg, **han må vere `false` viss du ikkje har nokon `_pir_sensor` i koden din** |
| `margin` | string | Valfritt | Kva CSS-verdi som helst | Bruk dette **berre** viss din `horizontal-buttons-stack` ikkje er godt sentrert på mobil (t.d. `13px`) |
| `width_desktop` | string | Valfritt | Kva CSS-verdi som helst | Breidd på skrivebord (`100%` som standard på mobil) |
| `is_sidebar_hidden` | boolean | Valfritt | `true` eller `false` (standard) | Fikser plasseringa til den horisontale knapperaden viss sidefeltet er skjult på skrivebordet (berre om du sjølv har gjort ei endring for å skjule det) |
| `rise_animation` | boolean | Valfritt | `true` (standard) eller `false` | Set denne til `false` for å slå av animasjonen som vert aktivert når sida er lasta |
| `highlight_current_view` | boolean | Valfritt | `true` eller `false` (standard) | Framhev gjeldande hash/vising med ein mjuk animasjon |
| `hide_gradient` | boolean | Valfritt | `true` eller `false` (standard) | Set denne til `false` for å skjule fargeovergangen |

> [!IMPORTANT]  
> Variablane som startar med eit tal definerer knappane dine, berre endre dette talet for å leggje til fleire knappar (sjå eksempelet under).

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Kantradius for knappane i den horisontale knapperaden |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Bakgrunnsfarge for knappane i den horisontale knapperaden |

</details>


#### Eksempel

<details>

<summary>Ein horisontal knapperad som organiserer seg sjølv basert på tilstadesensorar</summary>

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

Dette kortet er svært allsidig. Det kan brukast som ein **brytar**, ein **glidebrytar**, ein **tilstand** eller ein **namn/tekst**-knapp.

> [!TIP]
> ### Kva er forskjellen mellom alle knappetypane?
>
> - **Brytarknapp:** Dette er standard knappetype. Som standard vekslar han ein entitet, og bakgrunnsfargen endrar seg ut frå tilstanden til entiteten eller fargen på ei lampe. Du kan endre handlinga i seksjonen **Tap action on card**.
>
> - **Glidebrytarknapp:** Denne knappetypen let deg styre entitetar med justerbare område. Han er ideell for dimming av lys, og fyllfargen tilpassar seg fargen på lyset. Du kan òg bruke han til å vise verdiar, som til dømes eit batterinivå.
>   Støtta entitetar for glidebrytarar:
>   - Lys (lysstyrke)
>   - Mediespelar (volum)
>   - Gardin (posisjon)
>   - Vifte (prosent)
>   - Klima (temperatur)
>   - Input number og number (verdi)
>   - Batterisensor (prosent, berre lesing)
>
>   Du kan òg bruke kva entitet som helst med ein numerisk tilstand ved å slå av entitetsfilteret i **Slider settings**, og deretter definere verdiane `min` og `max`. Dette valet er berre til lesing.
>
> - **Tilstandsknapp:** Perfekt for å vise informasjon frå ein sensor eller ein annan entitet. Når du trykkjer på han, vil han vise "Meir info"-panelet til entiteten. Bakgrunnsfargen endrar seg ikkje.
>
> - **Namn/tekst-knapp:** Den einaste knappetypen som ikkje treng ein entitet. Han lèt deg vise ein kort tekst, eit namn eller ein tittel. Du kan òg leggje til handlingar på han. Bakgrunnsfargen endrar seg ikkje.

### Knappeval

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkravd** | Kva entitet som helst | Ein entitet å styre |
| `button_type` | string | Valfritt | `switch` (standard), `slider`, `state` eller `name` | Åtferda til knappen din |
| `name` | string | Valfritt | Kva streng som helst | Eit namn for knappen din, viss det ikkje er definert vil entitetsnamnet visast |
| `icon` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for knappen din, viss det ikkje er definert vil entitetsikonet eller `entity-picture` visast |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Gi prioritet til ikonet i staden for `entity-picture` |
| `use_accent_color` | boolean | Valfritt (`false` standard) | **Berre for lys.** Bruk temaets aksentfarge i staden for fargen til lyset.                         |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity`-en din |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring av `entity`-en din |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering av `entity`-en din |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Vis ein attributt for `entity`-en din under `name`-en hans |
| `attribute` | string | Valfritt (påkravd viss `show_attribute` er sett til `true`) | Ein attributt frå `entity`-en din | Attributten som skal visast (t.d. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Lat tekst rulle når innhaldet overstig storleiken til behaldaren sin |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, sjå under | Lèt deg endre standardhandlingane ved klikk på knappen. |
| `tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved klikk på ikonet, viss udefinert vil `more-info` bli brukt |
| `double_tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved dobbeltklikk på ikonet, viss udefinert vil `none` bli brukt |
| `hold_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved hald på ikonet, viss udefinert vil `more-info` bli brukt |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av kortoppsettet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Kva tal som helst | Talet på rader (høgde) (t.d. `2`) |
| `sub_button` | object | Valfritt | Sjå [underknappar](#underknappar) | Legg til tilpassa knappar festa til høgre |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Hovudbakgrunnsfarge for støtta element i knappen |
| `--bubble-button-border-radius` | `px` | Hjørneradius for knappen |
| `--bubble-button-icon-border-radius` | `px` | Hjørneradius for ikonbehaldaren til knappen |
| `--bubble-button-icon-background-color` | `color` | Bakgrunnsfarge for ikonbehaldaren til knappen |
| `--bubble-light-white-color` | `color` | Erstattar standard kvitfarge for lysknappar/glidebrytarar |
| `--bubble-light-color` | `color` | Erstattar fargen til lysknappar/glidebrytarar (også RGB-lys) |
| `--bubble-button-box-shadow` | Sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugge for knappen |

</details>

Desse vala er berre tilgjengelege når `button_type` er sett til `slider`.

<details>

<summary><b>Val for glidebrytar (YAML + skildringar)</b></summary>

| Namn                  | Type    | Krav                     | Skildring                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Valfritt                        | Minsteverdien for glidebrytaren. For tilpassa glidebrytarar.                                                    |
| `max_value`             | number  | Valfritt                        | Maksverdien for glidebrytaren. For tilpassa glidebrytarar.                                                    |
| `step`                  | number  | Valfritt                        | Steg-verdien for glidebrytaren.                                                                           |
| `tap_to_slide`          | boolean | Valfritt (`false` standard)      | Slå på den tidlegare åtferda til glidebrytaren, der du trykkjer for å aktivere han i staden for å halde han.        |
| `relative_slide`        | boolean | Valfritt (`false` standard )     | Oppdater verdien relativt til startverdien, i staden for startpunktet for trykket.                      |
| `read_only_slider`      | boolean | Valfritt (`false` standard)      | Gjer glidebrytaren skriveverna. Blir automatisk slått på for enkelte entitetar, som sensorar.                                                    |
| `slider_live_update`    | boolean | Valfritt (`false` standard)      | Tilstanden til entiteten blir oppdatert medan ein glid. **Denne funksjonen er ikkje tilrådd for alle entitetar.**        |
| `slider_fill_orientation` | string | Valfritt | `left` (standard), `right`, `top`, `bottom` | Endrar fyllretninga til glidebrytaren |
| `slider_value_position` | string | Valfritt | `right` (standard), `left`, `center`, `hidden` | Plassering av verdivisinga |
| `invert_slider_value` | boolean | Valfritt (`false` standard) | Snu retninga til glidebrytaren (100 % fyll svarar til minimum). Ikkje tilgjengeleg for fargeglidebrytarar. |
| `light_slider_type` | string | Valfritt | `brightness` (standard), `hue`, `saturation`, `white_temp` | **Berre for lys.** Vel glidebrytarmodus |
| `cover_slider_type` | string | Valfritt | `position` (standard), `tilt_position` | **Berre for gardiner.** Vel glidebrytarmodus (posisjon eller vinkel) |
| `hue_force_saturation` | boolean | Valfritt (`false` standard) | **Berre for lys (Hue-modus).** Tving metting ved justering av Hue |
| `hue_force_saturation_value` | number | Valfritt (`100` standard) | **Berre for lys (Hue-modus).** Tvinga mettingsverdi (0-100) |
| `use_accent_color` | boolean | Valfritt (`false` standard) | **Berre for lys (lysstyrkemodus).** Bruk temaets aksentfarge i staden for lysfargen |
| `allow_light_slider_to_0` | boolean | Valfritt (`false` standard)    | **Berre for lys.** Lèt glidebrytaren nå 0 %, som slår av lyset. Ikkje tilgjengeleg saman med `tap_to_slide`. |
| `light_transition`      | boolean | Valfritt (`false` standard)      | **Berre for lys.** Slå på jamn overgang for lysstyrke for lys som støttar det.                           |
| `light_transition_time` | number  | Valfritt (`500` standard)        | **Berre for lys.** Overgangstida i millisekund. Krev `light_transition: true`.            |

</details>

#### Døme

<details>

<summary>Ein glidebrytarknapp som kan styre lysstyrken til ei lampe</summary>

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

<summary>Ein knapp med fleire val</summary>

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

## Mediespelar

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Dette kortet lèt deg styre ein mediespelar-entitet.

### Val for mediespelar

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkravd** | Kva mediespelar som helst | Mediespelaren som skal styrast |
| `name` | string | Valfritt | Kva streng som helst | Eit namn for mediespelaren din, viss det ikkje er definert vil entitetsnamnet visast |
| `icon` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for mediespelaren din, viss det ikkje er definert vil entitetsikonet eller `entity-picture` visast |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Gi prioritet til ikonet i staden for `entity-picture` |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity`-en din |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring av `entity`-en din |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering av `entity`-en din |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Vis ein attributt for `entity`-en din under `name`-en hans |
| `attribute` | string | Valfritt (påkravd viss `show_attribute` er sett til `true`) | Ein attributt frå `entity`-en din | Attributten som skal visast (t.d. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Lat tekst rulle når innhaldet overstig storleiken til behaldaren sin |
| `min_volume` | number | Valfritt | Kva tal som helst | Minsteverdien for volumglidebrytaren. |
| `max_volume` | number | Valfritt | Kva tal som helst | Maksverdien for volumglidebrytaren. |
| `cover_background` | boolean | Valfritt | `true` eller `false` (standard) | Bruk eit uklart mediecover som bakgrunn for kortet. |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Lèt deg endre standardhandlingane ved klikk på knappen. |
| `tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved klikk på ikonet, viss udefinert vil `more-info` bli brukt. |
| `double_tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved dobbeltklikk på ikonet, viss udefinert vil `none` bli brukt. |
| `hold_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved hald på ikonet, viss udefinert vil `more-info` bli brukt. |
| `main_buttons_position` | string | Valfritt | `default` eller `bottom` | Flytt handlingsknappane for cover til botnen (fast) |
| `main_buttons_full_width` | boolean | Valfritt | `true` eller `false` | Gjer handlingsknappane i botnen fullbreidde (standard: `true` når posisjon er `bottom`) |
| `main_buttons_alignment` | string | Valfritt | `end` (standard), `center`, `start`, `space-between` | Justering av handlingsknappane i botnen når dei ikkje er fullbreidde |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av kortoppsettet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Kva tal som helst | Talet på rader (høgde) (t.d. `2`) |
| `sub_button` | object | Valfritt | Sjå [underknappar](#underknappar) | Legg til tilpassa knappar festa til høgre |
| `hide` | object | Valfritt | Sjå under | Skjul knappar frå kortet |

#### Val for skjuling

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Valfritt | `true` eller `false` (standard) | Skjul spel/pause-knappen |
| `volume_button` | boolean | Valfritt | `true` eller `false` (standard) | Skjul volumknappen |
| `previous_button` | boolean | Valfritt | `true` eller `false` (standard) | Skjul forrige-knappen |
| `next_button` | boolean | Valfritt | `true` eller `false` (standard) | Skjul neste-knappen |
| `power_button` | boolean | Valfritt | `true` eller `false` (standard) | Skjul av/på-knappen |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Hovudbakgrunnsfarge for mediespelaren |
| `--bubble-media-player-border-radius` | `px` | Hjørneradius for mediespelaren |
| `--bubble-media-player-buttons-border-radius` | `px` | Hjørneradius for knappane til mediespelaren |
| `--bubble-media-player-slider-background-color` | `color` | Bakgrunnsfarge for volumglidebrytaren |
| `--bubble-media-player-icon-border-radius` | `px` | Hjørneradius for ikonbehaldaren til mediespelaren |
| `--bubble-media-player-icon-background-color` | `color` | Bakgrunnsfarge for ikonbehaldaren til mediespelaren |
| `--bubble-media-player-box-shadow` | Sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugge for mediespelaren |

</details>


#### Døme

<details>

<summary>Ein mediespelar med alle vala</summary>

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

Dette kortet lèt deg styre `cover`-entitetane dine.

### Val for gardin

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkravd** | Kva gardin som helst | Ei gardin å styre |
| `name` | string | Valfritt | Kva streng som helst | Eit namn for gardina di, viss det ikkje er definert vil entitetsnamnet visast |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Gi prioritet til ikonet i staden for `entity-picture` |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity`-en din |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring av `entity`-en din |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering av `entity`-en din |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Vis ein attributt for `entity`-en din under `name`-en hans |
| `attribute` | string | Valfritt (påkravd viss `show_attribute` er sett til `true`) | Ein attributt frå `entity`-en din | Attributten som skal visast (t.d. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Lat tekst rulle når innhaldet overstig storleiken til behaldaren sin |
| `icon_open` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for den opne gardina di, viss det ikkje er definert vil standardikonet for open gardin visast |
| `icon_close` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for den stengde gardina di, viss det ikkje er definert vil standardikonet for stengd gardin visast |
| `icon_up` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for knappen som opnar gardina, viss det ikkje er definert vil standardikonet for open gardin visast |
| `icon_down` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for knappen som stengjer gardina, viss det ikkje er definert vil standardikonet for stengd gardin visast |
| `open_service` | string | Valfritt | Kva teneste eller skript som helst | Ei teneste for å opne gardina, standard er `cover.open_cover` |
| `stop_service` | string | Valfritt | Kva teneste eller skript som helst | Ei teneste for å stoppe gardina, standard er `cover.stop_cover` |
| `close_service` | string | Valfritt | Kva teneste eller skript som helst | Ei teneste for å stengje gardina, standard er `cover.close_cover` |
| `tilt_buttons` | string | Valfritt | `top` (standard), `bottom`, `left`, `right`, `hidden` | Plassering av vinkelkontrollknappane (visast berre viss gardina støttar vinkling) |
| `open_tilt_service` | string | Valfritt | Kva teneste eller skript som helst | Ei teneste for å opne vinkling, standard er `cover.open_cover_tilt` |

| `close_tilt_service` | string | Valfritt | Kva teneste eller skript som helst | Ei teneste for å stengje vinkling, standard er `cover.close_cover_tilt` |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Lèt deg endre standardhandlingane ved klikk på knappen. |
| `tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved klikk på ikonet, viss udefinert vil `more-info` bli brukt. |
| `double_tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved dobbeltklikk på ikonet, viss udefinert vil `none` bli brukt. |
| `hold_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved hald på ikonet, viss udefinert vil `more-info` bli brukt. |
| `main_buttons_position` | string | Valfritt | `default` eller `bottom` | Flytt mediekontrollane til botnen (fast) |
| `main_buttons_full_width` | boolean | Valfritt | `true` eller `false` | Gjer kontrollane i botnen fullbreidde (standard: `true` når posisjon er `bottom`) |
| `main_buttons_alignment` | string | Valfritt | `end` (standard), `center`, `start`, `space-between` | Justering av kontrollane i botnen når dei ikkje er fullbreidde |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av kortoppsettet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Kva tal som helst | Talet på rader (høgde) (t.d. `2`) |
| `sub_button` | object | Valfritt | Sjå [underknappar](#underknappar) | Legg til tilpassa knappar festa til høgre |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Hovudbakgrunnsfarge for støtta element i gardinkortet |
| `--bubble-cover-border-radius` | `px` | Hjørneradius for gardinkortet |
| `--bubble-cover-icon-border-radius` | `px` | Hjørneradius for ikonbehaldaren til gardinkortet |
| `--bubble-cover-icon-background-color` | `color` | Bakgrunnsfarge for ikonbehaldaren til gardinkortet |
| `--bubble-cover-box-shadow` | Sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugge for gardinkortet |
| `--bubble-button-box-shadow` | Sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugge for knappane i gardinkortet |

</details>


#### Døme

<details>

<summary>Eit kort som kan styre eit rullegardin</summary>

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

Dette kortet lèt deg leggje til ein nedtrekksmeny for `input_select`/`select`-entitetane dine. Dette kortet støttar òg underknappar og alle dei felles funksjonane i Bubble Card.

> [!TIP]
> Du kan òg ha select-underknappar viss du vil, denne funksjonen er tilgjengeleg i alle korta som støttar underknappar.

### Val for Select

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkravd** | Kva entitet som helst | Ein entitet å styre |
| `name` | string | Valfritt | Kva streng som helst | Eit namn for select-en din, viss det ikkje er definert vil entitetsnamnet visast |
| `icon` | string | Valfritt | Kva `mdi:`-ikon som helst | Eit ikon for select-en din, viss det ikkje er definert vil entitetsikonet eller `entity-picture` visast |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Gi prioritet til ikonet i staden for `entity-picture` |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity`-en din |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste endring av `entity`-en din |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Vis tidspunktet for siste oppdatering av `entity`-en din |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Vis ein attributt for `entity`-en din under `name`-en hans |
| `attribute` | string | Valfritt (påkravd viss `show_attribute` er sett til `true`) | Ein attributt frå `entity`-en din | Attributten som skal visast (t.d. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Lat tekst rulle når innhaldet overstig storleiken til behaldaren sin |
| `tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved klikk på ikonet, viss udefinert vil `more-info` bli brukt. |
| `double_tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved dobbeltklikk på ikonet, viss udefinert vil `none` bli brukt. |
| `hold_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved hald på ikonet, viss udefinert vil `more-info` bli brukt. |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av kortoppsettet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Kva tal som helst | Talet på rader (høgde) (t.d. `2`) |
| `sub_button` | object | Valfritt | Sjå [underknappar](#underknappar) | Legg til tilpassa knappar festa til høgre |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Hovudbakgrunnsfarge for støtta element i select-kortet |
| `--bubble-select-background-color` | `color` | Bakgrunnsfarge for select-kortet |
| `--bubble-select-list-border-radius` | `px` | Hjørneradius for nedtrekksmenyen i kortet |
| `--bubble-select-list-item-accent-color` | `color` | Aksentfarge for det valde elementet |
| `--bubble-select-list-background-color` | `color` | Bakgrunnsfarge for nedtrekksmenyen i kortet |
| `--bubble-select-list-width` | `px` | Breidde på nedtrekksmenyen i kortet |
| `--bubble-select-arrow-background-color` | `color` | Bakgrunnsfarge for nedtrekkspila |
| `--bubble-select-button-border-radius` | `px` | Hjørneradius for select-knappen |
| `--bubble-select-border-radius` | `px` | Hjørneradius for select-kortet |
| `--bubble-select-icon-border-radius` | `px` | Hjørneradius for ikonbehaldaren til select-kortet |
| `--bubble-select-icon-background-color` | `color` | Bakgrunnsfarge for ikonbehaldaren til select-kortet |
| `--bubble-select-box-shadow` | Sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugge for select-kortet |

</details>


#### Døme

<details>

<summary>Eit select-kort med ei liste over scener</summary>

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

Dette kortet lèt deg styre `climate`-entitetane dine.

> [!TIP]
> Menyen for modusval er ein [underknapp](#underknappar) som vert lagt til automatisk når kortet vert oppretta. Du kan deretter endre eller fjerne han som du vil.

### Val for Klima

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn                     | Type    | Krav                         | Støtta val                                  | Skildring                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Påkravd**                        | Klima-entitet                                   | Entiteten som skal styrast (t.d. `climate.living_room`).                                                            |
| `name`                  | string  | Valfritt                            | Kva streng som helst                                       | Eit tilpassa namn for kortet. Viss det ikkje er definert, vert entitetsnamnet vist.                                    |
| `icon`                  | string  | Valfritt                            | Kva `mdi:`-ikon som helst                                  | Eit tilpassa ikon for kortet. Viss det ikkje er definert, vert entitetsikonet eller `entity-picture` brukt.                   |
| `force_icon`            | boolean | Valfritt                            | `true` eller `false` (standard)                     | Gir ikonet prioritet framfor `entity-picture`.                                                           |
| `show_state`            | boolean | Valfritt                            | `true` eller `false` (standard)                     | Vis eller skjul den noverande tilstanden til `entity`-en.                                                                 |
| `show_name`             | boolean | Valfritt                            | `true` (standard) eller `false`                     | Vis eller skjul namnet til entiteten.                                                                            |
| `show_icon`             | boolean | Valfritt                            | `true` (standard) eller `false`                     | Vis eller skjul ikonet.                                                                                          |
| `hide_target_temp_low`  | boolean | Valfritt (berre for entitetar som støttar `target_temp_low`) | `true` eller `false` (standard) | Skjuler kontrollen for lågt måltemperatur viss `entity`-en støttar det.                                          |
| `hide_target_temp_high` | boolean | Valfritt (berre for entitetar som støttar `target_temp_high`)| `true` eller `false` (standard) | Skjuler kontrollen for høgt måltemperatur viss `entity`-en støttar det.                                         |
| `state_color`           | boolean | Valfritt                            | `true` eller `false` (standard)                     | Legg på ein konstant bakgrunnsfarge når klima-entiteten er PÅ.                                              |
| `step` | number | Valfritt | Kva tal som helst | Temperatursteget. |
| `min_temp` | number | Valfritt | Kva tal som helst | Minstetemperaturen. |
| `max_temp` | number | Valfritt | Kva tal som helst | Maksimumstemperaturen. |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Lèt deg endre standardhandlingane ved klikk på knappen. |
| `tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved klikk på ikonet, viss udefinert vil `more-info` bli brukt. |
| `double_tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved dobbeltklikk på ikonet, viss udefinert vil `none` bli brukt. |
| `hold_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved hald på ikonet, viss udefinert vil `more-info` bli brukt. |                              |
| `main_buttons_position` | string | Valfritt | `default` eller `bottom` | Flytt klima-handlingsknappane til botnen (fast) |
| `main_buttons_full_width` | boolean | Valfritt | `true` eller `false` | Gjer handlingsknappane i botnen fullbreidde (standard: `true` når posisjon er `bottom`) |
| `main_buttons_alignment` | string | Valfritt | `end` (standard), `center`, `start`, `space-between` | Justering av handlingsknappane i botnen når dei ikkje er fullbreidde |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av kortoppsettet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Kva tal som helst | Talet på rader (høgde) (t.d. `2`) |
| `sub_button`            | object  | Valfritt                            | Sjå [underknappar](#underknappar)                | Legg til tilpassa knappar festa til høgre. Nyttig for ein menu for val av klimamodus.                                  |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Hovudbakgrunnsfarge for støtta element i klimakortet |
| `--bubble-climate-border-radius` | `px` | Hjørneradius for støtta element i klimakortet |
| `--bubble-climate-button-background-color` | `color` | Bakgrunnsfarge for knappane i klimakortet |
| `--bubble-climate-icon-border-radius` | `px` | Hjørneradius for ikonbehaldaren til klimakortet |
| `--bubble-state-climate-fan-only-color` | `color` | Overleggsfarge for fan-only-tilstanden |
| `--bubble-state-climate-dry-color` | `color` | Overleggsfarge for dry-tilstanden |
| `--bubble-state-climate-cool-color` | `color` | Overleggsfarge for cool-tilstanden |
| `--bubble-state-climate-heat-color` | `color` | Overleggsfarge for heat-tilstanden |
| `--bubble-state-climate-auto-color` | `color` | Overleggsfarge for auto-tilstanden |
| `--bubble-state-climate-heat-cool-color` | `color` | Overleggsfarge for heat-cool-tilstanden |
| `--bubble-climate-accent-color` | `color` | Aksentfarge for klimakortet |
| `--bubble-climate-box-shadow` | Sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugge for klimabehaldaren. |

</details>


#### Døme

<details>

<summary>Eit klimakort med ein nedtrekksmeny for HVAC-modusar</summary>

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

Dette kortet lèt deg vise kalenderentitetane dine. Innhaldet kan rullast, slik at du enkelt kan bla gjennom komande hendingar.

### Val for Kalender

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn                | Type    | Krav  | Støtta val                               | Skildring                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Valfritt     | Kva tal som helst (minimum: 1)                        | Talet på kalenderdagar det skal hentast hendingar for, frå no til slutten av den N-te dagen (standard: 7) |
| `entities`          | object  | **Påkravd** | Eit kalenderentitetsobjekt (sjå under)            | Entiteten som skal styrast (t.d. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Påkravd** | Ein kalenderentitet                               | Kalenderentiteten som skal visast                                                          |
| `entities.color`    | string  | Valfritt     | Ein farge                                         | Ein tilpassa farge for kalenderbrikken. Viss det ikkje er definert, vert ein automatisk farge valt |
| `days`              | number  | Valfritt     | Kva tal som helst (minimum: 1)                         | Talet på kalenderdagar det skal hentast hendingar for, frå no til slutten av den N-te dagen (standard: 7) |
| `limit`             | number  | Valfritt     | Eit tal                                        | Talet på hendingar som vert vist på kortet                                  |
| `show_end`          | boolean | Valfritt     | `true` eller `false` (standard)                     | Vis eller skjul sluttidspunktet for hendingar                                                    |
| `show_progress`     | boolean | Valfritt     | `true` (standard) eller `false`                     | Vis eller skjul framdriftslinja for hendinga                                                     |
| `show_started_events`| boolean | Valfritt     | `true` (standard) eller `false`                     | Vis eller skjul hendingar som er i gang no                                                 |
| `scrolling_effect`  | boolean | Valfritt | `true` (standard) eller `false` | Lat tekst rulle når innhaldet overstig storleiken til behaldaren sin |
| `event_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Lèt deg leggje til handlingar ved klikk på ei hending. |
| `tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved klikk på dagen, viss udefinert vil `none` bli brukt. |
| `double_tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved dobbeltklikk på dagen, viss udefinert vil `none` bli brukt. |
| `hold_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved hald på dagen, viss udefinert vil `none` bli brukt. |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av kortoppsettet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Kva tal som helst | Talet på rader (høgde) (t.d. `2`) |
| `sub_button` | object | Valfritt | Sjå [underknappar](#underknappar) | Legg til tilpassa knappar festa til høgre |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel                                  | Forventa verdi | Skildring                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Hovudbakgrunnsfarge for støtta element i kalenderkortet  |
| `--bubble-calendar-border-radius`         | `px`           | Hjørneradius for støtta element i kalenderkortet |
| `--bubble-calendar-height`                | `px`           | Høgde for kalenderkortet                                        |

</details>

#### Døme

<details>

<summary>Eit kalenderkort med eit avgrensa tal hendingar</summary>

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

<summary>Eit kalenderkort med sluttidspunkt og framdriftslinje</summary>

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


## Skiljeteikn

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Dette kortet er eit enkelt skiljeteikn for å dele opp pop-up-vindauget i kategoriar/seksjonar. Til dømes lys, einingar, gardiner, innstillingar, automasjonar...

### Val for skiljeteikn

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `name` | string | Valfritt, men tilrådd | Kva som helst tekst | Eit namn for skiljeteiknet ditt |
| `icon` | string | Valfritt, men tilrådd | Eit kva som helst `mdi:`-ikon | Eit ikon for skiljeteiknet ditt |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av oppsettet til kortet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Eit kva som helst tal | Talet på rader (høgd) (t.d. `2`) |
| `sub_button` | object | Valfritt | Sjå [underknappar](#underknappar) | Legg til tilpassa knappar festa til høgre |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Bakgrunnsfarge for linja i skiljeteiknet |

</details>

#### Eksempel

<details>

<summary>Eit skiljeteikn/deler for ein "Gardiner"-seksjon</summary>

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

Dette kortet er her for å fylle ut ei tom kolonne. Dette er nyttig viss du har ein `horizontal-stack` i pop-up-vindauget med berre eitt kort. Ta ein kikk i nedre høgre hjørne av dette skjermbiletet for å (ikkje) sjå det.

### Val for tom kolonne

Dette kortet har ingen val og støttar ikkje [styling](#styling), men det støttar likevel oppsettval for HA-seksjonar.

#### Eksempel

<details>

<summary>Ei tom kolonne i ein horisontal stabel</summary>

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

## Berre underknappar

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Dette kortet er dedikert berre til underknappar. Det er perfekt for menyar, snøggvalar, informative brikker, eller ein fast botntekst nedst på sida.

> [!IMPORTANT]  
> Dette kortet brukar det nye skjemaet for underknappar. Bruk `sub_button.bottom` for å definere knappane dine. Seksjonen `sub_button.main` blir ignorert.

### Val for berre underknappar

<details>

<summary><b>Val (YAML + skildringar)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Påkravd** | Sjå [underknappar](#underknappar) | Definer underknappane dine med `bottom`-seksjonen |
| `hide_main_background` | boolean | Valfritt | `true` eller `false` (standard) | Fjern bakgrunnen til kortet |
| `footer_mode` | boolean | Valfritt | `true` eller `false` (standard) | Fest kortet nedst på sida |
| `footer_full_width` | boolean | Valfritt | `true` eller `false` (standard) | Gjer botnteksten full breidd (100%) |
| `footer_width` | number | Valfritt | Eit kva som helst tal | Breidd på botnteksten i pikslar når `footer_full_width` er `false` |
| `footer_bottom_offset` | number | Valfritt | Eit kva som helst tal | Avstand frå botnen av sida i pikslar (standard: `16`) |
| `card_layout` | string | Valfritt | `normal` (standard viss ikkje i seksjonsvising), `large` (standard viss i seksjonsvising), `large-2-rows`, `large-sub-buttons-grid` | Styling av oppsettet til kortet, sjå [kortoppsett](#kortoppsett) |
| `rows` | number | Valfritt | Eit kva som helst tal | Talet på rader (høgd) (t.d. `2`) |

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Breidd på botnteksten når `footer_full_width` er `false` |
| `--bubble-footer-bottom` | `px` | Avstand frå botnen for botnteksten |
| `--bubble-footer-box-shadow` | sjå [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for botntekst-behaldaren |

</details>

#### Eksempel

<details>

<summary>Brikker (som på skjermbiletet)</summary>

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

<summary>Ein fast botntekst-meny</summary>

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

## Underknappar

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

I alle korta som støttar det valet, kan du leggje til underknappar for å tilpasse korta enda meir. Du kan til dømes lage ein knapp som kan styre ein robotstøvsugar, eit vêrkort, eller nesten kva som helst du finn på. Desse underknappane støttar trykkhandlingane og dei fleste av knappevala.

Underknappar støttar no tre typar: **Standard (knapp)**, **Glidebrytar**, og **Nedtrekksliste/Select**. Du kan blande typar i det same kortet, plassere underknappar øvst eller nedst, og organisere dei i grupper for meir avanserte oppsett.

#### Plassering og grupper for underknappar

<details>

<summary><b>Struktur for underknappar (main / bottom + grupper)</b></summary>

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

**Merknadar:**
- `main` og `bottom` er to uavhengige seksjonar. Underknappar i `bottom` er festa til botnen av kortet.
- `main_layout` og `bottom_layout` godtek `inline` (standard) eller `rows` for å stable grupper vertikalt.
- Grupper er objekt med eit `group`-array og valfri `buttons_layout` (`inline` eller `column`).
- `justify_content` er tilgjengeleg **berre for bottom-grupper** (`start`, `center`, `end`, `fill`).
- Når underknappar i `bottom` er til stades, byter kortoppsettet automatisk til `large` med mindre du eksplisitt set eit anna oppsett.
- Gamle `sub_button`-array blir framleis støtta og handsama som `main`-seksjonen.

</details>

### Val for underknappar

<details>

<summary><b>Val (YAML + skildring)</b></summary>

| Namn | Type | Krav | Støtta val | Skildring |
| --- | --- | --- | --- | --- |
| `entity` | string | Valfritt | Ei kva som helst eining | Ei eining å styre |
| `name` | string | Valfritt | Kva som helst tekst | Eit namn for underknappen din, viss ikkje definert vil eininga sitt namn visast |
| `icon` | string | Valfritt | Eit kva som helst `mdi:`-ikon | Eit ikon for underknappen din, viss ikkje definert vil eininga sitt ikon eller bilete visast |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Tving ikonet sjølv om eit einingsbilete er tilgjengeleg |
| `sub_button_type` | string | Valfritt | `default`, `slider` eller `select` | Vel typen for underknappen |
| `show_background` | boolean | Valfritt | `true` (standard) eller `false` | Vis ein bakgrunn for underknappen din, den vil endre farge basert på tilstanden til eininga di |
| `state_background` | boolean | Valfritt | `true` (standard) eller `false` | Bruk tilstandsfargen når eininga er `on` |
| `light_background` | boolean | Valfritt | `true` (standard) eller `false` | Bruk lysfargen for bakgrunnen når tilgjengeleg |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Vis eller skjul tilstanden til `entity`-en din |
| `show_name` | boolean | Valfritt | `true` eller `false` (standard) | Vis eller skjul namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Vis tida for siste endring for `entity`-en din |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Vis tida for siste oppdatering for `entity`-en din |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Vis eit attributt for `entity`-en din under `name` |
| `attribute` | string | Valfritt (påkravd viss `show_attribute` er sett til `true`) | Eit attributt frå `entity`-en din | Attributtet som skal visast (t.d. `brightness`) |
| `select_attribute` | string | Valfritt | Ei attributtliste frå `entity`-en din (sjå støtta val over) | Denne attributtlista vil opne ei nedtrekksliste viss klikka (t.d. `effect_list`) |
| `show_arrow` | boolean | Valfritt | `true` (standard) eller `false` | Vis eller skjul nedtrekkspila for select-underknappar |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Tillat tekst å rulle når innhaldet overstig storleiken på behaldaren |
| `tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved klikk på underknappen, viss udefinert blir `more-info` brukt. |
| `double_tap_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved dobbeltklikk på underknappen, viss udefinert blir `none` brukt. |
| `hold_action` | object | Valfritt | Sjå [handlingar](#trykk--dobbelttrykk--og-haldhandlingar) | Definer typen handling ved hald på underknappen, viss udefinert blir `more-info` brukt. |
| `fill_width` | boolean | Valfritt | `true` eller `false` | Fyll den tilgjengelege breidda (standard: `false` for main, `true` for bottom) |
| `width` | number eller string | Valfritt | Eit kva som helst tal eller CSS-lengd | Tilpassa breidd (`px` for main-seksjonen, `%` for bottom-seksjonen som standard) |
| `custom_height` | number | Valfritt | Eit kva som helst tal | Tilpassa høgd i pikslar |
| `content_layout` | string | Valfritt | `icon-left` (standard), `icon-top`, `icon-bottom`, `icon-right` | Plassering av ikonet inni underknappen |
| `always_visible` | boolean | Valfritt | `true` eller `false` (standard) | **Berre glidebrytar.** Vis alltid glidebrytaren i staden for å opne han ved trykk |
| `show_button_info` | boolean | Valfritt | `true` eller `false` (standard) | **Berre glidebrytar.** Vis ikon/namn/tilstand når `always_visible` er slått på |
| `visibility` | object eller list | Valfritt | Sjå [vilkår](https://www.home-assistant.io/docs/scripts/conditions/) | Vis eller skjul underknappen basert på vilkår |
| `hide_when_parent_unavailable` | boolean | Valfritt | `true` eller `false` (standard) | Skjul underknappen viss einingskortet til foreldrekortet er utilgjengeleg |

</details>

<details>

<summary><b>Val for glidebrytar-underknapp (same som knappeglidebrytarar)</b></summary>

<br>

Glidebrytar-underknappar støttar dei same glidebrytarvala som knappeglidebrytarar, inkludert:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-variablar (sjå <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventa verdi | Skildring |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Rundingsradius for underknappane |
| `--bubble-sub-button-background-color` | `color` | Bakgrunnsfarge for underknappane |
| `--bubble-sub-slider-border-radius` | `px` | Rundingsradius for glidebrytar-underknappar |
| `--bubble-sub-slider-background-color` | `color` | Bakgrunnsfarge for glidebrytar-underknappar |
| `--bubble-sub-slider-height` | `px` | Høgd for alltid synlege glidebrytar-underknappar |
| `--bubble-sub-button-dark-text-color` | `color` | Tekstfarge på lyse underknapp-bakgrunnar |

</details>

#### Eksempel

<details>

<summary>Ein knapp med nokre underknappar for å lage eit robotstøvsugarkort (som på skjermbiletet)</summary>

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

<summary>Ein knappeglidebrytar med ein underknapp som viser lysstyrken og ein som slår lyset av/på (som på skjermbiletet)</summary>

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

<summary>Ein knapp som viser innandørs- og utandørstemperaturen med vêret for i dag og i morgon (skjermbilete inkludert)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Uheldig for meg er det skya heile tida, men alle ikona endrar seg basert på vêret.

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

Bubble Card støttar fullt ut seksjonsvisinga i Home Assistant, du kan endre kortoppsettet for å gjere kortet større, og også endre talet på kolonnar eller rader kortet skal ta opp i seksjonsvisinga di (berre på korta som støttar det valet). Desse oppsetta er også støtta i alle andre visingstypar.

<details>

<summary><b>Tilgjengelege kortoppsett</b></summary>

| Oppsett | Skildring |
| --- | --- |
| `normal` | Det vanlege oppsettet (ikkje optimalisert for seksjonsvising) |
| `large` | Eit større oppsett som vil tilpasse storleiken til dei valde radene i seksjonsvisinga (optimalisert for seksjonsvising) |
| `large-2-rows` | Eit større oppsett med 2 rader med underknappar som vil tilpasse storleiken til dei valde radene i seksjonsvisinga (optimalisert for seksjonsvising) |
| `large-sub-buttons-grid` | Dette oppsettet vil vise underknappar i eit rutenett, `rows` må vere sett til minst `2`.

</details>

#### Eksempel

<details>

<summary>Ein stor knapp som viser energistatistikk med 2 rader med underknappar (skjermbilete inkludert)</summary>

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

<summary>Ein stor knapp med fleire rader med 12 underknappar</summary>

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

## Trykk-, dobbelttrykk- og haldhandlingar

Du kan også bruke standard trykkhandlingar, dobbelttrykkhandlingar og haldhandlingar frå Home Assistant på korta som støttar dette valet. Til dømes lèt dette deg vise "meir informasjon"-vindauget ved å halde inne eit knappeikon, eller køyre ei teneste når ein underknapp blir trykt.

**Merk: Når ein `double_tap_action` er konfigurert, vil den vanlege `tap_action`-en ha ei forseinking på 200ms for å tillate
oppdaging av eit dobbelttrykk. Viss denne forseinkinga er uønska, set `double_tap_action` til `none` for å slå av handtering av dobbelttrykk.**

### Val for handlingar

<details>

<summary><b>Val (YAML + skildring)</b></summary>

| Namn | Type | Støtta val | Skildring |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Handling som skal utførast |
| `target` | object |  | Fungerer berre med `call-service`. Følgjer [syntaksen til home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Ein kva som helst sti på dashboardet ditt | Stien å navigere til (t.d. `'#kitchen'` for å opne ein pop-up) når handlinga er definert som navigate |
| `url_path` | string | Ei kva som helst lenke | URL å opne ved klikk (t.d. `https://www.google.com`) når handlinga er `url` |
| `service` | string | Ei kva som helst teneste | Tenesta som skal kallast (t.d. `media_player.media_play_pause`) når `action` er definert som `call-service` |
| `data` eller `service_data` | object | Kva som helst tenestedata | Tenestedata som skal inkluderast (t.d. `entity_id: media_player.kitchen`) når `action` er definert som `call-service` |
| `confirmation` | object | Sjå [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Vis eit stadfestings-pop-up (ikkje eit frå Bubble Card), overstyrer standard `confirmation`-objektet |

</details>

#### Eksempel

<details>

<summary>Ein knapp for å opne ein pop-up</summary>

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

Du kan leggje til eigne stilar for å endre CSS-en til alle korta **utan å bruke card-mod**, på fire måtar:

- I redigeringsverktøyet: gå til kortet du vil endre, naviger til _Styling options > Custom styles & JS templates_, og legg til dine eigne stilar (sjå tipsa og døma under).
- I redigeringsverktøyet (eller i [YAML](#modular)): gå til kortet du vil endre, naviger til _Modules_, og lag ein ny modul (han blir tilgjengeleg for alle korta), eller gå til **Module Store** for å installere ein tilgjengeleg modul (meir informasjon om modular finn du [under](#modular)).
- I ei [temafil](https://www.home-assistant.io/integrations/frontend/#defining-themes) ved å leggje til CSS-variablar i YAML (desse er tilgjengelege i dokumentasjonen til kvart kort over). Dette gjev globale endringar.

  <details>
  
  <summary>Eksempel</a></summary>
  
  <br>

  Ikkje kopier linja `Bubble:`, det er berre namnet på temaet du bruker. Du må også fjerne `--` frå variablane.

  Du må køyre handlinga [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) for å oppdatere temaet etter endringar.

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
  
- I YAML ved å leggje til `styles: |` etterfølgt av dine eigne stilar (sjå tipsa og døma under).

> [!TIP]  
> **For å forstå kva stilklassar som kan endrast**, kan du ta ein kikk i mappa [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) i dette repositoriet. I kvar kortmappe finn du ei fil som heiter `styles.css`. Desse filene inneheld alle stilane som blir brukte. Dette gjev mange fleire moglegheiter enn CSS-variablar, men det må leggjast til individuelt for kvart kort.
> 
> Du finn også mange [eksempel frå fellesskapet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), eller nokre frå [Home Assistant-forumet](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) ved litt søking.
>
> Bubble-temaet for Home Assistant (som på skjermbileta) finn du [her](https://github.com/Clooos/Bubble).
>
> Ein opplæringsvideo kjem snart på [YouTube-kanalen min](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Ver merksam på at du kan måtte leggje til `!important;` på nokre CSS-stilar som allereie er definerte (sjå døma under).

> [!TIP]  
> Underknappar kan målrettast med namnbaserte klassar. For eksempel kan ein underknapp som heiter "My sub-button" stylast med `.my-sub-button`. Underknappar for glidebrytar eksponerer også `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, osv.

#### Eksempel

<details>

<summary>Endre skriftstorleiken til eit vilkårleg Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Endre bakgrunnsfargen til éin enkelt knapp i ein horisontal knapperad</summary>

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

<summary>Endre bakgrunnsfargen til eit kort</summary>

<br>

Denne fungerer på alle Bubble Card-typar (unntatt pop-up-ar):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Denne gjer det same, men berre for eit knappekort (han fungerer også for pop-up-headeren): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

For å endre fargen når han er `on`, sjå stilmalane under.

</details>

<details>

<summary>Endre fargen på ein knappeglidebrytar</summary>

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

<summary>Endre linjefargen til eit skiljeteikn</summary>

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

<summary>Endre fargen på eit ikon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

For eit ikon i ein horisontal knapperad.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Endre bakgrunnsfargen til ein ikonhaldar</summary>

<br>

Denne fungerer på alle Bubble Card-typar (unntatt pop-up-ar):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Denne gjer det same for pop-up-headeren: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Endre storleiken på underknappane (perfekt for det store oppsettet)</summary>

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

<summary>Endre storleiken på eit ikon</summary>

<br>

For hovudikonet.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

For underknapp-ikona.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Bruke eit bilete i staden for eit ikon i ein underknapp</summary>

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

Berre last opp dette biletet i ei mappe kalla "pictures" (eller kva namn du vil) i "www"-mappa til Home Assistant.

</details>

<details>

<summary>Avansert eksempel: Lage ein horisontal rad med underknappar (skjermbilete inkludert)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Eg elskar verkeleg denne, eg brukar han som ein header på dashbordet mitt.

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

## Malar

**Bubble Card støttar ikkje Jinja-malar**, men avanserte brukarar kan leggje til malar i JS direkte i sine [eigne stilar](#styling). Dette gjer det til dømes mogleg å dynamisk endre eit ikon, tekstane eller fargane til eit element, å visa eller skjula eit element betinga (som ein underknapp), eller nesten kva som helst basert på ein tilstand, ein attributt og meir.

> [!TIP]  
> Meir informasjon om JS-malar [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mitt råd er å **alltid ta ein kikk i nettlesarkonsollen** for å vera sikker på at alt fungerer som det skal.

> [!IMPORTANT]  
> **Alle malar som ikkje endrar ein CSS-eigenskap må plasserast heilt til slutt! Til dømes ved endring av eit ikon, ein tekst eller eit anna element.**

#### Tilgjengelege variablar og funksjonar

<details>

<summary>Variablar</summary>

<br>

Du har tilgang til desse variablane i dei fleste korta:

- `state` returnerer tilstanden til den definerte `entity`-en din.
  
- `entity` returnerer entiteten du har definert, til dømes `switch.test` i dette eksempelet.
  
- `icon` kan brukast slik for å endre ikonet: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` returnerer tilstanden til den definerte `entity`-en for den første underknappen, `[0]` er tilstanden til den første underknappen, `[1]` den andre...
  
- `subButtonIcon[0]` kan brukast slik for å endre ikonet til den første underknappen: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` er ikonet til den første underknappen, `[1]` den andre...
  
- `card` returnerer kort-elementet i DOM-en.
  
- `hass` er ein avansert variabel som gjev deg endå meir kontroll, du kan til dømes returnere tilstanden til `light.kitchen` slik: `hass.states['light.kitchen'].state`, eller ein attributt slik: `hass.states[entity].attributes.brightness`.

- `this` returnerer mykje nyttig informasjon om oppsettet og dashbordet ditt, bruk denne berre om du veit kva du gjer.

</details>

<details>

<summary>Funksjonar</summary>

<br>

Du har tilgang til alle globale JS-funksjonar, men også til:

- `getWeatherIcon` kan brukast til å returnere eit vêrikon basert på ein tilstand som gjev vêret. Du kan til dømes gjere dette `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` for å endre ikonet til den tredje underknappen til dagens vêrikon, `.forecast[1]?.condition` er for i morgon...

  Du må lage ein malsensor for dette. Her er kva du kan leggje til i `configuration.yaml`:
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
- `hass.formatEntityState(state)` kan brukast til å omsetje ein tilstand (kan også brukast for å hente ei tilstandseining, utan at du treng leggje ho til manuelt).
- `hass.formatEntityAttributeValue(state, "attribute")` kan brukast til å omsetje ein attributt (kan også brukast for å hente ei tilstandseining, utan at du treng leggje ho til manuelt).

</details>

#### Eksempel

Du finn mange eksempel under, men du finn også svært avanserte malar på [Patreon-sida](https://www.patreon.com/c/Clooos) mi, til dømes ein (favoritten min) som lèt deg leggje til inntil fire betinga merke rundt ikona til kortet. Det er også ein flott måte å lære om alle moglegheitene til dei eigne stilane og malane i Bubble Card!

<details>
<summary>Eksempel frå Patreon-sida mi</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Legge til merke i Home Assistant-stil på eit vilkårleg kort</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Visa formatert dato og klokkeslett i eit skiljeteikn utan å bruke ein entitet</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Visa tilstanden til ein underknapp på to linjer</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Tilpasse etikettar og ikon inni ein select-underknapp</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Legge til ein varig påminningspop-up som berre dukkar opp når det trengst</a>
</p>

<br>

</details>

<details>

<summary>Endre bakgrunnsfargen til ein knapp som er raud når han er <code>off</code> og blå når han er <code>on</code></summary>

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

<summary>Endre bakgrunnsfargen til ein knapp basert på ein entitet i den horisontale knapperaden</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Visa/skjule ein underknapp betinga</summary>

<br>

Denne viser den første underknappen berre når støvsugaren min sit fast.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Denne viser ein underknapp når batteriet er under 10 %. Nyttig med ein underknapp som viser "Lite batteri".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Endre eit ikon eller underknapp-ikon betinga</summary>

<br>

Denne endrar eit knappeikon berre når ein støvsugar sit fast.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Denne endrar ikonet til den første underknappen berre når ein støvsugar sit fast.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Endre fargen på eit ikon eller underknapp-ikon betinga</summary>

<br>

Denne endrar fargen på eit knappeikon basert på tilstanden.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Denne endrar fargen på eit underknapp-ikon basert på tilstanden. `.bubble-sub-button-1` er den første underknappen, byt ut `1` viss du vil endre eit anna underknapp-ikon.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animere eit vifteikon betinga</summary>

<br>

Denne roterer eit knappeikon når ei vifte er `on`.
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

<summary>Lage malar for tekstar (som namn eller tilstand)</summary>

<br>

Denne endrar namnet/tilstanden til ein knapp til "Det er for tida sol" avhengig av vêret ditt.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
eller når det blir brukt på underknappar:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Viss du vil lage ein mal for tilstanden (`.bubble-state`), ikkje slå på `show_state: true`, berre slå på `show_attribute: true` utan nokon attributt.

</details>

<details>

<summary>Avansert eksempel: Endre fargen på ein underknapp når ein pop-up er open</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Avansert eksempel: Lage ein mal for namnet på eit skiljeteikn basert på ein tilstand omsett til ditt eige språk</summary>

<br>

Du kan bruke `hass.formatEntityState(state)` til å omsetje ein tilstand og `hass.formatEntityAttributeValue(state, "attribute")` til å omsetje ein attributt.

Denne endrar namnet og ikonet basert på vêret, "Nuageux" betyr "skya" på fransk.

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

## Modular

Modular er ein kraftig funksjon som lèt deg lagre, gjenbruke og dele dine eigne stilar og malar på tvers av alle Bubble Card-a dine. I staden for å kopiere og lime inn den same koden i fleire kort, kan du lage ein modul og bruke han der du treng det. Dette gjer det mykje enklare og meir effektivt å styra utsjånaden til dashbordet ditt.

Men denne funksjonen er langt kraftigare enn det, han lèt deg leggje til eigne funksjonar sjølv i Bubble Card-redigeringsverktøyet, med alle dei vanlege [Home Assistant-skjema](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)-alternativa!  
Objektveljaren er forbetra slik at han viser endringar live og støttar attributt korrekt.

Du kan også bla gjennom **Module Store** for å finne og installere [modular laga av fellesskapet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), eller dele dine eigne skapingar!

> [!TIP]
> Koden til ein modul fungerer nøyaktig på same måte som koden i `styles`-delen til eit kort. Alle dei same variablane og funksjonane frå [Malar](#malar)-delen er tilgjengelege.

<br>

### Første oppsett

> [!IMPORTANT]
> Frå og med v3.1.0 er Bubble Card Tools den tilrådde lagringsbakenden for modular. Den gamle metoden med malsensor fungerer framleis for eksisterande oppsett, men nye modular og Module Store-funksjonar er best støtta via Bubble Card Tools.

Bubble Card Tools-integrasjonen aktiverer Module Editor og Module Store, og lagrar modular som individuelle YAML-filer. Eksisterande modular blir migrerte automatisk.

Installasjons- og konfigurasjonstrinna er forklarte her:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

Du får tilgang til Module Editor frå innstillingane til eit vilkårleg kort, under **Modules**-delen. Redigeringsverktøyet har to hovudfaner:

#### Fana "My Modules"

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Denne fana viser alle dei installerte modulane dine og lèt deg:

- **Bruke** eksisterande modular på det gjeldande kortet
- **Lage** ein ny modul frå botnen
- **Redigere** eksisterande modular med live førehandsvising
- **Slette** modular du ikkje treng lenger
- **Søkje** og **sortere** modular (alfabetisk, nyleg, aktive først)
- **Setje global status** slik at ein modul automatisk blir brukt på alle kort
- **Importere/eksportere** modular for sikkerheitskopi eller deling

#### Fana "Module Store"

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Denne fana viser [alle tilgjengelege modular frå fellesskapet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), og lèt deg:

- **Bla gjennom** alle modular laga av fellesskapet
- **Søkje** og filtrere modular etter namn, kompatibilitet eller søkjeord
- **Installere** modular med eitt klikk
- **Oppdatere** installerte modular når nye versjonar er tilgjengelege

> [!TIP]
> I redigeringsverktøyet kan du aktivere ustøtta modular for å teste modular som endå ikkje er merkte som kompatible med ein gitt korttype.

<br>

### Slik brukar du modular

#### Lage ein ny modul

<details>

<summary>Klikk for å utvide</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gå til redigeringsverktøyet til eit vilkårleg kort og utvid **Modules**-delen.
2. Klikk på **Create new module**.
3. Fyll ut informasjonen om modulen.
4. Skriv CSS- og/eller JavaScript-malkoden din i **Code**-editoren.
5. (Valfritt) Lag eit eige konfigurasjonsgrensesnitt i **Editor**-delen (som fargeveljaren i skjermbiletet over, full dokumentasjon tilgjengeleg [her](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Klikk **Save**.

No er modulen din tilgjengeleg for bruk på alle korta dine!

<br>

</details>

#### Bruke ein modul på eit kort

<details>

<summary>Klikk for å utvide</summary>

<br>

- **Via redigeringsverktøyet:**

  - Gå til redigeringsverktøyet til kortet du vil bruke modulen på.
  - Utvid **Modules**-delen.
  - Klikk på modulen du vil bruke frå lista.
  - Under "Apply to", klikk på "This card". Modulen er no aktiv. Du kan bruke fleire modular på det same kortet.

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

#### Bruke ein modul globalt

<details>

<summary>Klikk for å utvide</summary>

<br>

Du kan setje ein modul til å automatisk bli brukt på alle Bubble Card:

**Dette er ikkje tilgjengeleg for modular med eit eige redigeringsgrensesnitt, sidan desse krev ein spesifikk konfigurasjon for å fungere.**

- **Via redigeringsverktøyet:**

  - I Module Editor, finn modulen din i **My Modules**-fana.
  - Slå på **All cards**-knappen ved sida av modulnamnet.
  - Modulen blir no automatisk brukt på alle kort.
 
- **Via YAML:**

  I YAML-konfigurasjonen til modulen din (i `bubble-modules.yaml`), berre legg til `is_global: true`.

<br>

</details>

#### Ekskludere eit enkelt kort frå ein global modul

<details>

<summary>Klikk for å utvide</summary>

<br>

Viss du har ein global modul, men vil ekskludere han frå eit bestemt kort:

- **Via redigeringsverktøyet:**
  
  - I **Modules**-delen til kortet vil du sjå globale modular oppførte.
  - Klikk på ein global modul, slå av "This card" for å ekskludere han frå dette bestemte kortet.

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

For å dele modulen din til Module Store, i Module Editor, nedst under "Export Module", klikk på "Copy for GitHub" og lim inn innhaldet i ein ny diskusjon i kategorien [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Rediger skildringa** (om nødvendig), **eksempelet** (for YAML-brukarar), og hugs å **inkludere minst eitt skjermbilete** for Module Store.

**Modulen din blir tilgjengeleg like etter det** (etter ei oppdatering av butikken), så dobbeltsjekk at alt er korrekt skrive og at modulen fungerer som forventa. Du kan sjølvsagt redigere/oppdatere modulen etter at han er delt.

<br>

</details>

#### Versjonshandtering

<details>

<summary>Klikk for å utvide</summary>

<br>

Module Store sjekkar automatisk om det finst oppdateringar til installerte modular. Når oppdateringar er tilgjengelege:

1. Du vil sjå ein oppdateringsindikator i **Module Store**-fana.
2. Klikk **Update** på modular med tilgjengelege oppdateringar.
3. Stadfest oppdateringa i Module Store.

<br>

</details>

#### Definere støtta korttypar

<details>

<summary>Klikk for å utvide</summary>

<br>

Nokre modular er kanskje ikkje kompatible med alle korttypar. Du kan spesifisere kva kort ein modul støttar.  
Viss du vil at ein modul skal vera kompatibel med **alle kort**, berre utelat `supported`-feltet (eller bruk **All cards**-alternativet i redigeringsverktøyet).

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

### Eksempel

<details>
<summary>Enkel stylingmodul</summary>

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
<summary>Modul med eiga konfigurasjon</summary>

<br>

Denne modulen er tilgjengeleg [her](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Fleire eksempel finn du i Module Store, eller [her](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Hjelp

Ikkje nøl med å opne ein issue viss noko ikkje fungerer som forventa. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Har du spørsmål eller tankar om Bubble Card? Vil du dele dashborda eller oppdagingane dine? Du kan gå på Home Assistant-forumet, på Bubble Card-subredditen eller i GitHub Discussions-delen.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bidra

Bidrag er velkomne! Anten det er feilrettingar, nye funksjonar, omsetjingar eller forbetringar av dokumentasjonen, ikkje nøl med å opne ein pull request.

Før du set i gang, les [utviklarrettleiinga](DEVELOPERS.md) som forklarer korleis du set opp det lokale miljøet ditt, byggjer prosjektet og testar endringane dine.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Doner

Eg viar det meste av fritida mi til å gjere dette prosjektet så bra som det kan bli. Så viss du set pris på arbeidet mitt, vil ei donasjon vera ein flott måte å vise di støtte på 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Takk til alle for støtta dykkar, de er den største motivasjonen min!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
