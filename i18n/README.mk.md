<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Оваа страница е автоматски превод. Во случај на двоумење, важи [оригиналната документација на англиски](../README.md). Дали некоја реченица звучи погрешно? Секоја помош е добредојдена, а [поправањето на оваа страница](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.mk.md) одзема само една минута: GitHub се грижи за форкот и барањето за придонес. Однапред ви благодариме! 🍻

# Bubble Card

🌐 **[Прочитајте го ова на друг јазик](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card е минималистичка и приспособлива колекција на картички за Home Assistant, со модерни скокачки прозорци и вграден Module Store со над 100 модули направени од заедницата.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Содржина

**[`Инсталација`](#инсталација)**  **[`Конфигурација`](#конфигурација)**  **[`Скокачки прозорец`](#скокачки-прозорец)**  **[`Хоризонтален стек од копчиња`](#хоризонтален-стек-од-копчиња)**  **[`Копче`](#копче)**  **[`Медиа плеер`](#медиа-плеер)**  **[`Ролетни`](#ролетни)**  **[`Select`](#select)**  **[`Клима`](#клима)**  **[`Календар`](#календар)**  **[`Разделник`](#разделник)**  **[`Празна колона`](#празна-колона)**  **[`Само подкопчиња`](#само-подкопчиња)**  **[`Подкопчиња`](#подкопчиња)**  **[`Распореди на картичките`](#распореди-на-картичките)**  **[`Дејства`](#дејства-на-допир-двоен-допир-и-задржување)**  **[`Стилови`](#стилови)**  **[`Шаблони`](#шаблони)**  **[`Модули`](#модули)**  **[`Помош`](#помош)**  **[`Придонесување`](#придонесување)**  **[`Донирајте`](#донирајте)**

<br>

## Инсталација

**Најниска поддржана верзија на Home Assistant:** 2023.9.0

<details>

<summary>Без HACS</summary>

<br>

1. Преземете ја оваа датотека: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Додадете ја оваа датотека во вашата папка `<config>/www`
3. На вашата контролна табла кликнете на иконата во горниот десен агол, а потоа на `Уредување контролна табла`
4. Кликнете повторно на таа икона, а потоа кликнете на `Управувај со ресурси`
5. Кликнете на `Додади ресурс`
6. Копирајте и залепете го ова: `/local/bubble-card.js?v=1`
7. Кликнете на `JavaScript Module`, а потоа на `Создади`
8. Вратете се назад и освежете ја страницата
9. Сега можете да кликнете на `Додади картичка` во долниот десен агол и да пребарате `Bubble Card`
10. По секое ажурирање на датотеката ќе треба да го уредите `/local/bubble-card.js?v=1` и да го промените бројот на верзија на кој било повисок број

Ако не работи, обидете се да го исчистите кешот на прелистувачот.

</details>

<details>

<summary>Со HACS (Препорачано)</summary>

<br>

Овој метод ви овозможува да добивате ажурирања директно преку Home Assistant Community Store

1. Ако HACS сè уште не е инсталиран, преземете го следејќи ги упатствата на [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Продолжете со почетната конфигурација на HACS следејќи ги упатствата на [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. На вашата странична лента одете на "HACS"
4. Пребарајте "Bubble Card" или кликнете на синото копче подолу
5. Кликнете на "Преземи"
6. Вратете се на вашата контролна табла и кликнете на иконата во горниот десен агол, а потоа на `Уредување контролна табла`
7. Сега можете да кликнете на `Додади картичка` во долниот десен агол и да пребарате `Bubble Card`

Ако не работи, обидете се да го исчистите кешот на прелистувачот/апликацијата (на сите ваши уреди ако е потребно).

#### Видеа

Исто така можете да го погледнете мојот YouTube канал за видеа чекор по чекор.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Конфигурација

Сите опции можат да се конфигурираат во уредувачот на Home Assistant. Но подолу во документацијата можете да најдете повеќе детали и YAML.

<details>

<summary><b>Главни опции (YAML + опис)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `type` | string | **Задолжително** | `custom:bubble-card` | Тип на картичката |
| `card_type` | string | **Задолжително** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` или `sub-buttons` | Тип на Bubble Card, види подолу |
| `styles` | object list | Опционално | Кои било CSS стилови | Ви овозможува да го приспособите CSS на вашата Bubble Card, види [стилови](#стилови) |

</details>

<details>

<summary><b>Глобални CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Радиус на рамки за сите поддржани елементи |
| `--bubble-main-background-color` | `color` | Главна боја на позадина за сите поддржани елементи |
| `--bubble-secondary-background-color` | `color` | Секундарна боја на позадина за сите поддржани елементи |
| `--bubble-accent-color` | `color` | Акцент боја за сите поддржани елементи |
| `--bubble-icon-border-radius` | `px` | Радиус на рамки за иконата, за сите поддржани елементи |
| `--bubble-icon-background-color` | `color` | Боја на позадина на иконата за сите поддржани елементи |
| `--bubble-sub-button-border-radius` | `px` | Радиус на рамки за сите подкопчиња |
| `--bubble-sub-button-background-color` | `color` | Боја на позадина за сите подкопчиња |
| `--bubble-box-shadow` | види [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка (box shadow) за сите поддржани елементи |
| `--bubble-border` | види [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Рамка за сите поддржани картички |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Погледнете го ова [видео](https://www.youtube.com/watch?v=0hSQOlBxKKI) за да дознаете повеќе за Bubble Card и неговите можности.** Мојот YouTube канал е доста нов и се фокусира на туторијали за Home Assistant и Bubble Card. Не двоумете се да се претплатите за да помогнете во зголемувањето на видливоста на мојот канал. Ви благодарам однапред!

<br>

---

<br>

## Скокачки прозорец

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Оваа картичка ви овозможува да создадете скокачки прозорец со кака било содржина. Секој скокачки прозорец е **скриен по стандард** и може да се отвори со насочување кон неговата врска (на пр. `'#pop-up-name'`), со која било картичка што ја поддржува дејството `navigate` [(дејство)](#дејства-на-допир-двоен-допир-и-задржување), или со вклучениот [хоризонтален стек од копчиња](#хоризонтален-стек-од-копчиња).

> [!TIP]
> ### Активирање на скокачки прозорец 
> Оваа функција ви овозможува да отворите скокачки прозорец врз основа на состојбата на кој било ентитет, на пример можете да отворите скокачки прозорец "Безбедност" со камера кога некое лице е пред вашата куќа. Исто така можете да создадете помошник за преклопка (input_boolean) и да го активирате неговото отворање/затворање во автоматизација.
> <details>
> <summary>Отворање скокачки прозорец кога <code>binary_sensor</code> е <code>on</code></summary>
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
> ### Различни начини за затворање скокачки прозорец 
> Постојат многу начини за затворање скокачки прозорец. На пример, можете да повлечете од заглавието на скокачкиот прозорец кон дното, со долго повлекување во внатрешноста на скокачкиот прозорец кон дното, со притискање Escape на десктоп, со отстранување на хешот во URL-то или едноставно со притискање на копчето за затворање.
>


### Опции на скокачкиот прозорец

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `hash` | string | **Задолжително** | Кој било уникатен хеш (на пр. `'#kitchen'`) со ' ' | Ова е начинот на кој ќе го отворите вашиот скокачки прозорец |
| `popup_style` | string | Опционално | `bubble` (стандардно) или `classic` | Го дефинира визуелниот стил на скокачкиот прозорец |
| `popup_mode` | string | Опционално | `default` (стандардно), `fit-content`, `centered` или `adaptive-dialog` | Го дефинира распоредот на скокачкиот прозорец |
| `with_bottom_offset` | boolean | Опционално | `true` или `false` (стандардно) | Се користи само со `popup_mode: fit-content` или `adaptive-dialog`. Применува долен отстап на мобилен, корисно кога вашата контролна табла содржи картичка за подножје. |
| `full_width_on_mobile` | boolean | Опционално | `true` или `false` (стандардно) | Се користи само со `popup_mode: centered`. Го проширува скокачкиот прозорец на целосна ширина на екранот на мобилен, корисно на помали екрани. |
| `performance_mode` | string | Опционално | `default` (стандардно) или `performance` | Ја оптимизира анимацијата на отворање на скокачкиот прозорец. `performance` благо го одложува рендерирањето на содржината и заматувањето на позадината, а исто така го оневозможува заматувањето на backdrop ако е поставено. |
| `auto_close` | string | Опционално | Временско ограничување во милисекунди (на пр. `10000` за 10с) | Автоматски го затвора скокачкиот прозорец по истек на времето |
| `close_on_click` | boolean | Опционално | `true` или `false` (стандардно) | Автоматски го затвора скокачкиот прозорец по секоја интеракција |
| `close_by_clicking_outside` | boolean | Опционално | `true` (стандардно) или `false` | Го затвора скокачкиот прозорец со кликнување надвор од него |
| `width_desktop` | string | Опционално | Која било CSS вредност | Ширина на десктоп (`100%` по стандард на мобилен) |
| `margin` | string | Опционално | Која било CSS вредност | Користете го ова **само** ако вашиот скокачки прозорец не е добро центриран на мобилен (на пр. `13px`) |
| `margin_top_mobile` | string | Опционално | Која било CSS вредност | Горна маргина на мобилен (на пр. `-56px` ако заглавието ви е скриено) |
| `margin_top_desktop` | string | Опционално | Која било CSS вредност | Горна маргина на десктоп (на пр. `50vh` за скокачки прозорец со половина големина или `calc(100vh - 400px)` за фиксна висина од `400px`) |
| `bg_color` | string | Опционално | Која било hex, rgb или rgba вредност | Бојата на позадината на вашиот скокачки прозорец (на пр. `#ffffff` за бела позадина) |
| `bg_opacity` | string | Опционално | Која било вредност од `0` до `100` | Непровидноста на позадината на вашиот скокачки прозорец (на пр. `100` за без проѕирност) |
| `bg_blur` | string | Опционално | Која било вредност од `0` до `100` | Ефектот на заматување на позадината на вашиот скокачки прозорец, **ова работи само ако `bg_opacity` не е поставено на `100`** (на пр. `0` за без заматување)|
| `shadow_opacity` | string | Опционално | Која било вредност од `0` до `100` | Непровидноста на сенката на вашиот скокачки прозорец (на пр. `0` за да ја скриете) |
| `hide_backdrop` | boolean | Опционално | `true` или `false` (стандардно) | Поставете го ова на true на првиот скокачки прозорец на вашата главна контролна табла за да го оневозможите backdrop-от на сите скокачки прозорци. |
| `background_update` | boolean | Опционално | `true` или `false` (стандардно) | Ја ажурира содржината на скокачкиот прозорец во позадина (не се препорачува) |
| `trigger_entity` | string | Опционално | Кој било ентитет | Го отвора овој скокачки прозорец врз основа на состојбата на кој било ентитет |
| `trigger_state` | string | Опционално (**Задолжително** ако е дефинирано `trigger_entity`) | Која било состојба на ентитет | Состојба на ентитетот за отворање на скокачкиот прозорец |
| `trigger_close` | boolean | Опционално | `true` или `false` (стандардно) | Го затвора скокачкиот прозорец кога `trigger_state` е различна |
| `open_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Активира дејство кога скокачкиот прозорец се отвора |
| `close_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Активира дејство кога скокачкиот прозорец се затвора |
| `show_header` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи/скриј го заглавието на скокачкиот прозорец целосно |
| `show_previous_button` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи копче за назад до копчето за затворање и врати се на претходниот скокачки прозорец кога е достапно |
| `show_close_button` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј го копчето за затворање додека остатокот од заглавието останува видлив |
| `buttons_position` | string | Опционално | `right` (стандардно) или `left` | Позиција на копчињата за затворање и назад во заглавието |
| `cards` | list | Опционално | Која било Bubble Card, картичка на Home Assistant или прилагодена картичка | Ја дефинира содржината на вашиот скокачки прозорец. Види го примерот подолу. |
| Исто така имате пристап до [сите поставки на копчето](#копче) за заглавието на скокачкиот прозорец. | | Опционално | | Ако не е дефинирано, нема да се прикаже заглавие |

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Радиус на рамки за скокачкиот прозорец |
| `--bubble-pop-up-main-background-color` | `color` | Главна боја на позадина за поддржаните елементи на скокачкиот прозорец |
| `--bubble-pop-up-background-color` | `color` | Боја на позадина на скокачкиот прозорец |
| `--bubble-backdrop-background-color` | `color` | Боја на позадина за backdrop-от |
| Исто така имате пристап до [сите CSS променливи на копчето](#опции-на-копчето) за заглавието на скокачкиот прозорец. | | |

</details>


### Самостоен формат на скокачки прозорец (v3.2.0+)

Од v3.2.0, скокачките прозорци користат нов самостоен формат каде картичките со содржина се дефинираат директно во скокачкиот прозорец преку опцијата `cards`. Ова обезбедува подобри перформанси и ново искуство за уредување со влечење и пуштање, засновано на секции.


#### Примери

<details>

<summary>Скокачки прозорец (самостоен формат)</summary>

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

<summary>Копче за отворање на скокачкиот прозорец</summary>

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

## Хоризонтален стек од копчиња

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Оваа картичка е добар придружник на скокачкиот прозорец, овозможувајќи ви да ги отворите соодветните скокачки прозорци. Исто така ви овозможува да отворите која било страница од вашата контролна табла. Дополнително, можете да додадете сензори за движење/присутност за редоследот на копчињата да се приспособува според просторијата во која штотуку сте влегле. Оваа картичка е скроловлива, останува видлива и функционира како подножје.

> [!IMPORTANT]  
> Оваа картичка мора да биде последна во вашиот приказ (по секоја картичка и скокачки прозорец). Не може да биде внатре во кој било стек.

### Опции на хоризонталниот стек од копчиња

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Задолжително** | Хешот на скокачкиот прозорец (на пр. `'#kitchen'`) со ' ' или која било врска | Врска за отворање |
| `1_name` | string | Опционално | Која било низа | Име за вашето копче |
| `1_icon` | string | Опционално | Која било `mdi:` икона | Икона за вашето копче |
| `1_entity` | string | Опционално | Која било светилка или група светилки | Ја прикажува бојата на таа светилка во позадина |
| `1_pir_sensor` | string | Опционално | Кој било бинарен сензор | Барем еден pir сензор или повеќе за `auto_order`, всушност работи и со кој било тип на ентитет, на пример можете да додадете групи светилки и редоследот ќе се менува според последните променети состојби. |
| `auto_order` | boolean | Опционално | `true` или `false` (стандардно) | Го менува редоследот на копчињата според времето на последна промена на `_pir_sensor`, **мора да биде `false` ако немате `_pir_sensor` во вашиот код** |
| `margin` | string | Опционално | Која било CSS вредност | Користете го ова **само** ако вашиот `horizontal-buttons-stack` не е добро центриран на мобилен (на пр. `13px`) |
| `width_desktop` | string | Опционално | Која било CSS вредност | Ширина на десктоп (`100%` по стандард на мобилен) |
| `is_sidebar_hidden` | boolean | Опционално | `true` или `false` (стандардно) | Ја поправа позицијата на хоризонталниот стек од копчиња ако страничната лента е скриена на десктоп (само ако сами сте направиле измена за да ја скриете) |
| `rise_animation` | boolean | Опционално | `true` (стандардно) или `false` | Поставете го ова на `false` за да ја оневозможите анимацијата што се активира откако страницата ќе се вчита |
| `highlight_current_view` | boolean | Опционално | `true` или `false` (стандардно) | Го истакнува тековниот хеш/приказ со мазна анимација |
| `hide_gradient` | boolean | Опционално | `true` или `false` (стандардно) | Поставете го ова на `false` за да го скриете градиентот |

> [!IMPORTANT]  
> Променливите што почнуваат со број ги дефинираат вашите копчиња, само сменете го тој број за да додадете повеќе копчиња (види го примерот подолу).

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Радиус на рамки за копчињата во хоризонталниот стек |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Боја на позадина за копчињата во хоризонталниот стек |

</details>


#### Пример

<details>

<summary>Хоризонтален стек од копчиња што сам се преуредува според сензорите за присутност</summary>

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

## Копче

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Оваа картичка е многу разновидна. Може да се користи како **прекинувач**, **лизгач**, **состојба** или копче за **име/текст**.

> [!TIP]
> ### Кои се разликите меѓу сите типови на копчиња?
>
> - **Копче тип прекинувач:** Ова е стандардниот тип на копче. Стандардно, го вклучува/исклучува ентитетот, а бојата на позадината се менува во зависност од состојбата на ентитетот или бојата на светлото. Можете да го промените неговото дејство во делот **Дејство при допир на картичката**.
>
> - **Копче тип лизгач:** Овој тип на копче ви овозможува да контролирате ентитети со прилагодливи опсези. Идеален е за затемнување на светла, а неговата боја на пополнување ќе се прилагоди на бојата на светлото. Можете исто така да го користите за прикажување вредности, како на пример нивото на батерија.
>   Поддржани ентитети за лизгачи:
>   - Светло (осветленост)
>   - Медиа плеер (јачина на звук)
>   - Ролетна (позиција)
>   - Вентилатор (процент)
>   - Клима (температура)
>   - Input number и number (вредност)
>   - Сензор за батерија (процент, само за читање)
>
>   Можете исто така да користите било кој ентитет со нумеричка состојба со тоа што ќе го оневозможите филтерот за ентитети во **Поставки на лизгачот**, а потоа да ги дефинирате вредностите `min` и `max`. Оваа опција е само за читање.
>
> - **Копче тип состојба:** Совршено за прикажување информации од сензор или било кој ентитет. Кога ќе притиснете на него, ќе се прикаже панелот „Повеќе информации" за ентитетот. Неговата боја на позадината не се менува.
>
> - **Копче тип име/текст:** Единствениот тип на копче на кое не му е потребен ентитет. Овозможува прикажување на краток текст, име или наслов. Можете исто така да му додадете дејства. Неговата боја на позадината не се менува.

### Опции на копчето

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задолжително** | Кој било ентитет | Ентитет за контрола |
| `button_type` | string | Опционално | `switch` (стандардно), `slider`, `state` или `name` | Однесувањето на вашето копче |
| `name` | string | Опционално | Кој било текст | Име за вашето копче, ако не е дефинирано ќе го прикаже името на ентитетот |
| `icon` | string | Опционално | Која било `mdi:` икона | Икона за вашето копче, ако не е дефинирана ќе се прикаже иконата на ентитетот или `entity-picture` |
| `force_icon` | boolean | Опционално | `true` или `false` (стандардно) | Дава приоритет на иконата наместо на `entity-picture` |
| `use_accent_color` | boolean | Опционално (стандардно `false`) | **Само за светла.** Користи ја акцентната боја на темата наместо бојата на светлото.                         |
| `show_state` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи или скриј ја состојбата на вашиот `entity` |
| `show_name` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј го името |
| `show_icon` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј ја иконата |
| `show_last_changed` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последна промена на вашиот `entity` |
| `show_last_updated` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последно ажурирање на вашиот `entity` |
| `show_attribute` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи атрибут на вашиот `entity` под неговото `name` |
| `attribute` | string | Опционално (задолжително ако `show_attribute` е поставено на `true`) | Атрибут од вашиот `entity` | Атрибутот што треба да се прикаже (на пр. `brightness`) |
| `scrolling_effect` | boolean | Опционално | `true` (стандардно) или `false` | Овозможи текстот да се лизга кога содржината ја надминува големината на нивниот контејнер |
| `button_action` | object | Опционално | `tap_action`, `double_tap_action` или `hold_action`, види подолу | Овозможува промена на стандардните дејства при клик на копчето. |
| `tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при клик на иконата, ако не е дефинирано, ќе се користи `more-info` |
| `double_tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при двоен клик на иконата, ако не е дефинирано, ќе се користи `none` |
| `hold_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при задржување на иконата, ако не е дефинирано, ќе се користи `more-info` |
| `card_layout` | string | Опционално | `normal` (стандардно ако не е во преглед на секции), `large` (стандардно ако е во преглед на секции), `large-2-rows`, `large-sub-buttons-grid` | Распоред на стилот на картичката, види [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | Опционално | Кој било број | Број на редови (висина) (на пр. `2`) |
| `sub_button` | object | Опционално | Види [подкопчиња](#подкопчиња) | Додај приспособени копчиња прикачени десно |

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Главна боја на позадината за поддржаните елементи во копчето |
| `--bubble-button-border-radius` | `px` | Радиус на заоблување за копчето |
| `--bubble-button-icon-border-radius` | `px` | Радиус на заоблување за контејнерот на иконата на копчето |
| `--bubble-button-icon-background-color` | `color` | Боја на позадината за контејнерот на иконата на копчето |
| `--bubble-light-white-color` | `color` | Замени ја стандардната бела боја на копчињата/лизгачите за светла |
| `--bubble-light-color` | `color` | Замени ја бојата на копчињата/лизгачите за светла (дури и RGB светла) |
| `--bubble-button-box-shadow` | Види [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка на копчето |

</details>

Овие опции се достапни само кога `button_type` е поставено на `slider`.

<details>

<summary><b>Опции на лизгачот (YAML + описи)</b></summary>

| Име                  | Тип    | Барање                     | Опис                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Опционално                        | Минималната вредност на лизгачот. За приспособени лизгачи.                                                    |
| `max_value`             | number  | Опционално                        | Максималната вредност на лизгачот. За приспособени лизгачи.                                                    |
| `step`                  | number  | Опционално                        | Вредноста на чекорот на лизгачот.                                                                           |
| `tap_to_slide`          | boolean | Опционално (стандардно `false`)      | Овозможи го претходното однесување на лизгачот, каде допирате за да го активирате лизгачот, наместо да го задржувате.        |
| `relative_slide`        | boolean | Опционално (стандардно `false` )     | Ажурирај ја вредноста релативно во однос на почетната вредност, наместо во однос на почетната точка на допир.                      |
| `read_only_slider`      | boolean | Опционално (стандардно `false`)      | Направи го лизгачот само за читање. Автоматски се овозможува за некои ентитети, како сензорите.                        |
| `slider_live_update`    | boolean | Опционално (стандардно `false`)      | Состојбата на ентитетот се ажурира додека се лизга. **Оваа функција не се препорачува за сите ентитети.**        |
| `slider_fill_orientation` | string | Опционално | `left` (стандардно), `right`, `top`, `bottom` | Промени ја насоката на пополнување на лизгачот |
| `slider_value_position` | string | Опционално | `right` (стандардно), `left`, `center`, `hidden` | Позиција на прикажување на вредноста |
| `invert_slider_value` | boolean | Опционално (стандардно `false`) | Обрни ја насоката на лизгачот (100% пополнетост одговара на минимумот). Не е достапно за лизгачи на боја. |
| `light_slider_type` | string | Опционално | `brightness` (стандардно), `hue`, `saturation`, `white_temp` | **Само за светла.** Избери го режимот на лизгачот |
| `cover_slider_type` | string | Опционално | `position` (стандардно), `tilt_position` | **Само за ролетни.** Избери го режимот на лизгачот (позиција или наклон) |
| `hue_force_saturation` | boolean | Опционално (стандардно `false`) | **Само за светла (режим Hue).** Присилно поставување на заситеноста при прилагодување на нијансата |
| `hue_force_saturation_value` | number | Опционално (стандардно `100`) | **Само за светла (режим Hue).** Присилна вредност на заситеност (0-100) |
| `use_accent_color` | boolean | Опционално (стандардно `false`) | **Само за светла (режим на осветленост).** Користи ја акцентната боја на темата наместо бојата на светлото |
| `allow_light_slider_to_0` | boolean | Опционално (стандардно `false`)    | **Само за светла.** Овозможува лизгачот да достигне 0%, што го гаси светлото. Не е достапно со `tap_to_slide`. |
| `light_transition`      | boolean | Опционално (стандардно `false`)      | **Само за светла.** Овозможи мазни преоди на осветленоста за поддржаните светла.                           |
| `light_transition_time` | number  | Опционално (стандардно `500`)        | **Само за светла.** Времетраењето на преодот во милисекунди. Бара `light_transition: true`.            |

</details>

#### Примери

<details>

<summary>Копче тип лизгач кое може да ја контролира осветленоста на светло</summary>

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

<summary>Копче со повеќе опции</summary>

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

## Медиа плеер

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Оваа картичка ви овозможува да контролирате ентитет медиа плеер.

### Опции на медиа плеерот

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задолжително** | Кој било медиа плеер | Медиа плеерот за контрола |
| `name` | string | Опционално | Кој било текст | Име за вашиот медиа плеер, ако не е дефинирано ќе го прикаже името на ентитетот |
| `icon` | string | Опционално | Која било `mdi:` икона | Икона за вашиот медиа плеер, ако не е дефинирана ќе се прикаже иконата на ентитетот или `entity-picture` |
| `force_icon` | boolean | Опционално | `true` или `false` (стандардно) | Дава приоритет на иконата наместо на `entity-picture` |
| `show_state` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи или скриј ја состојбата на вашиот `entity` |
| `show_name` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј го името |
| `show_icon` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј ја иконата |
| `show_last_changed` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последна промена на вашиот `entity` |
| `show_last_updated` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последно ажурирање на вашиот `entity` |
| `show_attribute` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи атрибут на вашиот `entity` под неговото `name` |
| `attribute` | string | Опционално (задолжително ако `show_attribute` е поставено на `true`) | Атрибут од вашиот `entity` | Атрибутот што треба да се прикаже (на пр. `brightness`) |
| `scrolling_effect` | boolean | Опционално | `true` (стандардно) или `false` | Овозможи текстот да се лизга кога содржината ја надминува големината на нивниот контејнер |
| `min_volume` | number | Опционално | Кој било број | Минималната вредност на лизгачот за јачина на звук. |
| `max_volume` | number | Опционално | Кој било број | Максималната вредност на лизгачот за јачина на звук. |
| `cover_background` | boolean | Опционално | `true` или `false` (стандардно) | Користи заматена насловна слика на медиумот како позадина на картичката. |
| `button_action` | object | Опционално | `tap_action`, `double_tap_action` или `hold_action`, види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Овозможува промена на стандардните дејства при клик на копчето. |
| `tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при клик на иконата, ако не е дефинирано, ќе се користи `more-info`. |
| `double_tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при двоен клик на иконата, ако не е дефинирано, ќе се користи `none`. |
| `hold_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при задржување на иконата, ако не е дефинирано, ќе се користи `more-info`. |
| `main_buttons_position` | string | Опционално | `default` или `bottom` | Премести ги копчињата за дејство на насловната слика на дното (фиксирано) |
| `main_buttons_full_width` | boolean | Опционално | `true` или `false` | Направи ги долните копчиња за дејство целосна ширина (стандардно: `true` кога позицијата е `bottom`) |
| `main_buttons_alignment` | string | Опционално | `end` (стандардно), `center`, `start`, `space-between` | Порамнување на долните копчиња за дејство кога не се на целосна ширина |
| `card_layout` | string | Опционално | `normal` (стандардно ако не е во преглед на секции), `large` (стандардно ако е во преглед на секции), `large-2-rows`, `large-sub-buttons-grid` | Распоред на стилот на картичката, види [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | Опционално | Кој било број | Број на редови (висина) (на пр. `2`) |
| `sub_button` | object | Опционално | Види [подкопчиња](#подкопчиња) | Додај приспособени копчиња прикачени десно |
| `hide` | object | Опционално | Види подолу | Скриј копчиња од картичката |

#### Опции за скривање

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Опционално | `true` или `false` (стандардно) | Скриј го копчето play/pause |
| `volume_button` | boolean | Опционално | `true` или `false` (стандардно) | Скриј го копчето за јачина на звук |
| `previous_button` | boolean | Опционално | `true` или `false` (стандардно) | Скриј го копчето за претходна нумера |
| `next_button` | boolean | Опционално | `true` или `false` (стандардно) | Скриј го копчето за следна нумера |
| `power_button` | boolean | Опционално | `true` или `false` (стандардно) | Скриј го копчето за вклучување |

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Главна боја на позадината за медиа плеерот |
| `--bubble-media-player-border-radius` | `px` | Радиус на заоблување за медиа плеерот |
| `--bubble-media-player-buttons-border-radius` | `px` | Радиус на заоблување за копчињата на медиа плеерот |
| `--bubble-media-player-slider-background-color` | `color` | Боја на позадината за лизгачот за јачина на звук |
| `--bubble-media-player-icon-border-radius` | `px` | Радиус на заоблување за контејнерот на иконата на медиа плеерот |
| `--bubble-media-player-icon-background-color` | `color` | Боја на позадината за контејнерот на иконата на медиа плеерот |
| `--bubble-media-player-box-shadow` | Види [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка на медиа плеерот |

</details>


#### Примери

<details>

<summary>Медиа плеер со сите опции</summary>

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

## Ролетни

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Оваа картичка ви овозможува да ги контролирате вашите ентитети `cover`.

### Опции на ролетните

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задолжително** | Која било ролетна | Ролетна за контрола |
| `name` | string | Опционално | Кој било текст | Име за вашата ролетна, ако не е дефинирано ќе го прикаже името на ентитетот |
| `force_icon` | boolean | Опционално | `true` или `false` (стандардно) | Дава приоритет на иконата наместо на `entity-picture` |
| `show_state` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи или скриј ја состојбата на вашиот `entity` |
| `show_name` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј го името |
| `show_icon` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј ја иконата |
| `show_last_changed` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последна промена на вашиот `entity` |
| `show_last_updated` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последно ажурирање на вашиот `entity` |
| `show_attribute` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи атрибут на вашиот `entity` под неговото `name` |
| `attribute` | string | Опционално (задолжително ако `show_attribute` е поставено на `true`) | Атрибут од вашиот `entity` | Атрибутот што треба да се прикаже (на пр. `brightness`) |
| `scrolling_effect` | boolean | Опционално | `true` (стандардно) или `false` | Овозможи текстот да се лизга кога содржината ја надминува големината на нивниот контејнер |
| `icon_open` | string | Опционално | Која било `mdi:` икона | Икона за вашата отворена ролетна, ако не е дефинирана ќе се прикаже стандардната икона за отворена ролетна |
| `icon_close` | string | Опционално | Која било `mdi:` икона | Икона за вашата затворена ролетна, ако не е дефинирана ќе се прикаже стандардната икона за затворена ролетна |
| `icon_up` | string | Опционално | Која било `mdi:` икона | Икона за копчето за отворање на ролетната, ако не е дефинирана ќе се прикаже стандардната икона за отворање на ролетна |
| `icon_down` | string | Опционално | Која било `mdi:` икона | Икона за копчето за затворање на ролетната, ако не е дефинирана ќе се прикаже стандардната икона за затворање на ролетна |
| `open_service` | string | Опционално | Кој било сервис или скрипта | Сервис за отворање на вашата ролетна, стандардно `cover.open_cover` |
| `stop_service` | string | Опционално | Кој било сервис или скрипта | Сервис за запирање на вашата ролетна, стандардно `cover.stop_cover` |
| `close_service` | string | Опционално | Кој било сервис или скрипта | Сервис за затворање на вашата ролетна, стандардно `cover.close_cover` |
| `tilt_buttons` | string | Опционално | `top` (стандардно), `bottom`, `left`, `right`, `hidden` | Позиција на копчињата за контрола на наклонот (се прикажува само ако ролетната поддржува наклон) |
| `open_tilt_service` | string | Опционално | Кој било сервис или скрипта | Сервис за отворање на наклонот, стандардно `cover.open_cover_tilt` |

| `close_tilt_service` | string | Опционално | Кој било сервис или скрипта | Сервис за затворање на наклонот, стандардно `cover.close_cover_tilt` |
| `button_action` | object | Опционално | `tap_action`, `double_tap_action` или `hold_action`, види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Овозможува промена на стандардните дејства при клик на копчето. |
| `tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при клик на иконата, ако не е дефинирано, ќе се користи `more-info`. |
| `double_tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при двоен клик на иконата, ако не е дефинирано, ќе се користи `none`. |
| `hold_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при задржување на иконата, ако не е дефинирано, ќе се користи `more-info`. |
| `main_buttons_position` | string | Опционално | `default` или `bottom` | Премести ги контролите на дното (фиксирано) |
| `main_buttons_full_width` | boolean | Опционално | `true` или `false` | Направи ги долните контроли целосна ширина (стандардно: `true` кога позицијата е `bottom`) |
| `main_buttons_alignment` | string | Опционално | `end` (стандардно), `center`, `start`, `space-between` | Порамнување на долните контроли кога не се на целосна ширина |
| `card_layout` | string | Опционално | `normal` (стандардно ако не е во преглед на секции), `large` (стандардно ако е во преглед на секции), `large-2-rows`, `large-sub-buttons-grid` | Распоред на стилот на картичката, види [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | Опционално | Кој било број | Број на редови (висина) (на пр. `2`) |
| `sub_button` | object | Опционално | Види [подкопчиња](#подкопчиња) | Додај приспособени копчиња прикачени десно |

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Главна боја на позадината за поддржаните елементи во картичката за ролетна |
| `--bubble-cover-border-radius` | `px` | Радиус на заоблување за картичката за ролетна |
| `--bubble-cover-icon-border-radius` | `px` | Радиус на заоблување за контејнерот на иконата на картичката за ролетна |
| `--bubble-cover-icon-background-color` | `color` | Боја на позадината за контејнерот на иконата на картичката за ролетна |
| `--bubble-cover-box-shadow` | Види [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка на картичката за ролетна |
| `--bubble-button-box-shadow` | Види [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка на копчињата во картичката за ролетна |

</details>


#### Пример

<details>

<summary>Картичка која може да контролира ролетна</summary>

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

## Select

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Оваа картичка ви овозможува да додадете паѓачко мени за вашите ентитети `input_select` / `select`. Оваа картичка исто така ги поддржува подкопчињата и сите заеднички функции на Bubble Card.

> [!TIP]
> Исто така можете да имате select подкопчиња ако сакате, оваа функција е достапна во сите картички кои ги поддржуваат подкопчињата.

### Опции на select

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задолжително** | Кој било ентитет | Ентитет за контрола |
| `name` | string | Опционално | Кој било текст | Име за вашиот select, ако не е дефинирано ќе го прикаже името на ентитетот |
| `icon` | string | Опционално | Која било `mdi:` икона | Икона за вашиот select, ако не е дефинирана ќе се прикаже иконата на ентитетот или `entity-picture` |
| `force_icon` | boolean | Опционално | `true` или `false` (стандардно) | Дава приоритет на иконата наместо на `entity-picture` |
| `show_state` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи или скриј ја состојбата на вашиот `entity` |
| `show_name` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј го името |
| `show_icon` | boolean | Опционално | `true` (стандардно) или `false` | Прикажи или скриј ја иконата |
| `show_last_changed` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последна промена на вашиот `entity` |
| `show_last_updated` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи го времето на последно ажурирање на вашиот `entity` |
| `show_attribute` | boolean | Опционално | `true` или `false` (стандардно) | Прикажи атрибут на вашиот `entity` под неговото `name` |
| `attribute` | string | Опционално (задолжително ако `show_attribute` е поставено на `true`) | Атрибут од вашиот `entity` | Атрибутот што треба да се прикаже (на пр. `brightness`) |
| `scrolling_effect` | boolean | Опционално | `true` (стандардно) или `false` | Овозможи текстот да се лизга кога содржината ја надминува големината на нивниот контејнер |
| `tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при клик на иконата, ако не е дефинирано, ќе се користи `more-info`. |
| `double_tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при двоен клик на иконата, ако не е дефинирано, ќе се користи `none`. |
| `hold_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при задржување на иконата, ако не е дефинирано, ќе се користи `more-info`. |
| `card_layout` | string | Опционално | `normal` (стандардно ако не е во преглед на секции), `large` (стандардно ако е во преглед на секции), `large-2-rows`, `large-sub-buttons-grid` | Распоред на стилот на картичката, види [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | Опционално | Кој било број | Број на редови (висина) (на пр. `2`) |
| `sub_button` | object | Опционално | Види [подкопчиња](#подкопчиња) | Додај приспособени копчиња прикачени десно |

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Главна боја на позадината за поддржаните елементи во картичката select |
| `--bubble-select-background-color` | `color` | Боја на позадината за картичката select |
| `--bubble-select-list-border-radius` | `px` | Радиус на заоблување за паѓачкото мени во картичката |
| `--bubble-select-list-item-accent-color` | `color` | Акцентна боја за избраната ставка |
| `--bubble-select-list-background-color` | `color` | Боја на позадината за паѓачкото мени во картичката |
| `--bubble-select-list-width` | `px` | Ширина на паѓачкото мени во картичката |
| `--bubble-select-arrow-background-color` | `color` | Боја на позадината за стрелката на паѓачкото мени |
| `--bubble-select-button-border-radius` | `px` | Радиус на заоблување за копчето select |
| `--bubble-select-border-radius` | `px` | Радиус на заоблување за картичката select |
| `--bubble-select-icon-border-radius` | `px` | Радиус на заоблување за контејнерот на иконата на картичката select |
| `--bubble-select-icon-background-color` | `color` | Боја на позадината за контејнерот на иконата на картичката select |
| `--bubble-select-box-shadow` | Види [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка на картичката select |

</details>


#### Примери

<details>

<summary>Картичка select со листа на сцени</summary>

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

Оваа картичка ви овозможува да ги контролирате вашите ентитети `climate`.

> [!TIP]
> Менито за избор на режим е [подкопче](#подкопчиња) кое се додава автоматски при креирање на картичката. Потоа можете да го измените или отстраните како што сакате.

### Опции на климата

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име                     | Тип    | Барање                         | Поддржани опции                                  | Опис                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Задолжително**                        | Ентитет climate                                   | Ентитетот за контрола (на пр. `climate.living_room`).                                                            |
| `name`                  | string  | Опционално                            | Кој било текст                                       | Приспособено име за картичката. Ако не е дефинирано, ќе го прикаже името на ентитетот.                                    |
| `icon`                  | string  | Опционално                            | Која било `mdi:` икона                                  | Приспособена икона за картичката. Ако не е дефинирана, ќе се користи иконата на ентитетот или `entity-picture`.                   |
| `force_icon`            | boolean | Опционално                            | `true` или `false` (стандардно)                     | Дава приоритет на иконата над `entity-picture`.                                                           |
| `show_state`            | boolean | Опционално                            | `true` или `false` (стандардно)                     | Прикажи или скриј ја тековната состојба на `entity`.                                                                 |
| `show_name`             | boolean | Опционално                            | `true` (стандардно) или `false`                     | Прикажи или скриј го името на ентитетот.                                                                            |
| `show_icon`             | boolean | Опционално                            | `true` (стандардно) или `false`                     | Прикажи или скриј ја иконата.                                                                                          |
| `hide_target_temp_low`  | boolean | Опционално (само за ентитети кои поддржуваат `target_temp_low`) | `true` или `false` (стандардно) | Ја скрива контролата за ниска целна температура ако е поддржана од `entity`.                                          |
| `hide_target_temp_high` | boolean | Опционално (само за ентитети кои поддржуваат `target_temp_high`)| `true` или `false` (стандардно) | Ја скрива контролата за висока целна температура ако е поддржана од `entity`.                                         |
| `state_color`           | boolean | Опционално                            | `true` или `false` (стандардно)                     | Применува постојана боја на позадината кога ентитетот climate е вклучен.                                              |
| `step` | number | Опционално | Кој било број | Чекорот на температурата. |
| `min_temp` | number | Опционално | Кој било број | Минималната температура. |
| `max_temp` | number | Опционално | Кој било број | Максималната температура. |
| `button_action` | object | Опционално | `tap_action`, `double_tap_action` или `hold_action`, види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Овозможува промена на стандардните дејства при клик на копчето. |
| `tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при клик на иконата, ако не е дефинирано, ќе се користи `more-info`. |
| `double_tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при двоен клик на иконата, ако не е дефинирано, ќе се користи `none`. |
| `hold_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при задржување на иконата, ако не е дефинирано, ќе се користи `more-info`. |                              |
| `main_buttons_position` | string | Опционално | `default` или `bottom` | Премести ги копчињата за дејство на климата на дното (фиксирано) |
| `main_buttons_full_width` | boolean | Опционално | `true` или `false` | Направи ги долните копчиња за дејство целосна ширина (стандардно: `true` кога позицијата е `bottom`) |
| `main_buttons_alignment` | string | Опционално | `end` (стандардно), `center`, `start`, `space-between` | Порамнување на долните копчиња за дејство кога не се на целосна ширина |
| `card_layout` | string | Опционално | `normal` (стандардно ако не е во преглед на секции), `large` (стандардно ако е во преглед на секции), `large-2-rows`, `large-sub-buttons-grid` | Распоред на стилот на картичката, види [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | Опционално | Кој било број | Број на редови (висина) (на пр. `2`) |
| `sub_button`            | object  | Опционално                            | Види [подкопчиња](#подкопчиња)                | Додава приспособени копчиња прикачени десно. Корисно за мени за избор на режим на климата.                                  |

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Главна боја на позадината за поддржаните елементи во картичката climate |
| `--bubble-climate-border-radius` | `px` | Радиус на заоблување за поддржаните елементи во картичката climate |
| `--bubble-climate-button-background-color` | `color` | Боја на позадината за копчињата на картичката climate |
| `--bubble-climate-icon-border-radius` | `px` | Радиус на заоблување за контејнерот на иконата на картичката climate |
| `--bubble-state-climate-fan-only-color` | `color` | Боја на преклопување за состојбата fan-only |
| `--bubble-state-climate-dry-color` | `color` | Боја на преклопување за состојбата dry |
| `--bubble-state-climate-cool-color` | `color` | Боја на преклопување за состојбата cool |
| `--bubble-state-climate-heat-color` | `color` | Боја на преклопување за состојбата heat |
| `--bubble-state-climate-auto-color` | `color` | Боја на преклопување за состојбата auto |
| `--bubble-state-climate-heat-cool-color` | `color` | Боја на преклопување за состојбата heat-cool |
| `--bubble-climate-accent-color` | `color` | Акцентна боја за картичката climate |
| `--bubble-climate-box-shadow` | Види [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка на контејнерот climate. |

</details>


#### Примери

<details>

<summary>Картичка climate со паѓачко мени за HVAC режими</summary>

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

Оваа картичка ви овозможува да ги прикажете вашите ентитети calendar. Нејзината содржина може да се лизга, така што лесно можете да ги прегледувате претстојните настани.

### Опции на календарот

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име                | Тип    | Барање  | Поддржани опции                               | Опис                                                                             |
|---------------------|---------|--------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Опционално     | Кој било број (минимум: 1)                        | Број на календарски денови за кои ќе се преземат настани, од сега до крајот на N-тиот ден (стандардно: 7) |
| `entities`          | object  | **Задолжително** | Објект на ентитет calendar (види подолу)            | Ентитетот за контрола (на пр. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Задолжително** | Ентитет calendar                               | Ентитетот calendar кој треба да се прикаже                                                          |
| `entities.color`    | string  | Опционално     | Боја                                         | Приспособена боја за чипот на календарот. Ако не е дефинирана, автоматски ќе се одбере боја |
| `days`              | number  | Опционално     | Кој било број (минимум: 1)                         | Број на календарски денови за кои ќе се преземат настани, од сега до крајот на N-тиот ден (стандардно: 7) |
| `limit`             | number  | Опционално     | Број                                        | Бројот на настани кои ќе бидат прикажани на картичката                                  |
| `show_end`          | boolean | Опционално     | `true` или `false` (стандардно)                     | Прикажи или скриј го времето на завршување на настаните                                                    |
| `show_progress`     | boolean | Опционално     | `true` (стандардно) или `false`                     | Прикажи или скриј ја лентата на напредок на настанот                                                     |
| `show_started_events`| boolean | Опционално     | `true` (стандардно) или `false`                     | Прикажи или скриј ги настаните кои моментално се во тек                                                 |
| `scrolling_effect`  | boolean | Опционално | `true` (стандардно) или `false` | Овозможи текстот да се лизга кога содржината ја надминува големината на нивниот контејнер |
| `event_action` | object | Опционално | `tap_action`, `double_tap_action` или `hold_action`, види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Овозможува додавање дејства при клик на настан. |
| `tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при клик на ден, ако не е дефинирано, ќе се користи `none`. |
| `double_tap_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при двоен клик на ден, ако не е дефинирано, ќе се користи `none`. |
| `hold_action` | object | Опционално | Види [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирај го типот на дејство при задржување на ден, ако не е дефинирано, ќе се користи `none`. |
| `card_layout` | string | Опционално | `normal` (стандардно ако не е во преглед на секции), `large` (стандардно ако е во преглед на секции), `large-2-rows`, `large-sub-buttons-grid` | Распоред на стилот на картичката, види [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | Опционално | Кој било број | Број на редови (висина) (на пр. `2`) |
| `sub_button` | object | Опционално | Види [подкопчиња](#подкопчиња) | Додај приспособени копчиња прикачени десно |

</details>

<details>

<summary><b>CSS променливи (види <a href="#стилови">Стилови</a>)</b></summary>

| Променлива                                  | Очекувана вредност | Опис                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Главна боја на позадината за поддржаните елементи во картичката calendar  |
| `--bubble-calendar-border-radius`         | `px`           | Радиус на заоблување за поддржаните елементи во картичката calendar |
| `--bubble-calendar-height`                | `px`           | Висина за картичката calendar                                        |

</details>

#### Примери

<details>

<summary>Картичка calendar со ограничен број на настани</summary>

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

<summary>Картичка calendar со време на завршување и лента на напредок</summary>

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


## Разделник

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Оваа картичка е едноставен разделник за поделба на вашиот скокачки прозорец на категории / секции. На пр. Светла, Уреди, Ролетни, Поставки, Автоматизации...

### Опции на разделникот

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `name` | string | По избор, но препорачливо | Секоја низа | Име за вашиот разделник |
| `icon` | string | По избор, но препорачливо | Секоја `mdi:` икона | Икона за вашиот разделник |
| `card_layout` | string | По избор | `normal` (стандардно ако не е во section преглед), `large` (стандардно ако е во section преглед), `large-2-rows`, `large-sub-buttons-grid` | Стил на распоредот на картичката, видете [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | По избор | Секој број | Број на редови (висина) (на пр. `2`) |
| `sub_button` | object | По избор | Видете [подкопчиња](#подкопчиња) | Додајте прилагодени копчиња прикачени десно |

</details>

<details>

<summary><b>CSS променливи (видете <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Боја на позадината за линијата во разделникот |

</details>

#### Пример

<details>

<summary>Разделник/линија за секцијата "Ролетни"</summary>

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

Оваа картичка служи за пополнување на празна колона. Ова е корисно ако имате `horizontal-stack` во вашиот скокачки прозорец со само една картичка. Погледнете во долниот десен агол на овој снимка од екранот за да (не) ја видите.

### Опции на празната колона

Оваа картичка нема опции и не поддржува [стилови](#стилови), иако поддржува опции за распоред за HA секции.

#### Пример

<details>

<summary>Празна колона во хоризонтален стек</summary>

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

## Само подкопчиња

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Оваа картичка е наменета исклучиво за подкопчиња. Совршена е за менија, брзи дејства, информативни чипови или фиксно подножје на дното на страницата.

> [!IMPORTANT]  
> Оваа картичка ја користи новата шема за подкопчиња. Користете `sub_button.bottom` за да ги дефинирате вашите копчиња. Секцијата `sub_button.main` се игнорира.

### Опции на само подкопчиња

<details>

<summary><b>Опции (YAML + описи)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Задолжително** | Видете [подкопчиња](#подкопчиња) | Дефинирајте ги вашите подкопчиња користејќи ја секцијата `bottom` |
| `hide_main_background` | boolean | По избор | `true` или `false` (стандардно) | Отстрани ја позадината на картичката |
| `footer_mode` | boolean | По избор | `true` или `false` (стандардно) | Фиксирај ја картичката на дното на страницата |
| `footer_full_width` | boolean | По избор | `true` или `false` (стандардно) | Направи го подножјето да зафаќа целосна ширина (100%) |
| `footer_width` | number | По избор | Секој број | Ширина на подножјето во пиксели кога `footer_full_width` е `false` |
| `footer_bottom_offset` | number | По избор | Секој број | Растојание од дното на страницата во пиксели (стандардно: `16`) |
| `card_layout` | string | По избор | `normal` (стандардно ако не е во section преглед), `large` (стандардно ако е во section преглед), `large-2-rows`, `large-sub-buttons-grid` | Стил на распоредот на картичката, видете [распореди на картичките](#распореди-на-картичките) |
| `rows` | number | По избор | Секој број | Број на редови (висина) (на пр. `2`) |

</details>

<details>

<summary><b>CSS променливи (видете <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Ширина на подножјето кога `footer_full_width` е `false` |
| `--bubble-footer-bottom` | `px` | Растојание на подножјето од дното |
| `--bubble-footer-box-shadow` | видете [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сенка на кутија за контејнерот на подножјето |

</details>

#### Примери

<details>

<summary>Чипови (како на снимката од екранот)</summary>

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

<summary>Фиксно мени за подножје</summary>

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

## Подкопчиња

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Во секоја картичка што ја поддржува таа опција, можете да додадете подкопчиња за уште повеќе да ги прилагодите вашите картички. Можете, на пример, да создадете копче што може да контролира усисувач, картичка за времето или речиси сè што можете да измислите. Овие подкопчиња ги поддржуваат дејствата на допир и повеќето опции на копчето.

Подкопчињата сега поддржуваат три типа: **Стандардно (копче)**, **Лизгач** и **Паѓачко мени / Select**. Можете да мешате типови во истата картичка, да поставите подкопчиња на врвот или на дното и да ги организирате во групи за понапредни распореди.

#### Позиционирање и групи на подкопчиња

<details>

<summary><b>Структура на подкопчиња (main / bottom + групи)</b></summary>

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

**Забелешки:**
- `main` и `bottom` се две независни секции. Подкопчињата во `bottom` се фиксирани на дното на картичката.
- `main_layout` и `bottom_layout` прифаќаат `inline` (стандардно) или `rows` за да ги наредат групите вертикално.
- Групите се објекти со низа `group` и опционален `buttons_layout` (`inline` или `column`).
- `justify_content` е достапен само за **долни групи** (`start`, `center`, `end`, `fill`).
- Кога се присутни долни подкопчиња, распоредот на картичката автоматски се менува на `large`, освен ако изречно поставите друг распоред.
- Старите низи `sub_button` сè уште се поддржани и се третираат како секцијата `main`.

</details>

### Опции на подкопчиња

<details>

<summary><b>Опции (YAML + опис)</b></summary>

| Име | Тип | Барање | Поддржани опции | Опис |
| --- | --- | --- | --- | --- |
| `entity` | string | По избор | Секој ентитет | Ентитет за контрола |
| `name` | string | По избор | Секоја низа | Име за вашето подкопче, ако не е дефинирано ќе се прикаже името на ентитетот |
| `icon` | string | По избор | Секоја `mdi:` икона | Икона за вашето подкопче, ако не е дефинирана ќе се прикаже иконата на ентитетот или сликата на ентитетот |
| `force_icon` | boolean | По избор | `true` или `false` (стандардно) | Присилно прикажи ја иконата дури и кога е достапна слика на ентитетот |
| `sub_button_type` | string | По избор | `default`, `slider` или `select` | Изберете го типот на подкопчето |
| `show_background` | boolean | По избор | `true` (стандардно) или `false` | Прикажи позадина за вашето подкопче, ќе ја промени бојата според состојбата на вашиот ентитет |
| `state_background` | boolean | По избор | `true` (стандардно) или `false` | Користи ја бојата на состојбата кога ентитетот е `on` |
| `light_background` | boolean | По избор | `true` (стандардно) или `false` | Користи ја бојата на светлото за позадината кога е достапна |
| `show_state` | boolean | По избор | `true` или `false` (стандардно) | Прикажи или скриј ја состојбата на вашиот `entity` |
| `show_name` | boolean | По избор | `true` или `false` (стандардно) | Прикажи или скриј го името |
| `show_icon` | boolean | По избор | `true` (стандардно) или `false` | Прикажи или скриј ја иконата |
| `show_last_changed` | boolean | По избор | `true` или `false` (стандардно) | Прикажи го времето на последна промена на вашиот `entity` |
| `show_last_updated` | boolean | По избор | `true` или `false` (стандардно) | Прикажи го времето на последно ажурирање на вашиот `entity` |
| `show_attribute` | boolean | По избор | `true` или `false` (стандардно) | Прикажи атрибут на вашиот `entity` под неговото `name` |
| `attribute` | string | По избор (задолжително ако `show_attribute` е поставено на `true`) | Атрибут од вашиот `entity` | Атрибутот што ќе се прикаже (на пр. `brightness`) |
| `select_attribute` | string | По избор | Листа на атрибути од вашиот `entity` (видете ги поддржаните опции погоре) | Оваа листа на атрибути ќе отвори паѓачко мени при клик (на пр. `effect_list`) |
| `show_arrow` | boolean | По избор | `true` (стандардно) или `false` | Прикажи или скриј ја стрелката на паѓачкото мени за select подкопчиња |
| `scrolling_effect` | boolean | По избор | `true` (стандардно) или `false` | Дозволи текстот да се лизга кога содржината ја надминува големината на контејнерот |
| `tap_action` | object | По избор | Видете [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирајте го типот на дејство при клик на подкопчето, ако не е дефинирано, ќе се користи `more-info`. |
| `double_tap_action` | object | По избор | Видете [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирајте го типот на дејство при двоен клик на подкопчето, ако не е дефинирано, ќе се користи `none`. |
| `hold_action` | object | По избор | Видете [дејства](#дејства-на-допир-двоен-допир-и-задржување) | Дефинирајте го типот на дејство при задржување на подкопчето, ако не е дефинирано, ќе се користи `more-info`. |
| `fill_width` | boolean | По избор | `true` или `false` | Пополни ја достапната ширина (стандардно: `false` за main, `true` за bottom) |
| `width` | number или string | По избор | Секој број или CSS должина | Прилагодена ширина (`px` за секцијата main, `%` за секцијата bottom стандардно) |
| `custom_height` | number | По избор | Секој број | Прилагодена висина во пиксели |
| `content_layout` | string | По избор | `icon-left` (стандардно), `icon-top`, `icon-bottom`, `icon-right` | Позиција на иконата во подкопчето |
| `always_visible` | boolean | По избор | `true` или `false` (стандардно) | **Само за лизгач.** Секогаш прикажувај го лизгачот наместо да се отвора при допир |
| `show_button_info` | boolean | По избор | `true` или `false` (стандардно) | **Само за лизгач.** Прикажи икона/име/состојба кога `always_visible` е овозможено |
| `visibility` | object или list | По избор | Видете [услови](https://www.home-assistant.io/docs/scripts/conditions/) | Прикажи или скриј го подкопчето врз основа на услови |
| `hide_when_parent_unavailable` | boolean | По избор | `true` или `false` (стандардно) | Скриј го подкопчето ако родителскиот ентитет на картичката е недостапен |

</details>

<details>

<summary><b>Опции на лизгач подкопче (исто како лизгачи на копчиња)</b></summary>

<br>

Лизгач подкопчињата ги поддржуваат истите опции за лизгач како лизгачите на копчиња, вклучувајќи:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS променливи (видете <a href="#стилови">Стилови</a>)</b></summary>

| Променлива | Очекувана вредност | Опис |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Радиус на заоблување за подкопчињата |
| `--bubble-sub-button-background-color` | `color` | Боја на позадина за подкопчињата |
| `--bubble-sub-slider-border-radius` | `px` | Радиус на заоблување за лизгач подкопчиња |
| `--bubble-sub-slider-background-color` | `color` | Боја на позадина за лизгач подкопчиња |
| `--bubble-sub-slider-height` | `px` | Висина за секогаш видливи лизгач подкопчиња |
| `--bubble-sub-button-dark-text-color` | `color` | Боја на текстот на светли позадини на подкопчиња |

</details>

#### Примери

<details>

<summary>Копче со неколку подкопчиња за создавање на картичка за усисувач (како на снимката од екранот)</summary>

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

<summary>Лизгач копче со подкопче што ја прикажува осветленоста и едно што го вклучува/исклучува светлото (како на снимката од екранот)</summary>

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

<summary>Копче што ги прикажува внатрешната и надворешната температура со времето за денес и утре (со приложен снимка од екранот)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> За жал, кај мене е облачно постојано, но сите икони се менуваат според времето.

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

## Распореди на картичките

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card целосно го поддржува прегледот на секции на Home Assistant, можете да го промените распоредот на картичката за да ја зголемите картичката, а исто така да го промените бројот на колони или редови што картичката треба да ги зафаќа во вашиот преглед на секции (само на картичките што ја поддржуваат таа опција). Овие распореди се исто така поддржани во сите други типови на прегледи.

<details>

<summary><b>Достапни распореди на картичките</b></summary>

| Распоред | Опис |
| --- | --- |
| `normal` | Обичниот распоред (не е оптимизиран за прегледот на секции) |
| `large` | Поголем распоред што ќе се промени според избраните редови во прегледот на секции (оптимизиран за прегледот на секции) |
| `large-2-rows` | Поголем распоред со 2 реда на подкопчиња што ќе се промени според избраните редови во прегледот на секции (оптимизиран за прегледот на секции) |
| `large-sub-buttons-grid` | Овој распоред ги прикажува подкопчињата во мрежа, `rows` мора да биде поставено на најмалку `2`.

</details>

#### Примери

<details>

<summary>Големо копче што прикажува статистики за енергија со 2 реда на подкопчиња (со приложен снимка од екранот)</summary>

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

<summary>Големо копче со повеќе редови со 12 подкопчиња</summary>

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

## Дејства на допир, двоен допир и задржување

Можете исто така да ги користите стандардните дејства на Home Assistant за допир, двоен допир и задржување на картичките што ја поддржуваат оваа опција. На пример, ова ви овозможува да го прикажете прозорецот "more info" со задржување на иконата на копчето или да извршите услуга кога ќе се притисне подкопче.

**Забелешка: Кога е конфигурирано `double_tap_action`, обичното `tap_action` ќе има доцнење од 200ms за да овозможи детекција
на двоен допир. Ако ова доцнење е несакано, поставете `double_tap_action` на `none` за да го исклучите откривањето на двоен допир.**

### Опции на дејствата

<details>

<summary><b>Опции (YAML + опис)</b></summary>

| Име | Тип | Поддржани опции | Опис |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Дејство што треба да се изврши |
| `target` | object |  | Работи само со `call-service`. Ја следи [синтаксата на home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Секоја патека на вашата контролна табла | Патека до која ќе се навигира (на пр. `'#kitchen'` за отворање скокачки прозорец) кога дејството е дефинирано како navigate |
| `url_path` | string | Секоја врска | URL за отворање при клик (на пр. `https://www.google.com`) кога дејството е `url` |
| `service` | string | Секоја услуга | Услуга за повикување (на пр. `media_player.media_play_pause`) кога `action` е дефинирано како `call-service` |
| `data` или `service_data` | object | Секои податоци за услугата | Податоци за услугата што ќе се вклучат (на пр. `entity_id: media_player.kitchen`) кога `action` е дефинирано како `call-service` |
| `confirmation` | object | Видете [потврда](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Прикажи скокачки прозорец за потврда (не оној на Bubble Card), го препишува стандардниот објект `confirmation` |

</details>

#### Пример

<details>

<summary>Копче за отворање скокачки прозорец</summary>

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

## Стилови

Можете да додадете сопствени стилови за да ги измените CSS-от на сите картички **без користење на card-mod** на четири начини:

- Во едиторот, одете на картичката што сакате да ја измените, потоа одете во _Styling options > Custom styles & JS templates_, и додадете ги вашите сопствени стилови (проверете ги советите и примерите подолу).
- Во едиторот (или во [YAML](#модули)), одете на картичката што сакате да ја измените, потоа одете во _Modules_, потоа создадете нов модул (тој ќе биде достапен за сите картички), или одете во **Module Store** за да инсталирате достапен модул (повеќе детали за модулите можете да најдете [подолу](#модули)).
- Во датотека со [тема](https://www.home-assistant.io/integrations/frontend/#defining-themes) со додавање CSS променливи во YAML (тие се достапни во документацијата на секоја картичка погоре). Ова овозможува глобални измени.

  <details>
  
  <summary>Пример</a></summary>
  
  <br>

  Не копирајте ја линијата `Bubble:`, тоа е името на темата што ја користите. Исто така треба да го отстраните `--` од променливите.

  Треба да ја извршите акцијата [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) за да ја освежите темата по секоја измена.

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
  
- Во YAML со додавање на `styles: |` проследено со вашите сопствени стилови (проверете ги советите и примерите подолу).

> [!TIP]  
> **За да разберете кои класи на стилови можат да се менуваат**, можете да ја погледнете папката [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) во ова репозиториум. Во секоја папка на картичка, ќе најдете датотека наречена `styles.css`. Овие датотеки ги содржат сите применети стилови. Ова овозможува многу повеќе можности отколку CSS променливите, но треба да се додаде поединечно на секоја картичка.
> 
> Исто така можете да најдете многу [примери од заедницата](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), или некои од [форумот на Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) со малку пребарување.
>
> Bubble темата за Home Assistant (како на сликите) може да се најде [тука](https://github.com/Clooos/Bubble).
>
> Наскоро следи туторијал видео на мојот [YouTube канал](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Забележете дека можеби ќе треба да додадете `!important;` на некои CSS стилови што веќе се дефинирани (видете ги примерите подолу).

> [!TIP]  
> Подкопчињата можат да се таргетираат преку класи базирани на име. На пример, подкопче именувано „My sub-button“ може да се стилизира со `.my-sub-button`. Подкопчињата од типот слајдер исто така изложуваат `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, итн.

#### Примери

<details>

<summary>Менување на големината на фонтот на која било Bubble картичка</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Менување на бојата на позадина на едно копче во хоризонтален стек од копчиња</summary>

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

<summary>Менување на бојата на позадина на картичка</summary>

<br>

Ова работи на сите типови на Bubble картички (освен за скокачките прозорци):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ова го прави истото само во картичка тип копче (работи и за заглавието на скокачкиот прозорец): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

За да ја промените бојата кога е `on`, погледнете ги шаблоните на стилови подолу.

</details>

<details>

<summary>Менување на бојата на слајдерот на копчето</summary>

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

<summary>Менување на бојата на линијата на разделник</summary>

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

<summary>Менување на бојата на икона</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

За икона во хоризонтален стек од копчиња.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Менување на бојата на позадина на контејнер на икона</summary>

<br>

Ова работи на сите типови на Bubble картички (освен за скокачките прозорци):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ова го прави истото за заглавието на скокачкиот прозорец: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Менување на големината на подкопчињата (совршено за големиот распоред)</summary>

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

<summary>Менување на бојата на позадина на второто подкопче</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Менување на големината на икона</summary>

<br>

За главната икона.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

За иконите на подкопчињата.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Користење на слика наместо икона во подкопче</summary>

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

Само поставете ја сликата во папка „pictures“ (или името што го сакате) во папката „www“ на Home Assistant.

</details>

<details>

<summary>Напреден пример: Создавање на хоризонтален ред од подкопчиња (со приложена слика)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Навистина ми се допаѓа овој пример, го користам како заглавие на мојата контролна табла.

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

**Bubble Card не поддржува Jinja шаблони**, но напредните корисници можат да додадат шаблони во JS директно во нивните [сопствени стилови](#стилови). На пример, ова овозможува динамично менување на икона, текстовите или боите на елемент, прикажување или скривање на елемент условно (како подкопче), или речиси сè друго врз основа на состојба, атрибут и уште многу.

> [!TIP]  
> Повеќе информации за JS шаблоните [тука](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Мојот совет е **секогаш да погледнете во конзолата на прелистувачот** за да се осигурате дека сè работи исправно.

> [!IMPORTANT]  
> **Сите шаблони што не менуваат CSS својство мора да бидат ставени на крајот! Како менување на икона, текст или кој било елемент.**

#### Достапни променливи и функции

<details>

<summary>Променливи</summary>

<br>

Имате пристап до овие променливи во повеќето картички:

- `state` ќе ја врати состојбата на вашиот дефиниран `entity`.
  
- `entity` ќе го врати ентитетот што го дефиниравте, како `switch.test` во овој пример.
  
- `icon` може да се користи вака за да ја смените иконата `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` ќе ја врати состојбата на дефинираниот `entity` на вашето прво подкопче, `[0]` е состојбата на првото подкопче, `[1]` на второто...
  
- `subButtonIcon[0]` може да се користи вака за да ја смените иконата на првото подкопче `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` е иконата на првото подкопче, `[1]` на второто...
  
- `card` ќе го врати елементот на картичката во DOM.
  
- `hass` е напредна променлива што ви овозможува уште поголема контрола, на пример можете да ја вратите состојбата на `light.kitchen` вака `hass.states['light.kitchen'].state` или атрибут вака `hass.states[entity].attributes.brightness`.

- `this` ќе врати многу корисни информации за вашата поставеност и контролна табла, користете го само ако знаете што правите.

</details>

<details>

<summary>Функции</summary>

<br>

Имате пристап до сите глобални JS функции, но исто така имате пристап и до:

- `getWeatherIcon` може да се користи за да врати икона за времето врз основа на состојба што ја враќа временската прогноза. На пример, можете да направите вака `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` за да ја смените иконата на третото подкопче со денешната икона за времето, `.forecast[1]?.condition` е за утре...

  Ќе треба да создадете сензор со шаблон за тоа. Еве што можете да додадете во вашата `configuration.yaml`:
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
- `hass.formatEntityState(state)` може да се користи за превод на состојба (може да се користи и за да добиете единица на состојба, без потреба да ја додавате рачно).
- `hass.formatEntityAttributeValue(state, "attribute")` може да се користи за превод на атрибут (може да се користи и за да добиете единица на состојба, без потреба да ја додавате рачно).

</details>

#### Примери

Можете да најдете многу примери подолу, но исто така можете да најдете многу напредни шаблони на мојата [Patreon страница](https://www.patreon.com/c/Clooos), како еден (мојот омилен) што овозможува до четири условни беџови поставени околу иконите на картичката. Тоа е и одличен начин да научите за сите можности на сопствените стилови и шаблони на Bubble Card!

<details>
<summary>Примери од мојата Patreon страница</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Додавање беџови налик на Home Assistant на која било картичка</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Прикажување форматиран датум и време во разделник без користење на ентитет</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Прикажување на состојба на подкопче во два реда</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Прилагодување натписи и икони внатре во подкопче тип Select</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Додавање на постојан потсетнички скокачки прозорец што се прикажува само кога е потребно</a>
</p>

<br>

</details>

<details>

<summary>Менување на бојата на позадина на копче што е црвено кога е <code>off</code> и сино кога е <code>on</code></summary>

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

<summary>Менување на бојата на позадина на копче врз основа на ентитет за хоризонталниот стек од копчиња</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Прикажување/Скривање на подкопче условно</summary>

<br>

Овој го прикажува првото подкопче само кога мојот правосмукач е заглавен.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Овој прикажува подкопче кога батеријата е под 10%. Корисно со подкопче што прикажува „Ниска батерија“.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Менување на икона или икона на подкопче условно</summary>

<br>

Овој ја менува иконата на копчето само кога правосмукачот е заглавен.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Овој ја менува иконата на првото подкопче само кога правосмукачот е заглавен.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Менување на бојата на икона или икона на подкопче условно</summary>

<br>

Овој ја менува бојата на иконата на копчето врз основа на неговата состојба.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Овој ја менува бојата на иконата на подкопчето врз основа на неговата состојба. `.bubble-sub-button-1` е првото подкопче, заменете `1` ако сакате да ја смените иконата на друго подкопче.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Анимирање на икона на вентилатор условно</summary>

<br>

Овој ротира икона на копче кога вентилаторот е `on`.
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

<summary>Шаблонирање на текстови (како име или состојба)</summary>

<br>

Овој го менува името/состојбата на копчето со „Моментално е сончево“ во зависност од времето.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
или кога се применува за подкопчиња:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ако сакате да ја шаблонирате состојбата (`.bubble-state`), не вклучувајте го `show_state: true`, туку само вклучете го `show_attribute: true` без никаков атрибут.

</details>

<details>

<summary>Напреден пример: Менување на бојата на подкопче кога е отворен скокачки прозорец</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Напреден пример: Шаблонирање на име на разделник врз основа на состојба преведена на вашиот јазик</summary>

<br>

Можете да користите `hass.formatEntityState(state)` за да преведете состојба и `hass.formatEntityAttributeValue(state, "attribute")` за да преведете атрибут.

Овој го менува името и иконата врз основа на времето, „Nuageux“ значи „Облачно“ на француски.

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

Модулите се моќна функција што ви овозможува да зачувате, повторно користите и споделите ваши сопствени стилови и шаблони низ сите ваши Bubble картички. Наместо да копирате и лепите ист код во повеќе картички, можете да создадете модул и да го примените каде што ви е потребно. Ова го олеснува управувањето со изгледот и чувството на вашата контролна табла и го прави многу поефикасно.

Но оваа функција е многу помоќна од тоа, ви овозможува сами да додавате вистински функции во едиторот на Bubble Card, користејќи ги сите стандардни опции на [Home Assistant формата](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Селекторот на објекти е подобрен за да прикажува живи промени и правилно да поддржува атрибути.

Исто така можете да прелистувате низ **Module Store** за да пронајдете и инсталирате [модули создадени од заедницата](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), или да ги споделите вашите сопствени креации!

> [!TIP]
> Кодот на модулот работи потполно исто како кодот во делот `styles` на картичка. Сите исти променливи и функции од делот [Шаблони](#шаблони) се достапни.

<br>

### Почетно поставување

> [!IMPORTANT]
> Почнувајќи од v3.1.0, Bubble Card Tools е препорачаниот складишен систем за модули. Старата метода со сензор со шаблон сè уште работи за постојните поставувања, но новите модули и функциите на Module Store најдобро се поддржани преку Bubble Card Tools.

Интеграцијата Bubble Card Tools го овозможува едиторот на модули и Module Store, и ги складира модулите како посебни YAML датотеки. Постојните модули се мигрираат автоматски.

Чекорите за инсталација и конфигурација се објаснети тука:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Едиторот на модули

Можете да пристапите до едиторот на модули од поставките на која било картичка, во делот **Modules**. Едиторот нуди два главни таба:

#### Табот My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Овој таб ги прикажува сите ваши инсталирани модули и ви овозможува да:

- **Примените** постојни модули на тековната картичка
- **Создадете** нов модул од почеток
- **Уредувате** постојни модули со преглед во живо
- **Избришете** модули што повеќе не ви се потребни
- **Пребарувате** и **сортирате** модули (по азбучен ред, неодамнешни, активни прво)
- **Поставите глобален статус** за модул автоматски да се применува на сите картички
- **Увезете/Извезете** модули за резервна копија или споделување

#### Табот Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Овој таб ги прикажува [сите достапни модули од заедницата](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), и ви овозможува да:

- **Прелистувате** низ сите модули создадени од заедницата
- **Пребарувате** и филтрирате модули по име, компатибилност или клучни зборови
- **Инсталирате** модули со едно кликнување
- **Ажурирате** инсталирани модули кога се достапни нови верзии

> [!TIP]
> Во едиторот, можете да овозможите неподдржани модули за да тестирате модули што сè уште не се означени како компатибилни со даден тип на картичка.

<br>

### Како да ги користите модулите

#### Создавање нов модул

<details>

<summary>Кликнете за да проширите</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Одете во едиторот на која било картичка и проширете го делот **Modules**.
2. Кликнете на **Create new module**.
3. Пополнете ги информациите за модулот.
4. Напишете го вашиот CSS и/или JavaScript код за шаблон во едиторот **Code**.
5. (По желба) Создадете сопствен интерфејс за конфигурација во делот **Editor** (како бирачот на бои на сликата погоре, целосна документација достапна [тука](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Кликнете **Save**.

Вашиот модул сега е достапен за употреба на која било од вашите картички!

<br>

</details>

#### Примена на модул на картичка

<details>

<summary>Кликнете за да проширите</summary>

<br>

- **Преку едиторот:**

  - Одете во едиторот на картичката на која сакате да го примените модулот.
  - Проширете го делот **Modules**.
  - Кликнете на модулот што сакате да го примените од листата.
  - Под „Apply to“, кликнете на „This card“. Модулот сега е активен. Можете да примените повеќе модули на истата картичка.

- **Преку YAML:**

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

#### Глобална примена на модул

<details>

<summary>Кликнете за да проширите</summary>

<br>

Можете да поставите модул автоматски да се применува на сите Bubble картички:

**Ова не е достапно за модули со едитор, бидејќи тие бараат специфична конфигурација за да работат.**

- **Преку едиторот:**

  - Во едиторот на модули, пронајдете го вашиот модул во табот **My Modules**.
  - Вклучете го копчето **All cards** до името на модулот.
  - Модулот сега автоматски ќе се применува на сите картички.
 
- **Преку YAML:**

  Во вашата YAML конфигурација на модулот (во `bubble-modules.yaml`), само додадете `is_global: true`.

<br>

</details>

#### Исклучување на една картичка од глобален модул

<details>

<summary>Кликнете за да проширите</summary>

<br>

Ако имате глобален модул, но сакате да го исклучите од одредена картичка:

- **Преку едиторот:**
  
  - Во делот **Modules** на картичката, ќе ги видите наведени глобалните модули.
  - Кликнете на глобален модул, оневозможете „This card“ за да го исклучите од оваа конкретна картичка.

- **Преку YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Споделување на вашиот модул во Module Store

<details>

<summary>Кликнете за да проширите</summary>

<br>

За да го споделите вашиот модул во Module Store, во едиторот на модули, на дното во „Export Module“, кликнете на „Copy for GitHub“ и залепете ја содржината во нова дискусија во категоријата [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Уредете го описот** (ако е потребно), **примерот** (за YAML корисниците), и не заборавајте да **вклучите барем еден снимок на екранот** за Module Store.

**Вашиот модул станува достапен веднаш потоа** (по освежување на продавницата), затоа проверете двапати дали сè е правилно напишано и модулот работи како што е очекувано. Секако можете да го уредите/ажурирате модулот откако ќе биде споделен.

<br>

</details>

#### Управување со верзии

<details>

<summary>Кликнете за да проширите</summary>

<br>

Module Store автоматски проверува за ажурирања на инсталираните модули. Кога се достапни ажурирања:

1. Ќе видите индикатор за ажурирање во табот **Module Store**.
2. Кликнете **Update** на модулите со достапни ажурирања.
3. Потврдете го ажурирањето во Module Store.

<br>

</details>

#### Дефинирање на поддржани типови картички

<details>

<summary>Кликнете за да проширите</summary>

<br>

Некои модули можеби не се компатибилни со сите типови картички. Можете да одредите кои картички ги поддржува модулот.  
Ако сакате модул да биде компатибилен со **сите картички**, едноставно испуштете го полето `supported` (или користете ја опцијата **All cards** во едиторот).

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
<summary>Основен модул за стилови</summary>

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
<summary>Модул со сопствена конфигурација</summary>

<br>

Овој модул е достапен [тука](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Повеќе примери можете да најдете во Module Store, или [тука](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Помош

Слободно отворете проблем ако нешто не работи како што се очекува. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Имате прашања или размислувања за Bubble Card? Сакате да ги споделите вашите контролни табли или откритија? Можете да одите на форумот на Home Assistant, на subreddit-от на Bubble Card или во делот GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Придонесување

Придонесите се добредојдени! Без разлика дали станува збор за поправки на грешки, нови функции, преводи или подобрувања на документацијата, слободно отворете pull request.

Пред да започнете, ве молиме прочитајте го [водичот за развивачи](DEVELOPERS.md) кој опфаќа како да ја поставите вашата локална средина, да го изградите проектот и да ги тестирате вашите промени.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Донирајте

Го посветувам најголемиот дел од моето слободно време за да го направам овој проект најдобар што може да биде. Затоа, ако ја цените мојата работа, секоја донација би била одличен начин да ја покажете вашата поддршка 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Ви благодарам на сите за вашата поддршка, вие сте мојата најголема мотивација!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
