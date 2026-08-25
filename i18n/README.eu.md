<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Orri hau itzulpen automatikoa da. Zalantzarik izanez gero, [ingelesezko jatorrizko dokumentazioak](../README.md) du lehentasuna. Esaldiren bat gaizki irakurtzen da? Laguntza oro ongi etorria da, eta [orri hau zuzentzeak](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.eu.md) minutu bat baino ez du behar: GitHubek fork-az eta pull request-az arduratzen da. Eskerrik asko aldez aurretik! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Irakurri hau beste hizkuntza batean](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card Home Assistant-erako txartel-bilduma minimalista eta pertsonalizagarria da, laster-leiho modernoak eta 100 modulu baino gehiagoko Module Store integratua eskaintzen dituena.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Edukien aurkibidea

**[`Instalazioa`](#instalazioa)**  **[`Konfigurazioa`](#konfigurazioa)**  **[`Entitate iradokizunak`](#entitate-iradokizunak)**  **[`Laster-leihoa`](#laster-leihoa)**  **[`Botoi-pila horizontala`](#botoi-pila-horizontala)**  **[`Botoia`](#botoia)**  **[`Multimedia-erreproduzigailua`](#multimedia-erreproduzigailua)**  **[`Estalkia`](#estalkia)**  **[`Hautaketa`](#hautaketa)**  **[`Klimatizazioa`](#klimatizazioa)**  **[`Egutegia`](#egutegia)**  **[`Bereizlea`](#bereizlea)**  **[`Zutabe hutsa`](#zutabe-hutsa)**  **[`Azpibotoiak soilik`](#azpibotoiak-soilik)**  **[`Azpibotoiak`](#azpibotoiak)**  **[`Txartelen diseinuak`](#txartelen-diseinuak)**  **[`Baldintzak`](#baldintzak)**  **[`Ekintzak`](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak)**  **[`Estiloa`](#estiloa)**  **[`Txantiloiak`](#txantiloiak)**  **[`Moduluak`](#moduluak)**  **[`Lokalizazioa`](#lokalizazioa)**  **[`Laguntza`](#laguntza)**  **[`Ekarpenak egitea`](#ekarpenak-egitea)**  **[`Egin dohaintza`](#egin-dohaintza)**

<br>

## Instalazioa

**Home Assistant bertsio minimo onartua:** 2023.9.0

<details>

<summary>HACSrik gabe</summary>

<br>

1. Deskargatu fitxategi hau: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Gehitu fitxategi hau zure `<config>/www` karpetan. Editorea zure hizkuntzan izateko, deskargatu `bubble-card-<lang>.json` ere [dist karpetatik](https://github.com/Clooos/Bubble-Card/tree/main/dist), adibidez `bubble-card-fr.json`, eta jarri `bubble-card.js` ondoan (hura gabe editorea ingelesez geratzen da)
3. Zure panelean, klikatu goiko eskuineko izkinako ikonoa eta ondoren `Edit dashboard`
4. Klikatu berriro ikono horretan eta gero `Manage resources`
5. Klikatu `Add resource`
6. Kopiatu eta itsatsi hau: `/local/bubble-card.js?v=1`
7. Klikatu `JavaScript Module` eta ondoren `Create`
8. Itzuli atzera eta freskatu orria
9. Orain `Add card` klikatu dezakezu beheko eskuineko izkinan eta bilatu `Bubble Card`
10. Fitxategia eguneratu ondoren, `/local/bubble-card.js?v=1` editatu beharko duzu eta bertsioa zenbaki handiago batekin aldatu

Ez badabil, saiatu zure nabigatzailearen cachea garbitzen.

</details>

<details>

<summary>HACSrekin (Gomendatua)</summary>

<br>

Metodo honek zuzenean Home Assistant Community Storen eguneraketak jasotzeko aukera ematen dizu

1. HACS oraindik instalatu ez baduzu, deskargatu [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) helbideko argibideak jarraituz
2. Egin HACSren hasierako konfigurazioa [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) helbideko argibideak jarraituz
3. Zure alboko barran joan "HACS" atalera
4. Bilatu "Bubble Card", edo klikatu beheko botoi urdinean
5. Klikatu "Download"
6. Itzuli zure panelera eta klikatu goiko eskuineko izkinako ikonoa, ondoren `Edit dashboard`
7. Orain `Add card` klikatu dezakezu beheko eskuineko izkinan eta bilatu `Bubble Card`

Ez badabil, saiatu zure nabigatzailearen/aplikazioaren cachea garbitzen (behar izanez gero zure gailu guztietan).

#### Bideoak

Nire YouTube kanala ere ikus dezakezu, urratsez urratseko bideoetarako.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurazioa

Aukera guztiak Home Assistant editorean konfigura daitezke. Baina xehetasun gehiago eta YAML kodea beheko dokumentazioan aurki ditzakezu.

<details>

<summary><b>Aukera nagusiak (YAML + deskribapena)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Deskribapena |
| --- | --- | --- | --- | --- |
| `type` | string | **Beharrezkoa** | `custom:bubble-card` | Txartelaren mota |
| `card_type` | string | **Beharrezkoa** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` edo `sub-buttons` | Bubble Card txartelaren mota, ikus beherago |
| `styles` | object list | Aukerakoa | Edozein CSS estilo-orri | Zure Bubble Card CSS pertsonalizatzeko aukera ematen dizu, ikus [estiloa](#estiloa) |

</details>

<details>

<summary><b>CSS aldagai globalak (ikus <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Deskribapena |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Elementu onartu guztien ertz-erradioa |
| `--bubble-main-background-color` | `color` | Elementu onartu guztien atzeko planoaren kolore nagusia |
| `--bubble-secondary-background-color` | `color` | Elementu onartu guztien atzeko planoaren bigarren mailako kolorea |
| `--bubble-accent-color` | `color` | Elementu onartu guztien kolore nabarmena |
| `--bubble-icon-border-radius` | `px` | Elementu onartu guztien ikonoen ertz-erradioa |
| `--bubble-icon-background-color` | `color` | Elementu onartu guztien ikonoen atzeko planoaren kolorea |
| `--bubble-sub-button-border-radius` | `px` | Azpibotoi guztien ertz-erradioa |
| `--bubble-sub-button-background-color` | `color` | Azpibotoi guztien atzeko planoaren kolorea |
| `--bubble-box-shadow` | ikus [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Elementu onartu guztien itzala |
| `--bubble-border` | ikus [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Txartel onartu guztien ertza |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Ikusi [bideo](https://www.youtube.com/watch?v=0hSQOlBxKKI) hau Bubble Card eta bere gaitasunak ezagutzeko.** Nire YouTube kanala nahiko berria da eta Home Assistant eta Bubble Cardi buruzko tutorialetan zentratzen da. Ez izan zalantzarik harpidetzeko, nire kanalaren ikusgarritasuna handitzen laguntzeko. Aurretiaz eskerrik asko!

<br>

---

<br>

## Entitate iradokizunak

Home Assistant 2026.6 bertsiotik aurrera, txartel-hautatzailean entitate bat aukeratzean prest dauden txartel batzuk eskaintzen zaizkizu, eta Bubble Cardek bere errezetak gehitzen dizkio zerrenda horri. Aukeratu argi bat eta distira-graduatzailea duen txartel bat eskainiko zaizu, baita kolore-tenperatura, kolore eta saturazio aldaerak ere zure argiak onartzen dituenean. Aukeratu estalki bat eta bere posizio-graduatzailea lortuko duzu, aukeratu multimedia-erreproduzigailu bat eta bere iturri-zerrenda duen aldaera bat ere lortuko duzu, aukeratu xurgagailu bat eta abiarazteko, pausatzeko eta oinarrira itzultzeko botoiak lortuko dituzu. Iradokizun bakoitza Bubble Carden konfigurazio arrunt bat da, zuzeneko aurrebista gisa erakutsia, beraz hurbilena hartu eta ohi bezala editatzen jarrai dezakezu.

Zer eskaintzen zaizun zure entitateak benetan zer egin dezakeen araberakoa da: distira-kanalik gabeko argi batek graduatzailearen ordez txandakatzailea jasotzen du, okertu ezin den estalki batek ez du okertze-aldaerarik jasotzen, eta klimatizazio-entitate batek bere aurrezarritako moduak jasotzen ditu horrelakorik badu soilik. Sarrera klasikoak Bubble Carden iradokizunen azpitik datoz aplikagarriak direnean: entitate mota horri dagokion txartela, botoi soil bat eta graduatzaile bat.

> [!TIP]
> Moduluek beren iradokizunak gehi ditzakete zerrenda horretan, ikus [moduluak](#moduluak).

<br>

---

<br>

## Laster-leihoa

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Txartel honek edukin edozein duen laster-leiho bat sortzeko aukera ematen dizu. Laster-leiho bakoitza **lehenetsi gisa ezkutuan** dago eta bere lotura xede hartuz ireki daiteke (adib. `'#pop-up-name'`), `navigate` [ekintza](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) onartzen duen edozein txartelekin, edo barne hartutako [botoi-pila horizontalarekin](#botoi-pila-horizontala).

> [!TIP]
> ### Laster-leihoaren abiarazlea 
> Funtzio honek edozein entitateren egoeraren arabera laster-leiho bat irekitzeko aukera ematen dizu, adibidez, "Segurtasuna" laster-leihoa kamera batekin ireki dezakezu norbait zure etxe aurrean dagoenean. Toggle helper bat ere sor dezakezu (input_boolean) eta bere irekiera/itxiera automatizazio batean abiarazi.
> <details>
> <summary>Laster-leiho bat irekitzea <code>binary_sensor</code> bat <code>on</code> dagoenean</summary>
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
> ### Laster-leiho bat isteko modu desberdinak 
> Laster-leiho bat isteko modu asko daude. Esaterako, laster-leihoaren goiburutik behera irrista dezakezu, laster-leihoaren barruan behera irristada luze bat eginez, mahaigainean Escape sakatuz, URLean hasha kenduz edo, besterik gabe, itxi botoia sakatuz.
>


### Laster-leihoaren aukerak

<details>

<summary><b>Aukerak (YAML + deskribapenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Deskribapena |
| --- | --- | --- | --- | --- |
| `hash` | string | **Beharrezkoa** | Edozein hash bakar (adib. `'#kitchen'`) ' ' gabe | Zure laster-leihoa irekitzeko modua da hau |
| `popup_style` | string | Aukerakoa | `bubble` (lehenetsia) edo `classic` | Laster-leihoaren estilo bisuala definitzen du |
| `popup_mode` | string | Aukerakoa | `default` (lehenetsia), `fit-content`, `centered` edo `adaptive-dialog` | Laster-leihoaren diseinu modua definitzen du |
| `with_bottom_offset` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | `popup_mode: fit-content` edo `adaptive-dialog` erabiltzen denean bakarrik erabiltzen da. Beheko desplazamendu bat aplikatzen du mugikorrean, baliagarria zure panelak orri-oina badu. |
| `full_width_on_mobile` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | `popup_mode: centered` erabiltzen denean bakarrik erabiltzen da. Laster-leihoa pantaila osoaren zabalerara zabaltzen du mugikorrean, baliagarria pantaila txikietan. |
| `performance_mode` | string | Aukerakoa | `default` (lehenetsia) edo `performance` | Laster-leihoa irekitzeko animazioa optimizatzen du. `performance` aukerak edukiaren errendatzea eta atzeko planoaren lausotzea pixka bat atzeratzen ditu, eta baita backdrop lausotzea desgaitzen ere ezarrita badago. |
| `auto_close` | string | Aukerakoa | Milisegundotan denbora-muga bat (adib. `10000` 10s-rako) | Laster-leihoa automatikoki ixten du denbora-muga baten ondoren |
| `close_on_click` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Laster-leihoa automatikoki ixten du edozein interakzioren ondoren |
| `close_by_clicking_outside` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Laster-leihoa ixten du kanpoaldean klikatuz |
| `width_desktop` | string | Aukerakoa | Edozein CSS balio | Zabalera mahaigainean (`100%` lehenetsia mugikorrean) |
| `margin` | string | Aukerakoa | Edozein CSS balio | Erabili hau **soilik** zure laster-leihoa mugikorrean ondo zentratuta ez badago (adib. `13px`) |
| `margin_top_mobile` | string | Aukerakoa | Edozein CSS balio | Goiko marjina mugikorrean (adib. `-56px` zure goiburua ezkutuan badago) |
| `margin_top_desktop` | string | Aukerakoa | Edozein CSS balio | Goiko marjina mahaigainean (adib. `50vh` tamaina erdiko laster-leiho baterako edo `calc(100vh - 400px)` `400px`-eko altuera finko baterako) |
| `bg_color` | string | Aukerakoa | Edozein hex, rgb edo rgba balio | Zure laster-leihoaren atzeko planoaren kolorea (adib. `#ffffff` atzeko plano zurirako) |
| `bg_opacity` | string | Aukerakoa | `0`tik `100`era bitarteko edozein balio | Zure laster-leihoaren atzeko planoaren opakotasuna (adib. `100` gardentasunik gabe) |
| `bg_blur` | string | Aukerakoa | `0`tik `100`era bitarteko edozein balio | Zure laster-leihoaren atzeko planoaren lausotze efektua, **honek soilik funtzionatzen du `bg_opacity` `100`ean ezarrita ez badago** (adib. `0` lausorik gabe)|
| `shadow_opacity` | string | Aukerakoa | `0`tik `100`era bitarteko edozein balio | Zure laster-leihoaren itzalaren opakotasuna (adib. `0` ezkutatzeko) |
| `hide_backdrop` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezarri hau true gisa zure panel nagusiko lehen laster-leihoan, laster-leiho guztietako backdropa desgaitzeko. |
| `background_update` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Laster-leihoaren edukia atzeko planoan eguneratzen du (ez da gomendagarria) |
| `trigger` | object edo list | Aukerakoa | Ikusi [baldintzak](#baldintzak) | Laster-leiho hau irekitzen du baldintzak betetzen direnean |
| `trigger_entity` | string | Aukerakoa | Edozein entitate | Laster-leiho hau edozein entitateren egoeraren arabera irekitzen du, `trigger` aukeraren forma sinplea |
| `trigger_state` | string | Aukerakoa (**Beharrezkoa** `trigger_entity` definituta badago) | Edozein entitate-egoera | Laster-leihoa irekitzeko entitate-egoera |
| `trigger_close` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Laster-leihoa ixten du baldintzak jada betetzen ez direnean. Lehenetsia `false` da, ordea, `trigger_entity` eta `trigger_state` bikote zaharragoa erabiltzen duzunean |
| `open_action` | object | Aukerakoa | Ikus [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Ekintza bat abiarazten du laster-leihoa irekitzean |
| `close_action` | object | Aukerakoa | Ikus [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Ekintza bat abiarazten du laster-leihoa ixtean |
| `show_header` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Laster-leihoaren goiburua erakusten/ezkutatzen du erabat |
| `show_previous_button` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Aurreko botoi bat erakusten du itxi botoiaren ondoan, eta aurreko laster-leihora nabigatzen du eskuragarri dagoenean |
| `show_close_button` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Itxi botoia erakusten edo ezkutatzen du, goiburuaren gainerakoa ikusgai mantenduz |
| `buttons_position` | string | Aukerakoa | `right` (lehenetsia) edo `left` | Itxi eta aurreko botoien posizioa goiburuan |
| `cards` | list | Aukerakoa | Edozein Bubble Card, Home Assistant txartel edo txartel pertsonalizatu | Zure laster-leihoaren edukia definitzen du. Ikus beheko laster-leiho adibidea. |
| [Botoiaren ezarpen guztiak](#botoia) ere eskuragarri dituzu laster-leihoaren goibururako. | | Aukerakoa | | Definitu gabe badago, ez da goibururik erakutsiko |

</details>

<details>

<summary><b>CSS aldagaiak (ikus <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Deskribapena |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Laster-leihoaren ertz-erradioa |
| `--bubble-pop-up-main-background-color` | `color` | Laster-leihoaren elementu onartuen atzeko planoaren kolore nagusia |
| `--bubble-pop-up-background-color` | `color` | Laster-leihoaren atzeko planoaren kolorea |
| `--bubble-backdrop-background-color` | `color` | Backdropari dagokion atzeko planoaren kolorea |
| [Botoiaren CSS aldagai guztiak](#botoiaren-aukerak) ere eskuragarri dituzu laster-leihoaren goibururako. | | |

</details>


### Laster-leiho formatu autonomoa (v3.2.0+)

v3.2.0 bertsiotik aurrera, laster-leihoek formatu autonomo berri bat erabiltzen dute, non edukiaren txartelak `cards` aukeraren bidez zuzenean laster-leihoaren barruan definitzen diren. Honek errendimendu hobea eta atal bidezko drag-and-drop edizio esperientzia berri bat eskaintzen ditu.


#### Adibideak

<details>

<summary>Laster-leiho bat (formatu autonomoa)</summary>

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

<summary>Laster-leihoa irekitzeko botoi bat</summary>

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

## Botoi-pila horizontala

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Txartel hau lagungarri ona da laster-leiho txartelarekin, dagozkien laster-leihoak irekitzeko aukera emanez. Zure panelaren edozein orrialde irekitzeko ere balio du. Gainera, mugimendu/okupazio sentsoreak gehi ditzakezu, botoien ordena berri sartu duzun gelaren arabera egokitu dadin. Txartel hau irristagarria da, ikusgai mantentzen da eta orri-oin gisa jokatzen du.

> [!IMPORTANT]  
> Txartel hau azken bat izan behar da zure ikuspegian (txartel eta laster-leiho guztien ondoren). Ezin da pilaren barruan egon.

### Botoi-pila horizontalaren aukerak

<details>

<summary><b>Aukerak (YAML + deskribapenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Deskribapena |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Beharrezkoa** | Laster-leihoaren hasha (adib. `'#kitchen'`) ' ' gabe edo edozein lotura | Irekitzeko lotura bat |
| `1_name` | string | Aukerakoa | Edozein testu-kate | Zure botoiaren izena |
| `1_icon` | string | Aukerakoa | Edozein `mdi:` ikono | Zure botoiaren ikonoa |
| `1_entity` | string | Aukerakoa | Edozein argi edo argi-talde | Argi horren kolorea atzeko planoan erakusten du |
| `1_pir_sensor` | string | Aukerakoa | Edozein sentsore bitar | Gutxienez pir sentsore bat edo gehiago `auto_order`-erako, izan ere edozein entitate motarekin ere funtzionatzen du, adibidez argi-taldeak gehi ditzakezu eta ordena aldatuko da azken egoera-aldaketen arabera. |
| `auto_order` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Botoien ordena aldatzen du `_pir_sensor` azken aldaketa-denboraren arabera, **`false` izan behar du zure kodean `_pir_sensor`-ik ez baduzu** |
| `margin` | string | Aukerakoa | Edozein CSS balio | Erabili hau **soilik** zure `horizontal-buttons-stack` mugikorrean ondo zentratuta ez badago (adib. `13px`) |
| `width_desktop` | string | Aukerakoa | Edozein CSS balio | Zabalera mahaigainean (`100%` lehenetsia mugikorrean) |
| `is_sidebar_hidden` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Botoi-pila horizontalaren posizioa finkatzen du alboko barra mahaigainean ezkutuan badago (soilik zeuk ezkutatzeko aldaketa egin baduzu) |
| `rise_animation` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Ezarri hau `false` gisa orria kargatu ondoren aktibatzen den animazioa desgaitzeko |
| `highlight_current_view` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Uneko hash/ikuspegia nabarmentzen du animazio leun batekin |
| `hide_gradient` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezarri hau `false` gisa gradientea ezkutatzeko |

> [!IMPORTANT]  
> Zenbaki batekin hasten diren aldagaiek zure botoiak definitzen dituzte, zenbaki hori aldatu besterik ez duzu egin behar botoi gehiago gehitzeko (ikus beheko adibidea).

</details>

<details>

<summary><b>CSS aldagaiak (ikus <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Deskribapena |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Botoi-pila horizontaleko botoien ertz-erradioa |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Botoi-pila horizontaleko botoien atzeko planoaren kolorea |

</details>


#### Adibidea

<details>

<summary>Okupazio sentsoreen arabera bere burua berrantolatzen duen botoi-pila horizontala</summary>

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

## Botoia

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Txartel hau oso malgua da. **etengailu**, **graduatzaile**, **egoera** edo **izen/testu** botoi gisa erabil daiteke.

> [!TIP]
> ### Zein dira botoi mota guztien arteko aldeak?
>
> - **Etengailu botoia:** Hau da botoi mota lehenetsia. Berez, entitate bat aldatzen du eta bere atzeko planoaren kolorea entitatearen egoeraren edo argi baten kolorearen arabera aldatzen da. Bere ekintza **Txartelean sakatzeko ekintza** atalean alda dezakezu.
>
> - **Graduatzaile botoia:** Botoi mota honek barruti egokigarriak dituzten entitateak kontrolatzeko aukera ematen dizu. Ezin hobea da argiak iluntzeko, eta bere betegarriaren kolorea argiaren kolorera egokituko da. Balioak bistaratzeko ere erabil dezakezu, adibidez bateria maila bat.
>   Graduatzaileek onartzen dituzten entitateak:
>   - Argia (distira)
>   - Multimedia-erreproduzigailua (bolumena)
>   - Estalkia (posizioa)
>   - Haizagailua (ehunekoa)
>   - Klimatizazioa (tenperatura)
>   - Sarrera-zenbakia eta zenbakia (balioa)
>   - Bateria sentsorea (ehunekoa, irakurtzeko soilik)
>
>   Egoera numerikoa duen edozein entitate ere erabil dezakezu, entitate-iragazkia **Graduatzailearen ezarpenak** atalean desgaituz, ondoren `min` eta `max` balioak definituz. Aukera hau irakurtzeko soilik da.
>
> - **Egoera botoia:** Ezin hobea sentsore edo edozein entitateren informazioa bistaratzeko. Sakatzean, entitatearen "Informazio gehiago" panela erakutsiko du. Bere atzeko planoaren kolorea ez da aldatzen.
>
> - **Izen/Testu botoia:** Entitaterik behar ez duen botoi mota bakarra. Testu labur bat, izen bat edo titulu bat bistaratzeko aukera ematen du. Ekintzak ere gehi diezazkiokezu. Bere atzeko planoaren kolorea ez da aldatzen.

### Botoiaren aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `entity` | string | **Beharrezkoa** | Edozein entitate | Kontrolatzeko entitate bat |
| `button_type` | string | Aukerakoa | `switch` (lehenetsia), `slider`, `state` edo `name` | Zure botoiaren portaera |
| `name` | string | Aukerakoa | Edozein testu | Zure botoiaren izena, definitu ez bada entitatearen izena erakutsiko da |
| `icon` | string | Aukerakoa | Edozein `mdi:` ikono | Zure botoiaren ikonoa, definitu ez bada entitatearen ikonoa edo `entity-picture` erakutsiko da |
| `force_icon` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Eman lehentasuna ikonoari `entity-picture`-ren ordez |
| `use_accent_color` | boolean | Aukerakoa (`false` lehenetsia) | **Argientzat soilik.** Erabili gaiaren nabarmentze-kolorea argiaren kolorearen ordez.                         |
| `show_state` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi edo ezkutatu zure `entity`-ren egoera |
| `show_name` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu izena |
| `show_icon` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu ikonoa |
| `show_last_changed` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken aldaketa-ordua |
| `show_last_updated` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken eguneratze-ordua |
| `show_attribute` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren atributu bat bere `name`-ren azpian |
| `attribute` | string | Aukerakoa (`show_attribute` `true` gisa ezarrita badago, beharrezkoa) | Zure `entity`-ren atributu bat | Erakutsi beharreko atributua (adibidez `brightness`) |
| `scrolling_effect` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Testua irristatzea baimendu edukiak edukiontziaren tamaina gainditzen duenean |
| `button_action` | object | Aukerakoa | `tap_action`, `double_tap_action` edo `hold_action`, ikusi behean | Botoiaren klik gaineko ekintza lehenetsiak aldatzeko aukera ematen du. |
| `tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik gaineko ekintza mota, definitu ez bada `more-info` erabiliko da |
| `double_tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik bikoitz gaineko ekintza mota, definitu ez bada `none` erabiliko da |
| `hold_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren luze sakatzeko ekintza mota, definitu ez bada `more-info` erabiliko da |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |
| `sub_button` | object | Aukerakoa | Ikusi [azpibotoiak](#azpibotoiak) | Eskuinaldean finkatutako botoi pertsonalizatuak gehitu |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Botoian onartutako elementuen atzeko planoaren kolore nagusia |
| `--bubble-button-border-radius` | `px` | Botoiaren ertz-erradioa |
| `--bubble-button-icon-border-radius` | `px` | Botoiaren ikono-edukiontziaren ertz-erradioa |
| `--bubble-button-icon-background-color` | `color` | Botoiaren ikono-edukiontziaren atzeko planoaren kolorea |
| `--bubble-light-white-color` | `color` | Argi-botoi/graduatzaileen zuri kolore lehenetsia ordezkatu |
| `--bubble-light-color` | `color` | Argi-botoi/graduatzaileen kolorea ordezkatu (RGB argiak barne) |
| `--bubble-button-box-shadow` | ikusi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Botoiaren itzala |

</details>

Aukera hauek soilik daude erabilgarri `button_type` `slider` gisa ezarrita dagoenean.

<details>

<summary><b>Graduatzailearen aukerak (YAML + azalpenak)</b></summary>

| Izena                  | Mota    | Beharra                     | Azalpena                                                                                             |
| --------------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Aukerakoa                        | Graduatzailearen balio minimoa. Graduatzaile pertsonalizatuentzat.                                                    |
| `max_value`             | number  | Aukerakoa                        | Graduatzailearen balio maximoa. Graduatzaile pertsonalizatuentzat.                                                    |
| `step`                  | number  | Aukerakoa                        | Graduatzailearen urrats-balioa.                                                                           |
| `tap_to_slide`          | boolean | Aukerakoa (`false` lehenetsia)      | Gaitu aurreko graduatzaile-portaera, graduatzailea aktibatzeko sakatu behar duzun horretan, luzatuta eduki beharrean.        |
| `relative_slide`        | boolean | Aukerakoa (`false` lehenetsia )     | Eguneratu balioa hasierako balioarekiko, hasierako ukipen-puntuarekiko ez.                                      |
| `read_only_slider`      | boolean | Aukerakoa (`false` lehenetsia)      | Egin graduatzailea irakurtzeko soilik. Automatikoki gaituta dago sentsore bezalako entitate batzuentzat.                        |
| `slider_live_update`    | boolean | Aukerakoa (`false` lehenetsia)      | Entitatearen egoera irristatzen ari den bitartean eguneratzen da. **Ezaugarri hau ez da gomendagarria entitate guztientzat.**        |
| `slider_fill_orientation` | string | Aukerakoa | `left`, `right`, `top` edo `bottom` | Aldatu graduatzailearen betetze-norabidea. Ezkerretik eskuinera definitu gabe dagoenean, ispilatuta [eskuinetik ezkerrera idazten diren hizkuntzetan](#lokalizazioa) |
| `slider_value_position` | string | Aukerakoa | `right`, `left`, `center` edo `hidden` | Balioaren bistaratze-posizioa. Eskuinean definitu gabe dagoenean, eta ezkerrean [eskuinetik ezkerrera idazten diren hizkuntzetan](#lokalizazioa) |
| `invert_slider_value` | boolean | Aukerakoa (`false` lehenetsia) | Alderantzikatu graduatzailearen norabidea (%100eko betetzeak minimoa esan nahi du). Ez dago erabilgarri kolore-graduatzaileentzat. |
| `light_slider_type` | string | Aukerakoa | `brightness` (lehenetsia), `hue`, `saturation`, `white_temp` | **Argientzat soilik.** Aukeratu graduatzaile modua |
| `cover_slider_type` | string | Aukerakoa | `position` (lehenetsia), `tilt_position` | **Estalkientzat soilik.** Aukeratu graduatzaile modua (posizioa edo inklinazioa) |
| `hue_force_saturation` | boolean | Aukerakoa (`false` lehenetsia) | **Argientzat soilik (Hue moduan).** Behartu saturazioa Hue doitzean |
| `hue_force_saturation_value` | number | Aukerakoa (`100` lehenetsia) | **Argientzat soilik (Hue moduan).** Behartutako saturazio-balioa (0-100) |
| `use_accent_color` | boolean | Aukerakoa (`false` lehenetsia) | **Argientzat soilik (Distira moduan).** Erabili gaiaren nabarmentze-kolorea argiaren kolorearen ordez |
| `allow_light_slider_to_0` | boolean | Aukerakoa (`false` lehenetsia)    | **Argientzat soilik.** Graduatzaileak %0ra iristea baimentzen du, horrek argia itzaltzen du. Ez dago erabilgarri `tap_to_slide`rekin. |
| `light_transition`      | boolean | Aukerakoa (`false` lehenetsia)      | **Argientzat soilik.** Gaitu distira-trantsizio leunak onartzen dituzten argientzat.                           |
| `light_transition_time` | number  | Aukerakoa (`500` lehenetsia)        | **Argientzat soilik.** Trantsizio-denbora milisegundotan. `light_transition: true` behar du.            |

</details>

#### Adibideak

<details>

<summary>Argi baten distira kontrola dezakeen graduatzaile-botoi bat</summary>

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

<summary>Aukera gehiago dituen botoi bat</summary>

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

## Multimedia-erreproduzigailua

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Txartel honek multimedia-erreproduzigailu entitate bat kontrolatzeko aukera ematen dizu.

### Multimedia-erreproduzigailuaren aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `entity` | string | **Beharrezkoa** | Edozein multimedia-erreproduzigailu | Kontrolatzeko multimedia-erreproduzigailua |
| `name` | string | Aukerakoa | Edozein testu | Zure multimedia-erreproduzigailuaren izena, definitu ez bada entitatearen izena erakutsiko da |
| `icon` | string | Aukerakoa | Edozein `mdi:` ikono | Zure multimedia-erreproduzigailuaren ikonoa, definitu ez bada entitatearen ikonoa edo `entity-picture` erakutsiko da |
| `force_icon` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Eman lehentasuna ikonoari `entity-picture`-ren ordez |
| `show_state` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi edo ezkutatu zure `entity`-ren egoera |
| `show_name` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu izena |
| `show_icon` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu ikonoa |
| `show_last_changed` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken aldaketa-ordua |
| `show_last_updated` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken eguneratze-ordua |
| `show_attribute` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren atributu bat bere `name`-ren azpian |
| `attribute` | string | Aukerakoa (`show_attribute` `true` gisa ezarrita badago, beharrezkoa) | Zure `entity`-ren atributu bat | Erakutsi beharreko atributua (adibidez `brightness`) |
| `scrolling_effect` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Testua irristatzea baimendu edukiak edukiontziaren tamaina gainditzen duenean |
| `min_volume` | number | Aukerakoa | Edozein zenbaki | Bolumen-graduatzailearen balio minimoa. |
| `max_volume` | number | Aukerakoa | Edozein zenbaki | Bolumen-graduatzailearen balio maximoa. |
| `cover_background` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erabili multimedia-azal lausotu bat txartelaren atzeko plano gisa. |
| `button_action` | object | Aukerakoa | `tap_action`, `double_tap_action` edo `hold_action`, ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Botoiaren klik gaineko ekintza lehenetsiak aldatzeko aukera ematen du. |
| `tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik gaineko ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `double_tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik bikoitz gaineko ekintza mota, definitu ez bada `none` erabiliko da. |
| `hold_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren luze sakatzeko ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `main_buttons_position` | string | Aukerakoa | `default` edo `bottom` | Eraman multimedia-ekintzen botoiak behealdera (finkatuta) |
| `main_buttons_full_width` | boolean | Aukerakoa | `true` edo `false` | Egin beheko ekintza-botoiak zabalera osokoak (lehenetsia: `true` posizioa `bottom` denean) |
| `main_buttons_alignment` | string | Aukerakoa | `end` (lehenetsia), `center`, `start`, `space-between` | Beheko ekintza-botoien lerrokatzea zabalera osokoak ez direnean |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |
| `sub_button` | object | Aukerakoa | Ikusi [azpibotoiak](#azpibotoiak) | Eskuinaldean finkatutako botoi pertsonalizatuak gehitu |
| `hide` | object | Aukerakoa | Ikusi behean | Ezkutatu botoiak txarteletik |

#### Ezkutatzeko aukerak

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezkutatu erreproduzitu/pausatu botoia |
| `volume_button` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezkutatu bolumen-botoia |
| `previous_button` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezkutatu aurreko botoia |
| `next_button` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezkutatu hurrengo botoia |
| `power_button` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezkutatu piztu/itzali botoia |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Multimedia-erreproduzigailuaren atzeko planoaren kolore nagusia |
| `--bubble-media-player-border-radius` | `px` | Multimedia-erreproduzigailuaren ertz-erradioa |
| `--bubble-media-player-buttons-border-radius` | `px` | Multimedia-erreproduzigailuaren botoien ertz-erradioa |
| `--bubble-media-player-slider-background-color` | `color` | Bolumen-graduatzailearen atzeko planoaren kolorea |
| `--bubble-media-player-icon-border-radius` | `px` | Multimedia-erreproduzigailuaren ikono-edukiontziaren ertz-erradioa |
| `--bubble-media-player-icon-background-color` | `color` | Multimedia-erreproduzigailuaren ikono-edukiontziaren atzeko planoaren kolorea |
| `--bubble-media-player-box-shadow` | ikusi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Multimedia-erreproduzigailuaren itzala |

</details>


#### Adibideak

<details>

<summary>Aukera guztiak dituen multimedia-erreproduzigailu bat</summary>

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

## Estalkia

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Txartel honek zure `cover` entitateak kontrolatzeko aukera ematen dizu.

### Estalkiaren aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `entity` | string | **Beharrezkoa** | Edozein estalki | Kontrolatzeko estalki bat |
| `name` | string | Aukerakoa | Edozein testu | Zure estalkiaren izena, definitu ez bada entitatearen izena erakutsiko da |
| `force_icon` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Eman lehentasuna ikonoari `entity-picture`-ren ordez |
| `show_state` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi edo ezkutatu zure `entity`-ren egoera |
| `show_name` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu izena |
| `show_icon` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu ikonoa |
| `show_last_changed` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken aldaketa-ordua |
| `show_last_updated` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken eguneratze-ordua |
| `show_attribute` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren atributu bat bere `name`-ren azpian |
| `attribute` | string | Aukerakoa (`show_attribute` `true` gisa ezarrita badago, beharrezkoa) | Zure `entity`-ren atributu bat | Erakutsi beharreko atributua (adibidez `brightness`) |
| `scrolling_effect` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Testua irristatzea baimendu edukiak edukiontziaren tamaina gainditzen duenean |
| `icon_open` | string | Aukerakoa | Edozein `mdi:` ikono | Zure estalki irekiaren ikonoa, definitu ez bada estalki irekiaren ikono lehenetsia erakutsiko da |
| `icon_close` | string | Aukerakoa | Edozein `mdi:` ikono | Zure estalki itxiaren ikonoa, definitu ez bada estalki itxiaren ikono lehenetsia erakutsiko da |
| `icon_up` | string | Aukerakoa | Edozein `mdi:` ikono | Zure estalkia irekitzeko botoiaren ikonoa, definitu ez bada estalki irekiaren ikono lehenetsia erakutsiko da |
| `icon_down` | string | Aukerakoa | Edozein `mdi:` ikono | Zure estalkia isteko botoiaren ikonoa, definitu ez bada estalki itxiaren ikono lehenetsia erakutsiko da |
| `open_service` | string | Aukerakoa | Edozein zerbitzu edo script | Zure estalkia irekitzeko zerbitzua, lehenetsia `cover.open_cover` |
| `stop_service` | string | Aukerakoa | Edozein zerbitzu edo script | Zure estalkia gelditzeko zerbitzua, lehenetsia `cover.stop_cover` |
| `close_service` | string | Aukerakoa | Edozein zerbitzu edo script | Zure estalkia isteko zerbitzua, lehenetsia `cover.close_cover` |
| `tilt_buttons` | string | Aukerakoa | `top` (lehenetsia), `bottom`, `left`, `right`, `hidden` | Inklinazio-kontrolaren botoien posizioa (estalkiak inklinazioa onartzen badu soilik erakusten da) |
| `open_tilt_service` | string | Aukerakoa | Edozein zerbitzu edo script | Inklinazioa irekitzeko zerbitzua, lehenetsia `cover.open_cover_tilt` |

| `close_tilt_service` | string | Aukerakoa | Edozein zerbitzu edo script | Inklinazioa isteko zerbitzua, lehenetsia `cover.close_cover_tilt` |
| `button_action` | object | Aukerakoa | `tap_action`, `double_tap_action` edo `hold_action`, ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Botoiaren klik gaineko ekintza lehenetsiak aldatzeko aukera ematen du. |
| `tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik gaineko ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `double_tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik bikoitz gaineko ekintza mota, definitu ez bada `none` erabiliko da. |
| `hold_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren luze sakatzeko ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `main_buttons_position` | string | Aukerakoa | `default` edo `bottom` | Eraman kontrolak behealdera (finkatuta) |
| `main_buttons_full_width` | boolean | Aukerakoa | `true` edo `false` | Egin beheko kontrolak zabalera osokoak (lehenetsia: `true` posizioa `bottom` denean) |
| `main_buttons_alignment` | string | Aukerakoa | `end` (lehenetsia), `center`, `start`, `space-between` | Beheko kontrolen lerrokatzea zabalera osokoak ez direnean |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |
| `sub_button` | object | Aukerakoa | Ikusi [azpibotoiak](#azpibotoiak) | Eskuinaldean finkatutako botoi pertsonalizatuak gehitu |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Estalki-txartelean onartutako elementuen atzeko planoaren kolore nagusia |
| `--bubble-cover-border-radius` | `px` | Estalki-txartelaren ertz-erradioa |
| `--bubble-cover-icon-border-radius` | `px` | Estalki-txartelaren ikono-edukiontziaren ertz-erradioa |
| `--bubble-cover-icon-background-color` | `color` | Estalki-txartelaren ikono-edukiontziaren atzeko planoaren kolorea |
| `--bubble-cover-box-shadow` | ikusi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Estalki-txartelaren itzala |
| `--bubble-button-box-shadow` | ikusi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Estalki-txarteleko botoien itzala |

</details>


#### Adibidea

<details>

<summary>Pertsiana bat kontrola dezakeen txartel bat</summary>

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

## Hautaketa

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Txartel honek zure `input_select` / `select` entitateentzako hedapen-menu bat gehitzeko aukera ematen dizu. Txartel honek azpibotoiak eta Bubble Card-en ezaugarri arrunt guztiak ere onartzen ditu.

> [!TIP]
> Hautaketa-azpibotoiak ere izan ditzakezu nahi izanez gero, ezaugarri hau azpibotoiak onartzen dituzten txartel guztietan dago erabilgarri.

### Hautaketaren aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `entity` | string | **Beharrezkoa** | Edozein entitate | Kontrolatzeko entitate bat |
| `name` | string | Aukerakoa | Edozein testu | Zure hautaketaren izena, definitu ez bada entitatearen izena erakutsiko da |
| `icon` | string | Aukerakoa | Edozein `mdi:` ikono | Zure hautaketaren ikonoa, definitu ez bada entitatearen ikonoa edo `entity-picture` erakutsiko da |
| `force_icon` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Eman lehentasuna ikonoari `entity-picture`-ren ordez |
| `show_state` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi edo ezkutatu zure `entity`-ren egoera |
| `show_name` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu izena |
| `show_icon` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu ikonoa |
| `show_last_changed` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken aldaketa-ordua |
| `show_last_updated` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren azken eguneratze-ordua |
| `show_attribute` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-ren atributu bat bere `name`-ren azpian |
| `attribute` | string | Aukerakoa (`show_attribute` `true` gisa ezarrita badago, beharrezkoa) | Zure `entity`-ren atributu bat | Erakutsi beharreko atributua (adibidez `brightness`) |
| `scrolling_effect` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Testua irristatzea baimendu edukiak edukiontziaren tamaina gainditzen duenean |
| `tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik gaineko ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `double_tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik bikoitz gaineko ekintza mota, definitu ez bada `none` erabiliko da. |
| `hold_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren luze sakatzeko ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |
| `sub_button` | object | Aukerakoa | Ikusi [azpibotoiak](#azpibotoiak) | Eskuinaldean finkatutako botoi pertsonalizatuak gehitu |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Hautaketa-txartelean onartutako elementuen atzeko planoaren kolore nagusia |
| `--bubble-select-background-color` | `color` | Hautaketa-txartelaren atzeko planoaren kolorea |
| `--bubble-select-list-border-radius` | `px` | Txarteleko hedapen-menuaren ertz-erradioa |
| `--bubble-select-list-item-accent-color` | `color` | Hautatutako elementuaren nabarmentze-kolorea |
| `--bubble-select-list-background-color` | `color` | Txarteleko hedapen-menuaren atzeko planoaren kolorea |
| `--bubble-select-list-width` | `px` | Txarteleko hedapen-menuaren zabalera |
| `--bubble-select-arrow-background-color` | `color` | Hedapen-geziaren atzeko planoaren kolorea |
| `--bubble-select-button-border-radius` | `px` | Hautaketa-botoiaren ertz-erradioa |
| `--bubble-select-border-radius` | `px` | Hautaketa-txartelaren ertz-erradioa |
| `--bubble-select-icon-border-radius` | `px` | Hautaketa-txartelaren ikono-edukiontziaren ertz-erradioa |
| `--bubble-select-icon-background-color` | `color` | Hautaketa-txartelaren ikono-edukiontziaren atzeko planoaren kolorea |
| `--bubble-select-box-shadow` | ikusi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Hautaketa-txartelaren itzala |

</details>


#### Adibideak

<details>

<summary>Eszena-zerrenda bat duen hautaketa-txartel bat</summary>

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

## Klimatizazioa

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Txartel honek zure `climate` entitateak kontrolatzeko aukera ematen dizu.

> [!TIP]
> Modu-hautaketaren menua txartela sortzean automatikoki gehitzen den [azpibotoi](#azpibotoiak) bat da. Ondoren nahi bezala alda edo ken dezakezu.

### Klimatizazioaren aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena                     | Mota    | Beharra                         | Onartutako aukerak                                  | Azalpena                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Beharrezkoa**                        | Klimatizazio-entitatea                                   | Kontrolatu beharreko entitatea (adibidez, `climate.living_room`).                                                            |
| `name`                  | string  | Aukerakoa                            | Edozein testu                                       | Txartelarentzako izen pertsonalizatua. Definitu ez bada, entitatearen izena erakutsiko da.                                    |
| `icon`                  | string  | Aukerakoa                            | Edozein `mdi:` ikono                                  | Txartelarentzako ikono pertsonalizatua. Definitu ez bada, entitatearen ikonoa edo `entity-picture` erabiliko da.                   |
| `force_icon`            | boolean | Aukerakoa                            | `true` edo `false` (lehenetsia)                     | Lehentasuna ematen dio ikonoari `entity-picture`-ren gainetik.                                                           |
| `show_state`            | boolean | Aukerakoa                            | `true` edo `false` (lehenetsia)                     | Erakutsi edo ezkutatu `entity`-ren uneko egoera.                                                                 |
| `show_name`             | boolean | Aukerakoa                            | `true` (lehenetsia) edo `false`                     | Erakutsi edo ezkutatu entitatearen izena.                                                                            |
| `show_icon`             | boolean | Aukerakoa                            | `true` (lehenetsia) edo `false`                     | Erakutsi edo ezkutatu ikonoa.                                                                                          |
| `hide_target_temp_low`  | boolean | Aukerakoa (`target_temp_low` onartzen duten entitateentzat soilik) | `true` edo `false` (lehenetsia) | Ezkutatzen du helburuko tenperatura baxuaren kontrola, `entity`-k onartzen badu.                                          |
| `hide_target_temp_high` | boolean | Aukerakoa (`target_temp_high` onartzen duten entitateentzat soilik)| `true` edo `false` (lehenetsia) | Ezkutatzen du helburuko tenperatura altuaren kontrola, `entity`-k onartzen badu.                                         |
| `state_color`           | boolean | Aukerakoa                            | `true` edo `false` (lehenetsia)                     | Klimatizazio-entitatea PIZTUTA dagoenean atzeko planoaren kolore konstante bat aplikatzen du.                                                              |
| `step` | number | Aukerakoa | Edozein zenbaki | Tenperatura-urratsa. |
| `min_temp` | number | Aukerakoa | Edozein zenbaki | Gutxieneko tenperatura. |
| `max_temp` | number | Aukerakoa | Edozein zenbaki | Gehieneko tenperatura. |
| `button_action` | object | Aukerakoa | `tap_action`, `double_tap_action` edo `hold_action`, ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Botoiaren klik gaineko ekintza lehenetsiak aldatzeko aukera ematen du. |
| `tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik gaineko ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `double_tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren klik bikoitz gaineko ekintza mota, definitu ez bada `none` erabiliko da. |
| `hold_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu ikonoaren luze sakatzeko ekintza mota, definitu ez bada `more-info` erabiliko da. |                              |
| `main_buttons_position` | string | Aukerakoa | `default` edo `bottom` | Eraman klimatizazio-ekintzen botoiak behealdera (finkatuta) |
| `main_buttons_full_width` | boolean | Aukerakoa | `true` edo `false` | Egin beheko ekintza-botoiak zabalera osokoak (lehenetsia: `true` posizioa `bottom` denean) |
| `main_buttons_alignment` | string | Aukerakoa | `end` (lehenetsia), `center`, `start`, `space-between` | Beheko ekintza-botoien lerrokatzea zabalera osokoak ez direnean |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |
| `sub_button`            | object  | Aukerakoa                            | Ikusi [azpibotoiak](#azpibotoiak)                | Eskuinaldean finkatutako botoi pertsonalizatuak gehitzen ditu. Erabilgarria klimatizazio-modu hautaketako menu batentzat.                                  |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Klimatizazio-txartelean onartutako elementuen atzeko planoaren kolore nagusia |
| `--bubble-climate-border-radius` | `px` | Klimatizazio-txarteleko elementu onartuen ertz-erradioa |
| `--bubble-climate-button-background-color` | `color` | Klimatizazio-txarteleko botoien atzeko planoaren kolorea |
| `--bubble-climate-icon-border-radius` | `px` | Klimatizazio-txartelaren ikono-edukiontziaren ertz-erradioa |
| `--bubble-state-climate-fan-only-color` | `color` | Haizagailu-soileko egoeraren gainjarpen-kolorea |
| `--bubble-state-climate-dry-color` | `color` | Lehortze-egoeraren gainjarpen-kolorea |
| `--bubble-state-climate-cool-color` | `color` | Hozte-egoeraren gainjarpen-kolorea |
| `--bubble-state-climate-heat-color` | `color` | Berotze-egoeraren gainjarpen-kolorea |
| `--bubble-state-climate-auto-color` | `color` | Modu automatikoaren gainjarpen-kolorea |
| `--bubble-state-climate-heat-cool-color` | `color` | Berotu-hoztu egoeraren gainjarpen-kolorea |
| `--bubble-climate-accent-color` | `color` | Klimatizazio-txartelaren nabarmentze-kolorea |
| `--bubble-climate-box-shadow` | ikusi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Klimatizazio-edukiontziaren itzala. |

</details>


#### Adibideak

<details>

<summary>HVAC moduen hedapen-menu bat duen klimatizazio-txartel bat</summary>

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

## Egutegia

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Txartel honek zure egutegi-entitateak bistaratzeko aukera ematen dizu. Bere edukia korrigarria da, beraz hurrengo gertaerak erraz araka ditzakezu.

### Egutegiaren aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena                | Mota    | Beharra  | Onartutako aukerak                               | Azalpena                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------|
| `days`              | number  | Aukerakoa     | Edozein zenbaki (gutxienez: 1)                        | Gertaerak eskuratzeko egutegi-egun kopurua, orain eta N. egunaren amaieraren artean (lehenetsia: 7) |
| `entities`          | object  | **Beharrezkoa** | Egutegi-entitate objektu bat (ikusi behean)            | Kontrolatu beharreko entitatea (adibidez, `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Beharrezkoa** | Egutegi-entitate bat                               | Bistaratu beharreko egutegi-entitatea                                                          |
| `entities.color`    | string  | Aukerakoa     | Kolore bat                                         | Egutegi-txipeko kolore pertsonalizatua. Definitu ez bada, kolore automatiko bat aukeratuko da |
| `days`              | number  | Aukerakoa     | Edozein zenbaki (gutxienez: 1)                         | Gertaerak eskuratzeko egutegi-egun kopurua, orain eta N. egunaren amaieraren artean (lehenetsia: 7) |
| `limit`             | number  | Aukerakoa     | Zenbaki bat                                        | Txartelean bistaratuko diren gertaeren kopurua                                  |
| `show_end`          | boolean | Aukerakoa     | `true` edo `false` (lehenetsia)                     | Erakutsi edo ezkutatu gertaeren amaiera-ordua                                                    |
| `show_progress`     | boolean | Aukerakoa     | `true` (lehenetsia) edo `false`                     | Erakutsi edo ezkutatu gertaeraren aurrerapen-barra                                                     |
| `show_started_events`| boolean | Aukerakoa     | `true` (lehenetsia) edo `false`                     | Erakutsi edo ezkutatu unean abian diren gertaerak. Egun bat baino gehiagoko gertaerak egunez egun epaitzen dira, beraz abian den eguna soilik ezkutatzen da eta datozen egunak ikusgai geratzen dira |
| `scrolling_effect`  | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Testua irristatzea baimendu edukiak edukiontziaren tamaina gainditzen duenean |
| `event_action` | object | Aukerakoa | `tap_action`, `double_tap_action` edo `hold_action`, ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Gertaeraren klik gaineko ekintzak gehitzeko aukera ematen du. |
| `tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu egunaren klik gaineko ekintza mota, definitu ez bada `none` erabiliko da. |
| `double_tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu egunaren klik bikoitz gaineko ekintza mota, definitu ez bada `none` erabiliko da. |
| `hold_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu egunaren luze sakatzeko ekintza mota, definitu ez bada `none` erabiliko da. |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |
| `sub_button` | object | Aukerakoa | Ikusi [azpibotoiak](#azpibotoiak) | Eskuinaldean finkatutako botoi pertsonalizatuak gehitu |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia                                  | Espero den balioa | Azalpena                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Egutegi-txartelean onartutako elementuen atzeko planoaren kolore nagusia  |
| `--bubble-calendar-border-radius`         | `px`           | Egutegi-txarteleko elementu onartuen ertz-erradioa |
| `--bubble-calendar-height`                | `px`           | Egutegi-txartelaren altuera                                        |

</details>

#### Adibideak

<details>

<summary>Gertaera kopuru mugatu bat duen egutegi-txartel bat</summary>

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

<summary>Amaiera-ordu bat eta aurrerapen-barra bat dituen egutegi-txartel bat</summary>

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


## Bereizlea

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Txartel hau laster-leihoa kategoriatan / atalen arabera banatzeko bereizle sinple bat da. Adibidez: Argiak, Gailuak, Estalkiak, Ezarpenak, Automatizazioak...

### Bereizlearen aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `name` | string | Aukerakoa, baina gomendagarria | Edozein testu | Zure bereizlearen izena |
| `icon` | string | Aukerakoa, baina gomendagarria | Edozein `mdi:` ikono | Zure bereizlearen ikonoa |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |
| `sub_button` | object | Aukerakoa | Ikusi [azpibotoiak](#azpibotoiak) | Eskuinaldean finkatutako botoi pertsonalizatuak gehitu |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Bereizlearen lerroaren atzeko planoaren kolorea |

</details>

#### Adibidea

<details>

<summary>"Estalkiak" atal baterako bereizle/marratxo bat</summary>

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

## Zutabe hutsa

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Txartel hau zutabe huts bat betetzeko dago. Erabilgarria da zure laster-leihoan `horizontal-stack` bat baduzu txartel bakarrarekin. Begiratu pantaila-argazki honen behe-eskuineko izkinan (ez) ikusteko.

### Zutabe hutsaren aukerak

Txartel honek ez du aukerarik eta ez du [estiloa](#estiloa) onartzen, hala ere HA sekzioetarako diseinu-aukerak onartzen ditu.

#### Adibidea

<details>

<summary>Zutabe huts bat pila horizontal batean</summary>

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

## Azpibotoiak soilik

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Txartel hau azpibotoiak soilik izateko da. Ezin hobea da menuetarako, ekintza azkarretarako, informazio-txipetarako edo orriaren behealdeko oin finko baterako.

> [!IMPORTANT]  
> Txartel honek azpibotoien eskema berria erabiltzen du. Erabili `sub_button.bottom` zure botoiak definitzeko. `sub_button.main` atala ez da kontuan hartzen.

### Azpibotoiak soilik aukerak

<details>

<summary><b>Aukerak (YAML + azalpenak)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Beharrezkoa** | Ikusi [azpibotoiak](#azpibotoiak) | Definitu zure azpibotoiak `bottom` atala erabiliz |
| `hide_main_background` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Kendu txartelaren atzeko planoa |
| `footer_mode` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Finkatu txartela orriaren behealdean |
| `footer_full_width` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Egin oina zabalera osokoa (%100) |
| `footer_width` | number | Aukerakoa | Edozein zenbaki | Oinaren zabalera pixeletan, `footer_full_width` `false` denean |
| `footer_bottom_offset` | number | Aukerakoa | Edozein zenbaki | Orriaren behealdetiko distantzia pixeletan (lehenetsia: `16`) |
| `card_layout` | string | Aukerakoa | `normal` (lehenetsia sekzio-ikuspegian ez badago), `large` (lehenetsia sekzio-ikuspegian badago), `large-2-rows`, `large-sub-buttons-grid` | Txartelaren diseinu-estiloa, ikusi [txartelen diseinuak](#txartelen-diseinuak) |
| `rows` | number | Aukerakoa | Edozein zenbaki | Errenkada kopurua (altuera) (adibidez `2`) |

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Oinaren zabalera, `footer_full_width` `false` denean |
| `--bubble-footer-bottom` | `px` | Oinaren beheko distantzia |
| `--bubble-footer-box-shadow` | ikusi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Oinaren edukiontziaren itzala |

</details>

#### Adibideak

<details>

<summary>Txipak (pantaila-argazkian bezala)</summary>

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

<summary>Behealdeko menu finko bat</summary>

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

## Azpibotoiak

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Aukera hori onartzen duen txartel guztietan, azpibotoiak gehitu ditzakezu zure txartelak are gehiago pertsonalizatzeko. Adibidez, aspiragailu bat, eguraldi-txartel bat edo bururatzen zaizun ia edozer kontrolatzen duen botoi bat sortu dezakezu. Azpibotoi hauek sakatze-ekintzak eta botoiaren aukera gehienak onartzen dituzte.

Azpibotoiek orain hiru mota onartzen dituzte: **lehenetsia (botoia)**, **graduatzailea** eta **goitibeherakoa / hautaketa**. Motak nahastu ditzakezu txartel berean, azpibotoiak goian edo behean jarri, eta taldeetan antolatu diseinu aurreratuagoak lortzeko.

#### Azpibotoien kokapena eta taldeak

<details>

<summary><b>Azpibotoien egitura (main / bottom + taldeak)</b></summary>

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

**Oharrak:**
- `main` eta `bottom` bi atal independente dira. Beheko azpibotoiak txartelaren behealdean finkatuta daude.
- `main_layout` eta `bottom_layout` aukerek `inline` (lehenetsia) edo `rows` onartzen dute, taldeak bertikalki pilatzeko.
- Taldeak `group` array bat eta aukerako `buttons_layout` (`inline` edo `column`) duten objektuak dira.
- `justify_content` **beheko taldeetarako soilik** dago erabilgarri (`start`, `center`, `end`, `fill`).
- Beheko azpibotoiak daudenean, txartelaren diseinua automatikoki `large`-ra aldatzen da, beste diseinu bat esplizituki ezarri ezean.
- `sub_button` array zaharrak oraindik onartzen dira, eta `main` ataltzat hartzen dira.

</details>

### Azpibotoien aukerak

<details>

<summary><b>Aukerak (YAML + azalpena)</b></summary>

| Izena | Mota | Beharra | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- | --- |
| `entity` | string | Aukerakoa | Edozein entitate | Kontrolatzeko entitate bat |
| `name` | string | Aukerakoa | Edozein testu | Zure azpibotoiaren izena, definitu ez bada entitatearen izena erakutsiko da |
| `icon` | string | Aukerakoa | Edozein `mdi:` ikono | Zure azpibotoiaren ikonoa, definitu ez bada entitatearen ikonoa edo argazkia erakutsiko da |
| `force_icon` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Behartu ikonoa entitatearen argazki bat eskuragarri egon arren |
| `sub_button_type` | string | Aukerakoa | `default`, `slider` edo `select` | Aukeratu azpibotoi mota |
| `show_background` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi zure azpibotoiaren atzeko planoa, entitatearen egoeraren arabera koloreztatuko da |
| `state_background` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erabili egoeraren kolorea entitatea `on` dagoenean |
| `light_background` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erabili argiaren kolorea atzeko planorako, eskuragarri dagoenean |
| `show_state` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi edo ezkutatu zure `entity`-aren egoera |
| `show_name` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi edo ezkutatu izena |
| `show_icon` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu ikonoa |
| `show_last_changed` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-aren azken aldaketa-ordua |
| `show_last_updated` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-aren azken eguneratze-ordua |
| `show_attribute` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Erakutsi zure `entity`-aren atributu bat bere `name`-aren azpian |
| `attribute` | string | Aukerakoa (beharrezkoa `show_attribute` `true` bada) | Zure `entity`-aren atributu bat | Erakutsi behar den atributua (adibidez `brightness`) |
| `select_attribute` | string | Aukerakoa | Zure `entity`-aren atributu-zerrenda bat (ikusi goiko aukera onartuak) | Atributu-zerrenda honek goitibeherako bat irekiko du sakatzean (adibidez `effect_list`) |
| `show_arrow` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Erakutsi edo ezkutatu goitibeherako gezia select motako azpibotoietan |
| `scrolling_effect` | boolean | Aukerakoa | `true` (lehenetsia) edo `false` | Baimendu testua korritzea edukia edukiontziaren tamaina baino handiagoa denean |
| `tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu azpibotoia sakatzean gertatuko den ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `double_tap_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu azpibotoia bi aldiz sakatzean gertatuko den ekintza mota, definitu ez bada `none` erabiliko da. |
| `hold_action` | object | Aukerakoa | Ikusi [ekintzak](#sakatze--sakatze-bikoitz--eta-luze-sakatze-ekintzak) | Definitu azpibotoia luze sakatzean gertatuko den ekintza mota, definitu ez bada `more-info` erabiliko da. |
| `fill_width` | boolean | Aukerakoa | `true` edo `false` | Bete eskuragarri dagoen zabalera (lehenetsia: `false` main atalean, `true` bottom atalean) |
| `width` | number edo string | Aukerakoa | Edozein zenbaki edo CSS luzera | Zabalera pertsonalizatua (`px` main atalerako, `%` bottom atalerako lehenespenez) |
| `custom_height` | number | Aukerakoa | Edozein zenbaki | Altuera pertsonalizatua pixeletan |
| `content_layout` | string | Aukerakoa | `icon-left` (lehenetsia), `icon-top`, `icon-bottom`, `icon-right` | Ikonoaren kokapena azpibotoiaren barruan |
| `always_visible` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | **Graduatzailean soilik.** Erakutsi beti graduatzailea, sakatzean irekitzen ez uztez |
| `show_button_info` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | **Graduatzailean soilik.** Erakutsi ikonoa/izena/egoera `always_visible` gaituta dagoenean |
| `visibility` | object edo list | Aukerakoa | Ikusi [baldintzak](#baldintzak) | Erakutsi edo ezkutatu azpibotoia baldintzen arabera |
| `hide_when_parent_unavailable` | boolean | Aukerakoa | `true` edo `false` (lehenetsia) | Ezkutatu azpibotoia guraso-txartelaren entitatea eskuragarri ez dagoenean |
| `css_class` | string | Aukerakoa | Edozein kate | CSS klase gehigarri bat azpibotoian, zure [estiloetan](#estiloa) hura xede hartzeko izena edozein dela ere (adib. `My value` balioak `.my-value` ematen du) |

</details>

<details>

<summary><b>Graduatzaile motako azpibotoien aukerak (botoi-graduatzaileen berdinak)</b></summary>

<br>

Graduatzaile motako azpibotoiek botoi-graduatzaileen aukera berak onartzen dituzte, besteak beste:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS aldagaiak (ikusi <a href="#estiloa">Estiloa</a>)</b></summary>

| Aldagaia | Espero den balioa | Azalpena |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Azpibotoien ertz-erradioa |
| `--bubble-sub-button-background-color` | `color` | Azpibotoien atzeko planoaren kolorea |
| `--bubble-sub-button-outline` | `box-shadow` | Azpibotoi edo graduatzaile bati gehitzen zaion ingerada, elementu hori atzeko txartelaren kolore berean marrazten denean soilik, horrek ikusezin bihurtuko bailuke (ezarri `none` kentzeko) |
| `--bubble-sub-slider-border-radius` | `px` | Graduatzaile motako azpibotoien ertz-erradioa |
| `--bubble-sub-slider-background-color` | `color` | Graduatzaile motako azpibotoien atzeko planoaren kolorea |
| `--bubble-sub-slider-height` | `px` | Beti ikusgai dagoen graduatzailearen altuera |
| `--bubble-sub-slider-outline` | `box-shadow` | Graduatzaile motako azpibotoien ingerada soilik, `--bubble-sub-button-outline` erabiltzen du bestela |
| `--bubble-sub-button-dark-text-color` | `color` | Testuaren kolorea atzeko plano argiak dituzten azpibotoietan |

</details>

#### Adibideak

<details>

<summary>Aspiragailu-txartel bat egiteko azpibotoi batzuk dituen botoia (pantaila-argazkian bezala)</summary>

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

<summary>Distira erakusten duen azpibotoi bat eta argia pizten/itzaltzen duen beste bat dituen botoi-graduatzaile bat (pantaila-argazkian bezala)</summary>

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

<summary>Barneko eta kanpoko tenperatura, gaurko eta biharko eguraldiarekin batera, erakusten dituen botoi bat (pantaila-argazkia barne)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Nire zorte txarra, beti dago hodeitsu, baina ikono guztiak eguraldiaren arabera aldatzen dira.

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

## Txartelen diseinuak

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card-ek Home Assistant-en sekzio-ikuspegia guztiz onartzen du, txartelaren diseinua alda dezakezu txartela handiagoa izan dadin, eta baita zure sekzio-ikuspegian txartelak hartu behar dituen zutabe edo errenkada kopurua ere aldatu (aukera hori onartzen duten txarteletan soilik). Diseinu hauek beste ikuspegi mota guztietan ere onartzen dira.

<details>

<summary><b>Eskuragarri dauden txartel-diseinuak</b></summary>

| Diseinua | Azalpena |
| --- | --- |
| `normal` | Diseinu arrunta (ez dago sekzio-ikuspegirako optimizatuta) |
| `large` | Diseinu handiagoa, sekzio-ikuspegian hautatutako errenkadetara doituko dena (sekzio-ikuspegirako optimizatuta) |
| `large-2-rows` | Azpibotoien 2 errenkada dituen diseinu handiagoa, sekzio-ikuspegian hautatutako errenkadetara doituko dena (sekzio-ikuspegirako optimizatuta) |
| `large-sub-buttons-grid` | Diseinu honek azpibotoiak sareta batean erakutsiko ditu, `rows` gutxienez `2`-ra ezarri behar da.

</details>

#### Adibideak

<details>

<summary>Azpibotoien 2 errenkada dituen energia-estatistikak erakusten dituen botoi handi bat (pantaila-argazkia barne)</summary>

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

<summary>12 azpibotoi dituen errenkada anitzeko botoi handi bat</summary>

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

## Baldintzak

Aukera batzuk baldintzek gidatzen dituzte, Home Assistanten [baldintzazko txartelaren](https://www.home-assistant.io/dashboards/conditional/) berdin-berdin idatzita:

- `visibility` [azpibotoi](#azpibotoiak) batean, erakusteko edo ezkutatzeko
- `trigger` [laster-leiho](#laster-leihoa) batean, baldintzak betetzen direnean irekitzeko
- `checkConditionsMet(conditions, hass)` zure [txantiloien](#txantiloiak) barruan, erantzuna zure kodean behar duzunean

Home Assistanten baldintza mota guztiak ebaluatzen dira: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, eta `and`, `or` eta `not` taldeak. Home Assistanten baldintza-eraikitzailearen baldintzek ere funtzionatzen dute, beren domeinuaren izena dutenek, hala nola `sun.is_up`, `light.is_on`, `zone.in_zone` edo `temperature.is_value`, beren `target`, `options`, `behavior` eta `for` ezarpenekin.

<details>

<summary><b>Adibidea</b></summary>

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
> Baldintzak zure nabigatzailean ebaluatzen dira, beraz Home Assistanten zerbitzaria behar duten gutxi horiek ezin dira zehatzak izan: eguzki-irteera eta eguzki-sarrera `sun.sun` entitatetik irakurtzen dira, berriro kalkulatu ordez, eta `for` iraupena azken egoera-aldaketatik neurtzen da, recorderren historiarik gabe.
>
> `view_columns` onartzen da baina beti betetzen da, Bubble Card ez baita inoiz zure ikuspegiaren zutabeak antolatzen dituena. Bubble Cardek ezagutzen ez duen baldintza mota batek behin ematen du bere berri zure nabigatzailearen kontsolan, isilean huts egin ordez, hala tekleatze-akats bat falta den funtzio batetik bereiz dezakezu.

<br>

---

<br>

## Sakatze-, sakatze bikoitz- eta luze sakatze-ekintzak

Home Assistant-en sakatze-ekintza, sakatze bikoitzeko ekintza eta luze sakatzeko ekintza lehenetsiak ere erabil ditzakezu, aukera hori onartzen duten txarteletan. Honek, adibidez, "informazio gehiago" leihoa erakustea baimentzen du botoi baten ikonoa luze sakatzean, edo zerbitzu bat exekutatzea azpibotoi bat sakatzean.

**Oharra: `double_tap_action` bat konfiguratuta dagoenean, ohiko `tap_action`-ek 200ms-ko atzerapena izango du sakatze bikoitza detektatzeko
aukera emateko. Atzerapen hori nahi ez baduzu, ezarri `double_tap_action` `none` gisa sakatze bikoitzaren kudeaketa desgaitzeko.**

### Ekintzen aukerak

<details>

<summary><b>Aukerak (YAML + azalpena)</b></summary>

| Izena | Mota | Onartutako aukerak | Azalpena |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Egin beharreko ekintza |
| `target` | object |  | `call-service` erabiliz soilik funtzionatzen du. [home-assistant sintaxia](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) jarraitzen du |
| `navigation_path` | string | Zure dashboardaren edozein bide | Nabigatu beharreko bidea (adibidez `'#kitchen'` laster-leiho bat irekitzeko) ekintza navigate gisa definituta dagoenean |
| `url_path` | string | Edozein esteka | Klik egitean irekiko den URLa (adibidez `https://www.google.com`) ekintza `url` denean |
| `service` | string | Edozein zerbitzu | Deitu beharreko zerbitzua (adibidez `media_player.media_play_pause`) `action` `call-service` gisa definituta dagoenean |
| `data` edo `service_data` | object | Edozein zerbitzu-datu | Sartu beharreko zerbitzu-datuak (adibidez `entity_id: media_player.kitchen`) `action` `call-service` gisa definituta dagoenean |
| `confirmation` | object | Ikusi [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Erakutsi berrespen laster-leiho bat (ez Bubble Card-ekoa), lehenetsitako `confirmation` objektua gainidazten du |

</details>

#### Adibidea

<details>

<summary>Laster-leiho bat irekitzeko botoi bat</summary>

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

## Estiloa

Txartel guztien CSSa aldatzeko estilo pertsonalizatuak gehitu ditzakezu **card-mod erabili gabe**, lau eratara:

- Editorean, joan aldatu nahi duzun txartelera, eta ondoren nabigatu _Estilo aukerak > Estilo eta JS txantiloi pertsonalizatuak_ atalera, eta gehitu zure estilo pertsonalizatuak (begiratu beheko aholku eta adibideak).
- Editorean (edo [YAMLen](#moduluak)), joan aldatu nahi duzun txartelera, eta ondoren nabigatu _Moduluak_ atalera, eta sortu modulu berri bat (txartel guztientzat erabilgarri egongo da), edo joan **Module Store**era erabilgarri dagoen edozein Modulu instalatzeko (moduluei buruzko xehetasun gehiago [behean](#moduluak) aurki ditzakezu).
- [Gai](https://www.home-assistant.io/integrations/frontend/#defining-themes) fitxategi batean, CSS aldagaiak YAMLen gehituz (aldagai horiek txartel bakoitzaren goiko dokumentazioan daude eskuragarri). Honek aldaketa orokorrak ahalbidetzen ditu.

  <details>
  
  <summary>Adibidea</a></summary>
  
  <br>

  Ez kopiatu `Bubble:` lerroa, hori erabiltzen duzun gaiaren izena da. Aldagaietatik `--` ere kendu behar duzu.

  Aldaketen ondoren gaia freskatzeko, [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) ekintza exekutatu behar duzu.

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
  
- YAMLen `styles: |` gehituz, jarraian zure estilo pertsonalizatuak jarriz (begiratu beheko aholku eta adibideak).

> [!TIP]  
> **Zein estilo-klase alda daitezkeen ulertzeko**, begiratu diezaiokezu biltegi honetako [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) karpetari. Txartel-karpeta bakoitzean, `styles.css` izeneko fitxategi bat aurkituko duzu. Fitxategi horiek aplikatutako estilo guztiak dituzte. Honek CSS aldagaiek baino aukera askoz gehiago ematen ditu, baina txartel bakoitzari banan-banan gehitu behar zaio.
> 
> Komunitatearen [adibide asko](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) ere aurki ditzakezu, edo [Home Assistant foroan](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) batzuk, pixka bat bilatuz.
>
> Bubble gaia Home Assistantentzat (pantaila-argazkietan bezala) [hemen](https://github.com/Clooos/Bubble) aurki dezakezu.
>
> Tutorial-bideo bat laster egongo da nire [YouTube kanalean](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Kontuan izan `!important;` gehitu behar diezuiokezula jada definituta dauden zenbait CSS estilori (ikus beheko adibideak).

> [!TIP]  
> Azpibotoiak izenean oinarritutako klaseen bidez xede daitezke. Adibidez, "My sub-button" izeneko azpibotoi bat `.my-sub-button` erabiliz estiloz alda daiteke. Slider azpibotoiek ere `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etab. erakusten dituzte.
>
> Izenean oinarritutako klasea aldatu egiten da azpibotoi bat berrizendatzean, eta itzuli egiten da izena itzultzen denean. Ezarri `css_class` azpibotoian inoiz mugitzen ez den zure klase bat izateko, izena edozein dela eta hizkuntza edozein dela ere.

#### Adibideak

<details>

<summary>Bubble Card edozein txartelen letra-tamaina aldatzea</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Botoi-pila horizontal bateko botoi bakar baten atzeko planoaren kolorea aldatzea</summary>

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

<summary>Txartel baten atzeko planoaren kolorea aldatzea</summary>

<br>

Honek Bubble Card mota guztietan funtzionatzen du (laster-leihoetan izan ezik):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Honek berdina egiten du botoi-txartel batean soilik (laster-leihoaren goiburuan ere funtzionatzen du): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

`on` dagoenean kolorea aldatzeko, begiratu beheko estilo-txantiloiak.

</details>

<details>

<summary>Botoi-slider baten kolorea aldatzea</summary>

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

<summary>Bereizle baten lerro-kolorea aldatzea</summary>

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

<summary>Ikono baten kolorea aldatzea</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Botoi-pila horizontal baten ikono baterako.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Ikono-edukiontzi baten atzeko planoaren kolorea aldatzea</summary>

<br>

Honek Bubble Card mota guztietan funtzionatzen du (laster-leihoetan izan ezik):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Honek berdina egiten du laster-leihoaren goiburuan: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Azpibotoien tamaina aldatzea (ezin hobea diseinu handirako)</summary>

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

<summary>Bigarren azpibotoiaren atzeko planoaren kolorea aldatzea</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Ikono baten tamaina aldatzea</summary>

<br>

Ikono nagusirako.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Azpibotoien ikonoetarako.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Azpibotoi batean ikonoaren ordez irudi bat erabiltzea</summary>

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

Igo besterik ez duzu irudi hori "pictures" karpeta batean (edo nahi duzun izenean) Home Assistanteko "www" karpetan.

</details>

<details>

<summary>Adibide aurreratua: Azpibotoien errenkada horizontala sortzea (pantaila-argazkia barne)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Hau benetan asko gustatzen zait, nire dashboardeko goiburu gisa erabiltzen dut.

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

## Txantiloiak

**Bubble Card-ek ez du Jinja txantiloirik onartzen**, baina erabiltzaile aurreratuek JS txantiloiak zuzenean beren [estilo pertsonalizatuetan](#estiloa) gehi ditzakete. Honek, adibidez, ikono bat, testuak edo elementu baten koloreak dinamikoki aldatzea ahalbidetzen du, elementu bat baldintzapean erakustea edo ezkutatzea (azpibotoi bat bezala), edo ia edozer, egoera batean, atributu batean eta gehiagotan oinarrituta.

> [!TIP]  
> JS txantiloiei buruzko informazio gehiago [hemen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Nire aholkua da **beti begiratzea zure nabigatzailearen kontsolan**, dena behar bezala funtzionatzen ari dela ziurtatzeko.

> [!IMPORTANT]  
> **CSS propietate bat aldatzen ez duten txantiloi guztiak amaieran jarri behar dira! Ikono bat, testu bat edo edozein elementu aldatzen dutenak bezala.**

#### Aldagai eta funtzio erabilgarriak

<details>

<summary>Aldagaiak</summary>

<br>

Aldagai hauetara sarbidea duzu txartel gehienetan:

- `state`-k zure definitutako `entity`-ren egoera itzuliko du.
  
- `entity`-k adibide honetan `switch.test` bezala definitu duzun zure entitatea itzuliko du.
  
- `icon` honela erabil daiteke, ikonoa aldatzeko: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]`-k zure lehen azpibotoiaren definitutako `entity`-ren egoera itzuliko du, `[0]` lehen azpibotoiaren egoera da, `[1]` bigarrena...
  
- `subButtonIcon[0]` honela erabil daiteke, lehen azpibotoiaren ikonoa aldatzeko: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` lehen azpibotoiaren ikonoa da, `[1]` bigarrena...
  
- `card`-k DOMeko txartel-elementua itzuliko du.
  
- `hass` aldagai aurreratu bat da, kontrol are handiagoa ematen dizuna, adibidez `light.kitchen`-en egoera honela itzul dezakezu: `hass.states['light.kitchen'].state`, edo atributu bat honela: `hass.states[entity].attributes.brightness`.

- `this`-ek zure instalazio eta dashboardari buruzko informazio erabilgarri asko itzuliko du, hau erabili zer egiten ari zaren jakinez gero soilik.

</details>

<details>

<summary>Funtzioak</summary>

<br>

JS funtzio global guztietara sarbidea duzu, baina honakoetara ere bai:

- `getWeatherIcon` eguraldia itzultzen duen egoera batean oinarrituta eguraldi-ikono bat itzultzeko erabil daiteke. Adibidez, hau egin dezakezu, hirugarren azpibotoiaren ikonoa gaurko eguraldi-ikonora aldatzeko: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, `.forecast[1]?.condition` biharkoarentzat da...

  Horretarako txantiloi-sentsore bat sortu beharko duzu. Hona hemen zure `configuration.yaml`-en gehi dezakezuna:
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
- `checkConditionsMet(conditions, hass)` funtzioak `true` itzultzen du [baldintza](#baldintzak) zerrenda bat betetzen denean, adibidez `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` egoera bat itzultzeko erabil daiteke (egoera baten unitatea eskuratzeko ere erabil daiteke, eskuz gehitu beharrik gabe).
- `hass.formatEntityAttributeValue(state, "attribute")` atributu bat itzultzeko erabil daiteke (egoera baten unitatea eskuratzeko ere erabil daiteke, eskuz gehitu beharrik gabe).

</details>

#### Adibideak

Beheko adibide asko aurki ditzakezu, baina txantiloi oso aurreratuak ere aurki ditzakezu nire [Patreon orrian](https://www.patreon.com/c/Clooos), esaterako bat (nire gogokoena) txartelaren ikonoen inguruan jarritako lau baldintzapeko txartel arte iristea ahalbidetzen duena. Bubble Card-en estilo eta txantiloi pertsonalizatuen aukera guztiei buruz ikasteko modu bikaina ere bada!

<details>
<summary>Nire Patreon orriko adibideak</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant-ek bezalako txapak edozein txarteli gehitzea</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Data eta ordua formatuan bereizle batean erakustea, entitaterik erabili gabe</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Azpibotoi baten egoera bi lerrotan erakustea</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Hautaketa azpibotoi baten etiketak eta ikonoak pertsonalizatzea</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Behar denean soilik agertzen den laster-leiho gogorarazle iraunkor bat gehitzea</a>
</p>

<br>

</details>

<details>

<summary><code>off</code> dagoenean gorria eta <code>on</code> dagoenean urdina den botoi baten atzeko planoaren kolorea aldatzea</summary>

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

<summary>Botoi-pila horizontaleko entitate batean oinarritutako botoi baten atzeko planoaren kolorea aldatzea</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Azpibotoi bat baldintzapean erakustea/ezkutatzea</summary>

<br>

Honek lehen azpibotoia erakusten du nire xurgagailua trabatuta dagoenean soilik.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Honek bateria % 10 baino gutxiago dagoenean azpibotoi bat erakusten du. Erabilgarria "Bateria baxua" erakusten duen azpibotoi batekin.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Ikono bat edo azpibotoi-ikono bat baldintzapean aldatzea</summary>

<br>

Honek botoi baten ikonoa aldatzen du xurgagailua trabatuta dagoenean soilik.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Honek lehen azpibotoiaren ikonoa aldatzen du xurgagailua trabatuta dagoenean soilik.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Ikono bat edo azpibotoi-ikono baten kolorea baldintzapean aldatzea</summary>

<br>

Honek botoi baten ikonoaren kolorea aldatzen du bere egoeran oinarrituta.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Honek azpibotoi baten ikonoaren kolorea aldatzen du bere egoeran oinarrituta. `.bubble-sub-button-1` lehen azpibotoia da, ordezkatu `1` beste azpibotoi bat aldatu nahi baduzu.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Haizagailu-ikono bat baldintzapean animatzea</summary>

<br>

Honek botoi baten ikonoa biratzen du haizagailua `on` dagoenean.
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

<summary>Testuak txantiloitzea (izena edo egoera bezala)</summary>

<br>

Honek botoi baten izena/egoera "Une honetan eguzkitsu dago" testuarekin aldatzen du zure eguraldiaren arabera.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
edo azpibotoietan aplikatuta:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Egoera (`.bubble-state`) txantiloitu nahi baduzu, ez aktibatu `show_state: true`, aktibatu `show_attribute: true` soilik, atributurik gabe.

</details>

<details>

<summary>Adibide aurreratua: Azpibotoi baten kolorea aldatzea laster-leiho bat irekita dagoenean</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Adibide aurreratua: Bereizle baten izena zure hizkuntzara itzulitako egoera batean oinarrituta txantiloitzea</summary>

<br>

`hass.formatEntityState(state)` erabil dezakezu egoera bat itzultzeko eta `hass.formatEntityAttributeValue(state, "attribute")` atributu bat itzultzeko.

Honek izena eta ikonoa aldatzen ditu eguraldian oinarrituta, "Nuageux" "Cloudy"ren baliokidea da frantsesez.

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

## Moduluak

Moduluak funtzio ahaltsu bat dira, zure estilo eta txantiloi pertsonalizatuak gorde, berrerabili eta zure Bubble Card guztien artean partekatzeko aukera ematen dutenak. Kode bera hainbat txarteletan kopiatu eta itsatsi beharrean, Modulu bat sortu eta behar duzun tokian aplika dezakezu. Honek zure dashboardaren itxura eta izaera kudeatzea askoz errazago eta eraginkorrago bihurtzen du.

Baina funtzio hau are askoz ahaltsuagoa da, benetako funtzionalitateak zeuk gehitzeko aukera ematen baitizu Bubble Card editorean, Home Assistanteko [formulario](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) aukera lehenetsi guztiak erabiliz!  
Objektu-hautatzailea hobetu da denbora errealeko aldaketak erakusteko eta atributuak behar bezala onartzeko.

Modulu batek Home Assistanten txartel-hautatzaileari ere erantzun diezaioke, barneko [entitate iradokizunen](#entitate-iradokizunak) ondoan: erabili `suggestions` aldez aurretik deskriba ditzakeen txarteletarako, eta `suggestions_code` zure instalaziotik kalkulatu behar direnean, adibidez, aukeratutako entitatea dagoen arearen entitate guztiekin eraikitako laster-leiho bat. Bi gakoak [hemen](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) daude dokumentatuta.

**Module Store**n ere nabiga dezakezu, [komunitateak sortutako moduluak](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) bilatu eta instalatzeko, edo zure sorkuntzak partekatzeko!

> [!TIP]
> Modulu baten kodeak txartel baten `styles` atalean dagoen kodearen antzera funtzionatzen du zehazki. [Txantiloiak](#txantiloiak) atalean dauden aldagai eta funtzio berak eskuragarri daude.

<br>

### Hasierako konfigurazioa

> [!IMPORTANT]
> v3.1.0tik aurrera, Bubble Card Tools da moduluentzat gomendatutako biltegiratze-atzealdea. Metodo zaharra (txantiloi-sentsore bidezkoa) lehendik dauden konfigurazioetarako funtzionatzen jarraitzen du, baina modulu berriak eta Module Store funtzioak Bubble Card Tools bidez onartzen dira hobekien.

Bubble Card Tools integrazioak Modulu Editorea eta Module Store gaitzen ditu, eta moduluak YAML fitxategi indibidual gisa gordetzen ditu. Lehendik dauden moduluak automatikoki migratzen dira.

Instalazio eta konfigurazio urratsak hemen azaltzen dira:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Modulu Editorea

Modulu Editorea edozein txarteleko ezarpenetatik atzitu dezakezu, **Moduluak** atalean. Editoreak bi fitxa nagusi eskaintzen ditu:

#### Nire moduluak fitxa

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Fitxa honek zure modulu instalatu guztiak erakusten ditu eta honakoak egiteko aukera ematen dizu:

- **Aplikatu** lehendik dauden moduluak uneko txartelean
- **Sortu** modulu berri bat hutsetik
- **Editatu** lehendik dauden moduluak aurrebista bizian
- **Ezabatu** behar ez dituzun moduluak
- **Bilatu** eta **ordenatu** moduluak (alfabetikoki, azkenak, aktiboak lehenik)
- **Ezarri egoera globala**, modulu bat txartel guztiei automatikoki aplikatzeko
- **Inportatu/Esportatu** moduluak babeskopietarako edo partekatzeko
- **Idatzi entitate iradokizunak** moduluen editorean, **Aukerakoa: entitate iradokizunak** atalean, zure modulua Home Assistanten txartel-hautatzailean eskain dadin. Arauak zein kalkulatutako iradokizunak idatzi ahala egiaztatzen dira, hango errore batek gordetzea eragozten du, eta aurrebistak aukeratzen duzun edozein entitaterentzat iradokitako txartelak erakusten ditu

#### Module Store fitxa

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Fitxa honek [komunitateak sortutako modulu erabilgarri guztiak](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) erakusten ditu, eta honakoak egiteko aukera ematen dizu:

- **Arakatu** komunitateak sortutako modulu guztiak
- **Bilatu** eta iragazi moduluak izenaren, bateragarritasunaren edo gako-hitzen arabera
- **Instalatu** moduluak klik bakarrarekin
- **Eguneratu** instalatutako moduluak bertsio berriak eskuragarri daudenean

> [!TIP]
> Editorean, bateragarritzat markatuta ez dauden moduluak gaitu ditzakezu, txartel-mota jakin batekin bateragarri gisa markatu ez diren moduluak probatzeko.

<br>

### Moduluak nola erabili

#### Modulu berri bat sortzea

<details>

<summary>Klikatu zabaltzeko</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Joan edozein txarteleren editorera eta zabaldu **Moduluak** atala.
2. Klikatu **Create new module**.
3. Bete moduluaren informazioa.
4. Idatzi zure CSS eta/edo JavaScript txantiloi-kodea **Code** editorean.
5. (Aukerakoa) Sortu konfigurazio-interfaze pertsonalizatu bat **Editor** atalean (goiko pantaila-argazkiko kolore-hautatzailea bezala, dokumentazio osoa [hemen](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) eskuragarri).
6. (Aukerakoa) Idatzi zure **Entitate iradokizunak** zure modulua Home Assistanten txartel-hautatzailean eskain dadin. Panelak idazten duzuna egiaztatzen du tekleatu ahala, eta bere aurrebistak iradokitako txartelak berak erakusten ditu aukeratzen duzun entitaterako.
7. Klikatu **Save**.

Zure modulua orain eskuragarri dago zure edozein txarteletan erabiltzeko!

<br>

</details>

#### Modulu bat txartel bati aplikatzea

<details>

<summary>Klikatu zabaltzeko</summary>

<br>

- **Editorearen bidez:**

  - Joan modulua aplikatu nahi diozun txartelaren editorera.
  - Zabaldu **Moduluak** atala.
  - Klikatu zerrendatik aplikatu nahi duzun modulua.
  - "Apply to" atalean, klikatu "This card". Modulua orain aktibo dago. Modulu bat baino gehiago aplika ditzakezu txartel berean.

- **YAMLen bidez:**

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

#### Modulu bat globalki aplikatzea

<details>

<summary>Klikatu zabaltzeko</summary>

<br>

Modulu bat Bubble Card guztiei automatikoki aplikatzeko ezar dezakezu:

**Hau ez dago eskuragarri editorea duten moduluetarako, konfigurazio zehatz bat behar baitute funtzionatzeko.**

- **Editorearen bidez:**

  - Modulu editorean, aurkitu zure modulua **Nire moduluak** fitxan.
  - Aktibatu moduluaren izenaren ondoan dagoen **All cards** botoia.
  - Modulua orain automatikoki aplikatuko zaie txartel guztiei.
 
- **YAMLen bidez:**

  Zure modulu-YAML konfigurazioan (`bubble-modules.yaml`), gehitu besterik ez duzu `is_global: true`.

<br>

</details>

#### Txartel bakar bat modulu global batetik baztertzea

<details>

<summary>Klikatu zabaltzeko</summary>

<br>

Modulu global bat baduzu baina txartel zehatz batetik baztertu nahi baduzu:

- **Editorearen bidez:**
  
  - Txartelaren **Moduluak** atalean, modulu globalak zerrendatuta ikusiko dituzu.
  - Klikatu modulu global bat, desaktibatu "This card" txartel zehatz honetatik baztertzeko.

- **YAMLen bidez:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Zure modulua Module Storean partekatzea

<details>

<summary>Klikatu zabaltzeko</summary>

<br>

Zure Modulua Module Storean partekatzeko, Modulu Editorean, behean "Export Module" atalean, klikatu "Copy for GitHub" eta itsatsi edukia eztabaida berri batean, [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) kategorian. **Editatu deskribapena** (beharrezkoa bada), **adibidea** (YAML erabiltzaileentzat), eta gogoratu **gutxienez pantaila-argazki bat gehitzea** Module Storerako.

**Zure Modulua eskuragarri dago berehala** (Store bat freskatu ondoren), beraz egiaztatu ondo dena ondo idatzita dagoela eta Modulua espero bezala funtzionatzen ari dela. Modulua partekatu ondoren editatu/eguneratu dezakezu, jakina.

<br>

</details>

#### Bertsioen kudeaketa

<details>

<summary>Klikatu zabaltzeko</summary>

<br>

Module Storeak automatikoki egiaztatzen ditu instalatutako moduluen eguneraketak. Eguneraketak eskuragarri daudenean:

1. Eguneraketa-adierazle bat ikusiko duzu **Module Store** fitxan.
2. Klikatu **Update** eguneraketa erabilgarri duten moduluetan.
3. Berretsi eguneraketa Module Storean.

<br>

</details>

#### Onartutako txartel-motak zehaztea

<details>

<summary>Klikatu zabaltzeko</summary>

<br>

Zenbait modulu ez dira txartel-mota guztiekin bateragarriak izan. Zein txartelekin bateragarri den modulu bat zehatz dezakezu.  
Modulu bat **txartel guztiekin** bateragarri izatea nahi baduzu, kendu besterik ez duzu `supported` eremua (edo erabili **All cards** aukera editorean).

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

### Adibideak

<details>
<summary>Oinarrizko estilo-modulua</summary>

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
<summary>Konfigurazio pertsonalizatua duen modulua</summary>

<br>

Modulu hau [hemen](https://github.com/Clooos/Bubble-Card/discussions/1231) eskuragarri dago.

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

Adibide gehiago Module Storean aurki daitezke, edo [hemen](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizazioa

Bubble Cardek zure hizkuntza hitz egiten du. Bere editorea Home Assistantek onartzen dituen 64 hizkuntzetara itzulita dago, eta Home Assistantek zerbaitentzat jada hitz bat duen tokietan bere formulazioa berrerabiltzen da, hala termino berak irakurtzen dituzu bi interfazeetan.

Editorearen behealdean, bertsio-zenbakiaren ondoan, **Automatikoa** etengailu batek zure Home Assistanten hizkuntzari jarraitzen dio. Itzali eta editore osoa ingelesera itzultzen da, tutorial bat jarraitzeko edo arazo baten berri emateko erabilgarria. Zure aukera nabigatzailean gogoratzen da.

Dokumentazio hau ere itzulita dago, [62 hizkuntzatan](languages.md), britainiar ingelesa izan ezik denetan, hark jatorrizkoa erakusten baitu. Orri horiek denentzat daude irekita, beraz zure Home Assistantekin bat ez datorren esaldi bat klik pare batean zuzen daiteke. Ingelesezko bertsioak edukiaren erreferentzia izaten jarraitzen du.

<br>

---

<br>

## Laguntza

Ez izan zalantzarik gorabehera bat irekitzeko zerbaitek espero bezala funtzionatzen ez badu. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Cardi buruzko galderarik edo iritzirik baduzu? Zure dashboardak edo aurkikuntzak partekatu nahi dituzu? Home Assistant foroan, Bubble Card subredditean edo GitHub Discussions atalean joan zaitezke.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Ekarpenak egitea

Ekarpenak ongi etorriak dira! Akats-konponketak, funtzio berriak, itzulpenak edo dokumentazio hobekuntzak izan, ez izan zalantzarik pull request bat irekitzeko.

Hasi baino lehen, irakurri [garatzailearentzako gida](DEVELOPERS.md), zure ingurune lokala nola konfiguratu, proiektua nola eraiki eta zure aldaketak nola probatu azaltzen duena.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Egin dohaintza

Nire aisialdiaren zati handi bat proiektu hau ahalik eta onena izan dadin egiten dut. Beraz, nire lana estimatzen baduzu, edozein dohaintza modu bikaina izango litzateke zure babesa erakusteko 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Eskerrik asko guztioi zuen babesagatik, denok zarete nire motibaziorik handiena!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
