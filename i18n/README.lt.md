<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Šis puslapis yra automatinis vertimas. Kilus abejonių, pirmenybė teikiama [originaliai dokumentacijai anglų kalba](../README.md). Ar koks nors sakinys skamba netaisyklingai? Bet kokia pagalba laukiama, o [šio puslapio pataisymas](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.lt.md) užtruks vos minutę: GitHub pasirūpins šakute (fork) ir sujungimo prašymu (pull request). Iš anksto dėkojame! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Skaitykite tai kita kalba](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card yra minimalistinė ir individualiai pritaikoma kortelių kolekcija, skirta Home Assistant, su modernaus stiliaus iškylančiaisiais langais ir integruota Module Store parduotuve, kurioje yra daugiau kaip 100 bendruomenės sukurtų modulių.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Turinys

**[`Diegimas`](#diegimas)**  **[`Konfigūracija`](#konfigūracija)**  **[`Esybių pasiūlymai`](#esybių-pasiūlymai)**  **[`Iškylantysis langas`](#iškylantysis-langas)**  **[`Horizontali mygtukų juosta`](#horizontali-mygtukų-juosta)**  **[`Mygtukas`](#mygtukas)**  **[`Medijos leistuvas`](#medijos-leistuvas)**  **[`Uždanga`](#uždanga)**  **[`Pasirinkimas`](#pasirinkimas)**  **[`Klimatas`](#klimatas)**  **[`Kalendorius`](#kalendorius)**  **[`Skirtukas`](#skirtukas)**  **[`Tuščias stulpelis`](#tuščias-stulpelis)**  **[`Tik papildomi mygtukai`](#tik-papildomi-mygtukai)**  **[`Papildomi mygtukai`](#papildomi-mygtukai)**  **[`Kortelės išdėstymai`](#kortelės-išdėstymai)**  **[`Sąlygos`](#sąlygos)**  **[`Veiksmai`](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai)**  **[`Stilius`](#stilius)**  **[`Šablonai`](#šablonai)**  **[`Moduliai`](#moduliai)**  **[`Lokalizacija`](#lokalizacija)**  **[`Pagalba`](#pagalba)**  **[`Prisidėjimas`](#prisidėjimas)**  **[`Paremkite`](#paremkite)**

<br>

## Diegimas

**Žemiausia palaikoma Home Assistant versija:** 2023.9.0

<details>

<summary>Be HACS</summary>

<br>

1. Atsisiųskite `bubble-card.zip` iš [naujausios laidos](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Išskleiskite jį į savo `<config>/www` aplanką, turėtumėte gauti `bubble-card.js` ir šalia jo aplanką `translations` (tame aplanke yra redaktoriaus žodynai, be jo redaktorius lieka angliškas)
3. Savo prietaisų skydelyje spustelėkite piktogramą viršutiniame dešiniajame kampe, tada `Edit dashboard`
4. Vėl spustelėkite tą piktogramą, tada spustelėkite `Manage resources`
5. Spustelėkite `Add resource`
6. Nukopijuokite ir įklijuokite tai: `/local/bubble-card.js?v=1`
7. Spustelėkite `JavaScript Module`, tada `Create`
8. Grįžkite atgal ir atnaujinkite puslapį
9. Dabar galite spustelėti `Add card` apatiniame dešiniajame kampe ir ieškoti `Bubble Card`
10. Po kiekvieno failo atnaujinimo turėsite pakeisti `/local/bubble-card.js?v=1` ir pakeisti versijos numerį didesniu

Jei neveikia, tiesiog pabandykite išvalyti naršyklės talpyklą.

</details>

<details>

<summary>Su HACS (Rekomenduojama)</summary>

<br>

Šis metodas leidžia gauti atnaujinimus tiesiogiai per Home Assistant Community Store

1. Jei HACS dar neįdiegtas, atsisiųskite jį vadovaudamiesi instrukcijomis čia: [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Atlikite pradinę HACS konfigūraciją vadovaudamiesi instrukcijomis čia: [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Šoninėje juostoje eikite į "HACS"
4. Ieškokite "Bubble Card" arba spustelėkite mėlyną mygtuką žemiau
5. Spustelėkite "Download"
6. Grįžkite į savo prietaisų skydelį, spustelėkite piktogramą viršutiniame dešiniajame kampe, tada `Edit dashboard`
7. Dabar galite spustelėti `Add card` apatiniame dešiniajame kampe ir ieškoti `Bubble Card`

Jei neveikia, pabandykite išvalyti naršyklės/programėlės talpyklą (jei reikia, visuose savo įrenginiuose).

#### Vaizdo įrašai

Taip pat galite apsilankyti mano YouTube kanale, kuriame rasite žingsnis po žingsnio vaizdo įrašus.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigūracija

Visos parinktys gali būti sukonfigūruotos Home Assistant redaktoriuje. Tačiau daugiau informacijos ir YAML rasite žemiau esančioje dokumentacijoje.

<details>

<summary><b>Pagrindinės parinktys (YAML + aprašymas)</b></summary>

| Pavadinimas | Tipas | Reikalavimas | Palaikomos parinktys | Aprašymas |
| --- | --- | --- | --- | --- |
| `type` | string | **Privaloma** | `custom:bubble-card` | Kortelės tipas |
| `card_type` | string | **Privaloma** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` arba `sub-buttons` | Bubble Card tipas, žr. žemiau |
| `styles` | object list | Neprivaloma | Bet kokie CSS aprašai | Leidžia individualiai pritaikyti savo Bubble Card CSS, žr. [stilius](#stilius) |

</details>

<details>

<summary><b>Globalūs CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Kintamasis | Laukiama reikšmė | Aprašymas |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Kampų suapvalinimas visiems palaikomiems elementams |
| `--bubble-main-background-color` | `color` | Pagrindinė fono spalva visiems palaikomiems elementams |
| `--bubble-secondary-background-color` | `color` | Antrinė fono spalva visiems palaikomiems elementams |
| `--bubble-accent-color` | `color` | Akcentinė spalva visiems palaikomiems elementams |
| `--bubble-icon-border-radius` | `px` | Piktogramos kampų suapvalinimas visiems palaikomiems elementams |
| `--bubble-icon-background-color` | `color` | Piktogramos fono spalva visiems palaikomiems elementams |
| `--bubble-sub-button-border-radius` | `px` | Kampų suapvalinimas visiems papildomiems mygtukams |
| `--bubble-sub-button-background-color` | `color` | Fono spalva visiems papildomiems mygtukams |
| `--bubble-box-shadow` | žr. [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Šešėlis visiems palaikomiems elementams |
| `--bubble-border` | žr. [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Rėmelis visoms palaikomoms kortelėms |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Peržiūrėkite šį [vaizdo įrašą](https://www.youtube.com/watch?v=0hSQOlBxKKI), kad sužinotumėte apie Bubble Card ir jos galimybes.** Mano YouTube kanalas yra gana naujas ir orientuotas į Home Assistant bei Bubble Card mokomuosius vaizdo įrašus. Nedvejodami prenumeruokite, kad padėtumėte padidinti mano kanalo matomumą. Iš anksto dėkoju!

<br>

---

<br>

## Esybių pasiūlymai

Nuo Home Assistant 2026.6 pasirinkus esybę kortelių parinkiklyje siūloma keletas paruoštų kortelių, o Bubble Card į šį sąrašą įtraukia savo receptus. Pasirinkite šviestuvą ir jums bus pasiūlyta kortelė su ryškumo slankikliu, o kai jūsų šviestuvas tai palaiko, dar ir spalvos temperatūros, spalvos bei sodrumo variantai. Pasirinkite uždangą ir gausite jos padėties slankiklį, pasirinkite medijos leistuvą ir gausite dar vieną variantą su jo šaltinių sąrašu, pasirinkite dulkių siurblį ir gausite jo paleidimo, pristabdymo ir grąžinimo į stotelę mygtukus. Kiekvienas pasiūlymas yra įprasta Bubble Card konfigūracija, rodoma kaip gyva peržiūra, tad galite paimti artimiausią ir toliau ją redaguoti kaip visada.

Kas jums pasiūloma, priklauso nuo to, ką jūsų esybė iš tikrųjų gali: šviestuvas be ryškumo kanalo gauna jungiklį vietoj slankiklio, uždanga, kurios negalima pakreipti, negauna pakreipimo varianto, o klimato esybė gauna savo išankstinius režimus tik tada, kai jų turi. Kai tinka, po Bubble Card pasiūlymų eina klasikiniai įrašai: tam esybės tipui skirta kortelė, paprastas mygtukas ir slankiklis.

> [!TIP]
> Moduliai gali įtraukti į šį sąrašą savo pasiūlymus, žr. [moduliai](#moduliai).

<br>

---

<br>

## Iškylantysis langas

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ši kortelė leidžia sukurti iškylantįjį langą su bet kokiu turiniu. Kiekvienas iškylantysis langas yra **numatytai paslėptas** ir gali būti atidarytas nukreipiant į jo nuorodą (pvz. `'#pop-up-name'`), naudojant bet kokią kortelę, kuri palaiko `navigate` [veiksmą](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai), arba naudojant įtrauktą [horizontalią mygtukų juostą](#horizontali-mygtukų-juosta).

> [!TIP]
> ### Iškylančiojo lango paleidiklis
> Ši funkcija leidžia atidaryti iškylantįjį langą pagal bet kurios esybės būseną, pavyzdžiui, galite atidaryti iškylantįjį langą "Apsauga" su kamera, kai prie jūsų namų yra žmogus. Taip pat galite sukurti perjungiklio pagalbininką (input_boolean) ir automatizavime paleisti jo atidarymą/uždarymą.
> <details>
> <summary>Iškylančiojo lango atidarymas, kai <code>binary_sensor</code> yra <code>on</code></summary>
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
> ### Skirtingi būdai uždaryti iškylantįjį langą
> Yra daug būdų uždaryti iškylantįjį langą. Pavyzdžiui, galite braukti nuo iškylančiojo lango antraštės žemyn, atlikti ilgą braukimą iškylančiojo lango viduje žemyn, kompiuteryje paspausti Escape, pašalinti maišos simbolį (hash) iš URL arba tiesiog paspausti uždarymo mygtuką.
>


### Iškylančiojo lango parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Pavadinimas | Tipas | Reikalavimas | Palaikomos parinktys | Aprašymas |
| --- | --- | --- | --- | --- |
| `hash` | string | **Privaloma** | Bet kokia unikali maiša (pvz. `'#kitchen'`) su ' ' | Taip atidarysite savo iškylantįjį langą |
| `popup_style` | string | Neprivaloma | `bubble` (numatyta) arba `classic` | Nustato iškylančiojo lango vizualinį stilių |
| `popup_mode` | string | Neprivaloma | `default` (numatyta), `fit-content`, `centered` arba `adaptive-dialog` | Nustato iškylančiojo lango išdėstymo režimą |
| `with_bottom_offset` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Naudojama tik su `popup_mode: fit-content` arba `adaptive-dialog`. Pritaiko apatinį poslinkį mobiliajame įrenginyje, naudinga, kai jūsų prietaisų skydelyje yra poraštės kortelė. |
| `full_width_on_mobile` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Naudojama tik su `popup_mode: centered`. Išplečia iškylantįjį langą per visą ekrano plotį mobiliajame įrenginyje, naudinga mažesniuose ekranuose. |
| `performance_mode` | string | Neprivaloma | `default` (numatyta) arba `performance` | Optimizuoja iškylančiojo lango atidarymo animaciją. `performance` šiek tiek atideda turinio atvaizdavimą ir fono suliejimą, taip pat išjungia fono suliejimą (backdrop blur), jei jis nustatytas. |
| `auto_close` | string | Neprivaloma | Laiko limitas milisekundėmis (pvz. `10000` reiškia 10 s) | Automatiškai uždaro iškylantįjį langą po nustatyto laiko |
| `close_on_click` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Automatiškai uždaro iškylantįjį langą po bet kokios sąveikos |
| `close_by_clicking_outside` | boolean | Neprivaloma | `true` (numatyta) arba `false` | Uždaro iškylantįjį langą spustelėjus už jo ribų |
| `width_desktop` | string | Neprivaloma | Bet kokia CSS reikšmė | Plotis kompiuteryje (`100%` numatyta mobiliajame įrenginyje) |
| `margin` | string | Neprivaloma | Bet kokia CSS reikšmė | Naudokite tai **tik** jei jūsų iškylantysis langas nėra gerai centruotas mobiliajame įrenginyje (pvz. `13px`) |
| `margin_top_mobile` | string | Neprivaloma | Bet kokia CSS reikšmė | Viršutinė paraštė mobiliajame įrenginyje (pvz. `-56px`, jei jūsų antraštė paslėpta) |
| `margin_top_desktop` | string | Neprivaloma | Bet kokia CSS reikšmė | Viršutinė paraštė kompiuteryje (pvz. `50vh` per pusę sumažintam iškylančiajam langui arba `calc(100vh - 400px)` fiksuotam `400px` aukščiui) |
| `bg_color` | string | Neprivaloma | Bet kokia hex, rgb arba rgba reikšmė | Jūsų iškylančiojo lango fono spalva (pvz. `#ffffff` baltam fonui) |
| `bg_opacity` | string | Neprivaloma | Bet kokia reikšmė nuo `0` iki `100` | Jūsų iškylančiojo lango fono skaidrumas (pvz. `100` be permatomumo) |
| `bg_blur` | string | Neprivaloma | Bet kokia reikšmė nuo `0` iki `100` | Jūsų iškylančiojo lango fono suliejimo efektas, **tai veikia tik jei `bg_opacity` nėra nustatyta į `100`** (pvz. `0` be suliejimo)|
| `shadow_opacity` | string | Neprivaloma | Bet kokia reikšmė nuo `0` iki `100` | Jūsų iškylančiojo lango šešėlio skaidrumas (pvz. `0`, kad jį paslėptumėte) |
| `hide_backdrop` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Nustatykite tai į true pirmajame savo pagrindinio prietaisų skydelio iškylančiajame lange, kad išjungtumėte foną visuose iškylančiuosiuose languose. |
| `background_update` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Atnaujina iškylančiojo lango turinį fone (nerekomenduojama) |
| `trigger` | object arba list | Neprivaloma | Žr. [sąlygas](#sąlygos) | Atidaro šį iškylantįjį langą, kai sąlygos įvykdytos |
| `trigger_entity` | string | Neprivaloma | Bet kokia esybė | Atidaro šį iškylantįjį langą pagal bet kurios esybės būseną, tai paprastoji `trigger` forma |
| `trigger_state` | string | Neprivaloma (**Privaloma**, jei nustatyta `trigger_entity`) | Bet kokia esybės būsena | Esybės būsena, kuriai esant atidaromas iškylantysis langas |
| `trigger_close` | boolean | Neprivaloma | `true` (numatyta) arba `false` | Uždaro iškylantįjį langą, kai sąlygos nebeįvykdytos. O jei naudojate senesnę porą `trigger_entity` ir `trigger_state`, numatytoji reikšmė yra `false` |
| `open_action` | object | Neprivaloma | Žr. [veiksmai](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Paleidžia veiksmą, kai iškylantysis langas atidaromas |
| `close_action` | object | Neprivaloma | Žr. [veiksmai](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Paleidžia veiksmą, kai iškylantysis langas uždaromas |
| `show_header` | boolean | Neprivaloma | `true` (numatyta) arba `false` | Rodo/slepia visą iškylančiojo lango antraštę |
| `show_previous_button` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Rodo ankstesnio žingsnio mygtuką šalia uždarymo mygtuko ir grįžta prie ankstesnio iškylančiojo lango, kai tai įmanoma |
| `show_close_button` | boolean | Neprivaloma | `true` (numatyta) arba `false` | Rodo arba slepia uždarymo mygtuką, paliekant likusią antraštę matomą |
| `buttons_position` | string | Neprivaloma | `right` (numatyta) arba `left` | Uždarymo ir ankstesnio žingsnio mygtukų padėtis antraštėje |
| `cards` | list | Neprivaloma | Bet kokia Bubble Card, Home Assistant kortelė arba individuali kortelė | Nustato jūsų iškylančiojo lango turinį. Žr. iškylančiojo lango pavyzdį žemiau. |
| Taip pat turite prieigą prie [visų mygtuko nustatymų](#mygtukas) iškylančiojo lango antraštei. | | Neprivaloma | | Jei nenustatyta, antraštė nebus rodoma |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Kintamasis | Laukiama reikšmė | Aprašymas |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Kampų suapvalinimas iškylančiajam langui |
| `--bubble-pop-up-main-background-color` | `color` | Pagrindinė fono spalva palaikomiems iškylančiojo lango elementams |
| `--bubble-pop-up-background-color` | `color` | Iškylančiojo lango fono spalva |
| `--bubble-backdrop-background-color` | `color` | Fono spalva užsklandai |
| Taip pat turite prieigą prie [visų mygtuko CSS kintamųjų](#mygtuko-parinktys) iškylančiojo lango antraštei. | | |

</details>


### Atskirai stovinčio iškylančiojo lango formatas (v3.2.0+)

Nuo v3.2.0 iškylantieji langai naudoja naują atskirai stovintį formatą, kuriame turinio kortelės apibrėžiamos tiesiogiai iškylančiajame lange naudojant `cards` parinktį. Tai užtikrina geresnį našumą ir naują, sekcijomis grįstą redagavimo tempimo ir numetimo (drag-and-drop) patirtį.


#### Pavyzdžiai

<details>

<summary>Iškylantysis langas (atskirai stovintis formatas)</summary>

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

<summary>Mygtukas iškylančiajam langui atidaryti</summary>

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

## Horizontali mygtukų juosta

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ši kortelė yra puikus palydovas iškylančiojo lango kortelei, leidžiantis atidaryti atitinkamus iškylančiuosius langus. Ji taip pat leidžia atidaryti bet kurį jūsų prietaisų skydelio puslapį. Be to, galite pridėti judesio/užimtumo jutiklius, kad mygtukų tvarka prisitaikytų pagal kambarį, į kurį ką tik įėjote. Ši kortelė yra slenkama, lieka matoma ir veikia kaip poraštė.

> [!IMPORTANT]  
> Ši kortelė turi būti paskutinė jūsų rodinyje (po visų kortelių ir iškylančiųjų langų). Ji negali būti jokiame stack viduje.

### Horizontalios mygtukų juostos parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Pavadinimas | Tipas | Reikalavimas | Palaikomos parinktys | Aprašymas |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Privaloma** | Iškylančiojo lango maiša (pvz. `'#kitchen'`) su ' ' arba bet kokia nuoroda | Nuoroda, kurią atidaryti |
| `1_name` | string | Neprivaloma | Bet kokia eilutė | Jūsų mygtuko pavadinimas |
| `1_icon` | string | Neprivaloma | Bet kokia `mdi:` piktograma | Jūsų mygtuko piktograma |
| `1_entity` | string | Neprivaloma | Bet kokia lemputė arba lempučių grupė | Rodo tos lemputės spalvą fone |
| `1_pir_sensor` | string | Neprivaloma | Bet koks dvejetainis jutiklis | Bent vienas PIR jutiklis ar daugiau `auto_order` funkcijai, iš tikrųjų tai taip pat veikia su bet kokiu esybės tipu, pavyzdžiui, galite pridėti lempučių grupes ir tvarka keisis pagal paskutinį pakeistą būseną. |
| `auto_order` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Keičia mygtukų tvarką pagal `_pir_sensor` paskutinio pakeitimo laiką, **tai turi būti `false`, jei jūsų kode nėra jokio `_pir_sensor`** |
| `margin` | string | Neprivaloma | Bet kokia CSS reikšmė | Naudokite tai **tik** jei jūsų `horizontal-buttons-stack` nėra gerai centruota mobiliajame įrenginyje (pvz. `13px`) |
| `width_desktop` | string | Neprivaloma | Bet kokia CSS reikšmė | Plotis kompiuteryje (`100%` numatyta mobiliajame įrenginyje) |
| `is_sidebar_hidden` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Pataiso horizontalios mygtukų juostos padėtį, jei šoninė juosta paslėpta kompiuteryje (tik jei jūs patys atlikote pakeitimą, kad ją paslėptumėte) |
| `rise_animation` | boolean | Neprivaloma | `true` (numatyta) arba `false` | Nustatykite tai į `false`, kad išjungtumėte animaciją, kuri suveikia įkėlus puslapį |
| `highlight_current_view` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Paryškina dabartinę maišą / rodinį sklandžia animacija |
| `hide_gradient` | boolean | Neprivaloma | `true` arba `false` (numatyta) | Nustatykite tai į `false`, kad paslėptumėte gradientą |

> [!IMPORTANT]  
> Kintamieji, prasidedantys skaičiumi, apibrėžia jūsų mygtukus, tiesiog pakeiskite šį skaičių, kad pridėtumėte daugiau mygtukų (žr. pavyzdį žemiau).

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Kintamasis | Laukiama reikšmė | Aprašymas |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Kampų suapvalinimas horizontalios mygtukų juostos mygtukams |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Fono spalva horizontalios mygtukų juostos mygtukams |

</details>


#### Pavyzdys

<details>

<summary>Horizontali mygtukų juosta, kuri persitvarko pagal užimtumo jutiklius</summary>

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

## Mygtukas

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ši kortelė yra labai universali. Ją galima naudoti kaip **jungiklį**, **slankiklį**, **būseną** arba **pavadinimo/teksto** mygtuką.

> [!TIP]
> ### Kuo skiriasi visi mygtukų tipai?
>
> - **Jungiklio mygtukas:** tai numatytasis mygtuko tipas. Pagal nutylėjimą jis perjungia entitetą, o jo fono spalva keičiasi priklausomai nuo entiteto būsenos arba šviestuvo spalvos. Veiksmą galite pakeisti skiltyje **Tap action on card**.
>
> - **Slankiklio mygtukas:** šis mygtuko tipas leidžia valdyti entitetus su reguliuojamais diapazonais. Jis puikiai tinka šviestuvų ryškumui reguliuoti, o jo užpildymo spalva prisitaikys prie šviestuvo spalvos. Jį taip pat galima naudoti reikšmėms rodyti, pavyzdžiui, baterijos lygiui.
>   Slankikliams palaikomi entitetai:
>   - Šviestuvas (ryškumas)
>   - Medijos leistuvas (garsumas)
>   - Uždanga (padėtis)
>   - Ventiliatorius (procentas)
>   - Klimatas (temperatūra)
>   - Skaičiaus įvestis ir skaičius (reikšmė)
>   - Baterijos jutiklis (procentas, tik skaitymui)
>
>   Taip pat galite naudoti bet kurį entitetą su skaitine būsena, išjungę entiteto filtrą skiltyje **Slider settings**, tuomet nustatydami `min` ir `max` reikšmes. Ši parinktis yra tik skaitymui.
>
> - **Būsenos mygtukas:** puikiai tinka informacijai iš jutiklio ar bet kurio entiteto rodyti. Paspaudus jį, bus rodomas entiteto "More info" langas. Jo fono spalva nesikeičia.
>
> - **Pavadinimo/teksto mygtukas:** vienintelis mygtuko tipas, kuriam nereikia entiteto. Jis leidžia rodyti trumpą tekstą, pavadinimą ar antraštę. Jam taip pat galima priskirti veiksmus. Jo fono spalva nesikeičia.

### Mygtuko parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entitetas, kurį valdyti |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Jūsų mygtuko elgsena |
| `name` | string | Optional | Any string | Jūsų mygtuko pavadinimas, jei nenustatytas, bus rodomas entiteto pavadinimas |
| `icon` | string | Optional | Any `mdi:` icon | Jūsų mygtuko ikona, jei nenustatyta, bus rodoma entiteto ikona arba `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Suteikti pirmenybę ikonai, o ne `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Tik šviestuvams.** Naudoti temos akcentinę spalvą vietoj šviestuvo spalvos.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rodyti arba slėpti jūsų `entity` būseną |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti pavadinimą |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti ikoną |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` pasikeitimo laiką |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` atnaujinimo laiką |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rodyti jūsų `entity` atributą po jo `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rodytinas atributas (pvz., `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leisti tekstui slinkti, kai turinys viršija konteinerio dydį |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Leidžia pakeisti numatytuosius veiksmus paspaudus mygtuką. |
| `tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą paspaudus ikoną, jei nenustatyta, bus naudojama `more-info` |
| `double_tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą dvigubai bakstelėjus ikoną, jei nenustatyta, bus naudojama `none` |
| `hold_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą palaikius ikoną, jei nenustatyta, bus naudojama `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Optional | Any number | Eilučių skaičius (aukštis) (pvz., `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildomi-mygtukai) | Pridėti pritaikytus mygtukus, pritvirtintus prie dešinės |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Pagrindinė fono spalva palaikomiems elementams mygtuke |
| `--bubble-button-border-radius` | `px` | Mygtuko kraštų suapvalinimas |
| `--bubble-button-icon-border-radius` | `px` | Mygtuko ikonos konteinerio kraštų suapvalinimas |
| `--bubble-button-icon-background-color` | `color` | Mygtuko ikonos konteinerio fono spalva |
| `--bubble-light-white-color` | `color` | Pakeičia numatytąją šviestuvo mygtukų/slankiklių baltą spalvą |
| `--bubble-light-color` | `color` | Pakeičia šviestuvo mygtukų/slankiklių spalvą (net RGB šviestuvams) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Mygtuko šešėlis |

</details>

Šios parinktys prieinamos tik kai `button_type` yra nustatytas kaip `slider`.

<details>

<summary><b>Slankiklio parinktys (YAML + aprašymai)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Minimali slankiklio reikšmė. Skirta pritaikytiems slankikliams.                                                    |
| `max_value`             | number  | Optional                        | Maksimali slankiklio reikšmė. Skirta pritaikytiems slankikliams.                                                    |
| `step`                  | number  | Optional                        | Slankiklio žingsnio reikšmė.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Įjungti ankstesnę slankiklio elgseną, kai slankiklis aktyvinamas bakstelėjus, o ne laikant.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Atnaujinti reikšmę santykinai nuo pradinės reikšmės, o ne nuo pradinio lietimo taško.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Padaryti slankiklį tik skaitymui. Automatiškai įjungiama kai kuriems entitetams, pvz., jutikliams.                                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Entiteto būsena atnaujinama slenkant. **Ši funkcija nerekomenduojama visiems entitetams.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` arba `bottom` | Pakeisti slankiklio užpildymo kryptį. Nenurodžius, iš kairės į dešinę, o [iš dešinės į kairę rašomose kalbose](#lokalizacija) veidrodiškai |
| `slider_value_position` | string | Optional | `right`, `left`, `center` arba `hidden` | Reikšmės rodymo padėtis. Nenurodžius, dešinėje, o [iš dešinės į kairę rašomose kalbose](#lokalizacija) kairėje |
| `invert_slider_value` | boolean | Optional (`false` default) | Apversti slankiklio kryptį (100% užpildymas atitinka minimumą). Neprieinama spalvų slankikliams. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Tik šviestuvams.** Pasirinkti slankiklio režimą |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Tik uždangoms.** Pasirinkti slankiklio režimą (padėtis arba pasukimas) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Tik šviestuvams (atspalvio režimas).** Priverstinai taikyti sodrumą reguliuojant atspalvį |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Tik šviestuvams (atspalvio režimas).** Priverstinė sodrumo reikšmė (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Tik šviestuvams (ryškumo režimas).** Naudoti temos akcentinę spalvą vietoj šviestuvo spalvos |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Tik šviestuvams.** Leidžia slankikliui pasiekti 0 %, o tai išjungia šviestuvą. Neprieinama su `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Tik šviestuvams.** Įjungia sklandžius ryškumo perėjimus palaikomiems šviestuvams.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Tik šviestuvams.** Perėjimo laikas milisekundėmis. Reikalauja `light_transition: true`.            |

</details>

#### Pavyzdžiai

<details>

<summary>Slankiklio mygtukas, galintis valdyti šviestuvo ryškumą</summary>

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

<summary>Mygtukas su daugiau parinkčių</summary>

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

## Medijos leistuvas

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ši kortelė leidžia valdyti medijos leistuvo entitetą.

### Medijos leistuvo parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Valdytinas medijos leistuvas |
| `name` | string | Optional | Any string | Jūsų medijos leistuvo pavadinimas, jei nenustatytas, bus rodomas entiteto pavadinimas |
| `icon` | string | Optional | Any `mdi:` icon | Jūsų medijos leistuvo ikona, jei nenustatyta, bus rodoma entiteto ikona arba `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Suteikti pirmenybę ikonai, o ne `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rodyti arba slėpti jūsų `entity` būseną |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti pavadinimą |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti ikoną |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` pasikeitimo laiką |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` atnaujinimo laiką |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rodyti jūsų `entity` atributą po jo `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rodytinas atributas (pvz., `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leisti tekstui slinkti, kai turinys viršija konteinerio dydį |
| `min_volume` | number | Optional | Any number | Minimali garsumo slankiklio reikšmė. |
| `max_volume` | number | Optional | Any number | Maksimali garsumo slankiklio reikšmė. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Naudoti suliejamą medijos viršelį kaip kortelės foną. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Leidžia pakeisti numatytuosius veiksmus paspaudus mygtuką. |
| `tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą paspaudus ikoną, jei nenustatyta, bus naudojama `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą dvigubai bakstelėjus ikoną, jei nenustatyta, bus naudojama `none`. |
| `hold_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą palaikius ikoną, jei nenustatyta, bus naudojama `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Perkelti viršelio veiksmų mygtukus į apačią (fiksuotai) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Padaryti apatinius veiksmų mygtukus viso pločio (numatyta: `true`, kai padėtis yra `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Apatinių veiksmų mygtukų lygiavimas, kai jie nėra viso pločio |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Optional | Any number | Eilučių skaičius (aukštis) (pvz., `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildomi-mygtukai) | Pridėti pritaikytus mygtukus, pritvirtintus prie dešinės |
| `hide` | object | Optional | See below | Slėpti mygtukus kortelėje |

#### Slėpimo parinktys

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Slėpti paleidimo/pauzės mygtuką |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Slėpti garsumo mygtuką |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Slėpti ankstesnio kūrinio mygtuką |
| `next_button` | boolean | Optional | `true` or `false` (default) | Slėpti kito kūrinio mygtuką |
| `power_button` | boolean | Optional | `true` or `false` (default) | Slėpti maitinimo mygtuką |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Pagrindinė fono spalva medijos leistuvui |
| `--bubble-media-player-border-radius` | `px` | Medijos leistuvo kraštų suapvalinimas |
| `--bubble-media-player-buttons-border-radius` | `px` | Medijos leistuvo mygtukų kraštų suapvalinimas |
| `--bubble-media-player-slider-background-color` | `color` | Garsumo slankiklio fono spalva |
| `--bubble-media-player-icon-border-radius` | `px` | Medijos leistuvo ikonos konteinerio kraštų suapvalinimas |
| `--bubble-media-player-icon-background-color` | `color` | Medijos leistuvo ikonos konteinerio fono spalva |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Medijos leistuvo šešėlis |

</details>


#### Pavyzdžiai

<details>

<summary>Medijos leistuvas su visomis parinktimis</summary>

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

## Uždanga

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ši kortelė leidžia valdyti jūsų `cover` entitetus.

### Uždangos parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Uždanga, kurią valdyti |
| `name` | string | Optional | Any string | Jūsų uždangos pavadinimas, jei nenustatytas, bus rodomas entiteto pavadinimas |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Suteikti pirmenybę ikonai, o ne `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rodyti arba slėpti jūsų `entity` būseną |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti pavadinimą |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti ikoną |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` pasikeitimo laiką |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` atnaujinimo laiką |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rodyti jūsų `entity` atributą po jo `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rodytinas atributas (pvz., `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leisti tekstui slinkti, kai turinys viršija konteinerio dydį |
| `icon_open` | string | Optional | Any `mdi:` icon | Jūsų atidarytos uždangos ikona, jei nenustatyta, bus rodoma numatytoji atidarytos uždangos ikona |
| `icon_close` | string | Optional | Any `mdi:` icon | Jūsų uždarytos uždangos ikona, jei nenustatyta, bus rodoma numatytoji uždarytos uždangos ikona |
| `icon_up` | string | Optional | Any `mdi:` icon | Jūsų atidarymo mygtuko ikona, jei nenustatyta, bus rodoma numatytoji atidarytos uždangos ikona |
| `icon_down` | string | Optional | Any `mdi:` icon | Jūsų uždarymo mygtuko ikona, jei nenustatyta, bus rodoma numatytoji uždarytos uždangos ikona |
| `open_service` | string | Optional | Any service or script | Paslauga uždangai atidaryti, numatytoji `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Paslauga uždangai sustabdyti, numatytoji `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Paslauga uždangai uždaryti, numatytoji `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Pasukimo valdymo mygtukų padėtis (rodoma tik jei uždanga palaiko pasukimą) |
| `open_tilt_service` | string | Optional | Any service or script | Paslauga pasukimui atidaryti, numatytoji `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Paslauga pasukimui uždaryti, numatytoji `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Leidžia pakeisti numatytuosius veiksmus paspaudus mygtuką. |
| `tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą paspaudus ikoną, jei nenustatyta, bus naudojama `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą dvigubai bakstelėjus ikoną, jei nenustatyta, bus naudojama `none`. |
| `hold_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą palaikius ikoną, jei nenustatyta, bus naudojama `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Perkelti medijos valdiklius į apačią (fiksuotai) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Padaryti apatinius valdiklius viso pločio (numatyta: `true`, kai padėtis yra `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Apatinių valdiklių lygiavimas, kai jie nėra viso pločio |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Optional | Any number | Eilučių skaičius (aukštis) (pvz., `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildomi-mygtukai) | Pridėti pritaikytus mygtukus, pritvirtintus prie dešinės |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Pagrindinė fono spalva palaikomiems elementams uždangos kortelėje |
| `--bubble-cover-border-radius` | `px` | Uždangos kortelės kraštų suapvalinimas |
| `--bubble-cover-icon-border-radius` | `px` | Uždangos kortelės ikonos konteinerio kraštų suapvalinimas |
| `--bubble-cover-icon-background-color` | `color` | Uždangos kortelės ikonos konteinerio fono spalva |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Uždangos kortelės šešėlis |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Mygtukų šešėlis uždangos kortelėje |

</details>


#### Pavyzdys

<details>

<summary>Kortelė, galinti valdyti roletę</summary>

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

## Pasirinkimas

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ši kortelė leidžia pridėti išskleidžiamąjį meniu jūsų `input_select` / `select` entitetams. Ši kortelė taip pat palaiko papildomus mygtukus ir visas įprastas Bubble Card funkcijas.

> [!TIP]
> Jei norite, galite turėti ir pasirinkimo papildomus mygtukus, ši funkcija prieinama visose kortelėse, kurios palaiko papildomus mygtukus.

### Pasirinkimo parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entitetas, kurį valdyti |
| `name` | string | Optional | Any string | Jūsų pasirinkimo pavadinimas, jei nenustatytas, bus rodomas entiteto pavadinimas |
| `icon` | string | Optional | Any `mdi:` icon | Jūsų pasirinkimo ikona, jei nenustatyta, bus rodoma entiteto ikona arba `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Suteikti pirmenybę ikonai, o ne `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Rodyti arba slėpti jūsų `entity` būseną |
| `show_name` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti pavadinimą |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Rodyti arba slėpti ikoną |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` pasikeitimo laiką |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Rodyti paskutinio jūsų `entity` atnaujinimo laiką |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Rodyti jūsų `entity` atributą po jo `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Rodytinas atributas (pvz., `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Leisti tekstui slinkti, kai turinys viršija konteinerio dydį |
| `tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą paspaudus ikoną, jei nenustatyta, bus naudojama `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą dvigubai bakstelėjus ikoną, jei nenustatyta, bus naudojama `none`. |
| `hold_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą palaikius ikoną, jei nenustatyta, bus naudojama `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Optional | Any number | Eilučių skaičius (aukštis) (pvz., `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildomi-mygtukai) | Pridėti pritaikytus mygtukus, pritvirtintus prie dešinės |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Pagrindinė fono spalva palaikomiems elementams pasirinkimo kortelėje |
| `--bubble-select-background-color` | `color` | Pasirinkimo kortelės fono spalva |
| `--bubble-select-list-border-radius` | `px` | Kortelėje esančio išskleidžiamojo meniu kraštų suapvalinimas |
| `--bubble-select-list-item-accent-color` | `color` | Pasirinkto elemento akcentinė spalva |
| `--bubble-select-list-background-color` | `color` | Kortelėje esančio išskleidžiamojo meniu fono spalva |
| `--bubble-select-list-width` | `px` | Kortelėje esančio išskleidžiamojo meniu plotis |
| `--bubble-select-arrow-background-color` | `color` | Išskleidžiamosios rodyklės fono spalva |
| `--bubble-select-button-border-radius` | `px` | Pasirinkimo mygtuko kraštų suapvalinimas |
| `--bubble-select-border-radius` | `px` | Pasirinkimo kortelės kraštų suapvalinimas |
| `--bubble-select-icon-border-radius` | `px` | Pasirinkimo kortelės ikonos konteinerio kraštų suapvalinimas |
| `--bubble-select-icon-background-color` | `color` | Pasirinkimo kortelės ikonos konteinerio fono spalva |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Pasirinkimo kortelės šešėlis |

</details>


#### Pavyzdžiai

<details>

<summary>Pasirinkimo kortelė su scenų sąrašu</summary>

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

## Klimatas

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ši kortelė leidžia valdyti jūsų `climate` entitetus.

> [!TIP]
> Režimo pasirinkimo meniu yra [papildomas mygtukas](#papildomi-mygtukai), kuris pridedamas automatiškai kuriant kortelę. Vėliau galite jį pakeisti arba pašalinti savo nuožiūra.

### Klimato parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Valdytinas entitetas (pvz., `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Pritaikytas kortelės pavadinimas. Jei nenustatytas, bus rodomas entiteto pavadinimas.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Pritaikyta kortelės ikona. Jei nenustatyta, bus naudojama entiteto ikona arba `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Suteikia pirmenybę ikonai, o ne `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Rodyti arba slėpti dabartinę `entity` būseną.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Rodyti arba slėpti entiteto pavadinimą.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Rodyti arba slėpti ikoną.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Paslepia žemos tikslinės temperatūros valdiklį, jei jį palaiko `entity`.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Paslepia aukštos tikslinės temperatūros valdiklį, jei jį palaiko `entity`.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Taiko pastovią fono spalvą, kai klimato entitetas yra įjungtas.                                                              |
| `step` | number | Optional | Any number | Temperatūros žingsnis. |
| `min_temp` | number | Optional | Any number | Minimali temperatūra. |
| `max_temp` | number | Optional | Any number | Maksimali temperatūra. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Leidžia pakeisti numatytuosius veiksmus paspaudus mygtuką. |
| `tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą paspaudus ikoną, jei nenustatyta, bus naudojama `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą dvigubai bakstelėjus ikoną, jei nenustatyta, bus naudojama `none`. |
| `hold_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą palaikius ikoną, jei nenustatyta, bus naudojama `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Perkelti klimato veiksmų mygtukus į apačią (fiksuotai) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Padaryti apatinius veiksmų mygtukus viso pločio (numatyta: `true`, kai padėtis yra `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Apatinių veiksmų mygtukų lygiavimas, kai jie nėra viso pločio |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Optional | Any number | Eilučių skaičius (aukštis) (pvz., `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#papildomi-mygtukai)                | Prideda pritaikytus mygtukus, pritvirtintus prie dešinės. Naudinga klimato režimo pasirinkimo meniu.                                  |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Pagrindinė fono spalva palaikomiems elementams klimato kortelėje |
| `--bubble-climate-border-radius` | `px` | Klimato kortelės elementų kraštų suapvalinimas |
| `--bubble-climate-button-background-color` | `color` | Klimato kortelės mygtukų fono spalva |
| `--bubble-climate-icon-border-radius` | `px` | Klimato kortelės ikonos konteinerio kraštų suapvalinimas |
| `--bubble-state-climate-fan-only-color` | `color` | Perdangos spalva "tik ventiliatorius" būsenai |
| `--bubble-state-climate-dry-color` | `color` | Perdangos spalva džiovinimo būsenai |
| `--bubble-state-climate-cool-color` | `color` | Perdangos spalva vėsinimo būsenai |
| `--bubble-state-climate-heat-color` | `color` | Perdangos spalva šildymo būsenai |
| `--bubble-state-climate-auto-color` | `color` | Perdangos spalva automatinei būsenai |
| `--bubble-state-climate-heat-cool-color` | `color` | Perdangos spalva šildymo-vėsinimo būsenai |
| `--bubble-climate-accent-color` | `color` | Klimato kortelės akcentinė spalva |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Klimato konteinerio šešėlis. |

</details>


#### Pavyzdžiai

<details>

<summary>Klimato kortelė su HVAC režimų išskleidžiamuoju meniu</summary>

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

## Kalendorius

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ši kortelė leidžia rodyti jūsų kalendoriaus entitetus. Jos turinys slenkamas, todėl galite lengvai naršyti būsimus įvykius.

### Kalendoriaus parinktys

<details>

<summary><b>Parinktys (YAML + aprašymai)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Kalendoriaus dienų skaičius, už kurį gauti įvykius, nuo dabar iki N-osios dienos pabaigos (numatyta: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Valdytinas entitetas (pvz., `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Rodytinas kalendoriaus entitetas                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Pritaikyta kalendoriaus žymos spalva. Jei nenustatyta, spalva bus parinkta automatiškai |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Kalendoriaus dienų skaičius, už kurį gauti įvykius, nuo dabar iki N-osios dienos pabaigos (numatyta: 7) |
| `limit`             | number  | Optional     | A number                                        | Kortelėje rodomų įvykių kiekis                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Rodyti arba slėpti įvykių pabaigos laiką                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Rodyti arba slėpti įvykio eigos juostą                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Rodyti arba slėpti šiuo metu vykstančius įvykius. Kelių dienų įvykiai vertinami po vieną dieną, tad paslepiama tik vykstanti diena, o būsimos dienos lieka matomos |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Leisti tekstui slinkti, kai turinys viršija konteinerio dydį |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Leidžia pridėti veiksmus paspaudus įvykį. |
| `tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą paspaudus dieną, jei nenustatyta, bus naudojama `none`. |
| `double_tap_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą dvigubai bakstelėjus dieną, jei nenustatyta, bus naudojama `none`. |
| `hold_action` | object | Optional | See [actions](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Nustato veiksmo tipą palaikius dieną, jei nenustatyta, bus naudojama `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Optional | Any number | Eilučių skaičius (aukštis) (pvz., `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#papildomi-mygtukai) | Pridėti pritaikytus mygtukus, pritvirtintus prie dešinės |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Pagrindinė fono spalva palaikomiems elementams kalendoriaus kortelėje  |
| `--bubble-calendar-border-radius`         | `px`           | Kalendoriaus kortelės elementų kraštų suapvalinimas |
| `--bubble-calendar-height`                | `px`           | Kalendoriaus kortelės aukštis                                        |

</details>

#### Pavyzdžiai

<details>

<summary>Kalendoriaus kortelė su ribotu įvykių kiekiu</summary>

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

<summary>Kalendoriaus kortelė su pabaigos laiku ir eigos juosta</summary>

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


## Skirtukas

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ši kortelė yra paprastas skirtukas jūsų iškylančiam langui suskirstyti į kategorijas / skyrius. Pvz., Šviestuvai, Įrenginiai, Uždangos, Nustatymai, Automatizacijos...

### Skirtuko parinktys

<details>

<summary><b>Parinktys (YAML ir aprašymai)</b></summary>

| Pavadinimas | Tipas | Reikalavimas | Palaikomos parinktys | Aprašymas |
| --- | --- | --- | --- | --- |
| `name` | string | Neprivaloma, bet rekomenduojama | Bet kokia eilutė | Jūsų skirtuko pavadinimas |
| `icon` | string | Neprivaloma, bet rekomenduojama | Bet kokia `mdi:` piktograma | Jūsų skirtuko piktograma |
| `card_layout` | string | Neprivaloma | `normal` (numatytoji, jei ne skyriaus rodinyje), `large` (numatytoji, jei skyriaus rodinyje), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Neprivaloma | Bet koks skaičius | Eilučių skaičius (aukštis) (pvz., `2`) |
| `sub_button` | object | Neprivaloma | Žr. [papildomus mygtukus](#papildomi-mygtukai) | Prideda pritaikytus mygtukus, pritvirtintus dešinėje |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Kintamasis | Laukiama reikšmė | Aprašymas |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Skirtuko linijos fono spalva |

</details>

#### Pavyzdys

<details>

<summary>Skirtukas / atskirtukas skyriui "Uždangos"</summary>

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

## Tuščias stulpelis

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ši kortelė skirta užpildyti tuščią stulpelį. Tai naudinga, jei jūsų iškylančiame lange turite `horizontal-stack` tik su viena kortele. Pažvelkite į apatinį dešinį šio ekrano nuotraukos kampą, kad (ne)pamatytumėte jos.

### Tuščio stulpelio parinktys

Ši kortelė neturi parinkčių ir nepalaiko [stiliaus](#stilius), tačiau ji palaiko HA skyrių išdėstymo parinktis.

#### Pavyzdys

<details>

<summary>Tuščias stulpelis horizontalioje juostoje</summary>

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

## Tik papildomi mygtukai

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Ši kortelė skirta tik papildomiems mygtukams. Ji puikiai tinka meniu, greitiems veiksmams, informaciniams žymekliams arba fiksuotai poraštei puslapio apačioje.

> [!IMPORTANT]  
> Ši kortelė naudoja naują papildomų mygtukų schemą. Naudokite `sub_button.bottom`, kad apibrėžtumėte savo mygtukus. Skyrius `sub_button.main` yra ignoruojamas.

### Tik papildomų mygtukų parinktys

<details>

<summary><b>Parinktys (YAML ir aprašymai)</b></summary>

| Pavadinimas | Tipas | Reikalavimas | Palaikomos parinktys | Aprašymas |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Privaloma** | Žr. [papildomus mygtukus](#papildomi-mygtukai) | Apibrėžkite savo papildomus mygtukus naudodami skyrių `bottom` |
| `hide_main_background` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Pašalina kortelės foną |
| `footer_mode` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Pritvirtina kortelę puslapio apačioje |
| `footer_full_width` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Padaro poraštę viso pločio (100%) |
| `footer_width` | number | Neprivaloma | Bet koks skaičius | Poraštės plotis pikseliais, kai `footer_full_width` yra `false` |
| `footer_bottom_offset` | number | Neprivaloma | Bet koks skaičius | Atstumas nuo puslapio apačios pikseliais (numatytoji: `16`) |
| `card_layout` | string | Neprivaloma | `normal` (numatytoji, jei ne skyriaus rodinyje), `large` (numatytoji, jei skyriaus rodinyje), `large-2-rows`, `large-sub-buttons-grid` | Kortelės stiliaus išdėstymas, žr. [kortelės išdėstymus](#kortelės-išdėstymai) |
| `rows` | number | Neprivaloma | Bet koks skaičius | Eilučių skaičius (aukštis) (pvz., `2`) |

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Kintamasis | Laukiama reikšmė | Aprašymas |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Poraštės plotis, kai `footer_full_width` yra `false` |
| `--bubble-footer-bottom` | `px` | Poraštės atstumas nuo apačios |
| `--bubble-footer-box-shadow` | žr. [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Šešėlis poraštės talpyklai |

</details>

#### Pavyzdžiai

<details>

<summary>Žymekliai (kaip ekrano nuotraukoje)</summary>

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

<summary>Fiksuotas poraštės meniu</summary>

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

## Papildomi mygtukai

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Kiekvienoje kortelėje, kuri palaiko šią parinktį, galite pridėti papildomus mygtukus, kad dar labiau pritaikytumėte savo korteles. Pavyzdžiui, galite sukurti mygtuką, kuris valdo dulkių siurblį, orų kortelę arba beveik bet ką, ką sugalvosite. Šie papildomi mygtukai palaiko bakstelėjimo veiksmus ir daugumą mygtuko parinkčių.

Papildomi mygtukai dabar palaiko tris tipus: **numatytąjį (mygtuką)**, **slankiklį** ir **išskleidžiamąjį sąrašą / pasirinkimą**. Toje pačioje kortelėje galite maišyti tipus, dėti papildomus mygtukus viršuje arba apačioje ir organizuoti juos į grupes sudėtingesniems išdėstymams.

#### Papildomų mygtukų vieta ir grupės

<details>

<summary><b>Papildomų mygtukų struktūra (main / bottom + grupės)</b></summary>

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

**Pastabos:**
- `main` ir `bottom` yra du nepriklausomi skyriai. Apatiniai papildomi mygtukai yra pritvirtinti kortelės apačioje.
- `main_layout` ir `bottom_layout` priima `inline` (numatytoji) arba `rows`, kad grupės būtų išdėstytos vertikaliai.
- Grupės yra objektai su `group` masyvu ir neprivalomu `buttons_layout` (`inline` arba `column`).
- `justify_content` galima naudoti tik **apatinėms grupėms** (`start`, `center`, `end`, `fill`).
- Kai yra apatinių papildomų mygtukų, kortelės išdėstymas automatiškai persijungia į `large`, nebent aiškiai nustatote kitą išdėstymą.
- Senesni `sub_button` masyvai vis dar palaikomi ir traktuojami kaip `main` skyrius.

</details>

### Papildomų mygtukų parinktys

<details>

<summary><b>Parinktys (YAML ir aprašymas)</b></summary>

| Pavadinimas | Tipas | Reikalavimas | Palaikomos parinktys | Aprašymas |
| --- | --- | --- | --- | --- |
| `entity` | string | Neprivaloma | Bet kokia esybė | Valdoma esybė |
| `name` | string | Neprivaloma | Bet kokia eilutė | Jūsų papildomo mygtuko pavadinimas, jei nenustatytas, bus rodomas esybės pavadinimas |
| `icon` | string | Neprivaloma | Bet kokia `mdi:` piktograma | Jūsų papildomo mygtuko piktograma, jei nenustatyta, bus rodoma esybės piktograma arba esybės nuotrauka |
| `force_icon` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Priverstinai rodo piktogramą, net jei yra esybės nuotrauka |
| `sub_button_type` | string | Neprivaloma | `default`, `slider` arba `select` | Pasirinkite papildomo mygtuko tipą |
| `show_background` | boolean | Neprivaloma | `true` (numatytoji) arba `false` | Rodo papildomo mygtuko foną, jo spalva keisis pagal esybės būseną |
| `state_background` | boolean | Neprivaloma | `true` (numatytoji) arba `false` | Naudoja būsenos spalvą, kai esybė yra `on` |
| `light_background` | boolean | Neprivaloma | `true` (numatytoji) arba `false` | Naudoja šviestuvo spalvą fonui, kai ji prieinama |
| `show_state` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Rodo arba slepia jūsų `entity` būseną |
| `show_name` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Rodo arba slepia pavadinimą |
| `show_icon` | boolean | Neprivaloma | `true` (numatytoji) arba `false` | Rodo arba slepia piktogramą |
| `show_last_changed` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Rodo jūsų `entity` paskutinio pasikeitimo laiką |
| `show_last_updated` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Rodo jūsų `entity` paskutinio atnaujinimo laiką |
| `show_attribute` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Rodo jūsų `entity` atributą po `name` |
| `attribute` | string | Neprivaloma (privaloma, jei `show_attribute` nustatyta į `true`) | Jūsų `entity` atributas | Rodomas atributas (pvz., `brightness`) |
| `select_attribute` | string | Neprivaloma | Jūsų `entity` atributų sąrašas (žr. aukščiau palaikomas parinktis) | Šis atributų sąrašas atvers išskleidžiamąjį meniu, jei bus paspaustas (pvz., `effect_list`) |
| `show_arrow` | boolean | Neprivaloma | `true` (numatytoji) arba `false` | Rodo arba slepia išskleidžiamojo sąrašo rodyklę pasirinkimo papildomiems mygtukams |
| `scrolling_effect` | boolean | Neprivaloma | `true` (numatytoji) arba `false` | Leidžia tekstui slinkti, kai turinys viršija talpyklos dydį |
| `tap_action` | object | Neprivaloma | Žr. [veiksmus](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Apibrėžia veiksmo tipą bakstelėjus papildomą mygtuką, jei nenustatyta, bus naudojama `more-info` |
| `double_tap_action` | object | Neprivaloma | Žr. [veiksmus](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Apibrėžia veiksmo tipą dvigubai bakstelėjus papildomą mygtuką, jei nenustatyta, bus naudojama `none` |
| `hold_action` | object | Neprivaloma | Žr. [veiksmus](#bakstelėjimo-dvigubo-bakstelėjimo-ir-palaikymo-veiksmai) | Apibrėžia veiksmo tipą palaikius papildomą mygtuką, jei nenustatyta, bus naudojama `more-info` |
| `fill_width` | boolean | Neprivaloma | `true` arba `false` | Užpildo galimą plotį (numatytoji: `false` pagrindiniam, `true` apatiniam) |
| `width` | number arba string | Neprivaloma | Bet koks skaičius arba CSS ilgis | Pasirinktinis plotis (`px` pagrindiniam skyriui, `%` apatiniam skyriui pagal numatytuosius nustatymus) |
| `custom_height` | number | Neprivaloma | Bet koks skaičius | Pasirinktinis aukštis pikseliais |
| `content_layout` | string | Neprivaloma | `icon-left` (numatytoji), `icon-top`, `icon-bottom`, `icon-right` | Piktogramos vieta papildomame mygtuke |
| `always_visible` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | **Tik slankikliui.** Visada rodo slankiklį, vietoj to, kad jį atvertų bakstelėjus |
| `show_button_info` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | **Tik slankikliui.** Rodo piktogramą / pavadinimą / būseną, kai įjungta `always_visible` |
| `visibility` | object arba list | Neprivaloma | Žr. [sąlygas](#sąlygos) | Rodo arba slepia papildomą mygtuką pagal sąlygas |
| `hide_when_parent_unavailable` | boolean | Neprivaloma | `true` arba `false` (numatytoji) | Slepia papildomą mygtuką, jei pagrindinės kortelės esybė nepasiekiama |
| `css_class` | string | Neprivaloma | Bet kokia eilutė | Papildoma CSS klasė papildomam mygtukui, kad galėtumėte jį pasiekti savo [stiliuose](#stilius) nepaisant jo pavadinimo (pvz., `My value` duoda `.my-value`) |

</details>

<details>

<summary><b>Slankiklio papildomo mygtuko parinktys (tokios pačios kaip mygtukų slankikliuose)</b></summary>

<br>

Slankiklio papildomi mygtukai palaiko tas pačias slankiklio parinktis kaip mygtukų slankikliai, įskaitant:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS kintamieji (žr. <a href="#stilius">Stilius</a>)</b></summary>

| Kintamasis | Laukiama reikšmė | Aprašymas |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Papildomų mygtukų kraštų spindulys |
| `--bubble-sub-button-background-color` | `color` | Papildomų mygtukų fono spalva |
| `--bubble-sub-button-outline` | `box-shadow` | Kontūras, pridedamas papildomam mygtukui ar slankikliui, tik tada, kai tas elementas nusipiešia ta pačia spalva kaip už jo esanti kortelė, dėl ko taptų nematomas (nustatykite `none`, kad pašalintumėte) |
| `--bubble-sub-slider-border-radius` | `px` | Slankiklio papildomų mygtukų kraštų spindulys |
| `--bubble-sub-slider-background-color` | `color` | Slankiklio papildomų mygtukų fono spalva |
| `--bubble-sub-slider-height` | `px` | Visada matomo slankiklio papildomo mygtuko aukštis |
| `--bubble-sub-slider-outline` | `box-shadow` | Tik slankiklio papildomų mygtukų kontūras, nenurodžius naudojama `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Teksto spalva ryškiuose papildomų mygtukų fonuose |

</details>

#### Pavyzdžiai

<details>

<summary>Mygtukas su papildomais mygtukais, sudarantis dulkių siurblio kortelę (kaip ekrano nuotraukoje)</summary>

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

<summary>Mygtuko slankiklis su papildomu mygtuku, rodančiu šviesumą, ir kitu, perjungiančiu šviestuvą (kaip ekrano nuotraukoje)</summary>

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

<summary>Mygtukas, rodantis vidaus ir lauko temperatūrą su šiandienos ir rytojaus oru (su ekrano nuotrauka)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Nesėkmė man, pas mane visą laiką debesuota, bet visos piktogramos keičiasi pagal orus.

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

## Kortelės išdėstymai

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card pilnai palaiko Home Assistant skyrių rodinį, galite pakeisti kortelės išdėstymą, kad kortelė būtų didesnė, taip pat pakeisti stulpelių ar eilučių, kuriuos kortelė turėtų užimti skyriaus rodinyje, skaičių (tik tose kortelėse, kurios palaiko šią parinktį). Šie išdėstymai taip pat palaikomi visuose kituose rodinio tipuose.

<details>

<summary><b>Galimi kortelės išdėstymai</b></summary>

| Išdėstymas | Aprašymas |
| --- | --- |
| `normal` | Įprastas išdėstymas (neoptimizuotas skyriaus rodiniui) |
| `large` | Didesnis išdėstymas, kuris pasikeis pagal pasirinktas eilutes skyriaus rodinyje (optimizuotas skyriaus rodiniui) |
| `large-2-rows` | Didesnis išdėstymas su 2 papildomų mygtukų eilutėmis, kuris pasikeis pagal pasirinktas eilutes skyriaus rodinyje (optimizuotas skyriaus rodiniui) |
| `large-sub-buttons-grid` | Šis išdėstymas rodo papildomus mygtukus tinklelyje, `rows` turi būti nustatyta bent į `2`.

</details>

#### Pavyzdžiai

<details>

<summary>Didelis mygtukas, rodantis energijos statistiką su 2 papildomų mygtukų eilutėmis (su ekrano nuotrauka)</summary>

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

<summary>Didelis mygtukas su keliomis eilutėmis ir 12 papildomų mygtukų</summary>

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

## Sąlygos

Kai kurias parinktis valdo sąlygos, rašomos lygiai taip pat kaip Home Assistant [sąlyginės kortelės](https://www.home-assistant.io/dashboards/conditional/) sąlygos:

- `visibility` [papildomame mygtuke](#papildomi-mygtukai), kad jis būtų rodomas arba slepiamas
- `trigger` [iškylančiajame lange](#iškylantysis-langas), kad jis atsidarytų, kai sąlygos įvykdytos
- `checkConditionsMet(conditions, hass)` jūsų [šablonuose](#šablonai), kai atsakymo reikia savame kode

Vertinamas kiekvienas Home Assistant sąlygos tipas: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, taip pat `and`, `or` ir `not` grupės. Veikia ir Home Assistant sąlygų kūriklio sąlygos, tos, kurios pavadintos pagal savo sritį, kaip `sun.is_up`, `light.is_on`, `zone.in_zone` ar `temperature.is_value`, su savo `target`, `options`, `behavior` ir `for` nuostatomis.

<details>

<summary><b>Pavyzdys</b></summary>

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
> Sąlygos vertinamos jūsų naršyklėje, tad tos kelios, kurioms reikia Home Assistant serverio, negali būti tikslios: saulėtekis ir saulėlydis skaitomi iš esybės `sun.sun`, o ne perskaičiuojami, o `for` trukmė matuojama nuo paskutinio būsenos pasikeitimo, be recorder istorijos.
>
> `view_columns` priimamas, bet visada praeina, nes ne Bubble Card išdėsto jūsų rodinio stulpelius. Sąlygos tipas, kurio Bubble Card nežino, vieną kartą praneša apie save jūsų naršyklės konsolėje, užuot tyliai nuvylęs, tad galite atskirti rašybos klaidą nuo trūkstamos funkcijos.

<br>

---

<br>

## Bakstelėjimo, dvigubo bakstelėjimo ir palaikymo veiksmai

Taip pat galite naudoti numatytuosius Home Assistant bakstelėjimo, dvigubo bakstelėjimo ir palaikymo veiksmus tose kortelėse, kurios palaiko šią parinktį. Pavyzdžiui, tai leidžia rodyti langą "daugiau informacijos" palaikant mygtuko piktogramą arba vykdyti paslaugą, kai paspaudžiamas papildomas mygtukas.

**Pastaba: kai sukonfigūruotas `double_tap_action`, įprastas `tap_action` turės 200 ms vėlavimą, kad būtų galima aptikti
dvigubą bakstelėjimą. Jei šis vėlavimas nepageidaujamas, nustatykite `double_tap_action` į `none`, kad išjungtumėte dvigubo bakstelėjimo apdorojimą.**

### Veiksmų parinktys

<details>

<summary><b>Parinktys (YAML ir aprašymas)</b></summary>

| Pavadinimas | Tipas | Palaikomos parinktys | Aprašymas |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Vykdomas veiksmas |
| `target` | object |  | Veikia tik su `call-service`. Naudoja [home-assistant sintaksę](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Bet koks jūsų prietaisų skydelio kelias | Kelias, į kurį pereiti (pvz., `'#kitchen'`, kad būtų atvertas iškylantysis langas), kai veiksmas apibrėžtas kaip navigate |
| `url_path` | string | Bet kokia nuoroda | URL, atveriamas paspaudus (pvz., `https://www.google.com`), kai veiksmas yra `url` |
| `service` | string | Bet kokia paslauga | Kviečiama paslauga (pvz., `media_player.media_play_pause`), kai `action` apibrėžtas kaip `call-service` |
| `data` arba `service_data` | object | Bet kokie paslaugos duomenys | Įtraukiami paslaugos duomenys (pvz., `entity_id: media_player.kitchen`), kai `action` apibrėžtas kaip `call-service` |
| `confirmation` | object | Žr. [patvirtinimą](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Rodo patvirtinimo iškylantį langą (ne Bubble Card langą), pakeičia numatytąjį `confirmation` objektą |

</details>

#### Pavyzdys

<details>

<summary>Mygtukas, atveriantis iškylantį langą</summary>

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

## Stilius

Galite pridėti individualius stilius, kad pakeistumėte visų kortelių CSS **nenaudodami card-mod**, keturiais būdais:

- Redaktoriuje eikite į kortelę, kurią norite keisti, tada eikite į _Stiliaus parinktys > Individualūs stiliai ir JS šablonai_, ir pridėkite savo individualius stilius (patikrinkite patarimus ir pavyzdžius žemiau).
- Redaktoriuje (arba [YAML](#moduliai)) eikite į kortelę, kurią norite keisti, tada eikite į _Moduliai_, tada sukurkite naują modulį (jis bus prieinamas visoms kortelėms), arba eikite į **Module Store**, kad įdiegtumėte bet kurį prieinamą modulį (daugiau informacijos apie modulius rasite [žemiau](#moduliai)).
- [Temos](https://www.home-assistant.io/integrations/frontend/#defining-themes) faile, pridedant CSS kintamuosius YAML formatu (jie prieinami kiekvienos kortelės dokumentacijoje aukščiau). Tai leidžia atlikti globalius pakeitimus.

  <details>
  
  <summary>Example</a></summary>
  
  <br>

  Nekopijuokite eilutės `Bubble:`, tai yra temos, kurią naudojate, pavadinimas. Taip pat reikia pašalinti `--` iš kintamųjų.

  Turite paleisti [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) veiksmą, kad atnaujintumėte temą po bet kokių pakeitimų.

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
  
- YAML faile pridedant `styles: |`, po to nurodant savo individualius stilius (patikrinkite patarimus ir pavyzdžius žemiau).

> [!TIP]  
> **Norėdami suprasti, kurias stiliaus klases galima keisti**, galite peržiūrėti [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) aplanką šiame saugykloje. Kiekviename kortelės aplanke rasite failą pavadinimu `styles.css`. Šiuose failuose yra visi taikomi stiliai. Tai suteikia gerokai daugiau galimybių nei CSS kintamieji, bet juos reikia pridėti atskirai kiekvienai kortelei.
> 
> Taip pat galite rasti daug [bendruomenės pavyzdžių](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), arba kai kurių iš [Home Assistant forumo](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/), truputį pasiieškoję.
>
> Bubble temą, skirtą Home Assistant (kaip nuotraukose), galite rasti [čia](https://github.com/Clooos/Bubble).
>
> Netrukus mano [YouTube kanale](https://www.youtube.com/@cloooos) pasirodys mokomasis vaizdo įrašas!

> [!IMPORTANT]  
> Atkreipkite dėmesį, kad kai kuriems jau apibrėžtiems CSS stiliams gali tekti pridėti `!important;` (žr. pavyzdžius žemiau).

> [!TIP]  
> Papildomus mygtukus galima pasiekti per pavadinimu paremtas klases. Pavyzdžiui, papildomas mygtukas pavadinimu "My sub-button" gali būti stilizuojamas naudojant `.my-sub-button`. Slankiklio papildomi mygtukai taip pat turi `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` ir t. t.
>
> Pavadinimu paremta klasė pasikeičia pervadinus papildomą mygtuką, o kai pavadinimas išverčiamas, išverčiama ir ji. Nustatykite papildomam mygtukui `css_class`, kad turėtumėte savą klasę, kuri niekada nepasikeis, nesvarbu koks pavadinimas ir nesvarbu kokia kalba.

#### Pavyzdžiai

<details>

<summary>Bet kurios Bubble Card šrifto dydžio keitimas</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Vieno mygtuko fono spalvos keitimas horizontalioje mygtukų juostoje</summary>

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

<summary>Kortelės fono spalvos keitimas</summary>

<br>

Šis veikia visuose Bubble Card tipuose (išskyrus iškylančiuosius langus):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Šis daro tą patį, bet tik mygtuko kortelėje (jis veikia iškylančiojo lango antraštėje): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Norėdami pakeisti spalvą, kai jis yra `on`, peržiūrėkite stiliaus šablonus žemiau.

</details>

<details>

<summary>Mygtuko slankiklio spalvos keitimas</summary>

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

<summary>Skirtuko linijos spalvos keitimas</summary>

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

<summary>Piktogramos spalvos keitimas</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Horizontalios mygtukų juostos piktogramai.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Piktogramos konteinerio fono spalvos keitimas</summary>

<br>

Šis veikia visuose Bubble Card tipuose (išskyrus iškylančiuosius langus):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Šis daro tą patį iškylančiojo lango antraštei: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Papildomų mygtukų dydžio keitimas (puikiai tinka dideliam išdėstymui)</summary>

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

<summary>Antro papildomo mygtuko fono spalvos keitimas</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Piktogramos dydžio keitimas</summary>

<br>

Pagrindinei piktogramai.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Papildomų mygtukų piktogramoms.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Paveikslėlio naudojimas vietoj piktogramos papildomame mygtuke</summary>

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

Tiesiog įkelkite šį paveikslėlį į aplanką "pictures" (arba kitu jūsų norimu pavadinimu) Home Assistant "www" aplanke.

</details>

<details>

<summary>Sudėtingesnis pavyzdys: horizontalios papildomų mygtukų eilutės kūrimas (su ekrano nuotrauka)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Man šis tikrai labai patinka, naudoju jį kaip antraštę savo prietaisų skydelyje.

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

## Šablonai

**Bubble Card nepalaiko Jinja šablonų**, bet pažengę naudotojai gali pridėti šablonus JS kalba tiesiogiai savo [individualiuose stiliuose](#stilius). Tai leidžia, pavyzdžiui, dinamiškai keisti piktogramą, elemento tekstus ar spalvas, sąlygiškai rodyti arba slėpti elementą (pavyzdžiui, papildomą mygtuką), ar beveik bet ką, remiantis būsena, atributu ir dar daugiau.

> [!TIP]  
> Daugiau informacijos apie JS šablonus [čia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mano patarimas: **visada pasitikrinkite naršyklės konsolę**, kad įsitikintumėte, jog viskas veikia teisingai.

> [!IMPORTANT]  
> **Visi šablonai, kurie nekeičia CSS savybės, turi būti pateikti pačioje pabaigoje! Pavyzdžiui, piktogramos, teksto ar bet kurio kito elemento keitimas.**

#### Prieinami kintamieji ir funkcijos

<details>

<summary>Kintamieji</summary>

<br>

Daugumoje kortelių turite prieigą prie šių kintamųjų:

- `state` grąžins jūsų apibrėžto `entity` būseną.
  
- `entity` grąžins jūsų apibrėžtą esybę, pavyzdžiui `switch.test` šiame pavyzdyje.
  
- `icon` galima naudoti taip, kad pakeistumėte piktogramą: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` grąžins jūsų pirmojo papildomo mygtuko apibrėžtos `entity` būseną, `[0]` yra pirmojo papildomo mygtuko būsena, `[1]` antrojo...
  
- `subButtonIcon[0]` galima naudoti taip, kad pakeistumėte pirmojo papildomo mygtuko piktogramą: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` yra pirmojo papildomo mygtuko piktograma, `[1]` antrojo...
  
- `card` grąžins kortelės elementą DOM struktūroje.
  
- `hass` yra pažengusiems skirtas kintamasis, suteikiantis dar daugiau kontrolės, pavyzdžiui, galite grąžinti `light.kitchen` būseną taip: `hass.states['light.kitchen'].state`, arba atributą taip: `hass.states[entity].attributes.brightness`.

- `this` grąžins daug naudingos informacijos apie jūsų sąranką ir prietaisų skydelį, naudokite tik tuo atveju, jei žinote, ką darote.

</details>

<details>

<summary>Funkcijos</summary>

<br>

Turite prieigą prie visų globalių JS funkcijų, bet taip pat turite prieigą prie:

- `getWeatherIcon` galima naudoti norint grąžinti orų piktogramą, remiantis būsena, kuri nurodo orus. Pavyzdžiui, galite parašyti taip: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, kad pakeistumėte trečiojo papildomo mygtuko piktogramą į šiandienos orų piktogramą, `.forecast[1]?.condition` skirta rytojui...

  Tam turėsite susikurti šablono jutiklį. Štai ką galite pridėti savo `configuration.yaml` faile:
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
- `checkConditionsMet(conditions, hass)` grąžina `true`, kai [sąlygų](#sąlygos) sąrašas įvykdytas, pavyzdžiui `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` galima naudoti norint išversti būseną (taip pat galima naudoti gauti būsenos vienetą, nereikalaujant jo pridėti rankiniu būdu).
- `hass.formatEntityAttributeValue(state, "attribute")` galima naudoti norint išversti atributą (taip pat galima naudoti gauti būsenos vienetą, nereikalaujant jo pridėti rankiniu būdu).

</details>

#### Pavyzdžiai

Žemiau rasite daug pavyzdžių, bet taip pat galite rasti labai pažengusių šablonų mano [Patreon puslapyje](https://www.patreon.com/c/Clooos), pavyzdžiui, vieną (mano mėgstamiausią), kuris leidžia iki keturių sąlyginių ženkliukų, išdėstytų aplink kortelės piktogramas. Tai taip pat puikus būdas sužinoti apie visas Bubble Card individualių stilių ir šablonų galimybes!

<details>
<summary>Pavyzdžiai iš mano Patreon puslapio</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant tipo ženkliukų pridėjimas bet kuriai kortelei</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Formatuotos datos ir laiko rodymas skirtuke, nenaudojant jokios esybės</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Papildomo mygtuko būsenos rodymas dviejose eilutėse</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Etikečių ir piktogramų pritaikymas pasirinkimo papildomame mygtuke</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Nuolatinio priminimo iškylančiojo lango pridėjimas, kuris rodomas tik kai reikia</a>
</p>

<br>

</details>

<details>

<summary>Mygtuko fono spalvos keitimas, kuri yra raudona, kai <code>off</code>, ir mėlyna, kai <code>on</code></summary>

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

<summary>Mygtuko fono spalvos keitimas pagal esybę, skirta horizontaliai mygtukų juostai</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Papildomo mygtuko rodymas / slėpimas sąlygiškai</summary>

<br>

Šis rodo pirmąjį papildomą mygtuką tik tada, kai mano dulkių siurblys užstrigęs.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Šis rodo papildomą mygtuką, kai baterijos lygis žemiau 10%. Naudinga su papildomu mygtuku, kuris rodo "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Piktogramos ar papildomo mygtuko piktogramos keitimas sąlygiškai</summary>

<br>

Šis keičia mygtuko piktogramą tik tada, kai dulkių siurblys užstrigęs.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Šis keičia pirmojo papildomo mygtuko piktogramą tik tada, kai dulkių siurblys užstrigęs.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Piktogramos ar papildomo mygtuko piktogramos spalvos keitimas sąlygiškai</summary>

<br>

Šis keičia mygtuko piktogramos spalvą pagal jo būseną.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Šis keičia papildomo mygtuko piktogramos spalvą pagal jo būseną. `.bubble-sub-button-1` yra pirmasis papildomas mygtukas, pakeiskite `1`, jei norite keisti kito papildomo mygtuko piktogramą.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Ventiliatoriaus piktogramos animavimas sąlygiškai</summary>

<br>

Šis sukioja mygtuko piktogramą, kai ventiliatorius yra `on`.
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

<summary>Tekstų šablonizavimas (pavyzdžiui, pavadinimo ar būsenos)</summary>

<br>

Šis keičia mygtuko pavadinimą / būseną į "It's currently sunny", priklausomai nuo jūsų orų.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
arba pritaikius papildomiems mygtukams:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Jei norite šablonizuoti būseną (`.bubble-state`), neįjunkite `show_state: true`, tiesiog įjunkite `show_attribute: true` be jokio atributo.

</details>

<details>

<summary>Sudėtingesnis pavyzdys: papildomo mygtuko spalvos keitimas, kai iškylantysis langas atidarytas</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Sudėtingesnis pavyzdys: skirtuko pavadinimo šablonizavimas pagal būseną, išverstą į jūsų kalbą</summary>

<br>

Galite naudoti `hass.formatEntityState(state)`, kad išverstumėte būseną, ir `hass.formatEntityAttributeValue(state, "attribute")`, kad išverstumėte atributą.

Šis keičia pavadinimą ir piktogramą pagal orus, "Nuageux" prancūziškai reiškia "Cloudy" (debesuota).

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

## Moduliai

Moduliai yra galinga funkcija, leidžianti išsaugoti, pakartotinai naudoti ir dalytis savo individualiais stiliais bei šablonais tarp visų jūsų Bubble Card kortelių. Užuot kopijavę ir įklijavę tą patį kodą į kelias korteles, galite sukurti modulį ir taikyti jį ten, kur reikia. Tai gerokai palengvina ir pagreitina jūsų prietaisų skydelio išvaizdos ir jausmo valdymą.

Bet ši funkcija yra kur kas galingesnė, nei atrodo, ji leidžia jums pačiam pridėti tikras funkcijas Bubble Card redaktoriuje, naudojant visas numatytąsias [Home Assistant formos](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) parinktis!  
Objekto parinkiklis buvo patobulintas, kad rodytų gyvus pakeitimus ir teisingai palaikytų atributus.

Modulis taip pat gali atsakyti Home Assistant kortelių parinkikliui šalia integruotų [esybių pasiūlymų](#esybių-pasiūlymai): naudokite `suggestions` toms kortelėms, kurias jis gali aprašyti iš anksto, ir `suggestions_code`, kai jas reikia apskaičiuoti pagal jūsų sąranką, pavyzdžiui iškylantįjį langą, sudarytą iš visų srities, kuriai priklauso pasirinkta esybė, esybių. Abu raktai aprašyti [čia](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Taip pat galite naršyti **Module Store**, kad rastumėte ir įdiegtumėte [bendruomenės sukurtus modulius](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), arba pasidalytumėte savo kūriniais!

> [!TIP]
> Modulio kodas veikia lygiai taip pat kaip kortelės `styles` skiltyje esantis kodas. Visi tie patys kintamieji ir funkcijos iš [Šablonų](#šablonai) skilties yra prieinami.

<br>

### Pradinė sąranka

> [!IMPORTANT]
> Pradedant nuo v3.1.0, Bubble Card Tools yra rekomenduojama saugojimo sistema moduliams. Senasis šablono jutiklio metodas vis dar veikia esamoms sąrankoms, bet nauji moduliai ir Module Store funkcijos geriausiai palaikomos per Bubble Card Tools.

Bubble Card Tools integracija įjungia Modulio redaktorių ir Module Store, bei saugo modulius kaip atskirus YAML failus. Esami moduliai perkeliami automatiškai.

Diegimo ir konfigūravimo žingsniai paaiškinti čia:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Modulio redaktorius

Modulio redaktorių galite pasiekti iš bet kurios kortelės nustatymų, skiltyje **Moduliai**. Redaktoriuje yra dvi pagrindinės kortelės:

#### Skirtukas „Mano moduliai“

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Šiame skirtuke rodomi visi jūsų įdiegti moduliai, čia galite:

- **Taikyti** esamus modulius dabartinei kortelei
- **Kurti** naują modulį nuo nulio
- **Redaguoti** esamus modulius su gyva peržiūra
- **Trinti** modulius, kurių jums nebereikia
- **Ieškoti** ir **rūšiuoti** modulius (abėcėlės tvarka, naujausi, aktyvūs pirmi)
- **Nustatyti globalų statusą**, kad modulis automatiškai būtų taikomas visoms kortelėms
- **Importuoti / eksportuoti** modulius atsarginei kopijai ar dalijimuisi
- **Rašyti esybių pasiūlymus** modulio redaktoriuje, skiltyje **Neprivaloma: esybių pasiūlymai**, kad jūsų modulis būtų siūlomas Home Assistant kortelių parinkiklyje. Ir taisyklės, ir apskaičiuojami pasiūlymai tikrinami jums rašant, klaida ten neleidžia išsaugoti, o peržiūra rodo siūlomas korteles bet kuriai pasirinktai esybei

#### Skirtukas „Module Store“

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Šiame skirtuke rodomi [visi prieinami bendruomenės moduliai](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), čia galite:

- **Naršyti** visus bendruomenės sukurtus modulius
- **Ieškoti** ir filtruoti modulius pagal pavadinimą, suderinamumą ar raktažodžius
- **Įdiegti** modulius vienu paspaudimu
- **Atnaujinti** įdiegtus modulius, kai atsiranda naujų versijų

> [!TIP]
> Redaktoriuje galite įjungti nepalaikomus modulius, kad išbandytumėte modulius, kurie dar nepažymėti kaip suderinami su tam tikru kortelės tipu.

<br>

### Kaip naudoti modulius

#### Naujo modulio kūrimas

<details>

<summary>Spustelėkite, kad išskleistumėte</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Eikite į bet kurios kortelės redaktorių ir išskleiskite skiltį **Moduliai**.
2. Spustelėkite **Sukurti naują modulį**.
3. Užpildykite modulio informaciją.
4. Įrašykite savo CSS ir (arba) JavaScript šablono kodą **Kodo** redaktoriuje.
5. (Neprivaloma) Sukurkite individualią konfigūracijos sąsają skiltyje **Redaktorius** (kaip spalvų parinkiklis ekrano nuotraukoje aukščiau, visa dokumentacija prieinama [čia](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Neprivaloma) Parašykite savo **Esybių pasiūlymus**, kad jūsų modulis būtų siūlomas Home Assistant kortelių parinkiklyje. Skydelis tikrina, ką rašote, jums bespausdinant, o jo peržiūra rodo pačias siūlomas korteles jūsų pasirinktai esybei.
7. Spustelėkite **Išsaugoti**.

Dabar jūsų modulis prieinamas naudoti bet kurioje jūsų kortelėje!

<br>

</details>

#### Modulio taikymas kortelei

<details>

<summary>Spustelėkite, kad išskleistumėte</summary>

<br>

- **Per redaktorių:**

  - Eikite į kortelės, kuriai norite taikyti modulį, redaktorių.
  - Išskleiskite skiltį **Moduliai**.
  - Spustelėkite modulį, kurį norite taikyti, iš sąrašo.
  - Ties „Taikyti“, spustelėkite „Šiai kortelei“. Modulis dabar aktyvus. Vienai kortelei galite taikyti kelis modulius.

- **Per YAML:**

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

#### Modulio taikymas globaliai

<details>

<summary>Spustelėkite, kad išskleistumėte</summary>

<br>

Galite nustatyti, kad modulis automatiškai taikomas visoms Bubble Card kortelėms:

**Tai neprieinama moduliams su redaktoriumi, nes jiems reikalinga konkreti konfigūracija, kad veiktų.**

- **Per redaktorių:**

  - Modulio redaktoriuje raskite savo modulį skirtuke **Mano moduliai**.
  - Perjunkite mygtuką **Visos kortelės**, esantį šalia modulio pavadinimo.
  - Modulis dabar automatiškai taikomas visoms kortelėms.
 
- **Per YAML:**

  Savo modulio YAML konfigūracijoje (faile `bubble-modules.yaml`), tiesiog pridėkite `is_global: true`.

<br>

</details>

#### Vienos kortelės pašalinimas iš globalaus modulio

<details>

<summary>Spustelėkite, kad išskleistumėte</summary>

<br>

Jei turite globalų modulį, bet norite jį pašalinti iš konkrečios kortelės:

- **Per redaktorių:**
  
  - Kortelės skiltyje **Moduliai** matysite išvardytus globalius modulius.
  - Spustelėkite globalų modulį, išjunkite „Šiai kortelei“, kad pašalintumėte jį iš šios konkrečios kortelės.

- **Per YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Dalijimasis savo moduliu per Module Store

<details>

<summary>Spustelėkite, kad išskleistumėte</summary>

<br>

Norėdami pasidalyti savo moduliu per Module Store, Modulio redaktoriuje, apačioje, skiltyje „Eksportuoti modulį“, spustelėkite „Kopijuoti GitHub“ ir įklijuokite turinį naujoje diskusijoje kategorijoje [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Redaguokite aprašymą** (jei reikia), **pavyzdį** (YAML naudotojams), ir nepamirškite **pridėti bent vienos ekrano nuotraukos** Module Store.

**Jūsų modulis tampa prieinamas iškart po to** (po Store atnaujinimo), todėl dar kartą patikrinkite, ar viskas parašyta teisingai ir modulis veikia taip, kaip tikėtasi. Žinoma, galite redaguoti / atnaujinti modulį ir po to, kai juo pasidalijote.

<br>

</details>

#### Versijų valdymas

<details>

<summary>Spustelėkite, kad išskleistumėte</summary>

<br>

Module Store automatiškai tikrina, ar yra įdiegtų modulių atnaujinimų. Kai atnaujinimai prieinami:

1. Skirtuke **Module Store** matysite atnaujinimo indikatorių.
2. Spustelėkite **Atnaujinti** moduliuose, kuriems yra prieinamų atnaujinimų.
3. Patvirtinkite atnaujinimą Module Store.

<br>

</details>

#### Palaikomų kortelės tipų nustatymas

<details>

<summary>Spustelėkite, kad išskleistumėte</summary>

<br>

Kai kurie moduliai gali būti nesuderinami su visais kortelės tipais. Galite nurodyti, kurias korteles modulis palaiko.  
Jei norite, kad modulis būtų suderinamas su **visomis kortelėmis**, tiesiog praleiskite lauką `supported` (arba naudokite parinktį **Visos kortelės** redaktoriuje).

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

### Pavyzdžiai

<details>
<summary>Bazinis stiliaus modulis</summary>

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
<summary>Modulis su individualia konfigūracija</summary>

<br>

Šis modulis prieinamas [čia](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Daugiau pavyzdžių rasite Module Store, arba [čia](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizacija

Bubble Card kalba jūsų kalba. Jos redaktorius išverstas į 64 kalbas, kurias palaiko Home Assistant, ir visur, kur Home Assistant jau turi savo žodį, perimama jo formuluotė, tad abiejose sąsajose skaitote tuos pačius terminus.

Redaktoriaus apačioje, šalia versijos numerio, jungiklis **Automatinis** seka jūsų Home Assistant kalbą. Išjunkite jį ir visas redaktorius grįš į anglų kalbą, o tai patogu sekant vadovą ar pranešant apie problemą. Jūsų pasirinkimas įsimenamas naršyklėje.

Ši dokumentacija taip pat išversta, [į 62 kalbas](languages.md), į visas, išskyrus britų anglų, kuri rodo originalą. Tie puslapiai atviri visiems, tad formuluotę, kuri neatitinka jūsų paties Home Assistant, galima pataisyti keliais spustelėjimais. Turinio atskaitos tašku lieka angliška versija.

<br>

---

<br>

## Pagalba

Jei kažkas veikia ne taip, kaip tikėtasi, nedvejodami sukurkite pranešimą apie problemą (issue). 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Turite klausimų ar minčių apie Bubble Card? Norite pasidalyti savo prietaisų skydeliais ar atradimais? Galite apsilankyti Home Assistant forume, Bubble Card subreddit'e arba GitHub Discussions skiltyje.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Prisidėjimas

Prisidėjimai laukiami! Nesvarbu, ar tai klaidų taisymas, naujos funkcijos, vertimai ar dokumentacijos patobulinimai, nedvejodami sukurkite pull request.

Prieš pradėdami, perskaitykite [kūrėjo vadovą](DEVELOPERS.md), kuriame aprašoma, kaip nusistatyti vietinę aplinką, sukurti (build) projektą ir išbandyti savo pakeitimus.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Paremkite

Didžiąją dalį savo laisvo laiko skiriu tam, kad šis projektas būtų kuo geresnis. Taigi, jei vertinate mano darbą, bet koks auka būtų puikus būdas parodyti savo paramą 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Ačiū visiems už jūsų paramą, jūs visi esate didžiausia mano motyvacija!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
