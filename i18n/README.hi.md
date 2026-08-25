<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> यह पेज एक स्वचालित अनुवाद है। संदेह होने पर [मूल अंग्रेज़ी दस्तावेज़](../README.md) ही मान्य है। क्या कोई वाक्य गलत लग रहा है? हर मदद का स्वागत है, और [इस पेज को ठीक करने](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.hi.md) में सिर्फ़ एक मिनट लगता है: फ़ोर्क और पुल रिक्वेस्ट का काम GitHub खुद संभाल लेता है। आपका पहले से धन्यवाद! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[इसे किसी अन्य भाषा में पढ़ें](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card, Home Assistant के लिए एक न्यूनतम और कस्टमाइज़ेबल कार्ड संग्रह है, जिसमें आधुनिक पॉप-अप और 100 से अधिक कम्युनिटी-निर्मित मॉड्यूल वाला एक इंटीग्रेटेड Module Store शामिल है।

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## विषय सूची

**[`इंस्टॉलेशन`](#इंस्टॉलेशन)**  **[`कॉन्फ़िगरेशन`](#कॉन्फ़िगरेशन)**  **[`एंटिटी सुझाव`](#एंटिटी-सुझाव)**  **[`पॉप-अप`](#पॉप-अप)**  **[`हॉरिज़ॉन्टल बटन स्टैक`](#हॉरिज़ॉन्टल-बटन-स्टैक)**  **[`बटन`](#बटन)**  **[`मीडिया प्लेयर`](#मीडिया-प्लेयर)**  **[`कवर`](#कवर)**  **[`सेलेक्ट`](#सेलेक्ट)**  **[`क्लाइमेट`](#क्लाइमेट)**  **[`कैलेंडर`](#कैलेंडर)**  **[`सेपरेटर`](#सेपरेटर)**  **[`खाली कॉलम`](#खाली-कॉलम)**  **[`केवल सब-बटन`](#केवल-सब-बटन)**  **[`सब-बटन`](#सब-बटन)**  **[`कार्ड लेआउट`](#कार्ड-लेआउट)**  **[`शर्तें`](#शर्तें)**  **[`एक्शन`](#टैप-डबल-टैप-और-होल्ड-एक्शन)**  **[`स्टाइलिंग`](#स्टाइलिंग)**  **[`टेम्पलेट`](#टेम्पलेट)**  **[`मॉड्यूल`](#मॉड्यूल)**  **[`स्थानीयकरण`](#स्थानीयकरण)**  **[`सहायता`](#सहायता)**  **[`योगदान`](#योगदान)**  **[`दान करें`](#दान-करें)**

<br>

## इंस्टॉलेशन

**Home Assistant का न्यूनतम समर्थित संस्करण:** 2023.9.0

<details>

<summary>बिना HACS के</summary>

<br>

1. यह फ़ाइल डाउनलोड करें: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. इस फ़ाइल को अपने `<config>/www` फ़ोल्डर में डालें। एडिटर को अपनी भाषा में पाने के लिए [dist फ़ोल्डर](https://github.com/Clooos/Bubble-Card/tree/main/dist) से `bubble-card-<lang>.json` भी डाउनलोड करें, जैसे `bubble-card-fr.json`, और उसे `bubble-card.js` के बगल में रखें (उसके बिना एडिटर अंग्रेज़ी में ही रहता है)
3. अपने डैशबोर्ड पर, ऊपर दाईं ओर के आइकन पर क्लिक करें, फिर `Edit dashboard` पर
4. उसी आइकन पर फिर से क्लिक करें और फिर `Manage resources` पर क्लिक करें
5. `Add resource` पर क्लिक करें
6. इसे कॉपी करके पेस्ट करें: `/local/bubble-card.js?v=1`
7. `JavaScript Module` पर क्लिक करें फिर `Create` पर
8. वापस जाएं और अपना पेज रीफ्रेश करें
9. अब आप नीचे दाईं ओर `Add card` पर क्लिक कर सकते हैं और `Bubble Card` खोज सकते हैं
10. फ़ाइल के किसी भी अपडेट के बाद आपको `/local/bubble-card.js?v=1` को एडिट करके संस्करण को किसी भी बड़ी संख्या में बदलना होगा

अगर यह काम नहीं कर रहा है, तो बस अपना ब्राउज़र कैश साफ करने की कोशिश करें।

</details>

<details>

<summary>HACS के साथ (अनुशंसित)</summary>

<br>

यह तरीका आपको सीधे Home Assistant Community Store पर अपडेट पाने की सुविधा देता है

1. अगर HACS अभी तक इंस्टॉल नहीं है, तो [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) पर दिए निर्देशों के अनुसार इसे डाउनलोड करें
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) पर दिए निर्देशों के अनुसार HACS की शुरुआती कॉन्फ़िगरेशन पूरी करें
3. अपने साइडबार में "HACS" पर जाएं
4. "Bubble Card" खोजें, या नीचे दिए नीले बटन पर क्लिक करें
5. "Download" पर क्लिक करें
6. वापस अपने डैशबोर्ड पर जाएं और ऊपर दाईं ओर के आइकन पर क्लिक करें, फिर `Edit dashboard` पर
7. अब आप नीचे दाईं ओर `Add card` पर क्लिक कर सकते हैं और `Bubble Card` खोज सकते हैं

अगर यह काम नहीं कर रहा है, तो अपना ब्राउज़र/ऐप कैश साफ करने की कोशिश करें (ज़रूरत पड़ने पर अपने सभी डिवाइस पर)।

#### वीडियो

आप चरण दर चरण वीडियो के लिए मेरे YouTube चैनल पर भी नज़र डाल सकते हैं।

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## कॉन्फ़िगरेशन

सभी विकल्पों को Home Assistant के एडिटर में कॉन्फ़िगर किया जा सकता है। लेकिन नीचे दी गई डॉक्यूमेंटेशन में आपको अधिक जानकारी और YAML मिल सकता है।

<details>

<summary><b>मुख्य विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `type` | string | **आवश्यक** | `custom:bubble-card` | कार्ड का प्रकार |
| `card_type` | string | **आवश्यक** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` या `sub-buttons` | Bubble Card का प्रकार, नीचे देखें |
| `styles` | object list | वैकल्पिक | कोई भी CSS स्टाइलशीट | आपको अपने Bubble Card के CSS को कस्टमाइज़ करने देता है, देखें [स्टाइलिंग](#स्टाइलिंग) |

</details>

<details>

<summary><b>ग्लोबल CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित मान | विवरण |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | सभी समर्थित एलिमेंट के लिए बॉर्डर रेडियस |
| `--bubble-main-background-color` | `color` | सभी समर्थित एलिमेंट के लिए मुख्य बैकग्राउंड कलर |
| `--bubble-secondary-background-color` | `color` | सभी समर्थित एलिमेंट के लिए सेकेंडरी बैकग्राउंड कलर |
| `--bubble-accent-color` | `color` | सभी समर्थित एलिमेंट के लिए एक्सेंट कलर |
| `--bubble-icon-border-radius` | `px` | सभी समर्थित एलिमेंट के लिए आइकन बॉर्डर रेडियस |
| `--bubble-icon-background-color` | `color` | सभी समर्थित एलिमेंट के लिए आइकन बैकग्राउंड कलर |
| `--bubble-sub-button-border-radius` | `px` | सभी सब-बटन के लिए बॉर्डर रेडियस |
| `--bubble-sub-button-background-color` | `color` | सभी सब-बटन के लिए बैकग्राउंड कलर |
| `--bubble-box-shadow` | देखें [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | सभी समर्थित एलिमेंट के लिए बॉक्स शैडो |
| `--bubble-border` | देखें [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | सभी समर्थित कार्ड के लिए बॉर्डर |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card और इसकी क्षमताओं के बारे में जानने के लिए यह [वीडियो](https://www.youtube.com/watch?v=0hSQOlBxKKI) देखें।** मेरा YouTube चैनल काफी नया है और Home Assistant एवं Bubble Card पर ट्यूटोरियल पर केंद्रित है। मेरे चैनल की विज़िबिलिटी बढ़ाने में मदद के लिए सब्सक्राइब करने में संकोच न करें। अग्रिम धन्यवाद!

<br>

---

<br>

## एंटिटी सुझाव

Home Assistant 2026.6 से, कार्ड पिकर में कोई एंटिटी चुनने पर आपको कुछ तैयार कार्ड दिखाए जाते हैं, और Bubble Card उस सूची में अपनी रेसिपी जोड़ता है। कोई लाइट चुनें और आपको ब्राइटनेस स्लाइडर वाला एक कार्ड मिलेगा, साथ ही कलर टेम्परेचर, कलर और सैचुरेशन वाले वेरिएंट भी, जब आपकी लाइट उन्हें सपोर्ट करती हो। कोई कवर चुनें और आपको उसका पोज़िशन स्लाइडर मिलेगा, कोई मीडिया प्लेयर चुनें और आपको उसकी सोर्स सूची वाला वेरिएंट भी मिलेगा, कोई वैक्यूम चुनें और आपको उसके स्टार्ट, पॉज़ और डॉक बटन मिलेंगे। हर सुझाव एक सामान्य Bubble Card कॉन्फ़िगरेशन है जो लाइव प्रीव्यू के रूप में दिखाया जाता है, इसलिए आप सबसे नज़दीकी सुझाव लेकर उसे हमेशा की तरह संपादित करते रह सकते हैं।

आपको क्या दिखाया जाता है यह इस पर निर्भर करता है कि आपकी एंटिटी असल में क्या कर सकती है: ब्राइटनेस चैनल के बिना लाइट को स्लाइडर की जगह टॉगल मिलता है, जो कवर टिल्ट नहीं कर सकता उसे टिल्ट वेरिएंट नहीं मिलता, और क्लाइमेट एंटिटी को उसके प्रीसेट मोड तभी मिलते हैं जब उसके पास हों। लागू होने पर क्लासिक विकल्प Bubble Card के सुझावों के नीचे आते हैं: उस एंटिटी प्रकार के लिए समर्पित कार्ड, एक साधारण बटन और एक स्लाइडर।

> [!TIP]
> मॉड्यूल उस सूची में अपने सुझाव जोड़ सकते हैं, [मॉड्यूल](#मॉड्यूल) देखें।

<br>

---

<br>

## पॉप-अप

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

यह कार्ड आपको किसी भी कंटेंट के साथ पॉप-अप बनाने की सुविधा देता है। हर पॉप-अप **डिफ़ॉल्ट रूप से छिपा हुआ** होता है और इसे इसके लिंक को टार्गेट करके (जैसे `'#pop-up-name'`), `navigate` [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) को सपोर्ट करने वाले किसी भी कार्ड से, या साथ में शामिल [हॉरिज़ॉन्टल बटन स्टैक](#हॉरिज़ॉन्टल-बटन-स्टैक) से खोला जा सकता है।

> [!TIP]
> ### पॉप-अप ट्रिगर
> यह फीचर आपको किसी भी एंटिटी की स्थिति के आधार पर पॉप-अप खोलने की सुविधा देता है, उदाहरण के लिए, आप घर के सामने कोई व्यक्ति होने पर कैमरे वाला "Security" पॉप-अप खोल सकते हैं। आप एक टॉगल हेल्पर (input_boolean) भी बना सकते हैं और किसी ऑटोमेशन में इसके खुलने/बंद होने को ट्रिगर कर सकते हैं।
> <details>
> <summary>जब <code>binary_sensor</code>, <code>on</code> हो तब पॉप-अप खोलना</summary>
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
> ### पॉप-अप बंद करने के अलग-अलग तरीके
> पॉप-अप बंद करने के कई तरीके हैं। उदाहरण के लिए, आप पॉप-अप हेडर से नीचे की ओर स्वाइप कर सकते हैं, पॉप-अप के अंदर नीचे तक लंबा स्वाइप करके, डेस्कटॉप पर Escape दबाकर, URL से hash हटाकर, या बस क्लोज बटन दबाकर।
>


### पॉप-अप विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `hash` | string | **आवश्यक** | कोई भी यूनिक hash (जैसे `'#kitchen'`) ' ' के साथ | आप इसी से अपना पॉप-अप खोलेंगे |
| `popup_style` | string | वैकल्पिक | `bubble` (डिफ़ॉल्ट) या `classic` | पॉप-अप की विज़ुअल स्टाइल तय करें |
| `popup_mode` | string | वैकल्पिक | `default` (डिफ़ॉल्ट), `fit-content`, `centered` या `adaptive-dialog` | पॉप-अप का लेआउट मोड तय करें |
| `with_bottom_offset` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | केवल `popup_mode: fit-content` या `adaptive-dialog` के साथ इस्तेमाल होता है। मोबाइल पर बॉटम ऑफसेट लागू करता है, यह तब उपयोगी है जब आपके डैशबोर्ड में फुटर कार्ड शामिल हो। |
| `full_width_on_mobile` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | केवल `popup_mode: centered` के साथ इस्तेमाल होता है। पॉप-अप को मोबाइल पर पूरी स्क्रीन चौड़ाई तक बढ़ाता है, छोटी डिस्प्ले पर उपयोगी। |
| `performance_mode` | string | वैकल्पिक | `default` (डिफ़ॉल्ट) या `performance` | पॉप-अप के ओपन एनीमेशन को ऑप्टिमाइज़ करता है। `performance` कंटेंट रेंडरिंग और बैकग्राउंड ब्लर को थोड़ा विलंबित करता है, साथ ही सेट होने पर बैकड्रॉप ब्लर को भी बंद कर देता है। |
| `auto_close` | string | वैकल्पिक | मिलीसेकंड में एक टाइमआउट (जैसे 10 सेकंड के लिए `10000`) | टाइमआउट के बाद पॉप-अप को अपने आप बंद करें |
| `close_on_click` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | किसी भी इंटरैक्शन के बाद पॉप-अप को अपने आप बंद करें |
| `close_by_clicking_outside` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | पॉप-अप के बाहर क्लिक करके उसे बंद करें |
| `width_desktop` | string | वैकल्पिक | कोई भी CSS मान | डेस्कटॉप पर चौड़ाई (मोबाइल पर डिफ़ॉल्ट रूप से `100%`) |
| `margin` | string | वैकल्पिक | कोई भी CSS मान | इसे **केवल** तब इस्तेमाल करें जब आपका पॉप-अप मोबाइल पर ठीक से सेंटर में न हो (जैसे `13px`) |
| `margin_top_mobile` | string | वैकल्पिक | कोई भी CSS मान | मोबाइल पर ऊपरी मार्जिन (जैसे अगर आपका हेडर छिपा हुआ है तो `-56px`) |
| `margin_top_desktop` | string | वैकल्पिक | कोई भी CSS मान | डेस्कटॉप पर ऊपरी मार्जिन (जैसे आधे आकार के पॉप-अप के लिए `50vh` या `400px` की फिक्स्ड ऊंचाई के लिए `calc(100vh - 400px)`) |
| `bg_color` | string | वैकल्पिक | कोई भी hex, rgb या rgba मान | आपके पॉप-अप का बैकग्राउंड कलर (जैसे सफेद बैकग्राउंड के लिए `#ffffff`) |
| `bg_opacity` | string | वैकल्पिक | `0` से `100` तक कोई भी मान | आपके पॉप-अप की बैकग्राउंड ऑपेसिटी (जैसे कोई पारदर्शिता न रखने के लिए `100`) |
| `bg_blur` | string | वैकल्पिक | `0` से `100` तक कोई भी मान | आपके पॉप-अप का बैकग्राउंड ब्लर इफेक्ट, **यह केवल तभी काम करता है जब `bg_opacity`, `100` पर सेट न हो** (जैसे बिना ब्लर के लिए `0`)|
| `shadow_opacity` | string | वैकल्पिक | `0` से `100` तक कोई भी मान | आपके पॉप-अप की शैडो ऑपेसिटी (जैसे इसे छिपाने के लिए `0`) |
| `hide_backdrop` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने मुख्य डैशबोर्ड के पहले पॉप-अप पर इसे true सेट करें ताकि सभी पॉप-अप पर बैकड्रॉप बंद हो जाए। |
| `background_update` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | पॉप-अप कंटेंट को बैकग्राउंड में अपडेट करें (अनुशंसित नहीं) |
| `trigger` | object या list | वैकल्पिक | देखें [शर्तें](#शर्तें) | शर्तें पूरी होने पर यह पॉप-अप खोलता है |
| `trigger_entity` | string | वैकल्पिक | कोई भी एंटिटी | किसी भी एंटिटी की स्थिति के आधार पर इस पॉप-अप को खोलें, `trigger` का सरल रूप |
| `trigger_state` | string | वैकल्पिक (`trigger_entity` परिभाषित होने पर **आवश्यक**) | कोई भी एंटिटी स्थिति | पॉप-अप खोलने के लिए एंटिटी की स्थिति |
| `trigger_close` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | शर्तें पूरी न रहने पर पॉप-अप बंद करता है। पुरानी `trigger_entity` और `trigger_state` जोड़ी का उपयोग करने पर इसके बजाय डिफ़ॉल्ट `false` होता है |
| `open_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | पॉप-अप खुलने पर कोई एक्शन ट्रिगर करें |
| `close_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | पॉप-अप बंद होने पर कोई एक्शन ट्रिगर करें |
| `show_header` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | पॉप-अप हेडर को पूरी तरह दिखाएं/छिपाएं |
| `show_previous_button` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | क्लोज बटन के बगल में एक पिछला बटन दिखाएं और उपलब्ध होने पर पिछले पॉप-अप पर वापस जाएं |
| `show_close_button` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | बाकी हेडर को दृश्यमान रखते हुए क्लोज बटन दिखाएं या छिपाएं |
| `buttons_position` | string | वैकल्पिक | `right` (डिफ़ॉल्ट) या `left` | हेडर में क्लोज और पिछले बटन की स्थिति |
| `cards` | list | वैकल्पिक | कोई भी Bubble Card, Home Assistant कार्ड या कस्टम कार्ड | अपने पॉप-अप का कंटेंट तय करें। नीचे दिया गया पॉप-अप उदाहरण देखें। |
| पॉप-अप के हेडर के लिए आपको [सभी बटन सेटिंग](#बटन) तक भी पहुंच है। | | वैकल्पिक | | अगर परिभाषित नहीं है तो कोई हेडर नहीं दिखाया जाएगा |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित मान | विवरण |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | पॉप-अप के लिए बॉर्डर रेडियस |
| `--bubble-pop-up-main-background-color` | `color` | पॉप-अप के समर्थित एलिमेंट के लिए मुख्य बैकग्राउंड कलर |
| `--bubble-pop-up-background-color` | `color` | पॉप-अप का बैकग्राउंड कलर |
| `--bubble-backdrop-background-color` | `color` | बैकड्रॉप के लिए बैकग्राउंड कलर |
| पॉप-अप के हेडर के लिए आपको [सभी बटन CSS वेरिएबल](#बटन-विकल्प) तक भी पहुंच है। | | |

</details>


### स्टैंडअलोन पॉप-अप फॉर्मेट (v3.2.0+)

v3.2.0 से, पॉप-अप एक नए स्टैंडअलोन फॉर्मेट का इस्तेमाल करते हैं जहां कंटेंट कार्ड को `cards` विकल्प का इस्तेमाल करके सीधे पॉप-अप के अंदर परिभाषित किया जाता है। इससे बेहतर परफॉरमेंस और सेक्शन आधारित एक नया ड्रैग-एंड-ड्रॉप एडिटिंग अनुभव मिलता है।


#### उदाहरण

<details>

<summary>एक पॉप-अप (स्टैंडअलोन फॉर्मेट)</summary>

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

<summary>पॉप-अप खोलने के लिए एक बटन</summary>

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

## हॉरिज़ॉन्टल बटन स्टैक

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

यह कार्ड पॉप-अप कार्ड का एक अच्छा साथी है, जो आपको संबंधित पॉप-अप खोलने की सुविधा देता है। यह आपके डैशबोर्ड के किसी भी पेज को खोलने की भी सुविधा देता है। इसके अलावा, आप अपने मोशन/ऑक्यूपेंसी सेंसर जोड़ सकते हैं ताकि आपके अभी प्रवेश किए गए कमरे के अनुसार बटन का क्रम अपने आप बदल जाए। यह कार्ड स्क्रॉल किया जा सकता है, हमेशा दिखाई देता रहता है, और फुटर की तरह काम करता है।

> [!IMPORTANT]  
> यह कार्ड आपके व्यू में सबसे आखिरी होना चाहिए (हर कार्ड और पॉप-अप के बाद)। यह किसी भी स्टैक के अंदर नहीं हो सकता।

### हॉरिज़ॉन्टल बटन स्टैक विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `1_link` | string | **आवश्यक** | पॉप-अप का hash (जैसे `'#kitchen'`) ' ' के साथ या कोई भी लिंक | खोलने के लिए एक लिंक |
| `1_name` | string | वैकल्पिक | कोई भी स्ट्रिंग | आपके बटन के लिए एक नाम |
| `1_icon` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके बटन के लिए एक आइकन |
| `1_entity` | string | वैकल्पिक | कोई भी light या light group | उस लाइट का कलर बैकग्राउंड में दिखाएं |
| `1_pir_sensor` | string | वैकल्पिक | कोई भी binary sensor | `auto_order` के लिए कम से कम एक pir सेंसर या ज़्यादा, दरअसल यह किसी भी एंटिटी प्रकार के साथ भी काम करता है, उदाहरण के लिए आप light group जोड़ सकते हैं और क्रम आखिरी बार बदली गई स्थिति के आधार पर बदलेगा। |
| `auto_order` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | `_pir_sensor` के आखिरी बार बदलने के समय के अनुसार बटन का क्रम बदलें, **अगर आपके कोड में कोई `_pir_sensor` नहीं है तो इसे `false` होना चाहिए** |
| `margin` | string | वैकल्पिक | कोई भी CSS मान | इसे **केवल** तब इस्तेमाल करें जब आपका `horizontal-buttons-stack` मोबाइल पर ठीक से सेंटर में न हो (जैसे `13px`) |
| `width_desktop` | string | वैकल्पिक | कोई भी CSS मान | डेस्कटॉप पर चौड़ाई (मोबाइल पर डिफ़ॉल्ट रूप से `100%`) |
| `is_sidebar_hidden` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अगर डेस्कटॉप पर साइडबार छिपा हुआ है तो हॉरिज़ॉन्टल बटन स्टैक की स्थिति ठीक करें (केवल तभी जब आपने इसे खुद छिपाने के लिए कोई बदलाव किया हो) |
| `rise_animation` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | पेज लोड होने के बाद सक्रिय होने वाले एनीमेशन को बंद करने के लिए इसे `false` सेट करें |
| `highlight_current_view` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | वर्तमान hash/व्यू को एक स्मूद एनीमेशन के साथ हाइलाइट करें |
| `hide_gradient` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | ग्रेडिएंट छिपाने के लिए इसे `false` सेट करें |

> [!IMPORTANT]  
> संख्या से शुरू होने वाले वेरिएबल आपके बटन को परिभाषित करते हैं, और बटन जोड़ने के लिए बस इस संख्या को बदलें (नीचे उदाहरण देखें)।

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित मान | विवरण |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | हॉरिज़ॉन्टल बटन स्टैक बटन के लिए बॉर्डर रेडियस |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | हॉरिज़ॉन्टल बटन स्टैक बटन के लिए बैकग्राउंड कलर |

</details>


#### उदाहरण

<details>

<summary>एक हॉरिज़ॉन्टल बटन स्टैक जो ऑक्यूपेंसी सेंसर के आधार पर खुद को पुनर्गठित करता है</summary>

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

## बटन

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

यह कार्ड बहुत बहुमुखी है। इसे **स्विच**, **स्लाइडर**, **स्टेट** या **नाम/टेक्स्ट** बटन के रूप में इस्तेमाल किया जा सकता है।

> [!TIP]
> ### सभी बटन प्रकारों में क्या अंतर है?
>
> - **स्विच बटन:** यह डिफ़ॉल्ट बटन प्रकार है। डिफ़ॉल्ट रूप से, यह एक एंटिटी को टॉगल करता है और इसका बैकग्राउंड कलर एंटिटी की स्थिति या लाइट के रंग के आधार पर बदलता है। आप इसकी एक्शन **Tap action on card** सेक्शन में बदल सकते हैं।
>
> - **स्लाइडर बटन:** यह बटन प्रकार आपको समायोज्य रेंज वाली एंटिटी को नियंत्रित करने देता है। यह लाइट्स को डिम करने के लिए आदर्श है, और इसका फिल कलर लाइट के रंग के अनुसार बदल जाता है। आप इसे बैटरी लेवल जैसे वैल्यू दिखाने के लिए भी इस्तेमाल कर सकते हैं।
>   स्लाइडर के लिए समर्थित एंटिटी:
>   - लाइट (ब्राइटनेस)
>   - मीडिया प्लेयर (वॉल्यूम)
>   - कवर (पोज़िशन)
>   - फैन (प्रतिशत)
>   - क्लाइमेट (तापमान)
>   - इनपुट नंबर और नंबर (वैल्यू)
>   - बैटरी सेंसर (प्रतिशत, केवल पढ़ने योग्य)
>
>   आप **Slider settings** में एंटिटी फ़िल्टर को अक्षम करके किसी भी न्यूमेरिक स्टेट वाली एंटिटी का उपयोग भी कर सकते हैं, फिर `min` और `max` वैल्यू परिभाषित करें। यह विकल्प केवल पढ़ने योग्य है।
>
> - **स्टेट बटन:** किसी सेंसर या किसी भी एंटिटी की जानकारी दिखाने के लिए बिल्कुल सही। जब आप इसे दबाते हैं, तो यह एंटिटी का "More info" पैनल दिखाएगा। इसका बैकग्राउंड कलर नहीं बदलता।
>
> - **नाम/टेक्स्ट बटन:** एकमात्र बटन प्रकार जिसे एंटिटी की आवश्यकता नहीं होती। यह आपको एक छोटा टेक्स्ट, नाम या शीर्षक दिखाने देता है। आप इसमें एक्शन भी जोड़ सकते हैं। इसका बैकग्राउंड कलर नहीं बदलता।

### बटन विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `entity` | string | **आवश्यक** | कोई भी एंटिटी | नियंत्रित करने के लिए एक एंटिटी |
| `button_type` | string | वैकल्पिक | `switch` (डिफ़ॉल्ट), `slider`, `state` या `name` | आपके बटन का व्यवहार |
| `name` | string | वैकल्पिक | कोई भी स्ट्रिंग | आपके बटन के लिए एक नाम, यदि परिभाषित नहीं है तो एंटिटी का नाम दिखेगा |
| `icon` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके बटन के लिए एक आइकन, यदि परिभाषित नहीं है तो एंटिटी का आइकन या `entity-picture` दिखेगा |
| `force_icon` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | `entity-picture` के बजाय आइकन को प्राथमिकता दें |
| `use_accent_color` | boolean | वैकल्पिक (`false` डिफ़ॉल्ट) | **केवल लाइट्स के लिए।** लाइट के रंग के बजाय थीम के एक्सेंट कलर का उपयोग करें।                         |
| `show_state` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` की स्थिति दिखाएं या छिपाएं |
| `show_name` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | नाम दिखाएं या छिपाएं |
| `show_icon` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | आइकन दिखाएं या छिपाएं |
| `show_last_changed` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम परिवर्तन समय दिखाएं |
| `show_last_updated` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम अपडेट समय दिखाएं |
| `show_attribute` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का एक एट्रिब्यूट उसके `name` के नीचे दिखाएं |
| `attribute` | string | वैकल्पिक (आवश्यक यदि `show_attribute` को `true` सेट किया गया हो) | आपके `entity` से एक एट्रिब्यूट | दिखाने के लिए एट्रिब्यूट (जैसे `brightness`) |
| `scrolling_effect` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | जब कंटेंट उसके कंटेनर के आकार से बड़ा हो तो टेक्स्ट को स्क्रॉल होने दें |
| `button_action` | object | वैकल्पिक | `tap_action`, `double_tap_action` या `hold_action`, नीचे देखें | बटन क्लिक पर डिफ़ॉल्ट एक्शन बदलने देता है। |
| `tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा |
| `double_tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन डबल क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा |
| `hold_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन होल्ड पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा |
| `card_layout` | string | वैकल्पिक | `normal` (सेक्शन व्यू में न होने पर डिफ़ॉल्ट), `large` (सेक्शन व्यू में डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |
| `sub_button` | object | वैकल्पिक | देखें [सब-बटन](#सब-बटन) | दाईं ओर फिक्स कस्टमाइज़्ड बटन जोड़ें |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित वैल्यू | विवरण |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | बटन में समर्थित एलिमेंट्स के लिए मुख्य बैकग्राउंड कलर |
| `--bubble-button-border-radius` | `px` | बटन के लिए बॉर्डर रेडियस |
| `--bubble-button-icon-border-radius` | `px` | बटन आइकन कंटेनर के लिए बॉर्डर रेडियस |
| `--bubble-button-icon-background-color` | `color` | बटन आइकन कंटेनर के लिए बैकग्राउंड कलर |
| `--bubble-light-white-color` | `color` | लाइट बटन/स्लाइडर के डिफ़ॉल्ट सफेद रंग को बदलें |
| `--bubble-light-color` | `color` | लाइट बटन/स्लाइडर का रंग बदलें (RGB लाइट्स के लिए भी) |
| `--bubble-button-box-shadow` | देखें [बॉक्स शैडो](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | बटन के लिए बॉक्स शैडो |

</details>

ये विकल्प तभी उपलब्ध होते हैं जब `button_type` को `slider` सेट किया गया हो।

<details>

<summary><b>स्लाइडर विकल्प (YAML + विवरण)</b></summary>

| नाम                  | प्रकार    | आवश्यकता                     | विवरण                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | वैकल्पिक                        | स्लाइडर की न्यूनतम वैल्यू। कस्टम स्लाइडर के लिए।                                                    |
| `max_value`             | number  | वैकल्पिक                        | स्लाइडर की अधिकतम वैल्यू। कस्टम स्लाइडर के लिए।                                                    |
| `step`                  | number  | वैकल्पिक                        | स्लाइडर की स्टेप वैल्यू।                                                                           |
| `tap_to_slide`          | boolean | वैकल्पिक (`false` डिफ़ॉल्ट)      | पुराना स्लाइडर व्यवहार सक्षम करें जहां आप स्लाइडर को होल्ड करने के बजाय टैप करके सक्रिय करते हैं।        |
| `relative_slide`        | boolean | वैकल्पिक (`false` डिफ़ॉल्ट )     | शुरुआती टच पॉइंट के बजाय शुरुआती वैल्यू के सापेक्ष वैल्यू अपडेट करें।                                      |
| `read_only_slider`      | boolean | वैकल्पिक (`false` डिफ़ॉल्ट)      | स्लाइडर को केवल पढ़ने योग्य बनाएं। सेंसर जैसी कुछ एंटिटी के लिए स्वचालित रूप से सक्षम।                                        |
| `slider_live_update`    | boolean | वैकल्पिक (`false` डिफ़ॉल्ट)      | स्लाइड करते समय एंटिटी स्टेट अपडेट होता है। **यह फीचर सभी एंटिटी के लिए अनुशंसित नहीं है।**        |
| `slider_fill_orientation` | string | वैकल्पिक | `left`, `right`, `top` या `bottom` | स्लाइडर की फिल दिशा बदलें। परिभाषित न होने पर बाएँ से दाएँ, और [दाएँ से बाएँ लिखी जाने वाली भाषाओं](#स्थानीयकरण) में मिरर की जाती है |
| `slider_value_position` | string | वैकल्पिक | `right`, `left`, `center` या `hidden` | मान के प्रदर्शन की स्थिति। परिभाषित न होने पर दाईं ओर, और [दाएँ से बाएँ लिखी जाने वाली भाषाओं](#स्थानीयकरण) में बाईं ओर |
| `invert_slider_value` | boolean | वैकल्पिक (`false` डिफ़ॉल्ट) | स्लाइडर की दिशा उलटें (100% फिल का मतलब न्यूनतम)। कलर स्लाइडर के लिए उपलब्ध नहीं। |
| `light_slider_type` | string | वैकल्पिक | `brightness` (डिफ़ॉल्ट), `hue`, `saturation`, `white_temp` | **केवल लाइट्स के लिए।** स्लाइडर मोड चुनें |
| `cover_slider_type` | string | वैकल्पिक | `position` (डिफ़ॉल्ट), `tilt_position` | **केवल कवर के लिए।** स्लाइडर मोड चुनें (पोज़िशन या टिल्ट) |
| `hue_force_saturation` | boolean | वैकल्पिक (`false` डिफ़ॉल्ट) | **केवल लाइट्स के लिए (Hue मोड)।** Hue समायोजित करते समय सैचुरेशन फोर्स करें |
| `hue_force_saturation_value` | number | वैकल्पिक (`100` डिफ़ॉल्ट) | **केवल लाइट्स के लिए (Hue मोड)।** फोर्स की गई सैचुरेशन वैल्यू (0-100) |
| `use_accent_color` | boolean | वैकल्पिक (`false` डिफ़ॉल्ट) | **केवल लाइट्स के लिए (Brightness मोड)।** लाइट के रंग के बजाय थीम एक्सेंट कलर का उपयोग करें |
| `allow_light_slider_to_0` | boolean | वैकल्पिक (`false` डिफ़ॉल्ट)    | **केवल लाइट्स के लिए।** स्लाइडर को 0% तक पहुंचने देता है, जिससे लाइट बंद हो जाती है। `tap_to_slide` के साथ उपलब्ध नहीं। |
| `light_transition`      | boolean | वैकल्पिक (`false` डिफ़ॉल्ट)      | **केवल लाइट्स के लिए।** समर्थित लाइट्स के लिए स्मूद ब्राइटनेस ट्रांज़िशन सक्षम करें।                           |
| `light_transition_time` | number  | वैकल्पिक (`500` डिफ़ॉल्ट)        | **केवल लाइट्स के लिए।** मिलीसेकंड में ट्रांज़िशन समय। `light_transition: true` आवश्यक है।            |

</details>

#### उदाहरण

<details>

<summary>एक स्लाइडर बटन जो लाइट की ब्राइटनेस नियंत्रित कर सकता है</summary>

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

<summary>अधिक विकल्पों वाला एक बटन</summary>

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

## मीडिया प्लेयर

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

यह कार्ड आपको एक मीडिया प्लेयर एंटिटी को नियंत्रित करने देता है।

### मीडिया प्लेयर विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `entity` | string | **आवश्यक** | कोई भी मीडिया प्लेयर | नियंत्रित करने के लिए मीडिया प्लेयर |
| `name` | string | वैकल्पिक | कोई भी स्ट्रिंग | आपके मीडिया प्लेयर के लिए एक नाम, यदि परिभाषित नहीं है तो एंटिटी का नाम दिखेगा |
| `icon` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके मीडिया प्लेयर के लिए एक आइकन, यदि परिभाषित नहीं है तो एंटिटी का आइकन या `entity-picture` दिखेगा |
| `force_icon` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | `entity-picture` के बजाय आइकन को प्राथमिकता दें |
| `show_state` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` की स्थिति दिखाएं या छिपाएं |
| `show_name` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | नाम दिखाएं या छिपाएं |
| `show_icon` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | आइकन दिखाएं या छिपाएं |
| `show_last_changed` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम परिवर्तन समय दिखाएं |
| `show_last_updated` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम अपडेट समय दिखाएं |
| `show_attribute` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का एक एट्रिब्यूट उसके `name` के नीचे दिखाएं |
| `attribute` | string | वैकल्पिक (आवश्यक यदि `show_attribute` को `true` सेट किया गया हो) | आपके `entity` से एक एट्रिब्यूट | दिखाने के लिए एट्रिब्यूट (जैसे `brightness`) |
| `scrolling_effect` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | जब कंटेंट उसके कंटेनर के आकार से बड़ा हो तो टेक्स्ट को स्क्रॉल होने दें |
| `min_volume` | number | वैकल्पिक | कोई भी संख्या | वॉल्यूम स्लाइडर की न्यूनतम वैल्यू। |
| `max_volume` | number | वैकल्पिक | कोई भी संख्या | वॉल्यूम स्लाइडर की अधिकतम वैल्यू। |
| `cover_background` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | कार्ड के बैकग्राउंड के रूप में धुंधला मीडिया कवर उपयोग करें। |
| `button_action` | object | वैकल्पिक | `tap_action`, `double_tap_action` या `hold_action`, देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | बटन क्लिक पर डिफ़ॉल्ट एक्शन बदलने देता है। |
| `tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |
| `double_tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन डबल क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा। |
| `hold_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन होल्ड पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |
| `main_buttons_position` | string | वैकल्पिक | `default` या `bottom` | कवर एक्शन बटन को नीचे (फिक्स) ले जाएं |
| `main_buttons_full_width` | boolean | वैकल्पिक | `true` या `false` | नीचे के एक्शन बटन को पूरी चौड़ाई का बनाएं (डिफ़ॉल्ट: `true` जब पोज़िशन `bottom` हो) |
| `main_buttons_alignment` | string | वैकल्पिक | `end` (डिफ़ॉल्ट), `center`, `start`, `space-between` | पूरी चौड़ाई न होने पर नीचे के एक्शन बटन का अलाइनमेंट |
| `card_layout` | string | वैकल्पिक | `normal` (सेक्शन व्यू में न होने पर डिफ़ॉल्ट), `large` (सेक्शन व्यू में डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |
| `sub_button` | object | वैकल्पिक | देखें [सब-बटन](#सब-बटन) | दाईं ओर फिक्स कस्टमाइज़्ड बटन जोड़ें |
| `hide` | object | वैकल्पिक | नीचे देखें | कार्ड से बटन छिपाएं |

#### छिपाने के विकल्प

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | प्ले/पॉज़ बटन छिपाएं |
| `volume_button` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | वॉल्यूम बटन छिपाएं |
| `previous_button` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | पिछला बटन छिपाएं |
| `next_button` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अगला बटन छिपाएं |
| `power_button` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | पावर बटन छिपाएं |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित वैल्यू | विवरण |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | मीडिया प्लेयर के लिए मुख्य बैकग्राउंड कलर |
| `--bubble-media-player-border-radius` | `px` | मीडिया प्लेयर के लिए बॉर्डर रेडियस |
| `--bubble-media-player-buttons-border-radius` | `px` | मीडिया प्लेयर बटन के लिए बॉर्डर रेडियस |
| `--bubble-media-player-slider-background-color` | `color` | वॉल्यूम स्लाइडर के लिए बैकग्राउंड कलर |
| `--bubble-media-player-icon-border-radius` | `px` | मीडिया प्लेयर आइकन कंटेनर के लिए बॉर्डर रेडियस |
| `--bubble-media-player-icon-background-color` | `color` | मीडिया प्लेयर आइकन कंटेनर के लिए बैकग्राउंड कलर |
| `--bubble-media-player-box-shadow` | देखें [बॉक्स शैडो](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | मीडिया प्लेयर के लिए बॉक्स शैडो |

</details>


#### उदाहरण

<details>

<summary>सभी विकल्पों के साथ एक मीडिया प्लेयर</summary>

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

## कवर

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

यह कार्ड आपको अपनी `cover` एंटिटी को नियंत्रित करने देता है।

### कवर विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `entity` | string | **आवश्यक** | कोई भी कवर | नियंत्रित करने के लिए एक कवर |
| `name` | string | वैकल्पिक | कोई भी स्ट्रिंग | आपके कवर के लिए एक नाम, यदि परिभाषित नहीं है तो एंटिटी का नाम दिखेगा |
| `force_icon` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | `entity-picture` के बजाय आइकन को प्राथमिकता दें |
| `show_state` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` की स्थिति दिखाएं या छिपाएं |
| `show_name` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | नाम दिखाएं या छिपाएं |
| `show_icon` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | आइकन दिखाएं या छिपाएं |
| `show_last_changed` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम परिवर्तन समय दिखाएं |
| `show_last_updated` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम अपडेट समय दिखाएं |
| `show_attribute` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का एक एट्रिब्यूट उसके `name` के नीचे दिखाएं |
| `attribute` | string | वैकल्पिक (आवश्यक यदि `show_attribute` को `true` सेट किया गया हो) | आपके `entity` से एक एट्रिब्यूट | दिखाने के लिए एट्रिब्यूट (जैसे `brightness`) |
| `scrolling_effect` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | जब कंटेंट उसके कंटेनर के आकार से बड़ा हो तो टेक्स्ट को स्क्रॉल होने दें |
| `icon_open` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके खुले कवर के लिए एक आइकन, यदि परिभाषित नहीं है तो डिफ़ॉल्ट ओपन कवर आइकन दिखेगा |
| `icon_close` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके बंद कवर के लिए एक आइकन, यदि परिभाषित नहीं है तो डिफ़ॉल्ट क्लोज़ कवर आइकन दिखेगा |
| `icon_up` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके ओपन कवर बटन के लिए एक आइकन, यदि परिभाषित नहीं है तो डिफ़ॉल्ट ओपन कवर आइकन दिखेगा |
| `icon_down` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके क्लोज़ कवर बटन के लिए एक आइकन, यदि परिभाषित नहीं है तो डिफ़ॉल्ट क्लोज़ कवर आइकन दिखेगा |
| `open_service` | string | वैकल्पिक | कोई भी सर्विस या स्क्रिप्ट | आपका कवर खोलने के लिए एक सर्विस, डिफ़ॉल्ट `cover.open_cover` |
| `stop_service` | string | वैकल्पिक | कोई भी सर्विस या स्क्रिप्ट | आपका कवर रोकने के लिए एक सर्विस, डिफ़ॉल्ट `cover.stop_cover` |
| `close_service` | string | वैकल्पिक | कोई भी सर्विस या स्क्रिप्ट | आपका कवर बंद करने के लिए एक सर्विस, डिफ़ॉल्ट `cover.close_cover` |
| `tilt_buttons` | string | वैकल्पिक | `top` (डिफ़ॉल्ट), `bottom`, `left`, `right`, `hidden` | टिल्ट नियंत्रण बटन की पोज़िशन (केवल तभी दिखेगी जब कवर टिल्ट समर्थित करता हो) |
| `open_tilt_service` | string | वैकल्पिक | कोई भी सर्विस या स्क्रिप्ट | टिल्ट खोलने के लिए एक सर्विस, डिफ़ॉल्ट `cover.open_cover_tilt` |

| `close_tilt_service` | string | वैकल्पिक | कोई भी सर्विस या स्क्रिप्ट | टिल्ट बंद करने के लिए एक सर्विस, डिफ़ॉल्ट `cover.close_cover_tilt` |
| `button_action` | object | वैकल्पिक | `tap_action`, `double_tap_action` या `hold_action`, देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | बटन क्लिक पर डिफ़ॉल्ट एक्शन बदलने देता है। |
| `tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |
| `double_tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन डबल क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा। |
| `hold_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन होल्ड पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |
| `main_buttons_position` | string | वैकल्पिक | `default` या `bottom` | मीडिया नियंत्रण को नीचे (फिक्स) ले जाएं |
| `main_buttons_full_width` | boolean | वैकल्पिक | `true` या `false` | नीचे के नियंत्रण को पूरी चौड़ाई का बनाएं (डिफ़ॉल्ट: `true` जब पोज़िशन `bottom` हो) |
| `main_buttons_alignment` | string | वैकल्पिक | `end` (डिफ़ॉल्ट), `center`, `start`, `space-between` | पूरी चौड़ाई न होने पर नीचे के नियंत्रण का अलाइनमेंट |
| `card_layout` | string | वैकल्पिक | `normal` (सेक्शन व्यू में न होने पर डिफ़ॉल्ट), `large` (सेक्शन व्यू में डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |
| `sub_button` | object | वैकल्पिक | देखें [सब-बटन](#सब-बटन) | दाईं ओर फिक्स कस्टमाइज़्ड बटन जोड़ें |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित वैल्यू | विवरण |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | कवर कार्ड में समर्थित एलिमेंट्स के लिए मुख्य बैकग्राउंड कलर |
| `--bubble-cover-border-radius` | `px` | कवर कार्ड के लिए बॉर्डर रेडियस |
| `--bubble-cover-icon-border-radius` | `px` | कवर कार्ड आइकन कंटेनर के लिए बॉर्डर रेडियस |
| `--bubble-cover-icon-background-color` | `color` | कवर कार्ड आइकन कंटेनर के लिए बैकग्राउंड कलर |
| `--bubble-cover-box-shadow` | देखें [बॉक्स शैडो](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | कवर कार्ड के लिए बॉक्स शैडो |
| `--bubble-button-box-shadow` | देखें [बॉक्स शैडो](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | कवर कार्ड में बटन के लिए बॉक्स शैडो |

</details>


#### उदाहरण

<details>

<summary>एक कार्ड जो रोलर शेड को नियंत्रित कर सकता है</summary>

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

## सेलेक्ट

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

यह कार्ड आपको अपनी `input_select` / `select` एंटिटी के लिए एक ड्रॉपडाउन मेनू जोड़ने देता है। यह कार्ड सब-बटन और सभी सामान्य Bubble Card फीचर्स को भी समर्थन करता है।

> [!TIP]
> यदि आप चाहें तो सेलेक्ट सब-बटन भी रख सकते हैं, यह फीचर उन सभी कार्ड में उपलब्ध है जो सब-बटन को समर्थन करते हैं।

### सेलेक्ट विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `entity` | string | **आवश्यक** | कोई भी एंटिटी | नियंत्रित करने के लिए एक एंटिटी |
| `name` | string | वैकल्पिक | कोई भी स्ट्रिंग | आपके सेलेक्ट के लिए एक नाम, यदि परिभाषित नहीं है तो एंटिटी का नाम दिखेगा |
| `icon` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके सेलेक्ट के लिए एक आइकन, यदि परिभाषित नहीं है तो एंटिटी का आइकन या `entity-picture` दिखेगा |
| `force_icon` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | `entity-picture` के बजाय आइकन को प्राथमिकता दें |
| `show_state` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` की स्थिति दिखाएं या छिपाएं |
| `show_name` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | नाम दिखाएं या छिपाएं |
| `show_icon` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | आइकन दिखाएं या छिपाएं |
| `show_last_changed` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम परिवर्तन समय दिखाएं |
| `show_last_updated` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का अंतिम अपडेट समय दिखाएं |
| `show_attribute` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपने `entity` का एक एट्रिब्यूट उसके `name` के नीचे दिखाएं |
| `attribute` | string | वैकल्पिक (आवश्यक यदि `show_attribute` को `true` सेट किया गया हो) | आपके `entity` से एक एट्रिब्यूट | दिखाने के लिए एट्रिब्यूट (जैसे `brightness`) |
| `scrolling_effect` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | जब कंटेंट उसके कंटेनर के आकार से बड़ा हो तो टेक्स्ट को स्क्रॉल होने दें |
| `tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |
| `double_tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन डबल क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा। |
| `hold_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन होल्ड पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |
| `card_layout` | string | वैकल्पिक | `normal` (सेक्शन व्यू में न होने पर डिफ़ॉल्ट), `large` (सेक्शन व्यू में डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |
| `sub_button` | object | वैकल्पिक | देखें [सब-बटन](#सब-बटन) | दाईं ओर फिक्स कस्टमाइज़्ड बटन जोड़ें |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित वैल्यू | विवरण |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | सेलेक्ट कार्ड में समर्थित एलिमेंट्स के लिए मुख्य बैकग्राउंड कलर |
| `--bubble-select-background-color` | `color` | सेलेक्ट कार्ड के लिए बैकग्राउंड कलर |
| `--bubble-select-list-border-radius` | `px` | कार्ड में ड्रॉपडाउन मेनू के लिए बॉर्डर रेडियस |
| `--bubble-select-list-item-accent-color` | `color` | चयनित आइटम के लिए एक्सेंट कलर |
| `--bubble-select-list-background-color` | `color` | कार्ड में ड्रॉपडाउन मेनू के लिए बैकग्राउंड कलर |
| `--bubble-select-list-width` | `px` | कार्ड में ड्रॉपडाउन मेनू की चौड़ाई |
| `--bubble-select-arrow-background-color` | `color` | ड्रॉपडाउन ऐरो के लिए बैकग्राउंड कलर |
| `--bubble-select-button-border-radius` | `px` | सेलेक्ट बटन के लिए बॉर्डर रेडियस |
| `--bubble-select-border-radius` | `px` | सेलेक्ट कार्ड के लिए बॉर्डर रेडियस |
| `--bubble-select-icon-border-radius` | `px` | सेलेक्ट कार्ड आइकन कंटेनर के लिए बॉर्डर रेडियस |
| `--bubble-select-icon-background-color` | `color` | सेलेक्ट कार्ड आइकन कंटेनर के लिए बैकग्राउंड कलर |
| `--bubble-select-box-shadow` | देखें [बॉक्स शैडो](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | सेलेक्ट कार्ड के लिए बॉक्स शैडो |

</details>


#### उदाहरण

<details>

<summary>सीन की सूची वाला एक सेलेक्ट कार्ड</summary>

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

## क्लाइमेट

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

यह कार्ड आपको अपनी `climate` एंटिटी को नियंत्रित करने देता है।

> [!TIP]
> मोड चयन मेनू एक [सब-बटन](#सब-बटन) है जो कार्ड बनाते समय स्वचालित रूप से जोड़ा जाता है। फिर आप इसे अपनी इच्छानुसार बदल या हटा सकते हैं।

### क्लाइमेट विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम                     | प्रकार    | आवश्यकता                         | समर्थित विकल्प                                  | विवरण                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **आवश्यक**                        | Climate एंटिटी                                   | नियंत्रित करने के लिए एंटिटी (जैसे `climate.living_room`)।                                                            |
| `name`                  | string  | वैकल्पिक                            | कोई भी स्ट्रिंग                                       | कार्ड के लिए एक कस्टम नाम। यदि परिभाषित नहीं है, तो एंटिटी का नाम दिखेगा।                                    |
| `icon`                  | string  | वैकल्पिक                            | कोई भी `mdi:` आइकन                                  | कार्ड के लिए एक कस्टम आइकन। यदि परिभाषित नहीं है, तो एंटिटी का आइकन या `entity-picture` इस्तेमाल होगा।                   |
| `force_icon`            | boolean | वैकल्पिक                            | `true` या `false` (डिफ़ॉल्ट)                     | `entity-picture` के बजाय आइकन को प्राथमिकता देता है।                                                           |
| `show_state`            | boolean | वैकल्पिक                            | `true` या `false` (डिफ़ॉल्ट)                     | `entity` की मौजूदा स्थिति दिखाएं या छिपाएं।                                                                 |
| `show_name`             | boolean | वैकल्पिक                            | `true` (डिफ़ॉल्ट) या `false`                     | एंटिटी का नाम दिखाएं या छिपाएं।                                                                            |
| `show_icon`             | boolean | वैकल्पिक                            | `true` (डिफ़ॉल्ट) या `false`                     | आइकन दिखाएं या छिपाएं।                                                                                          |
| `hide_target_temp_low`  | boolean | वैकल्पिक (केवल उन एंटिटी के लिए जो `target_temp_low` समर्थन करती हैं) | `true` या `false` (डिफ़ॉल्ट) | यदि `entity` समर्थन करती है तो निम्न लक्ष्य तापमान नियंत्रण छिपाता है।                                          |
| `hide_target_temp_high` | boolean | वैकल्पिक (केवल उन एंटिटी के लिए जो `target_temp_high` समर्थन करती हैं)| `true` या `false` (डिफ़ॉल्ट) | यदि `entity` समर्थन करती है तो उच्च लक्ष्य तापमान नियंत्रण छिपाता है।                                         |
| `state_color`           | boolean | वैकल्पिक                            | `true` या `false` (डिफ़ॉल्ट)                     | जब क्लाइमेट एंटिटी चालू हो तो एक स्थिर बैकग्राउंड कलर लागू करता है।                                                              |
| `step` | number | वैकल्पिक | कोई भी संख्या | तापमान का स्टेप। |
| `min_temp` | number | वैकल्पिक | कोई भी संख्या | न्यूनतम तापमान। |
| `max_temp` | number | वैकल्पिक | कोई भी संख्या | अधिकतम तापमान। |
| `button_action` | object | वैकल्पिक | `tap_action`, `double_tap_action` या `hold_action`, देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | बटन क्लिक पर डिफ़ॉल्ट एक्शन बदलने देता है। |
| `tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |
| `double_tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन डबल क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा। |
| `hold_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | आइकन होल्ड पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `more-info` का उपयोग होगा। |                              |
| `main_buttons_position` | string | वैकल्पिक | `default` या `bottom` | क्लाइमेट एक्शन बटन को नीचे (फिक्स) ले जाएं |
| `main_buttons_full_width` | boolean | वैकल्पिक | `true` या `false` | नीचे के एक्शन बटन को पूरी चौड़ाई का बनाएं (डिफ़ॉल्ट: `true` जब पोज़िशन `bottom` हो) |
| `main_buttons_alignment` | string | वैकल्पिक | `end` (डिफ़ॉल्ट), `center`, `start`, `space-between` | पूरी चौड़ाई न होने पर नीचे के एक्शन बटन का अलाइनमेंट |
| `card_layout` | string | वैकल्पिक | `normal` (सेक्शन व्यू में न होने पर डिफ़ॉल्ट), `large` (सेक्शन व्यू में डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |
| `sub_button`            | object  | वैकल्पिक                            | देखें [सब-बटन](#सब-बटन)                | दाईं ओर कस्टम बटन जोड़ता है। क्लाइमेट मोड सेलेक्ट मेनू के लिए उपयोगी।                                  |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित वैल्यू | विवरण |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | क्लाइमेट कार्ड में समर्थित एलिमेंट्स के लिए मुख्य बैकग्राउंड कलर |
| `--bubble-climate-border-radius` | `px` | क्लाइमेट कार्ड एलिमेंट्स में समर्थित एलिमेंट्स के लिए बॉर्डर रेडियस |
| `--bubble-climate-button-background-color` | `color` | क्लाइमेट कार्ड बटन के लिए बैकग्राउंड कलर |
| `--bubble-climate-icon-border-radius` | `px` | क्लाइमेट कार्ड आइकन कंटेनर के लिए बॉर्डर रेडियस |
| `--bubble-state-climate-fan-only-color` | `color` | fan-only स्टेट के लिए ओवरले कलर |
| `--bubble-state-climate-dry-color` | `color` | dry स्टेट के लिए ओवरले कलर |
| `--bubble-state-climate-cool-color` | `color` | cool स्टेट के लिए ओवरले कलर |
| `--bubble-state-climate-heat-color` | `color` | heat स्टेट के लिए ओवरले कलर |
| `--bubble-state-climate-auto-color` | `color` | auto स्टेट के लिए ओवरले कलर |
| `--bubble-state-climate-heat-cool-color` | `color` | heat-cool स्टेट के लिए ओवरले कलर |
| `--bubble-climate-accent-color` | `color` | क्लाइमेट कार्ड के लिए एक्सेंट कलर |
| `--bubble-climate-box-shadow` | देखें [बॉक्स शैडो](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | क्लाइमेट कंटेनर के लिए बॉक्स शैडो। |

</details>


#### उदाहरण

<details>

<summary>HVAC मोड ड्रॉपडाउन मेनू वाला एक क्लाइमेट कार्ड</summary>

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

## कैलेंडर

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

यह कार्ड आपकी कैलेंडर एंटिटी को दिखाने देता है। इसकी सामग्री स्क्रॉल करने योग्य है, इसलिए आप आगामी इवेंट आसानी से देख सकते हैं।

### कैलेंडर विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम                | प्रकार    | आवश्यकता  | समर्थित विकल्प                               | विवरण                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | वैकल्पिक     | कोई भी संख्या (न्यूनतम: 1)                        | जितने कैलेंडर दिनों के इवेंट लाने हैं, अभी से लेकर N-वें दिन के अंत तक (डिफ़ॉल्ट: 7) |
| `entities`          | object  | **आवश्यक** | एक कैलेंडर एंटिटी ऑब्जेक्ट (नीचे देखें)            | नियंत्रित करने के लिए एंटिटी (जैसे `calendar.main_calendar`)।                                 |
| `entities.entity`   | string  | **आवश्यक** | एक कैलेंडर एंटिटी                               | दिखाने के लिए कैलेंडर एंटिटी                                                          |
| `entities.color`    | string  | वैकल्पिक     | एक रंग                                         | कैलेंडर चिप के लिए एक कस्टम रंग। यदि परिभाषित नहीं है, तो एक स्वचालित रंग चुना जाएगा |
| `days`              | number  | वैकल्पिक     | कोई भी संख्या (न्यूनतम: 1)                         | जितने कैलेंडर दिनों के इवेंट लाने हैं, अभी से लेकर N-वें दिन के अंत तक (डिफ़ॉल्ट: 7) |
| `limit`             | number  | वैकल्पिक     | एक संख्या                                        | कार्ड पर दिखाए जाने वाले इवेंट की संख्या                                  |
| `show_end`          | boolean | वैकल्पिक     | `true` या `false` (डिफ़ॉल्ट)                     | इवेंट के लिए समाप्ति समय दिखाएं या छिपाएं                                                    |
| `show_progress`     | boolean | वैकल्पिक     | `true` (डिफ़ॉल्ट) या `false`                     | इवेंट प्रोग्रेस बार दिखाएं या छिपाएं                                                     |
| `show_started_events`| boolean | वैकल्पिक     | `true` (डिफ़ॉल्ट) या `false`                     | अभी चल रहे इवेंट दिखाएं या छिपाएं। कई दिनों वाले इवेंट को एक-एक दिन करके आँका जाता है, इसलिए केवल चल रहा दिन छिपता है और आने वाले दिन दिखते रहते हैं |
| `scrolling_effect`  | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | जब कंटेंट उसके कंटेनर के आकार से बड़ा हो तो टेक्स्ट को स्क्रॉल होने दें |
| `event_action` | object | वैकल्पिक | `tap_action`, `double_tap_action` या `hold_action`, देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | इवेंट क्लिक पर एक्शन जोड़ने देता है। |
| `tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | दिन क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा। |
| `double_tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | दिन डबल क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा। |
| `hold_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | दिन होल्ड पर एक्शन का प्रकार परिभाषित करें, यदि परिभाषित नहीं है तो `none` का उपयोग होगा। |
| `card_layout` | string | वैकल्पिक | `normal` (सेक्शन व्यू में न होने पर डिफ़ॉल्ट), `large` (सेक्शन व्यू में डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |
| `sub_button` | object | वैकल्पिक | देखें [सब-बटन](#सब-बटन) | दाईं ओर फिक्स कस्टमाइज़्ड बटन जोड़ें |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल                                  | अपेक्षित वैल्यू | विवरण                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | कैलेंडर कार्ड में समर्थित एलिमेंट्स के लिए मुख्य बैकग्राउंड कलर  |
| `--bubble-calendar-border-radius`         | `px`           | कैलेंडर कार्ड एलिमेंट्स में समर्थित एलिमेंट्स के लिए बॉर्डर रेडियस |
| `--bubble-calendar-height`                | `px`           | कैलेंडर कार्ड की ऊंचाई                                        |

</details>

#### उदाहरण

<details>

<summary>सीमित संख्या में इवेंट वाला एक कैलेंडर कार्ड</summary>

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

<summary>समाप्ति समय और प्रोग्रेस बार वाला एक कैलेंडर कार्ड</summary>

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


## सेपरेटर

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

यह कार्ड आपके पॉप-अप को श्रेणियों/सेक्शन में बांटने के लिए एक सरल सेपरेटर है। जैसे: Lights, Devices, Covers, Settings, Automations...

### सेपरेटर विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `name` | string | वैकल्पिक लेकिन अनुशंसित | कोई भी स्ट्रिंग | आपके सेपरेटर के लिए एक नाम |
| `icon` | string | वैकल्पिक लेकिन अनुशंसित | कोई भी `mdi:` आइकन | आपके सेपरेटर के लिए एक आइकन |
| `card_layout` | string | वैकल्पिक | `normal` (यदि सेक्शन व्यू में नहीं है तो डिफ़ॉल्ट), `large` (यदि सेक्शन व्यू में है तो डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |
| `sub_button` | object | वैकल्पिक | देखें [सब-बटन](#सब-बटन) | दाईं ओर स्थिर कस्टमाइज़्ड बटन जोड़ें |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित मान | विवरण |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | सेपरेटर में लाइन के लिए बैकग्राउंड रंग |

</details>

#### उदाहरण

<details>

<summary>"Covers" सेक्शन के लिए एक सेपरेटर/डिवाइडर</summary>

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

## खाली कॉलम

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

यह कार्ड एक खाली कॉलम भरने के लिए है। यह तब उपयोगी है जब आपके पॉप-अप में केवल एक कार्ड वाला `horizontal-stack` हो। इस स्क्रीनशॉट के नीचे दाईं ओर के कोने को देखकर इसे (नहीं) देखें।

### खाली कॉलम विकल्प

इस कार्ड में कोई विकल्प नहीं है और यह [स्टाइलिंग](#स्टाइलिंग) को सपोर्ट नहीं करता, हालांकि यह HA सेक्शन के लिए लेआउट विकल्पों को सपोर्ट करता है।

#### उदाहरण

<details>

<summary>एक हॉरिज़ॉन्टल स्टैक में खाली कॉलम</summary>

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

## केवल सब-बटन

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

यह कार्ड केवल सब-बटन के लिए समर्पित है। यह मेनू, त्वरित एक्शन, सूचनात्मक चिप्स, या पेज के नीचे स्थिर फुटर के लिए बिल्कुल उपयुक्त है।

> [!IMPORTANT]  
> यह कार्ड नए सब-बटन स्कीमा का उपयोग करता है। अपने बटन परिभाषित करने के लिए `sub_button.bottom` का उपयोग करें। `sub_button.main` सेक्शन को नज़रअंदाज़ किया जाता है।

### केवल सब-बटन विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **आवश्यक** | देखें [सब-बटन](#सब-बटन) | `bottom` सेक्शन का उपयोग करके अपने सब-बटन परिभाषित करें |
| `hide_main_background` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | कार्ड का बैकग्राउंड हटाएं |
| `footer_mode` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | कार्ड को पेज के नीचे स्थिर करें |
| `footer_full_width` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | फुटर को पूरी चौड़ाई (100%) दें |
| `footer_width` | number | वैकल्पिक | कोई भी संख्या | जब `footer_full_width` `false` हो तो फुटर की चौड़ाई पिक्सल में |
| `footer_bottom_offset` | number | वैकल्पिक | कोई भी संख्या | पेज के नीचे से दूरी पिक्सल में (डिफ़ॉल्ट: `16`) |
| `card_layout` | string | वैकल्पिक | `normal` (यदि सेक्शन व्यू में नहीं है तो डिफ़ॉल्ट), `large` (यदि सेक्शन व्यू में है तो डिफ़ॉल्ट), `large-2-rows`, `large-sub-buttons-grid` | कार्ड का स्टाइलिंग लेआउट, देखें [कार्ड लेआउट](#कार्ड-लेआउट) |
| `rows` | number | वैकल्पिक | कोई भी संख्या | पंक्तियों की संख्या (ऊंचाई) (जैसे `2`) |

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित मान | विवरण |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | जब `footer_full_width` `false` हो तो फुटर की चौड़ाई |
| `--bubble-footer-bottom` | `px` | फुटर का बॉटम ऑफ़सेट |
| `--bubble-footer-box-shadow` | देखें [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | फुटर कंटेनर के लिए बॉक्स शैडो |

</details>

#### उदाहरण

<details>

<summary>चिप्स जैसा (स्क्रीनशॉट में जैसा)</summary>

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

<summary>एक स्थिर फुटर मेनू</summary>

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

## सब-बटन

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

हर उस कार्ड में जो इस विकल्प को सपोर्ट करता है, आप अपने कार्ड को और भी कस्टमाइज़ करने के लिए सब-बटन जोड़ सकते हैं। उदाहरण के लिए, आप एक ऐसा बटन बना सकते हैं जो वैक्यूम, वेदर कार्ड, या जो भी आप सोच सकें उसे नियंत्रित करे। ये सब-बटन टैप एक्शन और अधिकांश बटन विकल्पों को सपोर्ट करते हैं।

अब सब-बटन तीन प्रकार सपोर्ट करते हैं: **डिफ़ॉल्ट (बटन)**, **स्लाइडर**, और **ड्रॉपडाउन / सेलेक्ट**। आप एक ही कार्ड में प्रकार मिला सकते हैं, सब-बटन को ऊपर या नीचे रख सकते हैं, और अधिक उन्नत लेआउट के लिए उन्हें ग्रुप में व्यवस्थित कर सकते हैं।

#### सब-बटन की पोज़िशन और ग्रुप

<details>

<summary><b>सब-बटन संरचना (main / bottom + ग्रुप)</b></summary>

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

**नोट:**
- `main` और `bottom` दो स्वतंत्र सेक्शन हैं। bottom सब-बटन कार्ड के नीचे स्थिर होते हैं।
- `main_layout` और `bottom_layout` `inline` (डिफ़ॉल्ट) या `rows` स्वीकार करते हैं ताकि ग्रुप को लंबवत रूप से स्टैक किया जा सके।
- ग्रुप ऐसे ऑब्जेक्ट हैं जिनमें `group` array और वैकल्पिक `buttons_layout` (`inline` या `column`) होता है।
- `justify_content` केवल **bottom ग्रुप** के लिए उपलब्ध है (`start`, `center`, `end`, `fill`)।
- जब bottom सब-बटन मौजूद हों, तो कार्ड का लेआउट अपने आप `large` में बदल जाता है, जब तक कि आप स्पष्ट रूप से कोई अन्य लेआउट सेट न करें।
- पुराने `sub_button` array अभी भी सपोर्टेड हैं और उन्हें `main` सेक्शन के रूप में माना जाता है।

</details>

### सब-बटन विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | आवश्यकता | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- | --- |
| `entity` | string | वैकल्पिक | कोई भी एंटिटी | नियंत्रित करने के लिए एक एंटिटी |
| `name` | string | वैकल्पिक | कोई भी स्ट्रिंग | आपके सब-बटन के लिए एक नाम, यदि परिभाषित नहीं है तो यह एंटिटी का नाम दिखाएगा |
| `icon` | string | वैकल्पिक | कोई भी `mdi:` आइकन | आपके सब-बटन के लिए एक आइकन, यदि परिभाषित नहीं है तो यह एंटिटी का आइकन या एंटिटी की तस्वीर दिखाएगा |
| `force_icon` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | एंटिटी की तस्वीर उपलब्ध होने पर भी आइकन को फ़ोर्स करें |
| `sub_button_type` | string | वैकल्पिक | `default`, `slider` या `select` | सब-बटन का प्रकार चुनें |
| `show_background` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | अपने सब-बटन के लिए एक बैकग्राउंड दिखाएं, यह आपकी एंटिटी की स्थिति के आधार पर रंग बदलेगा |
| `state_background` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | जब एंटिटी `on` हो तो स्थिति के रंग का उपयोग करें |
| `light_background` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | उपलब्ध होने पर बैकग्राउंड के लिए लाइट का रंग उपयोग करें |
| `show_state` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपनी `entity` की स्थिति दिखाएं या छिपाएं |
| `show_name` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | नाम दिखाएं या छिपाएं |
| `show_icon` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | आइकन दिखाएं या छिपाएं |
| `show_last_changed` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपनी `entity` का अंतिम परिवर्तन समय दिखाएं |
| `show_last_updated` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपनी `entity` का अंतिम अपडेट समय दिखाएं |
| `show_attribute` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | अपनी `entity` का एक एट्रिब्यूट उसके `name` के नीचे दिखाएं |
| `attribute` | string | वैकल्पिक (यदि `show_attribute` को `true` सेट किया गया हो तो आवश्यक) | आपकी `entity` से एक एट्रिब्यूट | दिखाने के लिए एट्रिब्यूट (जैसे `brightness`) |
| `select_attribute` | string | वैकल्पिक | आपकी `entity` से एक एट्रिब्यूट लिस्ट (ऊपर दिए गए समर्थित विकल्प देखें) | क्लिक करने पर यह एट्रिब्यूट लिस्ट एक ड्रॉपडाउन खोलेगी (जैसे `effect_list`) |
| `show_arrow` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | सेलेक्ट सब-बटन के लिए ड्रॉपडाउन एरो दिखाएं या छिपाएं |
| `scrolling_effect` | boolean | वैकल्पिक | `true` (डिफ़ॉल्ट) या `false` | जब कंटेंट कंटेनर के आकार से बड़ा हो तो टेक्स्ट को स्क्रॉल करने दें |
| `tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | सब-बटन क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि अपरिभाषित हो तो `more-info` का उपयोग किया जाएगा। |
| `double_tap_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | सब-बटन डबल क्लिक पर एक्शन का प्रकार परिभाषित करें, यदि अपरिभाषित हो तो `none` का उपयोग किया जाएगा। |
| `hold_action` | object | वैकल्पिक | देखें [एक्शन](#टैप-डबल-टैप-और-होल्ड-एक्शन) | सब-बटन होल्ड पर एक्शन का प्रकार परिभाषित करें, यदि अपरिभाषित हो तो `more-info` का उपयोग किया जाएगा। |
| `fill_width` | boolean | वैकल्पिक | `true` या `false` | उपलब्ध चौड़ाई भरें (डिफ़ॉल्ट: main के लिए `false`, bottom के लिए `true`) |
| `width` | number या string | वैकल्पिक | कोई भी संख्या या CSS length | कस्टम चौड़ाई (डिफ़ॉल्ट रूप से main सेक्शन के लिए `px`, bottom सेक्शन के लिए `%`) |
| `custom_height` | number | वैकल्पिक | कोई भी संख्या | पिक्सल में कस्टम ऊंचाई |
| `content_layout` | string | वैकल्पिक | `icon-left` (डिफ़ॉल्ट), `icon-top`, `icon-bottom`, `icon-right` | सब-बटन के अंदर आइकन की पोज़िशन |
| `always_visible` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | **केवल स्लाइडर।** टैप पर खोलने के बजाय स्लाइडर को हमेशा दिखाएं |
| `show_button_info` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | **केवल स्लाइडर।** जब `always_visible` सक्षम हो तो आइकन/नाम/स्थिति दिखाएं |
| `visibility` | object या list | वैकल्पिक | देखें [शर्तें](#शर्तें) | शर्तों के आधार पर सब-बटन दिखाएं या छिपाएं |
| `hide_when_parent_unavailable` | boolean | वैकल्पिक | `true` या `false` (डिफ़ॉल्ट) | यदि पेरेंट कार्ड की एंटिटी अनुपलब्ध हो तो सब-बटन छिपाएं |
| `css_class` | string | वैकल्पिक | कोई भी स्ट्रिंग | सब-बटन पर एक अतिरिक्त CSS क्लास, ताकि नाम कुछ भी हो, आप उसे अपनी [स्टाइलिंग](#स्टाइलिंग) में टारगेट कर सकें (उदाहरण के लिए `My value` से `.my-value` बनता है) |

</details>

<details>

<summary><b>स्लाइडर सब-बटन विकल्प (बटन स्लाइडर के समान)</b></summary>

<br>

स्लाइडर सब-बटन बटन स्लाइडर के समान विकल्पों को सपोर्ट करते हैं, जिनमें शामिल हैं:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`।

</details>

<details>

<summary><b>CSS वेरिएबल (देखें <a href="#स्टाइलिंग">स्टाइलिंग</a>)</b></summary>

| वेरिएबल | अपेक्षित मान | विवरण |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | सब-बटन के लिए बॉर्डर रेडियस |
| `--bubble-sub-button-background-color` | `color` | सब-बटन के लिए बैकग्राउंड रंग |
| `--bubble-sub-button-outline` | `box-shadow` | किसी सब-बटन या स्लाइडर पर तभी जोड़ी जाने वाली आउटलाइन जब वह तत्व अपने पीछे के कार्ड जैसा ही रंग लेता है, जिससे वह अदृश्य हो जाता (हटाने के लिए इसे `none` पर सेट करें) |
| `--bubble-sub-slider-border-radius` | `px` | स्लाइडर सब-बटन के लिए बॉर्डर रेडियस |
| `--bubble-sub-slider-background-color` | `color` | स्लाइडर सब-बटन के लिए बैकग्राउंड रंग |
| `--bubble-sub-slider-height` | `px` | हमेशा-दृश्यमान स्लाइडर सब-बटन के लिए ऊंचाई |
| `--bubble-sub-slider-outline` | `box-shadow` | केवल स्लाइडर सब-बटन की आउटलाइन, न होने पर `--bubble-sub-button-outline` पर लौटती है |
| `--bubble-sub-button-dark-text-color` | `color` | चमकीले सब-बटन बैकग्राउंड पर टेक्स्ट का रंग |

</details>

#### उदाहरण

<details>

<summary>एक वैक्यूम कार्ड बनाने के लिए कुछ सब-बटन वाला बटन (स्क्रीनशॉट में जैसा)</summary>

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

<summary>एक बटन स्लाइडर जिसमें एक सब-बटन ब्राइटनेस दिखाता है और एक लाइट को टॉगल करता है (स्क्रीनशॉट में जैसा)</summary>

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

<summary>एक बटन जो आज और कल के मौसम के साथ अंदर और बाहर का तापमान दिखाता है (स्क्रीनशॉट शामिल)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> मेरे लिए बदकिस्मती है कि हर समय बादल छाए रहते हैं, लेकिन सभी आइकन मौसम के आधार पर बदल रहे हैं।

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

## कार्ड लेआउट

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card पूरी तरह से Home Assistant सेक्शन व्यू को सपोर्ट करता है, आप कार्ड को बड़ा बनाने के लिए कार्ड लेआउट बदल सकते हैं और यह भी बदल सकते हैं कि कार्ड को आपके सेक्शन व्यू में कितने कॉलम या रो घेरने चाहिए (केवल उन कार्ड पर जो इस विकल्प को सपोर्ट करते हैं)। ये लेआउट अन्य सभी व्यू प्रकारों में भी सपोर्टेड हैं।

<details>

<summary><b>उपलब्ध कार्ड लेआउट</b></summary>

| लेआउट | विवरण |
| --- | --- |
| `normal` | नियमित लेआउट (सेक्शन व्यू के लिए ऑप्टिमाइज़ नहीं) |
| `large` | एक बड़ा लेआउट जो सेक्शन व्यू में चुनी गई रो के अनुसार आकार बदलेगा (सेक्शन व्यू के लिए ऑप्टिमाइज़्ड) |
| `large-2-rows` | 2 रो के सब-बटन वाला एक बड़ा लेआउट जो सेक्शन व्यू में चुनी गई रो के अनुसार आकार बदलेगा (सेक्शन व्यू के लिए ऑप्टिमाइज़्ड) |
| `large-sub-buttons-grid` | यह लेआउट सब-बटन को ग्रिड में दिखाएगा, `rows` कम से कम `2` सेट होना चाहिए।

</details>

#### उदाहरण

<details>

<summary>2 रो के सब-बटन के साथ ऊर्जा आंकड़े दिखाने वाला एक बड़ा बटन (स्क्रीनशॉट शामिल)</summary>

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

<summary>12 सब-बटन वाली कई रो वाला एक बड़ा बटन</summary>

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

## शर्तें

कुछ विकल्प शर्तों से संचालित होते हैं, जो ठीक वैसे ही लिखी जाती हैं जैसे Home Assistant के [कंडिशनल कार्ड](https://www.home-assistant.io/dashboards/conditional/) की शर्तें:

- किसी [सब-बटन](#सब-बटन) पर `visibility`, उसे दिखाने या छिपाने के लिए
- किसी [पॉप-अप](#पॉप-अप) पर `trigger`, शर्तें पूरी होने पर उसे खोलने के लिए
- आपके [टेम्पलेट](#टेम्पलेट) के अंदर `checkConditionsMet(conditions, hass)`, जब आपको जवाब अपने कोड में चाहिए हो

Home Assistant के हर शर्त प्रकार का मूल्यांकन होता है: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, और `and`, `or` तथा `not` समूह। Home Assistant के कंडिशन बिल्डर की शर्तें भी काम करती हैं, वे जो अपने डोमेन के नाम पर हैं जैसे `sun.is_up`, `light.is_on`, `zone.in_zone` या `temperature.is_value`, अपनी `target`, `options`, `behavior` और `for` सेटिंग्स के साथ।

<details>

<summary><b>उदाहरण</b></summary>

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
> शर्तों का मूल्यांकन आपके ब्राउज़र में होता है, इसलिए जिन थोड़ी सी शर्तों को Home Assistant सर्वर चाहिए वे सटीक नहीं हो सकतीं: सूर्योदय और सूर्यास्त दोबारा गणना करने के बजाय `sun.sun` एंटिटी से पढ़े जाते हैं, और `for` अवधि रिकॉर्डर इतिहास के बिना, अंतिम स्टेट बदलाव से मापी जाती है।
>
> `view_columns` स्वीकार तो किया जाता है पर हमेशा पास हो जाता है, क्योंकि आपके व्यू के कॉलम कभी Bubble Card नहीं सजाता। जिस शर्त प्रकार को Bubble Card नहीं जानता, वह चुपचाप विफल होने के बजाय आपके ब्राउज़र कंसोल में एक बार खुद की सूचना देता है, ताकि आप टाइपिंग की गलती और गायब सुविधा में फर्क कर सकें।

<br>

---

<br>

## टैप, डबल टैप और होल्ड एक्शन

आप उन कार्ड पर जो इस विकल्प को सपोर्ट करते हैं, Home Assistant के डिफ़ॉल्ट टैप एक्शन, डबल टैप एक्शन और होल्ड एक्शन का भी उपयोग कर सकते हैं। उदाहरण के लिए, यह आपको बटन आइकन को होल्ड करके "more info" विंडो दिखाने या सब-बटन दबाए जाने पर एक सर्विस चलाने की सुविधा देता है।

**नोट: जब `double_tap_action` कॉन्फ़िगर किया गया हो, तो सामान्य `tap_action` में डबल टैप का पता लगाने के लिए 200ms की देरी होगी।
यदि यह देरी अवांछित है, तो डबल टैप हैंडलिंग को अक्षम करने के लिए `double_tap_action` को `none` सेट करें।**

### एक्शन विकल्प

<details>

<summary><b>विकल्प (YAML + विवरण)</b></summary>

| नाम | प्रकार | समर्थित विकल्प | विवरण |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | करने के लिए एक्शन |
| `target` | object |  | केवल `call-service` के साथ काम करता है। [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) का पालन करता है |
| `navigation_path` | string | आपके डैशबोर्ड का कोई भी पथ | जब एक्शन navigate के रूप में परिभाषित हो तो नेविगेट करने के लिए पथ (जैसे पॉप-अप खोलने के लिए `'#kitchen'`) |
| `url_path` | string | कोई भी लिंक | जब `action` `url` हो तो क्लिक पर खोलने के लिए URL (जैसे `https://www.google.com`) |
| `service` | string | कोई भी सर्विस | जब `action` को `call-service` परिभाषित किया गया हो तो कॉल करने के लिए सर्विस (जैसे `media_player.media_play_pause`) |
| `data` या `service_data` | object | कोई भी सर्विस डेटा | जब `action` को `call-service` परिभाषित किया गया हो तो शामिल करने के लिए सर्विस डेटा (जैसे `entity_id: media_player.kitchen`) |
| `confirmation` | object | देखें [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | एक कन्फ़र्मेशन पॉप-अप दिखाएं (Bubble Card वाला नहीं), डिफ़ॉल्ट `confirmation` ऑब्जेक्ट को ओवरराइड करता है |

</details>

#### उदाहरण

<details>

<summary>पॉप-अप खोलने के लिए एक बटन</summary>

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

## स्टाइलिंग

आप चार तरीकों से **card-mod का उपयोग किए बिना** सभी कार्ड की CSS को संशोधित करने के लिए कस्टम स्टाइल जोड़ सकते हैं:

- एडिटर में, जिस कार्ड को आप संशोधित करना चाहते हैं वहां जाएं, फिर _Styling options > Custom styles & JS templates_ पर जाएं, और अपने कस्टम स्टाइल जोड़ें (नीचे दिए गए सुझाव और उदाहरण देखें)।
- एडिटर में (या [YAML](#कॉन्फ़िगरेशन) में), जिस कार्ड को आप संशोधित करना चाहते हैं वहां जाएं, फिर _Modules_ पर जाएं, फिर एक नया मॉड्यूल बनाएं (यह सभी कार्ड के लिए उपलब्ध होगा), या किसी भी उपलब्ध मॉड्यूल को इंस्टॉल करने के लिए **Module Store** पर जाएं (मॉड्यूल के बारे में अधिक विवरण [नीचे](#मॉड्यूल) मिल सकते हैं)।
- किसी [थीम](https://www.home-assistant.io/integrations/frontend/#defining-themes) फ़ाइल में YAML में CSS वेरिएबल जोड़कर (ये ऊपर हर कार्ड के दस्तावेज़ीकरण में उपलब्ध हैं)। इससे ग्लोबल संशोधन संभव होते हैं।

  <details>
  
  <summary>Example</a></summary>
  
  <br>

  `Bubble:` वाली लाइन को कॉपी न करें, यह उस थीम का नाम है जिसका आप उपयोग करते हैं। आपको वेरिएबल से `--` भी हटाना होगा।

  किसी भी संशोधन के बाद थीम को रीफ्रेश करने के लिए आपको [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) एक्शन चलाना होगा।

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
  
- YAML में `styles: |` जोड़कर, उसके बाद अपने कस्टम स्टाइल (नीचे दिए गए सुझाव और उदाहरण देखें)।

> [!TIP]  
> **यह समझने के लिए कि कौन सी स्टाइल क्लास संशोधित की जा सकती हैं**, आप इस रिपॉज़िटरी में [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) फ़ोल्डर देख सकते हैं। हर कार्ड फ़ोल्डर में, आपको `styles.css` नाम की एक फ़ाइल मिलेगी। इन फ़ाइलों में सभी लागू स्टाइल शामिल हैं। इससे CSS वेरिएबल की तुलना में कहीं अधिक संभावनाएं मिलती हैं, लेकिन इसे हर कार्ड में अलग-अलग जोड़ना पड़ता है।
> 
> आपको [समुदाय के कई उदाहरण](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) भी मिल सकते हैं, या थोड़ी खोजबीन करके [Home Assistant फोरम](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) से कुछ उदाहरण मिल सकते हैं।
>
> Home Assistant के लिए Bubble थीम (स्क्रीनशॉट में दिखाई गई जैसी) [यहाँ](https://github.com/Clooos/Bubble) मिल सकती है।
>
> मेरे [YouTube चैनल](https://www.youtube.com/@cloooos) पर जल्द ही एक ट्यूटोरियल वीडियो आ रहा है!

> [!IMPORTANT]  
> कृपया ध्यान दें कि आपको पहले से परिभाषित कुछ CSS स्टाइल में `!important;` जोड़ना पड़ सकता है (नीचे दिए गए उदाहरण देखें)।

> [!TIP]  
> सब-बटन को नाम-आधारित क्लास से टारगेट किया जा सकता है। उदाहरण के लिए, "My sub-button" नाम के एक सब-बटन को `.my-sub-button` से स्टाइल किया जा सकता है। स्लाइडर सब-बटन `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` आदि भी उपलब्ध कराते हैं।
>
> नाम-आधारित क्लास तब बदल जाती है जब आप सब-बटन का नाम बदलते हैं, और नाम का अनुवाद होने पर उसका भी अनुवाद हो जाता है। सब-बटन पर `css_class` सेट करें ताकि आपको अपनी एक ऐसी क्लास मिले जो कभी न बदले, चाहे नाम कुछ भी हो और चाहे भाषा कोई भी हो।

#### उदाहरण

<details>

<summary>Changing the font size of any Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Changing the background color of a single button in an horizontal buttons stack</summary>

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

<summary>Changing the background color of a card</summary>

<br>

यह सभी Bubble Card प्रकारों पर काम करता है (पॉप-अप को छोड़कर):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

यह केवल एक बटन कार्ड में वही काम करता है (यह पॉप-अप हेडर के लिए भी काम करता है): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

जब यह `on` हो तो रंग बदलने के लिए नीचे दिए गए स्टाइल टेम्पलेट देखें।

</details>

<details>

<summary>Changing the color of a button slider</summary>

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

<summary>Changing the line color of a separator</summary>

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

<summary>Changing the color of an icon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

एक हॉरिज़ॉन्टल बटन स्टैक आइकन के लिए।
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Changing the background color of an icon container</summary>

<br>

यह सभी Bubble Card प्रकारों पर काम करता है (पॉप-अप को छोड़कर):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

यह पॉप-अप हेडर के लिए वही काम करता है: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Changing the size of the sub-buttons (perfect for the large layout)</summary>

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

<summary>Changing the background color of the second sub-button</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Changing the size of an icon</summary>

<br>

मुख्य आइकन के लिए।

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

सब-बटन आइकन के लिए।

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Using a picture rather than an icon in a sub button</summary>

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

बस इस चित्र को Home Assistant के "www" फ़ोल्डर में एक "pictures" फ़ोल्डर (या जो नाम आप चाहें) में अपलोड करें।

</details>

<details>

<summary>Advanced example: Creating an horizontal row of sub-buttons (screenshot included)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> मुझे यह वाकई बहुत पसंद है, मैं इसे अपने डैशबोर्ड पर हेडर के रूप में इस्तेमाल करता हूँ।

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

## टेम्पलेट

**Bubble Card Jinja टेम्पलेट को सपोर्ट नहीं करता** लेकिन एडवांस्ड यूज़र अपने [कस्टम स्टाइल](#स्टाइलिंग) में सीधे JS में टेम्पलेट जोड़ सकते हैं। उदाहरण के लिए, इससे आप किसी एलिमेंट के आइकन, टेक्स्ट या रंग को डायनामिक रूप से बदल सकते हैं, किसी स्थिति के आधार पर किसी एलिमेंट को शर्त के साथ दिखा या छिपा सकते हैं (जैसे सब-बटन), या किसी स्टेट, एट्रिब्यूट और इससे भी अधिक के आधार पर लगभग कुछ भी कर सकते हैं।

> [!TIP]  
> JS टेम्पलेट के बारे में अधिक जानकारी [यहाँ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) है। मेरी सलाह है कि यह सुनिश्चित करने के लिए कि सब कुछ सही ढंग से काम कर रहा है, **हमेशा अपने ब्राउज़र कंसोल को देखें**।

> [!IMPORTANT]  
> **जो भी टेम्पलेट किसी CSS प्रॉपर्टी को संशोधित नहीं कर रहे हैं, उन्हें अंत में रखा जाना चाहिए! जैसे किसी आइकन, टेक्स्ट या किसी भी एलिमेंट को संशोधित करना।**

#### उपलब्ध वेरिएबल और फ़ंक्शन

<details>

<summary>Variables</summary>

<br>

अधिकांश कार्ड में आपके पास ये वेरिएबल उपलब्ध हैं:

- `state` आपकी परिभाषित `entity` का स्टेट वापस देगा।
  
- `entity` आपकी परिभाषित एंटिटी वापस देगा, जैसे इस उदाहरण में `switch.test`।
  
- `icon` का उपयोग आइकन बदलने के लिए इस तरह किया जा सकता है `icon.setAttribute("icon", "mdi:lightbulb")`।

- `subButtonState[0]` आपके पहले सब-बटन की परिभाषित `entity` का स्टेट वापस देगा, `[0]` पहला सब-बटन स्टेट है, `[1]` दूसरा...
  
- `subButtonIcon[0]` का उपयोग पहले सब-बटन के आइकन को बदलने के लिए इस तरह किया जा सकता है `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` पहला सब-बटन आइकन है, `[1]` दूसरा...
  
- `card` DOM में कार्ड एलिमेंट वापस देगा।
  
- `hass` एक एडवांस्ड वेरिएबल है जो आपको और भी अधिक नियंत्रण देता है, उदाहरण के लिए आप `light.kitchen` का स्टेट इस तरह वापस पा सकते हैं `hass.states['light.kitchen'].state`, या कोई एट्रिब्यूट इस तरह `hass.states[entity].attributes.brightness`।

- `this` आपके सेटअप और डैशबोर्ड के बारे में बहुत सी उपयोगी जानकारी वापस देगा, इसका उपयोग तभी करें जब आपको पता हो कि आप क्या कर रहे हैं।

</details>

<details>

<summary>Functions</summary>

<br>

आपके पास सभी ग्लोबल JS फ़ंक्शन तक पहुंच है, लेकिन इनकी भी पहुंच है:

- `getWeatherIcon` का उपयोग किसी स्टेट के आधार पर मौसम का आइकन वापस देने के लिए किया जा सकता है जो मौसम वापस देता है। उदाहरण के लिए, आप तीसरे सब-बटन के आइकन को आज के मौसम के आइकन में बदलने के लिए ऐसा कर सकते हैं `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, कल के लिए `.forecast[1]?.condition` है...

  इसके लिए आपको एक टेम्पलेट सेंसर बनाना होगा। यहाँ बताया गया है कि आप अपनी `configuration.yaml` में क्या जोड़ सकते हैं:
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
- `checkConditionsMet(conditions, hass)` तब `true` लौटाता है जब [शर्तों](#शर्तें) की सूची पूरी होती है, उदाहरण के लिए `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`।
- `hass.formatEntityState(state)` का उपयोग किसी स्टेट का अनुवाद करने के लिए किया जा सकता है (इसका उपयोग किसी स्टेट यूनिट को बिना मैन्युअल रूप से जोड़े प्राप्त करने के लिए भी किया जा सकता है)।
- `hass.formatEntityAttributeValue(state, "attribute")` का उपयोग किसी एट्रिब्यूट का अनुवाद करने के लिए किया जा सकता है (इसका उपयोग किसी स्टेट यूनिट को बिना मैन्युअल रूप से जोड़े प्राप्त करने के लिए भी किया जा सकता है)।

</details>

#### उदाहरण

नीचे आपको बहुत से उदाहरण मिल सकते हैं, लेकिन आपको मेरे [Patreon पेज](https://www.patreon.com/c/Clooos) पर बहुत ही एडवांस्ड टेम्पलेट भी मिल सकते हैं, जैसे एक (मेरा पसंदीदा) जो कार्ड के आइकन के चारों ओर रखे चार शर्ती बैज तक की सुविधा देता है। यह Bubble Card के कस्टम स्टाइल और टेम्पलेट की सभी संभावनाओं के बारे में सीखने का भी एक शानदार तरीका है!

<details>
<summary>Examples from my Patreon page</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Adding Home Assistant like badges to any card</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Showing formatted date and time in a separator without using any entity</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Showing a sub-button state on two lines</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Customizing labels and icons inside a select sub-button</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Adding a persistent reminder pop-up that shows up only when needed</a>
</p>

<br>

</details>

<details>

<summary>Changing the background color of a button that is red when it's <code>off</code> and blue when it's <code>on</code></summary>

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

<summary>Changing the background color of a button based on an entity for the horizontal buttons stack</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Showing/Hiding a sub-button conditionally</summary>

<br>

यह पहला सब-बटन तभी दिखा रहा है जब मेरा वैक्यूम फंसा हो।
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

यह एक सब-बटन तब दिखा रहा है जब बैटरी 10% से नीचे हो। उस सब-बटन के साथ उपयोगी है जो "Low battery" दिखाता है।
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Changing an icon or sub-button icon conditionally</summary>

<br>

यह किसी बटन के आइकन को तभी बदल रहा है जब कोई वैक्यूम फंसा हो।
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

यह पहले सब-बटन के आइकन को तभी बदल रहा है जब कोई वैक्यूम फंसा हो।
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Changing an icon or sub-button icon color conditionally</summary>

<br>

यह किसी बटन के आइकन का रंग उसके स्टेट के आधार पर बदल रहा है।
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

यह किसी सब-बटन के आइकन का रंग उसके स्टेट के आधार पर बदल रहा है। `.bubble-sub-button-1` पहला सब-बटन है, किसी और सब-बटन आइकन को बदलना चाहते हैं तो `1` बदलें।
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animating a fan icon conditionally</summary>

<br>

यह किसी बटन के आइकन को घुमा रहा है जब पंखा `on` हो।
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

<summary>Templating texts (like name or state)</summary>

<br>

यह आपके मौसम के आधार पर किसी बटन के नाम/स्टेट को "It's currently sunny" से बदल रहा है।
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
या सब-बटन पर लागू होने पर:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


अगर आप स्टेट (`.bubble-state`) को टेम्पलेट करना चाहते हैं तो `show_state: true` को टॉगल न करें, बिना किसी एट्रिब्यूट के बस `show_attribute: true` को टॉगल करें।

</details>

<details>

<summary>Advanced example: Changing the color of a sub-button when a pop-up is open</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Advanced example: Templating a separator name based on a state translated to your language</summary>

<br>

आप किसी स्टेट का अनुवाद करने के लिए `hass.formatEntityState(state)` और किसी एट्रिब्यूट का अनुवाद करने के लिए `hass.formatEntityAttributeValue(state, "attribute")` का उपयोग कर सकते हैं।

यह मौसम के आधार पर नाम और आइकन बदल रहा है, "Nuageux" का मतलब फ्रेंच में "Cloudy" होता है।

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

## मॉड्यूल

मॉड्यूल एक शक्तिशाली फीचर है जो आपको अपने सभी Bubble Card में कस्टम स्टाइल और टेम्पलेट को सेव करने, फिर से उपयोग करने और शेयर करने देता है। कई कार्ड में एक ही कोड को कॉपी-पेस्ट करने के बजाय, आप एक मॉड्यूल बना सकते हैं और इसे जहां भी ज़रूरत हो वहां लागू कर सकते हैं। इससे आपके डैशबोर्ड के लुक और फील को मैनेज करना बहुत आसान और अधिक कारगर हो जाता है।

लेकिन यह फीचर उससे कहीं अधिक शक्तिशाली है, यह आपको Bubble Card एडिटर में, सभी डिफ़ॉल्ट [Home Assistant फॉर्म](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) विकल्पों का उपयोग करके, खुद असली फीचर जोड़ने देता है!  
ऑब्जेक्ट सिलेक्टर को लाइव बदलाव दिखाने और एट्रिब्यूट को सही ढंग से सपोर्ट करने के लिए बेहतर बनाया गया है।

कोई मॉड्यूल अंतर्निहित [एंटिटी सुझावों](#एंटिटी-सुझाव) के साथ Home Assistant के कार्ड पिकर को भी जवाब दे सकता है: जिन कार्ड का वर्णन पहले से किया जा सकता है उनके लिए `suggestions` का उपयोग करें, और जब उन्हें आपके सेटअप से गणना करनी हो तब `suggestions_code` का, उदाहरण के लिए चुनी गई एंटिटी जिस एरिया की है उसकी हर एंटिटी से बना एक पॉप-अप। दोनों कुंजियों का दस्तावेज़ीकरण [यहाँ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) है।

आप [समुदाय द्वारा बनाए गए मॉड्यूल](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) को खोजने और इंस्टॉल करने के लिए **Module Store** भी ब्राउज़ कर सकते हैं, या अपनी खुद की रचनाएं शेयर कर सकते हैं!

> [!TIP]
> किसी मॉड्यूल का कोड बिल्कुल उसी तरह काम करता है जैसे किसी कार्ड के `styles` सेक्शन का कोड। [टेम्पलेट](#टेम्पलेट) सेक्शन के सभी वेरिएबल और फ़ंक्शन यहाँ भी उपलब्ध हैं।

<br>

### शुरुआती सेटअप

> [!IMPORTANT]
> v3.1.0 से शुरू करते हुए, Bubble Card Tools मॉड्यूल के लिए अनुशंसित स्टोरेज बैकएंड है। लीगेसी टेम्पलेट सेंसर तरीका मौजूदा सेटअप के लिए अभी भी काम करता है, लेकिन नए मॉड्यूल और Module Store फीचर Bubble Card Tools के ज़रिए बेहतर सपोर्ट पाते हैं।

Bubble Card Tools इंटीग्रेशन Module Editor और Module Store को सक्षम करता है, और मॉड्यूल को अलग-अलग YAML फ़ाइलों के रूप में स्टोर करता है। मौजूदा मॉड्यूल अपने-आप माइग्रेट हो जाते हैं।

इंस्टॉलेशन और कॉन्फ़िगरेशन के चरण यहाँ बताए गए हैं:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

आप किसी भी कार्ड की सेटिंग से, **Modules** सेक्शन के तहत Module Editor तक पहुंच सकते हैं। एडिटर दो मुख्य टैब देता है:

#### My Modules टैब

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

यह टैब आपके सभी इंस्टॉल किए गए मॉड्यूल दिखाता है और आपको ये करने देता है:

- मौजूदा कार्ड पर मॉड्यूल **लागू करें** (Apply)
- शुरू से एक नया मॉड्यूल **बनाएं** (Create)
- लाइव प्रीव्यू के साथ मौजूदा मॉड्यूल **संपादित करें** (Edit)
- जिन मॉड्यूल की अब ज़रूरत नहीं उन्हें **हटाएं** (Delete)
- मॉड्यूल को **खोजें** और **सॉर्ट करें** (वर्णानुक्रम, हाल के, सक्रिय पहले)
- किसी मॉड्यूल को अपने-आप सभी कार्ड पर लागू करने के लिए **ग्लोबल स्टेटस सेट करें**
- बैकअप या शेयर करने के लिए मॉड्यूल **इम्पोर्ट/एक्सपोर्ट करें**
- मॉड्यूल एडिटर में **एंटिटी सुझाव लिखें**, **वैकल्पिक: एंटिटी सुझाव** के अंतर्गत, ताकि आपका मॉड्यूल Home Assistant के कार्ड पिकर में सुझाया जाए। नियम और गणना किए गए सुझाव दोनों लिखते समय ही जाँचे जाते हैं, वहाँ कोई त्रुटि होने पर सेव नहीं हो पाता, और प्रीव्यू आपकी चुनी हुई किसी भी एंटिटी के लिए सुझाए गए कार्ड दिखाता है

#### Module Store टैब

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

यह टैब [समुदाय के सभी उपलब्ध मॉड्यूल](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) दिखाएगा, और आपको ये करने देता है:

- समुदाय द्वारा बनाए गए सभी मॉड्यूल **ब्राउज़ करें** (Browse)
- नाम, कम्पैटिबिलिटी या कीवर्ड के आधार पर मॉड्यूल **खोजें** और फ़िल्टर करें
- एक क्लिक में मॉड्यूल **इंस्टॉल करें** (Install)
- नए वर्शन उपलब्ध होने पर इंस्टॉल किए गए मॉड्यूल **अपडेट करें** (Update)

> [!TIP]
> एडिटर में, आप उन असमर्थित मॉड्यूल को सक्षम कर सकते हैं जिन्हें किसी दिए गए कार्ड प्रकार के साथ अभी तक कम्पैटिबल के रूप में चिह्नित नहीं किया गया है, ताकि उन्हें टेस्ट किया जा सके।

<br>

### मॉड्यूल का उपयोग कैसे करें

#### एक नया मॉड्यूल बनाना

<details>

<summary>Click to expand</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. किसी भी कार्ड के एडिटर पर जाएं और **Modules** सेक्शन को खोलें।
2. **Create new module** पर क्लिक करें।
3. मॉड्यूल की जानकारी भरें।
4. **Code** एडिटर में अपना CSS और/या JavaScript टेम्पलेट कोड लिखें।
5. (वैकल्पिक) **Editor** सेक्शन में एक कस्टम कॉन्फ़िगरेशन UI बनाएं (जैसे ऊपर स्क्रीनशॉट में कलर पिकर, पूरा दस्तावेज़ीकरण [यहाँ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) उपलब्ध है)।
6. (वैकल्पिक) अपने **एंटिटी सुझाव** लिखें ताकि आपका मॉड्यूल Home Assistant के कार्ड पिकर में सुझाया जाए। यह पैनल आपके टाइप करते समय ही जाँचता है कि आपने क्या लिखा, और इसका प्रीव्यू आपकी पसंद की एंटिटी के लिए सुझाए गए कार्ड स्वयं दिखाता है।
7. **Save** पर क्लिक करें।

अब आपका मॉड्यूल आपके किसी भी कार्ड पर उपयोग के लिए उपलब्ध है!

<br>

</details>

#### किसी कार्ड पर मॉड्यूल लागू करना

<details>

<summary>Click to expand</summary>

<br>

- **एडिटर के ज़रिए:**

  - जिस कार्ड पर आप मॉड्यूल लागू करना चाहते हैं, उसके एडिटर पर जाएं।
  - **Modules** सेक्शन को खोलें।
  - सूची में से जिस मॉड्यूल को आप लागू करना चाहते हैं, उस पर क्लिक करें।
  - "Apply to" के तहत, "This card" पर क्लिक करें। मॉड्यूल अब सक्रिय है। आप एक ही कार्ड पर कई मॉड्यूल लागू कर सकते हैं।

- **YAML के ज़रिए:**

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

#### किसी मॉड्यूल को ग्लोबल रूप से लागू करना

<details>

<summary>Click to expand</summary>

<br>

आप किसी मॉड्यूल को सभी Bubble Card पर अपने-आप लागू होने के लिए सेट कर सकते हैं:

**यह उन मॉड्यूल के लिए उपलब्ध नहीं है जिनमें एक एडिटर है, क्योंकि उन्हें काम करने के लिए एक विशेष कॉन्फ़िगरेशन की ज़रूरत होती है।**

- **एडिटर के ज़रिए:**

  - Module editor में, **My Modules** टैब में अपना मॉड्यूल खोजें।
  - मॉड्यूल के नाम के बगल में **All cards** बटन टॉगल करें।
  - अब मॉड्यूल अपने-आप सभी कार्ड पर लागू हो जाएगा।
 
- **YAML के ज़रिए:**

  अपने मॉड्यूल YAML कॉन्फ़िगरेशन में (`bubble-modules.yaml` में), बस `is_global: true` जोड़ें।

<br>

</details>

#### किसी ग्लोबल मॉड्यूल से एक कार्ड को बाहर रखना

<details>

<summary>Click to expand</summary>

<br>

अगर आपके पास एक ग्लोबल मॉड्यूल है लेकिन उसे किसी खास कार्ड से बाहर रखना चाहते हैं:

- **एडिटर के ज़रिए:**
  
  - कार्ड के **Modules** सेक्शन में, आपको ग्लोबल मॉड्यूल सूचीबद्ध दिखेंगे।
  - किसी ग्लोबल मॉड्यूल पर क्लिक करें, इस खास कार्ड से इसे बाहर रखने के लिए "This card" को अक्षम करें।

- **YAML के ज़रिए:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### अपना मॉड्यूल Module Store में शेयर करना

<details>

<summary>Click to expand</summary>

<br>

अपना मॉड्यूल Module Store में शेयर करने के लिए, Module Editor में, सबसे नीचे "Export Module" में, "Copy for GitHub" पर क्लिक करें और सामग्री को [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) श्रेणी में एक नई discussion में पेस्ट करें। **विवरण संपादित करें** (अगर ज़रूरी हो), **उदाहरण** (YAML उपयोगकर्ताओं के लिए), और Module Store के लिए **कम से कम एक स्क्रीनशॉट शामिल करना** न भूलें।

**आपका मॉड्यूल इसके तुरंत बाद उपलब्ध हो जाता है** (स्टोर रीफ्रेश के बाद), इसलिए दोबारा जांच लें कि सब कुछ सही ढंग से लिखा गया है और मॉड्यूल अपेक्षा के अनुसार काम कर रहा है। शेयर करने के बाद आप निश्चित रूप से मॉड्यूल को संपादित/अपडेट कर सकते हैं।

<br>

</details>

#### वर्शन प्रबंधन

<details>

<summary>Click to expand</summary>

<br>

Module Store इंस्टॉल किए गए मॉड्यूल के लिए अपडेट की अपने-आप जांच करता है। जब अपडेट उपलब्ध होते हैं:

1. आपको **Module Store** टैब में एक अपडेट इंडिकेटर दिखेगा।
2. उपलब्ध अपडेट वाले मॉड्यूल में **Update** पर क्लिक करें।
3. Module Store में अपडेट की पुष्टि करें।

<br>

</details>

#### समर्थित कार्ड प्रकार परिभाषित करना

<details>

<summary>Click to expand</summary>

<br>

कुछ मॉड्यूल सभी कार्ड प्रकारों के साथ कम्पैटिबल नहीं हो सकते। आप बता सकते हैं कि कोई मॉड्यूल किन कार्ड को सपोर्ट करता है।  
अगर आप चाहते हैं कि कोई मॉड्यूल **सभी कार्ड** के साथ कम्पैटिबल हो, तो बस `supported` फ़ील्ड को छोड़ दें (या एडिटर में **All cards** विकल्प का उपयोग करें)।

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

### उदाहरण

<details>
<summary>Basic styling module</summary>

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
<summary>Module with custom configuration</summary>

<br>

यह मॉड्यूल [यहाँ](https://github.com/Clooos/Bubble-Card/discussions/1231) उपलब्ध है।

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

Module Store में, या [यहाँ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) पर और उदाहरण मिल सकते हैं।

<br>

---

<br>

## स्थानीयकरण

Bubble Card आपकी भाषा बोलता है। इसका एडिटर उन 64 भाषाओं में अनुवादित है जिन्हें Home Assistant सपोर्ट करता है, और जहाँ भी Home Assistant के पास पहले से किसी चीज़ का शब्द है, वहाँ उसी का शब्द दोबारा इस्तेमाल किया जाता है, ताकि आप दोनों इंटरफ़ेस में एक ही शब्द पढ़ें।

एडिटर के नीचे, वर्शन नंबर के बगल में, एक **स्वचालित** स्विच आपके Home Assistant की भाषा का अनुसरण करता है। इसे बंद करें और पूरा एडिटर अंग्रेज़ी में लौट आता है, जो किसी ट्यूटोरियल का अनुसरण करने या समस्या रिपोर्ट करने के लिए सुविधाजनक है। आपकी पसंद आपके ब्राउज़र में याद रखी जाती है।

यह दस्तावेज़ीकरण भी अनुवादित है, [62 भाषाओं में](languages.md), ब्रिटिश अंग्रेज़ी को छोड़कर सभी में, जो मूल पाठ ही दिखाती है। ये पेज सभी के लिए खुले हैं, इसलिए जो शब्द आपके अपने Home Assistant से मेल नहीं खाता उसे कुछ ही क्लिक में ठीक किया जा सकता है। सामग्री के लिए अंग्रेज़ी संस्करण ही संदर्भ बना रहता है।

<br>

---

<br>

## सहायता

अगर कुछ अपेक्षा के अनुसार काम नहीं कर रहा है तो बेझिझक एक issue खोलें। 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card के बारे में सवाल या विचार हैं? अपने डैशबोर्ड या नई खोजें शेयर करना चाहते हैं? आप Home Assistant फोरम पर, Bubble Card सबरेडिट पर, या GitHub Discussions सेक्शन पर जा सकते हैं।

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## योगदान

योगदान का स्वागत है! चाहे वह बग फिक्स हो, नए फीचर हों, अनुवाद हों, या दस्तावेज़ीकरण में सुधार हों, बेझिझक एक pull request खोलें।

शुरू करने से पहले, कृपया [डेवलपर गाइड](DEVELOPERS.md) पढ़ें, जिसमें बताया गया है कि अपना लोकल वातावरण कैसे सेट करें, प्रोजेक्ट कैसे बिल्ड करें, और अपने बदलावों को कैसे टेस्ट करें।

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## दान करें

मैं अपने ज़्यादातर खाली समय को इस प्रोजेक्ट को यथासंभव बेहतरीन बनाने में लगाता हूँ। तो अगर आप मेरे काम की कद्र करते हैं, तो कोई भी दान आपके सहयोग को दिखाने का एक शानदार तरीका होगा 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

सबका समर्थन देने के लिए धन्यवाद, आप सब मेरी सबसे बड़ी प्रेरणा हैं!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
