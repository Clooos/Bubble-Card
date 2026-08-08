<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Denne side er en automatisk oversættelse. Er du i tvivl, har den [originale engelske dokumentation](../README.md) forrang. Lyder en sætning forkert? Al hjælp er velkommen, og det tager kun et minut at [rette denne side](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.da.md): GitHub sørger selv for forken og pull requesten. Tak på forhånd! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Læs dette på et andet sprog](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card er en minimalistisk og tilpasselig kortsamling til Home Assistant, med moderne pop-up-vinduer og en integreret Module Store med over 100 fællesskabsudviklede moduler.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Indholdsfortegnelse

**[`Installation`](#installation)**  **[`Konfiguration`](#konfiguration)**  **[`Entitetsforslag`](#entitetsforslag)**  **[`Pop-up`](#pop-up)**  **[`Vandret knaprække`](#vandret-knaprække)**  **[`Knap`](#knap)**  **[`Medieafspiller`](#medieafspiller)**  **[`Gardin`](#gardin)**  **[`Vælg`](#vælg)**  **[`Klima`](#klima)**  **[`Kalender`](#kalender)**  **[`Separator`](#separator)**  **[`Tom kolonne`](#tom-kolonne)**  **[`Kun underknapper`](#kun-underknapper)**  **[`Underknapper`](#underknapper)**  **[`Kortlayouts`](#kortlayouts)**  **[`Betingelser`](#betingelser)**  **[`Handlinger`](#tryk--dobbelttryk--og-holdehandlinger)**  **[`Styling`](#styling)**  **[`Skabeloner`](#skabeloner)**  **[`Modules`](#modules)**  **[`Lokalisering`](#lokalisering)**  **[`Hjælp`](#hjælp)**  **[`Bidrag`](#bidrag)**  **[`Donér`](#donér)**

<br>

## Installation

**Laveste understøttede version af Home Assistant:** 2023.9.0

<details>

<summary>Uden HACS</summary>

<br>

1. Download `bubble-card.zip` fra [den seneste udgivelse](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Pak den ud i din `<config>/www`-mappe, du bør få `bubble-card.js` og en `translations`-mappe ved siden af (den mappe indeholder editorens ordbøger, uden den bliver editoren på engelsk)
3. Klik på ikonet i øverste højre hjørne på dit dashboard, og klik derefter på `Rediger dashboard`
4. Klik på ikonet igen, og klik derefter på `Administrer ressourcer`
5. Klik på `Tilføj ressource`
6. Kopier og indsæt dette: `/local/bubble-card.js?v=1`
7. Klik på `JavaScript-modul` og derefter på `Opret`
8. Gå tilbage og genindlæs din side
9. Du kan nu klikke på `Tilføj kort` i nederste højre hjørne og søge efter `Bubble Card`
10. Efter enhver opdatering af filen skal du redigere `/local/bubble-card.js?v=1` og ændre versionsnummeret til et højere tal

Hvis det ikke virker, kan du prøve at rydde din browsers cache.

</details>

<details>

<summary>Med HACS (Anbefalet)</summary>

<br>

Denne metode giver dig opdateringer direkte via Home Assistant Community Store

1. Hvis HACS ikke allerede er installeret, kan du downloade det ved at følge vejledningen på [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Gennemfør den indledende konfiguration af HACS ved at følge vejledningen på [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Gå til "HACS" i din sidebjælke
4. Søg efter "Bubble Card", eller klik på den blå knap nedenfor
5. Klik på "Download"
6. Gå tilbage til dit dashboard, klik på ikonet i øverste højre hjørne, og klik derefter på `Rediger dashboard`
7. Du kan nu klikke på `Tilføj kort` i nederste højre hjørne og søge efter `Bubble Card`

Hvis det ikke virker, kan du prøve at rydde din browsers/apps cache (på alle dine enheder, hvis nødvendigt).

#### Videoer

Du kan også kigge på min YouTube-kanal for trin for trin-videoer.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguration

Alle indstillinger kan konfigureres i Home Assistant-editoren. Men du kan finde flere detaljer og YAML'en i dokumentationen nedenfor.

<details>

<summary><b>Hovedindstillinger (YAML + beskrivelse)</b></summary>

| Navn | Type | Krav | Understøttede muligheder | Beskrivelse |
| --- | --- | --- | --- | --- |
| `type` | string | **Påkrævet** | `custom:bubble-card` | Kortets type |
| `card_type` | string | **Påkrævet** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` eller `sub-buttons` | Bubble Card-typen, se nedenfor |
| `styles` | objektliste | Valgfrit | Alle CSS-stilarter | Giver dig mulighed for at tilpasse din Bubble Cards CSS, se [styling](#styling) |

</details>

<details>

<summary><b>Globale CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Kantradius for alle understøttede elementer |
| `--bubble-main-background-color` | `color` | Primær baggrundsfarve for alle understøttede elementer |
| `--bubble-secondary-background-color` | `color` | Sekundær baggrundsfarve for alle understøttede elementer |
| `--bubble-accent-color` | `color` | Accentfarve for alle understøttede elementer |
| `--bubble-icon-border-radius` | `px` | Kantradius for ikoner for alle understøttede elementer |
| `--bubble-icon-background-color` | `color` | Ikonets baggrundsfarve for alle understøttede elementer |
| `--bubble-sub-button-border-radius` | `px` | Kantradius for alle underknapper |
| `--bubble-sub-button-background-color` | `color` | Baggrundsfarve for alle underknapper |
| `--bubble-box-shadow` | se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skygge for alle understøttede elementer |
| `--bubble-border` | se [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Kant for alle understøttede kort |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Se denne [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) for at lære om Bubble Card og dens muligheder.** Min YouTube-kanal er ret ny og fokuserer på tutorials om Home Assistant og Bubble Card. Du er meget velkommen til at abonnere for at hjælpe med at øge min kanals synlighed. Tak på forhånd!

<br>

---

<br>

## Entitetsforslag

Siden Home Assistant 2026.6 tilbyder kortvælgeren dig et par færdige kort, når du vælger en entitet, og Bubble Card tilføjer sine egne opskrifter til den liste. Vælg et lys, og du får tilbudt et kort med en lysstyrkeskyder, plus en variant med farvetemperatur, en med farve og en med mætning, når dit lys understøtter dem. Vælg et gardin, og du får skyderen til dets position, vælg en medieafspiller, og du får også en variant med dens kildeliste, vælg en støvsuger, og du får dens knapper til start, pause og retur til dock. Hvert forslag er en almindelig Bubble Card-konfiguration vist som en live forhåndsvisning, så du kan tage den nærmeste og redigere videre på den som sædvanlig.

Hvad du får tilbudt, afhænger af, hvad din entitet faktisk kan: et lys uden lysstyrkekanal får en kontakt i stedet for en skyder, et gardin, der ikke kan vippe, får ingen vippevariant, og en klimaentitet får kun sine forudindstillinger, når den har nogle. De klassiske punkter følger under Bubble Card-forslagene, når de giver mening: kortet dedikeret til den entitetstype, en almindelig knap og en skyder.

> [!TIP]
> Modules kan tilføje deres egne forslag til den liste, se [Modules](#modules).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Dette kort giver dig mulighed for at oprette en pop-up med et vilkårligt indhold. Hver pop-up er **skjult som standard** og kan åbnes ved at målrette dens link (f.eks. `'#pop-up-name'`), med et hvilket som helst kort der understøtter `navigate`-[handlingen](#tryk--dobbelttryk--og-holdehandlinger), eller med den medfølgende [vandrette knaprække](#vandret-knaprække).

> [!TIP]
> ### Pop-up-udløser 
> Denne funktion giver dig mulighed for at åbne en pop-up baseret på tilstanden af en hvilken som helst entitet, for eksempel kan du åbne en "Sikkerhed"-pop-up med et kamera, når en person står foran dit hus. Du kan også oprette en toggle-hjælper (input_boolean) og udløse dens åbning/lukning i en automatisering.
> <details>
> <summary>Åbning af en pop-up når en <code>binary_sensor</code> er <code>on</code></summary>
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
> ### Forskellige måder at lukke en pop-up på 
> Der er mange måder at lukke en pop-up på. Du kan for eksempel stryge fra pop-uppens header til bunden, ved at lave et langt stryg inde i pop-uppen ned til bunden, ved at trykke på Escape på desktop, ved at fjerne hash'en i URL'en eller ved simpelthen at trykke på luk-knappen.
>


### Pop-up-indstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede muligheder | Beskrivelse |
| --- | --- | --- | --- | --- |
| `hash` | string | **Påkrævet** | Enhver unik hash (f.eks. `'#kitchen'`) med ' ' | Sådan åbner du din pop-up |
| `popup_style` | string | Valgfrit | `bubble` (standard) eller `classic` | Definer pop-uppens visuelle stil |
| `popup_mode` | string | Valgfrit | `default` (standard), `fit-content`, `centered` eller `adaptive-dialog` | Definer pop-uppens layouttilstand |
| `with_bottom_offset` | boolean | Valgfrit | `true` eller `false` (standard) | Bruges kun med `popup_mode: fit-content` eller `adaptive-dialog`. Tilføjer et bundmargen på mobil, nyttigt når dit dashboard indeholder et footer-kort. |
| `full_width_on_mobile` | boolean | Valgfrit | `true` eller `false` (standard) | Bruges kun med `popup_mode: centered`. Udvider pop-uppen til fuld skærmbredde på mobil, nyttigt på mindre skærme. |
| `performance_mode` | string | Valgfrit | `default` (standard) eller `performance` | Optimerer pop-uppens åbningsanimation. `performance` udskyder gengivelsen af indholdet og baggrundssløringen en smule, og deaktiverer også sløring af baggrundslaget hvis den er angivet. |
| `auto_close` | string | Valgfrit | En timeout i millisekunder (f.eks. `10000` for 10s) | Luk pop-uppen automatisk efter en timeout |
| `close_on_click` | boolean | Valgfrit | `true` eller `false` (standard) | Luk pop-uppen automatisk efter enhver interaktion |
| `close_by_clicking_outside` | boolean | Valgfrit | `true` (standard) eller `false` | Luk pop-uppen ved at klikke udenfor den |
| `width_desktop` | string | Valgfrit | Enhver CSS-værdi | Bredde på desktop (`100%` som standard på mobil) |
| `margin` | string | Valgfrit | Enhver CSS-værdi | Brug dette **kun** hvis din pop-up ikke er godt centreret på mobil (f.eks. `13px`) |
| `margin_top_mobile` | string | Valgfrit | Enhver CSS-værdi | Topmargen på mobil (f.eks. `-56px` hvis din header er skjult) |
| `margin_top_desktop` | string | Valgfrit | Enhver CSS-værdi | Topmargen på desktop (f.eks. `50vh` for en halvt så stor pop-up eller `calc(100vh - 400px)` for en fast højde på `400px`) |
| `bg_color` | string | Valgfrit | Enhver hex-, rgb- eller rgba-værdi | Baggrundsfarven på din pop-up (f.eks. `#ffffff` for en hvid baggrund) |
| `bg_opacity` | string | Valgfrit | Enhver værdi fra `0` til `100` | Baggrundens opacitet på din pop-up (f.eks. `100` for ingen gennemsigtighed) |
| `bg_blur` | string | Valgfrit | Enhver værdi fra `0` til `100` | Baggrundssløringseffekten på din pop-up, **dette virker kun hvis `bg_opacity` ikke er sat til `100`** (f.eks. `0` for ingen sløring)|
| `shadow_opacity` | string | Valgfrit | Enhver værdi fra `0` til `100` | Skyggens opacitet på din pop-up (f.eks. `0` for at skjule den) |
| `hide_backdrop` | boolean | Valgfrit | `true` eller `false` (standard) | Sæt denne til true på den første pop-up på dit hoveddashboard for at deaktivere baggrundslaget på alle pop-ups. |
| `background_update` | boolean | Valgfrit | `true` eller `false` (standard) | Opdater pop-uppens indhold i baggrunden (anbefales ikke) |
| `trigger` | object eller list | Valgfrit | Se [betingelser](#betingelser) | Åbn denne pop-up når betingelserne er opfyldt |
| `trigger_entity` | string | Valgfrit | Enhver entitet | Åbn denne pop-up baseret på tilstanden af en hvilken som helst entitet, den enkle form af `trigger` |
| `trigger_state` | string | Valgfrit (**Påkrævet** hvis `trigger_entity` er defineret) | Enhver entitetstilstand | Entitetstilstand der åbner pop-uppen |
| `trigger_close` | boolean | Valgfrit | `true` (standard) eller `false` | Luk pop-uppen når betingelserne ikke længere er opfyldt. Standarden er i stedet `false`, når du bruger det ældre par `trigger_entity` og `trigger_state` |
| `open_action` | object | Valgfrit | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Udløs en handling når pop-uppen åbnes |
| `close_action` | object | Valgfrit | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Udløs en handling når pop-uppen lukkes |
| `show_header` | boolean | Valgfrit | `true` (standard) eller `false` | Vis/skjul pop-uppens header helt |
| `show_previous_button` | boolean | Valgfrit | `true` eller `false` (standard) | Vis en tilbage-knap ved siden af luk-knappen, og naviger tilbage til den forrige pop-up når det er muligt |
| `show_close_button` | boolean | Valgfrit | `true` (standard) eller `false` | Vis eller skjul luk-knappen, mens resten af headeren forbliver synlig |
| `buttons_position` | string | Valgfrit | `right` (standard) eller `left` | Placering af luk- og tilbage-knapperne i headeren |
| `cards` | liste | Valgfrit | Ethvert Bubble Card-, Home Assistant-kort eller brugerdefineret kort | Definer indholdet af din pop-up. Se eksemplet på en pop-up nedenfor. |
| Du har også adgang til [alle knapindstillingerne](#knap) til pop-uppens header. | | Valgfrit | | Hvis udefineret vises der ingen header |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Kantradius for pop-uppen |
| `--bubble-pop-up-main-background-color` | `color` | Primær baggrundsfarve for understøttede elementer i pop-uppen |
| `--bubble-pop-up-background-color` | `color` | Baggrundsfarve for pop-uppen |
| `--bubble-backdrop-background-color` | `color` | Baggrundsfarve for baggrundslaget |
| Du har også adgang til [alle knappens CSS-variabler](#knapindstillinger) til pop-uppens header. | | |

</details>


### Frit stående pop-up-format (v3.2.0+)

Siden v3.2.0 bruger pop-ups et nyt frit stående format, hvor indholdskortene defineres direkte inde i pop-uppen ved hjælp af `cards`-indstillingen. Dette giver bedre ydeevne og en ny sektionsbaseret træk og slip-redigeringsoplevelse.


#### Eksempler

<details>

<summary>En pop-up (frit stående format)</summary>

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

<summary>En knap til at åbne pop-uppen</summary>

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

## Vandret knaprække

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Dette kort er en god makker til pop-up-kortet og lader dig åbne de tilhørende pop-ups. Det lader dig også åbne enhver side i dit dashboard. Derudover kan du tilføje dine bevægelses-/tilstedeværelsessensorer, så knappernes rækkefølge tilpasser sig efter det rum, du lige er trådt ind i. Dette kort kan rulles, forbliver synligt og fungerer som en footer.

> [!IMPORTANT]  
> Dette kort skal være det sidste i din visning (efter alle kort og pop-ups). Det kan ikke være inde i nogen stak.

### Indstillinger for vandret knaprække

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede værdier | Beskrivelse |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Påkrævet** | Pop-uppens hash (f.eks. `'#kitchen'`) med ' ' eller ethvert link | Et link der skal åbnes |
| `1_name` | string | Valgfri | Enhver tekst | Et navn til din knap |
| `1_icon` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til din knap |
| `1_entity` | string | Valgfri | Ethvert lys eller enhver lysgruppe | Vis lysets farve i baggrunden |
| `1_pir_sensor` | string | Valgfri | Enhver binær sensor | Mindst en pir-sensor eller flere til `auto_order`, faktisk virker det også med enhver entitetstype, du kan for eksempel tilføje lysgrupper, og rækkefølgen ændres baseret på de senest ændrede tilstande. |
| `auto_order` | boolean | Valgfri | `true` eller `false` (standard) | Ændr knappernes rækkefølge efter hvornår `_pir_sensor` senest blev ændret, **den skal være `false`, hvis du ikke har nogen `_pir_sensor` i din kode** |
| `margin` | string | Valgfri | Enhver CSS-værdi | Brug **kun** denne, hvis din `horizontal-buttons-stack` ikke er korrekt centreret på mobil (f.eks. `13px`) |
| `width_desktop` | string | Valgfri | Enhver CSS-værdi | Bredde på computer (`100%` som standard på mobil) |
| `is_sidebar_hidden` | boolean | Valgfri | `true` eller `false` (standard) | Ret den vandrette knaprækkes position, hvis sidepanelet er skjult på computeren (kun hvis du selv har lavet en ændring for at skjule det) |
| `rise_animation` | boolean | Valgfri | `true` (standard) eller `false` | Sæt denne til `false` for at deaktivere animationen, der aktiveres, når siden er indlæst |
| `highlight_current_view` | boolean | Valgfri | `true` eller `false` (standard) | Fremhæv aktuel hash / visning med en blød animation |
| `hide_gradient` | boolean | Valgfri | `true` eller `false` (standard) | Sæt denne til `false` for at skjule gradienten |

> [!IMPORTANT]  
> Variablerne, der starter med et tal, definerer dine knapper, du skal bare ændre dette tal for at tilføje flere knapper (se eksemplet nedenfor).

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Kanternes runding for knapperne i den vandrette knaprække |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Baggrundsfarve for knapperne i den vandrette knaprække |

</details>


#### Eksempel

<details>

<summary>En vandret knaprække der omorganiserer sig selv baseret på tilstedeværelsessensorer</summary>

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

## Knap

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Dette kort er meget alsidigt. Det kan bruges som en **kontakt**, en **skyder**, en **tilstand** eller en **navn/tekst**-knap.

> [!TIP]
> ### Hvad er forskellen mellem alle knaptyperne?
>
> - **Kontaktknap:** Dette er standardknaptypen. Som standard skifter den en entitet, og dens baggrundsfarve ændres baseret på entitetens tilstand eller et lys' farve. Du kan ændre dens handling i sektionen **Trykhandling på kort**.
>
> - **Skyderknap:** Denne knaptype lader dig styre entiteter med justerbare intervaller. Den er ideel til at dæmpe lys, og dens fyldfarve tilpasser sig lysets farve. Du kan også bruge den til at vise værdier, såsom et batteriniveau.
>   Understøttede entiteter til skydere:
>   - Lys (lysstyrke)
>   - Medieafspiller (lydstyrke)
>   - Gardin (position)
>   - Ventilator (procent)
>   - Klima (temperatur)
>   - Input number og number (værdi)
>   - Batterisensor (procent, skrivebeskyttet)
>
>   Du kan også bruge enhver entitet med en numerisk tilstand ved at deaktivere entitetsfilteret i **Skyderindstillinger** og derefter angive værdierne `min` og `max`. Denne mulighed er skrivebeskyttet.
>
> - **Tilstandsknap:** Perfekt til at vise oplysninger fra en sensor eller enhver entitet. Når du trykker på den, vises entitetens "Mere info"-panel. Dens baggrundsfarve ændres ikke.
>
> - **Navn/tekst-knap:** Den eneste knaptype, der ikke behøver en entitet. Den lader dig vise en kort tekst, et navn eller en titel. Du kan også tilføje handlinger til den. Dens baggrundsfarve ændres ikke.

### Knapindstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede indstillinger | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkrævet** | Enhver entitet | En entitet der skal styres |
| `button_type` | string | Valgfri | `switch` (standard), `slider`, `state` eller `name` | Din knaps opførsel |
| `name` | string | Valgfri | Enhver streng | Et navn til din knap, hvis det ikke er angivet, vises entitetens navn |
| `icon` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til din knap, hvis det ikke er angivet, vises entitetens ikon eller `entity-picture` |
| `force_icon` | boolean | Valgfri | `true` eller `false` (standard) | Giv prioritet til ikonet frem for `entity-picture` |
| `use_accent_color` | boolean | Valgfri (`false` standard) | **Kun for lys.** Brug temaets accentfarve i stedet for lysets farve.                         |
| `show_state` | boolean | Valgfri | `true` eller `false` (standard) | Vis eller skjul tilstanden for din `entity` |
| `show_name` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfri | `true` eller `false` (standard) | Vis tidspunktet for den seneste ændring af din `entity` |
| `show_last_updated` | boolean | Valgfri | `true` eller `false` (standard) | Vis tidspunktet for den seneste opdatering af din `entity` |
| `show_attribute` | boolean | Valgfri | `true` eller `false` (standard) | Vis en attribut fra din `entity` under dens `name` |
| `attribute` | string | Valgfri (påkrævet hvis `show_attribute` er sat til `true`) | En attribut fra din `entity` | Attributten der skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfri | `true` (standard) eller `false` | Tillad tekst at rulle, når indholdet overstiger containerens størrelse |
| `button_action` | object | Valgfri | `tap_action`, `double_tap_action` eller `hold_action`, se nedenfor | Tillader at ændre standardhandlingerne ved klik på knappen. |
| `tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer typen af handling ved klik på ikonet, hvis udefineret bruges `more-info` |
| `double_tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer typen af handling ved dobbeltklik på ikonet, hvis udefineret bruges `none` |
| `hold_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer typen af handling ved hold på ikonet, hvis udefineret bruges `more-info` |
| `card_layout` | string | Valgfri | `normal` (standard hvis ikke i sektionsvisning), `large` (standard hvis i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |
| `sub_button` | object | Valgfri | Se [underknapper](#underknapper) | Tilføj tilpassede knapper fastgjort til højre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Hovedbaggrundsfarve for understøttede elementer i knappen |
| `--bubble-button-border-radius` | `px` | Kantradius for knappen |
| `--bubble-button-icon-border-radius` | `px` | Kantradius for knappens ikoncontainer |
| `--bubble-button-icon-background-color` | `color` | Baggrundsfarve for knappens ikoncontainer |
| `--bubble-light-white-color` | `color` | Erstat standardhvidfarven for lysknapper/-skydere |
| `--bubble-light-color` | `color` | Erstat farven for lysknapper/-skydere (også RGB-lys) |
| `--bubble-button-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for knappen |

</details>

Disse indstillinger er kun tilgængelige, når `button_type` er sat til `slider`.

<details>

<summary><b>Skyderindstillinger (YAML + beskrivelser)</b></summary>

| Navn                  | Type    | Krav                     | Beskrivelse                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Valgfri                        | Skyderens minimumsværdi. Til brugerdefinerede skydere.                                                    |
| `max_value`             | number  | Valgfri                        | Skyderens maksimumsværdi. Til brugerdefinerede skydere.                                                    |
| `step`                  | number  | Valgfri                        | Skyderens trinværdi.                                                                                           |
| `tap_to_slide`          | boolean | Valgfri (`false` standard)      | Aktiver den tidligere skyderadfærd, hvor du trykker for at aktivere skyderen, i stedet for at holde den.        |
| `relative_slide`        | boolean | Valgfri (`false` standard )     | Opdater værdien relativt til startværdien, i stedet for det oprindelige trykpunkt.                      |
| `read_only_slider`      | boolean | Valgfri (`false` standard)      | Gør skyderen skrivebeskyttet. Aktiveres automatisk for visse entiteter som sensorer.                        |
| `slider_live_update`    | boolean | Valgfri (`false` standard)      | Entitetens tilstand opdateres, mens du skyder. **Denne funktion anbefales ikke til alle entiteter.**        |
| `slider_fill_orientation` | string | Valgfri | `left`, `right`, `top` eller `bottom` | Skift skyderens fyldretning. Fra venstre mod højre når den ikke er defineret, spejlvendt i [sprog der skrives fra højre mod venstre](#lokalisering) |
| `slider_value_position` | string | Valgfri | `right`, `left`, `center` eller `hidden` | Placering af værdivisningen. Til højre når den ikke er defineret, og til venstre i [sprog der skrives fra højre mod venstre](#lokalisering) |
| `invert_slider_value` | boolean | Valgfri (`false` standard) | Vend skyderens retning om (100 % fyldning svarer til minimum). Ikke tilgængelig for farveskydere. |
| `light_slider_type` | string | Valgfri | `brightness` (standard), `hue`, `saturation`, `white_temp` | **Kun for lys.** Vælg skydertilstanden |
| `cover_slider_type` | string | Valgfri | `position` (standard), `tilt_position` | **Kun for gardiner.** Vælg skydertilstanden (position eller vipning) |
| `hue_force_saturation` | boolean | Valgfri (`false` standard) | **Kun for lys (Farvetone-tilstand).** Gennemtving mætning ved justering af farvetone |
| `hue_force_saturation_value` | number | Valgfri (`100` standard) | **Kun for lys (Farvetone-tilstand).** Gennemtvunget mætningsværdi (0-100) |
| `use_accent_color` | boolean | Valgfri (`false` standard) | **Kun for lys (Lysstyrke-tilstand).** Brug temaets accentfarve i stedet for lysets farve |
| `allow_light_slider_to_0` | boolean | Valgfri (`false` standard)    | **Kun for lys.** Tillader at skyderen når 0 %, hvilket slukker lyset. Ikke tilgængelig sammen med `tap_to_slide`. |
| `light_transition`      | boolean | Valgfri (`false` standard)      | **Kun for lys.** Aktiver bløde lysstyrkeovergange for lys der understøtter det.                           |
| `light_transition_time` | number  | Valgfri (`500` standard)        | **Kun for lys.** Overgangstiden i millisekunder. Kræver `light_transition: true`.            |

</details>

#### Eksempler

<details>

<summary>En skyderknap der kan styre lysstyrken for et lys</summary>

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

<summary>En knap med flere indstillinger</summary>

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

## Medieafspiller

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Dette kort giver dig mulighed for at styre en medieafspillerentitet.

### Indstillinger for medieafspiller

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede indstillinger | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkrævet** | Enhver medieafspiller | Medieafspilleren der skal styres |
| `name` | string | Valgfri | Enhver streng | Et navn til din medieafspiller, hvis det ikke er angivet, vises entitetens navn |
| `icon` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til din medieafspiller, hvis det ikke er angivet, vises entitetens ikon eller `entity-picture` |
| `force_icon` | boolean | Valgfri | `true` eller `false` (standard) | Giv prioritet til ikonet frem for `entity-picture` |
| `show_state` | boolean | Valgfri | `true` eller `false` (standard) | Vis eller skjul tilstanden for din `entity` |
| `show_name` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfri | `true` eller `false` (standard) | Vis tidspunktet for den seneste ændring af din `entity` |
| `show_last_updated` | boolean | Valgfri | `true` eller `false` (standard) | Vis tidspunktet for den seneste opdatering af din `entity` |
| `show_attribute` | boolean | Valgfri | `true` eller `false` (standard) | Vis en attribut fra din `entity` under dens `name` |
| `attribute` | string | Valgfri (påkrævet hvis `show_attribute` er sat til `true`) | En attribut fra din `entity` | Attributten der skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfri | `true` (standard) eller `false` | Tillad tekst at rulle, når indholdet overstiger containerens størrelse |
| `min_volume` | number | Valgfri | Ethvert tal | Lydstyrkeskyderens minimumsværdi. |
| `max_volume` | number | Valgfri | Ethvert tal | Lydstyrkeskyderens maksimumsværdi. |
| `cover_background` | boolean | Valgfri | `true` eller `false` (standard) | Brug et sløret medieomslag som kortets baggrund. |
| `button_action` | object | Valgfri | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Tillader at ændre standardhandlingerne ved klik på knappen. |
| `tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer typen af handling ved klik på ikonet, hvis udefineret bruges `more-info`. |
| `double_tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer typen af handling ved dobbeltklik på ikonet, hvis udefineret bruges `none`. |
| `hold_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer typen af handling ved hold på ikonet, hvis udefineret bruges `more-info`. |
| `main_buttons_position` | string | Valgfri | `default` eller `bottom` | Flyt omslagets handlingsknapper til bunden (fast) |
| `main_buttons_full_width` | boolean | Valgfri | `true` eller `false` | Gør de nederste handlingsknapper fuld bredde (standard: `true` når positionen er `bottom`) |
| `main_buttons_alignment` | string | Valgfri | `end` (standard), `center`, `start`, `space-between` | Justering af de nederste handlingsknapper, når de ikke er i fuld bredde |
| `card_layout` | string | Valgfri | `normal` (standard hvis ikke i sektionsvisning), `large` (standard hvis i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |
| `sub_button` | object | Valgfri | Se [underknapper](#underknapper) | Tilføj tilpassede knapper fastgjort til højre |
| `hide` | object | Valgfri | Se nedenfor | Skjul knapper fra kortet |

#### Skjul-indstillinger

| Navn | Type | Krav | Understøttede indstillinger | Beskrivelse |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Valgfri | `true` eller `false` (standard) | Skjul afspil/pause-knappen |
| `volume_button` | boolean | Valgfri | `true` eller `false` (standard) | Skjul lydstyrkeknappen |
| `previous_button` | boolean | Valgfri | `true` eller `false` (standard) | Skjul forrige-knappen |
| `next_button` | boolean | Valgfri | `true` eller `false` (standard) | Skjul næste-knappen |
| `power_button` | boolean | Valgfri | `true` eller `false` (standard) | Skjul tænd/sluk-knappen |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Hovedbaggrundsfarve for medieafspilleren |
| `--bubble-media-player-border-radius` | `px` | Kantradius for medieafspilleren |
| `--bubble-media-player-buttons-border-radius` | `px` | Kantradius for medieafspillerens knapper |
| `--bubble-media-player-slider-background-color` | `color` | Baggrundsfarve for lydstyrkeskyderen |
| `--bubble-media-player-icon-border-radius` | `px` | Kantradius for medieafspillerens ikoncontainer |
| `--bubble-media-player-icon-background-color` | `color` | Baggrundsfarve for medieafspillerens ikoncontainer |
| `--bubble-media-player-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskygge for medieafspilleren |

</details>


#### Eksempler

<details>

<summary>En medieafspiller med alle indstillingerne</summary>

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

Dette kort lader dig styre dine `cover`-entiteter.

### Gardinindstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede værdier | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkrævet** | Ethvert gardin | Et gardin, der skal styres |
| `name` | string | Valgfri | Enhver tekst | Et navn til dit gardin, hvis det ikke er angivet, vises entitetsnavnet |
| `force_icon` | boolean | Valgfri | `true` eller `false` (standard) | Prioriter ikonet frem for `entity-picture` |
| `show_state` | boolean | Valgfri | `true` eller `false` (standard) | Vis eller skjul tilstanden for din `entity` |
| `show_name` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfri | `true` eller `false` (standard) | Vis, hvornår din `entity` senest blev ændret |
| `show_last_updated` | boolean | Valgfri | `true` eller `false` (standard) | Vis, hvornår din `entity` senest blev opdateret |
| `show_attribute` | boolean | Valgfri | `true` eller `false` (standard) | Vis en attribut fra din `entity` under dens `name` |
| `attribute` | string | Valgfri (påkrævet hvis `show_attribute` er sat til `true`) | En attribut fra din `entity` | Attributten, der skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfri | `true` (standard) eller `false` | Tillad teksten at rulle, når indholdet overstiger størrelsen på dens container |
| `icon_open` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til dit åbne gardin, hvis det ikke er angivet, vises standardikonet for åbent gardin |
| `icon_close` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til dit lukkede gardin, hvis det ikke er angivet, vises standardikonet for lukket gardin |
| `icon_up` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til din åbn-knap, hvis det ikke er angivet, vises standardikonet for åbent gardin |
| `icon_down` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til din luk-knap, hvis det ikke er angivet, vises standardikonet for lukket gardin |
| `open_service` | string | Valgfri | Enhver tjeneste eller ethvert script | En tjeneste til at åbne dit gardin, standard er `cover.open_cover` |
| `stop_service` | string | Valgfri | Enhver tjeneste eller ethvert script | En tjeneste til at stoppe dit gardin, standard er `cover.stop_cover` |
| `close_service` | string | Valgfri | Enhver tjeneste eller ethvert script | En tjeneste til at lukke dit gardin, standard er `cover.close_cover` |
| `tilt_buttons` | string | Valgfri | `top` (standard), `bottom`, `left`, `right`, `hidden` | Placering af knapperne til vippestyring (vises kun hvis gardinet understøtter vip) |
| `open_tilt_service` | string | Valgfri | Enhver tjeneste eller ethvert script | En tjeneste til at åbne vip, standard er `cover.open_cover_tilt` |

| `close_tilt_service` | string | Valgfri | Enhver tjeneste eller ethvert script | En tjeneste til at lukke vip, standard er `cover.close_cover_tilt` |
| `button_action` | object | Valgfri | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Gør det muligt at ændre standardhandlingerne ved klik på knappen. |
| `tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved klik på ikonet, hvis den ikke er angivet, bruges `more-info`. |
| `double_tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved dobbeltklik på ikonet, hvis den ikke er angivet, bruges `none`. |
| `hold_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved hold på ikonet, hvis den ikke er angivet, bruges `more-info`. |
| `main_buttons_position` | string | Valgfri | `default` eller `bottom` | Flyt betjeningsknapperne til bunden (fast) |
| `main_buttons_full_width` | boolean | Valgfri | `true` eller `false` | Lad de nederste knapper fylde hele bredden (standard: `true` når placeringen er `bottom`) |
| `main_buttons_alignment` | string | Valgfri | `end` (standard), `center`, `start`, `space-between` | Justering af de nederste knapper, når de ikke fylder hele bredden |
| `card_layout` | string | Valgfri | `normal` (standard uden for sektionsvisning), `large` (standard i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets layout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |
| `sub_button` | object | Valgfri | Se [underknapper](#underknapper) | Tilføj tilpassede knapper fast til højre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Primær baggrundsfarve for understøttede elementer i gardinkortet |
| `--bubble-cover-border-radius` | `px` | Kantradius for gardinkortet |
| `--bubble-cover-icon-border-radius` | `px` | Kantradius for gardinkortets ikoncontainer |
| `--bubble-cover-icon-background-color` | `color` | Baggrundsfarve for gardinkortets ikoncontainer |
| `--bubble-cover-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skygge for gardinkortet |
| `--bubble-button-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skygge for knapperne i gardinkortet |

</details>


#### Eksempel

<details>

<summary>Et kort, der kan styre et rullegardin</summary>

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

## Vælg

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Dette kort lader dig tilføje en rullemenu til dine `input_select`/`select`-entiteter. Dette kort understøtter også underknapper og alle de fælles Bubble Card-funktioner.

> [!TIP]
> Du kan også have vælg-underknapper, hvis du ønsker det, denne funktion er tilgængelig i alle kort, der understøtter underknapper.

### Vælg-indstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede værdier | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | **Påkrævet** | Enhver entitet | En entitet, der skal styres |
| `name` | string | Valgfri | Enhver tekst | Et navn til dit vælg-kort, hvis det ikke er angivet, vises entitetsnavnet |
| `icon` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til dit vælg-kort, hvis det ikke er angivet, vises entitetens ikon eller `entity-picture` |
| `force_icon` | boolean | Valgfri | `true` eller `false` (standard) | Prioriter ikonet frem for `entity-picture` |
| `show_state` | boolean | Valgfri | `true` eller `false` (standard) | Vis eller skjul tilstanden for din `entity` |
| `show_name` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfri | `true` eller `false` (standard) | Vis, hvornår din `entity` senest blev ændret |
| `show_last_updated` | boolean | Valgfri | `true` eller `false` (standard) | Vis, hvornår din `entity` senest blev opdateret |
| `show_attribute` | boolean | Valgfri | `true` eller `false` (standard) | Vis en attribut fra din `entity` under dens `name` |
| `attribute` | string | Valgfri (påkrævet hvis `show_attribute` er sat til `true`) | En attribut fra din `entity` | Attributten, der skal vises (f.eks. `brightness`) |
| `scrolling_effect` | boolean | Valgfri | `true` (standard) eller `false` | Tillad teksten at rulle, når indholdet overstiger størrelsen på dens container |
| `tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved klik på ikonet, hvis den ikke er angivet, bruges `more-info`. |
| `double_tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved dobbeltklik på ikonet, hvis den ikke er angivet, bruges `none`. |
| `hold_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved hold på ikonet, hvis den ikke er angivet, bruges `more-info`. |
| `card_layout` | string | Valgfri | `normal` (standard uden for sektionsvisning), `large` (standard i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets layout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |
| `sub_button` | object | Valgfri | Se [underknapper](#underknapper) | Tilføj tilpassede knapper fast til højre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Primær baggrundsfarve for understøttede elementer i vælg-kortet |
| `--bubble-select-background-color` | `color` | Baggrundsfarve for vælg-kortet |
| `--bubble-select-list-border-radius` | `px` | Kantradius for rullemenuen i kortet |
| `--bubble-select-list-item-accent-color` | `color` | Accentfarve for det valgte element |
| `--bubble-select-list-background-color` | `color` | Baggrundsfarve for rullemenuen i kortet |
| `--bubble-select-list-width` | `px` | Bredde af rullemenuen i kortet |
| `--bubble-select-arrow-background-color` | `color` | Baggrundsfarve for rullemenuens pil |
| `--bubble-select-button-border-radius` | `px` | Kantradius for vælg-knappen |
| `--bubble-select-border-radius` | `px` | Kantradius for vælg-kortet |
| `--bubble-select-icon-border-radius` | `px` | Kantradius for vælg-kortets ikoncontainer |
| `--bubble-select-icon-background-color` | `color` | Baggrundsfarve for vælg-kortets ikoncontainer |
| `--bubble-select-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skygge for vælg-kortet |

</details>


#### Eksempler

<details>

<summary>Et vælg-kort med en liste af scener</summary>

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

Dette kort lader dig styre dine `climate`-entiteter.

> [!TIP]
> Menuen til valg af tilstand er en [underknap](#underknapper), der tilføjes automatisk, når kortet oprettes. Du kan derefter ændre eller fjerne den efter ønske.

### Klima-indstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn                     | Type    | Krav                         | Understøttede værdier                                  | Beskrivelse                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Påkrævet**                        | Klima-entitet                                   | Entiteten, der skal styres (f.eks. `climate.living_room`).                                                            |
| `name`                  | string  | Valgfri                            | Enhver tekst                                       | Et brugerdefineret navn til kortet. Hvis det ikke er angivet, vises entitetsnavnet.                                    |
| `icon`                  | string  | Valgfri                            | Ethvert `mdi:`-ikon                                  | Et brugerdefineret ikon til kortet. Hvis det ikke er angivet, bruges entitetens ikon eller `entity-picture`.                   |
| `force_icon`            | boolean | Valgfri                            | `true` eller `false` (standard)                     | Prioriterer ikonet frem for `entity-picture`.                                                           |
| `show_state`            | boolean | Valgfri                            | `true` eller `false` (standard)                     | Vis eller skjul den aktuelle tilstand for `entity`.                                                                 |
| `show_name`             | boolean | Valgfri                            | `true` (standard) eller `false`                     | Vis eller skjul entitetens navn.                                                                            |
| `show_icon`             | boolean | Valgfri                            | `true` (standard) eller `false`                     | Vis eller skjul ikonet.                                                                                          |
| `hide_target_temp_low`  | boolean | Valgfri (kun for entiteter der understøtter `target_temp_low`) | `true` eller `false` (standard) | Skjuler kontrollen for lav måltemperatur, hvis det understøttes af `entity`.                                          |
| `hide_target_temp_high` | boolean | Valgfri (kun for entiteter der understøtter `target_temp_high`)| `true` eller `false` (standard) | Skjuler kontrollen for høj måltemperatur, hvis det understøttes af `entity`.                                         |
| `state_color`           | boolean | Valgfri                            | `true` eller `false` (standard)                     | Anvender en konstant baggrundsfarve, når klima-entiteten er tændt.                                              |
| `step` | number | Valgfri | Ethvert tal | Temperaturtrinnet. |
| `min_temp` | number | Valgfri | Ethvert tal | Minimumstemperaturen. |
| `max_temp` | number | Valgfri | Ethvert tal | Maksimumstemperaturen. |
| `button_action` | object | Valgfri | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Gør det muligt at ændre standardhandlingerne ved klik på knappen. |
| `tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved klik på ikonet, hvis den ikke er angivet, bruges `more-info`. |
| `double_tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved dobbeltklik på ikonet, hvis den ikke er angivet, bruges `none`. |
| `hold_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved hold på ikonet, hvis den ikke er angivet, bruges `more-info`. |                              |
| `main_buttons_position` | string | Valgfri | `default` eller `bottom` | Flyt klima-handlingsknapperne til bunden (fast) |
| `main_buttons_full_width` | boolean | Valgfri | `true` eller `false` | Lad de nederste handlingsknapper fylde hele bredden (standard: `true` når placeringen er `bottom`) |
| `main_buttons_alignment` | string | Valgfri | `end` (standard), `center`, `start`, `space-between` | Justering af de nederste handlingsknapper, når de ikke fylder hele bredden |
| `card_layout` | string | Valgfri | `normal` (standard uden for sektionsvisning), `large` (standard i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets layout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |
| `sub_button`            | object  | Valgfri                            | Se [underknapper](#underknapper)                | Tilføjer brugerdefinerede knapper fast til højre. Nyttigt til en menu til valg af klimatilstand.                                  |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Primær baggrundsfarve for understøttede elementer i klima-kortet |
| `--bubble-climate-border-radius` | `px` | Kantradius for understøttede elementer i klima-kortet |
| `--bubble-climate-button-background-color` | `color` | Baggrundsfarve for knapperne i klima-kortet |
| `--bubble-climate-icon-border-radius` | `px` | Kantradius for klima-kortets ikoncontainer |
| `--bubble-state-climate-fan-only-color` | `color` | Overlejringsfarve for kun-ventilator-tilstanden |
| `--bubble-state-climate-dry-color` | `color` | Overlejringsfarve for tørretilstanden |
| `--bubble-state-climate-cool-color` | `color` | Overlejringsfarve for køletilstanden |
| `--bubble-state-climate-heat-color` | `color` | Overlejringsfarve for varmetilstanden |
| `--bubble-state-climate-auto-color` | `color` | Overlejringsfarve for autotilstanden |
| `--bubble-state-climate-heat-cool-color` | `color` | Overlejringsfarve for varme/køle-tilstanden |
| `--bubble-climate-accent-color` | `color` | Accentfarve for klima-kortet |
| `--bubble-climate-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skygge for klima-containeren. |

</details>


#### Eksempler

<details>

<summary>Et klima-kort med en rullemenu til HVAC-tilstande</summary>

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

Dette kort lader dig vise dine kalender-entiteter. Indholdet kan rulles, så du nemt kan gennemse kommende begivenheder.

### Kalenderindstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn                | Type    | Krav  | Understøttede værdier                               | Beskrivelse                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Valgfri     | Ethvert tal (minimum: 1)                        | Antal kalenderdage, der skal hentes begivenheder for, fra nu og til slutningen af den n'te dag (standard: 7) |
| `entities`          | object  | **Påkrævet** | Et kalenderentitetsobjekt (se nedenfor)            | Entiteten, der skal styres (f.eks. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Påkrævet** | En kalender-entitet                               | Kalender-entiteten, der skal vises                                                          |
| `entities.color`    | string  | Valgfri     | En farve                                         | En brugerdefineret farve til kalendermærkatet. Hvis ikke angivet, vælges en automatisk farve |
| `days`              | number  | Valgfri     | Ethvert tal (minimum: 1)                         | Antal kalenderdage, der skal hentes begivenheder for, fra nu og til slutningen af den n'te dag (standard: 7) |
| `limit`             | number  | Valgfri     | Et tal                                        | Antallet af begivenheder, der vises på kortet                                  |
| `show_end`          | boolean | Valgfri     | `true` eller `false` (standard)                     | Vis eller skjul sluttidspunktet for begivenheder                                                    |
| `show_progress`     | boolean | Valgfri     | `true` (standard) eller `false`                     | Vis eller skjul begivenhedens fremskridtslinje                                                     |
| `show_started_events`| boolean | Valgfri     | `true` (standard) eller `false`                     | Vis eller skjul begivenheder, der er i gang. Begivenheder over flere dage vurderes en dag ad gangen, så kun den igangværende dag skjules, og de kommende dage forbliver synlige |
| `scrolling_effect`  | boolean | Valgfri | `true` (standard) eller `false` | Tillad teksten at rulle, når indholdet overstiger størrelsen på dens container |
| `event_action` | object | Valgfri | `tap_action`, `double_tap_action` eller `hold_action`, se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Gør det muligt at tilføje handlinger ved klik på en begivenhed. |
| `tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved klik på en dag, hvis den ikke er angivet, bruges `none`. |
| `double_tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved dobbeltklik på en dag, hvis den ikke er angivet, bruges `none`. |
| `hold_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingstypen ved hold på en dag, hvis den ikke er angivet, bruges `none`. |
| `card_layout` | string | Valgfri | `normal` (standard uden for sektionsvisning), `large` (standard i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets layout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |
| `sub_button` | object | Valgfri | Se [underknapper](#underknapper) | Tilføj tilpassede knapper fast til højre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel                                  | Forventet værdi | Beskrivelse                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Primær baggrundsfarve for understøttede elementer i kalenderkortet  |
| `--bubble-calendar-border-radius`         | `px`           | Kantradius for understøttede elementer i kalenderkortet |
| `--bubble-calendar-height`                | `px`           | Højde for kalenderkortet                                        |

</details>

#### Eksempler

<details>

<summary>Et kalenderkort med et begrænset antal begivenheder</summary>

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

<summary>Et kalenderkort med et sluttidspunkt og en fremskridtslinje</summary>

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


## Separator

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Dette kort er en simpel separator til at opdele din pop-up i kategorier / sektioner, f.eks. Lys, Enheder, Gardiner, Indstillinger, Automatiseringer...

### Separatorindstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede værdier | Beskrivelse |
| --- | --- | --- | --- | --- |
| `name` | string | Valgfri men anbefalet | Enhver tekst | Et navn til din separator |
| `icon` | string | Valgfri men anbefalet | Ethvert `mdi:`-ikon | Et ikon til din separator |
| `card_layout` | string | Valgfri | `normal` (standard uden for sektionsvisning), `large` (standard i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets layout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |
| `sub_button` | object | Valgfri | Se [underknapper](#underknapper) | Tilføj tilpassede knapper fastgjort til højre |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Baggrundsfarve for linjen i separatoren |

</details>

#### Eksempel

<details>

<summary>En separator/skillelinje til en "Gardiner"-sektion</summary>

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

Dette kort er til for at udfylde en tom kolonne. Det er nyttigt, hvis du har en `horizontal-stack` i din pop-up med kun ét kort. Kig i nederste højre hjørne af dette skærmbillede for (ikke) at se det.

### Indstillinger for tom kolonne

Dette kort har ingen indstillinger og understøtter ikke [styling](#styling), men det understøtter layoutindstillinger for HA-sektioner.

#### Eksempel

<details>

<summary>En tom kolonne i en vandret stak</summary>

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

## Kun underknapper

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Dette kort er dedikeret udelukkende til underknapper. Det er perfekt til menuer, hurtige handlinger, informationschips eller en fast footer nederst på siden.

> [!IMPORTANT]  
> Dette kort bruger det nye skema for underknapper. Brug `sub_button.bottom` til at definere dine knapper. Sektionen `sub_button.main` ignoreres.

### Indstillinger for kun underknapper

<details>

<summary><b>Indstillinger (YAML + beskrivelser)</b></summary>

| Navn | Type | Krav | Understøttede muligheder | Beskrivelse |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Påkrævet** | Se [underknapper](#underknapper) | Definer dine underknapper med sektionen `bottom` |
| `hide_main_background` | boolean | Valgfri | `true` eller `false` (standard) | Fjern kortets baggrund |
| `footer_mode` | boolean | Valgfri | `true` eller `false` (standard) | Fastgør kortet i bunden af siden |
| `footer_full_width` | boolean | Valgfri | `true` eller `false` (standard) | Gør footeren fuld bredde (100 %) |
| `footer_width` | number | Valgfri | Ethvert tal | Footerbredde i pixels, når `footer_full_width` er `false` |
| `footer_bottom_offset` | number | Valgfri | Ethvert tal | Afstand fra bunden af siden i pixels (standard: `16`) |
| `card_layout` | string | Valgfri | `normal` (standard uden for sektionsvisning), `large` (standard i sektionsvisning), `large-2-rows`, `large-sub-buttons-grid` | Kortets stylinglayout, se [kortlayouts](#kortlayouts) |
| `rows` | number | Valgfri | Ethvert tal | Antal rækker (højde) (f.eks. `2`) |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Footerbredde, når `footer_full_width` er `false` |
| `--bubble-footer-bottom` | `px` | Footerens afstand fra bunden |
| `--bubble-footer-box-shadow` | se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skyggeeffekt for footercontaineren |

</details>

#### Eksempler

<details>

<summary>Chips (som på skærmbilledet)</summary>

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

<summary>En fast footermenu</summary>

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

I ethvert kort, der understøtter denne mulighed, kan du tilføje underknapper for at tilpasse dine kort endnu mere. Du kan for eksempel oprette en knap, der kan styre en støvsugerrobot, et vejrkort eller næsten hvad som helst, du kan finde på. Disse underknapper understøtter tryk-handlingerne og de fleste af knapindstillingerne.

Underknapper understøtter nu tre typer: **Standard (knap)**, **Skyder** og **Rullemenu / Vælg**. Du kan blande typer i det samme kort, placere underknapper øverst eller nederst og organisere dem i grupper for mere avancerede layouts.

#### Placering og grupper af underknapper

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

**Bemærk:**
- `main` og `bottom` er to uafhængige sektioner. Underknapper i bunden er fastgjort til bunden af kortet.
- `main_layout` og `bottom_layout` accepterer `inline` (standard) eller `rows` for at stable grupper lodret.
- Grupper er objekter med et `group`-array og en valgfri `buttons_layout` (`inline` eller `column`).
- `justify_content` er kun tilgængelig for **bundgrupper** (`start`, `center`, `end`, `fill`).
- Når der er underknapper i bunden, skifter kortlayoutet automatisk til `large`, medmindre du eksplicit angiver et andet layout.
- Ældre `sub_button`-arrays understøttes stadig og behandles som `main`-sektionen.

</details>

### Indstillinger for underknapper

<details>

<summary><b>Indstillinger (YAML + beskrivelse)</b></summary>

| Navn | Type | Krav | Understøttede muligheder | Beskrivelse |
| --- | --- | --- | --- | --- |
| `entity` | string | Valgfri | Enhver entitet | En entitet, der skal styres |
| `name` | string | Valgfri | Enhver streng | Et navn til din underknap, hvis det ikke er angivet, vises entitetsnavnet |
| `icon` | string | Valgfri | Ethvert `mdi:`-ikon | Et ikon til din underknap, hvis det ikke er angivet, vises entitetens ikon eller entitetsbillede |
| `force_icon` | boolean | Valgfri | `true` eller `false` (standard) | Tving ikonet frem, selv hvis et entitetsbillede er tilgængeligt |
| `sub_button_type` | string | Valgfri | `default`, `slider` eller `select` | Vælg underknappens type |
| `show_background` | boolean | Valgfri | `true` (standard) eller `false` | Vis en baggrund til din underknap, den skifter farve baseret på din entitets tilstand |
| `state_background` | boolean | Valgfri | `true` (standard) eller `false` | Brug tilstandsfarven, når entiteten er `on` |
| `light_background` | boolean | Valgfri | `true` (standard) eller `false` | Brug lysets farve til baggrunden, når det er muligt |
| `show_state` | boolean | Valgfri | `true` eller `false` (standard) | Vis eller skjul tilstanden for din `entity` |
| `show_name` | boolean | Valgfri | `true` eller `false` (standard) | Vis eller skjul navnet |
| `show_icon` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul ikonet |
| `show_last_changed` | boolean | Valgfri | `true` eller `false` (standard) | Vis tidspunktet for seneste ændring for din `entity` |
| `show_last_updated` | boolean | Valgfri | `true` eller `false` (standard) | Vis tidspunktet for seneste opdatering for din `entity` |
| `show_attribute` | boolean | Valgfri | `true` eller `false` (standard) | Vis en attribut for din `entity` under dens `name` |
| `attribute` | string | Valgfri (påkrævet hvis `show_attribute` er sat til `true`) | En attribut fra din `entity` | Attributten, der skal vises (f.eks. `brightness`) |
| `select_attribute` | string | Valgfri | En attributliste fra din `entity` (se understøttede muligheder ovenfor) | Denne attributliste åbner en rullemenu, hvis der klikkes (f.eks. `effect_list`) |
| `show_arrow` | boolean | Valgfri | `true` (standard) eller `false` | Vis eller skjul rullemenu-pilen for select-underknapper |
| `scrolling_effect` | boolean | Valgfri | `true` (standard) eller `false` | Tillad tekst at rulle, når indholdet overstiger containerens størrelse |
| `tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingen ved klik på underknappen, hvis ikke angivet bruges `more-info` |
| `double_tap_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingen ved dobbeltklik på underknappen, hvis ikke angivet bruges `none` |
| `hold_action` | object | Valgfri | Se [handlinger](#tryk--dobbelttryk--og-holdehandlinger) | Definer handlingen ved hold på underknappen, hvis ikke angivet bruges `more-info` |
| `fill_width` | boolean | Valgfri | `true` eller `false` | Udfyld den tilgængelige bredde (standard: `false` for main, `true` for bottom) |
| `width` | number eller string | Valgfri | Ethvert tal eller CSS-længde | Brugerdefineret bredde (`px` for main-sektionen, `%` for bottom-sektionen som standard) |
| `custom_height` | number | Valgfri | Ethvert tal | Brugerdefineret højde i pixels |
| `content_layout` | string | Valgfri | `icon-left` (standard), `icon-top`, `icon-bottom`, `icon-right` | Ikonets placering inde i underknappen |
| `always_visible` | boolean | Valgfri | `true` eller `false` (standard) | **Kun skyder.** Vis altid skyderen i stedet for at åbne den ved tryk |
| `show_button_info` | boolean | Valgfri | `true` eller `false` (standard) | **Kun skyder.** Vis ikon/navn/tilstand, når `always_visible` er aktiveret |
| `visibility` | object eller list | Valgfri | Se [betingelser](#betingelser) | Vis eller skjul underknappen baseret på betingelser |
| `hide_when_parent_unavailable` | boolean | Valgfri | `true` eller `false` (standard) | Skjul underknappen, hvis det overordnede korts entitet er utilgængelig |
| `css_class` | string | Valgfri | Enhver streng | En ekstra CSS-klasse på underknappen, så du kan målrette den i din [styling](#styling) uanset dens navn (f.eks. giver `My value` `.my-value`) |

</details>

<details>

<summary><b>Indstillinger for skyder-underknapper (samme som knapskydere)</b></summary>

<br>

Skyder-underknapper understøtter de samme skyderindstillinger som knapskydere, herunder:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Styling</a>)</b></summary>

| Variabel | Forventet værdi | Beskrivelse |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Kantradius for underknapperne |
| `--bubble-sub-button-background-color` | `color` | Baggrundsfarve for underknapperne |
| `--bubble-sub-button-outline` | `box-shadow` | Kontur tilføjet til en underknap eller en skyder, kun når elementet tegnes i samme farve som kortet bagved, hvilket ville gøre det usynligt (sæt den til `none` for at fjerne den) |
| `--bubble-sub-slider-border-radius` | `px` | Kantradius for skyder-underknapper |
| `--bubble-sub-slider-background-color` | `color` | Baggrundsfarve for skyder-underknapper |
| `--bubble-sub-slider-height` | `px` | Højde for altid synlige skyder-underknapper |
| `--bubble-sub-slider-outline` | `box-shadow` | Kontur kun for skyder-underknapperne, falder tilbage til `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Tekstfarve på lyse underknap-baggrunde |

</details>

#### Eksempler

<details>

<summary>En knap med nogle underknapper til at lave et støvsugerkort (som på skærmbilledet)</summary>

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

<summary>En knapskyder med en underknap, der viser lysstyrken, og en, der tænder/slukker lyset (som på skærmbilledet)</summary>

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

<summary>En knap, der viser den indendørs og udendørs temperatur samt vejret for i dag og i morgen (skærmbillede vedlagt)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Uheldigt for mig er det skyet hele tiden, men alle ikonerne ændrer sig baseret på vejret.

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

## Kortlayouts

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card understøtter fuldt ud Home Assistants sektionsvisning, du kan ændre kortlayoutet for at gøre kortet større og også ændre antallet af kolonner eller rækker, som kortet skal fylde i din sektionsvisning (kun på de kort, der understøtter denne indstilling). Disse layouts understøttes også i alle andre visningstyper.

<details>

<summary><b>Tilgængelige kortlayouts</b></summary>

| Layout | Beskrivelse |
| --- | --- |
| `normal` | Det almindelige layout (ikke optimeret til sektionsvisningen) |
| `large` | Et større layout, der tilpasser sig de valgte rækker i sektionsvisningen (optimeret til sektionsvisningen) |
| `large-2-rows` | Et større layout med 2 rækker underknapper, der tilpasser sig de valgte rækker i sektionsvisningen (optimeret til sektionsvisningen) |
| `large-sub-buttons-grid` | Dette layout viser underknapperne i et gitter, `rows` skal være sat til mindst `2`.

</details>

#### Eksempler

<details>

<summary>En stor knap, der viser energistatistik med 2 rækker underknapper (skærmbillede inkluderet)</summary>

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

<summary>En stor knap med flere rækker med 12 underknapper</summary>

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

## Betingelser

Nogle indstillinger styres af betingelser, skrevet præcis som dem i Home Assistants [betingede kort](https://www.home-assistant.io/dashboards/conditional/):

- `visibility` på en [underknap](#underknapper), for at vise eller skjule den
- `trigger` på en [pop-up](#pop-up), for at åbne den når betingelserne er opfyldt
- `checkConditionsMet(conditions, hass)` inde i dine [skabeloner](#skabeloner), når du har brug for svaret i din egen kode

Alle Home Assistants betingelsestyper evalueres: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template` samt grupperne `and`, `or` og `not`. Betingelserne fra Home Assistants betingelsesbygger virker også, dem der er opkaldt efter deres domæne som `sun.is_up`, `light.is_on`, `zone.in_zone` eller `temperature.is_value`, med deres indstillinger `target`, `options`, `behavior` og `for`.

<details>

<summary><b>Eksempel</b></summary>

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
> Betingelser evalueres i din browser, så de få af dem, der har brug for Home Assistant-serveren, kan ikke være præcise: solopgang og solnedgang læses fra entiteten `sun.sun` i stedet for at blive genberegnet, og en `for`-varighed måles fra den seneste tilstandsændring, uden historikken fra recorder.
>
> `view_columns` accepteres, men er altid opfyldt, da Bubble Card aldrig er den, der placerer kolonnerne i din visning. En betingelsestype, som Bubble Card ikke kender, melder sig selv en enkelt gang i din browserkonsol i stedet for at fejle i stilhed, så du kan skelne en tastefejl fra en manglende funktion.

<br>

---

<br>

## Tryk-, dobbelttryk- og holdehandlinger

Du kan også bruge Home Assistants standard trykhandlinger, dobbelttrykhandlinger og holdehandlinger på de kort, der understøtter denne indstilling. Det giver dig for eksempel mulighed for at vise vinduet "mere info" ved at holde en knapikon nede eller køre en tjeneste, når der trykkes på en underknap.

**Bemærk: Når en `double_tap_action` er konfigureret, vil den almindelige `tap_action` få en forsinkelse på 200 ms for at gøre det muligt at
registrere et dobbelttryk. Hvis denne forsinkelse er uønsket, skal du sætte `double_tap_action` til `none` for at deaktivere håndtering af dobbelttryk.**

### Handlingsindstillinger

<details>

<summary><b>Indstillinger (YAML + beskrivelse)</b></summary>

| Navn | Type | Understøttede indstillinger | Beskrivelse |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Handling der skal udføres |
| `target` | object |  | Fungerer kun med `call-service`. Følger [home-assistant-syntaksen](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Enhver sti på dit dashboard | Sti der skal navigeres til (f.eks. `'#kitchen'` for at åbne en pop-up), når handlingen er defineret som navigate |
| `url_path` | string | Ethvert link | URL der skal åbnes ved klik (f.eks. `https://www.google.com`), når handlingen er `url` |
| `service` | string | Enhver tjeneste | Tjeneste der skal kaldes (f.eks. `media_player.media_play_pause`), når `action` er defineret som `call-service` |
| `data` eller `service_data` | object | Enhver tjenestedata | Tjenestedata der skal inkluderes (f.eks. `entity_id: media_player.kitchen`), når `action` er defineret som `call-service` |
| `confirmation` | object | Se [bekræftelse](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Vis en bekræftelses-pop-up (ikke en fra Bubble Card), tilsidesætter standardobjektet `confirmation` |

</details>

#### Eksempel

<details>

<summary>En knap til at åbne en pop-up</summary>

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

Du kan tilføje brugerdefinerede stilarter for at ændre CSS'en på alle kort **uden at bruge card-mod** på fire måder:

- I editoren, gå til det kort, du vil ændre, og gå derefter til _Stilindstillinger > Brugerdefinerede stilarter og JS-skabeloner_, og tilføj dine brugerdefinerede stilarter (se tips og eksempler nedenfor).
- I editoren (eller i [YAML](#modules)), gå til det kort, du vil ændre, og gå derefter til _Moduler_, opret så et nyt modul (det bliver tilgængeligt for alle kort), eller gå til **Module Store** for at installere et vilkårligt tilgængeligt modul (flere detaljer om moduler kan findes [nedenfor](#modules)).
- I en [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes)-fil ved at tilføje CSS-variabler i YAML (disse er tilgængelige i hvert korts dokumentation ovenfor). Dette giver mulighed for globale ændringer.

  <details>
  
  <summary>Eksempel</a></summary>
  
  <br>

  Kopier ikke `Bubble:`-linjen, det er navnet på det tema, du bruger. Du skal også fjerne `--` fra variablerne.

  Du skal køre handlingen [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) for at genindlæse temaet efter eventuelle ændringer.

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
  
- I YAML ved at tilføje `styles: |` efterfulgt af dine brugerdefinerede stilarter (se tips og eksempler nedenfor).

> [!TIP]  
> **For at forstå hvilke stilklasser der kan ændres**, kan du kigge nærmere på mappen [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) i dette repository. I hver kortmappe finder du en fil ved navn `styles.css`. Disse filer indeholder alle de anvendte stilarter. Dette giver langt flere muligheder end CSS-variabler, men det skal tilføjes individuelt til hvert kort.
> 
> Du kan også finde masser af [eksempler fra fællesskabet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), eller nogle fra [Home Assistant-forummet](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) ved lidt søgning.
>
> Bubble-temaet til Home Assistant (som på skærmbillederne) kan findes [her](https://github.com/Clooos/Bubble).
>
> En vejledningsvideo er på vej på min [YouTube-kanal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Bemærk at du muligvis skal tilføje `!important;` til nogle CSS-stilarter, der allerede er defineret (se eksemplerne nedenfor).

> [!TIP]  
> Underknapper kan målrettes med navnebaserede klasser. En underknap ved navn "My sub-button" kan for eksempel stilsættes med `.my-sub-button`. Skyder-underknapper eksponerer også `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` osv.
>
> En navnebaseret klasse ændrer sig, når du omdøber en underknap, og den oversættes, når navnet gør. Sæt `css_class` på underknappen for at få din egen klasse, der aldrig flytter sig, uanset dens navn og uanset sproget.

#### Eksempler

<details>

<summary>Ændring af skriftstørrelsen på et vilkårligt Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Ændring af baggrundsfarven på en enkelt knap i en vandret knaprække</summary>

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

<summary>Ændring af baggrundsfarven på et kort</summary>

<br>

Denne virker på alle typer af Bubble Card (undtagen pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Denne gør det samme, men kun i et knapkort (den virker også i pop-up-headeren): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

For at ændre farven, når den er `on`, se stilskabelonerne nedenfor.

</details>

<details>

<summary>Ændring af farven på en knapskyder</summary>

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

<summary>Ændring af linjefarven på en separator</summary>

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

<summary>Ændring af farven på et ikon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

For et ikon i en vandret knaprække.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Ændring af baggrundsfarven på en ikonbeholder</summary>

<br>

Denne virker på alle typer af Bubble Card (undtagen pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Denne gør det samme for pop-up-headeren: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Ændring af størrelsen på underknapperne (perfekt til det store layout)</summary>

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

<summary>Ændring af baggrundsfarven på den anden underknap</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ændring af størrelsen på et ikon</summary>

<br>

For hovedikonet.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

For underknap-ikonerne.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Brug af et billede i stedet for et ikon i en underknap</summary>

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

Upload blot dette billede i en mappe "pictures" (eller det navn du ønsker) i Home Assistants "www"-mappe.

</details>

<details>

<summary>Avanceret eksempel: oprettelse af en vandret række med underknapper (skærmbillede inkluderet)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Jeg elsker virkelig denne, jeg bruger den som header på mit dashboard.

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

## Skabeloner

**Bubble Card understøtter ikke Jinja-skabeloner**, men avancerede brugere kan tilføje skabeloner i JS direkte i deres [brugerdefinerede stilarter](#styling). Dette gør det for eksempel muligt dynamisk at ændre et ikon, teksterne eller farverne på et element, at vise eller skjule et element betinget (som en underknap), eller næsten hvad som helst baseret på en tilstand, en attribut med mere.

> [!TIP]  
> Mere information om JS-skabeloner [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mit råd er, at du **altid holder øje med din browserkonsol** for at sikre, at alt fungerer korrekt.

> [!IMPORTANT]  
> **Alle skabeloner, der ikke ændrer en CSS-egenskab, skal placeres til sidst! Som at ændre et ikon, en tekst eller ethvert andet element.**

#### Tilgængelige variabler og funktioner

<details>

<summary>Variabler</summary>

<br>

Du har adgang til disse variabler i de fleste kort:

- `state` returnerer tilstanden for din angivne `entity`.
  
- `entity` returnerer den entitet, du har angivet, som `switch.test` i dette eksempel.
  
- `icon` kan bruges således til at ændre ikonet `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` returnerer tilstanden for den `entity`, der er angivet på din første underknap, `[0]` er den første underknaps tilstand, `[1]` den anden...
  
- `subButtonIcon[0]` kan bruges således til at ændre ikonet på den første underknap `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` er den første underknaps ikon, `[1]` det andet...
  
- `card` returnerer kortelementet i DOM'en.
  
- `hass` er en avanceret variabel, der giver dig endnu mere kontrol, du kan for eksempel returnere tilstanden for `light.kitchen` således `hass.states['light.kitchen'].state` eller en attribut således `hass.states[entity].attributes.brightness`.

- `this` returnerer en masse nyttige oplysninger om din opsætning og dit dashboard, brug kun denne, hvis du ved, hvad du gør.

</details>

<details>

<summary>Funktioner</summary>

<br>

Du har adgang til alle de globale JS-funktioner, men du har også adgang til:

- `getWeatherIcon` kan bruges til at returnere et vejrikon baseret på en tilstand, der angiver vejret. Du kan for eksempel gøre således `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` for at ændre den tredje underknaps ikon til dagens vejrikon, `.forecast[1]?.condition` er for i morgen...

  Du skal oprette en skabelonsensor til dette. Her er, hvad du kan tilføje i din `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` returnerer `true`, når en liste af [betingelser](#betingelser) er opfyldt, for eksempel `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` kan bruges til at oversætte en tilstand (kan også bruges til at hente en tilstandsenhed uden at skulle tilføje den manuelt).
- `hass.formatEntityAttributeValue(state, "attribute")` kan bruges til at oversætte en attribut (kan også bruges til at hente en tilstandsenhed uden at skulle tilføje den manuelt).

</details>

#### Eksempler

Du kan finde mange eksempler nedenfor, men du kan også finde meget avancerede skabeloner på min [Patreon-side](https://www.patreon.com/c/Clooos), som for eksempel en (min favorit), der giver op til fire betingede badges placeret rundt om kortets ikoner. Det er også en god måde at lære om alle mulighederne med Bubble Cards brugerdefinerede stilarter og skabeloner!

<details>
<summary>Eksempler fra min Patreon-side</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Tilføjelse af Home Assistant-lignende badges til ethvert kort</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Visning af formateret dato og klokkeslæt i en separator uden brug af nogen entitet</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Visning af en underknaps tilstand på to linjer</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Tilpasning af etiketter og ikoner inde i en vælg-underknap</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Tilføjelse af en vedvarende påmindelses-pop-up, der kun vises, når det er nødvendigt</a>
</p>

<br>

</details>

<details>

<summary>Ændring af baggrundsfarven på en knap, der er rød, når den er <code>off</code>, og blå, når den er <code>on</code></summary>

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

<summary>Ændring af baggrundsfarven på en knap baseret på en entitet for den vandrette knaprække</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Visning/skjulning af en underknap betinget</summary>

<br>

Dette eksempel viser den første underknap kun, når min støvsuger sidder fast.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Dette eksempel viser en underknap, når batteriet er under 10 %. Nyttigt sammen med en underknap, der viser "Lavt batteriniveau".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ændring af et ikon eller et underknapikon betinget</summary>

<br>

Dette eksempel ændrer et knapikon kun, når en støvsuger sidder fast.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Dette eksempel ændrer den første underknaps ikon kun, når en støvsuger sidder fast.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Ændring af et ikons eller underknapikons farve betinget</summary>

<br>

Dette eksempel ændrer et knapikons farve baseret på dets tilstand.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Dette eksempel ændrer en underknaps ikonfarve baseret på dens tilstand. `.bubble-sub-button-1` er den første underknap, erstat `1`, hvis du vil ændre en anden underknaps ikon.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animering af et ventilatorikon betinget</summary>

<br>

Dette eksempel roterer et knapikon, når en ventilator er `on`.
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

<summary>Skabelontekster (som navn eller tilstand)</summary>

<br>

Dette eksempel ændrer en knaps navn/tilstand til "Det er i øjeblikket solrigt" afhængigt af dit vejr.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
eller anvendt på underknapper:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Hvis du vil lave en skabelon for tilstanden (`.bubble-state`), skal du ikke aktivere `show_state: true`, men blot aktivere `show_attribute: true` uden nogen attribut.

</details>

<details>

<summary>Avanceret eksempel: Ændring af en underknaps farve, når en pop-up er åben</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Avanceret eksempel: Skabelon af et separatornavn baseret på en tilstand oversat til dit sprog</summary>

<br>

Du kan bruge `hass.formatEntityState(state)` til at oversætte en tilstand og `hass.formatEntityAttributeValue(state, "attribute")` til at oversætte en attribut.

Dette eksempel ændrer navnet og ikonet baseret på vejret, "Nuageux" betyder "Overskyet" på fransk.

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

Moduler er en kraftfuld funktion, der gør det muligt at gemme, genbruge og dele dine brugerdefinerede stilarter og skabeloner på tværs af alle dine Bubble Cards. I stedet for at kopiere og indsætte den samme kode i flere kort kan du oprette et modul og anvende det, hvor du har brug for det. Dette gør det meget nemmere og mere effektivt at administrere dit dashboards udseende.

Men denne funktion er meget mere kraftfuld end det, den lader dig selv tilføje egentlige funktioner i Bubble Cards editor ved hjælp af alle de indbyggede [Home Assistant-formular](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)-indstillinger!  
Objektvælgeren er blevet forbedret, så den viser ændringer live og understøtter attributter korrekt.

Et modul kan også svare Home Assistants kortvælger ved siden af de indbyggede [entitetsforslag](#entitetsforslag): brug `suggestions` til de kort, det kan beskrive på forhånd, og `suggestions_code`, når de skal beregnes ud fra din opsætning, for eksempel en pop-up bygget af alle entiteter i det område, som den valgte entitet hører til. Begge nøgler er dokumenteret [her](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Du kan også gennemse **Module Store** for at finde og installere [moduler skabt af fællesskabet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), eller dele dine egne kreationer!

> [!TIP]
> Et moduls kode fungerer på nøjagtig samme måde som koden i et korts `styles`-sektion. Alle de samme variabler og funktioner fra afsnittet [Skabeloner](#skabeloner) er tilgængelige.

<br>

### Indledende opsætning

> [!IMPORTANT]
> Fra og med v3.1.0 er Bubble Card Tools det anbefalede lagringssystem til moduler. Den ældre metode med skabelonsensor virker stadig til eksisterende opsætninger, men nye moduler og Module Store-funktioner understøttes bedst via Bubble Card Tools.

Integrationen Bubble Card Tools aktiverer moduleditoren og Module Store og gemmer moduler som individuelle YAML-filer. Eksisterende moduler migreres automatisk.

Installations- og konfigurationstrinnene er forklaret her:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Moduleditoren

Du kan tilgå moduleditoren fra ethvert korts indstillinger, under sektionen **Moduler**. Editoren indeholder to hovedfaner:

#### Fanen Mine moduler

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Denne fane viser alle dine installerede moduler og giver dig mulighed for at:

- **Anvende** eksisterende moduler på det aktuelle kort
- **Oprette** et nyt modul fra bunden
- **Redigere** eksisterende moduler med live forhåndsvisning
- **Slette** moduler, du ikke længere har brug for
- **Søge** og **sortere** moduler (alfabetisk, seneste, aktive først)
- **Angive global status** for at få et modul til automatisk at blive anvendt på alle kort
- **Importere/Eksportere** moduler til sikkerhedskopiering eller deling
- **Skrive entitetsforslag** i moduleditoren, under **Valgfrit: Entitetsforslag**, så dit modul bliver tilbudt i Home Assistants kortvælger. Både regler og beregnede forslag kontrolleres, mens du skriver, en fejl der forhindrer at gemme, og forhåndsvisningen viser de foreslåede kort for enhver entitet, du vælger

#### Fanen Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Denne fane viser [alle tilgængelige moduler fra fællesskabet](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) og giver dig mulighed for at:

- **Gennemse** alle fællesskabsskabte moduler
- **Søge** og filtrere moduler efter navn, kompatibilitet eller nøgleord
- **Installere** moduler med ét klik
- **Opdatere** installerede moduler, når nye versioner er tilgængelige

> [!TIP]
> I editoren kan du aktivere ikke-understøttede moduler for at teste moduler, der endnu ikke er markeret som kompatible med en given korttype.

<br>

### Sådan bruger du moduler

#### Oprettelse af et nyt modul

<details>

<summary>Klik for at udvide</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gå til et hvilket som helst korts editor, og udvid sektionen **Moduler**.
2. Klik på **Opret nyt modul**.
3. Udfyld modulinformationen.
4. Skriv din CSS- og/eller JavaScript-skabelonkode i kodeeditoren.
5. (Valgfrit) Opret en brugerdefineret konfigurations-UI i sektionen **Editor** (som farvevælgeren på skærmbilledet ovenfor, fuld dokumentation tilgængelig [her](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Valgfrit) Skriv dine **Entitetsforslag**, så dit modul bliver tilbudt i Home Assistants kortvælger. Panelet kontrollerer det, du skriver, mens du taster, og dets forhåndsvisning viser selve de foreslåede kort for den entitet, du vælger.
7. Klik på **Gem**.

Dit modul er nu tilgængeligt til brug på ethvert af dine kort!

<br>

</details>

#### Anvendelse af et modul på et kort

<details>

<summary>Klik for at udvide</summary>

<br>

- **Via editoren:**

  - Gå til editoren for det kort, du vil anvende modulet på.
  - Udvid sektionen **Moduler**.
  - Klik på det modul, du vil anvende, fra listen.
  - Under "Anvend på" skal du klikke på "Dette kort". Modulet er nu aktivt. Du kan anvende flere moduler på det samme kort.

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

#### Anvendelse af et modul globalt

<details>

<summary>Klik for at udvide</summary>

<br>

Du kan indstille et modul til automatisk at blive anvendt på alle Bubble Cards:

**Dette er ikke muligt for moduler med en editor, da de kræver en specifik konfiguration for at fungere.**

- **Via editoren:**

  - I moduleditoren skal du finde dit modul i fanen **Mine moduler**.
  - Slå knappen **Alle kort** til ved siden af modulnavnet.
  - Modulet vil nu automatisk blive anvendt på alle kort.
 
- **Via YAML:**

  I din modul-YAML-konfiguration (i `bubble-modules.yaml`) skal du blot tilføje `is_global: true`.

<br>

</details>

#### Udelukkelse af et enkelt kort fra et globalt modul

<details>

<summary>Klik for at udvide</summary>

<br>

Hvis du har et globalt modul, men vil udelukke det fra et bestemt kort:

- **Via editoren:**
  
  - I kortets sektion **Moduler** vil du se globale moduler oplistet.
  - Klik på et globalt modul, deaktiver "Dette kort" for at udelukke det fra dette specifikke kort.

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

#### Deling af dit modul til Module Store

<details>

<summary>Klik for at udvide</summary>

<br>

For at dele dit modul til Module Store skal du i moduleditoren, nederst under "Eksporter modul", klikke på "Kopier til GitHub" og indsætte indholdet i en ny diskussion i kategorien [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Rediger beskrivelsen** (om nødvendigt), **eksemplet** (for YAML-brugere), og husk at **inkludere mindst ét skærmbillede** til Module Store.

**Dit modul bliver tilgængeligt lige efter det** (efter en opdatering af Store), så dobbelttjek, at alt er korrekt skrevet, og at modulet fungerer som forventet. Du kan naturligvis redigere/opdatere modulet, efter det er delt.

<br>

</details>

#### Versionsstyring

<details>

<summary>Klik for at udvide</summary>

<br>

Module Store tjekker automatisk for opdateringer til installerede moduler. Når opdateringer er tilgængelige:

1. Du vil se en opdateringsindikator i fanen **Module Store**.
2. Klik på **Opdater** ved moduler med tilgængelige opdateringer.
3. Bekræft opdateringen i Module Store.

<br>

</details>

#### Definering af understøttede korttyper

<details>

<summary>Klik for at udvide</summary>

<br>

Nogle moduler er muligvis ikke kompatible med alle korttyper. Du kan angive, hvilke kort et modul understøtter.  
Hvis du vil have et modul til at være kompatibelt med **alle kort**, skal du blot udelade feltet `supported` (eller bruge indstillingen **Alle kort** i editoren).

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
<summary>Grundlæggende stylingmodul</summary>

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
<summary>Modul med brugerdefineret konfiguration</summary>

<br>

Dette modul er tilgængeligt [her](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Flere eksempler kan findes i Module Store, eller [her](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalisering

Bubble Card taler dit sprog. Editoren er oversat til de 64 sprog, som Home Assistant understøtter, og overalt hvor Home Assistant allerede har et ord for noget, genbruges dens egen formulering, så du læser de samme udtryk i begge grænseflader.

Nederst i editoren, ved siden af versionsnummeret, følger en **Automatisk**-kontakt dit Home Assistant-sprog. Slå den fra, og hele editoren går tilbage til engelsk, hvilket er praktisk, når du følger en vejledning eller melder et problem. Dit valg huskes i din browser.

Denne dokumentation er også oversat, [til 62 sprog](languages.md), alle på nær britisk engelsk, som viser originalen. De sider er åbne for alle, så en formulering, der ikke passer til dit eget Home Assistant, kan rettes med et par klik. Den engelske version er fortsat referencen for selve indholdet.

<br>

---

<br>

## Hjælp

Du er velkommen til at oprette en issue, hvis noget ikke fungerer som forventet. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Har du spørgsmål eller tanker om Bubble Card? Vil du dele dine dashboards eller opdagelser? Du kan gå på Home Assistant-forummet, på Bubble Card-subredditen eller i GitHub Discussions-sektionen.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bidrag

Bidrag er velkomne! Uanset om det er fejlrettelser, nye funktioner, oversættelser eller forbedringer af dokumentationen, er du velkommen til at oprette en pull request.

Før du går i gang, bedes du læse [udviklerguiden](DEVELOPERS.md), som beskriver, hvordan du sætter dit lokale miljø op, bygger projektet og tester dine ændringer.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donér

Jeg bruger det meste af min fritid på at gøre dette projekt så godt som muligt. Så hvis du sætter pris på mit arbejde, vil en donation være en fantastisk måde at vise din støtte på 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Tak til alle for jeres støtte, I er alle min største motivation!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
