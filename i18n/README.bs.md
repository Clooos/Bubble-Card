<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ova stranica je automatski prijevod. U slučaju nedoumice, mjerodavna je [originalna dokumentacija na engleskom](../README.md). Zvuči li vam neka rečenica pogrešno? Svaka pomoć je dobrodošla, a [ispravka ove stranice](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.bs.md) traje samo minutu: GitHub se brine za fork i pull request. Unaprijed hvala! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Pročitajte ovo na drugom jeziku](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card je minimalistička i prilagodljiva kolekcija kartica za Home Assistant, s modernim skočnim prozorima i integrisanim Module Store-om s više od 100 modula koje je napravila zajednica.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Sadržaj

**[`Instalacija`](#instalacija)**  **[`Konfiguracija`](#konfiguracija)**  **[`Prijedlozi entiteta`](#prijedlozi-entiteta)**  **[`Pop-up`](#pop-up)**  **[`Horizontalni niz dugmadi`](#horizontalni-niz-dugmadi)**  **[`Dugme`](#dugme)**  **[`Medija plejer`](#medija-plejer)**  **[`Roletna`](#roletna)**  **[`Odabir`](#odabir)**  **[`Klima`](#klima)**  **[`Kalendar`](#kalendar)**  **[`Razdjelnik`](#razdjelnik)**  **[`Prazna kolona`](#prazna-kolona)**  **[`Samo pod-dugmad`](#samo-pod-dugmad)**  **[`Pod-dugmad`](#pod-dugmad)**  **[`Rasporedi kartica`](#rasporedi-kartica)**  **[`Uslovi`](#uslovi)**  **[`Akcije`](#akcije-dodira-dvostrukog-dodira-i-držanja)**  **[`Stilovi`](#stilovi)**  **[`Šabloni`](#šabloni)**  **[`Modules`](#modules)**  **[`Lokalizacija`](#lokalizacija)**  **[`Pomoć`](#pomoć)**  **[`Doprinos`](#doprinos)**  **[`Donacije`](#donacije)**

<br>

## Instalacija

**Najniža podržana verzija Home Assistanta:** 2023.9.0

<details>

<summary>Bez HACS-a</summary>

<br>

1. Preuzmite `bubble-card.zip` iz [posljednjeg izdanja](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Raspakujte ga u svoj `<config>/www` folder, trebali biste dobiti `bubble-card.js` i folder `translations` pored njega (taj folder sadrži rječnike uređivača, bez njega uređivač ostaje na engleskom)
3. Na svojoj kontrolnoj tabli kliknite na ikonu u gornjem desnom uglu, a zatim na `Uredi kontrolnu tablu`
4. Kliknite ponovo na tu ikonu, a zatim na `Upravljanje resursima`
5. Kliknite na `Dodaj resurs`
6. Kopirajte i zalijepite ovo: `/local/bubble-card.js?v=1`
7. Kliknite na `JavaScript modul`, a zatim na `Napravi`
8. Vratite se nazad i osvježite stranicu
9. Sada možete kliknuti na `Dodaj karticu` u donjem desnom uglu i potražiti `Bubble Card`
10. Nakon svakog ažuriranja datoteke morat ćete urediti `/local/bubble-card.js?v=1` i promijeniti verziju na bilo koji veći broj

Ako ne radi, samo pokušajte očistiti keš svog pretraživača.

</details>

<details>

<summary>S HACS-om (preporučeno)</summary>

<br>

Ova metoda vam omogućava da dobijate ažuriranja direktno u Home Assistant Community Store-u

1. Ako HACS još nije instaliran, preuzmite ga prateći upute na [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Obavite početnu konfiguraciju HACS-a prateći upute na [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. U bočnoj traci idite na "HACS"
4. Potražite "Bubble Card" ili kliknite na plavo dugme ispod
5. Kliknite na "Preuzmi"
6. Vratite se na svoju kontrolnu tablu i kliknite na ikonu u gornjem desnom uglu, a zatim na `Uredi kontrolnu tablu`
7. Sada možete kliknuti na `Dodaj karticu` u donjem desnom uglu i potražiti `Bubble Card`

Ako ne radi, pokušajte očistiti keš pretraživača/aplikacije (na svim svojim uređajima ako je potrebno).

#### Video zapisi

Možete pogledati i moj YouTube kanal s video uputama korak po korak.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Otvori Bubble Card u Home Assistant Community Store-u (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguracija

Sve opcije se mogu konfigurisati u Home Assistant uređivaču. Više detalja i YAML možete pronaći u dokumentaciji ispod.

<details>

<summary><b>Glavne opcije (YAML + opis)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `type` | string | **Obavezno** | `custom:bubble-card` | Tip kartice |
| `card_type` | string | **Obavezno** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ili `sub-buttons` | Tip Bubble Card kartice, pogledajte ispod |
| `styles` | lista objekata | Opcionalno | Bilo koji CSS stilovi | Omogućava vam da prilagodite CSS svoje Bubble Card kartice, pogledajte [stilove](#stilovi) |

</details>

<details>

<summary><b>Globalne CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Zaobljenje ivica za sve podržane elemente |
| `--bubble-main-background-color` | `color` | Glavna boja pozadine za sve podržane elemente |
| `--bubble-secondary-background-color` | `color` | Sekundarna boja pozadine za sve podržane elemente |
| `--bubble-accent-color` | `color` | Akcentna boja za sve podržane elemente |
| `--bubble-icon-border-radius` | `px` | Zaobljenje ivica ikone za sve podržane elemente |
| `--bubble-icon-background-color` | `color` | Boja pozadine ikone za sve podržane elemente |
| `--bubble-sub-button-border-radius` | `px` | Zaobljenje ivica za svu pod-dugmad |
| `--bubble-sub-button-background-color` | `color` | Boja pozadine za svu pod-dugmad |
| `--bubble-box-shadow` | pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena za sve podržane elemente |
| `--bubble-border` | pogledajte [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Ivica za sve podržane kartice |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Pogledajte ovaj [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) da biste saznali više o Bubble Card kartici i njenim mogućnostima.** Moj YouTube kanal je prilično nov i fokusiran je na upute o Home Assistantu i Bubble Card kartici. Slobodno se pretplatite kako biste pomogli povećanju vidljivosti mog kanala. Unaprijed hvala!

<br>

---

<br>

## Prijedlozi entiteta

Od Home Assistanta 2026.6, odabir entiteta u biraču kartica nudi vam nekoliko gotovih kartica, a Bubble Card na tu listu dodaje vlastite recepte. Odaberite svjetlo i ponuđena vam je kartica s klizačem za osvjetljenje, uz varijantu s temperaturom boje, s bojom i sa zasićenjem kada ih vaše svjetlo podržava. Odaberite roletnu i dobijate klizač njene pozicije, odaberite medija plejer i dobijate i varijantu s listom njegovih izvora, odaberite usisivač i dobijate njegovu dugmad za pokretanje, pauzu i povratak na bazu. Svaki prijedlog je obična Bubble Card konfiguracija prikazana kao pregled uživo, tako da možete uzeti najbližu i nastaviti je uređivati kao i obično.

Ono što vam se nudi zavisi od toga šta vaš entitet zaista može: svjetlo bez kanala za osvjetljenje dobija prekidač umjesto klizača, roletna koja se ne može nagnuti ne dobija varijantu s nagibom, a entitet klime dobija svoje unaprijed zadane režime samo kada ih ima. Klasične stavke slijede ispod prijedloga Bubble Carda kada su primjenjive: kartica namijenjena toj vrsti entiteta, obično dugme i klizač.

> [!TIP]
> Modules mogu dodati vlastite prijedloge na tu listu, pogledajte [Modules](#modules).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ova kartica vam omogućava da napravite skočni prozor s bilo kojim sadržajem. Svaki skočni prozor je **zadano skriven** i može se otvoriti ciljanjem njegovog linka (npr. `'#pop-up-name'`), pomoću bilo koje kartice koja podržava `navigate` [akciju](#akcije-dodira-dvostrukog-dodira-i-držanja) ili pomoću uključenog [horizontalnog niza dugmadi](#horizontalni-niz-dugmadi).

> [!TIP]
> ### Okidač skočnog prozora 
> Ova funkcija vam omogućava da otvorite skočni prozor na osnovu stanja bilo kojeg entiteta, naprimjer, možete otvoriti skočni prozor "Sigurnost" s kamerom kada se osoba nalazi ispred vaše kuće. Također možete napraviti prekidač pomoćnika (input_boolean) i pokrenuti njegovo otvaranje/zatvaranje u automatizaciji.
> <details>
> <summary>Otvaranje skočnog prozora kada je <code>binary_sensor</code> u stanju <code>on</code></summary>
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
> ### Različiti načini zatvaranja skočnog prozora 
> Postoji mnogo načina da zatvorite skočni prozor. Naprimjer, možete prevući od zaglavlja skočnog prozora prema dnu, napraviti dugo prevlačenje unutar skočnog prozora prema dnu, pritisnuti Escape na računaru, ukloniti hash iz URL-a ili jednostavno pritisnuti dugme za zatvaranje.
>


### Opcije skočnog prozora

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obavezno** | Bilo koji jedinstveni hash (npr. `'#kitchen'`) sa ' ' | Ovako ćete otvarati svoj skočni prozor |
| `popup_style` | string | Opcionalno | `bubble` (zadano) ili `classic` | Definiše vizuelni stil skočnog prozora |
| `popup_mode` | string | Opcionalno | `default` (zadano), `fit-content`, `centered` ili `adaptive-dialog` | Definiše režim rasporeda skočnog prozora |
| `with_bottom_offset` | boolean | Opcionalno | `true` ili `false` (zadano) | Koristi se samo uz `popup_mode: fit-content` ili `adaptive-dialog`. Primjenjuje donji pomak na mobitelu, korisno kada vaša kontrolna tabla sadrži karticu podnožja. |
| `full_width_on_mobile` | boolean | Opcionalno | `true` ili `false` (zadano) | Koristi se samo uz `popup_mode: centered`. Proširuje skočni prozor na punu širinu ekrana na mobitelu, korisno na manjim ekranima. |
| `performance_mode` | string | Opcionalno | `default` (zadano) ili `performance` | Optimizuje animaciju otvaranja skočnog prozora. `performance` blago odgađa prikazivanje sadržaja i zamućenje pozadine, a također onemogućava zamućenje podloge ako je postavljeno. |
| `auto_close` | string | Opcionalno | Vremensko ograničenje u milisekundama (npr. `10000` za 10s) | Automatski zatvara skočni prozor nakon isteka vremena |
| `close_on_click` | boolean | Opcionalno | `true` ili `false` (zadano) | Automatski zatvara skočni prozor nakon bilo koje interakcije |
| `close_by_clicking_outside` | boolean | Opcionalno | `true` (zadano) ili `false` | Zatvara skočni prozor klikom izvan njega |
| `width_desktop` | string | Opcionalno | Bilo koja CSS vrijednost | Širina na računaru (zadano `100%` na mobitelu) |
| `margin` | string | Opcionalno | Bilo koja CSS vrijednost | Koristite ovo **samo** ako vaš skočni prozor nije dobro centriran na mobitelu (npr. `13px`) |
| `margin_top_mobile` | string | Opcionalno | Bilo koja CSS vrijednost | Gornja margina na mobitelu (npr. `-56px` ako je vaše zaglavlje skriveno) |
| `margin_top_desktop` | string | Opcionalno | Bilo koja CSS vrijednost | Gornja margina na računaru (npr. `50vh` za skočni prozor polovične veličine ili `calc(100vh - 400px)` za fiksnu visinu od `400px`) |
| `bg_color` | string | Opcionalno | Bilo koja hex, rgb ili rgba vrijednost | Boja pozadine vašeg skočnog prozora (npr. `#ffffff` za bijelu pozadinu) |
| `bg_opacity` | string | Opcionalno | Bilo koja vrijednost od `0` do `100` | Neprozirnost pozadine vašeg skočnog prozora (npr. `100` za pozadinu bez providnosti) |
| `bg_blur` | string | Opcionalno | Bilo koja vrijednost od `0` do `100` | Efekat zamućenja pozadine vašeg skočnog prozora, **ovo radi samo ako `bg_opacity` nije postavljen na `100`** (npr. `0` za pozadinu bez zamućenja)|
| `shadow_opacity` | string | Opcionalno | Bilo koja vrijednost od `0` do `100` | Neprozirnost sjene vašeg skočnog prozora (npr. `0` da je sakrijete) |
| `hide_backdrop` | boolean | Opcionalno | `true` ili `false` (zadano) | Postavite ovo na true na prvom skočnom prozoru svoje glavne kontrolne table da biste onemogućili podlogu na svim skočnim prozorima. |
| `background_update` | boolean | Opcionalno | `true` ili `false` (zadano) | Ažuriranje sadržaja skočnog prozora u pozadini (ne preporučuje se) |
| `trigger` | object ili lista | Opcionalno | Pogledajte [uslove](#uslovi) | Otvara ovaj skočni prozor kada su uslovi ispunjeni |
| `trigger_entity` | string | Opcionalno | Bilo koji entitet | Otvara ovaj skočni prozor na osnovu stanja bilo kojeg entiteta, jednostavni oblik opcije `trigger` |
| `trigger_state` | string | Opcionalno (**Obavezno** ako je `trigger_entity` definisan) | Bilo koje stanje entiteta | Stanje entiteta koje otvara skočni prozor |
| `trigger_close` | boolean | Opcionalno | `true` (zadano) ili `false` | Zatvara skočni prozor kada uslovi više nisu ispunjeni. Zadano je `false` kada koristite stariji par `trigger_entity` i `trigger_state` |
| `open_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Pokreće akciju pri otvaranju skočnog prozora |
| `close_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Pokreće akciju pri zatvaranju skočnog prozora |
| `show_header` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikazuje/sakriva cijelo zaglavlje skočnog prozora |
| `show_previous_button` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikazuje dugme za povratak pored dugmeta za zatvaranje i vodi nazad na prethodni skočni prozor kada je dostupan |
| `show_close_button` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikazuje ili sakriva dugme za zatvaranje uz zadržavanje ostatka zaglavlja vidljivim |
| `buttons_position` | string | Opcionalno | `right` (zadano) ili `left` | Pozicija dugmadi za zatvaranje i povratak u zaglavlju |
| `cards` | lista | Opcionalno | Bilo koja Bubble Card, Home Assistant ili prilagođena kartica | Definiše sadržaj vašeg skočnog prozora. Pogledajte primjer skočnog prozora ispod. |
| Također imate pristup [svim postavkama dugmeta](#dugme) za zaglavlje skočnog prozora. | | Opcionalno | | Ako nije definisano, zaglavlje neće biti prikazano |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Zaobljenje ivica skočnog prozora |
| `--bubble-pop-up-main-background-color` | `color` | Glavna boja pozadine za podržane elemente skočnog prozora |
| `--bubble-pop-up-background-color` | `color` | Boja pozadine skočnog prozora |
| `--bubble-backdrop-background-color` | `color` | Boja pozadine podloge |
| Također imate pristup [svim CSS varijablama dugmeta](#opcije-dugmeta) za zaglavlje skočnog prozora. | | |

</details>


### Samostalni format skočnog prozora (v3.2.0+)

Od verzije 3.2.0, skočni prozori koriste novi samostalni format u kojem se kartice sadržaja definišu direktno unutar skočnog prozora pomoću opcije `cards`. To pruža bolje performanse i novo povuci-i-ispusti iskustvo uređivanja zasnovano na sekcijama.


#### Primjeri

<details>

<summary>Skočni prozor (samostalni format)</summary>

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

<summary>Dugme za otvaranje skočnog prozora</summary>

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

## Horizontalni niz dugmadi

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ova kartica je dobar pratilac kartice skočnog prozora i omogućava vam otvaranje odgovarajućih skočnih prozora. Također vam omogućava otvaranje bilo koje stranice vaše kontrolne table. Pored toga, možete dodati svoje senzore pokreta/zauzetosti tako da se redoslijed dugmadi prilagođava prostoriji u koju ste upravo ušli. Ova kartica se može pomicati, ostaje vidljiva i ponaša se kao podnožje.

> [!IMPORTANT]  
> Ova kartica mora biti posljednja u vašem prikazu (nakon svake kartice i skočnog prozora). Ne može se nalaziti unutar bilo kojeg stacka.

### Opcije horizontalnog niza dugmadi

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obavezno** | Hash skočnog prozora (npr. `'#kitchen'`) sa ' ' ili bilo koji link | Link za otvaranje |
| `1_name` | string | Opcionalno | Bilo koji tekst | Naziv vašeg dugmeta |
| `1_icon` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona vašeg dugmeta |
| `1_entity` | string | Opcionalno | Bilo koje svjetlo ili grupa svjetala | Prikazuje boju tog svjetla u pozadini |
| `1_pir_sensor` | string | Opcionalno | Bilo koji binarni senzor | Najmanje jedan pir senzor ili više njih za `auto_order`, zapravo radi i s bilo kojim tipom entiteta, naprimjer možete dodati grupe svjetala i redoslijed će se mijenjati na osnovu posljednjih promijenjenih stanja. |
| `auto_order` | boolean | Opcionalno | `true` ili `false` (zadano) | Mijenja redoslijed dugmadi prema vremenu posljednje promjene `_pir_sensor` senzora, **mora biti `false` ako u svom kodu nemate nijedan `_pir_sensor`** |
| `margin` | string | Opcionalno | Bilo koja CSS vrijednost | Koristite ovo **samo** ako vaš `horizontal-buttons-stack` nije dobro centriran na mobitelu (npr. `13px`) |
| `width_desktop` | string | Opcionalno | Bilo koja CSS vrijednost | Širina na računaru (zadano `100%` na mobitelu) |
| `is_sidebar_hidden` | boolean | Opcionalno | `true` ili `false` (zadano) | Popravlja poziciju horizontalnog niza dugmadi ako je bočna traka skrivena na računaru (samo ako ste je sami sakrili vlastitom izmjenom) |
| `rise_animation` | boolean | Opcionalno | `true` (zadano) ili `false` | Postavite ovo na `false` da onemogućite animaciju koja se aktivira nakon učitavanja stranice |
| `highlight_current_view` | boolean | Opcionalno | `true` ili `false` (zadano) | Ističe trenutni hash / prikaz uz glatku animaciju |
| `hide_gradient` | boolean | Opcionalno | `true` ili `false` (zadano) | Postavite ovo na `false` da sakrijete gradijent |

> [!IMPORTANT]  
> Varijable koje počinju brojem definišu vašu dugmad, samo promijenite taj broj da dodate više dugmadi (pogledajte primjer ispod).

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Zaobljenost ivica dugmadi horizontalnog niza dugmadi |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Boja pozadine dugmadi horizontalnog niza dugmadi |

</details>


#### Primjer

<details>

<summary>Horizontalni niz dugmadi koji se sam preuređuje na osnovu senzora zauzetosti</summary>

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

## Dugme

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ova kartica je veoma svestrana. Može se koristiti kao dugme **prekidač**, **klizač**, **stanje** ili **naziv/tekst**.

> [!TIP]
> ### Koje su razlike između svih tipova dugmadi?
>
> - **Dugme prekidač:** Ovo je zadani tip dugmeta. Zadano, prebacuje entitet i njegova boja pozadine se mijenja na osnovu stanja entiteta ili boje svjetla. Njegovu akciju možete promijeniti u sekciji **Akcija dodira na kartici**.
>
> - **Dugme klizač:** Ovaj tip dugmeta vam omogućava da kontrolišete entitete s podesivim rasponima. Idealan je za prigušivanje svjetla, a boja popunjavanja će se prilagoditi boji svjetla. Također ga možete koristiti za prikaz vrijednosti, poput nivoa baterije.
>   Podržani entiteti za klizače:
>   - Svjetlo (svjetlina)
>   - Medija plejer (jačina zvuka)
>   - Roletna (pozicija)
>   - Ventilator (procenat)
>   - Klima (temperatura)
>   - Input number i number (vrijednost)
>   - Senzor baterije (procenat, samo za čitanje)
>
>   Također možete koristiti bilo koji entitet s numeričkim stanjem tako što ćete onemogućiti filter entiteta u **Postavkama klizača**, a zatim definisati vrijednosti `min` i `max`. Ova opcija je samo za čitanje.
>
> - **Dugme stanje:** Savršeno za prikaz informacija sa senzora ili bilo kojeg entiteta. Kada ga pritisnete, prikazat će panel "Više informacija" tog entiteta. Njegova boja pozadine se ne mijenja.
>
> - **Dugme naziv/tekst:** Jedini tip dugmeta kojem nije potreban entitet. Omogućava vam da prikažete kratak tekst, naziv ili naslov. Također mu možete dodati akcije. Njegova boja pozadine se ne mijenja.

### Opcije dugmeta

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koji entitet | Entitet za kontrolu |
| `button_type` | string | Opcionalno | `switch` (zadano), `slider`, `state` ili `name` | Ponašanje vašeg dugmeta |
| `name` | string | Opcionalno | Bilo koji tekst | Naziv vašeg dugmeta, ako nije definisan prikazat će se naziv entiteta |
| `icon` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona vašeg dugmeta, ako nije definisana prikazat će se ikona entiteta ili `entity-picture` |
| `force_icon` | boolean | Opcionalno | `true` ili `false` (zadano) | Daje prednost ikoni umjesto `entity-picture` |
| `use_accent_color` | boolean | Opcionalno (zadano `false`) | **Samo za svjetla.** Koristi akcentnu boju teme umjesto boje svjetla.                         |
| `show_state` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednje promjene vašeg `entity` |
| `show_last_updated` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Opcionalno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Opcionalno | `true` (zadano) ili `false` | Dozvoljava pomicanje teksta kada sadržaj premaši veličinu svog kontejnera |
| `button_action` | object | Opcionalno | `tap_action`, `double_tap_action` ili `hold_action`, pogledajte ispod | Omogućava promjenu zadanih akcija na klik dugmeta. |
| `tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na klik ikone, ako nije definisano, koristit će se `more-info` |
| `double_tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na dvostruki klik ikone, ako nije definisano, koristit će se `none` |
| `hold_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na držanje ikone, ako nije definisano, koristit će se `more-info` |
| `card_layout` | string | Opcionalno | `normal` (zadano ako nije u prikazu sa sekcijama), `large` (zadano ako je u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Raspored stila kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opcionalno | Pogledajte [pod-dugmad](#pod-dugmad) | Dodaje prilagođenu dugmad fiksiranu desno |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u dugmetu |
| `--bubble-button-border-radius` | `px` | Zaobljenost ivica dugmeta |
| `--bubble-button-icon-border-radius` | `px` | Zaobljenost ivica kontejnera ikone dugmeta |
| `--bubble-button-icon-background-color` | `color` | Boja pozadine kontejnera ikone dugmeta |
| `--bubble-light-white-color` | `color` | Zamjenjuje zadanu bijelu boju dugmadi/klizača za svjetla |
| `--bubble-light-color` | `color` | Zamjenjuje boju dugmadi/klizača za svjetla (čak i RGB svjetla) |
| `--bubble-button-box-shadow` | Pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena dugmeta |

</details>

Ove opcije su dostupne samo kada je `button_type` postavljen na `slider`.

<details>

<summary><b>Opcije klizača (YAML + opisi)</b></summary>

| Naziv                 | Tip     | Obaveznost                      | Opis                                                                                                    |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opcionalno                      | Minimalna vrijednost klizača. Za prilagođene klizače.                                                   |
| `max_value`             | number  | Opcionalno                      | Maksimalna vrijednost klizača. Za prilagođene klizače.                                                  |
| `step`                  | number  | Opcionalno                      | Vrijednost koraka klizača.                                                                              |
| `tap_to_slide`          | boolean | Opcionalno (zadano `false`)     | Omogućava prethodno ponašanje klizača gdje dodirnete da aktivirate klizač, umjesto da ga držite.        |
| `relative_slide`        | boolean | Opcionalno (zadano `false`)     | Ažurira vrijednost relativno u odnosu na početnu vrijednost, umjesto na početnu tačku dodira.           |
| `read_only_slider`      | boolean | Opcionalno (zadano `false`)     | Čini klizač samo za čitanje. Automatski omogućeno za neke entitete poput senzora.                       |
| `slider_live_update`    | boolean | Opcionalno (zadano `false`)     | Stanje entiteta se ažurira tokom klizanja. **Ova funkcija se ne preporučuje za sve entitete.**          |
| `slider_fill_orientation` | string | Opcionalno | `left`, `right`, `top` ili `bottom` | Mijenja smjer popunjavanja klizača. Slijeva nadesno kada nije definisano, zrcalno u [jezicima koji se pišu zdesna nalijevo](#lokalizacija) |
| `slider_value_position` | string | Opcionalno | `right`, `left`, `center` ili `hidden` | Pozicija prikaza vrijednosti. Desno kada nije definisano, a lijevo u [jezicima koji se pišu zdesna nalijevo](#lokalizacija) |
| `invert_slider_value` | boolean | Opcionalno (zadano `false`) | Obrće smjer klizača (100% popunjenosti odgovara minimumu). Nije dostupno za klizače boje. |
| `light_slider_type` | string | Opcionalno | `brightness` (zadano), `hue`, `saturation`, `white_temp` | **Samo za svjetla.** Odaberite režim klizača |
| `cover_slider_type` | string | Opcionalno | `position` (zadano), `tilt_position` | **Samo za roletne.** Odaberite režim klizača (pozicija ili nagib) |
| `hue_force_saturation` | boolean | Opcionalno (zadano `false`) | **Samo za svjetla (režim nijanse).** Prisiljava saturaciju pri podešavanju nijanse |
| `hue_force_saturation_value` | number | Opcionalno (zadano `100`) | **Samo za svjetla (režim nijanse).** Prisilna vrijednost saturacije (0-100) |
| `use_accent_color` | boolean | Opcionalno (zadano `false`) | **Samo za svjetla (režim svjetline).** Koristi akcentnu boju teme umjesto boje svjetla |
| `allow_light_slider_to_0` | boolean | Opcionalno (zadano `false`)   | **Samo za svjetla.** Dozvoljava klizaču da dosegne 0%, čime se svjetlo isključuje. Nije dostupno uz `tap_to_slide`. |
| `light_transition`      | boolean | Opcionalno (zadano `false`)     | **Samo za svjetla.** Omogućava glatke prelaze svjetline za podržana svjetla.                              |
| `light_transition_time` | number  | Opcionalno (zadano `500`)       | **Samo za svjetla.** Vrijeme prelaza u milisekundama. Zahtijeva `light_transition: true`.               |

</details>

#### Primjeri

<details>

<summary>Dugme klizač koje može kontrolisati svjetlinu svjetla</summary>

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

<summary>Dugme s više opcija</summary>

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

## Medija plejer

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ova kartica vam omogućava da kontrolišete medija plejer entitet.

### Opcije medija plejera

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koji medija plejer | Medija plejer za kontrolu |
| `name` | string | Opcionalno | Bilo koji tekst | Naziv vašeg medija plejera, ako nije definisan prikazat će se naziv entiteta |
| `icon` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona vašeg medija plejera, ako nije definisana prikazat će se ikona entiteta ili `entity-picture` |
| `force_icon` | boolean | Opcionalno | `true` ili `false` (zadano) | Daje prednost ikoni umjesto `entity-picture` |
| `show_state` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednje promjene vašeg `entity` |
| `show_last_updated` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Opcionalno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Opcionalno | `true` (zadano) ili `false` | Dozvoljava pomicanje teksta kada sadržaj premaši veličinu svog kontejnera |
| `min_volume` | number | Opcionalno | Bilo koji broj | Minimalna vrijednost klizača jačine zvuka. |
| `max_volume` | number | Opcionalno | Bilo koji broj | Maksimalna vrijednost klizača jačine zvuka. |
| `cover_background` | boolean | Opcionalno | `true` ili `false` (zadano) | Koristi zamućeni omot medija kao pozadinu kartice. |
| `button_action` | object | Opcionalno | `tap_action`, `double_tap_action` ili `hold_action`, pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava promjenu zadanih akcija na klik dugmeta. |
| `tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na klik ikone, ako nije definisano, koristit će se `more-info`. |
| `double_tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na dvostruki klik ikone, ako nije definisano, koristit će se `none`. |
| `hold_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na držanje ikone, ako nije definisano, koristit će se `more-info`. |
| `main_buttons_position` | string | Opcionalno | `default` ili `bottom` | Premješta akcijsku dugmad na dno (fiksirano) |
| `main_buttons_full_width` | boolean | Opcionalno | `true` ili `false` | Čini donju akcijsku dugmad punom širinom (zadano: `true` kada je pozicija `bottom`) |
| `main_buttons_alignment` | string | Opcionalno | `end` (zadano), `center`, `start`, `space-between` | Poravnanje donje akcijske dugmadi kada nije pune širine |
| `card_layout` | string | Opcionalno | `normal` (zadano ako nije u prikazu sa sekcijama), `large` (zadano ako je u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Raspored stila kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opcionalno | Pogledajte [pod-dugmad](#pod-dugmad) | Dodaje prilagođenu dugmad fiksiranu desno |
| `hide` | object | Opcionalno | Pogledajte ispod | Sakriva dugmad s kartice |

#### Opcije skrivanja

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opcionalno | `true` ili `false` (zadano) | Sakrij dugme pusti/pauziraj |
| `volume_button` | boolean | Opcionalno | `true` ili `false` (zadano) | Sakrij dugme za jačinu zvuka |
| `previous_button` | boolean | Opcionalno | `true` ili `false` (zadano) | Sakrij dugme za prethodno |
| `next_button` | boolean | Opcionalno | `true` ili `false` (zadano) | Sakrij dugme za sljedeće |
| `power_button` | boolean | Opcionalno | `true` ili `false` (zadano) | Sakrij dugme za napajanje |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Glavna boja pozadine medija plejera |
| `--bubble-media-player-border-radius` | `px` | Zaobljenost ivica medija plejera |
| `--bubble-media-player-buttons-border-radius` | `px` | Zaobljenost ivica dugmadi medija plejera |
| `--bubble-media-player-slider-background-color` | `color` | Boja pozadine klizača jačine zvuka |
| `--bubble-media-player-icon-border-radius` | `px` | Zaobljenost ivica kontejnera ikone medija plejera |
| `--bubble-media-player-icon-background-color` | `color` | Boja pozadine kontejnera ikone medija plejera |
| `--bubble-media-player-box-shadow` | Pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena medija plejera |

</details>


#### Primjeri

<details>

<summary>Medija plejer sa svim opcijama</summary>

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

## Roletna

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ova kartica vam omogućava da kontrolišete svoje `cover` entitete.

### Opcije roletne

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koja roletna | Roletna koju želite kontrolisati |
| `name` | string | Opcionalno | Bilo koji tekst | Naziv za vašu roletnu, ako nije definisan prikazat će se naziv entiteta |
| `force_icon` | boolean | Opcionalno | `true` ili `false` (zadano) | Daje prednost ikoni nad `entity-picture` |
| `show_state` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednje promjene vašeg `entity` |
| `show_last_updated` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Opcionalno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Opcionalno | `true` (zadano) ili `false` | Omogućava pomicanje teksta kada sadržaj premašuje veličinu svog kontejnera |
| `icon_open` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona za vašu otvorenu roletnu, ako nije definisana prikazat će se zadana ikona otvorene roletne |
| `icon_close` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona za vašu zatvorenu roletnu, ako nije definisana prikazat će se zadana ikona zatvorene roletne |
| `icon_up` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona za dugme otvaranja roletne, ako nije definisana prikazat će se zadana ikona otvaranja roletne |
| `icon_down` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona za dugme zatvaranja roletne, ako nije definisana prikazat će se zadana ikona zatvaranja roletne |
| `open_service` | string | Opcionalno | Bilo koji servis ili skripta | Servis za otvaranje vaše roletne, zadano `cover.open_cover` |
| `stop_service` | string | Opcionalno | Bilo koji servis ili skripta | Servis za zaustavljanje vaše roletne, zadano `cover.stop_cover` |
| `close_service` | string | Opcionalno | Bilo koji servis ili skripta | Servis za zatvaranje vaše roletne, zadano `cover.close_cover` |
| `tilt_buttons` | string | Opcionalno | `top` (zadano), `bottom`, `left`, `right`, `hidden` | Pozicija dugmadi za kontrolu nagiba (prikazuju se samo ako roletna podržava nagib) |
| `open_tilt_service` | string | Opcionalno | Bilo koji servis ili skripta | Servis za otvaranje nagiba, zadano `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opcionalno | Bilo koji servis ili skripta | Servis za zatvaranje nagiba, zadano `cover.close_cover_tilt` |
| `button_action` | object | Opcionalno | `tap_action`, `double_tap_action` ili `hold_action`, pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava promjenu zadanih akcija na klik dugmeta. |
| `tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na klik ikone, ako nije definisano, koristit će se `more-info`. |
| `double_tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na dvostruki klik ikone, ako nije definisano, koristit će se `none`. |
| `hold_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na držanje ikone, ako nije definisano, koristit će se `more-info`. |
| `main_buttons_position` | string | Opcionalno | `default` ili `bottom` | Premješta kontrole medija na dno (fiksno) |
| `main_buttons_full_width` | boolean | Opcionalno | `true` ili `false` | Čini donje kontrole punom širinom (zadano: `true` kada je pozicija `bottom`) |
| `main_buttons_alignment` | string | Opcionalno | `end` (zadano), `center`, `start`, `space-between` | Poravnanje donjih kontrola kada nisu pune širine |
| `card_layout` | string | Opcionalno | `normal` (zadano izvan prikaza sa sekcijama), `large` (zadano u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Stilski raspored kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opcionalno | Pogledajte [pod-dugmad](#pod-dugmad) | Dodaje prilagođenu dugmad fiksiranu na desnoj strani |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici roletne |
| `--bubble-cover-border-radius` | `px` | Zaobljenost ivica za karticu roletne |
| `--bubble-cover-icon-border-radius` | `px` | Zaobljenost ivica za kontejner ikone kartice roletne |
| `--bubble-cover-icon-background-color` | `color` | Boja pozadine za kontejner ikone kartice roletne |
| `--bubble-cover-box-shadow` | Pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena za karticu roletne |
| `--bubble-button-box-shadow` | Pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena za dugmad u kartici roletne |

</details>


#### Primjer

<details>

<summary>Kartica koja može kontrolisati rolo zavjesu</summary>

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

## Odabir

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ova kartica vam omogućava da dodate padajući meni za svoje `input_select` / `select` entitete. Ova kartica također podržava pod-dugmad i sve uobičajene funkcije Bubble Card.

> [!TIP]
> Ako želite, možete imati i pod-dugmad za odabir, ova funkcija je dostupna u svim karticama koje podržavaju pod-dugmad.

### Opcije odabira

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koji entitet | Entitet koji želite kontrolisati |
| `name` | string | Opcionalno | Bilo koji tekst | Naziv za vaš odabir, ako nije definisan prikazat će se naziv entiteta |
| `icon` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona za vaš odabir, ako nije definisana prikazat će se ikona entiteta ili `entity-picture` |
| `force_icon` | boolean | Opcionalno | `true` ili `false` (zadano) | Daje prednost ikoni nad `entity-picture` |
| `show_state` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednje promjene vašeg `entity` |
| `show_last_updated` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Opcionalno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Opcionalno | `true` (zadano) ili `false` | Omogućava pomicanje teksta kada sadržaj premašuje veličinu svog kontejnera |
| `tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na klik ikone, ako nije definisano, koristit će se `more-info`. |
| `double_tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na dvostruki klik ikone, ako nije definisano, koristit će se `none`. |
| `hold_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na držanje ikone, ako nije definisano, koristit će se `more-info`. |
| `card_layout` | string | Opcionalno | `normal` (zadano izvan prikaza sa sekcijama), `large` (zadano u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Stilski raspored kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opcionalno | Pogledajte [pod-dugmad](#pod-dugmad) | Dodaje prilagođenu dugmad fiksiranu na desnoj strani |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici odabira |
| `--bubble-select-background-color` | `color` | Boja pozadine za karticu odabira |
| `--bubble-select-list-border-radius` | `px` | Zaobljenost ivica za padajući meni u kartici |
| `--bubble-select-list-item-accent-color` | `color` | Akcentna boja za odabranu stavku |
| `--bubble-select-list-background-color` | `color` | Boja pozadine za padajući meni u kartici |
| `--bubble-select-list-width` | `px` | Širina padajućeg menija u kartici |
| `--bubble-select-arrow-background-color` | `color` | Boja pozadine za strelicu padajućeg menija |
| `--bubble-select-button-border-radius` | `px` | Zaobljenost ivica za dugme odabira |
| `--bubble-select-border-radius` | `px` | Zaobljenost ivica za karticu odabira |
| `--bubble-select-icon-border-radius` | `px` | Zaobljenost ivica za kontejner ikone kartice odabira |
| `--bubble-select-icon-background-color` | `color` | Boja pozadine za kontejner ikone kartice odabira |
| `--bubble-select-box-shadow` | Pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena za karticu odabira |

</details>


#### Primjeri

<details>

<summary>Kartica odabira s listom scena</summary>

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

## Klima

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ova kartica vam omogućava da kontrolišete svoje `climate` entitete.

> [!TIP]
> Meni za odabir režima je [pod-dugme](#pod-dugmad) koje se automatski dodaje pri kreiranju kartice. Nakon toga ga možete izmijeniti ili ukloniti po želji.

### Opcije klime

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv                    | Tip     | Obaveznost                          | Podržane opcije                                    | Opis                                                                                                            |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obavezno**                        | Klima entitet                                    | Entitet koji želite kontrolisati (npr. `climate.living_room`).                                                  |
| `name`                  | string  | Opcionalno                          | Bilo koji tekst                                  | Prilagođeni naziv za karticu. Ako nije definisan, prikazat će se naziv entiteta.                                |
| `icon`                  | string  | Opcionalno                          | Bilo koja `mdi:` ikona                           | Prilagođena ikona za karticu. Ako nije definisana, koristit će se ikona entiteta ili `entity-picture`.          |
| `force_icon`            | boolean | Opcionalno                          | `true` ili `false` (zadano)                     | Daje prednost ikoni nad `entity-picture`.                                                                       |
| `show_state`            | boolean | Opcionalno                          | `true` ili `false` (zadano)                     | Prikaži ili sakrij trenutno stanje `entity`.                                                                    |
| `show_name`             | boolean | Opcionalno                          | `true` (zadano) ili `false`                     | Prikaži ili sakrij naziv entiteta.                                                                              |
| `show_icon`             | boolean | Opcionalno                          | `true` (zadano) ili `false`                     | Prikaži ili sakrij ikonu.                                                                                       |
| `hide_target_temp_low`  | boolean | Opcionalno (samo za entitete koji podržavaju `target_temp_low`) | `true` ili `false` (zadano) | Sakriva kontrolu donje ciljne temperature ako je `entity` podržava.                                             |
| `hide_target_temp_high` | boolean | Opcionalno (samo za entitete koji podržavaju `target_temp_high`)| `true` ili `false` (zadano) | Sakriva kontrolu gornje ciljne temperature ako je `entity` podržava.                                            |
| `state_color`           | boolean | Opcionalno                          | `true` ili `false` (zadano)                     | Primjenjuje stalnu boju pozadine kada je klima entitet uključen.                                                |
| `step` | number | Opcionalno | Bilo koji broj | Korak temperature. |
| `min_temp` | number | Opcionalno | Bilo koji broj | Minimalna temperatura. |
| `max_temp` | number | Opcionalno | Bilo koji broj | Maksimalna temperatura. |
| `button_action` | object | Opcionalno | `tap_action`, `double_tap_action` ili `hold_action`, pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava promjenu zadanih akcija na klik dugmeta. |
| `tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na klik ikone, ako nije definisano, koristit će se `more-info`. |
| `double_tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na dvostruki klik ikone, ako nije definisano, koristit će se `none`. |
| `hold_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na držanje ikone, ako nije definisano, koristit će se `more-info`. |                              |
| `main_buttons_position` | string | Opcionalno | `default` ili `bottom` | Premješta akcijsku dugmad klime na dno (fiksno) |
| `main_buttons_full_width` | boolean | Opcionalno | `true` ili `false` | Čini donju akcijsku dugmad punom širinom (zadano: `true` kada je pozicija `bottom`) |
| `main_buttons_alignment` | string | Opcionalno | `end` (zadano), `center`, `start`, `space-between` | Poravnanje donje akcijske dugmadi kada nije pune širine |
| `card_layout` | string | Opcionalno | `normal` (zadano izvan prikaza sa sekcijama), `large` (zadano u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Stilski raspored kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button`            | object  | Opcionalno                          | Pogledajte [pod-dugmad](#pod-dugmad)           | Dodaje prilagođenu dugmad fiksiranu na desnoj strani. Korisno za meni odabira režima klime.                     |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici klime |
| `--bubble-climate-border-radius` | `px` | Zaobljenost ivica za podržane elemente u kartici klime |
| `--bubble-climate-button-background-color` | `color` | Boja pozadine za dugmad kartice klime |
| `--bubble-climate-icon-border-radius` | `px` | Zaobljenost ivica za kontejner ikone kartice klime |
| `--bubble-state-climate-fan-only-color` | `color` | Boja preklopa za stanje samo ventilator |
| `--bubble-state-climate-dry-color` | `color` | Boja preklopa za stanje sušenja |
| `--bubble-state-climate-cool-color` | `color` | Boja preklopa za stanje hlađenja |
| `--bubble-state-climate-heat-color` | `color` | Boja preklopa za stanje grijanja |
| `--bubble-state-climate-auto-color` | `color` | Boja preklopa za automatsko stanje |
| `--bubble-state-climate-heat-cool-color` | `color` | Boja preklopa za stanje grijanje-hlađenje |
| `--bubble-climate-accent-color` | `color` | Akcentna boja za karticu klime |
| `--bubble-climate-box-shadow` | Pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena za kontejner klime. |

</details>


#### Primjeri

<details>

<summary>Kartica klime s padajućim menijem HVAC režima</summary>

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

## Kalendar

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ova kartica vam omogućava da prikažete svoje kalendarske entitete. Njen sadržaj se može pomicati, tako da lako možete pregledati nadolazeće događaje.

### Opcije kalendara

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv               | Tip     | Obaveznost   | Podržane opcije                                 | Opis                                                                                    |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Opcionalno   | Bilo koji broj (minimalno: 1)                  | Broj kalendarskih dana za koje se preuzimaju događaji, od sada do kraja N-tog dana (zadano: 7) |
| `entities`          | object  | **Obavezno** | Objekat kalendarskog entiteta (pogledajte ispod) | Entitet koji želite kontrolisati (npr. `calendar.main_calendar`).                       |
| `entities.entity`   | string  | **Obavezno** | Kalendarski entitet                             | Kalendarski entitet za prikaz                                                           |
| `entities.color`    | string  | Opcionalno   | Boja                                            | Prilagođena boja za oznaku kalendara. Ako nije definisana, boja će biti odabrana automatski |
| `days`              | number  | Opcionalno   | Bilo koji broj (minimalno: 1)                   | Broj kalendarskih dana za koje se preuzimaju događaji, od sada do kraja N-tog dana (zadano: 7) |
| `limit`             | number  | Opcionalno   | Broj                                            | Broj događaja koji će biti prikazani na kartici                                         |
| `show_end`          | boolean | Opcionalno   | `true` ili `false` (zadano)                     | Prikaži ili sakrij vrijeme završetka događaja                                           |
| `show_progress`     | boolean | Opcionalno   | `true` (zadano) ili `false`                     | Prikaži ili sakrij traku napretka događaja                                              |
| `show_started_events`| boolean | Opcionalno   | `true` (zadano) ili `false`                     | Prikaži ili sakrij događaje koji su trenutno u toku. Višednevni događaji procjenjuju se dan po dan, tako da se skriva samo dan koji je u toku, a naredni dani ostaju vidljivi |
| `scrolling_effect`  | boolean | Opcionalno | `true` (zadano) ili `false` | Omogućava pomicanje teksta kada sadržaj premašuje veličinu svog kontejnera |
| `event_action` | object | Opcionalno | `tap_action`, `double_tap_action` ili `hold_action`, pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava dodavanje akcija na klik događaja. |
| `tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na klik dana, ako nije definisano, koristit će se `none`. |
| `double_tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na dvostruki klik dana, ako nije definisano, koristit će se `none`. |
| `hold_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije na držanje dana, ako nije definisano, koristit će se `none`. |
| `card_layout` | string | Opcionalno | `normal` (zadano izvan prikaza sa sekcijama), `large` (zadano u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Stilski raspored kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opcionalno | Pogledajte [pod-dugmad](#pod-dugmad) | Dodaje prilagođenu dugmad fiksiranu na desnoj strani |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla                                 | Očekivana vrijednost | Opis                                                               |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Glavna boja pozadine za podržane elemente u kartici kalendara      |
| `--bubble-calendar-border-radius`         | `px`           | Zaobljenost ivica za podržane elemente u kartici kalendara         |
| `--bubble-calendar-height`                | `px`           | Visina kartice kalendara                                            |

</details>

#### Primjeri

<details>

<summary>Kartica kalendara s ograničenim brojem događaja</summary>

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

<summary>Kartica kalendara s vremenom završetka i trakom napretka</summary>

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


## Razdjelnik

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ova kartica je jednostavan razdjelnik za podjelu vašeg skočnog prozora na kategorije / sekcije, npr. Svjetla, Uređaji, Roletne, Postavke, Automatizacije...

### Opcije razdjelnika

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `name` | string | Opcionalno, ali preporučeno | Bilo koji tekst | Naziv vašeg razdjelnika |
| `icon` | string | Opcionalno, ali preporučeno | Bilo koja `mdi:` ikona | Ikona vašeg razdjelnika |
| `card_layout` | string | Opcionalno | `normal` (zadano ako nije u prikazu sa sekcijama), `large` (zadano ako je u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Stilski raspored kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opcionalno | Pogledajte [pod-dugmad](#pod-dugmad) | Dodajte prilagođenu dugmad fiksiranu na desnoj strani |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Boja pozadine linije u razdjelniku |

</details>

#### Primjer

<details>

<summary>Razdjelnik za sekciju "Roletne"</summary>

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

## Prazna kolona

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ova kartica služi za popunjavanje prazne kolone. Korisna je ako u svom skočnom prozoru imate `horizontal-stack` sa samo jednom karticom. Pogledajte donji desni ugao ovog snimka ekrana da je (ne) vidite.

### Opcije prazne kolone

Ova kartica nema opcija i ne podržava [stilove](#stilovi), ali podržava opcije rasporeda za HA sekcije.

#### Primjer

<details>

<summary>Prazna kolona u horizontalnom stacku</summary>

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

## Samo pod-dugmad

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Ova kartica je namijenjena samo pod-dugmadi. Savršena je za menije, brze akcije, informativne čipove ili fiksirano podnožje pri dnu stranice.

> [!IMPORTANT]  
> Ova kartica koristi novu šemu pod-dugmadi. Koristite `sub_button.bottom` da definišete svoju dugmad. Sekcija `sub_button.main` se zanemaruje.

### Opcije kartice Samo pod-dugmad

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obavezno** | Pogledajte [pod-dugmad](#pod-dugmad) | Definišite svoju pod-dugmad koristeći sekciju `bottom` |
| `hide_main_background` | boolean | Opcionalno | `true` ili `false` (zadano) | Uklonite pozadinu kartice |
| `footer_mode` | boolean | Opcionalno | `true` ili `false` (zadano) | Fiksirajte karticu pri dnu stranice |
| `footer_full_width` | boolean | Opcionalno | `true` ili `false` (zadano) | Podnožje pune širine (100%) |
| `footer_width` | number | Opcionalno | Bilo koji broj | Širina podnožja u pikselima kada je `footer_full_width` postavljeno na `false` |
| `footer_bottom_offset` | number | Opcionalno | Bilo koji broj | Udaljenost od dna stranice u pikselima (zadano: `16`) |
| `card_layout` | string | Opcionalno | `normal` (zadano ako nije u prikazu sa sekcijama), `large` (zadano ako je u prikazu sa sekcijama), `large-2-rows`, `large-sub-buttons-grid` | Stilski raspored kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opcionalno | Bilo koji broj | Broj redova (visina) (npr. `2`) |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Širina podnožja kada je `footer_full_width` postavljeno na `false` |
| `--bubble-footer-bottom` | `px` | Donji pomak podnožja |
| `--bubble-footer-box-shadow` | pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena za kontejner podnožja |

</details>

#### Primjeri

<details>

<summary>U stilu čipova (kao na snimku ekrana)</summary>

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

<summary>Fiksirani meni podnožja</summary>

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

## Pod-dugmad

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

U svakoj kartici koja podržava tu opciju možete dodati pod-dugmad da još više prilagodite svoje kartice. Možete, naprimjer, napraviti dugme koje upravlja usisivačem, vremensku karticu ili gotovo bilo šta što vam padne na pamet. Ova pod-dugmad podržavaju akcije dodira i većinu opcija dugmeta.

Pod-dugmad sada podržavaju tri tipa: **Zadano (dugme)**, **Klizač** i **Padajući meni / Odabir**. Možete miješati tipove u istoj kartici, postaviti pod-dugmad na vrh ili dno i organizovati ih u grupe za naprednije rasporede.

#### Pozicioniranje i grupe pod-dugmadi

<details>

<summary><b>Struktura pod-dugmadi (main / bottom + grupe)</b></summary>

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

**Napomene:**
- `main` i `bottom` su dvije nezavisne sekcije. Donja pod-dugmad su fiksirana na dno kartice.
- `main_layout` i `bottom_layout` prihvataju `inline` (zadano) ili `rows` za vertikalno slaganje grupa.
- Grupe su objekti s nizom `group` i opcionalnim `buttons_layout` (`inline` ili `column`).
- `justify_content` je dostupan **samo za donje grupe** (`start`, `center`, `end`, `fill`).
- Kada su prisutna donja pod-dugmad, raspored kartice se automatski prebacuje na `large`, osim ako izričito ne postavite drugi raspored.
- Naslijeđeni `sub_button` nizovi su i dalje podržani i tretiraju se kao sekcija `main`.

</details>

### Opcije pod-dugmadi

<details>

<summary><b>Opcije (YAML + opis)</b></summary>

| Naziv | Tip | Obaveznost | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcionalno | Bilo koji entitet | Entitet kojim se upravlja |
| `name` | string | Opcionalno | Bilo koji tekst | Naziv vašeg pod-dugmeta, ako nije definisan prikazat će se naziv entiteta |
| `icon` | string | Opcionalno | Bilo koja `mdi:` ikona | Ikona vašeg pod-dugmeta, ako nije definisana prikazat će se ikona entiteta ili slika entiteta |
| `force_icon` | boolean | Opcionalno | `true` ili `false` (zadano) | Daj prednost ikoni čak i ako je dostupna slika entiteta |
| `sub_button_type` | string | Opcionalno | `default`, `slider` ili `select` | Odaberite tip pod-dugmeta |
| `show_background` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži pozadinu vašeg pod-dugmeta, njena boja će se mijenjati na osnovu stanja vašeg entiteta |
| `state_background` | boolean | Opcionalno | `true` (zadano) ili `false` | Koristi boju stanja kada je entitet `on` |
| `light_background` | boolean | Opcionalno | `true` (zadano) ili `false` | Koristi boju svjetla za pozadinu kada je dostupna |
| `show_state` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednje promjene vašeg `entity` |
| `show_last_updated` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži vrijeme posljednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Opcionalno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Opcionalno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `select_attribute` | string | Opcionalno | Lista atributa iz vašeg `entity` (pogledajte podržane opcije iznad) | Ova lista atributa će se otvoriti kao padajući meni na klik (npr. `effect_list`) |
| `show_arrow` | boolean | Opcionalno | `true` (zadano) ili `false` | Prikaži ili sakrij strelicu padajućeg menija za select pod-dugmad |
| `scrolling_effect` | boolean | Opcionalno | `true` (zadano) ili `false` | Dozvoli pomicanje teksta kada sadržaj premašuje veličinu kontejnera |
| `tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definišite tip akcije na klik pod-dugmeta, ako nije definisano, koristit će se `more-info`. |
| `double_tap_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definišite tip akcije na dvostruki klik pod-dugmeta, ako nije definisano, koristit će se `none`. |
| `hold_action` | object | Opcionalno | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definišite tip akcije na držanje pod-dugmeta, ako nije definisano, koristit će se `more-info`. |
| `fill_width` | boolean | Opcionalno | `true` ili `false` | Popuni dostupnu širinu (zadano: `false` za main, `true` za bottom) |
| `width` | number ili string | Opcionalno | Bilo koji broj ili CSS dužina | Prilagođena širina (zadano `px` za sekciju main, `%` za sekciju bottom) |
| `custom_height` | number | Opcionalno | Bilo koji broj | Prilagođena visina u pikselima |
| `content_layout` | string | Opcionalno | `icon-left` (zadano), `icon-top`, `icon-bottom`, `icon-right` | Pozicija ikone unutar pod-dugmeta |
| `always_visible` | boolean | Opcionalno | `true` ili `false` (zadano) | **Samo klizač.** Uvijek prikaži klizač umjesto otvaranja na dodir |
| `show_button_info` | boolean | Opcionalno | `true` ili `false` (zadano) | **Samo klizač.** Prikaži ikonu/naziv/stanje kada je `always_visible` omogućeno |
| `visibility` | object ili lista | Opcionalno | Pogledajte [uslove](#uslovi) | Prikaži ili sakrij pod-dugme na osnovu uslova |
| `hide_when_parent_unavailable` | boolean | Opcionalno | `true` ili `false` (zadano) | Sakrij pod-dugme ako je entitet nadređene kartice nedostupan |
| `css_class` | string | Opcionalno | Bilo koji string | Dodatna CSS klasa na pod-dugmetu, da ga ciljate u svojim [stilovima](#stilovi) bez obzira na njegov naziv (npr. `My value` daje `.my-value`) |

</details>

<details>

<summary><b>Opcije klizač pod-dugmadi (iste kao za klizače dugmadi)</b></summary>

<br>

Klizač pod-dugmad podržavaju iste opcije klizača kao i klizači dugmadi, uključujući:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stilovi">Stilovi</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radijus ivica pod-dugmadi |
| `--bubble-sub-button-background-color` | `color` | Boja pozadine pod-dugmadi |
| `--bubble-sub-button-outline` | `box-shadow` | Obris koji se dodaje pod-dugmetu ili klizaču, samo kada se taj element iscrtava u istoj boji kao kartica iza njega, što bi ga učinilo nevidljivim (postavite na `none` da ga uklonite) |
| `--bubble-sub-slider-border-radius` | `px` | Radijus ivica klizač pod-dugmadi |
| `--bubble-sub-slider-background-color` | `color` | Boja pozadine klizač pod-dugmadi |
| `--bubble-sub-slider-height` | `px` | Visina uvijek vidljivih klizač pod-dugmadi |
| `--bubble-sub-slider-outline` | `box-shadow` | Obris samo klizač pod-dugmadi, vraća se na `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Boja teksta na svijetlim pozadinama pod-dugmadi |

</details>

#### Primjeri

<details>

<summary>Dugme s nekoliko pod-dugmadi za karticu usisivača (kao na snimku ekrana)</summary>

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

<summary>Klizač dugme s jednim pod-dugmetom koje prikazuje svjetlinu i jednim koje prebacuje svjetlo (kao na snimku ekrana)</summary>

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

<summary>Dugme koje prikazuje unutrašnju i vanjsku temperaturu s vremenskom prognozom za danas i sutra (snimak ekrana uključen)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Nemam sreće, kod mene je stalno oblačno, ali sve ikone se mijenjaju na osnovu vremena.

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

## Rasporedi kartica

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card u potpunosti podržava Home Assistant prikaz sa sekcijama, možete promijeniti raspored kartice kako bi kartica bila veća, kao i broj kolona ili redova koje kartica treba zauzeti u vašem prikazu sa sekcijama (samo na karticama koje podržavaju tu opciju). Ovi rasporedi su podržani i u svim ostalim tipovima prikaza.

<details>

<summary><b>Dostupni rasporedi kartica</b></summary>

| Raspored | Opis |
| --- | --- |
| `normal` | Uobičajeni raspored (nije optimizovan za prikaz sa sekcijama) |
| `large` | Veći raspored koji će se prilagoditi odabranim redovima u prikazu sa sekcijama (optimizovan za prikaz sa sekcijama) |
| `large-2-rows` | Veći raspored s 2 reda pod-dugmadi koji će se prilagoditi odabranim redovima u prikazu sa sekcijama (optimizovan za prikaz sa sekcijama) |
| `large-sub-buttons-grid` | Ovaj raspored prikazuje pod-dugmad u mreži, `rows` mora biti postavljen na najmanje `2`.

</details>

#### Primjeri

<details>

<summary>Veliko dugme koje prikazuje statistiku energije s 2 reda pod-dugmadi (snimak ekrana uključen)</summary>

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

<summary>Veliko dugme s više redova i 12 pod-dugmadi</summary>

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

## Uslovi

Neke opcije se vode uslovima, koji se pišu tačno kao oni na [uslovnoj kartici](https://www.home-assistant.io/dashboards/conditional/) Home Assistanta:

- `visibility` na [pod-dugmetu](#pod-dugmad), da ga prikaže ili sakrije
- `trigger` na [skočnom prozoru](#pop-up), da ga otvori kada su uslovi ispunjeni
- `checkConditionsMet(conditions, hass)` unutar vaših [šablona](#šabloni), kada vam odgovor treba u vlastitom kodu

Vrednuje se svaki tip uslova iz Home Assistanta: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, kao i grupe `and`, `or` i `not`. Rade i uslovi iz Home Assistantovog graditelja uslova, oni nazvani po svojoj domeni poput `sun.is_up`, `light.is_on`, `zone.in_zone` ili `temperature.is_value`, sa svojim postavkama `target`, `options`, `behavior` i `for`.

<details>

<summary><b>Primjer</b></summary>

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
> Uslovi se vrednuju u vašem pregledniku, pa ono malo njih kojima treba Home Assistant server ne može biti tačno: izlazak i zalazak sunca čitaju se iz entiteta `sun.sun` umjesto da se ponovo računaju, a trajanje `for` mjeri se od posljednje promjene stanja, bez historije recordera.
>
> `view_columns` se prihvata, ali uvijek prolazi, jer Bubble Card nikada nije ta koja raspoređuje kolone vašeg prikaza. Tip uslova koji Bubble Card ne poznaje javi se jednom u konzoli vašeg preglednika umjesto da tiho zakaže, tako da možete razlikovati grešku u kucanju od funkcije koja nedostaje.

<br>

---

<br>

## Akcije dodira, dvostrukog dodira i držanja

Također možete koristiti zadane Home Assistant akcije dodira, dvostrukog dodira i držanja na karticama koje podržavaju ovu opciju. Naprimjer, to vam omogućava da prikažete prozor "Više informacija" držanjem ikone dugmeta ili da pokrenete servis kada se pritisne pod-dugme.

**Napomena: Kada je `double_tap_action` konfigurisana, uobičajena `tap_action` će imati kašnjenje od 200ms kako bi se omogućilo prepoznavanje
dvostrukog dodira. Ako vam to kašnjenje ne odgovara, postavite `double_tap_action` na `none` da biste onemogućili obradu dvostrukog dodira.**

### Opcije akcija

<details>

<summary><b>Opcije (YAML + opis)</b></summary>

| Naziv | Tip | Podržane opcije | Opis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Akcija koja se izvršava |
| `target` | object |  | Radi samo s `call-service`. Slijedi [home-assistant sintaksu](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Bilo koja putanja vaše kontrolne table | Putanja za navigaciju (npr. `'#kitchen'` za otvaranje skočnog prozora) kada je akcija definisana kao navigate |
| `url_path` | string | Bilo koji link | URL koji se otvara na klik (npr. `https://www.google.com`) kada je akcija `url` |
| `service` | string | Bilo koji servis | Servis koji se poziva (npr. `media_player.media_play_pause`) kada je `action` definisana kao `call-service` |
| `data` ili `service_data` | object | Bilo koji podaci servisa | Podaci servisa koji se uključuju (npr. `entity_id: media_player.kitchen`) kada je `action` definisana kao `call-service` |
| `confirmation` | object | Pogledajte [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Prikazuje skočni prozor za potvrdu (ne onaj od Bubble Card), zamjenjuje zadani `confirmation` objekat |

</details>

#### Primjer

<details>

<summary>Dugme za otvaranje skočnog prozora</summary>

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

## Stilovi

Možete dodati prilagođene stilove za izmjenu CSS-a svih kartica **bez korištenja card-mod-a** na četiri načina:

- U uređivaču, idite na karticu koju želite izmijeniti, zatim otvorite _Opcije stila > Prilagođeni stilovi i JS šabloni_ i dodajte svoje prilagođene stilove (pogledajte savjete i primjere ispod).
- U uređivaču (ili u [YAML-u](#modules)), idite na karticu koju želite izmijeniti, zatim otvorite _Moduli_, pa napravite novi modul (bit će dostupan svim karticama), ili idite u **Module Store** da instalirate bilo koji dostupni modul (više detalja o modulima možete pronaći [ispod](#modules)).
- U datoteci [teme](https://www.home-assistant.io/integrations/frontend/#defining-themes) dodavanjem CSS varijabli u YAML-u (dostupne su u dokumentaciji svake kartice iznad). Ovo omogućava globalne izmjene.

  <details>
  
  <summary>Primjer</a></summary>
  
  <br>

  Nemojte kopirati liniju `Bubble:`, to je naziv teme koju koristite. Također morate ukloniti `--` s varijabli.

  Morate pokrenuti akciju [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) da biste osvježili temu nakon bilo kakvih izmjena.

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
  
- U YAML-u dodavanjem `styles: |` iza čega slijede vaši prilagođeni stilovi (pogledajte savjete i primjere ispod).

> [!TIP]  
> **Da biste razumjeli koje klase stilova se mogu mijenjati**, možete pogledati folder [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) u ovom repozitoriju. U folderu svake kartice naći ćete datoteku pod nazivom `styles.css`. Te datoteke sadrže sve primijenjene stilove. Ovo pruža mnogo više mogućnosti od CSS varijabli, ali se mora dodati pojedinačno na svaku karticu.
> 
> Također možete pronaći mnogo [primjera iz zajednice](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ili neke na [Home Assistant forumu](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) uz malo pretraživanja.
>
> Bubble temu za Home Assistant (kao na snimcima ekrana) možete pronaći [ovdje](https://github.com/Clooos/Bubble).
>
> Video vodič uskoro stiže na moj [YouTube kanal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Imajte na umu da ćete možda morati dodati `!important;` nekim CSS stilovima koji su već definisani (pogledajte primjere ispod).

> [!TIP]  
> Pod-dugmad se može ciljati klasama na osnovu naziva. Naprimjer, pod-dugme pod nazivom "My sub-button" može se stilizovati s `.my-sub-button`. Pod-dugmad s klizačem također izlaže `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, itd.
>
> Klasa zasnovana na nazivu mijenja se kada preimenujete pod-dugme, a prevodi se kada se prevede i naziv. Postavite `css_class` na pod-dugme da dobijete vlastitu klasu koja se nikada ne pomjera, bez obzira na njegov naziv i bez obzira na jezik.

#### Primjeri

<details>

<summary>Promjena veličine fonta bilo koje Bubble Card kartice</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Promjena boje pozadine jednog dugmeta u horizontalnom nizu dugmadi</summary>

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

<summary>Promjena boje pozadine kartice</summary>

<br>

Ovaj radi na svim tipovima Bubble Card kartica (osim na skočnim prozorima):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ovaj radi isto, ali samo na kartici dugmeta (radi za zaglavlje skočnog prozora): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Da biste promijenili boju kada je stanje `on`, pogledajte šablone stilova ispod.

</details>

<details>

<summary>Promjena boje klizača dugmeta</summary>

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

<summary>Promjena boje linije razdjelnika</summary>

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

<summary>Promjena boje ikone</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Za ikonu horizontalnog niza dugmadi.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Promjena boje pozadine kontejnera ikone</summary>

<br>

Ovaj radi na svim tipovima Bubble Card kartica (osim na skočnim prozorima):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ovaj radi isto za zaglavlje skočnog prozora: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Promjena veličine pod-dugmadi (savršeno za veliki raspored)</summary>

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

<summary>Promjena boje pozadine drugog pod-dugmeta</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Promjena veličine ikone</summary>

<br>

Za glavnu ikonu.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Za ikone pod-dugmadi.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Korištenje slike umjesto ikone u pod-dugmetu</summary>

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

Samo otpremite tu sliku u folder "pictures" (ili s nazivom po želji) unutar Home Assistant foldera "www".

</details>

<details>

<summary>Napredni primjer: Pravljenje horizontalnog reda pod-dugmadi (snimak ekrana uključen)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ovaj mi je stvarno omiljen, koristim ga kao zaglavlje na svojoj kontrolnoj tabli.

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

## Šabloni

**Bubble Card ne podržava Jinja šablone**, ali napredni korisnici mogu dodati JS šablone direktno u svoje [prilagođene stilove](#stilovi). Naprimjer, to vam omogućava da dinamički promijenite ikonu, tekstove ili boje elementa, da uslovno prikažete ili sakrijete element (poput pod-dugmeta), ili gotovo bilo šta na osnovu stanja, atributa i još mnogo toga.

> [!TIP]  
> Više informacija o JS šablonima pronaći ćete [ovdje](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Moj savjet je da **uvijek pogledate konzolu svog pretraživača** kako biste bili sigurni da sve radi ispravno.

> [!IMPORTANT]  
> **Svi šabloni koji ne mijenjaju CSS svojstvo moraju biti postavljeni na kraj! Naprimjer oni koji mijenjaju ikonu, tekst ili bilo koji element.**

#### Dostupne varijable i funkcije

<details>

<summary>Varijable</summary>

<br>

U većini kartica imate pristup ovim varijablama:

- `state` vraća stanje vašeg definisanog entiteta `entity`.
  
- `entity` vraća entitet koji ste definisali, poput `switch.test` u ovom primjeru.
  
- `icon` se može koristiti ovako za promjenu ikone `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` vraća stanje entiteta `entity` definisanog na vašem prvom pod-dugmetu, `[0]` je stanje prvog pod-dugmeta, `[1]` drugog...
  
- `subButtonIcon[0]` se može koristiti ovako za promjenu ikone prvog pod-dugmeta `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` je ikona prvog pod-dugmeta, `[1]` drugog...
  
- `card` vraća element kartice u DOM-u.
  
- `hass` je napredna varijabla koja vam daje još više kontrole, naprimjer možete dobiti stanje entiteta `light.kitchen` ovako `hass.states['light.kitchen'].state` ili atribut ovako `hass.states[entity].attributes.brightness`.

- `this` vraća mnogo korisnih informacija o vašoj konfiguraciji i kontrolnoj tabli, koristite ovo samo ako znate šta radite.

</details>

<details>

<summary>Funkcije</summary>

<br>

Imate pristup svim globalnim JS funkcijama, ali imate pristup i sljedećem:

- `getWeatherIcon` se može koristiti za dobijanje vremenske ikone na osnovu stanja koje vraća vremensku prognozu. Naprimjer, možete uraditi ovo `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` da biste promijenili ikonu trećeg pod-dugmeta u ikonu današnjeg vremena, `.forecast[1]?.condition` je za sutra...

  Za to ćete morati napraviti šablonski senzor. Evo šta možete dodati u svoj `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` vraća `true` kada je lista [uslova](#uslovi) ispunjena, naprimjer `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` se može koristiti za prijevod stanja (može se koristiti i za dobijanje mjerne jedinice stanja, bez potrebe da je dodajete ručno).
- `hass.formatEntityAttributeValue(state, "attribute")` se može koristiti za prijevod atributa (može se koristiti i za dobijanje mjerne jedinice stanja, bez potrebe da je dodajete ručno).

</details>

#### Primjeri

U nastavku možete pronaći mnogo primjera, ali vrlo napredne šablone možete pronaći i na mojoj [Patreon stranici](https://www.patreon.com/c/Clooos), poput jednog (mog omiljenog) koji omogućava do četiri uslovne značke postavljene oko ikona kartice. To je ujedno i odličan način da naučite sve mogućnosti prilagođenih stilova i šablona Bubble Carda!

<details>
<summary>Primjeri s moje Patreon stranice</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Primjer 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Dodavanje znački u stilu Home Assistanta na bilo koju karticu</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Primjer 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Prikaz formatiranog datuma i vremena u razdjelniku bez korištenja ijednog entiteta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Primjer 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Prikaz stanja pod-dugmeta u dva reda</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Primjer 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Prilagođavanje oznaka i ikona unutar pod-dugmeta za odabir</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Primjer 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Dodavanje trajnog skočnog prozora podsjetnika koji se prikazuje samo kada je potreban</a>
</p>

<br>

</details>

<details>

<summary>Promjena boje pozadine dugmeta tako da bude crvena kada je <code>off</code> i plava kada je <code>on</code></summary>

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

<summary>Promjena boje pozadine dugmeta na osnovu entiteta za horizontalni niz dugmadi</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Uslovno prikazivanje/skrivanje pod-dugmeta</summary>

<br>

Ovaj primjer prikazuje prvo pod-dugme samo kada je moj usisivač zaglavljen.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ovaj primjer prikazuje pod-dugme kada je baterija ispod 10%. Korisno uz pod-dugme koje prikazuje "Slaba baterija".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Uslovna promjena ikone ili ikone pod-dugmeta</summary>

<br>

Ovaj primjer mijenja ikonu dugmeta samo kada je usisivač zaglavljen.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ovaj primjer mijenja ikonu prvog pod-dugmeta samo kada je usisivač zaglavljen.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Uslovna promjena boje ikone ili ikone pod-dugmeta</summary>

<br>

Ovaj primjer mijenja boju ikone dugmeta na osnovu njenog stanja.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ovaj primjer mijenja boju ikone pod-dugmeta na osnovu njenog stanja. `.bubble-sub-button-1` je prvo pod-dugme, zamijenite `1` ako želite promijeniti ikonu nekog drugog pod-dugmeta.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Uslovna animacija ikone ventilatora</summary>

<br>

Ovaj primjer rotira ikonu dugmeta kada je ventilator `on`.
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

<summary>Šabloniranje tekstova (poput naziva ili stanja)</summary>

<br>

Ovaj primjer mijenja naziv/stanje dugmeta u "It's currently sunny" u zavisnosti od vašeg vremena.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ili primijenjeno na pod-dugmad:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ako želite šablonirati stanje (`.bubble-state`), nemojte uključiti `show_state: true`, samo uključite `show_attribute: true` bez ijednog atributa.

</details>

<details>

<summary>Napredni primjer: Promjena boje pod-dugmeta kada je skočni prozor otvoren</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Napredni primjer: Šabloniranje naziva razdjelnika na osnovu stanja prevedenog na vaš jezik</summary>

<br>

Možete koristiti `hass.formatEntityState(state)` za prijevod stanja i `hass.formatEntityAttributeValue(state, "attribute")` za prijevod atributa.

Ovaj primjer mijenja naziv i ikonu na osnovu vremena, "Nuageux" znači "Oblačno" na francuskom.

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

## Modules

Moduli su moćna funkcija koja vam omogućava da spremite, ponovo koristite i dijelite svoje prilagođene stilove i šablone na svim svojim Bubble Card karticama. Umjesto da isti kod kopirate i lijepite u više kartica, možete napraviti modul i primijeniti ga gdje god vam zatreba. To čini upravljanje izgledom vaše kontrolne table mnogo lakšim i efikasnijim.

Ali ova funkcija je mnogo moćnija od toga, omogućava vam da sami dodate prave funkcije u Bubble Card uređivač, koristeći sve zadane opcije [Home Assistant formulara](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Selektor objekata je poboljšan tako da prikazuje promjene uživo i ispravno podržava atribute.

Modul može odgovoriti i biraču kartica u Home Assistantu, uz ugrađene [prijedloge entiteta](#prijedlozi-entiteta): koristite `suggestions` za kartice koje se mogu opisati unaprijed, a `suggestions_code` kada se moraju izračunati iz vaše postavke, naprimjer skočni prozor izgrađen od svih entiteta područja kojem pripada odabrani entitet. Oba ključa su dokumentovana [ovdje](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Također možete pregledati **Module Store** da biste pronašli i instalirali [module koje je napravila zajednica](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ili podijelili vlastite kreacije!

> [!TIP]
> Kod modula radi na potpuno isti način kao kod u odjeljku `styles` kartice. Dostupne su sve iste varijable i funkcije iz odjeljka [Šabloni](#šabloni).

<br>

### Početno podešavanje

> [!IMPORTANT]
> Počevši od verzije v3.1.0, Bubble Card Tools je preporučeni način spremanja modula. Stara metoda sa šablonskim senzorom i dalje radi za postojeće konfiguracije, ali novi moduli i funkcije Module Storea najbolje su podržani preko Bubble Card Toolsa.

Integracija Bubble Card Tools omogućava uređivač modula i Module Store, a module sprema kao pojedinačne YAML datoteke. Postojeći moduli se migriraju automatski.

Koraci instalacije i konfiguracije objašnjeni su ovdje:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Uređivač modula

Uređivaču modula možete pristupiti iz postavki bilo koje kartice, u odjeljku **Moduli**. Uređivač nudi dvije glavne kartice:

#### Kartica Moji moduli

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Ova kartica prikazuje sve vaše instalirane module i omogućava vam da:

- **Primijenite** postojeće module na trenutnu karticu
- **Napravite** novi modul od nule
- **Uredite** postojeće module s pregledom uživo
- **Obrišete** module koji vam više ne trebaju
- **Pretražite** i **sortirate** module (po abecedi, nedavni, prvo aktivni)
- **Postavite globalni status** kako bi se modul automatski primjenjivao na sve kartice
- **Uvezete/Izvezete** module radi sigurnosne kopije ili dijeljenja
- **Pišete prijedloge entiteta** u uređivaču modula, pod **Opcionalno: prijedlozi entiteta**, kako bi vaš modul bio ponuđen u biraču kartica u Home Assistantu. I pravila i izračunati prijedlozi provjeravaju se dok pišete, greška tu sprječava spremanje, a pregled prikazuje predložene kartice za bilo koji entitet koji odaberete

#### Kartica Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Ova kartica prikazuje [sve dostupne module zajednice](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) i omogućava vam da:

- **Pregledate** sve module koje je napravila zajednica
- **Pretražite** i filtrirate module po nazivu, kompatibilnosti ili ključnim riječima
- **Instalirate** module jednim klikom
- **Ažurirate** instalirane module kada su dostupne nove verzije

> [!TIP]
> U uređivaču možete omogućiti nepodržane module kako biste testirali module koji još nisu označeni kao kompatibilni s određenim tipom kartice.

<br>

### Kako koristiti module

#### Pravljenje novog modula

<details>

<summary>Kliknite za proširenje</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Idite u uređivač bilo koje kartice i proširite odjeljak **Moduli**.
2. Kliknite na **Napravi novi modul**.
3. Popunite informacije o modulu.
4. Napišite svoj CSS i/ili JavaScript šablonski kod u uređivaču **Kod**.
5. (Opcionalno) Napravite prilagođeni konfiguracijski interfejs u odjeljku **Uređivač** (poput birača boja na snimku ekrana iznad, kompletna dokumentacija dostupna je [ovdje](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Opcionalno) Napišite svoje **Prijedloge entiteta** kako bi vaš modul bio ponuđen u biraču kartica u Home Assistantu. Panel provjerava ono što pišete dok kucate, a njegov pregled prikazuje same predložene kartice za entitet po vašem izboru.
7. Kliknite **Spremi**.

Vaš modul je sada dostupan za korištenje na bilo kojoj od vaših kartica!

<br>

</details>

#### Primjena modula na karticu

<details>

<summary>Kliknite za proširenje</summary>

<br>

- **Preko uređivača:**

  - Idite u uređivač kartice na koju želite primijeniti modul.
  - Proširite odjeljak **Moduli**.
  - Kliknite na modul koji želite primijeniti s liste.
  - Pod "Primijeni na" kliknite na "Ova kartica". Modul je sada aktivan. Na istu karticu možete primijeniti više modula.

- **Preko YAML-a:**

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

#### Globalna primjena modula

<details>

<summary>Kliknite za proširenje</summary>

<br>

Modul možete postaviti da se automatski primjenjuje na sve Bubble Card kartice:

**Ovo nije dostupno za module s uređivačem, jer je njima za rad potrebna posebna konfiguracija.**

- **Preko uređivača:**

  - U uređivaču modula pronađite svoj modul na kartici **Moji moduli**.
  - Uključite dugme **Sve kartice** pored naziva modula.
  - Modul će se sada automatski primjenjivati na sve kartice.
 
- **Preko YAML-a:**

  U YAML konfiguraciju svog modula (u `bubble-modules.yaml`) samo dodajte `is_global: true`.

<br>

</details>

#### Izuzimanje pojedinačne kartice iz globalnog modula

<details>

<summary>Kliknite za proširenje</summary>

<br>

Ako imate globalni modul, ali ga želite izuzeti s određene kartice:

- **Preko uređivača:**
  
  - U odjeljku **Moduli** kartice vidjet ćete navedene globalne module.
  - Kliknite na globalni modul, onemogućite "Ova kartica" da biste ga izuzeli s ove određene kartice.

- **Preko YAML-a:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Dijeljenje vašeg modula u Module Store

<details>

<summary>Kliknite za proširenje</summary>

<br>

Da biste podijelili svoj modul u Module Store, u uređivaču modula, na dnu u odjeljku "Izvezi modul", kliknite na "Kopiraj za GitHub" i zalijepite sadržaj u novu diskusiju u kategoriji [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Uredite opis** (po potrebi), **primjer** (za korisnike YAML-a) i ne zaboravite **priložiti barem jedan snimak ekrana** za Module Store.

**Vaš modul postaje dostupan odmah nakon toga** (nakon osvježavanja Storea), pa dvaput provjerite da je sve ispravno napisano i da modul radi kako se očekuje. Naravno, modul možete uređivati/ažurirati i nakon što je podijeljen.

<br>

</details>

#### Upravljanje verzijama

<details>

<summary>Kliknite za proširenje</summary>

<br>

Module Store automatski provjerava dostupnost ažuriranja za instalirane module. Kada su ažuriranja dostupna:

1. Vidjet ćete indikator ažuriranja na kartici **Module Store**.
2. Kliknite **Ažuriraj** na modulima s dostupnim ažuriranjima.
3. Potvrdite ažuriranje u Module Storeu.

<br>

</details>

#### Definisanje podržanih tipova kartica

<details>

<summary>Kliknite za proširenje</summary>

<br>

Neki moduli možda nisu kompatibilni sa svim tipovima kartica. Možete odrediti koje kartice modul podržava.  
Ako želite da modul bude kompatibilan sa **svim karticama**, jednostavno izostavite polje `supported` (ili koristite opciju **Sve kartice** u uređivaču).

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

### Primjeri

<details>
<summary>Osnovni modul za stilizovanje</summary>

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
<summary>Modul s prilagođenom konfiguracijom</summary>

<br>

Ovaj modul je dostupan [ovdje](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Više primjera možete pronaći u Module Storeu ili [ovdje](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizacija

Bubble Card govori vaš jezik. Njen uređivač preveden je na 64 jezika koje Home Assistant podržava, a gdje god Home Assistant već ima riječ za nešto, koristi se njegova formulacija, pa iste izraze čitate u oba sučelja.

Na dnu uređivača, pored broja verzije, prekidač **Automatski** prati jezik vašeg Home Assistanta. Isključite ga i cijeli uređivač se vraća na engleski, što je zgodno kada pratite vodič ili prijavljujete problem. Vaš izbor se pamti u pregledniku.

I ova dokumentacija je prevedena, [na 62 jezika](languages.md), na sve osim na britanski engleski, koji prikazuje original. Te stranice su otvorene svima, pa se formulacija koja ne odgovara vašem Home Assistantu može ispraviti u par klikova. Engleska verzija ostaje referenca za sam sadržaj.

<br>

---

<br>

## Pomoć

Slobodno otvorite prijavu problema ako nešto ne radi kako se očekuje. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Imate pitanja ili razmišljanja o Bubble Card? Želite podijeliti svoje kontrolne table ili otkrića? Možete otići na Home Assistant forum, na Bubble Card subreddit ili u odjeljak GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Doprinos

Doprinosi su dobrodošli! Bilo da se radi o ispravkama grešaka, novim funkcijama, prijevodima ili poboljšanjima dokumentacije, slobodno otvorite pull request.

Prije nego što počnete, pročitajte [vodič za developere](DEVELOPERS.md) koji objašnjava kako postaviti lokalno okruženje, izgraditi projekat i testirati svoje izmjene.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donacije

Većinu svog slobodnog vremena posvećujem tome da ovaj projekat bude najbolji što može biti. Pa ako cijenite moj rad, svaka donacija bi bila odličan način da pokažete svoju podršku 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Hvala svima na podršci, vi ste moja najveća motivacija!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
