<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Den här sidan är en automatisk översättning. Vid tveksamhet gäller den [engelska originaldokumentationen](../README.md). Låter en mening fel? All hjälp är välkommen, och att [rätta den här sidan](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.sv.md) tar bara en minut: GitHub sköter forken och pull-begäran. Tack på förhand! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Läs detta på ett annat språk](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card är en minimalistisk och anpassningsbar samling kort för Home Assistant, med moderna pop-ups och en integrerad Module Store med över 100 community-skapade moduler.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Innehållsförteckning

**[`Installation`](#installation)**  **[`Konfiguration`](#konfiguration)**  **[`Entitetsförslag`](#entitetsförslag)**  **[`Pop-up`](#pop-up)**  **[`Horisontell knapprad`](#horisontell-knapprad)**  **[`Knapp`](#knapp)**  **[`Mediaspelare`](#mediaspelare)**  **[`Persienn`](#persienn)**  **[`Välj`](#välj)**  **[`Klimat`](#klimat)**  **[`Kalender`](#kalender)**  **[`Avdelare`](#avdelare)**  **[`Tom kolumn`](#tom-kolumn)**  **[`Endast underknappar`](#endast-underknappar)**  **[`Underknappar`](#underknappar)**  **[`Kortlayouter`](#kortlayouter)**  **[`Villkor`](#villkor)**  **[`Åtgärder`](#tryck--dubbeltryck--och-hållåtgärder)**  **[`Stil`](#stil)**  **[`Mallar`](#mallar)**  **[`Moduler`](#moduler)**  **[`Lokalisering`](#lokalisering)**  **[`Hjälp`](#hjälp)**  **[`Bidra`](#bidra)**  **[`Donera`](#donera)**

<br>

## Installation

**Lägsta versionen av Home Assistant som stöds:** 2023.9.0

<details>

<summary>Utan HACS</summary>

<br>

1. Ladda ner `bubble-card.zip` från [den senaste utgåvan](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Packa upp den i din `<config>/www`-mapp, du bör få `bubble-card.js` och en `translations`-mapp bredvid den (den mappen innehåller editorns ordlistor, utan den förblir editorn på engelska)
3. Klicka på ikonen i det övre högra hörnet på din instrumentpanel och sedan på `Edit dashboard`
4. Klicka på ikonen igen och sedan på `Manage resources`
5. Klicka på `Add resource`
6. Kopiera och klistra in detta: `/local/bubble-card.js?v=1`
7. Klicka på `JavaScript Module` och sedan på `Create`
8. Gå tillbaka och uppdatera sidan
9. Nu kan du klicka på `Add card` i det nedre högra hörnet och söka efter `Bubble Card`
10. Efter varje uppdatering av filen måste du redigera `/local/bubble-card.js?v=1` och ändra versionsnumret till ett högre nummer

Om det inte fungerar, prova att rensa webbläsarens cacheminne.

</details>

<details>

<summary>Med HACS (rekommenderas)</summary>

<br>

Den här metoden gör att du får uppdateringar direkt via Home Assistant Community Store

1. Om HACS inte redan är installerat, ladda ner det enligt instruktionerna på [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Genomför HACS grundkonfiguration enligt instruktionerna på [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Gå till "HACS" i sidopanelen
4. Sök efter "Bubble Card", eller klicka på den blå knappen nedan
5. Klicka på "Download"
6. Gå tillbaka till din instrumentpanel och klicka på ikonen i det övre högra hörnet och sedan på `Edit dashboard`
7. Nu kan du klicka på `Add card` i det nedre högra hörnet och söka efter `Bubble Card`

Om det inte fungerar, prova att rensa webbläsarens/appens cacheminne (på alla dina enheter om det behövs).

#### Videor

Du kan också ta en titt på min YouTube-kanal för steg för steg-videor.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguration

Alla alternativ kan konfigureras i Home Assistants redigerare. Men du hittar fler detaljer och YAML i dokumentationen nedan.

<details>

<summary><b>Huvudalternativ (YAML + beskrivning)</b></summary>

| Namn | Typ | Krav | Alternativ som stöds | Beskrivning |
| --- | --- | --- | --- | --- |
| `type` | string | **Krävs** | `custom:bubble-card` | Kortets typ |
| `card_type` | string | **Krävs** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` eller `sub-buttons` | Typ av Bubble Card, se nedan |
| `styles` | object list | Valfritt | Valfria CSS-stilmallar | Låter dig anpassa ditt Bubble Cards CSS, se [stil](#stil) |

</details>

<details>

<summary><b>Globala CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Kantradie för alla element som stöds |
| `--bubble-main-background-color` | `color` | Huvudbakgrundsfärg för alla element som stöds |
| `--bubble-secondary-background-color` | `color` | Sekundär bakgrundsfärg för alla element som stöds |
| `--bubble-accent-color` | `color` | Accentfärg för alla element som stöds |
| `--bubble-icon-border-radius` | `px` | Kantradie för ikoner på alla element som stöds |
| `--bubble-icon-background-color` | `color` | Bakgrundsfärg för ikoner på alla element som stöds |
| `--bubble-sub-button-border-radius` | `px` | Kantradie för alla underknappar |
| `--bubble-sub-button-background-color` | `color` | Bakgrundsfärg för alla underknappar |
| `--bubble-box-shadow` | se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boxskugga för alla element som stöds |
| `--bubble-border` | se [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Kant för alla kort som stöds |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Kolla in den här [videon](https://www.youtube.com/watch?v=0hSQOlBxKKI) för att lära dig mer om Bubble Card och dess möjligheter.** Min YouTube-kanal är ganska ny och fokuserar på handledningar om Home Assistant och Bubble Card. Tveka inte att prenumerera för att hjälpa till att öka min kanals synlighet. Tack på förhand!

<br>

---

<br>

## Entitetsförslag

Sedan Home Assistant 2026.6 erbjuds du några färdiga kort när du väljer en entitet i kortväljaren, och Bubble Card lägger till sina egna recept i den listan. Välj en lampa så erbjuds du ett kort med ett ljusstyrkereglage, plus en variant med färgtemperatur, en med färg och en med mättnad när din lampa stöder dem. Välj en persienn så får du dess positionsreglage, välj en mediaspelare så får du även en variant med dess källista, välj en dammsugare så får du dess knappar för start, paus och dockning. Varje förslag är en vanlig Bubble Card-konfiguration som visas som en förhandsvisning i realtid, så du kan ta det som ligger närmast och fortsätta redigera det som vanligt.

Vad du erbjuds beror på vad din entitet faktiskt kan göra: en lampa utan ljusstyrkekanal får en strömbrytare i stället för ett skjutreglage, en persienn som inte kan vinklas får ingen vinkelvariant, och en klimatentitet får sina förinställda lägen bara när den har några. De klassiska posterna följer under Bubble Card-förslagen när de är tillämpliga: kortet som är avsett för den entitetstypen, en enkel knapp och ett skjutreglage.

> [!TIP]
> Moduler kan lägga till sina egna förslag i den listan, se [moduler](#moduler).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Det här kortet låter dig skapa en pop-up med valfritt innehåll. Varje pop-up är **dold som standard** och kan öppnas genom att peka på dess länk (t.ex. `'#pop-up-name'`), med ett kort som stöder [åtgärden](#tryck--dubbeltryck--och-hållåtgärder) `navigate`, eller med den [horisontella knappraden](#horisontell-knapprad) som ingår.

> [!TIP]
> ### Pop-up-utlösare 
> Med den här funktionen kan du öppna en pop-up baserat på en entitets tillstånd, till exempel kan du öppna en pop-up för "Säkerhet" med en kamera när en person befinner sig framför ditt hus. Du kan också skapa en toggle-hjälpare (input_boolean) och utlösa dess öppning/stängning i en automatisering.
> <details>
> <summary>Öppna en pop-up när en <code>binary_sensor</code> är <code>on</code></summary>
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
> ### Olika sätt att stänga en pop-up 
> Det finns många sätt att stänga en pop-up. Du kan till exempel svepa från pop-upens rubrik nedåt, göra ett långt svep inuti pop-upen nedåt, trycka på Escape på dator, ta bort hashet i URL:en eller helt enkelt trycka på stängknappen.
>


### Pop-up-alternativ

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Alternativ som stöds | Beskrivning |
| --- | --- | --- | --- | --- |
| `hash` | string | **Krävs** | Valfritt unikt hash (t.ex. `'#kitchen'`) med ' ' | Så här öppnar du din pop-up |
| `popup_style` | string | Valfritt | `bubble` (standard) eller `classic` | Anger pop-upens visuella stil |
| `popup_mode` | string | Valfritt | `default` (standard), `fit-content`, `centered` eller `adaptive-dialog` | Anger pop-upens layoutläge |
| `with_bottom_offset` | boolean | Valfritt | `true` eller `false` (standard) | Används endast med `popup_mode: fit-content` eller `adaptive-dialog`. Applicerar en nedre förskjutning på mobil, användbart när din dashboard innehåller ett sidfotskort. |
| `full_width_on_mobile` | boolean | Valfritt | `true` eller `false` (standard) | Används endast med `popup_mode: centered`. Expanderar pop-upen till full skärmbredd på mobil, användbart på mindre skärmar. |
| `performance_mode` | string | Valfritt | `default` (standard) eller `performance` | Optimerar pop-upens öppningsanimation. `performance` fördröjer innehållsrendering och bakgrundsoskärpa något, och inaktiverar även bakgrundsplansoskärpa om den är angiven. |
| `auto_close` | string | Valfritt | En timeout i millisekunder (t.ex. `10000` för 10s) | Stänger pop-upen automatiskt efter en timeout |
| `close_on_click` | boolean | Valfritt | `true` eller `false` (standard) | Stänger pop-upen automatiskt efter valfri interaktion |
| `close_by_clicking_outside` | boolean | Valfritt | `true` (standard) eller `false` | Stänger pop-upen genom att klicka utanför den |
| `width_desktop` | string | Valfritt | Valfritt CSS-värde | Bredd på dator (`100%` som standard på mobil) |
| `margin` | string | Valfritt | Valfritt CSS-värde | Använd detta **endast** om din pop-up inte centreras korrekt på mobil (t.ex. `13px`) |
| `margin_top_mobile` | string | Valfritt | Valfritt CSS-värde | Övre marginal på mobil (t.ex. `-56px` om din rubrik är dold) |
| `margin_top_desktop` | string | Valfritt | Valfritt CSS-värde | Övre marginal på dator (t.ex. `50vh` för en halvstor pop-up eller `calc(100vh - 400px)` för en fast höjd på `400px`) |
| `bg_color` | string | Valfritt | Valfritt hex-, rgb- eller rgba-värde | Pop-upens bakgrundsfärg (t.ex. `#ffffff` för en vit bakgrund) |
| `bg_opacity` | string | Valfritt | Valfritt värde från `0` till `100` | Pop-upens bakgrundsopacitet (t.ex. `100` för ingen transparens) |
| `bg_blur` | string | Valfritt | Valfritt värde från `0` till `100` | Pop-upens bakgrundsoskärpa, **fungerar endast om `bg_opacity` inte är satt till `100`** (t.ex. `0` för ingen oskärpa)|
| `shadow_opacity` | string | Valfritt | Valfritt värde från `0` till `100` | Pop-upens skuggopacitet (t.ex. `0` för att dölja den) |
| `hide_backdrop` | boolean | Valfritt | `true` eller `false` (standard) | Sätt detta till true på den första pop-upen på din huvuddashboard för att inaktivera bakgrundsplanet på alla pop-ups. |
| `background_update` | boolean | Valfritt | `true` eller `false` (standard) | Uppdaterar pop-upens innehåll i bakgrunden (rekommenderas inte) |
| `trigger` | object eller list | Valfritt | Se [villkor](#villkor) | Öppnar den här pop-upen när villkoren är uppfyllda |
| `trigger_entity` | string | Valfritt | Valfri entitet | Öppnar den här pop-upen baserat på en entitets tillstånd, den enkla formen av `trigger` |
| `trigger_state` | string | Valfritt (**Krävs** om `trigger_entity` är angiven) | Valfritt entitetstillstånd | Entitetstillstånd för att öppna pop-upen |
| `trigger_close` | boolean | Valfritt | `true` (standard) eller `false` | Stänger pop-upen när villkoren inte längre är uppfyllda. Standardvärdet blir i stället `false` när du använder det äldre paret `trigger_entity` och `trigger_state` |
| `open_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Utlöser en åtgärd när pop-upen öppnas |
| `close_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Utlöser en åtgärd när pop-upen stängs |
| `show_header` | boolean | Valfritt | `true` (standard) eller `false` | Visar/döljer pop-upens rubrik helt |
| `show_previous_button` | boolean | Valfritt | `true` eller `false` (standard) | Visar en tillbakaknapp bredvid stängknappen och navigerar tillbaka till föregående pop-up när det är möjligt |
| `show_close_button` | boolean | Valfritt | `true` (standard) eller `false` | Visar eller döljer stängknappen samtidigt som resten av rubriken förblir synlig |
| `buttons_position` | string | Valfritt | `right` (standard) eller `left` | Positionen för stäng- och tillbakaknapparna i rubriken |
| `cards` | list | Valfritt | Valfritt Bubble Card, Home Assistant-kort eller anpassat kort | Anger innehållet i din pop-up. Se exemplet på en pop-up nedan. |
| Du har också tillgång till [alla knappinställningar](#knapp) för pop-upens rubrik. | | Valfritt | | Om detta inte anges visas ingen rubrik |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Kantradie för pop-upen |
| `--bubble-pop-up-main-background-color` | `color` | Huvudbakgrundsfärg för element som stöds i pop-upen |
| `--bubble-pop-up-background-color` | `color` | Bakgrundsfärg för pop-upen |
| `--bubble-backdrop-background-color` | `color` | Bakgrundsfärg för bakgrundsplanet |
| Du har också tillgång till [alla CSS-variabler för knappen](#knappalternativ) för pop-upens rubrik. | | |

</details>


### Fristående pop-up-format (v3.2.0+)

Sedan v3.2.0 använder pop-ups ett nytt fristående format där innehållskort definieras direkt inuti pop-upen med alternativet `cards`. Detta ger bättre prestanda och en ny sektionsbaserad drag-och-släpp-redigeringsupplevelse.


#### Exempel

<details>

<summary>En pop-up (fristående format)</summary>

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

<summary>En knapp för att öppna pop-upen</summary>

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

## Horisontell knapprad

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Det här kortet är ett bra komplement till pop-up-kortet, eftersom det låter dig öppna motsvarande pop-uper. Det låter dig även öppna vilken sida som helst av din instrumentpanel. Dessutom kan du lägga till dina rörelse-/närvarosensorer så att ordningen på knapparna anpassas efter vilket rum du just gick in i. Det här kortet är rullbart, förblir synligt och fungerar som en sidfot.

> [!IMPORTANT]  
> Det här kortet måste vara det sista i din vy (efter varje kort och pop-up). Det kan inte ligga inuti en stack.

### Alternativ för horisontell knapprad

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Möjliga värden | Beskrivning |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Krävs** | Pop-up-hashen (t.ex. `'#kitchen'`) med ' ' eller valfri länk | En länk att öppna |
| `1_name` | string | Valfritt | Valfri sträng | Ett namn för din knapp |
| `1_icon` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för din knapp |
| `1_entity` | string | Valfritt | Valfri lampa eller lampgrupp | Visa färgen på den lampan i bakgrunden |
| `1_pir_sensor` | string | Valfritt | Valfri binärsensor | Minst en pir-sensor eller fler för `auto_order`, det fungerar faktiskt även med vilken entitetstyp som helst, du kan till exempel lägga till lampgrupper och ordningen ändras baserat på senaste ändrade tillstånd. |
| `auto_order` | boolean | Valfritt | `true` eller `false` (standard) | Ändra ordningen på knapparna baserat på senaste ändringstiden för `_pir_sensor`, **den måste vara `false` om du inte har någon `_pir_sensor` i din kod** |
| `margin` | string | Valfritt | Valfritt CSS-värde | Använd detta **endast** om din `horizontal-buttons-stack` inte är korrekt centrerad på mobil (t.ex. `13px`) |
| `width_desktop` | string | Valfritt | Valfritt CSS-värde | Bredd på dator (`100%` som standard på mobil) |
| `is_sidebar_hidden` | boolean | Valfritt | `true` eller `false` (standard) | Fixa positionen för den horisontella knappraden om sidofältet är dolt på datorn (endast om du själv har gjort en ändring för att dölja det) |
| `rise_animation` | boolean | Valfritt | `true` (standard) eller `false` | Ställ in detta på `false` för att inaktivera animationen som aktiveras när sidan har laddats |
| `highlight_current_view` | boolean | Valfritt | `true` eller `false` (standard) | Markera aktuell hash/vy med en mjuk animation |
| `hide_gradient` | boolean | Valfritt | `true` eller `false` (standard) | Ställ in detta på `false` för att dölja gradienten |

> [!IMPORTANT]  
> Variablerna som börjar med en siffra definierar dina knappar, ändra bara den siffran för att lägga till fler knappar (se exemplet nedan).

</details>

<details>

<summary><b>CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Kantradie för knapparna i den horisontella knappraden |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Bakgrundsfärg för knapparna i den horisontella knappraden |

</details>


#### Exempel

<details>

<summary>En horisontell knapprad som omorganiserar sig själv baserat på närvarosensorer</summary>

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

Det här kortet är mycket mångsidigt. Det kan användas som en **switch**, ett **skjutreglage**, en **state** eller en **namn/text**-knapp.

> [!TIP]
> ### Vilka är skillnaderna mellan alla knapptyper?
>
> - **Switch-knapp:** Det här är standardknapptypen. Som standard växlar den en entitet och dess bakgrundsfärg ändras utifrån entitetens tillstånd eller en lampas färg. Du kan ändra dess åtgärd i avsnittet **Tryckåtgärd på kort**.
>
> - **Skjutreglageknapp:** Den här knapptypen låter dig styra entiteter med justerbara intervall. Den är idealisk för att dimra lampor, och dess fyllnadsfärg anpassar sig till lampans färg. Du kan också använda den för att visa värden, till exempel en batterinivå.
>   Entiteter som stöds för skjutreglage:
>   - Lampa (ljusstyrka)
>   - Mediaspelare (volym)
>   - Persienn (position)
>   - Fläkt (procent)
>   - Klimat (temperatur)
>   - Inmatningsnummer och nummer (värde)
>   - Batterisensor (procent, skrivskyddad)
>
>   Du kan även använda vilken entitet som helst med ett numeriskt tillstånd genom att inaktivera entitetsfiltret i **Skjutreglageinställningar**, och sedan ange värdena `min` och `max`. Det här alternativet är skrivskyddat.
>
> - **State-knapp:** Perfekt för att visa information från en sensor eller vilken entitet som helst. När du trycker på den visas entitetens "Mer info"-panel. Dess bakgrundsfärg ändras inte.
>
> - **Namn/text-knapp:** Den enda knapptypen som inte behöver en entitet. Den låter dig visa en kort text, ett namn eller en titel. Du kan även lägga till åtgärder på den. Dess bakgrundsfärg ändras inte.

### Knappalternativ

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Möjliga värden | Beskrivning |
| --- | --- | --- | --- | --- |
| `entity` | string | **Krävs** | Valfri entitet | En entitet att styra |
| `button_type` | string | Valfritt | `switch` (standard), `slider`, `state` eller `name` | Knappens beteende |
| `name` | string | Valfritt | Valfri sträng | Ett namn för din knapp, om det inte anges visas entitetens namn |
| `icon` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för din knapp, om den inte anges visas entitetens ikon eller `entity-picture` |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Ge prioritet åt ikonen istället för `entity-picture` |
| `use_accent_color` | boolean | Valfritt (`false` standard) | **Endast för lampor.** Använd temats accentfärg istället för lampans färg.                         |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Visa eller dölj tillståndet för din `entity` |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj ikonen |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Visa senaste ändringstid för din `entity` |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Visa senaste uppdateringstid för din `entity` |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Visa ett attribut för din `entity` under dess `name` |
| `attribute` | string | Valfritt (krävs om `show_attribute` är satt till `true`) | Ett attribut från din `entity` | Attributet att visa (t.ex. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Tillåt att text rullar när innehållet överskrider dess behållares storlek |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, se nedan | Låter dig ändra standardåtgärderna vid knappklick. |
| `tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Ange typen av åtgärd vid ikonklick, om inget anges används `more-info` |
| `double_tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Ange typen av åtgärd vid dubbelklick på ikonen, om inget anges används `none` |
| `hold_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Ange typen av åtgärd när ikonen hålls in, om inget anges används `more-info` |
| `card_layout` | string | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouter](#kortlayouter) |
| `rows` | number | Valfritt | Valfritt tal | Antal rader (höjd) (t.ex. `2`) |
| `sub_button` | object | Valfritt | Se [underknappar](#underknappar) | Lägg till anpassade knappar fixerade till höger |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Huvudbakgrundsfärg för element som stöds i knappen |
| `--bubble-button-border-radius` | `px` | Kantradie för knappen |
| `--bubble-button-icon-border-radius` | `px` | Kantradie för knappens ikonbehållare |
| `--bubble-button-icon-background-color` | `color` | Bakgrundsfärg för knappens ikonbehållare |
| `--bubble-light-white-color` | `color` | Ersätt standardvitfärgen för lampknappar/skjutreglage |
| `--bubble-light-color` | `color` | Ersätt färgen för lampknappar/skjutreglage (även RGB-lampor) |
| `--bubble-button-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugga för knappen |

</details>

Dessa alternativ är endast tillgängliga när `button_type` är satt till `slider`.

<details>

<summary><b>Skjutreglagealternativ (YAML + beskrivningar)</b></summary>

| Namn                  | Typ    | Krav                     | Beskrivning                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Valfritt                        | Skjutreglagets lägsta värde. För anpassade skjutreglage.                                                    |
| `max_value`             | number  | Valfritt                        | Skjutreglagets högsta värde. För anpassade skjutreglage.                                                    |
| `step`                  | number  | Valfritt                        | Skjutreglagets stegvärde.                                                                           |
| `tap_to_slide`          | boolean | Valfritt (`false` standard)      | Aktivera det tidigare skjutreglagebeteendet där du trycker för att aktivera skjutreglaget, istället för att hålla in det.        |
| `relative_slide`        | boolean | Valfritt (`false` standard )     | Uppdatera värdet relativt till startvärdet, istället för startpunkten för tryckningen.                      |
| `read_only_slider`      | boolean | Valfritt (`false` standard)      | Gör skjutreglaget skrivskyddat. Aktiveras automatiskt för vissa entiteter som sensorer.                        |
| `slider_live_update`    | boolean | Valfritt (`false` standard)      | Entitetens tillstånd uppdateras medan du drar i reglaget. **Den här funktionen rekommenderas inte för alla entiteter.**        |
| `slider_fill_orientation` | string | Valfritt | `left`, `right`, `top` eller `bottom` | Ändra fyllnadsriktningen för skjutreglaget. Från vänster till höger när det inte anges, speglat i [språk som skrivs från höger till vänster](#lokalisering) |
| `slider_value_position` | string | Valfritt | `right`, `left`, `center` eller `hidden` | Position för värdevisningen. Till höger när det inte anges, och till vänster i [språk som skrivs från höger till vänster](#lokalisering) |
| `invert_slider_value` | boolean | Valfritt (`false` standard) | Invertera skjutreglagets riktning (100 % fyllnad motsvarar minimum). Inte tillgängligt för färgskjutreglage. |
| `light_slider_type` | string | Valfritt | `brightness` (standard), `hue`, `saturation`, `white_temp` | **Endast för lampor.** Välj skjutreglagets läge |
| `cover_slider_type` | string | Valfritt | `position` (standard), `tilt_position` | **Endast för persienner.** Välj skjutreglagets läge (position eller lutning) |
| `hue_force_saturation` | boolean | Valfritt (`false` standard) | **Endast för lampor (nyansläge).** Tvinga mättnad vid justering av nyans |
| `hue_force_saturation_value` | number | Valfritt (`100` standard) | **Endast för lampor (nyansläge).** Tvingat mättnadsvärde (0-100) |
| `use_accent_color` | boolean | Valfritt (`false` standard) | **Endast för lampor (ljusstyrkeläge).** Använd temats accentfärg istället för lampans färg |
| `allow_light_slider_to_0` | boolean | Valfritt (`false` standard)    | **Endast för lampor.** Tillåter att skjutreglaget når 0 %, vilket stänger av lampan. Inte tillgängligt med `tap_to_slide`. |
| `light_transition`      | boolean | Valfritt (`false` standard)      | **Endast för lampor.** Aktivera mjuka övergångar för ljusstyrka för lampor som stöder det.                           |
| `light_transition_time` | number  | Valfritt (`500` standard)        | **Endast för lampor.** Övergångstiden i millisekunder. Kräver `light_transition: true`.            |

</details>

#### Exempel

<details>

<summary>En skjutreglageknapp som kan styra ljusstyrkan för en lampa</summary>

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

<summary>En knapp med fler alternativ</summary>

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

## Mediaspelare

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Det här kortet låter dig styra en mediaspelarentitet.

### Alternativ för mediaspelare

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Möjliga värden | Beskrivning |
| --- | --- | --- | --- | --- |
| `entity` | string | **Krävs** | Valfri mediaspelare | Mediaspelaren att styra |
| `name` | string | Valfritt | Valfri sträng | Ett namn för din mediaspelare, om det inte anges visas entitetens namn |
| `icon` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för din mediaspelare, om den inte anges visas entitetens ikon eller `entity-picture` |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Ge prioritet åt ikonen istället för `entity-picture` |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Visa eller dölj tillståndet för din `entity` |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj ikonen |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Visa senaste ändringstid för din `entity` |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Visa senaste uppdateringstid för din `entity` |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Visa ett attribut för din `entity` under dess `name` |
| `attribute` | string | Valfritt (krävs om `show_attribute` är satt till `true`) | Ett attribut från din `entity` | Attributet att visa (t.ex. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Tillåt att text rullar när innehållet överskrider dess behållares storlek |
| `min_volume` | number | Valfritt | Valfritt tal | Skjutreglagets lägsta volymvärde. |
| `max_volume` | number | Valfritt | Valfritt tal | Skjutreglagets högsta volymvärde. |
| `cover_background` | boolean | Valfritt | `true` eller `false` (standard) | Använd ett suddigt mediaomslag som kortets bakgrund. |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Låter dig ändra standardåtgärderna vid knappklick. |
| `tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Ange typen av åtgärd vid ikonklick, om inget anges används `more-info`. |
| `double_tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Ange typen av åtgärd vid dubbelklick på ikonen, om inget anges används `none`. |
| `hold_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Ange typen av åtgärd när ikonen hålls in, om inget anges används `more-info`. |
| `main_buttons_position` | string | Valfritt | `default` eller `bottom` | Flytta omslagets åtgärdsknappar till botten (fixerad) |
| `main_buttons_full_width` | boolean | Valfritt | `true` eller `false` | Gör åtgärdsknapparna längst ner fullbredd (standard: `true` när position är `bottom`) |
| `main_buttons_alignment` | string | Valfritt | `end` (standard), `center`, `start`, `space-between` | Justering av åtgärdsknapparna längst ner när de inte är fullbredd |
| `card_layout` | string | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouter](#kortlayouter) |
| `rows` | number | Valfritt | Valfritt tal | Antal rader (höjd) (t.ex. `2`) |
| `sub_button` | object | Valfritt | Se [underknappar](#underknappar) | Lägg till anpassade knappar fixerade till höger |
| `hide` | object | Valfritt | Se nedan | Dölj knappar från kortet |

#### Alternativ för att dölja

| Namn | Typ | Krav | Möjliga värden | Beskrivning |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Valfritt | `true` eller `false` (standard) | Dölj play/paus-knappen |
| `volume_button` | boolean | Valfritt | `true` eller `false` (standard) | Dölj volymknappen |
| `previous_button` | boolean | Valfritt | `true` eller `false` (standard) | Dölj föregående-knappen |
| `next_button` | boolean | Valfritt | `true` eller `false` (standard) | Dölj nästa-knappen |
| `power_button` | boolean | Valfritt | `true` eller `false` (standard) | Dölj strömknappen |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Huvudbakgrundsfärg för mediaspelaren |
| `--bubble-media-player-border-radius` | `px` | Kantradie för mediaspelaren |
| `--bubble-media-player-buttons-border-radius` | `px` | Kantradie för mediaspelarens knappar |
| `--bubble-media-player-slider-background-color` | `color` | Bakgrundsfärg för volymskjutreglaget |
| `--bubble-media-player-icon-border-radius` | `px` | Kantradie för mediaspelarens ikonbehållare |
| `--bubble-media-player-icon-background-color` | `color` | Bakgrundsfärg för mediaspelarens ikonbehållare |
| `--bubble-media-player-box-shadow` | Se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugga för mediaspelaren |

</details>


#### Exempel

<details>

<summary>En mediaspelare med alla alternativ</summary>

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

## Persienn

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Det här kortet låter dig styra dina `cover`-entiteter.

### Alternativ för persienn

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Möjliga värden | Beskrivning |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoriskt** | Vilken persienn som helst | En persienn att styra |
| `name` | string | Valfritt | Valfri sträng | Ett namn för din persienn, om det inte anges visas entitetens namn |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Ge prioritet åt ikonen istället för `entity-picture` |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Visa eller dölj tillståndet för din `entity` |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj ikonen |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Visa tiden för senaste ändring av din `entity` |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Visa tiden för senaste uppdatering av din `entity` |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Visa ett attribut för din `entity` under dess `name` |
| `attribute` | string | Valfritt (obligatoriskt om `show_attribute` är satt till `true`) | Ett attribut från din `entity` | Attributet som ska visas (t.ex. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Tillåt att texten rullar när innehållet överskrider containerns storlek |
| `icon_open` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för din öppna persienn, om den inte anges visas standardikonen för öppen persienn |
| `icon_close` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för din stängda persienn, om den inte anges visas standardikonen för stängd persienn |
| `icon_up` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för din öppningsknapp, om den inte anges visas standardikonen för öppen persienn |
| `icon_down` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för din stängningsknapp, om den inte anges visas standardikonen för stängd persienn |
| `open_service` | string | Valfritt | Valfri tjänst eller skript | En tjänst för att öppna din persienn, standard är `cover.open_cover` |
| `stop_service` | string | Valfritt | Valfri tjänst eller skript | En tjänst för att stoppa din persienn, standard är `cover.stop_cover` |
| `close_service` | string | Valfritt | Valfri tjänst eller skript | En tjänst för att stänga din persienn, standard är `cover.close_cover` |
| `tilt_buttons` | string | Valfritt | `top` (standard), `bottom`, `left`, `right`, `hidden` | Position för lamellvinkelknapparna (visas endast om persiennen stöder lamellvinkel) |
| `open_tilt_service` | string | Valfritt | Valfri tjänst eller skript | En tjänst för att öppna lamellvinkeln, standard är `cover.open_cover_tilt` |

| `close_tilt_service` | string | Valfritt | Valfri tjänst eller skript | En tjänst för att stänga lamellvinkeln, standard är `cover.close_cover_tilt` |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Tillåter att ändra standardåtgärderna vid knapptryck. |
| `tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid tryck på ikonen, om det inte anges används `more-info`. |
| `double_tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid dubbeltryck på ikonen, om det inte anges används `none`. |
| `hold_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid hållning av ikonen, om det inte anges används `more-info`. |
| `main_buttons_position` | string | Valfritt | `default` eller `bottom` | Flytta mediakontrollerna till botten (fast) |
| `main_buttons_full_width` | boolean | Valfritt | `true` eller `false` | Gör de nedre kontrollerna i full bredd (standard: `true` när positionen är `bottom`) |
| `main_buttons_alignment` | string | Valfritt | `end` (standard), `center`, `start`, `space-between` | Justering av nedre kontroller när de inte är i full bredd |
| `card_layout` | string | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouter](#kortlayouter) |
| `rows` | number | Valfritt | Valfritt tal | Antal rader (höjd) (t.ex. `2`) |
| `sub_button` | object | Valfritt | Se [underknappar](#underknappar) | Lägg till anpassade knappar fixerade till höger |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Huvudbakgrundsfärg för element som stöds i persiennkortet |
| `--bubble-cover-border-radius` | `px` | Hörnradie för persiennkortet |
| `--bubble-cover-icon-border-radius` | `px` | Hörnradie för persiennkortets ikoncontainer |
| `--bubble-cover-icon-background-color` | `color` | Bakgrundsfärg för persiennkortets ikoncontainer |
| `--bubble-cover-box-shadow` | Se [skugga](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugga för persiennkortet |
| `--bubble-button-box-shadow` | Se [skugga](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugga för knapparna i persiennkortet |

</details>


#### Exempel

<details>

<summary>Ett kort som kan styra en rullgardin</summary>

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

## Välj

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Det här kortet låter dig lägga till en rullgardinsmeny för dina `input_select`- / `select`-entiteter. Det här kortet stöder också underknappar och alla de vanliga funktionerna i Bubble Card.

> [!TIP]
> Du kan även ha underknappar av typen Välj om du vill, den här funktionen finns tillgänglig i alla kort som stöder underknappar.

### Alternativ för Välj

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Möjliga värden | Beskrivning |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoriskt** | Vilken entitet som helst | En entitet att styra |
| `name` | string | Valfritt | Valfri sträng | Ett namn för ditt val, om det inte anges visas entitetens namn |
| `icon` | string | Valfritt | Valfri `mdi:`-ikon | En ikon för ditt val, om den inte anges visas entitetens ikon eller `entity-picture` |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Ge prioritet åt ikonen istället för `entity-picture` |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Visa eller dölj tillståndet för din `entity` |
| `show_name` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj ikonen |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Visa tiden för senaste ändring av din `entity` |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Visa tiden för senaste uppdatering av din `entity` |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Visa ett attribut för din `entity` under dess `name` |
| `attribute` | string | Valfritt (obligatoriskt om `show_attribute` är satt till `true`) | Ett attribut från din `entity` | Attributet som ska visas (t.ex. `brightness`) |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Tillåt att texten rullar när innehållet överskrider containerns storlek |
| `tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid tryck på ikonen, om det inte anges används `more-info`. |
| `double_tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid dubbeltryck på ikonen, om det inte anges används `none`. |
| `hold_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid hållning av ikonen, om det inte anges används `more-info`. |
| `card_layout` | string | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouter](#kortlayouter) |
| `rows` | number | Valfritt | Valfritt tal | Antal rader (höjd) (t.ex. `2`) |
| `sub_button` | object | Valfritt | Se [underknappar](#underknappar) | Lägg till anpassade knappar fixerade till höger |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Huvudbakgrundsfärg för element som stöds i väljkortet |
| `--bubble-select-background-color` | `color` | Bakgrundsfärg för väljkortet |
| `--bubble-select-list-border-radius` | `px` | Hörnradie för rullgardinsmenyn i kortet |
| `--bubble-select-list-item-accent-color` | `color` | Accentfärg för det valda alternativet |
| `--bubble-select-list-background-color` | `color` | Bakgrundsfärg för rullgardinsmenyn i kortet |
| `--bubble-select-list-width` | `px` | Bredd på rullgardinsmenyn i kortet |
| `--bubble-select-arrow-background-color` | `color` | Bakgrundsfärg för rullgardinsmenyns pil |
| `--bubble-select-button-border-radius` | `px` | Hörnradie för väljknappen |
| `--bubble-select-border-radius` | `px` | Hörnradie för väljkortet |
| `--bubble-select-icon-border-radius` | `px` | Hörnradie för väljkortets ikoncontainer |
| `--bubble-select-icon-background-color` | `color` | Bakgrundsfärg för väljkortets ikoncontainer |
| `--bubble-select-box-shadow` | Se [skugga](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugga för väljkortet |

</details>


#### Exempel

<details>

<summary>Ett väljkort med en lista över scener</summary>

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

## Klimat

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Det här kortet låter dig styra dina `climate`-entiteter.

> [!TIP]
> Menyn för lägesval är en [underknapp](#underknappar) som läggs till automatiskt när kortet skapas. Du kan sedan ändra eller ta bort den efter behag.

### Alternativ för Klimat

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn                     | Typ    | Krav                         | Möjliga värden                                  | Beskrivning                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obligatoriskt**                        | Klimatentitet                                   | Entiteten att styra (t.ex. `climate.living_room`).                                                            |
| `name`                  | string  | Valfritt                            | Valfri sträng                                       | Ett anpassat namn för kortet. Om det inte anges visas entitetens namn.                                    |
| `icon`                  | string  | Valfritt                            | Valfri `mdi:`-ikon                                  | En anpassad ikon för kortet. Om den inte anges används entitetens ikon eller `entity-picture`.                   |
| `force_icon`            | boolean | Valfritt                            | `true` eller `false` (standard)                     | Ger prioritet åt ikonen framför `entity-picture`.                                                           |
| `show_state`            | boolean | Valfritt                            | `true` eller `false` (standard)                     | Visa eller dölj entitetens aktuella tillstånd.                                                                 |
| `show_name`             | boolean | Valfritt                            | `true` (standard) eller `false`                     | Visa eller dölj entitetens namn.                                                                            |
| `show_icon`             | boolean | Valfritt                            | `true` (standard) eller `false`                     | Visa eller dölj ikonen.                                                                                          |
| `hide_target_temp_low`  | boolean | Valfritt (endast för entiteter som stöder `target_temp_low`) | `true` eller `false` (standard) | Döljer kontrollen för lägre måltemperatur om entiteten stöder det.                                          |
| `hide_target_temp_high` | boolean | Valfritt (endast för entiteter som stöder `target_temp_high`)| `true` eller `false` (standard) | Döljer kontrollen för högre måltemperatur om entiteten stöder det.                                         |
| `state_color`           | boolean | Valfritt                            | `true` eller `false` (standard)                     | Applicerar en konstant bakgrundsfärg när klimatentiteten är PÅ.                                              |
| `step` | number | Valfritt | Valfritt tal | Temperaturstegets storlek. |
| `min_temp` | number | Valfritt | Valfritt tal | Den lägsta temperaturen. |
| `max_temp` | number | Valfritt | Valfritt tal | Den högsta temperaturen. |
| `button_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Tillåter att ändra standardåtgärderna vid knapptryck. |
| `tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid tryck på ikonen, om det inte anges används `more-info`. |
| `double_tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid dubbeltryck på ikonen, om det inte anges används `none`. |
| `hold_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid hållning av ikonen, om det inte anges används `more-info`. |                              |
| `main_buttons_position` | string | Valfritt | `default` eller `bottom` | Flytta klimatets åtgärdsknappar till botten (fast) |
| `main_buttons_full_width` | boolean | Valfritt | `true` eller `false` | Gör de nedre åtgärdsknapparna i full bredd (standard: `true` när positionen är `bottom`) |
| `main_buttons_alignment` | string | Valfritt | `end` (standard), `center`, `start`, `space-between` | Justering av nedre åtgärdsknappar när de inte är i full bredd |
| `card_layout` | string | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouter](#kortlayouter) |
| `rows` | number | Valfritt | Valfritt tal | Antal rader (höjd) (t.ex. `2`) |
| `sub_button`            | object  | Valfritt                            | Se [underknappar](#underknappar)                | Lägger till anpassade knappar fixerade till höger. Användbart för en meny för val av klimatläge.                                  |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Huvudbakgrundsfärg för element som stöds i klimatkortet |
| `--bubble-climate-border-radius` | `px` | Hörnradie för element som stöds i klimatkortet |
| `--bubble-climate-button-background-color` | `color` | Bakgrundsfärg för klimatkortets knappar |
| `--bubble-climate-icon-border-radius` | `px` | Hörnradie för klimatkortets ikoncontainer |
| `--bubble-state-climate-fan-only-color` | `color` | Överlagringsfärg för läget endast fläkt |
| `--bubble-state-climate-dry-color` | `color` | Överlagringsfärg för torrläget |
| `--bubble-state-climate-cool-color` | `color` | Överlagringsfärg för kylläget |
| `--bubble-state-climate-heat-color` | `color` | Överlagringsfärg för värmeläget |
| `--bubble-state-climate-auto-color` | `color` | Överlagringsfärg för det automatiska läget |
| `--bubble-state-climate-heat-cool-color` | `color` | Överlagringsfärg för läget värme/kyla |
| `--bubble-climate-accent-color` | `color` | Accentfärg för klimatkortet |
| `--bubble-climate-box-shadow` | Se [skugga](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skugga för klimatcontainern. |

</details>


#### Exempel

<details>

<summary>Ett klimatkort med en rullgardinsmeny för HVAC-lägen</summary>

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

Det här kortet låter dig visa dina kalenderentiteter. Innehållet går att rulla, så du kan enkelt bläddra bland kommande händelser.

### Alternativ för Kalender

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn                | Typ    | Krav  | Möjliga värden                               | Beskrivning                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Valfritt     | Valfritt tal (minst: 1)                        | Antal kalenderdagar att hämta händelser för, från nu fram till slutet av den N:te dagen (standard: 7) |
| `entities`          | object  | **Obligatoriskt** | Ett kalenderentitetsobjekt (se nedan)            | Entiteten att styra (t.ex. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obligatoriskt** | En kalenderentitet                               | Kalenderentiteten som ska visas                                                          |
| `entities.color`    | string  | Valfritt     | En färg                                         | En anpassad färg för kalenderetiketten. Om den inte anges väljs en färg automatiskt |
| `days`              | number  | Valfritt     | Valfritt tal (minst: 1)                         | Antal kalenderdagar att hämta händelser för, från nu fram till slutet av den N:te dagen (standard: 7) |
| `limit`             | number  | Valfritt     | Ett tal                                        | Antalet händelser som visas på kortet                                  |
| `show_end`          | boolean | Valfritt     | `true` eller `false` (standard)                     | Visa eller dölj sluttiden för händelser                                                    |
| `show_progress`     | boolean | Valfritt     | `true` (standard) eller `false`                     | Visa eller dölj förloppsindikatorn för händelser                                                     |
| `show_started_events`| boolean | Valfritt     | `true` (standard) eller `false`                     | Visa eller dölj händelser som pågår just nu. Flerdagshändelser bedöms en dag i taget, så bara den pågående dagen döljs och kommande dagar förblir synliga |
| `scrolling_effect`  | boolean | Valfritt | `true` (standard) eller `false` | Tillåt att texten rullar när innehållet överskrider containerns storlek |
| `event_action` | object | Valfritt | `tap_action`, `double_tap_action` eller `hold_action`, se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Tillåter att lägga till åtgärder vid tryck på en händelse. |
| `tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid tryck på en dag, om det inte anges används `none`. |
| `double_tap_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid dubbeltryck på en dag, om det inte anges används `none`. |
| `hold_action` | object | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definierar typen av åtgärd vid hållning av en dag, om det inte anges används `none`. |
| `card_layout` | string | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stillayout, se [kortlayouter](#kortlayouter) |
| `rows` | number | Valfritt | Valfritt tal | Antal rader (höjd) (t.ex. `2`) |
| `sub_button` | object | Valfritt | Se [underknappar](#underknappar) | Lägg till anpassade knappar fixerade till höger |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#styling">Stil</a>)</b></summary>

| Variabel                                  | Förväntat värde | Beskrivning                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Huvudbakgrundsfärg för element som stöds i kalenderkortet  |
| `--bubble-calendar-border-radius`         | `px`           | Hörnradie för element som stöds i kalenderkortet |
| `--bubble-calendar-height`                | `px`           | Höjd för kalenderkortet                                        |

</details>

#### Exempel

<details>

<summary>Ett kalenderkort med ett begränsat antal händelser</summary>

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

<summary>Ett kalenderkort med sluttid och en förloppsindikator</summary>

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


## Avdelare

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Det här kortet är en enkel avdelare för att dela upp din pop-up i kategorier / sektioner. T.ex. Belysning, Enheter, Persienner, Inställningar, Automationer...

### Avdelaralternativ

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Tillgängliga alternativ | Beskrivning |
| --- | --- | --- | --- | --- |
| `name` | sträng | Valfritt men rekommenderat | Valfri sträng | Ett namn för din avdelare |
| `icon` | sträng | Valfritt men rekommenderat | Valfri `mdi:`-ikon | En ikon för din avdelare |
| `card_layout` | sträng | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stil-layout, se [kortlayouter](#kortlayouter) |
| `rows` | nummer | Valfritt | Valfritt nummer | Antal rader (höjd) (t.ex. `2`) |
| `sub_button` | objekt | Valfritt | Se [underknappar](#underknappar) | Lägg till anpassade knappar fästa till höger |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Bakgrundsfärg för linjen i avdelaren |

</details>

#### Exempel

<details>

<summary>En avdelare/uppdelare för en "Persienner"-sektion</summary>

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

## Tom kolumn

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Det här kortet finns till för att fylla en tom kolumn. Det är användbart om du har en `horizontal-stack` i din pop-up med bara ett kort. Titta i det nedre högra hörnet av den här skärmbilden för att (inte) se det.

### Alternativ för tom kolumn

Det här kortet har inga alternativ och stöder inte [stil](#stil), men det stöder layoutalternativ för HA-sektioner.

#### Exempel

<details>

<summary>En tom kolumn i en horisontell stack</summary>

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

## Endast underknappar

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Det här kortet är dedikerat till enbart underknappar. Det är perfekt för menyer, snabbåtgärder, informationschips eller en fast sidfot längst ner på sidan.

> [!IMPORTANT]  
> Det här kortet använder det nya schemat för underknappar. Använd `sub_button.bottom` för att definiera dina knappar. Sektionen `sub_button.main` ignoreras.

### Alternativ för endast underknappar

<details>

<summary><b>Alternativ (YAML + beskrivningar)</b></summary>

| Namn | Typ | Krav | Tillgängliga alternativ | Beskrivning |
| --- | --- | --- | --- | --- |
| `sub_button` | objekt | **Obligatoriskt** | Se [underknappar](#underknappar) | Definiera dina underknappar med hjälp av sektionen `bottom` |
| `hide_main_background` | boolean | Valfritt | `true` eller `false` (standard) | Ta bort kortets bakgrund |
| `footer_mode` | boolean | Valfritt | `true` eller `false` (standard) | Fäst kortet längst ner på sidan |
| `footer_full_width` | boolean | Valfritt | `true` eller `false` (standard) | Gör sidfoten i full bredd (100 %) |
| `footer_width` | nummer | Valfritt | Valfritt nummer | Sidfotens bredd i pixlar när `footer_full_width` är `false` |
| `footer_bottom_offset` | nummer | Valfritt | Valfritt nummer | Avstånd från sidans botten i pixlar (standard: `16`) |
| `card_layout` | sträng | Valfritt | `normal` (standard om inte i sektionsvy), `large` (standard om i sektionsvy), `large-2-rows`, `large-sub-buttons-grid` | Kortets stil-layout, se [kortlayouter](#kortlayouter) |
| `rows` | nummer | Valfritt | Valfritt nummer | Antal rader (höjd) (t.ex. `2`) |

</details>

<details>

<summary><b>CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Sidfotens bredd när `footer_full_width` är `false` |
| `--bubble-footer-bottom` | `px` | Sidfotens avstånd från botten |
| `--bubble-footer-box-shadow` | se [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boxskugga för sidfotens container |

</details>

#### Exempel

<details>

<summary>Chips (som på skärmbilden)</summary>

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

<summary>En fast sidfotsmeny</summary>

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

I varje kort som stöder det alternativet kan du lägga till underknappar för att anpassa dina kort ännu mer. Du kan till exempel skapa en knapp som kan styra en dammsugare, ett väderkort eller nästan vad som helst du kan komma på. Dessa underknappar stöder tryckåtgärderna och de flesta av knappalternativen.

Underknappar stöder nu tre typer: **Standard (knapp)**, **Skjutreglage** och **Rullgardinsmeny / Välj**. Du kan blanda typer i samma kort, placera underknappar överst eller nederst och organisera dem i grupper för mer avancerade layouter.

#### Placering och grupper för underknappar

<details>

<summary><b>Struktur för underknappar (main / bottom + grupper)</b></summary>

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

**Anteckningar:**
- `main` och `bottom` är två oberoende sektioner. Nedre underknappar är fästa längst ner på kortet.
- `main_layout` och `bottom_layout` accepterar `inline` (standard) eller `rows` för att stapla grupper vertikalt.
- Grupper är objekt med en `group`-array och valfritt `buttons_layout` (`inline` eller `column`).
- `justify_content` är tillgängligt för **enbart nedre grupper** (`start`, `center`, `end`, `fill`).
- När nedre underknappar finns växlar kortets layout automatiskt till `large` om du inte uttryckligen anger en annan layout.
- Äldre `sub_button`-arrayer stöds fortfarande och behandlas som sektionen `main`.

</details>

### Alternativ för underknappar

<details>

<summary><b>Alternativ (YAML + beskrivning)</b></summary>

| Namn | Typ | Krav | Tillgängliga alternativ | Beskrivning |
| --- | --- | --- | --- | --- |
| `entity` | sträng | Valfritt | Valfri entitet | En entitet att styra |
| `name` | sträng | Valfritt | Valfri sträng | Ett namn för din underknapp, om det inte anges visas entitetens namn |
| `icon` | sträng | Valfritt | Valfri `mdi:`-ikon | En ikon för din underknapp, om den inte anges visas entitetens ikon eller entitetsbild |
| `force_icon` | boolean | Valfritt | `true` eller `false` (standard) | Prioritera ikonen framför entitetsbilden, även om en sådan finns tillgänglig |
| `sub_button_type` | sträng | Valfritt | `default`, `slider` eller `select` | Välj typ av underknapp |
| `show_background` | boolean | Valfritt | `true` (standard) eller `false` | Visa en bakgrund för din underknapp, den ändrar färg baserat på din entitets tillstånd |
| `state_background` | boolean | Valfritt | `true` (standard) eller `false` | Använd tillståndsfärgen när entiteten är `on` |
| `light_background` | boolean | Valfritt | `true` (standard) eller `false` | Använd ljusets färg för bakgrunden när det är tillgängligt |
| `show_state` | boolean | Valfritt | `true` eller `false` (standard) | Visa eller dölj tillståndet för din `entity` |
| `show_name` | boolean | Valfritt | `true` eller `false` (standard) | Visa eller dölj namnet |
| `show_icon` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj ikonen |
| `show_last_changed` | boolean | Valfritt | `true` eller `false` (standard) | Visa tidpunkten för senaste ändring av din `entity` |
| `show_last_updated` | boolean | Valfritt | `true` eller `false` (standard) | Visa tidpunkten för senaste uppdatering av din `entity` |
| `show_attribute` | boolean | Valfritt | `true` eller `false` (standard) | Visa ett attribut för din `entity` under dess `name` |
| `attribute` | sträng | Valfritt (obligatoriskt om `show_attribute` är satt till `true`) | Ett attribut från din `entity` | Attributet som ska visas (t.ex. `brightness`) |
| `select_attribute` | sträng | Valfritt | En attributlista från din `entity` (se stödda alternativ ovan) | Den här attributlistan öppnar en rullgardinsmeny vid klick (t.ex. `effect_list`) |
| `show_arrow` | boolean | Valfritt | `true` (standard) eller `false` | Visa eller dölj rullgardinspilen för väljbara underknappar |
| `scrolling_effect` | boolean | Valfritt | `true` (standard) eller `false` | Tillåt att text rullar när innehållet överskrider containerns storlek |
| `tap_action` | objekt | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definiera typen av åtgärd vid klick på underknappen, om inget anges används `more-info` |
| `double_tap_action` | objekt | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definiera typen av åtgärd vid dubbelklick på underknappen, om inget anges används `none` |
| `hold_action` | objekt | Valfritt | Se [åtgärder](#tryck--dubbeltryck--och-hållåtgärder) | Definiera typen av åtgärd vid hållning på underknappen, om inget anges används `more-info` |
| `fill_width` | boolean | Valfritt | `true` eller `false` | Fyll tillgänglig bredd (standard: `false` för main, `true` för bottom) |
| `width` | nummer eller sträng | Valfritt | Valfritt nummer eller CSS-längd | Anpassad bredd (`px` för main-sektionen, `%` för bottom-sektionen som standard) |
| `custom_height` | nummer | Valfritt | Valfritt nummer | Anpassad höjd i pixlar |
| `content_layout` | sträng | Valfritt | `icon-left` (standard), `icon-top`, `icon-bottom`, `icon-right` | Ikonens placering inuti underknappen |
| `always_visible` | boolean | Valfritt | `true` eller `false` (standard) | **Endast skjutreglage.** Visa alltid skjutreglaget istället för att öppna det vid tryck |
| `show_button_info` | boolean | Valfritt | `true` eller `false` (standard) | **Endast skjutreglage.** Visa ikon/namn/tillstånd när `always_visible` är aktiverat |
| `visibility` | objekt eller lista | Valfritt | Se [villkor](#villkor) | Visa eller dölj underknappen baserat på villkor |
| `hide_when_parent_unavailable` | boolean | Valfritt | `true` eller `false` (standard) | Dölj underknappen om det överordnade kortets entitet är otillgänglig |
| `css_class` | string | Valfritt | Valfri sträng | En extra CSS-klass på underknappen, för att rikta in den i din [stil](#stil) oavsett vad den heter (t.ex. ger `My value` `.my-value`) |

</details>

<details>

<summary><b>Alternativ för skjutreglage-underknappar (samma som knappskjutreglage)</b></summary>

<br>

Skjutreglage-underknappar stöder samma skjutreglagealternativ som knappskjutreglage, inklusive:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-variabler (se <a href="#stil">Stil</a>)</b></summary>

| Variabel | Förväntat värde | Beskrivning |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Kantradie för underknapparna |
| `--bubble-sub-button-background-color` | `color` | Bakgrundsfärg för underknapparna |
| `--bubble-sub-button-outline` | `box-shadow` | Kontur som läggs till på en underknapp eller ett skjutreglage, bara när det elementet målas i samma färg som kortet bakom, vilket skulle göra den osynlig (sätt den till `none` för att ta bort den) |
| `--bubble-sub-slider-border-radius` | `px` | Kantradie för skjutreglage-underknappar |
| `--bubble-sub-slider-background-color` | `color` | Bakgrundsfärg för skjutreglage-underknappar |
| `--bubble-sub-slider-height` | `px` | Höjd för alltid synliga skjutreglage-underknappar |
| `--bubble-sub-slider-outline` | `box-shadow` | Kontur enbart för skjutreglage-underknappar, faller tillbaka på `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Textfärg på ljusa underknappsbakgrunder |

</details>

#### Exempel

<details>

<summary>En knapp med några underknappar för att skapa ett dammsugarkort (som på skärmbilden)</summary>

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

<summary>Ett knappskjutreglage med en underknapp som visar ljusstyrkan och en som växlar lampan (som på skärmbilden)</summary>

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

<summary>En knapp som visar inne- och utetemperaturen med vädret för idag och imorgon (skärmbild bifogad)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Otur för mig, det är molnigt hela tiden, men alla ikonerna ändras baserat på vädret.

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

## Kortlayouter

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card har fullt stöd för Home Assistants sektionsvy, du kan ändra kortlayouten för att göra kortet större och även ändra hur många kolumner eller rader kortet ska ta upp i din sektionsvy (endast på de kort som stöder det alternativet). Dessa layouter stöds också i alla andra vytyper.

<details>

<summary><b>Tillgängliga kortlayouter</b></summary>

| Layout | Beskrivning |
| --- | --- |
| `normal` | Den vanliga layouten (inte optimerad för sektionsvyn) |
| `large` | En större layout som anpassar sig till de valda raderna i sektionsvyn (optimerad för sektionsvyn) |
| `large-2-rows` | En större layout med 2 rader underknappar som anpassar sig till de valda raderna i sektionsvyn (optimerad för sektionsvyn) |
| `large-sub-buttons-grid` | Den här layouten visar underknappar i ett rutnät, `rows` måste anges till minst `2`.

</details>

#### Exempel

<details>

<summary>En stor knapp som visar energistatistik med 2 rader underknappar (skärmbild inkluderad)</summary>

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

<summary>En stor knapp med flera rader och 12 underknappar</summary>

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

## Villkor

Vissa alternativ styrs av villkor, som skrivs precis som villkoren i Home Assistants [villkorskort](https://www.home-assistant.io/dashboards/conditional/):

- `visibility` på en [underknapp](#underknappar), för att visa eller dölja den
- `trigger` på en [pop-up](#pop-up), för att öppna den när villkoren är uppfyllda
- `checkConditionsMet(conditions, hass)` inuti dina [mallar](#mallar), när du behöver svaret i din egen kod

Alla villkorstyper i Home Assistant utvärderas: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, samt grupperna `and`, `or` och `not`. Villkoren från Home Assistants villkorsbyggare fungerar också, de som är uppkallade efter sin domän som `sun.is_up`, `light.is_on`, `zone.in_zone` eller `temperature.is_value`, med sina inställningar `target`, `options`, `behavior` och `for`.

<details>

<summary><b>Exempel</b></summary>

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
> Villkor utvärderas i din webbläsare, så de få som behöver Home Assistant-servern kan inte bli exakta: soluppgång och solnedgång läses från entiteten `sun.sun` i stället för att räknas om, och en `for`-varaktighet mäts från den senaste tillståndsändringen, utan historiken från recorder.
>
> `view_columns` accepteras men uppfylls alltid, eftersom Bubble Card aldrig är det som placerar ut kolumnerna i din vy. En villkorstyp som Bubble Card inte känner till rapporterar sig en gång i din webbläsarkonsol i stället för att misslyckas tyst, så att du kan skilja ett stavfel från en funktion som saknas.

<br>

---

<br>

## Tryck-, dubbeltryck- och hållåtgärder

Du kan även använda Home Assistants standardåtgärder för tryck, dubbeltryck och håll på de kort som stöder det alternativet. Detta gör det till exempel möjligt att visa fönstret "mer info" genom att hålla ner en knappikon eller köra en tjänst när en underknapp trycks in.

**Obs: När `double_tap_action` är konfigurerad kommer den vanliga `tap_action` att få en fördröjning på 200 ms för att möjliggöra
identifiering av ett dubbeltryck. Om denna fördröjning är oönskad, ställ in `double_tap_action` på `none` för att inaktivera hanteringen av dubbeltryck.**

### Åtgärdsalternativ

<details>

<summary><b>Alternativ (YAML + beskrivning)</b></summary>

| Namn | Typ | Alternativ som stöds | Beskrivning |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Åtgärd att utföra |
| `target` | object |  | Fungerar endast med `call-service`. Följer [home-assistant-syntaxen](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Valfri sökväg på din dashboard | Sökväg att navigera till (t.ex. `'#kitchen'` för att öppna en pop-up) när åtgärden definieras som navigate |
| `url_path` | string | Valfri länk | URL att öppna vid klick (t.ex. `https://www.google.com`) när `action` är `url` |
| `service` | string | Valfri tjänst | Tjänst att anropa (t.ex. `media_player.media_play_pause`) när `action` definieras som `call-service` |
| `data` eller `service_data` | object | Valfri tjänstedata | Tjänstedata att inkludera (t.ex. `entity_id: media_player.kitchen`) när `action` definieras som `call-service` |
| `confirmation` | object | Se [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Visa en bekräftelse-popup (inte en från Bubble Card), åsidosätter standardobjektet `confirmation` |

</details>

#### Exempel

<details>

<summary>En knapp som öppnar en pop-up</summary>

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

## Stil

Du kan lägga till anpassade stilar för att ändra CSS:en för alla kort **utan att använda card-mod** på fyra sätt:

- I editorn, gå till kortet du vill ändra, navigera sedan till _Styling options > Custom styles & JS templates_, och lägg till dina anpassade stilar (kolla tipsen och exemplen nedan).
- I editorn (eller i [YAML](#moduler)), gå till kortet du vill ändra, navigera sedan till _Moduler_, skapa sedan en ny modul (den blir tillgänglig för alla kort), eller gå till **Module Store** för att installera en tillgänglig modul (mer information om moduler finns [nedan](#moduler)).
- I en [temafil](https://www.home-assistant.io/integrations/frontend/#defining-themes) genom att lägga till CSS-variabler i YAML (dessa finns tillgängliga i varje korts dokumentation ovan). Detta möjliggör globala ändringar.

  <details>
  
  <summary>Exempel</a></summary>
  
  <br>

  Kopiera inte raden `Bubble:`, det är namnet på temat du använder. Du behöver även ta bort `--` från variablerna.

  Du behöver köra åtgärden [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) för att uppdatera temat efter eventuella ändringar.

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
  
- I YAML genom att lägga till `styles: |` följt av dina anpassade stilar (kolla tipsen och exemplen nedan).

> [!TIP]  
> **För att förstå vilka stilklasser som kan ändras** kan du ta en titt i mappen [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) i det här repositoriet. I varje kortmapp hittar du en fil som heter `styles.css`. Dessa filer innehåller alla tillämpade stilar. Detta möjliggör betydligt fler möjligheter än CSS-variabler, men det måste läggas till individuellt för varje kort.
> 
> Du kan också hitta massor av [exempel från communityn](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), eller några från [Home Assistant-forumet](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) genom att söka lite.
>
> Bubble-temat för Home Assistant (som på skärmbilderna) hittar du [här](https://github.com/Clooos/Bubble).
>
> En handledningsvideo kommer snart på min [YouTube-kanal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Observera att du kan behöva lägga till `!important;` till vissa CSS-stilar som redan är angivna (se exemplen nedan).

> [!TIP]  
> Underknappar kan riktas in med namnbaserade klasser. Till exempel kan en underknapp med namnet "My sub-button" stylas med `.my-sub-button`. Skjutreglagets underknappar exponerar också `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, osv.
>
> En namnbaserad klass ändras när du byter namn på en underknapp, och den översätts när namnet översätts. Sätt `css_class` på underknappen för att få en egen klass som aldrig flyttar sig, oavsett namn och oavsett språk.

#### Exempel

<details>

<summary>Ändra teckenstorleken för valfritt Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Ändra bakgrundsfärgen för en enskild knapp i en horisontell knapprad</summary>

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

<summary>Ändra bakgrundsfärgen för ett kort</summary>

<br>

Denna fungerar på alla typer av Bubble Card (utom pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Denna gör samma sak fast enbart i ett knappkort (den fungerar för pop-up-rubriken): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

För att ändra färgen när det är `on`, ta en titt på stilmallarna nedan.

</details>

<details>

<summary>Ändra färgen på ett knappskjutreglage</summary>

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

<summary>Ändra linjefärgen för en avdelare</summary>

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

<summary>Ändra färgen på en ikon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

För en ikon i en horisontell knapprad.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Ändra bakgrundsfärgen för en ikonbehållare</summary>

<br>

Denna fungerar på alla typer av Bubble Card (utom pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Denna gör samma sak fast för pop-up-rubriken: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Ändra storleken på underknapparna (perfekt för den stora layouten)</summary>

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

<summary>Ändra bakgrundsfärgen för den andra underknappen</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ändra storleken på en ikon</summary>

<br>

För huvudikonen.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

För underknapparnas ikoner.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Använda en bild istället för en ikon i en underknapp</summary>

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

Ladda bara upp bilden i en mapp som heter "pictures" (eller vilket namn du vill) i Home Assistants "www"-mapp.

</details>

<details>

<summary>Avancerat exempel: Skapa en horisontell rad med underknappar (skärmbild inkluderad)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Jag älskar verkligen den här, jag använder den som rubrik på min dashboard.

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

## Mallar

**Bubble Card stöder inte Jinja-mallar** men avancerade användare kan lägga till mallar i JS direkt i sina [anpassade stilar](#stil). Detta gör det till exempel möjligt att dynamiskt ändra en ikon, texterna eller färgerna på ett element, att visa eller dölja ett element villkorligt (som en underknapp), eller nästan vad som helst baserat på ett tillstånd, ett attribut och mer.

> [!TIP]  
> Mer information om JS-mallar finns [här](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mitt råd är att **alltid titta i webbläsarens konsol** för att vara säker på att allt fungerar korrekt.

> [!IMPORTANT]  
> **Alla mallar som inte ändrar en CSS-egenskap måste placeras sist! Som att ändra en ikon, en text eller något annat element.**

#### Tillgängliga variabler och funktioner

<details>

<summary>Variabler</summary>

<br>

Du har tillgång till dessa variabler i de flesta kort:

- `state` returnerar tillståndet för din definierade `entity`.
  
- `entity` returnerar entiteten du definierade, som `switch.test` i det här exemplet.
  
- `icon` kan användas så här för att ändra ikonen `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` returnerar tillståndet för din första underknapps definierade `entity`, `[0]` är den första underknappens tillstånd, `[1]` den andra...
  
- `subButtonIcon[0]` kan användas så här för att ändra den första underknappens ikon `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` är den första underknappens ikon, `[1]` den andra...
  
- `card` returnerar kortelementet i DOM.
  
- `hass` är en avancerad variabel som ger dig ännu mer kontroll, du kan till exempel returnera tillståndet för `light.kitchen` så här `hass.states['light.kitchen'].state` eller ett attribut så här `hass.states[entity].attributes.brightness`.

- `this` returnerar massor av användbar information om din konfiguration och instrumentpanel, använd bara denna om du vet vad du gör.

</details>

<details>

<summary>Funktioner</summary>

<br>

Du har tillgång till alla globala JS-funktioner, men du har också tillgång till:

- `getWeatherIcon` kan användas för att returnera en väderikon baserat på ett tillstånd som anger vädret. Du kan till exempel göra så här `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` för att ändra den tredje underknappens ikon till dagens väderikon, `.forecast[1]?.condition` är för imorgon...

  Du måste skapa en mallsensor för det. Här är vad du kan lägga till i din `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` returnerar `true` när en lista med [villkor](#villkor) är uppfylld, till exempel `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` kan användas för att översätta ett tillstånd (kan också användas för att hämta en enhet för ett tillstånd, utan att behöva lägga till den manuellt).
- `hass.formatEntityAttributeValue(state, "attribute")` kan användas för att översätta ett attribut (kan också användas för att hämta en enhet för ett attribut, utan att behöva lägga till den manuellt).

</details>

#### Exempel

Du kan hitta många exempel nedan, men du kan också hitta mycket avancerade mallar på min [Patreon-sida](https://www.patreon.com/c/Clooos), som en (min favorit) som gör det möjligt med upp till fyra villkorliga märken placerade runt kortets ikoner. Det är också ett bra sätt att lära sig om alla möjligheter med Bubble Cards anpassade stilar och mallar!

<details>
<summary>Exempel från min Patreon-sida</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Lägga till Home Assistant-liknande märken på vilket kort som helst</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Visa formaterat datum och tid i en avdelare utan att använda någon entitet</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Visa en underknapps tillstånd på två rader</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Anpassa etiketter och ikoner inuti en underknapp för välj</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Lägga till en beständig påminnelse-pop-up som bara visas när det behövs</a>
</p>

<br>

</details>

<details>

<summary>Ändra bakgrundsfärgen på en knapp som är röd när den är <code>off</code> och blå när den är <code>on</code></summary>

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

<summary>Ändra bakgrundsfärgen på en knapp baserat på en entitet för den horisontella knappraden</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Visa/dölja en underknapp villkorligt</summary>

<br>

Det här exemplet visar den första underknappen bara när min dammsugare har fastnat.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Det här exemplet visar en underknapp när batteriet är under 10 %. Användbart med en underknapp som visar "Lågt batteri".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ändra en ikon eller underknappsikon villkorligt</summary>

<br>

Det här exemplet ändrar en knappikon bara när en dammsugare har fastnat.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Det här exemplet ändrar den första underknappens ikon bara när en dammsugare har fastnat.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Ändra en ikons eller underknappsikons färg villkorligt</summary>

<br>

Det här exemplet ändrar en knappikons färg baserat på dess tillstånd.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Det här exemplet ändrar en underknappsikons färg baserat på dess tillstånd. `.bubble-sub-button-1` är den första underknappen, ersätt `1` om du vill ändra en annan underknapps ikon.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animera en fläktikon villkorligt</summary>

<br>

Det här exemplet roterar en knappikon när en fläkt är `on`.
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

<summary>Skapa mallar för texter (som namn eller tillstånd)</summary>

<br>

Det här exemplet ändrar en knapps namn/tillstånd till "Det är just nu soligt" beroende på ditt väder.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
eller när det tillämpas på underknappar:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Om du vill skapa en mall för tillståndet (`.bubble-state`), aktivera inte `show_state: true`, aktivera bara `show_attribute: true` utan något attribut.

</details>

<details>

<summary>Avancerat exempel: Ändra färgen på en underknapp när en pop-up är öppen</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Avancerat exempel: Skapa en mall för en avdelares namn baserat på ett tillstånd översatt till ditt språk</summary>

<br>

Du kan använda `hass.formatEntityState(state)` för att översätta ett tillstånd och `hass.formatEntityAttributeValue(state, "attribute")` för att översätta ett attribut.

Det här exemplet ändrar namnet och ikonen baserat på vädret, "Nuageux" betyder "Molnigt" på franska.

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

Moduler är en kraftfull funktion som gör att du kan spara, återanvända och dela dina anpassade stilar och mallar mellan alla dina Bubble Cards. Istället för att kopiera och klistra in samma kod i flera kort kan du skapa en modul och tillämpa den där du behöver den. Detta gör det mycket enklare och effektivare att hantera instrumentpanelens utseende och känsla.

Men den här funktionen är mycket kraftfullare än så, den låter dig själv lägga till riktiga funktioner i Bubble Cards editor, med hjälp av alla standardalternativ i [Home Assistants formulär](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Objektväljaren har förbättrats för att visa liveändringar och för att stödja attribut korrekt.

En modul kan också svara Home Assistants kortväljare vid sidan av de inbyggda [entitetsförslagen](#entitetsförslag): använd `suggestions` för de kort den kan beskriva i förväg, och `suggestions_code` när de måste beräknas utifrån din installation, till exempel en pop-up byggd av alla entiteter i det område som den valda entiteten tillhör. Båda nycklarna är dokumenterade [här](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Du kan också bläddra i **Module Store** för att hitta och installera [moduler skapade av gemenskapen](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), eller dela dina egna skapelser!

> [!TIP]
> En moduls kod fungerar exakt på samma sätt som koden i ett korts `styles`-sektion. Alla samma variabler och funktioner från avsnittet [Mallar](#mallar) är tillgängliga.

<br>

### Grundinställning

> [!IMPORTANT]
> Från och med v3.1.0 är Bubble Card Tools den rekommenderade lagringsbackenden för moduler. Den äldre metoden med mallsensorer fungerar fortfarande för befintliga konfigurationer, men nya moduler och funktioner i Module Store stöds bäst via Bubble Card Tools.

Integrationen Bubble Card Tools aktiverar moduleditorn och Module Store, och lagrar moduler som enskilda YAML-filer. Befintliga moduler migreras automatiskt.

Installations- och konfigurationsstegen förklaras här:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Moduleditorn

Du kommer åt moduleditorn från vilket korts inställningar som helst, under avsnittet **Moduler**. Editorn har två huvudflikar:

#### Fliken Mina moduler

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Den här fliken visar alla dina installerade moduler och gör att du kan:

- **Tillämpa** befintliga moduler på det aktuella kortet
- **Skapa** en ny modul från grunden
- **Redigera** befintliga moduler med liveförhandsgranskning
- **Ta bort** moduler du inte längre behöver
- **Söka** och **sortera** moduler (alfabetiskt, senaste, aktiva först)
- **Ange global status** för att en modul ska tillämpas på alla kort automatiskt
- **Importera/exportera** moduler för säkerhetskopiering eller delning
- **Skriva entitetsförslag** i moduleditorn, under **Valfritt: Entitetsförslag**, så att din modul erbjuds i Home Assistants kortväljare. Både regler och beräknade förslag kontrolleras medan du skriver, ett fel där hindrar sparande, och förhandsvisningen visar de föreslagna korten för vilken entitet du än väljer

#### Fliken Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Den här fliken visar [alla tillgängliga moduler från gemenskapen](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), och gör att du kan:

- **Bläddra** bland alla moduler skapade av gemenskapen
- **Söka** och filtrera moduler efter namn, kompatibilitet eller nyckelord
- **Installera** moduler med ett klick
- **Uppdatera** installerade moduler när nya versioner är tillgängliga

> [!TIP]
> I editorn kan du aktivera moduler som inte stöds för att testa moduler som ännu inte är markerade som kompatibla med en given korttyp.

<br>

### Hur man använder moduler

#### Skapa en ny modul

<details>

<summary>Klicka för att expandera</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gå till valfritt korts editor och expandera avsnittet **Moduler**.
2. Klicka på **Skapa ny modul**.
3. Fyll i modulinformationen.
4. Skriv din CSS- och/eller JavaScript-mallkod i kodeditorn **Kod**.
5. (Valfritt) Skapa ett anpassat konfigurationsgränssnitt i avsnittet **Editor** (som färgväljaren i skärmbilden ovan, fullständig dokumentation finns [här](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Valfritt) Skriv dina **Entitetsförslag** så att din modul erbjuds i Home Assistants kortväljare. Panelen kontrollerar det du skriver medan du skriver, och dess förhandsvisning visar själva de föreslagna korten för den entitet du väljer.
7. Klicka på **Spara**.

Din modul är nu tillgänglig att använda på vilket som helst av dina kort!

<br>

</details>

#### Tillämpa en modul på ett kort

<details>

<summary>Klicka för att expandera</summary>

<br>

- **Via editorn:**

  - Gå till editorn för kortet du vill tillämpa modulen på.
  - Expandera avsnittet **Moduler**.
  - Klicka på modulen du vill tillämpa från listan.
  - Under "Tillämpa på", klicka på "Det här kortet". Modulen är nu aktiv. Du kan tillämpa flera moduler på samma kort.

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

#### Tillämpa en modul globalt

<details>

<summary>Klicka för att expandera</summary>

<br>

Du kan ange att en modul ska tillämpas automatiskt på alla Bubble Cards:

**Detta är inte tillgängligt för moduler med en editor, eftersom dessa kräver en specifik konfiguration för att fungera.**

- **Via editorn:**

  - I moduleditorn, hitta din modul under fliken **Mina moduler**.
  - Växla knappen **Alla kort** bredvid modulens namn.
  - Modulen tillämpas nu automatiskt på alla kort.
 
- **Via YAML:**

  I din moduls YAML-konfiguration (i `bubble-modules.yaml`), lägg bara till `is_global: true`.

<br>

</details>

#### Undanta ett enskilt kort från en global modul

<details>

<summary>Klicka för att expandera</summary>

<br>

Om du har en global modul men vill undanta den från ett specifikt kort:

- **Via editorn:**
  
  - I kortets avsnitt **Moduler** ser du globala moduler listade.
  - Klicka på en global modul, inaktivera "Det här kortet" för att undanta den från det här specifika kortet.

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

#### Dela din modul till Module Store

<details>

<summary>Klicka för att expandera</summary>

<br>

För att dela din modul till Module Store, i moduleditorn, längst ner under "Exportera modul", klicka på "Kopiera för GitHub" och klistra in innehållet i en ny diskussion i kategorin [Dela dina moduler](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Redigera beskrivningen** (vid behov), **exemplet** (för YAML-användare), och kom ihåg att **inkludera minst en skärmbild** för Module Store.

**Din modul blir tillgänglig direkt efter det** (efter en uppdatering av Store), så dubbelkolla att allt är korrekt skrivet och att modulen fungerar som förväntat. Du kan naturligtvis redigera/uppdatera modulen efter att den har delats.

<br>

</details>

#### Versionshantering

<details>

<summary>Klicka för att expandera</summary>

<br>

Module Store kontrollerar automatiskt om det finns uppdateringar till installerade moduler. När uppdateringar är tillgängliga:

1. Du ser en uppdateringsindikator under fliken **Module Store**.
2. Klicka på **Uppdatera** för moduler med tillgängliga uppdateringar.
3. Bekräfta uppdateringen i Module Store.

<br>

</details>

#### Definiera vilka korttyper som stöds

<details>

<summary>Klicka för att expandera</summary>

<br>

Vissa moduler kanske inte är kompatibla med alla korttyper. Du kan ange vilka kort en modul stöder.  
Om du vill att en modul ska vara kompatibel med **alla kort**, utelämna helt enkelt fältet `supported` (eller använd alternativet **Alla kort** i editorn).

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

### Exempel

<details>
<summary>Grundläggande stilmodul</summary>

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
<summary>Modul med anpassad konfiguration</summary>

<br>

Den här modulen finns tillgänglig [här](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Fler exempel finns i Module Store, eller [här](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalisering

Bubble Card talar ditt språk. Dess editor är översatt till de 64 språk som Home Assistant stöder, och överallt där Home Assistant redan har ett ord för något återanvänds dess egen formulering, så att du läser samma termer i båda gränssnitten.

Längst ned i editorn, bredvid versionsnumret, följer en **Automatisk**-brytare språket i ditt Home Assistant. Stäng av den så går hela editorn tillbaka till engelska, vilket är praktiskt för att följa en guide eller för att rapportera ett problem. Ditt val kommer ihåg i din webbläsare.

Den här dokumentationen är också översatt, [till 62 språk](languages.md), alla utom brittisk engelska som läser originalet. De sidorna är öppna för alla, så en formulering som inte matchar ditt eget Home Assistant kan rättas med ett par klick. Den engelska versionen förblir referensen för själva innehållet.

<br>

---

<br>

## Hjälp

Öppna gärna ett ärende om något inte fungerar som förväntat.

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Har du frågor eller tankar om Bubble Card? Vill du dela dina dashboards eller upptäckter? Du kan gå till Home Assistant-forumet, till Bubble Card-subredditen eller till avsnittet GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bidra

Bidrag är välkomna! Oavsett om det gäller buggfixar, nya funktioner, översättningar eller förbättringar av dokumentationen, tveka inte att öppna en pull request.

Innan du börjar, läs gärna [utvecklarguiden](DEVELOPERS.md) som beskriver hur du sätter upp din lokala miljö, bygger projektet och testar dina ändringar.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donera

Jag ägnar större delen av min fritid åt att göra det här projektet så bra som möjligt. Så om du uppskattar mitt arbete vore en donation ett fantastiskt sätt att visa ditt stöd 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Tack alla för ert stöd, ni är min största motivation!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
