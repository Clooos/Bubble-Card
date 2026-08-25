<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ова страница је аутоматски превод. У случају недоумице, важи [оригинална документација на енглеском](../README.md). Нека реченица звучи погрешно? Свака помоћ је добродошла, а [исправљање ове странице](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.sr.md) траје само минут: GitHub се брине о форку и pull request-у. Хвала унапред! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Прочитајте ово на другом језику](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card је минималистичка и прилагодљива колекција картица за Home Assistant, са модерним искачућим прозорима и интегрисаним Module Store-ом који садржи преко 100 модула које је направила заједница.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Садржај

**[`Инсталација`](#инсталација)**  **[`Конфигурација`](#конфигурација)**  **[`Предлози за ентитете`](#предлози-за-ентитете)**  **[`Искачући прозор`](#искачући-прозор)**  **[`Хоризонтални низ дугмади`](#хоризонтални-низ-дугмади)**  **[`Дугме`](#дугме)**  **[`Медија плејер`](#медија-плејер)**  **[`Ролетна`](#ролетна)**  **[`Избор`](#избор)**  **[`Клима`](#клима)**  **[`Календар`](#календар)**  **[`Раздвајач`](#раздвајач)**  **[`Празна колона`](#празна-колона)**  **[`Само под-дугмад`](#само-под-дугмад)**  **[`Под-дугмад`](#под-дугмад)**  **[`Распореди картице`](#распореди-картице)**  **[`Услови`](#услови)**  **[`Акције`](#акције-додира-двоструког-додира-и-држања)**  **[`Стилизовање`](#стилизовање)**  **[`Шаблони`](#шаблони)**  **[`Модули`](#модули)**  **[`Локализација`](#локализација)**  **[`Помоћ`](#помоћ)**  **[`Допринос`](#допринос)**  **[`Донирајте`](#донирајте)**

<br>

## Инсталација

**Најнижа подржана верзија Home Assistant-а:** 2023.9.0

<details>

<summary>Без HACS-а</summary>

<br>

1. Преузмите ову датотеку: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Додајте ову датотеку у фолдер `<config>/www`. Да бисте добили едитор на свом језику, преузмите и `bubble-card-<lang>.json` из [фолдера dist](https://github.com/Clooos/Bubble-Card/tree/main/dist), на пример `bubble-card-fr.json`, и ставите га поред `bubble-card.js` (без њега едитор остаје на енглеском)
3. На свом контролном панелу кликните на иконицу у горњем десном углу, а затим на `Edit dashboard`
4. Поново кликните на ту иконицу, а затим кликните на `Manage resources`
5. Кликните на `Add resource`
6. Копирајте и налепите ово: `/local/bubble-card.js?v=1`
7. Кликните на `JavaScript Module`, а затим на `Create`
8. Вратите се назад и освежите страницу
9. Сада можете кликнути на `Add card` у доњем десном углу и потражити `Bubble Card`
10. После сваке измене фајла мораћете да измените `/local/bubble-card.js?v=1` и промените верзију на било који већи број

Ако не ради, само покушајте да очистите кеш прегледача.

</details>

<details>

<summary>Са HACS-ом (препоручено)</summary>

<br>

Овај метод вам омогућава да добијате ажурирања директно преко Home Assistant Community Store-а

1. Ако HACS још увек није инсталиран, преузмите га пратећи упутства на [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Наставите са основном конфигурацијом HACS-а пратећи упутства на [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. У бочној траци идите на "HACS"
4. Потражите "Bubble Card" или кликните на плаво дугме испод
5. Кликните на "Download"
6. Вратите се на свој контролни панел и кликните на иконицу у горњем десном углу, а затим на `Edit dashboard`
7. Сада можете кликнути на `Add card` у доњем десном углу и потражити `Bubble Card`

Ако не ради, покушајте да очистите кеш прегледача/апликације (на свим уређајима ако је потребно).

#### Видео снимци

Такође можете погледати мој YouTube канал за детаљне видео туторијале.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Конфигурација

Све опције могу да се подесе у Home Assistant едитору. Али у документацији испод можете пронаћи више детаља и YAML.

<details>

<summary><b>Главне опције (YAML + опис)</b></summary>

| Назив | Тип | Захтев | Подржане опције | Опис |
| --- | --- | --- | --- | --- |
| `type` | string | **Обавезно** | `custom:bubble-card` | Тип картице |
| `card_type` | string | **Обавезно** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` или `sub-buttons` | Тип Bubble Card картице, погледајте испод |
| `styles` | object list | Опционо | Било који CSS стилски лист | Омогућава вам да прилагодите CSS ваше Bubble Card картице, погледајте [стилизовање](#стилизовање) |

</details>

<details>

<summary><b>Глобалне CSS променљиве (погледајте <a href="#стилизовање">Стилизовање</a>)</b></summary>

| Променљива | Очекивана вредност | Опис |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Полупречник заобљења ивица за све подржане елементе |
| `--bubble-main-background-color` | `color` | Главна боја позадине за све подржане елементе |
| `--bubble-secondary-background-color` | `color` | Секундарна боја позадине за све подржане елементе |
| `--bubble-accent-color` | `color` | Акцентна боја за све подржане елементе |
| `--bubble-icon-border-radius` | `px` | Полупречник заобљења ивица иконице за све подржане елементе |
| `--bubble-icon-background-color` | `color` | Боја позадине иконице за све подржане елементе |
| `--bubble-sub-button-border-radius` | `px` | Полупречник заобљења ивица за сва под-дугмад |
| `--bubble-sub-button-background-color` | `color` | Боја позадине за сва под-дугмад |
| `--bubble-box-shadow` | погледајте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка (box shadow) за све подржане елементе |
| `--bubble-border` | погледајте [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Ивица (border) за све подржане картице |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Погледајте овај [видео](https://www.youtube.com/watch?v=0hSQOlBxKKI) да бисте сазнали више о Bubble Card картици и њеним могућностима.** Мој YouTube канал је прилично нов и фокусиран је на туторијале о Home Assistant-у и Bubble Card картици. Не устручавајте се да се претплатите како бисте помогли да повећам видљивост мог канала. Хвала вам унапред!

<br>

---

<br>

## Предлози за ентитете

Од Home Assistant 2026.6, бирање ентитета у бирачу картица нуди вам неколико готових картица, а Bubble Card тој листи додаје сопствене рецепте. Изаберите светло и биће вам понуђена картица са клизачем осветљења, уз варијанту са температуром боје, варијанту са бојом и варијанту са засићеношћу када их ваше светло подржава. Изаберите ролетну и добијате њен клизач положаја, изаберите медија плејер и добијате и варијанту са листом извора, изаберите усисивач и добијате његову дугмад за покретање, паузу и повратак на базу. Сваки предлог је уобичајена конфигурација Bubble Card приказана као преглед уживо, тако да можете узети најближи и наставити да га уређујете као и обично.

Оно што вам се нуди зависи од тога шта ваш ентитет заиста може: светло без канала осветљења добија прекидач уместо клизача, ролетна која не може да се нагиње не добија варијанту са нагибом, а ентитет климе добија своје унапред подешене режиме само када их има. Класичне ставке следе испод предлога Bubble Card када имају смисла: картица намењена том типу ентитета, обично дугме и клизач.

> [!TIP]
> Модули могу да додају сопствене предлоге на ту листу, видите [модуле](#модули).

<br>

---

<br>

## Искачући прозор

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ова картица вам омогућава да направите искачући прозор са било којим садржајем. Сваки искачући прозор је **подразумевано скривен** и може се отворити циљањем његовог линка (нпр. `'#pop-up-name'`), било којом картицом која подржава `navigate` [акцију](#акције-додира-двоструког-додира-и-држања), или помоћу [хоризонталног низа дугмади](#хоризонтални-низ-дугмади) који је укључен.

> [!TIP]
> ### Окидач искачућег прозора 
> Ова функција вам омогућава да отворите искачући прозор на основу стања било ког ентитета, на пример, можете отворити искачући прозор "Безбедност" са камером када се особа налази испред ваше куће. Такође можете направити toggle помоћник (input_boolean) и покренути његово отварање/затварање у аутоматизацији.
> <details>
> <summary>Отварање искачућег прозора када је <code>binary_sensor</code> у стању <code>on</code></summary>
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
> ### Различити начини затварања искачућег прозора 
> Постоји много начина да затворите искачући прозор. На пример, можете превући прстом од заглавља искачућег прозора ка дну, дугим превлачењем унутар искачућег прозора ка дну, притиском на Escape на рачунару, уклањањем hash-а из URL-а или једноставно притиском на дугме за затварање.
>


### Опције искачућег прозора

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Назив | Тип | Захтев | Подржане опције | Опис |
| --- | --- | --- | --- | --- |
| `hash` | string | **Обавезно** | Било који јединствени hash (нпр. `'#kitchen'`) са ' ' | Овако ћете отворити свој искачући прозор |
| `popup_style` | string | Опционо | `bubble` (подразумевано) или `classic` | Дефинише визуелни стил искачућег прозора |
| `popup_mode` | string | Опционо | `default` (подразумевано), `fit-content`, `centered` или `adaptive-dialog` | Дефинише режим распореда искачућег прозора |
| `with_bottom_offset` | boolean | Опционо | `true` или `false` (подразумевано) | Користи се само са `popup_mode: fit-content` или `adaptive-dialog`. Примењује доњи размак на мобилном уређају, корисно када ваш контролни панел садржи footer картицу. |
| `full_width_on_mobile` | boolean | Опционо | `true` или `false` (подразумевано) | Користи се само са `popup_mode: centered`. Проширује искачући прозор на пуну ширину екрана на мобилном уређају, корисно на мањим екранима. |
| `performance_mode` | string | Опционо | `default` (подразумевано) или `performance` | Оптимизује анимацију отварања искачућег прозора. `performance` благо одлаже рендеровање садржаја и замућење позадине, а такође онемогућава замућење позадине (backdrop blur) ако је постављено. |
| `auto_close` | string | Опционо | Тајмаут у милисекундама (нпр. `10000` за 10с) | Аутоматски затвара искачући прозор након тајмаута |
| `close_on_click` | boolean | Опционо | `true` или `false` (подразумевано) | Аутоматски затвара искачући прозор после било које интеракције |
| `close_by_clicking_outside` | boolean | Опционо | `true` (подразумевано) или `false` | Затвара искачући прозор кликом ван њега |
| `width_desktop` | string | Опционо | Било која CSS вредност | Ширина на рачунару (`100%` подразумевано на мобилном) |
| `margin` | string | Опционо | Било која CSS вредност | Користите ово **само** ако ваш искачући прозор није добро центриран на мобилном (нпр. `13px`) |
| `margin_top_mobile` | string | Опционо | Било која CSS вредност | Горња маргина на мобилном (нпр. `-56px` ако је ваше заглавље скривено) |
| `margin_top_desktop` | string | Опционо | Било која CSS вредност | Горња маргина на рачунару (нпр. `50vh` за искачући прозор упола мање величине или `calc(100vh - 400px)` за фиксну висину од `400px`) |
| `bg_color` | string | Опционо | Било која hex, rgb или rgba вредност | Боја позадине вашег искачућег прозора (нпр. `#ffffff` за белу позадину) |
| `bg_opacity` | string | Опционо | Било која вредност од `0` до `100` | Непрозирност позадине вашег искачућег прозора (нпр. `100` без провидности) |
| `bg_blur` | string | Опционо | Било која вредност од `0` до `100` | Ефекат замућења позадине вашег искачућег прозора, **ово ради само ако `bg_opacity` није постављено на `100`** (нпр. `0` без замућења)|
| `shadow_opacity` | string | Опционо | Било која вредност од `0` до `100` | Непрозирност сенке вашег искачућег прозора (нпр. `0` да је сакријете) |
| `hide_backdrop` | boolean | Опционо | `true` или `false` (подразумевано) | Поставите ово на true на првом искачућем прозору вашег главног контролног панела да бисте онемогућили позадину (backdrop) на свим искачућим прозорима. |
| `background_update` | boolean | Опционо | `true` или `false` (подразумевано) | Ажурира садржај искачућег прозора у позадини (није препоручљиво) |
| `trigger` | object или list | Опционо | Погледајте [услове](#услови) | Отвара овај искачући прозор када су услови испуњени |
| `trigger_entity` | string | Опционо | Било који ентитет | Отвара овај искачући прозор на основу стања било ког ентитета, једноставан облик `trigger` |
| `trigger_state` | string | Опционо (**Обавезно** ако је дефинисано `trigger_entity`) | Било које стање ентитета | Стање ентитета за отварање искачућег прозора |
| `trigger_close` | boolean | Опционо | `true` (подразумевано) или `false` | Затвара искачући прозор када услови више нису испуњени. Подразумевано је `false` ако користите старији пар `trigger_entity` и `trigger_state` |
| `open_action` | object | Опционо | Погледајте [акције](#акције-додира-двоструког-додира-и-држања) | Покреће акцију при отварању искачућег прозора |
| `close_action` | object | Опционо | Погледајте [акције](#акције-додира-двоструког-додира-и-држања) | Покреће акцију при затварању искачућег прозора |
| `show_header` | boolean | Опционо | `true` (подразумевано) или `false` | Приказује/скрива заглавље искачућег прозора у потпуности |
| `show_previous_button` | boolean | Опционо | `true` или `false` (подразумевано) | Приказује дугме за назад поред дугмета за затварање и враћа на претходни искачући прозор када је доступно |
| `show_close_button` | boolean | Опционо | `true` (подразумевано) или `false` | Приказује или скрива дугме за затварање, задржавајући остатак заглавља видљивим |
| `buttons_position` | string | Опционо | `right` (подразумевано) или `left` | Позиција дугмади за затварање и назад у заглављу |
| `cards` | list | Опционо | Било која Bubble Card картица, Home Assistant картица или прилагођена картица | Дефинише садржај вашег искачућег прозора. Погледајте пример искачућег прозора испод. |
| Такође имате приступ [свим подешавањима дугмета](#дугме) за заглавље искачућег прозора. | | Опционо | | Ако није дефинисано, заглавље се неће приказати |

</details>

<details>

<summary><b>CSS променљиве (погледајте <a href="#стилизовање">Стилизовање</a>)</b></summary>

| Променљива | Очекивана вредност | Опис |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Полупречник заобљења ивица за искачући прозор |
| `--bubble-pop-up-main-background-color` | `color` | Главна боја позадине за подржане елементе искачућег прозора |
| `--bubble-pop-up-background-color` | `color` | Боја позадине искачућег прозора |
| `--bubble-backdrop-background-color` | `color` | Боја позадине за backdrop |
| Такође имате приступ [свим CSS променљивама дугмета](#опције-дугмета) за заглавље искачућег прозора. | | |

</details>


### Самосталан формат искачућег прозора (v3.2.0+)

Од верзије v3.2.0, искачући прозори користе нови самосталан формат где су картице садржаја дефинисане директно унутар искачућег прозора коришћењем опције `cards`. Ово пружа бољи учинак и ново искуство уређивања превлачењем засновано на секцијама.


#### Примери

<details>

<summary>Искачући прозор (самосталан формат)</summary>

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

<summary>Дугме за отварање искачућег прозора</summary>

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

## Хоризонтални низ дугмади

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ова картица је добар пратилац искачућег прозора, омогућавајући вам да отворите одговарајуће искачуће прозоре. Такође вам омогућава да отворите било коју страницу вашег контролног панела. Уз то, можете додати сензоре покрета/присутности тако да се редослед дугмади прилагођава према просторији у коју сте управо ушли. Ова картица се може скроловати, остаје видљива и делује као footer.

> [!IMPORTANT]  
> Ова картица мора бити последња у вашем приказу (после сваке картице и искачућег прозора). Не може бити унутар било ког stack-а.

### Опције хоризонталног низа дугмади

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Назив | Тип | Захтев | Подржане опције | Опис |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Обавезно** | Hash искачућег прозора (нпр. `'#kitchen'`) са ' ' или било који линк | Линк за отварање |
| `1_name` | string | Опционо | Било који стринг | Назив за ваше дугме |
| `1_icon` | string | Опционо | Било која `mdi:` иконица | Иконица за ваше дугме |
| `1_entity` | string | Опционо | Било које светло или група светла | Приказује боју тог светла у позадини |
| `1_pir_sensor` | string | Опционо | Било који бинарни сензор | Најмање један pir сензор или више за `auto_order`, у ствари ово ради и са било којим типом ентитета, на пример можете додати групе светла и редослед ће се мењати на основу времена последње промене стања. |
| `auto_order` | boolean | Опционо | `true` или `false` (подразумевано) | Мења редослед дугмади према времену последње промене `_pir_sensor`, **мора бити `false` ако немате ниједан `_pir_sensor` у свом коду** |
| `margin` | string | Опционо | Било која CSS вредност | Користите ово **само** ако ваш `horizontal-buttons-stack` није добро центриран на мобилном (нпр. `13px`) |
| `width_desktop` | string | Опционо | Било која CSS вредност | Ширина на рачунару (`100%` подразумевано на мобилном) |
| `is_sidebar_hidden` | boolean | Опционо | `true` или `false` (подразумевано) | Исправља позицију хоризонталног низа дугмади ако је бочна трака скривена на рачунару (само ако сте сами направили измену да је сакријете) |
| `rise_animation` | boolean | Опционо | `true` (подразумевано) или `false` | Поставите ово на `false` да онемогућите анимацију која се активира након учитавања странице |
| `highlight_current_view` | boolean | Опционо | `true` или `false` (подразумевано) | Истиче тренутни hash / приказ уз глатку анимацију |
| `hide_gradient` | boolean | Опционо | `true` или `false` (подразумевано) | Поставите ово на `false` да сакријете градијент |

> [!IMPORTANT]  
> Променљиве које почињу бројем дефинишу ваша дугмад, само промените тај број да бисте додали још дугмади (погледајте пример испод).

</details>

<details>

<summary><b>CSS променљиве (погледајте <a href="#стилизовање">Стилизовање</a>)</b></summary>

| Променљива | Очекивана вредност | Опис |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Полупречник заобљења ивица за дугмад хоризонталног низа |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Боја позадине за дугмад хоризонталног низа |

</details>


#### Пример

<details>

<summary>Хоризонтални низ дугмади који се сам реорганизује на основу сензора присутности</summary>

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

## Дугме

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ова картица је веома свестрана. Може се користити као **прекидач**, **клизач**, **стање** или дугме за **назив/текст**.

> [!TIP]
> ### Које су разлике између свих типова дугмади?
>
> - **Прекидач (switch):** Ово је подразумевани тип дугмета. Подразумевано, оно пребацује стање ентитета, а боја позадине се мења на основу стања ентитета или боје светла. Акцију можете променити у одељку **Tap action on card**.
>
> - **Клизач (slider):** Овај тип дугмета омогућава контролу ентитета са подесивим опсегом. Идеалан је за пригушивање светла, а боја попуне ће се прилагодити боји светла. Такође га можете користити за приказ вредности, попут нивоа батерије.
>   Подржани ентитети за клизаче:
>   - Светло (осветљеност)
>   - Медија плејер (јачина звука)
>   - Ролетна (позиција)
>   - Вентилатор (проценат)
>   - Клима (температура)
>   - Input number и number (вредност)
>   - Сензор батерије (проценат, само за читање)
>
>   Такође можете користити било који ентитет са нумеричким стањем тако што ћете онемогућити филтер ентитета у одељку **Slider settings**, а затим дефинисати вредности `min` и `max`. Ова опција је само за читање.
>
> - **Стање (state):** Савршено за приказ информација са сензора или било ког ентитета. Када га притиснете, приказаће се панел „More info" тог ентитета. Боја позадине се не мења.
>
> - **Назив/текст (name):** Једини тип дугмета који не захтева ентитет. Омогућава приказ кратког текста, назива или наслова. Можете му додати и акције. Боја позадине се не мења.

### Опције дугмета

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Ентитет за контролу |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` или `name` | Понашање вашег дугмета |
| `name` | string | Optional | Any string | Назив за ваше дугме, ако није дефинисан приказаће се назив ентитета |
| `icon` | string | Optional | Any `mdi:` icon | Икона за ваше дугме, ако није дефинисана приказаће се икона ентитета или `entity-picture` |
| `force_icon` | boolean | Optional | `true` или `false` (default) | Даје предност икони уместо `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Само за светла.** Користи акцентну боју теме уместо боје светла.                         |
| `show_state` | boolean | Optional | `true` или `false` (default) | Прикажи или сакриј стање вашег `entity` |
| `show_name` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј назив |
| `show_icon` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј икону |
| `show_last_changed` | boolean | Optional | `true` или `false` (default) | Прикажи време последње промене вашег `entity` |
| `show_last_updated` | boolean | Optional | `true` или `false` (default) | Прикажи време последњег ажурирања вашег `entity` |
| `show_attribute` | boolean | Optional | `true` или `false` (default) | Прикажи атрибут вашег `entity` испод његовог `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Атрибут за приказ (нпр. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) или `false` | Дозволи да се текст помера када садржај премаши величину контејнера |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` или `hold_action`, see below | Омогућава промену подразумеваних акција на клик дугмета. |
| `tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на клик иконе, ако није дефинисано, користиће се `more-info` |
| `double_tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на дупли клик иконе, ако није дефинисано, користиће се `none` |
| `hold_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на држање иконе, ако није дефинисано, користиће се `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Распоред стилизовања картице, see [card layouts](#распореди-картице) |
| `rows` | number | Optional | Any number | Број редова (висина) (нпр. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#под-дугмад) | Додаје прилагођена дугмад фиксирана десно |

</details>

<details>

<summary><b>CSS променљиве (see <a href="#стилизовање">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Главна боја позадине за подржане елементе у дугмету |
| `--bubble-button-border-radius` | `px` | Радијус ивица за дугме |
| `--bubble-button-icon-border-radius` | `px` | Радијус ивица за контејнер иконе дугмета |
| `--bubble-button-icon-background-color` | `color` | Боја позадине за контејнер иконе дугмета |
| `--bubble-light-white-color` | `color` | Замењује подразумевану белу боју дугмади/клизача светла |
| `--bubble-light-color` | `color` | Замењује боју дугмади/клизача светла (чак и RGB светла) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка за дугме |

</details>

Ове опције су доступне само када је `button_type` постављен на `slider`.

<details>

<summary><b>Опције клизача (YAML + описи)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Минимална вредност клизача. За прилагођене клизаче.                                                    |
| `max_value`             | number  | Optional                        | Максимална вредност клизача. За прилагођене клизаче.                                                    |
| `step`                  | number  | Optional                        | Вредност корака клизача.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Омогућава претходно понашање клизача, где додиром активирате клизач уместо да га држите.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Ажурира вредност релативно у односу на почетну вредност, а не на почетну тачку додира.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Чини клизач само за читање. Аутоматски се укључује за неке ентитете попут сензора.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Стање ентитета се ажурира током клизања. **Ова функција се не препоручује за све ентитете.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` или `bottom` | Мења правац попуњавања клизача. Слева надесно када није дефинисано, пресликано у [језицима који се пишу здесна налево](#локализација) |
| `slider_value_position` | string | Optional | `right`, `left`, `center` или `hidden` | Позиција приказа вредности. Десно када није дефинисано, а лево у [језицима који се пишу здесна налево](#локализација) |
| `invert_slider_value` | boolean | Optional (`false` default) | Инвертује правац клизача (100% попуне једнако минимуму). Није доступно за клизаче боја. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Само за светла.** Изаберите режим клизача |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Само за ролетне.** Изаберите режим клизача (позиција или нагиб) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Само за светла (Hue режим).** Приморава засићеност приликом подешавања Hue |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Само за светла (Hue режим).** Форсирана вредност засићености (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Само за светла (режим осветљености).** Користи акцентну боју теме уместо боје светла |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Само за светла.** Дозвољава клизачу да достигне 0%, чиме се светло гаси. Није доступно уз `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Само за светла.** Омогућава глатке прелазе осветљености за подржана светла.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Само за светла.** Време прелаза у милисекундама. Захтева `light_transition: true`.            |

</details>

#### Примери

<details>

<summary>Дугме клизач које може да контролише осветљеност светла</summary>

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

<summary>Дугме са више опција</summary>

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

## Медија плејер

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ова картица вам омогућава да контролишете ентитет медија плејера.

### Опције медија плејера

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Медија плејер за контролу |
| `name` | string | Optional | Any string | Назив за ваш медија плејер, ако није дефинисан приказаће се назив ентитета |
| `icon` | string | Optional | Any `mdi:` icon | Икона за ваш медија плејер, ако није дефинисана приказаће се икона ентитета или `entity-picture` |
| `force_icon` | boolean | Optional | `true` или `false` (default) | Даје предност икони уместо `entity-picture` |
| `show_state` | boolean | Optional | `true` или `false` (default) | Прикажи или сакриј стање вашег `entity` |
| `show_name` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј назив |
| `show_icon` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј икону |
| `show_last_changed` | boolean | Optional | `true` или `false` (default) | Прикажи време последње промене вашег `entity` |
| `show_last_updated` | boolean | Optional | `true` или `false` (default) | Прикажи време последњег ажурирања вашег `entity` |
| `show_attribute` | boolean | Optional | `true` или `false` (default) | Прикажи атрибут вашег `entity` испод његовог `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Атрибут за приказ (нпр. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) или `false` | Дозволи да се текст помера када садржај премаши величину контејнера |
| `min_volume` | number | Optional | Any number | Минимална вредност клизача јачине звука. |
| `max_volume` | number | Optional | Any number | Максимална вредност клизача јачине звука. |
| `cover_background` | boolean | Optional | `true` или `false` (default) | Користи замућену насловну слику медија као позадину картице. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` или `hold_action`, see [actions](#акције-додира-двоструког-додира-и-држања) | Омогућава промену подразумеваних акција на клик дугмета. |
| `tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на клик иконе, ако није дефинисано, користиће се `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на дупли клик иконе, ако није дефинисано, користиће се `none`. |
| `hold_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на држање иконе, ако није дефинисано, користиће се `more-info`. |
| `main_buttons_position` | string | Optional | `default` или `bottom` | Помера дугмад акција насловнице на дно (фиксирано) |
| `main_buttons_full_width` | boolean | Optional | `true` или `false` | Чини дугмад акција на дну пуне ширине (default: `true` када је позиција `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Поравнање дугмади акција на дну када нису пуне ширине |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Распоред стилизовања картице, see [card layouts](#распореди-картице) |
| `rows` | number | Optional | Any number | Број редова (висина) (нпр. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#под-дугмад) | Додаје прилагођена дугмад фиксирана десно |
| `hide` | object | Optional | See below | Сакрива дугмад са картице |

#### Опције скривања

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` или `false` (default) | Сакриј дугме за пуштање/паузу |
| `volume_button` | boolean | Optional | `true` или `false` (default) | Сакриј дугме за јачину звука |
| `previous_button` | boolean | Optional | `true` или `false` (default) | Сакриј дугме за претходно |
| `next_button` | boolean | Optional | `true` или `false` (default) | Сакриј дугме за следеће |
| `power_button` | boolean | Optional | `true` или `false` (default) | Сакриј дугме за напајање |

</details>

<details>

<summary><b>CSS променљиве (see <a href="#стилизовање">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Главна боја позадине за медија плејер |
| `--bubble-media-player-border-radius` | `px` | Радијус ивица за медија плејер |
| `--bubble-media-player-buttons-border-radius` | `px` | Радијус ивица за дугмад медија плејера |
| `--bubble-media-player-slider-background-color` | `color` | Боја позадине за клизач јачине звука |
| `--bubble-media-player-icon-border-radius` | `px` | Радијус ивица за контејнер иконе медија плејера |
| `--bubble-media-player-icon-background-color` | `color` | Боја позадине за контејнер иконе медија плејера |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка за медија плејер |

</details>


#### Примери

<details>

<summary>Медија плејер са свим опцијама</summary>

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

## Ролетна

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ова картица вам омогућава да контролишете ваше `cover` ентитете.

### Опције ролетне

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Ролетна за контролу |
| `name` | string | Optional | Any string | Назив за вашу ролетну, ако није дефинисан приказаће се назив ентитета |
| `force_icon` | boolean | Optional | `true` или `false` (default) | Даје предност икони уместо `entity-picture` |
| `show_state` | boolean | Optional | `true` или `false` (default) | Прикажи или сакриј стање вашег `entity` |
| `show_name` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј назив |
| `show_icon` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј икону |
| `show_last_changed` | boolean | Optional | `true` или `false` (default) | Прикажи време последње промене вашег `entity` |
| `show_last_updated` | boolean | Optional | `true` или `false` (default) | Прикажи време последњег ажурирања вашег `entity` |
| `show_attribute` | boolean | Optional | `true` или `false` (default) | Прикажи атрибут вашег `entity` испод његовог `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Атрибут за приказ (нпр. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) или `false` | Дозволи да се текст помера када садржај премаши величину контејнера |
| `icon_open` | string | Optional | Any `mdi:` icon | Икона за отворену ролетну, ако није дефинисана приказаће се подразумевана икона отворене ролетне |
| `icon_close` | string | Optional | Any `mdi:` icon | Икона за затворену ролетну, ако није дефинисана приказаће се подразумевана икона затворене ролетне |
| `icon_up` | string | Optional | Any `mdi:` icon | Икона за дугме отварања ролетне, ако није дефинисана приказаће се подразумевана икона отварања |
| `icon_down` | string | Optional | Any `mdi:` icon | Икона за дугме затварања ролетне, ако није дефинисана приказаће се подразумевана икона затварања |
| `open_service` | string | Optional | Any service or script | Сервис за отварање ролетне, подразумевано `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Сервис за заустављање ролетне, подразумевано `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Сервис за затварање ролетне, подразумевано `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Позиција дугмади за контролу нагиба (приказана само ако ролетна подржава нагиб) |
| `open_tilt_service` | string | Optional | Any service or script | Сервис за отварање нагиба, подразумевано `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Сервис за затварање нагиба, подразумевано `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` или `hold_action`, see [actions](#акције-додира-двоструког-додира-и-држања) | Омогућава промену подразумеваних акција на клик дугмета. |
| `tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на клик иконе, ако није дефинисано, користиће се `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на дупли клик иконе, ако није дефинисано, користиће се `none`. |
| `hold_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на држање иконе, ако није дефинисано, користиће се `more-info`. |
| `main_buttons_position` | string | Optional | `default` или `bottom` | Помера контроле на дно (фиксирано) |
| `main_buttons_full_width` | boolean | Optional | `true` или `false` | Чини контроле на дну пуне ширине (default: `true` када је позиција `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Поравнање контрола на дну када нису пуне ширине |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Распоред стилизовања картице, see [card layouts](#распореди-картице) |
| `rows` | number | Optional | Any number | Број редова (висина) (нпр. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#под-дугмад) | Додаје прилагођена дугмад фиксирана десно |

</details>

<details>

<summary><b>CSS променљиве (see <a href="#стилизовање">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Главна боја позадине за подржане елементе у картици ролетне |
| `--bubble-cover-border-radius` | `px` | Радијус ивица за картицу ролетне |
| `--bubble-cover-icon-border-radius` | `px` | Радијус ивица за контејнер иконе картице ролетне |
| `--bubble-cover-icon-background-color` | `color` | Боја позадине за контејнер иконе картице ролетне |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка за картицу ролетне |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка за дугмад у картици ролетне |

</details>


#### Пример

<details>

<summary>Картица која може да контролише ролетну</summary>

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

## Избор

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ова картица вам омогућава да додате падајући мени за ваше `input_select` / `select` ентитете. Ова картица такође подржава под-дугмад и све уобичајене Bubble Card функције.

> [!TIP]
> Такође можете имати под-дугмад типа избора ако желите, ова функција је доступна у свим картицама које подржавају под-дугмад.

### Опције избора

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Ентитет за контролу |
| `name` | string | Optional | Any string | Назив за ваш избор, ако није дефинисан приказаће се назив ентитета |
| `icon` | string | Optional | Any `mdi:` icon | Икона за ваш избор, ако није дефинисана приказаће се икона ентитета или `entity-picture` |
| `force_icon` | boolean | Optional | `true` или `false` (default) | Даје предност икони уместо `entity-picture` |
| `show_state` | boolean | Optional | `true` или `false` (default) | Прикажи или сакриј стање вашег `entity` |
| `show_name` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј назив |
| `show_icon` | boolean | Optional | `true` (default) или `false` | Прикажи или сакриј икону |
| `show_last_changed` | boolean | Optional | `true` или `false` (default) | Прикажи време последње промене вашег `entity` |
| `show_last_updated` | boolean | Optional | `true` или `false` (default) | Прикажи време последњег ажурирања вашег `entity` |
| `show_attribute` | boolean | Optional | `true` или `false` (default) | Прикажи атрибут вашег `entity` испод његовог `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Атрибут за приказ (нпр. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) или `false` | Дозволи да се текст помера када садржај премаши величину контејнера |
| `tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на клик иконе, ако није дефинисано, користиће се `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на дупли клик иконе, ако није дефинисано, користиће се `none`. |
| `hold_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на држање иконе, ако није дефинисано, користиће се `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Распоред стилизовања картице, see [card layouts](#распореди-картице) |
| `rows` | number | Optional | Any number | Број редова (висина) (нпр. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#под-дугмад) | Додаје прилагођена дугмад фиксирана десно |

</details>

<details>

<summary><b>CSS променљиве (see <a href="#стилизовање">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Главна боја позадине за подржане елементе у картици избора |
| `--bubble-select-background-color` | `color` | Боја позадине за картицу избора |
| `--bubble-select-list-border-radius` | `px` | Радијус ивица за падајући мени у картици |
| `--bubble-select-list-item-accent-color` | `color` | Акцентна боја за изабрану ставку |
| `--bubble-select-list-background-color` | `color` | Боја позадине за падајући мени у картици |
| `--bubble-select-list-width` | `px` | Ширина падајућег менија у картици |
| `--bubble-select-arrow-background-color` | `color` | Боја позадине за стрелицу падајућег менија |
| `--bubble-select-button-border-radius` | `px` | Радијус ивица за дугме избора |
| `--bubble-select-border-radius` | `px` | Радијус ивица за картицу избора |
| `--bubble-select-icon-border-radius` | `px` | Радијус ивица за контејнер иконе картице избора |
| `--bubble-select-icon-background-color` | `color` | Боја позадине за контејнер иконе картице избора |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка за картицу избора |

</details>


#### Примери

<details>

<summary>Картица избора са листом сцена</summary>

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

## Клима

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ова картица вам омогућава да контролишете ваше `climate` ентитете.

> [!TIP]
> Мени за избор режима је [под-дугме](#под-дугмад) које се аутоматски додаје приликом креирања картице. Затим га можете изменити или уклонити по жељи.

### Опције климе

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Ентитет за контролу (нпр. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Прилагођени назив за картицу. Ако није дефинисан, приказаће се назив ентитета.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Прилагођена икона за картицу. Ако није дефинисана, користиће се икона ентитета или `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` или `false` (default)                     | Даје предност икони уместо `entity-picture`.                                                                           |
| `show_state`            | boolean | Optional                            | `true` или `false` (default)                     | Прикажи или сакриј тренутно стање `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) или `false`                     | Прикажи или сакриј назив ентитета.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) или `false`                     | Прикажи или сакриј икону.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` или `false` (default) | Сакрива контролу доње циљне температуре ако је `entity` подржава.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` или `false` (default) | Сакрива контролу горње циљне температуре ако је `entity` подржава.                                         |
| `state_color`           | boolean | Optional                            | `true` или `false` (default)                     | Примењује стални боју позадине када је климатски ентитет укључен.                                              |
| `step` | number | Optional | Any number | Корак промене температуре. |
| `min_temp` | number | Optional | Any number | Минимална температура. |
| `max_temp` | number | Optional | Any number | Максимална температура. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` или `hold_action`, see [actions](#акције-додира-двоструког-додира-и-држања) | Омогућава промену подразумеваних акција на клик дугмета. |
| `tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на клик иконе, ако није дефинисано, користиће се `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на дупли клик иконе, ако није дефинисано, користиће се `none`. |
| `hold_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на држање иконе, ако није дефинисано, користиће се `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` или `bottom` | Помера дугмад акција климе на дно (фиксирано) |
| `main_buttons_full_width` | boolean | Optional | `true` или `false` | Чини дугмад акција на дну пуне ширине (default: `true` када је позиција `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Поравнање дугмади акција на дну када нису пуне ширине |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Распоред стилизовања картице, see [card layouts](#распореди-картице) |
| `rows` | number | Optional | Any number | Број редова (висина) (нпр. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#под-дугмад)                | Додаје прилагођена дугмад фиксирана десно. Корисно за мени за избор режима климе.                                  |

</details>

<details>

<summary><b>CSS променљиве (see <a href="#стилизовање">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Главна боја позадине за подржане елементе у картици климе |
| `--bubble-climate-border-radius` | `px` | Радијус ивица за подржане елементе картице климе |
| `--bubble-climate-button-background-color` | `color` | Боја позадине за дугмад картице климе |
| `--bubble-climate-icon-border-radius` | `px` | Радијус ивица за контејнер иконе картице климе |
| `--bubble-state-climate-fan-only-color` | `color` | Боја преклапања за стање само вентилатор |
| `--bubble-state-climate-dry-color` | `color` | Боја преклапања за стање сушења |
| `--bubble-state-climate-cool-color` | `color` | Боја преклапања за стање хлађења |
| `--bubble-state-climate-heat-color` | `color` | Боја преклапања за стање грејања |
| `--bubble-state-climate-auto-color` | `color` | Боја преклапања за аутоматско стање |
| `--bubble-state-climate-heat-cool-color` | `color` | Боја преклапања за стање грејање-хлађење |
| `--bubble-climate-accent-color` | `color` | Акцентна боја за картицу климе |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка за контејнер климе. |

</details>


#### Примери

<details>

<summary>Картица климе са падајућим менијем HVAC режима</summary>

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

## Календар

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ова картица вам омогућава да прикажете ваше ентитете календара. Њен садржај је могуће померати, тако да можете лако прегледати предстојеће догађаје.

### Опције календара

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Број дана календара за преузимање догађаја, од сада до краја N-тог дана (default: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Ентитет за контролу (нпр. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Ентитет календара за приказ                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Прилагођена боја за чип календара. Ако није дефинисана, аутоматски ће се изабрати боја |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Број дана календара за преузимање догађаја, од сада до краја N-тог дана (default: 7) |
| `limit`             | number  | Optional     | A number                                        | Број догађаја који ће бити приказани на картици                                  |
| `show_end`          | boolean | Optional     | `true` или `false` (default)                     | Прикажи или сакриј време завршетка догађаја                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) или `false`                     | Прикажи или сакриј траку напретка догађаја                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) или `false`                     | Прикажи или сакриј догађаје који су тренутно у току. Вишедневни догађаји се процењују дан по дан, па се сакрива само дан који је у току, а наредни дани остају видљиви |
| `scrolling_effect`  | boolean | Optional | `true` (default) или `false` | Дозволи да се текст помера када садржај премаши величину контејнера |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` или `hold_action`, see [actions](#акције-додира-двоструког-додира-и-држања) | Омогућава додавање акција на клик догађаја. |
| `tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на клик дана, ако није дефинисано, користиће се `none`. |
| `double_tap_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на дупли клик дана, ако није дефинисано, користиће се `none`. |
| `hold_action` | object | Optional | See [actions](#акције-додира-двоструког-додира-и-држања) | Дефинише тип акције на држање дана, ако није дефинисано, користиће се `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Распоред стилизовања картице, see [card layouts](#распореди-картице) |
| `rows` | number | Optional | Any number | Број редова (висина) (нпр. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#под-дугмад) | Додаје прилагођена дугмад фиксирана десно |

</details>

<details>

<summary><b>CSS променљиве (see <a href="#стилизовање">Styling</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Главна боја позадине за подржане елементе у картици календара  |
| `--bubble-calendar-border-radius`         | `px`           | Радијус ивица за подржане елементе картице календара |
| `--bubble-calendar-height`                | `px`           | Висина за картицу календара                                        |

</details>

#### Примери

<details>

<summary>Картица календара са ограниченим бројем догађаја</summary>

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

<summary>Картица календара са временом завршетка и траком напретка</summary>

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


## Раздвајач

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ova kartica je jednostavan razdvajač za deljenje vašeg iskačućeg prozora na kategorije / sekcije, na primer: Svetla, Uređaji, Roletne, Podešavanja, Automatizacije...

### Opcije razdvajača

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `name` | string | Opciono, ali preporučeno | Bilo koji string | Naziv za vaš razdvajač |
| `icon` | string | Opciono, ali preporučeno | Bilo koja `mdi:` ikonica | Ikonica za vaš razdvajač |
| `card_layout` | string | Opciono | `normal` (podrazumevano ako nije u prikazu sekcije), `large` (podrazumevano ako je u prikazu sekcije), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [распореде картице](#распореди-картице) |
| `rows` | number | Opciono | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opciono | Pogledajte [под-дугмад](#под-дугмад) | Dodajte prilagođena dugmad fiksirana desno |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#стилизовање">Стилизовање</a>)</b></summary>

| Varijabla | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Boja pozadine za liniju u razdvajaču |

</details>

#### Primer

<details>

<summary>Razdvajač za sekciju "Roletne"</summary>

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

## Празна колона

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ova kartica služi za popunjavanje prazne kolone. Ovo je korisno ako imate `horizontal-stack` u vašem iskačućem prozoru sa samo jednom karticom. Pogledajte donji desni ugao ovog snimka ekrana da (ne) vidite je.

### Opcije prazne kolone

Ova kartica nema opcije i ne podržava [стилизовање](#стилизовање), iako podržava opcije rasporeda za HA sekcije.

#### Primer

<details>

<summary>Prazna kolona u horizontalnom nizu</summary>

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

## Само под-дугмад

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Ova kartica je namenjena isključivo sub-dugmadima. Idealna je za menije, brze akcije, informativne čipove ili fiksirano podnožje na dnu stranice.

> [!IMPORTANT]  
> Ova kartica koristi novu šemu sub-dugmadi. Koristite `sub_button.bottom` za definisanje vaših dugmadi. Sekcija `sub_button.main` se ignoriše.

### Opcije "samo pod-dugmad"

<details>

<summary><b>Опције (YAML + описи)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obavezno** | Pogledajte [под-дугмад](#под-дугмад) | Definišite vaše sub-dugmad pomoću sekcije `bottom` |
| `hide_main_background` | boolean | Opciono | `true` ili `false` (podrazumevano) | Uklanja pozadinu kartice |
| `footer_mode` | boolean | Opciono | `true` ili `false` (podrazumevano) | Fiksira karticu na dnu stranice |
| `footer_full_width` | boolean | Opciono | `true` ili `false` (podrazumevano) | Podnožje zauzima punu širinu (100%) |
| `footer_width` | number | Opciono | Bilo koji broj | Širina podnožja u pikselima kada je `footer_full_width` postavljeno na `false` |
| `footer_bottom_offset` | number | Opciono | Bilo koji broj | Udaljenost od dna stranice u pikselima (podrazumevano: `16`) |
| `card_layout` | string | Opciono | `normal` (podrazumevano ako nije u prikazu sekcije), `large` (podrazumevano ako je u prikazu sekcije), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [распореде картице](#распореди-картице) |
| `rows` | number | Opciono | Bilo koji broj | Broj redova (visina) (npr. `2`) |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#стилизовање">Стилизовање</a>)</b></summary>

| Varijabla | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Širina podnožja kada je `footer_full_width` postavljeno na `false` |
| `--bubble-footer-bottom` | `px` | Razmak podnožja od dna |
| `--bubble-footer-box-shadow` | pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za kontejner podnožja |

</details>

#### Primeri

<details>

<summary>Čipovi (kao na snimku ekrana)</summary>

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

<summary>Fiksirani meni u podnožju</summary>

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

## Под-дугмад

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

U svakoj kartici koja podržava tu opciju, možete dodati sub-dugmad za dodatno prilagođavanje vaših kartica. Možete, na primer, napraviti dugme koje kontroliše usisivač, karticu vremenske prognoze ili gotovo bilo šta drugo što vam padne na pamet. Ova sub-dugmad podržavaju akcije dodira i većinu opcija dugmeta.

Sub-dugmad sada podržavaju tri tipa: **podrazumevani (dugme)**, **klizač** i **padajući meni / izbor**. Možete kombinovati tipove u istoj kartici, postaviti sub-dugmad na vrh ili dno i organizovati ih u grupe za napredniji raspored.

#### Raspoređivanje i grupe sub-dugmadi

<details>

<summary><b>Struktura sub-dugmadi (main / bottom + grupe)</b></summary>

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

**Napomene:**
- `main` i `bottom` su dve nezavisne sekcije. Sub-dugmad na dnu su fiksirana na dno kartice.
- `main_layout` i `bottom_layout` prihvataju `inline` (podrazumevano) ili `rows` za vertikalno slaganje grupa.
- Grupe su objekti sa nizom `group` i opcionim `buttons_layout` (`inline` ili `column`).
- `justify_content` je dostupno **samo za donje grupe** (`start`, `center`, `end`, `fill`).
- Kada su prisutna sub-dugmad na dnu, raspored kartice se automatski prebacuje na `large` osim ako eksplicitno postavite drugi raspored.
- Nasleđeni nizovi `sub_button` su i dalje podržani i tretiraju se kao sekcija `main`.

</details>

### Opcije sub-dugmadi

<details>

<summary><b>Опције (YAML + опис)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | Opciono | Bilo koji entitet | Entitet za kontrolu |
| `name` | string | Opciono | Bilo koji string | Naziv za vaše sub-dugme, ako nije definisano prikazaće se naziv entiteta |
| `icon` | string | Opciono | Bilo koja `mdi:` ikonica | Ikonica za vaše sub-dugme, ako nije definisana prikazaće se ikonica entiteta ili slika entiteta |
| `force_icon` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prisiljava ikonicu čak i ako je dostupna slika entiteta |
| `sub_button_type` | string | Opciono | `default`, `slider` ili `select` | Odaberite tip sub-dugmeta |
| `show_background` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikazuje pozadinu za vaše sub-dugme, boja će se menjati na osnovu stanja entiteta |
| `state_background` | boolean | Opciono | `true` (podrazumevano) ili `false` | Koristi boju stanja kada je entitet `on` |
| `light_background` | boolean | Opciono | `true` (podrazumevano) ili `false` | Koristi boju svetla za pozadinu kada je dostupna |
| `show_state` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikazuje ili sakriva stanje vašeg `entity` |
| `show_name` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikazuje ili sakriva naziv |
| `show_icon` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikazuje ili sakriva ikonicu |
| `show_last_changed` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikazuje vreme poslednje promene vašeg `entity` |
| `show_last_updated` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikazuje vreme poslednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikazuje atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Opciono (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut vašeg `entity` | Atribut koji se prikazuje (npr. `brightness`) |
| `select_attribute` | string | Opciono | Lista atributa vašeg `entity` (pogledajte podržane opcije iznad) | Ova lista atributa otvoriće padajući meni ako se klikne (npr. `effect_list`) |
| `show_arrow` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikazuje ili sakriva strelicu padajućeg menija za sub-dugmad tipa select |
| `scrolling_effect` | boolean | Opciono | `true` (podrazumevano) ili `false` | Omogućava pomeranje teksta kada sadržaj premašuje veličinu kontejnera |
| `tap_action` | object | Opciono | Pogledajte [акције](#акције-додира-двоструког-додира-и-држања) | Definiše tip akcije pri kliku na sub-dugme, ako nije definisano koristiće se `more-info` |
| `double_tap_action` | object | Opciono | Pogledajte [акције](#акције-додира-двоструког-додира-и-држања) | Definiše tip akcije pri dvostrukom kliku na sub-dugme, ako nije definisano koristiće se `none` |
| `hold_action` | object | Opciono | Pogledajte [акције](#акције-додира-двоструког-додира-и-држања) | Definiše tip akcije pri držanju sub-dugmeta, ako nije definisano koristiće se `more-info` |
| `fill_width` | boolean | Opciono | `true` ili `false` | Popunjava dostupnu širinu (podrazumevano: `false` za main, `true` za bottom) |
| `width` | number ili string | Opciono | Bilo koji broj ili CSS dužina | Prilagođena širina (`px` za sekciju main, `%` za sekciju bottom po podrazumevanoj vrednosti) |
| `custom_height` | number | Opciono | Bilo koji broj | Prilagođena visina u pikselima |
| `content_layout` | string | Opciono | `icon-left` (podrazumevano), `icon-top`, `icon-bottom`, `icon-right` | Postavljanje ikonice unutar sub-dugmeta |
| `always_visible` | boolean | Opciono | `true` ili `false` (podrazumevano) | **Samo za klizač.** Uvek prikazuje klizač umesto da ga otvara pri dodiru |
| `show_button_info` | boolean | Opciono | `true` ili `false` (podrazumevano) | **Samo za klizač.** Prikazuje ikonicu/naziv/stanje kada je `always_visible` omogućeno |
| `visibility` | object ili list | Opciono | Pogledajte [услове](#услови) | Prikazuje ili sakriva sub-dugme na osnovu uslova |
| `hide_when_parent_unavailable` | boolean | Opciono | `true` ili `false` (podrazumevano) | Sakriva sub-dugme ako je entitet roditeljske kartice nedostupan |
| `css_class` | string | Opciono | Bilo koji tekst | Dodatna CSS klasa na sub-dugmetu, da biste ga ciljali u svojim [стиловима](#стилизовање) bez obzira na njegovo ime (na primer `My value` daje `.my-value`) |

</details>

<details>

<summary><b>Opcije klizača u sub-dugmetu (isto kao klizači dugmeta)</b></summary>

<br>

Sub-dugmad tipa klizač podržavaju iste opcije kao klizači dugmeta, uključujući:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#стилизовање">Стилизовање</a>)</b></summary>

| Varijabla | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radijus ivica za sub-dugmad |
| `--bubble-sub-button-background-color` | `color` | Boja pozadine za sub-dugmad |
| `--bubble-sub-button-outline` | `box-shadow` | Kontura dodata sub-dugmetu ili klizaču, samo kada se taj element iscrtava istom bojom kao kartica iza njega, što bi ga učinilo nevidljivim (postavite je na `none` da je uklonite) |
| `--bubble-sub-slider-border-radius` | `px` | Radijus ivica za sub-dugmad tipa klizač |
| `--bubble-sub-slider-background-color` | `color` | Boja pozadine za sub-dugmad tipa klizač |
| `--bubble-sub-slider-height` | `px` | Visina za uvek prikazane klizače sub-dugmadi |
| `--bubble-sub-slider-outline` | `box-shadow` | Kontura samo za sub-dugmad tipa klizač, vraća se na `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Boja teksta na svetlim pozadinama sub-dugmadi |

</details>

#### Primeri

<details>

<summary>Dugme sa nekoliko sub-dugmadi za pravljenje kartice usisivača (kao na snimku ekrana)</summary>

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

<summary>Klizač dugmeta sa sub-dugmetom koje prikazuje osvetljenost i sub-dugmetom koje pali/gasi svetlo (kao na snimku ekrana)</summary>

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

<summary>Dugme koje prikazuje unutrašnju i spoljašnju temperaturu i vremensku prognozu za danas i sutra (uključen snimak ekrana)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Nažalost, kod mene je stalno oblačno, ali se sve ikonice menjaju u zavisnosti od vremena.

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

## Распореди картице

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card u potpunosti podržava prikaz sekcije Home Assistant, možete promeniti raspored kartice kako biste je povećali, a takođe promeniti broj kolona ili redova koje kartica treba da zauzima u vašem prikazu sekcije (samo na karticama koje podržavaju tu opciju). Ovi rasporedi su takođe podržani u svim ostalim tipovima prikaza.

<details>

<summary><b>Dostupni rasporedi kartice</b></summary>

| Raspored | Opis |
| --- | --- |
| `normal` | Regularan raspored (nije optimizovan za prikaz sekcije) |
| `large` | Veći raspored koji će se prilagoditi izabranim redovima u prikazu sekcije (optimizovan za prikaz sekcije) |
| `large-2-rows` | Veći raspored sa 2 reda sub-dugmadi koji će se prilagoditi izabranim redovima u prikazu sekcije (optimizovan za prikaz sekcije) |
| `large-sub-buttons-grid` | Ovaj raspored prikazuje sub-dugmad u mreži, `rows` mora biti postavljeno na najmanje `2`.

</details>

#### Primeri

<details>

<summary>Veliko dugme koje prikazuje statistiku energije sa 2 reda sub-dugmadi (uključen snimak ekrana)</summary>

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

<summary>Veliko dugme sa više redova i 12 sub-dugmadi</summary>

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

## Услови

Неке опције се заснивају на условима, који се пишу потпуно исто као они у [условној картици](https://www.home-assistant.io/dashboards/conditional/) Home Assistant-а:

- `visibility` на [под-дугмету](#под-дугмад), да бисте га приказали или сакрили
- `trigger` на [искачућем прозору](#искачући-прозор), да бисте га отворили када су услови испуњени
- `checkConditionsMet(conditions, hass)` унутар ваших [шаблона](#шаблони), када вам одговор треба у сопственом коду

Вреднује се сваки тип услова Home Assistant-а: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, као и групе `and`, `or` и `not`. Раде и услови из Home Assistant градитеља услова, они названи по свом домену као `sun.is_up`, `light.is_on`, `zone.in_zone` или `temperature.is_value`, са својим подешавањима `target`, `options`, `behavior` и `for`.

<details>

<summary><b>Пример</b></summary>

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
> Услови се вреднују у вашем прегледачу, па оних неколико којима је потребан сервер Home Assistant-а не могу бити тачни: излазак и залазак сунца се читају из ентитета `sun.sun` уместо да се поново израчунају, а трајање `for` се мери од последње промене стања, без историје из recorder-а.
>
> `view_columns` се прихвата али увек пролази, пошто Bubble Card никада не распоређује колоне вашег приказа. Тип услова који Bubble Card не познаје једном се пријави у конзоли вашег прегледача уместо да тихо закаже, тако да можете разликовати грешку у куцању од функције која недостаје.

<br>

---

<br>

## Акције додира, двоструког додира и држања

Takođe možete koristiti podrazumevane Home Assistant akcije dodira, dvostrukog dodira i držanja na karticama koje podržavaju ovu opciju. Ovo, na primer, omogućava da se prozor "više informacija" prikaže držanjem ikonice dugmeta ili pokretanjem servisa kada se pritisne sub-dugme.

**Napomena: kada je konfigurisano `double_tap_action`, redovno `tap_action` će imati kašnjenje od 200ms kako bi se omogućilo otkrivanje
dvostrukog dodira. Ako je ovo kašnjenje neželjeno, postavite `double_tap_action` na `none` da biste onemogućili obradu dvostrukog dodira.**

### Opcije akcije

<details>

<summary><b>Опције (YAML + опис)</b></summary>

| Naziv | Tip | Podržane opcije | Opis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Akcija koja se izvršava |
| `target` | object |  | Radi samo sa `call-service`. Prati [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Bilo koja putanja vašeg dashboard-a | Putanja za navigaciju (npr. `'#kitchen'` za otvaranje iskačućeg prozora) kada je akcija definisana kao navigate |
| `url_path` | string | Bilo koji link | URL koji se otvara na klik (npr. `https://www.google.com`) kada je akcija `url` |
| `service` | string | Bilo koji servis | Servis koji se poziva (npr. `media_player.media_play_pause`) kada je `action` definisano kao `call-service` |
| `data` ili `service_data` | object | Bilo koji podaci servisa | Podaci servisa koji se uključuju (npr. `entity_id: media_player.kitchen`) kada je `action` definisano kao `call-service` |
| `confirmation` | object | Pogledajte [potvrdu](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Prikazuje prozor za potvrdu (ne Bubble Card prozor), zamenjuje podrazumevani objekat `confirmation` |

</details>

#### Primer

<details>

<summary>Dugme za otvaranje iskačućeg prozora</summary>

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

## Стилизовање

Можете да додате прилагођене стилове да измените CSS свих картица **без коришћења card-mod** на четири начина:

- У едитору, идите на картицу коју желите да измените, затим отворите _Styling options > Custom styles & JS templates_ и додајте своје прилагођене стилове (погледајте савете и примере испод).
- У едитору (или у [YAML](#модули)), идите на картицу коју желите да измените, затим отворите _Modules_, па направите нови модул (биће доступан свим картицама), или отворите **Module Store** да инсталирате било који доступан модул (више детаља о модулима можете пронаћи [испод](#модули)).
- У [theme](https://www.home-assistant.io/integrations/frontend/#defining-themes) фајлу додавањем CSS променљивих у YAML (доступне су у документацији сваке картице изнад). Ово омогућава глобалне измене.

  <details>
  
  <summary>Пример</a></summary>
  
  <br>

  Не копирајте линију `Bubble:`, то је само назив теме коју користите. Такође морате да уклоните `--` из променљивих.

  Потребно је да покренете акцију [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) да бисте освежили тему после било каквих измена.

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
  
- У YAML-у додавањем `styles: |` праћеним вашим прилагођеним стиловима (погледајте савете и примере испод).

> [!TIP]  
> **Да бисте разумели које класе стилова могу да се мењају**, погледајте фасциклу [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) у овом репозиторијуму. У свакој фасцикли картице наћи ћете фајл под називом `styles.css`. Ови фајлови садрже све примењене стилове. Ово омогућава далеко више могућности него CSS променљиве, али мора да се додаје појединачно за сваку картицу.
> 
> Такође можете пронаћи много [примера заједнице](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), или неке са [Home Assistant форума](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) уз мало претраживања.
>
> Bubble тему за Home Assistant (као на снимцима екрана) можете пронаћи [овде](https://github.com/Clooos/Bubble).
>
> Ускоро стиже туторијал видео на мом [YouTube каналу](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Имајте у виду да ће можда бити потребно да додате `!important;` неким CSS стиловима који су већ дефинисани (погледајте примере испод).

> [!TIP]  
> Под-дугмад могу да се циљају класама заснованим на називу. На пример, под-дугме названо "My sub-button" може да се стилизује помоћу `.my-sub-button`. Клизни под-дугмад такође излажу `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, итд.
>
> Класа заснована на називу се мења када преименујете под-дугме, и преводи се када се преведе назив. Поставите `css_class` на под-дугме да бисте добили сопствену класу која се никада не помера, без обзира на назив и без обзира на језик.

#### Примери

<details>

<summary>Мењање величине фонта било које Bubble картице</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Мењање боје позадине једног дугмета у хоризонталном низу дугмади</summary>

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

<summary>Мењање боје позадине картице</summary>

<br>

Ово ради на свим типовима Bubble картица (осим на искачућим прозорима):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ово ради исто, али само за картицу дугмета (ради и за заглавље искачућег прозора): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Да бисте променили боју када је стање `on`, погледајте шаблоне стилова испод.

</details>

<details>

<summary>Мењање боје клизача дугмета</summary>

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

<summary>Мењање боје линије раздвајача</summary>

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

<summary>Мењање боје иконице</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

За иконицу хоризонталног низа дугмади.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Мењање боје позадине контејнера иконице</summary>

<br>

Ово ради на свим типовима Bubble картица (осим на искачућим прозорима):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ово ради исто за заглавље искачућег прозора: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Мењање величине под-дугмади (савршено за велики распоред)</summary>

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

<summary>Мењање боје позадине другог под-дугмета</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Мењање величине иконице</summary>

<br>

За главну иконицу.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

За иконице под-дугмади.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Коришћење слике уместо иконице у под-дугмету</summary>

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

Само отпремите ову слику у фасциклу "pictures" (или назив по вашем избору) унутар "www" фасцикле Home Assistant-а.

</details>

<details>

<summary>Напредан пример: Прављење хоризонталног реда под-дугмади (укључен снимак екрана)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Заиста волим ову опцију, користим је као заглавље на својој контролној табли.

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

## Шаблони

**Bubble Card не подржава Jinja шаблоне**, али напредни корисници могу да додају шаблоне у JS-у директно унутар својих [прилагођених стилова](#стилизовање). На пример, ово омогућава динамичку промену иконице, текстова или боја неког елемента, приказивање или скривање елемента условно (као под-дугме), или скоро све на основу стања, атрибута и осталог.

> [!TIP]  
> Више информација о JS шаблонима [овде](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Мој савет је да **увек погледате конзолу свог претраживача** да бисте били сигурни да све ради исправно.

> [!IMPORTANT]  
> **Сви шаблони који не мењају CSS својство морају да буду постављени на крају! Као на пример мењање иконице, текста или било ког елемента.**

#### Доступне променљиве и функције

<details>

<summary>Променљиве</summary>

<br>

У већини картица имате приступ следећим променљивама:

- `state` враћа стање вашег дефинисаног `entity`.
  
- `entity` враћа ентитет који сте дефинисали, као на пример `switch.test` у овом примеру.
  
- `icon` може да се користи овако за промену иконице `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` враћа стање дефинисаног `entity` вашег првог под-дугмета, `[0]` је стање првог под-дугмета, `[1]` другог...
  
- `subButtonIcon[0]` може да се користи овако за промену иконице првог под-дугмета `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` је иконица првог под-дугмета, `[1]` другог...
  
- `card` враћа елемент картице у DOM-у.
  
- `hass` је напредна променљива која вам пружа још више контроле, на пример можете да вратите стање ентитета `light.kitchen` овако `hass.states['light.kitchen'].state` или атрибут овако `hass.states[entity].attributes.brightness`.

- `this` враћа много корисних информација о вашем систему и контролној табли, користите ово само ако знате шта радите.

</details>

<details>

<summary>Функције</summary>

<br>

Имате приступ свим глобалним JS функцијама, али и следећим:

- `getWeatherIcon` може да се користи за враћање иконице времена на основу стања које представља временске прилике. На пример, можете урадити ово `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` да промените иконицу трећег под-дугмета у иконицу данашњег времена, `.forecast[1]?.condition` је за сутра...

  За то ће вам бити потребан template сензор. Ево шта можете да додате у свој `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` враћа `true` када је листа [услова](#услови) испуњена, на пример `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` може да се користи за превод стања (такође може да се користи да добијете јединицу стања, без потребе да је ручно додајете).
- `hass.formatEntityAttributeValue(state, "attribute")` може да се користи за превод атрибута (такође може да се користи да добијете јединицу стања, без потребе да је ручно додајете).

</details>

#### Примери

Испод можете пронаћи много примера, али такође можете пронаћи веома напредне шаблоне на мојој [Patreon страници](https://www.patreon.com/c/Clooos), као на пример један (мој омиљени) који омогућава до четири условне значке распоређене око иконица картице. То је такође одличан начин да научите све могућности прилагођених стилова и шаблона Bubble Card-а!

<details>
<summary>Примери са моје Patreon странице</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Додавање значки налик Home Assistant-у на било коју картицу</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Приказивање форматираног датума и времена у раздвајачу без коришћења било ког ентитета</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Приказивање стања под-дугмета у два реда</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Прилагођавање натписа и иконица унутар под-дугмета за избор</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Додавање трајног искачућег подсетника који се приказује само када је потребно</a>
</p>

<br>

</details>

<details>

<summary>Мењање боје позадине дугмета које је црвено када је <code>off</code> и плаво када је <code>on</code></summary>

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

<summary>Мењање боје позадине дугмета на основу ентитета за хоризонтални низ дугмади</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Приказивање/скривање под-дугмета условно</summary>

<br>

Ово приказује прво под-дугме само када је мој усисивач заглављен.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ово приказује под-дугме када је батерија испод 10%. Корисно уз под-дугме које приказује "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Условна промена иконице или иконице под-дугмета</summary>

<br>

Ово мења иконицу дугмета само када је усисивач заглављен.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ово мења иконицу првог под-дугмета само када је усисивач заглављен.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Условна промена боје иконице или иконице под-дугмета</summary>

<br>

Ово мења боју иконице дугмета на основу његовог стања.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ово мења боју иконице под-дугмета на основу његовог стања. `.bubble-sub-button-1` је прво под-дугме, замените `1` ако желите да промените иконицу другог под-дугмета.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Условна анимација иконице вентилатора</summary>

<br>

Ово ротира иконицу дугмета када је вентилатор `on`.
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

<summary>Шаблонизовање текстова (као на пример назива или стања)</summary>

<br>

Ово мења назив/стање дугмета натписом "It's currently sunny" у зависности од времена.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
или када се примени на под-дугмад:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ако желите да шаблонизујете стање (`.bubble-state`), не укључујте `show_state: true`, само укључите `show_attribute: true` без икаквог атрибута.

</details>

<details>

<summary>Напредан пример: Мењање боје под-дугмета када је искачући прозор отворен</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Напредан пример: Шаблонизовање назива раздвајача на основу стања преведеног на ваш језик</summary>

<br>

Можете користити `hass.formatEntityState(state)` за превод стања и `hass.formatEntityAttributeValue(state, "attribute")` за превод атрибута.

Ово мења назив и иконицу на основу времена, "Nuageux" значи "Облачно" на француском.

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

## Модули

Модули су моћна функција која вам омогућава да сачувате, поново користите и делите своје прилагођене стилове и шаблоне у свим својим Bubble картицама. Уместо копирања и лепљења истог кода у више картица, можете направити модул и применити га где год вам је потребан. Ово значајно олакшава и убрзава управљање изгледом ваше контролне табле.

Али ова функција је много моћнија од тога, омогућава вам да сами додате праве функционалности у Bubble Card едитору, користећи све опције стандардне [Home Assistant форме](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
Бирач објекта је побољшан да приказује измене уживо и да исправно подржава атрибуте.

Модул може да одговори и бирачу картица Home Assistant-а уз уграђене [предлоге за ентитете](#предлози-за-ентитете): користите `suggestions` за картице које може да опише унапред, и `suggestions_code` када морају да се израчунају из ваше инсталације, на пример искачући прозор направљен од свих ентитета просторије којој припада изабрани ентитет. Оба кључа су документована [овде](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Такође можете да прегледате **Module Store** да пронађете и инсталирате [модуле које је направила заједница](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), или да поделите своје сопствене!

> [!TIP]
> Код модула ради на потпуно исти начин као код у одељку `styles` картице. Доступне су све исте променљиве и функције из одељка [Шаблони](#шаблони).

<br>

### Почетно подешавање

> [!IMPORTANT]
> Почев од верзије v3.1.0, Bubble Card Tools је препоручено складиште за модуле. Стари начин преко template сензора и даље ради за постојеће поставке, али нови модули и функције Module Store-а имају најбољу подршку преко Bubble Card Tools.

Интеграција Bubble Card Tools омогућава Module Editor и Module Store и чува модуле као појединачне YAML фајлове. Постојећи модули се аутоматски мигрирају.

Кораци инсталације и подешавања су објашњени овде:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

Module Editor-у можете приступити из подешавања било које картице, у одељку **Modules**. Едитор нуди два главна таба:

#### Таб My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Овај таб приказује све ваше инсталиране модуле и омогућава вам да:

- **Примените** постојеће модуле на тренутну картицу
- **Направите** нови модул од нуле
- **Уредите** постојеће модуле уз преглед уживо
- **Обришете** модуле који вам више нису потребни
- **Претражите** и **сортирате** модуле (по азбуци, недавно коришћени, активни прво)
- **Поставите глобални статус** да би се модул аутоматски примењивао на све картице
- **Увезете/извезете** модуле ради резервне копије или дељења
- **Пишете предлоге за ентитете** у едитору модула, у одељку **Опционо: предлози за ентитете**, да би ваш модул био понуђен у бирачу картица Home Assistant-а. И правила и израчунати предлози се проверавају док пишете, грешка ту спречава чување, а преглед приказује предложене картице за било који ентитет који изаберете

#### Таб Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Овај таб приказује [све доступне модуле заједнице](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) и омогућава вам да:

- **Прегледате** све модуле које је направила заједница
- **Претражите** и филтрирате модуле по називу, компатибилности или кључним речима
- **Инсталирате** модуле једним кликом
- **Ажурирате** инсталиране модуле када су доступне нове верзије

> [!TIP]
> У едитору можете да омогућите неподржане модуле да бисте тестирали модуле који још нису означени као компатибилни са одређеним типом картице.

<br>

### Како користити модуле

#### Прављење новог модула

<details>

<summary>Кликните да прошири</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Отворите едитор било које картице и прошир одељак **Modules**.
2. Кликните на **Create new module**.
3. Попуните информације о модулу.
4. Напишите свој CSS и/или JavaScript template код у едитору **Code**.
5. (Опционо) Направите прилагођени UI за подешавање у одељку **Editor** (као бирач боја на снимку екрана изнад, потпуна документација доступна је [овде](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Опционо) Напишите своје **Предлоге за ентитете** да би ваш модул био понуђен у бирачу картица Home Assistant-а. Панел проверава оно што пишете док куцате, а његов преглед приказује саме предложене картице за ентитет по вашем избору.
7. Кликните на **Save**.

Ваш модул је сада доступан за коришћење на било којој од ваших картица!

<br>

</details>

#### Примена модула на картицу

<details>

<summary>Кликните да прошири</summary>

<br>

- **Преко едитора:**

  - Отворите едитор картице на коју желите да примените модул.
  - Прошир одељак **Modules**.
  - Кликните на модул који желите да примените са листе.
  - Под "Apply to" кликните на "This card". Модул је сада активан. Можете применити више модула на исту картицу.

- **Преко YAML-а:**

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

#### Глобална примена модула

<details>

<summary>Кликните да прошири</summary>

<br>

Можете подесити модул да се аутоматски примењује на све Bubble картице:

**Ово није доступно за модуле са едитором, пошто они захтевају одређену конфигурацију да би радили.**

- **Преко едитора:**

  - У Module editor-у пронађите свој модул у табу **My Modules**.
  - Укључите дугме **All cards** поред назива модула.
  - Модул ће сада аутоматски бити примењен на све картице.
 
- **Преко YAML-а:**

  У вашој YAML конфигурацији модула (у `bubble-modules.yaml`), само додајте `is_global: true`.

<br>

</details>

#### Изузимање једне картице из глобалног модула

<details>

<summary>Кликните да прошири</summary>

<br>

Ако имате глобални модул, али желите да га изузмете из одређене картице:

- **Преко едитора:**
  
  - У одељку **Modules** картице видећете листу глобалних модула.
  - Кликните на глобални модул, искључите "This card" да бисте га изузели из ове одређене картице.

- **Преко YAML-а:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Дељење вашег модула у Module Store

<details>

<summary>Кликните да прошири</summary>

<br>

Да бисте поделили свој модул у Module Store, у Module Editor-у, на дну у "Export Module", кликните на "Copy for GitHub" и налепите садржај у нову дискусију у категорији [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Уредите опис** (ако је потребно), **пример** (за YAML кориснике), и не заборавите да **укључите бар један снимак екрана** за Module Store.

**Ваш модул постаје доступан одмах после тога** (после освежавања Store-а), зато проверите да ли је све исправно написано и да модул ради како треба. Модул наравно можете уредити/ажурирати и након што је подељен.

<br>

</details>

#### Управљање верзијама

<details>

<summary>Кликните да прошири</summary>

<br>

Module Store аутоматски проверава да ли постоје ажурирања за инсталиране модуле. Када су ажурирања доступна:

1. Видећете индикатор ажурирања у табу **Module Store**.
2. Кликните на **Update** код модула са доступним ажурирањима.
3. Потврдите ажурирање у Module Store-у.

<br>

</details>

#### Дефинисање подржаних типова картица

<details>

<summary>Кликните да прошири</summary>

<br>

Неки модули можда нису компатибилни са свим типовима картица. Можете одредити које картице модул подржава.  
Ако желите да модул буде компатибилан са **свим картицама**, једноставно изоставите поље `supported` (или користите опцију **All cards** у едитору).

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

### Примери

<details>
<summary>Основни модул за стилизовање</summary>

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
<summary>Модул са прилагођеним подешавањима</summary>

<br>

Овај модул је доступан [овде](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Више примера можете пронаћи у Module Store-у, или [овде](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Локализација

Bubble Card говори вашим језиком. Његов едитор је преведен на 64 језика које Home Assistant подржава, а свуда где Home Assistant већ има реч за нешто, користи се његова формулација, тако да у оба интерфејса читате исте термине.

На дну едитора, поред броја верзије, прекидач **Аутоматски** прати језик вашег Home Assistant-а. Искључите га и цео едитор се враћа на енглески, што је згодно када пратите упутство или пријављујете проблем. Ваш избор се памти у вашем прегледачу.

И ова документација је преведена, [на 62 језика](languages.md), на све осим на британски енглески, који користи оригинал. Те странице су отворене за свакога, па се формулација која не одговара вашем Home Assistant-у може исправити у неколико кликова. Енглеска верзија остаје референца за сам садржај.

<br>

---

<br>

## Помоћ

Слободно отворите issue ако нешто не ради како треба. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Имате питања или размишљања о Bubble Card-у? Желите да поделите своје контролне табле или открића? Можете да одете на Home Assistant форум, на Bubble Card subreddit или у одељак GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Допринос

Доприноси су добродошли! Било да су у питању исправке грешака, нове функције, преводи или побољшања документације, слободно отворите pull request.

Пре него што почнете, прочитајте [водич за програмере](DEVELOPERS.md) који описује како да подесите локално окружење, изградите пројекат и тестирате своје измене.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Донирајте

Посвећујем већину свог слободног времена да овај пројекат учиним што бољим. Ако цените мој рад, свака донација би била одличан начин да покажете подршку 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Хвала свима на подршци, ви сте моја највећа мотивација!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
