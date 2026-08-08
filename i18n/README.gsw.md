<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Die Siite isch en automatischi Übersetzig. Im Zwiifelsfall gilt d [originali änglischi Dokumentation](../README.md). Tönt en Satz komisch? Jedi Hilf isch willkomme, und [die Siite verbessere](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.gsw.md) duuret nur e Minute: GitHub kümmeret sich um de Fork und de Pull Request. Merci im Voruus! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lueg das inere andere Sprach a](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card isch e minimalistischi und aapassbari Kartesammlig für Home Assistant, mit modärne Pop-ups und emene integrierte Module Store mit über 100 vo dr Community erstellte Module.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Inhaltsverzeichnis

**[`Installation`](#installation)**  **[`Konfiguration`](#konfiguration)**  **[`Entitäte-Vorschläg`](#entitäte-vorschläg)**  **[`Pop-up`](#pop-up)**  **[`Horizontale Button-Stapel`](#horizontale-button-stapel)**  **[`Button`](#button)**  **[`Mediaplayer`](#mediaplayer)**  **[`Storen`](#storen)**  **[`Uswahl`](#uswahl)**  **[`Klima`](#klima)**  **[`Kalender`](#kalender)**  **[`Trännlinie`](#trännlinie)**  **[`Leeri Spalte`](#leeri-spalte)**  **[`Nur Sub-Buttons`](#nur-sub-buttons)**  **[`Sub-Buttons`](#sub-buttons)**  **[`Charte-Layouts`](#charte-layouts)**  **[`Bedingige`](#bedingige)**  **[`Aktione`](#tippe--doppeltipp--und-halte-aktione)**  **[`Styling`](#styling)**  **[`Templates`](#templates)**  **[`Modul`](#module)**  **[`Lokalisierig`](#lokalisierig)**  **[`Hilf`](#hilf)**  **[`Mitmache`](#mitmache)**  **[`Spände`](#spände)**

<br>

## Installation

**Mindestens unterstützti Home Assistant Version:** 2023.9.0

<details>

<summary>Ohni HACS</summary>

<br>

1. Lad `bubble-card.zip` vo de [letschte Release](https://github.com/Clooos/Bubble-Card/releases/latest) abe
2. Pack es i dim `<config>/www` Ordner us, du sötsch `bubble-card.js` und en Ordner `translations` dernäbe übercho (dä Ordner enthaltet d Wörterbüecher vom Editor, ohni ihn bliibt de Editor uf Änglisch)
3. Klick uf dim Dashboard obe rächts uf s Symbol und denn uf `Dashboard bearbeiten`
4. Klick nomol uf das Symbol und denn uf `Ressourcen verwalten`
5. Klick uf `Ressource hinzufügen`
6. Kopier das ii und füeg s ii: `/local/bubble-card.js?v=1`
7. Klick uf `JavaScript-Modul` und denn uf `Erstellen`
8. Gang zrugg und lad dini Siite neu
9. Jetzt chasch unde rächts uf `Karte hinzufügen` klicke und nach `Bubble Card` sueche
10. Nach jedem Update vo dr Datei muesch `/local/bubble-card.js?v=1` bearbeite und d Versionsnummer erhöhe

Wenn's nid geit, versuech eifach dr Browser-Cache z lösche.

</details>

<details>

<summary>Mit HACS (empfohle)</summary>

<br>

Mit dere Method überchunnsch Updates direkt über s Home Assistant Community Store

1. Falls HACS na nid installiert isch, lad s abe gmäss dr Aaleitig uf [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Mach d Grundkonfiguration vo HACS gmäss dr Aaleitig uf [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Gang i dr Sidebar uf "HACS"
4. Sueche nach "Bubble Card" oder klick uf de blau Button undedrunder
5. Klick uf "Herunterladen"
6. Gang zrugg uf dim Dashboard und klick obe rächts uf s Symbol und denn uf `Dashboard bearbeiten`
7. Jetzt chasch unde rächts uf `Karte hinzufügen` klicke und nach `Bubble Card` sueche

Wenn's nid geit, versuech dr Browser- oder App-Cache z lösche (uf allne dine Gerät, falls nötig).

#### Videos

Du chasch au uf mim YouTube-Kanal verbi luege für Schritt-für-Schritt-Videos.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguration

Alli Optione chasch im Home Assistant Editor konfiguriere. Aber du findsch meh Details und s YAML i dr Dokumentation da unde.

<details>

<summary><b>Hauptoptione (YAML + Beschriibig)</b></summary>

| Name | Typ | Aaforderig | Unterstützti Optione | Beschriibig |
| --- | --- | --- | --- | --- |
| `type` | string | **Erforderlich** | `custom:bubble-card` | Typ vo dr Karte |
| `card_type` | string | **Erforderlich** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` oder `sub-buttons` | Typ vo dr Bubble Card, gseht men unde |
| `styles` | object list | Optional | Beliebigi CSS-Stylesheets | Erlaubt dr, dini Bubble Card CSS aazpasse, gseht [Styling](#styling) |

</details>

<details>

<summary><b>Globali CSS-Variable (gseht <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschriibig |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Rundig vo dr Ecke für alli unterstützte Element |
| `--bubble-main-background-color` | `color` | Haupt-Hindergrundfarb für alli unterstützte Element |
| `--bubble-secondary-background-color` | `color` | Sekundäri Hindergrundfarb für alli unterstützte Element |
| `--bubble-accent-color` | `color` | Akzäntfarb für alli unterstützte Element |
| `--bubble-icon-border-radius` | `px` | Rundig vo dr Ecke für alli Icon vo de unterstützte Element |
| `--bubble-icon-background-color` | `color` | Hindergrundfarb vom Icon für alli unterstützte Element |
| `--bubble-sub-button-border-radius` | `px` | Rundig vo dr Ecke für alli Sub-Buttons |
| `--bubble-sub-button-background-color` | `color` | Hindergrundfarb für alli Sub-Buttons |
| `--bubble-box-shadow` | gseht [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schatte für alli unterstützte Element |
| `--bubble-border` | gseht [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Rahme für alli unterstützte Charte |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Lueg dir das [Video](https://www.youtube.com/watch?v=0hSQOlBxKKI) aa, zum meh über Bubble Card und sini Möglichkeite z erfahre.** Mi YouTube-Kanal isch na relativ neu und konzentriert sich uf Tutorials über Home Assistant und Bubble Card. Zögere nid, en z abonniere, zum d Sichtbarkeit vo mim Kanal z erhöhe. Danke scho jetzt!

<br>

---

<br>

## Entitäte-Vorschläg

Sit Home Assistant 2026.6 wird dir bim Uswähle vo ere Entität im Charte-Uswähler es paar fertigi Charte aabote, und Bubble Card tuet sini eigene Rezäpt zu dere Lischte dezue. Wähl es Liecht us und du übercho es Charte mit eme Helligkeits-Schieberegler, plus e Farbtemperatur-, e Farb- und e Sättigungsvariante, wenn dis Liecht die unterstützt. Wähl e Store us und du übercho ihre Positions-Schieberegler, wähl en Mediaplayer us und du übercho au e Variante mit sinere Quelleliste, wähl en Staubsuger us und du übercho sini Buttons Start, Pause und Zrugg zur Basis. Jede Vorschlag isch e normali Bubble Card-Konfiguration, wo als Live-Vorschau azeigt wird, drum chasch de nächschti neh und wie gwohnt witer bearbeite.

Was dir aabote wird, hanget dervo ab, was dini Entität würklich cha: es Liecht ohni Helligkeitskanal übercho en Schalter statt en Schieberegler, e Store wo nöd chippe cha übercho kei Chippvariante, e Klima-Entität übercho ihri voreigstellte Modi nur, wenn si sonigi het. D klassische Iiträg chömed under de Bubble Card-Vorschläg, wenn si passe: s eigene Charte für die Art vo Entität, en eifache Button und en Schieberegler.

> [!TIP]
> Module chönd ihri eigene Vorschläg zu dere Lischte hinzuefüege, lueg [Module](#module).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Mit dere Karte chasch e Pop-up mit beliebigem Inhalt erstelle. Jedes Pop-up isch **standardmässig verschteckt** und cha über sin Link (z.B. `'#pop-up-name'`) uufgmacht werde, mit jedere Karte wo d `navigate` [Aktion](#tippe--doppeltipp--und-halte-aktione) unterstützt, oder mit em mitgliferte [horizontale Button-Stapel](#horizontale-button-stapel).

> [!TIP]
> ### Pop-up-Trigger 
> Mit dere Funktion chasch e Pop-up basierend uf em Zuestand vo irgendere Entität uufmache, zum Bispiil chasch es "Sicherheit"-Pop-up mit ere Kamera uufmache, wenn e Person vor dim Huus stoht. Du chasch au en Toggle-Helper (input_boolean) erstelle und dessen Uf-/Zuegah i re Automation uslöse.
> <details>
> <summary>Es Pop-up uufmache wenn e <code>binary_sensor</code> uf <code>on</code> isch</summary>
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
> ### Verschideni Wäg zum es Pop-up schliesse 
> Es git mängi Wäg zum es Pop-up schliesse. Zum Bispiil chasch vo dr Pop-up-Kopfziile nach unde wüsche, mit emene lange Wüsch im Pop-up nach unde, mit dr Escape-Taschte am Desktop, indem d de Hash i dr URL entfernsch oder eifach mit em Schliesse-Button.
>


### Pop-up-Optione

<details>

<summary><b>Optione (YAML + Beschriibige)</b></summary>

| Name | Typ | Aaforderig | Unterstützti Optione | Beschriibig |
| --- | --- | --- | --- | --- |
| `hash` | string | **Erforderlich** | Jede eindeutige Hash (z.B. `'#kitchen'`) mit ' ' | So machsch di Pop-up uf |
| `popup_style` | string | Optional | `bubble` (Standard) oder `classic` | Definiert de visuälli Stil vom Pop-up |
| `popup_mode` | string | Optional | `default` (Standard), `fit-content`, `centered` oder `adaptive-dialog` | Definiert de Layout-Modus vom Pop-up |
| `with_bottom_offset` | boolean | Optional | `true` oder `false` (Standard) | Wird nur mit `popup_mode: fit-content` oder `adaptive-dialog` verwendet. Fügt uf em Handy en Abstand unde derzue, praktisch wenn di Dashboard e Footer-Karte het. |
| `full_width_on_mobile` | boolean | Optional | `true` oder `false` (Standard) | Wird nur mit `popup_mode: centered` verwendet. Streckt s Pop-up uf em Handy uf volli Bildschirmbreiti, praktisch bi chline Display. |
| `performance_mode` | string | Optional | `default` (Standard) oder `performance` | Optimiert d Öffnigs-Animation vom Pop-up. `performance` verzögeret s Render vom Inhalt und d Hindergrund-Unschärfi liecht, deaktiviert au d Backdrop-Unschärfi falls gsetzt. |
| `auto_close` | string | Optional | E Timeout i Millisekunde (z.B. `10000` für 10s) | Schliesst s Pop-up automatisch nach emene Timeout |
| `close_on_click` | boolean | Optional | `true` oder `false` (Standard) | Schliesst s Pop-up automatisch nach jeder Interaktion |
| `close_by_clicking_outside` | boolean | Optional | `true` (Standard) oder `false` | Schliesst s Pop-up wenn me usserhalb dervo klickt |
| `width_desktop` | string | Optional | Jede CSS-Wert | Breiti am Desktop (`100%` Standard uf em Handy) |
| `margin` | string | Optional | Jede CSS-Wert | Nur verwende, wenn di Pop-up uf em Handy nid guet zentriert isch (z.B. `13px`) |
| `margin_top_mobile` | string | Optional | Jede CSS-Wert | Obere Rand uf em Handy (z.B. `-56px` wenn di Kopfziile verschteckt isch) |
| `margin_top_desktop` | string | Optional | Jede CSS-Wert | Obere Rand am Desktop (z.B. `50vh` für es halbgrosses Pop-up oder `calc(100vh - 400px)` für e fixi Höchi vo `400px`) |
| `bg_color` | string | Optional | Jede Hex-, RGB- oder RGBA-Wert | D Hindergrundfarb vo dim Pop-up (z.B. `#ffffff` für e wiisse Hindergrund) |
| `bg_opacity` | string | Optional | Jede Wert vo `0` bis `100` | D Hindergrund-Deckchraft vo dim Pop-up (z.B. `100` für kei Transparänz) |
| `bg_blur` | string | Optional | Jede Wert vo `0` bis `100` | Dr Hindergrund-Unschärfi-Effekt vo dim Pop-up, **das funktioniert nur wenn `bg_opacity` nid uf `100` gsetzt isch** (z.B. `0` für kei Unschärfi)|
| `shadow_opacity` | string | Optional | Jede Wert vo `0` bis `100` | D Schatte-Deckchraft vo dim Pop-up (z.B. `0` zum en verstecke) |
| `hide_backdrop` | boolean | Optional | `true` oder `false` (Standard) | Setz das uf true bim erschte Pop-up vo dim Haupt-Dashboard, zum de Backdrop bi allne Pop-ups z deaktiviere. |
| `background_update` | boolean | Optional | `true` oder `false` (Standard) | Aktualisiert de Inhalt vom Pop-up im Hindergrund (nid empfohle) |
| `trigger` | object oder list | Optional | Gsehsch [Bedingige](#bedingige) | Öffnet das Pop-up, wenn d Bedingige erfüllt sind |
| `trigger_entity` | string | Optional | Jedi Entität | Macht das Pop-up uf, basierend uf em Zuestand vo irgendere Entität, die eifachi Form vo `trigger` |
| `trigger_state` | string | Optional (**Erforderlich** falls `trigger_entity` definiert isch) | Jede Entitäts-Zuestand | Entitäts-Zuestand zum s Pop-up uufmache |
| `trigger_close` | boolean | Optional | `true` (Standard) oder `false` | Schliesst s Pop-up, wenn d Bedingige nüme erfüllt sind. Stattdesse isch de Standard `false`, wenn du s eltere Paar `trigger_entity` und `trigger_state` bruuchsch |
| `open_action` | object | Optional | Gseht [Aktione](#tippe--doppeltipp--und-halte-aktione) | Löst e Aktion us, wenn s Pop-up uufgeit |
| `close_action` | object | Optional | Gseht [Aktione](#tippe--doppeltipp--und-halte-aktione) | Löst e Aktion us, wenn s Pop-up zuegeit |
| `show_header` | boolean | Optional | `true` (Standard) oder `false` | Zeigt/Verschteckt d Kopfziile vom Pop-up komplett |
| `show_previous_button` | boolean | Optional | `true` oder `false` (Standard) | Zeigt en Zrugg-Button näbem Schliesse-Button und navigiert zrugg zum vorige Pop-up, falls vorhande |
| `show_close_button` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verschteckt de Schliesse-Button, wobii dr Rescht vo dr Kopfziile sichtbar blibt |
| `buttons_position` | string | Optional | `right` (Standard) oder `left` | Position vom Schliesse- und Zrugg-Button i dr Kopfziile |
| `cards` | list | Optional | Jedi Bubble Card, Home Assistant Karte oder benutzerdefinierti Karte | Definiert de Inhalt vo dim Pop-up. Gseht s Pop-up-Bispiil unde. |
| Du hesch au Zuegriff uf [alli Button-Iistellige](#button) für d Kopfziile vom Pop-up. | | Optional | | Falls undefiniert wird kei Kopfziile agezeigt |

</details>

<details>

<summary><b>CSS-Variable (gseht <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschriibig |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Rundig vo dr Ecke vom Pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Haupt-Hindergrundfarb für unterstützti Element vom Pop-up |
| `--bubble-pop-up-background-color` | `color` | Hindergrundfarb vom Pop-up |
| `--bubble-backdrop-background-color` | `color` | Hindergrundfarb für de Backdrop |
| Du hesch au Zuegriff uf [alli Button-CSS-Variable](#button-optione) für d Kopfziile vom Pop-up. | | |

</details>


### Eigeständigs Pop-up-Format (v3.2.0+)

Sit v3.2.0 bruucht s Pop-up es neus, eigeständigs Format, bi dem d Inhalts-Charte direkt im Pop-up mit dr `cards`-Option definiert werde. Das git e bessri Performance und e neui, sektionsbasierti Drag-and-Drop-Bearbeitigs-Erfahrig.


#### Bispiil

<details>

<summary>Es Pop-up (eigeständigs Format)</summary>

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

<summary>En Button zum s Pop-up uufmache</summary>

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

## Horizontale Button-Stapel

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Die Karte isch en gueti Ergänzig zur Pop-up-Karte, wo dr erlaubt, die entsprächende Pop-ups uufzmache. Si erlaubt dr au, jedi Siite vo dim Dashboard uufzmache. Zuesätzlich chasch dini Bewegungs-/Aawesenheits-Sensore hinzuefüege, sodass sich d Reihefolg vo de Buttons je nach em Zimmer aapasst, i wo d grad ineganged bisch. Die Karte isch scrollbar, blibt sichtbar und funktioniert als Footer.

> [!IMPORTANT]  
> Die Karte muess die letschti i dere Aasicht si (nach jeder Charte und jedem Pop-up). Si cha nid inere Stapel si.

### Horizontale Button-Stapel-Optione

<details>

<summary><b>Optione (YAML + Beschriibige)</b></summary>

| Name | Typ | Aaforderig | Unterstützti Optione | Beschriibig |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Erforderlich** | Dr Pop-up-Hash (z.B. `'#kitchen'`) mit ' ' oder jede Link | E Link zum uufmache |
| `1_name` | string | Optional | Jede String | En Name für di Button |
| `1_icon` | string | Optional | Jedes `mdi:`-Icon | En Icon für di Button |
| `1_entity` | string | Optional | Jedi Liecht oder Liecht-Gruppe | Zeigt d Farb vo däm Liecht im Hindergrund a |
| `1_pir_sensor` | string | Optional | Jede binary_sensor | Mindestens ein PIR-Sensor oder meh für `auto_order`, faktisch funktioniert das au mit jedem Entitätstyp, zum Bispiil chasch Liecht-Gruppe hinzuefüege und d Reihefolg ändert sich basierend uf de letschte Zuestandsänderige. |
| `auto_order` | boolean | Optional | `true` oder `false` (Standard) | Ändert d Reihefolg vo de Buttons je nach dr letschte Änderigszit vom `_pir_sensor`, **muess `false` si, falls kei `_pir_sensor` i dim Code isch** |
| `margin` | string | Optional | Jede CSS-Wert | Nur verwende, wenn di `horizontal-buttons-stack` uf em Handy nid guet zentriert isch (z.B. `13px`) |
| `width_desktop` | string | Optional | Jede CSS-Wert | Breiti am Desktop (`100%` Standard uf em Handy) |
| `is_sidebar_hidden` | boolean | Optional | `true` oder `false` (Standard) | Korrigiert d Position vom horizontale Button-Stapel, wenn d Sidebar am Desktop verschteckt isch (nur falls d das sälber verschteckt hesch) |
| `rise_animation` | boolean | Optional | `true` (Standard) oder `false` | Setz das uf `false`, zum d Animation z deaktiviere, wo sich aktiviert, sobald d Siite glade isch |
| `highlight_current_view` | boolean | Optional | `true` oder `false` (Standard) | Hebt de aktuell Hash / d aktuelli Aasicht mit ere sanfte Animation ane |
| `hide_gradient` | boolean | Optional | `true` oder `false` (Standard) | Setz das uf `false`, zum de Gradient z verschtecke |

> [!IMPORTANT]  
> D Variable, wo mit ere Zahl afanged, definiere dini Buttons, änder eifach die Zahl, zum meh Buttons hinzuezfüege (gseht s Bispiil unde).

</details>

<details>

<summary><b>CSS-Variable (gseht <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschriibig |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Rundig vo dr Ecke für d Buttons vom horizontale Button-Stapel |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Hindergrundfarb für d Buttons vom horizontale Button-Stapel |

</details>


#### Bispiil

<details>

<summary>En horizontale Button-Stapel, wo sich sälber basierend uf Aawesenheits-Sensore neu ordnet</summary>

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

## Button

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Die Charte isch sehr vielsitig. Si cha als **Schalter**, als **Schieberegler**, als **Zuestand** oder als **Name/Text-Button** brucht werde.

> [!TIP]
> ### Was sind d Unterschiede zwüschet all de Button-Typen?
>
> - **Schalter-Button:** Das isch de Standard-Button-Typ. Standardmässig schaltet er e Entity um und syni Hintergrundfarb ändert sich je nach Zuestand vo de Entity oder de Farb vom Liecht. Du chasch d Aktion im Abschnitt **Tap-Aktion uf de Charte** ändere.
>
> - **Schieberegler-Button:** Dä Button-Typ lat dich Entities mit aapassbare Bereich stüüre. Er isch ideal zum Dimme vo Lichter, und syni Füllfarb passt sich a d Farb vom Liecht a. Du chasch en au bruche zum Werte azeige, wie zum Bispil e Batteriestand.
>   Unterstützti Entities für Schieberegler:
>   - Liecht (Helligkeit)
>   - Mediaplayer (Lautstärke)
>   - Store (Position)
>   - Ventilator (Prozentsatz)
>   - Klima (Temperatur)
>   - Input Number und Number (Wert)
>   - Batteriesensor (Prozentsatz, nur läsbar)
>
>   Du chasch au jedi Entity mit emene numerische Zuestand bruche, wenn du de Entity-Filter i de **Schieberegler-Ischtellige** deaktivierisch, und dänn d Werte `min` und `max` definierisch. Die Option isch nur läsbar.
>
> - **Zuestand-Button:** Perfekt zum Azeige vo Informatione vonere Sensor oder jedere Entity. Wenn du druckisch, zeigt er s "Meh Info"-Panel vo de Entity. Syni Hintergrundfarb ändert sich nöd.
>
> - **Name/Text-Button:** De einzig Button-Typ, wo kei Entity bruucht. Er erlaubt dir, e churze Text, en Name oder en Titel azeige. Du chasch au Aktione dezue derfüege. Syni Hintergrundfarb ändert sich nöd.

### Button-Optione

<details>

<summary><b>Optione (YAML + Beschribige)</b></summary>

| Name | Typ | Aaforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Jedi Entity | E Entity zum Stüüre |
| `button_type` | string | Optional | `switch` (Standard), `slider`, `state` oder `name` | S Verhalte vo dim Button |
| `name` | string | Optional | Jede String | En Name für dis Button, wenn nöd definiert wird de Entity-Name azeigt |
| `icon` | string | Optional | Jedes `mdi:`-Icon | En Icon für dis Button, wenn nöd definiert wird s Entity-Icon oder s `entity-picture` azeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Git em Icon d Priorität anstatt em `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` Standard) | **Nur für Lichter.** Bruucht d Akzentfarb vom Theme anstatt de Lichtfarb.                         |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeig oder verstecke de Zuestand vo dere `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke de Name |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke s Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Änderigszit vo dere `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Aktualisierigszit vo dere `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeig es Attribut vo dere `entity` unter em `name` |
| `attribute` | string | Optional (erforderlich wenn `show_attribute` uf `true` gsetzt isch) | Es Attribut vo dere `entity` | S Attribut zum Azeige (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt em Text z scrolle, wenn de Inhalt grösser isch als de Container |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, gseh unte | Erlaubt d Standardaktione bim Button-Klick z ändere. |
| `tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Klick, wenn nöd definiert wird `more-info` bruucht |
| `double_tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Doppelklick, wenn nöd definiert wird `none` bruucht |
| `hold_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Halte, wenn nöd definiert wird `more-info` bruucht |
| `card_layout` | string | Optional | `normal` (Standard, wenn nöd i de Section-Aasicht), `large` (Standard, wenn i de Section-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gseh [Karte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Zile (Höchi) (z. B. `2`) |
| `sub_button` | object | Optional | Gseh [Sub-Buttons](#sub-buttons) | Füeg agepasst Buttons hi, wo rächts fixiert sind |

</details>

<details>

<summary><b>CSS-Variable (gseh <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wert | Beschribig |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Haupt-Hintergrundfarb für unterstützti Elemänt im Button |
| `--bubble-button-border-radius` | `px` | Rundig vom Button |
| `--bubble-button-icon-border-radius` | `px` | Rundig vom Icon-Container vom Button |
| `--bubble-button-icon-background-color` | `color` | Hintergrundfarb für de Icon-Container vom Button |
| `--bubble-light-white-color` | `color` | Ersetzt d Standard-Wiissfarb vo Liecht-Buttons/Schieberegler |
| `--bubble-light-color` | `color` | Ersetzt d Farb vo Liecht-Buttons/Schieberegler (au RGB-Lichter) |
| `--bubble-button-box-shadow` | Gseh [Box Shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schatte für de Button |

</details>

Die Optione sind nur verfüegbar, wenn `button_type` uf `slider` gsetzt isch.

<details>

<summary><b>Schieberegler-Optione (YAML + Beschribige)</b></summary>

| Name                  | Typ    | Aaforderig                     | Beschribig                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | De Minimalwert vom Schieberegler. Für agepassti Schieberegler.                                                    |
| `max_value`             | number  | Optional                        | De Maximalwert vom Schieberegler. Für agepassti Schieberegler.                                                    |
| `step`                  | number  | Optional                        | De Schrittwert vom Schieberegler.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` Standard)      | Aktiviert s alt Schieberegler-Verhalte, wo du tippsch zum de Schieberegler z aktiviere, anstatt en z halte.        |
| `relative_slide`        | boolean | Optional (`false` Standard )     | Aktualisiert de Wert relativ zum Startwert, anstatt zum Startberührigspunkt.                                      |
| `read_only_slider`      | boolean | Optional (`false` Standard)      | Macht de Schieberegler nur läsbar. Wird automatisch aktiviert für gwüssi Entities wie Sensore.                                        |
| `slider_live_update`    | boolean | Optional (`false` Standard)      | De Entity-Zuestand wird während em Schiebe aktualisiert. **Die Funktion wird nöd für alli Entities empfohle.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` oder `bottom` | Ändert d Füllrichtig vom Schieberegler. Vo links nach rächts, wenn nöd definiert, gspieglet i [Sprache vo rächts nach links](#lokalisierig) |
| `slider_value_position` | string | Optional | `right`, `left`, `center` oder `hidden` | Position vo de Wärtaazeig. Rächts, wenn nöd definiert, und links i [Sprache vo rächts nach links](#lokalisierig) |
| `invert_slider_value` | boolean | Optional (`false` Standard) | Kehrt d Schieberegler-Richtig um (100 % Füllig entspricht em Minimum). Nöd verfüegbar für Farb-Schieberegler. |
| `light_slider_type` | string | Optional | `brightness` (Standard), `hue`, `saturation`, `white_temp` | **Nur für Lichter.** Wähl de Schieberegler-Modus |
| `cover_slider_type` | string | Optional | `position` (Standard), `tilt_position` | **Nur für Store.** Wähl de Schieberegler-Modus (Position oder Neigig) |
| `hue_force_saturation` | boolean | Optional (`false` Standard) | **Nur für Lichter (Hue-Modus).** Erzwingt Sättigung bim Aapasse vom Farbton |
| `hue_force_saturation_value` | number | Optional (`100` Standard) | **Nur für Lichter (Hue-Modus).** Erzwungener Sättigungswert (0-100) |
| `use_accent_color` | boolean | Optional (`false` Standard) | **Nur für Lichter (Helligkeit-Modus).** Bruucht d Akzentfarb vom Theme anstatt de Lichtfarb |
| `allow_light_slider_to_0` | boolean | Optional (`false` Standard)    | **Nur für Lichter.** Erlaubt em Schieberegler, 0 % z erreiche, wo s Liecht usschaltet. Nöd verfüegbar mit `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` Standard)      | **Nur für Lichter.** Aktiviert sanfti Helligkeits-Übergäng für unterstützti Lichter.                           |
| `light_transition_time` | number  | Optional (`500` Standard)        | **Nur für Lichter.** D Übergangszit in Millisekunde. Bruucht `light_transition: true`.            |

</details>

#### Bispiel

<details>

<summary>En Schieberegler-Button, wo d Helligkeit vonere Liecht stüüre cha</summary>

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

<summary>En Button mit meh Optione</summary>

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

## Mediaplayer

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Die Charte erlaubt dir, e Mediaplayer-Entity z stüüre.

### Mediaplayer-Optione

<details>

<summary><b>Optione (YAML + Beschribige)</b></summary>

| Name | Typ | Aaforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Jede Mediaplayer | De Mediaplayer zum Stüüre |
| `name` | string | Optional | Jede String | En Name für din Mediaplayer, wenn nöd definiert wird de Entity-Name azeigt |
| `icon` | string | Optional | Jedes `mdi:`-Icon | En Icon für din Mediaplayer, wenn nöd definiert wird s Entity-Icon oder s `entity-picture` azeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Git em Icon d Priorität anstatt em `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeig oder verstecke de Zuestand vo dere `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke de Name |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke s Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Änderigszit vo dere `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Aktualisierigszit vo dere `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeig es Attribut vo dere `entity` unter em `name` |
| `attribute` | string | Optional (erforderlich wenn `show_attribute` uf `true` gsetzt isch) | Es Attribut vo dere `entity` | S Attribut zum Azeige (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt em Text z scrolle, wenn de Inhalt grösser isch als de Container |
| `min_volume` | number | Optional | Jedi Zahl | De Minimalwert vom Lautstärke-Schieberegler. |
| `max_volume` | number | Optional | Jedi Zahl | De Maximalwert vom Lautstärke-Schieberegler. |
| `cover_background` | boolean | Optional | `true` oder `false` (Standard) | Bruucht es verwöschets Cover-Bild als Hintergrund vo de Charte. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Erlaubt d Standardaktione bim Button-Klick z ändere. |
| `tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Klick, wenn nöd definiert wird `more-info` bruucht. |
| `double_tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Doppelklick, wenn nöd definiert wird `none` bruucht. |
| `hold_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Halte, wenn nöd definiert wird `more-info` bruucht. |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Verschiebt d Cover-Aktionsbuttons a de untere Rand (fixiert) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Macht d untere Aktionsbuttons volli Breiti (Standard: `true` wenn d Position `bottom` isch) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Uusrichtig vo de untere Aktionsbuttons, wenn nöd volli Breiti |
| `card_layout` | string | Optional | `normal` (Standard, wenn nöd i de Section-Aasicht), `large` (Standard, wenn i de Section-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gseh [Karte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Zile (Höchi) (z. B. `2`) |
| `sub_button` | object | Optional | Gseh [Sub-Buttons](#sub-buttons) | Füeg agepasst Buttons hi, wo rächts fixiert sind |
| `hide` | object | Optional | Gseh unte | Versteckt Buttons vo de Charte |

#### Versteckoptione

| Name | Typ | Aaforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` oder `false` (Standard) | Versteckt de Play/Pause-Button |
| `volume_button` | boolean | Optional | `true` oder `false` (Standard) | Versteckt de Lautstärke-Button |
| `previous_button` | boolean | Optional | `true` oder `false` (Standard) | Versteckt de Zrugg-Button |
| `next_button` | boolean | Optional | `true` oder `false` (Standard) | Versteckt de Wiiter-Button |
| `power_button` | boolean | Optional | `true` oder `false` (Standard) | Versteckt de Power-Button |

</details>

<details>

<summary><b>CSS-Variable (gseh <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wert | Beschribig |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Haupt-Hintergrundfarb für de Mediaplayer |
| `--bubble-media-player-border-radius` | `px` | Rundig vom Mediaplayer |
| `--bubble-media-player-buttons-border-radius` | `px` | Rundig vo de Mediaplayer-Buttons |
| `--bubble-media-player-slider-background-color` | `color` | Hintergrundfarb für de Lautstärke-Schieberegler |
| `--bubble-media-player-icon-border-radius` | `px` | Rundig vom Icon-Container vom Mediaplayer |
| `--bubble-media-player-icon-background-color` | `color` | Hintergrundfarb für de Icon-Container vom Mediaplayer |
| `--bubble-media-player-box-shadow` | Gseh [Box Shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schatte für de Mediaplayer |

</details>


#### Bispiel

<details>

<summary>En Mediaplayer mit alle Optione</summary>

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

## Storen

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Die Charte erlaubt dir, dini `cover`-Entities z stüüre.

### Storen-Optione

<details>

<summary><b>Optione (YAML + Beschribige)</b></summary>

| Name | Typ | Aaforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Jedi Store | E Store zum Stüüre |
| `name` | string | Optional | Jede String | En Name für dini Store, wenn nöd definiert wird de Entity-Name azeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Git em Icon d Priorität anstatt em `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeig oder verstecke de Zuestand vo dere `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke de Name |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke s Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Änderigszit vo dere `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Aktualisierigszit vo dere `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeig es Attribut vo dere `entity` unter em `name` |
| `attribute` | string | Optional (erforderlich wenn `show_attribute` uf `true` gsetzt isch) | Es Attribut vo dere `entity` | S Attribut zum Azeige (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt em Text z scrolle, wenn de Inhalt grösser isch als de Container |
| `icon_open` | string | Optional | Jedes `mdi:`-Icon | En Icon für dini offeni Store, wenn nöd definiert wird s Standard-Icon für offeni Store azeigt |
| `icon_close` | string | Optional | Jedes `mdi:`-Icon | En Icon für dini gschlosseni Store, wenn nöd definiert wird s Standard-Icon für gschlosseni Store azeigt |
| `icon_up` | string | Optional | Jedes `mdi:`-Icon | En Icon für din Öffne-Button, wenn nöd definiert wird s Standard-Icon zum Öffne azeigt |
| `icon_down` | string | Optional | Jedes `mdi:`-Icon | En Icon für din Schliesse-Button, wenn nöd definiert wird s Standard-Icon zum Schliesse azeigt |
| `open_service` | string | Optional | Jede Service oder Script | En Service zum Öffne vo dine Store, Standard isch `cover.open_cover` |
| `stop_service` | string | Optional | Jede Service oder Script | En Service zum Stoppe vo dine Store, Standard isch `cover.stop_cover` |
| `close_service` | string | Optional | Jede Service oder Script | En Service zum Schliesse vo dine Store, Standard isch `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (Standard), `bottom`, `left`, `right`, `hidden` | Position vo de Neigigs-Stüürbuttons (nur azeigt wenn d Store Neigig unterstützt) |
| `open_tilt_service` | string | Optional | Jede Service oder Script | En Service zum Öffne vo de Neigig, Standard isch `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Jede Service oder Script | En Service zum Schliesse vo de Neigig, Standard isch `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Erlaubt d Standardaktione bim Button-Klick z ändere. |
| `tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Klick, wenn nöd definiert wird `more-info` bruucht. |
| `double_tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Doppelklick, wenn nöd definiert wird `none` bruucht. |
| `hold_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Halte, wenn nöd definiert wird `more-info` bruucht. |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Verschiebt d Media-Stüürelement a de untere Rand (fixiert) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Macht d untere Stüürelement volli Breiti (Standard: `true` wenn d Position `bottom` isch) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Uusrichtig vo de untere Stüürelement, wenn nöd volli Breiti |
| `card_layout` | string | Optional | `normal` (Standard, wenn nöd i de Section-Aasicht), `large` (Standard, wenn i de Section-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gseh [Karte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Zile (Höchi) (z. B. `2`) |
| `sub_button` | object | Optional | Gseh [Sub-Buttons](#sub-buttons) | Füeg agepasst Buttons hi, wo rächts fixiert sind |

</details>

<details>

<summary><b>CSS-Variable (gseh <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wert | Beschribig |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Haupt-Hintergrundfarb für unterstützti Elemänt i de Storen-Charte |
| `--bubble-cover-border-radius` | `px` | Rundig vo de Storen-Charte |
| `--bubble-cover-icon-border-radius` | `px` | Rundig vom Icon-Container vo de Storen-Charte |
| `--bubble-cover-icon-background-color` | `color` | Hintergrundfarb für de Icon-Container vo de Storen-Charte |
| `--bubble-cover-box-shadow` | Gseh [Box Shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schatte für d Storen-Charte |
| `--bubble-button-box-shadow` | Gseh [Box Shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schatte für d Buttons i de Storen-Charte |

</details>


#### Bispiel

<details>

<summary>E Charte, wo e Rollstore stüüre cha</summary>

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

## Uswahl

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Die Charte erlaubt dir, es Dropdown-Menü für dini `input_select` / `select`-Entities z füege. Die Charte unterstützt au d Sub-Buttons und alli gmeinsame Bubble-Card-Funktione.

> [!TIP]
> Du chasch au Uswahl-Sub-Buttons ha, wenn du wottsch, die Funktion isch in alle Charte verfüegbar, wo Sub-Buttons unterstütze.

### Uswahl-Optione

<details>

<summary><b>Optione (YAML + Beschribige)</b></summary>

| Name | Typ | Aaforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Jedi Entity | E Entity zum Stüüre |
| `name` | string | Optional | Jede String | En Name für dini Uswahl, wenn nöd definiert wird de Entity-Name azeigt |
| `icon` | string | Optional | Jedes `mdi:`-Icon | En Icon für dini Uswahl, wenn nöd definiert wird s Entity-Icon oder s `entity-picture` azeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Git em Icon d Priorität anstatt em `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeig oder verstecke de Zuestand vo dere `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke de Name |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeig oder verstecke s Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Änderigszit vo dere `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeig d letscht Aktualisierigszit vo dere `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeig es Attribut vo dere `entity` unter em `name` |
| `attribute` | string | Optional (erforderlich wenn `show_attribute` uf `true` gsetzt isch) | Es Attribut vo dere `entity` | S Attribut zum Azeige (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt em Text z scrolle, wenn de Inhalt grösser isch als de Container |
| `tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Klick, wenn nöd definiert wird `more-info` bruucht. |
| `double_tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Doppelklick, wenn nöd definiert wird `none` bruucht. |
| `hold_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Halte, wenn nöd definiert wird `more-info` bruucht. |
| `card_layout` | string | Optional | `normal` (Standard, wenn nöd i de Section-Aasicht), `large` (Standard, wenn i de Section-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gseh [Karte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Zile (Höchi) (z. B. `2`) |
| `sub_button` | object | Optional | Gseh [Sub-Buttons](#sub-buttons) | Füeg agepasst Buttons hi, wo rächts fixiert sind |

</details>

<details>

<summary><b>CSS-Variable (gseh <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wert | Beschribig |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Haupt-Hintergrundfarb für unterstützti Elemänt i de Uswahl-Charte |
| `--bubble-select-background-color` | `color` | Hintergrundfarb für d Uswahl-Charte |
| `--bubble-select-list-border-radius` | `px` | Rundig vom Dropdown-Menü i de Charte |
| `--bubble-select-list-item-accent-color` | `color` | Akzentfarb für s usgwählt Element |
| `--bubble-select-list-background-color` | `color` | Hintergrundfarb für s Dropdown-Menü i de Charte |
| `--bubble-select-list-width` | `px` | Breiti vom Dropdown-Menü i de Charte |
| `--bubble-select-arrow-background-color` | `color` | Hintergrundfarb für de Dropdown-Pfil |
| `--bubble-select-button-border-radius` | `px` | Rundig vom Uswahl-Button |
| `--bubble-select-border-radius` | `px` | Rundig vo de Uswahl-Charte |
| `--bubble-select-icon-border-radius` | `px` | Rundig vom Icon-Container vo de Uswahl-Charte |
| `--bubble-select-icon-background-color` | `color` | Hintergrundfarb für de Icon-Container vo de Uswahl-Charte |
| `--bubble-select-box-shadow` | Gseh [Box Shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schatte für d Uswahl-Charte |

</details>


#### Bispiel

<details>

<summary>E Uswahl-Charte mit ere Liste vo Szene</summary>

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

Die Charte erlaubt dir, dini `climate`-Entities z stüüre.

> [!TIP]
> S Modus-Uswahlmenü isch en [Sub-Button](#sub-buttons), wo automatisch derfüegt wird bim Erstelle vo de Charte. Du chasch en dänn wie du wottsch ändere oder entferne.

### Klima-Optione

<details>

<summary><b>Optione (YAML + Beschribige)</b></summary>

| Name                     | Typ    | Aaforderig                         | Unterstützti Optione                                  | Beschribig                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Erforderlich**                        | Klima-Entity                                   | D Entity zum Stüüre (z. B. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Jede String                                       | En eigete Name für d Charte. Wenn nöd definiert, wird de Entity-Name azeigt.                                    |
| `icon`                  | string  | Optional                            | Jedes `mdi:`-Icon                                  | En eigete Icon für d Charte. Wenn nöd definiert, wird s Entity-Icon oder `entity-picture` bruucht.                   |
| `force_icon`            | boolean | Optional                            | `true` oder `false` (Standard)                     | Git em Icon d Priorität anstatt em `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` oder `false` (Standard)                     | Zeig oder verstecke de aktuelle Zuestand vo de `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (Standard) oder `false`                     | Zeig oder verstecke de Name vo de Entity.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (Standard) oder `false`                     | Zeig oder verstecke s Icon.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (nur für Entities, wo `target_temp_low` unterstütze) | `true` oder `false` (Standard) | Verstecked d Stüürig vo de tiefe Zieltemperatur, wenn vo de `entity` unterstützt.                                          |
| `hide_target_temp_high` | boolean | Optional (nur für Entities, wo `target_temp_high` unterstütze)| `true` oder `false` (Standard) | Verstecked d Stüürig vo de hohe Zieltemperatur, wenn vo de `entity` unterstützt.                                         |
| `state_color`           | boolean | Optional                            | `true` oder `false` (Standard)                     | Wendet e konstante Hintergrundfarb a, wenn d Klima-Entity aktiv isch.                                              |
| `step` | number | Optional | Jedi Zahl | De Temperaturschritt. |
| `min_temp` | number | Optional | Jedi Zahl | Die Minimaltemperatur. |
| `max_temp` | number | Optional | Jedi Zahl | Die Maximaltemperatur. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Erlaubt d Standardaktione bim Button-Klick z ändere. |
| `tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Klick, wenn nöd definiert wird `more-info` bruucht. |
| `double_tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Doppelklick, wenn nöd definiert wird `none` bruucht. |
| `hold_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Icon-Halte, wenn nöd definiert wird `more-info` bruucht. |                              |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Verschiebt d Klima-Aktionsbuttons a de untere Rand (fixiert) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Macht d untere Aktionsbuttons volli Breiti (Standard: `true` wenn d Position `bottom` isch) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Uusrichtig vo de untere Aktionsbuttons, wenn nöd volli Breiti |
| `card_layout` | string | Optional | `normal` (Standard, wenn nöd i de Section-Aasicht), `large` (Standard, wenn i de Section-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gseh [Karte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Zile (Höchi) (z. B. `2`) |
| `sub_button`            | object  | Optional                            | Gseh [Sub-Buttons](#sub-buttons)                | Füegt agepasst Buttons hi, wo rächts fixiert sind. Nützlich für es Klimamodus-Uswahlmenü.                                  |

</details>

<details>

<summary><b>CSS-Variable (gseh <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wert | Beschribig |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Haupt-Hintergrundfarb für unterstützti Elemänt i de Klima-Charte |
| `--bubble-climate-border-radius` | `px` | Rundig für unterstützti Elemänt i de Klima-Charte |
| `--bubble-climate-button-background-color` | `color` | Hintergrundfarb für d Buttons i de Klima-Charte |
| `--bubble-climate-icon-border-radius` | `px` | Rundig vom Icon-Container vo de Klima-Charte |
| `--bubble-state-climate-fan-only-color` | `color` | Überlagerigsfarb für de Nur-Ventilator-Zuestand |
| `--bubble-state-climate-dry-color` | `color` | Überlagerigsfarb für de Entfeuchte-Zuestand |
| `--bubble-state-climate-cool-color` | `color` | Überlagerigsfarb für de Kühl-Zuestand |
| `--bubble-state-climate-heat-color` | `color` | Überlagerigsfarb für de Heiz-Zuestand |
| `--bubble-state-climate-auto-color` | `color` | Überlagerigsfarb für de Auto-Zuestand |
| `--bubble-state-climate-heat-cool-color` | `color` | Überlagerigsfarb für de Heiz-Kühl-Zuestand |
| `--bubble-climate-accent-color` | `color` | Akzentfarb für d Klima-Charte |
| `--bubble-climate-box-shadow` | Gseh [Box Shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schatte für de Klima-Container. |

</details>


#### Bispiel

<details>

<summary>E Klima-Charte mit emene HVAC-Modus-Dropdown-Menü</summary>

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

Die Charte erlaubt dir, dini Kalender-Entities azeige. De Inhalt isch scrollbar, so chasch problemlos dur di kommende Termin browse.

### Kalender-Optione

<details>

<summary><b>Optione (YAML + Beschribige)</b></summary>

| Name                | Typ    | Aaforderig  | Unterstützti Optione                               | Beschribig                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Jedi Zahl (Minimum: 1)                        | Azahl Kalendertag, für di Termin abgrüeft werde, ab jetzt bis am Ändi vom N-te Tag (Standard: 7) |
| `entities`          | object  | **Erforderlich** | En Kalender-Entity-Objekt (gseh unte)            | D Entity zum Stüüre (z. B. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Erforderlich** | E Kalender-Entity                               | D Kalender-Entity, wo azeigt wird                                                          |
| `entities.color`    | string  | Optional     | E Farb                                         | E eigeti Farb für s Kalender-Chip. Wenn nöd definiert, wird automatisch e Farb gwählt |
| `days`              | number  | Optional     | Jedi Zahl (Minimum: 1)                         | Azahl Kalendertag, für di Termin abgrüeft werde, ab jetzt bis am Ändi vom N-te Tag (Standard: 7) |
| `limit`             | number  | Optional     | E Zahl                                        | D Aazahl Termin, wo uf de Charte azeigt werde                                  |
| `show_end`          | boolean | Optional     | `true` oder `false` (Standard)                     | Zeig oder verstecke d Ändzit vo de Termin                                                    |
| `show_progress`     | boolean | Optional     | `true` (Standard) oder `false`                     | Zeig oder verstecke de Fortschrittsbalke vom Termin                                                     |
| `show_started_events`| boolean | Optional     | `true` (Standard) oder `false`                     | Zeig oder verstecke Termin, wo grad am Laufe sind. Mehrtägigi Termin werde Tag für Tag beurteilt, drum wird nur de laufend Tag verstecket und die chömende Täg bliibed sichtbar |
| `scrolling_effect`  | boolean | Optional | `true` (Standard) oder `false` | Erlaubt em Text z scrolle, wenn de Inhalt grösser isch als de Container |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Erlaubt, Aktione bim Termin-Klick z derfüege. |
| `tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Tag-Klick, wenn nöd definiert wird `none` bruucht. |
| `double_tap_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Tag-Doppelklick, wenn nöd definiert wird `none` bruucht. |
| `hold_action` | object | Optional | Gseh [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d Art vo de Aktion bim Tag-Halte, wenn nöd definiert wird `none` bruucht. |
| `card_layout` | string | Optional | `normal` (Standard, wenn nöd i de Section-Aasicht), `large` (Standard, wenn i de Section-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gseh [Karte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Zile (Höchi) (z. B. `2`) |
| `sub_button` | object | Optional | Gseh [Sub-Buttons](#sub-buttons) | Füeg agepasst Buttons hi, wo rächts fixiert sind |

</details>

<details>

<summary><b>CSS-Variable (gseh <a href="#styling">Styling</a>)</b></summary>

| Variable                                  | Erwarteti Wert | Beschribig                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Haupt-Hintergrundfarb für unterstützti Elemänt i de Kalender-Charte  |
| `--bubble-calendar-border-radius`         | `px`           | Rundig für unterstützti Elemänt i de Kalender-Charte |
| `--bubble-calendar-height`                | `px`           | Höchi vo de Kalender-Charte                                        |

</details>

#### Bispiel

<details>

<summary>E Kalender-Charte mit ere limitierte Aazahl Termin</summary>

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

<summary>E Kalender-Charte mit ere Ändzit und emene Fortschrittsbalke</summary>

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


## Trännlinie

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Die Charte isch e eifachi Trännlinie zum din Pop-up i Kategorie / Abschnitt uufteile. Z.B. Liechter, Geräte, Storen, Istellige, Automatisierige...

### Trännlinie-Optione

<details>

<summary><b>Optione (YAML + Beschribig)</b></summary>

| Name | Type | Aforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `name` | string | Optional, aber empfohle | Jede String | E Name für dini Trännlinie |
| `icon` | string | Optional, aber empfohle | Jedes `mdi:`-Icon | Es Icon für dini Trännlinie |
| `card_layout` | string | Optional | `normal` (Standard usserhalb vo de Sektione-Aasicht), `large` (Standard i de Sektione-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gsehsch [Charte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Reihe (Höchi) (z.B. `2`) |
| `sub_button` | object | Optional | Gsehsch [Sub-Buttons](#sub-buttons) | Fügsch aagpassti Buttons hinzue, wo rächts fix sind |

</details>

<details>

<summary><b>CSS-Variable (gsehsch <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wärt | Beschribig |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Hintergrundfarb für d'Linie i de Trännlinie |

</details>

#### Bispiel

<details>

<summary>E Trännlinie/Abgrenzig für en "Storen"-Abschnitt</summary>

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

## Leeri Spalte

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Die Charte isch da, zum e leeri Spalte usfülle. Das isch nützlich, wenn du en `horizontal-stack` i dim Pop-up hesch mit nur ere Charte. Lueg i d'rächt undere Egge vo däm Screenshot, zum sie (nid) z'gseh.

### Leeri-Spalte-Optione

Die Charte het kei Optione und unterstützt kes [Styling](#styling), aber sie unterstützt d'Layout-Optione für HA-Sektione.

#### Bispiel

<details>

<summary>E leeri Spalte i emene horizontale Stack</summary>

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

## Nur Sub-Buttons

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Die Charte isch nur für Sub-Buttons gedacht. Sie eignet sich perfekt für Menüs, Schnellaktione, informativi Chips oder e fixi Fusszile am undere Rand vo de Site.

> [!IMPORTANT]  
> Die Charte bruucht s'neue Sub-Buttons-Schema. Bruuch `sub_button.bottom`, zum dini Buttons definiere. De Abschnitt `sub_button.main` wird ignoriert.

### Nur-Sub-Buttons-Optione

<details>

<summary><b>Optione (YAML + Beschribig)</b></summary>

| Name | Type | Aforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Erforderlich** | Gsehsch [Sub-Buttons](#sub-buttons) | Definier dini Sub-Buttons mit em Abschnitt `bottom` |
| `hide_main_background` | boolean | Optional | `true` oder `false` (Standard) | Entfernt de Chartehintergrund |
| `footer_mode` | boolean | Optional | `true` oder `false` (Standard) | Fixiert d'Charte am undere Rand vo de Site |
| `footer_full_width` | boolean | Optional | `true` oder `false` (Standard) | Macht d'Fusszile volli Breiti (100%) |
| `footer_width` | number | Optional | Jedi Zahl | Breiti vo de Fusszile i Pixel, wenn `footer_full_width` uf `false` isch |
| `footer_bottom_offset` | number | Optional | Jedi Zahl | Abstand zum undere Rand vo de Site i Pixel (Standard: `16`) |
| `card_layout` | string | Optional | `normal` (Standard usserhalb vo de Sektione-Aasicht), `large` (Standard i de Sektione-Aasicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vo de Charte, gsehsch [Charte-Layouts](#charte-layouts) |
| `rows` | number | Optional | Jedi Zahl | Azahl Reihe (Höchi) (z.B. `2`) |

</details>

<details>

<summary><b>CSS-Variable (gsehsch <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wärt | Beschribig |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Breiti vo de Fusszile, wenn `footer_full_width` uf `false` isch |
| `--bubble-footer-bottom` | `px` | Abstand vo de Fusszile zum undere Rand |
| `--bubble-footer-box-shadow` | gsehsch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box-Schatte für de Fusszile-Container |

</details>

#### Bispiel

<details>

<summary>Chips (wie im Screenshot)</summary>

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

<summary>E fixe Fusszile-Menü</summary>

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

## Sub-Buttons

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

I jeder Charte, wo die Option unterstützt, chasch Sub-Buttons hinzuefüge, zum dini Charte no meh aapasse. Du chasch zum Bispiel en Button erstelle, wo en Vacuum, e Wetter-Charte oder fasch alles chan steure, won dir yfallt. Die Sub-Buttons unterstütze d'Tipp-Aktione und d'meiste Button-Optione.

Sub-Buttons unterstütze jetzt drei Type: **Standard (Button)**, **Slider** und **Dropdown / Uswahl**. Du chasch d'Type i de gliche Charte mische, Sub-Buttons obe oder unde platziere und sie i Gruppe organisiere für erwiterti Layouts.

#### Platzierig und Gruppe vo Sub-Buttons

<details>

<summary><b>Struktur vo de Sub-Buttons (main / bottom + Gruppe)</b></summary>

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

**Hiwis:**
- `main` und `bottom` sind zwei unabhängigi Abschnitt. Sub-Buttons vo `bottom` sind am undere Rand vo de Charte fixiert.
- `main_layout` und `bottom_layout` akzeptiere `inline` (Standard) oder `rows`, zum d'Gruppe vertikal z'stapla.
- Gruppe sind Objekt mit emene `group`-Array und optionale `buttons_layout` (`inline` oder `column`).
- `justify_content` isch nur für **Bottom-Gruppe** verfüegbar (`start`, `center`, `end`, `fill`).
- Wenn Bottom-Sub-Buttons vorhande sind, wechslet d'Charte-Layout automatisch zu `large`, usser du hesch explizit es angers Layout gsetzt.
- Di alt `sub_button`-Array werde immer no unterstützt und als `main`-Abschnitt behandlet.

</details>

### Sub-Buttons-Optione

<details>

<summary><b>Optione (YAML + Beschribig)</b></summary>

| Name | Type | Aforderig | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- | --- |
| `entity` | string | Optional | Jedi Entity | E Entity zum Steure |
| `name` | string | Optional | Jede String | E Name für din Sub-Button, wenn nid definiert wird de Entity-Name aazeigt |
| `icon` | string | Optional | Jedes `mdi:`-Icon | Es Icon für din Sub-Button, wenn nid definiert wird s'Entity-Icon oder s'Entity-Bild aazeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Erzwingt s'Icon, au wenn es Entity-Bild verfüegbar isch |
| `sub_button_type` | string | Optional | `default`, `slider` oder `select` | Wähl de Sub-Button-Typ |
| `show_background` | boolean | Optional | `true` (Standard) oder `false` | Zeigt en Hintergrund für din Sub-Button, ändert d'Farb je nach Entity-Status |
| `state_background` | boolean | Optional | `true` (Standard) oder `false` | Bruucht d'Status-Farb, wenn d'Entity `on` isch |
| `light_background` | boolean | Optional | `true` (Standard) oder `false` | Bruucht d'Liecht-Farb für de Hintergrund, wenn verfüegbar |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeigt oder verstecklet de Status vo dere `entity` |
| `show_name` | boolean | Optional | `true` oder `false` (Standard) | Zeigt oder verstecklet de Name |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verstecklet s'Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeigt d'letschti Änderigszit vo dere `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeigt d'letschti Aktualisierigszit vo dere `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeigt es Attribut vo dere `entity` under em `name` |
| `attribute` | string | Optional (erforderlich, wenn `show_attribute` uf `true` gsetzt isch) | Es Attribut vo dere `entity` | S'Attribut, wo aazeigt wird (z.B. `brightness`) |
| `select_attribute` | string | Optional | E Attribut-Lischte vo dere `entity` (gsehsch d'unterstützte Optione obe) | Die Attribut-Lischte macht bim Klick es Dropdown uf (z.B. `effect_list`) |
| `show_arrow` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verstecklet de Dropdown-Pfil für Uswahl-Sub-Buttons |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt em Text z'scrolle, wenn de Inhalt grösser als de Container isch |
| `tap_action` | object | Optional | Gsehsch [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d'Art vo Aktion bim Klick uf de Sub-Button, wenn nid definiert wird `more-info` bruucht |
| `double_tap_action` | object | Optional | Gsehsch [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d'Art vo Aktion bim Doppelklick uf de Sub-Button, wenn nid definiert wird `none` bruucht |
| `hold_action` | object | Optional | Gsehsch [Aktione](#tippe--doppeltipp--und-halte-aktione) | Definiert d'Art vo Aktion bim Halte uf de Sub-Button, wenn nid definiert wird `more-info` bruucht |
| `fill_width` | boolean | Optional | `true` oder `false` | Fült d'verfüegbari Breiti (Standard: `false` für main, `true` für bottom) |
| `width` | number oder string | Optional | Jedi Zahl oder CSS-Läng | Aagpassti Breiti (`px` für de main-Abschnitt, `%` für de bottom-Abschnitt standardmässig) |
| `custom_height` | number | Optional | Jedi Zahl | Aagpassti Höchi i Pixel |
| `content_layout` | string | Optional | `icon-left` (Standard), `icon-top`, `icon-bottom`, `icon-right` | Platzierig vom Icon im Sub-Button |
| `always_visible` | boolean | Optional | `true` oder `false` (Standard) | **Nur Slider.** Zeigt de Slider immer, statt en bim Tipp z'öffne |
| `show_button_info` | boolean | Optional | `true` oder `false` (Standard) | **Nur Slider.** Zeigt Icon/Name/Status, wenn `always_visible` aktiviert isch |
| `visibility` | object oder list | Optional | Gsehsch [Bedingige](#bedingige) | Zeigt oder verstecklet de Sub-Button je nach Bedingige |
| `hide_when_parent_unavailable` | boolean | Optional | `true` oder `false` (Standard) | Verstecklet de Sub-Button, wenn d'Entity vo de übergeordnete Charte nid verfüegbar isch |
| `css_class` | string | Optional | Jede String | E zuesätzlichi CSS-Klasse uf em Sub-Button, zum ihn i dim [Styling](#styling) aaziele, egal wie er heisst (zum Bispil git `My value` `.my-value`) |

</details>

<details>

<summary><b>Slider-Sub-Button-Optione (gliich wie Button-Slider)</b></summary>

<br>

Slider-Sub-Buttons unterstütze die gliche Slider-Optione wie Button-Slider, inklusiv:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-Variable (gsehsch <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteti Wärt | Beschribig |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Randradius für d'Sub-Buttons |
| `--bubble-sub-button-background-color` | `color` | Hintergrundfarb für d'Sub-Buttons |
| `--bubble-sub-button-outline` | `box-shadow` | Umriss, wo zu eme Sub-Button oder eme Schieberegler dezue chunnt, aber nur denn, wenn das Element die gliich Farb übercho wie s Charte dehinder, was es unsichtbar machti (setz en uf `none`, zum en entferne) |
| `--bubble-sub-slider-border-radius` | `px` | Randradius für Slider-Sub-Buttons |
| `--bubble-sub-slider-background-color` | `color` | Hintergrundfarb für Slider-Sub-Buttons |
| `--bubble-sub-slider-height` | `px` | Höchi für immer sichtbari Slider-Sub-Buttons |
| `--bubble-sub-slider-outline` | `box-shadow` | Umriss vo nur de Slider-Sub-Buttons, fallt zrugg uf `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Textfarb uf hälle Sub-Button-Hintergründ |

</details>

#### Bispiel

<details>

<summary>En Button mit paar Sub-Buttons, zum e Vacuum-Charte mache (wie im Screenshot)</summary>

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

<summary>En Button-Slider mit emene Sub-Button, wo d'Helligkeit zeigt, und eim, wo s'Liecht ab-/aaschaltet (wie im Screenshot)</summary>

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

<summary>En Button, wo d'Innen- und Ussetemperatur mit em Wätter für hüt und morn zeigt (mit Screenshot)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Läider isch bi mir immer bewöukt, aber alli Icons ändere sich je nach em Wätter.

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

## Charte-Layouts

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card unterstützt d'Sektione-Aasicht vo Home Assistant vollständig, du chasch s'Charte-Layout ändere, zum d'Charte grösser mache, und au d'Azahl Spalte oder Reihe ändere, wo d'Charte i dere Sektione-Aasicht bruche söll (nur bi de Charte, wo die Option unterstütze). Die Layouts werde au i alle andere Aasicht-Type unterstützt.

<details>

<summary><b>Verfüegbari Charte-Layouts</b></summary>

| Layout | Beschribig |
| --- | --- |
| `normal` | S'reguläre Layout (nid für d'Sektione-Aasicht optimiert) |
| `large` | Es grösseres Layout, wo sich uf d'gwählte Reihe i de Sektione-Aasicht aapasst (für d'Sektione-Aasicht optimiert) |
| `large-2-rows` | Es grösseres Layout mit 2 Reihe Sub-Buttons, wo sich uf d'gwählte Reihe i de Sektione-Aasicht aapasst (für d'Sektione-Aasicht optimiert) |
| `large-sub-buttons-grid` | Das Layout zeigt d'Sub-Buttons i emene Gitter, `rows` muess mindeschtens uf `2` gsetzt si.

</details>

#### Bispiel

<details>

<summary>En grosse Button, wo Energie-Statistike mit 2 Reihe Sub-Buttons zeigt (mit Screenshot)</summary>

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

<summary>En grosse Button mit mehrere Reihe und 12 Sub-Buttons</summary>

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

## Bedingige

Es paar Optione werde über Bedingige gsteueret, gschriebe genau wie die vom [bedingte Charte](https://www.home-assistant.io/dashboards/conditional/) vo Home Assistant:

- `visibility` uf eme [Sub-Button](#sub-buttons), zum ihn azeige oder verstecke
- `trigger` uf eme [Pop-up](#pop-up), zum es öffne, wenn d Bedingige erfüllt sind
- `checkConditionsMet(conditions, hass)` i dine [Templates](#templates), wenn du d Antwort i dim eigene Code bruuchsch

Alli Bedingigstype vo Home Assistant werde uusgwertet: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, und d Gruppe `and`, `or` und `not`. D Bedingige vom Bedingigs-Buuwer vo Home Assistant funktioniere au, die wo nach ihrem Domain benennt sind wie `sun.is_up`, `light.is_on`, `zone.in_zone` oder `temperature.is_value`, mit ihrne Iistellige `target`, `options`, `behavior` und `for`.

<details>

<summary><b>Bispil</b></summary>

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
> D Bedingige werde i dim Browser uusgwertet, drum chönd die weneg, wo de Home Assistant-Server bruuched, nöd exakt si: Sunnenufgang und Sunnenuntergang werde us de Entität `sun.sun` gläse statt neu brechnet, und e `for`-Duur wird ab de letschte Zuestandsänderig gmässe, ohni d Gschicht vom recorder.
>
> `view_columns` wird akzeptiert, gaht aber immer duure, wil Bubble Card nie die isch, wo d Spalte vo dinere Aasicht aaordnet. En Bedingigstyp, wo Bubble Card nöd kennt, meldet sich eimal i de Konsole vo dim Browser, statt lutlos z scheitere, so chasch en Tippfähler vo re fählende Funktion underscheide.

<br>

---

<br>

## Tippe-, Doppeltipp- und Halte-Aktione

Du chasch au d'Standard-Tipp-Aktione, Doppeltipp-Aktione und Halte-Aktione vo Home Assistant bruche, bi de Charte, wo die Option unterstütze. Das erlaubt dir zum Bispiel, s'"Meh-Info"-Fänschter aazeige, wenn du es Button-Icon hebsch, oder en Dienscht uszfüehre, wenn en Sub-Button drückt wird.

**Hiwis: Wenn e `double_tap_action` konfiguriert isch, het de reguläri `tap_action` e Verzögerig vo 200ms, zum e Doppeltipp
z'erkenne. Wenn die Verzögerig unerwünscht isch, setz `double_tap_action` uf `none`, zum d'Doppeltipp-Erkennig z'deaktiviere.**

### Aktion-Optione

<details>

<summary><b>Optione (YAML + Beschribig)</b></summary>

| Name | Type | Unterstützti Optione | Beschribig |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Uszfüehrendi Aktion |
| `target` | object |  | Funktioniert nur mit `call-service`. Folgt de [Home-Assistant-Syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Jede Pfad vo dim Dashboard | Pfad, wohin navigiert wird (z.B. `'#kitchen'`, zum en Pop-up öffne), wenn d'Aktion als navigate definiert isch |
| `url_path` | string | Jede Link | URL, wo bim Klick geöffnet wird (z.B. `https://www.google.com`), wenn d'Aktion `url` isch |
| `service` | string | Jede Dienscht | Dienscht, wo ufgrüeft wird (z.B. `media_player.media_play_pause`), wenn `action` als `call-service` definiert isch |
| `data` oder `service_data` | object | Beliebigi Dienscht-Date | Dienscht-Date, wo mitgschickt werde (z.B. `entity_id: media_player.kitchen`), wenn `action` als `call-service` definiert isch |
| `confirmation` | object | Gsehsch [Bestätigung](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Zeigt es Bestätigungs-Pop-up (nid vo Bubble Card), überschribt s'Standard-`confirmation`-Objekt |

</details>

#### Bispiel

<details>

<summary>En Button, wo en Pop-up öffnet</summary>

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

Du chasch eigeni Styles hinzuefüege, um s'CSS vo allne Charte z'ändere **ohni card-mod z'bruuche**, uf vier Arte:

- Gang im Editor zur Charte, wo du ändere wottsch, und navigier denn zu _Styling options > Custom styles & JS templates_, und füeg dini eigene Styles hinzue (lueg d'Tipps und Bispiel unte a).
- Gang im Editor (oder in [YAML](#module)) zur Charte, wo du ändere wottsch, und navigier denn zu _Modules_, erstell denn es neus Modul (es wird für alli Charte verfüegbar sii), oder gang zum **Module Store**, um es verfüegbars Modul z'installiere (meh Detail zu Module findsch [unte](#module)).
- In ere [Theme](https://www.home-assistant.io/integrations/frontend/#defining-themes)-Datei, indem du CSS-Variable in YAML hinzuefüegsch (die sind in jeder Charte-Dokumentation obe verfüegbar). Das erlaubt globali Änderige.

  <details>
  
  <summary>Bispiel</a></summary>
  
  <br>

  Kopier d'Zeile `Bubble:` nöd, das isch dr Name vom Theme, wo du bruuchsch. Du muesch au s'`--` vo de Variable ewägnäh.

  Du muesch d'Aktion [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) usfüehre, um s'Theme nach jeder Änderig neu z'lade.

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
  
- In YAML, indem du `styles: |` hinzuefüegsch, gfolgt vo dine eigene Styles (lueg d'Tipps und Bispiel unte a).

> [!TIP]  
> **Um z'verstah, weli Style-Klasse ändert werde chönd**, chasch en Blick in de Ordner [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) i däm Repository werfe. In jedem Charte-Ordner findsch e Datei mit em Name `styles.css`. Die Datei enthaltet alli agwandte Styles. Das erlaubt viel meh Möglichkeite als CSS-Variable, aber es muess eizeln zu jeder Charte hinzuegfüegt werde.
> 
> Du findsch au vieli [Bispiel us dr Community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), oder e paar us em [Home Assistant Forum](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/), wenn du chli suechsch.
>
> S'Bubble-Theme für Home Assistant (wie uf de Screenshots) findsch [da](https://github.com/Clooos/Bubble).
>
> Es Tutorial-Video chunt bald uf mim [YouTube-Kanal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Bitte beachte, dass du bi einigne scho definierte CSS-Styles evtl. `!important;` hinzuefüege muesch (lueg d'Bispiel unte).

> [!TIP]  
> Sub-Buttons chönd über namebasierti Klasse azielt werde. Zum Bispiel cha en Sub-Button mit em Name "My sub-button" mit `.my-sub-button` gstyled werde. Slider-Sub-Buttons zeige au `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> E namebasierti Klasse ändert, wenn du en Sub-Button umbenennsch, und si wird übersetzt, wenn de Name übersetzt wird. Setz `css_class` uf em Sub-Button, zum e eigeni Klasse z übercho, wo sich nie verschiebt, egal wie er heisst und egal i welere Sprach.

#### Bispiel

<details>

<summary>D'Schriftgrössi vo irgend ere Bubble Card ändere</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>D'Hintergrundfarb vomene einzelne Button in eme horizontale Button-Stapel ändere</summary>

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

<summary>D'Hintergrundfarb vonere Charte ändere</summary>

<br>

Das da funktioniert bi allne Bubble-Card-Types (usser bi de Pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Das da macht s'Gliiche, aber nume für e Button-Charte (funktioniert au für dr Pop-up-Header): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Um d'Farb z'ändere, wänn's `on` isch, lueg d'Style-Templates unte a.

</details>

<details>

<summary>D'Farb vomene Button-Slider ändere</summary>

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

<summary>D'Linieifarb vonere Trännlinie ändere</summary>

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

<summary>D'Farb vomene Icon ändere</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Für es Icon vomene horizontale Button-Stapel.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>D'Hintergrundfarb vomene Icon-Container ändere</summary>

<br>

Das da funktioniert bi allne Bubble-Card-Types (usser bi de Pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Das da macht s'Gliiche für dr Pop-up-Header: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>D'Grössi vo de Sub-Buttons ändere (perfekt fürs grossi Layout)</summary>

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

<summary>D'Hintergrundfarb vom zwöite Sub-Button ändere</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>D'Grössi vomene Icon ändere</summary>

<br>

Fürs Hauptsymbol.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Für d'Sub-Button-Icons.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Es Bild statt en Icon in eme Sub-Button bruuche</summary>

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

Lad eifach das Bild in en Ordner "pictures" (oder wie du wottsch) im "www"-Ordner vo Home Assistant ufe.

</details>

<details>

<summary>Fortgschrittes Bispiel: E horizontali Reihe vo Sub-Buttons erstelle (mit Screenshot)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ich lieb das da würklich, ich bruuch's als Header uf mim Dashboard.

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

## Templates

**Bubble Card unterstützt kei Jinja-Templates**, aber fortgschrittni Nutzer chönd Templates direkt in JS in ihre [eigene Styles](#styling) hinzuefüege. Zum Bispiel erlaubt das, dynamisch en Icon, d'Texte oder d'Farbe vomene Element z'ändere, es Element bedingt z'zeige oder z'verstecke (wie en Sub-Button), oder fasch alles basierend uf eme Zuestand, emene Attribut und meh.

> [!TIP]  
> Meh Informatione zu de JS-Templates [da](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mis Rat: **lueg immer in dr Browser-Konsole nache**, um sicher z'sii, dass alles korrekt funktioniert.

> [!IMPORTANT]  
> **Alli Templates, wo kei CSS-Eigeschaft ändere, müend am Änd platziert werde! Wie s'Ändere vomene Icon, emene Text oder irgend eme Element.**

#### Verfüegbari Variable und Funktione

<details>

<summary>Variable</summary>

<br>

Du hesch Zuegriff uf die Variable in de meischte Charte:

- `state` git dr Zuestand vo dinere definierte `entity` zrugg.
  
- `entity` git dini Entity zrugg, wo du wie `switch.test` i däm Bispiel definiert hesch.
  
- `icon` cha so bruucht werde, um en Icon z'ändere `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` git dr Zuestand vo dinere erschte Sub-Button-`entity` zrugg, `[0]` isch dr Zuestand vom erschte Sub-Button, `[1]` vom zwöite...
  
- `subButtonIcon[0]` cha so bruucht werde, um s'Icon vom erschte Sub-Button z'ändere `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` isch s'Icon vom erschte Sub-Button, `[1]` vom zwöite...
  
- `card` git s'Charte-Element im DOM zrugg.
  
- `hass` isch e fortgschritteni Variable, wo dir no meh Kontrolle git, zum Bispiel chasch so dr Zuestand vo `light.kitchen` zruggäh `hass.states['light.kitchen'].state` oder es Attribut so `hass.states[entity].attributes.brightness`.

- `this` git vieli nützlechi Informatione über dis Setup und Dashboard zrugg, bruuch das nume, wenn du weisch, was du machsch.

</details>

<details>

<summary>Funktione</summary>

<br>

Du hesch Zuegriff uf alli globale JS-Funktione, aber au uf:

- `getWeatherIcon` cha bruucht werde, um en Wetter-Icon basierend uf eme Zuestand zruggzgäh, wo s'Wätter aazeigt. Zum Bispiel chasch so mache `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, um s'Icon vom dritte Sub-Button uf s'hütige Wätter-Icon z'ändere, `.forecast[1]?.condition` isch für morn...

  Du muesch dfür en Template-Sensor erstelle. Da isch, was du in dini `configuration.yaml` hinzuefüege chasch:
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
- `checkConditionsMet(conditions, hass)` git `true` zrugg, wenn e Lischte vo [Bedingige](#bedingige) erfüllt isch, zum Bispil `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` cha bruucht werde, um en Zuestand z'übersetze (cha au bruucht werde, um en Zuestandseinheit z'übercho, ohni sie manuell hinzuefüege z'müesse).
- `hass.formatEntityAttributeValue(state, "attribute")` cha bruucht werde, um es Attribut z'übersetze (cha au bruucht werde, um en Zuestandseinheit z'übercho, ohni sie manuell hinzuefüege z'müesse).

</details>

#### Bispiel

Du findsch vieli Bispiel unte, aber au sehr fortgschritteni Templates uf mim [Patreon](https://www.patreon.com/c/Clooos), wie eis (mis Liäblings-), wo bis zu vier bedingti Badges rund um d'Icons vonere Charte erlaubt. Es isch au e super Art, alli Möglichkeite vo Bubble Card eigene Styles und Templates z'lehre!

<details>
<summary>Bispiel vo mim Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home-Assistant-ähnlechi Badges zu irgend ere Charte hinzuefüege</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Formatiert Datum und Ziit in ere Trännlinie zeige, ohni e Entity z'bruuche</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">En Sub-Button-Zuestand uf zwei Zeile zeige</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Labels und Icons innerhalb vomene Uswahl-Sub-Button azpasse</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Es bliibends Erinnerigs-Pop-up hinzuefüege, wo nume erschiint, wenn's nötig isch</a>
</p>

<br>

</details>

<details>

<summary>D'Hintergrundfarb vomene Button ändere, wo rot isch bi <code>off</code> und blau bi <code>on</code></summary>

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

<summary>D'Hintergrundfarb vomene Button basierend uf ere Entity für dr horizontale Button-Stapel ändere</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>En Sub-Button bedingt aazeige/verstecke</summary>

<br>

Das da zeigt dr erscht Sub-Button nume, wenn mi Vacuum stecke bliibt.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Das da zeigt en Sub-Button, wenn dr Batteriestand under 10 % isch. Nützlech mit eme Sub-Button, wo "Low battery" azeigt.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>En Icon oder Sub-Button-Icon bedingt ändere</summary>

<br>

Das da ändert es Button-Icon nume, wenn en Vacuum stecke bliibt.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Das da ändert s'Icon vom erschte Sub-Button nume, wenn en Vacuum stecke bliibt.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>D'Farb vomene Icon oder Sub-Button-Icon bedingt ändere</summary>

<br>

Das da ändert d'Farb vomene Button-Icon basierend uf sim Zuestand.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Das da ändert d'Farb vomene Sub-Button-Icon basierend uf sim Zuestand. `.bubble-sub-button-1` isch dr erscht Sub-Button, ersetz `1`, wenn du es anders Sub-Button-Icon ändere wottsch.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>En Ventilator-Icon bedingt animiere</summary>

<br>

Das da dräiht es Button-Icon, wenn en Ventilator `on` isch.
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

<summary>Texte templiere (wie Name oder Zuestand)</summary>

<br>

Das da ändert en Button-Name/-Zuestand mit "Momentan isch's sunnig" je nach dim Wätter.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
oder wenn's für Sub-Buttons agwandet wird:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Wenn du dr Zuestand (`.bubble-state`) templiere wottsch, aktivier nöd `show_state: true`, aktivier eifach `show_attribute: true` ohni es Attribut.

</details>

<details>

<summary>Fortgschrittes Bispiel: D'Farb vomene Sub-Button ändere, wenn es Pop-up offe isch</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Fortgschrittes Bispiel: Dr Name vonere Trännlinie basierend uf eme Zuestand templiere, übersetzt in dini Sprach</summary>

<br>

Du chasch `hass.formatEntityState(state)` bruuche, um en Zuestand z'übersetze, und `hass.formatEntityAttributeValue(state, "attribute")`, um es Attribut z'übersetze.

Das da ändert dr Name und s'Icon basierend uf em Wätter, "Nuageux" heisst "Cloudy" (bewölkt) uf Französisch.

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

## Module

Module sind e mächtigi Funktion, wo dir erlaubt, dini eigene Styles und Templates z'speichere, widerz'verwände und über alli dini Bubble Cards z'teile. Statt dr gliich Code i mehreri Charte z'kopiere und iizfüege, chasch es Modul erstelle und es abwände, wo au immer du's bruuchsch. Das macht d'Verwaltig vom Ussehe vo dim Dashboard viel eifacher und effizienter.

Aber die Funktion isch no viel mächtiger als das, si erlaubt dir, echti Funktione sälber im Bubble-Card-Editor hinzuefüege, mit allne Standard-[Home-Assistant-Formular](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)-Optione!  
Dr Objekt-Selector isch verbesseret worde, um live Änderige z'zeige und Attribut korrekt z'unterstütze.

Es Modul cha au uf de Charte-Uswähler vo Home Assistant antworte, näbe de iigebaute [Entitäte-Vorschläg](#entitäte-vorschläg): bruuch `suggestions` für die Charte, wo's im Voruus cha beschriibe, und `suggestions_code`, wenn si us dinere Iirichtig müend brechnet werde, zum Bispil es Pop-up, wo us allne Entitäte vom Beriich uufbaut wird, wo die uusgwählti Entität dezue ghört. Beidi Schlüssel sind [da](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions) dokumentiert.

Du chasch au dr **Module Store** duresueche, um [vo dr Community erstellti Module](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) z'finde und z'installiere, oder dini eigene Kreatione teile!

> [!TIP]
> Dr Code vomene Modul funktioniert genau gliich wie dr Code im `styles`-Abschnitt vonere Charte. Alli gliiche Variable und Funktione vom Abschnitt [Templates](#templates) sind verfüegbar.

<br>

### Erschtinstallation

> [!IMPORTANT]
> Sit v3.1.0 isch Bubble Card Tools s'empfohlnigi Speicher-Backend für Module. D'älteri Template-Sensor-Method funktioniert für bestehendi Setups witerhin, aber neui Module und Module-Store-Funktione sind über Bubble Card Tools am beschte unterstützt.

D'Bubble-Card-Tools-Integration aktiviert dr Module-Editor und dr Module Store und speicheret Module als eizelni YAML-Datäie. Bestehendi Module werde automatisch migriert.

D'Installations- und Konfigurationsschritt sind da erklärt:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Dr Module-Editor

Du chasch uf dr Module-Editor über d'Iistellige vo jeder Charte zuegriffe, unter em Abschnitt **Module**. Dr Editor bitet zwei Haupt-Tabs:

#### Tab "Mini Module"

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Dää Tab zeigt alli dini installierte Module und erlaubt dir:

- Bestehendi Module uf d'aktuelli Charte **azwände**
- E neus Modul vo Grund uf z'**erstelle**
- Bestehendi Module mit ere Live-Vorschau z'**bearbeite**
- Module, wo du nümm bruuchsch, z'**lösche**
- Module z'**sueche** und z'**sortiere** (alphabetisch, kürzlech, aktivi zersch)
- **Globale Status** setze, damit es Modul automatisch uf alli Charte agwandet wird
- Module für Backup oder zum Teile z'**importiere/exportiere**
- **Entitäte-Vorschläg schriibe** im Modul-Editor, under **Optional: Entitäte-Vorschläg**, damit dis Modul im Charte-Uswähler vo Home Assistant aabote wird. Sowohl d Regle als au die brechnete Vorschläg werde während em Schriibe prüeft, en Fähler dert verhinderet s Spichere, und d Vorschau zeigt die vorgschlagene Charte für jedi Entität, wo du uuswählsch

#### Tab "Module Store"

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Dää Tab zeigt [alli verfüegbare Module vo dr Community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) und erlaubt dir:

- Alli vo dr Community erstellte Module z'**durestöbere**
- Module nach Name, Kompatibilität oder Stichwort z'**sueche** und z'filtere
- Module mit eim Klick z'**installiere**
- Installierti Module z'**aktualisiere**, wenn neui Versione verfüegbar sind

> [!TIP]
> Im Editor chasch nöd unterstützti Module aktiviere, um Module z'teste, wo no nöd als kompatibel mit eme bestimmte Charte-Typ markiert sind.

<br>

### Wie mer Module bruucht

#### Es neus Modul erstelle

<details>

<summary>Klick zum Ufklappe</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gang zum Editor vo irgend ere Charte und klapp dr Abschnitt **Module** uf.
2. Klick uf **Neus Modul erstelle**.
3. Füll d'Modulinformatione us.
4. Schriib din CSS- und/oder JavaScript-Template-Code im Editor **Code**.
5. (Optional) Erstell e eigeni Konfigurations-UI im Abschnitt **Editor** (wie dr Farbwähler im Screenshot obe, vollständigi Dokumentation verfüegbar [da](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Optional) Schriib dini **Entitäte-Vorschläg**, damit dis Modul im Charte-Uswähler vo Home Assistant aabote wird. S Panel prüeft während em Tippe, was du schriibsch, und sini Vorschau zeigt die vorgschlagene Charte sälber für die Entität vo dinere Wahl.
7. Klick uf **Speichere**.

Dis Modul isch jetzt bereit, uf jeder vo dine Charte bruucht z'werde!

<br>

</details>

#### Es Modul uf e Charte azwände

<details>

<summary>Klick zum Ufklappe</summary>

<br>

- **Über dr Editor:**

  - Gang zum Editor vo dr Charte, wo du s'Modul drufwände wottsch.
  - Klapp dr Abschnitt **Module** uf.
  - Klick uf s'Modul, wo du us dr Lischte azwände wottsch.
  - Klick under "Azwände uf" uf "Die Charte". S'Modul isch jetzt aktiv. Du chasch mehreri Module uf die gliich Charte azwände.

- **Über YAML:**

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

#### Es Modul global azwände

<details>

<summary>Klick zum Ufklappe</summary>

<br>

Du chasch es Modul so iistelle, dass es automatisch uf alli Bubble Cards agwandet wird:

**Das isch für Module mit eme Editor nöd verfüegbar, da die e spezifischi Konfiguration bruuched, um z'funktioniere.**

- **Über dr Editor:**

  - Find dis Modul im Module-Editor im Tab **Mini Module**.
  - Aktivier dr Schalter **Alli Charte** näbe em Modulname.
  - S'Modul wird jetzt automatisch uf alli Charte agwandet.
 
- **Über YAML:**

  In dinere Modul-YAML-Konfiguration (in `bubble-modules.yaml`) füeg eifach `is_global: true` hinzue.

<br>

</details>

#### E eizelni Charte vomene globale Modul usschliesse

<details>

<summary>Klick zum Ufklappe</summary>

<br>

Wenn du es globals Modul hesch, aber es vonere bestimmte Charte usschliesse witt:

- **Über dr Editor:**
  
  - Im Abschnitt **Module** vo dr Charte gsehsch du di globale Module ufgliste.
  - Klick uf es globals Modul, deaktivier "Die Charte", um's vo dere bestimmte Charte usz'schliesse.

- **Über YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Dis Modul im Module Store teile

<details>

<summary>Klick zum Ufklappe</summary>

<br>

Um dis Modul im Module Store z'teile, klick im Module-Editor unte bi "Modul exportiere" uf "Für GitHub kopiere" und füeg dr Inhalt in e neui Diskussion i dr Kategorie [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) ii. **Bearbeit d'Beschriibig** (falls nötig), **s'Bispiel** (für YAML-Nutzer), und vergiss nöd, **mindestens en Screenshot** für dr Module Store hinzuefüege.

**Dis Modul isch grad danach verfüegbar** (nach eme Store-Refresh), also kontrollier nomal, dass alles korrekt gschribe isch und s'Modul wie erwartet funktioniert. Du chasch s'Modul natürlech nach em Teile witer bearbeite/aktualisiere.

<br>

</details>

#### Versionsverwaltig

<details>

<summary>Klick zum Ufklappe</summary>

<br>

Dr Module Store checkt automatisch, öb Aktualisierige für installierti Module verfüegbar sind. Wenn Aktualisierige verfüegbar sind:

1. Gsehsch du e Aktualisierigs-Azeig im Tab **Module Store**.
2. Klick uf **Aktualisiere** bi Module mit verfüegbare Aktualisierige.
3. Bestätig d'Aktualisierig im Module Store.

<br>

</details>

#### Unterstützti Charte-Typ definiere

<details>

<summary>Klick zum Ufklappe</summary>

<br>

Einigi Module sind evtl. nöd mit allne Charte-Typ kompatibel. Du chasch aagäh, weli Charte es Modul unterstützt.  
Wenn du witt, dass es Modul mit **allne Charte** kompatibel isch, lass eifach s'Feld `supported` wäg (oder bruuch d'Option **Alli Charte** im Editor).

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

### Bispiel

<details>
<summary>Eifachs Styling-Modul</summary>

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
<summary>Modul mit eigener Konfiguration</summary>

<br>

Das Modul isch [da](https://github.com/Clooos/Bubble-Card/discussions/1231) verfüegbar.

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

Meh Bispiel findsch im Module Store, oder [da](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalisierig

Bubble Card redt dini Sprach. Sin Editor isch i die 64 Sprache übersetzt, wo Home Assistant unterstützt, und überall wo Home Assistant scho es Wort für öppis het, wird sini eigeni Formulierig übernoh, so liest du i beidne Oberflächene die gliiche Begriff.

Zunterscht im Editor, näbem Versionsnummere, folgt en **Automatisch**-Schalter de Sprach vo dim Home Assistant. Schalt en ab und de ganz Editor gaht zrugg uf Änglisch, was praktisch isch zum eme Tutorial folge oder es Problem melde. Dini Wahl wird i dim Browser gmerkt.

Die Dokumentation isch au übersetzt, [i 62 Sprache](languages.md), alli usser britischs Änglisch, wo s Original liest. Die Site sind für alli offe, drum cha e Formulierig, wo nöd zu dim eigene Home Assistant passt, i es paar Klick korrigiert werde. D änglisch Version bliibt d Referänz für de Inhalt sälber.

<br>

---

<br>

## Hilf

Zöger nöd, es Issue z'eröffne, wenn öppis nöd wie erwartet funktioniert. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Hesch Frage oder Gedanke zu Bubble Card? Witt dini Dashboards oder Entdeckige teile? Du chasch is Home Assistant Forum, uf s'Bubble-Card-Subreddit oder in dr GitHub-Discussions-Sektion.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Mitmache

Beiträg sind willkomme! Öb Bugfixe, neui Funktione, Übersetzige oder Dokumentations-Verbesserige, zöger nöd, e Pull Request z'eröffne.

Bevor du aafangsch, lis bitte dr [Entwickler-Guide](DEVELOPERS.md), wo erklärt, wie du dini lokali Umgäbig ufsetzisch, s'Projekt buildisch und dini Änderige testisch.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Spände

Ich widme dr grösst Teil vo mim Freiziit dää Projekt, um's so guet wie möglech z'mache. Wenn du mini Arbeit schätzisch, wär jedi Spändi e super Art, dini Unterstützig z'zeige 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Merci a alli für eui Unterstützig, ihr sind alli mini grösst Motivation!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
