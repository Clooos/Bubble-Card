<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ta stran je samodejni prevod. V primeru dvoma velja [izvirna angleška dokumentacija](../README.md). Se vam kakšen stavek zdi napačen? Vsaka pomoč je dobrodošla, [popravek te strani](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.sl.md) pa vzame le minuto: GitHub poskrbi za fork in pull request. Hvala vnaprej! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Preberite to v drugem jeziku](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card je minimalistična in prilagodljiva zbirka kartic za Home Assistant, ki ponuja moderna pojavna okna in vgrajen Module Store z več kot 100 moduli, ki jih je ustvarila skupnost.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Kazalo vsebine

**[`Namestitev`](#namestitev)**  **[`Konfiguracija`](#konfiguracija)**  **[`Predlogi za entitete`](#predlogi-za-entitete)**  **[`Pojavno okno`](#pojavno-okno)**  **[`Vodoravni sklad gumbov`](#vodoravni-sklad-gumbov)**  **[`Gumb`](#gumb)**  **[`Predvajalnik medijev`](#predvajalnik-medijev)**  **[`Senčilo`](#senčilo)**  **[`Select`](#select)**  **[`Klimatska naprava`](#klimatska-naprava)**  **[`Koledar`](#koledar)**  **[`Ločilo`](#ločilo)**  **[`Prazen stolpec`](#prazen-stolpec)**  **[`Samo podgumbi`](#samo-podgumbi)**  **[`Podgumbi`](#podgumbi)**  **[`Postavitve kartic`](#postavitve-kartic)**  **[`Pogoji`](#pogoji)**  **[`Dejanja`](#dejanja-dotika-dvojnega-dotika-in-zadržanja)**  **[`Oblikovanje`](#oblikovanje)**  **[`Predloge`](#predloge)**  **[`Moduli`](#moduli)**  **[`Lokalizacija`](#lokalizacija)**  **[`Pomoč`](#pomoč)**  **[`Prispevanje`](#prispevanje)**  **[`Donirajte`](#donirajte)**

<br>

## Namestitev

**Najnižja podprta različica Home Assistant:** 2023.9.0

<details>

<summary>Brez HACS</summary>

<br>

1. Prenesite to datoteko: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Dodajte to datoteko v mapo `<config>/www`. Da bo urejevalnik v vašem jeziku, prenesite iz [mape dist](https://github.com/Clooos/Bubble-Card/tree/main/dist) tudi `bubble-card-<lang>.json`, na primer `bubble-card-fr.json`, in ga postavite poleg `bubble-card.js` (brez njega urejevalnik ostane v angleščini)
3. Na nadzorni plošči kliknite ikono v zgornjem desnem kotu, nato `Uredi nadzorno ploščo`
4. Znova kliknite to ikono in nato `Upravljanje virov`
5. Kliknite `Dodaj vir`
6. Kopirajte in prilepite to: `/local/bubble-card.js?v=1`
7. Kliknite `JavaScript Module`, nato `Ustvari`
8. Pojdite nazaj in osvežite stran
9. Zdaj lahko kliknete `Dodaj kartico` v spodnjem desnem kotu in poiščete `Bubble Card`
10. Po vsaki posodobitvi datoteke boste morali urediti `/local/bubble-card.js?v=1` in spremeniti različico na katero koli višjo številko

Če ne deluje, poskusite počistiti predpomnilnik brskalnika.

</details>

<details>

<summary>S HACS (priporočeno)</summary>

<br>

Ta način vam omogoča prejemanje posodobitev neposredno prek Home Assistant Community Store

1. Če HACS še ni nameščen, ga prenesite po navodilih na [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Nadaljujte z začetno konfiguracijo HACS po navodilih na [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. V stranski vrstici pojdite na "HACS"
4. Poiščite "Bubble Card" ali kliknite modri gumb spodaj
5. Kliknite "Prenesi"
6. Pojdite nazaj na nadzorno ploščo in kliknite ikono v zgornjem desnem kotu, nato `Uredi nadzorno ploščo`
7. Zdaj lahko kliknete `Dodaj kartico` v spodnjem desnem kotu in poiščete `Bubble Card`

Če ne deluje, poskusite počistiti predpomnilnik brskalnika/aplikacije (po potrebi na vseh napravah).

#### Videoposnetki

Oglejte si tudi moj kanal YouTube za vodnike po korakih.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguracija

Vse možnosti lahko nastavite v urejevalniku Home Assistant. Podrobnosti in YAML pa najdete v spodnji dokumentaciji.

<details>

<summary><b>Glavne možnosti (YAML + opis)</b></summary>

| Ime | Tip | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `type` | string | **Obvezno** | `custom:bubble-card` | Tip kartice |
| `card_type` | string | **Obvezno** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ali `sub-buttons` | Tip Bubble Card, glejte spodaj |
| `styles` | object list | Neobvezno | Katere koli CSS stilske podloge | Omogoča prilagoditev CSS kartice Bubble Card, glejte [oblikovanje](#oblikovanje) |

</details>

<details>

<summary><b>Globalne spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Polmer roba za vse podprte elemente |
| `--bubble-main-background-color` | `color` | Glavna barva ozadja za vse podprte elemente |
| `--bubble-secondary-background-color` | `color` | Sekundarna barva ozadja za vse podprte elemente |
| `--bubble-accent-color` | `color` | Poudarjena barva za vse podprte elemente |
| `--bubble-icon-border-radius` | `px` | Polmer roba ikone za vse podprte elemente |
| `--bubble-icon-background-color` | `color` | Barva ozadja ikone za vse podprte elemente |
| `--bubble-sub-button-border-radius` | `px` | Polmer roba za vse podgumbe |
| `--bubble-sub-button-background-color` | `color` | Barva ozadja za vse podgumbe |
| `--bubble-box-shadow` | glejte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca okvirja za vse podprte elemente |
| `--bubble-border` | glejte [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Rob za vse podprte kartice |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Oglejte si ta [videoposnetek](https://www.youtube.com/watch?v=0hSQOlBxKKI), da spoznate Bubble Card in njegove zmožnosti.** Moj kanal YouTube je precej nov in se osredotoča na vodnike o Home Assistant in Bubble Card. Ne oklevajte in se naročite, s tem mi pomagate povečati prepoznavnost kanala. Najlepša hvala vnaprej!

<br>

---

<br>

## Predlogi za entitete

Od Home Assistant 2026.6 vam izbira entitete v izbirniku kartic ponudi nekaj že pripravljenih kartic, Bubble Card pa temu seznamu dodaja svoje recepte. Izberite luč in ponujena vam bo kartica z drsnikom svetlosti, poleg tega pa še različica s temperaturo barve, različica z barvo in različica z nasičenostjo, kadar jih vaša luč podpira. Izberite senčilo in dobite njegov drsnik položaja, izberite predvajalnik medijev in dobite tudi različico s seznamom virov, izberite sesalnik in dobite njegove gumbe za zagon, premor in vrnitev na postajo. Vsak predlog je običajna konfiguracija Bubble Card, prikazana kot predogled v živo, tako da lahko vzamete najbližjega in ga urejate naprej kot običajno.

Kaj vam je ponujeno, je odvisno od tega, kaj vaša entiteta v resnici zmore: luč brez kanala svetlosti dobi stikalo namesto drsnika, senčilo, ki se ne more nagibati, ne dobi različice z nagibom, entiteta klimatske naprave pa dobi svoje prednastavljene načine samo takrat, ko jih ima. Klasični vnosi sledijo pod predlogi Bubble Card, kadar so smiselni: kartica, namenjena temu tipu entitete, preprost gumb in drsnik.

> [!TIP]
> Moduli lahko na ta seznam dodajo svoje predloge, glejte [module](#moduli).

<br>

---

<br>

## Pojavno okno

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ta kartica vam omogoča ustvarjanje pojavnega okna s poljubno vsebino. Vsako pojavno okno je **privzeto skrito** in ga lahko odprete tako, da ciljate na njegovo povezavo (npr. `'#pop-up-name'`), s katero koli kartico, ki podpira dejanje `navigate` [action](#dejanja-dotika-dvojnega-dotika-in-zadržanja), ali z vključenim [vodoravnim skladom gumbov](#vodoravni-sklad-gumbov).

> [!TIP]
> ### Sprožilec pojavnega okna 
> Ta funkcija omogoča odpiranje pojavnega okna glede na stanje katere koli entitete, na primer lahko odprete pojavno okno "Varnost" s kamero, ko je oseba pred vašo hišo. Lahko tudi ustvarite pomožno stikalo (input_boolean) in v avtomatizaciji sprožite njegovo odpiranje/zapiranje.
> <details>
> <summary>Odpiranje pojavnega okna, ko je <code>binary_sensor</code> v stanju <code>on</code></summary>
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
> ### Različni načini zapiranja pojavnega okna 
> Obstaja več načinov za zapiranje pojavnega okna. Lahko na primer povlečete od glave pojavnega okna navzdol, naredite dolg poteg znotraj pojavnega okna navzdol, na namizju pritisnete Escape, odstranite hash iz URL-ja ali preprosto pritisnete gumb za zapiranje.
>


### Možnosti pojavnega okna

<details>

<summary><b>Možnosti (YAML + opisi)</b></summary>

| Ime | Tip | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obvezno** | Kateri koli edinstven hash (npr. `'#kitchen'`) z ' ' | Tako boste odprli svoje pojavno okno |
| `popup_style` | string | Neobvezno | `bubble` (privzeto) ali `classic` | Določi vizualni slog pojavnega okna |
| `popup_mode` | string | Neobvezno | `default` (privzeto), `fit-content`, `centered` ali `adaptive-dialog` | Določi način postavitve pojavnega okna |
| `with_bottom_offset` | boolean | Neobvezno | `true` ali `false` (privzeto) | Uporablja se samo z `popup_mode: fit-content` ali `adaptive-dialog`. Uporabi spodnji odmik na mobilnih napravah, uporabno, kadar nadzorna plošča vključuje kartico noge. |
| `full_width_on_mobile` | boolean | Neobvezno | `true` ali `false` (privzeto) | Uporablja se samo z `popup_mode: centered`. Razširi pojavno okno na celotno širino zaslona na mobilnih napravah, uporabno pri manjših zaslonih. |
| `performance_mode` | string | Neobvezno | `default` (privzeto) ali `performance` | Optimizira animacijo odpiranja pojavnega okna. `performance` rahlo zamakne izrisovanje vsebine in zamegljenost ozadja, prav tako onemogoči zamegljenost ozadja (backdrop blur), če je nastavljena. |
| `auto_close` | string | Neobvezno | Časovna omejitev v milisekundah (npr. `10000` za 10 s) | Samodejno zapri pojavno okno po preteku časovne omejitve |
| `close_on_click` | boolean | Neobvezno | `true` ali `false` (privzeto) | Samodejno zapri pojavno okno po vsaki interakciji |
| `close_by_clicking_outside` | boolean | Neobvezno | `true` (privzeto) ali `false` | Zapri pojavno okno s klikom zunaj njega |
| `width_desktop` | string | Neobvezno | Katera koli vrednost CSS | Širina na namizju (`100%` privzeto na mobilnih napravah) |
| `margin` | string | Neobvezno | Katera koli vrednost CSS | Uporabite to **samo**, če vaše pojavno okno na mobilni napravi ni lepo poravnano na sredino (npr. `13px`) |
| `margin_top_mobile` | string | Neobvezno | Katera koli vrednost CSS | Zgornji rob na mobilni napravi (npr. `-56px`, če je glava skrita) |
| `margin_top_desktop` | string | Neobvezno | Katera koli vrednost CSS | Zgornji rob na namizju (npr. `50vh` za pojavno okno polovične velikosti ali `calc(100vh - 400px)` za fiksno višino `400px`) |
| `bg_color` | string | Neobvezno | Katera koli vrednost hex, rgb ali rgba | Barva ozadja pojavnega okna (npr. `#ffffff` za belo ozadje) |
| `bg_opacity` | string | Neobvezno | Katera koli vrednost od `0` do `100` | Prosojnost ozadja pojavnega okna (npr. `100` za brez prosojnosti) |
| `bg_blur` | string | Neobvezno | Katera koli vrednost od `0` do `100` | Učinek zamegljenosti ozadja pojavnega okna, **deluje le, če `bg_opacity` ni nastavljen na `100`** (npr. `0` za brez zamegljenosti)|
| `shadow_opacity` | string | Neobvezno | Katera koli vrednost od `0` do `100` | Prosojnost sence pojavnega okna (npr. `0`, da jo skrijete) |
| `hide_backdrop` | boolean | Neobvezno | `true` ali `false` (privzeto) | Nastavite na true na prvem pojavnem oknu glavne nadzorne plošče, da onemogočite ozadje (backdrop) na vseh pojavnih oknih. |
| `background_update` | boolean | Neobvezno | `true` ali `false` (privzeto) | Posodobi vsebino pojavnega okna v ozadju (ni priporočeno) |
| `trigger` | object ali list | Neobvezno | Glejte [pogoje](#pogoji) | Odpri to pojavno okno, ko so pogoji izpolnjeni |
| `trigger_entity` | string | Neobvezno | Katera koli entiteta | Odpri to pojavno okno glede na stanje katere koli entitete, preprosta oblika `trigger` |
| `trigger_state` | string | Neobvezno (**Obvezno**, če je definiran `trigger_entity`) | Katero koli stanje entitete | Stanje entitete za odpiranje pojavnega okna |
| `trigger_close` | boolean | Neobvezno | `true` (privzeto) ali `false` | Zapri pojavno okno, ko pogoji niso več izpolnjeni. Če uporabljate starejši par `trigger_entity` in `trigger_state`, je privzeto `false` |
| `open_action` | object | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Sproži dejanje ob odpiranju pojavnega okna |
| `close_action` | object | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Sproži dejanje ob zapiranju pojavnega okna |
| `show_header` | boolean | Neobvezno | `true` (privzeto) ali `false` | Popolnoma pokaži/skrij glavo pojavnega okna |
| `show_previous_button` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže gumb za nazaj poleg gumba za zapiranje in se vrne na prejšnje pojavno okno, kadar je to na voljo |
| `show_close_button` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije gumb za zapiranje, medtem ko ostane preostanek glave viden |
| `buttons_position` | string | Neobvezno | `right` (privzeto) ali `left` | Položaj gumbov za zapiranje in nazaj v glavi |
| `cards` | list | Neobvezno | Katera koli kartica Bubble Card, Home Assistant ali kartica po meri | Določi vsebino pojavnega okna. Glejte spodnji primer pojavnega okna. |
| Na voljo imate tudi [vse nastavitve gumba](#gumb) za glavo pojavnega okna. | | Neobvezno | | Če ni določeno, glava ne bo prikazana |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Polmer roba za pojavno okno |
| `--bubble-pop-up-main-background-color` | `color` | Glavna barva ozadja za podprte elemente pojavnega okna |
| `--bubble-pop-up-background-color` | `color` | Barva ozadja pojavnega okna |
| `--bubble-backdrop-background-color` | `color` | Barva ozadja za backdrop |
| Na voljo imate tudi [vse CSS spremenljivke gumba](#možnosti-gumba) za glavo pojavnega okna. | | |

</details>


### Samostojni format pojavnega okna (v3.2.0+)

Od v3.2.0 pojavna okna uporabljajo nov samostojni format, kjer so kartice vsebine določene neposredno znotraj pojavnega okna z uporabo možnosti `cards`. To omogoča boljšo zmogljivost in novo izkušnjo urejanja s povleci in spusti, ki temelji na sekcijah.


#### Primeri

<details>

<summary>Pojavno okno (samostojni format)</summary>

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

<summary>Gumb za odpiranje pojavnega okna</summary>

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

## Vodoravni sklad gumbov

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ta kartica je dober spremljevalec kartice pojavnega okna, saj omogoča odpiranje ustreznih pojavnih oken. Omogoča tudi odpiranje katere koli strani vaše nadzorne plošče. Poleg tega lahko dodate senzorje gibanja/zasedenosti, tako da se vrstni red gumbov prilagodi glede na sobo, v katero ste pravkar vstopili. Ta kartica je pomikajoča se, ostane vidna in deluje kot noga.

> [!IMPORTANT]  
> Ta kartica mora biti zadnja v vašem pogledu (za vsemi kartic in pojavnimi okni). Ne more biti znotraj nobenega sklada.

### Možnosti vodoravnega sklada gumbov

<details>

<summary><b>Možnosti (YAML + opisi)</b></summary>

| Ime | Tip | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obvezno** | Hash pojavnega okna (npr. `'#kitchen'`) z ' ' ali katera koli povezava | Povezava za odpiranje |
| `1_name` | string | Neobvezno | Poljuben niz | Ime za vaš gumb |
| `1_icon` | string | Neobvezno | Katera koli ikona `mdi:` | Ikona za vaš gumb |
| `1_entity` | string | Neobvezno | Katera koli luč ali skupina luči | Prikaže barvo te luči v ozadju |
| `1_pir_sensor` | string | Neobvezno | Kateri koli binarni senzor | Vsaj en senzor gibanja (pir) ali več za `auto_order`, dejansko deluje tudi s katero koli vrsto entitete, na primer lahko dodate skupine luči in vrstni red se bo spreminjal glede na zadnjič spremenjena stanja. |
| `auto_order` | boolean | Neobvezno | `true` ali `false` (privzeto) | Spremeni vrstni red gumbov glede na zadnji čas spremembe `_pir_sensor`, **mora biti `false`, če v svoji kodi nimate nobenega `_pir_sensor`** |
| `margin` | string | Neobvezno | Katera koli vrednost CSS | Uporabite to **samo**, če vaš `horizontal-buttons-stack` na mobilni napravi ni lepo poravnan na sredino (npr. `13px`) |
| `width_desktop` | string | Neobvezno | Katera koli vrednost CSS | Širina na namizju (`100%` privzeto na mobilnih napravah) |
| `is_sidebar_hidden` | boolean | Neobvezno | `true` ali `false` (privzeto) | Popravi položaj vodoravnega sklada gumbov, če je stranska vrstica skrita na namizju (samo če ste jo sami prilagodili tako, da je skrita) |
| `rise_animation` | boolean | Neobvezno | `true` (privzeto) ali `false` | Nastavite na `false`, da onemogočite animacijo, ki se sproži ob nalaganju strani |
| `highlight_current_view` | boolean | Neobvezno | `true` ali `false` (privzeto) | Poudari trenutni hash/pogled z gladko animacijo |
| `hide_gradient` | boolean | Neobvezno | `true` ali `false` (privzeto) | Nastavite na `false`, da skrijete gradient |

> [!IMPORTANT]  
> Spremenljivke, ki se začnejo s številko, določajo vaše gumbe, samo spremenite to številko, da dodate več gumbov (glejte spodnji primer).

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Polmer roba za gumbe vodoravnega sklada gumbov |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Barva ozadja za gumbe vodoravnega sklada gumbov |

</details>


#### Primer

<details>

<summary>Vodoravni sklad gumbov, ki se sam preuredi glede na senzorje zasedenosti</summary>

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

## Gumb

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ta kartica je zelo vsestranska. Uporabite jo lahko kot **stikalo**, **drsnik**, prikaz **stanja** ali gumb za **ime/besedilo**.

> [!TIP]
> ### Kakšne so razlike med posameznimi vrstami gumbov?
>
> - **Stikalni gumb (switch):** to je privzeta vrsta gumba. Privzeto preklaplja entiteto, njegova barva ozadja pa se spreminja glede na stanje entitete ali barvo luči. Dejanje lahko spremenite v razdelku **Dejanje ob dotiku kartice**.
>
> - **Drsni gumb (slider):** ta vrsta gumba omogoča upravljanje entitet z nastavljivim obsegom vrednosti. Idealen je za zatemnjevanje luči, njegova barva zapolnitve pa se prilagodi barvi luči. Uporabite ga lahko tudi za prikaz vrednosti, na primer stanja baterije.
>   Podprte entitete za drsnike:
>   - Luč (svetlost)
>   - Predvajalnik medijev (glasnost)
>   - Senčilo (položaj)
>   - Ventilator (odstotek)
>   - Klimatska naprava (temperatura)
>   - Vnosno število in število (vrednost)
>   - Senzor baterije (odstotek, samo za branje)
>
>   Uporabite lahko tudi katero koli entiteto s številčnim stanjem, tako da onemogočite filter entitet v razdelku **Nastavitve drsnika** in nato določite vrednosti `min` in `max`. Ta možnost je samo za branje.
>
> - **Gumb stanja (state):** popoln za prikaz podatkov senzorja ali katere koli druge entitete. Ob pritisku prikaže ploščo "Več informacij" za to entiteto. Njegova barva ozadja se ne spreminja.
>
> - **Gumb ime/besedilo (name):** edina vrsta gumba, ki ne potrebuje entitete. Omogoča prikaz kratkega besedila, imena ali naslova. Dodate mu lahko tudi dejanja. Njegova barva ozadja se ne spreminja.

### Možnosti gumba

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime | Vrsta | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `entity` | niz | **Obvezno** | Katera koli entiteta | Entiteta za upravljanje |
| `button_type` | niz | Neobvezno | `switch` (privzeto), `slider`, `state` ali `name` | Vedenje gumba |
| `name` | niz | Neobvezno | Kateri koli niz | Ime za gumb, če ni določeno, se prikaže ime entitete |
| `icon` | niz | Neobvezno | Katera koli ikona `mdi:` | Ikona za gumb, če ni določena, se prikaže ikona entitete ali `entity-picture` |
| `force_icon` | boolean | Neobvezno | `true` ali `false` (privzeto) | Daje prednost ikoni namesto `entity-picture` |
| `use_accent_color` | boolean | Neobvezno (privzeto `false`) | **Samo za luči.** Uporabi poudarjeno barvo teme namesto barve luči.                         |
| `show_state` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže ali skrije stanje entitete `entity` |
| `show_name` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ime |
| `show_icon` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ikono |
| `show_last_changed` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje spremembe entitete `entity` |
| `show_last_updated` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje posodobitve entitete `entity` |
| `show_attribute` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže atribut entitete `entity` pod njenim imenom (`name`) |
| `attribute` | niz | Neobvezno (obvezno, če je `show_attribute` nastavljen na `true`) | Atribut iz entitete `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobvezno | `true` (privzeto) ali `false` | Omogoči drsenje besedila, kadar vsebina presega velikost svojega vsebnika |
| `button_action` | objekt | Neobvezno | `tap_action`, `double_tap_action` ali `hold_action`, glejte spodaj | Omogoča spremembo privzetih dejanj ob kliku gumba. |
| `tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob kliku ikone, če ni določeno, se uporabi `more-info` |
| `double_tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob dvojnem kliku ikone, če ni določeno, se uporabi `none` |
| `hold_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob zadržanju ikone, če ni določeno, se uporabi `more-info` |
| `card_layout` | niz | Neobvezno | `normal` (privzeto, če ni v pogledu razdelkov), `large` (privzeto, če je v pogledu razdelkov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | število | Neobvezno | Katero koli število | Število vrstic (višina) (npr. `2`) |
| `sub_button` | objekt | Neobvezno | Glejte [podgumbe](#podgumbi) | Doda prilagojene gumbe, pritrjene na desni |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Glavna barva ozadja za podprte elemente v gumbu |
| `--bubble-button-border-radius` | `px` | Polmer zaobljenosti roba gumba |
| `--bubble-button-icon-border-radius` | `px` | Polmer zaobljenosti roba vsebnika ikone gumba |
| `--bubble-button-icon-background-color` | `color` | Barva ozadja vsebnika ikone gumba |
| `--bubble-light-white-color` | `color` | Zamenja privzeto belo barvo gumbov/drsnikov za luči |
| `--bubble-light-color` | `color` | Zamenja barvo gumbov/drsnikov za luči (tudi RGB luči) |
| `--bubble-button-box-shadow` | Glejte [senco okvirja](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca okvirja za gumb |

</details>

Te možnosti so na voljo samo, kadar je `button_type` nastavljen na `slider`.

<details>

<summary><b>Možnosti drsnika (YAML in opisi)</b></summary>

| Ime                  | Vrsta    | Zahteva                     | Opis                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | število  | Neobvezno                        | Najmanjša vrednost drsnika. Za prilagojene drsnike.                                                    |
| `max_value`             | število  | Neobvezno                        | Največja vrednost drsnika. Za prilagojene drsnike.                                                    |
| `step`                  | število  | Neobvezno                        | Korak vrednosti drsnika.                                                                           |
| `tap_to_slide`          | boolean | Neobvezno (privzeto `false`)      | Omogoči prejšnje vedenje drsnika, kjer se drsnik aktivira z dotikom namesto z zadržanjem.        |
| `relative_slide`        | boolean | Neobvezno (privzeto `false` )     | Posodobi vrednost glede na začetno vrednost, namesto glede na začetno mesto dotika.                      |
| `read_only_slider`      | boolean | Neobvezno (privzeto `false`)      | Naredi drsnik samo za branje. Samodejno omogočeno za nekatere entitete, kot so senzorji.                                        |
| `slider_live_update`    | boolean | Neobvezno (privzeto `false`)      | Stanje entitete se posodablja med drsenjem. **Ta funkcija ni priporočljiva za vse entitete.**        |
| `slider_fill_orientation` | niz | Neobvezno | `left`, `right`, `top` ali `bottom` | Spremeni smer zapolnitve drsnika. Od leve proti desni, kadar ni določeno, zrcaljeno v [jezikih od desne proti levi](#lokalizacija) |
| `slider_value_position` | niz | Neobvezno | `right`, `left`, `center` ali `hidden` | Položaj prikaza vrednosti. Na desni, kadar ni določeno, in na levi v [jezikih od desne proti levi](#lokalizacija) |
| `invert_slider_value` | boolean | Neobvezno (privzeto `false`) | Obrne smer drsnika (100 % zapolnitve ustreza najmanjši vrednosti). Ni na voljo za barvne drsnike. |
| `light_slider_type` | niz | Neobvezno | `brightness` (privzeto), `hue`, `saturation`, `white_temp` | **Samo za luči.** Izbira načina drsnika |
| `cover_slider_type` | niz | Neobvezno | `position` (privzeto), `tilt_position` | **Samo za senčila.** Izbira načina drsnika (položaj ali nagib) |
| `hue_force_saturation` | boolean | Neobvezno (privzeto `false`) | **Samo za luči (način Hue).** Prisili nasičenost pri prilagajanju odtenka (Hue) |
| `hue_force_saturation_value` | število | Neobvezno (privzeto `100`) | **Samo za luči (način Hue).** Prisiljena vrednost nasičenosti (0-100) |
| `use_accent_color` | boolean | Neobvezno (privzeto `false`) | **Samo za luči (način svetlosti).** Uporabi poudarjeno barvo teme namesto barve luči |
| `allow_light_slider_to_0` | boolean | Neobvezno (privzeto `false`)    | **Samo za luči.** Omogoči, da drsnik doseže 0 %, kar izklopi luč. Ni na voljo skupaj s `tap_to_slide`. |
| `light_transition`      | boolean | Neobvezno (privzeto `false`)      | **Samo za luči.** Omogoči gladke prehode svetlosti za podprte luči.                           |
| `light_transition_time` | število  | Neobvezno (privzeto `500`)        | **Samo za luči.** Čas prehoda v milisekundah. Zahteva `light_transition: true`.            |

</details>

#### Primeri

<details>

<summary>Drsni gumb, ki lahko upravlja svetlost luči</summary>

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

<summary>Gumb z več možnostmi</summary>

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

## Predvajalnik medijev

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ta kartica omogoča upravljanje entitete predvajalnika medijev.

### Možnosti predvajalnika medijev

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime | Vrsta | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `entity` | niz | **Obvezno** | Kateri koli predvajalnik medijev | Predvajalnik medijev za upravljanje |
| `name` | niz | Neobvezno | Kateri koli niz | Ime za predvajalnik medijev, če ni določeno, se prikaže ime entitete |
| `icon` | niz | Neobvezno | Katera koli ikona `mdi:` | Ikona za predvajalnik medijev, če ni določena, se prikaže ikona entitete ali `entity-picture` |
| `force_icon` | boolean | Neobvezno | `true` ali `false` (privzeto) | Daje prednost ikoni namesto `entity-picture` |
| `show_state` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže ali skrije stanje entitete `entity` |
| `show_name` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ime |
| `show_icon` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ikono |
| `show_last_changed` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje spremembe entitete `entity` |
| `show_last_updated` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje posodobitve entitete `entity` |
| `show_attribute` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže atribut entitete `entity` pod njenim imenom (`name`) |
| `attribute` | niz | Neobvezno (obvezno, če je `show_attribute` nastavljen na `true`) | Atribut iz entitete `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobvezno | `true` (privzeto) ali `false` | Omogoči drsenje besedila, kadar vsebina presega velikost svojega vsebnika |
| `min_volume` | število | Neobvezno | Katero koli število | Najmanjša vrednost drsnika glasnosti. |
| `max_volume` | število | Neobvezno | Katero koli število | Največja vrednost drsnika glasnosti. |
| `cover_background` | boolean | Neobvezno | `true` ali `false` (privzeto) | Uporabi zamegljeno platnico medija kot ozadje kartice. |
| `button_action` | objekt | Neobvezno | `tap_action`, `double_tap_action` ali `hold_action`, glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Omogoča spremembo privzetih dejanj ob kliku gumba. |
| `tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob kliku ikone, če ni določeno, se uporabi `more-info`. |
| `double_tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob dvojnem kliku ikone, če ni določeno, se uporabi `none`. |
| `hold_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob zadržanju ikone, če ni določeno, se uporabi `more-info`. |
| `main_buttons_position` | niz | Neobvezno | `default` ali `bottom` | Premakne gumbe za upravljanje platnice na dno (pritrjeno) |
| `main_buttons_full_width` | boolean | Neobvezno | `true` ali `false` | Naredi spodnje gumbe za dejanja polne širine (privzeto: `true`, kadar je položaj `bottom`) |
| `main_buttons_alignment` | niz | Neobvezno | `end` (privzeto), `center`, `start`, `space-between` | Poravnava spodnjih gumbov za dejanja, kadar niso polne širine |
| `card_layout` | niz | Neobvezno | `normal` (privzeto, če ni v pogledu razdelkov), `large` (privzeto, če je v pogledu razdelkov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | število | Neobvezno | Katero koli število | Število vrstic (višina) (npr. `2`) |
| `sub_button` | objekt | Neobvezno | Glejte [podgumbe](#podgumbi) | Doda prilagojene gumbe, pritrjene na desni |
| `hide` | objekt | Neobvezno | Glejte spodaj | Skrije gumbe s kartice |

#### Možnosti skrivanja

| Ime | Vrsta | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Neobvezno | `true` ali `false` (privzeto) | Skrije gumb za predvajanje/premor |
| `volume_button` | boolean | Neobvezno | `true` ali `false` (privzeto) | Skrije gumb za glasnost |
| `previous_button` | boolean | Neobvezno | `true` ali `false` (privzeto) | Skrije gumb za prejšnjo skladbo |
| `next_button` | boolean | Neobvezno | `true` ali `false` (privzeto) | Skrije gumb za naslednjo skladbo |
| `power_button` | boolean | Neobvezno | `true` ali `false` (privzeto) | Skrije gumb za vklop/izklop |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Glavna barva ozadja za predvajalnik medijev |
| `--bubble-media-player-border-radius` | `px` | Polmer zaobljenosti roba predvajalnika medijev |
| `--bubble-media-player-buttons-border-radius` | `px` | Polmer zaobljenosti roba gumbov predvajalnika medijev |
| `--bubble-media-player-slider-background-color` | `color` | Barva ozadja za drsnik glasnosti |
| `--bubble-media-player-icon-border-radius` | `px` | Polmer zaobljenosti roba vsebnika ikone predvajalnika medijev |
| `--bubble-media-player-icon-background-color` | `color` | Barva ozadja vsebnika ikone predvajalnika medijev |
| `--bubble-media-player-box-shadow` | Glejte [senco okvirja](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca okvirja za predvajalnik medijev |

</details>


#### Primeri

<details>

<summary>Predvajalnik medijev z vsemi možnostmi</summary>

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

## Senčilo

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ta kartica omogoča upravljanje entitet `cover`.

### Možnosti senčila

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime | Vrsta | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `entity` | niz | **Obvezno** | Katero koli senčilo | Senčilo za upravljanje |
| `name` | niz | Neobvezno | Kateri koli niz | Ime za senčilo, če ni določeno, se prikaže ime entitete |
| `force_icon` | boolean | Neobvezno | `true` ali `false` (privzeto) | Daje prednost ikoni namesto `entity-picture` |
| `show_state` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže ali skrije stanje entitete `entity` |
| `show_name` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ime |
| `show_icon` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ikono |
| `show_last_changed` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje spremembe entitete `entity` |
| `show_last_updated` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje posodobitve entitete `entity` |
| `show_attribute` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže atribut entitete `entity` pod njenim imenom (`name`) |
| `attribute` | niz | Neobvezno (obvezno, če je `show_attribute` nastavljen na `true`) | Atribut iz entitete `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobvezno | `true` (privzeto) ali `false` | Omogoči drsenje besedila, kadar vsebina presega velikost svojega vsebnika |
| `icon_open` | niz | Neobvezno | Katera koli ikona `mdi:` | Ikona za odprto senčilo, če ni določena, se prikaže privzeta ikona za odprto senčilo |
| `icon_close` | niz | Neobvezno | Katera koli ikona `mdi:` | Ikona za zaprto senčilo, če ni določena, se prikaže privzeta ikona za zaprto senčilo |
| `icon_up` | niz | Neobvezno | Katera koli ikona `mdi:` | Ikona za gumb za odpiranje senčila, če ni določena, se prikaže privzeta ikona za odprto senčilo |
| `icon_down` | niz | Neobvezno | Katera koli ikona `mdi:` | Ikona za gumb za zapiranje senčila, če ni določena, se prikaže privzeta ikona za zaprto senčilo |
| `open_service` | niz | Neobvezno | Katera koli storitev ali skripta | Storitev za odpiranje senčila, privzeto `cover.open_cover` |
| `stop_service` | niz | Neobvezno | Katera koli storitev ali skripta | Storitev za zaustavitev senčila, privzeto `cover.stop_cover` |
| `close_service` | niz | Neobvezno | Katera koli storitev ali skripta | Storitev za zapiranje senčila, privzeto `cover.close_cover` |
| `tilt_buttons` | niz | Neobvezno | `top` (privzeto), `bottom`, `left`, `right`, `hidden` | Položaj gumbov za nadzor nagiba (prikazani samo, če senčilo podpira nagib) |
| `open_tilt_service` | niz | Neobvezno | Katera koli storitev ali skripta | Storitev za odpiranje nagiba, privzeto `cover.open_cover_tilt` |

| `close_tilt_service` | niz | Neobvezno | Katera koli storitev ali skripta | Storitev za zapiranje nagiba, privzeto `cover.close_cover_tilt` |
| `button_action` | objekt | Neobvezno | `tap_action`, `double_tap_action` ali `hold_action`, glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Omogoča spremembo privzetih dejanj ob kliku gumba. |
| `tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob kliku ikone, če ni določeno, se uporabi `more-info`. |
| `double_tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob dvojnem kliku ikone, če ni določeno, se uporabi `none`. |
| `hold_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob zadržanju ikone, če ni določeno, se uporabi `more-info`. |
| `main_buttons_position` | niz | Neobvezno | `default` ali `bottom` | Premakne kontrole medijev na dno (pritrjeno) |
| `main_buttons_full_width` | boolean | Neobvezno | `true` ali `false` | Naredi spodnje kontrole polne širine (privzeto: `true`, kadar je položaj `bottom`) |
| `main_buttons_alignment` | niz | Neobvezno | `end` (privzeto), `center`, `start`, `space-between` | Poravnava spodnjih kontrol, kadar niso polne širine |
| `card_layout` | niz | Neobvezno | `normal` (privzeto, če ni v pogledu razdelkov), `large` (privzeto, če je v pogledu razdelkov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | število | Neobvezno | Katero koli število | Število vrstic (višina) (npr. `2`) |
| `sub_button` | objekt | Neobvezno | Glejte [podgumbe](#podgumbi) | Doda prilagojene gumbe, pritrjene na desni |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Glavna barva ozadja za podprte elemente v kartici senčila |
| `--bubble-cover-border-radius` | `px` | Polmer zaobljenosti roba kartice senčila |
| `--bubble-cover-icon-border-radius` | `px` | Polmer zaobljenosti roba vsebnika ikone kartice senčila |
| `--bubble-cover-icon-background-color` | `color` | Barva ozadja vsebnika ikone kartice senčila |
| `--bubble-cover-box-shadow` | Glejte [senco okvirja](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca okvirja za kartico senčila |
| `--bubble-button-box-shadow` | Glejte [senco okvirja](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca okvirja za gumbe v kartici senčila |

</details>


#### Primer

<details>

<summary>Kartica, ki lahko upravlja rolo</summary>

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

## Select

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ta kartica omogoča dodajanje spustnega menija za entitete `input_select` / `select`. Ta kartica prav tako podpira podgumbe in vse skupne funkcije Bubble Card.

> [!TIP]
> Po želji lahko uporabite tudi podgumbe s spustnim menijem, ta funkcija je na voljo pri vseh karticah, ki podpirajo podgumbe.

### Možnosti select

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime | Vrsta | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `entity` | niz | **Obvezno** | Katera koli entiteta | Entiteta za upravljanje |
| `name` | niz | Neobvezno | Kateri koli niz | Ime za select, če ni določeno, se prikaže ime entitete |
| `icon` | niz | Neobvezno | Katera koli ikona `mdi:` | Ikona za select, če ni določena, se prikaže ikona entitete ali `entity-picture` |
| `force_icon` | boolean | Neobvezno | `true` ali `false` (privzeto) | Daje prednost ikoni namesto `entity-picture` |
| `show_state` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže ali skrije stanje entitete `entity` |
| `show_name` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ime |
| `show_icon` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaže ali skrije ikono |
| `show_last_changed` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje spremembe entitete `entity` |
| `show_last_updated` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže čas zadnje posodobitve entitete `entity` |
| `show_attribute` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaže atribut entitete `entity` pod njenim imenom (`name`) |
| `attribute` | niz | Neobvezno (obvezno, če je `show_attribute` nastavljen na `true`) | Atribut iz entitete `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobvezno | `true` (privzeto) ali `false` | Omogoči drsenje besedila, kadar vsebina presega velikost svojega vsebnika |
| `tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob kliku ikone, če ni določeno, se uporabi `more-info`. |
| `double_tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob dvojnem kliku ikone, če ni določeno, se uporabi `none`. |
| `hold_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob zadržanju ikone, če ni določeno, se uporabi `more-info`. |
| `card_layout` | niz | Neobvezno | `normal` (privzeto, če ni v pogledu razdelkov), `large` (privzeto, če je v pogledu razdelkov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | število | Neobvezno | Katero koli število | Število vrstic (višina) (npr. `2`) |
| `sub_button` | objekt | Neobvezno | Glejte [podgumbe](#podgumbi) | Doda prilagojene gumbe, pritrjene na desni |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Glavna barva ozadja za podprte elemente v kartici select |
| `--bubble-select-background-color` | `color` | Barva ozadja kartice select |
| `--bubble-select-list-border-radius` | `px` | Polmer zaobljenosti roba spustnega menija v kartici |
| `--bubble-select-list-item-accent-color` | `color` | Poudarjena barva izbranega elementa |
| `--bubble-select-list-background-color` | `color` | Barva ozadja spustnega menija v kartici |
| `--bubble-select-list-width` | `px` | Širina spustnega menija v kartici |
| `--bubble-select-arrow-background-color` | `color` | Barva ozadja puščice spustnega menija |
| `--bubble-select-button-border-radius` | `px` | Polmer zaobljenosti roba gumba select |
| `--bubble-select-border-radius` | `px` | Polmer zaobljenosti roba kartice select |
| `--bubble-select-icon-border-radius` | `px` | Polmer zaobljenosti roba vsebnika ikone kartice select |
| `--bubble-select-icon-background-color` | `color` | Barva ozadja vsebnika ikone kartice select |
| `--bubble-select-box-shadow` | Glejte [senco okvirja](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca okvirja za kartico select |

</details>


#### Primeri

<details>

<summary>Kartica select s seznamom scen</summary>

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

## Klimatska naprava

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ta kartica omogoča upravljanje entitet `climate`.

> [!TIP]
> Meni za izbiro načina je [podgumb](#podgumbi), ki se samodejno doda ob ustvarjanju kartice. Nato ga lahko po želji spremenite ali odstranite.

### Možnosti klimatske naprave

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime                     | Vrsta    | Zahteva                         | Podprte možnosti                                  | Opis                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | niz  | **Obvezno**                        | Entiteta klimatske naprave                                   | Entiteta za upravljanje (npr. `climate.living_room`).                                                            |
| `name`                  | niz  | Neobvezno                            | Kateri koli niz                                       | Prilagojeno ime za kartico. Če ni določeno, se prikaže ime entitete.                                    |
| `icon`                  | niz  | Neobvezno                            | Katera koli ikona `mdi:`                                  | Prilagojena ikona za kartico. Če ni določena, se uporabi ikona entitete ali `entity-picture`.                   |
| `force_icon`            | boolean | Neobvezno                            | `true` ali `false` (privzeto)                     | Daje prednost ikoni namesto `entity-picture`.                                                           |
| `show_state`            | boolean | Neobvezno                            | `true` ali `false` (privzeto)                     | Prikaže ali skrije trenutno stanje entitete `entity`.                                                                 |
| `show_name`             | boolean | Neobvezno                            | `true` (privzeto) ali `false`                     | Prikaže ali skrije ime entitete.                                                                            |
| `show_icon`             | boolean | Neobvezno                            | `true` (privzeto) ali `false`                     | Prikaže ali skrije ikono.                                                                                          |
| `hide_target_temp_low`  | boolean | Neobvezno (samo za entitete, ki podpirajo `target_temp_low`) | `true` ali `false` (privzeto) | Skrije nastavitev spodnje ciljne temperature, če jo entiteta `entity` podpira.                                          |
| `hide_target_temp_high` | boolean | Neobvezno (samo za entitete, ki podpirajo `target_temp_high`)| `true` ali `false` (privzeto) | Skrije nastavitev zgornje ciljne temperature, če jo entiteta `entity` podpira.                                         |
| `state_color`           | boolean | Neobvezno                            | `true` ali `false` (privzeto)                     | Uporabi stalno barvo ozadja, kadar je entiteta klimatske naprave vklopljena.                                              |
| `step` | število | Neobvezno | Katero koli število | Korak temperature. |
| `min_temp` | število | Neobvezno | Katero koli število | Najmanjša temperatura. |
| `max_temp` | število | Neobvezno | Katero koli število | Največja temperatura. |
| `button_action` | objekt | Neobvezno | `tap_action`, `double_tap_action` ali `hold_action`, glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Omogoča spremembo privzetih dejanj ob kliku gumba. |
| `tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob kliku ikone, če ni določeno, se uporabi `more-info`. |
| `double_tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob dvojnem kliku ikone, če ni določeno, se uporabi `none`. |
| `hold_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob zadržanju ikone, če ni določeno, se uporabi `more-info`. |                              |
| `main_buttons_position` | niz | Neobvezno | `default` ali `bottom` | Premakne gumbe za upravljanje klime na dno (pritrjeno) |
| `main_buttons_full_width` | boolean | Neobvezno | `true` ali `false` | Naredi spodnje gumbe za dejanja polne širine (privzeto: `true`, kadar je položaj `bottom`) |
| `main_buttons_alignment` | niz | Neobvezno | `end` (privzeto), `center`, `start`, `space-between` | Poravnava spodnjih gumbov za dejanja, kadar niso polne širine |
| `card_layout` | niz | Neobvezno | `normal` (privzeto, če ni v pogledu razdelkov), `large` (privzeto, če je v pogledu razdelkov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | število | Neobvezno | Katero koli število | Število vrstic (višina) (npr. `2`) |
| `sub_button`            | objekt  | Neobvezno                            | Glejte [podgumbe](#podgumbi)                | Doda prilagojene gumbe, pritrjene na desni. Uporabno za meni za izbiro načina klime.                                  |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Glavna barva ozadja za podprte elemente v kartici klime |
| `--bubble-climate-border-radius` | `px` | Polmer zaobljenosti roba za podprte elemente v kartici klime |
| `--bubble-climate-button-background-color` | `color` | Barva ozadja gumbov kartice klime |
| `--bubble-climate-icon-border-radius` | `px` | Polmer zaobljenosti roba vsebnika ikone kartice klime |
| `--bubble-state-climate-fan-only-color` | `color` | Barva prekrivanja za stanje samo ventilator |
| `--bubble-state-climate-dry-color` | `color` | Barva prekrivanja za stanje sušenja |
| `--bubble-state-climate-cool-color` | `color` | Barva prekrivanja za stanje hlajenja |
| `--bubble-state-climate-heat-color` | `color` | Barva prekrivanja za stanje ogrevanja |
| `--bubble-state-climate-auto-color` | `color` | Barva prekrivanja za samodejno stanje |
| `--bubble-state-climate-heat-cool-color` | `color` | Barva prekrivanja za stanje ogrevanje-hlajenje |
| `--bubble-climate-accent-color` | `color` | Poudarjena barva za kartico klime |
| `--bubble-climate-box-shadow` | Glejte [senco okvirja](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca okvirja za vsebnik klime. |

</details>


#### Primeri

<details>

<summary>Kartica klime s spustnim menijem načinov HVAC</summary>

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

## Koledar

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ta kartica omogoča prikaz entitet koledarja. Njena vsebina je pomikljiva, zato lahko enostavno prebrskate prihajajoče dogodke.

### Možnosti koledarja

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime                | Vrsta    | Zahteva  | Podprte možnosti                               | Opis                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | število  | Neobvezno     | Katero koli število (najmanj: 1)                        | Število koledarskih dni, za katere se pridobijo dogodki, od zdaj do konca N-tega dne (privzeto: 7) |
| `entities`          | objekt  | **Obvezno** | Objekt entitete koledarja (glejte spodaj)            | Entiteta za upravljanje (npr. `calendar.main_calendar`).                                 |
| `entities.entity`   | niz  | **Obvezno** | Entiteta koledarja                               | Entiteta koledarja za prikaz                                                          |
| `entities.color`    | niz  | Neobvezno     | Barva                                         | Prilagojena barva za oznako koledarja. Če ni določena, se izbere samodejna barva |
| `days`              | število  | Neobvezno     | Katero koli število (najmanj: 1)                         | Število koledarskih dni, za katere se pridobijo dogodki, od zdaj do konca N-tega dne (privzeto: 7) |
| `limit`             | število  | Neobvezno     | Število                                        | Število dogodkov, ki bodo prikazani na kartici                                  |
| `show_end`          | boolean | Neobvezno     | `true` ali `false` (privzeto)                     | Prikaže ali skrije čas konca dogodkov                                                    |
| `show_progress`     | boolean | Neobvezno     | `true` (privzeto) ali `false`                     | Prikaže ali skrije vrstico napredka dogodka                                                     |
| `show_started_events`| boolean | Neobvezno     | `true` (privzeto) ali `false`                     | Prikaže ali skrije dogodke, ki trenutno potekajo. Večdnevni dogodki se presojajo po posameznih dnevih, zato je skrit samo dan, ki poteka, prihodnji dnevi pa ostanejo vidni |
| `scrolling_effect`  | boolean | Neobvezno | `true` (privzeto) ali `false` | Omogoči drsenje besedila, kadar vsebina presega velikost svojega vsebnika |
| `event_action` | objekt | Neobvezno | `tap_action`, `double_tap_action` ali `hold_action`, glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Omogoča dodajanje dejanj ob kliku dogodka. |
| `tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob kliku dneva, če ni določeno, se uporabi `none`. |
| `double_tap_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob dvojnem kliku dneva, če ni določeno, se uporabi `none`. |
| `hold_action` | objekt | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določa vrsto dejanja ob zadržanju dneva, če ni določeno, se uporabi `none`. |
| `card_layout` | niz | Neobvezno | `normal` (privzeto, če ni v pogledu razdelkov), `large` (privzeto, če je v pogledu razdelkov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | število | Neobvezno | Katero koli število | Število vrstic (višina) (npr. `2`) |
| `sub_button` | objekt | Neobvezno | Glejte [podgumbe](#podgumbi) | Doda prilagojene gumbe, pritrjene na desni |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka                                  | Pričakovana vrednost | Opis                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Glavna barva ozadja za podprte elemente v kartici koledarja  |
| `--bubble-calendar-border-radius`         | `px`           | Polmer zaobljenosti roba za podprte elemente v kartici koledarja |
| `--bubble-calendar-height`                | `px`           | Višina kartice koledarja                                        |

</details>

#### Primeri

<details>

<summary>Kartica koledarja z omejenim številom dogodkov</summary>

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

<summary>Kartica koledarja s časom konca in vrstico napredka</summary>

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


## Ločilo

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ta kartica je preprosto ločilo za razdelitev pojavnega okna na kategorije oziroma odseke, na primer Luči, Naprave, Senčila, Nastavitve, Avtomatizacije...

### Možnosti ločila

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime | Tip | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `name` | string | Neobvezno, a priporočeno | Poljuben niz | Ime za vaše ločilo |
| `icon` | string | Neobvezno, a priporočeno | Poljubna ikona `mdi:` | Ikona za vaše ločilo |
| `card_layout` | string | Neobvezno | `normal` (privzeto, če ni v pogledu odsekov), `large` (privzeto, če je v pogledu odsekov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | number | Neobvezno | Poljubno število | Število vrstic (višina) (na primer `2`) |
| `sub_button` | object | Neobvezno | Glejte [podgumbi](#podgumbi) | Dodajte prilagojene gumbe, pritrjene na desno stran |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Barva ozadja za črto v ločilu |

</details>

#### Primer

<details>

<summary>Ločilo/delilnik za odsek "Senčila"</summary>

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

## Prazen stolpec

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ta kartica je tu, da zapolni prazen stolpec. To je uporabno, če imate v pojavnem oknu `horizontal-stack` samo z eno kartico. Oglejte si spodnji desni kot tega posnetka zaslona, da je (ne) vidite.

### Možnosti praznega stolpca

Ta kartica nima možnosti in ne podpira [oblikovanja](#oblikovanje), podpira pa možnosti postavitve za odseke HA.

#### Primer

<details>

<summary>Prazen stolpec v vodoravnem skladu</summary>

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

## Samo podgumbi

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Ta kartica je namenjena izključno podgumbom. Popolna je za menije, hitra dejanja, informativne oznake ali fiksno nogo na dnu strani.

> [!IMPORTANT]  
> Ta kartica uporablja novo shemo podgumbov. Uporabite `sub_button.bottom` za definiranje svojih gumbov. Odsek `sub_button.main` je prezrt.

### Možnosti kartice Samo podgumbi

<details>

<summary><b>Možnosti (YAML in opisi)</b></summary>

| Ime | Tip | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obvezno** | Glejte [podgumbi](#podgumbi) | Definirajte svoje podgumbe z uporabo odseka `bottom` |
| `hide_main_background` | boolean | Neobvezno | `true` ali `false` (privzeto) | Odstrani ozadje kartice |
| `footer_mode` | boolean | Neobvezno | `true` ali `false` (privzeto) | Pritrdi kartico na dno strani |
| `footer_full_width` | boolean | Neobvezno | `true` ali `false` (privzeto) | Naredi nogo v polni širini (100 %) |
| `footer_width` | number | Neobvezno | Poljubno število | Širina noge v pikslih, kadar je `footer_full_width` nastavljen na `false` |
| `footer_bottom_offset` | number | Neobvezno | Poljubno število | Razdalja od dna strani v pikslih (privzeto: `16`) |
| `card_layout` | string | Neobvezno | `normal` (privzeto, če ni v pogledu odsekov), `large` (privzeto, če je v pogledu odsekov), `large-2-rows`, `large-sub-buttons-grid` | Slog postavitve kartice, glejte [postavitve kartic](#postavitve-kartic) |
| `rows` | number | Neobvezno | Poljubno število | Število vrstic (višina) (na primer `2`) |

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Širina noge, kadar je `footer_full_width` nastavljen na `false` |
| `--bubble-footer-bottom` | `px` | Odmik noge od dna |
| `--bubble-footer-box-shadow` | glejte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senca za vsebnik noge |

</details>

#### Primeri

<details>

<summary>Oznake (kot na posnetku zaslona)</summary>

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

<summary>Fiksni meni v nogi</summary>

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

## Podgumbi

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

V vsaki kartici, ki podpira to možnost, lahko dodate podgumbe za še dodatno prilagoditev svojih kartic. Lahko na primer ustvarite gumb, ki upravlja sesalnik, vremensko kartico ali skoraj karkoli si zamislite. Ti podgumbi podpirajo dejanja dotika in večino možnosti gumba.

Podgumbi zdaj podpirajo tri vrste: **privzeto (gumb)**, **drsnik** in **spustni seznam / select**. Vrste lahko mešate znotraj iste kartice, podgumbe postavite na vrh ali dno ter jih organizirate v skupine za naprednejše postavitve.

#### Postavitev podgumbov in skupine

<details>

<summary><b>Struktura podgumbov (main / bottom + skupine)</b></summary>

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

**Opombe:**
- `main` in `bottom` sta dva neodvisna odseka. Podgumbi v `bottom` so pritrjeni na dno kartice.
- `main_layout` in `bottom_layout` sprejemata `inline` (privzeto) ali `rows` za navpično skladanje skupin.
- Skupine so objekti s poljem `group` in neobvezno `buttons_layout` (`inline` ali `column`).
- `justify_content` je na voljo **samo za spodnje skupine** (`start`, `center`, `end`, `fill`).
- Kadar so prisotni spodnji podgumbi, se postavitev kartice samodejno preklopi na `large`, razen če izrecno nastavite drugo postavitev.
- Starejša polja `sub_button` so še vedno podprta in obravnavana kot odsek `main`.

</details>

### Možnosti podgumbov

<details>

<summary><b>Možnosti (YAML in opis)</b></summary>

| Ime | Tip | Zahteva | Podprte možnosti | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | Neobvezno | Poljubna entiteta | Entiteta za upravljanje |
| `name` | string | Neobvezno | Poljuben niz | Ime za vaš podgumb, če ni določeno, se prikaže ime entitete |
| `icon` | string | Neobvezno | Poljubna ikona `mdi:` | Ikona za vaš podgumb, če ni določena, se prikaže ikona entitete ali slika entitete |
| `force_icon` | boolean | Neobvezno | `true` ali `false` (privzeto) | Vsili ikono, tudi če je na voljo slika entitete |
| `sub_button_type` | string | Neobvezno | `default`, `slider` ali `select` | Izberite vrsto podgumba |
| `show_background` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaži ozadje za podgumb, njegova barva se bo spreminjala glede na stanje entitete |
| `state_background` | boolean | Neobvezno | `true` (privzeto) ali `false` | Uporabi barvo stanja, kadar je entiteta `on` |
| `light_background` | boolean | Neobvezno | `true` (privzeto) ali `false` | Uporabi barvo luči za ozadje, kadar je na voljo |
| `show_state` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaži ali skrij stanje vaše `entity` |
| `show_name` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaži ali skrij ime |
| `show_icon` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaži ali skrij ikono |
| `show_last_changed` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaži čas zadnje spremembe vaše `entity` |
| `show_last_updated` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaži čas zadnje posodobitve vaše `entity` |
| `show_attribute` | boolean | Neobvezno | `true` ali `false` (privzeto) | Prikaži atribut vaše `entity` pod njenim `name` |
| `attribute` | string | Neobvezno (obvezno, če je `show_attribute` nastavljen na `true`) | Atribut iz vaše `entity` | Atribut, ki naj se prikaže (na primer `brightness`) |
| `select_attribute` | string | Neobvezno | Seznam atributov iz vaše `entity` (glejte podprte možnosti zgoraj) | Ta seznam atributov ob kliku odpre spustni seznam (na primer `effect_list`) |
| `show_arrow` | boolean | Neobvezno | `true` (privzeto) ali `false` | Prikaži ali skrij puščico spustnega seznama za select podgumbe |
| `scrolling_effect` | boolean | Neobvezno | `true` (privzeto) ali `false` | Omogoči drsenje besedila, kadar vsebina presega velikost vsebnika |
| `tap_action` | object | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določi vrsto dejanja ob kliku na podgumb, če ni določeno, se uporabi `more-info`. |
| `double_tap_action` | object | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določi vrsto dejanja ob dvojnem kliku na podgumb, če ni določeno, se uporabi `none`. |
| `hold_action` | object | Neobvezno | Glejte [dejanja](#dejanja-dotika-dvojnega-dotika-in-zadržanja) | Določi vrsto dejanja ob zadržanju podgumba, če ni določeno, se uporabi `more-info`. |
| `fill_width` | boolean | Neobvezno | `true` ali `false` | Zapolni razpoložljivo širino (privzeto: `false` za main, `true` za bottom) |
| `width` | number ali string | Neobvezno | Poljubno število ali dolžina CSS | Prilagojena širina (`px` za odsek main, privzeto `%` za odsek bottom) |
| `custom_height` | number | Neobvezno | Poljubno število | Prilagojena višina v pikslih |
| `content_layout` | string | Neobvezno | `icon-left` (privzeto), `icon-top`, `icon-bottom`, `icon-right` | Postavitev ikone znotraj podgumba |
| `always_visible` | boolean | Neobvezno | `true` ali `false` (privzeto) | **Samo drsnik.** Vedno prikaži drsnik namesto da se odpre ob dotiku |
| `show_button_info` | boolean | Neobvezno | `true` ali `false` (privzeto) | **Samo drsnik.** Prikaži ikono/ime/stanje, kadar je omogočen `always_visible` |
| `visibility` | object ali list | Neobvezno | Glejte [pogoje](#pogoji) | Prikaži ali skrij podgumb glede na pogoje |
| `hide_when_parent_unavailable` | boolean | Neobvezno | `true` ali `false` (privzeto) | Skrij podgumb, če je entiteta nadrejene kartice nedosegljiva |
| `css_class` | string | Neobvezno | Kateri koli niz | Dodaten razred CSS na podgumbu, da ga lahko ciljate v svojem [oblikovanju](#oblikovanje) ne glede na njegovo ime (na primer `My value` da `.my-value`) |

</details>

<details>

<summary><b>Možnosti podgumba drsnika (enake kot pri drsnikih gumbov)</b></summary>

<br>

Podgumbi tipa drsnik podpirajo enake možnosti kot drsniki gumbov, vključno z:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Spremenljivke CSS (glejte <a href="#oblikovanje">Oblikovanje</a>)</b></summary>

| Spremenljivka | Pričakovana vrednost | Opis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radij zaokrožitve robov za podgumbe |
| `--bubble-sub-button-background-color` | `color` | Barva ozadja za podgumbe |
| `--bubble-sub-button-outline` | `box-shadow` | Obroba, dodana podgumbu ali drsniku, samo takrat, ko se ta element izriše v isti barvi kot kartica za njim, kar bi ga naredilo nevidnega (nastavite jo na `none`, da jo odstranite) |
| `--bubble-sub-slider-border-radius` | `px` | Radij zaokrožitve robov za podgumbe drsnika |
| `--bubble-sub-slider-background-color` | `color` | Barva ozadja za podgumbe drsnika |
| `--bubble-sub-slider-height` | `px` | Višina za vedno vidne podgumbe drsnika |
| `--bubble-sub-slider-outline` | `box-shadow` | Obroba samo za podgumbe drsnika, povrne se na `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Barva besedila na svetlih ozadjih podgumbov |

</details>

#### Primeri

<details>

<summary>Gumb z nekaj podgumbi za izdelavo kartice sesalnika (kot na posnetku zaslona)</summary>

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

<summary>Drsnik gumba s podgumbom, ki prikaže svetlost, in enim, ki preklopi luč (kot na posnetku zaslona)</summary>

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

<summary>Gumb, ki prikazuje notranjo in zunanjo temperaturo ter vreme za danes in jutri (s posnetkom zaslona)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Na žalost je pri meni ves čas oblačno, a vse ikone se spreminjajo glede na vreme.

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

## Postavitve kartic

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card v celoti podpira pogled odsekov Home Assistant, postavitev kartice lahko spremenite tako, da je kartica večja, in tudi spremenite število stolpcev ali vrstic, ki naj jih kartica zaseda v vašem pogledu odsekov (samo pri karticah, ki to možnost podpirajo). Te postavitve so podprte tudi v vseh drugih vrstah pogledov.

<details>

<summary><b>Razpoložljive postavitve kartic</b></summary>

| Postavitev | Opis |
| --- | --- |
| `normal` | Običajna postavitev (ni optimizirana za pogled odsekov) |
| `large` | Večja postavitev, ki se bo prilagodila izbranim vrsticam v pogledu odsekov (optimizirana za pogled odsekov) |
| `large-2-rows` | Večja postavitev z 2 vrsticama podgumbov, ki se bo prilagodila izbranim vrsticam v pogledu odsekov (optimizirana za pogled odsekov) |
| `large-sub-buttons-grid` | Ta postavitev prikaže podgumbe v mreži, `rows` mora biti nastavljen na vsaj `2`.

</details>

#### Primeri

<details>

<summary>Velik gumb, ki prikazuje statistiko energije z 2 vrsticama podgumbov (s posnetkom zaslona)</summary>

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

<summary>Velik gumb z več vrsticami in 12 podgumbi</summary>

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

## Pogoji

Nekatere možnosti delujejo s pogoji, ki so zapisani natanko tako kot tisti v [pogojni kartici](https://www.home-assistant.io/dashboards/conditional/) Home Assistant:

- `visibility` na [podgumbu](#podgumbi), da ga prikažete ali skrijete
- `trigger` na [pojavnem oknu](#pojavno-okno), da ga odprete, ko so pogoji izpolnjeni
- `checkConditionsMet(conditions, hass)` v vaših [predlogah](#predloge), ko potrebujete odgovor v svoji kodi

Ovrednoti se vsaka vrsta pogoja Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, pa tudi skupine `and`, `or` in `not`. Delujejo tudi pogoji iz graditelja pogojev Home Assistant, tisti, ki so poimenovani po svoji domeni, kot so `sun.is_up`, `light.is_on`, `zone.in_zone` ali `temperature.is_value`, z njihovimi nastavitvami `target`, `options`, `behavior` in `for`.

<details>

<summary><b>Primer</b></summary>

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
> Pogoji se ovrednotijo v vašem brskalniku, zato tistih nekaj, ki potrebujejo strežnik Home Assistant, ne more biti povsem natančnih: sončni vzhod in zahod se bereta iz entitete `sun.sun`, namesto da bi se preračunala, trajanje `for` pa se meri od zadnje spremembe stanja, brez zgodovine iz recorder.
>
> `view_columns` je sprejet, vendar vedno uspe, saj stolpcev vašega pogleda nikoli ne razporeja Bubble Card. Vrsta pogoja, ki je Bubble Card ne pozna, se enkrat javi v konzoli vašega brskalnika, namesto da bi tiho odpovedala, tako da lahko ločite tipkarsko napako od manjkajoče funkcije.

<br>

---

<br>

## Dejanja dotika, dvojnega dotika in zadržanja

Na karticah, ki to možnost podpirajo, lahko uporabite tudi privzeta dejanja dotika, dejanja dvojnega dotika in dejanja zadržanja iz Home Assistant. To vam na primer omogoča, da prikažete okno "več informacij" z zadržanjem ikone gumba ali zaženete storitev ob pritisku podgumba.

**Opomba: kadar je nastavljen `double_tap_action`, bo imel običajni `tap_action` zamik 200 ms, da omogoči zaznavanje
dvojnega dotika. Če je ta zamik neželen, nastavite `double_tap_action` na `none`, da onemogočite obravnavo dvojnega dotika.**

### Možnosti dejanj

<details>

<summary><b>Možnosti (YAML in opis)</b></summary>

| Ime | Tip | Podprte možnosti | Opis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Dejanje, ki naj se izvede |
| `target` | object |  | Deluje samo z `call-service`. Sledi [sintaksi Home Assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Poljubna pot v vaši nadzorni plošči | Pot, na katero se premakne (na primer `'#kitchen'` za odpiranje pojavnega okna), kadar je dejanje določeno kot navigate |
| `url_path` | string | Poljubna povezava | URL, ki se odpre ob kliku (na primer `https://www.google.com`), kadar je dejanje `url` |
| `service` | string | Poljubna storitev | Storitev za klic (na primer `media_player.media_play_pause`), kadar je `action` določen kot `call-service` |
| `data` ali `service_data` | object | Poljubni podatki storitve | Podatki storitve, ki naj se vključijo (na primer `entity_id: media_player.kitchen`), kadar je `action` določen kot `call-service` |
| `confirmation` | object | Glejte [potrditev](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Prikaže pojavno okno za potrditev (ne Bubble Card okno), preglasi privzeti objekt `confirmation` |

</details>

#### Primer

<details>

<summary>Gumb za odpiranje pojavnega okna</summary>

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

## Oblikovanje

Lastne sloge lahko dodate za spremembo CSS vseh kartic **brez uporabe card-mod** na štiri načine:

- V urejevalniku pojdite na kartico, ki jo želite spremeniti, nato se pomaknite na _Možnosti oblikovanja > Predloge po meri in JS predloge_ ter dodajte svoje lastne sloge (glejte nasvete in primere spodaj).
- V urejevalniku (ali v [YAML](#moduli)) pojdite na kartico, ki jo želite spremeniti, nato se pomaknite na _Moduli_, nato ustvarite nov modul (na voljo bo vsem karticam), ali pojdite v **Module Store** za namestitev katerega koli razpoložljivega modula (več podrobnosti o modulih najdete [spodaj](#moduli)).
- V datoteki [teme](https://www.home-assistant.io/integrations/frontend/#defining-themes) z dodajanjem CSS spremenljivk v YAML (te so na voljo v dokumentaciji vsake kartice zgoraj). To omogoča globalne spremembe.

  <details>
  
  <summary>Primer</a></summary>
  
  <br>

  Ne kopirajte vrstice `Bubble:`, to je ime teme, ki jo uporabljate. Prav tako morate odstraniti `--` iz spremenljivk.

  Po vsaki spremembi morate zagnati akcijo [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes), da temo osvežite.

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
  
- V YAML z dodajanjem `styles: |`, ki mu sledijo vaši lastni slogi (glejte nasvete in primere spodaj).

> [!TIP]  
> **Da razumete, katere slogovne razrede lahko spreminjate**, si lahko ogledate mapo [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) v tem repozitoriju. V vsaki mapi kartice boste našli datoteko z imenom `styles.css`. Te datoteke vsebujejo vse uporabljene sloge. To omogoča veliko več možnosti kot CSS spremenljivke, vendar jih je treba dodati posamezno vsaki kartici.
> 
> Najdete lahko tudi veliko [primerov skupnosti](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ali nekatere z [foruma Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/), če malo poiščete.
>
> Temo Bubble za Home Assistant (kot na posnetkih zaslona) najdete [tukaj](https://github.com/Clooos/Bubble).
>
> Kmalu pride tudi video vodič na mojem [YouTube kanalu](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Upoštevajte, da boste morda morali dodati `!important;` nekaterim CSS slogom, ki so že definirani (glejte primere spodaj).

> [!TIP]  
> Podgumbe je mogoče ciljati z razredi na podlagi imena. Na primer, podgumb z imenom "My sub-button" lahko oblikujete z `.my-sub-button`. Podgumbi drsnika prav tako izpostavljajo `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` itd.
>
> Razred na podlagi imena se spremeni, ko podgumb preimenujete, in se prevede, ko se prevede ime. Nastavite `css_class` na podgumbu, da dobite svoj razred, ki se nikoli ne premakne, ne glede na ime in ne glede na jezik.

#### Primeri

<details>

<summary>Spreminjanje velikosti pisave katere koli kartice Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Spreminjanje barve ozadja enega gumba v vodoravnem skladu gumbov</summary>

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

<summary>Spreminjanje barve ozadja kartice</summary>

<br>

Ta deluje na vseh tipih kartic Bubble Card (razen za pojavna okna):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ta naredi enako, vendar samo v kartici gumba (deluje tudi za glavo pojavnega okna): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Za spremembo barve, ko je stanje `on`, si oglejte slogovne predloge spodaj.

</details>

<details>

<summary>Spreminjanje barve drsnika gumba</summary>

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

<summary>Spreminjanje barve črte ločila</summary>

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

<summary>Spreminjanje barve ikone</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Za ikono v vodoravnem skladu gumbov.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Spreminjanje barve ozadja vsebnika ikone</summary>

<br>

Ta deluje na vseh tipih kartic Bubble Card (razen za pojavna okna):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ta naredi enako za glavo pojavnega okna: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Spreminjanje velikosti podgumbov (odlično za veliko postavitev)</summary>

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

<summary>Spreminjanje barve ozadja drugega podgumba</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Spreminjanje velikosti ikone</summary>

<br>

Za glavno ikono.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Za ikone podgumbov.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Uporaba slike namesto ikone v podgumbu</summary>

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

Sliko preprosto naložite v mapo "pictures" (ali kakršno koli ime želite) v mapi "www" Home Assistant.

</details>

<details>

<summary>Napreden primer: Ustvarjanje vodoravne vrstice podgumbov (vključen posnetek zaslona)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> To zares obožujem, uporabljam ga kot glavo na svoji nadzorni plošči.

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

## Predloge

**Bubble Card ne podpira predlog Jinja**, vendar lahko napredni uporabniki dodajo predloge v JS neposredno v svojih [lastnih slogih](#oblikovanje). To na primer omogoča dinamično spreminjanje ikone, besedila ali barv elementa, pogojno prikazovanje ali skrivanje elementa (kot je podgumb), ali skoraj karkoli na podlagi stanja, atributa in več.

> [!TIP]  
> Več informacij o JS predlogah [tukaj](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Moj nasvet je, da **vedno preverite konzolo brskalnika**, da se prepričate, da vse deluje pravilno.

> [!IMPORTANT]  
> **Vse predloge, ki ne spreminjajo lastnosti CSS, morajo biti postavljene na konec! Kot spreminjanje ikone, besedila ali katerega koli elementa.**

#### Razpoložljive spremenljivke in funkcije

<details>

<summary>Spremenljivke</summary>

<br>

V večini kartic imate dostop do teh spremenljivk:

- `state` vrne stanje vaše definirane `entity`.
  
- `entity` vrne vašo entiteto, ki ste jo definirali, na primer `switch.test` v tem primeru.
  
- `icon` lahko uporabite tako za spremembo ikone `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` vrne stanje definirane `entity` prvega podgumba, `[0]` je stanje prvega podgumba, `[1]` drugega...
  
- `subButtonIcon[0]` lahko uporabite tako za spremembo ikone prvega podgumba `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` je ikona prvega podgumba, `[1]` drugega...
  
- `card` vrne element kartice v DOM.
  
- `hass` je napredna spremenljivka, ki vam omogoča še več nadzora, na primer lahko vrnete stanje `light.kitchen` takole `hass.states['light.kitchen'].state` ali atribut takole `hass.states[entity].attributes.brightness`.

- `this` vrne veliko koristnih informacij o vaši namestitvi in nadzorni plošči, uporabite to samo, če veste, kaj počnete.

</details>

<details>

<summary>Funkcije</summary>

<br>

Imate dostop do vseh globalnih JS funkcij, poleg tega pa tudi do:

- `getWeatherIcon` lahko uporabite za vrnitev vremenske ikone na podlagi stanja, ki vrača vreme. Na primer, lahko naredite `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, da spremenite ikono tretjega podgumba v današnjo vremensko ikono, `.forecast[1]?.condition` je za jutri...

  Za to boste morali ustvariti predlogo senzorja. Tukaj je, kaj lahko dodate v svojo `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` vrne `true`, ko je seznam [pogojev](#pogoji) izpolnjen, na primer `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` lahko uporabite za prevod stanja (lahko se uporabi tudi za pridobitev enote stanja, brez ročnega dodajanja).
- `hass.formatEntityAttributeValue(state, "attribute")` lahko uporabite za prevod atributa (lahko se uporabi tudi za pridobitev enote stanja, brez ročnega dodajanja).

</details>

#### Primeri

Spodaj najdete veliko primerov, prav tako pa najdete zelo napredne predloge na moji [strani Patreon](https://www.patreon.com/c/Clooos), na primer eno (mojo najljubšo), ki omogoča do štiri pogojne značke, postavljene okoli ikon kartice. To je tudi odličen način za spoznavanje vseh možnosti lastnih slogov in predlog Bubble Card!

<details>
<summary>Primeri z moje strani Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Dodajanje značk v slogu Home Assistant kateri koli kartici</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Prikaz formatiranega datuma in časa v ločilu brez uporabe katere koli entitete</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Prikaz stanja podgumba v dveh vrsticah</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Prilagajanje oznak in ikon znotraj podgumba select</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Dodajanje trajnega pojavnega opomnika, ki se prikaže samo, ko je potreben</a>
</p>

<br>

</details>

<details>

<summary>Spreminjanje barve ozadja gumba, ki je rdeč, ko je stanje <code>off</code>, in moder, ko je stanje <code>on</code></summary>

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

<summary>Spreminjanje barve ozadja gumba na podlagi entitete za vodoravni sklad gumbov</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Pogojno prikazovanje/skrivanje podgumba</summary>

<br>

Ta prikazuje prvi podgumb samo, ko je moj sesalnik zataknjen.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ta prikazuje podgumb, ko je baterija pod 10 %. Uporabno s podgumbom, ki prikazuje "Nizka baterija".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Pogojno spreminjanje ikone ali ikone podgumba</summary>

<br>

Ta spreminja ikono gumba samo, ko je sesalnik zataknjen.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ta spreminja ikono prvega podgumba samo, ko je sesalnik zataknjen.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Pogojno spreminjanje barve ikone ali ikone podgumba</summary>

<br>

Ta spreminja barvo ikone gumba na podlagi njegovega stanja.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ta spreminja barvo ikone podgumba na podlagi njegovega stanja. `.bubble-sub-button-1` je prvi podgumb, zamenjajte `1`, če želite spremeniti ikono drugega podgumba.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Pogojno animiranje ikone ventilatorja</summary>

<br>

Ta vrti ikono gumba, ko je ventilator v stanju `on`.
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

<summary>Predloge za besedilo (kot je ime ali stanje)</summary>

<br>

Ta spreminja ime/stanje gumba v "Trenutno je sončno" glede na vaše vreme.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ali ko je uporabljeno za podgumbe:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Če želite predlogo za stanje (`.bubble-state`), ne vklopite `show_state: true`, samo vklopite `show_attribute: true` brez atributa.

</details>

<details>

<summary>Napreden primer: Spreminjanje barve podgumba, ko je pojavno okno odprto</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Napreden primer: Predloga imena ločila na podlagi stanja, prevedenega v vaš jezik</summary>

<br>

Uporabite lahko `hass.formatEntityState(state)` za prevod stanja in `hass.formatEntityAttributeValue(state, "attribute")` za prevod atributa.

Ta spreminja ime in ikono na podlagi vremena, "Nuageux" pomeni "Oblačno" v francoščini.

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

## Moduli

Moduli so zmogljiva funkcija, ki vam omogoča shranjevanje, ponovno uporabo in deljenje lastnih slogov in predlog med vsemi vašimi kartic Bubble Card. Namesto kopiranja in lepljenja iste kode v več kartic lahko ustvarite modul in ga uporabite kjer koli ga potrebujete. To bistveno olajša in izboljša upravljanje videza in vzdušja vaše nadzorne plošče.

Vendar je ta funkcija veliko močnejša od tega, saj vam omogoča, da sami dodate prave funkcije v urejevalniku Bubble Card, z uporabo vseh privzetih možnosti [obrazca Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
Izbirnik objekta je bil izboljšan, da prikazuje spremembe v živo in pravilno podpira atribute.

Modul lahko odgovori tudi izbirniku kartic Home Assistant poleg vgrajenih [predlogov za entitete](#predlogi-za-entitete): uporabite `suggestions` za kartice, ki jih lahko opiše vnaprej, in `suggestions_code`, kadar jih je treba izračunati iz vaše namestitve, na primer pojavno okno, sestavljeno iz vseh entitet prostora, ki mu pripada izbrana entiteta. Oba ključa sta dokumentirana [tukaj](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Prav tako lahko brskate po **Module Store**, kjer najdete in namestite [module, ki jih je ustvarila skupnost](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ali delite svoje lastne stvaritve!

> [!TIP]
> Koda modula deluje popolnoma enako kot koda v razdelku `styles` kartice. Na voljo so vse enake spremenljivke in funkcije iz razdelka [Predloge](#predloge).

<br>

### Začetna namestitev

> [!IMPORTANT]
> Od različice v3.1.0 naprej je Bubble Card Tools priporočeno shrambeno zaledje za module. Stara metoda s predlogo senzorja še vedno deluje za obstoječe namestitve, vendar so novi moduli in funkcije Module Store najbolje podprti prek Bubble Card Tools.

Integracija Bubble Card Tools omogoča urejevalnik modulov in Module Store ter shranjuje module kot posamezne datoteke YAML. Obstoječi moduli se samodejno migrirajo.

Koraki namestitve in konfiguracije so pojasnjeni tukaj:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Urejevalnik modulov

Do urejevalnika modulov lahko dostopate iz nastavitev katere koli kartice, pod razdelkom **Moduli**. Urejevalnik ponuja dva glavna zavihka:

#### Zavihek Moji moduli

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Ta zavihek prikazuje vse vaše nameščene module in vam omogoča:

- **Uporabo** obstoječih modulov na trenutni kartici
- **Ustvarjanje** novega modula od začetka
- **Urejanje** obstoječih modulov z ogledom v živo
- **Brisanje** modulov, ki jih ne potrebujete več
- **Iskanje** in **razvrščanje** modulov (po abecedi, nedavno, najprej aktivni)
- **Nastavitev globalnega stanja**, da se modul samodejno uporabi na vseh karticah
- **Uvoz/izvoz** modulov za varnostno kopiranje ali deljenje
- **Pišite predloge za entitete** v urejevalniku modula, pod **Izbirno: predlogi za entitete**, da bo vaš modul ponujen v izbirniku kartic Home Assistant. Pravila in izračunani predlogi se preverjajo sproti med pisanjem, napaka tam prepreči shranjevanje, predogled pa prikaže predlagane kartice za katero koli entiteto, ki jo izberete

#### Zavihek Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Ta zavihek prikazuje [vse razpoložljive module skupnosti](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) in vam omogoča:

- **Brskanje** po vseh modulih, ki jih je ustvarila skupnost
- **Iskanje** in filtriranje modulov po imenu, združljivosti ali ključnih besedah
- **Namestitev** modulov z enim klikom
- **Posodabljanje** nameščenih modulov, ko so na voljo nove različice

> [!TIP]
> V urejevalniku lahko omogočite nepodprte module za testiranje modulov, ki še niso označeni kot združljivi z določenim tipom kartice.

<br>

### Kako uporabljati module

#### Ustvarjanje novega modula

<details>

<summary>Kliknite za razširitev</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Pojdite v urejevalnik katere koli kartice in razširite razdelek **Moduli**.
2. Kliknite na **Ustvari nov modul**.
3. Izpolnite informacije o modulu.
4. Vpišite svojo kodo predloge CSS in/ali JavaScript v urejevalniku **Koda**.
5. (Neobvezno) Ustvarite vmesnik za konfiguracijo po meri v razdelku **Editor** (kot izbirnik barv na zgornjem posnetku zaslona, celotna dokumentacija je na voljo [tukaj](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Neobvezno) Napišite svoje **Predlogi za entitete**, da bo vaš modul ponujen v izbirniku kartic Home Assistant. Plošča med tipkanjem preverja, kar pišete, njen predogled pa prikaže same predlagane kartice za entiteto po vaši izbiri.
7. Kliknite **Shrani**.

Vaš modul je zdaj na voljo za uporabo na kateri koli od vaših kartic!

<br>

</details>

#### Uporaba modula na kartici

<details>

<summary>Kliknite za razširitev</summary>

<br>

- **Prek urejevalnika:**

  - Pojdite v urejevalnik kartice, na kateri želite uporabiti modul.
  - Razširite razdelek **Moduli**.
  - Kliknite na modul, ki ga želite uporabiti, s seznama.
  - Pod "Uporabi na", kliknite "Ta kartica". Modul je zdaj aktiven. Na isti kartici lahko uporabite več modulov.

- **Prek YAML:**

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

#### Globalna uporaba modula

<details>

<summary>Kliknite za razširitev</summary>

<br>

Modul lahko nastavite tako, da se samodejno uporabi na vseh kartic Bubble Card:

**To ni na voljo za module z urejevalnikom, saj ti zahtevajo specifično konfiguracijo za delovanje.**

- **Prek urejevalnika:**

  - V urejevalniku modulov poiščite svoj modul v zavihku **Moji moduli**.
  - Preklopite gumb **Vse kartice** ob imenu modula.
  - Modul se bo zdaj samodejno uporabil na vseh karticah.
 
- **Prek YAML:**

  V konfiguraciji YAML svojega modula (v `bubble-modules.yaml`) preprosto dodajte `is_global: true`.

<br>

</details>

#### Izključitev posamezne kartice iz globalnega modula

<details>

<summary>Kliknite za razširitev</summary>

<br>

Če imate globalni modul, vendar ga želite izključiti iz določene kartice:

- **Prek urejevalnika:**
  
  - V razdelku **Moduli** kartice boste videli navedene globalne module.
  - Kliknite na globalni modul, onemogočite "Ta kartica", da ga izključite iz te določene kartice.

- **Prek YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Deljenje vašega modula v Module Store

<details>

<summary>Kliknite za razširitev</summary>

<br>

Za deljenje svojega modula v Module Store v urejevalniku modulov na dnu, pod "Export Module", kliknite "Copy for GitHub" in prilepite vsebino v novo diskusijo v kategoriji [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Uredite opis** (če je potrebno), **primer** (za uporabnike YAML), in ne pozabite **priložiti vsaj enega posnetka zaslona** za Module Store.

**Vaš modul postane na voljo takoj po tem** (po osvežitvi trgovine), zato dvakrat preverite, da je vse pravilno zapisano in da modul deluje po pričakovanjih. Modul lahko seveda urejate/posodabljate tudi po tem, ko je bil deljen.

<br>

</details>

#### Upravljanje različic

<details>

<summary>Kliknite za razširitev</summary>

<br>

Module Store samodejno preverja posodobitve nameščenih modulov. Ko so posodobitve na voljo:

1. V zavihku **Module Store** boste videli indikator posodobitve.
2. Kliknite **Update** pri modulih z razpoložljivimi posodobitvami.
3. Potrdite posodobitev v Module Store.

<br>

</details>

#### Določanje podprtih tipov kartic

<details>

<summary>Kliknite za razširitev</summary>

<br>

Nekateri moduli morda niso združljivi z vsemi tipi kartic. Lahko določite, katere kartice modul podpira.  
Če želite, da je modul združljiv z **vsemi karticami**, preprosto izpustite polje `supported` (ali uporabite možnost **Vse kartice** v urejevalniku).

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

### Primeri

<details>
<summary>Osnoven modul za oblikovanje</summary>

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
<summary>Modul z lastno konfiguracijo</summary>

<br>

Ta modul je na voljo [tukaj](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Več primerov najdete v Module Store, ali [tukaj](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizacija

Bubble Card govori vaš jezik. Njegov urejevalnik je preveden v 64 jezikov, ki jih podpira Home Assistant, in povsod, kjer ima Home Assistant za nekaj že svojo besedo, je uporabljena njegova ubeseditev, tako da v obeh vmesnikih berete iste izraze.

Na dnu urejevalnika, poleg številke različice, stikalo **Samodejno** sledi jeziku vašega Home Assistant. Izklopite ga in celoten urejevalnik se vrne v angleščino, kar je priročno, kadar sledite vodiču ali prijavljate težavo. Vaša izbira je shranjena v vašem brskalniku.

Tudi ta dokumentacija je prevedena, [v 62 jezikov](languages.md), v vse razen v britansko angleščino, ki uporablja izvirnik. Te strani so odprte za vse, zato je ubeseditev, ki ne ustreza vašemu Home Assistant, mogoče popraviti v nekaj klikih. Angleška različica ostaja referenca za samo vsebino.

<br>

---

<br>

## Pomoč

Ne oklevajte odpreti issue, če kaj ne deluje po pričakovanjih. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Imate vprašanja ali razmišljanja o Bubble Card? Želite deliti svoje nadzorne plošče ali odkritja? Lahko obiščete forum Home Assistant, subreddit Bubble Card ali razdelek GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Prispevanje

Prispevki so dobrodošli! Ne glede na to, ali gre za popravke napak, nove funkcije, prevode ali izboljšave dokumentacije, ne oklevajte odpreti pull request.

Preden začnete, prosimo, preberite [vodnik za razvijalce](DEVELOPERS.md), ki pojasnjuje, kako nastaviti lokalno okolje, zgraditi projekt in preizkusiti svoje spremembe.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donirajte

Večino svojega prostega časa posvečam temu, da je ta projekt čim boljši. Če cenite moje delo, bi bila vsaka donacija odličen način, da pokažete svojo podporo 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Hvala vsem za vašo podporo, vsi ste moja največja motivacija!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
