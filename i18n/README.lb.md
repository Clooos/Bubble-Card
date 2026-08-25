<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Dës Säit ass eng automatesch Iwwersetzung. Am Zweiwelsfall gëllt déi [originell englesch Dokumentatioun](../README.md). Liest sech e Saz komesch? All Hëllef ass wëllkomm, an [dës Säit ze verbesseren](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.lb.md) dauert nëmmen eng Minutt: GitHub këmmert sech ëm de Fork an de Pull Request. Merci am Viraus! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Dat hei an enger anerer Sprooch liesen](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card ass eng minimalistesch a personaliséierbar Kaarten-Kollektioun fir Home Assistant, mat modernen Pop-ups an engem integréierte Module Store mat iwwer 100 vun der Community erstallte Moduler.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Inhaltsverzeechnes

**[`Installatioun`](#installatioun)**  **[`Konfiguratioun`](#konfiguratioun)**  **[`Entitéite-Virschléi`](#entitéite-virschléi)**  **[`Pop-up`](#pop-up)**  **[`Horizontale Knäppchen-Stapel`](#horizontale-knäppchen-stapel)**  **[`Knäppchen`](#knäppchen)**  **[`Mediaspiller`](#mediaspiller)**  **[`Stouer`](#stouer)**  **[`Auswiel`](#auswiel)**  **[`Klima`](#klima)**  **[`Kalenner`](#kalenner)**  **[`Trennlinn`](#trennlinn)**  **[`Eidel Kolonn`](#eidel-kolonn)**  **[`Nëmme Sub-Knäppercher`](#nëmme-sub-knäppercher)**  **[`Sub-Knäppercher`](#sub-knäppercher)**  **[`Kaarten-Layouten`](#kaarten-layouten)**  **[`Konditiounen`](#konditiounen)**  **[`Aktiounen`](#tipp--duebeltipp--an-halen-aktiounen)**  **[`Styling`](#styling)**  **[`Templates`](#templates)**  **[`Moduler`](#moduler)**  **[`Lokaliséierung`](#lokaliséierung)**  **[`Hëllef`](#hëllef)**  **[`Bäidroen`](#bäidroen)**  **[`Spenden`](#spenden)**

<br>

## Installatioun

**Déi niddregst ënnerstëtzte Home Assistant Versioun:** 2023.9.0

<details>

<summary>Ouni HACS</summary>

<br>

1. Lued dës Datei erof: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Setz dës Datei an dengem `<config>/www` Dossier. Fir den Editor an denger Sprooch ze kréien, lued och `bubble-card-<lang>.json` aus dem [dist Dossier](https://github.com/Clooos/Bubble-Card/tree/main/dist) erof, zum Beispill `bubble-card-fr.json`, a setz se niewent `bubble-card.js` (ouni si bleift den Editor op Englesch)
3. Klick op dengem Dashboard riets uewen an der Ecke op d'Ikon, dann op `Dashboard änneren`
4. Klick nach eng Kéier op déi Ikon an dann op `Ressourcen geréieren`
5. Klick op `Ressource dobäisetzen`
6. Kopéier dëst eran: `/local/bubble-card.js?v=1`
7. Klick op `JavaScript Modul` an dann op `Erstellen`
8. Gitt zréck an lued deng Säit nei
9. Elo kanns du riets ënnen op `Kaart dobäisetzen` klicken an no `Bubble Card` sichen
10. No all Update vum Fichier musst du `/local/bubble-card.js?v=1` änneren an d'Versioun op eng méi héich Nummer setzen

Wann et net funktionéiert, probéier einfach de Cache vun dengem Browser ze läeren.

</details>

<details>

<summary>Mat HACS (Recommandéiert)</summary>

<br>

Mat dëser Method kriss du Updates direkt iwwer den Home Assistant Community Store

1. Wann HACS nach net installéiert ass, lued et erof no den Instruktioune op [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Maach déi initial Konfiguratioun vun HACS no den Instruktioune op [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Gitt an denger Säitläist op "HACS"
4. Sich no "Bubble Card", oder klick op de bloe Knäppchen hei drënner
5. Klick op "Eroflueden"
6. Gitt zréck op däin Dashboard a klick riets uewen an der Ecke op d'Ikon, dann op `Dashboard änneren`
7. Elo kanns du riets ënnen op `Kaart dobäisetzen` klicken an no `Bubble Card` sichen

Wann et net funktionéiert, probéier de Cache vun dengem Browser/App ze läeren (op all dengen Apparater wann néideg).

#### Videoen

Du kanns och op mengem YouTube-Kanal kucken fir Schrëtt-fir-Schrëtt Videoen.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguratioun

All Optiounen kënnen an den Home Assistant Editor konfiguréiert ginn. Awer hei ënnendrënner fënns du méi Detailer an d'YAML an der Dokumentatioun.

<details>

<summary><b>Haaptoptiounen (YAML + Beschreiwung)</b></summary>

| Numm | Typ | Ubidder | Ënnerstëtzte Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `type` | string | **Obligatoresch** | `custom:bubble-card` | Typ vun der Kaart |
| `card_type` | string | **Obligatoresch** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` oder `sub-buttons` | Typ vun der Bubble Card, kuck hei ënnendrënner |
| `styles` | Objektlëscht | Optional | Egal wéi eng CSS-Stylesheets | Erlaabt et der, deng Bubble Card CSS unzepassen, kuck [Styling](#styling) |

</details>

<details>

<summary><b>Global CSS-Variablen (kuck <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Rundung vun de Räner fir all ënnerstëtzt Elementer |
| `--bubble-main-background-color` | `color` | Haaptfaarf vum Hannergrond fir all ënnerstëtzt Elementer |
| `--bubble-secondary-background-color` | `color` | Sekundär Hannergrondfaarf fir all ënnerstëtzt Elementer |
| `--bubble-accent-color` | `color` | Akzentfaarf fir all ënnerstëtzt Elementer |
| `--bubble-icon-border-radius` | `px` | Rundung vum Ikon-Rand fir all ënnerstëtzt Elementer |
| `--bubble-icon-background-color` | `color` | Hannergrondfaarf vum Ikon fir all ënnerstëtzt Elementer |
| `--bubble-sub-button-border-radius` | `px` | Rundung vum Rand fir all Sub-Knäppercher |
| `--bubble-sub-button-background-color` | `color` | Hannergrondfaarf fir all Sub-Knäppercher |
| `--bubble-box-shadow` | kuck [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schiet fir all ënnerstëtzt Elementer |
| `--bubble-border` | kuck [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Rand fir all ënnerstëtzt Kaarten |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Kuck dëst [Video](https://www.youtube.com/watch?v=0hSQOlBxKKI) fir méi iwwer Bubble Card an hir Méiglechkeeten z'erfueren.** Mäi YouTube-Kanal ass nach relativ nei a konzentréiert sech op Tutorialen iwwer Home Assistant a Bubble Card. Zéck net dech ze abonnéieren, fir der Visibilitéit vu mengem Kanal ze hëllefen. Merci am Viraus!

<br>

---

<br>

## Entitéite-Virschléi

Zënter Home Assistant 2026.6 gëtt eng Entitéit, déi am Kaartewieler ausgewielt gëtt, e puer fäerdeg Kaarte proposéiert, a Bubble Card setzt seng eege Rezepter op dës Lëscht derbäi. Wielt eng Luucht aus an Dir kritt eng Kaart mat engem Hellegkeetsslider, plus eng Variant fir Faarftemperatur, Faarf a Sättegung, wann Är Luucht se ënnerstëtzt. Wielt eng Stouer aus an Dir kritt hire Positiounsslider, wielt e Mediaspiller aus an Dir kritt och eng Variant mat senger Quellelëscht, wielt e Robotstaubsauger aus an Dir kritt seng Knäppercher fir Start, Paus an Dock. All Virschlag ass eng ganz normal Bubble Card Konfiguratioun, als Live-Virschau gewisen, sou datt Dir déi hëllt déi am nooste läit a se wéi gewinnt weider ännert.

Wat proposéiert gëtt hänkt dovun of, wat Är Entitéit tatsächlech ka maachen: eng Luucht ouni Hellegkeetskanal kritt e Schalter amplaz vun engem Slider, eng Stouer déi net kippe kann kritt keng Kipp-Variant, eng Klima-Entitéit kritt hir Presetmoden nëmme wa se der huet. D'klassesch Entréë kommen ënner de Bubble Card Virschléi, wa se applizéiere: déi speziell Kaart fir dësen Entitéitstyp, e simpelt Knäppchen an e Slider.

> [!TIP]
> Moduler kënnen hir eege Virschléi op dës Lëscht setzen, kuckt [Moduler](#moduler).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Dës Kaart erlaabt et der, e Pop-up mat egal wéi engem Inhalt z'erstellen. All Pop-up ass **standardmäisseg verstoppt** a kann opgemaach ginn andeems een säi Link uspeelt (z.B. `'#pop-up-name'`), mat all Kaart déi d'`navigate` [Aktioun](#tipp--duebeltipp--an-halen-aktiounen) ënnerstëtzt, oder mam [horizontalen Knäppchen-Stapel](#horizontale-knäppchen-stapel), deen abegraff ass.

> [!TIP]
> ### Pop-up-Ausléiser 
> Dës Fonktioun erlaabt et der, e Pop-up baséiert op dem Zoustand vun enger Entitéit opzemaachen, zum Beispill kanns du e Pop-up "Sécherheet" mat enger Kamera opmaachen wann een virun dengem Haus steet. Du kanns och en Toggle-Helper (input_boolean) erstellen an säin Op-/Zoumaachen an enger Automatioun ausléisen.
> <details>
> <summary>E Pop-up opmaachen wann e <code>binary_sensor</code> <code>on</code> ass</summary>
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
> ### Verschidde Weeër fir e Pop-up zouzemaachen 
> Et gëtt vill Weeër fir e Pop-up zouzemaachen. Zum Beispill kanns du vum Pop-up-Header no ënnen wippen, andeems du eng laang Wipp am Pop-up bis no ënnen mëchs, andeems du um Desktop Escape dréckt, andeems du den Hash aus der URL läschs oder ganz einfach andeems du op de Zoumaach-Knäppchen klickst.
>


### Pop-up-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Ubidder | Ënnerstëtzte Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obligatoresch** | Egal wéi en eendeitegen Hash (z.B. `'#kitchen'`) mat ' ' | Sou méchs du däi Pop-up op |
| `popup_style` | string | Optional | `bubble` (Standard) oder `classic` | Definéiert de visuellen Stil vum Pop-up |
| `popup_mode` | string | Optional | `default` (Standard), `fit-content`, `centered` oder `adaptive-dialog` | Definéiert de Layout-Modus vum Pop-up |
| `with_bottom_offset` | boolean | Optional | `true` oder `false` (Standard) | Gëtt nëmme mat `popup_mode: fit-content` oder `adaptive-dialog` benotzt. Setzt en Ofstand ënnen um Mobil, nëtzlech wann däin Dashboard eng Footer-Kaart huet. |
| `full_width_on_mobile` | boolean | Optional | `true` oder `false` (Standard) | Gëtt nëmme mat `popup_mode: centered` benotzt. Erweidert de Pop-up op déi voll Bildschiermbreet um Mobil, nëtzlech op méi klenge Écranen. |
| `performance_mode` | string | Optional | `default` (Standard) oder `performance` | Optimiséiert d'Opmaach-Animatioun vum Pop-up. `performance` verzögert d'Uweise vum Inhalt an de Blur vum Hannergrond liicht a deaktivéiert och de Backdrop-Blur wann en agestallt ass. |
| `auto_close` | string | Optional | En Timeout a Millisekonnen (z.B. `10000` fir 10s) | Mécht de Pop-up automatesch no engem Timeout zou |
| `close_on_click` | boolean | Optional | `true` oder `false` (Standard) | Mécht de Pop-up automatesch no all Interaktioun zou |
| `close_by_clicking_outside` | boolean | Optional | `true` (Standard) oder `false` | Mécht de Pop-up zou wann een dobaussen klickt |
| `width_desktop` | string | Optional | Egal wéi en CSS-Wäert | Breet um Desktop (`100%` standardmäisseg um Mobil) |
| `margin` | string | Optional | Egal wéi en CSS-Wäert | Benotz dëst **nëmmen** wann däi Pop-up um Mobil net gutt zentréiert ass (z.B. `13px`) |
| `margin_top_mobile` | string | Optional | Egal wéi en CSS-Wäert | Ofstand uewen um Mobil (z.B. `-56px` wann däin Header verstoppt ass) |
| `margin_top_desktop` | string | Optional | Egal wéi en CSS-Wäert | Ofstand uewen um Desktop (z.B. `50vh` fir en hallef-grousse Pop-up oder `calc(100vh - 400px)` fir eng fix Héicht vun `400px`) |
| `bg_color` | string | Optional | Egal wéi en Hex-, RGB- oder RGBA-Wäert | D'Hannergrondfaarf vun dengem Pop-up (z.B. `#ffffff` fir e wäisse Hannergrond) |
| `bg_opacity` | string | Optional | Egal wéi e Wäert vun `0` bis `100` | D'Deckkraaft vum Hannergrond vun dengem Pop-up (z.B. `100` fir keng Transparenz) |
| `bg_blur` | string | Optional | Egal wéi e Wäert vun `0` bis `100` | Den Effet vum Blur op den Hannergrond vun dengem Pop-up, **dëst funktionéiert nëmmen wann `bg_opacity` net op `100` gesat ass** (z.B. `0` fir kee Blur) |
| `shadow_opacity` | string | Optional | Egal wéi e Wäert vun `0` bis `100` | D'Deckkraaft vum Schiet vun dengem Pop-up (z.B. `0` fir en ze verstoppen) |
| `hide_backdrop` | boolean | Optional | `true` oder `false` (Standard) | Setz dëst op true fir den éischte Pop-up vun dengem Haapt-Dashboard, fir de Backdrop bei all Pop-ups ze deaktivéieren. |
| `background_update` | boolean | Optional | `true` oder `false` (Standard) | Aktualiséiert den Inhalt vum Pop-up am Hannergrond (net recommandéiert) |
| `trigger` | object oder list | Optional | Kuckt [Konditiounen](#konditiounen) | Mécht dëse Pop-up op, wann d'Konditiounen erfëllt sinn |
| `trigger_entity` | string | Optional | Egal wéi eng Entitéit | Mécht dëse Pop-up op baséiert op dem Zoustand vun enger Entitéit, déi einfach Form vu `trigger` |
| `trigger_state` | string | Optional (**Obligatoresch** wann `trigger_entity` definéiert ass) | Egal wéi en Entitéits-Zoustand | Entitéits-Zoustand fir de Pop-up opzemaachen |
| `trigger_close` | boolean | Optional | `true` (Standard) oder `false` | Mécht de Pop-up zou, wann d'Konditiounen net méi erfëllt sinn. De Standard ass amplaz `false`, wann Dir dat eelert Pärchen `trigger_entity` an `trigger_state` benotzt |
| `open_action` | Objekt | Optional | Kuck [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Léist eng Aktioun aus wann de Pop-up opgeet |
| `close_action` | Objekt | Optional | Kuck [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Léist eng Aktioun aus wann de Pop-up zougeet |
| `show_header` | boolean | Optional | `true` (Standard) oder `false` | Weist/Verstoppt de Pop-up-Header komplett |
| `show_previous_button` | boolean | Optional | `true` oder `false` (Standard) | Weist e Zréck-Knäppchen niewent dem Zoumaach-Knäppchen a navigéiert zréck op de virege Pop-up, wa verfügbar |
| `show_close_button` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt de Zoumaach-Knäppchen, wärend de Rescht vum Header sichtbar bleift |
| `buttons_position` | string | Optional | `right` (Standard) oder `left` | Positioun vum Zoumaach- an Zréck-Knäppchen am Header |
| `cards` | Lëscht | Optional | Egal wéi eng Bubble Card, Home Assistant Kaart oder personaliséiert Kaart | Definéiert den Inhalt vun dengem Pop-up. Kuck d'Pop-up-Beispill hei ënnendrënner. |
| Du hues och Zougang zu [alle Knäppchen-Astellungen](#knäppchen) fir den Header vum Pop-up. | | Optional | | Wann net definéiert gëtt kee Header ugewisen |

</details>

<details>

<summary><b>CSS-Variablen (kuck <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Rundung vum Rand vum Pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Haapt-Hannergrondfaarf fir ënnerstëtzt Elementer vum Pop-up |
| `--bubble-pop-up-background-color` | `color` | Hannergrondfaarf vum Pop-up |
| `--bubble-backdrop-background-color` | `color` | Hannergrondfaarf fir de Backdrop |
| Du hues och Zougang zu [alle Knäppchen-CSS-Variablen](#knäppchen-optiounen) fir den Header vum Pop-up. | | |

</details>


### Standalone-Pop-up-Format (v3.2.0+)

Zënter der v3.2.0 benotze Pop-ups en neit Standalone-Format, wou d'Inhalts-Kaarten direkt am Pop-up mat der `cards`-Optioun definéiert ginn. Dëst bitt eng besser Performance an en neit, sektiounsbaséiert Drag-and-Drop-Editiirungserliefnis.


#### Beispiller

<details>

<summary>E Pop-up (Standalone-Format)</summary>

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

<summary>E Knäppchen fir de Pop-up opzemaachen</summary>

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

## Horizontale Knäppchen-Stapel

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Dës Kaart ass e gudde Begleeder fir d'Pop-up-Kaart, well se erlaabt d'entspriechend Pop-ups opzemaachen. Si erlaabt et der och all Säit vun dengem Dashboard opzemaachen. Zousätzlech kanns du deng Bewegungs-/Präsenz-Sensoren dobäisetzen, sou datt d'Reiefolleg vun de Knäppercher sech no dem Raum riicht, an deen du grad eragaange bass. Dës Kaart ass scrollbar, bleift sichtbar an handelt wéi eng Footer.

> [!IMPORTANT]  
> Dës Kaart muss déi lescht an denger View sinn (no all Kaart a Pop-up). Si kann an kengem Stack sinn.

### Optiounen vum horizontalen Knäppchen-Stapel

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Ubidder | Ënnerstëtzte Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obligatoresch** | Den Hash vum Pop-up (z.B. `'#kitchen'`) mat ' ' oder egal wéi en Link | E Link deen opgeet |
| `1_name` | string | Optional | Egal wéi eng Zeecheketten | En Numm fir däi Knäppchen |
| `1_icon` | string | Optional | Egal wéi en `mdi:`-Ikon | En Ikon fir däi Knäppchen |
| `1_entity` | string | Optional | Egal wéi eng Luucht oder Luuchte-Grupp | Weist d'Faarf vun där Luucht am Hannergrond |
| `1_pir_sensor` | string | Optional | Egal wéi en Binär-Sensor | Op d'mannst ee PIR-Sensor oder méi fir `auto_order`, dëst funktionéiert och mat egal wéi engem Entitéitstyp, zum Beispill kanns du Luuchte-Gruppen dobäisetzen an d'Reiefolleg wäert sech no deene leschte geännerte Zoustänn riichten. |
| `auto_order` | boolean | Optional | `true` oder `false` (Standard) | Ännert d'Reiefolleg vun de Knäppercher no der leschter Ännerungszäit vum `_pir_sensor`, **muss `false` sinn wann s du kee `_pir_sensor` a dengem Code hues** |
| `margin` | string | Optional | Egal wéi en CSS-Wäert | Benotz dëst **nëmmen** wann däi `horizontal-buttons-stack` um Mobil net gutt zentréiert ass (z.B. `13px`) |
| `width_desktop` | string | Optional | Egal wéi en CSS-Wäert | Breet um Desktop (`100%` standardmäisseg um Mobil) |
| `is_sidebar_hidden` | boolean | Optional | `true` oder `false` (Standard) | Fixéiert d'Positioun vum horizontalen Knäppchen-Stapel wann d'Säitläist um Desktop verstoppt ass (nëmme wann s du selwer eng Ännerung gemaach hues fir se ze verstoppen) |
| `rise_animation` | boolean | Optional | `true` (Standard) oder `false` | Setz dëst op `false` fir d'Animatioun ze deaktivéieren, déi lassgeet sobal d'Säit gelueden ass |
| `highlight_current_view` | boolean | Optional | `true` oder `false` (Standard) | Ervirhieft den aktuellen Hash / d'aktuell View mat enger sanfter Animatioun |
| `hide_gradient` | boolean | Optional | `true` oder `false` (Standard) | Setz dëst op `false` fir de Gradient ze verstoppen |

> [!IMPORTANT]  
> D'Variabelen déi mat enger Zuel ufänken definéieren deng Knäppercher, änner just dës Zuel fir méi Knäppercher dobäizesetzen (kuck d'Beispill hei ënnendrënner).

</details>

<details>

<summary><b>CSS-Variablen (kuck <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Rundung vum Rand fir d'Knäppercher vum horizontalen Knäppchen-Stapel |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Hannergrondfaarf fir d'Knäppercher vum horizontalen Knäppchen-Stapel |

</details>


#### Beispill

<details>

<summary>En horizontale Knäppchen-Stapel deen sech baséiert op Präsenz-Sensoren selwer reorganiséiert</summary>

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

## Knäppchen

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Dës Kaart ass ganz villsäiteg. Si kann als **Schalter**, als **Slider**, als **Zoustand** oder als **Numm/Text**-Knäppchen benotzt ginn.

> [!TIP]
> ### Wat ass den Ënnerscheed tëscht all den Knäppchen-Typen?
>
> - **Schalter-Knäppchen:** Dëst ass den Standard-Knäppchen-Typ. Standardméisseg wiesselt en eng Entitéit an d'Hannergrondfaarf ännert sech no dem Zoustand vun der Entitéit oder der Faarf vun engem Luucht. Dir kënnt seng Aktioun am Beräich **Tipp-Aktioun op der Kaart** änneren.
>
> - **Slider-Knäppchen:** Dëse Knäppchen-Typ erlaabt Iech Entitéite mat astellbaren Beräicher ze kontrolléieren. Ideal fir Luuchten ze dimmen, an seng Fëllfaarf passt sech un d'Faarf vum Luucht un. Dir kënnt en och benotzen fir Wäerter unzeweisen, wéi z.B. eng Batterie-Niveau.
>   Ënnerstëtzt Entitéiten fir Sliderën:
>   - Luucht (Hellegkeet)
>   - Mediaspiller (Volumm)
>   - Stouer (Positioun)
>   - Ventilator (Prozentsaz)
>   - Klima (Temperatur)
>   - Zuel-Agab a Zuel (Wäert)
>   - Batterie-Sensor (Prozentsaz, nëmmen liesen)
>
>   Dir kënnt och all Entitéit mat engem numeresche Zoustand benotzen, andeems Dir de Filter fir Entitéiten an de **Slider-Astellungen** ausschalt, an dann d'Wäerter `min` an `max` definéiert. Dës Optioun ass nëmmen liesbar.
>
> - **Zoustand-Knäppchen:** Perfekt fir Informatiounen vun engem Sensor oder enger Entitéit unzeweisen. Wann Dir drop dréckt, weist et de "More info"-Panel vun der Entitéit. Seng Hannergrondfaarf ännert sech net.
>
> - **Numm/Text-Knäppchen:** Den eenzege Knäppchen-Typ deen keng Entitéit brauch. Et erlaabt Iech e kuerze Text, en Numm oder en Titel unzeweisen. Dir kënnt och Aktioune bäisetzen. Seng Hannergrondfaarf ännert sech net.

### Knäppchen-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Viraussetzung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoresch** | Egal wéi eng Entitéit | Eng Entitéit fir ze kontrolléieren |
| `button_type` | string | Optional | `switch` (Standard), `slider`, `state` oder `name` | D'Verhalen vun Ärem Knäppchen |
| `name` | string | Optional | Egal wéi ee String | En Numm fir Äre Knäppchen, wann net definéiert gëtt den Numm vun der Entitéit ugewisen |
| `icon` | string | Optional | Egal wéi eng `mdi:` Ikon | Eng Ikon fir Äre Knäppchen, wann net definéiert gëtt d'Ikon vun der Entitéit oder d'`entity-picture` ugewisen |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Gëtt der Ikon de Virrang virun der `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` Standard) | **Nëmme fir Luuchten.** Benotzt d'Akzentfaarf vum Theme amplaz vun der Faarf vum Luucht. |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Weist oder verstoppt de Zoustand vun Ärer `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt den Numm |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt d'Ikon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Ännerung vun Ärer `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Aktualiséierung vun Ärer `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Weist en Attribut vun Ärer `entity` ënner dem `name` |
| `attribute` | string | Optional (obligatoresch wann `show_attribute` op `true` gesat ass) | En Attribut vun Ärer `entity` | Den Attribut deen ugewise gëtt (z.B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaabt dem Text ze scrollen wann den Inhalt d'Gréisst vum Container iwwerschreift |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, kuckt hei ënnendrënner | Erlaabt d'Standardaktiounen beim Klick op de Knäppchen z'änneren. |
| `tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Klick op d'Ikon, wann net definéiert gëtt `more-info` benotzt |
| `double_tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Duebelklick op d'Ikon, wann net definéiert gëtt `none` benotzt |
| `hold_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Halen vun der Ikon, wann net definéiert gëtt `more-info` benotzt |
| `card_layout` | string | Optional | `normal` (Standard wa net an der Sektiouns-Usiicht), `large` (Standard an der Sektiouns-Usiicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | Egal wéi eng Zuel | Zuel vun de Reien (Héicht) (z.B. `2`) |
| `sub_button` | object | Optional | Kuckt [Sub-Knäppercher](#sub-knäppercher) | Fügt personaliséiert Knäppercher fix riets bäi |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Haaptfaarf vum Hannergrond fir ënnerstëtzte Elementer am Knäppchen |
| `--bubble-button-border-radius` | `px` | Ronnung vun de Kante fir de Knäppchen |
| `--bubble-button-icon-border-radius` | `px` | Ronnung vun de Kante fir de Container vun der Knäppchen-Ikon |
| `--bubble-button-icon-background-color` | `color` | Hannergrondfaarf fir de Container vun der Knäppchen-Ikon |
| `--bubble-light-white-color` | `color` | Ersetzt d'Standard-Wäissfaarf vun de Luucht-Knäpp/Sliderën |
| `--bubble-light-color` | `color` | Ersetzt d'Faarf vun de Luucht-Knäpp/Sliderën (och RGB-Luuchten) |
| `--bubble-button-box-shadow` | Kuckt [Box-Schiet](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box-Schiet fir de Knäppchen |

</details>

Dës Optioune sinn nëmme verfügbar wann `button_type` op `slider` gesat ass.

<details>

<summary><b>Slider-Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm                  | Typ    | Viraussetzung                     | Beschreiwung                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | De Minimumwäert vum Slider. Fir personaliséiert Sliderën.                                                    |
| `max_value`             | number  | Optional                        | De Maximumwäert vum Slider. Fir personaliséiert Sliderën.                                                    |
| `step`                  | number  | Optional                        | De Schrëtt-Wäert vum Slider.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` Standard)      | Aktivéiert dat fréiert Slider-Verhalen, wou Dir tippt fir de Slider z'aktivéieren, amplaz en ze halen.        |
| `relative_slide`        | boolean | Optional (`false` Standard )     | Aktualiséiert de Wäert relativ zum Ufankswäert, amplaz zum Ufankspunkt vum Fangere.                                      |
| `read_only_slider`      | boolean | Optional (`false` Standard)      | Mécht de Slider nëmme liesbar. Automatesch aktivéiert fir e puer Entitéiten wéi Sensoren.                                        |
| `slider_live_update`    | boolean | Optional (`false` Standard)      | Den Zoustand vun der Entitéit gëtt beim Réckelen aktualiséiert. **Dëse Feature ass net fir all Entitéiten recommandéiert.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` oder `bottom` | Ännert d'Richtung vun der Fëllung vum Slider. Ouni Uginn vu lénks no riets, gespigelt a [Rietslénks-Sproochen](#lokaliséierung) |
| `slider_value_position` | string | Optional | `right`, `left`, `center` oder `hidden` | Positioun vun der Wäertusiicht. Ouni Uginn riets, a lénks a [Rietslénks-Sproochen](#lokaliséierung) |
| `invert_slider_value` | boolean | Optional (`false` Standard) | Kéiert d'Richtung vum Slider ëm (100% Fëllung entsprécht dem Minimum). Net verfügbar fir Faarwsliderën. |
| `light_slider_type` | string | Optional | `brightness` (Standard), `hue`, `saturation`, `white_temp` | **Nëmme fir Luuchten.** Wielt de Slider-Modus |
| `cover_slider_type` | string | Optional | `position` (Standard), `tilt_position` | **Nëmme fir Stouere.** Wielt de Slider-Modus (Positioun oder Neigung) |
| `hue_force_saturation` | boolean | Optional (`false` Standard) | **Nëmme fir Luuchten (Hue-Modus).** Forcéiert d'Sättigung beim Upassen vum Hue |
| `hue_force_saturation_value` | number | Optional (`100` Standard) | **Nëmme fir Luuchten (Hue-Modus).** Forcéierte Sättigungswäert (0-100) |
| `use_accent_color` | boolean | Optional (`false` Standard) | **Nëmme fir Luuchten (Hellegkeet-Modus).** Benotzt d'Akzentfaarf vum Theme amplaz vun der Faarf vum Luucht |
| `allow_light_slider_to_0` | boolean | Optional (`false` Standard)    | **Nëmme fir Luuchten.** Erlaabt dem Slider 0% z'erreechen, wat de Luucht ausschalt. Net verfügbar mat `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` Standard)      | **Nëmme fir Luuchten.** Aktivéiert sanft Iwwergäng bei der Hellegkeet fir ënnerstëtzt Luuchten.                           |
| `light_transition_time` | number  | Optional (`500` Standard)        | **Nëmme fir Luuchten.** D'Iwwergangszäit a Millisekonnen. Erfuerdert `light_transition: true`.            |

</details>

#### Beispiller

<details>

<summary>E Slider-Knäppchen deen d'Hellegkeet vun engem Luucht kontrolléiere kann</summary>

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

<summary>E Knäppchen mat méi Optiounen</summary>

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

## Mediaspiller

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Dës Kaart erlaabt Iech eng Mediaspiller-Entitéit ze kontrolléieren.

### Mediaspiller-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Viraussetzung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoresch** | Egal wéi ee Mediaspiller | De Mediaspiller deen ze kontrolléieren ass |
| `name` | string | Optional | Egal wéi ee String | En Numm fir Äre Mediaspiller, wann net definéiert gëtt den Numm vun der Entitéit ugewisen |
| `icon` | string | Optional | Egal wéi eng `mdi:` Ikon | Eng Ikon fir Äre Mediaspiller, wann net definéiert gëtt d'Ikon vun der Entitéit oder d'`entity-picture` ugewisen |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Gëtt der Ikon de Virrang virun der `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Weist oder verstoppt de Zoustand vun Ärer `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt den Numm |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt d'Ikon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Ännerung vun Ärer `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Aktualiséierung vun Ärer `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Weist en Attribut vun Ärer `entity` ënner dem `name` |
| `attribute` | string | Optional (obligatoresch wann `show_attribute` op `true` gesat ass) | En Attribut vun Ärer `entity` | Den Attribut deen ugewise gëtt (z.B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaabt dem Text ze scrollen wann den Inhalt d'Gréisst vum Container iwwerschreift |
| `min_volume` | number | Optional | Egal wéi eng Zuel | De Minimumwäert vum Volumm-Slider. |
| `max_volume` | number | Optional | Egal wéi eng Zuel | De Maximumwäert vum Volumm-Slider. |
| `cover_background` | boolean | Optional | `true` oder `false` (Standard) | Benotzt e verschwommene Media-Cover als Hannergrond vun der Kaart. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Erlaabt d'Standardaktiounen beim Klick op de Knäppchen z'änneren. |
| `tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Klick op d'Ikon, wann net definéiert gëtt `more-info` benotzt. |
| `double_tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Duebelklick op d'Ikon, wann net definéiert gëtt `none` benotzt. |
| `hold_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Halen vun der Ikon, wann net definéiert gëtt `more-info` benotzt. |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Réckelt d'Cover-Aktiounsknäppercher no ënnen (fix) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Mécht d'Aktiounsknäppercher ënnen op voller Breet (Standard: `true` wann d'Positioun `bottom` ass) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Ausriichtung vun den Aktiounsknäppercher ënnen wann net op voller Breet |
| `card_layout` | string | Optional | `normal` (Standard wa net an der Sektiouns-Usiicht), `large` (Standard an der Sektiouns-Usiicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | Egal wéi eng Zuel | Zuel vun de Reien (Héicht) (z.B. `2`) |
| `sub_button` | object | Optional | Kuckt [Sub-Knäppercher](#sub-knäppercher) | Fügt personaliséiert Knäppercher fix riets bäi |
| `hide` | object | Optional | Kuckt hei ënnendrënner | Verstoppt Knäppercher vun der Kaart |

#### Verstopp-Optiounen

| Numm | Typ | Viraussetzung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` oder `false` (Standard) | Verstoppt de Ofspill/Paus-Knäppchen |
| `volume_button` | boolean | Optional | `true` oder `false` (Standard) | Verstoppt de Volumm-Knäppchen |
| `previous_button` | boolean | Optional | `true` oder `false` (Standard) | Verstoppt de Virdrun-Knäppchen |
| `next_button` | boolean | Optional | `true` oder `false` (Standard) | Verstoppt de Weider-Knäppchen |
| `power_button` | boolean | Optional | `true` oder `false` (Standard) | Verstoppt de Puissance-Knäppchen |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Haaptfaarf vum Hannergrond fir de Mediaspiller |
| `--bubble-media-player-border-radius` | `px` | Ronnung vun de Kante fir de Mediaspiller |
| `--bubble-media-player-buttons-border-radius` | `px` | Ronnung vun de Kante fir d'Knäppercher vum Mediaspiller |
| `--bubble-media-player-slider-background-color` | `color` | Hannergrondfaarf fir de Volumm-Slider |
| `--bubble-media-player-icon-border-radius` | `px` | Ronnung vun de Kante fir de Container vun der Mediaspiller-Ikon |
| `--bubble-media-player-icon-background-color` | `color` | Hannergrondfaarf fir de Container vun der Mediaspiller-Ikon |
| `--bubble-media-player-box-shadow` | Kuckt [Box-Schiet](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box-Schiet fir de Mediaspiller |

</details>


#### Beispiller

<details>

<summary>E Mediaspiller mat alle Optiounen</summary>

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

## Stouer

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Dës Kaart erlaabt Iech Är `cover`-Entitéiten ze kontrolléieren.

### Stouer-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Viraussetzung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoresch** | Egal wéi eng Stouer | Eng Stouer fir ze kontrolléieren |
| `name` | string | Optional | Egal wéi ee String | En Numm fir Är Stouer, wann net definéiert gëtt den Numm vun der Entitéit ugewisen |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Gëtt der Ikon de Virrang virun der `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Weist oder verstoppt de Zoustand vun Ärer `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt den Numm |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt d'Ikon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Ännerung vun Ärer `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Aktualiséierung vun Ärer `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Weist en Attribut vun Ärer `entity` ënner dem `name` |
| `attribute` | string | Optional (obligatoresch wann `show_attribute` op `true` gesat ass) | En Attribut vun Ärer `entity` | Den Attribut deen ugewise gëtt (z.B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaabt dem Text ze scrollen wann den Inhalt d'Gréisst vum Container iwwerschreift |
| `icon_open` | string | Optional | Egal wéi eng `mdi:` Ikon | Eng Ikon fir Är oppe Stouer, wann net definéiert gëtt d'Standard-Ikon fir oppe Stoueren ugewisen |
| `icon_close` | string | Optional | Egal wéi eng `mdi:` Ikon | Eng Ikon fir Är zou Stouer, wann net definéiert gëtt d'Standard-Ikon fir zou Stoueren ugewisen |
| `icon_up` | string | Optional | Egal wéi eng `mdi:` Ikon | Eng Ikon fir Äre Knäppchen fir d'Stouer opzemaachen, wann net definéiert gëtt d'Standard-Ikon fir oppe Stoueren ugewisen |
| `icon_down` | string | Optional | Egal wéi eng `mdi:` Ikon | Eng Ikon fir Äre Knäppchen fir d'Stouer zouzemaachen, wann net definéiert gëtt d'Standard-Ikon fir zou Stoueren ugewisen |
| `open_service` | string | Optional | Egal wéi ee Service oder Skript | E Service fir Är Stouer opzemaachen, Standard `cover.open_cover` |
| `stop_service` | string | Optional | Egal wéi ee Service oder Skript | E Service fir Är Stouer ze stoppen, Standard `cover.stop_cover` |
| `close_service` | string | Optional | Egal wéi ee Service oder Skript | E Service fir Är Stouer zouzemaachen, Standard `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (Standard), `bottom`, `left`, `right`, `hidden` | Positioun vun de Kippknäppercher (nëmme wann d'Stouer d'Kippen ënnerstëtzt) |
| `open_tilt_service` | string | Optional | Egal wéi ee Service oder Skript | E Service fir d'Kippen opzemaachen, Standard `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Egal wéi ee Service oder Skript | E Service fir d'Kippen zouzemaachen, Standard `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Erlaabt d'Standardaktiounen beim Klick op de Knäppchen z'änneren. |
| `tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Klick op d'Ikon, wann net definéiert gëtt `more-info` benotzt. |
| `double_tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Duebelklick op d'Ikon, wann net definéiert gëtt `none` benotzt. |
| `hold_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Halen vun der Ikon, wann net definéiert gëtt `more-info` benotzt. |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Réckelt d'Mediakontrollen no ënnen (fix) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Mécht d'Kontrolle ënnen op voller Breet (Standard: `true` wann d'Positioun `bottom` ass) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Ausriichtung vun de Kontrolle ënnen wann net op voller Breet |
| `card_layout` | string | Optional | `normal` (Standard wa net an der Sektiouns-Usiicht), `large` (Standard an der Sektiouns-Usiicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | Egal wéi eng Zuel | Zuel vun de Reien (Héicht) (z.B. `2`) |
| `sub_button` | object | Optional | Kuckt [Sub-Knäppercher](#sub-knäppercher) | Fügt personaliséiert Knäppercher fix riets bäi |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Haaptfaarf vum Hannergrond fir ënnerstëtzte Elementer an der Stouer-Kaart |
| `--bubble-cover-border-radius` | `px` | Ronnung vun de Kante fir d'Stouer-Kaart |
| `--bubble-cover-icon-border-radius` | `px` | Ronnung vun de Kante fir de Container vun der Ikon vun der Stouer-Kaart |
| `--bubble-cover-icon-background-color` | `color` | Hannergrondfaarf fir de Container vun der Ikon vun der Stouer-Kaart |
| `--bubble-cover-box-shadow` | Kuckt [Box-Schiet](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box-Schiet fir d'Stouer-Kaart |
| `--bubble-button-box-shadow` | Kuckt [Box-Schiet](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box-Schiet fir d'Knäppercher an der Stouer-Kaart |

</details>


#### Beispill

<details>

<summary>Eng Kaart déi e Rollo kontrolléiere kann</summary>

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

## Auswiel

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Dës Kaart erlaabt Iech e Dropdown-Menü fir Är `input_select`/`select`-Entitéiten bäizesetzen. Dës Kaart ënnerstëtzt och d'Sub-Knäppercher an all déi gemeinsam Feature vu Bubble Card.

> [!TIP]
> Dir kënnt och Auswiel-Sub-Knäppercher hunn wann Dir wëllt, dëse Feature ass an alle Kaarten verfügbar déi d'Sub-Knäppercher ënnerstëtzen.

### Auswiel-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Viraussetzung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoresch** | Egal wéi eng Entitéit | Eng Entitéit fir ze kontrolléieren |
| `name` | string | Optional | Egal wéi ee String | En Numm fir Är Auswiel, wann net definéiert gëtt den Numm vun der Entitéit ugewisen |
| `icon` | string | Optional | Egal wéi eng `mdi:` Ikon | Eng Ikon fir Är Auswiel, wann net definéiert gëtt d'Ikon vun der Entitéit oder d'`entity-picture` ugewisen |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Gëtt der Ikon de Virrang virun der `entity-picture` |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Weist oder verstoppt de Zoustand vun Ärer `entity` |
| `show_name` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt den Numm |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt d'Ikon |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Ännerung vun Ärer `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Weist d'Zäit vun der lescht Aktualiséierung vun Ärer `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Weist en Attribut vun Ärer `entity` ënner dem `name` |
| `attribute` | string | Optional (obligatoresch wann `show_attribute` op `true` gesat ass) | En Attribut vun Ärer `entity` | Den Attribut deen ugewise gëtt (z.B. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaabt dem Text ze scrollen wann den Inhalt d'Gréisst vum Container iwwerschreift |
| `tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Klick op d'Ikon, wann net definéiert gëtt `more-info` benotzt. |
| `double_tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Duebelklick op d'Ikon, wann net definéiert gëtt `none` benotzt. |
| `hold_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Halen vun der Ikon, wann net definéiert gëtt `more-info` benotzt. |
| `card_layout` | string | Optional | `normal` (Standard wa net an der Sektiouns-Usiicht), `large` (Standard an der Sektiouns-Usiicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | Egal wéi eng Zuel | Zuel vun de Reien (Héicht) (z.B. `2`) |
| `sub_button` | object | Optional | Kuckt [Sub-Knäppercher](#sub-knäppercher) | Fügt personaliséiert Knäppercher fix riets bäi |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Haaptfaarf vum Hannergrond fir ënnerstëtzte Elementer an der Auswiel-Kaart |
| `--bubble-select-background-color` | `color` | Hannergrondfaarf fir d'Auswiel-Kaart |
| `--bubble-select-list-border-radius` | `px` | Ronnung vun de Kante fir de Dropdown-Menü an der Kaart |
| `--bubble-select-list-item-accent-color` | `color` | Akzentfaarf fir den ausgewielten Element |
| `--bubble-select-list-background-color` | `color` | Hannergrondfaarf fir de Dropdown-Menü an der Kaart |
| `--bubble-select-list-width` | `px` | Breet vum Dropdown-Menü an der Kaart |
| `--bubble-select-arrow-background-color` | `color` | Hannergrondfaarf fir de Pfeil vum Dropdown |
| `--bubble-select-button-border-radius` | `px` | Ronnung vun de Kante fir den Auswiel-Knäppchen |
| `--bubble-select-border-radius` | `px` | Ronnung vun de Kante fir d'Auswiel-Kaart |
| `--bubble-select-icon-border-radius` | `px` | Ronnung vun de Kante fir de Container vun der Ikon vun der Auswiel-Kaart |
| `--bubble-select-icon-background-color` | `color` | Hannergrondfaarf fir de Container vun der Ikon vun der Auswiel-Kaart |
| `--bubble-select-box-shadow` | Kuckt [Box-Schiet](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box-Schiet fir d'Auswiel-Kaart |

</details>


#### Beispiller

<details>

<summary>Eng Auswiel-Kaart mat enger Lëscht vu Sceneën</summary>

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

Dës Kaart erlaabt Iech Är `climate`-Entitéiten ze kontrolléieren.

> [!TIP]
> Den Auswiel-Menü fir de Modus ass e [Sub-Knäppchen](#sub-knäppercher) dat automatesch bäigesat gëtt wann d'Kaart erstallt gëtt. Dir kënnt et duerno änneren oder ewechhuelen wéi Dir wëllt.

### Klima-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm                     | Typ    | Viraussetzung                         | Ënnerstëtzt Optiounen                                  | Beschreiwung                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obligatoresch**                        | Klima-Entitéit                                   | D'Entitéit déi ze kontrolléieren ass (z.B. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Egal wéi ee String                                       | E personaliséierten Numm fir d'Kaart. Wann net definéiert, gëtt den Numm vun der Entitéit ugewisen.                                    |
| `icon`                  | string  | Optional                            | Egal wéi eng `mdi:` Ikon                                  | Eng personaliséiert Ikon fir d'Kaart. Wann net definéiert, gëtt d'Ikon vun der Entitéit oder d'`entity-picture` benotzt.                   |
| `force_icon`            | boolean | Optional                            | `true` oder `false` (Standard)                     | Gëtt der Ikon de Virrang virun der `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` oder `false` (Standard)                     | Weist oder verstoppt den aktuellen Zoustand vun der `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (Standard) oder `false`                     | Weist oder verstoppt den Numm vun der Entitéit.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (Standard) oder `false`                     | Weist oder verstoppt d'Ikon.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (nëmmen fir Entitéiten déi `target_temp_low` ënnerstëtzen) | `true` oder `false` (Standard) | Verstoppt d'Kontroll vun der niddreger Zieltemperatur wann d'`entity` dat ënnerstëtzt.                                          |
| `hide_target_temp_high` | boolean | Optional (nëmmen fir Entitéiten déi `target_temp_high` ënnerstëtzen)| `true` oder `false` (Standard) | Verstoppt d'Kontroll vun der héijer Zieltemperatur wann d'`entity` dat ënnerstëtzt.                                         |
| `state_color`           | boolean | Optional                            | `true` oder `false` (Standard)                     | Applizéiert eng konstant Hannergrondfaarf wann d'Klima-Entitéit UN ass.                                              |
| `step` | number | Optional | Egal wéi eng Zuel | Den Temperaturschrëtt. |
| `min_temp` | number | Optional | Egal wéi eng Zuel | Déi minimal Temperatur. |
| `max_temp` | number | Optional | Egal wéi eng Zuel | Déi maximal Temperatur. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Erlaabt d'Standardaktiounen beim Klick op de Knäppchen z'änneren. |
| `tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Klick op d'Ikon, wann net definéiert gëtt `more-info` benotzt. |
| `double_tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Duebelklick op d'Ikon, wann net definéiert gëtt `none` benotzt. |
| `hold_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Halen vun der Ikon, wann net definéiert gëtt `more-info` benotzt. |                              |
| `main_buttons_position` | string | Optional | `default` oder `bottom` | Réckelt d'Klima-Aktiounsknäppercher no ënnen (fix) |
| `main_buttons_full_width` | boolean | Optional | `true` oder `false` | Mécht d'Aktiounsknäppercher ënnen op voller Breet (Standard: `true` wann d'Positioun `bottom` ass) |
| `main_buttons_alignment` | string | Optional | `end` (Standard), `center`, `start`, `space-between` | Ausriichtung vun den Aktiounsknäppercher ënnen wann net op voller Breet |
| `card_layout` | string | Optional | `normal` (Standard wa net an der Sektiouns-Usiicht), `large` (Standard an der Sektiouns-Usiicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | Egal wéi eng Zuel | Zuel vun de Reien (Héicht) (z.B. `2`) |
| `sub_button`            | object  | Optional                            | Kuckt [Sub-Knäppercher](#sub-knäppercher)                | Setzt personaliséiert Knäppercher fix riets bäi. Nëtzlech fir en Auswiel-Menü vum Klima-Modus.                                  |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Haaptfaarf vum Hannergrond fir ënnerstëtzte Elementer an der Klima-Kaart |
| `--bubble-climate-border-radius` | `px` | Ronnung vun de Kante fir ënnerstëtzte Elementer an der Klima-Kaart |
| `--bubble-climate-button-background-color` | `color` | Hannergrondfaarf fir d'Knäppercher vun der Klima-Kaart |
| `--bubble-climate-icon-border-radius` | `px` | Ronnung vun de Kante fir de Container vun der Ikon vun der Klima-Kaart |
| `--bubble-state-climate-fan-only-color` | `color` | Iwwerlagerungsfaarf fir de Fan-only-Zoustand |
| `--bubble-state-climate-dry-color` | `color` | Iwwerlagerungsfaarf fir den Dry-Zoustand |
| `--bubble-state-climate-cool-color` | `color` | Iwwerlagerungsfaarf fir den Cool-Zoustand |
| `--bubble-state-climate-heat-color` | `color` | Iwwerlagerungsfaarf fir den Heat-Zoustand |
| `--bubble-state-climate-auto-color` | `color` | Iwwerlagerungsfaarf fir den Auto-Zoustand |
| `--bubble-state-climate-heat-cool-color` | `color` | Iwwerlagerungsfaarf fir den Heat-Cool-Zoustand |
| `--bubble-climate-accent-color` | `color` | Akzentfaarf fir d'Klima-Kaart |
| `--bubble-climate-box-shadow` | Kuckt [Box-Schiet](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box-Schiet fir de Klima-Container. |

</details>


#### Beispiller

<details>

<summary>Eng Klima-Kaart mat engem Dropdown-Menü fir HVAC-Modi</summary>

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

## Kalenner

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Dës Kaart erlaabt Iech Är Kalenner-Entitéiten unzeweisen. Hire Inhalt kann gescrollt ginn, sou datt Dir liicht déi kommend Evenementer duerchbroddelt.

### Kalenner-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm                | Typ    | Viraussetzung  | Ënnerstëtzt Optiounen                               | Beschreiwung                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Egal wéi eng Zuel (Minimum: 1)                        | Zuel vun de Kalennerdeeg fir Evenementer ze siche, vun elo bis um Enn vum N-ten Dag (Standard: 7) |
| `entities`          | object  | **Obligatoresch** | En Objet vun enger Kalenner-Entitéit (kuckt hei ënnendrënner)            | D'Entitéit déi ze kontrolléieren ass (z.B. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obligatoresch** | Eng Kalenner-Entitéit                               | Déi Kalenner-Entitéit déi ugewise gëtt                                                          |
| `entities.color`    | string  | Optional     | Eng Faarf                                         | Eng personaliséiert Faarf fir de Kalenner-Chip. Wann net definéiert, gëtt eng automatesch Faarf gewielt |
| `days`              | number  | Optional     | Egal wéi eng Zuel (Minimum: 1)                         | Zuel vun de Kalennerdeeg fir Evenementer ze siche, vun elo bis um Enn vum N-ten Dag (Standard: 7) |
| `limit`             | number  | Optional     | Eng Zuel                                        | D'Zuel vun den Evenementer déi op der Kaart ugewise ginn                                  |
| `show_end`          | boolean | Optional     | `true` oder `false` (Standard)                     | Weist oder verstoppt d'Endzäit fir Evenementer                                                    |
| `show_progress`     | boolean | Optional     | `true` (Standard) oder `false`                     | Weist oder verstoppt de Fortschrëttsbalken vum Evenement                                                     |
| `show_started_events`| boolean | Optional     | `true` (Standard) oder `false`                     | Weist oder verstoppt Evenementer déi grad amgaang sinn. Evenementer iwwer méi Deeg gi Dag fir Dag bewäert, sou datt nëmmen den aktuellen Dag verstoppt gëtt an déi kommend Deeg siichtbar bleiwen |
| `scrolling_effect`  | boolean | Optional | `true` (Standard) oder `false` | Erlaabt dem Text ze scrollen wann den Inhalt d'Gréisst vum Container iwwerschreift |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` oder `hold_action`, kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Erlaabt Aktiounen beim Klick op en Evenement bäizesetzen. |
| `tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Klick op den Dag, wann net definéiert gëtt `none` benotzt. |
| `double_tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Duebelklick op den Dag, wann net definéiert gëtt `none` benotzt. |
| `hold_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Typ vun der Aktioun beim Halen vum Dag, wann net definéiert gëtt `none` benotzt. |
| `card_layout` | string | Optional | `normal` (Standard wa net an der Sektiouns-Usiicht), `large` (Standard an der Sektiouns-Usiicht), `large-2-rows`, `large-sub-buttons-grid` | Styling-Layout vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | Egal wéi eng Zuel | Zuel vun de Reien (Héicht) (z.B. `2`) |
| `sub_button` | object | Optional | Kuckt [Sub-Knäppercher](#sub-knäppercher) | Fügt personaliséiert Knäppercher fix riets bäi |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel                                  | Erwaarte Wäert | Beschreiwung                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Haaptfaarf vum Hannergrond fir ënnerstëtzte Elementer an der Kalenner-Kaart  |
| `--bubble-calendar-border-radius`         | `px`           | Ronnung vun de Kante fir ënnerstëtzte Elementer an der Kalenner-Kaart |
| `--bubble-calendar-height`                | `px`           | Héicht vun der Kalenner-Kaart                                        |

</details>

#### Beispiller

<details>

<summary>Eng Kalenner-Kaart mat enger limitéierter Zuel vun Evenementer</summary>

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

<summary>Eng Kalenner-Kaart mat enger Endzäit an engem Fortschrëttsbalken</summary>

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


## Trennlinn

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Dës Kaart ass eng einfach Trennlinn fir Äre Pop-up a Kategorien oder Sektiounen z'ënnerdeelen, z.B. Luuchten, Apparater, Stoueren, Astellungen, Automatiounen...

### Trennlinn-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Uwendung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `name` | string | Optional, awer recommandéiert | All string | E Numm fir Är Trennlinn |
| `icon` | string | Optional, awer recommandéiert | All `mdi:` Symbol | E Symbol fir Är Trennlinn |
| `card_layout` | string | Optional | `normal` (Standard wann net an der Sektiounsusiicht), `large` (Standard wann an der Sektiounsusiicht), `large-2-rows`, `large-sub-buttons-grid` | Layout-Stil vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | All Zuel | Zuel vun Zeilen (Héicht) (z.B. `2`) |
| `sub_button` | object | Optional | Kuckt [Sub-Knäppercher](#sub-knäppercher) | Fügt personaliséiert Knäppercher hannerholl uewen rietsun |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Hannergrondfaarf vun der Linn an der Trennlinn |

</details>

#### Beispill

<details>

<summary>Eng Trennlinn/Divider fir eng "Stoueren"-Sektioun</summary>

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

## Eidel Kolonn

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Dës Kaart ass do fir eng eidel Kolonn ze fëllen. Dat ass nëtzlech wann Dir en `horizontal-stack` an Ärem Pop-up hutt mat nëmmen enger Kaart. Kuckt an den ënneschte rietsen Eck vun dësem Screenshot fir se (net) ze gesinn.

### Eidel-Kolonn-Optiounen

Dës Kaart huet keng Optiounen an ënnerstëtzt kee [Styling](#styling), si ënnerstëtzt awer Layout-Optiounen fir HA-Sektiounen.

#### Beispill

<details>

<summary>Eng eidel Kolonn an engem horizontale Stack</summary>

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

## Nëmme Sub-Knäppercher

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Dës Kaart ass exklusiv fir Sub-Knäppercher. Si ass perfekt fir Menuen, séier Aktiounen, informativ Chips, oder eng fix Fousszeil um Enn vun der Säit.

> [!IMPORTANT]  
> Dës Kaart benotzt dat neit Sub-Knäppercher-Schema. Benotzt `sub_button.bottom` fir Är Knäppercher ze definéieren. D'Sektioun `sub_button.main` gëtt ignoréiert.

### Optiounen fir Nëmme Sub-Knäppercher

<details>

<summary><b>Optiounen (YAML + Beschreiwungen)</b></summary>

| Numm | Typ | Uwendung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obligatoresch** | Kuckt [Sub-Knäppercher](#sub-knäppercher) | Definéiert Är Sub-Knäppercher iwwer d'Sektioun `bottom` |
| `hide_main_background` | boolean | Optional | `true` oder `false` (Standard) | Entfernt den Hannergrond vun der Kaart |
| `footer_mode` | boolean | Optional | `true` oder `false` (Standard) | Fixéiert d'Kaart um Enn vun der Säit |
| `footer_full_width` | boolean | Optional | `true` oder `false` (Standard) | Mécht d'Fousszeil op voll Breet (100%) |
| `footer_width` | number | Optional | All Zuel | Breet vun der Fousszeil a Pixel wann `footer_full_width` op `false` steet |
| `footer_bottom_offset` | number | Optional | All Zuel | Distanz vum Enn vun der Säit a Pixel (Standard: `16`) |
| `card_layout` | string | Optional | `normal` (Standard wann net an der Sektiounsusiicht), `large` (Standard wann an der Sektiounsusiicht), `large-2-rows`, `large-sub-buttons-grid` | Layout-Stil vun der Kaart, kuckt [Kaarten-Layouten](#kaarten-layouten) |
| `rows` | number | Optional | All Zuel | Zuel vun Zeilen (Héicht) (z.B. `2`) |

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Breet vun der Fousszeil wann `footer_full_width` op `false` steet |
| `--bubble-footer-bottom` | `px` | Ofstand vun der Fousszeil um Enn |
| `--bubble-footer-box-shadow` | kuckt [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Schiet fir de Fousszeil-Container |

</details>

#### Beispiller

<details>

<summary>Chips (wéi op dem Screenshot)</summary>

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

<summary>E fixt Fousszeil-Menü</summary>

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

## Sub-Knäppercher

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

An all Kaart déi dës Optioun ënnerstëtzt, kënnt Dir Sub-Knäppercher derbäisetzen fir Är Kaarten nach méi ze personaliséieren. Dir kënnt zum Beispill e Knäppchen erstellen fir e Staubsauger, eng Wieder-Kaart, oder bal alles wat Dir Iech virstelle kënnt, ze steieren. Dës Sub-Knäppercher ënnerstëtzen d'Tipp-Aktiounen an déi meescht vun de Knäppchen-Optiounen.

Sub-Knäppercher ënnerstëtzen elo dräi Typen: **Standard (Knäppchen)**, **Slider** an **Dropdown / Auswiel**. Dir kënnt Typen an der selwechter Kaart mëschen, Sub-Knäppercher uewen oder ënnen placéieren, an si a Gruppen organiséieren fir méi avancéiert Layoute.

#### Placement an Gruppen vun Sub-Knäppercher

<details>

<summary><b>Struktur vun Sub-Knäppercher (main / bottom + Gruppen)</b></summary>

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

**Notizen:**
- `main` an `bottom` sinn zwou onofhängeg Sektiounen. Bottom-Sub-Knäppercher si fix um Enn vun der Kaart.
- `main_layout` an `bottom_layout` akzeptéiere `inline` (Standard) oder `rows` fir d'Gruppen vertikal ze stapelen.
- Gruppen si Objeten mat engem `group`-Array an optional `buttons_layout` (`inline` oder `column`).
- `justify_content` ass **nëmme fir bottom-Gruppen** verfügbar (`start`, `center`, `end`, `fill`).
- Wa bottom-Sub-Knäppercher present sinn, wiesselt de Kaarten-Layout automatesch op `large`, ausser Dir setzt explizit en anere Layout.
- Al `sub_button`-Arrayen ginn ëmmer nach ënnerstëtzt a ginn als `main`-Sektioun behandelt.

</details>

### Sub-Knäppercher-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwung)</b></summary>

| Numm | Typ | Uwendung | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- | --- |
| `entity` | string | Optional | All Entitéit | Eng Entitéit fir ze steieren |
| `name` | string | Optional | All string | E Numm fir Äre Sub-Knäppchen, wann net definéiert gëtt den Numm vun der Entitéit ugewisen |
| `icon` | string | Optional | All `mdi:` Symbol | En Symbol fir Äre Sub-Knäppchen, wann net definéiert gëtt d'Symbol oder d'Bild vun der Entitéit ugewisen |
| `force_icon` | boolean | Optional | `true` oder `false` (Standard) | Forcéiert d'Symbol och wann e Bild vun der Entitéit verfügbar ass |
| `sub_button_type` | string | Optional | `default`, `slider` oder `select` | Wielt den Typ vum Sub-Knäppchen |
| `show_background` | boolean | Optional | `true` (Standard) oder `false` | Weist en Hannergrond fir Äre Sub-Knäppchen, d'Faarf ännert sech baséierend op dem Zoustand vun der Entitéit |
| `state_background` | boolean | Optional | `true` (Standard) oder `false` | Benotzt d'Zoustandsfaarf wann d'Entitéit `on` ass |
| `light_background` | boolean | Optional | `true` (Standard) oder `false` | Benotzt d'Luuchtfaarf fir den Hannergrond, wann verfügbar |
| `show_state` | boolean | Optional | `true` oder `false` (Standard) | Weist oder verstoppt de Zoustand vun Ärer `entity` |
| `show_name` | boolean | Optional | `true` oder `false` (Standard) | Weist oder verstoppt den Numm |
| `show_icon` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt d'Symbol |
| `show_last_changed` | boolean | Optional | `true` oder `false` (Standard) | Weist déi lescht Ännerungszäit vun Ärer `entity` |
| `show_last_updated` | boolean | Optional | `true` oder `false` (Standard) | Weist déi lescht Aktualiséierungszäit vun Ärer `entity` |
| `show_attribute` | boolean | Optional | `true` oder `false` (Standard) | Weist en Attribut vun Ärer `entity` ënnert dem `name` |
| `attribute` | string | Optional (obligatoresch wa `show_attribute` op `true` steet) | En Attribut vun Ärer `entity` | Den Attribut deen ugewise gëtt (z.B. `brightness`) |
| `select_attribute` | string | Optional | Eng Attributslëscht vun Ärer `entity` (kuckt d'ënnerstëtzt Optiounen uewen) | Dës Attributslëscht mécht en Dropdown op wann ugeklickt (z.B. `effect_list`) |
| `show_arrow` | boolean | Optional | `true` (Standard) oder `false` | Weist oder verstoppt de Dropdown-Pfeil fir Auswiel-Sub-Knäppercher |
| `scrolling_effect` | boolean | Optional | `true` (Standard) oder `false` | Erlaabt Text ze scrollen wann den Inhalt méi grouss ass wéi de Container |
| `tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Aktiounstyp beim Klick op de Sub-Knäppchen, wann net definéiert gëtt `more-info` benotzt. |
| `double_tap_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Aktiounstyp beim Duebelklick op de Sub-Knäppchen, wann net definéiert gëtt `none` benotzt. |
| `hold_action` | object | Optional | Kuckt [Aktiounen](#tipp--duebeltipp--an-halen-aktiounen) | Definéiert den Aktiounstyp beim Halen vum Sub-Knäppchen, wann net definéiert gëtt `more-info` benotzt. |
| `fill_width` | boolean | Optional | `true` oder `false` | Fëllt déi verfügbar Breet (Standard: `false` fir main, `true` fir bottom) |
| `width` | number oder string | Optional | All Zuel oder CSS-Längt | Personaliséiert Breet (`px` fir d'main-Sektioun, `%` fir d'bottom-Sektioun als Standard) |
| `custom_height` | number | Optional | All Zuel | Personaliséiert Héicht a Pixel |
| `content_layout` | string | Optional | `icon-left` (Standard), `icon-top`, `icon-bottom`, `icon-right` | Placement vum Symbol am Sub-Knäppchen |
| `always_visible` | boolean | Optional | `true` oder `false` (Standard) | **Nëmme fir Slider.** Weist ëmmer de Slider, amplaz en beim Tippen opzemaachen |
| `show_button_info` | boolean | Optional | `true` oder `false` (Standard) | **Nëmme fir Slider.** Weist Symbol/Numm/Zoustand wann `always_visible` aktivéiert ass |
| `visibility` | object oder list | Optional | Kuckt [Konditiounen](#konditiounen) | Weist oder verstoppt de Sub-Knäppchen baséierend op Konditiounen |
| `hide_when_parent_unavailable` | boolean | Optional | `true` oder `false` (Standard) | Verstoppt de Sub-Knäppchen wann d'Elteren-Entitéit vun der Kaart net verfügbar ass |
| `css_class` | string | Optional | Egal wéi eng Zeechenkette | Eng zousätzlech CSS-Klass um Sub-Knäppchen, fir en an Ären [Stiler](#styling) unzeschwätzen, egal wéi en heescht (z. B. `My value` gëtt `.my-value`) |

</details>

<details>

<summary><b>Slider-Sub-Knäppercher-Optiounen (déiselwecht wéi Knäppchen-Sliders)</b></summary>

<br>

Slider-Sub-Knäppercher ënnerstëtzen déiselwecht Slider-Optiounen wéi Knäppchen-Sliders, dorënner:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-Variabelen (kuckt <a href="#styling">Styling</a>)</b></summary>

| Variabel | Erwaarte Wäert | Beschreiwung |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Rondung vun de Käerten fir d'Sub-Knäppercher |
| `--bubble-sub-button-background-color` | `color` | Hannergrondfaarf fir d'Sub-Knäppercher |
| `--bubble-sub-button-outline` | `box-shadow` | Kontur déi engem Sub-Knäppchen oder engem Slider nëmmen dann derbäigesat gëtt, wann dat Element déiselwecht Faarf mécht wéi d'Kaart derhannert, wat et onsichtbar géif maachen (setzt en op `none` fir en ewechzehuelen) |
| `--bubble-sub-slider-border-radius` | `px` | Rondung vun de Käerten fir Slider-Sub-Knäppercher |
| `--bubble-sub-slider-background-color` | `color` | Hannergrondfaarf fir Slider-Sub-Knäppercher |
| `--bubble-sub-slider-height` | `px` | Héicht fir ëmmer-siichtbar Slider-Sub-Knäppercher |
| `--bubble-sub-slider-outline` | `box-shadow` | Kontur nëmme vun de Slider-Sub-Knäppercher, fällt zréck op `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Textfaarf op hellen Hannergrënn vum Sub-Knäppchen |

</details>

#### Beispiller

<details>

<summary>E Knäppchen mat e puer Sub-Knäppercher fir eng Staubsauger-Kaart ze maachen (wéi op dem Screenshot)</summary>

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

<summary>E Knäppchen-Slider mat engem Sub-Knäppchen dee d'Hellegkeet weist an engem deen d'Luucht an-/ausschalt (wéi op dem Screenshot)</summary>

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

<summary>E Knäppchen dee d'Innen- an Ausseriwwerteperatur weist mam Wieder fir haut a muer (Screenshot dobäi)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Pech fir mech ass et bei mir ëmmer wollekeg, awer all d'Symboler änneren sech baséierend op dem Wieder.

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

## Kaarten-Layouten

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card ënnerstëtzt d'Home Assistant Sektiounsusiicht vollstänneg, Dir kënnt de Kaarten-Layout änneren fir d'Kaart méi grouss ze maachen, an och d'Zuel vu Kolonnen oder Zeilen änneren, déi d'Kaart an Ärer Sektiounsusiicht aschléisse soll (nëmmen bei de Kaarten, déi dës Optioun ënnerstëtzen). Dës Layoute gi genee esou an alle anere Usiicht-Typen ënnerstëtzt.

<details>

<summary><b>Verfügbar Kaarten-Layouten</b></summary>

| Layout | Beschreiwung |
| --- | --- |
| `normal` | De regulären Layout (net optiméiert fir d'Sektiounsusiicht) |
| `large` | E méi groussen Layout, dee sech un déi ausgewielt Zeile an der Sektiounsusiicht upasst (optiméiert fir d'Sektiounsusiicht) |
| `large-2-rows` | E méi groussen Layout mat 2 Zeile vu Sub-Knäppercher, dee sech un déi ausgewielt Zeile an der Sektiounsusiicht upasst (optiméiert fir d'Sektiounsusiicht) |
| `large-sub-buttons-grid` | Dëse Layout weist d'Sub-Knäppercher an engem Rouster un, `rows` muss op mannst op `2` gesat sinn.

</details>

#### Beispiller

<details>

<summary>E grousse Knäppchen dee Energiestatistiken weist mat 2 Zeile vu Sub-Knäppercher (Screenshot dobäi)</summary>

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

<summary>E grousse Knäppchen mat méi Zeilen a 12 Sub-Knäppercher</summary>

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

## Konditiounen

E puer Optioune ginn duerch Konditioune gesteiert, déi genee esou geschriwwe ginn wéi déi vun der [Konditiounskaart](https://www.home-assistant.io/dashboards/conditional/) vum Home Assistant:

- `visibility` op engem [Sub-Knäppchen](#sub-knäppercher), fir en ze weisen oder ze verstoppen
- `trigger` op engem [Pop-up](#pop-up), fir en opzemaachen, wann d'Konditiounen erfëllt sinn
- `checkConditionsMet(conditions, hass)` an Ären [Templates](#templates), wann Dir d'Äntwert an Ärem eegene Code braucht

All Konditiounstyp vum Home Assistant gëtt ausgewäert: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, an d'Gruppen `and`, `or` an `not`. D'Konditioune vum Konditiounsbauer vum Home Assistant funktionéieren och, déi déi no hirem Domain benannt sinn, wéi `sun.is_up`, `light.is_on`, `zone.in_zone` oder `temperature.is_value`, mat hiren Astellungen `target`, `options`, `behavior` an `for`.

<details>

<summary><b>Beispill</b></summary>

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
> Konditioune ginn an Ärem Browser ausgewäert, dofir kënnen déi puer, déi de Home Assistant Server brauchen, net exakt sinn: Sonnenopgang a Sonnenënnergang gi vun der Entitéit `sun.sun` gelies amplaz nei berechent ze ginn, an eng `for` Dauer gëtt vun der leschter Zoustandsännerung u gemooss, ouni d'Historique vum Recorder.
>
> `view_columns` gëtt ugeholl, awer passéiert ëmmer, well Bubble Card ni deen ass deen d'Kolonne vun Ärer Vue uleeë. E Konditiounstyp deen Bubble Card net kennt mellt sech eemol an Ärer Browserkonsol, amplaz roueg ze versoen, sou datt Dir en Tippfeeler vun enger feelender Fonktioun ënnerscheede kënnt.

<br>

---

<br>

## Tipp-, Duebeltipp- an Halen-Aktiounen

Dir kënnt och déi Standard Home Assistant Tipp-Aktiounen, Duebeltipp-Aktiounen an Halen-Aktiounen op de Kaarte benotzen, déi dës Optioun ënnerstëtzen. Dëst erlaabt zum Beispill d'Fenster "méi Info" ze weisen wann Dir en Symbol vun engem Knäppchen hält, oder e Service auszeféieren wann op e Sub-Knäppchen gedréckt gëtt.

**Notiz: Wann eng `double_tap_action` konfiguréiert ass, huet déi regulär `tap_action` eng Verzögerung vun 200ms fir d'Erkennung
vun engem Duebeltipp z'erlaben. Wann dës Verzögerung net erwënscht ass, setzt `double_tap_action` op `none` fir d'Behandlung vum Duebeltipp ze desaktivéieren.**

### Aktiouns-Optiounen

<details>

<summary><b>Optiounen (YAML + Beschreiwung)</b></summary>

| Numm | Typ | Ënnerstëtzt Optiounen | Beschreiwung |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Aktioun déi ausgefouert gëtt |
| `target` | object |  | Fonctionnéiert nëmmen mat `call-service`. Follegt d'[home-assistant Syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | All Wee vun Ärem Dashboard | Wee fir dohinner ze navigéieren (z.B. `'#kitchen'` fir en Pop-up opzemaachen) wann d'Aktioun als navigate definéiert ass |
| `url_path` | string | All Link | URL déi beim Klick opgeet (z.B. `https://www.google.com`) wann d'Aktioun `url` ass |
| `service` | string | All Service | Service dee gruff gëtt (z.B. `media_player.media_play_pause`) wann `action` als `call-service` definéiert ass |
| `data` oder `service_data` | object | All Service-Date | Service-Date déi matgeschéckt ginn (z.B. `entity_id: media_player.kitchen`) wann `action` als `call-service` definéiert ass |
| `confirmation` | object | Kuckt [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Weist e Bestätegungs-Pop-up (net ee vu Bubble Card), iwwerschreift den Standard-Objet `confirmation` |

</details>

#### Beispill

<details>

<summary>E Knäppchen fir en Pop-up opzemaachen</summary>

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

Dir kënnt eegen Styles bäisetzen fir d'CSS vun alle Kaarten ze änneren **ouni card-mod ze benotzen** op véier Weeër:

- Am Editor, gitt op d'Kaart déi Dir änneren wëllt, an navigéiert dann op _Styling options > Custom styles & JS templates_, an setzt Är eegen Styles derbäi (kuckt d'Tipps a Beispiller hei ënnendrënner).
- Am Editor (oder an [YAML](#moduler)), gitt op d'Kaart déi Dir änneren wëllt, navigéiert dann op _Moduler_, erstellt dann e neit Modul (et ass fir all Kaarten verfügbar), oder gitt op de **Module Store** fir e verfügbaart Modul z'installéieren (méi Detailer iwwer Moduler fannt Dir [hei ënnendrënner](#moduler)).
- An enger [Theme](https://www.home-assistant.io/integrations/frontend/#defining-themes) Datei andeems Dir CSS-Variablen a YAML dobäisetzt (dës sinn an all Kaart senger Dokumentatioun hei uewen verfügbar). Dëst erlaabt globale Modifikatiounen.

  <details>
  
  <summary>Beispill</a></summary>
  
  <br>

  Kopéiert net d'Zeil `Bubble:`, dëst ass den Numm vum Theme deen Dir benotzt. Dir musst och d'`--` vun de Variabelen ewechhuelen.

  Dir musst d'Aktioun [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) lafe loossen fir den Theme no all Ännerung z'aktualiséieren.

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
  
- An YAML andeems Dir `styles: |` gefollegt vun Ären eegene Styles bäisetzt (kuckt d'Tipps a Beispiller hei ënnendrënner).

> [!TIP]  
> **Fir ze verstoen wéi eng Style-Klassen kënnen geännert ginn**, kënnt Dir e Bléck an den [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) Dossier an dësem Repository werfen. An all Kaarten-Dossier fannt Dir eng Datei mam Numm `styles.css`. Dës Dateien enthalen all déi ugewannt Styles. Dëst erlaabt vill méi Méiglechkeeten wéi CSS-Variablen, muss awer individuell op all Kaart bäigesat ginn.
> 
> Dir fannt och vill [Beispiller aus der Community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), oder e puer aus dem [Home Assistant Forum](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) andeems Dir e bësse sicht.
>
> Den Bubble Theme fir Home Assistant (wéi op de Screenshots) fannt Dir [hei](https://github.com/Clooos/Bubble).
>
> E Tutorial-Video kënnt geschwënn op mengem [YouTube-Kanal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> W.e.g. bedenkt datt Dir bei e puer schonn definéierte CSS-Styles `!important;` bäisetze musst (kuckt d'Beispiller hei ënnendrënner).

> [!TIP]  
> Sub-Knäppercher kënnen iwwer numm-baséiert Klassen gezielt ginn. Zum Beispill kann e Sub-Knäppchen mam Numm "My sub-button" mat `.my-sub-button` gestyled ginn. Sliderfërmeg Sub-Knäppercher weisen och `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, asw.
>
> Eng numm-baséiert Klass ännert sech, wann Dir e Sub-Knäppchen ëmbenennt, a se gëtt iwwersat, wann den Numm iwwersat gëtt. Setzt `css_class` um Sub-Knäppchen, fir eng eege Klass ze kréien déi sech ni beweegt, egal wéi en heescht an egal a wéi enger Sprooch.

#### Beispiller

<details>

<summary>D'Schrëftgréisst vun enger Bubble Card änneren</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>D'Hannergrondfaarf vun engem eenzelne Knäppchen an engem horizontalen Knäppchen-Stapel änneren</summary>

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

<summary>D'Hannergrondfaarf vun enger Kaart änneren</summary>

<br>

Dëst funktionéiert op alle Bubble Card Typen (ausser bei de Pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Dëst mécht dat selwecht nëmmen an enger Button-Kaart (et funktionéiert och fir den Pop-up-Header): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Fir d'Faarf ze änneren wann et `on` ass, kuckt Iech d'Style-Templates hei ënnendrënner un.

</details>

<details>

<summary>D'Faarf vun engem Knäppchen-Slider änneren</summary>

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

<summary>D'Faarf vun der Linn vun enger Trennlinn änneren</summary>

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

<summary>D'Faarf vun engem Ikon änneren</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Fir en Ikon an engem horizontalen Knäppchen-Stapel.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>D'Hannergrondfaarf vun engem Ikon-Container änneren</summary>

<br>

Dëst funktionéiert op alle Bubble Card Typen (ausser bei de Pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Dëst mécht dat selwecht fir den Pop-up-Header: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>D'Gréisst vun de Sub-Knäppercher änneren (perfekt fir dat grousst Layout)</summary>

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

<summary>D'Hannergrondfaarf vum zweeten Sub-Knäppchen änneren</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>D'Gréisst vun engem Ikon änneren</summary>

<br>

Fir den Haapt-Ikon.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Fir d'Ikonen vun de Sub-Knäppercher.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>E Bild amplaz vun engem Ikon an engem Sub-Knäppchen benotzen</summary>

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

Ladt einfach dëst Bild an engem "pictures"-Dossier (oder wéi och ëmmer Dir e nenne wëllt) am "www"-Dossier vun Home Assistant erop.

</details>

<details>

<summary>Fortgeschratt Beispill: Eng horizontal Reih vu Sub-Knäppercher erstellen (mat Screenshot)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ech hunn dëst wierklech gär, ech benotzen et als Header op mengem Dashboard.

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

**Bubble Card ënnerstëtzt keng Jinja2-Templates**, awer fortgeschratt Benotzer kënnen Templates a JS direkt an hire [eegene Styles](#styling) bäisetzen. Dëst erlaabt zum Beispill dynamesch en Ikon, d'Texter oder d'Faarwen vun engem Element z'änneren, en Element bedingt weisen oder ze verstoppen (wéi en Sub-Knäppchen), oder bal alles baséierend op engem Status, engem Attribut a méi.

> [!TIP]  
> Méi Informatiounen iwwer JS-Templates [hei](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mäi Rot: kuckt ëmmer an d'Konsol vun Ärem Browser fir sécher ze goen datt alles korrekt funktionéiert.

> [!IMPORTANT]  
> **All Templates déi keng CSS-Eegeschaft änneren, mussen um Enn placéiert ginn! Wéi zum Beispill wann en Ikon, en Text oder en anert Element geännert gëtt.**

#### Verfügbar Variabelen a Funktiounen

<details>

<summary>Variabelen</summary>

<br>

Dir hutt Zougang zu dëse Variabelen an de meeschte Kaarten:

- `state` gëtt de Status vun Ärer definéierter `entity` zréck.
  
- `entity` gëtt Är Entitéit zréck, déi Dir definéiert hutt, wéi zum Beispill `switch.test` an dësem Beispill.
  
- `icon` kann esou benotzt ginn fir den Ikon z'änneren: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` gëtt de Status vun Ärem éischte Sub-Knäppchen senger definéierter `entity` zréck, `[0]` ass de Status vum éischte Sub-Knäppchen, `[1]` de Status vum zweeten...
  
- `subButtonIcon[0]` kann esou benotzt ginn fir den Ikon vum éischte Sub-Knäppchen z'änneren: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` ass den Ikon vum éischte Sub-Knäppchen, `[1]` vum zweeten...
  
- `card` gëtt d'Kaarten-Element am DOM zréck.
  
- `hass` ass eng fortgeschratt Variabel déi Iech nach méi Kontroll gëtt, zum Beispill kënnt Dir de Status vu `light.kitchen` esou zréckginn: `hass.states['light.kitchen'].state` oder en Attribut esou: `hass.states[entity].attributes.brightness`.

- `this` gëtt vill nëtzlech Informatiounen iwwer Är Konfiguratioun an Äre Dashboard zréck, benotzt dëst nëmmen wann Dir wësst wat Dir maacht.

</details>

<details>

<summary>Funktiounen</summary>

<br>

Dir hutt Zougang zu allen globalen JS-Funktiounen, awer och zu:

- `getWeatherIcon` kann benotzt ginn fir en Wieder-Ikon zréckzeginn baséierend op engem Status deen d'Wieder zréckgëtt. Zum Beispill kënnt Dir dëst maachen: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` fir den drëtte Sub-Knäppchen-Ikon op den haitegen Wieder-Ikon z'änneren, `.forecast[1]?.condition` ass fir muer...

  Dofir musst Dir e Template-Sensor uleeën. Hei ass wat Dir an Är `configuration.yaml` bäisetze kënnt:
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
- `checkConditionsMet(conditions, hass)` gëtt `true` zréck, wann eng Lëscht vu [Konditiounen](#konditiounen) erfëllt ass, zum Beispill `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` kann benotzt ginn fir e Status ze iwwersetzen (kann och benotzt ginn fir eng Statuseenheet ze kréien, ouni se manuell bäisetzen ze mussen).
- `hass.formatEntityAttributeValue(state, "attribute")` kann benotzt ginn fir en Attribut ze iwwersetzen (kann och benotzt ginn fir eng Statuseenheet ze kréien, ouni se manuell bäisetzen ze mussen).

</details>

#### Beispiller

Dir fannt vill Beispiller hei ënnendrënner, awer Dir fannt och ganz fortgeschratt Templates op menger [Patreon-Säit](https://www.patreon.com/c/Clooos), wéi zum Beispill ee (mäi Liebling) dee bis zu véier bedingt Badges ronderëm d'Ikonen vun der Kaart erlaabt. Et ass och eng flott Manéier fir all d'Méiglechkeete vun de Bubble Card eegene Styles a Templates ze léieren!

<details>
<summary>Beispiller vu menger Patreon-Säit</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant ähnlech Badges op all Kaart bäisetzen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Formatéiert Datum an Zäit an enger Trennlinn weisen, ouni eng Entitéit ze benotzen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Den Status vun engem Sub-Knäppchen op zwou Zeilen weisen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Etiketten an Ikonen an engem Auswiel-Sub-Knäppchen personaliséieren</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">E perséinlechen Erënnerungs-Pop-up bäisetzen, deen nëmme bei Bedarf opgeet</a>
</p>

<br>

</details>

<details>

<summary>D'Hannergrondfaarf vun engem Knäppchen änneren, deen rout ass wann hien <code>off</code> ass a blo wann hien <code>on</code> ass</summary>

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

<summary>D'Hannergrondfaarf vun engem Knäppchen an engem horizontalen Knäppchen-Stapel änneren, baséierend op enger Entitéit</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>En Sub-Knäppchen bedingt weisen/verstoppen</summary>

<br>

Dëst weist den éischte Sub-Knäppchen nëmmen wann mäi Staubsauger festhänkt.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Dëst weist en Sub-Knäppchen wann d'Batterie ënner 10% läit. Nëtzlech mat engem Sub-Knäppchen dat "Batterie schwaach" weist.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>En Ikon oder Sub-Knäppchen-Ikon bedingt änneren</summary>

<br>

Dëst ännert en Knäppchen-Ikon nëmmen wann e Staubsauger festhänkt.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Dëst ännert den Ikon vum éischte Sub-Knäppchen nëmmen wann e Staubsauger festhänkt.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>D'Faarf vun engem Ikon oder Sub-Knäppchen-Ikon bedingt änneren</summary>

<br>

Dëst ännert d'Faarf vun engem Knäppchen-Ikon baséierend op sengem Status.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Dëst ännert d'Faarf vun engem Sub-Knäppchen-Ikon baséierend op sengem Status. `.bubble-sub-button-1` ass den éischten Sub-Knäppchen, ersetzt `1` wann Dir en anert Sub-Knäppchen-Ikon änneren wëllt.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>E Ventilator-Ikon bedingt animéieren</summary>

<br>

Dëst dréint en Knäppchen-Ikon wann e Ventilator `on` ass.
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

<summary>Texter templaten (wéi den Numm oder de Status)</summary>

<br>

Dëst ännert e Knäppchen-Numm/Status mat "Et ass grad sonneg" ofhängeg vun Ärem Wieder.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
oder wann et fir Sub-Knäppercher ugewannt gëtt:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Wann Dir de Status (`.bubble-state`) templaten wëllt, aktivéiert net `show_state: true`, aktivéiert einfach `show_attribute: true` ouni en Attribut.

</details>

<details>

<summary>Fortgeschratt Beispill: D'Faarf vun engem Sub-Knäppchen änneren wann e Pop-up opgeet</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Fortgeschratt Beispill: Den Numm vun enger Trennlinn templaten, baséierend op engem Status deen an Är Sprooch iwwersat ass</summary>

<br>

Dir kënnt `hass.formatEntityState(state)` benotzen fir e Status ze iwwersetzen an `hass.formatEntityAttributeValue(state, "attribute")` fir en Attribut ze iwwersetzen.

Dëst ännert den Numm an den Ikon baséierend op dem Wieder, "Nuageux" heescht "Bewölkt" op Franséisch.

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

Moduler si eng mächteg Funktioun déi Iech erlaabt, Är eegen Styles a Templates ze späicheren, erëmzebenotzen an iwwer all Är Bubble Cards ze deelen. Amplaz dee selwechte Code an e puer Kaarten eranzekopéieren, kënnt Dir e Modul erstellen an et iwwerall applizéieren wou Dir et braucht. Dëst mécht d'Verwalte vum Ausgesinn vun Ärem Dashboard vill méi einfach an effizient.

Awer dës Funktioun ass nach vill méi mächteg wéi dat, se erlaabt Iech och richteg Funktiounen selwer am Bubble Card Editor bäizesetzen, mat allen [Home Assistant Form](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) Optiounen!  
De Objet-Selector gouf verbessert fir Live-Ännerungen ze weisen an Attributer korrekt z'ënnerstëtzen.

E Modul kann och op de Kaartewieler vum Home Assistant äntweren, nieft den agebauten [Entitéite-Virschléi](#entitéite-virschléi): benotzt `suggestions` fir d'Kaarten déi en am viraus beschreiwe kann, an `suggestions_code`, wa se aus Ärer Installatioun berechent musse ginn, zum Beispill e Pop-up dee mat all Entitéit vum Beräich gebaut gëtt, zu deem déi gewielten Entitéit gehéiert. Béid Schlësselen sinn [hei](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) dokumentéiert.

Dir kënnt och den **Module Store** duerchbliederen fir [vun der Community erstallte Moduler](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) ze fannen an z'installéieren, oder Är eegen Kreatiounen ze deelen!

> [!TIP]
> De Code vun engem Modul funktionéiert genee esou wéi de Code am `styles` Beräich vun enger Kaart. All déiselwecht Variabelen a Funktiounen aus dem [Templates](#templates) Beräich sinn verfügbar.

<br>

### Ufanksinstallatioun

> [!IMPORTANT]
> Ugefaange mat der Versioun v3.1.0 ass Bubble Card Tools de recommandéierte Späicherbackend fir Moduler. Déi al Method mam Template-Sensor funktionéiert nach fir bestoend Installatiounen, awer nei Moduler an Module Store Funktioune ginn am beschten iwwer Bubble Card Tools ënnerstëtzt.

D'Integratioun Bubble Card Tools aktivéiert den Module Editor an de Module Store, a späichert Moduler als eenzel YAML-Dateien. Bestoend Moduler ginn automatesch migréiert.

D'Installatioun- an Konfiguratiounsschrëtt sinn hei erkläert:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Den Module Editor

Dir kënnt op den Module Editor vun de Astellungen vun all Kaart zougräifen, ënner dem **Moduler** Beräich. Den Editor bitt zwee Haapt-Tabs:

#### Tab "My Modules"

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Dësen Tab weist all Är installéiert Moduler an erlaabt Iech:

- Bestoend Moduler op déi aktuell Kaart **applizéieren**
- E neit Modul vu Grond op **erstellen**
- Bestoend Moduler mat Live-Virschau **änneren**
- Moduler déi Dir net méi braucht **läschen**
- Moduler **sichen** a **sortéieren** (alphabetesch, rezent, aktiv fir d'éischt)
- **Globalen Status setzen** fir e Modul automatesch op all Kaarten ze applizéieren
- Moduler **importéieren/exportéieren** fir Backup oder fir se ze deelen
- **Entitéite-Virschléi schreiwen** am Modul-Editor, ënner **Optional: Entitéite-Virschléi**, sou datt Äre Modul am Kaartewieler vum Home Assistant proposéiert gëtt. Souwuel d'Regelen ewéi och déi berechent Virschléi gi während dem Schreiwe gepréift, e Feeler do verhënnert d'Späicheren, an d'Virschau weist déi proposéiert Kaarte fir all Entitéit déi Dir wielt

#### Tab "Module Store"

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Dësen Tab weist [all verfügbar Moduler aus der Community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) an erlaabt Iech:

- All vun der Community erstallte Moduler **duerchbliederen**
- Moduler no Numm, Kompatibilitéit oder Schlësselwierder **sichen** a filteren
- Moduler mat engem Klick **installéieren**
- Installéiert Moduler aktualiséieren wann nei Versiounen verfügbar sinn (**Update**)

> [!TIP]
> Am Editor kënnt Dir net ënnerstëtzte Moduler aktivéieren fir Moduler ze testen déi nach net als kompatibel mat engem bestëmmte Kaartentyp markéiert sinn.

<br>

### Wéi Dir Moduler benotzt

#### E neit Modul erstellen

<details>

<summary>Klickt fir opzeklappen</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gitt an den Editor vun enger Kaart a klappt de **Moduler** Beräich op.
2. Klickt op **Create new module**.
3. Fëllt d'Modul-Informatiounen aus.
4. Schreift Ären CSS- an/oder JavaScript-Template-Code am **Code**-Editor.
5. (Optional) Erstellt eng eegen Konfiguratiouns-UI am **Editor**-Beräich (wéi de Faarfwieler am Screenshot hei uewen, voll Dokumentatioun verfügbar [hei](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Optional) Schreift Är **Entitéite-Virschléi**, sou datt Äre Modul am Kaartewieler vum Home Assistant proposéiert gëtt. De Panel préift wat Dir schreift, während Dir tippt, a seng Virschau weist déi proposéiert Kaarte selwer fir d'Entitéit vun Ärer Wiel.
7. Klickt op **Save**.

Ärt Modul ass elo verfügbar fir op all Är Kaarten benotzt ze ginn!

<br>

</details>

#### E Modul op eng Kaart applizéieren

<details>

<summary>Klickt fir opzeklappen</summary>

<br>

- **Iwwer den Editor:**

  - Gitt an den Editor vun der Kaart op déi Dir d'Modul applizéiere wëllt.
  - Klappt de **Moduler** Beräich op.
  - Klickt op d'Modul dat Dir aus der Lëscht applizéiere wëllt.
  - Ënner "Apply to" klickt op "This card". D'Modul ass elo aktiv. Dir kënnt e puer Moduler op déiselwecht Kaart applizéieren.

- **Iwwer YAML:**

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

#### E Modul global applizéieren

<details>

<summary>Klickt fir opzeklappen</summary>

<br>

Dir kënnt e Modul esou astellen datt et automatesch op all Bubble Cards applizéiert gëtt:

**Dëst ass net verfügbar fir Moduler mat engem Editor, well déi eng spezifesch Konfiguratioun brauchen fir ze funktionéieren.**

- **Iwwer den Editor:**

  - Am Module Editor fannt Dir Ärt Modul am Tab **My Modules**.
  - Aktivéiert de Knäppchen **All cards** niewent dem Modul-Numm.
  - D'Modul gëtt elo automatesch op all Kaarten applizéiert.
 
- **Iwwer YAML:**

  An Ärer Modul-YAML-Konfiguratioun (an `bubble-modules.yaml`) setzt einfach `is_global: true` bäi.

<br>

</details>

#### Eng eenzel Kaart vun engem globalen Modul ausschléissen

<details>

<summary>Klickt fir opzeklappen</summary>

<br>

Wann Dir e globaalt Modul hutt, awer et vun enger spezifescher Kaart ausschléisse wëllt:

- **Iwwer den Editor:**
  
  - Am **Moduler** Beräich vun der Kaart gesitt Dir déi global Moduler opgelëscht.
  - Klickt op e globaalt Modul, deaktivéiert "This card" fir et vun dëser spezifescher Kaart auszeschléissen.

- **Iwwer YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Ärt Modul am Module Store deelen

<details>

<summary>Klickt fir opzeklappen</summary>

<br>

Fir Ärt Modul am Module Store ze deelen, klickt am Module Editor, ënnen bei "Export Module", op "Copy for GitHub" a setzt den Inhalt an eng nei Diskussioun an der Kategorie [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Änneft d'Beschreiwung** (wa néideg), **d'Beispill** (fir YAML-Benotzer), a denkt drun **op d'mannst ee Screenshot** fir de Module Store bäizesetzen.

**Ärt Modul gëtt direkt duerno verfügbar** (no engem Store-Refresh), also kontrolléiert nach eng Kéier datt alles korrekt geschriwwe steet an d'Modul esou funktionéiert wéi erwaart. Dir kënnt d'Modul natierlech nach änneren/aktualiséieren nodeems et gedeelt gouf.

<br>

</details>

#### Versiounsverwaltung

<details>

<summary>Klickt fir opzeklappen</summary>

<br>

De Module Store kontrolléiert automatesch op Updates fir installéiert Moduler. Wa Updates verfügbar sinn:

1. Gesitt Dir en Update-Indikator am Tab **Module Store**.
2. Klickt op **Update** bei Moduler mat verfügbaren Updates.
3. Confirméiert d'Update am Module Store.

<br>

</details>

#### Ënnerstëtzt Kaartentypen definéieren

<details>

<summary>Klickt fir opzeklappen</summary>

<br>

E puer Moduler sinn eventuell net mat allen Kaartentype kompatibel. Dir kënnt uginn mat wéi enge Kaarten e Modul ënnerstëtzt gëtt.  
Wann Dir wëllt datt e Modul mat **allen Kaarten** kompatibel ass, loosst d'Feld `supported` einfach eidel (oder benotzt d'Optioun **All cards** am Editor).

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

### Beispiller

<details>
<summary>Einfacht Styling-Modul</summary>

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
<summary>Modul mat enger eegener Konfiguratioun</summary>

<br>

Dëst Modul ass [hei](https://github.com/Clooos/Bubble-Card/discussions/1231) verfügbar.

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

Méi Beispiller fannt Dir am Module Store, oder [hei](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokaliséierung

Bubble Card schwätzt Är Sprooch. Säin Editor ass an déi 64 Sproochen iwwersat, déi de Home Assistant ënnerstëtzt, an iwwerall wou de Home Assistant scho e Wuert fir eppes huet, gëtt seng eege Formuléierung iwwerholl, sou datt Dir an deenen zwou Uewerflächen déiselwecht Begrëffer liest.

Ënnen am Editor, nieft der Versiounsnummer, follegt e Schalter **Automatesch** der Sprooch vun Ärem Home Assistant. Schalt en aus an de ganzen Editor geet zréck op Englesch, wat praktesch ass fir engem Tutorial ze follegen oder e Problem ze mellen. Är Wiel gëtt an Ärem Browser gemierkt.

Dës Dokumentatioun ass och iwwersat, [an 62 Sproochen](languages.md), all ausser britescht Englesch, dat den Original weist. Dës Säite si fir jiddereen op, sou datt eng Formuléierung déi net zu Ärem eegene Home Assistant passt a puer Klicke ka verbessert ginn. Déi englesch Versioun bleift d'Referenz fir den Inhalt selwer.

<br>

---

<br>

## Hëllef

Zéckt net en Issue opzemaachen wann eppes net esou funktionéiert wéi erwaart. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Hutt Dir Froen oder Gedanken iwwer Bubble Card? Wëllt Dir Är Dashboards oder Entdeckungen deelen? Dir kënnt op d'Home Assistant Forum goen, op de Bubble Card Subreddit oder an de GitHub Discussions Beräich.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bäidroen

Bäiträg si wëllkomm! Egal ob et Bug-Fixe, nei Funktiounen, Iwwersetzungen oder Verbesserunge vun der Dokumentatioun sinn, zéckt net e Pull Request opzemaachen.

Ier Dir ufänkt, liest w.e.g. de [Developer Guide](DEVELOPERS.md), deen erkläert wéi Dir Är lokal Ëmwelt opsetzt, d'Projet baut an Är Ännerungen testt.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Spenden

Ech widmen de gréissten Deel vu menger Fräizäit dorunner, dëse Projet esou gutt wéi méiglech ze maachen. Wann Dir menger Aarbecht wärdegt, wier all Spend eng super Manéier fir Är Ënnerstëtzung ze weisen 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Merci un jiddereen fir Är Ënnerstëtzung, Dir sidd all meng gréisst Motivatioun!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
