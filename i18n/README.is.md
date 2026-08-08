<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Þessi síða er sjálfvirk þýðing. Ef vafi leikur á einhverju gildir [upprunalega enska skjölunin](../README.md). Les einhver setning illa? Öll hjálp er vel þegin og [að laga þessa síðu](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.is.md) tekur aðeins mínútu: GitHub sér um afritið (fork) og breytingabeiðnina (pull request). Þakka þér fyrirfram! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lestu þetta á öðru tungumáli](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card er einfalt og sérsniðanlegt kortasafn fyrir Home Assistant, með nútímalegum sprettigluggum og innbyggðri Module Store með yfir 100 einingum frá notendasamfélaginu.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Efnisyfirlit

**[`Uppsetning`](#uppsetning)**  **[`Stillingar`](#stillingar)**  **[`Tillögur fyrir einingar`](#tillögur-fyrir-einingar)**  **[`Sprettigluggi`](#sprettigluggi)**  **[`Lárétt hnapparöð`](#lárétt-hnapparöð)**  **[`Hnappur`](#hnappur)**  **[`Spilari`](#spilari)**  **[`Gluggatjöld`](#gluggatjöld)**  **[`Val`](#val)**  **[`Loftslag`](#loftslag)**  **[`Dagatal`](#dagatal)**  **[`Skil`](#skil)**  **[`Tómur dálkur`](#tómur-dálkur)**  **[`Aðeins undirhnappar`](#aðeins-undirhnappar)**  **[`Undirhnappar`](#undirhnappar)**  **[`Útlit korta`](#útlit-korta)**  **[`Skilyrði`](#skilyrði)**  **[`Aðgerðir`](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni)**  **[`Stílun`](#stílun)**  **[`Sniðmát`](#sniðmát)**  **[`Einingar`](#einingar)**  **[`Staðfærsla`](#staðfærsla)**  **[`Hjálp`](#hjálp)**  **[`Framlög`](#framlög)**  **[`Styrkja`](#styrkja)**

<br>

## Uppsetning

**Lægsta stutta útgáfa Home Assistant:** 2023.9.0

<details>

<summary>Án HACS</summary>

<br>

1. Sæktu `bubble-card.zip` úr [nýjustu útgáfunni](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Taktu það úr pakkanum í `<config>/www` möppuna þína, þú ættir að fá `bubble-card.js` og `translations` möppu við hliðina á honum (sú mappa geymir orðabækur ritilsins, án hennar helst ritillinn á ensku)
3. Á mælaborðinu þínu, smelltu á táknið efst í hægra horninu og svo á `Edit dashboard`
4. Smelltu aftur á táknið og svo á `Manage resources`
5. Smelltu á `Add resource`
6. Afritaðu og límdu þetta inn: `/local/bubble-card.js?v=1`
7. Smelltu á `JavaScript Module` og svo á `Create`
8. Farðu til baka og endurhladdu síðuna
9. Nú getur þú smellt á `Add card` neðst í hægra horninu og leitað að `Bubble Card`
10. Eftir hverja uppfærslu á skránni þarftu að breyta `/local/bubble-card.js?v=1` og hækka útgáfunúmerið

Ef þetta virkar ekki skaltu prófa að hreinsa skyndiminni vafrans.

</details>

<details>

<summary>Með HACS (mælt með)</summary>

<br>

Þessi aðferð gerir þér kleift að fá uppfærslur beint í gegnum Home Assistant Community Store

1. Ef HACS er ekki þegar uppsett skaltu sækja það samkvæmt leiðbeiningunum á [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Haltu áfram með upphafsuppsetningu HACS samkvæmt leiðbeiningunum á [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Farðu í hliðarstikuna og veldu "HACS"
4. Leitaðu að "Bubble Card", eða smelltu á bláa hnappinn hér fyrir neðan
5. Smelltu á "Download"
6. Farðu aftur á mælaborðið þitt og smelltu á táknið efst í hægra horninu og svo á `Edit dashboard`
7. Nú getur þú smellt á `Add card` neðst í hægra horninu og leitað að `Bubble Card`

Ef þetta virkar ekki skaltu prófa að hreinsa skyndiminni vafrans eða appsins (á öllum tækjunum þínum ef þörf krefur).

#### Myndbönd

Þú getur líka skoðað YouTube rásina mína fyrir skref-fyrir-skref myndbönd.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Stillingar

Hægt er að stilla alla valkosti í Home Assistant ritlinum. En þú finnur nánari upplýsingar og YAML kóðann í skjölunum hér fyrir neðan.

<details>

<summary><b>Aðalvalkostir (YAML og lýsing)</b></summary>

| Heiti | Tegund | Krafa | Studdir valkostir | Lýsing |
| --- | --- | --- | --- | --- |
| `type` | string | **Skylda** | `custom:bubble-card` | Tegund kortsins |
| `card_type` | string | **Skylda** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` eða `sub-buttons` | Tegund Bubble Card kortsins, sjá hér fyrir neðan |
| `styles` | object list | Valfrjálst | Hvaða CSS stílblöð sem er | Gerir þér kleift að sérsníða CSS Bubble Card kortsins, sjá [stílun](#stílun) |

</details>

<details>

<summary><b>Almennar CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Breyta | Væntanlegt gildi | Lýsing |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radíus horna fyrir alla studda þætti |
| `--bubble-main-background-color` | `color` | Aðal bakgrunnslitur fyrir alla studda þætti |
| `--bubble-secondary-background-color` | `color` | Auka bakgrunnslitur fyrir alla studda þætti |
| `--bubble-accent-color` | `color` | Áherslulitur fyrir alla studda þætti |
| `--bubble-icon-border-radius` | `px` | Radíus horna tákns fyrir alla studda þætti |
| `--bubble-icon-background-color` | `color` | Bakgrunnslitur tákns fyrir alla studda þætti |
| `--bubble-sub-button-border-radius` | `px` | Radíus horna fyrir alla undirhnappa |
| `--bubble-sub-button-background-color` | `color` | Bakgrunnslitur fyrir alla undirhnappa |
| `--bubble-box-shadow` | sjá [box-shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skuggi (box-shadow) fyrir alla studda þætti |
| `--bubble-border` | sjá [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Jaðar (border) fyrir öll studd kort |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Skoðaðu þetta [myndband](https://www.youtube.com/watch?v=0hSQOlBxKKI) til að læra meira um Bubble Card og eiginleika þess.** YouTube rásin mín er frekar ný og fjallar um kennslumyndbönd um Home Assistant og Bubble Card. Ekki hika við að gerast áskrifandi til að hjálpa til við að auka sýnileika rásarinnar. Fyrirfram þakkir!

<br>

---

<br>

## Tillögur fyrir einingar

Frá og með Home Assistant 2026.6 færðu nokkur tilbúin kort í boði þegar þú velur einingu í kortavalinu, og Bubble Card bætir eigin uppskriftum við þann lista. Veldu ljós og þér býðst kort með birtusleða, auk litahita-, lita- og mettunarafbrigðis þegar ljósið þitt styður þau. Veldu gluggatjöld og þú færð stöðusleðann þeirra, veldu spilara og þú færð líka afbrigði með upprunalistanum hans, veldu ryksugu og þú færð hnappana ræsa, gera hlé og fara í hleðslustöð. Hver tillaga er venjuleg Bubble Card stilling sem birtist sem lifandi forskoðun, svo þú getur tekið þá sem er næst því sem þú vilt og haldið áfram að breyta henni eins og venjulega.

Það sem þér býðst fer eftir því hvað einingin þín getur í raun: ljós án birturásar fær rofa í stað sleða, gluggatjöld sem geta ekki hallað fá ekkert hallaafbrigði, og loftslagseining fær forstillingar sínar aðeins þegar hún á einhverjar. Klassísku færslurnar koma fyrir neðan tillögur Bubble Card þegar þær eiga við: kortið sem er ætlað þessari tegund einingar, venjulegur hnappur og sleði.

> [!TIP]
> Einingar geta bætt eigin tillögum við þann lista, sjá [einingar](#einingar).

<br>

---

<br>

## Sprettigluggi

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Þetta kort gerir þér kleift að búa til sprettiglugga með hvaða efni sem er. Hver sprettigluggi er **falinn sjálfgefið** og hægt er að opna hann með því að vísa í tengil hans (t.d. `'#pop-up-name'`), með hvaða korti sem styður `navigate` [aðgerðina](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni), eða með [láréttu hnapparöðinni](#lárétt-hnapparöð) sem fylgir með.

> [!TIP]
> ### Kveikja sprettiglugga 
> Þessi eiginleiki gerir þér kleift að opna sprettiglugga út frá stöðu hvaða eindar sem er, til dæmis getur þú opnað "Öryggis" sprettiglugga með myndavél þegar einhver er fyrir framan húsið þitt. Þú getur líka búið til rofa-hjálpartæki (input_boolean) og kveikt á opnun/lokun þess í sjálfvirkni.
> <details>
> <summary>Að opna sprettiglugga þegar <code>binary_sensor</code> er <code>on</code></summary>
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
> ### Mismunandi leiðir til að loka sprettiglugga 
> Það eru margar leiðir til að loka sprettiglugga. Til dæmis getur þú strokið frá haus sprettigluggans niður á við, gert langt strok inni í sprettiglugganum niður á við, ýtt á Escape á tölvu, fjarlægt hash-ið úr vefslóðinni eða einfaldlega ýtt á lokahnappinn.
>


### Valkostir sprettiglugga

<details>

<summary><b>Valkostir (YAML og lýsingar)</b></summary>

| Heiti | Tegund | Krafa | Studdir valkostir | Lýsing |
| --- | --- | --- | --- | --- |
| `hash` | string | **Skylda** | Hvaða einkvæmt hash sem er (t.d. `'#kitchen'`) með ' ' | Þannig opnar þú sprettiglugga þinn |
| `popup_style` | string | Valfrjálst | `bubble` (sjálfgefið) eða `classic` | Skilgreinir sjónrænan stíl sprettigluggans |
| `popup_mode` | string | Valfrjálst | `default` (sjálfgefið), `fit-content`, `centered` eða `adaptive-dialog` | Skilgreinir útlitsham sprettigluggans |
| `with_bottom_offset` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Aðeins notað með `popup_mode: fit-content` eða `adaptive-dialog`. Bætir við neðri spássíu á farsíma, gagnlegt þegar mælaborðið þitt inniheldur fótarkort. |
| `full_width_on_mobile` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Aðeins notað með `popup_mode: centered`. Stækkar sprettigluggann í fulla skjábreidd á farsíma, gagnlegt á minni skjám. |
| `performance_mode` | string | Valfrjálst | `default` (sjálfgefið) eða `performance` | Fínstillir opnunarhreyfingu sprettigluggans. `performance` seinkar örlítið birtingu efnis og bakgrunnsþoku, og slekkur einnig á bakgrunnsþoku (backdrop blur) ef hún er stillt. |
| `auto_close` | string | Valfrjálst | Tímamörk í millisekúndum (t.d. `10000` fyrir 10 sek) | Lokar sprettiglugganum sjálfkrafa eftir ákveðinn tíma |
| `close_on_click` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Lokar sprettiglugganum sjálfkrafa eftir hvaða samskipti sem er |
| `close_by_clicking_outside` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Lokar sprettiglugganum með því að smella fyrir utan hann |
| `width_desktop` | string | Valfrjálst | Hvaða CSS gildi sem er | Breidd á tölvu (`100%` sjálfgefið á farsíma) |
| `margin` | string | Valfrjálst | Hvaða CSS gildi sem er | Notaðu þetta **aðeins** ef sprettiglugginn þinn er ekki vel miðjaður á farsíma (t.d. `13px`) |
| `margin_top_mobile` | string | Valfrjálst | Hvaða CSS gildi sem er | Efri spássía á farsíma (t.d. `-56px` ef hausinn þinn er falinn) |
| `margin_top_desktop` | string | Valfrjálst | Hvaða CSS gildi sem er | Efri spássía á tölvu (t.d. `50vh` fyrir hálfstóran sprettiglugga eða `calc(100vh - 400px)` fyrir fasta hæð upp á `400px`) |
| `bg_color` | string | Valfrjálst | Hvaða hex, rgb eða rgba gildi sem er | Bakgrunnslitur sprettigluggans þíns (t.d. `#ffffff` fyrir hvítan bakgrunn) |
| `bg_opacity` | string | Valfrjálst | Hvaða gildi sem er frá `0` til `100` | Ógegnsæi bakgrunns sprettigluggans þíns (t.d. `100` fyrir enga gegnsæi) |
| `bg_blur` | string | Valfrjálst | Hvaða gildi sem er frá `0` til `100` | Bakgrunnsþokuáhrif sprettigluggans þíns, **þetta virkar aðeins ef `bg_opacity` er ekki stillt á `100`** (t.d. `0` fyrir enga þoku) |
| `shadow_opacity` | string | Valfrjálst | Hvaða gildi sem er frá `0` til `100` | Ógegnsæi skugga sprettigluggans þíns (t.d. `0` til að fela hann) |
| `hide_backdrop` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Stilltu þetta á true á fyrsta sprettiglugganum á aðalmælaborðinu þínu til að slökkva á bakgrunni (backdrop) á öllum sprettigluggum. |
| `background_update` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Uppfærir efni sprettigluggans í bakgrunni (ekki mælt með) |
| `trigger` | hlutur eða listi | Valfrjálst | Sjá [skilyrði](#skilyrði) | Opnar þennan sprettiglugga þegar skilyrðin eru uppfyllt |
| `trigger_entity` | string | Valfrjálst | Hvaða eind sem er | Opnar þennan sprettiglugga út frá stöðu hvaða eindar sem er, einfalda form `trigger` |
| `trigger_state` | string | Valfrjálst (**Skylda** ef `trigger_entity` er skilgreint) | Hvaða staða eindar sem er | Staða eindar til að opna sprettigluggann |
| `trigger_close` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Lokar sprettiglugganum þegar skilyrðin eru ekki lengur uppfyllt. Sjálfgefið er `false` í staðinn þegar þú notar eldra parið `trigger_entity` og `trigger_state` |
| `open_action` | object | Valfrjálst | Sjá [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Ræsir aðgerð þegar sprettiglugginn opnast |
| `close_action` | object | Valfrjálst | Sjá [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Ræsir aðgerð þegar sprettiglugginn lokast |
| `show_header` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Sýnir/felur haus sprettigluggans að fullu |
| `show_previous_button` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Sýnir til baka hnapp við hlið lokahnappsins og fer til baka í fyrri sprettiglugga þegar það er í boði |
| `show_close_button` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Sýnir eða felur lokahnappinn en heldur restinni af hausnum sýnilegri |
| `buttons_position` | string | Valfrjálst | `right` (sjálfgefið) eða `left` | Staðsetning loka og til baka hnappanna í hausnum |
| `cards` | list | Valfrjálst | Hvaða Bubble Card, Home Assistant kort eða sérsniðið kort sem er | Skilgreinir efni sprettigluggans þíns. Sjá dæmið um sprettiglugga hér fyrir neðan. |
| Þú hefur einnig aðgang að [öllum stillingum hnappsins](#hnappur) fyrir haus sprettigluggans. | | Valfrjálst | | Ef þetta er ekki skilgreint mun enginn haus birtast |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Breyta | Væntanlegt gildi | Lýsing |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radíus horna fyrir sprettigluggann |
| `--bubble-pop-up-main-background-color` | `color` | Aðal bakgrunnslitur fyrir studda þætti sprettigluggans |
| `--bubble-pop-up-background-color` | `color` | Bakgrunnslitur sprettigluggans |
| `--bubble-backdrop-background-color` | `color` | Bakgrunnslitur bakgrunnsins (backdrop) |
| Þú hefur einnig aðgang að [öllum CSS breytum hnappsins](#valkostir-hnapps) fyrir haus sprettigluggans. | | |

</details>


### Sjálfstætt snið sprettiglugga (v3.2.0+)

Frá og með v3.2.0 nota sprettigluggar nýtt sjálfstætt snið þar sem efniskort eru skilgreind beint inni í sprettiglugganum með `cards` valkostinum. Þetta skilar betri afköstum og nýrri kaflaskiptri (section based) drag-and-drop breytingaupplifun.


#### Dæmi

<details>

<summary>Sprettigluggi (sjálfstætt snið)</summary>

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

<summary>Hnappur til að opna sprettigluggann</summary>

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

## Lárétt hnapparöð

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Þetta kort er góður félagi fyrir sprettigluggakortið, þar sem það gerir þér kleift að opna samsvarandi sprettiglugga. Það gerir þér einnig kleift að opna hvaða síðu sem er á mælaborðinu þínu. Auk þess getur þú bætt við hreyfi/nærveruskynjurum þínum svo að röð hnappanna aðlagist eftir herberginu sem þú gekkst nýlega inn í. Þetta kort er skrunanlegt, er alltaf sýnilegt og virkar sem fótur.

> [!IMPORTANT]  
> Þetta kort verður að vera það síðasta í sýninni þinni (á eftir öllum kortum og sprettigluggum). Það getur ekki verið inni í neinni staflaeiningu (stack).

### Valkostir láréttrar hnapparaðar

<details>

<summary><b>Valkostir (YAML og lýsingar)</b></summary>

| Heiti | Tegund | Krafa | Studdir valkostir | Lýsing |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Skylda** | Hash sprettigluggans (t.d. `'#kitchen'`) með ' ' eða hvaða tengil sem er | Tengill til að opna |
| `1_name` | string | Valfrjálst | Hvaða strengur sem er | Heiti fyrir hnappinn þinn |
| `1_icon` | string | Valfrjálst | Hvaða `mdi:` tákn sem er | Tákn fyrir hnappinn þinn |
| `1_entity` | string | Valfrjálst | Hvaða ljós eða ljósahópur sem er | Sýnir lit þess ljóss í bakgrunni |
| `1_pir_sensor` | string | Valfrjálst | Hvaða tvíviðsnema (binary sensor) sem er | Að minnsta kosti einn PIR skynjari eða fleiri fyrir `auto_order`, en þetta virkar í raun með hvaða eindategund sem er, til dæmis getur þú bætt við ljósahópum og röðin breytist út frá síðustu breyttu stöðunum. |
| `auto_order` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Breytir röð hnappanna út frá síðasta breytingartíma `_pir_sensor`, **þetta þarf að vera `false` ef þú ert ekki með neitt `_pir_sensor` í kóðanum þínum** |
| `margin` | string | Valfrjálst | Hvaða CSS gildi sem er | Notaðu þetta **aðeins** ef `horizontal-buttons-stack` kortið þitt er ekki vel miðjað á farsíma (t.d. `13px`) |
| `width_desktop` | string | Valfrjálst | Hvaða CSS gildi sem er | Breidd á tölvu (`100%` sjálfgefið á farsíma) |
| `is_sidebar_hidden` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Lagfærir staðsetningu láréttu hnapparaðarinnar ef hliðarstikan er falin á tölvu (aðeins ef þú hefur sjálf(ur) breytt til að fela hana) |
| `rise_animation` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Stilltu þetta á `false` til að slökkva á hreyfingunni sem virkjast þegar síðan hefur hlaðist |
| `highlight_current_view` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Auðkennir núverandi hash/sýn með mjúkri hreyfingu |
| `hide_gradient` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Stilltu þetta á `false` til að fela litstigulinn (gradient) |

> [!IMPORTANT]  
> Breyturnar sem byrja á tölu skilgreina hnappana þína, breyttu bara þessari tölu til að bæta við fleiri hnöppum (sjá dæmi hér fyrir neðan).

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Breyta | Væntanlegt gildi | Lýsing |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Radíus horna fyrir hnappa láréttu hnapparaðarinnar |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Bakgrunnslitur fyrir hnappa láréttu hnapparaðarinnar |

</details>


#### Dæmi

<details>

<summary>Lárétt hnapparöð sem endurskipuleggur sig út frá nærveruskynjurum</summary>

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

## Hnappur

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Þetta kort er mjög fjölhæft. Það má nota sem **rofa**, **sleða**, **stöðu** eða **nafn/texta** hnapp.

> [!TIP]
> ### Hver er munurinn á öllum hnappagerðunum?
>
> - **Rofahnappur:** Þetta er sjálfgefna hnappagerðin. Sjálfgefið stillir hann eind milli kveikt og slökkt og bakgrunnslitur hans breytist eftir stöðu eindarinnar eða lit ljóssins. Þú getur breytt aðgerð hans í **Tap action on card** hlutanum.
>
> - **Sleðahnappur:** Þessi hnappagerð gerir þér kleift að stjórna eindum með stillanlegu bili. Hann hentar vel til að deyfa ljós og fyllingarliturinn lagar sig að lit ljóssins. Þú getur líka notað hann til að birta gildi, til dæmis rafhlöðustöðu.
>   Studdar eindir fyrir sleða:
>   - Ljós (birtustig)
>   - Spilari (hljóðstyrkur)
>   - Gluggatjöld (staða)
>   - Vifta (prósenta)
>   - Loftslag (hitastig)
>   - Innsláttartala og tala (gildi)
>   - Rafhlöðuskynjari (prósenta, aðeins til aflestrar)
>
>   Þú getur líka notað hvaða eind sem er með talnastöðu með því að slökkva á eindasíunni í **Slider settings** og skilgreina svo `min` og `max` gildin. Þessi valkostur er aðeins til aflestrar.
>
> - **Stöðuhnappur:** Fullkominn til að birta upplýsingar frá skynjara eða hvaða eind sem er. Þegar ýtt er á hann birtist "Meiri upplýsingar" spjald eindarinnar. Bakgrunnslitur hans breytist ekki.
>
> - **Nafn/texta hnappur:** Eina hnappagerðin sem þarf ekki eind. Hann gerir kleift að birta stuttan texta, nafn eða titil. Þú getur líka bætt aðgerðum við hann. Bakgrunnslitur hans breytist ekki.

### Valkostir hnapps

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Eind til að stjórna |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Hegðun hnappsins |
| `name` | string | Optional | Any string | Nafn fyrir hnappinn, ef ekki skilgreint birtist nafn eindarinnar |
| `icon` | string | Optional | Any `mdi:` icon | Táknmynd fyrir hnappinn, ef ekki skilgreint birtist táknmynd eindarinnar eða `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Gefa táknmynd forgang fram yfir `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Only for lights.** Nota áherslulit þemans í stað lits ljóssins.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Sýna eða fela stöðu eindarinnar |
| `show_name` | boolean | Optional | `true` (default) or `false` | Sýna eða fela nafnið |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Sýna eða fela táknmyndina |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Sýna síðasta breytingartíma eindarinnar |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Sýna síðasta uppfærslutíma eindarinnar |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Sýna eiginleika eindarinnar fyrir neðan nafn hennar |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Eiginleikinn sem birtist (t.d. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leyfa texta að renna þegar innihaldið er stærra en umlykjandi svæði |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Gerir kleift að breyta sjálfgefnum aðgerðum við smell á hnappinn. |
| `tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við smell á táknmyndina, ef ekki skilgreint er `more-info` notað |
| `double_tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við tvísmell á táknmyndina, ef ekki skilgreint er `none` notað |
| `hold_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar þegar haldið er niðri á táknmyndinni, ef ekki skilgreint er `more-info` notað |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | number | Optional | Any number | Fjöldi raða (hæð) (t.d. `2`) |
| `sub_button` | object | Optional | See [undirhnappar](#undirhnappar) | Bæta við sérsniðnum hnöppum sem festir eru hægra megin |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Aðalbakgrunnslitur fyrir studda hluti í hnappnum |
| `--bubble-button-border-radius` | `px` | Hornaráðning fyrir hnappinn |
| `--bubble-button-icon-border-radius` | `px` | Hornaráðning fyrir táknmyndagám hnappsins |
| `--bubble-button-icon-background-color` | `color` | Bakgrunnslitur fyrir táknmyndagám hnappsins |
| `--bubble-light-white-color` | `color` | Skiptir út sjálfgefnum hvítum lit ljósahnappa/sleða |
| `--bubble-light-color` | `color` | Skiptir út lit ljósahnappa/sleða (jafnvel RGB ljósa) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skuggi hnappsins |

</details>

Þessir valkostir eru aðeins í boði þegar `button_type` er stillt á `slider`.

<details>

<summary><b>Valkostir sleða (YAML + lýsingar)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Lágmarksgildi sleðans. Fyrir sérsniðna sleða.                                                    |
| `max_value`             | number  | Optional                        | Hámarksgildi sleðans. Fyrir sérsniðna sleða.                                                    |
| `step`                  | number  | Optional                        | Skreftala sleðans.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Virkja fyrri hegðun sleðans þar sem þú ýtir til að virkja sleðann í stað þess að halda niðri.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Uppfæra gildi miðað við upphafsgildið frekar en upphaflega snertipunktinn.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Gera sleðann aðeins til aflestrar. Virkjað sjálfkrafa fyrir sumar eindir eins og skynjara.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Staða eindarinnar uppfærist meðan rennt er. **Þessi eiginleiki er ekki mælt með fyrir allar eindir.**        |
| `slider_fill_orientation` | string | Valfrjálst | `left`, `right`, `top` eða `bottom` | Breyta fyllingarstefnu sleðans. Frá vinstri til hægri þegar ekkert er skilgreint, speglað í [tungumálum sem lesast frá hægri til vinstri](#staðfærsla) |
| `slider_value_position` | string | Valfrjálst | `right`, `left`, `center` eða `hidden` | Staðsetning gildisins. Hægra megin þegar ekkert er skilgreint, og vinstra megin í [tungumálum sem lesast frá hægri til vinstri](#staðfærsla) |
| `invert_slider_value` | boolean | Optional (`false` default) | Snúa við stefnu sleðans (100% fylling jafngildir lágmarki). Ekki í boði fyrir litasleða. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Only for lights.** Velja hamstillingu sleðans |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Only for covers.** Velja hamstillingu sleðans (staða eða halli) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Only for lights (Hue mode).** Þvinga litmettun þegar litblæ er breytt |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Only for lights (Hue mode).** Þvingað litmettunargildi (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Only for lights (Brightness mode).** Nota áherslulit þemans í stað lits ljóssins |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Only for lights.** Leyfir sleðanum að ná 0%, sem slekkur á ljósinu. Ekki í boði með `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Only for lights.** Virkja mjúkar birtustigsbreytingar fyrir studd ljós.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Only for lights.** Tímalengd umbreytingar í millisekúndum. Krefst `light_transition: true`.            |

</details>

#### Dæmi

<details>

<summary>Sleðahnappur sem getur stjórnað birtustigi ljóss</summary>

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

<summary>Hnappur með fleiri valkostum</summary>

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

## Spilari

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Þetta kort gerir þér kleift að stjórna spilaraeind.

### Valkostir spilara

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Spilarinn sem á að stjórna |
| `name` | string | Optional | Any string | Nafn fyrir spilarann, ef ekki skilgreint birtist nafn eindarinnar |
| `icon` | string | Optional | Any `mdi:` icon | Táknmynd fyrir spilarann, ef ekki skilgreint birtist táknmynd eindarinnar eða `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Gefa táknmynd forgang fram yfir `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Sýna eða fela stöðu eindarinnar |
| `show_name` | boolean | Optional | `true` (default) or `false` | Sýna eða fela nafnið |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Sýna eða fela táknmyndina |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Sýna síðasta breytingartíma eindarinnar |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Sýna síðasta uppfærslutíma eindarinnar |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Sýna eiginleika eindarinnar fyrir neðan nafn hennar |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Eiginleikinn sem birtist (t.d. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leyfa texta að renna þegar innihaldið er stærra en umlykjandi svæði |
| `min_volume` | number | Optional | Any number | Lágmarksgildi hljóðstyrkssleðans. |
| `max_volume` | number | Optional | Any number | Hámarksgildi hljóðstyrkssleðans. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Nota móðukennda plötuumslagsmynd sem bakgrunn kortsins. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Gerir kleift að breyta sjálfgefnum aðgerðum við smell á hnappinn. |
| `tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við smell á táknmyndina, ef ekki skilgreint er `more-info` notað. |
| `double_tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við tvísmell á táknmyndina, ef ekki skilgreint er `none` notað. |
| `hold_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar þegar haldið er niðri á táknmyndinni, ef ekki skilgreint er `more-info` notað. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Færa stjórnhnappa plötuumslagsins neðst (fast) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Láta neðri stjórnhnappana ná yfir alla breiddina (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Staðsetning neðri stjórnhnappa þegar þeir eru ekki í fullri breidd |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | number | Optional | Any number | Fjöldi raða (hæð) (t.d. `2`) |
| `sub_button` | object | Optional | See [undirhnappar](#undirhnappar) | Bæta við sérsniðnum hnöppum sem festir eru hægra megin |
| `hide` | object | Optional | See below | Fela hnappa á kortinu |

#### Valkostir til að fela

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Fela spila/pásu hnappinn |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Fela hljóðstyrkshnappinn |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Fela fyrri lag hnappinn |
| `next_button` | boolean | Optional | `true` or `false` (default) | Fela næsta lag hnappinn |
| `power_button` | boolean | Optional | `true` or `false` (default) | Fela aflhnappinn |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Aðalbakgrunnslitur spilarans |
| `--bubble-media-player-border-radius` | `px` | Hornaráðning spilarans |
| `--bubble-media-player-buttons-border-radius` | `px` | Hornaráðning hnappa spilarans |
| `--bubble-media-player-slider-background-color` | `color` | Bakgrunnslitur hljóðstyrkssleðans |
| `--bubble-media-player-icon-border-radius` | `px` | Hornaráðning táknmyndagáms spilarans |
| `--bubble-media-player-icon-background-color` | `color` | Bakgrunnslitur táknmyndagáms spilarans |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skuggi spilarans |

</details>


#### Dæmi

<details>

<summary>Spilari með öllum valkostunum</summary>

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

## Gluggatjöld

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Þetta kort gerir þér kleift að stjórna `cover` eindunum þínum.

### Valkostir gluggatjalda

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Gluggatjald til að stjórna |
| `name` | string | Optional | Any string | Nafn fyrir gluggatjaldið, ef ekki skilgreint birtist nafn eindarinnar |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Gefa táknmynd forgang fram yfir `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Sýna eða fela stöðu eindarinnar |
| `show_name` | boolean | Optional | `true` (default) or `false` | Sýna eða fela nafnið |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Sýna eða fela táknmyndina |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Sýna síðasta breytingartíma eindarinnar |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Sýna síðasta uppfærslutíma eindarinnar |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Sýna eiginleika eindarinnar fyrir neðan nafn hennar |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Eiginleikinn sem birtist (t.d. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leyfa texta að renna þegar innihaldið er stærra en umlykjandi svæði |
| `icon_open` | string | Optional | Any `mdi:` icon | Táknmynd fyrir opið gluggatjald, ef ekki skilgreint birtist sjálfgefna táknmyndin fyrir opið gluggatjald |
| `icon_close` | string | Optional | Any `mdi:` icon | Táknmynd fyrir lokað gluggatjald, ef ekki skilgreint birtist sjálfgefna táknmyndin fyrir lokað gluggatjald |
| `icon_up` | string | Optional | Any `mdi:` icon | Táknmynd fyrir opna hnappinn, ef ekki skilgreint birtist sjálfgefna táknmyndin fyrir opið gluggatjald |
| `icon_down` | string | Optional | Any `mdi:` icon | Táknmynd fyrir loka hnappinn, ef ekki skilgreint birtist sjálfgefna táknmyndin fyrir lokað gluggatjald |
| `open_service` | string | Optional | Any service or script | Þjónusta til að opna gluggatjaldið, sjálfgefið `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Þjónusta til að stöðva gluggatjaldið, sjálfgefið `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Þjónusta til að loka gluggatjaldinu, sjálfgefið `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Staðsetning hallastýringarhnappa (aðeins sýnt ef gluggatjaldið styður halla) |
| `open_tilt_service` | string | Optional | Any service or script | Þjónusta til að opna halla, sjálfgefið `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Þjónusta til að loka halla, sjálfgefið `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Gerir kleift að breyta sjálfgefnum aðgerðum við smell á hnappinn. |
| `tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við smell á táknmyndina, ef ekki skilgreint er `more-info` notað. |
| `double_tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við tvísmell á táknmyndina, ef ekki skilgreint er `none` notað. |
| `hold_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar þegar haldið er niðri á táknmyndinni, ef ekki skilgreint er `more-info` notað. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Færa stýrihnappana neðst (fast) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Láta neðri stýrihnappana ná yfir alla breiddina (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Staðsetning neðri stýrihnappa þegar þeir eru ekki í fullri breidd |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | number | Optional | Any number | Fjöldi raða (hæð) (t.d. `2`) |
| `sub_button` | object | Optional | See [undirhnappar](#undirhnappar) | Bæta við sérsniðnum hnöppum sem festir eru hægra megin |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Aðalbakgrunnslitur fyrir studda hluti í gluggatjaldakortinu |
| `--bubble-cover-border-radius` | `px` | Hornaráðning gluggatjaldakortsins |
| `--bubble-cover-icon-border-radius` | `px` | Hornaráðning táknmyndagáms gluggatjaldakortsins |
| `--bubble-cover-icon-background-color` | `color` | Bakgrunnslitur táknmyndagáms gluggatjaldakortsins |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skuggi gluggatjaldakortsins |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skuggi hnappa í gluggatjaldakortinu |

</details>


#### Dæmi

<details>

<summary>Kort sem getur stjórnað rúllugardínu</summary>

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

## Val

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Þetta kort gerir þér kleift að bæta við fellivalmynd fyrir `input_select` / `select` eindirnar þínar. Þetta kort styður einnig undirhnappa og alla algenga eiginleika Bubble Card.

> [!TIP]
> Þú getur líka haft valundirhnappa ef þú vilt, þessi eiginleiki er í boði í öllum kortum sem styðja undirhnappa.

### Valkostir vals

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Eind til að stjórna |
| `name` | string | Optional | Any string | Nafn fyrir valið, ef ekki skilgreint birtist nafn eindarinnar |
| `icon` | string | Optional | Any `mdi:` icon | Táknmynd fyrir valið, ef ekki skilgreint birtist táknmynd eindarinnar eða `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Gefa táknmynd forgang fram yfir `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Sýna eða fela stöðu eindarinnar |
| `show_name` | boolean | Optional | `true` (default) or `false` | Sýna eða fela nafnið |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Sýna eða fela táknmyndina |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Sýna síðasta breytingartíma eindarinnar |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Sýna síðasta uppfærslutíma eindarinnar |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Sýna eiginleika eindarinnar fyrir neðan nafn hennar |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Eiginleikinn sem birtist (t.d. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leyfa texta að renna þegar innihaldið er stærra en umlykjandi svæði |
| `tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við smell á táknmyndina, ef ekki skilgreint er `more-info` notað. |
| `double_tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við tvísmell á táknmyndina, ef ekki skilgreint er `none` notað. |
| `hold_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar þegar haldið er niðri á táknmyndinni, ef ekki skilgreint er `more-info` notað. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | number | Optional | Any number | Fjöldi raða (hæð) (t.d. `2`) |
| `sub_button` | object | Optional | See [undirhnappar](#undirhnappar) | Bæta við sérsniðnum hnöppum sem festir eru hægra megin |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Aðalbakgrunnslitur fyrir studda hluti í valkortinu |
| `--bubble-select-background-color` | `color` | Bakgrunnslitur valkortsins |
| `--bubble-select-list-border-radius` | `px` | Hornaráðning fellivalmyndarinnar í kortinu |
| `--bubble-select-list-item-accent-color` | `color` | Áherslulitur valins atriðis |
| `--bubble-select-list-background-color` | `color` | Bakgrunnslitur fellivalmyndarinnar í kortinu |
| `--bubble-select-list-width` | `px` | Breidd fellivalmyndarinnar í kortinu |
| `--bubble-select-arrow-background-color` | `color` | Bakgrunnslitur fellivalmyndarörvarinnar |
| `--bubble-select-button-border-radius` | `px` | Hornaráðning valhnappsins |
| `--bubble-select-border-radius` | `px` | Hornaráðning valkortsins |
| `--bubble-select-icon-border-radius` | `px` | Hornaráðning táknmyndagáms valkortsins |
| `--bubble-select-icon-background-color` | `color` | Bakgrunnslitur táknmyndagáms valkortsins |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skuggi valkortsins |

</details>


#### Dæmi

<details>

<summary>Valkort með lista af senum</summary>

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

## Loftslag

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Þetta kort gerir þér kleift að stjórna `climate` eindunum þínum.

> [!TIP]
> Hamvalmyndin er [undirhnappur](#undirhnappar) sem er bætt sjálfkrafa við þegar kortið er búið til. Þú getur svo breytt honum eða fjarlægt hann eftir þörfum.

### Valkostir loftslags

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Eindin sem á að stjórna (t.d. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Sérsniðið nafn fyrir kortið. Ef ekki skilgreint birtist nafn eindarinnar.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Sérsniðin táknmynd fyrir kortið. Ef ekki skilgreint verður táknmynd eindarinnar eða `entity-picture` notuð.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Gefur táknmyndinni forgang fram yfir `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Sýna eða fela núverandi stöðu eindarinnar.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Sýna eða fela nafn eindarinnar.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Sýna eða fela táknmyndina.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Felur lágmarkshitastigsstillinguna ef eindin styður hana.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Felur hámarkshitastigsstillinguna ef eindin styður hana.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Notar fastan bakgrunnslit þegar loftslagseindin er á (ON).                                              |
| `step` | number | Optional | Any number | Hitastigsskrefið. |
| `min_temp` | number | Optional | Any number | Lágmarkshitastig. |
| `max_temp` | number | Optional | Any number | Hámarkshitastig. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Gerir kleift að breyta sjálfgefnum aðgerðum við smell á hnappinn. |
| `tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við smell á táknmyndina, ef ekki skilgreint er `more-info` notað. |
| `double_tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við tvísmell á táknmyndina, ef ekki skilgreint er `none` notað. |
| `hold_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar þegar haldið er niðri á táknmyndinni, ef ekki skilgreint er `more-info` notað. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Færa stjórnhnappa loftslagsins neðst (fast) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Láta neðri stjórnhnappana ná yfir alla breiddina (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Staðsetning neðri stjórnhnappa þegar þeir eru ekki í fullri breidd |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | number | Optional | Any number | Fjöldi raða (hæð) (t.d. `2`) |
| `sub_button`            | object  | Optional                            | See [undirhnappar](#undirhnappar)                | Bætir við sérsniðnum hnöppum sem festir eru hægra megin. Gagnlegt fyrir hamvalmynd loftslags.                                  |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Aðalbakgrunnslitur fyrir studda hluti í loftslagskortinu |
| `--bubble-climate-border-radius` | `px` | Hornaráðning studdra hluta loftslagskortsins |
| `--bubble-climate-button-background-color` | `color` | Bakgrunnslitur hnappa loftslagskortsins |
| `--bubble-climate-icon-border-radius` | `px` | Hornaráðning táknmyndagáms loftslagskortsins |
| `--bubble-state-climate-fan-only-color` | `color` | Yfirlitslitur fyrir aðeins-vifta stöðu |
| `--bubble-state-climate-dry-color` | `color` | Yfirlitslitur fyrir þurrkstöðu |
| `--bubble-state-climate-cool-color` | `color` | Yfirlitslitur fyrir kælistöðu |
| `--bubble-state-climate-heat-color` | `color` | Yfirlitslitur fyrir hitunarstöðu |
| `--bubble-state-climate-auto-color` | `color` | Yfirlitslitur fyrir sjálfvirka stöðu |
| `--bubble-state-climate-heat-cool-color` | `color` | Yfirlitslitur fyrir hitun-kælingu stöðu |
| `--bubble-climate-accent-color` | `color` | Áherslulitur loftslagskortsins |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Skuggi loftslagsgámsins. |

</details>


#### Dæmi

<details>

<summary>Loftslagskort með fellivalmynd fyrir HVAC hami</summary>

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

## Dagatal

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Þetta kort gerir þér kleift að birta dagataleindirnar þínar. Innihald þess er skrunanlegt, svo þú getur auðveldlega skoðað komandi viðburði.

### Valkostir dagatals

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Fjöldi daga sem sótt eru viðburðir fyrir, frá núna til loka Nta dagsins (default: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Eindin sem á að stjórna (t.d. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Dagataleindin sem á að birta                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Sérsniðinn litur fyrir dagatalsmerkið. Ef ekki skilgreint velst litur sjálfkrafa |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Fjöldi daga sem sótt eru viðburðir fyrir, frá núna til loka Nta dagsins (default: 7) |
| `limit`             | number  | Optional     | A number                                        | Fjöldi viðburða sem birtist á kortinu                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Sýna eða fela lokatíma viðburða                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Sýna eða fela framvindustiku viðburðar                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Sýna eða fela viðburði sem eru þegar í gangi. Viðburðir sem ná yfir marga daga eru metnir dag fyrir dag, svo aðeins dagurinn sem er í gangi felst og komandi dagar haldast sýnilegir |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Leyfa texta að renna þegar innihaldið er stærra en umlykjandi svæði |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Gerir kleift að bæta við aðgerðum við smell á viðburð. |
| `tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við smell á dag, ef ekki skilgreint er `none` notað. |
| `double_tap_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar við tvísmell á dag, ef ekki skilgreint er `none` notað. |
| `hold_action` | object | Optional | See [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreinir tegund aðgerðar þegar haldið er niðri á degi, ef ekki skilgreint er `none` notað. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | number | Optional | Any number | Fjöldi raða (hæð) (t.d. `2`) |
| `sub_button` | object | Optional | See [undirhnappar](#undirhnappar) | Bæta við sérsniðnum hnöppum sem festir eru hægra megin |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Aðalbakgrunnslitur fyrir studda hluti í dagatalskortinu  |
| `--bubble-calendar-border-radius`         | `px`           | Hornaráðning studdra hluta dagatalskortsins |
| `--bubble-calendar-height`                | `px`           | Hæð dagatalskortsins                                        |

</details>

#### Dæmi

<details>

<summary>Dagatalskort með takmörkuðum fjölda viðburða</summary>

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

<summary>Dagatalskort með lokatíma og framvindustiku</summary>

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


## Skil

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Þetta kort er einfalt skil til að skipta sprettiglugganum þínum upp í flokka / hluta, til dæmis Ljós, Tæki, Gluggatjöld, Stillingar, Sjálfvirkni...

### Valkostir skila

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Nafn | Tegund | Krafa | Studdir valkostir | Lýsing |
| --- | --- | --- | --- | --- |
| `name` | strengur | Valfrjálst en mælt með | Hvaða strengur sem er | Nafn fyrir skilin þín |
| `icon` | strengur | Valfrjálst en mælt með | Hvaða `mdi:` táknmynd sem er | Táknmynd fyrir skilin þín |
| `card_layout` | strengur | Valfrjálst | `normal` (sjálfgefið ef ekki í section view), `large` (sjálfgefið ef í section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | tala | Valfrjálst | Hvaða tala sem er | Fjöldi raða (hæð) (t.d. `2`) |
| `sub_button` | hlutur | Valfrjálst | Sjá [undirhnappa](#undirhnappar) | Bættu við sérsniðnum hnöppum sem eru festir hægra megin |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Breyta | Væntanlegt gildi | Lýsing |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Bakgrunnslitur fyrir línuna í skilunum |

</details>

#### Dæmi

<details>

<summary>Skil/skilrúm fyrir hluta "Covers" (gluggatjöld)</summary>

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

## Tómur dálkur

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Þetta kort er hér til að fylla upp í tóman dálk. Þetta er gagnlegt ef þú ert með `horizontal-stack` í sprettiglugganum þínum með aðeins einu korti. Skoðaðu neðra hægra hornið á þessari skjámynd til að sjá það (eða öllu heldur ekki sjá það).

### Valkostir tóms dálks

Þetta kort hefur enga valkosti og styður ekki [stílun](#stílun), en það styður þó útlitsvalkosti fyrir HA sections.

#### Dæmi

<details>

<summary>Tómur dálkur í láréttri röð (horizontal stack)</summary>

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

## Aðeins undirhnappar

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Þetta kort er eingöngu ætlað fyrir undirhnappa. Það er tilvalið fyrir valmyndir, flýtiaðgerðir, upplýsingaflögur, eða fastan fót (footer) neðst á síðunni.

> [!IMPORTANT]  
> Þetta kort notar nýju undirhnappaskemuna. Notaðu `sub_button.bottom` til að skilgreina hnappana þína. `sub_button.main` hlutinn er hunsaður.

### Valkostir "aðeins undirhnappa"

<details>

<summary><b>Valkostir (YAML + lýsingar)</b></summary>

| Nafn | Tegund | Krafa | Studdir valkostir | Lýsing |
| --- | --- | --- | --- | --- |
| `sub_button` | hlutur | **Krafist** | Sjá [undirhnappa](#undirhnappar) | Skilgreindu undirhnappana þína með `bottom` hlutanum |
| `hide_main_background` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Fjarlægðu bakgrunn kortsins |
| `footer_mode` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Festu kortið neðst á síðunni |
| `footer_full_width` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Gerðu fótinn (footer) fulla breidd (100%) |
| `footer_width` | tala | Valfrjálst | Hvaða tala sem er | Breidd fótarins í pixlum þegar `footer_full_width` er `false` |
| `footer_bottom_offset` | tala | Valfrjálst | Hvaða tala sem er | Fjarlægð frá botni síðunnar í pixlum (sjálfgefið: `16`) |
| `card_layout` | strengur | Valfrjálst | `normal` (sjálfgefið ef ekki í section view), `large` (sjálfgefið ef í section view), `large-2-rows`, `large-sub-buttons-grid` | Stílútlit kortsins, sjá [útlit korta](#útlit-korta) |
| `rows` | tala | Valfrjálst | Hvaða tala sem er | Fjöldi raða (hæð) (t.d. `2`) |

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Breyta | Væntanlegt gildi | Lýsing |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Breidd fótarins þegar `footer_full_width` er `false` |
| `--bubble-footer-bottom` | `px` | Fjarlægð fótarins frá botni |
| `--bubble-footer-box-shadow` | sjá [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow fyrir fótarílátið |

</details>

#### Dæmi

<details>

<summary>Flögur (chips) eins og á skjámyndinni</summary>

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

<summary>Fastur valmyndarfótur (footer)</summary>

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

## Undirhnappar

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Á öllum kortum sem styðja þennan valkost getur þú bætt við undirhnöppum til að sérsníða kortin þín enn frekar. Þú getur til dæmis búið til hnapp sem stýrir ryksugu, veðurkorti, eða nánast hverju sem þér dettur í hug. Þessir undirhnappar styðja aðgerðir við ýtingu og flesta valkosti hnappa.

Undirhnappar styðja nú þrjár tegundir: **Sjálfgefið (hnappur)**, **Sleði (Slider)**, og **Fellilisti / Val**. Þú getur blandað saman tegundum í sama korti, sett undirhnappa efst eða neðst, og skipulagt þá í hópa fyrir flóknara útlit.

#### Staðsetning og hópar undirhnappa

<details>

<summary><b>Uppbygging undirhnappa (main / bottom + hópar)</b></summary>

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

**Athugasemdir:**
- `main` og `bottom` eru tveir sjálfstæðir hlutar. Undirhnappar í `bottom` eru festir neðst á kortinu.
- `main_layout` og `bottom_layout` taka við `inline` (sjálfgefið) eða `rows` til að raða hópum lóðrétt.
- Hópar eru hlutir með `group` fylki og valfrjálsu `buttons_layout` (`inline` eða `column`).
- `justify_content` er eingöngu í boði fyrir **bottom hópa** (`start`, `center`, `end`, `fill`).
- Þegar `bottom` undirhnappar eru til staðar skiptir kortið sjálfkrafa yfir í `large` útlit nema þú stillir annað útlit sjálf(ur).
- Eldri `sub_button` fylki eru enn studd og meðhöndluð sem `main` hlutinn.

</details>

### Valkostir undirhnappa

<details>

<summary><b>Valkostir (YAML + lýsing)</b></summary>

| Nafn | Tegund | Krafa | Studdir valkostir | Lýsing |
| --- | --- | --- | --- | --- |
| `entity` | strengur | Valfrjálst | Hvaða eind sem er | Eind til að stýra |
| `name` | strengur | Valfrjálst | Hvaða strengur sem er | Nafn fyrir undirhnappinn þinn, ef ekki skilgreint birtist nafn eindarinnar |
| `icon` | strengur | Valfrjálst | Hvaða `mdi:` táknmynd sem er | Táknmynd fyrir undirhnappinn þinn, ef ekki skilgreind birtist táknmynd eða mynd eindarinnar |
| `force_icon` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Þvingaðu fram táknmynd jafnvel þótt mynd eindar sé til staðar |
| `sub_button_type` | strengur | Valfrjálst | `default`, `slider` eða `select` | Veldu tegund undirhnapps |
| `show_background` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Sýndu bakgrunn fyrir undirhnappinn, liturinn breytist eftir stöðu eindarinnar |
| `state_background` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Notaðu litinn á stöðunni þegar eindin er `on` |
| `light_background` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Notaðu ljóslitinn fyrir bakgrunninn þegar hann er tiltækur |
| `show_state` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Sýna eða fela stöðu eindarinnar þinnar (`entity`) |
| `show_name` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Sýna eða fela nafnið |
| `show_icon` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Sýna eða fela táknmyndina |
| `show_last_changed` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Sýndu síðasta breytingartíma eindarinnar þinnar (`entity`) |
| `show_last_updated` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Sýndu síðasta uppfærslutíma eindarinnar þinnar (`entity`) |
| `show_attribute` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Sýndu eiginleika eindarinnar þinnar (`entity`) fyrir neðan nafnið (`name`) |
| `attribute` | strengur | Valfrjálst (krafist ef `show_attribute` er `true`) | Eiginleiki úr eindinni þinni (`entity`) | Eiginleikinn sem á að sýna (t.d. `brightness`) |
| `select_attribute` | strengur | Valfrjálst | Eiginleikalisti úr eindinni þinni (`entity`) (sjá studda valkosti hér að ofan) | Þessi eiginleikalisti opnar fellilista við smell (t.d. `effect_list`) |
| `show_arrow` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Sýna eða fela fellilistaörina fyrir select undirhnappa |
| `scrolling_effect` | boolean | Valfrjálst | `true` (sjálfgefið) eða `false` | Leyfðu texta að skruna þegar innihaldið er stærra en ílátið |
| `tap_action` | hlutur | Valfrjálst | Sjá [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreindu tegund aðgerðar við smell á undirhnappinn, ef ekki skilgreint er `more-info` notað. |
| `double_tap_action` | hlutur | Valfrjálst | Sjá [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreindu tegund aðgerðar við tvísmell á undirhnappinn, ef ekki skilgreint er `none` notað. |
| `hold_action` | hlutur | Valfrjálst | Sjá [aðgerðir](#aðgerðir-við-ýtingu-tvíýtingu-og-að-halda-inni) | Skilgreindu tegund aðgerðar þegar haldið er inni undirhnappnum, ef ekki skilgreint er `more-info` notað. |
| `fill_width` | boolean | Valfrjálst | `true` eða `false` | Fylltu tiltæka breidd (sjálfgefið: `false` fyrir main, `true` fyrir bottom) |
| `width` | tala eða strengur | Valfrjálst | Hvaða tala sem er eða CSS lengd | Sérsniðin breidd (`px` fyrir main hluta, `%` fyrir bottom hluta sjálfgefið) |
| `custom_height` | tala | Valfrjálst | Hvaða tala sem er | Sérsniðin hæð í pixlum |
| `content_layout` | strengur | Valfrjálst | `icon-left` (sjálfgefið), `icon-top`, `icon-bottom`, `icon-right` | Staðsetning táknmyndar innan í undirhnappnum |
| `always_visible` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | **Aðeins Slider.** Sýndu sleðann alltaf í stað þess að opna hann við ýtingu |
| `show_button_info` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | **Aðeins Slider.** Sýndu táknmynd/nafn/stöðu þegar `always_visible` er virkt |
| `visibility` | hlutur eða listi | Valfrjálst | Sjá [skilyrði](#skilyrði) | Sýna eða fela undirhnappinn út frá skilyrðum |
| `hide_when_parent_unavailable` | boolean | Valfrjálst | `true` eða `false` (sjálfgefið) | Faldu undirhnappinn ef eind foreldurskortsins er ekki tiltæk |
| `css_class` | string | Valfrjálst | Hvaða strengur sem er | Aukalegur CSS flokkur á undirhnappinum, til að miða á hann í [stílun](#stílun) þinni hvað sem hann heitir (til dæmis gefur `My value` `.my-value`) |

</details>

<details>

<summary><b>Valkostir sleða undirhnapps (sömu og fyrir hnappasleða)</b></summary>

<br>

Sleða undirhnappar (slider) styðja sömu sleðavalkosti og hnappasleðar, þar á meðal:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS breytur (sjá <a href="#stílun">Stílun</a>)</b></summary>

| Breyta | Væntanlegt gildi | Lýsing |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Hornaradíus undirhnappanna |
| `--bubble-sub-button-background-color` | `color` | Bakgrunnslitur undirhnappanna |
| `--bubble-sub-button-outline` | `box-shadow` | Útlína sem bætist á undirhnapp eða sleða, aðeins þegar sá hlutur er málaður í sama lit og kortið á bak við hann, sem myndi gera hann ósýnilegan (settu `none` til að fjarlægja hana) |
| `--bubble-sub-slider-border-radius` | `px` | Hornaradíus fyrir sleða undirhnappa |
| `--bubble-sub-slider-background-color` | `color` | Bakgrunnslitur fyrir sleða undirhnappa |
| `--bubble-sub-slider-height` | `px` | Hæð fyrir sleða undirhnappa sem eru alltaf sýnilegir |
| `--bubble-sub-slider-outline` | `box-shadow` | Útlína aðeins fyrir sleðaundirhnappa, fellur aftur á `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Textalitur á björtum bakgrunni undirhnapps |

</details>

#### Dæmi

<details>

<summary>Hnappur með nokkrum undirhnöppum sem búa til ryksugukort (eins og á skjámyndinni)</summary>

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

<summary>Hnappasleði með undirhnappi sem sýnir birtustig og öðrum sem kveikir/slekkur á ljósinu (eins og á skjámyndinni)</summary>

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

<summary>Hnappur sem sýnir hita innandyra og utandyra ásamt veðri fyrir í dag og á morgun (skjámynd fylgir)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Því miður fyrir mig er skýjað allan tímann en allar táknmyndirnar breytast eftir veðrinu.

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

## Útlit korta

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card styður section view Home Assistant til fulls, þú getur breytt útliti kortsins til að stækka það og einnig breytt fjölda dálka eða raða sem kortið á að taka í section view (aðeins á kortum sem styðja þennan valkost). Þessi útlit eru einnig studd í öllum öðrum tegundum sýna (views).

<details>

<summary><b>Tiltæk útlit korta</b></summary>

| Útlit | Lýsing |
| --- | --- |
| `normal` | Venjulega útlitið (ekki fínstillt fyrir section view) |
| `large` | Stærra útlit sem breytir stærð sinni eftir völdum röðum í section view (fínstillt fyrir section view) |
| `large-2-rows` | Stærra útlit með 2 röðum af undirhnöppum sem breytir stærð sinni eftir völdum röðum í section view (fínstillt fyrir section view) |
| `large-sub-buttons-grid` | Þetta útlit sýnir undirhnappa í ristkerfi (grid), `rows` verður að vera stillt á að minnsta kosti `2`.

</details>

#### Dæmi

<details>

<summary>Stór hnappur sem sýnir orkutölfræði með 2 röðum af undirhnöppum (skjámynd fylgir)</summary>

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

<summary>Stór hnappur með mörgum röðum og 12 undirhnöppum</summary>

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

## Skilyrði

Sumir valkostir stýrast af skilyrðum, skrifuðum nákvæmlega eins og skilyrði [skilyrta kortsins](https://www.home-assistant.io/dashboards/conditional/) í Home Assistant:

- `visibility` á [undirhnappi](#undirhnappar), til að sýna hann eða fela
- `trigger` á [sprettiglugga](#sprettigluggi), til að opna hann þegar skilyrðin eru uppfyllt
- `checkConditionsMet(conditions, hass)` inni í [sniðmátunum](#sniðmát) þínum, þegar þú þarft svarið í þínum eigin kóða

Allar skilyrðategundir Home Assistant eru metnar: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, ásamt hópunum `and`, `or` og `not`. Skilyrðin úr skilyrðasmið Home Assistant virka líka, þau sem heita eftir léninu sínu eins og `sun.is_up`, `light.is_on`, `zone.in_zone` eða `temperature.is_value`, með stillingunum `target`, `options`, `behavior` og `for`.

<details>

<summary><b>Dæmi</b></summary>

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
> Skilyrðin eru metin í vafranum þínum, svo þau fáu sem þurfa Home Assistant þjóninn geta ekki verið nákvæm: sólarupprás og sólsetur eru lesin úr einingunni `sun.sun` í stað þess að vera reiknuð upp á nýtt, og `for` tímalengd er mæld frá síðustu stöðubreytingu, án ferilskrár recorder.
>
> `view_columns` er tekið gilt en stenst alltaf, því Bubble Card er aldrei það sem raðar dálkunum í sýninni þinni. Skilyrðategund sem Bubble Card þekkir ekki lætur vita af sér einu sinni í vafrakerfisskránni þinni í stað þess að bregðast hljóðlaust, svo þú getir greint innsláttarvillu frá eiginleika sem vantar.

<br>

---

<br>

## Aðgerðir við ýtingu, tvíýtingu og að halda inni

Þú getur einnig notað sjálfgefnar aðgerðir Home Assistant við ýtingu, tvíýtingu og að halda inni á kortunum sem styðja þennan valkost. Þetta gerir þér til dæmis kleift að birta "more info" gluggann með því að halda inni táknmynd hnapps eða keyra þjónustu þegar ýtt er á undirhnapp.

**Athugið: Þegar `double_tap_action` er stillt fær venjulega `tap_action` 200ms töf til að leyfa greiningu
á tvíýtingu. Ef þessi töf er óæskileg, stilltu `double_tap_action` á `none` til að slökkva á meðhöndlun tvíýtingar.**

### Valkostir aðgerða

<details>

<summary><b>Valkostir (YAML + lýsing)</b></summary>

| Nafn | Tegund | Studdir valkostir | Lýsing |
| --- | --- | --- | --- |
| `action` | strengur | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Aðgerð sem á að framkvæma |
| `target` | hlutur |  | Virkar aðeins með `call-service`. Fylgir [home-assistant syntaxinu](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | strengur | Hvaða slóð sem er á mælaborðinu þínu | Slóð sem á að fara á (t.d. `'#kitchen'` til að opna sprettiglugga) þegar aðgerðin er skilgreind sem navigate |
| `url_path` | strengur | Hvaða tengill sem er | Vefslóð til að opna við smell (t.d. `https://www.google.com`) þegar aðgerðin er `url` |
| `service` | strengur | Hvaða þjónusta sem er | Þjónusta sem á að kalla á (t.d. `media_player.media_play_pause`) þegar `action` er skilgreint sem `call-service` |
| `data` eða `service_data` | hlutur | Hvaða þjónustugögn sem er | Þjónustugögn sem á að innihalda (t.d. `entity_id: media_player.kitchen`) þegar `action` er skilgreint sem `call-service` |
| `confirmation` | hlutur | Sjá [staðfestingu](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Sýndu staðfestingarsprettiglugga (ekki frá Bubble Card), sniðgengur sjálfgefna `confirmation` hlutinn |

</details>

#### Dæmi

<details>

<summary>Hnappur til að opna sprettiglugga</summary>

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

## Stílun

Þú getur bætt við sérsniðnum stílum til að breyta CSS í öllum kortum **án þess að nota card-mod** á fjóra vegu:

- Í ritlinum, farðu í kortið sem þú vilt breyta, farðu svo í _Styling options > Custom styles & JS templates_, og bættu við þínum sérsniðnu stílum (skoðaðu ábendingarnar og dæmin hér að neðan).
- Í ritlinum (eða í [YAML](#einingar)), farðu í kortið sem þú vilt breyta, farðu svo í _Modules_, búðu svo til nýja einingu (hún verður aðgengileg fyrir öll kort), eða farðu í **Module Store** til að setja upp einhverja tiltæka einingu (nánari upplýsingar um einingar má finna [hér að neðan](#einingar)).
- Í [þema](https://www.home-assistant.io/integrations/frontend/#defining-themes) skrá með því að bæta CSS breytum við í YAML (þessar eru tiltækar í skjölun hvers korts hér að ofan). Þetta gerir kleift að framkvæma víðtækar breytingar.

  <details>
  
  <summary>Dæmi</a></summary>
  
  <br>

  Ekki afrita `Bubble:` línuna, þetta er nafnið á þemanu sem þú notar. Þú þarft líka að fjarlægja `--` framan af breytunum.

  Þú þarft að keyra [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) aðgerðina til að endurnýja þemað eftir allar breytingar.

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
  
- Í YAML með því að bæta við `styles: |` og svo þínum sérsniðnu stílum (skoðaðu ábendingarnar og dæmin hér að neðan).

> [!TIP]  
> **Til að skilja hvaða stílflokkum má breyta**, geturðu skoðað [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) möppuna í þessu geymslusafni (repository). Í hverri kortamöppu finnurðu skrá sem heitir `styles.css`. Þessar skrár innihalda alla þá stíla sem eru notaðir. Þetta gefur miklu fleiri möguleika en CSS breytur, en það þarf að bæta hverju korti fyrir sig við.
> 
> Þú getur líka fundið fullt af [dæmum frá samfélaginu](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), eða einhver frá [Home Assistant spjallborðinu](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) með smá leit.
>
> Bubble þemað fyrir Home Assistant (eins og á skjámyndunum) má finna [hér](https://github.com/Clooos/Bubble).
>
> Kennslumyndband er væntanlegt á [YouTube rásinni minni](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Athugaðu að þú gætir þurft að bæta `!important;` við sum CSS gildi sem þegar eru skilgreind (sjá dæmin hér að neðan).

> [!TIP]  
> Hægt er að miða á undirhnappa með nafnbundnum flokkum (classes). Til dæmis er hægt að stílsetja undirhnapp sem heitir „My sub-button" með `.my-sub-button`. Sleðaundirhnappar (slider sub-buttons) sýna líka `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, o.s.frv.
>
> Nafnbundinn flokkur breytist þegar þú endurnefnir undirhnapp, og hann þýðist þegar nafnið er þýtt. Stilltu `css_class` á undirhnappinn til að fá þinn eigin flokk sem hreyfist aldrei, sama hvað hann heitir og sama á hvaða tungumáli.

#### Dæmi

<details>

<summary>Að breyta leturstærð hvaða Bubble Card sem er</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Að breyta bakgrunnslit á einum hnappi í lárétt hnapparöð</summary>

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

<summary>Að breyta bakgrunnslit korts</summary>

<br>

Þetta virkar á öllum tegundum Bubble Card (nema á sprettigluggum):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Þetta gerir það sama, en aðeins í hnappkorti (það virkar líka fyrir sprettigluggahausinn): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Til að breyta litnum þegar hann er `on`, skoðaðu stílsniðmátin hér að neðan.

</details>

<details>

<summary>Að breyta lit sleða á hnappi</summary>

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

<summary>Að breyta línulit á skilum</summary>

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

<summary>Að breyta lit á táknmynd</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Fyrir táknmynd í lárétt hnapparöð.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Að breyta bakgrunnslit á íláti táknmyndar</summary>

<br>

Þetta virkar á öllum tegundum Bubble Card (nema á sprettigluggum):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Þetta gerir það sama fyrir sprettigluggahausinn: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Að breyta stærð undirhnappa (fullkomið fyrir stóra útlitið)</summary>

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

<summary>Að breyta bakgrunnslit annars undirhnapps</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Að breyta stærð táknmyndar</summary>

<br>

Fyrir aðaltáknmyndina.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Fyrir táknmyndir undirhnappa.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Að nota mynd í stað táknmyndar á undirhnappi</summary>

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

Hlaðið einfaldlega myndinni upp í möppu sem heitir „pictures" (eða hvaða nafn sem þú vilt) í „www" möppu Home Assistant.

</details>

<details>

<summary>Ítarlegra dæmi: Að búa til lárétta röð af undirhnöppum (skjámynd fylgir)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Mér þykir sérstaklega vænt um þetta dæmi, ég nota það sem haus á mælaborðinu mínu.

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

## Sniðmát

**Bubble Card styður ekki Jinja sniðmát** en lengra komnir notendur geta bætt sniðmátum við í JS beint í [sérsniðnu stílunum sínum](#stílun). Þetta gerir til dæmis kleift að breyta táknmynd, textum eða litum á sviðsbundinn (dynamic) hátt, sýna eða fela hlut skilyrt (eins og undirhnapp), eða nánast hvað sem er byggt á stöðu, eigind (attribute) og fleiru.

> [!TIP]  
> Nánari upplýsingar um JS sniðmát [hér](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Ráðið mitt er að **skoða alltaf vafraskilaboðin (browser console)** til að vera viss um að allt virki rétt.

> [!IMPORTANT]  
> **Öll sniðmát sem breyta ekki CSS eigind verða að vera sett í lokin! Eins og að breyta táknmynd, texta eða hvaða hlut sem er.**

#### Tiltækar breytur og föll

<details>

<summary>Breytur</summary>

<br>

Þú hefur aðgang að þessum breytum í flestum kortum:

- `state` skilar stöðu skilgreindrar `entity`.
  
- `entity` skilar einingunni sem þú skilgreindir, eins og `switch.test` í þessu dæmi.
  
- `icon` má nota svona til að breyta táknmynd `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` skilar stöðu skilgreindrar `entity` fyrsta undirhnappsins, `[0]` er staða fyrsta undirhnappsins, `[1]` sá annar...
  
- `subButtonIcon[0]` má nota svona til að breyta táknmynd fyrsta undirhnappsins `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` er táknmynd fyrsta undirhnappsins, `[1]` sá annar...
  
- `card` skilar korthlutnum (element) í DOM.
  
- `hass` er lengra komin breyta sem gefur enn meiri stjórn, til dæmis geturðu skilað stöðu `light.kitchen` svona `hass.states['light.kitchen'].state` eða eigind svona `hass.states[entity].attributes.brightness`.

- `this` skilar fullt af gagnlegum upplýsingum um uppsetninguna þína og mælaborðið, notaðu þetta aðeins ef þú veist hvað þú ert að gera.

</details>

<details>

<summary>Föll</summary>

<br>

Þú hefur aðgang að öllum almennum JS föllum, en einnig að:

- `getWeatherIcon` má nota til að skila veðurtáknmynd byggðri á stöðu sem skilar veðri. Til dæmis geturðu gert þetta `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` til að breyta táknmynd þriðja undirhnappsins í táknmynd dagsins í dag, `.forecast[1]?.condition` er fyrir morgundaginn...

  Þú þarft að búa til sniðmátsskynjara (template sensor) fyrir þetta. Hér er það sem þú getur bætt við í `configuration.yaml` skránni þinni:
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
- `checkConditionsMet(conditions, hass)` skilar `true` þegar listi af [skilyrðum](#skilyrði) er uppfylltur, til dæmis `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` má nota til að þýða stöðu (má einnig nota til að fá einingu stöðu, án þess að þurfa að bæta henni handvirkt við).
- `hass.formatEntityAttributeValue(state, "attribute")` má nota til að þýða eigind (má einnig nota til að fá einingu stöðu, án þess að þurfa að bæta henni handvirkt við).

</details>

#### Dæmi

Þú getur fundið fullt af dæmum hér að neðan, en þú getur líka fundið mjög ítarleg sniðmát á [Patreon síðunni minni](https://www.patreon.com/c/Clooos), eins og eitt (uppáhaldið mitt) sem gerir kleift að hafa allt að fjögur skilyrt merki (badges) staðsett í kringum táknmyndir kortsins. Það er líka frábær leið til að læra um alla möguleika sérsniðinna stíla og sniðmáta Bubble Card!

<details>
<summary>Dæmi frá Patreon síðunni minni</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Að bæta Home Assistant líkum merkjum við hvaða kort sem er</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Að sýna sniðmátaða dagsetningu og tíma í skilum án þess að nota neina einingu</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Að sýna stöðu undirhnapps á tveimur línum</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Að sérsníða merkimiða og táknmyndir í völdum undirhnappi</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Að bæta við viðvarandi áminningarsprettiglugga sem birtist aðeins þegar þörf er á</a>
</p>

<br>

</details>

<details>

<summary>Að breyta bakgrunnslit hnapps sem er rauður þegar hann er <code>off</code> og blár þegar hann er <code>on</code></summary>

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

<summary>Að breyta bakgrunnslit hnapps byggt á einingu fyrir lárétta hnapparöð</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Að sýna/fela undirhnapp skilyrt</summary>

<br>

Þetta dæmi sýnir fyrsta undirhnappinn aðeins þegar ryksuguþjarkurinn minn er fastur.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Þetta dæmi sýnir undirhnapp þegar rafhlaðan er undir 10%. Gagnlegt með undirhnappi sem sýnir „Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Að breyta táknmynd eða táknmynd undirhnapps skilyrt</summary>

<br>

Þetta dæmi breytir táknmynd hnapps aðeins þegar ryksuguþjarkur er fastur.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Þetta dæmi breytir táknmynd fyrsta undirhnappsins aðeins þegar ryksuguþjarkur er fastur.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Að breyta lit táknmyndar eða táknmyndar undirhnapps skilyrt</summary>

<br>

Þetta dæmi breytir lit táknmyndar hnapps byggt á stöðu hans.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Þetta dæmi breytir lit táknmyndar undirhnapps byggt á stöðu hans. `.bubble-sub-button-1` er fyrsti undirhnappurinn, skiptu út `1` ef þú vilt breyta táknmynd annars undirhnapps.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Að hreyfa viftutáknmynd skilyrt</summary>

<br>

Þetta dæmi snýr táknmynd hnapps þegar vifta er `on`.
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

<summary>Að sniðmáta texta (eins og nafn eða stöðu)</summary>

<br>

Þetta dæmi breytir nafni/stöðu hnapps í „It's currently sunny" eftir veðrinu þínu.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
eða þegar notað á undirhnappa:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ef þú vilt sniðmáta stöðuna (`.bubble-state`) skaltu ekki kveikja á `show_state: true`, heldur aðeins á `show_attribute: true` án nokkurs eigindar.

</details>

<details>

<summary>Ítarlegra dæmi: Að breyta lit undirhnapps þegar sprettigluggi er opinn</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Ítarlegra dæmi: Að sniðmáta nafn skila byggt á stöðu þýddri á tungumálið þitt</summary>

<br>

Þú getur notað `hass.formatEntityState(state)` til að þýða stöðu og `hass.formatEntityAttributeValue(state, "attribute")` til að þýða eigind.

Þetta dæmi breytir nafninu og táknmyndinni byggt á veðrinu, „Nuageux" þýðir „Cloudy" á frönsku.

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

## Einingar

Einingar (Modules) eru öflugur eiginleiki sem gerir þér kleift að vista, endurnýta og deila sérsniðnu stílunum og sniðmátunum þínum á öllum Bubble Cards. Í stað þess að afrita og líma sama kóðann í mörg kort, geturðu búið til einingu og notað hana hvar sem þú þarft á henni að halda. Þetta gerir umsjón með útliti mælaborðsins mun einfaldari og skilvirkari.

En þessi eiginleiki er miklu öflugri en það, hann gerir þér kleift að bæta raunverulegum eiginleikum sjálfur við í Bubble Card ritlinum, með því að nota alla sjálfgefna [Home Assistant valkosti](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
Hlutavalarinn (object selector) hefur verið endurbættur til að sýna lifandi breytingar og styðja eigindir rétt.

Eining getur líka svarað kortavali Home Assistant við hlið innbyggðu [tillagnanna fyrir einingar](#tillögur-fyrir-einingar): notaðu `suggestions` fyrir kortin sem hún getur lýst fyrir fram, og `suggestions_code` þegar reikna þarf þau út frá uppsetningunni þinni, til dæmis sprettiglugga sem er byggður úr öllum einingum svæðisins sem valda einingin tilheyrir. Báðir lyklarnir eru skjalfestir [hér](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Þú getur líka skoðað **Module Store** til að finna og setja upp [einingar sem samfélagið hefur búið til](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), eða deilt þínum eigin sköpunum!

> [!TIP]
> Kóði einingar virkar nákvæmlega eins og kóðinn í `styles` hluta korts. Allar sömu breytur og föll úr [Sniðmát](#sniðmát) hlutanum eru tiltækar.

<br>

### Upphafsuppsetning

> [!IMPORTANT]
> Frá og með v3.1.0 er Bubble Card Tools mælt með sem forritsgeymslustaður (storage backend) fyrir einingar. Eldri aðferðin með sniðmátsskynjara (template sensor) virkar enn fyrir núverandi uppsetningar, en nýjar einingar og eiginleikar Module Store eru best studdar í gegnum Bubble Card Tools.

Bubble Card Tools samþættingin virkjar Module Editor og Module Store, og vistar einingar sem einstakar YAML skrár. Núverandi einingar eru fluttar sjálfkrafa.

Uppsetningar- og stillingarskrefin eru útskýrð hér:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

Þú kemst í Module Editor úr stillingum hvaða korts sem er, undir **Modules** hlutanum. Ritillinn (editor) býður upp á tvo aðalflipa:

#### My Modules flipinn

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Þessi flipi sýnir allar uppsettar einingar þínar og gerir þér kleift að:

- **Nota** (Apply) núverandi einingar á kortið sem er valið
- **Búa til** (Create) nýja einingu frá grunni
- **Breyta** (Edit) núverandi einingum með lifandi forskoðun
- **Eyða** (Delete) einingum sem þú þarft ekki lengur á að halda
- **Leita** (Search) og **raða** (sort) einingum (í stafrófsröð, nýjast fyrst, virkt fyrst)
- **Stilla á víðvær** (Set global status) til að láta einingu notast sjálfkrafa á öll kort
- **Flytja inn/út** (Import/Export) einingar til öryggisafritunar eða deilingar
- **Skrifa tillögur fyrir einingar** í einingaritlinum, undir **Valfrjálst: Tillögur fyrir einingar**, svo einingin þín birtist í kortavali Home Assistant. Bæði reglurnar og reiknuðu tillögurnar eru athugaðar jafnóðum og þú skrifar, villa þar kemur í veg fyrir vistun, og forskoðunin sýnir tillögukortin fyrir hvaða einingu sem þú velur

#### Module Store flipinn

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Þessi flipi sýnir [allar tiltækar einingar frá samfélaginu](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), og gerir þér kleift að:

- **Skoða** (Browse) allar einingar sem samfélagið hefur búið til
- **Leita** (Search) og sía einingar eftir nafni, samhæfni eða leitarorðum
- **Setja upp** (Install) einingar með einum smelli
- **Uppfæra** (Update) uppsettar einingar þegar nýjar útgáfur eru tiltækar

> [!TIP]
> Í ritlinum getur þú virkjað ósamhæfðar einingar til að prófa einingar sem eru ekki enn merktar samhæfðar við ákveðna kortagerð.

<br>

### Hvernig á að nota einingar

#### Að búa til nýja einingu

<details>

<summary>Smelltu til að opna</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Farðu í ritil hvaða korts sem er og opnaðu **Modules** hlutann.
2. Smelltu á **Create new module**.
3. Fylltu út upplýsingarnar um eininguna.
4. Skrifaðu CSS og/eða JavaScript sniðmátskóðann þinn í **Code** ritlinum.
5. (Valfrjálst) Búðu til sérsniðið stillingarviðmót í **Editor** hlutanum (eins og litavalið á skjámyndinni hér að ofan, fullkomin skjölun tiltæk [hér](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Valfrjálst) Skrifaðu **Tillögur fyrir einingar** svo einingin þín birtist í kortavali Home Assistant. Spjaldið athugar það sem þú skrifar jafnóðum og þú slærð inn, og forskoðun þess sýnir sjálf tillögukortin fyrir þá einingu sem þú velur.
7. Smelltu á **Save**.

Núna er einingin þín tiltæk til að nota á hvaða korti sem er!

<br>

</details>

#### Að nota einingu á kort

<details>

<summary>Smelltu til að opna</summary>

<br>

- **Í gegnum ritilinn:**

  - Farðu í ritil kortsins sem þú vilt nota eininguna á.
  - Opnaðu **Modules** hlutann.
  - Smelltu á eininguna sem þú vilt nota úr listanum.
  - Undir „Apply to", smelltu á „This card". Einingin er nú virk. Þú getur notað margar einingar á sama kortið.

- **Í gegnum YAML:**

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

#### Að nota einingu víðvært

<details>

<summary>Smelltu til að opna</summary>

<br>

Þú getur stillt einingu til að notast sjálfkrafa á öll Bubble Cards:

**Þetta er ekki tiltækt fyrir einingar með ritli, þar sem þær þurfa sérstaka stillingu til að virka.**

- **Í gegnum ritilinn:**

  - Í Module Editor, finndu eininguna þína í **My Modules** flipanum.
  - Skiptu um **All cards** hnappinn við hlið nafns einingarinnar.
  - Einingin verður nú sjálfkrafa notuð á öll kort.
 
- **Í gegnum YAML:**

  Í YAML stillingum einingarinnar þinnar (í `bubble-modules.yaml`), bættu bara við `is_global: true`.

<br>

</details>

#### Að undanskilja eitt kort frá víðværri einingu

<details>

<summary>Smelltu til að opna</summary>

<br>

Ef þú ert með víðværa einingu en vilt undanskilja hana frá tilteknu korti:

- **Í gegnum ritilinn:**
  
  - Í **Modules** hluta kortsins sérðu skráðar víðværar einingar.
  - Smelltu á víðværa einingu, gerðu „This card" óvirkt til að undanskilja hana frá þessu tiltekna korti.

- **Í gegnum YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Að deila einingunni þinni með Module Store

<details>

<summary>Smelltu til að opna</summary>

<br>

Til að deila einingunni þinni með Module Store, í Module Editor, neðst undir „Export Module", smelltu á „Copy for GitHub" og límdu innihaldið í nýja umræðu (discussion) í [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) flokknum. **Breyttu lýsingunni** (ef þarf), **dæminu** (fyrir YAML notendur), og mundu að **hafa með að minnsta kosti eina skjámynd** fyrir Module Store.

**Einingin þín verður tiltæk strax eftir það** (eftir endurnýjun á Store), svo athugaðu vel að allt sé rétt skrifað og einingin virki eins og til er ætlast. Þú getur að sjálfsögðu breytt/uppfært eininguna eftir að henni hefur verið deilt.

<br>

</details>

#### Útgáfustjórnun

<details>

<summary>Smelltu til að opna</summary>

<br>

Module Store athugar sjálfkrafa hvort uppfærslur séu tiltækar fyrir uppsettar einingar. Þegar uppfærslur eru tiltækar:

1. Þú sérð uppfærsluvísi í **Module Store** flipanum.
2. Smelltu á **Update** í einingum með tiltækum uppfærslum.
3. Staðfestu uppfærsluna í Module Store.

<br>

</details>

#### Skilgreining á studdum kortagerðum

<details>

<summary>Smelltu til að opna</summary>

<br>

Sumar einingar eru kannski ekki samhæfðar við allar kortagerðir. Þú getur tilgreint hvaða kort eining styður.  
Ef þú vilt að eining sé samhæfð við **öll kort**, sleppir þú einfaldlega `supported` reitnum (eða notar **All cards** valkostinn í ritlinum).

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

### Dæmi

<details>
<summary>Einfalt stílunareining</summary>

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
<summary>Eining með sérsniðnum stillingum</summary>

<br>

Þessi eining er tiltæk [hér](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Fleiri dæmi má finna í Module Store, eða [hér](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Staðfærsla

Bubble Card talar tungumálið þitt. Ritillinn er þýddur á þau 64 tungumál sem Home Assistant styður, og alls staðar þar sem Home Assistant á þegar orð yfir eitthvað er orðalag þess notað, svo þú lesir sömu hugtökin í báðum viðmótum.

Neðst í ritlinum, við hliðina á útgáfunúmerinu, fylgir rofinn **Sjálfvirkt** tungumáli Home Assistant hjá þér. Slökktu á honum og allur ritillinn fer aftur á ensku, sem er þægilegt til að fylgja leiðbeiningum eða til að tilkynna vandamál. Valið þitt er munað í vafranum þínum.

Þessi skjölun er líka þýdd, [á 62 tungumál](languages.md), öll nema breska ensku, sem birtir frumtextann. Þessar síður eru opnar öllum, svo orðalag sem passar ekki við þitt eigið Home Assistant má laga með nokkrum smellum. Enska útgáfan er áfram viðmiðið fyrir innihaldið sjálft.

<br>

---

<br>

## Hjálp

Endilega opnaðu mál (issue) ef eitthvað virkar ekki eins og til er ætlast. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Ertu með spurningar eða hugmyndir um Bubble Card? Viltu deila mælaborðunum þínum eða uppgötvunum? Þú getur farið á Home Assistant spjallborðið, á Bubble Card subreddit-inn eða á GitHub Discussions hlutann.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Framlög

Framlög eru vel þegin! Hvort sem það eru villuleiðréttingar, nýir eiginleikar, þýðingar eða endurbætur á skjölum, endilega opnaðu pull request.

Áður en þú byrjar, vinsamlegast lestu [þróunarleiðbeiningarnar](DEVELOPERS.md) sem fjalla um hvernig á að setja upp staðbundið umhverfi þitt, byggja verkefnið og prófa breytingarnar þínar.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Styrkja

Ég ver mestum af frítíma mínum í að gera þetta verkefni eins gott og það getur orðið. Svo ef þú kannt að meta vinnuna mína, þá væri hvers kyns styrkur frábær leið til að sýna stuðning þinn 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Takk öllum fyrir stuðninginn, þið eruð öll mesta hvatning mín!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
