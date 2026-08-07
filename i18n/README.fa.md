<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
<div dir="rtl">

> [!NOTE]
> این صفحه یک ترجمه خودکار است. در صورت تردید، [مستندات اصلی انگلیسی](../README.md) معتبر است. جمله‌ای نادرست به نظر می‌رسد؟ هر کمکی خوش‌آمد است و [اصلاح این صفحه](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.fa.md) تنها یک دقیقه وقت می‌برد: GitHub خودش fork و pull request را انجام می‌دهد. پیشاپیش سپاسگزارم! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[این را به زبان دیگری بخوانید](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card یک مجموعه کارت مینیمال و قابل شخصی‌سازی برای Home Assistant است که با پاپ‌آپ‌های مدرن و یک Module Store یکپارچه با بیش از ۱۰۰ ماژول ساخته دست کاربران همراه است.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## فهرست مطالب

**[`نصب`](#نصب)**  **[`پیکربندی`](#پیکربندی)**  **[`پیشنهادهای موجودیت`](#پیشنهادهای-موجودیت)**  **[`پاپ‌آپ`](#پاپآپ)**  **[`پشته دکمه‌های افقی`](#پشته-دکمههای-افقی)**  **[`دکمه`](#دکمه)**  **[`پخش‌کننده رسانه`](#پخشکننده-رسانه)**  **[`پرده`](#پرده)**  **[`انتخاب`](#انتخاب)**  **[`سرمایش و گرمایش`](#سرمایش-و-گرمایش)**  **[`تقویم`](#تقویم)**  **[`جداکننده`](#جداکننده)**  **[`ستون خالی`](#ستون-خالی)**  **[`فقط زیردکمه‌ها`](#فقط-زیردکمهها)**  **[`زیردکمه‌ها`](#زیردکمهها)**  **[`چیدمان کارت‌ها`](#چیدمان-کارتها)**  **[`شرط‌ها`](#شرطها)**  **[`اقدام‌ها`](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن)**  **[`استایل‌ها`](#استایلها)**  **[`قالب‌ها`](#قالبها)**  **[`ماژول‌ها`](#ماژولها)**  **[`بومی‌سازی`](#بومیسازی)**  **[`راهنما`](#راهنما)**  **[`مشارکت`](#مشارکت)**  **[`حمایت مالی`](#حمایت-مالی)**

<br>

## نصب

**پایین‌ترین نسخه پشتیبانی‌شده Home Assistant:** 2023.9.0

<details>

<summary>بدون HACS</summary>

<br>

1. فایل `bubble-card.zip` را از [آخرین انتشار](https://github.com/Clooos/Bubble-Card/releases/latest) دانلود کنید
2. آن را در پوشه `<config>/www` خودتان استخراج کنید، باید `bubble-card.js` و یک پوشه `translations` کنار آن به دست بیاید (آن پوشه دیکشنری‌های ویرایشگر را نگه می‌دارد، بدون آن ویرایشگر انگلیسی می‌ماند)
3. در داشبورد خود روی آیکن گوشه بالا راست کلیک کنید و سپس روی `Edit dashboard`
4. دوباره روی همان آیکن کلیک کنید و سپس روی `Manage resources`
5. روی `Add resource` کلیک کنید
6. این را کپی و جای‌گذاری کنید: `/local/bubble-card.js?v=1`
7. روی `JavaScript Module` و سپس `Create` کلیک کنید
8. برگردید و صفحه را تازه‌سازی کنید
9. اکنون می‌توانید در گوشه پایین راست روی `Add card` کلیک کنید و به دنبال `Bubble Card` بگردید
10. پس از هر به‌روزرسانی فایل، باید `/local/bubble-card.js?v=1` را ویرایش کرده و شماره نسخه را به عددی بالاتر تغییر دهید

اگر کار نکرد، فقط کش مرورگر خود را پاک کنید.

</details>

<details>

<summary>با HACS (توصیه‌شده)</summary>

<br>

این روش به شما امکان می‌دهد به‌روزرسانی‌ها را مستقیماً از طریق Home Assistant Community Store دریافت کنید

1. اگر HACS هنوز نصب نشده، آن را طبق دستورالعمل‌های [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) دانلود کنید
2. پیکربندی اولیه HACS را طبق دستورالعمل‌های [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) انجام دهید
3. در نوار کناری خود به بخش «HACS» بروید
4. به دنبال «Bubble Card» بگردید، یا روی دکمه آبی زیر کلیک کنید
5. روی «Download» کلیک کنید
6. به داشبورد خود برگردید و روی آیکن گوشه بالا راست کلیک کنید و سپس روی `Edit dashboard`
7. اکنون می‌توانید در گوشه پایین راست روی `Add card` کلیک کنید و به دنبال `Bubble Card` بگردید

اگر کار نکرد، کش مرورگر یا اپلیکیشن خود را پاک کنید (در صورت نیاز روی همه دستگاه‌هایتان).

#### ویدیوها

همچنین می‌توانید نگاهی به کانال YouTube من برای ویدیوهای گام به گام بیندازید.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## پیکربندی

همه گزینه‌ها را می‌توان در ویرایشگر Home Assistant پیکربندی کرد. اما جزئیات بیشتر و YAML را می‌توانید در مستندات زیر پیدا کنید.

<details>

<summary><b>گزینه‌های اصلی (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `type` | string | **الزامی** | `custom:bubble-card` | نوع کارت |
| `card_type` | string | **الزامی** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` یا `sub-buttons` | نوع کارت Bubble Card، به پایین مراجعه کنید |
| `styles` | object list | اختیاری | هر شیوه‌نامه CSS | به شما امکان می‌دهد CSS کارت Bubble Card خود را شخصی‌سازی کنید، به [استایل‌ها](#استایلها) مراجعه کنید |

</details>

<details>

<summary><b>متغیرهای سراسری CSS (به <a href="#استایل‌ها">استایل‌ها</a> مراجعه کنید)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | شعاع گوشه برای همه عناصر پشتیبانی‌شده |
| `--bubble-main-background-color` | `color` | رنگ پس‌زمینه اصلی برای همه عناصر پشتیبانی‌شده |
| `--bubble-secondary-background-color` | `color` | رنگ پس‌زمینه ثانویه برای همه عناصر پشتیبانی‌شده |
| `--bubble-accent-color` | `color` | رنگ تأکیدی برای همه عناصر پشتیبانی‌شده |
| `--bubble-icon-border-radius` | `px` | شعاع گوشه آیکن برای همه عناصر پشتیبانی‌شده |
| `--bubble-icon-background-color` | `color` | رنگ پس‌زمینه آیکن برای همه عناصر پشتیبانی‌شده |
| `--bubble-sub-button-border-radius` | `px` | شعاع گوشه برای همه زیردکمه‌ها |
| `--bubble-sub-button-background-color` | `color` | رنگ پس‌زمینه برای همه زیردکمه‌ها |
| `--bubble-box-shadow` | به [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) مراجعه کنید | سایه جعبه برای همه عناصر پشتیبانی‌شده |
| `--bubble-border` | به [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) مراجعه کنید | حاشیه برای همه کارت‌های پشتیبانی‌شده |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**نگاهی به این [ویدیو](https://www.youtube.com/watch?v=0hSQOlBxKKI) بیندازید تا با Bubble Card و قابلیت‌های آن آشنا شوید.** کانال YouTube من نسبتاً تازه است و روی آموزش‌های Home Assistant و Bubble Card تمرکز دارد. حتماً برای کمک به افزایش دیده‌شدن کانالم مشترک شوید. از پیش سپاسگزارم!

<br>

---

<br>

## پیشنهادهای موجودیت

از Home Assistant 2026.6، انتخاب یک موجودیت در انتخابگر کارت چند کارت آماده به شما پیشنهاد می‌دهد، و Bubble Card با دستورهای خودش به این پرسش پاسخ می‌دهد. یک لامپ را انتخاب کنید تا کارتی با اسلایدر روشنایی به شما پیشنهاد شود، به‌علاوه یک گونه دمای رنگ، یک گونه رنگ و یک گونه اشباع وقتی لامپ شما از آن‌ها پشتیبانی کند. یک پرده را انتخاب کنید تا اسلایدر موقعیت آن را بگیرید، یک پخش‌کننده رسانه را انتخاب کنید تا گونه‌ای با فهرست منابع آن هم بگیرید، یک جاروبرقی را انتخاب کنید تا دکمه‌های شروع، مکث و بازگشت به پایگاه آن را بگیرید. هر پیشنهاد یک پیکربندی معمولی Bubble Card است که به صورت پیش‌نمایش زنده نشان داده می‌شود، بنابراین می‌توانید نزدیک‌ترین مورد را بردارید و مثل همیشه ویرایش آن را ادامه دهید.

آنچه به شما پیشنهاد می‌شود به توانایی واقعی موجودیت شما بستگی دارد: لامپی بدون کانال روشنایی به‌جای اسلایدر یک کلید می‌گیرد، پرده‌ای که نمی‌تواند بچرخد گونه چرخش ندارد، و یک موجودیت سرمایش و گرمایش تنها زمانی حالت‌های از پیش تعریف‌شده می‌گیرد که آن‌ها را داشته باشد. ورودی‌های کلاسیک در صورت کاربرد پس از آن‌ها می‌آیند: کارت اختصاصی آن دامنه، یک دکمه ساده و یک اسلایدر.

> [!TIP]
> ماژول‌ها می‌توانند پیشنهادهای خودشان را به این فهرست اضافه کنند، به [ماژول‌ها](#ماژولها) مراجعه کنید.

<br>

---

<br>

## پاپ‌آپ

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

این کارت به شما امکان می‌دهد پاپ‌آپی با هر محتوایی بسازید. هر پاپ‌آپ به‌طور پیش‌فرض **پنهان** است و می‌توان آن را با هدف قرار دادن لینکش (مثلاً `'#pop-up-name'`)، با هر کارتی که از [اقدام](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) `navigate` پشتیبانی می‌کند، یا با [پشته دکمه‌های افقی](#پشته-دکمههای-افقی) که همراه آن است، باز کرد.

> [!TIP]
> ### محرک پاپ‌آپ 
> این ویژگی به شما امکان می‌دهد پاپ‌آپی را بر اساس وضعیت هر موجودیتی باز کنید، برای مثال می‌توانید پاپ‌آپ «امنیت» را با یک دوربین باز کنید وقتی فردی جلوی خانه شماست. همچنین می‌توانید یک کمکی تغییرحالت (input_boolean) بسازید و باز/بسته شدن آن را در یک اتوماسیون فعال کنید.
> <details>
> <summary>باز کردن یک پاپ‌آپ وقتی <code>binary_sensor</code> روی <code>on</code> است</summary>
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
> ### راه‌های مختلف بستن یک پاپ‌آپ 
> راه‌های زیادی برای بستن یک پاپ‌آپ وجود دارد. برای مثال، می‌توانید از هدر پاپ‌آپ به سمت پایین سوایپ کنید، با انجام یک سوایپ طولانی داخل پاپ‌آپ به سمت پایین، با فشار دادن Escape در دسکتاپ، با حذف هش در URL یا فقط با فشار دادن دکمه بستن.
>


### گزینه‌های پاپ‌آپ

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `hash` | string | **الزامی** | هر هش یکتا (مثلاً `'#kitchen'`) با ' ' | این نحوه باز کردن پاپ‌آپ شماست |
| `popup_style` | string | اختیاری | `bubble` (پیش‌فرض) یا `classic` | سبک بصری پاپ‌آپ را تعریف می‌کند |
| `popup_mode` | string | اختیاری | `default` (پیش‌فرض)، `fit-content`، `centered` یا `adaptive-dialog` | حالت چیدمان پاپ‌آپ را تعریف می‌کند |
| `with_bottom_offset` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | فقط با `popup_mode: fit-content` یا `adaptive-dialog` استفاده می‌شود. یک افست پایینی را در موبایل اعمال می‌کند، مفید وقتی داشبورد شما یک کارت فوتر دارد. |
| `full_width_on_mobile` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | فقط با `popup_mode: centered` استفاده می‌شود. پاپ‌آپ را در موبایل به عرض کامل صفحه گسترش می‌دهد، مفید برای نمایشگرهای کوچک‌تر. |
| `performance_mode` | string | اختیاری | `default` (پیش‌فرض) یا `performance` | انیمیشن باز شدن پاپ‌آپ را بهینه می‌کند. `performance` رندر محتوا و تاری پس‌زمینه را کمی به تأخیر می‌اندازد، همچنین در صورت تنظیم بودن، تاری پس‌زمینه (backdrop blur) را غیرفعال می‌کند. |
| `auto_close` | string | اختیاری | یک زمان‌سنج به میلی‌ثانیه (مثلاً `10000` برای ۱۰ ثانیه) | پاپ‌آپ را پس از یک زمان‌سنج به‌طور خودکار می‌بندد |
| `close_on_click` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | پاپ‌آپ را پس از هر تعامل به‌طور خودکار می‌بندد |
| `close_by_clicking_outside` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | پاپ‌آپ را با کلیک کردن بیرون از آن می‌بندد |
| `width_desktop` | string | اختیاری | هر مقدار CSS | عرض در دسکتاپ (به‌طور پیش‌فرض `100%` در موبایل) |
| `margin` | string | اختیاری | هر مقدار CSS | این را **فقط** در صورتی استفاده کنید که پاپ‌آپ شما در موبایل به‌خوبی وسط‌چین نشده باشد (مثلاً `13px`) |
| `margin_top_mobile` | string | اختیاری | هر مقدار CSS | حاشیه بالایی در موبایل (مثلاً `-56px` اگر هدر شما پنهان است) |
| `margin_top_desktop` | string | اختیاری | هر مقدار CSS | حاشیه بالایی در دسکتاپ (مثلاً `50vh` برای پاپ‌آپی با اندازه نصف یا `calc(100vh - 400px)` برای ارتفاع ثابت `400px`) |
| `bg_color` | string | اختیاری | هر مقدار hex، rgb یا rgba | رنگ پس‌زمینه پاپ‌آپ شما (مثلاً `#ffffff` برای پس‌زمینه سفید) |
| `bg_opacity` | string | اختیاری | هر مقداری از `0` تا `100` | شفافیت پس‌زمینه پاپ‌آپ شما (مثلاً `100` برای بدون شفافیت) |
| `bg_blur` | string | اختیاری | هر مقداری از `0` تا `100` | افکت تاری پس‌زمینه پاپ‌آپ شما، **این فقط در صورتی کار می‌کند که `bg_opacity` روی `100` تنظیم نشده باشد** (مثلاً `0` برای بدون تاری)|
| `shadow_opacity` | string | اختیاری | هر مقداری از `0` تا `100` | شفافیت سایه پاپ‌آپ شما (مثلاً `0` برای پنهان کردن آن) |
| `hide_backdrop` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | این را روی true تنظیم کنید در اولین پاپ‌آپ داشبورد اصلی خود تا پس‌زمینه (backdrop) روی همه پاپ‌آپ‌ها غیرفعال شود. |
| `background_update` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | محتوای پاپ‌آپ را در پس‌زمینه به‌روزرسانی می‌کند (توصیه نمی‌شود) |
| `trigger` | object or list | اختیاری | به [شرط‌ها](#شرطها) مراجعه کنید | این پاپ‌آپ را وقتی شرط‌ها برقرار باشند باز می‌کند |
| `trigger_entity` | string | اختیاری | هر موجودیت | این پاپ‌آپ را بر اساس وضعیت هر موجودیتی باز می‌کند، شکل ساده `trigger` |
| `trigger_state` | string | اختیاری (**الزامی** اگر `trigger_entity` تعریف شده باشد) | هر وضعیت موجودیت | وضعیت موجودیت برای باز کردن پاپ‌آپ |
| `trigger_close` | boolean | اختیاری | `true` یا `false` | پاپ‌آپ را می‌بندد وقتی شرط‌ها دیگر برقرار نباشند (پیش‌فرض: `true` با `trigger`، `false` با `trigger_state`) |
| `open_action` | object | اختیاری | به [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) مراجعه کنید | اقدامی را هنگام باز شدن پاپ‌آپ فعال می‌کند |
| `close_action` | object | اختیاری | به [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) مراجعه کنید | اقدامی را هنگام بسته شدن پاپ‌آپ فعال می‌کند |
| `show_header` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | هدر پاپ‌آپ را به‌طور کامل نمایش/پنهان می‌کند |
| `show_previous_button` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | دکمه قبلی را کنار دکمه بستن نمایش می‌دهد و در صورت وجود به پاپ‌آپ قبلی برمی‌گردد |
| `show_close_button` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | دکمه بستن را نمایش یا پنهان می‌کند در حالی که بقیه هدر قابل مشاهده می‌ماند |
| `buttons_position` | string | اختیاری | `right` (پیش‌فرض) یا `left` | موقعیت دکمه‌های بستن و قبلی در هدر |
| `cards` | list | اختیاری | هر کارت Bubble Card، کارت Home Assistant یا کارت سفارشی | محتوای پاپ‌آپ شما را تعریف می‌کند. به مثال پاپ‌آپ زیر مراجعه کنید. |
| همچنین به [همه تنظیمات دکمه](#دکمه) برای هدر پاپ‌آپ دسترسی دارید. | | اختیاری | | اگر تعریف نشده باشد هیچ هدری نمایش داده نمی‌شود |

</details>

<details>

<summary><b>متغیرهای CSS (به <a href="#استایل‌ها">استایل‌ها</a> مراجعه کنید)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | شعاع گوشه برای پاپ‌آپ |
| `--bubble-pop-up-main-background-color` | `color` | رنگ پس‌زمینه اصلی برای عناصر پشتیبانی‌شده پاپ‌آپ |
| `--bubble-pop-up-background-color` | `color` | رنگ پس‌زمینه پاپ‌آپ |
| `--bubble-backdrop-background-color` | `color` | رنگ پس‌زمینه برای backdrop |
| همچنین به [همه متغیرهای CSS دکمه](#گزینههای-دکمه) برای هدر پاپ‌آپ دسترسی دارید. | | |

</details>


### فرمت مستقل پاپ‌آپ (نسخه 3.2.0 به بعد)

از نسخه 3.2.0، پاپ‌آپ‌ها از یک فرمت مستقل جدید استفاده می‌کنند که در آن کارت‌های محتوا مستقیماً داخل پاپ‌آپ با استفاده از گزینه `cards` تعریف می‌شوند. این کار عملکرد بهتر و یک تجربه ویرایش کشیدن‌و‌رها‌کردن (drag-and-drop) مبتنی بر بخش جدید را فراهم می‌کند.


#### مثال‌ها

<details>

<summary>یک پاپ‌آپ (فرمت مستقل)</summary>

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

<summary>دکمه‌ای برای باز کردن پاپ‌آپ</summary>

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

## پشته دکمه‌های افقی

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

این کارت همراه خوبی برای کارت پاپ‌آپ است و به شما امکان می‌دهد پاپ‌آپ‌های متناظر را باز کنید. همچنین امکان باز کردن هر صفحه‌ای از داشبورد شما را فراهم می‌کند. علاوه بر این، می‌توانید سنسورهای حرکت/اشغال خود را اضافه کنید تا ترتیب دکمه‌ها بر اساس اتاقی که تازه وارد آن شده‌اید تطبیق یابد. این کارت قابل اسکرول است، همیشه قابل مشاهده می‌ماند و به‌عنوان یک فوتر عمل می‌کند.

> [!IMPORTANT]  
> این کارت باید آخرین مورد در نمای شما باشد (پس از هر کارت و پاپ‌آپ). نمی‌تواند داخل هیچ پشته‌ای قرار بگیرد.

### گزینه‌های پشته دکمه‌های افقی

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `1_link` | string | **الزامی** | هش پاپ‌آپ (مثلاً `'#kitchen'`) با ' ' یا هر لینک | لینکی برای باز کردن |
| `1_name` | string | اختیاری | هر رشته‌ای | نامی برای دکمه شما |
| `1_icon` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای دکمه شما |
| `1_entity` | string | اختیاری | هر چراغ یا گروه چراغ | رنگ آن چراغ را در پس‌زمینه نمایش می‌دهد |
| `1_pir_sensor` | string | اختیاری | هر سنسور باینری | حداقل یک سنسور pir یا بیشتر برای `auto_order`، در واقع با هر نوع موجودیتی نیز کار می‌کند، برای مثال می‌توانید گروه‌های چراغ اضافه کنید و ترتیب بر اساس آخرین تغییر وضعیت تغییر خواهد کرد. |
| `auto_order` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | ترتیب دکمه‌ها را بر اساس آخرین زمان تغییر `_pir_sensor` تغییر می‌دهد، **اگر در کد خود هیچ `_pir_sensor`ای ندارید باید `false` باشد** |
| `margin` | string | اختیاری | هر مقدار CSS | این را **فقط** در صورتی استفاده کنید که `horizontal-buttons-stack` شما در موبایل به‌خوبی وسط‌چین نشده باشد (مثلاً `13px`) |
| `width_desktop` | string | اختیاری | هر مقدار CSS | عرض در دسکتاپ (به‌طور پیش‌فرض `100%` در موبایل) |
| `is_sidebar_hidden` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | موقعیت پشته دکمه‌های افقی را در صورت پنهان بودن نوار کناری در دسکتاپ ثابت می‌کند (فقط اگر خودتان تغییری برای پنهان کردن آن اعمال کرده‌اید) |
| `rise_animation` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | این را روی `false` تنظیم کنید تا انیمیشنی که پس از بارگذاری صفحه فعال می‌شود غیرفعال شود |
| `highlight_current_view` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | هش/نمای فعلی را با یک انیمیشن ملایم برجسته می‌کند |
| `hide_gradient` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | این را روی `false` تنظیم کنید تا گرادیان پنهان شود |

> [!IMPORTANT]  
> متغیرهایی که با یک عدد شروع می‌شوند دکمه‌های شما را تعریف می‌کنند، فقط این عدد را برای افزودن دکمه‌های بیشتر تغییر دهید (به مثال زیر مراجعه کنید).

</details>

<details>

<summary><b>متغیرهای CSS (به <a href="#استایل‌ها">استایل‌ها</a> مراجعه کنید)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | شعاع گوشه برای دکمه‌های پشته دکمه افقی |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | رنگ پس‌زمینه برای دکمه‌های پشته دکمه افقی |

</details>


#### مثال

<details>

<summary>یک پشته دکمه‌های افقی که بر اساس سنسورهای اشغال خودش را بازآرایی می‌کند</summary>

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

## دکمه

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

این کارت بسیار چندمنظوره است. می‌توان از آن به‌عنوان **سوییچ**، **اسلایدر**، **وضعیت** یا دکمه **نام/متن** استفاده کرد.

> [!TIP]
> ### تفاوت میان انواع دکمه‌ها چیست؟
>
> - **دکمه سوییچ:** این نوع پیش‌فرض دکمه است. به‌طور پیش‌فرض، یک موجودیت را روشن و خاموش می‌کند و رنگ پس‌زمینه‌اش بر اساس وضعیت موجودیت یا رنگ چراغ تغییر می‌کند. می‌توانید عملکرد آن را در بخش **Tap action on card** تغییر دهید.
>
> - **دکمه اسلایدر:** این نوع دکمه امکان کنترل موجودیت‌هایی با بازه قابل تنظیم را می‌دهد. برای کم و زیاد کردن نور چراغ‌ها ایده‌آل است و رنگ پرشدنش با رنگ چراغ هماهنگ می‌شود. همچنین می‌توان از آن برای نمایش مقادیر، مانند سطح باتری، استفاده کرد.
>   موجودیت‌های پشتیبانی‌شده برای اسلایدرها:
>   - چراغ (روشنایی)
>   - پخش‌کننده رسانه (صدا)
>   - پرده (موقعیت)
>   - پنکه (درصد)
>   - سرمایش و گرمایش (دما)
>   - عدد ورودی و عدد (مقدار)
>   - سنسور باتری (درصد، فقط خواندنی)
>
>   همچنین می‌توانید با غیرفعال کردن فیلتر موجودیت در بخش **Slider settings** از هر موجودیتی با وضعیت عددی استفاده کنید و سپس مقادیر `min` و `max` را تعریف کنید. این گزینه فقط خواندنی است.
>
> - **دکمه وضعیت:** برای نمایش اطلاعات یک سنسور یا هر موجودیتی عالی است. با فشردن آن، پنل «More info» موجودیت نمایش داده می‌شود. رنگ پس‌زمینه‌اش تغییر نمی‌کند.
>
> - **دکمه نام/متن:** تنها نوع دکمه‌ای که نیازی به موجودیت ندارد. این دکمه امکان نمایش یک متن کوتاه، نام یا عنوان را می‌دهد. می‌توانید اقدام‌هایی هم به آن اضافه کنید. رنگ پس‌زمینه‌اش تغییر نمی‌کند.

### گزینه‌های دکمه

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `entity` | string | **الزامی** | هر موجودیتی | موجودیتی برای کنترل |
| `button_type` | string | اختیاری | `switch` (پیش‌فرض)، `slider`، `state` یا `name` | رفتار دکمه شما |
| `name` | string | اختیاری | هر رشته‌ای | نامی برای دکمه شما؛ در صورت تعریف‌نشدن، نام موجودیت نمایش داده می‌شود |
| `icon` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای دکمه شما؛ در صورت تعریف‌نشدن، آیکن موجودیت یا `entity-picture` نمایش داده می‌شود |
| `force_icon` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | اولویت را به آیکن به‌جای `entity-picture` می‌دهد |
| `use_accent_color` | boolean | اختیاری (پیش‌فرض `false`) | **فقط برای چراغ‌ها.** به‌جای رنگ چراغ، از رنگ تاکیدی پوسته استفاده می‌کند.                         |
| `show_state` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یا پنهان‌سازی وضعیت `entity` شما |
| `show_name` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی نام |
| `show_icon` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی آیکن |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین تغییر `entity` شما |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین به‌روزرسانی `entity` شما |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یکی از ویژگی‌های `entity` شما زیر `name` آن |
| `attribute` | string | اختیاری (الزامی اگر `show_attribute` روی `true` تنظیم شده باشد) | ویژگی‌ای از `entity` شما | ویژگی‌ای که نمایش داده می‌شود (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | اجازه لغزش متن هنگامی که محتوا از اندازه ظرفش بزرگ‌تر باشد |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، ببینید زیر | امکان تغییر اقدام‌های پیش‌فرض هنگام کلیک روی دکمه. |
| `tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام کلیک روی آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود |
| `double_tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام دوبار کلیک روی آیکن؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود |
| `hold_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام نگه‌داشتن آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض اگر در section view نباشد)، `large` (پیش‌فرض اگر در section view باشد)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان ظاهری کارت، ببینید [چیدمان کارت‌ها](#چیدمان-کارتها) |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |
| `sub_button` | object | اختیاری | ببینید [زیردکمه‌ها](#زیردکمهها) | افزودن دکمه‌های سفارشی چسبیده به سمت راست |

</details>

<details>

<summary><b>متغیرهای CSS (ببینید <a href="#استایلها">استایل‌ها</a>)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | رنگ اصلی پس‌زمینه برای عناصر پشتیبانی‌شده در دکمه |
| `--bubble-button-border-radius` | `px` | شعاع گوشه دکمه |
| `--bubble-button-icon-border-radius` | `px` | شعاع گوشه ظرف آیکن دکمه |
| `--bubble-button-icon-background-color` | `color` | رنگ پس‌زمینه ظرف آیکن دکمه |
| `--bubble-light-white-color` | `color` | جایگزینی رنگ سفید پیش‌فرض دکمه‌ها/اسلایدرهای چراغ |
| `--bubble-light-color` | `color` | جایگزینی رنگ دکمه‌ها/اسلایدرهای چراغ (حتی چراغ‌های RGB) |
| `--bubble-button-box-shadow` | ببینید [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | سایه جعبه‌ای دکمه |

</details>

این گزینه‌ها فقط زمانی در دسترس‌اند که `button_type` روی `slider` تنظیم شده باشد.

<details>

<summary><b>گزینه‌های اسلایدر (YAML + توضیحات)</b></summary>

| نام                  | نوع    | الزام                     | توضیح                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | اختیاری                        | حداقل مقدار اسلایدر. برای اسلایدرهای سفارشی.                                                    |
| `max_value`             | number  | اختیاری                        | حداکثر مقدار اسلایدر. برای اسلایدرهای سفارشی.                                                    |
| `step`                  | number  | اختیاری                        | مقدار گام اسلایدر.                                                                                           |
| `tap_to_slide`          | boolean | اختیاری (پیش‌فرض `false`)      | فعال‌سازی رفتار قدیمی اسلایدر که در آن با ضربه‌زدن اسلایدر فعال می‌شود، به‌جای نگه‌داشتن آن.        |
| `relative_slide`        | boolean | اختیاری (پیش‌فرض `false` )     | به‌روزرسانی مقدار نسبت به مقدار شروع، به‌جای نقطه لمس شروع.                                      |
| `read_only_slider`      | boolean | اختیاری (پیش‌فرض `false`)      | فقط‌خواندنی کردن اسلایدر. برای برخی موجودیت‌ها مانند سنسورها به‌طور خودکار فعال می‌شود.                                        |
| `slider_live_update`    | boolean | اختیاری (پیش‌فرض `false`)      | وضعیت موجودیت هنگام لغزاندن به‌روزرسانی می‌شود. **این ویژگی برای همه موجودیت‌ها توصیه نمی‌شود.**        |
| `slider_fill_orientation` | string | اختیاری | `left`، `right`، `top` یا `bottom` | تغییر جهت پرشدن اسلایدر. اگر تعریف نشود از چپ به راست است، و در [زبان‌های راست‌به‌چپ](#بومیسازی) آینه می‌شود |
| `slider_value_position` | string | اختیاری | `right`، `left`، `center` یا `hidden` | موقعیت نمایش مقدار. اگر تعریف نشود در سمت پایانی است، یعنی سمت چپ در [زبان‌های راست‌به‌چپ](#بومیسازی) |
| `invert_slider_value` | boolean | اختیاری (پیش‌فرض `false`) | معکوس‌سازی جهت اسلایدر (پرشدن ۱۰۰٪ برابر حداقل است). برای اسلایدرهای رنگ در دسترس نیست. |
| `light_slider_type` | string | اختیاری | `brightness` (پیش‌فرض)، `hue`، `saturation`، `white_temp` | **فقط برای چراغ‌ها.** انتخاب حالت اسلایدر |
| `cover_slider_type` | string | اختیاری | `position` (پیش‌فرض)، `tilt_position` | **فقط برای پرده‌ها.** انتخاب حالت اسلایدر (موقعیت یا زاویه) |
| `hue_force_saturation` | boolean | اختیاری (پیش‌فرض `false`) | **فقط برای چراغ‌ها (حالت Hue).** اجبار اشباع رنگ هنگام تنظیم Hue |
| `hue_force_saturation_value` | number | اختیاری (پیش‌فرض `100`) | **فقط برای چراغ‌ها (حالت Hue).** مقدار اشباع اجباری (۰ تا ۱۰۰) |
| `use_accent_color` | boolean | اختیاری (پیش‌فرض `false`) | **فقط برای چراغ‌ها (حالت روشنایی).** استفاده از رنگ تاکیدی پوسته به‌جای رنگ چراغ |
| `allow_light_slider_to_0` | boolean | اختیاری (پیش‌فرض `false`)    | **فقط برای چراغ‌ها.** اجازه می‌دهد اسلایدر به ۰٪ برسد که چراغ را خاموش می‌کند. با `tap_to_slide` در دسترس نیست. |
| `light_transition`      | boolean | اختیاری (پیش‌فرض `false`)      | **فقط برای چراغ‌ها.** فعال‌سازی گذار نرم روشنایی برای چراغ‌های پشتیبانی‌شده.                           |
| `light_transition_time` | number  | اختیاری (پیش‌فرض `500`)        | **فقط برای چراغ‌ها.** زمان گذار به میلی‌ثانیه. نیازمند `light_transition: true`.            |

</details>

#### مثال‌ها

<details>

<summary>دکمه اسلایدری که می‌تواند روشنایی یک چراغ را کنترل کند</summary>

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

<summary>دکمه‌ای با گزینه‌های بیشتر</summary>

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

## پخش‌کننده رسانه

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

این کارت به شما امکان کنترل یک موجودیت پخش‌کننده رسانه را می‌دهد.

### گزینه‌های پخش‌کننده رسانه

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `entity` | string | **الزامی** | هر پخش‌کننده رسانه‌ای | پخش‌کننده رسانه برای کنترل |
| `name` | string | اختیاری | هر رشته‌ای | نامی برای پخش‌کننده رسانه شما؛ در صورت تعریف‌نشدن، نام موجودیت نمایش داده می‌شود |
| `icon` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای پخش‌کننده رسانه شما؛ در صورت تعریف‌نشدن، آیکن موجودیت یا `entity-picture` نمایش داده می‌شود |
| `force_icon` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | اولویت را به آیکن به‌جای `entity-picture` می‌دهد |
| `show_state` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یا پنهان‌سازی وضعیت `entity` شما |
| `show_name` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی نام |
| `show_icon` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی آیکن |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین تغییر `entity` شما |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین به‌روزرسانی `entity` شما |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یکی از ویژگی‌های `entity` شما زیر `name` آن |
| `attribute` | string | اختیاری (الزامی اگر `show_attribute` روی `true` تنظیم شده باشد) | ویژگی‌ای از `entity` شما | ویژگی‌ای که نمایش داده می‌شود (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | اجازه لغزش متن هنگامی که محتوا از اندازه ظرفش بزرگ‌تر باشد |
| `min_volume` | number | اختیاری | هر عددی | حداقل مقدار اسلایدر صدا. |
| `max_volume` | number | اختیاری | هر عددی | حداکثر مقدار اسلایدر صدا. |
| `cover_background` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | استفاده از کاور تارشده رسانه به‌عنوان پس‌زمینه کارت. |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | امکان تغییر اقدام‌های پیش‌فرض هنگام کلیک روی دکمه. |
| `tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام کلیک روی آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |
| `double_tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام دوبار کلیک روی آیکن؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود. |
| `hold_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام نگه‌داشتن آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |
| `main_buttons_position` | string | اختیاری | `default` یا `bottom` | انتقال دکمه‌های اقدام کاور به پایین (ثابت) |
| `main_buttons_full_width` | boolean | اختیاری | `true` یا `false` | تمام‌عرض کردن دکمه‌های اقدام پایینی (پیش‌فرض: `true` هنگامی که موقعیت `bottom` است) |
| `main_buttons_alignment` | string | اختیاری | `end` (پیش‌فرض)، `center`، `start`، `space-between` | چیدمان دکمه‌های اقدام پایینی هنگامی که تمام‌عرض نیستند |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض اگر در section view نباشد)، `large` (پیش‌فرض اگر در section view باشد)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان ظاهری کارت، ببینید [چیدمان کارت‌ها](#چیدمان-کارتها) |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |
| `sub_button` | object | اختیاری | ببینید [زیردکمه‌ها](#زیردکمهها) | افزودن دکمه‌های سفارشی چسبیده به سمت راست |
| `hide` | object | اختیاری | ببینید زیر | پنهان‌سازی دکمه‌ها از کارت |

#### گزینه‌های پنهان‌سازی

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | پنهان‌سازی دکمه پخش/توقف |
| `volume_button` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | پنهان‌سازی دکمه صدا |
| `previous_button` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | پنهان‌سازی دکمه قبلی |
| `next_button` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | پنهان‌سازی دکمه بعدی |
| `power_button` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | پنهان‌سازی دکمه روشن/خاموش |

</details>

<details>

<summary><b>متغیرهای CSS (ببینید <a href="#استایلها">استایل‌ها</a>)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | رنگ اصلی پس‌زمینه برای پخش‌کننده رسانه |
| `--bubble-media-player-border-radius` | `px` | شعاع گوشه پخش‌کننده رسانه |
| `--bubble-media-player-buttons-border-radius` | `px` | شعاع گوشه دکمه‌های پخش‌کننده رسانه |
| `--bubble-media-player-slider-background-color` | `color` | رنگ پس‌زمینه اسلایدر صدا |
| `--bubble-media-player-icon-border-radius` | `px` | شعاع گوشه ظرف آیکن پخش‌کننده رسانه |
| `--bubble-media-player-icon-background-color` | `color` | رنگ پس‌زمینه ظرف آیکن پخش‌کننده رسانه |
| `--bubble-media-player-box-shadow` | ببینید [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | سایه جعبه‌ای پخش‌کننده رسانه |

</details>


#### مثال‌ها

<details>

<summary>پخش‌کننده رسانه با تمام گزینه‌ها</summary>

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

## پرده

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

این کارت به شما امکان کنترل موجودیت‌های `cover` را می‌دهد.

### گزینه‌های پرده

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `entity` | string | **الزامی** | هر پرده‌ای | پرده‌ای برای کنترل |
| `name` | string | اختیاری | هر رشته‌ای | نامی برای پرده شما؛ در صورت تعریف‌نشدن، نام موجودیت نمایش داده می‌شود |
| `force_icon` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | اولویت را به آیکن به‌جای `entity-picture` می‌دهد |
| `show_state` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یا پنهان‌سازی وضعیت `entity` شما |
| `show_name` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی نام |
| `show_icon` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی آیکن |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین تغییر `entity` شما |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین به‌روزرسانی `entity` شما |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یکی از ویژگی‌های `entity` شما زیر `name` آن |
| `attribute` | string | اختیاری (الزامی اگر `show_attribute` روی `true` تنظیم شده باشد) | ویژگی‌ای از `entity` شما | ویژگی‌ای که نمایش داده می‌شود (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | اجازه لغزش متن هنگامی که محتوا از اندازه ظرفش بزرگ‌تر باشد |
| `icon_open` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای پرده باز شما؛ در صورت تعریف‌نشدن، آیکن پیش‌فرض پرده باز نمایش داده می‌شود |
| `icon_close` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای پرده بسته شما؛ در صورت تعریف‌نشدن، آیکن پیش‌فرض پرده بسته نمایش داده می‌شود |
| `icon_up` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای دکمه باز کردن پرده شما؛ در صورت تعریف‌نشدن، آیکن پیش‌فرض پرده باز نمایش داده می‌شود |
| `icon_down` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای دکمه بستن پرده شما؛ در صورت تعریف‌نشدن، آیکن پیش‌فرض پرده بسته نمایش داده می‌شود |
| `open_service` | string | اختیاری | هر سرویس یا اسکریپتی | سرویسی برای باز کردن پرده شما، پیش‌فرض `cover.open_cover` |
| `stop_service` | string | اختیاری | هر سرویس یا اسکریپتی | سرویسی برای توقف پرده شما، پیش‌فرض `cover.stop_cover` |
| `close_service` | string | اختیاری | هر سرویس یا اسکریپتی | سرویسی برای بستن پرده شما، پیش‌فرض `cover.close_cover` |
| `tilt_buttons` | string | اختیاری | `top` (پیش‌فرض)، `bottom`، `left`، `right`، `hidden` | موقعیت دکمه‌های کنترل زاویه (فقط زمانی نمایش داده می‌شود که پرده از زاویه پشتیبانی کند) |
| `open_tilt_service` | string | اختیاری | هر سرویس یا اسکریپتی | سرویسی برای باز کردن زاویه، پیش‌فرض `cover.open_cover_tilt` |

| `close_tilt_service` | string | اختیاری | هر سرویس یا اسکریپتی | سرویسی برای بستن زاویه، پیش‌فرض `cover.close_cover_tilt` |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | امکان تغییر اقدام‌های پیش‌فرض هنگام کلیک روی دکمه. |
| `tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام کلیک روی آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |
| `double_tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام دوبار کلیک روی آیکن؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود. |
| `hold_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام نگه‌داشتن آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |
| `main_buttons_position` | string | اختیاری | `default` یا `bottom` | انتقال کنترل‌های رسانه به پایین (ثابت) |
| `main_buttons_full_width` | boolean | اختیاری | `true` یا `false` | تمام‌عرض کردن کنترل‌های پایینی (پیش‌فرض: `true` هنگامی که موقعیت `bottom` است) |
| `main_buttons_alignment` | string | اختیاری | `end` (پیش‌فرض)، `center`، `start`، `space-between` | چیدمان کنترل‌های پایینی هنگامی که تمام‌عرض نیستند |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض اگر در section view نباشد)، `large` (پیش‌فرض اگر در section view باشد)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان ظاهری کارت، ببینید [چیدمان کارت‌ها](#چیدمان-کارتها) |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |
| `sub_button` | object | اختیاری | ببینید [زیردکمه‌ها](#زیردکمهها) | افزودن دکمه‌های سفارشی چسبیده به سمت راست |

</details>

<details>

<summary><b>متغیرهای CSS (ببینید <a href="#استایلها">استایل‌ها</a>)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | رنگ اصلی پس‌زمینه برای عناصر پشتیبانی‌شده در کارت پرده |
| `--bubble-cover-border-radius` | `px` | شعاع گوشه کارت پرده |
| `--bubble-cover-icon-border-radius` | `px` | شعاع گوشه ظرف آیکن کارت پرده |
| `--bubble-cover-icon-background-color` | `color` | رنگ پس‌زمینه ظرف آیکن کارت پرده |
| `--bubble-cover-box-shadow` | ببینید [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | سایه جعبه‌ای کارت پرده |
| `--bubble-button-box-shadow` | ببینید [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | سایه جعبه‌ای دکمه‌های کارت پرده |

</details>


#### مثال

<details>

<summary>کارتی که می‌تواند یک کرکره غلتکی را کنترل کند</summary>

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

## انتخاب

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

این کارت به شما امکان افزودن یک منوی کشویی برای موجودیت‌های `input_select` / `select` را می‌دهد. این کارت همچنین از زیردکمه‌ها و تمام قابلیت‌های رایج Bubble Card پشتیبانی می‌کند.

> [!TIP]
> در صورت تمایل می‌توانید زیردکمه‌های انتخاب هم داشته باشید؛ این قابلیت در تمام کارت‌هایی که از زیردکمه‌ها پشتیبانی می‌کنند در دسترس است.

### گزینه‌های انتخاب

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `entity` | string | **الزامی** | هر موجودیتی | موجودیتی برای کنترل |
| `name` | string | اختیاری | هر رشته‌ای | نامی برای انتخاب شما؛ در صورت تعریف‌نشدن، نام موجودیت نمایش داده می‌شود |
| `icon` | string | اختیاری | هر آیکن `mdi:` | آیکنی برای انتخاب شما؛ در صورت تعریف‌نشدن، آیکن موجودیت یا `entity-picture` نمایش داده می‌شود |
| `force_icon` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | اولویت را به آیکن به‌جای `entity-picture` می‌دهد |
| `show_state` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یا پنهان‌سازی وضعیت `entity` شما |
| `show_name` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی نام |
| `show_icon` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان‌سازی آیکن |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین تغییر `entity` شما |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین به‌روزرسانی `entity` شما |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یکی از ویژگی‌های `entity` شما زیر `name` آن |
| `attribute` | string | اختیاری (الزامی اگر `show_attribute` روی `true` تنظیم شده باشد) | ویژگی‌ای از `entity` شما | ویژگی‌ای که نمایش داده می‌شود (مثلاً `brightness`) |
| `scrolling_effect` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | اجازه لغزش متن هنگامی که محتوا از اندازه ظرفش بزرگ‌تر باشد |
| `tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام کلیک روی آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |
| `double_tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام دوبار کلیک روی آیکن؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود. |
| `hold_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام نگه‌داشتن آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض اگر در section view نباشد)، `large` (پیش‌فرض اگر در section view باشد)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان ظاهری کارت، ببینید [چیدمان کارت‌ها](#چیدمان-کارتها) |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |
| `sub_button` | object | اختیاری | ببینید [زیردکمه‌ها](#زیردکمهها) | افزودن دکمه‌های سفارشی چسبیده به سمت راست |

</details>

<details>

<summary><b>متغیرهای CSS (ببینید <a href="#استایلها">استایل‌ها</a>)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | رنگ اصلی پس‌زمینه برای عناصر پشتیبانی‌شده در کارت انتخاب |
| `--bubble-select-background-color` | `color` | رنگ پس‌زمینه کارت انتخاب |
| `--bubble-select-list-border-radius` | `px` | شعاع گوشه منوی کشویی در کارت |
| `--bubble-select-list-item-accent-color` | `color` | رنگ تاکیدی برای مورد انتخاب‌شده |
| `--bubble-select-list-background-color` | `color` | رنگ پس‌زمینه منوی کشویی در کارت |
| `--bubble-select-list-width` | `px` | عرض منوی کشویی در کارت |
| `--bubble-select-arrow-background-color` | `color` | رنگ پس‌زمینه فلش کشویی |
| `--bubble-select-button-border-radius` | `px` | شعاع گوشه دکمه انتخاب |
| `--bubble-select-border-radius` | `px` | شعاع گوشه کارت انتخاب |
| `--bubble-select-icon-border-radius` | `px` | شعاع گوشه ظرف آیکن کارت انتخاب |
| `--bubble-select-icon-background-color` | `color` | رنگ پس‌زمینه ظرف آیکن کارت انتخاب |
| `--bubble-select-box-shadow` | ببینید [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | سایه جعبه‌ای کارت انتخاب |

</details>


#### مثال‌ها

<details>

<summary>کارت انتخاب با فهرستی از صحنه‌ها</summary>

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

## سرمایش و گرمایش

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

این کارت به شما امکان کنترل موجودیت‌های `climate` را می‌دهد.

> [!TIP]
> منوی انتخاب حالت یک [زیردکمه](#زیردکمهها) است که هنگام ساخت کارت به‌طور خودکار اضافه می‌شود. سپس می‌توانید آن را طبق میل خود تغییر دهید یا حذف کنید.

### گزینه‌های سرمایش و گرمایش

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام                     | نوع    | الزام                         | گزینه‌های پشتیبانی‌شده                                  | توضیح                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **الزامی**                        | موجودیت climate                                   | موجودیتی برای کنترل (مثلاً `climate.living_room`).                                                            |
| `name`                  | string  | اختیاری                            | هر رشته‌ای                                       | نامی سفارشی برای کارت. در صورت تعریف‌نشدن، نام موجودیت نمایش داده می‌شود.                                    |
| `icon`                  | string  | اختیاری                            | هر آیکن `mdi:`                                  | آیکنی سفارشی برای کارت. در صورت تعریف‌نشدن، آیکن موجودیت یا `entity-picture` استفاده می‌شود.                   |
| `force_icon`            | boolean | اختیاری                            | `true` یا `false` (پیش‌فرض)                     | اولویت را به آیکن به‌جای `entity-picture` می‌دهد.                                                           |
| `show_state`            | boolean | اختیاری                            | `true` یا `false` (پیش‌فرض)                     | نمایش یا پنهان‌سازی وضعیت فعلی `entity`.                                                                 |
| `show_name`             | boolean | اختیاری                            | `true` (پیش‌فرض) یا `false`                     | نمایش یا پنهان‌سازی نام موجودیت.                                                                            |
| `show_icon`             | boolean | اختیاری                            | `true` (پیش‌فرض) یا `false`                     | نمایش یا پنهان‌سازی آیکن.                                                                                          |
| `hide_target_temp_low`  | boolean | اختیاری (فقط برای موجودیت‌های پشتیبان `target_temp_low`) | `true` یا `false` (پیش‌فرض) | پنهان کردن کنترل دمای پایین هدف در صورت پشتیبانی توسط `entity`.                                          |
| `hide_target_temp_high` | boolean | اختیاری (فقط برای موجودیت‌های پشتیبان `target_temp_high`)| `true` یا `false` (پیش‌فرض) | پنهان کردن کنترل دمای بالای هدف در صورت پشتیبانی توسط `entity`.                                         |
| `state_color`           | boolean | اختیاری                            | `true` یا `false` (پیش‌فرض)                     | اعمال یک رنگ پس‌زمینه ثابت هنگامی که موجودیت climate روشن است.                                              |
| `step` | number | اختیاری | هر عددی | گام دما. |
| `min_temp` | number | اختیاری | هر عددی | حداقل دما. |
| `max_temp` | number | اختیاری | هر عددی | حداکثر دما. |
| `button_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | امکان تغییر اقدام‌های پیش‌فرض هنگام کلیک روی دکمه. |
| `tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام کلیک روی آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |
| `double_tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام دوبار کلیک روی آیکن؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود. |
| `hold_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام نگه‌داشتن آیکن؛ در صورت تعریف‌نشدن، `more-info` استفاده می‌شود. |                              |
| `main_buttons_position` | string | اختیاری | `default` یا `bottom` | انتقال دکمه‌های اقدام climate به پایین (ثابت) |
| `main_buttons_full_width` | boolean | اختیاری | `true` یا `false` | تمام‌عرض کردن دکمه‌های اقدام پایینی (پیش‌فرض: `true` هنگامی که موقعیت `bottom` است) |
| `main_buttons_alignment` | string | اختیاری | `end` (پیش‌فرض)، `center`، `start`، `space-between` | چیدمان دکمه‌های اقدام پایینی هنگامی که تمام‌عرض نیستند |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض اگر در section view نباشد)، `large` (پیش‌فرض اگر در section view باشد)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان ظاهری کارت، ببینید [چیدمان کارت‌ها](#چیدمان-کارتها) |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |
| `sub_button`            | object  | اختیاری                            | ببینید [زیردکمه‌ها](#زیردکمهها)                | افزودن دکمه‌های سفارشی چسبیده به سمت راست. برای منوی انتخاب حالت climate مفید است.                                  |

</details>

<details>

<summary><b>متغیرهای CSS (ببینید <a href="#استایلها">استایل‌ها</a>)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | رنگ اصلی پس‌زمینه برای عناصر پشتیبانی‌شده در کارت climate |
| `--bubble-climate-border-radius` | `px` | شعاع گوشه عناصر پشتیبانی‌شده کارت climate |
| `--bubble-climate-button-background-color` | `color` | رنگ پس‌زمینه دکمه‌های کارت climate |
| `--bubble-climate-icon-border-radius` | `px` | شعاع گوشه ظرف آیکن کارت climate |
| `--bubble-state-climate-fan-only-color` | `color` | رنگ روکش برای حالت فقط‌پنکه |
| `--bubble-state-climate-dry-color` | `color` | رنگ روکش برای حالت خشک‌کن |
| `--bubble-state-climate-cool-color` | `color` | رنگ روکش برای حالت سرمایش |
| `--bubble-state-climate-heat-color` | `color` | رنگ روکش برای حالت گرمایش |
| `--bubble-state-climate-auto-color` | `color` | رنگ روکش برای حالت خودکار |
| `--bubble-state-climate-heat-cool-color` | `color` | رنگ روکش برای حالت گرمایش-سرمایش |
| `--bubble-climate-accent-color` | `color` | رنگ تاکیدی کارت climate |
| `--bubble-climate-box-shadow` | ببینید [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | سایه جعبه‌ای ظرف climate. |

</details>


#### مثال‌ها

<details>

<summary>کارت climate با منوی کشویی حالت‌های HVAC</summary>

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

## تقویم

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

این کارت به شما امکان نمایش موجودیت‌های تقویم را می‌دهد. محتوای آن قابل پیمایش است، بنابراین می‌توانید به‌راحتی رویدادهای پیش‌رو را مرور کنید.

### گزینه‌های تقویم

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام                | نوع    | الزام  | گزینه‌های پشتیبانی‌شده                               | توضیح                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------|
| `days`              | number  | اختیاری     | هر عددی (حداقل: ۱)                        | تعداد روزهای تقویمی برای دریافت رویدادها، از اکنون تا پایان روز اُم (پیش‌فرض: ۷) |
| `entities`          | object  | **الزامی** | یک شیء موجودیت تقویم (ببینید زیر)            | موجودیتی برای کنترل (مثلاً `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **الزامی** | یک موجودیت تقویم                               | موجودیت تقویم برای نمایش                                                          |
| `entities.color`    | string  | اختیاری     | یک رنگ                                         | رنگی سفارشی برای برچسب تقویم. در صورت تعریف‌نشدن، رنگی خودکار انتخاب می‌شود |
| `days`              | number  | اختیاری     | هر عددی (حداقل: ۱)                         | تعداد روزهای تقویمی برای دریافت رویدادها، از اکنون تا پایان روز اُم (پیش‌فرض: ۷) |
| `limit`             | number  | اختیاری     | یک عدد                                        | تعداد رویدادهایی که روی کارت نمایش داده می‌شوند                                  |
| `show_end`          | boolean | اختیاری     | `true` یا `false` (پیش‌فرض)                     | نمایش یا پنهان‌سازی زمان پایان رویدادها                                                    |
| `show_progress`     | boolean | اختیاری     | `true` (پیش‌فرض) یا `false`                     | نمایش یا پنهان‌سازی نوار پیشرفت رویداد                                                     |
| `show_started_events`| boolean | اختیاری     | `true` (پیش‌فرض) یا `false`                     | نمایش یا پنهان‌سازی رویدادهایی که در حال حاضر در جریان‌اند. رویدادهای چندروزه روز به روز سنجیده می‌شوند، بنابراین تنها روز در جریان پنهان می‌شود و روزهای پیش رو نمایان می‌مانند |
| `scrolling_effect`  | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | اجازه لغزش متن هنگامی که محتوا از اندازه ظرفش بزرگ‌تر باشد |
| `event_action` | object | اختیاری | `tap_action`، `double_tap_action` یا `hold_action`، ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | امکان افزودن اقدام‌ها هنگام کلیک روی رویداد. |
| `tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام کلیک روی روز؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود. |
| `double_tap_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام دوبار کلیک روی روز؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود. |
| `hold_action` | object | اختیاری | ببینید [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) | تعیین نوع اقدام هنگام نگه‌داشتن روز؛ در صورت تعریف‌نشدن، `none` استفاده می‌شود. |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض اگر در section view نباشد)، `large` (پیش‌فرض اگر در section view باشد)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان ظاهری کارت، ببینید [چیدمان کارت‌ها](#چیدمان-کارتها) |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |
| `sub_button` | object | اختیاری | ببینید [زیردکمه‌ها](#زیردکمهها) | افزودن دکمه‌های سفارشی چسبیده به سمت راست |

</details>

<details>

<summary><b>متغیرهای CSS (ببینید <a href="#استایلها">استایل‌ها</a>)</b></summary>

| متغیر                                  | مقدار مورد انتظار | توضیح                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | رنگ اصلی پس‌زمینه برای عناصر پشتیبانی‌شده در کارت تقویم  |
| `--bubble-calendar-border-radius`         | `px`           | شعاع گوشه عناصر پشتیبانی‌شده کارت تقویم |
| `--bubble-calendar-height`                | `px`           | ارتفاع کارت تقویم                                        |

</details>

#### مثال‌ها

<details>

<summary>کارت تقویم با تعداد محدودی رویداد</summary>

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

<summary>کارت تقویم با زمان پایان و نوار پیشرفت</summary>

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


## جداکننده

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

این کارت یک جداکننده ساده برای تقسیم پاپ‌آپ شما به دسته‌ها یا بخش‌هاست. مثلاً: نورها، دستگاه‌ها، پرده‌ها، تنظیمات، اتوماسیون‌ها...

### گزینه‌های جداکننده

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `name` | string | اختیاری اما پیشنهادی | هر رشته‌ای | نامی برای جداکننده شما |
| `icon` | string | اختیاری اما پیشنهادی | هر آیکون `mdi:` | آیکونی برای جداکننده شما |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض در صورت نبودن در نمای بخش)، `large` (پیش‌فرض در نمای بخش)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان استایل کارت، به [چیدمان کارت‌ها](#چیدمان-کارتها) مراجعه کنید |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |
| `sub_button` | object | اختیاری | به [زیردکمه‌ها](#زیردکمهها) مراجعه کنید | افزودن دکمه‌های سفارشی ثابت در سمت راست |

</details>

<details>

<summary><b>متغیرهای CSS (به <a href="#استایلها">استایل‌ها</a> مراجعه کنید)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | رنگ پس‌زمینه خط در جداکننده |

</details>

#### مثال

<details>

<summary>یک جداکننده برای بخش «پرده‌ها»</summary>

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

## ستون خالی

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

این کارت برای پر کردن یک ستون خالی است. این کارت زمانی مفید است که در پاپ‌آپ خود یک `horizontal-stack` با تنها یک کارت داشته باشید. به گوشه پایین سمت راست این تصویر نگاه کنید تا آن را (ن)بینید.

### گزینه‌های ستون خالی

این کارت هیچ گزینه‌ای ندارد و از [استایل‌ها](#استایلها) پشتیبانی نمی‌کند، هرچند از گزینه‌های چیدمان برای بخش‌های HA پشتیبانی می‌کند.

#### مثال

<details>

<summary>یک ستون خالی در یک پشته افقی</summary>

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

## فقط زیردکمه‌ها

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

این کارت به‌طور اختصاصی برای زیردکمه‌ها طراحی شده است. برای منوها، اقدام‌های سریع، چیپ‌های اطلاعاتی یا یک فوتر ثابت در پایین صفحه بی‌نظیر است.

> [!IMPORTANT]  
> این کارت از شمای جدید زیردکمه‌ها استفاده می‌کند. برای تعریف دکمه‌های خود از `sub_button.bottom` استفاده کنید. بخش `sub_button.main` نادیده گرفته می‌شود.

### گزینه‌های فقط زیردکمه‌ها

<details>

<summary><b>گزینه‌ها (YAML + توضیحات)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **الزامی** | به [زیردکمه‌ها](#زیردکمهها) مراجعه کنید | زیردکمه‌های خود را با استفاده از بخش `bottom` تعریف کنید |
| `hide_main_background` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | حذف پس‌زمینه کارت |
| `footer_mode` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | ثابت کردن کارت در پایین صفحه |
| `footer_full_width` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | تمام‌عرض کردن فوتر (۱۰۰٪) |
| `footer_width` | number | اختیاری | هر عددی | عرض فوتر بر حسب پیکسل زمانی که `footer_full_width` برابر `false` است |
| `footer_bottom_offset` | number | اختیاری | هر عددی | فاصله از پایین صفحه بر حسب پیکسل (پیش‌فرض: `16`) |
| `card_layout` | string | اختیاری | `normal` (پیش‌فرض در صورت نبودن در نمای بخش)، `large` (پیش‌فرض در نمای بخش)، `large-2-rows`، `large-sub-buttons-grid` | چیدمان استایل کارت، به [چیدمان کارت‌ها](#چیدمان-کارتها) مراجعه کنید |
| `rows` | number | اختیاری | هر عددی | تعداد ردیف‌ها (ارتفاع) (مثلاً `2`) |

</details>

<details>

<summary><b>متغیرهای CSS (به <a href="#استایلها">استایل‌ها</a> مراجعه کنید)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | عرض فوتر زمانی که `footer_full_width` برابر `false` است |
| `--bubble-footer-bottom` | `px` | فاصله فوتر از پایین |
| `--bubble-footer-box-shadow` | به [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) مراجعه کنید | سایه جعبه برای ظرف فوتر |

</details>

#### مثال‌ها

<details>

<summary>چیپ‌ها (مانند تصویر بالا)</summary>

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

<summary>یک منوی فوتر ثابت</summary>

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

## زیردکمه‌ها

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

در هر کارتی که از این گزینه پشتیبانی می‌کند، می‌توانید زیردکمه‌هایی اضافه کنید تا کارت‌های خود را حتی بیشتر سفارشی کنید. برای مثال، می‌توانید دکمه‌ای بسازید که یک جاروبرقی، یک کارت آب‌وهوا یا تقریباً هر چیزی که به ذهنتان برسد را کنترل کند. این زیردکمه‌ها از اقدام‌های ضربه و بیشتر گزینه‌های دکمه پشتیبانی می‌کنند.

زیردکمه‌ها اکنون از سه نوع پشتیبانی می‌کنند: **پیش‌فرض (دکمه)**، **اسلایدر** و **کشویی / انتخاب**. می‌توانید انواع مختلف را در یک کارت ترکیب کنید، زیردکمه‌ها را در بالا یا پایین قرار دهید و آن‌ها را برای چیدمان‌های پیشرفته‌تر در گروه‌ها سازمان‌دهی کنید.

#### جای‌گذاری و گروه‌بندی زیردکمه‌ها

<details>

<summary><b>ساختار زیردکمه‌ها (main / bottom + گروه‌ها)</b></summary>

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

**نکات:**
- `main` و `bottom` دو بخش مستقل هستند. زیردکمه‌های `bottom` در پایین کارت ثابت می‌مانند.
- `main_layout` و `bottom_layout` مقادیر `inline` (پیش‌فرض) یا `rows` را برای چیدن گروه‌ها به‌صورت عمودی می‌پذیرند.
- گروه‌ها آبجکت‌هایی هستند با یک آرایه `group` و یک `buttons_layout` اختیاری (`inline` یا `column`).
- `justify_content` فقط برای **گروه‌های bottom** در دسترس است (`start`، `center`، `end`، `fill`).
- زمانی که زیردکمه‌های `bottom` وجود داشته باشند، چیدمان کارت به‌طور خودکار به `large` تغییر می‌کند مگر اینکه چیدمان دیگری را صریحاً تنظیم کنید.
- آرایه‌های قدیمی `sub_button` همچنان پشتیبانی می‌شوند و به‌عنوان بخش `main` در نظر گرفته می‌شوند.

</details>

### گزینه‌های زیردکمه‌ها

<details>

<summary><b>گزینه‌ها (YAML + توضیح)</b></summary>

| نام | نوع | الزام | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- | --- |
| `entity` | string | اختیاری | هر موجودیتی | موجودیتی برای کنترل |
| `name` | string | اختیاری | هر رشته‌ای | نامی برای زیردکمه شما، در صورت تعریف نشدن نام موجودیت نمایش داده می‌شود |
| `icon` | string | اختیاری | هر آیکون `mdi:` | آیکونی برای زیردکمه شما، در صورت تعریف نشدن آیکون یا تصویر موجودیت نمایش داده می‌شود |
| `force_icon` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش اجباری آیکون حتی اگر تصویر موجودیت در دسترس باشد |
| `sub_button_type` | string | اختیاری | `default`، `slider` یا `select` | انتخاب نوع زیردکمه |
| `show_background` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش پس‌زمینه برای زیردکمه شما، رنگ آن بر اساس وضعیت موجودیت شما تغییر می‌کند |
| `state_background` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | استفاده از رنگ وضعیت زمانی که موجودیت `on` است |
| `light_background` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | استفاده از رنگ نور برای پس‌زمینه در صورت موجود بودن |
| `show_state` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یا پنهان کردن وضعیت `entity` شما |
| `show_name` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یا پنهان کردن نام |
| `show_icon` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان کردن آیکون |
| `show_last_changed` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین تغییر `entity` شما |
| `show_last_updated` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش زمان آخرین به‌روزرسانی `entity` شما |
| `show_attribute` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | نمایش یک ویژگی از `entity` شما زیر `name` آن |
| `attribute` | string | اختیاری (الزامی در صورتی که `show_attribute` روی `true` تنظیم شده باشد) | ویژگی‌ای از `entity` شما | ویژگی‌ای که نمایش داده می‌شود (مثلاً `brightness`) |
| `select_attribute` | string | اختیاری | فهرست ویژگی‌های `entity` شما (به گزینه‌های پشتیبانی‌شده بالا مراجعه کنید) | این فهرست ویژگی با کلیک یک کشویی باز می‌کند (مثلاً `effect_list`) |
| `show_arrow` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | نمایش یا پنهان کردن فلش کشویی برای زیردکمه‌های نوع select |
| `scrolling_effect` | boolean | اختیاری | `true` (پیش‌فرض) یا `false` | اجازه دادن به متن برای اسکرول شدن زمانی که محتوا از اندازه ظرف بیشتر شود |
| `tap_action` | object | اختیاری | به [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) مراجعه کنید | تعریف نوع اقدام هنگام کلیک روی زیردکمه، در صورت تعریف نشدن از `more-info` استفاده می‌شود. |
| `double_tap_action` | object | اختیاری | به [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) مراجعه کنید | تعریف نوع اقدام هنگام دو بار کلیک روی زیردکمه، در صورت تعریف نشدن از `none` استفاده می‌شود. |
| `hold_action` | object | اختیاری | به [اقدام‌ها](#اقدامهای-ضربه-ضربه-دوبار-و-نگه-داشتن) مراجعه کنید | تعریف نوع اقدام هنگام نگه داشتن زیردکمه، در صورت تعریف نشدن از `more-info` استفاده می‌شود. |
| `fill_width` | boolean | اختیاری | `true` یا `false` | پر کردن عرض موجود (پیش‌فرض: `false` برای بخش main، `true` برای بخش bottom) |
| `width` | number or string | اختیاری | هر عدد یا طول CSS | عرض سفارشی (`px` برای بخش main، به‌طور پیش‌فرض `%` برای بخش bottom) |
| `custom_height` | number | اختیاری | هر عددی | ارتفاع سفارشی بر حسب پیکسل |
| `content_layout` | string | اختیاری | `icon-left` (پیش‌فرض)، `icon-top`، `icon-bottom`، `icon-right` | جای‌گذاری آیکون درون زیردکمه |
| `always_visible` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | **فقط اسلایدر.** همیشه اسلایدر را نمایش بده به‌جای باز شدن آن با ضربه |
| `show_button_info` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | **فقط اسلایدر.** نمایش آیکون/نام/وضعیت زمانی که `always_visible` فعال است |
| `visibility` | object or list | اختیاری | به [شرط‌ها](#شرطها) مراجعه کنید | نمایش یا پنهان کردن زیردکمه بر اساس شرط‌ها |
| `hide_when_parent_unavailable` | boolean | اختیاری | `true` یا `false` (پیش‌فرض) | پنهان کردن زیردکمه در صورتی که موجودیت کارت والد در دسترس نباشد |
| `css_class` | string | اختیاری | هر رشته‌ای | یک کلاس CSS اضافی روی زیردکمه، برای هدف قرار دادن آن در [استایل‌های](#استایلها) خودتان فارغ از نامش (برای مثال `My value` می‌شود `.my-value`) |

</details>

<details>

<summary><b>گزینه‌های اسلایدر زیردکمه (مشابه اسلایدرهای دکمه)</b></summary>

<br>

اسلایدرهای زیردکمه از همان گزینه‌های اسلایدر دکمه‌ها پشتیبانی می‌کنند، از جمله:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>متغیرهای CSS (به <a href="#استایلها">استایل‌ها</a> مراجعه کنید)</b></summary>

| متغیر | مقدار مورد انتظار | توضیح |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | شعاع گوشه برای زیردکمه‌ها |
| `--bubble-sub-button-background-color` | `color` | رنگ پس‌زمینه برای زیردکمه‌ها |
| `--bubble-sub-button-outline` | `box-shadow` | خط دوری که تنها زمانی به یک زیردکمه یا یک اسلایدر افزوده می‌شود که همان رنگ کارت پشت خودش را بگیرد و در نتیجه نامرئی شود (برای حذف آن روی `none` تنظیمش کنید) |
| `--bubble-sub-slider-border-radius` | `px` | شعاع گوشه برای زیردکمه‌های اسلایدر |
| `--bubble-sub-slider-background-color` | `color` | رنگ پس‌زمینه برای زیردکمه‌های اسلایدر |
| `--bubble-sub-slider-height` | `px` | ارتفاع برای زیردکمه‌های اسلایدر همیشه‌نمایان |
| `--bubble-sub-slider-outline` | `box-shadow` | خط دور فقط برای زیردکمه‌های اسلایدر، در نبود آن به `--bubble-sub-button-outline` برمی‌گردد |
| `--bubble-sub-button-dark-text-color` | `color` | رنگ متن روی پس‌زمینه‌های روشن زیردکمه |

</details>

#### مثال‌ها

<details>

<summary>یک دکمه با چند زیردکمه برای ساخت کارت جاروبرقی (مانند تصویر بالا)</summary>

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

<summary>یک اسلایدر دکمه با یک زیردکمه که روشنایی را نمایش می‌دهد و یک زیردکمه دیگر که نور را تغییر وضعیت می‌دهد (مانند تصویر بالا)</summary>

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

<summary>دکمه‌ای که دمای داخل و بیرون را همراه با آب‌وهوای امروز و فردا نشان می‌دهد (تصویر پیوست شده)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> بدشانسی من این است که همیشه ابری است، اما همه آیکون‌ها بر اساس آب‌وهوا تغییر می‌کنند.

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

## چیدمان کارت‌ها

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card به‌طور کامل از نمای بخش Home Assistant پشتیبانی می‌کند، شما می‌توانید چیدمان کارت را تغییر دهید تا کارت بزرگ‌تر شود و همچنین تعداد ستون‌ها یا ردیف‌هایی که کارت باید در نمای بخش اشغال کند را تغییر دهید (فقط در کارت‌هایی که از این گزینه پشتیبانی می‌کنند). این چیدمان‌ها در همه انواع نمای دیگر نیز پشتیبانی می‌شوند.

<details>

<summary><b>چیدمان‌های موجود کارت</b></summary>

| چیدمان | توضیح |
| --- | --- |
| `normal` | چیدمان معمولی (بهینه‌شده برای نمای بخش نیست) |
| `large` | چیدمانی بزرگ‌تر که اندازه آن با ردیف‌های انتخاب‌شده در نمای بخش تغییر می‌کند (بهینه‌شده برای نمای بخش) |
| `large-2-rows` | چیدمانی بزرگ‌تر با ۲ ردیف زیردکمه که اندازه آن با ردیف‌های انتخاب‌شده در نمای بخش تغییر می‌کند (بهینه‌شده برای نمای بخش) |
| `large-sub-buttons-grid` | این چیدمان زیردکمه‌ها را به‌صورت شبکه‌ای نمایش می‌دهد، `rows` باید حداقل روی `2` تنظیم شود.

</details>

#### مثال‌ها

<details>

<summary>یک دکمه بزرگ که آمار مصرف انرژی را با ۲ ردیف زیردکمه نمایش می‌دهد (تصویر پیوست شده)</summary>

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

<summary>یک دکمه بزرگ با چند ردیف شامل ۱۲ زیردکمه</summary>

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

## شرط‌ها

برخی گزینه‌ها با شرط‌ها کار می‌کنند، که دقیقاً مانند شرط‌های [کارت شرطی](https://www.home-assistant.io/dashboards/conditional/) در Home Assistant نوشته می‌شوند:

- `visibility` روی یک [زیردکمه](#زیردکمهها)، برای نمایش یا پنهان‌سازی آن
- `trigger` روی یک [پاپ‌آپ](#پاپآپ)، برای باز کردن آن وقتی شرط‌ها برقرار باشند
- `checkConditionsMet(conditions, hass)` داخل [قالب‌های](#قالبها) شما، وقتی به پاسخ در کد خودتان نیاز دارید

همه انواع شرط Home Assistant ارزیابی می‌شوند: `state`، `numeric_state`، `screen`، `user`، `time`، `location`، `template`، و گروه‌های `and`، `or` و `not`. شرط‌های سازنده شرط Home Assistant هم کار می‌کنند، همان‌هایی که به نام دامنه خود نامیده می‌شوند مانند `sun.is_up`، `light.is_on`، `zone.in_zone` یا `temperature.is_value`، به همراه تنظیمات `target`، `options`، `behavior` و `for` آن‌ها.

<details>

<summary><b>نمونه</b></summary>

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
> شرط‌ها در مرورگر شما ارزیابی می‌شوند، بنابراین آن معدود شرط‌هایی که به سرور Home Assistant نیاز دارند نمی‌توانند دقیق باشند: طلوع و غروب به‌جای محاسبه دوباره از موجودیت `sun.sun` خوانده می‌شوند، و مدت `for` از آخرین تغییر وضعیت اندازه‌گیری می‌شود، بدون تاریخچه recorder.
>
> `view_columns` پذیرفته می‌شود اما همیشه برقرار است، چون هرگز Bubble Card نیست که ستون‌های نمای شما را می‌چیند. نوعی از شرط که Bubble Card نمی‌شناسد به‌جای شکست خاموش یک بار در کنسول مرورگر شما گزارش می‌شود، تا بتوانید غلط تایپی را از قابلیتی که وجود ندارد تشخیص دهید.

<br>

---

<br>

## اقدام‌های ضربه، ضربه دوبار و نگه داشتن

شما همچنین می‌توانید از اقدام‌های پیش‌فرض ضربه، ضربه دوبار و نگه داشتن Home Assistant در کارت‌هایی که از این گزینه پشتیبانی می‌کنند استفاده کنید. برای مثال، این امکان به شما اجازه می‌دهد پنجره «اطلاعات بیشتر» را با نگه داشتن آیکون یک دکمه نمایش دهید یا با فشردن یک زیردکمه یک سرویس را اجرا کنید.

**نکته: زمانی که یک `double_tap_action` پیکربندی شده باشد، `tap_action` معمولی برای امکان تشخیص
ضربه دوبار، ۲۰۰ میلی‌ثانیه تأخیر خواهد داشت. اگر این تأخیر ناخواسته است، `double_tap_action` را روی `none` تنظیم کنید تا مدیریت ضربه دوبار غیرفعال شود.**

### گزینه‌های اقدام

<details>

<summary><b>گزینه‌ها (YAML + توضیح)</b></summary>

| نام | نوع | گزینه‌های پشتیبانی‌شده | توضیح |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | اقدامی که باید انجام شود |
| `target` | object |  | فقط با `call-service` کار می‌کند. از [نحو home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) پیروی می‌کند |
| `navigation_path` | string | هر مسیری از داشبورد شما | مسیری که باید به آن رفت (مثلاً `'#kitchen'` برای باز کردن یک پاپ‌آپ) زمانی که اقدام به‌صورت navigate تعریف شده باشد |
| `url_path` | string | هر لینکی | آدرسی که با کلیک باز می‌شود (مثلاً `https://www.google.com`) زمانی که `action` برابر `url` است |
| `service` | string | هر سرویسی | سرویسی که باید فراخوانی شود (مثلاً `media_player.media_play_pause`) زمانی که `action` به‌صورت `call-service` تعریف شده باشد |
| `data` یا `service_data` | object | هر داده سرویسی | داده سرویسی که باید شامل شود (مثلاً `entity_id: media_player.kitchen`) زمانی که `action` به‌صورت `call-service` تعریف شده باشد |
| `confirmation` | object | به [تأیید](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) مراجعه کنید | نمایش یک پاپ‌آپ تأیید (نه یک پاپ‌آپ Bubble Card)، جایگزین آبجکت پیش‌فرض `confirmation` می‌شود |

</details>

#### مثال

<details>

<summary>دکمه‌ای برای باز کردن یک پاپ‌آپ</summary>

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

## استایل‌ها

می‌توانید بدون استفاده از card-mod، استایل‌های سفارشی را به چهار روش به CSS همه کارت‌ها اضافه کنید:

- در ویرایشگر، به کارتی که می‌خواهید تغییر دهید بروید، سپس به بخش _Styling options > Custom styles & JS templates_ بروید و استایل‌های سفارشی خود را اضافه کنید (نکات و مثال‌های زیر را ببینید).
- در ویرایشگر (یا در [YAML](#ماژولها))، به کارتی که می‌خواهید تغییر دهید بروید، سپس به بخش _Modules_ بروید و یک ماژول جدید بسازید (این ماژول برای همه کارت‌ها در دسترس خواهد بود)، یا به **Module Store** بروید تا هر ماژول موجودی را نصب کنید (جزئیات بیشتر درباره ماژول‌ها را می‌توانید [در پایین](#ماژولها) پیدا کنید).
- در یک فایل [تم](https://www.home-assistant.io/integrations/frontend/#defining-themes) با افزودن متغیرهای CSS در YAML (این متغیرها در مستندات هر کارت که در بالا آمده در دسترس هستند). این روش امکان تغییرات سراسری را فراهم می‌کند.

  <details>
  
  <summary>مثال</a></summary>
  
  <br>

  خط `Bubble:` را کپی نکنید، این فقط نام تمی است که استفاده می‌کنید. همچنین باید `--` را از ابتدای متغیرها حذف کنید.

  برای بازخوانی تم بعد از هر تغییری، باید اکشن [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) را اجرا کنید.

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
  
- در YAML با افزودن `styles: |` و به دنبال آن استایل‌های سفارشی خود (نکات و مثال‌های زیر را ببینید).

> [!TIP]  
> **برای اینکه بفهمید کدام کلاس‌های استایل قابل تغییر هستند**، می‌توانید نگاهی به پوشه [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) در این مخزن بیندازید. در هر پوشه کارت، فایلی به نام `styles.css` پیدا خواهید کرد. این فایل‌ها تمام استایل‌های اعمال‌شده را در بر دارند. این روش امکانات بسیار بیشتری نسبت به متغیرهای CSS فراهم می‌کند، اما باید به‌صورت جداگانه به هر کارت اضافه شود.
> 
> همچنین می‌توانید تعداد زیادی [مثال از جامعه کاربران](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards)، یا برخی از [فروم Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) پیدا کنید، فقط کافیست کمی جستجو کنید.
>
> تم Bubble برای Home Assistant (مانند آنچه در تصاویر می‌بینید) را می‌توانید [اینجا](https://github.com/Clooos/Bubble) پیدا کنید.
>
> به‌زودی یک ویدیوی آموزشی در [کانال YouTube](https://www.youtube.com/@cloooos) من منتشر می‌شود!

> [!IMPORTANT]  
> لطفاً توجه داشته باشید که ممکن است لازم باشد به برخی استایل‌های CSS که از قبل تعریف شده‌اند `!important;` اضافه کنید (مثال‌های زیر را ببینید).

> [!TIP]  
> زیردکمه‌ها را می‌توان از طریق کلاس‌های مبتنی بر نام هدف قرار داد. برای مثال، زیردکمه‌ای با نام "My sub-button" را می‌توان با `.my-sub-button` استایل داد. زیردکمه‌های اسلایدر هم `.bubble-sub-button-slider-1`، `.bubble-sub-button-slider-2` و غیره را در اختیار می‌گذارند.
>
> یک کلاس مبتنی بر نام وقتی زیردکمه را تغییر نام دهید عوض می‌شود، و وقتی نام ترجمه شود آن هم ترجمه می‌شود. `css_class` را روی زیردکمه تنظیم کنید تا کلاسی از آنِ خودتان داشته باشید که هرگز جابه‌جا نمی‌شود، فارغ از نام و فارغ از زبان.

#### مثال‌ها

<details>

<summary>تغییر اندازه فونت برای هر کارت Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>تغییر رنگ پس‌زمینه یک دکمه واحد در پشته دکمه‌های افقی</summary>

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

<summary>تغییر رنگ پس‌زمینه یک کارت</summary>

<br>

این مورد روی همه انواع Bubble Card کار می‌کند (به‌جز پاپ‌آپ‌ها):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

این مورد همان کار را فقط در یک کارت دکمه انجام می‌دهد (برای هدر پاپ‌آپ هم کار می‌کند): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

برای تغییر رنگ زمانی که وضعیت `on` است، به قالب‌های استایل زیر نگاهی بیندازید.

</details>

<details>

<summary>تغییر رنگ اسلایدر یک دکمه</summary>

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

<summary>تغییر رنگ خط یک جداکننده</summary>

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

<summary>تغییر رنگ یک آیکون</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

برای آیکون یک پشته دکمه‌های افقی.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>تغییر رنگ پس‌زمینه ظرف یک آیکون</summary>

<br>

این مورد روی همه انواع Bubble Card کار می‌کند (به‌جز پاپ‌آپ‌ها):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

این مورد همان کار را برای هدر پاپ‌آپ انجام می‌دهد: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>تغییر اندازه زیردکمه‌ها (مناسب برای چیدمان large)</summary>

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

<summary>تغییر رنگ پس‌زمینه دومین زیردکمه</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>تغییر اندازه یک آیکون</summary>

<br>

برای آیکون اصلی.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

برای آیکون‌های زیردکمه‌ها.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>استفاده از یک تصویر به‌جای آیکون در یک زیردکمه</summary>

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

فقط کافیست این تصویر را در پوشه‌ای به نام "pictures" (یا هر نامی که می‌خواهید) درون پوشه "www" مربوط به Home Assistant بارگذاری کنید.

</details>

<details>

<summary>مثال پیشرفته: ساخت یک ردیف افقی از زیردکمه‌ها (به همراه تصویر)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> من واقعاً این یکی را دوست دارم، از آن به‌عنوان هدر داشبورد خودم استفاده می‌کنم.

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

## قالب‌ها

**Bubble Card از قالب‌های Jinja پشتیبانی نمی‌کند**، اما کاربران پیشرفته می‌توانند قالب‌هایی به زبان JS مستقیماً در [استایل‌های سفارشی](#استایلها) خود اضافه کنند. برای مثال، این کار امکان تغییر پویای یک آیکون، متن‌ها یا رنگ‌های یک عنصر را فراهم می‌کند، یا نمایش یا پنهان‌سازی شرطی یک عنصر (مانند یک زیردکمه)، یا تقریباً هر چیز دیگری بر اساس یک وضعیت، یک ویژگی و موارد دیگر.

> [!TIP]  
> اطلاعات بیشتر درباره قالب‌های JS [اینجا](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). توصیه من این است که **همیشه به کنسول مرورگر خود نگاهی بیندازید** تا مطمئن شوید همه چیز درست کار می‌کند.

> [!IMPORTANT]  
> **همه قالب‌هایی که یک ویژگی CSS را تغییر نمی‌دهند باید در انتها قرار بگیرند! مانند تغییر یک آیکون، یک متن یا هر عنصر دیگری.**

#### متغیرها و توابع در دسترس

<details>

<summary>متغیرها</summary>

<br>

در بیشتر کارت‌ها به این متغیرها دسترسی دارید:

- `state` وضعیت `entity` تعریف‌شده شما را برمی‌گرداند.
  
- `entity` موجودیتی را که تعریف کرده‌اید، مانند `switch.test` در این مثال، برمی‌گرداند.
  
- `icon` را می‌توان این‌گونه برای تغییر آیکون استفاده کرد: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` وضعیت `entity` تعریف‌شده اولین زیردکمه شما را برمی‌گرداند، `[0]` وضعیت اولین زیردکمه است، `[1]` دومین...
  
- `subButtonIcon[0]` را می‌توان این‌گونه برای تغییر آیکون اولین زیردکمه استفاده کرد: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`، `[0]` آیکون اولین زیردکمه است، `[1]` دومین...
  
- `card` عنصر کارت را در DOM برمی‌گرداند.
  
- `hass` یک متغیر پیشرفته است که کنترل بیشتری در اختیار شما می‌گذارد، برای مثال می‌توانید وضعیت `light.kitchen` را این‌گونه برگردانید: `hass.states['light.kitchen'].state` یا یک ویژگی را این‌گونه: `hass.states[entity].attributes.brightness`.

- `this` اطلاعات مفید زیادی درباره تنظیمات و داشبورد شما برمی‌گرداند، فقط زمانی از آن استفاده کنید که می‌دانید در حال انجام چه کاری هستید.

</details>

<details>

<summary>توابع</summary>

<br>

به همه توابع سراسری JS دسترسی دارید، اما همچنین به این‌ها هم دسترسی دارید:

- `getWeatherIcon` را می‌توان برای برگرداندن یک آیکون آب‌وهوا بر اساس یک وضعیت که آب‌وهوا را برمی‌گرداند استفاده کرد. برای مثال، می‌توانید این‌گونه عمل کنید: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` تا آیکون سومین زیردکمه را به آیکون آب‌وهوای امروز تغییر دهید، `.forecast[1]?.condition` مربوط به فرداست...

  برای این کار باید یک سنسور قالب بسازید. این چیزی است که می‌توانید در `configuration.yaml` خود اضافه کنید:
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
- `checkConditionsMet(conditions, hass)` وقتی فهرستی از [شرط‌ها](#شرطها) برقرار باشد `true` برمی‌گرداند، برای مثال `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` را می‌توان برای ترجمه یک وضعیت استفاده کرد (همچنین می‌توان از آن برای دریافت واحد یک وضعیت استفاده کرد، بدون نیاز به افزودن دستی آن).
- `hass.formatEntityAttributeValue(state, "attribute")` را می‌توان برای ترجمه یک ویژگی استفاده کرد (همچنین می‌توان از آن برای دریافت واحد یک وضعیت استفاده کرد، بدون نیاز به افزودن دستی آن).

</details>

#### مثال‌ها

می‌توانید مثال‌های زیادی را در پایین پیدا کنید، اما همچنین می‌توانید قالب‌های بسیار پیشرفته‌ای را در [صفحه Patreon](https://www.patreon.com/c/Clooos) من پیدا کنید، مانند یکی (که مورد علاقه من است) که تا چهار نشان شرطی قابل قرارگیری در اطراف آیکون‌های کارت را امکان‌پذیر می‌کند. همچنین این راه خوبی برای یادگیری همه امکانات استایل‌ها و قالب‌های سفارشی Bubble Card است!

<details>
<summary>مثال‌هایی از صفحه Patreon من</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">افزودن نشان‌های شبیه Home Assistant به هر کارت</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">نمایش تاریخ و زمان قالب‌بندی‌شده در یک جداکننده بدون استفاده از هیچ موجودیتی</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">نمایش وضعیت یک زیردکمه در دو خط</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">سفارشی‌سازی برچسب‌ها و آیکون‌ها داخل یک زیردکمه انتخاب</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">افزودن یک پاپ‌آپ یادآوری پایدار که فقط در صورت نیاز نمایش داده می‌شود</a>
</p>

<br>

</details>

<details>

<summary>تغییر رنگ پس‌زمینه دکمه‌ای که در وضعیت <code>off</code> قرمز و در وضعیت <code>on</code> آبی است</summary>

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

<summary>تغییر رنگ پس‌زمینه دکمه بر اساس یک موجودیت برای پشته دکمه‌های افقی</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>نمایش/پنهان‌سازی شرطی یک زیردکمه</summary>

<br>

این مورد فقط زمانی اولین زیردکمه را نمایش می‌دهد که جاروبرقی من گیر کرده باشد.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

این مورد زمانی که باتری زیر ۱۰٪ باشد یک زیردکمه را نمایش می‌دهد. برای زیردکمه‌ای که "Low battery" نشان می‌دهد مفید است.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>تغییر شرطی یک آیکون یا آیکون زیردکمه</summary>

<br>

این مورد فقط زمانی آیکون یک دکمه را تغییر می‌دهد که یک جاروبرقی گیر کرده باشد.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

این مورد فقط زمانی آیکون اولین زیردکمه را تغییر می‌دهد که یک جاروبرقی گیر کرده باشد.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>تغییر شرطی رنگ یک آیکون یا آیکون زیردکمه</summary>

<br>

این مورد رنگ آیکون یک دکمه را بر اساس وضعیت آن تغییر می‌دهد.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

این مورد رنگ آیکون یک زیردکمه را بر اساس وضعیت آن تغییر می‌دهد. `.bubble-sub-button-1` اولین زیردکمه است، اگر می‌خواهید رنگ آیکون زیردکمه دیگری را تغییر دهید، `1` را جایگزین کنید.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>انیمیشن شرطی آیکون یک فن</summary>

<br>

این مورد وقتی یک فن `on` باشد، آیکون یک دکمه را می‌چرخاند.
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

<summary>قالب‌بندی متن‌ها (مانند نام یا وضعیت)</summary>

<br>

این مورد نام/وضعیت یک دکمه را بسته به آب‌وهوای شما به "It's currently sunny" تغییر می‌دهد.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
یا وقتی برای زیردکمه‌ها اعمال شود:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


اگر می‌خواهید وضعیت (`.bubble-state`) را قالب‌بندی کنید، `show_state: true` را فعال نکنید، فقط `show_attribute: true` را بدون هیچ ویژگی‌ای فعال کنید.

</details>

<details>

<summary>مثال پیشرفته: تغییر رنگ یک زیردکمه هنگام باز بودن یک پاپ‌آپ</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>مثال پیشرفته: قالب‌بندی نام یک جداکننده بر اساس وضعیتی که به زبان شما ترجمه شده</summary>

<br>

می‌توانید از `hass.formatEntityState(state)` برای ترجمه یک وضعیت و از `hass.formatEntityAttributeValue(state, "attribute")` برای ترجمه یک ویژگی استفاده کنید.

این مورد نام و آیکون را بر اساس آب‌وهوا تغییر می‌دهد، "Nuageux" به معنای "Cloudy" (ابری) در زبان فرانسه است.

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

## ماژول‌ها

ماژول‌ها یک قابلیت قدرتمند هستند که به شما امکان می‌دهند استایل‌ها و قالب‌های سفارشی خود را ذخیره، دوباره استفاده و در همه Bubble Card‌های خود به اشتراک بگذارید. به‌جای کپی و جای‌گذاری کد یکسان در چندین کارت، می‌توانید یک ماژول بسازید و آن را هر جا که نیاز دارید اعمال کنید. این کار مدیریت ظاهر و حس داشبورد شما را بسیار ساده‌تر و کارآمدتر می‌کند.

اما این قابلیت بسیار قدرتمندتر از این هم هست، به شما اجازه می‌دهد ویژگی‌های واقعی را خودتان در ویرایشگر Bubble Card اضافه کنید، با استفاده از همه گزینه‌های پیش‌فرض [فرم Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
انتخابگر شیء بهبود یافته تا تغییرات را به‌صورت زنده نمایش دهد و از ویژگی‌ها به‌درستی پشتیبانی کند.

یک ماژول می‌تواند در کنار [پیشنهادهای موجودیت](#پیشنهادهای-موجودیت) داخلی به انتخابگر کارت Home Assistant هم پاسخ دهد: از `suggestions` برای کارت‌هایی استفاده کنید که می‌تواند از پیش توصیف کند، و از `suggestions_code` وقتی باید از روی چیدمان شما محاسبه شوند، برای مثال یک پاپ‌آپ ساخته‌شده از همه موجودیت‌های ناحیه‌ای که موجودیت انتخاب‌شده به آن تعلق دارد. هر دو کلید [اینجا](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions) مستند شده‌اند.

همچنین می‌توانید در **Module Store** جستجو کنید تا [ماژول‌های ساخته‌شده توسط جامعه کاربران](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) را پیدا و نصب کنید، یا خلاقیت‌های خودتان را به اشتراک بگذارید!

> [!TIP]
> کد یک ماژول دقیقاً همان‌طور کار می‌کند که کد بخش `styles` یک کارت کار می‌کند. همه متغیرها و توابعی که در بخش [قالب‌ها](#قالبها) آمده در دسترس هستند.

<br>

### راه‌اندازی اولیه

> [!IMPORTANT]
> از نسخه v3.1.0 به بعد، Bubble Card Tools بک‌اند ذخیره‌سازی توصیه‌شده برای ماژول‌هاست. روش قدیمی سنسور قالب هنوز برای تنظیمات موجود کار می‌کند، اما ماژول‌های جدید و ویژگی‌های Module Store به بهترین شکل از طریق Bubble Card Tools پشتیبانی می‌شوند.

یکپارچه‌سازی Bubble Card Tools، ویرایشگر ماژول و Module Store را فعال می‌کند و ماژول‌ها را به‌صورت فایل‌های YAML جداگانه ذخیره می‌کند. ماژول‌های موجود به‌صورت خودکار منتقل می‌شوند.

مراحل نصب و پیکربندی اینجا توضیح داده شده است:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### ویرایشگر ماژول

می‌توانید از تنظیمات هر کارتی، در بخش **Modules**، به ویرایشگر ماژول دسترسی داشته باشید. این ویرایشگر دو تب اصلی ارائه می‌دهد:

#### تب My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

این تب همه ماژول‌های نصب‌شده شما را نمایش می‌دهد و امکانات زیر را در اختیار شما می‌گذارد:

- **اعمال کردن** ماژول‌های موجود روی کارت فعلی
- **ساختن** یک ماژول جدید از صفر
- **ویرایش کردن** ماژول‌های موجود همراه با پیش‌نمایش زنده
- **حذف کردن** ماژول‌هایی که دیگر نیاز ندارید
- **جستجو** و **مرتب‌سازی** ماژول‌ها (الفبایی، اخیر، فعال‌ها اول)
- **تنظیم وضعیت سراسری** برای اینکه یک ماژول به‌صورت خودکار روی همه کارت‌ها اعمال شود
- **درون‌ریزی/برون‌بری** ماژول‌ها برای پشتیبان‌گیری یا اشتراک‌گذاری
- **نوشتن پیشنهادهای موجودیت** در ویرایشگر ماژول، زیر **اختیاری: پیشنهادهای موجودیت**، تا ماژول شما در انتخابگر کارت Home Assistant پیشنهاد شود. هم قواعد و هم پیشنهادهای محاسبه‌شده همزمان با نوشتن بررسی می‌شوند، خطا در آنجا از ذخیره کردن جلوگیری می‌کند، و پیش‌نمایش کارت‌های پیشنهادی را برای هر موجودیتی که انتخاب کنید نشان می‌دهد

#### تب Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

این تب [همه ماژول‌های موجود از جامعه کاربران](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) را نمایش می‌دهد و امکانات زیر را در اختیار شما می‌گذارد:

- **مرور** همه ماژول‌های ساخته‌شده توسط جامعه کاربران
- **جستجو** و فیلتر کردن ماژول‌ها بر اساس نام، سازگاری یا کلمات کلیدی
- **نصب** ماژول‌ها با یک کلیک
- **به‌روزرسانی** ماژول‌های نصب‌شده هنگامی که نسخه‌های جدید در دسترس‌اند

> [!TIP]
> در ویرایشگر، می‌توانید ماژول‌های پشتیبانی‌نشده را فعال کنید تا ماژول‌هایی را آزمایش کنید که هنوز به‌عنوان سازگار با یک نوع کارت خاص علامت‌گذاری نشده‌اند.

<br>

### نحوه استفاده از ماژول‌ها

#### ساخت یک ماژول جدید

<details>

<summary>برای باز شدن کلیک کنید</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. به ویرایشگر هر کارتی بروید و بخش **Modules** را باز کنید.
2. روی **Create new module** کلیک کنید.
3. اطلاعات ماژول را پر کنید.
4. کد قالب CSS و/یا JavaScript خود را در ویرایشگر **Code** بنویسید.
5. (اختیاری) یک رابط پیکربندی سفارشی در بخش **Editor** بسازید (مانند انتخابگر رنگ در تصویر بالا، مستندات کامل [اینجا](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) در دسترس است).
6. (اختیاری) **پیشنهادهای موجودیت** خودتان را بنویسید تا ماژول شما در انتخابگر کارت Home Assistant پیشنهاد شود. این پنل آنچه را می‌نویسید همزمان با تایپ بررسی می‌کند، و پیش‌نمایش آن خودِ کارت‌های پیشنهادی را برای موجودیت دلخواه شما نشان می‌دهد.
7. روی **Save** کلیک کنید.

اکنون ماژول شما آماده استفاده در هر یک از کارت‌هایتان است!

<br>

</details>

#### اعمال یک ماژول روی یک کارت

<details>

<summary>برای باز شدن کلیک کنید</summary>

<br>

- **از طریق ویرایشگر:**

  - به ویرایشگر کارتی که می‌خواهید ماژول را روی آن اعمال کنید بروید.
  - بخش **Modules** را باز کنید.
  - روی ماژولی که می‌خواهید از فهرست اعمال کنید کلیک کنید.
  - در بخش "Apply to"، روی "This card" کلیک کنید. اکنون ماژول فعال است. می‌توانید چندین ماژول را روی یک کارت اعمال کنید.

- **از طریق YAML:**

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

#### اعمال یک ماژول به‌صورت سراسری

<details>

<summary>برای باز شدن کلیک کنید</summary>

<br>

می‌توانید یک ماژول را طوری تنظیم کنید که به‌صورت خودکار روی همه Bubble Card‌ها اعمال شود:

**این گزینه برای ماژول‌هایی که ویرایشگر دارند در دسترس نیست، زیرا آن‌ها به یک پیکربندی خاص برای کارکردن نیاز دارند.**

- **از طریق ویرایشگر:**

  - در ویرایشگر ماژول، ماژول خود را در تب **My Modules** پیدا کنید.
  - دکمه **All cards** را کنار نام ماژول تغییر وضعیت دهید.
  - از این پس ماژول به‌صورت خودکار روی همه کارت‌ها اعمال می‌شود.
 
- **از طریق YAML:**

  در پیکربندی YAML ماژول خود (در `bubble-modules.yaml`)، فقط `is_global: true` را اضافه کنید.

<br>

</details>

#### حذف یک کارت واحد از یک ماژول سراسری

<details>

<summary>برای باز شدن کلیک کنید</summary>

<br>

اگر یک ماژول سراسری دارید اما می‌خواهید آن را از یک کارت خاص حذف کنید:

- **از طریق ویرایشگر:**
  
  - در بخش **Modules** کارت، ماژول‌های سراسری را فهرست‌شده می‌بینید.
  - روی یک ماژول سراسری کلیک کنید، "This card" را غیرفعال کنید تا از این کارت خاص حذف شود.

- **از طریق YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### اشتراک‌گذاری ماژول خود در Module Store

<details>

<summary>برای باز شدن کلیک کنید</summary>

<br>

برای اشتراک‌گذاری ماژول خود در Module Store، در ویرایشگر ماژول، در پایین بخش "Export Module"، روی "Copy for GitHub" کلیک کنید و محتوا را در یک بحث جدید در دسته [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) جای‌گذاری کنید. **توضیحات را ویرایش کنید** (در صورت نیاز)، **مثال را** (برای کاربران YAML)، و به‌خاطر داشته باشید که **حتماً حداقل یک تصویر** برای Module Store اضافه کنید.

**ماژول شما بلافاصله بعد از این کار در دسترس قرار می‌گیرد** (بعد از یک به‌روزرسانی Store)، پس دوباره بررسی کنید که همه چیز به‌درستی نوشته شده و ماژول طبق انتظار کار می‌کند. البته می‌توانید بعد از اشتراک‌گذاری هم ماژول را ویرایش/به‌روزرسانی کنید.

<br>

</details>

#### مدیریت نسخه

<details>

<summary>برای باز شدن کلیک کنید</summary>

<br>

Module Store به‌صورت خودکار به‌روزرسانی‌های ماژول‌های نصب‌شده را بررسی می‌کند. زمانی که به‌روزرسانی‌هایی در دسترس باشد:

1. یک نشانگر به‌روزرسانی در تب **Module Store** خواهید دید.
2. روی **Update** در ماژول‌هایی که به‌روزرسانی دارند کلیک کنید.
3. به‌روزرسانی را در Module Store تأیید کنید.

<br>

</details>

#### تعریف انواع کارت پشتیبانی‌شده

<details>

<summary>برای باز شدن کلیک کنید</summary>

<br>

ممکن است برخی ماژول‌ها با همه انواع کارت سازگار نباشند. می‌توانید مشخص کنید که یک ماژول از کدام کارت‌ها پشتیبانی می‌کند.  
اگر می‌خواهید یک ماژول با **همه کارت‌ها** سازگار باشد، کافیست فیلد `supported` را حذف کنید (یا از گزینه **All cards** در ویرایشگر استفاده کنید).

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

### مثال‌ها

<details>
<summary>ماژول استایل‌دهی پایه</summary>

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
<summary>ماژول با پیکربندی سفارشی</summary>

<br>

این ماژول [اینجا](https://github.com/Clooos/Bubble-Card/discussions/1231) در دسترس است.

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

مثال‌های بیشتر را می‌توانید در Module Store، یا [اینجا](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) پیدا کنید.

<br>

---

<br>

## بومی‌سازی

Bubble Card به زبان شما صحبت می‌کند. ویرایشگر آن به 64 زبانی که Home Assistant پشتیبانی می‌کند ترجمه شده است، و هر جا Home Assistant از پیش واژه‌ای برای چیزی داشته باشد، از عبارت خود آن استفاده می‌شود، تا در هر دو رابط واژه‌های یکسانی بخوانید.

در پایین ویرایشگر، کنار شماره نسخه، یک کلید **خودکار** از زبان Home Assistant شما پیروی می‌کند. آن را خاموش کنید تا کل ویرایشگر به انگلیسی برگردد، که برای دنبال کردن یک آموزش یا گزارش یک مشکل مفید است. انتخاب شما در مرورگرتان به خاطر سپرده می‌شود.

این مستندات هم ترجمه شده است، [به 62 زبان](languages.md). این صفحه‌ها برای همه باز هستند، بنابراین عبارتی که با Home Assistant خودتان همخوانی ندارد در چند کلیک قابل اصلاح است. نسخه انگلیسی مرجع خود محتوا باقی می‌ماند.

<br>

---

<br>

## راهنما

اگر چیزی طبق انتظار کار نمی‌کند، در باز کردن یک issue تردید نکنید. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

سؤال یا نظری درباره Bubble Card دارید؟ می‌خواهید داشبورد یا کشفیات خود را به اشتراک بگذارید؟ می‌توانید به فروم Home Assistant، به subreddit مربوط به Bubble Card یا به بخش GitHub Discussions بروید.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## مشارکت

مشارکت‌ها با آغوش باز پذیرفته می‌شوند! چه رفع اشکال باشد، چه ویژگی‌های جدید، ترجمه‌ها یا بهبود مستندات، در باز کردن یک pull request تردید نکنید.

پیش از شروع، لطفاً [راهنمای توسعه‌دهنده](DEVELOPERS.md) را بخوانید که نحوه راه‌اندازی محیط محلی، ساخت پروژه و آزمایش تغییرات شما را توضیح می‌دهد.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## حمایت مالی

من بیشتر اوقات فراغتم را صرف می‌کنم تا این پروژه را در بهترین حالت ممکن نگه دارم. پس اگر قدر تلاش من را می‌دانید، هر کمک مالی راه خوبی برای نشان دادن حمایت شما خواهد بود 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

از همه شما بابت حمایتتان سپاسگزارم، همه شما بزرگ‌ترین انگیزه من هستید!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>

</div>
