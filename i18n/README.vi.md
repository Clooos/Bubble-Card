<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Trang này là bản dịch tự động. Khi có nghi ngờ, [tài liệu gốc tiếng Anh](../README.md) là bản chuẩn. Có câu nào đọc chưa xuôi? Mọi sự giúp đỡ đều được hoan nghênh, và [sửa trang này](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.vi.md) chỉ mất một phút: GitHub sẽ lo phần fork và pull request. Xin cảm ơn trước! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Đọc trang này bằng ngôn ngữ khác](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card là một bộ sưu tập thẻ tối giản và có thể tùy chỉnh dành cho Home Assistant, với các pop-up hiện đại và một Module Store tích hợp gồm hơn 100 mô-đun do cộng đồng tạo ra.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Mục lục

**[`Cài đặt`](#cài-đặt)**  **[`Cấu hình`](#cấu-hình)**  **[`Gợi ý thực thể`](#gợi-ý-thực-thể)**  **[`Pop-up`](#pop-up)**  **[`Ngăn xếp nút ngang`](#ngăn-xếp-nút-ngang)**  **[`Nút`](#nút)**  **[`Trình phát đa phương tiện`](#trình-phát-đa-phương-tiện)**  **[`Rèm cửa`](#rèm-cửa)**  **[`Chọn`](#chọn)**  **[`Điều hòa`](#điều-hòa)**  **[`Lịch`](#lịch)**  **[`Dấu phân cách`](#dấu-phân-cách)**  **[`Cột trống`](#cột-trống)**  **[`Chỉ nút phụ`](#chỉ-nút-phụ)**  **[`Nút phụ`](#nút-phụ)**  **[`Bố cục thẻ`](#bố-cục-thẻ)**  **[`Điều kiện`](#điều-kiện)**  **[`Hành động`](#hành-động-chạm-chạm-đúp-và-giữ)**  **[`Giao diện`](#giao-diện)**  **[`Mẫu`](#mẫu)**  **[`Mô-đun`](#mô-đun)**  **[`Bản địa hóa`](#bản-địa-hóa)**  **[`Trợ giúp`](#trợ-giúp)**  **[`Đóng góp`](#đóng-góp)**  **[`Quyên góp`](#quyên-góp)**

<br>

## Cài đặt

**Phiên bản Home Assistant tối thiểu được hỗ trợ:** 2023.9.0

<details>

<summary>Không dùng HACS</summary>

<br>

1. Tải tệp này: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Thêm tệp này vào thư mục `<config>/www` của bạn. Để có trình chỉnh sửa bằng ngôn ngữ của bạn, hãy tải thêm `bubble-card-<lang>.json` từ [thư mục dist](https://github.com/Clooos/Bubble-Card/tree/main/dist), ví dụ `bubble-card-fr.json`, rồi đặt nó bên cạnh `bubble-card.js` (không có nó thì trình chỉnh sửa vẫn ở tiếng Anh)
3. Trên dashboard của bạn, nhấp vào biểu tượng ở góc trên bên phải rồi chọn `Edit dashboard`
4. Nhấp lại vào biểu tượng đó rồi chọn `Manage resources`
5. Nhấp vào `Add resource`
6. Sao chép và dán nội dung này: `/local/bubble-card.js?v=1`
7. Nhấp vào `JavaScript Module` rồi `Create`
8. Quay lại và tải lại trang của bạn
9. Bây giờ bạn có thể nhấp vào `Add card` ở góc dưới bên phải và tìm `Bubble Card`
10. Sau mỗi lần cập nhật tệp, bạn sẽ phải chỉnh sửa `/local/bubble-card.js?v=1` và đổi số phiên bản thành một số cao hơn

Nếu nó không hoạt động, hãy thử xóa bộ nhớ đệm trình duyệt của bạn.

</details>

<details>

<summary>Dùng HACS (Khuyến nghị)</summary>

<br>

Phương pháp này cho phép bạn nhận cập nhật trực tiếp trên Home Assistant Community Store

1. Nếu HACS chưa được cài đặt, hãy tải nó theo hướng dẫn tại [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Tiến hành cấu hình ban đầu cho HACS theo hướng dẫn tại [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Trên thanh bên của bạn, vào "HACS"
4. Tìm "Bubble Card", hoặc nhấp vào nút màu xanh bên dưới
5. Nhấp vào "Download"
6. Quay lại dashboard của bạn và nhấp vào biểu tượng ở góc trên bên phải rồi chọn `Edit dashboard`
7. Bây giờ bạn có thể nhấp vào `Add card` ở góc dưới bên phải và tìm `Bubble Card`

Nếu nó không hoạt động, hãy thử xóa bộ nhớ đệm trình duyệt/ứng dụng của bạn (trên tất cả thiết bị nếu cần).

#### Video

Bạn cũng có thể xem kênh YouTube của tôi để có video hướng dẫn từng bước.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Cấu hình

Tất cả các tùy chọn có thể được cấu hình trong trình chỉnh sửa của Home Assistant. Nhưng bạn có thể tìm thêm chi tiết và YAML trong tài liệu bên dưới.

<details>

<summary><b>Tùy chọn chính (YAML + mô tả)</b></summary>

| Tên | Kiểu | Yêu cầu | Tùy chọn được hỗ trợ | Mô tả |
| --- | --- | --- | --- | --- |
| `type` | string | **Bắt buộc** | `custom:bubble-card` | Loại của thẻ |
| `card_type` | string | **Bắt buộc** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` hoặc `sub-buttons` | Loại của Bubble Card, xem bên dưới |
| `styles` | object list | Tùy chọn | Bất kỳ stylesheet CSS nào | Cho phép bạn tùy chỉnh CSS của Bubble Card, xem [giao diện](#giao-diện) |

</details>

<details>

<summary><b>Biến CSS toàn cục (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Biến | Giá trị mong đợi | Mô tả |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Bán kính bo góc cho tất cả các phần tử được hỗ trợ |
| `--bubble-main-background-color` | `color` | Màu nền chính cho tất cả các phần tử được hỗ trợ |
| `--bubble-secondary-background-color` | `color` | Màu nền phụ cho tất cả các phần tử được hỗ trợ |
| `--bubble-accent-color` | `color` | Màu nhấn cho tất cả các phần tử được hỗ trợ |
| `--bubble-icon-border-radius` | `px` | Bán kính bo góc biểu tượng cho tất cả các phần tử được hỗ trợ |
| `--bubble-icon-background-color` | `color` | Màu nền biểu tượng cho tất cả các phần tử được hỗ trợ |
| `--bubble-sub-button-border-radius` | `px` | Bán kính bo góc cho tất cả các nút phụ |
| `--bubble-sub-button-background-color` | `color` | Màu nền cho tất cả các nút phụ |
| `--bubble-box-shadow` | xem [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Đổ bóng cho tất cả các phần tử được hỗ trợ |
| `--bubble-border` | xem [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Viền cho tất cả các thẻ được hỗ trợ |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Hãy xem [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) này để tìm hiểu về Bubble Card và các khả năng của nó.** Kênh YouTube của tôi còn khá mới và tập trung vào các hướng dẫn về Home Assistant và Bubble Card. Đừng ngần ngại đăng ký để giúp tăng độ nhận diện cho kênh của tôi. Xin cảm ơn trước!

<br>

---

<br>

## Gợi ý thực thể

Kể từ Home Assistant 2026.6, việc chọn một thực thể trong bộ chọn thẻ sẽ đề xuất cho bạn vài thẻ dựng sẵn, và Bubble Card thêm những công thức của riêng nó vào danh sách đó. Chọn một đèn và bạn được đề xuất một thẻ có thanh trượt độ sáng, kèm theo các biến thể nhiệt độ màu, màu sắc và độ bão hòa khi đèn của bạn hỗ trợ. Chọn một rèm cửa và bạn có thanh trượt vị trí của nó, chọn một trình phát đa phương tiện và bạn còn có một biến thể kèm danh sách nguồn, chọn một máy hút bụi và bạn có các nút bắt đầu, tạm dừng và về dock. Mỗi gợi ý là một cấu hình Bubble Card bình thường được hiển thị dưới dạng xem trước trực tiếp, nên bạn có thể lấy cái gần nhất và tiếp tục chỉnh sửa như thường lệ.

Những gì được đề xuất phụ thuộc vào việc thực thể của bạn thực sự làm được gì: một đèn không có kênh độ sáng sẽ nhận công tắc thay vì thanh trượt, một rèm cửa không nghiêng được thì không có biến thể góc nghiêng, và một thực thể điều hòa chỉ nhận các chế độ cài sẵn khi nó có. Các mục cổ điển theo sau bên dưới các gợi ý của Bubble Card khi phù hợp: thẻ chuyên dụng cho loại thực thể đó, một nút thường và một thanh trượt.

> [!TIP]
> Mô-đun có thể thêm gợi ý của riêng chúng vào danh sách đó, xem [mô-đun](#mô-đun).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Thẻ này cho phép bạn tạo một pop-up với bất kỳ nội dung nào. Mỗi pop-up **ẩn theo mặc định** và có thể được mở bằng cách nhắm vào liên kết của nó (ví dụ: `'#pop-up-name'`), với bất kỳ thẻ nào hỗ trợ [hành động](#hành-động-chạm-chạm-đúp-và-giữ) `navigate`, hoặc với [ngăn xếp nút ngang](#ngăn-xếp-nút-ngang) đi kèm.

> [!TIP]
> ### Kích hoạt pop-up 
> Tính năng này cho phép bạn mở một pop-up dựa trên trạng thái của bất kỳ thực thể nào, ví dụ, bạn có thể mở một pop-up "An ninh" với hình ảnh camera khi có người ở trước nhà bạn. Bạn cũng có thể tạo một helper dạng công tắc (input_boolean) và kích hoạt việc mở/đóng nó trong một automation.
> <details>
> <summary>Mở một pop-up khi một <code>binary_sensor</code> ở trạng thái <code>on</code></summary>
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
> ### Các cách khác nhau để đóng một pop-up 
> Có nhiều cách để đóng một pop-up. Chẳng hạn, bạn có thể vuốt từ phần đầu của pop-up xuống dưới, bằng cách vuốt dài bên trong pop-up xuống dưới, bằng cách nhấn Escape trên máy tính để bàn, bằng cách xóa hash trong URL hoặc đơn giản là nhấn nút đóng.
>


### Tùy chọn pop-up

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Tên | Kiểu | Yêu cầu | Tùy chọn được hỗ trợ | Mô tả |
| --- | --- | --- | --- | --- |
| `hash` | string | **Bắt buộc** | Bất kỳ hash duy nhất nào (ví dụ: `'#kitchen'`) với ' ' | Đây là cách bạn sẽ mở pop-up của mình |
| `popup_style` | string | Tùy chọn | `bubble` (mặc định) hoặc `classic` | Xác định kiểu hiển thị của pop-up |
| `popup_mode` | string | Tùy chọn | `default` (mặc định), `fit-content`, `centered` hoặc `adaptive-dialog` | Xác định chế độ bố cục của pop-up |
| `with_bottom_offset` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Chỉ dùng với `popup_mode: fit-content` hoặc `adaptive-dialog`. Áp dụng một khoảng đệm dưới cùng trên di động, hữu ích khi dashboard của bạn có thẻ footer. |
| `full_width_on_mobile` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Chỉ dùng với `popup_mode: centered`. Mở rộng pop-up ra toàn màn hình trên di động, hữu ích trên các màn hình nhỏ hơn. |
| `performance_mode` | string | Tùy chọn | `default` (mặc định) hoặc `performance` | Tối ưu hóa hoạt ảnh mở pop-up. `performance` trì hoãn nhẹ việc hiển thị nội dung và làm mờ nền, đồng thời tắt hiệu ứng mờ hậu cảnh nếu được thiết lập. |
| `auto_close` | string | Tùy chọn | Thời gian chờ tính bằng mili giây (ví dụ: `10000` cho 10 giây) | Tự động đóng pop-up sau một khoảng thời gian chờ |
| `close_on_click` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Tự động đóng pop-up sau bất kỳ tương tác nào |
| `close_by_clicking_outside` | boolean | Tùy chọn | `true` (mặc định) hoặc `false` | Đóng pop-up bằng cách nhấp ra ngoài nó |
| `width_desktop` | string | Tùy chọn | Bất kỳ giá trị CSS nào | Chiều rộng trên máy tính để bàn (`100%` theo mặc định trên di động) |
| `margin` | string | Tùy chọn | Bất kỳ giá trị CSS nào | Chỉ dùng cái này nếu pop-up của bạn không được căn giữa tốt trên di động (ví dụ: `13px`) |
| `margin_top_mobile` | string | Tùy chọn | Bất kỳ giá trị CSS nào | Lề trên cùng trên di động (ví dụ: `-56px` nếu header của bạn bị ẩn) |
| `margin_top_desktop` | string | Tùy chọn | Bất kỳ giá trị CSS nào | Lề trên cùng trên máy tính để bàn (ví dụ: `50vh` cho một pop-up nửa kích thước hoặc `calc(100vh - 400px)` cho chiều cao cố định `400px`) |
| `bg_color` | string | Tùy chọn | Bất kỳ giá trị hex, rgb hoặc rgba nào | Màu nền của pop-up của bạn (ví dụ: `#ffffff` cho nền trắng) |
| `bg_opacity` | string | Tùy chọn | Bất kỳ giá trị nào từ `0` đến `100` | Độ mờ nền của pop-up của bạn (ví dụ: `100` để không trong suốt) |
| `bg_blur` | string | Tùy chọn | Bất kỳ giá trị nào từ `0` đến `100` | Hiệu ứng làm mờ nền của pop-up của bạn, **chỉ hoạt động nếu `bg_opacity` không được đặt là `100`** (ví dụ: `0` để không làm mờ)|
| `shadow_opacity` | string | Tùy chọn | Bất kỳ giá trị nào từ `0` đến `100` | Độ mờ của bóng đổ pop-up của bạn (ví dụ: `0` để ẩn nó) |
| `hide_backdrop` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Đặt giá trị này là true trên pop-up đầu tiên của dashboard chính để tắt hậu cảnh trên tất cả các pop-up. |
| `background_update` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Cập nhật nội dung pop-up ở chế độ nền (không khuyến nghị) |
| `trigger` | object hoặc list | Tùy chọn | Xem [điều kiện](#điều-kiện) | Mở pop-up này khi các điều kiện được đáp ứng |
| `trigger_entity` | string | Tùy chọn | Bất kỳ thực thể nào | Mở pop-up này dựa trên trạng thái của bất kỳ thực thể nào, dạng đơn giản của `trigger` |
| `trigger_state` | string | Tùy chọn (**Bắt buộc** nếu `trigger_entity` được xác định) | Bất kỳ trạng thái thực thể nào | Trạng thái thực thể để mở pop-up |
| `trigger_close` | boolean | Tùy chọn | `true` (mặc định) hoặc `false` | Đóng pop-up khi các điều kiện không còn được đáp ứng. Mặc định sẽ là `false` nếu bạn dùng cặp `trigger_entity` và `trigger_state` cũ |
| `open_action` | object | Tùy chọn | Xem [hành động](#hành-động-chạm-chạm-đúp-và-giữ) | Kích hoạt một hành động khi pop-up đang mở |
| `close_action` | object | Tùy chọn | Xem [hành động](#hành-động-chạm-chạm-đúp-và-giữ) | Kích hoạt một hành động khi pop-up đang đóng |
| `show_header` | boolean | Tùy chọn | `true` (mặc định) hoặc `false` | Hiện/Ẩn hoàn toàn header của pop-up |
| `show_previous_button` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Hiển thị một nút quay lại bên cạnh nút đóng và điều hướng về pop-up trước đó khi có sẵn |
| `show_close_button` | boolean | Tùy chọn | `true` (mặc định) hoặc `false` | Hiện hoặc ẩn nút đóng trong khi vẫn giữ phần còn lại của header hiển thị |
| `buttons_position` | string | Tùy chọn | `right` (mặc định) hoặc `left` | Vị trí của các nút đóng và quay lại trong header |
| `cards` | list | Tùy chọn | Bất kỳ Bubble Card, thẻ Home Assistant hoặc thẻ tùy chỉnh nào | Xác định nội dung của pop-up của bạn. Xem ví dụ pop-up bên dưới. |
| Bạn cũng có quyền truy cập vào [tất cả các thiết lập nút](#nút) cho header của pop-up. | | Tùy chọn | | Nếu không xác định, sẽ không có header nào được hiển thị |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Biến | Giá trị mong đợi | Mô tả |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Bán kính bo góc cho pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Màu nền chính cho các phần tử được hỗ trợ của pop-up |
| `--bubble-pop-up-background-color` | `color` | Màu nền của pop-up |
| `--bubble-backdrop-background-color` | `color` | Màu nền cho hậu cảnh |
| Bạn cũng có quyền truy cập vào [tất cả các biến CSS của nút](#tùy-chọn-nút) cho header của pop-up. | | |

</details>


### Định dạng pop-up độc lập (v3.2.0+)

Từ phiên bản v3.2.0, các pop-up sử dụng một định dạng độc lập mới trong đó các thẻ nội dung được xác định trực tiếp bên trong pop-up bằng tùy chọn `cards`. Điều này mang lại hiệu năng tốt hơn và một trải nghiệm chỉnh sửa kéo thả mới dựa trên các section.


#### Ví dụ

<details>

<summary>Một pop-up (định dạng độc lập)</summary>

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

<summary>Một nút để mở pop-up</summary>

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

## Ngăn xếp nút ngang

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Thẻ này là một người bạn đồng hành tốt của thẻ pop-up, cho phép bạn mở các pop-up tương ứng. Nó cũng cho phép bạn mở bất kỳ trang nào của dashboard của bạn. Ngoài ra, bạn có thể thêm các cảm biến chuyển động/hiện diện của mình để thứ tự các nút thích ứng theo phòng bạn vừa bước vào. Thẻ này có thể cuộn, luôn hiển thị, và hoạt động như một footer.

> [!IMPORTANT]  
> Thẻ này phải là thẻ cuối cùng trong view của bạn (sau mọi thẻ và pop-up). Nó không thể nằm bên trong bất kỳ stack nào.

### Tùy chọn ngăn xếp nút ngang

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Tên | Kiểu | Yêu cầu | Tùy chọn được hỗ trợ | Mô tả |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Bắt buộc** | Hash của pop-up (ví dụ: `'#kitchen'`) với ' ' hoặc bất kỳ liên kết nào | Một liên kết để mở |
| `1_name` | string | Tùy chọn | Bất kỳ chuỗi nào | Một tên cho nút của bạn |
| `1_icon` | string | Tùy chọn | Bất kỳ biểu tượng `mdi:` nào | Một biểu tượng cho nút của bạn |
| `1_entity` | string | Tùy chọn | Bất kỳ đèn hoặc nhóm đèn nào | Hiển thị màu của đèn đó ở nền |
| `1_pir_sensor` | string | Tùy chọn | Bất kỳ cảm biến nhị phân nào | Ít nhất một cảm biến pir hoặc nhiều hơn cho `auto_order`, thực tế nó cũng hoạt động với bất kỳ loại thực thể nào, ví dụ bạn có thể thêm các nhóm đèn và thứ tự sẽ thay đổi dựa trên trạng thái thay đổi gần nhất. |
| `auto_order` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Thay đổi thứ tự các nút theo thời gian thay đổi gần nhất của `_pir_sensor`, **nó cần phải là `false` nếu bạn không có `_pir_sensor` nào trong mã của mình** |
| `margin` | string | Tùy chọn | Bất kỳ giá trị CSS nào | Chỉ dùng cái này nếu `horizontal-buttons-stack` của bạn không được căn giữa tốt trên di động (ví dụ: `13px`) |
| `width_desktop` | string | Tùy chọn | Bất kỳ giá trị CSS nào | Chiều rộng trên máy tính để bàn (`100%` theo mặc định trên di động) |
| `is_sidebar_hidden` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Cố định vị trí của ngăn xếp nút ngang nếu sidebar bị ẩn trên máy tính để bàn (chỉ nếu bạn đã tự thực hiện một thay đổi để ẩn nó) |
| `rise_animation` | boolean | Tùy chọn | `true` (mặc định) hoặc `false` | Đặt giá trị này là `false` để tắt hoạt ảnh kích hoạt khi trang vừa được tải |
| `highlight_current_view` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Làm nổi bật hash / view hiện tại bằng một hoạt ảnh mượt mà |
| `hide_gradient` | boolean | Tùy chọn | `true` hoặc `false` (mặc định) | Đặt giá trị này là `false` để ẩn gradient |

> [!IMPORTANT]  
> Các biến bắt đầu bằng một con số xác định các nút của bạn, chỉ cần thay đổi con số này để thêm nhiều nút hơn (xem ví dụ bên dưới).

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Biến | Giá trị mong đợi | Mô tả |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Bán kính bo góc cho các nút của ngăn xếp nút ngang |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Màu nền cho các nút của ngăn xếp nút ngang |

</details>


#### Ví dụ

<details>

<summary>Một ngăn xếp nút ngang tự sắp xếp lại dựa trên các cảm biến hiện diện</summary>

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

## Nút

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ce thẻ này rất linh hoạt. Nó có thể được dùng như một **công tắc**, một **thanh trượt**, một **trạng thái** hoặc một nút **tên/văn bản**.

> [!TIP]
> ### Sự khác biệt giữa các loại nút là gì?
>
> - **Nút công tắc:** Đây là loại nút mặc định. Theo mặc định, nó bật tắt một thực thể và màu nền của nó thay đổi theo trạng thái của thực thể hoặc màu của đèn. Bạn có thể thay đổi hành động của nó trong phần **Hành động chạm trên thẻ**.
>
> - **Nút thanh trượt:** Loại nút này cho phép bạn điều khiển các thực thể với dải giá trị có thể điều chỉnh. Nó lý tưởng để chỉnh độ sáng đèn, và màu lấp đầy sẽ thích ứng theo màu của đèn. Bạn cũng có thể dùng nó để hiển thị các giá trị, chẳng hạn như mức pin.
>   Các thực thể được hỗ trợ cho thanh trượt:
>   - Đèn (độ sáng)
>   - Trình phát đa phương tiện (âm lượng)
>   - Rèm cửa (vị trí)
>   - Quạt (phần trăm)
>   - Điều hòa (nhiệt độ)
>   - Input number và number (giá trị)
>   - Cảm biến pin (phần trăm, chỉ đọc)
>
>   Bạn cũng có thể dùng bất kỳ thực thể nào có trạng thái dạng số bằng cách tắt bộ lọc thực thể trong **Cài đặt thanh trượt**, sau đó định nghĩa các giá trị `min` và `max`. Tùy chọn này chỉ đọc.
>
> - **Nút trạng thái:** Hoàn hảo để hiển thị thông tin từ một cảm biến hoặc bất kỳ thực thể nào. Khi bạn nhấn vào nó, bảng "Thêm thông tin" của thực thể sẽ hiện ra. Màu nền của nó không thay đổi.
>
> - **Nút tên/văn bản:** Loại nút duy nhất không cần thực thể. Nó cho phép bạn hiển thị một đoạn văn bản ngắn, một tên hoặc một tiêu đề. Bạn cũng có thể thêm hành động vào nó. Màu nền của nó không thay đổi.

### Tùy chọn nút

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Một thực thể để điều khiển |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Hành vi của nút |
| `name` | string | Optional | Any string | Tên cho nút, nếu không được định nghĩa nó sẽ hiển thị tên thực thể |
| `icon` | string | Optional | Any `mdi:` icon | Biểu tượng cho nút, nếu không được định nghĩa nó sẽ hiển thị biểu tượng thực thể hoặc `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Ưu tiên biểu tượng thay vì `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Chỉ dành cho đèn.** Dùng màu nhấn của giao diện thay vì màu của đèn.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Hiện hoặc ẩn trạng thái của `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn tên |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn biểu tượng |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Hiện thời gian thay đổi gần nhất của `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Hiện thời gian cập nhật gần nhất của `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Hiện một thuộc tính của `entity` bên dưới `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Thuộc tính cần hiện (ví dụ: `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Cho phép văn bản cuộn khi nội dung vượt quá kích thước của vùng chứa |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Cho phép thay đổi hành động mặc định khi nhấn nút. |
| `tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng |
| `double_tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn đúp biểu tượng, nếu không định nghĩa, `none` sẽ được dùng |
| `hold_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi giữ biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Bố cục giao diện của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Optional | Any number | Số hàng (chiều cao) (ví dụ: `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nút-phụ) | Thêm các nút tùy chỉnh cố định bên phải |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Màu nền chính cho các thành phần được hỗ trợ trong nút |
| `--bubble-button-border-radius` | `px` | Bán kính bo góc cho nút |
| `--bubble-button-icon-border-radius` | `px` | Bán kính bo góc cho vùng chứa biểu tượng của nút |
| `--bubble-button-icon-background-color` | `color` | Màu nền cho vùng chứa biểu tượng của nút |
| `--bubble-light-white-color` | `color` | Thay thế màu trắng mặc định của các nút/thanh trượt đèn |
| `--bubble-light-color` | `color` | Thay thế màu của các nút/thanh trượt đèn (kể cả đèn RGB) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Đổ bóng cho nút |

</details>

Các tùy chọn này chỉ khả dụng khi `button_type` được đặt thành `slider`.

<details>

<summary><b>Tùy chọn thanh trượt (YAML + mô tả)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Giá trị tối thiểu của thanh trượt. Dành cho thanh trượt tùy chỉnh.                                                    |
| `max_value`             | number  | Optional                        | Giá trị tối đa của thanh trượt. Dành cho thanh trượt tùy chỉnh.                                                    |
| `step`                  | number  | Optional                        | Giá trị bước nhảy của thanh trượt.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Bật lại hành vi thanh trượt trước đây, trong đó bạn chạm để kích hoạt thanh trượt thay vì giữ nó.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Cập nhật giá trị tương đối so với giá trị bắt đầu, thay vì điểm chạm ban đầu.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Đặt thanh trượt ở chế độ chỉ đọc. Tự động bật cho một số thực thể như cảm biến.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Trạng thái thực thể được cập nhật trong khi trượt. **Tính năng này không được khuyến nghị cho tất cả thực thể.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` hoặc `bottom` | Thay đổi hướng lấp đầy của thanh trượt. Từ trái sang phải khi không xác định, và đảo chiều trong [các ngôn ngữ viết từ phải sang trái](#bản-địa-hóa) |
| `slider_value_position` | string | Optional | `right`, `left`, `center` hoặc `hidden` | Vị trí hiển thị giá trị. Ở bên phải khi không xác định, và ở bên trái trong [các ngôn ngữ viết từ phải sang trái](#bản-địa-hóa) |
| `invert_slider_value` | boolean | Optional (`false` default) | Đảo ngược hướng thanh trượt (lấp đầy 100% tương ứng với giá trị tối thiểu). Không khả dụng cho thanh trượt màu. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Chỉ dành cho đèn.** Chọn chế độ thanh trượt |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Chỉ dành cho rèm cửa.** Chọn chế độ thanh trượt (vị trí hoặc góc nghiêng) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Chỉ dành cho đèn (chế độ Hue).** Ép độ bão hòa khi điều chỉnh Hue |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Chỉ dành cho đèn (chế độ Hue).** Giá trị độ bão hòa bị ép (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Chỉ dành cho đèn (chế độ Độ sáng).** Dùng màu nhấn của giao diện thay vì màu của đèn |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Chỉ dành cho đèn.** Cho phép thanh trượt đạt tới 0%, việc này sẽ tắt đèn. Không khả dụng cùng với `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Chỉ dành cho đèn.** Bật hiệu ứng chuyển độ sáng mượt cho các đèn được hỗ trợ.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Chỉ dành cho đèn.** Thời gian chuyển tính bằng mili giây. Yêu cầu `light_transition: true`.            |

</details>

#### Ví dụ

<details>

<summary>Một nút thanh trượt có thể điều khiển độ sáng của một đèn</summary>

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

<summary>Một nút với nhiều tùy chọn hơn</summary>

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

## Trình phát đa phương tiện

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Thẻ này cho phép bạn điều khiển một thực thể trình phát đa phương tiện.

### Tùy chọn trình phát đa phương tiện

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Trình phát đa phương tiện cần điều khiển |
| `name` | string | Optional | Any string | Tên cho trình phát đa phương tiện, nếu không được định nghĩa nó sẽ hiển thị tên thực thể |
| `icon` | string | Optional | Any `mdi:` icon | Biểu tượng cho trình phát đa phương tiện, nếu không được định nghĩa nó sẽ hiển thị biểu tượng thực thể hoặc `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Ưu tiên biểu tượng thay vì `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Hiện hoặc ẩn trạng thái của `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn tên |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn biểu tượng |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Hiện thời gian thay đổi gần nhất của `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Hiện thời gian cập nhật gần nhất của `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Hiện một thuộc tính của `entity` bên dưới `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Thuộc tính cần hiện (ví dụ: `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Cho phép văn bản cuộn khi nội dung vượt quá kích thước của vùng chứa |
| `min_volume` | number | Optional | Any number | Giá trị tối thiểu của thanh trượt âm lượng. |
| `max_volume` | number | Optional | Any number | Giá trị tối đa của thanh trượt âm lượng. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Dùng ảnh bìa đa phương tiện làm mờ làm nền cho thẻ. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Cho phép thay đổi hành động mặc định khi nhấn nút. |
| `tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |
| `double_tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn đúp biểu tượng, nếu không định nghĩa, `none` sẽ được dùng. |
| `hold_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi giữ biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Di chuyển các nút hành động bìa xuống dưới cùng (cố định) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Cho các nút hành động dưới cùng chiếm toàn bộ chiều rộng (mặc định: `true` khi vị trí là `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Căn chỉnh các nút hành động dưới cùng khi không chiếm toàn bộ chiều rộng |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Bố cục giao diện của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Optional | Any number | Số hàng (chiều cao) (ví dụ: `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nút-phụ) | Thêm các nút tùy chỉnh cố định bên phải |
| `hide` | object | Optional | See below | Ẩn các nút của thẻ |

#### Tùy chọn ẩn

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Ẩn nút phát/tạm dừng |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Ẩn nút âm lượng |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Ẩn nút bài trước |
| `next_button` | boolean | Optional | `true` or `false` (default) | Ẩn nút bài tiếp theo |
| `power_button` | boolean | Optional | `true` or `false` (default) | Ẩn nút nguồn |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Màu nền chính cho trình phát đa phương tiện |
| `--bubble-media-player-border-radius` | `px` | Bán kính bo góc cho trình phát đa phương tiện |
| `--bubble-media-player-buttons-border-radius` | `px` | Bán kính bo góc cho các nút của trình phát đa phương tiện |
| `--bubble-media-player-slider-background-color` | `color` | Màu nền cho thanh trượt âm lượng |
| `--bubble-media-player-icon-border-radius` | `px` | Bán kính bo góc cho vùng chứa biểu tượng của trình phát đa phương tiện |
| `--bubble-media-player-icon-background-color` | `color` | Màu nền cho vùng chứa biểu tượng của trình phát đa phương tiện |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Đổ bóng cho trình phát đa phương tiện |

</details>


#### Ví dụ

<details>

<summary>Một trình phát đa phương tiện với tất cả các tùy chọn</summary>

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

## Rèm cửa

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Thẻ này cho phép bạn điều khiển các thực thể `cover` của bạn.

### Tùy chọn rèm cửa

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Một rèm cửa để điều khiển |
| `name` | string | Optional | Any string | Tên cho rèm cửa, nếu không được định nghĩa nó sẽ hiển thị tên thực thể |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Ưu tiên biểu tượng thay vì `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Hiện hoặc ẩn trạng thái của `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn tên |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn biểu tượng |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Hiện thời gian thay đổi gần nhất của `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Hiện thời gian cập nhật gần nhất của `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Hiện một thuộc tính của `entity` bên dưới `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Thuộc tính cần hiện (ví dụ: `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Cho phép văn bản cuộn khi nội dung vượt quá kích thước của vùng chứa |
| `icon_open` | string | Optional | Any `mdi:` icon | Biểu tượng cho rèm cửa mở, nếu không được định nghĩa nó sẽ hiển thị biểu tượng rèm mở mặc định |
| `icon_close` | string | Optional | Any `mdi:` icon | Biểu tượng cho rèm cửa đóng, nếu không được định nghĩa nó sẽ hiển thị biểu tượng rèm đóng mặc định |
| `icon_up` | string | Optional | Any `mdi:` icon | Biểu tượng cho nút mở rèm, nếu không được định nghĩa nó sẽ hiển thị biểu tượng rèm mở mặc định |
| `icon_down` | string | Optional | Any `mdi:` icon | Biểu tượng cho nút đóng rèm, nếu không được định nghĩa nó sẽ hiển thị biểu tượng rèm đóng mặc định |
| `open_service` | string | Optional | Any service or script | Dịch vụ để mở rèm cửa, mặc định là `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Dịch vụ để dừng rèm cửa, mặc định là `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Dịch vụ để đóng rèm cửa, mặc định là `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Vị trí các nút điều khiển góc nghiêng (chỉ hiện nếu rèm cửa hỗ trợ nghiêng) |
| `open_tilt_service` | string | Optional | Any service or script | Dịch vụ để mở nghiêng, mặc định là `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Dịch vụ để đóng nghiêng, mặc định là `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Cho phép thay đổi hành động mặc định khi nhấn nút. |
| `tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |
| `double_tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn đúp biểu tượng, nếu không định nghĩa, `none` sẽ được dùng. |
| `hold_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi giữ biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Di chuyển các điều khiển xuống dưới cùng (cố định) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Cho các điều khiển dưới cùng chiếm toàn bộ chiều rộng (mặc định: `true` khi vị trí là `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Căn chỉnh các điều khiển dưới cùng khi không chiếm toàn bộ chiều rộng |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Bố cục giao diện của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Optional | Any number | Số hàng (chiều cao) (ví dụ: `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nút-phụ) | Thêm các nút tùy chỉnh cố định bên phải |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Màu nền chính cho các thành phần được hỗ trợ trong thẻ rèm cửa |
| `--bubble-cover-border-radius` | `px` | Bán kính bo góc cho thẻ rèm cửa |
| `--bubble-cover-icon-border-radius` | `px` | Bán kính bo góc cho vùng chứa biểu tượng của thẻ rèm cửa |
| `--bubble-cover-icon-background-color` | `color` | Màu nền cho vùng chứa biểu tượng của thẻ rèm cửa |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Đổ bóng cho thẻ rèm cửa |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Đổ bóng cho các nút trong thẻ rèm cửa |

</details>


#### Ví dụ

<details>

<summary>Một thẻ có thể điều khiển rèm cuốn</summary>

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

## Chọn

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Thẻ này cho phép bạn thêm một menu thả xuống cho các thực thể `input_select` / `select` của bạn. Thẻ này cũng hỗ trợ các nút phụ và tất cả các tính năng chung của Bubble Card.

> [!TIP]
> Bạn cũng có thể có các nút phụ chọn nếu muốn, tính năng này khả dụng trong tất cả các thẻ hỗ trợ nút phụ.

### Tùy chọn chọn

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Một thực thể để điều khiển |
| `name` | string | Optional | Any string | Tên cho lựa chọn, nếu không được định nghĩa nó sẽ hiển thị tên thực thể |
| `icon` | string | Optional | Any `mdi:` icon | Biểu tượng cho lựa chọn, nếu không được định nghĩa nó sẽ hiển thị biểu tượng thực thể hoặc `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Ưu tiên biểu tượng thay vì `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Hiện hoặc ẩn trạng thái của `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn tên |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Hiện hoặc ẩn biểu tượng |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Hiện thời gian thay đổi gần nhất của `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Hiện thời gian cập nhật gần nhất của `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Hiện một thuộc tính của `entity` bên dưới `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Thuộc tính cần hiện (ví dụ: `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Cho phép văn bản cuộn khi nội dung vượt quá kích thước của vùng chứa |
| `tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |
| `double_tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn đúp biểu tượng, nếu không định nghĩa, `none` sẽ được dùng. |
| `hold_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi giữ biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Bố cục giao diện của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Optional | Any number | Số hàng (chiều cao) (ví dụ: `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nút-phụ) | Thêm các nút tùy chỉnh cố định bên phải |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Màu nền chính cho các thành phần được hỗ trợ trong thẻ chọn |
| `--bubble-select-background-color` | `color` | Màu nền cho thẻ chọn |
| `--bubble-select-list-border-radius` | `px` | Bán kính bo góc cho menu thả xuống trong thẻ |
| `--bubble-select-list-item-accent-color` | `color` | Màu nhấn cho mục được chọn |
| `--bubble-select-list-background-color` | `color` | Màu nền cho menu thả xuống trong thẻ |
| `--bubble-select-list-width` | `px` | Chiều rộng của menu thả xuống trong thẻ |
| `--bubble-select-arrow-background-color` | `color` | Màu nền cho mũi tên thả xuống |
| `--bubble-select-button-border-radius` | `px` | Bán kính bo góc cho nút chọn |
| `--bubble-select-border-radius` | `px` | Bán kính bo góc cho thẻ chọn |
| `--bubble-select-icon-border-radius` | `px` | Bán kính bo góc cho vùng chứa biểu tượng của thẻ chọn |
| `--bubble-select-icon-background-color` | `color` | Màu nền cho vùng chứa biểu tượng của thẻ chọn |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Đổ bóng cho thẻ chọn |

</details>


#### Ví dụ

<details>

<summary>Một thẻ chọn với danh sách các cảnh</summary>

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

## Điều hòa

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Thẻ này cho phép bạn điều khiển các thực thể `climate` của bạn.

> [!TIP]
> Menu chọn chế độ là một [nút phụ](#nút-phụ) được thêm tự động khi tạo thẻ. Sau đó bạn có thể chỉnh sửa hoặc xóa nó tùy ý.

### Tùy chọn điều hòa

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Thực thể cần điều khiển (ví dụ: `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Tên tùy chỉnh cho thẻ. Nếu không được định nghĩa, nó sẽ hiển thị tên thực thể.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Biểu tượng tùy chỉnh cho thẻ. Nếu không được định nghĩa, biểu tượng thực thể hoặc `entity-picture` sẽ được dùng.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Ưu tiên biểu tượng thay vì `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Hiện hoặc ẩn trạng thái hiện tại của `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Hiện hoặc ẩn tên của thực thể.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Hiện hoặc ẩn biểu tượng.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Ẩn điều khiển nhiệt độ mục tiêu thấp nếu được `entity` hỗ trợ.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Ẩn điều khiển nhiệt độ mục tiêu cao nếu được `entity` hỗ trợ.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Áp dụng màu nền cố định khi thực thể điều hòa BẬT.                                                              |
| `step` | number | Optional | Any number | Bước nhiệt độ. |
| `min_temp` | number | Optional | Any number | Nhiệt độ tối thiểu. |
| `max_temp` | number | Optional | Any number | Nhiệt độ tối đa. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Cho phép thay đổi hành động mặc định khi nhấn nút. |
| `tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |
| `double_tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn đúp biểu tượng, nếu không định nghĩa, `none` sẽ được dùng. |
| `hold_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi giữ biểu tượng, nếu không định nghĩa, `more-info` sẽ được dùng. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Di chuyển các nút hành động điều hòa xuống dưới cùng (cố định) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Cho các nút hành động dưới cùng chiếm toàn bộ chiều rộng (mặc định: `true` khi vị trí là `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Căn chỉnh các nút hành động dưới cùng khi không chiếm toàn bộ chiều rộng |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Bố cục giao diện của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Optional | Any number | Số hàng (chiều cao) (ví dụ: `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#nút-phụ)                | Thêm các nút tùy chỉnh cố định bên phải. Hữu ích cho menu chọn chế độ điều hòa.                                  |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Màu nền chính cho các thành phần được hỗ trợ trong thẻ điều hòa |
| `--bubble-climate-border-radius` | `px` | Bán kính bo góc cho các thành phần được hỗ trợ trong thẻ điều hòa |
| `--bubble-climate-button-background-color` | `color` | Màu nền cho các nút của thẻ điều hòa |
| `--bubble-climate-icon-border-radius` | `px` | Bán kính bo góc cho vùng chứa biểu tượng của thẻ điều hòa |
| `--bubble-state-climate-fan-only-color` | `color` | Màu phủ cho trạng thái chỉ quạt |
| `--bubble-state-climate-dry-color` | `color` | Màu phủ cho trạng thái khô |
| `--bubble-state-climate-cool-color` | `color` | Màu phủ cho trạng thái làm mát |
| `--bubble-state-climate-heat-color` | `color` | Màu phủ cho trạng thái sưởi |
| `--bubble-state-climate-auto-color` | `color` | Màu phủ cho trạng thái tự động |
| `--bubble-state-climate-heat-cool-color` | `color` | Màu phủ cho trạng thái sưởi-làm mát |
| `--bubble-climate-accent-color` | `color` | Màu nhấn cho thẻ điều hòa |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Đổ bóng cho vùng chứa điều hòa. |

</details>


#### Ví dụ

<details>

<summary>Một thẻ điều hòa với menu thả xuống các chế độ HVAC</summary>

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

## Lịch

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Thẻ này cho phép bạn hiển thị các thực thể lịch của bạn. Nội dung của nó có thể cuộn được, vì vậy bạn có thể dễ dàng duyệt qua các sự kiện sắp tới.

### Tùy chọn lịch

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Số ngày lịch cần lấy sự kiện, tính từ hiện tại đến hết ngày thứ N (mặc định: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Thực thể cần điều khiển (ví dụ: `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Thực thể lịch cần hiển thị                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Màu tùy chỉnh cho chip lịch. Nếu không được định nghĩa, một màu tự động sẽ được chọn |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Số ngày lịch cần lấy sự kiện, tính từ hiện tại đến hết ngày thứ N (mặc định: 7) |
| `limit`             | number  | Optional     | A number                                        | Số lượng sự kiện sẽ được hiển thị trên thẻ                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Hiện hoặc ẩn thời gian kết thúc của sự kiện                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Hiện hoặc ẩn thanh tiến trình sự kiện                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Hiện hoặc ẩn các sự kiện đang diễn ra. Sự kiện kéo dài nhiều ngày được xét theo từng ngày, nên chỉ ngày đang diễn ra bị ẩn còn những ngày sắp tới vẫn hiển thị |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Cho phép văn bản cuộn khi nội dung vượt quá kích thước của vùng chứa |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Cho phép thêm hành động khi nhấn sự kiện. |
| `tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn ngày, nếu không định nghĩa, `none` sẽ được dùng. |
| `double_tap_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấn đúp ngày, nếu không định nghĩa, `none` sẽ được dùng. |
| `hold_action` | object | Optional | See [actions](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi giữ ngày, nếu không định nghĩa, `none` sẽ được dùng. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Bố cục giao diện của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Optional | Any number | Số hàng (chiều cao) (ví dụ: `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#nút-phụ) | Thêm các nút tùy chỉnh cố định bên phải |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#giao-diện">Giao diện</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Màu nền chính cho các thành phần được hỗ trợ trong thẻ lịch  |
| `--bubble-calendar-border-radius`         | `px`           | Bán kính bo góc cho các thành phần được hỗ trợ trong thẻ lịch |
| `--bubble-calendar-height`                | `px`           | Chiều cao cho thẻ lịch                                        |

</details>

#### Ví dụ

<details>

<summary>Một thẻ lịch với số lượng sự kiện giới hạn</summary>

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

<summary>Một thẻ lịch với thời gian kết thúc và thanh tiến trình</summary>

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


## Dấu phân cách

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Thẻ này là một dấu phân cách đơn giản để chia pop-up của bạn thành các danh mục / phần khác nhau. Ví dụ : Đèn, Thiết bị, Rèm cửa, Cài đặt, Tự động hóa...

### Tùy chọn dấu phân cách

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Tên | Loại | Yêu cầu | Tùy chọn hỗ trợ | Mô tả |
| --- | --- | --- | --- | --- |
| `name` | string | Không bắt buộc nhưng nên có | Bất kỳ chuỗi nào | Tên cho dấu phân cách của bạn |
| `icon` | string | Không bắt buộc nhưng nên có | Bất kỳ icon `mdi:` nào | Icon cho dấu phân cách của bạn |
| `card_layout` | string | Không bắt buộc | `normal` (mặc định nếu không ở chế độ xem theo section), `large` (mặc định nếu ở chế độ xem theo section), `large-2-rows`, `large-sub-buttons-grid` | Bố cục hiển thị của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Không bắt buộc | Bất kỳ số nào | Số hàng (chiều cao) (ví dụ `2`) |
| `sub_button` | object | Không bắt buộc | Xem [nút phụ](#nút-phụ) | Thêm các nút tùy chỉnh cố định ở bên phải |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#styling">Giao diện</a>)</b></summary>

| Biến | Giá trị mong đợi | Mô tả |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Màu nền của đường kẻ trong dấu phân cách |

</details>

#### Ví dụ

<details>

<summary>Một dấu phân cách cho phần "Rèm cửa"</summary>

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

## Cột trống

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Thẻ này dùng để lấp đầy một cột trống. Nó hữu ích nếu bạn có một `horizontal-stack` trong pop-up mà chỉ có một thẻ. Hãy nhìn vào góc dưới bên phải của ảnh chụp màn hình này để (không) thấy nó.

### Tùy chọn cột trống

Thẻ này không có tùy chọn nào và không hỗ trợ [giao diện](#giao-diện), tuy nhiên nó có hỗ trợ các tùy chọn bố cục cho các section của HA.

#### Ví dụ

<details>

<summary>Một cột trống trong một horizontal stack</summary>

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

## Chỉ nút phụ

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Thẻ này chỉ dành riêng cho nút phụ. Nó hoàn hảo cho menu, hành động nhanh, chip thông tin, hoặc một footer cố định ở cuối trang.

> [!IMPORTANT]  
> Thẻ này sử dụng schema nút phụ mới. Dùng `sub_button.bottom` để định nghĩa các nút của bạn. Phần `sub_button.main` sẽ bị bỏ qua.

### Tùy chọn chỉ nút phụ

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Tên | Loại | Yêu cầu | Tùy chọn hỗ trợ | Mô tả |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Bắt buộc** | Xem [nút phụ](#nút-phụ) | Định nghĩa các nút phụ của bạn bằng phần `bottom` |
| `hide_main_background` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Xóa nền của thẻ |
| `footer_mode` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Cố định thẻ ở cuối trang |
| `footer_full_width` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Làm cho footer chiếm toàn bộ chiều rộng (100%) |
| `footer_width` | number | Không bắt buộc | Bất kỳ số nào | Chiều rộng footer tính bằng pixel khi `footer_full_width` là `false` |
| `footer_bottom_offset` | number | Không bắt buộc | Bất kỳ số nào | Khoảng cách từ cuối trang tính bằng pixel (mặc định : `16`) |
| `card_layout` | string | Không bắt buộc | `normal` (mặc định nếu không ở chế độ xem theo section), `large` (mặc định nếu ở chế độ xem theo section), `large-2-rows`, `large-sub-buttons-grid` | Bố cục hiển thị của thẻ, xem [bố cục thẻ](#bố-cục-thẻ) |
| `rows` | number | Không bắt buộc | Bất kỳ số nào | Số hàng (chiều cao) (ví dụ `2`) |

</details>

<details>

<summary><b>Biến CSS (xem <a href="#styling">Giao diện</a>)</b></summary>

| Biến | Giá trị mong đợi | Mô tả |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Chiều rộng footer khi `footer_full_width` là `false` |
| `--bubble-footer-bottom` | `px` | Khoảng cách footer với cuối trang |
| `--bubble-footer-box-shadow` | xem [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow cho vùng chứa footer |

</details>

#### Ví dụ

<details>

<summary>Chip kiểu như trên (giống trong ảnh chụp màn hình)</summary>

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

<summary>Một menu footer cố định</summary>

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

## Nút phụ

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Trong mọi thẻ hỗ trợ tùy chọn này, bạn có thể thêm nút phụ để tùy chỉnh thẻ của mình nhiều hơn nữa. Ví dụ, bạn có thể tạo một nút để điều khiển robot hút bụi, một thẻ thời tiết, hoặc gần như bất cứ thứ gì bạn nghĩ ra. Các nút phụ này hỗ trợ hành động chạm và hầu hết các tùy chọn nút.

Nút phụ hiện hỗ trợ ba loại : **Mặc định (nút bấm)**, **Thanh trượt**, và **Menu thả xuống / Chọn**. Bạn có thể kết hợp các loại trong cùng một thẻ, đặt nút phụ ở trên hoặc dưới, và sắp xếp chúng thành nhóm để tạo bố cục nâng cao hơn.

#### Vị trí và nhóm nút phụ

<details>

<summary><b>Cấu trúc nút phụ (main / bottom + nhóm)</b></summary>

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

**Ghi chú :**
- `main` và `bottom` là hai phần độc lập. Nút phụ ở `bottom` được cố định ở cuối thẻ.
- `main_layout` và `bottom_layout` chấp nhận `inline` (mặc định) hoặc `rows` để xếp chồng các nhóm theo chiều dọc.
- Các nhóm là các object với một mảng `group` và tùy chọn `buttons_layout` (`inline` hoặc `column`).
- `justify_content` chỉ khả dụng cho **nhóm ở bottom** (`start`, `center`, `end`, `fill`).
- Khi có nút phụ ở `bottom`, bố cục thẻ sẽ tự động chuyển sang `large` trừ khi bạn chỉ định rõ một bố cục khác.
- Các mảng `sub_button` kiểu cũ vẫn được hỗ trợ và được xử lý như phần `main`.

</details>

### Tùy chọn nút phụ

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Tên | Loại | Yêu cầu | Tùy chọn hỗ trợ | Mô tả |
| --- | --- | --- | --- | --- |
| `entity` | string | Không bắt buộc | Bất kỳ entity nào | Một entity để điều khiển |
| `name` | string | Không bắt buộc | Bất kỳ chuỗi nào | Tên cho nút phụ của bạn, nếu không xác định sẽ hiển thị tên entity |
| `icon` | string | Không bắt buộc | Bất kỳ icon `mdi:` nào | Icon cho nút phụ của bạn, nếu không xác định sẽ hiển thị icon entity hoặc ảnh entity |
| `force_icon` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Buộc hiển thị icon ngay cả khi có ảnh entity |
| `sub_button_type` | string | Không bắt buộc | `default`, `slider` hoặc `select` | Chọn loại nút phụ |
| `show_background` | boolean | Không bắt buộc | `true` (mặc định) hoặc `false` | Hiển thị nền cho nút phụ của bạn, màu sẽ thay đổi theo trạng thái entity |
| `state_background` | boolean | Không bắt buộc | `true` (mặc định) hoặc `false` | Dùng màu trạng thái khi entity ở `on` |
| `light_background` | boolean | Không bắt buộc | `true` (mặc định) hoặc `false` | Dùng màu đèn cho nền khi có sẵn |
| `show_state` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Hiển thị hoặc ẩn trạng thái của `entity` |
| `show_name` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Hiển thị hoặc ẩn tên |
| `show_icon` | boolean | Không bắt buộc | `true` (mặc định) hoặc `false` | Hiển thị hoặc ẩn icon |
| `show_last_changed` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Hiển thị thời gian thay đổi cuối cùng của `entity` |
| `show_last_updated` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Hiển thị thời gian cập nhật cuối cùng của `entity` |
| `show_attribute` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Hiển thị một thuộc tính của `entity` bên dưới `name` |
| `attribute` | string | Không bắt buộc (bắt buộc nếu `show_attribute` là `true`) | Một thuộc tính từ `entity` của bạn | Thuộc tính cần hiển thị (ví dụ `brightness`) |
| `select_attribute` | string | Không bắt buộc | Một danh sách thuộc tính từ `entity` của bạn (xem các tùy chọn hỗ trợ ở trên) | Danh sách thuộc tính này sẽ mở một menu thả xuống khi nhấp (ví dụ `effect_list`) |
| `show_arrow` | boolean | Không bắt buộc | `true` (mặc định) hoặc `false` | Hiển thị hoặc ẩn mũi tên thả xuống cho nút phụ dạng select |
| `scrolling_effect` | boolean | Không bắt buộc | `true` (mặc định) hoặc `false` | Cho phép cuộn văn bản khi nội dung vượt quá kích thước của vùng chứa |
| `tap_action` | object | Không bắt buộc | Xem [hành động](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấp vào nút phụ, nếu không xác định, `more-info` sẽ được dùng. |
| `double_tap_action` | object | Không bắt buộc | Xem [hành động](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi nhấp đúp vào nút phụ, nếu không xác định, `none` sẽ được dùng. |
| `hold_action` | object | Không bắt buộc | Xem [hành động](#hành-động-chạm-chạm-đúp-và-giữ) | Định nghĩa loại hành động khi giữ nút phụ, nếu không xác định, `more-info` sẽ được dùng. |
| `fill_width` | boolean | Không bắt buộc | `true` hoặc `false` | Lấp đầy chiều rộng khả dụng (mặc định : `false` cho main, `true` cho bottom) |
| `width` | number hoặc string | Không bắt buộc | Bất kỳ số nào hoặc độ dài CSS | Chiều rộng tùy chỉnh (`px` cho phần main, `%` cho phần bottom theo mặc định) |
| `custom_height` | number | Không bắt buộc | Bất kỳ số nào | Chiều cao tùy chỉnh tính bằng pixel |
| `content_layout` | string | Không bắt buộc | `icon-left` (mặc định), `icon-top`, `icon-bottom`, `icon-right` | Vị trí icon bên trong nút phụ |
| `always_visible` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | **Chỉ dành cho thanh trượt.** Luôn hiển thị thanh trượt thay vì mở nó khi chạm |
| `show_button_info` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | **Chỉ dành cho thanh trượt.** Hiển thị icon/tên/trạng thái khi `always_visible` được bật |
| `visibility` | object hoặc list | Không bắt buộc | Xem [điều kiện](#điều-kiện) | Hiển thị hoặc ẩn nút phụ dựa trên điều kiện |
| `hide_when_parent_unavailable` | boolean | Không bắt buộc | `true` hoặc `false` (mặc định) | Ẩn nút phụ nếu entity của thẻ cha không khả dụng |
| `css_class` | string | Không bắt buộc | Bất kỳ chuỗi nào | Một lớp CSS bổ sung trên nút phụ, để nhắm đến nó trong phần [giao diện](#giao-diện) của bạn dù tên của nó là gì (ví dụ `My value` cho ra `.my-value`) |

</details>

<details>

<summary><b>Tùy chọn nút phụ dạng thanh trượt (giống thanh trượt nút bấm)</b></summary>

<br>

Nút phụ dạng thanh trượt hỗ trợ các tùy chọn thanh trượt giống như thanh trượt nút bấm, bao gồm :
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Biến CSS (xem <a href="#styling">Giao diện</a>)</b></summary>

| Biến | Giá trị mong đợi | Mô tả |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Bán kính bo góc cho nút phụ |
| `--bubble-sub-button-background-color` | `color` | Màu nền cho nút phụ |
| `--bubble-sub-button-outline` | `box-shadow` | Đường viền chỉ được thêm vào một nút phụ hoặc một thanh trượt khi phần tử đó có cùng màu với thẻ phía sau, điều sẽ khiến nó trở nên vô hình (đặt thành `none` để bỏ đi) |
| `--bubble-sub-slider-border-radius` | `px` | Bán kính bo góc cho nút phụ dạng thanh trượt |
| `--bubble-sub-slider-background-color` | `color` | Màu nền cho nút phụ dạng thanh trượt |
| `--bubble-sub-slider-height` | `px` | Chiều cao cho nút phụ dạng thanh trượt luôn hiển thị |
| `--bubble-sub-slider-outline` | `box-shadow` | Đường viền chỉ dành cho nút phụ dạng thanh trượt, quay về `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Màu chữ trên nền nút phụ sáng màu |

</details>

#### Ví dụ

<details>

<summary>Một nút bấm với vài nút phụ để tạo thẻ robot hút bụi (giống trong ảnh chụp màn hình)</summary>

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

<summary>Một thanh trượt nút bấm với một nút phụ hiển thị độ sáng và một nút để bật/tắt đèn (giống trong ảnh chụp màn hình)</summary>

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

<summary>Một nút bấm hiển thị nhiệt độ trong nhà và ngoài trời cùng với thời tiết hôm nay và ngày mai (kèm ảnh chụp màn hình)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Không may cho tôi là trời cứ nhiều mây suốt, nhưng tất cả icon vẫn thay đổi theo thời tiết.

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

## Bố cục thẻ

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card hỗ trợ đầy đủ chế độ xem theo section của Home Assistant, bạn có thể thay đổi bố cục thẻ để làm thẻ lớn hơn và cũng có thể thay đổi số cột hoặc hàng mà thẻ chiếm trong section view (chỉ trên các thẻ hỗ trợ tùy chọn này). Các bố cục này cũng được hỗ trợ trong tất cả các loại chế độ xem khác.

<details>

<summary><b>Các bố cục thẻ có sẵn</b></summary>

| Bố cục | Mô tả |
| --- | --- |
| `normal` | Bố cục thông thường (không được tối ưu cho section view) |
| `large` | Bố cục lớn hơn sẽ tự thay đổi kích thước theo số hàng đã chọn trong section view (tối ưu cho section view) |
| `large-2-rows` | Bố cục lớn hơn với 2 hàng nút phụ, sẽ tự thay đổi kích thước theo số hàng đã chọn trong section view (tối ưu cho section view) |
| `large-sub-buttons-grid` | Bố cục này hiển thị nút phụ theo dạng lưới, `rows` phải được đặt tối thiểu là `2`.

</details>

#### Ví dụ

<details>

<summary>Một nút bấm lớn hiển thị thống kê năng lượng với 2 hàng nút phụ (kèm ảnh chụp màn hình)</summary>

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

<summary>Một nút bấm lớn với nhiều hàng gồm 12 nút phụ</summary>

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

## Điều kiện

Một số tùy chọn được điều khiển bằng điều kiện, viết y hệt như điều kiện của [thẻ có điều kiện](https://www.home-assistant.io/dashboards/conditional/) của Home Assistant:

- `visibility` trên một [nút phụ](#nút-phụ), để hiện hoặc ẩn nó
- `trigger` trên một [pop-up](#pop-up), để mở nó khi các điều kiện được đáp ứng
- `checkConditionsMet(conditions, hass)` bên trong [mẫu](#mẫu) của bạn, khi bạn cần câu trả lời trong mã của chính mình

Mọi loại điều kiện của Home Assistant đều được đánh giá: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, cùng các nhóm `and`, `or` và `not`. Các điều kiện của trình tạo điều kiện Home Assistant cũng hoạt động, tức là những điều kiện được đặt tên theo miền của chúng như `sun.is_up`, `light.is_on`, `zone.in_zone` hoặc `temperature.is_value`, kèm theo các thiết lập `target`, `options`, `behavior` và `for`.

<details>

<summary><b>Ví dụ</b></summary>

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
> Điều kiện được đánh giá trong trình duyệt của bạn, nên số ít điều kiện cần đến máy chủ Home Assistant không thể chính xác tuyệt đối: giờ mặt trời mọc và lặn được đọc từ thực thể `sun.sun` thay vì được tính lại, và khoảng thời gian `for` được đo từ lần đổi trạng thái gần nhất, không có lịch sử của recorder.
>
> `view_columns` được chấp nhận nhưng luôn thỏa mãn, vì Bubble Card không bao giờ là thứ sắp xếp các cột trong chế độ xem của bạn. Một loại điều kiện mà Bubble Card không biết sẽ tự báo một lần trong bảng điều khiển trình duyệt thay vì âm thầm thất bại, nên bạn phân biệt được lỗi gõ sai với một tính năng còn thiếu.

<br>

---

<br>

## Hành động chạm, chạm đúp và giữ

Bạn cũng có thể sử dụng các hành động chạm, chạm đúp và giữ mặc định của Home Assistant trên các thẻ hỗ trợ tùy chọn này. Ví dụ, điều này cho phép hiển thị cửa sổ "more info" khi giữ icon nút, hoặc chạy một service khi nhấp vào một nút phụ.

**Lưu ý : Khi một `double_tap_action` được cấu hình, `tap_action` thông thường sẽ có độ trễ 200ms để cho phép phát hiện
chạm đúp. Nếu độ trễ này không mong muốn, hãy đặt `double_tap_action` thành `none` để tắt xử lý chạm đúp.**

### Tùy chọn hành động

<details>

<summary><b>Tùy chọn (YAML + mô tả)</b></summary>

| Tên | Loại | Tùy chọn hỗ trợ | Mô tả |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Hành động cần thực hiện |
| `target` | object |  | Chỉ hoạt động với `call-service`. Tuân theo [cú pháp home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Bất kỳ đường dẫn nào trong dashboard của bạn | Đường dẫn để điều hướng tới (ví dụ `'#kitchen'` để mở một pop-up) khi hành động được định nghĩa là navigate |
| `url_path` | string | Bất kỳ liên kết nào | URL mở khi nhấp (ví dụ `https://www.google.com`) khi hành động là `url` |
| `service` | string | Bất kỳ service nào | Service cần gọi (ví dụ `media_player.media_play_pause`) khi `action` được định nghĩa là `call-service` |
| `data` hoặc `service_data` | object | Bất kỳ dữ liệu service nào | Dữ liệu service cần đưa vào (ví dụ `entity_id: media_player.kitchen`) khi `action` được định nghĩa là `call-service` |
| `confirmation` | object | Xem [xác nhận](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Hiển thị một pop-up xác nhận (không phải của Bubble Card), ghi đè object `confirmation` mặc định |

</details>

#### Ví dụ

<details>

<summary>Một nút bấm để mở một pop-up</summary>

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

## Giao diện

Bạn có thể thêm các kiểu tùy chỉnh để sửa đổi CSS của tất cả các thẻ **mà không cần dùng card-mod**, theo bốn cách:

- Trong trình chỉnh sửa, đi đến thẻ bạn muốn sửa đổi, sau đó vào mục _Tùy chọn giao diện > Kiểu và mẫu JS tùy chỉnh_, rồi thêm các kiểu tùy chỉnh của bạn (xem các mẹo và ví dụ bên dưới).
- Trong trình chỉnh sửa (hoặc trong [YAML](#mô-đun)), đi đến thẻ bạn muốn sửa đổi, sau đó vào mục _Mô-đun_, rồi tạo một mô-đun mới (mô-đun này sẽ khả dụng cho tất cả các thẻ), hoặc vào **Module Store** để cài đặt bất kỳ mô-đun nào có sẵn (thông tin chi tiết hơn về mô-đun có thể xem [bên dưới](#mô-đun)).
- Trong một file [theme](https://www.home-assistant.io/integrations/frontend/#defining-themes) bằng cách thêm các biến CSS trong YAML (các biến này có trong tài liệu của từng thẻ ở trên). Điều này cho phép sửa đổi trên toàn cục.

  <details>
  
  <summary>Ví dụ</a></summary>
  
  <br>

  Đừng sao chép dòng `Bubble:`, đây là tên của theme bạn đang dùng. Bạn cũng cần bỏ tiền tố `--` khỏi các biến.

  Bạn cần chạy hành động [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) để làm mới theme sau bất kỳ sửa đổi nào.

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
  
- Trong YAML bằng cách thêm `styles: |` theo sau là các kiểu tùy chỉnh của bạn (xem các mẹo và ví dụ bên dưới).

> [!TIP]  
> **Để biết những lớp kiểu (style class) nào có thể sửa đổi**, bạn có thể xem thư mục [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) trong kho lưu trữ này. Trong mỗi thư mục thẻ, bạn sẽ tìm thấy một file tên `styles.css`. Các file này chứa tất cả các kiểu đang được áp dụng. Điều này mở ra nhiều khả năng hơn hẳn so với biến CSS, nhưng cần được thêm riêng cho từng thẻ.
> 
> Bạn cũng có thể tìm thấy rất nhiều [ví dụ từ cộng đồng](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), hoặc một số từ [diễn đàn Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) bằng cách tìm kiếm một chút.
>
> Theme Bubble cho Home Assistant (như trong các ảnh chụp màn hình) có thể tìm thấy [tại đây](https://github.com/Clooos/Bubble).
>
> Một video hướng dẫn sắp ra mắt trên kênh [YouTube](https://www.youtube.com/@cloooos) của tôi!

> [!IMPORTANT]  
> Xin lưu ý rằng bạn có thể phải thêm `!important;` vào một số kiểu CSS đã được định nghĩa từ trước (xem các ví dụ bên dưới).

> [!TIP]  
> Các nút phụ có thể được nhắm đến bằng các lớp dựa trên tên. Ví dụ, một nút phụ tên "My sub-button" có thể được tạo kiểu bằng `.my-sub-button`. Các nút phụ dạng thanh trượt cũng lộ ra `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, v.v.
>
> Lớp dựa trên tên sẽ thay đổi khi bạn đổi tên nút phụ, và nó cũng được dịch khi tên được dịch. Hãy đặt `css_class` trên nút phụ để có một lớp của riêng bạn không bao giờ xê dịch, dù tên là gì và dù ngôn ngữ nào.

#### Ví dụ

<details>

<summary>Thay đổi cỡ chữ của bất kỳ Bubble Card nào</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Thay đổi màu nền của một nút duy nhất trong ngăn xếp nút ngang</summary>

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

<summary>Thay đổi màu nền của một thẻ</summary>

<br>

Cách này hoạt động trên tất cả các loại Bubble Card (trừ pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Cách này làm điều tương tự nhưng chỉ trên thẻ nút (nó cũng hoạt động cho tiêu đề pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Để thay đổi màu khi ở trạng thái `on`, xem các mẫu kiểu bên dưới.

</details>

<details>

<summary>Thay đổi màu của thanh trượt nút</summary>

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

<summary>Thay đổi màu đường của dấu phân cách</summary>

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

<summary>Thay đổi màu của một biểu tượng</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Đối với biểu tượng trong ngăn xếp nút ngang.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Thay đổi màu nền của một khối chứa biểu tượng</summary>

<br>

Cách này hoạt động trên tất cả các loại Bubble Card (trừ pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Cách này làm điều tương tự cho tiêu đề pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Thay đổi kích thước của các nút phụ (hoàn hảo cho bố cục lớn)</summary>

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

<summary>Thay đổi màu nền của nút phụ thứ hai</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Thay đổi kích thước của một biểu tượng</summary>

<br>

Đối với biểu tượng chính.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Đối với các biểu tượng nút phụ.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Dùng một hình ảnh thay vì biểu tượng trong một nút phụ</summary>

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

Chỉ cần tải hình ảnh này lên trong một thư mục "pictures" (hoặc tên bạn muốn) trong thư mục "www" của Home Assistant.

</details>

<details>

<summary>Ví dụ nâng cao: Tạo một hàng ngang các nút phụ (kèm ảnh chụp màn hình)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Tôi thực sự thích cái này, tôi dùng nó làm tiêu đề trên dashboard của mình.

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

## Mẫu

**Bubble Card không hỗ trợ mẫu Jinja** nhưng người dùng nâng cao có thể thêm mẫu bằng JS trực tiếp trong [kiểu tùy chỉnh](#giao-diện) của họ. Ví dụ, điều này cho phép thay đổi động một biểu tượng, các đoạn văn bản hoặc màu sắc của một phần tử, hiển thị hoặc ẩn một phần tử có điều kiện (như một nút phụ), hay gần như mọi thứ dựa trên trạng thái, một thuộc tính và nhiều hơn nữa.

> [!TIP]  
> Thêm thông tin về mẫu JS [tại đây](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Lời khuyên của tôi là **luôn kiểm tra console trình duyệt** để chắc chắn rằng mọi thứ đang hoạt động chính xác.

> [!IMPORTANT]  
> **Tất cả các mẫu không sửa đổi một thuộc tính CSS phải được đặt ở cuối! Như sửa đổi một biểu tượng, một đoạn văn bản hoặc bất kỳ phần tử nào.**

#### Các biến và hàm khả dụng

<details>

<summary>Biến</summary>

<br>

Bạn có quyền truy cập các biến này trong hầu hết các thẻ:

- `state` sẽ trả về trạng thái của `entity` bạn đã định nghĩa.
  
- `entity` sẽ trả về thực thể bạn đã định nghĩa như `switch.test` trong ví dụ này.
  
- `icon` có thể được dùng như sau để thay đổi biểu tượng `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` sẽ trả về trạng thái `entity` đã định nghĩa của nút phụ đầu tiên, `[0]` là trạng thái nút phụ đầu tiên, `[1]` là nút phụ thứ hai...
  
- `subButtonIcon[0]` có thể được dùng như sau để thay đổi biểu tượng nút phụ đầu tiên `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` là biểu tượng nút phụ đầu tiên, `[1]` là nút phụ thứ hai...
  
- `card` sẽ trả về phần tử thẻ trong DOM.
  
- `hass` là một biến nâng cao cho phép bạn kiểm soát nhiều hơn nữa, ví dụ bạn có thể trả về trạng thái của `light.kitchen` như sau `hass.states['light.kitchen'].state` hoặc một thuộc tính như sau `hass.states[entity].attributes.brightness`.

- `this` sẽ trả về rất nhiều thông tin hữu ích về cấu hình và dashboard của bạn, chỉ dùng cái này nếu bạn biết mình đang làm gì.

</details>

<details>

<summary>Hàm</summary>

<br>

Bạn có quyền truy cập tất cả các hàm JS toàn cục, nhưng bạn cũng có quyền truy cập:

- `getWeatherIcon` có thể được dùng để trả về một biểu tượng thời tiết dựa trên trạng thái trả về thời tiết. Ví dụ, bạn có thể làm như sau `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` để thay đổi biểu tượng nút phụ thứ ba thành biểu tượng thời tiết hôm nay, `.forecast[1]?.condition` là cho ngày mai...

  Bạn sẽ cần tạo một cảm biến mẫu (template sensor) cho việc này. Đây là những gì bạn có thể thêm vào `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` trả về `true` khi một danh sách [điều kiện](#điều-kiện) được đáp ứng, ví dụ `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` có thể được dùng để dịch một trạng thái (cũng có thể dùng để lấy đơn vị của trạng thái, mà không cần thêm thủ công).
- `hass.formatEntityAttributeValue(state, "attribute")` có thể được dùng để dịch một thuộc tính (cũng có thể dùng để lấy đơn vị của trạng thái, mà không cần thêm thủ công).

</details>

#### Ví dụ

Bạn có thể tìm thấy rất nhiều ví dụ bên dưới, nhưng bạn cũng có thể tìm thấy các mẫu rất nâng cao trên trang [Patreon](https://www.patreon.com/c/Clooos) của tôi, như một cái (yêu thích của tôi) cho phép tối đa bốn huy hiệu điều kiện đặt xung quanh các biểu tượng của thẻ. Đây cũng là một cách tuyệt vời để tìm hiểu về tất cả các khả năng của kiểu tùy chỉnh và mẫu của Bubble Card!

<details>
<summary>Ví dụ từ trang Patreon của tôi</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Thêm huy hiệu kiểu Home Assistant vào bất kỳ thẻ nào</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Hiển thị ngày giờ đã định dạng trong một dấu phân cách mà không cần entity</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Hiển thị trạng thái nút phụ trên hai dòng</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Tùy chỉnh nhãn và biểu tượng bên trong một nút phụ dạng chọn</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Thêm một pop-up nhắc nhở lâu dài chỉ hiện ra khi cần thiết</a>
</p>

<br>

</details>

<details>

<summary>Thay đổi màu nền của một nút màu đỏ khi ở trạng thái <code>off</code> và màu xanh dương khi ở trạng thái <code>on</code></summary>

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

<summary>Thay đổi màu nền của một nút dựa trên một entity cho ngăn xếp nút ngang</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Hiển thị/Ẩn một nút phụ có điều kiện</summary>

<br>

Cái này chỉ hiển thị nút phụ đầu tiên khi robot hút bụi của tôi bị kẹt.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Cái này hiển thị một nút phụ khi pin dưới 10%. Hữu ích với một nút phụ hiển thị "Pin yếu".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Thay đổi một biểu tượng hoặc biểu tượng nút phụ có điều kiện</summary>

<br>

Cái này thay đổi biểu tượng nút chỉ khi robot hút bụi bị kẹt.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Cái này thay đổi biểu tượng nút phụ đầu tiên chỉ khi robot hút bụi bị kẹt.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Thay đổi màu của một biểu tượng hoặc biểu tượng nút phụ có điều kiện</summary>

<br>

Cái này thay đổi màu biểu tượng nút dựa trên trạng thái của nó.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Cái này thay đổi màu biểu tượng nút phụ dựa trên trạng thái của nó. `.bubble-sub-button-1` là nút phụ đầu tiên, thay `1` nếu bạn muốn thay đổi biểu tượng nút phụ khác.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Tạo hoạt ảnh cho biểu tượng quạt có điều kiện</summary>

<br>

Cái này xoay biểu tượng nút khi quạt ở trạng thái `on`.
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

<summary>Tạo mẫu cho văn bản (như tên hoặc trạng thái)</summary>

<br>

Cái này thay đổi tên/trạng thái nút bằng "Hiện tại trời đang nắng" tùy theo thời tiết của bạn.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
hoặc khi áp dụng cho các nút phụ:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Nếu bạn muốn tạo mẫu cho trạng thái (`.bubble-state`) đừng bật `show_state: true`, chỉ cần bật `show_attribute: true` mà không có thuộc tính nào.

</details>

<details>

<summary>Ví dụ nâng cao: Thay đổi màu của một nút phụ khi một pop-up đang mở</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Ví dụ nâng cao: Tạo mẫu cho tên dấu phân cách dựa trên một trạng thái được dịch sang ngôn ngữ của bạn</summary>

<br>

Bạn có thể dùng `hass.formatEntityState(state)` để dịch một trạng thái và `hass.formatEntityAttributeValue(state, "attribute")` để dịch một thuộc tính.

Cái này thay đổi tên và biểu tượng dựa trên thời tiết, "Nuageux" nghĩa là "Có mây" trong tiếng Pháp.

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

## Mô-đun

Mô-đun là một tính năng mạnh mẽ cho phép bạn lưu, tái sử dụng và chia sẻ các kiểu và mẫu tùy chỉnh của mình trên tất cả các Bubble Card. Thay vì sao chép và dán cùng một đoạn mã vào nhiều thẻ, bạn có thể tạo một Mô-đun và áp dụng nó ở bất cứ đâu bạn cần. Điều này giúp việc quản lý giao diện dashboard của bạn dễ dàng và hiệu quả hơn nhiều.

Nhưng tính năng này còn mạnh mẽ hơn thế nhiều, nó cho phép bạn tự thêm các tính năng thực sự trong trình chỉnh sửa Bubble Card, bằng cách dùng tất cả các tùy chọn [form](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) mặc định của Home Assistant!  
Bộ chọn đối tượng đã được cải tiến để hiển thị các thay đổi trực tiếp và hỗ trợ thuộc tính đúng cách.

Một mô-đun cũng có thể trả lời bộ chọn thẻ của Home Assistant bên cạnh [gợi ý thực thể](#gợi-ý-thực-thể) tích hợp sẵn: dùng `suggestions` cho những thẻ có thể mô tả trước, và `suggestions_code` khi chúng phải được tính từ hệ thống của bạn, ví dụ một pop-up dựng từ mọi thực thể trong khu vực mà thực thể được chọn thuộc về. Cả hai khóa đều được ghi tài liệu [tại đây](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Bạn cũng có thể duyệt qua **Module Store** để tìm và cài đặt [mô-đun do cộng đồng tạo ra](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), hoặc chia sẻ những sáng tạo của riêng bạn!

> [!TIP]
> Mã của một Mô-đun hoạt động giống hệt như mã trong mục `styles` của một thẻ. Tất cả các biến và hàm tương tự từ mục [Mẫu](#mẫu) đều khả dụng.

<br>

### Thiết lập ban đầu

> [!IMPORTANT]
> Kể từ v3.1.0, Bubble Card Tools là backend lưu trữ được khuyến nghị cho các mô-đun. Phương pháp cảm biến mẫu (template sensor) cũ vẫn hoạt động cho các cấu hình hiện có, nhưng các mô-đun mới và tính năng Module Store được hỗ trợ tốt nhất qua Bubble Card Tools.

Tích hợp Bubble Card Tools kích hoạt Module Editor và Module Store, đồng thời lưu các mô-đun dưới dạng từng file YAML riêng lẻ. Các mô-đun hiện có sẽ được tự động chuyển đổi.

Các bước cài đặt và cấu hình được giải thích tại đây:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Trình chỉnh sửa Mô-đun

Bạn có thể truy cập Module Editor từ phần cài đặt của bất kỳ thẻ nào, trong mục **Mô-đun**. Trình chỉnh sửa cung cấp hai tab chính:

#### Tab My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Tab này hiển thị tất cả các mô-đun đã cài đặt của bạn và cho phép bạn:

- **Áp dụng** các mô-đun hiện có cho thẻ hiện tại
- **Tạo** một mô-đun mới từ đầu
- **Chỉnh sửa** các mô-đun hiện có với xem trước trực tiếp
- **Xóa** các mô-đun bạn không còn cần nữa
- **Tìm kiếm** và **sắp xếp** mô-đun (theo bảng chữ cái, gần đây, đang hoạt động trước)
- **Đặt trạng thái toàn cục** để một mô-đun tự động áp dụng cho tất cả các thẻ
- **Nhập/Xuất** mô-đun để sao lưu hoặc chia sẻ
- **Viết gợi ý thực thể** trong trình chỉnh sửa mô-đun, ở mục **Tùy chọn: Gợi ý thực thể**, để mô-đun của bạn được đề xuất trong bộ chọn thẻ của Home Assistant. Cả quy tắc lẫn gợi ý được tính toán đều được kiểm tra khi bạn viết, một lỗi ở đó sẽ chặn việc lưu, và phần xem trước hiển thị các thẻ được gợi ý cho bất kỳ thực thể nào bạn chọn

#### Tab Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Tab này sẽ hiển thị [tất cả các mô-đun có sẵn từ cộng đồng](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), và cho phép bạn:

- **Duyệt** tất cả các mô-đun do cộng đồng tạo ra
- **Tìm kiếm** và lọc mô-đun theo tên, khả năng tương thích hoặc từ khóa
- **Cài đặt** mô-đun chỉ với một cú nhấp
- **Cập nhật** các mô-đun đã cài đặt khi có phiên bản mới

> [!TIP]
> Trong trình chỉnh sửa, bạn có thể bật các mô-đun chưa được hỗ trợ để thử nghiệm các mô-đun chưa được đánh dấu là tương thích với một loại thẻ nhất định.

<br>

### Cách dùng mô-đun

#### Tạo một mô-đun mới

<details>

<summary>Nhấn để mở rộng</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Vào trình chỉnh sửa của bất kỳ thẻ nào và mở rộng mục **Mô-đun**.
2. Nhấn vào **Create new module**.
3. Điền thông tin mô-đun.
4. Viết mã kiểu CSS và/hoặc mẫu JavaScript của bạn trong trình chỉnh sửa **Code**.
5. (Tùy chọn) Tạo giao diện cấu hình tùy chỉnh trong mục **Editor** (như bộ chọn màu trong ảnh chụp màn hình ở trên, tài liệu đầy đủ có [tại đây](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Tùy chọn) Viết **Gợi ý thực thể** của bạn để mô-đun được đề xuất trong bộ chọn thẻ của Home Assistant. Bảng này kiểm tra những gì bạn viết ngay khi bạn gõ, và phần xem trước của nó hiển thị chính các thẻ được gợi ý cho thực thể bạn chọn.
7. Nhấn **Save**.

Mô-đun của bạn giờ đã sẵn sàng để dùng trên bất kỳ thẻ nào của bạn!

<br>

</details>

#### Áp dụng một mô-đun cho một thẻ

<details>

<summary>Nhấn để mở rộng</summary>

<br>

- **Qua trình chỉnh sửa:**

  - Vào trình chỉnh sửa của thẻ bạn muốn áp dụng mô-đun.
  - Mở rộng mục **Mô-đun**.
  - Nhấn vào mô-đun bạn muốn áp dụng từ danh sách.
  - Ở mục "Apply to", nhấn "This card". Mô-đun giờ đã được kích hoạt. Bạn có thể áp dụng nhiều mô-đun cho cùng một thẻ.

- **Qua YAML:**

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

#### Áp dụng một mô-đun trên toàn cục

<details>

<summary>Nhấn để mở rộng</summary>

<br>

Bạn có thể đặt một mô-đun tự động áp dụng cho tất cả các Bubble Card:

**Tính năng này không khả dụng cho các mô-đun có trình chỉnh sửa riêng, vì các mô-đun đó cần một cấu hình cụ thể để hoạt động.**

- **Qua trình chỉnh sửa:**

  - Trong trình chỉnh sửa Mô-đun, tìm mô-đun của bạn trong tab **My Modules**.
  - Bật nút **All cards** bên cạnh tên mô-đun.
  - Mô-đun giờ sẽ được áp dụng tự động cho tất cả các thẻ.
 
- **Qua YAML:**

  Trong cấu hình YAML của mô-đun (trong `bubble-modules.yaml`), chỉ cần thêm `is_global: true`.

<br>

</details>

#### Loại trừ một thẻ riêng lẻ khỏi một mô-đun toàn cục

<details>

<summary>Nhấn để mở rộng</summary>

<br>

Nếu bạn có một mô-đun toàn cục nhưng muốn loại trừ nó khỏi một thẻ cụ thể:

- **Qua trình chỉnh sửa:**
  
  - Trong mục **Mô-đun** của thẻ, bạn sẽ thấy danh sách các mô-đun toàn cục.
  - Nhấn vào một mô-đun toàn cục, tắt "This card" để loại trừ nó khỏi thẻ cụ thể này.

- **Qua YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Chia sẻ mô-đun của bạn lên Module Store

<details>

<summary>Nhấn để mở rộng</summary>

<br>

Để chia sẻ Mô-đun của bạn lên Module Store, trong Module Editor, ở cuối mục "Export Module", nhấn "Copy for GitHub" và dán nội dung vào một cuộc thảo luận mới trong danh mục [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Chỉnh sửa phần mô tả** (nếu cần), **ví dụ** (cho người dùng YAML), và nhớ **đính kèm ít nhất một ảnh chụp màn hình** cho Module Store.

**Mô-đun của bạn sẽ khả dụng ngay sau đó** (sau khi Store làm mới), vì vậy hãy kiểm tra kỹ mọi thứ được viết đúng và Mô-đun hoạt động như mong đợi. Bạn dĩ nhiên có thể chỉnh sửa/cập nhật Mô-đun sau khi đã chia sẻ.

<br>

</details>

#### Quản lý phiên bản

<details>

<summary>Nhấn để mở rộng</summary>

<br>

Module Store tự động kiểm tra cập nhật cho các mô-đun đã cài đặt. Khi có bản cập nhật:

1. Bạn sẽ thấy một chỉ báo cập nhật trong tab **Module Store**.
2. Nhấn **Update** trong các mô-đun có bản cập nhật.
3. Xác nhận cập nhật trong Module Store.

<br>

</details>

#### Định nghĩa các loại thẻ được hỗ trợ

<details>

<summary>Nhấn để mở rộng</summary>

<br>

Một số mô-đun có thể không tương thích với tất cả các loại thẻ. Bạn có thể chỉ định những thẻ nào một mô-đun hỗ trợ.  
Nếu bạn muốn một mô-đun tương thích với **tất cả các thẻ**, chỉ cần bỏ trường `supported` (hoặc dùng tùy chọn **All cards** trong trình chỉnh sửa).

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

### Ví dụ

<details>
<summary>Mô-đun tạo kiểu cơ bản</summary>

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
<summary>Mô-đun với cấu hình tùy chỉnh</summary>

<br>

Mô-đun này khả dụng [tại đây](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Có thể tìm thấy thêm nhiều ví dụ khác trong Module Store, hoặc [tại đây](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Bản địa hóa

Bubble Card nói ngôn ngữ của bạn. Trình chỉnh sửa của nó được dịch sang 64 ngôn ngữ mà Home Assistant hỗ trợ, và ở đâu Home Assistant đã có sẵn một từ cho điều gì đó, cách diễn đạt của chính nó được dùng lại, nên bạn đọc thấy cùng những thuật ngữ trong cả hai giao diện.

Ở cuối trình chỉnh sửa, bên cạnh số phiên bản, một công tắc **Tự động** đi theo ngôn ngữ Home Assistant của bạn. Tắt nó đi thì toàn bộ trình chỉnh sửa trở lại tiếng Anh, điều này tiện khi làm theo một hướng dẫn hoặc khi báo lỗi. Lựa chọn của bạn được ghi nhớ trong trình duyệt.

Tài liệu này cũng được dịch, [sang 62 ngôn ngữ](languages.md), tất cả trừ tiếng Anh Anh, vốn dùng bản gốc. Những trang đó mở cho tất cả mọi người, nên một cách diễn đạt không khớp với Home Assistant của riêng bạn có thể được sửa chỉ trong vài cú nhấp. Bản tiếng Anh vẫn là tham chiếu cho chính nội dung.

<br>

---

<br>

## Trợ giúp

Đừng ngần ngại mở một issue nếu có gì đó không hoạt động như mong đợi. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bạn có câu hỏi hay ý tưởng gì về Bubble Card không? Muốn chia sẻ dashboard hoặc những khám phá của mình? Bạn có thể vào diễn đàn Home Assistant, subreddit Bubble Card hoặc mục GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Đóng góp

Mọi đóng góp đều được hoan nghênh! Dù là sửa lỗi, tính năng mới, bản dịch hay cải thiện tài liệu, đừng ngần ngại mở một pull request.

Trước khi bắt đầu, vui lòng đọc [hướng dẫn dành cho nhà phát triển](DEVELOPERS.md), trong đó có nói về cách thiết lập môi trường cục bộ, build dự án và kiểm thử các thay đổi của bạn.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Quyên góp

Tôi dành phần lớn thời gian rảnh của mình để làm cho dự án này trở nên tốt nhất có thể. Vì vậy nếu bạn trân trọng công sức của tôi, bất kỳ khoản quyên góp nào cũng sẽ là một cách tuyệt vời để thể hiện sự ủng hộ của bạn 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Cảm ơn tất cả mọi người vì sự ủng hộ của các bạn, các bạn chính là động lực lớn nhất của tôi!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
