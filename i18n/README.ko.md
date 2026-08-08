<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> 이 페이지는 자동 번역된 문서예요. 내용이 모호할 때는 [원본 영어 문서](../README.md)가 우선해요. 어색하게 읽히는 문장이 있나요? 어떤 도움이든 환영해요. [이 페이지를 수정](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ko.md)하는 데는 1분이면 충분하고, 포크와 풀 리퀘스트는 GitHub가 알아서 처리해 줘요. 미리 감사드려요! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[다른 언어로 읽기](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card는 Home Assistant를 위한 미니멀하고 커스터마이즈 가능한 카드 모음으로, 모던한 팝업과 100개 이상의 커뮤니티 제작 모듈을 갖춘 통합 Module Store를 제공합니다.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## 목차

**[`설치`](#설치)**  **[`구성`](#구성)**  **[`엔티티 제안`](#엔티티-제안)**  **[`팝업`](#팝업)**  **[`가로 버튼 스택`](#가로-버튼-스택)**  **[`버튼`](#버튼)**  **[`미디어 플레이어`](#미디어-플레이어)**  **[`커버`](#커버)**  **[`선택`](#선택)**  **[`냉난방`](#냉난방)**  **[`캘린더`](#캘린더)**  **[`구분선`](#구분선)**  **[`빈 열`](#빈-열)**  **[`서브 버튼 전용`](#서브-버튼-전용)**  **[`서브 버튼`](#서브-버튼)**  **[`카드 레이아웃`](#카드-레이아웃)**  **[`조건`](#조건)**  **[`동작`](#탭-더블-탭-길게-누르기-동작)**  **[`스타일링`](#스타일링)**  **[`템플릿`](#템플릿)**  **[`모듈`](#모듈)**  **[`현지화`](#현지화)**  **[`도움말`](#도움말)**  **[`기여하기`](#기여하기)**  **[`후원하기`](#후원하기)**

<br>

## 설치

**Home Assistant 최소 지원 버전:** 2023.9.0

<details>

<summary>HACS 없이 설치</summary>

<br>

1. [최신 릴리스](https://github.com/Clooos/Bubble-Card/releases/latest)에서 `bubble-card.zip`을 다운로드하세요
2. 이 파일을 `<config>/www` 폴더에 압축 해제하면 `bubble-card.js`와 그 옆에 `translations` 폴더가 생깁니다 (이 폴더에는 편집기 사전이 들어 있으며, 없으면 편집기는 영어로 표시됩니다)
3. 대시보드에서 오른쪽 상단 아이콘을 클릭한 다음 `Edit dashboard`를 클릭하세요
4. 그 아이콘을 다시 클릭한 다음 `Manage resources`를 클릭하세요
5. `Add resource`를 클릭하세요
6. 다음을 복사해서 붙여넣으세요: `/local/bubble-card.js?v=1`
7. `JavaScript Module`을 클릭한 다음 `Create`를 클릭하세요
8. 뒤로 가서 페이지를 새로고침하세요
9. 이제 오른쪽 하단의 `Add card`를 클릭하고 `Bubble Card`를 검색하면 됩니다
10. 파일을 업데이트할 때마다 `/local/bubble-card.js?v=1`을 수정해서 버전 숫자를 더 높은 값으로 바꿔야 합니다

작동하지 않는다면 브라우저 캐시를 지워보세요.

</details>

<details>

<summary>HACS로 설치 (권장)</summary>

<br>

이 방법을 사용하면 Home Assistant Community Store에서 직접 업데이트를 받을 수 있습니다

1. HACS가 아직 설치되어 있지 않다면 [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)의 안내에 따라 다운로드하세요
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)의 안내에 따라 HACS 초기 설정을 진행하세요
3. 사이드바에서 "HACS"로 이동하세요
4. "Bubble Card"를 검색하거나 아래 파란색 버튼을 클릭하세요
5. "Download"를 클릭하세요
6. 대시보드로 돌아가서 오른쪽 상단 아이콘을 클릭한 다음 `Edit dashboard`를 클릭하세요
7. 이제 오른쪽 하단의 `Add card`를 클릭하고 `Bubble Card`를 검색하면 됩니다

작동하지 않는다면 (필요하다면 모든 기기에서) 브라우저나 앱의 캐시를 지워보세요.

#### 동영상

단계별 동영상은 제 YouTube 채널에서도 확인할 수 있습니다.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## 구성

모든 옵션은 Home Assistant 에디터에서 설정할 수 있습니다. 하지만 아래 문서에서 더 자세한 내용과 YAML을 확인할 수 있습니다.

<details>

<summary><b>주요 옵션 (YAML + 설명)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:bubble-card` | 카드의 타입 |
| `card_type` | string | **Required** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` 또는 `sub-buttons` | Bubble Card의 종류, 아래 참고 |
| `styles` | object list | Optional | Any CSS stylesheets | Bubble Card의 CSS를 커스터마이즈할 수 있습니다, [스타일링](#스타일링) 참고 |

</details>

<details>

<summary><b>전역 CSS 변수 (<a href="#스타일링">스타일링</a> 참고)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | 지원되는 모든 요소의 테두리 반경 |
| `--bubble-main-background-color` | `color` | 지원되는 모든 요소의 기본 배경색 |
| `--bubble-secondary-background-color` | `color` | 지원되는 모든 요소의 보조 배경색 |
| `--bubble-accent-color` | `color` | 지원되는 모든 요소의 강조 색상 |
| `--bubble-icon-border-radius` | `px` | 지원되는 모든 요소의 아이콘 테두리 반경 |
| `--bubble-icon-background-color` | `color` | 지원되는 모든 요소의 아이콘 배경색 |
| `--bubble-sub-button-border-radius` | `px` | 모든 서브 버튼의 테두리 반경 |
| `--bubble-sub-button-background-color` | `color` | 모든 서브 버튼의 배경색 |
| `--bubble-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참고 | 지원되는 모든 요소의 박스 그림자 |
| `--bubble-border` | [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) 참고 | 지원되는 모든 카드의 테두리 |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card와 그 기능에 대해 알아보려면 이 [동영상](https://www.youtube.com/watch?v=0hSQOlBxKKI)을 확인해보세요.** 제 YouTube 채널은 아직 새로 시작한 지 얼마 안 됐고, Home Assistant와 Bubble Card에 관한 튜토리얼을 중심으로 다룹니다. 채널의 노출을 높이는 데 도움이 되도록 구독을 망설이지 마세요. 미리 감사드립니다!

<br>

---

<br>

## 엔티티 제안

Home Assistant 2026.6부터 카드 선택기에서 엔티티를 고르면 바로 쓸 수 있는 카드가 몇 개 제안되며, Bubble Card는 그 목록에 자체 레시피를 더합니다. 조명을 고르면 밝기 슬라이더가 있는 카드가 제안되고, 조명이 지원하는 경우 색온도, 색상, 채도 변형도 함께 제안됩니다. 커버를 고르면 위치 슬라이더를, 미디어 플레이어를 고르면 소스 목록이 포함된 변형도 함께, 로봇청소기를 고르면 시작, 일시정지, 도킹 버튼을 받게 됩니다. 각 제안은 실시간 미리보기로 표시되는 일반적인 Bubble Card 구성이므로, 가장 가까운 것을 골라 평소처럼 계속 편집할 수 있습니다.

제안되는 내용은 엔티티가 실제로 할 수 있는 것에 따라 달라집니다. 밝기 채널이 없는 조명은 슬라이더 대신 토글을 받고, 기울일 수 없는 커버는 기울기 변형을 받지 않으며, 냉난방 엔티티는 프리셋 모드가 있을 때만 그 항목을 받습니다. 해당되는 경우 Bubble Card 제안 아래에 기존 항목이 이어집니다. 해당 엔티티 유형 전용 카드, 단순 버튼, 슬라이더입니다.

> [!TIP]
> 모듈은 이 목록에 자체 제안을 추가할 수 있습니다. [모듈](#모듈)을 참고하세요.

<br>

---

<br>

## 팝업

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

이 카드는 어떤 콘텐츠로든 팝업을 만들 수 있게 해줍니다. 각 팝업은 **기본적으로 숨겨져** 있으며, 해당 링크를 지정하거나(예: `'#pop-up-name'`), `navigate` [동작](#탭-더블-탭-길게-누르기-동작)을 지원하는 어떤 카드로든, 또는 포함되어 있는 [가로 버튼 스택](#가로-버튼-스택)으로 열 수 있습니다.

> [!TIP]
> ### 팝업 트리거 
> 이 기능을 사용하면 어떤 엔티티의 상태를 기준으로 팝업을 열 수 있습니다. 예를 들어 누군가 집 앞에 있을 때 카메라가 포함된 "보안" 팝업을 열 수 있습니다. 토글 헬퍼(input_boolean)를 만들어서 오토메이션에서 여닫기를 트리거할 수도 있습니다.
> <details>
> <summary><code>binary_sensor</code>가 <code>on</code>일 때 팝업 열기</summary>
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
> ### 팝업을 닫는 여러 방법 
> 팝업을 닫는 방법은 여러 가지가 있습니다. 예를 들어 팝업 헤더에서 아래로 스와이프하거나, 팝업 안에서 아래로 길게 스와이프하거나, 데스크톱에서 Escape 키를 누르거나, URL의 해시를 제거하거나, 단순히 닫기 버튼을 눌러도 됩니다.
>


### 팝업 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `hash` | string | **Required** | ' '가 포함된 어떤 고유한 해시 (예: `'#kitchen'`) | 팝업을 여는 방법 |
| `popup_style` | string | Optional | `bubble` (default) 또는 `classic` | 팝업의 시각적 스타일을 정의 |
| `popup_mode` | string | Optional | `default` (default), `fit-content`, `centered` 또는 `adaptive-dialog` | 팝업의 레이아웃 모드를 정의 |
| `with_bottom_offset` | boolean | Optional | `true` 또는 `false` (default) | `popup_mode: fit-content` 또는 `adaptive-dialog`에서만 사용됩니다. 모바일에서 하단 오프셋을 적용하며, 대시보드에 푸터 카드가 있을 때 유용합니다. |
| `full_width_on_mobile` | boolean | Optional | `true` 또는 `false` (default) | `popup_mode: centered`에서만 사용됩니다. 모바일에서 팝업을 화면 전체 너비로 확장하며, 작은 화면에서 유용합니다. |
| `performance_mode` | string | Optional | `default` (default) 또는 `performance` | 팝업 열기 애니메이션을 최적화합니다. `performance`는 콘텐츠 렌더링과 배경 블러를 약간 지연시키며, 설정되어 있다면 백드롭 블러도 비활성화합니다. |
| `auto_close` | string | Optional | 밀리초 단위 타임아웃 (예: 10초는 `10000`) | 타임아웃 후 팝업을 자동으로 닫음 |
| `close_on_click` | boolean | Optional | `true` 또는 `false` (default) | 어떤 상호작용 후에도 팝업을 자동으로 닫음 |
| `close_by_clicking_outside` | boolean | Optional | `true` (default) 또는 `false` | 팝업 바깥을 클릭해서 닫기 |
| `width_desktop` | string | Optional | Any CSS value | 데스크톱에서의 너비 (모바일에서는 기본값이 `100%`) |
| `margin` | string | Optional | Any CSS value | 모바일에서 팝업이 잘 가운데 정렬되지 않을 때**만** 사용하세요 (예: `13px`) |
| `margin_top_mobile` | string | Optional | Any CSS value | 모바일에서의 상단 여백 (예: 헤더가 숨겨져 있다면 `-56px`) |
| `margin_top_desktop` | string | Optional | Any CSS value | 데스크톱에서의 상단 여백 (예: 절반 크기 팝업이라면 `50vh`, `400px` 고정 높이라면 `calc(100vh - 400px)`) |
| `bg_color` | string | Optional | Any hex, rgb or rgba value | 팝업의 배경색 (예: 흰색 배경이면 `#ffffff`) |
| `bg_opacity` | string | Optional | `0`부터 `100`까지의 값 | 팝업의 배경 불투명도 (예: 투명도가 없으려면 `100`) |
| `bg_blur` | string | Optional | `0`부터 `100`까지의 값 | 팝업의 배경 블러 효과, **이 옵션은 `bg_opacity`가 `100`으로 설정되지 않은 경우에만 작동합니다** (예: 블러가 없으려면 `0`)|
| `shadow_opacity` | string | Optional | `0`부터 `100`까지의 값 | 팝업의 그림자 불투명도 (예: 숨기려면 `0`) |
| `hide_backdrop` | boolean | Optional | `true` 또는 `false` (default) | 메인 대시보드의 첫 번째 팝업에 이것을 true로 설정하면 모든 팝업의 백드롭을 비활성화합니다. |
| `background_update` | boolean | Optional | `true` 또는 `false` (default) | 백그라운드에서 팝업 콘텐츠를 업데이트 (권장하지 않음) |
| `trigger` | object 또는 list | Optional | [조건](#조건) 참고 | 조건이 충족되면 이 팝업을 엽니다 |
| `trigger_entity` | string | Optional | Any entity | 어떤 엔티티의 상태를 기준으로 이 팝업을 엽니다. `trigger`의 간단한 형태입니다 |
| `trigger_state` | string | Optional (`trigger_entity`가 정의되어 있으면 **Required**) | Any entity state | 팝업을 열기 위한 엔티티 상태 |
| `trigger_close` | boolean | Optional | `true` (default) 또는 `false` | 조건이 더 이상 충족되지 않으면 팝업을 닫음. 다만 예전 방식인 `trigger_entity`와 `trigger_state` 조합을 쓰면 기본값이 `false`가 됨 |
| `open_action` | object | Optional | [동작](#탭-더블-탭-길게-누르기-동작) 참고 | 팝업이 열릴 때 동작을 트리거 |
| `close_action` | object | Optional | [동작](#탭-더블-탭-길게-누르기-동작) 참고 | 팝업이 닫힐 때 동작을 트리거 |
| `show_header` | boolean | Optional | `true` (default) 또는 `false` | 팝업 헤더 전체를 표시/숨김 |
| `show_previous_button` | boolean | Optional | `true` 또는 `false` (default) | 닫기 버튼 옆에 이전 버튼을 표시하고, 가능한 경우 이전 팝업으로 돌아갑니다 |
| `show_close_button` | boolean | Optional | `true` (default) 또는 `false` | 헤더의 나머지 부분은 표시한 채로 닫기 버튼만 표시하거나 숨김 |
| `buttons_position` | string | Optional | `right` (default) 또는 `left` | 헤더에서 닫기 버튼과 이전 버튼의 위치 |
| `cards` | list | Optional | Any Bubble Card, Home Assistant card or custom card | 팝업의 콘텐츠를 정의합니다. 아래 팝업 예시를 참고하세요. |
| 팝업 헤더에 대해 [버튼의 모든 설정](#버튼)에도 접근할 수 있습니다. | | Optional | | 정의되지 않으면 헤더가 표시되지 않습니다 |

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참고)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | 팝업의 테두리 반경 |
| `--bubble-pop-up-main-background-color` | `color` | 팝업 내 지원되는 요소들의 기본 배경색 |
| `--bubble-pop-up-background-color` | `color` | 팝업의 배경색 |
| `--bubble-backdrop-background-color` | `color` | 백드롭의 배경색 |
| 팝업 헤더에 대해 [버튼의 모든 CSS 변수](#버튼-옵션)에도 접근할 수 있습니다. | | |

</details>


### 독립형 팝업 형식 (v3.2.0+)

v3.2.0부터 팝업은 새로운 독립형 형식을 사용하며, 콘텐츠 카드를 `cards` 옵션을 통해 팝업 안에 직접 정의합니다. 이는 더 나은 성능과 새로운 섹션 기반 드래그 앤 드롭 편집 경험을 제공합니다.


#### 예시

<details>

<summary>팝업 (독립형 형식)</summary>

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

<summary>팝업을 여는 버튼</summary>

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

## 가로 버튼 스택

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

이 카드는 팝업 카드와 함께 사용하기 좋은 카드로, 해당 팝업을 열 수 있게 해줍니다. 대시보드의 어떤 페이지든 열 수도 있습니다. 게다가 모션/재실 센서를 추가하면 방금 들어온 방에 따라 버튼의 순서가 자동으로 바뀝니다. 이 카드는 스크롤이 가능하고, 항상 표시된 상태를 유지하며, 푸터 역할을 합니다.

> [!IMPORTANT]  
> 이 카드는 뷰에서 (모든 카드와 팝업 뒤에) 마지막에 있어야 합니다. 어떤 스택 안에도 넣을 수 없습니다.

### 가로 버튼 스택 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Required** | ' '가 포함된 팝업 해시 (예: `'#kitchen'`) 또는 어떤 링크든 | 열려는 링크 |
| `1_name` | string | Optional | Any string | 버튼의 이름 |
| `1_icon` | string | Optional | Any `mdi:` icon | 버튼의 아이콘 |
| `1_entity` | string | Optional | Any light or light group | 배경에 해당 조명의 색상을 표시 |
| `1_pir_sensor` | string | Optional | Any binary sensor | `auto_order`를 위해 최소 한 개 이상의 pir 센서가 필요하며, 실제로는 어떤 엔티티 타입과도 작동합니다. 예를 들어 조명 그룹을 추가하면 마지막으로 변경된 상태를 기준으로 순서가 바뀝니다. |
| `auto_order` | boolean | Optional | `true` 또는 `false` (default) | `_pir_sensor`의 마지막 변경 시각에 따라 버튼의 순서를 변경합니다. 코드에 `_pir_sensor`가 하나도 없다면 반드시 `false`여야 합니다 |
| `margin` | string | Optional | Any CSS value | 모바일에서 `horizontal-buttons-stack`이 잘 가운데 정렬되지 않을 때**만** 사용하세요 (예: `13px`) |
| `width_desktop` | string | Optional | Any CSS value | 데스크톱에서의 너비 (모바일에서는 기본값이 `100%`) |
| `is_sidebar_hidden` | boolean | Optional | `true` 또는 `false` (default) | 데스크톱에서 사이드바가 숨겨져 있을 때(직접 숨기도록 수정한 경우에만) 가로 버튼 스택의 위치를 고정 |
| `rise_animation` | boolean | Optional | `true` (default) 또는 `false` | 페이지 로드 후 활성화되는 애니메이션을 비활성화하려면 `false`로 설정하세요 |
| `highlight_current_view` | boolean | Optional | `true` 또는 `false` (default) | 부드러운 애니메이션으로 현재 해시/뷰를 강조 표시 |
| `hide_gradient` | boolean | Optional | `true` 또는 `false` (default) | 그라데이션을 숨기려면 `false`로 설정하세요 |

> [!IMPORTANT]  
> 숫자로 시작하는 변수들이 버튼을 정의합니다. 버튼을 더 추가하려면 이 숫자만 바꾸면 됩니다 (아래 예시 참고).

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참고)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | 가로 버튼 스택 버튼의 테두리 반경 |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | 가로 버튼 스택 버튼의 배경색 |

</details>


#### 예시

<details>

<summary>재실 센서를 기준으로 스스로 재정렬되는 가로 버튼 스택</summary>

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

## 버튼

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

이 카드는 매우 다재다능합니다. **스위치**, **슬라이더**, **상태** 또는 **이름/텍스트** 버튼으로 사용할 수 있습니다.

> [!TIP]
> ### 모든 버튼 유형은 어떻게 다른가요?
>
> - **스위치 버튼:** 기본 버튼 유형입니다. 기본적으로 엔티티를 토글하며, 배경색은 엔티티의 상태나 조명의 색상에 따라 바뀝니다. **카드 탭 동작** 섹션에서 동작을 변경할 수 있습니다.
>
> - **슬라이더 버튼:** 이 버튼 유형은 조절 가능한 범위를 가진 엔티티를 제어할 수 있게 해줍니다. 조명 밝기 조절에 이상적이며, 채움 색상이 조명의 색상에 맞춰 조정됩니다. 배터리 잔량 같은 값을 표시하는 데에도 사용할 수 있습니다.
>   슬라이더가 지원하는 엔티티:
>   - 조명 (밝기)
>   - 미디어 플레이어 (볼륨)
>   - 커버 (위치)
>   - 팬 (퍼센트)
>   - 냉난방 (온도)
>   - 입력 숫자 및 숫자 (값)
>   - 배터리 센서 (퍼센트, 읽기 전용)
>
>   **슬라이더 설정**에서 엔티티 필터를 비활성화하면 숫자 상태를 가진 모든 엔티티에서도 사용할 수 있으며, 이 경우 `min`과 `max` 값을 정의합니다. 이 옵션은 읽기 전용입니다.
>
> - **상태 버튼:** 센서나 다른 엔티티의 정보를 표시하는 데 적합합니다. 누르면 해당 엔티티의 "추가 정보" 패널이 표시됩니다. 배경색은 변하지 않습니다.
>
> - **이름/텍스트 버튼:** 엔티티가 필요 없는 유일한 버튼 유형입니다. 짧은 텍스트, 이름 또는 제목을 표시할 수 있습니다. 동작을 추가할 수도 있습니다. 배경색은 변하지 않습니다.

### 버튼 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| 이름 | 유형 | 필수 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `entity` | string | **필수** | 모든 엔티티 | 제어할 엔티티 |
| `button_type` | string | 선택 | `switch` (기본값), `slider`, `state` 또는 `name` | 버튼의 동작 방식 |
| `name` | string | 선택 | 모든 문자열 | 버튼 이름, 정의하지 않으면 엔티티 이름이 표시됩니다 |
| `icon` | string | 선택 | 모든 `mdi:` 아이콘 | 버튼 아이콘, 정의하지 않으면 엔티티 아이콘 또는 `entity-picture`가 표시됩니다 |
| `force_icon` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity-picture` 대신 아이콘을 우선 사용합니다 |
| `use_accent_color` | boolean | 선택 (`false` 기본값) | **조명 전용.** 조명 색상 대신 테마의 강조 색상을 사용합니다.                         |
| `show_state` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 상태를 표시하거나 숨깁니다 |
| `show_name` | boolean | 선택 | `true` (기본값) 또는 `false` | 이름을 표시하거나 숨깁니다 |
| `show_icon` | boolean | 선택 | `true` (기본값) 또는 `false` | 아이콘을 표시하거나 숨깁니다 |
| `show_last_changed` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 변경 시각을 표시합니다 |
| `show_last_updated` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 업데이트 시각을 표시합니다 |
| `show_attribute` | boolean | 선택 | `true` 또는 `false` (기본값) | `name` 아래에 `entity`의 속성을 표시합니다 |
| `attribute` | string | 선택 (`show_attribute`가 `true`이면 필수) | `entity`의 속성 | 표시할 속성 (예: `brightness`) |
| `scrolling_effect` | boolean | 선택 | `true` (기본값) 또는 `false` | 내용이 컨테이너 크기를 초과할 때 텍스트가 스크롤되도록 허용합니다 |
| `button_action` | object | 선택 | `tap_action`, `double_tap_action` 또는 `hold_action`, 아래 참조 | 버튼 클릭 시 기본 동작을 변경할 수 있습니다. |
| `tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다 |
| `double_tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 더블 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다 |
| `hold_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 길게 누르기 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다 |
| `card_layout` | string | 선택 | `normal` (섹션 뷰가 아닐 때 기본값), `large` (섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참조 |
| `rows` | number | 선택 | 모든 숫자 | 행 수 (높이) (예: `2`) |
| `sub_button` | object | 선택 | [서브 버튼](#서브-버튼) 참조 | 오른쪽에 고정된 커스텀 버튼을 추가합니다 |

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참조)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | 버튼 내 지원 요소의 메인 배경색 |
| `--bubble-button-border-radius` | `px` | 버튼의 테두리 반경 |
| `--bubble-button-icon-border-radius` | `px` | 버튼 아이콘 컨테이너의 테두리 반경 |
| `--bubble-button-icon-background-color` | `color` | 버튼 아이콘 컨테이너의 배경색 |
| `--bubble-light-white-color` | `color` | 조명 버튼/슬라이더의 기본 흰색을 대체합니다 |
| `--bubble-light-color` | `color` | 조명 버튼/슬라이더의 색상을 대체합니다 (RGB 조명 포함) |
| `--bubble-button-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참조 | 버튼의 그림자 |

</details>

이 옵션들은 `button_type`이 `slider`로 설정된 경우에만 사용할 수 있습니다.

<details>

<summary><b>슬라이더 옵션 (YAML + 설명)</b></summary>

| 이름                  | 유형    | 필수 여부                     | 설명                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | 선택                        | 슬라이더의 최솟값입니다. 커스텀 슬라이더용입니다.                                                    |
| `max_value`             | number  | 선택                        | 슬라이더의 최댓값입니다. 커스텀 슬라이더용입니다.                                                    |
| `step`                  | number  | 선택                        | 슬라이더의 단계 값입니다.                                                                           |
| `tap_to_slide`          | boolean | 선택 (`false` 기본값)      | 슬라이더를 길게 누르는 대신 탭해서 활성화하는 이전 방식을 사용합니다.        |
| `relative_slide`        | boolean | 선택 (`false` 기본값 )     | 터치 시작 지점이 아닌 시작 값을 기준으로 값을 갱신합니다.                                      |
| `read_only_slider`      | boolean | 선택 (`false` 기본값)      | 슬라이더를 읽기 전용으로 만듭니다. 센서 등 일부 엔티티에서는 자동으로 활성화됩니다.                                        |
| `slider_live_update`    | boolean | 선택 (`false` 기본값)      | 슬라이드 중 엔티티 상태가 갱신됩니다. **모든 엔티티에 권장되는 기능은 아닙니다.**        |
| `slider_fill_orientation` | string | 선택 | `left`, `right`, `top` 또는 `bottom` | 슬라이더의 채움 방향을 변경합니다. 지정하지 않으면 왼쪽에서 오른쪽이며, [오른쪽에서 왼쪽 언어](#현지화)에서는 좌우가 바뀝니다 |
| `slider_value_position` | string | 선택 | `right`, `left`, `center` 또는 `hidden` | 값 표시 위치. 지정하지 않으면 오른쪽이고, [오른쪽에서 왼쪽 언어](#현지화)에서는 왼쪽이 됩니다 |
| `invert_slider_value` | boolean | 선택 (`false` 기본값) | 슬라이더 방향을 반전합니다 (100% 채움이 최솟값이 됩니다). 색상 슬라이더에서는 사용할 수 없습니다. |
| `light_slider_type` | string | 선택 | `brightness` (기본값), `hue`, `saturation`, `white_temp` | **조명 전용.** 슬라이더 모드를 선택합니다 |
| `cover_slider_type` | string | 선택 | `position` (기본값), `tilt_position` | **커버 전용.** 슬라이더 모드를 선택합니다 (위치 또는 틸트) |
| `hue_force_saturation` | boolean | 선택 (`false` 기본값) | **조명 전용 (색조 모드).** 색조 조정 시 채도를 강제 적용합니다 |
| `hue_force_saturation_value` | number | 선택 (`100` 기본값) | **조명 전용 (색조 모드).** 강제 채도 값 (0-100) |
| `use_accent_color` | boolean | 선택 (`false` 기본값) | **조명 전용 (밝기 모드).** 조명 색상 대신 테마 강조 색상을 사용합니다 |
| `allow_light_slider_to_0` | boolean | 선택 (`false` 기본값)    | **조명 전용.** 슬라이더가 0%에 도달하도록 허용하며, 이 경우 조명이 꺼집니다. `tap_to_slide`와 함께 사용할 수 없습니다. |
| `light_transition`      | boolean | 선택 (`false` 기본값)      | **조명 전용.** 지원되는 조명에 대해 부드러운 밝기 전환을 활성화합니다.                           |
| `light_transition_time` | number  | 선택 (`500` 기본값)        | **조명 전용.** 전환 시간(밀리초)입니다. `light_transition: true`가 필요합니다.            |

</details>

#### 예시

<details>

<summary>조명의 밝기를 제어할 수 있는 슬라이더 버튼</summary>

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

<summary>더 많은 옵션을 가진 버튼</summary>

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

## 미디어 플레이어

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

이 카드를 사용하면 미디어 플레이어 엔티티를 제어할 수 있습니다.

### 미디어 플레이어 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| 이름 | 유형 | 필수 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `entity` | string | **필수** | 모든 미디어 플레이어 | 제어할 미디어 플레이어 |
| `name` | string | 선택 | 모든 문자열 | 미디어 플레이어 이름, 정의하지 않으면 엔티티 이름이 표시됩니다 |
| `icon` | string | 선택 | 모든 `mdi:` 아이콘 | 미디어 플레이어 아이콘, 정의하지 않으면 엔티티 아이콘 또는 `entity-picture`가 표시됩니다 |
| `force_icon` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity-picture` 대신 아이콘을 우선 사용합니다 |
| `show_state` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 상태를 표시하거나 숨깁니다 |
| `show_name` | boolean | 선택 | `true` (기본값) 또는 `false` | 이름을 표시하거나 숨깁니다 |
| `show_icon` | boolean | 선택 | `true` (기본값) 또는 `false` | 아이콘을 표시하거나 숨깁니다 |
| `show_last_changed` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 변경 시각을 표시합니다 |
| `show_last_updated` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 업데이트 시각을 표시합니다 |
| `show_attribute` | boolean | 선택 | `true` 또는 `false` (기본값) | `name` 아래에 `entity`의 속성을 표시합니다 |
| `attribute` | string | 선택 (`show_attribute`가 `true`이면 필수) | `entity`의 속성 | 표시할 속성 (예: `brightness`) |
| `scrolling_effect` | boolean | 선택 | `true` (기본값) 또는 `false` | 내용이 컨테이너 크기를 초과할 때 텍스트가 스크롤되도록 허용합니다 |
| `min_volume` | number | 선택 | 모든 숫자 | 볼륨 슬라이더의 최솟값입니다. |
| `max_volume` | number | 선택 | 모든 숫자 | 볼륨 슬라이더의 최댓값입니다. |
| `cover_background` | boolean | 선택 | `true` 또는 `false` (기본값) | 흐릿하게 처리된 미디어 커버를 카드 배경으로 사용합니다. |
| `button_action` | object | 선택 | `tap_action`, `double_tap_action` 또는 `hold_action`, [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 버튼 클릭 시 기본 동작을 변경할 수 있습니다. |
| `tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |
| `double_tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 더블 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다. |
| `hold_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 길게 누르기 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |
| `main_buttons_position` | string | 선택 | `default` 또는 `bottom` | 커버 동작 버튼을 하단에 고정 배치합니다 |
| `main_buttons_full_width` | boolean | 선택 | `true` 또는 `false` | 하단 동작 버튼을 전체 너비로 만듭니다 (위치가 `bottom`일 때 기본값: `true`) |
| `main_buttons_alignment` | string | 선택 | `end` (기본값), `center`, `start`, `space-between` | 전체 너비가 아닐 때 하단 동작 버튼의 정렬 |
| `card_layout` | string | 선택 | `normal` (섹션 뷰가 아닐 때 기본값), `large` (섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참조 |
| `rows` | number | 선택 | 모든 숫자 | 행 수 (높이) (예: `2`) |
| `sub_button` | object | 선택 | [서브 버튼](#서브-버튼) 참조 | 오른쪽에 고정된 커스텀 버튼을 추가합니다 |
| `hide` | object | 선택 | 아래 참조 | 카드에서 버튼을 숨깁니다 |

#### 숨김 옵션

| 이름 | 유형 | 필수 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | 선택 | `true` 또는 `false` (기본값) | 재생/일시정지 버튼을 숨깁니다 |
| `volume_button` | boolean | 선택 | `true` 또는 `false` (기본값) | 볼륨 버튼을 숨깁니다 |
| `previous_button` | boolean | 선택 | `true` 또는 `false` (기본값) | 이전 버튼을 숨깁니다 |
| `next_button` | boolean | 선택 | `true` 또는 `false` (기본값) | 다음 버튼을 숨깁니다 |
| `power_button` | boolean | 선택 | `true` 또는 `false` (기본값) | 전원 버튼을 숨깁니다 |

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참조)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | 미디어 플레이어의 메인 배경색 |
| `--bubble-media-player-border-radius` | `px` | 미디어 플레이어의 테두리 반경 |
| `--bubble-media-player-buttons-border-radius` | `px` | 미디어 플레이어 버튼의 테두리 반경 |
| `--bubble-media-player-slider-background-color` | `color` | 볼륨 슬라이더의 배경색 |
| `--bubble-media-player-icon-border-radius` | `px` | 미디어 플레이어 아이콘 컨테이너의 테두리 반경 |
| `--bubble-media-player-icon-background-color` | `color` | 미디어 플레이어 아이콘 컨테이너의 배경색 |
| `--bubble-media-player-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참조 | 미디어 플레이어의 그림자 |

</details>


#### 예시

<details>

<summary>모든 옵션을 사용한 미디어 플레이어</summary>

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

## 커버

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

이 카드를 사용하면 `cover` 엔티티를 제어할 수 있습니다.

### 커버 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| 이름 | 유형 | 필수 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `entity` | string | **필수** | 모든 커버 | 제어할 커버 |
| `name` | string | 선택 | 모든 문자열 | 커버 이름, 정의하지 않으면 엔티티 이름이 표시됩니다 |
| `force_icon` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity-picture` 대신 아이콘을 우선 사용합니다 |
| `show_state` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 상태를 표시하거나 숨깁니다 |
| `show_name` | boolean | 선택 | `true` (기본값) 또는 `false` | 이름을 표시하거나 숨깁니다 |
| `show_icon` | boolean | 선택 | `true` (기본값) 또는 `false` | 아이콘을 표시하거나 숨깁니다 |
| `show_last_changed` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 변경 시각을 표시합니다 |
| `show_last_updated` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 업데이트 시각을 표시합니다 |
| `show_attribute` | boolean | 선택 | `true` 또는 `false` (기본값) | `name` 아래에 `entity`의 속성을 표시합니다 |
| `attribute` | string | 선택 (`show_attribute`가 `true`이면 필수) | `entity`의 속성 | 표시할 속성 (예: `brightness`) |
| `scrolling_effect` | boolean | 선택 | `true` (기본값) 또는 `false` | 내용이 컨테이너 크기를 초과할 때 텍스트가 스크롤되도록 허용합니다 |
| `icon_open` | string | 선택 | 모든 `mdi:` 아이콘 | 열린 커버의 아이콘, 정의하지 않으면 기본 열림 아이콘이 표시됩니다 |
| `icon_close` | string | 선택 | 모든 `mdi:` 아이콘 | 닫힌 커버의 아이콘, 정의하지 않으면 기본 닫힘 아이콘이 표시됩니다 |
| `icon_up` | string | 선택 | 모든 `mdi:` 아이콘 | 열기 버튼의 아이콘, 정의하지 않으면 기본 열림 아이콘이 표시됩니다 |
| `icon_down` | string | 선택 | 모든 `mdi:` 아이콘 | 닫기 버튼의 아이콘, 정의하지 않으면 기본 닫힘 아이콘이 표시됩니다 |
| `open_service` | string | 선택 | 모든 서비스 또는 스크립트 | 커버를 여는 서비스, 기본값은 `cover.open_cover` |
| `stop_service` | string | 선택 | 모든 서비스 또는 스크립트 | 커버를 멈추는 서비스, 기본값은 `cover.stop_cover` |
| `close_service` | string | 선택 | 모든 서비스 또는 스크립트 | 커버를 닫는 서비스, 기본값은 `cover.close_cover` |
| `tilt_buttons` | string | 선택 | `top` (기본값), `bottom`, `left`, `right`, `hidden` | 틸트 제어 버튼의 위치 (커버가 틸트를 지원할 때만 표시) |
| `open_tilt_service` | string | 선택 | 모든 서비스 또는 스크립트 | 틸트를 여는 서비스, 기본값은 `cover.open_cover_tilt` |

| `close_tilt_service` | string | 선택 | 모든 서비스 또는 스크립트 | 틸트를 닫는 서비스, 기본값은 `cover.close_cover_tilt` |
| `button_action` | object | 선택 | `tap_action`, `double_tap_action` 또는 `hold_action`, [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 버튼 클릭 시 기본 동작을 변경할 수 있습니다. |
| `tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |
| `double_tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 더블 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다. |
| `hold_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 길게 누르기 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |
| `main_buttons_position` | string | 선택 | `default` 또는 `bottom` | 미디어 컨트롤을 하단에 고정 배치합니다 |
| `main_buttons_full_width` | boolean | 선택 | `true` 또는 `false` | 하단 컨트롤을 전체 너비로 만듭니다 (위치가 `bottom`일 때 기본값: `true`) |
| `main_buttons_alignment` | string | 선택 | `end` (기본값), `center`, `start`, `space-between` | 전체 너비가 아닐 때 하단 컨트롤의 정렬 |
| `card_layout` | string | 선택 | `normal` (섹션 뷰가 아닐 때 기본값), `large` (섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참조 |
| `rows` | number | 선택 | 모든 숫자 | 행 수 (높이) (예: `2`) |
| `sub_button` | object | 선택 | [서브 버튼](#서브-버튼) 참조 | 오른쪽에 고정된 커스텀 버튼을 추가합니다 |

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참조)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | 커버 카드 내 지원 요소의 메인 배경색 |
| `--bubble-cover-border-radius` | `px` | 커버 카드의 테두리 반경 |
| `--bubble-cover-icon-border-radius` | `px` | 커버 카드 아이콘 컨테이너의 테두리 반경 |
| `--bubble-cover-icon-background-color` | `color` | 커버 카드 아이콘 컨테이너의 배경색 |
| `--bubble-cover-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참조 | 커버 카드의 그림자 |
| `--bubble-button-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참조 | 커버 카드 내 버튼의 그림자 |

</details>


#### 예시

<details>

<summary>롤러 셰이드를 제어할 수 있는 카드</summary>

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

## 선택

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

이 카드를 사용하면 `input_select` / `select` 엔티티를 위한 드롭다운 메뉴를 추가할 수 있습니다. 이 카드는 서브 버튼과 Bubble Card의 모든 공통 기능도 지원합니다.

> [!TIP]
> 원한다면 선택 서브 버튼도 사용할 수 있습니다. 이 기능은 서브 버튼을 지원하는 모든 카드에서 사용할 수 있습니다.

### 선택 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| 이름 | 유형 | 필수 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `entity` | string | **필수** | 모든 엔티티 | 제어할 엔티티 |
| `name` | string | 선택 | 모든 문자열 | 선택 카드 이름, 정의하지 않으면 엔티티 이름이 표시됩니다 |
| `icon` | string | 선택 | 모든 `mdi:` 아이콘 | 선택 카드 아이콘, 정의하지 않으면 엔티티 아이콘 또는 `entity-picture`가 표시됩니다 |
| `force_icon` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity-picture` 대신 아이콘을 우선 사용합니다 |
| `show_state` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 상태를 표시하거나 숨깁니다 |
| `show_name` | boolean | 선택 | `true` (기본값) 또는 `false` | 이름을 표시하거나 숨깁니다 |
| `show_icon` | boolean | 선택 | `true` (기본값) 또는 `false` | 아이콘을 표시하거나 숨깁니다 |
| `show_last_changed` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 변경 시각을 표시합니다 |
| `show_last_updated` | boolean | 선택 | `true` 또는 `false` (기본값) | `entity`의 마지막 업데이트 시각을 표시합니다 |
| `show_attribute` | boolean | 선택 | `true` 또는 `false` (기본값) | `name` 아래에 `entity`의 속성을 표시합니다 |
| `attribute` | string | 선택 (`show_attribute`가 `true`이면 필수) | `entity`의 속성 | 표시할 속성 (예: `brightness`) |
| `scrolling_effect` | boolean | 선택 | `true` (기본값) 또는 `false` | 내용이 컨테이너 크기를 초과할 때 텍스트가 스크롤되도록 허용합니다 |
| `tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |
| `double_tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 더블 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다. |
| `hold_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 길게 누르기 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |
| `card_layout` | string | 선택 | `normal` (섹션 뷰가 아닐 때 기본값), `large` (섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참조 |
| `rows` | number | 선택 | 모든 숫자 | 행 수 (높이) (예: `2`) |
| `sub_button` | object | 선택 | [서브 버튼](#서브-버튼) 참조 | 오른쪽에 고정된 커스텀 버튼을 추가합니다 |

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참조)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | 선택 카드 내 지원 요소의 메인 배경색 |
| `--bubble-select-background-color` | `color` | 선택 카드의 배경색 |
| `--bubble-select-list-border-radius` | `px` | 카드 내 드롭다운 메뉴의 테두리 반경 |
| `--bubble-select-list-item-accent-color` | `color` | 선택된 항목의 강조 색상 |
| `--bubble-select-list-background-color` | `color` | 카드 내 드롭다운 메뉴의 배경색 |
| `--bubble-select-list-width` | `px` | 카드 내 드롭다운 메뉴의 너비 |
| `--bubble-select-arrow-background-color` | `color` | 드롭다운 화살표의 배경색 |
| `--bubble-select-button-border-radius` | `px` | 선택 버튼의 테두리 반경 |
| `--bubble-select-border-radius` | `px` | 선택 카드의 테두리 반경 |
| `--bubble-select-icon-border-radius` | `px` | 선택 카드 아이콘 컨테이너의 테두리 반경 |
| `--bubble-select-icon-background-color` | `color` | 선택 카드 아이콘 컨테이너의 배경색 |
| `--bubble-select-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참조 | 선택 카드의 그림자 |

</details>


#### 예시

<details>

<summary>씬 목록을 가진 선택 카드</summary>

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

## 냉난방

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

이 카드를 사용하면 `climate` 엔티티를 제어할 수 있습니다.

> [!TIP]
> 모드 선택 메뉴는 카드를 생성할 때 자동으로 추가되는 [서브 버튼](#서브-버튼)입니다. 이후 원하는 대로 수정하거나 제거할 수 있습니다.

### 냉난방 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| 이름                     | 유형    | 필수 여부                         | 지원 옵션                                  | 설명                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **필수**                        | 냉난방 엔티티                                   | 제어할 엔티티 (예: `climate.living_room`).                                                            |
| `name`                  | string  | 선택                            | 모든 문자열                                       | 카드의 커스텀 이름입니다. 정의하지 않으면 엔티티 이름이 표시됩니다.                                    |
| `icon`                  | string  | 선택                            | 모든 `mdi:` 아이콘                                  | 카드의 커스텀 아이콘입니다. 정의하지 않으면 엔티티 아이콘 또는 `entity-picture`가 사용됩니다.                   |
| `force_icon`            | boolean | 선택                            | `true` 또는 `false` (기본값)                     | `entity-picture` 대신 아이콘을 우선 사용합니다.                                                           |
| `show_state`            | boolean | 선택                            | `true` 또는 `false` (기본값)                     | `entity`의 현재 상태를 표시하거나 숨깁니다.                                                                 |
| `show_name`             | boolean | 선택                            | `true` (기본값) 또는 `false`                     | 엔티티 이름을 표시하거나 숨깁니다.                                                                            |
| `show_icon`             | boolean | 선택                            | `true` (기본값) 또는 `false`                     | 아이콘을 표시하거나 숨깁니다.                                                                                          |
| `hide_target_temp_low`  | boolean | 선택 (`target_temp_low`를 지원하는 엔티티에만 해당) | `true` 또는 `false` (기본값) | `entity`가 지원하는 경우 낮은 목표 온도 컨트롤을 숨깁니다.                                                          |
| `hide_target_temp_high` | boolean | 선택 (`target_temp_high`를 지원하는 엔티티에만 해당)| `true` 또는 `false` (기본값) | `entity`가 지원하는 경우 높은 목표 온도 컨트롤을 숨깁니다.                                                         |
| `state_color`           | boolean | 선택                            | `true` 또는 `false` (기본값)                     | 냉난방 엔티티가 켜져 있을 때 일정한 배경색을 적용합니다.                                                              |
| `step` | number | 선택 | 모든 숫자 | 온도 단계 값입니다. |
| `min_temp` | number | 선택 | 모든 숫자 | 최소 온도입니다. |
| `max_temp` | number | 선택 | 모든 숫자 | 최대 온도입니다. |
| `button_action` | object | 선택 | `tap_action`, `double_tap_action` 또는 `hold_action`, [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 버튼 클릭 시 기본 동작을 변경할 수 있습니다. |
| `tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |
| `double_tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 더블 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다. |
| `hold_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 아이콘 길게 누르기 시 동작 유형을 정의합니다. 정의하지 않으면 `more-info`가 사용됩니다. |                              |
| `main_buttons_position` | string | 선택 | `default` 또는 `bottom` | 냉난방 동작 버튼을 하단에 고정 배치합니다 |
| `main_buttons_full_width` | boolean | 선택 | `true` 또는 `false` | 하단 동작 버튼을 전체 너비로 만듭니다 (위치가 `bottom`일 때 기본값: `true`) |
| `main_buttons_alignment` | string | 선택 | `end` (기본값), `center`, `start`, `space-between` | 전체 너비가 아닐 때 하단 동작 버튼의 정렬 |
| `card_layout` | string | 선택 | `normal` (섹션 뷰가 아닐 때 기본값), `large` (섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참조 |
| `rows` | number | 선택 | 모든 숫자 | 행 수 (높이) (예: `2`) |
| `sub_button`            | object  | 선택                            | [서브 버튼](#서브-버튼) 참조                | 오른쪽에 고정된 커스텀 버튼을 추가합니다. 냉난방 모드 선택 메뉴에 유용합니다.                                  |

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참조)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | 냉난방 카드 내 지원 요소의 메인 배경색 |
| `--bubble-climate-border-radius` | `px` | 냉난방 카드 요소 내 지원 요소의 테두리 반경 |
| `--bubble-climate-button-background-color` | `color` | 냉난방 카드 버튼의 배경색 |
| `--bubble-climate-icon-border-radius` | `px` | 냉난방 카드 아이콘 컨테이너의 테두리 반경 |
| `--bubble-state-climate-fan-only-color` | `color` | 송풍 전용 상태의 오버레이 색상 |
| `--bubble-state-climate-dry-color` | `color` | 제습 상태의 오버레이 색상 |
| `--bubble-state-climate-cool-color` | `color` | 냉방 상태의 오버레이 색상 |
| `--bubble-state-climate-heat-color` | `color` | 난방 상태의 오버레이 색상 |
| `--bubble-state-climate-auto-color` | `color` | 자동 상태의 오버레이 색상 |
| `--bubble-state-climate-heat-cool-color` | `color` | 냉난방 상태의 오버레이 색상 |
| `--bubble-climate-accent-color` | `color` | 냉난방 카드의 강조 색상 |
| `--bubble-climate-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참조 | 냉난방 컨테이너의 그림자. |

</details>


#### 예시

<details>

<summary>HVAC 모드 드롭다운 메뉴가 있는 냉난방 카드</summary>

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

## 캘린더

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

이 카드를 사용하면 캘린더 엔티티를 표시할 수 있습니다. 내용을 스크롤할 수 있어 다가오는 일정을 쉽게 살펴볼 수 있습니다.

### 캘린더 옵션

<details>

<summary><b>옵션 (YAML + 설명)</b></summary>

| 이름                | 유형    | 필수 여부  | 지원 옵션                               | 설명                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | 선택     | 모든 숫자 (최소값: 1)                        | 현재부터 N번째 날의 끝까지, 이벤트를 가져올 캘린더 일수 (기본값: 7) |
| `entities`          | object  | **필수** | 캘린더 엔티티 객체 (아래 참조)            | 제어할 엔티티 (예: `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **필수** | 캘린더 엔티티                               | 표시할 캘린더 엔티티                                                          |
| `entities.color`    | string  | 선택     | 색상                                         | 캘린더 칩의 커스텀 색상입니다. 정의하지 않으면 자동으로 색상이 지정됩니다 |
| `days`              | number  | 선택     | 모든 숫자 (최소값: 1)                         | 현재부터 N번째 날의 끝까지, 이벤트를 가져올 캘린더 일수 (기본값: 7) |
| `limit`             | number  | 선택     | 숫자                                        | 카드에 표시될 이벤트의 개수                                  |
| `show_end`          | boolean | 선택     | `true` 또는 `false` (기본값)                     | 이벤트의 종료 시각을 표시하거나 숨깁니다                                                    |
| `show_progress`     | boolean | 선택     | `true` (기본값) 또는 `false`                     | 이벤트 진행 표시줄을 표시하거나 숨깁니다                                                     |
| `show_started_events`| boolean | 선택     | `true` (기본값) 또는 `false`                     | 현재 진행 중인 이벤트를 표시하거나 숨깁니다. 여러 날에 걸친 이벤트는 하루 단위로 판단하므로 진행 중인 날만 숨겨지고 남은 날들은 계속 표시됩니다 |
| `scrolling_effect`  | boolean | 선택 | `true` (기본값) 또는 `false` | 내용이 컨테이너 크기를 초과할 때 텍스트가 스크롤되도록 허용합니다 |
| `event_action` | object | 선택 | `tap_action`, `double_tap_action` 또는 `hold_action`, [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 이벤트 클릭 시 동작을 추가할 수 있습니다. |
| `tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 날짜 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다. |
| `double_tap_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 날짜 더블 클릭 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다. |
| `hold_action` | object | 선택 | [동작](#탭-더블-탭-길게-누르기-동작) 참조 | 날짜 길게 누르기 시 동작 유형을 정의합니다. 정의하지 않으면 `none`이 사용됩니다. |
| `card_layout` | string | 선택 | `normal` (섹션 뷰가 아닐 때 기본값), `large` (섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참조 |
| `rows` | number | 선택 | 모든 숫자 | 행 수 (높이) (예: `2`) |
| `sub_button` | object | 선택 | [서브 버튼](#서브-버튼) 참조 | 오른쪽에 고정된 커스텀 버튼을 추가합니다 |

</details>

<details>

<summary><b>CSS 변수 (<a href="#스타일링">스타일링</a> 참조)</b></summary>

| 변수                                  | 예상 값 | 설명                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | 캘린더 카드 내 지원 요소의 메인 배경색  |
| `--bubble-calendar-border-radius`         | `px`           | 캘린더 카드 요소 내 지원 요소의 테두리 반경 |
| `--bubble-calendar-height`                | `px`           | 캘린더 카드의 높이                                        |

</details>

#### 예시

<details>

<summary>제한된 개수의 이벤트를 표시하는 캘린더 카드</summary>

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

<summary>종료 시각과 진행 표시줄이 있는 캘린더 카드</summary>

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


## 구분선

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

이 카드는 팝업을 카테고리나 섹션으로 나누는 간단한 구분선입니다. 예를 들어 조명, 기기, 커버, 설정, 자동화 등입니다.

### 구분선 옵션

<details>

<summary><b>옵션(YAML과 설명)</b></summary>

| 이름 | 유형 | 필요 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `name` | string | 선택 사항이지만 권장 | 임의의 문자열 | 구분선의 이름 |
| `icon` | string | 선택 사항이지만 권장 | 임의의 `mdi:` 아이콘 | 구분선의 아이콘 |
| `card_layout` | string | 선택 사항 | `normal`(섹션 뷰가 아닐 때 기본값), `large`(섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참고 |
| `rows` | number | 선택 사항 | 임의의 숫자 | 행 수(높이)(예: `2`) |
| `sub_button` | object | 선택 사항 | [서브 버튼](#서브-버튼) 참고 | 오른쪽에 고정된 맞춤 버튼 추가 |

</details>

<details>

<summary><b>CSS 변수(<a href="#스타일링">스타일링</a> 참고)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | 구분선 내 선의 배경색 |

</details>

#### 예시

<details>

<summary>"커버" 섹션을 위한 구분선</summary>

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

## 빈 열

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

이 카드는 빈 열을 채우기 위한 것입니다. 팝업 안에 카드가 하나만 있는 `horizontal-stack`이 있을 때 유용합니다. 이 스크린샷 오른쪽 아래 모서리를 보면 이 카드가 (보이지 않게) 있는 것을 알 수 있습니다.

### 빈 열 옵션

이 카드는 옵션이 없으며 [스타일링](#스타일링)을 지원하지 않지만, HA 섹션의 레이아웃 옵션은 지원합니다.

#### 예시

<details>

<summary>가로 스택 안의 빈 열</summary>

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

## 서브 버튼 전용

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

이 카드는 서브 버튼 전용입니다. 메뉴, 빠른 작업, 정보 칩, 또는 페이지 하단에 고정된 푸터를 만들기에 안성맞춤입니다.

> [!IMPORTANT]  
> 이 카드는 새로운 서브 버튼 스키마를 사용합니다. 버튼을 정의하려면 `sub_button.bottom`을 사용하세요. `sub_button.main` 섹션은 무시됩니다.

### 서브 버튼 전용 옵션

<details>

<summary><b>옵션(YAML과 설명)</b></summary>

| 이름 | 유형 | 필요 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **필수** | [서브 버튼](#서브-버튼) 참고 | `bottom` 섹션을 사용해 서브 버튼을 정의 |
| `hide_main_background` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | 카드 배경 제거 |
| `footer_mode` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | 카드를 페이지 하단에 고정 |
| `footer_full_width` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | 푸터를 전체 너비(100%)로 설정 |
| `footer_width` | number | 선택 사항 | 임의의 숫자 | `footer_full_width`가 `false`일 때 픽셀 단위 푸터 너비 |
| `footer_bottom_offset` | number | 선택 사항 | 임의의 숫자 | 페이지 하단으로부터의 거리(픽셀 단위, 기본값: `16`) |
| `card_layout` | string | 선택 사항 | `normal`(섹션 뷰가 아닐 때 기본값), `large`(섹션 뷰일 때 기본값), `large-2-rows`, `large-sub-buttons-grid` | 카드의 스타일 레이아웃, [카드 레이아웃](#카드-레이아웃) 참고 |
| `rows` | number | 선택 사항 | 임의의 숫자 | 행 수(높이)(예: `2`) |

</details>

<details>

<summary><b>CSS 변수(<a href="#스타일링">스타일링</a> 참고)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width`가 `false`일 때 푸터 너비 |
| `--bubble-footer-bottom` | `px` | 푸터 하단 오프셋 |
| `--bubble-footer-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) 참고 | 푸터 컨테이너의 박스 섀도우 |

</details>

#### 예시

<details>

<summary>칩 스타일(스크린샷과 동일)</summary>

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

<summary>고정된 푸터 메뉴</summary>

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

## 서브 버튼

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

이 옵션을 지원하는 모든 카드에서 서브 버튼을 추가해 카드를 더욱 세밀하게 커스터마이즈할 수 있습니다. 예를 들어 진공청소기, 날씨 카드, 또는 떠올릴 수 있는 거의 모든 것을 제어하는 버튼을 만들 수 있습니다. 이 서브 버튼들은 탭 동작과 대부분의 버튼 옵션을 지원합니다.

이제 서브 버튼은 세 가지 유형을 지원합니다: **기본(버튼)**, **슬라이더**, **드롭다운/선택**. 같은 카드 안에서 유형을 섞어 쓸 수 있고, 서브 버튼을 위쪽이나 아래쪽에 배치할 수 있으며, 더 고급스러운 레이아웃을 위해 그룹으로 정리할 수도 있습니다.

#### 서브 버튼 배치와 그룹

<details>

<summary><b>서브 버튼 구조(main / bottom + 그룹)</b></summary>

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

**참고:**
- `main`과 `bottom`은 서로 독립적인 두 섹션입니다. 하단 서브 버튼은 카드 하단에 고정됩니다.
- `main_layout`과 `bottom_layout`은 `inline`(기본값) 또는 그룹을 세로로 쌓는 `rows`를 지원합니다.
- 그룹은 `group` 배열과 선택적인 `buttons_layout`(`inline` 또는 `column`)을 가진 객체입니다.
- `justify_content`는 **하단 그룹에서만** 사용할 수 있습니다(`start`, `center`, `end`, `fill`).
- 하단 서브 버튼이 있으면, 다른 레이아웃을 명시적으로 지정하지 않는 한 카드 레이아웃이 자동으로 `large`로 전환됩니다.
- 이전 방식의 `sub_button` 배열도 계속 지원되며 `main` 섹션으로 처리됩니다.

</details>

### 서브 버튼 옵션

<details>

<summary><b>옵션(YAML과 설명)</b></summary>

| 이름 | 유형 | 필요 여부 | 지원 옵션 | 설명 |
| --- | --- | --- | --- | --- |
| `entity` | string | 선택 사항 | 임의의 엔티티 | 제어할 엔티티 |
| `name` | string | 선택 사항 | 임의의 문자열 | 서브 버튼의 이름, 정의되지 않으면 엔티티 이름이 표시됨 |
| `icon` | string | 선택 사항 | 임의의 `mdi:` 아이콘 | 서브 버튼의 아이콘, 정의되지 않으면 엔티티 아이콘이나 엔티티 사진이 표시됨 |
| `force_icon` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | 엔티티 사진이 있어도 아이콘을 강제로 표시 |
| `sub_button_type` | string | 선택 사항 | `default`, `slider` 또는 `select` | 서브 버튼 유형 선택 |
| `show_background` | boolean | 선택 사항 | `true`(기본값) 또는 `false` | 서브 버튼의 배경을 표시하며, 엔티티 상태에 따라 색이 바뀜 |
| `state_background` | boolean | 선택 사항 | `true`(기본값) 또는 `false` | 엔티티가 `on`일 때 상태 색상을 사용 |
| `light_background` | boolean | 선택 사항 | `true`(기본값) 또는 `false` | 사용 가능한 경우 조명 색상을 배경에 사용 |
| `show_state` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | `entity`의 상태를 표시하거나 숨김 |
| `show_name` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | 이름을 표시하거나 숨김 |
| `show_icon` | boolean | 선택 사항 | `true`(기본값) 또는 `false` | 아이콘을 표시하거나 숨김 |
| `show_last_changed` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | `entity`의 마지막 변경 시간을 표시 |
| `show_last_updated` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | `entity`의 마지막 업데이트 시간을 표시 |
| `show_attribute` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | `name` 아래에 `entity`의 속성을 표시 |
| `attribute` | string | 선택 사항(`show_attribute`가 `true`이면 필수) | `entity`의 속성 | 표시할 속성(예: `brightness`) |
| `select_attribute` | string | 선택 사항 | `entity`의 속성 목록(위 지원 옵션 참고) | 클릭하면 이 속성 목록이 드롭다운으로 열림(예: `effect_list`) |
| `show_arrow` | boolean | 선택 사항 | `true`(기본값) 또는 `false` | select 서브 버튼의 드롭다운 화살표를 표시하거나 숨김 |
| `scrolling_effect` | boolean | 선택 사항 | `true`(기본값) 또는 `false` | 내용이 컨테이너 크기를 초과할 때 텍스트가 스크롤되도록 허용 |
| `tap_action` | object | 선택 사항 | [동작](#탭-더블-탭-길게-누르기-동작) 참고 | 서브 버튼 클릭 시 동작 유형을 정의, 정의되지 않으면 `more-info`가 사용됨 |
| `double_tap_action` | object | 선택 사항 | [동작](#탭-더블-탭-길게-누르기-동작) 참고 | 서브 버튼 더블 클릭 시 동작 유형을 정의, 정의되지 않으면 `none`이 사용됨 |
| `hold_action` | object | 선택 사항 | [동작](#탭-더블-탭-길게-누르기-동작) 참고 | 서브 버튼 길게 누르기 시 동작 유형을 정의, 정의되지 않으면 `more-info`가 사용됨 |
| `fill_width` | boolean | 선택 사항 | `true` 또는 `false` | 사용 가능한 너비를 채움(기본값: main은 `false`, bottom은 `true`) |
| `width` | number 또는 string | 선택 사항 | 임의의 숫자 또는 CSS 길이 | 사용자 지정 너비(기본적으로 main 섹션은 `px`, bottom 섹션은 `%`) |
| `custom_height` | number | 선택 사항 | 임의의 숫자 | 픽셀 단위의 사용자 지정 높이 |
| `content_layout` | string | 선택 사항 | `icon-left`(기본값), `icon-top`, `icon-bottom`, `icon-right` | 서브 버튼 내 아이콘 배치 |
| `always_visible` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | **슬라이더 전용.** 탭으로 여는 대신 슬라이더를 항상 표시 |
| `show_button_info` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | **슬라이더 전용.** `always_visible`이 활성화됐을 때 아이콘/이름/상태를 표시 |
| `visibility` | object 또는 list | 선택 사항 | [조건](#조건) 참고 | 조건에 따라 서브 버튼을 표시하거나 숨김 |
| `hide_when_parent_unavailable` | boolean | 선택 사항 | `true` 또는 `false`(기본값) | 상위 카드 엔티티를 사용할 수 없을 때 서브 버튼을 숨김 |
| `css_class` | string | 선택 사항 | 임의의 문자열 | 서브 버튼에 추가되는 CSS 클래스로, 이름과 상관없이 [스타일](#스타일링)에서 해당 서브 버튼을 지정할 수 있습니다 (예: `My value`는 `.my-value`가 됩니다) |

</details>

<details>

<summary><b>슬라이더 서브 버튼 옵션(버튼 슬라이더와 동일)</b></summary>

<br>

슬라이더 서브 버튼은 버튼 슬라이더와 동일한 슬라이더 옵션을 지원합니다. 예를 들어 다음과 같습니다:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS 변수(<a href="#스타일링">스타일링</a> 참고)</b></summary>

| 변수 | 예상 값 | 설명 |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | 서브 버튼의 테두리 반경 |
| `--bubble-sub-button-background-color` | `color` | 서브 버튼의 배경색 |
| `--bubble-sub-button-outline` | `box-shadow` | 서브 버튼이나 슬라이더에, 그 요소가 뒤에 있는 카드와 같은 색으로 칠해져 보이지 않게 될 때만 추가되는 외곽선 (`none`으로 설정하면 제거됩니다) |
| `--bubble-sub-slider-border-radius` | `px` | 슬라이더 서브 버튼의 테두리 반경 |
| `--bubble-sub-slider-background-color` | `color` | 슬라이더 서브 버튼의 배경색 |
| `--bubble-sub-slider-height` | `px` | 항상 표시되는 슬라이더 서브 버튼의 높이 |
| `--bubble-sub-slider-outline` | `box-shadow` | 슬라이더 서브 버튼에만 적용되는 외곽선, 지정하지 않으면 `--bubble-sub-button-outline`을 따릅니다 |
| `--bubble-sub-button-dark-text-color` | `color` | 밝은 서브 버튼 배경에서의 텍스트 색상 |

</details>

#### 예시

<details>

<summary>진공청소기 카드를 만드는 서브 버튼이 있는 버튼(스크린샷과 동일)</summary>

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

<summary>밝기를 보여주는 서브 버튼과 조명을 켜고 끄는 서브 버튼이 있는 버튼 슬라이더(스크린샷과 동일)</summary>

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

<summary>오늘과 내일의 날씨와 함께 실내외 온도를 보여주는 버튼(스크린샷 포함)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> 안타깝게도 저희 동네는 항상 흐리지만, 모든 아이콘은 날씨에 따라 바뀝니다.

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

## 카드 레이아웃

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card는 Home Assistant 섹션 뷰를 완전히 지원합니다. 카드 레이아웃을 변경해 카드를 더 크게 만들 수 있고, 섹션 뷰에서 카드가 차지할 열이나 행의 수도 바꿀 수 있습니다(이 옵션을 지원하는 카드에서만 가능). 이 레이아웃들은 다른 모든 뷰 유형에서도 지원됩니다.

<details>

<summary><b>사용 가능한 카드 레이아웃</b></summary>

| 레이아웃 | 설명 |
| --- | --- |
| `normal` | 일반 레이아웃(섹션 뷰에 최적화되지 않음) |
| `large` | 섹션 뷰에서 선택된 행 크기에 맞춰 크기가 조정되는 더 큰 레이아웃(섹션 뷰에 최적화됨) |
| `large-2-rows` | 서브 버튼이 2행으로 배치되며, 섹션 뷰에서 선택된 행 크기에 맞춰 크기가 조정되는 더 큰 레이아웃(섹션 뷰에 최적화됨) |
| `large-sub-buttons-grid` | 서브 버튼을 그리드 형태로 표시하는 레이아웃, `rows`는 최소 `2`로 설정해야 함

</details>

#### 예시

<details>

<summary>서브 버튼 2행으로 에너지 통계를 보여주는 대형 버튼(스크린샷 포함)</summary>

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

<summary>서브 버튼 12개가 여러 행에 걸쳐 있는 대형 버튼</summary>

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

## 조건

일부 옵션은 조건으로 제어되며, Home Assistant [조건부 카드](https://www.home-assistant.io/dashboards/conditional/)의 조건과 똑같은 방식으로 작성합니다:

- [서브 버튼](#서브-버튼)의 `visibility`, 표시하거나 숨기기 위해
- [팝업](#팝업)의 `trigger`, 조건이 충족될 때 열기 위해
- [템플릿](#템플릿) 안의 `checkConditionsMet(conditions, hass)`, 직접 작성한 코드에서 그 답이 필요할 때

Home Assistant의 모든 조건 유형이 평가됩니다. `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template` 그리고 `and`, `or`, `not` 그룹입니다. Home Assistant 조건 빌더의 조건도 동작합니다. `sun.is_up`, `light.is_on`, `zone.in_zone`, `temperature.is_value`처럼 도메인 이름을 딴 조건들이며, `target`, `options`, `behavior`, `for` 설정도 함께 지원됩니다.

<details>

<summary><b>예시</b></summary>

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
> 조건은 브라우저에서 평가되므로 Home Assistant 서버가 필요한 일부 조건은 정확할 수 없습니다. 일출과 일몰은 다시 계산되지 않고 `sun.sun` 엔티티에서 읽어 오며, `for` 지속 시간은 recorder 기록 없이 마지막 상태 변경 시점부터 측정됩니다.
>
> `view_columns`는 허용되지만 항상 통과합니다. 뷰의 열을 배치하는 것은 Bubble Card가 아니기 때문입니다. Bubble Card가 모르는 조건 유형은 조용히 실패하는 대신 브라우저 콘솔에 한 번 보고되므로, 오타인지 없는 기능인지 구분할 수 있습니다.

<br>

---

<br>

## 탭, 더블 탭, 길게 누르기 동작

이 옵션을 지원하는 카드에서는 Home Assistant의 기본 탭 동작, 더블 탭 동작, 길게 누르기 동작도 사용할 수 있습니다. 예를 들어 버튼 아이콘을 길게 눌러 "더 보기" 창을 표시하거나, 서브 버튼을 눌렀을 때 서비스를 실행할 수 있습니다.

**참고: `double_tap_action`이 설정되어 있으면, 더블 탭을 감지하기 위해 일반 `tap_action`에 200ms의 지연이 생깁니다. 이 지연이 원치 않는다면 `double_tap_action`을 `none`으로 설정해 더블 탭 처리를 비활성화하세요.**

### 동작 옵션

<details>

<summary><b>옵션(YAML과 설명)</b></summary>

| 이름 | 유형 | 지원 옵션 | 설명 |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | 수행할 동작 |
| `target` | object |  | `call-service`에서만 작동. [home-assistant 문법](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices)을 따름 |
| `navigation_path` | string | 대시보드의 임의의 경로 | 동작이 navigate로 정의됐을 때 이동할 경로(예: 팝업을 열기 위한 `'#kitchen'`) |
| `url_path` | string | 임의의 링크 | 동작이 `url`일 때 클릭 시 열릴 URL(예: `https://www.google.com`) |
| `service` | string | 임의의 서비스 | `action`이 `call-service`로 정의됐을 때 호출할 서비스(예: `media_player.media_play_pause`) |
| `data` 또는 `service_data` | object | 임의의 서비스 데이터 | `action`이 `call-service`로 정의됐을 때 포함할 서비스 데이터(예: `entity_id: media_player.kitchen`) |
| `confirmation` | object | [확인](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) 참고 | 확인 팝업을 표시(Bubble Card의 것이 아님), 기본 `confirmation` 객체를 재정의 |

</details>

#### 예시

<details>

<summary>팝업을 여는 버튼</summary>

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


## 스타일링

**card-mod를 사용하지 않고도** 다음 네 가지 방법으로 모든 카드의 CSS를 수정하는 커스텀 스타일을 추가할 수 있습니다.

- 편집기에서 수정하려는 카드로 이동한 다음, _스타일링 옵션 > 커스텀 스타일 및 JS 템플릿_ 으로 이동하여 커스텀 스타일을 추가하세요(아래 팁과 예시를 참고하세요).
- 편집기(또는 [YAML](#모듈))에서 수정하려는 카드로 이동한 다음, _모듈_ 로 이동하여 새 모듈을 만들거나(모든 카드에서 사용할 수 있게 됩니다), **Module Store**로 이동하여 사용 가능한 모듈을 설치하세요(모듈에 대한 자세한 내용은 [아래](#모듈)에서 확인할 수 있습니다).
- [테마](https://www.home-assistant.io/integrations/frontend/#defining-themes) 파일에 YAML로 CSS 변수를 추가합니다(각 카드의 문서 상단에서 사용 가능한 변수를 확인할 수 있습니다). 이 방법은 전역 수정이 가능합니다.

  <details>
  
  <summary>Example</a></summary>
  
  <br>

  `Bubble:` 줄은 복사하지 마세요, 이것은 사용 중인 테마의 이름입니다. 또한 변수에서 `--`를 제거해야 합니다.

  수정을 마친 후에는 테마를 새로고침하기 위해 [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) 액션을 실행해야 합니다.

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
  
- YAML에서 `styles: |` 뒤에 커스텀 스타일을 추가합니다(아래 팁과 예시를 참고하세요).

> [!TIP]  
> **어떤 스타일 클래스를 수정할 수 있는지 알아보려면**, 이 저장소의 [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) 폴더를 살펴보세요. 각 카드 폴더에서 `styles.css`라는 파일을 찾을 수 있습니다. 이 파일들에는 적용된 모든 스타일이 담겨 있습니다. CSS 변수보다 훨씬 더 많은 가능성을 제공하지만, 각 카드마다 개별적으로 추가해야 합니다.
> 
> [커뮤니티의 다양한 예시](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards)나, 조금만 검색해 보면 [Home Assistant 포럼](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/)에서도 몇 가지를 찾을 수 있습니다.
>
> (스크린샷에서 볼 수 있는) Home Assistant용 Bubble 테마는 [여기](https://github.com/Clooos/Bubble)에서 찾을 수 있습니다.
>
> 튜토리얼 영상이 제 [YouTube 채널](https://www.youtube.com/@cloooos)에 곧 공개될 예정입니다!

> [!IMPORTANT]  
> 이미 정의된 CSS 스타일 일부에는 `!important;`를 추가해야 할 수도 있으니 참고하세요(아래 예시 참고).

> [!TIP]  
> 서브 버튼은 이름 기반 클래스로 대상을 지정할 수 있습니다. 예를 들어 "My sub-button"이라는 이름의 서브 버튼은 `.my-sub-button`으로 스타일링할 수 있습니다. 슬라이더 서브 버튼은 `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` 등도 제공합니다.
>
> 이름 기반 클래스는 서브 버튼의 이름을 바꾸면 함께 바뀌고, 이름이 번역되면 클래스도 번역됩니다. 서브 버튼에 `css_class`를 설정하면 이름이나 언어와 무관하게 절대 변하지 않는 나만의 클래스를 얻을 수 있습니다.

#### 예시

<details>

<summary>모든 Bubble Card의 글꼴 크기 변경하기</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>가로 버튼 스택에서 버튼 하나의 배경색 변경하기</summary>

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

<summary>카드의 배경색 변경하기</summary>

<br>

이 방법은 (팝업을 제외한) 모든 Bubble Card 유형에서 작동합니다.

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

이 방법은 버튼 카드에서만 동일한 작업을 수행합니다(팝업 헤더에서도 작동합니다). 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

`on` 상태일 때 색상을 변경하려면 아래 스타일 템플릿을 참고하세요.

</details>

<details>

<summary>버튼 슬라이더의 색상 변경하기</summary>

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

<summary>구분선의 선 색상 변경하기</summary>

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

<summary>아이콘의 색상 변경하기</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

가로 버튼 스택 아이콘의 경우.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>아이콘 컨테이너의 배경색 변경하기</summary>

<br>

이 방법은 (팝업을 제외한) 모든 Bubble Card 유형에서 작동합니다.

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

이 방법은 팝업 헤더에서 동일한 작업을 수행합니다. 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>서브 버튼 크기 변경하기(large 레이아웃에 안성맞춤)</summary>

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

<summary>두 번째 서브 버튼의 배경색 변경하기</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>아이콘 크기 변경하기</summary>

<br>

메인 아이콘의 경우.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

서브 버튼 아이콘의 경우.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>서브 버튼에 아이콘 대신 사진 사용하기</summary>

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

Home Assistant의 "www" 폴더 안에 있는 "pictures" 폴더(원하는 이름으로 만들어도 됩니다)에 이 사진을 업로드하기만 하면 됩니다.

</details>

<details>

<summary>고급 예시: 서브 버튼의 가로 행 만들기(스크린샷 포함)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> 저는 이 방법을 정말 좋아해서 제 대시보드의 헤더로 사용하고 있습니다.

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

## 템플릿

**Bubble Card는 Jinja 템플릿을 지원하지 않지만**, 고급 사용자는 [커스텀 스타일](#스타일링)에 JS로 템플릿을 직접 추가할 수 있습니다. 예를 들어 이를 통해 아이콘, 텍스트, 요소의 색상을 동적으로 변경하거나, 상태나 속성 등을 기반으로 요소(서브 버튼 같은)를 조건부로 표시하거나 숨기는 것 같은 거의 모든 작업이 가능합니다.

> [!TIP]  
> JS 템플릿에 대한 자세한 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)를 참고하세요. 모든 것이 올바르게 작동하는지 확인하기 위해 **항상 브라우저 콘솔을 확인하는 것**을 권장합니다.

> [!IMPORTANT]  
> **CSS 속성을 수정하지 않는 모든 템플릿은 반드시 맨 끝에 배치해야 합니다! 아이콘, 텍스트, 또는 다른 요소를 수정하는 경우처럼 말이죠.**

#### 사용 가능한 변수와 함수

<details>

<summary>변수</summary>

<br>

대부분의 카드에서 다음 변수를 사용할 수 있습니다.

- `state`는 정의한 `entity`의 상태를 반환합니다.
  
- `entity`는 이 예시의 `switch.test`처럼 정의한 엔티티를 반환합니다.
  
- `icon`은 `icon.setAttribute("icon", "mdi:lightbulb")`처럼 아이콘을 변경하는 데 사용할 수 있습니다.

- `subButtonState[0]`은 첫 번째 서브 버튼에 정의된 `entity`의 상태를 반환합니다, `[0]`은 첫 번째 서브 버튼 상태, `[1]`은 두 번째...
  
- `subButtonIcon[0]`은 `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`처럼 첫 번째 서브 버튼 아이콘을 변경하는 데 사용할 수 있습니다, `[0]`은 첫 번째 서브 버튼 아이콘, `[1]`은 두 번째...
  
- `card`는 DOM 내의 카드 요소를 반환합니다.
  
- `hass`는 더 많은 제어를 가능하게 하는 고급 변수입니다, 예를 들어 `hass.states['light.kitchen'].state`처럼 `light.kitchen`의 상태를 반환하거나 `hass.states[entity].attributes.brightness`처럼 속성을 반환할 수 있습니다.

- `this`는 사용자의 설정과 대시보드에 대한 유용한 정보를 많이 반환합니다, 무엇을 하고 있는지 잘 알고 있을 때만 사용하세요.

</details>

<details>

<summary>함수</summary>

<br>

모든 전역 JS 함수를 사용할 수 있으며, 다음도 사용할 수 있습니다.

- `getWeatherIcon`은 날씨를 반환하는 상태를 기반으로 날씨 아이콘을 반환하는 데 사용할 수 있습니다. 예를 들어 세 번째 서브 버튼 아이콘을 오늘의 날씨 아이콘으로 변경하려면 `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`처럼 할 수 있습니다, `.forecast[1]?.condition`은 내일의 날씨입니다...

  이를 위해서는 템플릿 센서를 만들어야 합니다. 다음은 `configuration.yaml`에 추가할 수 있는 내용입니다.
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
- `checkConditionsMet(conditions, hass)`는 [조건](#조건) 목록이 충족되면 `true`를 반환합니다. 예: `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)`는 상태를 번역하는 데 사용할 수 있습니다(수동으로 추가할 필요 없이 상태 단위를 가져오는 데도 사용할 수 있습니다).
- `hass.formatEntityAttributeValue(state, "attribute")`는 속성을 번역하는 데 사용할 수 있습니다(수동으로 추가할 필요 없이 상태 단위를 가져오는 데도 사용할 수 있습니다).

</details>

#### 예시

아래에서 많은 예시를 확인할 수 있지만, 카드 아이콘 주변에 최대 네 개의 조건부 배지를 배치할 수 있는(제가 가장 좋아하는) 예시처럼 아주 고급 템플릿은 제 [Patreon 페이지](https://www.patreon.com/c/Clooos)에서도 찾을 수 있습니다. Bubble Card 커스텀 스타일과 템플릿의 모든 가능성을 배우기에도 아주 좋은 방법입니다!

<details>
<summary>제 Patreon 페이지의 예시</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">모든 카드에 Home Assistant 스타일의 배지 추가하기</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">엔티티 없이 구분선에 포맷된 날짜와 시간 표시하기</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">서브 버튼 상태를 두 줄로 표시하기</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">선택 서브 버튼 내부의 라벨과 아이콘 커스터마이징하기</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">필요할 때만 나타나는 지속적인 리마인더 팝업 추가하기</a>
</p>

<br>

</details>

<details>

<summary><code>off</code>일 때는 빨간색, <code>on</code>일 때는 파란색인 버튼의 배경색 변경하기</summary>

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

<summary>가로 버튼 스택에서 엔티티를 기반으로 버튼의 배경색 변경하기</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>서브 버튼을 조건부로 표시/숨기기</summary>

<br>

이 예시는 청소기가 멈췄을 때만 첫 번째 서브 버튼을 표시합니다.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

이 예시는 배터리가 10% 미만일 때 서브 버튼을 표시합니다. "배터리 부족"을 표시하는 서브 버튼에 유용합니다.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>아이콘이나 서브 버튼 아이콘을 조건부로 변경하기</summary>

<br>

이 예시는 청소기가 멈췄을 때만 버튼 아이콘을 변경합니다.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

이 예시는 청소기가 멈췄을 때만 첫 번째 서브 버튼 아이콘을 변경합니다.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>아이콘이나 서브 버튼 아이콘의 색상을 조건부로 변경하기</summary>

<br>

이 예시는 상태를 기반으로 버튼 아이콘 색상을 변경합니다.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

이 예시는 상태를 기반으로 서브 버튼 아이콘 색상을 변경합니다. `.bubble-sub-button-1`은 첫 번째 서브 버튼입니다, 다른 서브 버튼 아이콘을 변경하려면 `1`을 바꾸세요.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>팬 아이콘을 조건부로 애니메이션하기</summary>

<br>

이 예시는 팬이 `on` 상태일 때 버튼 아이콘을 회전시킵니다.
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

<summary>텍스트 템플릿화(이름이나 상태 등)</summary>

<br>

이 예시는 날씨에 따라 버튼 이름/상태를 "It's currently sunny"로 변경합니다.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
서브 버튼에 적용하는 경우.
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


상태(`.bubble-state`)를 템플릿화하려면 `show_state: true`를 켜지 말고, 속성 없이 `show_attribute: true`만 켜세요.

</details>

<details>

<summary>고급 예시: 팝업이 열려 있을 때 서브 버튼의 색상 변경하기</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>고급 예시: 사용 언어로 번역된 상태를 기반으로 구분선 이름 템플릿화하기</summary>

<br>

`hass.formatEntityState(state)`를 사용하여 상태를 번역하고 `hass.formatEntityAttributeValue(state, "attribute")`를 사용하여 속성을 번역할 수 있습니다.

이 예시는 날씨를 기반으로 이름과 아이콘을 변경합니다, "Nuageux"는 프랑스어로 "Cloudy"를 의미합니다.

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

## 모듈

모듈은 커스텀 스타일과 템플릿을 모든 Bubble Card에서 저장하고, 재사용하고, 공유할 수 있게 해주는 강력한 기능입니다. 같은 코드를 여러 카드에 복사, 붙여넣기 하는 대신, 모듈을 하나 만들어 필요한 곳 어디든 적용할 수 있습니다. 이를 통해 대시보드의 외관과 느낌을 훨씬 더 쉽고 효율적으로 관리할 수 있습니다.

하지만 이 기능은 그보다 훨씬 더 강력해서, 기본 [Home Assistant 폼](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) 옵션을 모두 사용하여 Bubble Card 편집기에서 직접 실제 기능을 추가할 수 있게 해줍니다!  
객체 선택기는 실시간 변경 사항을 표시하고 속성을 올바르게 지원하도록 개선되었습니다.

모듈은 기본 제공 [엔티티 제안](#엔티티-제안) 옆에서 Home Assistant 카드 선택기에 응답할 수도 있습니다. 미리 설명할 수 있는 카드에는 `suggestions`를, 사용자의 설정에서 계산해야 하는 경우에는 `suggestions_code`를 사용하세요. 예를 들어 선택한 엔티티가 속한 영역의 모든 엔티티로 팝업을 만드는 경우입니다. 두 키 모두 [여기](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions)에 문서화되어 있습니다.

**Module Store**를 둘러보고 [커뮤니티가 만든 모듈](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)을 찾아 설치하거나, 직접 만든 창작물을 공유할 수도 있습니다!

> [!TIP]
> 모듈의 코드는 카드의 `styles` 섹션에 있는 코드와 정확히 같은 방식으로 작동합니다. [템플릿](#템플릿) 섹션에 나온 모든 변수와 함수를 동일하게 사용할 수 있습니다.

<br>

### 초기 설정

> [!IMPORTANT]
> v3.1.0부터 Bubble Card Tools가 모듈의 권장 저장 백엔드가 되었습니다. 기존 설정에는 레거시 템플릿 센서 방식도 여전히 작동하지만, 새로운 모듈과 Module Store 기능은 Bubble Card Tools에서 가장 잘 지원됩니다.

Bubble Card Tools 통합은 모듈 편집기와 Module Store를 활성화하며, 모듈을 개별 YAML 파일로 저장합니다. 기존 모듈은 자동으로 마이그레이션됩니다.

설치 및 구성 단계는 여기에 설명되어 있습니다.

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### 모듈 편집기

모듈 편집기는 어떤 카드의 설정에서든 **모듈** 섹션 아래에서 접근할 수 있습니다. 편집기는 두 개의 주요 탭을 제공합니다.

#### My Modules 탭

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

이 탭에는 설치된 모듈이 모두 표시되며, 다음을 할 수 있습니다.

- 기존 모듈을 현재 카드에 **적용**
- 새 모듈을 처음부터 **생성**
- 실시간 미리보기와 함께 기존 모듈을 **편집**
- 더 이상 필요하지 않은 모듈을 **삭제**
- 모듈을 **검색**하고 **정렬**(가나다순, 최근순, 활성 우선)
- 모듈이 모든 카드에 자동으로 적용되도록 **전역 상태 설정**
- 백업이나 공유를 위해 모듈을 **가져오기/내보내기**
- 모듈 편집기의 **선택 사항: 엔티티 제안** 아래에서 **엔티티 제안 작성**하여 모듈이 Home Assistant 카드 선택기에 제안되도록 하기. 규칙과 계산된 제안 모두 작성하는 동안 검사되며, 오류가 있으면 저장할 수 없고, 미리보기에서 원하는 엔티티에 대한 제안 카드를 확인할 수 있습니다

#### Module Store 탭

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

이 탭에는 [커뮤니티에서 제공하는 사용 가능한 모든 모듈](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)이 표시되며, 다음을 할 수 있습니다.

- 커뮤니티가 만든 모듈을 모두 **탐색**
- 이름, 호환성, 키워드로 모듈을 **검색** 및 필터링
- 클릭 한 번으로 모듈을 **설치**
- 새 버전이 있을 때 설치된 모듈을 **업데이트**

> [!TIP]
> 편집기에서 지원되지 않는 모듈을 활성화하여, 특정 카드 유형과 호환된다고 표시되지 않은 모듈을 테스트할 수 있습니다.

<br>

### 모듈 사용 방법

#### 새 모듈 만들기

<details>

<summary>클릭하여 펼치기</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. 카드 편집기로 이동하여 **모듈** 섹션을 펼칩니다.
2. **새 모듈 만들기**를 클릭합니다.
3. 모듈 정보를 입력합니다.
4. **코드** 편집기에 CSS와/또는 JavaScript 템플릿 코드를 작성합니다.
5. (선택 사항) **편집기** 섹션에서 커스텀 구성 UI를 만듭니다(위 스크린샷의 색상 선택기처럼, 전체 문서는 [여기](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)에서 확인할 수 있습니다).
6. (선택 사항) 모듈이 Home Assistant 카드 선택기에 제안되도록 **엔티티 제안**을 작성합니다. 패널은 입력하는 동안 내용을 검사하며, 미리보기에는 원하는 엔티티에 대한 제안 카드 자체가 표시됩니다.
7. **저장**을 클릭합니다.

이제 모듈을 어떤 카드에서든 사용할 수 있습니다!

<br>

</details>

#### 카드에 모듈 적용하기

<details>

<summary>클릭하여 펼치기</summary>

<br>

- **편집기를 통해:**

  - 모듈을 적용하려는 카드의 편집기로 이동합니다.
  - **모듈** 섹션을 펼칩니다.
  - 목록에서 적용하려는 모듈을 클릭합니다.
  - "적용 대상"에서 "이 카드"를 클릭합니다. 이제 모듈이 활성화됩니다. 같은 카드에 여러 모듈을 적용할 수 있습니다.

- **YAML을 통해:**

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

#### 모듈을 전역으로 적용하기

<details>

<summary>클릭하여 펼치기</summary>

<br>

모듈이 모든 Bubble Card에 자동으로 적용되도록 설정할 수 있습니다.

**편집기가 있는 모듈에서는 사용할 수 없습니다, 이러한 모듈은 작동하려면 특정 구성이 필요하기 때문입니다.**

- **편집기를 통해:**

  - 모듈 편집기에서 **My Modules** 탭의 모듈을 찾습니다.
  - 모듈 이름 옆의 **모든 카드** 버튼을 켭니다.
  - 이제 모듈이 모든 카드에 자동으로 적용됩니다.
 
- **YAML을 통해:**

  모듈 YAML 구성(`bubble-modules.yaml` 안)에 `is_global: true`를 추가하기만 하면 됩니다.

<br>

</details>

#### 전역 모듈에서 특정 카드 하나 제외하기

<details>

<summary>클릭하여 펼치기</summary>

<br>

전역 모듈이 있지만 특정 카드에서 제외하고 싶다면 다음과 같이 하세요.

- **편집기를 통해:**
  
  - 카드의 **모듈** 섹션에서 전역 모듈이 나열된 것을 볼 수 있습니다.
  - 전역 모듈을 클릭하고, "이 카드"를 비활성화하여 해당 카드에서 제외합니다.

- **YAML을 통해:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### 모듈을 Module Store에 공유하기

<details>

<summary>클릭하여 펼치기</summary>

<br>

모듈을 Module Store에 공유하려면, 모듈 편집기의 하단 "Export Module"에서 "Copy for GitHub"를 클릭하고, [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) 카테고리의 새 디스커션에 내용을 붙여넣으세요. **설명**(필요한 경우)과 **예시**(YAML 사용자를 위한)를 **수정**하고, Module Store를 위해 **스크린샷을 최소 하나 포함**하는 것을 잊지 마세요.

**모듈은 그 즉시 사용 가능해집니다**(Store가 새로고침된 후), 그러니 모든 것이 올바르게 작성되었는지, 모듈이 예상대로 작동하는지 다시 한번 확인하세요. 물론 공유한 후에도 모듈을 편집/업데이트할 수 있습니다.

<br>

</details>

#### 버전 관리

<details>

<summary>클릭하여 펼치기</summary>

<br>

Module Store는 설치된 모듈의 업데이트를 자동으로 확인합니다. 업데이트가 있으면:

1. **Module Store** 탭에 업데이트 표시가 나타납니다.
2. 업데이트가 있는 모듈에서 **업데이트**를 클릭합니다.
3. Module Store에서 업데이트를 확인합니다.

<br>

</details>

#### 지원되는 카드 유형 정의하기

<details>

<summary>클릭하여 펼치기</summary>

<br>

일부 모듈은 모든 카드 유형과 호환되지 않을 수 있습니다. 모듈이 지원하는 카드를 지정할 수 있습니다.  
모듈이 **모든 카드**와 호환되도록 하려면, `supported` 필드를 생략하기만 하면 됩니다(또는 편집기에서 **모든 카드** 옵션을 사용하세요).

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

### 예시

<details>
<summary>기본 스타일링 모듈</summary>

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
<summary>커스텀 구성이 있는 모듈</summary>

<br>

이 모듈은 [여기](https://github.com/Clooos/Bubble-Card/discussions/1231)에서 확인할 수 있습니다.

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

더 많은 예시는 Module Store에서, 또는 [여기](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)에서 찾을 수 있습니다.

<br>

---

<br>

## 현지화

Bubble Card는 여러분의 언어로 말합니다. 편집기는 Home Assistant가 지원하는 64개 언어로 번역되어 있으며, Home Assistant에 이미 해당하는 용어가 있는 경우에는 그 표현을 그대로 사용하므로 두 인터페이스에서 같은 용어를 보게 됩니다.

편집기 하단의 버전 번호 옆에 있는 **자동** 스위치는 Home Assistant 언어를 따릅니다. 이를 끄면 편집기 전체가 영어로 돌아가며, 튜토리얼을 따라 하거나 이슈를 보고할 때 유용합니다. 선택한 값은 브라우저에 기억됩니다.

이 문서도 [62개 언어로](languages.md) 번역되어 있으며, 영국 영어만 원문을 그대로 보여줍니다. 해당 페이지는 누구에게나 열려 있으므로, 여러분의 Home Assistant와 맞지 않는 표현은 몇 번의 클릭으로 고칠 수 있습니다. 내용 자체의 기준은 영어판입니다.

<br>

---

<br>

## 도움말

예상대로 작동하지 않는 부분이 있다면 언제든지 이슈를 열어 주세요. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card에 대해 궁금한 점이나 의견이 있으신가요? 대시보드나 발견한 내용을 공유하고 싶으신가요? Home Assistant 포럼, Bubble Card 서브레딧, 또는 GitHub Discussions 섹션을 이용해 보세요.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## 기여하기

기여는 언제나 환영합니다! 버그 수정이든, 새로운 기능이든, 번역이든, 문서 개선이든, 편하게 풀 리퀘스트를 열어 주세요.

시작하기 전에, 로컬 환경 설정, 프로젝트 빌드, 변경 사항 테스트 방법을 다루는 [개발자 가이드](DEVELOPERS.md)를 먼저 읽어 주세요.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## 후원하기

저는 이 프로젝트를 최고로 만들기 위해 여가 시간의 대부분을 쏟고 있습니다. 그러니 제 작업이 마음에 드신다면, 어떤 형태의 후원이든 응원을 보여주는 좋은 방법이 될 것입니다 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

응원해 주시는 모든 분들께 감사드립니다, 여러분 모두가 저의 가장 큰 원동력입니다!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
