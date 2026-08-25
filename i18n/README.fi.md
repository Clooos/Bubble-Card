<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Tämä sivu on automaattinen käännös. Epäselvissä tapauksissa [alkuperäinen englanninkielinen dokumentaatio](../README.md) on ratkaiseva. Kuulostaako jokin lause oudolta? Kaikki apu on tervetullutta, ja [tämän sivun korjaaminen](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.fi.md) vie vain hetken: GitHub hoitaa forkin ja pull requestin puolestasi. Kiitos jo etukäteen! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lue tämä toisella kielellä](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card on minimalistinen ja muokattava korttikokoelma Home Assistantiin, jossa on modernit ponnahdusikkunat ja sisäänrakennettu Module Store yli 100 yhteisön tekemällä moduulilla.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Sisällysluettelo

**[`Asennus`](#asennus)**  **[`Määritykset`](#määritykset)**  **[`Entiteettiehdotukset`](#entiteettiehdotukset)**  **[`Ponnahdusikkuna`](#ponnahdusikkuna)**  **[`Vaakasuora painikepino`](#vaakasuora-painikepino)**  **[`Painike`](#painike)**  **[`Mediasoitin`](#mediasoitin)**  **[`Kaihdin`](#kaihdin)**  **[`Valinta`](#valinta)**  **[`Ilmastointi`](#ilmastointi)**  **[`Kalenteri`](#kalenteri)**  **[`Erotin`](#erotin)**  **[`Tyhjä sarake`](#tyhjä-sarake)**  **[`Vain alipainikkeet`](#vain-alipainikkeet)**  **[`Alipainikkeet`](#alipainikkeet)**  **[`Korttien asettelut`](#korttien-asettelut)**  **[`Ehdot`](#ehdot)**  **[`Napautuksen, kaksoisnapautuksen ja pitkän painalluksen toiminnot`](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot)**  **[`Tyylit`](#tyylit)**  **[`Mallit`](#mallit)**  **[`Moduulit`](#moduulit)**  **[`Lokalisointi`](#lokalisointi)**  **[`Ohje`](#ohje)**  **[`Osallistuminen`](#osallistuminen)**  **[`Lahjoita`](#lahjoita)**

<br>

## Asennus

**Home Assistantin vähimmäisversio:** 2023.9.0

<details>

<summary>Ilman HACS:ia</summary>

<br>

1. Lataa tämä tiedosto: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Lisää tämä tiedosto `<config>/www` kansioosi. Saadaksesi editorin omalla kielelläsi lataa myös `bubble-card-<lang>.json` [dist kansiosta](https://github.com/Clooos/Bubble-Card/tree/main/dist), esimerkiksi `bubble-card-fr.json`, ja laita se `bubble-card.js` viereen (ilman sitä editori pysyy englanniksi)
3. Klikkaa kojelaudallasi kuvaketta oikeassa yläkulmassa ja sitten `Muokkaa kojelautaa`
4. Klikkaa uudelleen sitä kuvaketta ja sitten `Hallitse resursseja`
5. Klikkaa `Lisää resurssi`
6. Kopioi ja liitä tämä: `/local/bubble-card.js?v=1`
7. Klikkaa `JavaScript Module` ja sitten `Luo`
8. Palaa takaisin ja päivitä sivusi
9. Voit nyt klikata `Lisää kortti` oikeassa alakulmassa ja hakea `Bubble Card`
10. Tiedoston jokaisen päivityksen jälkeen sinun täytyy muokata `/local/bubble-card.js?v=1` ja vaihtaa versionumero suuremmaksi

Jos se ei toimi, kokeile tyhjentää selaimesi välimuisti.

</details>

<details>

<summary>HACS:in kanssa (suositeltu)</summary>

<br>

Tämä tapa mahdollistaa päivitysten saamisen suoraan Home Assistant Community Storesta

1. Jos HACS:ia ei ole vielä asennettu, lataa se seuraamalla ohjeita osoitteessa [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Suorita HACS:in alkumääritystä seuraamalla ohjeita osoitteessa [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Siirry sivupalkissasi kohtaan "HACS"
4. Hae "Bubble Card" tai klikkaa alla olevaa sinistä painiketta
5. Klikkaa "Lataa"
6. Palaa kojelaudallesi ja klikkaa kuvaketta oikeassa yläkulmassa ja sitten `Muokkaa kojelautaa`
7. Voit nyt klikata `Lisää kortti` oikeassa alakulmassa ja hakea `Bubble Card`

Jos se ei toimi, kokeile tyhjentää selaimesi/sovelluksesi välimuisti (kaikilla laitteillasi tarvittaessa).

#### Videot

Voit myös katsoa YouTube-kanavaani vaihe vaiheelta -videoita varten.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Määritykset

Kaikki asetukset voi määrittää Home Assistantin editorissa. Voit kuitenkin löytää lisätietoja ja YAML:in alla olevasta dokumentaatiosta.

<details>

<summary><b>Päävalinnat (YAML + kuvaus)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut valinnat | Kuvaus |
| --- | --- | --- | --- | --- |
| `type` | string | **Pakollinen** | `custom:bubble-card` | Kortin tyyppi |
| `card_type` | string | **Pakollinen** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` tai `sub-buttons` | Bubble Card -kortin tyyppi, katso alla |
| `styles` | object list | Valinnainen | Mitkä tahansa CSS-tyylitiedostot | Mahdollistaa Bubble Card -kortin CSS:n muokkaamisen, katso [tyylit](#tyylit) |

</details>

<details>

<summary><b>Yleiset CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Reunuksen pyöristys kaikille tuetuille elementeille |
| `--bubble-main-background-color` | `color` | Pääasiallinen taustaväri kaikille tuetuille elementeille |
| `--bubble-secondary-background-color` | `color` | Toissijainen taustaväri kaikille tuetuille elementeille |
| `--bubble-accent-color` | `color` | Korostusväri kaikille tuetuille elementeille |
| `--bubble-icon-border-radius` | `px` | Kuvakkeen reunuksen pyöristys kaikille tuetuille elementeille |
| `--bubble-icon-background-color` | `color` | Kuvakkeen taustaväri kaikille tuetuille elementeille |
| `--bubble-sub-button-border-radius` | `px` | Reunuksen pyöristys kaikille alipainikkeille |
| `--bubble-sub-button-background-color` | `color` | Taustaväri kaikille alipainikkeille |
| `--bubble-box-shadow` | katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Varjostus kaikille tuetuille elementeille |
| `--bubble-border` | katso [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Reunus kaikille tuetuille korteille |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Katso tämä [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) oppiaksesi lisää Bubble Cardista ja sen ominaisuuksista.** YouTube-kanavani on melko uusi ja keskittyy Home Assistantia ja Bubble Cardia käsitteleviin oppaisiin. Älä epäröi tilata kanavaani auttaaksesi sen näkyvyyden kasvattamisessa. Kiitos etukäteen!

<br>

---

<br>

## Entiteettiehdotukset

Home Assistant 2026.6:sta lähtien entiteetin valitseminen korttivalitsimessa tarjoaa sinulle muutaman valmiin kortin, ja Bubble Card lisää tuohon luetteloon omat reseptinsä. Valitse valaisin, niin saat kortin kirkkaudensäätimellä, sekä värilämpötila-, väri- ja kylläisyysvariantit silloin kun valaisimesi tukee niitä. Valitse kaihdin, niin saat sen sijaintiliukusäätimen, valitse mediasoitin, niin saat myös variantin sen lähdeluettelolla, valitse pölynimuri, niin saat sen käynnistys-, tauko- ja telakointipainikkeet. Jokainen ehdotus on tavallinen Bubble Card -määritys, joka näytetään live-esikatseluna, joten voit ottaa lähimmän ja jatkaa sen muokkaamista tavalliseen tapaan.

Se, mitä sinulle tarjotaan, riippuu siitä, mihin entiteettisi todella pystyy: valaisin ilman kirkkauskanavaa saa kytkimen liukusäätimen sijaan, kaihdin joka ei kallistu ei saa kallistusvarianttia, ilmastointientiteetti saa esiasetetut tilansa vain jos sillä on niitä. Klassiset vaihtoehdot seuraavat Bubble Cardin ehdotusten alapuolella silloin kun ne soveltuvat: kyseiselle entiteettityypille omistettu kortti, tavallinen painike ja liukusäädin.

> [!TIP]
> Moduulit voivat lisätä omat ehdotuksensa tuohon luetteloon, katso [moduulit](#moduulit).

<br>

---

<br>

## Ponnahdusikkuna

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Tämä kortti antaa sinun luoda ponnahdusikkunan minkä tahansa sisällön kanssa. Jokainen ponnahdusikkuna on **oletuksena piilotettu** ja se voidaan avata kohdistamalla sen linkkiin (esim. `'#pop-up-name'`), millä tahansa kortilla, joka tukee `navigate`-[toimintoa](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot), tai mukana tulevalla [vaakasuoralla painikepinolla](#vaakasuora-painikepino).

> [!TIP]
> ### Ponnahdusikkunan laukaisin 
> Tämä ominaisuus mahdollistaa ponnahdusikkunan avaamisen minkä tahansa entiteetin tilan perusteella, esimerkiksi voit avata "Turvallisuus"-ponnahdusikkunan kameralla, kun henkilö on talosi edessä. Voit myös luoda toggle-apuentiteetin (input_boolean) ja laukaista sen avaamisen/sulkemisen automaatiossa.
> <details>
> <summary>Ponnahdusikkunan avaaminen, kun <code>binary_sensor</code> on tilassa <code>on</code></summary>
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
> ### Eri tavat sulkea ponnahdusikkuna 
> Ponnahdusikkunan voi sulkea monella tavalla. Voit esimerkiksi pyyhkäistä ponnahdusikkunan otsikosta alaspäin, tehdä pitkän pyyhkäisyn ponnahdusikkunan sisällä alaspäin, painaa Esc-näppäintä työpöydällä, poistaa hashin URL-osoitteesta tai yksinkertaisesti painaa sulkupainiketta.
>


### Ponnahdusikkunan asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut valinnat | Kuvaus |
| --- | --- | --- | --- | --- |
| `hash` | string | **Pakollinen** | Mikä tahansa yksilöllinen hash (esim. `'#kitchen'`) heittomerkeillä ' ' | Näin avaat ponnahdusikkunasi |
| `popup_style` | string | Valinnainen | `bubble` (oletus) tai `classic` | Määrittää ponnahdusikkunan visuaalisen tyylin |
| `popup_mode` | string | Valinnainen | `default` (oletus), `fit-content`, `centered` tai `adaptive-dialog` | Määrittää ponnahdusikkunan asettelutilan |
| `with_bottom_offset` | boolean | Valinnainen | `true` tai `false` (oletus) | Käytetään vain asetuksen `popup_mode: fit-content` tai `adaptive-dialog` kanssa. Lisää alamarginaalin mobiilissa, hyödyllinen kun kojelaudassasi on alatunnistekortti. |
| `full_width_on_mobile` | boolean | Valinnainen | `true` tai `false` (oletus) | Käytetään vain asetuksen `popup_mode: centered` kanssa. Laajentaa ponnahdusikkunan koko näytön leveyteen mobiilissa, hyödyllinen pienemmillä näytöillä. |
| `performance_mode` | string | Valinnainen | `default` (oletus) tai `performance` | Optimoi ponnahdusikkunan avausanimaation. `performance` viivästyttää hieman sisällön renderöintiä ja taustan sumennusta, poistaa myös taustan sumennuksen käytöstä, jos se on asetettu. |
| `auto_close` | string | Valinnainen | Aikakatkaisu millisekunteina (esim. `10000` 10 sekunnille) | Sulkee ponnahdusikkunan automaattisesti aikakatkaisun jälkeen |
| `close_on_click` | boolean | Valinnainen | `true` tai `false` (oletus) | Sulkee ponnahdusikkunan automaattisesti minkä tahansa toiminnon jälkeen |
| `close_by_clicking_outside` | boolean | Valinnainen | `true` (oletus) tai `false` | Sulkee ponnahdusikkunan klikkaamalla sen ulkopuolelta |
| `width_desktop` | string | Valinnainen | Mikä tahansa CSS-arvo | Leveys työpöydällä (`100%` oletuksena mobiilissa) |
| `margin` | string | Valinnainen | Mikä tahansa CSS-arvo | Käytä tätä **vain**, jos ponnahdusikkunasi ei ole hyvin keskitetty mobiilissa (esim. `13px`) |
| `margin_top_mobile` | string | Valinnainen | Mikä tahansa CSS-arvo | Yläreunan marginaali mobiilissa (esim. `-56px`, jos otsikkosi on piilotettu) |
| `margin_top_desktop` | string | Valinnainen | Mikä tahansa CSS-arvo | Yläreunan marginaali työpöydällä (esim. `50vh` puolikokoiselle ponnahdusikkunalle tai `calc(100vh - 400px)` kiinteälle `400px`-korkeudelle) |
| `bg_color` | string | Valinnainen | Mikä tahansa hex-, rgb- tai rgba-arvo | Ponnahdusikkunasi taustaväri (esim. `#ffffff` valkoiselle taustalle) |
| `bg_opacity` | string | Valinnainen | Mikä tahansa arvo väliltä `0` - `100` | Ponnahdusikkunasi taustan läpinäkyvyys (esim. `100` ei läpinäkyvyyttä) |
| `bg_blur` | string | Valinnainen | Mikä tahansa arvo väliltä `0` - `100` | Ponnahdusikkunasi taustan sumennusefekti, **tämä toimii vain, jos `bg_opacity` ei ole asetettu arvoon `100`** (esim. `0` ei sumennusta) |
| `shadow_opacity` | string | Valinnainen | Mikä tahansa arvo väliltä `0` - `100` | Ponnahdusikkunasi varjon läpinäkyvyys (esim. `0` piilottaaksesi sen) |
| `hide_backdrop` | boolean | Valinnainen | `true` tai `false` (oletus) | Aseta tämä arvoon true pääkojelautasi ensimmäisessä ponnahdusikkunassa poistaaksesi taustan käytöstä kaikissa ponnahdusikkunoissa. |
| `background_update` | boolean | Valinnainen | `true` tai `false` (oletus) | Päivitä ponnahdusikkunan sisältö taustalla (ei suositella) |
| `trigger` | object tai list | Valinnainen | Katso [ehdot](#ehdot) | Avaa tämän ponnahdusikkunan kun ehdot täyttyvät |
| `trigger_entity` | string | Valinnainen | Mikä tahansa entiteetti | Avaa tämä ponnahdusikkuna minkä tahansa entiteetin tilan perusteella, `trigger`-asetuksen yksinkertainen muoto |
| `trigger_state` | string | Valinnainen (**Pakollinen**, jos `trigger_entity` on määritetty) | Mikä tahansa entiteetin tila | Entiteetin tila, jolla ponnahdusikkuna avataan |
| `trigger_close` | boolean | Valinnainen | `true` (oletus) tai `false` | Sulkee ponnahdusikkunan kun ehdot eivät enää täyty. Oletus on sen sijaan `false`, kun käytät vanhempaa paria `trigger_entity` ja `trigger_state` |
| `open_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Laukaisee toiminnon, kun ponnahdusikkuna avautuu |
| `close_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Laukaisee toiminnon, kun ponnahdusikkuna sulkeutuu |
| `show_header` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä/piilota ponnahdusikkunan otsikko kokonaan |
| `show_previous_button` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä edellinen-painike sulkupainikkeen vieressä ja siirry takaisin edelliseen ponnahdusikkunaan, kun se on saatavilla |
| `show_close_button` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota sulkupainike pitäen otsikon muun osan näkyvissä |
| `buttons_position` | string | Valinnainen | `right` (oletus) tai `left` | Sulku- ja edellinen-painikkeiden sijainti otsikossa |
| `cards` | list | Valinnainen | Mikä tahansa Bubble Card, Home Assistant -kortti tai mukautettu kortti | Määrittää ponnahdusikkunasi sisällön. Katso alla oleva ponnahdusikkunaesimerkki. |
| Sinulla on myös pääsy [kaikkiin painikkeen asetuksiin](#painike) ponnahdusikkunan otsikkoa varten. | | Valinnainen | | Jos määrittelemättä, otsikkoa ei näytetä |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Reunuksen pyöristys ponnahdusikkunalle |
| `--bubble-pop-up-main-background-color` | `color` | Pääasiallinen taustaväri ponnahdusikkunan tuetuille elementeille |
| `--bubble-pop-up-background-color` | `color` | Ponnahdusikkunan taustaväri |
| `--bubble-backdrop-background-color` | `color` | Taustaväri taustapinnalle |
| Sinulla on myös pääsy [kaikkiin painikkeen CSS-muuttujiin](#painikkeen-asetukset) ponnahdusikkunan otsikkoa varten. | | |

</details>


### Itsenäinen ponnahdusikkunamuoto (v3.2.0+)

Versiosta v3.2.0 lähtien ponnahdusikkunat käyttävät uutta itsenäistä muotoa, jossa sisältökortit määritellään suoraan ponnahdusikkunan sisällä `cards`-valinnalla. Tämä tarjoaa paremman suorituskyvyn ja uuden osioihin perustuvan raahaa ja pudota -muokkauskokemuksen.


#### Esimerkit

<details>

<summary>Ponnahdusikkuna (itsenäinen muoto)</summary>

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

<summary>Painike ponnahdusikkunan avaamiseen</summary>

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

## Vaakasuora painikepino

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Tämä kortti on hyvä kumppani ponnahdusikkunakortille, sillä se mahdollistaa vastaavien ponnahdusikkunoiden avaamisen. Se mahdollistaa myös kojelautasi minkä tahansa sivun avaamisen. Lisäksi voit lisätä liike-/läsnäolotunnistimesi, jolloin painikkeiden järjestys mukautuu sen mukaan, mihin huoneeseen juuri saavuit. Tämä kortti on vieritettävä, pysyy näkyvissä ja toimii alatunnisteena.

> [!IMPORTANT]  
> Tämän kortin täytyy olla viimeisenä näkymässäsi (jokaisen kortin ja ponnahdusikkunan jälkeen). Se ei voi olla minkään pinon sisällä.

### Vaakasuoran painikepinon asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut valinnat | Kuvaus |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Pakollinen** | Ponnahdusikkunan hash (esim. `'#kitchen'`) heittomerkeillä ' ' tai mikä tahansa linkki | Avattava linkki |
| `1_name` | string | Valinnainen | Mikä tahansa merkkijono | Nimi painikkeellesi |
| `1_icon` | string | Valinnainen | Mikä tahansa `mdi:`-kuvake | Kuvake painikkeellesi |
| `1_entity` | string | Valinnainen | Mikä tahansa valo tai valoryhmä | Näyttää kyseisen valon värin taustalla |
| `1_pir_sensor` | string | Valinnainen | Mikä tahansa binääritunnistin | Vähintään yksi liiketunnistin tai useampi asetusta `auto_order` varten, itse asiassa se toimii myös minkä tahansa entiteettityypin kanssa, esimerkiksi voit lisätä valoryhmiä ja järjestys muuttuu viimeksi vaihtuneiden tilojen perusteella. |
| `auto_order` | boolean | Valinnainen | `true` tai `false` (oletus) | Muuttaa painikkeiden järjestystä `_pir_sensor`-tunnistimien viimeisimmän vaihtumisajan mukaan, **sen täytyy olla `false`, jos koodissasi ei ole yhtään `_pir_sensor`-tunnistinta** |
| `margin` | string | Valinnainen | Mikä tahansa CSS-arvo | Käytä tätä **vain**, jos `horizontal-buttons-stack`-korttisi ei ole hyvin keskitetty mobiilissa (esim. `13px`) |
| `width_desktop` | string | Valinnainen | Mikä tahansa CSS-arvo | Leveys työpöydällä (`100%` oletuksena mobiilissa) |
| `is_sidebar_hidden` | boolean | Valinnainen | `true` tai `false` (oletus) | Korjaa vaakasuoran painikepinon sijainnin, jos sivupalkki on piilotettu työpöydällä (vain jos olet itse tehnyt muutoksen sen piilottamiseksi) |
| `rise_animation` | boolean | Valinnainen | `true` (oletus) tai `false` | Aseta tämä arvoon `false` poistaaksesi käytöstä animaation, joka aktivoituu sivun latautuessa |
| `highlight_current_view` | boolean | Valinnainen | `true` tai `false` (oletus) | Korosta nykyinen hash / näkymä pehmeällä animaatiolla |
| `hide_gradient` | boolean | Valinnainen | `true` tai `false` (oletus) | Aseta tämä arvoon `false` piilottaaksesi liukuvärin |

> [!IMPORTANT]  
> Numerolla alkavat muuttujat määrittävät painikkeesi, vaihda vain tätä numeroa lisätäksesi lisää painikkeita (katso alla oleva esimerkki).

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Reunuksen pyöristys vaakasuoran painikepinon painikkeille |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Taustaväri vaakasuoran painikepinon painikkeille |

</details>


#### Esimerkki

<details>

<summary>Vaakasuora painikepino, joka järjestää itsensä uudelleen läsnäolotunnistimien perusteella</summary>

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

## Painike

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Tämä kortti on hyvin monikäyttöinen. Sitä voi käyttää **kytkimenä**, **liukusäätimenä**, **tilana** tai **nimi/teksti** painikkeena.

> [!TIP]
> ### Mitä eroa eri painiketyypeillä on?
>
> - **Kytkinpainike:** Tämä on oletuspainiketyyppi. Oletuksena se kytkee entiteetin tilaa ja sen taustaväri muuttuu entiteetin tilan tai valon värin mukaan. Voit muuttaa sen toimintoa **Napautuksen toiminto kortilla** osiossa.
>
> - **Liukusäädinpainike:** Tämän painiketyypin avulla voit ohjata entiteettejä, joilla on säädettävä arvoalue. Se sopii ihanteellisesti valojen himmentämiseen, ja sen täyttöväri mukautuu valon väriin. Voit käyttää sitä myös arvojen, kuten akun varaustason, näyttämiseen.
>   Liukusäätimien tuetut entiteetit:
>   - Valo (kirkkaus)
>   - Mediasoitin (äänenvoimakkuus)
>   - Kaihdin (asento)
>   - Tuuletin (prosentti)
>   - Ilmastointi (lämpötila)
>   - Input number ja number (arvo)
>   - Akkuanturi (prosentti, vain luku)
>
>   Voit myös käyttää mitä tahansa numeerisen tilan omaavaa entiteettiä poistamalla entiteettisuodattimen käytöstä **Liukusäätimen asetuksissa** ja määrittämällä sen jälkeen `min` ja `max` arvot. Tämä vaihtoehto on vain luku.
>
> - **Tilapainike:** Sopii täydellisesti anturin tai minkä tahansa entiteetin tietojen näyttämiseen. Kun painat sitä, se näyttää entiteetin "Lisätiedot" paneelin. Sen taustaväri ei muutu.
>
> - **Nimi/teksti painike:** Ainoa painiketyyppi, joka ei tarvitse entiteettiä. Sen avulla voit näyttää lyhyen tekstin, nimen tai otsikon. Voit myös lisätä siihen toimintoja. Sen taustaväri ei muutu.

### Painikkeen asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `entity` | string | **Pakollinen** | Mikä tahansa entiteetti | Ohjattava entiteetti |
| `button_type` | string | Valinnainen | `switch` (oletus), `slider`, `state` tai `name` | Painikkeen käyttäytyminen |
| `name` | string | Valinnainen | Mikä tahansa merkkijono | Painikkeen nimi, jos ei määritetty, näytetään entiteetin nimi |
| `icon` | string | Valinnainen | Mikä tahansa `mdi:` kuvake | Painikkeen kuvake, jos ei määritetty, näytetään entiteetin kuvake tai `entity-picture` |
| `force_icon` | boolean | Valinnainen | `true` tai `false` (oletus) | Anna kuvakkeelle etusija `entity-picture` kentän sijaan |
| `use_accent_color` | boolean | Valinnainen (`false` oletus) | **Vain valoille.** Käytä teeman korostusväriä valon värin sijaan.                         |
| `show_state` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä tai piilota `entity` tila |
| `show_name` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota nimi |
| `show_icon` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota kuvake |
| `show_last_changed` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän muutoksen aika |
| `show_last_updated` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän päivityksen aika |
| `show_attribute` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` attribuutti sen `name` alla |
| `attribute` | string | Valinnainen (pakollinen, jos `show_attribute` on `true`) | Attribuutti `entity` kentästä | Näytettävä attribuutti (esim. `brightness`) |
| `scrolling_effect` | boolean | Valinnainen | `true` (oletus) tai `false` | Salli tekstin vieriminen, kun sisältö ylittää säiliönsä koon |
| `button_action` | object | Valinnainen | `tap_action`, `double_tap_action` tai `hold_action`, katso alla | Salli oletustoimintojen muuttaminen painikkeen napautuksessa. |
| `tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen napautuksen toiminto, jos määrittelemätön, käytetään `more-info` |
| `double_tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen kaksoisnapautuksen toiminto, jos määrittelemätön, käytetään `none` |
| `hold_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen pitkän painalluksen toiminto, jos määrittelemätön, käytetään `more-info` |
| `card_layout` | string | Valinnainen | `normal` (oletus, ellei osionäkymässä), `large` (oletus osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin tyyliasettelu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |
| `sub_button` | object | Valinnainen | Katso [alipainikkeet](#alipainikkeet) | Lisää mukautettuja painikkeita kiinnitettynä oikealle |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Painikkeen tuettujen elementtien pääasiallinen taustaväri |
| `--bubble-button-border-radius` | `px` | Painikkeen reunan pyöristys |
| `--bubble-button-icon-border-radius` | `px` | Painikkeen kuvakesäiliön reunan pyöristys |
| `--bubble-button-icon-background-color` | `color` | Painikkeen kuvakesäiliön taustaväri |
| `--bubble-light-white-color` | `color` | Korvaa valopainikkeiden/liukusäätimien oletusvalkoisen värin |
| `--bubble-light-color` | `color` | Korvaa valopainikkeiden/liukusäätimien värin (myös RGB-valoilla) |
| `--bubble-button-box-shadow` | Katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Painikkeen varjostus |

</details>

Nämä asetukset ovat käytettävissä vain, kun `button_type` on asetettu arvoon `slider`.

<details>

<summary><b>Liukusäätimen asetukset (YAML + kuvaukset)</b></summary>

| Nimi                  | Tyyppi    | Vaatimus                     | Kuvaus                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Valinnainen                        | Liukusäätimen minimiarvo. Mukautetuille liukusäätimille.                                                    |
| `max_value`             | number  | Valinnainen                        | Liukusäätimen maksimiarvo. Mukautetuille liukusäätimille.                                                    |
| `step`                  | number  | Valinnainen                        | Liukusäätimen askelarvo.                                                                           |
| `tap_to_slide`          | boolean | Valinnainen (`false` oletus)      | Ota käyttöön aiempi liukusäätimen toiminta, jossa napautat aktivoidaksesi liukusäätimen, sen pitämisen sijaan.        |
| `relative_slide`        | boolean | Valinnainen (`false` oletus )     | Päivitä arvo suhteessa lähtöarvoon, aloituskosketuspisteen sijaan.                                      |
| `read_only_slider`      | boolean | Valinnainen (`false` oletus)      | Tee liukusäätimestä vain luku tila. Otetaan automaattisesti käyttöön joillekin entiteeteille, kuten antureille.                                        |
| `slider_live_update`    | boolean | Valinnainen (`false` oletus)      | Entiteetin tila päivittyy liu'un aikana. **Tätä ominaisuutta ei suositella kaikille entiteeteille.**        |
| `slider_fill_orientation` | string | Valinnainen | `left`, `right`, `top` tai `bottom` | Muuta liukusäätimen täyttösuuntaa. Vasemmalta oikealle kun määrittelemätön, peilattuna [oikealta vasemmalle luettavissa kielissä](#lokalisointi) |
| `slider_value_position` | string | Valinnainen | `right`, `left`, `center` tai `hidden` | Arvon näyttöpaikka. Oikealla kun määrittelemätön, ja vasemmalla [oikealta vasemmalle luettavissa kielissä](#lokalisointi) |
| `invert_slider_value` | boolean | Valinnainen (`false` oletus) | Käännä liukusäätimen suunta (100 % täyttö vastaa minimiä). Ei käytettävissä väriliukusäätimille. |
| `light_slider_type` | string | Valinnainen | `brightness` (oletus), `hue`, `saturation`, `white_temp` | **Vain valoille.** Valitse liukusäätimen tila |
| `cover_slider_type` | string | Valinnainen | `position` (oletus), `tilt_position` | **Vain kaihtimille.** Valitse liukusäätimen tila (asento tai kallistus) |
| `hue_force_saturation` | boolean | Valinnainen (`false` oletus) | **Vain valoille (Hue-tila).** Pakota kylläisyys säädettäessä sävyä |
| `hue_force_saturation_value` | number | Valinnainen (`100` oletus) | **Vain valoille (Hue-tila).** Pakotettu kylläisyysarvo (0-100) |
| `use_accent_color` | boolean | Valinnainen (`false` oletus) | **Vain valoille (kirkkaustila).** Käytä teeman korostusväriä valon värin sijaan |
| `allow_light_slider_to_0` | boolean | Valinnainen (`false` oletus)    | **Vain valoille.** Sallii liukusäätimen saavuttaa 0 %, mikä sammuttaa valon. Ei käytettävissä `tap_to_slide` kanssa. |
| `light_transition`      | boolean | Valinnainen (`false` oletus)      | **Vain valoille.** Ota käyttöön sulava kirkkauden siirtymä tuetuille valoille.                           |
| `light_transition_time` | number  | Valinnainen (`500` oletus)        | **Vain valoille.** Siirtymän kesto millisekunneissa. Vaatii `light_transition: true`.            |

</details>

#### Esimerkit

<details>

<summary>Liukusäädinpainike, joka voi ohjata valon kirkkautta</summary>

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

<summary>Painike, jossa on enemmän asetuksia</summary>

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

## Mediasoitin

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Tämän kortin avulla voit ohjata mediasoitinentiteettiä.

### Mediasoittimen asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `entity` | string | **Pakollinen** | Mikä tahansa mediasoitin | Ohjattava mediasoitin |
| `name` | string | Valinnainen | Mikä tahansa merkkijono | Mediasoittimen nimi, jos ei määritetty, näytetään entiteetin nimi |
| `icon` | string | Valinnainen | Mikä tahansa `mdi:` kuvake | Mediasoittimen kuvake, jos ei määritetty, näytetään entiteetin kuvake tai `entity-picture` |
| `force_icon` | boolean | Valinnainen | `true` tai `false` (oletus) | Anna kuvakkeelle etusija `entity-picture` kentän sijaan |
| `show_state` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä tai piilota `entity` tila |
| `show_name` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota nimi |
| `show_icon` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota kuvake |
| `show_last_changed` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän muutoksen aika |
| `show_last_updated` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän päivityksen aika |
| `show_attribute` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` attribuutti sen `name` alla |
| `attribute` | string | Valinnainen (pakollinen, jos `show_attribute` on `true`) | Attribuutti `entity` kentästä | Näytettävä attribuutti (esim. `brightness`) |
| `scrolling_effect` | boolean | Valinnainen | `true` (oletus) tai `false` | Salli tekstin vieriminen, kun sisältö ylittää säiliönsä koon |
| `min_volume` | number | Valinnainen | Mikä tahansa luku | Äänenvoimakkuuden liukusäätimen minimiarvo. |
| `max_volume` | number | Valinnainen | Mikä tahansa luku | Äänenvoimakkuuden liukusäätimen maksimiarvo. |
| `cover_background` | boolean | Valinnainen | `true` tai `false` (oletus) | Käytä sumennettua median kansikuvaa kortin taustana. |
| `button_action` | object | Valinnainen | `tap_action`, `double_tap_action` tai `hold_action`, katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Salli oletustoimintojen muuttaminen painikkeen napautuksessa. |
| `tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen napautuksen toiminto, jos määrittelemätön, käytetään `more-info`. |
| `double_tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen kaksoisnapautuksen toiminto, jos määrittelemätön, käytetään `none`. |
| `hold_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen pitkän painalluksen toiminto, jos määrittelemätön, käytetään `more-info`. |
| `main_buttons_position` | string | Valinnainen | `default` tai `bottom` | Siirrä kansikuvan toimintopainikkeet alas (kiinteä) |
| `main_buttons_full_width` | boolean | Valinnainen | `true` tai `false` | Tee alareunan toimintopainikkeista täysleveät (oletus: `true`, kun sijainti on `bottom`) |
| `main_buttons_alignment` | string | Valinnainen | `end` (oletus), `center`, `start`, `space-between` | Alareunan toimintopainikkeiden tasaus, kun ei täysleveät |
| `card_layout` | string | Valinnainen | `normal` (oletus, ellei osionäkymässä), `large` (oletus osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin tyyliasettelu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |
| `sub_button` | object | Valinnainen | Katso [alipainikkeet](#alipainikkeet) | Lisää mukautettuja painikkeita kiinnitettynä oikealle |
| `hide` | object | Valinnainen | Katso alla | Piilota painikkeita kortilta |

#### Piilotusasetukset

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Valinnainen | `true` tai `false` (oletus) | Piilota toisto/tauko-painike |
| `volume_button` | boolean | Valinnainen | `true` tai `false` (oletus) | Piilota äänenvoimakkuuspainike |
| `previous_button` | boolean | Valinnainen | `true` tai `false` (oletus) | Piilota edellinen-painike |
| `next_button` | boolean | Valinnainen | `true` tai `false` (oletus) | Piilota seuraava-painike |
| `power_button` | boolean | Valinnainen | `true` tai `false` (oletus) | Piilota virtapainike |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Mediasoittimen pääasiallinen taustaväri |
| `--bubble-media-player-border-radius` | `px` | Mediasoittimen reunan pyöristys |
| `--bubble-media-player-buttons-border-radius` | `px` | Mediasoittimen painikkeiden reunan pyöristys |
| `--bubble-media-player-slider-background-color` | `color` | Äänenvoimakkuuden liukusäätimen taustaväri |
| `--bubble-media-player-icon-border-radius` | `px` | Mediasoittimen kuvakesäiliön reunan pyöristys |
| `--bubble-media-player-icon-background-color` | `color` | Mediasoittimen kuvakesäiliön taustaväri |
| `--bubble-media-player-box-shadow` | Katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Mediasoittimen varjostus |

</details>


#### Esimerkit

<details>

<summary>Mediasoitin, jossa on kaikki asetukset</summary>

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

## Kaihdin

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Tämän kortin avulla voit ohjata `cover` entiteettejäsi.

### Kaihtimen asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `entity` | string | **Pakollinen** | Mikä tahansa kaihdin | Ohjattava kaihdin |
| `name` | string | Valinnainen | Mikä tahansa merkkijono | Kaihtimen nimi, jos ei määritetty, näytetään entiteetin nimi |
| `force_icon` | boolean | Valinnainen | `true` tai `false` (oletus) | Anna kuvakkeelle etusija `entity-picture` kentän sijaan |
| `show_state` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä tai piilota `entity` tila |
| `show_name` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota nimi |
| `show_icon` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota kuvake |
| `show_last_changed` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän muutoksen aika |
| `show_last_updated` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän päivityksen aika |
| `show_attribute` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` attribuutti sen `name` alla |
| `attribute` | string | Valinnainen (pakollinen, jos `show_attribute` on `true`) | Attribuutti `entity` kentästä | Näytettävä attribuutti (esim. `brightness`) |
| `scrolling_effect` | boolean | Valinnainen | `true` (oletus) tai `false` | Salli tekstin vieriminen, kun sisältö ylittää säiliönsä koon |
| `icon_open` | string | Valinnainen | Mikä tahansa `mdi:` kuvake | Avoimen kaihtimen kuvake, jos ei määritetty, näytetään oletuskuvake |
| `icon_close` | string | Valinnainen | Mikä tahansa `mdi:` kuvake | Suljetun kaihtimen kuvake, jos ei määritetty, näytetään oletuskuvake |
| `icon_up` | string | Valinnainen | Mikä tahansa `mdi:` kuvake | Avaa-painikkeen kuvake, jos ei määritetty, näytetään oletuskuvake |
| `icon_down` | string | Valinnainen | Mikä tahansa `mdi:` kuvake | Sulje-painikkeen kuvake, jos ei määritetty, näytetään oletuskuvake |
| `open_service` | string | Valinnainen | Mikä tahansa palvelu tai skripti | Kaihtimen avaava palvelu, oletus `cover.open_cover` |
| `stop_service` | string | Valinnainen | Mikä tahansa palvelu tai skripti | Kaihtimen pysäyttävä palvelu, oletus `cover.stop_cover` |
| `close_service` | string | Valinnainen | Mikä tahansa palvelu tai skripti | Kaihtimen sulkeva palvelu, oletus `cover.close_cover` |
| `tilt_buttons` | string | Valinnainen | `top` (oletus), `bottom`, `left`, `right`, `hidden` | Kallistuksen ohjauspainikkeiden sijainti (näkyy vain, jos kaihdin tukee kallistusta) |
| `open_tilt_service` | string | Valinnainen | Mikä tahansa palvelu tai skripti | Kallistuksen avaava palvelu, oletus `cover.open_cover_tilt` |

| `close_tilt_service` | string | Valinnainen | Mikä tahansa palvelu tai skripti | Kallistuksen sulkeva palvelu, oletus `cover.close_cover_tilt` |
| `button_action` | object | Valinnainen | `tap_action`, `double_tap_action` tai `hold_action`, katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Salli oletustoimintojen muuttaminen painikkeen napautuksessa. |
| `tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen napautuksen toiminto, jos määrittelemätön, käytetään `more-info`. |
| `double_tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen kaksoisnapautuksen toiminto, jos määrittelemätön, käytetään `none`. |
| `hold_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen pitkän painalluksen toiminto, jos määrittelemätön, käytetään `more-info`. |
| `main_buttons_position` | string | Valinnainen | `default` tai `bottom` | Siirrä ohjauspainikkeet alas (kiinteä) |
| `main_buttons_full_width` | boolean | Valinnainen | `true` tai `false` | Tee alareunan ohjauspainikkeista täysleveät (oletus: `true`, kun sijainti on `bottom`) |
| `main_buttons_alignment` | string | Valinnainen | `end` (oletus), `center`, `start`, `space-between` | Alareunan ohjauspainikkeiden tasaus, kun ei täysleveät |
| `card_layout` | string | Valinnainen | `normal` (oletus, ellei osionäkymässä), `large` (oletus osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin tyyliasettelu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |
| `sub_button` | object | Valinnainen | Katso [alipainikkeet](#alipainikkeet) | Lisää mukautettuja painikkeita kiinnitettynä oikealle |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Kaihdinkortin tuettujen elementtien pääasiallinen taustaväri |
| `--bubble-cover-border-radius` | `px` | Kaihdinkortin reunan pyöristys |
| `--bubble-cover-icon-border-radius` | `px` | Kaihdinkortin kuvakesäiliön reunan pyöristys |
| `--bubble-cover-icon-background-color` | `color` | Kaihdinkortin kuvakesäiliön taustaväri |
| `--bubble-cover-box-shadow` | Katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Kaihdinkortin varjostus |
| `--bubble-button-box-shadow` | Katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Kaihdinkortin painikkeiden varjostus |

</details>


#### Esimerkki

<details>

<summary>Kortti, joka voi ohjata rullaverhoa</summary>

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

## Valinta

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Tämän kortin avulla voit lisätä pudotusvalikon `input_select` / `select` entiteeteillesi. Tämä kortti tukee myös alipainikkeita ja kaikkia yleisiä Bubble Card ominaisuuksia.

> [!TIP]
> Voit myös käyttää valinta-alipainikkeita halutessasi, tämä ominaisuus on saatavilla kaikissa korteissa, jotka tukevat alipainikkeita.

### Valinnan asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `entity` | string | **Pakollinen** | Mikä tahansa entiteetti | Ohjattava entiteetti |
| `name` | string | Valinnainen | Mikä tahansa merkkijono | Valinnan nimi, jos ei määritetty, näytetään entiteetin nimi |
| `icon` | string | Valinnainen | Mikä tahansa `mdi:` kuvake | Valinnan kuvake, jos ei määritetty, näytetään entiteetin kuvake tai `entity-picture` |
| `force_icon` | boolean | Valinnainen | `true` tai `false` (oletus) | Anna kuvakkeelle etusija `entity-picture` kentän sijaan |
| `show_state` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä tai piilota `entity` tila |
| `show_name` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota nimi |
| `show_icon` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota kuvake |
| `show_last_changed` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän muutoksen aika |
| `show_last_updated` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` viimeisimmän päivityksen aika |
| `show_attribute` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity` attribuutti sen `name` alla |
| `attribute` | string | Valinnainen (pakollinen, jos `show_attribute` on `true`) | Attribuutti `entity` kentästä | Näytettävä attribuutti (esim. `brightness`) |
| `scrolling_effect` | boolean | Valinnainen | `true` (oletus) tai `false` | Salli tekstin vieriminen, kun sisältö ylittää säiliönsä koon |
| `tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen napautuksen toiminto, jos määrittelemätön, käytetään `more-info`. |
| `double_tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen kaksoisnapautuksen toiminto, jos määrittelemätön, käytetään `none`. |
| `hold_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen pitkän painalluksen toiminto, jos määrittelemätön, käytetään `more-info`. |
| `card_layout` | string | Valinnainen | `normal` (oletus, ellei osionäkymässä), `large` (oletus osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin tyyliasettelu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |
| `sub_button` | object | Valinnainen | Katso [alipainikkeet](#alipainikkeet) | Lisää mukautettuja painikkeita kiinnitettynä oikealle |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Valintakortin tuettujen elementtien pääasiallinen taustaväri |
| `--bubble-select-background-color` | `color` | Valintakortin taustaväri |
| `--bubble-select-list-border-radius` | `px` | Kortin pudotusvalikon reunan pyöristys |
| `--bubble-select-list-item-accent-color` | `color` | Valitun kohteen korostusväri |
| `--bubble-select-list-background-color` | `color` | Kortin pudotusvalikon taustaväri |
| `--bubble-select-list-width` | `px` | Kortin pudotusvalikon leveys |
| `--bubble-select-arrow-background-color` | `color` | Pudotusvalikon nuolen taustaväri |
| `--bubble-select-button-border-radius` | `px` | Valintapainikkeen reunan pyöristys |
| `--bubble-select-border-radius` | `px` | Valintakortin reunan pyöristys |
| `--bubble-select-icon-border-radius` | `px` | Valintakortin kuvakesäiliön reunan pyöristys |
| `--bubble-select-icon-background-color` | `color` | Valintakortin kuvakesäiliön taustaväri |
| `--bubble-select-box-shadow` | Katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Valintakortin varjostus |

</details>


#### Esimerkit

<details>

<summary>Valintakortti, jossa on kohtausten luettelo</summary>

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

## Ilmastointi

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Tämän kortin avulla voit ohjata `climate` entiteettejäsi.

> [!TIP]
> Tilanvalintavalikko on [alipainike](#alipainikkeet), joka lisätään automaattisesti korttia luotaessa. Voit sen jälkeen muokata tai poistaa sen halutessasi.

### Ilmastoinnin asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi                     | Tyyppi    | Vaatimus                         | Tuetut arvot                                  | Kuvaus                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Pakollinen**                        | Ilmastointientiteetti                                   | Ohjattava entiteetti (esim. `climate.living_room`).                                                            |
| `name`                  | string  | Valinnainen                            | Mikä tahansa merkkijono                                       | Kortin mukautettu nimi. Jos ei määritetty, näytetään entiteetin nimi.                                    |
| `icon`                  | string  | Valinnainen                            | Mikä tahansa `mdi:` kuvake                                  | Kortin mukautettu kuvake. Jos ei määritetty, käytetään entiteetin kuvaketta tai `entity-picture`.                   |
| `force_icon`            | boolean | Valinnainen                            | `true` tai `false` (oletus)                     | Antaa kuvakkeelle etusijan `entity-picture` kentän sijaan.                                                           |
| `show_state`            | boolean | Valinnainen                            | `true` tai `false` (oletus)                     | Näytä tai piilota `entity` nykyinen tila.                                                                 |
| `show_name`             | boolean | Valinnainen                            | `true` (oletus) tai `false`                     | Näytä tai piilota entiteetin nimi.                                                                            |
| `show_icon`             | boolean | Valinnainen                            | `true` (oletus) tai `false`                     | Näytä tai piilota kuvake.                                                                                          |
| `hide_target_temp_low`  | boolean | Valinnainen (vain entiteeteille, jotka tukevat `target_temp_low` kenttää) | `true` tai `false` (oletus) | Piilottaa alarajan tavoitelämpötilan säätimen, jos `entity` tukee sitä.                                          |
| `hide_target_temp_high` | boolean | Valinnainen (vain entiteeteille, jotka tukevat `target_temp_high` kenttää)| `true` tai `false` (oletus) | Piilottaa ylärajan tavoitelämpötilan säätimen, jos `entity` tukee sitä.                                         |
| `state_color`           | boolean | Valinnainen                            | `true` tai `false` (oletus)                     | Käyttää vakiotaustaväriä, kun ilmastointientiteetti on päällä.                                              |
| `step` | number | Valinnainen | Mikä tahansa luku | Lämpötilan askel. |
| `min_temp` | number | Valinnainen | Mikä tahansa luku | Minimilämpötila. |
| `max_temp` | number | Valinnainen | Mikä tahansa luku | Maksimilämpötila. |
| `button_action` | object | Valinnainen | `tap_action`, `double_tap_action` tai `hold_action`, katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Salli oletustoimintojen muuttaminen painikkeen napautuksessa. |
| `tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen napautuksen toiminto, jos määrittelemätön, käytetään `more-info`. |
| `double_tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen kaksoisnapautuksen toiminto, jos määrittelemätön, käytetään `none`. |
| `hold_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä kuvakkeen pitkän painalluksen toiminto, jos määrittelemätön, käytetään `more-info`. |                              |
| `main_buttons_position` | string | Valinnainen | `default` tai `bottom` | Siirrä ilmastoinnin toimintopainikkeet alas (kiinteä) |
| `main_buttons_full_width` | boolean | Valinnainen | `true` tai `false` | Tee alareunan toimintopainikkeista täysleveät (oletus: `true`, kun sijainti on `bottom`) |
| `main_buttons_alignment` | string | Valinnainen | `end` (oletus), `center`, `start`, `space-between` | Alareunan toimintopainikkeiden tasaus, kun ei täysleveät |
| `card_layout` | string | Valinnainen | `normal` (oletus, ellei osionäkymässä), `large` (oletus osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin tyyliasettelu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |
| `sub_button`            | object  | Valinnainen                            | Katso [alipainikkeet](#alipainikkeet)                | Lisää mukautettuja painikkeita kiinnitettynä oikealle. Hyödyllinen ilmastoinnin tilanvalintavalikossa.                                  |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Ilmastointikortin tuettujen elementtien pääasiallinen taustaväri |
| `--bubble-climate-border-radius` | `px` | Ilmastointikortin tuettujen elementtien reunan pyöristys |
| `--bubble-climate-button-background-color` | `color` | Ilmastointikortin painikkeiden taustaväri |
| `--bubble-climate-icon-border-radius` | `px` | Ilmastointikortin kuvakesäiliön reunan pyöristys |
| `--bubble-state-climate-fan-only-color` | `color` | Peittoväri fan-only tilalle |
| `--bubble-state-climate-dry-color` | `color` | Peittoväri dry tilalle |
| `--bubble-state-climate-cool-color` | `color` | Peittoväri cool tilalle |
| `--bubble-state-climate-heat-color` | `color` | Peittoväri heat tilalle |
| `--bubble-state-climate-auto-color` | `color` | Peittoväri auto tilalle |
| `--bubble-state-climate-heat-cool-color` | `color` | Peittoväri heat-cool tilalle |
| `--bubble-climate-accent-color` | `color` | Ilmastointikortin korostusväri |
| `--bubble-climate-box-shadow` | Katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ilmastointisäiliön varjostus. |

</details>


#### Esimerkit

<details>

<summary>Ilmastointikortti, jossa on HVAC-tilojen pudotusvalikko</summary>

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

## Kalenteri

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Tämän kortin avulla voit näyttää kalenterientiteettisi. Sen sisältö on vieritettävä, joten voit selata tulevia tapahtumia helposti.

### Kalenterin asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi                | Tyyppi    | Vaatimus  | Tuetut arvot                               | Kuvaus                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Valinnainen     | Mikä tahansa luku (minimi: 1)                        | Kalenteripäivien määrä, joilta tapahtumia haetaan, nykyhetkestä N:nnen päivän loppuun (oletus: 7) |
| `entities`          | object  | **Pakollinen** | Kalenterientiteettiobjekti (katso alla)            | Ohjattava entiteetti (esim. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Pakollinen** | Kalenterientiteetti                               | Näytettävä kalenterientiteetti                                                          |
| `entities.color`    | string  | Valinnainen     | Väri                                         | Mukautettu väri kalenterin lastulle. Jos ei määritetty, väri valitaan automaattisesti |
| `days`              | number  | Valinnainen     | Mikä tahansa luku (minimi: 1)                         | Kalenteripäivien määrä, joilta tapahtumia haetaan, nykyhetkestä N:nnen päivän loppuun (oletus: 7) |
| `limit`             | number  | Valinnainen     | Luku                                        | Kortilla näytettävien tapahtumien määrä                                  |
| `show_end`          | boolean | Valinnainen     | `true` tai `false` (oletus)                     | Näytä tai piilota tapahtumien päättymisaika                                                    |
| `show_progress`     | boolean | Valinnainen     | `true` (oletus) tai `false`                     | Näytä tai piilota tapahtuman edistymispalkki                                                     |
| `show_started_events`| boolean | Valinnainen     | `true` (oletus) tai `false`                     | Näytä tai piilota tapahtumat, jotka ovat parhaillaan käynnissä. Monipäiväiset tapahtumat arvioidaan päivä kerrallaan, joten vain meneillään oleva päivä piilotetaan ja tulevat päivät pysyvät näkyvissä |
| `scrolling_effect`  | boolean | Valinnainen | `true` (oletus) tai `false` | Salli tekstin vieriminen, kun sisältö ylittää säiliönsä koon |
| `event_action` | object | Valinnainen | `tap_action`, `double_tap_action` tai `hold_action`, katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Salli toimintojen lisääminen tapahtuman napautukseen. |
| `tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä päivän napautuksen toiminto, jos määrittelemätön, käytetään `none`. |
| `double_tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä päivän kaksoisnapautuksen toiminto, jos määrittelemätön, käytetään `none`. |
| `hold_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä päivän pitkän painalluksen toiminto, jos määrittelemätön, käytetään `none`. |
| `card_layout` | string | Valinnainen | `normal` (oletus, ellei osionäkymässä), `large` (oletus osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin tyyliasettelu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |
| `sub_button` | object | Valinnainen | Katso [alipainikkeet](#alipainikkeet) | Lisää mukautettuja painikkeita kiinnitettynä oikealle |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja                                  | Odotettu arvo | Kuvaus                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Kalenterikortin tuettujen elementtien pääasiallinen taustaväri  |
| `--bubble-calendar-border-radius`         | `px`           | Kalenterikortin tuettujen elementtien reunan pyöristys |
| `--bubble-calendar-height`                | `px`           | Kalenterikortin korkeus                                        |

</details>

#### Esimerkit

<details>

<summary>Kalenterikortti, jossa on rajattu määrä tapahtumia</summary>

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

<summary>Kalenterikortti, jossa on päättymisaika ja edistymispalkki</summary>

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


## Erotin

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Tämä kortti on yksinkertainen erotin, jolla voit jakaa ponnahdusikkunasi kategorioihin tai osioihin, esimerkiksi valot, laitteet, kaihtimet, asetukset, automaatiot...

### Erottimen asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `name` | string | Valinnainen mutta suositeltu | Mikä tahansa merkkijono | Erottimen nimi |
| `icon` | string | Valinnainen mutta suositeltu | Mikä tahansa `mdi:`-kuvake | Erottimen kuvake |
| `card_layout` | string | Valinnainen | `normal` (oletus, kun ei ole osionäkymässä), `large` (oletus, kun on osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin ulkoasu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |
| `sub_button` | object | Valinnainen | Katso [alipainikkeet](#alipainikkeet) | Lisää oikealle kiinnitettyjä mukautettuja painikkeita |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Erottimen viivan taustaväri |

</details>

#### Esimerkki

<details>

<summary>Erotin/jakaja "Kaihtimet"-osiolle</summary>

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

## Tyhjä sarake

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Tämä kortti täyttää tyhjän sarakkeen. Tämä on hyödyllistä, jos ponnahdusikkunassasi on `horizontal-stack`, jossa on vain yksi kortti. Katso tämän kuvakaappauksen oikeaa alakulmaa nähdäksesi (tai olla näkemättä) sen.

### Tyhjän sarakkeen asetukset

Tällä kortilla ei ole asetuksia eikä se tue [tyylejä](#tyylit), mutta se tukee HA:n osionäkymän asetteluvaihtoehtoja.

#### Esimerkki

<details>

<summary>Tyhjä sarake vaakasuorassa pinossa</summary>

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

## Vain alipainikkeet

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Tämä kortti on omistettu vain alipainikkeille. Se sopii täydellisesti valikoihin, pikatoimintoihin, informatiivisiin chippeihin tai sivun alareunaan kiinnitettyyn palkkiin.

> [!IMPORTANT]  
> Tämä kortti käyttää uutta alipainikkeiden skeemaa. Käytä `sub_button.bottom`-osiota painikkeiden määrittelyyn. `sub_button.main`-osio jätetään huomiotta.

### Vain alipainikkeet -asetukset

<details>

<summary><b>Asetukset (YAML + kuvaukset)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Pakollinen** | Katso [alipainikkeet](#alipainikkeet) | Määrittele alipainikkeesi `bottom`-osion avulla |
| `hide_main_background` | boolean | Valinnainen | `true` tai `false` (oletus) | Poista kortin tausta |
| `footer_mode` | boolean | Valinnainen | `true` tai `false` (oletus) | Kiinnitä kortti sivun alareunaan |
| `footer_full_width` | boolean | Valinnainen | `true` tai `false` (oletus) | Tee palkista koko leveyden levyinen (100 %) |
| `footer_width` | number | Valinnainen | Mikä tahansa luku | Palkin leveys pikseleinä, kun `footer_full_width` on `false` |
| `footer_bottom_offset` | number | Valinnainen | Mikä tahansa luku | Etäisyys sivun alareunasta pikseleinä (oletus: `16`) |
| `card_layout` | string | Valinnainen | `normal` (oletus, kun ei ole osionäkymässä), `large` (oletus, kun on osionäkymässä), `large-2-rows`, `large-sub-buttons-grid` | Kortin ulkoasu, katso [korttien asettelut](#korttien-asettelut) |
| `rows` | number | Valinnainen | Mikä tahansa luku | Rivien määrä (korkeus) (esim. `2`) |

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Palkin leveys, kun `footer_full_width` on `false` |
| `--bubble-footer-bottom` | `px` | Palkin alareunan etäisyys |
| `--bubble-footer-box-shadow` | katso [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Palkin säiliön varjostus |

</details>

#### Esimerkkejä

<details>

<summary>Chip-tyyliset painikkeet (kuten kuvakaappauksessa)</summary>

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

<summary>Kiinteä alapalkkivalikko</summary>

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

## Alipainikkeet

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Jokaisessa kortissa, joka tukee tätä ominaisuutta, voit lisätä alipainikkeita mukauttaaksesi korttejasi entisestään. Voit esimerkiksi luoda painikkeen, joka ohjaa robotti-imuria, sääkorttia tai lähes mitä tahansa muuta keksimääsi. Nämä alipainikkeet tukevat napautustoimintoja ja useimpia painikkeen asetuksia.

Alipainikkeet tukevat nyt kolmea tyyppiä: **Oletus (painike)**, **Liukusäädin** ja **Pudotusvalikko / valinta**. Voit yhdistellä tyyppejä samassa kortissa, sijoittaa alipainikkeita ylä- tai alaosaan ja järjestää ne ryhmiin monimutkaisempia asetteluja varten.

#### Alipainikkeiden sijoittelu ja ryhmät

<details>

<summary><b>Alipainikkeiden rakenne (main / bottom + ryhmät)</b></summary>

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

**Huomiot:**
- `main` ja `bottom` ovat kaksi erillistä osiota. Alaosan alipainikkeet on kiinnitetty kortin alareunaan.
- `main_layout` ja `bottom_layout` hyväksyvät arvot `inline` (oletus) tai `rows`, jolla ryhmät pinotaan pystysuunnassa.
- Ryhmät ovat objekteja, joissa on `group`-taulukko ja valinnainen `buttons_layout` (`inline` tai `column`).
- `justify_content` on käytettävissä **vain alaosan ryhmille** (`start`, `center`, `end`, `fill`).
- Kun alaosan alipainikkeita on käytössä, kortin ulkoasu vaihtuu automaattisesti arvoon `large`, ellet määritä muuta asettelua erikseen.
- Vanhat `sub_button`-taulukot ovat edelleen tuettuja ja niitä käsitellään `main`-osiona.

</details>

### Alipainikkeiden asetukset

<details>

<summary><b>Asetukset (YAML + kuvaus)</b></summary>

| Nimi | Tyyppi | Vaatimus | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- | --- |
| `entity` | string | Valinnainen | Mikä tahansa entiteetti | Ohjattava entiteetti |
| `name` | string | Valinnainen | Mikä tahansa merkkijono | Alipainikkeen nimi, jos ei määritetty, näytetään entiteetin nimi |
| `icon` | string | Valinnainen | Mikä tahansa `mdi:`-kuvake | Alipainikkeen kuvake, jos ei määritetty, näytetään entiteetin kuvake tai entiteetin kuva |
| `force_icon` | boolean | Valinnainen | `true` tai `false` (oletus) | Pakota kuvake, vaikka entiteetin kuva olisi saatavilla |
| `sub_button_type` | string | Valinnainen | `default`, `slider` tai `select` | Valitse alipainikkeen tyyppi |
| `show_background` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä alipainikkeelle tausta, se muuttaa väriään entiteetin tilan mukaan |
| `state_background` | boolean | Valinnainen | `true` (oletus) tai `false` | Käytä tilan väriä, kun entiteetti on `on` |
| `light_background` | boolean | Valinnainen | `true` (oletus) tai `false` | Käytä valon väriä taustana, kun se on saatavilla |
| `show_state` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä tai piilota `entity`-entiteetin tila |
| `show_name` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä tai piilota nimi |
| `show_icon` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota kuvake |
| `show_last_changed` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity`-entiteetin viimeisin muutosaika |
| `show_last_updated` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity`-entiteetin viimeisin päivitysaika |
| `show_attribute` | boolean | Valinnainen | `true` tai `false` (oletus) | Näytä `entity`-entiteetin attribuutti sen `name`-arvon alla |
| `attribute` | string | Valinnainen (pakollinen, jos `show_attribute` on `true`) | Attribuutti `entity`-entiteetiltäsi | Näytettävä attribuutti (esim. `brightness`) |
| `select_attribute` | string | Valinnainen | Attribuuttilista `entity`-entiteetiltäsi (katso tuetut arvot yllä) | Tämä attribuuttilista avaa pudotusvalikon, kun sitä napautetaan (esim. `effect_list`) |
| `show_arrow` | boolean | Valinnainen | `true` (oletus) tai `false` | Näytä tai piilota pudotusvalikon nuoli valinta-alipainikkeille |
| `scrolling_effect` | boolean | Valinnainen | `true` (oletus) tai `false` | Salli tekstin vieriminen, kun sisältö ylittää säiliön koon |
| `tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä alipainikkeen napautuksen toiminto, jos ei määritetty, käytetään arvoa `more-info`. |
| `double_tap_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä alipainikkeen kaksoisnapautuksen toiminto, jos ei määritetty, käytetään arvoa `none`. |
| `hold_action` | object | Valinnainen | Katso [toiminnot](#napautuksen-kaksoisnapautuksen-ja-pitkän-painalluksen-toiminnot) | Määritä alipainikkeen pitkän painalluksen toiminto, jos ei määritetty, käytetään arvoa `more-info`. |
| `fill_width` | boolean | Valinnainen | `true` tai `false` | Täytä käytettävissä oleva leveys (oletus: `false` main-osiolle, `true` bottom-osiolle) |
| `width` | number tai string | Valinnainen | Mikä tahansa luku tai CSS-pituus | Mukautettu leveys (`px` main-osiolle, `%` bottom-osiolle oletuksena) |
| `custom_height` | number | Valinnainen | Mikä tahansa luku | Mukautettu korkeus pikseleinä |
| `content_layout` | string | Valinnainen | `icon-left` (oletus), `icon-top`, `icon-bottom`, `icon-right` | Kuvakkeen sijainti alipainikkeen sisällä |
| `always_visible` | boolean | Valinnainen | `true` tai `false` (oletus) | **Vain liukusäädin.** Näytä liukusäädin aina napautuksella avaamisen sijaan |
| `show_button_info` | boolean | Valinnainen | `true` tai `false` (oletus) | **Vain liukusäädin.** Näytä kuvake/nimi/tila, kun `always_visible` on käytössä |
| `visibility` | object tai list | Valinnainen | Katso [ehdot](#ehdot) | Näytä tai piilota alipainike ehtojen perusteella |
| `hide_when_parent_unavailable` | boolean | Valinnainen | `true` tai `false` (oletus) | Piilota alipainike, jos ylätason kortin entiteetti ei ole saatavilla |
| `css_class` | string | Valinnainen | Mikä tahansa merkkijono | Ylimääräinen CSS-luokka alipainikkeessa, jotta voit kohdistaa siihen [tyyleissäsi](#tyylit) nimestä riippumatta (esim. `My value` antaa `.my-value`) |

</details>

<details>

<summary><b>Liukusäädin-alipainikkeen asetukset (samat kuin painikkeiden liukusäätimillä)</b></summary>

<br>

Liukusäädin-alipainikkeet tukevat samoja liukusäätimen asetuksia kuin painikkeiden liukusäätimet, mukaan lukien:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS-muuttujat (katso <a href="#tyylit">Tyylit</a>)</b></summary>

| Muuttuja | Odotettu arvo | Kuvaus |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Alipainikkeiden kulmien pyöristys |
| `--bubble-sub-button-background-color` | `color` | Alipainikkeiden taustaväri |
| `--bubble-sub-button-outline` | `box-shadow` | Ääriviiva joka lisätään alipainikkeeseen tai liukusäätimeen, vain silloin kun kyseinen elementti piirtyy samalla värillä kuin sen takana oleva kortti, mikä tekisi siitä näkymättömän (aseta `none` poistaaksesi sen) |
| `--bubble-sub-slider-border-radius` | `px` | Liukusäädin-alipainikkeiden kulmien pyöristys |
| `--bubble-sub-slider-background-color` | `color` | Liukusäädin-alipainikkeiden taustaväri |
| `--bubble-sub-slider-height` | `px` | Aina näkyvien liukusäädin-alipainikkeiden korkeus |
| `--bubble-sub-slider-outline` | `box-shadow` | Vain liukusäädin-alipainikkeiden ääriviiva, palautuu arvoon `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Tekstin väri vaaleilla alipainiketaustoilla |

</details>

#### Esimerkkejä

<details>

<summary>Painike, jossa on alipainikkeita ja joka muodostaa robotti-imurikortin (kuten kuvakaappauksessa)</summary>

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

<summary>Painikkeen liukusäädin, jossa on alipainike kirkkauden näyttämiseen ja toinen valon kytkemiseen (kuten kuvakaappauksessa)</summary>

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

<summary>Painike, joka näyttää sisä- ja ulkolämpötilan sekä tämän ja huomisen päivän sään (kuvakaappaus mukana)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Minulla on huono tuuri, koska on aina pilvistä, mutta kaikki kuvakkeet vaihtuvat säätilan mukaan.

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

## Korttien asettelut

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card tukee täysin Home Assistantin osionäkymää, joten voit muuttaa kortin ulkoasua tehdäksesi kortista suuremman ja myös muuttaa sarakkeiden tai rivien määrää, jonka kortin tulisi viedä osionäkymässäsi (vain korteissa, jotka tukevat tätä ominaisuutta). Nämä asettelut ovat tuettuja myös kaikissa muissa näkymätyypeissä.

<details>

<summary><b>Käytettävissä olevat korttien asettelut</b></summary>

| Asettelu | Kuvaus |
| --- | --- |
| `normal` | Tavallinen asettelu (ei optimoitu osionäkymälle) |
| `large` | Suurempi asettelu, joka mukautuu valittuihin riveihin osionäkymässä (optimoitu osionäkymälle) |
| `large-2-rows` | Suurempi asettelu, jossa on 2 riviä alipainikkeita ja joka mukautuu valittuihin riveihin osionäkymässä (optimoitu osionäkymälle) |
| `large-sub-buttons-grid` | Tämä asettelu näyttää alipainikkeet ruudukossa, `rows`-arvon tulee olla vähintään `2`.

</details>

#### Esimerkkejä

<details>

<summary>Suuri painike, joka näyttää energiatilastot ja 2 riviä alipainikkeita (kuvakaappaus mukana)</summary>

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

<summary>Suuri painike, jossa on useita rivejä ja 12 alipainiketta</summary>

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

## Ehdot

Osa asetuksista toimii ehdoilla, jotka kirjoitetaan täsmälleen samoin kuin Home Assistantin [ehdollisen kortin](https://www.home-assistant.io/dashboards/conditional/) ehdot:

- `visibility` [alipainikkeessa](#alipainikkeet), sen näyttämiseen tai piilottamiseen
- `trigger` [ponnahdusikkunassa](#ponnahdusikkuna), sen avaamiseen kun ehdot täyttyvät
- `checkConditionsMet(conditions, hass)` [malliesi](#mallit) sisällä, kun tarvitset vastauksen omassa koodissasi

Kaikki Home Assistantin ehtotyypit arvioidaan: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, sekä ryhmät `and`, `or` ja `not`. Myös Home Assistantin ehtojen rakentajan ehdot toimivat, ne jotka on nimetty toimialueensa mukaan kuten `sun.is_up`, `light.is_on`, `zone.in_zone` tai `temperature.is_value`, asetuksineen `target`, `options`, `behavior` ja `for`.

<details>

<summary><b>Esimerkki</b></summary>

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
> Ehdot arvioidaan selaimessasi, joten ne harvat jotka tarvitsevat Home Assistant -palvelinta eivät voi olla tarkkoja: auringonnousu ja auringonlasku luetaan `sun.sun`-entiteetistä sen sijaan että ne laskettaisiin uudelleen, ja `for`-kesto mitataan viimeisimmästä tilanmuutoksesta, ilman recorderin historiaa.
>
> `view_columns` hyväksytään mutta se läpäisee aina, koska Bubble Card ei koskaan ole se joka asettelee näkymäsi sarakkeet. Ehtotyyppi jota Bubble Card ei tunne ilmoittaa itsestään kerran selaimesi konsolissa sen sijaan että epäonnistuisi hiljaa, joten erotat kirjoitusvirheen puuttuvasta ominaisuudesta.

<br>

---

<br>

## Napautuksen, kaksoisnapautuksen ja pitkän painalluksen toiminnot

Voit myös käyttää Home Assistantin oletusarvoisia napautustoimintoja, kaksoisnapautustoimintoja ja pitkän painalluksen toimintoja korteissa, jotka tukevat tätä ominaisuutta. Tämä mahdollistaa esimerkiksi "lisätietoja"-ikkunan näyttämisen pitämällä painikkeen kuvaketta painettuna tai palvelun suorittamisen, kun alipainiketta painetaan.

**Huomio: Kun `double_tap_action` on määritetty, tavallisessa `tap_action`-toiminnossa on 200 ms:n viive, jotta kaksoisnapautus voidaan havaita.
Jos tämä viive on ei-toivottu, aseta `double_tap_action` arvoon `none` poistaaksesi kaksoisnapautuksen käsittelyn käytöstä.**

### Toiminnon asetukset

<details>

<summary><b>Asetukset (YAML + kuvaus)</b></summary>

| Nimi | Tyyppi | Tuetut arvot | Kuvaus |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Suoritettava toiminto |
| `target` | object |  | Toimii vain `call-service`-toiminnon kanssa. Noudattaa [home-assistant-syntaksia](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Mikä tahansa kojelautasi polku | Polku, johon siirrytään (esim. `'#kitchen'` ponnahdusikkunan avaamiseksi), kun toiminto on määritetty arvoon navigate |
| `url_path` | string | Mikä tahansa linkki | Napsautuksella avattava URL-osoite (esim. `https://www.google.com`), kun toiminto on `url` |
| `service` | string | Mikä tahansa palvelu | Kutsuttava palvelu (esim. `media_player.media_play_pause`), kun `action` on määritetty arvoon `call-service` |
| `data` tai `service_data` | object | Mikä tahansa palvelun data | Mukaan otettava palvelun data (esim. `entity_id: media_player.kitchen`), kun `action` on määritetty arvoon `call-service` |
| `confirmation` | object | Katso [vahvistus](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Näytä vahvistusponnahdusikkuna (ei Bubble Cardin oma), ohittaa oletusarvoisen `confirmation`-objektin |

</details>

#### Esimerkki

<details>

<summary>Painike ponnahdusikkunan avaamiseen</summary>

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

## Tyylit

Voit lisätä mukautettuja tyylejä muokkaamaan kaikkien korttien CSS:ää **ilman card-modia** neljällä tavalla:

- Muokkaimessa siirry korttiin, jota haluat muokata, ja siirry kohtaan _Styling options > Custom styles & JS templates_, ja lisää mukautetut tyylisi (katso vinkit ja esimerkit alla).
- Muokkaimessa (tai [YAML:ssa](#moduulit)) siirry korttiin, jota haluat muokata, ja siirry kohtaan _Modules_, ja luo uusi moduuli (se tulee saataville kaikille korteille), tai siirry **Module Storeen** asentaaksesi jonkin saatavilla olevista moduuleista (lisätietoja moduuleista löytyy [alempaa](#moduulit)).
- [Teematiedostossa](https://www.home-assistant.io/integrations/frontend/#defining-themes) lisäämällä CSS-muuttujia YAML:iin (nämä löytyvät kunkin kortin dokumentaatiosta yllä). Tämä mahdollistaa yleiset muutokset.

  <details>
  
  <summary>Esimerkki</a></summary>
  
  <br>

  Älä kopioi `Bubble:` riviä, se on käyttämäsi teeman nimi. Sinun tulee myös poistaa `--` muuttujien alusta.

  Sinun täytyy suorittaa [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) toiminto päivittääksesi teeman muutosten jälkeen.

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
  
- YAML:ssa lisäämällä `styles: |` ja sen jälkeen mukautetut tyylisi (katso vinkit ja esimerkit alla).

> [!TIP]  
> **Ymmärtääksesi mitä tyyliluokkia voidaan muokata**, voit katsoa tämän repositorion [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) kansiota. Jokaisessa korttikansiossa löydät tiedoston nimeltä `styles.css`. Nämä tiedostot sisältävät kaikki käytetyt tyylit. Tämä mahdollistaa paljon enemmän kuin CSS-muuttujat, mutta se täytyy lisätä erikseen jokaiseen korttiin.
> 
> Löydät myös paljon [esimerkkejä yhteisöltä](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), tai joitakin [Home Assistant foorumilta](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) hieman etsimällä.
>
> Bubble teema Home Assistantille (kuten kuvakaappauksissa) löytyy [täältä](https://github.com/Clooos/Bubble).
>
> Opetusvideo on tulossa pian [YouTube-kanavalleni](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Huomaa, että saatat joutua lisäämään `!important;` joihinkin jo määriteltyihin CSS-tyyleihin (katso esimerkit alla).

> [!TIP]  
> Alipainikkeita voidaan kohdistaa nimipohjaisilla luokilla. Esimerkiksi alipainike nimeltä "My sub-button" voidaan tyylitellä luokalla `.my-sub-button`. Liukusäätimen alipainikkeet paljastavat myös luokat `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` jne.
>
> Nimipohjainen luokka muuttuu kun nimeät alipainikkeen uudelleen, ja se käännetään kun nimikin käännetään. Aseta alipainikkeeseen `css_class`, niin saat oman luokan joka ei koskaan liiku, nimestä ja kielestä riippumatta.

#### Esimerkkejä

<details>

<summary>Fonttikoon muuttaminen mille tahansa Bubble Cardille</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Yksittäisen painikkeen taustavärin muuttaminen vaakasuorassa painikepinossa</summary>

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

<summary>Kortin taustavärin muuttaminen</summary>

<br>

Tämä toimii kaikissa Bubble Card tyypeissä (paitsi ponnahdusikkunoissa):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Tämä tekee saman vain painikekortissa (se toimii ponnahdusikkunan otsikossa): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Muuttaaksesi väriä kun se on `on`, katso mallipohjaesimerkit alla.

</details>

<details>

<summary>Painikkeen liukusäätimen värin muuttaminen</summary>

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

<summary>Erottimen viivan värin muuttaminen</summary>

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

<summary>Kuvakkeen värin muuttaminen</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Vaakasuoran painikepinon kuvakkeelle.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Kuvakekontin taustavärin muuttaminen</summary>

<br>

Tämä toimii kaikissa Bubble Card tyypeissä (paitsi ponnahdusikkunoissa):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Tämä tekee saman ponnahdusikkunan otsikolle: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Alipainikkeiden koon muuttaminen (täydellinen suurelle asettelulle)</summary>

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

<summary>Toisen alipainikkeen taustavärin muuttaminen</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Kuvakkeen koon muuttaminen</summary>

<br>

Pääkuvakkeelle.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Alipainikkeiden kuvakkeille.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Kuvan käyttäminen kuvakkeen sijaan alipainikkeessa</summary>

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

Lataa tämä kuva vain "pictures" kansioon (tai haluamallasi nimellä) Home Assistantin "www" kansioon.

</details>

<details>

<summary>Edistynyt esimerkki: Vaakasuoran alipainikerivin luominen (kuvakaappaus mukana)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Rakastan todella tätä, käytän sitä otsikkona kojelaudassani.

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

## Mallit

**Bubble Card ei tue Jinja-malleja**, mutta edistyneet käyttäjät voivat lisätä malleja JS:ssä suoraan [mukautettuihin tyyleihinsä](#tyylit). Tämä mahdollistaa esimerkiksi kuvakkeen, tekstien tai elementin värien dynaamisen muuttamisen, elementin (kuten alipainikkeen) ehdollisen näyttämisen tai piilottamisen, tai lähes mitä tahansa tilan, attribuutin ja muun perusteella.

> [!TIP]  
> Lisätietoja JS-malleista [täältä](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Neuvoni on **katsoa aina selaimesi konsolia**, jotta olet varma että kaikki toimii oikein.

> [!IMPORTANT]  
> **Kaikki mallit, jotka eivät muokkaa CSS-ominaisuutta, täytyy sijoittaa loppuun! Kuten kuvakkeen, tekstin tai minkä tahansa elementin muokkaaminen.**

#### Käytettävissä olevat muuttujat ja funktiot

<details>

<summary>Muuttujat</summary>

<br>

Sinulla on pääsy näihin muuttujiin useimmissa korteissa:

- `state` palauttaa määrittelemäsi `entity` tilan.
  
- `entity` palauttaa määrittelemäsi kohteen, kuten `switch.test` tässä esimerkissä.
  
- `icon` voidaan käyttää näin muuttamaan kuvaketta `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` palauttaa ensimmäisen alipainikkeesi määritellyn `entity` tilan, `[0]` on ensimmäisen alipainikkeen tila, `[1]` toisen...
  
- `subButtonIcon[0]` voidaan käyttää näin muuttamaan ensimmäisen alipainikkeen kuvaketta `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` on ensimmäisen alipainikkeen kuvake, `[1]` toisen...
  
- `card` palauttaa korttielementin DOM:ssa.
  
- `hass` on edistynyt muuttuja, joka antaa sinulle vieläkin enemmän hallintaa, esimerkiksi voit palauttaa kohteen `light.kitchen` tilan näin `hass.states['light.kitchen'].state` tai attribuutin näin `hass.states[entity].attributes.brightness`.

- `this` palauttaa paljon hyödyllistä tietoa asennuksestasi ja kojelaudastasi, käytä tätä vain jos tiedät mitä teet.

</details>

<details>

<summary>Funktiot</summary>

<br>

Sinulla on pääsy kaikkiin globaaleihin JS-funktioihin, mutta myös näihin:

- `getWeatherIcon` voidaan käyttää palauttamaan säätä kuvaava kuvake tilan perusteella, joka palauttaa sään. Voit esimerkiksi tehdä näin `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` muuttamaan kolmannen alipainikkeen kuvakkeen tämän päivän säätä vastaavaksi kuvakkeeksi, `.forecast[1]?.condition` on huomiselle...

  Sinun täytyy luoda mallianturi (template sensor) tätä varten. Tässä mitä voit lisätä `configuration.yaml` tiedostoosi:
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
- `checkConditionsMet(conditions, hass)` palauttaa `true` kun [ehtojen](#ehdot) luettelo täyttyy, esimerkiksi `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` voidaan käyttää kääntämään tila (voidaan käyttää myös hakemaan tilan yksikkö ilman että se täytyy lisätä manuaalisesti).
- `hass.formatEntityAttributeValue(state, "attribute")` voidaan käyttää kääntämään attribuutti (voidaan käyttää myös hakemaan tilan yksikkö ilman että se täytyy lisätä manuaalisesti).

</details>

#### Esimerkkejä

Löydät paljon esimerkkejä alla, mutta löydät myös hyvin edistyneitä malleja [Patreon-sivultani](https://www.patreon.com/c/Clooos), kuten yhden (suosikkini), joka mahdollistaa jopa neljä ehdollista merkkiä kortin kuvakkeiden ympärille sijoitettuna. Se on myös hieno tapa oppia kaikista Bubble Card mukautettujen tyylien ja mallien mahdollisuuksista!

<details>
<summary>Esimerkkejä Patreon-sivultani</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistantin kaltaisten merkkien lisääminen mihin tahansa korttiin</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Muotoillun päivämäärän ja kellonajan näyttäminen erottimessa ilman kohdetta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Alipainikkeen tilan näyttäminen kahdella rivillä</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Valinta-alipainikkeen sisällä olevien nimikkeiden ja kuvakkeiden mukauttaminen</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Pysyvän muistutuksen ponnahdusikkunan lisääminen, joka näkyy vain tarvittaessa</a>
</p>

<br>

</details>

<details>

<summary>Painikkeen taustavärin muuttaminen punaiseksi kun se on <code>off</code> ja siniseksi kun se on <code>on</code></summary>

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

<summary>Painikkeen taustavärin muuttaminen kohteen perusteella vaakasuorassa painikepinossa</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Alipainikkeen näyttäminen/piilottaminen ehdollisesti</summary>

<br>

Tämä näyttää ensimmäisen alipainikkeen vain kun robotti-imurini on jumissa.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Tämä näyttää alipainikkeen kun akku on alle 10%. Hyödyllinen alipainikkeen kanssa, joka näyttää "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Kuvakkeen tai alipainikkeen kuvakkeen muuttaminen ehdollisesti</summary>

<br>

Tämä muuttaa painikkeen kuvakkeen vain kun robotti-imuri on jumissa.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Tämä muuttaa ensimmäisen alipainikkeen kuvakkeen vain kun robotti-imuri on jumissa.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Kuvakkeen tai alipainikkeen kuvakkeen värin muuttaminen ehdollisesti</summary>

<br>

Tämä muuttaa painikkeen kuvakkeen värin sen tilan perusteella.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Tämä muuttaa alipainikkeen kuvakkeen värin sen tilan perusteella. `.bubble-sub-button-1` on ensimmäinen alipainike, korvaa `1` jos haluat muuttaa toisen alipainikkeen kuvaketta.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Tuulettimen kuvakkeen animointi ehdollisesti</summary>

<br>

Tämä pyörittää painikkeen kuvaketta kun tuuletin on `on`.
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

<summary>Tekstien mallintaminen (kuten nimi tai tila)</summary>

<br>

Tämä muuttaa painikkeen nimen/tilan tekstiksi "It's currently sunny" säätilasi mukaan.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
tai sovellettuna alipainikkeille:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Jos haluat mallintaa tilan (`.bubble-state`) älä ota käyttöön `show_state: true`, ota vain käyttöön `show_attribute: true` ilman attribuuttia.

</details>

<details>

<summary>Edistynyt esimerkki: Alipainikkeen värin muuttaminen kun ponnahdusikkuna on avoinna</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Edistynyt esimerkki: Erottimen nimen mallintaminen tilan perusteella käännettynä kielellesi</summary>

<br>

Voit käyttää `hass.formatEntityState(state)` kääntämään tilan ja `hass.formatEntityAttributeValue(state, "attribute")` kääntämään attribuutin.

Tämä muuttaa nimen ja kuvakkeen sään perusteella, "Nuageux" tarkoittaa "pilvistä" ranskaksi.

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

## Moduulit

Moduulit ovat tehokas ominaisuus, joka mahdollistaa mukautettujen tyyliesi ja mallisi tallentamisen, uudelleenkäytön ja jakamisen kaikkien Bubble Cardiesi kesken. Sen sijaan että kopioisit ja liittäisit saman koodin useisiin kortteihin, voit luoda moduulin ja soveltaa sitä missä tahansa tarvitset. Tämä tekee kojelautasi ulkoasun hallinnasta paljon helpompaa ja tehokkaampaa.

Mutta tämä ominaisuus on paljon tehokkaampi kuin se, se antaa sinun lisätä itse oikeita ominaisuuksia Bubble Card muokkaimeen käyttäen kaikkia oletusarvoisia [Home Assistant lomakkeen](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) vaihtoehtoja!  
Objektivalitsinta on parannettu näyttämään live-muutokset ja tukemaan attribuutteja oikein.

Moduuli voi myös vastata Home Assistantin korttivalitsimeen sisäänrakennettujen [entiteettiehdotusten](#entiteettiehdotukset) rinnalla: käytä `suggestions` niille korteille jotka se voi kuvata etukäteen, ja `suggestions_code` kun ne on laskettava kokoonpanostasi, esimerkiksi ponnahdusikkuna joka rakennetaan valitun entiteetin alueen kaikista entiteeteistä. Molemmat avaimet on dokumentoitu [täällä](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Voit myös selata **Module Storea** löytääksesi ja asentaaksesi [yhteisön luomia moduuleita](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), tai jakaa omat luomuksesi!

> [!TIP]
> Moduulin koodi toimii täsmälleen samalla tavalla kuin kortin `styles` osion koodi. Kaikki samat muuttujat ja funktiot [Mallit](#mallit) osiosta ovat käytettävissä.

<br>

### Alkuasetukset

> [!IMPORTANT]
> Versiosta v3.1.0 alkaen Bubble Card Tools on suositeltu tallennusjärjestelmä moduuleille. Vanha mallianturimenetelmä toimii yhä olemassa oleville asennuksille, mutta uudet moduulit ja Module Storen ominaisuudet tuetaan parhaiten Bubble Card Toolsin kautta.

Bubble Card Tools -integraatio ottaa käyttöön Module Editorin ja Module Storen, ja tallentaa moduulit yksittäisinä YAML-tiedostoina. Olemassa olevat moduulit siirretään automaattisesti.

Asennus- ja määritysvaiheet on selitetty täällä:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

Pääset Module Editoriin minkä tahansa kortin asetuksista, **Modules** osiosta. Muokkain tarjoaa kaksi päävälilehteä:

#### My Modules -välilehti

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Tämä välilehti näyttää kaikki asennetut moduulisi ja antaa sinun:

- **Soveltaa** olemassa olevia moduuleita nykyiseen korttiin
- **Luoda** uuden moduulin tyhjästä
- **Muokata** olemassa olevia moduuleita live-esikatselulla
- **Poistaa** moduuleita, joita et enää tarvitse
- **Hakea** ja **lajitella** moduuleita (aakkosjärjestys, viimeisimmät, aktiiviset ensin)
- **Asettaa globaalin tilan** saadaksesi moduulin soveltumaan automaattisesti kaikkiin kortteihin
- **Tuoda/viedä** moduuleita varmuuskopiointia tai jakamista varten
- **Kirjoittaa entiteettiehdotuksia** moduulieditorissa, kohdassa **Valinnainen: Entiteettiehdotukset**, jotta moduuliasi tarjotaan Home Assistantin korttivalitsimessa. Sekä säännöt että lasketut ehdotukset tarkistetaan sitä mukaa kun kirjoitat, virhe siellä estää tallentamisen, ja esikatselu näyttää ehdotetut kortit mille tahansa valitsemallesi entiteetille

#### Module Store -välilehti

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Tämä välilehti näyttää [kaikki saatavilla olevat moduulit yhteisöltä](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ja antaa sinun:

- **Selata** kaikkia yhteisön luomia moduuleita
- **Hakea** ja suodattaa moduuleita nimen, yhteensopivuuden tai avainsanojen mukaan
- **Asentaa** moduuleita yhdellä klikkauksella
- **Päivittää** asennettuja moduuleita kun uusia versioita on saatavilla

> [!TIP]
> Muokkaimessa voit ottaa käyttöön ei-tuetut moduulit testataksesi moduuleita, joita ei vielä ole merkitty yhteensopiviksi tietyn korttityypin kanssa.

<br>

### Moduulien käyttäminen

#### Uuden moduulin luominen

<details>

<summary>Klikkaa laajentaaksesi</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Siirry minkä tahansa kortin muokkaimeen ja laajenna **Modules** osio.
2. Klikkaa **Create new module**.
3. Täytä moduulin tiedot.
4. Kirjoita CSS- ja/tai JavaScript-mallikoodisi **Code**-muokkaimeen.
5. (Valinnainen) Luo mukautettu määrityskäyttöliittymä **Editor** osiossa (kuten värivalitsin yllä olevassa kuvakaappauksessa, täysi dokumentaatio saatavilla [täältä](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Valinnainen) Kirjoita **Entiteettiehdotuksesi**, jotta moduuliasi tarjotaan Home Assistantin korttivalitsimessa. Paneeli tarkistaa kirjoittamasi sitä mukaa kun kirjoitat, ja sen esikatselu näyttää itse ehdotetut kortit valitsemallesi entiteetille.
7. Klikkaa **Save**.

Moduulisi on nyt käytettävissä millä tahansa kortillasi!

<br>

</details>

#### Moduulin soveltaminen korttiin

<details>

<summary>Klikkaa laajentaaksesi</summary>

<br>

- **Muokkaimen kautta:**

  - Siirry sen kortin muokkaimeen, johon haluat soveltaa moduulia.
  - Laajenna **Modules** osio.
  - Klikkaa listasta moduulia, jota haluat soveltaa.
  - Kohdassa "Apply to", klikkaa "This card". Moduuli on nyt aktiivinen. Voit soveltaa useita moduuleita samaan korttiin.

- **YAML:n kautta:**

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

#### Moduulin soveltaminen globaalisti

<details>

<summary>Klikkaa laajentaaksesi</summary>

<br>

Voit asettaa moduulin soveltumaan automaattisesti kaikkiin Bubble Cardeihin:

**Tämä ei ole saatavilla moduuleille, joilla on muokkain, koska ne vaativat tietyn määrityksen toimiakseen.**

- **Muokkaimen kautta:**

  - Module editorissa löydä moduulisi **My Modules** välilehdeltä.
  - Kytke **All cards** painike moduulin nimen vieressä.
  - Moduuli sovelletaan nyt automaattisesti kaikkiin kortteihin.
 
- **YAML:n kautta:**

  Moduulisi YAML-määrityksessä (tiedostossa `bubble-modules.yaml`), lisää vain `is_global: true`.

<br>

</details>

#### Yksittäisen kortin poissulkeminen globaalista moduulista

<details>

<summary>Klikkaa laajentaaksesi</summary>

<br>

Jos sinulla on globaali moduuli mutta haluat sulkea sen pois tietystä kortista:

- **Muokkaimen kautta:**
  
  - Kortin **Modules** osiossa näet listatut globaalit moduulit.
  - Klikkaa globaalia moduulia, poista käytöstä "This card" sulkeaksesi sen pois tästä tietystä kortista.

- **YAML:n kautta:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Moduulisi jakaminen Module Storeen

<details>

<summary>Klikkaa laajentaaksesi</summary>

<br>

Jakaaksesi moduulisi Module Storeen, Module Editorissa, alhaalla kohdassa "Export Module", klikkaa "Copy for GitHub" ja liitä sisältö uuteen keskusteluun [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) kategoriaan. **Muokkaa kuvausta** (tarvittaessa), **esimerkkiä** (YAML-käyttäjille), ja muista **sisällyttää vähintään yksi kuvakaappaus** Module Storea varten.

**Moduulisi tulee saataville heti sen jälkeen** (kaupan päivityksen jälkeen), joten tarkista huolellisesti että kaikki on kirjoitettu oikein ja moduuli toimii odotetusti. Voit tietysti muokata/päivittää moduulia sen jakamisen jälkeen.

<br>

</details>

#### Versionhallinta

<details>

<summary>Klikkaa laajentaaksesi</summary>

<br>

Module Store tarkistaa automaattisesti asennettujen moduulien päivitykset. Kun päivityksiä on saatavilla:

1. Näet päivitysilmoituksen **Module Store** välilehdellä.
2. Klikkaa **Update** moduuleissa, joilla on saatavilla päivityksiä.
3. Vahvista päivitys Module Storessa.

<br>

</details>

#### Tuettujen korttityyppien määrittäminen

<details>

<summary>Klikkaa laajentaaksesi</summary>

<br>

Jotkut moduulit eivät välttämättä ole yhteensopivia kaikkien korttityyppien kanssa. Voit määrittää mitkä kortit moduuli tukee.  
Jos haluat moduulin olevan yhteensopiva **kaikkien korttien** kanssa, jätä yksinkertaisesti `supported` kenttä pois (tai käytä **All cards** vaihtoehtoa muokkaimessa).

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

### Esimerkkejä

<details>
<summary>Perustyylimoduuli</summary>

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
<summary>Moduuli mukautetulla määrityksellä</summary>

<br>

Tämä moduuli on saatavilla [täällä](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Lisää esimerkkejä löytyy Module Storesta, tai [täältä](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalisointi

Bubble Card puhuu sinun kieltäsi. Sen editori on käännetty niille 64 kielelle joita Home Assistant tukee, ja aina kun Home Assistantilla on jo sana jollekin, käytetään sen omaa sanamuotoa, joten luet samat termit molemmissa käyttöliittymissä.

Editorin alalaidassa, versionumeron vieressä, **Automaattinen**-kytkin seuraa Home Assistantisi kieltä. Kytke se pois, niin koko editori palaa englanniksi, mikä on kätevää ohjeen seuraamiseen tai ongelmasta ilmoittamiseen. Valintasi muistetaan selaimessasi.

Myös tämä dokumentaatio on käännetty, [62 kielelle](languages.md), kaikille paitsi brittienglannille, joka näyttää alkuperäisen. Nuo sivut ovat avoimia kaikille, joten sanamuodon joka ei vastaa omaa Home Assistantiasi voi korjata parilla klikkauksella. Englanninkielinen versio pysyy itse sisällön viitteenä.

<br>

---

<br>

## Ohje

Voit vapaasti avata issuen, jos jokin ei toimi odotetusti. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Onko sinulla kysymyksiä tai ajatuksia Bubble Cardista? Haluatko jakaa kojelautasi tai löytösi? Voit käydä Home Assistant foorumilla, Bubble Card subredditissä tai GitHub Discussions osiossa.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Osallistuminen

Panokset ovat tervetulleita! Olipa kyseessä virheiden korjaus, uudet ominaisuudet, käännökset tai dokumentaation parannukset, avaa vapaasti pull request.

Ennen aloittamista, lue [kehittäjän opas](DEVELOPERS.md), joka käsittelee kuinka asettaa paikallinen ympäristösi, rakentaa projekti ja testata muutoksesi.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Lahjoita

Omistan suurimman osan vapaa-ajastani tehdäkseni tästä projektista parhaan mahdollisen. Jos siis arvostat työtäni, mikä tahansa lahjoitus olisi loistava tapa osoittaa tukesi 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Kiitos kaikille tuestanne, olette kaikki suurin motivaationi!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
