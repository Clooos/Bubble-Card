<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Kjo faqe është një përkthim automatik. Në rast dyshimi, mbizotëron [dokumentacioni origjinal në anglisht](../README.md). A ju duket ndonjë fjali e gabuar? Çdo ndihmë është e mirëpritur dhe [rregullimi i kësaj faqeje](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.sq.md) zgjat vetëm një minutë: GitHub kujdeset për fork-un dhe pull request-in. Faleminderit paraprakisht! 🍻

# Bubble Card

🌐 **[Lexojeni këtë në një gjuhë tjetër](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card është një koleksion kartash minimaliste dhe të personalizueshme për Home Assistant, me pop-up modernë dhe një Module Store të integruar me mbi 100 module të krijuara nga komuniteti.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Tabela e përmbajtjes

**[`Instalimi`](#instalimi)**  **[`Konfigurimi`](#konfigurimi)**  **[`Pop-up`](#pop-up)**  **[`Rresht horizontal butonash`](#rresht-horizontal-butonash)**  **[`Buton`](#buton)**  **[`Luajtës multimedial`](#luajtës-multimedial)**  **[`Grila`](#grila)**  **[`Përzgjedhje`](#përzgjedhje)**  **[`Klima`](#klima)**  **[`Kalendar`](#kalendar)**  **[`Ndarës`](#ndarës)**  **[`Kolonë bosh`](#kolonë-bosh)**  **[`Vetëm nën-butona`](#vetëm-nën-butona)**  **[`Nën-butonat`](#nën-butonat)**  **[`Faqosjet e kartës`](#faqosjet-e-kartës)**  **[`Veprimet`](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes)**  **[`Stili`](#stili)**  **[`Shabllonet`](#shabllonet)**  **[`Modulet`](#modulet)**  **[`Ndihmë`](#ndihmë)**  **[`Kontributi`](#kontributi)**  **[`Dhuroni`](#dhuroni)**

<br>

## Instalimi

**Versioni më i vjetër i mbështetur i Home Assistant:** 2023.9.0

<details>

<summary>Pa HACS</summary>

<br>

1. Shkarkoni këtë skedar: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Shtoni këtë skedar në dosjen tuaj `<config>/www`
3. Në dashboard-in tuaj klikoni ikonën në cepin e sipërm djathtas, pastaj `Edit dashboard`
4. Klikoni përsëri atë ikonë dhe pastaj klikoni `Manage resources`
5. Klikoni `Add resource`
6. Kopjoni dhe ngjisni këtë: `/local/bubble-card.js?v=1`
7. Klikoni `JavaScript Module` pastaj `Create`
8. Kthehuni mbrapa dhe rifreskoni faqen
9. Tani mund të klikoni `Add card` në cepin e poshtëm djathtas dhe të kërkoni `Bubble Card`
10. Pas çdo përditësimi të skedarit do t'ju duhet të ndryshoni `/local/bubble-card.js?v=1` dhe të ndryshoni numrin e versionit me një më të lartë

Nëse nuk funksionon, thjesht provoni të pastroni cache-in e shfletuesit.

</details>

<details>

<summary>Me HACS (E rekomanduar)</summary>

<br>

Kjo metodë ju lejon të merrni përditësime direkt nga Home Assistant Community Store

1. Nëse HACS nuk është instaluar ende, shkarkojeni duke ndjekur udhëzimet në [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Vazhdoni me konfigurimin fillestar të HACS duke ndjekur udhëzimet në [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Në shiritin anësor shkoni tek "HACS"
4. Kërkoni "Bubble Card", ose klikoni butonin blu më poshtë
5. Klikoni "Download"
6. Kthehuni në dashboard-in tuaj dhe klikoni ikonën në cepin e sipërm djathtas, pastaj `Edit dashboard`
7. Tani mund të klikoni `Add card` në cepin e poshtëm djathtas dhe të kërkoni `Bubble Card`

Nëse nuk funksionon, provoni të pastroni cache-in e shfletuesit/aplikacionit (në të gjitha pajisjet tuaja nëse është e nevojshme).

#### Video

Mund të shikoni edhe kanalin tim në YouTube për video hap pas hapi.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurimi

Të gjitha opsionet mund të konfigurohen në editorin e Home Assistant. Por më poshtë në dokumentacion mund të gjeni më shumë detaje dhe YAML-in.

<details>

<summary><b>Opsionet kryesore (YAML + përshkrim)</b></summary>

| Emri | Lloji | Kërkesa | Opsionet e mbështetura | Përshkrimi |
| --- | --- | --- | --- | --- |
| `type` | string | **E detyrueshme** | `custom:bubble-card` | Lloji i kartës |
| `card_type` | string | **E detyrueshme** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ose `sub-buttons` | Lloji i kartës Bubble Card, shihni më poshtë |
| `styles` | object list | Opsionale | Çdo fletë stilesh CSS | Ju lejon të personalizoni CSS-në e Bubble Card, shihni [stilin](#stili) |

</details>

<details>

<summary><b>Variablat globale CSS (shihni <a href="#stili">Stilin</a>)</b></summary>

| Variabla | Vlera e pritur | Përshkrimi |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Rrezja e cepave për të gjitha elementet e mbështetura |
| `--bubble-main-background-color` | `color` | Ngjyra kryesore e sfondit për të gjitha elementet e mbështetura |
| `--bubble-secondary-background-color` | `color` | Ngjyra dytësore e sfondit për të gjitha elementet e mbështetura |
| `--bubble-accent-color` | `color` | Ngjyra e theksit për të gjitha elementet e mbështetura |
| `--bubble-icon-border-radius` | `px` | Rrezja e cepave të ikonës për të gjitha elementet e mbështetura |
| `--bubble-icon-background-color` | `color` | Ngjyra e sfondit të ikonës për të gjitha elementet e mbështetura |
| `--bubble-sub-button-border-radius` | `px` | Rrezja e cepave për të gjithë nën-butonat |
| `--bubble-sub-button-background-color` | `color` | Ngjyra e sfondit për të gjithë nën-butonat |
| `--bubble-box-shadow` | shihni [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë për të gjitha elementet e mbështetura |
| `--bubble-border` | shihni [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Kufiri për të gjitha kartat e mbështetura |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Shikoni këtë [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) për të mësuar rreth Bubble Card dhe mundësive që ofron.** Kanali im në YouTube është ende i ri dhe fokusohet në tutoriale rreth Home Assistant dhe Bubble Card. Mos hezitoni të abonoheni për të ndihmuar rritjen e dukshmërisë së kanalit tim. Faleminderit paraprakisht!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Kjo kartë ju lejon të krijoni një pop-up me çfarëdo lloj përmbajtjeje. Çdo pop-up është **i fshehur si parazgjedhje** dhe mund të hapet duke synuar lidhjen e tij (p.sh. `'#pop-up-name'`), me çdo kartë që mbështet veprimin `navigate` [action](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes), ose me [rreshtin horizontal butonash](#rresht-horizontal-butonash) që përfshihet.

> [!TIP]
> ### Aktivizuesi i pop-up-it 
> Kjo veçori ju lejon të hapni një pop-up bazuar në gjendjen e çdo entiteti, për shembull mund të hapni një pop-up "Siguria" me një kamerë kur një person ndodhet përpara shtëpisë suaj. Mund të krijoni gjithashtu një helper toggle (input_boolean) dhe të aktivizoni hapjen/mbylljen e tij në një automatizim.
> <details>
> <summary>Hapja e një pop-up-i kur një <code>binary_sensor</code> është <code>on</code></summary>
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
> ### Mënyra të ndryshme për të mbyllur një pop-up 
> Ka shumë mënyra për të mbyllur një pop-up. Për shembull, mund të rrëshqisni nga koka e pop-up-it drejt fundit, duke bërë një rrëshqitje të gjatë brenda pop-up-it drejt fundit, duke shtypur Escape në desktop, duke hequr hash-in nga URL-ja ose thjesht duke shtypur butonin e mbylljes.
>


### Opsionet e pop-up-it

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Emri | Lloji | Kërkesa | Opsionet e mbështetura | Përshkrimi |
| --- | --- | --- | --- | --- |
| `hash` | string | **E detyrueshme** | Çdo hash unik (p.sh. `'#kitchen'`) me ' ' | Kjo është si do ta hapni pop-up-in tuaj |
| `popup_style` | string | Opsionale | `bubble` (parazgjedhje) ose `classic` | Përcakton stilin vizual të pop-up-it |
| `popup_mode` | string | Opsionale | `default` (parazgjedhje), `fit-content`, `centered` ose `adaptive-dialog` | Përcakton mënyrën e faqosjes së pop-up-it |
| `with_bottom_offset` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Përdoret vetëm me `popup_mode: fit-content` ose `adaptive-dialog`. Aplikon një zhvendosje në fund në mobile, e dobishme kur dashboard-i juaj përfshin një kartë footer. |
| `full_width_on_mobile` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Përdoret vetëm me `popup_mode: centered`. Zgjeron pop-up-in në gjerësi të plotë ekrani në mobile, e dobishme në ekrane më të vogla. |
| `performance_mode` | string | Opsionale | `default` (parazgjedhje) ose `performance` | Optimizon animacionin e hapjes së pop-up-it. `performance` vonon pak renderimin e përmbajtjes dhe blurimin e sfondit, dhe çaktivizon edhe blurin e backdrop-it nëse është vendosur. |
| `auto_close` | string | Opsionale | Një afat kohor në milisekonda (p.sh. `10000` për 10s) | Mbyll automatikisht pop-up-in pas një afati kohor |
| `close_on_click` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Mbyll automatikisht pop-up-in pas çdo ndërveprimi |
| `close_by_clicking_outside` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Mbyll pop-up-in duke klikuar jashtë tij |
| `width_desktop` | string | Opsionale | Çdo vlerë CSS | Gjerësia në desktop (`100%` si parazgjedhje në mobile) |
| `margin` | string | Opsionale | Çdo vlerë CSS | Përdoreni këtë **vetëm** nëse pop-up-i juaj nuk është i qendërzuar mirë në mobile (p.sh. `13px`) |
| `margin_top_mobile` | string | Opsionale | Çdo vlerë CSS | Marzhi i sipërm në mobile (p.sh. `-56px` nëse koka juaj është e fshehur) |
| `margin_top_desktop` | string | Opsionale | Çdo vlerë CSS | Marzhi i sipërm në desktop (p.sh. `50vh` për një pop-up me gjysmë madhësie ose `calc(100vh - 400px)` për një lartësi fikse prej `400px`) |
| `bg_color` | string | Opsionale | Çdo vlerë hex, rgb ose rgba | Ngjyra e sfondit të pop-up-it tuaj (p.sh. `#ffffff` për një sfond të bardhë) |
| `bg_opacity` | string | Opsionale | Çdo vlerë nga `0` deri në `100` | Opaciteti i sfondit të pop-up-it tuaj (p.sh. `100` për asnjë transparencë) |
| `bg_blur` | string | Opsionale | Çdo vlerë nga `0` deri në `100` | Efekti i blurit të sfondit të pop-up-it tuaj, **kjo funksionon vetëm nëse `bg_opacity` nuk është vendosur në `100`** (p.sh. `0` për asnjë blur)|
| `shadow_opacity` | string | Opsionale | Çdo vlerë nga `0` deri në `100` | Opaciteti i hijes së pop-up-it tuaj (p.sh. `0` për ta fshehur) |
| `hide_backdrop` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Vendoseni këtë në true në pop-up-in e parë të dashboard-it tuaj kryesor për të çaktivizuar backdrop-in në të gjithë pop-up-et. |
| `background_update` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Përditëson përmbajtjen e pop-up-it në sfond (nuk rekomandohet) |
| `trigger_entity` | string | Opsionale | Çdo entitet | Hap këtë pop-up bazuar në gjendjen e çdo entiteti |
| `trigger_state` | string | Opsionale (**E detyrueshme** nëse `trigger_entity` është përcaktuar) | Çdo gjendje entiteti | Gjendja e entitetit për të hapur pop-up-in |
| `trigger_close` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Mbyll pop-up-in kur `trigger_state` është ndryshe |
| `open_action` | object | Opsionale | Shihni [veprimet](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Aktivizon një veprim kur pop-up-i po hapet |
| `close_action` | object | Opsionale | Shihni [veprimet](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Aktivizon një veprim kur pop-up-i po mbyllet |
| `show_header` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Shfaq/Fsheh krejtësisht kokën e pop-up-it |
| `show_previous_button` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Shfaq një buton "mbrapa" pranë butonit të mbylljes dhe navigon te pop-up-i i mëparshëm kur është i disponueshëm |
| `show_close_button` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Shfaq ose fsheh butonin e mbylljes duke mbajtur pjesën tjetër të kokës të dukshme |
| `buttons_position` | string | Opsionale | `right` (parazgjedhje) ose `left` | Pozicioni i butonave të mbylljes dhe "mbrapa" në kokë |
| `cards` | list | Opsionale | Çdo kartë Bubble Card, kartë Home Assistant ose kartë e personalizuar | Përcakton përmbajtjen e pop-up-it tuaj. Shihni shembullin e pop-up-it më poshtë. |
| Gjithashtu keni akses tek [të gjitha cilësimet e butonit](#buton) për kokën e pop-up-it. | | Opsionale | | Nëse nuk përcaktohet, nuk do të shfaqet asnjë kokë |

</details>

<details>

<summary><b>Variablat CSS (shihni <a href="#stili">Stilin</a>)</b></summary>

| Variabla | Vlera e pritur | Përshkrimi |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Rrezja e cepave për pop-up-in |
| `--bubble-pop-up-main-background-color` | `color` | Ngjyra kryesore e sfondit për elementet e mbështetura të pop-up-it |
| `--bubble-pop-up-background-color` | `color` | Ngjyra e sfondit të pop-up-it |
| `--bubble-backdrop-background-color` | `color` | Ngjyra e sfondit për backdrop-in |
| Gjithashtu keni akses tek [të gjitha variablat CSS të butonit](#opsionet-e-butonit) për kokën e pop-up-it. | | |

</details>


### Formati i pop-up-it të pavarur (v3.2.0+)

Që nga v3.2.0, pop-up-et përdorin një format të ri të pavarur ku kartat e përmbajtjes përcaktohen direkt brenda pop-up-it duke përdorur opsionin `cards`. Kjo ofron performancë më të mirë dhe një përvojë të re editimi drag-and-drop bazuar në seksione.


#### Shembuj

<details>

<summary>Një pop-up (formati i pavarur)</summary>

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

<summary>Një buton për të hapur pop-up-in</summary>

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

## Rresht horizontal butonash

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Kjo kartë është një shoqëruese e mirë për kartën pop-up, duke ju lejuar të hapni pop-up-et përkatëse. Ju lejon gjithashtu të hapni çdo faqe të dashboard-it tuaj. Përveç kësaj, mund të shtoni sensorët tuaj të lëvizjes/pranisë në mënyrë që renditja e butonave të përshtatet sipas dhomës ku sapo keni hyrë. Kjo kartë mund të rrëshqitet, mbetet e dukshme dhe funksionon si një footer.

> [!IMPORTANT]  
> Kjo kartë duhet të jetë e fundit në pamjen tuaj (pas çdo karte dhe pop-up-i). Nuk mund të jetë brenda asnjë stack-u.

### Opsionet e rreshtit horizontal butonash

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Emri | Lloji | Kërkesa | Opsionet e mbështetura | Përshkrimi |
| --- | --- | --- | --- | --- |
| `1_link` | string | **E detyrueshme** | Hash-i i pop-up-it (p.sh. `'#kitchen'`) me ' ' ose çdo lidhje | Një lidhje për t'u hapur |
| `1_name` | string | Opsionale | Çdo string | Një emër për butonin tuaj |
| `1_icon` | string | Opsionale | Çdo ikonë `mdi:` | Një ikonë për butonin tuaj |
| `1_entity` | string | Opsionale | Çdo dritë ose grup dritash | Shfaq ngjyrën e asaj drite në sfond |
| `1_pir_sensor` | string | Opsionale | Çdo sensor binar | Të paktën një sensor pir ose më shumë për `auto_order`, në fakt funksionon edhe me çdo lloj entiteti, për shembull mund të shtoni grupe dritash dhe renditja do të ndryshojë bazuar në gjendjet e ndryshuara së fundmi. |
| `auto_order` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Ndryshon renditjen e butonave sipas kohës së fundit të ndryshimit të `_pir_sensor`, **duhet të jetë `false` nëse nuk keni asnjë `_pir_sensor` në kodin tuaj** |
| `margin` | string | Opsionale | Çdo vlerë CSS | Përdoreni këtë **vetëm** nëse `horizontal-buttons-stack` juaj nuk është e qendërzuar mirë në mobile (p.sh. `13px`) |
| `width_desktop` | string | Opsionale | Çdo vlerë CSS | Gjerësia në desktop (`100%` si parazgjedhje në mobile) |
| `is_sidebar_hidden` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Rregullon pozicionin e rreshtit horizontal butonash nëse shiriti anësor është i fshehur në desktop (vetëm nëse e keni modifikuar vetë për ta fshehur) |
| `rise_animation` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Vendoseni këtë në `false` për të çaktivizuar animacionin që aktivizohet pasi faqja të jetë ngarkuar |
| `highlight_current_view` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Thekson hash-in / pamjen aktuale me një animacion të butë |
| `hide_gradient` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Vendoseni këtë në `false` për të fshehur gradientin |

> [!IMPORTANT]  
> Variablat që fillojnë me një numër përcaktojnë butonat tuaj, thjesht ndryshoni këtë numër për të shtuar më shumë butona (shihni shembullin më poshtë).

</details>

<details>

<summary><b>Variablat CSS (shihni <a href="#stili">Stilin</a>)</b></summary>

| Variabla | Vlera e pritur | Përshkrimi |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Rrezja e cepave për butonat e rreshtit horizontal butonash |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Ngjyra e sfondit për butonat e rreshtit horizontal butonash |

</details>


#### Shembull

<details>

<summary>Një rresht horizontal butonash që riorganizohet vetë bazuar në sensorët e pranisë</summary>

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

## Buton

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Kjo kartë është shumë e gjithanshme. Mund të përdoret si **çelës (switch)**, si **rrëshqitës (slider)**, si **gjendje (state)** ose si buton **emri/teksti**.

> [!TIP]
> ### Cilat janë ndryshimet mes të gjitha llojeve të butonave?
>
> - **Butoni çelës (switch):** Ky është lloji i paracaktuar i butonit. Në mënyrë të paracaktuar, ai ndryshon gjendjen e një entiteti dhe ngjyra e sfondit të tij ndryshon në bazë të gjendjes së entitetit ose ngjyrës së dritës. Mund ta ndryshoni veprimin e tij në seksionin **Tap action on card**.
>
> - **Butoni rrëshqitës (slider):** Ky lloj butoni ju lejon të kontrolloni entitete me diapazone të rregullueshme. Është ideal për zbutjen e dritave, dhe ngjyra e mbushjes së tij përshtatet me ngjyrën e dritës. Mund ta përdorni gjithashtu për të shfaqur vlera, si niveli i baterisë.
>   Entitetet e mbështetura për rrëshqitësit:
>   - Dritë (ndriçim)
>   - Luajtës multimedial (volum)
>   - Grilë (pozicion)
>   - Ventilator (përqindje)
>   - Klimë (temperaturë)
>   - Input number dhe number (vlerë)
>   - Sensor baterie (përqindje, vetëm për lexim)
>
>   Mund të përdorni gjithashtu çdo entitet me gjendje numerike duke çaktivizuar filtrin e entiteteve te **Slider settings**, pastaj përcaktoni vlerat `min` dhe `max`. Ky opsion është vetëm për lexim.
>
> - **Butoni gjendje (state):** Perfekt për të shfaqur informacion nga një sensor ose çdo entitet tjetër. Kur e shtypni, do të shfaqë panelin "More info" të entitetit. Ngjyra e sfondit të tij nuk ndryshon.
>
> - **Butoni emër/tekst (name):** I vetmi lloj butoni që nuk ka nevojë për entitet. Ju lejon të shfaqni një tekst të shkurtër, një emër ose një titull. Mund t'i shtoni gjithashtu veprime. Ngjyra e sfondit të tij nuk ndryshon.

### Opsionet e butonit

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Një entitet për t'u kontrolluar |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Sjellja e butonit tuaj |
| `name` | string | Optional | Any string | Një emër për butonin tuaj, nëse nuk përcaktohet do të shfaqet emri i entitetit |
| `icon` | string | Optional | Any `mdi:` icon | Një ikonë për butonin tuaj, nëse nuk përcaktohet do të shfaqet ikona e entitetit ose `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | I jep përparësi ikonës në vend të `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Vetëm për dritat.** Përdor ngjyrën e theksit (accent) të temës në vend të ngjyrës së dritës.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Shfaq ose fsheh gjendjen e `entity` tuaj |
| `show_name` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh emrin |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh ikonën |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e ndryshimit të fundit të `entity` tuaj |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e përditësimit të fundit të `entity` tuaj |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Shfaq një atribut të `entity` tuaj nën `name` e tij |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atributi që do të shfaqet (p.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lejon lëvizjen e tekstit kur përmbajtja tejkalon madhësinë e kontejnerit të tij |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Lejon të ndryshoni veprimet e paracaktuara në klikim të butonit. |
| `tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të ikonës, nëse nuk përcaktohet do të përdoret `more-info` |
| `double_tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të dyfishtë të ikonës, nëse nuk përcaktohet do të përdoret `none` |
| `hold_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit kur mbahet e shtypur ikona, nëse nuk përcaktohet do të përdoret `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shih [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Optional | Any number | Numri i rreshtave (lartësia) (p.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nën-butonat) | Shton butona të personalizuar të fiksuar në të djathtë |

</details>

<details>

<summary><b>Variablat CSS (shih <a href="#stili">Stili</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Ngjyra kryesore e sfondit për elementet e mbështetura brenda butonit |
| `--bubble-button-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për butonin |
| `--bubble-button-icon-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për kontejnerin e ikonës së butonit |
| `--bubble-button-icon-background-color` | `color` | Ngjyra e sfondit për kontejnerin e ikonës së butonit |
| `--bubble-light-white-color` | `color` | Zëvendëson ngjyrën e paracaktuar të bardhë të butonave/rrëshqitësve të dritës |
| `--bubble-light-color` | `color` | Zëvendëson ngjyrën e butonave/rrëshqitësve të dritës (edhe dritat RGB) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë (box shadow) për butonin |

</details>

Këto opsione janë të disponueshme vetëm kur `button_type` është caktuar si `slider`.

<details>

<summary><b>Opsionet e rrëshqitësit (YAML + përshkrime)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Vlera minimale e rrëshqitësit. Për rrëshqitës të personalizuar.                                                    |
| `max_value`             | number  | Optional                        | Vlera maksimale e rrëshqitësit. Për rrëshqitës të personalizuar.                                                    |
| `step`                  | number  | Optional                        | Vlera e hapit të rrëshqitësit.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Aktivizon sjelljen e mëparshme të rrëshqitësit, ku prekni për ta aktivizuar, në vend që ta mbani të shtypur.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Përditëson vlerën në raport me vlerën fillestare, jo me pikën fillestare të prekjes.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | E bën rrëshqitësin vetëm për lexim. Aktivizohet automatikisht për disa entitete si sensorët.                                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Gjendja e entitetit përditësohet gjatë rrëshqitjes. **Kjo veçori nuk rekomandohet për të gjitha entitetet.**        |
| `slider_fill_orientation` | string | Optional | `left` (default), `right`, `top`, `bottom` | Ndryshon drejtimin e mbushjes së rrëshqitësit |
| `slider_value_position` | string | Optional | `right` (default), `left`, `center`, `hidden` | Pozicioni i shfaqjes së vlerës |
| `invert_slider_value` | boolean | Optional (`false` default) | Përmbys drejtimin e rrëshqitësit (mbushja 100% korrespondon me minimumin). Nuk është e disponueshme për rrëshqitësit e ngjyrave. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Vetëm për dritat.** Zgjidh mënyrën e rrëshqitësit |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Vetëm për grilat.** Zgjidh mënyrën e rrëshqitësit (pozicion ose kënd) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Vetëm për dritat (mënyra Hue).** Detyron ngopjen (saturation) kur rregullohet Hue |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Vetëm për dritat (mënyra Hue).** Vlera e detyruar e ngopjes (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Vetëm për dritat (mënyra Brightness).** Përdor ngjyrën e theksit (accent) të temës në vend të ngjyrës së dritës |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Vetëm për dritat.** Lejon rrëshqitësin të arrijë 0%, gjë që fik dritën. Nuk është e disponueshme me `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Vetëm për dritat.** Aktivizon tranzicione të buta të ndriçimit për dritat e mbështetura.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Vetëm për dritat.** Koha e tranzicionit në milisekonda. Kërkon `light_transition: true`.            |

</details>

#### Shembuj

<details>

<summary>Një buton rrëshqitës që mund të kontrollojë ndriçimin e një drite</summary>

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

<summary>Një buton me më shumë opsione</summary>

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

## Luajtës multimedial

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Kjo kartë ju lejon të kontrolloni një entitet luajtësi multimedial.

### Opsionet e luajtësit multimedial

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Luajtësi multimedial që do të kontrollohet |
| `name` | string | Optional | Any string | Një emër për luajtësin tuaj multimedial, nëse nuk përcaktohet do të shfaqet emri i entitetit |
| `icon` | string | Optional | Any `mdi:` icon | Një ikonë për luajtësin tuaj multimedial, nëse nuk përcaktohet do të shfaqet ikona e entitetit ose `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | I jep përparësi ikonës në vend të `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Shfaq ose fsheh gjendjen e `entity` tuaj |
| `show_name` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh emrin |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh ikonën |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e ndryshimit të fundit të `entity` tuaj |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e përditësimit të fundit të `entity` tuaj |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Shfaq një atribut të `entity` tuaj nën `name` e tij |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atributi që do të shfaqet (p.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lejon lëvizjen e tekstit kur përmbajtja tejkalon madhësinë e kontejnerit të tij |
| `min_volume` | number | Optional | Any number | Vlera minimale e rrëshqitësit të volumit. |
| `max_volume` | number | Optional | Any number | Vlera maksimale e rrëshqitësit të volumit. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Përdor kopertinën e mediumit të turbulluar (blurred) si sfond të kartës. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Lejon të ndryshoni veprimet e paracaktuara në klikim të butonit. |
| `tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të ikonës, nëse nuk përcaktohet do të përdoret `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të dyfishtë të ikonës, nëse nuk përcaktohet do të përdoret `none`. |
| `hold_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit kur mbahet e shtypur ikona, nëse nuk përcaktohet do të përdoret `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Zhvendos butonat e veprimit të kopertinës në fund (të fiksuar) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Bën që butonat e veprimit në fund të zënë gjithë gjerësinë (parazgjedhje: `true` kur pozicioni është `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Rreshtimi i butonave të veprimit në fund kur nuk zënë gjithë gjerësinë |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shih [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Optional | Any number | Numri i rreshtave (lartësia) (p.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nën-butonat) | Shton butona të personalizuar të fiksuar në të djathtë |
| `hide` | object | Optional | See below | Fsheh butona nga karta |

#### Opsionet e fshehjes

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Fsheh butonin play/pause |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Fsheh butonin e volumit |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Fsheh butonin e mëparshëm |
| `next_button` | boolean | Optional | `true` or `false` (default) | Fsheh butonin tjetër |
| `power_button` | boolean | Optional | `true` or `false` (default) | Fsheh butonin e ndezjes/fikjes |

</details>

<details>

<summary><b>Variablat CSS (shih <a href="#stili">Stili</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Ngjyra kryesore e sfondit për luajtësin multimedial |
| `--bubble-media-player-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për luajtësin multimedial |
| `--bubble-media-player-buttons-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për butonat e luajtësit multimedial |
| `--bubble-media-player-slider-background-color` | `color` | Ngjyra e sfondit për rrëshqitësin e volumit |
| `--bubble-media-player-icon-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për kontejnerin e ikonës së luajtësit multimedial |
| `--bubble-media-player-icon-background-color` | `color` | Ngjyra e sfondit për kontejnerin e ikonës së luajtësit multimedial |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë (box shadow) për luajtësin multimedial |

</details>


#### Shembuj

<details>

<summary>Një luajtës multimedial me të gjitha opsionet</summary>

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

## Grila

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Kjo kartë ju lejon të kontrolloni entitetet tuaja `cover`.

### Opsionet e grilës

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Një grilë për t'u kontrolluar |
| `name` | string | Optional | Any string | Një emër për grilën tuaj, nëse nuk përcaktohet do të shfaqet emri i entitetit |
| `force_icon` | boolean | Optional | `true` or `false` (default) | I jep përparësi ikonës në vend të `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Shfaq ose fsheh gjendjen e `entity` tuaj |
| `show_name` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh emrin |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh ikonën |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e ndryshimit të fundit të `entity` tuaj |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e përditësimit të fundit të `entity` tuaj |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Shfaq një atribut të `entity` tuaj nën `name` e tij |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atributi që do të shfaqet (p.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lejon lëvizjen e tekstit kur përmbajtja tejkalon madhësinë e kontejnerit të tij |
| `icon_open` | string | Optional | Any `mdi:` icon | Një ikonë për grilën tuaj të hapur, nëse nuk përcaktohet do të shfaqet ikona e paracaktuar e grilës së hapur |
| `icon_close` | string | Optional | Any `mdi:` icon | Një ikonë për grilën tuaj të mbyllur, nëse nuk përcaktohet do të shfaqet ikona e paracaktuar e grilës së mbyllur |
| `icon_up` | string | Optional | Any `mdi:` icon | Një ikonë për butonin e hapjes së grilës, nëse nuk përcaktohet do të shfaqet ikona e paracaktuar e grilës së hapur |
| `icon_down` | string | Optional | Any `mdi:` icon | Një ikonë për butonin e mbylljes së grilës, nëse nuk përcaktohet do të shfaqet ikona e paracaktuar e grilës së mbyllur |
| `open_service` | string | Optional | Any service or script | Një shërbim për të hapur grilën tuaj, i paracaktuar në `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Një shërbim për të ndaluar grilën tuaj, i paracaktuar në `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Një shërbim për të mbyllur grilën tuaj, i paracaktuar në `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Pozicioni i butonave të kontrollit të këndit (shfaqet vetëm nëse grila mbështet kënd) |
| `open_tilt_service` | string | Optional | Any service or script | Një shërbim për të hapur këndin, i paracaktuar në `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Një shërbim për të mbyllur këndin, i paracaktuar në `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Lejon të ndryshoni veprimet e paracaktuara në klikim të butonit. |
| `tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të ikonës, nëse nuk përcaktohet do të përdoret `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të dyfishtë të ikonës, nëse nuk përcaktohet do të përdoret `none`. |
| `hold_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit kur mbahet e shtypur ikona, nëse nuk përcaktohet do të përdoret `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Zhvendos kontrollet e mediumit në fund (të fiksuar) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Bën që kontrollet në fund të zënë gjithë gjerësinë (parazgjedhje: `true` kur pozicioni është `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Rreshtimi i kontrolleve në fund kur nuk zënë gjithë gjerësinë |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shih [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Optional | Any number | Numri i rreshtave (lartësia) (p.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nën-butonat) | Shton butona të personalizuar të fiksuar në të djathtë |

</details>

<details>

<summary><b>Variablat CSS (shih <a href="#stili">Stili</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Ngjyra kryesore e sfondit për elementet e mbështetura brenda kartës së grilës |
| `--bubble-cover-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për kartën e grilës |
| `--bubble-cover-icon-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për kontejnerin e ikonës së kartës së grilës |
| `--bubble-cover-icon-background-color` | `color` | Ngjyra e sfondit për kontejnerin e ikonës së kartës së grilës |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë (box shadow) për kartën e grilës |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë (box shadow) për butonat brenda kartës së grilës |

</details>


#### Shembull

<details>

<summary>Një kartë që mund të kontrollojë një grilë me rul</summary>

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

## Përzgjedhje

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Kjo kartë ju lejon të shtoni një menu rënëse (dropdown) për entitetet tuaja `input_select` / `select`. Kjo kartë mbështet gjithashtu nën-butonat dhe të gjitha veçoritë e zakonshme të Bubble Card.

> [!TIP]
> Mund të keni gjithashtu nën-butona përzgjedhjeje nëse dëshironi, kjo veçori është e disponueshme në të gjitha kartat që mbështesin nën-butonat.

### Opsionet e përzgjedhjes

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Një entitet për t'u kontrolluar |
| `name` | string | Optional | Any string | Një emër për përzgjedhjen tuaj, nëse nuk përcaktohet do të shfaqet emri i entitetit |
| `icon` | string | Optional | Any `mdi:` icon | Një ikonë për përzgjedhjen tuaj, nëse nuk përcaktohet do të shfaqet ikona e entitetit ose `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | I jep përparësi ikonës në vend të `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Shfaq ose fsheh gjendjen e `entity` tuaj |
| `show_name` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh emrin |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Shfaq ose fsheh ikonën |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e ndryshimit të fundit të `entity` tuaj |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Shfaq kohën e përditësimit të fundit të `entity` tuaj |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Shfaq një atribut të `entity` tuaj nën `name` e tij |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atributi që do të shfaqet (p.sh. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Lejon lëvizjen e tekstit kur përmbajtja tejkalon madhësinë e kontejnerit të tij |
| `tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të ikonës, nëse nuk përcaktohet do të përdoret `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të dyfishtë të ikonës, nëse nuk përcaktohet do të përdoret `none`. |
| `hold_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit kur mbahet e shtypur ikona, nëse nuk përcaktohet do të përdoret `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shih [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Optional | Any number | Numri i rreshtave (lartësia) (p.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nën-butonat) | Shton butona të personalizuar të fiksuar në të djathtë |

</details>

<details>

<summary><b>Variablat CSS (shih <a href="#stili">Stili</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Ngjyra kryesore e sfondit për elementet e mbështetura brenda kartës së përzgjedhjes |
| `--bubble-select-background-color` | `color` | Ngjyra e sfondit për kartën e përzgjedhjes |
| `--bubble-select-list-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për menunë rënëse në kartë |
| `--bubble-select-list-item-accent-color` | `color` | Ngjyra e theksit (accent) për elementin e përzgjedhur |
| `--bubble-select-list-background-color` | `color` | Ngjyra e sfondit për menunë rënëse në kartë |
| `--bubble-select-list-width` | `px` | Gjerësia e menusë rënëse në kartë |
| `--bubble-select-arrow-background-color` | `color` | Ngjyra e sfondit për shigjetën e menusë rënëse |
| `--bubble-select-button-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për butonin e përzgjedhjes |
| `--bubble-select-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për kartën e përzgjedhjes |
| `--bubble-select-icon-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për kontejnerin e ikonës së kartës së përzgjedhjes |
| `--bubble-select-icon-background-color` | `color` | Ngjyra e sfondit për kontejnerin e ikonës së kartës së përzgjedhjes |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë (box shadow) për kartën e përzgjedhjes |

</details>


#### Shembuj

<details>

<summary>Një kartë përzgjedhjeje me një listë skenash</summary>

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

Kjo kartë ju lejon të kontrolloni entitetet tuaja `climate`.

> [!TIP]
> Menyja e përzgjedhjes së mënyrës është një [nën-buton](#nën-butonat) që shtohet automatikisht kur krijohet karta. Mund ta modifikoni ose ta hiqni pastaj sipas dëshirës.

### Opsionet e klimës

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Entiteti që do të kontrollohet (p.sh. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Një emër i personalizuar për kartën. Nëse nuk përcaktohet, do të shfaqet emri i entitetit.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Një ikonë e personalizuar për kartën. Nëse nuk përcaktohet, do të përdoret ikona e entitetit ose `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | I jep përparësi ikonës në vend të `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Shfaq ose fsheh gjendjen aktuale të `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Shfaq ose fsheh emrin e entitetit.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Shfaq ose fsheh ikonën.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Fsheh kontrollin e temperaturës minimale të synuar, nëse mbështetet nga `entity`.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Fsheh kontrollin e temperaturës maksimale të synuar, nëse mbështetet nga `entity`.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Aplikon një ngjyrë të vazhdueshme sfondi kur entiteti i klimës është i ndezur (ON).                                                              |
| `step` | number | Optional | Any number | Hapi i temperaturës. |
| `min_temp` | number | Optional | Any number | Temperatura minimale. |
| `max_temp` | number | Optional | Any number | Temperatura maksimale. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Lejon të ndryshoni veprimet e paracaktuara në klikim të butonit. |
| `tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të ikonës, nëse nuk përcaktohet do të përdoret `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të dyfishtë të ikonës, nëse nuk përcaktohet do të përdoret `none`. |
| `hold_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit kur mbahet e shtypur ikona, nëse nuk përcaktohet do të përdoret `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Zhvendos butonat e veprimit të klimës në fund (të fiksuar) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Bën që butonat e veprimit në fund të zënë gjithë gjerësinë (parazgjedhje: `true` kur pozicioni është `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Rreshtimi i butonave të veprimit në fund kur nuk zënë gjithë gjerësinë |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shih [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Optional | Any number | Numri i rreshtave (lartësia) (p.sh. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#nën-butonat)                | Shton butona të personalizuar të fiksuar në të djathtë. E dobishme për një menu përzgjedhjeje të mënyrës së klimës.                                  |

</details>

<details>

<summary><b>Variablat CSS (shih <a href="#stili">Stili</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Ngjyra kryesore e sfondit për elementet e mbështetura brenda kartës së klimës |
| `--bubble-climate-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për elementet e mbështetura të kartës së klimës |
| `--bubble-climate-button-background-color` | `color` | Ngjyra e sfondit për butonat e kartës së klimës |
| `--bubble-climate-icon-border-radius` | `px` | Rrezja e cepave të rrumbullakosur për kontejnerin e ikonës së kartës së klimës |
| `--bubble-state-climate-fan-only-color` | `color` | Ngjyra mbivendosëse për gjendjen vetëm-ventilator |
| `--bubble-state-climate-dry-color` | `color` | Ngjyra mbivendosëse për gjendjen tharje |
| `--bubble-state-climate-cool-color` | `color` | Ngjyra mbivendosëse për gjendjen ftohje |
| `--bubble-state-climate-heat-color` | `color` | Ngjyra mbivendosëse për gjendjen ngrohje |
| `--bubble-state-climate-auto-color` | `color` | Ngjyra mbivendosëse për gjendjen automatike |
| `--bubble-state-climate-heat-cool-color` | `color` | Ngjyra mbivendosëse për gjendjen ngrohje-ftohje |
| `--bubble-climate-accent-color` | `color` | Ngjyra e theksit (accent) për kartën e klimës |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë (box shadow) për kontejnerin e klimës. |

</details>


#### Shembuj

<details>

<summary>Një kartë klime me një menu rënëse të mënyrave HVAC</summary>

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

## Kalendar

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Kjo kartë ju lejon të shfaqni entitetet tuaja të kalendarit. Përmbajtja e saj mund të lëvizet (scrollable), kështu që mund të shfletoni lehtësisht ngjarjet e ardhshme.

### Opsionet e kalendarit

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Numri i ditëve të kalendarit për të cilat merren ngjarjet, nga tani deri në fund të ditës N (parazgjedhje: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Entiteti që do të kontrollohet (p.sh. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Entiteti i kalendarit që do të shfaqet                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Një ngjyrë e personalizuar për etiketën (chip) e kalendarit. Nëse nuk përcaktohet, do të zgjidhet automatikisht një ngjyrë |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Numri i ditëve të kalendarit për të cilat merren ngjarjet, nga tani deri në fund të ditës N (parazgjedhje: 7) |
| `limit`             | number  | Optional     | A number                                        | Numri i ngjarjeve që do të shfaqen në kartë                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Shfaq ose fsheh kohën e përfundimit të ngjarjeve                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Shfaq ose fsheh shiritin e progresit të ngjarjes                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Shfaq ose fsheh ngjarjet që janë aktualisht në zhvillim                                                 |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Lejon lëvizjen e tekstit kur përmbajtja tejkalon madhësinë e kontejnerit të tij |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Lejon shtimin e veprimeve në klikim të ngjarjes. |
| `tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të ditës, nëse nuk përcaktohet do të përdoret `none`. |
| `double_tap_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit në klikim të dyfishtë të ditës, nëse nuk përcaktohet do të përdoret `none`. |
| `hold_action` | object | Optional | See [actions](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcakton llojin e veprimit kur mbahet e shtypur dita, nëse nuk përcaktohet do të përdoret `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shih [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Optional | Any number | Numri i rreshtave (lartësia) (p.sh. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nën-butonat) | Shton butona të personalizuar të fiksuar në të djathtë |

</details>

<details>

<summary><b>Variablat CSS (shih <a href="#stili">Stili</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Ngjyra kryesore e sfondit për elementet e mbështetura brenda kartës së kalendarit  |
| `--bubble-calendar-border-radius`         | `px`           | Rrezja e cepave të rrumbullakosur për elementet e mbështetura të kartës së kalendarit |
| `--bubble-calendar-height`                | `px`           | Lartësia e kartës së kalendarit                                        |

</details>

#### Shembuj

<details>

<summary>Një kartë kalendari me një numër të kufizuar ngjarjesh</summary>

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

<summary>Një kartë kalendari me kohën e përfundimit dhe një shirit progresi</summary>

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


## Ndarës

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Kjo kartë është një ndarës i thjeshtë për ta ndarë pop-up-in tuaj në kategori/seksione, p.sh. Ndriçim, Pajisje, Grila, Cilësime, Automatizime...

### Opsionet e ndarësit

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Emri | Lloji | Kërkesa | Opsionet e mbështetura | Përshkrimi |
| --- | --- | --- | --- | --- |
| `name` | string | Opsionale, por e rekomanduar | Çdo string | Një emër për ndarësin tuaj |
| `icon` | string | Opsionale, por e rekomanduar | Çdo ikonë `mdi:` | Një ikonë për ndarësin tuaj |
| `card_layout` | string | Opsionale | `normal` (parazgjedhja nëse nuk jeni në pamjen e seksioneve), `large` (parazgjedhja nëse jeni në pamjen e seksioneve), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shihni [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Opsionale | Çdo numër | Numri i rreshtave (lartësia) (p.sh. `2`) |
| `sub_button` | object | Opsionale | Shihni [nën-butonat](#nën-butonat) | Shtoni butona të personalizuar të fiksuar në të djathtë |

</details>

<details>

<summary><b>Variablat CSS (shihni <a href="#styling">Stili</a>)</b></summary>

| Variabli | Vlera e pritur | Përshkrimi |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Ngjyra e sfondit për vijën në ndarës |

</details>

#### Shembull

<details>

<summary>Një ndarës/vijëndarës për një seksion "Grila"</summary>

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

## Kolonë bosh

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Kjo kartë shërben për të mbushur një kolonë bosh. Kjo është e dobishme nëse keni një `horizontal-stack` në pop-up-in tuaj me vetëm një kartë. Hidhini një sy këndit të poshtëm djathtas të kësaj pamjeje ekrani për ta (mos) parë.

### Opsionet e kolonës boshe

Kjo kartë nuk ka opsione dhe nuk mbështet [stilizimin](#stili), megjithatë mbështet opsionet e faqosjes për seksionet e HA.

#### Shembull

<details>

<summary>Një kolonë bosh brenda një rreshti horizontal</summary>

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

## Vetëm nën-butona

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Kjo kartë i dedikohet vetëm nën-butonave. Është e përsosur për menu, veprime të shpejta, çipa informativë ose një fusnotë të fiksuar në fund të faqes.

> [!IMPORTANT]  
> Kjo kartë përdor skemën e re të nën-butonave. Përdorni `sub_button.bottom` për t'i përcaktuar butonat tuaj. Seksioni `sub_button.main` shpërfillet.

### Opsionet e "vetëm nën-butona"

<details>

<summary><b>Opsionet (YAML + përshkrime)</b></summary>

| Emri | Lloji | Kërkesa | Opsionet e mbështetura | Përshkrimi |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **E detyrueshme** | Shihni [nën-butonat](#nën-butonat) | Përcaktoni nën-butonat tuaj duke përdorur seksionin `bottom` |
| `hide_main_background` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Hiqni sfondin e kartës |
| `footer_mode` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Fiksoni kartën në fund të faqes |
| `footer_full_width` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Bëjeni fusnotën me gjerësi të plotë (100%) |
| `footer_width` | number | Opsionale | Çdo numër | Gjerësia e fusnotës në piksela kur `footer_full_width` është `false` |
| `footer_bottom_offset` | number | Opsionale | Çdo numër | Distanca nga fundi i faqes në piksela (parazgjedhje: `16`) |
| `card_layout` | string | Opsionale | `normal` (parazgjedhja nëse nuk jeni në pamjen e seksioneve), `large` (parazgjedhja nëse jeni në pamjen e seksioneve), `large-2-rows`, `large-sub-buttons-grid` | Faqosja stilistike e kartës, shihni [faqosjet e kartës](#faqosjet-e-kartës) |
| `rows` | number | Opsionale | Çdo numër | Numri i rreshtave (lartësia) (p.sh. `2`) |

</details>

<details>

<summary><b>Variablat CSS (shihni <a href="#styling">Stili</a>)</b></summary>

| Variabli | Vlera e pritur | Përshkrimi |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Gjerësia e fusnotës kur `footer_full_width` është `false` |
| `--bubble-footer-bottom` | `px` | Zhvendosja e fusnotës nga fundi |
| `--bubble-footer-box-shadow` | shihni [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hija e kutisë për kontejnerin e fusnotës |

</details>

#### Shembuj

<details>

<summary>Çipa (si në pamjen e ekranit)</summary>

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

<summary>Një menu fusnote e fiksuar</summary>

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

## Nën-butonat

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Në çdo kartë që e mbështet këtë opsion, mund të shtoni nën-butona për ta personalizuar edhe më shumë kartën tuaj. Mund të krijoni, për shembull, një buton që kontrollon një fshesë robotike, një kartë moti, ose pothuajse çdo gjë që mund t'ju vijë ndër mend. Këta nën-butona mbështesin veprimet e prekjes dhe shumicën e opsioneve të butonit.

Nën-butonat tani mbështesin tri lloje: **Parazgjedhje (buton)**, **Rrëshqitës** dhe **Menu rënëse/Përzgjedhje**. Mund t'i përzieni llojet në të njëjtën kartë, t'i vendosni nën-butonat lart ose poshtë, dhe t'i organizoni në grupe për faqosje më të avancuara.

#### Vendosja e nën-butonave dhe grupet

<details>

<summary><b>Struktura e nën-butonave (main / bottom + grupe)</b></summary>

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

**Shënime:**
- `main` dhe `bottom` janë dy seksione të pavarura. Nën-butonat e `bottom` janë të fiksuar në fund të kartës.
- `main_layout` dhe `bottom_layout` pranojnë `inline` (parazgjedhje) ose `rows` për t'i vendosur grupet njëri mbi tjetrin.
- Grupet janë objekte me një varg `group` dhe një `buttons_layout` opsionale (`inline` ose `column`).
- `justify_content` është e disponueshme **vetëm për grupet e bottom** (`start`, `center`, `end`, `fill`).
- Kur ka nën-butona `bottom` të pranishëm, faqosja e kartës kalon automatikisht në `large`, përveçse nëse caktoni shprehimisht një faqosje tjetër.
- Vargjet e vjetra `sub_button` mbështeten ende dhe trajtohen si seksioni `main`.

</details>

### Opsionet e nën-butonave

<details>

<summary><b>Opsionet (YAML + përshkrim)</b></summary>

| Emri | Lloji | Kërkesa | Opsionet e mbështetura | Përshkrimi |
| --- | --- | --- | --- | --- |
| `entity` | string | Opsionale | Çdo entitet | Një entitet që do të kontrollohet |
| `name` | string | Opsionale | Çdo string | Një emër për nën-butonin tuaj, nëse nuk përcaktohet do të shfaqet emri i entitetit |
| `icon` | string | Opsionale | Çdo ikonë `mdi:` | Një ikonë për nën-butonin tuaj, nëse nuk përcaktohet do të shfaqet ikona e entitetit ose fotoja e tij |
| `force_icon` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Detyro shfaqjen e ikonës edhe nëse ka një foto entiteti të disponueshme |
| `sub_button_type` | string | Opsionale | `default`, `slider` ose `select` | Zgjidhni llojin e nën-butonit |
| `show_background` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Shfaq një sfond për nën-butonin tuaj, i cili ndryshon ngjyrë sipas gjendjes së entitetit |
| `state_background` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Përdor ngjyrën e gjendjes kur entiteti është `on` |
| `light_background` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Përdor ngjyrën e dritës për sfondin kur është e disponueshme |
| `show_state` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Shfaq ose fsheh gjendjen e `entity`-it tuaj |
| `show_name` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Shfaq ose fsheh emrin |
| `show_icon` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Shfaq ose fsheh ikonën |
| `show_last_changed` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Shfaq kohën e fundit të ndryshimit të `entity`-it tuaj |
| `show_last_updated` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Shfaq kohën e fundit të përditësimit të `entity`-it tuaj |
| `show_attribute` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Shfaq një atribut të `entity`-it tuaj poshtë `name`-it |
| `attribute` | string | Opsionale (e detyrueshme nëse `show_attribute` është vendosur në `true`) | Një atribut nga `entity`-i juaj | Atributi që do të shfaqet (p.sh. `brightness`) |
| `select_attribute` | string | Opsionale | Një listë atributesh nga `entity`-i juaj (shihni opsionet e mbështetura më sipër) | Kjo listë atributesh do të hapë një menu rënëse nëse klikohet (p.sh. `effect_list`) |
| `show_arrow` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Shfaq ose fsheh shigjetën e menusë rënëse për nën-butonat e llojit select |
| `scrolling_effect` | boolean | Opsionale | `true` (parazgjedhje) ose `false` | Lejo tekstin të rrëshqasë kur përmbajtja tejkalon madhësinë e kontejnerit |
| `tap_action` | object | Opsionale | Shihni [veprimet](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcaktoni llojin e veprimit kur klikohet nën-butoni, nëse nuk përcaktohet, do të përdoret `more-info` |
| `double_tap_action` | object | Opsionale | Shihni [veprimet](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcaktoni llojin e veprimit kur klikohet dy herë nën-butoni, nëse nuk përcaktohet, do të përdoret `none` |
| `hold_action` | object | Opsionale | Shihni [veprimet](#veprimet-e-prekjes-prekjes-së-dyfishtë-dhe-mbajtjes) | Përcaktoni llojin e veprimit kur mbahet i shtypur nën-butoni, nëse nuk përcaktohet, do të përdoret `more-info` |
| `fill_width` | boolean | Opsionale | `true` ose `false` | Mbush gjerësinë e disponueshme (parazgjedhje: `false` për main, `true` për bottom) |
| `width` | number ose string | Opsionale | Çdo numër ose gjatësi CSS | Gjerësi e personalizuar (`px` për seksionin main, `%` për seksionin bottom si parazgjedhje) |
| `custom_height` | number | Opsionale | Çdo numër | Lartësi e personalizuar në piksela |
| `content_layout` | string | Opsionale | `icon-left` (parazgjedhje), `icon-top`, `icon-bottom`, `icon-right` | Vendosja e ikonës brenda nën-butonit |
| `always_visible` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | **Vetëm për rrëshqitësin.** Shfaq gjithmonë rrëshqitësin, në vend që të hapet me prekje |
| `show_button_info` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | **Vetëm për rrëshqitësin.** Shfaq ikonën/emrin/gjendjen kur `always_visible` është aktivizuar |
| `visibility` | object ose list | Opsionale | Shihni [kushtet](https://www.home-assistant.io/docs/scripts/conditions/) | Shfaq ose fsheh nën-butonin sipas kushteve |
| `hide_when_parent_unavailable` | boolean | Opsionale | `true` ose `false` (parazgjedhje) | Fshih nën-butonin nëse entiteti i kartës prind është i padisponueshëm |

</details>

<details>

<summary><b>Opsionet e nën-butonit rrëshqitës (njësoj si rrëshqitësit e butonit)</b></summary>

<br>

Nën-butonat e llojit rrëshqitës mbështesin të njëjtat opsione si rrëshqitësit e butonit, duke përfshirë:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variablat CSS (shihni <a href="#styling">Stili</a>)</b></summary>

| Variabli | Vlera e pritur | Përshkrimi |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Rrezja e këndeve për nën-butonat |
| `--bubble-sub-button-background-color` | `color` | Ngjyra e sfondit për nën-butonat |
| `--bubble-sub-slider-border-radius` | `px` | Rrezja e këndeve për nën-butonat rrëshqitës |
| `--bubble-sub-slider-background-color` | `color` | Ngjyra e sfondit për nën-butonat rrëshqitës |
| `--bubble-sub-slider-height` | `px` | Lartësia për nën-butonat rrëshqitës gjithmonë të dukshëm |
| `--bubble-sub-button-dark-text-color` | `color` | Ngjyra e tekstit mbi sfonde të ndritshme të nën-butonit |

</details>

#### Shembuj

<details>

<summary>Një buton me disa nën-butona për të bërë një kartë fshese robotike (si në pamjen e ekranit)</summary>

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

<summary>Një rrëshqitës butoni me një nën-buton që shfaq shndritshmërinë dhe një tjetër që ndez/fik dritën (si në pamjen e ekranit)</summary>

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

<summary>Një buton që shfaq temperaturën e brendshme dhe të jashtme me motin për sot dhe nesër (me pamje ekrani të përfshirë)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Fatkeqësisht për mua është kohë me re gjithmonë, por të gjitha ikonat ndryshojnë sipas motit.

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

## Faqosjet e kartës

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card mbështet plotësisht pamjen e seksioneve të Home Assistant, mund ta ndryshoni faqosjen e kartës për ta bërë kartën më të madhe dhe gjithashtu të ndryshoni numrin e kolonave ose rreshtave që duhet të zërë karta në pamjen tuaj të seksioneve (vetëm te kartat që e mbështesin këtë opsion). Këto faqosje mbështeten gjithashtu në të gjitha llojet e tjera të pamjes.

<details>

<summary><b>Faqosjet e disponueshme të kartës</b></summary>

| Faqosja | Përshkrimi |
| --- | --- |
| `normal` | Faqosja e zakonshme (nuk është e optimizuar për pamjen e seksioneve) |
| `large` | Një faqosje më e madhe që do të përshtatet me rreshtat e zgjedhur në pamjen e seksioneve (e optimizuar për pamjen e seksioneve) |
| `large-2-rows` | Një faqosje më e madhe me 2 rreshta nën-butonash që do të përshtatet me rreshtat e zgjedhur në pamjen e seksioneve (e optimizuar për pamjen e seksioneve) |
| `large-sub-buttons-grid` | Kjo faqosje i shfaq nën-butonat në një rrjetë, `rows` duhet vendosur në të paktën `2`.

</details>

#### Shembuj

<details>

<summary>Një buton i madh që shfaq statistikat e energjisë me 2 rreshta nën-butonash (me pamje ekrani të përfshirë)</summary>

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

<summary>Një buton i madh me shumë rreshta dhe 12 nën-butona</summary>

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

## Veprimet e prekjes, prekjes së dyfishtë dhe mbajtjes

Mund të përdorni gjithashtu veprimet e parazgjedhura të Home Assistant për prekjen, prekjen e dyfishtë dhe mbajtjen, tek kartat që e mbështesin këtë opsion. Për shembull, kjo ju lejon të shfaqni dritaren "më shumë informacion" duke mbajtur ikonën e një butoni, ose të nisni një shërbim kur shtypet një nën-buton.

**Shënim: Kur `double_tap_action` është konfiguruar, `tap_action` e zakonshme do të ketë një vonesë prej 200ms për të mundësuar zbulimin
e një prekjeje të dyfishtë. Nëse kjo vonesë nuk është e dëshirueshme, vendoseni `double_tap_action` në `none` për ta çaktivizuar trajtimin e prekjes së dyfishtë.**

### Opsionet e veprimit

<details>

<summary><b>Opsionet (YAML + përshkrim)</b></summary>

| Emri | Lloji | Opsionet e mbështetura | Përshkrimi |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Veprimi që do të kryhet |
| `target` | object |  | Funksionon vetëm me `call-service`. Ndjek [sintaksën e home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Çdo shteg i panelit tuaj | Shtegu ku do të kalohet (p.sh. `'#kitchen'` për të hapur një pop-up) kur veprimi është përcaktuar si navigate |
| `url_path` | string | Çdo lidhje | URL që hapet me klikim (p.sh. `https://www.google.com`) kur veprimi është `url` |
| `service` | string | Çdo shërbim | Shërbimi që do të thirret (p.sh. `media_player.media_play_pause`) kur `action` është përcaktuar si `call-service` |
| `data` ose `service_data` | object | Çdo të dhënë shërbimi | Të dhënat e shërbimit që do të përfshihen (p.sh. `entity_id: media_player.kitchen`) kur `action` është përcaktuar si `call-service` |
| `confirmation` | object | Shihni [konfirmimin](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Shfaq një pop-up konfirmimi (jo atë të Bubble Card), zëvendëson objektin e parazgjedhur `confirmation` |

</details>

#### Shembull

<details>

<summary>Një buton për të hapur një pop-up</summary>

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

## Stili

Mund të shtoni stile të personalizuara për të modifikuar CSS-në e të gjitha kartave **pa përdorur card-mod** në katër mënyra:

- Në editor, shkoni te karta që doni ta modifikoni, pastaj navigoni te _Opsionet e stilit > Stile të personalizuara & shabllone JS_, dhe shtoni stilet tuaja të personalizuara (shikoni këshillat dhe shembujt më poshtë).
- Në editor (ose në [YAML](#modulet)), shkoni te karta që doni ta modifikoni, pastaj navigoni te _Modulet_, pastaj krijoni një modul të ri (do të jetë i disponueshëm për të gjitha kartat), ose shkoni te **Module Store** për të instaluar çdo Modul të disponueshëm (më shumë detaje rreth moduleve mund t'i gjeni [më poshtë](#modulet)).
- Në një skedar [teme](https://www.home-assistant.io/integrations/frontend/#defining-themes) duke shtuar variabla CSS në YAML (këto janë të disponueshme në dokumentacionin e çdo karte më sipër). Kjo lejon modifikime globale.

  <details>
  
  <summary>Shembull</a></summary>
  
  <br>

  Mos e kopjoni rreshtin `Bubble:`, ky është emri i temës që përdorni. Duhet gjithashtu të hiqni `--` nga variablat.

  Duhet të ekzekutoni veprimin [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) për të rifreskuar temën pas çdo modifikimi.

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
  
- Në YAML duke shtuar `styles: |` të ndjekur nga stilet tuaja të personalizuara (shikoni këshillat dhe shembujt më poshtë).

> [!TIP]  
> **Për të kuptuar cilat klasa stili mund të modifikohen**, mund të hidhni një sy te dosja [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) në këtë depo. Në çdo dosje karte, do të gjeni një skedar të quajtur `styles.css`. Këto skedarë përmbajnë të gjitha stilet e aplikuara. Kjo lejon shumë më tepër mundësi sesa variablat CSS, por duhet shtuar individualisht për çdo kartë.
> 
> Mund të gjeni gjithashtu shumë [shembuj nga komuniteti](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ose disa nga [forumi i Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) duke kërkuar pak.
>
> Tema Bubble për Home Assistant (siç shihet në pamjet e ekranit) mund të gjendet [këtu](https://github.com/Clooos/Bubble).
>
> Një video tutorial vjen së shpejti në [kanalin tim YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Ju lutemi vini re se mund t'ju duhet të shtoni `!important;` te disa stile CSS që janë tashmë të përcaktuara (shikoni shembujt më poshtë).

> [!TIP]  
> Nën-butonat mund të synohen nëpërmjet klasave të bazuara në emër. Për shembull, një nën-buton i quajtur "My sub-button" mund të stilizohet me `.my-sub-button`. Nën-butonat rrëshqitës (slider) ekspozojnë gjithashtu `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etj.

#### Shembuj

<details>

<summary>Ndryshimi i madhësisë së fontit të çdo Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Ndryshimi i ngjyrës së sfondit të një butoni të vetëm në një rresht horizontal butonash</summary>

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

<summary>Ndryshimi i ngjyrës së sfondit të një karte</summary>

<br>

Ky funksionon në të gjitha llojet e Bubble Card (përveç pop-up-eve):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ky bën të njëjtën gjë vetëm në një kartë butoni (funksionon edhe për kokën e pop-up-it): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Për të ndryshuar ngjyrën kur është `on`, shikoni shabllonet e stilit më poshtë.

</details>

<details>

<summary>Ndryshimi i ngjyrës së një rrëshqitësi (slider) butoni</summary>

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

<summary>Ndryshimi i ngjyrës së vijës së një ndarësi</summary>

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

<summary>Ndryshimi i ngjyrës së një ikone</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Për ikonën e një rreshti horizontal butonash.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Ndryshimi i ngjyrës së sfondit të një kontejneri ikone</summary>

<br>

Ky funksionon në të gjitha llojet e Bubble Card (përveç pop-up-eve):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ky bën të njëjtën gjë për kokën e pop-up-it: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Ndryshimi i madhësisë së nën-butonave (perfekte për faqosjen large)</summary>

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

<summary>Ndryshimi i ngjyrës së sfondit të nën-butonit të dytë</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ndryshimi i madhësisë së një ikone</summary>

<br>

Për ikonën kryesore.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Për ikonat e nën-butonave.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Përdorimi i një fotoje në vend të një ikone në një nën-buton</summary>

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

Thjesht ngarkoni këtë foto në një dosje "pictures" (ose emrin që doni) në dosjen "www" të Home Assistant.

</details>

<details>

<summary>Shembull i avancuar: Krijimi i një rreshti horizontal nën-butonash (me pamje ekrani)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Këtë e dua vërtet shumë, e përdor si kokë në dashboard-in tim.

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

## Shabllonet

**Bubble Card nuk mbështet shabllonet Jinja** por përdoruesit e avancuar mund të shtojnë shabllone JS drejtpërdrejt në [stilet e tyre të personalizuara](#stili). Për shembull, kjo lejon ndryshimin dinamik të një ikone, teksteve ose ngjyrave të një elementi, të shfaqësh ose fshehësh një element në mënyrë kushtore (si një nën-buton), ose pothuajse çdo gjë bazuar në një gjendje, një atribut e më shumë.

> [!TIP]  
> Më shumë informacion rreth shabllonave JS [këtu](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Këshilla ime është që **gjithmonë të hidhni një sy te konsola e shfletuesit tuaj** për t'u siguruar që gjithçka po funksionon si duhet.

> [!IMPORTANT]  
> **Të gjitha shabllonet që nuk modifikojnë një veti CSS duhet të vendosen në fund! Si ndryshimi i një ikone, një teksti ose çdo elementi.**

#### Variabla dhe funksione të disponueshme

<details>

<summary>Variabla</summary>

<br>

Keni akses te këto variabla në shumicën e kartave:

- `state` do të kthejë gjendjen e `entity`-t tuaj të përcaktuar.
  
- `entity` do të kthejë entitetin tuaj që keni përcaktuar, si `switch.test` në këtë shembull.
  
- `icon` mund të përdoret kështu për të ndryshuar ikonën `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` do të kthejë gjendjen e `entity`-t të përcaktuar për nën-butonin tuaj të parë, `[0]` është gjendja e nën-butonit të parë, `[1]` e dytë...
  
- `subButtonIcon[0]` mund të përdoret kështu për të ndryshuar ikonën e nën-butonit të parë `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` është ikona e nën-butonit të parë, `[1]` e dyta...
  
- `card` do të kthejë elementin e kartës në DOM.
  
- `hass` është një variabël e avancuar që ju jep edhe më shumë kontroll, për shembull mund të ktheni gjendjen e `light.kitchen` kështu `hass.states['light.kitchen'].state` ose një atribut kështu `hass.states[entity].attributes.brightness`.

- `this` do të kthejë shumë informacione të dobishme rreth konfigurimit dhe dashboard-it tuaj, përdoreni këtë vetëm nëse e dini çfarë po bëni.

</details>

<details>

<summary>Funksione</summary>

<br>

Keni akses te të gjitha funksionet globale JS, por gjithashtu keni akses te:

- `getWeatherIcon` mund të përdoret për të kthyer një ikonë moti bazuar në një gjendje që kthen motin. Për shembull, mund të bëni kështu `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` për të ndryshuar ikonën e nën-butonit të tretë me ikonën e motit të sotëm, `.forecast[1]?.condition` është për nesër...

  Do t'ju duhet të krijoni një sensor shabllon për këtë. Ja çfarë mund të shtoni në `configuration.yaml`:
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
- `hass.formatEntityState(state)` mund të përdoret për të përkthyer një gjendje (mund të përdoret gjithashtu për të marrë njësinë e një gjendje, pa nevojën për ta shtuar manualisht).
- `hass.formatEntityAttributeValue(state, "attribute")` mund të përdoret për të përkthyer një atribut (mund të përdoret gjithashtu për të marrë njësinë e një gjendje, pa nevojën për ta shtuar manualisht).

</details>

#### Shembuj

Mund të gjeni shumë shembuj më poshtë, por mund të gjeni gjithashtu shabllone shumë të avancuara në [faqen time Patreon](https://www.patreon.com/c/Clooos), si një (i preferuari im) që lejon deri në katër distinktivë (badges) kushtorë të vendosur rreth ikonave të kartës. Është gjithashtu një mënyrë e shkëlqyer për të mësuar rreth të gjitha mundësive të stileve dhe shablloneve të personalizuara të Bubble Card!

<details>
<summary>Shembuj nga faqja ime Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Shtimi i distinktivëve (badges) tip Home Assistant në çdo kartë</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Shfaqja e datës dhe orës të formatuara në një ndarës pa përdorur asnjë entitet</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Shfaqja e gjendjes së një nën-butoni në dy rreshta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalizimi i etiketave dhe ikonave brenda një nën-butoni select</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Shtimi i një pop-up-i kujtues të përhershëm që shfaqet vetëm kur nevojitet</a>
</p>

<br>

</details>

<details>

<summary>Ndryshimi i ngjyrës së sfondit të një butoni që është i kuq kur është <code>off</code> dhe blu kur është <code>on</code></summary>

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

<summary>Ndryshimi i ngjyrës së sfondit të një butoni bazuar në një entitet për rreshtin horizontal butonash</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Shfaqja/Fshehja e një nën-butoni në mënyrë kushtore</summary>

<br>

Ky shfaq nën-butonin e parë vetëm kur fshesa ime robotike është ngecur.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ky shfaq një nën-buton kur bateria është nën 10%. I dobishëm me një nën-buton që shfaq "Bateri e ulët".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ndryshimi i një ikone ose ikone nën-butoni në mënyrë kushtore</summary>

<br>

Ky ndryshon ikonën e një butoni vetëm kur një fshesë robotike është ngecur.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ky ndryshon ikonën e nën-butonit të parë vetëm kur një fshesë robotike është ngecur.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Ndryshimi i ngjyrës së një ikone ose ikone nën-butoni në mënyrë kushtore</summary>

<br>

Ky ndryshon ngjyrën e ikonës së një butoni bazuar në gjendjen e tij.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ky ndryshon ngjyrën e ikonës së një nën-butoni bazuar në gjendjen e tij. `.bubble-sub-button-1` është nën-butoni i parë, zëvendësoni `1` nëse doni të ndryshoni ikonën e një nën-butoni tjetër.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animimi i një ikone ventilatori në mënyrë kushtore</summary>

<br>

Ky rrotullon ikonën e një butoni kur një ventilator është `on`.
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

<summary>Shabllonimi i teksteve (si emri ose gjendja)</summary>

<br>

Ky ndryshon emrin/gjendjen e një butoni me "Aktualisht është me diell" në varësi të motit tuaj.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ose kur aplikohet për nën-butona:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Nëse doni të shabllonizoni gjendjen (`.bubble-state`) mos aktivizoni `show_state: true`, aktivizoni thjesht `show_attribute: true` pa asnjë atribut.

</details>

<details>

<summary>Shembull i avancuar: Ndryshimi i ngjyrës së një nën-butoni kur një pop-up është i hapur</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Shembull i avancuar: Shabllonimi i emrit të një ndarësi bazuar në një gjendje të përkthyer në gjuhën tuaj</summary>

<br>

Mund të përdorni `hass.formatEntityState(state)` për të përkthyer një gjendje dhe `hass.formatEntityAttributeValue(state, "attribute")` për të përkthyer një atribut.

Ky ndryshon emrin dhe ikonën bazuar në motin, "Nuageux" do të thotë "Me re" në frëngjisht.

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

## Modulet

Modulet janë një veçori e fuqishme që ju lejon të ruani, ripërdorni dhe ndani stilet dhe shabllonet tuaja të personalizuara nëpër të gjitha Bubble Card-et tuaja. Në vend që të kopjoni dhe ngjisni të njëjtin kod në disa karta, mund të krijoni një Modul dhe ta aplikoni kudo që ju nevojitet. Kjo e bën menaxhimin e pamjes dhe stilit të dashboard-it tuaj shumë më të lehtë dhe efikas.

Por kjo veçori është shumë më e fuqishme se kaq, ju lejon të shtoni vetë veçori të vërteta në editorin e Bubble Card, duke përdorur të gjitha opsionet standarde të [formularit Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Zgjedhësi i objekteve është përmirësuar për të shfaqur ndryshime në kohë reale dhe për të mbështetur atributet saktë.

Mund të shfletoni gjithashtu **Module Store** për të gjetur dhe instaluar [module të krijuara nga komuniteti](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ose të ndani krijimet tuaja!

> [!TIP]
> Kodi i një Moduli funksionon saktësisht njësoj si kodi në seksionin `styles` të një karte. Të gjitha variablat dhe funksionet e njëjta nga seksioni [Shabllonet](#shabllonet) janë të disponueshme.

<br>

### Konfigurimi Fillestar

> [!IMPORTANT]
> Duke filluar nga v3.1.0, Bubble Card Tools është backend-i i ruajtjes i rekomanduar për modulet. Metoda e vjetër me sensor shabllon vazhdon të funksionojë për konfigurimet ekzistuese, por modulet e reja dhe veçoritë e Module Store mbështeten më mirë përmes Bubble Card Tools.

Integrimi Bubble Card Tools aktivizon Module Editor-in dhe Module Store-in, dhe ruan modulet si skedarë individualë YAML. Modulet ekzistuese migrohen automatikisht.

Hapat e instalimit dhe konfigurimit shpjegohen këtu:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor-i

Mund të aksesoni Module Editor-in nga cilësimet e çdo karte, nën seksionin **Modulet**. Editori ofron dy skeda kryesore:

#### Skeda My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Kjo skedë tregon të gjitha modulet tuaja të instaluara dhe ju lejon të:

- **Aplikoni** module ekzistuese te karta aktuale
- **Krijoni** një modul të ri nga zero
- **Modifikoni** module ekzistuese me pamje paraprake në kohë reale
- **Fshini** modulet që nuk ju nevojiten më
- **Kërkoni** dhe **renditni** modulet (alfabetikisht, të fundit, aktive së pari)
- **Vendosni statusin global** për ta bërë një modul të aplikohet automatikisht te të gjitha kartat
- **Importoni/Eksportoni** module për rezervë (backup) ose ndarje

#### Skeda Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Kjo skedë do të shfaqë [të gjitha modulet e disponueshme nga komuniteti](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), dhe ju lejon të:

- **Shfletoni** të gjitha modulet e krijuara nga komuniteti
- **Kërkoni** dhe filtroni modulet sipas emrit, përputhshmërisë, ose fjalëve kyçe
- **Instaloni** module me një klikim
- **Përditësoni** modulet e instaluara kur janë të disponueshme versione të reja

> [!TIP]
> Në editor, mund të aktivizoni modulet e pambështetura për të testuar module që nuk janë ende të shënuara si të përputhshme me një lloj karte të caktuar.

<br>

### Si të përdorni modulet

#### Krijimi i një moduli të ri

<details>

<summary>Klikoni për të zgjeruar</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Shkoni te editori i çdo karte dhe zgjeroni seksionin **Modulet**.
2. Klikoni te **Create new module**.
3. Plotësoni informacionin e modulit.
4. Shkruani kodin tuaj CSS dhe/ose shabllon JavaScript në editorin **Code**.
5. (Opsionale) Krijoni një ndërfaqe konfigurimi të personalizuar në seksionin **Editor** (si zgjedhësi i ngjyrave në pamjen e ekranit më sipër, dokumentacioni i plotë i disponueshëm [këtu](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Klikoni **Save**.

Moduli juaj tani është i disponueshëm për t'u përdorur në çdo kartë tuajën!

<br>

</details>

#### Aplikimi i një moduli te një kartë

<details>

<summary>Klikoni për të zgjeruar</summary>

<br>

- **Përmes editorit:**

  - Shkoni te editori i kartës te e cila doni të aplikoni modulin.
  - Zgjeroni seksionin **Modulet**.
  - Klikoni te moduli që doni të aplikoni nga lista.
  - Nën "Apply to", klikoni te "This card". Moduli tani është aktiv. Mund të aplikoni disa module te e njëjta kartë.

- **Përmes YAML:**

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

#### Aplikimi i një moduli globalisht

<details>

<summary>Klikoni për të zgjeruar</summary>

<br>

Mund të vendosni një modul që të aplikohet automatikisht te të gjitha Bubble Card-et:

**Kjo nuk është e disponueshme për modulet me editor, pasi ato kërkojnë një konfigurim specifik për të funksionuar.**

- **Përmes editorit:**

  - Në Module Editor, gjeni modulin tuaj në skedën **My Modules**.
  - Aktivizoni butonin **All cards** pranë emrit të modulit.
  - Moduli do të aplikohet tani automatikisht te të gjitha kartat.
 
- **Përmes YAML:**

  Në konfigurimin tuaj YAML të modulit (në `bubble-modules.yaml`), thjesht shtoni `is_global: true`.

<br>

</details>

#### Përjashtimi i një karte të vetme nga një modul global

<details>

<summary>Klikoni për të zgjeruar</summary>

<br>

Nëse keni një modul global por doni ta përjashtoni nga një kartë specifike:

- **Përmes editorit:**
  
  - Në seksionin **Modulet** të kartës, do të shihni modulet globale të listuara.
  - Klikoni te një modul global, çaktivizoni "This card" për ta përjashtuar nga kjo kartë specifike.

- **Përmes YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Ndarja e modulit tuaj në Module Store

<details>

<summary>Klikoni për të zgjeruar</summary>

<br>

Për të ndarë Modulin tuaj në Module Store, në Module Editor, poshtë te "Export Module", klikoni te "Copy for GitHub" dhe ngjisni përmbajtjen në një diskutim të ri në kategorinë [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Modifikoni përshkrimin** (nëse nevojitet), **shembullin** (për përdoruesit e YAML), dhe mos harroni të **përfshini të paktën një pamje ekrani** për Module Store.

**Moduli juaj bëhet i disponueshëm menjëherë pas kësaj** (pas një rifreskimi të Store-it), pra kontrolloni dyfish që gjithçka është shkruar saktë dhe Moduli funksionon siç pritet. Mund sigurisht ta modifikoni/përditësoni Modulin pasi është ndarë.

<br>

</details>

#### Menaxhimi i versioneve

<details>

<summary>Klikoni për të zgjeruar</summary>

<br>

Module Store kontrollon automatikisht për përditësime të moduleve të instaluara. Kur ka përditësime të disponueshme:

1. Do të shihni një tregues përditësimi në skedën **Module Store**.
2. Klikoni **Update** te modulet me përditësime të disponueshme.
3. Konfirmoni përditësimin në Module Store.

<br>

</details>

#### Përcaktimi i llojeve të kartave të mbështetura

<details>

<summary>Klikoni për të zgjeruar</summary>

<br>

Disa module mund të mos jenë të përputhshme me të gjitha llojet e kartave. Mund të specifikoni cilat karta mbështet një modul.  
Nëse doni që një modul të jetë i përputhshëm me **të gjitha kartat**, thjesht hiqni fushën `supported` (ose përdorni opsionin **All cards** në editor).

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

### Shembuj

<details>
<summary>Modul bazë stilizimi</summary>

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
<summary>Modul me konfigurim të personalizuar</summary>

<br>

Ky modul është i disponueshëm [këtu](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Më shumë shembuj mund të gjenden në Module Store, ose [këtu](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Ndihmë

Mos hezitoni të hapni një issue nëse diçka nuk funksionon siç pritet. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Keni pyetje ose mendime rreth Bubble Card? Doni të ndani dashboard-et ose zbulimet tuaja? Mund të shkoni në forumin e Home Assistant, në subreddit-in e Bubble Card ose në seksionin GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Kontributi

Kontributet janë të mirëpritura! Qofshin rregullime gabimesh, veçori të reja, përkthime, ose përmirësime dokumentacioni, mos hezitoni të hapni një pull request.

Përpara se të filloni, ju lutemi lexoni [udhëzuesin për zhvilluesit](DEVELOPERS.md) i cili shpjegon si të konfiguroni mjedisin tuaj lokal, të ndërtoni projektin dhe të testoni ndryshimet tuaja.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Dhuroni

Ia kushtoj pjesën më të madhe të kohës sime të lirë që ta bëj këtë projekt sa më të mirë të jetë e mundur. Pra, nëse e vlerësoni punën time, çdo donacion do të ishte një mënyrë e shkëlqyer për të treguar mbështetjen tuaj 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Faleminderit të gjithëve për mbështetjen tuaj, ju jeni motivimi im më i madh!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
