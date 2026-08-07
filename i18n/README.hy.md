<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Այս էջը ավտոմատ թարգմանություն է։ Կասկածի դեպքում գերակայում է [անգլերեն բնօրինակ փաստաթուղթը](../README.md)։ Ինչ-որ նախադասություն սխա՞լ է հնչում։ Ցանկացած օգնություն ողջունելի է, և [այս էջը ուղղելը](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.hy.md) ընդամենը մեկ րոպե է տևում. GitHub-ն ինքն է հոգում fork-ը և pull request-ը։ Կանխավ շնորհակալություն։ 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Կարդալ սա այլ լեզվով](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card մինիմալիստական և հարմարեցվող քարտերի հավաքածու է Home Assistant-ի համար, որն ունի ժամանակակից պոպ-ապներ և ինտեգրված Module Store 100-ից ավելի համայնքային մոդուլներով։

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Բովանդակություն

**[`Տեղադրում`](#տեղադրում)**  **[`Կազմաձևում`](#կազմաձևում)**  **[`Էությունների առաջարկներ`](#էությունների-առաջարկներ)**  **[`Պոպ-ապ`](#պոպ-ապ)**  **[`Կոճակների հորիզոնական սթեք`](#կոճակների-հորիզոնական-սթեք)**  **[`Կոճակ`](#կոճակ)**  **[`Մեդիա նվագարկիչ`](#մեդիա-նվագարկիչ)**  **[`Ծածկոց`](#ծածկոց)**  **[`Ընտրություն`](#ընտրություն)**  **[`Կլիմա`](#կլիմա)**  **[`Օրացույց`](#օրացույց)**  **[`Բաժանարար`](#բաժանարար)**  **[`Դատարկ սյունակ`](#դատարկ-սյունակ)**  **[`Միայն ենթակոճակներ`](#միայն-ենթակոճակներ)**  **[`Ենթակոճակներ`](#ենթակոճակներ)**  **[`Քարտի դասավորություններ`](#քարտի-դասավորություններ)**  **[`Պայմաններ`](#պայմաններ)**  **[`Գործողություններ`](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ)**  **[`Ոճավորում`](#ոճավորում)**  **[`Ձևանմուշներ`](#ձևանմուշներ)**  **[`Մոդուլներ`](#մոդուլներ)**  **[`Տեղայնացում`](#տեղայնացում)**  **[`Օգնություն`](#օգնություն)**  **[`Ներդրում`](#ներդրում)**  **[`Նվիրատվություն`](#նվիրատվություն)**

<br>

## Տեղադրում

**Home Assistant նվազագույն աջակցվող տարբերակ.** 2023.9.0

<details>

<summary>Առանց HACS</summary>

<br>

1. Ներբեռնեք `bubble-card.zip`-ը [վերջին թողարկումից](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Բացեք այն ձեր `<config>/www` թղթապանակում, պետք է ստանաք `bubble-card.js`-ը և դրա կողքին `translations` թղթապանակը (այդ թղթապանակը պահում է խմբագրիչի բառարանները, առանց դրա խմբագրիչը մնում է անգլերեն)
3. Ձեր վահանակում սեղմեք վերևի աջ անկյունում գտնվող պատկերակի վրա, ապա `Edit dashboard`
4. Կրկին սեղմեք այդ պատկերակի վրա, ապա `Manage resources`
5. Սեղմեք `Add resource`
6. Պատճենեք և տեղադրեք սա. `/local/bubble-card.js?v=1`
7. Սեղմեք `JavaScript Module`, ապա `Create`
8. Վերադարձեք և թարմացրեք էջը
9. Այժմ կարող եք սեղմել `Add card` ներքևի աջ անկյունում և փնտրել `Bubble Card`
10. Ֆայլի ցանկացած թարմացումից հետո դուք պետք է խմբագրեք `/local/bubble-card.js?v=1` և փոխեք տարբերակը ավելի բարձր թվի

Եթե չի աշխատում, պարզապես փորձեք մաքրել ձեր բրաուզերի քեշը։

</details>

<details>

<summary>HACS-ով (Խորհուրդ է տրվում)</summary>

<br>

Այս մեթոդը թույլ է տալիս ստանալ թարմացումներ ուղիղ Home Assistant Community Store-ից

1. Եթե HACS-ը դեռ տեղադրված չէ, ներբեռնեք այն [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) հրահանգներին հետևելով
2. Անցեք HACS-ի սկզբնական կազմաձևմանը՝ հետևելով [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) հրահանգներին
3. Ձեր կողային վահանակում գնացեք «HACS»
4. Փնտրեք «Bubble Card», կամ սեղմեք ներքևի կապույտ կոճակի վրա
5. Սեղմեք «Download»
6. Վերադարձեք ձեր վահանակ և սեղմեք վերևի աջ անկյունում գտնվող պատկերակի վրա, ապա `Edit dashboard`
7. Այժմ կարող եք սեղմել `Add card` ներքևի աջ անկյունում և փնտրել `Bubble Card`

Եթե չի աշխատում, փորձեք մաքրել ձեր բրաուզերի/հավելվածի քեշը (անհրաժեշտության դեպքում ձեր բոլոր սարքերում)։

#### Տեսանյութեր

Կարող եք նաև այցելել իմ YouTube ալիքը՝ քայլ առ քայլ տեսանյութերի համար։

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Կազմաձևում

Բոլոր ընտրանքները կարող են կազմաձևվել Home Assistant խմբագրիչում։ Բայց ավելի մանրամասն տեղեկություններ և YAML-ը կարող եք գտնել ստորև, փաստաթղթավորման մեջ։

<details>

<summary><b>Հիմնական ընտրանքներ (YAML + նկարագրություն)</b></summary>

| Անուն | Տեսակ | Պահանջ | Աջակցվող ընտրանքներ | Նկարագրություն |
| --- | --- | --- | --- | --- |
| `type` | string | **Պարտադիր** | `custom:bubble-card` | Քարտի տեսակը |
| `card_type` | string | **Պարտադիր** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` կամ `sub-buttons` | Bubble Card-ի տեսակը, տես ստորև |
| `styles` | object list | Ընտրովի | Ցանկացած CSS ոճաթերթ | Թույլ է տալիս հարմարեցնել ձեր Bubble Card-ի CSS-ը, տես [ոճավորում](#ոճավորում) |

</details>

<details>

<summary><b>Գլոբալ CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Փոփոխական | Ակնկալվող արժեք | Նկարագրություն |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Եզրագծի կլորացում բոլոր աջակցվող տարրերի համար |
| `--bubble-main-background-color` | `color` | Հիմնական ֆոնի գույն բոլոր աջակցվող տարրերի համար |
| `--bubble-secondary-background-color` | `color` | Երկրորդային ֆոնի գույն բոլոր աջակցվող տարրերի համար |
| `--bubble-accent-color` | `color` | Շեշտադրման գույն բոլոր աջակցվող տարրերի համար |
| `--bubble-icon-border-radius` | `px` | Պատկերակի եզրագծի կլորացում բոլոր աջակցվող տարրերի համար |
| `--bubble-icon-background-color` | `color` | Պատկերակի ֆոնի գույն բոլոր աջակցվող տարրերի համար |
| `--bubble-sub-button-border-radius` | `px` | Եզրագծի կլորացում բոլոր ենթակոճակների համար |
| `--bubble-sub-button-background-color` | `color` | Ֆոնի գույն բոլոր ենթակոճակների համար |
| `--bubble-box-shadow` | տես [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ստվեր բոլոր աջակցվող տարրերի համար |
| `--bubble-border` | տես [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Եզրագիծ բոլոր աջակցվող քարտերի համար |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Դիտեք այս [տեսանյութը](https://www.youtube.com/watch?v=0hSQOlBxKKI)՝ Bubble Card-ի և դրա հնարավորությունների մասին ավելին իմանալու համար։** Իմ YouTube ալիքը բավականին նոր է և կենտրոնանում է Home Assistant-ի և Bubble Card-ի ուսուցողականների վրա։ Մի հապաղեք բաժանորդագրվել՝ օգնելու իմ ալիքի տեսանելիությունը մեծացնել։ Նախապես շնորհակալություն!

<br>

---

<br>

## Էությունների առաջարկներ

Home Assistant 2026.6-ից սկսած՝ քարտերի ընտրիչում էություն ընտրելը ձեզ առաջարկում է մի քանի պատրաստի քարտ, և Bubble Card այդ հարցին պատասխանում է իր սեփական բաղադրատոմսերով: Ընտրեք լույս, և ձեզ կառաջարկվի քարտ պայծառության սահիչով, ինչպես նաև գույնի ջերմաստիճանի, գույնի և հագեցվածության տարբերակներ, երբ ձեր լույսը դրանք աջակցում է: Ընտրեք ծածկոց և կստանաք դրա դիրքի սահիչը, ընտրեք մեդիա նվագարկիչ և կստանաք նաև տարբերակ իր աղբյուրների ցանկով, ընտրեք փոշեկուլ և կստանաք դրա մեկնարկի, դադարի և կայան վերադարձի կոճակները: Յուրաքանչյուր առաջարկ սովորական Bubble Card կազմաձևում է՝ ցուցադրված որպես կենդանի նախադիտում, այնպես որ կարող եք վերցնել ամենամոտը և շարունակել խմբագրել այն սովորականի պես:

Այն, ինչ ձեզ առաջարկվում է, կախված է նրանից, թե ձեր էությունն իրականում ինչ կարող է անել. պայծառության ալիք չունեցող լույսը սահիչի փոխարեն ստանում է անջատիչ, թեքվել չկարողացող ծածկոցը թեքման տարբերակ չի ստանում, իսկ կլիմայի էությունը ստանում է իր նախադրված ռեժիմները միայն այն դեպքում, երբ դրանք ունի: Դասական տարրերը հետևում են դրանց ներքևում, երբ կիրառելի են՝ տիրույթի հատուկ քարտը, պարզ կոճակը և սահիչը:

> [!TIP]
> Մոդուլները կարող են այդ ցանկին ավելացնել իրենց սեփական առաջարկները, տես [մոդուլներ](#մոդուլներ):

<br>

---

<br>

## Պոպ-ապ

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Այս քարտը թույլ է տալիս ստեղծել ցանկացած բովանդակությամբ պոպ-ապ։ Յուրաքանչյուր պոպ-ապ **լռելյայն թաքցված է** և կարող է բացվել՝ նպատակադրելով դրա հղումը (օրինակ՝ `'#pop-up-name'`), ցանկացած քարտով, որն աջակցում է `navigate` [գործողությունը](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ), կամ ներառված [կոճակների հորիզոնական սթեքով](#կոճակների-հորիզոնական-սթեք)։

> [!TIP]
> ### Պոպ-ապի գործարկիչ 
> Այս ֆունկցիան թույլ է տալիս բացել պոպ-ապ՝ հիմնված ցանկացած սուբյեկտի վիճակի վրա, օրինակ՝ կարող եք բացել «Անվտանգություն» պոպ-ապը տեսախցիկով, երբ մեկը կանգնած է ձեր տան առջև։ Կարող եք նաև ստեղծել toggle helper (input_boolean) և ավտոմատացման մեջ գործարկել դրա բացումը/փակումը։
> <details>
> <summary>Պոպ-ապի բացումը, երբ <code>binary_sensor</code>-ը <code>on</code> է</summary>
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
> ### Պոպ-ապը փակելու տարբեր եղանակներ 
> Կան բազմաթիվ եղանակներ պոպ-ապը փակելու համար։ Օրինակ՝ կարող եք սահել պոպ-ապի վերնագրից դեպի ներքև, երկար սահել պոպ-ապի ներսում դեպի ներքև, սեղմել Escape աշխատասեղանին, հեռացնել hash-ը URL-ից, կամ պարզապես սեղմել փակելու կոճակը։
>


### Պոպ-ապի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Անուն | Տեսակ | Պահանջ | Աջակցվող ընտրանքներ | Նկարագրություն |
| --- | --- | --- | --- | --- |
| `hash` | string | **Պարտադիր** | Ցանկացած եզակի hash (օրինակ՝ `'#kitchen'`) '-ով | Սա այն է, թե ինչպես եք բացելու ձեր պոպ-ապը |
| `popup_style` | string | Ընտրովի | `bubble` (լռելյայն) կամ `classic` | Սահմանում է պոպ-ապի տեսողական ոճը |
| `popup_mode` | string | Ընտրովի | `default` (լռելյայն), `fit-content`, `centered` կամ `adaptive-dialog` | Սահմանում է պոպ-ապի դասավորության ռեժիմը |
| `with_bottom_offset` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Օգտագործվում է միայն `popup_mode: fit-content` կամ `adaptive-dialog`-ի հետ։ Կիրառում է ներքևի shift բջջայինի վրա, օգտակար է, երբ ձեր վահանակն ունի footer քարտ։ |
| `full_width_on_mobile` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Օգտագործվում է միայն `popup_mode: centered`-ի հետ։ Ընդարձակում է պոպ-ապը լրիվ էկրանի լայնությամբ բջջայինի վրա, օգտակար է փոքր էկրանների վրա։ |
| `performance_mode` | string | Ընտրովի | `default` (լռելյայն) կամ `performance` | Օպտիմալացնում է պոպ-ապի բացման անիմացիան։ `performance`-ը մի փոքր հետաձգում է բովանդակության ռենդերինգը և ֆոնի մշուշոտումը, նաև անջատում է backdrop blur-ը, եթե դրված է։ |
| `auto_close` | string | Ընտրովի | Timeout միլիվայրկյաններով (օրինակ՝ `10000`՝ 10վ-ի համար) | Ինքնաշխատ փակում է պոպ-ապը timeout-ից հետո |
| `close_on_click` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ինքնաշխատ փակում է պոպ-ապը ցանկացած փոխազդեցությունից հետո |
| `close_by_clicking_outside` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Փակում է պոպ-ապը՝ սեղմելով դրանից դուրս |
| `width_desktop` | string | Ընտրովի | Ցանկացած CSS արժեք | Լայնություն աշխատասեղանին (`100%` լռելյայն բջջայինի վրա) |
| `margin` | string | Ընտրովի | Ցանկացած CSS արժեք | Օգտագործեք սա **միայն** եթե ձեր պոպ-ապը լավ չի կենտրոնացված բջջայինի վրա (օրինակ՝ `13px`) |
| `margin_top_mobile` | string | Ընտրովի | Ցանկացած CSS արժեք | Վերևի եզրաշար բջջայինի վրա (օրինակ՝ `-56px`, եթե ձեր վերնագիրը թաքցված է) |
| `margin_top_desktop` | string | Ընտրովի | Ցանկացած CSS արժեք | Վերևի եզրաշար աշխատասեղանին (օրինակ՝ `50vh`՝ կիսաչափի պոպ-ապի համար կամ `calc(100vh - 400px)`՝ `400px` ֆիքսված բարձրության համար) |
| `bg_color` | string | Ընտրովի | Ցանկացած hex, rgb կամ rgba արժեք | Ձեր պոպ-ապի ֆոնի գույնը (օրինակ՝ `#ffffff`՝ սպիտակ ֆոնի համար) |
| `bg_opacity` | string | Ընտրովի | Ցանկացած արժեք `0`-ից `100` | Ձեր պոպ-ապի ֆոնի թափանցիկությունը (օրինակ՝ `100`՝ առանց թափանցիկության) |
| `bg_blur` | string | Ընտրովի | Ցանկացած արժեք `0`-ից `100` | Ձեր պոպ-ապի ֆոնի մշուշոտման էֆեկտը, **սա աշխատում է միայն եթե `bg_opacity`-ը `100` չէ** (օրինակ՝ `0`՝ առանց մշուշոտման)|
| `shadow_opacity` | string | Ընտրովի | Ցանկացած արժեք `0`-ից `100` | Ձեր պոպ-ապի ստվերի թափանցիկությունը (օրինակ՝ `0`՝ այն թաքցնելու համար) |
| `hide_backdrop` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Դրեք սա true-ի վրա ձեր հիմնական վահանակի առաջին պոպ-ապի համար՝ բոլոր պոպ-ապների backdrop-ն անջատելու համար։ |
| `background_update` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Թարմացնում է պոպ-ապի բովանդակությունը ֆոնում (խորհուրդ չի տրվում) |
| `trigger` | object կամ list | Ընտրովի | Տես [պայմաններ](#պայմաններ) | Բացում է այս պոպ-ապը, երբ պայմանները բավարարվում են |
| `trigger_entity` | string | Ընտրովի | Ցանկացած սուբյեկտ | Բացում է այս պոպ-ապը՝ հիմնված ցանկացած սուբյեկտի վիճակի վրա, `trigger`-ի պարզ ձևը |
| `trigger_state` | string | Ընտրովի (**Պարտադիր**, եթե `trigger_entity`-ը սահմանված է) | Ցանկացած սուբյեկտի վիճակ | Սուբյեկտի վիճակը՝ պոպ-ապը բացելու համար |
| `trigger_close` | boolean | Ընտրովի | `true` կամ `false` | Փակում է պոպ-ապը, երբ պայմաններն այլևս չեն բավարարվում (լռելյայն՝ `true` `trigger`-ի հետ, `false` `trigger_state`-ի հետ) |
| `open_action` | object | Ընտրովի | Տես [գործողություններ](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Գործարկում է գործողություն, երբ պոպ-ապը բացվում է |
| `close_action` | object | Ընտրովի | Տես [գործողություններ](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Գործարկում է գործողություն, երբ պոպ-ապը փակվում է |
| `show_header` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Ցույց տալ/թաքցնել պոպ-ապի վերնագիրը ամբողջովին |
| `show_previous_button` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ցույց տալ նախորդի կոճակ փակելու կոճակի կողքին և վերադառնալ նախորդ պոպ-ապին, երբ հասանելի է |
| `show_close_button` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Ցույց տալ կամ թաքցնել փակելու կոճակը՝ մնացած վերնագիրը տեսանելի պահելով |
| `buttons_position` | string | Ընտրովի | `right` (լռելյայն) կամ `left` | Փակելու և նախորդի կոճակների դիրքը վերնագրում |
| `cards` | list | Ընտրովի | Ցանկացած Bubble Card, Home Assistant քարտ կամ custom քարտ | Սահմանում է ձեր պոպ-ապի բովանդակությունը։ Տես ստորև՝ պոպ-ապի օրինակը։ |
| Դուք նաև ունեք հասանելիություն [բոլոր կոճակի կարգավորումներին](#կոճակ) պոպ-ապի վերնագրի համար։ | | Ընտրովի | | Եթե չսահմանված է, վերնագիր ցույց չի տրվի |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Փոփոխական | Ակնկալվող արժեք | Նկարագրություն |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Եզրագծի կլորացում պոպ-ապի համար |
| `--bubble-pop-up-main-background-color` | `color` | Հիմնական ֆոնի գույն պոպ-ապի աջակցվող տարրերի համար |
| `--bubble-pop-up-background-color` | `color` | Պոպ-ապի ֆոնի գույն |
| `--bubble-backdrop-background-color` | `color` | Ֆոնի գույն backdrop-ի համար |
| Դուք նաև ունեք հասանելիություն [բոլոր կոճակի CSS փոփոխականներին](#կոճակի-ընտրանքներ) պոպ-ապի վերնագրի համար։ | | |

</details>


### Ինքնուրույն պոպ-ապի ֆորմատ (v3.2.0+)

v3.2.0-ից սկսած, պոպ-ապները օգտագործում են նոր ինքնուրույն ֆորմատ, որտեղ բովանդակության քարտերը սահմանվում են ուղղակիորեն պոպ-ապի ներսում՝ օգտագործելով `cards` ընտրանքը։ Սա ապահովում է ավելի լավ արտադրողականություն և section-based drag-and-drop խմբագրման նոր փորձ։


#### Օրինակներ

<details>

<summary>Պոպ-ապ (ինքնուրույն ֆորմատ)</summary>

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

<summary>Կոճակ՝ պոպ-ապը բացելու համար</summary>

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

## Կոճակների հորիզոնական սթեք

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Այս քարտը լավ ուղեկից է պոպ-ապ քարտի համար, թույլ տալով բացել համապատասխան պոպ-ապները։ Այն նաև թույլ է տալիս բացել ձեր վահանակի ցանկացած էջ։ Բացի այդ, կարող եք ավելացնել ձեր շարժման/զբաղվածության սենսորները, որպեսզի կոճակների կարգը հարմարվի ըստ սենյակի, որտեղ դուք հենց նոր մտել եք։ Այս քարտը scrollable է, մնում է տեսանելի և գործում է որպես footer։

> [!IMPORTANT]  
> Այս քարտը պետք է լինի ձեր view-ի վերջին քարտը (բոլոր քարտերից և պոպ-ապներից հետո)։ Այն չի կարող լինել որևէ stack-ի ներսում։

### Կոճակների հորիզոնական սթեքի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Անուն | Տեսակ | Պահանջ | Աջակցվող ընտրանքներ | Նկարագրություն |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Պարտադիր** | Պոպ-ապի hash-ը (օրինակ՝ `'#kitchen'`) '-ով կամ ցանկացած հղում | Բացվող հղում |
| `1_name` | string | Ընտրովի | Ցանկացած տող | Անուն ձեր կոճակի համար |
| `1_icon` | string | Ընտրովի | Ցանկացած `mdi:` պատկերակ | Պատկերակ ձեր կոճակի համար |
| `1_entity` | string | Ընտրովի | Ցանկացած լույս կամ լույսերի խումբ | Ցուցադրում է այդ լույսի գույնը ֆոնում |
| `1_pir_sensor` | string | Ընտրովի | Ցանկացած binary sensor | Առնվազն մեկ pir sensor կամ ավելին `auto_order`-ի համար, փաստորեն այն նաև աշխատում է ցանկացած սուբյեկտի տեսակի հետ, օրինակ՝ կարող եք ավելացնել լույսերի խմբեր, և կարգը կփոխվի՝ ըստ վերջին փոփոխված վիճակների։ |
| `auto_order` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Փոխում է կոճակների կարգը՝ ըստ `_pir_sensor`-ի վերջին փոփոխման ժամանակի, **այն պետք է լինի `false`, եթե ձեր կոդում `_pir_sensor` չունեք** |
| `margin` | string | Ընտրովի | Ցանկացած CSS արժեք | Օգտագործեք սա **միայն**, եթե ձեր `horizontal-buttons-stack`-ը լավ չի կենտրոնացված բջջայինի վրա (օրինակ՝ `13px`) |
| `width_desktop` | string | Ընտրովի | Ցանկացած CSS արժեք | Լայնություն աշխատասեղանին (`100%` լռելյայն բջջայինի վրա) |
| `is_sidebar_hidden` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ամրագրում է կոճակների հորիզոնական սթեքի դիրքը, եթե sidebar-ը թաքցված է աշխատասեղանին (միայն եթե դուք ինքներդ փոփոխություն եք կատարել այն թաքցնելու համար) |
| `rise_animation` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Դրեք սա `false`-ի վրա՝ էջը բեռնվելուց հետո միանգամից ակտիվացող անիմացիան անջատելու համար |
| `highlight_current_view` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ընդգծում է ընթացիկ hash-ը / view-ը փափուկ անիմացիայով |
| `hide_gradient` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Դրեք սա `false`-ի վրա՝ gradient-ը թաքցնելու համար |

> [!IMPORTANT]  
> Թվով սկսվող փոփոխականները սահմանում են ձեր կոճակները, պարզապես փոխեք այս թիվը՝ ավելի շատ կոճակներ ավելացնելու համար (տես օրինակը ստորև)։

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Փոփոխական | Ակնկալվող արժեք | Նկարագրություն |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Եզրագծի կլորացում կոճակների հորիզոնական սթեքի կոճակների համար |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Ֆոնի գույն կոճակների հորիզոնական սթեքի կոճակների համար |

</details>


#### Օրինակ

<details>

<summary>Կոճակների հորիզոնական սթեք, որը վերակազմավորվում է ինքնուրույն՝ ելնելով զբաղվածության սենսորներից</summary>

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

## Կոճակ

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Այս քարտը շատ բազմակողմանի է: Այն կարող է օգտագործվել որպես **անջատիչ**, **սահիչ**, **վիճակ** կամ **անուն/տեքստ** կոճակ:

> [!TIP]
> ### Ինչո՞վ են տարբերվում կոճակների բոլոր տեսակները
>
> - **Անջատիչի կոճակ:** Սա կոճակի հիմնական տեսակն է: Ըստ լռելյայնի, այն փոխարկում է որևէ էնթիթի, և նրա ֆոնի գույնը փոխվում է կախված էնթիթիի վիճակից կամ լույսի գույնից: Դուք կարող եք փոխել դրա գործողությունը **Հպման գործողություն քարտի վրա** բաժնում:
>
> - **Սահիչի կոճակ:** Այս տեսակի կոճակը թույլ է տալիս կառավարել կարգավորելի միջակայքով էնթիթիներ: Այն իդեալական է լույսերի պայծառության համար, և դրա լցման գույնը հարմարվում է լույսի գույնին: Կարող եք նաև օգտագործել այն արժեքներ ցուցադրելու համար, օրինակ մարտկոցի մակարդակը:
>   Սահիչների համար աջակցվող էնթիթիներ:
>   - Լույս (պայծառություն)
>   - Մեդիա նվագարկիչ (ձայնի մակարդակ)
>   - Ծածկոց (դիրք)
>   - Օդափոխիչ (տոկոս)
>   - Կլիմա (ջերմաստիճան)
>   - Input number և number (արժեք)
>   - Մարտկոցի սենսոր (տոկոս, միայն կարդալու համար)
>
>   Կարող եք նաև օգտագործել ցանկացած թվային վիճակով էնթիթի՝ անջատելով էնթիթիի ֆիլտրը **Սահիչի կարգավորումներում**, ապա սահմանել `min` և `max` արժեքները: Այս ընտրանքը միայն կարդալու համար է:
>
> - **Վիճակի կոճակ:** Կատարյալ է սենսորից կամ ցանկացած էնթիթիից տեղեկատվություն ցուցադրելու համար: Երբ սեղմեք դրա վրա, կցուցադրվի էնթիթիի "More info" վահանակը: Դրա ֆոնի գույնը չի փոխվում:
>
> - **Անուն/տեքստ կոճակ:** Կոճակի միակ տեսակը, որին էնթիթի պետք չէ: Այն թույլ է տալիս ցուցադրել կարճ տեքստ, անուն կամ վերնագիր: Կարող եք նաև ավելացնել դրան գործողություններ: Դրա ֆոնի գույնը չի փոխվում:

### Կոճակի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Կառավարվող էնթիթի |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Ձեր կոճակի վարքագիծը |
| `name` | string | Optional | Any string | Ձեր կոճակի անունը, եթե սահմանված չէ, կցուցադրվի էնթիթիի անունը |
| `icon` | string | Optional | Any `mdi:` icon | Ձեր կոճակի պատկերակը, եթե սահմանված չէ, կցուցադրվի էնթիթիի պատկերակը կամ `entity-picture`-ը |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Առաջնահերթություն տալ պատկերակին՝ `entity-picture`-ի փոխարեն |
| `use_accent_color` | boolean | Optional (`false` default) | **Միայն լույսերի համար:** Օգտագործել թեմայի շեշտադրման գույնը լույսի գույնի փոխարեն:                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Ցուցադրել կամ թաքցնել ձեր `entity`-ի վիճակը |
| `show_name` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել անունը |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել պատկերակը |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին փոփոխման ժամանակը |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին թարմացման ժամանակը |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի ատրիբուտը՝ նրա `name`-ի ներքևում |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Ցուցադրվող ատրիբուտը (օրինակ` brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Թույլ տալ տեքստի ոլորումը, երբ բովանդակությունը գերազանցում է իր տարայի չափը |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Թույլ է տալիս փոխել լռելյայն գործողությունները կոճակի սեղմման ժամանակ: |
| `tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն |
| `double_tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի կրկնակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը |
| `hold_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի պահման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [card layouts](#քարտի-դասավորություններ) |
| `rows` | number | Optional | Any number | Տողերի քանակը (բարձրություն) (օրինակ` 2`) |
| `sub_button` | object | Optional | See [sub-buttons](#ենթակոճակներ) | Ավելացնել աջ կողմում ամրագրված հարմարեցված կոճակներ |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Հիմնական ֆոնի գույն կոճակի աջակցվող տարրերի համար |
| `--bubble-button-border-radius` | `px` | Կոճակի եզրերի կլորացում |
| `--bubble-button-icon-border-radius` | `px` | Կոճակի պատկերակի տարայի եզրերի կլորացում |
| `--bubble-button-icon-background-color` | `color` | Կոճակի պատկերակի տարայի ֆոնի գույն |
| `--bubble-light-white-color` | `color` | Փոխարինել լույսի կոճակների/սահիչների լռելյայն սպիտակ գույնը |
| `--bubble-light-color` | `color` | Փոխարինել լույսի կոճակների/սահիչների գույնը (նույնիսկ RGB լույսերի) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Կոճակի ստվերը |

</details>

Այս ընտրանքները հասանելի են միայն այն ժամանակ, երբ `button_type`-ը սահմանված է `slider`-ի վրա:

<details>

<summary><b>Սահիչի ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Սահիչի նվազագույն արժեքը: Հարմարեցված սահիչների համար:                                                    |
| `max_value`             | number  | Optional                        | Սահիչի առավելագույն արժեքը: Հարմարեցված սահիչների համար:                                                    |
| `step`                  | number  | Optional                        | Սահիչի քայլի արժեքը:                                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Միացնել սահիչի նախկին վարքագիծը, երբ սահիչը ակտիվացնում եք հպումով, այլ ոչ թե պահելով:        |
| `relative_slide`        | boolean | Optional (`false` default )     | Թարմացնել արժեքը սկզբնական արժեքի նկատմամբ, այլ ոչ թե սկզբնական հպման կետի նկատմամբ:                                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Դարձնել սահիչը միայն կարդալու համար: Ինքնաբերաբար միացվում է որոշ էնթիթիների համար, օրինակ սենսորների:                                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Էնթիթիի վիճակը թարմացվում է սահեցնելիս: **Այս հատկանիշը խորհուրդ չի տրվում բոլոր էնթիթիների համար:**        |
| `slider_fill_orientation` | string | Ընտրովի | `left`, `right`, `top` կամ `bottom` | Փոխել սահիչի լցման ուղղությունը: Ձախից աջ, երբ սահմանված չէ, հայելային՝ [աջից ձախ լեզուներում](#տեղայնացում) |
| `slider_value_position` | string | Ընտրովի | `right`, `left`, `center` կամ `hidden` | Արժեքի ցուցադրման դիրքը: Ավարտի կողմում, երբ սահմանված չէ, այսինքն՝ ձախ կողմում [աջից ձախ լեզուներում](#տեղայնացում) |
| `invert_slider_value` | boolean | Optional (`false` default) | Հակադարձել սահիչի ուղղությունը (100% լցումը հավասար է նվազագույնին): Հասանելի չէ գունային սահիչների համար: |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Միայն լույսերի համար:** Ընտրել սահիչի ռեժիմը |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Միայն ծածկոցների համար:** Ընտրել սահիչի ռեժիմը (դիրք կամ թեքում) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Միայն լույսերի համար (Hue ռեժիմ):** Հարկադրել հագեցվածությունը Hue-ն կարգավորելիս |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Միայն լույսերի համար (Hue ռեժիմ):** Հարկադրված հագեցվածության արժեքը (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Միայն լույսերի համար (Brightness ռեժիմ):** Օգտագործել թեմայի շեշտադրման գույնը լույսի գույնի փոխարեն |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Միայն լույսերի համար:** Թույլ է տալիս սահիչին հասնել 0%-ի, ինչը անջատում է լույսը: Հասանելի չէ `tap_to_slide`-ի հետ միասին: |
| `light_transition`      | boolean | Optional (`false` default)      | **Միայն լույսերի համար:** Միացնել պայծառության սահուն անցումները՝ աջակցվող լույսերի համար:                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Միայն լույսերի համար:** Անցման ժամանակը միլիվայրկյաններով: Պահանջում է `light_transition: true`:            |

</details>

#### Օրինակներ

<details>

<summary>Սահիչի կոճակ, որը կարող է կառավարել լույսի պայծառությունը</summary>

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

<summary>Կոճակ ավելի շատ ընտրանքներով</summary>

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

## Մեդիա նվագարկիչ

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Այս քարտը թույլ է տալիս կառավարել մեդիա նվագարկիչի էնթիթի:

### Մեդիա նվագարկիչի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Կառավարվող մեդիա նվագարկիչը |
| `name` | string | Optional | Any string | Ձեր մեդիա նվագարկիչի անունը, եթե սահմանված չէ, կցուցադրվի էնթիթիի անունը |
| `icon` | string | Optional | Any `mdi:` icon | Ձեր մեդիա նվագարկիչի պատկերակը, եթե սահմանված չէ, կցուցադրվի էնթիթիի պատկերակը կամ `entity-picture`-ը |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Առաջնահերթություն տալ պատկերակին՝ `entity-picture`-ի փոխարեն |
| `show_state` | boolean | Optional | `true` or `false` (default) | Ցուցադրել կամ թաքցնել ձեր `entity`-ի վիճակը |
| `show_name` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել անունը |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել պատկերակը |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին փոփոխման ժամանակը |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին թարմացման ժամանակը |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի ատրիբուտը՝ նրա `name`-ի ներքևում |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Ցուցադրվող ատրիբուտը (օրինակ` brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Թույլ տալ տեքստի ոլորումը, երբ բովանդակությունը գերազանցում է իր տարայի չափը |
| `min_volume` | number | Optional | Any number | Ձայնի սահիչի նվազագույն արժեքը: |
| `max_volume` | number | Optional | Any number | Ձայնի սահիչի առավելագույն արժեքը: |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Օգտագործել մշուշված մեդիա շապիկը որպես քարտի ֆոն: |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Թույլ է տալիս փոխել լռելյայն գործողությունները կոճակի սեղմման ժամանակ: |
| `tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |
| `double_tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի կրկնակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը: |
| `hold_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի պահման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Տեղափոխել շապիկի գործողության կոճակները ներքև (ամրագրված) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Ստորին գործողության կոճակները դարձնել լիարժեք լայնության (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Ստորին գործողության կոճակների հավասարեցումը, երբ դրանք լիարժեք լայնության չեն |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [card layouts](#քարտի-դասավորություններ) |
| `rows` | number | Optional | Any number | Տողերի քանակը (բարձրություն) (օրինակ` 2`) |
| `sub_button` | object | Optional | See [sub-buttons](#ենթակոճակներ) | Ավելացնել աջ կողմում ամրագրված հարմարեցված կոճակներ |
| `hide` | object | Optional | See below | Թաքցնել կոճակներ քարտից |

#### Թաքցնելու ընտրանքներ

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Թաքցնել play/pause կոճակը |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Թաքցնել ձայնի կոճակը |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Թաքցնել նախորդի կոճակը |
| `next_button` | boolean | Optional | `true` or `false` (default) | Թաքցնել հաջորդի կոճակը |
| `power_button` | boolean | Optional | `true` or `false` (default) | Թաքցնել սնուցման կոճակը |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Հիմնական ֆոնի գույն մեդիա նվագարկիչի համար |
| `--bubble-media-player-border-radius` | `px` | Մեդիա նվագարկիչի եզրերի կլորացում |
| `--bubble-media-player-buttons-border-radius` | `px` | Մեդիա նվագարկիչի կոճակների եզրերի կլորացում |
| `--bubble-media-player-slider-background-color` | `color` | Ձայնի սահիչի ֆոնի գույն |
| `--bubble-media-player-icon-border-radius` | `px` | Մեդիա նվագարկիչի պատկերակի տարայի եզրերի կլորացում |
| `--bubble-media-player-icon-background-color` | `color` | Մեդիա նվագարկիչի պատկերակի տարայի ֆոնի գույն |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Մեդիա նվագարկիչի ստվերը |

</details>


#### Օրինակներ

<details>

<summary>Մեդիա նվագարկիչ բոլոր ընտրանքներով</summary>

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

## Ծածկոց

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Այս քարտը թույլ է տալիս կառավարել ձեր `cover` էնթիթիները:

### Ծածկոցի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Կառավարվող ծածկոց |
| `name` | string | Optional | Any string | Ձեր ծածկոցի անունը, եթե սահմանված չէ, կցուցադրվի էնթիթիի անունը |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Առաջնահերթություն տալ պատկերակին՝ `entity-picture`-ի փոխարեն |
| `show_state` | boolean | Optional | `true` or `false` (default) | Ցուցադրել կամ թաքցնել ձեր `entity`-ի վիճակը |
| `show_name` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել անունը |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել պատկերակը |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին փոփոխման ժամանակը |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին թարմացման ժամանակը |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի ատրիբուտը՝ նրա `name`-ի ներքևում |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Ցուցադրվող ատրիբուտը (օրինակ` brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Թույլ տալ տեքստի ոլորումը, երբ բովանդակությունը գերազանցում է իր տարայի չափը |
| `icon_open` | string | Optional | Any `mdi:` icon | Ձեր բացված ծածկոցի պատկերակը, եթե սահմանված չէ, կցուցադրվի բացված ծածկոցի լռելյայն պատկերակը |
| `icon_close` | string | Optional | Any `mdi:` icon | Ձեր փակված ծածկոցի պատկերակը, եթե սահմանված չէ, կցուցադրվի փակված ծածկոցի լռելյայն պատկերակը |
| `icon_up` | string | Optional | Any `mdi:` icon | Ձեր ծածկոցի բացման կոճակի պատկերակը, եթե սահմանված չէ, կցուցադրվի բացված ծածկոցի լռելյայն պատկերակը |
| `icon_down` | string | Optional | Any `mdi:` icon | Ձեր ծածկոցի փակման կոճակի պատկերակը, եթե սահմանված չէ, կցուցադրվի փակված ծածկոցի լռելյայն պատկերակը |
| `open_service` | string | Optional | Any service or script | Ձեր ծածկոցը բացող ծառայություն, լռելյայն `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Ձեր ծածկոցը կանգնեցնող ծառայություն, լռելյայն `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Ձեր ծածկոցը փակող ծառայություն, լռելյայն `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Թեքման կառավարման կոճակների դիրքը (ցուցադրվում է միայն, եթե ծածկոցն աջակցում է թեքումը) |
| `open_tilt_service` | string | Optional | Any service or script | Թեքումը բացող ծառայություն, լռելյայն `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Թեքումը փակող ծառայություն, լռելյայն `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Թույլ է տալիս փոխել լռելյայն գործողությունները կոճակի սեղմման ժամանակ: |
| `tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |
| `double_tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի կրկնակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը: |
| `hold_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի պահման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Տեղափոխել կառավարման կոճակները ներքև (ամրագրված) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Ստորին կառավարման կոճակները դարձնել լիարժեք լայնության (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Ստորին կառավարման կոճակների հավասարեցումը, երբ դրանք լիարժեք լայնության չեն |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [card layouts](#քարտի-դասավորություններ) |
| `rows` | number | Optional | Any number | Տողերի քանակը (բարձրություն) (օրինակ` 2`) |
| `sub_button` | object | Optional | See [sub-buttons](#ենթակոճակներ) | Ավելացնել աջ կողմում ամրագրված հարմարեցված կոճակներ |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Հիմնական ֆոնի գույն ծածկոցի քարտի աջակցվող տարրերի համար |
| `--bubble-cover-border-radius` | `px` | Ծածկոցի քարտի եզրերի կլորացում |
| `--bubble-cover-icon-border-radius` | `px` | Ծածկոցի քարտի պատկերակի տարայի եզրերի կլորացում |
| `--bubble-cover-icon-background-color` | `color` | Ծածկոցի քարտի պատկերակի տարայի ֆոնի գույն |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ծածկոցի քարտի ստվերը |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ծածկոցի քարտի կոճակների ստվերը |

</details>


#### Օրինակ

<details>

<summary>Քարտ, որը կարող է կառավարել գլանափաթեթ վարագույրը</summary>

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

## Ընտրություն

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Այս քարտը թույլ է տալիս ավելացնել բացվող ցանկ ձեր `input_select` / `select` էնթիթիների համար: Այս քարտը նաև աջակցում է ենթակոճակները և Bubble Card-ի բոլոր ընդհանուր հատկանիշները:

> [!TIP]
> Դուք կարող եք նաև ունենալ select ենթակոճակներ, եթե ցանկանում եք, այս հատկանիշը հասանելի է բոլոր այն քարտերում, որոնք աջակցում են ենթակոճակները:

### Ընտրության ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Կառավարվող էնթիթի |
| `name` | string | Optional | Any string | Ձեր ընտրության անունը, եթե սահմանված չէ, կցուցադրվի էնթիթիի անունը |
| `icon` | string | Optional | Any `mdi:` icon | Ձեր ընտրության պատկերակը, եթե սահմանված չէ, կցուցադրվի էնթիթիի պատկերակը կամ `entity-picture`-ը |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Առաջնահերթություն տալ պատկերակին՝ `entity-picture`-ի փոխարեն |
| `show_state` | boolean | Optional | `true` or `false` (default) | Ցուցադրել կամ թաքցնել ձեր `entity`-ի վիճակը |
| `show_name` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել անունը |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Ցուցադրել կամ թաքցնել պատկերակը |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին փոփոխման ժամանակը |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի վերջին թարմացման ժամանակը |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Ցուցադրել ձեր `entity`-ի ատրիբուտը՝ նրա `name`-ի ներքևում |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Ցուցադրվող ատրիբուտը (օրինակ` brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Թույլ տալ տեքստի ոլորումը, երբ բովանդակությունը գերազանցում է իր տարայի չափը |
| `tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |
| `double_tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի կրկնակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը: |
| `hold_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի պահման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [card layouts](#քարտի-դասավորություններ) |
| `rows` | number | Optional | Any number | Տողերի քանակը (բարձրություն) (օրինակ` 2`) |
| `sub_button` | object | Optional | See [sub-buttons](#ենթակոճակներ) | Ավելացնել աջ կողմում ամրագրված հարմարեցված կոճակներ |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Հիմնական ֆոնի գույն select քարտի աջակցվող տարրերի համար |
| `--bubble-select-background-color` | `color` | Select քարտի ֆոնի գույն |
| `--bubble-select-list-border-radius` | `px` | Քարտի բացվող ցանկի եզրերի կլորացում |
| `--bubble-select-list-item-accent-color` | `color` | Ընտրված տարրի շեշտադրման գույն |
| `--bubble-select-list-background-color` | `color` | Քարտի բացվող ցանկի ֆոնի գույն |
| `--bubble-select-list-width` | `px` | Քարտի բացվող ցանկի լայնությունը |
| `--bubble-select-arrow-background-color` | `color` | Բացվող ցանկի սլաքի ֆոնի գույն |
| `--bubble-select-button-border-radius` | `px` | Select կոճակի եզրերի կլորացում |
| `--bubble-select-border-radius` | `px` | Select քարտի եզրերի կլորացում |
| `--bubble-select-icon-border-radius` | `px` | Select քարտի պատկերակի տարայի եզրերի կլորացում |
| `--bubble-select-icon-background-color` | `color` | Select քարտի պատկերակի տարայի ֆոնի գույն |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Select քարտի ստվերը |

</details>


#### Օրինակներ

<details>

<summary>Select քարտ սցենարների ցանկով</summary>

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

## Կլիմա

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Այս քարտը թույլ է տալիս կառավարել ձեր `climate` էնթիթիները:

> [!TIP]
> Ռեժիմի ընտրության ցանկը [ենթակոճակ](#ենթակոճակներ) է, որն ինքնաբերաբար ավելացվում է քարտը ստեղծելիս: Դուք հետո կարող եք փոփոխել կամ հեռացնել այն ըստ ցանկության:

### Կլիմայի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Կառավարվող էնթիթին (օրինակ `climate.living_room`)                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Քարտի հարմարեցված անուն: Եթե սահմանված չէ, կցուցադրվի էնթիթիի անունը:                                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Քարտի հարմարեցված պատկերակ: Եթե սահմանված չէ, կօգտագործվի էնթիթիի պատկերակը կամ `entity-picture`-ը:                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Առաջնահերթություն է տալիս պատկերակին՝ `entity-picture`-ի փոխարեն:                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Ցուցադրել կամ թաքցնել `entity`-ի ընթացիկ վիճակը:                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Ցուցադրել կամ թաքցնել էնթիթիի անունը:                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Ցուցադրել կամ թաքցնել պատկերակը:                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Թաքցնում է ցածր թիրախային ջերմաստիճանի կառավարումը, եթե `entity`-ն այն աջակցում է:                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Թաքցնում է բարձր թիրախային ջերմաստիճանի կառավարումը, եթե `entity`-ն այն աջակցում է:                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Կիրառում է ֆոնի հաստատուն գույն, երբ կլիմայի էնթիթին միացված է:                                                              |
| `step` | number | Optional | Any number | Ջերմաստիճանի քայլը: |
| `min_temp` | number | Optional | Any number | Նվազագույն ջերմաստիճանը: |
| `max_temp` | number | Optional | Any number | Առավելագույն ջերմաստիճանը: |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Թույլ է տալիս փոխել լռելյայն գործողությունները կոճակի սեղմման ժամանակ: |
| `tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |
| `double_tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի կրկնակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը: |
| `hold_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը պատկերակի պահման ժամանակ, եթե սահմանված չէ, կօգտագործվի `more-info`-ն: |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Տեղափոխել կլիմայի գործողության կոճակները ներքև (ամրագրված) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Ստորին գործողության կոճակները դարձնել լիարժեք լայնության (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Ստորին գործողության կոճակների հավասարեցումը, երբ դրանք լիարժեք լայնության չեն |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [card layouts](#քարտի-դասավորություններ) |
| `rows` | number | Optional | Any number | Տողերի քանակը (բարձրություն) (օրինակ` 2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#ենթակոճակներ)                | Ավելացնում է աջ կողմում ամրագրված հարմարեցված կոճակներ: Օգտակար է կլիմայի ռեժիմի ընտրության ցանկի համար:                                  |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Հիմնական ֆոնի գույն կլիմայի քարտի աջակցվող տարրերի համար |
| `--bubble-climate-border-radius` | `px` | Կլիմայի քարտի աջակցվող տարրերի եզրերի կլորացում |
| `--bubble-climate-button-background-color` | `color` | Կլիմայի քարտի կոճակների ֆոնի գույն |
| `--bubble-climate-icon-border-radius` | `px` | Կլիմայի քարտի պատկերակի տարայի եզրերի կլորացում |
| `--bubble-state-climate-fan-only-color` | `color` | Overlay գույն fan-only վիճակի համար |
| `--bubble-state-climate-dry-color` | `color` | Overlay գույն dry վիճակի համար |
| `--bubble-state-climate-cool-color` | `color` | Overlay գույն cool վիճակի համար |
| `--bubble-state-climate-heat-color` | `color` | Overlay գույն heat վիճակի համար |
| `--bubble-state-climate-auto-color` | `color` | Overlay գույն auto վիճակի համար |
| `--bubble-state-climate-heat-cool-color` | `color` | Overlay գույն heat-cool վիճակի համար |
| `--bubble-climate-accent-color` | `color` | Կլիմայի քարտի շեշտադրման գույն |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Կլիմայի տարայի ստվերը: |

</details>


#### Օրինակներ

<details>

<summary>Կլիմայի քարտ HVAC ռեժիմների բացվող ցանկով</summary>

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

## Օրացույց

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Այս քարտը թույլ է տալիս ցուցադրել ձեր օրացույցի էնթիթիները: Դրա բովանդակությունը ոլորելի է, այնպես որ դուք հեշտությամբ կարող եք զննել առաջիկա միջոցառումները:

### Օրացույցի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML + նկարագրություններ)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Օրացույցի օրերի քանակը, որոնց համար ստանալ միջոցառումները՝ սկսած հիմա մինչև Nրդ օրվա վերջը (լռելյայն 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Կառավարվող էնթիթին (օրինակ `calendar.main_calendar`)                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Ցուցադրվող օրացույցի էնթիթին                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Օրացույցի պիտակի հարմարեցված գույն: Եթե սահմանված չէ, ինքնաբերաբար կընտրվի գույն |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Օրացույցի օրերի քանակը, որոնց համար ստանալ միջոցառումները՝ սկսած հիմա մինչև Nրդ օրվա վերջը (լռելյայն 7) |
| `limit`             | number  | Optional     | A number                                        | Քարտի վրա ցուցադրվող միջոցառումների քանակը                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Ցուցադրել կամ թաքցնել միջոցառումների ավարտի ժամանակը                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Ցուցադրել կամ թաքցնել միջոցառման առաջընթացի գծիկը                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Ցուցադրել կամ թաքցնել ընթացիկ ընթացքի մեջ գտնվող միջոցառումները։ Բազմօրյա իրադարձությունները գնահատվում են օր առ օր, ուստի թաքցվում է միայն ընթացիկ օրը, իսկ առաջիկա օրերը մնում են տեսանելի |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Թույլ տալ տեքստի ոլորումը, երբ բովանդակությունը գերազանցում է իր տարայի չափը |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Թույլ է տալիս ավելացնել գործողություններ միջոցառման սեղմման ժամանակ: |
| `tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը օրվա սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը: |
| `double_tap_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը օրվա կրկնակի սեղմման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը: |
| `hold_action` | object | Optional | See [actions](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանել գործողության տեսակը օրվա պահման ժամանակ, եթե սահմանված չէ, կօգտագործվի `none`-ը: |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [card layouts](#քարտի-դասավորություններ) |
| `rows` | number | Optional | Any number | Տողերի քանակը (բարձրություն) (օրինակ` 2`) |
| `sub_button` | object | Optional | See [sub-buttons](#ենթակոճակներ) | Ավելացնել աջ կողմում ամրագրված հարմարեցված կոճակներ |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Հիմնական ֆոնի գույն օրացույցի քարտի աջակցվող տարրերի համար  |
| `--bubble-calendar-border-radius`         | `px`           | Օրացույցի քարտի աջակցվող տարրերի եզրերի կլորացում |
| `--bubble-calendar-height`                | `px`           | Օրացույցի քարտի բարձրությունը                                        |

</details>

#### Օրինակներ

<details>

<summary>Օրացույցի քարտ սահմանափակ քանակի միջոցառումներով</summary>

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

<summary>Օրացույցի քարտ ավարտի ժամանակով և առաջընթացի գծիկով</summary>

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


## Բաժանարար

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Այս քարտը պարզ բաժանարար է ձեր պոպ-ապը կատեգորիաների կամ բաժինների բաժանելու համար: Օրինակ՝ լույսեր, սարքեր, ծածկոցներ, կարգավորումներ, ավտոմատացումներ...

### Բաժանարարի ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML և նկարագրություններ)</b></summary>

| Անուն | Տեսակ | Պահանջ | Աջակցվող ընտրանքներ | Նկարագրություն |
| --- | --- | --- | --- | --- |
| `name` | string | Ընտրովի, բայց առաջարկվող | Ցանկացած տող | Ձեր բաժանարարի անունը |
| `icon` | string | Ընտրովի, բայց առաջարկվող | Ցանկացած `mdi:` պատկերակ | Ձեր բաժանարարի պատկերակը |
| `card_layout` | string | Ընտրովի | `normal` (լռելյայն, եթե ոչ section տեսքում), `large` (լռելյայն, եթե section տեսքում), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [քարտի դասավորությունները](#քարտի-դասավորություններ) |
| `rows` | number | Ընտրովի | Ցանկացած թիվ | Տողերի քանակը (բարձրություն) (օրինակ՝ `2`) |
| `sub_button` | object | Ընտրովի | Տես [ենթակոճակներ](#ենթակոճակներ) | Ավելացրեք հատուկ կոճակներ, ամրացված աջ կողմում |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Փոփոխական | Ակնկալվող արժեք | Նկարագրություն |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Բաժանարարի գծի ֆոնի գույնը |

</details>

#### Օրինակ

<details>

<summary>«Ծածկոցներ» բաժնի համար բաժանարար</summary>

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

## Դատարկ սյունակ

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Այս քարտը կա, որպեսզի լրացնի դատարկ սյունակը: Դա օգտակար է, եթե ձեր պոպ-ապում կա `horizontal-stack`, որի մեջ միայն մեկ քարտ կա: Նայեք այս սքրինշոթի ներքևի աջ անկյունում, որպեսզի (չ)տեսնեք այն:

### Դատարկ սյունակի ընտրանքներ

Այս քարտն ընտրանքներ չունի և չի աջակցում [ոճավորումը](#ոճավորում), սակայն այն աջակցում է HA բաժինների դասավորության ընտրանքները:

#### Օրինակ

<details>

<summary>Դատարկ սյունակ հորիզոնական սթեքում</summary>

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

## Միայն ենթակոճակներ

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Այս քարտը նվիրված է միայն ենթակոճակներին: Այն կատարյալ է մենյուների, արագ գործողությունների, տեղեկատվական չիպերի կամ էջի ներքևում ամրացված ֆուտերի համար:

> [!IMPORTANT]  
> Այս քարտն օգտագործում է ենթակոճակների նոր սխեման: Ձեր կոճակները սահմանելու համար օգտագործեք `sub_button.bottom`: `sub_button.main` բաժինը անտեսվում է:

### Միայն ենթակոճակների ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML և նկարագրություններ)</b></summary>

| Անուն | Տեսակ | Պահանջ | Աջակցվող ընտրանքներ | Նկարագրություն |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Պարտադիր** | Տես [ենթակոճակներ](#ենթակոճակներ) | Սահմանեք ձեր ենթակոճակները՝ օգտագործելով `bottom` բաժինը |
| `hide_main_background` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Հեռացնել քարտի ֆոնը |
| `footer_mode` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ամրացնել քարտն էջի ներքևում |
| `footer_full_width` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Դարձնել ֆուտերը լիարժեք լայնության (100%) |
| `footer_width` | number | Ընտրովի | Ցանկացած թիվ | Ֆուտերի լայնությունը փիքսելներով, երբ `footer_full_width`-ը `false` է |
| `footer_bottom_offset` | number | Ընտրովի | Ցանկացած թիվ | Հեռավորությունը էջի ներքևից փիքսելներով (լռելյայն՝ `16`) |
| `card_layout` | string | Ընտրովի | `normal` (լռելյայն, եթե ոչ section տեսքում), `large` (լռելյայն, եթե section տեսքում), `large-2-rows`, `large-sub-buttons-grid` | Քարտի ոճավորման դասավորությունը, տես [քարտի դասավորությունները](#քարտի-դասավորություններ) |
| `rows` | number | Ընտրովի | Ցանկացած թիվ | Տողերի քանակը (բարձրություն) (օրինակ՝ `2`) |

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Փոփոխական | Ակնկալվող արժեք | Նկարագրություն |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Ֆուտերի լայնությունը, երբ `footer_full_width`-ը `false` է |
| `--bubble-footer-bottom` | `px` | Ֆուտերի ներքևի հեռավորությունը |
| `--bubble-footer-box-shadow` | տես [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ստվերը ֆուտերի կոնտեյների համար |

</details>

#### Օրինակներ

<details>

<summary>Չիպերի տեսքով (ինչպես սքրինշոթում)</summary>

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

<summary>Ամրացված ֆուտեր մենյու</summary>

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

## Ենթակոճակներ

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Ցանկացած քարտում, որն աջակցում է այս ընտրանքը, կարող եք ավելացնել ենթակոճակներ՝ ձեր քարտերն էլ ավելի հարմարեցնելու համար: Կարող եք, օրինակ, ստեղծել կոճակ, որը կառավարում է փոշեկուլը, եղանակի քարտը կամ գրեթե ցանկացած բան, որ կարող եք մտածել: Այս ենթակոճակներն աջակցում են հպելու գործողությունները և կոճակի ընտրանքների մեծ մասը:

Ենթակոճակներն այժմ աջակցում են երեք տեսակ. **Լռելյայն (կոճակ)**, **Սլայդեր** և **Բացվող ցանկ / ընտրություն**: Դուք կարող եք համադրել տեսակները նույն քարտում, ենթակոճակները տեղադրել վերևում կամ ներքևում, և դասավորել դրանք խմբերով ավելի բարդ դասավորությունների համար:

#### Ենթակոճակների տեղակայումը և խմբերը

<details>

<summary><b>Ենթակոճակների կառուցվածքը (main / bottom և խմբեր)</b></summary>

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

**Նշումներ:**
- `main`-ը և `bottom`-ը երկու անկախ բաժիններ են: Ներքևի ենթակոճակներն ամրացված են քարտի ներքևում:
- `main_layout`-ը և `bottom_layout`-ը ընդունում են `inline` (լռելյայն) կամ `rows`, որպեսզի խմբերը ուղղահայաց դասավորվեն:
- Խմբերը `group` զանգվածով և ընտրովի `buttons_layout`-ով (`inline` կամ `column`) օբյեկտներ են:
- `justify_content`-ը հասանելի է **միայն ներքևի խմբերի համար** (`start`, `center`, `end`, `fill`):
- Երբ առկա են ներքևի ենթակոճակներ, քարտի դասավորությունն ինքնաբերաբար փոխվում է `large`-ի, եթե ուղղակիորեն այլ դասավորություն չեք սահմանել:
- Հին `sub_button` զանգվածներն դեռ աջակցվում են և դիտվում են որպես `main` բաժին:

</details>

### Ենթակոճակների ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML և նկարագրություն)</b></summary>

| Անուն | Տեսակ | Պահանջ | Աջակցվող ընտրանքներ | Նկարագրություն |
| --- | --- | --- | --- | --- |
| `entity` | string | Ընտրովի | Ցանկացած entity | Կառավարվող entity |
| `name` | string | Ընտրովի | Ցանկացած տող | Ձեր ենթակոճակի անունը, եթե չի սահմանվել, կցուցադրվի entity-ի անունը |
| `icon` | string | Ընտրովի | Ցանկացած `mdi:` պատկերակ | Ձեր ենթակոճակի պատկերակը, եթե չի սահմանվել, կցուցադրվի entity-ի պատկերակը կամ նկարը |
| `force_icon` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ստիպել պատկերակը, նույնիսկ եթե entity-ի նկար հասանելի է |
| `sub_button_type` | string | Ընտրովի | `default`, `slider` կամ `select` | Ընտրեք ենթակոճակի տեսակը |
| `show_background` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Ցուցադրել ֆոն ձեր ենթակոճակի համար, այն կփոխի իր գույնը՝ ելնելով ձեր entity-ի վիճակից |
| `state_background` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Օգտագործել վիճակի գույնը, երբ entity-ն `on` է |
| `light_background` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Օգտագործել լույսի գույնը ֆոնի համար, երբ հասանելի է |
| `show_state` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ցուցադրել կամ թաքցնել ձեր `entity`-ի վիճակը |
| `show_name` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ցուցադրել կամ թաքցնել անունը |
| `show_icon` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Ցուցադրել կամ թաքցնել պատկերակը |
| `show_last_changed` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ցուցադրել ձեր `entity`-ի վերջին փոփոխման ժամանակը |
| `show_last_updated` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ցուցադրել ձեր `entity`-ի վերջին թարմացման ժամանակը |
| `show_attribute` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Ցուցադրել ձեր `entity`-ի ատրիբուտը `name`-ի տակ |
| `attribute` | string | Ընտրովի (պարտադիր, եթե `show_attribute`-ը `true` է) | Ատրիբուտ ձեր `entity`-ից | Ցուցադրվող ատրիբուտը (օրինակ՝ `brightness`) |
| `select_attribute` | string | Ընտրովի | Ատրիբուտների ցանկ ձեր `entity`-ից (տես վերևի աջակցվող ընտրանքները) | Այս ատրիբուտների ցանկը կբացի բացվող ցանկ սեղմելիս (օրինակ՝ `effect_list`) |
| `show_arrow` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Ցուցադրել կամ թաքցնել select ենթակոճակների բացվող ցանկի սլաքը |
| `scrolling_effect` | boolean | Ընտրովի | `true` (լռելյայն) կամ `false` | Թույլատրել տեքստի ոլորումը, երբ պարունակությունը գերազանցում է կոնտեյների չափը |
| `tap_action` | object | Ընտրովի | Տես [գործողություններ](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանեք ենթակոճակի սեղմման գործողության տեսակը, եթե չսահմանված է, կօգտագործվի `more-info`-ն: |
| `double_tap_action` | object | Ընտրովի | Տես [գործողություններ](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանեք ենթակոճակի կրկնակի սեղմման գործողության տեսակը, եթե չսահմանված է, կօգտագործվի `none`-ը: |
| `hold_action` | object | Ընտրովի | Տես [գործողություններ](#հպելու-կրկնակի-հպելու-և-պահելու-գործողություններ) | Սահմանեք ենթակոճակի պահման գործողության տեսակը, եթե չսահմանված է, կօգտագործվի `more-info`-ն: |
| `fill_width` | boolean | Ընտրովի | `true` կամ `false` | Լրացնել հասանելի լայնությունը (լռելյայն՝ `false` main-ի, `true` bottom-ի համար) |
| `width` | number կամ string | Ընտրովի | Ցանկացած թիվ կամ CSS երկարություն | Հատուկ լայնություն (`px` main բաժնի համար, `%` bottom բաժնի համար լռելյայն) |
| `custom_height` | number | Ընտրովի | Ցանկացած թիվ | Հատուկ բարձրություն փիքսելներով |
| `content_layout` | string | Ընտրովի | `icon-left` (լռելյայն), `icon-top`, `icon-bottom`, `icon-right` | Պատկերակի տեղակայումը ենթակոճակի ներսում |
| `always_visible` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | **Միայն սլայդերի համար:** Միշտ ցուցադրել սլայդերը՝ սեղմելիս բացելու փոխարեն |
| `show_button_info` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | **Միայն սլայդերի համար:** Ցուցադրել պատկերակը/անունը/վիճակը, երբ `always_visible`-ը միացված է |
| `visibility` | object կամ list | Ընտրովի | Տես [պայմաններ](#պայմաններ) | Ցուցադրել կամ թաքցնել ենթակոճակը՝ ելնելով պայմաններից |
| `hide_when_parent_unavailable` | boolean | Ընտրովի | `true` կամ `false` (լռելյայն) | Թաքցնել ենթակոճակը, եթե ծնող քարտի entity-ն անհասանելի է |
| `css_class` | string | Ընտրովի | Ցանկացած տող | Լրացուցիչ CSS դաս ենթակոճակի վրա՝ ձեր [ոճավորման](#ոճավորում) մեջ այն թիրախավորելու համար, ինչ անուն էլ ունենա (օրինակ՝ `My value`-ն տալիս է `.my-value`) |

</details>

<details>

<summary><b>Սլայդեր ենթակոճակի ընտրանքներ (նույնն են, ինչ կոճակի սլայդերները)</b></summary>

<br>

Սլայդեր ենթակոճակներն աջակցում են նույն սլայդերի ընտրանքները, ինչ կոճակի սլայդերները, ներառյալ.
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`:

</details>

<details>

<summary><b>CSS փոփոխականներ (տես <a href="#ոճավորում">Ոճավորում</a>)</b></summary>

| Փոփոխական | Ակնկալվող արժեք | Նկարագրություն |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Ենթակոճակների եզրերի կլորացումը |
| `--bubble-sub-button-background-color` | `color` | Ենթակոճակների ֆոնի գույնը |
| `--bubble-sub-button-outline` | `box-shadow` | Ուրվագիծ, որն ավելացվում է ենթակոճակին կամ սահիչին միայն այն դեպքում, երբ այն ներկվում է իր հետևի քարտի նույն գույնով, ինչը կդարձներ այն անտեսանելի (դրեք `none`՝ այն հեռացնելու համար) |
| `--bubble-sub-slider-border-radius` | `px` | Սլայդեր ենթակոճակների եզրերի կլորացումը |
| `--bubble-sub-slider-background-color` | `color` | Սլայդեր ենթակոճակների ֆոնի գույնը |
| `--bubble-sub-slider-height` | `px` | Միշտ տեսանելի սլայդեր ենթակոճակների բարձրությունը |
| `--bubble-sub-slider-outline` | `box-shadow` | Միայն սահիչ ենթակոճակների ուրվագիծը, բացակայության դեպքում վերադառնում է `--bubble-sub-button-outline`-ին |
| `--bubble-sub-button-dark-text-color` | `color` | Տեքստի գույնը վառ ենթակոճակների ֆոնի վրա |

</details>

#### Օրինակներ

<details>

<summary>Կոճակ մի քանի ենթակոճակներով՝ փոշեկուլի քարտ ստեղծելու համար (ինչպես սքրինշոթում)</summary>

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

<summary>Կոճակի սլայդեր՝ պայծառությունը ցուցադրող ենթակոճակով և լույսը միացնող/անջատող ենթակոճակով (ինչպես սքրինշոթում)</summary>

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

<summary>Կոճակ, որը ցուցադրում է ներքին և արտաքին ջերմաստիճանը՝ այսօրվա և վաղվա եղանակի հետ (սքրինշոթը կցված է)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Ինձ համար դժբախտություն է, բայց մոտս միշտ ամպամած է, սակայն բոլոր պատկերակները փոխվում են՝ ելնելով եղանակից:

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

## Քարտի դասավորություններ

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card-ը լիովին աջակցում է Home Assistant-ի section տեսքը, դուք կարող եք փոխել քարտի դասավորությունը՝ քարտն ավելի մեծացնելու համար, ինչպես նաև փոխել սյունակների կամ տողերի քանակը, որոնք քարտը պետք է զբաղեցնի ձեր section տեսքում (միայն այն քարտերում, որոնք աջակցում են այս ընտրանքը): Այս դասավորություններն աջակցվում են նաև մյուս բոլոր տեսքի տեսակներում:

<details>

<summary><b>Հասանելի քարտի դասավորություններ</b></summary>

| Դասավորություն | Նկարագրություն |
| --- | --- |
| `normal` | Սովորական դասավորությունը (չօպտիմիզացված section տեսքի համար) |
| `large` | Ավելի մեծ դասավորություն, որը կփոփոխի իր չափը՝ ըստ section տեսքում ընտրված տողերի (օպտիմիզացված section տեսքի համար) |
| `large-2-rows` | Ավելի մեծ դասավորություն՝ ենթակոճակների 2 տողով, որը կփոփոխի իր չափը՝ ըստ section տեսքում ընտրված տողերի (օպտիմիզացված section տեսքի համար) |
| `large-sub-buttons-grid` | Այս դասավորությունը ցուցադրում է ենթակոճակները ցանցի տեսքով, `rows`-ը պետք է սահմանվի առնվազն `2`-ի:

</details>

#### Օրինակներ

<details>

<summary>Մեծ կոճակ, որը ցուցադրում է էներգիայի վիճակագրություն՝ ենթակոճակների 2 տողով (սքրինշոթը կցված է)</summary>

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

<summary>Մեծ կոճակ մի քանի տողերով, 12 ենթակոճակով</summary>

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

## Պայմաններ

Որոշ ընտրանքներ կառավարվում են պայմաններով, որոնք գրվում են ճիշտ այնպես, ինչպես Home Assistant-ի [պայմանական քարտի](https://www.home-assistant.io/dashboards/conditional/) պայմանները.

- `visibility` [ենթակոճակի](#ենթակոճակներ) վրա՝ այն ցուցադրելու կամ թաքցնելու համար
- `trigger` [պոպ-ապի](#պոպ-ապ) վրա՝ այն բացելու համար, երբ պայմանները բավարարվում են
- `checkConditionsMet(conditions, hass)` ձեր [ձևանմուշների](#ձևանմուշներ) ներսում, երբ պատասխանը ձեզ պետք է ձեր սեփական կոդում

Home Assistant-ի պայմանի բոլոր տեսակները գնահատվում են՝ `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, ինչպես նաև `and`, `or` և `not` խմբերը: Աշխատում են նաև Home Assistant-ի պայմանների կառուցիչի պայմանները, նրանք, որոնք կոչվում են իրենց տիրույթի անունով, ինչպիսիք են `sun.is_up`, `light.is_on`, `zone.in_zone` կամ `temperature.is_value`՝ իրենց `target`, `options`, `behavior` և `for` կարգավորումներով:

<details>

<summary><b>Օրինակ</b></summary>

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
> Պայմանները գնահատվում են ձեր դիտարկիչում, ուստի դրանցից այն սակավաթիվները, որոնց պետք է Home Assistant-ի սերվերը, չեն կարող ճշգրիտ լինել. արևածագն ու մայրամուտը կարդացվում են `sun.sun` էությունից՝ նորից հաշվարկվելու փոխարեն, իսկ `for` տևողությունը չափվում է վերջին վիճակի փոփոխությունից՝ առանց recorder-ի պատմության:
>
> `view_columns`-ն ընդունվում է, բայց միշտ բավարարվում է, քանի որ ձեր տեսքի սյունակները երբեք Bubble Card-ը չէ, որ դասավորում է: Պայմանի տեսակը, որը Bubble Card-ը չգիտի, լուռ ձախողվելու փոխարեն մեկ անգամ հայտնում է իր մասին ձեր դիտարկիչի կոնսոլում, որպեսզի կարողանաք տառասխալը տարբերել բացակայող հնարավորությունից:

<br>

---

<br>

## Հպելու, կրկնակի հպելու և պահելու գործողություններ

Դուք կարող եք նաև օգտագործել Home Assistant-ի լռելյայն հպելու գործողությունները, կրկնակի հպելու գործողությունները և պահելու գործողությունները այն քարտերում, որոնք աջակցում են այս ընտրանքը: Օրինակ, սա թույլ է տալիս ցուցադրել «more info» պատուհանը՝ պահելով կոճակի պատկերակը, կամ գործարկել ծառայություն, երբ ենթակոճակը սեղմվում է:

**Նշում. երբ սահմանված է `double_tap_action`-ը, սովորական `tap_action`-ը կունենա 200ms հետաձգում, որպեսզի հնարավոր լինի հայտնաբերել
կրկնակի սեղմումը: Եթե այս հետաձգումն անցանկալի է, սահմանեք `double_tap_action`-ը `none`, որպեսզի անջատեք կրկնակի սեղմման մշակումը:**

### Գործողության ընտրանքներ

<details>

<summary><b>Ընտրանքներ (YAML և նկարագրություն)</b></summary>

| Անուն | Տեսակ | Աջակցվող ընտրանքներ | Նկարագրություն |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Կատարվող գործողությունը |
| `target` | object |  | Աշխատում է միայն `call-service`-ի հետ: Հետևում է [home-assistant-ի շարահյուսությանը](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Ձեր դասուղիջորի ցանկացած ուղի | Ուղին, որին անցնել (օրինակ՝ `'#kitchen'`՝ պոպ-ապ բացելու համար), երբ գործողությունը սահմանված է որպես navigate |
| `url_path` | string | Ցանկացած հղում | URL, որը կբացվի սեղմելիս (օրինակ՝ `https://www.google.com`), երբ գործողությունը `url` է |
| `service` | string | Ցանկացած ծառայություն | Կանչվող ծառայությունը (օրինակ՝ `media_player.media_play_pause`), երբ `action`-ը սահմանված է որպես `call-service` |
| `data` կամ `service_data` | object | Ցանկացած ծառայության տվյալ | Ներառվող ծառայության տվյալները (օրինակ՝ `entity_id: media_player.kitchen`), երբ `action`-ը սահմանված է որպես `call-service` |
| `confirmation` | object | Տես [հաստատում](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Ցուցադրել հաստատման պոպ-ապ (ոչ Bubble Card-ինը), վերասահմանում է լռելյայն `confirmation` օբյեկտը |

</details>

#### Օրինակ

<details>

<summary>Կոճակ պոպ-ապ բացելու համար</summary>

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

## Ոճավորում

Դուք կարող եք ավելացնել հատուկ ոճեր՝ բոլոր քարտերի CSS-ը փոփոխելու համար **card-mod-ը չօգտագործելով**, չորս եղանակով.

- Խմբագրիչում գնացեք այն քարտին, որը ցանկանում եք փոփոխել, ապա անցեք _Ոճավորման ընտրանքներ > Հատուկ ոճեր և JS ձևանմուշներ_ բաժինը, և ավելացրեք ձեր հատուկ ոճերը (ստուգեք ստորև բերված խորհուրդներն ու օրինակները):
- Խմբագրիչում (կամ [YAML](#մոդուլներ)-ում) գնացեք այն քարտին, որը ցանկանում եք փոփոխել, ապա անցեք _Մոդուլներ_ բաժինը, ապա ստեղծեք նոր մոդուլ (այն հասանելի կլինի բոլոր քարտերին), կամ գնացեք **Module Store** և տեղադրեք ցանկացած հասանելի մոդուլ (մոդուլների մասին ավելին կարող եք գտնել [ստորև](#մոդուլներ)):
- [Թեմայի](https://www.home-assistant.io/integrations/frontend/#defining-themes) ֆայլում, YAML-ում CSS փոփոխականներ ավելացնելով (դրանք հասանելի են վերևում՝ յուրաքանչյուր քարտի փաստաթղթավորման մեջ). Սա թույլ է տալիս համընդհանուր փոփոխություններ:

  <details>
  
  <summary>Օրինակ</a></summary>
  
  <br>

  Մի պատճենեք `Bubble:` տողը, դա այն թեմայի անունն է, որն օգտագործում եք: Դուք նաև պետք է հեռացնեք `--`-ը փոփոխականներից:

  Դուք պետք է գործարկեք [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) գործողությունը, որպեսզի թարմացնեք թեման ցանկացած փոփոխությունից հետո:

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
  
- YAML-ում `styles: |` ավելացնելով, որին հաջորդում են ձեր հատուկ ոճերը (ստուգեք ստորև բերված խորհուրդներն ու օրինակները):

> [!TIP]  
> **Հասկանալու համար, թե ոճի որ դասերը կարող են փոփոխվել**, կարող եք դիտել այս պահոցի [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) թղթապանակը: Յուրաքանչյուր քարտի թղթապանակում կգտնեք `styles.css` անունով ֆայլ: Այս ֆայլերը պարունակում են բոլոր կիրառված ոճերը: Սա շատ ավելի շատ հնարավորություններ է տալիս, քան CSS փոփոխականները, բայց այն պետք է ավելացվի առանձին յուրաքանչյուր քարտի համար:
> 
> Կարող եք նաև գտնել բազմաթիվ [օրինակներ համայնքից](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), կամ մի քանիսը [Home Assistant ֆորումից](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) մի փոքր որոնելով:
>
> Bubble թեման Home Assistant-ի համար (ինչպես սքրինշոթների վրա) կարող եք գտնել [այստեղ](https://github.com/Clooos/Bubble):
>
> Ուսուցողական տեսանյութը շուտով կհայտնվի իմ [YouTube ալիքում](https://www.youtube.com/@cloooos):

> [!IMPORTANT]  
> Խնդրում ենք նկատի ունենալ, որ գուցե անհրաժեշտ լինի ավելացնել `!important;` որոշ CSS ոճերի, որոնք արդեն սահմանված են (տես ստորև բերված օրինակները):

> [!TIP]  
> Ենթակոճակները կարող են թիրախավորվել անվան վրա հիմնված դասերով: Օրինակ, "My sub-button" անվանված ենթակոճակը կարող է ոճավորվել `.my-sub-button`-ով: Սահիկի ենթակոճակները նաև ցուցադրում են `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` և այլն:
>
> Անվան վրա հիմնված դասը փոխվում է, երբ ենթակոճակը վերանվանում եք, և թարգմանվում է, երբ անունը թարգմանվում է: Ենթակոճակի վրա դրեք `css_class`՝ ձեր սեփական դասը ստանալու համար, որը երբեք տեղ չի փոխում, ինչ անուն էլ ունենա և ինչ լեզու էլ լինի:

#### Օրինակներ

<details>

<summary>Ցանկացած Bubble Card-ի տառաչափի փոփոխում</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Հորիզոնական կոճակների սթեքում մեկ կոճակի ֆոնի գույնի փոփոխում</summary>

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

<summary>Քարտի ֆոնի գույնի փոփոխում</summary>

<br>

Սա աշխատում է Bubble Card-ի բոլոր տեսակների վրա (բացառությամբ պոպ-ապների).

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Սա նույնն է անում միայն կոճակի քարտում (այն աշխատում է պոպ-ապի վերնագրի համար). 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Գույնը `on` վիճակի ժամանակ փոխելու համար դիտեք ստորև բերված ոճի ձևանմուշները:

</details>

<details>

<summary>Կոճակի սահիկի գույնի փոփոխում</summary>

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

<summary>Բաժանարարի գծի գույնի փոփոխում</summary>

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

<summary>Պատկերակի գույնի փոփոխում</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Հորիզոնական կոճակների սթեքի պատկերակի համար:
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Պատկերակի պահանգի ֆոնի գույնի փոփոխում</summary>

<br>

Սա աշխատում է Bubble Card-ի բոլոր տեսակների վրա (բացառությամբ պոպ-ապների).

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Սա նույնն է անում պոպ-ապի վերնագրի համար. 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Ենթակոճակների չափի փոփոխում (կատարյալ է մեծ դասավորության համար)</summary>

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

<summary>Երկրորդ ենթակոճակի ֆոնի գույնի փոփոխում</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Պատկերակի չափի փոփոխում</summary>

<br>

Հիմնական պատկերակի համար:

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Ենթակոճակների պատկերակների համար:

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Ենթակոճակում պատկերակի փոխարեն նկարի օգտագործում</summary>

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

Պարզապես վերբեռնեք այս նկարը Home Assistant "www" թղթապանակի "pictures" թղթապանակում (կամ ձեր ուզած անունով):

</details>

<details>

<summary>Առաջադեմ օրինակ. Ենթակոճակների հորիզոնական շարք ստեղծելը (սքրինշոթով)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ես իսկապես սիրում եմ սա, օգտագործում եմ որպես վերնագիր իմ վահանակում:

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

## Ձևանմուշներ

**Bubble Card-ը չի աջակցում Jinja ձևանմուշները**, բայց առաջադեմ օգտագործողները կարող են ավելացնել JS ձևանմուշներ ուղղակիորեն իրենց [հատուկ ոճերում](#ոճավորում): Օրինակ, սա թույլ է տալիս դինամիկորեն փոխել պատկերակը, տեքստերը կամ տարրի գույները, ցուցադրել կամ թաքցնել տարրը պայմանականորեն (օրինակ, ենթակոճակը), կամ գրեթե ամեն ինչ՝ հիմնված վիճակի, հատկանիշի և այլնի վրա:

> [!TIP]  
> Ավելի շատ տեղեկություններ JS ձևանմուշների մասին [այստեղ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals): Իմ խորհուրդն է **միշտ դիտել ձեր բրաուզերի կոնսոլը**, որպեսզի համոզվեք, որ ամեն ինչ ճիշտ է աշխատում:

> [!IMPORTANT]  
> **Բոլոր ձևանմուշները, որոնք չեն փոփոխում CSS հատկություն, պետք է տեղադրվեն վերջում: Ինչպես, օրինակ, պատկերակի, տեքստի կամ ցանկացած տարրի փոփոխումը:**

#### Հասանելի փոփոխականներ և ֆունկցիաներ

<details>

<summary>Փոփոխականներ</summary>

<br>

Բոլոր քարտերի մեծ մասում դուք ունեք հասանելիություն այս փոփոխականներին.

- `state`-ը կվերադարձնի ձեր սահմանված `entity`-ի վիճակը:
  
- `entity`-ը կվերադարձնի ձեր սահմանված entity-ն, ինչպես `switch.test`-ը այս օրինակում:
  
- `icon`-ը կարող է օգտագործվել այսպես՝ պատկերակը փոխելու համար `icon.setAttribute("icon", "mdi:lightbulb")`:

- `subButtonState[0]`-ը կվերադարձնի ձեր առաջին ենթակոճակի սահմանված `entity`-ի վիճակը, `[0]`-ը առաջին ենթակոճակի վիճակն է, `[1]`-ը՝ երկրորդի...
  
- `subButtonIcon[0]`-ը կարող է օգտագործվել այսպես՝ առաջին ենթակոճակի պատկերակը փոխելու համար `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]`-ը առաջին ենթակոճակի պատկերակն է, `[1]`-ը՝ երկրորդի...
  
- `card`-ը կվերադարձնի քարտի տարրը DOM-ում:
  
- `hass`-ը առաջադեմ փոփոխական է, որը թույլ է տալիս ավելի մեծ վերահսկողություն, օրինակ կարող եք վերադարձնել `light.kitchen`-ի վիճակը այսպես `hass.states['light.kitchen'].state`, կամ հատկանիշ այսպես `hass.states[entity].attributes.brightness`:

- `this`-ը կվերադարձնի բազմաթիվ օգտակար տեղեկություններ ձեր կարգավորումների և վահանակի մասին, օգտագործեք սա միայն եթե գիտեք, թե ինչ եք անում:

</details>

<details>

<summary>Ֆունկցիաներ</summary>

<br>

Դուք ունեք հասանելիություն բոլոր գլոբալ JS ֆունկցիաներին, բայց նաև հետևյալներին.

- `getWeatherIcon`-ը կարող է օգտագործվել եղանակի պատկերակ վերադարձնելու համար՝ հիմնված վիճակի վրա, որը վերադարձնում է եղանակը: Օրինակ, կարող եք անել սա `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` երրորդ ենթակոճակի պատկերակը այսօրվա եղանակի պատկերակով փոխելու համար, `.forecast[1]?.condition`-ը վաղվա համար է...

  Դրա համար ձեզ հարկավոր կլինի ստեղծել ձևանմուշային սենսոր: Ահա ինչ կարող եք ավելացնել ձեր `configuration.yaml`-ում.
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
- `checkConditionsMet(conditions, hass)`-ը վերադարձնում է `true`, երբ [պայմանների](#պայմաններ) ցանկը բավարարվում է, օրինակ՝ `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`:
- `hass.formatEntityState(state)`-ը կարող է օգտագործվել վիճակը թարգմանելու համար (կարող է նաև օգտագործվել վիճակի միավորը ստանալու համար առանց ձեռքով ավելացնելու):
- `hass.formatEntityAttributeValue(state, "attribute")`-ը կարող է օգտագործվել հատկանիշը թարգմանելու համար (կարող է նաև օգտագործվել վիճակի միավորը ստանալու համար առանց ձեռքով ավելացնելու):

</details>

#### Օրինակներ

Ստորև կարող եք գտնել բազմաթիվ օրինակներ, բայց կարող եք նաև գտնել շատ առաջադեմ ձևանմուշներ իմ [Patreon էջում](https://www.patreon.com/c/Clooos), ինչպիսին է մեկը (իմ սիրելին), որը թույլ է տալիս մինչև չորս պայմանական կրծքանշան տեղադրված քարտի պատկերակների շուրջ: Սա նաև հիանալի միջոց է սովորելու Bubble Card-ի հատուկ ոճերի և ձևանմուշների բոլոր հնարավորությունների մասին:

<details>
<summary>Օրինակներ իմ Patreon էջից</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant-ի նման կրծքանշանների ավելացում ցանկացած քարտի</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Ձևաչափված ամսաթվի և ժամի ցուցադրում բաժանարարում՝ առանց entity օգտագործելու</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Ենթակոճակի վիճակի ցուցադրում երկու տողում</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Ընտրության ենթակոճակի պիտակների և պատկերակների կարգավորում</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Մշտական հիշեցման պոպ-ապի ավելացում, որը հայտնվում է միայն անհրաժեշտության դեպքում</a>
</p>

<br>

</details>

<details>

<summary>Կոճակի ֆոնի գույնի փոփոխում, որը կարմիր է, երբ <code>off</code> է, և կապույտ, երբ <code>on</code> է</summary>

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

<summary>Հորիզոնական կոճակների սթեքի համար entity-ի հիման վրա կոճակի ֆոնի գույնի փոփոխում</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Ենթակոճակի պայմանական ցուցադրում/թաքցում</summary>

<br>

Սա ցուցադրում է առաջին ենթակոճակը միայն այն ժամանակ, երբ իմ փոշեկուլը խրված է:
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Սա ցուցադրում է ենթակոճակը, երբ մարտկոցը 10%-ից ցածր է: Օգտակար է "Low battery" ցուցադրող ենթակոճակի հետ:
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Պատկերակի կամ ենթակոճակի պատկերակի պայմանական փոփոխում</summary>

<br>

Սա փոխում է կոճակի պատկերակը միայն այն ժամանակ, երբ փոշեկուլը խրված է:
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Սա փոխում է առաջին ենթակոճակի պատկերակը միայն այն ժամանակ, երբ փոշեկուլը խրված է:
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Պատկերակի կամ ենթակոճակի պատկերակի գույնի պայմանական փոփոխում</summary>

<br>

Սա փոխում է կոճակի պատկերակի գույնը՝ հիմնված իր վիճակի վրա:
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Սա փոխում է ենթակոճակի պատկերակի գույնը հիմնված իր վիճակի վրա: `.bubble-sub-button-1`-ը առաջին ենթակոճակն է, փոխարինեք `1`-ը, եթե ցանկանում եք փոխել այլ ենթակոճակի պատկերակ:
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Օդափոխիչի պատկերակի պայմանական անիմացիա</summary>

<br>

Սա պտտում է կոճակի պատկերակը, երբ օդափոխիչը `on` է:
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

<summary>Տեքստերի ձևանմուշավորում (ինչպես անուն կամ վիճակ)</summary>

<br>

Սա փոխում է կոճակի անունը/վիճակը "It's currently sunny"-ով, կախված ձեր եղանակից:
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
կամ երբ կիրառվում է ենթակոճակների համար.
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Եթե ցանկանում եք ձևանմուշավորել վիճակը (`.bubble-state`), մի միացրեք `show_state: true`, պարզապես միացրեք `show_attribute: true` առանց որևէ հատկանիշի:

</details>

<details>

<summary>Առաջադեմ օրինակ. Ենթակոճակի գույնի փոփոխում, երբ պոպ-ապը բաց է</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Առաջադեմ օրինակ. Բաժանարարի անվան ձևանմուշավորում ձեր լեզվով թարգմանված վիճակի հիման վրա</summary>

<br>

Կարող եք օգտագործել `hass.formatEntityState(state)` վիճակը թարգմանելու համար, և `hass.formatEntityAttributeValue(state, "attribute")` հատկանիշը թարգմանելու համար:

Սա փոխում է անունը և պատկերակը՝ հիմնված եղանակի վրա, "Nuageux"-ը ֆրանսերեն "Cloudy" է նշանակում:

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

## Մոդուլներ

Մոդուլները հզոր հատկություն են, որոնք թույլ են տալիս ձեզ պահել, կրկին օգտագործել և կիսվել ձեր հատուկ ոճերով և ձևանմուշներով ձեր բոլոր Bubble Card-երում: Փոխանակ նույն կոդը մի քանի քարտում պատճենելու և տեղադրելու, կարող եք ստեղծել մոդուլ և կիրառել այն, որտեղ ձեզ հարկավոր է: Սա շատ ավելի հեշտ և արդյունավետ է դարձնում ձեր վահանակի տեսքի և զգացողության կառավարումը:

Բայց այս հատկությունը շատ ավելի հզոր է, քան դա, այն թույլ է տալիս ձեզ ինքներդ ավելացնել իրական հատկություններ Bubble Card խմբագրիչում՝ օգտագործելով բոլոր լռելյայն [Home Assistant ձևի](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) ընտրանքները!  
Օբյեկտի ընտրիչը բարելավվել է ուղիղ փոփոխությունները ցուցադրելու և հատկանիշները ճիշտ աջակցելու համար:

Մոդուլը կարող է նաև պատասխանել Home Assistant-ի քարտերի ընտրիչին՝ ներկառուցված [էությունների առաջարկների](#էությունների-առաջարկներ) կողքին. օգտագործեք `suggestions`-ը այն քարտերի համար, որոնք կարող է նախապես նկարագրել, և `suggestions_code`-ը, երբ դրանք պետք է հաշվարկվեն ձեր կազմաձևից, օրինակ՝ պոպ-ապ, որը կառուցվում է ընտրված էությանը պատկանող տարածքի բոլոր էություններից: Երկու բանալիներն էլ փաստաթղթավորված են [այստեղ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions):

Կարող եք նաև զննել **Module Store**-ը՝ [համայնքի կողմից ստեղծված մոդուլներ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) գտնելու և տեղադրելու համար, կամ կիսվել ձեր սեփական ստեղծագործություններով:

> [!TIP]
> Մոդուլի կոդն աշխատում է ճիշտ նույն կերպ, ինչպես քարտի `styles` բաժնի կոդը: [Ձևանմուշներ](#ձևանմուշներ) բաժնի բոլոր նույն փոփոխականներն ու ֆունկցիաները հասանելի են:

<br>

### Սկզբնական կարգավորում

> [!IMPORTANT]
> Սկսած v3.1.0-ից, Bubble Card Tools-ը հանդիսանում է մոդուլների համար խորհուրդ տրվող պահեստավորման հենքային ծառայությունը: Հին ձևանմուշային սենսորի մեթոդը դեռ աշխատում է գոյություն ունեցող կարգավորումների համար, բայց նոր մոդուլներն ու Module Store-ի հատկությունները լավագույնս աջակցվում են Bubble Card Tools-ի միջոցով:

Bubble Card Tools ինտեգրումը միացնում է Module Editor-ը և Module Store-ը, և պահպանում է մոդուլները որպես առանձին YAML ֆայլեր: Գոյություն ունեցող մոդուլները ինքնաշխատ կերպով տեղափոխվում են:

Տեղադրման և կարգավորման քայլերը բացատրված են այստեղ.

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor-ը

Կարող եք հասանելիություն ունենալ Module Editor-ին ցանկացած քարտի կարգավորումներից՝ **Modules** բաժնում: Խմբագրիչն առաջարկում է երկու հիմնական ներդիր.

#### My Modules ներդիրը

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Այս ներդիրը ցուցադրում է ձեր բոլոր տեղադրված մոդուլները և թույլ է տալիս.

- **Կիրառել** գոյություն ունեցող մոդուլներ ընթացիկ քարտին
- **Ստեղծել** նոր մոդուլ զրոյից
- **Խմբագրել** գոյություն ունեցող մոդուլներ ուղիղ նախադիտումով
- **Ջնջել** մոդուլներ, որոնք այլևս ձեզ պետք չեն
- **Որոնել** և **տեսակավորել** մոդուլներ (այբբենական, վերջին, նախ ակտիվները)
- **Սահմանել գլոբալ կարգավիճակ**, որպեսզի մոդուլն ինքնաշխատ կիրառվի բոլոր քարտերին
- **Ներմուծել/Արտահանել** մոդուլներ պահուստավորման կամ կիսվելու համար
- **Գրել էությունների առաջարկներ** մոդուլի խմբագրիչում՝ **Ընտրովի. էությունների առաջարկներ** բաժնում, որպեսզի ձեր մոդուլն առաջարկվի Home Assistant-ի քարտերի ընտրիչում: Ինչպես կանոնները, այնպես էլ հաշվարկվող առաջարկները ստուգվում են գրելու ընթացքում, այնտեղ սխալը խոչընդոտում է պահպանմանը, իսկ նախադիտումը ցույց է տալիս առաջարկվող քարտերը ձեր ընտրած ցանկացած էության համար

#### Module Store ներդիրը

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Այս ներդիրը կցուցադրի [համայնքի կողմից ստեղծված բոլոր հասանելի մոդուլները](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), և թույլ է տալիս.

- **Զննել** համայնքի կողմից ստեղծված բոլոր մոդուլները
- **Որոնել** և զտել մոդուլները ըստ անվան, համատեղելիության կամ բանալի բառերի
- **Տեղադրել** մոդուլներ մեկ սեղմումով
- **Թարմացնել** տեղադրված մոդուլները, երբ նոր տարբերակներ հասանելի են

> [!TIP]
> Խմբագրիչում կարող եք միացնել չաջակցվող մոդուլները փորձարկելու համար այն մոդուլները, որոնք դեռ նշված չեն որպես համատեղելի տվյալ քարտի տեսակի հետ:

<br>

### Ինչպես օգտագործել մոդուլները

#### Նոր մոդուլի ստեղծում

<details>

<summary>Սեղմեք ընդարձակելու համար</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Գնացեք ցանկացած քարտի խմբագրիչ և ընդարձակեք **Modules** բաժինը:
2. Սեղմեք **Create new module**-ի վրա:
3. Լրացրեք մոդուլի տեղեկությունները:
4. Գրեք ձեր CSS և/կամ JavaScript ձևանմուշային կոդը **Code** խմբագրիչում:
5. (Ընտրովի) Ստեղծեք հատուկ կարգավորումների ինտերֆեյս **Editor** բաժնում (ինչպես գույնի ընտրիչը վերևի սքրինշոթում, ամբողջական փաստաթղթավորումը հասանելի է [այստեղ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)):
6. (Ընտրովի) Գրեք ձեր **Էությունների առաջարկները**, որպեսզի ձեր մոդուլն առաջարկվի Home Assistant-ի քարտերի ընտրիչում: Վահանակը ստուգում է գրածը մուտքագրման ընթացքում, իսկ դրա նախադիտումը ցույց է տալիս հենց առաջարկվող քարտերը ձեր ընտրած էության համար:
7. Սեղմեք **Save**-ի վրա:

Ձեր մոդուլն այժմ հասանելի է օգտագործման ցանկացած ձեր քարտում:

<br>

</details>

#### Մոդուլի կիրառում քարտի վրա

<details>

<summary>Սեղմեք ընդարձակելու համար</summary>

<br>

- **Խմբագրիչի միջոցով.**

  - Գնացեք այն քարտի խմբագրիչին, որին ցանկանում եք կիրառել մոդուլը:
  - Ընդարձակեք **Modules** բաժինը:
  - Սեղմեք ցանկից այն մոդուլի վրա, որը ցանկանում եք կիրառել:
  - "Apply to" ներքո սեղմեք "This card"-ի վրա: Մոդուլն այժմ ակտիվ է: Կարող եք կիրառել մի քանի մոդուլ նույն քարտի վրա:

- **YAML-ի միջոցով.**

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

#### Մոդուլի գլոբալ կիրառում

<details>

<summary>Սեղմեք ընդարձակելու համար</summary>

<br>

Կարող եք սահմանել մոդուլ, որն ինքնաշխատ կերպով կկիրառվի բոլոր Bubble Card-երին.

**Սա հասանելի չէ խմբագրիչով մոդուլների համար, քանի որ դրանք պահանջում են հատուկ կարգավորում աշխատելու համար:**

- **Խմբագրիչի միջոցով.**

  - Module editor-ում գտեք ձեր մոդուլը **My Modules** ներդիրում:
  - Փոխարկեք **All cards** կոճակը մոդուլի անվան կողքին:
  - Մոդուլն այժմ ինքնաշխատ կերպով կկիրառվի բոլոր քարտերին:
 
- **YAML-ի միջոցով.**

  Ձեր մոդուլի YAML կարգավորումներում (`bubble-modules.yaml`-ում), պարզապես ավելացրեք `is_global: true`:

<br>

</details>

#### Առանձին քարտի բացառում գլոբալ մոդուլից

<details>

<summary>Սեղմեք ընդարձակելու համար</summary>

<br>

Եթե ունեք գլոբալ մոդուլ, բայց ցանկանում եք բացառել այն կոնկրետ քարտից.

- **Խմբագրիչի միջոցով.**
  
  - Քարտի **Modules** բաժնում կտեսնեք գլոբալ մոդուլների ցանկը:
  - Սեղմեք գլոբալ մոդուլի վրա, անջատեք "This card"-ը, որպեսզի բացառեք այն այս կոնկրետ քարտից:

- **YAML-ի միջոցով.**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Ձեր մոդուլի կիսում Module Store-ում

<details>

<summary>Սեղմեք ընդարձակելու համար</summary>

<br>

Ձեր մոդուլը Module Store-ում կիսելու համար, Module Editor-ում, ներքևում "Export Module" բաժնում, սեղմեք "Copy for GitHub"-ի վրա և տեղադրեք բովանդակությունը [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) կատեգորիայի նոր քննարկման մեջ: **Խմբագրեք նկարագրությունը** (անհրաժեշտության դեպքում), **օրինակը** (YAML օգտագործողների համար), և հիշեք **ներառել առնվազն մեկ սքրինշոթ** Module Store-ի համար:

**Ձեր մոդուլը հասանելի է դառնում հենց դրանից հետո** (Store-ի թարմացումից հետո), այնպես որ կրկնակի ստուգեք, որ ամեն ինչ ճիշտ է գրված, և մոդուլն աշխատում է ինչպես սպասվում է: Դուք, իհարկե, կարող եք խմբագրել/թարմացնել մոդուլը կիսվելուց հետո:

<br>

</details>

#### Տարբերակների կառավարում

<details>

<summary>Սեղմեք ընդարձակելու համար</summary>

<br>

Module Store-ը ինքնաշխատ կերպով ստուգում է տեղադրված մոդուլների թարմացումները: Երբ թարմացումներ հասանելի են.

1. Կտեսնեք թարմացման ցուցիչ **Module Store** ներդիրում:
2. Սեղմեք **Update** հասանելի թարմացումներ ունեցող մոդուլներում:
3. Հաստատեք թարմացումը Module Store-ում:

<br>

</details>

#### Աջակցվող քարտի տեսակների սահմանում

<details>

<summary>Սեղմեք ընդարձակելու համար</summary>

<br>

Որոշ մոդուլներ կարող են համատեղելի չլինել բոլոր քարտի տեսակների հետ: Կարող եք նշել, թե որ քարտերն է աջակցում մոդուլը:  
Եթե ցանկանում եք, որ մոդուլը համատեղելի լինի **բոլոր քարտերի** հետ, պարզապես բաց թողեք `supported` դաշտը (կամ օգտագործեք **All cards** ընտրանքը խմբագրիչում):

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

### Օրինակներ

<details>
<summary>Հիմնական ոճավորման մոդուլ</summary>

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
<summary>Հատուկ կարգավորումներով մոդուլ</summary>

<br>

Այս մոդուլը հասանելի է [այստեղ](https://github.com/Clooos/Bubble-Card/discussions/1231):

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

Ավելի շատ օրինակներ կարող եք գտնել Module Store-ում, կամ [այստեղ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules):

<br>

---

<br>

## Տեղայնացում

Bubble Card-ը խոսում է ձեր լեզվով: Դրա խմբագրիչը թարգմանված է այն 64 լեզուներով, որոնք աջակցում է Home Assistant-ը, և ամենուր, որտեղ Home Assistant-ն արդեն ունի բառ ինչ-որ բանի համար, օգտագործվում է հենց նրա ձևակերպումը, որպեսզի երկու միջերեսներում էլ նույն տերմինները կարդաք:

Խմբագրիչի ներքևում՝ տարբերակի համարի կողքին, **Ավտոմատ** անջատիչը հետևում է ձեր Home Assistant-ի լեզվին: Անջատեք այն, և ամբողջ խմբագրիչը կվերադառնա անգլերենի, ինչը հարմար է ուսուցողական նյութին հետևելու կամ խնդիր հաղորդելու համար: Ձեր ընտրությունը հիշվում է ձեր դիտարկիչում:

Այս փաստաթղթերը նույնպես թարգմանված են՝ [62 լեզվով](languages.md): Այդ էջերը բաց են բոլորի համար, ուստի ձևակերպումը, որը չի համապատասխանում ձեր սեփական Home Assistant-ին, կարելի է ուղղել մի քանի սեղմումով: Անգլերեն տարբերակը մնում է հենց բովանդակության հղումը:

<br>

---

<br>

## Օգնություն

Ազատ զգացեք բացել issue, եթե ինչ-որ բան չի աշխատում այնպես, ինչպես սպասվում է: 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Ունե՞ք հարցեր կամ մտքեր Bubble Card-ի մասին: Ցանկանո՞ւմ եք կիսվել ձեր վահանակներով կամ հայտնագործություններով: Կարող եք գնալ Home Assistant ֆորում, Bubble Card subreddit կամ GitHub Discussions բաժինը:

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Ներդրում

Ներդրումները ողջունելի են! Անկախ նրանից՝ սխալների ուղղում, նոր հատկություններ, թարգմանություններ, թե փաստաթղթավորման բարելավումներ, ազատ զգացեք բացել pull request:

Մինչև սկսելը, խնդրում ենք կարդալ [ծրագրավորողի ուղեցույցը](DEVELOPERS.md), որը ներկայացնում է, թե ինչպես կարգավորել ձեր տեղական միջավայրը, կառուցել նախագիծը և փորձարկել ձեր փոփոխությունները:

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Նվիրատվություն

Ես նվիրում եմ իմ ազատ ժամանակի մեծ մասը այս նախագիծը հնարավորինս լավը դարձնելուն: Այնպես որ, եթե գնահատում եք իմ աշխատանքը, ցանկացած նվիրատվություն կլինի հիանալի միջոց՝ ցույց տալու ձեր աջակցությունը 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Շնորհակալություն բոլորին ձեր աջակցության համար, դուք բոլորդ իմ ամենամեծ մոտիվացիան եք:

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
