<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
<div dir="rtl">

> [!NOTE]
> یہ صفحہ ایک خودکار ترجمہ ہے۔ شک کی صورت میں [اصل انگریزی دستاویزات](../README.md) کو ترجیح دی جائے گی۔ کیا کوئی جملہ درست نہیں لگ رہا؟ ہر مدد قابل قدر ہے، اور [اس صفحے کی درستی](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ur.md) میں صرف ایک منٹ لگتا ہے: فورک اور پل ریکویسٹ کا کام GitHub خود سنبھال لیتا ہے۔ پیشگی شکریہ! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[اسے کسی دوسری زبان میں پڑھیں](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card ایک مینیمل اور حسبِ ضرورت کارڈز کا مجموعہ ہے جو Home Assistant کے لیے بنایا گیا ہے، جس میں جدید پاپ اپس اور 100 سے زیادہ کمیونٹی کے بنائے ہوئے ماڈیولز پر مشتمل ایک مربوط Module Store شامل ہے۔

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## فہرست مضامین

**[`انسٹالیشن`](#انسٹالیشن)**  **[`کنفیگریشن`](#کنفیگریشن)**  **[`اینٹیٹی تجاویز`](#اینٹیٹی-تجاویز)**  **[`پاپ اپ`](#پاپ-اپ)**  **[`افقی بٹنوں کا اسٹیک`](#افقی-بٹنوں-کا-اسٹیک)**  **[`بٹن`](#بٹن)**  **[`میڈیا پلیئر`](#میڈیا-پلیئر)**  **[`کور`](#کور)**  **[`سلیکٹ`](#سلیکٹ)**  **[`کلائمیٹ`](#کلائمیٹ)**  **[`کیلنڈر`](#کیلنڈر)**  **[`جداکار`](#جداکار)**  **[`خالی کالم`](#خالی-کالم)**  **[`صرف ذیلی بٹن`](#صرف-ذیلی-بٹن)**  **[`ذیلی بٹن`](#ذیلی-بٹن)**  **[`کارڈ کے لے آؤٹس`](#کارڈ-کے-لے-آؤٹس)**  **[`شرائط`](#شرائط)**  **[`ایکشنز`](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز)**  **[`اسٹائلنگ`](#اسٹائلنگ)**  **[`ٹیمپلیٹس`](#ٹیمپلیٹس)**  **[`ماڈیولز`](#ماڈیولز)**  **[`لوکلائزیشن`](#لوکلائزیشن)**  **[`مدد`](#مدد)**  **[`تعاون`](#تعاون)**  **[`عطیہ`](#عطیہ)**

<br>

## انسٹالیشن

**Home Assistant کا کم از کم سپورٹڈ ورژن:** 2023.9.0

<details>

<summary>HACS کے بغیر</summary>

<br>

1. [تازہ ترین ریلیز](https://github.com/Clooos/Bubble-Card/releases/latest) سے `bubble-card.zip` ڈاؤن لوڈ کریں
2. اسے اپنے `<config>/www` فولڈر میں نکالیں، آپ کو `bubble-card.js` اور اس کے ساتھ ایک `translations` فولڈر ملنا چاہیے (اس فولڈر میں ایڈیٹر کی لغات ہوتی ہیں، اس کے بغیر ایڈیٹر انگریزی میں ہی رہتا ہے)
3. اپنے ڈیش بورڈ پر اوپر دائیں کونے کے آئیکن پر کلک کریں، پھر `Edit dashboard` پر
4. دوبارہ اسی آئیکن پر کلک کریں اور پھر `Manage resources` پر کلک کریں
5. `Add resource` پر کلک کریں
6. یہ کاپی کر کے پیسٹ کریں: `/local/bubble-card.js?v=1`
7. `JavaScript Module` پر کلک کریں، پھر `Create` پر
8. واپس جا کر اپنے صفحے کو ریفریش کریں
9. اب آپ نیچے دائیں کونے میں `Add card` پر کلک کر کے `Bubble Card` تلاش کر سکتے ہیں
10. فائل کی ہر اپڈیٹ کے بعد آپ کو `/local/bubble-card.js?v=1` میں تبدیلی کرنی ہوگی اور ورژن نمبر کو کسی بھی زیادہ نمبر سے بدلنا ہوگا

اگر یہ کام نہ کرے تو بس اپنے براؤزر کا کیش صاف کرنے کی کوشش کریں۔

</details>

<details>

<summary>HACS کے ساتھ (تجویز کردہ)</summary>

<br>

یہ طریقہ آپ کو Home Assistant Community Store پر براہ راست اپڈیٹس حاصل کرنے دیتا ہے

1. اگر HACS ابھی تک انسٹال نہیں ہے تو اسے [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) پر دی گئی ہدایات کے مطابق ڈاؤن لوڈ کریں
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) پر دی گئی ہدایات کے مطابق HACS کی ابتدائی کنفیگریشن مکمل کریں
3. اپنی سائیڈ بار میں "HACS" پر جائیں
4. "Bubble Card" تلاش کریں، یا نیچے دیے گئے نیلے بٹن پر کلک کریں
5. "Download" پر کلک کریں
6. واپس اپنے ڈیش بورڈ پر جائیں اور اوپر دائیں کونے کے آئیکن پر کلک کریں، پھر `Edit dashboard` پر
7. اب آپ نیچے دائیں کونے میں `Add card` پر کلک کر کے `Bubble Card` تلاش کر سکتے ہیں

اگر یہ کام نہ کرے تو اپنے براؤزر یا ایپ کا کیش صاف کرنے کی کوشش کریں (اگر ضرورت ہو تو اپنے تمام آلات پر)۔

#### ویڈیوز

آپ قدم بہ قدم ویڈیوز کے لیے میرے YouTube چینل پر بھی جا سکتے ہیں۔

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## کنفیگریشن

تمام آپشنز Home Assistant ایڈیٹر میں کنفیگر کیے جا سکتے ہیں۔ لیکن آپ نیچے دی گئی دستاویز میں مزید تفصیلات اور YAML تلاش کر سکتے ہیں۔

<details>

<summary><b>اہم آپشنز (YAML + تفصیل)</b></summary>

| نام | قسم | ضرورت | معاون آپشنز | تفصیل |
| --- | --- | --- | --- | --- |
| `type` | string | **لازمی** | `custom:bubble-card` | کارڈ کی قسم |
| `card_type` | string | **لازمی** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` یا `sub-buttons` | Bubble Card کی قسم، نیچے دیکھیں |
| `styles` | object list | اختیاری | کوئی بھی CSS اسٹائل شیٹس | آپ کو اپنے Bubble Card CSS کو حسبِ ضرورت بنانے دیتا ہے، دیکھیں [اسٹائلنگ](#اسٹائلنگ) |

</details>

<details>

<summary><b>عالمی CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | تمام معاون عناصر کے لیے بارڈر ریڈیئس |
| `--bubble-main-background-color` | `color` | تمام معاون عناصر کے لیے مرکزی پس منظر رنگ |
| `--bubble-secondary-background-color` | `color` | تمام معاون عناصر کے لیے ثانوی پس منظر رنگ |
| `--bubble-accent-color` | `color` | تمام معاون عناصر کے لیے ایکسنٹ رنگ |
| `--bubble-icon-border-radius` | `px` | تمام معاون عناصر کے آئیکن کا بارڈر ریڈیئس |
| `--bubble-icon-background-color` | `color` | تمام معاون عناصر کے آئیکن کا پس منظر رنگ |
| `--bubble-sub-button-border-radius` | `px` | تمام ذیلی بٹنوں کا بارڈر ریڈیئس |
| `--bubble-sub-button-background-color` | `color` | تمام ذیلی بٹنوں کا پس منظر رنگ |
| `--bubble-box-shadow` | دیکھیں [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | تمام معاون عناصر کا باکس شیڈو |
| `--bubble-border` | دیکھیں [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | تمام معاون کارڈز کے لیے بارڈر |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card اور اس کی صلاحیتوں کے بارے میں جاننے کے لیے یہ [ویڈیو](https://www.youtube.com/watch?v=0hSQOlBxKKI) دیکھیں۔** میرا YouTube چینل کافی نیا ہے اور Home Assistant اور Bubble Card کے بارے میں ٹیوٹوریلز پر مرکوز ہے۔ میرے چینل کی نمائش بڑھانے میں مدد کے لیے سبسکرائب کرنے میں ہچکچاہٹ نہ کریں۔ پیشگی شکریہ!

<br>

---

<br>

## اینٹیٹی تجاویز

Home Assistant 2026.6 سے، کارڈ پکر میں کوئی اینٹیٹی منتخب کرنے پر آپ کو چند تیار شدہ کارڈز پیش کیے جاتے ہیں، اور Bubble Card اس فہرست میں اپنی ترکیبیں شامل کرتا ہے۔ ایک لائٹ منتخب کریں تو آپ کو چمک کے سلائیڈر والا کارڈ پیش کیا جاتا ہے، اور اگر آپ کی لائٹ سپورٹ کرتی ہو تو کلر ٹمپریچر، رنگ اور سیچوریشن کی اقسام بھی۔ ایک کور منتخب کریں تو آپ کو اس کا پوزیشن سلائیڈر ملتا ہے، ایک میڈیا پلیئر منتخب کریں تو آپ کو ذرائع کی فہرست والی قسم بھی ملتی ہے، اور ایک ویکیوم کلینر منتخب کریں تو آپ کو اس کے شروع، وقفہ اور ڈاک پر واپسی کے بٹن ملتے ہیں۔ ہر تجویز ایک عام Bubble Card کنفیگریشن ہوتی ہے جو لائیو پیش نظارہ کے طور پر دکھائی جاتی ہے، تو آپ سب سے قریب والی لے کر معمول کے مطابق اس میں ترمیم جاری رکھ سکتے ہیں۔

آپ کو کیا پیش کیا جائے گا، اس کا انحصار اس پر ہے کہ آپ کی اینٹیٹی واقعی کیا کر سکتی ہے: چمک کے چینل کے بغیر لائٹ کو سلائیڈر کے بجائے ٹوگل ملتا ہے، جو کور جھک نہیں سکتا اسے جھکاؤ والی قسم نہیں ملتی، اور کلائمیٹ اینٹیٹی کو اس کے پہلے سے طے شدہ موڈز صرف اسی صورت ملتے ہیں جب اس کے پاس ہوں۔ جہاں لاگو ہوں، کلاسیکی اندراجات Bubble Card کی تجاویز کے نیچے آتے ہیں: اس اینٹیٹی قسم کے لیے مخصوص کارڈ، ایک سادہ بٹن اور ایک سلائیڈر۔

> [!TIP]
> ماڈیولز اس فہرست میں اپنی تجاویز شامل کر سکتے ہیں، دیکھیں [ماڈیولز](#ماڈیولز)۔

<br>

---

<br>

## پاپ اپ

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

یہ کارڈ آپ کو کسی بھی مواد کے ساتھ پاپ اپ بنانے دیتا ہے۔ ہر پاپ اپ **پہلے سے چھپا ہوا** ہوتا ہے اور اسے اس کے لنک کو ہدف بنا کر (مثلاً `'#pop-up-name'`)، کسی بھی ایسے کارڈ سے جو `navigate` [ایکشن](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) کو سپورٹ کرتا ہو، یا شامل کردہ [افقی بٹنوں کے اسٹیک](#افقی-بٹنوں-کا-اسٹیک) سے کھولا جا سکتا ہے۔

> [!TIP]
> ### پاپ اپ ٹریگر 
> یہ فیچر آپ کو کسی بھی entity کی حالت کی بنیاد پر پاپ اپ کھولنے دیتا ہے، مثال کے طور پر، جب کوئی شخص آپ کے گھر کے سامنے ہو تو آپ کیمرے کے ساتھ ایک "سیکیورٹی" پاپ اپ کھول سکتے ہیں۔ آپ ایک ٹوگل ہیلپر (input_boolean) بھی بنا سکتے ہیں اور کسی آٹومیشن میں اس کا کھلنا/بند ہونا ٹریگر کر سکتے ہیں۔
> <details>
> <summary>جب کوئی <code>binary_sensor</code> <code>on</code> ہو تو پاپ اپ کھولنا</summary>
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
> ### پاپ اپ بند کرنے کے مختلف طریقے 
> پاپ اپ بند کرنے کے کئی طریقے ہیں۔ مثال کے طور پر، آپ پاپ اپ کے ہیڈر سے نیچے کی طرف سوائپ کر سکتے ہیں، پاپ اپ کے اندر نیچے کی طرف لمبا سوائپ کر کے، ڈیسک ٹاپ پر Escape دبا کر، URL میں ہیش ہٹا کر، یا محض کلوز بٹن دبا کر۔
>


### پاپ اپ کے اختیارات

<details>

<summary><b>اختیارات (YAML + تفصیلات)</b></summary>

| نام | قسم | ضرورت | معاون آپشنز | تفصیل |
| --- | --- | --- | --- | --- |
| `hash` | string | **لازمی** | کوئی بھی منفرد ہیش (مثلاً `'#kitchen'`) بغیر ' ' کے | یہی طریقہ ہے جس سے آپ اپنا پاپ اپ کھولیں گے |
| `popup_style` | string | اختیاری | `bubble` (ڈیفالٹ) یا `classic` | پاپ اپ کا بصری اسٹائل متعین کریں |
| `popup_mode` | string | اختیاری | `default` (ڈیفالٹ)، `fit-content`، `centered` یا `adaptive-dialog` | پاپ اپ کا لے آؤٹ موڈ متعین کریں |
| `with_bottom_offset` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | صرف `popup_mode: fit-content` یا `adaptive-dialog` کے ساتھ استعمال ہوتا ہے۔ موبائل پر نچلا آفسیٹ لاگو کرتا ہے، مفید جب آپ کے ڈیش بورڈ میں فوٹر کارڈ شامل ہو۔ |
| `full_width_on_mobile` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | صرف `popup_mode: centered` کے ساتھ استعمال ہوتا ہے۔ موبائل پر پاپ اپ کو مکمل اسکرین چوڑائی تک پھیلاتا ہے، چھوٹی اسکرینز پر مفید۔ |
| `performance_mode` | string | اختیاری | `default` (ڈیفالٹ) یا `performance` | پاپ اپ کھلنے کی اینیمیشن کو بہتر بناتا ہے۔ `performance` مواد کی رینڈرنگ اور پس منظر کے بلر کو معمولی سا موخر کرتا ہے، اور اگر سیٹ ہو تو بیک ڈراپ بلر بھی غیر فعال کر دیتا ہے۔ |
| `auto_close` | string | اختیاری | ملی سیکنڈ میں ٹائم آؤٹ (مثلاً 10s کے لیے `10000`) | ٹائم آؤٹ کے بعد پاپ اپ خود بخود بند ہو جائے |
| `close_on_click` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | کسی بھی تعامل کے بعد پاپ اپ خود بخود بند کریں |
| `close_by_clicking_outside` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | پاپ اپ کے باہر کلک کر کے اسے بند کریں |
| `width_desktop` | string | اختیاری | کوئی بھی CSS قدر | ڈیسک ٹاپ پر چوڑائی (موبائل پر ڈیفالٹ `100%`) |
| `margin` | string | اختیاری | کوئی بھی CSS قدر | یہ **صرف** اس وقت استعمال کریں جب آپ کا پاپ اپ موبائل پر اچھی طرح مرکز میں نہ ہو (مثلاً `13px`) |
| `margin_top_mobile` | string | اختیاری | کوئی بھی CSS قدر | موبائل پر اوپری مارجن (مثلاً `-56px` اگر آپ کا ہیڈر چھپا ہوا ہو) |
| `margin_top_desktop` | string | اختیاری | کوئی بھی CSS قدر | ڈیسک ٹاپ پر اوپری مارجن (مثلاً آدھے سائز کے پاپ اپ کے لیے `50vh` یا `400px` کی مقررہ اونچائی کے لیے `calc(100vh - 400px)`) |
| `bg_color` | string | اختیاری | کوئی بھی hex، rgb یا rgba قدر | آپ کے پاپ اپ کا پس منظر رنگ (مثلاً سفید پس منظر کے لیے `#ffffff`) |
| `bg_opacity` | string | اختیاری | `0` سے `100` تک کوئی بھی قدر | آپ کے پاپ اپ کی پس منظر کی شفافیت (مثلاً کوئی شفافیت نہ ہونے کے لیے `100`) |
| `bg_blur` | string | اختیاری | `0` سے `100` تک کوئی بھی قدر | آپ کے پاپ اپ کا پس منظر بلر ایفیکٹ، **یہ صرف اسی وقت کام کرتا ہے جب `bg_opacity` کو `100` پر سیٹ نہ کیا گیا ہو** (مثلاً بغیر بلر کے لیے `0`)|
| `shadow_opacity` | string | اختیاری | `0` سے `100` تک کوئی بھی قدر | آپ کے پاپ اپ کے شیڈو کی شفافیت (مثلاً اسے چھپانے کے لیے `0`) |
| `hide_backdrop` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اپنے مرکزی ڈیش بورڈ کے پہلے پاپ اپ پر اسے true سیٹ کریں تاکہ تمام پاپ اپس پر بیک ڈراپ غیر فعال ہو جائے۔ |
| `background_update` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | پس منظر میں پاپ اپ کا مواد اپڈیٹ کریں (تجویز کردہ نہیں) |
| `trigger` | object or list | اختیاری | دیکھیں [شرائط](#شرائط) | جب شرائط پوری ہوں تو یہ پاپ اپ کھولیں |
| `trigger_entity` | string | اختیاری | کوئی بھی entity | کسی بھی entity کی حالت کی بنیاد پر یہ پاپ اپ کھولیں، `trigger` کی سادہ شکل |
| `trigger_state` | string | اختیاری (**لازمی** اگر `trigger_entity` متعین ہو) | کوئی بھی entity حالت | پاپ اپ کھولنے کے لیے entity کی حالت |
| `trigger_close` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب شرائط مزید پوری نہ ہوں تو پاپ اپ بند کریں۔ اگر آپ پرانی `trigger_entity` اور `trigger_state` جوڑی استعمال کریں تو ڈیفالٹ `false` ہوتا ہے |
| `open_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | پاپ اپ کھلتے وقت ایک ایکشن ٹریگر کریں |
| `close_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | پاپ اپ بند ہوتے وقت ایک ایکشن ٹریگر کریں |
| `show_header` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | پاپ اپ کا ہیڈر مکمل طور پر دکھائیں/چھپائیں |
| `show_previous_button` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | کلوز بٹن کے ساتھ ایک پیچھے کا بٹن دکھائیں اور دستیاب ہونے پر پچھلے پاپ اپ پر واپس جائیں |
| `show_close_button` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | باقی ہیڈر کو مرئی رکھتے ہوئے کلوز بٹن دکھائیں یا چھپائیں |
| `buttons_position` | string | اختیاری | `right` (ڈیفالٹ) یا `left` | ہیڈر میں کلوز اور پیچھے کے بٹنوں کی پوزیشن |
| `cards` | list | اختیاری | کوئی بھی Bubble Card، Home Assistant کارڈ یا کسٹم کارڈ | اپنے پاپ اپ کا مواد متعین کریں۔ نیچے دی گئی پاپ اپ مثال دیکھیں۔ |
| آپ کو پاپ اپ کے ہیڈر کے لیے [تمام بٹن سیٹنگز](#بٹن) تک بھی رسائی حاصل ہے۔ | | اختیاری | | اگر متعین نہ ہو تو کوئی ہیڈر نہیں دکھایا جائے گا |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | پاپ اپ کا بارڈر ریڈیئس |
| `--bubble-pop-up-main-background-color` | `color` | پاپ اپ کے معاون عناصر کا مرکزی پس منظر رنگ |
| `--bubble-pop-up-background-color` | `color` | پاپ اپ کا پس منظر رنگ |
| `--bubble-backdrop-background-color` | `color` | بیک ڈراپ کا پس منظر رنگ |
| آپ کو پاپ اپ کے ہیڈر کے لیے [تمام بٹن CSS متغیرات](#بٹن-کے-اختیارات) تک بھی رسائی حاصل ہے۔ | | |

</details>


### علیحدہ پاپ اپ فارمیٹ (v3.2.0+)

v3.2.0 سے، پاپ اپس ایک نئے علیحدہ فارمیٹ کا استعمال کرتے ہیں جہاں مواد کے کارڈز کو `cards` آپشن کا استعمال کرتے ہوئے براہ راست پاپ اپ کے اندر متعین کیا جاتا ہے۔ یہ بہتر کارکردگی اور سیکشن پر مبنی ایک نیا ڈریگ اینڈ ڈراپ ایڈیٹنگ تجربہ فراہم کرتا ہے۔


#### مثالیں

<details>

<summary>ایک پاپ اپ (علیحدہ فارمیٹ)</summary>

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

<summary>پاپ اپ کھولنے کے لیے ایک بٹن</summary>

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

## افقی بٹنوں کا اسٹیک

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

یہ کارڈ پاپ اپ کارڈ کا ایک اچھا ساتھی ہے، جو آپ کو متعلقہ پاپ اپس کھولنے دیتا ہے۔ یہ آپ کو اپنے ڈیش بورڈ کا کوئی بھی صفحہ کھولنے کی سہولت بھی دیتا ہے۔ اس کے علاوہ، آپ اپنے موشن/آکیوپینسی سینسرز شامل کر سکتے ہیں تاکہ بٹنوں کی ترتیب اس کمرے کے مطابق ڈھل جائے جس میں آپ ابھی داخل ہوئے ہیں۔ یہ کارڈ اسکرول ہو سکتا ہے، مرئی رہتا ہے، اور فوٹر کے طور پر کام کرتا ہے۔

> [!IMPORTANT]  
> یہ کارڈ آپ کے ویو میں سب سے آخری ہونا چاہیے (ہر کارڈ اور پاپ اپ کے بعد)۔ یہ کسی بھی اسٹیک کے اندر نہیں ہو سکتا۔

### افقی بٹنوں کے اسٹیک کے اختیارات

<details>

<summary><b>اختیارات (YAML + تفصیلات)</b></summary>

| نام | قسم | ضرورت | معاون آپشنز | تفصیل |
| --- | --- | --- | --- | --- |
| `1_link` | string | **لازمی** | پاپ اپ ہیش (مثلاً `'#kitchen'`) بغیر ' ' کے یا کوئی بھی لنک | کھولنے کے لیے ایک لنک |
| `1_name` | string | اختیاری | کوئی بھی سٹرنگ | آپ کے بٹن کے لیے ایک نام |
| `1_icon` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے بٹن کے لیے ایک آئیکن |
| `1_entity` | string | اختیاری | کوئی بھی لائٹ یا لائٹ گروپ | پس منظر میں اس لائٹ کا رنگ دکھائیں |
| `1_pir_sensor` | string | اختیاری | کوئی بھی بائنری سینسر | `auto_order` کے لیے کم از کم ایک یا زیادہ pir سینسر، حقیقت میں یہ کسی بھی entity قسم کے ساتھ بھی کام کرتا ہے، مثال کے طور پر آپ لائٹ گروپس شامل کر سکتے ہیں اور ترتیب آخری تبدیل شدہ حالتوں کی بنیاد پر بدل جائے گی۔ |
| `auto_order` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | `_pir_sensor` کی آخری تبدیلی کے وقت کے مطابق بٹنوں کی ترتیب بدلیں، **اگر آپ کے کوڈ میں کوئی `_pir_sensor` نہیں ہے تو اسے `false` ہونا چاہیے** |
| `margin` | string | اختیاری | کوئی بھی CSS قدر | یہ **صرف** اس وقت استعمال کریں جب آپ کا `horizontal-buttons-stack` موبائل پر اچھی طرح مرکز میں نہ ہو (مثلاً `13px`) |
| `width_desktop` | string | اختیاری | کوئی بھی CSS قدر | ڈیسک ٹاپ پر چوڑائی (موبائل پر ڈیفالٹ `100%`) |
| `is_sidebar_hidden` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اگر ڈیسک ٹاپ پر سائیڈ بار چھپا ہوا ہو تو افقی بٹنوں کے اسٹیک کی پوزیشن ٹھیک کریں (صرف اگر آپ نے خود اسے چھپانے کے لیے کوئی تبدیلی کی ہو) |
| `rise_animation` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | صفحہ لوڈ ہونے کے بعد فعال ہونے والی اینیمیشن کو غیر فعال کرنے کے لیے اسے `false` سیٹ کریں |
| `highlight_current_view` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | موجودہ ہیش/ویو کو ایک ہموار اینیمیشن کے ساتھ نمایاں کریں |
| `hide_gradient` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | گریڈیئنٹ چھپانے کے لیے اسے `false` سیٹ کریں |

> [!IMPORTANT]  
> نمبر سے شروع ہونے والے متغیرات آپ کے بٹنز کو متعین کرتے ہیں، مزید بٹنز شامل کرنے کے لیے بس یہ نمبر بدلیں (نیچے دی گئی مثال دیکھیں)۔

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | افقی بٹنوں کے اسٹیک بٹنز کا بارڈر ریڈیئس |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | افقی بٹنوں کے اسٹیک بٹنز کا پس منظر رنگ |

</details>


#### مثال

<details>

<summary>ایک افقی بٹنوں کا اسٹیک جو آکیوپینسی سینسرز کی بنیاد پر خود کو دوبارہ ترتیب دیتا ہے</summary>

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

## بٹن

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

یہ کارڈ بہت لچکدار ہے۔ اسے **سوئچ**، **سلائیڈر**، **اسٹیٹ** یا **نام/متن** بٹن کے طور پر استعمال کیا جا سکتا ہے۔

> [!TIP]
> ### تمام بٹن اقسام میں کیا فرق ہے؟
>
> - **سوئچ بٹن:** یہ ڈیفالٹ بٹن قسم ہے۔ بطور ڈیفالٹ یہ ایک انٹیٹی کو ٹوگل کرتا ہے اور اس کا بیک گراؤنڈ رنگ انٹیٹی کی حالت یا لائٹ کے رنگ کی بنیاد پر تبدیل ہوتا ہے۔ آپ اس کا ایکشن **Tap action on card** سیکشن میں تبدیل کر سکتے ہیں۔
>
> - **سلائیڈر بٹن:** یہ بٹن قسم آپ کو ایڈجسٹ ایبل رینج والی انٹیٹیز کنٹرول کرنے دیتی ہے۔ یہ لائٹس مدھم کرنے کے لیے بہترین ہے، اور اس کا فل کلر لائٹ کے رنگ کے مطابق ڈھل جاتا ہے۔ آپ اسے قدریں دکھانے کے لیے بھی استعمال کر سکتے ہیں، جیسے بیٹری لیول۔
>   سلائیڈرز کے لیے سپورٹ شدہ انٹیٹیز:
>   - لائٹ (برائٹنس)
>   - میڈیا پلیئر (والیوم)
>   - کور (پوزیشن)
>   - فین (فیصد)
>   - کلائمیٹ (درجہ حرارت)
>   - ان پٹ نمبر اور نمبر (قدر)
>   - بیٹری سینسر (فیصد، صرف پڑھنے کے قابل)
>
>   آپ کسی بھی نیومرک اسٹیٹ والی انٹیٹی کو بھی استعمال کر سکتے ہیں، اس کے لیے **Slider settings** میں انٹیٹی فلٹر کو غیر فعال کریں، پھر `min` اور `max` قدریں متعین کریں۔ یہ آپشن صرف پڑھنے کے قابل ہے۔
>
> - **اسٹیٹ بٹن:** کسی سینسر یا کسی بھی انٹیٹی سے معلومات دکھانے کے لیے بہترین۔ جب آپ اسے دبائیں گے تو یہ انٹیٹی کا "More info" پینل دکھائے گا۔ اس کا بیک گراؤنڈ رنگ تبدیل نہیں ہوتا۔
>
> - **نام/متن بٹن:** واحد بٹن قسم جسے انٹیٹی کی ضرورت نہیں۔ یہ آپ کو مختصر متن، نام یا عنوان دکھانے دیتا ہے۔ آپ اس میں ایکشنز بھی شامل کر سکتے ہیں۔ اس کا بیک گراؤنڈ رنگ تبدیل نہیں ہوتا۔

### بٹن کے اختیارات

<details>

<summary><b>اختیارات (YAML + وضاحتیں)</b></summary>

| نام | قسم | ضرورت | سپورٹ شدہ اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `entity` | string | **لازمی** | کوئی بھی انٹیٹی | کنٹرول کرنے کے لیے ایک انٹیٹی |
| `button_type` | string | اختیاری | `switch` (ڈیفالٹ)، `slider`، `state` یا `name` | آپ کے بٹن کا رویہ |
| `name` | string | اختیاری | کوئی بھی string | آپ کے بٹن کے لیے ایک نام، اگر متعین نہ ہو تو انٹیٹی کا نام دکھایا جائے گا |
| `icon` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے بٹن کے لیے ایک آئیکن، اگر متعین نہ ہو تو انٹیٹی آئیکن یا `entity-picture` دکھایا جائے گا |
| `force_icon` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | `entity-picture` کے بجائے آئیکن کو ترجیح دیں |
| `use_accent_color` | boolean | اختیاری (`false` ڈیفالٹ) | **صرف لائٹس کے لیے۔** لائٹ کے رنگ کے بجائے تھیم کا ایکسنٹ رنگ استعمال کریں۔                         |
| `show_state` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی حالت دکھائیں یا چھپائیں |
| `show_name` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | نام دکھائیں یا چھپائیں |
| `show_icon` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | آئیکن دکھائیں یا چھپائیں |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری تبدیلی وقت دکھائیں |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری اپڈیٹ وقت دکھائیں |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی ایک attribute اس کے `name` کے نیچے دکھائیں |
| `attribute` | string | اختیاری (اگر `show_attribute` کو `true` سیٹ کیا گیا ہو تو لازمی) | آپ کی `entity` سے ایک attribute | دکھانے کے لیے attribute (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب مواد کنٹینر کے سائز سے تجاوز کرے تو متن کو اسکرول ہونے دیں |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، نیچے دیکھیں | بٹن کلک پر ڈیفالٹ ایکشنز تبدیل کرنے دیں۔ |
| `tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا |
| `double_tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن ڈبل کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا |
| `hold_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن دبائے رکھنے پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا |
| `card_layout` | string | اختیاری | `normal` (ڈیفالٹ اگر سیکشن ویو میں نہ ہو)، `large` (ڈیفالٹ اگر سیکشن ویو میں ہو)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | صفوں کی تعداد (اونچائی) (مثلاً `2`) |
| `sub_button` | object | اختیاری | دیکھیں [ذیلی بٹن](#ذیلی-بٹن) | دائیں طرف مقرر شدہ حسب ضرورت بٹن شامل کریں |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | بٹن میں سپورٹ شدہ عناصر کا مرکزی بیک گراؤنڈ رنگ |
| `--bubble-button-border-radius` | `px` | بٹن کے لیے بارڈر ریڈیئس |
| `--bubble-button-icon-border-radius` | `px` | بٹن آئیکن کنٹینر کے لیے بارڈر ریڈیئس |
| `--bubble-button-icon-background-color` | `color` | بٹن آئیکن کنٹینر کا بیک گراؤنڈ رنگ |
| `--bubble-light-white-color` | `color` | لائٹ بٹنوں/سلائیڈرز کا ڈیفالٹ سفید رنگ تبدیل کریں |
| `--bubble-light-color` | `color` | لائٹ بٹنوں/سلائیڈرز کا رنگ تبدیل کریں (RGB لائٹس بھی) |
| `--bubble-button-box-shadow` | دیکھیں [باکس شیڈو](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | بٹن کے لیے باکس شیڈو |

</details>

یہ اختیارات صرف اس وقت دستیاب ہیں جب `button_type` کو `slider` پر سیٹ کیا گیا ہو۔

<details>

<summary><b>سلائیڈر اختیارات (YAML + وضاحتیں)</b></summary>

| نام                  | قسم    | ضرورت                     | تفصیل                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | اختیاری                        | سلائیڈر کی کم از کم قدر۔ حسب ضرورت سلائیڈرز کے لیے۔                                                    |
| `max_value`             | number  | اختیاری                        | سلائیڈر کی زیادہ سے زیادہ قدر۔ حسب ضرورت سلائیڈرز کے لیے۔                                                    |
| `step`                  | number  | اختیاری                        | سلائیڈر کی سٹیپ قدر۔                                                                                           |
| `tap_to_slide`          | boolean | اختیاری (`false` ڈیفالٹ)      | پرانا سلائیڈر رویہ فعال کریں جہاں دبائے رکھنے کے بجائے تھپتھپا کر سلائیڈر فعال کیا جاتا ہے۔        |
| `relative_slide`        | boolean | اختیاری (`false` ڈیفالٹ )     | شروعاتی ٹچ پوائنٹ کے بجائے شروعاتی قدر کے نسبت قدر اپڈیٹ کریں۔                                      |
| `read_only_slider`      | boolean | اختیاری (`false` ڈیفالٹ)      | سلائیڈر کو صرف پڑھنے کے قابل بنائیں۔ کچھ انٹیٹیز جیسے سینسرز کے لیے خودکار فعال۔                                        |
| `slider_live_update`    | boolean | اختیاری (`false` ڈیفالٹ)      | سلائیڈ کرتے وقت انٹیٹی کی حالت اپڈیٹ ہوتی ہے۔ **یہ فیچر تمام انٹیٹیز کے لیے تجویز کردہ نہیں ہے۔**        |
| `slider_fill_orientation` | string | اختیاری | `left`، `right`، `top` یا `bottom` | سلائیڈر کی فل سمت تبدیل کریں۔ غیر متعین ہونے پر بائیں سے دائیں، اور [دائیں سے بائیں لکھی جانے والی زبانوں](#لوکلائزیشن) میں الٹ |
| `slider_value_position` | string | اختیاری | `right`، `left`، `center` یا `hidden` | قدر ڈسپلے کی پوزیشن۔ غیر متعین ہونے پر دائیں طرف، اور [دائیں سے بائیں لکھی جانے والی زبانوں](#لوکلائزیشن) میں بائیں طرف |
| `invert_slider_value` | boolean | اختیاری (`false` ڈیفالٹ) | سلائیڈر کی سمت الٹ دیں (100% فل کم از کم کے برابر ہوگا)۔ کلر سلائیڈرز کے لیے دستیاب نہیں۔ |
| `light_slider_type` | string | اختیاری | `brightness` (ڈیفالٹ)، `hue`، `saturation`، `white_temp` | **صرف لائٹس کے لیے۔** سلائیڈر موڈ منتخب کریں |
| `cover_slider_type` | string | اختیاری | `position` (ڈیفالٹ)، `tilt_position` | **صرف کورز کے لیے۔** سلائیڈر موڈ منتخب کریں (پوزیشن یا ٹِلٹ) |
| `hue_force_saturation` | boolean | اختیاری (`false` ڈیفالٹ) | **صرف لائٹس کے لیے (Hue موڈ)۔** Hue ایڈجسٹ کرتے وقت سیچوریشن فورس کریں |
| `hue_force_saturation_value` | number | اختیاری (`100` ڈیفالٹ) | **صرف لائٹس کے لیے (Hue موڈ)۔** فورس شدہ سیچوریشن قدر (0-100) |
| `use_accent_color` | boolean | اختیاری (`false` ڈیفالٹ) | **صرف لائٹس کے لیے (Brightness موڈ)۔** لائٹ کے رنگ کے بجائے تھیم ایکسنٹ رنگ استعمال کریں |
| `allow_light_slider_to_0` | boolean | اختیاری (`false` ڈیفالٹ)    | **صرف لائٹس کے لیے۔** سلائیڈر کو 0% تک پہنچنے دیتا ہے، جو لائٹ بند کر دیتا ہے۔ `tap_to_slide` کے ساتھ دستیاب نہیں۔ |
| `light_transition`      | boolean | اختیاری (`false` ڈیفالٹ)      | **صرف لائٹس کے لیے۔** سپورٹ شدہ لائٹس کے لیے ہموار برائٹنس ٹرانزیشن فعال کریں۔                           |
| `light_transition_time` | number  | اختیاری (`500` ڈیفالٹ)        | **صرف لائٹس کے لیے۔** ملی سیکنڈز میں ٹرانزیشن وقت۔ `light_transition: true` درکار ہے۔            |

</details>

#### مثالیں

<details>

<summary>ایک سلائیڈر بٹن جو لائٹ کی برائٹنس کنٹرول کر سکتا ہے</summary>

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

<summary>مزید اختیارات کے ساتھ ایک بٹن</summary>

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

## میڈیا پلیئر

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

یہ کارڈ آپ کو میڈیا پلیئر انٹیٹی کنٹرول کرنے دیتا ہے۔

### میڈیا پلیئر کے اختیارات

<details>

<summary><b>اختیارات (YAML + وضاحتیں)</b></summary>

| نام | قسم | ضرورت | سپورٹ شدہ اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `entity` | string | **لازمی** | کوئی بھی میڈیا پلیئر | کنٹرول کرنے کے لیے میڈیا پلیئر |
| `name` | string | اختیاری | کوئی بھی string | آپ کے میڈیا پلیئر کے لیے ایک نام، اگر متعین نہ ہو تو انٹیٹی کا نام دکھایا جائے گا |
| `icon` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے میڈیا پلیئر کے لیے ایک آئیکن، اگر متعین نہ ہو تو انٹیٹی آئیکن یا `entity-picture` دکھایا جائے گا |
| `force_icon` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | `entity-picture` کے بجائے آئیکن کو ترجیح دیں |
| `show_state` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی حالت دکھائیں یا چھپائیں |
| `show_name` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | نام دکھائیں یا چھپائیں |
| `show_icon` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | آئیکن دکھائیں یا چھپائیں |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری تبدیلی وقت دکھائیں |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری اپڈیٹ وقت دکھائیں |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی ایک attribute اس کے `name` کے نیچے دکھائیں |
| `attribute` | string | اختیاری (اگر `show_attribute` کو `true` سیٹ کیا گیا ہو تو لازمی) | آپ کی `entity` سے ایک attribute | دکھانے کے لیے attribute (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب مواد کنٹینر کے سائز سے تجاوز کرے تو متن کو اسکرول ہونے دیں |
| `min_volume` | number | اختیاری | کوئی بھی نمبر | والیوم سلائیڈر کی کم از کم قدر۔ |
| `max_volume` | number | اختیاری | کوئی بھی نمبر | والیوم سلائیڈر کی زیادہ سے زیادہ قدر۔ |
| `cover_background` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | کارڈ کے بیک گراؤنڈ کے طور پر دھندلا میڈیا کور استعمال کریں۔ |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | بٹن کلک پر ڈیفالٹ ایکشنز تبدیل کرنے دیں۔ |
| `tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |
| `double_tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن ڈبل کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا۔ |
| `hold_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن دبائے رکھنے پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |
| `main_buttons_position` | string | اختیاری | `default` یا `bottom` | کور ایکشن بٹنوں کو نیچے (فکسڈ) منتقل کریں |
| `main_buttons_full_width` | boolean | اختیاری | `true` یا `false` | نیچے کے ایکشن بٹنوں کو مکمل چوڑائی بنائیں (ڈیفالٹ: `true` جب پوزیشن `bottom` ہو) |
| `main_buttons_alignment` | string | اختیاری | `end` (ڈیفالٹ)، `center`، `start`، `space-between` | جب مکمل چوڑائی نہ ہو تو نیچے کے ایکشن بٹنوں کی سیدھ |
| `card_layout` | string | اختیاری | `normal` (ڈیفالٹ اگر سیکشن ویو میں نہ ہو)، `large` (ڈیفالٹ اگر سیکشن ویو میں ہو)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | صفوں کی تعداد (اونچائی) (مثلاً `2`) |
| `sub_button` | object | اختیاری | دیکھیں [ذیلی بٹن](#ذیلی-بٹن) | دائیں طرف مقرر شدہ حسب ضرورت بٹن شامل کریں |
| `hide` | object | اختیاری | نیچے دیکھیں | کارڈ سے بٹن چھپائیں |

#### چھپانے کے اختیارات

| نام | قسم | ضرورت | سپورٹ شدہ اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | پلے/پاز بٹن چھپائیں |
| `volume_button` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | والیوم بٹن چھپائیں |
| `previous_button` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | پچھلا بٹن چھپائیں |
| `next_button` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اگلا بٹن چھپائیں |
| `power_button` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | پاور بٹن چھپائیں |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | میڈیا پلیئر کا مرکزی بیک گراؤنڈ رنگ |
| `--bubble-media-player-border-radius` | `px` | میڈیا پلیئر کے لیے بارڈر ریڈیئس |
| `--bubble-media-player-buttons-border-radius` | `px` | میڈیا پلیئر بٹنوں کے لیے بارڈر ریڈیئس |
| `--bubble-media-player-slider-background-color` | `color` | والیوم سلائیڈر کا بیک گراؤنڈ رنگ |
| `--bubble-media-player-icon-border-radius` | `px` | میڈیا پلیئر آئیکن کنٹینر کے لیے بارڈر ریڈیئس |
| `--bubble-media-player-icon-background-color` | `color` | میڈیا پلیئر آئیکن کنٹینر کا بیک گراؤنڈ رنگ |
| `--bubble-media-player-box-shadow` | دیکھیں [باکس شیڈو](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | میڈیا پلیئر کے لیے باکس شیڈو |

</details>


#### مثالیں

<details>

<summary>تمام اختیارات کے ساتھ ایک میڈیا پلیئر</summary>

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

## کور

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

یہ کارڈ آپ کو اپنی `cover` انٹیٹیز کنٹرول کرنے دیتا ہے۔

### کور کے اختیارات

<details>

<summary><b>اختیارات (YAML + وضاحتیں)</b></summary>

| نام | قسم | ضرورت | سپورٹ شدہ اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `entity` | string | **لازمی** | کوئی بھی کور | کنٹرول کرنے کے لیے ایک کور |
| `name` | string | اختیاری | کوئی بھی string | آپ کے کور کے لیے ایک نام، اگر متعین نہ ہو تو انٹیٹی کا نام دکھایا جائے گا |
| `force_icon` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | `entity-picture` کے بجائے آئیکن کو ترجیح دیں |
| `show_state` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی حالت دکھائیں یا چھپائیں |
| `show_name` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | نام دکھائیں یا چھپائیں |
| `show_icon` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | آئیکن دکھائیں یا چھپائیں |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری تبدیلی وقت دکھائیں |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری اپڈیٹ وقت دکھائیں |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی ایک attribute اس کے `name` کے نیچے دکھائیں |
| `attribute` | string | اختیاری (اگر `show_attribute` کو `true` سیٹ کیا گیا ہو تو لازمی) | آپ کی `entity` سے ایک attribute | دکھانے کے لیے attribute (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب مواد کنٹینر کے سائز سے تجاوز کرے تو متن کو اسکرول ہونے دیں |
| `icon_open` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے کھلے کور کے لیے ایک آئیکن، اگر متعین نہ ہو تو ڈیفالٹ کھلا کور آئیکن دکھایا جائے گا |
| `icon_close` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے بند کور کے لیے ایک آئیکن، اگر متعین نہ ہو تو ڈیفالٹ بند کور آئیکن دکھایا جائے گا |
| `icon_up` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے کور کھولنے کے بٹن کے لیے ایک آئیکن، اگر متعین نہ ہو تو ڈیفالٹ کھلا کور آئیکن دکھایا جائے گا |
| `icon_down` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے کور بند کرنے کے بٹن کے لیے ایک آئیکن، اگر متعین نہ ہو تو ڈیفالٹ بند کور آئیکن دکھایا جائے گا |
| `open_service` | string | اختیاری | کوئی بھی سروس یا اسکرپٹ | آپ کے کور کو کھولنے کے لیے ایک سروس، ڈیفالٹ `cover.open_cover` |
| `stop_service` | string | اختیاری | کوئی بھی سروس یا اسکرپٹ | آپ کے کور کو روکنے کے لیے ایک سروس، ڈیفالٹ `cover.stop_cover` |
| `close_service` | string | اختیاری | کوئی بھی سروس یا اسکرپٹ | آپ کے کور کو بند کرنے کے لیے ایک سروس، ڈیفالٹ `cover.close_cover` |
| `tilt_buttons` | string | اختیاری | `top` (ڈیفالٹ)، `bottom`، `left`، `right`، `hidden` | ٹِلٹ کنٹرول بٹنوں کی پوزیشن (صرف اس وقت دکھایا جاتا ہے جب کور ٹِلٹ سپورٹ کرے) |
| `open_tilt_service` | string | اختیاری | کوئی بھی سروس یا اسکرپٹ | ٹِلٹ کھولنے کے لیے ایک سروس، ڈیفالٹ `cover.open_cover_tilt` |

| `close_tilt_service` | string | اختیاری | کوئی بھی سروس یا اسکرپٹ | ٹِلٹ بند کرنے کے لیے ایک سروس، ڈیفالٹ `cover.close_cover_tilt` |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | بٹن کلک پر ڈیفالٹ ایکشنز تبدیل کرنے دیں۔ |
| `tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |
| `double_tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن ڈبل کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا۔ |
| `hold_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن دبائے رکھنے پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |
| `main_buttons_position` | string | اختیاری | `default` یا `bottom` | میڈیا کنٹرولز کو نیچے (فکسڈ) منتقل کریں |
| `main_buttons_full_width` | boolean | اختیاری | `true` یا `false` | نیچے کے کنٹرولز کو مکمل چوڑائی بنائیں (ڈیفالٹ: `true` جب پوزیشن `bottom` ہو) |
| `main_buttons_alignment` | string | اختیاری | `end` (ڈیفالٹ)، `center`، `start`، `space-between` | جب مکمل چوڑائی نہ ہو تو نیچے کے کنٹرولز کی سیدھ |
| `card_layout` | string | اختیاری | `normal` (ڈیفالٹ اگر سیکشن ویو میں نہ ہو)، `large` (ڈیفالٹ اگر سیکشن ویو میں ہو)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | صفوں کی تعداد (اونچائی) (مثلاً `2`) |
| `sub_button` | object | اختیاری | دیکھیں [ذیلی بٹن](#ذیلی-بٹن) | دائیں طرف مقرر شدہ حسب ضرورت بٹن شامل کریں |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | کور کارڈ میں سپورٹ شدہ عناصر کا مرکزی بیک گراؤنڈ رنگ |
| `--bubble-cover-border-radius` | `px` | کور کارڈ کے لیے بارڈر ریڈیئس |
| `--bubble-cover-icon-border-radius` | `px` | کور کارڈ آئیکن کنٹینر کے لیے بارڈر ریڈیئس |
| `--bubble-cover-icon-background-color` | `color` | کور کارڈ آئیکن کنٹینر کا بیک گراؤنڈ رنگ |
| `--bubble-cover-box-shadow` | دیکھیں [باکس شیڈو](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | کور کارڈ کے لیے باکس شیڈو |
| `--bubble-button-box-shadow` | دیکھیں [باکس شیڈو](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | کور کارڈ میں بٹنوں کے لیے باکس شیڈو |

</details>


#### مثال

<details>

<summary>ایک کارڈ جو رولر شیڈ کنٹرول کر سکتا ہے</summary>

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

## سلیکٹ

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

یہ کارڈ آپ کو اپنی `input_select` / `select` انٹیٹیز کے لیے ڈراپ ڈاؤن مینو شامل کرنے دیتا ہے۔ یہ کارڈ ذیلی بٹن اور تمام عام Bubble Card خصوصیات کو بھی سپورٹ کرتا ہے۔

> [!TIP]
> آپ چاہیں تو سلیکٹ ذیلی بٹن بھی رکھ سکتے ہیں، یہ خصوصیت ان تمام کارڈز میں دستیاب ہے جو ذیلی بٹن سپورٹ کرتے ہیں۔

### سلیکٹ کے اختیارات

<details>

<summary><b>اختیارات (YAML + وضاحتیں)</b></summary>

| نام | قسم | ضرورت | سپورٹ شدہ اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `entity` | string | **لازمی** | کوئی بھی انٹیٹی | کنٹرول کرنے کے لیے ایک انٹیٹی |
| `name` | string | اختیاری | کوئی بھی string | آپ کے سلیکٹ کے لیے ایک نام، اگر متعین نہ ہو تو انٹیٹی کا نام دکھایا جائے گا |
| `icon` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے سلیکٹ کے لیے ایک آئیکن، اگر متعین نہ ہو تو انٹیٹی آئیکن یا `entity-picture` دکھایا جائے گا |
| `force_icon` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | `entity-picture` کے بجائے آئیکن کو ترجیح دیں |
| `show_state` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی حالت دکھائیں یا چھپائیں |
| `show_name` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | نام دکھائیں یا چھپائیں |
| `show_icon` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | آئیکن دکھائیں یا چھپائیں |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری تبدیلی وقت دکھائیں |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کا آخری اپڈیٹ وقت دکھائیں |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آپ کے `entity` کی ایک attribute اس کے `name` کے نیچے دکھائیں |
| `attribute` | string | اختیاری (اگر `show_attribute` کو `true` سیٹ کیا گیا ہو تو لازمی) | آپ کی `entity` سے ایک attribute | دکھانے کے لیے attribute (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب مواد کنٹینر کے سائز سے تجاوز کرے تو متن کو اسکرول ہونے دیں |
| `tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |
| `double_tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن ڈبل کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا۔ |
| `hold_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن دبائے رکھنے پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |
| `card_layout` | string | اختیاری | `normal` (ڈیفالٹ اگر سیکشن ویو میں نہ ہو)، `large` (ڈیفالٹ اگر سیکشن ویو میں ہو)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | صفوں کی تعداد (اونچائی) (مثلاً `2`) |
| `sub_button` | object | اختیاری | دیکھیں [ذیلی بٹن](#ذیلی-بٹن) | دائیں طرف مقرر شدہ حسب ضرورت بٹن شامل کریں |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | سلیکٹ کارڈ میں سپورٹ شدہ عناصر کا مرکزی بیک گراؤنڈ رنگ |
| `--bubble-select-background-color` | `color` | سلیکٹ کارڈ کا بیک گراؤنڈ رنگ |
| `--bubble-select-list-border-radius` | `px` | کارڈ میں ڈراپ ڈاؤن مینو کے لیے بارڈر ریڈیئس |
| `--bubble-select-list-item-accent-color` | `color` | منتخب شدہ آئٹم کے لیے ایکسنٹ رنگ |
| `--bubble-select-list-background-color` | `color` | کارڈ میں ڈراپ ڈاؤن مینو کا بیک گراؤنڈ رنگ |
| `--bubble-select-list-width` | `px` | کارڈ میں ڈراپ ڈاؤن مینو کی چوڑائی |
| `--bubble-select-arrow-background-color` | `color` | ڈراپ ڈاؤن ایرو کا بیک گراؤنڈ رنگ |
| `--bubble-select-button-border-radius` | `px` | سلیکٹ بٹن کے لیے بارڈر ریڈیئس |
| `--bubble-select-border-radius` | `px` | سلیکٹ کارڈ کے لیے بارڈر ریڈیئس |
| `--bubble-select-icon-border-radius` | `px` | سلیکٹ کارڈ آئیکن کنٹینر کے لیے بارڈر ریڈیئس |
| `--bubble-select-icon-background-color` | `color` | سلیکٹ کارڈ آئیکن کنٹینر کا بیک گراؤنڈ رنگ |
| `--bubble-select-box-shadow` | دیکھیں [باکس شیڈو](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | سلیکٹ کارڈ کے لیے باکس شیڈو |

</details>


#### مثالیں

<details>

<summary>مناظر کی فہرست کے ساتھ ایک سلیکٹ کارڈ</summary>

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

## کلائمیٹ

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

یہ کارڈ آپ کو اپنی `climate` انٹیٹیز کنٹرول کرنے دیتا ہے۔

> [!TIP]
> موڈ منتخب کرنے والا مینو ایک [ذیلی بٹن](#ذیلی-بٹن) ہے جو کارڈ بناتے وقت خودکار شامل ہو جاتا ہے۔ آپ اسے بعد میں اپنی مرضی کے مطابق تبدیل یا ہٹا سکتے ہیں۔

### کلائمیٹ کے اختیارات

<details>

<summary><b>اختیارات (YAML + وضاحتیں)</b></summary>

| نام                     | قسم    | ضرورت                         | سپورٹ شدہ اختیارات                                  | تفصیل                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **لازمی**                        | کلائمیٹ انٹیٹی                                   | کنٹرول کرنے کے لیے انٹیٹی (مثلاً `climate.living_room`)۔                                                            |
| `name`                  | string  | اختیاری                            | کوئی بھی string                                       | کارڈ کے لیے حسب ضرورت نام۔ اگر متعین نہ ہو تو انٹیٹی کا نام دکھایا جائے گا۔                                    |
| `icon`                  | string  | اختیاری                            | کوئی بھی `mdi:` آئیکن                                  | کارڈ کے لیے حسب ضرورت آئیکن۔ اگر متعین نہ ہو تو انٹیٹی آئیکن یا `entity-picture` استعمال ہوگا۔                   |
| `force_icon`            | boolean | اختیاری                            | `true` یا `false` (ڈیفالٹ)                     | `entity-picture` کے بجائے آئیکن کو ترجیح دیتا ہے۔                                                           |
| `show_state`            | boolean | اختیاری                            | `true` یا `false` (ڈیفالٹ)                     | `entity` کی موجودہ حالت دکھائیں یا چھپائیں۔                                                                 |
| `show_name`             | boolean | اختیاری                            | `true` (ڈیفالٹ) یا `false`                     | انٹیٹی کا نام دکھائیں یا چھپائیں۔                                                                            |
| `show_icon`             | boolean | اختیاری                            | `true` (ڈیفالٹ) یا `false`                     | آئیکن دکھائیں یا چھپائیں۔                                                                                          |
| `hide_target_temp_low`  | boolean | اختیاری (صرف ان انٹیٹیز کے لیے جو `target_temp_low` سپورٹ کرتی ہیں) | `true` یا `false` (ڈیفالٹ) | اگر `entity` سپورٹ کرے تو کم ہدف درجہ حرارت کنٹرول چھپا دیتا ہے۔                                          |
| `hide_target_temp_high` | boolean | اختیاری (صرف ان انٹیٹیز کے لیے جو `target_temp_high` سپورٹ کرتی ہیں)| `true` یا `false` (ڈیفالٹ) | اگر `entity` سپورٹ کرے تو زیادہ ہدف درجہ حرارت کنٹرول چھپا دیتا ہے۔                                         |
| `state_color`           | boolean | اختیاری                            | `true` یا `false` (ڈیفالٹ)                     | جب کلائمیٹ انٹیٹی آن ہو تو ایک مستقل بیک گراؤنڈ رنگ لاگو کرتا ہے۔                                                              |
| `step` | number | اختیاری | کوئی بھی نمبر | درجہ حرارت کا سٹیپ۔ |
| `min_temp` | number | اختیاری | کوئی بھی نمبر | کم از کم درجہ حرارت۔ |
| `max_temp` | number | اختیاری | کوئی بھی نمبر | زیادہ سے زیادہ درجہ حرارت۔ |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | بٹن کلک پر ڈیفالٹ ایکشنز تبدیل کرنے دیں۔ |
| `tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |
| `double_tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن ڈبل کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا۔ |
| `hold_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | آئیکن دبائے رکھنے پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہوگا۔ |                              |
| `main_buttons_position` | string | اختیاری | `default` یا `bottom` | کلائمیٹ ایکشن بٹنوں کو نیچے (فکسڈ) منتقل کریں |
| `main_buttons_full_width` | boolean | اختیاری | `true` یا `false` | نیچے کے ایکشن بٹنوں کو مکمل چوڑائی بنائیں (ڈیفالٹ: `true` جب پوزیشن `bottom` ہو) |
| `main_buttons_alignment` | string | اختیاری | `end` (ڈیفالٹ)، `center`، `start`، `space-between` | جب مکمل چوڑائی نہ ہو تو نیچے کے ایکشن بٹنوں کی سیدھ |
| `card_layout` | string | اختیاری | `normal` (ڈیفالٹ اگر سیکشن ویو میں نہ ہو)، `large` (ڈیفالٹ اگر سیکشن ویو میں ہو)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | صفوں کی تعداد (اونچائی) (مثلاً `2`) |
| `sub_button`            | object  | اختیاری                            | دیکھیں [ذیلی بٹن](#ذیلی-بٹن)                | دائیں طرف مقرر شدہ حسب ضرورت بٹن شامل کرتا ہے۔ کلائمیٹ موڈ سلیکٹ مینو کے لیے مفید۔                                  |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | کلائمیٹ کارڈ میں سپورٹ شدہ عناصر کا مرکزی بیک گراؤنڈ رنگ |
| `--bubble-climate-border-radius` | `px` | کلائمیٹ کارڈ کے عناصر میں سپورٹ شدہ عناصر کے لیے بارڈر ریڈیئس |
| `--bubble-climate-button-background-color` | `color` | کلائمیٹ کارڈ بٹنوں کا بیک گراؤنڈ رنگ |
| `--bubble-climate-icon-border-radius` | `px` | کلائمیٹ کارڈ آئیکن کنٹینر کے لیے بارڈر ریڈیئس |
| `--bubble-state-climate-fan-only-color` | `color` | فین اونلی حالت کے لیے اوورلے رنگ |
| `--bubble-state-climate-dry-color` | `color` | ڈرائی حالت کے لیے اوورلے رنگ |
| `--bubble-state-climate-cool-color` | `color` | کول حالت کے لیے اوورلے رنگ |
| `--bubble-state-climate-heat-color` | `color` | ہیٹ حالت کے لیے اوورلے رنگ |
| `--bubble-state-climate-auto-color` | `color` | آٹو حالت کے لیے اوورلے رنگ |
| `--bubble-state-climate-heat-cool-color` | `color` | ہیٹ کول حالت کے لیے اوورلے رنگ |
| `--bubble-climate-accent-color` | `color` | کلائمیٹ کارڈ کے لیے ایکسنٹ رنگ |
| `--bubble-climate-box-shadow` | دیکھیں [باکس شیڈو](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | کلائمیٹ کنٹینر کے لیے باکس شیڈو۔ |

</details>


#### مثالیں

<details>

<summary>HVAC موڈز کے ڈراپ ڈاؤن مینو کے ساتھ ایک کلائمیٹ کارڈ</summary>

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

## کیلنڈر

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

یہ کارڈ آپ کو اپنی کیلنڈر انٹیٹیز دکھانے دیتا ہے۔ اس کا مواد اسکرول ایبل ہے، تاکہ آپ آنے والے واقعات آسانی سے دیکھ سکیں۔

### کیلنڈر کے اختیارات

<details>

<summary><b>اختیارات (YAML + وضاحتیں)</b></summary>

| نام                | قسم    | ضرورت  | سپورٹ شدہ اختیارات                               | تفصیل                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | اختیاری     | کوئی بھی نمبر (کم از کم: 1)                        | واقعات حاصل کرنے کے لیے کیلنڈر دنوں کی تعداد، ابھی سے لے کر نویں دن کے اختتام تک (ڈیفالٹ: 7) |
| `entities`          | object  | **لازمی** | ایک کیلنڈر انٹیٹی آبجیکٹ (نیچے دیکھیں)            | کنٹرول کرنے کے لیے انٹیٹی (مثلاً `calendar.main_calendar`)۔                                 |
| `entities.entity`   | string  | **لازمی** | ایک کیلنڈر انٹیٹی                               | دکھانے کے لیے کیلنڈر انٹیٹی                                                          |
| `entities.color`    | string  | اختیاری     | ایک رنگ                                         | کیلنڈر چپ کے لیے حسب ضرورت رنگ۔ اگر متعین نہ ہو تو ایک خودکار رنگ منتخب کیا جائے گا |
| `days`              | number  | اختیاری     | کوئی بھی نمبر (کم از کم: 1)                         | واقعات حاصل کرنے کے لیے کیلنڈر دنوں کی تعداد، ابھی سے لے کر نویں دن کے اختتام تک (ڈیفالٹ: 7) |
| `limit`             | number  | اختیاری     | ایک نمبر                                        | کارڈ پر دکھائے جانے والے واقعات کی مقدار                                  |
| `show_end`          | boolean | اختیاری     | `true` یا `false` (ڈیفالٹ)                     | واقعات کا اختتامی وقت دکھائیں یا چھپائیں                                                    |
| `show_progress`     | boolean | اختیاری     | `true` (ڈیفالٹ) یا `false`                     | واقعے کی پیشرفت بار دکھائیں یا چھپائیں                                                     |
| `show_started_events`| boolean | اختیاری     | `true` (ڈیفالٹ) یا `false`                     | فی الحال جاری واقعات دکھائیں یا چھپائیں۔ کئی دنوں پر پھیلے واقعات کو ایک وقت میں ایک دن کے حساب سے پرکھا جاتا ہے، چنانچہ صرف جاری دن چھپتا ہے اور آنے والے دن نظر آتے رہتے ہیں |
| `scrolling_effect`  | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب مواد کنٹینر کے سائز سے تجاوز کرے تو متن کو اسکرول ہونے دیں |
| `event_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | واقعے کے کلک پر ایکشنز شامل کرنے دیں۔ |
| `tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | دن کے کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا۔ |
| `double_tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | دن کے ڈبل کلک پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا۔ |
| `hold_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | دن کے دبائے رکھنے پر ایکشن کی قسم متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہوگا۔ |
| `card_layout` | string | اختیاری | `normal` (ڈیفالٹ اگر سیکشن ویو میں نہ ہو)، `large` (ڈیفالٹ اگر سیکشن ویو میں ہو)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | صفوں کی تعداد (اونچائی) (مثلاً `2`) |
| `sub_button` | object | اختیاری | دیکھیں [ذیلی بٹن](#ذیلی-بٹن) | دائیں طرف مقرر شدہ حسب ضرورت بٹن شامل کریں |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر                                  | متوقع قدر | تفصیل                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | کیلنڈر کارڈ میں سپورٹ شدہ عناصر کا مرکزی بیک گراؤنڈ رنگ  |
| `--bubble-calendar-border-radius`         | `px`           | کیلنڈر کارڈ کے عناصر میں سپورٹ شدہ عناصر کے لیے بارڈر ریڈیئس |
| `--bubble-calendar-height`                | `px`           | کیلنڈر کارڈ کی اونچائی                                        |

</details>

#### مثالیں

<details>

<summary>محدود مقدار میں واقعات کے ساتھ ایک کیلنڈر کارڈ</summary>

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

<summary>اختتامی وقت اور پیشرفت بار کے ساتھ ایک کیلنڈر کارڈ</summary>

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


## جداکار

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

یہ کارڈ آپ کے پاپ اپ کو زمروں/سیکشنز میں تقسیم کرنے کے لیے ایک سادہ جداکار ہے۔ مثلاً لائٹس، ڈیوائسز، کورز، سیٹنگز، آٹومیشنز...

### جداکار کے اختیارات

<details>

<summary><b>اختیارات (YAML اور تفصیلات)</b></summary>

| نام | نوعیت | تقاضا | معاون اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `name` | string | اختیاری لیکن تجویز کردہ | کوئی بھی سٹرنگ | آپ کے جداکار کے لیے ایک نام |
| `icon` | string | اختیاری لیکن تجویز کردہ | کوئی بھی `mdi:` آئیکن | آپ کے جداکار کے لیے ایک آئیکن |
| `card_layout` | string | اختیاری | `normal` (سیکشن ویو میں نہ ہونے پر ڈیفالٹ)، `large` (سیکشن ویو میں ہونے پر ڈیفالٹ)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | قطاروں کی تعداد (اونچائی) (مثلاً `2`) |
| `sub_button` | object | اختیاری | دیکھیں [ذیلی بٹن](#ذیلی-بٹن) | دائیں طرف فکس کردہ حسب ضرورت بٹن شامل کریں |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | جداکار میں لائن کا پس منظر رنگ |

</details>

#### مثال

<details>

<summary>"کورز" سیکشن کے لیے ایک جداکار/تقسیم کنندہ</summary>

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

## خالی کالم

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

یہ کارڈ ایک خالی کالم بھرنے کے لیے موجود ہے۔ یہ اس وقت مفید ہے جب آپ کے پاپ اپ میں صرف ایک کارڈ کے ساتھ `horizontal-stack` ہو۔ اس اسکرین شاٹ کے نیچے دائیں کونے پر نظر ڈالیں تاکہ اسے (نہ) دیکھیں۔

### خالی کالم کے اختیارات

اس کارڈ کے پاس کوئی اختیارات نہیں ہیں اور یہ [اسٹائلنگ](#اسٹائلنگ) کو معاونت نہیں دیتا، البتہ یہ HA سیکشنز کے لیے لے آؤٹ کے اختیارات معاونت دیتا ہے۔

#### مثال

<details>

<summary>ایک افقی اسٹیک میں خالی کالم</summary>

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

## صرف ذیلی بٹن

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

یہ کارڈ صرف ذیلی بٹن کے لیے مخصوص ہے۔ یہ مینوز، فوری ایکشنز، معلوماتی چپس، یا صفحے کے نیچے ایک فکس فوٹر کے لیے بہترین ہے۔

> [!IMPORTANT]  
> یہ کارڈ نئی ذیلی بٹن اسکیما استعمال کرتا ہے۔ اپنے بٹن بیان کرنے کے لیے `sub_button.bottom` استعمال کریں۔ `sub_button.main` سیکشن نظر انداز کر دیا جاتا ہے۔

### صرف ذیلی بٹن کے اختیارات

<details>

<summary><b>اختیارات (YAML اور تفصیلات)</b></summary>

| نام | نوعیت | تقاضا | معاون اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **لازمی** | دیکھیں [ذیلی بٹن](#ذیلی-بٹن) | `bottom` سیکشن استعمال کرتے ہوئے اپنے ذیلی بٹن بیان کریں |
| `hide_main_background` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | کارڈ کا پس منظر ہٹا دیں |
| `footer_mode` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | کارڈ کو صفحے کے نیچے فکس کریں |
| `footer_full_width` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | فوٹر کو مکمل چوڑائی (100%) بنائیں |
| `footer_width` | number | اختیاری | کوئی بھی نمبر | جب `footer_full_width` کی قدر `false` ہو تو فوٹر کی چوڑائی پکسلز میں |
| `footer_bottom_offset` | number | اختیاری | کوئی بھی نمبر | صفحے کے نیچے سے فاصلہ پکسلز میں (ڈیفالٹ: `16`) |
| `card_layout` | string | اختیاری | `normal` (سیکشن ویو میں نہ ہونے پر ڈیفالٹ)، `large` (سیکشن ویو میں ہونے پر ڈیفالٹ)، `large-2-rows`، `large-sub-buttons-grid` | کارڈ کا اسٹائلنگ لے آؤٹ، دیکھیں [کارڈ کے لے آؤٹس](#کارڈ-کے-لے-آؤٹس) |
| `rows` | number | اختیاری | کوئی بھی نمبر | قطاروں کی تعداد (اونچائی) (مثلاً `2`) |

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | جب `footer_full_width` کی قدر `false` ہو تو فوٹر کی چوڑائی |
| `--bubble-footer-bottom` | `px` | فوٹر کا نیچے سے فاصلہ |
| `--bubble-footer-box-shadow` | دیکھیں [باکس شیڈو](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | فوٹر کنٹینر کے لیے باکس شیڈو |

</details>

#### مثالیں

<details>

<summary>چپس کی طرز (جیسا کہ اسکرین شاٹ میں)</summary>

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

<summary>ایک فکس فوٹر مینو</summary>

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

## ذیلی بٹن

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

ہر اس کارڈ میں جو یہ اختیار معاونت دیتا ہے، آپ اپنے کارڈز کو اور بھی زیادہ حسب ضرورت بنانے کے لیے ذیلی بٹن شامل کر سکتے ہیں۔ آپ مثال کے طور پر ایک ایسا بٹن بنا سکتے ہیں جو ویکیوم، ویدر کارڈ، یا تقریباً کوئی بھی چیز جو آپ سوچ سکتے ہیں کنٹرول کر سکے۔ یہ ذیلی بٹن تھپتھپانے کے ایکشنز اور بٹن کے زیادہ تر اختیارات کی معاونت رکھتے ہیں۔

ذیلی بٹن اب تین اقسام کی معاونت دیتے ہیں: **ڈیفالٹ (بٹن)**، **سلائیڈر**، اور **ڈراپ ڈاؤن/سلیکٹ**۔ آپ ایک ہی کارڈ میں اقسام کو ملا سکتے ہیں، ذیلی بٹن اوپر یا نیچے رکھ سکتے ہیں، اور مزید ایڈوانسڈ لے آؤٹس کے لیے انہیں گروپس میں منظم کر سکتے ہیں۔

#### ذیلی بٹن کی جگہ اور گروپس

<details>

<summary><b>ذیلی بٹن کا ڈھانچہ (main / bottom + groups)</b></summary>

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

**نوٹس:**
- `main` اور `bottom` دو آزاد سیکشنز ہیں۔ نچلے ذیلی بٹن کارڈ کے نیچے فکس رہتے ہیں۔
- `main_layout` اور `bottom_layout` `inline` (ڈیفالٹ) یا `rows` قبول کرتے ہیں تاکہ گروپس کو عمودی طور پر اسٹیک کیا جا سکے۔
- گروپس ایسے آبجیکٹس ہیں جن میں ایک `group` اری اور اختیاری `buttons_layout` (`inline` یا `column`) شامل ہوتا ہے۔
- `justify_content` صرف **نچلے گروپس** کے لیے دستیاب ہے (`start`، `center`، `end`، `fill`)۔
- جب نچلے ذیلی بٹن موجود ہوں تو کارڈ کا لے آؤٹ خودکار طور پر `large` میں تبدیل ہو جاتا ہے، سوائے اس کے کہ آپ کوئی اور لے آؤٹ خود متعین کریں۔
- پرانی طرز کی `sub_button` اریز اب بھی معاون ہیں اور انہیں `main` سیکشن کے طور پر سمجھا جاتا ہے۔

</details>

### ذیلی بٹن کے اختیارات

<details>

<summary><b>اختیارات (YAML اور تفصیل)</b></summary>

| نام | نوعیت | تقاضا | معاون اختیارات | تفصیل |
| --- | --- | --- | --- | --- |
| `entity` | string | اختیاری | کوئی بھی entity | کنٹرول کرنے کے لیے ایک entity |
| `name` | string | اختیاری | کوئی بھی سٹرنگ | آپ کے ذیلی بٹن کے لیے ایک نام، اگر متعین نہ ہو تو یہ entity کا نام دکھائے گا |
| `icon` | string | اختیاری | کوئی بھی `mdi:` آئیکن | آپ کے ذیلی بٹن کے لیے ایک آئیکن، اگر متعین نہ ہو تو یہ entity کا آئیکن یا entity picture دکھائے گا |
| `force_icon` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | آئیکن کو مجبور کریں چاہے entity picture دستیاب ہو |
| `sub_button_type` | string | اختیاری | `default`، `slider` یا `select` | ذیلی بٹن کی قسم منتخب کریں |
| `show_background` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | اپنے ذیلی بٹن کے لیے پس منظر دکھائیں، یہ آپ کی entity state کی بنیاد پر رنگ تبدیل کرے گا |
| `state_background` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب entity `on` ہو تو state کا رنگ استعمال کریں |
| `light_background` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | دستیاب ہونے پر پس منظر کے لیے لائٹ کا رنگ استعمال کریں |
| `show_state` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اپنی `entity` کی state دکھائیں یا چھپائیں |
| `show_name` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | نام دکھائیں یا چھپائیں |
| `show_icon` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | آئیکن دکھائیں یا چھپائیں |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اپنی `entity` کے آخری تبدیلی کا وقت دکھائیں |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اپنی `entity` کے آخری اپڈیٹ کا وقت دکھائیں |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اپنی `entity` کی ایک attribute اس کے `name` کے نیچے دکھائیں |
| `attribute` | string | اختیاری (اگر `show_attribute` کی قدر `true` ہو تو لازمی) | آپ کی `entity` سے ایک attribute | دکھانے کے لیے attribute (مثلاً `brightness`) |
| `select_attribute` | string | اختیاری | آپ کی `entity` کی ایک attribute فہرست (اوپر بیان کردہ معاون اختیارات دیکھیں) | یہ attribute فہرست کلک کرنے پر ایک ڈراپ ڈاؤن کھولے گی (مثلاً `effect_list`) |
| `show_arrow` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | سلیکٹ ذیلی بٹن کے لیے ڈراپ ڈاؤن ایرو دکھائیں یا چھپائیں |
| `scrolling_effect` | boolean | اختیاری | `true` (ڈیفالٹ) یا `false` | جب مواد کنٹینر کے سائز سے تجاوز کرے تو متن کو اسکرول ہونے دیں |
| `tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | ذیلی بٹن پر کلک کرنے کے ایکشن کی نوعیت متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہو گا۔ |
| `double_tap_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | ذیلی بٹن پر دوہری کلک کے ایکشن کی نوعیت متعین کریں، اگر غیر متعین ہو تو `none` استعمال ہو گا۔ |
| `hold_action` | object | اختیاری | دیکھیں [ایکشنز](#تھپتھپانے-دوہری-تھپتھپاہٹ-اور-دبائے-رکھنے-کے-ایکشنز) | ذیلی بٹن دبائے رکھنے کے ایکشن کی نوعیت متعین کریں، اگر غیر متعین ہو تو `more-info` استعمال ہو گا۔ |
| `fill_width` | boolean | اختیاری | `true` یا `false` | دستیاب چوڑائی بھریں (ڈیفالٹ: main کے لیے `false`، bottom کے لیے `true`) |
| `width` | number or string | اختیاری | کوئی بھی نمبر یا CSS لمبائی | حسب ضرورت چوڑائی (ڈیفالٹ کے طور پر main سیکشن کے لیے `px`، bottom سیکشن کے لیے `%`) |
| `custom_height` | number | اختیاری | کوئی بھی نمبر | حسب ضرورت اونچائی پکسلز میں |
| `content_layout` | string | اختیاری | `icon-left` (ڈیفالٹ)، `icon-top`، `icon-bottom`، `icon-right` | ذیلی بٹن کے اندر آئیکن کی جگہ |
| `always_visible` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | **صرف سلائیڈر۔** سلائیڈر کو تھپتھپانے پر کھولنے کے بجائے ہمیشہ دکھائیں |
| `show_button_info` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | **صرف سلائیڈر۔** جب `always_visible` فعال ہو تو آئیکن/نام/state دکھائیں |
| `visibility` | object or list | اختیاری | دیکھیں [شرائط](#شرائط) | شرائط کی بنیاد پر ذیلی بٹن دکھائیں یا چھپائیں |
| `hide_when_parent_unavailable` | boolean | اختیاری | `true` یا `false` (ڈیفالٹ) | اگر پیرنٹ کارڈ کی entity غیر دستیاب ہو تو ذیلی بٹن چھپا دیں |
| `css_class` | string | اختیاری | کوئی بھی سٹرنگ | ذیلی بٹن پر ایک اضافی CSS کلاس، تاکہ اس کا نام کچھ بھی ہو آپ اسے اپنی [اسٹائلنگ](#اسٹائلنگ) میں نشانہ بنا سکیں (مثلاً `My value` سے `.my-value` بنتا ہے) |

</details>

<details>

<summary><b>سلائیڈر ذیلی بٹن کے اختیارات (بٹن سلائیڈرز کی طرح)</b></summary>

<br>

سلائیڈر ذیلی بٹن وہی سلائیڈر اختیارات معاونت دیتے ہیں جو بٹن سلائیڈرز رکھتے ہیں، جن میں شامل ہیں:
`min_value`، `max_value`، `step`، `tap_to_slide`، `relative_slide`، `read_only_slider`، `slider_live_update`، `slider_fill_orientation`، `slider_value_position`، `invert_slider_value`، `light_slider_type`، `cover_slider_type`، `hue_force_saturation`، `hue_force_saturation_value`، `use_accent_color`، `allow_light_slider_to_0`، `light_transition`، `light_transition_time`۔

</details>

<details>

<summary><b>CSS متغیرات (دیکھیں <a href="#اسٹائلنگ">اسٹائلنگ</a>)</b></summary>

| متغیر | متوقع قدر | تفصیل |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | ذیلی بٹن کے لیے بارڈر ریڈیئس |
| `--bubble-sub-button-background-color` | `color` | ذیلی بٹن کے لیے پس منظر رنگ |
| `--bubble-sub-button-outline` | `box-shadow` | کسی ذیلی بٹن یا سلائیڈر پر صرف اسی وقت شامل ہونے والا آؤٹ لائن جب وہ عنصر اپنے پیچھے والے کارڈ جیسا ہی رنگ اختیار کر لے، جس سے وہ نظر نہ آئے (اسے ہٹانے کے لیے `none` مقرر کریں) |
| `--bubble-sub-slider-border-radius` | `px` | سلائیڈر ذیلی بٹن کے لیے بارڈر ریڈیئس |
| `--bubble-sub-slider-background-color` | `color` | سلائیڈر ذیلی بٹن کے لیے پس منظر رنگ |
| `--bubble-sub-slider-height` | `px` | ہمیشہ دکھائی دینے والے سلائیڈر ذیلی بٹن کے لیے اونچائی |
| `--bubble-sub-slider-outline` | `box-shadow` | صرف سلائیڈر ذیلی بٹن کا آؤٹ لائن، جو `--bubble-sub-button-outline` پر واپس چلا جاتا ہے |
| `--bubble-sub-button-dark-text-color` | `color` | روشن ذیلی بٹن پس منظر پر متن کا رنگ |

</details>

#### مثالیں

<details>

<summary>ویکیوم کارڈ بنانے کے لیے کچھ ذیلی بٹن کے ساتھ ایک بٹن (جیسا کہ اسکرین شاٹ میں)</summary>

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

<summary>ایک بٹن سلائیڈر جس میں روشنی دکھانے والا ایک ذیلی بٹن اور لائٹ ٹوگل کرنے والا ایک ذیلی بٹن ہو (جیسا کہ اسکرین شاٹ میں)</summary>

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

<summary>ایک بٹن جو آج اور کل کے موسم کے ساتھ اندرونی اور بیرونی درجہ حرارت دکھاتا ہے (اسکرین شاٹ شامل ہے)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> میری بدقسمتی سے یہاں ہمیشہ بادل چھائے رہتے ہیں لیکن تمام آئیکنز موسم کی بنیاد پر تبدیل ہو رہے ہیں۔

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

## کارڈ کے لے آؤٹس

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card مکمل طور پر Home Assistant کے سیکشن ویو کی معاونت کرتا ہے، آپ کارڈ کا لے آؤٹ تبدیل کر کے کارڈ کو بڑا بنا سکتے ہیں اور اپنے سیکشن ویو میں کارڈ کے زیر قبضہ کالمز یا قطاروں کی تعداد بھی تبدیل کر سکتے ہیں (صرف ان کارڈز پر جو یہ اختیار معاونت کرتے ہیں)۔ یہ لے آؤٹس دیگر تمام ویو اقسام میں بھی معاون ہیں۔

<details>

<summary><b>دستیاب کارڈ لے آؤٹس</b></summary>

| لے آؤٹ | تفصیل |
| --- | --- |
| `normal` | معمولی لے آؤٹ (سیکشن ویو کے لیے موزوں نہیں) |
| `large` | ایک بڑا لے آؤٹ جو سیکشن ویو میں منتخب کردہ قطاروں کے مطابق سائز تبدیل کرے گا (سیکشن ویو کے لیے موزوں) |
| `large-2-rows` | ذیلی بٹن کی 2 قطاروں کے ساتھ ایک بڑا لے آؤٹ جو سیکشن ویو میں منتخب کردہ قطاروں کے مطابق سائز تبدیل کرے گا (سیکشن ویو کے لیے موزوں) |
| `large-sub-buttons-grid` | یہ لے آؤٹ ذیلی بٹن کو ایک گرڈ میں دکھائے گا، `rows` کم از کم `2` مقرر ہونا چاہیے۔

</details>

#### مثالیں

<details>

<summary>ذیلی بٹن کی 2 قطاروں کے ساتھ توانائی کے اعداد و شمار دکھانے والا ایک بڑا بٹن (اسکرین شاٹ شامل ہے)</summary>

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

<summary>12 ذیلی بٹن کے ساتھ متعدد قطاروں والا ایک بڑا بٹن</summary>

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

## شرائط

کچھ اختیارات شرائط سے چلتے ہیں، جو بالکل ویسے ہی لکھی جاتی ہیں جیسے Home Assistant کے [کنڈیشنل کارڈ](https://www.home-assistant.io/dashboards/conditional/) کی شرائط:

- کسی [ذیلی بٹن](#ذیلی-بٹن) پر `visibility`، اسے دکھانے یا چھپانے کے لیے
- کسی [پاپ اپ](#پاپ-اپ) پر `trigger`، شرائط پوری ہونے پر اسے کھولنے کے لیے
- آپ کے [ٹیمپلیٹس](#ٹیمپلیٹس) کے اندر `checkConditionsMet(conditions, hass)`، جب آپ کو جواب اپنے کوڈ میں درکار ہو

Home Assistant کی ہر شرط کی قسم پرکھی جاتی ہے: `state`، `numeric_state`، `screen`، `user`، `time`، `location`، `template`، اور `and`، `or` اور `not` گروپس۔ Home Assistant کے شرط بنانے والے کی شرائط بھی کام کرتی ہیں، یعنی وہ جو اپنے ڈومین کے نام پر ہیں جیسے `sun.is_up`، `light.is_on`، `zone.in_zone` یا `temperature.is_value`، اپنی `target`، `options`، `behavior` اور `for` سیٹنگز کے ساتھ۔

<details>

<summary><b>مثال</b></summary>

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
> شرائط آپ کے براؤزر میں پرکھی جاتی ہیں، اس لیے ان میں سے وہ چند جنہیں Home Assistant سرور کی ضرورت ہوتی ہے، بالکل درست نہیں ہو سکتیں: طلوع اور غروب آفتاب دوبارہ حساب کیے جانے کے بجائے `sun.sun` اینٹیٹی سے پڑھے جاتے ہیں، اور `for` کا دورانیہ recorder کی تاریخ کے بغیر، آخری حالت کی تبدیلی سے ناپا جاتا ہے۔
>
> `view_columns` قبول کیا جاتا ہے مگر ہمیشہ پاس ہو جاتا ہے، کیونکہ آپ کے ویو کے کالم ترتیب دینے والا کبھی بھی Bubble Card نہیں ہوتا۔ جس قسم کی شرط کو Bubble Card نہیں جانتا، وہ خاموشی سے ناکام ہونے کے بجائے آپ کے براؤزر کنسول میں ایک بار اپنی اطلاع دیتی ہے، تاکہ آپ ٹائپنگ کی غلطی اور غیر موجود خصوصیت میں فرق کر سکیں۔

<br>

---

<br>

## تھپتھپانے، دوہری تھپتھپاہٹ اور دبائے رکھنے کے ایکشنز

آپ ان کارڈز پر جو یہ اختیار معاونت کرتے ہیں Home Assistant کے ڈیفالٹ تھپتھپانے کے ایکشنز، دوہری تھپتھپاہٹ کے ایکشنز اور دبائے رکھنے کے ایکشنز بھی استعمال کر سکتے ہیں۔ مثال کے طور پر یہ آپ کو بٹن آئیکن کو دبائے رکھ کر "مزید معلومات" ونڈو دکھانے یا ذیلی بٹن دبانے پر کوئی سروس چلانے کی سہولت دیتا ہے۔

**نوٹ: جب `double_tap_action` مقرر ہو، تو عام `tap_action` میں دوہری تھپتھپاہٹ کا پتہ لگانے کے لیے 200 ملی سیکنڈ کی تاخیر ہو گی۔
اگر یہ تاخیر ناپسندیدہ ہو تو دوہری تھپتھپاہٹ کی ہینڈلنگ غیر فعال کرنے کے لیے `double_tap_action` کو `none` مقرر کریں۔**

### ایکشن کے اختیارات

<details>

<summary><b>اختیارات (YAML اور تفصیل)</b></summary>

| نام | نوعیت | معاون اختیارات | تفصیل |
| --- | --- | --- | --- |
| `action` | string | `more-info`، `toggle`، `call-service`، `navigate`، `url`، `fire-dom-event`، `none` | انجام دینے کے لیے ایکشن |
| `target` | object |  | صرف `call-service` کے ساتھ کام کرتا ہے۔ [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) کی پیروی کرتا ہے |
| `navigation_path` | string | آپ کے ڈیش بورڈ کا کوئی بھی راستہ | جانے کے لیے راستہ (مثلاً پاپ اپ کھولنے کے لیے `'#kitchen'`) جب ایکشن navigate متعین ہو |
| `url_path` | string | کوئی بھی لنک | کلک پر کھولنے کے لیے URL (مثلاً `https://www.google.com`) جب ایکشن `url` ہو |
| `service` | string | کوئی بھی سروس | کال کرنے کے لیے سروس (مثلاً `media_player.media_play_pause`) جب `action` کو `call-service` متعین کیا گیا ہو |
| `data` یا `service_data` | object | کوئی بھی سروس ڈیٹا | شامل کرنے کے لیے سروس ڈیٹا (مثلاً `entity_id: media_player.kitchen`) جب `action` کو `call-service` متعین کیا گیا ہو |
| `confirmation` | object | دیکھیں [تصدیق](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | ایک تصدیقی پاپ اپ دکھائیں (Bubble Card والا نہیں)، یہ ڈیفالٹ `confirmation` آبجیکٹ کو اوور رائیڈ کرتا ہے |

</details>

#### مثال

<details>

<summary>ایک پاپ اپ کھولنے کے لیے ایک بٹن</summary>

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

## اسٹائلنگ

آپ چار طریقوں سے تمام کارڈز کے CSS کو **کارڈ موڈ استعمال کیے بغیر** ترمیم کرنے کے لیے کسٹم اسٹائلز شامل کر سکتے ہیں:

- ایڈیٹر میں، اس کارڈ پر جائیں جسے آپ ترمیم کرنا چاہتے ہیں، پھر _Styling options > Custom styles & JS templates_ پر جائیں، اور اپنے کسٹم اسٹائلز شامل کریں (نیچے دی گئی تجاویز اور مثالیں دیکھیں)۔
- ایڈیٹر میں (یا [YAML](#کنفیگریشن) میں)، اس کارڈ پر جائیں جسے آپ ترمیم کرنا چاہتے ہیں، پھر _Modules_ پر جائیں، پھر ایک نیا ماڈیول بنائیں (یہ تمام کارڈز کے لیے دستیاب ہوگا)، یا کوئی بھی دستیاب ماڈیول انسٹال کرنے کے لیے **Module Store** پر جائیں (ماڈیولز کے بارے میں مزید تفصیلات [نیچے](#ماڈیولز) مل سکتی ہیں)۔
- کسی [تھیم](https://www.home-assistant.io/integrations/frontend/#defining-themes) فائل میں YAML کے اندر CSS متغیرات شامل کر کے (یہ ہر کارڈ کی دستاویزات میں اوپر دستیاب ہیں)۔ یہ عالمی ترمیمات کی اجازت دیتا ہے۔

  <details>
  
  <summary>مثال</a></summary>
  
  <br>

  `Bubble:` والی لائن کاپی نہ کریں، یہ اس تھیم کا نام ہے جو آپ استعمال کرتے ہیں۔ آپ کو متغیرات سے `--` بھی ہٹانا ہوگا۔

  کسی بھی ترمیم کے بعد تھیم کو تازہ کرنے کے لیے آپ کو [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) ایکشن چلانے کی ضرورت ہے۔

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
  
- YAML میں `styles: |` شامل کر کے اس کے بعد اپنے کسٹم اسٹائلز لکھ کر (نیچے دی گئی تجاویز اور مثالیں دیکھیں)۔

> [!TIP]  
> **یہ سمجھنے کے لیے کہ کون سے اسٹائل کلاسز میں ترمیم کی جا سکتی ہے**، آپ اس ریپوزٹری میں [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) فولڈر دیکھ سکتے ہیں۔ ہر کارڈ کے فولڈر میں، آپ کو `styles.css` نامی ایک فائل ملے گی۔ ان فائلوں میں تمام لاگو کردہ اسٹائلز موجود ہیں۔ اس سے CSS متغیرات کے مقابلے میں بہت زیادہ امکانات ملتے ہیں، لیکن اسے ہر کارڈ میں الگ الگ شامل کرنا پڑتا ہے۔
> 
> آپ کو [کمیونٹی کی بہت سی مثالیں](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) بھی مل سکتی ہیں، یا کچھ [Home Assistant فورم](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) سے تھوڑی سی تلاش کر کے۔
>
> Home Assistant کے لیے Bubble تھیم (اسکرین شاٹس کی طرح) [یہاں](https://github.com/Clooos/Bubble) مل سکتی ہے۔
>
> میرے [YouTube چینل](https://www.youtube.com/@cloooos) پر جلد ہی ایک ٹیوٹوریل ویڈیو آ رہی ہے!

> [!IMPORTANT]  
> براہ کرم نوٹ کریں کہ آپ کو کچھ پہلے سے متعین CSS اسٹائلز میں `!important;` شامل کرنا پڑ سکتا ہے (نیچے دی گئی مثالیں دیکھیں)۔

> [!TIP]  
> ذیلی بٹن کو نام پر مبنی کلاسز کے ذریعے نشانہ بنایا جا سکتا ہے۔ مثال کے طور پر، "My sub-button" نامی ایک ذیلی بٹن کو `.my-sub-button` سے اسٹائل کیا جا سکتا ہے۔ سلائیڈر ذیلی بٹن بھی `.bubble-sub-button-slider-1`، `.bubble-sub-button-slider-2` وغیرہ فراہم کرتے ہیں۔
>
> نام پر مبنی کلاس اس وقت بدل جاتی ہے جب آپ کسی ذیلی بٹن کا نام تبدیل کرتے ہیں، اور نام کا ترجمہ ہونے پر اس کا بھی ترجمہ ہو جاتا ہے۔ ذیلی بٹن پر `css_class` مقرر کریں تاکہ آپ کو اپنی ایسی کلاس ملے جو کبھی نہ بدلے، نام کچھ بھی ہو اور زبان کوئی بھی ہو۔

#### مثالیں

<details>

<summary>کسی بھی Bubble Card کے فونٹ کا سائز تبدیل کرنا</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>افقی بٹنوں کے اسٹیک میں ایک ہی بٹن کا پس منظر کا رنگ تبدیل کرنا</summary>

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

<summary>کارڈ کا پس منظر کا رنگ تبدیل کرنا</summary>

<br>

یہ تمام Bubble Card اقسام پر کام کرتا ہے (پاپ اپس کے علاوہ):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

یہ صرف بٹن کارڈ میں یہی کام کرتا ہے (یہ پاپ اپ ہیڈر کے لیے بھی کام کرتا ہے): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

جب یہ `on` ہو تو رنگ تبدیل کرنے کے لیے نیچے دیے گئے اسٹائل ٹیمپلیٹس دیکھیں۔

</details>

<details>

<summary>بٹن سلائیڈر کا رنگ تبدیل کرنا</summary>

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

<summary>جداکار کی لائن کا رنگ تبدیل کرنا</summary>

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

<summary>آئیکن کا رنگ تبدیل کرنا</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

افقی بٹنوں کے اسٹیک کے آئیکن کے لیے۔
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>آئیکن کے کنٹینر کا پس منظر کا رنگ تبدیل کرنا</summary>

<br>

یہ تمام Bubble Card اقسام پر کام کرتا ہے (پاپ اپس کے علاوہ):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

یہ پاپ اپ ہیڈر کے لیے بھی یہی کام کرتا ہے: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>ذیلی بٹن کا سائز تبدیل کرنا (large لے آؤٹ کے لیے بہترین)</summary>

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

<summary>دوسرے ذیلی بٹن کا پس منظر کا رنگ تبدیل کرنا</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>آئیکن کا سائز تبدیل کرنا</summary>

<br>

اصل آئیکن کے لیے۔

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

ذیلی بٹن کے آئیکنز کے لیے۔

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>ذیلی بٹن میں آئیکن کے بجائے تصویر استعمال کرنا</summary>

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

بس یہ تصویر Home Assistant کے "www" فولڈر میں "pictures" فولڈر (یا جو نام آپ چاہیں) میں اپلوڈ کر دیں۔

</details>

<details>

<summary>ایڈوانسڈ مثال: ذیلی بٹنوں کی افقی قطار بنانا (اسکرین شاٹ شامل ہے)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> مجھے یہ بہت پسند ہے، میں اسے اپنے ڈیش بورڈ پر ہیڈر کے طور پر استعمال کرتا ہوں۔

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

## ٹیمپلیٹس

**Bubble Card جینجا (Jinja) ٹیمپلیٹس کی حمایت نہیں کرتا** لیکن جدید صارفین اپنے [کسٹم اسٹائلز](#اسٹائلنگ) میں براہ راست JS میں ٹیمپلیٹس شامل کر سکتے ہیں۔ مثال کے طور پر، یہ آپ کو کسی عنصر کا آئیکن، متن یا رنگ متحرک طور پر تبدیل کرنے، یا کسی عنصر (جیسے ذیلی بٹن) کو کسی حالت کی بنیاد پر مشروط طور پر دکھانے یا چھپانے، یا کسی حالت، ایک صفت اور مزید کی بنیاد پر تقریباً کچھ بھی کرنے کی اجازت دیتا ہے۔

> [!TIP]  
> JS ٹیمپلیٹس کے بارے میں مزید معلومات [یہاں](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) ملیں گی۔ میری تجویز ہے کہ **ہمیشہ اپنے براؤزر کے کنسول کو دیکھیں** تاکہ یقینی بنایا جا سکے کہ سب کچھ صحیح طریقے سے کام کر رہا ہے۔

> [!IMPORTANT]  
> **وہ تمام ٹیمپلیٹس جو کسی CSS خاصیت میں ترمیم نہیں کر رہے ہیں انہیں آخر میں رکھا جانا چاہیے! جیسے کسی آئیکن، متن یا کسی بھی عنصر میں ترمیم کرنا۔**

#### دستیاب متغیرات اور فنکشنز

<details>

<summary>متغیرات</summary>

<br>

آپ کو زیادہ تر کارڈز میں ان متغیرات تک رسائی حاصل ہے:

- `state` آپ کے متعین کردہ `entity` کی حالت واپس کرے گا۔
  
- `entity` آپ کی وہ entity واپس کرے گا جو آپ نے اس مثال کی طرح `switch.test` جیسی متعین کی ہے۔
  
- `icon` کو اس طرح آئیکن تبدیل کرنے کے لیے استعمال کیا جا سکتا ہے `icon.setAttribute("icon", "mdi:lightbulb")`۔

- `subButtonState[0]` آپ کے پہلے ذیلی بٹن کے متعین کردہ `entity` کی حالت واپس کرے گا، `[0]` پہلے ذیلی بٹن کی حالت ہے، `[1]` دوسرے کی...
  
- `subButtonIcon[0]` کو اس طرح پہلے ذیلی بٹن کا آئیکن تبدیل کرنے کے لیے استعمال کیا جا سکتا ہے `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`، `[0]` پہلے ذیلی بٹن کا آئیکن ہے، `[1]` دوسرے کا...
  
- `card` DOM میں کارڈ کا عنصر واپس کرے گا۔
  
- `hass` ایک جدید متغیر ہے جو آپ کو مزید کنٹرول دیتا ہے، مثال کے طور پر آپ اس طرح `light.kitchen` کی حالت واپس کر سکتے ہیں `hass.states['light.kitchen'].state` یا اس طرح ایک صفت `hass.states[entity].attributes.brightness`۔

- `this` آپ کے سیٹ اپ اور ڈیش بورڈ کے بارے میں بہت سی مفید معلومات واپس کرے گا، اسے صرف اس صورت میں استعمال کریں اگر آپ جانتے ہیں کہ آپ کیا کر رہے ہیں۔

</details>

<details>

<summary>فنکشنز</summary>

<br>

آپ کو تمام گلوبل JS فنکشنز تک رسائی حاصل ہے، لیکن آپ کو یہ بھی حاصل ہے:

- `getWeatherIcon` کو کسی ایسی حالت کی بنیاد پر موسم کا آئیکن واپس کرنے کے لیے استعمال کیا جا سکتا ہے جو موسم واپس کرتی ہے۔ مثال کے طور پر، آپ تیسرے ذیلی بٹن کے آئیکن کو آج کے موسم کے آئیکن میں تبدیل کرنے کے لیے یہ کر سکتے ہیں `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`، `.forecast[1]?.condition` کل کے لیے ہے...

  اس کے لیے آپ کو ایک ٹیمپلیٹ سینسر بنانا ہوگا۔ یہاں وہ ہے جو آپ اپنی `configuration.yaml` میں شامل کر سکتے ہیں:
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
- `checkConditionsMet(conditions, hass)` اس وقت `true` لوٹاتا ہے جب [شرائط](#شرائط) کی فہرست پوری ہو، مثلاً `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`۔
- `hass.formatEntityState(state)` کو کسی حالت کا ترجمہ کرنے کے لیے استعمال کیا جا سکتا ہے (اسے کسی حالت کی اکائی حاصل کرنے کے لیے بھی استعمال کیا جا سکتا ہے، اسے دستی طور پر شامل کرنے کی ضرورت کے بغیر)۔
- `hass.formatEntityAttributeValue(state, "attribute")` کو کسی صفت کا ترجمہ کرنے کے لیے استعمال کیا جا سکتا ہے (اسے کسی حالت کی اکائی حاصل کرنے کے لیے بھی استعمال کیا جا سکتا ہے، اسے دستی طور پر شامل کرنے کی ضرورت کے بغیر)۔

</details>

#### مثالیں

آپ نیچے بہت سی مثالیں تلاش کر سکتے ہیں، لیکن آپ کو میرے [Patreon صفحے](https://www.patreon.com/c/Clooos) پر بہت جدید ٹیمپلیٹس بھی مل سکتے ہیں، جیسے ایک (میرا پسندیدہ) جو کارڈ کے آئیکنز کے ارد گرد چار مشروط بیجز تک لگانے کی اجازت دیتا ہے۔ یہ Bubble Card کے کسٹم اسٹائلز اور ٹیمپلیٹس کے تمام امکانات کے بارے میں سیکھنے کا بھی ایک بہترین طریقہ ہے!

<details>
<summary>میرے Patreon صفحے سے مثالیں</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">کسی بھی کارڈ میں Home Assistant جیسے بیجز شامل کرنا</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">کسی entity کے استعمال کے بغیر جداکار میں فارمیٹ شدہ تاریخ اور وقت دکھانا</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">ذیلی بٹن کی حالت کو دو لائنوں میں دکھانا</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">سلیکٹ ذیلی بٹن کے اندر لیبلز اور آئیکنز کو ذاتی بنانا</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">ایک مستقل یاد دہانی پاپ اپ شامل کرنا جو صرف ضرورت کے وقت ظاہر ہوتا ہے</a>
</p>

<br>

</details>

<details>

<summary>ایک بٹن کا پس منظر کا رنگ تبدیل کرنا جو <code>off</code> ہونے پر سرخ اور <code>on</code> ہونے پر نیلا ہو</summary>

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

<summary>افقی بٹنوں کے اسٹیک کے لیے کسی entity کی بنیاد پر بٹن کا پس منظر کا رنگ تبدیل کرنا</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>ذیلی بٹن کو مشروط طور پر دکھانا/چھپانا</summary>

<br>

یہ پہلا ذیلی بٹن صرف اس وقت دکھا رہا ہے جب میرا ویکیوم پھنس جائے۔
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

یہ ایک ذیلی بٹن اس وقت دکھا رہا ہے جب بیٹری 10% سے کم ہو۔ "Low battery" دکھانے والے ذیلی بٹن کے ساتھ مفید ہے۔
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>آئیکن یا ذیلی بٹن آئیکن کو مشروط طور پر تبدیل کرنا</summary>

<br>

یہ ایک بٹن کا آئیکن صرف اس وقت تبدیل کر رہا ہے جب ویکیوم پھنس جائے۔
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

یہ پہلے ذیلی بٹن کا آئیکن صرف اس وقت تبدیل کر رہا ہے جب ویکیوم پھنس جائے۔
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>آئیکن یا ذیلی بٹن آئیکن کا رنگ مشروط طور پر تبدیل کرنا</summary>

<br>

یہ ایک بٹن آئیکن کا رنگ اس کی حالت کی بنیاد پر تبدیل کر رہا ہے۔
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

یہ ایک ذیلی بٹن آئیکن کا رنگ اس کی حالت کی بنیاد پر تبدیل کر رہا ہے۔ `.bubble-sub-button-1` پہلا ذیلی بٹن ہے، اگر آپ کسی دوسرے ذیلی بٹن کا آئیکن تبدیل کرنا چاہتے ہیں تو `1` کو تبدیل کریں۔
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>پنکھے کے آئیکن کو مشروط طور پر متحرک کرنا</summary>

<br>

یہ ایک بٹن آئیکن کو گھماتا ہے جب پنکھا `on` ہو۔
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

<summary>متن کو ٹیمپلیٹ کرنا (جیسے نام یا حالت)</summary>

<br>

یہ ایک بٹن کے نام/حالت کو آپ کے موسم کے مطابق "It's currently sunny" سے تبدیل کر رہا ہے۔
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
یا ذیلی بٹنوں پر لاگو ہونے پر:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


اگر آپ حالت (`.bubble-state`) کو ٹیمپلیٹ کرنا چاہتے ہیں تو `show_state: true` آن نہ کریں، بس بغیر کسی صفت کے `show_attribute: true` آن کریں۔

</details>

<details>

<summary>ایڈوانسڈ مثال: جب پاپ اپ کھلا ہو تو ذیلی بٹن کا رنگ تبدیل کرنا</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>ایڈوانسڈ مثال: کسی حالت کی بنیاد پر جداکار کے نام کو آپ کی زبان میں ترجمہ کر کے ٹیمپلیٹ کرنا</summary>

<br>

آپ کسی حالت کا ترجمہ کرنے کے لیے `hass.formatEntityState(state)` اور کسی صفت کا ترجمہ کرنے کے لیے `hass.formatEntityAttributeValue(state, "attribute")` استعمال کر سکتے ہیں۔

یہ نام اور آئیکن کو موسم کی بنیاد پر تبدیل کر رہا ہے، "Nuageux" کا مطلب فرانسیسی میں "Cloudy" (ابر آلود) ہے۔

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

## ماڈیولز

ماڈیولز ایک طاقتور فیچر ہیں جو آپ کو اپنے تمام Bubble Cards میں اپنے کسٹم اسٹائلز اور ٹیمپلیٹس کو محفوظ کرنے، دوبارہ استعمال کرنے اور شیئر کرنے کی اجازت دیتے ہیں۔ متعدد کارڈز میں ایک ہی کوڈ کو کاپی اور پیسٹ کرنے کے بجائے، آپ ایک ماڈیول بنا سکتے ہیں اور اسے جہاں ضرورت ہو وہاں لاگو کر سکتے ہیں۔ اس سے آپ کے ڈیش بورڈ کی شکل و صورت کو منظم کرنا کہیں زیادہ آسان اور مؤثر ہو جاتا ہے۔

لیکن یہ فیچر اس سے کہیں زیادہ طاقتور ہے، یہ آپ کو Bubble Card ایڈیٹر میں تمام ڈیفالٹ [Home Assistant فارم](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) اختیارات استعمال کرتے ہوئے، خود اصل فیچرز شامل کرنے دیتا ہے!  
آبجیکٹ سلیکٹر کو لائیو تبدیلیاں دکھانے اور صفات کو صحیح طریقے سے سپورٹ کرنے کے لیے بہتر بنایا گیا ہے۔

کوئی ماڈیول بلٹ ان [اینٹیٹی تجاویز](#اینٹیٹی-تجاویز) کے ساتھ ساتھ Home Assistant کے کارڈ پکر کو بھی جواب دے سکتا ہے: جن کارڈز کو پہلے سے بیان کیا جا سکتا ہو ان کے لیے `suggestions` استعمال کریں، اور جب انہیں آپ کے سیٹ اپ سے شمار کرنا پڑے تو `suggestions_code`، مثلاً ایک ایسا پاپ اپ جو منتخب اینٹیٹی جس ایریا سے تعلق رکھتی ہے اس کی تمام اینٹیٹیز سے بنایا گیا ہو۔ دونوں کیز کی دستاویزات [یہاں](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions) موجود ہیں۔

آپ [کمیونٹی کے بنائے ہوئے ماڈیولز](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) کو تلاش کرنے اور انسٹال کرنے کے لیے **Module Store** بھی براؤز کر سکتے ہیں، یا اپنی تخلیقات شیئر کر سکتے ہیں!

> [!TIP]
> ماڈیول کا کوڈ بالکل اسی طرح کام کرتا ہے جیسے کسی کارڈ کے `styles` سیکشن میں کوڈ۔ [ٹیمپلیٹس](#ٹیمپلیٹس) سیکشن کے تمام متغیرات اور فنکشنز دستیاب ہیں۔

<br>

### ابتدائی سیٹ اپ

> [!IMPORTANT]
> v3.1.0 سے شروع کرتے ہوئے، Bubble Card Tools ماڈیولز کے لیے تجویز کردہ اسٹوریج بیک اینڈ ہے۔ پرانا ٹیمپلیٹ سینسر طریقہ موجودہ سیٹ اپس کے لیے اب بھی کام کرتا ہے، لیکن نئے ماڈیولز اور Module Store فیچرز Bubble Card Tools کے ذریعے بہتر طور پر سپورٹ کیے جاتے ہیں۔

Bubble Card Tools انٹیگریشن ماڈیول ایڈیٹر اور Module Store کو فعال کرتا ہے، اور ماڈیولز کو انفرادی YAML فائلوں کے طور پر محفوظ کرتا ہے۔ موجودہ ماڈیولز خود بخود منتقل ہو جاتے ہیں۔

انسٹالیشن اور کنفیگریشن کے مراحل یہاں بیان کیے گئے ہیں:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### ماڈیول ایڈیٹر

آپ کسی بھی کارڈ کی سیٹنگز سے، **Modules** سیکشن کے تحت ماڈیول ایڈیٹر تک رسائی حاصل کر سکتے ہیں۔ ایڈیٹر دو اہم ٹیبز فراہم کرتا ہے:

#### My Modules ٹیب

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

یہ ٹیب آپ کے تمام انسٹال شدہ ماڈیولز دکھاتا ہے اور آپ کو یہ کرنے دیتا ہے:

- موجودہ کارڈ پر موجودہ ماڈیولز کو **لاگو کرنا (Apply)**
- شروع سے ایک نیا ماڈیول **بنانا (Create)**
- لائیو پیش نظارہ کے ساتھ موجودہ ماڈیولز میں **ترمیم کرنا (Edit)**
- ایسے ماڈیولز کو **حذف کرنا (Delete)** جن کی آپ کو مزید ضرورت نہیں
- ماڈیولز کو **تلاش (Search)** اور **ترتیب (sort)** دینا (حروف تہجی، حالیہ، فعال پہلے)
- کسی ماڈیول کو خود بخود تمام کارڈز پر لاگو کرنے کے لیے **گلوبل حالت متعین کرنا**
- بیک اپ یا شیئرنگ کے لیے ماڈیولز کو **درآمد/برآمد (Import/Export)** کرنا
- ماڈیول ایڈیٹر میں **اختیاری: اینٹیٹی تجاویز** کے تحت **اینٹیٹی تجاویز لکھنا (Write entity suggestions)**، تاکہ آپ کا ماڈیول Home Assistant کے کارڈ پکر میں پیش کیا جائے۔ قواعد اور شمار کردہ تجاویز دونوں لکھتے وقت جانچی جاتی ہیں، وہاں کوئی خرابی محفوظ کرنے سے روک دیتی ہے، اور پیش نظارہ آپ کی منتخب کردہ کسی بھی اینٹیٹی کے لیے تجویز کردہ کارڈز دکھاتا ہے

#### Module Store ٹیب

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

یہ ٹیب [کمیونٹی کے تمام دستیاب ماڈیولز](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) دکھائے گا، اور آپ کو یہ کرنے دیتا ہے:

- کمیونٹی کے بنائے ہوئے تمام ماڈیولز **براؤز کرنا (Browse)**
- نام، مطابقت یا کلیدی الفاظ کے ذریعے ماڈیولز کو **تلاش کرنا اور فلٹر کرنا**
- ایک کلک سے ماڈیولز **انسٹال کرنا (Install)**
- نئے ورژن دستیاب ہونے پر انسٹال شدہ ماڈیولز کو **اپ ڈیٹ کرنا (Update)**

> [!TIP]
> ایڈیٹر میں، آپ ان ماڈیولز کو آزمانے کے لیے غیر سپورٹڈ ماڈیولز فعال کر سکتے ہیں جو ابھی تک کسی خاص کارڈ قسم کے ساتھ مطابق نشان زد نہیں ہیں۔

<br>

### ماڈیولز کیسے استعمال کریں

#### ایک نیا ماڈیول بنانا

<details>

<summary>پھیلانے کے لیے کلک کریں</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. کسی بھی کارڈ کے ایڈیٹر پر جائیں اور **Modules** سیکشن کو پھیلائیں۔
2. **Create new module** پر کلک کریں۔
3. ماڈیول کی معلومات بھریں۔
4. **Code** ایڈیٹر میں اپنا CSS اور/یا JavaScript ٹیمپلیٹ کوڈ لکھیں۔
5. (اختیاری) **Editor** سیکشن میں ایک کسٹم کنفیگریشن یو آئی بنائیں (جیسے اوپر دیے گئے اسکرین شاٹ میں رنگ چننے والا، مکمل دستاویزات [یہاں](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) دستیاب ہیں)۔
6. (اختیاری) اپنی **اینٹیٹی تجاویز** لکھیں تاکہ آپ کا ماڈیول Home Assistant کے کارڈ پکر میں پیش کیا جائے۔ یہ پینل آپ کے لکھنے کے ساتھ ساتھ اسے جانچتا ہے، اور اس کا پیش نظارہ آپ کی پسند کی اینٹیٹی کے لیے تجویز کردہ کارڈز خود دکھاتا ہے۔
7. **Save** پر کلک کریں۔

آپ کا ماڈیول اب آپ کے کسی بھی کارڈ پر استعمال کے لیے دستیاب ہے!

<br>

</details>

#### کسی کارڈ پر ماڈیول لاگو کرنا

<details>

<summary>پھیلانے کے لیے کلک کریں</summary>

<br>

- **ایڈیٹر کے ذریعے:**

  - اس کارڈ کے ایڈیٹر پر جائیں جس پر آپ ماڈیول لاگو کرنا چاہتے ہیں۔
  - **Modules** سیکشن کو پھیلائیں۔
  - فہرست سے اس ماڈیول پر کلک کریں جسے آپ لاگو کرنا چاہتے ہیں۔
  - "Apply to" کے تحت، "This card" پر کلک کریں۔ ماڈیول اب فعال ہے۔ آپ ایک ہی کارڈ پر متعدد ماڈیولز لاگو کر سکتے ہیں۔

- **YAML کے ذریعے:**

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

#### کسی ماڈیول کو عالمی سطح پر لاگو کرنا

<details>

<summary>پھیلانے کے لیے کلک کریں</summary>

<br>

آپ ایک ماڈیول کو تمام Bubble Cards پر خود بخود لاگو ہونے کے لیے سیٹ کر سکتے ہیں:

**یہ ایڈیٹر والے ماڈیولز کے لیے دستیاب نہیں ہے، کیونکہ ان کو کام کرنے کے لیے مخصوص کنفیگریشن درکار ہوتی ہے۔**

- **ایڈیٹر کے ذریعے:**

  - ماڈیول ایڈیٹر میں، **My Modules** ٹیب میں اپنا ماڈیول تلاش کریں۔
  - ماڈیول کے نام کے ساتھ **All cards** بٹن کو ٹوگل کریں۔
  - ماڈیول اب خود بخود تمام کارڈز پر لاگو ہو جائے گا۔
 
- **YAML کے ذریعے:**

  اپنی ماڈیول YAML کنفیگریشن میں (`bubble-modules.yaml` میں)، بس `is_global: true` شامل کریں۔

<br>

</details>

#### کسی عالمی ماڈیول سے ایک کارڈ کو خارج کرنا

<details>

<summary>پھیلانے کے لیے کلک کریں</summary>

<br>

اگر آپ کے پاس ایک عالمی ماڈیول ہے لیکن آپ اسے کسی مخصوص کارڈ سے خارج کرنا چاہتے ہیں:

- **ایڈیٹر کے ذریعے:**
  
  - کارڈ کے **Modules** سیکشن میں، آپ کو عالمی ماڈیولز کی فہرست نظر آئے گی۔
  - کسی عالمی ماڈیول پر کلک کریں، اسے اس مخصوص کارڈ سے خارج کرنے کے لیے "This card" کو غیر فعال کریں۔

- **YAML کے ذریعے:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### اپنا ماڈیول Module Store پر شیئر کرنا

<details>

<summary>پھیلانے کے لیے کلک کریں</summary>

<br>

اپنا ماڈیول Module Store پر شیئر کرنے کے لیے، ماڈیول ایڈیٹر میں، نیچے "Export Module" میں، "Copy for GitHub" پر کلک کریں اور مواد کو [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) کیٹیگری میں ایک نئی discussion میں پیسٹ کریں۔ **تفصیل میں ترمیم کریں** (اگر ضروری ہو)، **مثال** (YAML صارفین کے لیے)، اور Module Store کے لیے **کم از کم ایک اسکرین شاٹ شامل کرنا** یاد رکھیں۔

**آپ کا ماڈیول اس کے فوراً بعد دستیاب ہو جاتا ہے** (Store کے تازہ ہونے کے بعد)، لہٰذا دوبارہ چیک کر لیں کہ سب کچھ صحیح طریقے سے لکھا گیا ہے اور ماڈیول توقع کے مطابق کام کر رہا ہے۔ آپ یقیناً شیئر کرنے کے بعد ماڈیول میں ترمیم/اپ ڈیٹ کر سکتے ہیں۔

<br>

</details>

#### ورژن کا انتظام

<details>

<summary>پھیلانے کے لیے کلک کریں</summary>

<br>

Module Store خود بخود انسٹال شدہ ماڈیولز کے لیے اپ ڈیٹس چیک کرتا ہے۔ جب اپ ڈیٹس دستیاب ہوں:

1. آپ کو **Module Store** ٹیب میں ایک اپ ڈیٹ اشارہ نظر آئے گا۔
2. دستیاب اپ ڈیٹس والے ماڈیولز میں **Update** پر کلک کریں۔
3. Module Store میں اپ ڈیٹ کی تصدیق کریں۔

<br>

</details>

#### سپورٹڈ کارڈ اقسام کی وضاحت کرنا

<details>

<summary>پھیلانے کے لیے کلک کریں</summary>

<br>

کچھ ماڈیولز تمام کارڈ اقسام کے ساتھ مطابق نہیں ہو سکتے۔ آپ متعین کر سکتے ہیں کہ کون سے کارڈز ایک ماڈیول کو سپورٹ کرتے ہیں۔  
اگر آپ چاہتے ہیں کہ ایک ماڈیول **تمام کارڈز** کے ساتھ مطابق ہو، تو بس `supported` فیلڈ کو چھوڑ دیں (یا ایڈیٹر میں **All cards** اختیار استعمال کریں)۔

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

### مثالیں

<details>
<summary>بنیادی اسٹائلنگ ماڈیول</summary>

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
<summary>کسٹم کنفیگریشن والا ماڈیول</summary>

<br>

یہ ماڈیول [یہاں](https://github.com/Clooos/Bubble-Card/discussions/1231) دستیاب ہے۔

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

مزید مثالیں Module Store میں مل سکتی ہیں، یا [یہاں](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)۔

<br>

---

<br>

## لوکلائزیشن

Bubble Card آپ کی زبان بولتا ہے۔ اس کا ایڈیٹر ان 64 زبانوں میں ترجمہ ہو چکا ہے جنہیں Home Assistant سپورٹ کرتا ہے، اور جہاں کہیں Home Assistant کے پاس پہلے سے کسی چیز کے لیے لفظ موجود ہو، وہیں اسی کا اپنا انداز دہرایا جاتا ہے، تاکہ آپ دونوں انٹرفیسز میں ایک ہی اصطلاحات پڑھیں۔

ایڈیٹر کے نیچے، ورژن نمبر کے ساتھ، ایک **خودکار** سوئچ آپ کے Home Assistant کی زبان کی پیروی کرتا ہے۔ اسے بند کر دیں تو پورا ایڈیٹر واپس انگریزی میں چلا جاتا ہے، جو کسی ٹیوٹوریل پر عمل کرنے یا کوئی مسئلہ رپورٹ کرنے کے لیے کارآمد ہے۔ آپ کا انتخاب آپ کے براؤزر میں یاد رکھا جاتا ہے۔

یہ دستاویزات بھی ترجمہ ہو چکی ہیں، [62 زبانوں میں](languages.md)، برطانوی انگریزی کے سوا باقی سب میں، برطانوی انگریزی اصل ہی دکھاتی ہے۔ یہ صفحات سب کے لیے کھلے ہیں، اس لیے کوئی ایسا انداز جو آپ کے اپنے Home Assistant سے میل نہ کھاتا ہو، چند کلکس میں درست کیا جا سکتا ہے۔ مواد کے لیے انگریزی نسخہ ہی حوالہ رہتا ہے۔

<br>

---

<br>

## مدد

اگر کچھ توقع کے مطابق کام نہیں کر رہا تو بلا جھجھک ایک issue کھولیں۔

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card کے بارے میں سوالات یا خیالات ہیں؟ اپنے ڈیش بورڈز یا دریافتیں شیئر کرنا چاہتے ہیں؟ آپ Home Assistant فورم پر، Bubble Card کے subreddit پر یا GitHub Discussions سیکشن میں جا سکتے ہیں۔

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## تعاون

تعاون کا خیرمقدم ہے! چاہے وہ بگ فکسز ہوں، نئے فیچرز، ترجمے، یا دستاویزات میں بہتری، بلا جھجھک ایک pull request کھولیں۔

شروع کرنے سے پہلے، براہ کرم [ڈویلپر گائیڈ](DEVELOPERS.md) پڑھیں جو آپ کے مقامی ماحول کو ترتیب دینے، پروجیکٹ بنانے، اور آپ کی تبدیلیوں کو ٹیسٹ کرنے کا احاطہ کرتی ہے۔

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## عطیہ

میں اس پروجیکٹ کو بہترین بنانے کے لیے اپنا زیادہ تر فارغ وقت وقف کرتا ہوں۔ لہٰذا اگر آپ میرے کام کی قدر کرتے ہیں، تو کوئی بھی عطیہ اپنی حمایت ظاہر کرنے کا ایک بہترین طریقہ ہوگا 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

سب کا شکریہ آپ کی حمایت کے لیے، آپ سب میری سب سے بڑی حوصلہ افزائی ہیں!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>

</div>
