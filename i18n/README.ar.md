<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
<div dir="rtl">

> [!NOTE]
> هذه الصفحة ترجمة آلية. عند الشك، تكون الأولوية [للوثائق الإنجليزية الأصلية](../README.md). هل تبدو لك جملة ما غير سليمة؟ كل مساعدة موضع ترحيب، و[تصحيح هذه الصفحة](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ar.md) لا يستغرق سوى دقيقة: يتولى GitHub إنشاء التفريعة (fork) وطلب السحب. شكرًا لك مقدمًا! 🍻

# Bubble Card

🌐 **[اقرأ هذه الصفحة بلغة أخرى](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card هي مجموعة بطاقات بسيطة وقابلة للتخصيص لـ Home Assistant، تتميز بنوافذ منبثقة عصرية وبمتجر Module Store مدمج يضم أكثر من 100 وحدة من صنع المجتمع.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## جدول المحتويات

**[`التثبيت`](#التثبيت)**  **[`الإعداد`](#الإعداد)**  **[`Pop-up`](#pop-up)**  **[`تكديس الأزرار الأفقي`](#تكديس-الأزرار-الأفقي)**  **[`الزر`](#الزر)**  **[`مشغل الوسائط`](#مشغل-الوسائط)**  **[`الستارة`](#الستارة)**  **[`الاختيار`](#الاختيار)**  **[`التكييف`](#التكييف)**  **[`التقويم`](#التقويم)**  **[`الفاصل`](#الفاصل)**  **[`العمود الفارغ`](#العمود-الفارغ)**  **[`الأزرار الفرعية فقط`](#الأزرار-الفرعية-فقط)**  **[`الأزرار الفرعية`](#الأزرار-الفرعية)**  **[`تخطيطات البطاقة`](#تخطيطات-البطاقة)**  **[`الإجراءات`](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول)**  **[`التنسيق`](#التنسيق)**  **[`القوالب`](#القوالب)**  **[`Modules`](#modules)**  **[`المساعدة`](#المساعدة)**  **[`المساهمة`](#المساهمة)**  **[`التبرع`](#التبرع)**

<br>

## التثبيت

**أدنى إصدار مدعوم من Home Assistant:** 2023.9.0

<details>

<summary>بدون HACS</summary>

<br>

1. نزّل هذا الملف: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. أضف هذا الملف إلى مجلد `<config>/www` لديك
3. في لوحة التحكم، انقر على الأيقونة في الزاوية العلوية اليمنى ثم على `تعديل لوحة التحكم`
4. انقر مجددًا على تلك الأيقونة ثم انقر على `إدارة الموارد`
5. انقر على `إضافة مورد`
6. انسخ والصق هذا: `/local/bubble-card.js?v=1`
7. انقر على `وحدة JavaScript` ثم على `إنشاء`
8. ارجع وحدّث صفحتك
9. يمكنك الآن النقر على `إضافة بطاقة` في الزاوية السفلية اليمنى والبحث عن `Bubble Card`
10. بعد أي تحديث للملف سيتعين عليك تعديل `/local/bubble-card.js?v=1` وتغيير الإصدار إلى أي رقم أعلى

إذا لم يعمل الأمر، جرّب فقط مسح ذاكرة التخزين المؤقت لمتصفحك.

</details>

<details>

<summary>مع HACS (موصى به)</summary>

<br>

تتيح لك هذه الطريقة الحصول على التحديثات مباشرة عبر متجر Home Assistant Community Store

1. إذا لم يكن HACS مثبتًا بعد، نزّله باتباع التعليمات على [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. تابع الإعداد الأولي لـ HACS باتباع التعليمات على [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. في الشريط الجانبي، انتقل إلى "HACS"
4. ابحث عن "Bubble Card"، أو انقر على الزر الأزرق أدناه
5. انقر على "تنزيل"
6. ارجع إلى لوحة التحكم وانقر على الأيقونة في الزاوية العلوية اليمنى ثم على `تعديل لوحة التحكم`
7. يمكنك الآن النقر على `إضافة بطاقة` في الزاوية السفلية اليمنى والبحث عن `Bubble Card`

إذا لم يعمل الأمر، جرّب مسح ذاكرة التخزين المؤقت للمتصفح/التطبيق (على جميع أجهزتك إذا لزم الأمر).

#### مقاطع الفيديو

يمكنك أيضًا إلقاء نظرة على قناتي على YouTube لمشاهدة مقاطع فيديو تشرح الخطوات واحدة تلو الأخرى.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## الإعداد

يمكن إعداد جميع الخيارات في محرر Home Assistant. لكن يمكنك العثور على مزيد من التفاصيل وعلى كود YAML في الوثائق أدناه.

<details>

<summary><b>الخيارات الرئيسية (YAML + الوصف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `type` | string | **مطلوب** | `custom:bubble-card` | نوع البطاقة |
| `card_type` | string | **مطلوب** | `button`، `calendar`، `climate`، `cover`، `empty-column`، `horizontal-buttons-stack`، `media-player`، `pop-up`، `select`، `separator` أو `sub-buttons` | نوع بطاقة Bubble Card، انظر أدناه |
| `styles` | object list | اختياري | أي أنماط CSS | يتيح لك تخصيص CSS الخاص ببطاقة Bubble Card لديك، انظر [التنسيق](#التنسيق) |

</details>

<details>

<summary><b>متغيرات CSS العامة (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | نصف قطر الحواف لجميع العناصر المدعومة |
| `--bubble-main-background-color` | `color` | لون الخلفية الرئيسي لجميع العناصر المدعومة |
| `--bubble-secondary-background-color` | `color` | لون الخلفية الثانوي لجميع العناصر المدعومة |
| `--bubble-accent-color` | `color` | اللون المميز لجميع العناصر المدعومة |
| `--bubble-icon-border-radius` | `px` | نصف قطر حواف الأيقونة لجميع العناصر المدعومة |
| `--bubble-icon-background-color` | `color` | لون خلفية الأيقونة لجميع العناصر المدعومة |
| `--bubble-sub-button-border-radius` | `px` | نصف قطر الحواف لجميع الأزرار الفرعية |
| `--bubble-sub-button-background-color` | `color` | لون الخلفية لجميع الأزرار الفرعية |
| `--bubble-box-shadow` | انظر [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل الصندوق لجميع العناصر المدعومة |
| `--bubble-border` | انظر [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | الإطار لجميع البطاقات المدعومة |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**شاهد هذا [الفيديو](https://www.youtube.com/watch?v=0hSQOlBxKKI) للتعرف على Bubble Card وإمكانياتها.** قناتي على YouTube جديدة نسبيًا وتركز على شروحات حول Home Assistant وBubble Card. لا تتردد في الاشتراك للمساعدة في زيادة ظهور قناتي. شكرًا لك مقدمًا!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

تتيح لك هذه البطاقة إنشاء نافذة منبثقة بأي محتوى. كل نافذة منبثقة **مخفية افتراضيًا** ويمكن فتحها عبر استهداف رابطها (مثل `'#pop-up-name'`)، أو باستخدام أي بطاقة تدعم [إجراء](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) `navigate`، أو باستخدام [تكديس الأزرار الأفقي](#تكديس-الأزرار-الأفقي) المضمّن.

> [!TIP]
> ### مشغّل النافذة المنبثقة 
> تتيح لك هذه الميزة فتح نافذة منبثقة بناءً على حالة أي كيان، فمثلًا يمكنك فتح نافذة منبثقة "للأمان" مع كاميرا عندما يكون شخص ما أمام منزلك. يمكنك أيضًا إنشاء مساعد تبديل (input_boolean) وتشغيل فتحها/إغلاقها في أتمتة.
> <details>
> <summary>فتح نافذة منبثقة عندما يكون <code>binary_sensor</code> في الحالة <code>on</code></summary>
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
> ### طرق مختلفة لإغلاق النافذة المنبثقة 
> هناك طرق عديدة لإغلاق النافذة المنبثقة. على سبيل المثال، يمكنك السحب من ترويسة النافذة المنبثقة نحو الأسفل، أو القيام بسحبة طويلة داخل النافذة المنبثقة نحو الأسفل، أو الضغط على Escape على الحاسوب، أو إزالة رمز hash من عنوان URL، أو ببساطة الضغط على زر الإغلاق.
>


### خيارات النافذة المنبثقة

<details>

<summary><b>الخيارات (YAML + الأوصاف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `hash` | string | **مطلوب** | أي رمز hash فريد (مثل `'#kitchen'`) بين علامتي ' ' | بهذه الطريقة ستفتح نافذتك المنبثقة |
| `popup_style` | string | اختياري | `bubble` (افتراضي) أو `classic` | يحدد النمط المرئي للنافذة المنبثقة |
| `popup_mode` | string | اختياري | `default` (افتراضي)، `fit-content`، `centered` أو `adaptive-dialog` | يحدد وضع تخطيط النافذة المنبثقة |
| `with_bottom_offset` | boolean | اختياري | `true` أو `false` (افتراضي) | يُستخدم فقط مع `popup_mode: fit-content` أو `adaptive-dialog`. يطبّق إزاحة سفلية على الهاتف، مفيد عندما تتضمن لوحة التحكم لديك بطاقة تذييل. |
| `full_width_on_mobile` | boolean | اختياري | `true` أو `false` (افتراضي) | يُستخدم فقط مع `popup_mode: centered`. يوسّع النافذة المنبثقة لتملأ عرض الشاشة بالكامل على الهاتف، مفيد على الشاشات الأصغر. |
| `performance_mode` | string | اختياري | `default` (افتراضي) أو `performance` | يحسّن حركة فتح النافذة المنبثقة. يؤخر `performance` قليلًا عرض المحتوى وضبابية الخلفية، ويعطّل أيضًا ضبابية الطبقة الخلفية إذا كانت مضبوطة. |
| `auto_close` | string | اختياري | مهلة بالمللي ثانية (مثل `10000` لعشر ثوانٍ) | إغلاق النافذة المنبثقة تلقائيًا بعد انقضاء المهلة |
| `close_on_click` | boolean | اختياري | `true` أو `false` (افتراضي) | إغلاق النافذة المنبثقة تلقائيًا بعد أي تفاعل |
| `close_by_clicking_outside` | boolean | اختياري | `true` (افتراضي) أو `false` | إغلاق النافذة المنبثقة بالنقر خارجها |
| `width_desktop` | string | اختياري | أي قيمة CSS | العرض على الحاسوب (`100%` افتراضيًا على الهاتف) |
| `margin` | string | اختياري | أي قيمة CSS | استخدم هذا **فقط** إذا لم تكن نافذتك المنبثقة موسّطة جيدًا على الهاتف (مثل `13px`) |
| `margin_top_mobile` | string | اختياري | أي قيمة CSS | الهامش العلوي على الهاتف (مثل `-56px` إذا كانت ترويستك مخفية) |
| `margin_top_desktop` | string | اختياري | أي قيمة CSS | الهامش العلوي على الحاسوب (مثل `50vh` لنافذة منبثقة بنصف الحجم أو `calc(100vh - 400px)` لارتفاع ثابت قدره `400px`) |
| `bg_color` | string | اختياري | أي قيمة hex أو rgb أو rgba | لون خلفية نافذتك المنبثقة (مثل `#ffffff` لخلفية بيضاء) |
| `bg_opacity` | string | اختياري | أي قيمة من `0` إلى `100` | شفافية خلفية نافذتك المنبثقة (مثل `100` لعدم الشفافية) |
| `bg_blur` | string | اختياري | أي قيمة من `0` إلى `100` | تأثير ضبابية خلفية نافذتك المنبثقة، **يعمل هذا فقط إذا لم يكن `bg_opacity` مضبوطًا على `100`** (مثل `0` لعدم الضبابية)|
| `shadow_opacity` | string | اختياري | أي قيمة من `0` إلى `100` | شفافية ظل نافذتك المنبثقة (مثل `0` لإخفائه) |
| `hide_backdrop` | boolean | اختياري | `true` أو `false` (افتراضي) | اضبط هذا على true في أول نافذة منبثقة في لوحة التحكم الرئيسية لديك لتعطيل الطبقة الخلفية في جميع النوافذ المنبثقة. |
| `background_update` | boolean | اختياري | `true` أو `false` (افتراضي) | تحديث محتوى النافذة المنبثقة في الخلفية (غير موصى به) |
| `trigger_entity` | string | اختياري | أي كيان | فتح هذه النافذة المنبثقة بناءً على حالة أي كيان |
| `trigger_state` | string | اختياري (**مطلوب** إذا كان `trigger_entity` محددًا) | أي حالة كيان | حالة الكيان التي تفتح النافذة المنبثقة |
| `trigger_close` | boolean | اختياري | `true` أو `false` (افتراضي) | إغلاق النافذة المنبثقة عندما تكون الحالة مختلفة عن `trigger_state` |
| `open_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تشغيل إجراء عند فتح النافذة المنبثقة |
| `close_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تشغيل إجراء عند إغلاق النافذة المنبثقة |
| `show_header` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض/إخفاء ترويسة النافذة المنبثقة بالكامل |
| `show_previous_button` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض زر رجوع بجوار زر الإغلاق للعودة إلى النافذة المنبثقة السابقة عند توفرها |
| `show_close_button` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض زر الإغلاق أو إخفاؤه مع إبقاء بقية الترويسة ظاهرة |
| `buttons_position` | string | اختياري | `right` (افتراضي) أو `left` | موضع زري الإغلاق والرجوع في الترويسة |
| `cards` | list | اختياري | أي بطاقة Bubble Card أو بطاقة Home Assistant أو بطاقة مخصصة | يحدد محتوى نافذتك المنبثقة. انظر مثال النافذة المنبثقة أدناه. |
| يمكنك أيضًا الوصول إلى [جميع إعدادات الزر](#الزر) لترويسة النافذة المنبثقة. | | اختياري | | إذا لم تُحدد فلن تُعرض أي ترويسة |

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | نصف قطر الحواف للنافذة المنبثقة |
| `--bubble-pop-up-main-background-color` | `color` | لون الخلفية الرئيسي للعناصر المدعومة في النافذة المنبثقة |
| `--bubble-pop-up-background-color` | `color` | لون خلفية النافذة المنبثقة |
| `--bubble-backdrop-background-color` | `color` | لون خلفية الطبقة الخلفية |
| يمكنك أيضًا الوصول إلى [جميع متغيرات CSS الخاصة بالزر](#خيارات-الزر) لترويسة النافذة المنبثقة. | | |

</details>


### الصيغة المستقلة للنافذة المنبثقة (v3.2.0+)

منذ الإصدار v3.2.0، تستخدم النوافذ المنبثقة صيغة مستقلة جديدة تُحدد فيها بطاقات المحتوى مباشرة داخل النافذة المنبثقة باستخدام الخيار `cards`. يوفر هذا أداءً أفضل وتجربة تحرير جديدة بالسحب والإفلات قائمة على الأقسام.


#### أمثلة

<details>

<summary>نافذة منبثقة (الصيغة المستقلة)</summary>

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

<summary>زر لفتح النافذة المنبثقة</summary>

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

## تكديس الأزرار الأفقي

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

هذه البطاقة رفيق جيد لبطاقة النافذة المنبثقة، إذ تتيح لك فتح النوافذ المنبثقة المقابلة. كما تتيح لك فتح أي صفحة في لوحة التحكم الخاصة بك. بالإضافة إلى ذلك، يمكنك إضافة مستشعرات الحركة/الإشغال بحيث يتكيف ترتيب الأزرار حسب الغرفة التي دخلتها للتو. هذه البطاقة قابلة للتمرير وتبقى مرئية وتعمل كتذييل.

> [!IMPORTANT]  
> يجب أن تكون هذه البطاقة الأخيرة في العرض الخاص بك (بعد جميع البطاقات والنوافذ المنبثقة). لا يمكن وضعها داخل أي تكديس.

### خيارات تكديس الأزرار الأفقي

<details>

<summary><b>الخيارات (YAML + الأوصاف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `1_link` | string | **إلزامي** | رمز hash للنافذة المنبثقة (مثل `'#kitchen'`) مع ' ' أو أي رابط | رابط لفتحه |
| `1_name` | string | اختياري | أي نص | اسم لزرّك |
| `1_icon` | string | اختياري | أي أيقونة `mdi:` | أيقونة لزرّك |
| `1_entity` | string | اختياري | أي إضاءة أو مجموعة إضاءة | عرض لون تلك الإضاءة في الخلفية |
| `1_pir_sensor` | string | اختياري | أي مستشعر ثنائي | مستشعر pir واحد على الأقل أو أكثر من أجل `auto_order`، في الواقع يعمل هذا أيضًا مع أي نوع كيان، فمثلًا يمكنك إضافة مجموعات إضاءة وسيتغير الترتيب بناءً على آخر الحالات المتغيرة. |
| `auto_order` | boolean | اختياري | `true` أو `false` (افتراضي) | تغيير ترتيب الأزرار وفقًا لوقت آخر تغيير في `_pir_sensor`، **يجب أن يكون `false` إذا لم يكن لديك أي `_pir_sensor` في إعدادك** |
| `margin` | string | اختياري | أي قيمة CSS | استخدم هذا **فقط** إذا لم يكن `horizontal-buttons-stack` الخاص بك متوسّطًا جيدًا على الهاتف (مثل `13px`) |
| `width_desktop` | string | اختياري | أي قيمة CSS | العرض على الحاسوب (`100%` افتراضيًا على الهاتف) |
| `is_sidebar_hidden` | boolean | اختياري | `true` أو `false` (افتراضي) | تثبيت موضع تكديس الأزرار الأفقي إذا كان الشريط الجانبي مخفيًا على الحاسوب (فقط إذا كنت قد أجريت تعديلًا لإخفائه بنفسك) |
| `rise_animation` | boolean | اختياري | `true` (افتراضي) أو `false` | اضبط هذا على `false` لتعطيل الحركة التي تُفعّل بعد اكتمال تحميل الصفحة |
| `highlight_current_view` | boolean | اختياري | `true` أو `false` (افتراضي) | تمييز رمز hash / العرض الحالي بحركة سلسة |
| `hide_gradient` | boolean | اختياري | `true` أو `false` (افتراضي) | اضبط هذا على `false` لإخفاء التدرج اللوني |

> [!IMPORTANT]  
> المتغيرات التي تبدأ برقم تحدد أزرارك، ما عليك سوى تغيير هذا الرقم لإضافة مزيد من الأزرار (انظر المثال أدناه).

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | نصف قطر الحواف لأزرار تكديس الأزرار الأفقي |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | لون الخلفية لأزرار تكديس الأزرار الأفقي |

</details>


#### مثال

<details>

<summary>تكديس أزرار أفقي يعيد ترتيب نفسه بناءً على مستشعرات الإشغال</summary>

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

## الزر

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

هذه البطاقة متعددة الاستخدامات جدًا. يمكن استخدامها كزر **مفتاح** أو **شريط تمرير** أو **حالة** أو **اسم/نص**.

> [!TIP]
> ### ما الفروق بين جميع أنواع الأزرار؟
>
> - **زر المفتاح:** هذا هو نوع الزر الافتراضي. افتراضيًا، يقوم بتبديل كيان ويتغير لون خلفيته بناءً على حالة الكيان أو لون الإضاءة. يمكنك تغيير إجرائه في قسم **إجراء النقر على البطاقة**.
>
> - **زر شريط التمرير:** يتيح لك هذا النوع من الأزرار التحكم في الكيانات ذات النطاقات القابلة للضبط. إنه مثالي لخفت الإضاءة، وسيتكيف لون التعبئة مع لون الإضاءة. يمكنك أيضًا استخدامه لعرض القيم، مثل مستوى شحن البطارية.
>   الكيانات المدعومة لأشرطة التمرير:
>   - الإضاءة (السطوع)
>   - مشغل الوسائط (مستوى الصوت)
>   - الستارة (الموضع)
>   - المروحة (النسبة المئوية)
>   - التكييف (درجة الحرارة)
>   - الأرقام المدخلة والأرقام (القيمة)
>   - مستشعر البطارية (نسبة مئوية، للقراءة فقط)
>
>   يمكنك أيضًا استخدام أي كيان ذي حالة رقمية عبر تعطيل تصفية الكيانات في **إعدادات شريط التمرير**، ثم تحديد قيمتي `min` و`max`. هذا الخيار للقراءة فقط.
>
> - **زر الحالة:** مثالي لعرض معلومات من مستشعر أو أي كيان. عند الضغط عليه، سيعرض لوحة "مزيد من المعلومات" الخاصة بالكيان. لون خلفيته لا يتغير.
>
> - **زر الاسم/النص:** نوع الزر الوحيد الذي لا يحتاج إلى كيان. يتيح لك عرض نص قصير أو اسم أو عنوان. يمكنك أيضًا إضافة إجراءات إليه. لون خلفيته لا يتغير.

### خيارات الزر

<details>

<summary><b>الخيارات (YAML + الأوصاف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `entity` | string | **إلزامي** | أي كيان | كيان للتحكم فيه |
| `button_type` | string | اختياري | `switch` (افتراضي) أو `slider` أو `state` أو `name` | سلوك زرّك |
| `name` | string | اختياري | أي نص | اسم لزرّك، إذا لم يُحدد فسيُعرض اسم الكيان |
| `icon` | string | اختياري | أي أيقونة `mdi:` | أيقونة لزرّك، إذا لم تُحدد فستُعرض أيقونة الكيان أو `entity-picture` |
| `force_icon` | boolean | اختياري | `true` أو `false` (افتراضي) | إعطاء الأولوية للأيقونة بدلًا من `entity-picture` |
| `use_accent_color` | boolean | اختياري (`false` افتراضيًا) | **للإضاءة فقط.** استخدام لون التمييز الخاص بالسمة بدلًا من لون الإضاءة.                         |
| `show_state` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض أو إخفاء حالة `entity` الخاص بك |
| `show_name` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض أو إخفاء الاسم |
| `show_icon` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض أو إخفاء الأيقونة |
| `show_last_changed` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض وقت آخر تغيير لـ `entity` الخاص بك |
| `show_last_updated` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض وقت آخر تحديث لـ `entity` الخاص بك |
| `show_attribute` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض سمة من `entity` الخاص بك أسفل `name` الخاص به |
| `attribute` | string | اختياري (إلزامي إذا كان `show_attribute` مضبوطًا على `true`) | سمة من `entity` الخاص بك | السمة المراد عرضها (مثل `brightness`) |
| `scrolling_effect` | boolean | اختياري | `true` (افتراضي) أو `false` | السماح بتمرير النص عندما يتجاوز المحتوى حجم حاويته |
| `button_action` | object | اختياري | `tap_action` أو `double_tap_action` أو `hold_action`، انظر أدناه | السماح بتغيير الإجراءات الافتراضية عند النقر على الزر. |
| `tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info` |
| `double_tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر المزدوج على الأيقونة، إذا لم يُحدد فسيُستخدم `none` |
| `hold_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند الضغط المطول على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info` |
| `card_layout` | string | اختياري | `normal` (افتراضي خارج عرض الأقسام) أو `large` (افتراضي في عرض الأقسام) أو `large-2-rows` أو `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، انظر [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثل `2`) |
| `sub_button` | object | اختياري | انظر [الأزرار الفرعية](#الأزرار-الفرعية) | إضافة أزرار مخصصة مثبتة على اليمين |

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | لون الخلفية الرئيسي للعناصر المدعومة في الزر |
| `--bubble-button-border-radius` | `px` | نصف قطر الحواف للزر |
| `--bubble-button-icon-border-radius` | `px` | نصف قطر الحواف لحاوية أيقونة الزر |
| `--bubble-button-icon-background-color` | `color` | لون الخلفية لحاوية أيقونة الزر |
| `--bubble-light-white-color` | `color` | استبدال اللون الأبيض الافتراضي لأزرار/أشرطة تمرير الإضاءة |
| `--bubble-light-color` | `color` | استبدال لون أزرار/أشرطة تمرير الإضاءة (حتى إضاءة RGB) |
| `--bubble-button-box-shadow` | انظر [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل الصندوق للزر |

</details>

هذه الخيارات متاحة فقط عندما يكون `button_type` مضبوطًا على `slider`.

<details>

<summary><b>خيارات شريط التمرير (YAML + الأوصاف)</b></summary>

| الاسم                  | النوع    | الإلزامية                     | الوصف                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | اختياري                        | القيمة الدنيا لشريط التمرير. لأشرطة التمرير المخصصة.                                                    |
| `max_value`             | number  | اختياري                        | القيمة القصوى لشريط التمرير. لأشرطة التمرير المخصصة.                                                    |
| `step`                  | number  | اختياري                        | قيمة الخطوة لشريط التمرير.                                                                           |
| `tap_to_slide`          | boolean | اختياري (`false` افتراضيًا)      | تفعيل السلوك السابق لشريط التمرير حيث تنقر لتفعيله بدلًا من الضغط المطول عليه.        |
| `relative_slide`        | boolean | اختياري (`false` افتراضيًا)     | تحديث القيمة نسبةً إلى القيمة الابتدائية بدلًا من نقطة اللمس الابتدائية.                      |
| `read_only_slider`      | boolean | اختياري (`false` افتراضيًا)      | جعل شريط التمرير للقراءة فقط. يُفعّل تلقائيًا لبعض الكيانات مثل المستشعرات.                        |
| `slider_live_update`    | boolean | اختياري (`false` افتراضيًا)      | يتم تحديث حالة الكيان أثناء التمرير. **هذه الميزة غير موصى بها لجميع الكيانات.**        |
| `slider_fill_orientation` | string | اختياري | `left` (افتراضي) أو `right` أو `top` أو `bottom` | تغيير اتجاه التعبئة لشريط التمرير |
| `slider_value_position` | string | اختياري | `right` (افتراضي) أو `left` أو `center` أو `hidden` | موضع عرض القيمة |
| `invert_slider_value` | boolean | اختياري (`false` افتراضيًا) | عكس اتجاه شريط التمرير (تعبئة 100% تعني الحد الأدنى). غير متاح لأشرطة تمرير الألوان. |
| `light_slider_type` | string | اختياري | `brightness` (افتراضي) أو `hue` أو `saturation` أو `white_temp` | **للإضاءة فقط.** اختيار وضع شريط التمرير |
| `cover_slider_type` | string | اختياري | `position` (افتراضي) أو `tilt_position` | **للستائر فقط.** اختيار وضع شريط التمرير (الموضع أو الإمالة) |
| `hue_force_saturation` | boolean | اختياري (`false` افتراضيًا) | **للإضاءة فقط (وضع تدرج اللون).** فرض التشبع عند ضبط تدرج اللون |
| `hue_force_saturation_value` | number | اختياري (`100` افتراضيًا) | **للإضاءة فقط (وضع تدرج اللون).** قيمة التشبع المفروضة (0-100) |
| `use_accent_color` | boolean | اختياري (`false` افتراضيًا) | **للإضاءة فقط (وضع السطوع).** استخدام لون التمييز الخاص بالسمة بدلًا من لون الإضاءة |
| `allow_light_slider_to_0` | boolean | اختياري (`false` افتراضيًا)    | **للإضاءة فقط.** السماح لشريط التمرير بالوصول إلى 0%، ما يؤدي إلى إطفاء الإضاءة. غير متاح مع `tap_to_slide`. |
| `light_transition`      | boolean | اختياري (`false` افتراضيًا)      | **للإضاءة فقط.** تفعيل انتقالات السطوع السلسة للمصابيح المدعومة.                           |
| `light_transition_time` | number  | اختياري (`500` افتراضيًا)        | **للإضاءة فقط.** مدة الانتقال بالمللي ثانية. يتطلب `light_transition: true`.            |

</details>

#### أمثلة

<details>

<summary>زر شريط تمرير يمكنه التحكم في سطوع الإضاءة</summary>

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

<summary>زر مع مزيد من الخيارات</summary>

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

## مشغل الوسائط

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

تتيح لك هذه البطاقة التحكم في كيان مشغل وسائط.

### خيارات مشغل الوسائط

<details>

<summary><b>الخيارات (YAML + الأوصاف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `entity` | string | **إلزامي** | أي مشغل وسائط | مشغل الوسائط المراد التحكم فيه |
| `name` | string | اختياري | أي نص | اسم لمشغل الوسائط الخاص بك، إذا لم يُحدد فسيُعرض اسم الكيان |
| `icon` | string | اختياري | أي أيقونة `mdi:` | أيقونة لمشغل الوسائط الخاص بك، إذا لم تُحدد فستُعرض أيقونة الكيان أو `entity-picture` |
| `force_icon` | boolean | اختياري | `true` أو `false` (افتراضي) | إعطاء الأولوية للأيقونة بدلًا من `entity-picture` |
| `show_state` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض أو إخفاء حالة `entity` الخاص بك |
| `show_name` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض أو إخفاء الاسم |
| `show_icon` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض أو إخفاء الأيقونة |
| `show_last_changed` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض وقت آخر تغيير لـ `entity` الخاص بك |
| `show_last_updated` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض وقت آخر تحديث لـ `entity` الخاص بك |
| `show_attribute` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض سمة من `entity` الخاص بك أسفل `name` الخاص به |
| `attribute` | string | اختياري (إلزامي إذا كان `show_attribute` مضبوطًا على `true`) | سمة من `entity` الخاص بك | السمة المراد عرضها (مثل `brightness`) |
| `scrolling_effect` | boolean | اختياري | `true` (افتراضي) أو `false` | السماح بتمرير النص عندما يتجاوز المحتوى حجم حاويته |
| `min_volume` | number | اختياري | أي رقم | القيمة الدنيا لشريط تمرير مستوى الصوت. |
| `max_volume` | number | اختياري | أي رقم | القيمة القصوى لشريط تمرير مستوى الصوت. |
| `cover_background` | boolean | اختياري | `true` أو `false` (افتراضي) | استخدام غلاف وسائط ضبابي كخلفية للبطاقة. |
| `button_action` | object | اختياري | `tap_action` أو `double_tap_action` أو `hold_action`، انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | السماح بتغيير الإجراءات الافتراضية عند النقر على الزر. |
| `tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |
| `double_tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر المزدوج على الأيقونة، إذا لم يُحدد فسيُستخدم `none`. |
| `hold_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند الضغط المطول على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |
| `main_buttons_position` | string | اختياري | `default` أو `bottom` | نقل أزرار إجراءات الغلاف إلى الأسفل (ثابتة) |
| `main_buttons_full_width` | boolean | اختياري | `true` أو `false` | جعل أزرار الإجراءات السفلية بعرض كامل (افتراضيًا: `true` عندما يكون الموضع `bottom`) |
| `main_buttons_alignment` | string | اختياري | `end` (افتراضي) أو `center` أو `start` أو `space-between` | محاذاة أزرار الإجراءات السفلية عندما لا تكون بعرض كامل |
| `card_layout` | string | اختياري | `normal` (افتراضي خارج عرض الأقسام) أو `large` (افتراضي في عرض الأقسام) أو `large-2-rows` أو `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، انظر [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثل `2`) |
| `sub_button` | object | اختياري | انظر [الأزرار الفرعية](#الأزرار-الفرعية) | إضافة أزرار مخصصة مثبتة على اليمين |
| `hide` | object | اختياري | انظر أدناه | إخفاء أزرار من البطاقة |

#### خيارات الإخفاء

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | اختياري | `true` أو `false` (افتراضي) | إخفاء زر التشغيل/الإيقاف المؤقت |
| `volume_button` | boolean | اختياري | `true` أو `false` (افتراضي) | إخفاء زر مستوى الصوت |
| `previous_button` | boolean | اختياري | `true` أو `false` (افتراضي) | إخفاء زر السابق |
| `next_button` | boolean | اختياري | `true` أو `false` (افتراضي) | إخفاء زر التالي |
| `power_button` | boolean | اختياري | `true` أو `false` (افتراضي) | إخفاء زر التشغيل |

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | لون الخلفية الرئيسي لمشغل الوسائط |
| `--bubble-media-player-border-radius` | `px` | نصف قطر الحواف لمشغل الوسائط |
| `--bubble-media-player-buttons-border-radius` | `px` | نصف قطر الحواف لأزرار مشغل الوسائط |
| `--bubble-media-player-slider-background-color` | `color` | لون الخلفية لشريط تمرير مستوى الصوت |
| `--bubble-media-player-icon-border-radius` | `px` | نصف قطر الحواف لحاوية أيقونة مشغل الوسائط |
| `--bubble-media-player-icon-background-color` | `color` | لون الخلفية لحاوية أيقونة مشغل الوسائط |
| `--bubble-media-player-box-shadow` | انظر [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل الصندوق لمشغل الوسائط |

</details>


#### أمثلة

<details>

<summary>مشغل وسائط مع جميع الخيارات</summary>

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

## الستارة

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

تتيح لك هذه البطاقة التحكم في كيانات `cover` الخاصة بك.

### خيارات الستارة

<details>

<summary><b>الخيارات (YAML مع الشرح)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `entity` | string | **إلزامي** | أي ستارة | ستارة للتحكم فيها |
| `name` | string | اختياري | أي نص | اسم لستارتك، إذا لم يُحدد فسيُعرض اسم الكيان |
| `force_icon` | boolean | اختياري | `true` أو `false` (افتراضيًا) | إعطاء الأولوية للأيقونة بدلًا من `entity-picture` |
| `show_state` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض أو إخفاء حالة `entity` الخاص بك |
| `show_name` | boolean | اختياري | `true` (افتراضيًا) أو `false` | عرض أو إخفاء الاسم |
| `show_icon` | boolean | اختياري | `true` (افتراضيًا) أو `false` | عرض أو إخفاء الأيقونة |
| `show_last_changed` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض وقت آخر تغيير لـ `entity` الخاص بك |
| `show_last_updated` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض وقت آخر تحديث لـ `entity` الخاص بك |
| `show_attribute` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض سمة من سمات `entity` الخاص بك أسفل `name` |
| `attribute` | string | اختياري (إلزامي إذا كان `show_attribute` مضبوطًا على `true`) | سمة من سمات `entity` الخاص بك | السمة المراد عرضها (مثل `brightness`) |
| `scrolling_effect` | boolean | اختياري | `true` (افتراضيًا) أو `false` | السماح بتمرير النص عندما يتجاوز المحتوى حجم حاويته |
| `icon_open` | string | اختياري | أي أيقونة `mdi:` | أيقونة لستارتك المفتوحة، إذا لم تُحدد فستُعرض أيقونة الستارة المفتوحة الافتراضية |
| `icon_close` | string | اختياري | أي أيقونة `mdi:` | أيقونة لستارتك المغلقة، إذا لم تُحدد فستُعرض أيقونة الستارة المغلقة الافتراضية |
| `icon_up` | string | اختياري | أي أيقونة `mdi:` | أيقونة لزر فتح الستارة، إذا لم تُحدد فستُعرض أيقونة فتح الستارة الافتراضية |
| `icon_down` | string | اختياري | أي أيقونة `mdi:` | أيقونة لزر إغلاق الستارة، إذا لم تُحدد فستُعرض أيقونة إغلاق الستارة الافتراضية |
| `open_service` | string | اختياري | أي خدمة أو سكربت | خدمة لفتح ستارتك، افتراضيًا `cover.open_cover` |
| `stop_service` | string | اختياري | أي خدمة أو سكربت | خدمة لإيقاف ستارتك، افتراضيًا `cover.stop_cover` |
| `close_service` | string | اختياري | أي خدمة أو سكربت | خدمة لإغلاق ستارتك، افتراضيًا `cover.close_cover` |
| `tilt_buttons` | string | اختياري | `top` (افتراضيًا)، `bottom`، `left`، `right`، `hidden` | موضع أزرار التحكم في الإمالة (تظهر فقط إذا كانت الستارة تدعم الإمالة) |
| `open_tilt_service` | string | اختياري | أي خدمة أو سكربت | خدمة لفتح الإمالة، افتراضيًا `cover.open_cover_tilt` |

| `close_tilt_service` | string | اختياري | أي خدمة أو سكربت | خدمة لإغلاق الإمالة، افتراضيًا `cover.close_cover_tilt` |
| `button_action` | object | اختياري | `tap_action` أو `double_tap_action` أو `hold_action`، انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | يتيح تغيير الإجراءات الافتراضية عند النقر على الزر. |
| `tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |
| `double_tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر المزدوج على الأيقونة، إذا لم يُحدد فسيُستخدم `none`. |
| `hold_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند الضغط المطول على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |
| `main_buttons_position` | string | اختياري | `default` أو `bottom` | نقل أزرار التحكم إلى الأسفل (بموضع ثابت) |
| `main_buttons_full_width` | boolean | اختياري | `true` أو `false` | جعل أزرار التحكم السفلية بعرض كامل (افتراضيًا: `true` عندما يكون الموضع `bottom`) |
| `main_buttons_alignment` | string | اختياري | `end` (افتراضيًا)، `center`، `start`، `space-between` | محاذاة أزرار التحكم السفلية عندما لا تكون بعرض كامل |
| `card_layout` | string | اختياري | `normal` (افتراضيًا خارج عرض الأقسام)، `large` (افتراضيًا في عرض الأقسام)، `large-2-rows`، `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، انظر [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثل `2`) |
| `sub_button` | object | اختياري | انظر [الأزرار الفرعية](#الأزرار-الفرعية) | إضافة أزرار مخصصة مثبتة على اليمين |

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | لون الخلفية الرئيسي للعناصر المدعومة في بطاقة الستارة |
| `--bubble-cover-border-radius` | `px` | استدارة الحواف لبطاقة الستارة |
| `--bubble-cover-icon-border-radius` | `px` | استدارة الحواف لحاوية أيقونة بطاقة الستارة |
| `--bubble-cover-icon-background-color` | `color` | لون الخلفية لحاوية أيقونة بطاقة الستارة |
| `--bubble-cover-box-shadow` | انظر [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل بطاقة الستارة |
| `--bubble-button-box-shadow` | انظر [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل الأزرار في بطاقة الستارة |

</details>


#### مثال

<details>

<summary>بطاقة يمكنها التحكم في ستارة أسطوانية</summary>

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

## الاختيار

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

تتيح لك هذه البطاقة إضافة قائمة منسدلة لكيانات `input_select` / `select` الخاصة بك. تدعم هذه البطاقة أيضًا الأزرار الفرعية وجميع ميزات Bubble Card المشتركة.

> [!TIP]
> يمكنك أيضًا الحصول على أزرار فرعية للاختيار إذا أردت، هذه الميزة متاحة في جميع البطاقات التي تدعم الأزرار الفرعية.

### خيارات الاختيار

<details>

<summary><b>الخيارات (YAML مع الشرح)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `entity` | string | **إلزامي** | أي كيان | كيان للتحكم فيه |
| `name` | string | اختياري | أي نص | اسم لبطاقة الاختيار، إذا لم يُحدد فسيُعرض اسم الكيان |
| `icon` | string | اختياري | أي أيقونة `mdi:` | أيقونة لبطاقة الاختيار، إذا لم تُحدد فستُعرض أيقونة الكيان أو `entity-picture` |
| `force_icon` | boolean | اختياري | `true` أو `false` (افتراضيًا) | إعطاء الأولوية للأيقونة بدلًا من `entity-picture` |
| `show_state` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض أو إخفاء حالة `entity` الخاص بك |
| `show_name` | boolean | اختياري | `true` (افتراضيًا) أو `false` | عرض أو إخفاء الاسم |
| `show_icon` | boolean | اختياري | `true` (افتراضيًا) أو `false` | عرض أو إخفاء الأيقونة |
| `show_last_changed` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض وقت آخر تغيير لـ `entity` الخاص بك |
| `show_last_updated` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض وقت آخر تحديث لـ `entity` الخاص بك |
| `show_attribute` | boolean | اختياري | `true` أو `false` (افتراضيًا) | عرض سمة من سمات `entity` الخاص بك أسفل `name` |
| `attribute` | string | اختياري (إلزامي إذا كان `show_attribute` مضبوطًا على `true`) | سمة من سمات `entity` الخاص بك | السمة المراد عرضها (مثل `brightness`) |
| `scrolling_effect` | boolean | اختياري | `true` (افتراضيًا) أو `false` | السماح بتمرير النص عندما يتجاوز المحتوى حجم حاويته |
| `tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |
| `double_tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر المزدوج على الأيقونة، إذا لم يُحدد فسيُستخدم `none`. |
| `hold_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند الضغط المطول على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |
| `card_layout` | string | اختياري | `normal` (افتراضيًا خارج عرض الأقسام)، `large` (افتراضيًا في عرض الأقسام)، `large-2-rows`، `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، انظر [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثل `2`) |
| `sub_button` | object | اختياري | انظر [الأزرار الفرعية](#الأزرار-الفرعية) | إضافة أزرار مخصصة مثبتة على اليمين |

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | لون الخلفية الرئيسي للعناصر المدعومة في بطاقة الاختيار |
| `--bubble-select-background-color` | `color` | لون الخلفية لبطاقة الاختيار |
| `--bubble-select-list-border-radius` | `px` | استدارة الحواف للقائمة المنسدلة في البطاقة |
| `--bubble-select-list-item-accent-color` | `color` | اللون المميز للعنصر المحدد |
| `--bubble-select-list-background-color` | `color` | لون الخلفية للقائمة المنسدلة في البطاقة |
| `--bubble-select-list-width` | `px` | عرض القائمة المنسدلة في البطاقة |
| `--bubble-select-arrow-background-color` | `color` | لون الخلفية لسهم القائمة المنسدلة |
| `--bubble-select-button-border-radius` | `px` | استدارة الحواف لزر الاختيار |
| `--bubble-select-border-radius` | `px` | استدارة الحواف لبطاقة الاختيار |
| `--bubble-select-icon-border-radius` | `px` | استدارة الحواف لحاوية أيقونة بطاقة الاختيار |
| `--bubble-select-icon-background-color` | `color` | لون الخلفية لحاوية أيقونة بطاقة الاختيار |
| `--bubble-select-box-shadow` | انظر [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل بطاقة الاختيار |

</details>


#### أمثلة

<details>

<summary>بطاقة اختيار تحتوي على قائمة مشاهد</summary>

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

## التكييف

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

تتيح لك هذه البطاقة التحكم في كيانات `climate` الخاصة بك.

> [!TIP]
> قائمة اختيار الوضع هي [زر فرعي](#الأزرار-الفرعية) يُضاف تلقائيًا عند إنشاء البطاقة. يمكنك بعد ذلك تعديله أو إزالته كما تشاء.

### خيارات التكييف

<details>

<summary><b>الخيارات (YAML مع الشرح)</b></summary>

| الاسم                     | النوع    | الإلزامية                         | الخيارات المدعومة                                  | الوصف                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **إلزامي**                        | كيان تكييف                                   | الكيان المراد التحكم فيه (مثل `climate.living_room`).                                                            |
| `name`                  | string  | اختياري                            | أي نص                                       | اسم مخصص للبطاقة. إذا لم يُحدد، فسيُعرض اسم الكيان.                                    |
| `icon`                  | string  | اختياري                            | أي أيقونة `mdi:`                                  | أيقونة مخصصة للبطاقة. إذا لم تُحدد، فستُستخدم أيقونة الكيان أو `entity-picture`.                   |
| `force_icon`            | boolean | اختياري                            | `true` أو `false` (افتراضيًا)                     | إعطاء الأولوية للأيقونة بدلًا من `entity-picture`.                                                           |
| `show_state`            | boolean | اختياري                            | `true` أو `false` (افتراضيًا)                     | عرض أو إخفاء الحالة الحالية لـ `entity`.                                                                 |
| `show_name`             | boolean | اختياري                            | `true` (افتراضيًا) أو `false`                     | عرض أو إخفاء اسم الكيان.                                                                            |
| `show_icon`             | boolean | اختياري                            | `true` (افتراضيًا) أو `false`                     | عرض أو إخفاء الأيقونة.                                                                                          |
| `hide_target_temp_low`  | boolean | اختياري (فقط للكيانات التي تدعم `target_temp_low`) | `true` أو `false` (افتراضيًا) | إخفاء التحكم في درجة الحرارة المستهدفة الدنيا إذا كان `entity` يدعمها.                                          |
| `hide_target_temp_high` | boolean | اختياري (فقط للكيانات التي تدعم `target_temp_high`)| `true` أو `false` (افتراضيًا) | إخفاء التحكم في درجة الحرارة المستهدفة القصوى إذا كان `entity` يدعمها.                                         |
| `state_color`           | boolean | اختياري                            | `true` أو `false` (افتراضيًا)                     | تطبيق لون خلفية ثابت عندما يكون كيان التكييف قيد التشغيل.                                              |
| `step` | number | اختياري | أي رقم | مقدار خطوة درجة الحرارة. |
| `min_temp` | number | اختياري | أي رقم | درجة الحرارة الدنيا. |
| `max_temp` | number | اختياري | أي رقم | درجة الحرارة القصوى. |
| `button_action` | object | اختياري | `tap_action` أو `double_tap_action` أو `hold_action`، انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | يتيح تغيير الإجراءات الافتراضية عند النقر على الزر. |
| `tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |
| `double_tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر المزدوج على الأيقونة، إذا لم يُحدد فسيُستخدم `none`. |
| `hold_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند الضغط المطول على الأيقونة، إذا لم يُحدد فسيُستخدم `more-info`. |                              |
| `main_buttons_position` | string | اختياري | `default` أو `bottom` | نقل أزرار التحكم في التكييف إلى الأسفل (بموضع ثابت) |
| `main_buttons_full_width` | boolean | اختياري | `true` أو `false` | جعل أزرار الإجراءات السفلية بعرض كامل (افتراضيًا: `true` عندما يكون الموضع `bottom`) |
| `main_buttons_alignment` | string | اختياري | `end` (افتراضيًا)، `center`، `start`، `space-between` | محاذاة أزرار الإجراءات السفلية عندما لا تكون بعرض كامل |
| `card_layout` | string | اختياري | `normal` (افتراضيًا خارج عرض الأقسام)، `large` (افتراضيًا في عرض الأقسام)، `large-2-rows`، `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، انظر [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثل `2`) |
| `sub_button`            | object  | اختياري                            | انظر [الأزرار الفرعية](#الأزرار-الفرعية)                | إضافة أزرار مخصصة مثبتة على اليمين. مفيد لقائمة اختيار وضع التكييف.                                  |

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | لون الخلفية الرئيسي للعناصر المدعومة في بطاقة التكييف |
| `--bubble-climate-border-radius` | `px` | استدارة الحواف للعناصر المدعومة في بطاقة التكييف |
| `--bubble-climate-button-background-color` | `color` | لون الخلفية لأزرار بطاقة التكييف |
| `--bubble-climate-icon-border-radius` | `px` | استدارة الحواف لحاوية أيقونة بطاقة التكييف |
| `--bubble-state-climate-fan-only-color` | `color` | لون التراكب لحالة المروحة فقط |
| `--bubble-state-climate-dry-color` | `color` | لون التراكب لحالة التجفيف |
| `--bubble-state-climate-cool-color` | `color` | لون التراكب لحالة التبريد |
| `--bubble-state-climate-heat-color` | `color` | لون التراكب لحالة التدفئة |
| `--bubble-state-climate-auto-color` | `color` | لون التراكب للحالة التلقائية |
| `--bubble-state-climate-heat-cool-color` | `color` | لون التراكب لحالة التدفئة والتبريد |
| `--bubble-climate-accent-color` | `color` | اللون المميز لبطاقة التكييف |
| `--bubble-climate-box-shadow` | انظر [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل حاوية التكييف. |

</details>


#### أمثلة

<details>

<summary>بطاقة تكييف مع قائمة منسدلة لأوضاع التكييف</summary>

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

## التقويم

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

تتيح لك هذه البطاقة عرض كيانات التقويم الخاصة بك. محتواها قابل للتمرير، بحيث يمكنك تصفح الأحداث القادمة بسهولة.

### خيارات التقويم

<details>

<summary><b>الخيارات (YAML مع الشرح)</b></summary>

| الاسم                | النوع    | الإلزامية  | الخيارات المدعومة                               | الوصف                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | اختياري     | أي رقم (الحد الأدنى: 1)                        | عدد أيام التقويم التي تُجلب الأحداث لها، من الآن حتى نهاية اليوم رقم N (افتراضيًا: 7) |
| `entities`          | object  | **إلزامي** | كائن كيان تقويم (انظر أدناه)            | الكيان المراد التحكم فيه (مثل `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **إلزامي** | كيان تقويم                               | كيان التقويم المراد عرضه                                                          |
| `entities.color`    | string  | اختياري     | لون                                         | لون مخصص لشريحة التقويم. إذا لم يُحدد، فسيُختار لون تلقائيًا |
| `days`              | number  | اختياري     | أي رقم (الحد الأدنى: 1)                         | عدد أيام التقويم التي تُجلب الأحداث لها، من الآن حتى نهاية اليوم رقم N (افتراضيًا: 7) |
| `limit`             | number  | اختياري     | رقم                                        | عدد الأحداث التي ستُعرض على البطاقة                                  |
| `show_end`          | boolean | اختياري     | `true` أو `false` (افتراضيًا)                     | عرض أو إخفاء وقت انتهاء الأحداث                                                    |
| `show_progress`     | boolean | اختياري     | `true` (افتراضيًا) أو `false`                     | عرض أو إخفاء شريط تقدم الحدث                                                     |
| `show_started_events`| boolean | اختياري     | `true` (افتراضيًا) أو `false`                     | عرض أو إخفاء الأحداث الجارية حاليًا                                                 |
| `scrolling_effect`  | boolean | اختياري | `true` (افتراضيًا) أو `false` | السماح بتمرير النص عندما يتجاوز المحتوى حجم حاويته |
| `event_action` | object | اختياري | `tap_action` أو `double_tap_action` أو `hold_action`، انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | يتيح إضافة إجراءات عند النقر على الحدث. |
| `tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر على اليوم، إذا لم يُحدد فسيُستخدم `none`. |
| `double_tap_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر المزدوج على اليوم، إذا لم يُحدد فسيُستخدم `none`. |
| `hold_action` | object | اختياري | انظر [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند الضغط المطول على اليوم، إذا لم يُحدد فسيُستخدم `none`. |
| `card_layout` | string | اختياري | `normal` (افتراضيًا خارج عرض الأقسام)، `large` (افتراضيًا في عرض الأقسام)، `large-2-rows`، `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، انظر [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثل `2`) |
| `sub_button` | object | اختياري | انظر [الأزرار الفرعية](#الأزرار-الفرعية) | إضافة أزرار مخصصة مثبتة على اليمين |

</details>

<details>

<summary><b>متغيرات CSS (انظر <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير                                  | القيمة المتوقعة | الوصف                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | لون الخلفية الرئيسي للعناصر المدعومة في بطاقة التقويم  |
| `--bubble-calendar-border-radius`         | `px`           | استدارة الحواف للعناصر المدعومة في بطاقة التقويم |
| `--bubble-calendar-height`                | `px`           | ارتفاع بطاقة التقويم                                        |

</details>

#### أمثلة

<details>

<summary>بطاقة تقويم بعدد محدود من الأحداث</summary>

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

<summary>بطاقة تقويم مع وقت الانتهاء وشريط التقدم</summary>

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


## الفاصل

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

هذه البطاقة عبارة عن فاصل بسيط لتقسيم نافذتك المنبثقة إلى فئات / أقسام، مثل: الإضاءة، الأجهزة، الستائر، الإعدادات، الأتمتة...

### خيارات الفاصل

<details>

<summary><b>الخيارات (YAML + الأوصاف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `name` | string | اختياري لكن موصى به | أي نص | اسم للفاصل الخاص بك |
| `icon` | string | اختياري لكن موصى به | أي أيقونة `mdi:` | أيقونة للفاصل الخاص بك |
| `card_layout` | string | اختياري | `normal` (افتراضي إذا لم تكن البطاقة في عرض الأقسام)، `large` (افتراضي في عرض الأقسام)، `large-2-rows`، `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، راجع [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثلًا `2`) |
| `sub_button` | object | اختياري | راجع [الأزرار الفرعية](#الأزرار-الفرعية) | إضافة أزرار مخصصة مثبتة على اليمين |

</details>

<details>

<summary><b>متغيرات CSS (راجع <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | لون خلفية الخط في الفاصل |

</details>

#### مثال

<details>

<summary>فاصل لقسم "الستائر"</summary>

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

## العمود الفارغ

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

هذه البطاقة موجودة لملء عمود فارغ. هذا مفيد إذا كان لديك `horizontal-stack` في نافذتك المنبثقة يحتوي على بطاقة واحدة فقط. ألقِ نظرة على الزاوية السفلية اليمنى من لقطة الشاشة هذه لكي (لا) تراها.

### خيارات العمود الفارغ

لا تملك هذه البطاقة أي خيارات ولا تدعم [التنسيق](#التنسيق)، لكنها تدعم خيارات التخطيط الخاصة بأقسام HA.

#### مثال

<details>

<summary>عمود فارغ داخل تكديس أفقي</summary>

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

## الأزرار الفرعية فقط

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

هذه البطاقة مخصصة للأزرار الفرعية فقط. إنها مثالية للقوائم أو الإجراءات السريعة أو شرائح المعلومات أو تذييل ثابت في أسفل الصفحة.

> [!IMPORTANT]  
> تستخدم هذه البطاقة مخطط الأزرار الفرعية الجديد. استخدم `sub_button.bottom` لتعريف أزرارك. يتم تجاهل قسم `sub_button.main`.

### خيارات الأزرار الفرعية فقط

<details>

<summary><b>الخيارات (YAML + الأوصاف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **مطلوب** | راجع [الأزرار الفرعية](#الأزرار-الفرعية) | عرّف أزرارك الفرعية باستخدام قسم `bottom` |
| `hide_main_background` | boolean | اختياري | `true` أو `false` (افتراضي) | إزالة خلفية البطاقة |
| `footer_mode` | boolean | اختياري | `true` أو `false` (افتراضي) | تثبيت البطاقة في أسفل الصفحة |
| `footer_full_width` | boolean | اختياري | `true` أو `false` (افتراضي) | جعل التذييل بعرض كامل (100%) |
| `footer_width` | number | اختياري | أي رقم | عرض التذييل بالبكسل عندما يكون `footer_full_width` مضبوطًا على `false` |
| `footer_bottom_offset` | number | اختياري | أي رقم | المسافة من أسفل الصفحة بالبكسل (افتراضيًا: `16`) |
| `card_layout` | string | اختياري | `normal` (افتراضي إذا لم تكن البطاقة في عرض الأقسام)، `large` (افتراضي في عرض الأقسام)، `large-2-rows`، `large-sub-buttons-grid` | تخطيط تنسيق البطاقة، راجع [تخطيطات البطاقة](#تخطيطات-البطاقة) |
| `rows` | number | اختياري | أي رقم | عدد الصفوف (الارتفاع) (مثلًا `2`) |

</details>

<details>

<summary><b>متغيرات CSS (راجع <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | عرض التذييل عندما يكون `footer_full_width` مضبوطًا على `false` |
| `--bubble-footer-bottom` | `px` | الإزاحة السفلية للتذييل |
| `--bubble-footer-box-shadow` | راجع [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ظل الصندوق لحاوية التذييل |

</details>

#### أمثلة

<details>

<summary>على شكل شرائح (كما في لقطة الشاشة)</summary>

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

<summary>قائمة تذييل ثابتة</summary>

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

## الأزرار الفرعية

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

في كل بطاقة تدعم هذا الخيار، يمكنك إضافة أزرار فرعية لتخصيص بطاقاتك أكثر. يمكنك مثلًا إنشاء زر يتحكم في مكنسة كهربائية، أو بطاقة طقس، أو أي شيء تقريبًا يخطر ببالك. تدعم هذه الأزرار الفرعية إجراءات النقر ومعظم خيارات الزر.

تدعم الأزرار الفرعية الآن ثلاثة أنواع: **افتراضي (زر)**، و**شريط تمرير**، و**قائمة منسدلة / اختيار**. يمكنك مزج الأنواع في البطاقة نفسها، ووضع الأزرار الفرعية في الأعلى أو الأسفل، وتنظيمها في مجموعات للحصول على تخطيطات أكثر تقدمًا.

#### موضع الأزرار الفرعية والمجموعات

<details>

<summary><b>بنية الأزرار الفرعية (main / bottom + المجموعات)</b></summary>

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

**ملاحظات:**
- `main` و`bottom` قسمان مستقلان. الأزرار الفرعية السفلية مثبتة في أسفل البطاقة.
- يقبل `main_layout` و`bottom_layout` القيمة `inline` (افتراضي) أو `rows` لتكديس المجموعات عموديًا.
- المجموعات كائنات تحتوي على مصفوفة `group` وخيار `buttons_layout` اختياري (`inline` أو `column`).
- خيار `justify_content` متاح **للمجموعات السفلية فقط** (`start`، `center`، `end`، `fill`).
- عند وجود أزرار فرعية سفلية، يتحول تخطيط البطاقة تلقائيًا إلى `large` ما لم تحدد تخطيطًا آخر صراحةً.
- مصفوفات `sub_button` القديمة لا تزال مدعومة وتُعامل على أنها القسم `main`.

</details>

### خيارات الأزرار الفرعية

<details>

<summary><b>الخيارات (YAML + الوصف)</b></summary>

| الاسم | النوع | الإلزامية | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- | --- |
| `entity` | string | اختياري | أي كيان | كيان للتحكم فيه |
| `name` | string | اختياري | أي نص | اسم لزرك الفرعي، إذا لم يتم تحديده فسيتم عرض اسم الكيان |
| `icon` | string | اختياري | أي أيقونة `mdi:` | أيقونة لزرك الفرعي، إذا لم يتم تحديدها فسيتم عرض أيقونة الكيان أو صورة الكيان |
| `force_icon` | boolean | اختياري | `true` أو `false` (افتراضي) | فرض الأيقونة حتى عند توفر صورة للكيان |
| `sub_button_type` | string | اختياري | `default` أو `slider` أو `select` | اختيار نوع الزر الفرعي |
| `show_background` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض خلفية لزرك الفرعي، سيتغير لونها بناءً على حالة الكيان الخاص بك |
| `state_background` | boolean | اختياري | `true` (افتراضي) أو `false` | استخدام لون الحالة عندما يكون الكيان `on` |
| `light_background` | boolean | اختياري | `true` (افتراضي) أو `false` | استخدام لون الإضاءة للخلفية عند توفره |
| `show_state` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض أو إخفاء حالة `entity` الخاص بك |
| `show_name` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض أو إخفاء الاسم |
| `show_icon` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض أو إخفاء الأيقونة |
| `show_last_changed` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض وقت آخر تغيير لـ `entity` الخاص بك |
| `show_last_updated` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض وقت آخر تحديث لـ `entity` الخاص بك |
| `show_attribute` | boolean | اختياري | `true` أو `false` (افتراضي) | عرض سمة من `entity` الخاص بك أسفل الاسم `name` |
| `attribute` | string | اختياري (مطلوب إذا كان `show_attribute` مضبوطًا على `true`) | سمة من `entity` الخاص بك | السمة المراد عرضها (مثلًا `brightness`) |
| `select_attribute` | string | اختياري | قائمة سمات من `entity` الخاص بك (راجع الخيارات المدعومة أعلاه) | ستفتح قائمة السمات هذه قائمة منسدلة عند النقر عليها (مثلًا `effect_list`) |
| `show_arrow` | boolean | اختياري | `true` (افتراضي) أو `false` | عرض أو إخفاء سهم القائمة المنسدلة للأزرار الفرعية من نوع الاختيار |
| `scrolling_effect` | boolean | اختياري | `true` (افتراضي) أو `false` | السماح بتمرير النص عندما يتجاوز المحتوى حجم الحاوية |
| `tap_action` | object | اختياري | راجع [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر على الزر الفرعي، إذا لم يتم تحديده فسيتم استخدام `more-info`. |
| `double_tap_action` | object | اختياري | راجع [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند النقر المزدوج على الزر الفرعي، إذا لم يتم تحديده فسيتم استخدام `none`. |
| `hold_action` | object | اختياري | راجع [الإجراءات](#إجراءات-النقر-والنقر-المزدوج-والضغط-المطول) | تحديد نوع الإجراء عند الضغط المطول على الزر الفرعي، إذا لم يتم تحديده فسيتم استخدام `more-info`. |
| `fill_width` | boolean | اختياري | `true` أو `false` | ملء العرض المتاح (افتراضيًا: `false` للقسم الرئيسي و`true` للقسم السفلي) |
| `width` | number أو string | اختياري | أي رقم أو طول CSS | عرض مخصص (`px` للقسم الرئيسي و`%` للقسم السفلي افتراضيًا) |
| `custom_height` | number | اختياري | أي رقم | ارتفاع مخصص بالبكسل |
| `content_layout` | string | اختياري | `icon-left` (افتراضي)، `icon-top`، `icon-bottom`، `icon-right` | موضع الأيقونة داخل الزر الفرعي |
| `always_visible` | boolean | اختياري | `true` أو `false` (افتراضي) | **لشريط التمرير فقط.** إظهار شريط التمرير دائمًا بدلًا من فتحه عند النقر |
| `show_button_info` | boolean | اختياري | `true` أو `false` (افتراضي) | **لشريط التمرير فقط.** عرض الأيقونة/الاسم/الحالة عند تفعيل `always_visible` |
| `visibility` | object أو list | اختياري | راجع [الشروط](https://www.home-assistant.io/docs/scripts/conditions/) | عرض أو إخفاء الزر الفرعي بناءً على الشروط |
| `hide_when_parent_unavailable` | boolean | اختياري | `true` أو `false` (افتراضي) | إخفاء الزر الفرعي عندما يكون كيان البطاقة الأصلية غير متاح |

</details>

<details>

<summary><b>خيارات الأزرار الفرعية من نوع شريط التمرير (نفس خيارات أشرطة تمرير الأزرار)</b></summary>

<br>

تدعم الأزرار الفرعية من نوع شريط التمرير نفس خيارات أشرطة تمرير الأزرار، بما في ذلك:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>متغيرات CSS (راجع <a href="#التنسيق">التنسيق</a>)</b></summary>

| المتغير | القيمة المتوقعة | الوصف |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | نصف قطر حواف الأزرار الفرعية |
| `--bubble-sub-button-background-color` | `color` | لون خلفية الأزرار الفرعية |
| `--bubble-sub-slider-border-radius` | `px` | نصف قطر حواف الأزرار الفرعية من نوع شريط التمرير |
| `--bubble-sub-slider-background-color` | `color` | لون خلفية الأزرار الفرعية من نوع شريط التمرير |
| `--bubble-sub-slider-height` | `px` | ارتفاع الأزرار الفرعية من نوع شريط التمرير الظاهرة دائمًا |
| `--bubble-sub-button-dark-text-color` | `color` | لون النص على خلفيات الأزرار الفرعية الفاتحة |

</details>

#### أمثلة

<details>

<summary>زر مع بعض الأزرار الفرعية لإنشاء بطاقة مكنسة كهربائية (كما في لقطة الشاشة)</summary>

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

<summary>زر شريط تمرير مع زر فرعي يعرض السطوع وزر آخر يبدّل الإضاءة (كما في لقطة الشاشة)</summary>

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

<summary>زر يعرض درجة الحرارة في الداخل والخارج مع حالة الطقس لليوم وغدًا (لقطة الشاشة مرفقة)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> لسوء حظي الطقس غائم طوال الوقت، لكن جميع الأيقونات تتغير بناءً على حالة الطقس.

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

## تخطيطات البطاقة

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

تدعم Bubble Card عرض الأقسام في Home Assistant دعمًا كاملًا، إذ يمكنك تغيير تخطيط البطاقة لجعلها أكبر، وكذلك تغيير عدد الأعمدة أو الصفوف التي تشغلها البطاقة في عرض الأقسام لديك (فقط في البطاقات التي تدعم هذا الخيار). هذه التخطيطات مدعومة أيضًا في جميع أنواع العروض الأخرى.

<details>

<summary><b>تخطيطات البطاقة المتاحة</b></summary>

| التخطيط | الوصف |
| --- | --- |
| `normal` | التخطيط العادي (غير محسّن لعرض الأقسام) |
| `large` | تخطيط أكبر يتغيّر حجمه وفق الصفوف المحددة في عرض الأقسام (محسّن لعرض الأقسام) |
| `large-2-rows` | تخطيط أكبر مع صفين من الأزرار الفرعية يتغيّر حجمه وفق الصفوف المحددة في عرض الأقسام (محسّن لعرض الأقسام) |
| `large-sub-buttons-grid` | يعرض هذا التخطيط الأزرار الفرعية في شبكة، ويجب ضبط `rows` على `2` على الأقل.

</details>

#### أمثلة

<details>

<summary>زر كبير يعرض إحصاءات الطاقة مع صفين من الأزرار الفرعية (لقطة شاشة مرفقة)</summary>

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

<summary>زر كبير متعدد الصفوف مع 12 زرًا فرعيًا</summary>

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

## إجراءات النقر والنقر المزدوج والضغط المطول

يمكنك أيضًا استخدام إجراءات النقر والنقر المزدوج والضغط المطول الافتراضية في Home Assistant على البطاقات التي تدعم هذا الخيار. على سبيل المثال، يتيح لك هذا عرض نافذة "مزيد من المعلومات" بالضغط المطول على أيقونة زر، أو تشغيل خدمة عند الضغط على زر فرعي.

**ملاحظة: عند إعداد `double_tap_action`، سيتأخر `tap_action` العادي بمقدار 200 مللي ثانية للسماح باكتشاف
النقر المزدوج. إذا كان هذا التأخير غير مرغوب فيه، فاضبط `double_tap_action` على `none` لتعطيل التعامل مع النقر المزدوج.**

### خيارات الإجراءات

<details>

<summary><b>الخيارات (YAML + الوصف)</b></summary>

| الاسم | النوع | الخيارات المدعومة | الوصف |
| --- | --- | --- | --- |
| `action` | string | `more-info`، `toggle`، `call-service`، `navigate`، `url`، `fire-dom-event`، `none` | الإجراء المراد تنفيذه |
| `target` | object |  | يعمل فقط مع `call-service`. يتبع [صيغة home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | أي مسار في لوحتك | المسار المراد الانتقال إليه (مثلًا `'#kitchen'` لفتح نافذة منبثقة) عندما يكون الإجراء محددًا كـ navigate |
| `url_path` | string | أي رابط | عنوان URL المراد فتحه عند النقر (مثلًا `https://www.google.com`) عندما يكون الإجراء `url` |
| `service` | string | أي خدمة | الخدمة المراد استدعاؤها (مثلًا `media_player.media_play_pause`) عندما يكون `action` محددًا كـ `call-service` |
| `data` أو `service_data` | object | أي بيانات خدمة | بيانات الخدمة المراد تضمينها (مثلًا `entity_id: media_player.kitchen`) عندما يكون `action` محددًا كـ `call-service` |
| `confirmation` | object | راجع [التأكيد](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | عرض نافذة تأكيد منبثقة (ليست من Bubble Card)، وهو يتجاوز كائن `confirmation` الافتراضي |

</details>

#### مثال

<details>

<summary>زر لفتح نافذة منبثقة</summary>

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

## التنسيق

يمكنك إضافة تنسيقات مخصصة لتعديل CSS لجميع البطاقات **دون استخدام card-mod** بأربع طرق:

- في المحرر، انتقل إلى البطاقة التي تريد تعديلها، ثم توجّه إلى _خيارات التنسيق > تنسيقات مخصصة وقوالب JS_، وأضف تنسيقاتك المخصصة (راجع النصائح والأمثلة أدناه).
- في المحرر (أو في [YAML](#modules))، انتقل إلى البطاقة التي تريد تعديلها، ثم توجّه إلى _Modules_، ثم أنشئ وحدة جديدة (ستكون متاحة لجميع البطاقات)، أو انتقل إلى **Module Store** لتثبيت أي وحدة متاحة (يمكن العثور على مزيد من التفاصيل حول الوحدات [أدناه](#modules)).
- في ملف [سمة](https://www.home-assistant.io/integrations/frontend/#defining-themes) بإضافة متغيرات CSS في YAML (وهي متوفرة في توثيق كل بطاقة أعلاه). يتيح هذا إجراء تعديلات شاملة.

  <details>
  
  <summary>مثال</a></summary>
  
  <br>

  لا تنسخ السطر `Bubble:`، فهذا اسم السمة التي تستخدمها. تحتاج أيضًا إلى إزالة `--` من المتغيرات.

  تحتاج إلى تشغيل الإجراء [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) لتحديث السمة بعد أي تعديل.

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
  
- في YAML بإضافة `styles: |` متبوعة بتنسيقاتك المخصصة (راجع النصائح والأمثلة أدناه).

> [!TIP]  
> **لفهم فئات التنسيق القابلة للتعديل**، يمكنك إلقاء نظرة على مجلد [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) في هذا المستودع. في كل مجلد بطاقة، ستجد ملفًا باسم `styles.css`. تحتوي هذه الملفات على جميع التنسيقات المطبقة. يتيح هذا إمكانيات أكثر بكثير من متغيرات CSS، لكن يجب إضافته لكل بطاقة على حدة.
> 
> يمكنك أيضًا العثور على الكثير من [الأمثلة من المجتمع](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards)، أو بعضها في [منتدى Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) بقليل من البحث.
>
> يمكن العثور على سمة Bubble لـ Home Assistant (كما في لقطات الشاشة) [هنا](https://github.com/Clooos/Bubble).
>
> فيديو تعليمي قادم قريبًا على [قناتي على YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> يُرجى ملاحظة أنك قد تحتاج إلى إضافة `!important;` إلى بعض تنسيقات CSS المعرّفة مسبقًا (انظر الأمثلة أدناه).

> [!TIP]  
> يمكن استهداف الأزرار الفرعية بفئات مبنية على الاسم. على سبيل المثال، زر فرعي باسم "My sub-button" يمكن تنسيقه عبر `.my-sub-button`. كما توفر أزرار شريط التمرير الفرعية الفئات `.bubble-sub-button-slider-1` و`.bubble-sub-button-slider-2` وهكذا.

#### أمثلة

<details>

<summary>تغيير حجم الخط في أي Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>تغيير لون خلفية زر واحد في تكديس الأزرار الأفقي</summary>

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

<summary>تغيير لون خلفية بطاقة</summary>

<br>

يعمل هذا على جميع أنواع بطاقات Bubble Card (باستثناء النوافذ المنبثقة):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

وهذا يفعل الشيء نفسه في بطاقة زر فقط (وهو يعمل لترويسة النافذة المنبثقة):

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

لتغيير اللون عندما تكون الحالة `on`، ألقِ نظرة على قوالب التنسيق أدناه.

</details>

<details>

<summary>تغيير لون شريط التمرير في زر</summary>

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

<summary>تغيير لون خط الفاصل</summary>

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

<summary>تغيير لون أيقونة</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

لأيقونة في تكديس الأزرار الأفقي.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>تغيير لون خلفية حاوية أيقونة</summary>

<br>

يعمل هذا على جميع أنواع بطاقات Bubble Card (باستثناء النوافذ المنبثقة):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

وهذا يفعل الشيء نفسه لترويسة النافذة المنبثقة:

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>تغيير حجم الأزرار الفرعية (مثالي للتخطيط الكبير)</summary>

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

<summary>تغيير لون خلفية الزر الفرعي الثاني</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>تغيير حجم أيقونة</summary>

<br>

للأيقونة الرئيسية.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

لأيقونات الأزرار الفرعية.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>استخدام صورة بدلًا من أيقونة في زر فرعي</summary>

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

ما عليك سوى رفع هذه الصورة في مجلد "pictures" (أو أي اسم تريده) داخل مجلد "www" في Home Assistant.

</details>

<details>

<summary>مثال متقدم: إنشاء صف أفقي من الأزرار الفرعية (لقطة شاشة مرفقة)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> أحب هذا المثال حقًا، فأنا أستخدمه كترويسة في لوحتي.

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

## القوالب

**Bubble Card لا يدعم قوالب Jinja** لكن يمكن للمستخدمين المتقدمين إضافة قوالب بلغة JS مباشرة في [تنسيقاتهم المخصصة](#التنسيق). على سبيل المثال، يتيح لك ذلك تغيير أيقونة عنصر أو نصوصه أو ألوانه بشكل ديناميكي، أو إظهار عنصر أو إخفاؤه بشكل شرطي (مثل زر فرعي)، أو ما يقارب أي شيء بناءً على حالة أو سمة والمزيد.

> [!TIP]  
> مزيد من المعلومات حول قوالب JS [هنا](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). نصيحتي هي أن **تلقي دائمًا نظرة على وحدة تحكم المتصفح** للتأكد من أن كل شيء يعمل بشكل صحيح.

> [!IMPORTANT]  
> **جميع القوالب التي لا تعدّل خاصية CSS يجب وضعها في النهاية! مثل تعديل أيقونة أو نص أو أي عنصر.**

#### المتغيرات والدوال المتاحة

<details>

<summary>المتغيرات</summary>

<br>

لديك وصول إلى هذه المتغيرات في معظم البطاقات:

- `state` سيعيد حالة `entity` الذي حددته.
  
- `entity` سيعيد الكيان الذي حددته مثل `switch.test` في هذا المثال.
  
- `icon` يمكن استخدامه هكذا لتغيير الأيقونة `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` سيعيد حالة `entity` المحدد لزرك الفرعي الأول، `[0]` هي حالة الزر الفرعي الأول، و`[1]` الثاني...
  
- `subButtonIcon[0]` يمكن استخدامه هكذا لتغيير أيقونة الزر الفرعي الأول `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`، `[0]` هي أيقونة الزر الفرعي الأول، و`[1]` الثاني...
  
- `card` سيعيد عنصر البطاقة في DOM.
  
- `hass` متغير متقدم يمنحك تحكمًا أكبر، فمثلًا يمكنك إعادة حالة `light.kitchen` هكذا `hass.states['light.kitchen'].state` أو سمة ما هكذا `hass.states[entity].attributes.brightness`.

- `this` سيعيد الكثير من المعلومات المفيدة حول إعدادك ولوحتك، لا تستخدمه إلا إذا كنت تعرف ما تفعله.

</details>

<details>

<summary>الدوال</summary>

<br>

لديك وصول إلى جميع دوال JS العامة، ولكن لديك أيضًا وصول إلى:

- `getWeatherIcon` يمكن استخدامها لإعادة أيقونة طقس بناءً على حالة تعيد حالة الطقس. على سبيل المثال، يمكنك كتابة هذا `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` لتغيير أيقونة الزر الفرعي الثالث إلى أيقونة طقس اليوم، و`.forecast[1]?.condition` ليوم الغد...

  ستحتاج إلى إنشاء مستشعر قالب لذلك. إليك ما يمكنك إضافته في ملف `configuration.yaml` الخاص بك:
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
- `hass.formatEntityState(state)` يمكن استخدامها لترجمة حالة (يمكن استخدامها أيضًا للحصول على وحدة قياس الحالة، دون الحاجة إلى إضافتها يدويًا).
- `hass.formatEntityAttributeValue(state, "attribute")` يمكن استخدامها لترجمة سمة (يمكن استخدامها أيضًا للحصول على وحدة قياس الحالة، دون الحاجة إلى إضافتها يدويًا).

</details>

#### أمثلة

يمكنك العثور على الكثير من الأمثلة أدناه، ولكن يمكنك أيضًا العثور على قوالب متقدمة جدًا على [صفحتي على Patreon](https://www.patreon.com/c/Clooos)، مثل قالب (هو المفضل لدي) يتيح ما يصل إلى أربع شارات شرطية موضوعة حول أيقونات البطاقة. إنها أيضًا طريقة رائعة للتعرف على كل إمكانيات التنسيقات المخصصة والقوالب في Bubble Card!

<details>
<summary>أمثلة من صفحتي على Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">إضافة شارات على طريقة Home Assistant إلى أي بطاقة</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">عرض التاريخ والوقت بتنسيق مخصص في فاصل دون استخدام أي كيان</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">عرض حالة زر فرعي على سطرين</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">تخصيص التسميات والأيقونات داخل زر فرعي من نوع الاختيار</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">إضافة نافذة منبثقة تذكير دائمة تظهر فقط عند الحاجة</a>
</p>

<br>

</details>

<details>

<summary>تغيير لون خلفية زر بحيث يكون أحمر عندما يكون <code>off</code> وأزرق عندما يكون <code>on</code></summary>

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

<summary>تغيير لون خلفية زر بناءً على كيان في تكديس الأزرار الأفقي</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>إظهار/إخفاء زر فرعي بشكل شرطي</summary>

<br>

هذا المثال يعرض الزر الفرعي الأول فقط عندما تكون مكنستي عالقة.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

وهذا المثال يعرض زرًا فرعيًا عندما تكون البطارية أقل من 10%. مفيد مع زر فرعي يعرض "بطارية منخفضة".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>تغيير أيقونة أو أيقونة زر فرعي بشكل شرطي</summary>

<br>

هذا المثال يغيّر أيقونة زر فقط عندما تكون المكنسة عالقة.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

وهذا المثال يغيّر أيقونة الزر الفرعي الأول فقط عندما تكون المكنسة عالقة.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>تغيير لون أيقونة أو لون أيقونة زر فرعي بشكل شرطي</summary>

<br>

هذا المثال يغيّر لون أيقونة زر بناءً على حالته.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

وهذا المثال يغيّر لون أيقونة زر فرعي بناءً على حالته. `.bubble-sub-button-1` هو الزر الفرعي الأول، استبدل `1` إذا أردت تغيير أيقونة زر فرعي آخر.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>تحريك أيقونة مروحة بشكل شرطي</summary>

<br>

هذا المثال يدوّر أيقونة زر عندما تكون المروحة `on`.
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

<summary>استخدام القوالب في النصوص (مثل الاسم أو الحالة)</summary>

<br>

هذا المثال يغيّر اسم/حالة زر إلى "It's currently sunny" بحسب حالة الطقس لديك.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
أو عند تطبيقه على الأزرار الفرعية:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


إذا أردت استخدام قالب للحالة (`.bubble-state`) فلا تفعّل `show_state: true` بل فعّل فقط `show_attribute: true` دون تحديد أي سمة.

</details>

<details>

<summary>مثال متقدم: تغيير لون زر فرعي عندما تكون نافذة منبثقة مفتوحة</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>مثال متقدم: استخدام قالب لاسم فاصل بناءً على حالة مترجمة إلى لغتك</summary>

<br>

يمكنك استخدام `hass.formatEntityState(state)` لترجمة حالة و`hass.formatEntityAttributeValue(state, "attribute")` لترجمة سمة.

هذا المثال يغيّر الاسم والأيقونة بناءً على الطقس، وكلمة "Nuageux" تعني "غائم" بالفرنسية.

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

## Modules

الوحدات ميزة قوية تتيح لك حفظ تنسيقاتك المخصصة وقوالبك وإعادة استخدامها ومشاركتها عبر جميع بطاقات Bubble Card لديك. فبدلًا من نسخ الكود نفسه ولصقه في عدة بطاقات، يمكنك إنشاء وحدة وتطبيقها أينما احتجت إليها. هذا يجعل إدارة مظهر لوحتك أسهل وأكثر كفاءة بكثير.

لكن هذه الميزة أقوى من ذلك بكثير، فهي تتيح لك إضافة ميزات فعلية بنفسك في محرر Bubble Card، باستخدام جميع خيارات [نماذج Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) الافتراضية!  
كما تم تحسين محدد الكائنات (object selector) ليعرض التغييرات مباشرة وليدعم السمات بشكل صحيح.

يمكنك أيضًا تصفح **Module Store** للعثور على [وحدات أنشأها المجتمع](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) وتثبيتها، أو مشاركة إبداعاتك الخاصة!

> [!TIP]
> يعمل كود الوحدة تمامًا بنفس طريقة الكود الموجود في قسم `styles` في البطاقة. جميع المتغيرات والدوال نفسها من قسم [القوالب](#القوالب) متاحة.

<br>

### الإعداد الأولي

> [!IMPORTANT]
> بدءًا من الإصدار v3.1.0، أصبح Bubble Card Tools هو وسيلة التخزين الموصى بها للوحدات. لا تزال طريقة مستشعر القالب القديمة تعمل للإعدادات الحالية، لكن الوحدات الجديدة وميزات Module Store مدعومة بشكل أفضل عبر Bubble Card Tools.

يفعّل تكامل Bubble Card Tools محرر الوحدات وModule Store، ويخزّن الوحدات كملفات YAML منفصلة. ويتم ترحيل الوحدات الحالية تلقائيًا.

خطوات التثبيت والإعداد موضحة هنا:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### محرر الوحدات

يمكنك الوصول إلى محرر الوحدات من إعدادات أي بطاقة، ضمن قسم **الوحدات**. يوفر المحرر تبويبين رئيسيين:

#### تبويب وحداتي

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

يعرض هذا التبويب جميع وحداتك المثبّتة ويتيح لك:

- **تطبيق** الوحدات الموجودة على البطاقة الحالية
- **إنشاء** وحدة جديدة من الصفر
- **تعديل** الوحدات الموجودة مع معاينة مباشرة
- **حذف** الوحدات التي لم تعد بحاجة إليها
- **البحث** في الوحدات و**ترتيبها** (أبجديًا، الأحدث أولًا، المفعّلة أولًا)
- **تعيين الحالة العامة** لجعل وحدة ما تُطبّق على جميع البطاقات تلقائيًا
- **استيراد/تصدير** الوحدات للنسخ الاحتياطي أو المشاركة

#### تبويب Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

سيعرض هذا التبويب [جميع الوحدات المتاحة من المجتمع](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)، ويتيح لك:

- **تصفح** جميع الوحدات التي أنشأها المجتمع
- **البحث** في الوحدات وتصفيتها حسب الاسم أو التوافق أو الكلمات المفتاحية
- **تثبيت** الوحدات بنقرة واحدة
- **تحديث** الوحدات المثبّتة عند توفر إصدارات جديدة

> [!TIP]
> في المحرر، يمكنك تفعيل الوحدات غير المدعومة لتجربة الوحدات التي لم يتم وسمها بعد بأنها متوافقة مع نوع بطاقة معين.

<br>

### كيفية استخدام الوحدات

#### إنشاء وحدة جديدة

<details>

<summary>انقر للتوسيع</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. اذهب إلى محرر أي بطاقة ووسّع قسم **الوحدات**.
2. انقر على **إنشاء وحدة جديدة**.
3. املأ معلومات الوحدة.
4. اكتب كود قالب CSS و/أو JavaScript في محرر **الكود**.
5. (اختياري) أنشئ واجهة إعداد مخصصة في قسم **المحرر** (مثل منتقي الألوان في لقطة الشاشة أعلاه، والوثائق الكاملة متاحة [هنا](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. انقر على **حفظ**.

وحدتك الآن متاحة للاستخدام على أي من بطاقاتك!

<br>

</details>

#### تطبيق وحدة على بطاقة

<details>

<summary>انقر للتوسيع</summary>

<br>

- **عبر المحرر:**

  - اذهب إلى محرر البطاقة التي تريد تطبيق الوحدة عليها.
  - وسّع قسم **الوحدات**.
  - انقر على الوحدة التي تريد تطبيقها من القائمة.
  - ضمن "تطبيق على"، انقر على "هذه البطاقة". أصبحت الوحدة الآن مفعّلة. يمكنك تطبيق عدة وحدات على البطاقة نفسها.

- **عبر YAML:**

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

#### تطبيق وحدة على جميع البطاقات

<details>

<summary>انقر للتوسيع</summary>

<br>

يمكنك تعيين وحدة لتُطبّق تلقائيًا على جميع بطاقات Bubble Card:

**هذا غير متاح للوحدات التي تحتوي على محرر، لأن تلك الوحدات تتطلب إعدادًا محددًا لتعمل.**

- **عبر المحرر:**

  - في محرر الوحدات، ابحث عن وحدتك في تبويب **وحداتي**.
  - فعّل زر **جميع البطاقات** بجوار اسم الوحدة.
  - سيتم الآن تطبيق الوحدة على جميع البطاقات تلقائيًا.
 
- **عبر YAML:**

  في إعداد YAML الخاص بوحدتك (في ملف `bubble-modules.yaml`)، أضف فقط `is_global: true`.

<br>

</details>

#### استثناء بطاقة واحدة من وحدة عامة

<details>

<summary>انقر للتوسيع</summary>

<br>

إذا كانت لديك وحدة عامة وتريد استثناءها من بطاقة محددة:

- **عبر المحرر:**
  
  - في قسم **الوحدات** الخاص بالبطاقة، سترى الوحدات العامة مدرجة.
  - انقر على الوحدة العامة، ثم عطّل "هذه البطاقة" لاستثنائها من هذه البطاقة المحددة.

- **عبر YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### مشاركة وحدتك في Module Store

<details>

<summary>انقر للتوسيع</summary>

<br>

لمشاركة وحدتك في Module Store، في محرر الوحدات، في الأسفل ضمن "تصدير الوحدة"، انقر على "نسخ لـ GitHub" والصق المحتوى في نقاش جديد في فئة [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **عدّل الوصف** (إذا لزم الأمر)، و**المثال** (لمستخدمي YAML)، وتذكّر أن **تضمّن لقطة شاشة واحدة على الأقل** لأجل Module Store.

**تصبح وحدتك متاحة مباشرةً بعد ذلك** (بعد تحديث المتجر)، لذا تحقق جيدًا من أن كل شيء مكتوب بشكل صحيح وأن الوحدة تعمل كما هو متوقع. يمكنك بالطبع تعديل/تحديث الوحدة بعد مشاركتها.

<br>

</details>

#### إدارة الإصدارات

<details>

<summary>انقر للتوسيع</summary>

<br>

يتحقق Module Store تلقائيًا من وجود تحديثات للوحدات المثبّتة. عند توفر تحديثات:

1. سترى مؤشر تحديث في تبويب **Module Store**.
2. انقر على **تحديث** في الوحدات التي تتوفر لها تحديثات.
3. أكّد التحديث في Module Store.

<br>

</details>

#### تحديد أنواع البطاقات المدعومة

<details>

<summary>انقر للتوسيع</summary>

<br>

قد لا تكون بعض الوحدات متوافقة مع جميع أنواع البطاقات. يمكنك تحديد البطاقات التي تدعمها الوحدة.  
إذا أردت أن تكون وحدة ما متوافقة مع **جميع البطاقات**، فما عليك سوى حذف الحقل `supported` (أو استخدام خيار **جميع البطاقات** في المحرر).

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

### أمثلة

<details>
<summary>وحدة تنسيق أساسية</summary>

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
<summary>وحدة مع إعداد مخصص</summary>

<br>

هذه الوحدة متاحة [هنا](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

يمكن العثور على مزيد من الأمثلة في Module Store، أو [هنا](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## المساعدة

لا تتردد في فتح مشكلة (issue) إذا كان هناك شيء لا يعمل كما هو متوقع. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

هل لديك أسئلة أو أفكار حول Bubble Card؟ هل تريد مشاركة لوحاتك أو اكتشافاتك؟ يمكنك التوجه إلى منتدى Home Assistant، أو إلى subreddit الخاص بـ Bubble Card، أو إلى قسم GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## المساهمة

المساهمات مرحّب بها! سواء كانت إصلاحات للأخطاء أو ميزات جديدة أو ترجمات أو تحسينات للتوثيق، لا تتردد في فتح pull request.

قبل البدء، يُرجى قراءة [دليل المطورين](DEVELOPERS.md) الذي يشرح كيفية إعداد بيئتك المحلية وبناء المشروع واختبار تعديلاتك.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## التبرع

أكرّس معظم وقت فراغي لجعل هذا المشروع في أفضل حالاته. لذا إذا كنت تقدّر عملي، فأي تبرع سيكون طريقة رائعة لإظهار دعمك 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

شكرًا للجميع على دعمكم، أنتم جميعًا أعظم دافع لي!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>

</div>
