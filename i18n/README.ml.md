<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> ഈ പേജ് ഒരു യാന്ത്രിക പരിഭാഷയാണ്. സംശയമുണ്ടെങ്കിൽ, [ഒറിജിനൽ ഇംഗ്ലീഷ് ഡോക്യുമെന്റേഷൻ](../README.md) ആണ് ആധികാരികം. ഏതെങ്കിലും വാക്യം തെറ്റായി തോന്നുന്നുണ്ടോ? എല്ലാ സഹായവും സ്വാഗതം ചെയ്യുന്നു, [ഈ പേജ് ശരിയാക്കാൻ](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ml.md) ഒരു മിനിറ്റ് മാത്രം മതി: ഫോർക്കും പുൾ റിക്വസ്റ്റും GitHub തന്നെ കൈകാര്യം ചെയ്യും. മുൻകൂട്ടി നന്ദി! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[ഇത് മറ്റൊരു ഭാഷയിൽ വായിക്കുക](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card എന്നത് Home Assistant-നായുള്ള ഒരു മിനിമലിസ്റ്റ്, ഇഷ്ടാനുസൃതമാക്കാവുന്ന കാർഡ് ശേഖരമാണ്, ആധുനിക പോപ്പ്-അപ്പുകളും 100-ലധികം കമ്മ്യൂണിറ്റി നിർമ്മിത മൊഡ്യൂളുകളുള്ള ഒരു സംയോജിത Module Store-ഉം ഇതിൽ ഉൾപ്പെടുന്നു.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## ഉള്ളടക്ക പട്ടിക

**[`ഇൻസ്റ്റാളേഷൻ`](#ഇൻസ്റ്റാളേഷൻ)**  **[`കോൺഫിഗറേഷൻ`](#കോൺഫിഗറേഷൻ)**  **[`എന്റിറ്റി നിർദ്ദേശങ്ങൾ`](#എന്റിറ്റി-നിർദ്ദേശങ്ങൾ)**  **[`പോപ്പ്-അപ്പ്`](#പോപ്പ്-അപ്പ്)**  **[`തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക്`](#തിരശ്ചീന-ബട്ടൺ-സ്റ്റാക്ക്)**  **[`ബട്ടൺ`](#ബട്ടൺ)**  **[`മീഡിയ പ്ലെയർ`](#മീഡിയ-പ്ലെയർ)**  **[`കവർ`](#കവർ)**  **[`സെലക്റ്റ്`](#സെലക്റ്റ്)**  **[`കാലാവസ്ഥാ നിയന്ത്രണം`](#കാലാവസ്ഥാ-നിയന്ത്രണം)**  **[`കലണ്ടർ`](#കലണ്ടർ)**  **[`വിഭജനി`](#വിഭജനി)**  **[`ഒഴിഞ്ഞ കോളം`](#ഒഴിഞ്ഞ-കോളം)**  **[`സബ്-ബട്ടണുകൾ മാത്രം`](#സബ്-ബട്ടണുകൾ-മാത്രം)**  **[`സബ്-ബട്ടണുകൾ`](#സബ്-ബട്ടണുകൾ)**  **[`കാർഡ് ലേഔട്ടുകൾ`](#കാർഡ്-ലേഔട്ടുകൾ)**  **[`വ്യവസ്ഥകൾ`](#വ്യവസ്ഥകൾ)**  **[`ടാപ്പ്, ഇരട്ട ടാപ്പ്, അമർത്തിപ്പിടിക്കൽ പ്രവർത്തനങ്ങൾ`](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ)**  **[`സ്റ്റൈലിംഗ്`](#സ്റ്റൈലിംഗ്)**  **[`ടെംപ്ലേറ്റുകൾ`](#ടെംപ്ലേറ്റുകൾ)**  **[`മൊഡ്യൂളുകൾ`](#മൊഡ്യൂളുകൾ)**  **[`പ്രാദേശികവൽക്കരണം`](#പ്രാദേശികവൽക്കരണം)**  **[`സഹായം`](#സഹായം)**  **[`സംഭാവന ചെയ്യൽ`](#സംഭാവന-ചെയ്യൽ)**  **[`സാമ്പത്തിക പിന്തുണ`](#സാമ്പത്തിക-പിന്തുണ)**

<br>

## ഇൻസ്റ്റാളേഷൻ

**Home Assistant-ന്റെ ഏറ്റവും കുറഞ്ഞ പിന്തുണയുള്ള പതിപ്പ്:** 2023.9.0

<details>

<summary>HACS ഇല്ലാതെ</summary>

<br>

1. [ഏറ്റവും പുതിയ റിലീസിൽ](https://github.com/Clooos/Bubble-Card/releases/latest) നിന്ന് `bubble-card.zip` ഡൗൺലോഡ് ചെയ്യുക
2. അത് നിങ്ങളുടെ `<config>/www` ഫോൾഡറിൽ എക്സ്ട്രാക്റ്റ് ചെയ്യുക, `bubble-card.js` ഉം അതിനൊപ്പം ഒരു `translations` ഫോൾഡറും ലഭിക്കണം (ആ ഫോൾഡറിലാണ് എഡിറ്ററിന്റെ നിഘണ്ടുക്കൾ, അതില്ലാതെ എഡിറ്റർ ഇംഗ്ലീഷിൽ തന്നെ തുടരും)
3. നിങ്ങളുടെ ഡാഷ്ബോർഡിൽ വലത് മുകൾ കോണിലുള്ള ഐക്കണിൽ ക്ലിക്ക് ചെയ്ത ശേഷം `Edit dashboard` ക്ലിക്ക് ചെയ്യുക
4. ആ ഐക്കണിൽ വീണ്ടും ക്ലിക്ക് ചെയ്ത ശേഷം `Manage resources` ക്ലിക്ക് ചെയ്യുക
5. `Add resource` ക്ലിക്ക് ചെയ്യുക
6. ഇത് കോപ്പി ചെയ്ത് പേസ്റ്റ് ചെയ്യുക: `/local/bubble-card.js?v=1`
7. `JavaScript Module` ക്ലിക്ക് ചെയ്ത ശേഷം `Create` ക്ലിക്ക് ചെയ്യുക
8. തിരികെ പോയി നിങ്ങളുടെ പേജ് റിഫ്രഷ് ചെയ്യുക
9. ഇപ്പോൾ താഴെ വലത് കോണിലുള്ള `Add card` ക്ലിക്ക് ചെയ്ത് `Bubble Card` എന്ന് തിരയാം
10. ഫയൽ ഏതെങ്കിലും അപ്ഡേറ്റ് ചെയ്ത ശേഷം `/local/bubble-card.js?v=1` എഡിറ്റ് ചെയ്ത് പതിപ്പ് സംഖ്യ കൂടുതലാക്കി മാറ്റേണ്ടിവരും

പ്രവർത്തിക്കുന്നില്ലെങ്കിൽ, നിങ്ങളുടെ ബ്രൗസർ കാഷെ ക്ലിയർ ചെയ്യാൻ ശ്രമിക്കുക.

</details>

<details>

<summary>HACS ഉപയോഗിച്ച് (ശുപാർശ ചെയ്യുന്നത്)</summary>

<br>

ഈ രീതി Home Assistant Community Store-ൽ നിന്ന് നേരിട്ട് അപ്ഡേറ്റുകൾ ലഭിക്കാൻ അനുവദിക്കുന്നു

1. HACS ഇതുവരെ ഇൻസ്റ്റാൾ ചെയ്തിട്ടില്ലെങ്കിൽ, [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) എന്നിടത്തെ നിർദ്ദേശങ്ങൾ പിന്തുടർന്ന് അത് ഡൗൺലോഡ് ചെയ്യുക
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) എന്നിടത്തെ നിർദ്ദേശങ്ങൾ പിന്തുടർന്ന് HACS-ന്റെ പ്രാരംഭ കോൺഫിഗറേഷൻ പൂർത്തിയാക്കുക
3. നിങ്ങളുടെ സൈഡ്ബാറിൽ "HACS" എന്നതിലേക്ക് പോകുക
4. "Bubble Card" എന്ന് തിരയുക, അല്ലെങ്കിൽ താഴെയുള്ള നീല ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക
5. "Download" ക്ലിക്ക് ചെയ്യുക
6. തിരികെ നിങ്ങളുടെ ഡാഷ്ബോർഡിൽ പോയി വലത് മുകൾ കോണിലുള്ള ഐക്കണിൽ ക്ലിക്ക് ചെയ്ത ശേഷം `Edit dashboard` ക്ലിക്ക് ചെയ്യുക
7. ഇപ്പോൾ താഴെ വലത് കോണിലുള്ള `Add card` ക്ലിക്ക് ചെയ്ത് `Bubble Card` എന്ന് തിരയാം

പ്രവർത്തിക്കുന്നില്ലെങ്കിൽ, നിങ്ങളുടെ ബ്രൗസർ/ആപ്പ് കാഷെ ക്ലിയർ ചെയ്യാൻ ശ്രമിക്കുക (ആവശ്യമെങ്കിൽ നിങ്ങളുടെ എല്ലാ ഉപകരണങ്ങളിലും).

#### വീഡിയോകൾ

ഘട്ടം ഘട്ടമായുള്ള വീഡിയോകൾക്കായി എന്റെ YouTube ചാനലും കാണാവുന്നതാണ്.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## കോൺഫിഗറേഷൻ

എല്ലാ ഓപ്ഷനുകളും Home Assistant എഡിറ്ററിൽ കോൺഫിഗർ ചെയ്യാം. എന്നാൽ താഴെയുള്ള ഡോക്യുമെന്റേഷനിൽ കൂടുതൽ വിശദാംശങ്ങളും YAML-ഉം കണ്ടെത്താം.

<details>

<summary><b>പ്രധാന ഓപ്ഷനുകൾ (YAML + വിവരണം)</b></summary>

| പേര് | തരം | ആവശ്യകത | പിന്തുണയുള്ള ഓപ്ഷനുകൾ | വിവരണം |
| --- | --- | --- | --- | --- |
| `type` | string | **ആവശ്യമാണ്** | `custom:bubble-card` | കാർഡിന്റെ തരം |
| `card_type` | string | **ആവശ്യമാണ്** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` അല്ലെങ്കിൽ `sub-buttons` | Bubble Card-ന്റെ തരം, താഴെ കാണുക |
| `styles` | object list | ഓപ്ഷണൽ | ഏതെങ്കിലും CSS സ്റ്റൈൽഷീറ്റുകൾ | നിങ്ങളുടെ Bubble Card CSS ഇഷ്ടാനുസൃതമാക്കാൻ അനുവദിക്കുന്നു, കാണുക [സ്റ്റൈലിംഗ്](#സ്റ്റൈലിംഗ്) |

</details>

<details>

<summary><b>ആഗോള CSS വേരിയബിളുകൾ (കാണുക <a href="#സ്റ്റൈലിംഗ്">സ്റ്റൈലിംഗ്</a>)</b></summary>

| വേരിയബിൾ | പ്രതീക്ഷിക്കുന്ന മൂല്യം | വിവരണം |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | പിന്തുണയുള്ള എല്ലാ ഘടകങ്ങൾക്കുമുള്ള ബോർഡർ റേഡിയസ് |
| `--bubble-main-background-color` | `color` | പിന്തുണയുള്ള എല്ലാ ഘടകങ്ങൾക്കുമുള്ള പ്രധാന പശ്ചാത്തല നിറം |
| `--bubble-secondary-background-color` | `color` | പിന്തുണയുള്ള എല്ലാ ഘടകങ്ങൾക്കുമുള്ള ദ്വിതീയ പശ്ചാത്തല നിറം |
| `--bubble-accent-color` | `color` | പിന്തുണയുള്ള എല്ലാ ഘടകങ്ങൾക്കുമുള്ള ആക്സന്റ് നിറം |
| `--bubble-icon-border-radius` | `px` | പിന്തുണയുള്ള എല്ലാ ഘടകങ്ങൾക്കുമുള്ള ഐക്കൺ ബോർഡർ റേഡിയസ് |
| `--bubble-icon-background-color` | `color` | പിന്തുണയുള്ള എല്ലാ ഘടകങ്ങൾക്കുമുള്ള ഐക്കൺ പശ്ചാത്തല നിറം |
| `--bubble-sub-button-border-radius` | `px` | എല്ലാ സബ്-ബട്ടണുകൾക്കുമുള്ള ബോർഡർ റേഡിയസ് |
| `--bubble-sub-button-background-color` | `color` | എല്ലാ സബ്-ബട്ടണുകൾക്കുമുള്ള പശ്ചാത്തല നിറം |
| `--bubble-box-shadow` | കാണുക [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | പിന്തുണയുള്ള എല്ലാ ഘടകങ്ങൾക്കുമുള്ള ബോക്സ് ഷാഡോ |
| `--bubble-border` | കാണുക [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | പിന്തുണയുള്ള എല്ലാ കാർഡുകൾക്കുമുള്ള ബോർഡർ |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card-നെക്കുറിച്ചും അതിന്റെ കഴിവുകളെക്കുറിച്ചും അറിയാൻ ഈ [വീഡിയോ](https://www.youtube.com/watch?v=0hSQOlBxKKI) കാണുക.** എന്റെ YouTube ചാനൽ വളരെ പുതിയതാണ്, Home Assistant-നെയും Bubble Card-നെയും കുറിച്ചുള്ള ട്യൂട്ടോറിയലുകളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു. എന്റെ ചാനലിന്റെ ദൃശ്യപരത വർദ്ധിപ്പിക്കാൻ സഹായിക്കുന്നതിന് സബ്സ്ക്രൈബ് ചെയ്യാൻ മടിക്കേണ്ട. മുൻകൂട്ടി നന്ദി!

<br>

---

<br>

## എന്റിറ്റി നിർദ്ദേശങ്ങൾ

Home Assistant 2026.6 മുതൽ, കാർഡ് പിക്കറിൽ ഒരു എന്റിറ്റി തിരഞ്ഞെടുക്കുമ്പോൾ തയ്യാറായ ഏതാനും കാർഡുകൾ നിർദ്ദേശിക്കപ്പെടുന്നു, ആ പട്ടികയിലേക്ക് Bubble Card സ്വന്തം പാചകക്കുറിപ്പുകൾ ചേർക്കുന്നു. ഒരു ലൈറ്റ് തിരഞ്ഞെടുത്താൽ ബ്രൈറ്റ്നസ് സ്ലൈഡറുള്ള ഒരു കാർഡ് ലഭിക്കും, നിങ്ങളുടെ ലൈറ്റ് പിന്തുണയ്ക്കുന്നെങ്കിൽ കളർ ടെമ്പറേച്ചർ, നിറം, സാച്ചുറേഷൻ വകഭേദങ്ങളും ലഭിക്കും. ഒരു കവർ തിരഞ്ഞെടുത്താൽ അതിന്റെ പൊസിഷൻ സ്ലൈഡർ ലഭിക്കും, ഒരു മീഡിയ പ്ലെയർ തിരഞ്ഞെടുത്താൽ അതിന്റെ സോഴ്സ് പട്ടികയോടു കൂടിയ വകഭേദവും ലഭിക്കും, ഒരു വാക്വം തിരഞ്ഞെടുത്താൽ അതിന്റെ സ്റ്റാർട്ട്, പോസ്, ഡോക്ക് ബട്ടണുകൾ ലഭിക്കും. ഓരോ നിർദ്ദേശവും ലൈവ് പ്രിവ്യൂ ആയി കാണിക്കുന്ന സാധാരണ Bubble Card കോൺഫിഗറേഷനാണ്, അതിനാൽ ഏറ്റവും അടുത്തത് എടുത്ത് പതിവുപോലെ എഡിറ്റ് ചെയ്യാം.

നിങ്ങൾക്ക് എന്ത് ലഭിക്കുന്നു എന്നത് നിങ്ങളുടെ എന്റിറ്റിക്ക് യഥാർത്ഥത്തിൽ എന്തു ചെയ്യാനാകും എന്നതിനെ ആശ്രയിച്ചിരിക്കുന്നു: ബ്രൈറ്റ്നസ് ചാനൽ ഇല്ലാത്ത ലൈറ്റിന് സ്ലൈഡറിനു പകരം ടോഗിൾ ലഭിക്കും, ടിൽറ്റ് ചെയ്യാനാകാത്ത കവറിന് ടിൽറ്റ് വകഭേദം ലഭിക്കില്ല, കാലാവസ്ഥാ നിയന്ത്രണ എന്റിറ്റിക്ക് പ്രീസെറ്റ് മോഡുകൾ ഉള്ളപ്പോൾ മാത്രമേ അവ ലഭിക്കൂ. ബാധകമാകുമ്പോൾ Bubble Card നിർദ്ദേശങ്ങൾക്ക് താഴെ പതിവ് എൻട്രികൾ വരും: ആ എന്റിറ്റി തരത്തിനായുള്ള പ്രത്യേക കാർഡ്, ഒരു സാധാരണ ബട്ടൺ, ഒരു സ്ലൈഡർ.

> [!TIP]
> മൊഡ്യൂളുകൾക്ക് ആ പട്ടികയിലേക്ക് സ്വന്തം നിർദ്ദേശങ്ങൾ ചേർക്കാം, [മൊഡ്യൂളുകൾ](#മൊഡ്യൂളുകൾ) കാണുക.

<br>

---

<br>

## പോപ്പ്-അപ്പ്

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

ഈ കാർഡ് ഏതെങ്കിലും ഉള്ളടക്കത്തോടെ ഒരു പോപ്പ്-അപ്പ് സൃഷ്ടിക്കാൻ അനുവദിക്കുന്നു. ഓരോ പോപ്പ്-അപ്പും **സ്വതവേ മറഞ്ഞിരിക്കുന്നു**, അതിന്റെ ലിങ്ക് ലക്ഷ്യമാക്കി (ഉദാ. `'#pop-up-name'`), `navigate` [പ്രവർത്തനത്തെ](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) പിന്തുണയ്ക്കുന്ന ഏതെങ്കിലും കാർഡ് ഉപയോഗിച്ച്, അല്ലെങ്കിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്ന [തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക്](#തിരശ്ചീന-ബട്ടൺ-സ്റ്റാക്ക്) ഉപയോഗിച്ച് അത് തുറക്കാം.

> [!TIP]
> ### പോപ്പ്-അപ്പ് ട്രിഗർ 
> ഏതെങ്കിലും എന്റിറ്റിയുടെ അവസ്ഥയെ അടിസ്ഥാനമാക്കി ഒരു പോപ്പ്-അപ്പ് തുറക്കാൻ ഈ ഫീച്ചർ അനുവദിക്കുന്നു, ഉദാഹരണത്തിന്, ഒരു വ്യക്തി നിങ്ങളുടെ വീടിന്റെ മുന്നിലുള്ളപ്പോൾ ക്യാമറയോടെ ഒരു "Security" പോപ്പ്-അപ്പ് നിങ്ങൾക്ക് തുറക്കാം. ഒരു ടോഗിൾ ഹെൽപ്പർ (input_boolean) സൃഷ്ടിച്ച് ഒരു ഓട്ടോമേഷനിൽ അതിന്റെ തുറക്കൽ/അടയ്ക്കൽ ട്രിഗർ ചെയ്യാനും കഴിയും.
> <details>
> <summary>ഒരു <code>binary_sensor</code> <code>on</code> ആയിരിക്കുമ്പോൾ ഒരു പോപ്പ്-അപ്പ് തുറക്കൽ</summary>
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
> ### പോപ്പ്-അപ്പ് അടയ്ക്കാനുള്ള വ്യത്യസ്ത വഴികൾ 
> ഒരു പോപ്പ്-അപ്പ് അടയ്ക്കാൻ പല വഴികളുണ്ട്. ഉദാഹരണത്തിന്, പോപ്പ്-അപ്പിന്റെ ഹെഡറിൽ നിന്ന് താഴേക്ക് സ്വൈപ്പ് ചെയ്യാം, പോപ്പ്-അപ്പിനുള്ളിൽ താഴേക്ക് ഒരു നീണ്ട സ്വൈപ്പ് ചെയ്യാം, ഡെസ്ക്ടോപ്പിൽ Escape അമർത്താം, URL-ലെ ഹാഷ് നീക്കം ചെയ്യാം അല്ലെങ്കിൽ ക്ലോസ് ബട്ടൺ അമർത്തിയാൽ മതി.
>


### പോപ്പ്-അപ്പ് ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| പേര് | തരം | ആവശ്യകത | പിന്തുണയുള്ള ഓപ്ഷനുകൾ | വിവരണം |
| --- | --- | --- | --- | --- |
| `hash` | string | **ആവശ്യമാണ്** | ' ' ഉള്ള ഏതെങ്കിലും യുണീക്ക് ഹാഷ് (ഉദാ. `'#kitchen'`) | ഇത് നിങ്ങളുടെ പോപ്പ്-അപ്പ് തുറക്കുന്ന വിധമാണ് |
| `popup_style` | string | ഓപ്ഷണൽ | `bubble` (സ്വതവേ) അല്ലെങ്കിൽ `classic` | പോപ്പ്-അപ്പിന്റെ ദൃശ്യ ശൈലി നിർവചിക്കുക |
| `popup_mode` | string | ഓപ്ഷണൽ | `default` (സ്വതവേ), `fit-content`, `centered` അല്ലെങ്കിൽ `adaptive-dialog` | പോപ്പ്-അപ്പിന്റെ ലേഔട്ട് മോഡ് നിർവചിക്കുക |
| `with_bottom_offset` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | `popup_mode: fit-content` അല്ലെങ്കിൽ `adaptive-dialog` ഉപയോഗിക്കുമ്പോൾ മാത്രം ബാധകം. മൊബൈലിൽ ഒരു ബോട്ടം ഓഫ്സെറ്റ് പ്രയോഗിക്കുന്നു, നിങ്ങളുടെ ഡാഷ്ബോർഡിൽ ഒരു ഫൂട്ടർ കാർഡ് ഉള്ളപ്പോൾ ഉപകാരപ്രദമാണ്. |
| `full_width_on_mobile` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | `popup_mode: centered` ഉപയോഗിക്കുമ്പോൾ മാത്രം ബാധകം. മൊബൈലിൽ പോപ്പ്-അപ്പ് പൂർണ്ണ സ്ക്രീൻ വീതിയിലേക്ക് വികസിപ്പിക്കുന്നു, ചെറിയ ഡിസ്പ്ലേകളിൽ ഉപകാരപ്രദമാണ്. |
| `performance_mode` | string | ഓപ്ഷണൽ | `default` (സ്വതവേ) അല്ലെങ്കിൽ `performance` | പോപ്പ്-അപ്പ് തുറക്കുന്ന ആനിമേഷൻ ഒപ്റ്റിമൈസ് ചെയ്യുക. `performance` ഉള്ളടക്ക റെൻഡറിംഗും പശ്ചാത്തല ബ്ലർും അല്പം വൈകിപ്പിക്കുന്നു, ക്രമീകരിച്ചിട്ടുണ്ടെങ്കിൽ ബാക്ക്ഡ്രോപ്പ് ബ്ലർും അപ്രാപ്തമാക്കുന്നു. |
| `auto_close` | string | ഓപ്ഷണൽ | മില്ലിസെക്കന്റുകളിലെ ഒരു ടൈംഔട്ട് (ഉദാ. 10 സെക്കൻഡിന് `10000`) | ഒരു ടൈംഔട്ടിന് ശേഷം പോപ്പ്-അപ്പ് സ്വയമേവ അടയ്ക്കുക |
| `close_on_click` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | ഏതെങ്കിലും ഇന്ററാക്ഷന് ശേഷം പോപ്പ്-അപ്പ് സ്വയമേവ അടയ്ക്കുക |
| `close_by_clicking_outside` | boolean | ഓപ്ഷണൽ | `true` (സ്വതവേ) അല്ലെങ്കിൽ `false` | പുറത്ത് ക്ലിക്ക് ചെയ്ത് പോപ്പ്-അപ്പ് അടയ്ക്കുക |
| `width_desktop` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും CSS മൂല്യം | ഡെസ്ക്ടോപ്പിലെ വീതി (മൊബൈലിൽ സ്വതവേ `100%`) |
| `margin` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും CSS മൂല്യം | മൊബൈലിൽ നിങ്ങളുടെ പോപ്പ്-അപ്പ് നന്നായി സെന്റർ ചെയ്യപ്പെടാത്തപ്പോൾ **മാത്രം** ഇത് ഉപയോഗിക്കുക (ഉദാ. `13px`) |
| `margin_top_mobile` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും CSS മൂല്യം | മൊബൈലിലെ ടോപ്പ് മാർജിൻ (ഉദാ. നിങ്ങളുടെ ഹെഡർ മറഞ്ഞിരിക്കുകയാണെങ്കിൽ `-56px`) |
| `margin_top_desktop` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും CSS മൂല്യം | ഡെസ്ക്ടോപ്പിലെ ടോപ്പ് മാർജിൻ (ഉദാ. പകുതി വലുപ്പമുള്ള പോപ്പ്-അപ്പിന് `50vh` അല്ലെങ്കിൽ `400px` ഉറപ്പിച്ച ഉയരത്തിന് `calc(100vh - 400px)`) |
| `bg_color` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും hex, rgb അല്ലെങ്കിൽ rgba മൂല്യം | നിങ്ങളുടെ പോപ്പ്-അപ്പിന്റെ പശ്ചാത്തല നിറം (ഉദാ. വെളുത്ത പശ്ചാത്തലത്തിന് `#ffffff`) |
| `bg_opacity` | string | ഓപ്ഷണൽ | `0` മുതൽ `100` വരെ ഏതെങ്കിലും മൂല്യം | നിങ്ങളുടെ പോപ്പ്-അപ്പിന്റെ പശ്ചാത്തല അതാര്യത (ഉദാ. സുതാര്യതയില്ലാതെ `100`) |
| `bg_blur` | string | ഓപ്ഷണൽ | `0` മുതൽ `100` വരെ ഏതെങ്കിലും മൂല്യം | നിങ്ങളുടെ പോപ്പ്-അപ്പിന്റെ പശ്ചാത്തല ബ്ലർ ഇഫക്ട്, **`bg_opacity`, `100` ആയി സെറ്റ് ചെയ്തിട്ടില്ലെങ്കിൽ മാത്രമേ ഇത് പ്രവർത്തിക്കൂ** (ഉദാ. ബ്ലർ ഇല്ലാതെ `0`)|
| `shadow_opacity` | string | ഓപ്ഷണൽ | `0` മുതൽ `100` വരെ ഏതെങ്കിലും മൂല്യം | നിങ്ങളുടെ പോപ്പ്-അപ്പിന്റെ ഷാഡോ അതാര്യത (ഉദാ. അത് മറയ്ക്കാൻ `0`) |
| `hide_backdrop` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | എല്ലാ പോപ്പ്-അപ്പുകളിലും ബാക്ക്ഡ്രോപ്പ് അപ്രാപ്തമാക്കാൻ നിങ്ങളുടെ പ്രധാന ഡാഷ്ബോർഡിലെ ആദ്യ പോപ്പ്-അപ്പിൽ ഇത് true ആയി സെറ്റ് ചെയ്യുക. |
| `background_update` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | പോപ്പ്-അപ്പ് ഉള്ളടക്കം പശ്ചാത്തലത്തിൽ അപ്ഡേറ്റ് ചെയ്യുക (ശുപാർശ ചെയ്യുന്നില്ല) |
| `trigger` | object അല്ലെങ്കിൽ list | ഓപ്ഷണൽ | [വ്യവസ്ഥകൾ](#വ്യവസ്ഥകൾ) കാണുക | വ്യവസ്ഥകൾ പാലിക്കപ്പെടുമ്പോൾ ഈ പോപ്പ്-അപ്പ് തുറക്കുക |
| `trigger_entity` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും എന്റിറ്റി | ഏതെങ്കിലും എന്റിറ്റിയുടെ അവസ്ഥയെ അടിസ്ഥാനമാക്കി ഈ പോപ്പ്-അപ്പ് തുറക്കുക, `trigger` ന്റെ ലളിതമായ രൂപം |
| `trigger_state` | string | ഓപ്ഷണൽ (`trigger_entity` നിർവചിച്ചിട്ടുണ്ടെങ്കിൽ **ആവശ്യമാണ്**) | ഏതെങ്കിലും എന്റിറ്റി അവസ്ഥ | പോപ്പ്-അപ്പ് തുറക്കാനുള്ള എന്റിറ്റി അവസ്ഥ |
| `trigger_close` | boolean | ഓപ്ഷണൽ | `true` (സ്വതവേ) അല്ലെങ്കിൽ `false` | വ്യവസ്ഥകൾ പാലിക്കപ്പെടാതാകുമ്പോൾ പോപ്പ്-അപ്പ് അടയ്ക്കുക. പഴയ `trigger_entity`, `trigger_state` ജോഡി ഉപയോഗിക്കുമ്പോൾ പകരം സ്വതവേ `false` ആകും |
| `open_action` | object | ഓപ്ഷണൽ | കാണുക [പ്രവർത്തനങ്ങൾ](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | പോപ്പ്-അപ്പ് തുറക്കുമ്പോൾ ഒരു പ്രവർത്തനം ട്രിഗർ ചെയ്യുക |
| `close_action` | object | ഓപ്ഷണൽ | കാണുക [പ്രവർത്തനങ്ങൾ](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | പോപ്പ്-അപ്പ് അടയ്ക്കുമ്പോൾ ഒരു പ്രവർത്തനം ട്രിഗർ ചെയ്യുക |
| `show_header` | boolean | ഓപ്ഷണൽ | `true` (സ്വതവേ) അല്ലെങ്കിൽ `false` | പോപ്പ്-അപ്പിന്റെ ഹെഡർ പൂർണ്ണമായി കാണിക്കുക/മറയ്ക്കുക |
| `show_previous_button` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | ക്ലോസ് ബട്ടണിനടുത്ത് ഒരു പ്രിവിയസ് ബട്ടൺ കാണിക്കുകയും ലഭ്യമാകുമ്പോൾ മുൻ പോപ്പ്-അപ്പിലേക്ക് തിരികെ നാവിഗേറ്റ് ചെയ്യുകയും ചെയ്യുക |
| `show_close_button` | boolean | ഓപ്ഷണൽ | `true` (സ്വതവേ) അല്ലെങ്കിൽ `false` | ഹെഡറിന്റെ ബാക്കി ഭാഗം ദൃശ്യമായി നിലനിർത്തിക്കൊണ്ട് ക്ലോസ് ബട്ടൺ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `buttons_position` | string | ഓപ്ഷണൽ | `right` (സ്വതവേ) അല്ലെങ്കിൽ `left` | ഹെഡറിലെ ക്ലോസ്, പ്രിവിയസ് ബട്ടണുകളുടെ സ്ഥാനം |
| `cards` | list | ഓപ്ഷണൽ | ഏതെങ്കിലും Bubble Card, Home Assistant കാർഡ് അല്ലെങ്കിൽ കസ്റ്റം കാർഡ് | നിങ്ങളുടെ പോപ്പ്-അപ്പിന്റെ ഉള്ളടക്കം നിർവചിക്കുക. താഴെയുള്ള പോപ്പ്-അപ്പ് ഉദാഹരണം കാണുക. |
| [ബട്ടണിന്റെ എല്ലാ സെറ്റിംഗുകളും](#ബട്ടൺ) പോപ്പ്-അപ്പിന്റെ ഹെഡറിനായി നിങ്ങൾക്ക് ലഭ്യമാണ്. | | ഓപ്ഷണൽ | | നിർവചിച്ചിട്ടില്ലെങ്കിൽ ഹെഡർ കാണിക്കില്ല |

</details>

<details>

<summary><b>CSS വേരിയബിളുകൾ (കാണുക <a href="#സ്റ്റൈലിംഗ്">സ്റ്റൈലിംഗ്</a>)</b></summary>

| വേരിയബിൾ | പ്രതീക്ഷിക്കുന്ന മൂല്യം | വിവരണം |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | പോപ്പ്-അപ്പിനുള്ള ബോർഡർ റേഡിയസ് |
| `--bubble-pop-up-main-background-color` | `color` | പോപ്പ്-അപ്പിന്റെ പിന്തുണയുള്ള ഘടകങ്ങൾക്കുള്ള പ്രധാന പശ്ചാത്തല നിറം |
| `--bubble-pop-up-background-color` | `color` | പോപ്പ്-അപ്പിന്റെ പശ്ചാത്തല നിറം |
| `--bubble-backdrop-background-color` | `color` | ബാക്ക്ഡ്രോപ്പിന്റെ പശ്ചാത്തല നിറം |
| [ബട്ടണിന്റെ എല്ലാ CSS വേരിയബിളുകളും](#ബട്ടൺ-ഓപ്ഷനുകൾ) പോപ്പ്-അപ്പിന്റെ ഹെഡറിനായി നിങ്ങൾക്ക് ലഭ്യമാണ്. | | |

</details>


### സ്വതന്ത്ര പോപ്പ്-അപ്പ് ഫോർമാറ്റ് (v3.2.0+)

v3.2.0 മുതൽ, പോപ്പ്-അപ്പുകൾ ഒരു പുതിയ സ്വതന്ത്ര ഫോർമാറ്റ് ഉപയോഗിക്കുന്നു, ഇവിടെ ഉള്ളടക്ക കാർഡുകൾ `cards` ഓപ്ഷൻ ഉപയോഗിച്ച് പോപ്പ്-അപ്പിനുള്ളിൽ നേരിട്ട് നിർവചിക്കപ്പെടുന്നു. ഇത് മെച്ചപ്പെട്ട പെർഫോമൻസും ഒരു പുതിയ സെക്ഷൻ അധിഷ്ഠിത ഡ്രാഗ്-ആൻഡ്-ഡ്രോപ്പ് എഡിറ്റിംഗ് അനുഭവവും നൽകുന്നു.


#### ഉദാഹരണങ്ങൾ

<details>

<summary>ഒരു പോപ്പ്-അപ്പ് (സ്വതന്ത്ര ഫോർമാറ്റ്)</summary>

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

<summary>പോപ്പ്-അപ്പ് തുറക്കാനുള്ള ഒരു ബട്ടൺ</summary>

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

## തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക്

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

ഈ കാർഡ് പോപ്പ്-അപ്പ് കാർഡിന് ഒരു നല്ല കൂട്ടാളിയാണ്, അനുബന്ധ പോപ്പ്-അപ്പുകൾ തുറക്കാൻ ഇത് അനുവദിക്കുന്നു. നിങ്ങളുടെ ഡാഷ്ബോർഡിന്റെ ഏതെങ്കിലും പേജ് തുറക്കാനും ഇത് അനുവദിക്കുന്നു. കൂടാതെ, നിങ്ങളുടെ മോഷൻ/ഒക്യുപൻസി സെൻസറുകൾ ചേർക്കാം, അതുവഴി നിങ്ങൾ പുതുതായി പ്രവേശിച്ച മുറി അനുസരിച്ച് ബട്ടണുകളുടെ ക്രമം അഡാപ്റ്റ് ചെയ്യും. ഈ കാർഡ് സ്ക്രോൾ ചെയ്യാവുന്നതാണ്, എപ്പോഴും ദൃശ്യമായി തുടരുന്നു, ഒരു ഫൂട്ടറായി പ്രവർത്തിക്കുന്നു.

> [!IMPORTANT]  
> ഈ കാർഡ് നിങ്ങളുടെ വ്യൂവിലെ അവസാനത്തേത് ആയിരിക്കണം (എല്ലാ കാർഡിനും പോപ്പ്-അപ്പിനും ശേഷം). ഇത് ഒരു സ്റ്റാക്കിനുള്ളിലും ആയിരിക്കാൻ പാടില്ല.

### തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക് ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| പേര് | തരം | ആവശ്യകത | പിന്തുണയുള്ള ഓപ്ഷനുകൾ | വിവരണം |
| --- | --- | --- | --- | --- |
| `1_link` | string | **ആവശ്യമാണ്** | ' ' ഉള്ള പോപ്പ്-അപ്പ് ഹാഷ് (ഉദാ. `'#kitchen'`) അല്ലെങ്കിൽ ഏതെങ്കിലും ലിങ്ക് | തുറക്കാനുള്ള ഒരു ലിങ്ക് |
| `1_name` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും സ്ട്രിംഗ് | നിങ്ങളുടെ ബട്ടണിനുള്ള ഒരു പേര് |
| `1_icon` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും `mdi:` ഐക്കൺ | നിങ്ങളുടെ ബട്ടണിനുള്ള ഒരു ഐക്കൺ |
| `1_entity` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും ലൈറ്റ് അല്ലെങ്കിൽ ലൈറ്റ് ഗ്രൂപ്പ് | ആ ലൈറ്റിന്റെ നിറം പശ്ചാത്തലത്തിൽ പ്രദർശിപ്പിക്കുക |
| `1_pir_sensor` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും ബൈനറി സെൻസർ | `auto_order`-ന് കുറഞ്ഞത് ഒരു pir സെൻസറെങ്കിലും അല്ലെങ്കിൽ കൂടുതൽ വേണം, യഥാർത്ഥത്തിൽ ഇത് ഏതെങ്കിലും എന്റിറ്റി തരത്തിലും പ്രവർത്തിക്കുന്നു, ഉദാഹരണത്തിന് നിങ്ങൾക്ക് ലൈറ്റ് ഗ്രൂപ്പുകൾ ചേർക്കാം, അവസാനം മാറിയ അവസ്ഥകൾ അനുസരിച്ച് ക്രമം മാറും. |
| `auto_order` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | `_pir_sensor`-ന്റെ അവസാനം മാറിയ സമയം അനുസരിച്ച് ബട്ടണുകളുടെ ക്രമം മാറ്റുക, നിങ്ങളുടെ കോഡിൽ ഏതെങ്കിലും `_pir_sensor` ഇല്ലെങ്കിൽ **ഇത് `false` ആയിരിക്കണം** |
| `margin` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും CSS മൂല്യം | മൊബൈലിൽ നിങ്ങളുടെ `horizontal-buttons-stack` നന്നായി സെന്റർ ചെയ്യപ്പെടാത്തപ്പോൾ **മാത്രം** ഇത് ഉപയോഗിക്കുക (ഉദാ. `13px`) |
| `width_desktop` | string | ഓപ്ഷണൽ | ഏതെങ്കിലും CSS മൂല്യം | ഡെസ്ക്ടോപ്പിലെ വീതി (മൊബൈലിൽ സ്വതവേ `100%`) |
| `is_sidebar_hidden` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | ഡെസ്ക്ടോപ്പിൽ സൈഡ്ബാർ മറഞ്ഞിരിക്കുകയാണെങ്കിൽ തിരശ്ചീന ബട്ടൺ സ്റ്റാക്കിന്റെ സ്ഥാനം ശരിയാക്കുക (നിങ്ങൾ തന്നെ അത് മറയ്ക്കാൻ മാറ്റം വരുത്തിയിട്ടുണ്ടെങ്കിൽ മാത്രം) |
| `rise_animation` | boolean | ഓപ്ഷണൽ | `true` (സ്വതവേ) അല്ലെങ്കിൽ `false` | പേജ് ലോഡ് ആയാൽ ഉടൻ സജീവമാകുന്ന ആനിമേഷൻ അപ്രാപ്തമാക്കാൻ ഇത് `false` ആയി സെറ്റ് ചെയ്യുക |
| `highlight_current_view` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | ഒരു സുഗമമായ ആനിമേഷനോടെ നിലവിലെ ഹാഷ്/വ്യൂ ഹൈലൈറ്റ് ചെയ്യുക |
| `hide_gradient` | boolean | ഓപ്ഷണൽ | `true` അല്ലെങ്കിൽ `false` (സ്വതവേ) | ഗ്രേഡിയന്റ് മറയ്ക്കാൻ ഇത് `false` ആയി സെറ്റ് ചെയ്യുക |

> [!IMPORTANT]  
> അക്കത്തിൽ തുടങ്ങുന്ന വേരിയബിളുകൾ നിങ്ങളുടെ ബട്ടണുകളെ നിർവചിക്കുന്നു, കൂടുതൽ ബട്ടണുകൾ ചേർക്കാൻ ഈ അക്കം മാറ്റുക (താഴെയുള്ള ഉദാഹരണം കാണുക).

</details>

<details>

<summary><b>CSS വേരിയബിളുകൾ (കാണുക <a href="#സ്റ്റൈലിംഗ്">സ്റ്റൈലിംഗ്</a>)</b></summary>

| വേരിയബിൾ | പ്രതീക്ഷിക്കുന്ന മൂല്യം | വിവരണം |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക് ബട്ടണുകൾക്കുള്ള ബോർഡർ റേഡിയസ് |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക് ബട്ടണുകൾക്കുള്ള പശ്ചാത്തല നിറം |

</details>


#### ഉദാഹരണം

<details>

<summary>ഒക്യുപൻസി സെൻസറുകൾ അടിസ്ഥാനമാക്കി സ്വയം പുനഃക്രമീകരിക്കുന്ന ഒരു തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക്</summary>

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

## ബട്ടൺ

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

ഈ കാർഡ് വളരെ ബഹുമുഖമാണ്. ഇത് ഒരു **സ്വിച്ച്**, ഒരു **സ്ലൈഡർ**, ഒരു **സ്റ്റേറ്റ്** അല്ലെങ്കിൽ ഒരു **പേര്/ടെക്സ്റ്റ്** ബട്ടണായി ഉപയോഗിക്കാം.

> [!TIP]
> ### എല്ലാ ബട്ടൺ തരങ്ങളും തമ്മിലുള്ള വ്യത്യാസങ്ങൾ എന്തൊക്കെയാണ്?
>
> - **സ്വിച്ച് ബട്ടൺ:** ഇതാണ് സ്ഥിരസ്ഥിതി ബട്ടൺ തരം. സ്ഥിരസ്ഥിതിയായി, ഇത് ഒരു entity ടോഗിൾ ചെയ്യുന്നു, അതിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം entity യുടെ അവസ്ഥ അല്ലെങ്കിൽ ലൈറ്റിന്റെ നിറം അനുസരിച്ച് മാറുന്നു. **Tap action on card** വിഭാഗത്തിൽ അതിന്റെ പ്രവർത്തനം മാറ്റാവുന്നതാണ്.
>
> - **സ്ലൈഡർ ബട്ടൺ:** ഈ ബട്ടൺ തരം ക്രമീകരിക്കാവുന്ന റേഞ്ചുകളുള്ള entities നിയന്ത്രിക്കാൻ അനുവദിക്കുന്നു. ലൈറ്റുകൾ ഡിം ചെയ്യാൻ ഇത് അനുയോജ്യമാണ്, അതിന്റെ ഫിൽ നിറം ലൈറ്റിന്റെ നിറത്തിനനുസരിച്ച് മാറും. ബാറ്ററി ലെവൽ പോലുള്ള മൂല്യങ്ങൾ പ്രദർശിപ്പിക്കാനും ഇത് ഉപയോഗിക്കാം.
>   സ്ലൈഡറുകൾക്ക് പിന്തുണയുള്ള entities:
>   - ലൈറ്റ് (ബ്രൈറ്റ്നസ്)
>   - മീഡിയ പ്ലെയർ (വോളിയം)
>   - കവർ (പൊസിഷൻ)
>   - ഫാൻ (ശതമാനം)
>   - കാലാവസ്ഥാ നിയന്ത്രണം (താപനില)
>   - Input number, number (മൂല്യം)
>   - ബാറ്ററി സെൻസർ (ശതമാനം, റീഡ് ഒൺലി)
>
>   **Slider settings** ൽ entity ഫിൽട്ടർ പ്രവർത്തനരഹിതമാക്കി, ന്യൂമെറിക് സ്റ്റേറ്റുള്ള ഏതൊരു entity ക്കും ഇത് ഉപയോഗിക്കാം, തുടർന്ന് `min`, `max` മൂല്യങ്ങൾ നിർവചിക്കുക. ഈ ഓപ്ഷൻ റീഡ് ഒൺലി ആണ്.
>
> - **സ്റ്റേറ്റ് ബട്ടൺ:** ഒരു സെൻസറിൽ നിന്നോ ഏതൊരു entity യിൽ നിന്നോ വിവരങ്ങൾ പ്രദർശിപ്പിക്കാൻ ഏറ്റവും അനുയോജ്യം. നിങ്ങൾ അതിൽ അമർത്തുമ്പോൾ, entity യുടെ "More info" പാനൽ കാണിക്കും. അതിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറില്ല.
>
> - **പേര്/ടെക്സ്റ്റ് ബട്ടൺ:** entity ആവശ്യമില്ലാത്ത ഒരേയൊരു ബട്ടൺ തരം. ഒരു ചെറിയ ടെക്സ്റ്റ്, പേര് അല്ലെങ്കിൽ ടൈറ്റിൽ പ്രദർശിപ്പിക്കാൻ ഇത് അനുവദിക്കുന്നു. ഇതിലേക്കും പ്രവർത്തനങ്ങൾ ചേർക്കാം. അതിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറില്ല.

### ബട്ടൺ ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | നിയന്ത്രിക്കാനുള്ള ഒരു entity |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | നിങ്ങളുടെ ബട്ടണിന്റെ പെരുമാറ്റം |
| `name` | string | Optional | Any string | നിങ്ങളുടെ ബട്ടണിനുള്ള ഒരു പേര്, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity യുടെ പേര് പ്രദർശിപ്പിക്കും |
| `icon` | string | Optional | Any `mdi:` icon | നിങ്ങളുടെ ബട്ടണിനുള്ള ഒരു ഐക്കൺ, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity ഐക്കൺ അല്ലെങ്കിൽ `entity-picture` പ്രദർശിപ്പിക്കും |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` ക്കു പകരം ഐക്കണിന് മുൻഗണന നൽകുക |
| `use_accent_color` | boolean | Optional (`false` default) | **ലൈറ്റുകൾക്ക് മാത്രം.** ലൈറ്റിന്റെ നിറത്തിനു പകരം തീമിന്റെ accent നിറം ഉപയോഗിക്കുക.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസ്ഥ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_name` | boolean | Optional | `true` (default) or `false` | പേര് കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ഐക്കൺ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം മാറിയ സമയം കാണിക്കുക |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം അപ്‌ഡേറ്റ് ചെയ്ത സമയം കാണിക്കുക |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ ഒരു attribute അതിന്റെ `name` ന് താഴെ കാണിക്കുക |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | കാണിക്കേണ്ട attribute (ഉദാ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | ഉള്ളടക്കം കണ്ടെയ്നറിന്റെ വലുപ്പം കവിയുമ്പോൾ ടെക്സ്റ്റ് സ്ക്രോൾ ചെയ്യാൻ അനുവദിക്കുക |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | ബട്ടൺ ക്ലിക്കിലെ സ്ഥിരസ്ഥിതി പ്രവർത്തനങ്ങൾ മാറ്റാൻ അനുവദിക്കുന്നു. |
| `tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും |
| `double_tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ഇരട്ട ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും |
| `hold_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ അമർത്തിപ്പിടിക്കുമ്പോഴുള്ള പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, കാണുക [card layouts](#കാർഡ്-ലേഔട്ടുകൾ) |
| `rows` | number | Optional | Any number | വരികളുടെ എണ്ണം (ഉയരം) (ഉദാ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#സബ്-ബട്ടണുകൾ) | വലതുവശത്ത് സ്ഥിരപ്പെടുത്തിയ ഇഷ്ടാനുസൃത ബട്ടണുകൾ ചേർക്കുക |

</details>

<details>

<summary><b>CSS variables (see <a href="#സ്റ്റൈലിംഗ്">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | ബട്ടണിലെ പിന്തുണയുള്ള ഘടകങ്ങൾക്കുള്ള പ്രധാന ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-button-border-radius` | `px` | ബട്ടണിന്റെ border radius |
| `--bubble-button-icon-border-radius` | `px` | ബട്ടൺ ഐക്കൺ കണ്ടെയ്നറിന്റെ border radius |
| `--bubble-button-icon-background-color` | `color` | ബട്ടൺ ഐക്കൺ കണ്ടെയ്നറിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-light-white-color` | `color` | ലൈറ്റ് ബട്ടണുകൾ/സ്ലൈഡറുകളുടെ സ്ഥിരസ്ഥിതി വെള്ള നിറം മാറ്റിസ്ഥാപിക്കുക |
| `--bubble-light-color` | `color` | ലൈറ്റ് ബട്ടണുകൾ/സ്ലൈഡറുകളുടെ നിറം മാറ്റിസ്ഥാപിക്കുക (RGB ലൈറ്റുകൾക്കും) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | ബട്ടണിനുള്ള box shadow |

</details>

`button_type`, `slider` ആയി സെറ്റ് ചെയ്തിരിക്കുമ്പോൾ മാത്രമേ ഈ ഓപ്ഷനുകൾ ലഭ്യമാകൂ.

<details>

<summary><b>സ്ലൈഡർ ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | സ്ലൈഡറിന്റെ ഏറ്റവും കുറഞ്ഞ മൂല്യം. ഇഷ്ടാനുസൃത സ്ലൈഡറുകൾക്ക്.                                                    |
| `max_value`             | number  | Optional                        | സ്ലൈഡറിന്റെ ഏറ്റവും കൂടിയ മൂല്യം. ഇഷ്ടാനുസൃത സ്ലൈഡറുകൾക്ക്.                                                    |
| `step`                  | number  | Optional                        | സ്ലൈഡറിന്റെ സ്റ്റെപ്പ് മൂല്യം.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | സ്ലൈഡർ പിടിക്കുന്നതിനു പകരം ടാപ്പ് ചെയ്ത് സജീവമാക്കുന്ന മുൻ സ്ലൈഡർ സ്വഭാവം സജീവമാക്കുക.        |
| `relative_slide`        | boolean | Optional (`false` default )     | ആരംഭ ടച്ച് പോയിന്റിനു പകരം ആരംഭ മൂല്യവുമായി താരതമ്യപ്പെടുത്തി മൂല്യം അപ്‌ഡേറ്റ് ചെയ്യുക.                                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | സ്ലൈഡർ റീഡ് ഒൺലി ആക്കുക. സെൻസറുകൾ പോലുള്ള ചില entities ക്ക് സ്വയമേവ പ്രവർത്തനക്ഷമമാകും.                                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | സ്ലൈഡ് ചെയ്യുമ്പോൾ entity യുടെ അവസ്ഥ അപ്‌ഡേറ്റ് ചെയ്യപ്പെടും. **എല്ലാ entities ക്കും ഈ ഫീച്ചർ ശുപാർശ ചെയ്യുന്നില്ല.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` അല്ലെങ്കിൽ `bottom` | സ്ലൈഡറിന്റെ ഫിൽ ദിശ മാറ്റുക. നിർവചിച്ചില്ലെങ്കിൽ ഇടത്തുനിന്ന് വലത്തോട്ട്, [വലത്തുനിന്ന് ഇടത്തോട്ടുള്ള ഭാഷകളിൽ](#പ്രാദേശികവൽക്കരണം) കണ്ണാടിരൂപത്തിൽ |
| `slider_value_position` | string | Optional | `right`, `left`, `center` അല്ലെങ്കിൽ `hidden` | മൂല്യ പ്രദർശനത്തിന്റെ സ്ഥാനം. നിർവചിച്ചില്ലെങ്കിൽ വലത്ത്, [വലത്തുനിന്ന് ഇടത്തോട്ടുള്ള ഭാഷകളിൽ](#പ്രാദേശികവൽക്കരണം) ഇടത്ത് |
| `invert_slider_value` | boolean | Optional (`false` default) | സ്ലൈഡർ ദിശ വിപരീതമാക്കുക (100% ഫിൽ ഏറ്റവും കുറഞ്ഞ മൂല്യത്തിന് തുല്യമാകും). കളർ സ്ലൈഡറുകൾക്ക് ലഭ്യമല്ല. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **ലൈറ്റുകൾക്ക് മാത്രം.** സ്ലൈഡർ മോഡ് തിരഞ്ഞെടുക്കുക |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **കവറുകൾക്ക് മാത്രം.** സ്ലൈഡർ മോഡ് തിരഞ്ഞെടുക്കുക (പൊസിഷൻ അല്ലെങ്കിൽ ടിൽറ്റ്) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **ലൈറ്റുകൾക്ക് മാത്രം (Hue മോഡ്).** Hue ക്രമീകരിക്കുമ്പോൾ saturation നിർബന്ധിതമാക്കുക |
| `hue_force_saturation_value` | number | Optional (`100` default) | **ലൈറ്റുകൾക്ക് മാത്രം (Hue മോഡ്).** നിർബന്ധിത saturation മൂല്യം (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **ലൈറ്റുകൾക്ക് മാത്രം (Brightness മോഡ്).** ലൈറ്റ് നിറത്തിനു പകരം തീം accent നിറം ഉപയോഗിക്കുക |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **ലൈറ്റുകൾക്ക് മാത്രം.** ലൈറ്റ് ഓഫ് ചെയ്യുന്ന 0% ൽ എത്താൻ സ്ലൈഡറിനെ അനുവദിക്കുന്നു. `tap_to_slide` ഉള്ളപ്പോൾ ലഭ്യമല്ല. |
| `light_transition`      | boolean | Optional (`false` default)      | **ലൈറ്റുകൾക്ക് മാത്രം.** പിന്തുണയുള്ള ലൈറ്റുകൾക്ക് സ്മൂത്ത് ബ്രൈറ്റ്നസ് ട്രാൻസിഷനുകൾ പ്രവർത്തനക്ഷമമാക്കുക.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **ലൈറ്റുകൾക്ക് മാത്രം.** ട്രാൻസിഷൻ സമയം മില്ലിസെക്കൻഡിൽ. `light_transition: true` ആവശ്യമാണ്.            |

</details>

#### ഉദാഹരണങ്ങൾ

<details>

<summary>ലൈറ്റിന്റെ ബ്രൈറ്റ്നസ് നിയന്ത്രിക്കാൻ കഴിയുന്ന ഒരു സ്ലൈഡർ ബട്ടൺ</summary>

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

<summary>കൂടുതൽ ഓപ്ഷനുകളുള്ള ഒരു ബട്ടൺ</summary>

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

## മീഡിയ പ്ലെയർ

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

ഈ കാർഡ് ഒരു മീഡിയ പ്ലെയർ entity നിയന്ത്രിക്കാൻ നിങ്ങളെ അനുവദിക്കുന്നു.

### മീഡിയ പ്ലെയർ ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | നിയന്ത്രിക്കാനുള്ള മീഡിയ പ്ലെയർ |
| `name` | string | Optional | Any string | നിങ്ങളുടെ മീഡിയ പ്ലെയറിനുള്ള ഒരു പേര്, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity യുടെ പേര് പ്രദർശിപ്പിക്കും |
| `icon` | string | Optional | Any `mdi:` icon | നിങ്ങളുടെ മീഡിയ പ്ലെയറിനുള്ള ഒരു ഐക്കൺ, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity ഐക്കൺ അല്ലെങ്കിൽ `entity-picture` പ്രദർശിപ്പിക്കും |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` ക്കു പകരം ഐക്കണിന് മുൻഗണന നൽകുക |
| `show_state` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസ്ഥ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_name` | boolean | Optional | `true` (default) or `false` | പേര് കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ഐക്കൺ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം മാറിയ സമയം കാണിക്കുക |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം അപ്‌ഡേറ്റ് ചെയ്ത സമയം കാണിക്കുക |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ ഒരു attribute അതിന്റെ `name` ന് താഴെ കാണിക്കുക |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | കാണിക്കേണ്ട attribute (ഉദാ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | ഉള്ളടക്കം കണ്ടെയ്നറിന്റെ വലുപ്പം കവിയുമ്പോൾ ടെക്സ്റ്റ് സ്ക്രോൾ ചെയ്യാൻ അനുവദിക്കുക |
| `min_volume` | number | Optional | Any number | വോളിയം സ്ലൈഡറിന്റെ ഏറ്റവും കുറഞ്ഞ മൂല്യം. |
| `max_volume` | number | Optional | Any number | വോളിയം സ്ലൈഡറിന്റെ ഏറ്റവും കൂടിയ മൂല്യം. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | കാർഡിന്റെ ബാക്ക്ഗ്രൗണ്ടായി ബ്ലർ ചെയ്ത മീഡിയ കവർ ഉപയോഗിക്കുക. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ബട്ടൺ ക്ലിക്കിലെ സ്ഥിരസ്ഥിതി പ്രവർത്തനങ്ങൾ മാറ്റാൻ അനുവദിക്കുന്നു. |
| `tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `double_tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ഇരട്ട ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `hold_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ അമർത്തിപ്പിടിക്കുമ്പോഴുള്ള പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | കവർ ആക്ഷൻ ബട്ടണുകൾ താഴേക്ക് (സ്ഥിരപ്പെടുത്തി) നീക്കുക |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | താഴെയുള്ള ആക്ഷൻ ബട്ടണുകൾ പൂർണ്ണ വീതിയാക്കുക (സ്ഥിരസ്ഥിതി: പൊസിഷൻ `bottom` ആയിരിക്കുമ്പോൾ `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | പൂർണ്ണ വീതിയല്ലാത്തപ്പോൾ താഴെയുള്ള ആക്ഷൻ ബട്ടണുകളുടെ വിന്യാസം |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, കാണുക [card layouts](#കാർഡ്-ലേഔട്ടുകൾ) |
| `rows` | number | Optional | Any number | വരികളുടെ എണ്ണം (ഉയരം) (ഉദാ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#സബ്-ബട്ടണുകൾ) | വലതുവശത്ത് സ്ഥിരപ്പെടുത്തിയ ഇഷ്ടാനുസൃത ബട്ടണുകൾ ചേർക്കുക |
| `hide` | object | Optional | See below | കാർഡിൽ നിന്ന് ബട്ടണുകൾ മറയ്ക്കുക |

#### മറയ്ക്കൽ ഓപ്ഷനുകൾ

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | പ്ലേ/പോസ് ബട്ടൺ മറയ്ക്കുക |
| `volume_button` | boolean | Optional | `true` or `false` (default) | വോളിയം ബട്ടൺ മറയ്ക്കുക |
| `previous_button` | boolean | Optional | `true` or `false` (default) | മുൻ ബട്ടൺ മറയ്ക്കുക |
| `next_button` | boolean | Optional | `true` or `false` (default) | അടുത്ത ബട്ടൺ മറയ്ക്കുക |
| `power_button` | boolean | Optional | `true` or `false` (default) | പവർ ബട്ടൺ മറയ്ക്കുക |

</details>

<details>

<summary><b>CSS variables (see <a href="#സ്റ്റൈലിംഗ്">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | മീഡിയ പ്ലെയറിനുള്ള പ്രധാന ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-media-player-border-radius` | `px` | മീഡിയ പ്ലെയറിന്റെ border radius |
| `--bubble-media-player-buttons-border-radius` | `px` | മീഡിയ പ്ലെയർ ബട്ടണുകളുടെ border radius |
| `--bubble-media-player-slider-background-color` | `color` | വോളിയം സ്ലൈഡറിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-media-player-icon-border-radius` | `px` | മീഡിയ പ്ലെയർ ഐക്കൺ കണ്ടെയ്നറിന്റെ border radius |
| `--bubble-media-player-icon-background-color` | `color` | മീഡിയ പ്ലെയർ ഐക്കൺ കണ്ടെയ്നറിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | മീഡിയ പ്ലെയറിനുള്ള box shadow |

</details>


#### ഉദാഹരണങ്ങൾ

<details>

<summary>എല്ലാ ഓപ്ഷനുകളുമുള്ള ഒരു മീഡിയ പ്ലെയർ</summary>

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

## കവർ

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

ഈ കാർഡ് നിങ്ങളുടെ `cover` entities നിയന്ത്രിക്കാൻ അനുവദിക്കുന്നു.

### കവർ ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | നിയന്ത്രിക്കാനുള്ള ഒരു കവർ |
| `name` | string | Optional | Any string | നിങ്ങളുടെ കവറിനുള്ള ഒരു പേര്, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity യുടെ പേര് പ്രദർശിപ്പിക്കും |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` ക്കു പകരം ഐക്കണിന് മുൻഗണന നൽകുക |
| `show_state` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസ്ഥ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_name` | boolean | Optional | `true` (default) or `false` | പേര് കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ഐക്കൺ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം മാറിയ സമയം കാണിക്കുക |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം അപ്‌ഡേറ്റ് ചെയ്ത സമയം കാണിക്കുക |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ ഒരു attribute അതിന്റെ `name` ന് താഴെ കാണിക്കുക |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | കാണിക്കേണ്ട attribute (ഉദാ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | ഉള്ളടക്കം കണ്ടെയ്നറിന്റെ വലുപ്പം കവിയുമ്പോൾ ടെക്സ്റ്റ് സ്ക്രോൾ ചെയ്യാൻ അനുവദിക്കുക |
| `icon_open` | string | Optional | Any `mdi:` icon | നിങ്ങളുടെ തുറന്ന കവറിനുള്ള ഒരു ഐക്കൺ, നിർവചിച്ചിട്ടില്ലെങ്കിൽ സ്ഥിരസ്ഥിതി തുറന്ന കവർ ഐക്കൺ പ്രദർശിപ്പിക്കും |
| `icon_close` | string | Optional | Any `mdi:` icon | നിങ്ങളുടെ അടച്ച കവറിനുള്ള ഒരു ഐക്കൺ, നിർവചിച്ചിട്ടില്ലെങ്കിൽ സ്ഥിരസ്ഥിതി അടച്ച കവർ ഐക്കൺ പ്രദർശിപ്പിക്കും |
| `icon_up` | string | Optional | Any `mdi:` icon | നിങ്ങളുടെ ഓപ്പൺ കവർ ബട്ടണിനുള്ള ഒരു ഐക്കൺ, നിർവചിച്ചിട്ടില്ലെങ്കിൽ സ്ഥിരസ്ഥിതി തുറന്ന കവർ ഐക്കൺ പ്രദർശിപ്പിക്കും |
| `icon_down` | string | Optional | Any `mdi:` icon | നിങ്ങളുടെ ക്ലോസ് കവർ ബട്ടണിനുള്ള ഒരു ഐക്കൺ, നിർവചിച്ചിട്ടില്ലെങ്കിൽ സ്ഥിരസ്ഥിതി അടച്ച കവർ ഐക്കൺ പ്രദർശിപ്പിക്കും |
| `open_service` | string | Optional | Any service or script | നിങ്ങളുടെ കവർ തുറക്കാനുള്ള ഒരു സേവനം, സ്ഥിരസ്ഥിതി `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | നിങ്ങളുടെ കവർ നിർത്താനുള്ള ഒരു സേവനം, സ്ഥിരസ്ഥിതി `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | നിങ്ങളുടെ കവർ അടയ്ക്കാനുള്ള ഒരു സേവനം, സ്ഥിരസ്ഥിതി `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | ടിൽറ്റ് നിയന്ത്രണ ബട്ടണുകളുടെ സ്ഥാനം (കവർ ടിൽറ്റ് പിന്തുണയ്ക്കുമ്പോൾ മാത്രം കാണിക്കും) |
| `open_tilt_service` | string | Optional | Any service or script | ടിൽറ്റ് തുറക്കാനുള്ള ഒരു സേവനം, സ്ഥിരസ്ഥിതി `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | ടിൽറ്റ് അടയ്ക്കാനുള്ള ഒരു സേവനം, സ്ഥിരസ്ഥിതി `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ബട്ടൺ ക്ലിക്കിലെ സ്ഥിരസ്ഥിതി പ്രവർത്തനങ്ങൾ മാറ്റാൻ അനുവദിക്കുന്നു. |
| `tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `double_tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ഇരട്ട ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `hold_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ അമർത്തിപ്പിടിക്കുമ്പോഴുള്ള പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | മീഡിയ നിയന്ത്രണങ്ങൾ താഴേക്ക് (സ്ഥിരപ്പെടുത്തി) നീക്കുക |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | താഴെയുള്ള നിയന്ത്രണങ്ങൾ പൂർണ്ണ വീതിയാക്കുക (സ്ഥിരസ്ഥിതി: പൊസിഷൻ `bottom` ആയിരിക്കുമ്പോൾ `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | പൂർണ്ണ വീതിയല്ലാത്തപ്പോൾ താഴെയുള്ള നിയന്ത്രണങ്ങളുടെ വിന്യാസം |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, കാണുക [card layouts](#കാർഡ്-ലേഔട്ടുകൾ) |
| `rows` | number | Optional | Any number | വരികളുടെ എണ്ണം (ഉയരം) (ഉദാ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#സബ്-ബട്ടണുകൾ) | വലതുവശത്ത് സ്ഥിരപ്പെടുത്തിയ ഇഷ്ടാനുസൃത ബട്ടണുകൾ ചേർക്കുക |

</details>

<details>

<summary><b>CSS variables (see <a href="#സ്റ്റൈലിംഗ്">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | കവർ കാർഡിലെ പിന്തുണയുള്ള ഘടകങ്ങൾക്കുള്ള പ്രധാന ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-cover-border-radius` | `px` | കവർ കാർഡിന്റെ border radius |
| `--bubble-cover-icon-border-radius` | `px` | കവർ കാർഡ് ഐക്കൺ കണ്ടെയ്നറിന്റെ border radius |
| `--bubble-cover-icon-background-color` | `color` | കവർ കാർഡ് ഐക്കൺ കണ്ടെയ്നറിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | കവർ കാർഡിനുള്ള box shadow |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | കവർ കാർഡിലെ ബട്ടണുകൾക്കുള്ള box shadow |

</details>


#### ഉദാഹരണം

<details>

<summary>ഒരു റോളർ ഷെയ്ഡ് നിയന്ത്രിക്കാൻ കഴിയുന്ന കാർഡ്</summary>

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

## സെലക്റ്റ്

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

ഈ കാർഡ് നിങ്ങളുടെ `input_select` / `select` entities ക്കായി ഒരു ഡ്രോപ്ഡൗൺ മെനു ചേർക്കാൻ അനുവദിക്കുന്നു. സബ്-ബട്ടണുകളും എല്ലാ പൊതു Bubble Card ഫീച്ചറുകളും ഈ കാർഡ് പിന്തുണയ്ക്കുന്നു.

> [!TIP]
> നിങ്ങൾക്ക് സെലക്റ്റ് സബ്-ബട്ടണുകളും വേണമെങ്കിൽ ഉപയോഗിക്കാം, സബ്-ബട്ടണുകളെ പിന്തുണയ്ക്കുന്ന എല്ലാ കാർഡുകളിലും ഈ ഫീച്ചർ ലഭ്യമാണ്.

### സെലക്റ്റ് ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | നിയന്ത്രിക്കാനുള്ള ഒരു entity |
| `name` | string | Optional | Any string | നിങ്ങളുടെ സെലക്റ്റിനുള്ള ഒരു പേര്, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity യുടെ പേര് പ്രദർശിപ്പിക്കും |
| `icon` | string | Optional | Any `mdi:` icon | നിങ്ങളുടെ സെലക്റ്റിനുള്ള ഒരു ഐക്കൺ, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity ഐക്കൺ അല്ലെങ്കിൽ `entity-picture` പ്രദർശിപ്പിക്കും |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` ക്കു പകരം ഐക്കണിന് മുൻഗണന നൽകുക |
| `show_state` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസ്ഥ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_name` | boolean | Optional | `true` (default) or `false` | പേര് കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_icon` | boolean | Optional | `true` (default) or `false` | ഐക്കൺ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം മാറിയ സമയം കാണിക്കുക |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ അവസാനം അപ്‌ഡേറ്റ് ചെയ്ത സമയം കാണിക്കുക |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | നിങ്ങളുടെ `entity` യുടെ ഒരു attribute അതിന്റെ `name` ന് താഴെ കാണിക്കുക |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | കാണിക്കേണ്ട attribute (ഉദാ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | ഉള്ളടക്കം കണ്ടെയ്നറിന്റെ വലുപ്പം കവിയുമ്പോൾ ടെക്സ്റ്റ് സ്ക്രോൾ ചെയ്യാൻ അനുവദിക്കുക |
| `tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `double_tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ഇരട്ട ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `hold_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ അമർത്തിപ്പിടിക്കുമ്പോഴുള്ള പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, കാണുക [card layouts](#കാർഡ്-ലേഔട്ടുകൾ) |
| `rows` | number | Optional | Any number | വരികളുടെ എണ്ണം (ഉയരം) (ഉദാ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#സബ്-ബട്ടണുകൾ) | വലതുവശത്ത് സ്ഥിരപ്പെടുത്തിയ ഇഷ്ടാനുസൃത ബട്ടണുകൾ ചേർക്കുക |

</details>

<details>

<summary><b>CSS variables (see <a href="#സ്റ്റൈലിംഗ്">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | സെലക്റ്റ് കാർഡിലെ പിന്തുണയുള്ള ഘടകങ്ങൾക്കുള്ള പ്രധാന ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-select-background-color` | `color` | സെലക്റ്റ് കാർഡിനുള്ള ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-select-list-border-radius` | `px` | കാർഡിലെ ഡ്രോപ്ഡൗൺ മെനുവിന്റെ border radius |
| `--bubble-select-list-item-accent-color` | `color` | തിരഞ്ഞെടുത്ത ഇനത്തിനുള്ള accent നിറം |
| `--bubble-select-list-background-color` | `color` | കാർഡിലെ ഡ്രോപ്ഡൗൺ മെനുവിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-select-list-width` | `px` | കാർഡിലെ ഡ്രോപ്ഡൗൺ മെനുവിന്റെ വീതി |
| `--bubble-select-arrow-background-color` | `color` | ഡ്രോപ്ഡൗൺ അമ്പടയാളത്തിനുള്ള ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-select-button-border-radius` | `px` | സെലക്റ്റ് ബട്ടണിന്റെ border radius |
| `--bubble-select-border-radius` | `px` | സെലക്റ്റ് കാർഡിന്റെ border radius |
| `--bubble-select-icon-border-radius` | `px` | സെലക്റ്റ് കാർഡ് ഐക്കൺ കണ്ടെയ്നറിന്റെ border radius |
| `--bubble-select-icon-background-color` | `color` | സെലക്റ്റ് കാർഡ് ഐക്കൺ കണ്ടെയ്നറിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | സെലക്റ്റ് കാർഡിനുള്ള box shadow |

</details>


#### ഉദാഹരണങ്ങൾ

<details>

<summary>രംഗങ്ങളുടെ (scenes) ലിസ്റ്റുള്ള ഒരു സെലക്റ്റ് കാർഡ്</summary>

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

## കാലാവസ്ഥാ നിയന്ത്രണം

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

ഈ കാർഡ് നിങ്ങളുടെ `climate` entities നിയന്ത്രിക്കാൻ അനുവദിക്കുന്നു.

> [!TIP]
> മോഡ് തിരഞ്ഞെടുക്കൽ മെനു ഒരു [സബ്-ബട്ടൺ](#സബ്-ബട്ടണുകൾ) ആണ്, കാർഡ് സൃഷ്ടിക്കുമ്പോൾ ഇത് സ്വയമേവ ചേർക്കപ്പെടും. നിങ്ങൾക്ക് ഇഷ്ടാനുസരണം അത് മാറ്റുകയോ നീക്കം ചെയ്യുകയോ ചെയ്യാം.

### കാലാവസ്ഥാ നിയന്ത്രണ ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | നിയന്ത്രിക്കാനുള്ള entity (ഉദാ. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | കാർഡിനുള്ള ഒരു ഇഷ്ടാനുസൃത പേര്. നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity യുടെ പേര് പ്രദർശിപ്പിക്കും.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | കാർഡിനുള്ള ഒരു ഇഷ്ടാനുസൃത ഐക്കൺ. നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity ഐക്കൺ അല്ലെങ്കിൽ `entity-picture` ഉപയോഗിക്കും.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | `entity-picture` യെക്കാൾ ഐക്കണിന് മുൻഗണന നൽകുന്നു.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | `entity` യുടെ നിലവിലെ അവസ്ഥ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | entity യുടെ പേര് കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | ഐക്കൺ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | `entity` പിന്തുണച്ചാൽ, കുറഞ്ഞ ടാർഗെറ്റ് താപനില നിയന്ത്രണം മറയ്ക്കുന്നു.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | `entity` പിന്തുണച്ചാൽ, കൂടിയ ടാർഗെറ്റ് താപനില നിയന്ത്രണം മറയ്ക്കുന്നു.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | climate entity ON ആയിരിക്കുമ്പോൾ സ്ഥിരമായ ബാക്ക്ഗ്രൗണ്ട് നിറം പ്രയോഗിക്കുന്നു.                                              |
| `step` | number | Optional | Any number | താപനില സ്റ്റെപ്പ്. |
| `min_temp` | number | Optional | Any number | ഏറ്റവും കുറഞ്ഞ താപനില. |
| `max_temp` | number | Optional | Any number | ഏറ്റവും കൂടിയ താപനില. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ബട്ടൺ ക്ലിക്കിലെ സ്ഥിരസ്ഥിതി പ്രവർത്തനങ്ങൾ മാറ്റാൻ അനുവദിക്കുന്നു. |
| `tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `double_tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ ഇരട്ട ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `hold_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഐക്കൺ അമർത്തിപ്പിടിക്കുമ്പോഴുള്ള പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | കാലാവസ്ഥാ ആക്ഷൻ ബട്ടണുകൾ താഴേക്ക് (സ്ഥിരപ്പെടുത്തി) നീക്കുക |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | താഴെയുള്ള ആക്ഷൻ ബട്ടണുകൾ പൂർണ്ണ വീതിയാക്കുക (സ്ഥിരസ്ഥിതി: പൊസിഷൻ `bottom` ആയിരിക്കുമ്പോൾ `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | പൂർണ്ണ വീതിയല്ലാത്തപ്പോൾ താഴെയുള്ള ആക്ഷൻ ബട്ടണുകളുടെ വിന്യാസം |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, കാണുക [card layouts](#കാർഡ്-ലേഔട്ടുകൾ) |
| `rows` | number | Optional | Any number | വരികളുടെ എണ്ണം (ഉയരം) (ഉദാ. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#സബ്-ബട്ടണുകൾ)                | വലതുവശത്ത് സ്ഥിരപ്പെടുത്തിയ ഇഷ്ടാനുസൃത ബട്ടണുകൾ ചേർക്കുന്നു. കാലാവസ്ഥാ മോഡ് സെലക്റ്റ് മെനുവിന് ഉപകാരപ്രദം.                                  |

</details>

<details>

<summary><b>CSS variables (see <a href="#സ്റ്റൈലിംഗ്">Styling</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | കാലാവസ്ഥാ കാർഡിലെ പിന്തുണയുള്ള ഘടകങ്ങൾക്കുള്ള പ്രധാന ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-climate-border-radius` | `px` | കാലാവസ്ഥാ കാർഡ് ഘടകങ്ങളിലെ പിന്തുണയുള്ള ഘടകങ്ങളുടെ border radius |
| `--bubble-climate-button-background-color` | `color` | കാലാവസ്ഥാ കാർഡ് ബട്ടണുകളുടെ ബാക്ക്ഗ്രൗണ്ട് നിറം |
| `--bubble-climate-icon-border-radius` | `px` | കാലാവസ്ഥാ കാർഡ് ഐക്കൺ കണ്ടെയ്നറിന്റെ border radius |
| `--bubble-state-climate-fan-only-color` | `color` | fan-only അവസ്ഥയ്ക്കുള്ള ഓവർലേ നിറം |
| `--bubble-state-climate-dry-color` | `color` | dry അവസ്ഥയ്ക്കുള്ള ഓവർലേ നിറം |
| `--bubble-state-climate-cool-color` | `color` | cool അവസ്ഥയ്ക്കുള്ള ഓവർലേ നിറം |
| `--bubble-state-climate-heat-color` | `color` | heat അവസ്ഥയ്ക്കുള്ള ഓവർലേ നിറം |
| `--bubble-state-climate-auto-color` | `color` | auto അവസ്ഥയ്ക്കുള്ള ഓവർലേ നിറം |
| `--bubble-state-climate-heat-cool-color` | `color` | heat-cool അവസ്ഥയ്ക്കുള്ള ഓവർലേ നിറം |
| `--bubble-climate-accent-color` | `color` | കാലാവസ്ഥാ കാർഡിനുള്ള accent നിറം |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | കാലാവസ്ഥാ കണ്ടെയ്നറിനുള്ള box shadow. |

</details>


#### ഉദാഹരണങ്ങൾ

<details>

<summary>HVAC മോഡുകൾ ഡ്രോപ്ഡൗൺ മെനുവുള്ള ഒരു കാലാവസ്ഥാ കാർഡ്</summary>

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

## കലണ്ടർ

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

ഈ കാർഡ് നിങ്ങളുടെ കലണ്ടർ entities പ്രദർശിപ്പിക്കാൻ അനുവദിക്കുന്നു. ഇതിന്റെ ഉള്ളടക്കം സ്ക്രോൾ ചെയ്യാവുന്നതാണ്, അതിനാൽ വരാനിരിക്കുന്ന ഇവന്റുകൾ എളുപ്പത്തിൽ ബ്രൗസ് ചെയ്യാം.

### കലണ്ടർ ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | ഇപ്പോൾ മുതൽ N-ാം ദിവസത്തിന്റെ അവസാനം വരെ ഇവന്റുകൾ ലഭ്യമാക്കേണ്ട കലണ്ടർ ദിവസങ്ങളുടെ എണ്ണം (സ്ഥിരസ്ഥിതി: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | നിയന്ത്രിക്കാനുള്ള entity (ഉദാ. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | പ്രദർശിപ്പിക്കേണ്ട കലണ്ടർ entity                                                          |
| `entities.color`    | string  | Optional     | A color                                         | കലണ്ടർ ചിപ്പിനുള്ള ഒരു ഇഷ്ടാനുസൃത നിറം. നിർവചിച്ചിട്ടില്ലെങ്കിൽ, ഒരു സ്വയമേവയുള്ള നിറം തിരഞ്ഞെടുക്കപ്പെടും |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | ഇപ്പോൾ മുതൽ N-ാം ദിവസത്തിന്റെ അവസാനം വരെ ഇവന്റുകൾ ലഭ്യമാക്കേണ്ട കലണ്ടർ ദിവസങ്ങളുടെ എണ്ണം (സ്ഥിരസ്ഥിതി: 7) |
| `limit`             | number  | Optional     | A number                                        | കാർഡിൽ പ്രദർശിപ്പിക്കുന്ന ഇവന്റുകളുടെ എണ്ണം                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | ഇവന്റുകൾക്കുള്ള അവസാന സമയം കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | ഇവന്റ് പുരോഗതി ബാർ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | നിലവിൽ നടന്നുകൊണ്ടിരിക്കുന്ന ഇവന്റുകൾ കാണിക്കുക അല്ലെങ്കിൽ മറയ്ക്കുക. ഒന്നിലധികം ദിവസത്തെ ഇവന്റുകൾ ഓരോ ദിവസമായി വിലയിരുത്തുന്നു, അതിനാൽ നടന്നുകൊണ്ടിരിക്കുന്ന ദിവസം മാത്രം മറയ്ക്കപ്പെടും, വരാനിരിക്കുന്ന ദിവസങ്ങൾ ദൃശ്യമായി തുടരും |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | ഉള്ളടക്കം കണ്ടെയ്നറിന്റെ വലുപ്പം കവിയുമ്പോൾ ടെക്സ്റ്റ് സ്ക്രോൾ ചെയ്യാൻ അനുവദിക്കുക |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ഇവന്റ് ക്ലിക്കിൽ പ്രവർത്തനങ്ങൾ ചേർക്കാൻ അനുവദിക്കുന്നു. |
| `tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ദിവസം ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `double_tap_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ദിവസം ഇരട്ട ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `hold_action` | object | Optional | See [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) | ദിവസം അമർത്തിപ്പിടിക്കുമ്പോഴുള്ള പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, കാണുക [card layouts](#കാർഡ്-ലേഔട്ടുകൾ) |
| `rows` | number | Optional | Any number | വരികളുടെ എണ്ണം (ഉയരം) (ഉദാ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#സബ്-ബട്ടണുകൾ) | വലതുവശത്ത് സ്ഥിരപ്പെടുത്തിയ ഇഷ്ടാനുസൃത ബട്ടണുകൾ ചേർക്കുക |

</details>

<details>

<summary><b>CSS variables (see <a href="#സ്റ്റൈലിംഗ്">Styling</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | കലണ്ടർ കാർഡിലെ പിന്തുണയുള്ള ഘടകങ്ങൾക്കുള്ള പ്രധാന ബാക്ക്ഗ്രൗണ്ട് നിറം  |
| `--bubble-calendar-border-radius`         | `px`           | കലണ്ടർ കാർഡ് ഘടകങ്ങളിലെ പിന്തുണയുള്ള ഘടകങ്ങളുടെ border radius |
| `--bubble-calendar-height`                | `px`           | കലണ്ടർ കാർഡിനുള്ള ഉയരം                                        |

</details>

#### ഉദാഹരണങ്ങൾ

<details>

<summary>പരിമിതമായ എണ്ണം ഇവന്റുകളുള്ള ഒരു കലണ്ടർ കാർഡ്</summary>

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

<summary>അവസാന സമയവും പുരോഗതി ബാറും ഉള്ള ഒരു കലണ്ടർ കാർഡ്</summary>

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


## വിഭജനി

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

നിങ്ങളുടെ പോപ്പ്-അപ്പിനെ വിഭാഗങ്ങൾ / ഭാഗങ്ങൾ ആയി വേർതിരിക്കാൻ ഈ കാർഡ് ഒരു ലളിതമായ വിഭജനിയാണ്. ഉദാ: Lights, Devices, Covers, Settings, Automations...

### വിഭജനി ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| പേര് | തരം | ആവശ്യകത | പിന്തുണയ്ക്കുന്ന ഓപ്ഷനുകൾ | വിവരണം |
| --- | --- | --- | --- | --- |
| `name` | string | ഐച്ഛികം, പക്ഷേ ശുപാർശ ചെയ്യുന്നു | ഏത് string ഉം | നിങ്ങളുടെ വിഭജനിക്കുള്ള ഒരു പേര് |
| `icon` | string | ഐച്ഛികം, പക്ഷേ ശുപാർശ ചെയ്യുന്നു | ഏത് `mdi:` icon ഉം | നിങ്ങളുടെ വിഭജനിക്കുള്ള ഒരു icon |
| `card_layout` | string | ഐച്ഛികം | `normal` (section view-ൽ അല്ലെങ്കിൽ സ്ഥിരസ്ഥിതി), `large` (section view-ൽ ആണെങ്കിൽ സ്ഥിരസ്ഥിതി), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, [കാർഡ് ലേഔട്ടുകൾ](#കാർഡ്-ലേഔട്ടുകൾ) കാണുക |
| `rows` | number | ഐച്ഛികം | ഏത് സംഖ്യയും | നിരകളുടെ (ഉയരം) എണ്ണം (ഉദാ: `2`) |
| `sub_button` | object | ഐച്ഛികം | [സബ്-ബട്ടണുകൾ](#സബ്-ബട്ടണുകൾ) കാണുക | വലതുവശത്ത് ഫിക്സ് ചെയ്ത കസ്റ്റമൈസ് ചെയ്ത ബട്ടണുകൾ ചേർക്കുക |

</details>

<details>

<summary><b>CSS variables (<a href="#സ്റ്റൈലിംഗ്">സ്റ്റൈലിംഗ്</a> കാണുക)</b></summary>

| Variable | പ്രതീക്ഷിക്കുന്ന മൂല്യം | വിവരണം |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | വിഭജനിയിലെ വരയ്ക്കുള്ള പശ്ചാത്തല നിറം |

</details>

#### ഉദാഹരണം

<details>

<summary>ഒരു "Covers" വിഭാഗത്തിനുള്ള വിഭജനി/ഡിവൈഡർ</summary>

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

## ഒഴിഞ്ഞ കോളം

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

ഒരു ഒഴിഞ്ഞ കോളം നികത്താൻ ഈ കാർഡ് ഉപയോഗപ്പെടും. നിങ്ങളുടെ പോപ്പ്-അപ്പിൽ ഒറ്റ കാർഡ് മാത്രമുള്ള ഒരു `horizontal-stack` ഉള്ളപ്പോൾ ഇത് ഉപകാരപ്രദമാണ്. ഈ സ്ക്രീൻഷോട്ടിന്റെ താഴെ വലതുവശത്തെ മൂല നോക്കി അത് (ഇല്ല എന്ന് കാണാൻ) നോക്കൂ.

### ഒഴിഞ്ഞ കോളം ഓപ്ഷനുകൾ

ഈ കാർഡിന് ഓപ്ഷനുകൾ ഒന്നുമില്ല, [സ്റ്റൈലിംഗ്](#സ്റ്റൈലിംഗ്) പിന്തുണയ്ക്കുന്നുമില്ല, എങ്കിലും HA sections-നുള്ള ലേഔട്ട് ഓപ്ഷനുകൾ ഇത് പിന്തുണയ്ക്കുന്നു.

#### ഉദാഹരണം

<details>

<summary>ഒരു തിരശ്ചീന സ്റ്റാക്കിലെ ഒഴിഞ്ഞ കോളം</summary>

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

## സബ്-ബട്ടണുകൾ മാത്രം

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

ഈ കാർഡ് സബ്-ബട്ടണുകൾക്ക് മാത്രമായി സമർപ്പിച്ചതാണ്. മെനുകൾ, ദ്രുത പ്രവർത്തനങ്ങൾ, വിവര ചിപ്പുകൾ, അല്ലെങ്കിൽ പേജിന്റെ താഴെ ഒരു ഫിക്സഡ് ഫൂട്ടർ എന്നിവയ്ക്ക് ഇത് അനുയോജ്യമാണ്.

> [!IMPORTANT]  
> ഈ കാർഡ് പുതിയ സബ്-ബട്ടൺ സ്കീമ ഉപയോഗിക്കുന്നു. നിങ്ങളുടെ ബട്ടണുകൾ നിർവചിക്കാൻ `sub_button.bottom` ഉപയോഗിക്കുക. `sub_button.main` ഭാഗം അവഗണിക്കപ്പെടും.

### സബ്-ബട്ടണുകൾ മാത്രം ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണങ്ങൾ)</b></summary>

| പേര് | തരം | ആവശ്യകത | പിന്തുണയ്ക്കുന്ന ഓപ്ഷനുകൾ | വിവരണം |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **നിർബന്ധം** | [സബ്-ബട്ടണുകൾ](#സബ്-ബട്ടണുകൾ) കാണുക | `bottom` ഭാഗം ഉപയോഗിച്ച് നിങ്ങളുടെ സബ്-ബട്ടണുകൾ നിർവചിക്കുക |
| `hide_main_background` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | കാർഡിന്റെ പശ്ചാത്തലം നീക്കം ചെയ്യുക |
| `footer_mode` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | കാർഡ് പേജിന്റെ താഴെ ഫിക്സ് ചെയ്യുക |
| `footer_full_width` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | ഫൂട്ടർ പൂർണ്ണ വീതി (100%) ആക്കുക |
| `footer_width` | number | ഐച്ഛികം | ഏത് സംഖ്യയും | `footer_full_width`, `false` ആയിരിക്കുമ്പോൾ പിക്സലിലുള്ള ഫൂട്ടർ വീതി |
| `footer_bottom_offset` | number | ഐച്ഛികം | ഏത് സംഖ്യയും | പേജിന്റെ താഴെ നിന്നുള്ള അകലം പിക്സലിൽ (സ്ഥിരസ്ഥിതി: `16`) |
| `card_layout` | string | ഐച്ഛികം | `normal` (section view-ൽ അല്ലെങ്കിൽ സ്ഥിരസ്ഥിതി), `large` (section view-ൽ ആണെങ്കിൽ സ്ഥിരസ്ഥിതി), `large-2-rows`, `large-sub-buttons-grid` | കാർഡിന്റെ സ്റ്റൈലിംഗ് ലേഔട്ട്, [കാർഡ് ലേഔട്ടുകൾ](#കാർഡ്-ലേഔട്ടുകൾ) കാണുക |
| `rows` | number | ഐച്ഛികം | ഏത് സംഖ്യയും | നിരകളുടെ (ഉയരം) എണ്ണം (ഉദാ: `2`) |

</details>

<details>

<summary><b>CSS variables (<a href="#സ്റ്റൈലിംഗ്">സ്റ്റൈലിംഗ്</a> കാണുക)</b></summary>

| Variable | പ്രതീക്ഷിക്കുന്ന മൂല്യം | വിവരണം |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width`, `false` ആയിരിക്കുമ്പോൾ ഫൂട്ടർ വീതി |
| `--bubble-footer-bottom` | `px` | ഫൂട്ടറിന്റെ താഴെയുള്ള അകലം |
| `--bubble-footer-box-shadow` | [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) കാണുക | ഫൂട്ടർ കണ്ടെയ്നറിനുള്ള box shadow |

</details>

#### ഉദാഹരണങ്ങൾ

<details>

<summary>ചിപ്പുകൾ (സ്ക്രീൻഷോട്ടിലേത് പോലെ)</summary>

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

<summary>ഒരു ഫിക്സഡ് ഫൂട്ടർ മെനു</summary>

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

## സബ്-ബട്ടണുകൾ

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

ഈ ഓപ്ഷൻ പിന്തുണയ്ക്കുന്ന ഓരോ കാർഡിലും, നിങ്ങളുടെ കാർഡുകൾ കൂടുതൽ കസ്റ്റമൈസ് ചെയ്യാൻ സബ്-ബട്ടണുകൾ ചേർക്കാം. ഉദാഹരണത്തിന്, ഒരു vacuum, ഒരു weather card, അല്ലെങ്കിൽ നിങ്ങൾക്ക് ചിന്തിക്കാവുന്ന മിക്കവാറും എന്തിനെയും നിയന്ത്രിക്കാൻ കഴിയുന്ന ഒരു ബട്ടൺ നിങ്ങൾക്ക് സൃഷ്ടിക്കാം. ഈ സബ്-ബട്ടണുകൾ tap actions-ഉം മിക്ക ബട്ടൺ ഓപ്ഷനുകളും പിന്തുണയ്ക്കുന്നു.

സബ്-ബട്ടണുകൾ ഇപ്പോൾ മൂന്ന് തരങ്ങൾ പിന്തുണയ്ക്കുന്നു: **സ്ഥിരസ്ഥിതി (ബട്ടൺ)**, **സ്ലൈഡർ**, **ഡ്രോപ്ഡൗൺ / സെലക്റ്റ്**. ഒരേ കാർഡിൽ തരങ്ങൾ കൂട്ടിക്കലർത്താം, സബ്-ബട്ടണുകൾ മുകളിലോ താഴെയോ വയ്ക്കാം, കൂടുതൽ വിപുലമായ ലേഔട്ടുകൾക്കായി അവയെ ഗ്രൂപ്പുകളായി ക്രമീകരിക്കാം.

#### സബ്-ബട്ടണുകളുടെ സ്ഥാനവും ഗ്രൂപ്പുകളും

<details>

<summary><b>സബ്-ബട്ടൺ ഘടന (main / bottom + groups)</b></summary>

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

**കുറിപ്പുകൾ:**
- `main`, `bottom` എന്നിവ രണ്ട് സ്വതന്ത്ര ഭാഗങ്ങളാണ്. Bottom സബ്-ബട്ടണുകൾ കാർഡിന്റെ താഴെ ഫിക്സ് ചെയ്തിരിക്കും.
- `main_layout`, `bottom_layout` എന്നിവയ്ക്ക് ഗ്രൂപ്പുകൾ ലംബമായി അടുക്കാൻ `inline` (സ്ഥിരസ്ഥിതി) അല്ലെങ്കിൽ `rows` സ്വീകരിക്കാം.
- ഗ്രൂപ്പുകൾ എന്നത് ഒരു `group` array-ഉം ഐച്ഛികമായ `buttons_layout` (`inline` അല്ലെങ്കിൽ `column`) ഉള്ള object-കളാണ്.
- `justify_content` **bottom ഗ്രൂപ്പുകൾക്ക് മാത്രം** ലഭ്യമാണ് (`start`, `center`, `end`, `fill`).
- Bottom സബ്-ബട്ടണുകൾ ഉള്ളപ്പോൾ, നിങ്ങൾ വേറൊരു ലേഔട്ട് വ്യക്തമായി സെറ്റ് ചെയ്യാത്ത പക്ഷം കാർഡ് ലേഔട്ട് സ്വയമേവ `large` ആയി മാറും.
- പഴയ `sub_button` array-കൾ ഇപ്പോഴും പിന്തുണയ്ക്കുന്നു, അവ `main` ഭാഗമായി കണക്കാക്കപ്പെടും.

</details>

### സബ്-ബട്ടൺ ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണം)</b></summary>

| പേര് | തരം | ആവശ്യകത | പിന്തുണയ്ക്കുന്ന ഓപ്ഷനുകൾ | വിവരണം |
| --- | --- | --- | --- | --- |
| `entity` | string | ഐച്ഛികം | ഏത് entity ഉം | നിയന്ത്രിക്കാനുള്ള ഒരു entity |
| `name` | string | ഐച്ഛികം | ഏത് string ഉം | നിങ്ങളുടെ സബ്-ബട്ടണിനുള്ള ഒരു പേര്, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity-യുടെ പേര് കാണിക്കും |
| `icon` | string | ഐച്ഛികം | ഏത് `mdi:` icon ഉം | നിങ്ങളുടെ സബ്-ബട്ടണിനുള്ള ഒരു icon, നിർവചിച്ചിട്ടില്ലെങ്കിൽ entity-യുടെ icon അല്ലെങ്കിൽ entity picture കാണിക്കും |
| `force_icon` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | ഒരു entity picture ലഭ്യമാണെങ്കിലും icon നിർബന്ധമായി കാണിക്കുക |
| `sub_button_type` | string | ഐച്ഛികം | `default`, `slider` അല്ലെങ്കിൽ `select` | സബ്-ബട്ടൺ തരം തിരഞ്ഞെടുക്കുക |
| `show_background` | boolean | ഐച്ഛികം | `true` (സ്ഥിരസ്ഥിതി) അല്ലെങ്കിൽ `false` | നിങ്ങളുടെ സബ്-ബട്ടണിനുള്ള പശ്ചാത്തലം കാണിക്കുക, ഇത് നിങ്ങളുടെ entity-യുടെ അവസ്ഥയെ ആശ്രയിച്ച് നിറം മാറ്റും |
| `state_background` | boolean | ഐച്ഛികം | `true` (സ്ഥിരസ്ഥിതി) അല്ലെങ്കിൽ `false` | entity `on` ആയിരിക്കുമ്പോൾ state color ഉപയോഗിക്കുക |
| `light_background` | boolean | ഐച്ഛികം | `true` (സ്ഥിരസ്ഥിതി) അല്ലെങ്കിൽ `false` | ലഭ്യമാണെങ്കിൽ പശ്ചാത്തലത്തിന് light color ഉപയോഗിക്കുക |
| `show_state` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | നിങ്ങളുടെ `entity`-യുടെ അവസ്ഥ കാണിക്കുകയോ ഒളിപ്പിക്കുകയോ ചെയ്യുക |
| `show_name` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | പേര് കാണിക്കുകയോ ഒളിപ്പിക്കുകയോ ചെയ്യുക |
| `show_icon` | boolean | ഐച്ഛികം | `true` (സ്ഥിരസ്ഥിതി) അല്ലെങ്കിൽ `false` | icon കാണിക്കുകയോ ഒളിപ്പിക്കുകയോ ചെയ്യുക |
| `show_last_changed` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | നിങ്ങളുടെ `entity`-യുടെ അവസാനം മാറിയ സമയം കാണിക്കുക |
| `show_last_updated` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | നിങ്ങളുടെ `entity`-യുടെ അവസാനം അപ്ഡേറ്റ് ചെയ്ത സമയം കാണിക്കുക |
| `show_attribute` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | നിങ്ങളുടെ `entity`-യുടെ ഒരു attribute അതിന്റെ `name`-ന് താഴെ കാണിക്കുക |
| `attribute` | string | ഐച്ഛികം (`show_attribute`, `true` ആയി സെറ്റ് ചെയ്തിട്ടുണ്ടെങ്കിൽ നിർബന്ധം) | നിങ്ങളുടെ `entity`-യിൽ നിന്നുള്ള ഒരു attribute | കാണിക്കാനുള്ള attribute (ഉദാ: `brightness`) |
| `select_attribute` | string | ഐച്ഛികം | നിങ്ങളുടെ `entity`-യിൽ നിന്നുള്ള ഒരു attribute list (മുകളിലെ പിന്തുണയ്ക്കുന്ന ഓപ്ഷനുകൾ കാണുക) | ക്ലിക്ക് ചെയ്താൽ ഈ attribute list ഒരു dropdown തുറക്കും (ഉദാ: `effect_list`) |
| `show_arrow` | boolean | ഐച്ഛികം | `true` (സ്ഥിരസ്ഥിതി) അല്ലെങ്കിൽ `false` | select സബ്-ബട്ടണുകൾക്കുള്ള dropdown അമ്പടയാളം കാണിക്കുകയോ ഒളിപ്പിക്കുകയോ ചെയ്യുക |
| `scrolling_effect` | boolean | ഐച്ഛികം | `true` (സ്ഥിരസ്ഥിതി) അല്ലെങ്കിൽ `false` | ഉള്ളടക്കം കണ്ടെയ്നറിന്റെ വലിപ്പം കവിയുമ്പോൾ ടെക്സ്റ്റ് സ്ക്രോൾ ചെയ്യാൻ അനുവദിക്കുക |
| `tap_action` | object | ഐച്ഛികം | [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) കാണുക | സബ്-ബട്ടൺ ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `double_tap_action` | object | ഐച്ഛികം | [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) കാണുക | സബ്-ബട്ടൺ ഇരട്ട ക്ലിക്കിലെ പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `none` ഉപയോഗിക്കും. |
| `hold_action` | object | ഐച്ഛികം | [actions](#ടാപ്പ്-ഇരട്ട-ടാപ്പ്-അമർത്തിപ്പിടിക്കൽ-പ്രവർത്തനങ്ങൾ) കാണുക | സബ്-ബട്ടൺ അമർത്തിപ്പിടിക്കുമ്പോഴുള്ള പ്രവർത്തന തരം നിർവചിക്കുക, നിർവചിച്ചിട്ടില്ലെങ്കിൽ `more-info` ഉപയോഗിക്കും. |
| `fill_width` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` | ലഭ്യമായ വീതി നിറയ്ക്കുക (സ്ഥിരസ്ഥിതി: main-ന് `false`, bottom-ന് `true`) |
| `width` | number അല്ലെങ്കിൽ string | ഐച്ഛികം | ഏത് സംഖ്യയും അല്ലെങ്കിൽ CSS length | ഇഷ്ടാനുസൃത വീതി (main ഭാഗത്തിന് `px`, bottom ഭാഗത്തിന് സ്ഥിരസ്ഥിതിയായി `%`) |
| `custom_height` | number | ഐച്ഛികം | ഏത് സംഖ്യയും | പിക്സലിലുള്ള ഇഷ്ടാനുസൃത ഉയരം |
| `content_layout` | string | ഐച്ഛികം | `icon-left` (സ്ഥിരസ്ഥിതി), `icon-top`, `icon-bottom`, `icon-right` | സബ്-ബട്ടണിനുള്ളിലെ icon-ന്റെ സ്ഥാനം |
| `always_visible` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | **സ്ലൈഡർ മാത്രം.** ടാപ്പിൽ തുറക്കുന്നതിന് പകരം സ്ലൈഡർ എപ്പോഴും കാണിക്കുക |
| `show_button_info` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | **സ്ലൈഡർ മാത്രം.** `always_visible` സജീവമാകുമ്പോൾ icon/name/state കാണിക്കുക |
| `visibility` | object അല്ലെങ്കിൽ list | ഐച്ഛികം | [വ്യവസ്ഥകൾ](#വ്യവസ്ഥകൾ) കാണുക | നിബന്ധനകളുടെ അടിസ്ഥാനത്തിൽ സബ്-ബട്ടൺ കാണിക്കുകയോ ഒളിപ്പിക്കുകയോ ചെയ്യുക |
| `hide_when_parent_unavailable` | boolean | ഐച്ഛികം | `true` അല്ലെങ്കിൽ `false` (സ്ഥിരസ്ഥിതി) | parent കാർഡ് entity ലഭ്യമല്ലെങ്കിൽ സബ്-ബട്ടൺ ഒളിപ്പിക്കുക |
| `css_class` | string | ഐച്ഛികം | ഏതെങ്കിലും സ്ട്രിംഗ് | സബ്-ബട്ടണിലെ ഒരു അധിക CSS ക്ലാസ്, പേര് എന്തായാലും നിങ്ങളുടെ [സ്റ്റൈലുകളിൽ](#സ്റ്റൈലിംഗ്) അതിനെ ലക്ഷ്യമിടാൻ (ഉദാ. `My value` എന്നത് `.my-value` നൽകുന്നു) |

</details>

<details>

<summary><b>സ്ലൈഡർ സബ്-ബട്ടൺ ഓപ്ഷനുകൾ (ബട്ടൺ സ്ലൈഡറുകൾക്ക് സമാനം)</b></summary>

<br>

സ്ലൈഡർ സബ്-ബട്ടണുകൾ ബട്ടൺ സ്ലൈഡറുകൾക്ക് സമാനമായ സ്ലൈഡർ ഓപ്ഷനുകൾ പിന്തുണയ്ക്കുന്നു, ഇവ ഉൾപ്പെടെ:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS variables (<a href="#സ്റ്റൈലിംഗ്">സ്റ്റൈലിംഗ്</a> കാണുക)</b></summary>

| Variable | പ്രതീക്ഷിക്കുന്ന മൂല്യം | വിവരണം |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | സബ്-ബട്ടണുകൾക്കുള്ള border radius |
| `--bubble-sub-button-background-color` | `color` | സബ്-ബട്ടണുകൾക്കുള്ള പശ്ചാത്തല നിറം |
| `--bubble-sub-button-outline` | `box-shadow` | ഒരു സബ്-ബട്ടണിലോ സ്ലൈഡറിലോ, ആ ഘടകം അതിനു പിന്നിലെ കാർഡിന്റെ അതേ നിറത്തിൽ വരയ്ക്കപ്പെട്ട് കാണാതാകുമ്പോൾ മാത്രം ചേർക്കുന്ന ഔട്ട്‌ലൈൻ (നീക്കം ചെയ്യാൻ `none` ആയി സജ്ജമാക്കുക) |
| `--bubble-sub-slider-border-radius` | `px` | സ്ലൈഡർ സബ്-ബട്ടണുകൾക്കുള്ള border radius |
| `--bubble-sub-slider-background-color` | `color` | സ്ലൈഡർ സബ്-ബട്ടണുകൾക്കുള്ള പശ്ചാത്തല നിറം |
| `--bubble-sub-slider-height` | `px` | എപ്പോഴും ദൃശ്യമാകുന്ന സ്ലൈഡർ സബ്-ബട്ടണുകൾക്കുള്ള ഉയരം |
| `--bubble-sub-slider-outline` | `box-shadow` | സ്ലൈഡർ സബ്-ബട്ടണുകളുടെ മാത്രം ഔട്ട്‌ലൈൻ, `--bubble-sub-button-outline` ലേക്ക് മടങ്ങുന്നു |
| `--bubble-sub-button-dark-text-color` | `color` | തിളക്കമുള്ള സബ്-ബട്ടൺ പശ്ചാത്തലങ്ങളിലെ ടെക്സ്റ്റ് നിറം |

</details>

#### ഉദാഹരണങ്ങൾ

<details>

<summary>ഒരു vacuum കാർഡ് ഉണ്ടാക്കാൻ ചില സബ്-ബട്ടണുകളുള്ള ഒരു ബട്ടൺ (സ്ക്രീൻഷോട്ടിലേത് പോലെ)</summary>

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

<summary>brightness കാണിക്കുന്ന ഒരു സബ്-ബട്ടണും ലൈറ്റ് ടോഗിൾ ചെയ്യുന്ന ഒന്നും ഉള്ള ഒരു ബട്ടൺ സ്ലൈഡർ (സ്ക്രീൻഷോട്ടിലേത് പോലെ)</summary>

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

<summary>ഇന്നത്തെയും നാളത്തെയും കാലാവസ്ഥയോടൊപ്പം അകത്തും പുറത്തുമുള്ള താപനില കാണിക്കുന്ന ഒരു ബട്ടൺ (സ്ക്രീൻഷോട്ട് ഉൾപ്പെടുന്നു)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> എനിക്ക് നിർഭാഗ്യമെന്ന് പറയട്ടെ എപ്പോഴും മേഘാവൃതമാണ്, പക്ഷേ എല്ലാ icon-കളും കാലാവസ്ഥയെ അടിസ്ഥാനമാക്കി മാറുന്നു.

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

## കാർഡ് ലേഔട്ടുകൾ

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card, Home Assistant section view പൂർണ്ണമായി പിന്തുണയ്ക്കുന്നു, നിങ്ങൾക്ക് കാർഡ് ലേഔട്ട് മാറ്റി കാർഡ് വലുതാക്കാം, section view-ൽ കാർഡ് ഉൾക്കൊള്ളേണ്ട കോളങ്ങളുടെയോ നിരകളുടെയോ എണ്ണവും മാറ്റാം (ആ ഓപ്ഷൻ പിന്തുണയ്ക്കുന്ന കാർഡുകളിൽ മാത്രം). ഈ ലേഔട്ടുകൾ മറ്റെല്ലാ view തരങ്ങളിലും പിന്തുണയ്ക്കുന്നു.

<details>

<summary><b>ലഭ്യമായ കാർഡ് ലേഔട്ടുകൾ</b></summary>

| ലേഔട്ട് | വിവരണം |
| --- | --- |
| `normal` | സാധാരണ ലേഔട്ട് (section view-നായി ഒപ്റ്റിമൈസ് ചെയ്തിട്ടില്ല) |
| `large` | section view-ൽ തിരഞ്ഞെടുത്ത നിരകൾക്ക് അനുസരിച്ച് വലിപ്പം മാറുന്ന ഒരു വലിയ ലേഔട്ട് (section view-നായി ഒപ്റ്റിമൈസ് ചെയ്തത്) |
| `large-2-rows` | section view-ൽ തിരഞ്ഞെടുത്ത നിരകൾക്ക് അനുസരിച്ച് വലിപ്പം മാറുന്ന, 2 നിര സബ്-ബട്ടണുകളുള്ള ഒരു വലിയ ലേഔട്ട് (section view-നായി ഒപ്റ്റിമൈസ് ചെയ്തത്) |
| `large-sub-buttons-grid` | ഈ ലേഔട്ട് സബ്-ബട്ടണുകൾ ഒരു ഗ്രിഡിൽ കാണിക്കും, `rows` കുറഞ്ഞത് `2` ആയി സെറ്റ് ചെയ്തിരിക്കണം.

</details>

#### ഉദാഹരണങ്ങൾ

<details>

<summary>2 നിര സബ്-ബട്ടണുകളോടെ ഊർജ്ജ സ്ഥിതിവിവരക്കണക്കുകൾ കാണിക്കുന്ന ഒരു വലിയ ബട്ടൺ (സ്ക്രീൻഷോട്ട് ഉൾപ്പെടുന്നു)</summary>

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

<summary>12 സബ്-ബട്ടണുകളുള്ള, ഒന്നിലധികം നിരകളുള്ള ഒരു വലിയ ബട്ടൺ</summary>

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

## വ്യവസ്ഥകൾ

ചില ഓപ്ഷനുകൾ വ്യവസ്ഥകളാൽ നിയന്ത്രിക്കപ്പെടുന്നു, Home Assistant ന്റെ [കണ്ടീഷണൽ കാർഡിന്റെ](https://www.home-assistant.io/dashboards/conditional/) വ്യവസ്ഥകൾ പോലെ തന്നെ എഴുതുന്നു:

- ഒരു [സബ്-ബട്ടണിലെ](#സബ്-ബട്ടണുകൾ) `visibility`, അത് കാണിക്കാനോ ഒളിപ്പിക്കാനോ
- ഒരു [പോപ്പ്-അപ്പിലെ](#പോപ്പ്-അപ്പ്) `trigger`, വ്യവസ്ഥകൾ പാലിക്കപ്പെടുമ്പോൾ അത് തുറക്കാൻ
- നിങ്ങളുടെ [ടെംപ്ലേറ്റുകൾക്കുള്ളിൽ](#ടെംപ്ലേറ്റുകൾ) `checkConditionsMet(conditions, hass)`, സ്വന്തം കോഡിൽ ഉത്തരം വേണ്ടിവരുമ്പോൾ

Home Assistant ന്റെ എല്ലാ വ്യവസ്ഥാ തരങ്ങളും വിലയിരുത്തപ്പെടുന്നു: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, ഒപ്പം `and`, `or`, `not` ഗ്രൂപ്പുകളും. Home Assistant ന്റെ കണ്ടീഷൻ ബിൽഡറിലെ വ്യവസ്ഥകളും പ്രവർത്തിക്കും, `sun.is_up`, `light.is_on`, `zone.in_zone` അല്ലെങ്കിൽ `temperature.is_value` പോലെ അവയുടെ ഡൊമെയ്നിന്റെ പേരിലുള്ളവ, അവയുടെ `target`, `options`, `behavior`, `for` ക്രമീകരണങ്ങളോടെ.

<details>

<summary><b>ഉദാഹരണം</b></summary>

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
> വ്യവസ്ഥകൾ നിങ്ങളുടെ ബ്രൗസറിലാണ് വിലയിരുത്തുന്നത്, അതിനാൽ Home Assistant സെർവർ ആവശ്യമുള്ള ചുരുക്കം ചിലവയ്ക്ക് കൃത്യത ഉണ്ടാകില്ല: സൂര്യോദയവും സൂര്യാസ്തമയവും വീണ്ടും കണക്കാക്കുന്നതിനു പകരം `sun.sun` എന്റിറ്റിയിൽ നിന്ന് വായിക്കുന്നു, `for` ദൈർഘ്യം recorder ചരിത്രമില്ലാതെ അവസാന അവസ്ഥാ മാറ്റത്തിൽ നിന്നാണ് അളക്കുന്നത്.
>
> `view_columns` സ്വീകരിക്കപ്പെടും, പക്ഷേ എപ്പോഴും വിജയിക്കും, കാരണം നിങ്ങളുടെ വ്യൂവിന്റെ കോളങ്ങൾ ക്രമീകരിക്കുന്നത് ഒരിക്കലും Bubble Card അല്ല. Bubble Card ന് അറിയാത്ത ഒരു വ്യവസ്ഥാ തരം നിശ്ശബ്ദമായി പരാജയപ്പെടുന്നതിനു പകരം നിങ്ങളുടെ ബ്രൗസർ കൺസോളിൽ ഒരിക്കൽ സ്വയം റിപ്പോർട്ട് ചെയ്യും, അങ്ങനെ അക്ഷരത്തെറ്റും ഇല്ലാത്ത സവിശേഷതയും തിരിച്ചറിയാം.

<br>

---

<br>

## ടാപ്പ്, ഇരട്ട ടാപ്പ്, അമർത്തിപ്പിടിക്കൽ പ്രവർത്തനങ്ങൾ

ഈ ഓപ്ഷൻ പിന്തുണയ്ക്കുന്ന കാർഡുകളിൽ, Home Assistant-ന്റെ സ്ഥിരസ്ഥിതി tap actions, double tap actions, hold actions എന്നിവയും നിങ്ങൾക്ക് ഉപയോഗിക്കാം. ഉദാഹരണത്തിന്, ഇത് ഒരു ബട്ടൺ icon അമർത്തിപ്പിടിച്ച് "more info" ജാലകം കാണിക്കാനോ, ഒരു സബ്-ബട്ടൺ അമർത്തുമ്പോൾ ഒരു service പ്രവർത്തിപ്പിക്കാനോ അനുവദിക്കുന്നു.

**കുറിപ്പ്: ഒരു `double_tap_action` കോൺഫിഗർ ചെയ്തിരിക്കുമ്പോൾ, ഇരട്ട ടാപ്പ് കണ്ടെത്താൻ അനുവദിക്കാൻ സാധാരണ `tap_action`-ന് 200ms-ന്റെ ഒരു കാലതാമസം ഉണ്ടാകും. ഈ കാലതാമസം ആവശ്യമില്ലെങ്കിൽ, ഇരട്ട ടാപ്പ് കൈകാര്യം ചെയ്യൽ പ്രവർത്തനരഹിതമാക്കാൻ `double_tap_action`, `none` ആയി സെറ്റ് ചെയ്യുക.**

### പ്രവർത്തന ഓപ്ഷനുകൾ

<details>

<summary><b>ഓപ്ഷനുകൾ (YAML + വിവരണം)</b></summary>

| പേര് | തരം | പിന്തുണയ്ക്കുന്ന ഓപ്ഷനുകൾ | വിവരണം |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | നടപ്പിലാക്കേണ്ട പ്രവർത്തനം |
| `target` | object |  | `call-service`-ൽ മാത്രമേ പ്രവർത്തിക്കൂ. [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) പിന്തുടരുന്നു |
| `navigation_path` | string | നിങ്ങളുടെ ഡാഷ്ബോർഡിന്റെ ഏത് path ഉം | action, navigate ആയി നിർവചിക്കുമ്പോൾ പോകേണ്ട path (ഉദാ: ഒരു പോപ്പ്-അപ്പ് തുറക്കാൻ `'#kitchen'`) |
| `url_path` | string | ഏത് ലിങ്കും | `action`, `url` ആയിരിക്കുമ്പോൾ ക്ലിക്കിൽ തുറക്കേണ്ട URL (ഉദാ: `https://www.google.com`) |
| `service` | string | ഏത് service ഉം | `action`, `call-service` ആയി നിർവചിക്കുമ്പോൾ വിളിക്കേണ്ട service (ഉദാ: `media_player.media_play_pause`) |
| `data` അല്ലെങ്കിൽ `service_data` | object | ഏത് service data-യും | `action`, `call-service` ആയി നിർവചിക്കുമ്പോൾ ഉൾപ്പെടുത്തേണ്ട service data (ഉദാ: `entity_id: media_player.kitchen`) |
| `confirmation` | object | [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) കാണുക | ഒരു സ്ഥിരീകരണ പോപ്പ്-അപ്പ് കാണിക്കുക (Bubble Card-ന്റെതല്ല), സ്ഥിരസ്ഥിതി `confirmation` object-നെ മറികടക്കുന്നു |

</details>

#### ഉദാഹരണം

<details>

<summary>ഒരു പോപ്പ്-അപ്പ് തുറക്കാനുള്ള ഒരു ബട്ടൺ</summary>

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


## സ്റ്റൈലിംഗ്

**card-mod ഉപയോഗിക്കാതെ** എല്ലാ കാർഡുകളുടെയും CSS മാറ്റാൻ നിങ്ങൾക്ക് നാല് വിധത്തിൽ കസ്റ്റം സ്റ്റൈലുകൾ ചേർക്കാം:

- എഡിറ്ററിൽ, നിങ്ങൾ മാറ്റാൻ ആഗ്രഹിക്കുന്ന കാർഡിലേക്ക് പോയി, _Styling options > Custom styles & JS templates_ എന്നതിലേക്ക് നാവിഗേറ്റ് ചെയ്ത്, നിങ്ങളുടെ കസ്റ്റം സ്റ്റൈലുകൾ ചേർക്കുക (താഴെയുള്ള ടിപ്പുകളും ഉദാഹരണങ്ങളും പരിശോധിക്കുക).
- എഡിറ്ററിൽ (അല്ലെങ്കിൽ [YAML](#മൊഡ്യൂളുകൾ) ൽ), നിങ്ങൾ മാറ്റാൻ ആഗ്രഹിക്കുന്ന കാർഡിലേക്ക് പോയി, _Modules_ എന്നതിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക, തുടർന്ന് ഒരു പുതിയ മൊഡ്യൂൾ സൃഷ്ടിക്കുക (ഇത് എല്ലാ കാർഡുകൾക്കും ലഭ്യമാകും), അല്ലെങ്കിൽ ലഭ്യമായ ഏതെങ്കിലും മൊഡ്യൂൾ ഇൻസ്റ്റാൾ ചെയ്യാൻ **Module Store** ലേക്ക് പോകുക (മൊഡ്യൂളുകളെക്കുറിച്ചുള്ള കൂടുതൽ വിവരങ്ങൾ [താഴെ](#മൊഡ്യൂളുകൾ) കാണാം).
- [തീം](https://www.home-assistant.io/integrations/frontend/#defining-themes) ഫയലിൽ YAML ൽ CSS വേരിയബിളുകൾ ചേർത്ത് (ഇവ മുകളിലുള്ള ഓരോ കാർഡിന്റെയും ഡോക്യുമെന്റേഷനിൽ ലഭ്യമാണ്). ഇത് ആഗോള മാറ്റങ്ങൾക്ക് അനുവദിക്കുന്നു.

  <details>
  
  <summary>ഉദാഹരണം</a></summary>
  
  <br>

  `Bubble:` എന്ന വരി പകർത്തരുത്, ഇത് നിങ്ങൾ ഉപയോഗിക്കുന്ന തീമിന്റെ പേരാണ്. വേരിയബിളുകളിൽ നിന്ന് `--` നീക്കം ചെയ്യുകയും വേണം.

  ഏതെങ്കിലും മാറ്റങ്ങൾക്ക് ശേഷം തീം പുതുക്കാൻ [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) ആക്ഷൻ പ്രവർത്തിപ്പിക്കേണ്ടതുണ്ട്.

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
  
- YAML ൽ `styles: |` എന്നത് ചേർത്ത്, തുടർന്ന് നിങ്ങളുടെ കസ്റ്റം സ്റ്റൈലുകൾ എഴുതി (താഴെയുള്ള ടിപ്പുകളും ഉദാഹരണങ്ങളും പരിശോധിക്കുക).

> [!TIP]  
> **ഏത് സ്റ്റൈൽ ക്ലാസുകൾ മാറ്റാൻ കഴിയുമെന്ന് മനസ്സിലാക്കാൻ**, ഈ റെപ്പോസിറ്ററിയിലെ [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) ഫോൾഡർ നോക്കാം. ഓരോ കാർഡ് ഫോൾഡറിലും, `styles.css` എന്ന പേരിലുള്ള ഒരു ഫയൽ നിങ്ങൾക്ക് കാണാം. ഈ ഫയലുകളിൽ പ്രയോഗിക്കുന്ന എല്ലാ സ്റ്റൈലുകളും അടങ്ങിയിരിക്കുന്നു. ഇത് CSS വേരിയബിളുകളേക്കാൾ വളരെയധികം സാധ്യതകൾ നൽകുന്നു, പക്ഷേ ഓരോ കാർഡിലേക്കും ഇത് പ്രത്യേകം ചേർക്കേണ്ടതുണ്ട്.
> 
> [കമ്മ്യൂണിറ്റിയിൽ നിന്നുള്ള](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) ധാരാളം ഉദാഹരണങ്ങളും, അല്പം തിരയലിലൂടെ [Home Assistant ഫോറത്തിൽ](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) ചിലതും കണ്ടെത്താം.
>
> Home Assistant-നുള്ള Bubble തീം (സ്ക്രീൻഷോട്ടുകളിലേതു പോലെ) [ഇവിടെ](https://github.com/Clooos/Bubble) ലഭ്യമാണ്.
>
> എന്റെ [YouTube ചാനലിൽ](https://www.youtube.com/@cloooos) ഒരു ട്യൂട്ടോറിയൽ വീഡിയോ ഉടൻ വരുന്നു!

> [!IMPORTANT]  
> ഇതിനകം നിർവചിച്ചിട്ടുള്ള ചില CSS സ്റ്റൈലുകൾക്ക് `!important;` ചേർക്കേണ്ടി വന്നേക്കാം എന്നത് ശ്രദ്ധിക്കുക (താഴെയുള്ള ഉദാഹരണങ്ങൾ കാണുക).

> [!TIP]  
> സബ്-ബട്ടണുകളെ പേരടിസ്ഥാനത്തിലുള്ള ക്ലാസുകൾ ഉപയോഗിച്ച് ടാർഗെറ്റ് ചെയ്യാം. ഉദാഹരണത്തിന്, "My sub-button" എന്ന് പേരുള്ള ഒരു സബ്-ബട്ടണിനെ `.my-sub-button` ഉപയോഗിച്ച് സ്റ്റൈൽ ചെയ്യാം. സ്ലൈഡർ സബ്-ബട്ടണുകൾക്ക് `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` തുടങ്ങിയവയും ലഭ്യമാണ്.
>
> പേരടിസ്ഥാനത്തിലുള്ള ക്ലാസ് സബ്-ബട്ടണിന്റെ പേര് മാറ്റുമ്പോൾ മാറും, പേര് വിവർത്തനം ചെയ്യപ്പെടുമ്പോൾ അതും വിവർത്തനം ചെയ്യപ്പെടും. പേരും ഭാഷയും എന്തായാലും ഒരിക്കലും മാറാത്ത സ്വന്തം ക്ലാസ് ലഭിക്കാൻ സബ്-ബട്ടണിൽ `css_class` സജ്ജമാക്കുക.

#### ഉദാഹരണങ്ങൾ

<details>

<summary>ഏതെങ്കിലും Bubble Card ന്റെ ഫോണ്ട് വലുപ്പം മാറ്റുന്നത്</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>ഒരു തിരശ്ചീന ബട്ടൺ സ്റ്റാക്കിലെ ഒരൊറ്റ ബട്ടണിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറ്റുന്നത്</summary>

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

<summary>ഒരു കാർഡിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറ്റുന്നത്</summary>

<br>

ഇത് (പോപ്പ്-അപ്പുകൾ ഒഴികെ) എല്ലാ Bubble Card തരങ്ങളിലും പ്രവർത്തിക്കുന്നു:

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

ഇത് ഒരു ബട്ടൺ കാർഡിൽ മാത്രം അതേ കാര്യം ചെയ്യുന്നു (ഇത് പോപ്പ്-അപ്പ് ഹെഡറിനും പ്രവർത്തിക്കുന്നു): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

`on` ആയിരിക്കുമ്പോൾ നിറം മാറ്റാൻ താഴെയുള്ള സ്റ്റൈൽ ടെംപ്ലേറ്റുകൾ നോക്കുക.

</details>

<details>

<summary>ഒരു ബട്ടൺ സ്ലൈഡറിന്റെ നിറം മാറ്റുന്നത്</summary>

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

<summary>ഒരു വിഭജനിയുടെ വരിയുടെ നിറം മാറ്റുന്നത്</summary>

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

<summary>ഒരു ഐക്കണിന്റെ നിറം മാറ്റുന്നത്</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

ഒരു തിരശ്ചീന ബട്ടൺ സ്റ്റാക്ക് ഐക്കണിന്.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>ഒരു ഐക്കൺ കണ്ടെയ്നറിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറ്റുന്നത്</summary>

<br>

ഇത് (പോപ്പ്-അപ്പുകൾ ഒഴികെ) എല്ലാ Bubble Card തരങ്ങളിലും പ്രവർത്തിക്കുന്നു:

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

ഇത് പോപ്പ്-അപ്പ് ഹെഡറിന് അതേ കാര്യം ചെയ്യുന്നു: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>സബ്-ബട്ടണുകളുടെ വലുപ്പം മാറ്റുന്നത് (large ലേഔട്ടിന് അനുയോജ്യം)</summary>

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

<summary>രണ്ടാമത്തെ സബ്-ബട്ടണിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറ്റുന്നത്</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>ഒരു ഐക്കണിന്റെ വലുപ്പം മാറ്റുന്നത്</summary>

<br>

പ്രധാന ഐക്കണിന്.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

സബ്-ബട്ടൺ ഐക്കണുകൾക്ക്.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>ഒരു സബ് ബട്ടണിൽ ഐക്കണിന് പകരം ഒരു ചിത്രം ഉപയോഗിക്കുന്നത്</summary>

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

Home Assistant ന്റെ "www" ഫോൾഡറിലുള്ള ഒരു "pictures" ഫോൾഡറിൽ (അല്ലെങ്കിൽ നിങ്ങൾക്ക് വേണ്ട പേരിൽ) ഈ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.

</details>

<details>

<summary>അഡ്വാൻസ്ഡ് ഉദാഹരണം: സബ്-ബട്ടണുകളുടെ ഒരു തിരശ്ചീന വരി സൃഷ്ടിക്കുന്നത് (സ്ക്രീൻഷോട്ട് ഉൾപ്പെടെ)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> എനിക്ക് ഇത് വളരെ ഇഷ്ടമാണ്, എന്റെ ഡാഷ്ബോർഡിൽ ഒരു ഹെഡറായി ഞാൻ ഇത് ഉപയോഗിക്കുന്നു.

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

## ടെംപ്ലേറ്റുകൾ

**Bubble Card Jinja ടെംപ്ലേറ്റുകളെ പിന്തുണയ്ക്കുന്നില്ല**, പക്ഷേ പരിചയസമ്പന്നരായ ഉപയോക്താക്കൾക്ക് അവരുടെ [കസ്റ്റം സ്റ്റൈലുകളിൽ](#സ്റ്റൈലിംഗ്) നേരിട്ട് JS ൽ ടെംപ്ലേറ്റുകൾ ചേർക്കാം. ഉദാഹരണത്തിന്, ഇത് ഒരു ഐക്കൺ, ടെക്സ്റ്റുകൾ അല്ലെങ്കിൽ ഒരു എലമെന്റിന്റെ നിറങ്ങൾ ഡൈനാമിക്കായി മാറ്റാൻ, ഒരു എലമെന്റ് (ഒരു സബ്-ബട്ടൺ പോലുള്ളത്) വ്യവസ്ഥാപിതമായി കാണിക്കാനോ മറയ്ക്കാനോ, അല്ലെങ്കിൽ ഒരു സ്റ്റേറ്റ്, ഒരു ആട്രിബ്യൂട്ട് എന്നിവ അടിസ്ഥാനമാക്കി മിക്കവാറും എന്തും ചെയ്യാൻ അനുവദിക്കുന്നു.

> [!TIP]  
> JS ടെംപ്ലേറ്റുകളെക്കുറിച്ചുള്ള കൂടുതൽ വിവരങ്ങൾ [ഇവിടെ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). എല്ലാം ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കാൻ **എപ്പോഴും നിങ്ങളുടെ ബ്രൗസർ കൺസോൾ നോക്കുക** എന്നതാണ് എന്റെ ഉപദേശം.

> [!IMPORTANT]  
> **CSS പ്രോപ്പർട്ടി മാറ്റാത്ത എല്ലാ ടെംപ്ലേറ്റുകളും അവസാനം സ്ഥാപിക്കണം! ഒരു ഐക്കൺ, ഒരു ടെക്സ്റ്റ് അല്ലെങ്കിൽ ഏതെങ്കിലും എലമെന്റ് മാറ്റുന്നത് പോലെ.**

#### ലഭ്യമായ വേരിയബിളുകളും ഫംഗ്ഷനുകളും

<details>

<summary>വേരിയബിളുകൾ</summary>

<br>

മിക്ക കാർഡുകളിലും നിങ്ങൾക്ക് ഈ വേരിയബിളുകളിലേക്ക് ആക്സസ് ഉണ്ട്:

- `state` നിങ്ങളുടെ നിർവചിച്ച `entity` യുടെ സ്റ്റേറ്റ് തിരികെ നൽകും.
  
- `entity` ഈ ഉദാഹരണത്തിൽ `switch.test` പോലെ നിങ്ങൾ നിർവചിച്ച എന്റിറ്റി തിരികെ നൽകും.
  
- ഐക്കൺ മാറ്റാൻ `icon` ഇങ്ങനെ ഉപയോഗിക്കാം `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` നിങ്ങളുടെ ആദ്യ സബ്-ബട്ടണിന്റെ നിർവചിച്ച `entity` യുടെ സ്റ്റേറ്റ് തിരികെ നൽകും, `[0]` ആദ്യ സബ്-ബട്ടൺ സ്റ്റേറ്റാണ്, `[1]` രണ്ടാമത്തേത്...
  
- ആദ്യ സബ്-ബട്ടൺ ഐക്കൺ മാറ്റാൻ `subButtonIcon[0]` ഇങ്ങനെ ഉപയോഗിക്കാം `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` ആദ്യ സബ്-ബട്ടൺ ഐക്കണാണ്, `[1]` രണ്ടാമത്തേത്...
  
- `card` DOM ലെ കാർഡ് എലമെന്റ് തിരികെ നൽകും.
  
- `hass` ഒരു അഡ്വാൻസ്ഡ് വേരിയബിളാണ്, ഇത് നിങ്ങൾക്ക് കൂടുതൽ നിയന്ത്രണം നൽകുന്നു, ഉദാഹരണത്തിന് `light.kitchen` ന്റെ സ്റ്റേറ്റ് ഇങ്ങനെ തിരികെ നൽകാം `hass.states['light.kitchen'].state` അല്ലെങ്കിൽ ഒരു ആട്രിബ്യൂട്ട് ഇങ്ങനെ `hass.states[entity].attributes.brightness`.

- `this` നിങ്ങളുടെ സെറ്റപ്പിനെയും ഡാഷ്ബോർഡിനെയും കുറിച്ചുള്ള ധാരാളം ഉപകാരപ്രദമായ വിവരങ്ങൾ തിരികെ നൽകും, നിങ്ങൾ എന്ത് ചെയ്യുന്നു എന്ന് അറിയാമെങ്കിൽ മാത്രം ഇത് ഉപയോഗിക്കുക.

</details>

<details>

<summary>ഫംഗ്ഷനുകൾ</summary>

<br>

എല്ലാ ഗ്ലോബൽ JS ഫംഗ്ഷനുകളിലേക്കും നിങ്ങൾക്ക് ആക്സസ് ഉണ്ട്, പക്ഷേ ഇവയിലേക്കും നിങ്ങൾക്ക് ആക്സസ് ഉണ്ട്:

- കാലാവസ്ഥ തിരികെ നൽകുന്ന ഒരു സ്റ്റേറ്റ് അടിസ്ഥാനമാക്കി ഒരു കാലാവസ്ഥ ഐക്കൺ തിരികെ നൽകാൻ `getWeatherIcon` ഉപയോഗിക്കാം. ഉദാഹരണത്തിന്, മൂന്നാമത്തെ സബ്-ബട്ടൺ ഐക്കൺ ഇന്നത്തെ കാലാവസ്ഥ ഐക്കണിലേക്ക് മാറ്റാൻ നിങ്ങൾക്ക് ഇത് ചെയ്യാം `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, `.forecast[1]?.condition` നാളെയ്ക്ക് വേണ്ടിയാണ്...

  അതിനായി നിങ്ങൾക്ക് ഒരു ടെംപ്ലേറ്റ് സെൻസർ സൃഷ്ടിക്കേണ്ടിവരും. നിങ്ങളുടെ `configuration.yaml` ൽ ചേർക്കാവുന്നത് ഇതാ:
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
- [വ്യവസ്ഥകളുടെ](#വ്യവസ്ഥകൾ) ഒരു പട്ടിക പാലിക്കപ്പെടുമ്പോൾ `checkConditionsMet(conditions, hass)` `true` നൽകുന്നു, ഉദാഹരണത്തിന് `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- ഒരു സ്റ്റേറ്റ് വിവർത്തനം ചെയ്യാൻ `hass.formatEntityState(state)` ഉപയോഗിക്കാം (ഒരു സ്റ്റേറ്റ് യൂണിറ്റ് സ്വമേധയാ ചേർക്കാതെ തന്നെ ലഭിക്കാനും ഇത് ഉപയോഗിക്കാം).
- ഒരു ആട്രിബ്യൂട്ട് വിവർത്തനം ചെയ്യാൻ `hass.formatEntityAttributeValue(state, "attribute")` ഉപയോഗിക്കാം (ഒരു സ്റ്റേറ്റ് യൂണിറ്റ് സ്വമേധയാ ചേർക്കാതെ തന്നെ ലഭിക്കാനും ഇത് ഉപയോഗിക്കാം).

</details>

#### ഉദാഹരണങ്ങൾ

താഴെ നിരവധി ഉദാഹരണങ്ങൾ നിങ്ങൾക്ക് കാണാം, പക്ഷേ എന്റെ [Patreon പേജിലും](https://www.patreon.com/c/Clooos) വളരെ അഡ്വാൻസ്ഡ് ടെംപ്ലേറ്റുകൾ കാണാം, ഉദാഹരണത്തിന് കാർഡിന്റെ ഐക്കണുകൾക്ക് ചുറ്റും നാല് വരെ വ്യവസ്ഥാപിത ബാഡ്ജുകൾ അനുവദിക്കുന്ന ഒന്ന് (എന്റെ പ്രിയപ്പെട്ടത്). Bubble Card കസ്റ്റം സ്റ്റൈലുകളുടെയും ടെംപ്ലേറ്റുകളുടെയും എല്ലാ സാധ്യതകളും പഠിക്കാനുള്ള മികച്ച മാർഗം കൂടിയാണിത്!

<details>
<summary>എന്റെ Patreon പേജിൽ നിന്നുള്ള ഉദാഹരണങ്ങൾ</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">ഏതെങ്കിലും കാർഡിലേക്ക് Home Assistant പോലുള്ള ബാഡ്ജുകൾ ചേർക്കുന്നത്</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">ഒരു എന്റിറ്റിയും ഉപയോഗിക്കാതെ ഒരു വിഭജനിയിൽ ഫോർമാറ്റ് ചെയ്ത തീയതിയും സമയവും കാണിക്കുന്നത്</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">രണ്ട് വരികളിൽ ഒരു സബ്-ബട്ടൺ സ്റ്റേറ്റ് കാണിക്കുന്നത്</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">ഒരു സെലക്റ്റ് സബ്-ബട്ടണിനുള്ളിലെ ലേബലുകളും ഐക്കണുകളും കസ്റ്റമൈസ് ചെയ്യുന്നത്</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">ആവശ്യമുള്ളപ്പോൾ മാത്രം കാണിക്കുന്ന ഒരു സ്ഥിരമായ റിമൈൻഡർ പോപ്പ്-അപ്പ് ചേർക്കുന്നത്</a>
</p>

<br>

</details>

<details>

<summary><code>off</code> ആയിരിക്കുമ്പോൾ ചുവപ്പും <code>on</code> ആയിരിക്കുമ്പോൾ നീലയുമായ ഒരു ബട്ടണിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറ്റുന്നത്</summary>

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

<summary>തിരശ്ചീന ബട്ടൺ സ്റ്റാക്കിനായി ഒരു എന്റിറ്റി അടിസ്ഥാനമാക്കി ഒരു ബട്ടണിന്റെ ബാക്ക്ഗ്രൗണ്ട് നിറം മാറ്റുന്നത്</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>ഒരു സബ്-ബട്ടൺ വ്യവസ്ഥാപിതമായി കാണിക്കുന്നത്/മറയ്ക്കുന്നത്</summary>

<br>

എന്റെ വാക്വം കുടുങ്ങിയിരിക്കുമ്പോൾ മാത്രം ആദ്യ സബ്-ബട്ടൺ കാണിക്കുന്ന ഒന്നാണിത്.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

ബാറ്ററി 10% ൽ താഴെയാകുമ്പോൾ ഒരു സബ്-ബട്ടൺ കാണിക്കുന്ന ഒന്നാണിത്. "Low battery" കാണിക്കുന്ന ഒരു സബ്-ബട്ടണിനൊപ്പം ഉപകാരപ്രദമാണ്.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>ഒരു ഐക്കൺ അല്ലെങ്കിൽ സബ്-ബട്ടൺ ഐക്കൺ വ്യവസ്ഥാപിതമായി മാറ്റുന്നത്</summary>

<br>

ഒരു വാക്വം കുടുങ്ങിയിരിക്കുമ്പോൾ മാത്രം ഒരു ബട്ടൺ ഐക്കൺ മാറ്റുന്ന ഒന്നാണിത്.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

ഒരു വാക്വം കുടുങ്ങിയിരിക്കുമ്പോൾ മാത്രം ആദ്യ സബ്-ബട്ടൺ ഐക്കൺ മാറ്റുന്ന ഒന്നാണിത്.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>ഒരു ഐക്കൺ അല്ലെങ്കിൽ സബ്-ബട്ടൺ ഐക്കൺ നിറം വ്യവസ്ഥാപിതമായി മാറ്റുന്നത്</summary>

<br>

ഇത് അതിന്റെ സ്റ്റേറ്റ് അടിസ്ഥാനമാക്കി ഒരു ബട്ടൺ ഐക്കൺ നിറം മാറ്റുന്നു.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

ഇത് അതിന്റെ സ്റ്റേറ്റ് അടിസ്ഥാനമാക്കി ഒരു സബ്-ബട്ടൺ ഐക്കൺ നിറം മാറ്റുന്നു. `.bubble-sub-button-1` ആദ്യ സബ്-ബട്ടണാണ്, മറ്റൊരു സബ്-ബട്ടൺ ഐക്കൺ മാറ്റണമെങ്കിൽ `1` മാറ്റുക.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>ഒരു ഫാൻ ഐക്കൺ വ്യവസ്ഥാപിതമായി ആനിമേറ്റ് ചെയ്യുന്നത്</summary>

<br>

ഇത് ഒരു ഫാൻ `on` ആയിരിക്കുമ്പോൾ ഒരു ബട്ടൺ ഐക്കൺ കറക്കുന്നു.
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

<summary>ടെക്സ്റ്റുകൾ ടെംപ്ലേറ്റ് ചെയ്യുന്നത് (പേരോ സ്റ്റേറ്റോ പോലുള്ളവ)</summary>

<br>

ഇത് നിങ്ങളുടെ കാലാവസ്ഥ അടിസ്ഥാനമാക്കി "It's currently sunny" എന്നതുപയോഗിച്ച് ഒരു ബട്ടണിന്റെ പേര്/സ്റ്റേറ്റ് മാറ്റുന്നു.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
അല്ലെങ്കിൽ സബ്-ബട്ടണുകൾക്ക് പ്രയോഗിക്കുമ്പോൾ:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


സ്റ്റേറ്റ് (`.bubble-state`) ടെംപ്ലേറ്റ് ചെയ്യണമെങ്കിൽ `show_state: true` ടോഗിൾ ചെയ്യരുത്, ഒരു ആട്രിബ്യൂട്ടും കൂടാതെ `show_attribute: true` മാത്രം ടോഗിൾ ചെയ്യുക.

</details>

<details>

<summary>അഡ്വാൻസ്ഡ് ഉദാഹരണം: ഒരു പോപ്പ്-അപ്പ് തുറന്നിരിക്കുമ്പോൾ ഒരു സബ്-ബട്ടണിന്റെ നിറം മാറ്റുന്നത്</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>അഡ്വാൻസ്ഡ് ഉദാഹരണം: നിങ്ങളുടെ ഭാഷയിലേക്ക് വിവർത്തനം ചെയ്ത ഒരു സ്റ്റേറ്റ് അടിസ്ഥാനമാക്കി ഒരു വിഭജനി പേര് ടെംപ്ലേറ്റ് ചെയ്യുന്നത്</summary>

<br>

ഒരു സ്റ്റേറ്റ് വിവർത്തനം ചെയ്യാൻ `hass.formatEntityState(state)` ഉം ഒരു ആട്രിബ്യൂട്ട് വിവർത്തനം ചെയ്യാൻ `hass.formatEntityAttributeValue(state, "attribute")` ഉം ഉപയോഗിക്കാം.

ഇത് കാലാവസ്ഥ അടിസ്ഥാനമാക്കി പേരും ഐക്കണും മാറ്റുന്നു, "Nuageux" എന്നാൽ ഫ്രഞ്ചിൽ "Cloudy" എന്നാണ്.

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

## മൊഡ്യൂളുകൾ

നിങ്ങളുടെ എല്ലാ Bubble Cards ലും കസ്റ്റം സ്റ്റൈലുകളും ടെംപ്ലേറ്റുകളും സംരക്ഷിക്കാനും, വീണ്ടും ഉപയോഗിക്കാനും, പങ്കിടാനും അനുവദിക്കുന്ന ശക്തമായ ഒരു ഫീച്ചറാണ് മൊഡ്യൂളുകൾ. ഒരേ കോഡ് പല കാർഡുകളിലേക്ക് പകർത്തി ഒട്ടിക്കുന്നതിന് പകരം, നിങ്ങൾക്ക് ഒരു മൊഡ്യൂൾ സൃഷ്ടിച്ച് ആവശ്യമുള്ളിടത്ത് പ്രയോഗിക്കാം. ഇത് നിങ്ങളുടെ ഡാഷ്ബോർഡിന്റെ രൂപവും അനുഭവവും കൈകാര്യം ചെയ്യുന്നത് വളരെ എളുപ്പവും കാര്യക്ഷമവുമാക്കുന്നു.

പക്ഷേ ഈ ഫീച്ചർ അതിനേക്കാൾ വളരെ ശക്തമാണ്, Home Assistant യുടെ എല്ലാ ഡിഫോൾട്ട് [ഫോം](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) ഓപ്ഷനുകൾ ഉപയോഗിച്ച്, Bubble Card എഡിറ്ററിൽ യഥാർത്ഥ ഫീച്ചറുകൾ നിങ്ങൾക്ക് സ്വയം ചേർക്കാൻ ഇത് അനുവദിക്കുന്നു!  
ലൈവ് മാറ്റങ്ങൾ കാണിക്കാനും ആട്രിബ്യൂട്ടുകൾ ശരിയായി പിന്തുണയ്ക്കാനും ഒബ്ജക്റ്റ് സെലക്ടർ മെച്ചപ്പെടുത്തിയിട്ടുണ്ട്.

ഒരു മൊഡ്യൂളിന് ബിൽട്ട്-ഇൻ [എന്റിറ്റി നിർദ്ദേശങ്ങൾക്ക്](#എന്റിറ്റി-നിർദ്ദേശങ്ങൾ) അരികിൽ Home Assistant കാർഡ് പിക്കറിനോട് പ്രതികരിക്കാനും കഴിയും: മുൻകൂട്ടി വിവരിക്കാവുന്ന കാർഡുകൾക്ക് `suggestions` ഉപയോഗിക്കുക, നിങ്ങളുടെ സജ്ജീകരണത്തിൽ നിന്ന് കണക്കാക്കേണ്ടിവരുമ്പോൾ `suggestions_code` ഉപയോഗിക്കുക, ഉദാഹരണത്തിന് തിരഞ്ഞെടുത്ത എന്റിറ്റി ഉൾപ്പെടുന്ന ഏരിയയിലെ എല്ലാ എന്റിറ്റികളിൽ നിന്നും നിർമ്മിച്ച ഒരു പോപ്പ്-അപ്പ്. രണ്ട് കീകളും [ഇവിടെ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) രേഖപ്പെടുത്തിയിട്ടുണ്ട്.

[കമ്മ്യൂണിറ്റി സൃഷ്ടിച്ച മൊഡ്യൂളുകൾ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) കണ്ടെത്താനും ഇൻസ്റ്റാൾ ചെയ്യാനും, അല്ലെങ്കിൽ നിങ്ങളുടെ സ്വന്തം സൃഷ്ടികൾ പങ്കിടാനും **Module Store** ബ്രൗസ് ചെയ്യാം!

> [!TIP]
> ഒരു കാർഡിന്റെ `styles` സെക്ഷനിലെ കോഡ് പോലെ തന്നെയാണ് ഒരു Module ന്റെ കോഡ് പ്രവർത്തിക്കുന്നത്. [ടെംപ്ലേറ്റുകൾ](#ടെംപ്ലേറ്റുകൾ) സെക്ഷനിലെ എല്ലാ വേരിയബിളുകളും ഫംഗ്ഷനുകളും ഇവിടെയും ലഭ്യമാണ്.

<br>

### പ്രാരംഭ സജ്ജീകരണം

> [!IMPORTANT]
> v3.1.0 മുതൽ, Bubble Card Tools ആണ് മൊഡ്യൂളുകൾക്കായി ശുപാർശ ചെയ്യുന്ന സ്റ്റോറേജ് ബാക്കെൻഡ്. നിലവിലുള്ള സെറ്റപ്പുകൾക്ക് പഴയ ടെംപ്ലേറ്റ് സെൻസർ രീതി ഇപ്പോഴും പ്രവർത്തിക്കും, പക്ഷേ പുതിയ മൊഡ്യൂളുകൾക്കും Module Store ഫീച്ചറുകൾക്കും Bubble Card Tools വഴിയാണ് മികച്ച പിന്തുണ ലഭിക്കുന്നത്.

Module Editor ഉം Module Store ഉം സജീവമാക്കുന്നത് Bubble Card Tools ഇന്റഗ്രേഷനാണ്, ഇത് മൊഡ്യൂളുകൾ വ്യക്തിഗത YAML ഫയലുകളായി സംഭരിക്കുന്നു. നിലവിലുള്ള മൊഡ്യൂളുകൾ സ്വയമേവ മൈഗ്രേറ്റ് ചെയ്യപ്പെടും.

ഇൻസ്റ്റാളേഷനും കോൺഫിഗറേഷനും വിശദീകരിക്കുന്നത് ഇവിടെയാണ്:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

ഏതെങ്കിലും കാർഡിന്റെ ക്രമീകരണങ്ങളിൽ, **Modules** സെക്ഷനിൽ നിന്ന് Module Editor ലേക്ക് നിങ്ങൾക്ക് ആക്സസ് ചെയ്യാം. എഡിറ്ററിന് രണ്ട് പ്രധാന ടാബുകൾ ഉണ്ട്:

#### My Modules ടാബ്

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

ഈ ടാബ് നിങ്ങളുടെ ഇൻസ്റ്റാൾ ചെയ്ത എല്ലാ മൊഡ്യൂളുകളും കാണിക്കുന്നു, ഇത് നിങ്ങളെ ഇവ ചെയ്യാൻ അനുവദിക്കുന്നു:

- നിലവിലുള്ള മൊഡ്യൂളുകൾ നിലവിലെ കാർഡിലേക്ക് **പ്രയോഗിക്കുക**
- ഒരു പുതിയ മൊഡ്യൂൾ പുതുതായി **സൃഷ്ടിക്കുക**
- ലൈവ് പ്രിവ്യൂ ഉപയോഗിച്ച് നിലവിലുള്ള മൊഡ്യൂളുകൾ **എഡിറ്റ് ചെയ്യുക**
- ഇനി ആവശ്യമില്ലാത്ത മൊഡ്യൂളുകൾ **ഡിലീറ്റ് ചെയ്യുക**
- മൊഡ്യൂളുകൾ **തിരയുക**, **സോർട്ട് ചെയ്യുക** (അക്ഷരമാലാ ക്രമം, സമീപകാലം, സജീവമായവ ആദ്യം)
- ഒരു മൊഡ്യൂൾ എല്ലാ കാർഡുകൾക്കും സ്വയമേവ പ്രയോഗിക്കാൻ **ഗ്ലോബൽ സ്റ്റാറ്റസ് സെറ്റ് ചെയ്യുക**
- ബാക്കപ്പിനോ പങ്കിടലിനോ വേണ്ടി മൊഡ്യൂളുകൾ **ഇംപോർട്ട്/എക്സ്പോർട്ട് ചെയ്യുക**
- മൊഡ്യൂൾ എഡിറ്ററിൽ **ഓപ്ഷണൽ: എന്റിറ്റി നിർദ്ദേശങ്ങൾ** എന്നതിനു കീഴിൽ **എന്റിറ്റി നിർദ്ദേശങ്ങൾ എഴുതുക**, അങ്ങനെ നിങ്ങളുടെ മൊഡ്യൂൾ Home Assistant കാർഡ് പിക്കറിൽ നിർദ്ദേശിക്കപ്പെടും. നിയമങ്ങളും കണക്കാക്കിയ നിർദ്ദേശങ്ങളും എഴുതുമ്പോൾ തന്നെ പരിശോധിക്കപ്പെടും, അവിടെ ഒരു പിശക് ഉണ്ടെങ്കിൽ സേവ് ചെയ്യാനാകില്ല, നിങ്ങൾ തിരഞ്ഞെടുക്കുന്ന ഏത് എന്റിറ്റിക്കും നിർദ്ദേശിക്കപ്പെട്ട കാർഡുകൾ പ്രിവ്യൂ കാണിക്കും

#### Module Store ടാബ്

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

ഈ ടാബ് [കമ്മ്യൂണിറ്റിയിൽ നിന്നുള്ള എല്ലാ ലഭ്യമായ മൊഡ്യൂളുകളും](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) പ്രദർശിപ്പിക്കും, ഇത് നിങ്ങളെ ഇവ ചെയ്യാൻ അനുവദിക്കുന്നു:

- എല്ലാ കമ്മ്യൂണിറ്റി-സൃഷ്ടിച്ച മൊഡ്യൂളുകളും **ബ്രൗസ് ചെയ്യുക**
- പേര്, അനുയോജ്യത, അല്ലെങ്കിൽ കീവേഡുകൾ പ്രകാരം മൊഡ്യൂളുകൾ **തിരയുകയും** ഫിൽട്ടർ ചെയ്യുകയും ചെയ്യുക
- ഒറ്റ ക്ലിക്കിൽ മൊഡ്യൂളുകൾ **ഇൻസ്റ്റാൾ ചെയ്യുക**
- പുതിയ പതിപ്പുകൾ ലഭ്യമാകുമ്പോൾ ഇൻസ്റ്റാൾ ചെയ്ത മൊഡ്യൂളുകൾ **അപ്ഡേറ്റ് ചെയ്യുക**

> [!TIP]
> ഒരു കാർഡ് തരവുമായി അനുയോജ്യമെന്ന് ഇതുവരെ അടയാളപ്പെടുത്തിയിട്ടില്ലാത്ത മൊഡ്യൂളുകൾ പരീക്ഷിക്കാൻ, എഡിറ്ററിൽ പിന്തുണയില്ലാത്ത മൊഡ്യൂളുകൾ നിങ്ങൾക്ക് സജീവമാക്കാം.

<br>

### മൊഡ്യൂളുകൾ എങ്ങനെ ഉപയോഗിക്കാം

#### ഒരു പുതിയ മൊഡ്യൂൾ സൃഷ്ടിക്കുന്നത്

<details>

<summary>വികസിപ്പിക്കാൻ ക്ലിക്ക് ചെയ്യുക</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. ഏതെങ്കിലും കാർഡിന്റെ എഡിറ്ററിലേക്ക് പോയി **Modules** സെക്ഷൻ വികസിപ്പിക്കുക.
2. **Create new module** ക്ലിക്ക് ചെയ്യുക.
3. മൊഡ്യൂൾ വിവരങ്ങൾ പൂരിപ്പിക്കുക.
4. **Code** എഡിറ്ററിൽ നിങ്ങളുടെ CSS ഒപ്പം/അല്ലെങ്കിൽ JavaScript ടെംപ്ലേറ്റ് കോഡ് എഴുതുക.
5. (ഓപ്ഷണൽ) **Editor** സെക്ഷനിൽ ഒരു കസ്റ്റം കോൺഫിഗറേഷൻ UI സൃഷ്ടിക്കുക (മുകളിലെ സ്ക്രീൻഷോട്ടിലെ കളർ പിക്കർ പോലെ, [ഇവിടെ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) പൂർണ്ണ ഡോക്യുമെന്റേഷൻ ലഭ്യമാണ്).
6. (ഓപ്ഷണൽ) നിങ്ങളുടെ മൊഡ്യൂൾ Home Assistant കാർഡ് പിക്കറിൽ നിർദ്ദേശിക്കപ്പെടാൻ **എന്റിറ്റി നിർദ്ദേശങ്ങൾ** എഴുതുക. നിങ്ങൾ ടൈപ്പ് ചെയ്യുമ്പോൾ തന്നെ പാനൽ എഴുതുന്നത് പരിശോധിക്കുന്നു, നിങ്ങൾ തിരഞ്ഞെടുക്കുന്ന എന്റിറ്റിക്കായി നിർദ്ദേശിക്കപ്പെട്ട കാർഡുകൾ തന്നെ അതിന്റെ പ്രിവ്യൂ കാണിക്കുന്നു.
7. **Save** ക്ലിക്ക് ചെയ്യുക.

നിങ്ങളുടെ മൊഡ്യൂൾ ഇപ്പോൾ നിങ്ങളുടെ ഏതെങ്കിലും കാർഡിൽ ഉപയോഗിക്കാൻ ലഭ്യമാണ്!

<br>

</details>

#### ഒരു കാർഡിലേക്ക് ഒരു മൊഡ്യൂൾ പ്രയോഗിക്കുന്നത്

<details>

<summary>വികസിപ്പിക്കാൻ ക്ലിക്ക് ചെയ്യുക</summary>

<br>

- **എഡിറ്റർ വഴി:**

  - മൊഡ്യൂൾ പ്രയോഗിക്കാൻ ആഗ്രഹിക്കുന്ന കാർഡിന്റെ എഡിറ്ററിലേക്ക് പോകുക.
  - **Modules** സെക്ഷൻ വികസിപ്പിക്കുക.
  - ലിസ്റ്റിൽ നിന്ന് പ്രയോഗിക്കാൻ ആഗ്രഹിക്കുന്ന മൊഡ്യൂളിൽ ക്ലിക്ക് ചെയ്യുക.
  - "Apply to" ന് കീഴിൽ, "This card" ക്ലിക്ക് ചെയ്യുക. മൊഡ്യൂൾ ഇപ്പോൾ സജീവമാണ്. ഒരേ കാർഡിലേക്ക് നിരവധി മൊഡ്യൂളുകൾ നിങ്ങൾക്ക് പ്രയോഗിക്കാം.

- **YAML വഴി:**

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

#### ഒരു മൊഡ്യൂൾ ആഗോളമായി പ്രയോഗിക്കുന്നത്

<details>

<summary>വികസിപ്പിക്കാൻ ക്ലിക്ക് ചെയ്യുക</summary>

<br>

എല്ലാ Bubble Cards ലേക്കും സ്വയമേവ പ്രയോഗിക്കാൻ നിങ്ങൾക്ക് ഒരു മൊഡ്യൂൾ സെറ്റ് ചെയ്യാം:

**ഒരു എഡിറ്ററുള്ള മൊഡ്യൂളുകൾക്ക് ഇത് ലഭ്യമല്ല, കാരണം അവയ്ക്ക് പ്രവർത്തിക്കാൻ ഒരു നിർദ്ദിഷ്ട കോൺഫിഗറേഷൻ ആവശ്യമാണ്.**

- **എഡിറ്റർ വഴി:**

  - Module editor ൽ, **My Modules** ടാബിൽ നിങ്ങളുടെ മൊഡ്യൂൾ കണ്ടെത്തുക.
  - മൊഡ്യൂൾ പേരിന് അടുത്തുള്ള **All cards** ബട്ടൺ ടോഗിൾ ചെയ്യുക.
  - മൊഡ്യൂൾ ഇപ്പോൾ എല്ലാ കാർഡുകൾക്കും സ്വയമേവ പ്രയോഗിക്കപ്പെടും.
 
- **YAML വഴി:**

  നിങ്ങളുടെ മൊഡ്യൂൾ YAML കോൺഫിഗറേഷനിൽ (`bubble-modules.yaml` ൽ), വെറും `is_global: true` ചേർക്കുക.

<br>

</details>

#### ഒരു ആഗോള മൊഡ്യൂളിൽ നിന്ന് ഒരൊറ്റ കാർഡ് ഒഴിവാക്കുന്നത്

<details>

<summary>വികസിപ്പിക്കാൻ ക്ലിക്ക് ചെയ്യുക</summary>

<br>

നിങ്ങൾക്ക് ഒരു ആഗോള മൊഡ്യൂൾ ഉണ്ടെങ്കിലും ഒരു നിർദ്ദിഷ്ട കാർഡിൽ നിന്ന് ഒഴിവാക്കാൻ ആഗ്രഹിക്കുന്നുവെങ്കിൽ:

- **എഡിറ്റർ വഴി:**
  
  - കാർഡിന്റെ **Modules** സെക്ഷനിൽ, ആഗോള മൊഡ്യൂളുകൾ ലിസ്റ്റ് ചെയ്തിരിക്കുന്നത് നിങ്ങൾക്ക് കാണാം.
  - ഒരു ആഗോള മൊഡ്യൂളിൽ ക്ലിക്ക് ചെയ്യുക, ഈ നിർദ്ദിഷ്ട കാർഡിൽ നിന്ന് ഒഴിവാക്കാൻ "This card" ഓഫാക്കുക.

- **YAML വഴി:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Module Store ലേക്ക് നിങ്ങളുടെ മൊഡ്യൂൾ പങ്കിടുന്നത്

<details>

<summary>വികസിപ്പിക്കാൻ ക്ലിക്ക് ചെയ്യുക</summary>

<br>

നിങ്ങളുടെ Module Module Store ലേക്ക് പങ്കിടാൻ, Module Editor ൽ, താഴെയുള്ള "Export Module" ൽ, "Copy for GitHub" ക്ലിക്ക് ചെയ്ത്, ഉള്ളടക്കം [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) വിഭാഗത്തിലെ ഒരു പുതിയ ഡിസ്കഷനിൽ ഒട്ടിക്കുക. **വിവരണം എഡിറ്റ് ചെയ്യുക** (ആവശ്യമെങ്കിൽ), **ഉദാഹരണം** (YAML ഉപയോക്താക്കൾക്കായി), കൂടാതെ Module Store നായി **കുറഞ്ഞത് ഒരു സ്ക്രീൻഷോട്ട് ഉൾപ്പെടുത്താൻ** ഓർക്കുക.

**അതിനുശേഷം ഉടൻ തന്നെ നിങ്ങളുടെ Module ലഭ്യമാകും** (ഒരു Store പുതുക്കലിനുശേഷം), അതിനാൽ എല്ലാം ശരിയായി എഴുതിയിട്ടുണ്ടെന്നും Module പ്രതീക്ഷിച്ചതുപോലെ പ്രവർത്തിക്കുന്നുവെന്നും ഇരട്ട-പരിശോധിക്കുക. പങ്കിട്ടതിനുശേഷം തീർച്ചയായും നിങ്ങൾക്ക് Module എഡിറ്റ്/അപ്ഡേറ്റ് ചെയ്യാം.

<br>

</details>

#### പതിപ്പ് നിയന്ത്രണം

<details>

<summary>വികസിപ്പിക്കാൻ ക്ലിക്ക് ചെയ്യുക</summary>

<br>

Module Store ഇൻസ്റ്റാൾ ചെയ്ത മൊഡ്യൂളുകൾക്കുള്ള അപ്ഡേറ്റുകൾ സ്വയമേവ പരിശോധിക്കുന്നു. അപ്ഡേറ്റുകൾ ലഭ്യമാകുമ്പോൾ:

1. **Module Store** ടാബിൽ നിങ്ങൾക്ക് ഒരു അപ്ഡേറ്റ് സൂചകം കാണാം.
2. ലഭ്യമായ അപ്ഡേറ്റുകളുള്ള മൊഡ്യൂളുകളിൽ **Update** ക്ലിക്ക് ചെയ്യുക.
3. Module Store ൽ അപ്ഡേറ്റ് സ്ഥിരീകരിക്കുക.

<br>

</details>

#### പിന്തുണയ്ക്കുന്ന കാർഡ് തരങ്ങൾ നിർവചിക്കുന്നത്

<details>

<summary>വികസിപ്പിക്കാൻ ക്ലിക്ക് ചെയ്യുക</summary>

<br>

ചില മൊഡ്യൂളുകൾ എല്ലാ കാർഡ് തരങ്ങളുമായി അനുയോജ്യമായിരിക്കില്ല. ഒരു മൊഡ്യൂൾ പിന്തുണയ്ക്കുന്ന കാർഡുകൾ നിങ്ങൾക്ക് വ്യക്തമാക്കാം.  
ഒരു മൊഡ്യൂൾ **എല്ലാ കാർഡുകളുമായും** അനുയോജ്യമാകണമെങ്കിൽ, `supported` ഫീൽഡ് വെറുതെ ഒഴിവാക്കുക (അല്ലെങ്കിൽ എഡിറ്ററിലെ **All cards** ഓപ്ഷൻ ഉപയോഗിക്കുക).

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

### ഉദാഹരണങ്ങൾ

<details>
<summary>അടിസ്ഥാന സ്റ്റൈലിംഗ് മൊഡ്യൂൾ</summary>

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
<summary>കസ്റ്റം കോൺഫിഗറേഷനുള്ള മൊഡ്യൂൾ</summary>

<br>

ഈ മൊഡ്യൂൾ [ഇവിടെ](https://github.com/Clooos/Bubble-Card/discussions/1231) ലഭ്യമാണ്.

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

Module Store ൽ, അല്ലെങ്കിൽ [ഇവിടെ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) കൂടുതൽ ഉദാഹരണങ്ങൾ കണ്ടെത്താം.

<br>

---

<br>

## പ്രാദേശികവൽക്കരണം

Bubble Card നിങ്ങളുടെ ഭാഷ സംസാരിക്കുന്നു. Home Assistant പിന്തുണയ്ക്കുന്ന 64 ഭാഷകളിലേക്കും അതിന്റെ എഡിറ്റർ വിവർത്തനം ചെയ്തിട്ടുണ്ട്, Home Assistant നു ഒരു കാര്യത്തിന് ഇതിനകം ഒരു വാക്ക് ഉള്ളിടത്തെല്ലാം അതിന്റെ തന്നെ പ്രയോഗം പുനരുപയോഗിക്കുന്നു, അതിനാൽ രണ്ട് ഇന്റർഫേസുകളിലും ഒരേ പദങ്ങൾ തന്നെ വായിക്കാം.

എഡിറ്ററിന്റെ താഴെ, പതിപ്പ് നമ്പറിനു തൊട്ടടുത്ത്, ഒരു **ഓട്ടോമാറ്റിക്** സ്വിച്ച് നിങ്ങളുടെ Home Assistant ഭാഷയെ പിന്തുടരുന്നു. അത് ഓഫ് ചെയ്താൽ എഡിറ്റർ പൂർണ്ണമായും ഇംഗ്ലീഷിലേക്ക് മടങ്ങും, ഒരു ട്യൂട്ടോറിയൽ പിന്തുടരാനോ ഒരു പ്രശ്നം റിപ്പോർട്ട് ചെയ്യാനോ ഇത് സൗകര്യപ്രദമാണ്. നിങ്ങളുടെ തിരഞ്ഞെടുപ്പ് ബ്രൗസറിൽ ഓർമ്മിക്കപ്പെടുന്നു.

ഈ ഡോക്യുമെന്റേഷനും വിവർത്തനം ചെയ്തിട്ടുണ്ട്, [62 ഭാഷകളിൽ](languages.md), ബ്രിട്ടീഷ് ഇംഗ്ലീഷ് ഒഴികെ എല്ലാ ഭാഷകളിലും, അത് മൂലരൂപം തന്നെ കാണിക്കുന്നു. ആ പേജുകൾ എല്ലാവർക്കുമായി തുറന്നിരിക്കുന്നു, അതിനാൽ നിങ്ങളുടെ സ്വന്തം Home Assistant മായി പൊരുത്തപ്പെടാത്ത ഒരു പ്രയോഗം ഏതാനും ക്ലിക്കുകളിൽ തിരുത്താം. ഉള്ളടക്കത്തിന്റെ അടിസ്ഥാനം ഇംഗ്ലീഷ് പതിപ്പ് തന്നെയാണ്.

<br>

---

<br>

## സഹായം

പ്രതീക്ഷിച്ചതുപോലെ എന്തെങ്കിലും പ്രവർത്തിക്കുന്നില്ലെങ്കിൽ ഒരു issue തുറക്കാൻ മടിക്കേണ്ട. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card നെക്കുറിച്ച് ചോദ്യങ്ങളോ ചിന്തകളോ ഉണ്ടോ? നിങ്ങളുടെ ഡാഷ്ബോർഡുകളോ കണ്ടെത്തലുകളോ പങ്കിടണോ? Home Assistant ഫോറത്തിലോ, Bubble Card subreddit ലോ, അല്ലെങ്കിൽ GitHub Discussions വിഭാഗത്തിലോ നിങ്ങൾക്ക് പോകാം.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## സംഭാവന ചെയ്യൽ

സംഭാവനകൾ സ്വാഗതം ചെയ്യുന്നു! ബഗ് പരിഹാരങ്ങൾ, പുതിയ ഫീച്ചറുകൾ, വിവർത്തനങ്ങൾ, അല്ലെങ്കിൽ ഡോക്യുമെന്റേഷൻ മെച്ചപ്പെടുത്തലുകൾ എന്നിവയായാലും, ഒരു pull request തുറക്കാൻ മടിക്കേണ്ട.

തുടങ്ങുന്നതിന് മുമ്പ്, നിങ്ങളുടെ ലോക്കൽ പരിസ്ഥിതി എങ്ങനെ സജ്ജീകരിക്കാം, പ്രോജക്റ്റ് എങ്ങനെ ബിൽഡ് ചെയ്യാം, നിങ്ങളുടെ മാറ്റങ്ങൾ എങ്ങനെ പരീക്ഷിക്കാം എന്നിവ വിശദീകരിക്കുന്ന [ഡെവലപ്പർ ഗൈഡ്](DEVELOPERS.md) വായിക്കുക.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## സാമ്പത്തിക പിന്തുണ

ഈ പ്രോജക്റ്റ് കഴിയാവുന്നത്ര മികച്ചതാക്കാൻ ഞാൻ എന്റെ ഒഴിവുസമയത്തിന്റെ ഭൂരിഭാഗവും സമർപ്പിക്കുന്നു. അതിനാൽ എന്റെ പ്രവർത്തനത്തെ നിങ്ങൾ വിലമതിക്കുന്നുവെങ്കിൽ, ഏതൊരു സംഭാവനയും നിങ്ങളുടെ പിന്തുണ കാണിക്കാനുള്ള മികച്ച മാർഗമായിരിക്കും 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

നിങ്ങളുടെ പിന്തുണയ്ക്ക് എല്ലാവർക്കും നന്ദി, നിങ്ങൾ എല്ലാവരും എന്റെ ഏറ്റവും വലിയ പ്രചോദനമാണ്!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
