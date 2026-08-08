<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> இந்தப் பக்கம் ஒரு தானியங்கி மொழிபெயர்ப்பு. சந்தேகம் இருந்தால், [ஆங்கிலத்தில் உள்ள மூல ஆவணம்](../README.md) செல்லுபடியாகும். ஏதேனும் ஒரு வாக்கியம் தவறாக இருக்கிறதா? எந்த உதவியும் வரவேற்கத்தக்கது, [இந்தப் பக்கத்தைச் சரிசெய்ய](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ta.md) ஒரு நிமிடம் மட்டுமே போதும்: fork மற்றும் pull request ஆகியவற்றை GitHub பார்த்துக்கொள்ளும். முன்கூட்டியே நன்றி! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[இதை வேறொரு மொழியில் படிக்கவும்](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card என்பது Home Assistant-க்கான ஒரு எளிமையான, தனிப்பயனாக்கக்கூடிய கார்டு தொகுப்பாகும், இதில் நவீன பாப்-அப்களும், 100க்கும் மேற்பட்ட சமூகம் உருவாக்கிய மாட்யூல்களைக் கொண்ட ஒருங்கிணைந்த Module Store-ம் அடங்கும்.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## பொருளடக்கம்

**[`நிறுவல்`](#நிறுவல்)**  **[`உள்ளமைவு`](#உள்ளமைவு)**  **[`உருப்படி பரிந்துரைகள்`](#உருப்படி-பரிந்துரைகள்)**  **[`பாப்-அப்`](#பாப்-அப்)**  **[`கிடைமட்ட பட்டன் அடுக்கு`](#கிடைமட்ட-பட்டன்-அடுக்கு)**  **[`பட்டன்`](#பட்டன்)**  **[`மீடியா பிளேயர்`](#மீடியா-பிளேயர்)**  **[`மறைப்பு`](#மறைப்பு)**  **[`தேர்வு`](#தேர்வு)**  **[`காலநிலை`](#காலநிலை)**  **[`காலெண்டர்`](#காலெண்டர்)**  **[`பிரிப்பான்`](#பிரிப்பான்)**  **[`வெற்று நெடுவரிசை`](#வெற்று-நெடுவரிசை)**  **[`துணை பட்டன்கள் மட்டும்`](#துணை-பட்டன்கள்-மட்டும்)**  **[`துணை பட்டன்கள்`](#துணை-பட்டன்கள்)**  **[`கார்டு தளவமைப்புகள்`](#கார்டு-தளவமைப்புகள்)**  **[`நிபந்தனைகள்`](#நிபந்தனைகள்)**  **[`செயல்கள்`](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்)**  **[`வடிவமைப்பு`](#வடிவமைப்பு)**  **[`டெம்ப்ளேட்கள்`](#டெம்ப்ளேட்கள்)**  **[`மாட்யூல்கள்`](#மாட்யூல்கள்)**  **[`உள்ளூராக்கம்`](#உள்ளூராக்கம்)**  **[`உதவி`](#உதவி)**  **[`பங்களிப்பு`](#பங்களிப்பு)**  **[`நன்கொடை`](#நன்கொடை)**

<br>

## நிறுவல்

**Home Assistant ஆதரிக்கும் மிகக் குறைந்த பதிப்பு:** 2023.9.0

<details>

<summary>HACS இல்லாமல்</summary>

<br>

1. [சமீபத்திய வெளியீட்டிலிருந்து](https://github.com/Clooos/Bubble-Card/releases/latest) `bubble-card.zip` ஐப் பதிவிறக்கவும்
2. அதை உங்கள் `<config>/www` கோப்புறையில் பிரித்தெடுக்கவும், அதன் அருகில் `bubble-card.js` மற்றும் `translations` கோப்புறை கிடைக்க வேண்டும் (அந்தக் கோப்புறையில் எடிட்டரின் அகராதிகள் உள்ளன, அது இல்லாமல் எடிட்டர் ஆங்கிலத்திலேயே இருக்கும்)
3. உங்கள் டாஷ்போர்டில் மேல் வலது மூலையில் உள்ள ஐகானை கிளிக் செய்து பின்னர் `Edit dashboard` என்பதை கிளிக் செய்யவும்
4. அந்த ஐகானை மீண்டும் கிளிக் செய்து பின்னர் `Manage resources` என்பதை கிளிக் செய்யவும்
5. `Add resource` என்பதை கிளிக் செய்யவும்
6. இதை நகலெடுத்து ஒட்டவும்: `/local/bubble-card.js?v=1`
7. `JavaScript Module` என்பதை கிளிக் செய்து பின்னர் `Create` என்பதை கிளிக் செய்யவும்
8. திரும்பிச் சென்று உங்கள் பக்கத்தை புதுப்பிக்கவும்
9. இப்போது கீழ் வலது மூலையில் உள்ள `Add card` என்பதை கிளிக் செய்து `Bubble Card` எனத் தேடலாம்
10. கோப்பு புதுப்பிக்கப்பட்ட ஒவ்வொரு முறையும், `/local/bubble-card.js?v=1` ஐத் திருத்தி பதிப்பு எண்ணை அதிக எண்ணிக்கையாக மாற்ற வேண்டும்

இது வேலை செய்யவில்லை என்றால், உங்கள் உலாவி தற்காலிக நினைவகத்தை அழிக்க முயற்சிக்கவும்.

</details>

<details>

<summary>HACS உடன் (பரிந்துரைக்கப்படுகிறது)</summary>

<br>

இந்த முறை Home Assistant Community Store இல் நேரடியாக புதுப்பிப்புகளைப் பெற உங்களை அனுமதிக்கிறது

1. HACS இன்னும் நிறுவப்படவில்லை என்றால், [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) இல் உள்ள வழிமுறைகளைப் பின்பற்றி அதை பதிவிறக்கவும்
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) இல் உள்ள வழிமுறைகளைப் பின்பற்றி HACS ஆரம்ப உள்ளமைவைத் தொடரவும்
3. உங்கள் பக்கப்பட்டியில் "HACS" க்குச் செல்லவும்
4. "Bubble Card" எனத் தேடவும், அல்லது கீழே உள்ள நீல பொத்தானை கிளிக் செய்யவும்
5. "Download" என்பதை கிளிக் செய்யவும்
6. உங்கள் டாஷ்போர்டுக்குத் திரும்பிச் சென்று மேல் வலது மூலையில் உள்ள ஐகானை கிளிக் செய்து பின்னர் `Edit dashboard` என்பதை கிளிக் செய்யவும்
7. இப்போது கீழ் வலது மூலையில் உள்ள `Add card` என்பதை கிளிக் செய்து `Bubble Card` எனத் தேடலாம்

இது வேலை செய்யவில்லை என்றால், (தேவைப்பட்டால் உங்கள் அனைத்து சாதனங்களிலும்) உங்கள் உலாவி/ஆப் தற்காலிக நினைவகத்தை அழிக்க முயற்சிக்கவும்.

#### வீடியோக்கள்

படிப்படியான வீடியோக்களுக்கு எனது YouTube சேனலையும் பார்க்கலாம்.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## உள்ளமைவு

அனைத்து விருப்பங்களையும் Home Assistant எடிட்டரில் உள்ளமைக்கலாம். ஆனால் கீழே உள்ள ஆவணத்தில் மேலும் விவரங்களையும் YAML-ஐயும் காணலாம்.

<details>

<summary><b>முதன்மை விருப்பங்கள் (YAML + விளக்கம்)</b></summary>

| பெயர் | வகை | தேவை | ஆதரிக்கப்படும் விருப்பங்கள் | விளக்கம் |
| --- | --- | --- | --- | --- |
| `type` | string | **அவசியம்** | `custom:bubble-card` | கார்டின் வகை |
| `card_type` | string | **அவசியம்** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` அல்லது `sub-buttons` | Bubble Card இன் வகை, கீழே காண்க |
| `styles` | object list | விருப்பத்தேர்வு | எந்த CSS ஸ்டைல்ஷீட்டும் | உங்கள் Bubble Card CSS-ஐ தனிப்பயனாக்க அனுமதிக்கிறது, [வடிவமைப்பு](#வடிவமைப்பு) பார்க்கவும் |

</details>

<details>

<summary><b>உலகளாவிய CSS மாறிகள் (<a href="#வடிவமைப்பு">வடிவமைப்பு</a> பார்க்கவும்)</b></summary>

| மாறி | எதிர்பார்க்கப்படும் மதிப்பு | விளக்கம் |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | ஆதரிக்கப்படும் அனைத்து உறுப்புகளுக்கான எல்லை வளைவு |
| `--bubble-main-background-color` | `color` | ஆதரிக்கப்படும் அனைத்து உறுப்புகளுக்கான முதன்மை பின்னணி நிறம் |
| `--bubble-secondary-background-color` | `color` | ஆதரிக்கப்படும் அனைத்து உறுப்புகளுக்கான இரண்டாம் நிலை பின்னணி நிறம் |
| `--bubble-accent-color` | `color` | ஆதரிக்கப்படும் அனைத்து உறுப்புகளுக்கான ஆக்சென்ட் நிறம் |
| `--bubble-icon-border-radius` | `px` | ஆதரிக்கப்படும் அனைத்து உறுப்புகளுக்கான ஐகான் எல்லை வளைவு |
| `--bubble-icon-background-color` | `color` | ஆதரிக்கப்படும் அனைத்து உறுப்புகளுக்கான ஐகான் பின்னணி நிறம் |
| `--bubble-sub-button-border-radius` | `px` | அனைத்து துணை பட்டன்களுக்கான எல்லை வளைவு |
| `--bubble-sub-button-background-color` | `color` | அனைத்து துணை பட்டன்களுக்கான பின்னணி நிறம் |
| `--bubble-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) பார்க்கவும் | ஆதரிக்கப்படும் அனைத்து உறுப்புகளுக்கான பாக்ஸ் ஷேடோ |
| `--bubble-border` | [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) பார்க்கவும் | ஆதரிக்கப்படும் அனைத்து கார்டுகளுக்கான எல்லை |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card மற்றும் அதன் திறன்களைப் பற்றி அறிய இந்த [வீடியோவை](https://www.youtube.com/watch?v=0hSQOlBxKKI) பாருங்கள்.** எனது YouTube சேனல் இன்னும் புதியது, Home Assistant மற்றும் Bubble Card பற்றிய டுடோரியல்களை மையமாகக் கொண்டது. எனது சேனலின் தெரியும் தன்மையை அதிகரிக்க உதவ, சப்ஸ்கிரைப் செய்ய தயங்க வேண்டாம். முன்கூட்டியே நன்றி!

<br>

---

<br>

## உருப்படி பரிந்துரைகள்

Home Assistant 2026.6 முதல், கார்டு தேர்வியில் ஒரு entity-ஐத் தேர்ந்தெடுத்தால் சில தயார்நிலை கார்டுகள் உங்களுக்கு வழங்கப்படுகின்றன, அந்தப் பட்டியலில் Bubble Card தன் சொந்த செய்முறைகளையும் சேர்க்கிறது. ஒரு விளக்கைத் தேர்ந்தெடுத்தால் பிரகாச ஸ்லைடருடன் கூடிய கார்டு வழங்கப்படும், உங்கள் விளக்கு ஆதரித்தால் நிற வெப்பநிலை, நிறம் மற்றும் நிறச்செறிவு வகைகளும் சேர்த்து வழங்கப்படும். ஒரு மறைப்பைத் தேர்ந்தெடுத்தால் அதன் நிலை ஸ்லைடர் கிடைக்கும், ஒரு மீடியா பிளேயரைத் தேர்ந்தெடுத்தால் அதன் மூலப் பட்டியலுடன் கூடிய வகையும் கிடைக்கும், ஒரு வாக்யூமைத் தேர்ந்தெடுத்தால் அதன் தொடக்கம், இடைநிறுத்தம் மற்றும் நிலையத்திற்குத் திரும்பும் பட்டன்கள் கிடைக்கும். ஒவ்வொரு பரிந்துரையும் நேரடி முன்னோட்டமாகக் காட்டப்படும் வழக்கமான Bubble Card உள்ளமைவே, எனவே மிக நெருக்கமான ஒன்றை எடுத்து வழக்கம் போல் தொடர்ந்து திருத்தலாம்.

உங்களுக்கு என்ன வழங்கப்படுகிறது என்பது உங்கள் entity உண்மையில் என்ன செய்ய முடியும் என்பதைப் பொறுத்தது: பிரகாச சேனல் இல்லாத விளக்குக்கு ஸ்லைடருக்குப் பதிலாக ஒரு டாகிள் கிடைக்கும், சாய முடியாத மறைப்புக்கு சாய்வு வகை கிடையாது, ஒரு காலநிலை entity-க்கு முன்னமைவு பயன்முறைகள் இருந்தால் மட்டுமே அவை கிடைக்கும். பொருந்தும்போது வழக்கமான உள்ளீடுகள் Bubble Card பரிந்துரைகளுக்குக் கீழே வரும்: அந்த entity வகைக்கான தனிக் கார்டு, ஒரு எளிய பட்டன் மற்றும் ஒரு ஸ்லைடர்.

> [!TIP]
> மாட்யூல்கள் அந்தப் பட்டியலில் தங்கள் சொந்த பரிந்துரைகளைச் சேர்க்கலாம், [மாட்யூல்கள்](#மாட்யூல்கள்) பார்க்கவும்.

<br>

---

<br>

## பாப்-அப்

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

இந்த கார்டு எந்த உள்ளடக்கத்துடனும் பாப்-அப்பை உருவாக்க உங்களை அனுமதிக்கிறது. ஒவ்வொரு பாப்-அப்பும் **இயல்பாகவே மறைக்கப்பட்டிருக்கும்**, மேலும் அதன் இணைப்பை (எ.கா. `'#pop-up-name'`) இலக்காகக் கொள்வதன் மூலம், `navigate` [செயலை](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) ஆதரிக்கும் எந்த கார்டு மூலமும், அல்லது சேர்க்கப்பட்டுள்ள [கிடைமட்ட பட்டன் அடுக்கு](#கிடைமட்ட-பட்டன்-அடுக்கு) மூலமும் திறக்கலாம்.

> [!TIP]
> ### பாப்-அப் தூண்டுதல் 
> இந்த அம்சம் எந்த ஒரு entity-யின் நிலையின் அடிப்படையிலும் பாப்-அப்பைத் திறக்க உங்களை அனுமதிக்கிறது, உதாரணமாக, யாராவது உங்கள் வீட்டு முன் இருக்கும்போது கேமராவுடன் "பாதுகாப்பு" பாப்-அப்பைத் திறக்கலாம். ஒரு toggle helper (input_boolean) ஐயும் உருவாக்கி, ஒரு ஆட்டோமேஷனில் அதன் திறத்தல்/மூடுதலைத் தூண்டலாம்.
> <details>
> <summary><code>binary_sensor</code> <code>on</code> ஆக இருக்கும்போது ஒரு பாப்-அப்பைத் திறத்தல்</summary>
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
> ### பாப்-அப்பை மூட வேறுபட்ட வழிகள் 
> ஒரு பாப்-அப்பை மூட பல வழிகள் உள்ளன. உதாரணமாக, பாப்-அப் தலைப்பிலிருந்து கீழே ஸ்வைப் செய்வதன் மூலம், பாப்-அப்பிற்குள் கீழே நீண்ட ஸ்வைப் செய்வதன் மூலம், டெஸ்க்டாப்பில் Escape அழுத்துவதன் மூலம், URL இல் உள்ள hash-ஐ நீக்குவதன் மூலம் அல்லது மூடு பொத்தானை அழுத்துவதன் மூலம் அதை மூடலாம்.
>


### பாப்-அப் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| பெயர் | வகை | தேவை | ஆதரிக்கப்படும் விருப்பங்கள் | விளக்கம் |
| --- | --- | --- | --- | --- |
| `hash` | string | **அவசியம்** | ' ' உடன் ஏதேனும் தனித்துவமான hash (எ.கா. `'#kitchen'`) | இது உங்கள் பாப்-அப்பை நீங்கள் திறக்கும் விதம் |
| `popup_style` | string | விருப்பத்தேர்வு | `bubble` (இயல்பு) அல்லது `classic` | பாப்-அப் காட்சி பாணியை வரையறுக்கிறது |
| `popup_mode` | string | விருப்பத்தேர்வு | `default` (இயல்பு), `fit-content`, `centered` அல்லது `adaptive-dialog` | பாப்-அப் தளவமைப்பு பயன்முறையை வரையறுக்கிறது |
| `with_bottom_offset` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | `popup_mode: fit-content` அல்லது `adaptive-dialog` உடன் மட்டும் பயன்படுத்தப்படுகிறது. மொபைலில் கீழ் ஆஃப்செட்டைப் பயன்படுத்துகிறது, உங்கள் டாஷ்போர்டில் footer கார்டு இருந்தால் பயனுள்ளது. |
| `full_width_on_mobile` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | `popup_mode: centered` உடன் மட்டும் பயன்படுத்தப்படுகிறது. மொபைலில் பாப்-அப்பை முழு திரை அகலத்திற்கு விரிவாக்குகிறது, சிறிய டிஸ்ப்ளேக்களில் பயனுள்ளது. |
| `performance_mode` | string | விருப்பத்தேர்வு | `default` (இயல்பு) அல்லது `performance` | பாப்-அப் திறக்கும் அனிமேஷனை மேம்படுத்துகிறது. `performance` உள்ளடக்க ரெண்டரிங்கையும் பின்னணி ப்ளர்-ஐயும் சற்று தாமதிக்கிறது, மேலும் அமைக்கப்பட்டிருந்தால் பேக்ட்ராப் ப்ளர்-ஐயும் முடக்குகிறது. |
| `auto_close` | string | விருப்பத்தேர்வு | மில்லிசெகண்டுகளில் ஒரு டைம்அவுட் (எ.கா. 10 வினாடிகளுக்கு `10000`) | ஒரு டைம்அவுட்டுக்குப் பிறகு பாப்-அப்பை தானாக மூடுகிறது |
| `close_on_click` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | எந்த ஒரு தொடர்புக்குப் பிறகும் பாப்-அப்பை தானாக மூடுகிறது |
| `close_by_clicking_outside` | boolean | விருப்பத்தேர்வு | `true` (இயல்பு) அல்லது `false` | பாப்-அப்பிற்கு வெளியே கிளிக் செய்வதன் மூலம் அதை மூடுகிறது |
| `width_desktop` | string | விருப்பத்தேர்வு | எந்த CSS மதிப்பும் | டெஸ்க்டாப்பில் அகலம் (மொபைலில் இயல்பாகவே `100%`) |
| `margin` | string | விருப்பத்தேர்வு | எந்த CSS மதிப்பும் | மொபைலில் உங்கள் பாப்-அப் சரியாக மையப்படுத்தப்படவில்லை என்றால் **மட்டும்** இதைப் பயன்படுத்தவும் (எ.கா. `13px`) |
| `margin_top_mobile` | string | விருப்பத்தேர்வு | எந்த CSS மதிப்பும் | மொபைலில் மேல் மார்ஜின் (உங்கள் தலைப்பு மறைக்கப்பட்டிருந்தால் எ.கா. `-56px`) |
| `margin_top_desktop` | string | விருப்பத்தேர்வு | எந்த CSS மதிப்பும் | டெஸ்க்டாப்பில் மேல் மார்ஜின் (பாதி அளவு பாப்-அப்பிற்கு எ.கா. `50vh` அல்லது `400px` நிலையான உயரத்திற்கு `calc(100vh - 400px)`) |
| `bg_color` | string | விருப்பத்தேர்வு | எந்த hex, rgb அல்லது rgba மதிப்பும் | உங்கள் பாப்-அப்பின் பின்னணி நிறம் (வெள்ளை பின்னணிக்கு எ.கா. `#ffffff`) |
| `bg_opacity` | string | விருப்பத்தேர்வு | `0` முதல் `100` வரை எந்த மதிப்பும் | உங்கள் பாப்-அப்பின் பின்னணி ஒளிபுகுதன்மை (வெளிப்படைத்தன்மை இல்லாமல் இருக்க எ.கா. `100`) |
| `bg_blur` | string | விருப்பத்தேர்வு | `0` முதல் `100` வரை எந்த மதிப்பும் | உங்கள் பாப்-அப்பின் பின்னணி ப்ளர் விளைவு, **இது `bg_opacity`, `100` ஆக அமைக்கப்படாதபோது மட்டுமே வேலை செய்யும்** (ப்ளர் இல்லாமல் இருக்க எ.கா. `0`)|
| `shadow_opacity` | string | விருப்பத்தேர்வு | `0` முதல் `100` வரை எந்த மதிப்பும் | உங்கள் பாப்-அப்பின் நிழல் ஒளிபுகுதன்மை (அதை மறைக்க எ.கா. `0`) |
| `hide_backdrop` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | உங்கள் முதன்மை டாஷ்போர்டின் முதல் பாப்-அப்பில் இதை true ஆக அமைத்து அனைத்து பாப்-அப்களிலும் பேக்ட்ராப்பை முடக்கவும். |
| `background_update` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | பின்னணியில் பாப்-அப் உள்ளடக்கத்தை புதுப்பிக்கிறது (பரிந்துரைக்கப்படவில்லை) |
| `trigger` | object அல்லது list | விருப்பத்தேர்வு | [நிபந்தனைகள்](#நிபந்தனைகள்) பார்க்கவும் | நிபந்தனைகள் பூர்த்தியாகும்போது இந்த பாப்-அப்பைத் திறக்கிறது |
| `trigger_entity` | string | விருப்பத்தேர்வு | எந்த entity-யும் | எந்த entity-யின் நிலையின் அடிப்படையிலும் இந்த பாப்-அப்பைத் திறக்கிறது, `trigger` இன் எளிய வடிவம் |
| `trigger_state` | string | விருப்பத்தேர்வு (`trigger_entity` வரையறுக்கப்பட்டிருந்தால் **அவசியம்**) | எந்த entity நிலையும் | பாப்-அப்பைத் திறக்க entity நிலை |
| `trigger_close` | boolean | விருப்பத்தேர்வு | `true` (இயல்பு) அல்லது `false` | நிபந்தனைகள் இனி பூர்த்தியாகாதபோது பாப்-அப்பை மூடுகிறது. பழைய `trigger_entity` மற்றும் `trigger_state` இணையைப் பயன்படுத்தினால் இயல்பாக `false` ஆகும் |
| `open_action` | object | விருப்பத்தேர்வு | [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) பார்க்கவும் | பாப்-அப் திறக்கும்போது ஒரு செயலைத் தூண்டுகிறது |
| `close_action` | object | விருப்பத்தேர்வு | [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) பார்க்கவும் | பாப்-அப் மூடும்போது ஒரு செயலைத் தூண்டுகிறது |
| `show_header` | boolean | விருப்பத்தேர்வு | `true` (இயல்பு) அல்லது `false` | பாப்-அப் தலைப்பை முழுவதுமாக காட்டுகிறது/மறைக்கிறது |
| `show_previous_button` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | மூடு பொத்தானுக்கு அடுத்ததாக ஒரு முந்தைய பொத்தானைக் காட்டி, கிடைக்கும்போது முந்தைய பாப்-அப்பிற்கு திரும்பிச் செல்கிறது |
| `show_close_button` | boolean | விருப்பத்தேர்வு | `true` (இயல்பு) அல்லது `false` | மற்ற தலைப்பை காட்டியபடியே மூடு பொத்தானை காட்டுகிறது அல்லது மறைக்கிறது |
| `buttons_position` | string | விருப்பத்தேர்வு | `right` (இயல்பு) அல்லது `left` | தலைப்பில் மூடு மற்றும் முந்தைய பொத்தான்களின் நிலை |
| `cards` | list | விருப்பத்தேர்வு | எந்த Bubble Card, Home Assistant கார்டு அல்லது தனிப்பயன் கார்டும் | உங்கள் பாப்-அப்பின் உள்ளடக்கத்தை வரையறுக்கிறது. கீழே உள்ள பாப்-அப் உதாரணத்தைப் பார்க்கவும். |
| பாப்-அப்பின் தலைப்புக்கு [அனைத்து பட்டன் அமைப்புகளும்](#பட்டன்) உங்களுக்குக் கிடைக்கும். | | விருப்பத்தேர்வு | | வரையறுக்கப்படவில்லை என்றால் தலைப்பு எதுவும் காட்டப்படாது |

</details>

<details>

<summary><b>CSS மாறிகள் (<a href="#வடிவமைப்பு">வடிவமைப்பு</a> பார்க்கவும்)</b></summary>

| மாறி | எதிர்பார்க்கப்படும் மதிப்பு | விளக்கம் |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | பாப்-அப்பிற்கான எல்லை வளைவு |
| `--bubble-pop-up-main-background-color` | `color` | பாப்-அப்பின் ஆதரிக்கப்படும் உறுப்புகளுக்கான முதன்மை பின்னணி நிறம் |
| `--bubble-pop-up-background-color` | `color` | பாப்-அப்பின் பின்னணி நிறம் |
| `--bubble-backdrop-background-color` | `color` | பேக்ட்ராப்பிற்கான பின்னணி நிறம் |
| பாப்-அப்பின் தலைப்புக்கு [அனைத்து பட்டன் CSS மாறிகளும்](#பட்டன்-விருப்பங்கள்) உங்களுக்குக் கிடைக்கும். | | |

</details>


### தனித்த பாப்-அப் வடிவம் (v3.2.0+)

v3.2.0 முதல், பாப்-அப்கள் ஒரு புதிய தனித்த வடிவத்தைப் பயன்படுத்துகின்றன, இதில் உள்ளடக்க கார்டுகள் `cards` விருப்பத்தைப் பயன்படுத்தி பாப்-அப்பிற்குள் நேரடியாக வரையறுக்கப்படுகின்றன. இது சிறந்த செயல்திறனையும், section அடிப்படையிலான புதிய drag-and-drop எடிட்டிங் அனுபவத்தையும் வழங்குகிறது.


#### உதாரணங்கள்

<details>

<summary>ஒரு பாப்-அப் (தனித்த வடிவம்)</summary>

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

<summary>பாப்-அப்பைத் திறக்க ஒரு பட்டன்</summary>

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

## கிடைமட்ட பட்டன் அடுக்கு

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

இந்த கார்டு பாப்-அப் கார்டுக்கு ஒரு நல்ல துணையாக இருந்து, தொடர்புடைய பாப்-அப்களைத் திறக்க அனுமதிக்கிறது. உங்கள் டாஷ்போர்டின் எந்தப் பக்கத்தையும் திறக்கவும் இது அனுமதிக்கிறது. கூடுதலாக, நீங்கள் புதிதாக நுழைந்த அறையின்படி பட்டன்களின் வரிசை மாறும் வகையில், உங்கள் motion/occupancy சென்சார்களைச் சேர்க்கலாம். இந்த கார்டு ஸ்க்ரோல் செய்யக்கூடியது, எப்போதும் தெரியும் நிலையில் இருக்கும், மேலும் ஒரு footer ஆகச் செயல்படுகிறது.

> [!IMPORTANT]  
> இந்த கார்டு உங்கள் view இல் கடைசியாக இருக்க வேண்டும் (ஒவ்வொரு கார்டு மற்றும் பாப்-அப்பிற்குப் பிறகு). இது எந்த stack-க்குள்ளும் இருக்க முடியாது.

### கிடைமட்ட பட்டன் அடுக்கு விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| பெயர் | வகை | தேவை | ஆதரிக்கப்படும் விருப்பங்கள் | விளக்கம் |
| --- | --- | --- | --- | --- |
| `1_link` | string | **அவசியம்** | ' ' உடன் பாப்-அப் hash (எ.கா. `'#kitchen'`) அல்லது எந்த இணைப்பும் | திறக்க ஒரு இணைப்பு |
| `1_name` | string | விருப்பத்தேர்வு | எந்த சரமும் | உங்கள் பட்டனுக்கான ஒரு பெயர் |
| `1_icon` | string | விருப்பத்தேர்வு | எந்த `mdi:` ஐகானும் | உங்கள் பட்டனுக்கான ஒரு ஐகான் |
| `1_entity` | string | விருப்பத்தேர்வு | எந்த light அல்லது light group | அந்த light இன் நிறத்தை பின்னணியில் காட்டுகிறது |
| `1_pir_sensor` | string | விருப்பத்தேர்வு | எந்த binary sensor-உம் | `auto_order`-க்கு குறைந்தது ஒரு pir sensor அல்லது அதற்கு மேற்பட்டவை தேவை, உண்மையில் இது எந்த entity வகையுடனும் வேலை செய்கிறது, உதாரணமாக நீங்கள் light groups சேர்க்கலாம், மேலும் கடைசியாக மாறிய நிலைகளின் அடிப்படையில் வரிசை மாறும். |
| `auto_order` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | `_pir_sensor` இன் கடைசியாக மாறிய நேரத்தின்படி பட்டன்களின் வரிசையை மாற்றுகிறது, உங்கள் கோட்டில் எந்த `_pir_sensor`-உம் இல்லை என்றால் **இது `false` ஆக இருக்க வேண்டும்** |
| `margin` | string | விருப்பத்தேர்வு | எந்த CSS மதிப்பும் | மொபைலில் உங்கள் `horizontal-buttons-stack` சரியாக மையப்படுத்தப்படவில்லை என்றால் **மட்டும்** இதைப் பயன்படுத்தவும் (எ.கா. `13px`) |
| `width_desktop` | string | விருப்பத்தேர்வு | எந்த CSS மதிப்பும் | டெஸ்க்டாப்பில் அகலம் (மொபைலில் இயல்பாகவே `100%`) |
| `is_sidebar_hidden` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | டெஸ்க்டாப்பில் sidebar மறைக்கப்பட்டிருந்தால் (நீங்களே அதை மறைக்க மாற்றியிருந்தால் மட்டும்) கிடைமட்ட பட்டன் அடுக்கின் நிலையை சரிசெய்கிறது |
| `rise_animation` | boolean | விருப்பத்தேர்வு | `true` (இயல்பு) அல்லது `false` | பக்கம் ஏற்றப்பட்டதும் தொடங்கும் அனிமேஷனை முடக்க இதை `false` ஆக அமைக்கவும் |
| `highlight_current_view` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | ஒரு மென்மையான அனிமேஷனுடன் தற்போதைய hash / view-ஐ சிறப்பித்துக் காட்டுகிறது |
| `hide_gradient` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்பு) | gradient-ஐ மறைக்க இதை `false` ஆக அமைக்கவும் |

> [!IMPORTANT]  
> ஒரு எண்ணுடன் தொடங்கும் மாறிகள் உங்கள் பட்டன்களை வரையறுக்கின்றன, மேலும் பட்டன்களைச் சேர்க்க இந்த எண்ணை மட்டும் மாற்றவும் (கீழே உள்ள உதாரணத்தைப் பார்க்கவும்).

</details>

<details>

<summary><b>CSS மாறிகள் (<a href="#வடிவமைப்பு">வடிவமைப்பு</a> பார்க்கவும்)</b></summary>

| மாறி | எதிர்பார்க்கப்படும் மதிப்பு | விளக்கம் |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | கிடைமட்ட பட்டன் அடுக்கு பட்டன்களுக்கான எல்லை வளைவு |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | கிடைமட்ட பட்டன் அடுக்கு பட்டன்களுக்கான பின்னணி நிறம் |

</details>


#### உதாரணம்

<details>

<summary>occupancy சென்சார்களின் அடிப்படையில் தானாக மறுசீரமைக்கும் ஒரு கிடைமட்ட பட்டன் அடுக்கு</summary>

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

## பட்டன்

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

இந்தக் கார்டு மிகவும் பன்முகத்தன்மை கொண்டது. இதை ஒரு **switch**, ஒரு **slider**, ஒரு **state** அல்லது ஒரு **name/text** பட்டனாக பயன்படுத்தலாம்.

> [!TIP]
> ### எல்லா பட்டன் வகைகளுக்கும் இடையேயான வேறுபாடுகள் என்ன?
>
> - **Switch பட்டன்:** இது இயல்புநிலை பட்டன் வகை. இயல்பாக, இது ஒரு entity-ஐ toggle செய்கிறது, மேலும் அதன் பின்னணி நிறம் entity-யின் நிலையின் அடிப்படையில் அல்லது ஒளியின் நிறத்தின் அடிப்படையில் மாறுகிறது. **Tap action on card** பிரிவில் அதன் செயலை மாற்றலாம்.
>
> - **Slider பட்டன்:** இந்த பட்டன் வகை சரிசெய்யக்கூடிய வரம்புகளுடன் entity-களைக் கட்டுப்படுத்த அனுமதிக்கிறது. விளக்குகளின் ஒளியைக் குறைப்பதற்கு இது ஏற்றது, மேலும் அதன் நிரப்பு நிறம் ஒளியின் நிறத்திற்கு ஏற்ப மாறும். பேட்டரி மட்டம் போன்ற மதிப்புகளைக் காட்டவும் இதைப் பயன்படுத்தலாம்.
>   Slider-க்கு ஆதரவளிக்கும் entity-கள்:
>   - Light (brightness)
>   - Media player (volume)
>   - Cover (position)
>   - Fan (percentage)
>   - Climate (temperature)
>   - Input number மற்றும் number (value)
>   - Battery sensor (percentage, read only)
>
>   **Slider settings**-இல் உள்ள entity filter-ஐ முடக்குவதன் மூலம், எண் மதிப்பு கொண்ட எந்த entity-யையும் பயன்படுத்தலாம், பின்னர் `min` மற்றும் `max` மதிப்புகளை வரையறுக்கவும். இந்த விருப்பம் read only ஆகும்.
>
> - **State பட்டன்:** ஒரு sensor அல்லது எந்த entity-யிலிருந்தும் தகவலைக் காட்டுவதற்கு ஏற்றது. அதை அழுத்தும்போது, entity-யின் "More info" பேனலைக் காட்டும். அதன் பின்னணி நிறம் மாறாது.
>
> - **Name/Text பட்டன்:** entity தேவைப்படாத ஒரே பட்டன் வகை. இது ஒரு குறுகிய உரையை, ஒரு பெயரை அல்லது ஒரு தலைப்பைக் காட்ட அனுமதிக்கிறது. இதற்கு செயல்களையும் சேர்க்கலாம். அதன் பின்னணி நிறம் மாறாது.

### பட்டன் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | கட்டுப்படுத்த வேண்டிய entity |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | உங்கள் பட்டனின் நடத்தை |
| `name` | string | Optional | Any string | உங்கள் பட்டனுக்கான பெயர், வரையறுக்கப்படவில்லை என்றால் entity பெயர் காட்டப்படும் |
| `icon` | string | Optional | Any `mdi:` icon | உங்கள் பட்டனுக்கான ஐகான், வரையறுக்கப்படவில்லை என்றால் entity ஐகான் அல்லது `entity-picture` காட்டப்படும் |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture`-க்கு பதிலாக ஐகானுக்கு முன்னுரிமை கொடுக்கவும் |
| `use_accent_color` | boolean | Optional (`false` default) | **விளக்குகளுக்கு மட்டும்.** ஒளியின் நிறத்திற்குப் பதிலாக theme-இன் accent நிறத்தைப் பயன்படுத்தவும்.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் நிலையைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_name` | boolean | Optional | `true` (default) or `false` | பெயரைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ஐகானைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி மாற்ற நேரத்தைக் காட்டவும் |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி புதுப்பிப்பு நேரத்தைக் காட்டவும் |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் ஒரு attribute-ஐ அதன் `name`-க்குக் கீழே காட்டவும் |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | காட்ட வேண்டிய attribute (எ.கா. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | உள்ளடக்கம் அதன் கொள்கலனின் அளவை மீறும்போது உரை ஸ்க்ரோல் ஆக அனுமதிக்கவும் |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | பட்டன் கிளிக்கில் இயல்புநிலை செயல்களை மாற்ற அனுமதிக்கிறது. |
| `tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும் |
| `double_tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் இரட்டைக் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும் |
| `hold_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் அழுத்திப் பிடிக்கும்போது செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும் |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) பார்க்கவும் |
| `rows` | number | Optional | Any number | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |
| `sub_button` | object | Optional | See [துணை பட்டன்கள்](#துணை-பட்டன்கள்) | வலதுபுறம் நிலைநிறுத்தப்பட்ட தனிப்பயன் பட்டன்களைச் சேர்க்கவும் |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#styling">வடிவமைப்பு</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | பட்டனில் ஆதரிக்கப்படும் உறுப்புகளுக்கான முதன்மை பின்னணி நிறம் |
| `--bubble-button-border-radius` | `px` | பட்டனுக்கான border radius |
| `--bubble-button-icon-border-radius` | `px` | பட்டன் ஐகான் கொள்கலனுக்கான border radius |
| `--bubble-button-icon-background-color` | `color` | பட்டன் ஐகான் கொள்கலனுக்கான பின்னணி நிறம் |
| `--bubble-light-white-color` | `color` | light பட்டன்கள்/slider-களின் இயல்புநிலை வெள்ளை நிறத்தை மாற்றவும் |
| `--bubble-light-color` | `color` | light பட்டன்கள்/slider-களின் நிறத்தை மாற்றவும் (RGB விளக்குகளும் கூட) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | பட்டனுக்கான box shadow |

</details>

`button_type` `slider`-ஆக அமைக்கப்படும்போது மட்டுமே இந்த விருப்பங்கள் கிடைக்கும்.

<details>

<summary><b>Slider விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Slider-இன் குறைந்தபட்ச மதிப்பு. தனிப்பயன் slider-களுக்கு.                                                    |
| `max_value`             | number  | Optional                        | Slider-இன் அதிகபட்ச மதிப்பு. தனிப்பயன் slider-களுக்கு.                                                    |
| `step`                  | number  | Optional                        | Slider-இன் step மதிப்பு.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | அழுத்திப் பிடிப்பதற்குப் பதிலாக, தட்டி slider-ஐ செயல்படுத்தும் முந்தைய நடத்தையை இயக்கவும்.        |
| `relative_slide`        | boolean | Optional (`false` default )     | தொடக்கத் தொடு புள்ளிக்குப் பதிலாக, தொடக்க மதிப்புக்கு ஒப்பீடாக மதிப்பைப் புதுப்பிக்கவும்.                                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Slider-ஐ read-only ஆக்கவும். sensor போன்ற சில entity-களுக்கு தானாக இயக்கப்படும்.                                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | ஸ்லைடு செய்யும்போது entity நிலை புதுப்பிக்கப்படும். **இந்த அம்சம் அனைத்து entity-களுக்கும் பரிந்துரைக்கப்படவில்லை.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` அல்லது `bottom` | Slider-இன் நிரப்பு திசையை மாற்றவும். வரையறுக்கப்படாதபோது இடமிருந்து வலமாக, [வலமிருந்து இடமாக எழுதப்படும் மொழிகளில்](#உள்ளூராக்கம்) பிரதிபலிக்கும் |
| `slider_value_position` | string | Optional | `right`, `left`, `center` அல்லது `hidden` | மதிப்பு காட்சியின் நிலை. வரையறுக்கப்படாதபோது வலதுபுறம், மேலும் [வலமிருந்து இடமாக எழுதப்படும் மொழிகளில்](#உள்ளூராக்கம்) இடதுபுறம் |
| `invert_slider_value` | boolean | Optional (`false` default) | Slider திசையை மாற்றியமைக்கவும் (100% நிரப்புதல் குறைந்தபட்சத்திற்குச் சமம்). நிற slider-களுக்குக் கிடைக்காது. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **விளக்குகளுக்கு மட்டும்.** slider முறையைத் தேர்ந்தெடுக்கவும் |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **cover-களுக்கு மட்டும்.** slider முறையைத் தேர்ந்தெடுக்கவும் (position அல்லது tilt) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **விளக்குகளுக்கு மட்டும் (Hue முறை).** Hue-ஐ சரிசெய்யும்போது saturation-ஐ கட்டாயப்படுத்தவும் |
| `hue_force_saturation_value` | number | Optional (`100` default) | **விளக்குகளுக்கு மட்டும் (Hue முறை).** கட்டாயப்படுத்தப்பட்ட saturation மதிப்பு (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **விளக்குகளுக்கு மட்டும் (Brightness முறை).** ஒளியின் நிறத்திற்குப் பதிலாக theme accent நிறத்தைப் பயன்படுத்தவும் |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **விளக்குகளுக்கு மட்டும்.** Slider-ஐ 0%-ஐ அடைய அனுமதிக்கிறது, இது ஒளியை அணைக்கும். `tap_to_slide`-உடன் கிடைக்காது. |
| `light_transition`      | boolean | Optional (`false` default)      | **விளக்குகளுக்கு மட்டும்.** ஆதரிக்கப்படும் விளக்குகளுக்கு மென்மையான brightness மாற்றங்களை இயக்கவும்.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **விளக்குகளுக்கு மட்டும்.** மில்லிவினாடிகளில் மாற்ற நேரம். `light_transition: true` தேவை.            |

</details>

#### எடுத்துக்காட்டுகள்

<details>

<summary>ஒரு light-இன் brightness-ஐக் கட்டுப்படுத்தக்கூடிய slider பட்டன்</summary>

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

<summary>அதிக விருப்பங்களுடன் ஒரு பட்டன்</summary>

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

## மீடியா பிளேயர்

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

இந்தக் கார்டு ஒரு media player entity-யைக் கட்டுப்படுத்த அனுமதிக்கிறது.

### மீடியா பிளேயர் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | கட்டுப்படுத்த வேண்டிய media player |
| `name` | string | Optional | Any string | உங்கள் media player-க்கான பெயர், வரையறுக்கப்படவில்லை என்றால் entity பெயர் காட்டப்படும் |
| `icon` | string | Optional | Any `mdi:` icon | உங்கள் media player-க்கான ஐகான், வரையறுக்கப்படவில்லை என்றால் entity ஐகான் அல்லது `entity-picture` காட்டப்படும் |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture`-க்கு பதிலாக ஐகானுக்கு முன்னுரிமை கொடுக்கவும் |
| `show_state` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் நிலையைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_name` | boolean | Optional | `true` (default) or `false` | பெயரைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ஐகானைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி மாற்ற நேரத்தைக் காட்டவும் |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி புதுப்பிப்பு நேரத்தைக் காட்டவும் |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் ஒரு attribute-ஐ அதன் `name`-க்குக் கீழே காட்டவும் |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | காட்ட வேண்டிய attribute (எ.கா. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | உள்ளடக்கம் அதன் கொள்கலனின் அளவை மீறும்போது உரை ஸ்க்ரோல் ஆக அனுமதிக்கவும் |
| `min_volume` | number | Optional | Any number | ஒலியளவு slider-இன் குறைந்தபட்ச மதிப்பு. |
| `max_volume` | number | Optional | Any number | ஒலியளவு slider-இன் அதிகபட்ச மதிப்பு. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | கார்டு பின்னணியாக மங்கலான media cover ஒன்றைப் பயன்படுத்தவும். |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | பட்டன் கிளிக்கில் இயல்புநிலை செயல்களை மாற்ற அனுமதிக்கிறது. |
| `tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |
| `double_tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் இரட்டைக் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும். |
| `hold_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் அழுத்திப் பிடிக்கும்போது செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |
| `main_buttons_position` | string | Optional | `default` or `bottom` | cover செயல் பட்டன்களை கீழே (நிலையானதாக) நகர்த்தவும் |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | கீழ் செயல் பட்டன்களை முழு அகலமாக்கவும் (இயல்புநிலை: நிலை `bottom` ஆக இருக்கும்போது `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | முழு அகலம் இல்லாதபோது கீழ் செயல் பட்டன்களின் சீரமைப்பு |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) பார்க்கவும் |
| `rows` | number | Optional | Any number | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |
| `sub_button` | object | Optional | See [துணை பட்டன்கள்](#துணை-பட்டன்கள்) | வலதுபுறம் நிலைநிறுத்தப்பட்ட தனிப்பயன் பட்டன்களைச் சேர்க்கவும் |
| `hide` | object | Optional | See below | கார்டிலிருந்து பட்டன்களை மறைக்கவும் |

#### மறைக்கும் விருப்பங்கள்

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | play/pause பட்டனை மறைக்கவும் |
| `volume_button` | boolean | Optional | `true` or `false` (default) | ஒலியளவு பட்டனை மறைக்கவும் |
| `previous_button` | boolean | Optional | `true` or `false` (default) | முந்தைய பட்டனை மறைக்கவும் |
| `next_button` | boolean | Optional | `true` or `false` (default) | அடுத்த பட்டனை மறைக்கவும் |
| `power_button` | boolean | Optional | `true` or `false` (default) | power பட்டனை மறைக்கவும் |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#styling">வடிவமைப்பு</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | media player-க்கான முதன்மை பின்னணி நிறம் |
| `--bubble-media-player-border-radius` | `px` | media player-க்கான border radius |
| `--bubble-media-player-buttons-border-radius` | `px` | media player பட்டன்களுக்கான border radius |
| `--bubble-media-player-slider-background-color` | `color` | ஒலியளவு slider-க்கான பின்னணி நிறம் |
| `--bubble-media-player-icon-border-radius` | `px` | media player ஐகான் கொள்கலனுக்கான border radius |
| `--bubble-media-player-icon-background-color` | `color` | media player ஐகான் கொள்கலனுக்கான பின்னணி நிறம் |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | media player-க்கான box shadow |

</details>


#### எடுத்துக்காட்டுகள்

<details>

<summary>அனைத்து விருப்பங்களுடன் ஒரு media player</summary>

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

## மறைப்பு

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

இந்தக் கார்டு உங்கள் `cover` entity-களைக் கட்டுப்படுத்த அனுமதிக்கிறது.

### மறைப்பு விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | கட்டுப்படுத்த வேண்டிய cover |
| `name` | string | Optional | Any string | உங்கள் cover-க்கான பெயர், வரையறுக்கப்படவில்லை என்றால் entity பெயர் காட்டப்படும் |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture`-க்கு பதிலாக ஐகானுக்கு முன்னுரிமை கொடுக்கவும் |
| `show_state` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் நிலையைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_name` | boolean | Optional | `true` (default) or `false` | பெயரைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ஐகானைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி மாற்ற நேரத்தைக் காட்டவும் |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி புதுப்பிப்பு நேரத்தைக் காட்டவும் |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் ஒரு attribute-ஐ அதன் `name`-க்குக் கீழே காட்டவும் |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | காட்ட வேண்டிய attribute (எ.கா. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | உள்ளடக்கம் அதன் கொள்கலனின் அளவை மீறும்போது உரை ஸ்க்ரோல் ஆக அனுமதிக்கவும் |
| `icon_open` | string | Optional | Any `mdi:` icon | உங்கள் திறந்த cover-க்கான ஐகான், வரையறுக்கப்படவில்லை என்றால் இயல்புநிலை திறந்த cover ஐகான் காட்டப்படும் |
| `icon_close` | string | Optional | Any `mdi:` icon | உங்கள் மூடிய cover-க்கான ஐகான், வரையறுக்கப்படவில்லை என்றால் இயல்புநிலை மூடிய cover ஐகான் காட்டப்படும் |
| `icon_up` | string | Optional | Any `mdi:` icon | உங்கள் cover திறக்கும் பட்டனுக்கான ஐகான், வரையறுக்கப்படவில்லை என்றால் இயல்புநிலை திறந்த cover ஐகான் காட்டப்படும் |
| `icon_down` | string | Optional | Any `mdi:` icon | உங்கள் cover மூடும் பட்டனுக்கான ஐகான், வரையறுக்கப்படவில்லை என்றால் இயல்புநிலை மூடிய cover ஐகான் காட்டப்படும் |
| `open_service` | string | Optional | Any service or script | உங்கள் cover-ஐ திறக்க ஒரு service, இயல்புநிலையாக `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | உங்கள் cover-ஐ நிறுத்த ஒரு service, இயல்புநிலையாக `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | உங்கள் cover-ஐ மூட ஒரு service, இயல்புநிலையாக `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | tilt கட்டுப்பாட்டு பட்டன்களின் நிலை (cover tilt-ஐ ஆதரிக்கும் போது மட்டுமே காட்டப்படும்) |
| `open_tilt_service` | string | Optional | Any service or script | tilt-ஐ திறக்க ஒரு service, இயல்புநிலையாக `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | tilt-ஐ மூட ஒரு service, இயல்புநிலையாக `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | பட்டன் கிளிக்கில் இயல்புநிலை செயல்களை மாற்ற அனுமதிக்கிறது. |
| `tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |
| `double_tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் இரட்டைக் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும். |
| `hold_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் அழுத்திப் பிடிக்கும்போது செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |
| `main_buttons_position` | string | Optional | `default` or `bottom` | media கட்டுப்பாடுகளை கீழே (நிலையானதாக) நகர்த்தவும் |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | கீழ் கட்டுப்பாடுகளை முழு அகலமாக்கவும் (இயல்புநிலை: நிலை `bottom` ஆக இருக்கும்போது `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | முழு அகலம் இல்லாதபோது கீழ் கட்டுப்பாடுகளின் சீரமைப்பு |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) பார்க்கவும் |
| `rows` | number | Optional | Any number | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |
| `sub_button` | object | Optional | See [துணை பட்டன்கள்](#துணை-பட்டன்கள்) | வலதுபுறம் நிலைநிறுத்தப்பட்ட தனிப்பயன் பட்டன்களைச் சேர்க்கவும் |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#styling">வடிவமைப்பு</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | cover கார்டில் ஆதரிக்கப்படும் உறுப்புகளுக்கான முதன்மை பின்னணி நிறம் |
| `--bubble-cover-border-radius` | `px` | cover கார்டுக்கான border radius |
| `--bubble-cover-icon-border-radius` | `px` | cover கார்டு ஐகான் கொள்கலனுக்கான border radius |
| `--bubble-cover-icon-background-color` | `color` | cover கார்டு ஐகான் கொள்கலனுக்கான பின்னணி நிறம் |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | cover கார்டுக்கான box shadow |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | cover கார்டில் உள்ள பட்டன்களுக்கான box shadow |

</details>


#### எடுத்துக்காட்டு

<details>

<summary>ஒரு roller shade-ஐக் கட்டுப்படுத்தக்கூடிய கார்டு</summary>

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

## தேர்வு

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

இந்தக் கார்டு உங்கள் `input_select` / `select` entity-களுக்கு ஒரு dropdown மெனுவைச் சேர்க்க அனுமதிக்கிறது. இந்தக் கார்டு துணை பட்டன்களையும், Bubble Card-இன் அனைத்து பொதுவான அம்சங்களையும் ஆதரிக்கிறது.

> [!TIP]
> நீங்கள் விரும்பினால் select துணை பட்டன்களையும் வைத்திருக்கலாம், இந்த அம்சம் துணை பட்டன்களை ஆதரிக்கும் அனைத்து கார்டுகளிலும் கிடைக்கிறது.

### தேர்வு விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | கட்டுப்படுத்த வேண்டிய entity |
| `name` | string | Optional | Any string | உங்கள் select-க்கான பெயர், வரையறுக்கப்படவில்லை என்றால் entity பெயர் காட்டப்படும் |
| `icon` | string | Optional | Any `mdi:` icon | உங்கள் select-க்கான ஐகான், வரையறுக்கப்படவில்லை என்றால் entity ஐகான் அல்லது `entity-picture` காட்டப்படும் |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture`-க்கு பதிலாக ஐகானுக்கு முன்னுரிமை கொடுக்கவும் |
| `show_state` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் நிலையைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_name` | boolean | Optional | `true` (default) or `false` | பெயரைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ஐகானைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி மாற்ற நேரத்தைக் காட்டவும் |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் கடைசி புதுப்பிப்பு நேரத்தைக் காட்டவும் |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | உங்கள் `entity`-யின் ஒரு attribute-ஐ அதன் `name`-க்குக் கீழே காட்டவும் |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | காட்ட வேண்டிய attribute (எ.கா. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | உள்ளடக்கம் அதன் கொள்கலனின் அளவை மீறும்போது உரை ஸ்க்ரோல் ஆக அனுமதிக்கவும் |
| `tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |
| `double_tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் இரட்டைக் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும். |
| `hold_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் அழுத்திப் பிடிக்கும்போது செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) பார்க்கவும் |
| `rows` | number | Optional | Any number | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |
| `sub_button` | object | Optional | See [துணை பட்டன்கள்](#துணை-பட்டன்கள்) | வலதுபுறம் நிலைநிறுத்தப்பட்ட தனிப்பயன் பட்டன்களைச் சேர்க்கவும் |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#styling">வடிவமைப்பு</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | select கார்டில் ஆதரிக்கப்படும் உறுப்புகளுக்கான முதன்மை பின்னணி நிறம் |
| `--bubble-select-background-color` | `color` | select கார்டுக்கான பின்னணி நிறம் |
| `--bubble-select-list-border-radius` | `px` | கார்டில் உள்ள dropdown மெனுவுக்கான border radius |
| `--bubble-select-list-item-accent-color` | `color` | தேர்ந்தெடுக்கப்பட்ட உருப்படிக்கான accent நிறம் |
| `--bubble-select-list-background-color` | `color` | கார்டில் உள்ள dropdown மெனுவுக்கான பின்னணி நிறம் |
| `--bubble-select-list-width` | `px` | கார்டில் உள்ள dropdown மெனுவின் அகலம் |
| `--bubble-select-arrow-background-color` | `color` | dropdown அம்புக்குறிக்கான பின்னணி நிறம் |
| `--bubble-select-button-border-radius` | `px` | select பட்டனுக்கான border radius |
| `--bubble-select-border-radius` | `px` | select கார்டுக்கான border radius |
| `--bubble-select-icon-border-radius` | `px` | select கார்டு ஐகான் கொள்கலனுக்கான border radius |
| `--bubble-select-icon-background-color` | `color` | select கார்டு ஐகான் கொள்கலனுக்கான பின்னணி நிறம் |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | select கார்டுக்கான box shadow |

</details>


#### எடுத்துக்காட்டுகள்

<details>

<summary>காட்சிகளின் பட்டியலுடன் ஒரு select கார்டு</summary>

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

## காலநிலை

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

இந்தக் கார்டு உங்கள் `climate` entity-களைக் கட்டுப்படுத்த அனுமதிக்கிறது.

> [!TIP]
> முறை தேர்வு மெனு என்பது கார்டை உருவாக்கும்போது தானாக சேர்க்கப்படும் ஒரு [துணை பட்டன்](#துணை-பட்டன்கள்). நீங்கள் விரும்பியபடி பின்னர் அதை மாற்றலாம் அல்லது நீக்கலாம்.

### காலநிலை விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | கட்டுப்படுத்த வேண்டிய entity (எ.கா., `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | கார்டுக்கான தனிப்பயன் பெயர். வரையறுக்கப்படவில்லை என்றால், entity பெயர் காட்டப்படும்.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | கார்டுக்கான தனிப்பயன் ஐகான். வரையறுக்கப்படவில்லை என்றால், entity ஐகான் அல்லது `entity-picture` பயன்படுத்தப்படும்.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | `entity-picture`-க்கு பதிலாக ஐகானுக்கு முன்னுரிமை அளிக்கிறது.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | `entity`-யின் தற்போதைய நிலையைக் காட்டவும் அல்லது மறைக்கவும்.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | entity-யின் பெயரைக் காட்டவும் அல்லது மறைக்கவும்.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | ஐகானைக் காட்டவும் அல்லது மறைக்கவும்.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | `entity` ஆதரித்தால், குறைந்த இலக்கு வெப்பநிலை கட்டுப்பாட்டை மறைக்கிறது.                                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | `entity` ஆதரித்தால், அதிக இலக்கு வெப்பநிலை கட்டுப்பாட்டை மறைக்கிறது.                                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | climate entity ON ஆக இருக்கும்போது ஒரு நிலையான பின்னணி நிறத்தைப் பயன்படுத்துகிறது.                                                              |
| `step` | number | Optional | Any number | வெப்பநிலை step. |
| `min_temp` | number | Optional | Any number | குறைந்தபட்ச வெப்பநிலை. |
| `max_temp` | number | Optional | Any number | அதிகபட்ச வெப்பநிலை. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | பட்டன் கிளிக்கில் இயல்புநிலை செயல்களை மாற்ற அனுமதிக்கிறது. |
| `tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |
| `double_tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் இரட்டைக் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும். |
| `hold_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | ஐகான் அழுத்திப் பிடிக்கும்போது செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `more-info` பயன்படுத்தப்படும். |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | காலநிலை செயல் பட்டன்களை கீழே (நிலையானதாக) நகர்த்தவும் |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | கீழ் செயல் பட்டன்களை முழு அகலமாக்கவும் (இயல்புநிலை: நிலை `bottom` ஆக இருக்கும்போது `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | முழு அகலம் இல்லாதபோது கீழ் செயல் பட்டன்களின் சீரமைப்பு |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) பார்க்கவும் |
| `rows` | number | Optional | Any number | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |
| `sub_button`            | object  | Optional                            | See [துணை பட்டன்கள்](#துணை-பட்டன்கள்)                | வலதுபுறம் நிலைநிறுத்தப்பட்ட தனிப்பயன் பட்டன்களைச் சேர்க்கிறது. காலநிலை முறை தேர்வு மெனுவுக்குப் பயனுள்ளது.                                  |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#styling">வடிவமைப்பு</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | காலநிலை கார்டில் ஆதரிக்கப்படும் உறுப்புகளுக்கான முதன்மை பின்னணி நிறம் |
| `--bubble-climate-border-radius` | `px` | காலநிலை கார்டு உறுப்புகளில் ஆதரிக்கப்படும் உறுப்புகளுக்கான border radius |
| `--bubble-climate-button-background-color` | `color` | காலநிலை கார்டு பட்டன்களுக்கான பின்னணி நிறம் |
| `--bubble-climate-icon-border-radius` | `px` | காலநிலை கார்டு ஐகான் கொள்கலனுக்கான border radius |
| `--bubble-state-climate-fan-only-color` | `color` | fan-only நிலைக்கான overlay நிறம் |
| `--bubble-state-climate-dry-color` | `color` | dry நிலைக்கான overlay நிறம் |
| `--bubble-state-climate-cool-color` | `color` | cool நிலைக்கான overlay நிறம் |
| `--bubble-state-climate-heat-color` | `color` | heat நிலைக்கான overlay நிறம் |
| `--bubble-state-climate-auto-color` | `color` | auto நிலைக்கான overlay நிறம் |
| `--bubble-state-climate-heat-cool-color` | `color` | heat-cool நிலைக்கான overlay நிறம் |
| `--bubble-climate-accent-color` | `color` | காலநிலை கார்டுக்கான accent நிறம் |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | காலநிலை கொள்கலனுக்கான box shadow. |

</details>


#### எடுத்துக்காட்டுகள்

<details>

<summary>HVAC முறைகள் dropdown மெனுவுடன் ஒரு காலநிலை கார்டு</summary>

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

## காலெண்டர்

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

இந்தக் கார்டு உங்கள் காலெண்டர் entity-களைக் காட்ட அனுமதிக்கிறது. அதன் உள்ளடக்கம் ஸ்க்ரோல் செய்யக்கூடியது, எனவே வரவிருக்கும் நிகழ்வுகளை நீங்கள் எளிதாக உலாவலாம்.

### காலெண்டர் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | இப்போது முதல் N-ஆவது நாளின் முடிவு வரை, நிகழ்வுகளைப் பெற வேண்டிய காலெண்டர் நாட்களின் எண்ணிக்கை (இயல்புநிலை: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | கட்டுப்படுத்த வேண்டிய entity (எ.கா., `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | காட்ட வேண்டிய காலெண்டர் entity                                                          |
| `entities.color`    | string  | Optional     | A color                                         | காலெண்டர் chip-க்கான தனிப்பயன் நிறம். வரையறுக்கப்படவில்லை என்றால், தானியங்கி நிறம் தேர்ந்தெடுக்கப்படும் |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | இப்போது முதல் N-ஆவது நாளின் முடிவு வரை, நிகழ்வுகளைப் பெற வேண்டிய காலெண்டர் நாட்களின் எண்ணிக்கை (இயல்புநிலை: 7) |
| `limit`             | number  | Optional     | A number                                        | கார்டில் காட்டப்படும் நிகழ்வுகளின் எண்ணிக்கை                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | நிகழ்வுகளுக்கான முடிவு நேரத்தைக் காட்டவும் அல்லது மறைக்கவும்                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | நிகழ்வு முன்னேற்ற பட்டையைக் காட்டவும் அல்லது மறைக்கவும்                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | தற்போது நடைபெற்றுக் கொண்டிருக்கும் நிகழ்வுகளைக் காட்டவும் அல்லது மறைக்கவும். பல நாள் நிகழ்வுகள் ஒரு நாளுக்கு ஒன்றாக மதிப்பிடப்படுகின்றன, எனவே நடப்பு நாள் மட்டுமே மறைக்கப்படும், வரவிருக்கும் நாட்கள் தெரிந்தபடி இருக்கும் |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | உள்ளடக்கம் அதன் கொள்கலனின் அளவை மீறும்போது உரை ஸ்க்ரோல் ஆக அனுமதிக்கவும் |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | நிகழ்வு கிளிக்கில் செயல்களைச் சேர்க்க அனுமதிக்கிறது. |
| `tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | நாள் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும். |
| `double_tap_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | நாள் இரட்டைக் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும். |
| `hold_action` | object | Optional | See [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | நாள் அழுத்திப் பிடிக்கும்போது செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படாவிட்டால், `none` பயன்படுத்தப்படும். |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) பார்க்கவும் |
| `rows` | number | Optional | Any number | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |
| `sub_button` | object | Optional | See [துணை பட்டன்கள்](#துணை-பட்டன்கள்) | வலதுபுறம் நிலைநிறுத்தப்பட்ட தனிப்பயன் பட்டன்களைச் சேர்க்கவும் |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#styling">வடிவமைப்பு</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | காலெண்டர் கார்டில் ஆதரிக்கப்படும் உறுப்புகளுக்கான முதன்மை பின்னணி நிறம்  |
| `--bubble-calendar-border-radius`         | `px`           | காலெண்டர் கார்டு உறுப்புகளில் ஆதரிக்கப்படும் உறுப்புகளுக்கான border radius |
| `--bubble-calendar-height`                | `px`           | காலெண்டர் கார்டுக்கான உயரம்                                        |

</details>

#### எடுத்துக்காட்டுகள்

<details>

<summary>வரையறுக்கப்பட்ட எண்ணிக்கையிலான நிகழ்வுகளுடன் ஒரு காலெண்டர் கார்டு</summary>

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

<summary>முடிவு நேரம் மற்றும் முன்னேற்ற பட்டையுடன் ஒரு காலெண்டர் கார்டு</summary>

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


## பிரிப்பான்

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

இந்த கார்டு உங்கள் பாப்-அப்பை வகைகள் / பிரிவுகளாகப் பிரிப்பதற்கான ஒரு எளிய பிரிப்பான். எடுத்துக்காட்டாக: Lights, Devices, Covers, Settings, Automations...

### பிரிப்பான் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| பெயர் | வகை | தேவைநிலை | ஆதரிக்கப்படும் விருப்பங்கள் | விளக்கம் |
| --- | --- | --- | --- | --- |
| `name` | string | விருப்பத்தேர்வு ஆனால் பரிந்துரைக்கப்படுகிறது | ஏதேனும் string | உங்கள் பிரிப்பானுக்கான பெயர் |
| `icon` | string | விருப்பத்தேர்வு ஆனால் பரிந்துரைக்கப்படுகிறது | ஏதேனும் `mdi:` ஐகான் | உங்கள் பிரிப்பானுக்கான ஐகான் |
| `card_layout` | string | விருப்பத்தேர்வு | `normal` (section view இல் இல்லையெனில் இயல்புநிலை), `large` (section view இல் இருந்தால் இயல்புநிலை), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, பார்க்க [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) |
| `rows` | number | விருப்பத்தேர்வு | ஏதேனும் எண் | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |
| `sub_button` | object | விருப்பத்தேர்வு | பார்க்க [துணை பட்டன்கள்](#துணை-பட்டன்கள்) | வலப்புறம் நிலைநிறுத்தப்பட்ட தனிப்பயன் பட்டன்களைச் சேர்க்கவும் |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#வடிவமைப்பு">வடிவமைப்பு</a>)</b></summary>

| மாறி | எதிர்பார்க்கப்படும் மதிப்பு | விளக்கம் |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | பிரிப்பானில் உள்ள கோட்டிற்கான பின்னணி நிறம் |

</details>

#### எடுத்துக்காட்டு

<details>

<summary>ஒரு "Covers" பிரிவுக்கான பிரிப்பான்/வகுப்பான்</summary>

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

## வெற்று நெடுவரிசை

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

இந்த கார்டு ஒரு வெற்று நெடுவரிசையை நிரப்புவதற்காக உள்ளது. உங்கள் பாப்-அப்பில் ஒரே ஒரு கார்டு மட்டும் கொண்ட `horizontal-stack` இருந்தால் இது பயனுள்ளதாக இருக்கும். இந்த ஸ்கிரீன்ஷாட்டின் கீழ்வலது மூலையைப் பார்த்து அதை (பார்க்க முடியாமல்) கவனியுங்கள்.

### வெற்று நெடுவரிசை விருப்பங்கள்

இந்த கார்டிற்கு எந்த விருப்பங்களும் இல்லை, மேலும் இது [வடிவமைப்பை](#வடிவமைப்பு) ஆதரிக்காது, ஆனாலும் HA sections-க்கான தளவமைப்பு விருப்பங்களை ஆதரிக்கிறது.

#### எடுத்துக்காட்டு

<details>

<summary>ஒரு கிடைமட்ட அடுக்கில் வெற்று நெடுவரிசை</summary>

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

## துணை பட்டன்கள் மட்டும்

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

இந்த கார்டு துணை பட்டன்களுக்காக மட்டுமே அர்ப்பணிக்கப்பட்டுள்ளது. இது மெனுக்கள், விரைவு செயல்கள், தகவல் சிப்கள் அல்லது பக்கத்தின் அடிப்பகுதியில் நிலைநிறுத்தப்பட்ட footer ஒன்றுக்கு மிகவும் ஏற்றது.

> [!IMPORTANT]  
> இந்த கார்டு புதிய sub-buttons schema ஐப் பயன்படுத்துகிறது. உங்கள் பட்டன்களை வரையறுக்க `sub_button.bottom` ஐப் பயன்படுத்தவும். `sub_button.main` பிரிவு புறக்கணிக்கப்படும்.

### துணை பட்டன்கள் மட்டும் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கங்கள்)</b></summary>

| பெயர் | வகை | தேவைநிலை | ஆதரிக்கப்படும் விருப்பங்கள் | விளக்கம் |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **தேவை** | பார்க்க [துணை பட்டன்கள்](#துணை-பட்டன்கள்) | `bottom` பிரிவைப் பயன்படுத்தி உங்கள் துணை பட்டன்களை வரையறுக்கவும் |
| `hide_main_background` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | கார்டு பின்னணியை நீக்கவும் |
| `footer_mode` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | கார்டை பக்கத்தின் அடிப்பகுதியில் நிலைநிறுத்தவும் |
| `footer_full_width` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | footer ஐ முழு அகலமாக்கவும் (100%) |
| `footer_width` | number | விருப்பத்தேர்வு | ஏதேனும் எண் | `footer_full_width` `false` ஆக இருக்கும்போது footer அகலம் பிக்சல்களில் |
| `footer_bottom_offset` | number | விருப்பத்தேர்வு | ஏதேனும் எண் | பக்கத்தின் அடிப்பகுதியிலிருந்து தூரம் பிக்சல்களில் (இயல்புநிலை: `16`) |
| `card_layout` | string | விருப்பத்தேர்வு | `normal` (section view இல் இல்லையெனில் இயல்புநிலை), `large` (section view இல் இருந்தால் இயல்புநிலை), `large-2-rows`, `large-sub-buttons-grid` | கார்டின் வடிவமைப்பு தளவமைப்பு, பார்க்க [கார்டு தளவமைப்புகள்](#கார்டு-தளவமைப்புகள்) |
| `rows` | number | விருப்பத்தேர்வு | ஏதேனும் எண் | வரிசைகளின் எண்ணிக்கை (உயரம்) (எ.கா. `2`) |

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#வடிவமைப்பு">வடிவமைப்பு</a>)</b></summary>

| மாறி | எதிர்பார்க்கப்படும் மதிப்பு | விளக்கம் |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width` `false` ஆக இருக்கும்போது footer அகலம் |
| `--bubble-footer-bottom` | `px` | footer இன் அடிப்பகுதி offset |
| `--bubble-footer-box-shadow` | பார்க்க [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | footer கொள்கலனுக்கான box shadow |

</details>

#### எடுத்துக்காட்டுகள்

<details>

<summary>சிப்கள் போல (ஸ்கிரீன்ஷாட்டில் உள்ளது போல)</summary>

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

<summary>நிலைநிறுத்தப்பட்ட footer மெனு</summary>

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

## துணை பட்டன்கள்

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

அந்த விருப்பத்தை ஆதரிக்கும் ஒவ்வொரு கார்டிலும், உங்கள் கார்டுகளை இன்னும் அதிகமாகத் தனிப்பயனாக்க துணை பட்டன்களைச் சேர்க்கலாம். எடுத்துக்காட்டாக, ஒரு vacuum ஐக் கட்டுப்படுத்தும், ஒரு weather கார்டைக் காட்டும் அல்லது நீங்கள் நினைக்கக்கூடிய கிட்டத்தட்ட எதையும் செய்யும் ஒரு பட்டனை உருவாக்கலாம். இந்த துணை பட்டன்கள் tap actions ஐயும், பெரும்பாலான பட்டன் விருப்பங்களையும் ஆதரிக்கின்றன.

துணை பட்டன்கள் இப்போது மூன்று வகைகளை ஆதரிக்கின்றன: **இயல்புநிலை (பட்டன்)**, **ஸ்லைடர்**, மற்றும் **டிராப்டவுன் / தேர்வு**. அதே கார்டில் வகைகளைக் கலக்கலாம், துணை பட்டன்களை மேலே அல்லது கீழே வைக்கலாம், மேலும் மேம்பட்ட தளவமைப்புகளுக்காக அவற்றை குழுக்களாக ஒழுங்கமைக்கலாம்.

#### துணை பட்டன் இடம் மற்றும் குழுக்கள்

<details>

<summary><b>துணை பட்டன் அமைப்பு (main / bottom + குழுக்கள்)</b></summary>

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

**குறிப்புகள்:**
- `main` மற்றும் `bottom` இரண்டு தனித்தனி பிரிவுகள். Bottom துணை பட்டன்கள் கார்டின் அடிப்பகுதியில் நிலைநிறுத்தப்படுகின்றன.
- `main_layout` மற்றும் `bottom_layout` `inline` (இயல்புநிலை) அல்லது குழுக்களை செங்குத்தாக அடுக்க `rows` ஐ ஏற்கின்றன.
- குழுக்கள் என்பது ஒரு `group` array உடன் விருப்பமான `buttons_layout` (`inline` அல்லது `column`) கொண்ட பொருள்கள்.
- `justify_content` **bottom குழுக்களுக்கு மட்டும்** கிடைக்கிறது (`start`, `center`, `end`, `fill`).
- Bottom துணை பட்டன்கள் இருக்கும்போது, நீங்கள் வேறு தளவமைப்பை வெளிப்படையாக அமைக்காவிட்டால், கார்டு தளவமைப்பு தானாக `large` க்கு மாறும்.
- பழைய `sub_button` arrays இன்னும் ஆதரிக்கப்படுகின்றன, மேலும் அவை `main` பிரிவாகக் கருதப்படுகின்றன.

</details>

### துணை பட்டன் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கம்)</b></summary>

| பெயர் | வகை | தேவைநிலை | ஆதரிக்கப்படும் விருப்பங்கள் | விளக்கம் |
| --- | --- | --- | --- | --- |
| `entity` | string | விருப்பத்தேர்வு | ஏதேனும் entity | கட்டுப்படுத்த வேண்டிய entity |
| `name` | string | விருப்பத்தேர்வு | ஏதேனும் string | உங்கள் துணை பட்டனுக்கான பெயர், வரையறுக்கப்படவில்லை எனில் entity பெயரைக் காண்பிக்கும் |
| `icon` | string | விருப்பத்தேர்வு | ஏதேனும் `mdi:` ஐகான் | உங்கள் துணை பட்டனுக்கான ஐகான், வரையறுக்கப்படவில்லை எனில் entity ஐகான் அல்லது entity படத்தைக் காண்பிக்கும் |
| `force_icon` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | entity படம் கிடைத்தாலும் ஐகானை வலுக்கட்டாயமாகக் காட்டவும் |
| `sub_button_type` | string | விருப்பத்தேர்வு | `default`, `slider` அல்லது `select` | துணை பட்டன் வகையைத் தேர்ந்தெடுக்கவும் |
| `show_background` | boolean | விருப்பத்தேர்வு | `true` (இயல்புநிலை) அல்லது `false` | உங்கள் துணை பட்டனுக்கு பின்னணியைக் காட்டவும், இது உங்கள் entity நிலையின் அடிப்படையில் அதன் நிறத்தை மாற்றும் |
| `state_background` | boolean | விருப்பத்தேர்வு | `true` (இயல்புநிலை) அல்லது `false` | entity `on` ஆக இருக்கும்போது நிலை நிறத்தைப் பயன்படுத்தவும் |
| `light_background` | boolean | விருப்பத்தேர்வு | `true` (இயல்புநிலை) அல்லது `false` | கிடைக்கும்போது பின்னணிக்கு light நிறத்தைப் பயன்படுத்தவும் |
| `show_state` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | உங்கள் `entity` இன் நிலையைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_name` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | பெயரைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_icon` | boolean | விருப்பத்தேர்வு | `true` (இயல்புநிலை) அல்லது `false` | ஐகானைக் காட்டவும் அல்லது மறைக்கவும் |
| `show_last_changed` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | உங்கள் `entity` இன் கடைசியாக மாற்றப்பட்ட நேரத்தைக் காட்டவும் |
| `show_last_updated` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | உங்கள் `entity` இன் கடைசியாக புதுப்பிக்கப்பட்ட நேரத்தைக் காட்டவும் |
| `show_attribute` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | உங்கள் `entity` இன் ஒரு attribute ஐ அதன் `name` க்குக் கீழே காட்டவும் |
| `attribute` | string | விருப்பத்தேர்வு (`show_attribute` `true` எனில் தேவை) | உங்கள் `entity` இலிருந்து ஒரு attribute | காட்ட வேண்டிய attribute (எ.கா. `brightness`) |
| `select_attribute` | string | விருப்பத்தேர்வு | உங்கள் `entity` இலிருந்து ஒரு attribute பட்டியல் (மேலே உள்ள ஆதரிக்கப்படும் விருப்பங்களைப் பார்க்கவும்) | இந்த attribute பட்டியல், கிளிக் செய்யப்பட்டால் ஒரு டிராப்டவுனைத் திறக்கும் (எ.கா. `effect_list`) |
| `show_arrow` | boolean | விருப்பத்தேர்வு | `true` (இயல்புநிலை) அல்லது `false` | select துணை பட்டன்களுக்கான டிராப்டவுன் அம்புக்குறியைக் காட்டவும் அல்லது மறைக்கவும் |
| `scrolling_effect` | boolean | விருப்பத்தேர்வு | `true` (இயல்புநிலை) அல்லது `false` | உள்ளடக்கம் கொள்கலனின் அளவை மீறும்போது உரையை உருள அனுமதிக்கவும் |
| `tap_action` | object | விருப்பத்தேர்வு | பார்க்க [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | துணை பட்டன் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படவில்லை எனில் `more-info` பயன்படுத்தப்படும். |
| `double_tap_action` | object | விருப்பத்தேர்வு | பார்க்க [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | துணை பட்டன் இரட்டைக் கிளிக்கில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படவில்லை எனில் `none` பயன்படுத்தப்படும். |
| `hold_action` | object | விருப்பத்தேர்வு | பார்க்க [செயல்கள்](#தட்டு-இரட்டைத்-தட்டு-மற்றும்-அழுத்திப்-பிடி-செயல்கள்) | துணை பட்டன் அழுத்திப் பிடிப்பதில் செயலின் வகையை வரையறுக்கவும், வரையறுக்கப்படவில்லை எனில் `more-info` பயன்படுத்தப்படும். |
| `fill_width` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` | கிடைக்கும் அகலத்தை நிரப்பவும் (இயல்புநிலை: main க்கு `false`, bottom க்கு `true`) |
| `width` | number அல்லது string | விருப்பத்தேர்வு | ஏதேனும் எண் அல்லது CSS length | தனிப்பயன் அகலம் (main பிரிவுக்கு `px`, இயல்பாக bottom பிரிவுக்கு `%`) |
| `custom_height` | number | விருப்பத்தேர்வு | ஏதேனும் எண் | பிக்சல்களில் தனிப்பயன் உயரம் |
| `content_layout` | string | விருப்பத்தேர்வு | `icon-left` (இயல்புநிலை), `icon-top`, `icon-bottom`, `icon-right` | துணை பட்டனுக்குள் ஐகான் இடம் |
| `always_visible` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | **ஸ்லைடர் மட்டும்.** தட்டும்போது திறப்பதற்குப் பதிலாக எப்போதும் ஸ்லைடரைக் காட்டவும் |
| `show_button_info` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | **ஸ்லைடர் மட்டும்.** `always_visible` இயக்கப்பட்டிருக்கும்போது ஐகான்/பெயர்/நிலையைக் காட்டவும் |
| `visibility` | object அல்லது list | விருப்பத்தேர்வு | பார்க்க [நிபந்தனைகள்](#நிபந்தனைகள்) | நிபந்தனைகளின் அடிப்படையில் துணை பட்டனைக் காட்டவும் அல்லது மறைக்கவும் |
| `hide_when_parent_unavailable` | boolean | விருப்பத்தேர்வு | `true` அல்லது `false` (இயல்புநிலை) | பெற்றோர் கார்டு entity கிடைக்கவில்லை எனில் துணை பட்டனை மறைக்கவும் |
| `css_class` | string | விருப்பத்தேர்வு | எந்த சரமும் | துணை பட்டனில் ஒரு கூடுதல் CSS கிளாஸ், அதன் பெயர் எதுவாக இருந்தாலும் உங்கள் [வடிவமைப்பில்](#வடிவமைப்பு) அதை இலக்கு வைக்க (எடுத்துக்காட்டாக `My value` என்பது `.my-value` ஆகும்) |

</details>

<details>

<summary><b>ஸ்லைடர் துணை பட்டன் விருப்பங்கள் (பட்டன் ஸ்லைடர்களைப் போலவே)</b></summary>

<br>

ஸ்லைடர் துணை பட்டன்கள் பட்டன் ஸ்லைடர்களைப் போலவே அதே ஸ்லைடர் விருப்பங்களை ஆதரிக்கின்றன, இதில் அடங்கும்:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS மாறிகள் (பார்க்க <a href="#வடிவமைப்பு">வடிவமைப்பு</a>)</b></summary>

| மாறி | எதிர்பார்க்கப்படும் மதிப்பு | விளக்கம் |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | துணை பட்டன்களுக்கான border radius |
| `--bubble-sub-button-background-color` | `color` | துணை பட்டன்களுக்கான பின்னணி நிறம் |
| `--bubble-sub-button-outline` | `box-shadow` | ஒரு துணை பட்டன் அல்லது ஸ்லைடர் அதன் பின்னால் உள்ள கார்டின் அதே நிறத்தில் வரையப்படும்போது மட்டும் சேர்க்கப்படும் வெளிக்கோடு, இல்லையெனில் அது கண்ணுக்குத் தெரியாமல் போகும் (அகற்ற `none` என அமைக்கவும்) |
| `--bubble-sub-slider-border-radius` | `px` | ஸ்லைடர் துணை பட்டன்களுக்கான border radius |
| `--bubble-sub-slider-background-color` | `color` | ஸ்லைடர் துணை பட்டன்களுக்கான பின்னணி நிறம் |
| `--bubble-sub-slider-height` | `px` | எப்போதும்-தெரியும் ஸ்லைடர் துணை பட்டன்களுக்கான உயரம் |
| `--bubble-sub-slider-outline` | `box-shadow` | ஸ்லைடர் துணை பட்டன்களுக்கு மட்டும் வெளிக்கோடு, `--bubble-sub-button-outline` க்குத் திரும்பும் |
| `--bubble-sub-button-dark-text-color` | `color` | பிரகாசமான துணை பட்டன் பின்னணிகளில் உரை நிறம் |

</details>

#### எடுத்துக்காட்டுகள்

<details>

<summary>vacuum கார்டு ஒன்றை உருவாக்க சில துணை பட்டன்களுடன் கூடிய ஒரு பட்டன் (ஸ்கிரீன்ஷாட்டில் உள்ளது போல)</summary>

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

<summary>brightness ஐக் காட்டும் ஒரு துணை பட்டன் மற்றும் லைட்டை நிலைமாற்றும் ஒரு துணை பட்டனுடன் கூடிய பட்டன் ஸ்லைடர் (ஸ்கிரீன்ஷாட்டில் உள்ளது போல)</summary>

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

<summary>இன்று மற்றும் நாளைக்கான வானிலையுடன் உள் மற்றும் வெளி வெப்பநிலையைக் காட்டும் ஒரு பட்டன் (ஸ்கிரீன்ஷாட் இணைக்கப்பட்டுள்ளது)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> என் துரதிர்ஷ்டவசமாக எப்போதும் மேகமூட்டமாகவே இருக்கிறது, ஆனால் அனைத்து ஐகான்களும் வானிலையின் அடிப்படையில் மாறுகின்றன.

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

## கார்டு தளவமைப்புகள்

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card Home Assistant section view ஐ முழுமையாக ஆதரிக்கிறது, கார்டை பெரிதாக்க கார்டு தளவமைப்பை மாற்றலாம், மேலும் உங்கள் section view இல் கார்டு எடுத்துக்கொள்ள வேண்டிய நெடுவரிசைகள் அல்லது வரிசைகளின் எண்ணிக்கையையும் மாற்றலாம் (அந்த விருப்பத்தை ஆதரிக்கும் கார்டுகளில் மட்டும்). இந்த தளவமைப்புகள் மற்ற அனைத்து view வகைகளிலும் ஆதரிக்கப்படுகின்றன.

<details>

<summary><b>கிடைக்கக்கூடிய கார்டு தளவமைப்புகள்</b></summary>

| தளவமைப்பு | விளக்கம் |
| --- | --- |
| `normal` | வழக்கமான தளவமைப்பு (section view க்கு உகந்ததாக இல்லை) |
| `large` | section view இல் தேர்ந்தெடுக்கப்பட்ட வரிசைகளுக்கு மறுஅளவிடப்படும் ஒரு பெரிய தளவமைப்பு (section view க்கு உகந்தது) |
| `large-2-rows` | 2 வரிசை துணை பட்டன்களுடன் section view இல் தேர்ந்தெடுக்கப்பட்ட வரிசைகளுக்கு மறுஅளவிடப்படும் ஒரு பெரிய தளவமைப்பு (section view க்கு உகந்தது) |
| `large-sub-buttons-grid` | இந்த தளவமைப்பு துணை பட்டன்களை ஒரு கட்டத்தில் காண்பிக்கும், `rows` குறைந்தது `2` ஆக அமைக்கப்பட வேண்டும்.

</details>

#### எடுத்துக்காட்டுகள்

<details>

<summary>2 வரிசை துணை பட்டன்களுடன் ஆற்றல் புள்ளிவிவரங்களைக் காட்டும் ஒரு பெரிய பட்டன் (ஸ்கிரீன்ஷாட் இணைக்கப்பட்டுள்ளது)</summary>

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

<summary>12 துணை பட்டன்களுடன் பல வரிசைகளைக் கொண்ட ஒரு பெரிய பட்டன்</summary>

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

## நிபந்தனைகள்

சில விருப்பங்கள் நிபந்தனைகளால் இயக்கப்படுகின்றன, அவை Home Assistant இன் [நிபந்தனை கார்டில்](https://www.home-assistant.io/dashboards/conditional/) உள்ளவற்றைப் போலவே எழுதப்படுகின்றன:

- ஒரு [துணை பட்டனில்](#துணை-பட்டன்கள்) `visibility`, அதைக் காட்ட அல்லது மறைக்க
- ஒரு [பாப்-அப்பில்](#பாப்-அப்) `trigger`, நிபந்தனைகள் பூர்த்தியாகும்போது அதைத் திறக்க
- உங்கள் [டெம்ப்ளேட்களுக்குள்](#டெம்ப்ளேட்கள்) `checkConditionsMet(conditions, hass)`, உங்கள் சொந்த கோடில் பதில் தேவைப்படும்போது

Home Assistant இன் ஒவ்வொரு நிபந்தனை வகையும் மதிப்பிடப்படுகிறது: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, மேலும் `and`, `or` மற்றும் `not` குழுக்கள். Home Assistant நிபந்தனை உருவாக்கியின் நிபந்தனைகளும் வேலை செய்கின்றன, அதாவது `sun.is_up`, `light.is_on`, `zone.in_zone` அல்லது `temperature.is_value` போன்று தங்கள் டொமெய்ன் பெயரால் அழைக்கப்படுபவை, அவற்றின் `target`, `options`, `behavior` மற்றும் `for` அமைப்புகளுடன்.

<details>

<summary><b>எடுத்துக்காட்டு</b></summary>

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
> நிபந்தனைகள் உங்கள் உலாவியில் மதிப்பிடப்படுகின்றன, எனவே Home Assistant சர்வர் தேவைப்படும் ஒரு சில நிபந்தனைகள் துல்லியமாக இருக்க முடியாது: சூரிய உதயமும் மறைவும் மீண்டும் கணக்கிடப்படாமல் `sun.sun` entity-யிலிருந்து படிக்கப்படுகின்றன, மேலும் `for` கால அளவு recorder வரலாறு இல்லாமல் கடைசி நிலை மாற்றத்திலிருந்து அளக்கப்படுகிறது.
>
> `view_columns` ஏற்கப்படுகிறது ஆனால் எப்போதும் நிறைவேறும், ஏனெனில் உங்கள் காட்சியின் நெடுவரிசைகளை Bubble Card ஒருபோதும் அமைப்பதில்லை. Bubble Card அறியாத ஒரு நிபந்தனை வகை அமைதியாகத் தோல்வியடையாமல் உங்கள் உலாவி கன்சோலில் ஒருமுறை தன்னைப் பதிவு செய்கிறது, அதனால் எழுத்துப் பிழையையும் இல்லாத அம்சத்தையும் வேறுபடுத்தலாம்.

<br>

---

<br>

## தட்டு, இரட்டைத் தட்டு மற்றும் அழுத்திப் பிடி செயல்கள்

இந்த விருப்பத்தை ஆதரிக்கும் கார்டுகளில், Home Assistant இன் இயல்புநிலை tap actions, double tap actions மற்றும் hold actions ஐயும் நீங்கள் பயன்படுத்தலாம். எடுத்துக்காட்டாக, ஒரு பட்டன் ஐகானை அழுத்திப் பிடிப்பதன் மூலம் "more info" சாளரத்தைக் காட்ட அல்லது ஒரு துணை பட்டன் அழுத்தப்படும்போது ஒரு service ஐ இயக்க இது அனுமதிக்கிறது.

**குறிப்பு: ஒரு `double_tap_action` உள்ளமைக்கப்பட்டிருக்கும்போது, வழக்கமான `tap_action` ஒரு இரட்டைத் தட்டைக் கண்டறிய 200ms தாமதத்தைக் கொண்டிருக்கும். இந்த தாமதம் விரும்பத்தகாததாக இருந்தால், இரட்டைத் தட்டு கையாளுதலை முடக்க `double_tap_action` ஐ `none` என அமைக்கவும்.**

### செயல் விருப்பங்கள்

<details>

<summary><b>விருப்பங்கள் (YAML + விளக்கம்)</b></summary>

| பெயர் | வகை | ஆதரிக்கப்படும் விருப்பங்கள் | விளக்கம் |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | செய்ய வேண்டிய செயல் |
| `target` | object |  | `call-service` உடன் மட்டுமே செயல்படும். [home-assistant தொடரமைப்பை](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) பின்பற்றுகிறது |
| `navigation_path` | string | உங்கள் dashboard இன் ஏதேனும் பாதை | action navigate என வரையறுக்கப்படும்போது செல்ல வேண்டிய பாதை (எ.கா. ஒரு பாப்-அப்பைத் திறக்க `'#kitchen'`) |
| `url_path` | string | ஏதேனும் இணைப்பு | action `url` ஆக இருக்கும்போது கிளிக் செய்தால் திறக்க வேண்டிய URL (எ.கா. `https://www.google.com`) |
| `service` | string | ஏதேனும் service | `action` `call-service` என வரையறுக்கப்படும்போது அழைக்க வேண்டிய service (எ.கா. `media_player.media_play_pause`) |
| `data` அல்லது `service_data` | object | ஏதேனும் service data | `action` `call-service` என வரையறுக்கப்படும்போது சேர்க்க வேண்டிய service data (எ.கா. `entity_id: media_player.kitchen`) |
| `confirmation` | object | பார்க்க [உறுதிப்படுத்தல்](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | ஒரு உறுதிப்படுத்தல் பாப்-அப்பைக் காட்டவும் (Bubble Card இன் அல்ல), இயல்புநிலை `confirmation` பொருளை மேலெழுதுகிறது |

</details>

#### எடுத்துக்காட்டு

<details>

<summary>ஒரு பாப்-அப்பைத் திறக்கும் பட்டன்</summary>

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


## வடிவமைப்பு

நீங்கள் **card-mod பயன்படுத்தாமல்** எல்லா கார்டுகளின் CSS-ஐ மாற்ற நான்கு வழிகளில் தனிப்பயன் ஸ்டைல்களைச் சேர்க்கலாம்:

- எடிட்டரில், நீங்கள் மாற்ற விரும்பும் கார்டுக்குச் சென்று, பிறகு _Styling options > Custom styles & JS templates_ என்பதற்குச் சென்று, உங்கள் தனிப்பயன் ஸ்டைல்களைச் சேர்க்கவும் (கீழே உள்ள குறிப்புகளையும் உதாரணங்களையும் பாருங்கள்).
- எடிட்டரில் (அல்லது [YAML](#மாட்யூல்கள்)-இல்), நீங்கள் மாற்ற விரும்பும் கார்டுக்குச் சென்று, பிறகு _Modules_ என்பதற்குச் சென்று, ஒரு புதிய மாட்யூலை உருவாக்கவும் (இது எல்லா கார்டுகளுக்கும் கிடைக்கும்), அல்லது கிடைக்கும் எந்த மாட்யூலையும் நிறுவ **Module Store**-க்குச் செல்லவும் (மாட்யூல்கள் பற்றிய கூடுதல் விவரங்கள் [கீழே](#மாட்யூல்கள்) காணலாம்).
- ஒரு [தீம்](https://www.home-assistant.io/integrations/frontend/#defining-themes) கோப்பில் YAML-இல் CSS மாறிகளைச் சேர்ப்பதன் மூலம் (இவை மேலே உள்ள ஒவ்வொரு கார்டின் ஆவணத்திலும் கிடைக்கும்). இது உலகளாவிய மாற்றங்களை அனுமதிக்கிறது.

  <details>
  
  <summary>உதாரணம்</a></summary>
  
  <br>

  `Bubble:` என்ற வரியை நகலெடுக்க வேண்டாம், இது நீங்கள் பயன்படுத்தும் தீமின் பெயர். மாறிகளிலிருந்து `--` என்பதையும் நீக்க வேண்டும்.

  எந்த மாற்றத்திற்குப் பின்னரும் தீமைப் புதுப்பிக்க [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) செயலை இயக்க வேண்டும்.

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
  
- YAML-இல் `styles: |` சேர்த்து, அதற்குப் பின் உங்கள் தனிப்பயன் ஸ்டைல்களைச் சேர்ப்பதன் மூலம் (கீழே உள்ள குறிப்புகளையும் உதாரணங்களையும் பாருங்கள்).

> [!TIP]  
> **எந்த ஸ்டைல் கிளாஸ்களை மாற்றலாம் என்பதைப் புரிந்துகொள்ள**, இந்த ரெப்போவில் உள்ள [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) கோப்புறையைப் பார்க்கலாம். ஒவ்வொரு கார்டு கோப்புறையிலும், `styles.css` எனப் பெயரிடப்பட்ட ஒரு கோப்பு இருக்கும். இந்தக் கோப்புகளில் பயன்படுத்தப்படும் அனைத்து ஸ்டைல்களும் உள்ளன. இது CSS மாறிகளை விட மிக அதிக சாத்தியங்களை அளிக்கிறது, ஆனால் இதை ஒவ்வொரு கார்டுக்கும் தனித்தனியாகச் சேர்க்க வேண்டும்.
> 
> [சமூகத்தின் நிறைய உதாரணங்களையும்](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), அல்லது கொஞ்சம் தேடி [Home Assistant ஃபோரமில்](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) இருந்தும் சிலவற்றைக் காணலாம்.
>
> (ஸ்கிரீன்ஷாட்களில் உள்ளது போன்ற) Home Assistant-க்கான Bubble தீமை [இங்கே](https://github.com/Clooos/Bubble) காணலாம்.
>
> எனது [YouTube சேனலில்](https://www.youtube.com/@cloooos) விரைவில் ஒரு டுடோரியல் வீடியோ வரவுள்ளது!

> [!IMPORTANT]  
> ஏற்கனவே வரையறுக்கப்பட்ட சில CSS ஸ்டைல்களில் `!important;` சேர்க்க வேண்டியிருக்கலாம் என்பதை நினைவில் கொள்ளவும் (கீழே உள்ள உதாரணங்களைப் பாருங்கள்).

> [!TIP]  
> துணை பட்டன்களை பெயர் அடிப்படையிலான கிளாஸ்கள் மூலம் இலக்கு வைக்கலாம். உதாரணமாக, "My sub-button" எனப் பெயரிடப்பட்ட ஒரு துணை பட்டனை `.my-sub-button` மூலம் வடிவமைக்கலாம். ஸ்லைடர் துணை பட்டன்கள் `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` போன்றவற்றையும் வெளிப்படுத்துகின்றன.
>
> பெயர் அடிப்படையிலான கிளாஸ், நீங்கள் ஒரு துணை பட்டனை மறுபெயரிடும்போது மாறும், மேலும் பெயர் மொழிபெயர்க்கப்படும்போது அதுவும் மொழிபெயர்க்கப்படும். பெயர் எதுவாக இருந்தாலும் மொழி எதுவாக இருந்தாலும் ஒருபோதும் மாறாத உங்கள் சொந்த கிளாஸ் ஒன்றைப் பெற துணை பட்டனில் `css_class` ஐ அமைக்கவும்.

#### உதாரணங்கள்

<details>

<summary>எந்த Bubble Card-இன் எழுத்துரு அளவை மாற்றுவது</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>கிடைமட்ட பட்டன் அடுக்கில் ஒரு பட்டனின் பின்னணி நிறத்தை மாற்றுவது</summary>

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

<summary>ஒரு கார்டின் பின்னணி நிறத்தை மாற்றுவது</summary>

<br>

இது எல்லா Bubble Card வகைகளிலும் (பாப்-அப்கள் தவிர) செயல்படுகிறது:

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

இது ஒரு பட்டன் கார்டில் மட்டும் அதையே செய்கிறது (இது பாப்-அப் தலைப்புக்கும் வேலை செய்கிறது): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

`on`-ல் இருக்கும்போது நிறத்தை மாற்ற, கீழே உள்ள ஸ்டைல் டெம்ப்ளேட்களைப் பாருங்கள்.

</details>

<details>

<summary>ஒரு பட்டன் ஸ்லைடரின் நிறத்தை மாற்றுவது</summary>

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

<summary>ஒரு பிரிப்பானின் கோட்டு நிறத்தை மாற்றுவது</summary>

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

<summary>ஒரு ஐகானின் நிறத்தை மாற்றுவது</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

கிடைமட்ட பட்டன் அடுக்கு ஐகானுக்கு.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>ஒரு ஐகான் கண்டெய்னரின் பின்னணி நிறத்தை மாற்றுவது</summary>

<br>

இது எல்லா Bubble Card வகைகளிலும் (பாப்-அப்கள் தவிர) செயல்படுகிறது:

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

இது பாப்-அப் தலைப்புக்கு அதையே செய்கிறது: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>துணை பட்டன்களின் அளவை மாற்றுவது (பெரிய தளவமைப்புக்கு ஏற்றது)</summary>

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

<summary>இரண்டாவது துணை பட்டனின் பின்னணி நிறத்தை மாற்றுவது</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>ஒரு ஐகானின் அளவை மாற்றுவது</summary>

<br>

முக்கிய ஐகானுக்கு.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

துணை பட்டன் ஐகான்களுக்கு.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>ஒரு துணை பட்டனில் ஐகானுக்குப் பதிலாக ஒரு படத்தைப் பயன்படுத்துவது</summary>

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

இந்தப் படத்தை Home Assistant-இன் "www" கோப்புறையில் உள்ள "pictures" கோப்புறையில் (அல்லது நீங்கள் விரும்பும் பெயரில்) பதிவேற்றவும்.

</details>

<details>

<summary>மேம்பட்ட உதாரணம்: துணை பட்டன்களின் கிடைமட்ட வரிசையை உருவாக்குதல் (ஸ்கிரீன்ஷாட் இணைக்கப்பட்டுள்ளது)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> இது எனக்கு மிகவும் பிடிக்கும், நான் இதை எனது டாஷ்போர்டில் ஒரு தலைப்பாக பயன்படுத்துகிறேன்.

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

## டெம்ப்ளேட்கள்

**Bubble Card Jinja டெம்ப்ளேட்களை ஆதரிக்காது**, ஆனால் அனுபவமிக்க பயனர்கள் தங்கள் [தனிப்பயன் ஸ்டைல்களில்](#வடிவமைப்பு) நேரடியாக JS டெம்ப்ளேட்களைச் சேர்க்கலாம். உதாரணமாக, இது ஒரு ஐகான், உரைகள் அல்லது ஒரு உறுப்பின் நிறங்களை மாறும்படி மாற்ற, அல்லது ஒரு நிலை, ஒரு பண்பு போன்றவற்றின் அடிப்படையில் ஒரு உறுப்பை (துணை பட்டன் போன்றது) நிபந்தனையுடன் காட்ட அல்லது மறைக்க அனுமதிக்கிறது.

> [!TIP]  
> JS டெம்ப்ளேட்கள் பற்றிய கூடுதல் தகவல் [இங்கே](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). எல்லாம் சரியாக வேலை செய்கிறது என்பதை உறுதிசெய்ய, **உங்கள் பிரவுசர் கன்சோலை எப்போதும் பார்க்கவும்** என்பது என் அறிவுரை.

> [!IMPORTANT]  
> **CSS பண்பை மாற்றாத அனைத்து டெம்ப்ளேட்களும் இறுதியில் வைக்கப்பட வேண்டும்! ஒரு ஐகான், ஒரு உரை அல்லது வேறு எந்த உறுப்பை மாற்றுவது போல.**

#### கிடைக்கக்கூடிய மாறிகள் மற்றும் செயல்பாடுகள்

<details>

<summary>மாறிகள்</summary>

<br>

பெரும்பாலான கார்டுகளில் இந்த மாறிகளை நீங்கள் அணுகலாம்:

- `state` உங்கள் வரையறுக்கப்பட்ட `entity`-இன் நிலையைத் திருப்பும்.
  
- `entity` இந்த உதாரணத்தில் `switch.test` போன்று நீங்கள் வரையறுத்த என்டிட்டியைத் திருப்பும்.
  
- `icon` ஐகானை மாற்ற இப்படிப் பயன்படுத்தலாம் `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` உங்கள் முதல் துணை பட்டனின் வரையறுக்கப்பட்ட `entity`-இன் நிலையைத் திருப்பும், `[0]` முதல் துணை பட்டன் நிலை, `[1]` இரண்டாவது...
  
- `subButtonIcon[0]` முதல் துணை பட்டன் ஐகானை மாற்ற இப்படிப் பயன்படுத்தலாம் `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` முதல் துணை பட்டன் ஐகான், `[1]` இரண்டாவது...
  
- `card` DOM-இல் உள்ள கார்டு உறுப்பைத் திருப்பும்.
  
- `hass` என்பது உங்களுக்கு இன்னும் அதிக கட்டுப்பாட்டை அளிக்கும் ஒரு மேம்பட்ட மாறி, உதாரணமாக நீங்கள் `light.kitchen`-இன் நிலையை இப்படி திருப்பலாம் `hass.states['light.kitchen'].state` அல்லது ஒரு பண்பை இப்படி `hass.states[entity].attributes.brightness`.

- `this` உங்கள் அமைப்பு மற்றும் டாஷ்போர்டு பற்றிய நிறைய பயனுள்ள தகவல்களைத் திருப்பும், நீங்கள் என்ன செய்கிறீர்கள் என்பது தெரிந்திருந்தால் மட்டும் இதைப் பயன்படுத்தவும்.

</details>

<details>

<summary>செயல்பாடுகள்</summary>

<br>

அனைத்து குளோபல் JS செயல்பாடுகளையும் நீங்கள் அணுகலாம், ஆனால் இவற்றையும் அணுகலாம்:

- `getWeatherIcon` வானிலையைத் திருப்பும் ஒரு நிலையின் அடிப்படையில் ஒரு வானிலை ஐகானைத் திருப்பப் பயன்படுத்தலாம். உதாரணமாக, மூன்றாவது துணை பட்டன் ஐகானை இன்றைய வானிலை ஐகானாக மாற்ற இப்படிச் செய்யலாம் `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, `.forecast[1]?.condition` நாளைக்கானது...

  அதற்கு நீங்கள் ஒரு டெம்ப்ளேட் சென்சாரை உருவாக்க வேண்டும். உங்கள் `configuration.yaml`-இல் நீங்கள் சேர்க்க வேண்டியது இதோ:
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
- `checkConditionsMet(conditions, hass)` ஒரு [நிபந்தனைகள்](#நிபந்தனைகள்) பட்டியல் பூர்த்தியாகும்போது `true` ஐத் திருப்பித் தருகிறது, எடுத்துக்காட்டாக `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` ஒரு நிலையை மொழிபெயர்க்கப் பயன்படுத்தலாம் (கையேடாகச் சேர்க்காமல் ஒரு நிலை அலகைப் பெறவும் இதைப் பயன்படுத்தலாம்).
- `hass.formatEntityAttributeValue(state, "attribute")` ஒரு பண்பை மொழிபெயர்க்கப் பயன்படுத்தலாம் (கையேடாகச் சேர்க்காமல் ஒரு நிலை அலகைப் பெறவும் இதைப் பயன்படுத்தலாம்).

</details>

#### உதாரணங்கள்

கீழே நிறைய உதாரணங்களைக் காணலாம், ஆனால் மிகவும் மேம்பட்ட டெம்ப்ளேட்களை எனது [Patreon பக்கத்திலும்](https://www.patreon.com/c/Clooos) காணலாம், அதில் ஒன்று (எனக்குப் பிடித்தது) கார்டின் ஐகான்களைச் சுற்றி வைக்கப்பட்ட நான்கு வரையிலான நிபந்தனை பேட்ஜ்களை அனுமதிக்கிறது. Bubble Card தனிப்பயன் ஸ்டைல்கள் மற்றும் டெம்ப்ளேட்களின் அனைத்து சாத்தியங்களையும் அறிய இது ஒரு சிறந்த வழியும் கூட!

<details>
<summary>எனது Patreon பக்கத்திலிருந்து உதாரணங்கள்</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">எந்த கார்டிலும் Home Assistant போன்ற பேட்ஜ்களைச் சேர்த்தல்</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">எந்த என்டிட்டியும் இல்லாமல் ஒரு பிரிப்பானில் வடிவமைக்கப்பட்ட தேதி மற்றும் நேரத்தைக் காட்டுதல்</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">ஒரு துணை பட்டன் நிலையை இரண்டு வரிகளில் காட்டுதல்</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">ஒரு தேர்வு துணை பட்டனுக்குள் லேபிள்கள் மற்றும் ஐகான்களைத் தனிப்பயனாக்குதல்</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">தேவைப்படும்போது மட்டும் தோன்றும் நிலையான நினைவூட்டல் பாப்-அப்பைச் சேர்த்தல்</a>
</p>

<br>

</details>

<details>

<summary><code>off</code>-ல் சிவப்பாகவும் <code>on</code>-ல் நீலமாகவும் இருக்கும் ஒரு பட்டனின் பின்னணி நிறத்தை மாற்றுவது</summary>

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

<summary>கிடைமட்ட பட்டன் அடுக்குக்கான ஒரு என்டிட்டியை அடிப்படையாகக் கொண்டு ஒரு பட்டனின் பின்னணி நிறத்தை மாற்றுவது</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>ஒரு துணை பட்டனை நிபந்தனையுடன் காட்டுதல்/மறைத்தல்</summary>

<br>

இது எனது வேக்யூம் சிக்கிக்கொண்டிருக்கும்போது மட்டும் முதல் துணை பட்டனைக் காட்டுகிறது.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

இது பேட்டரி 10%-க்குக் கீழே இருக்கும்போது ஒரு துணை பட்டனைக் காட்டுகிறது. "Low battery" எனக் காட்டும் ஒரு துணை பட்டனுடன் பயனுள்ளது.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>ஒரு ஐகான் அல்லது துணை பட்டன் ஐகானை நிபந்தனையுடன் மாற்றுவது</summary>

<br>

இது ஒரு வேக்யூம் சிக்கிக்கொண்டிருக்கும்போது மட்டும் ஒரு பட்டன் ஐகானை மாற்றுகிறது.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

இது ஒரு வேக்யூம் சிக்கிக்கொண்டிருக்கும்போது மட்டும் முதல் துணை பட்டன் ஐகானை மாற்றுகிறது.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>ஒரு ஐகான் அல்லது துணை பட்டன் ஐகான் நிறத்தை நிபந்தனையுடன் மாற்றுவது</summary>

<br>

இது ஒரு பட்டன் ஐகான் நிறத்தை அதன் நிலையின் அடிப்படையில் மாற்றுகிறது.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

இது ஒரு துணை பட்டன் ஐகான் நிறத்தை அதன் நிலையின் அடிப்படையில் மாற்றுகிறது. `.bubble-sub-button-1` முதல் துணை பட்டன், வேறு துணை பட்டன் ஐகானை மாற்ற வேண்டுமெனில் `1`-ஐ மாற்றவும்.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>ஒரு விசிறி ஐகானை நிபந்தனையுடன் அனிமேட் செய்தல்</summary>

<br>

இது ஒரு விசிறி `on`-ல் இருக்கும்போது ஒரு பட்டன் ஐகானைச் சுழற்றுகிறது.
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

<summary>உரைகளைத் டெம்ப்ளேட் செய்தல் (பெயர் அல்லது நிலை போன்று)</summary>

<br>

இது உங்கள் வானிலையைப் பொறுத்து ஒரு பட்டன் பெயரை/நிலையை "It's currently sunny" எனக் காட்ட மாற்றுகிறது.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
அல்லது துணை பட்டன்களுக்குப் பயன்படுத்தப்படும்போது:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


நிலையை (`.bubble-state`) டெம்ப்ளேட் செய்ய விரும்பினால், `show_state: true`-ஐ இயக்காமல், எந்த பண்பும் இல்லாமல் `show_attribute: true`-ஐ மட்டும் இயக்கவும்.

</details>

<details>

<summary>மேம்பட்ட உதாரணம்: ஒரு பாப்-அப் திறந்திருக்கும்போது ஒரு துணை பட்டனின் நிறத்தை மாற்றுவது</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>மேம்பட்ட உதாரணம்: உங்கள் மொழிக்கு மொழிபெயர்க்கப்பட்ட ஒரு நிலையின் அடிப்படையில் ஒரு பிரிப்பான் பெயரைத் டெம்ப்ளேட் செய்தல்</summary>

<br>

ஒரு நிலையை மொழிபெயர்க்க `hass.formatEntityState(state)`-ஐயும், ஒரு பண்பை மொழிபெயர்க்க `hass.formatEntityAttributeValue(state, "attribute")`-ஐயும் பயன்படுத்தலாம்.

இது வானிலையின் அடிப்படையில் பெயரையும் ஐகானையும் மாற்றுகிறது, "Nuageux" என்றால் ஃபிரெஞ்சில் "Cloudy" என்று அர்த்தம்.

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

## மாட்யூல்கள்

மாட்யூல்கள் என்பது உங்கள் அனைத்து Bubble Cards முழுவதும் உங்கள் தனிப்பயன் ஸ்டைல்களையும் டெம்ப்ளேட்களையும் சேமிக்கவும், மீண்டும் பயன்படுத்தவும், பகிரவும் அனுமதிக்கும் சக்திவாய்ந்த அம்சம். ஒரே கோடை பல கார்டுகளில் நகலெடுத்து ஒட்டுவதற்குப் பதிலாக, நீங்கள் ஒரு மாட்யூலை உருவாக்கி அதை உங்களுக்குத் தேவையான இடத்தில் பயன்படுத்தலாம். இது உங்கள் டாஷ்போர்டின் தோற்றத்தையும் உணர்வையும் நிர்வகிப்பதை மிகவும் எளிதாகவும் திறமையாகவும் ஆக்குகிறது.

ஆனால் இந்த அம்சம் அதைவிட மிகவும் சக்திவாய்ந்தது, இது Home Assistant-இன் இயல்புநிலை [படிவ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) விருப்பங்கள் அனைத்தையும் பயன்படுத்தி, Bubble Card எடிட்டரில் நீங்களே உண்மையான அம்சங்களைச் சேர்க்க அனுமதிக்கிறது!  
நேரடி மாற்றங்களைக் காட்டவும், பண்புகளைச் சரியாக ஆதரிக்கவும் ஆப்ஜெக்ட் செலக்டர் மேம்படுத்தப்பட்டுள்ளது.

ஒரு மாட்யூல், உள்ளமைந்த [உருப்படி பரிந்துரைகளுக்கு](#உருப்படி-பரிந்துரைகள்) அருகில் Home Assistant கார்டு தேர்விக்கும் பதிலளிக்க முடியும்: முன்கூட்டியே விவரிக்கக்கூடிய கார்டுகளுக்கு `suggestions` ஐயும், உங்கள் அமைப்பிலிருந்து கணக்கிடப்பட வேண்டியிருக்கும்போது `suggestions_code` ஐயும் பயன்படுத்தவும், எடுத்துக்காட்டாக தேர்ந்தெடுக்கப்பட்ட entity சேர்ந்த பகுதியின் அனைத்து entity-களிலிருந்தும் உருவாக்கப்பட்ட ஒரு பாப்-அப். இரண்டு கீகளும் [இங்கே](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) ஆவணப்படுத்தப்பட்டுள்ளன.

[சமூகத்தால் உருவாக்கப்பட்ட மாட்யூல்களைக்](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) கண்டறிந்து நிறுவ, அல்லது உங்கள் சொந்த படைப்புகளைப் பகிர, **Module Store**-ஐயும் நீங்கள் உலாவலாம்!

> [!TIP]
> ஒரு மாட்யூலின் கோட் ஒரு கார்டின் `styles` பிரிவில் உள்ள கோட் அதே வழியில் வேலை செய்கிறது. [Templates](#டெம்ப்ளேட்கள்) பிரிவில் உள்ள அனைத்து மாறிகளும் செயல்பாடுகளும் கிடைக்கும்.

<br>

### ஆரம்ப அமைவு

> [!IMPORTANT]
> v3.1.0 முதல், மாட்யூல்களுக்குப் பரிந்துரைக்கப்படும் சேமிப்பு பேக்எண்ட் Bubble Card Tools ஆகும். இருக்கும் அமைவுகளுக்கு பழைய டெம்ப்ளேட் சென்சார் முறை இன்னும் வேலை செய்கிறது, ஆனால் புதிய மாட்யூல்கள் மற்றும் Module Store அம்சங்கள் Bubble Card Tools மூலம் சிறப்பாக ஆதரிக்கப்படுகின்றன.

Bubble Card Tools இன்டகிரேஷன் Module Editor மற்றும் Module Store-ஐ இயக்குகிறது, மேலும் மாட்யூல்களைத் தனித்தனி YAML கோப்புகளாக சேமிக்கிறது. இருக்கும் மாட்யூல்கள் தானாகவே இடம்பெயர்க்கப்படும்.

நிறுவல் மற்றும் உள்ளமைவு படிகள் இங்கே விளக்கப்பட்டுள்ளன:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

நீங்கள் எந்த கார்டின் அமைப்புகளிலிருந்தும், **Modules** பிரிவின் கீழ் Module Editor-ஐ அணுகலாம். எடிட்டர் இரண்டு முக்கிய தாவல்களை வழங்குகிறது:

#### My Modules தாவல்

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

இந்தத் தாவல் நீங்கள் நிறுவிய அனைத்து மாட்யூல்களையும் காட்டுகிறது, மேலும் இது உங்களை அனுமதிக்கிறது:

- இருக்கும் மாட்யூல்களை தற்போதைய கார்டுக்கு **Apply** செய்ய
- புதிதாக ஒரு மாட்யூலை **Create** செய்ய
- நேரடி முன்னோட்டத்துடன் இருக்கும் மாட்யூல்களை **Edit** செய்ய
- உங்களுக்குத் தேவையில்லாத மாட்யூல்களை **Delete** செய்ய
- மாட்யூல்களை **Search** செய்யவும் **sort** செய்யவும் (அகரவரிசை, சமீபத்தியது, செயலிலுள்ளவை முதலில்)
- ஒரு மாட்யூலை அனைத்து கார்டுகளிலும் தானாகப் பயன்படுத்த **Set global status** செய்ய
- காப்புப்பிரதி அல்லது பகிர்வுக்காக மாட்யூல்களை **Import/Export** செய்ய
- மாட்யூல் எடிட்டரில், **விருப்பத்தேர்வு: உருப்படி பரிந்துரைகள்** பிரிவின் கீழ், **உருப்படி பரிந்துரைகளை எழுத**, இதனால் உங்கள் மாட்யூல் Home Assistant கார்டு தேர்வியில் வழங்கப்படும். விதிகளும் கணக்கிடப்பட்ட பரிந்துரைகளும் நீங்கள் எழுதும்போதே சரிபார்க்கப்படுகின்றன, அங்கு ஒரு பிழை இருந்தால் சேமிக்க முடியாது, மேலும் நீங்கள் தேர்ந்தெடுக்கும் எந்த entity-க்கும் பரிந்துரைக்கப்பட்ட கார்டுகளை முன்னோட்டம் காட்டுகிறது

#### Module Store தாவல்

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

இந்தத் தாவல் [சமூகத்திடமிருந்து கிடைக்கும் அனைத்து மாட்யூல்களையும்](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) காட்டும், மேலும் இது உங்களை அனுமதிக்கிறது:

- சமூகம் உருவாக்கிய அனைத்து மாட்யூல்களையும் **Browse** செய்ய
- பெயர், பொருந்தக்கூடிய தன்மை அல்லது முக்கிய சொற்கள் மூலம் மாட்யூல்களை **Search** செய்யவும் வடிகட்டவும்
- ஒரே கிளிக்கில் மாட்யூல்களை **Install** செய்ய
- புதிய பதிப்புகள் கிடைக்கும்போது நிறுவப்பட்ட மாட்யூல்களை **Update** செய்ய

> [!TIP]
> எடிட்டரில், ஒரு கார்டு வகைக்கு இன்னும் பொருந்தக்கூடியதாகக் குறிக்கப்படாத மாட்யூல்களைச் சோதிக்க, ஆதரிக்கப்படாத மாட்யூல்களை இயக்கலாம்.

<br>

### மாட்யூல்களை எப்படிப் பயன்படுத்துவது

#### ஒரு புதிய மாட்யூலை உருவாக்குதல்

<details>

<summary>விரிவாக்க கிளிக் செய்யவும்</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. எந்த கார்டின் எடிட்டருக்கும் சென்று **Modules** பிரிவை விரிவாக்கவும்.
2. **Create new module** என்பதைக் கிளிக் செய்யவும்.
3. மாட்யூல் தகவலை நிரப்பவும்.
4. **Code** எடிட்டரில் உங்கள் CSS மற்றும்/அல்லது JavaScript டெம்ப்ளேட் கோடை எழுதவும்.
5. (விருப்பம்) **Editor** பிரிவில் ஒரு தனிப்பயன் உள்ளமைவு UI-ஐ உருவாக்கவும் (மேலே உள்ள ஸ்கிரீன்ஷாட்டில் உள்ள கலர் பிக்கர் போன்று, முழு ஆவணமும் [இங்கே](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) கிடைக்கும்).
6. (விருப்பம்) உங்கள் மாட்யூல் Home Assistant கார்டு தேர்வியில் வழங்கப்படுவதற்காக உங்கள் **உருப்படி பரிந்துரைகளை** எழுதவும். நீங்கள் தட்டச்சு செய்யும்போதே பேனல் அதைச் சரிபார்க்கிறது, மேலும் அதன் முன்னோட்டம் நீங்கள் தேர்வு செய்யும் entity-க்கான பரிந்துரைக்கப்பட்ட கார்டுகளையே காட்டுகிறது.
7. **Save** என்பதைக் கிளிக் செய்யவும்.

உங்கள் மாட்யூல் இப்போது உங்கள் எந்த கார்டிலும் பயன்படுத்தத் தயாராக உள்ளது!

<br>

</details>

#### ஒரு மாட்யூலை ஒரு கார்டுக்குப் பயன்படுத்துதல்

<details>

<summary>விரிவாக்க கிளிக் செய்யவும்</summary>

<br>

- **எடிட்டர் மூலம்:**

  - நீங்கள் மாட்யூலைப் பயன்படுத்த விரும்பும் கார்டின் எடிட்டருக்குச் செல்லவும்.
  - **Modules** பிரிவை விரிவாக்கவும்.
  - பட்டியலிலிருந்து நீங்கள் பயன்படுத்த விரும்பும் மாட்யூலைக் கிளிக் செய்யவும்.
  - "Apply to"-இன் கீழ், "This card"-ஐக் கிளிக் செய்யவும். மாட்யூல் இப்போது செயலில் உள்ளது. அதே கார்டுக்கு பல மாட்யூல்களைப் பயன்படுத்தலாம்.

- **YAML மூலம்:**

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

#### ஒரு மாட்யூலை உலகளவில் பயன்படுத்துதல்

<details>

<summary>விரிவாக்க கிளிக் செய்யவும்</summary>

<br>

நீங்கள் அனைத்து Bubble Cards-க்கும் தானாகவே பயன்படுத்த ஒரு மாட்யூலை அமைக்கலாம்:

**எடிட்டரைக் கொண்ட மாட்யூல்களுக்கு இது கிடைக்காது, ஏனெனில் அவை வேலை செய்ய குறிப்பிட்ட உள்ளமைவு தேவைப்படுகிறது.**

- **எடிட்டர் மூலம்:**

  - Module editor-இல், **My Modules** தாவலில் உங்கள் மாட்யூலைக் கண்டறியவும்.
  - மாட்யூல் பெயருக்கு அருகில் உள்ள **All cards** பட்டனை டாகிள் செய்யவும்.
  - மாட்யூல் இப்போது அனைத்து கார்டுகளிலும் தானாகவே பயன்படுத்தப்படும்.
 
- **YAML மூலம்:**

  உங்கள் மாட்யூல் YAML உள்ளமைவில் (`bubble-modules.yaml`-இல்), `is_global: true`-ஐ மட்டும் சேர்க்கவும்.

<br>

</details>

#### ஒரு உலகளாவிய மாட்யூலிலிருந்து ஒரு கார்டைத் தவிர்த்தல்

<details>

<summary>விரிவாக்க கிளிக் செய்யவும்</summary>

<br>

உங்களிடம் ஒரு உலகளாவிய மாட்யூல் இருந்து, ஆனால் அதை ஒரு குறிப்பிட்ட கார்டிலிருந்து தவிர்க்க விரும்பினால்:

- **எடிட்டர் மூலம்:**
  
  - கார்டின் **Modules** பிரிவில், உலகளாவிய மாட்யூல்கள் பட்டியலிடப்பட்டிருப்பதைக் காணலாம்.
  - ஒரு உலகளாவிய மாட்யூலைக் கிளிக் செய்து, இந்த குறிப்பிட்ட கார்டிலிருந்து தவிர்க்க "This card"-ஐ முடக்கவும்.

- **YAML மூலம்:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### உங்கள் மாட்யூலை Module Store-க்குப் பகிர்தல்

<details>

<summary>விரிவாக்க கிளிக் செய்யவும்</summary>

<br>

உங்கள் மாட்யூலை Module Store-க்குப் பகிர, Module Editor-இல், கீழே "Export Module"-இல், "Copy for GitHub"-ஐக் கிளிக் செய்து, [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) பிரிவில் ஒரு புதிய discussion-இல் உள்ளடக்கத்தை ஒட்டவும். **விளக்கத்தை** (தேவைப்பட்டால்), **உதாரணத்தை** (YAML பயனர்களுக்கு) **Edit** செய்யவும், Module Store-க்கு **குறைந்தது ஒரு ஸ்கிரீன்ஷாட்டையாவது சேர்க்க** நினைவில் கொள்ளவும்.

**உங்கள் மாட்யூல் அதற்குப் பிறகு உடனடியாகக் கிடைக்கும்** (Store புதுப்பிப்புக்குப் பிறகு), எனவே எல்லாம் சரியாக எழுதப்பட்டுள்ளதா, மாட்யூல் எதிர்பார்த்தபடி வேலை செய்கிறதா என்பதை மீண்டும் சரிபார்க்கவும். பகிர்ந்த பிறகும் மாட்யூலைத் திருத்தலாம்/புதுப்பிக்கலாம்.

<br>

</details>

#### பதிப்பு நிர்வாகம்

<details>

<summary>விரிவாக்க கிளிக் செய்யவும்</summary>

<br>

Module Store நிறுவப்பட்ட மாட்யூல்களுக்கான புதுப்பிப்புகளை தானாகவே சரிபார்க்கிறது. புதுப்பிப்புகள் கிடைக்கும்போது:

1. **Module Store** தாவலில் ஒரு புதுப்பிப்பு குறிகாட்டியை நீங்கள் காண்பீர்கள்.
2. புதுப்பிப்புகள் கிடைக்கும் மாட்யூல்களில் **Update**-ஐக் கிளிக் செய்யவும்.
3. Module Store-இல் புதுப்பிப்பை உறுதிப்படுத்தவும்.

<br>

</details>

#### ஆதரிக்கப்படும் கார்டு வகைகளை வரையறுத்தல்

<details>

<summary>விரிவாக்க கிளிக் செய்யவும்</summary>

<br>

சில மாட்யூல்கள் அனைத்து கார்டு வகைகளுடனும் பொருந்தாமல் போகலாம். ஒரு மாட்யூல் எந்தக் கார்டுகளை ஆதரிக்கிறது என்பதை நீங்கள் குறிப்பிடலாம்.  
ஒரு மாட்யூல் **அனைத்து கார்டுகளுடனும்** பொருந்த வேண்டும் என்றால், `supported` புலத்தை மட்டும் தவிர்க்கவும் (அல்லது எடிட்டரில் **All cards** விருப்பத்தைப் பயன்படுத்தவும்).

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

### உதாரணங்கள்

<details>
<summary>அடிப்படை ஸ்டைலிங் மாட்யூல்</summary>

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
<summary>தனிப்பயன் உள்ளமைவுடன் கூடிய மாட்யூல்</summary>

<br>

இந்த மாட்யூல் [இங்கே](https://github.com/Clooos/Bubble-Card/discussions/1231) கிடைக்கும்.

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

Module Store-இல், அல்லது [இங்கே](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) இன்னும் அதிக உதாரணங்களைக் காணலாம்.

<br>

---

<br>

## உள்ளூராக்கம்

Bubble Card உங்கள் மொழியில் பேசுகிறது. அதன் எடிட்டர் Home Assistant ஆதரிக்கும் 64 மொழிகளில் மொழிபெயர்க்கப்பட்டுள்ளது, மேலும் Home Assistant ஏற்கனவே ஒரு சொல்லை வைத்திருக்கும் இடங்களில் எல்லாம் அதன் சொல்லாடலே மீண்டும் பயன்படுத்தப்படுகிறது, அதனால் இரண்டு இடைமுகங்களிலும் ஒரே சொற்களைப் படிக்கிறீர்கள்.

எடிட்டரின் அடிப்பகுதியில், பதிப்பு எண்ணுக்கு அருகில், ஒரு **தானியங்கு** சுவிட்ச் உங்கள் Home Assistant மொழியைப் பின்பற்றுகிறது. அதை அணைத்தால் எடிட்டர் முழுவதும் ஆங்கிலத்திற்குத் திரும்பும், இது ஒரு பயிற்சியைப் பின்பற்றவோ ஒரு சிக்கலைப் புகாரளிக்கவோ பயனுள்ளது. உங்கள் தேர்வு உங்கள் உலாவியில் நினைவில் வைக்கப்படுகிறது.

இந்த ஆவணமும் மொழிபெயர்க்கப்பட்டுள்ளது, [62 மொழிகளில்](languages.md), பிரிட்டிஷ் ஆங்கிலம் தவிர மற்ற அனைத்திலும், பிரிட்டிஷ் ஆங்கிலம் மூலப் பதிப்பையே காட்டுகிறது. அந்தப் பக்கங்கள் அனைவருக்கும் திறந்திருக்கின்றன, எனவே உங்கள் சொந்த Home Assistant உடன் பொருந்தாத ஒரு சொல்லாடலைச் சில கிளிக்குகளில் திருத்தலாம். உள்ளடக்கத்திற்கான குறிப்பு ஆவணமாக ஆங்கிலப் பதிப்பே இருக்கும்.

<br>

---

<br>

## உதவி

எதிர்பார்த்தபடி ஏதேனும் வேலை செய்யவில்லை என்றால், தயங்காமல் ஒரு issue-ஐத் திறக்கவும். 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card பற்றி கேள்விகள் அல்லது எண்ணங்கள் உள்ளனவா? உங்கள் டாஷ்போர்டுகளை அல்லது கண்டுபிடிப்புகளைப் பகிர விரும்புகிறீர்களா? நீங்கள் Home Assistant ஃபோரம், Bubble Card subreddit அல்லது GitHub Discussions பிரிவுக்குச் செல்லலாம்.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## பங்களிப்பு

பங்களிப்புகளை வரவேற்கிறோம்! பிழை திருத்தங்கள், புதிய அம்சங்கள், மொழிபெயர்ப்புகள் அல்லது ஆவண மேம்பாடுகள் என எதுவாக இருந்தாலும், தயங்காமல் ஒரு pull request-ஐத் திறக்கவும்.

தொடங்குவதற்கு முன், உங்கள் லோக்கல் சூழலை எவ்வாறு அமைப்பது, திட்டத்தை எவ்வாறு உருவாக்குவது, உங்கள் மாற்றங்களை எவ்வாறு சோதிப்பது ஆகியவற்றை உள்ளடக்கிய [டெவலப்பர் வழிகாட்டியை](DEVELOPERS.md) படிக்கவும்.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## நன்கொடை

இந்தத் திட்டத்தை என்னால் முடிந்த அளவு சிறப்பாக்க, எனது ஓய்வு நேரத்தில் பெரும்பகுதியை நான் அர்ப்பணிக்கிறேன். எனவே எனது வேலையை நீங்கள் பாராட்டினால், எந்த நன்கொடையும் உங்கள் ஆதரவைக் காட்ட ஒரு சிறந்த வழியாக இருக்கும் 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

இதுவரை ஆதரவளித்த அனைவருக்கும் நன்றி, நீங்கள் அனைவரும் எனது மிகப்பெரிய உந்துதல்!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
