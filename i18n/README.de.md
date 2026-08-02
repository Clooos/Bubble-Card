<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Diese Seite ist eine automatische Übersetzung. Im Zweifelsfall gilt die [englische Originaldokumentation](../README.md). Klingt ein Satz seltsam? Jede Hilfe ist willkommen, und [diese Seite zu korrigieren](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.de.md) dauert nur eine Minute: GitHub kümmert sich um den Fork und den Pull Request. Vielen Dank im Voraus! 🍻

# Bubble Card

🌐 **[Diese Seite in einer anderen Sprache lesen](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card ist eine minimalistische und anpassbare Kartensammlung für Home Assistant, mit modernen Pop-ups und einem integrierten Module Store mit über 100 Modulen aus der Community.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Inhaltsverzeichnis

**[`Installation`](#installation)**  **[`Konfiguration`](#konfiguration)**  **[`Pop-up`](#pop-up)**  **[`Horizontaler Button-Stapel`](#horizontaler-button-stapel)**  **[`Button`](#button)**  **[`Medienplayer`](#medienplayer)**  **[`Abdeckung`](#abdeckung)**  **[`Auswahl`](#auswahl)**  **[`Klima`](#klima)**  **[`Kalender`](#kalender)**  **[`Trennlinie`](#trennlinie)**  **[`Leere Spalte`](#leere-spalte)**  **[`Nur Sub-Buttons`](#nur-sub-buttons)**  **[`Sub-Buttons`](#sub-buttons)**  **[`Kartenlayouts`](#kartenlayouts)**  **[`Aktionen`](#tipp--doppeltipp--und-halten-aktionen)**  **[`Styling`](#styling)**  **[`Templates`](#templates)**  **[`Module`](#module)**  **[`Hilfe`](#hilfe)**  **[`Mitwirken`](#mitwirken)**  **[`Spenden`](#spenden)**

<br>

## Installation

**Niedrigste unterstützte Home Assistant Version:** 2023.9.0

<details>

<summary>Ohne HACS</summary>

<br>

1. Lade diese Datei herunter: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Lege diese Datei in deinem `<config>/www` Ordner ab
3. Klicke auf deinem Dashboard auf das Icon oben rechts und dann auf `Dashboard bearbeiten`
4. Klicke erneut auf dieses Icon und dann auf `Ressourcen verwalten`
5. Klicke auf `Ressource hinzufügen`
6. Kopiere Folgendes und füge es ein: `/local/bubble-card.js?v=1`
7. Klicke auf `JavaScript-Modul` und dann auf `Erstellen`
8. Gehe zurück und aktualisiere deine Seite
9. Du kannst jetzt unten rechts auf `Karte hinzufügen` klicken und nach `Bubble Card` suchen
10. Nach jedem Update der Datei musst du `/local/bubble-card.js?v=1` bearbeiten und die Version auf eine beliebige höhere Zahl ändern

Falls es nicht funktioniert, leere einfach deinen Browser-Cache.

</details>

<details>

<summary>Mit HACS (empfohlen)</summary>

<br>

Mit dieser Methode erhältst du Updates direkt über den Home Assistant Community Store

1. Falls HACS noch nicht installiert ist, lade es gemäß der Anleitung auf [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) herunter
2. Führe die HACS-Erstkonfiguration gemäß der Anleitung auf [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) durch
3. Gehe in deiner Seitenleiste zu "HACS"
4. Suche nach "Bubble Card" oder klicke auf den blauen Button unten
5. Klicke auf "Herunterladen"
6. Gehe zurück auf dein Dashboard, klicke auf das Icon oben rechts und dann auf `Dashboard bearbeiten`
7. Du kannst jetzt unten rechts auf `Karte hinzufügen` klicken und nach `Bubble Card` suchen

Falls es nicht funktioniert, versuche den Cache deines Browsers bzw. deiner App zu leeren (bei Bedarf auf allen deinen Geräten).

#### Videos

Du kannst auch auf meinem YouTube-Kanal vorbeischauen, dort findest du Schritt-für-Schritt-Videos.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguration

Alle Optionen lassen sich im Home Assistant Editor konfigurieren. In der Dokumentation unten findest du aber mehr Details sowie das YAML.

<details>

<summary><b>Hauptoptionen (YAML + Beschreibung)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `type` | string | **Erforderlich** | `custom:bubble-card` | Typ der Karte |
| `card_type` | string | **Erforderlich** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` oder `sub-buttons` | Typ der Bubble Card, siehe unten |
| `styles` | object list | Optional | Beliebige CSS-Stylesheets | Erlaubt dir, das CSS deiner Bubble Card anzupassen, siehe [Styling](#styling) |

</details>

<details>

<summary><b>Globale CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Rahmenradius für alle unterstützten Elemente |
| `--bubble-main-background-color` | `color` | Primäre Hintergrundfarbe für alle unterstützten Elemente |
| `--bubble-secondary-background-color` | `color` | Sekundäre Hintergrundfarbe für alle unterstützten Elemente |
| `--bubble-accent-color` | `color` | Akzentfarbe für alle unterstützten Elemente |
| `--bubble-icon-border-radius` | `px` | Icon-Rahmenradius für alle unterstützten Elemente |
| `--bubble-icon-background-color` | `color` | Icon-Hintergrundfarbe für alle unterstützten Elemente |
| `--bubble-sub-button-border-radius` | `px` | Rahmenradius für alle Sub-Buttons |
| `--bubble-sub-button-background-color` | `color` | Hintergrundfarbe für alle Sub-Buttons |
| `--bubble-box-shadow` | siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für alle unterstützten Elemente |
| `--bubble-border` | siehe [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Rahmen für alle unterstützten Karten |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Schau dir dieses [Video](https://www.youtube.com/watch?v=0hSQOlBxKKI) an, um Bubble Card und seine Möglichkeiten kennenzulernen.** Mein YouTube-Kanal ist noch ziemlich neu und konzentriert sich auf Tutorials zu Home Assistant und Bubble Card. Zögere nicht, ihn zu abonnieren, um die Sichtbarkeit meines Kanals zu erhöhen. Vielen Dank im Voraus!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Mit dieser Karte kannst du ein Pop-up mit beliebigem Inhalt erstellen. Jedes Pop-up ist **standardmäßig ausgeblendet** und lässt sich öffnen, indem sein Link (z. B. `'#pop-up-name'`) angesteuert wird, mit jeder Karte, die die `navigate` [Aktion](#tipp--doppeltipp--und-halten-aktionen) unterstützt, oder mit dem enthaltenen [horizontalen Button-Stapel](#horizontaler-button-stapel).

> [!TIP]
> ### Pop-up-Auslöser 
> Mit dieser Funktion kannst du ein Pop-up basierend auf dem Zustand einer beliebigen Entität öffnen, zum Beispiel ein "Sicherheit"-Pop-up mit einer Kamera, wenn eine Person vor deinem Haus steht. Du kannst auch einen Umschalt-Helfer (input_boolean) erstellen und dessen Öffnen/Schließen in einer Automatisierung auslösen.
> <details>
> <summary>Ein Pop-up öffnen, wenn ein <code>binary_sensor</code> auf <code>on</code> steht</summary>
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
> ### Verschiedene Möglichkeiten, ein Pop-up zu schließen 
> Es gibt viele Möglichkeiten, ein Pop-up zu schließen. Du kannst zum Beispiel von der Pop-up-Kopfzeile nach unten wischen, innerhalb des Pop-ups lange nach unten wischen, auf dem Desktop Escape drücken, den Hash aus der URL entfernen oder einfach den Schließen-Button drücken.
>


### Pop-up-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `hash` | string | **Erforderlich** | Ein beliebiger eindeutiger Hash (z. B. `'#kitchen'`) mit ' ' | So wirst du dein Pop-up öffnen |
| `popup_style` | string | Optional | `bubble` (Standard) oder `classic` | Legt den visuellen Stil des Pop-ups fest |
| `popup_mode` | string | Optional | `default` (Standard), `fit-content`, `centered` oder `adaptive-dialog` | Legt den Layout-Modus des Pop-ups fest |
| `with_bottom_offset` | boolean | Optional | `true` oder `false` (Standard) | Nur zusammen mit `popup_mode: fit-content` oder `adaptive-dialog` verwendet. Wendet auf Mobilgeräten einen unteren Abstand an, nützlich, wenn dein Dashboard eine Fußzeilenkarte enthält. |
| `full_width_on_mobile` | boolean | Optional | `true` oder `false` (Standard) | Nur zusammen mit `popup_mode: centered` verwendet. Erweitert das Pop-up auf Mobilgeräten auf die volle Bildschirmbreite, nützlich auf kleineren Displays. |
| `performance_mode` | string | Optional | `default` (Standard) oder `performance` | Optimiert die Öffnungsanimation des Pop-ups. `performance` verzögert das Rendern des Inhalts und die Hintergrundunschärfe leicht und deaktiviert außerdem die Backdrop-Unschärfe, falls gesetzt. |
| `auto_close` | string | Optional | Ein Timeout in Millisekunden (z. B. `10000` für 10 s) | Schließt das Pop-up nach einem Timeout automatisch |
| `close_on_click` | boolean | Optional | `true` oder `false` (Standard) | Schließt das Pop-up automatisch nach jeder Interaktion |
| `close_by_clicking_outside` | boolean | Optional | `true` (Standard) oder `false` | Schließt das Pop-up durch Klicken außerhalb davon |
| `width_desktop` | string | Optional | Ein beliebiger CSS-Wert | Breite auf dem Desktop (auf Mobilgeräten standardmäßig `100%`) |
| `margin` | string | Optional | Ein beliebiger CSS-Wert | Verwende dies **nur**, wenn dein Pop-up auf Mobilgeräten nicht gut zentriert ist (z. B. `13px`) |
| `margin_top_mobile` | string | Optional | Ein beliebiger CSS-Wert | Oberer Abstand auf Mobilgeräten (z. B. `-56px`, wenn deine Kopfzeile ausgeblendet ist) |
| `margin_top_desktop` | string | Optional | Ein beliebiger CSS-Wert | Oberer Abstand auf dem Desktop (z. B. `50vh` für ein halbhohes Pop-up oder `calc(100vh - 400px)` für eine feste Höhe von `400px`) |
| `bg_color` | string | Optional | Ein beliebiger hex, rgb oder rgba Wert | Die Hintergrundfarbe deines Pop-ups (z. B. `#ffffff` für einen weißen Hintergrund) |
| `bg_opacity` | string | Optional | Ein beliebiger Wert von `0` bis `100` | Die Hintergrund-Deckkraft deines Pop-ups (z. B. `100` für keine Transparenz) |
| `bg_blur` | string | Optional | Ein beliebiger Wert von `0` bis `100` | Der Hintergrund-Unschärfeeffekt deines Pop-ups, **das funktioniert nur, wenn `bg_opacity` nicht auf `100` gesetzt ist** (z. B. `0` für keine Unschärfe)|
| `shadow_opacity` | string | Optional | Ein beliebiger Wert von `0` bis `100` | Die Schatten-Deckkraft deines Pop-ups (z. B. `0`, um ihn auszublenden) |
| `hide_backdrop` | boolean | Optional | `true` oder `false` (Standard) | Setze dies beim ersten Pop-up deines Haupt-Dashboards auf true, um den Backdrop bei allen Pop-ups zu deaktivieren. |
| `background_update` | boolean | Optional | `true` oder `false` (Standard) | Pop-up-Inhalt im Hintergrund aktualisieren (nicht empfohlen) |
| `trigger_entity` | string | Optional | Eine beliebige Entität | Öffnet dieses Pop-up basierend auf dem Zustand einer beliebigen Entität |
| `trigger_state` | string | Optional (**Erforderlich**, wenn `trigger_entity` definiert ist) | Ein beliebiger Entitätszustand | Entitätszustand, der das Pop-up öffnet |
| `trigger_close` | boolean | Optional | `true` oder `false` (Standard) | Schließt das Pop-up, wenn `trigger_state` abweicht |
| `open_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Löst eine Aktion aus, wenn sich das Pop-up öffnet |
| `close_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Löst eine Aktion aus, wenn sich das Pop-up schließt |
| `show_header` | boolean | Optional | `true` (Standard) oder `false` | Blendet die Pop-up-Kopfzeile komplett ein/aus |
| `show_previous_button` | boolean | Optional | `true` oder `false` (Standard) | Zeigt einen Zurück-Button neben dem Schließen-Button an und navigiert, wenn verfügbar, zurück zum vorherigen Pop-up |
| `show_close_button` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verbirgt den Schließen-Button, während der Rest der Kopfzeile sichtbar bleibt |
| `buttons_position` | string | Optional | `right` (Standard) oder `left` | Position der Schließen- und Zurück-Buttons in der Kopfzeile |
| `cards` | list | Optional | Jede Bubble Card, Home Assistant Karte oder benutzerdefinierte Karte | Legt den Inhalt deines Pop-ups fest. Siehe das Pop-up-Beispiel unten. |
| Du hast außerdem Zugriff auf [alle Button-Einstellungen](#button) für die Kopfzeile des Pop-ups. | | Optional | | Wenn nicht definiert, wird keine Kopfzeile angezeigt |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Rahmenradius für das Pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Primäre Hintergrundfarbe für unterstützte Elemente des Pop-ups |
| `--bubble-pop-up-background-color` | `color` | Hintergrundfarbe des Pop-ups |
| `--bubble-backdrop-background-color` | `color` | Hintergrundfarbe für den Backdrop |
| Du hast außerdem Zugriff auf [alle CSS-Variablen des Buttons](#button-optionen) für die Kopfzeile des Pop-ups. | | |

</details>


### Eigenständiges Pop-up-Format (v3.2.0+)

Seit v3.2.0 verwenden Pop-ups ein neues eigenständiges Format, bei dem die Inhaltskarten mit der Option `cards` direkt innerhalb des Pop-ups definiert werden. Das sorgt für bessere Performance und ein neues, abschnittsbasiertes Bearbeitungserlebnis mit Drag-and-drop.


#### Beispiele

<details>

<summary>Ein Pop-up (eigenständiges Format)</summary>

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

<summary>Ein Button, um das Pop-up zu öffnen</summary>

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

## Horizontaler Button-Stapel

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Diese Karte ist ein guter Begleiter zur Pop-up-Karte und ermöglicht es dir, die entsprechenden Pop-ups zu öffnen. Außerdem kannst du damit jede Seite deines Dashboards öffnen. Zusätzlich kannst du deine Bewegungs-/Belegungssensoren hinzufügen, sodass sich die Reihenfolge der Buttons an den Raum anpasst, den du gerade betreten hast. Diese Karte ist scrollbar, bleibt sichtbar und dient als Fußzeile.

> [!IMPORTANT]  
> Diese Karte muss die letzte in deiner Ansicht sein (nach allen Karten und Pop-ups). Sie darf sich in keinem Stapel befinden.

### Optionen des horizontalen Button-Stapels

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Erforderlich** | Der Pop-up-Hash (z. B. `'#kitchen'`) mit ' ' oder ein beliebiger Link | Ein zu öffnender Link |
| `1_name` | string | Optional | Beliebige Zeichenkette | Ein Name für deinen Button |
| `1_icon` | string | Optional | Ein beliebiges `mdi:`-Icon | Ein Icon für deinen Button |
| `1_entity` | string | Optional | Ein beliebiges Licht oder eine Lichtgruppe | Zeigt die Farbe dieses Lichts im Hintergrund an |
| `1_pir_sensor` | string | Optional | Ein beliebiger Binärsensor | Mindestens ein PIR-Sensor oder mehr für `auto_order`, tatsächlich funktioniert das auch mit jedem Entitätstyp, du kannst zum Beispiel Lichtgruppen hinzufügen, und die Reihenfolge ändert sich anhand der zuletzt geänderten Zustände. |
| `auto_order` | boolean | Optional | `true` oder `false` (Standard) | Ändert die Reihenfolge der Buttons anhand des letzten Änderungszeitpunkts der `_pir_sensor`, **muss `false` sein, wenn du keinen `_pir_sensor` in deiner Konfiguration hast** |
| `margin` | string | Optional | Ein beliebiger CSS-Wert | Verwende dies **nur**, wenn dein `horizontal-buttons-stack` auf Mobilgeräten nicht richtig zentriert ist (z. B. `13px`) |
| `width_desktop` | string | Optional | Ein beliebiger CSS-Wert | Breite auf dem Desktop (auf Mobilgeräten standardmäßig `100%`) |
| `is_sidebar_hidden` | boolean | Optional | `true` oder `false` (Standard) | Korrigiert die Position des horizontalen Button-Stapels, wenn die Seitenleiste auf dem Desktop ausgeblendet ist (nur wenn du sie selbst durch eine Anpassung ausgeblendet hast) |
| `rise_animation` | boolean | Optional | `true` (Standard) oder `false` | Setze dies auf `false`, um die Animation zu deaktivieren, die nach dem Laden der Seite abgespielt wird |
| `highlight_current_view` | boolean | Optional | `true` oder `false` (Standard) | Hebt den aktuellen Hash / die aktuelle Ansicht mit einer sanften Animation hervor |
| `hide_gradient` | boolean | Optional | `true` oder `false` (Standard) | Setze dies auf `false`, um den Verlauf auszublenden |

> [!IMPORTANT]  
> Die Variablen, die mit einer Zahl beginnen, definieren deine Buttons. Ändere einfach diese Zahl, um weitere Buttons hinzuzufügen (siehe Beispiel unten).

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Eckenradius für die Buttons des horizontalen Button-Stapels |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Hintergrundfarbe für die Buttons des horizontalen Button-Stapels |

</details>


#### Beispiel

<details>

<summary>Ein horizontaler Button-Stapel, der sich anhand von Belegungssensoren neu anordnet</summary>

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

Diese Karte ist sehr vielseitig. Sie kann als **Schalter**, **Slider**, **Zustands-** oder **Name/Text**-Button verwendet werden.

> [!TIP]
> ### Was sind die Unterschiede zwischen den einzelnen Button-Typen?
>
> - **Schalter-Button:** Dies ist der Standard-Button-Typ. Standardmäßig schaltet er eine Entität um, und seine Hintergrundfarbe ändert sich je nach Zustand der Entität oder der Farbe eines Lichts. Du kannst die Aktion im Bereich **Tippverhalten auf der Karte** ändern.
>
> - **Slider-Button:** Mit diesem Button-Typ kannst du Entitäten mit einstellbaren Bereichen steuern. Er ist ideal zum Dimmen von Lichtern, und seine Füllfarbe passt sich der Lichtfarbe an. Du kannst ihn auch zum Anzeigen von Werten verwenden, zum Beispiel eines Batteriestands.
>   Unterstützte Entitäten für Slider:
>   - Licht (Helligkeit)
>   - Medienplayer (Lautstärke)
>   - Abdeckung (Position)
>   - Ventilator (Prozent)
>   - Klima (Temperatur)
>   - Input number und number (Wert)
>   - Batteriesensor (Prozent, nur Lesezugriff)
>
>   Du kannst auch jede Entität mit einem numerischen Zustand verwenden, indem du den Entitätsfilter in den **Slider-Einstellungen** deaktivierst und dann die Werte für `min` und `max` festlegst. Diese Option ist schreibgeschützt.
>
> - **Zustands-Button:** Perfekt zum Anzeigen von Informationen eines Sensors oder einer beliebigen Entität. Beim Drücken zeigt er den „Mehr Infos"-Dialog der Entität an. Seine Hintergrundfarbe ändert sich nicht.
>
> - **Name/Text-Button:** Der einzige Button-Typ, der keine Entität benötigt. Damit kannst du einen kurzen Text, einen Namen oder einen Titel anzeigen. Du kannst ihm auch Aktionen hinzufügen. Seine Hintergrundfarbe ändert sich nicht.

### Button-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Eine beliebige Entität | Eine zu steuernde Entität |
| `button_type` | string | Optional | `switch` (Standard), `slider`, `state` oder `name` | Das Verhalten deines Buttons |
| `name` | string | Optional | Beliebige Zeichenkette | Ein Name für deinen Button, falls nicht definiert, wird der Entitätsname angezeigt |
| `icon` | string | Optional | Ein beliebiges `mdi:`-Icon | Ein Icon für deinen Button, falls nicht definiert, wird das Entitäts-Icon oder das `entity-picture` angezeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Bevorzugt das Icon gegenüber dem `entity-picture` |
| `use_accent_color` | boolean | Optional (Standard `false`) | **Nur für Lichter.** Verwendet die Akzentfarbe des Themes anstelle der Lichtfarbe.                         |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeigt oder verbirgt den Zustand deiner `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verbirgt den Namen |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verbirgt das Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeigt den Zeitpunkt der letzten Änderung deiner `entity` an |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeigt den Zeitpunkt der letzten Aktualisierung deiner `entity` an |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeigt ein Attribut deiner `entity` unter ihrem `name` an |
| `attribute` | string | Optional (erforderlich, wenn `show_attribute` auf `true` gesetzt ist) | Ein Attribut deiner `entity` | Das anzuzeigende Attribut (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt Text zu scrollen, wenn der Inhalt die Größe seines Containers überschreitet |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, siehe unten | Ermöglicht das Ändern der Standardaktionen beim Klick auf den Button. |
| `tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Definiert die Aktion beim Klick auf das Icon, falls nicht definiert, wird `more-info` verwendet |
| `double_tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Definiert die Aktion beim Doppelklick auf das Icon, falls nicht definiert, wird `none` verwendet |
| `hold_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Definiert die Aktion beim Halten des Icons, falls nicht definiert, wird `more-info` verwendet |
| `card_layout` | string | Optional | `normal` (Standard außerhalb einer Bereichsansicht), `large` (Standard in einer Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Eine beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |
| `sub_button` | object | Optional | Siehe [Sub-Buttons](#sub-buttons) | Fügt angepasste Buttons hinzu, die rechts fixiert sind |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Haupthintergrundfarbe für unterstützte Elemente im Button |
| `--bubble-button-border-radius` | `px` | Eckenradius für den Button |
| `--bubble-button-icon-border-radius` | `px` | Eckenradius für den Icon-Container des Buttons |
| `--bubble-button-icon-background-color` | `color` | Hintergrundfarbe für den Icon-Container des Buttons |
| `--bubble-light-white-color` | `color` | Ersetzt die Standard-Weißfarbe von Licht-Buttons/-Slidern |
| `--bubble-light-color` | `color` | Ersetzt die Farbe von Licht-Buttons/-Slidern (auch bei RGB-Lichtern) |
| `--bubble-button-box-shadow` | Siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für den Button |

</details>

Diese Optionen sind nur verfügbar, wenn `button_type` auf `slider` gesetzt ist.

<details>

<summary><b>Slider-Optionen (YAML + Beschreibungen)</b></summary>

| Name                  | Typ    | Erforderlichkeit                     | Beschreibung                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Der Minimalwert des Sliders. Für benutzerdefinierte Slider.                                                    |
| `max_value`             | number  | Optional                        | Der Maximalwert des Sliders. Für benutzerdefinierte Slider.                                                    |
| `step`                  | number  | Optional                        | Die Schrittweite des Sliders.                                                                           |
| `tap_to_slide`          | boolean | Optional (Standard `false`)      | Aktiviert das bisherige Slider-Verhalten, bei dem du tippst, um den Slider zu aktivieren, statt ihn zu halten.        |
| `relative_slide`        | boolean | Optional (Standard `false`)     | Aktualisiert den Wert relativ zum Startwert statt zum ersten Berührungspunkt.                      |
| `read_only_slider`      | boolean | Optional (Standard `false`)      | Macht den Slider schreibgeschützt. Wird für einige Entitäten wie Sensoren automatisch aktiviert.                        |
| `slider_live_update`    | boolean | Optional (Standard `false`)      | Der Entitätszustand wird während des Schiebens aktualisiert. **Diese Funktion ist nicht für alle Entitäten empfehlenswert.**        |
| `slider_fill_orientation` | string | Optional | `left` (Standard), `right`, `top`, `bottom` | Ändert die Füllrichtung des Sliders |
| `slider_value_position` | string | Optional | `right` (Standard), `left`, `center`, `hidden` | Position der Wertanzeige |
| `invert_slider_value` | boolean | Optional (Standard `false`) | Kehrt die Slider-Richtung um (100 % Füllung entspricht dem Minimum). Nicht verfügbar für Farb-Slider. |
| `light_slider_type` | string | Optional | `brightness` (Standard), `hue`, `saturation`, `white_temp` | **Nur für Lichter.** Wählt den Slider-Modus |
| `cover_slider_type` | string | Optional | `position` (Standard), `tilt_position` | **Nur für Abdeckungen.** Wählt den Slider-Modus (Position oder Neigung) |
| `hue_force_saturation` | boolean | Optional (Standard `false`) | **Nur für Lichter (Farbton-Modus).** Erzwingt die Sättigung beim Anpassen des Farbtons |
| `hue_force_saturation_value` | number | Optional (Standard `100`) | **Nur für Lichter (Farbton-Modus).** Erzwungener Sättigungswert (0-100) |
| `use_accent_color` | boolean | Optional (Standard `false`) | **Nur für Lichter (Helligkeits-Modus).** Verwendet die Akzentfarbe des Themes anstelle der Lichtfarbe |
| `allow_light_slider_to_0` | boolean | Optional (Standard `false`)    | **Nur für Lichter.** Erlaubt dem Slider, 0 % zu erreichen, wodurch das Licht ausgeschaltet wird. Nicht verfügbar mit `tap_to_slide`. |
| `light_transition`      | boolean | Optional (Standard `false`)      | **Nur für Lichter.** Aktiviert sanfte Helligkeitsübergänge für unterstützte Lichter.                           |
| `light_transition_time` | number  | Optional (Standard `500`)        | **Nur für Lichter.** Die Übergangszeit in Millisekunden. Erfordert `light_transition: true`.            |

</details>

#### Beispiele

<details>

<summary>Ein Slider-Button, der die Helligkeit eines Lichts steuern kann</summary>

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

<summary>Ein Button mit weiteren Optionen</summary>

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

## Medienplayer

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Mit dieser Karte kannst du eine Medienplayer-Entität steuern.

### Medienplayer-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Ein beliebiger Medienplayer | Der zu steuernde Medienplayer |
| `name` | string | Optional | Beliebige Zeichenkette | Ein Name für deinen Medienplayer, falls nicht definiert, wird der Entitätsname angezeigt |
| `icon` | string | Optional | Ein beliebiges `mdi:`-Icon | Ein Icon für deinen Medienplayer, falls nicht definiert, wird das Entitäts-Icon oder das `entity-picture` angezeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Bevorzugt das Icon gegenüber dem `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeigt oder verbirgt den Zustand deiner `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verbirgt den Namen |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verbirgt das Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeigt den Zeitpunkt der letzten Änderung deiner `entity` an |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeigt den Zeitpunkt der letzten Aktualisierung deiner `entity` an |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeigt ein Attribut deiner `entity` unter ihrem `name` an |
| `attribute` | string | Optional (erforderlich, wenn `show_attribute` auf `true` gesetzt ist) | Ein Attribut deiner `entity` | Das anzuzeigende Attribut (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt Text zu scrollen, wenn der Inhalt die Größe seines Containers überschreitet |
| `min_volume` | number | Optional | Eine beliebige Zahl | Der Minimalwert des Lautstärke-Sliders. |
| `max_volume` | number | Optional | Eine beliebige Zahl | Der Maximalwert des Lautstärke-Sliders. |
| `cover_background` | boolean | Optional | `true` oder `false` (Standard) | Verwendet ein unscharfes Medien-Cover als Kartenhintergrund. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Ermöglicht das Ändern der Standardaktionen beim Klick auf den Button. |
| `tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Definiert die Aktion beim Klick auf das Icon, falls nicht definiert, wird `more-info` verwendet. |
| `double_tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Definiert die Aktion beim Doppelklick auf das Icon, falls nicht definiert, wird `none` verwendet. |
| `hold_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Definiert die Aktion beim Halten des Icons, falls nicht definiert, wird `more-info` verwendet. |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Verschiebt die Cover-Aktions-Buttons nach unten (fixiert) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Zeigt die unteren Aktions-Buttons in voller Breite an (Standard: `true`, wenn die Position `bottom` ist) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Ausrichtung der unteren Aktions-Buttons, wenn nicht in voller Breite |
| `card_layout` | string | Optional | `normal` (Standard außerhalb einer Bereichsansicht), `large` (Standard in einer Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Eine beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |
| `sub_button` | object | Optional | Siehe [Sub-Buttons](#sub-buttons) | Fügt angepasste Buttons hinzu, die rechts fixiert sind |
| `hide` | object | Optional | Siehe unten | Blendet Buttons auf der Karte aus |

#### Optionen zum Ausblenden

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` oder `false` (Standard) | Blendet den Wiedergabe/Pause-Button aus |
| `volume_button` | boolean | Optional | `true` oder `false` (Standard) | Blendet den Lautstärke-Button aus |
| `previous_button` | boolean | Optional | `true` oder `false` (Standard) | Blendet den Zurück-Button aus |
| `next_button` | boolean | Optional | `true` oder `false` (Standard) | Blendet den Weiter-Button aus |
| `power_button` | boolean | Optional | `true` oder `false` (Standard) | Blendet den Ein/Aus-Button aus |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Haupthintergrundfarbe für den Medienplayer |
| `--bubble-media-player-border-radius` | `px` | Eckenradius für den Medienplayer |
| `--bubble-media-player-buttons-border-radius` | `px` | Eckenradius für die Medienplayer-Buttons |
| `--bubble-media-player-slider-background-color` | `color` | Hintergrundfarbe für den Lautstärke-Slider |
| `--bubble-media-player-icon-border-radius` | `px` | Eckenradius für den Icon-Container des Medienplayers |
| `--bubble-media-player-icon-background-color` | `color` | Hintergrundfarbe für den Icon-Container des Medienplayers |
| `--bubble-media-player-box-shadow` | Siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für den Medienplayer |

</details>


#### Beispiele

<details>

<summary>Ein Medienplayer mit allen Optionen</summary>

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

## Abdeckung

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Mit dieser Karte kannst du deine `cover`-Entitäten steuern.

### Abdeckungs-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlich | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Jede Abdeckung | Eine zu steuernde Abdeckung |
| `name` | string | Optional | Beliebiger Text | Ein Name für deine Abdeckung, wenn nicht definiert, wird der Entitätsname angezeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Bevorzugt das Icon gegenüber dem `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeigt den Zustand deiner `entity` an oder blendet ihn aus |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeigt den Namen an oder blendet ihn aus |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeigt das Icon an oder blendet es aus |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeigt an, wann deine `entity` zuletzt geändert wurde |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeigt an, wann deine `entity` zuletzt aktualisiert wurde |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeigt ein Attribut deiner `entity` unter ihrem `name` an |
| `attribute` | string | Optional (erforderlich, wenn `show_attribute` auf `true` gesetzt ist) | Ein Attribut deiner `entity` | Das anzuzeigende Attribut (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Lässt Text durchlaufen, wenn der Inhalt die Größe seines Containers überschreitet |
| `icon_open` | string | Optional | Jedes `mdi:`-Icon | Ein Icon für deine geöffnete Abdeckung, wenn nicht definiert, wird das Standard-Icon für geöffnete Abdeckungen angezeigt |
| `icon_close` | string | Optional | Jedes `mdi:`-Icon | Ein Icon für deine geschlossene Abdeckung, wenn nicht definiert, wird das Standard-Icon für geschlossene Abdeckungen angezeigt |
| `icon_up` | string | Optional | Jedes `mdi:`-Icon | Ein Icon für deinen Öffnen-Button, wenn nicht definiert, wird das Standard-Icon für geöffnete Abdeckungen angezeigt |
| `icon_down` | string | Optional | Jedes `mdi:`-Icon | Ein Icon für deinen Schließen-Button, wenn nicht definiert, wird das Standard-Icon für geschlossene Abdeckungen angezeigt |
| `open_service` | string | Optional | Jeder Dienst oder jedes Skript | Ein Dienst zum Öffnen deiner Abdeckung, standardmäßig `cover.open_cover` |
| `stop_service` | string | Optional | Jeder Dienst oder jedes Skript | Ein Dienst zum Stoppen deiner Abdeckung, standardmäßig `cover.stop_cover` |
| `close_service` | string | Optional | Jeder Dienst oder jedes Skript | Ein Dienst zum Schließen deiner Abdeckung, standardmäßig `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (Standard), `bottom`, `left`, `right`, `hidden` | Position der Neigungs-Buttons (nur sichtbar, wenn die Abdeckung Neigung unterstützt) |
| `open_tilt_service` | string | Optional | Jeder Dienst oder jedes Skript | Ein Dienst zum Öffnen der Neigung, standardmäßig `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Jeder Dienst oder jedes Skript | Ein Dienst zum Schließen der Neigung, standardmäßig `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Ermöglicht das Ändern der Standardaktionen beim Klick auf den Button. |
| `tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Klick auf das Icon fest, wenn nicht definiert, wird `more-info` verwendet. |
| `double_tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Doppelklick auf das Icon fest, wenn nicht definiert, wird `none` verwendet. |
| `hold_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Halten des Icons fest, wenn nicht definiert, wird `more-info` verwendet. |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Verschiebt die Bedienelemente nach unten (fixiert) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Zeigt die unteren Bedienelemente in voller Breite an (Standard: `true`, wenn die Position `bottom` ist) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Ausrichtung der unteren Bedienelemente, wenn nicht in voller Breite |
| `card_layout` | string | Optional | `normal` (Standard außerhalb der Bereichsansicht), `large` (Standard in der Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |
| `sub_button` | object | Optional | Siehe [Sub-Buttons](#sub-buttons) | Fügt benutzerdefinierte Buttons hinzu, die rechts fixiert sind |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Haupthintergrundfarbe für unterstützte Elemente in der Abdeckungs-Karte |
| `--bubble-cover-border-radius` | `px` | Randradius für die Abdeckungs-Karte |
| `--bubble-cover-icon-border-radius` | `px` | Randradius für den Icon-Container der Abdeckungs-Karte |
| `--bubble-cover-icon-background-color` | `color` | Hintergrundfarbe für den Icon-Container der Abdeckungs-Karte |
| `--bubble-cover-box-shadow` | Siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für die Abdeckungs-Karte |
| `--bubble-button-box-shadow` | Siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für Buttons in der Abdeckungs-Karte |

</details>


#### Beispiel

<details>

<summary>Eine Karte, die ein Rollo steuern kann</summary>

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

## Auswahl

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Mit dieser Karte kannst du ein Dropdown-Menü für deine `input_select`- / `select`-Entitäten hinzufügen. Diese Karte unterstützt außerdem die Sub-Buttons und alle gemeinsamen Bubble Card-Funktionen.

> [!TIP]
> Du kannst auch Auswahl-Sub-Buttons haben, wenn du möchtest, diese Funktion ist in allen Karten verfügbar, die die Sub-Buttons unterstützen.

### Auswahl-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlich | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Erforderlich** | Jede Entität | Eine zu steuernde Entität |
| `name` | string | Optional | Beliebiger Text | Ein Name für deine Auswahl, wenn nicht definiert, wird der Entitätsname angezeigt |
| `icon` | string | Optional | Jedes `mdi:`-Icon | Ein Icon für deine Auswahl, wenn nicht definiert, wird das Entitäts-Icon oder das `entity-picture` angezeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Bevorzugt das Icon gegenüber dem `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeigt den Zustand deiner `entity` an oder blendet ihn aus |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Zeigt den Namen an oder blendet ihn aus |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeigt das Icon an oder blendet es aus |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeigt an, wann deine `entity` zuletzt geändert wurde |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeigt an, wann deine `entity` zuletzt aktualisiert wurde |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeigt ein Attribut deiner `entity` unter ihrem `name` an |
| `attribute` | string | Optional (erforderlich, wenn `show_attribute` auf `true` gesetzt ist) | Ein Attribut deiner `entity` | Das anzuzeigende Attribut (z. B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Lässt Text durchlaufen, wenn der Inhalt die Größe seines Containers überschreitet |
| `tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Klick auf das Icon fest, wenn nicht definiert, wird `more-info` verwendet. |
| `double_tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Doppelklick auf das Icon fest, wenn nicht definiert, wird `none` verwendet. |
| `hold_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Halten des Icons fest, wenn nicht definiert, wird `more-info` verwendet. |
| `card_layout` | string | Optional | `normal` (Standard außerhalb der Bereichsansicht), `large` (Standard in der Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |
| `sub_button` | object | Optional | Siehe [Sub-Buttons](#sub-buttons) | Fügt benutzerdefinierte Buttons hinzu, die rechts fixiert sind |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Haupthintergrundfarbe für unterstützte Elemente in der Auswahl-Karte |
| `--bubble-select-background-color` | `color` | Hintergrundfarbe für die Auswahl-Karte |
| `--bubble-select-list-border-radius` | `px` | Randradius für das Dropdown-Menü in der Karte |
| `--bubble-select-list-item-accent-color` | `color` | Akzentfarbe für das ausgewählte Element |
| `--bubble-select-list-background-color` | `color` | Hintergrundfarbe für das Dropdown-Menü in der Karte |
| `--bubble-select-list-width` | `px` | Breite des Dropdown-Menüs in der Karte |
| `--bubble-select-arrow-background-color` | `color` | Hintergrundfarbe für den Dropdown-Pfeil |
| `--bubble-select-button-border-radius` | `px` | Randradius für den Auswahl-Button |
| `--bubble-select-border-radius` | `px` | Randradius für die Auswahl-Karte |
| `--bubble-select-icon-border-radius` | `px` | Randradius für den Icon-Container der Auswahl-Karte |
| `--bubble-select-icon-background-color` | `color` | Hintergrundfarbe für den Icon-Container der Auswahl-Karte |
| `--bubble-select-box-shadow` | Siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für die Auswahl-Karte |

</details>


#### Beispiele

<details>

<summary>Eine Auswahl-Karte mit einer Liste von Szenen</summary>

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

Mit dieser Karte kannst du deine `climate`-Entitäten steuern.

> [!TIP]
> Das Modusauswahl-Menü ist ein [Sub-Button](#sub-buttons), der beim Erstellen der Karte automatisch hinzugefügt wird. Du kannst ihn anschließend nach Belieben anpassen oder entfernen.

### Klima-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name                     | Typ    | Erforderlich                         | Unterstützte Optionen                                  | Beschreibung                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Erforderlich**                        | Klima-Entität                                   | Die zu steuernde Entität (z. B. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Beliebiger Text                                       | Ein benutzerdefinierter Name für die Karte. Wenn nicht definiert, wird der Entitätsname angezeigt.                                    |
| `icon`                  | string  | Optional                            | Jedes `mdi:`-Icon                                  | Ein benutzerdefiniertes Icon für die Karte. Wenn nicht definiert, wird das Entitäts-Icon oder das `entity-picture` verwendet.                   |
| `force_icon`            | boolean | Optional                            | `true` oder `false` (Standard)                     | Bevorzugt das Icon gegenüber dem `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` oder `false` (Standard)                     | Zeigt den aktuellen Zustand der `entity` an oder blendet ihn aus.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (Standard) oder `false`                     | Zeigt den Namen der Entität an oder blendet ihn aus.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (Standard) oder `false`                     | Zeigt das Icon an oder blendet es aus.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (nur für Entitäten mit Unterstützung für `target_temp_low`) | `true` oder `false` (Standard) | Blendet die Regelung der unteren Zieltemperatur aus, sofern von der `entity` unterstützt.                                          |
| `hide_target_temp_high` | boolean | Optional (nur für Entitäten mit Unterstützung für `target_temp_high`)| `true` oder `false` (Standard) | Blendet die Regelung der oberen Zieltemperatur aus, sofern von der `entity` unterstützt.                                         |
| `state_color`           | boolean | Optional                            | `true` oder `false` (Standard)                     | Wendet eine konstante Hintergrundfarbe an, wenn die Klima-Entität eingeschaltet ist.                                              |
| `step` | number | Optional | Beliebige Zahl | Der Temperaturschritt. |
| `min_temp` | number | Optional | Beliebige Zahl | Die minimale Temperatur. |
| `max_temp` | number | Optional | Beliebige Zahl | Die maximale Temperatur. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Ermöglicht das Ändern der Standardaktionen beim Klick auf den Button. |
| `tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Klick auf das Icon fest, wenn nicht definiert, wird `more-info` verwendet. |
| `double_tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Doppelklick auf das Icon fest, wenn nicht definiert, wird `none` verwendet. |
| `hold_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Halten des Icons fest, wenn nicht definiert, wird `more-info` verwendet. |                              |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Verschiebt die Klima-Aktions-Buttons nach unten (fixiert) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Zeigt die unteren Aktions-Buttons in voller Breite an (Standard: `true`, wenn die Position `bottom` ist) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Ausrichtung der unteren Aktions-Buttons, wenn nicht in voller Breite |
| `card_layout` | string | Optional | `normal` (Standard außerhalb der Bereichsansicht), `large` (Standard in der Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |
| `sub_button`            | object  | Optional                            | Siehe [Sub-Buttons](#sub-buttons)                | Fügt benutzerdefinierte Buttons hinzu, die rechts fixiert sind. Praktisch für ein Auswahlmenü der Klimamodi.                                  |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Haupthintergrundfarbe für unterstützte Elemente in der Klima-Karte |
| `--bubble-climate-border-radius` | `px` | Randradius für unterstützte Elemente in der Klima-Karte |
| `--bubble-climate-button-background-color` | `color` | Hintergrundfarbe für die Buttons der Klima-Karte |
| `--bubble-climate-icon-border-radius` | `px` | Randradius für den Icon-Container der Klima-Karte |
| `--bubble-state-climate-fan-only-color` | `color` | Überlagerungsfarbe für den Zustand "Nur Lüfter" |
| `--bubble-state-climate-dry-color` | `color` | Überlagerungsfarbe für den Zustand "Trocknen" |
| `--bubble-state-climate-cool-color` | `color` | Überlagerungsfarbe für den Zustand "Kühlen" |
| `--bubble-state-climate-heat-color` | `color` | Überlagerungsfarbe für den Zustand "Heizen" |
| `--bubble-state-climate-auto-color` | `color` | Überlagerungsfarbe für den Zustand "Auto" |
| `--bubble-state-climate-heat-cool-color` | `color` | Überlagerungsfarbe für den Zustand "Heizen/Kühlen" |
| `--bubble-climate-accent-color` | `color` | Akzentfarbe für die Klima-Karte |
| `--bubble-climate-box-shadow` | Siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für den Klima-Container. |

</details>


#### Beispiele

<details>

<summary>Eine Klima-Karte mit einem Dropdown-Menü für die HVAC-Modi</summary>

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

Mit dieser Karte kannst du deine Kalender-Entitäten anzeigen. Ihr Inhalt ist scrollbar, sodass du ganz einfach durch die anstehenden Termine blättern kannst.

### Kalender-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name                | Typ    | Erforderlich  | Unterstützte Optionen                               | Beschreibung                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Beliebige Zahl (Minimum: 1)                        | Anzahl der Kalendertage, für die Termine abgerufen werden, von jetzt bis zum Ende des n-ten Tages (Standard: 7) |
| `entities`          | object  | **Erforderlich** | Ein Kalender-Entitätsobjekt (siehe unten)            | Die zu steuernde Entität (z. B. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Erforderlich** | Eine Kalender-Entität                               | Die anzuzeigende Kalender-Entität                                                          |
| `entities.color`    | string  | Optional     | Eine Farbe                                         | Eine benutzerdefinierte Farbe für den Kalender-Chip. Wenn nicht definiert, wird automatisch eine Farbe gewählt |
| `days`              | number  | Optional     | Beliebige Zahl (Minimum: 1)                         | Anzahl der Kalendertage, für die Termine abgerufen werden, von jetzt bis zum Ende des n-ten Tages (Standard: 7) |
| `limit`             | number  | Optional     | Eine Zahl                                        | Die Anzahl der Termine, die auf der Karte angezeigt werden                                  |
| `show_end`          | boolean | Optional     | `true` oder `false` (Standard)                     | Zeigt die Endzeit der Termine an oder blendet sie aus                                                    |
| `show_progress`     | boolean | Optional     | `true` (Standard) oder `false`                     | Zeigt den Fortschrittsbalken der Termine an oder blendet ihn aus                                                     |
| `show_started_events`| boolean | Optional     | `true` (Standard) oder `false`                     | Zeigt bereits laufende Termine an oder blendet sie aus                                                 |
| `scrolling_effect`  | boolean | Optional | `true` (Standard) oder `false` | Lässt Text durchlaufen, wenn der Inhalt die Größe seines Containers überschreitet |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Ermöglicht das Hinzufügen von Aktionen beim Klick auf einen Termin. |
| `tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Klick auf einen Tag fest, wenn nicht definiert, wird `none` verwendet. |
| `double_tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Doppelklick auf einen Tag fest, wenn nicht definiert, wird `none` verwendet. |
| `hold_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Art der Aktion beim Halten eines Tages fest, wenn nicht definiert, wird `none` verwendet. |
| `card_layout` | string | Optional | `normal` (Standard außerhalb der Bereichsansicht), `large` (Standard in der Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |
| `sub_button` | object | Optional | Siehe [Sub-Buttons](#sub-buttons) | Fügt benutzerdefinierte Buttons hinzu, die rechts fixiert sind |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable                                  | Erwarteter Wert | Beschreibung                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Haupthintergrundfarbe für unterstützte Elemente in der Kalender-Karte  |
| `--bubble-calendar-border-radius`         | `px`           | Randradius für unterstützte Elemente in der Kalender-Karte |
| `--bubble-calendar-height`                | `px`           | Höhe der Kalender-Karte                                        |

</details>

#### Beispiele

<details>

<summary>Eine Kalender-Karte mit einer begrenzten Anzahl von Terminen</summary>

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

<summary>Eine Kalender-Karte mit Endzeit und Fortschrittsbalken</summary>

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


## Trennlinie

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Diese Karte ist eine einfache Trennlinie, mit der du dein Pop-up in Kategorien / Bereiche unterteilen kannst, z. B. Lichter, Geräte, Abdeckungen, Einstellungen, Automatisierungen...

### Trennlinien-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `name` | string | Optional, aber empfohlen | Beliebige Zeichenkette | Ein Name für deine Trennlinie |
| `icon` | string | Optional, aber empfohlen | Beliebiges `mdi:`-Icon | Ein Icon für deine Trennlinie |
| `card_layout` | string | Optional | `normal` (Standard außerhalb der Bereichsansicht), `large` (Standard in der Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |
| `sub_button` | object | Optional | Siehe [Sub-Buttons](#sub-buttons) | Füge angepasste Buttons hinzu, die rechts fixiert sind |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Hintergrundfarbe der Linie in der Trennlinie |

</details>

#### Beispiel

<details>

<summary>Eine Trennlinie für einen Bereich „Abdeckungen"</summary>

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

## Leere Spalte

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Diese Karte dient dazu, eine leere Spalte zu füllen. Das ist nützlich, wenn du in deinem Pop-up einen `horizontal-stack` mit nur einer Karte hast. Wirf einen Blick in die untere rechte Ecke dieses Screenshots, um sie (nicht) zu sehen.

### Leere-Spalte-Optionen

Diese Karte hat keine Optionen und unterstützt kein [Styling](#styling), sie unterstützt jedoch Layout-Optionen für HA-Bereiche.

#### Beispiel

<details>

<summary>Eine leere Spalte in einem horizontalen Stapel</summary>

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

Diese Karte ist ausschließlich für Sub-Buttons gedacht. Sie ist perfekt für Menüs, Schnellaktionen, Info-Chips oder eine fixierte Fußzeile am unteren Seitenrand.

> [!IMPORTANT]  
> Diese Karte verwendet das neue Sub-Button-Schema. Verwende `sub_button.bottom`, um deine Buttons zu definieren. Der Bereich `sub_button.main` wird ignoriert.

### Nur-Sub-Buttons-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibungen)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Erforderlich** | Siehe [Sub-Buttons](#sub-buttons) | Definiere deine Sub-Buttons im Bereich `bottom` |
| `hide_main_background` | boolean | Optional | `true` oder `false` (Standard) | Entfernt den Kartenhintergrund |
| `footer_mode` | boolean | Optional | `true` oder `false` (Standard) | Fixiert die Karte am unteren Seitenrand |
| `footer_full_width` | boolean | Optional | `true` oder `false` (Standard) | Stellt die Fußzeile in voller Breite dar (100 %) |
| `footer_width` | number | Optional | Beliebige Zahl | Fußzeilenbreite in Pixeln, wenn `footer_full_width` auf `false` steht |
| `footer_bottom_offset` | number | Optional | Beliebige Zahl | Abstand vom unteren Seitenrand in Pixeln (Standard: `16`) |
| `card_layout` | string | Optional | `normal` (Standard außerhalb der Bereichsansicht), `large` (Standard in der Bereichsansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout der Karte, siehe [Kartenlayouts](#kartenlayouts) |
| `rows` | number | Optional | Beliebige Zahl | Anzahl der Zeilen (Höhe) (z. B. `2`) |

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Fußzeilenbreite, wenn `footer_full_width` auf `false` steht |
| `--bubble-footer-bottom` | `px` | Unterer Abstand der Fußzeile |
| `--bubble-footer-box-shadow` | siehe [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schlagschatten für den Fußzeilen-Container |

</details>

#### Beispiele

<details>

<summary>Chip-Stil (wie auf dem Screenshot)</summary>

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

<summary>Ein fixiertes Fußzeilenmenü</summary>

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

In jeder Karte, die diese Option unterstützt, kannst du Sub-Buttons hinzufügen, um deine Karten noch weiter anzupassen. Du kannst zum Beispiel einen Button erstellen, der einen Staubsauger steuert, eine Wetterkarte oder fast alles, was dir einfällt. Diese Sub-Buttons unterstützen die Tipp-Aktionen und die meisten Button-Optionen.

Sub-Buttons unterstützen jetzt drei Typen: **Standard (Button)**, **Slider** und **Dropdown / Auswahl**. Du kannst Typen in derselben Karte mischen, Sub-Buttons oben oder unten platzieren und sie für fortgeschrittenere Layouts in Gruppen organisieren.

#### Platzierung und Gruppen von Sub-Buttons

<details>

<summary><b>Sub-Button-Struktur (main / bottom + Gruppen)</b></summary>

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

**Hinweise:**
- `main` und `bottom` sind zwei unabhängige Bereiche. Untere Sub-Buttons sind am unteren Rand der Karte fixiert.
- `main_layout` und `bottom_layout` akzeptieren `inline` (Standard) oder `rows`, um Gruppen vertikal zu stapeln.
- Gruppen sind Objekte mit einem `group`-Array und optionalem `buttons_layout` (`inline` oder `column`).
- `justify_content` ist **nur für untere Gruppen** verfügbar (`start`, `center`, `end`, `fill`).
- Wenn untere Sub-Buttons vorhanden sind, wechselt das Kartenlayout automatisch zu `large`, sofern du nicht explizit ein anderes Layout festlegst.
- Alte `sub_button`-Arrays werden weiterhin unterstützt und wie der Bereich `main` behandelt.

</details>

### Sub-Button-Optionen

<details>

<summary><b>Optionen (YAML + Beschreibung)</b></summary>

| Name | Typ | Erforderlichkeit | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- | --- |
| `entity` | string | Optional | Beliebige Entität | Eine Entität, die gesteuert werden soll |
| `name` | string | Optional | Beliebige Zeichenkette | Ein Name für deinen Sub-Button, wenn nicht definiert, wird der Entitätsname angezeigt |
| `icon` | string | Optional | Beliebiges `mdi:`-Icon | Ein Icon für deinen Sub-Button, wenn nicht definiert, wird das Entitäts-Icon oder das Entitätsbild angezeigt |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Erzwingt das Icon, auch wenn ein Entitätsbild verfügbar ist |
| `sub_button_type` | string | Optional | `default`, `slider` oder `select` | Wähle den Sub-Button-Typ |
| `show_background` | boolean | Optional | `true` (Standard) oder `false` | Zeigt einen Hintergrund für deinen Sub-Button an, dessen Farbe sich je nach Zustand deiner Entität ändert |
| `state_background` | boolean | Optional | `true` (Standard) oder `false` | Verwendet die Zustandsfarbe, wenn die Entität `on` ist |
| `light_background` | boolean | Optional | `true` (Standard) oder `false` | Verwendet die Lichtfarbe für den Hintergrund, sofern verfügbar |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Zeigt oder verbirgt den Zustand deiner `entity` |
| `show_name` | boolean | Optional | `true` oder `false` (Standard) | Zeigt oder verbirgt den Namen |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verbirgt das Icon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Zeigt an, wann sich deine `entity` zuletzt geändert hat |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Zeigt an, wann deine `entity` zuletzt aktualisiert wurde |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Zeigt ein Attribut deiner `entity` unter ihrem `name` an |
| `attribute` | string | Optional (erforderlich, wenn `show_attribute` auf `true` steht) | Ein Attribut deiner `entity` | Das anzuzeigende Attribut (z. B. `brightness`) |
| `select_attribute` | string | Optional | Eine Attributliste deiner `entity` (siehe unterstützte Optionen oben) | Diese Attributliste öffnet beim Anklicken ein Dropdown (z. B. `effect_list`) |
| `show_arrow` | boolean | Optional | `true` (Standard) oder `false` | Zeigt oder verbirgt den Dropdown-Pfeil bei Auswahl-Sub-Buttons |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaubt dem Text zu laufen, wenn der Inhalt größer als der Container ist |
| `tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Aktion beim Klick auf den Sub-Button fest, wenn nicht definiert, wird `more-info` verwendet. |
| `double_tap_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Aktion beim Doppelklick auf den Sub-Button fest, wenn nicht definiert, wird `none` verwendet. |
| `hold_action` | object | Optional | Siehe [Aktionen](#tipp--doppeltipp--und-halten-aktionen) | Legt die Aktion beim Halten des Sub-Buttons fest, wenn nicht definiert, wird `more-info` verwendet. |
| `fill_width` | boolean | Optional | `true` oder `false` | Füllt die verfügbare Breite aus (Standard: `false` für main, `true` für bottom) |
| `width` | number oder string | Optional | Beliebige Zahl oder CSS-Länge | Benutzerdefinierte Breite (standardmäßig `px` für den Bereich main, `%` für den Bereich bottom) |
| `custom_height` | number | Optional | Beliebige Zahl | Benutzerdefinierte Höhe in Pixeln |
| `content_layout` | string | Optional | `icon-left` (Standard), `icon-top`, `icon-bottom`, `icon-right` | Platzierung des Icons innerhalb des Sub-Buttons |
| `always_visible` | boolean | Optional | `true` oder `false` (Standard) | **Nur Slider.** Zeigt den Slider immer an, statt ihn per Tippen zu öffnen |
| `show_button_info` | boolean | Optional | `true` oder `false` (Standard) | **Nur Slider.** Zeigt Icon/Name/Zustand an, wenn `always_visible` aktiviert ist |
| `visibility` | object oder list | Optional | Siehe [Bedingungen](https://www.home-assistant.io/docs/scripts/conditions/) | Zeigt oder verbirgt den Sub-Button anhand von Bedingungen |
| `hide_when_parent_unavailable` | boolean | Optional | `true` oder `false` (Standard) | Verbirgt den Sub-Button, wenn die Entität der übergeordneten Karte nicht verfügbar ist |

</details>

<details>

<summary><b>Slider-Sub-Button-Optionen (wie bei Button-Slidern)</b></summary>

<br>

Slider-Sub-Buttons unterstützen dieselben Slider-Optionen wie Button-Slider, darunter:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-Variablen (siehe <a href="#styling">Styling</a>)</b></summary>

| Variable | Erwarteter Wert | Beschreibung |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Rahmenradius der Sub-Buttons |
| `--bubble-sub-button-background-color` | `color` | Hintergrundfarbe der Sub-Buttons |
| `--bubble-sub-slider-border-radius` | `px` | Rahmenradius der Slider-Sub-Buttons |
| `--bubble-sub-slider-background-color` | `color` | Hintergrundfarbe der Slider-Sub-Buttons |
| `--bubble-sub-slider-height` | `px` | Höhe der immer sichtbaren Slider-Sub-Buttons |
| `--bubble-sub-button-dark-text-color` | `color` | Textfarbe auf hellen Sub-Button-Hintergründen |

</details>

#### Beispiele

<details>

<summary>Ein Button mit einigen Sub-Buttons als Staubsauger-Karte (wie auf dem Screenshot)</summary>

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

<summary>Ein Button-Slider mit einem Sub-Button, der die Helligkeit anzeigt, und einem, der das Licht umschaltet (wie auf dem Screenshot)</summary>

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

<summary>Ein Button, der die Innen- und Außentemperatur mit dem Wetter für heute und morgen anzeigt (Screenshot enthalten)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Pech für mich, dass es ständig bewölkt ist, aber alle Icons ändern sich je nach Wetter.

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

## Kartenlayouts

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card unterstützt die Bereichsansicht von Home Assistant vollständig. Du kannst das Kartenlayout ändern, um die Karte größer darzustellen, und außerdem festlegen, wie viele Spalten oder Zeilen die Karte in deiner Bereichsansicht einnehmen soll (nur bei den Karten, die diese Option unterstützen). Diese Layouts werden auch in allen anderen Ansichtstypen unterstützt.

<details>

<summary><b>Verfügbare Kartenlayouts</b></summary>

| Layout | Beschreibung |
| --- | --- |
| `normal` | Das reguläre Layout (nicht für die Bereichsansicht optimiert) |
| `large` | Ein größeres Layout, das sich an die gewählten Zeilen in der Bereichsansicht anpasst (für die Bereichsansicht optimiert) |
| `large-2-rows` | Ein größeres Layout mit 2 Zeilen von Sub-Buttons, das sich an die gewählten Zeilen in der Bereichsansicht anpasst (für die Bereichsansicht optimiert) |
| `large-sub-buttons-grid` | Dieses Layout zeigt die Sub-Buttons in einem Raster an, `rows` muss auf mindestens `2` gesetzt sein.

</details>

#### Beispiele

<details>

<summary>Ein großer Button, der Energiestatistiken mit 2 Zeilen von Sub-Buttons anzeigt (Screenshot enthalten)</summary>

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

<summary>Ein großer Button mit mehreren Zeilen und 12 Sub-Buttons</summary>

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

## Tipp-, Doppeltipp- und Halten-Aktionen

Du kannst auf den Karten, die diese Option unterstützen, auch die Standard-Tipp-, Doppeltipp- und Halten-Aktionen von Home Assistant verwenden. So kannst du zum Beispiel das „Mehr Infos“-Fenster anzeigen, indem du ein Button-Icon gedrückt hältst, oder einen Dienst ausführen, wenn ein Sub-Button gedrückt wird.

**Hinweis: Wenn eine `double_tap_action` konfiguriert ist, wird die reguläre `tap_action` mit einer Verzögerung von 200 ms ausgeführt, damit ein
Doppeltipp erkannt werden kann. Wenn diese Verzögerung unerwünscht ist, setze `double_tap_action` auf `none`, um die Doppeltipp-Erkennung zu deaktivieren.**

### Aktionsoptionen

<details>

<summary><b>Optionen (YAML + Beschreibung)</b></summary>

| Name | Typ | Unterstützte Optionen | Beschreibung |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Auszuführende Aktion |
| `target` | object |  | Funktioniert nur mit `call-service`. Folgt der [Home-Assistant-Syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Ein beliebiger Pfad deines Dashboards | Pfad, zu dem navigiert wird (z. B. `'#kitchen'`, um ein Pop-up zu öffnen), wenn die Aktion auf navigate gesetzt ist |
| `url_path` | string | Ein beliebiger Link | URL, die beim Klick geöffnet wird (z. B. `https://www.google.com`), wenn die Aktion `url` ist |
| `service` | string | Ein beliebiger Dienst | Dienst, der aufgerufen wird (z. B. `media_player.media_play_pause`), wenn `action` auf `call-service` gesetzt ist |
| `data` oder `service_data` | object | Beliebige Dienstdaten | Dienstdaten, die übergeben werden (z. B. `entity_id: media_player.kitchen`), wenn `action` auf `call-service` gesetzt ist |
| `confirmation` | object | Siehe [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Zeigt ein Bestätigungs-Pop-up an (kein Bubble-Card-Pop-up), überschreibt das Standard-`confirmation`-Objekt |

</details>

#### Beispiel

<details>

<summary>Ein Button zum Öffnen eines Pop-ups</summary>

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

Du kannst benutzerdefinierte Styles hinzufügen, um das CSS aller Karten **ohne card-mod** anzupassen, und zwar auf vier Arten:

- Gehe im Editor zur Karte, die du anpassen möchtest, navigiere zu _Styling-Optionen > Benutzerdefinierte Styles & JS-Templates_ und füge deine benutzerdefinierten Styles hinzu (siehe die Tipps und Beispiele unten).
- Gehe im Editor (oder in [YAML](#module)) zur Karte, die du anpassen möchtest, navigiere zu _Module_ und erstelle dann ein neues Modul (es wird für alle Karten verfügbar sein), oder gehe in den **Module Store**, um ein verfügbares Modul zu installieren (mehr Details zu Modulen findest du [weiter unten](#module)).
- In einer [Theme](https://www.home-assistant.io/integrations/frontend/#defining-themes)-Datei, indem du CSS-Variablen in YAML hinzufügst (diese findest du oben in der Dokumentation der jeweiligen Karte). Das ermöglicht globale Anpassungen.

  <details>
  
  <summary>Beispiel</a></summary>
  
  <br>

  Kopiere die Zeile `Bubble:` nicht, das ist der Name des Themes, das du verwendest. Außerdem musst du das `--` am Anfang der Variablen entfernen.

  Nach jeder Änderung musst du die Aktion [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) ausführen, um das Theme zu aktualisieren.

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
  
- In YAML, indem du `styles: |` gefolgt von deinen benutzerdefinierten Styles hinzufügst (siehe die Tipps und Beispiele unten).

> [!TIP]  
> **Um zu verstehen, welche Style-Klassen angepasst werden können**, kannst du einen Blick in den Ordner [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) in diesem Repository werfen. In jedem Kartenordner findest du eine Datei namens `styles.css`. Diese Dateien enthalten alle angewendeten Styles. Das ermöglicht deutlich mehr Möglichkeiten als CSS-Variablen, muss aber bei jeder Karte einzeln hinzugefügt werden.
> 
> Mit ein wenig Suchen findest du außerdem viele [Beispiele aus der Community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) oder einige im [Home Assistant Forum](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/).
>
> Das Bubble-Theme für Home Assistant (wie auf den Screenshots) findest du [hier](https://github.com/Clooos/Bubble).
>
> Ein Tutorial-Video erscheint bald auf meinem [YouTube-Kanal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Bitte beachte, dass du bei manchen bereits definierten CSS-Styles `!important;` hinzufügen musst (siehe Beispiele unten).

> [!TIP]  
> Sub-Buttons können über namensbasierte Klassen angesprochen werden. Ein Sub-Button mit dem Namen „My sub-button“ kann zum Beispiel mit `.my-sub-button` gestylt werden. Slider-Sub-Buttons stellen außerdem `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` usw. bereit.

#### Beispiele

<details>

<summary>Die Schriftgröße einer beliebigen Bubble Card ändern</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Die Hintergrundfarbe eines einzelnen Buttons in einem horizontalen Button-Stapel ändern</summary>

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

<summary>Die Hintergrundfarbe einer Karte ändern</summary>

<br>

Dieses Beispiel funktioniert bei allen Bubble-Card-Typen (außer bei den Pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Dieses Beispiel macht dasselbe nur bei einer Button-Karte (es funktioniert für die Pop-up-Kopfzeile): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Um die Farbe zu ändern, wenn der Zustand `on` ist, wirf einen Blick auf die Style-Templates weiter unten.

</details>

<details>

<summary>Die Farbe eines Button-Sliders ändern</summary>

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

<summary>Die Linienfarbe einer Trennlinie ändern</summary>

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

<summary>Die Farbe eines Icons ändern</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Für ein Icon in einem horizontalen Button-Stapel.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Die Hintergrundfarbe eines Icon-Containers ändern</summary>

<br>

Dieses Beispiel funktioniert bei allen Bubble-Card-Typen (außer bei den Pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Dieses Beispiel macht dasselbe für die Pop-up-Kopfzeile: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Die Größe der Sub-Buttons ändern (perfekt für das große Layout)</summary>

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

<summary>Die Hintergrundfarbe des zweiten Sub-Buttons ändern</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Die Größe eines Icons ändern</summary>

<br>

Für das Haupt-Icon.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Für die Sub-Button-Icons.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Ein Bild anstelle eines Icons in einem Sub-Button verwenden</summary>

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

Lade dieses Bild einfach in einen Ordner „pictures“ (oder einen Namen deiner Wahl) im Home-Assistant-Ordner „www“ hoch.

</details>

<details>

<summary>Fortgeschrittenes Beispiel: Eine horizontale Reihe von Sub-Buttons erstellen (Screenshot enthalten)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Dieses Beispiel liebe ich wirklich, ich verwende es als Kopfzeile auf meinem Dashboard.

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

**Bubble Card unterstützt keine Jinja-Templates**, aber fortgeschrittene Nutzer können Templates in JS direkt in ihren [benutzerdefinierten Styles](#styling) hinzufügen. So kannst du zum Beispiel ein Icon, die Texte oder die Farben eines Elements dynamisch ändern, ein Element bedingt ein- oder ausblenden (wie einen Sub-Button) oder fast alles auf Basis eines Zustands, eines Attributs und mehr steuern.

> [!TIP]  
> Weitere Informationen zu JS-Templates findest du [hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mein Rat: **Wirf immer einen Blick in deine Browser-Konsole**, um sicherzugehen, dass alles korrekt funktioniert.

> [!IMPORTANT]  
> **Alle Templates, die keine CSS-Eigenschaft ändern, müssen ans Ende gesetzt werden! Zum Beispiel das Ändern eines Icons, eines Textes oder eines beliebigen Elements.**

#### Verfügbare Variablen und Funktionen

<details>

<summary>Variablen</summary>

<br>

In den meisten Karten hast du Zugriff auf diese Variablen:

- `state` gibt den Zustand deiner definierten `entity` zurück.
  
- `entity` gibt die von dir definierte Entität zurück, wie `switch.test` in diesem Beispiel.
  
- `icon` kann so verwendet werden, um das Icon zu ändern: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` gibt den Zustand der für deinen ersten Sub-Button definierten `entity` zurück, `[0]` ist der Zustand des ersten Sub-Buttons, `[1]` der des zweiten...
  
- `subButtonIcon[0]` kann so verwendet werden, um das Icon des ersten Sub-Buttons zu ändern: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` ist das Icon des ersten Sub-Buttons, `[1]` das des zweiten...
  
- `card` gibt das Kartenelement im DOM zurück.
  
- `hass` ist eine fortgeschrittene Variable, die dir noch mehr Kontrolle gibt. Zum Beispiel kannst du den Zustand von `light.kitchen` so abrufen: `hass.states['light.kitchen'].state`, oder ein Attribut so: `hass.states[entity].attributes.brightness`.

- `this` gibt viele nützliche Informationen über dein Setup und dein Dashboard zurück. Verwende dies nur, wenn du weißt, was du tust.

</details>

<details>

<summary>Funktionen</summary>

<br>

Du hast Zugriff auf alle globalen JS-Funktionen, aber zusätzlich auch auf:

- `getWeatherIcon` kann verwendet werden, um ein Wetter-Icon auf Basis eines Zustands zurückzugeben, der das Wetter liefert. Zum Beispiel kannst du das hier machen: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, um das Icon des dritten Sub-Buttons auf das heutige Wetter-Icon zu ändern, `.forecast[1]?.condition` steht für morgen...

  Dafür musst du einen Template-Sensor erstellen. Das hier kannst du in deine `configuration.yaml` einfügen:
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
- `hass.formatEntityState(state)` kann verwendet werden, um einen Zustand zu übersetzen (kann auch verwendet werden, um die Einheit eines Zustands zu erhalten, ohne sie manuell hinzufügen zu müssen).
- `hass.formatEntityAttributeValue(state, "attribute")` kann verwendet werden, um ein Attribut zu übersetzen (kann auch verwendet werden, um die Einheit eines Zustands zu erhalten, ohne sie manuell hinzufügen zu müssen).

</details>

#### Beispiele

Unten findest du viele Beispiele, aber auf meiner [Patreon-Seite](https://www.patreon.com/c/Clooos) gibt es auch sehr fortgeschrittene Templates, wie eines (mein Favorit), das bis zu vier bedingte Badges rund um die Icons der Karte ermöglicht. Das ist außerdem eine großartige Möglichkeit, alle Möglichkeiten der benutzerdefinierten Styles und Templates von Bubble Card kennenzulernen!

<details>
<summary>Beispiele von meiner Patreon-Seite</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Beispiel 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Badges im Home Assistant-Stil zu jeder Karte hinzufügen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Beispiel 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Formatiertes Datum und Uhrzeit in einer Trennlinie anzeigen, ganz ohne Entität</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Beispiel 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Einen Sub-Button-Zustand auf zwei Zeilen anzeigen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Beispiel 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Beschriftungen und Icons in einem Auswahl-Sub-Button anpassen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Beispiel 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Ein dauerhaftes Erinnerungs-Pop-up hinzufügen, das nur bei Bedarf erscheint</a>
</p>

<br>

</details>

<details>

<summary>Die Hintergrundfarbe eines Buttons ändern, sodass sie rot ist, wenn er <code>off</code> ist, und blau, wenn er <code>on</code> ist</summary>

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

<summary>Die Hintergrundfarbe eines Buttons auf Basis einer Entität ändern, für den horizontalen Button-Stapel</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Einen Sub-Button bedingt ein-/ausblenden</summary>

<br>

Dieses Beispiel zeigt den ersten Sub-Button nur an, wenn mein Staubsauger feststeckt.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Dieses Beispiel zeigt einen Sub-Button an, wenn der Akkustand unter 10 % liegt. Nützlich mit einem Sub-Button, der "Akku schwach" anzeigt.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ein Icon oder Sub-Button-Icon bedingt ändern</summary>

<br>

Dieses Beispiel ändert ein Button-Icon nur, wenn ein Staubsauger feststeckt.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Dieses Beispiel ändert das Icon des ersten Sub-Buttons nur, wenn ein Staubsauger feststeckt.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Die Farbe eines Icons oder Sub-Button-Icons bedingt ändern</summary>

<br>

Dieses Beispiel ändert die Farbe eines Button-Icons auf Basis seines Zustands.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Dieses Beispiel ändert die Farbe eines Sub-Button-Icons auf Basis seines Zustands. `.bubble-sub-button-1` ist der erste Sub-Button, ersetze `1`, wenn du das Icon eines anderen Sub-Buttons ändern möchtest.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Ein Ventilator-Icon bedingt animieren</summary>

<br>

Dieses Beispiel lässt ein Button-Icon rotieren, wenn ein Ventilator `on` ist.
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

<summary>Texte per Template ändern (wie Name oder Zustand)</summary>

<br>

Dieses Beispiel ändert den Namen/Zustand eines Buttons je nach Wetter in "It's currently sunny".
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
oder angewendet auf Sub-Buttons:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Wenn du den Zustand (`.bubble-state`) per Template ändern möchtest, aktiviere nicht `show_state: true`, sondern nur `show_attribute: true` ohne ein Attribut.

</details>

<details>

<summary>Fortgeschrittenes Beispiel: Die Farbe eines Sub-Buttons ändern, wenn ein Pop-up geöffnet ist</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Fortgeschrittenes Beispiel: Den Namen einer Trennlinie per Template auf Basis eines in deine Sprache übersetzten Zustands setzen</summary>

<br>

Du kannst `hass.formatEntityState(state)` verwenden, um einen Zustand zu übersetzen, und `hass.formatEntityAttributeValue(state, "attribute")`, um ein Attribut zu übersetzen.

Dieses Beispiel ändert den Namen und das Icon je nach Wetter, "Nuageux" bedeutet "Bewölkt" auf Französisch.

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

Module sind eine mächtige Funktion, mit der du deine benutzerdefinierten Styles und Templates speichern, wiederverwenden und über alle deine Bubble Cards hinweg teilen kannst. Statt denselben Code in mehrere Karten zu kopieren, kannst du ein Modul erstellen und es überall dort anwenden, wo du es brauchst. Das macht die Verwaltung des Erscheinungsbilds deines Dashboards viel einfacher und effizienter.

Aber diese Funktion kann noch viel mehr: Sie erlaubt dir, im Bubble Card-Editor selbst richtige Funktionen hinzuzufügen, mit allen standardmäßigen [Home Assistant-Formular](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)-Optionen!  
Der Objekt-Selektor wurde verbessert, um Änderungen live anzuzeigen und Attribute korrekt zu unterstützen.

Du kannst auch im **Module Store** stöbern, um [von der Community erstellte Module](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) zu finden und zu installieren, oder deine eigenen Kreationen teilen!

> [!TIP]
> Der Code eines Moduls funktioniert genauso wie der Code im Abschnitt `styles` einer Karte. Alle Variablen und Funktionen aus dem Abschnitt [Templates](#templates) stehen zur Verfügung.

<br>

### Ersteinrichtung

> [!IMPORTANT]
> Seit v3.1.0 ist Bubble Card Tools das empfohlene Speicher-Backend für Module. Die alte Methode mit dem Template-Sensor funktioniert für bestehende Setups weiterhin, aber neue Module und die Funktionen des Module Store werden am besten über Bubble Card Tools unterstützt.

Die Bubble Card Tools-Integration aktiviert den Modul-Editor und den Module Store und speichert Module als einzelne YAML-Dateien. Bestehende Module werden automatisch migriert.

Die Schritte zur Installation und Konfiguration sind hier erklärt:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Der Modul-Editor

Du erreichst den Modul-Editor über die Einstellungen jeder Karte, im Bereich **Module**. Der Editor bietet zwei Haupt-Tabs:

#### Der Tab "Meine Module"

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Dieser Tab zeigt alle deine installierten Module und erlaubt dir:

- Vorhandene Module auf die aktuelle Karte **anwenden**
- Ein neues Modul von Grund auf **erstellen**
- Vorhandene Module mit Live-Vorschau **bearbeiten**
- Module **löschen**, die du nicht mehr brauchst
- Module **suchen** und **sortieren** (alphabetisch, zuletzt verwendet, aktive zuerst)
- Den **globalen Status setzen**, damit ein Modul automatisch auf alle Karten angewendet wird
- Module zum Sichern oder Teilen **importieren/exportieren**

#### Der Tab "Module Store"

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Dieser Tab zeigt [alle verfügbaren Module der Community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) an und erlaubt dir:

- Alle von der Community erstellten Module **durchstöbern**
- Module nach Name, Kompatibilität oder Stichwörtern **suchen** und filtern
- Module mit einem Klick **installieren**
- Installierte Module **aktualisieren**, wenn neue Versionen verfügbar sind

> [!TIP]
> Im Editor kannst du nicht unterstützte Module aktivieren, um Module zu testen, die noch nicht als kompatibel mit einem bestimmten Kartentyp gekennzeichnet sind.

<br>

### So verwendest du Module

#### Ein neues Modul erstellen

<details>

<summary>Zum Aufklappen anklicken</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Öffne den Editor einer beliebigen Karte und klappe den Bereich **Module** auf.
2. Klicke auf **Neues Modul erstellen**.
3. Fülle die Modulinformationen aus.
4. Schreibe deinen CSS- und/oder JavaScript-Template-Code in den **Code**-Editor.
5. (Optional) Erstelle eine eigene Konfigurationsoberfläche im Bereich **Editor** (wie die Farbauswahl im Screenshot oben, die vollständige Dokumentation findest du [hier](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Klicke auf **Speichern**.

Dein Modul steht jetzt auf allen deinen Karten zur Verfügung!

<br>

</details>

#### Ein Modul auf eine Karte anwenden

<details>

<summary>Zum Aufklappen anklicken</summary>

<br>

- **Über den Editor:**

  - Öffne den Editor der Karte, auf die du das Modul anwenden möchtest.
  - Klappe den Bereich **Module** auf.
  - Klicke in der Liste auf das Modul, das du anwenden möchtest.
  - Klicke unter "Anwenden auf" auf "Diese Karte". Das Modul ist jetzt aktiv. Du kannst mehrere Module auf dieselbe Karte anwenden.

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

#### Ein Modul global anwenden

<details>

<summary>Zum Aufklappen anklicken</summary>

<br>

Du kannst ein Modul so einstellen, dass es automatisch auf alle Bubble Cards angewendet wird:

**Das ist für Module mit einem Editor nicht verfügbar, da diese eine spezifische Konfiguration benötigen, um zu funktionieren.**

- **Über den Editor:**

  - Suche dein Modul im Modul-Editor im Tab **Meine Module**.
  - Aktiviere den Schalter **Alle Karten** neben dem Modulnamen.
  - Das Modul wird jetzt automatisch auf alle Karten angewendet.
 
- **Über YAML:**

  Füge in der YAML-Konfiguration deines Moduls (in `bubble-modules.yaml`) einfach `is_global: true` hinzu.

<br>

</details>

#### Eine einzelne Karte von einem globalen Modul ausschließen

<details>

<summary>Zum Aufklappen anklicken</summary>

<br>

Wenn du ein globales Modul hast, es aber von einer bestimmten Karte ausschließen möchtest:

- **Über den Editor:**
  
  - Im Bereich **Module** der Karte werden die globalen Module aufgelistet.
  - Klicke auf ein globales Modul und deaktiviere "Diese Karte", um es von dieser bestimmten Karte auszuschließen.

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

#### Dein Modul im Module Store teilen

<details>

<summary>Zum Aufklappen anklicken</summary>

<br>

Um dein Modul im Module Store zu teilen, klicke im Modul-Editor unten unter "Modul exportieren" auf "Für GitHub kopieren" und füge den Inhalt in eine neue Discussion in der Kategorie [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) ein. **Bearbeite die Beschreibung** (falls nötig), **das Beispiel** (für YAML-Nutzer) und denke daran, **mindestens einen Screenshot** für den Module Store **beizufügen**.

**Dein Modul ist direkt danach verfügbar** (nach einer Aktualisierung des Stores), überprüfe also genau, dass alles korrekt geschrieben ist und das Modul wie erwartet funktioniert. Du kannst das Modul nach dem Teilen natürlich weiterhin bearbeiten/aktualisieren.

<br>

</details>

#### Versionsverwaltung

<details>

<summary>Zum Aufklappen anklicken</summary>

<br>

Der Module Store prüft installierte Module automatisch auf Updates. Wenn Updates verfügbar sind:

1. Du siehst einen Update-Hinweis im Tab **Module Store**.
2. Klicke auf **Update** bei Modulen mit verfügbaren Updates.
3. Bestätige das Update im Module Store.

<br>

</details>

#### Unterstützte Kartentypen festlegen

<details>

<summary>Zum Aufklappen anklicken</summary>

<br>

Manche Module sind möglicherweise nicht mit allen Kartentypen kompatibel. Du kannst festlegen, welche Karten ein Modul unterstützt.  
Wenn ein Modul mit **allen Karten** kompatibel sein soll, lass das Feld `supported` einfach weg (oder verwende die Option **Alle Karten** im Editor).

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

### Beispiele

<details>
<summary>Einfaches Styling-Modul</summary>

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

Dieses Modul ist [hier](https://github.com/Clooos/Bubble-Card/discussions/1231) verfügbar.

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

Weitere Beispiele findest du im Module Store oder [hier](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Hilfe

Wenn etwas nicht wie erwartet funktioniert, kannst du gerne ein Issue eröffnen. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Hast du Fragen oder Gedanken zu Bubble Card? Möchtest du deine Dashboards oder Entdeckungen teilen? Dann schau im Home Assistant Forum, im Bubble-Card-Subreddit oder im Bereich GitHub Discussions vorbei.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Mitwirken

Beiträge sind willkommen! Ob Bugfixes, neue Funktionen, Übersetzungen oder Verbesserungen der Dokumentation, eröffne gerne einen Pull Request.

Bevor du loslegst, lies bitte den [Entwicklerleitfaden](DEVELOPERS.md), der beschreibt, wie du deine lokale Umgebung einrichtest, das Projekt baust und deine Änderungen testest.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Spenden

Ich widme den Großteil meiner Freizeit diesem Projekt, um es so gut wie möglich zu machen. Wenn du meine Arbeit schätzt, ist jede Spende eine großartige Möglichkeit, deine Unterstützung zu zeigen 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Vielen Dank an alle für eure Unterstützung, ihr seid meine größte Motivation!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
