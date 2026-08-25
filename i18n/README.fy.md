<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Dizze side is in automatyske oersetting. By twivel jildt de [oarspronklike Ingelske dokumintaasje](../README.md). Liket in sin net te kloppen? Alle help is wolkom, en [dizze side ferbetterje](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.fy.md) kostet mar in minút: GitHub soarget foar de fork en de pull request. Alfêst tank! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lês dit yn in oare taal](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card is in minimalistyske en oanpasbere kaartkolleksje foar Home Assistant, mei moderne pop-ups en in yntegreare Module Store mei mear as 100 modules makke troch de mienskip.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Ynhâldsopjefte

**[`Ynstallaasje`](#ynstallaasje)**  **[`Konfiguraasje`](#konfiguraasje)**  **[`Entiteitsuggestjes`](#entiteitsuggestjes)**  **[`Pop-up`](#pop-up)**  **[`Horizontale knoppenstack`](#horizontale-knoppenstack)**  **[`Knop`](#knop)**  **[`Mediaspiler`](#mediaspiler)**  **[`Sinneskerm`](#sinneskerm)**  **[`Seleksje`](#seleksje)**  **[`Klimaat`](#klimaat)**  **[`Aginda`](#aginda)**  **[`Skiedingsline`](#skiedingsline)**  **[`Lege kolom`](#lege-kolom)**  **[`Allinnich subknoppen`](#allinnich-subknoppen)**  **[`Subknoppen`](#subknoppen)**  **[`Kaartyndielingen`](#kaartyndielingen)**  **[`Betingsten`](#betingsten)**  **[`Aksjes`](#tik--dûbeltik--en-fêsthâldaksjes)**  **[`Styling`](#styling)**  **[`Sjabloanen`](#sjabloanen)**  **[`Modules`](#modules)**  **[`Lokalisaasje`](#lokalisaasje)**  **[`Help`](#help)**  **[`Bydrage`](#bydrage)**  **[`Donearje`](#donearje)**

<br>

## Ynstallaasje

**Leechste stipe Home Assistant-ferzje:** 2023.9.0

<details>

<summary>Sûnder HACS</summary>

<br>

1. Download dit bestân: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Set dit bestân yn dyn map `<config>/www`. Om de editor yn dyn taal te krijen, download ek `bubble-card-<lang>.json` út de [dist map](https://github.com/Clooos/Bubble-Card/tree/main/dist), bygelyks `bubble-card-fr.json`, en set it neist `bubble-card.js` (sûnder dat bliuwt de editor yn it Ingelsk)
3. Klik op dyn dashboard rjochtsboppe op it piktogram en dan op `Edit dashboard`
4. Klik nochris op dat piktogram en dan op `Manage resources`
5. Klik op `Add resource`
6. Kopiearje en plak dit: `/local/bubble-card.js?v=1`
7. Klik op `JavaScript Module` en dan op `Create`
8. Gean werom en fernij dyn side
9. Do kinst no rjochtsûnder op `Add card` klikke en sykje nei `Bubble Card`
10. Nei elke update fan it bestân moatst `/local/bubble-card.js?v=1` bewurkje en it ferzjenûmer ferheegje

Wurket it net, probearje dan gewoan dyn browsercache te wissen.

</details>

<details>

<summary>Mei HACS (Oanrekommandearre)</summary>

<br>

Mei dizze metoade krijst updates streekrjocht fia de Home Assistant Community Store

1. As HACS noch net ynstallearre is, download it dan neffens de ynstruksjes op [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Folje de earste konfiguraasje fan HACS neffens de ynstruksjes op [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Gean op dyn sydbalke nei "HACS"
4. Sykje nei "Bubble Card", of klik op de blauwe knop hjirûnder
5. Klik op "Download"
6. Gean werom nei dyn dashboard en klik rjochtsboppe op it piktogram en dan op `Edit dashboard`
7. Do kinst no rjochtsûnder op `Add card` klikke en sykje nei `Bubble Card`

Wurket it net, probearje dan dyn browser- of appcache te wissen (op al dyn apparaten as dat nedich is).

#### Fideo's

Do kinst ek in kykje nimme op myn YouTube-kanaal foar stap-foar-stap fideo's.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguraasje

Alle opsjes kinne yn de Home Assistant-bewurker ynsteld wurde. Mar hjirûnder yn de dokumintaasje fynst mear details en de YAML.

<details>

<summary><b>Wichtichste opsjes (YAML + beskriuwing)</b></summary>

| Namme | Type | Fereaske | Stipe opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `type` | string | **Fereaske** | `custom:bubble-card` | Type fan de kaart |
| `card_type` | string | **Fereaske** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` of `sub-buttons` | Type fan de Bubble Card, sjoch hjirûnder |
| `styles` | object list | Opsjoneel | Elke CSS-stylsheet | Hjirmei kinst de CSS fan dyn Bubble Card oanpasse, sjoch [styling](#styling) |

</details>

<details>

<summary><b>Globale CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radius fan de hoeken foar alle stipe eleminten |
| `--bubble-main-background-color` | `color` | Wichtichste eftergrûnkleur foar alle stipe eleminten |
| `--bubble-secondary-background-color` | `color` | Sekundêre eftergrûnkleur foar alle stipe eleminten |
| `--bubble-accent-color` | `color` | Aksintkleur foar alle stipe eleminten |
| `--bubble-icon-border-radius` | `px` | Radius fan de hoeken fan it piktogram foar alle stipe eleminten |
| `--bubble-icon-background-color` | `color` | Eftergrûnkleur fan it piktogram foar alle stipe eleminten |
| `--bubble-sub-button-border-radius` | `px` | Radius fan de hoeken foar alle subknoppen |
| `--bubble-sub-button-background-color` | `color` | Eftergrûnkleur foar alle subknoppen |
| `--bubble-box-shadow` | sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skaad foar alle stipe eleminten |
| `--bubble-border` | sjoch [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Râne foar alle stipe kaarten |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Besjoch dizze [fideo](https://www.youtube.com/watch?v=0hSQOlBxKKI) om mear te learen oer Bubble Card en syn mooglikheden.** Myn YouTube-kanaal is noch frij nij en rjochtet him op tutorials oer Home Assistant en Bubble Card. Skromje net om dy te abonnearjen, dat helpt om de sichtberheid fan myn kanaal te fergrutsjen. Alfêst tank!

<br>

---

<br>

## Entiteitsuggestjes

Sûnt Home Assistant 2026.6 krijst by it kiezen fan in entiteit yn de kaartkiezer in pear kant-en-klare kaarten oanbean, en Bubble Card foeget syn eigen resepten oan dy list ta. Kies in ljocht en dy krijst in kaart mei in helderheidsskúfregeler oanbean, plus in kleurtemperatuer-, in kleur- en in fersadigingsfariant as dyn ljocht dy stipet. Kies in sinneskerm en dû krigest de posysjeskúfregeler, kies in mediaspiler en dû krigest ek in fariant mei syn boarnelist, kies in stofsûger en dû krigest de knoppen starte, pauzearje en werom nei it dok. Elke suggestje is in gewoane Bubble Card-konfiguraasje dy't as live foarbyld toand wurdt, dus dû kinst dejinge nimme dy't it tichtst by komt en dy gewoan fierder bewurkje.

Wat oanbean wurdt hinget ôf fan wat dyn entiteit werklik kin: in ljocht sûnder helderheidskanaal krijt in skeakelder ynstee fan in skúfregeler, in sinneskerm dat net kantelje kin krijt gjin kantelfariant, in klimaatentiteit krijt syn foarynstelde modi allinnich as dy der binne. De klassike opsjes folgje ûnder de Bubble Card-suggestjes as se fan tapassing binne: de kaart foar dat type entiteit, in gewoane knop en in skúfregeler.

> [!TIP]
> Modules kinne har eigen suggestjes oan dy list tafoegje, sjoch [modules](#modules).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Mei dizze kaart kinst in pop-up meitsje mei elke ynhâld. Elke pop-up is **standert ferstoppe** en kin iepene wurde troch de link derfan te targetsjen (bgl. `'#pop-up-name'`), mei elke kaart dy't de aksje `navigate` [aksje](#tik--dûbeltik--en-fêsthâldaksjes) stipet, of mei de [horizontale knoppenstack](#horizontale-knoppenstack) dy't derby yn sit.

> [!TIP]
> ### Pop-uptrigger 
> Mei dizze funksje kinst in pop-up iepenje op basis fan de steat fan elke entiteit, bygelyks kinst in "Security"-pop-up mei in kamera iepenje as der ien foar dyn hûs stiet. Do kinst ek in tuggle-helper (input_boolean) meitsje en it iepenjen/sluten dêrfan yn in automatisearring triggerje.
> <details>
> <summary>In pop-up iepenje as in <code>binary_sensor</code> op <code>on</code> stiet</summary>
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
> ### Ferskillende manieren om in pop-up te sluten 
> Der binne in soad manieren om in pop-up te sluten. Sa kinst bygelyks fan de header fan de pop-up nei ûnderen swipe, in lange swipe binnen de pop-up nei ûnderen dwaan, op de buroblêd op Escape drukke, de hash yn de URL fuorthelje of gewoan op de slútknop drukke.
>


### Pop-up opsjes

<details>

<summary><b>Opsjes (YAML + útlis)</b></summary>

| Namme | Type | Fereaske | Stipe opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `hash` | string | **Fereaske** | Elke unike hash (bgl. `'#kitchen'`) mei ' ' | Sa iepenest dyn pop-up |
| `popup_style` | string | Opsjoneel | `bubble` (standert) of `classic` | Bepaalt it fisuele styl fan de pop-up |
| `popup_mode` | string | Opsjoneel | `default` (standert), `fit-content`, `centered` of `adaptive-dialog` | Bepaalt de yndielingsmodus fan de pop-up |
| `with_bottom_offset` | boolean | Opsjoneel | `true` of `false` (standert) | Wurdt allinnich brûkt mei `popup_mode: fit-content` of `adaptive-dialog`. Past in offset ûnderoan ta op mobyl, nuttich ast dyn dashboard in fuottekstkaart hat. |
| `full_width_on_mobile` | boolean | Opsjoneel | `true` of `false` (standert) | Wurdt allinnich brûkt mei `popup_mode: centered`. Fergrutet de pop-up nei folle skermbreedte op mobyl, nuttich op lytsere skermen. |
| `performance_mode` | string | Opsjoneel | `default` (standert) of `performance` | Optimalisearret de iepenanimaasje fan de pop-up. `performance` fertraget it renderjen fan de ynhâld en de eftergrûnwazichheid in bytsje, en skeakelet ek de backdrop-wazichheid út as dy oansetten is. |
| `auto_close` | string | Opsjoneel | In timeout yn millisekonden (bgl. `10000` foar 10s) | De pop-up automatysk slute nei in timeout |
| `close_on_click` | boolean | Opsjoneel | `true` of `false` (standert) | De pop-up automatysk slute nei elke ynteraksje |
| `close_by_clicking_outside` | boolean | Opsjoneel | `true` (standert) of `false` | De pop-up slute troch derbûten te klikken |
| `width_desktop` | string | Opsjoneel | Elke CSS-wearde | Breedte op desktop (standert `100%` op mobyl) |
| `margin` | string | Opsjoneel | Elke CSS-wearde | Brûk dit **allinnich** ast dyn pop-up net goed sintrearre is op mobyl (bgl. `13px`) |
| `margin_top_mobile` | string | Opsjoneel | Elke CSS-wearde | Boppemarge op mobyl (bgl. `-56px` ast dyn header ferstoppe is) |
| `margin_top_desktop` | string | Opsjoneel | Elke CSS-wearde | Boppemarge op desktop (bgl. `50vh` foar in heal grutte pop-up of `calc(100vh - 400px)` foar in fêste hichte fan `400px`) |
| `bg_color` | string | Opsjoneel | Elke hex-, rgb- of rgba-wearde | De eftergrûnkleur fan dyn pop-up (bgl. `#ffffff` foar in wite eftergrûn) |
| `bg_opacity` | string | Opsjoneel | Elke wearde fan `0` oant `100` | De eftergrûntransparânsje fan dyn pop-up (bgl. `100` foar gjin transparânsje) |
| `bg_blur` | string | Opsjoneel | Elke wearde fan `0` oant `100` | It wazich-effekt fan de eftergrûn fan dyn pop-up, **dit wurket allinnich ast `bg_opacity` net op `100` set is** (bgl. `0` foar gjin wazichheid)|
| `shadow_opacity` | string | Opsjoneel | Elke wearde fan `0` oant `100` | De transparânsje fan it skaad fan dyn pop-up (bgl. `0` om it te ferbergjen) |
| `hide_backdrop` | boolean | Opsjoneel | `true` of `false` (standert) | Set dit op true by de earste pop-up fan dyn haaddashboard om de backdrop op alle pop-ups út te skeakeljen. |
| `background_update` | boolean | Opsjoneel | `true` of `false` (standert) | De ynhâld fan de pop-up op de eftergrûn bywurkje (net oanrikkemandearre) |
| `trigger` | object of list | Opsjoneel | Sjoch [betingsten](#betingsten) | Iepenet dizze pop-up as oan de betingsten foldien is |
| `trigger_entity` | string | Opsjoneel | Elke entiteit | Dizze pop-up iepenje op basis fan de steat fan elke entiteit, de ienfâldige foarm fan `trigger` |
| `trigger_state` | string | Opsjoneel (**Fereaske** as `trigger_entity` ynsteld is) | Elke entiteitssteat | Entiteitssteat om de pop-up te iepenjen |
| `trigger_close` | boolean | Opsjoneel | `true` (standert) of `false` | Slút de pop-up as net mear oan de betingsten foldien wurdt. De standert is ynstee `false` as dû it âldere pear `trigger_entity` en `trigger_state` brûkst |
| `open_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | In aksje triggerje as de pop-up iepenet |
| `close_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | In aksje triggerje as de pop-up slút |
| `show_header` | boolean | Opsjoneel | `true` (standert) of `false` | De header fan de pop-up folslein sjen litte/ferbergje |
| `show_previous_button` | boolean | Opsjoneel | `true` of `false` (standert) | In foarige-knop sjen litte neist de slútknop en weromnavigearje nei de foarige pop-up as beskikber |
| `show_close_button` | boolean | Opsjoneel | `true` (standert) of `false` | De slútknop sjen litte of ferstopje, wylst de rest fan de header sichtber bliuwt |
| `buttons_position` | string | Opsjoneel | `right` (standert) of `left` | Posysje fan de slút- en foarige-knop yn de header |
| `cards` | list | Opsjoneel | Elke Bubble Card, Home Assistant-kaart of oanpaste kaart | Bepaalt de ynhâld fan dyn pop-up. Sjoch it pop-up foarbyld hjirûnder. |
| Do hast ek tagong ta [alle knopynstellingen](#knop) foar de header fan de pop-up. | | Opsjoneel | | As net ynsteld wurdt gjin header sjen litten |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radius fan de hoeken foar de pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Wichtichste eftergrûnkleur foar stipe eleminten fan de pop-up |
| `--bubble-pop-up-background-color` | `color` | Eftergrûnkleur fan de pop-up |
| `--bubble-backdrop-background-color` | `color` | Eftergrûnkleur foar de backdrop |
| Do hast ek tagong ta [alle CSS-fariabelen fan de knop](#knopopsjes) foar de header fan de pop-up. | | |

</details>


### Selsstannich pop-upformaat (fan v3.2.0)

Sûnt v3.2.0 brûke pop-ups in nij selsstannich formaat, wêrby't ynhâldkaarten streekrjocht binnen de pop-up definiearre wurde mei de opsje `cards`. Dit soarget foar bettere prestaasjes en in nije, sekje-basearre drag-and-drop-bewurkingservaring.


#### Foarbylden

<details>

<summary>In pop-up (selsstannich formaat)</summary>

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

<summary>In knop om de pop-up te iepenjen</summary>

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

Dizze kaart is in goede maat fan de pop-upkaart, wêrmei'st de bijbehearende pop-ups iepenje kinst. Ek kinst der elke side fan dyn dashboard mei iepenje. Dêrneist kinst dyn bewegings-/oanwêzigenssensors tafoegje sadat de folchoarder fan de knoppen him oanpast oan de keamer dêr'tst krekt ynkommen bist. Dizze kaart is skowber, bliuwt sichtber en fungearret as fuottekst.

> [!IMPORTANT]  
> Dizze kaart moat de lêste wêze yn dyn view (nei elke kaart en pop-up). Hy kin net binnen in stack sitte.

### Horizontale knoppenstack opsjes

<details>

<summary><b>Opsjes (YAML + útlis)</b></summary>

| Namme | Type | Fereaske | Stipe opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Fereaske** | De pop-up hash (bgl. `'#kitchen'`) mei ' ' of hokker link dan ek | In link om te iepenjen |
| `1_name` | string | Opsjoneel | Elke string | In namme foar dyn knop |
| `1_icon` | string | Opsjoneel | Elk `mdi:` piktogram | In piktogram foar dyn knop |
| `1_entity` | string | Opsjoneel | Elk ljocht of elke ljochtgroep | De kleur fan dat ljocht op de eftergrûn sjen litte |
| `1_pir_sensor` | string | Opsjoneel | Elke binêre sensor | Op syn minst ien pir-sensor of mear foar `auto_order`, it wurket eins ek mei elk entiteitstype, sa kinst bygelyks ljochtgroepen tafoegje en de folchoarder feroaret dan op basis fan de lêst wizige steaten. |
| `auto_order` | boolean | Opsjoneel | `true` of `false` (standert) | De folchoarder fan de knoppen feroarje neffens de lêste wizigingstiid fan de `_pir_sensor`, **dit moat `false` wêze ast gjin `_pir_sensor` yn dyn koade hast** |
| `margin` | string | Opsjoneel | Elke CSS-wearde | Brûk dit **allinnich** ast dyn `horizontal-buttons-stack` net goed sintrearre is op mobyl (bgl. `13px`) |
| `width_desktop` | string | Opsjoneel | Elke CSS-wearde | Breedte op desktop (standert `100%` op mobyl) |
| `is_sidebar_hidden` | boolean | Opsjoneel | `true` of `false` (standert) | De posysje fan de horizontale knoppenstack ferbetterje ast de sydbalke op desktop ferstoppe hast (allinnich ast dat sels oanpast hast) |
| `rise_animation` | boolean | Opsjoneel | `true` (standert) of `false` | Set dit op `false` om de animaasje út te skeakeljen dy't aktivearret sa gau't de side laden is |
| `highlight_current_view` | boolean | Opsjoneel | `true` of `false` (standert) | De aktuele hash / view markearje mei in floeiende animaasje |
| `hide_gradient` | boolean | Opsjoneel | `true` of `false` (standert) | Set dit op `false` om it kleurferrin te ferbergjen |

> [!IMPORTANT]  
> De variabelen dy't begjinne mei in getal definiearje dyn knoppen, feroarje gewoan dit getal om mear knoppen ta te foegjen (sjoch it foarbyld hjirûnder).

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Rânediameter foar de knoppen fan de horizontale knoppenstack |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Eftergrûnkleur foar de knoppen fan de horizontale knoppenstack |

</details>


#### Foarbyld

<details>

<summary>In horizontale knoppenstack dy't himsels omoardert op basis fan oanwêzigenssensors</summary>

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

Dizze kaart is tige fleksibel. Hy kin brûkt wurde as in **skeakel**, in **skúfregeler**, in **steat** of in **namme/tekst** knop.

> [!TIP]
> ### Wat binne de ferskillen tusken alle knoptypen?
>
> - **Skeakelknop:** Dit is it standertknoptype. Standert skeakelet er in entiteit en feroaret de eftergrûnkleur op basis fan de steat fan de entiteit as de kleur fan in ljocht. Jo kinne de aksje feroarje yn de seksje **Tap action on card**.
>
> - **Skúfregelerknop:** Mei dit knoptype kinne jo entiteiten mei oanpasbere berikken regelje. It is ideaal foar it dimmen fan ljochten, en de fulling folget de kleur fan it ljocht. Jo kinne it ek brûke om wearden te toanen, lykas in batterijnivo.
>   Untersteune entiteiten foar skúfregelers:
>   - Ljocht (helderens)
>   - Mediaspiler (folume)
>   - Sinneskerm (posysje)
>   - Fentilator (persintaazje)
>   - Klimaat (temperatuer)
>   - Ynfiernûmer en nûmer (wearde)
>   - Batterijsensor (persintaazje, allinnich lêze)
>
>   Jo kinne ek elke entiteit mei in numerike steat brûke troch it entiteitsfilter yn **Slider settings** út te skeakeljen, en dêrnei de wearden `min` en `max` te definiearjen. Dizze opsje is allinnich lêze.
>
> - **Steatknop:** Perfekt om ynformaasje fan in sensor of hokker entiteit dan ek te toanen. As jo derop drukke, wurdt it paniel "Mear ynfo" fan de entiteit toand. De eftergrûnkleur feroaret net.
>
> - **Namme/tekstknop:** It ienige knoptype dat gjin entiteit nedich hat. Hjirmei kinne jo in koarte tekst, in namme of in titel toane. Jo kinne der ek aksjes oan taheakje. De eftergrûnkleur feroaret net.

### Knopopsjes

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme | Type | Fereask | Untersteune opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Fereaske** | Elke entiteit | In entiteit om te betsjinjen |
| `button_type` | string | Opsjoneel | `switch` (standert), `slider`, `state` of `name` | It gedrach fan jo knop |
| `name` | string | Opsjoneel | Elke tekststring | In namme foar jo knop, as dizze net definiearre is wurdt de namme fan de entiteit toand |
| `icon` | string | Opsjoneel | Elk `mdi:` ikoan | In ikoan foar jo knop, as dizze net definiearre is wurdt it ikoan fan de entiteit as de `entity-picture` toand |
| `force_icon` | boolean | Opsjoneel | `true` of `false` (standert) | Jou it ikoan foarrang boppe de `entity-picture` |
| `use_accent_color` | boolean | Opsjoneel (`false` standert) | **Allinnich foar ljochten.** Brûk de aksintkleur fan it tema ynstee fan de kleur fan it ljocht.                         |
| `show_state` | boolean | Opsjoneel | `true` of `false` (standert) | Toan of ferstopje de steat fan jo `entity` |
| `show_name` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje de namme |
| `show_icon` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje it ikoan |
| `show_last_changed` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste wiziging fan jo `entity` |
| `show_last_updated` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste update fan jo `entity` |
| `show_attribute` | boolean | Opsjoneel | `true` of `false` (standert) | Toan in attribút fan jo `entity` ûnder de `name` |
| `attribute` | string | Opsjoneel (fereaske as `show_attribute` op `true` stiet) | In attribút fan jo `entity` | It attribút om te toanen (bgl. `brightness`) |
| `scrolling_effect` | boolean | Opsjoneel | `true` (standert) of `false` | Lit tekst skowe as de ynhâld grutter is as de kontener |
| `button_action` | object | Opsjoneel | `tap_action`, `double_tap_action` of `hold_action`, sjoch hjirûnder | Meitsje it mooglik de standertaksjes by in klik op de knop te feroarjen. |
| `tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in klik op it ikoan, as dit net definiearre is wurdt `more-info` brûkt |
| `double_tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in dûbelklik op it ikoan, as dit net definiearre is wurdt `none` brûkt |
| `hold_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by it fêsthâlden fan it ikoan, as dit net definiearre is wurdt `more-info` brûkt |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekstjefiew), `large` (standert yn sekstjefiew), `large-2-rows`, `large-sub-buttons-grid` | Styling-yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bgl. `2`) |
| `sub_button` | object | Opsjoneel | Sjoch [subknoppen](#subknoppen) | Foegje oanpaste knoppen ta dy't rjochts fêst steane |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Wichtichste eftergrûnkleur foar de stipe eleminten yn de knop |
| `--bubble-button-border-radius` | `px` | Rânestrieling foar de knop |
| `--bubble-button-icon-border-radius` | `px` | Rânestrieling foar de ikoankontener fan de knop |
| `--bubble-button-icon-background-color` | `color` | Eftergrûnkleur foar de ikoankontener fan de knop |
| `--bubble-light-white-color` | `color` | Ferfang de standert wite kleur fan ljochtknoppen/skúfregelers |
| `--bubble-light-color` | `color` | Ferfang de kleur fan ljochtknoppen/skúfregelers (ek RGB-ljochten) |
| `--bubble-button-box-shadow` | Sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskaad foar de knop |

</details>

Dizze opsjes binne allinnich beskikber as `button_type` ynsteld is op `slider`.

<details>

<summary><b>Skúfregeleropsjes (YAML + beskriuwingen)</b></summary>

| Namme                  | Type    | Fereask                     | Beskriuwing                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opsjoneel                        | De minimale wearde fan de skúfregeler. Foar oanpaste skúfregelers.                                                    |
| `max_value`             | number  | Opsjoneel                        | De maksimale wearde fan de skúfregeler. Foar oanpaste skúfregelers.                                                    |
| `step`                  | number  | Opsjoneel                        | De stapwearde fan de skúfregeler.                                                                           |
| `tap_to_slide`          | boolean | Opsjoneel (`false` standert)      | Skeakelje it eardere gedrach fan de skúfregeler yn, wêrby't jo tikke om de skúfregeler te aktivearjen, ynstee fan him fêst te hâlden.        |
| `relative_slide`        | boolean | Opsjoneel (`false` standert )     | Wurkje de wearde by relatyf oan de startwearde, ynstee fan it startpunt fan de oanraking.                      |
| `read_only_slider`      | boolean | Opsjoneel (`false` standert)      | Meitsje de skúfregeler allinnich-lêze. Wurdt automatysk ynskeakele foar guon entiteiten lykas sensoren.                        |
| `slider_live_update`    | boolean | Opsjoneel (`false` standert)      | De steat fan de entiteit wurdt bywurke wylst it skowen. **Dizze funksje wurdt net foar alle entiteiten oanrikkemandearre.**        |
| `slider_fill_orientation` | string | Opsjoneel | `left`, `right`, `top` of `bottom` | Feroarje de rjochting fan de folling fan de skúfregeler. Fan links nei rjochts as net definiearre, spegele yn [rjochts-nei-links-talen](#lokalisaasje) |
| `slider_value_position` | string | Opsjoneel | `right`, `left`, `center` of `hidden` | Posysje fan de weardewerjefte. Rjochts as net definiearre, en links yn [rjochts-nei-links-talen](#lokalisaasje) |
| `invert_slider_value` | boolean | Opsjoneel (`false` standert) | Kear de rjochting fan de skúfregeler om (100% folling stiet gelyk oan it minimum). Net beskikber foar kleurskúfregelers. |
| `light_slider_type` | string | Opsjoneel | `brightness` (standert), `hue`, `saturation`, `white_temp` | **Allinnich foar ljochten.** Kies de skúfregelermodus |
| `cover_slider_type` | string | Opsjoneel | `position` (standert), `tilt_position` | **Allinnich foar sinneskermen.** Kies de skúfregelermodus (posysje of kanteling) |
| `hue_force_saturation` | boolean | Opsjoneel (`false` standert) | **Allinnich foar ljochten (Hue-modus).** Twing saturaasje ôf by it oanpassen fan Hue |
| `hue_force_saturation_value` | number | Opsjoneel (`100` standert) | **Allinnich foar ljochten (Hue-modus).** Ofdwongen saturaasjewearde (0-100) |
| `use_accent_color` | boolean | Opsjoneel (`false` standert) | **Allinnich foar ljochten (Helderens-modus).** Brûk de aksintkleur fan it tema ynstee fan de kleur fan it ljocht |
| `allow_light_slider_to_0` | boolean | Opsjoneel (`false` standert)    | **Allinnich foar ljochten.** Lit de skúfregeler 0% berikke, wêrtroch it ljocht útset wurdt. Net beskikber mei `tap_to_slide`. |
| `light_transition`      | boolean | Opsjoneel (`false` standert)      | **Allinnich foar ljochten.** Skeakelje glêde helderens-oergongen yn foar stipe ljochten.                           |
| `light_transition_time` | number  | Opsjoneel (`500` standert)        | **Allinnich foar ljochten.** De oergongstiid yn millisekonden. Fereasket `light_transition: true`.            |

</details>

#### Foarbylden

<details>

<summary>In skúfregelerknop dy't de helderens fan in ljocht kin regelje</summary>

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

<summary>In knop mei mear opsjes</summary>

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

## Mediaspiler

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Mei dizze kaart kinne jo in mediaspilerentiteit betsjinje.

### Mediaspileropsjes

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme | Type | Fereask | Untersteune opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Fereaske** | Elke mediaspiler | De mediaspiler om te betsjinjen |
| `name` | string | Opsjoneel | Elke tekststring | In namme foar jo mediaspiler, as dizze net definiearre is wurdt de namme fan de entiteit toand |
| `icon` | string | Opsjoneel | Elk `mdi:` ikoan | In ikoan foar jo mediaspiler, as dizze net definiearre is wurdt it ikoan fan de entiteit as de `entity-picture` toand |
| `force_icon` | boolean | Opsjoneel | `true` of `false` (standert) | Jou it ikoan foarrang boppe de `entity-picture` |
| `show_state` | boolean | Opsjoneel | `true` of `false` (standert) | Toan of ferstopje de steat fan jo `entity` |
| `show_name` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje de namme |
| `show_icon` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje it ikoan |
| `show_last_changed` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste wiziging fan jo `entity` |
| `show_last_updated` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste update fan jo `entity` |
| `show_attribute` | boolean | Opsjoneel | `true` of `false` (standert) | Toan in attribút fan jo `entity` ûnder de `name` |
| `attribute` | string | Opsjoneel (fereaske as `show_attribute` op `true` stiet) | In attribút fan jo `entity` | It attribút om te toanen (bgl. `brightness`) |
| `scrolling_effect` | boolean | Opsjoneel | `true` (standert) of `false` | Lit tekst skowe as de ynhâld grutter is as de kontener |
| `min_volume` | number | Opsjoneel | Elk getal | De minimale wearde fan de folumeskúfregeler. |
| `max_volume` | number | Opsjoneel | Elk getal | De maksimale wearde fan de folumeskúfregeler. |
| `cover_background` | boolean | Opsjoneel | `true` of `false` (standert) | Brûk in ûnskerpe mediacover as eftergrûn fan de kaart. |
| `button_action` | object | Opsjoneel | `tap_action`, `double_tap_action` of `hold_action`, sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Meitsje it mooglik de standertaksjes by in klik op de knop te feroarjen. |
| `tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in klik op it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |
| `double_tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in dûbelklik op it ikoan, as dit net definiearre is wurdt `none` brûkt. |
| `hold_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by it fêsthâlden fan it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |
| `main_buttons_position` | string | Opsjoneel | `default` of `bottom` | Ferpleats de coveraksjeknoppen nei ûnderen (fêst) |
| `main_buttons_full_width` | boolean | Opsjoneel | `true` of `false` | Meitsje de aksjeknoppen ûnderoan hielendal breed (standert: `true` as posysje `bottom` is) |
| `main_buttons_alignment` | string | Opsjoneel | `end` (standert), `center`, `start`, `space-between` | Rjochting fan de aksjeknoppen ûnderoan as se net hielendal breed binne |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekstjefiew), `large` (standert yn sekstjefiew), `large-2-rows`, `large-sub-buttons-grid` | Styling-yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bgl. `2`) |
| `sub_button` | object | Opsjoneel | Sjoch [subknoppen](#subknoppen) | Foegje oanpaste knoppen ta dy't rjochts fêst steane |
| `hide` | object | Opsjoneel | Sjoch hjirûnder | Ferstopje knoppen fan de kaart |

#### Ferstopopsjes

| Namme | Type | Fereask | Untersteune opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opsjoneel | `true` of `false` (standert) | Ferstopje de ôfspylje/pauzeknop |
| `volume_button` | boolean | Opsjoneel | `true` of `false` (standert) | Ferstopje de folumeknop |
| `previous_button` | boolean | Opsjoneel | `true` of `false` (standert) | Ferstopje de foarige-knop |
| `next_button` | boolean | Opsjoneel | `true` of `false` (standert) | Ferstopje de folgjende-knop |
| `power_button` | boolean | Opsjoneel | `true` of `false` (standert) | Ferstopje de oan/út-knop |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Wichtichste eftergrûnkleur foar de mediaspiler |
| `--bubble-media-player-border-radius` | `px` | Rânestrieling foar de mediaspiler |
| `--bubble-media-player-buttons-border-radius` | `px` | Rânestrieling foar de knoppen fan de mediaspiler |
| `--bubble-media-player-slider-background-color` | `color` | Eftergrûnkleur foar de folumeskúfregeler |
| `--bubble-media-player-icon-border-radius` | `px` | Rânestrieling foar de ikoankontener fan de mediaspiler |
| `--bubble-media-player-icon-background-color` | `color` | Eftergrûnkleur foar de ikoankontener fan de mediaspiler |
| `--bubble-media-player-box-shadow` | Sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskaad foar de mediaspiler |

</details>


#### Foarbylden

<details>

<summary>In mediaspiler mei alle opsjes</summary>

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

## Sinneskerm

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Mei dizze kaart kinne jo jo `cover`-entiteiten betsjinje.

### Sinneskermopsjes

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme | Type | Fereask | Untersteune opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Fereaske** | Elk sinneskerm | In sinneskerm om te betsjinjen |
| `name` | string | Opsjoneel | Elke tekststring | In namme foar jo sinneskerm, as dizze net definiearre is wurdt de namme fan de entiteit toand |
| `force_icon` | boolean | Opsjoneel | `true` of `false` (standert) | Jou it ikoan foarrang boppe de `entity-picture` |
| `show_state` | boolean | Opsjoneel | `true` of `false` (standert) | Toan of ferstopje de steat fan jo `entity` |
| `show_name` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje de namme |
| `show_icon` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje it ikoan |
| `show_last_changed` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste wiziging fan jo `entity` |
| `show_last_updated` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste update fan jo `entity` |
| `show_attribute` | boolean | Opsjoneel | `true` of `false` (standert) | Toan in attribút fan jo `entity` ûnder de `name` |
| `attribute` | string | Opsjoneel (fereaske as `show_attribute` op `true` stiet) | In attribút fan jo `entity` | It attribút om te toanen (bgl. `brightness`) |
| `scrolling_effect` | boolean | Opsjoneel | `true` (standert) of `false` | Lit tekst skowe as de ynhâld grutter is as de kontener |
| `icon_open` | string | Opsjoneel | Elk `mdi:` ikoan | In ikoan foar jo iepen sinneskerm, as dizze net definiearre is wurdt it standert ikoan foar iepen sinneskermen toand |
| `icon_close` | string | Opsjoneel | Elk `mdi:` ikoan | In ikoan foar jo sluten sinneskerm, as dizze net definiearre is wurdt it standert ikoan foar sluten sinneskermen toand |
| `icon_up` | string | Opsjoneel | Elk `mdi:` ikoan | In ikoan foar jo iepenknop, as dizze net definiearre is wurdt it standert ikoan foar iepen sinneskermen toand |
| `icon_down` | string | Opsjoneel | Elk `mdi:` ikoan | In ikoan foar jo slútknop, as dizze net definiearre is wurdt it standert ikoan foar sluten sinneskermen toand |
| `open_service` | string | Opsjoneel | Elke service of script | In service om jo sinneskerm te iepenjen, standert `cover.open_cover` |
| `stop_service` | string | Opsjoneel | Elke service of script | In service om jo sinneskerm te stopjen, standert `cover.stop_cover` |
| `close_service` | string | Opsjoneel | Elke service of script | In service om jo sinneskerm te sluten, standert `cover.close_cover` |
| `tilt_buttons` | string | Opsjoneel | `top` (standert), `bottom`, `left`, `right`, `hidden` | Posysje fan de kantelingsknoppen (allinnich toand as it sinneskerm kanteling stipet) |
| `open_tilt_service` | string | Opsjoneel | Elke service of script | In service om te kantelen nei iepen, standert `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opsjoneel | Elke service of script | In service om te kantelen nei sluten, standert `cover.close_cover_tilt` |
| `button_action` | object | Opsjoneel | `tap_action`, `double_tap_action` of `hold_action`, sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Meitsje it mooglik de standertaksjes by in klik op de knop te feroarjen. |
| `tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in klik op it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |
| `double_tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in dûbelklik op it ikoan, as dit net definiearre is wurdt `none` brûkt. |
| `hold_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by it fêsthâlden fan it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |
| `main_buttons_position` | string | Opsjoneel | `default` of `bottom` | Ferpleats de betsjeningsknoppen nei ûnderen (fêst) |
| `main_buttons_full_width` | boolean | Opsjoneel | `true` of `false` | Meitsje de knoppen ûnderoan hielendal breed (standert: `true` as posysje `bottom` is) |
| `main_buttons_alignment` | string | Opsjoneel | `end` (standert), `center`, `start`, `space-between` | Rjochting fan de knoppen ûnderoan as se net hielendal breed binne |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekstjefiew), `large` (standert yn sekstjefiew), `large-2-rows`, `large-sub-buttons-grid` | Styling-yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bgl. `2`) |
| `sub_button` | object | Opsjoneel | Sjoch [subknoppen](#subknoppen) | Foegje oanpaste knoppen ta dy't rjochts fêst steane |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Wichtichste eftergrûnkleur foar de stipe eleminten yn de sinneskermkaart |
| `--bubble-cover-border-radius` | `px` | Rânestrieling foar de sinneskermkaart |
| `--bubble-cover-icon-border-radius` | `px` | Rânestrieling foar de ikoankontener fan de sinneskermkaart |
| `--bubble-cover-icon-background-color` | `color` | Eftergrûnkleur foar de ikoankontener fan de sinneskermkaart |
| `--bubble-cover-box-shadow` | Sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskaad foar de sinneskermkaart |
| `--bubble-button-box-shadow` | Sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskaad foar knoppen yn de sinneskermkaart |

</details>


#### Foarbyld

<details>

<summary>In kaart dy't in rolgerdyn kin betsjinje</summary>

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

## Seleksje

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Mei dizze kaart kinne jo in útklapmenu foar jo `input_select`/`select`-entiteiten tafoegje. Dizze kaart stipet ek de subknoppen en alle mienskiplike Bubble Card funksjes.

> [!TIP]
> Jo kinne ek seleksje-subknoppen brûke as jo dat wolle, dizze funksje is beskikber yn alle kaarten dy't de subknoppen stypje.

### Seleksjeopsjes

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme | Type | Fereask | Untersteune opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `entity` | string | **Fereaske** | Elke entiteit | In entiteit om te betsjinjen |
| `name` | string | Opsjoneel | Elke tekststring | In namme foar jo seleksje, as dizze net definiearre is wurdt de namme fan de entiteit toand |
| `icon` | string | Opsjoneel | Elk `mdi:` ikoan | In ikoan foar jo seleksje, as dizze net definiearre is wurdt it ikoan fan de entiteit as de `entity-picture` toand |
| `force_icon` | boolean | Opsjoneel | `true` of `false` (standert) | Jou it ikoan foarrang boppe de `entity-picture` |
| `show_state` | boolean | Opsjoneel | `true` of `false` (standert) | Toan of ferstopje de steat fan jo `entity` |
| `show_name` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje de namme |
| `show_icon` | boolean | Opsjoneel | `true` (standert) of `false` | Toan of ferstopje it ikoan |
| `show_last_changed` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste wiziging fan jo `entity` |
| `show_last_updated` | boolean | Opsjoneel | `true` of `false` (standert) | Toan de tiid fan de lêste update fan jo `entity` |
| `show_attribute` | boolean | Opsjoneel | `true` of `false` (standert) | Toan in attribút fan jo `entity` ûnder de `name` |
| `attribute` | string | Opsjoneel (fereaske as `show_attribute` op `true` stiet) | In attribút fan jo `entity` | It attribút om te toanen (bgl. `brightness`) |
| `scrolling_effect` | boolean | Opsjoneel | `true` (standert) of `false` | Lit tekst skowe as de ynhâld grutter is as de kontener |
| `tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in klik op it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |
| `double_tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in dûbelklik op it ikoan, as dit net definiearre is wurdt `none` brûkt. |
| `hold_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by it fêsthâlden fan it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekstjefiew), `large` (standert yn sekstjefiew), `large-2-rows`, `large-sub-buttons-grid` | Styling-yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bgl. `2`) |
| `sub_button` | object | Opsjoneel | Sjoch [subknoppen](#subknoppen) | Foegje oanpaste knoppen ta dy't rjochts fêst steane |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Wichtichste eftergrûnkleur foar de stipe eleminten yn de seleksjekaart |
| `--bubble-select-background-color` | `color` | Eftergrûnkleur foar de seleksjekaart |
| `--bubble-select-list-border-radius` | `px` | Rânestrieling foar it útklapmenu yn de kaart |
| `--bubble-select-list-item-accent-color` | `color` | Aksintkleur foar it selektearre item |
| `--bubble-select-list-background-color` | `color` | Eftergrûnkleur foar it útklapmenu yn de kaart |
| `--bubble-select-list-width` | `px` | Breedte fan it útklapmenu yn de kaart |
| `--bubble-select-arrow-background-color` | `color` | Eftergrûnkleur foar de útklappijl |
| `--bubble-select-button-border-radius` | `px` | Rânestrieling foar de seleksjeknop |
| `--bubble-select-border-radius` | `px` | Rânestrieling foar de seleksjekaart |
| `--bubble-select-icon-border-radius` | `px` | Rânestrieling foar de ikoankontener fan de seleksjekaart |
| `--bubble-select-icon-background-color` | `color` | Eftergrûnkleur foar de ikoankontener fan de seleksjekaart |
| `--bubble-select-box-shadow` | Sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskaad foar de seleksjekaart |

</details>


#### Foarbylden

<details>

<summary>In seleksjekaart mei in list mei sênes</summary>

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

Mei dizze kaart kinne jo jo `climate`-entiteiten betsjinje.

> [!TIP]
> It modusseleksjemenu is in [subknop](#subknoppen) dy't automatysk tafoege wurdt as de kaart oanmakke wurdt. Jo kinne it dêrnei nei winsk oanpasse of fuortsmite.

### Klimaatopsjes

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme                     | Type    | Fereask                         | Untersteune opsjes                                  | Beskriuwing                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Fereaske**                        | Klimaatentiteit                                   | De entiteit om te betsjinjen (bgl. `climate.living_room`).                                                            |
| `name`                  | string  | Opsjoneel                            | Elke tekststring                                       | In oanpaste namme foar de kaart. As dizze net definiearre is, wurdt de namme fan de entiteit toand.                                    |
| `icon`                  | string  | Opsjoneel                            | Elk `mdi:` ikoan                                  | In oanpast ikoan foar de kaart. As dizze net definiearre is, wurdt it ikoan fan de entiteit as `entity-picture` brûkt.                   |
| `force_icon`            | boolean | Opsjoneel                            | `true` of `false` (standert)                     | Jout it ikoan foarrang boppe de `entity-picture`.                                                           |
| `show_state`            | boolean | Opsjoneel                            | `true` of `false` (standert)                     | Toan of ferstopje de aktuele steat fan de `entity`.                                                                 |
| `show_name`             | boolean | Opsjoneel                            | `true` (standert) of `false`                     | Toan of ferstopje de namme fan de entiteit.                                                                            |
| `show_icon`             | boolean | Opsjoneel                            | `true` (standert) of `false`                     | Toan of ferstopje it ikoan.                                                                                          |
| `hide_target_temp_low`  | boolean | Opsjoneel (allinnich foar entiteiten dy't `target_temp_low` stypje) | `true` of `false` (standert) | Ferstopet de bedieningselemint foar de lege doeltemperatuer, as dat stipe wurdt troch de `entity`.                                          |
| `hide_target_temp_high` | boolean | Opsjoneel (allinnich foar entiteiten dy't `target_temp_high` stypje)| `true` of `false` (standert) | Ferstopet de bedieningselemint foar de hege doeltemperatuer, as dat stipe wurdt troch de `entity`.                                         |
| `state_color`           | boolean | Opsjoneel                            | `true` of `false` (standert)                     | Brûkt in konstante eftergrûnkleur as de klimaatentiteit oan is.                                              |
| `step` | number | Opsjoneel | Elk getal | De temperatuerstap. |
| `min_temp` | number | Opsjoneel | Elk getal | De minimale temperatuer. |
| `max_temp` | number | Opsjoneel | Elk getal | De maksimale temperatuer. |
| `button_action` | object | Opsjoneel | `tap_action`, `double_tap_action` of `hold_action`, sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Meitsje it mooglik de standertaksjes by in klik op de knop te feroarjen. |
| `tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in klik op it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |
| `double_tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in dûbelklik op it ikoan, as dit net definiearre is wurdt `none` brûkt. |
| `hold_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by it fêsthâlden fan it ikoan, as dit net definiearre is wurdt `more-info` brûkt. |                              |
| `main_buttons_position` | string | Opsjoneel | `default` of `bottom` | Ferpleats de klimaataksjeknoppen nei ûnderen (fêst) |
| `main_buttons_full_width` | boolean | Opsjoneel | `true` of `false` | Meitsje de aksjeknoppen ûnderoan hielendal breed (standert: `true` as posysje `bottom` is) |
| `main_buttons_alignment` | string | Opsjoneel | `end` (standert), `center`, `start`, `space-between` | Rjochting fan de aksjeknoppen ûnderoan as se net hielendal breed binne |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekstjefiew), `large` (standert yn sekstjefiew), `large-2-rows`, `large-sub-buttons-grid` | Styling-yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bgl. `2`) |
| `sub_button`            | object  | Opsjoneel                            | Sjoch [subknoppen](#subknoppen)                | Foeget oanpaste knoppen ta dy't rjochts fêst steane. Handich foar in klimaatmodus-seleksjemenu.                                  |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Wichtichste eftergrûnkleur foar de stipe eleminten yn de klimaatkaart |
| `--bubble-climate-border-radius` | `px` | Rânestrieling foar de stipe eleminten fan de klimaatkaart |
| `--bubble-climate-button-background-color` | `color` | Eftergrûnkleur foar de knoppen fan de klimaatkaart |
| `--bubble-climate-icon-border-radius` | `px` | Rânestrieling foar de ikoankontener fan de klimaatkaart |
| `--bubble-state-climate-fan-only-color` | `color` | Oerlisjende kleur foar de steat "allinnich fentilator" |
| `--bubble-state-climate-dry-color` | `color` | Oerlisjende kleur foar de droege steat |
| `--bubble-state-climate-cool-color` | `color` | Oerlisjende kleur foar de kuolsteat |
| `--bubble-state-climate-heat-color` | `color` | Oerlisjende kleur foar de ferwaarmingssteat |
| `--bubble-state-climate-auto-color` | `color` | Oerlisjende kleur foar de automatyske steat |
| `--bubble-state-climate-heat-cool-color` | `color` | Oerlisjende kleur foar de ferwaarming-kuoling-steat |
| `--bubble-climate-accent-color` | `color` | Aksintkleur foar de klimaatkaart |
| `--bubble-climate-box-shadow` | Sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Boksskaad foar de klimaatkontener. |

</details>


#### Foarbylden

<details>

<summary>In klimaatkaart mei in útklapmenu foar HVAC-modi</summary>

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

## Aginda

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Mei dizze kaart kinne jo jo aginda-entiteiten toane. De ynhâld is skrolber, sadat jo maklik troch kommende barrens blêdzje kinne.

### Agindaopsjes

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme                | Type    | Fereask  | Untersteune opsjes                               | Beskriuwing                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Opsjoneel     | Elk getal (minimum: 1)                        | Oantal agindadagen om barrens foar op te heljen, fan no ôf oant it ein fan de N-de dei (standert: 7) |
| `entities`          | object  | **Fereaske** | In aginda-entiteitobjekt (sjoch hjirûnder)            | De entiteit om te betsjinjen (bgl. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Fereaske** | In aginda-entiteit                               | De aginda-entiteit om te toanen                                                          |
| `entities.color`    | string  | Opsjoneel     | In kleur                                         | In oanpaste kleur foar it agindalabel. As dizze net definiearre is, wurdt der automatysk in kleur keazen |
| `days`              | number  | Opsjoneel     | Elk getal (minimum: 1)                         | Oantal agindadagen om barrens foar op te heljen, fan no ôf oant it ein fan de N-de dei (standert: 7) |
| `limit`             | number  | Opsjoneel     | In getal                                        | It oantal barrens dat op de kaart toand wurdt                                  |
| `show_end`          | boolean | Opsjoneel     | `true` of `false` (standert)                     | Toan of ferstopje de eintiid fan barrens                                                    |
| `show_progress`     | boolean | Opsjoneel     | `true` (standert) of `false`                     | Toan of ferstopje de foarútgongsbalke fan it barren                                                     |
| `show_started_events`| boolean | Opsjoneel     | `true` (standert) of `false`                     | Toan of ferstopje barrens dy't op it stuit oan de gong binne. Meardeisige eveneminten wurde dei foar dei beoardiele, dus allinnich de rinnende dei wurdt ferburgen en de kommende dagen bliuwe sichtber |
| `scrolling_effect`  | boolean | Opsjoneel | `true` (standert) of `false` | Lit tekst skowe as de ynhâld grutter is as de kontener |
| `event_action` | object | Opsjoneel | `tap_action`, `double_tap_action` of `hold_action`, sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Meitsje it mooglik aksjes ta te foegjen by in klik op in barren. |
| `tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in klik op de dei, as dit net definiearre is wurdt `none` brûkt. |
| `double_tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by in dûbelklik op de dei, as dit net definiearre is wurdt `none` brûkt. |
| `hold_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiearje it type aksje by it fêsthâlden fan de dei, as dit net definiearre is wurdt `none` brûkt. |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekstjefiew), `large` (standert yn sekstjefiew), `large-2-rows`, `large-sub-buttons-grid` | Styling-yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bgl. `2`) |
| `sub_button` | object | Opsjoneel | Sjoch [subknoppen](#subknoppen) | Foegje oanpaste knoppen ta dy't rjochts fêst steane |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele                                  | Ferwachte wearde | Beskriuwing                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Wichtichste eftergrûnkleur foar de stipe eleminten yn de agindakaart  |
| `--bubble-calendar-border-radius`         | `px`           | Rânestrieling foar de stipe eleminten fan de agindakaart |
| `--bubble-calendar-height`                | `px`           | Hichte fan de agindakaart                                        |

</details>

#### Foarbylden

<details>

<summary>In agindakaart mei in beheind oantal barrens</summary>

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

<summary>In agindakaart mei in eintiid en in foarútgongsbalke</summary>

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


## Skiedingsline

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Dizze kaart is in ienfâldige skiedingsline om jo pop-up yn kategoryen/sekjes yn te dielen, bygelyks Ljochten, Apparaten, Sinneskermen, Ynstellingen, Automatisearingen...

### Opsjes fan de skiedingsline

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme | Type | Ferplichting | Stipe opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `name` | string | Opsjoneel, mar oanrikkemandearre | Elke tekst | In namme foar jo skiedingsline |
| `icon` | string | Opsjoneel, mar oanrikkemandearre | Elk `mdi:`-ikoan | In ikoan foar jo skiedingsline |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekjeoansicht), `large` (standert yn sekjeoansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling fan de yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bygelyks `2`) |
| `sub_button` | object | Opsjoneel | Sjoch [subknoppen](#subknoppen) | Foegje oanpaste knoppen fêst oan de rjochterkant ta |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Eftergrûnkleur foar de line yn de skiedingsline |

</details>

#### Foarbyld

<details>

<summary>In skiedingsline foar in sekje "Sinneskermen"</summary>

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

Dizze kaart tsjinnet om in lege kolom op te foljen. Dit is handich as jo in `horizontal-stack` yn jo pop-up hawwe mei mar ien kaart. Sjoch nei de rjochter ûnderhoeke fan dizze skermôfbylding om it (net) te sjen.

### Opsjes fan de lege kolom

Dizze kaart hat gjin opsjes en stipet gjin [styling](#styling), al stipet er wol yndielingsopsjes foar HA-sekjes.

#### Foarbyld

<details>

<summary>In lege kolom yn in horizontale stack</summary>

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

## Allinnich subknoppen

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Dizze kaart is spesjaal foar allinnich subknoppen. It is perfekt foar menu's, fluchaksjes, ynformative chips, of in fêste foettekst ûnderoan de side.

> [!IMPORTANT]  
> Dizze kaart brûkt it nije subknoppenschema. Brûk `sub_button.bottom` om jo knoppen te definiëarjen. De sekje `sub_button.main` wurdt negearre.

### Opsjes fan allinnich subknoppen

<details>

<summary><b>Opsjes (YAML + beskriuwingen)</b></summary>

| Namme | Type | Ferplichting | Stipe opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Ferplicht** | Sjoch [subknoppen](#subknoppen) | Definiëarje jo subknoppen mei de sekje `bottom` |
| `hide_main_background` | boolean | Opsjoneel | `true` of `false` (standert) | Ferwiderje de eftergrûn fan de kaart |
| `footer_mode` | boolean | Opsjoneel | `true` of `false` (standert) | Fiksearje de kaart ûnderoan de side |
| `footer_full_width` | boolean | Opsjoneel | `true` of `false` (standert) | Meitsje de foettekst folsleine breedte (100%) |
| `footer_width` | number | Opsjoneel | Elk getal | Breedte fan de foettekst yn piksels as `footer_full_width` op `false` stiet |
| `footer_bottom_offset` | number | Opsjoneel | Elk getal | Ôfstân ta de ûnderkant fan de side yn piksels (standert: `16`) |
| `card_layout` | string | Opsjoneel | `normal` (standert bûten sekjeoansicht), `large` (standert yn sekjeoansicht), `large-2-rows`, `large-sub-buttons-grid` | Styling fan de yndieling fan de kaart, sjoch [kaartyndielingen](#kaartyndielingen) |
| `rows` | number | Opsjoneel | Elk getal | Oantal rigen (hichte) (bygelyks `2`) |

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Breedte fan de foettekst as `footer_full_width` op `false` stiet |
| `--bubble-footer-bottom` | `px` | Ofstân fan de foettekst ta de ûnderkant |
| `--bubble-footer-box-shadow` | sjoch [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Slachskaad foar de foettekstkontener |

</details>

#### Foarbylden

<details>

<summary>Chips (lykas op de skermôfbylding)</summary>

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

<summary>In fêst foettekstmenu</summary>

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

Yn elke kaart dy't dizze opsje stipet, kinne jo subknoppen tafoegje om jo kaarten noch mear oan te passen. Jo kinne bygelyks in knop meitsje dy't in stofsûger, in waarkaart, of hast alles dat jo betinke kinne, bestjoere kin. Dizze subknoppen stypje de tikaksjes en de measte knopopsjes.

Subknoppen stypje no trije types: **Standert (knop)**, **Skúfregelder**, en **Dropdown/Seleksje**. Jo kinne types mingje yn deselde kaart, subknoppen boppe- of ûnderoan pleatse, en se yn groepen organisearje foar avansearre yndielingen.

#### Pleatsing en groepen fan subknoppen

<details>

<summary><b>Struktuer fan subknoppen (main/bottom + groepen)</b></summary>

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

**Notysjes:**
- `main` en `bottom` binne twa ûnôfhinklike sekjes. Subknoppen ûnder de sekje `bottom` binne fêst oan de ûnderkant fan de kaart.
- `main_layout` en `bottom_layout` akseptearje `inline` (standert) of `rows` om groepen fertikaal te stapeljen.
- Groepen binne objekten mei in array `group` en in opsjonele `buttons_layout` (`inline` of `column`).
- `justify_content` is allinnich beskikber foar **bottom-groepen** (`start`, `center`, `end`, `fill`).
- As der subknoppen ûnder de sekje `bottom` binne, wikselt de kaartyndieling automatysk nei `large`, útsein as jo eksplisyt in oare yndieling ynstelle.
- Ferâldere arrays fan `sub_button` wurde noch altyd stipe en behannele as de sekje `main`.

</details>

### Opsjes fan subknoppen

<details>

<summary><b>Opsjes (YAML + beskriuwing)</b></summary>

| Namme | Type | Ferplichting | Stipe opsjes | Beskriuwing |
| --- | --- | --- | --- | --- |
| `entity` | string | Opsjoneel | Elke entiteit | In entiteit om te bestjoeren |
| `name` | string | Opsjoneel | Elke tekst | In namme foar jo subknop, as dizze net definiëarre is, wurdt de namme fan de entiteit werjûn |
| `icon` | string | Opsjoneel | Elk `mdi:`-ikoan | In ikoan foar jo subknop, as dit net definiëarre is, wurdt it ikoan of de ôfbylding fan de entiteit werjûn |
| `force_icon` | boolean | Opsjoneel | `true` of `false` (standert) | Twing it ikoan ôf, sels as der in ôfbylding fan de entiteit beskikber is |
| `sub_button_type` | string | Opsjoneel | `default`, `slider` of `select` | Kies it type subknop |
| `show_background` | boolean | Opsjoneel | `true` (standert) of `false` | Lit in eftergrûn foar jo subknop sjen, de kleur feroaret op basis fan de steat fan jo entiteit |
| `state_background` | boolean | Opsjoneel | `true` (standert) of `false` | Brûk de steatkleur as de entiteit `on` is |
| `light_background` | boolean | Opsjoneel | `true` (standert) of `false` | Brûk de ljochtkleur foar de eftergrûn as dizze beskikber is |
| `show_state` | boolean | Opsjoneel | `true` of `false` (standert) | Lit de steat fan jo `entity` sjen of ferstopje dizze |
| `show_name` | boolean | Opsjoneel | `true` of `false` (standert) | Lit de namme sjen of ferstopje dizze |
| `show_icon` | boolean | Opsjoneel | `true` (standert) of `false` | Lit it ikoan sjen of ferstopje it |
| `show_last_changed` | boolean | Opsjoneel | `true` of `false` (standert) | Lit sjen wannear't jo `entity` foar it lêst feroare is |
| `show_last_updated` | boolean | Opsjoneel | `true` of `false` (standert) | Lit sjen wannear't jo `entity` foar it lêst bywurke is |
| `show_attribute` | boolean | Opsjoneel | `true` of `false` (standert) | Lit in attribút fan jo `entity` sjen ûnder syn `name` |
| `attribute` | string | Opsjoneel (ferplicht as `show_attribute` op `true` stiet) | In attribút fan jo `entity` | It attribút dat werjûn wurdt (bygelyks `brightness`) |
| `select_attribute` | string | Opsjoneel | In attribútlist fan jo `entity` (sjoch de stipe opsjes hjirboppe) | Dizze attribútlist iepenet in dropdown by in klik (bygelyks `effect_list`) |
| `show_arrow` | boolean | Opsjoneel | `true` (standert) of `false` | Lit de dropdown-pylk sjen foar seleksje-subknoppen of ferstopje dizze |
| `scrolling_effect` | boolean | Opsjoneel | `true` (standert) of `false` | Lit tekst skowe as de ynhâld grutter is as de kontener |
| `tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiëarje it type aksje by in klik op de subknop, as dit net definiëarre is, wurdt `more-info` brûkt. |
| `double_tap_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiëarje it type aksje by in dûbelklik op de subknop, as dit net definiëarre is, wurdt `none` brûkt. |
| `hold_action` | object | Opsjoneel | Sjoch [aksjes](#tik--dûbeltik--en-fêsthâldaksjes) | Definiëarje it type aksje by it fêsthâlden fan de subknop, as dit net definiëarre is, wurdt `more-info` brûkt. |
| `fill_width` | boolean | Opsjoneel | `true` of `false` | Folje de beskikbere breedte op (standert: `false` foar main, `true` foar bottom) |
| `width` | number of string | Opsjoneel | Elk getal of CSS-lingte | Oanpaste breedte (`px` foar de sekje main, `%` foar de sekje bottom by standert) |
| `custom_height` | number | Opsjoneel | Elk getal | Oanpaste hichte yn piksels |
| `content_layout` | string | Opsjoneel | `icon-left` (standert), `icon-top`, `icon-bottom`, `icon-right` | Pleatsing fan it ikoan binnen de subknop |
| `always_visible` | boolean | Opsjoneel | `true` of `false` (standert) | **Allinnich foar skúfregelders.** Lit de skúfregelder altyd sjen ynstee fan dizze by in tik te iepenjen |
| `show_button_info` | boolean | Opsjoneel | `true` of `false` (standert) | **Allinnich foar skúfregelders.** Lit ikoan/namme/steat sjen as `always_visible` ynskeakele is |
| `visibility` | object of list | Opsjoneel | Sjoch [betingsten](#betingsten) | Lit de subknop sjen of ferstopje dizze op basis fan betingsten |
| `hide_when_parent_unavailable` | boolean | Opsjoneel | `true` of `false` (standert) | Ferstopje de subknop as de entiteit fan de haadkaart net beskikber is |
| `css_class` | string | Opsjoneel | Elke tekststring | In ekstra CSS-klasse op de subknop, om dy yn dyn [styling](#styling) oan te sprekken hokker namme dy ek hat (bygelyks `My value` jout `.my-value`) |

</details>

<details>

<summary><b>Opsjes foar skúfregelder-subknoppen (deselde as knop-skúfregelders)</b></summary>

<br>

Skúfregelder-subknoppen stypje deselde opsjes as knop-skúfregelders, ûnder oare:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-fariabelen (sjoch <a href="#styling">Styling</a>)</b></summary>

| Fariabele | Ferwachte wearde | Beskriuwing |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radius fan de rânen foar de subknoppen |
| `--bubble-sub-button-background-color` | `color` | Eftergrûnkleur foar de subknoppen |
| `--bubble-sub-button-outline` | `box-shadow` | Omline dy't oan in subknop of in skúfregeler tafoege wurdt, allinnich as dat elemint deselde kleur krijt as de kaart derefter, wat it ûnsichtber meitsje soe (set him op `none` om him fuort te heljen) |
| `--bubble-sub-slider-border-radius` | `px` | Radius fan de rânen foar skúfregelder-subknoppen |
| `--bubble-sub-slider-background-color` | `color` | Eftergrûnkleur foar skúfregelder-subknoppen |
| `--bubble-sub-slider-height` | `px` | Hichte foar altyd-sichtbere skúfregelder-subknoppen |
| `--bubble-sub-slider-outline` | `box-shadow` | Omline fan allinnich de skúfregelder-subknoppen, falt werom op `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Tekstkleur op ljochte eftergrûnen fan subknoppen |

</details>

#### Foarbylden

<details>

<summary>In knop mei guon subknoppen om in stofsûger-kaart te meitsjen (lykas op de skermôfbylding)</summary>

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

<summary>In knop-skúfregelder mei in subknop dy't de helderheid toant en ien dy't it ljocht oan-/útset (lykas op de skermôfbylding)</summary>

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

<summary>In knop dy't de binnen- en bûtentemperatuer toant mei it waar fan hjoed en moarn (skermôfbylding meilevere)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Spitigernôch is it by my hieltyd bewolke, mar alle ikoanen feroarje wol op basis fan it waar.

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

## Kaartyndielingen

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card stipet folslein it sekjeoansicht fan Home Assistant, jo kinne de kaartyndieling wizigje om de kaart grutter te meitsjen en ek it oantal kolommen of rigen dat de kaart yn jo sekjeoansicht ynnimme moat feroarje (allinnich op de kaarten dy't dizze opsje stypje). Dizze yndielingen wurde ek stipe yn alle oare oansichttypen.

<details>

<summary><b>Beskikbere kaartyndielingen</b></summary>

| Yndieling | Beskriuwing |
| --- | --- |
| `normal` | De gewoane yndieling (net optimalisearre foar it sekjeoansicht) |
| `large` | In gruttere yndieling dy't oanpast wurdt oan de keazen rigen yn it sekjeoansicht (optimalisearre foar it sekjeoansicht) |
| `large-2-rows` | In gruttere yndieling mei 2 rigen subknoppen dy't oanpast wurdt oan de keazen rigen yn it sekjeoansicht (optimalisearre foar it sekjeoansicht) |
| `large-sub-buttons-grid` | Dizze yndieling toant subknoppen yn in roaster, `rows` moat op teminsten `2` steld wurde.

</details>

#### Foarbylden

<details>

<summary>In grutte knop dy't enerzjystatistiken toant mei 2 rigen subknoppen (skermôfbylding meilevere)</summary>

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

<summary>In grutte knop mei meardere rigen mei 12 subknoppen</summary>

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

## Betingsten

Guon opsjes wurde stjoerd troch betingsten, krekt sa skreaun as dy fan de [betingstlike kaart](https://www.home-assistant.io/dashboards/conditional/) fan Home Assistant:

- `visibility` op in [subknop](#subknoppen), om dy te toanen of te ferbergjen
- `trigger` op in [pop-up](#pop-up), om dy te iepenjen as oan de betingsten foldien is
- `checkConditionsMet(conditions, hass)` yn dyn [sjabloanen](#sjabloanen), as dû it antwurd yn dyn eigen koade nedich hast

Alle betingsttypen fan Home Assistant wurde evaluearre: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, en de groepen `and`, `or` en `not`. De betingsten fan de betingstbouwer fan Home Assistant wurkje ek, dejingen dy't nei har domein neamd binne lykas `sun.is_up`, `light.is_on`, `zone.in_zone` of `temperature.is_value`, mei har ynstellingen `target`, `options`, `behavior` en `for`.

<details>

<summary><b>Foarbyld</b></summary>

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
> Betingsten wurde yn dyn browser evaluearre, dus dy pear dy't de Home Assistant-server nedich hawwe kinne net krekt wêze: sinneopgong en sinne-ûndergong wurde út de entiteit `sun.sun` lêzen ynstee fan opnij berekkene te wurden, en in `for`-doer wurdt fanôf de lêste steatswiziging metten, sûnder de skiednis fan de recorder.
>
> `view_columns` wurdt akseptearre mar slagget altyd, om't Bubble Card noait dejinge is dy't de kolommen fan dyn werjefte yndielt. In betingsttype dat Bubble Card net ken meldt himsels ien kear yn de konsole fan dyn browser ynstee fan stil te mislearjen, sadat dû in typflater fan in ûntbrekkende funksje ûnderskiede kinst.

<br>

---

<br>

## Tik-, dûbeltik- en fêsthâldaksjes

Jo kinne ek de standert tikaksjes, dûbeltikaksjes en fêsthâldaksjes fan Home Assistant brûke op de kaarten dy't dizze opsje stypje. Dit lit jo bygelyks it finster "mear ynfo" toane troch in knopikoan fêst te hâlden, of in tsjinst útfiere as der op in subknop drukt wurdt.

**Notysje: as der in `double_tap_action` konfigureare is, krijt de gewoane `tap_action` in fertraging fan 200ms om in dûbeltik detektearje te kinnen.
As dizze fertraging net winske is, sette jo `double_tap_action` op `none` om de ferwurking fan dûbeltikken út te skeakeljen.**

### Opsjes fan aksjes

<details>

<summary><b>Opsjes (YAML + beskriuwing)</b></summary>

| Namme | Type | Stipe opsjes | Beskriuwing |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Aksje dy't útfierd wurdt |
| `target` | object |  | Wurket allinnich mei `call-service`. Folget de [home-assistant-syntaksis](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Elk paad fan jo dashboard | Paad om nei te navigearjen (bygelyks `'#kitchen'` om in pop-up te iepenjen) as de aksje op navigate steld is |
| `url_path` | string | Elke keppeling | URL om te iepenjen by in klik (bygelyks `https://www.google.com`) as de aksje `url` is |
| `service` | string | Elke tsjinst | Tsjinst dy't oanroppen wurdt (bygelyks `media_player.media_play_pause`) as `action` op `call-service` steld is |
| `data` of `service_data` | object | Elke tsjinstgegevens | Tsjinstgegevens dy't meistjoerd wurde (bygelyks `entity_id: media_player.kitchen`) as `action` op `call-service` steld is |
| `confirmation` | object | Sjoch [befêstiging](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Toant in befêstigingspop-up (net ien fan Bubble Card), oerskriuwt it standert objekt `confirmation` |

</details>

#### Foarbyld

<details>

<summary>In knop om in pop-up te iepenjen</summary>

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

Jo kinne oanpaste stilen tafoegje om de CSS fan alle kaarten te wizigjen **sûnder card-mod te brûken**, op fjouwer manieren:

- Gean yn de editor nei de kaart dy't jo wizigje wolle, navigearje dan nei _Styling options > Custom styles & JS templates_, en foegje jo oanpaste stilen ta (besjoch de tips en foarbylden hjirûnder).
- Gean yn de editor (of yn [YAML](#modules)) nei de kaart dy't jo wizigje wolle, navigearje dan nei _Modules_, en meitsje in nije module (dy sil beskikber wêze foar alle kaarten), of gean nei de **Module Store** om in beskikbere Module te ynstallearjen (mear details oer modules steane [hjirûnder](#modules)).
- Yn in [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes)-bestân troch CSS-fariabelen ta te foegjen yn YAML (dizze binne beskikber yn de dokumintaasje fan elke kaart hjirboppe). Dit makket globale wizigingen mooglik.

  <details>
  
  <summary>Foarbyld</a></summary>
  
  <br>

  Kopiearje net de rigel `Bubble:`, dat is de namme fan it tema dat jo brûke. Jo moatte ek de `--` fan de fariabelen ôfhelje.

  Jo moatte de aksje [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) útfiere om it tema nei wizigingen te fernijen.

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
  
- Yn YAML troch `styles: |` ta te foegjen, folge troch jo oanpaste stilen (besjoch de tips en foarbylden hjirûnder).

> [!TIP]  
> **Om te begripen hokker stilklassen wizige wurde kinne**, kinne jo in blik werpe op de map [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) yn dizze repository. Yn elke kaartmap fine jo in bestân mei de namme `styles.css`. Dizze bestannen befetsje alle tapaste stilen. Dit makket folle mear mooglik as CSS-fariabelen, mar it moat wol apart oan elke kaart tafoege wurde.
> 
> Jo kinne ek in protte [foarbylden fan de mienskip](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) fine, of guon fan it [Home Assistant-forum](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) troch efkes te sykjen.
>
> It Bubble-tema foar Home Assistant (lykas op de skermôfbyldingen) is [hjir](https://github.com/Clooos/Bubble) te finen.
>
> Der komt binnenkoart in tutorialfideo op myn [YouTube-kanaal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Tink derom dat jo faaks `!important;` tafoegje moatte oan guon CSS-stilen dy't al definiearre binne (sjoch de foarbylden hjirûnder).

> [!TIP]  
> Subknoppen kinne oansjoen wurde mei op namme basearre klassen. In subknop mei de namme "My sub-button" kin bygelyks styld wurde mei `.my-sub-button`. Skúfregelder-subknoppen litte ek `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, ensfh. sjen.
>
> In op namme basearre klasse feroaret as dû in subknop in oare namme joust, en dy wurdt oerset as de namme oerset wurdt. Stel `css_class` yn op de subknop om in eigen klasse te krijen dy't noait ferpleatst, hokker namme en hokker taal ek.

#### Foarbylden

<details>

<summary>De letterôfmjitting fan elke Bubble Card wizigje</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>De eftergrûnkleur fan ien knop yn in horizontale knoppenstack wizigje</summary>

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

<summary>De eftergrûnkleur fan in kaart wizigje</summary>

<br>

Dizze wurket op alle Bubble Card-types (útsein pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Dizze docht itselde, mar allinnich yn in knop-kaart (it wurket ek foar de pop-up-koptekst): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Om de kleur te wizigjen as it `on` is, sjoch de stylsjabloanen hjirûnder.

</details>

<details>

<summary>De kleur fan in knopskúfregelder wizigje</summary>

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

<summary>De lynkleur fan in skiedingsline wizigje</summary>

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

<summary>De kleur fan in ikoan wizigje</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Foar it ikoan fan in horizontale knoppenstack.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>De eftergrûnkleur fan in ikoankontainer wizigje</summary>

<br>

Dizze wurket op alle Bubble Card-types (útsein pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Dizze docht itselde foar de pop-up-koptekst: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>De grutte fan de subknoppen wizigje (perfekt foar de grutte yndieling)</summary>

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

<summary>De eftergrûnkleur fan de twadde subknop wizigje</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>De grutte fan in ikoan wizigje</summary>

<br>

Foar it haadikoan.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Foar de subknopikoanen.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>In ôfbylding brûke ynstee fan in ikoan yn in subknop</summary>

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

Laad dizze ôfbylding gewoan op yn in map "pictures" (of de namme dy't jo wolle) yn de Home Assistant-map "www".

</details>

<details>

<summary>Avansearre foarbyld: In horizontale rige subknoppen meitsje (mei skermôfbylding)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ik hâld hjir echt fan, ik brûk it as koptekst op myn dashboard.

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

## Sjabloanen

**Bubble Card stipet gjin Jinja2-sjabloanen**, mar avansearre brûkers kinne sjabloanen tafoegje yn JS, direkt yn har [oanpaste stilen](#styling). Dit makket it bygelyks mooglik om dynamysk in ikoan, de teksten of de kleuren fan in elemint te wizigjen, om in elemint (lykas in subknop) betingst te toanen of te ferbergjen, of hast alles basearre op in steat, in attribút en mear.

> [!TIP]  
> Mear ynformaasje oer JS-sjabloanen [hjir](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Myn advys is om **altyd de konsole fan jo browser te besjen** om wis te wêzen dat alles goed wurket.

> [!IMPORTANT]  
> **Alle sjabloanen dy't gjin CSS-eigenskip wizigje, moatte oan it ein pleatst wurde! Lykas it wizigjen fan in ikoan, in tekst of hokfoar elemint dan ek.**

#### Beskikbere fariabelen en funksjes

<details>

<summary>Fariabelen</summary>

<br>

Jo hawwe yn de measte kaarten tagong ta dizze fariabelen:

- `state` jout de steat werom fan jo definiearre `entity`.
  
- `entity` jout de entiteit werom dy't jo definiearre ha, lykas `switch.test` yn dit foarbyld.
  
- `icon` kin sa brûkt wurde om it ikoan te wizigjen: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` jout de steat werom fan de definiearre `entity` fan jo earste subknop, `[0]` is de earste subknopsteat, `[1]` de twadde...
  
- `subButtonIcon[0]` kin sa brûkt wurde om it ikoan fan de earste subknop te wizigjen: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` is it earste subknopikoan, `[1]` it twadde...
  
- `card` jout it kaartelemint yn de DOM werom.
  
- `hass` is in avansearre fariabele dy't jo noch mear kontrôle jout, jo kinne bygelyks sa de steat fan `light.kitchen` werombringe: `hass.states['light.kitchen'].state`, of in attribút sa: `hass.states[entity].attributes.brightness`.

- `this` jout in protte nuttige ynformaasje oer jo opset en dashboard werom, brûk dit allinnich as jo witte wat jo dogge.

</details>

<details>

<summary>Funksjes</summary>

<br>

Jo hawwe tagong ta alle globale JS-funksjes, mar ek ta:

- `getWeatherIcon` kin brûkt wurde om in waar-ikoan werom te jaan basearre op in steat dy't it waar oanjout. Jo kinne bygelyks dit dwaan: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` om it ikoan fan de tredde subknop te wizigjen yn it waar-ikoan fan hjoed, `.forecast[1]?.condition` is foar moarn...

  Dêrfoar moatte jo in sjabloansensor meitsje. Hjir is wat jo tafoegje kinne yn jo `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` jout `true` werom as oan in list mei [betingsten](#betingsten) foldien is, bygelyks `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` kin brûkt wurde om in steat te oersetten (kin ek brûkt wurde om in stateenheid te krijen, sûnder dy hânmjittich ta te foegjen).
- `hass.formatEntityAttributeValue(state, "attribute")` kin brûkt wurde om in attribút te oersetten (kin ek brûkt wurde om in stateenheid te krijen, sûnder dy hânmjittich ta te foegjen).

</details>

#### Foarbylden

Jo fine hjirûnder in protte foarbylden, mar jo kinne ek tige avansearre sjabloanen fine op myn [Patreon-side](https://www.patreon.com/c/Clooos), lykas ien (myn favoryt) dy't oant fjouwer betingste badges om de ikoanen fan de kaart hinne mooglik makket. It is ek in geweldige manier om alle mooglikheden fan Bubble Card's oanpaste stilen en sjabloanen te learen!

<details>
<summary>Foarbylden fan myn Patreon-side</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant-like badges tafoegje oan elke kaart</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Formattearre datum en tiid yn in skiedingsline toane sûnder in entiteit te brûken</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">De steat fan in subknop op twa rigels toane</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Labels en ikoanen yn in seleksje-subknop oanpasse</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">In fêststeande weromkommentspop-up tafoegje dy't allinnich ferskynt as it nedich is</a>
</p>

<br>

</details>

<details>

<summary>De eftergrûnkleur fan in knop wizigje, read as it <code>off</code> is en blau as it <code>on</code> is</summary>

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

<summary>De eftergrûnkleur fan in knop wizigje basearre op in entiteit foar de horizontale knoppenstack</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>In subknop betingst toane/ferbergje</summary>

<br>

Dizze toant de earste subknop allinnich as myn stofsûger fêstsit.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Dizze toant in subknop as de batterij ûnder de 10% is. Nuttich mei in subknop dy't "Batterij leech" toant.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>In ikoan of subknopikoan betingst wizigje</summary>

<br>

Dizze wizigt in knopikoan allinnich as in stofsûger fêstsit.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Dizze wizigt it ikoan fan de earste subknop allinnich as in stofsûger fêstsit.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>De kleur fan in ikoan of subknopikoan betingst wizigje</summary>

<br>

Dizze wizigt de kleur fan in knopikoan basearre op syn steat.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Dizze wizigt de kleur fan in subknopikoan basearre op syn steat. `.bubble-sub-button-1` is de earste subknop, ferfang `1` as jo it ikoan fan in oare subknop wizigje wolle.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>In fan-ikoan betingst animearje</summary>

<br>

Dizze lit in knopikoan draaien as in fentilator `on` is.
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

<summary>Teksten sjablonearje (lykas namme of steat)</summary>

<br>

Dizze wizigt in knopnamme/steat mei "It is no sinnich" ôfhinklik fan jo waar.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
of tapast op subknoppen:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


As jo de steat (`.bubble-state`) sjablonearje wolle, skeakelje dan net `show_state: true` yn, mar allinnich `show_attribute: true` sûnder attribút.

</details>

<details>

<summary>Avansearre foarbyld: De kleur fan in subknop wizigje as in pop-up iepen is</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Avansearre foarbyld: De namme fan in skiedingsline sjablonearje basearre op in steat, oerset yn jo taal</summary>

<br>

Jo kinne `hass.formatEntityState(state)` brûke om in steat te oersetten en `hass.formatEntityAttributeValue(state, "attribute")` om in attribút te oersetten.

Dizze wizigt de namme en it ikoan basearre op it waar, "Nuageux" betsjut "Wolkich" yn it Frânsk.

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

Modules binne in krêftige funksje wêrmei jo jo oanpaste stilen en sjabloanen bewarje, opnij brûke en diele kinne oer al jo Bubble Cards hinne. Ynstee fan deselde koade yn meardere kaarten te kopiearjen en te plakken, kinne jo in Module meitsje en dy tapasse wêr't jo dy nedich hawwe. Dit makket it behearen fan de foarm en útstrieling fan jo dashboard folle makliker en effisjinter.

Mar dizze funksje is folle krêftiger as dat allinnich, it lit jo sels echte funksjes tafoegje yn de Bubble Card-editor, mei help fan alle standert [Home Assistant-formulier](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)-opsjes!  
De objektseleksjetool is ferbettere om libbene wizigingen te toanen en attributen korrekt te stypjen.

In module kin ek antwurdzje op de kaartkiezer fan Home Assistant, njonken de ynboude [entiteitsuggestjes](#entiteitsuggestjes): brûk `suggestions` foar de kaarten dy't er fan tefoaren beskriuwe kin, en `suggestions_code` as dy út dyn opstelling berekkene wurde moatte, bygelyks in pop-up dy't opboud wurdt út alle entiteiten fan it gebiet dêr't de keazen entiteit ta heart. Beide kaaien wurde [hjir](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) beskreaun.

Jo kinne ek troch de **Module Store** blêdzje om [modules fan de mienskip](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) te finen en te ynstallearjen, of jo eigen kreaasjes te dielen!

> [!TIP]
> De koade fan in Module wurket krekt itselde as de koade yn de seksje `styles` fan in kaart. Alle fariabelen en funksjes fan de seksje [Sjabloanen](#sjabloanen) binne beskikber.

<br>

### Earste ynstelling

> [!IMPORTANT]
> Sûnt v3.1.0 is Bubble Card Tools de oanrikkemandearre opslachbackend foar modules. De ferâldere metoade mei sjabloansensoren wurket noch foar besteande opsetten, mar nije modules en Module Store-funksjes wurde it bêste stipe fia Bubble Card Tools.

De Bubble Card Tools-yntegraasje skeakelt de Module Editor en de Module Store yn, en bewarret modules as yndividuele YAML-bestannen. Besteande modules wurde automatysk migrearre.

De ynstallaasje- en konfiguraasjestappen wurde hjir útlein:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### De Module Editor

Jo kinne de Module Editor iepenje fanút de ynstellings fan elke kaart, ûnder de seksje **Modules**. De editor jout twa haadtabblêden:

#### Tabblêd Myn Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Dit tabblêd toant al jo ynstallearre modules en lit jo:

- Besteande modules **tapasse** op de aktive kaart
- In nije module **meitsje** fan nul ôf
- Besteande modules **bewurkje** mei libbene foarbyldwerjefte
- Modules dy't jo net mear nedich binne **wiskje**
- Modules **sykje** en **sortearje** (alfabetysk, resint, aktyf earst)
- De **globale steat ynstelle** sadat in module automatysk op alle kaarten tapast wurdt
- Modules **ymportearje/eksportearje** foar reservekopy of it dielen
- **Entiteitsuggestjes skriuwe** yn de module-editor, ûnder **Opsjoneel: entiteitsuggestjes**, sadat dyn module yn de kaartkiezer fan Home Assistant oanbean wurdt. Sawol de regels as de berekkene suggestjes wurde ûnder it skriuwen kontrolearre, in flater dêryn foarkomt bewarjen, en it foarbyld toant de foarstelde kaarten foar elke entiteit dy't dû kiest

#### Tabblêd Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Dit tabblêd toant [alle beskikbere modules fan de mienskip](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), en lit jo:

- Alle troch de mienskip makke modules **trochblêdzje**
- Modules **sykje** en filterje op namme, kompatibiliteit of trefwurden
- Modules mei ien klik **ynstallearje**
- Ynstallearre modules **bywurkje** as der nije ferzjes beskikber binne

> [!TIP]
> Yn de editor kinne jo net-stipe modules ynskeakelje om modules te testen dy't noch net markearre binne as kompatibel mei in bepaald kaarttype.

<br>

### Hoe't jo modules brûke

#### In nije module meitsje

<details>

<summary>Klik om út te klappen</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Gean nei de editor fan elke kaart en klap de seksje **Modules** út.
2. Klik op **Create new module**.
3. Folje de module-ynformaasje yn.
4. Skriuw jo CSS- en/of JavaScript-sjabloankoade yn de **Code**-editor.
5. (Opsjoneel) Meitsje in oanpaste konfiguraasje-UI yn de seksje **Editor** (lykas de kleurkiezer yn de skermôfbylding hjirboppe, folsleine dokumintaasje beskikber [hjir](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Opsjoneel) Skriuw dyn **Entiteitsuggestjes** sadat dyn module yn de kaartkiezer fan Home Assistant oanbean wurdt. It paniel kontrolearret ûnder it typen wat dû skriuwst, en it foarbyld toant de foarstelde kaarten sels foar de entiteit fan dyn kar.
7. Klik op **Save**.

Jo module is no beskikber om op elk fan jo kaarten brûkt te wurden!

<br>

</details>

#### In module tapasse op in kaart

<details>

<summary>Klik om út te klappen</summary>

<br>

- **Fia de editor:**

  - Gean nei de editor fan de kaart wêrop jo de module tapasse wolle.
  - Klap de seksje **Modules** út.
  - Klik op de module dy't jo út de list tapasse wolle.
  - Klik ûnder "Apply to" op "This card". De module is no aktyf. Jo kinne meardere modules op deselde kaart tapasse.

- **Fia YAML:**

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

#### In module globaal tapasse

<details>

<summary>Klik om út te klappen</summary>

<br>

Jo kinne in module ynstelle om automatysk op alle Bubble Cards tapast te wurden:

**Dit is net beskikber foar modules mei in editor, om't dy in spesifike konfiguraasje nedich hawwe om te wurkjen.**

- **Fia de editor:**

  - Sykje jo module yn de Module-editor, op it tabblêd **My Modules**.
  - Skeakelje de knop **All cards** neist de modulenamme.
  - De module wurdt no automatysk op alle kaarten tapast.
 
- **Fia YAML:**

  Foegje yn jo YAML-konfiguraasje fan de module (yn `bubble-modules.yaml`) gewoan `is_global: true` ta.

<br>

</details>

#### Ien kaart útslute fan in globale module

<details>

<summary>Klik om út te klappen</summary>

<br>

As jo in globale module hawwe, mar dy útslute wolle fan in spesifike kaart:

- **Fia de editor:**
  
  - Yn de seksje **Modules** fan de kaart sjogge jo de globale modules opsomd.
  - Klik op in globale module, skeakelje "This card" út om dy fan dizze spesifike kaart út te sluten.

- **Fia YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Jo module diele mei de Module Store

<details>

<summary>Klik om út te klappen</summary>

<br>

Om jo Module te dielen mei de Module Store, klikt jo ûnderoan de Module Editor, by "Export Module", op "Copy for GitHub" en plakke de ynhâld yn in nije diskusje yn de kategory [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Bewurkje de beskriuwing** (as dat nedich is), **it foarbyld** (foar YAML-brûkers), en tink derom dat jo **op syn minst ien skermôfbylding tafoegje** foar de Module Store.

**Jo Module wurdt direkt dêrnei beskikber** (nei in fernijing fan de Store), kontrolearje dus dûbel oft alles korrekt skreaun is en oft de Module wurket sa't ferwachte. Jo kinne de Module fansels bewurkje/bywurkje nei't dy dield is.

<br>

</details>

#### Ferzjebehear

<details>

<summary>Klik om út te klappen</summary>

<br>

De Module Store kontrolearret automatysk op bywurkings foar ynstallearre modules. As der bywurkings beskikber binne:

1. Sjogge jo in bywurkingsyndikator op it tabblêd **Module Store**.
2. Klik op **Update** by modules mei beskikbere bywurkings.
3. Befêstigje de bywurking yn de Module Store.

<br>

</details>

#### Stipe kaarttypes definiearje

<details>

<summary>Klik om út te klappen</summary>

<br>

Guon modules binne mooglik net kompatibel mei alle kaarttypes. Jo kinne oanjaan hokker kaarten in module stipet.  
As jo wolle dat in module kompatibel is mei **alle kaarten**, lit dan gewoan it fjild `supported` fuort (of brûk de opsje **All cards** yn de editor).

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

### Foarbylden

<details>
<summary>Basale styling-module</summary>

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
<summary>Module mei oanpaste konfiguraasje</summary>

<br>

Dizze module is [hjir](https://github.com/Clooos/Bubble-Card/discussions/1231) beskikber.

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

Mear foarbylden fine jo yn de Module Store, of [hjir](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalisaasje

Bubble Card praat dyn taal. De editor is oerset yn de 64 talen dy't Home Assistant stipet, en oeral dêr't Home Assistant al in wurd foar wat hat, wurdt syn eigen formulearring oernaam, sadat dû yn beide ynterfaces deselde termen lêst.

Underoan de editor, njonken it ferzjenûmer, folget in **Automatysk**-skeakelder de taal fan dyn Home Assistant. Set dy út en de hiele editor giet werom nei it Ingelsk, wat handich is om in tutorial te folgjen of in probleem te melden. Dyn kar wurdt yn dyn browser ûnthâlden.

Dizze dokumintaasje is ek oerset, [yn 62 talen](languages.md), allegear útsein Britsk Ingelsk, dat it orizjineel toant. Dy siden binne foar elkenien iepen, dus in formulearring dy't net by dyn eigen Home Assistant past kin yn in pear klikken ferbettere wurde. De Ingelske ferzje bliuwt de referinsje foar de ynhâld sels.

<br>

---

<br>

## Help

Fiel jo frij om in issue te iepenjen as der wat net wurket sa't ferwachte.

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Hawwe jo fragen of gedachten oer Bubble Card? Wolle jo jo dashboards of ûntdekkingen diele? Jo kinne terjochte op it Home Assistant-forum, op de Bubble Card-subreddit, of yn de GitHub Discussions-seksje.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Bydrage

Bydragen binne wolkom! Of it no giet om bugfixes, nije funksjes, oersettingen of ferbetteringen fan de dokumintaasje, fiel jo frij om in pull request te iepenjen.

Lês foardat jo begjinne earst de [ûntwikkelershantlieding](DEVELOPERS.md), dy't útlit hoe't jo jo lokale omjouwing ynstelle, it projekt bouwe en jo wizigingen teste.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donearje

Ik bestegje it grutste diel fan myn frije tiid oan dit projekt om it sa goed mooglik te meitsjen. As jo myn wurk wurdearje, is elke donaasje dus in moaie manier om jo stipe te toanen 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Tank oan elkenien foar jo stipe, jimme binne allegear myn grutste motivaasje!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
