<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> ఈ పేజీ ఒక స్వయంచాలక అనువాదం. సందేహం ఉంటే, [అసలైన ఆంగ్ల డాక్యుమెంటేషన్](../README.md) ప్రామాణికం. ఏదైనా వాక్యం సరిగా అనిపించలేదా? ఏ సహాయమైనా స్వాగతం, మరియు [ఈ పేజీని సరిచేయడానికి](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.te.md) ఒక నిమిషం చాలు: ఫోర్క్ మరియు పుల్ రిక్వెస్ట్‌ను GitHub చూసుకుంటుంది. ముందుగానే ధన్యవాదాలు! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[దీన్ని మరో భాషలో చదవండి](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card అనేది Home Assistant కోసం ఒక సరళమైన మరియు అనుకూలీకరించదగిన కార్డ్ సేకరణ, ఇందులో ఆధునిక పాప్-అప్‌లు మరియు 100కు పైగా కమ్యూనిటీ తయారుచేసిన మాడ్యూల్‌లతో కూడిన ఇంటిగ్రేటెడ్ Module Store ఉన్నాయి.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## విషయ సూచిక

**[`ఇన్‌స్టాలేషన్`](#ఇన్స్టాలేషన్)**  **[`కాన్ఫిగరేషన్`](#కాన్ఫిగరేషన్)**  **[`ఎంటిటీ సూచనలు`](#ఎంటిటీ-సూచనలు)**  **[`పాప్-అప్`](#పాప్-అప్)**  **[`క్షితిజ సమాంతర బటన్‌ల స్టాక్`](#క్షితిజ-సమాంతర-బటన్ల-స్టాక్)**  **[`బటన్`](#బటన్)**  **[`మీడియా ప్లేయర్`](#మీడియా-ప్లేయర్)**  **[`కవర్`](#కవర్)**  **[`సెలెక్ట్`](#సెలెక్ట్)**  **[`వాతావరణ నియంత్రణ`](#వాతావరణ-నియంత్రణ)**  **[`క్యాలెండర్`](#క్యాలెండర్)**  **[`విభజన`](#విభజన)**  **[`ఖాళీ నిలువు వరుస`](#ఖాళీ-నిలువు-వరుస)**  **[`సబ్-బటన్‌లు మాత్రమే`](#సబ్-బటన్లు-మాత్రమే)**  **[`సబ్-బటన్‌లు`](#సబ్-బటన్లు)**  **[`కార్డ్ లేఅవుట్‌లు`](#కార్డ్-లేఅవుట్లు)**  **[`షరతులు`](#షరతులు)**  **[`చర్యలు`](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు)**  **[`స్టైలింగ్`](#స్టైలింగ్)**  **[`టెంప్లేట్‌లు`](#టెంప్లేట్లు)**  **[`మాడ్యూల్‌లు`](#మాడ్యూల్లు)**  **[`స్థానికీకరణ`](#స్థానికీకరణ)**  **[`సహాయం`](#సహాయం)**  **[`సహకరించడం`](#సహకరించడం)**  **[`విరాళం ఇవ్వండి`](#విరాళం-ఇవ్వండి)**

<br>

## ఇన్‌స్టాలేషన్

**Home Assistant మద్దతిచ్చే కనీస వెర్షన్:** 2023.9.0

<details>

<summary>HACS లేకుండా</summary>

<br>

1. ఈ ఫైల్‌ను డౌన్‌లోడ్ చేయండి: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. ఈ ఫైల్‌ను మీ `<config>/www` ఫోల్డర్‌లో పెట్టండి. ఎడిటర్ మీ భాషలో ఉండాలంటే [dist ఫోల్డర్](https://github.com/Clooos/Bubble-Card/tree/main/dist) నుండి `bubble-card-<lang>.json` ను కూడా డౌన్‌లోడ్ చేయండి, ఉదాహరణకు `bubble-card-fr.json`, దానిని `bubble-card.js` పక్కన ఉంచండి (అది లేకుండా ఎడిటర్ ఆంగ్లంలోనే ఉంటుంది)
3. మీ డాష్‌బోర్డ్‌లో కుడి ఎగువ మూలలో ఉన్న ఐకాన్‌పై నొక్కి, ఆపై `Edit dashboard` పై నొక్కండి
4. ఆ ఐకాన్‌పై మళ్లీ నొక్కి, ఆపై `Manage resources` పై నొక్కండి
5. `Add resource` పై నొక్కండి
6. దీన్ని కాపీ చేసి పేస్ట్ చేయండి: `/local/bubble-card.js?v=1`
7. `JavaScript Module` పై, ఆపై `Create` పై నొక్కండి
8. వెనక్కి వెళ్లి మీ పేజీని రిఫ్రెష్ చేయండి
9. ఇప్పుడు మీరు కుడి దిగువ మూలలో `Add card` పై నొక్కి `Bubble Card` కోసం వెతకవచ్చు
10. ఫైల్‌ను ఏదైనా అప్‌డేట్ చేసిన తర్వాత, మీరు `/local/bubble-card.js?v=1`ను ఎడిట్ చేసి వెర్షన్‌ను ఏదైనా పెద్ద సంఖ్యకు మార్చాలి

ఇది పనిచేయకపోతే, మీ బ్రౌజర్ కాష్‌ను క్లియర్ చేయడానికి ప్రయత్నించండి.

</details>

<details>

<summary>HACSతో (సిఫార్సు చేయబడింది)</summary>

<br>

ఈ పద్ధతి మీకు Home Assistant Community Storeలో నేరుగా అప్‌డేట్‌లను పొందడానికి అనుమతిస్తుంది

1. HACS ఇంకా ఇన్‌స్టాల్ చేయకుంటే, [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) లోని సూచనలను అనుసరించి దాన్ని డౌన్‌లోడ్ చేయండి
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) లోని సూచనలను అనుసరించి HACS ప్రారంభ కాన్ఫిగరేషన్‌ను కొనసాగించండి
3. మీ సైడ్‌బార్‌లో "HACS"కు వెళ్లండి
4. "Bubble Card" కోసం వెతకండి, లేదా దిగువన ఉన్న నీలం బటన్‌పై నొక్కండి
5. "Download" పై నొక్కండి
6. మీ డాష్‌బోర్డ్‌కు తిరిగి వెళ్లి, కుడి ఎగువ మూలలో ఉన్న ఐకాన్‌పై నొక్కి, ఆపై `Edit dashboard` పై నొక్కండి
7. ఇప్పుడు మీరు కుడి దిగువ మూలలో `Add card` పై నొక్కి `Bubble Card` కోసం వెతకవచ్చు

ఇది పనిచేయకపోతే, మీ బ్రౌజర్/యాప్ కాష్‌ను క్లియర్ చేయడానికి ప్రయత్నించండి (అవసరమైతే మీ అన్ని పరికరాల్లో).

#### వీడియోలు

మీరు దశలవారీ వీడియోల కోసం నా YouTube ఛానెల్‌ను కూడా చూడవచ్చు.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## కాన్ఫిగరేషన్

అన్ని ఎంపికలను Home Assistant ఎడిటర్‌లో కాన్ఫిగర్ చేయవచ్చు. కానీ మీరు మరిన్ని వివరాలను మరియు YAMLను దిగువ డాక్యుమెంటేషన్‌లో కనుగొనవచ్చు.

<details>

<summary><b>ప్రధాన ఎంపికలు (YAML + వివరణ)</b></summary>

| పేరు | రకం | అవసరం | మద్దతిచ్చే ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `type` | string | **అవసరం** | `custom:bubble-card` | కార్డ్ రకం |
| `card_type` | string | **అవసరం** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` లేదా `sub-buttons` | Bubble Card రకం, దిగువన చూడండి |
| `styles` | object list | ఐచ్ఛికం | ఏదైనా CSS స్టైల్‌షీట్‌లు | మీ Bubble Card CSSను అనుకూలీకరించడానికి అనుమతిస్తుంది, [స్టైలింగ్](#స్టైలింగ్) చూడండి |

</details>

<details>

<summary><b>గ్లోబల్ CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | మద్దతిచ్చే అన్ని ఎలిమెంట్‌ల కోసం బోర్డర్ రేడియస్ |
| `--bubble-main-background-color` | `color` | మద్దతిచ్చే అన్ని ఎలిమెంట్‌ల కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-secondary-background-color` | `color` | మద్దతిచ్చే అన్ని ఎలిమెంట్‌ల కోసం ద్వితీయ బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-accent-color` | `color` | మద్దతిచ్చే అన్ని ఎలిమెంట్‌ల కోసం యాక్సెంట్ రంగు |
| `--bubble-icon-border-radius` | `px` | మద్దతిచ్చే అన్ని ఎలిమెంట్‌ల కోసం ఐకాన్ బోర్డర్ రేడియస్ |
| `--bubble-icon-background-color` | `color` | మద్దతిచ్చే అన్ని ఎలిమెంట్‌ల కోసం ఐకాన్ బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-sub-button-border-radius` | `px` | అన్ని సబ్-బటన్‌ల కోసం బోర్డర్ రేడియస్ |
| `--bubble-sub-button-background-color` | `color` | అన్ని సబ్-బటన్‌ల కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) చూడండి | మద్దతిచ్చే అన్ని ఎలిమెంట్‌ల కోసం బాక్స్ షాడో |
| `--bubble-border` | [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) చూడండి | మద్దతిచ్చే అన్ని కార్డ్‌ల కోసం బోర్డర్ |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card మరియు దాని సామర్థ్యాల గురించి తెలుసుకోవడానికి ఈ [వీడియో](https://www.youtube.com/watch?v=0hSQOlBxKKI)ను చూడండి.** నా YouTube ఛానెల్ చాలా కొత్తది మరియు Home Assistant, Bubble Card గురించిన ట్యుటోరియల్‌లపై దృష్టి పెడుతుంది. నా ఛానెల్ కనిపించడాన్ని పెంచడంలో సహాయపడటానికి సబ్‌స్క్రైబ్ చేయడానికి వెనుకాడకండి. ముందుగానే ధన్యవాదాలు!

<br>

---

<br>

## ఎంటిటీ సూచనలు

Home Assistant 2026.6 నుండి, కార్డ్ పికర్‌లో ఒక ఎంటిటీని ఎంచుకుంటే కొన్ని సిద్ధంగా ఉన్న కార్డ్‌లు మీకు అందించబడతాయి, ఆ జాబితాకు Bubble Card తన సొంత వంటకాలను జోడిస్తుంది. ఒక లైట్‌ను ఎంచుకుంటే బ్రైట్‌నెస్ స్లయిడర్‌తో కూడిన కార్డ్ అందించబడుతుంది, మీ లైట్ మద్దతు ఇస్తే రంగు ఉష్ణోగ్రత, రంగు మరియు సంతృప్తత వేరియంట్‌లు కూడా అందించబడతాయి. ఒక కవర్‌ను ఎంచుకుంటే దాని స్థాన స్లయిడర్ వస్తుంది, ఒక మీడియా ప్లేయర్‌ను ఎంచుకుంటే దాని మూలాల జాబితాతో కూడిన వేరియంట్ కూడా వస్తుంది, ఒక వాక్యూమ్‌ను ఎంచుకుంటే దాని ప్రారంభం, విరామం మరియు డాక్ బటన్‌లు వస్తాయి. ప్రతి సూచన లైవ్ ప్రివ్యూగా చూపబడే సాధారణ Bubble Card కాన్ఫిగరేషనే, కాబట్టి దగ్గరగా ఉన్నదాన్ని తీసుకుని ఎప్పటిలాగే సవరించడం కొనసాగించవచ్చు.

మీకు ఏమి అందించబడుతుందో అనేది మీ ఎంటిటీ నిజంగా ఏమి చేయగలదో దానిపై ఆధారపడి ఉంటుంది: బ్రైట్‌నెస్ ఛానెల్ లేని లైట్‌కు స్లయిడర్‌కు బదులుగా టాగుల్ వస్తుంది, వంగలేని కవర్‌కు టిల్ట్ వేరియంట్ రాదు, ఒక క్లైమేట్ ఎంటిటీకి ప్రీసెట్ మోడ్‌లు ఉన్నప్పుడు మాత్రమే అవి వస్తాయి. వర్తించినప్పుడు సంప్రదాయ ఎంట్రీలు Bubble Card సూచనల కింద వస్తాయి: ఆ ఎంటిటీ రకానికి ప్రత్యేకమైన కార్డ్, ఒక సాధారణ బటన్ మరియు ఒక స్లయిడర్.

> [!TIP]
> మాడ్యూల్‌లు ఆ జాబితాకు తమ సొంత సూచనలను జోడించగలవు, [మాడ్యూల్‌లు](#మాడ్యూల్లు) చూడండి.

<br>

---

<br>

## పాప్-అప్

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

ఈ కార్డ్ మీకు ఏదైనా కంటెంట్‌తో పాప్-అప్‌ను సృష్టించడానికి అనుమతిస్తుంది. ప్రతి పాప్-అప్ **డిఫాల్ట్‌గా దాచబడి ఉంటుంది** మరియు దాని లింక్‌ను లక్ష్యంగా చేసుకోవడం ద్వారా (ఉదా. `'#pop-up-name'`), `navigate` [చర్య](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు)కు మద్దతిచ్చే ఏదైనా కార్డ్‌తో, లేదా చేర్చబడిన [క్షితిజ సమాంతర బటన్‌ల స్టాక్](#క్షితిజ-సమాంతర-బటన్ల-స్టాక్)తో తెరవవచ్చు.

> [!TIP]
> ### పాప్-అప్ ట్రిగ్గర్ 
> ఈ ఫీచర్ మీకు ఏదైనా ఎంటిటీ స్థితి ఆధారంగా పాప్-అప్‌ను తెరవడానికి అనుమతిస్తుంది, ఉదాహరణకు, మీ ఇంటి ముందు ఒక వ్యక్తి ఉన్నప్పుడు మీరు కెమెరాతో "Security" పాప్-అప్‌ను తెరవవచ్చు. మీరు టోగుల్ హెల్పర్ (input_boolean) కూడా సృష్టించవచ్చు మరియు ఆటోమేషన్‌లో దాని తెరవడం/మూసివేయడాన్ని ట్రిగ్గర్ చేయవచ్చు.
> <details>
> <summary><code>binary_sensor</code> <code>on</code>గా ఉన్నప్పుడు పాప్-అప్‌ను తెరవడం</summary>
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
> ### పాప్-అప్‌ను మూసివేయడానికి వివిధ మార్గాలు 
> పాప్-అప్‌ను మూసివేయడానికి అనేక మార్గాలు ఉన్నాయి. ఉదాహరణకు, మీరు పాప్-అప్ హెడర్ నుండి దిగువకు స్వైప్ చేయడం ద్వారా, పాప్-అప్ లోపల దిగువకు పొడవైన స్వైప్ చేయడం ద్వారా, డెస్క్‌టాప్‌లో Escape నొక్కడం ద్వారా, URLలో హాష్‌ను తీసివేయడం ద్వారా లేదా కేవలం క్లోజ్ బటన్‌ను నొక్కడం ద్వారా మూసివేయవచ్చు.
>


### పాప్-అప్ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతిచ్చే ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `hash` | string | **అవసరం** | ఏదైనా ప్రత్యేకమైన హాష్ (ఉదా. `'#kitchen'`) ' 'తో | ఇది మీ పాప్-అప్‌ను ఎలా తెరుస్తారు అనేది |
| `popup_style` | string | ఐచ్ఛికం | `bubble` (డిఫాల్ట్) లేదా `classic` | పాప్-అప్ విజువల్ స్టైల్‌ను నిర్వచించండి |
| `popup_mode` | string | ఐచ్ఛికం | `default` (డిఫాల్ట్), `fit-content`, `centered` లేదా `adaptive-dialog` | పాప్-అప్ లేఅవుట్ మోడ్‌ను నిర్వచించండి |
| `with_bottom_offset` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | `popup_mode: fit-content` లేదా `adaptive-dialog`తో మాత్రమే ఉపయోగించబడుతుంది. మొబైల్‌లో దిగువ ఆఫ్‌సెట్‌ను వర్తింపజేస్తుంది, మీ డాష్‌బోర్డ్‌లో ఫుటర్ కార్డ్ ఉన్నప్పుడు ఉపయోగకరంగా ఉంటుంది. |
| `full_width_on_mobile` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | `popup_mode: centered`తో మాత్రమే ఉపయోగించబడుతుంది. మొబైల్‌లో పాప్-అప్‌ను పూర్తి స్క్రీన్ వెడల్పుకు విస్తరిస్తుంది, చిన్న డిస్‌ప్లేలలో ఉపయోగకరంగా ఉంటుంది. |
| `performance_mode` | string | ఐచ్ఛికం | `default` (డిఫాల్ట్) లేదా `performance` | పాప్-అప్ తెరిచే యానిమేషన్‌ను ఆప్టిమైజ్ చేయండి. `performance` కంటెంట్ రెండరింగ్ మరియు బ్యాక్‌గ్రౌండ్ బ్లర్‌ను కొద్దిగా ఆలస్యం చేస్తుంది, సెట్ చేసినట్లయితే బ్యాక్‌డ్రాప్ బ్లర్‌ను కూడా నిలిపివేస్తుంది. |
| `auto_close` | string | ఐచ్ఛికం | మిల్లీసెకన్లలో టైమ్‌అవుట్ (ఉదా. 10సె కోసం `10000`) | టైమ్‌అవుట్ తర్వాత పాప్-అప్‌ను స్వయంచాలకంగా మూసివేయండి |
| `close_on_click` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | ఏదైనా ఇంటరాక్షన్ తర్వాత పాప్-అప్‌ను స్వయంచాలకంగా మూసివేయండి |
| `close_by_clicking_outside` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | పాప్-అప్ వెలుపల క్లిక్ చేయడం ద్వారా దాన్ని మూసివేయండి |
| `width_desktop` | string | ఐచ్ఛికం | ఏదైనా CSS విలువ | డెస్క్‌టాప్‌లో వెడల్పు (మొబైల్‌లో డిఫాల్ట్‌గా `100%`) |
| `margin` | string | ఐచ్ఛికం | ఏదైనా CSS విలువ | మీ పాప్-అప్ మొబైల్‌లో సరిగ్గా మధ్యలో లేనప్పుడు **మాత్రమే** దీన్ని ఉపయోగించండి (ఉదా. `13px`) |
| `margin_top_mobile` | string | ఐచ్ఛికం | ఏదైనా CSS విలువ | మొబైల్‌లో టాప్ మార్జిన్ (ఉదా. మీ హెడర్ దాచబడితే `-56px`) |
| `margin_top_desktop` | string | ఐచ్ఛికం | ఏదైనా CSS విలువ | డెస్క్‌టాప్‌లో టాప్ మార్జిన్ (ఉదా. సగం-పరిమాణ పాప్-అప్ కోసం `50vh` లేదా `400px` స్థిర ఎత్తు కోసం `calc(100vh - 400px)`) |
| `bg_color` | string | ఐచ్ఛికం | ఏదైనా hex, rgb లేదా rgba విలువ | మీ పాప్-అప్ బ్యాక్‌గ్రౌండ్ రంగు (ఉదా. తెల్లని బ్యాక్‌గ్రౌండ్ కోసం `#ffffff`) |
| `bg_opacity` | string | ఐచ్ఛికం | `0` నుండి `100` వరకు ఏదైనా విలువ | మీ పాప్-అప్ బ్యాక్‌గ్రౌండ్ అస్పష్టత (ఉదా. పారదర్శకత లేకుండా `100`) |
| `bg_blur` | string | ఐచ్ఛికం | `0` నుండి `100` వరకు ఏదైనా విలువ | మీ పాప్-అప్ బ్యాక్‌గ్రౌండ్ బ్లర్ ఎఫెక్ట్, **ఇది `bg_opacity` `100`కి సెట్ చేయనప్పుడు మాత్రమే పనిచేస్తుంది** (ఉదా. బ్లర్ లేకుండా `0`)|
| `shadow_opacity` | string | ఐచ్ఛికం | `0` నుండి `100` వరకు ఏదైనా విలువ | మీ పాప్-అప్ షాడో అస్పష్టత (ఉదా. దాచడానికి `0`) |
| `hide_backdrop` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | అన్ని పాప్-అప్‌లలో బ్యాక్‌డ్రాప్‌ను నిలిపివేయడానికి దీన్ని మీ ప్రధాన డాష్‌బోర్డ్‌లోని మొదటి పాప్-అప్‌లో ట్రూగా సెట్ చేయండి. |
| `background_update` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | బ్యాక్‌గ్రౌండ్‌లో పాప్-అప్ కంటెంట్‌ను అప్‌డేట్ చేయండి (సిఫార్సు చేయబడలేదు) |
| `trigger` | object లేదా list | ఐచ్ఛికం | [షరతులు](#షరతులు) చూడండి | షరతులు నెరవేరినప్పుడు ఈ పాప్-అప్‌ను తెరవండి |
| `trigger_entity` | string | ఐచ్ఛికం | ఏదైనా ఎంటిటీ | ఏదైనా ఎంటిటీ స్థితి ఆధారంగా ఈ పాప్-అప్‌ను తెరవండి, `trigger` యొక్క సరళ రూపం |
| `trigger_state` | string | ఐచ్ఛికం (`trigger_entity` నిర్వచించినట్లయితే **అవసరం**) | ఏదైనా ఎంటిటీ స్థితి | పాప్-అప్‌ను తెరవడానికి ఎంటిటీ స్థితి |
| `trigger_close` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | షరతులు ఇక నెరవేరనప్పుడు పాప్-అప్‌ను మూసివేయండి. పాత `trigger_entity` మరియు `trigger_state` జతను ఉపయోగిస్తే డిఫాల్ట్ `false` అవుతుంది |
| `open_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | పాప్-అప్ తెరుచుకుంటున్నప్పుడు ఒక చర్యను ట్రిగ్గర్ చేయండి |
| `close_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | పాప్-అప్ మూసుకుంటున్నప్పుడు ఒక చర్యను ట్రిగ్గర్ చేయండి |
| `show_header` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | పాప్-అప్ హెడర్‌ను పూర్తిగా చూపించండి/దాచండి |
| `show_previous_button` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | క్లోజ్ బటన్ పక్కన ఒక మునుపటి బటన్‌ను చూపించండి మరియు అందుబాటులో ఉన్నప్పుడు మునుపటి పాప్-అప్‌కు వెనక్కి నావిగేట్ చేయండి |
| `show_close_button` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | హెడర్‌లోని మిగతా భాగం కనిపిస్తూనే క్లోజ్ బటన్‌ను చూపించండి లేదా దాచండి |
| `buttons_position` | string | ఐచ్ఛికం | `right` (డిఫాల్ట్) లేదా `left` | హెడర్‌లో క్లోజ్ మరియు మునుపటి బటన్ల స్థానం |
| `cards` | list | ఐచ్ఛికం | ఏదైనా Bubble Card, Home Assistant కార్డ్ లేదా అనుకూల కార్డ్ | మీ పాప్-అప్ కంటెంట్‌ను నిర్వచించండి. దిగువ పాప్-అప్ ఉదాహరణను చూడండి. |
| మీకు పాప్-అప్ హెడర్ కోసం [అన్ని బటన్ సెట్టింగ్‌లు](#బటన్) కూడా అందుబాటులో ఉన్నాయి. | | ఐచ్ఛికం | | నిర్వచించనట్లయితే హెడర్ చూపించబడదు |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | పాప్-అప్ కోసం బోర్డర్ రేడియస్ |
| `--bubble-pop-up-main-background-color` | `color` | పాప్-అప్‌లోని మద్దతిచ్చే ఎలిమెంట్‌ల కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-pop-up-background-color` | `color` | పాప్-అప్ బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-backdrop-background-color` | `color` | బ్యాక్‌డ్రాప్ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| మీకు పాప్-అప్ హెడర్ కోసం [అన్ని బటన్ CSS వేరియబుల్స్](#బటన్-ఎంపికలు) కూడా అందుబాటులో ఉన్నాయి. | | |

</details>


### స్వతంత్ర పాప్-అప్ ఫార్మాట్ (v3.2.0+)

v3.2.0 నుండి, పాప్-అప్‌లు `cards` ఎంపికను ఉపయోగించి పాప్-అప్ లోపల నేరుగా నిర్వచించిన కంటెంట్ కార్డ్‌లతో ఒక కొత్త స్వతంత్ర ఫార్మాట్‌ను ఉపయోగిస్తాయి. ఇది మెరుగైన పనితీరును మరియు కొత్త సెక్షన్ ఆధారిత డ్రాగ్-అండ్-డ్రాప్ ఎడిటింగ్ అనుభవాన్ని అందిస్తుంది.


#### ఉదాహరణలు

<details>

<summary>ఒక పాప్-అప్ (స్వతంత్ర ఫార్మాట్)</summary>

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

<summary>పాప్-అప్‌ను తెరవడానికి ఒక బటన్</summary>

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

## క్షితిజ సమాంతర బటన్‌ల స్టాక్

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

ఈ కార్డ్ పాప్-అప్ కార్డ్‌కు మంచి తోడు, ఇది సంబంధిత పాప్-అప్‌లను తెరవడానికి మిమ్మల్ని అనుమతిస్తుంది. ఇది మీ డాష్‌బోర్డ్‌లోని ఏదైనా పేజీని తెరవడానికి కూడా అనుమతిస్తుంది. అదనంగా, మీరు మీ మోషన్/ఆక్యుపెన్సీ సెన్సార్‌లను జోడించవచ్చు, తద్వారా మీరు ఇప్పుడే ప్రవేశించిన గది ప్రకారం బటన్‌ల క్రమం సర్దుబాటు అవుతుంది. ఈ కార్డ్ స్క్రోల్ చేయదగినది, కనిపిస్తూ ఉంటుంది, మరియు ఫుటర్‌గా పనిచేస్తుంది.

> [!IMPORTANT]  
> ఈ కార్డ్ మీ వ్యూలో చివరిదిగా ఉండాలి (ప్రతి కార్డ్ మరియు పాప్-అప్ తర్వాత). ఇది ఏ స్టాక్ లోపల ఉండకూడదు.

### క్షితిజ సమాంతర బటన్‌ల స్టాక్ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతిచ్చే ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `1_link` | string | **అవసరం** | పాప్-అప్ హాష్ (ఉదా. `'#kitchen'`) ' 'తో లేదా ఏదైనా లింక్ | తెరవడానికి ఒక లింక్ |
| `1_name` | string | ఐచ్ఛికం | ఏదైనా స్ట్రింగ్ | మీ బటన్ కోసం ఒక పేరు |
| `1_icon` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ బటన్ కోసం ఒక ఐకాన్ |
| `1_entity` | string | ఐచ్ఛికం | ఏదైనా లైట్ లేదా లైట్ గ్రూప్ | ఆ లైట్ రంగును బ్యాక్‌గ్రౌండ్‌లో చూపించండి |
| `1_pir_sensor` | string | ఐచ్ఛికం | ఏదైనా బైనరీ సెన్సార్ | `auto_order` కోసం కనీసం ఒక pir సెన్సార్ లేదా ఎక్కువ, వాస్తవానికి ఇది ఏ ఎంటిటీ రకంతోనైనా పనిచేస్తుంది, ఉదాహరణకు మీరు లైట్ గ్రూప్‌లను జోడించవచ్చు మరియు క్రమం చివరిగా మార్చిన స్థితుల ఆధారంగా మారుతుంది. |
| `auto_order` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | `_pir_sensor` చివరిగా మార్చిన సమయం ప్రకారం బటన్‌ల క్రమాన్ని మార్చండి, మీ కోడ్‌లో ఏ `_pir_sensor` లేకపోతే **ఇది `false` గా ఉండాలి** |
| `margin` | string | ఐచ్ఛికం | ఏదైనా CSS విలువ | మీ `horizontal-buttons-stack` మొబైల్‌లో సరిగ్గా మధ్యలో లేనప్పుడు **మాత్రమే** దీన్ని ఉపయోగించండి (ఉదా. `13px`) |
| `width_desktop` | string | ఐచ్ఛికం | ఏదైనా CSS విలువ | డెస్క్‌టాప్‌లో వెడల్పు (మొబైల్‌లో డిఫాల్ట్‌గా `100%`) |
| `is_sidebar_hidden` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | డెస్క్‌టాప్‌లో సైడ్‌బార్ దాచబడితే క్షితిజ సమాంతర బటన్‌ల స్టాక్ స్థానాన్ని సరిచేయండి (మీరు దాన్ని దాచడానికి మార్పు చేసి ఉంటేనే) |
| `rise_animation` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | పేజీ లోడ్ అయిన తర్వాత సక్రియం అయ్యే యానిమేషన్‌ను నిలిపివేయడానికి దీన్ని `false`కు సెట్ చేయండి |
| `highlight_current_view` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | ప్రస్తుత హాష్ / వ్యూను మృదువైన యానిమేషన్‌తో హైలైట్ చేయండి |
| `hide_gradient` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | గ్రేడియంట్‌ను దాచడానికి దీన్ని `false`కు సెట్ చేయండి |

> [!IMPORTANT]  
> సంఖ్యతో ప్రారంభమయ్యే వేరియబుల్స్ మీ బటన్‌లను నిర్వచిస్తాయి, మరిన్ని బటన్‌లను జోడించడానికి ఈ సంఖ్యను మార్చండి (దిగువ ఉదాహరణ చూడండి).

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | క్షితిజ సమాంతర బటన్‌ల స్టాక్ బటన్‌ల కోసం బోర్డర్ రేడియస్ |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | క్షితిజ సమాంతర బటన్‌ల స్టాక్ బటన్‌ల కోసం బ్యాక్‌గ్రౌండ్ రంగు |

</details>


#### ఉదాహరణ

<details>

<summary>ఆక్యుపెన్సీ సెన్సార్‌ల ఆధారంగా స్వయంగా పునర్వ్యవస్థీకరించుకునే ఒక క్షితిజ సమాంతర బటన్‌ల స్టాక్</summary>

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

## బటన్

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

ఈ కార్డ్ చాలా బహుముఖమైనది. దీన్ని **స్విచ్**, **స్లయిడర్**, **స్టేట్** లేదా **పేరు/టెక్స్ట్** బటన్‌గా ఉపయోగించవచ్చు.

> [!TIP]
> ### అన్ని బటన్ రకాల మధ్య తేడాలు ఏమిటి?
>
> - **స్విచ్ బటన్:** ఇది డిఫాల్ట్ బటన్ రకం. డిఫాల్ట్‌గా, ఇది ఒక ఎంటిటీని టోగుల్ చేస్తుంది మరియు దాని బ్యాక్‌గ్రౌండ్ రంగు ఎంటిటీ స్థితి లేదా లైట్ రంగు ఆధారంగా మారుతుంది. మీరు దాని చర్యను **Tap action on card** విభాగంలో మార్చవచ్చు.
>
> - **స్లయిడర్ బటన్:** ఈ బటన్ రకం సర్దుబాటు చేయగల పరిధులతో ఎంటిటీలను నియంత్రించడానికి మిమ్మల్ని అనుమతిస్తుంది. ఇది లైట్లను డిమ్ చేయడానికి అనువైనది, మరియు దాని ఫిల్ రంగు లైట్ రంగుకు అనుగుణంగా మారుతుంది. బ్యాటరీ స్థాయి వంటి విలువలను ప్రదర్శించడానికి కూడా దీన్ని ఉపయోగించవచ్చు.
>   స్లయిడర్‌ల కోసం మద్దతు ఉన్న ఎంటిటీలు:
>   - లైట్ (బ్రైట్‌నెస్)
>   - మీడియా ప్లేయర్ (వాల్యూమ్)
>   - కవర్ (పొజిషన్)
>   - ఫ్యాన్ (శాతం)
>   - వాతావరణ నియంత్రణ (ఉష్ణోగ్రత)
>   - ఇన్‌పుట్ నంబర్ మరియు నంబర్ (విలువ)
>   - బ్యాటరీ సెన్సర్ (శాతం, చదవడానికి మాత్రమే)
>
>   **Slider settings**లో ఎంటిటీ ఫిల్టర్‌ను నిలిపివేసి, ఏదైనా సంఖ్యా స్థితి ఉన్న ఎంటిటీని కూడా మీరు ఉపయోగించవచ్చు, తర్వాత `min` మరియు `max` విలువలను నిర్వచించండి. ఈ ఎంపిక చదవడానికి మాత్రమే.
>
> - **స్టేట్ బటన్:** సెన్సర్ లేదా ఏదైనా ఎంటిటీ నుండి సమాచారాన్ని ప్రదర్శించడానికి పరిపూర్ణం. మీరు దీన్ని నొక్కినప్పుడు, అది ఎంటిటీ యొక్క "మరింత సమాచారం" ప్యానెల్‌ను చూపిస్తుంది. దీని బ్యాక్‌గ్రౌండ్ రంగు మారదు.
>
> - **పేరు/టెక్స్ట్ బటన్:** ఎంటిటీ అవసరం లేని ఏకైక బటన్ రకం. ఇది చిన్న టెక్స్ట్, పేరు లేదా శీర్షికను ప్రదర్శించడానికి మిమ్మల్ని అనుమతిస్తుంది. మీరు దీనికి చర్యలను కూడా జోడించవచ్చు. దీని బ్యాక్‌గ్రౌండ్ రంగు మారదు.

### బటన్ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `entity` | string | **అవసరం** | ఏదైనా ఎంటిటీ | నియంత్రించడానికి ఒక ఎంటిటీ |
| `button_type` | string | ఐచ్ఛికం | `switch` (డిఫాల్ట్), `slider`, `state` లేదా `name` | మీ బటన్ యొక్క ప్రవర్తన |
| `name` | string | ఐచ్ఛికం | ఏదైనా స్ట్రింగ్ | మీ బటన్ కోసం ఒక పేరు, నిర్వచించకపోతే అది ఎంటిటీ పేరును ప్రదర్శిస్తుంది |
| `icon` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ బటన్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది ఎంటిటీ ఐకాన్ లేదా `entity-picture`ను ప్రదర్శిస్తుంది |
| `force_icon` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | `entity-picture`కు బదులుగా ఐకాన్‌కు ప్రాధాన్యత ఇవ్వండి |
| `use_accent_color` | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్) | **లైట్ల కోసం మాత్రమే.** లైట్ రంగుకు బదులుగా థీమ్ యొక్క ఏక్సెంట్ రంగును ఉపయోగించండి.                         |
| `show_state` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క స్థితిని చూపించండి లేదా దాచండి |
| `show_name` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | పేరును చూపించండి లేదా దాచండి |
| `show_icon` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | ఐకాన్‌ను చూపించండి లేదా దాచండి |
| `show_last_changed` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి మార్చిన సమయాన్ని చూపించండి |
| `show_last_updated` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి నవీకరించిన సమయాన్ని చూపించండి |
| `show_attribute` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క ఒక అట్రిబ్యూట్‌ను దాని `name` కింద చూపించండి |
| `attribute` | string | ఐచ్ఛికం (`show_attribute` `true`గా సెట్ చేసి ఉంటే అవసరం) | మీ `entity` నుండి ఒక అట్రిబ్యూట్ | చూపించాల్సిన అట్రిబ్యూట్ (ఉదా. `brightness`) |
| `scrolling_effect` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | కంటెంట్ వాటి కంటైనర్ పరిమాణాన్ని మించినప్పుడు టెక్స్ట్ స్క్రోల్ కావడానికి అనుమతించండి |
| `button_action` | object | ఐచ్ఛికం | `tap_action`, `double_tap_action` లేదా `hold_action`, క్రింద చూడండి | బటన్ క్లిక్‌పై డిఫాల్ట్ చర్యలను మార్చడానికి అనుమతించండి. |
| `tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది |
| `double_tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ డబుల్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది |
| `hold_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ నొక్కి పట్టుకోవడంపై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వీక్షణలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వీక్షణలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) చూడండి |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా. `2`) |
| `sub_button` | object | ఐచ్ఛికం | [సబ్-బటన్‌లు](#సబ్-బటన్లు) చూడండి | కుడి వైపు స్థిరంగా ఉండే అనుకూలీకరించిన బటన్‌లను జోడించండి |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | బటన్‌లో మద్దతు ఉన్న ఎలిమెంట్‌ల కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-button-border-radius` | `px` | బటన్ కోసం బార్డర్ రేడియస్ |
| `--bubble-button-icon-border-radius` | `px` | బటన్ ఐకాన్ కంటైనర్ కోసం బార్డర్ రేడియస్ |
| `--bubble-button-icon-background-color` | `color` | బటన్ ఐకాన్ కంటైనర్ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-light-white-color` | `color` | లైట్ బటన్‌లు/స్లయిడర్‌ల డిఫాల్ట్ తెలుపు రంగును భర్తీ చేయండి |
| `--bubble-light-color` | `color` | లైట్ బటన్‌లు/స్లయిడర్‌ల రంగును భర్తీ చేయండి (RGB లైట్లతో సహా) |
| `--bubble-button-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) చూడండి | బటన్ కోసం బాక్స్ షాడో |

</details>

`button_type` `slider`గా సెట్ చేసినప్పుడు మాత్రమే ఈ ఎంపికలు అందుబాటులో ఉంటాయి.

<details>

<summary><b>స్లయిడర్ ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు                  | రకం    | అవసరం                     | వివరణ                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | ఐచ్ఛికం                        | స్లయిడర్ యొక్క కనీస విలువ. అనుకూల స్లయిడర్‌ల కోసం.                                                    |
| `max_value`             | number  | ఐచ్ఛికం                        | స్లయిడర్ యొక్క గరిష్ట విలువ. అనుకూల స్లయిడర్‌ల కోసం.                                                    |
| `step`                  | number  | ఐచ్ఛికం                        | స్లయిడర్ యొక్క స్టెప్ విలువ.                                                                           |
| `tap_to_slide`          | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్)      | నొక్కి పట్టుకోవడానికి బదులుగా, స్లయిడర్‌ను యాక్టివేట్ చేయడానికి నొక్కే మునుపటి స్లయిడర్ ప్రవర్తనను ప్రారంభించండి.        |
| `relative_slide`        | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్ )     | ప్రారంభ టచ్ పాయింట్‌కు బదులుగా, ప్రారంభ విలువకు సంబంధించి విలువను నవీకరించండి.                                      |
| `read_only_slider`      | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్)      | స్లయిడర్‌ను చదవడానికి మాత్రమే చేయండి. సెన్సర్‌ల వంటి కొన్ని ఎంటిటీల కోసం స్వయంచాలకంగా ప్రారంభించబడుతుంది.                        |
| `slider_live_update`    | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్)      | స్లయిడ్ చేస్తున్నప్పుడు ఎంటిటీ స్థితి నవీకరించబడుతుంది. **ఈ ఫీచర్ అన్ని ఎంటిటీలకు సిఫార్సు చేయబడదు.**        |
| `slider_fill_orientation` | string | ఐచ్ఛికం | `left`, `right`, `top` లేదా `bottom` | స్లయిడర్ యొక్క ఫిల్ దిశను మార్చండి. నిర్వచించనప్పుడు ఎడమ నుండి కుడికి, [కుడి నుండి ఎడమకు రాసే భాషల్లో](#స్థానికీకరణ) అద్దంలా మారుతుంది |
| `slider_value_position` | string | ఐచ్ఛికం | `right`, `left`, `center` లేదా `hidden` | విలువ ప్రదర్శన యొక్క స్థానం. నిర్వచించనప్పుడు కుడి వైపున, మరియు [కుడి నుండి ఎడమకు రాసే భాషల్లో](#స్థానికీకరణ) ఎడమ వైపున |
| `invert_slider_value` | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్) | స్లయిడర్ దిశను తారుమారు చేయండి (100% ఫిల్ కనీస విలువకు సమానం). రంగు స్లయిడర్‌లకు అందుబాటులో లేదు. |
| `light_slider_type` | string | ఐచ్ఛికం | `brightness` (డిఫాల్ట్), `hue`, `saturation`, `white_temp` | **లైట్ల కోసం మాత్రమే.** స్లయిడర్ మోడ్‌ను ఎంచుకోండి |
| `cover_slider_type` | string | ఐచ్ఛికం | `position` (డిఫాల్ట్), `tilt_position` | **కవర్‌ల కోసం మాత్రమే.** స్లయిడర్ మోడ్‌ను ఎంచుకోండి (పొజిషన్ లేదా టిల్ట్) |
| `hue_force_saturation` | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్) | **లైట్ల కోసం మాత్రమే (Hue మోడ్).** Hue సర్దుబాటు చేసేటప్పుడు సాచురేషన్‌ను బలవంతం చేయండి |
| `hue_force_saturation_value` | number | ఐచ్ఛికం (`100` డిఫాల్ట్) | **లైట్ల కోసం మాత్రమే (Hue మోడ్).** బలవంతంగా చేసిన సాచురేషన్ విలువ (0-100) |
| `use_accent_color` | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్) | **లైట్ల కోసం మాత్రమే (Brightness మోడ్).** లైట్ రంగుకు బదులుగా థీమ్ ఏక్సెంట్ రంగును ఉపయోగించండి |
| `allow_light_slider_to_0` | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్)    | **లైట్ల కోసం మాత్రమే.** స్లయిడర్ 0%కి చేరుకోవడానికి అనుమతిస్తుంది, ఇది లైట్‌ను ఆపివేస్తుంది. `tap_to_slide`తో అందుబాటులో లేదు. |
| `light_transition`      | boolean | ఐచ్ఛికం (`false` డిఫాల్ట్)      | **లైట్ల కోసం మాత్రమే.** మద్దతు ఉన్న లైట్ల కోసం సున్నితమైన బ్రైట్‌నెస్ ట్రాన్సిషన్‌లను ప్రారంభించండి.                           |
| `light_transition_time` | number  | ఐచ్ఛికం (`500` డిఫాల్ట్)        | **లైట్ల కోసం మాత్రమే.** మిల్లీసెకన్లలో ట్రాన్సిషన్ సమయం. `light_transition: true` అవసరం.            |

</details>

#### ఉదాహరణలు

<details>

<summary>లైట్ యొక్క బ్రైట్‌నెస్‌ను నియంత్రించగల ఒక స్లయిడర్ బటన్</summary>

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

<summary>మరిన్ని ఎంపికలతో కూడిన ఒక బటన్</summary>

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

## మీడియా ప్లేయర్

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

ఈ కార్డ్ మీడియా ప్లేయర్ ఎంటిటీని నియంత్రించడానికి మిమ్మల్ని అనుమతిస్తుంది.

### మీడియా ప్లేయర్ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `entity` | string | **అవసరం** | ఏదైనా మీడియా ప్లేయర్ | నియంత్రించాల్సిన మీడియా ప్లేయర్ |
| `name` | string | ఐచ్ఛికం | ఏదైనా స్ట్రింగ్ | మీ మీడియా ప్లేయర్ కోసం ఒక పేరు, నిర్వచించకపోతే అది ఎంటిటీ పేరును ప్రదర్శిస్తుంది |
| `icon` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ మీడియా ప్లేయర్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది ఎంటిటీ ఐకాన్ లేదా `entity-picture`ను ప్రదర్శిస్తుంది |
| `force_icon` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | `entity-picture`కు బదులుగా ఐకాన్‌కు ప్రాధాన్యత ఇవ్వండి |
| `show_state` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క స్థితిని చూపించండి లేదా దాచండి |
| `show_name` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | పేరును చూపించండి లేదా దాచండి |
| `show_icon` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | ఐకాన్‌ను చూపించండి లేదా దాచండి |
| `show_last_changed` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి మార్చిన సమయాన్ని చూపించండి |
| `show_last_updated` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి నవీకరించిన సమయాన్ని చూపించండి |
| `show_attribute` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క ఒక అట్రిబ్యూట్‌ను దాని `name` కింద చూపించండి |
| `attribute` | string | ఐచ్ఛికం (`show_attribute` `true`గా సెట్ చేసి ఉంటే అవసరం) | మీ `entity` నుండి ఒక అట్రిబ్యూట్ | చూపించాల్సిన అట్రిబ్యూట్ (ఉదా. `brightness`) |
| `scrolling_effect` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | కంటెంట్ వాటి కంటైనర్ పరిమాణాన్ని మించినప్పుడు టెక్స్ట్ స్క్రోల్ కావడానికి అనుమతించండి |
| `min_volume` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వాల్యూమ్ స్లయిడర్ యొక్క కనీస విలువ. |
| `max_volume` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వాల్యూమ్ స్లయిడర్ యొక్క గరిష్ట విలువ. |
| `cover_background` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | కార్డ్ బ్యాక్‌గ్రౌండ్‌గా మసకబారిన మీడియా కవర్‌ను ఉపయోగించండి. |
| `button_action` | object | ఐచ్ఛికం | `tap_action`, `double_tap_action` లేదా `hold_action`, [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | బటన్ క్లిక్‌పై డిఫాల్ట్ చర్యలను మార్చడానికి అనుమతించండి. |
| `tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |
| `double_tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ డబుల్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది. |
| `hold_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ నొక్కి పట్టుకోవడంపై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |
| `main_buttons_position` | string | ఐచ్ఛికం | `default` లేదా `bottom` | కవర్ చర్య బటన్‌లను దిగువకు (స్థిరంగా) తరలించండి |
| `main_buttons_full_width` | boolean | ఐచ్ఛికం | `true` లేదా `false` | దిగువ చర్య బటన్‌లను పూర్తి వెడల్పుగా చేయండి (డిఫాల్ట్: పొజిషన్ `bottom` అయినప్పుడు `true`) |
| `main_buttons_alignment` | string | ఐచ్ఛికం | `end` (డిఫాల్ట్), `center`, `start`, `space-between` | పూర్తి వెడల్పు కాకపోతే దిగువ చర్య బటన్‌ల అమరిక |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వీక్షణలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వీక్షణలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) చూడండి |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా. `2`) |
| `sub_button` | object | ఐచ్ఛికం | [సబ్-బటన్‌లు](#సబ్-బటన్లు) చూడండి | కుడి వైపు స్థిరంగా ఉండే అనుకూలీకరించిన బటన్‌లను జోడించండి |
| `hide` | object | ఐచ్ఛికం | క్రింద చూడండి | కార్డ్ నుండి బటన్‌లను దాచండి |

#### దాచు ఎంపికలు

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | ప్లే/పాజ్ బటన్‌ను దాచండి |
| `volume_button` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | వాల్యూమ్ బటన్‌ను దాచండి |
| `previous_button` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మునుపటి బటన్‌ను దాచండి |
| `next_button` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | తదుపరి బటన్‌ను దాచండి |
| `power_button` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | పవర్ బటన్‌ను దాచండి |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | మీడియా ప్లేయర్ కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-media-player-border-radius` | `px` | మీడియా ప్లేయర్ కోసం బార్డర్ రేడియస్ |
| `--bubble-media-player-buttons-border-radius` | `px` | మీడియా ప్లేయర్ బటన్‌ల కోసం బార్డర్ రేడియస్ |
| `--bubble-media-player-slider-background-color` | `color` | వాల్యూమ్ స్లయిడర్ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-media-player-icon-border-radius` | `px` | మీడియా ప్లేయర్ ఐకాన్ కంటైనర్ కోసం బార్డర్ రేడియస్ |
| `--bubble-media-player-icon-background-color` | `color` | మీడియా ప్లేయర్ ఐకాన్ కంటైనర్ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-media-player-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) చూడండి | మీడియా ప్లేయర్ కోసం బాక్స్ షాడో |

</details>


#### ఉదాహరణలు

<details>

<summary>అన్ని ఎంపికలతో కూడిన ఒక మీడియా ప్లేయర్</summary>

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

## కవర్

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

ఈ కార్డ్ మీ `cover` ఎంటిటీలను నియంత్రించడానికి మిమ్మల్ని అనుమతిస్తుంది.

### కవర్ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `entity` | string | **అవసరం** | ఏదైనా కవర్ | నియంత్రించడానికి ఒక కవర్ |
| `name` | string | ఐచ్ఛికం | ఏదైనా స్ట్రింగ్ | మీ కవర్ కోసం ఒక పేరు, నిర్వచించకపోతే అది ఎంటిటీ పేరును ప్రదర్శిస్తుంది |
| `force_icon` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | `entity-picture`కు బదులుగా ఐకాన్‌కు ప్రాధాన్యత ఇవ్వండి |
| `show_state` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క స్థితిని చూపించండి లేదా దాచండి |
| `show_name` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | పేరును చూపించండి లేదా దాచండి |
| `show_icon` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | ఐకాన్‌ను చూపించండి లేదా దాచండి |
| `show_last_changed` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి మార్చిన సమయాన్ని చూపించండి |
| `show_last_updated` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి నవీకరించిన సమయాన్ని చూపించండి |
| `show_attribute` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క ఒక అట్రిబ్యూట్‌ను దాని `name` కింద చూపించండి |
| `attribute` | string | ఐచ్ఛికం (`show_attribute` `true`గా సెట్ చేసి ఉంటే అవసరం) | మీ `entity` నుండి ఒక అట్రిబ్యూట్ | చూపించాల్సిన అట్రిబ్యూట్ (ఉదా. `brightness`) |
| `scrolling_effect` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | కంటెంట్ వాటి కంటైనర్ పరిమాణాన్ని మించినప్పుడు టెక్స్ట్ స్క్రోల్ కావడానికి అనుమతించండి |
| `icon_open` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ తెరిచిన కవర్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది డిఫాల్ట్ ఓపెన్ కవర్ ఐకాన్‌ను ప్రదర్శిస్తుంది |
| `icon_close` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ మూసిన కవర్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది డిఫాల్ట్ క్లోజ్డ్ కవర్ ఐకాన్‌ను ప్రదర్శిస్తుంది |
| `icon_up` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ ఓపెన్ కవర్ బటన్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది డిఫాల్ట్ ఓపెన్ కవర్ ఐకాన్‌ను ప్రదర్శిస్తుంది |
| `icon_down` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ క్లోజ్ కవర్ బటన్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది డిఫాల్ట్ క్లోజ్ కవర్ ఐకాన్‌ను ప్రదర్శిస్తుంది |
| `open_service` | string | ఐచ్ఛికం | ఏదైనా సర్వీస్ లేదా స్క్రిప్ట్ | మీ కవర్‌ను తెరవడానికి ఒక సర్వీస్, డిఫాల్ట్‌గా `cover.open_cover` |
| `stop_service` | string | ఐచ్ఛికం | ఏదైనా సర్వీస్ లేదా స్క్రిప్ట్ | మీ కవర్‌ను ఆపడానికి ఒక సర్వీస్, డిఫాల్ట్‌గా `cover.stop_cover` |
| `close_service` | string | ఐచ్ఛికం | ఏదైనా సర్వీస్ లేదా స్క్రిప్ట్ | మీ కవర్‌ను మూయడానికి ఒక సర్వీస్, డిఫాల్ట్‌గా `cover.close_cover` |
| `tilt_buttons` | string | ఐచ్ఛికం | `top` (డిఫాల్ట్), `bottom`, `left`, `right`, `hidden` | టిల్ట్ నియంత్రణ బటన్‌ల స్థానం (కవర్ టిల్ట్‌కు మద్దతు ఇస్తేనే చూపబడుతుంది) |
| `open_tilt_service` | string | ఐచ్ఛికం | ఏదైనా సర్వీస్ లేదా స్క్రిప్ట్ | టిల్ట్‌ను తెరవడానికి ఒక సర్వీస్, డిఫాల్ట్‌గా `cover.open_cover_tilt` |

| `close_tilt_service` | string | ఐచ్ఛికం | ఏదైనా సర్వీస్ లేదా స్క్రిప్ట్ | టిల్ట్‌ను మూయడానికి ఒక సర్వీస్, డిఫాల్ట్‌గా `cover.close_cover_tilt` |
| `button_action` | object | ఐచ్ఛికం | `tap_action`, `double_tap_action` లేదా `hold_action`, [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | బటన్ క్లిక్‌పై డిఫాల్ట్ చర్యలను మార్చడానికి అనుమతించండి. |
| `tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |
| `double_tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ డబుల్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది. |
| `hold_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ నొక్కి పట్టుకోవడంపై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |
| `main_buttons_position` | string | ఐచ్ఛికం | `default` లేదా `bottom` | మీడియా నియంత్రణలను దిగువకు (స్థిరంగా) తరలించండి |
| `main_buttons_full_width` | boolean | ఐచ్ఛికం | `true` లేదా `false` | దిగువ నియంత్రణలను పూర్తి వెడల్పుగా చేయండి (డిఫాల్ట్: పొజిషన్ `bottom` అయినప్పుడు `true`) |
| `main_buttons_alignment` | string | ఐచ్ఛికం | `end` (డిఫాల్ట్), `center`, `start`, `space-between` | పూర్తి వెడల్పు కాకపోతే దిగువ నియంత్రణల అమరిక |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వీక్షణలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వీక్షణలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) చూడండి |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా. `2`) |
| `sub_button` | object | ఐచ్ఛికం | [సబ్-బటన్‌లు](#సబ్-బటన్లు) చూడండి | కుడి వైపు స్థిరంగా ఉండే అనుకూలీకరించిన బటన్‌లను జోడించండి |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | కవర్ కార్డ్‌లో మద్దతు ఉన్న ఎలిమెంట్‌ల కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-cover-border-radius` | `px` | కవర్ కార్డ్ కోసం బార్డర్ రేడియస్ |
| `--bubble-cover-icon-border-radius` | `px` | కవర్ కార్డ్ ఐకాన్ కంటైనర్ కోసం బార్డర్ రేడియస్ |
| `--bubble-cover-icon-background-color` | `color` | కవర్ కార్డ్ ఐకాన్ కంటైనర్ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-cover-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) చూడండి | కవర్ కార్డ్ కోసం బాక్స్ షాడో |
| `--bubble-button-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) చూడండి | కవర్ కార్డ్‌లోని బటన్‌ల కోసం బాక్స్ షాడో |

</details>


#### ఉదాహరణ

<details>

<summary>రోలర్ షేడ్‌ను నియంత్రించగల ఒక కార్డ్</summary>

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

## సెలెక్ట్

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

ఈ కార్డ్ మీ `input_select` / `select` ఎంటిటీల కోసం ఒక డ్రాప్‌డౌన్ మెనూను జోడించడానికి మిమ్మల్ని అనుమతిస్తుంది. ఈ కార్డ్ సబ్-బటన్‌లకు మరియు అన్ని సాధారణ Bubble Card ఫీచర్లకు కూడా మద్దతు ఇస్తుంది.

> [!TIP]
> మీరు కోరుకుంటే సెలెక్ట్ సబ్-బటన్‌లను కూడా కలిగి ఉండవచ్చు, ఈ ఫీచర్ సబ్-బటన్‌లకు మద్దతు ఇచ్చే అన్ని కార్డ్‌లలో అందుబాటులో ఉంటుంది.

### సెలెక్ట్ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `entity` | string | **అవసరం** | ఏదైనా ఎంటిటీ | నియంత్రించడానికి ఒక ఎంటిటీ |
| `name` | string | ఐచ్ఛికం | ఏదైనా స్ట్రింగ్ | మీ సెలెక్ట్ కోసం ఒక పేరు, నిర్వచించకపోతే అది ఎంటిటీ పేరును ప్రదర్శిస్తుంది |
| `icon` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ సెలెక్ట్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది ఎంటిటీ ఐకాన్ లేదా `entity-picture`ను ప్రదర్శిస్తుంది |
| `force_icon` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | `entity-picture`కు బదులుగా ఐకాన్‌కు ప్రాధాన్యత ఇవ్వండి |
| `show_state` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క స్థితిని చూపించండి లేదా దాచండి |
| `show_name` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | పేరును చూపించండి లేదా దాచండి |
| `show_icon` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | ఐకాన్‌ను చూపించండి లేదా దాచండి |
| `show_last_changed` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి మార్చిన సమయాన్ని చూపించండి |
| `show_last_updated` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిసారి నవీకరించిన సమయాన్ని చూపించండి |
| `show_attribute` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క ఒక అట్రిబ్యూట్‌ను దాని `name` కింద చూపించండి |
| `attribute` | string | ఐచ్ఛికం (`show_attribute` `true`గా సెట్ చేసి ఉంటే అవసరం) | మీ `entity` నుండి ఒక అట్రిబ్యూట్ | చూపించాల్సిన అట్రిబ్యూట్ (ఉదా. `brightness`) |
| `scrolling_effect` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | కంటెంట్ వాటి కంటైనర్ పరిమాణాన్ని మించినప్పుడు టెక్స్ట్ స్క్రోల్ కావడానికి అనుమతించండి |
| `tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |
| `double_tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ డబుల్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది. |
| `hold_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ నొక్కి పట్టుకోవడంపై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వీక్షణలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వీక్షణలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) చూడండి |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా. `2`) |
| `sub_button` | object | ఐచ్ఛికం | [సబ్-బటన్‌లు](#సబ్-బటన్లు) చూడండి | కుడి వైపు స్థిరంగా ఉండే అనుకూలీకరించిన బటన్‌లను జోడించండి |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | సెలెక్ట్ కార్డ్‌లో మద్దతు ఉన్న ఎలిమెంట్‌ల కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-select-background-color` | `color` | సెలెక్ట్ కార్డ్ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-select-list-border-radius` | `px` | కార్డ్‌లోని డ్రాప్‌డౌన్ మెనూ కోసం బార్డర్ రేడియస్ |
| `--bubble-select-list-item-accent-color` | `color` | ఎంచుకున్న ఐటెమ్ కోసం ఏక్సెంట్ రంగు |
| `--bubble-select-list-background-color` | `color` | కార్డ్‌లోని డ్రాప్‌డౌన్ మెనూ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-select-list-width` | `px` | కార్డ్‌లోని డ్రాప్‌డౌన్ మెనూ యొక్క వెడల్పు |
| `--bubble-select-arrow-background-color` | `color` | డ్రాప్‌డౌన్ యారో కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-select-button-border-radius` | `px` | సెలెక్ట్ బటన్ కోసం బార్డర్ రేడియస్ |
| `--bubble-select-border-radius` | `px` | సెలెక్ట్ కార్డ్ కోసం బార్డర్ రేడియస్ |
| `--bubble-select-icon-border-radius` | `px` | సెలెక్ట్ కార్డ్ ఐకాన్ కంటైనర్ కోసం బార్డర్ రేడియస్ |
| `--bubble-select-icon-background-color` | `color` | సెలెక్ట్ కార్డ్ ఐకాన్ కంటైనర్ కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-select-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) చూడండి | సెలెక్ట్ కార్డ్ కోసం బాక్స్ షాడో |

</details>


#### ఉదాహరణలు

<details>

<summary>సీన్‌ల జాబితాతో కూడిన ఒక సెలెక్ట్ కార్డ్</summary>

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

## వాతావరణ నియంత్రణ

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

ఈ కార్డ్ మీ `climate` ఎంటిటీలను నియంత్రించడానికి మిమ్మల్ని అనుమతిస్తుంది.

> [!TIP]
> మోడ్ ఎంపిక మెనూ అనేది కార్డ్‌ను సృష్టించేటప్పుడు స్వయంచాలకంగా జోడించబడే ఒక [సబ్-బటన్](#సబ్-బటన్లు). మీరు దీన్ని మీ ఇష్టానుసారం సవరించవచ్చు లేదా తీసివేయవచ్చు.

### వాతావరణ నియంత్రణ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు                     | రకం    | అవసరం                         | మద్దతు ఉన్న ఎంపికలు                                  | వివరణ                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **అవసరం**                        | వాతావరణ నియంత్రణ ఎంటిటీ                                   | నియంత్రించాల్సిన ఎంటిటీ (ఉదా. `climate.living_room`).                                                            |
| `name`                  | string  | ఐచ్ఛికం                            | ఏదైనా స్ట్రింగ్                                       | కార్డ్ కోసం ఒక అనుకూల పేరు. నిర్వచించకపోతే, అది ఎంటిటీ పేరును ప్రదర్శిస్తుంది.                                    |
| `icon`                  | string  | ఐచ్ఛికం                            | ఏదైనా `mdi:` ఐకాన్                                  | కార్డ్ కోసం ఒక అనుకూల ఐకాన్. నిర్వచించకపోతే, ఎంటిటీ ఐకాన్ లేదా `entity-picture` ఉపయోగించబడుతుంది.                   |
| `force_icon`            | boolean | ఐచ్ఛికం                            | `true` లేదా `false` (డిఫాల్ట్)                     | `entity-picture` కంటే ఐకాన్‌కు ప్రాధాన్యత ఇస్తుంది.                                                           |
| `show_state`            | boolean | ఐచ్ఛికం                            | `true` లేదా `false` (డిఫాల్ట్)                     | `entity` యొక్క ప్రస్తుత స్థితిని చూపించండి లేదా దాచండి.                                                                 |
| `show_name`             | boolean | ఐచ్ఛికం                            | `true` (డిఫాల్ట్) లేదా `false`                     | ఎంటిటీ పేరును చూపించండి లేదా దాచండి.                                                                            |
| `show_icon`             | boolean | ఐచ్ఛికం                            | `true` (డిఫాల్ట్) లేదా `false`                     | ఐకాన్‌ను చూపించండి లేదా దాచండి.                                                                                          |
| `hide_target_temp_low`  | boolean | ఐచ్ఛికం (`target_temp_low`కు మద్దతు ఇచ్చే ఎంటిటీలకు మాత్రమే) | `true` లేదా `false` (డిఫాల్ట్) | `entity` మద్దతు ఇస్తే తక్కువ లక్ష్య ఉష్ణోగ్రత నియంత్రణను దాచుతుంది.                                          |
| `hide_target_temp_high` | boolean | ఐచ్ఛికం (`target_temp_high`కు మద్దతు ఇచ్చే ఎంటిటీలకు మాత్రమే)| `true` లేదా `false` (డిఫాల్ట్) | `entity` మద్దతు ఇస్తే ఎక్కువ లక్ష్య ఉష్ణోగ్రత నియంత్రణను దాచుతుంది.                                         |
| `state_color`           | boolean | ఐచ్ఛికం                            | `true` లేదా `false` (డిఫాల్ట్)                     | వాతావరణ నియంత్రణ ఎంటిటీ ఆన్‌లో ఉన్నప్పుడు స్థిరమైన బ్యాక్‌గ్రౌండ్ రంగును వర్తింపజేస్తుంది.                                              |
| `step` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | ఉష్ణోగ్రత స్టెప్. |
| `min_temp` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | కనీస ఉష్ణోగ్రత. |
| `max_temp` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | గరిష్ట ఉష్ణోగ్రత. |
| `button_action` | object | ఐచ్ఛికం | `tap_action`, `double_tap_action` లేదా `hold_action`, [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | బటన్ క్లిక్‌పై డిఫాల్ట్ చర్యలను మార్చడానికి అనుమతించండి. |
| `tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |
| `double_tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ డబుల్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది. |
| `hold_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఐకాన్ నొక్కి పట్టుకోవడంపై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `more-info` ఉపయోగించబడుతుంది. |                              |
| `main_buttons_position` | string | ఐచ్ఛికం | `default` లేదా `bottom` | వాతావరణ నియంత్రణ చర్య బటన్‌లను దిగువకు (స్థిరంగా) తరలించండి |
| `main_buttons_full_width` | boolean | ఐచ్ఛికం | `true` లేదా `false` | దిగువ చర్య బటన్‌లను పూర్తి వెడల్పుగా చేయండి (డిఫాల్ట్: పొజిషన్ `bottom` అయినప్పుడు `true`) |
| `main_buttons_alignment` | string | ఐచ్ఛికం | `end` (డిఫాల్ట్), `center`, `start`, `space-between` | పూర్తి వెడల్పు కాకపోతే దిగువ చర్య బటన్‌ల అమరిక |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వీక్షణలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వీక్షణలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) చూడండి |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా. `2`) |
| `sub_button`            | object  | ఐచ్ఛికం                            | [సబ్-బటన్‌లు](#సబ్-బటన్లు) చూడండి                | కుడి వైపు స్థిరంగా ఉండే అనుకూల బటన్‌లను జోడిస్తుంది. వాతావరణ నియంత్రణ మోడ్ సెలెక్ట్ మెనూ కోసం ఉపయోగకరం.                                  |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | వాతావరణ నియంత్రణ కార్డ్‌లో మద్దతు ఉన్న ఎలిమెంట్‌ల కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-climate-border-radius` | `px` | వాతావరణ నియంత్రణ కార్డ్ ఎలిమెంట్‌లలో మద్దతు ఉన్న వాటి కోసం బార్డర్ రేడియస్ |
| `--bubble-climate-button-background-color` | `color` | వాతావరణ నియంత్రణ కార్డ్ బటన్‌ల కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-climate-icon-border-radius` | `px` | వాతావరణ నియంత్రణ కార్డ్ ఐకాన్ కంటైనర్ కోసం బార్డర్ రేడియస్ |
| `--bubble-state-climate-fan-only-color` | `color` | fan-only స్థితి కోసం ఓవర్‌లే రంగు |
| `--bubble-state-climate-dry-color` | `color` | dry స్థితి కోసం ఓవర్‌లే రంగు |
| `--bubble-state-climate-cool-color` | `color` | cool స్థితి కోసం ఓవర్‌లే రంగు |
| `--bubble-state-climate-heat-color` | `color` | heat స్థితి కోసం ఓవర్‌లే రంగు |
| `--bubble-state-climate-auto-color` | `color` | auto స్థితి కోసం ఓవర్‌లే రంగు |
| `--bubble-state-climate-heat-cool-color` | `color` | heat-cool స్థితి కోసం ఓవర్‌లే రంగు |
| `--bubble-climate-accent-color` | `color` | వాతావరణ నియంత్రణ కార్డ్ కోసం ఏక్సెంట్ రంగు |
| `--bubble-climate-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) చూడండి | వాతావరణ నియంత్రణ కంటైనర్ కోసం బాక్స్ షాడో. |

</details>


#### ఉదాహరణలు

<details>

<summary>HVAC మోడ్‌ల డ్రాప్‌డౌన్ మెనూతో కూడిన ఒక వాతావరణ నియంత్రణ కార్డ్</summary>

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

## క్యాలెండర్

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

ఈ కార్డ్ మీ క్యాలెండర్ ఎంటిటీలను ప్రదర్శించడానికి మిమ్మల్ని అనుమతిస్తుంది. దీని కంటెంట్ స్క్రోల్ చేయదగినది, కాబట్టి మీరు రాబోయే ఈవెంట్‌లను సులభంగా బ్రౌజ్ చేయవచ్చు.

### క్యాలెండర్ ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు                | రకం    | అవసరం  | మద్దతు ఉన్న ఎంపికలు                               | వివరణ                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | ఐచ్ఛికం     | ఏదైనా సంఖ్య (కనీసం: 1)                        | ఇప్పటి నుండి N-వ రోజు చివరి వరకు, ఈవెంట్‌లను పొందవలసిన క్యాలెండర్ రోజుల సంఖ్య (డిఫాల్ట్: 7) |
| `entities`          | object  | **అవసరం** | ఒక క్యాలెండర్ ఎంటిటీ ఆబ్జెక్ట్ (క్రింద చూడండి)            | నియంత్రించాల్సిన ఎంటిటీ (ఉదా. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **అవసరం** | ఒక క్యాలెండర్ ఎంటిటీ                               | ప్రదర్శించాల్సిన క్యాలెండర్ ఎంటిటీ                                                          |
| `entities.color`    | string  | ఐచ్ఛికం     | ఒక రంగు                                         | క్యాలెండర్ చిప్ కోసం ఒక అనుకూల రంగు. నిర్వచించకపోతే, స్వయంచాలక రంగు ఎంచుకోబడుతుంది |
| `days`              | number  | ఐచ్ఛికం     | ఏదైనా సంఖ్య (కనీసం: 1)                         | ఇప్పటి నుండి N-వ రోజు చివరి వరకు, ఈవెంట్‌లను పొందవలసిన క్యాలెండర్ రోజుల సంఖ్య (డిఫాల్ట్: 7) |
| `limit`             | number  | ఐచ్ఛికం     | ఒక సంఖ్య                                        | కార్డ్‌లో ప్రదర్శించబడే ఈవెంట్‌ల మొత్తం                                  |
| `show_end`          | boolean | ఐచ్ఛికం     | `true` లేదా `false` (డిఫాల్ట్)                     | ఈవెంట్‌ల కోసం ముగింపు సమయాన్ని చూపించండి లేదా దాచండి                                                    |
| `show_progress`     | boolean | ఐచ్ఛికం     | `true` (డిఫాల్ట్) లేదా `false`                     | ఈవెంట్ ప్రోగ్రెస్ బార్‌ను చూపించండి లేదా దాచండి                                                     |
| `show_started_events`| boolean | ఐచ్ఛికం     | `true` (డిఫాల్ట్) లేదా `false`                     | ప్రస్తుతం జరుగుతున్న ఈవెంట్‌లను చూపించండి లేదా దాచండి. బహుళ రోజుల ఈవెంట్‌లు ఒక్కో రోజుగా పరిగణించబడతాయి, కాబట్టి జరుగుతున్న రోజు మాత్రమే దాచబడుతుంది మరియు రాబోయే రోజులు కనిపిస్తూనే ఉంటాయి |
| `scrolling_effect`  | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | కంటెంట్ వాటి కంటైనర్ పరిమాణాన్ని మించినప్పుడు టెక్స్ట్ స్క్రోల్ కావడానికి అనుమతించండి |
| `event_action` | object | ఐచ్ఛికం | `tap_action`, `double_tap_action` లేదా `hold_action`, [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | ఈవెంట్ క్లిక్‌పై చర్యలను జోడించడానికి అనుమతించండి. |
| `tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | రోజు క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది. |
| `double_tap_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | రోజు డబుల్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది. |
| `hold_action` | object | ఐచ్ఛికం | [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) చూడండి | రోజు నొక్కి పట్టుకోవడంపై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే `none` ఉపయోగించబడుతుంది. |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వీక్షణలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వీక్షణలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) చూడండి |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా. `2`) |
| `sub_button` | object | ఐచ్ఛికం | [సబ్-బటన్‌లు](#సబ్-బటన్లు) చూడండి | కుడి వైపు స్థిరంగా ఉండే అనుకూలీకరించిన బటన్‌లను జోడించండి |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (<a href="#స్టైలింగ్">స్టైలింగ్</a> చూడండి)</b></summary>

| వేరియబుల్                                  | ఆశించిన విలువ | వివరణ                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | క్యాలెండర్ కార్డ్‌లో మద్దతు ఉన్న ఎలిమెంట్‌ల కోసం ప్రధాన బ్యాక్‌గ్రౌండ్ రంగు  |
| `--bubble-calendar-border-radius`         | `px`           | క్యాలెండర్ కార్డ్ ఎలిమెంట్‌లలో మద్దతు ఉన్న వాటి కోసం బార్డర్ రేడియస్ |
| `--bubble-calendar-height`                | `px`           | క్యాలెండర్ కార్డ్ కోసం ఎత్తు                                        |

</details>

#### ఉదాహరణలు

<details>

<summary>పరిమిత సంఖ్యలో ఈవెంట్‌లతో కూడిన ఒక క్యాలెండర్ కార్డ్</summary>

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

<summary>ముగింపు సమయం మరియు ప్రోగ్రెస్ బార్‌తో కూడిన ఒక క్యాలెండర్ కార్డ్</summary>

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


## విభజన

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

ఈ కార్డ్ మీ పాప్-అప్‌ను వర్గాలుగా / విభాగాలుగా విభజించడానికి ఒక సాధారణ విభజన రేఖ. ఉదా: లైట్లు, పరికరాలు, కవర్లు, సెట్టింగ్‌లు, ఆటోమేషన్లు...

### విభజన ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `name` | string | ఐచ్ఛికం కానీ సిఫార్సు చేయబడింది | ఏదైనా string | మీ విభజన కోసం ఒక పేరు |
| `icon` | string | ఐచ్ఛికం కానీ సిఫార్సు చేయబడింది | ఏదైనా `mdi:` ఐకాన్ | మీ విభజన కోసం ఒక ఐకాన్ |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వ్యూలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వ్యూలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, చూడండి [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా: `2`) |
| `sub_button` | object | ఐచ్ఛికం | చూడండి [సబ్-బటన్‌లు](#సబ్-బటన్లు) | కుడి వైపుకు స్థిరంగా ఉండే అనుకూలీకరించిన బటన్‌లను జోడించండి |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (చూడండి <a href="#styling">స్టైలింగ్</a>)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | విభజనలోని రేఖ కోసం బ్యాక్‌గ్రౌండ్ రంగు |

</details>

#### ఉదాహరణ

<details>

<summary>"కవర్లు" విభాగం కోసం ఒక విభజన/డివైడర్</summary>

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

## ఖాళీ నిలువు వరుస

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

ఈ కార్డ్ ఖాళీ నిలువు వరుసను నింపడానికి ఇక్కడ ఉంది. మీ పాప్-అప్‌లో ఒకే ఒక్క కార్డ్ ఉన్న `horizontal-stack` ఉంటే ఇది ఉపయోగకరంగా ఉంటుంది. దీన్ని (చూడకపోవడాన్ని) చూడటానికి ఈ స్క్రీన్‌షాట్ యొక్క దిగువ కుడి మూలను చూడండి.

### ఖాళీ నిలువు వరుస ఎంపికలు

ఈ కార్డ్‌కు ఎటువంటి ఎంపికలు లేవు మరియు ఇది [స్టైలింగ్](#స్టైలింగ్)కు మద్దతు ఇవ్వదు, అయితే ఇది HA సెక్షన్‌ల కోసం లేఅవుట్ ఎంపికలకు మద్దతు ఇస్తుంది.

#### ఉదాహరణ

<details>

<summary>ఒక క్షితిజ సమాంతర స్టాక్‌లో ఖాళీ నిలువు వరుస</summary>

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

## సబ్-బటన్‌లు మాత్రమే

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

ఈ కార్డ్ కేవలం సబ్-బటన్‌ల కోసం అంకితం చేయబడింది. ఇది మెనూలకు, త్వరిత చర్యలకు, సమాచార చిప్‌లకు లేదా పేజీ దిగువన స్థిరమైన ఫుటర్‌కు సరిపోతుంది.

> [!IMPORTANT]  
> ఈ కార్డ్ కొత్త సబ్-బటన్‌ల స్కీమాను ఉపయోగిస్తుంది. మీ బటన్‌లను నిర్వచించడానికి `sub_button.bottom` ఉపయోగించండి. `sub_button.main` విభాగం విస్మరించబడుతుంది.

### సబ్-బటన్‌లు మాత్రమే ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణలు)</b></summary>

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **అవసరం** | చూడండి [సబ్-బటన్‌లు](#సబ్-బటన్లు) | `bottom` విభాగాన్ని ఉపయోగించి మీ సబ్-బటన్‌లను నిర్వచించండి |
| `hide_main_background` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | కార్డ్ బ్యాక్‌గ్రౌండ్‌ను తొలగించండి |
| `footer_mode` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | కార్డ్‌ను పేజీ దిగువన స్థిరం చేయండి |
| `footer_full_width` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | ఫుటర్‌ను పూర్తి వెడల్పు (100%) చేయండి |
| `footer_width` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | `footer_full_width` అనేది `false` గా ఉన్నప్పుడు ఫుటర్ వెడల్పు పిక్సెల్స్‌లో |
| `footer_bottom_offset` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | పేజీ దిగువ నుండి దూరం పిక్సెల్స్‌లో (డిఫాల్ట్: `16`) |
| `card_layout` | string | ఐచ్ఛికం | `normal` (సెక్షన్ వ్యూలో లేకపోతే డిఫాల్ట్), `large` (సెక్షన్ వ్యూలో ఉంటే డిఫాల్ట్), `large-2-rows`, `large-sub-buttons-grid` | కార్డ్ యొక్క స్టైలింగ్ లేఅవుట్, చూడండి [కార్డ్ లేఅవుట్‌లు](#కార్డ్-లేఅవుట్లు) |
| `rows` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | వరుసల సంఖ్య (ఎత్తు) (ఉదా: `2`) |

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (చూడండి <a href="#styling">స్టైలింగ్</a>)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width` అనేది `false` గా ఉన్నప్పుడు ఫుటర్ వెడల్పు |
| `--bubble-footer-bottom` | `px` | ఫుటర్ దిగువ ఆఫ్‌సెట్ |
| `--bubble-footer-box-shadow` | చూడండి [బాక్స్ షాడో](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ఫుటర్ కంటైనర్ కోసం బాక్స్ షాడో |

</details>

#### ఉదాహరణలు

<details>

<summary>చిప్‌లు (స్క్రీన్‌షాట్‌లో ఉన్నట్లుగా)</summary>

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

<summary>ఒక స్థిరమైన ఫుటర్ మెనూ</summary>

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

## సబ్-బటన్‌లు

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

ఆ ఎంపికకు మద్దతు ఇచ్చే ప్రతి కార్డ్‌లో, మీరు మీ కార్డ్‌లను మరింత అనుకూలీకరించడానికి సబ్-బటన్‌లను జోడించవచ్చు. ఉదాహరణకు, మీరు వాక్యూమ్‌ను నియంత్రించగల బటన్, వాతావరణ కార్డ్ లేదా మీరు ఆలోచించగల దాదాపు ఏదైనా సృష్టించవచ్చు. ఈ సబ్-బటన్‌లు టాప్ చర్యలకు మరియు చాలా బటన్ ఎంపికలకు మద్దతు ఇస్తాయి.

సబ్-బటన్‌లు ఇప్పుడు మూడు రకాలకు మద్దతు ఇస్తాయి: **డిఫాల్ట్ (బటన్)**, **స్లయిడర్**, మరియు **డ్రాప్‌డౌన్ / సెలెక్ట్**. మీరు ఒకే కార్డ్‌లో రకాలను కలపవచ్చు, సబ్-బటన్‌లను పైన లేదా క్రింద ఉంచవచ్చు మరియు మరింత అధునాతన లేఅవుట్‌ల కోసం వాటిని గ్రూపులుగా నిర్వహించవచ్చు.

#### సబ్-బటన్‌ల స్థానం మరియు గ్రూపులు

<details>

<summary><b>సబ్-బటన్‌ల నిర్మాణం (main / bottom + గ్రూపులు)</b></summary>

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

**గమనికలు:**
- `main` మరియు `bottom` రెండు స్వతంత్ర విభాగాలు. దిగువ సబ్-బటన్‌లు కార్డ్ దిగువన స్థిరంగా ఉంటాయి.
- `main_layout` మరియు `bottom_layout` గ్రూపులను నిలువుగా పేర్చడానికి `inline` (డిఫాల్ట్) లేదా `rows` ను అంగీకరిస్తాయి.
- గ్రూపులు `group` అర్రే మరియు ఐచ్ఛిక `buttons_layout` (`inline` లేదా `column`) కలిగిన ఆబ్జెక్ట్‌లు.
- `justify_content` **దిగువ గ్రూపులకు మాత్రమే** అందుబాటులో ఉంది (`start`, `center`, `end`, `fill`).
- దిగువ సబ్-బటన్‌లు ఉన్నప్పుడు, మీరు స్పష్టంగా వేరే లేఅవుట్‌ను సెట్ చేయకపోతే కార్డ్ లేఅవుట్ స్వయంచాలకంగా `large` కు మారుతుంది.
- లెగసీ `sub_button` అర్రేలకు ఇప్పటికీ మద్దతు ఉంది మరియు వాటిని `main` విభాగంగా పరిగణిస్తారు.

</details>

### సబ్-బటన్‌ల ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణ)</b></summary>

| పేరు | రకం | అవసరం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- | --- |
| `entity` | string | ఐచ్ఛికం | ఏదైనా ఎంటిటీ | నియంత్రించడానికి ఒక ఎంటిటీ |
| `name` | string | ఐచ్ఛికం | ఏదైనా string | మీ సబ్-బటన్ కోసం ఒక పేరు, నిర్వచించకపోతే అది ఎంటిటీ పేరును ప్రదర్శిస్తుంది |
| `icon` | string | ఐచ్ఛికం | ఏదైనా `mdi:` ఐకాన్ | మీ సబ్-బటన్ కోసం ఒక ఐకాన్, నిర్వచించకపోతే అది ఎంటిటీ ఐకాన్ లేదా ఎంటిటీ చిత్రాన్ని ప్రదర్శిస్తుంది |
| `force_icon` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | ఎంటిటీ చిత్రం అందుబాటులో ఉన్నప్పటికీ ఐకాన్‌ను బలవంతం చేయండి |
| `sub_button_type` | string | ఐచ్ఛికం | `default`, `slider` లేదా `select` | సబ్-బటన్ రకాన్ని ఎంచుకోండి |
| `show_background` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | మీ సబ్-బటన్ కోసం ఒక బ్యాక్‌గ్రౌండ్‌ను చూపించండి, ఇది మీ ఎంటిటీ స్థితి ఆధారంగా దాని రంగును మారుస్తుంది |
| `state_background` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | ఎంటిటీ `on` గా ఉన్నప్పుడు స్థితి రంగును ఉపయోగించండి |
| `light_background` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | అందుబాటులో ఉన్నప్పుడు బ్యాక్‌గ్రౌండ్ కోసం లైట్ రంగును ఉపయోగించండి |
| `show_state` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క స్థితిని చూపించండి లేదా దాచండి |
| `show_name` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | పేరును చూపించండి లేదా దాచండి |
| `show_icon` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | ఐకాన్‌ను చూపించండి లేదా దాచండి |
| `show_last_changed` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిగా మార్చిన సమయాన్ని చూపించండి |
| `show_last_updated` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క చివరిగా అప్‌డేట్ చేసిన సమయాన్ని చూపించండి |
| `show_attribute` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | మీ `entity` యొక్క `name` కింద ఒక అట్రిబ్యూట్‌ను చూపించండి |
| `attribute` | string | ఐచ్ఛికం (`show_attribute` అనేది `true` గా సెట్ చేస్తే అవసరం) | మీ `entity` నుండి ఒక అట్రిబ్యూట్ | చూపించాల్సిన అట్రిబ్యూట్ (ఉదా: `brightness`) |
| `select_attribute` | string | ఐచ్ఛికం | మీ `entity` నుండి ఒక అట్రిబ్యూట్ జాబితా (పైన మద్దతు ఉన్న ఎంపికలు చూడండి) | క్లిక్ చేస్తే ఈ అట్రిబ్యూట్ జాబితా ఒక డ్రాప్‌డౌన్‌ను తెరుస్తుంది (ఉదా: `effect_list`) |
| `show_arrow` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | సెలెక్ట్ సబ్-బటన్‌ల కోసం డ్రాప్‌డౌన్ యారోను చూపించండి లేదా దాచండి |
| `scrolling_effect` | boolean | ఐచ్ఛికం | `true` (డిఫాల్ట్) లేదా `false` | కంటెంట్ కంటైనర్ పరిమాణాన్ని మించితే టెక్స్ట్‌ను స్క్రోల్ చేయడానికి అనుమతించండి |
| `tap_action` | object | ఐచ్ఛికం | చూడండి [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) | సబ్-బటన్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే, `more-info` ఉపయోగించబడుతుంది. |
| `double_tap_action` | object | ఐచ్ఛికం | చూడండి [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) | సబ్-బటన్ డబుల్ క్లిక్‌పై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే, `none` ఉపయోగించబడుతుంది. |
| `hold_action` | object | ఐచ్ఛికం | చూడండి [చర్యలు](#నొక్కడం-రెండుసార్లు-నొక్కడం-మరియు-నొక్కి-పట్టుకోవడం-చర్యలు) | సబ్-బటన్ నొక్కి పట్టుకోవడంపై చర్య రకాన్ని నిర్వచించండి, నిర్వచించకపోతే, `more-info` ఉపయోగించబడుతుంది. |
| `fill_width` | boolean | ఐచ్ఛికం | `true` లేదా `false` | అందుబాటులో ఉన్న వెడల్పును నింపండి (డిఫాల్ట్: main కోసం `false`, bottom కోసం `true`) |
| `width` | number or string | ఐచ్ఛికం | ఏదైనా సంఖ్య లేదా CSS length | అనుకూల వెడల్పు (main విభాగానికి `px`, డిఫాల్ట్‌గా bottom విభాగానికి `%`) |
| `custom_height` | number | ఐచ్ఛికం | ఏదైనా సంఖ్య | పిక్సెల్స్‌లో అనుకూల ఎత్తు |
| `content_layout` | string | ఐచ్ఛికం | `icon-left` (డిఫాల్ట్), `icon-top`, `icon-bottom`, `icon-right` | సబ్-బటన్ లోపల ఐకాన్ స్థానం |
| `always_visible` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | **స్లయిడర్ మాత్రమే.** ట్యాప్‌పై తెరవడానికి బదులుగా ఎల్లప్పుడూ స్లయిడర్‌ను చూపించండి |
| `show_button_info` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | **స్లయిడర్ మాత్రమే.** `always_visible` ఎనేబుల్ చేసినప్పుడు ఐకాన్/పేరు/స్థితిని చూపించండి |
| `visibility` | object or list | ఐచ్ఛికం | చూడండి [షరతులు](#షరతులు) | షరతుల ఆధారంగా సబ్-బటన్‌ను చూపించండి లేదా దాచండి |
| `hide_when_parent_unavailable` | boolean | ఐచ్ఛికం | `true` లేదా `false` (డిఫాల్ట్) | పేరెంట్ కార్డ్ ఎంటిటీ అందుబాటులో లేకపోతే సబ్-బటన్‌ను దాచండి |
| `css_class` | string | ఐచ్ఛికం | ఏదైనా స్ట్రింగ్ | సబ్-బటన్‌పై అదనపు CSS క్లాస్, దాని పేరు ఏదైనా సరే మీ [స్టైలింగ్](#స్టైలింగ్) లో దానిని లక్ష్యంగా చేసుకోవడానికి (ఉదా. `My value` అనేది `.my-value` ఇస్తుంది) |

</details>

<details>

<summary><b>స్లయిడర్ సబ్-బటన్ ఎంపికలు (బటన్ స్లయిడర్‌ల మాదిరిగానే)</b></summary>

<br>

స్లయిడర్ సబ్-బటన్‌లు బటన్ స్లయిడర్‌ల మాదిరిగానే స్లయిడర్ ఎంపికలకు మద్దతు ఇస్తాయి, వీటిలో:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS వేరియబుల్స్ (చూడండి <a href="#styling">స్టైలింగ్</a>)</b></summary>

| వేరియబుల్ | ఆశించిన విలువ | వివరణ |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | సబ్-బటన్‌ల కోసం బోర్డర్ రేడియస్ |
| `--bubble-sub-button-background-color` | `color` | సబ్-బటన్‌ల కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-sub-button-outline` | `box-shadow` | ఒక సబ్-బటన్ లేదా స్లయిడర్ దాని వెనుక ఉన్న కార్డ్ రంగుతోనే రంగు వేసుకున్నప్పుడు మాత్రమే జోడించే ఔట్‌లైన్, లేకపోతే అది కనిపించకుండా పోతుంది (తొలగించడానికి `none` గా సెట్ చేయండి) |
| `--bubble-sub-slider-border-radius` | `px` | స్లయిడర్ సబ్-బటన్‌ల కోసం బోర్డర్ రేడియస్ |
| `--bubble-sub-slider-background-color` | `color` | స్లయిడర్ సబ్-బటన్‌ల కోసం బ్యాక్‌గ్రౌండ్ రంగు |
| `--bubble-sub-slider-height` | `px` | ఎల్లప్పుడూ కనిపించే స్లయిడర్ సబ్-బటన్‌ల కోసం ఎత్తు |
| `--bubble-sub-slider-outline` | `box-shadow` | స్లయిడర్ సబ్-బటన్‌ల ఔట్‌లైన్ మాత్రమే, `--bubble-sub-button-outline` కు తిరిగి వస్తుంది |
| `--bubble-sub-button-dark-text-color` | `color` | ప్రకాశవంతమైన సబ్-బటన్ బ్యాక్‌గ్రౌండ్‌లపై టెక్స్ట్ రంగు |

</details>

#### ఉదాహరణలు

<details>

<summary>వాక్యూమ్ కార్డ్ చేయడానికి కొన్ని సబ్-బటన్‌లతో కూడిన బటన్ (స్క్రీన్‌షాట్‌లో ఉన్నట్లుగా)</summary>

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

<summary>ప్రకాశాన్ని చూపించే సబ్-బటన్ మరియు లైట్‌ను టోగుల్ చేసే సబ్-బటన్‌తో కూడిన బటన్ స్లయిడర్ (స్క్రీన్‌షాట్‌లో ఉన్నట్లుగా)</summary>

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

<summary>ఈ రోజు మరియు రేపటి వాతావరణంతో పాటు లోపలి మరియు బయటి ఉష్ణోగ్రతను చూపించే బటన్ (స్క్రీన్‌షాట్ చేర్చబడింది)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> నా దురదృష్టం ఏమిటంటే అది ఎల్లప్పుడూ మేఘావృతంగా ఉంటుంది, కానీ అన్ని ఐకాన్‌లు వాతావరణం ఆధారంగా మారుతున్నాయి.

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

## కార్డ్ లేఅవుట్‌లు

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card, Home Assistant సెక్షన్ వ్యూకు పూర్తిగా మద్దతు ఇస్తుంది, మీరు కార్డ్‌ను పెద్దగా చేయడానికి కార్డ్ లేఅవుట్‌ను మార్చవచ్చు మరియు మీ సెక్షన్ వ్యూలో కార్డ్ ఆక్రమించాల్సిన నిలువు వరుసలు లేదా అడ్డు వరుసల సంఖ్యను కూడా మార్చవచ్చు (ఆ ఎంపికకు మద్దతు ఇచ్చే కార్డ్‌లలో మాత్రమే). ఈ లేఅవుట్‌లకు ఇతర అన్ని వ్యూ రకాలలో కూడా మద్దతు ఉంది.

<details>

<summary><b>అందుబాటులో ఉన్న కార్డ్ లేఅవుట్‌లు</b></summary>

| లేఅవుట్ | వివరణ |
| --- | --- |
| `normal` | సాధారణ లేఅవుట్ (సెక్షన్ వ్యూ కోసం ఆప్టిమైజ్ చేయబడలేదు) |
| `large` | సెక్షన్ వ్యూలో ఎంచుకున్న అడ్డు వరుసలకు పరిమాణం మారే పెద్ద లేఅవుట్ (సెక్షన్ వ్యూ కోసం ఆప్టిమైజ్ చేయబడింది) |
| `large-2-rows` | సెక్షన్ వ్యూలో ఎంచుకున్న అడ్డు వరుసలకు పరిమాణం మారే 2 అడ్డు వరుసల సబ్-బటన్‌లతో కూడిన పెద్ద లేఅవుట్ (సెక్షన్ వ్యూ కోసం ఆప్టిమైజ్ చేయబడింది) |
| `large-sub-buttons-grid` | ఈ లేఅవుట్ సబ్-బటన్‌లను గ్రిడ్‌లో ప్రదర్శిస్తుంది, `rows` కనీసం `2` గా సెట్ చేయాలి.

</details>

#### ఉదాహరణలు

<details>

<summary>2 అడ్డు వరుసల సబ్-బటన్‌లతో ఎనర్జీ గణాంకాలను చూపించే పెద్ద బటన్ (స్క్రీన్‌షాట్ చేర్చబడింది)</summary>

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

<summary>12 సబ్-బటన్‌లతో అనేక అడ్డు వరుసలు కలిగిన పెద్ద బటన్</summary>

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

## షరతులు

కొన్ని ఎంపికలు షరతుల ఆధారంగా పనిచేస్తాయి, అవి Home Assistant [షరతుల కార్డ్](https://www.home-assistant.io/dashboards/conditional/) లోని వాటిలాగే రాయబడతాయి:

- ఒక [సబ్-బటన్](#సబ్-బటన్లు) పై `visibility`, దానిని చూపించడానికి లేదా దాచడానికి
- ఒక [పాప్-అప్](#పాప్-అప్) పై `trigger`, షరతులు నెరవేరినప్పుడు దానిని తెరవడానికి
- మీ [టెంప్లేట్‌ల](#టెంప్లేట్లు) లోపల `checkConditionsMet(conditions, hass)`, మీ సొంత కోడ్‌లో సమాధానం అవసరమైనప్పుడు

Home Assistant యొక్క ప్రతి షరతు రకం మూల్యాంకనం చేయబడుతుంది: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, అలాగే `and`, `or` మరియు `not` గ్రూపులు. Home Assistant షరతుల బిల్డర్ షరతులు కూడా పనిచేస్తాయి, అంటే `sun.is_up`, `light.is_on`, `zone.in_zone` లేదా `temperature.is_value` వంటి తమ డొమైన్ పేరుతో ఉన్నవి, వాటి `target`, `options`, `behavior` మరియు `for` సెట్టింగ్‌లతో సహా.

<details>

<summary><b>ఉదాహరణ</b></summary>

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
> షరతులు మీ బ్రౌజర్‌లో మూల్యాంకనం చేయబడతాయి, కాబట్టి Home Assistant సర్వర్ అవసరమయ్యే కొన్ని షరతులు ఖచ్చితంగా ఉండలేవు: సూర్యోదయం మరియు సూర్యాస్తమయం తిరిగి లెక్కించబడకుండా `sun.sun` ఎంటిటీ నుండి చదవబడతాయి, మరియు `for` వ్యవధి recorder చరిత్ర లేకుండా చివరి స్థితి మార్పు నుండి కొలవబడుతుంది.
>
> `view_columns` ఆమోదించబడుతుంది కానీ ఎల్లప్పుడూ నెరవేరుతుంది, ఎందుకంటే మీ వ్యూ నిలువు వరుసలను Bubble Card ఎప్పుడూ అమర్చదు. Bubble Card కు తెలియని షరతు రకం నిశ్శబ్దంగా విఫలం కాకుండా మీ బ్రౌజర్ కన్సోల్‌లో ఒకసారి నివేదించుకుంటుంది, తద్వారా అక్షర దోషాన్ని లేని ఫీచర్ నుండి వేరు చేయవచ్చు.

<br>

---

<br>

## నొక్కడం, రెండుసార్లు నొక్కడం మరియు నొక్కి పట్టుకోవడం చర్యలు

ఈ ఎంపికకు మద్దతు ఇచ్చే కార్డ్‌లలో మీరు Home Assistant డిఫాల్ట్ ట్యాప్ చర్యలు, డబుల్ ట్యాప్ చర్యలు మరియు హోల్డ్ చర్యలను కూడా ఉపయోగించవచ్చు. ఉదాహరణకు, ఇది బటన్ ఐకాన్‌ను పట్టుకోవడం ద్వారా "మరింత సమాచారం" విండోను ప్రదర్శించడానికి లేదా సబ్-బటన్ నొక్కినప్పుడు ఒక సర్వీస్‌ను రన్ చేయడానికి అనుమతిస్తుంది.

**గమనిక: `double_tap_action` కాన్ఫిగర్ చేసినప్పుడు, డబుల్ ట్యాప్‌ను గుర్తించడానికి వీలుగా సాధారణ `tap_action` కు 200ms ఆలస్యం ఉంటుంది.
ఈ ఆలస్యం అవాంఛనీయమైతే, డబుల్ ట్యాప్ నిర్వహణను నిలిపివేయడానికి `double_tap_action` ను `none` గా సెట్ చేయండి.**

### చర్య ఎంపికలు

<details>

<summary><b>ఎంపికలు (YAML + వివరణ)</b></summary>

| పేరు | రకం | మద్దతు ఉన్న ఎంపికలు | వివరణ |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | నిర్వహించాల్సిన చర్య |
| `target` | object |  | `call-service` తో మాత్రమే పనిచేస్తుంది. [home-assistant సింటాక్స్](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) ను అనుసరిస్తుంది |
| `navigation_path` | string | మీ డాష్‌బోర్డ్ యొక్క ఏదైనా పాత్ | చర్యను navigate గా నిర్వచించినప్పుడు నావిగేట్ చేయాల్సిన పాత్ (ఉదా: పాప్-అప్‌ను తెరవడానికి `'#kitchen'`) |
| `url_path` | string | ఏదైనా లింక్ | చర్య `url` అయినప్పుడు క్లిక్‌పై తెరవాల్సిన URL (ఉదా: `https://www.google.com`) |
| `service` | string | ఏదైనా సర్వీస్ | `action` ను `call-service` గా నిర్వచించినప్పుడు కాల్ చేయాల్సిన సర్వీస్ (ఉదా: `media_player.media_play_pause`) |
| `data` లేదా `service_data` | object | ఏదైనా సర్వీస్ డేటా | `action` ను `call-service` గా నిర్వచించినప్పుడు చేర్చాల్సిన సర్వీస్ డేటా (ఉదా: `entity_id: media_player.kitchen`) |
| `confirmation` | object | చూడండి [నిర్ధారణ](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | ఒక నిర్ధారణ పాప్-అప్‌ను ప్రదర్శించండి (Bubble Card యొక్కది కాదు), డిఫాల్ట్ `confirmation` ఆబ్జెక్ట్‌ను ఓవర్‌రైడ్ చేస్తుంది |

</details>

#### ఉదాహరణ

<details>

<summary>పాప్-అప్‌ను తెరవడానికి ఒక బటన్</summary>

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

## స్టైలింగ్

మీరు **card-mod ఉపయోగించకుండా** అన్ని కార్డుల CSS ని మార్చడానికి నాలుగు విధాలుగా కస్టమ్ స్టైల్‌లను జోడించవచ్చు:

- ఎడిటర్‌లో, మీరు మార్చాలనుకుంటున్న కార్డుకి వెళ్లి, ఆపై _Styling options > Custom styles & JS templates_ కు నావిగేట్ చేసి, మీ కస్టమ్ స్టైల్‌లను జోడించండి (దిగువ ఉన్న చిట్కాలు మరియు ఉదాహరణలను చూడండి).
- ఎడిటర్‌లో (లేదా [YAML](#కాన్ఫిగరేషన్)లో), మీరు మార్చాలనుకుంటున్న కార్డుకి వెళ్లి, ఆపై _Modules_ కు నావిగేట్ చేసి, ఒక కొత్త మాడ్యూల్ సృష్టించండి (ఇది అన్ని కార్డులకు అందుబాటులో ఉంటుంది), లేదా అందుబాటులో ఉన్న ఏదైనా మాడ్యూల్‌ను ఇన్‌స్టాల్ చేయడానికి **Module Store** కు వెళ్లండి (మాడ్యూల్‌ల గురించి మరిన్ని వివరాలు [దిగువన](#మాడ్యూల్లు) కనుగొనవచ్చు).
- [థీమ్](https://www.home-assistant.io/integrations/frontend/#defining-themes) ఫైల్‌లో YAML లో CSS వేరియబుల్స్ జోడించడం ద్వారా (ఇవి పైన ప్రతి కార్డ్ డాక్యుమెంటేషన్‌లో అందుబాటులో ఉన్నాయి). ఇది గ్లోబల్ మార్పులను అనుమతిస్తుంది.

  <details>
  
  <summary>Example</a></summary>
  
  <br>

  `Bubble:` లైన్‌ను కాపీ చేయవద్దు, ఇది మీరు ఉపయోగించే థీమ్ పేరు. మీరు వేరియబుల్స్ నుండి `--` ను కూడా తొలగించాలి.

  ఏదైనా మార్పుల తర్వాత థీమ్‌ను రిఫ్రెష్ చేయడానికి మీరు [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) చర్యను రన్ చేయాలి.

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
  
- YAML లో `styles: |` ను జోడించి, తర్వాత మీ కస్టమ్ స్టైల్‌లను జోడించడం ద్వారా (దిగువ ఉన్న చిట్కాలు మరియు ఉదాహరణలను చూడండి).

> [!TIP]  
> **ఏ స్టైల్ క్లాస్‌లను మార్చవచ్చో అర్థం చేసుకోవడానికి**, మీరు ఈ రిపాజిటరీలోని [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) ఫోల్డర్‌ను చూడవచ్చు. ప్రతి కార్డ్ ఫోల్డర్‌లో, మీకు `styles.css` అనే ఫైల్ కనిపిస్తుంది. ఈ ఫైళ్లలో వర్తించే అన్ని స్టైల్‌లు ఉంటాయి. ఇది CSS వేరియబుల్స్ కంటే చాలా ఎక్కువ అవకాశాలను అందిస్తుంది, కానీ దీన్ని ప్రతి కార్డుకు విడిగా జోడించాల్సి ఉంటుంది.
> 
> మీరు [సముదాయం నుండి చాలా ఉదాహరణలు](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) కూడా కనుగొనవచ్చు, లేదా కొంచెం వెతికితే [Home Assistant ఫోరమ్](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) నుండి కొన్ని కనుగొనవచ్చు.
>
> Home Assistant కోసం Bubble థీమ్ (స్క్రీన్‌షాట్‌లలో ఉన్నట్లు) [ఇక్కడ](https://github.com/Clooos/Bubble) కనుగొనవచ్చు.
>
> నా [YouTube ఛానల్](https://www.youtube.com/@cloooos)లో త్వరలో ఒక ట్యుటోరియల్ వీడియో వస్తుంది!

> [!IMPORTANT]  
> ఇప్పటికే నిర్వచించిన కొన్ని CSS స్టైల్‌లకు మీరు `!important;` జోడించాల్సి రావచ్చని దయచేసి గమనించండి (దిగువ ఉదాహరణలు చూడండి).

> [!TIP]  
> సబ్-బటన్‌లను పేరు ఆధారిత క్లాస్‌ల ద్వారా టార్గెట్ చేయవచ్చు. ఉదాహరణకు, "My sub-button" అని పేరు పెట్టిన సబ్-బటన్‌ను `.my-sub-button` తో స్టైల్ చేయవచ్చు. స్లైడర్ సబ్-బటన్‌లు కూడా `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` వంటివి బహిర్గతం చేస్తాయి.
>
> పేరు ఆధారిత క్లాస్ మీరు సబ్-బటన్‌కు పేరు మార్చినప్పుడు మారుతుంది, మరియు పేరు అనువదించబడినప్పుడు అది కూడా అనువదించబడుతుంది. పేరు ఏదైనా సరే, భాష ఏదైనా సరే ఎప్పుడూ మారని మీ సొంత క్లాస్ పొందడానికి సబ్-బటన్‌పై `css_class` ను సెట్ చేయండి.

#### ఉదాహరణలు

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

ఇది (పాప్-అప్‌లు మినహా) అన్ని Bubble Card రకాలపై పనిచేస్తుంది:

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

ఇది బటన్ కార్డులో మాత్రమే అదే పని చేస్తుంది (ఇది పాప్-అప్ హెడర్ కోసం కూడా పనిచేస్తుంది): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

అది `on` గా ఉన్నప్పుడు రంగును మార్చడానికి దిగువ ఉన్న స్టైల్ టెంప్లేట్‌లను చూడండి.

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

క్షితిజ సమాంతర బటన్‌ల స్టాక్ ఐకాన్ కోసం.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Changing the background color of an icon container</summary>

<br>

ఇది (పాప్-అప్‌లు మినహా) అన్ని Bubble Card రకాలపై పనిచేస్తుంది:

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

ఇది పాప్-అప్ హెడర్ కోసం అదే పని చేస్తుంది: 

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

ప్రధాన ఐకాన్ కోసం.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

సబ్-బటన్ ఐకాన్‌ల కోసం.

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

ఈ చిత్రాన్ని Home Assistant "www" ఫోల్డర్‌లోని "pictures" ఫోల్డర్‌లో (లేదా మీకు కావలసిన పేరుతో) అప్‌లోడ్ చేయండి.

</details>

<details>

<summary>Advanced example: Creating an horizontal row of sub-buttons (screenshot included)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> నాకు ఇది చాలా ఇష్టం, నేను దీన్ని నా డాష్‌బోర్డులో హెడర్‌గా ఉపయోగిస్తాను.

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

## టెంప్లేట్‌లు

**Bubble Card Jinja టెంప్లేట్‌లకు మద్దతు ఇవ్వదు** కానీ అధునాతన వినియోగదారులు తమ [కస్టమ్ స్టైల్‌లలో](#స్టైలింగ్) నేరుగా JS లో టెంప్లేట్‌లను జోడించవచ్చు. ఉదాహరణకు, ఇది ఒక ఐకాన్‌ను, టెక్స్ట్‌లను లేదా ఎలిమెంట్ రంగులను డైనమిక్‌గా మార్చడానికి, ఒక స్టేట్, అట్రిబ్యూట్ మరియు మరిన్నింటి ఆధారంగా ఒక ఎలిమెంట్‌ను (సబ్-బటన్ వంటిది) షరతులతో చూపించడానికి లేదా దాచడానికి, లేదా దాదాపు ఏదైనా చేయడానికి మిమ్మల్ని అనుమతిస్తుంది.

> [!TIP]  
> JS టెంప్లేట్‌ల గురించి మరింత సమాచారం [ఇక్కడ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). ప్రతిదీ సరిగ్గా పనిచేస్తోందని నిర్ధారించుకోవడానికి **మీ బ్రౌజర్ కన్సోల్‌ను ఎల్లప్పుడూ చూడండి** అని నా సలహా.

> [!IMPORTANT]  
> **CSS ప్రాపర్టీని మార్చని అన్ని టెంప్లేట్‌లను చివరన ఉంచాలి! ఐకాన్, టెక్స్ట్ లేదా ఏదైనా ఎలిమెంట్‌ను మార్చడం వంటివి.**

#### అందుబాటులో ఉన్న వేరియబుల్స్ మరియు ఫంక్షన్‌లు

<details>

<summary>Variables</summary>

<br>

చాలా కార్డులలో మీకు ఈ వేరియబుల్స్ అందుబాటులో ఉంటాయి:

- `state` మీ నిర్వచించిన `entity` యొక్క స్టేట్‌ను తిరిగి ఇస్తుంది.
  
- `entity` ఈ ఉదాహరణలో `switch.test` వంటి మీరు నిర్వచించిన మీ ఎంటిటీని తిరిగి ఇస్తుంది.
  
- `icon` ను ఐకాన్‌ను మార్చడానికి ఇలా ఉపయోగించవచ్చు `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` మీ మొదటి సబ్-బటన్ నిర్వచించిన `entity` యొక్క స్టేట్‌ను తిరిగి ఇస్తుంది, `[0]` మొదటి సబ్-బటన్ స్టేట్, `[1]` రెండవది...
  
- `subButtonIcon[0]` ను మొదటి సబ్-బటన్ ఐకాన్‌ను మార్చడానికి ఇలా ఉపయోగించవచ్చు `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` మొదటి సబ్-బటన్ ఐకాన్, `[1]` రెండవది...
  
- `card` DOM లో కార్డ్ ఎలిమెంట్‌ను తిరిగి ఇస్తుంది.
  
- `hass` అనేది మీకు మరింత నియంత్రణను అనుమతించే ఒక అధునాతన వేరియబుల్, ఉదాహరణకు మీరు `light.kitchen` యొక్క స్టేట్‌ను ఇలా తిరిగి ఇవ్వవచ్చు `hass.states['light.kitchen'].state` లేదా ఒక అట్రిబ్యూట్‌ను ఇలా `hass.states[entity].attributes.brightness`.

- `this` మీ సెటప్ మరియు డాష్‌బోర్డు గురించి చాలా ఉపయోగకరమైన సమాచారాన్ని తిరిగి ఇస్తుంది, మీరు ఏమి చేస్తున్నారో తెలిస్తేనే దీన్ని ఉపయోగించండి.

</details>

<details>

<summary>Functions</summary>

<br>

మీకు అన్ని గ్లోబల్ JS ఫంక్షన్‌లు అందుబాటులో ఉన్నాయి, కానీ మీకు ఇవి కూడా అందుబాటులో ఉన్నాయి:

- `getWeatherIcon` వాతావరణాన్ని తిరిగి ఇచ్చే స్టేట్ ఆధారంగా వాతావరణ ఐకాన్‌ను తిరిగి ఇవ్వడానికి ఉపయోగించవచ్చు. ఉదాహరణకు, మూడవ సబ్-బటన్ ఐకాన్‌ను నేటి వాతావరణ ఐకాన్‌గా మార్చడానికి మీరు ఇలా చేయవచ్చు `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, `.forecast[1]?.condition` రేపటికి...

  దాని కోసం మీరు ఒక టెంప్లేట్ సెన్సార్ సృష్టించాల్సి ఉంటుంది. మీ `configuration.yaml` లో మీరు జోడించగలిగేది ఇక్కడ ఉంది:
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
- `checkConditionsMet(conditions, hass)` ఒక [షరతుల](#షరతులు) జాబితా నెరవేరినప్పుడు `true` ను తిరిగి ఇస్తుంది, ఉదాహరణకు `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` ను ఒక స్టేట్‌ను అనువదించడానికి ఉపయోగించవచ్చు (దీన్ని మాన్యువల్‌గా జోడించాల్సిన అవసరం లేకుండా స్టేట్ యూనిట్‌ను పొందడానికి కూడా ఉపయోగించవచ్చు).
- `hass.formatEntityAttributeValue(state, "attribute")` ను ఒక అట్రిబ్యూట్‌ను అనువదించడానికి ఉపయోగించవచ్చు (దీన్ని మాన్యువల్‌గా జోడించాల్సిన అవసరం లేకుండా స్టేట్ యూనిట్‌ను పొందడానికి కూడా ఉపయోగించవచ్చు).

</details>

#### ఉదాహరణలు

మీరు దిగువ చాలా ఉదాహరణలను కనుగొనవచ్చు, కానీ మీరు నా [Patreon పేజీ](https://www.patreon.com/c/Clooos)లో చాలా అధునాతన టెంప్లేట్‌లను కూడా కనుగొనవచ్చు, కార్డు ఐకాన్‌ల చుట్టూ ఉంచిన నాలుగు షరతులతో కూడిన బ్యాడ్జ్‌లను అనుమతించేది (నాకు ఇష్టమైనది) వంటివి. Bubble Card కస్టమ్ స్టైల్‌లు మరియు టెంప్లేట్‌ల అన్ని అవకాశాల గురించి తెలుసుకోవడానికి కూడా ఇది ఒక గొప్ప మార్గం!

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

ఇది నా వాక్యూమ్ ఇరుక్కుపోయినప్పుడు మాత్రమే మొదటి సబ్-బటన్‌ను చూపిస్తుంది.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

బ్యాటరీ 10% కంటే తక్కువగా ఉన్నప్పుడు ఇది ఒక సబ్-బటన్‌ను చూపిస్తుంది. "Low battery" చూపించే సబ్-బటన్‌తో ఉపయోగకరంగా ఉంటుంది.
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

ఇది వాక్యూమ్ ఇరుక్కుపోయినప్పుడు మాత్రమే బటన్ ఐకాన్‌ను మారుస్తుంది.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

ఇది వాక్యూమ్ ఇరుక్కుపోయినప్పుడు మాత్రమే మొదటి సబ్-బటన్ ఐకాన్‌ను మారుస్తుంది.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Changing an icon or sub-button icon color conditionally</summary>

<br>

ఇది దాని స్టేట్ ఆధారంగా బటన్ ఐకాన్ రంగును మారుస్తుంది.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

ఇది దాని స్టేట్ ఆధారంగా సబ్-బటన్ ఐకాన్ రంగును మారుస్తుంది. `.bubble-sub-button-1` మొదటి సబ్-బటన్, మరో సబ్-బటన్ ఐకాన్‌ను మార్చాలనుకుంటే `1` ను భర్తీ చేయండి.
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

ఫ్యాన్ `on` గా ఉన్నప్పుడు ఇది బటన్ ఐకాన్‌ను తిప్పుతుంది.
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

ఇది మీ వాతావరణాన్ని బట్టి బటన్ పేరు/స్టేట్‌ను "It's currently sunny" తో మారుస్తుంది.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
లేదా సబ్-బటన్‌లకు వర్తింపజేసినప్పుడు:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


మీరు స్టేట్ (`.bubble-state`) ను టెంప్లేట్ చేయాలనుకుంటే `show_state: true` ను టోగుల్ చేయవద్దు, ఏ అట్రిబ్యూట్ లేకుండా కేవలం `show_attribute: true` ను టోగుల్ చేయండి.

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

మీరు ఒక స్టేట్‌ను అనువదించడానికి `hass.formatEntityState(state)` ను మరియు ఒక అట్రిబ్యూట్‌ను అనువదించడానికి `hass.formatEntityAttributeValue(state, "attribute")` ను ఉపయోగించవచ్చు.

ఇది వాతావరణం ఆధారంగా పేరు మరియు ఐకాన్‌ను మారుస్తుంది, "Nuageux" అంటే ఫ్రెంచ్‌లో "Cloudy" అని అర్థం.

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

## మాడ్యూల్‌లు

మాడ్యూల్‌లు మీ కస్టమ్ స్టైల్‌లు మరియు టెంప్లేట్‌లను మీ అన్ని Bubble Card లలో సేవ్ చేయడానికి, తిరిగి ఉపయోగించడానికి మరియు పంచుకోవడానికి మిమ్మల్ని అనుమతించే శక్తివంతమైన ఫీచర్. అదే కోడ్‌ను బహుళ కార్డులలో కాపీ చేసి పేస్ట్ చేయడానికి బదులుగా, మీరు ఒక మాడ్యూల్‌ను సృష్టించి దాన్ని మీకు అవసరమైన చోట వర్తింపజేయవచ్చు. ఇది మీ డాష్‌బోర్డు రూపురేఖలను నిర్వహించడాన్ని చాలా సులభతరం మరియు మరింత సమర్థవంతంగా చేస్తుంది.

కానీ ఈ ఫీచర్ దానికంటే చాలా శక్తివంతమైనది, ఇది Bubble Card ఎడిటర్‌లో, అన్ని డిఫాల్ట్ [Home Assistant ఫారమ్](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) ఎంపికలను ఉపయోగించి, మీరే వాస్తవ ఫీచర్‌లను జోడించడానికి మిమ్మల్ని అనుమతిస్తుంది!  
ఆబ్జెక్ట్ సెలెక్టర్‌ను లైవ్ మార్పులను చూపించడానికి మరియు అట్రిబ్యూట్‌లకు సరిగ్గా మద్దతు ఇవ్వడానికి మెరుగుపరచబడింది.

ఒక మాడ్యూల్ అంతర్నిర్మిత [ఎంటిటీ సూచనల](#ఎంటిటీ-సూచనలు) పక్కన Home Assistant కార్డ్ పికర్‌కు కూడా సమాధానం ఇవ్వగలదు: ముందుగానే వివరించగల కార్డ్‌ల కోసం `suggestions` ను, మరియు అవి మీ సెటప్ నుండి లెక్కించవలసి వచ్చినప్పుడు `suggestions_code` ను ఉపయోగించండి, ఉదాహరణకు ఎంచుకున్న ఎంటిటీ చెందిన ప్రాంతంలోని అన్ని ఎంటిటీల నుండి నిర్మించిన పాప్-అప్. రెండు కీలు [ఇక్కడ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) డాక్యుమెంట్ చేయబడ్డాయి.

మీరు సముదాయం [సృష్టించిన మాడ్యూల్‌లను](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) కనుగొనడానికి మరియు ఇన్‌స్టాల్ చేయడానికి **Module Store** ను కూడా బ్రౌజ్ చేయవచ్చు, లేదా మీ స్వంత సృష్టిలను పంచుకోవచ్చు!

> [!TIP]
> ఒక మాడ్యూల్ కోడ్ ఖచ్చితంగా కార్డు `styles` విభాగంలోని కోడ్ మాదిరిగానే పనిచేస్తుంది. [టెంప్లేట్‌లు](#టెంప్లేట్లు) విభాగం నుండి అదే వేరియబుల్స్ మరియు ఫంక్షన్‌లు అన్నీ అందుబాటులో ఉన్నాయి.

<br>

### ప్రారంభ సెటప్

> [!IMPORTANT]
> v3.1.0 నుండి, Bubble Card Tools మాడ్యూల్‌ల కోసం సిఫార్సు చేయబడిన స్టోరేజ్ బ్యాకెండ్. లెగసీ టెంప్లేట్ సెన్సార్ పద్ధతి ఇప్పటికే ఉన్న సెటప్‌ల కోసం ఇప్పటికీ పనిచేస్తుంది, కానీ కొత్త మాడ్యూల్‌లు మరియు Module Store ఫీచర్‌లకు Bubble Card Tools ద్వారా ఉత్తమ మద్దతు లభిస్తుంది.

Bubble Card Tools ఇంటిగ్రేషన్ మాడ్యూల్ ఎడిటర్ మరియు Module Store ను ప్రారంభిస్తుంది, మరియు మాడ్యూల్‌లను వ్యక్తిగత YAML ఫైళ్లుగా నిల్వ చేస్తుంది. ఇప్పటికే ఉన్న మాడ్యూల్‌లు ఆటోమేటిక్‌గా మైగ్రేట్ చేయబడతాయి.

ఇన్‌స్టాలేషన్ మరియు కాన్ఫిగరేషన్ దశలు ఇక్కడ వివరించబడ్డాయి:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### మాడ్యూల్ ఎడిటర్

మీరు ఏదైనా కార్డు సెట్టింగ్‌ల నుండి, **Modules** విభాగంలో మాడ్యూల్ ఎడిటర్‌ను యాక్సెస్ చేయవచ్చు. ఎడిటర్ రెండు ప్రధాన ట్యాబ్‌లను అందిస్తుంది:

#### My Modules ట్యాబ్

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

ఈ ట్యాబ్ మీ ఇన్‌స్టాల్ చేయబడిన అన్ని మాడ్యూల్‌లను చూపిస్తుంది మరియు మిమ్మల్ని అనుమతిస్తుంది:

- ఇప్పటికే ఉన్న మాడ్యూల్‌లను ప్రస్తుత కార్డుకు **వర్తింపజేయడానికి (Apply)**
- మొదటి నుండి ఒక కొత్త మాడ్యూల్‌ను **సృష్టించడానికి (Create)**
- లైవ్ ప్రివ్యూతో ఇప్పటికే ఉన్న మాడ్యూల్‌లను **సవరించడానికి (Edit)**
- మీకు ఇక అవసరం లేని మాడ్యూల్‌లను **తొలగించడానికి (Delete)**
- మాడ్యూల్‌లను **వెతకడానికి (Search)** మరియు **క్రమబద్ధీకరించడానికి (sort)** (అక్షరక్రమం, ఇటీవలివి, యాక్టివ్‌గా ఉన్నవి మొదట)
- ఒక మాడ్యూల్ అన్ని కార్డులకు ఆటోమేటిక్‌గా వర్తించేలా చేయడానికి **గ్లోబల్ స్థితిని సెట్ చేయడానికి**
- బ్యాకప్ లేదా షేరింగ్ కోసం మాడ్యూల్‌లను **దిగుమతి/ఎగుమతి చేయడానికి (Import/Export)**
- మాడ్యూల్ ఎడిటర్‌లో, **ఐచ్ఛికం: ఎంటిటీ సూచనలు** కింద, **ఎంటిటీ సూచనలను రాయడానికి**, తద్వారా మీ మాడ్యూల్ Home Assistant కార్డ్ పికర్‌లో అందించబడుతుంది. నియమాలు మరియు లెక్కించిన సూచనలు రెండూ మీరు రాస్తున్నప్పుడే తనిఖీ చేయబడతాయి, అక్కడ ఒక లోపం ఉంటే సేవ్ చేయడం సాధ్యం కాదు, మరియు మీరు ఎంచుకున్న ఏ ఎంటిటీకైనా సూచించిన కార్డ్‌లను ప్రివ్యూ చూపిస్తుంది

#### Module Store ట్యాబ్

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

ఈ ట్యాబ్ [సముదాయం నుండి అందుబాటులో ఉన్న అన్ని మాడ్యూల్‌లను](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) చూపిస్తుంది, మరియు మిమ్మల్ని అనుమతిస్తుంది:

- సముదాయం సృష్టించిన అన్ని మాడ్యూల్‌లను **బ్రౌజ్ చేయడానికి (Browse)**
- పేరు, అనుకూలత లేదా కీవర్డ్‌ల ద్వారా మాడ్యూల్‌లను **వెతకడానికి (Search)** మరియు ఫిల్టర్ చేయడానికి
- ఒక్క క్లిక్‌తో మాడ్యూల్‌లను **ఇన్‌స్టాల్ చేయడానికి (Install)**
- కొత్త వెర్షన్‌లు అందుబాటులో ఉన్నప్పుడు ఇన్‌స్టాల్ చేసిన మాడ్యూల్‌లను **నవీకరించడానికి (Update)**

> [!TIP]
> ఎడిటర్‌లో, ఒక నిర్దిష్ట కార్డు రకంతో అనుకూలంగా ఇంకా గుర్తించని మాడ్యూల్‌లను పరీక్షించడానికి మీరు మద్దతు లేని మాడ్యూల్‌లను ప్రారంభించవచ్చు.

<br>

### మాడ్యూల్‌లను ఎలా ఉపయోగించాలి

#### ఒక కొత్త మాడ్యూల్‌ను సృష్టించడం

<details>

<summary>Click to expand</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. ఏదైనా కార్డు ఎడిటర్‌కు వెళ్లి **Modules** విభాగాన్ని విస్తరించండి.
2. **Create new module** పై క్లిక్ చేయండి.
3. మాడ్యూల్ సమాచారాన్ని పూరించండి.
4. **Code** ఎడిటర్‌లో మీ CSS మరియు/లేదా JavaScript టెంప్లేట్ కోడ్‌ను రాయండి.
5. (ఐచ్ఛికం) **Editor** విభాగంలో ఒక కస్టమ్ కాన్ఫిగరేషన్ UI ను సృష్టించండి (పైన స్క్రీన్‌షాట్‌లోని కలర్ పికర్ వంటిది, పూర్తి డాక్యుమెంటేషన్ [ఇక్కడ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) అందుబాటులో ఉంది).
6. (ఐచ్ఛికం) మీ మాడ్యూల్ Home Assistant కార్డ్ పికర్‌లో అందించబడేలా మీ **ఎంటిటీ సూచనలను** రాయండి. మీరు టైప్ చేస్తున్నప్పుడే ప్యానెల్ దానిని తనిఖీ చేస్తుంది, మరియు దాని ప్రివ్యూ మీరు ఎంచుకున్న ఎంటిటీ కోసం సూచించిన కార్డ్‌లనే చూపిస్తుంది.
7. **Save** పై క్లిక్ చేయండి.

మీ మాడ్యూల్ ఇప్పుడు మీ కార్డులలో దేనిపైనైనా ఉపయోగించడానికి అందుబాటులో ఉంది!

<br>

</details>

#### ఒక కార్డుకు మాడ్యూల్‌ను వర్తింపజేయడం

<details>

<summary>Click to expand</summary>

<br>

- **ఎడిటర్ ద్వారా:**

  - మీరు మాడ్యూల్‌ను వర్తింపజేయాలనుకుంటున్న కార్డు ఎడిటర్‌కు వెళ్లండి.
  - **Modules** విభాగాన్ని విస్తరించండి.
  - జాబితా నుండి మీరు వర్తింపజేయాలనుకుంటున్న మాడ్యూల్‌పై క్లిక్ చేయండి.
  - "Apply to" కింద, "This card" పై క్లిక్ చేయండి. మాడ్యూల్ ఇప్పుడు యాక్టివ్‌గా ఉంది. మీరు అదే కార్డుకు బహుళ మాడ్యూల్‌లను వర్తింపజేయవచ్చు.

- **YAML ద్వారా:**

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

#### ఒక మాడ్యూల్‌ను గ్లోబల్‌గా వర్తింపజేయడం

<details>

<summary>Click to expand</summary>

<br>

మీరు ఒక మాడ్యూల్‌ను అన్ని Bubble Card లకు ఆటోమేటిక్‌గా వర్తించేలా సెట్ చేయవచ్చు:

**ఎడిటర్ ఉన్న మాడ్యూల్‌లకు ఇది అందుబాటులో లేదు, ఎందుకంటే వాటికి పనిచేయడానికి నిర్దిష్ట కాన్ఫిగరేషన్ అవసరం.**

- **ఎడిటర్ ద్వారా:**

  - మాడ్యూల్ ఎడిటర్‌లో, **My Modules** ట్యాబ్‌లో మీ మాడ్యూల్‌ను కనుగొనండి.
  - మాడ్యూల్ పేరు పక్కన **All cards** బటన్‌ను టోగుల్ చేయండి.
  - మాడ్యూల్ ఇప్పుడు ఆటోమేటిక్‌గా అన్ని కార్డులకు వర్తించబడుతుంది.
 
- **YAML ద్వారా:**

  మీ మాడ్యూల్ YAML కాన్ఫిగరేషన్‌లో (`bubble-modules.yaml` లో), కేవలం `is_global: true` జోడించండి.

<br>

</details>

#### ఒక గ్లోబల్ మాడ్యూల్ నుండి ఒకే ఒక కార్డును మినహాయించడం

<details>

<summary>Click to expand</summary>

<br>

మీకు ఒక గ్లోబల్ మాడ్యూల్ ఉండి, దాన్ని ఒక నిర్దిష్ట కార్డు నుండి మినహాయించాలనుకుంటే:

- **ఎడిటర్ ద్వారా:**
  
  - కార్డు **Modules** విభాగంలో, మీకు గ్లోబల్ మాడ్యూల్‌లు జాబితా చేయబడినట్లు కనిపిస్తుంది.
  - ఒక గ్లోబల్ మాడ్యూల్‌పై క్లిక్ చేసి, ఈ నిర్దిష్ట కార్డు నుండి దాన్ని మినహాయించడానికి "This card" ను నిలిపివేయండి.

- **YAML ద్వారా:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### మీ మాడ్యూల్‌ను Module Store కు పంచుకోవడం

<details>

<summary>Click to expand</summary>

<br>

మీ మాడ్యూల్‌ను Module Store కు పంచుకోవడానికి, మాడ్యూల్ ఎడిటర్‌లో, దిగువన "Export Module" లో, "Copy for GitHub" పై క్లిక్ చేసి, ఆ కంటెంట్‌ను [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) కేటగిరీలో ఒక కొత్త డిస్కషన్‌లో పేస్ట్ చేయండి. **వివరణను సవరించండి** (అవసరమైతే), **ఉదాహరణను** (YAML వినియోగదారుల కోసం), మరియు Module Store కోసం **కనీసం ఒక స్క్రీన్‌షాట్‌ను చేర్చడం** గుర్తుంచుకోండి.

**మీ మాడ్యూల్ దాని తర్వాత వెంటనే అందుబాటులోకి వస్తుంది** (స్టోర్ రిఫ్రెష్ తర్వాత), కాబట్టి ప్రతిదీ సరిగ్గా వ్రాయబడిందని మరియు మాడ్యూల్ ఆశించిన విధంగా పనిచేస్తుందని రెండుసార్లు తనిఖీ చేయండి. మాడ్యూల్ పంచుకున్న తర్వాత మీరు దాన్ని తప్పకుండా సవరించవచ్చు/నవీకరించవచ్చు.

<br>

</details>

#### వెర్షన్ నిర్వహణ

<details>

<summary>Click to expand</summary>

<br>

Module Store ఇన్‌స్టాల్ చేసిన మాడ్యూల్‌లకు నవీకరణల కోసం ఆటోమేటిక్‌గా తనిఖీ చేస్తుంది. నవీకరణలు అందుబాటులో ఉన్నప్పుడు:

1. మీకు **Module Store** ట్యాబ్‌లో నవీకరణ సూచిక కనిపిస్తుంది.
2. అందుబాటులో ఉన్న నవీకరణలతో మాడ్యూల్‌లలో **Update** పై క్లిక్ చేయండి.
3. Module Store లో నవీకరణను నిర్ధారించండి.

<br>

</details>

#### మద్దతు ఉన్న కార్డు రకాలను నిర్వచించడం

<details>

<summary>Click to expand</summary>

<br>

కొన్ని మాడ్యూల్‌లు అన్ని కార్డు రకాలతో అనుకూలంగా ఉండకపోవచ్చు. ఒక మాడ్యూల్‌కు మద్దతు ఉన్న కార్డులను మీరు నిర్దేశించవచ్చు.  
మీరు ఒక మాడ్యూల్ **అన్ని కార్డులతో** అనుకూలంగా ఉండాలనుకుంటే, కేవలం `supported` ఫీల్డ్‌ను వదిలివేయండి (లేదా ఎడిటర్‌లో **All cards** ఎంపికను ఉపయోగించండి).

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

### ఉదాహరణలు

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

ఈ మాడ్యూల్ [ఇక్కడ](https://github.com/Clooos/Bubble-Card/discussions/1231) అందుబాటులో ఉంది.

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

మరిన్ని ఉదాహరణలు Module Store లో, లేదా [ఇక్కడ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) కనుగొనవచ్చు.

<br>

---

<br>

## స్థానికీకరణ

Bubble Card మీ భాషలో మాట్లాడుతుంది. దాని ఎడిటర్ Home Assistant మద్దతు ఇచ్చే 64 భాషల్లోకి అనువదించబడింది, మరియు Home Assistant కు ఇప్పటికే ఒక పదం ఉన్న ప్రతిచోటా దాని సొంత పదజాలమే తిరిగి ఉపయోగించబడుతుంది, తద్వారా మీరు రెండు ఇంటర్‌ఫేస్‌లలోనూ ఒకే పదాలను చదువుతారు.

ఎడిటర్ దిగువన, వెర్షన్ నంబర్ పక్కన, ఒక **స్వయంచాలకం** స్విచ్ మీ Home Assistant భాషను అనుసరిస్తుంది. దానిని ఆఫ్ చేస్తే ఎడిటర్ మొత్తం ఆంగ్లానికి తిరిగి వెళ్తుంది, ఇది ఒక ట్యుటోరియల్‌ను అనుసరించడానికి లేదా ఒక సమస్యను నివేదించడానికి ఉపయోగకరం. మీ ఎంపిక మీ బ్రౌజర్‌లో గుర్తుంచుకోబడుతుంది.

ఈ డాక్యుమెంటేషన్ కూడా అనువదించబడింది, [62 భాషల్లోకి](languages.md), బ్రిటిష్ ఇంగ్లీష్ తప్ప అన్నింటిలోకి, బ్రిటిష్ ఇంగ్లీష్ అసలు పాఠాన్నే చూపిస్తుంది. ఆ పేజీలు అందరికీ తెరిచి ఉన్నాయి, కాబట్టి మీ సొంత Home Assistant తో సరిపోని పదజాలాన్ని కొన్ని క్లిక్‌లలో సరిచేయవచ్చు. విషయానికి సంబంధించి ఆంగ్ల వెర్షనే ప్రామాణికంగా ఉంటుంది.

<br>

---

<br>

## సహాయం

ఏదైనా ఆశించిన విధంగా పనిచేయకపోతే ఒక ఇష్యూను తెరవడానికి సంకోచించకండి. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card గురించి ప్రశ్నలు లేదా ఆలోచనలు ఉన్నాయా? మీ డాష్‌బోర్డులను లేదా ఆవిష్కరణలను పంచుకోవాలనుకుంటున్నారా? మీరు Home Assistant ఫోరమ్‌కు, Bubble Card సబ్‌రెడిట్‌కు లేదా GitHub Discussions విభాగానికి వెళ్లవచ్చు.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## సహకరించడం

సహకారాలకు స్వాగతం! బగ్ ఫిక్స్‌లు అయినా, కొత్త ఫీచర్‌లు అయినా, అనువాదాలు అయినా, లేదా డాక్యుమెంటేషన్ మెరుగుదలలు అయినా, ఒక పుల్ రిక్వెస్ట్‌ను తెరవడానికి సంకోచించకండి.

మొదలుపెట్టే ముందు, మీ లోకల్ ఎన్విరాన్‌మెంట్‌ను ఎలా సెటప్ చేయాలో, ప్రాజెక్టును ఎలా బిల్డ్ చేయాలో మరియు మీ మార్పులను ఎలా పరీక్షించాలో వివరించే [డెవలపర్ గైడ్](DEVELOPERS.md) చదవండి.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## విరాళం ఇవ్వండి

ఈ ప్రాజెక్టును సాధ్యమైనంత ఉత్తమంగా చేయడానికి నేను నా ఖాళీ సమయాన్ని ఎక్కువగా వెచ్చిస్తాను. కాబట్టి మీరు నా పనిని అభినందిస్తే, ఏదైనా విరాళం మీ మద్దతును చూపించడానికి ఒక గొప్ప మార్గం అవుతుంది 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

మీ మద్దతుకు అందరికీ ధన్యవాదాలు, మీరందరూ నా అతిపెద్ద ప్రేరణ!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
