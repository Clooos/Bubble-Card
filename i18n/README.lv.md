<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Šī lapa ir automātisks tulkojums. Šaubu gadījumā noteicošā ir [oriģinālā angļu dokumentācija](../README.md). Vai kāds teikums izklausās nepareizi? Jebkura palīdzība ir apsveicama, un [šīs lapas labošana](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.lv.md) aizņem tikai minūti: GitHub parūpēsies par fork un pull request. Paldies jau iepriekš! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lasīt citā valodā](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card ir minimālistiska un pielāgojama kartīšu kolekcija Home Assistant, kas piedāvā modernus uznirstošos logus un integrētu Module Store ar vairāk nekā 100 kopienas veidotiem moduļiem.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Satura rādītājs

**[`Instalēšana`](#instalēšana)**  **[`Konfigurācija`](#konfigurācija)**  **[`Entītiju ieteikumi`](#entītiju-ieteikumi)**  **[`Uznirstošais logs`](#uznirstošais-logs)**  **[`Horizontāla pogu josla`](#horizontāla-pogu-josla)**  **[`Poga`](#poga)**  **[`Multivides atskaņotājs`](#multivides-atskaņotājs)**  **[`Aizsegs`](#aizsegs)**  **[`Izvēle`](#izvēle)**  **[`Klimats`](#klimats)**  **[`Kalendārs`](#kalendārs)**  **[`Atdalītājs`](#atdalītājs)**  **[`Tukša kolonna`](#tukša-kolonna)**  **[`Tikai papildpogas`](#tikai-papildpogas)**  **[`Papildpogas`](#papildpogas)**  **[`Kartīšu izkārtojumi`](#kartīšu-izkārtojumi)**  **[`Nosacījumi`](#nosacījumi)**  **[`Darbības`](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības)**  **[`Stils`](#stils)**  **[`Veidnes`](#veidnes)**  **[`Moduļi`](#moduļi)**  **[`Lokalizācija`](#lokalizācija)**  **[`Palīdzība`](#palīdzība)**  **[`Līdzdalība`](#līdzdalība)**  **[`Ziedot`](#ziedot)**

<br>

## Instalēšana

**Zemākā atbalstītā Home Assistant versija:** 2023.9.0

<details>

<summary>Bez HACS</summary>

<br>

1. Lejupielādējiet `bubble-card.zip` no [jaunākā laidiena](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Izarhivējiet to savā `<config>/www` mapē, jums vajadzētu iegūt `bubble-card.js` un tam blakus mapi `translations` (šajā mapē glabājas redaktora vārdnīcas, bez tās redaktors paliek angļu valodā)
3. Savā vadības panelī noklikšķiniet uz ikonas augšējā labajā stūrī, tad uz `Edit dashboard`
4. Vēlreiz noklikšķiniet uz šīs ikonas un tad uz `Manage resources`
5. Noklikšķiniet uz `Add resource`
6. Nokopējiet un ielīmējiet šo: `/local/bubble-card.js?v=1`
7. Noklikšķiniet uz `JavaScript Module`, tad uz `Create`
8. Atgriezieties atpakaļ un atsvaidziniet lapu
9. Tagad jūs varat noklikšķināt uz `Add card` apakšējā labajā stūrī un meklēt `Bubble Card`
10. Pēc katras faila atjaunināšanas jums būs jārediģē `/local/bubble-card.js?v=1` un jāmaina versija uz jebkuru lielāku numuru

Ja tas nedarbojas, vienkārši mēģiniet notīrīt pārlūkprogrammas kešatmiņu.

</details>

<details>

<summary>Ar HACS (ieteicams)</summary>

<br>

Šī metode ļauj jums saņemt atjauninājumus tieši caur Home Assistant Community Store

1. Ja HACS vēl nav instalēts, lejupielādējiet to, sekojot instrukcijām vietnē [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Veiciet HACS sākotnējo konfigurāciju, sekojot instrukcijām vietnē [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Sānjoslā dodieties uz "HACS"
4. Meklējiet "Bubble Card" vai noklikšķiniet uz zilās pogas zemāk
5. Noklikšķiniet uz "Download"
6. Atgriezieties savā vadības panelī un noklikšķiniet uz ikonas augšējā labajā stūrī, tad uz `Edit dashboard`
7. Tagad jūs varat noklikšķināt uz `Add card` apakšējā labajā stūrī un meklēt `Bubble Card`

Ja tas nedarbojas, mēģiniet notīrīt pārlūkprogrammas/lietotnes kešatmiņu (visās savās ierīcēs, ja nepieciešams).

#### Video

Varat arī apskatīt manu YouTube kanālu, kur ir soli pa solim video pamācības.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurācija

Visas opcijas var konfigurēt Home Assistant redaktorā. Bet zemāk esošajā dokumentācijā varat atrast vairāk detaļu un YAML.

<details>

<summary><b>Galvenās opcijas (YAML + apraksts)</b></summary>

| Nosaukums | Tips | Prasība | Atbalstītās opcijas | Apraksts |
| --- | --- | --- | --- | --- |
| `type` | string | **Obligāts** | `custom:bubble-card` | Kartītes tips |
| `card_type` | string | **Obligāts** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` vai `sub-buttons` | Bubble Card tips, skatiet zemāk |
| `styles` | object list | Neobligāts | Jebkuras CSS stila lapas | Ļauj pielāgot jūsu Bubble Card CSS, skatiet [stilu](#stils) |

</details>

<details>

<summary><b>Globālie CSS mainīgie (skatiet <a href="#stils">Stils</a>)</b></summary>

| Mainīgais | Gaidāmā vērtība | Apraksts |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Malu noapaļojums visiem atbalstītajiem elementiem |
| `--bubble-main-background-color` | `color` | Galvenā fona krāsa visiem atbalstītajiem elementiem |
| `--bubble-secondary-background-color` | `color` | Sekundārā fona krāsa visiem atbalstītajiem elementiem |
| `--bubble-accent-color` | `color` | Akcenta krāsa visiem atbalstītajiem elementiem |
| `--bubble-icon-border-radius` | `px` | Ikonas malu noapaļojums visiem atbalstītajiem elementiem |
| `--bubble-icon-background-color` | `color` | Ikonas fona krāsa visiem atbalstītajiem elementiem |
| `--bubble-sub-button-border-radius` | `px` | Malu noapaļojums visām papildpogām |
| `--bubble-sub-button-background-color` | `color` | Fona krāsa visām papildpogām |
| `--bubble-box-shadow` | skatiet [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ēna visiem atbalstītajiem elementiem |
| `--bubble-border` | skatiet [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Robeža visām atbalstītajām kartītēm |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Noskatieties šo [video](https://www.youtube.com/watch?v=0hSQOlBxKKI), lai uzzinātu vairāk par Bubble Card un tā iespējām.** Mans YouTube kanāls ir diezgan jauns un koncentrējas uz pamācībām par Home Assistant un Bubble Card. Nevilcinieties abonēt, lai palīdzētu palielināt mana kanāla redzamību. Paldies jau iepriekš!

<br>

---

<br>

## Entītiju ieteikumi

Kopš Home Assistant 2026.6 entītijas izvēle kartīšu atlasītājā piedāvā dažas gatavas kartītes, un Bubble Card šim sarakstam pievieno savas receptes. Izvēlieties gaismu, un jums tiek piedāvāta kartīte ar spilgtuma slīdni, kā arī krāsas temperatūras, krāsas un piesātinājuma varianti, ja jūsu gaisma tos atbalsta. Izvēlieties aizsegu, un jūs iegūstat tā pozīcijas slīdni, izvēlieties multivides atskaņotāju, un jūs iegūstat arī variantu ar tā avotu sarakstu, izvēlieties putekļsūcēju, un jūs iegūstat tā palaišanas, pauzes un doka pogas. Katrs ieteikums ir parasta Bubble Card konfigurācija, kas parādīta kā dzīvs priekšskatījums, tāpēc varat paņemt tuvāko un turpināt to rediģēt kā parasti.

Piedāvātais ir atkarīgs no tā, ko jūsu entītija patiesībā spēj: gaisma bez spilgtuma kanāla saņem slēdzi slīdņa vietā, aizsegs, kas nevar sasvērties, nesaņem sasvēršanas variantu, klimata entītija saņem savus iepriekšiestatītos režīmus tikai tad, ja tādi tai ir. Zem Bubble Card ieteikumiem, kad tie ir piemēroti, seko klasiskie ieraksti: šim entītijas veidam paredzētā kartīte, vienkārša poga un slīdnis.

> [!TIP]
> Moduļi var pievienot šim sarakstam savus ieteikumus, skatiet [moduļi](#moduļi).

<br>

---

<br>

## Uznirstošais logs

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Šī kartīte ļauj jums izveidot uznirstošu logu ar jebkādu saturu. Katrs uznirstošais logs ir **noklusējumā paslēpts** un to var atvērt, mērķējot uz tā saiti (piemēram, `'#pop-up-name'`), ar jebkuru kartīti, kas atbalsta `navigate` [darbību](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības), vai ar iekļauto [horizontālo pogu joslu](#horizontāla-pogu-josla).

> [!TIP]
> ### Uznirstošā loga izraisītājs 
> Šī funkcija ļauj atvērt uznirstošu logu, balstoties uz jebkuras entītijas stāvokli, piemēram, jūs varat atvērt "Drošības" uznirstošo logu ar kameru, kad pie jūsu mājas priekšas ir cilvēks. Varat arī izveidot pārslēdzēja palīgu (input_boolean) un izraisīt tā atvēršanu/aizvēršanu automatizācijā.
> <details>
> <summary>Uznirstošā loga atvēršana, kad <code>binary_sensor</code> ir <code>on</code></summary>
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
> ### Dažādi veidi, kā aizvērt uznirstošo logu 
> Ir daudz veidu, kā aizvērt uznirstošo logu. Piemēram, varat pavilkt no uznirstošā loga galvenes uz leju, veicot garu vilkšanu uznirstošā loga iekšpusē uz leju, nospiežot Escape datorā, noņemot hash no URL vai vienkārši nospiežot aizvēršanas pogu.
>


### Uznirstošā loga opcijas

<details>

<summary><b>Opcijas (YAML + apraksti)</b></summary>

| Nosaukums | Tips | Prasība | Atbalstītās opcijas | Apraksts |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obligāts** | Jebkurš unikāls hash (piemēram, `'#kitchen'`) ar ' ' | Šādi jūs atvērsiet savu uznirstošo logu |
| `popup_style` | string | Neobligāts | `bubble` (noklusējums) vai `classic` | Nosaka uznirstošā loga vizuālo stilu |
| `popup_mode` | string | Neobligāts | `default` (noklusējums), `fit-content`, `centered` vai `adaptive-dialog` | Nosaka uznirstošā loga izkārtojuma režīmu |
| `with_bottom_offset` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Izmanto tikai kopā ar `popup_mode: fit-content` vai `adaptive-dialog`. Pielieto apakšējo nobīdi mobilajā ierīcē, noderīgi, ja jūsu vadības panelim ir kājene. |
| `full_width_on_mobile` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Izmanto tikai kopā ar `popup_mode: centered`. Izplata uznirstošo logu pilnā ekrāna platumā mobilajā ierīcē, noderīgi mazākiem displejiem. |
| `performance_mode` | string | Neobligāts | `default` (noklusējums) vai `performance` | Optimizē uznirstošā loga atvēršanas animāciju. `performance` nedaudz aizkavē satura renderēšanu un fona izpludinājumu, kā arī atspējo fona aizmugures izpludinājumu, ja tas ir iestatīts. |
| `auto_close` | string | Neobligāts | Noildze milisekundēs (piemēram, `10000` 10 sekundēm) | Automātiski aizvērt uznirstošo logu pēc noildzes |
| `close_on_click` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Automātiski aizvērt uznirstošo logu pēc jebkuras mijiedarbības |
| `close_by_clicking_outside` | boolean | Neobligāts | `true` (noklusējums) vai `false` | Aizvērt uznirstošo logu, uzklikšķinot ārpus tā |
| `width_desktop` | string | Neobligāts | Jebkura CSS vērtība | Platums datorā (`100%` pēc noklusējuma mobilajā ierīcē) |
| `margin` | string | Neobligāts | Jebkura CSS vērtība | Izmantojiet to **tikai** tad, ja jūsu uznirstošais logs nav labi centrēts mobilajā ierīcē (piemēram, `13px`) |
| `margin_top_mobile` | string | Neobligāts | Jebkura CSS vērtība | Augšējā mala mobilajā ierīcē (piemēram, `-56px`, ja jūsu galvene ir paslēpta) |
| `margin_top_desktop` | string | Neobligāts | Jebkura CSS vērtība | Augšējā mala datorā (piemēram, `50vh` uznirstošajam logam ar pusi izmēra vai `calc(100vh - 400px)` fiksētam `400px` augstumam) |
| `bg_color` | string | Neobligāts | Jebkura hex, rgb vai rgba vērtība | Jūsu uznirstošā loga fona krāsa (piemēram, `#ffffff` baltam fonam) |
| `bg_opacity` | string | Neobligāts | Jebkura vērtība no `0` līdz `100` | Jūsu uznirstošā loga fona necaurspīdīgums (piemēram, `100` bez caurspīdīguma) |
| `bg_blur` | string | Neobligāts | Jebkura vērtība no `0` līdz `100` | Jūsu uznirstošā loga fona izpludinājuma efekts, **tas darbojas tikai tad, ja `bg_opacity` nav iestatīts uz `100`** (piemēram, `0` bez izpludinājuma)|
| `shadow_opacity` | string | Neobligāts | Jebkura vērtība no `0` līdz `100` | Jūsu uznirstošā loga ēnas necaurspīdīgums (piemēram, `0`, lai to paslēptu) |
| `hide_backdrop` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Iestatiet to uz true jūsu galvenā vadības paneļa pirmajam uznirstošajam logam, lai atspējotu aizmugures fonu visiem uznirstošajiem logiem. |
| `background_update` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Atjaunināt uznirstošā loga saturu fonā (nav ieteicams) |
| `trigger` | object vai list | Neobligāts | Skatiet [nosacījumus](#nosacījumi) | Atvērt šo uznirstošo logu, kad nosacījumi ir izpildīti |
| `trigger_entity` | string | Neobligāts | Jebkura entītija | Atvērt šo uznirstošo logu, balstoties uz jebkuras entītijas stāvokli, vienkāršā `trigger` forma |
| `trigger_state` | string | Neobligāts (**Obligāts**, ja ir definēts `trigger_entity`) | Jebkurš entītijas stāvoklis | Entītijas stāvoklis, lai atvērtu uznirstošo logu |
| `trigger_close` | boolean | Neobligāts | `true` (noklusējums) vai `false` | Aizvērt uznirstošo logu, kad nosacījumi vairs nav izpildīti. Turpretī noklusējums ir `false`, ja izmantojat veco `trigger_entity` un `trigger_state` pāri |
| `open_action` | object | Neobligāts | Skatiet [darbības](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Izraisīt darbību, kad uznirstošais logs atveras |
| `close_action` | object | Neobligāts | Skatiet [darbības](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Izraisīt darbību, kad uznirstošais logs aizveras |
| `show_header` | boolean | Neobligāts | `true` (noklusējums) vai `false` | Rādīt/Paslēpt uznirstošā loga galveni pilnībā |
| `show_previous_button` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Rādīt iepriekšējo pogu blakus aizvēršanas pogai un pārvietoties atpakaļ uz iepriekšējo uznirstošo logu, kad tas ir pieejams |
| `show_close_button` | boolean | Neobligāts | `true` (noklusējums) vai `false` | Rādīt vai paslēpt aizvēršanas pogu, saglabājot pārējo galveni redzamu |
| `buttons_position` | string | Neobligāts | `right` (noklusējums) vai `left` | Aizvēršanas un iepriekšējās pogas pozīcija galvenē |
| `cards` | list | Neobligāts | Jebkura Bubble Card, Home Assistant kartīte vai pielāgota kartīte | Nosaka jūsu uznirstošā loga saturu. Skatiet uznirstošā loga piemēru zemāk. |
| Jums ir pieejami arī [visi pogas iestatījumi](#poga) uznirstošā loga galvenei. | | Neobligāts | | Ja nav definēts, galvene netiks rādīta |

</details>

<details>

<summary><b>CSS mainīgie (skatiet <a href="#stils">Stils</a>)</b></summary>

| Mainīgais | Gaidāmā vērtība | Apraksts |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Malu noapaļojums uznirstošajam logam |
| `--bubble-pop-up-main-background-color` | `color` | Galvenā fona krāsa uznirstošā loga atbalstītajiem elementiem |
| `--bubble-pop-up-background-color` | `color` | Uznirstošā loga fona krāsa |
| `--bubble-backdrop-background-color` | `color` | Fona krāsa aizmugures fonam |
| Jums ir pieejami arī [visi pogas CSS mainīgie](#pogas-opcijas) uznirstošā loga galvenei. | | |

</details>


### Neatkarīgs uznirstošā loga formāts (v3.2.0+)

Kopš v3.2.0 uznirstošie logi izmanto jaunu neatkarīgu formātu, kur satura kartītes tiek definētas tieši uznirstošajā logā, izmantojot opciju `cards`. Tas nodrošina labāku veiktspēju un jaunu, uz sekcijām balstītu vilkšanas-un-nomešanas rediģēšanas pieredzi.


#### Piemēri

<details>

<summary>Uznirstošais logs (neatkarīgais formāts)</summary>

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

<summary>Poga, lai atvērtu uznirstošo logu</summary>

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

## Horizontāla pogu josla

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Šī kartīte ir labs papildinājums uznirstošā loga kartītei, ļaujot atvērt atbilstošos uznirstošos logus. Tā arī ļauj atvērt jebkuru jūsu vadības paneļa lapu. Turklāt varat pievienot savus kustības/klātbūtnes sensorus, lai pogu secība pielāgotos atbilstoši telpai, kurā tikko iegājāt. Šī kartīte ir ritināma, paliek redzama un darbojas kā kājene.

> [!IMPORTANT]  
> Šai kartītei ir jābūt pēdējai jūsu skatā (aiz visām kartītēm un uznirstošajiem logiem). Tā nevar atrasties nevienas kaudzes iekšpusē.

### Horizontālas pogu joslas opcijas

<details>

<summary><b>Opcijas (YAML + apraksti)</b></summary>

| Nosaukums | Tips | Prasība | Atbalstītās opcijas | Apraksts |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obligāts** | Uznirstošā loga hash (piemēram, `'#kitchen'`) ar ' ' vai jebkura saite | Saite, ko atvērt |
| `1_name` | string | Neobligāts | Jebkurš teksts | Nosaukums jūsu pogai |
| `1_icon` | string | Neobligāts | Jebkura `mdi:` ikona | Ikona jūsu pogai |
| `1_entity` | string | Neobligāts | Jebkura gaisma vai gaismu grupa | Rāda šīs gaismas krāsu fonā |
| `1_pir_sensor` | string | Neobligāts | Jebkurš bināra sensors | Vismaz viens pir sensors vai vairāk `auto_order` vajadzībām, faktiski tas darbojas arī ar jebkuru entītijas tipu, piemēram, varat pievienot gaismu grupas, un secība mainīsies, balstoties uz pēdējām mainītajām stāvokļu vērtībām. |
| `auto_order` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Maina pogu secību atbilstoši `_pir_sensor` pēdējam maiņas laikam, **tam jābūt `false`, ja jūsu kodā nav neviena `_pir_sensor`** |
| `margin` | string | Neobligāts | Jebkura CSS vērtība | Izmantojiet to **tikai** tad, ja jūsu `horizontal-buttons-stack` nav labi centrēta mobilajā ierīcē (piemēram, `13px`) |
| `width_desktop` | string | Neobligāts | Jebkura CSS vērtība | Platums datorā (`100%` pēc noklusējuma mobilajā ierīcē) |
| `is_sidebar_hidden` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Fiksē horizontālās pogu joslas pozīciju, ja sānjosla ir paslēpta datorā (tikai tad, ja esat pats veicis izmaiņas, lai to paslēptu) |
| `rise_animation` | boolean | Neobligāts | `true` (noklusējums) vai `false` | Iestatiet to uz `false`, lai atspējotu animāciju, kas aktivizējas, kad lapa ir ielādēta |
| `highlight_current_view` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Izcelt pašreizējo hash / skatu ar gludu animāciju |
| `hide_gradient` | boolean | Neobligāts | `true` vai `false` (noklusējums) | Iestatiet to uz `false`, lai paslēptu gradientu |

> [!IMPORTANT]  
> Mainīgie, kas sākas ar ciparu, nosaka jūsu pogas, vienkārši mainiet šo ciparu, lai pievienotu vairāk pogu (skatiet piemēru zemāk).

</details>

<details>

<summary><b>CSS mainīgie (skatiet <a href="#stils">Stils</a>)</b></summary>

| Mainīgais | Gaidāmā vērtība | Apraksts |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Malu noapaļojums horizontālās pogu joslas pogām |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Fona krāsa horizontālās pogu joslas pogām |

</details>


#### Piemērs

<details>

<summary>Horizontāla pogu josla, kas pati sevi pārkārto, balstoties uz klātbūtnes sensoriem</summary>

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

## Poga

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Šī kartīte ir ļoti daudzpusīga. To var izmantot kā **slēdzi**, **slīdni**, **stāvokli** vai **nosaukuma/teksta** pogu.

> [!TIP]
> ### Kādas ir atšķirības starp visiem pogu veidiem?
>
> - **Slēdža poga:** tas ir noklusējuma pogas veids. Pēc noklusējuma tā pārslēdz entītiju, un tās fona krāsa mainās atkarībā no entītijas stāvokļa vai gaismas krāsas. Darbību var mainīt sadaļā **Tap action on card**.
>
> - **Slīdņa poga:** šis pogas veids ļauj vadīt entītijas ar regulējamiem diapazoniem. Tas ir ideāli piemērots gaismu regulēšanai, un tā aizpildījuma krāsa pielāgosies gaismas krāsai. To var izmantot arī vērtību, piemēram, akumulatora līmeņa, attēlošanai.
>   Slīdņiem atbalstītās entītijas:
>   - Gaisma (spilgtums)
>   - Multivides atskaņotājs (skaļums)
>   - Aizsegs (pozīcija)
>   - Ventilators (procenti)
>   - Klimats (temperatūra)
>   - Input number un number (vērtība)
>   - Akumulatora sensors (procenti, tikai lasāms)
>
>   Var izmantot arī jebkuru entītiju ar skaitlisku stāvokli, atslēdzot entītiju filtru sadaļā **Slider settings** un pēc tam definējot vērtības `min` un `max`. Šī opcija ir tikai lasāma.
>
> - **Stāvokļa poga:** ideāli piemērota informācijas attēlošanai no sensora vai jebkuras entītijas. Nospiežot to, tiks parādīts entītijas panelis "More info". Tās fona krāsa nemainās.
>
> - **Nosaukuma/teksta poga:** vienīgais pogas veids, kuram nav vajadzīga entītija. Tas ļauj attēlot īsu tekstu, nosaukumu vai virsrakstu. Tam var pievienot arī darbības. Tā fona krāsa nemainās.

### Pogas opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entītija, ko vadīt |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Pogas uzvedība |
| `name` | string | Optional | Any string | Pogas nosaukums, ja nav definēts, tiks parādīts entītijas nosaukums |
| `icon` | string | Optional | Any `mdi:` icon | Pogas ikona, ja nav definēta, tiks parādīta entītijas ikona vai `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Piešķirt prioritāti ikonai, nevis `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Tikai gaismām.** Izmantot motīva akcenta krāsu, nevis gaismas krāsu.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rādīt vai slēpt `entity` stāvokli |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt nosaukumu |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās izmaiņas laiku |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās atjaunināšanas laiku |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` atribūtu zem tā `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rādāmais atribūts (piemēram, `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Ļauj tekstam ritināties, ja saturs pārsniedz konteinera izmēru |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Ļauj mainīt noklusējuma darbības, klikšķinot uz pogas. |
| `tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, klikšķinot uz ikonas, ja nav definēts, tiks izmantots `more-info` |
| `double_tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, veicot dubultklikšķi uz ikonas, ja nav definēts, tiks izmantots `none` |
| `hold_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, turot ikonu, ja nav definēts, tiks izmantots `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skat. [karšu izkārtojumi](#kartīšu-izkārtojumi) |
| `rows` | number | Optional | Any number | Rindu skaits (augstums) (piemēram, `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildpogas) | Pievieno pielāgotas pogas, fiksētas pa labi |

</details>

<details>

<summary><b>CSS mainīgie (skat. <a href="#stils">Stils</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Galvenā fona krāsa atbalstītajiem elementiem pogā |
| `--bubble-button-border-radius` | `px` | Pogas malu noapaļojums |
| `--bubble-button-icon-border-radius` | `px` | Pogas ikonas konteinera malu noapaļojums |
| `--bubble-button-icon-background-color` | `color` | Pogas ikonas konteinera fona krāsa |
| `--bubble-light-white-color` | `color` | Aizstāj gaismas pogu/slīdņu noklusējuma balto krāsu |
| `--bubble-light-color` | `color` | Aizstāj gaismas pogu/slīdņu krāsu (arī RGB gaismām) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Pogas ēna |

</details>

Šīs opcijas ir pieejamas tikai tad, ja `button_type` ir iestatīts uz `slider`.

<details>

<summary><b>Slīdņa opcijas (YAML un apraksti)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Slīdņa minimālā vērtība. Pielāgotiem slīdņiem.                                                    |
| `max_value`             | number  | Optional                        | Slīdņa maksimālā vērtība. Pielāgotiem slīdņiem.                                                    |
| `step`                  | number  | Optional                        | Slīdņa soļa vērtība.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Ieslēdz iepriekšējo slīdņa uzvedību, kad slīdni aktivizē ar pieskārienu, nevis turot to.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Atjaunina vērtību relatīvi pret sākuma vērtību, nevis pret sākuma pieskāriena punktu.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Padara slīdni tikai lasāmu. Automātiski ieslēgts dažām entītijām, piemēram, sensoriem.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Entītijas stāvoklis tiek atjaunināts slīdēšanas laikā. **Šī funkcija nav ieteicama visām entītijām.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` vai `bottom` | Maina slīdņa aizpildījuma virzienu. Ja nav norādīts, no kreisās uz labo, spoguļots [no labās uz kreiso rakstītajās valodās](#lokalizācija) |
| `slider_value_position` | string | Optional | `right`, `left`, `center` vai `hidden` | Vērtības attēlojuma pozīcija. Ja nav norādīts, pa labi, un pa kreisi [no labās uz kreiso rakstītajās valodās](#lokalizācija) |
| `invert_slider_value` | boolean | Optional (`false` default) | Invertē slīdņa virzienu (100% aizpildījums atbilst minimumam). Nav pieejams krāsu slīdņiem. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Tikai gaismām.** Izvēlēties slīdņa režīmu |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Tikai aizsegiem.** Izvēlēties slīdņa režīmu (pozīcija vai sasvēruma pozīcija) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Tikai gaismām (Hue režīmā).** Piespiedu piesātinājums, regulējot toni |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Tikai gaismām (Hue režīmā).** Piespiedu piesātinājuma vērtība (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Tikai gaismām (spilgtuma režīmā).** Izmantot motīva akcenta krāsu, nevis gaismas krāsu |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Tikai gaismām.** Ļauj slīdnim sasniegt 0%, kas izslēdz gaismu. Nav pieejams kopā ar `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Tikai gaismām.** Ieslēdz gludus spilgtuma pārejas efektus atbalstītām gaismām.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Tikai gaismām.** Pārejas laiks milisekundēs. Nepieciešams `light_transition: true`.            |

</details>

#### Piemēri

<details>

<summary>Slīdņa poga, kas var vadīt gaismas spilgtumu</summary>

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

<summary>Poga ar vairāk opcijām</summary>

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

## Multivides atskaņotājs

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Šī kartīte ļauj vadīt multivides atskaņotāja entītiju.

### Multivides atskaņotāja opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Vadāmais multivides atskaņotājs |
| `name` | string | Optional | Any string | Multivides atskaņotāja nosaukums, ja nav definēts, tiks parādīts entītijas nosaukums |
| `icon` | string | Optional | Any `mdi:` icon | Multivides atskaņotāja ikona, ja nav definēta, tiks parādīta entītijas ikona vai `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Piešķirt prioritāti ikonai, nevis `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rādīt vai slēpt `entity` stāvokli |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt nosaukumu |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās izmaiņas laiku |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās atjaunināšanas laiku |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` atribūtu zem tā `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rādāmais atribūts (piemēram, `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Ļauj tekstam ritināties, ja saturs pārsniedz konteinera izmēru |
| `min_volume` | number | Optional | Any number | Skaļuma slīdņa minimālā vērtība. |
| `max_volume` | number | Optional | Any number | Skaļuma slīdņa maksimālā vērtība. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Izmantot izplūdinātu multivides vāku kā kartītes fonu. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Ļauj mainīt noklusējuma darbības, klikšķinot uz pogas. |
| `tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, klikšķinot uz ikonas, ja nav definēts, tiks izmantots `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, veicot dubultklikšķi uz ikonas, ja nav definēts, tiks izmantots `none`. |
| `hold_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, turot ikonu, ja nav definēts, tiks izmantots `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Pārvieto vāka darbību pogas uz apakšu (fiksēti) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Padara apakšējās darbību pogas pilnā platumā (noklusējums: `true`, ja pozīcija ir `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Apakšējo darbību pogu izlīdzinājums, ja tās nav pilnā platumā |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skat. [karšu izkārtojumi](#kartīšu-izkārtojumi) |
| `rows` | number | Optional | Any number | Rindu skaits (augstums) (piemēram, `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildpogas) | Pievieno pielāgotas pogas, fiksētas pa labi |
| `hide` | object | Optional | See below | Slēpt pogas kartītē |

#### Slēpšanas opcijas

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Slēpt atskaņošanas/pauzes pogu |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Slēpt skaļuma pogu |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Slēpt iepriekšējā ieraksta pogu |
| `next_button` | boolean | Optional | `true` or `false` (default) | Slēpt nākamā ieraksta pogu |
| `power_button` | boolean | Optional | `true` or `false` (default) | Slēpt ieslēgšanas pogu |

</details>

<details>

<summary><b>CSS mainīgie (skat. <a href="#stils">Stils</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Galvenā fona krāsa multivides atskaņotājam |
| `--bubble-media-player-border-radius` | `px` | Multivides atskaņotāja malu noapaļojums |
| `--bubble-media-player-buttons-border-radius` | `px` | Multivides atskaņotāja pogu malu noapaļojums |
| `--bubble-media-player-slider-background-color` | `color` | Skaļuma slīdņa fona krāsa |
| `--bubble-media-player-icon-border-radius` | `px` | Multivides atskaņotāja ikonas konteinera malu noapaļojums |
| `--bubble-media-player-icon-background-color` | `color` | Multivides atskaņotāja ikonas konteinera fona krāsa |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Multivides atskaņotāja ēna |

</details>


#### Piemēri

<details>

<summary>Multivides atskaņotājs ar visām opcijām</summary>

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

## Aizsegs

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Šī kartīte ļauj vadīt jūsu `cover` entītijas.

### Aizsega opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Vadāmais aizsegs |
| `name` | string | Optional | Any string | Aizsega nosaukums, ja nav definēts, tiks parādīts entītijas nosaukums |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Piešķirt prioritāti ikonai, nevis `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rādīt vai slēpt `entity` stāvokli |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt nosaukumu |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās izmaiņas laiku |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās atjaunināšanas laiku |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` atribūtu zem tā `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rādāmais atribūts (piemēram, `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Ļauj tekstam ritināties, ja saturs pārsniedz konteinera izmēru |
| `icon_open` | string | Optional | Any `mdi:` icon | Ikona atvērtam aizsegam, ja nav definēta, tiks parādīta noklusējuma atvērta aizsega ikona |
| `icon_close` | string | Optional | Any `mdi:` icon | Ikona aizvērtam aizsegam, ja nav definēta, tiks parādīta noklusējuma aizvērta aizsega ikona |
| `icon_up` | string | Optional | Any `mdi:` icon | Ikona atvēršanas pogai, ja nav definēta, tiks parādīta noklusējuma atvērta aizsega ikona |
| `icon_down` | string | Optional | Any `mdi:` icon | Ikona aizvēršanas pogai, ja nav definēta, tiks parādīta noklusējuma aizvērta aizsega ikona |
| `open_service` | string | Optional | Any service or script | Serviss aizsega atvēršanai, pēc noklusējuma `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Serviss aizsega apturēšanai, pēc noklusējuma `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Serviss aizsega aizvēršanai, pēc noklusējuma `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Sasvēruma vadības pogu pozīcija (tiek rādīta tikai, ja aizsegs atbalsta sasvērumu) |
| `open_tilt_service` | string | Optional | Any service or script | Serviss sasvēruma atvēršanai, pēc noklusējuma `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Serviss sasvēruma aizvēršanai, pēc noklusējuma `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Ļauj mainīt noklusējuma darbības, klikšķinot uz pogas. |
| `tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, klikšķinot uz ikonas, ja nav definēts, tiks izmantots `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, veicot dubultklikšķi uz ikonas, ja nav definēts, tiks izmantots `none`. |
| `hold_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, turot ikonu, ja nav definēts, tiks izmantots `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Pārvieto vadības elementus uz apakšu (fiksēti) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Padara apakšējos vadības elementus pilnā platumā (noklusējums: `true`, ja pozīcija ir `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Apakšējo vadības elementu izlīdzinājums, ja tie nav pilnā platumā |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skat. [karšu izkārtojumi](#kartīšu-izkārtojumi) |
| `rows` | number | Optional | Any number | Rindu skaits (augstums) (piemēram, `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildpogas) | Pievieno pielāgotas pogas, fiksētas pa labi |

</details>

<details>

<summary><b>CSS mainīgie (skat. <a href="#stils">Stils</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Galvenā fona krāsa atbalstītajiem elementiem aizsega kartītē |
| `--bubble-cover-border-radius` | `px` | Aizsega kartītes malu noapaļojums |
| `--bubble-cover-icon-border-radius` | `px` | Aizsega kartītes ikonas konteinera malu noapaļojums |
| `--bubble-cover-icon-background-color` | `color` | Aizsega kartītes ikonas konteinera fona krāsa |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Aizsega kartītes ēna |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Pogu ēna aizsega kartītē |

</details>


#### Piemērs

<details>

<summary>Kartīte, kas var vadīt rullo žalūziju</summary>

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

## Izvēle

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Šī kartīte ļauj pievienot nolaižamo izvēlni jūsu `input_select` / `select` entītijām. Šī kartīte atbalsta arī papildpogas un visas Bubble Card kopīgās funkcijas.

> [!TIP]
> Ja vēlaties, varat izmantot arī izvēles papildpogas, šī funkcija ir pieejama visās kartītēs, kas atbalsta papildpogas.

### Izvēles opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entītija, ko vadīt |
| `name` | string | Optional | Any string | Izvēles nosaukums, ja nav definēts, tiks parādīts entītijas nosaukums |
| `icon` | string | Optional | Any `mdi:` icon | Izvēles ikona, ja nav definēta, tiks parādīta entītijas ikona vai `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Piešķirt prioritāti ikonai, nevis `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rādīt vai slēpt `entity` stāvokli |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt nosaukumu |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rādīt vai slēpt ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās izmaiņas laiku |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` pēdējās atjaunināšanas laiku |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rādīt `entity` atribūtu zem tā `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rādāmais atribūts (piemēram, `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Ļauj tekstam ritināties, ja saturs pārsniedz konteinera izmēru |
| `tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, klikšķinot uz ikonas, ja nav definēts, tiks izmantots `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, veicot dubultklikšķi uz ikonas, ja nav definēts, tiks izmantots `none`. |
| `hold_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, turot ikonu, ja nav definēts, tiks izmantots `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skat. [karšu izkārtojumi](#kartīšu-izkārtojumi) |
| `rows` | number | Optional | Any number | Rindu skaits (augstums) (piemēram, `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildpogas) | Pievieno pielāgotas pogas, fiksētas pa labi |

</details>

<details>

<summary><b>CSS mainīgie (skat. <a href="#stils">Stils</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Galvenā fona krāsa atbalstītajiem elementiem izvēles kartītē |
| `--bubble-select-background-color` | `color` | Izvēles kartītes fona krāsa |
| `--bubble-select-list-border-radius` | `px` | Kartītes nolaižamās izvēlnes malu noapaļojums |
| `--bubble-select-list-item-accent-color` | `color` | Izvēlētā elementa akcenta krāsa |
| `--bubble-select-list-background-color` | `color` | Kartītes nolaižamās izvēlnes fona krāsa |
| `--bubble-select-list-width` | `px` | Kartītes nolaižamās izvēlnes platums |
| `--bubble-select-arrow-background-color` | `color` | Nolaižamās izvēlnes bultiņas fona krāsa |
| `--bubble-select-button-border-radius` | `px` | Izvēles pogas malu noapaļojums |
| `--bubble-select-border-radius` | `px` | Izvēles kartītes malu noapaļojums |
| `--bubble-select-icon-border-radius` | `px` | Izvēles kartītes ikonas konteinera malu noapaļojums |
| `--bubble-select-icon-background-color` | `color` | Izvēles kartītes ikonas konteinera fona krāsa |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Izvēles kartītes ēna |

</details>


#### Piemēri

<details>

<summary>Izvēles kartīte ar ainu sarakstu</summary>

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

## Klimats

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Šī kartīte ļauj vadīt jūsu `climate` entītijas.

> [!TIP]
> Režīma izvēles izvēlne ir [papildpoga](#papildpogas), kas tiek pievienota automātiski, izveidojot kartīti. Pēc tam to var mainīt vai noņemt pēc vēlēšanās.

### Klimata opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Vadāmā entītija (piemēram, `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Pielāgots kartītes nosaukums. Ja nav definēts, tiks parādīts entītijas nosaukums.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Pielāgota kartītes ikona. Ja nav definēta, tiks izmantota entītijas ikona vai `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Piešķir prioritāti ikonai, nevis `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Rādīt vai slēpt `entity` pašreizējo stāvokli.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Rādīt vai slēpt entītijas nosaukumu.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Rādīt vai slēpt ikonu.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Slēpj zemākās mērķa temperatūras vadību, ja to atbalsta `entity`.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Slēpj augstākās mērķa temperatūras vadību, ja to atbalsta `entity`.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Pielieto pastāvīgu fona krāsu, kad klimata entītija ir ieslēgta.                                              |
| `step` | number | Optional | Any number | Temperatūras solis. |
| `min_temp` | number | Optional | Any number | Minimālā temperatūra. |
| `max_temp` | number | Optional | Any number | Maksimālā temperatūra. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Ļauj mainīt noklusējuma darbības, klikšķinot uz pogas. |
| `tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, klikšķinot uz ikonas, ja nav definēts, tiks izmantots `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, veicot dubultklikšķi uz ikonas, ja nav definēts, tiks izmantots `none`. |
| `hold_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, turot ikonu, ja nav definēts, tiks izmantots `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Pārvieto klimata darbību pogas uz apakšu (fiksēti) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Padara apakšējās darbību pogas pilnā platumā (noklusējums: `true`, ja pozīcija ir `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Apakšējo darbību pogu izlīdzinājums, ja tās nav pilnā platumā |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skat. [karšu izkārtojumi](#kartīšu-izkārtojumi) |
| `rows` | number | Optional | Any number | Rindu skaits (augstums) (piemēram, `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#papildpogas)                | Pievieno pielāgotas pogas, fiksētas pa labi. Noderīgi klimata režīma izvēles izvēlnei.                                  |

</details>

<details>

<summary><b>CSS mainīgie (skat. <a href="#stils">Stils</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Galvenā fona krāsa atbalstītajiem elementiem klimata kartītē |
| `--bubble-climate-border-radius` | `px` | Malu noapaļojums atbalstītajiem klimata kartītes elementiem |
| `--bubble-climate-button-background-color` | `color` | Klimata kartītes pogu fona krāsa |
| `--bubble-climate-icon-border-radius` | `px` | Klimata kartītes ikonas konteinera malu noapaļojums |
| `--bubble-state-climate-fan-only-color` | `color` | Pārklājuma krāsa ventilatora režīma stāvoklim |
| `--bubble-state-climate-dry-color` | `color` | Pārklājuma krāsa žāvēšanas stāvoklim |
| `--bubble-state-climate-cool-color` | `color` | Pārklājuma krāsa dzesēšanas stāvoklim |
| `--bubble-state-climate-heat-color` | `color` | Pārklājuma krāsa sildīšanas stāvoklim |
| `--bubble-state-climate-auto-color` | `color` | Pārklājuma krāsa automātiskā režīma stāvoklim |
| `--bubble-state-climate-heat-cool-color` | `color` | Pārklājuma krāsa sildīšanas/dzesēšanas stāvoklim |
| `--bubble-climate-accent-color` | `color` | Klimata kartītes akcenta krāsa |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Klimata konteinera ēna. |

</details>


#### Piemēri

<details>

<summary>Klimata kartīte ar HVAC režīmu nolaižamo izvēlni</summary>

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

## Kalendārs

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Šī kartīte ļauj attēlot jūsu kalendāra entītijas. Tās saturu var ritināt, tāpēc var ērti pārlūkot gaidāmos notikumus.

### Kalendāra opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Kalendāra dienu skaits, par kurām jāielādē notikumi, no šī brīža līdz N-tās dienas beigām (noklusējums: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Vadāmā entītija (piemēram, `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Attēlojamā kalendāra entītija                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Pielāgota kalendāra žetona krāsa. Ja nav definēta, tiks izvēlēta automātiska krāsa |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Kalendāra dienu skaits, par kurām jāielādē notikumi, no šī brīža līdz N-tās dienas beigām (noklusējums: 7) |
| `limit`             | number  | Optional     | A number                                        | Kartītē attēloto notikumu skaits                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Rādīt vai slēpt notikumu beigu laiku                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Rādīt vai slēpt notikuma progresa joslu                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Rādīt vai slēpt notikumus, kas pašlaik notiek. Vairāku dienu notikumi tiek vērtēti pa vienai dienai, tāpēc tiek paslēpta tikai iesāktā diena, bet nākamās dienas paliek redzamas |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Ļauj tekstam ritināties, ja saturs pārsniedz konteinera izmēru |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Ļauj pievienot darbības, klikšķinot uz notikuma. |
| `tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, klikšķinot uz dienas, ja nav definēts, tiks izmantots `none`. |
| `double_tap_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, veicot dubultklikšķi uz dienas, ja nav definēts, tiks izmantots `none`. |
| `hold_action` | object | Optional | See [actions](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definē darbības veidu, turot dienu, ja nav definēts, tiks izmantots `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skat. [karšu izkārtojumi](#kartīšu-izkārtojumi) |
| `rows` | number | Optional | Any number | Rindu skaits (augstums) (piemēram, `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildpogas) | Pievieno pielāgotas pogas, fiksētas pa labi |

</details>

<details>

<summary><b>CSS mainīgie (skat. <a href="#stils">Stils</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | -------------------------------------------------------------------- |
| `--bubble-calendar-main-background-color` | `color`        | Galvenā fona krāsa atbalstītajiem elementiem kalendāra kartītē  |
| `--bubble-calendar-border-radius`         | `px`           | Malu noapaļojums atbalstītajiem kalendāra kartītes elementiem |
| `--bubble-calendar-height`                | `px`           | Kalendāra kartītes augstums                                        |

</details>

#### Piemēri

<details>

<summary>Kalendāra kartīte ar ierobežotu notikumu skaitu</summary>

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

<summary>Kalendāra kartīte ar beigu laiku un progresa joslu</summary>

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


## Atdalītājs

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Šī kartīte ir vienkāršs atdalītājs, kas sadala jūsu uznirstošo logu kategorijās vai sadaļās, piemēram, apgaismojums, ierīces, aizsegi, iestatījumi, automatizācijas...

### Atdalītāja opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Nosaukums | Tips | Prasība | Atbalstītās opcijas | Apraksts |
| --- | --- | --- | --- | --- |
| `name` | string | Neobligāta, bet ieteicama | Jebkura virkne | Jūsu atdalītāja nosaukums |
| `icon` | string | Neobligāta, bet ieteicama | Jebkura `mdi:` ikona | Jūsu atdalītāja ikona |
| `card_layout` | string | Neobligāta | `normal` (noklusējums, ja nav sekciju skatā), `large` (noklusējums, ja ir sekciju skatā), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skatiet [kartīšu izkārtojumus](#kartīšu-izkārtojumi) |
| `rows` | number | Neobligāta | Jebkurš skaitlis | Rindu skaits (augstums) (piemēram, `2`) |
| `sub_button` | object | Neobligāta | Skatiet [papildpogas](#papildpogas) | Pievienojiet pielāgotas pogas, kas piestiprinātas pie labās malas |

</details>

<details>

<summary><b>CSS mainīgie (skatiet <a href="#stils">Stils</a>)</b></summary>

| Mainīgais | Sagaidāmā vērtība | Apraksts |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Atdalītāja līnijas fona krāsa |

</details>

#### Piemērs

<details>

<summary>Atdalītājs sadaļai "Aizsegi"</summary>

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

## Tukša kolonna

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Šī kartīte ir domāta, lai aizpildītu tukšu kolonnu. Tas ir noderīgi, ja jūsu uznirstošajā logā ir `horizontal-stack` tikai ar vienu kartīti. Paskatieties šī ekrānuzņēmuma apakšējā labajā stūrī, lai to (ne)pamanītu.

### Tukšas kolonnas opcijas

Šai kartītei nav opciju, un tā neatbalsta [stilu](#stils), taču tā atbalsta izkārtojuma opcijas HA sekcijām.

#### Piemērs

<details>

<summary>Tukša kolonna horizontālā joslā</summary>

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

## Tikai papildpogas

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Šī kartīte ir paredzēta tikai papildpogām. Tā ir lieliski piemērota izvēlnēm, ātrajām darbībām, informatīvām mikroshēmām vai fiksētai kājenei lapas apakšā.

> [!IMPORTANT]  
> Šī kartīte izmanto jauno papildpogu shēmu. Izmantojiet `sub_button.bottom`, lai definētu savas pogas. Sadaļa `sub_button.main` tiek ignorēta.

### Tikai papildpogu opcijas

<details>

<summary><b>Opcijas (YAML un apraksti)</b></summary>

| Nosaukums | Tips | Prasība | Atbalstītās opcijas | Apraksts |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obligāta** | Skatiet [papildpogas](#papildpogas) | Definējiet savas papildpogas, izmantojot sadaļu `bottom` |
| `hide_main_background` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Noņemt kartītes fonu |
| `footer_mode` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Piestiprināt kartīti lapas apakšā |
| `footer_full_width` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Padarīt kājeni pilnu platumā (100%) |
| `footer_width` | number | Neobligāta | Jebkurš skaitlis | Kājenes platums pikseļos, ja `footer_full_width` ir `false` |
| `footer_bottom_offset` | number | Neobligāta | Jebkurš skaitlis | Attālums no lapas apakšas pikseļos (noklusējums: `16`) |
| `card_layout` | string | Neobligāta | `normal` (noklusējums, ja nav sekciju skatā), `large` (noklusējums, ja ir sekciju skatā), `large-2-rows`, `large-sub-buttons-grid` | Kartītes stila izkārtojums, skatiet [kartīšu izkārtojumus](#kartīšu-izkārtojumi) |
| `rows` | number | Neobligāta | Jebkurš skaitlis | Rindu skaits (augstums) (piemēram, `2`) |

</details>

<details>

<summary><b>CSS mainīgie (skatiet <a href="#stils">Stils</a>)</b></summary>

| Mainīgais | Sagaidāmā vērtība | Apraksts |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Kājenes platums, ja `footer_full_width` ir `false` |
| `--bubble-footer-bottom` | `px` | Kājenes atkāpe no apakšas |
| `--bubble-footer-box-shadow` | skatiet [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ēnas efekts kājenes konteineram |

</details>

#### Piemēri

<details>

<summary>Mikroshēmas (kā ekrānuzņēmumā)</summary>

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

<summary>Fiksēta kājenes izvēlne</summary>

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

## Papildpogas

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Katrā kartītē, kas atbalsta šo opciju, varat pievienot papildpogas, lai vēl vairāk pielāgotu savas kartītes. Piemēram, varat izveidot pogu, kas vada putekļsūcēju robotu, laika ziņu kartīti vai gandrīz jebko, ko vien varat iedomāties. Šīs papildpogas atbalsta pieskāriena darbības un lielāko daļu pogas opciju.

Papildpogas tagad atbalsta trīs tipus: **Noklusējuma (poga)**, **Slīdnis** un **Nolaižamā izvēlne / Izvēle**. Jūs varat sajaukt tipus vienā kartītē, izvietot papildpogas augšpusē vai apakšā un sakārtot tās grupās sarežģītākiem izkārtojumiem.

#### Papildpogu izvietojums un grupas

<details>

<summary><b>Papildpogu struktūra (main / bottom un grupas)</b></summary>

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

**Piezīmes:**
- `main` un `bottom` ir divas neatkarīgas sadaļas. Apakšējās papildpogas ir piestiprinātas pie kartītes apakšas.
- `main_layout` un `bottom_layout` pieņem `inline` (noklusējums) vai `rows`, lai sakārtotu grupas vertikāli.
- Grupas ir objekti ar masīvu `group` un neobligātu `buttons_layout` (`inline` vai `column`).
- `justify_content` ir pieejams **tikai apakšējām grupām** (`start`, `center`, `end`, `fill`).
- Kad ir klāt apakšējās papildpogas, kartītes izkārtojums automātiski pārslēdzas uz `large`, ja vien jūs neesat tieši iestatījis citu izkārtojumu.
- Vecā tipa `sub_button` masīvi joprojām tiek atbalstīti un tiek uzskatīti par `main` sadaļu.

</details>

### Papildpogu opcijas

<details>

<summary><b>Opcijas (YAML un apraksts)</b></summary>

| Nosaukums | Tips | Prasība | Atbalstītās opcijas | Apraksts |
| --- | --- | --- | --- | --- |
| `entity` | string | Neobligāta | Jebkura entītija | Entītija, ko vadīt |
| `name` | string | Neobligāta | Jebkura virkne | Jūsu papildpogas nosaukums, ja nav definēts, tiks rādīts entītijas nosaukums |
| `icon` | string | Neobligāta | Jebkura `mdi:` ikona | Jūsu papildpogas ikona, ja nav definēta, tiks rādīta entītijas ikona vai entītijas attēls |
| `force_icon` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Piespiest ikonu pat tad, ja pieejams entītijas attēls |
| `sub_button_type` | string | Neobligāta | `default`, `slider` vai `select` | Izvēlieties papildpogas tipu |
| `show_background` | boolean | Neobligāta | `true` (noklusējums) vai `false` | Rādīt papildpogas fonu, tas mainīs krāsu atkarībā no jūsu entītijas stāvokļa |
| `state_background` | boolean | Neobligāta | `true` (noklusējums) vai `false` | Izmantot stāvokļa krāsu, kad entītija ir `on` |
| `light_background` | boolean | Neobligāta | `true` (noklusējums) vai `false` | Izmantot gaismas krāsu fonam, ja tā pieejama |
| `show_state` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Rādīt vai slēpt jūsu `entity` stāvokli |
| `show_name` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Rādīt vai slēpt nosaukumu |
| `show_icon` | boolean | Neobligāta | `true` (noklusējums) vai `false` | Rādīt vai slēpt ikonu |
| `show_last_changed` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Rādīt jūsu `entity` pēdējās izmaiņas laiku |
| `show_last_updated` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Rādīt jūsu `entity` pēdējās atjaunināšanas laiku |
| `show_attribute` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Rādīt jūsu `entity` atribūtu zem tā `name` |
| `attribute` | string | Neobligāta (obligāta, ja `show_attribute` ir iestatīts uz `true`) | Atribūts no jūsu `entity` | Rādāmais atribūts (piemēram, `brightness`) |
| `select_attribute` | string | Neobligāta | Atribūtu saraksts no jūsu `entity` (skatiet iepriekš atbalstītās opcijas) | Šis atribūtu saraksts atvērs nolaižamo izvēlni, ja tiks noklikšķināts (piemēram, `effect_list`) |
| `show_arrow` | boolean | Neobligāta | `true` (noklusējums) vai `false` | Rādīt vai slēpt nolaižamās izvēlnes bultiņu izvēles papildpogām |
| `scrolling_effect` | boolean | Neobligāta | `true` (noklusējums) vai `false` | Ļaut tekstam ritināties, ja saturs pārsniedz konteinera izmēru |
| `tap_action` | object | Neobligāta | Skatiet [darbības](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definēt darbības tipu, klikšķinot uz papildpogas, ja nav definēts, tiks izmantots `more-info` |
| `double_tap_action` | object | Neobligāta | Skatiet [darbības](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definēt darbības tipu, dubultklikšķinot uz papildpogas, ja nav definēts, tiks izmantots `none` |
| `hold_action` | object | Neobligāta | Skatiet [darbības](#pieskāriena-dubultpieskāriena-un-turēšanas-darbības) | Definēt darbības tipu, turot papildpogu, ja nav definēts, tiks izmantots `more-info` |
| `fill_width` | boolean | Neobligāta | `true` vai `false` | Aizpildīt pieejamo platumu (noklusējums: `false` sadaļai main, `true` sadaļai bottom) |
| `width` | number vai string | Neobligāta | Jebkurš skaitlis vai CSS garuma vērtība | Pielāgots platums (`px` sadaļai main, `%` sadaļai bottom pēc noklusējuma) |
| `custom_height` | number | Neobligāta | Jebkurš skaitlis | Pielāgots augstums pikseļos |
| `content_layout` | string | Neobligāta | `icon-left` (noklusējums), `icon-top`, `icon-bottom`, `icon-right` | Ikonas novietojums papildpogā |
| `always_visible` | boolean | Neobligāta | `true` vai `false` (noklusējums) | **Tikai slīdnim.** Vienmēr rādīt slīdni, nevis atvērt to pieskaroties |
| `show_button_info` | boolean | Neobligāta | `true` vai `false` (noklusējums) | **Tikai slīdnim.** Rādīt ikonu/nosaukumu/stāvokli, kad ieslēgts `always_visible` |
| `visibility` | object vai list | Neobligāta | Skatiet [nosacījumus](#nosacījumi) | Rādīt vai slēpt papildpogu, balstoties uz nosacījumiem |
| `hide_when_parent_unavailable` | boolean | Neobligāta | `true` vai `false` (noklusējums) | Slēpt papildpogu, ja vecākkartītes entītija nav pieejama |
| `css_class` | string | Neobligāta | Jebkura virkne | Papildu CSS klase papildpogai, lai to uzrunātu savos [stilos](#stils) neatkarīgi no tās nosaukuma (piem., `My value` dod `.my-value`) |

</details>

<details>

<summary><b>Slīdņa papildpogas opcijas (tādas pašas kā pogas slīdņiem)</b></summary>

<br>

Slīdņa papildpogas atbalsta tādas pašas slīdņa opcijas kā pogas slīdņi, tostarp:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS mainīgie (skatiet <a href="#stils">Stils</a>)</b></summary>

| Mainīgais | Sagaidāmā vērtība | Apraksts |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Apaļojuma rādiuss papildpogām |
| `--bubble-sub-button-background-color` | `color` | Fona krāsa papildpogām |
| `--bubble-sub-button-outline` | `box-shadow` | Kontūra, kas papildpogai vai slīdnim tiek pievienota tikai tad, kad šis elements zīmējas tādā pašā krāsā kā kartīte aiz tā, kas to padarītu neredzamu (iestatiet `none`, lai to noņemtu) |
| `--bubble-sub-slider-border-radius` | `px` | Apaļojuma rādiuss slīdņa papildpogām |
| `--bubble-sub-slider-background-color` | `color` | Fona krāsa slīdņa papildpogām |
| `--bubble-sub-slider-height` | `px` | Augstums pastāvīgi redzamām slīdņa papildpogām |
| `--bubble-sub-slider-outline` | `box-shadow` | Tikai slīdņa papildpogu kontūra, ja nav norādīta, tiek izmantota `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Teksta krāsa uz spilgtiem papildpogu foniem |

</details>

#### Piemēri

<details>

<summary>Poga ar dažām papildpogām, kas veido putekļsūcēja kartīti (kā ekrānuzņēmumā)</summary>

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

<summary>Pogas slīdnis ar papildpogu, kas rāda spilgtumu, un citu, kas pārslēdz gaismu (kā ekrānuzņēmumā)</summary>

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

<summary>Poga, kas rāda iekštelpas un ārtelpas temperatūru ar laikapstākļiem šodien un rīt (ekrānuzņēmums iekļauts)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Man nepaveicās, jo pie manis vienmēr ir mākoņains laiks, bet visas ikonas mainās atkarībā no laikapstākļiem.

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

## Kartīšu izkārtojumi

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card pilnībā atbalsta Home Assistant sekciju skatu, jūs varat mainīt kartītes izkārtojumu, lai padarītu kartīti lielāku, kā arī mainīt kolonnu vai rindu skaitu, ko kartītei jāaizņem sekciju skatā (tikai tajās kartītēs, kas atbalsta šo opciju). Šie izkārtojumi tiek atbalstīti arī visos citos skata tipos.

<details>

<summary><b>Pieejamie kartīšu izkārtojumi</b></summary>

| Izkārtojums | Apraksts |
| --- | --- |
| `normal` | Parastais izkārtojums (nav optimizēts sekciju skatam) |
| `large` | Lielāks izkārtojums, kas mainīs izmēru atbilstoši izvēlētajām rindām sekciju skatā (optimizēts sekciju skatam) |
| `large-2-rows` | Lielāks izkārtojums ar 2 papildpogu rindām, kas mainīs izmēru atbilstoši izvēlētajām rindām sekciju skatā (optimizēts sekciju skatam) |
| `large-sub-buttons-grid` | Šis izkārtojums parāda papildpogas režģī, `rows` jāiestata vismaz uz `2`.

</details>

#### Piemēri

<details>

<summary>Liela poga, kas rāda enerģijas statistiku ar 2 papildpogu rindām (ekrānuzņēmums iekļauts)</summary>

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

<summary>Liela poga ar vairākām rindām un 12 papildpogām</summary>

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

## Nosacījumi

Dažas opcijas vada nosacījumi, kas rakstīti tieši tāpat kā Home Assistant [nosacījumu kartītes](https://www.home-assistant.io/dashboards/conditional/) nosacījumi:

- `visibility` uz [papildpogas](#papildpogas), lai to rādītu vai slēptu
- `trigger` uz [uznirstošā loga](#uznirstošais-logs), lai to atvērtu, kad nosacījumi ir izpildīti
- `checkConditionsMet(conditions, hass)` jūsu [veidnēs](#veidnes), kad atbilde nepieciešama jūsu paša kodā

Tiek izvērtēts katrs Home Assistant nosacījuma veids: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, kā arī `and`, `or` un `not` grupas. Darbojas arī Home Assistant nosacījumu veidotāja nosacījumi, tie, kas nosaukti pēc sava domēna, piemēram, `sun.is_up`, `light.is_on`, `zone.in_zone` vai `temperature.is_value`, ar saviem `target`, `options`, `behavior` un `for` iestatījumiem.

<details>

<summary><b>Piemērs</b></summary>

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
> Nosacījumi tiek izvērtēti jūsu pārlūkā, tāpēc tie nedaudzie, kuriem vajadzīgs Home Assistant serveris, nevar būt precīzi: saullēkts un saulriets tiek nolasīti no entītijas `sun.sun`, nevis pārrēķināti, un `for` ilgums tiek mērīts no pēdējās stāvokļa maiņas, bez recorder vēstures.
>
> `view_columns` tiek pieņemts, bet vienmēr izpildās, jo Bubble Card nekad nav tā, kas izkārto jūsu skata kolonnas. Nosacījuma veids, ko Bubble Card nepazīst, vienu reizi paziņo par sevi jūsu pārlūka konsolē, nevis klusi neizdodas, tāpēc varat atšķirt drukas kļūdu no trūkstošas iespējas.

<br>

---

<br>

## Pieskāriena, dubultpieskāriena un turēšanas darbības

Jūs varat izmantot arī Home Assistant noklusējuma pieskāriena darbības, dubultpieskāriena darbības un turēšanas darbības tajās kartītēs, kas atbalsta šo opciju. Piemēram, tas ļauj parādīt "vairāk informācijas" logu, turot nospiestu pogas ikonu, vai izpildīt servisu, kad tiek nospiesta papildpoga.

**Piezīme: kad ir konfigurēts `double_tap_action`, parastajam `tap_action` būs 200 ms aizture, lai varētu noteikt
dubultpieskārienu. Ja šī aizture ir nevēlama, iestatiet `double_tap_action` uz `none`, lai atspējotu dubultpieskāriena apstrādi.**

### Darbību opcijas

<details>

<summary><b>Opcijas (YAML un apraksts)</b></summary>

| Nosaukums | Tips | Atbalstītās opcijas | Apraksts |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Izpildāmā darbība |
| `target` | object |  | Darbojas tikai ar `call-service`. Seko [home-assistant sintaksei](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Jebkurš jūsu paneļa ceļš | Ceļš, uz kuru navigēt (piemēram, `'#kitchen'`, lai atvērtu uznirstošo logu), kad darbība definēta kā navigate |
| `url_path` | string | Jebkura saite | URL, ko atvērt, noklikšķinot (piemēram, `https://www.google.com`), kad darbība ir `url` |
| `service` | string | Jebkurš serviss | Izsaucamais serviss (piemēram, `media_player.media_play_pause`), kad `action` definēts kā `call-service` |
| `data` vai `service_data` | object | Jebkuri servisa dati | Iekļaujamie servisa dati (piemēram, `entity_id: media_player.kitchen`), kad `action` definēts kā `call-service` |
| `confirmation` | object | Skatiet [apstiprinājumu](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Parādīt apstiprinājuma uznirstošo logu (nevis Bubble Card versiju), pārraksta noklusējuma `confirmation` objektu |

</details>

#### Piemērs

<details>

<summary>Poga, kas atver uznirstošo logu</summary>

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

## Stils

Jūs varat pievienot pielāgotus stilus, lai modificētu visu karšu CSS **neizmantojot card-mod**, izmantojot četrus veidus:

- Redaktorā ejiet uz karti, kuru vēlaties modificēt, tad dodieties uz _Stila opcijas > Pielāgoti stili un JS veidnes_, un pievienojiet savus pielāgotos stilus (skatiet padomus un piemērus zemāk).
- Redaktorā (vai [YAML](#moduļi)) ejiet uz karti, kuru vēlaties modificēt, tad dodieties uz _Moduļi_, tad izveidojiet jaunu moduli (tas būs pieejams visām kartēm), vai dodieties uz **Module Store**, lai instalētu jebkuru pieejamo moduli (vairāk detaļu par moduļiem atrodamas [zemāk](#moduļi)).
- [Tēmas](https://www.home-assistant.io/integrations/frontend/#defining-themes) failā, pievienojot CSS mainīgos YAML formātā (tie ir pieejami katras kartes dokumentācijā augstāk). Tas ļauj veikt globālas modifikācijas.

  <details>
  
  <summary>Piemērs</a></summary>
  
  <br>

  Nekopējiet rindu `Bubble:`, tas ir tās tēmas nosaukums, kuru izmantojat. Jums arī jānoņem `--` no mainīgajiem.

  Pēc jebkurām izmaiņām jums jāizpilda darbība [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes), lai atsvaidzinātu tēmu.

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
  
- YAML formātā, pievienojot `styles: |` un pēc tam savus pielāgotos stilus (skatiet padomus un piemērus zemāk).

> [!TIP]  
> **Lai saprastu, kuras stilu klases var modificēt**, jūs varat aplūkot mapi [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) šajā repozitorijā. Katrā kartes mapē atradīsiet failu ar nosaukumu `styles.css`. Šie faili satur visus piemērotos stilus. Tas ļauj daudz vairāk iespēju nekā CSS mainīgie, taču tas jāpievieno katrai kartei atsevišķi.
> 
> Jūs varat arī atrast daudz [kopienas piemēru](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), vai dažus no [Home Assistant foruma](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/), veicot nelielu meklēšanu.
>
> Bubble tēmu Home Assistant (kā ekrānuzņēmumos) var atrast [šeit](https://github.com/Clooos/Bubble).
>
> Drīzumā manā [YouTube kanālā](https://www.youtube.com/@cloooos) parādīsies pamācības video!

> [!IMPORTANT]  
> Ņemiet vērā, ka dažiem jau definētiem CSS stiliem, iespējams, būs jāpievieno `!important;` (skatiet piemērus zemāk).

> [!TIP]  
> Papildpogas var mērķēt, izmantojot uz nosaukumu balstītas klases. Piemēram, papildpogu ar nosaukumu "My sub-button" var stilizēt ar `.my-sub-button`. Slaidera papildpogas arī atklāj `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` utt.
>
> Uz nosaukumu balstīta klase mainās, kad pārdēvējat papildpogu, un tā tiek tulkota, kad tiek tulkots nosaukums. Iestatiet papildpogai `css_class`, lai iegūtu savu klasi, kas nekad nepārvietojas, neatkarīgi no nosaukuma un valodas.

#### Piemēri

<details>

<summary>Fonta izmēra maiņa jebkurai Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Vienas pogas fona krāsas maiņa horizontālā pogu joslā</summary>

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

<summary>Kartes fona krāsas maiņa</summary>

<br>

Šis darbojas visos Bubble Card tipos (izņemot uznirstošos logus):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Šis dara to pašu tikai pogas kartē (tas darbojas uznirstošā loga galvenei): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Lai mainītu krāsu, kad tā ir `on`, apskatiet stilu veidnes zemāk.

</details>

<details>

<summary>Pogas slaidera krāsas maiņa</summary>

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

<summary>Atdalītāja līnijas krāsas maiņa</summary>

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

<summary>Ikonas krāsas maiņa</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Horizontālas pogu joslas ikonai.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Ikonas konteinera fona krāsas maiņa</summary>

<br>

Šis darbojas visos Bubble Card tipos (izņemot uznirstošos logus):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Šis dara to pašu uznirstošā loga galvenei: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Papildpogu izmēra maiņa (lieliski der lielajam izkārtojumam)</summary>

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

<summary>Otrās papildpogas fona krāsas maiņa</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ikonas izmēra maiņa</summary>

<br>

Galvenajai ikonai.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Papildpogu ikonām.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Attēla izmantošana ikonas vietā papildpogā</summary>

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

Vienkārši augšupielādējiet šo attēlu mapē "pictures" (vai nosaukumā, kādu vēlaties) Home Assistant mapē "www".

</details>

<details>

<summary>Sarežģīts piemērs: horizontālas papildpogu rindas izveide (ar ekrānuzņēmumu)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Man šis ļoti patīk, es to izmantoju kā galveni savā informācijas panelī.

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

## Veidnes

**Bubble Card neatbalsta Jinja veidnes**, taču pieredzējuši lietotāji var pievienot veidnes JS tieši savos [pielāgotajos stilos](#stils). Piemēram, tas ļauj dinamiski mainīt ikonu, tekstus vai elementa krāsas, nosacīti rādīt vai slēpt elementu (piemēram, papildpogu), vai gandrīz jebko, balstoties uz stāvokli, atribūtu un vēl vairāk.

> [!TIP]  
> Vairāk informācijas par JS veidnēm [šeit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mans padoms ir **vienmēr aplūkot pārlūkprogrammas konsoli**, lai pārliecinātos, ka viss darbojas pareizi.

> [!IMPORTANT]  
> **Visas veidnes, kas nemaina CSS īpašību, jānovieto beigās! Piemēram, ikonas, teksta vai jebkura cita elementa maiņa.**

#### Pieejamie mainīgie un funkcijas

<details>

<summary>Mainīgie</summary>

<br>

Lielākajā daļā karšu jums ir pieejami šie mainīgie:

- `state` atgriezīs jūsu definētā `entity` stāvokli.
  
- `entity` atgriezīs jūsu definēto entitāti, piemēram, `switch.test` šajā piemērā.
  
- `icon` var izmantot šādi, lai mainītu ikonu `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` atgriezīs pirmās papildpogas definētā `entity` stāvokli, `[0]` ir pirmās papildpogas stāvoklis, `[1]` otrās...
  
- `subButtonIcon[0]` var izmantot šādi, lai mainītu pirmās papildpogas ikonu `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` ir pirmās papildpogas ikona, `[1]` otrās...
  
- `card` atgriezīs kartes elementu DOM.
  
- `hass` ir sarežģīts mainīgais, kas dod vēl vairāk kontroles, piemēram, jūs varat atgriezt `light.kitchen` stāvokli šādi `hass.states['light.kitchen'].state` vai atribūtu šādi `hass.states[entity].attributes.brightness`.

- `this` atgriezīs daudz noderīgas informācijas par jūsu iestatījumiem un informācijas paneli, izmantojiet šo tikai tad, ja zināt, ko darāt.

</details>

<details>

<summary>Funkcijas</summary>

<br>

Jums ir pieejamas visas globālās JS funkcijas, taču ir pieejamas arī:

- `getWeatherIcon` var izmantot, lai atgrieztu laikapstākļu ikonu, balstoties uz stāvokli, kas atgriež laikapstākļus. Piemēram, jūs varat darīt šādi `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, lai mainītu trešās papildpogas ikonu uz šodienas laikapstākļu ikonu, `.forecast[1]?.condition` ir rītdienai...

  Jums šim nolūkam būs jāizveido veidnes sensors. Lūk, ko varat pievienot savā `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` atgriež `true`, kad [nosacījumu](#nosacījumi) saraksts ir izpildīts, piemēram `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` var izmantot, lai tulkotu stāvokli (var arī izmantot, lai iegūtu stāvokļa mērvienību, bez nepieciešamības to pievienot manuāli).
- `hass.formatEntityAttributeValue(state, "attribute")` var izmantot, lai tulkotu atribūtu (var arī izmantot, lai iegūtu stāvokļa mērvienību, bez nepieciešamības to pievienot manuāli).

</details>

#### Piemēri

Zemāk atradīsiet daudz piemēru, taču ļoti sarežģītas veidnes varat atrast arī manā [Patreon lapā](https://www.patreon.com/c/Clooos), piemēram, vienu (manu mīļāko), kas ļauj izveidot līdz pat četrām nosacītām nozīmītēm ap kartes ikonām. Tas ir arī lielisks veids, kā apgūt visas Bubble Card pielāgoto stilu un veidņu iespējas!

<details>
<summary>Piemēri no manas Patreon lapas</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant tipa nozīmīšu pievienošana jebkurai kartei</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Formatēta datuma un laika rādīšana atdalītājā, neizmantojot nevienu entitāti</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Papildpogas stāvokļa rādīšana divās rindās</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Etiķešu un ikonu pielāgošana izvēles papildpogā</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Pastāvīga atgādinājuma uznirstošā loga pievienošana, kas parādās tikai tad, kad nepieciešams</a>
</p>

<br>

</details>

<details>

<summary>Pogas fona krāsas maiņa, kas ir sarkana, kad tā ir <code>off</code>, un zila, kad tā ir <code>on</code></summary>

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

<summary>Pogas fona krāsas maiņa, balstoties uz entitāti, horizontālai pogu joslai</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Papildpogas nosacīta rādīšana/slēpšana</summary>

<br>

Šis rāda pirmo papildpogu tikai tad, kad mans putekļsūcējs ir iestrēdzis.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Šis rāda papildpogu, kad baterija ir zem 10%. Noderīgi ar papildpogu, kas rāda "Zems baterijas līmenis".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ikonas vai papildpogas ikonas nosacīta maiņa</summary>

<br>

Šis maina pogas ikonu tikai tad, kad putekļsūcējs ir iestrēdzis.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Šis maina pirmās papildpogas ikonu tikai tad, kad putekļsūcējs ir iestrēdzis.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Ikonas vai papildpogas ikonas krāsas nosacīta maiņa</summary>

<br>

Šis maina pogas ikonas krāsu, balstoties uz tās stāvokli.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Šis maina papildpogas ikonas krāsu, balstoties uz tās stāvokli. `.bubble-sub-button-1` ir pirmā papildpoga, aizstājiet `1`, ja vēlaties mainīt citas papildpogas ikonu.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Ventilatora ikonas nosacīta animēšana</summary>

<br>

Šis rotē pogas ikonu, kad ventilators ir `on`.
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

<summary>Tekstu veidošana pēc veidnes (piemēram, nosaukums vai stāvoklis)</summary>

<br>

Šis maina pogas nosaukumu/stāvokli uz "Šobrīd ir saulains" atkarībā no jūsu laikapstākļiem.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
vai piemērots papildpogām:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ja vēlaties veidot stāvokli (`.bubble-state`) pēc veidnes, neieslēdziet `show_state: true`, tikai ieslēdziet `show_attribute: true` bez jebkāda atribūta.

</details>

<details>

<summary>Sarežģīts piemērs: papildpogas krāsas maiņa, kad uznirstošais logs ir atvērts</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Sarežģīts piemērs: atdalītāja nosaukuma veidošana, balstoties uz stāvokli, tulkotu jūsu valodā</summary>

<br>

Jūs varat izmantot `hass.formatEntityState(state)`, lai tulkotu stāvokli, un `hass.formatEntityAttributeValue(state, "attribute")`, lai tulkotu atribūtu.

Šis maina nosaukumu un ikonu, balstoties uz laikapstākļiem, "Nuageux" franču valodā nozīmē "Cloudy" (mākoņains).

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

## Moduļi

Moduļi ir jaudīga funkcija, kas ļauj saglabāt, atkārtoti izmantot un koplietot jūsu pielāgotos stilus un veidnes visās jūsu Bubble Cards. Tā vietā, lai kopētu un ielīmētu to pašu kodu vairākās kartēs, jūs varat izveidot moduli un piemērot to jebkur, kur nepieciešams. Tas padara jūsu informācijas paneļa izskata un uzvedības pārvaldību daudz vieglāku un efektīvāku.

Taču šī funkcija ir daudz jaudīgāka par to, tā ļauj jums pašiem pievienot faktiskas funkcijas Bubble Card redaktorā, izmantojot visas noklusējuma [Home Assistant formas](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) opcijas!  
Objekta selektors ir uzlabots, lai rādītu izmaiņas reāllaikā un pareizi atbalstītu atribūtus.

Modulis var arī atbildēt Home Assistant kartīšu atlasītājam blakus iebūvētajiem [entītiju ieteikumiem](#entītiju-ieteikumi): izmantojiet `suggestions` tām kartītēm, ko tas var aprakstīt iepriekš, un `suggestions_code`, kad tās jāaprēķina no jūsu iestatījumiem, piemēram, uznirstošu logu, kas veidots no visām tās zonas entītijām, kurai pieder izvēlētā entītija. Abas atslēgas ir dokumentētas [šeit](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Jūs varat arī pārlūkot **Module Store**, lai atrastu un instalētu [kopienas izveidotus moduļus](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), vai koplietot savus radījumus!

> [!TIP]
> Moduļa kods darbojas tieši tāpat kā kods kartes `styles` sadaļā. Visi tie paši mainīgie un funkcijas no sadaļas [Veidnes](#veidnes) ir pieejami.

<br>

### Sākotnējā iestatīšana

> [!IMPORTANT]
> Sākot ar v3.1.0, Bubble Card Tools ir ieteicamā moduļu glabāšanas sistēma. Vecākā veidnes sensora metode joprojām darbojas esošajām iestatīšanām, taču jauniem moduļiem un Module Store funkcijām vislabāk atbalsts ir caur Bubble Card Tools.

Bubble Card Tools integrācija iespējo Moduļa redaktoru un Module Store, un saglabā moduļus kā atsevišķus YAML failus. Esošie moduļi tiek migrēti automātiski.

Instalēšanas un konfigurēšanas soļi ir izskaidroti šeit:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Moduļa redaktors

Jūs varat piekļūt Moduļa redaktoram no jebkuras kartes iestatījumiem, sadaļā **Moduļi**. Redaktors piedāvā divas galvenās cilnes:

#### Cilne "Mani moduļi"

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Šī cilne rāda visus jūsu instalētos moduļus un ļauj jums:

- **Piemērot** esošos moduļus pašreizējai kartei
- **Izveidot** jaunu moduli no nulles
- **Rediģēt** esošos moduļus ar reāllaika priekšskatījumu
- **Dzēst** moduļus, kas jums vairs nav vajadzīgi
- **Meklēt** un **kārtot** moduļus (alfabētiski, pēc jaunuma, aktīvie pirmie)
- **Iestatīt globālo statusu**, lai modulis automātiski piemērotos visām kartēm
- **Importēt/eksportēt** moduļus dublēšanai vai koplietošanai
- **Rakstīt entītiju ieteikumus** moduļa redaktorā, sadaļā **Neobligāti: entītiju ieteikumi**, lai jūsu modulis tiktu piedāvāts Home Assistant kartīšu atlasītājā. Gan noteikumi, gan aprēķinātie ieteikumi tiek pārbaudīti rakstīšanas laikā, kļūda tur neļauj saglabāt, un priekšskatījums rāda ieteiktās kartītes jebkurai izvēlētai entītijai

#### Cilne "Module Store"

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Šī cilne parādīs [visus pieejamos kopienas moduļus](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), un ļauj jums:

- **Pārlūkot** visus kopienas izveidotos moduļus
- **Meklēt** un filtrēt moduļus pēc nosaukuma, saderības vai atslēgvārdiem
- **Instalēt** moduļus ar vienu klikšķi
- **Atjaunināt** instalētos moduļus, kad ir pieejamas jaunas versijas

> [!TIP]
> Redaktorā jūs varat iespējot neatbalstītus moduļus, lai testētu moduļus, kas vēl nav atzīmēti kā saderīgi ar konkrētu kartes tipu.

<br>

### Kā izmantot moduļus

#### Jauna moduļa izveide

<details>

<summary>Klikšķiniet, lai izvērstu</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Dodieties uz jebkuras kartes redaktoru un izvērsiet sadaļu **Moduļi**.
2. Noklikšķiniet uz **Izveidot jaunu moduli**.
3. Aizpildiet moduļa informāciju.
4. Ierakstiet savu CSS un/vai JavaScript veidnes kodu **Koda** redaktorā.
5. (Pēc izvēles) Izveidojiet pielāgotu konfigurācijas saskarni sadaļā **Redaktors** (piemēram, krāsu izvēlni ekrānuzņēmumā augstāk, pilna dokumentācija pieejama [šeit](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Pēc izvēles) Uzrakstiet savus **Entītiju ieteikumus**, lai jūsu modulis tiktu piedāvāts Home Assistant kartīšu atlasītājā. Panelis pārbauda rakstīto, kamēr rakstāt, un tā priekšskatījums rāda pašas ieteiktās kartītes jūsu izvēlētajai entītijai.
7. Noklikšķiniet **Saglabāt**.

Jūsu modulis tagad ir pieejams izmantošanai jebkurā no jūsu kartēm!

<br>

</details>

#### Moduļa piemērošana kartei

<details>

<summary>Klikšķiniet, lai izvērstu</summary>

<br>

- **Caur redaktoru:**

  - Dodieties uz tās kartes redaktoru, kurai vēlaties piemērot moduli.
  - Izvērsiet sadaļu **Moduļi**.
  - Noklikšķiniet uz moduļa, kuru vēlaties piemērot, no saraksta.
  - Zem "Piemērot", noklikšķiniet uz "Šai kartei". Modulis tagad ir aktīvs. Jūs varat piemērot vairākus moduļus tai pašai kartei.

- **Caur YAML:**

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

#### Moduļa piemērošana globāli

<details>

<summary>Klikšķiniet, lai izvērstu</summary>

<br>

Jūs varat iestatīt moduli, lai tas automātiski piemērotos visām Bubble Cards:

**Tas nav pieejams moduļiem ar redaktoru, jo tiem nepieciešama konkrēta konfigurācija, lai darbotos.**

- **Caur redaktoru:**

  - Moduļa redaktorā atrodiet savu moduli cilnē **Mani moduļi**.
  - Pārslēdziet pogu **Visas kartes** blakus moduļa nosaukumam.
  - Modulis tagad automātiski tiks piemērots visām kartēm.
 
- **Caur YAML:**

  Savā moduļa YAML konfigurācijā (failā `bubble-modules.yaml`), vienkārši pievienojiet `is_global: true`.

<br>

</details>

#### Vienas kartes izslēgšana no globāla moduļa

<details>

<summary>Klikšķiniet, lai izvērstu</summary>

<br>

Ja jums ir globāls modulis, taču vēlaties to izslēgt no konkrētas kartes:

- **Caur redaktoru:**
  
  - Kartes sadaļā **Moduļi** redzēsiet uzskaitītos globālos moduļus.
  - Noklikšķiniet uz globāla moduļa, atslēdziet "Šai kartei", lai izslēgtu to no šīs konkrētās kartes.

- **Caur YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Sava moduļa koplietošana Module Store

<details>

<summary>Klikšķiniet, lai izvērstu</summary>

<br>

Lai koplietotu savu moduli Module Store, Moduļa redaktorā, apakšā "Eksportēt moduli", noklikšķiniet uz "Kopēt priekš GitHub" un ielīmējiet saturu jaunā diskusijā [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) kategorijā. **Rediģējiet aprakstu** (ja nepieciešams), **piemēru** (YAML lietotājiem), un neaizmirstiet **pievienot vismaz vienu ekrānuzņēmumu** Module Store vajadzībām.

**Jūsu modulis kļūst pieejams uzreiz pēc tam** (pēc Store atsvaidzināšanas), tāpēc pārliecinieties, ka viss ir pareizi uzrakstīts un modulis darbojas, kā gaidīts. Protams, jūs varat rediģēt/atjaunināt moduli pēc tam, kad tas ir koplietots.

<br>

</details>

#### Versiju pārvaldība

<details>

<summary>Klikšķiniet, lai izvērstu</summary>

<br>

Module Store automātiski pārbauda atjauninājumus instalētajiem moduļiem. Kad ir pieejami atjauninājumi:

1. Jūs redzēsiet atjauninājuma indikatoru cilnē **Module Store**.
2. Noklikšķiniet **Atjaunināt** moduļiem ar pieejamiem atjauninājumiem.
3. Apstipriniet atjauninājumu Module Store.

<br>

</details>

#### Atbalstīto kartes tipu definēšana

<details>

<summary>Klikšķiniet, lai izvērstu</summary>

<br>

Daži moduļi var nebūt saderīgi ar visiem kartes tipiem. Jūs varat norādīt, kuras kartes modulis atbalsta.  
Ja vēlaties, lai modulis būtu saderīgs ar **visām kartēm**, vienkārši izlaidiet lauku `supported` (vai izmantojiet opciju **Visas kartes** redaktorā).

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

### Piemēri

<details>
<summary>Pamata stilošanas modulis</summary>

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
<summary>Modulis ar pielāgotu konfigurāciju</summary>

<br>

Šis modulis ir pieejams [šeit](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Vairāk piemēru atrodami Module Store, vai [šeit](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizācija

Bubble Card runā jūsu valodā. Tā redaktors ir iztulkots 64 valodās, ko atbalsta Home Assistant, un visur, kur Home Assistant jau ir savs vārds, tiek pārņemts tā formulējums, tāpēc abās saskarnēs lasāt vienus un tos pašus terminus.

Redaktora lejasdaļā, blakus versijas numuram, slēdzis **Automātiski** seko jūsu Home Assistant valodai. Izslēdziet to, un viss redaktors atgriezīsies angļu valodā, kas noder, sekojot pamācībai vai ziņojot par problēmu. Jūsu izvēle tiek iegaumēta pārlūkā.

Arī šī dokumentācija ir tulkota, [62 valodās](languages.md), visās, izņemot britu angļu, kurā redzams oriģināls. Šīs lapas ir atvērtas ikvienam, tāpēc formulējumu, kas neatbilst jūsu paša Home Assistant, var izlabot pāris klikšķos. Par satura atskaites punktu paliek angļu versija.

<br>

---

<br>

## Palīdzība

Nevilcinieties atvērt jautājumu (issue), ja kaut kas nedarbojas, kā gaidīts. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Vai jums ir jautājumi vai domas par Bubble Card? Vēlaties dalīties ar saviem informācijas paneļiem vai atklājumiem? Jūs varat doties uz Home Assistant forumu, uz Bubble Card subreddit vai uz GitHub Discussions sadaļu.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Līdzdalība

Ieguldījumi ir laipni gaidīti! Vai tie būtu kļūdu labojumi, jaunas funkcijas, tulkojumi vai dokumentācijas uzlabojumi, nevilcinieties atvērt pull request.

Pirms sākat, lūdzu, izlasiet [izstrādātāja rokasgrāmatu](DEVELOPERS.md), kas apraksta, kā iestatīt lokālo vidi, veidot projektu un testēt savas izmaiņas.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Ziedot

Es veltu lielāko daļu sava brīvā laika, lai padarītu šo projektu pēc iespējas labāku. Tāpēc, ja jūs novērtējat manu darbu, jebkurš ziedojums būtu lielisks veids, kā parādīt savu atbalstu 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Paldies visiem par jūsu atbalstu, jūs visi esat mans lielākais motivācijas avots!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
