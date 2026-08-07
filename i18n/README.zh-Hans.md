<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> 本页面是自动翻译的内容。如有疑问，请以[英文原版文档](../README.md)为准。发现某句话读起来不对劲？欢迎任何形式的帮助，[修正本页面](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.zh-Hans.md)只需一分钟：GitHub 会帮你完成 fork 和 pull request。提前感谢你！🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[用其他语言阅读本页](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card 是一个为 Home Assistant 打造的极简、可自定义的卡片集合，拥有现代化的弹窗，以及一个内置的 Module Store，收录了 100 多个由社区制作的模块。

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## 目录

**[`安装`](#安装)**  **[`配置`](#配置)**  **[`实体建议`](#实体建议)**  **[`Pop-up`](#pop-up)**  **[`水平按钮堆叠`](#水平按钮堆叠)**  **[`按钮`](#按钮)**  **[`媒体播放器`](#媒体播放器)**  **[`卷帘`](#卷帘)**  **[`选择`](#选择)**  **[`空调`](#空调)**  **[`日历`](#日历)**  **[`分隔线`](#分隔线)**  **[`空列`](#空列)**  **[`纯子按钮`](#纯子按钮)**  **[`子按钮`](#子按钮)**  **[`卡片布局`](#卡片布局)**  **[`条件`](#条件)**  **[`动作`](#点击双击和长按动作)**  **[`样式`](#样式)**  **[`模板`](#模板)**  **[`Modules`](#模块)**  **[`本地化`](#本地化)**  **[`帮助`](#帮助)**  **[`参与贡献`](#参与贡献)**  **[`捐赠`](#捐赠)**

<br>

## 安装

**Home Assistant 支持的最低版本：** 2023.9.0

<details>

<summary>不使用 HACS</summary>

<br>

1. 从[最新发行版](https://github.com/Clooos/Bubble-Card/releases/latest)下载 `bubble-card.zip`
2. 将它解压到你的 `<config>/www` 文件夹，你应该会得到 `bubble-card.js` 以及旁边的一个 `translations` 文件夹 (该文件夹存放编辑器的词典，没有它编辑器就会一直保持英文)
3. 在你的仪表盘上点击右上角的图标，然后点击 `Edit dashboard`
4. 再次点击该图标，然后点击 `Manage resources`
5. 点击 `Add resource`
6. 复制并粘贴以下内容：`/local/bubble-card.js?v=1`
7. 点击 `JavaScript Module`，然后点击 `Create`
8. 返回并刷新你的页面
9. 现在你可以点击右下角的 `Add card`，然后搜索 `Bubble Card`
10. 每次更新文件后，你都需要编辑 `/local/bubble-card.js?v=1`，并将版本号改为更高的数字

如果不生效，请尝试清除浏览器缓存。

</details>

<details>

<summary>使用 HACS (推荐)</summary>

<br>

这种方式可以让你直接通过 Home Assistant Community Store 获取更新

1. 如果尚未安装 HACS，请按照 [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) 上的说明进行安装
2. 按照 [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) 上的说明完成 HACS 的初始配置
3. 在侧边栏中前往 "HACS"
4. 搜索 "Bubble Card"，或点击下方的蓝色按钮
5. 点击 "Download"
6. 返回你的仪表盘，点击右上角的图标，然后点击 `Edit dashboard`
7. 现在你可以点击右下角的 `Add card`，然后搜索 `Bubble Card`

如果不生效，请尝试清除浏览器/应用缓存 (如有需要，请在所有设备上都清除)。

#### 视频

你也可以前往我的 YouTube 频道观看逐步操作的视频。

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## 配置

所有选项都可以在 Home Assistant 编辑器中配置。但你也可以在下方的文档中查看更多细节和 YAML。

<details>

<summary><b>主要选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `type` | string | **必填** | `custom:bubble-card` | 卡片类型 |
| `card_type` | string | **必填** | `button`、`calendar`、`climate`、`cover`、`empty-column`、`horizontal-buttons-stack`、`media-player`、`pop-up`、`select`、`separator` 或 `sub-buttons` | Bubble Card 的类型，详见下文 |
| `styles` | object list | 可选 | 任意 CSS 样式表 | 允许你自定义 Bubble Card 的 CSS，详见[样式](#样式) |

</details>

<details>

<summary><b>全局 CSS 变量 (参见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | 所有支持元素的边框圆角 |
| `--bubble-main-background-color` | `color` | 所有支持元素的主背景色 |
| `--bubble-secondary-background-color` | `color` | 所有支持元素的次背景色 |
| `--bubble-accent-color` | `color` | 所有支持元素的强调色 |
| `--bubble-icon-border-radius` | `px` | 所有支持元素的图标边框圆角 |
| `--bubble-icon-background-color` | `color` | 所有支持元素的图标背景色 |
| `--bubble-sub-button-border-radius` | `px` | 所有子按钮的边框圆角 |
| `--bubble-sub-button-background-color` | `color` | 所有子按钮的背景色 |
| `--bubble-box-shadow` | 参见 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 所有支持元素的阴影 |
| `--bubble-border` | 参见 [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | 所有支持卡片的边框 |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**观看这个[视频](https://www.youtube.com/watch?v=0hSQOlBxKKI)，了解 Bubble Card 及其功能。** 我的 YouTube 频道还很新，主要专注于 Home Assistant 和 Bubble Card 的教程。别犹豫，快来订阅帮助我的频道提高曝光度吧。提前谢谢大家！

<br>

---

<br>

## 实体建议

从 Home Assistant 2026.6 开始，在卡片选择器中选择一个实体会为你提供几张现成的卡片，而 Bubble Card 用自己的配方来回应这个问题。选择一个灯光，你会得到一张带亮度滑块的卡片，如果你的灯光支持，还会有色温、颜色和饱和度的变体。选择一个卷帘，你会得到它的位置滑块；选择一个媒体播放器，你还会得到一个带信号源列表的变体；选择一台吸尘器，你会得到它的启动、暂停和返回充电座按钮。每条建议都是一份普通的 Bubble Card 配置，以实时预览的形式呈现，因此你可以选取最接近的一个，然后照常继续编辑。

你会得到什么取决于你的实体实际能做什么：没有亮度通道的灯光得到的是开关而不是滑块，无法倾斜的卷帘不会有倾斜变体，空调实体只有在拥有预设模式时才会得到它们。适用时，经典条目会跟在它们下方：该域的专用卡片、一个普通按钮和一个滑块。

> [!TIP]
> 模块可以把自己的建议添加到该列表中，参见[模块](#模块)。

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

这张卡片允许你创建一个包含任意内容的弹窗。每个弹窗都**默认隐藏**，可以通过指向其链接 (例如 `'#pop-up-name'`) 来打开，也可以使用任意支持 `navigate` [动作](#点击双击和长按动作)的卡片打开，或者使用内置的[水平按钮堆叠](#水平按钮堆叠)来打开。

> [!TIP]
> ### 弹窗触发器 
> 此功能允许你根据任意实体的状态打开一个弹窗，例如，当有人出现在你家门前时，可以打开一个带摄像头的"安防"弹窗。你也可以创建一个开关辅助实体 (input_boolean)，并在自动化中触发它的打开/关闭。
> <details>
> <summary>当 <code>binary_sensor</code> 为 <code>on</code> 时打开弹窗</summary>
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
> ### 关闭弹窗的多种方式 
> 关闭弹窗的方法有很多种。例如，你可以从弹窗头部向下滑动，或在弹窗内部向下长距离滑动，也可以在桌面端按下 Escape 键，或移除 URL 中的哈希，又或者直接点击关闭按钮。
>


### 弹窗选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `hash` | string | **必填** | 任意带 ' ' 的唯一哈希 (例如 `'#kitchen'`) | 这是你打开弹窗的方式 |
| `popup_style` | string | 可选 | `bubble` (默认) 或 `classic` | 定义弹窗的视觉样式 |
| `popup_mode` | string | 可选 | `default` (默认)、`fit-content`、`centered` 或 `adaptive-dialog` | 定义弹窗的布局模式 |
| `with_bottom_offset` | boolean | 可选 | `true` 或 `false` (默认) | 仅在 `popup_mode: fit-content` 或 `adaptive-dialog` 下使用。在移动端应用底部偏移，当你的仪表盘包含页脚卡片时很有用。 |
| `full_width_on_mobile` | boolean | 可选 | `true` 或 `false` (默认) | 仅在 `popup_mode: centered` 下使用。在移动端将弹窗扩展为全屏宽度，在较小的屏幕上很有用。 |
| `performance_mode` | string | 可选 | `default` (默认) 或 `performance` | 优化弹窗打开动画。`performance` 会略微延迟内容渲染和背景模糊，并在设置时禁用遮罩模糊。 |
| `auto_close` | string | 可选 | 以毫秒为单位的超时时间 (例如 `10000` 代表 10 秒) | 超时后自动关闭弹窗 |
| `close_on_click` | boolean | 可选 | `true` 或 `false` (默认) | 任意交互后自动关闭弹窗 |
| `close_by_clicking_outside` | boolean | 可选 | `true` (默认) 或 `false` | 点击弹窗外部关闭弹窗 |
| `width_desktop` | string | 可选 | 任意 CSS 值 | 桌面端宽度 (移动端默认为 `100%`) |
| `margin` | string | 可选 | 任意 CSS 值 | **仅**当你的弹窗在移动端未能良好居中时使用 (例如 `13px`) |
| `margin_top_mobile` | string | 可选 | 任意 CSS 值 | 移动端顶部边距 (例如头部隐藏时可用 `-56px`) |
| `margin_top_desktop` | string | 可选 | 任意 CSS 值 | 桌面端顶部边距 (例如 `50vh` 可实现半高弹窗，或 `calc(100vh - 400px)` 可实现固定高度 `400px`) |
| `bg_color` | string | 可选 | 任意 hex、rgb 或 rgba 值 | 弹窗的背景色 (例如 `#ffffff` 表示白色背景) |
| `bg_opacity` | string | 可选 | `0` 到 `100` 之间的任意值 | 弹窗的背景不透明度 (例如 `100` 表示不透明) |
| `bg_blur` | string | 可选 | `0` 到 `100` 之间的任意值 | 弹窗的背景模糊效果，**仅当 `bg_opacity` 未设置为 `100` 时生效** (例如 `0` 表示无模糊) |
| `shadow_opacity` | string | 可选 | `0` 到 `100` 之间的任意值 | 弹窗的阴影不透明度 (例如 `0` 表示隐藏阴影) |
| `hide_backdrop` | boolean | 可选 | `true` 或 `false` (默认) | 在主仪表盘的第一个弹窗上设置为 true，以禁用所有弹窗的遮罩。 |
| `background_update` | boolean | 可选 | `true` 或 `false` (默认) | 在后台更新弹窗内容 (不推荐) |
| `trigger` | object 或 list | 可选 | 见[条件](#条件) | 当条件满足时打开此弹窗 |
| `trigger_entity` | string | 可选 | 任意实体 | 根据任意实体的状态打开此弹窗，即 `trigger` 的简化形式 |
| `trigger_state` | string | 可选 (若定义了 `trigger_entity` 则**必填**) | 任意实体状态 | 用于打开弹窗的实体状态 |
| `trigger_close` | boolean | 可选 | `true` 或 `false` | 当条件不再满足时关闭弹窗 (默认：搭配 `trigger` 时为 `true`，搭配 `trigger_state` 时为 `false`) |
| `open_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 在弹窗打开时触发一个动作 |
| `close_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 在弹窗关闭时触发一个动作 |
| `show_header` | boolean | 可选 | `true` (默认) 或 `false` | 完全显示/隐藏弹窗头部 |
| `show_previous_button` | boolean | 可选 | `true` 或 `false` (默认) | 在关闭按钮旁显示一个返回按钮，可用时导航回上一个弹窗 |
| `show_close_button` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏关闭按钮，同时保留头部其余部分可见 |
| `buttons_position` | string | 可选 | `right` (默认) 或 `left` | 头部中关闭按钮和返回按钮的位置 |
| `cards` | list | 可选 | 任意 Bubble Card、Home Assistant 卡片或自定义卡片 | 定义弹窗的内容。参见下方的弹窗示例。 |
| 你也可以为弹窗的头部使用[所有按钮设置](#按钮)。 | | 可选 | | 若未定义则不会显示任何头部 |

</details>

<details>

<summary><b>CSS 变量 (参见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | 弹窗的边框圆角 |
| `--bubble-pop-up-main-background-color` | `color` | 弹窗中支持元素的主背景色 |
| `--bubble-pop-up-background-color` | `color` | 弹窗的背景色 |
| `--bubble-backdrop-background-color` | `color` | 遮罩的背景色 |
| 你也可以为弹窗的头部使用[所有按钮 CSS 变量](#按钮选项)。 | | |

</details>


### 独立弹窗格式 (v3.2.0+)

自 v3.2.0 起，弹窗采用了一种新的独立格式，内容卡片通过 `cards` 选项直接定义在弹窗内部。这带来了更好的性能，以及一种新的、基于分区的拖放编辑体验。


#### 示例

<details>

<summary>一个弹窗 (独立格式)</summary>

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

<summary>一个用于打开弹窗的按钮</summary>

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

## 水平按钮堆叠

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

这张卡片是 pop-up 卡片的绝佳搭档，让你可以打开对应的 pop-up。它还可以让你打开仪表盘的任意页面。此外，你还可以添加人体/存在传感器，让按钮的顺序根据你刚进入的房间自动调整。这张卡片可滚动、始终可见，并充当页脚使用。

> [!IMPORTANT]  
> 这张卡片必须是你视图中的最后一张卡片 (排在所有卡片和 pop-up 之后)。它不能放在任何堆叠卡片内部。

### 水平按钮堆叠选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `1_link` | string | **必填** | pop-up 的哈希值 (例如 `'#kitchen'`)，可带 ' ' 或任意链接 | 要打开的链接 |
| `1_name` | string | 可选 | 任意字符串 | 按钮的名称 |
| `1_icon` | string | 可选 | 任意 `mdi:` 图标 | 按钮的图标 |
| `1_entity` | string | 可选 | 任意灯或灯组 | 在背景中显示该灯的颜色 |
| `1_pir_sensor` | string | 可选 | 任意二元传感器 | 至少需要一个人体传感器才能启用 `auto_order`，实际上它也适用于任意实体类型，例如你可以添加灯组，顺序会根据最后一次状态变化的时间调整 |
| `auto_order` | boolean | 可选 | `true` 或 `false` (默认) | 根据 `_pir_sensor` 最后一次状态变化的时间改变按钮顺序，**如果你的代码中没有任何 `_pir_sensor`，此项必须为 `false`** |
| `margin` | string | 可选 | 任意 CSS 值 | 仅当你的 `horizontal-buttons-stack` 在移动端未能正确居中时使用 (例如 `13px`) |
| `width_desktop` | string | 可选 | 任意 CSS 值 | 桌面端宽度 (移动端默认为 `100%`) |
| `is_sidebar_hidden` | boolean | 可选 | `true` 或 `false` (默认) | 当桌面端侧边栏被隐藏时 (仅当你自行修改隐藏了侧边栏时) 修正水平按钮堆叠的位置 |
| `rise_animation` | boolean | 可选 | `true` (默认) 或 `false` | 设为 `false` 可禁用页面加载完成后触发的动画 |
| `highlight_current_view` | boolean | 可选 | `true` 或 `false` (默认) | 用平滑动画高亮当前哈希/视图 |
| `hide_gradient` | boolean | 可选 | `true` 或 `false` (默认) | 设为 `false` 可隐藏渐变 |

> [!IMPORTANT]  
> 以数字开头的变量用于定义你的按钮，只需更改数字即可添加更多按钮 (见下方示例)。

</details>

<details>

<summary><b>CSS 变量 (参见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | 水平按钮堆叠按钮的边框圆角 |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | 水平按钮堆叠按钮的背景颜色 |

</details>


#### 示例

<details>

<summary>一个根据存在传感器自动重新排列的水平按钮堆叠</summary>

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

## 按钮

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

这张卡片用途非常广泛。它可以用作**开关**、**滑块**、**状态**或**名称/文本**按钮。

> [!TIP]
> ### 这些按钮类型之间有什么区别？
>
> - **开关按钮：** 这是默认的按钮类型。默认情况下，它会切换一个实体，背景色会根据实体的状态或灯的颜色变化。你可以在**卡片点击动作**部分更改它的动作。
>
> - **滑块按钮：** 此按钮类型可以控制具有可调范围的实体。它非常适合调节灯光亮度，其填充色会随灯光颜色变化。你也可以用它来显示数值，例如电池电量。
>   滑块支持的实体：
>   - 灯光 (亮度)
>   - 媒体播放器 (音量)
>   - 卷帘 (位置)
>   - 风扇 (百分比)
>   - 空调 (温度)
>   - Input number 和 Number (数值)
>   - 电池传感器 (百分比，只读)
>
>   你也可以在**滑块设置**中禁用实体筛选，从而使用任何具有数值状态的实体，然后定义 `min` 和 `max` 值。此选项为只读。
>
> - **状态按钮：** 非常适合显示传感器或任意实体的信息。按下时会显示该实体的"更多信息"面板。其背景色不会变化。
>
> - **名称/文本按钮：** 唯一不需要实体的按钮类型。它可以显示一段短文本、名称或标题。你也可以为它添加动作。其背景色不会变化。

### 按钮选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必填** | 任意实体 | 要控制的实体 |
| `button_type` | string | 可选 | `switch` (默认)、`slider`、`state` 或 `name` | 按钮的行为 |
| `name` | string | 可选 | 任意字符串 | 按钮的名称，如果未定义则显示实体名称 |
| `icon` | string | 可选 | 任意 `mdi:` 图标 | 按钮的图标，如果未定义则显示实体图标或 `entity-picture` |
| `force_icon` | boolean | 可选 | `true` 或 `false` (默认) | 优先显示图标而非 `entity-picture` |
| `use_accent_color` | boolean | 可选 (默认 `false`) | **仅适用于灯光。** 使用主题的强调色而非灯光的颜色。                         |
| `show_state` | boolean | 可选 | `true` 或 `false` (默认) | 显示或隐藏 `entity` 的状态 |
| `show_name` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏名称 |
| `show_icon` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏图标 |
| `show_last_changed` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后变化时间 |
| `show_last_updated` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后更新时间 |
| `show_attribute` | boolean | 可选 | `true` 或 `false` (默认) | 在 `name` 下方显示 `entity` 的一个属性 |
| `attribute` | string | 可选 (当 `show_attribute` 设为 `true` 时必填) | `entity` 的一个属性 | 要显示的属性 (例如 `brightness`) |
| `scrolling_effect` | boolean | 可选 | `true` (默认) 或 `false` | 当内容超出容器大小时允许文字滚动 |
| `button_action` | object | 可选 | `tap_action`、`double_tap_action` 或 `hold_action`，见下方 | 允许更改按钮点击时的默认动作。 |
| `tap_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义点击图标时的动作类型，如未定义，将使用 `more-info` |
| `double_tap_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义双击图标时的动作类型，如未定义，将使用 `none` |
| `hold_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义长按图标时的动作类型，如未定义，将使用 `more-info` |
| `card_layout` | string | 可选 | `normal` (非分区视图下默认)、`large` (分区视图下默认)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |
| `sub_button` | object | 可选 | 见[子按钮](#子按钮) | 添加固定在右侧的自定义按钮 |

</details>

<details>

<summary><b>CSS 变量 (参见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | 按钮中支持元素的主背景颜色 |
| `--bubble-button-border-radius` | `px` | 按钮的边框圆角 |
| `--bubble-button-icon-border-radius` | `px` | 按钮图标容器的边框圆角 |
| `--bubble-button-icon-background-color` | `color` | 按钮图标容器的背景颜色 |
| `--bubble-light-white-color` | `color` | 替换灯光按钮/滑块的默认白色 |
| `--bubble-light-color` | `color` | 替换灯光按钮/滑块的颜色 (即使是 RGB 灯光) |
| `--bubble-button-box-shadow` | 参见 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 按钮的阴影 |

</details>

以下选项仅在 `button_type` 设为 `slider` 时可用。

<details>

<summary><b>滑块选项 (YAML + 说明)</b></summary>

| 名称                  | 类型    | 要求                     | 说明                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | 可选                        | 滑块的最小值。用于自定义滑块。                                                    |
| `max_value`             | number  | 可选                        | 滑块的最大值。用于自定义滑块。                                                    |
| `step`                  | number  | 可选                        | 滑块的步进值。                                                                           |
| `tap_to_slide`          | boolean | 可选 (默认 `false`)      | 启用旧版滑块行为，即通过点击而非按住来激活滑块。        |
| `relative_slide`        | boolean | 可选 (默认 `false` )     | 相对于起始值 (而非起始触摸点) 更新数值。                                      |
| `read_only_slider`      | boolean | 可选 (默认 `false`)      | 将滑块设为只读。对某些实体 (如传感器) 会自动启用。                                        |
| `slider_live_update`    | boolean | 可选 (默认 `false`)      | 滑动过程中实时更新实体状态。**并非所有实体都推荐使用此功能。**        |
| `slider_fill_orientation` | string | 可选 | `left`、`right`、`top` 或 `bottom` | 更改滑块的填充方向。未定义时为从左到右，在[从右到左的语言](#本地化)中会镜像 |
| `slider_value_position` | string | 可选 | `right`、`left`、`center` 或 `hidden` | 数值显示的位置。未定义时位于末端一侧，因此在[从右到左的语言](#本地化)中位于左侧 |
| `invert_slider_value` | boolean | 可选 (默认 `false`) | 反转滑块方向 (100% 填充等于最小值)。颜色滑块不支持此选项。 |
| `light_slider_type` | string | 可选 | `brightness` (默认)、`hue`、`saturation`、`white_temp` | **仅适用于灯光。** 选择滑块模式 |
| `cover_slider_type` | string | 可选 | `position` (默认)、`tilt_position` | **仅适用于卷帘。** 选择滑块模式 (位置或倾斜角度) |
| `hue_force_saturation` | boolean | 可选 (默认 `false`) | **仅适用于灯光 (色相模式)。** 调整色相时强制饱和度 |
| `hue_force_saturation_value` | number | 可选 (默认 `100`) | **仅适用于灯光 (色相模式)。** 强制饱和度值 (0-100) |
| `use_accent_color` | boolean | 可选 (默认 `false`) | **仅适用于灯光 (亮度模式)。** 使用主题强调色而非灯光颜色 |
| `allow_light_slider_to_0` | boolean | 可选 (默认 `false`)    | **仅适用于灯光。** 允许滑块达到 0%，从而关闭灯光。与 `tap_to_slide` 不兼容。 |
| `light_transition`      | boolean | 可选 (默认 `false`)      | **仅适用于灯光。** 为支持的灯光启用平滑的亮度过渡。                           |
| `light_transition_time` | number  | 可选 (默认 `500`)        | **仅适用于灯光。** 过渡时间 (毫秒)。需要设置 `light_transition: true`。            |

</details>

#### 示例

<details>

<summary>一个可以控制灯光亮度的滑块按钮</summary>

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

<summary>一个带有更多选项的按钮</summary>

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

## 媒体播放器

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

这张卡片让你可以控制一个媒体播放器实体。

### 媒体播放器选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必填** | 任意媒体播放器 | 要控制的媒体播放器 |
| `name` | string | 可选 | 任意字符串 | 媒体播放器的名称，如果未定义则显示实体名称 |
| `icon` | string | 可选 | 任意 `mdi:` 图标 | 媒体播放器的图标，如果未定义则显示实体图标或 `entity-picture` |
| `force_icon` | boolean | 可选 | `true` 或 `false` (默认) | 优先显示图标而非 `entity-picture` |
| `show_state` | boolean | 可选 | `true` 或 `false` (默认) | 显示或隐藏 `entity` 的状态 |
| `show_name` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏名称 |
| `show_icon` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏图标 |
| `show_last_changed` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后变化时间 |
| `show_last_updated` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后更新时间 |
| `show_attribute` | boolean | 可选 | `true` 或 `false` (默认) | 在 `name` 下方显示 `entity` 的一个属性 |
| `attribute` | string | 可选 (当 `show_attribute` 设为 `true` 时必填) | `entity` 的一个属性 | 要显示的属性 (例如 `brightness`) |
| `scrolling_effect` | boolean | 可选 | `true` (默认) 或 `false` | 当内容超出容器大小时允许文字滚动 |
| `min_volume` | number | 可选 | 任意数字 | 音量滑块的最小值。 |
| `max_volume` | number | 可选 | 任意数字 | 音量滑块的最大值。 |
| `cover_background` | boolean | 可选 | `true` 或 `false` (默认) | 使用模糊处理的媒体封面作为卡片背景。 |
| `button_action` | object | 可选 | `tap_action`、`double_tap_action` 或 `hold_action`，见[动作](#点击双击和长按动作) | 允许更改按钮点击时的默认动作。 |
| `tap_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义点击图标时的动作类型，如未定义，将使用 `more-info`。 |
| `double_tap_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义双击图标时的动作类型，如未定义，将使用 `none`。 |
| `hold_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义长按图标时的动作类型，如未定义，将使用 `more-info`。 |
| `main_buttons_position` | string | 可选 | `default` 或 `bottom` | 将封面动作按钮移到底部 (固定) |
| `main_buttons_full_width` | boolean | 可选 | `true` 或 `false` | 让底部动作按钮全宽显示 (默认：当位置为 `bottom` 时为 `true`) |
| `main_buttons_alignment` | string | 可选 | `end` (默认)、`center`、`start`、`space-between` | 非全宽时底部动作按钮的对齐方式 |
| `card_layout` | string | 可选 | `normal` (非分区视图下默认)、`large` (分区视图下默认)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |
| `sub_button` | object | 可选 | 见[子按钮](#子按钮) | 添加固定在右侧的自定义按钮 |
| `hide` | object | 可选 | 见下方 | 隐藏卡片上的按钮 |

#### 隐藏选项

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | 可选 | `true` 或 `false` (默认) | 隐藏播放/暂停按钮 |
| `volume_button` | boolean | 可选 | `true` 或 `false` (默认) | 隐藏音量按钮 |
| `previous_button` | boolean | 可选 | `true` 或 `false` (默认) | 隐藏上一曲按钮 |
| `next_button` | boolean | 可选 | `true` 或 `false` (默认) | 隐藏下一曲按钮 |
| `power_button` | boolean | 可选 | `true` 或 `false` (默认) | 隐藏电源按钮 |

</details>

<details>

<summary><b>CSS 变量 (参见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | 媒体播放器的主背景颜色 |
| `--bubble-media-player-border-radius` | `px` | 媒体播放器的边框圆角 |
| `--bubble-media-player-buttons-border-radius` | `px` | 媒体播放器按钮的边框圆角 |
| `--bubble-media-player-slider-background-color` | `color` | 音量滑块的背景颜色 |
| `--bubble-media-player-icon-border-radius` | `px` | 媒体播放器图标容器的边框圆角 |
| `--bubble-media-player-icon-background-color` | `color` | 媒体播放器图标容器的背景颜色 |
| `--bubble-media-player-box-shadow` | 参见 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 媒体播放器的阴影 |

</details>


#### 示例

<details>

<summary>一个包含所有选项的媒体播放器</summary>

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

## 卷帘

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

此卡片可让你控制 `cover` 实体。

### 卷帘选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 描述 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必填** | 任意 cover | 要控制的卷帘 |
| `name` | string | 可选 | 任意字符串 | 卷帘的名称，若未定义则显示实体名称 |
| `force_icon` | boolean | 可选 | `true` 或 `false` (默认) | 优先显示图标而非 `entity-picture` |
| `show_state` | boolean | 可选 | `true` 或 `false` (默认) | 显示或隐藏 `entity` 的状态 |
| `show_name` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏名称 |
| `show_icon` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏图标 |
| `show_last_changed` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后变化时间 |
| `show_last_updated` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后更新时间 |
| `show_attribute` | boolean | 可选 | `true` 或 `false` (默认) | 在 `entity` 的 `name` 下方显示一个属性 |
| `attribute` | string | 可选 (若 `show_attribute` 设为 `true` 则必填) | `entity` 的一个属性 | 要显示的属性 (例如 `brightness`) |
| `scrolling_effect` | boolean | 可选 | `true` (默认) 或 `false` | 当内容超出容器大小时允许文字滚动 |
| `icon_open` | string | 可选 | 任意 `mdi:` 图标 | 卷帘打开状态的图标，若未定义则显示默认的打开状态图标 |
| `icon_close` | string | 可选 | 任意 `mdi:` 图标 | 卷帘关闭状态的图标，若未定义则显示默认的关闭状态图标 |
| `icon_up` | string | 可选 | 任意 `mdi:` 图标 | 打开卷帘按钮的图标，若未定义则显示默认的打开状态图标 |
| `icon_down` | string | 可选 | 任意 `mdi:` 图标 | 关闭卷帘按钮的图标，若未定义则显示默认的关闭状态图标 |
| `open_service` | string | 可选 | 任意服务或脚本 | 用于打开卷帘的服务，默认为 `cover.open_cover` |
| `stop_service` | string | 可选 | 任意服务或脚本 | 用于停止卷帘的服务，默认为 `cover.stop_cover` |
| `close_service` | string | 可选 | 任意服务或脚本 | 用于关闭卷帘的服务，默认为 `cover.close_cover` |
| `tilt_buttons` | string | 可选 | `top` (默认)、`bottom`、`left`、`right`、`hidden` | 翻转控制按钮的位置 (仅在卷帘支持翻转时显示) |
| `open_tilt_service` | string | 可选 | 任意服务或脚本 | 用于打开翻转的服务，默认为 `cover.open_cover_tilt` |

| `close_tilt_service` | string | 可选 | 任意服务或脚本 | 用于关闭翻转的服务，默认为 `cover.close_cover_tilt` |
| `button_action` | object | 可选 | `tap_action`、`double_tap_action` 或 `hold_action`，参见[动作](#点击双击和长按动作) | 允许更改按钮点击时的默认动作。 |
| `tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义点击图标时的动作类型，若未定义则使用 `more-info`。 |
| `double_tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义双击图标时的动作类型，若未定义则使用 `none`。 |
| `hold_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义长按图标时的动作类型，若未定义则使用 `more-info`。 |
| `main_buttons_position` | string | 可选 | `default` 或 `bottom` | 将媒体控制按钮移到底部 (固定) |
| `main_buttons_full_width` | boolean | 可选 | `true` 或 `false` | 使底部控制按钮全宽显示 (默认：位置为 `bottom` 时为 `true`) |
| `main_buttons_alignment` | string | 可选 | `end` (默认)、`center`、`start`、`space-between` | 非全宽时底部控制按钮的对齐方式 |
| `card_layout` | string | 可选 | `normal` (非分区视图下的默认值)、`large` (分区视图下的默认值)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，参见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |
| `sub_button` | object | 可选 | 参见[子按钮](#子按钮) | 添加固定在右侧的自定义按钮 |

</details>

<details>

<summary><b>CSS 变量 (参见 <a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 描述 |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | 卷帘卡片中受支持元素的主背景色 |
| `--bubble-cover-border-radius` | `px` | 卷帘卡片的边框半径 |
| `--bubble-cover-icon-border-radius` | `px` | 卷帘卡片图标容器的边框半径 |
| `--bubble-cover-icon-background-color` | `color` | 卷帘卡片图标容器的背景色 |
| `--bubble-cover-box-shadow` | 见[盒阴影](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 卷帘卡片的盒阴影 |
| `--bubble-button-box-shadow` | 见[盒阴影](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 卷帘卡片中按钮的盒阴影 |

</details>


#### 示例

<details>

<summary>一个可以控制卷帘窗的卡片</summary>

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

## 选择

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

此卡片可让你为 `input_select` / `select` 实体添加下拉菜单。此卡片同样支持子按钮以及所有 Bubble Card 的通用功能。

> [!TIP]
> 如果需要，你也可以使用选择类的子按钮，此功能在所有支持子按钮的卡片中都可用。

### 选择选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 描述 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必填** | 任意实体 | 要控制的实体 |
| `name` | string | 可选 | 任意字符串 | 选择卡片的名称，若未定义则显示实体名称 |
| `icon` | string | 可选 | 任意 `mdi:` 图标 | 选择卡片的图标，若未定义则显示实体图标或 `entity-picture` |
| `force_icon` | boolean | 可选 | `true` 或 `false` (默认) | 优先显示图标而非 `entity-picture` |
| `show_state` | boolean | 可选 | `true` 或 `false` (默认) | 显示或隐藏 `entity` 的状态 |
| `show_name` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏名称 |
| `show_icon` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏图标 |
| `show_last_changed` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后变化时间 |
| `show_last_updated` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后更新时间 |
| `show_attribute` | boolean | 可选 | `true` 或 `false` (默认) | 在 `entity` 的 `name` 下方显示一个属性 |
| `attribute` | string | 可选 (若 `show_attribute` 设为 `true` 则必填) | `entity` 的一个属性 | 要显示的属性 (例如 `brightness`) |
| `scrolling_effect` | boolean | 可选 | `true` (默认) 或 `false` | 当内容超出容器大小时允许文字滚动 |
| `tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义点击图标时的动作类型，若未定义则使用 `more-info`。 |
| `double_tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义双击图标时的动作类型，若未定义则使用 `none`。 |
| `hold_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义长按图标时的动作类型，若未定义则使用 `more-info`。 |
| `card_layout` | string | 可选 | `normal` (非分区视图下的默认值)、`large` (分区视图下的默认值)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，参见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |
| `sub_button` | object | 可选 | 参见[子按钮](#子按钮) | 添加固定在右侧的自定义按钮 |

</details>

<details>

<summary><b>CSS 变量 (参见 <a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 描述 |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | 选择卡片中受支持元素的主背景色 |
| `--bubble-select-background-color` | `color` | 选择卡片的背景色 |
| `--bubble-select-list-border-radius` | `px` | 卡片中下拉菜单的边框半径 |
| `--bubble-select-list-item-accent-color` | `color` | 已选中项的强调色 |
| `--bubble-select-list-background-color` | `color` | 卡片中下拉菜单的背景色 |
| `--bubble-select-list-width` | `px` | 卡片中下拉菜单的宽度 |
| `--bubble-select-arrow-background-color` | `color` | 下拉箭头的背景色 |
| `--bubble-select-button-border-radius` | `px` | 选择按钮的边框半径 |
| `--bubble-select-border-radius` | `px` | 选择卡片的边框半径 |
| `--bubble-select-icon-border-radius` | `px` | 选择卡片图标容器的边框半径 |
| `--bubble-select-icon-background-color` | `color` | 选择卡片图标容器的背景色 |
| `--bubble-select-box-shadow` | 见[盒阴影](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 选择卡片的盒阴影 |

</details>


#### 示例

<details>

<summary>一个带场景列表的选择卡片</summary>

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

## 空调

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

此卡片可让你控制你的 `climate` 实体。

> [!TIP]
> 模式选择菜单是一个[子按钮](#子按钮)，创建卡片时会自动添加。你之后可以随意修改或移除它。

### 空调选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称                     | 类型    | 要求                         | 支持的选项                                  | 描述                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **必填**                        | 空调实体                                   | 要控制的实体 (例如 `climate.living_room`)。                                                            |
| `name`                  | string  | 可选                            | 任意字符串                                       | 卡片的自定义名称。若未定义，则显示实体名称。                                                    |
| `icon`                  | string  | 可选                            | 任意 `mdi:` 图标                                  | 卡片的自定义图标。若未定义，则使用实体图标或 `entity-picture`。                   |
| `force_icon`            | boolean | 可选                            | `true` 或 `false` (默认)                     | 优先显示图标而非 `entity-picture`。                                                           |
| `show_state`            | boolean | 可选                            | `true` 或 `false` (默认)                     | 显示或隐藏 `entity` 的当前状态。                                                                 |
| `show_name`             | boolean | 可选                            | `true` (默认) 或 `false`                     | 显示或隐藏实体的名称。                                                                            |
| `show_icon`             | boolean | 可选                            | `true` (默认) 或 `false`                     | 显示或隐藏图标。                                                                                          |
| `hide_target_temp_low`  | boolean | 可选 (仅适用于支持 `target_temp_low` 的实体) | `true` 或 `false` (默认) | 若 `entity` 支持，则隐藏目标温度下限控制。                                                          |
| `hide_target_temp_high` | boolean | 可选 (仅适用于支持 `target_temp_high` 的实体)| `true` 或 `false` (默认) | 若 `entity` 支持，则隐藏目标温度上限控制。                                                         |
| `state_color`           | boolean | 可选                            | `true` 或 `false` (默认)                     | 当空调实体开启时应用固定的背景色。                                                              |
| `step` | number | 可选 | 任意数字 | 温度步长。 |
| `min_temp` | number | 可选 | 任意数字 | 最低温度。 |
| `max_temp` | number | 可选 | 任意数字 | 最高温度。 |
| `button_action` | object | 可选 | `tap_action`、`double_tap_action` 或 `hold_action`，参见[动作](#点击双击和长按动作) | 允许更改按钮点击时的默认动作。 |
| `tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义点击图标时的动作类型，若未定义则使用 `more-info`。 |
| `double_tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义双击图标时的动作类型，若未定义则使用 `none`。 |
| `hold_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义长按图标时的动作类型，若未定义则使用 `more-info`。 |                              |
| `main_buttons_position` | string | 可选 | `default` 或 `bottom` | 将空调操作按钮移到底部 (固定) |
| `main_buttons_full_width` | boolean | 可选 | `true` 或 `false` | 使底部操作按钮全宽显示 (默认：位置为 `bottom` 时为 `true`) |
| `main_buttons_alignment` | string | 可选 | `end` (默认)、`center`、`start`、`space-between` | 非全宽时底部操作按钮的对齐方式 |
| `card_layout` | string | 可选 | `normal` (非分区视图下的默认值)、`large` (分区视图下的默认值)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，参见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |
| `sub_button`            | object  | 可选                            | 参见[子按钮](#子按钮)                | 添加固定在右侧的自定义按钮。适用于空调模式选择菜单。                                  |

</details>

<details>

<summary><b>CSS 变量 (参见 <a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 描述 |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | 空调卡片中受支持元素的主背景色 |
| `--bubble-climate-border-radius` | `px` | 空调卡片中受支持元素的边框半径 |
| `--bubble-climate-button-background-color` | `color` | 空调卡片按钮的背景色 |
| `--bubble-climate-icon-border-radius` | `px` | 空调卡片图标容器的边框半径 |
| `--bubble-state-climate-fan-only-color` | `color` | 仅送风状态的叠加颜色 |
| `--bubble-state-climate-dry-color` | `color` | 除湿状态的叠加颜色 |
| `--bubble-state-climate-cool-color` | `color` | 制冷状态的叠加颜色 |
| `--bubble-state-climate-heat-color` | `color` | 制热状态的叠加颜色 |
| `--bubble-state-climate-auto-color` | `color` | 自动状态的叠加颜色 |
| `--bubble-state-climate-heat-cool-color` | `color` | 冷暖状态的叠加颜色 |
| `--bubble-climate-accent-color` | `color` | 空调卡片的强调色 |
| `--bubble-climate-box-shadow` | 见[盒阴影](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 空调容器的盒阴影。 |

</details>


#### 示例

<details>

<summary>一个带 HVAC 模式下拉菜单的空调卡片</summary>

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

## 日历

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

此卡片可让你显示日历实体。其内容可滚动，方便你浏览即将到来的日程。

### 日历选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称                | 类型    | 要求  | 支持的选项                               | 描述                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | 可选     | 任意数字 (最小值：1)                        | 从现在起到第 N 天结束，要获取日程的天数 (默认：7) |
| `entities`          | object  | **必填** | 一个日历实体对象 (见下文)            | 要控制的实体 (例如 `calendar.main_calendar`)。                                 |
| `entities.entity`   | string  | **必填** | 一个日历实体                               | 要显示的日历实体                                                          |
| `entities.color`    | string  | 可选     | 一个颜色                                         | 日历色块的自定义颜色。若未定义，将自动选择颜色 |
| `days`              | number  | 可选     | 任意数字 (最小值：1)                         | 从现在起到第 N 天结束，要获取日程的天数 (默认：7) |
| `limit`             | number  | 可选     | 一个数字                                        | 卡片上显示的日程数量                                  |
| `show_end`          | boolean | 可选     | `true` 或 `false` (默认)                     | 显示或隐藏日程的结束时间                                                    |
| `show_progress`     | boolean | 可选     | `true` (默认) 或 `false`                     | 显示或隐藏日程进度条                                                     |
| `show_started_events`| boolean | 可选     | `true` (默认) 或 `false`                     | 显示或隐藏正在进行中的日程。跨多天的日程按天逐一判断，因此只有正在进行的那一天会被隐藏，之后的日子仍然可见 |
| `scrolling_effect`  | boolean | 可选 | `true` (默认) 或 `false` | 当内容超出容器大小时允许文字滚动 |
| `event_action` | object | 可选 | `tap_action`、`double_tap_action` 或 `hold_action`，参见[动作](#点击双击和长按动作) | 允许为日程点击添加动作。 |
| `tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义点击日期时的动作类型，若未定义则使用 `none`。 |
| `double_tap_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义双击日期时的动作类型，若未定义则使用 `none`。 |
| `hold_action` | object | 可选 | 参见[动作](#点击双击和长按动作) | 定义长按日期时的动作类型，若未定义则使用 `none`。 |
| `card_layout` | string | 可选 | `normal` (非分区视图下的默认值)、`large` (分区视图下的默认值)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，参见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |
| `sub_button` | object | 可选 | 参见[子按钮](#子按钮) | 添加固定在右侧的自定义按钮 |

</details>

<details>

<summary><b>CSS 变量 (参见 <a href="#样式">样式</a>)</b></summary>

| 变量                                  | 期望值 | 描述                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | 日历卡片中受支持元素的主背景色  |
| `--bubble-calendar-border-radius`         | `px`           | 日历卡片中受支持元素的边框半径 |
| `--bubble-calendar-height`                | `px`           | 日历卡片的高度                                        |

</details>

#### 示例

<details>

<summary>一个限制日程数量的日历卡片</summary>

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

<summary>一个带结束时间和进度条的日历卡片</summary>

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


## 分隔线

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

这张卡片是一条简单的分隔线，用于将弹窗划分为不同的类别/区块，例如灯光、设备、卷帘、设置、自动化……

### 分隔线选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `name` | string | 可选，但建议设置 | 任意字符串 | 分隔线的名称 |
| `icon` | string | 可选，但建议设置 | 任意 `mdi:` 图标 | 分隔线的图标 |
| `card_layout` | string | 可选 | `normal` (未使用区块视图时默认)、`large` (使用区块视图时默认)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |
| `sub_button` | object | 可选 | 见[子按钮](#子按钮) | 添加固定在右侧的自定义按钮 |

</details>

<details>

<summary><b>CSS 变量 (见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | 分隔线中线条的背景颜色 |

</details>

#### 示例

<details>

<summary>“卷帘”区块的分隔线</summary>

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

## 空列

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

这张卡片用于填补空列。如果你的弹窗中有一个只包含一张卡片的 `horizontal-stack`，这会很有用。看看这张截图右下角的位置就（几乎看不）明白了。

### 空列选项

这张卡片没有任何选项，也不支持[样式](#样式)，不过它支持 HA 区块的布局选项。

#### 示例

<details>

<summary>水平堆叠中的一个空列</summary>

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

## 纯子按钮

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

这张卡片专门用于放置子按钮。它非常适合用作菜单、快捷操作、信息提示条，或页面底部的固定页脚。

> [!IMPORTANT]  
> 这张卡片使用新的子按钮结构。请使用 `sub_button.bottom` 来定义按钮，`sub_button.main` 部分会被忽略。

### 纯子按钮选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **必填** | 见[子按钮](#子按钮) | 使用 `bottom` 部分定义子按钮 |
| `hide_main_background` | boolean | 可选 | `true` 或 `false` (默认) | 移除卡片背景 |
| `footer_mode` | boolean | 可选 | `true` 或 `false` (默认) | 将卡片固定在页面底部 |
| `footer_full_width` | boolean | 可选 | `true` 或 `false` (默认) | 让页脚全宽显示 (100%) |
| `footer_width` | number | 可选 | 任意数字 | `footer_full_width` 为 `false` 时的页脚宽度 (像素) |
| `footer_bottom_offset` | number | 可选 | 任意数字 | 距离页面底部的距离，单位为像素 (默认：`16`) |
| `card_layout` | string | 可选 | `normal` (未使用区块视图时默认)、`large` (使用区块视图时默认)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的样式布局，见[卡片布局](#卡片布局) |
| `rows` | number | 可选 | 任意数字 | 行数 (高度) (例如 `2`) |

</details>

<details>

<summary><b>CSS 变量 (见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width` 为 `false` 时的页脚宽度 |
| `--bubble-footer-bottom` | `px` | 页脚的底部偏移量 |
| `--bubble-footer-box-shadow` | 见[盒阴影](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 页脚容器的盒阴影 |

</details>

#### 示例

<details>

<summary>信息提示条 (如截图所示)</summary>

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

<summary>固定的底部页脚菜单</summary>

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

## 子按钮

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

在每张支持该选项的卡片中，你都可以添加子按钮来进一步自定义卡片。例如，你可以创建一个用来控制扫地机器人、天气卡片，或几乎任何你能想到的东西的按钮。这些子按钮支持点击动作，也支持大部分按钮选项。

子按钮现在支持三种类型：**默认 (按钮)**、**滑块**和**下拉菜单 / 选择**。你可以在同一张卡片中混用不同类型，将子按钮放在顶部或底部，并将它们组织成分组以实现更高级的布局。

#### 子按钮的排布与分组

<details>

<summary><b>子按钮结构 (main / bottom + 分组)</b></summary>

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

**说明：**
- `main` 和 `bottom` 是两个独立的部分。底部子按钮固定在卡片底部。
- `main_layout` 和 `bottom_layout` 接受 `inline` (默认) 或 `rows`，用于将分组垂直堆叠。
- 分组是包含 `group` 数组以及可选 `buttons_layout` (`inline` 或 `column`) 的对象。
- `justify_content` 仅适用于**底部分组** (`start`、`center`、`end`、`fill`)。
- 当存在底部子按钮时，卡片布局会自动切换为 `large`，除非你显式设置了其他布局。
- 旧版的 `sub_button` 数组形式仍受支持，会被当作 `main` 部分处理。

</details>

### 子按钮选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 要求 | 支持的选项 | 说明 |
| --- | --- | --- | --- | --- |
| `entity` | string | 可选 | 任意实体 | 要控制的实体 |
| `name` | string | 可选 | 任意字符串 | 子按钮的名称，若未定义则显示实体名称 |
| `icon` | string | 可选 | 任意 `mdi:` 图标 | 子按钮的图标，若未定义则显示实体图标或实体图片 |
| `force_icon` | boolean | 可选 | `true` 或 `false` (默认) | 即便有实体图片可用，也强制显示图标 |
| `sub_button_type` | string | 可选 | `default`、`slider` 或 `select` | 选择子按钮类型 |
| `show_background` | boolean | 可选 | `true` (默认) 或 `false` | 为子按钮显示背景，其颜色会根据实体状态变化 |
| `state_background` | boolean | 可选 | `true` (默认) 或 `false` | 当实体状态为 `on` 时使用状态颜色 |
| `light_background` | boolean | 可选 | `true` (默认) 或 `false` | 在可用的情况下，为背景使用灯光颜色 |
| `show_state` | boolean | 可选 | `true` 或 `false` (默认) | 显示或隐藏 `entity` 的状态 |
| `show_name` | boolean | 可选 | `true` 或 `false` (默认) | 显示或隐藏名称 |
| `show_icon` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏图标 |
| `show_last_changed` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后变化时间 |
| `show_last_updated` | boolean | 可选 | `true` 或 `false` (默认) | 显示 `entity` 的最后更新时间 |
| `show_attribute` | boolean | 可选 | `true` 或 `false` (默认) | 在 `name` 下方显示 `entity` 的一个属性 |
| `attribute` | string | 可选 (`show_attribute` 设为 `true` 时必填) | `entity` 的一个属性 | 要显示的属性 (例如 `brightness`) |
| `select_attribute` | string | 可选 | `entity` 的属性列表 (见上方支持的选项) | 该属性列表会在点击时打开一个下拉菜单 (例如 `effect_list`) |
| `show_arrow` | boolean | 可选 | `true` (默认) 或 `false` | 显示或隐藏选择类子按钮的下拉箭头 |
| `scrolling_effect` | boolean | 可选 | `true` (默认) 或 `false` | 当内容超出容器尺寸时允许文字滚动 |
| `tap_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义点击子按钮时的动作类型，若未定义则使用 `more-info` |
| `double_tap_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义双击子按钮时的动作类型，若未定义则使用 `none` |
| `hold_action` | object | 可选 | 见[动作](#点击双击和长按动作) | 定义长按子按钮时的动作类型，若未定义则使用 `more-info` |
| `fill_width` | boolean | 可选 | `true` 或 `false` | 填满可用宽度 (默认：main 部分为 `false`，bottom 部分为 `true`) |
| `width` | number 或 string | 可选 | 任意数字或 CSS 长度 | 自定义宽度 (main 部分默认单位为 `px`，bottom 部分默认为 `%`) |
| `custom_height` | number | 可选 | 任意数字 | 自定义高度，单位为像素 |
| `content_layout` | string | 可选 | `icon-left` (默认)、`icon-top`、`icon-bottom`、`icon-right` | 子按钮内图标的位置 |
| `always_visible` | boolean | 可选 | `true` 或 `false` (默认) | **仅限滑块。** 始终显示滑块，而不是点击后才展开 |
| `show_button_info` | boolean | 可选 | `true` 或 `false` (默认) | **仅限滑块。** 启用 `always_visible` 时显示图标/名称/状态 |
| `visibility` | object 或 list | 可选 | 见[条件](#条件) | 根据条件显示或隐藏子按钮 |
| `hide_when_parent_unavailable` | boolean | 可选 | `true` 或 `false` (默认) | 当父卡片实体不可用时隐藏该子按钮 |
| `css_class` | string | 可选 | 任意字符串 | 子按钮上额外的一个 CSS 类，让你无论它叫什么名字都能在你的[样式](#样式)中定位到它 (例如 `My value` 会得到 `.my-value`) |

</details>

<details>

<summary><b>滑块子按钮选项 (与按钮滑块相同)</b></summary>

<br>

滑块子按钮支持与按钮滑块相同的滑块选项，包括：
`min_value`、`max_value`、`step`、`tap_to_slide`、`relative_slide`、`read_only_slider`、`slider_live_update`、`slider_fill_orientation`、`slider_value_position`、`invert_slider_value`、`light_slider_type`、`cover_slider_type`、`hue_force_saturation`、`hue_force_saturation_value`、`use_accent_color`、`allow_light_slider_to_0`、`light_transition`、`light_transition_time`。

</details>

<details>

<summary><b>CSS 变量 (见<a href="#样式">样式</a>)</b></summary>

| 变量 | 期望值 | 说明 |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | 子按钮的圆角半径 |
| `--bubble-sub-button-background-color` | `color` | 子按钮的背景颜色 |
| `--bubble-sub-button-outline` | `box-shadow` | 仅当子按钮或滑块与其背后的卡片颜色相同、会因此看不见时，才为它添加的轮廓 (设为 `none` 可移除) |
| `--bubble-sub-slider-border-radius` | `px` | 滑块子按钮的圆角半径 |
| `--bubble-sub-slider-background-color` | `color` | 滑块子按钮的背景颜色 |
| `--bubble-sub-slider-height` | `px` | 常显滑块子按钮的高度 |
| `--bubble-sub-slider-outline` | `box-shadow` | 仅滑块子按钮的轮廓，未设置时回退到 `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | 明亮子按钮背景上的文字颜色 |

</details>

#### 示例

<details>

<summary>带有若干子按钮的按钮，用来制作一张扫地机器人卡片 (如截图所示)</summary>

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

<summary>一个按钮滑块，带有一个显示亮度的子按钮和一个用于切换灯光的子按钮 (如截图所示)</summary>

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

<summary>一个显示室内外温度以及今明两天天气的按钮 (含截图)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> 我运气不好，天天都是阴天，不过所有图标都会根据天气变化。

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

## 卡片布局

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card 完全支持 Home Assistant 的分区视图，你可以更改卡片布局让卡片变大，也可以更改卡片在分区视图中应占用的列数或行数 (仅适用于支持该选项的卡片)。这些布局在其他所有视图类型中同样受支持。

<details>

<summary><b>可用的卡片布局</b></summary>

| 布局 | 说明 |
| --- | --- |
| `normal` | 常规布局 (未针对分区视图优化) |
| `large` | 更大的布局，会根据分区视图中选择的行数进行缩放 (针对分区视图优化) |
| `large-2-rows` | 带有 2 行子按钮的更大布局，会根据分区视图中选择的行数进行缩放 (针对分区视图优化) |
| `large-sub-buttons-grid` | 该布局会以网格形式显示子按钮，`rows` 必须设置为至少 `2`。

</details>

#### 示例

<details>

<summary>一个显示能源统计信息、带 2 行子按钮的大号按钮 (含截图)</summary>

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

<summary>一个带多行、共 12 个子按钮的大号按钮</summary>

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

## 条件

有些选项由条件驱动，其写法与 Home Assistant [条件卡片](https://www.home-assistant.io/dashboards/conditional/)的条件完全相同：

- [子按钮](#子按钮)上的 `visibility`，用于显示或隐藏它
- [弹窗](#pop-up)上的 `trigger`，用于在条件满足时打开它
- [模板](#模板)中的 `checkConditionsMet(conditions, hass)`，当你需要在自己的代码里得到答案时

Home Assistant 的每一种条件类型都会被求值：`state`、`numeric_state`、`screen`、`user`、`time`、`location`、`template`，以及 `and`、`or` 和 `not` 分组。Home Assistant 条件构建器中的条件同样有效，也就是那些以其域命名的条件，例如 `sun.is_up`、`light.is_on`、`zone.in_zone` 或 `temperature.is_value`，连同它们的 `target`、`options`、`behavior` 和 `for` 设置。

<details>

<summary><b>示例</b></summary>

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
> 条件是在你的浏览器中求值的，因此少数需要 Home Assistant 服务器的条件无法做到精确：日出和日落是从 `sun.sun` 实体读取的，而不是重新计算，`for` 的持续时间则从最后一次状态变化开始计量，没有 recorder 的历史记录。
>
> `view_columns` 会被接受但始终通过，因为为你的视图排布列的从来都不是 Bubble Card。Bubble Card 不认识的条件类型会在你的浏览器控制台里报告一次，而不是悄无声息地失败，这样你就能分辨出是拼写错误还是缺少的功能。

<br>

---

<br>

## 点击、双击和长按动作

在支持该选项的卡片上，你也可以使用 Home Assistant 默认的点击动作、双击动作和长按动作。例如，你可以在长按某个按钮图标时显示“更多信息”窗口，或在按下某个子按钮时运行某项服务。

**注意：当配置了 `double_tap_action` 时，常规的 `tap_action` 会有 200 毫秒的延迟，以便检测是否发生了双击。
如果不希望出现这个延迟，请将 `double_tap_action` 设置为 `none` 以禁用双击处理。**

### 动作选项

<details>

<summary><b>选项 (YAML + 说明)</b></summary>

| 名称 | 类型 | 支持的选项 | 说明 |
| --- | --- | --- | --- |
| `action` | string | `more-info`、`toggle`、`call-service`、`navigate`、`url`、`fire-dom-event`、`none` | 要执行的动作 |
| `target` | object |  | 仅适用于 `call-service`。遵循 [Home Assistant 语法](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | 仪表板的任意路径 | 当 action 设置为 navigate 时，要跳转到的路径 (例如 `'#kitchen'` 用于打开弹窗) |
| `url_path` | string | 任意链接 | 当 `action` 为 `url` 时，点击后要打开的 URL (例如 `https://www.google.com`) |
| `service` | string | 任意服务 | 当 `action` 设置为 `call-service` 时要调用的服务 (例如 `media_player.media_play_pause`) |
| `data` 或 `service_data` | object | 任意服务数据 | 当 `action` 设置为 `call-service` 时要包含的服务数据 (例如 `entity_id: media_player.kitchen`) |
| `confirmation` | object | 参见[确认](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | 显示一个确认弹窗 (不是 Bubble Card 的弹窗)，会覆盖默认的 `confirmation` 对象 |

</details>

#### 示例

<details>

<summary>一个用于打开弹窗的按钮</summary>

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

## 样式

你可以通过四种方式添加自定义样式来修改所有卡片的 CSS，**无需使用 card-mod**:

- 在编辑器中，进入你想修改的卡片，然后前往 _样式选项 > 自定义样式和 JS 模板_，添加你的自定义样式 (可参考下方的技巧和示例)。
- 在编辑器中 (或者在 [YAML](#模块) 中)，进入你想修改的卡片，然后前往 _模块_，创建一个新模块 (它将对所有卡片可用)，或者前往 **Module Store** 安装任意可用的模块 (关于模块的更多细节可在[下方](#模块)找到)。
- 在[主题](https://www.home-assistant.io/integrations/frontend/#defining-themes)文件中，以 YAML 形式添加 CSS 变量 (这些变量可在上方各卡片的文档中找到)。这样可以实现全局修改。

  <details>
  
  <summary>示例</a></summary>
  
  <br>

  不要复制 `Bubble:` 这一行，它是你所使用主题的名称。你还需要去掉变量名前面的 `--`。

  修改后，你需要运行 [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) 动作来刷新主题。

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
  
- 在 YAML 中添加 `styles: |`，后面跟上你的自定义样式 (可参考下方的技巧和示例)。

> [!TIP]  
> **要了解哪些样式类可以修改**，你可以查看本仓库中的 [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) 文件夹。在每个卡片文件夹中，你会找到一个名为 `styles.css` 的文件，其中包含了所有已应用的样式。这样可以实现比 CSS 变量多得多的可能性，但需要为每张卡片单独添加。
> 
> 你还可以找到许多来自[社区的示例](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards)，或者花点时间在 [Home Assistant 论坛](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/)上搜索找到一些示例。
>
> 用于 Home Assistant 的 Bubble 主题 (就像截图中那样) 可以在[这里](https://github.com/Clooos/Bubble)找到。
>
> 我的 [YouTube 频道](https://www.youtube.com/@cloooos)即将推出一段教程视频！

> [!IMPORTANT]  
> 请注意，对于某些已经定义过的 CSS 样式，你可能需要添加 `!important;` (见下方示例)。

> [!TIP]  
> 子按钮可以通过基于名称的类进行定位。例如，一个名为“My sub-button”的子按钮可以用 `.my-sub-button` 来设置样式。滑块子按钮还暴露了 `.bubble-sub-button-slider-1`、`.bubble-sub-button-slider-2` 等类。
>
> 基于名称的类会在你重命名子按钮时改变，名称被翻译时它也会跟着变。在子按钮上设置 `css_class`，就能得到一个属于你自己的类，无论名称是什么、语言是什么它都不会变。

#### 示例

<details>

<summary>更改任意 Bubble Card 的字体大小</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>更改水平按钮堆叠中单个按钮的背景颜色</summary>

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

<summary>更改卡片的背景颜色</summary>

<br>

这一条适用于除弹窗外的所有 Bubble Card 类型:

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

这一条在按钮卡片中实现同样的效果 (对弹窗的标题栏也有效):

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

要更改状态为 `on` 时的颜色，请参考下方的样式模板。

</details>

<details>

<summary>更改按钮滑块的颜色</summary>

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

<summary>更改分隔线的线条颜色</summary>

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

<summary>更改图标的颜色</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

针对水平按钮堆叠的图标。
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>更改图标容器的背景颜色</summary>

<br>

这一条适用于除弹窗外的所有 Bubble Card 类型:

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

这一条在弹窗标题栏中实现同样的效果:

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>更改子按钮的大小 (非常适合大号布局)</summary>

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

<summary>更改第二个子按钮的背景颜色</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>更改图标的大小</summary>

<br>

针对主图标。

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

针对子按钮图标。

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>在子按钮中使用图片而非图标</summary>

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

只需将该图片上传到 Home Assistant “www” 文件夹下的一个“pictures”文件夹 (或你想要的任意名称) 中即可。

</details>

<details>

<summary>进阶示例：创建一行水平排列的子按钮 (含截图)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> 我真的很喜欢这个效果，我把它用作我仪表板的头部。

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

## 模板

**Bubble Card 不支持 Jinja 模板**，但高级用户可以直接在 [自定义样式](#样式) 中用 JS 添加模板。举例来说，这可以让你动态更改元素的图标、文本或颜色，根据条件显示或隐藏某个元素 (比如子按钮)，或者几乎任何基于状态、属性等的操作。

> [!TIP]  
> 关于 JS 模板的更多信息请看[这里](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)。我的建议是**始终查看一下浏览器控制台**，确保一切正常运行。

> [!IMPORTANT]  
> **所有不修改 CSS 属性的模板都必须放在最后！比如修改图标、文本或任何元素。**

#### 可用的变量和函数

<details>

<summary>变量</summary>

<br>

在大多数卡片中，你可以使用以下变量：

- `state` 会返回你定义的 `entity` 的状态。
  
- `entity` 会返回你在这个例子中定义的实体，比如 `switch.test`。

- `icon` 可以像这样使用，来更改图标：`icon.setAttribute("icon", "mdi:lightbulb")`。

- `subButtonState[0]` 会返回你定义的第一个子按钮 `entity` 的状态，`[0]` 是第一个子按钮的状态，`[1]` 是第二个……
  
- `subButtonIcon[0]` 可以像这样使用，来更改第一个子按钮的图标：`subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`，`[0]` 是第一个子按钮的图标，`[1]` 是第二个……
  
- `card` 会返回 DOM 中的卡片元素。
  
- `hass` 是一个高级变量，可以让你实现更多控制，例如你可以像这样返回 `light.kitchen` 的状态：`hass.states['light.kitchen'].state`，或者像这样返回一个属性：`hass.states[entity].attributes.brightness`。

- `this` 会返回许多与你的设置和仪表盘相关的有用信息，只有在你清楚自己在做什么时才使用它。

</details>

<details>

<summary>函数</summary>

<br>

你可以使用所有全局 JS 函数，此外还可以使用：

- `getWeatherIcon` 可用于根据返回天气的状态来返回天气图标。例如，你可以这样写：`${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`，将第三个子按钮的图标更改为今天的天气图标，`.forecast[1]?.condition` 则是明天的……

  你需要为此创建一个模板传感器。以下是你可以添加到 `configuration.yaml` 中的内容：
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
- `checkConditionsMet(conditions, hass)` 会在一组[条件](#条件)满足时返回 `true`，例如 `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`。
- `hass.formatEntityState(state)` 可用于翻译一个状态 (也可以用来获取状态单位，而无需手动添加)。
- `hass.formatEntityAttributeValue(state, "attribute")` 可用于翻译一个属性 (也可以用来获取状态单位，而无需手动添加)。

</details>

#### 示例

你可以在下面找到很多示例，此外你还可以在我的 [Patreon 页面](https://www.patreon.com/c/Clooos) 上找到非常高级的模板，比如其中一个 (我最喜欢的) 可以在卡片图标周围放置多达四个条件徽章。这也是了解 Bubble Card 自定义样式和模板全部可能性的好方法！

<details>
<summary>来自我 Patreon 页面的示例</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">为任意卡片添加类似 Home Assistant 的徽章</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">不使用任何实体，在分隔线中显示已格式化的日期和时间</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">用两行显示一个子按钮的状态</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">自定义选择子按钮内的标签和图标</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">添加一个仅在需要时才出现的常驻提醒弹窗</a>
</p>

<br>

</details>

<details>

<summary>更改一个按钮的背景颜色，使其在 <code>off</code> 时为红色，在 <code>on</code> 时为蓝色</summary>

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

<summary>根据实体更改水平按钮堆叠中某个按钮的背景颜色</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>有条件地显示/隐藏一个子按钮</summary>

<br>

以下示例仅在我的吸尘器卡住时显示第一个子按钮。
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

以下示例在电量低于 10% 时显示一个子按钮。适合用在显示“电量低”的子按钮上。
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>有条件地更改图标或子按钮图标</summary>

<br>

以下示例仅在吸尘器卡住时更改按钮图标。
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

以下示例仅在吸尘器卡住时更改第一个子按钮的图标。
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>有条件地更改图标或子按钮图标的颜色</summary>

<br>

以下示例根据按钮的状态更改按钮图标的颜色。
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

以下示例根据状态更改子按钮图标的颜色。`.bubble-sub-button-1` 是第一个子按钮，如果你想更改其他子按钮的图标，请替换 `1`。
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>有条件地为风扇图标添加动画</summary>

<br>

以下示例在风扇为 `on` 时旋转按钮图标。
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

<summary>为文本 (如名称或状态) 添加模板</summary>

<br>

以下示例根据你的天气，将按钮名称/状态更改为“现在是晴天”。
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
或者应用于子按钮时：
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


如果你想为状态 (`.bubble-state`) 添加模板，不要开启 `show_state: true`，只需开启 `show_attribute: true`，不指定任何属性即可。

</details>

<details>

<summary>高级示例：在弹窗打开时更改子按钮的颜色</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>高级示例：根据翻译成你的语言的状态，为分隔线名称添加模板</summary>

<br>

你可以使用 `hass.formatEntityState(state)` 来翻译一个状态，使用 `hass.formatEntityAttributeValue(state, "attribute")` 来翻译一个属性。

以下示例根据天气更改名称和图标，法语中的“Nuageux”意为“多云”。

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

## 模块

模块是一项强大的功能，可以让你保存、复用并在所有 Bubble Card 卡片之间共享你的自定义样式和模板。你不必将同样的代码反复复制粘贴到多张卡片中，而是可以创建一个模块，并在需要的地方应用它。这让管理仪表盘的外观和风格变得更轻松、更高效。

但这项功能远不止于此，它还能让你在 Bubble Card 编辑器中亲手添加真正的功能，使用所有默认的 [Home Assistant 表单](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) 选项！  
对象选择器也已改进，可以显示实时变更并正确支持属性。

模块还可以在内置[实体建议](#实体建议)旁边响应 Home Assistant 的卡片选择器：对于可以事先描述的卡片使用 `suggestions`，当它们必须根据你的安装环境计算时则使用 `suggestions_code`，例如由所选实体所属区域中的所有实体构建的一个弹窗。这两个键的说明都在[这里](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions)。

你还可以浏览 **Module Store**，寻找并安装[由社区创建的模块](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)，或分享你自己的作品！

> [!TIP]
> 模块的代码运行方式与卡片 `styles` 部分中的代码完全相同。[模板](#模板)一节中的所有变量和函数在这里同样可用。

<br>

### 初始设置

> [!IMPORTANT]
> 从 v3.1.0 开始，Bubble Card Tools 是模块推荐使用的存储后端。旧版的模板传感器方式在现有配置中仍然可用，但新模块和 Module Store 功能在 Bubble Card Tools 上才能得到最佳支持。

Bubble Card Tools 集成可启用模块编辑器和 Module Store，并将模块以独立的 YAML 文件形式存储。现有模块会被自动迁移。

安装和配置步骤在这里说明：

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### 模块编辑器

你可以从任意卡片的设置中，在 **模块** 部分打开模块编辑器。编辑器提供两个主要标签页：

#### “我的模块”标签页

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

此标签页显示你已安装的所有模块，你可以在这里：

- **应用** 现有模块到当前卡片
- **创建** 一个全新的模块
- 在实时预览下 **编辑** 现有模块
- **删除** 不再需要的模块
- **搜索** 和 **排序** 模块 (按字母顺序、最近使用、启用优先)
- **设为全局状态**，让模块自动应用到所有卡片
- **导入/导出** 模块以便备份或分享
- 在模块编辑器的 **可选：实体建议** 下**编写实体建议**，让你的模块出现在 Home Assistant 的卡片选择器中。规则和计算建议都会在你书写时被检查，其中有错误就无法保存，预览会显示为你所选的任意实体建议的卡片

#### Module Store 标签页

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

此标签页会显示[社区提供的所有可用模块](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)，你可以在这里：

- **浏览** 所有社区创建的模块
- 按名称、兼容性或关键词 **搜索** 并筛选模块
- 一键 **安装** 模块
- 在有新版本时 **更新** 已安装的模块

> [!TIP]
> 在编辑器中，你可以启用不受支持的模块，以测试尚未标记为与某种卡片类型兼容的模块。

<br>

### 如何使用模块

#### 创建新模块

<details>

<summary>点击展开</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. 打开任意卡片的编辑器，展开 **模块** 部分。
2. 点击 **创建新模块**。
3. 填写模块信息。
4. 在 **代码** 编辑器中编写你的 CSS 和/或 JavaScript 模板代码。
5. (可选) 在 **编辑器** 部分创建自定义配置界面 (就像上方截图中的颜色选择器一样，完整文档见[这里](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md))。
6. (可选) 编写你的**实体建议**，让你的模块出现在 Home Assistant 的卡片选择器中。该面板会在你输入时检查内容，其预览会显示为你所选实体建议的卡片本身。
7. 点击 **保存**。

现在，你的模块可以在你的任意卡片上使用了！

<br>

</details>

#### 将模块应用到卡片

<details>

<summary>点击展开</summary>

<br>

- **通过编辑器：**

  - 打开你想应用模块的卡片的编辑器。
  - 展开 **模块** 部分。
  - 从列表中点击你想应用的模块。
  - 在“应用到”下方，点击“此卡片”。模块现已启用。你可以为同一张卡片应用多个模块。

- **通过 YAML：**

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

#### 全局应用模块

<details>

<summary>点击展开</summary>

<br>

你可以将模块设置为自动应用到所有 Bubble Card 卡片：

**这对带有编辑器的模块不可用，因为它们需要特定的配置才能生效。**

- **通过编辑器：**

  - 在模块编辑器中，在 **我的模块** 标签页找到你的模块。
  - 切换模块名称旁的 **所有卡片** 按钮。
  - 该模块现在会自动应用到所有卡片。
 
- **通过 YAML：**

  在你的模块 YAML 配置中 (在 `bubble-modules.yaml` 里)，只需添加 `is_global: true`。

<br>

</details>

#### 将单张卡片排除在全局模块之外

<details>

<summary>点击展开</summary>

<br>

如果你有一个全局模块，但想在某张特定卡片上排除它：

- **通过编辑器：**
  
  - 在卡片的 **模块** 部分，你会看到已列出的全局模块。
  - 点击该全局模块，关闭“此卡片”即可将其排除在这张特定卡片之外。

- **通过 YAML：**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### 将你的模块分享到 Module Store

<details>

<summary>点击展开</summary>

<br>

要将你的模块分享到 Module Store，在模块编辑器底部的“导出模块”中，点击“Copy for GitHub”，然后将内容粘贴到 [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) 分类下的新讨论中。**编辑描述** (如有需要)、**示例** (面向 YAML 用户)，并记得**至少附上一张截图**，以便展示在 Module Store 中。

**你的模块会在此之后立即可用** (在商店刷新后)，所以请务必仔细检查一切是否书写正确、模块是否按预期工作。当然，分享之后你仍然可以随时编辑/更新该模块。

<br>

</details>

#### 版本管理

<details>

<summary>点击展开</summary>

<br>

Module Store 会自动检查已安装模块的更新。有可用更新时：

1. 你会在 **Module Store** 标签页看到更新提示。
2. 在有可用更新的模块上点击 **更新**。
3. 在 Module Store 中确认更新。

<br>

</details>

#### 定义支持的卡片类型

<details>

<summary>点击展开</summary>

<br>

有些模块可能并非与所有卡片类型都兼容。你可以指定某个模块支持哪些卡片。  
如果你希望某个模块与**所有卡片**都兼容，只需省略 `supported` 字段 (或在编辑器中使用**所有卡片**选项)。

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

### 示例

<details>
<summary>基础样式模块</summary>

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
<summary>带自定义配置的模块</summary>

<br>

此模块可在[这里](https://github.com/Clooos/Bubble-Card/discussions/1231)获取。

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

更多示例可以在 Module Store 中找到，或者点击[这里](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)。

<br>

---

<br>

## 本地化

Bubble Card 说你的语言。它的编辑器已被翻译成 Home Assistant 支持的 64 种语言，凡是 Home Assistant 已经有对应说法的地方，都会沿用它自己的措辞，这样你在两个界面里读到的是相同的术语。

在编辑器底部、版本号旁边，有一个 **自动** 开关会跟随你的 Home Assistant 语言。把它关掉，整个编辑器就会回到英文，这在照着教程操作或反馈问题时很方便。你的选择会记在浏览器里。

这份文档同样被翻译了，[共 62 种语言](languages.md)。这些页面对所有人开放，因此与你自己的 Home Assistant 不一致的措辞只需点几下就能修正。英文版仍然是内容本身的参考。

<br>

---

<br>

## 帮助

如果遇到任何异常情况，欢迎提交 issue。

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

对 Bubble Card 有疑问或想法吗？想分享你的仪表板或新发现吗？你可以前往 Home Assistant 论坛、Bubble Card 的 subreddit，或者 GitHub Discussions 板块。

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## 参与贡献

欢迎任何形式的贡献！无论是修复 bug、新增功能、翻译，还是改进文档，都欢迎提交 pull request。

在开始之前，请阅读[开发者指南](DEVELOPERS.md)，其中介绍了如何搭建本地环境、构建项目以及测试你的改动。

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## 捐赠

我把大部分业余时间都投入到把这个项目做到最好。所以如果你喜欢我的工作，任何捐赠都是表达支持的好方式 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

感谢每一位支持我的人，你们都是我最大的动力！

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
