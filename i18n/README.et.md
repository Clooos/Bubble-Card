<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> See leht on automaatne tõlge. Kahtluse korral kehtib [ingliskeelne originaaldokumentatsioon](../README.md). Kas mõni lause tundub vale? Iga abi on teretulnud ja [selle lehe parandamine](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.et.md) võtab vaid minuti: GitHub hoolitseb forki ja pull requesti eest. Suur tänu juba ette! 🍻

# Bubble Card

🌐 **[Loe seda mõnes muus keeles](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card on minimalistlik ja kohandatav kaartide kogu Home Assistant'i jaoks, mis pakub kaasaegseid hüpikaknaid ja sisseehitatud Module Store'i enam kui 100 kogukonna loodud mooduliga.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Sisukord

**[`Paigaldamine`](#paigaldamine)**  **[`Seadistamine`](#seadistamine)**  **[`Hüpikaken`](#hüpikaken)**  **[`Horisontaalne nuppude virn`](#horisontaalne-nuppude-virn)**  **[`Nupp`](#nupp)**  **[`Meediumipleier`](#meediumipleier)**  **[`Kate`](#kate)**  **[`Valik`](#valik)**  **[`Kliimaseade`](#kliimaseade)**  **[`Kalender`](#kalender)**  **[`Eraldaja`](#eraldaja)**  **[`Tühi veerg`](#tühi-veerg)**  **[`Ainult alamnupud`](#ainult-alamnupud)**  **[`Alamnupud`](#alamnupud)**  **[`Kaardi paigutused`](#kaardi-paigutused)**  **[`Toimingud`](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud)**  **[`Stiilimine`](#stiilimine)**  **[`Mallid`](#mallid)**  **[`Moodulid`](#moodulid)**  **[`Abi`](#abi)**  **[`Panustamine`](#panustamine)**  **[`Anneta`](#anneta)**

<br>

## Paigaldamine

**Home Assistant'i madalaim toetatud versioon:** 2023.9.0

<details>

<summary>Ilma HACS'ita</summary>

<br>

1. Laadi alla see fail: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Lisa see fail oma kausta `<config>/www`
3. Klõpsa oma armatuurlaual paremas ülanurgas asuval ikoonil ja seejärel valikul `Edit dashboard`
4. Klõpsa uuesti sellel ikoonil ja seejärel valikul `Manage resources`
5. Klõpsa `Add resource`
6. Kopeeri ja kleebi see: `/local/bubble-card.js?v=1`
7. Klõpsa `JavaScript Module` ja seejärel `Create`
8. Mine tagasi ja värskenda lehte
9. Nüüd saad paremas alanurgas klõpsata `Add card` ja otsida `Bubble Card`
10. Pärast faili igat uuendust tuleb muuta `/local/bubble-card.js?v=1` ja tõsta versiooninumbrit

Kui see ei tööta, proovi lihtsalt oma brauseri vahemälu tühjendada.

</details>

<details>

<summary>HACS'iga (soovitatav)</summary>

<br>

See meetod võimaldab saada uuendusi otse Home Assistant Community Store'ist

1. Kui HACS pole veel paigaldatud, laadi see alla juhiste järgi aadressil [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Vii läbi HACS'i esmane seadistus juhiste järgi aadressil [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Mine oma külgribal jaotisse "HACS"
4. Otsi "Bubble Card" või klõpsa allolevat sinist nuppu
5. Klõpsa "Download"
6. Mine tagasi oma armatuurlauale ja klõpsa paremas ülanurgas asuval ikoonil ning seejärel valikul `Edit dashboard`
7. Nüüd saad paremas alanurgas klõpsata `Add card` ja otsida `Bubble Card`

Kui see ei tööta, proovi tühjendada oma brauseri või rakenduse vahemälu (vajaduse korral kõigis seadmetes).

#### Videod

Vaata ka minu YouTube'i kanalit, kus on samm-sammult videod.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Seadistamine

Kõiki valikuid saab seadistada Home Assistant'i redaktoris. Kuid allolevast dokumentatsioonist leiad rohkem üksikasju ja YAML'i.

<details>

<summary><b>Põhivalikud (YAML + kirjeldus)</b></summary>

| Nimi | Tüüp | Nõue | Toetatud väärtused | Kirjeldus |
| --- | --- | --- | --- | --- |
| `type` | string | **Kohustuslik** | `custom:bubble-card` | Kaardi tüüp |
| `card_type` | string | **Kohustuslik** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` või `sub-buttons` | Bubble Card'i tüüp, vt allpool |
| `styles` | object list | Valikuline | Kõik CSS stiililehed | Võimaldab kohandada oma Bubble Card'i CSS'i, vt [stiilimine](#stiilimine) |

</details>

<details>

<summary><b>Globaalsed CSS muutujad (vt <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Muutuja | Oodatud väärtus | Kirjeldus |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Nurga raadius kõigi toetatud elementide jaoks |
| `--bubble-main-background-color` | `color` | Peamine taustavärv kõigi toetatud elementide jaoks |
| `--bubble-secondary-background-color` | `color` | Sekundaarne taustavärv kõigi toetatud elementide jaoks |
| `--bubble-accent-color` | `color` | Aktsendivärv kõigi toetatud elementide jaoks |
| `--bubble-icon-border-radius` | `px` | Ikooni nurga raadius kõigi toetatud elementide jaoks |
| `--bubble-icon-background-color` | `color` | Ikooni taustavärv kõigi toetatud elementide jaoks |
| `--bubble-sub-button-border-radius` | `px` | Nurga raadius kõigi alamnuppude jaoks |
| `--bubble-sub-button-background-color` | `color` | Taustavärv kõigi alamnuppude jaoks |
| `--bubble-box-shadow` | vt [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Varju efekt kõigi toetatud elementide jaoks |
| `--bubble-border` | vt [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Äärejoon kõigi toetatud kaartide jaoks |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Vaata seda [videot](https://www.youtube.com/watch?v=0hSQOlBxKKI), et tutvuda Bubble Card'i ja selle võimalustega.** Minu YouTube'i kanal on üsna uus ja keskendub Home Assistant'i ja Bubble Card'i õpetustele. Ära kõhkle tellimast, et aidata suurendada minu kanali nähtavust. Tänan juba ette!

<br>

---

<br>

## Hüpikaken

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

See kaart võimaldab luua hüpikakna suvalise sisuga. Iga hüpikaken on **vaikimisi peidetud** ja selle saab avada, suunates selle lingile (nt `'#pop-up-name'`), mistahes kaardiga, mis toetab tegevust `navigate` [action](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud), või kaasas oleva [horisontaalse nuppude virnaga](#horisontaalne-nuppude-virn).

> [!TIP]
> ### Hüpikakna käivitaja 
> See funktsioon võimaldab avada hüpikakna suvalise oleku alusel, näiteks saad avada "Turvalisuse" hüpikakna koos kaameraga, kui keegi seisab su maja ees. Samuti saad luua lüliti abistaja (input_boolean) ja käivitada selle avamise/sulgemise automatiseeringus.
> <details>
> <summary>Hüpikakna avamine, kui <code>binary_sensor</code> on <code>on</code></summary>
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
> ### Erinevad viisid hüpikakna sulgemiseks 
> Hüpikakna sulgemiseks on mitmeid viise. Näiteks saad pühkida hüpikakna päisest alla, teha pika pühkimise hüpikakna sees allapoole, vajutada arvutis Escape'i, eemaldada URL'ist hash'i või lihtsalt vajutada sulgemisnupule.
>


### Hüpikakna valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Nimi | Tüüp | Nõue | Toetatud väärtused | Kirjeldus |
| --- | --- | --- | --- | --- |
| `hash` | string | **Kohustuslik** | Iga unikaalne hash (nt `'#kitchen'`) koos ' ' | Nii avad oma hüpikakna |
| `popup_style` | string | Valikuline | `bubble` (vaikimisi) või `classic` | Määrab hüpikakna visuaalse stiili |
| `popup_mode` | string | Valikuline | `default` (vaikimisi), `fit-content`, `centered` või `adaptive-dialog` | Määrab hüpikakna paigutuse režiimi |
| `with_bottom_offset` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kasutatakse ainult koos `popup_mode: fit-content` või `adaptive-dialog`. Rakendab mobiilis alumise nihke, kasulik kui sinu armatuurlaual on jaluse kaart. |
| `full_width_on_mobile` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kasutatakse ainult koos `popup_mode: centered`. Laiendab hüpikakna mobiilis täisekraani laiuseks, kasulik väiksemate ekraanide korral. |
| `performance_mode` | string | Valikuline | `default` (vaikimisi) või `performance` | Optimeerib hüpikakna avanemise animatsiooni. `performance` viivitab veidi sisu renderdamist ja tausta hägustamist ning keelab ka backdrop-blur'i, kui see on määratud. |
| `auto_close` | string | Valikuline | Ajapiirang millisekundites (nt `10000` 10 sekundi jaoks) | Sulgeb hüpikakna automaatselt pärast ajapiirangut |
| `close_on_click` | boolean | Valikuline | `true` või `false` (vaikimisi) | Sulgeb hüpikakna automaatselt pärast igasugust interaktsiooni |
| `close_by_clicking_outside` | boolean | Valikuline | `true` (vaikimisi) või `false` | Sulgeb hüpikakna, kui klõpsata väljaspool seda |
| `width_desktop` | string | Valikuline | Iga CSS väärtus | Laius arvutis (`100%` vaikimisi mobiilis) |
| `margin` | string | Valikuline | Iga CSS väärtus | Kasuta seda **ainult** siis, kui su hüpikaken pole mobiilis hästi tsentreeritud (nt `13px`) |
| `margin_top_mobile` | string | Valikuline | Iga CSS väärtus | Ülemine varu mobiilis (nt `-56px`, kui su päis on peidetud) |
| `margin_top_desktop` | string | Valikuline | Iga CSS väärtus | Ülemine varu arvutis (nt `50vh` pooliku kõrgusega hüpikaknale või `calc(100vh - 400px)` fikseeritud kõrgusele `400px`) |
| `bg_color` | string | Valikuline | Iga hex, rgb või rgba väärtus | Sinu hüpikakna taustavärv (nt `#ffffff` valge tausta jaoks) |
| `bg_opacity` | string | Valikuline | Iga väärtus vahemikus `0` kuni `100` | Sinu hüpikakna tausta läbipaistmatus (nt `100` täieliku läbipaistmatuse jaoks) |
| `bg_blur` | string | Valikuline | Iga väärtus vahemikus `0` kuni `100` | Sinu hüpikakna tausta hägustamise efekt, **see töötab ainult siis, kui `bg_opacity` ei ole seatud väärtusele `100`** (nt `0` hägustamise puudumiseks) |
| `shadow_opacity` | string | Valikuline | Iga väärtus vahemikus `0` kuni `100` | Sinu hüpikakna varju läbipaistmatus (nt `0`, et see peita) |
| `hide_backdrop` | boolean | Valikuline | `true` või `false` (vaikimisi) | Määra see väärtuseks true oma peamise armatuurlaua esimesel hüpikaknal, et keelata backdrop kõigil hüpikakendel. |
| `background_update` | boolean | Valikuline | `true` või `false` (vaikimisi) | Uuendab hüpikakna sisu taustal (ei ole soovitatav) |
| `trigger_entity` | string | Valikuline | Iga olem | Avab selle hüpikakna suvalise olemi oleku alusel |
| `trigger_state` | string | Valikuline (**Kohustuslik**, kui `trigger_entity` on määratud) | Iga olemi olek | Olemi olek, mis avab hüpikakna |
| `trigger_close` | boolean | Valikuline | `true` või `false` (vaikimisi) | Sulgeb hüpikakna, kui `trigger_state` erineb |
| `open_action` | object | Valikuline | Vt [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Käivitab tegevuse hüpikakna avanemisel |
| `close_action` | object | Valikuline | Vt [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Käivitab tegevuse hüpikakna sulgemisel |
| `show_header` | boolean | Valikuline | `true` (vaikimisi) või `false` | Näitab/peidab hüpikakna päise täielikult |
| `show_previous_button` | boolean | Valikuline | `true` või `false` (vaikimisi) | Näitab eelmise nupu sulgemisnupu kõrval ja navigeerib tagasi eelmisele hüpikaknale, kui see on saadaval |
| `show_close_button` | boolean | Valikuline | `true` (vaikimisi) või `false` | Näitab või peidab sulgemisnupu, hoides ülejäänud päise nähtavana |
| `buttons_position` | string | Valikuline | `right` (vaikimisi) või `left` | Sulgemis- ja eelmise nupu asukoht päises |
| `cards` | list | Valikuline | Iga Bubble Card, Home Assistant'i kaart või kohandatud kaart | Määrab sinu hüpikakna sisu. Vt allolevat hüpikakna näidet. |
| Sul on ligipääs ka [kõigile nupu seadetele](#nupp) hüpikakna päise jaoks. | | Valikuline | | Kui pole määratud, ei kuvata ühtegi päist |

</details>

<details>

<summary><b>CSS muutujad (vt <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Muutuja | Oodatud väärtus | Kirjeldus |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Nurga raadius hüpikakna jaoks |
| `--bubble-pop-up-main-background-color` | `color` | Peamine taustavärv hüpikakna toetatud elementide jaoks |
| `--bubble-pop-up-background-color` | `color` | Hüpikakna taustavärv |
| `--bubble-backdrop-background-color` | `color` | Taustavärv backdrop'i jaoks |
| Sul on ligipääs ka [kõigile nupu CSS muutujatele](#nupu-valikud) hüpikakna päise jaoks. | | |

</details>


### Iseseisev hüpikakna vorming (v3.2.0+)

Alates versioonist v3.2.0 kasutavad hüpikaknad uut iseseisvat vormingut, kus sisukaardid määratakse otse hüpikakna sees, kasutades valikut `cards`. See tagab parema jõudluse ja uue sektsioonipõhise lohista-ja-aseta redigeerimiskogemuse.


#### Näited

<details>

<summary>Hüpikaken (iseseisev vorming)</summary>

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

<summary>Nupp hüpikakna avamiseks</summary>

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

## Horisontaalne nuppude virn

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

See kaart sobib hästi kokku hüpikakna kaardiga, võimaldades avada vastavaid hüpikaknaid. Samuti võimaldab see avada mistahes lehte sinu armatuurlaual. Lisaks saad lisada oma liikumis-/kohaloleku andurid, nii et nuppude järjekord kohaneb vastavalt ruumile, kuhu just sisenesid. See kaart on kerritav, jääb nähtavaks ja käitub jalusena.

> [!IMPORTANT]  
> See kaart peab olema sinu vaates viimane (pärast iga kaarti ja hüpikakent). See ei tohi paikneda ühegi virna sees.

### Horisontaalse nuppude virna valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Nimi | Tüüp | Nõue | Toetatud väärtused | Kirjeldus |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Kohustuslik** | Hüpikakna hash (nt `'#kitchen'`) koos ' ' või iga link | Link, mida avada |
| `1_name` | string | Valikuline | Iga string | Nimi sinu nupule |
| `1_icon` | string | Valikuline | Iga `mdi:` ikoon | Ikoon sinu nupule |
| `1_entity` | string | Valikuline | Iga valgusti või valgustite grupp | Kuvab selle valgusti värvi taustal |
| `1_pir_sensor` | string | Valikuline | Iga binaarandur | Vähemalt üks pir andur (või rohkem) `auto_order` jaoks, tegelikult töötab see ka iga olemi tüübiga, näiteks saad lisada valgustite gruppe ja järjekord muutub vastavalt viimati muudetud olekutele. |
| `auto_order` | boolean | Valikuline | `true` või `false` (vaikimisi) | Muudab nuppude järjekorda vastavalt `_pir_sensor` viimasele muutmisajale, **see peab olema `false`, kui su koodis pole ühtegi `_pir_sensor`'it** |
| `margin` | string | Valikuline | Iga CSS väärtus | Kasuta seda **ainult** siis, kui su `horizontal-buttons-stack` pole mobiilis hästi tsentreeritud (nt `13px`) |
| `width_desktop` | string | Valikuline | Iga CSS väärtus | Laius arvutis (`100%` vaikimisi mobiilis) |
| `is_sidebar_hidden` | boolean | Valikuline | `true` või `false` (vaikimisi) | Fikseerib horisontaalse nuppude virna asukoha, kui külgriba on arvutis peidetud (ainult siis, kui oled ise teinud muudatuse selle peitmiseks) |
| `rise_animation` | boolean | Valikuline | `true` (vaikimisi) või `false` | Määra see väärtuseks `false`, et keelata animatsioon, mis aktiveerub pärast lehe laadimist |
| `highlight_current_view` | boolean | Valikuline | `true` või `false` (vaikimisi) | Tõstab esile praeguse hash'i/vaate sujuva animatsiooniga |
| `hide_gradient` | boolean | Valikuline | `true` või `false` (vaikimisi) | Määra see väärtuseks `false`, et peita gradient |

> [!IMPORTANT]  
> Numbriga algavad muutujad määravad sinu nupud, muuda lihtsalt seda numbrit, et lisada rohkem nuppe (vt allolevat näidet).

</details>

<details>

<summary><b>CSS muutujad (vt <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Muutuja | Oodatud väärtus | Kirjeldus |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Nurga raadius horisontaalse nuppude virna nuppudele |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Taustavärv horisontaalse nuppude virna nuppudele |

</details>


#### Näide

<details>

<summary>Horisontaalne nuppude virn, mis korraldab end ümber vastavalt kohaloleku anduritele</summary>

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

## Nupp

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

See kaart on väga mitmekülgne. Seda saab kasutada **lülitina**, **liuguritina**, **olekuna** või **nime/teksti** nupuna.

> [!TIP]
> ### Mis vahe on erinevatel nupu tüüpidel?
>
> - **Lüliti nupp:** see on vaikimisi nupu tüüp. Vaikimisi lülitab see olemit sisse-välja ja selle taustavärv muutub olemi oleku või valguse värvi järgi. Toimingut saab muuta jaotises **Puudutuse toiming kaardil**.
>
> - **Liuguri nupp:** see nupu tüüp võimaldab juhtida olemeid reguleeritava vahemikuga. See sobib ideaalselt valgustite hämardamiseks ja selle täitevärv kohandub valgusti värviga. Seda saab kasutada ka väärtuste, näiteks aku taseme, kuvamiseks.
>   Liuguritega toetatud olemid:
>   - Valgusti (heledus)
>   - Meediumipleier (helitugevus)
>   - Kate (asend)
>   - Ventilaator (protsent)
>   - Kliimaseade (temperatuur)
>   - Sisendarv ja arv (väärtus)
>   - Aku andur (protsent, ainult loetav)
>
>   Seda saab kasutada ka mis tahes arvväärtusega olemiga, kui keelata olemi filter jaotises **Liuguri seaded** ja määrata seejärel `min` ja `max` väärtused. See valik on ainult loetav.
>
> - **Oleku nupp:** täiuslik anduri või mis tahes olemi info kuvamiseks. Kui vajutad sellele, kuvatakse olemi "Rohkem infot" paneel. Selle taustavärv ei muutu.
>
> - **Nime/Teksti nupp:** ainus nupu tüüp, mis ei vaja olemit. See võimaldab kuvada lühikest teksti, nime või pealkirja. Sellele saab lisada ka toiminguid. Selle taustavärv ei muutu.

### Nupu valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Juhitav olem |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Nupu käitumine |
| `name` | string | Optional | Any string | Nupu nimi, kui pole määratud, kuvatakse olemi nimi |
| `icon` | string | Optional | Any `mdi:` icon | Nupu ikoon, kui pole määratud, kuvatakse olemi ikoon või `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Anna ikoonile eelistus `entity-picture` asemel |
| `use_accent_color` | boolean | Optional (`false` default) | **Ainult valgustitele.** Kasuta valgusti värvi asemel teema aktsendivärvi.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Näita või peida oma `entity` olek |
| `show_name` | boolean | Optional | `true` (default) or `false` | Näita või peida nimi |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Näita või peida ikoon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase muutumise aega |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase uuendamise aega |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` atribuuti nime all |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Näidatav atribuut (nt `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Luba teksti kerimine, kui sisu ületab konteineri suuruse |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Võimaldab muuta nupu klõpsu vaikimisi toiminguid. |
| `tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni klõpsu toimingu tüüp, kui pole määratud, kasutatakse `more-info` |
| `double_tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni topeltklõpsu toimingu tüüp, kui pole määratud, kasutatakse `none` |
| `hold_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni pika vajutuse toimingu tüüp, kui pole määratud, kasutatakse `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiililine paigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Optional | Any number | Ridade arv (kõrgus) (nt `2`) |
| `sub_button` | object | Optional | See [alamnupud](#alamnupud) | Lisa kohandatud nupud paremale kinnitatuna |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Nupu toetatud elementide peamine taustavärv |
| `--bubble-button-border-radius` | `px` | Nupu ümarus |
| `--bubble-button-icon-border-radius` | `px` | Nupu ikoonikonteineri ümarus |
| `--bubble-button-icon-background-color` | `color` | Nupu ikoonikonteineri taustavärv |
| `--bubble-light-white-color` | `color` | Asenda valgustite nuppude/liugurite vaikimisi valge värv |
| `--bubble-light-color` | `color` | Asenda valgustite nuppude/liugurite värv (ka RGB valgustitel) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Nupu varju efekt |

</details>

Need valikud on saadaval ainult siis, kui `button_type` on määratud väärtusele `slider`.

<details>

<summary><b>Liuguri valikud (YAML + kirjeldused)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Liuguri minimaalne väärtus. Kohandatud liuguritele.                                                    |
| `max_value`             | number  | Optional                        | Liuguri maksimaalne väärtus. Kohandatud liuguritele.                                                    |
| `step`                  | number  | Optional                        | Liuguri sammu väärtus.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Luba varasem liuguri käitumine, kus liuguri aktiveerimiseks puudutad, mitte ei hoia.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Uuenda väärtust lähtuvalt algsest väärtusest, mitte puudutuse algpunktist.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Muuda liugur ainult loetavaks. Lülitub automaatselt sisse mõnede olemite, nt andurite puhul.                                                    |
| `slider_live_update`    | boolean | Optional (`false` default)      | Olemi olekut uuendatakse liugutamise ajal. **See funktsioon ei sobi kõikidele olemitele.**        |
| `slider_fill_orientation` | string | Optional | `left` (default), `right`, `top`, `bottom` | Muuda liuguri täitesuunda |
| `slider_value_position` | string | Optional | `right` (default), `left`, `center`, `hidden` | Väärtuse kuva asukoht |
| `invert_slider_value` | boolean | Optional (`false` default) | Pööra liuguri suund vastupidiseks (100% täitus võrdub miinimumiga). Ei ole saadaval värviliuguritele. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Ainult valgustitele.** Vali liuguri režiim |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Ainult katetele.** Vali liuguri režiim (asend või kalle) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Ainult valgustitele (Hue režiim).** Sunni küllastus Hue reguleerimisel |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Ainult valgustitele (Hue režiim).** Sunnitud küllastuse väärtus (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Ainult valgustitele (Brightness režiim).** Kasuta valgusti värvi asemel teema aktsendivärvi |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Ainult valgustitele.** Lubab liuguril jõuda 0%-ni, mis lülitab valgusti välja. Ei ole saadaval koos `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Ainult valgustitele.** Luba sujuv heleduse üleminek toetatud valgustitele.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Ainult valgustitele.** Ülemineku aeg millisekundites. Nõuab `light_transition: true`.            |

</details>

#### Näited

<details>

<summary>Liuguri nupp, mis saab juhtida valgusti heledust</summary>

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

<summary>Nupp rohkemate valikutega</summary>

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

## Meediumipleier

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

See kaart võimaldab juhtida meediumipleieri olemit.

### Meediumipleieri valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Juhitav meediumipleier |
| `name` | string | Optional | Any string | Meediumipleieri nimi, kui pole määratud, kuvatakse olemi nimi |
| `icon` | string | Optional | Any `mdi:` icon | Meediumipleieri ikoon, kui pole määratud, kuvatakse olemi ikoon või `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Anna ikoonile eelistus `entity-picture` asemel |
| `show_state` | boolean | Optional | `true` or `false` (default) | Näita või peida oma `entity` olek |
| `show_name` | boolean | Optional | `true` (default) or `false` | Näita või peida nimi |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Näita või peida ikoon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase muutumise aega |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase uuendamise aega |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` atribuuti nime all |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Näidatav atribuut (nt `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Luba teksti kerimine, kui sisu ületab konteineri suuruse |
| `min_volume` | number | Optional | Any number | Helitugevuse liuguri minimaalne väärtus. |
| `max_volume` | number | Optional | Any number | Helitugevuse liuguri maksimaalne väärtus. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Kasuta hägustatud meediumikaant kaardi taustana. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Võimaldab muuta nupu klõpsu vaikimisi toiminguid. |
| `tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni klõpsu toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |
| `double_tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni topeltklõpsu toimingu tüüp, kui pole määratud, kasutatakse `none`. |
| `hold_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni pika vajutuse toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Liiguta kaane toimingunupud alla (fikseeritud) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Muuda alumised toimingunupud täislaiuseks (vaikimisi: `true`, kui asukoht on `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Alumiste toimingunuppude joondus, kui need pole täislaiuses |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiililine paigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Optional | Any number | Ridade arv (kõrgus) (nt `2`) |
| `sub_button` | object | Optional | See [alamnupud](#alamnupud) | Lisa kohandatud nupud paremale kinnitatuna |
| `hide` | object | Optional | See below | Peida nuppe kaardilt |

#### Peitmise valikud

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Peida esitamise/pausi nupp |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Peida helitugevuse nupp |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Peida eelmise loo nupp |
| `next_button` | boolean | Optional | `true` or `false` (default) | Peida järgmise loo nupp |
| `power_button` | boolean | Optional | `true` or `false` (default) | Peida toitenupp |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Meediumipleieri peamine taustavärv |
| `--bubble-media-player-border-radius` | `px` | Meediumipleieri ümarus |
| `--bubble-media-player-buttons-border-radius` | `px` | Meediumipleieri nuppude ümarus |
| `--bubble-media-player-slider-background-color` | `color` | Helitugevuse liuguri taustavärv |
| `--bubble-media-player-icon-border-radius` | `px` | Meediumipleieri ikoonikonteineri ümarus |
| `--bubble-media-player-icon-background-color` | `color` | Meediumipleieri ikoonikonteineri taustavärv |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Meediumipleieri varju efekt |

</details>


#### Näited

<details>

<summary>Meediumipleier kõikide valikutega</summary>

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

## Kate

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

See kaart võimaldab juhtida `cover` olemeid.

### Katte valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Juhitav kate |
| `name` | string | Optional | Any string | Katte nimi, kui pole määratud, kuvatakse olemi nimi |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Anna ikoonile eelistus `entity-picture` asemel |
| `show_state` | boolean | Optional | `true` or `false` (default) | Näita või peida oma `entity` olek |
| `show_name` | boolean | Optional | `true` (default) or `false` | Näita või peida nimi |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Näita või peida ikoon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase muutumise aega |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase uuendamise aega |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` atribuuti nime all |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Näidatav atribuut (nt `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Luba teksti kerimine, kui sisu ületab konteineri suuruse |
| `icon_open` | string | Optional | Any `mdi:` icon | Avatud katte ikoon, kui pole määratud, kuvatakse vaikimisi avatud katte ikoon |
| `icon_close` | string | Optional | Any `mdi:` icon | Suletud katte ikoon, kui pole määratud, kuvatakse vaikimisi suletud katte ikoon |
| `icon_up` | string | Optional | Any `mdi:` icon | Katte avamise nupu ikoon, kui pole määratud, kuvatakse vaikimisi avatud katte ikoon |
| `icon_down` | string | Optional | Any `mdi:` icon | Katte sulgemise nupu ikoon, kui pole määratud, kuvatakse vaikimisi suletud katte ikoon |
| `open_service` | string | Optional | Any service or script | Katte avamise teenus, vaikimisi `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Katte peatamise teenus, vaikimisi `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Katte sulgemise teenus, vaikimisi `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Kalde juhtnuppude asukoht (kuvatakse ainult siis, kui kate toetab kallet) |
| `open_tilt_service` | string | Optional | Any service or script | Kalde avamise teenus, vaikimisi `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Kalde sulgemise teenus, vaikimisi `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Võimaldab muuta nupu klõpsu vaikimisi toiminguid. |
| `tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni klõpsu toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |
| `double_tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni topeltklõpsu toimingu tüüp, kui pole määratud, kasutatakse `none`. |
| `hold_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni pika vajutuse toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Liiguta juhtnupud alla (fikseeritud) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Muuda alumised juhtnupud täislaiuseks (vaikimisi: `true`, kui asukoht on `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Alumiste juhtnuppude joondus, kui need pole täislaiuses |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiililine paigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Optional | Any number | Ridade arv (kõrgus) (nt `2`) |
| `sub_button` | object | Optional | See [alamnupud](#alamnupud) | Lisa kohandatud nupud paremale kinnitatuna |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Katte kaardi toetatud elementide peamine taustavärv |
| `--bubble-cover-border-radius` | `px` | Katte kaardi ümarus |
| `--bubble-cover-icon-border-radius` | `px` | Katte kaardi ikoonikonteineri ümarus |
| `--bubble-cover-icon-background-color` | `color` | Katte kaardi ikoonikonteineri taustavärv |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Katte kaardi varju efekt |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Katte kaardi nuppude varju efekt |

</details>


#### Näide

<details>

<summary>Kaart, mis juhib rulookardinat</summary>

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

## Valik

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

See kaart võimaldab lisada rippmenüü `input_select` / `select` olemitele. See kaart toetab ka alamnuppe ja kõiki Bubble Card'i ühiseid funktsioone.

> [!TIP]
> Kui soovid, saad kasutada ka valiku alamnuppe. See funktsioon on saadaval kõigis kaartides, mis toetavad alamnuppe.

### Valiku valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Juhitav olem |
| `name` | string | Optional | Any string | Valiku nimi, kui pole määratud, kuvatakse olemi nimi |
| `icon` | string | Optional | Any `mdi:` icon | Valiku ikoon, kui pole määratud, kuvatakse olemi ikoon või `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Anna ikoonile eelistus `entity-picture` asemel |
| `show_state` | boolean | Optional | `true` or `false` (default) | Näita või peida oma `entity` olek |
| `show_name` | boolean | Optional | `true` (default) or `false` | Näita või peida nimi |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Näita või peida ikoon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase muutumise aega |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` viimase uuendamise aega |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Näita oma `entity` atribuuti nime all |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Näidatav atribuut (nt `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Luba teksti kerimine, kui sisu ületab konteineri suuruse |
| `tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni klõpsu toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |
| `double_tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni topeltklõpsu toimingu tüüp, kui pole määratud, kasutatakse `none`. |
| `hold_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni pika vajutuse toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiililine paigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Optional | Any number | Ridade arv (kõrgus) (nt `2`) |
| `sub_button` | object | Optional | See [alamnupud](#alamnupud) | Lisa kohandatud nupud paremale kinnitatuna |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Valiku kaardi toetatud elementide peamine taustavärv |
| `--bubble-select-background-color` | `color` | Valiku kaardi taustavärv |
| `--bubble-select-list-border-radius` | `px` | Kaardi rippmenüü ümarus |
| `--bubble-select-list-item-accent-color` | `color` | Valitud elemendi aktsendivärv |
| `--bubble-select-list-background-color` | `color` | Kaardi rippmenüü taustavärv |
| `--bubble-select-list-width` | `px` | Kaardi rippmenüü laius |
| `--bubble-select-arrow-background-color` | `color` | Rippmenüü noole taustavärv |
| `--bubble-select-button-border-radius` | `px` | Valiku nupu ümarus |
| `--bubble-select-border-radius` | `px` | Valiku kaardi ümarus |
| `--bubble-select-icon-border-radius` | `px` | Valiku kaardi ikoonikonteineri ümarus |
| `--bubble-select-icon-background-color` | `color` | Valiku kaardi ikoonikonteineri taustavärv |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Valiku kaardi varju efekt |

</details>


#### Näited

<details>

<summary>Valiku kaart stseenide loendiga</summary>

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

## Kliimaseade

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

See kaart võimaldab juhtida `climate` olemeid.

> [!TIP]
> Režiimivaliku menüü on [alamnupp](#alamnupud), mis lisatakse automaatselt kaardi loomisel. Seda saab hiljem soovi järgi muuta või eemaldada.

### Kliimaseadme valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Juhitav olem (nt `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Kaardi kohandatud nimi. Kui pole määratud, kuvatakse olemi nimi.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Kaardi kohandatud ikoon. Kui pole määratud, kasutatakse olemi ikooni või `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Annab ikoonile eelistuse `entity-picture` ees.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Näita või peida `entity` praegune olek.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Näita või peida olemi nimi.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Näita või peida ikoon.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Peida madala sihttemperatuuri juhtelement, kui `entity` seda toetab.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Peida kõrge sihttemperatuuri juhtelement, kui `entity` seda toetab.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Rakenda püsiv taustavärv, kui kliimaseadme olem on SEES.                                                              |
| `step` | number | Optional | Any number | Temperatuuri samm. |
| `min_temp` | number | Optional | Any number | Miinimumtemperatuur. |
| `max_temp` | number | Optional | Any number | Maksimumtemperatuur. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Võimaldab muuta nupu klõpsu vaikimisi toiminguid. |
| `tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni klõpsu toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |
| `double_tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni topeltklõpsu toimingu tüüp, kui pole määratud, kasutatakse `none`. |
| `hold_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra ikooni pika vajutuse toimingu tüüp, kui pole määratud, kasutatakse `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Liiguta kliimaseadme toimingunupud alla (fikseeritud) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Muuda alumised toimingunupud täislaiuseks (vaikimisi: `true`, kui asukoht on `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Alumiste toimingunuppude joondus, kui need pole täislaiuses |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiililine paigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Optional | Any number | Ridade arv (kõrgus) (nt `2`) |
| `sub_button`            | object  | Optional                            | See [alamnupud](#alamnupud)                | Lisab kohandatud nupud paremale kinnitatuna. Kasulik kliimaseadme režiimi valikumenüü jaoks.                                  |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Kliimaseadme kaardi toetatud elementide peamine taustavärv |
| `--bubble-climate-border-radius` | `px` | Kliimaseadme kaardi toetatud elementide ümarus |
| `--bubble-climate-button-background-color` | `color` | Kliimaseadme kaardi nuppude taustavärv |
| `--bubble-climate-icon-border-radius` | `px` | Kliimaseadme kaardi ikoonikonteineri ümarus |
| `--bubble-state-climate-fan-only-color` | `color` | Ülekattevärv fan-only oleku jaoks |
| `--bubble-state-climate-dry-color` | `color` | Ülekattevärv dry oleku jaoks |
| `--bubble-state-climate-cool-color` | `color` | Ülekattevärv cool oleku jaoks |
| `--bubble-state-climate-heat-color` | `color` | Ülekattevärv heat oleku jaoks |
| `--bubble-state-climate-auto-color` | `color` | Ülekattevärv auto oleku jaoks |
| `--bubble-state-climate-heat-cool-color` | `color` | Ülekattevärv heat-cool oleku jaoks |
| `--bubble-climate-accent-color` | `color` | Kliimaseadme kaardi aktsendivärv |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Kliimaseadme konteineri varju efekt. |

</details>


#### Näited

<details>

<summary>Kliimaseadme kaart HVAC režiimide rippmenüüga</summary>

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

See kaart võimaldab kuvada kalendriolemeid. Selle sisu on keritav, nii et eelseisvaid sündmusi on lihtne sirvida.

### Kalendri valikud

<details>

<summary><b>Valikud (YAML + kirjeldused)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Kalendripäevade arv, mille kohta sündmusi otsitakse, praegusest hetkest kuni N-nda päeva lõpuni (vaikimisi: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Juhitav olem (nt `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Kuvatav kalendriolem                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Kalendri sildi kohandatud värv. Kui pole määratud, valitakse värv automaatselt |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Kalendripäevade arv, mille kohta sündmusi otsitakse, praegusest hetkest kuni N-nda päeva lõpuni (vaikimisi: 7) |
| `limit`             | number  | Optional     | A number                                        | Kaardil kuvatavate sündmuste arv                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Näita või peida sündmuste lõpuaeg                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Näita või peida sündmuse edenemisriba                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Näita või peida sündmused, mis on parajasti käimas                                                 |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Luba teksti kerimine, kui sisu ületab konteineri suuruse |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Võimaldab lisada sündmuse klõpsule toiminguid. |
| `tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra päeva klõpsu toimingu tüüp, kui pole määratud, kasutatakse `none`. |
| `double_tap_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra päeva topeltklõpsu toimingu tüüp, kui pole määratud, kasutatakse `none`. |
| `hold_action` | object | Optional | See [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra päeva pika vajutuse toimingu tüüp, kui pole määratud, kasutatakse `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiililine paigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Optional | Any number | Ridade arv (kõrgus) (nt `2`) |
| `sub_button` | object | Optional | See [alamnupud](#alamnupud) | Lisa kohandatud nupud paremale kinnitatuna |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Kalendri kaardi toetatud elementide peamine taustavärv  |
| `--bubble-calendar-border-radius`         | `px`           | Kalendri kaardi toetatud elementide ümarus |
| `--bubble-calendar-height`                | `px`           | Kalendri kaardi kõrgus                                        |

</details>

#### Näited

<details>

<summary>Kalendri kaart piiratud arvu sündmustega</summary>

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

<summary>Kalendri kaart lõpuaja ja edenemisribaga</summary>

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


## Eraldaja

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

See kaart on lihtne eraldaja, mis jagab hüpikakna kategooriateks ehk sektsioonideks, näiteks valgustus, seadmed, kardinad, seaded, automatiseeringud...

### Eraldaja valikud

<details>

<summary><b>Valikud (YAML ja kirjeldused)</b></summary>

| Nimi | Tüüp | Nõue | Toetatud valikud | Kirjeldus |
| --- | --- | --- | --- | --- |
| `name` | string | Valikuline, kuid soovitatav | Suvaline string | Eraldaja nimi |
| `icon` | string | Valikuline, kuid soovitatav | Suvaline `mdi:` ikoon | Eraldaja ikoon |
| `card_layout` | string | Valikuline | `normal` (vaikimisi, kui ei kasutata sektsioonivaadet), `large` (vaikimisi sektsioonivaates), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiilipaigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Valikuline | Suvaline arv | Ridade arv (kõrgus) (nt `2`) |
| `sub_button` | object | Valikuline | Vaata [alamnupud](#alamnupud) | Lisa kohandatud nupud paremale kinnitatuna |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Muutuja | Oodatav väärtus | Kirjeldus |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Eraldusjoone taustavärv |

</details>

#### Näide

<details>

<summary>Eraldaja/vahekord "Kardinad" sektsiooni jaoks</summary>

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

## Tühi veerg

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

See kaart on mõeldud tühja veeru täitmiseks. See on kasulik, kui hüpikaknas on `horizontal-stack`, milles on ainult üks kaart. Vaata sellel ekraanipildil paremat alanurka, et seda (mitte) näha.

### Tühja veeru valikud

Sellel kaardil pole valikuid ja see ei toeta [stiilimist](#stiilimine), kuid see toetab HA sektsioonide paigutusvalikuid.

#### Näide

<details>

<summary>Tühi veerg horisontaalses virnas</summary>

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

## Ainult alamnupud

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

See kaart on mõeldud ainult alamnuppude jaoks. See sobib suurepäraselt menüüdeks, kiirtoiminguteks, infomärgisteks või lehe alaosas asuvaks fikseeritud jaluseks.

> [!IMPORTANT]  
> See kaart kasutab uut alamnuppude skeemi. Kasuta oma nuppude määratlemiseks `sub_button.bottom`. Sektsiooni `sub_button.main` eiratakse.

### Ainult alamnuppude valikud

<details>

<summary><b>Valikud (YAML ja kirjeldused)</b></summary>

| Nimi | Tüüp | Nõue | Toetatud valikud | Kirjeldus |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Kohustuslik** | Vaata [alamnupud](#alamnupud) | Määra oma alamnupud, kasutades `bottom` sektsiooni |
| `hide_main_background` | boolean | Valikuline | `true` või `false` (vaikimisi) | Eemalda kaardi taust |
| `footer_mode` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kinnita kaart lehe alaossa |
| `footer_full_width` | boolean | Valikuline | `true` või `false` (vaikimisi) | Muuda jalus täislaiuseks (100%) |
| `footer_width` | number | Valikuline | Suvaline arv | Jaluse laius pikslites, kui `footer_full_width` on `false` |
| `footer_bottom_offset` | number | Valikuline | Suvaline arv | Kaugus lehe alaservast pikslites (vaikimisi: `16`) |
| `card_layout` | string | Valikuline | `normal` (vaikimisi, kui ei kasutata sektsioonivaadet), `large` (vaikimisi sektsioonivaates), `large-2-rows`, `large-sub-buttons-grid` | Kaardi stiilipaigutus, vaata [kaardi paigutused](#kaardi-paigutused) |
| `rows` | number | Valikuline | Suvaline arv | Ridade arv (kõrgus) (nt `2`) |

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Muutuja | Oodatav väärtus | Kirjeldus |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Jaluse laius, kui `footer_full_width` on `false` |
| `--bubble-footer-bottom` | `px` | Jaluse kaugus alaservast |
| `--bubble-footer-box-shadow` | vaata [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Jaluse konteineri varjuefekt |

</details>

#### Näited

<details>

<summary>Märgised (nagu ekraanipildil)</summary>

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

<summary>Fikseeritud jaluse menüü</summary>

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

## Alamnupud

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Igas kaardis, mis seda valikut toetab, saab lisada alamnuppe, et kaarte veelgi rohkem kohandada. Näiteks saad luua nupu, mis juhib tolmuimejarobotit, ilmakaarti või peaaegu kõike, mis pähe tuleb. Need alamnupud toetavad puudutustoiminguid ja enamikku nupuvalikutest.

Alamnupud toetavad nüüd kolme tüüpi: **Vaikimisi (nupp)**, **Slaider** ja **Rippmenüü / valik**. Sama kaardi sees saab tüüpe kombineerida, alamnuppe paigutada üles või alla ning need korraldada gruppideks, et saavutada keerukamaid paigutusi.

#### Alamnuppude paigutus ja grupid

<details>

<summary><b>Alamnuppude struktuur (main / bottom + grupid)</b></summary>

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

**Märkused:**
- `main` ja `bottom` on kaks sõltumatut sektsiooni. Alumised alamnupud on kinnitatud kaardi alaossa.
- `main_layout` ja `bottom_layout` aktsepteerivad väärtust `inline` (vaikimisi) või `rows`, et paigutada grupid vertikaalselt üksteise peale.
- Grupid on objektid, millel on `group` massiiv ja valikuline `buttons_layout` (`inline` või `column`).
- `justify_content` on saadaval **ainult alumiste gruppide** jaoks (`start`, `center`, `end`, `fill`).
- Kui alumised alamnupud on olemas, lülitub kaardi paigutus automaatselt `large` peale, kui pole otseselt määratud teist paigutust.
- Vanemat tüüpi `sub_button` massiive toetatakse endiselt ja neid käsitletakse kui `main` sektsiooni.

</details>

### Alamnuppude valikud

<details>

<summary><b>Valikud (YAML ja kirjeldus)</b></summary>

| Nimi | Tüüp | Nõue | Toetatud valikud | Kirjeldus |
| --- | --- | --- | --- | --- |
| `entity` | string | Valikuline | Suvaline olem | Juhitav olem |
| `name` | string | Valikuline | Suvaline string | Alamnupu nimi, kui pole määratud, kuvatakse olemi nimi |
| `icon` | string | Valikuline | Suvaline `mdi:` ikoon | Alamnupu ikoon, kui pole määratud, kuvatakse olemi ikoon või olemi pilt |
| `force_icon` | boolean | Valikuline | `true` või `false` (vaikimisi) | Sunni ikoon kuvamisele isegi siis, kui olemi pilt on saadaval |
| `sub_button_type` | string | Valikuline | `default`, `slider` või `select` | Vali alamnupu tüüp |
| `show_background` | boolean | Valikuline | `true` (vaikimisi) või `false` | Kuva alamnupu taust, mis muudab värvi vastavalt olemi olekule |
| `state_background` | boolean | Valikuline | `true` (vaikimisi) või `false` | Kasuta oleku värvi, kui olem on olekus `on` |
| `light_background` | boolean | Valikuline | `true` (vaikimisi) või `false` | Kasuta taustal valguse värvi, kui see on saadaval |
| `show_state` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kuva või peida `entity` olek |
| `show_name` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kuva või peida nimi |
| `show_icon` | boolean | Valikuline | `true` (vaikimisi) või `false` | Kuva või peida ikoon |
| `show_last_changed` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kuva `entity` viimase muutumise aeg |
| `show_last_updated` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kuva `entity` viimase uuendamise aeg |
| `show_attribute` | boolean | Valikuline | `true` või `false` (vaikimisi) | Kuva `entity` atribuut selle `name` all |
| `attribute` | string | Valikuline (kohustuslik, kui `show_attribute` on määratud väärtusega `true`) | Atribuut sinu `entity` olemist | Kuvatav atribuut (nt `brightness`) |
| `select_attribute` | string | Valikuline | Atribuutide loend sinu `entity` olemist (vaata toetatud valikuid eespool) | See atribuutide loend avab klõpsamisel rippmenüü (nt `effect_list`) |
| `show_arrow` | boolean | Valikuline | `true` (vaikimisi) või `false` | Kuva või peida valikualamnuppude rippmenüü nool |
| `scrolling_effect` | boolean | Valikuline | `true` (vaikimisi) või `false` | Luba teksti kerimine, kui sisu ületab konteineri suurust |
| `tap_action` | object | Valikuline | Vaata [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra toimingu tüüp alamnupu klõpsamisel, kui pole määratud, kasutatakse `more-info` |
| `double_tap_action` | object | Valikuline | Vaata [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra toimingu tüüp alamnupu topeltklõpsamisel, kui pole määratud, kasutatakse `none` |
| `hold_action` | object | Valikuline | Vaata [toimingud](#puudutuse-topeltpuudutuse-ja-pika-vajutuse-toimingud) | Määra toimingu tüüp alamnupu hoidmisel, kui pole määratud, kasutatakse `more-info` |
| `fill_width` | boolean | Valikuline | `true` või `false` | Täida saadaolev laius (vaikimisi: `false` main jaoks, `true` bottom jaoks) |
| `width` | number või string | Valikuline | Suvaline arv või CSS pikkusühik | Kohandatud laius (`px` main sektsiooni jaoks, `%` bottom sektsiooni jaoks vaikimisi) |
| `custom_height` | number | Valikuline | Suvaline arv | Kohandatud kõrgus pikslites |
| `content_layout` | string | Valikuline | `icon-left` (vaikimisi), `icon-top`, `icon-bottom`, `icon-right` | Ikooni paigutus alamnupu sees |
| `always_visible` | boolean | Valikuline | `true` või `false` (vaikimisi) | **Ainult slaideri jaoks.** Näita slaiderit alati, selle asemel et see avada puudutusel |
| `show_button_info` | boolean | Valikuline | `true` või `false` (vaikimisi) | **Ainult slaideri jaoks.** Kuva ikoon/nimi/olek, kui `always_visible` on lubatud |
| `visibility` | object või list | Valikuline | Vaata [tingimused](https://www.home-assistant.io/docs/scripts/conditions/) | Kuva või peida alamnupp tingimuste alusel |
| `hide_when_parent_unavailable` | boolean | Valikuline | `true` või `false` (vaikimisi) | Peida alamnupp, kui vanemkaardi olem pole saadaval |

</details>

<details>

<summary><b>Slaideri alamnupu valikud (samad, mis nupu slaideritel)</b></summary>

<br>

Slaideri alamnupud toetavad samu slaideri valikuid, mis nupu slaiderid, sealhulgas:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS muutujad (vaata <a href="#stiilimine">Stiilimine</a>)</b></summary>

| Muutuja | Oodatav väärtus | Kirjeldus |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Alamnuppude joonte raadius |
| `--bubble-sub-button-background-color` | `color` | Alamnuppude taustavärv |
| `--bubble-sub-slider-border-radius` | `px` | Slaideri alamnuppude joonte raadius |
| `--bubble-sub-slider-background-color` | `color` | Slaideri alamnuppude taustavärv |
| `--bubble-sub-slider-height` | `px` | Alati nähtavate slaideri alamnuppude kõrgus |
| `--bubble-sub-button-dark-text-color` | `color` | Teksti värv heledatel alamnupu taustadel |

</details>

#### Näited

<details>

<summary>Nupp koos mõne alamnupuga tolmuimejaroboti kaardi loomiseks (nagu ekraanipildil)</summary>

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

<summary>Nupu slaider koos alamnupuga, mis näitab heledust, ja alamnupuga, mis lülitab tuld (nagu ekraanipildil)</summary>

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

<summary>Nupp, mis näitab sise- ja välistemperatuuri koos tänase ja homse ilmaga (ekraanipilt lisatud)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Minu õnnetuseks on kogu aeg pilves, aga kõik ikoonid muutuvad vastavalt ilmale.

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

## Kaardi paigutused

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card toetab täielikult Home Assistanti sektsioonivaadet, sa saad muuta kaardi paigutust, et muuta kaart suuremaks, ja ka muuta veergude või ridade arvu, mille kaart sektsioonivaates hõivab (ainult neil kaartidel, mis seda valikut toetavad). Neid paigutusi toetatakse ka kõigis teistes vaadetüüpides.

<details>

<summary><b>Saadaolevad kaardi paigutused</b></summary>

| Paigutus | Kirjeldus |
| --- | --- |
| `normal` | Tavaline paigutus (ei ole optimeeritud sektsioonivaate jaoks) |
| `large` | Suurem paigutus, mis kohandub sektsioonivaates valitud ridade arvuga (optimeeritud sektsioonivaate jaoks) |
| `large-2-rows` | Suurem paigutus kahe alamnuppude reaga, mis kohandub sektsioonivaates valitud ridade arvuga (optimeeritud sektsioonivaate jaoks) |
| `large-sub-buttons-grid` | See paigutus kuvab alamnupud võrgustikuna, `rows` peab olema seatud vähemalt väärtusele `2`.

</details>

#### Näited

<details>

<summary>Suur nupp, mis näitab energiastatistikat kahe alamnuppude reaga (ekraanipilt lisatud)</summary>

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

<summary>Suur nupp mitme reaga koos 12 alamnupuga</summary>

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

## Puudutuse, topeltpuudutuse ja pika vajutuse toimingud

Samuti saad kasutada Home Assistanti vaikimisi puudutustoiminguid, topeltpuudutustoiminguid ja pika vajutuse toiminguid neil kaartidel, mis seda valikut toetavad. Näiteks võimaldab see kuvada "lisainfo" akna nupuikooni all hoides või käivitada teenuse, kui alamnuppu vajutatakse.

**Märkus: kui `double_tap_action` on seadistatud, saab tavaline `tap_action` 200 ms viivituse, et võimaldada
topeltpuudutuse tuvastamist. Kui see viivitus on soovimatu, sea `double_tap_action` väärtuseks `none`, et topeltpuudutuse käsitlemine keelata.**

### Toimingu valikud

<details>

<summary><b>Valikud (YAML ja kirjeldus)</b></summary>

| Nimi | Tüüp | Toetatud valikud | Kirjeldus |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Sooritatav toiming |
| `target` | object |  | Toimib ainult koos `call-service`. Järgib [home-assistant süntaksit](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Suvaline sinu töölaua rada | Rada, kuhu navigeerida (nt `'#kitchen'` hüpikakna avamiseks), kui toiming on defineeritud kui navigate |
| `url_path` | string | Suvaline link | Klõpsamisel avatav URL (nt `https://www.google.com`), kui toiming on `url` |
| `service` | string | Suvaline teenus | Kutsutav teenus (nt `media_player.media_play_pause`), kui `action` on defineeritud kui `call-service` |
| `data` või `service_data` | object | Suvalised teenuse andmed | Kaasatavad teenuse andmed (nt `entity_id: media_player.kitchen`), kui `action` on defineeritud kui `call-service` |
| `confirmation` | object | Vaata [kinnitus](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Kuva kinnituse hüpikaken (mitte Bubble Card oma), mis asendab vaikimisi `confirmation` objekti |

</details>

#### Näide

<details>

<summary>Nupp hüpikakna avamiseks</summary>

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

## Stiilimine

Kõigi kaartide CSS-i saab muuta kohandatud stiilidega **ilma card-mod'i kasutamata** neljal viisil:

- Redaktoris mine kaardi juurde, mida soovid muuta, seejärel liigu _Stiilimise valikud > Kohandatud stiilid ja JS-mallid_ juurde ning lisa oma kohandatud stiilid (vaata allpool olevaid nõuandeid ja näiteid).
- Redaktoris (või [YAML-is](#moodulid)), mine kaardi juurde, mida soovid muuta, seejärel liigu _Moodulid_ juurde ning loo uus moodul (see on saadaval kõigile kaartidele), või mine **Module Store'i**, et paigaldada mõni saadaolev moodul (rohkem infot moodulite kohta leiad [allpool](#moodulid)).
- [Teema](https://www.home-assistant.io/integrations/frontend/#defining-themes) failis, lisades CSS muutujad YAML-i (need on saadaval iga kaardi ülalpool oleva dokumentatsiooni juures). See võimaldab teha globaalseid muudatusi.

  <details>
  
  <summary>Näide</a></summary>
  
  <br>

  Ära kopeeri rida `Bubble:`, see on sinu kasutatava teema nimi. Samuti pead muutujatest eemaldama `--`.

  Pärast muudatusi pead teema värskendamiseks käivitama toimingu [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes).

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
  
- YAML-is lisades `styles: |` ja seejärel oma kohandatud stiilid (vaata allpool olevaid nõuandeid ja näiteid).

> [!TIP]  
> **Et mõista, milliseid stiiliklasse saab muuta**, vaata selle repositooriumi kausta [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards). Igas kaardi kaustas leiad faili nimega `styles.css`. Need failid sisaldavad kõiki rakendatud stiile. See võimaldab palju rohkem kui CSS muutujad, kuid tuleb lisada iga kaardi puhul eraldi.
> 
> Samuti leiad palju [kogukonna näiteid](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) või mõned [Home Assistanti foorumist](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/), kui veidi otsid.
>
> Home Assistanti Bubble teema (nagu ekraanipiltidel) on leitav [siit](https://github.com/Clooos/Bubble).
>
> Peagi tuleb õpetusvideo minu [YouTube'i kanalile](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Pane tähele, et mõnede juba määratletud CSS stiilide puhul võib olla vaja lisada `!important;` (vaata allpool olevaid näiteid).

> [!TIP]  
> Alamnuppe saab sihtida nimepõhiste klasside abil. Näiteks alamnuppu nimega "My sub-button" saab stiilida klassiga `.my-sub-button`. Liuguriga alamnupud pakuvad ka klasse `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` jne.

#### Näited

<details>

<summary>Fondi suuruse muutmine mis tahes Bubble Card'il</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Ühe nupu taustavärvi muutmine horisontaalses nuppude virnas</summary>

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

<summary>Kaardi taustavärvi muutmine</summary>

<br>

See toimib kõigi Bubble Card tüüpidega (välja arvatud hüpikaknad):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

See teeb sama ainult nupukaardis (see toimib ka hüpikakna päises): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Kui soovid värvi muuta, kui see on `on`, vaata allpool olevaid stiilimalle.

</details>

<details>

<summary>Nupuliuguri värvi muutmine</summary>

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

<summary>Eraldaja joone värvi muutmine</summary>

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

<summary>Ikooni värvi muutmine</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Horisontaalse nuppude virna ikooni jaoks.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Ikoonikonteineri taustavärvi muutmine</summary>

<br>

See toimib kõigi Bubble Card tüüpidega (välja arvatud hüpikaknad):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

See teeb sama hüpikakna päise jaoks: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Alamnuppude suuruse muutmine (ideaalne suure paigutuse jaoks)</summary>

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

<summary>Teise alamnupu taustavärvi muutmine</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ikooni suuruse muutmine</summary>

<br>

Peaikooni jaoks.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Alamnuppude ikoonide jaoks.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Ikooni asemel pildi kasutamine alamnupus</summary>

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

Lae see pilt lihtsalt üles Home Assistanti "www" kausta alamkausta "pictures" (või soovitud nimega kausta).

</details>

<details>

<summary>Täpsem näide: alamnuppude horisontaalse rea loomine (koos ekraanipildiga)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Mulle meeldib see väga, kasutan seda oma töölaual päisena.

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

## Mallid

**Bubble Card ei toeta Jinja malle**, kuid kogenud kasutajad saavad lisada JS-mallid otse oma [kohandatud stiilidesse](#stiilimine). See võimaldab näiteks dünaamiliselt muuta ikooni, teksti või elemendi värve, näidata või peita elementi tingimuslikult (nagu alamnuppu) või peaaegu kõike muud, mis põhineb olekul, atribuudil ja muul.

> [!TIP]  
> Rohkem infot JS-mallide kohta [siit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Minu soovitus on **alati vaadata oma brauseri konsooli**, et veenduda, kas kõik töötab korrektselt.

> [!IMPORTANT]  
> **Kõik mallid, mis ei muuda CSS atribuuti, tuleb paigutada lõppu! Näiteks ikooni, teksti või mõne muu elemendi muutmine.**

#### Saadaolevad muutujad ja funktsioonid

<details>

<summary>Muutujad</summary>

<br>

Enamikus kaartides on sul ligipääs järgmistele muutujatele:

- `state` tagastab sinu määratud `entity` oleku.
  
- `entity` tagastab sinu määratud entity, näiteks `switch.test` selles näites.
  
- `icon` võimaldab ikooni muuta nii: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` tagastab sinu esimese alamnupu määratud `entity` oleku, `[0]` on esimese alamnupu olek, `[1]` teine...
  
- `subButtonIcon[0]` võimaldab esimese alamnupu ikooni muuta nii: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` on esimese alamnupu ikoon, `[1]` teine...
  
- `card` tagastab kaardi elemendi DOM-is.
  
- `hass` on täpsem muutuja, mis annab veel rohkem kontrolli, näiteks saad tagastada `light.kitchen` oleku nii `hass.states['light.kitchen'].state` või atribuudi nii `hass.states[entity].attributes.brightness`.

- `this` tagastab palju kasulikku infot sinu seadistuse ja töölaua kohta, kasuta seda ainult siis, kui tead täpselt, mida teed.

</details>

<details>

<summary>Funktsioonid</summary>

<br>

Sul on ligipääs kõigile globaalsetele JS funktsioonidele, kuid samuti:

- `getWeatherIcon` võimaldab tagastada ilmaikooni, mis põhineb olekul, mis annab ilmateate. Näiteks saad teha nii `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, et muuta kolmanda alamnupu ikoon tänaseks ilmaikooniks, `.forecast[1]?.condition` on homse jaoks...

  Selleks pead looma mallisensori. Siin on, mida saad lisada oma `configuration.yaml` faili:
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
- `hass.formatEntityState(state)` võimaldab tõlkida olekut (võib kasutada ka oleku ühiku saamiseks, ilma et peaksid seda käsitsi lisama).
- `hass.formatEntityAttributeValue(state, "attribute")` võimaldab tõlkida atribuuti (võib kasutada ka oleku ühiku saamiseks, ilma et peaksid seda käsitsi lisama).

</details>

#### Näited

Allpool leiad palju näiteid, kuid väga põhjalikke malle leiad ka minu [Patreoni lehelt](https://www.patreon.com/c/Clooos), näiteks üks (minu lemmik), mis võimaldab kuni neli tingimuslikku märgist kaardi ikoonide ümber. See on ka suurepärane viis õppida tundma kõiki Bubble Card kohandatud stiilide ja mallide võimalusi!

<details>
<summary>Näited minu Patreoni lehelt</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistanti sarnaste märgiste lisamine mistahes kaardile</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Vormindatud kuupäeva ja kellaaja näitamine eraldajas ilma entity't kasutamata</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Alamnupu oleku näitamine kahel real</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Valiku alamnupu siltide ja ikoonide kohandamine</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Püsiva meeldetuletuse hüpikakna lisamine, mis kuvatakse ainult vajaduse korral</a>
</p>

<br>

</details>

<details>

<summary>Nupu taustavärvi muutmine punaseks, kui see on <code>off</code>, ja siniseks, kui see on <code>on</code></summary>

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

<summary>Nupu taustavärvi muutmine entity põhjal horisontaalses nuppude virnas</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Alamnupu tingimuslik näitamine/peitmine</summary>

<br>

See näide näitab esimest alamnuppu ainult siis, kui mu tolmuimeja on kinni jäänud.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

See näide näitab alamnuppu, kui aku tase on alla 10%. Kasulik alamnupuga, mis näitab "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ikooni või alamnupu ikooni tingimuslik muutmine</summary>

<br>

See näide muudab nupu ikooni ainult siis, kui tolmuimeja on kinni jäänud.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

See näide muudab esimese alamnupu ikooni ainult siis, kui tolmuimeja on kinni jäänud.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Ikooni või alamnupu ikooni värvi tingimuslik muutmine</summary>

<br>

See näide muudab nupu ikooni värvi selle oleku põhjal.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

See näide muudab alamnupu ikooni värvi selle oleku põhjal. `.bubble-sub-button-1` on esimene alamnupp, asenda `1`, kui soovid muuta mõne teise alamnupu ikooni.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Ventilaatori ikooni tingimuslik animeerimine</summary>

<br>

See näide pöörab nupu ikooni, kui ventilaator on `on`.
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

<summary>Tekstide (näiteks nime või oleku) mallimine</summary>

<br>

See näide muudab nupu nime/oleku tekstiks "It's currently sunny" olenevalt ilmast.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
või alamnuppude puhul:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Kui soovid olekut (`.bubble-state`) mallida, ära lülita sisse `show_state: true`, vaid lülita sisse `show_attribute: true` ilma atribuuti määramata.

</details>

<details>

<summary>Täpsem näide: alamnupu värvi muutmine, kui hüpikaken on avatud</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Täpsem näide: eraldaja nime mallimine sinu keelde tõlgitud oleku põhjal</summary>

<br>

Saad kasutada `hass.formatEntityState(state)`, et tõlkida olekut, ja `hass.formatEntityAttributeValue(state, "attribute")`, et tõlkida atribuuti.

See näide muudab nime ja ikooni ilma põhjal, "Nuageux" tähendab prantsuse keeles "Pilvine".

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

## Moodulid

Moodulid on võimas funktsioon, mis lubab sul salvestada, taaskasutada ja jagada oma kohandatud stiile ja malle kõigi oma Bubble Card kaartide vahel. Selle asemel, et sama koodi mitmesse kaardi kopeerida, saad luua Mooduli ja rakendada seda seal, kus vaja. See muudab töölaua välimuse ja tunnetuse haldamise palju lihtsamaks ja tõhusamaks.

Kuid see funktsioon on palju võimsam kui see: see lubab sul Bubble Card redaktoris ise päris funktsioone lisada, kasutades kõiki tavalisi [Home Assistanti vormi](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) valikuid!  
Objektivalijat on täiustatud, et see näitaks reaalajas muudatusi ja toetaks atribuute korrektselt.

Samuti saad sirvida **Module Store'i**, et leida ja paigaldada [kogukonna loodud mooduleid](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) või jagada oma loominguid!

> [!TIP]
> Mooduli kood töötab täpselt samamoodi nagu kaardi `styles` sektsiooni kood. Kõik samad muutujad ja funktsioonid [Mallide](#mallid) sektsioonist on saadaval.

<br>

### Esmane seadistus

> [!IMPORTANT]
> Alates versioonist v3.1.0 on Bubble Card Tools moodulite soovitatud salvestuslahendus. Vana mallisensori meetod töötab endiselt olemasolevate seadistuste puhul, kuid uute moodulite ja Module Store'i funktsioonide puhul on parim tugi Bubble Card Toolsi kaudu.

Bubble Card Tools integratsioon võimaldab kasutada Mooduli redaktorit ja Module Store'i ning salvestab moodulid eraldi YAML-failidena. Olemasolevad moodulid migreeritakse automaatselt.

Paigaldus- ja seadistussammud on selgitatud siin:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Mooduli redaktor

Pääsed Mooduli redaktorisse iga kaardi seadete alt, **Moodulid** sektsioonist. Redaktoris on kaks peamist vahekaarti:

#### Minu moodulid vahekaart

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

See vahekaart näitab kõiki sinu paigaldatud mooduleid ning lubab sul:

- **Rakendada** olemasolevaid mooduleid praegusele kaardile
- **Luua** uue mooduli nullist
- **Redigeerida** olemasolevaid mooduleid reaalajas eelvaatega
- **Kustutada** moodulid, mida enam ei vaja
- **Otsida** ja **sortida** mooduleid (tähestikuliselt, hiljutised, aktiivsed enne)
- **Määrata globaalse oleku**, et moodul rakenduks automaatselt kõigile kaartidele
- **Importida/eksportida** mooduleid varundamiseks või jagamiseks

#### Module Store vahekaart

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

See vahekaart kuvab [kõiki kogukonna saadaolevaid mooduleid](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) ning lubab sul:

- **Sirvida** kõiki kogukonna loodud mooduleid
- **Otsida** ja filtreerida mooduleid nime, ühilduvuse või märksõnade järgi
- **Paigaldada** mooduleid ühe klõpsuga
- **Uuendada** paigaldatud mooduleid, kui uued versioonid on saadaval

> [!TIP]
> Redaktoris saad lubada toetamata mooduleid, et testida mooduleid, mida ei ole veel märgitud teatud kaarditüübiga ühilduvaks.

<br>

### Kuidas mooduleid kasutada

#### Uue mooduli loomine

<details>

<summary>Klõpsa laiendamiseks</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Mine mis tahes kaardi redaktorisse ja laienda **Moodulid** sektsioon.
2. Klõpsa **Loo uus moodul**.
3. Täida mooduli info.
4. Kirjuta oma CSS ja/või JavaScript mallikood **Koodi** redaktorisse.
5. (Valikuline) Loo kohandatud seadistusliides **Redaktori** sektsioonis (nagu värvivalija ülaloleval ekraanipildil, täielik dokumentatsioon on saadaval [siin](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Klõpsa **Salvesta**.

Sinu moodul on nüüd saadaval kasutamiseks mis tahes sinu kaardil!

<br>

</details>

#### Mooduli rakendamine kaardile

<details>

<summary>Klõpsa laiendamiseks</summary>

<br>

- **Redaktori kaudu:**

  - Mine selle kaardi redaktorisse, millele soovid moodulit rakendada.
  - Laienda **Moodulid** sektsioon.
  - Klõpsa nimekirjast moodulil, mida soovid rakendada.
  - "Rakenda" alt klõpsa "See kaart". Moodul on nüüd aktiivne. Sama kaardi külge saad rakendada mitu moodulit.

- **YAML-i kaudu:**

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

#### Mooduli globaalne rakendamine

<details>

<summary>Klõpsa laiendamiseks</summary>

<br>

Saad seadistada mooduli nii, et see rakenduks automaatselt kõigile Bubble Card kaartidele:

**See ei ole saadaval redaktoriga moodulite puhul, kuna need vajavad toimimiseks konkreetset seadistust.**

- **Redaktori kaudu:**

  - Mooduli redaktoris leia oma moodul **Minu moodulid** vahekaardilt.
  - Lülita sisse **Kõik kaardid** nupp mooduli nime kõrval.
  - Moodul rakendub nüüd automaatselt kõigile kaartidele.
 
- **YAML-i kaudu:**

  Lisa oma mooduli YAML-seadistuses (failis `bubble-modules.yaml`) lihtsalt `is_global: true`.

<br>

</details>

#### Ühe kaardi väljajätmine globaalsest moodulist

<details>

<summary>Klõpsa laiendamiseks</summary>

<br>

Kui sul on globaalne moodul, kuid soovid selle konkreetselt kaardilt välja jätta:

- **Redaktori kaudu:**
  
  - Kaardi **Moodulid** sektsioonis näed globaalseid mooduleid.
  - Klõpsa globaalsel moodulil, lülita "See kaart" välja, et jätta see konkreetsest kaardist välja.

- **YAML-i kaudu:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Sinu mooduli jagamine Module Store'i

<details>

<summary>Klõpsa laiendamiseks</summary>

<br>

Et jagada oma Moodulit Module Store'is, klõpsa Mooduli redaktoris allosas "Ekspordi moodul" juures "Kopeeri GitHubi jaoks" ning kleebi sisu uude aruteludesse kategoorias [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Muuda kirjeldust** (vajadusel), **näidet** (YAML-i kasutajatele) ning ära unusta **lisada vähemalt üks ekraanipilt** Module Store'i jaoks.

**Sinu Moodul saab kohe pärast seda kättesaadavaks** (pärast Store'i värskendust), seega kontrolli topelt, kas kõik on korrektselt kirjutatud ja Moodul töötab ootuspäraselt. Muidugi saad Moodulit pärast jagamist edasi redigeerida/uuendada.

<br>

</details>

#### Versioonihaldus

<details>

<summary>Klõpsa laiendamiseks</summary>

<br>

Module Store kontrollib automaatselt paigaldatud moodulite uuendusi. Kui uuendused on saadaval:

1. Näed uuenduse indikaatorit **Module Store** vahekaardil.
2. Klõpsa **Uuenda** moodulitel, millel on saadaval uuendused.
3. Kinnita uuendus Module Store'is.

<br>

</details>

#### Toetatud kaarditüüpide määramine

<details>

<summary>Klõpsa laiendamiseks</summary>

<br>

Mõned moodulid ei pruugi ühilduda kõigi kaarditüüpidega. Saad määrata, milliseid kaarte moodul toetab.  
Kui soovid, et moodul ühilduks **kõigi kaartidega**, jäta lihtsalt väli `supported` ära (või kasuta redaktoris valikut **Kõik kaardid**).

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

### Näited

<details>
<summary>Lihtne stiilimooduli näide</summary>

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
<summary>Moodul kohandatud seadistusega</summary>

<br>

See moodul on saadaval [siin](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Rohkem näiteid leiad Module Store'ist või [siit](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Abi

Kui midagi ei toimi ootuspäraselt, ava julgelt probleem (issue). 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Kas sul on küsimusi või mõtteid Bubble Card kohta? Soovid jagada oma töölaudu või avastusi? Võid külastada Home Assistanti foorumit, Bubble Card subreddit'it või GitHub Discussions sektsiooni.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Panustamine

Panused on teretulnud! Olgu selleks veaparandused, uued funktsioonid, tõlked või dokumentatsiooni parandused, ava julgelt pull request.

Enne alustamist loe palun [arendaja juhendit](DEVELOPERS.md), mis kirjeldab, kuidas seadistada oma kohalikku keskkonda, projekti ehitada ja oma muudatusi testida.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Anneta

Pühendan suurema osa oma vabast ajast sellele, et see projekt oleks parim, mis ta olla saab. Kui hindad minu tööd, oleks iga annetus suurepärane viis oma toetust näidata 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Aitäh teile kõigile toetuse eest, te kõik olete minu suurim motivatsioon!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
