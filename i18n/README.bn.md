<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> এই পৃষ্ঠাটি একটি স্বয়ংক্রিয় অনুবাদ। সন্দেহ হলে [মূল ইংরেজি ডকুমেন্টেশন](../README.md)-ই প্রামাণ্য। কোনো বাক্য কি ঠিক শোনাচ্ছে না? যেকোনো সাহায্য স্বাগত, আর [এই পৃষ্ঠাটি ঠিক করতে](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.bn.md) মাত্র এক মিনিট লাগে: ফর্ক আর পুল রিকোয়েস্টের কাজটা GitHub নিজেই সামলে নেয়। আগাম ধন্যবাদ! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[অন্য ভাষায় পড়ুন](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card হলো Home Assistant-এর জন্য একটি মিনিমালিস্ট ও কাস্টমাইজযোগ্য কার্ড কালেকশন, যাতে আছে আধুনিক পপ-আপ এবং ১০০টিরও বেশি কমিউনিটি-নির্মিত মডিউলসহ একটি ইন্টিগ্রেটেড Module Store।

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## সূচিপত্র

**[`ইনস্টলেশন`](#ইনস্টলেশন)**  **[`কনফিগারেশন`](#কনফিগারেশন)**  **[`এনটিটি সাজেশন`](#এনটিটি-সাজেশন)**  **[`পপ-আপ`](#পপ-আপ)**  **[`অনুভূমিক বাটন স্ট্যাক`](#অনুভূমিক-বাটন-স্ট্যাক)**  **[`বাটন`](#বাটন)**  **[`মিডিয়া প্লেয়ার`](#মিডিয়া-প্লেয়ার)**  **[`কভার`](#কভার)**  **[`সিলেক্ট`](#সিলেক্ট)**  **[`ক্লাইমেট`](#ক্লাইমেট)**  **[`ক্যালেন্ডার`](#ক্যালেন্ডার)**  **[`বিভাজক`](#বিভাজক)**  **[`খালি কলাম`](#খালি-কলাম)**  **[`শুধু সাব-বাটন`](#শুধু-সাব-বাটন)**  **[`সাব-বাটন`](#সাব-বাটন)**  **[`কার্ড লেআউট`](#কার্ড-লেআউট)**  **[`শর্ত`](#শর্ত)**  **[`অ্যাকশন`](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন)**  **[`স্টাইলিং`](#স্টাইলিং)**  **[`টেমপ্লেট`](#টেমপ্লেট)**  **[`মডিউল`](#মডিউল)**  **[`লোকালাইজেশন`](#লোকালাইজেশন)**  **[`সাহায্য`](#সাহায্য)**  **[`অবদান রাখা`](#অবদান-রাখা)**  **[`অনুদান`](#অনুদান)**

<br>

## ইনস্টলেশন

**Home Assistant-এর সর্বনিম্ন সাপোর্টেড সংস্করণ:** 2023.9.0

<details>

<summary>HACS ছাড়া</summary>

<br>

1. এই ফাইলটি ডাউনলোড করুন: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. এই ফাইলটি আপনার `<config>/www` ফোল্ডারে যোগ করুন। এডিটর আপনার ভাষায় পেতে [dist ফোল্ডার](https://github.com/Clooos/Bubble-Card/tree/main/dist) থেকে `bubble-card-<lang>.json` ও ডাউনলোড করুন, যেমন `bubble-card-fr.json`, এবং সেটি `bubble-card.js` এর পাশে রাখুন (সেটি ছাড়া এডিটর ইংরেজিতেই থেকে যায়)
3. আপনার ড্যাশবোর্ডে উপরের ডান কোণের আইকনে ক্লিক করুন, তারপর `ড্যাশবোর্ড এডিট করুন`-এ ক্লিক করুন
4. আবার সেই আইকনে ক্লিক করুন, তারপর `রিসোর্স ম্যানেজ করুন`-এ ক্লিক করুন
5. `রিসোর্স যোগ করুন`-এ ক্লিক করুন
6. এটি কপি করে পেস্ট করুন: `/local/bubble-card.js?v=1`
7. `JavaScript Module`-এ ক্লিক করুন, তারপর `তৈরি করুন`-এ
8. ফিরে গিয়ে আপনার পেজ রিফ্রেশ করুন
9. এবার নিচের ডান কোণে `কার্ড যোগ করুন`-এ ক্লিক করে `Bubble Card` খুঁজতে পারেন
10. ফাইলটির যেকোনো আপডেটের পর আপনাকে `/local/bubble-card.js?v=1` এডিট করে সংস্করণটি যেকোনো বড় সংখ্যায় বদলাতে হবে

কাজ না করলে, শুধু আপনার ব্রাউজারের ক্যাশে পরিষ্কার করে দেখুন।

</details>

<details>

<summary>HACS দিয়ে (প্রস্তাবিত)</summary>

<br>

এই পদ্ধতিতে আপনি Home Assistant Community Store থেকে সরাসরি আপডেট পাবেন

1. HACS এখনও ইনস্টল করা না থাকলে, [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) এর নির্দেশনা অনুসরণ করে এটি ডাউনলোড করুন
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) এর নির্দেশনা অনুসরণ করে HACS-এর প্রাথমিক কনফিগারেশন সম্পন্ন করুন
3. আপনার সাইডবারে "HACS"-এ যান
4. "Bubble Card" খুঁজুন, অথবা নিচের নীল বাটনে ক্লিক করুন
5. "ডাউনলোড"-এ ক্লিক করুন
6. আপনার ড্যাশবোর্ডে ফিরে গিয়ে উপরের ডান কোণের আইকনে ক্লিক করুন, তারপর `ড্যাশবোর্ড এডিট করুন`-এ ক্লিক করুন
7. এবার নিচের ডান কোণে `কার্ড যোগ করুন`-এ ক্লিক করে `Bubble Card` খুঁজতে পারেন

কাজ না করলে, আপনার ব্রাউজার/অ্যাপের ক্যাশে পরিষ্কার করে দেখুন (প্রয়োজনে আপনার সব ডিভাইসে)।

#### ভিডিও

ধাপে ধাপে ভিডিওর জন্য আপনি আমার YouTube চ্যানেলও দেখতে পারেন।

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Home Assistant Community Store (HACS)-এ Bubble Card খুলুন।](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## কনফিগারেশন

সব অপশন Home Assistant এডিটরে কনফিগার করা যায়। তবে নিচের ডকুমেন্টেশনে আপনি আরও বিস্তারিত তথ্য এবং YAML পাবেন।

<details>

<summary><b>প্রধান অপশন (YAML + বর্ণনা)</b></summary>

| নাম | ধরন | প্রয়োজনীয়তা | সাপোর্টেড অপশন | বর্ণনা |
| --- | --- | --- | --- | --- |
| `type` | string | **আবশ্যক** | `custom:bubble-card` | কার্ডের ধরন |
| `card_type` | string | **আবশ্যক** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` বা `sub-buttons` | Bubble Card-এর ধরন, নিচে দেখুন |
| `styles` | object list | ঐচ্ছিক | যেকোনো CSS স্টাইলশিট | আপনার Bubble Card-এর CSS কাস্টমাইজ করতে দেয়, দেখুন [স্টাইলিং](#স্টাইলিং) |

</details>

<details>

<summary><b>গ্লোবাল CSS ভেরিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভেরিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | সব সাপোর্টেড এলিমেন্টের বর্ডার রেডিয়াস |
| `--bubble-main-background-color` | `color` | সব সাপোর্টেড এলিমেন্টের প্রধান ব্যাকগ্রাউন্ডের রং |
| `--bubble-secondary-background-color` | `color` | সব সাপোর্টেড এলিমেন্টের সেকেন্ডারি ব্যাকগ্রাউন্ডের রং |
| `--bubble-accent-color` | `color` | সব সাপোর্টেড এলিমেন্টের অ্যাকসেন্ট রং |
| `--bubble-icon-border-radius` | `px` | সব সাপোর্টেড এলিমেন্টের আইকনের বর্ডার রেডিয়াস |
| `--bubble-icon-background-color` | `color` | সব সাপোর্টেড এলিমেন্টের আইকনের ব্যাকগ্রাউন্ডের রং |
| `--bubble-sub-button-border-radius` | `px` | সব সাব-বাটনের বর্ডার রেডিয়াস |
| `--bubble-sub-button-background-color` | `color` | সব সাব-বাটনের ব্যাকগ্রাউন্ডের রং |
| `--bubble-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | সব সাপোর্টেড এলিমেন্টের বক্স শ্যাডো |
| `--bubble-border` | দেখুন [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | সব সাপোর্টেড কার্ডের বর্ডার |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card ও এর ক্ষমতা সম্পর্কে জানতে এই [ভিডিওটি](https://www.youtube.com/watch?v=0hSQOlBxKKI) দেখুন।** আমার YouTube চ্যানেলটি বেশ নতুন এবং এতে মূলত Home Assistant ও Bubble Card নিয়ে টিউটোরিয়াল থাকে। আমার চ্যানেলের ভিজিবিলিটি বাড়াতে সাহায্য করতে সাবস্ক্রাইব করতে দ্বিধা করবেন না। আগাম ধন্যবাদ!

<br>

---

<br>

## এনটিটি সাজেশন

Home Assistant 2026.6 থেকে কার্ড পিকারে কোনো এনটিটি বাছাই করলে কয়েকটি তৈরি করা কার্ড দেখানো হয়, আর Bubble Card ওই তালিকায় নিজের রেসিপি যোগ করে। একটি লাইট বাছুন, পাবেন উজ্জ্বলতার স্লাইডারসহ একটি কার্ড, আর আপনার লাইট সমর্থন করলে কালার টেম্পারেচার, রঙ ও স্যাচুরেশনের আলাদা সংস্করণও। কভার বাছলে তার পজিশন স্লাইডার, মিডিয়া প্লেয়ার বাছলে তার সোর্স তালিকাসহ একটি সংস্করণও, আর ভ্যাকুয়াম বাছলে তার স্টার্ট, পজ ও ডক বোতাম। প্রতিটি সাজেশন একটি সাধারণ Bubble Card কনফিগারেশন, লাইভ প্রিভিউ হিসেবে দেখানো হয়, তাই সবচেয়ে কাছেরটি নিয়ে আগের মতোই সম্পাদনা চালিয়ে যেতে পারেন।

আপনাকে কী দেখানো হবে তা নির্ভর করে আপনার এনটিটি আসলে কী করতে পারে তার উপর: উজ্জ্বলতার চ্যানেল নেই এমন লাইট স্লাইডারের বদলে টগল পায়, টিল্ট করতে না পারা কভার কোনো টিল্ট সংস্করণ পায় না, আর ক্লাইমেট এনটিটি তার প্রিসেট মোড তখনই পায় যখন সেগুলো থাকে। প্রযোজ্য হলে চিরাচরিত এন্ট্রিগুলো Bubble Card সাজেশনের নিচে আসে: ওই ধরনের এনটিটির জন্য নির্দিষ্ট কার্ড, একটি সাধারণ বাটন এবং একটি স্লাইডার।

> [!TIP]
> মডিউলগুলো ওই তালিকায় নিজেদের সাজেশনও যোগ করতে পারে, দেখুন [মডিউল](#মডিউল)।

<br>

---

<br>

## পপ-আপ

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

এই কার্ড দিয়ে আপনি যেকোনো কনটেন্টসহ একটি পপ-আপ তৈরি করতে পারেন। প্রতিটি পপ-আপ **ডিফল্টভাবে লুকানো** থাকে এবং এর লিংক লক্ষ্য করে (যেমন `'#pop-up-name'`), `navigate` [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) সাপোর্ট করে এমন যেকোনো কার্ড দিয়ে, অথবা অন্তর্ভুক্ত [অনুভূমিক বাটন স্ট্যাক](#অনুভূমিক-বাটন-স্ট্যাক) দিয়ে খোলা যায়।

> [!TIP]
> ### পপ-আপ ট্রিগার 
> এই ফিচার দিয়ে আপনি যেকোনো এনটিটির অবস্থার ভিত্তিতে একটি পপ-আপ খুলতে পারেন, উদাহরণস্বরূপ, আপনার বাড়ির সামনে কেউ থাকলে ক্যামেরাসহ একটি "সিকিউরিটি" পপ-আপ খুলতে পারেন। আপনি একটি টগল হেল্পার (input_boolean) তৈরি করে একটি অটোমেশনে এর খোলা/বন্ধ হওয়া ট্রিগারও করতে পারেন।
> <details>
> <summary>একটি <code>binary_sensor</code> <code>on</code> হলে পপ-আপ খোলা</summary>
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
> ### পপ-আপ বন্ধ করার বিভিন্ন উপায় 
> পপ-আপ বন্ধ করার অনেক উপায় আছে। যেমন, আপনি পপ-আপের হেডার থেকে নিচের দিকে সোয়াইপ করতে পারেন, পপ-আপের ভিতরে নিচের দিকে লম্বা সোয়াইপ করে, ডেস্কটপে Escape চেপে, URL থেকে হ্যাশ সরিয়ে, অথবা কেবল বন্ধ করার বাটন চেপে বন্ধ করতে পারেন।
>


### পপ-আপ অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম | ধরন | প্রয়োজনীয়তা | সাপোর্টেড অপশন | বর্ণনা |
| --- | --- | --- | --- | --- |
| `hash` | string | **আবশ্যক** | ' ' সহ যেকোনো অনন্য হ্যাশ (যেমন `'#kitchen'`) | এভাবেই আপনি আপনার পপ-আপ খুলবেন |
| `popup_style` | string | ঐচ্ছিক | `bubble` (ডিফল্ট) বা `classic` | পপ-আপের ভিজ্যুয়াল স্টাইল নির্ধারণ করে |
| `popup_mode` | string | ঐচ্ছিক | `default` (ডিফল্ট), `fit-content`, `centered` বা `adaptive-dialog` | পপ-আপের লেআউট মোড নির্ধারণ করে |
| `with_bottom_offset` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | শুধু `popup_mode: fit-content` বা `adaptive-dialog`-এর সাথে ব্যবহৃত। মোবাইলে নিচে একটি অফসেট প্রয়োগ করে, আপনার ড্যাশবোর্ডে ফুটার কার্ড থাকলে দরকারি। |
| `full_width_on_mobile` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | শুধু `popup_mode: centered`-এর সাথে ব্যবহৃত। মোবাইলে পপ-আপকে স্ক্রিনের পুরো প্রস্থে প্রসারিত করে, ছোট ডিসপ্লেতে দরকারি। |
| `performance_mode` | string | ঐচ্ছিক | `default` (ডিফল্ট) বা `performance` | পপ-আপ খোলার অ্যানিমেশন অপটিমাইজ করে। `performance` কনটেন্ট রেন্ডারিং ও ব্যাকগ্রাউন্ড ব্লার সামান্য দেরিতে করে, সেট করা থাকলে ব্যাকড্রপ ব্লারও বন্ধ করে। |
| `auto_close` | string | ঐচ্ছিক | মিলিসেকেন্ডে একটি টাইমআউট (যেমন 10 সেকেন্ডের জন্য `10000`) | টাইমআউটের পর পপ-আপ স্বয়ংক্রিয়ভাবে বন্ধ করে |
| `close_on_click` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | যেকোনো ইন্টারঅ্যাকশনের পর পপ-আপ স্বয়ংক্রিয়ভাবে বন্ধ করে |
| `close_by_clicking_outside` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | পপ-আপের বাইরে ক্লিক করে পপ-আপ বন্ধ করুন |
| `width_desktop` | string | ঐচ্ছিক | যেকোনো CSS মান | ডেস্কটপে প্রস্থ (মোবাইলে ডিফল্টভাবে `100%`) |
| `margin` | string | ঐচ্ছিক | যেকোনো CSS মান | এটি **শুধু** তখনই ব্যবহার করুন যখন মোবাইলে আপনার পপ-আপ ঠিকমতো কেন্দ্রে থাকে না (যেমন `13px`) |
| `margin_top_mobile` | string | ঐচ্ছিক | যেকোনো CSS মান | মোবাইলে উপরের মার্জিন (যেমন আপনার হেডার লুকানো থাকলে `-56px`) |
| `margin_top_desktop` | string | ঐচ্ছিক | যেকোনো CSS মান | ডেস্কটপে উপরের মার্জিন (যেমন অর্ধেক আকারের পপ-আপের জন্য `50vh` অথবা `400px` স্থির উচ্চতার জন্য `calc(100vh - 400px)`) |
| `bg_color` | string | ঐচ্ছিক | যেকোনো hex, rgb বা rgba মান | আপনার পপ-আপের ব্যাকগ্রাউন্ডের রং (যেমন সাদা ব্যাকগ্রাউন্ডের জন্য `#ffffff`) |
| `bg_opacity` | string | ঐচ্ছিক | `0` থেকে `100` পর্যন্ত যেকোনো মান | আপনার পপ-আপের ব্যাকগ্রাউন্ড অস্বচ্ছতা (যেমন কোনো স্বচ্ছতা না চাইলে `100`) |
| `bg_blur` | string | ঐচ্ছিক | `0` থেকে `100` পর্যন্ত যেকোনো মান | আপনার পপ-আপের ব্যাকগ্রাউন্ড ব্লার ইফেক্ট, **এটি শুধু তখনই কাজ করে যখন `bg_opacity` `100`-তে সেট করা নেই** (যেমন ব্লার না চাইলে `0`)|
| `shadow_opacity` | string | ঐচ্ছিক | `0` থেকে `100` পর্যন্ত যেকোনো মান | আপনার পপ-আপের ছায়ার অস্বচ্ছতা (যেমন লুকাতে `0`) |
| `hide_backdrop` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | সব পপ-আপে ব্যাকড্রপ বন্ধ করতে আপনার মূল ড্যাশবোর্ডের প্রথম পপ-আপে এটি true করুন। |
| `background_update` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | ব্যাকগ্রাউন্ডে পপ-আপের কনটেন্ট আপডেট করুন (প্রস্তাবিত নয়) |
| `trigger` | object বা list | ঐচ্ছিক | দেখুন [শর্ত](#শর্ত) | শর্ত পূরণ হলে এই পপ-আপ খুলুন |
| `trigger_entity` | string | ঐচ্ছিক | যেকোনো এনটিটি | যেকোনো এনটিটির অবস্থার ভিত্তিতে এই পপ-আপ খুলুন, `trigger`-এর সহজ রূপ |
| `trigger_state` | string | ঐচ্ছিক (`trigger_entity` নির্ধারিত থাকলে **আবশ্যক**) | যেকোনো এনটিটি অবস্থা | যে এনটিটি অবস্থায় পপ-আপ খুলবে |
| `trigger_close` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | শর্ত আর পূরণ না হলে পপ-আপ বন্ধ করুন। পুরোনো `trigger_entity` ও `trigger_state` জুটি ব্যবহার করলে ডিফল্ট বদলে `false` হয় |
| `open_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | পপ-আপ খোলার সময় একটি অ্যাকশন ট্রিগার করুন |
| `close_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | পপ-আপ বন্ধ হওয়ার সময় একটি অ্যাকশন ট্রিগার করুন |
| `show_header` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | পপ-আপের হেডার পুরোপুরি দেখান/লুকান |
| `show_previous_button` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | বন্ধ করার বাটনের পাশে একটি পূর্ববর্তী বাটন দেখান এবং সম্ভব হলে আগের পপ-আপে ফিরে যান |
| `show_close_button` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | হেডারের বাকি অংশ দৃশ্যমান রেখে বন্ধ করার বাটন দেখান বা লুকান |
| `buttons_position` | string | ঐচ্ছিক | `right` (ডিফল্ট) বা `left` | হেডারে বন্ধ ও পূর্ববর্তী বাটনের অবস্থান |
| `cards` | list | ঐচ্ছিক | যেকোনো Bubble Card, Home Assistant কার্ড বা কাস্টম কার্ড | আপনার পপ-আপের কনটেন্ট নির্ধারণ করুন। নিচের পপ-আপ উদাহরণটি দেখুন। |
| পপ-আপের হেডারের জন্য আপনি [বাটনের সব সেটিংসও](#বাটন) ব্যবহার করতে পারেন। | | ঐচ্ছিক | | নির্ধারিত না থাকলে কোনো হেডার দেখানো হবে না |

</details>

<details>

<summary><b>CSS ভেরিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভেরিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | পপ-আপের বর্ডার রেডিয়াস |
| `--bubble-pop-up-main-background-color` | `color` | পপ-আপের সাপোর্টেড এলিমেন্টের প্রধান ব্যাকগ্রাউন্ডের রং |
| `--bubble-pop-up-background-color` | `color` | পপ-আপের ব্যাকগ্রাউন্ডের রং |
| `--bubble-backdrop-background-color` | `color` | ব্যাকড্রপের ব্যাকগ্রাউন্ডের রং |
| পপ-আপের হেডারের জন্য আপনি [বাটনের সব CSS ভেরিয়েবলও](#বাটন-অপশন) ব্যবহার করতে পারেন। | | |

</details>


### স্বতন্ত্র পপ-আপ ফরম্যাট (v3.2.0+)

v3.2.0 থেকে, পপ-আপ একটি নতুন স্বতন্ত্র ফরম্যাট ব্যবহার করে যেখানে কনটেন্ট কার্ডগুলো `cards` অপশন দিয়ে সরাসরি পপ-আপের ভিতরে নির্ধারণ করা হয়। এতে আরও ভালো পারফরম্যান্স এবং সেকশনভিত্তিক নতুন ড্র্যাগ-অ্যান্ড-ড্রপ এডিটিং অভিজ্ঞতা পাওয়া যায়।


#### উদাহরণ

<details>

<summary>একটি পপ-আপ (স্বতন্ত্র ফরম্যাট)</summary>

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

<summary>পপ-আপ খোলার একটি বাটন</summary>

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

## অনুভূমিক বাটন স্ট্যাক

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

এই কার্ডটি পপ-আপ কার্ডের একটি ভালো সঙ্গী, এর মাধ্যমে আপনি সংশ্লিষ্ট পপ-আপগুলো খুলতে পারেন। এছাড়া আপনার ড্যাশবোর্ডের যেকোনো পৃষ্ঠাও এটি দিয়ে খোলা যায়। তার উপর, আপনি আপনার মোশন/অকুপেন্সি সেন্সর যোগ করতে পারেন, যাতে আপনি যে ঘরে ঢুকেছেন সেই অনুযায়ী বাটনগুলোর ক্রম বদলে যায়। এই কার্ডটি স্ক্রল করা যায়, সবসময় দৃশ্যমান থাকে এবং একটি ফুটার হিসেবে কাজ করে।

> [!IMPORTANT]  
> এই কার্ডটিকে আপনার ভিউয়ের সর্বশেষ কার্ড হতে হবে (সব কার্ড ও পপ-আপের পরে)। এটি কোনো স্ট্যাকের ভিতরে থাকতে পারবে না।

### অনুভূমিক বাটন স্ট্যাক অপশন

<details>

<summary><b>অপশন (YAML + বিবরণ)</b></summary>

| নাম | ধরন | আবশ্যকতা | সাপোর্টেড অপশন | বিবরণ |
| --- | --- | --- | --- | --- |
| `1_link` | string | **আবশ্যক** | ' ' সহ পপ-আপ হ্যাশ (যেমন `'#kitchen'`) বা যেকোনো লিংক | যে লিংকটি খোলা হবে |
| `1_name` | string | ঐচ্ছিক | যেকোনো টেক্সট | আপনার বাটনের একটি নাম |
| `1_icon` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার বাটনের একটি আইকন |
| `1_entity` | string | ঐচ্ছিক | যেকোনো লাইট বা লাইট গ্রুপ | সেই লাইটের রং ব্যাকগ্রাউন্ডে দেখায় |
| `1_pir_sensor` | string | ঐচ্ছিক | যেকোনো বাইনারি সেন্সর | `auto_order`-এর জন্য অন্তত একটি বা একাধিক পিআইআর সেন্সর, আসলে এটি যেকোনো ধরনের এনটিটির সাথেও কাজ করে, যেমন আপনি লাইট গ্রুপ যোগ করতে পারেন এবং সর্বশেষ পরিবর্তিত অবস্থার ভিত্তিতে ক্রম বদলে যাবে। |
| `auto_order` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | `_pir_sensor`-এর সর্বশেষ পরিবর্তনের সময় অনুযায়ী বাটনগুলোর ক্রম বদলায়, **আপনার কোডে কোনো `_pir_sensor` না থাকলে এটিকে `false` রাখতে হবে** |
| `margin` | string | ঐচ্ছিক | যেকোনো CSS মান | মোবাইলে আপনার `horizontal-buttons-stack` ঠিকমতো কেন্দ্রে না থাকলে **শুধু তখনই** এটি ব্যবহার করুন (যেমন `13px`) |
| `width_desktop` | string | ঐচ্ছিক | যেকোনো CSS মান | ডেস্কটপে প্রস্থ (মোবাইলে ডিফল্টভাবে `100%`) |
| `is_sidebar_hidden` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | ডেস্কটপে সাইডবার লুকানো থাকলে অনুভূমিক বাটন স্ট্যাকের অবস্থান ঠিক করে (শুধু যদি আপনি নিজে এটি লুকানোর জন্য কোনো পরিবর্তন করে থাকেন) |
| `rise_animation` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | পৃষ্ঠা লোড হওয়ার পর যে অ্যানিমেশন চালু হয় সেটি বন্ধ করতে এটিকে `false` করুন |
| `highlight_current_view` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | একটি মসৃণ অ্যানিমেশনসহ বর্তমান হ্যাশ / ভিউ হাইলাইট করে |
| `hide_gradient` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | গ্রেডিয়েন্ট লুকাতে এটিকে `false` করুন |

> [!IMPORTANT]  
> সংখ্যা দিয়ে শুরু হওয়া ভ্যারিয়েবলগুলো আপনার বাটন নির্ধারণ করে, আরও বাটন যোগ করতে শুধু এই সংখ্যাটি বদলান (নিচের উদাহরণ দেখুন)।

</details>

<details>

<summary><b>CSS ভ্যারিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভ্যারিয়েবল | প্রত্যাশিত মান | বিবরণ |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | অনুভূমিক বাটন স্ট্যাকের বাটনগুলোর বর্ডার রেডিয়াস |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | অনুভূমিক বাটন স্ট্যাকের বাটনগুলোর ব্যাকগ্রাউন্ডের রং |

</details>


#### উদাহরণ

<details>

<summary>অকুপেন্সি সেন্সরের ভিত্তিতে নিজেকে নতুন করে সাজিয়ে নেওয়া একটি অনুভূমিক বাটন স্ট্যাক</summary>

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

## বাটন

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

এই কার্ডটি অত্যন্ত বহুমুখী। এটি **সুইচ**, **স্লাইডার**, **অবস্থা** বা **নাম/টেক্সট** বাটন হিসেবে ব্যবহার করা যায়।

> [!TIP]
> ### বাটনের ধরনগুলোর মধ্যে পার্থক্য কী?
>
> - **সুইচ বাটন:** এটিই ডিফল্ট বাটনের ধরন। ডিফল্টভাবে এটি একটি এনটিটি টগল করে এবং এনটিটির অবস্থা বা লাইটের রঙের ভিত্তিতে এর ব্যাকগ্রাউন্ডের রং বদলায়। **কার্ডে ট্যাপ অ্যাকশন** সেকশনে আপনি এর অ্যাকশন পরিবর্তন করতে পারেন।
>
> - **স্লাইডার বাটন:** এই ধরনের বাটন দিয়ে আপনি সমন্বয়যোগ্য রেঞ্জের এনটিটি নিয়ন্ত্রণ করতে পারেন। লাইট ডিম করার জন্য এটি আদর্শ, আর এর ভরাটের রং লাইটের রঙের সাথে মানিয়ে যাবে। ব্যাটারি লেভেলের মতো মান দেখাতেও এটি ব্যবহার করতে পারেন।
>   স্লাইডারের জন্য সাপোর্টেড এনটিটি:
>   - লাইট (উজ্জ্বলতা)
>   - মিডিয়া প্লেয়ার (ভলিউম)
>   - কভার (অবস্থান)
>   - ফ্যান (শতাংশ)
>   - ক্লাইমেট (তাপমাত্রা)
>   - ইনপুট নম্বর ও নম্বর (মান)
>   - ব্যাটারি সেন্সর (শতাংশ, শুধু পড়ার জন্য)
>
>   **স্লাইডার সেটিংস**-এ এনটিটি ফিল্টার বন্ধ করে আপনি সাংখ্যিক অবস্থা আছে এমন যেকোনো এনটিটিও ব্যবহার করতে পারেন, তারপর `min` ও `max` মান নির্ধারণ করুন। এই অপশন শুধু পড়ার জন্য।
>
> - **অবস্থা বাটন:** কোনো সেন্সর বা যেকোনো এনটিটির তথ্য দেখানোর জন্য উপযুক্ত। চাপ দিলে এটি এনটিটির "আরও তথ্য" প্যানেল দেখাবে। এর ব্যাকগ্রাউন্ডের রং বদলায় না।
>
> - **নাম/টেক্সট বাটন:** একমাত্র বাটনের ধরন যার এনটিটি দরকার নেই। এর মাধ্যমে আপনি ছোট টেক্সট, নাম বা শিরোনাম দেখাতে পারেন। এতে অ্যাকশনও যোগ করতে পারেন। এর ব্যাকগ্রাউন্ডের রং বদলায় না।

### বাটন অপশন

<details>

<summary><b>অপশন (YAML + বিবরণ)</b></summary>

| নাম | ধরন | আবশ্যকতা | সাপোর্টেড অপশন | বিবরণ |
| --- | --- | --- | --- | --- |
| `entity` | string | **আবশ্যক** | যেকোনো এনটিটি | যে এনটিটি নিয়ন্ত্রণ করা হবে |
| `button_type` | string | ঐচ্ছিক | `switch` (ডিফল্ট), `slider`, `state` বা `name` | আপনার বাটনের আচরণ |
| `name` | string | ঐচ্ছিক | যেকোনো টেক্সট | আপনার বাটনের একটি নাম, নির্ধারিত না থাকলে এনটিটির নাম দেখানো হবে |
| `icon` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার বাটনের একটি আইকন, নির্ধারিত না থাকলে এনটিটির আইকন বা `entity-picture` দেখানো হবে |
| `force_icon` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | `entity-picture`-এর বদলে আইকনকে অগ্রাধিকার দেয় |
| `use_accent_color` | boolean | ঐচ্ছিক (`false` ডিফল্ট) | **শুধু লাইটের জন্য।** লাইটের রঙের বদলে থিমের অ্যাকসেন্ট রং ব্যবহার করে।                         |
| `show_state` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র অবস্থা দেখায় বা লুকায় |
| `show_name` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | নাম দেখায় বা লুকায় |
| `show_icon` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | আইকন দেখায় বা লুকায় |
| `show_last_changed` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ পরিবর্তনের সময় দেখায় |
| `show_last_updated` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ আপডেটের সময় দেখায় |
| `show_attribute` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র একটি অ্যাট্রিবিউট এর `name`-এর নিচে দেখায় |
| `attribute` | string | ঐচ্ছিক (`show_attribute` `true` হলে আবশ্যক) | আপনার `entity`-র একটি অ্যাট্রিবিউট | যে অ্যাট্রিবিউট দেখানো হবে (যেমন `brightness`) |
| `scrolling_effect` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | কনটেন্ট তার কনটেইনারের আকার ছাড়িয়ে গেলে টেক্সট স্ক্রল করতে দেয় |
| `button_action` | object | ঐচ্ছিক | `tap_action`, `double_tap_action` বা `hold_action`, নিচে দেখুন | বাটনে ক্লিকের ডিফল্ট অ্যাকশন পরিবর্তন করতে দেয়। |
| `tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ক্লিকের অ্যাকশনের ধরন নির্ধারণ করে, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে |
| `double_tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ডাবল ক্লিকের অ্যাকশনের ধরন নির্ধারণ করে, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে |
| `hold_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে হোল্ডের অ্যাকশনের ধরন নির্ধারণ করে, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউয়ে না থাকলে ডিফল্ট), `large` (সেকশন ভিউয়ে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |
| `sub_button` | object | ঐচ্ছিক | দেখুন [সাব-বাটন](#সাব-বাটন) | ডান দিকে স্থির কাস্টমাইজ করা বাটন যোগ করে |

</details>

<details>

<summary><b>CSS ভ্যারিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভ্যারিয়েবল | প্রত্যাশিত মান | বিবরণ |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | বাটনের সাপোর্টেড উপাদানগুলোর মূল ব্যাকগ্রাউন্ডের রং |
| `--bubble-button-border-radius` | `px` | বাটনের বর্ডার রেডিয়াস |
| `--bubble-button-icon-border-radius` | `px` | বাটনের আইকন কনটেইনারের বর্ডার রেডিয়াস |
| `--bubble-button-icon-background-color` | `color` | বাটনের আইকন কনটেইনারের ব্যাকগ্রাউন্ডের রং |
| `--bubble-light-white-color` | `color` | লাইট বাটন/স্লাইডারের ডিফল্ট সাদা রং প্রতিস্থাপন করে |
| `--bubble-light-color` | `color` | লাইট বাটন/স্লাইডারের রং প্রতিস্থাপন করে (RGB লাইটসহ) |
| `--bubble-button-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | বাটনের বক্স শ্যাডো |

</details>

এই অপশনগুলো শুধু তখনই উপলব্ধ যখন `button_type` `slider`-এ সেট করা থাকে।

<details>

<summary><b>স্লাইডার অপশন (YAML + বিবরণ)</b></summary>

| নাম                  | ধরন    | আবশ্যকতা                     | বিবরণ                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | ঐচ্ছিক                        | স্লাইডারের সর্বনিম্ন মান। কাস্টম স্লাইডারের জন্য।                                                    |
| `max_value`             | number  | ঐচ্ছিক                        | স্লাইডারের সর্বোচ্চ মান। কাস্টম স্লাইডারের জন্য।                                                    |
| `step`                  | number  | ঐচ্ছিক                        | স্লাইডারের স্টেপ মান।                                                                           |
| `tap_to_slide`          | boolean | ঐচ্ছিক (`false` ডিফল্ট)      | স্লাইডারের আগের আচরণ চালু করে, যেখানে হোল্ড করার বদলে ট্যাপ করে স্লাইডার সক্রিয় করতে হয়।        |
| `relative_slide`        | boolean | ঐচ্ছিক (`false` ডিফল্ট )     | স্পর্শের শুরুর বিন্দুর বদলে শুরুর মানের সাপেক্ষে মান আপডেট করে।                      |
| `read_only_slider`      | boolean | ঐচ্ছিক (`false` ডিফল্ট)      | স্লাইডারকে শুধু পড়ার জন্য করে। সেন্সরের মতো কিছু এনটিটির জন্য স্বয়ংক্রিয়ভাবে চালু থাকে।                        |
| `slider_live_update`    | boolean | ঐচ্ছিক (`false` ডিফল্ট)      | স্লাইড করার সময়েই এনটিটির অবস্থা আপডেট হয়। **সব এনটিটির জন্য এই ফিচার প্রস্তাবিত নয়।**        |
| `slider_fill_orientation` | string | ঐচ্ছিক | `left`, `right`, `top` বা `bottom` | স্লাইডারের ভরাটের দিক পরিবর্তন করে। নির্ধারিত না থাকলে বাঁ থেকে ডানে, [ডান থেকে বাঁয়ে লেখা ভাষায়](#লোকালাইজেশন) উল্টো |
| `slider_value_position` | string | ঐচ্ছিক | `right`, `left`, `center` বা `hidden` | মান প্রদর্শনের অবস্থান। নির্ধারিত না থাকলে ডান দিকে, আর [ডান থেকে বাঁয়ে লেখা ভাষায়](#লোকালাইজেশন) বাঁ দিকে |
| `invert_slider_value` | boolean | ঐচ্ছিক (`false` ডিফল্ট) | স্লাইডারের দিক উল্টায় (100% ভরাট মানে সর্বনিম্ন)। রঙের স্লাইডারের জন্য উপলব্ধ নয়। |
| `light_slider_type` | string | ঐচ্ছিক | `brightness` (ডিফল্ট), `hue`, `saturation`, `white_temp` | **শুধু লাইটের জন্য।** স্লাইডার মোড বেছে নিন |
| `cover_slider_type` | string | ঐচ্ছিক | `position` (ডিফল্ট), `tilt_position` | **শুধু কভারের জন্য।** স্লাইডার মোড বেছে নিন (অবস্থান বা টিল্ট) |
| `hue_force_saturation` | boolean | ঐচ্ছিক (`false` ডিফল্ট) | **শুধু লাইটের জন্য (হিউ মোড)।** হিউ পরিবর্তনের সময় স্যাচুরেশন জোর করে প্রয়োগ করে |
| `hue_force_saturation_value` | number | ঐচ্ছিক (`100` ডিফল্ট) | **শুধু লাইটের জন্য (হিউ মোড)।** জোর করে প্রয়োগ করা স্যাচুরেশন মান (0-100) |
| `use_accent_color` | boolean | ঐচ্ছিক (`false` ডিফল্ট) | **শুধু লাইটের জন্য (উজ্জ্বলতা মোড)।** লাইটের রঙের বদলে থিমের অ্যাকসেন্ট রং ব্যবহার করে |
| `allow_light_slider_to_0` | boolean | ঐচ্ছিক (`false` ডিফল্ট)    | **শুধু লাইটের জন্য।** স্লাইডারকে 0% পর্যন্ত যেতে দেয়, যা লাইট বন্ধ করে। `tap_to_slide`-এর সাথে উপলব্ধ নয়। |
| `light_transition`      | boolean | ঐচ্ছিক (`false` ডিফল্ট)      | **শুধু লাইটের জন্য।** সাপোর্টেড লাইটের জন্য মসৃণ উজ্জ্বলতা ট্রানজিশন চালু করে।                           |
| `light_transition_time` | number  | ঐচ্ছিক (`500` ডিফল্ট)        | **শুধু লাইটের জন্য।** ট্রানজিশন সময় মিলিসেকেন্ডে। `light_transition: true` প্রয়োজন।            |

</details>

#### উদাহরণ

<details>

<summary>একটি স্লাইডার বাটন যা একটি লাইটের উজ্জ্বলতা নিয়ন্ত্রণ করতে পারে</summary>

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

<summary>আরও অপশনসহ একটি বাটন</summary>

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

## মিডিয়া প্লেয়ার

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

এই কার্ড দিয়ে আপনি একটি মিডিয়া প্লেয়ার এনটিটি নিয়ন্ত্রণ করতে পারেন।

### মিডিয়া প্লেয়ার অপশন

<details>

<summary><b>অপশন (YAML + বিবরণ)</b></summary>

| নাম | ধরন | আবশ্যকতা | সাপোর্টেড অপশন | বিবরণ |
| --- | --- | --- | --- | --- |
| `entity` | string | **আবশ্যক** | যেকোনো মিডিয়া প্লেয়ার | যে মিডিয়া প্লেয়ার নিয়ন্ত্রণ করা হবে |
| `name` | string | ঐচ্ছিক | যেকোনো টেক্সট | আপনার মিডিয়া প্লেয়ারের একটি নাম, নির্ধারিত না থাকলে এনটিটির নাম দেখানো হবে |
| `icon` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার মিডিয়া প্লেয়ারের একটি আইকন, নির্ধারিত না থাকলে এনটিটির আইকন বা `entity-picture` দেখানো হবে |
| `force_icon` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | `entity-picture`-এর বদলে আইকনকে অগ্রাধিকার দেয় |
| `show_state` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র অবস্থা দেখায় বা লুকায় |
| `show_name` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | নাম দেখায় বা লুকায় |
| `show_icon` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | আইকন দেখায় বা লুকায় |
| `show_last_changed` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ পরিবর্তনের সময় দেখায় |
| `show_last_updated` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ আপডেটের সময় দেখায় |
| `show_attribute` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র একটি অ্যাট্রিবিউট এর `name`-এর নিচে দেখায় |
| `attribute` | string | ঐচ্ছিক (`show_attribute` `true` হলে আবশ্যক) | আপনার `entity`-র একটি অ্যাট্রিবিউট | যে অ্যাট্রিবিউট দেখানো হবে (যেমন `brightness`) |
| `scrolling_effect` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | কনটেন্ট তার কনটেইনারের আকার ছাড়িয়ে গেলে টেক্সট স্ক্রল করতে দেয় |
| `min_volume` | number | ঐচ্ছিক | যেকোনো সংখ্যা | ভলিউম স্লাইডারের সর্বনিম্ন মান। |
| `max_volume` | number | ঐচ্ছিক | যেকোনো সংখ্যা | ভলিউম স্লাইডারের সর্বোচ্চ মান। |
| `cover_background` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | ঝাপসা করা মিডিয়া কভারকে কার্ডের ব্যাকগ্রাউন্ড হিসেবে ব্যবহার করে। |
| `button_action` | object | ঐচ্ছিক | `tap_action`, `double_tap_action` বা `hold_action`, দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | বাটনে ক্লিকের ডিফল্ট অ্যাকশন পরিবর্তন করতে দেয়। |
| `tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ক্লিকের অ্যাকশনের ধরন নির্ধারণ করে, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `double_tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ডাবল ক্লিকের অ্যাকশনের ধরন নির্ধারণ করে, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `hold_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে হোল্ডের অ্যাকশনের ধরন নির্ধারণ করে, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `main_buttons_position` | string | ঐচ্ছিক | `default` বা `bottom` | কভার অ্যাকশন বাটনগুলো নিচে (স্থির) সরিয়ে নেয় |
| `main_buttons_full_width` | boolean | ঐচ্ছিক | `true` বা `false` | নিচের অ্যাকশন বাটনগুলোকে পুরো প্রস্থের করে (ডিফল্ট: অবস্থান `bottom` হলে `true`) |
| `main_buttons_alignment` | string | ঐচ্ছিক | `end` (ডিফল্ট), `center`, `start`, `space-between` | পুরো প্রস্থের না হলে নিচের অ্যাকশন বাটনগুলোর অ্যালাইনমেন্ট |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউয়ে না থাকলে ডিফল্ট), `large` (সেকশন ভিউয়ে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |
| `sub_button` | object | ঐচ্ছিক | দেখুন [সাব-বাটন](#সাব-বাটন) | ডান দিকে স্থির কাস্টমাইজ করা বাটন যোগ করে |
| `hide` | object | ঐচ্ছিক | নিচে দেখুন | কার্ড থেকে বাটন লুকায় |

#### লুকানোর অপশন

| নাম | ধরন | আবশ্যকতা | সাপোর্টেড অপশন | বিবরণ |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | প্লে/পজ বাটন লুকায় |
| `volume_button` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | ভলিউম বাটন লুকায় |
| `previous_button` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | পূর্ববর্তী বাটন লুকায় |
| `next_button` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | পরবর্তী বাটন লুকায় |
| `power_button` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | পাওয়ার বাটন লুকায় |

</details>

<details>

<summary><b>CSS ভ্যারিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভ্যারিয়েবল | প্রত্যাশিত মান | বিবরণ |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | মিডিয়া প্লেয়ারের মূল ব্যাকগ্রাউন্ডের রং |
| `--bubble-media-player-border-radius` | `px` | মিডিয়া প্লেয়ারের বর্ডার রেডিয়াস |
| `--bubble-media-player-buttons-border-radius` | `px` | মিডিয়া প্লেয়ারের বাটনগুলোর বর্ডার রেডিয়াস |
| `--bubble-media-player-slider-background-color` | `color` | ভলিউম স্লাইডারের ব্যাকগ্রাউন্ডের রং |
| `--bubble-media-player-icon-border-radius` | `px` | মিডিয়া প্লেয়ারের আইকন কনটেইনারের বর্ডার রেডিয়াস |
| `--bubble-media-player-icon-background-color` | `color` | মিডিয়া প্লেয়ারের আইকন কনটেইনারের ব্যাকগ্রাউন্ডের রং |
| `--bubble-media-player-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | মিডিয়া প্লেয়ারের বক্স শ্যাডো |

</details>


#### উদাহরণ

<details>

<summary>সব অপশনসহ একটি মিডিয়া প্লেয়ার</summary>

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

## কভার

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

এই কার্ড দিয়ে আপনি আপনার `cover` এনটিটিগুলো নিয়ন্ত্রণ করতে পারেন।

### কভার অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম | ধরন | প্রয়োজনীয়তা | সাপোর্টেড অপশন | বর্ণনা |
| --- | --- | --- | --- | --- |
| `entity` | string | **আবশ্যক** | যেকোনো কভার | নিয়ন্ত্রণের জন্য একটি কভার |
| `name` | string | ঐচ্ছিক | যেকোনো স্ট্রিং | আপনার কভারের জন্য একটি নাম, নির্ধারিত না থাকলে এনটিটির নাম দেখানো হবে |
| `force_icon` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | `entity-picture`-এর বদলে আইকনকে অগ্রাধিকার দিন |
| `show_state` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র অবস্থা দেখান বা লুকান |
| `show_name` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | নাম দেখান বা লুকান |
| `show_icon` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | আইকন দেখান বা লুকান |
| `show_last_changed` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ পরিবর্তনের সময় দেখান |
| `show_last_updated` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ আপডেটের সময় দেখান |
| `show_attribute` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র একটি অ্যাট্রিবিউট তার `name`-এর নিচে দেখান |
| `attribute` | string | ঐচ্ছিক (`show_attribute` `true` হলে আবশ্যক) | আপনার `entity`-র একটি অ্যাট্রিবিউট | যে অ্যাট্রিবিউট দেখানো হবে (যেমন `brightness`) |
| `scrolling_effect` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | কনটেন্ট কনটেইনারের আকার ছাড়িয়ে গেলে টেক্সট স্ক্রল করতে দিন |
| `icon_open` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার খোলা কভারের জন্য একটি আইকন, নির্ধারিত না থাকলে ডিফল্ট খোলা কভারের আইকন দেখানো হবে |
| `icon_close` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার বন্ধ কভারের জন্য একটি আইকন, নির্ধারিত না থাকলে ডিফল্ট বন্ধ কভারের আইকন দেখানো হবে |
| `icon_up` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার কভার খোলার বাটনের জন্য একটি আইকন, নির্ধারিত না থাকলে ডিফল্ট খোলা কভারের আইকন দেখানো হবে |
| `icon_down` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার কভার বন্ধ করার বাটনের জন্য একটি আইকন, নির্ধারিত না থাকলে ডিফল্ট বন্ধ কভারের আইকন দেখানো হবে |
| `open_service` | string | ঐচ্ছিক | যেকোনো সার্ভিস বা স্ক্রিপ্ট | আপনার কভার খোলার একটি সার্ভিস, ডিফল্টভাবে `cover.open_cover` |
| `stop_service` | string | ঐচ্ছিক | যেকোনো সার্ভিস বা স্ক্রিপ্ট | আপনার কভার থামানোর একটি সার্ভিস, ডিফল্টভাবে `cover.stop_cover` |
| `close_service` | string | ঐচ্ছিক | যেকোনো সার্ভিস বা স্ক্রিপ্ট | আপনার কভার বন্ধ করার একটি সার্ভিস, ডিফল্টভাবে `cover.close_cover` |
| `tilt_buttons` | string | ঐচ্ছিক | `top` (ডিফল্ট), `bottom`, `left`, `right`, `hidden` | টিল্ট নিয়ন্ত্রণ বাটনের অবস্থান (কভার টিল্ট সাপোর্ট করলে তবেই দেখানো হয়) |
| `open_tilt_service` | string | ঐচ্ছিক | যেকোনো সার্ভিস বা স্ক্রিপ্ট | টিল্ট খোলার একটি সার্ভিস, ডিফল্টভাবে `cover.open_cover_tilt` |

| `close_tilt_service` | string | ঐচ্ছিক | যেকোনো সার্ভিস বা স্ক্রিপ্ট | টিল্ট বন্ধের একটি সার্ভিস, ডিফল্টভাবে `cover.close_cover_tilt` |
| `button_action` | object | ঐচ্ছিক | `tap_action`, `double_tap_action` বা `hold_action`, দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | বাটনে ক্লিকের ডিফল্ট অ্যাকশন পরিবর্তনের সুযোগ দেয়। |
| `tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `double_tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ডাবল ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `hold_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে হোল্ডের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `main_buttons_position` | string | ঐচ্ছিক | `default` বা `bottom` | মিডিয়া নিয়ন্ত্রণগুলো নিচে সরান (স্থির) |
| `main_buttons_full_width` | boolean | ঐচ্ছিক | `true` বা `false` | নিচের নিয়ন্ত্রণগুলো পুরো প্রস্থে দেখান (ডিফল্ট: অবস্থান `bottom` হলে `true`) |
| `main_buttons_alignment` | string | ঐচ্ছিক | `end` (ডিফল্ট), `center`, `start`, `space-between` | পুরো প্রস্থ না হলে নিচের নিয়ন্ত্রণগুলোর অ্যালাইনমেন্ট |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউতে না থাকলে ডিফল্ট), `large` (সেকশন ভিউতে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |
| `sub_button` | object | ঐচ্ছিক | দেখুন [সাব-বাটন](#সাব-বাটন) | ডানে স্থির করা কাস্টমাইজ করা বাটন যোগ করুন |

</details>

<details>

<summary><b>CSS ভেরিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভেরিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | কভার কার্ডের সাপোর্টেড উপাদানগুলোর প্রধান ব্যাকগ্রাউন্ডের রং |
| `--bubble-cover-border-radius` | `px` | কভার কার্ডের বর্ডার রেডিয়াস |
| `--bubble-cover-icon-border-radius` | `px` | কভার কার্ডের আইকন কনটেইনারের বর্ডার রেডিয়াস |
| `--bubble-cover-icon-background-color` | `color` | কভার কার্ডের আইকন কনটেইনারের ব্যাকগ্রাউন্ডের রং |
| `--bubble-cover-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | কভার কার্ডের বক্স শ্যাডো |
| `--bubble-button-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | কভার কার্ডের বাটনগুলোর বক্স শ্যাডো |

</details>


#### উদাহরণ

<details>

<summary>রোলার শেড নিয়ন্ত্রণ করতে পারে এমন একটি কার্ড</summary>

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

## সিলেক্ট

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

এই কার্ড দিয়ে আপনি আপনার `input_select` / `select` এনটিটির জন্য একটি ড্রপডাউন মেনু যোগ করতে পারেন। এই কার্ড সাব-বাটন এবং Bubble Card-এর সব সাধারণ ফিচারও সাপোর্ট করে।

> [!TIP]
> চাইলে আপনি সিলেক্ট সাব-বাটনও রাখতে পারেন, সাব-বাটন সাপোর্ট করে এমন সব কার্ডেই এই ফিচার উপলব্ধ।

### সিলেক্ট অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম | ধরন | প্রয়োজনীয়তা | সাপোর্টেড অপশন | বর্ণনা |
| --- | --- | --- | --- | --- |
| `entity` | string | **আবশ্যক** | যেকোনো এনটিটি | নিয়ন্ত্রণের জন্য একটি এনটিটি |
| `name` | string | ঐচ্ছিক | যেকোনো স্ট্রিং | আপনার সিলেক্টের জন্য একটি নাম, নির্ধারিত না থাকলে এনটিটির নাম দেখানো হবে |
| `icon` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার সিলেক্টের জন্য একটি আইকন, নির্ধারিত না থাকলে এনটিটির আইকন বা `entity-picture` দেখানো হবে |
| `force_icon` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | `entity-picture`-এর বদলে আইকনকে অগ্রাধিকার দিন |
| `show_state` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র অবস্থা দেখান বা লুকান |
| `show_name` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | নাম দেখান বা লুকান |
| `show_icon` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | আইকন দেখান বা লুকান |
| `show_last_changed` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ পরিবর্তনের সময় দেখান |
| `show_last_updated` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ আপডেটের সময় দেখান |
| `show_attribute` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র একটি অ্যাট্রিবিউট তার `name`-এর নিচে দেখান |
| `attribute` | string | ঐচ্ছিক (`show_attribute` `true` হলে আবশ্যক) | আপনার `entity`-র একটি অ্যাট্রিবিউট | যে অ্যাট্রিবিউট দেখানো হবে (যেমন `brightness`) |
| `scrolling_effect` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | কনটেন্ট কনটেইনারের আকার ছাড়িয়ে গেলে টেক্সট স্ক্রল করতে দিন |
| `tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `double_tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ডাবল ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `hold_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে হোল্ডের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউতে না থাকলে ডিফল্ট), `large` (সেকশন ভিউতে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |
| `sub_button` | object | ঐচ্ছিক | দেখুন [সাব-বাটন](#সাব-বাটন) | ডানে স্থির করা কাস্টমাইজ করা বাটন যোগ করুন |

</details>

<details>

<summary><b>CSS ভেরিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভেরিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | সিলেক্ট কার্ডের সাপোর্টেড উপাদানগুলোর প্রধান ব্যাকগ্রাউন্ডের রং |
| `--bubble-select-background-color` | `color` | সিলেক্ট কার্ডের ব্যাকগ্রাউন্ডের রং |
| `--bubble-select-list-border-radius` | `px` | কার্ডের ড্রপডাউন মেনুর বর্ডার রেডিয়াস |
| `--bubble-select-list-item-accent-color` | `color` | নির্বাচিত আইটেমের অ্যাকসেন্ট রং |
| `--bubble-select-list-background-color` | `color` | কার্ডের ড্রপডাউন মেনুর ব্যাকগ্রাউন্ডের রং |
| `--bubble-select-list-width` | `px` | কার্ডের ড্রপডাউন মেনুর প্রস্থ |
| `--bubble-select-arrow-background-color` | `color` | ড্রপডাউন তীরের ব্যাকগ্রাউন্ডের রং |
| `--bubble-select-button-border-radius` | `px` | সিলেক্ট বাটনের বর্ডার রেডিয়াস |
| `--bubble-select-border-radius` | `px` | সিলেক্ট কার্ডের বর্ডার রেডিয়াস |
| `--bubble-select-icon-border-radius` | `px` | সিলেক্ট কার্ডের আইকন কনটেইনারের বর্ডার রেডিয়াস |
| `--bubble-select-icon-background-color` | `color` | সিলেক্ট কার্ডের আইকন কনটেইনারের ব্যাকগ্রাউন্ডের রং |
| `--bubble-select-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | সিলেক্ট কার্ডের বক্স শ্যাডো |

</details>


#### উদাহরণ

<details>

<summary>সিনের তালিকাসহ একটি সিলেক্ট কার্ড</summary>

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

## ক্লাইমেট

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

এই কার্ড দিয়ে আপনি আপনার `climate` এনটিটিগুলো নিয়ন্ত্রণ করতে পারেন।

> [!TIP]
> মোড নির্বাচনের মেনুটি একটি [সাব-বাটন](#সাব-বাটন), যা কার্ড তৈরির সময় স্বয়ংক্রিয়ভাবে যোগ হয়। এরপর আপনি ইচ্ছেমতো এটি পরিবর্তন বা মুছে ফেলতে পারেন।

### ক্লাইমেট অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম                     | ধরন    | প্রয়োজনীয়তা                         | সাপোর্টেড অপশন                                  | বর্ণনা                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **আবশ্যক**                        | ক্লাইমেট এনটিটি                                   | নিয়ন্ত্রণের এনটিটি (যেমন `climate.living_room`)।                                                            |
| `name`                  | string  | ঐচ্ছিক                            | যেকোনো স্ট্রিং                                       | কার্ডের জন্য একটি কাস্টম নাম। নির্ধারিত না থাকলে এনটিটির নাম দেখানো হবে।                                    |
| `icon`                  | string  | ঐচ্ছিক                            | যেকোনো `mdi:` আইকন                                  | কার্ডের জন্য একটি কাস্টম আইকন। নির্ধারিত না থাকলে এনটিটির আইকন বা `entity-picture` ব্যবহৃত হবে।                   |
| `force_icon`            | boolean | ঐচ্ছিক                            | `true` বা `false` (ডিফল্ট)                     | `entity-picture`-এর চেয়ে আইকনকে অগ্রাধিকার দেয়।                                                           |
| `show_state`            | boolean | ঐচ্ছিক                            | `true` বা `false` (ডিফল্ট)                     | `entity`-র বর্তমান অবস্থা দেখান বা লুকান।                                                                 |
| `show_name`             | boolean | ঐচ্ছিক                            | `true` (ডিফল্ট) বা `false`                     | এনটিটির নাম দেখান বা লুকান।                                                                            |
| `show_icon`             | boolean | ঐচ্ছিক                            | `true` (ডিফল্ট) বা `false`                     | আইকন দেখান বা লুকান।                                                                                          |
| `hide_target_temp_low`  | boolean | ঐচ্ছিক (শুধু `target_temp_low` সাপোর্ট করা এনটিটির জন্য) | `true` বা `false` (ডিফল্ট) | `entity` সাপোর্ট করলে নিম্ন লক্ষ্য তাপমাত্রার নিয়ন্ত্রণ লুকায়।                                          |
| `hide_target_temp_high` | boolean | ঐচ্ছিক (শুধু `target_temp_high` সাপোর্ট করা এনটিটির জন্য)| `true` বা `false` (ডিফল্ট) | `entity` সাপোর্ট করলে উচ্চ লক্ষ্য তাপমাত্রার নিয়ন্ত্রণ লুকায়।                                         |
| `state_color`           | boolean | ঐচ্ছিক                            | `true` বা `false` (ডিফল্ট)                     | ক্লাইমেট এনটিটি চালু (ON) থাকলে একটি স্থির ব্যাকগ্রাউন্ডের রং প্রয়োগ করে।                                              |
| `step` | number | ঐচ্ছিক | যেকোনো সংখ্যা | তাপমাত্রার ধাপ। |
| `min_temp` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সর্বনিম্ন তাপমাত্রা। |
| `max_temp` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সর্বোচ্চ তাপমাত্রা। |
| `button_action` | object | ঐচ্ছিক | `tap_action`, `double_tap_action` বা `hold_action`, দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | বাটনে ক্লিকের ডিফল্ট অ্যাকশন পরিবর্তনের সুযোগ দেয়। |
| `tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `double_tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে ডাবল ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `hold_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | আইকনে হোল্ডের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |                              |
| `main_buttons_position` | string | ঐচ্ছিক | `default` বা `bottom` | ক্লাইমেট অ্যাকশন বাটনগুলো নিচে সরান (স্থির) |
| `main_buttons_full_width` | boolean | ঐচ্ছিক | `true` বা `false` | নিচের অ্যাকশন বাটনগুলো পুরো প্রস্থে দেখান (ডিফল্ট: অবস্থান `bottom` হলে `true`) |
| `main_buttons_alignment` | string | ঐচ্ছিক | `end` (ডিফল্ট), `center`, `start`, `space-between` | পুরো প্রস্থ না হলে নিচের অ্যাকশন বাটনগুলোর অ্যালাইনমেন্ট |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউতে না থাকলে ডিফল্ট), `large` (সেকশন ভিউতে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |
| `sub_button`            | object  | ঐচ্ছিক                            | দেখুন [সাব-বাটন](#সাব-বাটন)                | ডানে স্থির করা কাস্টম বাটন যোগ করে। ক্লাইমেট মোড সিলেক্ট মেনুর জন্য উপযোগী।                                  |

</details>

<details>

<summary><b>CSS ভেরিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভেরিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | ক্লাইমেট কার্ডের সাপোর্টেড উপাদানগুলোর প্রধান ব্যাকগ্রাউন্ডের রং |
| `--bubble-climate-border-radius` | `px` | ক্লাইমেট কার্ডের সাপোর্টেড উপাদানগুলোর বর্ডার রেডিয়াস |
| `--bubble-climate-button-background-color` | `color` | ক্লাইমেট কার্ডের বাটনগুলোর ব্যাকগ্রাউন্ডের রং |
| `--bubble-climate-icon-border-radius` | `px` | ক্লাইমেট কার্ডের আইকন কনটেইনারের বর্ডার রেডিয়াস |
| `--bubble-state-climate-fan-only-color` | `color` | ফ্যান-অনলি অবস্থার ওভারলে রং |
| `--bubble-state-climate-dry-color` | `color` | ড্রাই অবস্থার ওভারলে রং |
| `--bubble-state-climate-cool-color` | `color` | কুল অবস্থার ওভারলে রং |
| `--bubble-state-climate-heat-color` | `color` | হিট অবস্থার ওভারলে রং |
| `--bubble-state-climate-auto-color` | `color` | অটো অবস্থার ওভারলে রং |
| `--bubble-state-climate-heat-cool-color` | `color` | হিট-কুল অবস্থার ওভারলে রং |
| `--bubble-climate-accent-color` | `color` | ক্লাইমেট কার্ডের অ্যাকসেন্ট রং |
| `--bubble-climate-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ক্লাইমেট কনটেইনারের বক্স শ্যাডো। |

</details>


#### উদাহরণ

<details>

<summary>HVAC মোডের ড্রপডাউন মেনুসহ একটি ক্লাইমেট কার্ড</summary>

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

## ক্যালেন্ডার

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

এই কার্ড দিয়ে আপনি আপনার ক্যালেন্ডার এনটিটিগুলো দেখাতে পারেন। এর কনটেন্ট স্ক্রল করা যায়, ফলে আপনি সহজেই আসন্ন ইভেন্টগুলো দেখে নিতে পারবেন।

### ক্যালেন্ডার অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম                | ধরন    | প্রয়োজনীয়তা  | সাপোর্টেড অপশন                               | বর্ণনা                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | ঐচ্ছিক     | যেকোনো সংখ্যা (সর্বনিম্ন: 1)                        | এখন থেকে N-তম দিনের শেষ পর্যন্ত কত দিনের ইভেন্ট আনা হবে (ডিফল্ট: 7) |
| `entities`          | object  | **আবশ্যক** | একটি ক্যালেন্ডার এনটিটি অবজেক্ট (নিচে দেখুন)            | নিয়ন্ত্রণের এনটিটি (যেমন `calendar.main_calendar`)।                                 |
| `entities.entity`   | string  | **আবশ্যক** | একটি ক্যালেন্ডার এনটিটি                               | যে ক্যালেন্ডার এনটিটি দেখানো হবে                                                          |
| `entities.color`    | string  | ঐচ্ছিক     | একটি রং                                         | ক্যালেন্ডার চিপের জন্য একটি কাস্টম রং। নির্ধারিত না থাকলে স্বয়ংক্রিয়ভাবে একটি রং বাছাই করা হবে |
| `days`              | number  | ঐচ্ছিক     | যেকোনো সংখ্যা (সর্বনিম্ন: 1)                         | এখন থেকে N-তম দিনের শেষ পর্যন্ত কত দিনের ইভেন্ট আনা হবে (ডিফল্ট: 7) |
| `limit`             | number  | ঐচ্ছিক     | একটি সংখ্যা                                        | কার্ডে কতটি ইভেন্ট দেখানো হবে তার সংখ্যা                                  |
| `show_end`          | boolean | ঐচ্ছিক     | `true` বা `false` (ডিফল্ট)                     | ইভেন্টের শেষ সময় দেখান বা লুকান                                                    |
| `show_progress`     | boolean | ঐচ্ছিক     | `true` (ডিফল্ট) বা `false`                     | ইভেন্টের অগ্রগতি বার দেখান বা লুকান                                                     |
| `show_started_events`| boolean | ঐচ্ছিক     | `true` (ডিফল্ট) বা `false`                     | বর্তমানে চলমান ইভেন্টগুলো দেখান বা লুকান। একাধিক দিন জুড়ে চলা ইভেন্ট দিন ধরে ধরে বিচার করা হয়, তাই কেবল চলমান দিনটিই লুকায় আর আসন্ন দিনগুলো দৃশ্যমান থাকে |
| `scrolling_effect`  | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | কনটেন্ট কনটেইনারের আকার ছাড়িয়ে গেলে টেক্সট স্ক্রল করতে দিন |
| `event_action` | object | ঐচ্ছিক | `tap_action`, `double_tap_action` বা `hold_action`, দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | ইভেন্টে ক্লিকে অ্যাকশন যোগ করার সুযোগ দেয়। |
| `tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | দিনে ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `double_tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | দিনে ডাবল ক্লিকের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `hold_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | দিনে হোল্ডের অ্যাকশনের ধরন নির্ধারণ করুন, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউতে না থাকলে ডিফল্ট), `large` (সেকশন ভিউতে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |
| `sub_button` | object | ঐচ্ছিক | দেখুন [সাব-বাটন](#সাব-বাটন) | ডানে স্থির করা কাস্টমাইজ করা বাটন যোগ করুন |

</details>

<details>

<summary><b>CSS ভেরিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভেরিয়েবল                                  | প্রত্যাশিত মান | বর্ণনা                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | ক্যালেন্ডার কার্ডের সাপোর্টেড উপাদানগুলোর প্রধান ব্যাকগ্রাউন্ডের রং  |
| `--bubble-calendar-border-radius`         | `px`           | ক্যালেন্ডার কার্ডের সাপোর্টেড উপাদানগুলোর বর্ডার রেডিয়াস |
| `--bubble-calendar-height`                | `px`           | ক্যালেন্ডার কার্ডের উচ্চতা                                        |

</details>

#### উদাহরণ

<details>

<summary>সীমিত সংখ্যক ইভেন্টসহ একটি ক্যালেন্ডার কার্ড</summary>

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

<summary>শেষ সময় ও অগ্রগতি বারসহ একটি ক্যালেন্ডার কার্ড</summary>

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


## বিভাজক

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

এই কার্ডটি আপনার পপ-আপকে ক্যাটাগরি / সেকশনে ভাগ করার জন্য একটি সাধারণ বিভাজক। যেমন লাইট, ডিভাইস, কভার, সেটিংস, অটোমেশন...

### বিভাজক অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম | ধরন | প্রয়োজনীয়তা | সাপোর্টেড অপশন | বর্ণনা |
| --- | --- | --- | --- | --- |
| `name` | string | ঐচ্ছিক তবে প্রস্তাবিত | যেকোনো স্ট্রিং | আপনার বিভাজকের জন্য একটি নাম |
| `icon` | string | ঐচ্ছিক তবে প্রস্তাবিত | যেকোনো `mdi:` আইকন | আপনার বিভাজকের জন্য একটি আইকন |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউতে না থাকলে ডিফল্ট), `large` (সেকশন ভিউতে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |
| `sub_button` | object | ঐচ্ছিক | দেখুন [সাব-বাটন](#সাব-বাটন) | ডান দিকে স্থির কাস্টমাইজড বাটন যোগ করুন |

</details>

<details>

<summary><b>CSS ভ্যারিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভ্যারিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | বিভাজকের লাইনের ব্যাকগ্রাউন্ডের রং |

</details>

#### উদাহরণ

<details>

<summary>"কভার" সেকশনের জন্য একটি বিভাজক/ডিভাইডার</summary>

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

## খালি কলাম

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

এই কার্ডটি একটি খালি কলাম ভরাট করার জন্য। আপনার পপ-আপে যদি মাত্র একটি কার্ডসহ একটি `horizontal-stack` থাকে, তাহলে এটি কাজে লাগে। এটি (না) দেখতে এই স্ক্রিনশটের নিচের ডান কোণে তাকান।

### খালি কলাম অপশন

এই কার্ডের কোনো অপশন নেই এবং এটি [স্টাইলিং](#স্টাইলিং) সাপোর্ট করে না, তবে HA সেকশনের জন্য লেআউট অপশন সাপোর্ট করে।

#### উদাহরণ

<details>

<summary>একটি অনুভূমিক স্ট্যাকে একটি খালি কলাম</summary>

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

## শুধু সাব-বাটন

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

এই কার্ডটি শুধু সাব-বাটনের জন্যই নিবেদিত। মেনু, দ্রুত অ্যাকশন, তথ্যমূলক চিপ বা পৃষ্ঠার নিচে স্থির ফুটারের জন্য এটি একদম উপযুক্ত।

> [!IMPORTANT]  
> এই কার্ডটি নতুন সাব-বাটন স্কিমা ব্যবহার করে। আপনার বাটন নির্ধারণ করতে `sub_button.bottom` ব্যবহার করুন। `sub_button.main` সেকশনটি উপেক্ষা করা হয়।

### শুধু সাব-বাটন অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম | ধরন | প্রয়োজনীয়তা | সাপোর্টেড অপশন | বর্ণনা |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **আবশ্যক** | দেখুন [সাব-বাটন](#সাব-বাটন) | `bottom` সেকশন ব্যবহার করে আপনার সাব-বাটন নির্ধারণ করুন |
| `hide_main_background` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | কার্ডের ব্যাকগ্রাউন্ড সরিয়ে দিন |
| `footer_mode` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | কার্ডটি পৃষ্ঠার নিচে স্থির করুন |
| `footer_full_width` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | ফুটারকে সম্পূর্ণ প্রস্থের (100%) করুন |
| `footer_width` | number | ঐচ্ছিক | যেকোনো সংখ্যা | `footer_full_width` `false` হলে পিক্সেলে ফুটারের প্রস্থ |
| `footer_bottom_offset` | number | ঐচ্ছিক | যেকোনো সংখ্যা | পৃষ্ঠার নিচ থেকে পিক্সেলে দূরত্ব (ডিফল্ট: `16`) |
| `card_layout` | string | ঐচ্ছিক | `normal` (সেকশন ভিউতে না থাকলে ডিফল্ট), `large` (সেকশন ভিউতে থাকলে ডিফল্ট), `large-2-rows`, `large-sub-buttons-grid` | কার্ডের স্টাইলিং লেআউট, দেখুন [কার্ড লেআউট](#কার্ড-লেআউট) |
| `rows` | number | ঐচ্ছিক | যেকোনো সংখ্যা | সারির সংখ্যা (উচ্চতা) (যেমন `2`) |

</details>

<details>

<summary><b>CSS ভ্যারিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভ্যারিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width` `false` হলে ফুটারের প্রস্থ |
| `--bubble-footer-bottom` | `px` | ফুটারের নিচের অফসেট |
| `--bubble-footer-box-shadow` | দেখুন [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ফুটার কনটেইনারের বক্স শ্যাডো |

</details>

#### উদাহরণ

<details>

<summary>চিপের মতো (স্ক্রিনশটের মতো)</summary>

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

<summary>একটি স্থির ফুটার মেনু</summary>

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

## সাব-বাটন

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

এই অপশন সাপোর্ট করে এমন প্রতিটি কার্ডে আপনি সাব-বাটন যোগ করে কার্ডগুলো আরও কাস্টমাইজ করতে পারেন। উদাহরণস্বরূপ, আপনি এমন একটি বাটন তৈরি করতে পারেন যা একটি ভ্যাকুয়াম নিয়ন্ত্রণ করে, একটি ওয়েদার কার্ড, বা আপনার মাথায় আসতে পারে এমন প্রায় যেকোনো কিছু। এই সাব-বাটনগুলো ট্যাপ অ্যাকশন এবং বাটনের বেশিরভাগ অপশন সাপোর্ট করে।

সাব-বাটন এখন তিনটি ধরন সাপোর্ট করে: **ডিফল্ট (বাটন)**, **স্লাইডার** এবং **ড্রপডাউন / সিলেক্ট**। আপনি একই কার্ডে বিভিন্ন ধরন মেশাতে পারেন, সাব-বাটন উপরে বা নিচে রাখতে পারেন এবং আরও অ্যাডভান্সড লেআউটের জন্য সেগুলো গ্রুপে সাজাতে পারেন।

#### সাব-বাটনের অবস্থান ও গ্রুপ

<details>

<summary><b>সাব-বাটনের কাঠামো (main / bottom + গ্রুপ)</b></summary>

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

**দ্রষ্টব্য:**
- `main` এবং `bottom` দুটি স্বাধীন সেকশন। নিচের সাব-বাটনগুলো কার্ডের নিচে স্থির থাকে।
- `main_layout` এবং `bottom_layout` `inline` (ডিফল্ট) বা `rows` গ্রহণ করে, `rows` গ্রুপগুলোকে উল্লম্বভাবে স্ট্যাক করে।
- গ্রুপ হলো একটি `group` অ্যারে এবং ঐচ্ছিক `buttons_layout` (`inline` বা `column`) সহ অবজেক্ট।
- `justify_content` **শুধু নিচের গ্রুপের জন্য** উপলব্ধ (`start`, `center`, `end`, `fill`)।
- নিচের সাব-বাটন থাকলে, আপনি স্পষ্টভাবে অন্য কোনো লেআউট নির্ধারণ না করলে কার্ড লেআউট স্বয়ংক্রিয়ভাবে `large`-এ পরিবর্তিত হয়।
- পুরোনো `sub_button` অ্যারে এখনও সাপোর্ট করা হয় এবং `main` সেকশন হিসেবে বিবেচিত হয়।

</details>

### সাব-বাটন অপশন

<details>

<summary><b>অপশন (YAML + বর্ণনা)</b></summary>

| নাম | ধরন | প্রয়োজনীয়তা | সাপোর্টেড অপশন | বর্ণনা |
| --- | --- | --- | --- | --- |
| `entity` | string | ঐচ্ছিক | যেকোনো এনটিটি | নিয়ন্ত্রণ করার জন্য একটি এনটিটি |
| `name` | string | ঐচ্ছিক | যেকোনো স্ট্রিং | আপনার সাব-বাটনের জন্য একটি নাম, নির্ধারিত না থাকলে এনটিটির নাম দেখানো হবে |
| `icon` | string | ঐচ্ছিক | যেকোনো `mdi:` আইকন | আপনার সাব-বাটনের জন্য একটি আইকন, নির্ধারিত না থাকলে এনটিটির আইকন বা এনটিটির ছবি দেখানো হবে |
| `force_icon` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | এনটিটির ছবি উপলব্ধ থাকলেও আইকন দেখানো বাধ্যতামূলক করুন |
| `sub_button_type` | string | ঐচ্ছিক | `default`, `slider` বা `select` | সাব-বাটনের ধরন বেছে নিন |
| `show_background` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | আপনার সাব-বাটনের জন্য একটি ব্যাকগ্রাউন্ড দেখান, এনটিটির অবস্থার ভিত্তিতে এর রং পরিবর্তিত হবে |
| `state_background` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | এনটিটি `on` থাকলে অবস্থার রং ব্যবহার করুন |
| `light_background` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | উপলব্ধ থাকলে ব্যাকগ্রাউন্ডের জন্য লাইটের রং ব্যবহার করুন |
| `show_state` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র অবস্থা দেখান বা লুকান |
| `show_name` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | নাম দেখান বা লুকান |
| `show_icon` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | আইকন দেখান বা লুকান |
| `show_last_changed` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ পরিবর্তনের সময় দেখান |
| `show_last_updated` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র সর্বশেষ আপডেটের সময় দেখান |
| `show_attribute` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | আপনার `entity`-র একটি অ্যাট্রিবিউট এর `name`-এর নিচে দেখান |
| `attribute` | string | ঐচ্ছিক (`show_attribute` `true` হলে আবশ্যক) | আপনার `entity`-র একটি অ্যাট্রিবিউট | যে অ্যাট্রিবিউট দেখানো হবে (যেমন `brightness`) |
| `select_attribute` | string | ঐচ্ছিক | আপনার `entity`-র একটি অ্যাট্রিবিউট তালিকা (উপরের সাপোর্টেড অপশন দেখুন) | ক্লিক করলে এই অ্যাট্রিবিউট তালিকা একটি ড্রপডাউন খুলবে (যেমন `effect_list`) |
| `show_arrow` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | সিলেক্ট সাব-বাটনের জন্য ড্রপডাউনের তীর দেখান বা লুকান |
| `scrolling_effect` | boolean | ঐচ্ছিক | `true` (ডিফল্ট) বা `false` | কনটেন্ট কনটেইনারের আকার ছাড়িয়ে গেলে টেক্সট স্ক্রল করতে দিন |
| `tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | সাব-বাটনে ক্লিক করলে কী অ্যাকশন হবে তা নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `double_tap_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | সাব-বাটনে ডাবল ক্লিক করলে কী অ্যাকশন হবে তা নির্ধারণ করুন, নির্ধারিত না থাকলে `none` ব্যবহৃত হবে। |
| `hold_action` | object | ঐচ্ছিক | দেখুন [অ্যাকশন](#ট্যাপ-ডাবল-ট্যাপ-ও-হোল্ড-অ্যাকশন) | সাব-বাটন ধরে রাখলে কী অ্যাকশন হবে তা নির্ধারণ করুন, নির্ধারিত না থাকলে `more-info` ব্যবহৃত হবে। |
| `fill_width` | boolean | ঐচ্ছিক | `true` বা `false` | উপলব্ধ প্রস্থ ভরাট করুন (ডিফল্ট: main-এর জন্য `false`, bottom-এর জন্য `true`) |
| `width` | number বা string | ঐচ্ছিক | যেকোনো সংখ্যা বা CSS দৈর্ঘ্য | কাস্টম প্রস্থ (ডিফল্টভাবে main সেকশনের জন্য `px`, bottom সেকশনের জন্য `%`) |
| `custom_height` | number | ঐচ্ছিক | যেকোনো সংখ্যা | পিক্সেলে কাস্টম উচ্চতা |
| `content_layout` | string | ঐচ্ছিক | `icon-left` (ডিফল্ট), `icon-top`, `icon-bottom`, `icon-right` | সাব-বাটনের ভেতরে আইকনের অবস্থান |
| `always_visible` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | **শুধু স্লাইডার।** ট্যাপে খোলার বদলে স্লাইডার সবসময় দেখান |
| `show_button_info` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | **শুধু স্লাইডার।** `always_visible` চালু থাকলে আইকন/নাম/অবস্থা দেখান |
| `visibility` | object বা list | ঐচ্ছিক | দেখুন [শর্ত](#শর্ত) | শর্তের ভিত্তিতে সাব-বাটন দেখান বা লুকান |
| `hide_when_parent_unavailable` | boolean | ঐচ্ছিক | `true` বা `false` (ডিফল্ট) | মূল কার্ডের এনটিটি অনুপলব্ধ হলে সাব-বাটন লুকান |
| `css_class` | string | ঐচ্ছিক | যেকোনো স্ট্রিং | সাব-বাটনে একটি অতিরিক্ত CSS ক্লাস, নাম যা-ই হোক আপনার [স্টাইলিং](#স্টাইলিং)-এ সেটিকে টার্গেট করার জন্য (যেমন `My value` দেয় `.my-value`) |

</details>

<details>

<summary><b>স্লাইডার সাব-বাটন অপশন (বাটন স্লাইডারের মতোই)</b></summary>

<br>

স্লাইডার সাব-বাটন বাটন স্লাইডারের মতো একই স্লাইডার অপশন সাপোর্ট করে, যার মধ্যে আছে:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`।

</details>

<details>

<summary><b>CSS ভ্যারিয়েবল (দেখুন <a href="#স্টাইলিং">স্টাইলিং</a>)</b></summary>

| ভ্যারিয়েবল | প্রত্যাশিত মান | বর্ণনা |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | সাব-বাটনের বর্ডার রেডিয়াস |
| `--bubble-sub-button-background-color` | `color` | সাব-বাটনের ব্যাকগ্রাউন্ডের রং |
| `--bubble-sub-button-outline` | `box-shadow` | সাব-বাটন বা স্লাইডারে যোগ হওয়া রূপরেখা, কেবল তখনই যখন সেই উপাদানটি পেছনের কার্ডের মতো একই রঙে আঁকা হয় এবং অদৃশ্য হয়ে যেত (সরাতে `none` দিন) |
| `--bubble-sub-slider-border-radius` | `px` | স্লাইডার সাব-বাটনের বর্ডার রেডিয়াস |
| `--bubble-sub-slider-background-color` | `color` | স্লাইডার সাব-বাটনের ব্যাকগ্রাউন্ডের রং |
| `--bubble-sub-slider-height` | `px` | সবসময় দৃশ্যমান স্লাইডার সাব-বাটনের উচ্চতা |
| `--bubble-sub-slider-outline` | `box-shadow` | কেবল স্লাইডার সাব-বাটনের রূপরেখা, না থাকলে `--bubble-sub-button-outline` ব্যবহার হয় |
| `--bubble-sub-button-dark-text-color` | `color` | উজ্জ্বল সাব-বাটন ব্যাকগ্রাউন্ডে টেক্সটের রং |

</details>

#### উদাহরণ

<details>

<summary>একটি ভ্যাকুয়াম কার্ড তৈরির জন্য কিছু সাব-বাটনসহ একটি বাটন (স্ক্রিনশটের মতো)</summary>

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

<summary>একটি বাটন স্লাইডার, সাথে উজ্জ্বলতা দেখানো একটি সাব-বাটন এবং লাইট টগল করা আরেকটি (স্ক্রিনশটের মতো)</summary>

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

<summary>ঘরের ভেতরের ও বাইরের তাপমাত্রা এবং আজ ও আগামীকালের আবহাওয়া দেখানো একটি বাটন (স্ক্রিনশটসহ)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> আমার দুর্ভাগ্য, সবসময়ই মেঘলা, তবে সব আইকন আবহাওয়ার ভিত্তিতে পরিবর্তিত হচ্ছে।

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

## কার্ড লেআউট

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card, Home Assistant-এর সেকশন ভিউ সম্পূর্ণভাবে সাপোর্ট করে। আপনি কার্ড লেআউট পরিবর্তন করে কার্ডটি বড় করতে পারেন এবং সেকশন ভিউতে কার্ডটি কতগুলো কলাম বা সারি জুড়ে থাকবে তাও নির্ধারণ করতে পারেন (শুধু যেসব কার্ড এই অপশন সাপোর্ট করে সেগুলোতে)। এই লেআউটগুলো অন্য সব ধরনের ভিউতেও সাপোর্টেড।

<details>

<summary><b>উপলব্ধ কার্ড লেআউট</b></summary>

| লেআউট | বিবরণ |
| --- | --- |
| `normal` | সাধারণ লেআউট (সেকশন ভিউয়ের জন্য অপটিমাইজ করা নয়) |
| `large` | একটি বড় লেআউট, যা সেকশন ভিউতে নির্বাচিত সারি অনুযায়ী আকার পরিবর্তন করে (সেকশন ভিউয়ের জন্য অপটিমাইজ করা) |
| `large-2-rows` | ২ সারি সাব-বাটনসহ একটি বড় লেআউট, যা সেকশন ভিউতে নির্বাচিত সারি অনুযায়ী আকার পরিবর্তন করে (সেকশন ভিউয়ের জন্য অপটিমাইজ করা) |
| `large-sub-buttons-grid` | এই লেআউট সাব-বাটনগুলো একটি গ্রিডে দেখায়, `rows` অন্তত `2` নির্ধারণ করতে হবে।

</details>

#### উদাহরণ

<details>

<summary>২ সারি সাব-বাটনসহ এনার্জি পরিসংখ্যান দেখানো একটি বড় বাটন (স্ক্রিনশটসহ)</summary>

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

<summary>১২টি সাব-বাটনসহ একাধিক সারির একটি বড় বাটন</summary>

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

## শর্ত

কিছু অপশন শর্ত দিয়ে নিয়ন্ত্রিত হয়, যা Home Assistant-এর [কন্ডিশনাল কার্ডের](https://www.home-assistant.io/dashboards/conditional/) শর্তের মতো হুবহু লেখা হয়:

- [সাব-বাটনে](#সাব-বাটন) `visibility`, সেটি দেখানো বা লুকানোর জন্য
- [পপ-আপে](#পপ-আপ) `trigger`, শর্ত পূরণ হলে সেটি খোলার জন্য
- আপনার [টেমপ্লেটের](#টেমপ্লেট) ভিতরে `checkConditionsMet(conditions, hass)`, যখন নিজের কোডেই উত্তরটি দরকার

Home Assistant-এর প্রতিটি শর্তের ধরন মূল্যায়ন করা হয়: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, এবং `and`, `or` ও `not` গ্রুপ। Home Assistant-এর কন্ডিশন বিল্ডারের শর্তগুলোও কাজ করে, যেগুলোর নাম তাদের ডোমেইন অনুসারে, যেমন `sun.is_up`, `light.is_on`, `zone.in_zone` বা `temperature.is_value`, তাদের `target`, `options`, `behavior` ও `for` সেটিংসসহ।

<details>

<summary><b>উদাহরণ</b></summary>

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
> শর্তগুলো আপনার ব্রাউজারেই মূল্যায়ন হয়, তাই যে অল্প কয়েকটির জন্য Home Assistant সার্ভার দরকার সেগুলো নিখুঁত হতে পারে না: সূর্যোদয় ও সূর্যাস্ত নতুন করে হিসাব না করে `sun.sun` এনটিটি থেকে পড়া হয়, আর `for` সময়কাল সর্বশেষ অবস্থা পরিবর্তনের সময় থেকে মাপা হয়, recorder ইতিহাস ছাড়াই।
>
> `view_columns` গ্রহণ করা হয় কিন্তু সবসময় সফল হয়, কারণ আপনার ভিউয়ের কলাম সাজানোর কাজটি Bubble Card কখনোই করে না। Bubble Card যে শর্তের ধরন চেনে না সেটি নীরবে ব্যর্থ না হয়ে ব্রাউজার কনসোলে একবার নিজের কথা জানায়, ফলে টাইপো আর অনুপস্থিত ফিচারের পার্থক্য বোঝা যায়।

<br>

---

<br>

## ট্যাপ, ডাবল ট্যাপ ও হোল্ড অ্যাকশন

যেসব কার্ড এই অপশন সাপোর্ট করে, সেগুলোতে আপনি Home Assistant-এর ডিফল্ট ট্যাপ অ্যাকশন, ডাবল ট্যাপ অ্যাকশন ও হোল্ড অ্যাকশনও ব্যবহার করতে পারেন। যেমন, এর মাধ্যমে আপনি কোনো বাটনের আইকন ধরে রেখে "আরও তথ্য" উইন্ডো দেখাতে পারেন, বা কোনো সাব-বাটন চাপলে একটি সার্ভিস চালাতে পারেন।

**দ্রষ্টব্য: `double_tap_action` কনফিগার করা থাকলে, ডাবল ট্যাপ শনাক্ত করার সুযোগ দিতে সাধারণ `tap_action`-এ 200ms বিলম্ব হবে। এই বিলম্ব
অনাকাঙ্ক্ষিত হলে, ডাবল ট্যাপ হ্যান্ডলিং বন্ধ করতে `double_tap_action`-কে `none` নির্ধারণ করুন।**

### অ্যাকশন অপশন

<details>

<summary><b>অপশন (YAML + বিবরণ)</b></summary>

| নাম | ধরন | সাপোর্টেড অপশন | বিবরণ |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | যে অ্যাকশন সম্পাদিত হবে |
| `target` | object |  | শুধু `call-service`-এর সাথে কাজ করে। [home-assistant সিনট্যাক্স](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) অনুসরণ করে |
| `navigation_path` | string | আপনার ড্যাশবোর্ডের যেকোনো পাথ | অ্যাকশন navigate হিসেবে নির্ধারিত হলে যে পাথে যাওয়া হবে (যেমন, পপ-আপ খুলতে `'#kitchen'`) |
| `url_path` | string | যেকোনো লিংক | অ্যাকশন `url` হলে ক্লিক করলে যে URL খুলবে (যেমন `https://www.google.com`) |
| `service` | string | যেকোনো সার্ভিস | `action` `call-service` হিসেবে নির্ধারিত হলে যে সার্ভিস কল হবে (যেমন `media_player.media_play_pause`) |
| `data` বা `service_data` | object | যেকোনো সার্ভিস ডেটা | `action` `call-service` হিসেবে নির্ধারিত হলে যে সার্ভিস ডেটা যুক্ত হবে (যেমন `entity_id: media_player.kitchen`) |
| `confirmation` | object | দেখুন [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | একটি নিশ্চিতকরণ পপ-আপ দেখায় (Bubble Card-এর পপ-আপ নয়), ডিফল্ট `confirmation` অবজেক্টকে ওভাররাইড করে |

</details>

#### উদাহরণ

<details>

<summary>পপ-আপ খোলার একটি বাটন</summary>

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

## স্টাইলিং

**card-mod ছাড়াই** সব কার্ডের CSS পরিবর্তন করতে আপনি চারটি উপায়ে কাস্টম স্টাইল যোগ করতে পারেন:

- এডিটরে, যে কার্ডটি পরিবর্তন করতে চান সেখানে যান, তারপর _স্টাইলিং অপশন > কাস্টম স্টাইল ও JS টেমপ্লেট_-এ গিয়ে আপনার কাস্টম স্টাইল যোগ করুন (নিচের টিপস ও উদাহরণ দেখুন)।
- এডিটরে (বা [YAML](#মডিউল)-এ), যে কার্ডটি পরিবর্তন করতে চান সেখানে যান, তারপর _মডিউল_-এ গিয়ে একটি নতুন মডিউল তৈরি করুন (এটি সব কার্ডে ব্যবহারযোগ্য হবে), অথবা **Module Store**-এ গিয়ে উপলব্ধ যেকোনো মডিউল ইনস্টল করুন (মডিউল সম্পর্কে বিস্তারিত [নিচে](#মডিউল) পাবেন)।
- একটি [থিম](https://www.home-assistant.io/integrations/frontend/#defining-themes) ফাইলে YAML-এ CSS ভেরিয়েবল যোগ করে (এগুলো উপরে প্রতিটি কার্ডের ডকুমেন্টেশনে পাবেন)। এতে গ্লোবাল পরিবর্তন করা যায়।

  <details>
  
  <summary>উদাহরণ</a></summary>
  
  <br>

  `Bubble:` লাইনটি কপি করবেন না, এটি আপনার ব্যবহৃত থিমের নাম। ভেরিয়েবলগুলো থেকে `--` অংশটিও সরিয়ে দিতে হবে।

  যেকোনো পরিবর্তনের পর থিম রিফ্রেশ করতে [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) অ্যাকশনটি চালাতে হবে।

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
  
- YAML-এ `styles: |` লিখে তার পরে আপনার কাস্টম স্টাইল যোগ করে (নিচের টিপস ও উদাহরণ দেখুন)।

> [!TIP]  
> **কোন স্টাইল ক্লাসগুলো পরিবর্তন করা যায় তা বুঝতে**, এই রিপোজিটরির [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) ফোল্ডারটি দেখতে পারেন। প্রতিটি কার্ডের ফোল্ডারে `styles.css` নামে একটি ফাইল পাবেন। এই ফাইলগুলোতে প্রয়োগ করা সব স্টাইল রয়েছে। এতে CSS ভেরিয়েবলের চেয়ে অনেক বেশি সম্ভাবনা পাওয়া যায়, তবে এটি প্রতিটি কার্ডে আলাদাভাবে যোগ করতে হয়।
> 
> এছাড়া একটু খোঁজাখুঁজি করলে [কমিউনিটির অনেক উদাহরণ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), বা [Home Assistant ফোরামের](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) কিছু উদাহরণও পেয়ে যাবেন।
>
> Home Assistant-এর জন্য Bubble থিমটি (স্ক্রিনশটের মতো) [এখানে](https://github.com/Clooos/Bubble) পাবেন।
>
> আমার [YouTube চ্যানেলে](https://www.youtube.com/@cloooos) শীঘ্রই একটি টিউটোরিয়াল ভিডিও আসছে!

> [!IMPORTANT]  
> মনে রাখবেন, ইতিমধ্যে নির্ধারিত কিছু CSS স্টাইলে আপনাকে `!important;` যোগ করতে হতে পারে (নিচের উদাহরণ দেখুন)।

> [!TIP]  
> সাব-বাটনগুলোকে নামভিত্তিক ক্লাস দিয়ে টার্গেট করা যায়। যেমন, "My sub-button" নামের একটি সাব-বাটনকে `.my-sub-button` দিয়ে স্টাইল করা যায়। স্লাইডার সাব-বাটনগুলোতে `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` ইত্যাদিও পাওয়া যায়।
>
> সাব-বাটনের নাম বদলালে নামভিত্তিক ক্লাসও বদলে যায়, আর নাম অনূদিত হলে সেটিও অনূদিত হয়। সাব-বাটনে `css_class` দিন, তাহলে নাম যা-ই হোক আর ভাষা যা-ই হোক, নিজের একটি ক্লাস পাবেন যা কখনো বদলায় না।

#### উদাহরণ

<details>

<summary>যেকোনো Bubble Card-এর ফন্ট সাইজ পরিবর্তন করা</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>অনুভূমিক বাটন স্ট্যাকের একটি বাটনের ব্যাকগ্রাউন্ডের রং পরিবর্তন করা</summary>

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

<summary>একটি কার্ডের ব্যাকগ্রাউন্ডের রং পরিবর্তন করা</summary>

<br>

এটি সব ধরনের Bubble Card-এ কাজ করে (পপ-আপ ছাড়া):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

এটি একই কাজ করে, তবে শুধু বাটন কার্ডে (এটি পপ-আপ হেডারেও কাজ করে): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

`on` অবস্থায় রং পরিবর্তন করতে নিচের স্টাইল টেমপ্লেটগুলো দেখুন।

</details>

<details>

<summary>একটি বাটন স্লাইডারের রং পরিবর্তন করা</summary>

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

<summary>একটি বিভাজকের লাইনের রং পরিবর্তন করা</summary>

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

<summary>একটি আইকনের রং পরিবর্তন করা</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

অনুভূমিক বাটন স্ট্যাকের আইকনের জন্য।
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>একটি আইকন কন্টেইনারের ব্যাকগ্রাউন্ডের রং পরিবর্তন করা</summary>

<br>

এটি সব ধরনের Bubble Card-এ কাজ করে (পপ-আপ ছাড়া):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

এটি পপ-আপ হেডারের জন্য একই কাজ করে: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>সাব-বাটনগুলোর আকার পরিবর্তন করা (লার্জ লেআউটের জন্য দারুণ)</summary>

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

<summary>দ্বিতীয় সাব-বাটনের ব্যাকগ্রাউন্ডের রং পরিবর্তন করা</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>একটি আইকনের আকার পরিবর্তন করা</summary>

<br>

মূল আইকনের জন্য।

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

সাব-বাটনের আইকনগুলোর জন্য।

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>সাব-বাটনে আইকনের বদলে ছবি ব্যবহার করা</summary>

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

শুধু ছবিটি Home Assistant-এর "www" ফোল্ডারের ভিতরে "pictures" নামের (বা আপনার পছন্দের নামের) একটি ফোল্ডারে আপলোড করুন।

</details>

<details>

<summary>অ্যাডভান্সড উদাহরণ: সাব-বাটনের একটি অনুভূমিক সারি তৈরি করা (স্ক্রিনশটসহ)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> এটি আমার খুবই প্রিয়, আমি এটি আমার ড্যাশবোর্ডের হেডার হিসেবে ব্যবহার করি।

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

## টেমপ্লেট

**Bubble Card Jinja টেমপ্লেট সাপোর্ট করে না**, তবে অ্যাডভান্সড ব্যবহারকারীরা তাদের [কাস্টম স্টাইলে](#স্টাইলিং) সরাসরি JS দিয়ে টেমপ্লেট যোগ করতে পারেন। উদাহরণস্বরূপ, এর মাধ্যমে আপনি কোনো আইকন, টেক্সট বা কোনো এলিমেন্টের রং ডাইনামিকভাবে বদলাতে পারেন, কোনো এলিমেন্ট শর্তসাপেক্ষে দেখাতে বা লুকাতে পারেন (যেমন একটি সাব-বাটন), অথবা কোনো অবস্থা, অ্যাট্রিবিউট ও আরও অনেক কিছুর ভিত্তিতে প্রায় যেকোনো কিছু করতে পারেন।

> [!TIP]  
> JS টেমপ্লেট সম্পর্কে আরও তথ্য পাবেন [এখানে](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)। আমার পরামর্শ হলো **সবসময় আপনার ব্রাউজার কনসোলে একবার চোখ বুলিয়ে নিন**, যাতে নিশ্চিত হতে পারেন সবকিছু ঠিকঠাক কাজ করছে।

> [!IMPORTANT]  
> **CSS প্রপার্টি পরিবর্তন করে না এমন সব টেমপ্লেট অবশ্যই শেষে রাখতে হবে! যেমন কোনো আইকন, টেক্সট বা যেকোনো এলিমেন্ট পরিবর্তন করা।**

#### উপলব্ধ ভ্যারিয়েবল ও ফাংশন

<details>

<summary>ভ্যারিয়েবল</summary>

<br>

বেশিরভাগ কার্ডে আপনি এই ভ্যারিয়েবলগুলো ব্যবহার করতে পারেন:

- `state` আপনার নির্ধারিত `entity`-র অবস্থা রিটার্ন করবে।
  
- `entity` আপনার নির্ধারিত এনটিটি রিটার্ন করবে, যেমন এই উদাহরণে `switch.test`।
  
- `icon` এভাবে ব্যবহার করে আইকন পরিবর্তন করা যায়: `icon.setAttribute("icon", "mdi:lightbulb")`।

- `subButtonState[0]` আপনার প্রথম সাব-বাটনে নির্ধারিত `entity`-র অবস্থা রিটার্ন করবে, `[0]` হলো প্রথম সাব-বাটনের অবস্থা, `[1]` দ্বিতীয়টির...
  
- `subButtonIcon[0]` এভাবে ব্যবহার করে প্রথম সাব-বাটনের আইকন পরিবর্তন করা যায়: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` হলো প্রথম সাব-বাটনের আইকন, `[1]` দ্বিতীয়টির...
  
- `card` DOM-এ কার্ড এলিমেন্টটি রিটার্ন করবে।
  
- `hass` একটি অ্যাডভান্সড ভ্যারিয়েবল যা আপনাকে আরও বেশি নিয়ন্ত্রণ দেয়, উদাহরণস্বরূপ আপনি `light.kitchen`-এর অবস্থা এভাবে পেতে পারেন: `hass.states['light.kitchen'].state`, অথবা কোনো অ্যাট্রিবিউট এভাবে: `hass.states[entity].attributes.brightness`।

- `this` আপনার সেটআপ ও ড্যাশবোর্ড সম্পর্কে অনেক দরকারি তথ্য রিটার্ন করবে, শুধু তখনই এটি ব্যবহার করুন যখন আপনি জানেন আপনি কী করছেন।

</details>

<details>

<summary>ফাংশন</summary>

<br>

আপনি সব গ্লোবাল JS ফাংশন ব্যবহার করতে পারেন, তবে এগুলোও আপনার জন্য উপলব্ধ:

- `getWeatherIcon` আবহাওয়া রিটার্ন করে এমন কোনো অবস্থার ভিত্তিতে একটি আবহাওয়া আইকন পেতে ব্যবহার করা যায়। উদাহরণস্বরূপ, তৃতীয় সাব-বাটনের আইকনকে আজকের আবহাওয়ার আইকনে বদলাতে আপনি এটি করতে পারেন: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, আর `.forecast[1]?.condition` হলো আগামীকালের জন্য...

  এর জন্য আপনাকে একটি টেমপ্লেট সেন্সর তৈরি করতে হবে। আপনার `configuration.yaml`-এ যা যোগ করতে পারেন তা এখানে:
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
- `checkConditionsMet(conditions, hass)` একটি [শর্তের](#শর্ত) তালিকা পূরণ হলে `true` ফেরত দেয়, যেমন `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`।
- `hass.formatEntityState(state)` কোনো অবস্থা অনুবাদ করতে ব্যবহার করা যায় (অবস্থার একক পেতেও ব্যবহার করা যায়, আলাদাভাবে যোগ করার প্রয়োজন ছাড়াই)।
- `hass.formatEntityAttributeValue(state, "attribute")` কোনো অ্যাট্রিবিউট অনুবাদ করতে ব্যবহার করা যায় (অবস্থার একক পেতেও ব্যবহার করা যায়, আলাদাভাবে যোগ করার প্রয়োজন ছাড়াই)।

</details>

#### উদাহরণ

নিচে আপনি অনেক উদাহরণ পাবেন, তবে আমার [Patreon পেজেও](https://www.patreon.com/c/Clooos) খুবই অ্যাডভান্সড কিছু টেমপ্লেট পাবেন, যেমন একটি (আমার প্রিয়) যা কার্ডের আইকনের চারপাশে চারটি পর্যন্ত শর্তসাপেক্ষ ব্যাজ রাখতে দেয়। Bubble Card-এর কাস্টম স্টাইল ও টেমপ্লেটের সব সম্ভাবনা সম্পর্কে জানার এটিও একটি দারুণ উপায়!

<details>
<summary>আমার Patreon পেজের উদাহরণ</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">যেকোনো কার্ডে Home Assistant-এর মতো ব্যাজ যোগ করা</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">কোনো এনটিটি ব্যবহার না করেই বিভাজকে ফরম্যাট করা তারিখ ও সময় দেখানো</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">সাব-বাটনের অবস্থা দুই লাইনে দেখানো</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">সিলেক্ট সাব-বাটনের ভিতরের লেবেল ও আইকন কাস্টমাইজ করা</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">শুধু প্রয়োজনের সময় দেখা যায় এমন একটি স্থায়ী রিমাইন্ডার পপ-আপ যোগ করা</a>
</p>

<br>

</details>

<details>

<summary>বাটনের ব্যাকগ্রাউন্ডের রং পরিবর্তন করা, যা <code>off</code> অবস্থায় লাল এবং <code>on</code> অবস্থায় নীল</summary>

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

<summary>অনুভূমিক বাটন স্ট্যাকের জন্য কোনো এনটিটির ভিত্তিতে বাটনের ব্যাকগ্রাউন্ডের রং পরিবর্তন করা</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>শর্তসাপেক্ষে সাব-বাটন দেখানো/লুকানো</summary>

<br>

এটি শুধু তখনই প্রথম সাব-বাটনটি দেখায় যখন আমার ভ্যাকুয়াম আটকে যায়।
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

এটি ব্যাটারি ১০%-এর নিচে নামলে একটি সাব-বাটন দেখায়। "Low battery" দেখায় এমন একটি সাব-বাটনের সাথে দরকারি।
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>শর্তসাপেক্ষে কোনো আইকন বা সাব-বাটনের আইকন পরিবর্তন করা</summary>

<br>

এটি শুধু ভ্যাকুয়াম আটকে গেলে বাটনের আইকন পরিবর্তন করে।
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

এটি শুধু ভ্যাকুয়াম আটকে গেলে প্রথম সাব-বাটনের আইকন পরিবর্তন করে।
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>শর্তসাপেক্ষে কোনো আইকন বা সাব-বাটনের আইকনের রং পরিবর্তন করা</summary>

<br>

এটি অবস্থার ভিত্তিতে বাটনের আইকনের রং পরিবর্তন করে।
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

এটি অবস্থার ভিত্তিতে সাব-বাটনের আইকনের রং পরিবর্তন করে। `.bubble-sub-button-1` হলো প্রথম সাব-বাটন, অন্য কোনো সাব-বাটনের আইকন পরিবর্তন করতে চাইলে `1` বদলে দিন।
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>শর্তসাপেক্ষে ফ্যানের আইকন অ্যানিমেট করা</summary>

<br>

এটি ফ্যান `on` থাকলে বাটনের আইকন ঘোরায়।
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

<summary>টেক্সট টেমপ্লেট করা (যেমন নাম বা অবস্থা)</summary>

<br>

এটি আপনার আবহাওয়ার ভিত্তিতে বাটনের নাম/অবস্থা "It's currently sunny" দিয়ে পরিবর্তন করে।
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
অথবা সাব-বাটনের ক্ষেত্রে প্রয়োগ করলে:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


আপনি যদি অবস্থা (`.bubble-state`) টেমপ্লেট করতে চান, তাহলে `show_state: true` চালু করবেন না, শুধু কোনো অ্যাট্রিবিউট ছাড়াই `show_attribute: true` চালু করুন।

</details>

<details>

<summary>অ্যাডভান্সড উদাহরণ: পপ-আপ খোলা থাকলে সাব-বাটনের রং পরিবর্তন করা</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>অ্যাডভান্সড উদাহরণ: আপনার ভাষায় অনূদিত অবস্থার ভিত্তিতে বিভাজকের নাম টেমপ্লেট করা</summary>

<br>

আপনি কোনো অবস্থা অনুবাদ করতে `hass.formatEntityState(state)` এবং কোনো অ্যাট্রিবিউট অনুবাদ করতে `hass.formatEntityAttributeValue(state, "attribute")` ব্যবহার করতে পারেন।

এটি আবহাওয়ার ভিত্তিতে নাম ও আইকন পরিবর্তন করে, "Nuageux" মানে ফরাসি ভাষায় "মেঘলা"।

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

## মডিউল

মডিউল একটি শক্তিশালী ফিচার, যা আপনাকে আপনার কাস্টম স্টাইল ও টেমপ্লেট সংরক্ষণ, পুনঃব্যবহার এবং আপনার সব Bubble Card-এ শেয়ার করতে দেয়। একই কোড একাধিক কার্ডে কপি-পেস্ট করার বদলে, আপনি একটি মডিউল তৈরি করে যেখানে দরকার সেখানে প্রয়োগ করতে পারেন। এতে আপনার ড্যাশবোর্ডের চেহারা পরিচালনা করা অনেক সহজ ও কার্যকর হয়ে যায়।

তবে এই ফিচারটি এর চেয়েও অনেক বেশি শক্তিশালী, সব ডিফল্ট [Home Assistant ফর্ম](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) অপশন ব্যবহার করে আপনি নিজেই Bubble Card এডিটরে সত্যিকারের ফিচার যোগ করতে পারেন!  
অবজেক্ট সিলেক্টরটি উন্নত করা হয়েছে যাতে এটি লাইভ পরিবর্তন দেখায় এবং অ্যাট্রিবিউট সঠিকভাবে সাপোর্ট করে।

একটি মডিউল বিল্ট-ইন [এনটিটি সাজেশনের](#এনটিটি-সাজেশন) পাশাপাশি Home Assistant কার্ড পিকারেও উত্তর দিতে পারে: আগেভাগে বর্ণনা করা যায় এমন কার্ডের জন্য `suggestions` ব্যবহার করুন, আর আপনার সেটআপ থেকে হিসাব করতে হলে `suggestions_code`, যেমন বাছাই করা এনটিটি যে এরিয়ার অন্তর্গত সেই এরিয়ার সব এনটিটি দিয়ে তৈরি একটি পপ-আপ। দুটি কী-ই [এখানে](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) নথিভুক্ত।

আপনি **Module Store** ব্রাউজ করে [কমিউনিটির তৈরি মডিউল](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) খুঁজে ইনস্টল করতে পারেন, অথবা নিজের তৈরি মডিউলও শেয়ার করতে পারেন!

> [!TIP]
> একটি মডিউলের কোড কার্ডের `styles` সেকশনের কোডের মতোই কাজ করে। [টেমপ্লেট](#টেমপ্লেট) সেকশনের সব ভ্যারিয়েবল ও ফাংশন এখানেও উপলব্ধ।

<br>

### প্রাথমিক সেটআপ

> [!IMPORTANT]
> v3.1.0 থেকে, মডিউলের জন্য প্রস্তাবিত স্টোরেজ ব্যাকএন্ড হলো Bubble Card Tools। পুরোনো টেমপ্লেট সেন্সর পদ্ধতি বিদ্যমান সেটআপে এখনও কাজ করে, তবে নতুন মডিউল ও Module Store-এর ফিচারগুলো Bubble Card Tools-এর মাধ্যমেই সবচেয়ে ভালো সাপোর্ট পায়।

Bubble Card Tools ইন্টিগ্রেশন মডিউল এডিটর ও Module Store চালু করে এবং মডিউলগুলো আলাদা আলাদা YAML ফাইল হিসেবে সংরক্ষণ করে। বিদ্যমান মডিউলগুলো স্বয়ংক্রিয়ভাবে মাইগ্রেট হয়।

ইনস্টলেশন ও কনফিগারেশনের ধাপগুলো এখানে ব্যাখ্যা করা আছে:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### মডিউল এডিটর

যেকোনো কার্ডের সেটিংস থেকে, **মডিউল** সেকশনের অধীনে, আপনি মডিউল এডিটরে যেতে পারেন। এডিটরে দুটি প্রধান ট্যাব আছে:

#### আমার মডিউল ট্যাব

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

এই ট্যাবে আপনার ইনস্টল করা সব মডিউল দেখা যায় এবং আপনি এখানে পারেন:

- বিদ্যমান মডিউল বর্তমান কার্ডে **প্রয়োগ** করতে
- শুরু থেকে নতুন মডিউল **তৈরি** করতে
- লাইভ প্রিভিউসহ বিদ্যমান মডিউল **সম্পাদনা** করতে
- আর দরকার নেই এমন মডিউল **মুছতে**
- মডিউল **খুঁজতে** ও **সাজাতে** (বর্ণানুক্রমিক, সাম্প্রতিক, সক্রিয়গুলো আগে)
- কোনো মডিউল স্বয়ংক্রিয়ভাবে সব কার্ডে প্রয়োগ করতে **গ্লোবাল স্ট্যাটাস নির্ধারণ** করতে
- ব্যাকআপ বা শেয়ারের জন্য মডিউল **ইমপোর্ট/এক্সপোর্ট** করতে
- মডিউল এডিটরে **এনটিটি সাজেশন লিখতে**, **ঐচ্ছিক: এনটিটি সাজেশন**-এর নিচে, যাতে আপনার মডিউল Home Assistant কার্ড পিকারে দেখানো হয়। লেখার সঙ্গে সঙ্গেই রুল ও গণনা করা সাজেশন দুটোই যাচাই হয়, সেখানে ত্রুটি থাকলে সংরক্ষণ করা যায় না, আর প্রিভিউ আপনার বাছাই করা যেকোনো এনটিটির জন্য প্রস্তাবিত কার্ড দেখায়

#### Module Store ট্যাব

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

এই ট্যাবে [কমিউনিটির সব উপলব্ধ মডিউল](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) দেখা যায়, এবং আপনি এখানে পারেন:

- কমিউনিটির তৈরি সব মডিউল **ব্রাউজ** করতে
- নাম, সামঞ্জস্য বা কিওয়ার্ড দিয়ে মডিউল **খুঁজতে** ও ফিল্টার করতে
- এক ক্লিকে মডিউল **ইনস্টল** করতে
- নতুন সংস্করণ উপলব্ধ হলে ইনস্টল করা মডিউল **আপডেট** করতে

> [!TIP]
> এডিটরে আপনি অসমর্থিত মডিউল চালু করতে পারেন, যাতে কোনো কার্ডের ধরনের সাথে এখনও সামঞ্জস্যপূর্ণ চিহ্নিত হয়নি এমন মডিউল পরীক্ষা করা যায়।

<br>

### মডিউল কীভাবে ব্যবহার করবেন

#### নতুন মডিউল তৈরি করা

<details>

<summary>বিস্তারিত দেখতে ক্লিক করুন</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. যেকোনো কার্ডের এডিটরে গিয়ে **মডিউল** সেকশনটি খুলুন।
2. **নতুন মডিউল তৈরি করুন**-এ ক্লিক করুন।
3. মডিউলের তথ্য পূরণ করুন।
4. **কোড** এডিটরে আপনার CSS এবং/অথবা JavaScript টেমপ্লেট কোড লিখুন।
5. (ঐচ্ছিক) **এডিটর** সেকশনে একটি কাস্টম কনফিগারেশন UI তৈরি করুন (যেমন উপরের স্ক্রিনশটের কালার পিকার, সম্পূর্ণ ডকুমেন্টেশন পাবেন [এখানে](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md))।
6. (ঐচ্ছিক) আপনার **এনটিটি সাজেশন** লিখুন, যাতে আপনার মডিউল Home Assistant কার্ড পিকারে দেখানো হয়। প্যানেলটি আপনার লেখার সঙ্গে সঙ্গেই যাচাই করে, আর তার প্রিভিউ আপনার পছন্দের এনটিটির জন্য প্রস্তাবিত কার্ডগুলোই দেখায়।
7. **সংরক্ষণ করুন**-এ ক্লিক করুন।

আপনার মডিউল এখন আপনার যেকোনো কার্ডে ব্যবহারের জন্য প্রস্তুত!

<br>

</details>

#### কোনো কার্ডে মডিউল প্রয়োগ করা

<details>

<summary>বিস্তারিত দেখতে ক্লিক করুন</summary>

<br>

- **এডিটরের মাধ্যমে:**

  - যে কার্ডে মডিউলটি প্রয়োগ করতে চান তার এডিটরে যান।
  - **মডিউল** সেকশনটি খুলুন।
  - তালিকা থেকে যে মডিউলটি প্রয়োগ করতে চান তাতে ক্লিক করুন।
  - "যেখানে প্রয়োগ হবে"-এর অধীনে, "এই কার্ড"-এ ক্লিক করুন। মডিউলটি এখন সক্রিয়। আপনি একই কার্ডে একাধিক মডিউল প্রয়োগ করতে পারেন।

- **YAML-এর মাধ্যমে:**

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

#### মডিউল গ্লোবালভাবে প্রয়োগ করা

<details>

<summary>বিস্তারিত দেখতে ক্লিক করুন</summary>

<br>

আপনি একটি মডিউলকে সব Bubble Card-এ স্বয়ংক্রিয়ভাবে প্রয়োগ হওয়ার জন্য সেট করতে পারেন:

**এডিটরসহ মডিউলের জন্য এটি উপলব্ধ নয়, কারণ সেগুলোর কাজ করতে একটি নির্দিষ্ট কনফিগারেশন প্রয়োজন।**

- **এডিটরের মাধ্যমে:**

  - মডিউল এডিটরের **আমার মডিউল** ট্যাবে আপনার মডিউলটি খুঁজুন।
  - মডিউলের নামের পাশের **সব কার্ড** বাটনটি চালু করুন।
  - মডিউলটি এখন থেকে স্বয়ংক্রিয়ভাবে সব কার্ডে প্রয়োগ হবে।
 
- **YAML-এর মাধ্যমে:**

  আপনার মডিউলের YAML কনফিগারেশনে (`bubble-modules.yaml`-এ), শুধু `is_global: true` যোগ করুন।

<br>

</details>

#### গ্লোবাল মডিউল থেকে একটি নির্দিষ্ট কার্ড বাদ দেওয়া

<details>

<summary>বিস্তারিত দেখতে ক্লিক করুন</summary>

<br>

আপনার একটি গ্লোবাল মডিউল আছে কিন্তু কোনো নির্দিষ্ট কার্ড থেকে সেটি বাদ দিতে চাইলে:

- **এডিটরের মাধ্যমে:**
  
  - কার্ডের **মডিউল** সেকশনে গ্লোবাল মডিউলগুলোর তালিকা দেখতে পাবেন।
  - কোনো গ্লোবাল মডিউলে ক্লিক করে, "এই কার্ড" বন্ধ করে দিন, তাহলে এই নির্দিষ্ট কার্ড থেকে সেটি বাদ যাবে।

- **YAML-এর মাধ্যমে:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### আপনার মডিউল Module Store-এ শেয়ার করা

<details>

<summary>বিস্তারিত দেখতে ক্লিক করুন</summary>

<br>

আপনার মডিউল Module Store-এ শেয়ার করতে, মডিউল এডিটরের একেবারে নিচে "মডিউল এক্সপোর্ট করুন"-এ, "GitHub-এর জন্য কপি করুন"-এ ক্লিক করুন এবং কনটেন্টটি [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) ক্যাটাগরিতে একটি নতুন ডিসকাশনে পেস্ট করুন। **বর্ণনাটি সম্পাদনা করুন** (প্রয়োজনে), **উদাহরণটিও** (YAML ব্যবহারকারীদের জন্য), এবং Module Store-এর জন্য **অন্তত একটি স্ক্রিনশট যোগ করতে** ভুলবেন না।

**এরপরই আপনার মডিউল উপলব্ধ হয়ে যায়** (Store রিফ্রেশের পরে), তাই সবকিছু সঠিকভাবে লেখা হয়েছে এবং মডিউলটি প্রত্যাশামতো কাজ করছে কিনা তা ভালো করে দেখে নিন। শেয়ার করার পরেও আপনি অবশ্যই মডিউলটি সম্পাদনা/আপডেট করতে পারবেন।

<br>

</details>

#### সংস্করণ ব্যবস্থাপনা

<details>

<summary>বিস্তারিত দেখতে ক্লিক করুন</summary>

<br>

Module Store স্বয়ংক্রিয়ভাবে ইনস্টল করা মডিউলের আপডেট পরীক্ষা করে। আপডেট উপলব্ধ হলে:

1. **Module Store** ট্যাবে একটি আপডেট নির্দেশক দেখতে পাবেন।
2. যে মডিউলে আপডেট উপলব্ধ, সেখানে **আপডেট**-এ ক্লিক করুন।
3. Module Store-এ আপডেটটি নিশ্চিত করুন।

<br>

</details>

#### সমর্থিত কার্ডের ধরন নির্ধারণ করা

<details>

<summary>বিস্তারিত দেখতে ক্লিক করুন</summary>

<br>

কিছু মডিউল সব ধরনের কার্ডের সাথে সামঞ্জস্যপূর্ণ নাও হতে পারে। একটি মডিউল কোন কোন কার্ড সাপোর্ট করে তা আপনি নির্দিষ্ট করে দিতে পারেন।  
আপনি চাইলে একটি মডিউল **সব কার্ডের** সাথে সামঞ্জস্যপূর্ণ হোক, তাহলে শুধু `supported` ফিল্ডটি বাদ দিন (অথবা এডিটরে **সব কার্ড** অপশনটি ব্যবহার করুন)।

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

### উদাহরণ

<details>
<summary>বেসিক স্টাইলিং মডিউল</summary>

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
<summary>কাস্টম কনফিগারেশনসহ মডিউল</summary>

<br>

এই মডিউলটি পাবেন [এখানে](https://github.com/Clooos/Bubble-Card/discussions/1231)।

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

আরও উদাহরণ পাবেন Module Store-এ, অথবা [এখানে](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)।

<br>

---

<br>

## লোকালাইজেশন

Bubble Card আপনার ভাষায় কথা বলে। Home Assistant যে 64টি ভাষা সমর্থন করে, এর এডিটর সেগুলোতেই অনূদিত, আর কোনো কিছুর জন্য Home Assistant-এর নিজের শব্দ থাকলে সেটিই ব্যবহার করা হয়, ফলে দুই ইন্টারফেসেই একই পরিভাষা পড়েন।

এডিটরের নিচে, সংস্করণ নম্বরের পাশে, একটি **স্বয়ংক্রিয়** সুইচ আপনার Home Assistant ভাষা অনুসরণ করে। এটি বন্ধ করলে পুরো এডিটর ইংরেজিতে ফিরে যায়, যা কোনো টিউটোরিয়াল অনুসরণ করতে বা সমস্যা জানাতে কাজে লাগে। আপনার পছন্দ ব্রাউজারে মনে রাখা হয়।

এই ডকুমেন্টেশনও অনূদিত, [62টি ভাষায়](languages.md), ব্রিটিশ ইংরেজি ছাড়া সবগুলোতেই, যেটি মূল লেখাই দেখায়। ওই পাতাগুলো সবার জন্য খোলা, তাই আপনার Home Assistant-এর সঙ্গে না মেলা কোনো শব্দচয়ন কয়েক ক্লিকেই ঠিক করা যায়। বিষয়বস্তুর জন্য ইংরেজি সংস্করণই মূল রেফারেন্স থাকে।

<br>

---

<br>

## সাহায্য

কিছু প্রত্যাশামতো কাজ না করলে নির্দ্বিধায় একটি ইস্যু খুলুন। 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card নিয়ে কোনো প্রশ্ন বা মতামত আছে? আপনার ড্যাশবোর্ড বা নতুন আবিষ্কার শেয়ার করতে চান? আপনি Home Assistant ফোরামে, Bubble Card সাবরেডিটে বা GitHub-এর Discussions সেকশনে যেতে পারেন।

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## অবদান রাখা

অবদান সাদরে গ্রহণ করা হয়! বাগ ফিক্স, নতুন ফিচার, অনুবাদ বা ডকুমেন্টেশনের উন্নতি, যা-ই হোক না কেন, নির্দ্বিধায় একটি পুল রিকোয়েস্ট খুলুন।

শুরু করার আগে, অনুগ্রহ করে [ডেভেলপার গাইড](DEVELOPERS.md) পড়ুন, যেখানে লোকাল এনভায়রনমেন্ট সেট আপ করা, প্রজেক্ট বিল্ড করা এবং আপনার পরিবর্তন পরীক্ষা করার পদ্ধতি ব্যাখ্যা করা আছে।

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## অনুদান

এই প্রজেক্টকে যতটা সম্ভব সেরা করে তুলতে আমি আমার অবসর সময়ের বেশিরভাগটাই ব্যয় করি। তাই আমার কাজ ভালো লাগলে, যেকোনো অনুদান আপনার সমর্থন জানানোর একটি চমৎকার উপায় হবে 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

আপনাদের সবাইকে সমর্থনের জন্য ধন্যবাদ, আপনারাই আমার সবচেয়ে বড় অনুপ্রেরণা!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
