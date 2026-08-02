<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Тази страница е автоматичен превод. При съмнение [оригиналната документация на английски](../README.md) има предимство. Някое изречение звучи странно? Всяка помощ е добре дошла, а [поправянето на тази страница](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.bg.md) отнема само минута: GitHub се грижи за форка и pull request-а. Предварително благодаря! 🍻

# Bubble Card

🌐 **[Прочетете това на друг език](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card е минималистична и персонализируема колекция от карти за Home Assistant с модерни изскачащи прозорци и вграден Module Store с над 100 модула, създадени от общността.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Съдържание

**[`Инсталация`](#инсталация)**  **[`Конфигурация`](#конфигурация)**  **[`Pop-up`](#pop-up)**  **[`Хоризонтален стек от бутони`](#хоризонтален-стек-от-бутони)**  **[`Бутон`](#бутон)**  **[`Медиен плейър`](#медиен-плейър)**  **[`Щори`](#щори)**  **[`Избор`](#избор)**  **[`Климат`](#климат)**  **[`Календар`](#календар)**  **[`Разделител`](#разделител)**  **[`Празна колона`](#празна-колона)**  **[`Само подбутони`](#само-подбутони)**  **[`Подбутони`](#подбутони)**  **[`Подредби на картата`](#подредби-на-картата)**  **[`Действия`](#действия-при-докосване-двойно-докосване-и-задържане)**  **[`Оформление`](#оформление)**  **[`Шаблони`](#шаблони)**  **[`Модули (Modules)`](#модули-modules)**  **[`Помощ`](#помощ)**  **[`Принос`](#принос)**  **[`Дарения`](#дарения)**

<br>

## Инсталация

**Най-ниска поддържана версия на Home Assistant:** 2023.9.0

<details>

<summary>Без HACS</summary>

<br>

1. Изтеглете този файл: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Добавете този файл в папката си `<config>/www`
3. На таблото си натиснете иконата в горния десен ъгъл, след това `Редактиране на таблото`
4. Натиснете отново същата икона, след това `Управление на ресурсите`
5. Натиснете `Добавяне на ресурс`
6. Копирайте и поставете това: `/local/bubble-card.js?v=1`
7. Натиснете `JavaScript модул`, след това `Създаване`
8. Върнете се назад и презаредете страницата
9. Вече можете да натиснете `Добавяне на карта` в долния десен ъгъл и да потърсите `Bubble Card`
10. След всяко обновяване на файла ще трябва да редактирате `/local/bubble-card.js?v=1` и да смените версията с произволно по-високо число

Ако не работи, просто опитайте да изчистите кеша на браузъра си.

</details>

<details>

<summary>С HACS (препоръчително)</summary>

<br>

Този метод ви позволява да получавате обновявания директно през Home Assistant Community Store

1. Ако HACS все още не е инсталиран, изтеглете го, като следвате инструкциите на [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Направете първоначалната конфигурация на HACS, като следвате инструкциите на [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. В страничната лента отидете на „HACS“
4. Потърсете „Bubble Card“ или натиснете синия бутон по-долу
5. Натиснете „Изтегляне“
6. Върнете се на таблото си и натиснете иконата в горния десен ъгъл, след това `Редактиране на таблото`
7. Вече можете да натиснете `Добавяне на карта` в долния десен ъгъл и да потърсите `Bubble Card`

Ако не работи, опитайте да изчистите кеша на браузъра/приложението си (на всичките си устройства, ако е нужно).

#### Видеа

Можете да разгледате и моя YouTube канал за видеа стъпка по стъпка.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Отваряне на Bubble Card в Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Конфигурация

Всички опции могат да бъдат конфигурирани в редактора на Home Assistant. Но в документацията по-долу ще намерите повече подробности и YAML кода.

<details>

<summary><b>Основни опции (YAML + описание)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `type` | string | **Задължително** | `custom:bubble-card` | Тип на картата |
| `card_type` | string | **Задължително** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` или `sub-buttons` | Тип на Bubble Card картата, вижте по-долу |
| `styles` | списък от обекти | По избор | Всякакви CSS стилове | Позволява ви да персонализирате CSS кода на вашата Bubble Card, вижте [оформление](#оформление) |

</details>

<details>

<summary><b>Глобални CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Радиус на заобляне за всички поддържани елементи |
| `--bubble-main-background-color` | `color` | Основен цвят на фона за всички поддържани елементи |
| `--bubble-secondary-background-color` | `color` | Вторичен цвят на фона за всички поддържани елементи |
| `--bubble-accent-color` | `color` | Акцентен цвят за всички поддържани елементи |
| `--bubble-icon-border-radius` | `px` | Радиус на заобляне на иконата за всички поддържани елементи |
| `--bubble-icon-background-color` | `color` | Цвят на фона на иконата за всички поддържани елементи |
| `--bubble-sub-button-border-radius` | `px` | Радиус на заобляне за всички подбутони |
| `--bubble-sub-button-background-color` | `color` | Цвят на фона за всички подбутони |
| `--bubble-box-shadow` | вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка за всички поддържани елементи |
| `--bubble-border` | вижте [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Рамка за всички поддържани карти |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Разгледайте това [видео](https://www.youtube.com/watch?v=0hSQOlBxKKI), за да научите повече за Bubble Card и възможностите ѝ.** Моят YouTube канал е сравнително нов и е насочен към уроци за Home Assistant и Bubble Card. Не се колебайте да се абонирате, за да помогнете за видимостта на канала ми. Предварително благодаря!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Тази карта ви позволява да създадете изскачащ прозорец с всякакво съдържание. Всеки изскачащ прозорец е **скрит по подразбиране** и може да бъде отворен чрез насочване към неговия линк (напр. `'#pop-up-name'`), с всяка карта, която поддържа [действието](#действия-при-докосване-двойно-докосване-и-задържане) `navigate`, или с включения [хоризонтален стек от бутони](#хоризонтален-стек-от-бутони).

> [!TIP]
> ### Тригер на изскачащия прозорец 
> Тази функция ви позволява да отваряте изскачащ прозорец според състоянието на който и да е обект, например можете да отворите прозорец „Сигурност“ с камера, когато има човек пред къщата ви. Можете също да създадете помощен превключвател (input_boolean) и да задействате отварянето/затварянето му в автоматизация.
> <details>
> <summary>Отваряне на изскачащ прозорец, когато <code>binary_sensor</code> е <code>on</code></summary>
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
> ### Различни начини за затваряне на изскачащ прозорец 
> Има много начини да затворите изскачащ прозорец. Например можете да плъзнете от заглавната част на прозореца надолу, да направите дълго плъзгане надолу вътре в прозореца, да натиснете Escape на компютър, да премахнете хеша от URL адреса или просто да натиснете бутона за затваряне.
>


### Опции на изскачащия прозорец

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `hash` | string | **Задължително** | Всеки уникален хеш (напр. `'#kitchen'`) с ' ' | Така ще отваряте вашия изскачащ прозорец |
| `popup_style` | string | По избор | `bubble` (по подразбиране) или `classic` | Определя визуалния стил на изскачащия прозорец |
| `popup_mode` | string | По избор | `default` (по подразбиране), `fit-content`, `centered` или `adaptive-dialog` | Определя режима на подредба на изскачащия прозорец |
| `with_bottom_offset` | boolean | По избор | `true` или `false` (по подразбиране) | Използва се само с `popup_mode: fit-content` или `adaptive-dialog`. Прилага долно отместване на мобилни устройства, полезно когато таблото ви включва карта в долната част. |
| `full_width_on_mobile` | boolean | По избор | `true` или `false` (по подразбиране) | Използва се само с `popup_mode: centered`. Разширява изскачащия прозорец до цялата ширина на екрана на мобилни устройства, полезно при по-малки дисплеи. |
| `performance_mode` | string | По избор | `default` (по подразбиране) или `performance` | Оптимизира анимацията при отваряне на изскачащия прозорец. `performance` леко забавя изобразяването на съдържанието и размиването на фона, а също изключва размиването на подложката, ако е зададено. |
| `auto_close` | string | По избор | Време на изчакване в милисекунди (напр. `10000` за 10 s) | Автоматично затваряне на изскачащия прозорец след изтичане на времето |
| `close_on_click` | boolean | По избор | `true` или `false` (по подразбиране) | Автоматично затваряне на изскачащия прозорец след всяко взаимодействие |
| `close_by_clicking_outside` | boolean | По избор | `true` (по подразбиране) или `false` | Затваряне на изскачащия прозорец с натискане извън него |
| `width_desktop` | string | По избор | Всяка CSS стойност | Ширина на компютър (`100%` по подразбиране на мобилни) |
| `margin` | string | По избор | Всяка CSS стойност | Използвайте това **само** ако изскачащият ви прозорец не е добре центриран на мобилни устройства (напр. `13px`) |
| `margin_top_mobile` | string | По избор | Всяка CSS стойност | Горно отместване на мобилни (напр. `-56px`, ако заглавната ви част е скрита) |
| `margin_top_desktop` | string | По избор | Всяка CSS стойност | Горно отместване на компютър (напр. `50vh` за прозорец с половин размер или `calc(100vh - 400px)` за фиксирана височина от `400px`) |
| `bg_color` | string | По избор | Всяка hex, rgb или rgba стойност | Цветът на фона на вашия изскачащ прозорец (напр. `#ffffff` за бял фон) |
| `bg_opacity` | string | По избор | Всяка стойност от `0` до `100` | Непрозрачността на фона на вашия изскачащ прозорец (напр. `100` за никаква прозрачност) |
| `bg_blur` | string | По избор | Всяка стойност от `0` до `100` | Ефектът на размиване на фона на вашия изскачащ прозорец, **това работи само ако `bg_opacity` не е зададено на `100`** (напр. `0` за никакво размиване)|
| `shadow_opacity` | string | По избор | Всяка стойност от `0` до `100` | Непрозрачността на сянката на вашия изскачащ прозорец (напр. `0`, за да я скриете) |
| `hide_backdrop` | boolean | По избор | `true` или `false` (по подразбиране) | Задайте това на true на първия изскачащ прозорец на основното си табло, за да изключите подложката на всички изскачащи прозорци. |
| `background_update` | boolean | По избор | `true` или `false` (по подразбиране) | Обновяване на съдържанието на изскачащия прозорец във фонов режим (не се препоръчва) |
| `trigger_entity` | string | По избор | Всеки обект | Отваряне на този изскачащ прозорец според състоянието на който и да е обект |
| `trigger_state` | string | По избор (**Задължително**, ако `trigger_entity` е зададено) | Всяко състояние на обект | Състоянието на обекта, при което се отваря изскачащият прозорец |
| `trigger_close` | boolean | По избор | `true` или `false` (по подразбиране) | Затваряне на изскачащия прозорец, когато `trigger_state` е различно |
| `open_action` | object | По избор | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Задейства действие при отваряне на изскачащия прозорец |
| `close_action` | object | По избор | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Задейства действие при затваряне на изскачащия прозорец |
| `show_header` | boolean | По избор | `true` (по подразбиране) или `false` | Показване/скриване на цялата заглавна част на изскачащия прозорец |
| `show_previous_button` | boolean | По избор | `true` или `false` (по подразбиране) | Показва бутон за връщане до бутона за затваряне и навигира обратно към предишния изскачащ прозорец, когато е наличен |
| `show_close_button` | boolean | По избор | `true` (по подразбиране) или `false` | Показване или скриване на бутона за затваряне, като останалата част от заглавната част остава видима |
| `buttons_position` | string | По избор | `right` (по подразбиране) или `left` | Позиция на бутоните за затваряне и връщане в заглавната част |
| `cards` | list | По избор | Всяка Bubble Card, карта на Home Assistant или персонализирана карта | Определя съдържанието на вашия изскачащ прозорец. Вижте примера за изскачащ прозорец по-долу. |
| Имате достъп и до [всички настройки на бутона](#бутон) за заглавната част на изскачащия прозорец. | | По избор | | Ако не е зададено, няма да се показва заглавна част |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Радиус на заобляне за изскачащия прозорец |
| `--bubble-pop-up-main-background-color` | `color` | Основен цвят на фона за поддържаните елементи на изскачащия прозорец |
| `--bubble-pop-up-background-color` | `color` | Цвят на фона на изскачащия прозорец |
| `--bubble-backdrop-background-color` | `color` | Цвят на фона за подложката |
| Имате достъп и до [всички CSS променливи на бутона](#опции-на-бутона) за заглавната част на изскачащия прозорец. | | |

</details>


### Самостоятелен формат на изскачащите прозорци (v3.2.0+)

От v3.2.0 изскачащите прозорци използват нов самостоятелен формат, при който картите със съдържание се дефинират директно вътре в изскачащия прозорец чрез опцията `cards`. Това осигурява по-добра производителност и ново, базирано на секции редактиране с плъзгане и пускане.


#### Примери

<details>

<summary>Изскачащ прозорец (самостоятелен формат)</summary>

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

<summary>Бутон за отваряне на изскачащия прозорец</summary>

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

## Хоризонтален стек от бутони

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Тази карта е добър спътник на картата с изскачащ прозорец, като ви позволява да отваряте съответните изскачащи прозорци. Освен това ви позволява да отваряте която и да е страница от вашето табло. В допълнение можете да добавите сензорите си за движение/заетост, така че редът на бутоните да се адаптира според стаята, в която току-що сте влезли. Тази карта се превърта, остава видима и действа като долен колонтитул.

> [!IMPORTANT]  
> Тази карта трябва да е последната във вашия изглед (след всички карти и изскачащи прозорци). Тя не може да бъде в никакъв стек.

### Опции на хоризонталния стек от бутони

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Задължително** | Хешът на изскачащия прозорец (напр. `'#kitchen'`) с ' ' или произволна връзка | Връзка за отваряне |
| `1_name` | string | Незадължително | Произволен текст | Име за вашия бутон |
| `1_icon` | string | Незадължително | Всяка икона `mdi:` | Икона за вашия бутон |
| `1_entity` | string | Незадължително | Всяко осветление или група осветление | Показва цвета на това осветление във фона |
| `1_pir_sensor` | string | Незадължително | Всеки бинарен сензор | Поне един или повече PIR сензора за `auto_order`, всъщност работи с всеки тип обект, например можете да добавите групи осветление и редът ще се променя според последно променените състояния. |
| `auto_order` | boolean | Незадължително | `true` или `false` (по подразбиране) | Променя реда на бутоните според времето на последна промяна на `_pir_sensor`, **трябва да е `false`, ако нямате нито един `_pir_sensor` в конфигурацията си** |
| `margin` | string | Незадължително | Всяка CSS стойност | Използвайте това **само** ако вашият `horizontal-buttons-stack` не е добре центриран на мобилни (напр. `13px`) |
| `width_desktop` | string | Незадължително | Всяка CSS стойност | Ширина на компютър (`100%` по подразбиране на мобилни) |
| `is_sidebar_hidden` | boolean | Незадължително | `true` или `false` (по подразбиране) | Поправя позицията на хоризонталния стек от бутони, ако страничната лента е скрита на компютър (само ако сами сте направили промяна, за да я скриете) |
| `rise_animation` | boolean | Незадължително | `true` (по подразбиране) или `false` | Задайте това на `false`, за да изключите анимацията, която се задейства след зареждане на страницата |
| `highlight_current_view` | boolean | Незадължително | `true` или `false` (по подразбиране) | Открояване на текущия хеш / изглед с плавна анимация |
| `hide_gradient` | boolean | Незадължително | `true` или `false` (по подразбиране) | Задайте това на `false`, за да скриете градиента |

> [!IMPORTANT]  
> Променливите, започващи с число, определят вашите бутони, просто променете това число, за да добавите още бутони (вижте примера по-долу).

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Радиус на ъглите за бутоните на хоризонталния стек от бутони |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Цвят на фона за бутоните на хоризонталния стек от бутони |

</details>


#### Пример

<details>

<summary>Хоризонтален стек от бутони, който се пренарежда според сензорите за заетост</summary>

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

## Бутон

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Тази карта е много гъвкава. Може да се използва като бутон **превключвател**, **плъзгач**, **състояние** или **име/текст**.

> [!TIP]
> ### Какви са разликите между всички типове бутони?
>
> - **Бутон превключвател:** Това е типът бутон по подразбиране. По подразбиране той превключва обект, а цветът на фона му се променя според състоянието на обекта или цвета на осветлението. Можете да промените действието му в раздела **Действие при докосване на картата**.
>
> - **Бутон плъзгач:** Този тип бутон ви позволява да управлявате обекти с регулируеми диапазони. Идеален е за регулиране на осветлението, а цветът на запълването се адаптира към цвета на осветлението. Може да се използва и за показване на стойности, като ниво на батерия.
>   Поддържани обекти за плъзгачи:
>   - Осветление (яркост)
>   - Медиен плейър (сила на звука)
>   - Щори (позиция)
>   - Вентилатор (процент)
>   - Климат (температура)
>   - Input number и number (стойност)
>   - Сензор за батерия (процент, само за четене)
>
>   Можете също да използвате всеки обект с числово състояние, като изключите филтъра за обекти в **Настройки на плъзгача**, след което задайте стойностите `min` и `max`. Тази опция е само за четене.
>
> - **Бутон състояние:** Идеален за показване на информация от сензор или всеки обект. При натискане ще покаже панела „Повече информация“ на обекта. Цветът на фона му не се променя.
>
> - **Бутон име/текст:** Единственият тип бутон, който не се нуждае от обект. Позволява ви да покажете кратък текст, име или заглавие. Можете да добавите и действия към него. Цветът на фона му не се променя.

### Опции на бутона

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задължително** | Всеки обект | Обект за управление |
| `button_type` | string | Незадължително | `switch` (по подразбиране), `slider`, `state` или `name` | Поведението на вашия бутон |
| `name` | string | Незадължително | Произволен текст | Име за вашия бутон, ако не е зададено, ще се покаже името на обекта |
| `icon` | string | Незадължително | Всяка икона `mdi:` | Икона за вашия бутон, ако не е зададена, ще се покаже иконата на обекта или `entity-picture` |
| `force_icon` | boolean | Незадължително | `true` или `false` (по подразбиране) | Дава приоритет на иконата вместо на `entity-picture` |
| `use_accent_color` | boolean | Незадължително (`false` по подразбиране) | **Само за осветление.** Използва акцентния цвят на темата вместо цвета на осветлението.                         |
| `show_state` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва или скрива състоянието на вашия `entity` |
| `show_name` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показва или скрива името |
| `show_icon` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показва или скрива иконата |
| `show_last_changed` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последна промяна на вашия `entity` |
| `show_last_updated` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последно обновяване на вашия `entity` |
| `show_attribute` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва атрибут на вашия `entity` под неговото `name` |
| `attribute` | string | Незадължително (задължително, ако `show_attribute` е зададено на `true`) | Атрибут от вашия `entity` | Атрибутът за показване (напр. `brightness`) |
| `scrolling_effect` | boolean | Незадължително | `true` (по подразбиране) или `false` | Позволява на текста да се превърта, когато съдържанието надхвърля размера на контейнера си |
| `button_action` | object | Незадължително | `tap_action`, `double_tap_action` или `hold_action`, вижте по-долу | Позволява промяна на действията по подразбиране при натискане на бутона. |
| `tap_action` | object | Незадължително | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при докосване на иконата, ако не е зададено, ще се използва `more-info` |
| `double_tap_action` | object | Незадължително | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при двойно докосване на иконата, ако не е зададено, ще се използва `none` |
| `hold_action` | object | Незадължително | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при задържане на иконата, ако не е зададено, ще се използва `more-info` |
| `card_layout` | string | Незадължително | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на оформлението на картата, вижте [подредби на картата](#подредби-на-картата) |
| `rows` | number | Незадължително | Произволно число | Брой редове (височина) (напр. `2`) |
| `sub_button` | object | Незадължително | Вижте [подбутони](#подбутони) | Добавя персонализирани бутони, фиксирани отдясно |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Основен цвят на фона за поддържаните елементи в бутона |
| `--bubble-button-border-radius` | `px` | Радиус на ъглите за бутона |
| `--bubble-button-icon-border-radius` | `px` | Радиус на ъглите за контейнера на иконата на бутона |
| `--bubble-button-icon-background-color` | `color` | Цвят на фона за контейнера на иконата на бутона |
| `--bubble-light-white-color` | `color` | Заменя белия цвят по подразбиране на бутоните/плъзгачите за осветление |
| `--bubble-light-color` | `color` | Заменя цвета на бутоните/плъзгачите за осветление (дори при RGB осветление) |
| `--bubble-button-box-shadow` | Вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка за бутона |

</details>

Тези опции са налични само когато `button_type` е зададено на `slider`.

<details>

<summary><b>Опции на плъзгача (YAML + описания)</b></summary>

| Име                  | Тип    | Изискване                     | Описание                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Незадължително                        | Минималната стойност на плъзгача. За персонализирани плъзгачи.                                                    |
| `max_value`             | number  | Незадължително                        | Максималната стойност на плъзгача. За персонализирани плъзгачи.                                                    |
| `step`                  | number  | Незадължително                        | Стъпката на плъзгача.                                                                           |
| `tap_to_slide`          | boolean | Незадължително (`false` по подразбиране)      | Включва предишното поведение на плъзгача, при което докосвате, за да го активирате, вместо да го задържате.        |
| `relative_slide`        | boolean | Незадължително (`false` по подразбиране)     | Обновява стойността спрямо началната стойност, а не спрямо началната точка на докосване.                      |
| `read_only_slider`      | boolean | Незадължително (`false` по подразбиране)      | Прави плъзгача само за четене. Включва се автоматично за някои обекти като сензори.                        |
| `slider_live_update`    | boolean | Незадължително (`false` по подразбиране)      | Състоянието на обекта се обновява по време на плъзгане. **Тази функция не се препоръчва за всички обекти.**        |
| `slider_fill_orientation` | string | Незадължително | `left` (по подразбиране), `right`, `top`, `bottom` | Променя посоката на запълване на плъзгача |
| `slider_value_position` | string | Незадължително | `right` (по подразбиране), `left`, `center`, `hidden` | Позиция на показваната стойност |
| `invert_slider_value` | boolean | Незадължително (`false` по подразбиране) | Обръща посоката на плъзгача (100% запълване съответства на минимума). Не е налично за цветни плъзгачи. |
| `light_slider_type` | string | Незадължително | `brightness` (по подразбиране), `hue`, `saturation`, `white_temp` | **Само за осветление.** Избор на режим на плъзгача |
| `cover_slider_type` | string | Незадължително | `position` (по подразбиране), `tilt_position` | **Само за щори.** Избор на режим на плъзгача (позиция или накланяне) |
| `hue_force_saturation` | boolean | Незадължително (`false` по подразбиране) | **Само за осветление (режим Hue).** Принудителна наситеност при регулиране на нюанса |
| `hue_force_saturation_value` | number | Незадължително (`100` по подразбиране) | **Само за осветление (режим Hue).** Принудителна стойност на наситеността (0-100) |
| `use_accent_color` | boolean | Незадължително (`false` по подразбиране) | **Само за осветление (режим яркост).** Използва акцентния цвят на темата вместо цвета на осветлението |
| `allow_light_slider_to_0` | boolean | Незадължително (`false` по подразбиране)    | **Само за осветление.** Позволява на плъзгача да достигне 0%, което изключва осветлението. Не е налично с `tap_to_slide`. |
| `light_transition`      | boolean | Незадължително (`false` по подразбиране)      | **Само за осветление.** Включва плавни преходи на яркостта за поддържаните осветителни тела.                           |
| `light_transition_time` | number  | Незадължително (`500` по подразбиране)        | **Само за осветление.** Времето на прехода в милисекунди. Изисква `light_transition: true`.            |

</details>

#### Примери

<details>

<summary>Бутон плъзгач, който може да управлява яркостта на осветление</summary>

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

<summary>Бутон с повече опции</summary>

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

## Медиен плейър

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Тази карта ви позволява да управлявате обект медиен плейър.

### Опции на медийния плейър

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задължително** | Всеки медиен плейър | Медийният плейър за управление |
| `name` | string | Незадължително | Произволен текст | Име за вашия медиен плейър, ако не е зададено, ще се покаже името на обекта |
| `icon` | string | Незадължително | Всяка икона `mdi:` | Икона за вашия медиен плейър, ако не е зададена, ще се покаже иконата на обекта или `entity-picture` |
| `force_icon` | boolean | Незадължително | `true` или `false` (по подразбиране) | Дава приоритет на иконата вместо на `entity-picture` |
| `show_state` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва или скрива състоянието на вашия `entity` |
| `show_name` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показва или скрива името |
| `show_icon` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показва или скрива иконата |
| `show_last_changed` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последна промяна на вашия `entity` |
| `show_last_updated` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последно обновяване на вашия `entity` |
| `show_attribute` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва атрибут на вашия `entity` под неговото `name` |
| `attribute` | string | Незадължително (задължително, ако `show_attribute` е зададено на `true`) | Атрибут от вашия `entity` | Атрибутът за показване (напр. `brightness`) |
| `scrolling_effect` | boolean | Незадължително | `true` (по подразбиране) или `false` | Позволява на текста да се превърта, когато съдържанието надхвърля размера на контейнера си |
| `min_volume` | number | Незадължително | Произволно число | Минималната стойност на плъзгача за сила на звука. |
| `max_volume` | number | Незадължително | Произволно число | Максималната стойност на плъзгача за сила на звука. |
| `cover_background` | boolean | Незадължително | `true` или `false` (по подразбиране) | Използва размита медийна обложка като фон на картата. |
| `button_action` | object | Незадължително | `tap_action`, `double_tap_action` или `hold_action`, вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Позволява промяна на действията по подразбиране при натискане на бутона. |
| `tap_action` | object | Незадължително | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при докосване на иконата, ако не е зададено, ще се използва `more-info`. |
| `double_tap_action` | object | Незадължително | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при двойно докосване на иконата, ако не е зададено, ще се използва `none`. |
| `hold_action` | object | Незадължително | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при задържане на иконата, ако не е зададено, ще се използва `more-info`. |
| `main_buttons_position` | string | Незадължително | `default` или `bottom` | Премества бутоните за действия върху обложката в долната част (фиксирано) |
| `main_buttons_full_width` | boolean | Незадължително | `true` или `false` | Прави долните бутони за действия на цялата ширина (по подразбиране: `true`, когато позицията е `bottom`) |
| `main_buttons_alignment` | string | Незадължително | `end` (по подразбиране), `center`, `start`, `space-between` | Подравняване на долните бутони за действия, когато не са на цялата ширина |
| `card_layout` | string | Незадължително | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на оформлението на картата, вижте [подредби на картата](#подредби-на-картата) |
| `rows` | number | Незадължително | Произволно число | Брой редове (височина) (напр. `2`) |
| `sub_button` | object | Незадължително | Вижте [подбутони](#подбутони) | Добавя персонализирани бутони, фиксирани отдясно |
| `hide` | object | Незадължително | Вижте по-долу | Скрива бутони от картата |

#### Опции за скриване

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Незадължително | `true` или `false` (по подразбиране) | Скрива бутона за възпроизвеждане/пауза |
| `volume_button` | boolean | Незадължително | `true` или `false` (по подразбиране) | Скрива бутона за сила на звука |
| `previous_button` | boolean | Незадължително | `true` или `false` (по подразбиране) | Скрива бутона за предишен |
| `next_button` | boolean | Незадължително | `true` или `false` (по подразбиране) | Скрива бутона за следващ |
| `power_button` | boolean | Незадължително | `true` или `false` (по подразбиране) | Скрива бутона за захранване |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Основен цвят на фона за медийния плейър |
| `--bubble-media-player-border-radius` | `px` | Радиус на ъглите за медийния плейър |
| `--bubble-media-player-buttons-border-radius` | `px` | Радиус на ъглите за бутоните на медийния плейър |
| `--bubble-media-player-slider-background-color` | `color` | Цвят на фона за плъзгача за сила на звука |
| `--bubble-media-player-icon-border-radius` | `px` | Радиус на ъглите за контейнера на иконата на медийния плейър |
| `--bubble-media-player-icon-background-color` | `color` | Цвят на фона за контейнера на иконата на медийния плейър |
| `--bubble-media-player-box-shadow` | Вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка за медийния плейър |

</details>


#### Примери

<details>

<summary>Медиен плейър с всички опции</summary>

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

## Щори

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Тази карта ви позволява да управлявате вашите `cover` обекти.

### Опции на щорите

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задължително** | Всеки обект за щори | Щорите, които да управлявате |
| `name` | string | Незадължително | Всеки текст | Име за вашите щори, ако не е зададено, ще се показва името на обекта |
| `force_icon` | boolean | Незадължително | `true` или `false` (по подразбиране) | Дава приоритет на иконата пред `entity-picture` |
| `show_state` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показване или скриване на състоянието на вашия `entity` |
| `show_name` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показване или скриване на името |
| `show_icon` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показване или скриване на иконата |
| `show_last_changed` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последната промяна на вашия `entity` |
| `show_last_updated` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последното обновяване на вашия `entity` |
| `show_attribute` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва атрибут на вашия `entity` под неговото `name` |
| `attribute` | string | Незадължително (задължително, ако `show_attribute` е зададено на `true`) | Атрибут на вашия `entity` | Атрибутът за показване (напр. `brightness`) |
| `scrolling_effect` | boolean | Незадължително | `true` (по подразбиране) или `false` | Позволява на текста да се превърта, когато съдържанието надхвърля размера на контейнера си |
| `icon_open` | string | Незадължително | Всяка `mdi:` икона | Икона за отворените щори, ако не е зададена, ще се показва иконата за отворени щори по подразбиране |
| `icon_close` | string | Незадължително | Всяка `mdi:` икона | Икона за затворените щори, ако не е зададена, ще се показва иконата за затворени щори по подразбиране |
| `icon_up` | string | Незадължително | Всяка `mdi:` икона | Икона за бутона за отваряне на щорите, ако не е зададена, ще се показва иконата за отворени щори по подразбиране |
| `icon_down` | string | Незадължително | Всяка `mdi:` икона | Икона за бутона за затваряне на щорите, ако не е зададена, ще се показва иконата за затворени щори по подразбиране |
| `open_service` | string | Незадължително | Всяка услуга или скрипт | Услуга за отваряне на щорите, по подразбиране `cover.open_cover` |
| `stop_service` | string | Незадължително | Всяка услуга или скрипт | Услуга за спиране на щорите, по подразбиране `cover.stop_cover` |
| `close_service` | string | Незадължително | Всяка услуга или скрипт | Услуга за затваряне на щорите, по подразбиране `cover.close_cover` |
| `tilt_buttons` | string | Незадължително | `top` (по подразбиране), `bottom`, `left`, `right`, `hidden` | Позиция на бутоните за накланяне (показват се само ако щорите поддържат накланяне) |
| `open_tilt_service` | string | Незадължително | Всяка услуга или скрипт | Услуга за отваряне на наклона, по подразбиране `cover.open_cover_tilt` |

| `close_tilt_service` | string | Незадължително | Всяка услуга или скрипт | Услуга за затваряне на наклона, по подразбиране `cover.close_cover_tilt` |
| `button_action` | object | Незадължително | `tap_action`, `double_tap_action` или `hold_action`, вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Позволява да промените действията по подразбиране при докосване на бутона. |
| `tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при докосване на иконата, ако не е зададено, ще се използва `more-info`. |
| `double_tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при двойно докосване на иконата, ако не е зададено, ще се използва `none`. |
| `hold_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при задържане на иконата, ако не е зададено, ще се използва `more-info`. |
| `main_buttons_position` | string | Незадължително | `default` или `bottom` | Премества основните бутони в долната част (фиксирано) |
| `main_buttons_full_width` | boolean | Незадължително | `true` или `false` | Прави долните бутони на цялата ширина (по подразбиране: `true`, когато позицията е `bottom`) |
| `main_buttons_alignment` | string | Незадължително | `end` (по подразбиране), `center`, `start`, `space-between` | Подравняване на долните бутони, когато не са на цялата ширина |
| `card_layout` | string | Незадължително | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на картата, вижте [подредбите на картата](#подредби-на-картата) |
| `rows` | number | Незадължително | Всяко число | Брой редове (височина) (напр. `2`) |
| `sub_button` | object | Незадължително | Вижте [подбутоните](#подбутони) | Добавя персонализирани бутони, фиксирани вдясно |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Основен цвят на фона за поддържаните елементи в картата за щори |
| `--bubble-cover-border-radius` | `px` | Радиус на заобляне за картата за щори |
| `--bubble-cover-icon-border-radius` | `px` | Радиус на заобляне за контейнера на иконата в картата за щори |
| `--bubble-cover-icon-background-color` | `color` | Цвят на фона за контейнера на иконата в картата за щори |
| `--bubble-cover-box-shadow` | Вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка за картата за щори |
| `--bubble-button-box-shadow` | Вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка за бутоните в картата за щори |

</details>


#### Пример

<details>

<summary>Карта, която може да управлява ролетна щора</summary>

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

Тази карта ви позволява да добавите падащо меню за вашите `input_select` / `select` обекти. Тази карта също поддържа подбутоните и всички общи функции на Bubble Card.

> [!TIP]
> Ако желаете, можете да имате и подбутони за избор, тази функция е налична във всички карти, които поддържат подбутоните.

### Опции на избора

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `entity` | string | **Задължително** | Всеки обект | Обект за управление |
| `name` | string | Незадължително | Всеки текст | Име за вашия избор, ако не е зададено, ще се показва името на обекта |
| `icon` | string | Незадължително | Всяка `mdi:` икона | Икона за вашия избор, ако не е зададена, ще се показва иконата на обекта или `entity-picture` |
| `force_icon` | boolean | Незадължително | `true` или `false` (по подразбиране) | Дава приоритет на иконата пред `entity-picture` |
| `show_state` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показване или скриване на състоянието на вашия `entity` |
| `show_name` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показване или скриване на името |
| `show_icon` | boolean | Незадължително | `true` (по подразбиране) или `false` | Показване или скриване на иконата |
| `show_last_changed` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последната промяна на вашия `entity` |
| `show_last_updated` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва времето на последното обновяване на вашия `entity` |
| `show_attribute` | boolean | Незадължително | `true` или `false` (по подразбиране) | Показва атрибут на вашия `entity` под неговото `name` |
| `attribute` | string | Незадължително (задължително, ако `show_attribute` е зададено на `true`) | Атрибут на вашия `entity` | Атрибутът за показване (напр. `brightness`) |
| `scrolling_effect` | boolean | Незадължително | `true` (по подразбиране) или `false` | Позволява на текста да се превърта, когато съдържанието надхвърля размера на контейнера си |
| `tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при докосване на иконата, ако не е зададено, ще се използва `more-info`. |
| `double_tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при двойно докосване на иконата, ако не е зададено, ще се използва `none`. |
| `hold_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при задържане на иконата, ако не е зададено, ще се използва `more-info`. |
| `card_layout` | string | Незадължително | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на картата, вижте [подредбите на картата](#подредби-на-картата) |
| `rows` | number | Незадължително | Всяко число | Брой редове (височина) (напр. `2`) |
| `sub_button` | object | Незадължително | Вижте [подбутоните](#подбутони) | Добавя персонализирани бутони, фиксирани вдясно |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Основен цвят на фона за поддържаните елементи в картата за избор |
| `--bubble-select-background-color` | `color` | Цвят на фона за картата за избор |
| `--bubble-select-list-border-radius` | `px` | Радиус на заобляне за падащото меню в картата |
| `--bubble-select-list-item-accent-color` | `color` | Акцентен цвят за избрания елемент |
| `--bubble-select-list-background-color` | `color` | Цвят на фона за падащото меню в картата |
| `--bubble-select-list-width` | `px` | Ширина на падащото меню в картата |
| `--bubble-select-arrow-background-color` | `color` | Цвят на фона за стрелката на падащото меню |
| `--bubble-select-button-border-radius` | `px` | Радиус на заобляне за бутона за избор |
| `--bubble-select-border-radius` | `px` | Радиус на заобляне за картата за избор |
| `--bubble-select-icon-border-radius` | `px` | Радиус на заобляне за контейнера на иконата в картата за избор |
| `--bubble-select-icon-background-color` | `color` | Цвят на фона за контейнера на иконата в картата за избор |
| `--bubble-select-box-shadow` | Вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка за картата за избор |

</details>


#### Примери

<details>

<summary>Карта за избор със списък от сцени</summary>

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

## Климат

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Тази карта ви позволява да управлявате вашите `climate` обекти.

> [!TIP]
> Менюто за избор на режим е [подбутон](#подбутони), който се добавя автоматично при създаването на картата. След това можете да го променяте или премахвате, както желаете.

### Опции на климата

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име                     | Тип    | Изискване                         | Поддържани опции                                  | Описание                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Задължително**                        | Климатичен обект                                   | Обектът за управление (напр. `climate.living_room`).                                                            |
| `name`                  | string  | Незадължително                            | Всеки текст                                       | Персонализирано име за картата. Ако не е зададено, ще се показва името на обекта.                                    |
| `icon`                  | string  | Незадължително                            | Всяка `mdi:` икона                                  | Персонализирана икона за картата. Ако не е зададена, ще се използва иконата на обекта или `entity-picture`.                   |
| `force_icon`            | boolean | Незадължително                            | `true` или `false` (по подразбиране)                     | Дава приоритет на иконата пред `entity-picture`.                                                           |
| `show_state`            | boolean | Незадължително                            | `true` или `false` (по подразбиране)                     | Показване или скриване на текущото състояние на `entity`.                                                                 |
| `show_name`             | boolean | Незадължително                            | `true` (по подразбиране) или `false`                     | Показване или скриване на името на обекта.                                                                            |
| `show_icon`             | boolean | Незадължително                            | `true` (по подразбиране) или `false`                     | Показване или скриване на иконата.                                                                                          |
| `hide_target_temp_low`  | boolean | Незадължително (само за обекти, поддържащи `target_temp_low`) | `true` или `false` (по подразбиране) | Скрива управлението на долната целева температура, ако се поддържа от `entity`.                                          |
| `hide_target_temp_high` | boolean | Незадължително (само за обекти, поддържащи `target_temp_high`)| `true` или `false` (по подразбиране) | Скрива управлението на горната целева температура, ако се поддържа от `entity`.                                         |
| `state_color`           | boolean | Незадължително                            | `true` или `false` (по подразбиране)                     | Прилага постоянен цвят на фона, когато климатичният обект е включен.                                              |
| `step` | number | Незадължително | Всяко число | Стъпката на температурата. |
| `min_temp` | number | Незадължително | Всяко число | Минималната температура. |
| `max_temp` | number | Незадължително | Всяко число | Максималната температура. |
| `button_action` | object | Незадължително | `tap_action`, `double_tap_action` или `hold_action`, вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Позволява да промените действията по подразбиране при докосване на бутона. |
| `tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при докосване на иконата, ако не е зададено, ще се използва `more-info`. |
| `double_tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при двойно докосване на иконата, ако не е зададено, ще се използва `none`. |
| `hold_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при задържане на иконата, ако не е зададено, ще се използва `more-info`. |                              |
| `main_buttons_position` | string | Незадължително | `default` или `bottom` | Премества бутоните за действия на климата в долната част (фиксирано) |
| `main_buttons_full_width` | boolean | Незадължително | `true` или `false` | Прави долните бутони за действия на цялата ширина (по подразбиране: `true`, когато позицията е `bottom`) |
| `main_buttons_alignment` | string | Незадължително | `end` (по подразбиране), `center`, `start`, `space-between` | Подравняване на долните бутони за действия, когато не са на цялата ширина |
| `card_layout` | string | Незадължително | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на картата, вижте [подредбите на картата](#подредби-на-картата) |
| `rows` | number | Незадължително | Всяко число | Брой редове (височина) (напр. `2`) |
| `sub_button`            | object  | Незадължително                            | Вижте [подбутоните](#подбутони)                | Добавя персонализирани бутони, фиксирани вдясно. Полезно за меню за избор на климатичен режим.                                  |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Основен цвят на фона за поддържаните елементи в картата за климат |
| `--bubble-climate-border-radius` | `px` | Радиус на заобляне за поддържаните елементи в картата за климат |
| `--bubble-climate-button-background-color` | `color` | Цвят на фона за бутоните в картата за климат |
| `--bubble-climate-icon-border-radius` | `px` | Радиус на заобляне за контейнера на иконата в картата за климат |
| `--bubble-state-climate-fan-only-color` | `color` | Цвят на наслагването за състоянието fan-only |
| `--bubble-state-climate-dry-color` | `color` | Цвят на наслагването за състоянието dry |
| `--bubble-state-climate-cool-color` | `color` | Цвят на наслагването за състоянието cool |
| `--bubble-state-climate-heat-color` | `color` | Цвят на наслагването за състоянието heat |
| `--bubble-state-climate-auto-color` | `color` | Цвят на наслагването за състоянието auto |
| `--bubble-state-climate-heat-cool-color` | `color` | Цвят на наслагването за състоянието heat-cool |
| `--bubble-climate-accent-color` | `color` | Акцентен цвят за картата за климат |
| `--bubble-climate-box-shadow` | Вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка за контейнера на климата. |

</details>


#### Примери

<details>

<summary>Карта за климат с падащо меню за HVAC режими</summary>

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

Тази карта ви позволява да показвате вашите календарни обекти. Съдържанието ѝ може да се превърта, така че лесно можете да разглеждате предстоящите събития.

### Опции на календара

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име                | Тип    | Изискване  | Поддържани опции                               | Описание                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Незадължително     | Всяко число (минимум: 1)                        | Брой календарни дни, за които да се извличат събития, от сега до края на N-тия ден (по подразбиране: 7) |
| `entities`          | object  | **Задължително** | Обект от тип календар (вижте по-долу)            | Обектът за управление (напр. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Задължително** | Календарен обект                               | Календарният обект за показване                                                          |
| `entities.color`    | string  | Незадължително     | Цвят                                         | Персонализиран цвят за етикета на календара. Ако не е зададен, ще бъде избран автоматичен цвят |
| `days`              | number  | Незадължително     | Всяко число (минимум: 1)                         | Брой календарни дни, за които да се извличат събития, от сега до края на N-тия ден (по подразбиране: 7) |
| `limit`             | number  | Незадължително     | Число                                        | Броят събития, които ще се показват на картата                                  |
| `show_end`          | boolean | Незадължително     | `true` или `false` (по подразбиране)                     | Показване или скриване на крайния час на събитията                                                    |
| `show_progress`     | boolean | Незадължително     | `true` (по подразбиране) или `false`                     | Показване или скриване на лентата за напредъка на събитието                                                     |
| `show_started_events`| boolean | Незадължително     | `true` (по подразбиране) или `false`                     | Показване или скриване на събитията, които са в момента в ход                                                 |
| `scrolling_effect`  | boolean | Незадължително | `true` (по подразбиране) или `false` | Позволява на текста да се превърта, когато съдържанието надхвърля размера на контейнера си |
| `event_action` | object | Незадължително | `tap_action`, `double_tap_action` или `hold_action`, вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Позволява да добавите действия при докосване на събитие. |
| `tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при докосване на ден, ако не е зададено, ще се използва `none`. |
| `double_tap_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при двойно докосване на ден, ако не е зададено, ще се използва `none`. |
| `hold_action` | object | Незадължително | Вижте [действията](#действия-при-докосване-двойно-докосване-и-задържане) | Определя типа действие при задържане на ден, ако не е зададено, ще се използва `none`. |
| `card_layout` | string | Незадължително | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на картата, вижте [подредбите на картата](#подредби-на-картата) |
| `rows` | number | Незадължително | Всяко число | Брой редове (височина) (напр. `2`) |
| `sub_button` | object | Незадължително | Вижте [подбутоните](#подбутони) | Добавя персонализирани бутони, фиксирани вдясно |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива                                  | Очаквана стойност | Описание                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Основен цвят на фона за поддържаните елементи в картата за календар  |
| `--bubble-calendar-border-radius`         | `px`           | Радиус на заобляне за поддържаните елементи в картата за календар |
| `--bubble-calendar-height`                | `px`           | Височина на картата за календар                                        |

</details>

#### Примери

<details>

<summary>Календарна карта с ограничен брой събития</summary>

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

<summary>Календарна карта с краен час и лента за напредъка</summary>

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


## Разделител

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Тази карта е обикновен разделител, с който да разделите изскачащия прозорец на категории / секции, например Осветление, Устройства, Щори, Настройки, Автоматизации...

### Опции на разделителя

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `name` | string | Незадължителна, но препоръчителна | Произволен текст | Име за вашия разделител |
| `icon` | string | Незадължителна, но препоръчителна | Всяка икона `mdi:` | Икона за вашия разделител |
| `card_layout` | string | Незадължителна | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на картата, вижте [подредби на картата](#подредби-на-картата) |
| `rows` | number | Незадължителна | Произволно число | Брой редове (височина) (например `2`) |
| `sub_button` | object | Незадължителна | Вижте [подбутони](#подбутони) | Добавете персонализирани бутони, фиксирани вдясно |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Цвят на фона на линията в разделителя |

</details>

#### Пример

<details>

<summary>Разделител за секция "Щори"</summary>

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

Тази карта служи за запълване на празна колона. Това е полезно, ако имате `horizontal-stack` в изскачащия прозорец само с една карта. Погледнете долния десен ъгъл на тази екранна снимка, за да (не) я видите.

### Опции на празната колона

Тази карта няма опции и не поддържа [оформление](#оформление), но поддържа опциите за подредба на секциите в HA.

#### Пример

<details>

<summary>Празна колона в хоризонтален стек</summary>

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

## Само подбутони

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Тази карта е предназначена само за подбутони. Тя е идеална за менюта, бързи действия, информационни чипове или фиксиран долен колонтитул в долната част на страницата.

> [!IMPORTANT]  
> Тази карта използва новата схема на подбутоните. Използвайте `sub_button.bottom`, за да дефинирате бутоните си. Секцията `sub_button.main` се игнорира.

### Опции на картата само с подбутони

<details>

<summary><b>Опции (YAML + описания)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Задължителна** | Вижте [подбутони](#подбутони) | Дефинирайте подбутоните си чрез секцията `bottom` |
| `hide_main_background` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Премахва фона на картата |
| `footer_mode` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Фиксира картата в долната част на страницата |
| `footer_full_width` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Прави долния колонтитул на цялата ширина (100%) |
| `footer_width` | number | Незадължителна | Произволно число | Ширина на долния колонтитул в пиксели, когато `footer_full_width` е `false` |
| `footer_bottom_offset` | number | Незадължителна | Произволно число | Разстояние от долния край на страницата в пиксели (по подразбиране: `16`) |
| `card_layout` | string | Незадължителна | `normal` (по подразбиране извън изглед със секции), `large` (по подразбиране в изглед със секции), `large-2-rows`, `large-sub-buttons-grid` | Подредба на картата, вижте [подредби на картата](#подредби-на-картата) |
| `rows` | number | Незадължителна | Произволно число | Брой редове (височина) (например `2`) |

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Ширина на долния колонтитул, когато `footer_full_width` е `false` |
| `--bubble-footer-bottom` | `px` | Долно отместване на долния колонтитул |
| `--bubble-footer-box-shadow` | вижте [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Сянка (box shadow) за контейнера на долния колонтитул |

</details>

#### Примери

<details>

<summary>Като чипове (както на екранната снимка)</summary>

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

<summary>Фиксирано меню в долен колонтитул</summary>

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

## Подбутони

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Във всяка карта, която поддържа тази опция, можете да добавяте подбутони, за да персонализирате картите си още повече. Можете например да създадете бутон, който управлява прахосмукачка, карта за времето или почти всичко, което ви хрумне. Тези подбутони поддържат действията при докосване и повечето от опциите на бутона.

Подбутоните вече поддържат три типа: **Стандартен (бутон)**, **Плъзгач** и **Падащо меню / Избор**. Можете да смесвате типове в една и съща карта, да поставяте подбутони отгоре или отдолу и да ги организирате в групи за по-сложни подредби.

#### Разположение и групи на подбутоните

<details>

<summary><b>Структура на подбутоните (main / bottom + групи)</b></summary>

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

**Бележки:**
- `main` и `bottom` са две независими секции. Долните подбутони са фиксирани в долната част на картата.
- `main_layout` и `bottom_layout` приемат `inline` (по подразбиране) или `rows` за вертикално подреждане на групите.
- Групите са обекти с масив `group` и незадължителна опция `buttons_layout` (`inline` или `column`).
- `justify_content` е налична **само за долните групи** (`start`, `center`, `end`, `fill`).
- Когато има долни подбутони, подредбата на картата автоматично превключва към `large`, освен ако изрично не зададете друга подредба.
- Старите масиви `sub_button` все още се поддържат и се третират като секцията `main`.

</details>

### Опции на подбутоните

<details>

<summary><b>Опции (YAML + описание)</b></summary>

| Име | Тип | Изискване | Поддържани опции | Описание |
| --- | --- | --- | --- | --- |
| `entity` | string | Незадължителна | Всеки обект | Обект за управление |
| `name` | string | Незадължителна | Произволен текст | Име за вашия подбутон, ако не е зададено, ще се показва името на обекта |
| `icon` | string | Незадължителна | Всяка икона `mdi:` | Икона за вашия подбутон, ако не е зададена, ще се показва иконата или снимката на обекта |
| `force_icon` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Показва иконата дори когато има налична снимка на обекта |
| `sub_button_type` | string | Незадължителна | `default`, `slider` или `select` | Избор на типа на подбутона |
| `show_background` | boolean | Незадължителна | `true` (по подразбиране) или `false` | Показва фон за вашия подбутон, той ще променя цвета си според състоянието на обекта |
| `state_background` | boolean | Незадължителна | `true` (по подразбиране) или `false` | Използва цвета на състоянието, когато обектът е `on` |
| `light_background` | boolean | Незадължителна | `true` (по подразбиране) или `false` | Използва цвета на осветлението за фона, когато е наличен |
| `show_state` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Показва или скрива състоянието на вашия `entity` |
| `show_name` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Показва или скрива името |
| `show_icon` | boolean | Незадължителна | `true` (по подразбиране) или `false` | Показва или скрива иконата |
| `show_last_changed` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Показва времето на последната промяна на вашия `entity` |
| `show_last_updated` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Показва времето на последното обновяване на вашия `entity` |
| `show_attribute` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Показва атрибут на вашия `entity` под неговото `name` |
| `attribute` | string | Незадължителна (задължителна, ако `show_attribute` е `true`) | Атрибут на вашия `entity` | Атрибутът, който да се показва (например `brightness`) |
| `select_attribute` | string | Незадължителна | Атрибут списък на вашия `entity` (вижте поддържаните опции по-горе) | Този атрибут списък ще отвори падащо меню при натискане (например `effect_list`) |
| `show_arrow` | boolean | Незадължителна | `true` (по подразбиране) или `false` | Показва или скрива стрелката на падащото меню при подбутоните за избор |
| `scrolling_effect` | boolean | Незадължителна | `true` (по подразбиране) или `false` | Позволява на текста да се превърта, когато съдържанието надхвърля размера на контейнера |
| `tap_action` | object | Незадължителна | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя действието при докосване на подбутона, ако не е зададено, ще се използва `more-info`. |
| `double_tap_action` | object | Незадължителна | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя действието при двойно докосване на подбутона, ако не е зададено, ще се използва `none`. |
| `hold_action` | object | Незадължителна | Вижте [действия](#действия-при-докосване-двойно-докосване-и-задържане) | Определя действието при задържане на подбутона, ако не е зададено, ще се използва `more-info`. |
| `fill_width` | boolean | Незадължителна | `true` или `false` | Запълва наличната ширина (по подразбиране: `false` за main, `true` за bottom) |
| `width` | number или string | Незадължителна | Произволно число или CSS дължина | Персонализирана ширина (`px` за секцията main, `%` за секцията bottom по подразбиране) |
| `custom_height` | number | Незадължителна | Произволно число | Персонализирана височина в пиксели |
| `content_layout` | string | Незадължителна | `icon-left` (по подразбиране), `icon-top`, `icon-bottom`, `icon-right` | Разположение на иконата вътре в подбутона |
| `always_visible` | boolean | Незадължителна | `true` или `false` (по подразбиране) | **Само за плъзгачи.** Плъзгачът се показва винаги, вместо да се отваря при докосване |
| `show_button_info` | boolean | Незадължителна | `true` или `false` (по подразбиране) | **Само за плъзгачи.** Показва икона/име/състояние, когато `always_visible` е включена |
| `visibility` | object или list | Незадължителна | Вижте [условия](https://www.home-assistant.io/docs/scripts/conditions/) | Показва или скрива подбутона според условия |
| `hide_when_parent_unavailable` | boolean | Незадължителна | `true` или `false` (по подразбиране) | Скрива подбутона, ако обектът на родителската карта е недостъпен |

</details>

<details>

<summary><b>Опции на подбутоните плъзгачи (същите като при бутоните плъзгачи)</b></summary>

<br>

Подбутоните плъзгачи поддържат същите опции за плъзгач като бутоните плъзгачи, включително:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS променливи (вижте <a href="#оформление">Оформление</a>)</b></summary>

| Променлива | Очаквана стойност | Описание |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Радиус на ъглите на подбутоните |
| `--bubble-sub-button-background-color` | `color` | Цвят на фона на подбутоните |
| `--bubble-sub-slider-border-radius` | `px` | Радиус на ъглите на подбутоните плъзгачи |
| `--bubble-sub-slider-background-color` | `color` | Цвят на фона на подбутоните плъзгачи |
| `--bubble-sub-slider-height` | `px` | Височина на винаги видимите подбутони плъзгачи |
| `--bubble-sub-button-dark-text-color` | `color` | Цвят на текста върху светли фонове на подбутоните |

</details>

#### Примери

<details>

<summary>Бутон с няколко подбутона за карта за прахосмукачка (както на екранната снимка)</summary>

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

<summary>Бутон плъзгач с един подбутон, който показва яркостта, и друг, който превключва осветлението (както на екранната снимка)</summary>

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

<summary>Бутон, който показва вътрешната и външната температура с времето за днес и утре (с екранна снимка)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Нямам късмет, при мен е облачно през цялото време, но всички икони се променят според времето.

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

## Подредби на картата

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card напълно поддържа изгледа със секции на Home Assistant, можете да промените подредбата на картата, за да я направите по-голяма, както и да промените броя колони или редове, които картата да заема във вашия изглед със секции (само при картите, които поддържат тази опция). Тези подредби се поддържат и във всички останали типове изгледи.

<details>

<summary><b>Налични подредби на картата</b></summary>

| Подредба | Описание |
| --- | --- |
| `normal` | Обичайната подредба (не е оптимизирана за изгледа със секции) |
| `large` | По-голяма подредба, която се преоразмерява според избраните редове в изгледа със секции (оптимизирана за изгледа със секции) |
| `large-2-rows` | По-голяма подредба с 2 реда подбутони, която се преоразмерява според избраните редове в изгледа със секции (оптимизирана за изгледа със секции) |
| `large-sub-buttons-grid` | Тази подредба показва подбутоните в мрежа, `rows` трябва да е зададено на поне `2`.

</details>

#### Примери

<details>

<summary>Голям бутон, показващ статистика за енергията, с 2 реда подбутони (включена снимка на екрана)</summary>

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

<summary>Голям бутон с няколко реда с 12 подбутона</summary>

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

## Действия при докосване, двойно докосване и задържане

Можете също да използвате стандартните действия на Home Assistant при докосване, двойно докосване и задържане на картите, които поддържат тази опция. Например това ви позволява да покажете прозореца „Повече информация“, като задържите иконата на бутон, или да изпълните услуга при натискане на подбутон.

**Забележка: Когато е конфигурирано `double_tap_action`, обичайното `tap_action` ще има забавяне от 200 ms, за да позволи разпознаването
на двойно докосване. Ако това забавяне е нежелано, задайте `double_tap_action` на `none`, за да изключите обработката на двойното докосване.**

### Опции за действията

<details>

<summary><b>Опции (YAML + описание)</b></summary>

| Име | Тип | Поддържани опции | Описание |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Действие за изпълнение |
| `target` | object |  | Работи само с `call-service`. Следва [синтаксиса на home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Всеки път от вашето табло | Път за навигация (например `'#kitchen'` за отваряне на изскачащ прозорец), когато действието е зададено като navigate |
| `url_path` | string | Всяка връзка | URL, който да се отвори при натискане (например `https://www.google.com`), когато действието е `url` |
| `service` | string | Всяка услуга | Услуга за извикване (например `media_player.media_play_pause`), когато `action` е зададено като `call-service` |
| `data` или `service_data` | object | Всякакви данни за услугата | Данни за услугата, които да се включат (например `entity_id: media_player.kitchen`), когато `action` е зададено като `call-service` |
| `confirmation` | object | Вижте [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Показва изскачащ прозорец за потвърждение (не е такъв на Bubble Card), заменя стандартния обект `confirmation` |

</details>

#### Пример

<details>

<summary>Бутон за отваряне на изскачащ прозорец</summary>

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

## Оформление

Можете да добавяте персонализирани стилове, за да променяте CSS на всички карти **без да използвате card-mod**, по четири начина:

- В редактора отидете на картата, която искате да промените, след това навигирайте до _Настройки на оформлението > Персонализирани стилове и JS шаблони_ и добавете вашите персонализирани стилове (вижте съветите и примерите по-долу).
- В редактора (или в [YAML](#модули-modules)) отидете на картата, която искате да промените, след това навигирайте до _Модули_, после създайте нов модул (той ще бъде достъпен за всички карти) или отидете в **Module Store**, за да инсталирате някой от наличните модули (повече подробности за модулите можете да намерите [по-долу](#модули-modules)).
- Във файл на [тема](https://www.home-assistant.io/integrations/frontend/#defining-themes), като добавите CSS променливи в YAML (те са налични в документацията на всяка карта по-горе). Това позволява глобални промени.

  <details>
  
  <summary>Пример</a></summary>
  
  <br>

  Не копирайте реда `Bubble:`, това е името на темата, която използвате. Трябва също да премахнете `--` от променливите.

  Трябва да изпълните действието [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes), за да опресните темата след всяка промяна.

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
  
- В YAML, като добавите `styles: |`, последвано от вашите персонализирани стилове (вижте съветите и примерите по-долу).

> [!TIP]  
> **За да разберете кои класове за стил могат да бъдат променяни**, можете да разгледате папката [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) в това хранилище. Във всяка папка на карта ще намерите файл с име `styles.css`. Тези файлове съдържат всички приложени стилове. Това дава много повече възможности от CSS променливите, но трябва да се добавя поотделно към всяка карта.
> 
> Можете също да намерите много [примери от общността](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) или някои във [форума на Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) с малко търсене.
>
> Темата Bubble за Home Assistant (като на снимките на екрана) можете да намерите [тук](https://github.com/Clooos/Bubble).
>
> Скоро идва видео с урок в моя [YouTube канал](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Имайте предвид, че може да се наложи да добавите `!important;` към някои CSS стилове, които вече са зададени (вижте примерите по-долу).

> [!TIP]  
> Подбутоните могат да бъдат избирани чрез класове, базирани на името им. Например подбутон с име „My sub-button“ може да бъде стилизиран с `.my-sub-button`. Подбутоните с плъзгач излагат и `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` и т.н.

#### Примери

<details>

<summary>Промяна на размера на шрифта на всяка Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Промяна на цвета на фона на единичен бутон в хоризонтален стек от бутони</summary>

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

<summary>Промяна на цвета на фона на карта</summary>

<br>

Този вариант работи при всички типове Bubble Card (освен при изскачащите прозорци):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Този прави същото само при карта от тип бутон (работи за заглавната част на изскачащия прозорец): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

За да промените цвета, когато състоянието е `on`, вижте шаблоните за стилове по-долу.

</details>

<details>

<summary>Промяна на цвета на плъзгача на бутон</summary>

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

<summary>Промяна на цвета на линията на разделител</summary>

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

<summary>Промяна на цвета на икона</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

За икона в хоризонтален стек от бутони.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Промяна на цвета на фона на контейнера на икона</summary>

<br>

Този вариант работи при всички типове Bubble Card (освен при изскачащите прозорци):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Този прави същото за заглавната част на изскачащия прозорец: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Промяна на размера на подбутоните (идеално за голямата подредба)</summary>

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

<summary>Промяна на цвета на фона на втория подбутон</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Промяна на размера на икона</summary>

<br>

За основната икона.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

За иконите на подбутоните.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Използване на картинка вместо икона в подбутон</summary>

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

Просто качете тази картинка в папка „pictures“ (или с името, което искате) в папката „www“ на Home Assistant.

</details>

<details>

<summary>Разширен пример: Създаване на хоризонтален ред от подбутони (включена снимка на екрана)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Много харесвам този пример, използвам го като заглавна част на моето табло.

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

**Bubble Card не поддържа Jinja шаблони**, но напредналите потребители могат да добавят JS шаблони директно в своите [персонализирани стилове](#оформление). Това ви позволява например да променяте динамично икона, текстовете или цветовете на елемент, да показвате или скривате елемент условно (като подбутон) и почти всичко друго в зависимост от състояние, атрибут и още.

> [!TIP]  
> Повече информация за JS шаблоните [тук](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Съветът ми е **винаги да поглеждате конзолата на браузъра си**, за да сте сигурни, че всичко работи правилно.

> [!IMPORTANT]  
> **Всички шаблони, които не променят CSS свойство, трябва да бъдат поставени в края! Например промяна на икона, текст или друг елемент.**

#### Налични променливи и функции

<details>

<summary>Променливи</summary>

<br>

В повечето карти имате достъп до тези променливи:

- `state` връща състоянието на зададения от вас `entity`.
  
- `entity` връща обекта, който сте задали, като `switch.test` в този пример.
  
- `icon` може да се използва по този начин за промяна на иконата: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` връща състоянието на зададения `entity` на първия ви подбутон, `[0]` е състоянието на първия подбутон, `[1]` на втория...
  
- `subButtonIcon[0]` може да се използва по този начин за промяна на иконата на първия подбутон: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` е иконата на първия подбутон, `[1]` на втория...
  
- `card` връща елемента на картата в DOM.
  
- `hass` е напреднала променлива, която ви дава още повече контрол, например можете да получите състоянието на `light.kitchen` така: `hass.states['light.kitchen'].state`, или атрибут така: `hass.states[entity].attributes.brightness`.

- `this` връща много полезна информация за вашата инсталация и табло, използвайте я само ако знаете какво правите.

</details>

<details>

<summary>Функции</summary>

<br>

Имате достъп до всички глобални JS функции, но освен това имате достъп и до:

- `getWeatherIcon` може да се използва за връщане на икона за времето на базата на състояние, което връща времето. Например можете да направите това `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, за да промените иконата на третия подбутон на иконата за днешното време, `.forecast[1]?.condition` е за утре...

  За целта ще трябва да създадете шаблонен сензор. Ето какво можете да добавите в своя `configuration.yaml`:
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
- `hass.formatEntityState(state)` може да се използва за превод на състояние (може да се използва и за получаване на мерната единица на състоянието, без да е нужно да я добавяте ръчно).
- `hass.formatEntityAttributeValue(state, "attribute")` може да се използва за превод на атрибут (може да се използва и за получаване на мерната единица на състоянието, без да е нужно да я добавяте ръчно).

</details>

#### Примери

По-долу можете да намерите много примери, но на моята [страница в Patreon](https://www.patreon.com/c/Clooos) ще откриете и много напреднали шаблони, като един (любимият ми), който позволява до четири условни баджа, разположени около иконите на картата. Това е и чудесен начин да научите всички възможности на персонализираните стилове и шаблони на Bubble Card!

<details>
<summary>Примери от моята страница в Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Пример 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Добавяне на баджове в стила на Home Assistant към всяка карта</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Пример 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Показване на форматирани дата и час в разделител без използване на обект</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Пример 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Показване на състоянието на подбутон на два реда</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Пример 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Персонализиране на етикетите и иконите в подбутон за избор</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Пример 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Добавяне на постоянно напомняне в изскачащ прозорец, което се показва само при нужда</a>
</p>

<br>

</details>

<details>

<summary>Промяна на цвета на фона на бутон, който е червен, когато е <code>off</code>, и син, когато е <code>on</code></summary>

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

<summary>Промяна на цвета на фона на бутон според обект, за хоризонталния стек от бутони</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Условно показване/скриване на подбутон</summary>

<br>

Този пример показва първия подбутон само когато прахосмукачката ми е заседнала.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Този пример показва подбутон, когато батерията е под 10%. Полезно с подбутон, който показва "Изтощена батерия".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Условна промяна на икона или икона на подбутон</summary>

<br>

Този пример променя иконата на бутон само когато прахосмукачката е заседнала.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Този пример променя иконата на първия подбутон само когато прахосмукачката е заседнала.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Условна промяна на цвета на икона или на икона на подбутон</summary>

<br>

Този пример променя цвета на иконата на бутон според състоянието му.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Този пример променя цвета на иконата на подбутон според състоянието му. `.bubble-sub-button-1` е първият подбутон, заменете `1`, ако искате да промените иконата на друг подбутон.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Условно анимиране на икона на вентилатор</summary>

<br>

Този пример завърта иконата на бутон, когато вентилаторът е `on`.
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

<summary>Шаблони за текстове (като име или състояние)</summary>

<br>

Този пример променя името/състоянието на бутон с "It's currently sunny" в зависимост от вашето време.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
или приложено за подбутони:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ако искате да използвате шаблон за състоянието (`.bubble-state`), не включвайте `show_state: true`, а само `show_attribute: true` без никакъв атрибут.

</details>

<details>

<summary>Напреднал пример: промяна на цвета на подбутон, когато е отворен изскачащ прозорец</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Напреднал пример: шаблон за име на разделител според състояние, преведено на вашия език</summary>

<br>

Можете да използвате `hass.formatEntityState(state)` за превод на състояние и `hass.formatEntityAttributeValue(state, "attribute")` за превод на атрибут.

Този пример променя името и иконата според времето, "Nuageux" означава "Облачно" на френски.

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

## Модули (Modules)

Модулите са мощна функция, която ви позволява да запазвате, използвате повторно и споделяте своите персонализирани стилове и шаблони във всички ваши Bubble Card карти. Вместо да копирате и поставяте един и същ код в множество карти, можете да създадете модул и да го приложите навсякъде, където ви е нужен. Това прави управлението на визията на вашето табло много по-лесно и по-ефективно.

Но тази функция е много по-мощна от това, тя ви позволява сами да добавяте истински функции в редактора на Bubble Card, използвайки всички стандартни опции на [формулярите на Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Селекторът за обекти (object) е подобрен, за да показва промените на живо и да поддържа атрибутите правилно.

Можете също да разгледате **Module Store**, за да намерите и инсталирате [модули, създадени от общността](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), или да споделите собствените си творения!

> [!TIP]
> Кодът на един модул работи по абсолютно същия начин като кода в секцията `styles` на карта. Налични са всички същите променливи и функции от секцията [Шаблони](#шаблони).

<br>

### Първоначална настройка

> [!IMPORTANT]
> От v3.1.0 Bubble Card Tools е препоръчителното хранилище за модули. Старият метод с шаблонен сензор все още работи за съществуващи инсталации, но новите модули и функциите на Module Store се поддържат най-добре чрез Bubble Card Tools.

Интеграцията Bubble Card Tools включва редактора на модули и Module Store и съхранява модулите като отделни YAML файлове. Съществуващите модули се мигрират автоматично.

Стъпките за инсталация и конфигурация са обяснени тук:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Редакторът на модули

Можете да отворите редактора на модули от настройките на всяка карта, в секцията **Модули**. Редакторът предоставя два основни раздела:

#### Раздел "Моите модули"

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Този раздел показва всичките ви инсталирани модули и ви позволява да:

- **Прилагате** съществуващи модули към текущата карта
- **Създавате** нов модул от нулата
- **Редактирате** съществуващи модули с преглед на живо
- **Изтривате** модули, които вече не са ви нужни
- **Търсите** и **сортирате** модулите (по азбучен ред, скорошни, първо активни)
- **Задавате глобален статус**, за да се прилага модулът автоматично към всички карти
- **Импортирате/експортирате** модули за резервно копие или споделяне

#### Раздел "Module Store"

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Този раздел показва [всички налични модули от общността](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) и ви позволява да:

- **Разглеждате** всички модули, създадени от общността
- **Търсите** и филтрирате модулите по име, съвместимост или ключови думи
- **Инсталирате** модули с едно натискане
- **Обновявате** инсталираните модули, когато са налични нови версии

> [!TIP]
> В редактора можете да включите неподдържаните модули, за да тествате модули, които все още не са отбелязани като съвместими с даден тип карта.

<br>

### Как се използват модулите

#### Създаване на нов модул

<details>

<summary>Натиснете за разгъване</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Отворете редактора на която и да е карта и разгънете секцията **Модули**.
2. Натиснете **Създаване на нов модул**.
3. Попълнете информацията за модула.
4. Напишете своя CSS и/или JavaScript шаблонен код в редактора **Код**.
5. (По избор) Създайте персонализиран конфигурационен интерфейс в секцията **Редактор** (като избора на цвят на екранната снимка по-горе, пълната документация е налична [тук](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Натиснете **Запазване**.

Вашият модул вече е наличен за използване на всяка от вашите карти!

<br>

</details>

#### Прилагане на модул към карта

<details>

<summary>Натиснете за разгъване</summary>

<br>

- **Чрез редактора:**

  - Отворете редактора на картата, към която искате да приложите модула.
  - Разгънете секцията **Модули**.
  - Натиснете модула, който искате да приложите, от списъка.
  - Под "Прилагане към" натиснете "Тази карта". Модулът вече е активен. Можете да приложите няколко модула към една и съща карта.

- **Чрез YAML:**

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

#### Глобално прилагане на модул

<details>

<summary>Натиснете за разгъване</summary>

<br>

Можете да настроите модул да се прилага автоматично към всички Bubble Card карти:

**Това не е налично за модули с редактор, тъй като те изискват специфична конфигурация, за да работят.**

- **Чрез редактора:**

  - В редактора на модули намерете своя модул в раздела **Моите модули**.
  - Включете бутона **Всички карти** до името на модула.
  - Модулът вече ще се прилага автоматично към всички карти.
 
- **Чрез YAML:**

  Във вашата YAML конфигурация на модула (в `bubble-modules.yaml`) просто добавете `is_global: true`.

<br>

</details>

#### Изключване на отделна карта от глобален модул

<details>

<summary>Натиснете за разгъване</summary>

<br>

Ако имате глобален модул, но искате да го изключите за конкретна карта:

- **Чрез редактора:**
  
  - В секцията **Модули** на картата ще видите изброени глобалните модули.
  - Натиснете глобален модул и изключете "Тази карта", за да го изключите за тази конкретна карта.

- **Чрез YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Споделяне на вашия модул в Module Store

<details>

<summary>Натиснете за разгъване</summary>

<br>

За да споделите своя модул в Module Store, в редактора на модули, най-долу в "Експортиране на модула", натиснете "Копиране за GitHub" и поставете съдържанието в нова дискусия в категорията [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Редактирайте описанието** (при нужда), **примера** (за потребителите на YAML) и не забравяйте да **включите поне една екранна снимка** за Module Store.

**Вашият модул става наличен веднага след това** (след опресняване на Store), затова проверете внимателно дали всичко е написано правилно и дали модулът работи според очакванията. Разбира се, можете да редактирате/обновявате модула, след като е споделен.

<br>

</details>

#### Управление на версиите

<details>

<summary>Натиснете за разгъване</summary>

<br>

Module Store автоматично проверява за обновявания на инсталираните модули. Когато има налични обновявания:

1. Ще видите индикатор за обновяване в раздела **Module Store**.
2. Натиснете **Обновяване** при модулите с налични обновявания.
3. Потвърдете обновяването в Module Store.

<br>

</details>

#### Задаване на поддържаните типове карти

<details>

<summary>Натиснете за разгъване</summary>

<br>

Някои модули може да не са съвместими с всички типове карти. Можете да посочите кои карти поддържа даден модул.  
Ако искате модулът да е съвместим с **всички карти**, просто пропуснете полето `supported` (или използвайте опцията **Всички карти** в редактора).

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
<summary>Основен модул за оформление</summary>

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
<summary>Модул с персонализирана конфигурация</summary>

<br>

Този модул е наличен [тук](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Още примери можете да намерите в Module Store или [тук](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Помощ

Не се колебайте да отворите issue, ако нещо не работи както се очаква. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Имате въпроси или мисли за Bubble Card? Искате да споделите вашите табла или открития? Можете да отидете във форума на Home Assistant, в subreddit-а на Bubble Card или в секцията GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Принос

Приносът е добре дошъл! Независимо дали става дума за поправки на грешки, нови функции, преводи или подобрения на документацията, не се колебайте да отворите pull request.

Преди да започнете, моля, прочетете [ръководството за разработчици](DEVELOPERS.md), което обяснява как да настроите локалната си среда, да компилирате проекта и да тествате промените си.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Дарения

Посвещавам по-голямата част от свободното си време на това да направя този проект възможно най-добър. Така че, ако цените работата ми, всяко дарение би било чудесен начин да покажете подкрепата си 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Благодаря на всички за подкрепата, вие сте най-голямата ми мотивация!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
