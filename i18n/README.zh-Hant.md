<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> 本頁面為自動翻譯。如有疑義，請以[英文原始文件](../README.md)為準。發現句子讀起來不對嗎？歡迎任何協助，[修正本頁](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.zh-Hant.md)只需一分鐘：GitHub 會處理 fork 與 pull request。先在此感謝您！🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[以其他語言閱讀本頁](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card 是一套為 Home Assistant 打造的極簡且可自訂的卡片集合,擁有現代化的彈出視窗,並內建整合了超過 100 個社群製作模組的 Module Store。

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## 目錄

**[`安裝`](#安裝)**  **[`設定`](#設定)**  **[`實體建議`](#實體建議)**  **[`彈出視窗`](#彈出視窗)**  **[`水平按鈕堆疊`](#水平按鈕堆疊)**  **[`按鈕`](#按鈕)**  **[`媒體播放器`](#媒體播放器)**  **[`窗簾`](#窗簾)**  **[`選擇`](#選擇)**  **[`空調`](#空調)**  **[`行事曆`](#行事曆)**  **[`分隔線`](#分隔線)**  **[`空白欄`](#空白欄)**  **[`純子按鈕`](#純子按鈕)**  **[`子按鈕`](#子按鈕)**  **[`卡片版面配置`](#卡片版面配置)**  **[`條件`](#條件)**  **[`動作`](#點擊雙擊與長按動作)**  **[`樣式`](#樣式)**  **[`範本`](#範本)**  **[`模組`](#模組)**  **[`在地化`](#在地化)**  **[`說明`](#說明)**  **[`貢獻`](#貢獻)**  **[`贊助`](#贊助)**

<br>

## 安裝

**Home Assistant 最低支援版本:** 2023.9.0

<details>

<summary>不使用 HACS</summary>

<br>

1. 從[最新發行版](https://github.com/Clooos/Bubble-Card/releases/latest)下載 `bubble-card.zip`
2. 將它解壓縮到你的 `<config>/www` 資料夾，你應該會得到 `bubble-card.js` 以及旁邊的一個 `translations` 資料夾（該資料夾存放編輯器的字典，沒有它編輯器就會一直維持英文）
3. 在你的儀表板上點擊右上角的圖示,然後點擊「編輯儀表板」
4. 再次點擊該圖示,然後點擊「管理資源」
5. 點擊「新增資源」
6. 複製並貼上以下內容:`/local/bubble-card.js?v=1`
7. 點擊「JavaScript 模組」,然後點擊「建立」
8. 返回並重新整理你的頁面
9. 現在你可以點擊右下角的「新增卡片」,搜尋「Bubble Card」
10. 每次更新該檔案後,你都需要編輯 `/local/bubble-card.js?v=1`,並將版本號改成更高的數字

如果無法正常運作,只需嘗試清除瀏覽器快取。

</details>

<details>

<summary>使用 HACS(建議)</summary>

<br>

這個方法讓你可以直接透過 Home Assistant Community Store 取得更新

1. 如果尚未安裝 HACS,請依照 [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) 上的說明下載
2. 依照 [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) 上的說明進行 HACS 初始設定
3. 在側邊欄前往「HACS」
4. 搜尋「Bubble Card」,或點擊下方的藍色按鈕
5. 點擊「下載」
6. 返回你的儀表板,點擊右上角的圖示,然後點擊「編輯儀表板」
7. 現在你可以點擊右下角的「新增卡片」,搜尋「Bubble Card」

如果無法正常運作,請嘗試清除瀏覽器/應用程式快取(必要時在你所有的裝置上都清除)。

#### 影片

你也可以到我的 YouTube 頻道觀看逐步教學影片。

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## 設定

所有選項都可以在 Home Assistant 編輯器中設定。不過你可以在下方的說明文件中找到更多細節與 YAML 內容。

<details>

<summary><b>主要選項(YAML + 說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `type` | string | **必要** | `custom:bubble-card` | 卡片的類型 |
| `card_type` | string | **必要** | `button`、`calendar`、`climate`、`cover`、`empty-column`、`horizontal-buttons-stack`、`media-player`、`pop-up`、`select`、`separator` 或 `sub-buttons` | Bubble Card 的類型,詳見下方 |
| `styles` | object list | 選用 | 任何 CSS 樣式表 | 讓你可以自訂 Bubble Card 的 CSS,詳見[樣式](#樣式) |

</details>

<details>

<summary><b>全域 CSS 變數(參見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | 所有支援元素的邊框圓角 |
| `--bubble-main-background-color` | `color` | 所有支援元素的主要背景色 |
| `--bubble-secondary-background-color` | `color` | 所有支援元素的次要背景色 |
| `--bubble-accent-color` | `color` | 所有支援元素的強調色 |
| `--bubble-icon-border-radius` | `px` | 所有支援元素的圖示邊框圓角 |
| `--bubble-icon-background-color` | `color` | 所有支援元素的圖示背景色 |
| `--bubble-sub-button-border-radius` | `px` | 所有子按鈕的邊框圓角 |
| `--bubble-sub-button-background-color` | `color` | 所有子按鈕的背景色 |
| `--bubble-box-shadow` | 參見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 所有支援元素的陰影 |
| `--bubble-border` | 參見 [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | 所有支援卡片的邊框 |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**觀看這部[影片](https://www.youtube.com/watch?v=0hSQOlBxKKI),了解 Bubble Card 及其功能。**我的 YouTube 頻道還很新,主要專注於 Home Assistant 和 Bubble Card 的教學。歡迎訂閱,幫助提升我頻道的能見度。先在此感謝大家!

<br>

---

<br>

## 實體建議

自 Home Assistant 2026.6 起，在卡片挑選器中選擇一個實體會提供給你幾張現成的卡片，而 Bubble Card 以自己的配方回應這個問題。選擇一個燈光，你會得到一張帶亮度滑桿的卡片，若你的燈光支援，還會有色溫、顏色與飽和度的變體。選擇一個窗簾，你會得到它的位置滑桿；選擇一個媒體播放器，你還會得到一個附訊號來源清單的變體；選擇一台掃地機器人，你會得到它的啟動、暫停與回充座按鈕。每一則建議都是一份普通的 Bubble Card 設定，並以即時預覽呈現，因此你可以挑最接近的那一個，然後照常繼續編輯。

你會得到什麼，取決於你的實體實際上能做什麼：沒有亮度通道的燈光得到的是開關而不是滑桿，無法傾斜的窗簾不會有傾斜變體，空調實體只有在具備預設模式時才會得到它們。適用時，經典項目會接在它們下方：該領域的專用卡片、一個單純的按鈕，以及一個滑桿。

> [!TIP]
> 模組可以把自己的建議加入該清單，參見[模組](#模組)。

<br>

---

<br>

## 彈出視窗

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

這張卡片讓你可以建立包含任何內容的彈出視窗。每個彈出視窗**預設為隱藏**,可以透過連結到它的雜湊值(例如 `'#pop-up-name'`)、任何支援 `navigate` [動作](#點擊雙擊與長按動作)的卡片,或是內建的[水平按鈕堆疊](#水平按鈕堆疊)來開啟。

> [!TIP]
> ### 彈出視窗觸發器 
> 這項功能讓你可以根據任何實體的狀態開啟彈出視窗,舉例來說,當有人出現在你家門前時,你可以開啟一個帶有攝影機的「安全」彈出視窗。你也可以建立一個開關輔助器(input_boolean),並在自動化中觸發它的開啟/關閉。
> <details>
> <summary>當 <code>binary_sensor</code> 為 <code>on</code> 時開啟彈出視窗</summary>
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
> ### 關閉彈出視窗的不同方式 
> 關閉彈出視窗的方式有很多種。例如,你可以從彈出視窗的標頭向下滑動,在彈出視窗內向下長滑,在桌面上按 Escape 鍵,移除網址中的雜湊值,或是直接按下關閉按鈕。
>


### 彈出視窗選項

<details>

<summary><b>選項(YAML + 說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `hash` | string | **必要** | 任何帶有 ' ' 的唯一雜湊值(例如 `'#kitchen'`) | 這是你開啟彈出視窗的方式 |
| `popup_style` | string | 選用 | `bubble`(預設)或 `classic` | 定義彈出視窗的視覺樣式 |
| `popup_mode` | string | 選用 | `default`(預設)、`fit-content`、`centered` 或 `adaptive-dialog` | 定義彈出視窗的版面配置模式 |
| `with_bottom_offset` | boolean | 選用 | `true` 或 `false`(預設) | 僅在 `popup_mode: fit-content` 或 `adaptive-dialog` 時使用。在行動裝置上套用底部偏移量,適用於你的儀表板包含頁尾卡片的情況。 |
| `full_width_on_mobile` | boolean | 選用 | `true` 或 `false`(預設) | 僅在 `popup_mode: centered` 時使用。在行動裝置上將彈出視窗擴展至全螢幕寬度,適用於較小的螢幕。 |
| `performance_mode` | string | 選用 | `default`(預設)或 `performance` | 最佳化彈出視窗的開啟動畫。`performance` 會稍微延遲內容渲染與背景模糊,若已設定背景模糊也會將其停用。 |
| `auto_close` | string | 選用 | 以毫秒為單位的逾時時間(例如 `10000` 代表 10 秒) | 逾時後自動關閉彈出視窗 |
| `close_on_click` | boolean | 選用 | `true` 或 `false`(預設) | 任何互動後自動關閉彈出視窗 |
| `close_by_clicking_outside` | boolean | 選用 | `true`(預設)或 `false` | 點擊彈出視窗外部來關閉它 |
| `width_desktop` | string | 選用 | 任何 CSS 值 | 桌面上的寬度(行動裝置上預設為 `100%`) |
| `margin` | string | 選用 | 任何 CSS 值 | **僅**在你的彈出視窗在行動裝置上未正確置中時使用(例如 `13px`) |
| `margin_top_mobile` | string | 選用 | 任何 CSS 值 | 行動裝置上的上邊距(例如標頭被隱藏時可用 `-56px`) |
| `margin_top_desktop` | string | 選用 | 任何 CSS 值 | 桌面上的上邊距(例如 `50vh` 可做出一半大小的彈出視窗,或 `calc(100vh - 400px)` 可做出固定高度 `400px`) |
| `bg_color` | string | 選用 | 任何十六進位、rgb 或 rgba 值 | 彈出視窗的背景色(例如 `#ffffff` 代表白色背景) |
| `bg_opacity` | string | 選用 | `0` 到 `100` 之間的任何值 | 彈出視窗的背景不透明度(例如 `100` 代表完全不透明) |
| `bg_blur` | string | 選用 | `0` 到 `100` 之間的任何值 | 彈出視窗的背景模糊效果,**僅在 `bg_opacity` 未設為 `100` 時有效**(例如 `0` 代表無模糊)|
| `shadow_opacity` | string | 選用 | `0` 到 `100` 之間的任何值 | 彈出視窗的陰影不透明度(例如 `0` 可將其隱藏) |
| `hide_backdrop` | boolean | 選用 | `true` 或 `false`(預設) | 在主儀表板的第一個彈出視窗上將此設為 true,可停用所有彈出視窗的背景遮罩。 |
| `background_update` | boolean | 選用 | `true` 或 `false`(預設) | 在背景中更新彈出視窗內容(不建議) |
| `trigger` | object 或 list | 選用 | 參見[條件](#條件) | 當條件成立時開啟此彈出視窗 |
| `trigger_entity` | string | 選用 | 任何實體 | 根據任何實體的狀態開啟此彈出視窗，即 `trigger` 的簡化形式 |
| `trigger_state` | string | 選用(若已定義 `trigger_entity` 則為**必要**) | 任何實體狀態 | 開啟彈出視窗所需的實體狀態 |
| `trigger_close` | boolean | 選用 | `true` 或 `false` | 當條件不再成立時關閉彈出視窗(預設:搭配 `trigger` 時為 `true`，搭配 `trigger_state` 時為 `false`) |
| `open_action` | object | 選用 | 參見[動作](#點擊雙擊與長按動作) | 彈出視窗開啟時觸發某個動作 |
| `close_action` | object | 選用 | 參見[動作](#點擊雙擊與長按動作) | 彈出視窗關閉時觸發某個動作 |
| `show_header` | boolean | 選用 | `true`(預設)或 `false` | 完整顯示/隱藏彈出視窗的標頭 |
| `show_previous_button` | boolean | 選用 | `true` 或 `false`(預設) | 在關閉按鈕旁顯示上一頁按鈕,可用時導覽回上一個彈出視窗 |
| `show_close_button` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏關閉按鈕,同時保留標頭其餘部分可見 |
| `buttons_position` | string | 選用 | `right`(預設)或 `left` | 標頭中關閉按鈕與上一頁按鈕的位置 |
| `cards` | list | 選用 | 任何 Bubble Card、Home Assistant 卡片或自訂卡片 | 定義彈出視窗的內容。詳見下方的彈出視窗範例。 |
| 你也可以取用彈出視窗標頭的[所有按鈕設定](#按鈕)。 | | 選用 | | 若未定義則不會顯示標頭 |

</details>

<details>

<summary><b>CSS 變數(參見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | 彈出視窗的邊框圓角 |
| `--bubble-pop-up-main-background-color` | `color` | 彈出視窗中支援元素的主要背景色 |
| `--bubble-pop-up-background-color` | `color` | 彈出視窗的背景色 |
| `--bubble-backdrop-background-color` | `color` | 背景遮罩的背景色 |
| 你也可以取用彈出視窗標頭的[所有按鈕 CSS 變數](#按鈕選項)。 | | |

</details>


### 獨立彈出視窗格式(v3.2.0 以上)

自 v3.2.0 起,彈出視窗採用一種新的獨立格式,內容卡片直接使用 `cards` 選項在彈出視窗內定義。這帶來更好的效能,以及全新以區塊為基礎的拖放編輯體驗。


#### 範例

<details>

<summary>一個彈出視窗(獨立格式)</summary>

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

<summary>用來開啟彈出視窗的按鈕</summary>

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

## 水平按鈕堆疊

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

這張卡片是彈出視窗卡片的絕佳搭檔,讓你可以開啟對應的彈出視窗。它也能讓你開啟儀表板的任何頁面。此外,你可以加入你的動作/存在感測器,讓按鈕的順序根據你剛進入的房間自動調整。這張卡片可以捲動、始終保持可見,並作為頁尾使用。

> [!IMPORTANT]  
> 這張卡片必須是你檢視畫面中的最後一張(在所有卡片和彈出視窗之後)。它不能放在任何堆疊卡片內。

### 水平按鈕堆疊選項

<details>

<summary><b>選項(YAML + 說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `1_link` | string | **必要** | 帶有 ' ' 的彈出視窗雜湊值(例如 `'#kitchen'`)或任何連結 | 要開啟的連結 |
| `1_name` | string | 選用 | 任何字串 | 按鈕的名稱 |
| `1_icon` | string | 選用 | 任何 `mdi:` 圖示 | 按鈕的圖示 |
| `1_entity` | string | 選用 | 任何燈光或燈光群組 | 在背景中顯示該燈光的顏色 |
| `1_pir_sensor` | string | 選用 | 任何二元感測器 | 至少要有一個以上的 pir 感測器才能使用 `auto_order`,實際上它也支援任何實體類型,例如你可以加入燈光群組,順序會根據最後變更的狀態改變。 |
| `auto_order` | boolean | 選用 | `true` 或 `false`(預設) | 根據 `_pir_sensor` 的最後變更時間改變按鈕順序,**如果你的程式碼中沒有任何 `_pir_sensor`,則必須設為 `false`** |
| `margin` | string | 選用 | 任何 CSS 值 | **僅**在你的 `horizontal-buttons-stack` 在行動裝置上未正確置中時使用(例如 `13px`) |
| `width_desktop` | string | 選用 | 任何 CSS 值 | 桌面上的寬度(行動裝置上預設為 `100%`) |
| `is_sidebar_hidden` | boolean | 選用 | `true` 或 `false`(預設) | 若桌面上的側邊欄被隱藏(僅適用於你自行修改隱藏側邊欄的情況),修正水平按鈕堆疊的位置 |
| `rise_animation` | boolean | 選用 | `true`(預設)或 `false` | 將此設為 `false` 可停用頁面載入後啟動的動畫 |
| `highlight_current_view` | boolean | 選用 | `true` 或 `false`(預設) | 以平滑動畫醒目提示目前的雜湊值/檢視畫面 |
| `hide_gradient` | boolean | 選用 | `true` 或 `false`(預設) | 將此設為 `false` 可隱藏漸層 |

> [!IMPORTANT]  
> 以數字開頭的變數用來定義你的按鈕,只要更改這個數字即可新增更多按鈕(見下方範例)。

</details>

<details>

<summary><b>CSS 變數(參見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | 水平按鈕堆疊按鈕的邊框圓角 |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | 水平按鈕堆疊按鈕的背景色 |

</details>


#### 範例

<details>

<summary>一個會根據存在感測器自動重新排列的水平按鈕堆疊</summary>

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

## 按鈕

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

這張卡片用途非常廣泛,可作為**開關**、**滑桿**、**狀態**或**名稱/文字**按鈕使用。

> [!TIP]
> ### 各種按鈕類型之間有什麼差異?
>
> - **開關按鈕:** 這是預設的按鈕類型。預設情況下,它會切換一個實體,其背景顏色會依實體狀態或燈光顏色而改變。你可以在**卡片點擊動作**區段變更它的動作。
>
> - **滑桿按鈕:** 這種按鈕類型讓你可以控制具有可調整範圍的實體,非常適合用來調節燈光亮度,填充顏色也會依燈光的顏色而變化。你也可以用它來顯示數值,例如電池電量。
>   滑桿支援的實體:
>   - 燈光(亮度)
>   - 媒體播放器(音量)
>   - 窗簾(位置)
>   - 風扇(百分比)
>   - 空調(溫度)
>   - 數字輸入與數字(數值)
>   - 電池感測器(百分比,唯讀)
>
>   你也可以在**滑桿設定**中停用實體篩選器,搭配任何具有數字狀態的實體使用,然後定義 `min` 與 `max` 數值。此選項為唯讀。
>
> - **狀態按鈕:** 非常適合顯示感測器或任何實體的資訊。按下時,會顯示該實體的「更多資訊」面板,其背景顏色不會改變。
>
> - **名稱/文字按鈕:** 唯一不需要實體的按鈕類型,可用來顯示一小段文字、名稱或標題,也可以為它加上動作,其背景顏色不會改變。

### 按鈕選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必要** | 任何實體 | 要控制的實體 |
| `button_type` | string | 選用 | `switch`(預設)、`slider`、`state` 或 `name` | 按鈕的行為 |
| `name` | string | 選用 | 任何字串 | 按鈕的名稱,若未定義則顯示實體名稱 |
| `icon` | string | 選用 | 任何 `mdi:` 圖示 | 按鈕的圖示,若未定義則顯示實體圖示或 `entity-picture` |
| `force_icon` | boolean | 選用 | `true` 或 `false`(預設) | 讓圖示優先於 `entity-picture` 顯示 |
| `use_accent_color` | boolean | 選用(預設 `false`) | **僅適用於燈光。** 使用主題的強調色,而非燈光本身的顏色。                         |
| `show_state` | boolean | 選用 | `true` 或 `false`(預設) | 顯示或隱藏 `entity` 的狀態 |
| `show_name` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏名稱 |
| `show_icon` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏圖示 |
| `show_last_changed` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後變更的時間 |
| `show_last_updated` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後更新的時間 |
| `show_attribute` | boolean | 選用 | `true` 或 `false`(預設) | 在名稱下方顯示 `entity` 的一項屬性 |
| `attribute` | string | 選用(若 `show_attribute` 設為 `true` 則為必要) | `entity` 的一項屬性 | 要顯示的屬性(例如 `brightness`) |
| `scrolling_effect` | boolean | 選用 | `true`(預設)或 `false` | 當內容超出容器大小時允許文字捲動 |
| `button_action` | object | 選用 | `tap_action`、`double_tap_action` 或 `hold_action`,見下方 | 允許變更按鈕點擊的預設動作 |
| `tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義點擊圖示時的動作類型,若未定義則使用 `more-info` |
| `double_tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義雙擊圖示時的動作類型,若未定義則使用 `none` |
| `hold_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義長按圖示時的動作類型,若未定義則使用 `more-info` |
| `card_layout` | string | 選用 | `normal`(非區段檢視時預設)、`large`(區段檢視時預設)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面,見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選用 | 任何數字 | 列數(高度)(例如 `2`) |
| `sub_button` | object | 選用 | 見[子按鈕](#子按鈕) | 新增固定在右側的自訂按鈕 |

</details>

<details>

<summary><b>CSS 變數(見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | 按鈕中支援元素的主要背景顏色 |
| `--bubble-button-border-radius` | `px` | 按鈕的邊框半徑 |
| `--bubble-button-icon-border-radius` | `px` | 按鈕圖示容器的邊框半徑 |
| `--bubble-button-icon-background-color` | `color` | 按鈕圖示容器的背景顏色 |
| `--bubble-light-white-color` | `color` | 取代燈光按鈕/滑桿預設的白色 |
| `--bubble-light-color` | `color` | 取代燈光按鈕/滑桿的顏色(包含 RGB 燈光) |
| `--bubble-button-box-shadow` | 見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 按鈕的陰影 |

</details>

以下選項僅在 `button_type` 設為 `slider` 時可用。

<details>

<summary><b>滑桿選項(YAML 與說明)</b></summary>

| 名稱                  | 類型    | 需求                     | 說明                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | 選用                        | 滑桿的最小值,用於自訂滑桿。                                                    |
| `max_value`             | number  | 選用                        | 滑桿的最大值,用於自訂滑桿。                                                    |
| `step`                  | number  | 選用                        | 滑桿的步進值。                                                                           |
| `tap_to_slide`          | boolean | 選用(預設 `false`)      | 啟用舊有的滑桿行為,改為點擊啟用滑桿,而非按住不放。        |
| `relative_slide`        | boolean | 選用(預設 `false`)     | 依起始值更新數值,而非依起始觸控點更新。                      |
| `read_only_slider`      | boolean | 選用(預設 `false`)      | 將滑桿設為唯讀,某些實體(如感測器)會自動啟用此選項。                        |
| `slider_live_update`    | boolean | 選用(預設 `false`)      | 拖動滑桿時即時更新實體狀態。**並非所有實體都建議使用此功能。**        |
| `slider_fill_orientation` | string | 選用 | `left`、`right`、`top` 或 `bottom` | 變更滑桿的填充方向。未定義時為由左至右，在[由右至左的語言](#在地化)中則會鏡像 |
| `slider_value_position` | string | 選用 | `right`、`left`、`center` 或 `hidden` | 數值顯示的位置。未定義時位於結尾側，因此在[由右至左的語言](#在地化)中位於左側 |
| `invert_slider_value` | boolean | 選用(預設 `false`) | 反轉滑桿方向(填滿 100% 等於最小值),不適用於顏色滑桿。 |
| `light_slider_type` | string | 選用 | `brightness`(預設)、`hue`、`saturation`、`white_temp` | **僅適用於燈光。** 選擇滑桿模式 |
| `cover_slider_type` | string | 選用 | `position`(預設)、`tilt_position` | **僅適用於窗簾。** 選擇滑桿模式(位置或傾斜) |
| `hue_force_saturation` | boolean | 選用(預設 `false`) | **僅適用於燈光(色相模式)。** 調整色相時強制設定飽和度 |
| `hue_force_saturation_value` | number | 選用(預設 `100`) | **僅適用於燈光(色相模式)。** 強制設定的飽和度數值(0 到 100) |
| `use_accent_color` | boolean | 選用(預設 `false`) | **僅適用於燈光(亮度模式)。** 使用主題強調色而非燈光顏色 |
| `allow_light_slider_to_0` | boolean | 選用(預設 `false`)    | **僅適用於燈光。** 允許滑桿降到 0%,此時燈光會關閉,無法與 `tap_to_slide` 併用。 |
| `light_transition`      | boolean | 選用(預設 `false`)      | **僅適用於燈光。** 為支援的燈光啟用平滑的亮度過渡效果。                           |
| `light_transition_time` | number  | 選用(預設 `500`)        | **僅適用於燈光。** 過渡時間(毫秒),需搭配 `light_transition: true` 使用。            |

</details>

#### 範例

<details>

<summary>一個可控制燈光亮度的滑桿按鈕</summary>

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

<summary>擁有更多選項的按鈕</summary>

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

## 媒體播放器

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

這張卡片可以讓你控制媒體播放器實體。

### 媒體播放器選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必要** | 任何媒體播放器 | 要控制的媒體播放器 |
| `name` | string | 選用 | 任何字串 | 媒體播放器的名稱,若未定義則顯示實體名稱 |
| `icon` | string | 選用 | 任何 `mdi:` 圖示 | 媒體播放器的圖示,若未定義則顯示實體圖示或 `entity-picture` |
| `force_icon` | boolean | 選用 | `true` 或 `false`(預設) | 讓圖示優先於 `entity-picture` 顯示 |
| `show_state` | boolean | 選用 | `true` 或 `false`(預設) | 顯示或隱藏 `entity` 的狀態 |
| `show_name` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏名稱 |
| `show_icon` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏圖示 |
| `show_last_changed` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後變更的時間 |
| `show_last_updated` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後更新的時間 |
| `show_attribute` | boolean | 選用 | `true` 或 `false`(預設) | 在名稱下方顯示 `entity` 的一項屬性 |
| `attribute` | string | 選用(若 `show_attribute` 設為 `true` 則為必要) | `entity` 的一項屬性 | 要顯示的屬性(例如 `brightness`) |
| `scrolling_effect` | boolean | 選用 | `true`(預設)或 `false` | 當內容超出容器大小時允許文字捲動 |
| `min_volume` | number | 選用 | 任何數字 | 音量滑桿的最小值。 |
| `max_volume` | number | 選用 | 任何數字 | 音量滑桿的最大值。 |
| `cover_background` | boolean | 選用 | `true` 或 `false`(預設) | 使用模糊處理的媒體封面作為卡片背景。 |
| `button_action` | object | 選用 | `tap_action`、`double_tap_action` 或 `hold_action`,見[動作](#點擊雙擊與長按動作) | 允許變更按鈕點擊的預設動作。 |
| `tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義點擊圖示時的動作類型,若未定義則使用 `more-info`。 |
| `double_tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義雙擊圖示時的動作類型,若未定義則使用 `none`。 |
| `hold_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義長按圖示時的動作類型,若未定義則使用 `more-info`。 |
| `main_buttons_position` | string | 選用 | `default` 或 `bottom` | 將封面操作按鈕移到底部(固定) |
| `main_buttons_full_width` | boolean | 選用 | `true` 或 `false` | 讓底部操作按鈕全寬顯示(當位置為 `bottom` 時預設為 `true`) |
| `main_buttons_alignment` | string | 選用 | `end`(預設)、`center`、`start`、`space-between` | 非全寬時底部操作按鈕的對齊方式 |
| `card_layout` | string | 選用 | `normal`(非區段檢視時預設)、`large`(區段檢視時預設)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面,見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選用 | 任何數字 | 列數(高度)(例如 `2`) |
| `sub_button` | object | 選用 | 見[子按鈕](#子按鈕) | 新增固定在右側的自訂按鈕 |
| `hide` | object | 選用 | 見下方 | 從卡片中隱藏按鈕 |

#### 隱藏選項

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | 選用 | `true` 或 `false`(預設) | 隱藏播放/暫停按鈕 |
| `volume_button` | boolean | 選用 | `true` 或 `false`(預設) | 隱藏音量按鈕 |
| `previous_button` | boolean | 選用 | `true` 或 `false`(預設) | 隱藏上一首按鈕 |
| `next_button` | boolean | 選用 | `true` 或 `false`(預設) | 隱藏下一首按鈕 |
| `power_button` | boolean | 選用 | `true` 或 `false`(預設) | 隱藏電源按鈕 |

</details>

<details>

<summary><b>CSS 變數(見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | 媒體播放器的主要背景顏色 |
| `--bubble-media-player-border-radius` | `px` | 媒體播放器的邊框半徑 |
| `--bubble-media-player-buttons-border-radius` | `px` | 媒體播放器按鈕的邊框半徑 |
| `--bubble-media-player-slider-background-color` | `color` | 音量滑桿的背景顏色 |
| `--bubble-media-player-icon-border-radius` | `px` | 媒體播放器圖示容器的邊框半徑 |
| `--bubble-media-player-icon-background-color` | `color` | 媒體播放器圖示容器的背景顏色 |
| `--bubble-media-player-box-shadow` | 見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 媒體播放器的陰影 |

</details>


#### 範例

<details>

<summary>擁有所有選項的媒體播放器</summary>

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

## 窗簾

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

這張卡片可以讓你控制 `cover` 實體。

### 窗簾選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必要** | 任何窗簾 | 要控制的窗簾 |
| `name` | string | 選用 | 任何字串 | 窗簾的名稱,若未定義則顯示實體名稱 |
| `force_icon` | boolean | 選用 | `true` 或 `false`(預設) | 讓圖示優先於 `entity-picture` 顯示 |
| `show_state` | boolean | 選用 | `true` 或 `false`(預設) | 顯示或隱藏 `entity` 的狀態 |
| `show_name` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏名稱 |
| `show_icon` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏圖示 |
| `show_last_changed` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後變更的時間 |
| `show_last_updated` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後更新的時間 |
| `show_attribute` | boolean | 選用 | `true` 或 `false`(預設) | 在名稱下方顯示 `entity` 的一項屬性 |
| `attribute` | string | 選用(若 `show_attribute` 設為 `true` 則為必要) | `entity` 的一項屬性 | 要顯示的屬性(例如 `brightness`) |
| `scrolling_effect` | boolean | 選用 | `true`(預設)或 `false` | 當內容超出容器大小時允許文字捲動 |
| `icon_open` | string | 選用 | 任何 `mdi:` 圖示 | 窗簾開啟時的圖示,若未定義則顯示預設的開啟圖示 |
| `icon_close` | string | 選用 | 任何 `mdi:` 圖示 | 窗簾關閉時的圖示,若未定義則顯示預設的關閉圖示 |
| `icon_up` | string | 選用 | 任何 `mdi:` 圖示 | 開啟窗簾按鈕的圖示,若未定義則顯示預設的開啟圖示 |
| `icon_down` | string | 選用 | 任何 `mdi:` 圖示 | 關閉窗簾按鈕的圖示,若未定義則顯示預設的關閉圖示 |
| `open_service` | string | 選用 | 任何服務或腳本 | 開啟窗簾的服務,預設為 `cover.open_cover` |
| `stop_service` | string | 選用 | 任何服務或腳本 | 停止窗簾的服務,預設為 `cover.stop_cover` |
| `close_service` | string | 選用 | 任何服務或腳本 | 關閉窗簾的服務,預設為 `cover.close_cover` |
| `tilt_buttons` | string | 選用 | `top`(預設)、`bottom`、`left`、`right`、`hidden` | 傾斜控制按鈕的位置(僅在窗簾支援傾斜時顯示) |
| `open_tilt_service` | string | 選用 | 任何服務或腳本 | 開啟傾斜的服務,預設為 `cover.open_cover_tilt` |

| `close_tilt_service` | string | 選用 | 任何服務或腳本 | 關閉傾斜的服務,預設為 `cover.close_cover_tilt` |
| `button_action` | object | 選用 | `tap_action`、`double_tap_action` 或 `hold_action`,見[動作](#點擊雙擊與長按動作) | 允許變更按鈕點擊的預設動作。 |
| `tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義點擊圖示時的動作類型,若未定義則使用 `more-info`。 |
| `double_tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義雙擊圖示時的動作類型,若未定義則使用 `none`。 |
| `hold_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義長按圖示時的動作類型,若未定義則使用 `more-info`。 |
| `main_buttons_position` | string | 選用 | `default` 或 `bottom` | 將控制按鈕移到底部(固定) |
| `main_buttons_full_width` | boolean | 選用 | `true` 或 `false` | 讓底部控制按鈕全寬顯示(當位置為 `bottom` 時預設為 `true`) |
| `main_buttons_alignment` | string | 選用 | `end`(預設)、`center`、`start`、`space-between` | 非全寬時底部控制按鈕的對齊方式 |
| `card_layout` | string | 選用 | `normal`(非區段檢視時預設)、`large`(區段檢視時預設)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面,見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選用 | 任何數字 | 列數(高度)(例如 `2`) |
| `sub_button` | object | 選用 | 見[子按鈕](#子按鈕) | 新增固定在右側的自訂按鈕 |

</details>

<details>

<summary><b>CSS 變數(見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | 窗簾卡片中支援元素的主要背景顏色 |
| `--bubble-cover-border-radius` | `px` | 窗簾卡片的邊框半徑 |
| `--bubble-cover-icon-border-radius` | `px` | 窗簾卡片圖示容器的邊框半徑 |
| `--bubble-cover-icon-background-color` | `color` | 窗簾卡片圖示容器的背景顏色 |
| `--bubble-cover-box-shadow` | 見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 窗簾卡片的陰影 |
| `--bubble-button-box-shadow` | 見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 窗簾卡片中按鈕的陰影 |

</details>


#### 範例

<details>

<summary>可控制捲簾的卡片</summary>

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

## 選擇

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

這張卡片可以為你的 `input_select` / `select` 實體新增下拉選單,並支援子按鈕以及所有常見的 Bubble Card 功能。

> [!TIP]
> 如果你想要,也可以使用選擇子按鈕,此功能在所有支援子按鈕的卡片中都可使用。

### 選擇選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必要** | 任何實體 | 要控制的實體 |
| `name` | string | 選用 | 任何字串 | 選擇卡片的名稱,若未定義則顯示實體名稱 |
| `icon` | string | 選用 | 任何 `mdi:` 圖示 | 選擇卡片的圖示,若未定義則顯示實體圖示或 `entity-picture` |
| `force_icon` | boolean | 選用 | `true` 或 `false`(預設) | 讓圖示優先於 `entity-picture` 顯示 |
| `show_state` | boolean | 選用 | `true` 或 `false`(預設) | 顯示或隱藏 `entity` 的狀態 |
| `show_name` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏名稱 |
| `show_icon` | boolean | 選用 | `true`(預設)或 `false` | 顯示或隱藏圖示 |
| `show_last_changed` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後變更的時間 |
| `show_last_updated` | boolean | 選用 | `true` 或 `false`(預設) | 顯示 `entity` 最後更新的時間 |
| `show_attribute` | boolean | 選用 | `true` 或 `false`(預設) | 在名稱下方顯示 `entity` 的一項屬性 |
| `attribute` | string | 選用(若 `show_attribute` 設為 `true` 則為必要) | `entity` 的一項屬性 | 要顯示的屬性(例如 `brightness`) |
| `scrolling_effect` | boolean | 選用 | `true`(預設)或 `false` | 當內容超出容器大小時允許文字捲動 |
| `tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義點擊圖示時的動作類型,若未定義則使用 `more-info`。 |
| `double_tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義雙擊圖示時的動作類型,若未定義則使用 `none`。 |
| `hold_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義長按圖示時的動作類型,若未定義則使用 `more-info`。 |
| `card_layout` | string | 選用 | `normal`(非區段檢視時預設)、`large`(區段檢視時預設)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面,見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選用 | 任何數字 | 列數(高度)(例如 `2`) |
| `sub_button` | object | 選用 | 見[子按鈕](#子按鈕) | 新增固定在右側的自訂按鈕 |

</details>

<details>

<summary><b>CSS 變數(見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | 選擇卡片中支援元素的主要背景顏色 |
| `--bubble-select-background-color` | `color` | 選擇卡片的背景顏色 |
| `--bubble-select-list-border-radius` | `px` | 卡片中下拉選單的邊框半徑 |
| `--bubble-select-list-item-accent-color` | `color` | 選中項目的強調色 |
| `--bubble-select-list-background-color` | `color` | 卡片中下拉選單的背景顏色 |
| `--bubble-select-list-width` | `px` | 卡片中下拉選單的寬度 |
| `--bubble-select-arrow-background-color` | `color` | 下拉箭頭的背景顏色 |
| `--bubble-select-button-border-radius` | `px` | 選擇按鈕的邊框半徑 |
| `--bubble-select-border-radius` | `px` | 選擇卡片的邊框半徑 |
| `--bubble-select-icon-border-radius` | `px` | 選擇卡片圖示容器的邊框半徑 |
| `--bubble-select-icon-background-color` | `color` | 選擇卡片圖示容器的背景顏色 |
| `--bubble-select-box-shadow` | 見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 選擇卡片的陰影 |

</details>


#### 範例

<details>

<summary>包含場景清單的選擇卡片</summary>

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

## 空調

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

這張卡片可以讓你控制 `climate` 實體。

> [!TIP]
> 模式選擇選單是建立卡片時自動加入的[子按鈕](#子按鈕),之後你可以隨意修改或移除它。

### 空調選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱                     | 類型    | 需求                         | 支援的選項                                  | 說明                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **必要**                        | 空調實體                                   | 要控制的實體(例如 `climate.living_room`)。                                                            |
| `name`                  | string  | 選用                            | 任何字串                                       | 卡片的自訂名稱,若未定義則顯示實體名稱。                                    |
| `icon`                  | string  | 選用                            | 任何 `mdi:` 圖示                                  | 卡片的自訂圖示,若未定義則使用實體圖示或 `entity-picture`。                   |
| `force_icon`            | boolean | 選用                            | `true` 或 `false`(預設)                     | 讓圖示優先於 `entity-picture` 顯示。                                                           |
| `show_state`            | boolean | 選用                            | `true` 或 `false`(預設)                     | 顯示或隱藏 `entity` 目前的狀態。                                                                 |
| `show_name`             | boolean | 選用                            | `true`(預設)或 `false`                     | 顯示或隱藏實體名稱。                                                                            |
| `show_icon`             | boolean | 選用                            | `true`(預設)或 `false`                     | 顯示或隱藏圖示。                                                                                          |
| `hide_target_temp_low`  | boolean | 選用(僅適用於支援 `target_temp_low` 的實體) | `true` 或 `false`(預設) | 隱藏低溫目標控制(若 `entity` 支援此功能)。                                          |
| `hide_target_temp_high` | boolean | 選用(僅適用於支援 `target_temp_high` 的實體)| `true` 或 `false`(預設) | 隱藏高溫目標控制(若 `entity` 支援此功能)。                                         |
| `state_color`           | boolean | 選用                            | `true` 或 `false`(預設)                     | 當空調實體為開啟狀態時套用固定的背景顏色。                                                              |
| `step` | number | 選用 | 任何數字 | 溫度的步進值。 |
| `min_temp` | number | 選用 | 任何數字 | 最低溫度。 |
| `max_temp` | number | 選用 | 任何數字 | 最高溫度。 |
| `button_action` | object | 選用 | `tap_action`、`double_tap_action` 或 `hold_action`,見[動作](#點擊雙擊與長按動作) | 允許變更按鈕點擊的預設動作。 |
| `tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義點擊圖示時的動作類型,若未定義則使用 `more-info`。 |
| `double_tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義雙擊圖示時的動作類型,若未定義則使用 `none`。 |
| `hold_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義長按圖示時的動作類型,若未定義則使用 `more-info`。 |                              |
| `main_buttons_position` | string | 選用 | `default` 或 `bottom` | 將空調操作按鈕移到底部(固定) |
| `main_buttons_full_width` | boolean | 選用 | `true` 或 `false` | 讓底部操作按鈕全寬顯示(當位置為 `bottom` 時預設為 `true`) |
| `main_buttons_alignment` | string | 選用 | `end`(預設)、`center`、`start`、`space-between` | 非全寬時底部操作按鈕的對齊方式 |
| `card_layout` | string | 選用 | `normal`(非區段檢視時預設)、`large`(區段檢視時預設)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面,見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選用 | 任何數字 | 列數(高度)(例如 `2`) |
| `sub_button`            | object  | 選用                            | 見[子按鈕](#子按鈕)                | 新增固定在右側的自訂按鈕,適合用來建立空調模式選擇選單。                                  |

</details>

<details>

<summary><b>CSS 變數(見<a href="#樣式">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | 空調卡片中支援元素的主要背景顏色 |
| `--bubble-climate-border-radius` | `px` | 空調卡片中支援元素的邊框半徑 |
| `--bubble-climate-button-background-color` | `color` | 空調卡片按鈕的背景顏色 |
| `--bubble-climate-icon-border-radius` | `px` | 空調卡片圖示容器的邊框半徑 |
| `--bubble-state-climate-fan-only-color` | `color` | 僅送風狀態的疊加顏色 |
| `--bubble-state-climate-dry-color` | `color` | 除濕狀態的疊加顏色 |
| `--bubble-state-climate-cool-color` | `color` | 冷氣狀態的疊加顏色 |
| `--bubble-state-climate-heat-color` | `color` | 暖氣狀態的疊加顏色 |
| `--bubble-state-climate-auto-color` | `color` | 自動狀態的疊加顏色 |
| `--bubble-state-climate-heat-cool-color` | `color` | 冷暖狀態的疊加顏色 |
| `--bubble-climate-accent-color` | `color` | 空調卡片的強調色 |
| `--bubble-climate-box-shadow` | 見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 空調容器的陰影。 |

</details>


#### 範例

<details>

<summary>帶有 HVAC 模式下拉選單的空調卡片</summary>

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

## 行事曆

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

這張卡片可以顯示你的行事曆實體,其內容可以捲動,讓你輕鬆瀏覽即將到來的事件。

### 行事曆選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱                | 類型    | 需求  | 支援的選項                               | 說明                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | 選用     | 任何數字(最小值:1)                        | 要取得事件的行事曆天數,從現在起到第 N 天結束(預設:7) |
| `entities`          | object  | **必要** | 行事曆實體物件(見下方)            | 要控制的實體(例如 `calendar.main_calendar`)。                                 |
| `entities.entity`   | string  | **必要** | 行事曆實體                               | 要顯示的行事曆實體                                                          |
| `entities.color`    | string  | 選用     | 顏色值                                         | 行事曆標籤的自訂顏色,若未定義則會自動選取一個顏色 |
| `days`              | number  | 選用     | 任何數字(最小值:1)                         | 要取得事件的行事曆天數,從現在起到第 N 天結束(預設:7) |
| `limit`             | number  | 選用     | 一個數字                                        | 卡片上顯示的事件數量                                  |
| `show_end`          | boolean | 選用     | `true` 或 `false`(預設)                     | 顯示或隱藏事件的結束時間                                                    |
| `show_progress`     | boolean | 選用     | `true`(預設)或 `false`                     | 顯示或隱藏事件的進度條                                                     |
| `show_started_events`| boolean | 選用     | `true`(預設)或 `false`                     | 顯示或隱藏正在進行中的事件。跨多天的事件會逐日判斷，因此只有進行中的那一天會被隱藏，之後的日子仍然可見 |
| `scrolling_effect`  | boolean | 選用 | `true`(預設)或 `false` | 當內容超出容器大小時允許文字捲動 |
| `event_action` | object | 選用 | `tap_action`、`double_tap_action` 或 `hold_action`,見[動作](#點擊雙擊與長按動作) | 允許為事件點擊新增動作。 |
| `tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義點擊日期時的動作類型,若未定義則使用 `none`。 |
| `double_tap_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義雙擊日期時的動作類型,若未定義則使用 `none`。 |
| `hold_action` | object | 選用 | 見[動作](#點擊雙擊與長按動作) | 定義長按日期時的動作類型,若未定義則使用 `none`。 |
| `card_layout` | string | 選用 | `normal`(非區段檢視時預設)、`large`(區段檢視時預設)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面,見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選用 | 任何數字 | 列數(高度)(例如 `2`) |
| `sub_button` | object | 選用 | 見[子按鈕](#子按鈕) | 新增固定在右側的自訂按鈕 |

</details>

<details>

<summary><b>CSS 變數(見<a href="#樣式">樣式</a>)</b></summary>

| 變數                                  | 預期值 | 說明                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | 行事曆卡片中支援元素的主要背景顏色  |
| `--bubble-calendar-border-radius`         | `px`           | 行事曆卡片中支援元素的邊框半徑 |
| `--bubble-calendar-height`                | `px`           | 行事曆卡片的高度                                        |

</details>

#### 範例

<details>

<summary>限制事件數量的行事曆卡片</summary>

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

<summary>顯示結束時間與進度條的行事曆卡片</summary>

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


## 分隔線

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

這張卡片是一條簡單的分隔線,用來將您的彈出視窗劃分成不同的類別或區塊,例如燈光、裝置、窗簾、設定、自動化等等。

### 分隔線選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `name` | string | 選填但建議填寫 | 任何字串 | 分隔線的名稱 |
| `icon` | string | 選填但建議填寫 | 任何 `mdi:` 圖示 | 分隔線的圖示 |
| `card_layout` | string | 選填 | `normal`(未在區塊檢視時的預設值)、`large`(在區塊檢視時的預設值)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面配置,參見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選填 | 任何數字 | 列數(高度)(例如 `2`) |
| `sub_button` | object | 選填 | 參見[子按鈕](#子按鈕) | 加入固定在右側的自訂按鈕 |

</details>

<details>

<summary><b>CSS 變數(參見 <a href="#styling">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | 分隔線中線條的背景顏色 |

</details>

#### 範例

<details>

<summary>「窗簾」區塊的分隔線</summary>

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

## 空白欄

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

這張卡片用來填補空白的欄位。如果您的彈出視窗中有一個只含單張卡片的 `horizontal-stack`,這張卡片就很有用。可以看看這張截圖右下角的位置,您會發現它幾乎(不)可見。

### 空白欄選項

這張卡片沒有任何選項,也不支援[樣式](#樣式),不過它支援 HA 區塊的版面配置選項。

#### 範例

<details>

<summary>水平堆疊中的一個空白欄</summary>

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

## 純子按鈕

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

這張卡片專門用於純子按鈕。它非常適合做選單、快捷動作、資訊小標籤,或是頁面底部的固定頁尾。

> [!IMPORTANT]  
> 這張卡片使用新版的子按鈕結構。請使用 `sub_button.bottom` 來定義按鈕,`sub_button.main` 區塊會被忽略。

### 純子按鈕選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **必填** | 參見[子按鈕](#子按鈕) | 使用 `bottom` 區塊定義子按鈕 |
| `hide_main_background` | boolean | 選填 | `true` 或 `false`(預設) | 移除卡片背景 |
| `footer_mode` | boolean | 選填 | `true` 或 `false`(預設) | 將卡片固定在頁面底部 |
| `footer_full_width` | boolean | 選填 | `true` 或 `false`(預設) | 讓頁尾佔滿整個寬度(100%) |
| `footer_width` | number | 選填 | 任何數字 | 當 `footer_full_width` 為 `false` 時,頁尾寬度(以像素為單位) |
| `footer_bottom_offset` | number | 選填 | 任何數字 | 與頁面底部的距離(以像素為單位)(預設值:`16`) |
| `card_layout` | string | 選填 | `normal`(未在區塊檢視時的預設值)、`large`(在區塊檢視時的預設值)、`large-2-rows`、`large-sub-buttons-grid` | 卡片的樣式版面配置,參見[卡片版面配置](#卡片版面配置) |
| `rows` | number | 選填 | 任何數字 | 列數(高度)(例如 `2`) |

</details>

<details>

<summary><b>CSS 變數(參見 <a href="#styling">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | 當 `footer_full_width` 為 `false` 時的頁尾寬度 |
| `--bubble-footer-bottom` | `px` | 頁尾底部偏移量 |
| `--bubble-footer-box-shadow` | 參見 [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | 頁尾容器的陰影 |

</details>

#### 範例

<details>

<summary>類似小標籤的樣式(如截圖所示)</summary>

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

<summary>固定頁尾選單</summary>

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

## 子按鈕

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

在每一張支援此選項的卡片中,您都可以加入子按鈕,進一步自訂卡片。舉例來說,您可以建立能控制吸塵器、天氣卡片,或幾乎任何您想得到的東西的按鈕。這些子按鈕支援點擊動作,以及大部分的按鈕選項。

子按鈕現在支援三種類型:**預設(按鈕)**、**滑桿**,以及**下拉選單 / 選擇**。您可以在同一張卡片中混用不同類型,將子按鈕放在頂部或底部,並將它們組織成群組以做出更進階的版面配置。

#### 子按鈕的位置與群組

<details>

<summary><b>子按鈕結構(main / bottom 加群組)</b></summary>

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

**注意事項:**
- `main` 和 `bottom` 是兩個各自獨立的區塊。底部子按鈕會固定在卡片底部。
- `main_layout` 與 `bottom_layout` 接受 `inline`(預設)或 `rows`,可將群組垂直堆疊。
- 群組是含有 `group` 陣列與選填 `buttons_layout`(`inline` 或 `column`)的物件。
- `justify_content` 僅適用於**底部群組**(`start`、`center`、`end`、`fill`)。
- 當存在底部子按鈕時,卡片版面配置會自動切換為 `large`,除非您明確設定其他版面配置。
- 舊版的 `sub_button` 陣列格式仍受支援,會被視為 `main` 區塊處理。

</details>

### 子按鈕選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 需求 | 支援的選項 | 說明 |
| --- | --- | --- | --- | --- |
| `entity` | string | 選填 | 任何實體 | 要控制的實體 |
| `name` | string | 選填 | 任何字串 | 子按鈕的名稱,若未定義則會顯示實體名稱 |
| `icon` | string | 選填 | 任何 `mdi:` 圖示 | 子按鈕的圖示,若未定義則會顯示實體圖示或實體圖片 |
| `force_icon` | boolean | 選填 | `true` 或 `false`(預設) | 即使有實體圖片可用,也強制顯示圖示 |
| `sub_button_type` | string | 選填 | `default`、`slider` 或 `select` | 選擇子按鈕的類型 |
| `show_background` | boolean | 選填 | `true`(預設)或 `false` | 顯示子按鈕的背景,會根據實體狀態改變顏色 |
| `state_background` | boolean | 選填 | `true`(預設)或 `false` | 當實體為 `on` 時使用狀態顏色 |
| `light_background` | boolean | 選填 | `true`(預設)或 `false` | 若有可用的燈光顏色,則將其用作背景顏色 |
| `show_state` | boolean | 選填 | `true` 或 `false`(預設) | 顯示或隱藏 `entity` 的狀態 |
| `show_name` | boolean | 選填 | `true` 或 `false`(預設) | 顯示或隱藏名稱 |
| `show_icon` | boolean | 選填 | `true`(預設)或 `false` | 顯示或隱藏圖示 |
| `show_last_changed` | boolean | 選填 | `true` 或 `false`(預設) | 顯示 `entity` 最後一次變更的時間 |
| `show_last_updated` | boolean | 選填 | `true` 或 `false`(預設) | 顯示 `entity` 最後一次更新的時間 |
| `show_attribute` | boolean | 選填 | `true` 或 `false`(預設) | 在 `name` 下方顯示 `entity` 的屬性 |
| `attribute` | string | 選填(若 `show_attribute` 設為 `true` 則必填) | `entity` 的其中一個屬性 | 要顯示的屬性(例如 `brightness`) |
| `select_attribute` | string | 選填 | `entity` 的屬性清單(參見上方支援的選項) | 點擊此屬性清單會開啟下拉選單(例如 `effect_list`) |
| `show_arrow` | boolean | 選填 | `true`(預設)或 `false` | 顯示或隱藏選擇型子按鈕的下拉箭頭 |
| `scrolling_effect` | boolean | 選填 | `true`(預設)或 `false` | 當內容超出容器大小時允許文字捲動 |
| `tap_action` | object | 選填 | 參見[動作](#點擊雙擊與長按動作) | 定義點擊子按鈕時的動作類型,若未定義則使用 `more-info` |
| `double_tap_action` | object | 選填 | 參見[動作](#點擊雙擊與長按動作) | 定義雙擊子按鈕時的動作類型,若未定義則使用 `none` |
| `hold_action` | object | 選填 | 參見[動作](#點擊雙擊與長按動作) | 定義長按子按鈕時的動作類型,若未定義則使用 `more-info` |
| `fill_width` | boolean | 選填 | `true` 或 `false` | 填滿可用寬度(預設:`main` 為 `false`,`bottom` 為 `true`) |
| `width` | number 或 string | 選填 | 任何數字或 CSS 長度值 | 自訂寬度(`main` 區塊預設為 `px`,`bottom` 區塊預設為 `%`) |
| `custom_height` | number | 選填 | 任何數字 | 自訂高度(以像素為單位) |
| `content_layout` | string | 選填 | `icon-left`(預設)、`icon-top`、`icon-bottom`、`icon-right` | 子按鈕內圖示的位置 |
| `always_visible` | boolean | 選填 | `true` 或 `false`(預設) | **僅限滑桿。**永遠顯示滑桿,而非點擊後才開啟 |
| `show_button_info` | boolean | 選填 | `true` 或 `false`(預設) | **僅限滑桿。**啟用 `always_visible` 時顯示圖示、名稱、狀態 |
| `visibility` | object 或 list | 選填 | 參見[條件](#條件) | 根據條件顯示或隱藏子按鈕 |
| `hide_when_parent_unavailable` | boolean | 選填 | `true` 或 `false`(預設) | 當父卡片實體不可用時隱藏子按鈕 |
| `css_class` | string | 選填 | 任何字串 | 子按鈕上額外的一個 CSS 類別，讓你不論它叫什麼名字都能在[樣式](#樣式)中指定到它(例如 `My value` 會得到 `.my-value`) |

</details>

<details>

<summary><b>滑桿子按鈕選項(與按鈕滑桿相同)</b></summary>

<br>

滑桿子按鈕支援與按鈕滑桿相同的選項,包括:
`min_value`、`max_value`、`step`、`tap_to_slide`、`relative_slide`、`read_only_slider`、`slider_live_update`、`slider_fill_orientation`、`slider_value_position`、`invert_slider_value`、`light_slider_type`、`cover_slider_type`、`hue_force_saturation`、`hue_force_saturation_value`、`use_accent_color`、`allow_light_slider_to_0`、`light_transition`、`light_transition_time`。

</details>

<details>

<summary><b>CSS 變數(參見 <a href="#styling">樣式</a>)</b></summary>

| 變數 | 預期值 | 說明 |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | 子按鈕的圓角半徑 |
| `--bubble-sub-button-background-color` | `color` | 子按鈕的背景顏色 |
| `--bubble-sub-button-outline` | `box-shadow` | 只有當子按鈕或滑桿與其後方卡片顏色相同、因而會看不見時，才會為它加上的外框(設為 `none` 即可移除) |
| `--bubble-sub-slider-border-radius` | `px` | 滑桿子按鈕的圓角半徑 |
| `--bubble-sub-slider-background-color` | `color` | 滑桿子按鈕的背景顏色 |
| `--bubble-sub-slider-height` | `px` | 永久顯示滑桿子按鈕的高度 |
| `--bubble-sub-slider-outline` | `box-shadow` | 僅滑桿子按鈕的外框，未設定時會回落到 `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | 明亮子按鈕背景上的文字顏色 |

</details>

#### 範例

<details>

<summary>一個帶有多個子按鈕的按鈕,做成吸塵器卡片(如截圖所示)</summary>

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

<summary>一個按鈕滑桿,搭配顯示亮度的子按鈕以及切換燈光的子按鈕(如截圖所示)</summary>

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

<summary>一個顯示室內外溫度以及今明兩日天氣的按鈕(含截圖)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> 很不巧,我這裡一直都是陰天,不過所有圖示都會根據天氣自動變化。

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

## 卡片版面配置

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card 完整支援 Home Assistant 的區塊檢視,您可以變更卡片的版面配置讓卡片變大,也可以變更卡片在區塊檢視中應佔用的欄數或列數(僅限支援此選項的卡片)。這些版面配置在其他所有檢視類型中也都受支援。

<details>

<summary><b>可用的卡片版面配置</b></summary>

| 版面配置 | 說明 |
| --- | --- |
| `normal` | 一般版面配置(未針對區塊檢視最佳化) |
| `large` | 較大的版面配置,會依照區塊檢視中所選的列數調整大小(針對區塊檢視最佳化) |
| `large-2-rows` | 具有兩列子按鈕的較大版面配置,會依照區塊檢視中所選的列數調整大小(針對區塊檢視最佳化) |
| `large-sub-buttons-grid` | 此版面配置會以網格方式顯示子按鈕,`rows` 必須至少設為 `2`。

</details>

#### 範例

<details>

<summary>一個顯示能源統計資訊、含兩列子按鈕的大型按鈕(含截圖)</summary>

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

<summary>一個具有多列、含 12 個子按鈕的大型按鈕</summary>

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

## 條件

有些選項是由條件驅動的，寫法與 Home Assistant [條件卡片](https://www.home-assistant.io/dashboards/conditional/)的條件完全相同：

- [子按鈕](#子按鈕)上的 `visibility`，用來顯示或隱藏它
- [彈出視窗](#彈出視窗)上的 `trigger`，用來在條件成立時開啟它
- [範本](#範本)中的 `checkConditionsMet(conditions, hass)`，當你需要在自己的程式碼裡得到答案時

Home Assistant 的每一種條件類型都會被求值：`state`、`numeric_state`、`screen`、`user`、`time`、`location`、`template`，以及 `and`、`or` 與 `not` 群組。Home Assistant 條件建構器中的條件同樣可用，也就是那些以其領域命名的條件，例如 `sun.is_up`、`light.is_on`、`zone.in_zone` 或 `temperature.is_value`，連同它們的 `target`、`options`、`behavior` 與 `for` 設定。

<details>

<summary><b>範例</b></summary>

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
> 條件是在你的瀏覽器中求值的，因此少數需要 Home Assistant 伺服器的條件無法做到精確：日出與日落是從 `sun.sun` 實體讀取，而不是重新計算，而 `for` 的持續時間則是從最後一次狀態變化起算，沒有 recorder 的歷史紀錄。
>
> `view_columns` 會被接受但永遠成立，因為為你的檢視排列欄位的從來都不是 Bubble Card。Bubble Card 不認識的條件類型，會在你的瀏覽器主控台中回報一次，而不是無聲地失敗，這樣你就能分辨是打錯字還是尚未支援的功能。

<br>

---

<br>

## 點擊、雙擊與長按動作

在支援此選項的卡片上,您也可以使用 Home Assistant 預設的點擊動作、雙擊動作與長按動作。舉例來說,這樣就能透過長按按鈕圖示來顯示「更多資訊」視窗,或是在點擊子按鈕時執行某項服務。

**注意:當設定了 `double_tap_action` 時,一般的 `tap_action` 會延遲 200 毫秒觸發,以便偵測是否為雙擊。若不希望有此延遲,請將 `double_tap_action` 設為 `none` 以停用雙擊偵測功能。**

### 動作選項

<details>

<summary><b>選項(YAML 與說明)</b></summary>

| 名稱 | 類型 | 支援的選項 | 說明 |
| --- | --- | --- | --- |
| `action` | string | `more-info`、`toggle`、`call-service`、`navigate`、`url`、`fire-dom-event`、`none` | 要執行的動作 |
| `target` | object |  | 僅適用於 `call-service`。遵循 [home-assistant 語法](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | 您儀表板中的任何路徑 | 當動作定義為 navigate 時,要導向的路徑(例如 `'#kitchen'` 用來開啟彈出視窗) |
| `url_path` | string | 任何連結 | 當 `action` 為 `url` 時,點擊要開啟的網址(例如 `https://www.google.com`) |
| `service` | string | 任何服務 | 當 `action` 定義為 `call-service` 時,要呼叫的服務(例如 `media_player.media_play_pause`) |
| `data` 或 `service_data` | object | 任何服務資料 | 當 `action` 定義為 `call-service` 時,要包含的服務資料(例如 `entity_id: media_player.kitchen`) |
| `confirmation` | object | 參見[確認](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | 顯示確認彈出視窗(非 Bubble Card 的樣式),會覆蓋預設的 `confirmation` 物件 |

</details>

#### 範例

<details>

<summary>一個用來開啟彈出視窗的按鈕</summary>

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


## 樣式

你可以透過四種方式，**不使用 card-mod**，就能加入自訂樣式來修改所有卡片的 CSS：

- 在編輯器中，前往你想修改的卡片，然後進入「樣式選項 > 自訂樣式與 JS 範本」，加入你的自訂樣式（請參考下方的技巧與範例）。
- 在編輯器中（或在 [YAML](#模組) 中），前往你想修改的卡片，然後進入「模組」，接著建立一個新模組（它會可以套用到所有卡片），或前往 **Module Store** 安裝任何可用的模組（更多關於模組的細節可以在[下方](#模組)找到）。
- 在[主題](https://www.home-assistant.io/integrations/frontend/#defining-themes)檔案中，透過在 YAML 中加入 CSS 變數（這些變數可以在上方各卡片的說明文件中找到）。這樣可以進行全域性的修改。

  <details>
  
  <summary>範例</a></summary>
  
  <br>

  請不要複製 `Bubble:` 這一行，這只是你所使用的主題名稱。你也需要把變數前面的 `--` 移除。

  修改之後，你需要執行 [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) 動作來重新整理主題。

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
  
- 在 YAML 中加入 `styles: |`，接著寫上你的自訂樣式（請參考下方的技巧與範例）。

> [!TIP]  
> **若要了解哪些樣式類別可以修改**，你可以查看這個儲存庫中的 [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) 資料夾。在每個卡片資料夾中，你會找到一個名為 `styles.css` 的檔案。這些檔案包含所有套用中的樣式。這樣做比使用 CSS 變數多出更多的可能性，但需要個別加入到每張卡片中。
> 
> 你也可以稍微搜尋一下，找到許多[來自社群的範例](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards)，或是來自 [Home Assistant 論壇](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/)的範例。
>
> 適用於 Home Assistant 的 Bubble 主題（如截圖所示）可以在[這裡](https://github.com/Clooos/Bubble)找到。
>
> 教學影片即將在我的 [YouTube 頻道](https://www.youtube.com/@cloooos)上推出！

> [!IMPORTANT]  
> 請注意，有些已經定義的 CSS 樣式可能需要加上 `!important;`（請參考下方範例）。

> [!TIP]  
> 子按鈕可以透過以名稱為基礎的類別來指定樣式。例如，一個名為「My sub-button」的子按鈕可以用 `.my-sub-button` 來設定樣式。滑桿子按鈕也提供了 `.bubble-sub-button-slider-1`、`.bubble-sub-button-slider-2` 等類別。
>
> 以名稱為基礎的類別會在你重新命名子按鈕時改變，名稱被翻譯時它也會跟著被翻譯。在子按鈕上設定 `css_class`，就能得到一個屬於你自己的類別，不論名稱是什麼、語言是什麼都不會變動。

#### 範例

<details>

<summary>改變任何 Bubble Card 的字體大小</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>改變水平按鈕堆疊中單一按鈕的背景顏色</summary>

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

<summary>改變卡片的背景顏色</summary>

<br>

這個方法適用於所有類型的 Bubble Card（彈出視窗除外）：

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

這個方法則是在按鈕卡片中做同樣的事（它也適用於彈出視窗的標頭）：

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

若要在狀態為 `on` 時改變顏色，請參考下方的樣式範本。

</details>

<details>

<summary>改變按鈕滑桿的顏色</summary>

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

<summary>改變分隔線的線條顏色</summary>

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

<summary>改變圖示的顏色</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

適用於水平按鈕堆疊的圖示。
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>改變圖示容器的背景顏色</summary>

<br>

這個方法適用於所有類型的 Bubble Card（彈出視窗除外）：

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

這個方法則是在彈出視窗標頭中做同樣的事：

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>改變子按鈕的大小（非常適合大型版面配置）</summary>

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

<summary>改變第二個子按鈕的背景顏色</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>改變圖示的大小</summary>

<br>

適用於主圖示。

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

適用於子按鈕圖示。

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>在子按鈕中使用圖片而非圖示</summary>

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

只要把這張圖片上傳到 Home Assistant「www」資料夾中的「pictures」資料夾（或你想取的任何名稱）即可。

</details>

<details>

<summary>進階範例：建立一排水平排列的子按鈕（含截圖）</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> 我真的很喜歡這個範例，我在自己的儀表板中把它當作標頭使用。

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

## 範本

**Bubble Card 不支援 Jinja 範本**，但進階使用者可以直接在[自訂樣式](#樣式)中加入 JS 範本。舉例來說，這讓你可以動態改變一個元素的圖示、文字或顏色，依條件顯示或隱藏一個元素（例如子按鈕），或幾乎任何根據狀態、屬性等等所做的變化。

> [!TIP]  
> 更多關於 JS 範本的資訊請參考[這裡](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)。我的建議是**務必檢查瀏覽器主控台**，以確保一切都正常運作。

> [!IMPORTANT]  
> **所有不是用來修改 CSS 屬性的範本，必須放在最後面！像是修改圖示、文字或任何元素。**

#### 可用的變數與函式

<details>

<summary>變數</summary>

<br>

在大多數卡片中，你可以使用這些變數：

- `state` 會回傳你設定的 `entity` 的狀態。
  
- `entity` 會回傳你設定的實體，例如本範例中的 `switch.test`。
  
- `icon` 可以像這樣用來改變圖示：`icon.setAttribute("icon", "mdi:lightbulb")`。

- `subButtonState[0]` 會回傳你第一個子按鈕所設定的 `entity` 的狀態，`[0]` 是第一個子按鈕的狀態，`[1]` 是第二個……
  
- `subButtonIcon[0]` 可以像這樣用來改變第一個子按鈕的圖示：`subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`，`[0]` 是第一個子按鈕的圖示，`[1]` 是第二個……
  
- `card` 會回傳 DOM 中的卡片元素。
  
- `hass` 是一個進階變數，能提供你更多控制能力，例如你可以像這樣回傳 `light.kitchen` 的狀態：`hass.states['light.kitchen'].state`，或是一個屬性：`hass.states[entity].attributes.brightness`。

- `this` 會回傳許多關於你的設定和儀表板的實用資訊，只有在你清楚自己在做什麼時才使用它。

</details>

<details>

<summary>函式</summary>

<br>

你可以使用所有全域的 JS 函式，此外你還能使用：

- `getWeatherIcon` 可以用來根據回傳天氣的狀態來取得對應的天氣圖示。舉例來說，你可以這樣寫：`${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`，將第三個子按鈕的圖示改成今天的天氣圖示，`.forecast[1]?.condition` 則是明天的……

  你需要為此建立一個範本感測器。以下是你可以加入 `configuration.yaml` 的內容：
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
- `checkConditionsMet(conditions, hass)` 會在一組[條件](#條件)成立時回傳 `true`，例如 `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`。
- `hass.formatEntityState(state)` 可以用來翻譯一個狀態（也可以用來取得狀態單位，而不需要手動加入）。
- `hass.formatEntityAttributeValue(state, "attribute")` 可以用來翻譯一個屬性（也可以用來取得狀態單位，而不需要手動加入）。

</details>

#### 範例

以下你可以找到許多範例，此外你也可以在我的 [Patreon 頁面](https://www.patreon.com/c/Clooos)找到非常進階的範本，像是其中一個（我個人最喜歡的）能在卡片圖示周圍放置最多四個條件式徽章。這也是學習 Bubble Card 自訂樣式與範本所有可能性的絕佳方式！

<details>
<summary>來自我的 Patreon 頁面的範例</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">為任何卡片加上類似 Home Assistant 的徽章</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">在分隔線中顯示格式化的日期與時間，且不需使用任何實體</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">以兩行顯示子按鈕狀態</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">自訂選擇子按鈕中的標籤與圖示</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">加入一個只在需要時才出現的常駐提醒彈出視窗</a>
</p>

<br>

</details>

<details>

<summary>將按鈕在 <code>off</code> 時改成紅色背景，在 <code>on</code> 時改成藍色背景</summary>

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

<summary>依水平按鈕堆疊中某個實體的狀態改變按鈕的背景顏色</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>依條件顯示／隱藏子按鈕</summary>

<br>

這個範例會在我的掃地機器人卡住時，才顯示第一個子按鈕。
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

這個範例會在電池電量低於 10% 時顯示一個子按鈕，很適合搭配顯示「電池電量低」的子按鈕使用。
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>依條件改變圖示或子按鈕圖示</summary>

<br>

這個範例只會在掃地機器人卡住時改變按鈕圖示。
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

這個範例只會在掃地機器人卡住時改變第一個子按鈕的圖示。
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>依條件改變圖示或子按鈕圖示的顏色</summary>

<br>

這個範例會根據狀態改變按鈕圖示的顏色。
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

這個範例會根據狀態改變子按鈕圖示的顏色。`.bubble-sub-button-1` 是第一個子按鈕，若想改變其他子按鈕的圖示，請替換 `1`。
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>依條件為風扇圖示加上動畫</summary>

<br>

這個範例會在風扇為 `on` 時旋轉按鈕圖示。
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

<summary>為文字建立範本（例如名稱或狀態）</summary>

<br>

這個範例會依照天氣，把按鈕名稱／狀態改成「目前天氣晴朗」。
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
或是套用於子按鈕時：
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


如果你想為狀態（`.bubble-state`）建立範本，請不要開啟 `show_state: true`，只需開啟 `show_attribute: true` 且不設定任何屬性即可。

</details>

<details>

<summary>進階範例：在彈出視窗開啟時改變子按鈕的顏色</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>進階範例：依已翻譯成你語言的狀態，為分隔線名稱建立範本</summary>

<br>

你可以使用 `hass.formatEntityState(state)` 來翻譯狀態，並使用 `hass.formatEntityAttributeValue(state, "attribute")` 來翻譯屬性。

這個範例會依照天氣改變名稱與圖示，法文中「Nuageux」代表「多雲」。

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

## 模組

模組是一個強大的功能，讓你可以在所有的 Bubble Card 之間儲存、重複使用並分享你的自訂樣式和範本。你不必在多張卡片中重複複製貼上相同的程式碼，而是可以建立一個模組，然後在任何需要的地方套用它。這讓管理儀表板的外觀和風格變得更簡單、更有效率。

但這個功能遠比這更強大，它讓你能夠透過 Bubble Card 編輯器親自加入實際的功能，使用所有預設的 [Home Assistant 表單](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)選項！
物件選擇器已經過改進，能即時顯示變更並正確支援屬性。

模組也可以在內建[實體建議](#實體建議)旁邊回應 Home Assistant 的卡片挑選器：對於可以事先描述的卡片請使用 `suggestions`，當它們必須依你的安裝環境運算時則使用 `suggestions_code`，例如由所選實體所屬區域中的所有實體組成的一個彈出視窗。這兩個鍵的說明都在[這裡](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions)。

你也可以瀏覽 **Module Store**，尋找並安裝[社群建立的模組](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)，或分享你自己的創作！

> [!TIP]
> 模組的程式碼運作方式與卡片 `styles` 區塊中的程式碼完全相同。[範本](#範本)章節中的所有變數和函式在這裡同樣可用。

<br>

### 初始設定

> [!IMPORTANT]
> 從 v3.1.0 開始，Bubble Card Tools 是模組建議使用的儲存後端。舊有的範本感測器方式對於既有設定仍然可用，但新的模組以及 Module Store 功能最好透過 Bubble Card Tools 來支援。

Bubble Card Tools 整合元件可啟用模組編輯器與 Module Store，並將模組以個別的 YAML 檔案儲存。既有的模組會自動遷移。

安裝與設定步驟說明如下：

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### 模組編輯器

你可以從任何卡片的設定中，在**模組**區塊存取模組編輯器。編輯器提供兩個主要分頁：

#### 我的模組分頁

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

這個分頁會顯示你所有已安裝的模組，並讓你可以：

- **套用**現有的模組到目前的卡片
- **建立**一個全新的模組
- 使用即時預覽**編輯**現有的模組
- **刪除**不再需要的模組
- **搜尋**與**排序**模組（依字母、最近或啟用中優先排序）
- **設定全域狀態**，讓模組自動套用到所有卡片
- **匯入／匯出**模組以備份或分享
- 在模組編輯器的 **選用：實體建議** 底下**撰寫實體建議**，讓你的模組出現在 Home Assistant 的卡片挑選器中。規則與運算建議都會在你撰寫時受到檢查，其中有錯誤就無法儲存，而預覽會顯示為你所選的任何實體建議的卡片

#### Module Store 分頁

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

這個分頁會顯示[所有來自社群的可用模組](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)，並讓你可以：

- **瀏覽**所有社群建立的模組
- 依名稱、相容性或關鍵字**搜尋**並篩選模組
- 一鍵**安裝**模組
- 有新版本時**更新**已安裝的模組

> [!TIP]
> 在編輯器中，你可以啟用尚未標示為與特定卡片類型相容的模組，以測試這些未受支援的模組。

<br>

### 如何使用模組

#### 建立一個新模組

<details>

<summary>點擊展開</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. 前往任何卡片的編輯器，展開**模組**區塊。
2. 點擊**建立新模組**。
3. 填寫模組資訊。
4. 在**程式碼**編輯器中撰寫你的 CSS 和／或 JavaScript 範本程式碼。
5. （選用）在**編輯器**區塊建立自訂設定介面（就像上方截圖中的顏色選擇器，完整文件請參考[這裡](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)）。
6. （選用）撰寫你的**實體建議**，讓你的模組出現在 Home Assistant 的卡片挑選器中。此面板會在你輸入時檢查內容，而它的預覽會顯示為你所選實體建議的卡片本身。
7. 點擊**儲存**。

你的模組現在已經可以套用到任何一張卡片上了！

<br>

</details>

#### 將模組套用到卡片

<details>

<summary>點擊展開</summary>

<br>

- **透過編輯器：**

  - 前往你想套用模組的卡片的編輯器。
  - 展開**模組**區塊。
  - 從清單中點擊你想套用的模組。
  - 在「套用至」下方，點擊「此卡片」。模組現在已啟用。你可以將多個模組套用到同一張卡片。

- **透過 YAML：**

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

#### 全域套用模組

<details>

<summary>點擊展開</summary>

<br>

你可以設定一個模組，讓它自動套用到所有的 Bubble Card：

**這個功能不適用於有編輯器的模組，因為那些模組需要特定的設定才能運作。**

- **透過編輯器：**

  - 在模組編輯器中，於**我的模組**分頁找到你的模組。
  - 切換模組名稱旁的**所有卡片**按鈕。
  - 這個模組現在會自動套用到所有卡片。
 
- **透過 YAML：**

  在你的模組 YAML 設定中（於 `bubble-modules.yaml`），只要加入 `is_global: true` 即可。

<br>

</details>

#### 讓單一卡片排除某個全域模組

<details>

<summary>點擊展開</summary>

<br>

如果你有一個全域模組，但想在特定卡片上排除它：

- **透過編輯器：**
  
  - 在卡片的**模組**區塊，你會看到列出的全域模組。
  - 點擊該全域模組，關閉「此卡片」，即可將它從這張特定卡片中排除。

- **透過 YAML：**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### 將你的模組分享到 Module Store

<details>

<summary>點擊展開</summary>

<br>

若要將你的模組分享到 Module Store，在模組編輯器底部的「匯出模組」處，點擊「複製給 GitHub 用」，然後將內容貼到 [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) 分類下的一則新討論中。請**編輯說明文字**（如有需要）、**範例**（給 YAML 使用者），並記得**至少附上一張截圖**，供 Module Store 使用。

**你的模組在此之後就會立即可用**（在 Store 重新整理之後），所以請務必再三確認一切都正確無誤，且模組運作如預期。分享之後，你當然仍可以編輯／更新這個模組。

<br>

</details>

#### 版本管理

<details>

<summary>點擊展開</summary>

<br>

Module Store 會自動檢查已安裝模組是否有更新。有更新可用時：

1. 你會在 **Module Store** 分頁看到更新提示。
2. 在有可用更新的模組上點擊**更新**。
3. 在 Module Store 中確認更新。

<br>

</details>

#### 定義支援的卡片類型

<details>

<summary>點擊展開</summary>

<br>

有些模組可能並非與所有卡片類型相容。你可以指定一個模組支援哪些卡片。
如果你希望一個模組相容於**所有卡片**，只要省略 `supported` 欄位即可（或在編輯器中使用**所有卡片**選項）。

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

### 範例

<details>
<summary>基本樣式模組</summary>

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
<summary>含自訂設定的模組</summary>

<br>

這個模組可以在[這裡](https://github.com/Clooos/Bubble-Card/discussions/1231)找到。

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

更多範例可以在 Module Store 中找到，或參考[這裡](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)。

<br>

---

<br>

## 在地化

Bubble Card 說你的語言。它的編輯器已翻譯成 Home Assistant 支援的 64 種語言，凡是 Home Assistant 已經有說法的地方，都沿用它自己的用字，這樣你在兩個介面裡讀到的會是相同的術語。

在編輯器底部、版本號旁邊，有一個 **自動** 開關會跟隨你的 Home Assistant 語言。把它關掉，整個編輯器就會回到英文，這在照著教學操作或回報問題時很方便。你的選擇會記在瀏覽器裡。

這份文件同樣被翻譯了，[共 62 種語言](languages.md)。這些頁面對所有人開放，因此與你自己的 Home Assistant 不一致的用字，只要點幾下就能修正。英文版仍然是內容本身的依據。

<br>

---

<br>

## 說明

如果有任何功能無法正常運作，歡迎開啟一個 issue。

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

對 Bubble Card 有疑問或想法嗎？想分享你的儀表板或新發現嗎？你可以到 Home Assistant 論壇、Bubble Card 的 subreddit，或是 GitHub Discussions 區塊。

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## 貢獻

歡迎任何形式的貢獻！無論是修正錯誤、新增功能、翻譯，或是改善文件，都歡迎開啟一個 pull request。

在開始之前，請先閱讀[開發者指南](DEVELOPERS.md)，其中說明如何設定本機開發環境、建置專案，以及測試你的修改。

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## 贊助

我把大部分的空閒時間都投入在讓這個專案變得更好。所以如果你欣賞我的付出，任何形式的贊助都會是表達支持的好方式 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

感謝每一位支持我的人，你們都是我最大的動力！

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
