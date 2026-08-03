<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> このページは自動翻訳されたものです。疑問がある場合は、[英語の原文ドキュメント](../README.md)が優先されます。おかしな文章を見つけましたか？どんなご協力も歓迎です。[このページの修正](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ja.md)は1分で完了します。フォークとプルリクエストはGitHubが自動で行ってくれます。よろしくお願いします！🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[他の言語で読む](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card は、Home Assistant 向けのミニマルでカスタマイズ可能なカードコレクションです。モダンなポップアップと、100 を超えるコミュニティ製モジュールを収録した統合 Module Store を備えています。

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## 目次

**[`インストール`](#インストール)**  **[`設定`](#設定)**  **[`ポップアップ`](#ポップアップ)**  **[`水平ボタンスタック`](#水平ボタンスタック)**  **[`ボタン`](#ボタン)**  **[`メディアプレーヤー`](#メディアプレーヤー)**  **[`カバー`](#カバー)**  **[`セレクト`](#セレクト)**  **[`空調`](#空調)**  **[`カレンダー`](#カレンダー)**  **[`セパレーター`](#セパレーター)**  **[`空の列`](#空の列)**  **[`サブボタンのみ`](#サブボタンのみ)**  **[`サブボタン`](#サブボタン)**  **[`カードレイアウト`](#カードレイアウト)**  **[`アクション`](#タップダブルタップ長押しのアクション)**  **[`スタイル`](#スタイル)**  **[`テンプレート`](#テンプレート)**  **[`モジュール`](#モジュール)**  **[`ヘルプ`](#ヘルプ)**  **[`貢献`](#貢献)**  **[`寄付`](#寄付)**

<br>

## インストール

**Home Assistant の最低サポートバージョン:** 2023.9.0

<details>

<summary>HACS を使わない場合</summary>

<br>

1. このファイルをダウンロードします: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. このファイルを `<config>/www` フォルダーに追加します
3. ダッシュボードの右上のアイコンをクリックし、`Edit dashboard` をクリックします
4. もう一度そのアイコンをクリックし、`Manage resources` をクリックします
5. `Add resource` をクリックします
6. 次の内容をコピーして貼り付けます: `/local/bubble-card.js?v=1`
7. `JavaScript Module` を選択し、`Create` をクリックします
8. 戻ってページを更新します
9. 右下の `Add card` をクリックし、`Bubble Card` を検索します
10. ファイルを更新した際は `/local/bubble-card.js?v=1` を編集し、バージョン番号をより大きな数字に変更してください

うまく動作しない場合は、ブラウザのキャッシュをクリアしてみてください。

</details>

<details>

<summary>HACS を使う場合 (推奨)</summary>

<br>

この方法では、Home Assistant Community Store から直接アップデートを受け取れます

1. HACS がまだインストールされていない場合は、[https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) の手順に従ってダウンロードしてください
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) の手順に従って HACS の初期設定を行ってください
3. サイドバーから「HACS」を開きます
4. 「Bubble Card」を検索するか、下の青いボタンをクリックします
5. 「Download」をクリックします
6. ダッシュボードに戻り、右上のアイコンをクリックして `Edit dashboard` をクリックします
7. 右下の `Add card` をクリックし、`Bubble Card` を検索します

うまく動作しない場合は、ブラウザ/アプリのキャッシュをクリアしてみてください (必要であればすべてのデバイスで)。

#### 動画

ステップバイステップの動画を私の YouTube チャンネルでも確認できます。

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## 設定

すべてのオプションは Home Assistant のエディターで設定できます。ただし、詳細と YAML については以下のドキュメントを参照してください。

<details>

<summary><b>主なオプション (YAML と説明)</b></summary>

| 名前 | 型 | 必須 | サポートされているオプション | 説明 |
| --- | --- | --- | --- | --- |
| `type` | string | **必須** | `custom:bubble-card` | カードの種類 |
| `card_type` | string | **必須** | `button`、`calendar`、`climate`、`cover`、`empty-column`、`horizontal-buttons-stack`、`media-player`、`pop-up`、`select`、`separator` または `sub-buttons` | Bubble Card の種類、詳細は以下を参照 |
| `styles` | object list | 任意 | 任意の CSS スタイルシート | Bubble Card の CSS をカスタマイズできます、[スタイル](#スタイル)を参照 |

</details>

<details>

<summary><b>グローバル CSS 変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | サポートされているすべての要素の角丸半径 |
| `--bubble-main-background-color` | `color` | サポートされているすべての要素のメイン背景色 |
| `--bubble-secondary-background-color` | `color` | サポートされているすべての要素のセカンダリ背景色 |
| `--bubble-accent-color` | `color` | サポートされているすべての要素のアクセントカラー |
| `--bubble-icon-border-radius` | `px` | サポートされているすべての要素のアイコンの角丸半径 |
| `--bubble-icon-background-color` | `color` | サポートされているすべての要素のアイコンの背景色 |
| `--bubble-sub-button-border-radius` | `px` | すべてのサブボタンの角丸半径 |
| `--bubble-sub-button-background-color` | `color` | すべてのサブボタンの背景色 |
| `--bubble-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) を参照 | サポートされているすべての要素のボックスシャドウ |
| `--bubble-border` | [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) を参照 | サポートされているすべてのカードのボーダー |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card とその機能について知りたい方は、こちらの[動画](https://www.youtube.com/watch?v=0hSQOlBxKKI)をご覧ください。** 私の YouTube チャンネルはまだ新しく、Home Assistant と Bubble Card のチュートリアルを中心に扱っています。チャンネルの認知度を上げる助けになりますので、ぜひ登録をお願いします。よろしくお願いします!

<br>

---

<br>

## ポップアップ

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

このカードを使うと、任意のコンテンツを含むポップアップを作成できます。各ポップアップは**デフォルトで非表示**になっており、そのリンクを対象にする (例: `'#pop-up-name'`)、`navigate` [アクション](#タップダブルタップ長押しのアクション)に対応した任意のカードを使う、または同梱の[水平ボタンスタック](#水平ボタンスタック)を使うことで開くことができます。

> [!TIP]
> ### ポップアップトリガー 
> この機能を使うと、任意のエンティティの状態に基づいてポップアップを開くことができます。例えば、家の前に人がいるときにカメラを含む「セキュリティ」ポップアップを開く、といった使い方ができます。トグルヘルパー (input_boolean) を作成し、オートメーションでその開閉をトリガーすることもできます。
> <details>
> <summary><code>binary_sensor</code> が <code>on</code> になったときにポップアップを開く</summary>
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
> ### ポップアップを閉じるさまざまな方法 
> ポップアップを閉じる方法はたくさんあります。例えば、ポップアップのヘッダーから下方向にスワイプする、ポップアップ内で下方向に長くスワイプする、デスクトップで Escape キーを押す、URL のハッシュを削除する、あるいは単純に閉じるボタンを押す、といった方法があります。
>


### ポップアップのオプション

<details>

<summary><b>オプション (YAML と説明)</b></summary>

| 名前 | 型 | 必須 | サポートされているオプション | 説明 |
| --- | --- | --- | --- | --- |
| `hash` | string | **必須** | ' ' を含む任意の一意なハッシュ (例: `'#kitchen'`) | ポップアップを開くために使われます |
| `popup_style` | string | 任意 | `bubble` (デフォルト) または `classic` | ポップアップの見た目のスタイルを定義します |
| `popup_mode` | string | 任意 | `default` (デフォルト)、`fit-content`、`centered` または `adaptive-dialog` | ポップアップのレイアウトモードを定義します |
| `with_bottom_offset` | boolean | 任意 | `true` または `false` (デフォルト) | `popup_mode: fit-content` または `adaptive-dialog` の場合のみ使用されます。モバイルで下部オフセットを適用します。ダッシュボードにフッターカードが含まれている場合に便利です。 |
| `full_width_on_mobile` | boolean | 任意 | `true` または `false` (デフォルト) | `popup_mode: centered` の場合のみ使用されます。モバイルでポップアップを画面幅いっぱいに広げます。小さいディスプレイで便利です。 |
| `performance_mode` | string | 任意 | `default` (デフォルト) または `performance` | ポップアップを開くアニメーションを最適化します。`performance` はコンテンツの描画と背景のぼかしをわずかに遅らせ、設定されている場合はバックドロップのぼかしも無効にします。 |
| `auto_close` | string | 任意 | ミリ秒単位のタイムアウト (例: 10秒なら `10000`) | タイムアウト後にポップアップを自動的に閉じます |
| `close_on_click` | boolean | 任意 | `true` または `false` (デフォルト) | 何らかの操作の後にポップアップを自動的に閉じます |
| `close_by_clicking_outside` | boolean | 任意 | `true` (デフォルト) または `false` | ポップアップの外側をクリックして閉じます |
| `width_desktop` | string | 任意 | 任意の CSS 値 | デスクトップでの幅 (モバイルではデフォルトで `100%`) |
| `margin` | string | 任意 | 任意の CSS 値 | ポップアップがモバイルでうまく中央揃えにならない場合に**限り**使用してください (例: `13px`) |
| `margin_top_mobile` | string | 任意 | 任意の CSS 値 | モバイルでの上部マージン (ヘッダーが非表示の場合は例えば `-56px`) |
| `margin_top_desktop` | string | 任意 | 任意の CSS 値 | デスクトップでの上部マージン (半分の高さのポップアップなら例えば `50vh`、`400px` の固定高さなら `calc(100vh - 400px)`) |
| `bg_color` | string | 任意 | 任意の hex、rgb または rgba 値 | ポップアップの背景色です (例: 白い背景なら `#ffffff`) |
| `bg_opacity` | string | 任意 | `0` から `100` までの任意の値 | ポップアップの背景の不透明度です (例: 透明度なしなら `100`) |
| `bg_blur` | string | 任意 | `0` から `100` までの任意の値 | ポップアップの背景のぼかし効果です。**これは `bg_opacity` が `100` に設定されていない場合のみ有効です** (例: ぼかしなしなら `0`) |
| `shadow_opacity` | string | 任意 | `0` から `100` までの任意の値 | ポップアップの影の不透明度です (例: 非表示にするなら `0`) |
| `hide_backdrop` | boolean | 任意 | `true` または `false` (デフォルト) | メインダッシュボードの最初のポップアップでこれを true に設定すると、すべてのポップアップのバックドロップを無効にできます。 |
| `background_update` | boolean | 任意 | `true` または `false` (デフォルト) | ポップアップのコンテンツをバックグラウンドで更新します (非推奨) |
| `trigger_entity` | string | 任意 | 任意のエンティティ | 任意のエンティティの状態に基づいてこのポップアップを開きます |
| `trigger_state` | string | 任意 (`trigger_entity` が定義されている場合は**必須**) | 任意のエンティティの状態 | ポップアップを開くためのエンティティの状態 |
| `trigger_close` | boolean | 任意 | `true` または `false` (デフォルト) | `trigger_state` と異なる場合にポップアップを閉じます |
| `open_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | ポップアップが開くときにアクションをトリガーします |
| `close_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | ポップアップが閉じるときにアクションをトリガーします |
| `show_header` | boolean | 任意 | `true` (デフォルト) または `false` | ポップアップのヘッダー全体を表示/非表示にします |
| `show_previous_button` | boolean | 任意 | `true` または `false` (デフォルト) | 閉じるボタンの隣に戻るボタンを表示し、利用可能な場合は前のポップアップに戻ります |
| `show_close_button` | boolean | 任意 | `true` (デフォルト) または `false` | ヘッダーの他の部分は表示したまま、閉じるボタンを表示または非表示にします |
| `buttons_position` | string | 任意 | `right` (デフォルト) または `left` | ヘッダー内の閉じるボタンと戻るボタンの位置 |
| `cards` | list | 任意 | 任意の Bubble Card、Home Assistant カードまたはカスタムカード | ポップアップのコンテンツを定義します。以下のポップアップの例を参照してください。 |
| ポップアップのヘッダーには[すべてのボタンの設定](#ボタン)も使用できます。 | | 任意 | | 未定義の場合、ヘッダーは表示されません |

</details>

<details>

<summary><b>CSS 変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | ポップアップの角丸半径 |
| `--bubble-pop-up-main-background-color` | `color` | ポップアップのサポートされている要素のメイン背景色 |
| `--bubble-pop-up-background-color` | `color` | ポップアップの背景色 |
| `--bubble-backdrop-background-color` | `color` | バックドロップの背景色 |
| ポップアップのヘッダーには[すべてのボタンの CSS 変数](#ボタンのオプション)も使用できます。 | | |

</details>


### スタンドアロンポップアップ形式 (v3.2.0+)

v3.2.0 以降、ポップアップは新しいスタンドアロン形式を使用します。この形式では `cards` オプションを使ってコンテンツカードをポップアップ内に直接定義します。これにより、パフォーマンスが向上し、セクションベースのドラッグ&ドロップ編集体験が新たに得られます。


#### 例

<details>

<summary>ポップアップ (スタンドアロン形式)</summary>

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

<summary>ポップアップを開くためのボタン</summary>

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

## 水平ボタンスタック

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

このカードはポップアップカードと相性が良く、対応するポップアップを開くことができます。また、ダッシュボードの任意のページを開くこともできます。さらに、モーション/在室センサーを追加することで、直前に入った部屋に応じてボタンの順序が自動的に変わるようにできます。このカードはスクロール可能で常に表示され続け、フッターのような役割を果たします。

> [!IMPORTANT]  
> このカードはビュー内で最後のカード（すべてのカードとポップアップの後）にする必要があります。どのスタックの中にも入れることはできません。

### 水平ボタンスタックのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | タイプ | 必須 | サポートされているオプション | 説明 |
| --- | --- | --- | --- | --- |
| `1_link` | string | **必須** | ポップアップのハッシュ（例：`'#kitchen'`）を `' '` で囲んだもの、または任意のリンク | 開くリンク |
| `1_name` | string | 任意 | 任意の文字列 | ボタンの名前 |
| `1_icon` | string | 任意 | 任意の `mdi:` アイコン | ボタンのアイコン |
| `1_entity` | string | 任意 | 任意の照明または照明グループ | その照明の色を背景に表示 |
| `1_pir_sensor` | string | 任意 | 任意のバイナリセンサー | `auto_order` を使うには最低1つ以上のPIRセンサーが必要ですが、実際には任意のエンティティタイプでも動作します。例えば照明グループを追加すれば、最終変更状態に応じて順序が変わります。 |
| `auto_order` | boolean | 任意 | `true` または `false`（デフォルト） | `_pir_sensor` の最終変更時刻に応じてボタンの順序を変更します。**コード内に `_pir_sensor` が1つもない場合は `false` にする必要があります** |
| `margin` | string | 任意 | 任意のCSS値 | `horizontal-buttons-stack` がモバイルでうまく中央揃えされない場合に**限り**使用してください（例：`13px`） |
| `width_desktop` | string | 任意 | 任意のCSS値 | デスクトップでの幅（モバイルではデフォルトで `100%`） |
| `is_sidebar_hidden` | boolean | 任意 | `true` または `false`（デフォルト） | デスクトップでサイドバーを非表示にしている場合に、水平ボタンスタックの位置を修正します（自分でサイドバーを非表示にする変更を行った場合のみ） |
| `rise_animation` | boolean | 任意 | `true`（デフォルト） または `false` | ページの読み込み完了時に発動するアニメーションを無効にするには `false` に設定します |
| `highlight_current_view` | boolean | 任意 | `true` または `false`（デフォルト） | 現在のハッシュ/ビューをスムーズなアニメーションでハイライト表示 |
| `hide_gradient` | boolean | 任意 | `true` または `false`（デフォルト） | グラデーションを非表示にするには `false` に設定します |

> [!IMPORTANT]  
> 数字で始まる変数はボタンを定義します。ボタンを追加するには、この数字を変更するだけです（下記の例を参照）。

</details>

<details>

<summary><b>CSS変数（<a href="#スタイル">スタイル</a>を参照）</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | 水平ボタンスタックボタンの角丸半径 |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | 水平ボタンスタックボタンの背景色 |

</details>


#### 例

<details>

<summary>在室センサーに基づいて自身を再編成する水平ボタンスタック</summary>

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

## ボタン

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

このカードは非常に汎用性が高く、**スイッチ**、**スライダー**、**状態**、**名前/テキスト**ボタンとして使用できます。

> [!TIP]
> ### すべてのボタンタイプの違いは何ですか？
>
> - **スイッチボタン：** これはデフォルトのボタンタイプです。デフォルトではエンティティを切り替え、背景色はエンティティの状態または照明の色に応じて変化します。アクションは**カードのタップアクション**セクションで変更できます。
>
> - **スライダーボタン：** このボタンタイプでは、調整可能な範囲を持つエンティティを操作できます。照明の調光に最適で、塗りつぶしの色は照明の色に合わせて変化します。バッテリー残量などの値の表示にも使用できます。
>   スライダーに対応しているエンティティ：
>   - 照明（明るさ）
>   - メディアプレーヤー（音量）
>   - カバー（位置）
>   - ファン（パーセンテージ）
>   - 空調（温度）
>   - Input number と Number（値）
>   - バッテリーセンサー（パーセンテージ、読み取り専用）
>
>   また、**スライダー設定**でエンティティフィルターを無効にし、`min` と `max` の値を設定すれば、数値の状態を持つ任意のエンティティも使用できます。このオプションは読み取り専用です。
>
> - **状態ボタン：** センサーなど、任意のエンティティの情報を表示するのに最適です。押すと、そのエンティティの「詳細情報」パネルが表示されます。背景色は変化しません。
>
> - **名前/テキストボタン：** エンティティを必要としない唯一のボタンタイプです。短いテキスト、名前、タイトルを表示できます。アクションを追加することもできます。背景色は変化しません。

### ボタンのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | タイプ | 必須 | サポートされているオプション | 説明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必須** | 任意のエンティティ | 操作するエンティティ |
| `button_type` | string | 任意 | `switch`（デフォルト）、`slider`、`state`、`name` | ボタンの動作 |
| `name` | string | 任意 | 任意の文字列 | ボタンの名前。未指定の場合はエンティティ名を表示します |
| `icon` | string | 任意 | 任意の `mdi:` アイコン | ボタンのアイコン。未指定の場合はエンティティのアイコンまたは `entity-picture` を表示します |
| `force_icon` | boolean | 任意 | `true` または `false`（デフォルト） | `entity-picture` の代わりにアイコンを優先します |
| `use_accent_color` | boolean | 任意（デフォルト `false`） | **照明専用。** 照明の色の代わりにテーマのアクセントカラーを使用します。                         |
| `show_state` | boolean | 任意 | `true` または `false`（デフォルト） | `entity` の状態を表示または非表示 |
| `show_name` | boolean | 任意 | `true`（デフォルト） または `false` | 名前を表示または非表示 |
| `show_icon` | boolean | 任意 | `true`（デフォルト） または `false` | アイコンを表示または非表示 |
| `show_last_changed` | boolean | 任意 | `true` または `false`（デフォルト） | `entity` の最終変更時刻を表示 |
| `show_last_updated` | boolean | 任意 | `true` または `false`（デフォルト） | `entity` の最終更新時刻を表示 |
| `show_attribute` | boolean | 任意 | `true` または `false`（デフォルト） | `name` の下に `entity` の属性を表示 |
| `attribute` | string | 任意（`show_attribute` が `true` の場合は必須） | `entity` の属性 | 表示する属性（例：`brightness`） |
| `scrolling_effect` | boolean | 任意 | `true`（デフォルト） または `false` | コンテンツがコンテナのサイズを超えた場合にテキストをスクロールさせる |
| `button_action` | object | 任意 | `tap_action`、`double_tap_action`、`hold_action`（下記参照） | ボタンクリック時のデフォルトアクションを変更できます。 |
| `tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンクリック時のアクションの種類を定義。未定義の場合は `more-info` が使用されます |
| `double_tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンダブルクリック時のアクションの種類を定義。未定義の場合は `none` が使用されます |
| `hold_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコン長押し時のアクションの種類を定義。未定義の場合は `more-info` が使用されます |
| `card_layout` | string | 任意 | `normal`（セクションビュー以外でのデフォルト）、`large`（セクションビューでのデフォルト）、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト。[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数（高さ）（例：`2`） |
| `sub_button` | object | 任意 | [サブボタン](#サブボタン)を参照 | 右側に固定されたカスタムボタンを追加 |

</details>

<details>

<summary><b>CSS変数（<a href="#スタイル">スタイル</a>を参照）</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | ボタン内のサポートされている要素のメイン背景色 |
| `--bubble-button-border-radius` | `px` | ボタンの角丸半径 |
| `--bubble-button-icon-border-radius` | `px` | ボタンアイコンコンテナの角丸半径 |
| `--bubble-button-icon-background-color` | `color` | ボタンアイコンコンテナの背景色 |
| `--bubble-light-white-color` | `color` | 照明ボタン/スライダーのデフォルトの白色を置き換え |
| `--bubble-light-color` | `color` | 照明ボタン/スライダーの色を置き換え（RGB照明にも対応） |
| `--bubble-button-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow)を参照 | ボタンのボックスシャドウ |

</details>

これらのオプションは `button_type` が `slider` に設定されている場合にのみ使用できます。

<details>

<summary><b>スライダーのオプション (YAML + 説明)</b></summary>

| 名前                  | タイプ    | 必須                     | 説明                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | 任意                        | スライダーの最小値。カスタムスライダー用。                                                    |
| `max_value`             | number  | 任意                        | スライダーの最大値。カスタムスライダー用。                                                    |
| `step`                  | number  | 任意                        | スライダーのステップ値。                                                                           |
| `tap_to_slide`          | boolean | 任意（デフォルト `false`）      | 保持する代わりにタップしてスライダーを有効化する、以前のスライダー動作を有効にします。        |
| `relative_slide`        | boolean | 任意（デフォルト `false` ）     | タップした位置ではなく、開始時の値を基準に値を更新します。                                      |
| `read_only_slider`      | boolean | 任意（デフォルト `false`）      | スライダーを読み取り専用にします。センサーなど一部のエンティティでは自動的に有効になります。                        |
| `slider_live_update`    | boolean | 任意（デフォルト `false`）      | スライド中にエンティティの状態が更新されます。**この機能はすべてのエンティティに推奨されるわけではありません。**        |
| `slider_fill_orientation` | string | 任意 | `left`（デフォルト）、`right`、`top`、`bottom` | スライダーの塗りつぶし方向を変更 |
| `slider_value_position` | string | 任意 | `right`（デフォルト）、`left`、`center`、`hidden` | 値表示の位置 |
| `invert_slider_value` | boolean | 任意（デフォルト `false`） | スライダーの方向を反転します（塗りつぶし100%が最小値になります）。カラースライダーでは使用できません。 |
| `light_slider_type` | string | 任意 | `brightness`（デフォルト）、`hue`、`saturation`、`white_temp` | **照明専用。** スライダーモードを選択 |
| `cover_slider_type` | string | 任意 | `position`（デフォルト）、`tilt_position` | **カバー専用。** スライダーモード（位置またはチルト）を選択 |
| `hue_force_saturation` | boolean | 任意（デフォルト `false`） | **照明専用（Hueモード）。** Hue調整時に彩度を強制します |
| `hue_force_saturation_value` | number | 任意（デフォルト `100`） | **照明専用（Hueモード）。** 強制する彩度の値（0～100） |
| `use_accent_color` | boolean | 任意（デフォルト `false`） | **照明専用（明るさモード）。** 照明の色の代わりにテーマのアクセントカラーを使用 |
| `allow_light_slider_to_0` | boolean | 任意（デフォルト `false`）    | **照明専用。** スライダーが0%に到達できるようにし、照明をオフにします。`tap_to_slide` とは併用できません。 |
| `light_transition`      | boolean | 任意（デフォルト `false`）      | **照明専用。** 対応する照明のスムーズな明るさトランジションを有効にします。                           |
| `light_transition_time` | number  | 任意（デフォルト `500`）        | **照明専用。** トランジション時間（ミリ秒）。`light_transition: true` が必要です。            |

</details>

#### 例

<details>

<summary>照明の明るさを制御できるスライダーボタン</summary>

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

<summary>より多くのオプションを持つボタン</summary>

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

## メディアプレーヤー

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

このカードでは、メディアプレーヤーエンティティを操作できます。

### メディアプレーヤーのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | タイプ | 必須 | サポートされているオプション | 説明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必須** | 任意のメディアプレーヤー | 操作するメディアプレーヤー |
| `name` | string | 任意 | 任意の文字列 | メディアプレーヤーの名前。未指定の場合はエンティティ名を表示します |
| `icon` | string | 任意 | 任意の `mdi:` アイコン | メディアプレーヤーのアイコン。未指定の場合はエンティティのアイコンまたは `entity-picture` を表示します |
| `force_icon` | boolean | 任意 | `true` または `false`（デフォルト） | `entity-picture` の代わりにアイコンを優先します |
| `show_state` | boolean | 任意 | `true` または `false`（デフォルト） | `entity` の状態を表示または非表示 |
| `show_name` | boolean | 任意 | `true`（デフォルト） または `false` | 名前を表示または非表示 |
| `show_icon` | boolean | 任意 | `true`（デフォルト） または `false` | アイコンを表示または非表示 |
| `show_last_changed` | boolean | 任意 | `true` または `false`（デフォルト） | `entity` の最終変更時刻を表示 |
| `show_last_updated` | boolean | 任意 | `true` または `false`（デフォルト） | `entity` の最終更新時刻を表示 |
| `show_attribute` | boolean | 任意 | `true` または `false`（デフォルト） | `name` の下に `entity` の属性を表示 |
| `attribute` | string | 任意（`show_attribute` が `true` の場合は必須） | `entity` の属性 | 表示する属性（例：`brightness`） |
| `scrolling_effect` | boolean | 任意 | `true`（デフォルト） または `false` | コンテンツがコンテナのサイズを超えた場合にテキストをスクロールさせる |
| `min_volume` | number | 任意 | 任意の数値 | 音量スライダーの最小値。 |
| `max_volume` | number | 任意 | 任意の数値 | 音量スライダーの最大値。 |
| `cover_background` | boolean | 任意 | `true` または `false`（デフォルト） | ぼかしたメディアカバーをカードの背景として使用します。 |
| `button_action` | object | 任意 | `tap_action`、`double_tap_action`、`hold_action`。[アクション](#タップダブルタップ長押しのアクション)を参照 | ボタンクリック時のデフォルトアクションを変更できます。 |
| `tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンクリック時のアクションの種類を定義。未定義の場合は `more-info` が使用されます。 |
| `double_tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンダブルクリック時のアクションの種類を定義。未定義の場合は `none` が使用されます。 |
| `hold_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコン長押し時のアクションの種類を定義。未定義の場合は `more-info` が使用されます。 |
| `main_buttons_position` | string | 任意 | `default` または `bottom` | カバーのアクションボタンを下部（固定）に移動 |
| `main_buttons_full_width` | boolean | 任意 | `true` または `false` | 下部のアクションボタンを全幅にする（デフォルト：位置が `bottom` の場合は `true`） |
| `main_buttons_alignment` | string | 任意 | `end`（デフォルト）、`center`、`start`、`space-between` | 全幅でない場合の下部アクションボタンの配置 |
| `card_layout` | string | 任意 | `normal`（セクションビュー以外でのデフォルト）、`large`（セクションビューでのデフォルト）、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト。[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数（高さ）（例：`2`） |
| `sub_button` | object | 任意 | [サブボタン](#サブボタン)を参照 | 右側に固定されたカスタムボタンを追加 |
| `hide` | object | 任意 | 下記参照 | カードのボタンを非表示 |

#### 非表示オプション

| 名前 | タイプ | 必須 | サポートされているオプション | 説明 |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | 任意 | `true` または `false`（デフォルト） | 再生/一時停止ボタンを非表示 |
| `volume_button` | boolean | 任意 | `true` または `false`（デフォルト） | 音量ボタンを非表示 |
| `previous_button` | boolean | 任意 | `true` または `false`（デフォルト） | 前へボタンを非表示 |
| `next_button` | boolean | 任意 | `true` または `false`（デフォルト） | 次へボタンを非表示 |
| `power_button` | boolean | 任意 | `true` または `false`（デフォルト） | 電源ボタンを非表示 |

</details>

<details>

<summary><b>CSS変数（<a href="#スタイル">スタイル</a>を参照）</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | メディアプレーヤーのメイン背景色 |
| `--bubble-media-player-border-radius` | `px` | メディアプレーヤーの角丸半径 |
| `--bubble-media-player-buttons-border-radius` | `px` | メディアプレーヤーボタンの角丸半径 |
| `--bubble-media-player-slider-background-color` | `color` | 音量スライダーの背景色 |
| `--bubble-media-player-icon-border-radius` | `px` | メディアプレーヤーアイコンコンテナの角丸半径 |
| `--bubble-media-player-icon-background-color` | `color` | メディアプレーヤーアイコンコンテナの背景色 |
| `--bubble-media-player-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow)を参照 | メディアプレーヤーのボックスシャドウ |

</details>


#### 例

<details>

<summary>すべてのオプションを備えたメディアプレーヤー</summary>

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

## カバー

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

このカードは`cover`エンティティを操作できます。

### カバーのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | 型 | 必須 | 対応するオプション | 説明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必須** | 任意のカバー | 制御するカバー |
| `name` | string | 任意 | 任意の文字列 | カバーの名前。指定しない場合はエンティティ名が表示されます |
| `force_icon` | boolean | 任意 | `true` または `false` (デフォルト) | `entity-picture`よりアイコンを優先します |
| `show_state` | boolean | 任意 | `true` または `false` (デフォルト) | `entity`の状態を表示または非表示にします |
| `show_name` | boolean | 任意 | `true` (デフォルト) または `false` | 名前を表示または非表示にします |
| `show_icon` | boolean | 任意 | `true` (デフォルト) または `false` | アイコンを表示または非表示にします |
| `show_last_changed` | boolean | 任意 | `true` または `false` (デフォルト) | `entity`の最終変更時刻を表示します |
| `show_last_updated` | boolean | 任意 | `true` または `false` (デフォルト) | `entity`の最終更新時刻を表示します |
| `show_attribute` | boolean | 任意 | `true` または `false` (デフォルト) | `name`の下に`entity`の属性を表示します |
| `attribute` | string | 任意 (`show_attribute`が`true`の場合は必須) | `entity`の属性 | 表示する属性 (例: `brightness`) |
| `scrolling_effect` | boolean | 任意 | `true` (デフォルト) または `false` | コンテンツがコンテナのサイズを超えたときにテキストをスクロールさせます |
| `icon_open` | string | 任意 | 任意の`mdi:`アイコン | 開いた状態のカバー用アイコン。指定しない場合はデフォルトの開いたカバーアイコンが表示されます |
| `icon_close` | string | 任意 | 任意の`mdi:`アイコン | 閉じた状態のカバー用アイコン。指定しない場合はデフォルトの閉じたカバーアイコンが表示されます |
| `icon_up` | string | 任意 | 任意の`mdi:`アイコン | カバーを開くボタン用アイコン。指定しない場合はデフォルトの開くアイコンが表示されます |
| `icon_down` | string | 任意 | 任意の`mdi:`アイコン | カバーを閉じるボタン用アイコン。指定しない場合はデフォルトの閉じるアイコンが表示されます |
| `open_service` | string | 任意 | 任意のサービスまたはスクリプト | カバーを開くサービス。デフォルトは`cover.open_cover`です |
| `stop_service` | string | 任意 | 任意のサービスまたはスクリプト | カバーを停止するサービス。デフォルトは`cover.stop_cover`です |
| `close_service` | string | 任意 | 任意のサービスまたはスクリプト | カバーを閉じるサービス。デフォルトは`cover.close_cover`です |
| `tilt_buttons` | string | 任意 | `top` (デフォルト)、`bottom`、`left`、`right`、`hidden` | チルトコントロールボタンの位置 (カバーがチルトに対応している場合のみ表示) |
| `open_tilt_service` | string | 任意 | 任意のサービスまたはスクリプト | チルトを開くサービス。デフォルトは`cover.open_cover_tilt`です |

| `close_tilt_service` | string | 任意 | 任意のサービスまたはスクリプト | チルトを閉じるサービス。デフォルトは`cover.close_cover_tilt`です |
| `button_action` | object | 任意 | `tap_action`、`double_tap_action`または`hold_action`。[アクション](#タップダブルタップ長押しのアクション)を参照 | ボタンクリック時のデフォルトアクションを変更できます。 |
| `tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンクリック時のアクションタイプを定義します。未定義の場合は`more-info`が使用されます。 |
| `double_tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンをダブルクリックしたときのアクションタイプを定義します。未定義の場合は`none`が使用されます。 |
| `hold_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンを長押ししたときのアクションタイプを定義します。未定義の場合は`more-info`が使用されます。 |
| `main_buttons_position` | string | 任意 | `default` または `bottom` | メディアコントロールを下部に固定表示します |
| `main_buttons_full_width` | boolean | 任意 | `true` または `false` | 下部コントロールを全幅にします (デフォルト: 位置が`bottom`のとき`true`) |
| `main_buttons_alignment` | string | 任意 | `end` (デフォルト)、`center`、`start`、`space-between` | 全幅でないときの下部コントロールの整列 |
| `card_layout` | string | 任意 | `normal` (セクションビューでない場合のデフォルト)、`large` (セクションビューの場合のデフォルト)、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト。[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数 (高さ) (例: `2`) |
| `sub_button` | object | 任意 | [サブボタン](#サブボタン)を参照 | 右側に固定されたカスタムボタンを追加します |

</details>

<details>

<summary><b>CSS変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | カバーカード内の対応する要素のメイン背景色 |
| `--bubble-cover-border-radius` | `px` | カバーカードの角丸 |
| `--bubble-cover-icon-border-radius` | `px` | カバーカードのアイコンコンテナの角丸 |
| `--bubble-cover-icon-background-color` | `color` | カバーカードのアイコンコンテナの背景色 |
| `--bubble-cover-box-shadow` | [ボックスシャドウ](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow)を参照 | カバーカードのボックスシャドウ |
| `--bubble-button-box-shadow` | [ボックスシャドウ](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow)を参照 | カバーカード内のボタンのボックスシャドウ |

</details>


#### 例

<details>

<summary>ロールシェードを制御できるカード</summary>

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

## セレクト

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

このカードは`input_select` / `select`エンティティ用のドロップダウンメニューを追加できます。このカードはサブボタンと、Bubble Cardの共通機能すべてにも対応しています。

> [!TIP]
> セレクトのサブボタンも利用できます。この機能はサブボタンに対応しているすべてのカードで使用できます。

### セレクトのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | 型 | 必須 | 対応するオプション | 説明 |
| --- | --- | --- | --- | --- |
| `entity` | string | **必須** | 任意のエンティティ | 制御するエンティティ |
| `name` | string | 任意 | 任意の文字列 | セレクトの名前。指定しない場合はエンティティ名が表示されます |
| `icon` | string | 任意 | 任意の`mdi:`アイコン | セレクトのアイコン。指定しない場合はエンティティのアイコンまたは`entity-picture`が表示されます |
| `force_icon` | boolean | 任意 | `true` または `false` (デフォルト) | `entity-picture`よりアイコンを優先します |
| `show_state` | boolean | 任意 | `true` または `false` (デフォルト) | `entity`の状態を表示または非表示にします |
| `show_name` | boolean | 任意 | `true` (デフォルト) または `false` | 名前を表示または非表示にします |
| `show_icon` | boolean | 任意 | `true` (デフォルト) または `false` | アイコンを表示または非表示にします |
| `show_last_changed` | boolean | 任意 | `true` または `false` (デフォルト) | `entity`の最終変更時刻を表示します |
| `show_last_updated` | boolean | 任意 | `true` または `false` (デフォルト) | `entity`の最終更新時刻を表示します |
| `show_attribute` | boolean | 任意 | `true` または `false` (デフォルト) | `name`の下に`entity`の属性を表示します |
| `attribute` | string | 任意 (`show_attribute`が`true`の場合は必須) | `entity`の属性 | 表示する属性 (例: `brightness`) |
| `scrolling_effect` | boolean | 任意 | `true` (デフォルト) または `false` | コンテンツがコンテナのサイズを超えたときにテキストをスクロールさせます |
| `tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンクリック時のアクションタイプを定義します。未定義の場合は`more-info`が使用されます。 |
| `double_tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンをダブルクリックしたときのアクションタイプを定義します。未定義の場合は`none`が使用されます。 |
| `hold_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンを長押ししたときのアクションタイプを定義します。未定義の場合は`more-info`が使用されます。 |
| `card_layout` | string | 任意 | `normal` (セクションビューでない場合のデフォルト)、`large` (セクションビューの場合のデフォルト)、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト。[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数 (高さ) (例: `2`) |
| `sub_button` | object | 任意 | [サブボタン](#サブボタン)を参照 | 右側に固定されたカスタムボタンを追加します |

</details>

<details>

<summary><b>CSS変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | セレクトカード内の対応する要素のメイン背景色 |
| `--bubble-select-background-color` | `color` | セレクトカードの背景色 |
| `--bubble-select-list-border-radius` | `px` | カード内のドロップダウンメニューの角丸 |
| `--bubble-select-list-item-accent-color` | `color` | 選択されている項目のアクセントカラー |
| `--bubble-select-list-background-color` | `color` | カード内のドロップダウンメニューの背景色 |
| `--bubble-select-list-width` | `px` | カード内のドロップダウンメニューの幅 |
| `--bubble-select-arrow-background-color` | `color` | ドロップダウンの矢印の背景色 |
| `--bubble-select-button-border-radius` | `px` | セレクトボタンの角丸 |
| `--bubble-select-border-radius` | `px` | セレクトカードの角丸 |
| `--bubble-select-icon-border-radius` | `px` | セレクトカードのアイコンコンテナの角丸 |
| `--bubble-select-icon-background-color` | `color` | セレクトカードのアイコンコンテナの背景色 |
| `--bubble-select-box-shadow` | [ボックスシャドウ](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow)を参照 | セレクトカードのボックスシャドウ |

</details>


#### 例

<details>

<summary>シーンの一覧を持つセレクトカード</summary>

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

このカードは`climate`エンティティを操作できます。

> [!TIP]
> モード選択メニューは、カード作成時に自動的に追加される[サブボタン](#サブボタン)です。あとから自由に変更したり削除したりできます。

### 空調のオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前                     | 型    | 必須                         | 対応するオプション                                  | 説明                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **必須**                        | 空調エンティティ                                   | 制御するエンティティ (例: `climate.living_room`)                                                            |
| `name`                  | string  | 任意                            | 任意の文字列                                       | カードのカスタム名。指定しない場合はエンティティ名が表示されます。                                                    |
| `icon`                  | string  | 任意                            | 任意の`mdi:`アイコン                                  | カードのカスタムアイコン。指定しない場合はエンティティのアイコンまたは`entity-picture`が使用されます。                   |
| `force_icon`            | boolean | 任意                            | `true` または `false` (デフォルト)                     | `entity-picture`よりアイコンを優先します。                                                           |
| `show_state`            | boolean | 任意                            | `true` または `false` (デフォルト)                     | `entity`の現在の状態を表示または非表示にします。                                                                 |
| `show_name`             | boolean | 任意                            | `true` (デフォルト) または `false`                     | エンティティの名前を表示または非表示にします。                                                                            |
| `show_icon`             | boolean | 任意                            | `true` (デフォルト) または `false`                     | アイコンを表示または非表示にします。                                                                                          |
| `hide_target_temp_low`  | boolean | 任意 (`target_temp_low`に対応するエンティティのみ) | `true` または `false` (デフォルト) | `entity`が対応している場合、下限目標温度のコントロールを非表示にします。                                                          |
| `hide_target_temp_high` | boolean | 任意 (`target_temp_high`に対応するエンティティのみ)| `true` または `false` (デフォルト) | `entity`が対応している場合、上限目標温度のコントロールを非表示にします。                                                         |
| `state_color`           | boolean | 任意                            | `true` または `false` (デフォルト)                     | 空調エンティティがオンのとき、背景色を一定にします。                                                              |
| `step` | number | 任意 | 任意の数値 | 温度のステップ幅。 |
| `min_temp` | number | 任意 | 任意の数値 | 最低温度。 |
| `max_temp` | number | 任意 | 任意の数値 | 最高温度。 |
| `button_action` | object | 任意 | `tap_action`、`double_tap_action`または`hold_action`。[アクション](#タップダブルタップ長押しのアクション)を参照 | ボタンクリック時のデフォルトアクションを変更できます。 |
| `tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンクリック時のアクションタイプを定義します。未定義の場合は`more-info`が使用されます。 |
| `double_tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンをダブルクリックしたときのアクションタイプを定義します。未定義の場合は`none`が使用されます。 |
| `hold_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | アイコンを長押ししたときのアクションタイプを定義します。未定義の場合は`more-info`が使用されます。 |                              |
| `main_buttons_position` | string | 任意 | `default` または `bottom` | 空調の操作ボタンを下部に固定表示します |
| `main_buttons_full_width` | boolean | 任意 | `true` または `false` | 下部の操作ボタンを全幅にします (デフォルト: 位置が`bottom`のとき`true`) |
| `main_buttons_alignment` | string | 任意 | `end` (デフォルト)、`center`、`start`、`space-between` | 全幅でないときの下部操作ボタンの整列 |
| `card_layout` | string | 任意 | `normal` (セクションビューでない場合のデフォルト)、`large` (セクションビューの場合のデフォルト)、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト。[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数 (高さ) (例: `2`) |
| `sub_button`            | object  | 任意                            | [サブボタン](#サブボタン)を参照                | 右側に固定されたカスタムボタンを追加します。空調のモード選択メニューに便利です。                                                  |

</details>

<details>

<summary><b>CSS変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | 空調カード内の対応する要素のメイン背景色 |
| `--bubble-climate-border-radius` | `px` | 空調カード内の対応する要素の角丸 |
| `--bubble-climate-button-background-color` | `color` | 空調カードのボタンの背景色 |
| `--bubble-climate-icon-border-radius` | `px` | 空調カードのアイコンコンテナの角丸 |
| `--bubble-state-climate-fan-only-color` | `color` | 送風のみ状態のオーバーレイカラー |
| `--bubble-state-climate-dry-color` | `color` | 除湿状態のオーバーレイカラー |
| `--bubble-state-climate-cool-color` | `color` | 冷房状態のオーバーレイカラー |
| `--bubble-state-climate-heat-color` | `color` | 暖房状態のオーバーレイカラー |
| `--bubble-state-climate-auto-color` | `color` | 自動状態のオーバーレイカラー |
| `--bubble-state-climate-heat-cool-color` | `color` | 暖房冷房状態のオーバーレイカラー |
| `--bubble-climate-accent-color` | `color` | 空調カードのアクセントカラー |
| `--bubble-climate-box-shadow` | [ボックスシャドウ](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow)を参照 | 空調コンテナのボックスシャドウ。 |

</details>


#### 例

<details>

<summary>HVACモードのドロップダウンメニューを持つ空調カード</summary>

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

## カレンダー

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

このカードはカレンダーエンティティを表示できます。内容はスクロールできるので、今後の予定を簡単に確認できます。

### カレンダーのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前                | 型    | 必須  | 対応するオプション                               | 説明                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | 任意     | 任意の数値 (最小値: 1)                        | 現在から数えて何日分の予定を取得するか (デフォルト: 7) |
| `entities`          | object  | **必須** | カレンダーエンティティのオブジェクト (下記参照)            | 制御するエンティティ (例: `calendar.main_calendar`)                                 |
| `entities.entity`   | string  | **必須** | カレンダーエンティティ                               | 表示するカレンダーエンティティ                                                          |
| `entities.color`    | string  | 任意     | 色                                         | カレンダーチップのカスタムカラー。指定しない場合は自動で色が割り当てられます |
| `days`              | number  | 任意     | 任意の数値 (最小値: 1)                         | 現在から数えて何日分の予定を取得するか (デフォルト: 7) |
| `limit`             | number  | 任意     | 数値                                        | カードに表示する予定の数                                  |
| `show_end`          | boolean | 任意     | `true` または `false` (デフォルト)                     | 予定の終了時刻を表示または非表示にします                                                    |
| `show_progress`     | boolean | 任意     | `true` (デフォルト) または `false`                     | 予定の進行状況バーを表示または非表示にします                                                     |
| `show_started_events`| boolean | 任意     | `true` (デフォルト) または `false`                     | 現在進行中の予定を表示または非表示にします                                                 |
| `scrolling_effect`  | boolean | 任意 | `true` (デフォルト) または `false` | コンテンツがコンテナのサイズを超えたときにテキストをスクロールさせます |
| `event_action` | object | 任意 | `tap_action`、`double_tap_action`または`hold_action`。[アクション](#タップダブルタップ長押しのアクション)を参照 | 予定クリック時のアクションを追加できます。 |
| `tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | 日付クリック時のアクションタイプを定義します。未定義の場合は`none`が使用されます。 |
| `double_tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | 日付をダブルクリックしたときのアクションタイプを定義します。未定義の場合は`none`が使用されます。 |
| `hold_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | 日付を長押ししたときのアクションタイプを定義します。未定義の場合は`none`が使用されます。 |
| `card_layout` | string | 任意 | `normal` (セクションビューでない場合のデフォルト)、`large` (セクションビューの場合のデフォルト)、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト。[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数 (高さ) (例: `2`) |
| `sub_button` | object | 任意 | [サブボタン](#サブボタン)を参照 | 右側に固定されたカスタムボタンを追加します |

</details>

<details>

<summary><b>CSS変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数                                  | 期待される値 | 説明                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | カレンダーカード内の対応する要素のメイン背景色  |
| `--bubble-calendar-border-radius`         | `px`           | カレンダーカード内の対応する要素の角丸 |
| `--bubble-calendar-height`                | `px`           | カレンダーカードの高さ                                        |

</details>

#### 例

<details>

<summary>表示件数を制限したカレンダーカード</summary>

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

<summary>終了時刻と進行状況バーを表示するカレンダーカード</summary>

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


## セパレーター

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

このカードは、ポップアップをカテゴリー/セクションに分けるためのシンプルなセパレーターです。例えば、照明、デバイス、カバー、設定、オートメーションなど。

### セパレーターのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | タイプ | 必須 | サポートされている値 | 説明 |
| --- | --- | --- | --- | --- |
| `name` | string | 任意だが推奨 | 任意の文字列 | セパレーターの名前 |
| `icon` | string | 任意だが推奨 | 任意の`mdi:`アイコン | セパレーターのアイコン |
| `card_layout` | string | 任意 | `normal` (セクションビューでない場合のデフォルト)、`large` (セクションビューの場合のデフォルト)、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト、[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数 (高さ) (例: `2`) |
| `sub_button` | object | 任意 | [サブボタン](#サブボタン)を参照 | 右側に固定されたカスタムボタンを追加 |

</details>

<details>

<summary><b>CSS変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | セパレーターの線の背景色 |

</details>

#### 例

<details>

<summary>「カバー」セクション用のセパレーター/仕切り</summary>

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

## 空の列

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

このカードは、空の列を埋めるためのものです。ポップアップ内の`horizontal-stack`に1枚しかカードがない場合に便利です。このスクリーンショットの右下の隅を見て、それが(見えないことを)確認してください。

### 空の列のオプション

このカードにはオプションがなく、[スタイル](#スタイル)にも対応していませんが、HAのセクション向けのレイアウトオプションには対応しています。

#### 例

<details>

<summary>水平スタック内の空の列</summary>

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

## サブボタンのみ

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

このカードはサブボタン専用です。メニュー、クイックアクション、情報チップ、あるいはページ下部に固定するフッターに最適です。

> [!IMPORTANT]  
> このカードは新しいサブボタンスキーマを使用します。ボタンを定義するには`sub_button.bottom`を使用してください。`sub_button.main`セクションは無視されます。

### サブボタンのみのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | タイプ | 必須 | サポートされている値 | 説明 |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **必須** | [サブボタン](#サブボタン)を参照 | `bottom`セクションを使ってサブボタンを定義 |
| `hide_main_background` | boolean | 任意 | `true`または`false` (デフォルト) | カードの背景を非表示にする |
| `footer_mode` | boolean | 任意 | `true`または`false` (デフォルト) | カードをページ下部に固定する |
| `footer_full_width` | boolean | 任意 | `true`または`false` (デフォルト) | フッターを全幅 (100%) にする |
| `footer_width` | number | 任意 | 任意の数値 | `footer_full_width`が`false`のときのフッター幅 (ピクセル単位) |
| `footer_bottom_offset` | number | 任意 | 任意の数値 | ページ下部からの距離 (ピクセル単位、デフォルト: `16`) |
| `card_layout` | string | 任意 | `normal` (セクションビューでない場合のデフォルト)、`large` (セクションビューの場合のデフォルト)、`large-2-rows`、`large-sub-buttons-grid` | カードのスタイルレイアウト、[カードレイアウト](#カードレイアウト)を参照 |
| `rows` | number | 任意 | 任意の数値 | 行数 (高さ) (例: `2`) |

</details>

<details>

<summary><b>CSS変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width`が`false`のときのフッター幅 |
| `--bubble-footer-bottom` | `px` | フッターの下部オフセット |
| `--bubble-footer-box-shadow` | [ボックスシャドウ](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow)を参照 | フッターコンテナのボックスシャドウ |

</details>

#### 例

<details>

<summary>チップのような表示 (スクリーンショットの通り)</summary>

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

<summary>固定フッターメニュー</summary>

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

## サブボタン

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

このオプションに対応しているすべてのカードで、サブボタンを追加してカードをさらにカスタマイズできます。例えば、掃除機を操作するボタンや、天気カード、あるいは思いつく限りほぼ何でも作成できます。これらのサブボタンは、タップアクションやほとんどのボタンオプションに対応しています。

サブボタンは現在、**デフォルト (ボタン)**、**スライダー**、**ドロップダウン / セレクト**の3つのタイプに対応しています。同じカード内でタイプを混在させたり、サブボタンを上部または下部に配置したり、より高度なレイアウトのためにグループにまとめたりすることができます。

#### サブボタンの配置とグループ

<details>

<summary><b>サブボタンの構造 (main / bottom + グループ)</b></summary>

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

**補足:**
- `main`と`bottom`は2つの独立したセクションです。下部サブボタンはカードの下部に固定されます。
- `main_layout`と`bottom_layout`は、グループを縦に並べるための`inline` (デフォルト) または`rows`を受け付けます。
- グループは`group`の配列と、任意の`buttons_layout` (`inline`または`column`) を持つオブジェクトです。
- `justify_content`は**下部グループのみ**で利用可能です (`start`、`center`、`end`、`fill`)。
- 下部サブボタンが存在する場合、明示的に別のレイアウトを指定しない限り、カードレイアウトは自動的に`large`に切り替わります。
- 従来の`sub_button`配列も引き続きサポートされており、`main`セクションとして扱われます。

</details>

### サブボタンのオプション

<details>

<summary><b>オプション (YAML + 説明)</b></summary>

| 名前 | タイプ | 必須 | サポートされている値 | 説明 |
| --- | --- | --- | --- | --- |
| `entity` | string | 任意 | 任意のエンティティ | 操作するエンティティ |
| `name` | string | 任意 | 任意の文字列 | サブボタンの名前。未定義の場合はエンティティ名が表示される |
| `icon` | string | 任意 | 任意の`mdi:`アイコン | サブボタンのアイコン。未定義の場合はエンティティのアイコンまたはエンティティ画像が表示される |
| `force_icon` | boolean | 任意 | `true`または`false` (デフォルト) | エンティティ画像が利用可能な場合でもアイコンを優先する |
| `sub_button_type` | string | 任意 | `default`、`slider`または`select` | サブボタンのタイプを選択 |
| `show_background` | boolean | 任意 | `true` (デフォルト) または`false` | サブボタンの背景を表示する。エンティティの状態に応じて色が変わる |
| `state_background` | boolean | 任意 | `true` (デフォルト) または`false` | エンティティが`on`のときに状態の色を使用する |
| `light_background` | boolean | 任意 | `true` (デフォルト) または`false` | 可能な場合、背景に照明の色を使用する |
| `show_state` | boolean | 任意 | `true`または`false` (デフォルト) | `entity`の状態を表示または非表示にする |
| `show_name` | boolean | 任意 | `true`または`false` (デフォルト) | 名前を表示または非表示にする |
| `show_icon` | boolean | 任意 | `true` (デフォルト) または`false` | アイコンを表示または非表示にする |
| `show_last_changed` | boolean | 任意 | `true`または`false` (デフォルト) | `entity`の最終変更時刻を表示する |
| `show_last_updated` | boolean | 任意 | `true`または`false` (デフォルト) | `entity`の最終更新時刻を表示する |
| `show_attribute` | boolean | 任意 | `true`または`false` (デフォルト) | `entity`の属性を`name`の下に表示する |
| `attribute` | string | 任意 (`show_attribute`が`true`の場合は必須) | `entity`の属性 | 表示する属性 (例: `brightness`) |
| `select_attribute` | string | 任意 | `entity`の属性リスト (上記のサポートされている値を参照) | この属性リストは、クリックするとドロップダウンを開く (例: `effect_list`) |
| `show_arrow` | boolean | 任意 | `true` (デフォルト) または`false` | セレクトサブボタンのドロップダウン矢印を表示または非表示にする |
| `scrolling_effect` | boolean | 任意 | `true` (デフォルト) または`false` | コンテンツがコンテナのサイズを超えた場合にテキストをスクロールさせる |
| `tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | サブボタンをクリックしたときのアクションタイプを定義。未定義の場合は`more-info`が使用される |
| `double_tap_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | サブボタンをダブルクリックしたときのアクションタイプを定義。未定義の場合は`none`が使用される |
| `hold_action` | object | 任意 | [アクション](#タップダブルタップ長押しのアクション)を参照 | サブボタンを長押ししたときのアクションタイプを定義。未定義の場合は`more-info`が使用される |
| `fill_width` | boolean | 任意 | `true`または`false` | 使用可能な幅いっぱいに広げる (デフォルト: mainは`false`、bottomは`true`) |
| `width` | number または string | 任意 | 任意の数値またはCSSの長さ | カスタム幅 (デフォルトでmainセクションは`px`、bottomセクションは`%`) |
| `custom_height` | number | 任意 | 任意の数値 | カスタム高さ (ピクセル単位) |
| `content_layout` | string | 任意 | `icon-left` (デフォルト)、`icon-top`、`icon-bottom`、`icon-right` | サブボタン内のアイコンの配置 |
| `always_visible` | boolean | 任意 | `true`または`false` (デフォルト) | **スライダーのみ。**タップで開く代わりに、常にスライダーを表示する |
| `show_button_info` | boolean | 任意 | `true`または`false` (デフォルト) | **スライダーのみ。**`always_visible`が有効なときにアイコン/名前/状態を表示する |
| `visibility` | object または list | 任意 | [条件](https://www.home-assistant.io/docs/scripts/conditions/)を参照 | 条件に基づいてサブボタンを表示または非表示にする |
| `hide_when_parent_unavailable` | boolean | 任意 | `true`または`false` (デフォルト) | 親カードのエンティティが利用不可のときにサブボタンを非表示にする |

</details>

<details>

<summary><b>スライダーサブボタンのオプション (ボタンスライダーと同じ)</b></summary>

<br>

スライダーサブボタンは、ボタンスライダーと同じスライダーオプションに対応しています。これには以下が含まれます。
`min_value`、`max_value`、`step`、`tap_to_slide`、`relative_slide`、`read_only_slider`、`slider_live_update`、`slider_fill_orientation`、`slider_value_position`、`invert_slider_value`、`light_slider_type`、`cover_slider_type`、`hue_force_saturation`、`hue_force_saturation_value`、`use_accent_color`、`allow_light_slider_to_0`、`light_transition`、`light_transition_time`。

</details>

<details>

<summary><b>CSS変数 (<a href="#スタイル">スタイル</a>を参照)</b></summary>

| 変数 | 期待される値 | 説明 |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | サブボタンの角丸半径 |
| `--bubble-sub-button-background-color` | `color` | サブボタンの背景色 |
| `--bubble-sub-slider-border-radius` | `px` | スライダーサブボタンの角丸半径 |
| `--bubble-sub-slider-background-color` | `color` | スライダーサブボタンの背景色 |
| `--bubble-sub-slider-height` | `px` | 常時表示スライダーサブボタンの高さ |
| `--bubble-sub-button-dark-text-color` | `color` | 明るいサブボタン背景上のテキストの色 |

</details>

#### 例

<details>

<summary>掃除機カードを作るためのサブボタン付きボタン (スクリーンショットの通り)</summary>

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

<summary>明るさを表示するサブボタンと照明を切り替えるサブボタンを持つボタンスライダー (スクリーンショットの通り)</summary>

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

<summary>室内と室外の気温、今日と明日の天気を表示するボタン (スクリーンショット付き)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> 残念ながら私のところはずっと曇りですが、アイコンはすべて天気に応じて変化します。

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

## カードレイアウト

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card は Home Assistant のセクションビューに完全対応しており、カードレイアウトを変更してカードを大きくしたり、セクションビュー内でカードが占める列数や行数を変更したりできます(これに対応しているカードのみ)。これらのレイアウトは他のすべてのビュータイプでもサポートされています。

<details>

<summary><b>利用可能なカードレイアウト</b></summary>

| レイアウト | 説明 |
| --- | --- |
| `normal` | 通常のレイアウト(セクションビュー向けには最適化されていません) |
| `large` | セクションビューで選択した行数にリサイズされる、より大きなレイアウト(セクションビュー向けに最適化) |
| `large-2-rows` | サブボタンが2行になった、より大きなレイアウトで、セクションビューで選択した行数にリサイズされます(セクションビュー向けに最適化) |
| `large-sub-buttons-grid` | このレイアウトはサブボタンをグリッド状に表示します。`rows` を少なくとも `2` に設定する必要があります。

</details>

#### 例

<details>

<summary>サブボタン2行でエネルギー統計を表示する大きなボタン(スクリーンショット付き)</summary>

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

<summary>サブボタン12個を複数行に配置した大きなボタン</summary>

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

## タップ、ダブルタップ、長押しのアクション

このオプションに対応しているカードでは、Home Assistant 標準のタップアクション、ダブルタップアクション、長押しアクションも使用できます。例えば、ボタンのアイコンを長押しして「詳細情報」ウィンドウを表示したり、サブボタンを押したときにサービスを実行したりできます。

**注意:`double_tap_action` が設定されている場合、通常の `tap_action` はダブルタップの検出を可能にするため200msの遅延を持ちます。この遅延が望ましくない
場合は、`double_tap_action` を `none` に設定してダブルタップの処理を無効にしてください。**

### アクションオプション

<details>

<summary><b>オプション(YAML + 説明)</b></summary>

| 名前 | タイプ | 対応オプション | 説明 |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | 実行するアクション |
| `target` | object |  | `call-service` でのみ機能します。[home-assistant の構文](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices)に従います |
| `navigation_path` | string | ダッシュボードの任意のパス | `action` が navigate に指定されている場合に、遷移先となるパス(例:ポップアップを開くための `'#kitchen'`) |
| `url_path` | string | 任意のリンク | `action` が url の場合に、クリック時に開く URL(例:`https://www.google.com`) |
| `service` | string | 任意のサービス | `action` が `call-service` に指定されている場合に呼び出すサービス(例:`media_player.media_play_pause`) |
| `data` または `service_data` | object | 任意のサービスデータ | `action` が `call-service` に指定されている場合に含めるサービスデータ(例:`entity_id: media_player.kitchen`) |
| `confirmation` | object | [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) を参照 | (Bubble Card 独自のものではない)確認ポップアップを表示し、デフォルトの `confirmation` オブジェクトを上書きします |

</details>

#### 例

<details>

<summary>ポップアップを開くボタン</summary>

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

## スタイル

**card-mod を使わずに**、4つの方法ですべてのカードの CSS をカスタムスタイルで変更できます。

- エディターで、変更したいカードを開き、_スタイリングオプション > カスタムスタイルとJSテンプレート_ に移動して、カスタムスタイルを追加します(下のヒントと例を確認してください)。
- エディター(または [YAML](#モジュール))で、変更したいカードを開き、_モジュール_ に移動して新しいモジュールを作成する(すべてのカードで利用可能になります)か、**Module Store** に行って利用可能な任意のモジュールをインストールします(モジュールの詳細は[下記](#モジュール)を参照してください)。
- [テーマ](https://www.home-assistant.io/integrations/frontend/#defining-themes)ファイルに、YAML で CSS 変数を追加する方法もあります(これらは上記の各カードのドキュメントで確認できます)。これによりグローバルな変更が可能になります。

  <details>
  
  <summary>例</a></summary>
  
  <br>

  `Bubble:` の行はコピーしないでください、これはあなたが使用しているテーマの名前です。また、変数から `--` を取り除く必要があります。

  変更を加えた後にテーマを更新するには、[`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) アクションを実行する必要があります。

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
  
- YAML で `styles: |` の後にカスタムスタイルを追加する方法もあります(下のヒントと例を確認してください)。

> [!TIP]  
> **どのスタイルクラスを変更できるかを理解するには**、このリポジトリの [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) フォルダーを見てみてください。各カードのフォルダーの中に、`styles.css` という名前のファイルがあります。これらのファイルには適用されているすべてのスタイルが含まれています。これにより CSS 変数よりもはるかに多くの可能性が広がりますが、各カードに個別に追加する必要があります。
> 
> [コミュニティの例](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards)もたくさん見つかりますし、少し検索すれば [Home Assistant のフォーラム](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/)からもいくつか見つかります。
>
> (スクリーンショットにあるような) Home Assistant 用の Bubble テーマは[こちら](https://github.com/Clooos/Bubble)にあります。
>
> チュートリアル動画を近日中に私の [YouTube チャンネル](https://www.youtube.com/@cloooos)で公開予定です！

> [!IMPORTANT]  
> 既に定義されている CSS スタイルの一部には `!important;` を追加する必要がある場合がありますのでご注意ください(下の例を参照)。

> [!TIP]  
> サブボタンは名前に基づいたクラスで指定できます。例えば、「My sub-button」という名前のサブボタンは `.my-sub-button` でスタイルを指定できます。スライダーのサブボタンは `.bubble-sub-button-slider-1`、`.bubble-sub-button-slider-2` なども公開しています。

#### 例

<details>

<summary>Bubble Card のフォントサイズを変更する</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>水平ボタンスタックの中の1つのボタンの背景色を変更する</summary>

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

<summary>カードの背景色を変更する</summary>

<br>

これは(ポップアップを除く)すべての Bubble Card タイプで機能します:

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

これはボタンカードのみで同じことを行います(ポップアップのヘッダーでも機能します):

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

`on` のときの色を変更するには、下のスタイルテンプレートを参照してください。

</details>

<details>

<summary>ボタンスライダーの色を変更する</summary>

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

<summary>セパレーターの線の色を変更する</summary>

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

<summary>アイコンの色を変更する</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

水平ボタンスタックのアイコンの場合。
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>アイコンコンテナの背景色を変更する</summary>

<br>

これは(ポップアップを除く)すべての Bubble Card タイプで機能します:

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

これはポップアップのヘッダーで同じことを行います:

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>サブボタンのサイズを変更する(ラージレイアウトに最適)</summary>

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

<summary>2番目のサブボタンの背景色を変更する</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>アイコンのサイズを変更する</summary>

<br>

メインアイコンの場合。

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

サブボタンのアイコンの場合。

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>サブボタンでアイコンの代わりに画像を使用する</summary>

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

あとはこの画像を Home Assistant の「www」フォルダーの中にある「pictures」フォルダー(好きな名前でも構いません)にアップロードするだけです。

</details>

<details>

<summary>応用例:サブボタンの水平な列を作成する(スクリーンショット付き)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> これは本当にお気に入りで、自分のダッシュボードのヘッダーとして使っています。

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

## テンプレート

**Bubble CardはJinjaテンプレートをサポートしていません**が、上級者は[カスタムスタイル](#スタイル)内に直接JSでテンプレートを追加できます。例えば、アイコン、テキスト、要素の色を動的に変更したり、状態や属性などに基づいて要素(サブボタンなど)を条件付きで表示/非表示にしたり、ほぼ何でも実現できます。

> [!TIP]  
> JSテンプレートについての詳しい情報は[こちら](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)。私からのアドバイスとして、正しく動作しているか確認するために**必ずブラウザのコンソールを確認する**ようにしてください。

> [!IMPORTANT]  
> **CSSプロパティを変更しないテンプレートは、必ず末尾に配置してください！アイコン、テキスト、その他の要素を変更する場合などです。**

#### 利用可能な変数と関数

<details>

<summary>変数</summary>

<br>

ほとんどのカードで、以下の変数にアクセスできます。

- `state` は定義した`entity`の状態を返します。
  
- `entity` はこの例の`switch.test`のように、定義したエンティティを返します。
  
- `icon` は`icon.setAttribute("icon", "mdi:lightbulb")`のようにしてアイコンを変更するために使用できます。

- `subButtonState[0]` は最初のサブボタンに定義された`entity`の状態を返します。`[0]`は最初のサブボタンの状態、`[1]`は2番目のサブボタンの状態です。
  
- `subButtonIcon[0]` は`subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`のようにして最初のサブボタンのアイコンを変更するために使用できます。`[0]`は最初のサブボタンのアイコン、`[1]`は2番目のサブボタンのアイコンです。
  
- `card` はDOM内のカード要素を返します。
  
- `hass` はさらに高度な制御を可能にする変数です。例えば、`hass.states['light.kitchen'].state`のようにして`light.kitchen`の状態を返したり、`hass.states[entity].attributes.brightness`のようにして属性を返したりできます。

- `this` はセットアップやダッシュボードに関する多くの有用な情報を返します。使い方をよく理解している場合にのみ使用してください。

</details>

<details>

<summary>関数</summary>

<br>

すべてのグローバルJS関数にアクセスできますが、以下にもアクセスできます。

- `getWeatherIcon` は天気を返す状態に基づいて天気アイコンを返すために使用できます。例えば、`${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` のようにすると、3番目のサブボタンのアイコンを今日の天気アイコンに変更できます。`.forecast[1]?.condition` は明日の天気になります。

  そのためにはテンプレートセンサーを作成する必要があります。`configuration.yaml`に以下を追加できます。
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
- `hass.formatEntityState(state)` は状態を翻訳するために使用できます(手動で単位を追加する必要なく、状態の単位を取得する場合にも使用できます)。
- `hass.formatEntityAttributeValue(state, "attribute")` は属性を翻訳するために使用できます(手動で単位を追加する必要なく、状態の単位を取得する場合にも使用できます)。

</details>

#### 例

以下に多くの例がありますが、[私のPatreonページ](https://www.patreon.com/c/Clooos)にもさらに高度なテンプレートを掲載しています。例えば私のお気に入りの一つに、カードのアイコン周りに最大4つの条件付きバッジを配置できるものがあります。Bubble Cardのカスタムスタイルとテンプレートの可能性を学ぶのにも最適です！

<details>
<summary>私のPatreonページの例</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">任意のカードにHome Assistant風のバッジを追加する</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">エンティティを使わずにセパレーターに書式付きの日付と時刻を表示する</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">サブボタンの状態を2行で表示する</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">セレクトのサブボタン内のラベルとアイコンをカスタマイズする</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">必要なときだけ表示される常設のリマインダーポップアップを追加する</a>
</p>

<br>

</details>

<details>

<summary><code>off</code>のときは赤、<code>on</code>のときは青になるボタンの背景色を変更する</summary>

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

<summary>水平ボタンスタック用に、エンティティに基づいてボタンの背景色を変更する</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>サブボタンを条件付きで表示/非表示にする</summary>

<br>

これは、掃除機がエラー状態のときだけ最初のサブボタンを表示する例です。
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

これは、バッテリーが10%未満のときにサブボタンを表示する例です。「Low battery」を表示するサブボタンと組み合わせると便利です。
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>アイコンまたはサブボタンのアイコンを条件付きで変更する</summary>

<br>

これは、掃除機がエラー状態のときだけボタンのアイコンを変更する例です。
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

これは、掃除機がエラー状態のときだけ最初のサブボタンのアイコンを変更する例です。
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>アイコンまたはサブボタンのアイコンの色を条件付きで変更する</summary>

<br>

これは、状態に基づいてボタンのアイコンの色を変更する例です。
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

これは、状態に基づいてサブボタンのアイコンの色を変更する例です。`.bubble-sub-button-1`は最初のサブボタンです。別のサブボタンのアイコンを変更したい場合は`1`を置き換えてください。
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>ファンのアイコンを条件付きでアニメーションさせる</summary>

<br>

これは、ファンが`on`のときにボタンのアイコンを回転させる例です。
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

<summary>テキスト(名前や状態など)をテンプレート化する</summary>

<br>

これは、天気に応じてボタンの名前/状態を「It's currently sunny」のように変更する例です。
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
またはサブボタンに適用する場合。
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


状態(`.bubble-state`)をテンプレート化したい場合は、`show_state: true`ではなく、属性を指定せずに`show_attribute: true`だけを有効にしてください。

</details>

<details>

<summary>高度な例：ポップアップが開いているときにサブボタンの色を変更する</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>高度な例：状態を自分の言語に翻訳してセパレーターの名前をテンプレート化する</summary>

<br>

`hass.formatEntityState(state)`を使って状態を翻訳し、`hass.formatEntityAttributeValue(state, "attribute")`を使って属性を翻訳できます。

これは、天気に基づいて名前とアイコンを変更する例です。フランス語で「Nuageux」は「Cloudy(曇り)」を意味します。

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

## モジュール

モジュールは、カスタムスタイルとテンプレートを保存・再利用し、すべてのBubble Cardで共有できる強力な機能です。同じコードを複数のカードにコピー&ペーストする代わりに、モジュールを作成して必要な場所に適用できます。これにより、ダッシュボードの見た目や使い心地の管理がはるかに簡単で効率的になります。

しかし、この機能はそれ以上にはるかに強力です。すべての標準の[Home Assistantフォーム](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)オプションを使って、Bubble Cardエディター内に実際の機能を自分自身で追加できるのです！
オブジェクトセレクターも改良され、変更をリアルタイムで確認できるほか、属性にも正しく対応するようになりました。

**Module Store**を閲覧して[コミュニティが作成したモジュール](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)を見つけてインストールしたり、自分の作品を共有したりすることもできます！

> [!TIP]
> モジュールのコードは、カードの`styles`セクションのコードとまったく同じように動作します。[テンプレート](#テンプレート)セクションで紹介した変数や関数はすべて利用できます。

<br>

### 初期セットアップ

> [!IMPORTANT]
> v3.1.0以降、モジュールの推奨ストレージバックエンドはBubble Card Toolsです。従来のテンプレートセンサー方式は既存のセットアップでは引き続き動作しますが、新しいモジュールとModule Storeの機能はBubble Card Tools経由でこそ最も適切にサポートされます。

Bubble Card Tools統合により、モジュールエディターとModule Storeが利用可能になり、モジュールは個別のYAMLファイルとして保存されます。既存のモジュールは自動的に移行されます。

インストールと設定の手順はこちらで説明されています。

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### モジュールエディター

どのカードの設定画面からでも、**モジュール**セクションからモジュールエディターにアクセスできます。エディターには2つの主要なタブがあります。

#### マイモジュールタブ

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

このタブには、インストール済みのすべてのモジュールが表示され、以下のことができます。

- 既存のモジュールを現在のカードに**適用する**
- 新しいモジュールをゼロから**作成する**
- 既存のモジュールをライブプレビュー付きで**編集する**
- 不要になったモジュールを**削除する**
- モジュールを**検索**・**並べ替え**する(アルファベット順、新しい順、有効なものを先頭に)
- **グローバルステータスを設定**して、モジュールをすべてのカードに自動的に適用する
- バックアップや共有のためにモジュールを**インポート/エクスポート**する

#### Module Storeタブ

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

このタブには[コミュニティが提供するすべての利用可能なモジュール](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)が表示され、以下のことができます。

- コミュニティが作成したすべてのモジュールを**閲覧する**
- 名前、互換性、キーワードでモジュールを**検索**・絞り込みする
- ワンクリックでモジュールを**インストールする**
- 新しいバージョンが利用可能なときに、インストール済みのモジュールを**更新する**

> [!TIP]
> エディターでは、まだ特定のカードタイプに対応しているとマークされていないモジュールを試すために、非対応のモジュールを有効にできます。

<br>

### モジュールの使い方

#### 新しいモジュールを作成する

<details>

<summary>クリックして展開</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. 任意のカードのエディターを開き、**モジュール**セクションを展開します。
2. **新しいモジュールを作成**をクリックします。
3. モジュールの情報を入力します。
4. **コード**エディターにCSSやJavaScriptのテンプレートコードを記述します。
5. (任意)**エディター**セクションでカスタム設定UIを作成します(上のスクリーンショットのカラーピッカーのように。完全なドキュメントは[こちら](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)で確認できます)。
6. **保存**をクリックします。

これでモジュールが作成され、どのカードでも使用できるようになりました！

<br>

</details>

#### カードにモジュールを適用する

<details>

<summary>クリックして展開</summary>

<br>

- **エディター経由:**

  - モジュールを適用したいカードのエディターを開きます。
  - **モジュール**セクションを展開します。
  - リストから適用したいモジュールをクリックします。
  - 「適用先」の下にある「このカード」をクリックします。これでモジュールが有効になります。同じカードに複数のモジュールを適用できます。

- **YAML経由:**

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

#### モジュールをグローバルに適用する

<details>

<summary>クリックして展開</summary>

<br>

モジュールをすべてのBubble Cardに自動的に適用されるように設定できます。

**エディターを持つモジュールでは利用できません。これらのモジュールは動作するために特定の設定が必要なためです。**

- **エディター経由:**

  - モジュールエディターの**マイモジュール**タブで対象のモジュールを見つけます。
  - モジュール名の横にある**すべてのカード**ボタンを切り替えます。
  - これでモジュールがすべてのカードに自動的に適用されるようになります。
 
- **YAML経由:**

  モジュールのYAML設定(`bubble-modules.yaml`内)に`is_global: true`を追加するだけです。

<br>

</details>

#### グローバルモジュールから特定のカードを除外する

<details>

<summary>クリックして展開</summary>

<br>

グローバルモジュールを特定のカードから除外したい場合は次のようにします。

- **エディター経由:**
  
  - カードの**モジュール**セクションに、グローバルモジュールが一覧表示されます。
  - グローバルモジュールをクリックし、「このカード」を無効にすると、そのカードだけ除外されます。

- **YAML経由:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### モジュールをModule Storeに共有する

<details>

<summary>クリックして展開</summary>

<br>

モジュールをModule Storeに共有するには、モジュールエディターの下部にある「モジュールをエクスポート」で「GitHub用にコピー」をクリックし、内容を[Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)カテゴリーの新しいディスカッションに貼り付けます。**説明**(必要であれば)と**例**(YAMLユーザー向け)を編集し、Module Store用に**必ずスクリーンショットを1枚以上含める**ことを忘れないでください。

**モジュールはその直後から利用可能になります**(Storeの更新後)。すべてが正しく記述されていて、モジュールが期待通りに動作することを必ず確認してください。もちろん、共有後にモジュールを編集/更新することもできます。

<br>

</details>

#### バージョン管理

<details>

<summary>クリックして展開</summary>

<br>

Module Storeは、インストール済みのモジュールの更新を自動的に確認します。更新が利用可能な場合は次のようになります。

1. **Module Store**タブに更新インジケーターが表示されます。
2. 更新が利用可能なモジュールで**更新**をクリックします。
3. Module Storeで更新を確認します。

<br>

</details>

#### 対応カードタイプを定義する

<details>

<summary>クリックして展開</summary>

<br>

モジュールによっては、すべてのカードタイプに対応しているとは限りません。モジュールがどのカードに対応しているかを指定できます。  
モジュールを**すべてのカード**に対応させたい場合は、`supported`フィールドを省略するだけです(またはエディターで**すべてのカード**オプションを使用します)。

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

### 例

<details>
<summary>基本的なスタイリングモジュール</summary>

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
<summary>カスタム設定付きのモジュール</summary>

<br>

このモジュールは[こちら](https://github.com/Clooos/Bubble-Card/discussions/1231)から利用できます。

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

さらに多くの例はModule Store、または[こちら](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)にあります。

<br>

---

<br>

## ヘルプ

期待通りに動作しないものがあれば、気軽に issue を開いてください。

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card について質問や感想がありますか？ あなたのダッシュボードや発見を共有したいですか？ Home Assistant のフォーラム、Bubble Card の subreddit、または GitHub Discussions セクションで参加できます。

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## 貢献

貢献は歓迎です！ バグ修正、新機能、翻訳、ドキュメントの改善など、どのようなものでも構いませんので、気軽にプルリクエストを開いてください。

始める前に、ローカル環境のセットアップ方法、プロジェクトのビルド方法、変更のテスト方法について説明している[開発者ガイド](DEVELOPERS.md)をお読みください。

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## 寄付

私はこのプロジェクトを最高のものにするため、自分の余暇の多くを費やしています。ですから、もし私の仕事を評価していただけるなら、どんな寄付でも応援を示す素晴らしい方法になります 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

皆さんの応援に感謝します、あなたたちこそ私の最大のモチベーションです！

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
