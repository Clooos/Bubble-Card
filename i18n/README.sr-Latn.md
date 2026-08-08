<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ova stranica je automatski prevedena. U slučaju nedoumice, prednost ima [originalna dokumentacija na engleskom](../README.md). Da li neka rečenica zvuči pogrešno? Svaka pomoć je dobrodošla, a [ispravljanje ove stranice](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.sr-Latn.md) traje samo minut: GitHub se brine o forku i pull requestu. Hvala unapred! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Pročitajte ovo na drugom jeziku](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card je minimalistička i prilagodljiva kolekcija kartica za Home Assistant, sa modernim iskačućim prozorima i integrisanim Module Store-om koji sadrži preko 100 modula napravljenih od strane zajednice.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Sadržaj

**[`Instalacija`](#instalacija)**  **[`Konfiguracija`](#konfiguracija)**  **[`Predlozi za entitete`](#predlozi-za-entitete)**  **[`Iskačući prozor`](#iskačući-prozor)**  **[`Horizontalni niz dugmadi`](#horizontalni-niz-dugmadi)**  **[`Dugme`](#dugme)**  **[`Medija plejer`](#medija-plejer)**  **[`Roletna`](#roletna)**  **[`Izbor`](#izbor)**  **[`Klima`](#klima)**  **[`Kalendar`](#kalendar)**  **[`Razdvajač`](#razdvajač)**  **[`Prazna kolona`](#prazna-kolona)**  **[`Samo pod-dugmad`](#samo-pod-dugmad)**  **[`Pod-dugmad`](#pod-dugmad)**  **[`Rasporedi kartica`](#rasporedi-kartica)**  **[`Uslovi`](#uslovi)**  **[`Akcije`](#akcije-dodira-dvostrukog-dodira-i-držanja)**  **[`Stilizovanje`](#stilizovanje)**  **[`Šabloni`](#šabloni)**  **[`Moduli`](#moduli)**  **[`Lokalizacija`](#lokalizacija)**  **[`Pomoć`](#pomoć)**  **[`Doprinos`](#doprinos)**  **[`Donirajte`](#donirajte)**

<br>

## Instalacija

**Najniža podržana verzija Home Assistant-a:** 2023.9.0

<details>

<summary>Bez HACS-a</summary>

<br>

1. Preuzmite `bubble-card.zip` sa [poslednjeg izdanja](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Raspakujte ga u folder `<config>/www`, trebalo bi da dobijete `bubble-card.js` i folder `translations` pored njega (taj folder sadrži rečnike editora, bez njega editor ostaje na engleskom)
3. Na svojoj tabli kliknite na ikonicu u gornjem desnom uglu, zatim na `Izmeni tablu`
4. Ponovo kliknite na tu ikonicu, a zatim kliknite na `Upravljanje resursima`
5. Kliknite na `Dodaj resurs`
6. Kopirajte i nalepite ovo: `/local/bubble-card.js?v=1`
7. Kliknite na `JavaScript Module`, a zatim na `Kreiraj`
8. Vratite se nazad i osvežite stranicu
9. Sada možete kliknuti na `Dodaj karticu` u donjem desnom uglu i pretražiti `Bubble Card`
10. Nakon svakog ažuriranja datoteke, moraćete da izmenite `/local/bubble-card.js?v=1` i promenite verziju na bilo koji viši broj

Ako ne radi, pokušajte da očistite keš svog pregledača.

</details>

<details>

<summary>Sa HACS-om (preporučeno)</summary>

<br>

Ovaj metod vam omogućava da dobijate ažuriranja direktno preko Home Assistant Community Store-a

1. Ako HACS još uvek nije instaliran, preuzmite ga prateći uputstva na [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Nastavite sa početnom konfiguracijom HACS-a prateći uputstva na [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. U bočnoj traci idite na "HACS"
4. Pretražite "Bubble Card" ili kliknite na plavo dugme ispod
5. Kliknite na "Preuzmi"
6. Vratite se na svoju tablu i kliknite na ikonicu u gornjem desnom uglu, zatim na `Izmeni tablu`
7. Sada možete kliknuti na `Dodaj karticu` u donjem desnom uglu i pretražiti `Bubble Card`

Ako ne radi, pokušajte da očistite keš pregledača/aplikacije (na svim vašim uređajima ako je potrebno).

#### Video snimci

Takođe možete pogledati moj YouTube kanal za video uputstva korak po korak.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguracija

Sve opcije mogu biti konfigurisane u Home Assistant editoru. Ali u dokumentaciji ispod možete pronaći više detalja i YAML.

<details>

<summary><b>Glavne opcije (YAML + opis)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `type` | string | **Obavezno** | `custom:bubble-card` | Tip kartice |
| `card_type` | string | **Obavezno** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ili `sub-buttons` | Tip Bubble Card kartice, vidite ispod |
| `styles` | object list | Opciono | Bilo koji CSS stilovi | Omogućava vam da prilagodite CSS vaše Bubble Card kartice, vidite [stilizovanje](#stilizovanje) |

</details>

<details>

<summary><b>Globalne CSS promenljive (vidite <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Promenljiva | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Poluprečnik zaobljenja ivica za sve podržane elemente |
| `--bubble-main-background-color` | `color` | Glavna boja pozadine za sve podržane elemente |
| `--bubble-secondary-background-color` | `color` | Sekundarna boja pozadine za sve podržane elemente |
| `--bubble-accent-color` | `color` | Akcentna boja za sve podržane elemente |
| `--bubble-icon-border-radius` | `px` | Poluprečnik zaobljenja ivica ikonice za sve podržane elemente |
| `--bubble-icon-background-color` | `color` | Boja pozadine ikonice za sve podržane elemente |
| `--bubble-sub-button-border-radius` | `px` | Poluprečnik zaobljenja ivica za sva pod-dugmad |
| `--bubble-sub-button-background-color` | `color` | Boja pozadine za sva pod-dugmad |
| `--bubble-box-shadow` | vidite [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za sve podržane elemente |
| `--bubble-border` | vidite [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Ivica za sve podržane kartice |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Pogledajte ovaj [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) da biste saznali više o Bubble Card kartici i njenim mogućnostima.** Moj YouTube kanal je prilično nov i fokusiran je na tutorijale o Home Assistant-u i Bubble Card kartici. Ne ustručavajte se da se pretplatite kako biste pomogli da poveća vidljivost mog kanala. Unapred vam hvala!

<br>

---

<br>

## Predlozi za entitete

Od Home Assistant 2026.6, biranje entiteta u biraču kartica nudi vam nekoliko gotovih kartica, a Bubble Card toj listi dodaje sopstvene recepte. Izaberite svetlo i biće vam ponuđena kartica sa klizačem osvetljenja, uz varijantu sa temperaturom boje, varijantu sa bojom i varijantu sa zasićenošću kada ih vaše svetlo podržava. Izaberite roletnu i dobijate njen klizač položaja, izaberite medija plejer i dobijate i varijantu sa listom izvora, izaberite usisivač i dobijate njegovu dugmad za pokretanje, pauzu i povratak na bazu. Svaki predlog je uobičajena konfiguracija Bubble Card prikazana kao pregled uživo, tako da možete uzeti najbliži i nastaviti da ga uređujete kao i obično.

Ono što vam se nudi zavisi od toga šta vaš entitet zaista može: svetlo bez kanala osvetljenja dobija prekidač umesto klizača, roletna koja ne može da se naginje ne dobija varijantu sa nagibom, a entitet klime dobija svoje unapred podešene režime samo kada ih ima. Klasične stavke slede ispod predloga Bubble Card kada imaju smisla: kartica namenjena tom tipu entiteta, obično dugme i klizač.

> [!TIP]
> Moduli mogu da dodaju sopstvene predloge na tu listu, vidite [module](#moduli).

<br>

---

<br>

## Iskačući prozor

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ova kartica vam omogućava da napravite iskačući prozor sa bilo kakvim sadržajem. Svaki iskačući prozor je **podrazumevano sakriven** i može biti otvoren ciljanjem njegovog linka (npr. `'#pop-up-name'`), pomoću bilo koje kartice koja podržava `navigate` [akciju](#akcije-dodira-dvostrukog-dodira-i-držanja), ili pomoću uključenog [horizontalnog niza dugmadi](#horizontalni-niz-dugmadi).

> [!TIP]
> ### Okidač iskačućeg prozora
> Ova funkcija vam omogućava da otvorite iskačući prozor na osnovu stanja bilo kog entiteta, na primer, možete otvoriti iskačući prozor "Bezbednost" sa kamerom kada je osoba ispred vaše kuće. Takođe možete kreirati toggle helper (input_boolean) i pokrenuti njegovo otvaranje/zatvaranje u automatizaciji.
> <details>
> <summary>Otvaranje iskačućeg prozora kada je <code>binary_sensor</code> <code>on</code></summary>
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
> ### Različiti načini zatvaranja iskačućeg prozora
> Postoji mnogo načina da zatvorite iskačući prozor. Na primer, možete prevući prstom od zaglavlja iskačućeg prozora ka dnu, dugim prevlačenjem unutar iskačućeg prozora ka dnu, pritiskom na Escape na desktopu, uklanjanjem heša iz URL-a ili jednostavno pritiskom na dugme za zatvaranje.
>


### Opcije iskačućeg prozora

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obavezno** | Bilo koji jedinstveni heš (npr. `'#kitchen'`) sa ' ' | Ovo je način na koji ćete otvoriti svoj iskačući prozor |
| `popup_style` | string | Opciono | `bubble` (podrazumevano) ili `classic` | Definiše vizuelni stil iskačućeg prozora |
| `popup_mode` | string | Opciono | `default` (podrazumevano), `fit-content`, `centered` ili `adaptive-dialog` | Definiše režim rasporeda iskačućeg prozora |
| `with_bottom_offset` | boolean | Opciono | `true` ili `false` (podrazumevano) | Koristi se samo sa `popup_mode: fit-content` ili `adaptive-dialog`. Primenjuje donji razmak na mobilnim uređajima, korisno kada vaša tabla sadrži footer karticu. |
| `full_width_on_mobile` | boolean | Opciono | `true` ili `false` (podrazumevano) | Koristi se samo sa `popup_mode: centered`. Proširuje iskačući prozor na punu širinu ekrana na mobilnim uređajima, korisno na manjim displejima. |
| `performance_mode` | string | Opciono | `default` (podrazumevano) ili `performance` | Optimizuje animaciju otvaranja iskačućeg prozora. `performance` blago odlaže renderovanje sadržaja i zamućenje pozadine, takođe onemogućava zamućenje pozadine (backdrop blur) ako je podešeno. |
| `auto_close` | string | Opciono | Vreme isteka u milisekundama (npr. `10000` za 10s) | Automatski zatvara iskačući prozor nakon isteka vremena |
| `close_on_click` | boolean | Opciono | `true` ili `false` (podrazumevano) | Automatski zatvara iskačući prozor nakon bilo koje interakcije |
| `close_by_clicking_outside` | boolean | Opciono | `true` (podrazumevano) ili `false` | Zatvara iskačući prozor klikom van njega |
| `width_desktop` | string | Opciono | Bilo koja CSS vrednost | Širina na desktopu (`100%` podrazumevano na mobilnim uređajima) |
| `margin` | string | Opciono | Bilo koja CSS vrednost | Koristite ovo **samo** ako vaš iskačući prozor nije dobro centriran na mobilnim uređajima (npr. `13px`) |
| `margin_top_mobile` | string | Opciono | Bilo koja CSS vrednost | Gornja margina na mobilnim uređajima (npr. `-56px` ako je vaše zaglavlje sakriveno) |
| `margin_top_desktop` | string | Opciono | Bilo koja CSS vrednost | Gornja margina na desktopu (npr. `50vh` za iskačući prozor upola manje visine ili `calc(100vh - 400px)` za fiksnu visinu od `400px`) |
| `bg_color` | string | Opciono | Bilo koja hex, rgb ili rgba vrednost | Boja pozadine vašeg iskačućeg prozora (npr. `#ffffff` za belu pozadinu) |
| `bg_opacity` | string | Opciono | Bilo koja vrednost od `0` do `100` | Neprozirnost pozadine vašeg iskačućeg prozora (npr. `100` za bez providnosti) |
| `bg_blur` | string | Opciono | Bilo koja vrednost od `0` do `100` | Efekat zamućenja pozadine vašeg iskačućeg prozora, **ovo radi samo ako `bg_opacity` nije podešeno na `100`** (npr. `0` za bez zamućenja)|
| `shadow_opacity` | string | Opciono | Bilo koja vrednost od `0` do `100` | Neprozirnost senke vašeg iskačućeg prozora (npr. `0` da je sakrijete) |
| `hide_backdrop` | boolean | Opciono | `true` ili `false` (podrazumevano) | Podesite ovo na true na prvom iskačućem prozoru vaše glavne table da biste onemogućili pozadinski sloj (backdrop) na svim iskačućim prozorima. |
| `background_update` | boolean | Opciono | `true` ili `false` (podrazumevano) | Ažurira sadržaj iskačućeg prozora u pozadini (nije preporučeno) |
| `trigger` | object ili list | Opciono | Vidite [uslove](#uslovi) | Otvara ovaj iskačući prozor kada su uslovi ispunjeni |
| `trigger_entity` | string | Opciono | Bilo koji entitet | Otvara ovaj iskačući prozor na osnovu stanja bilo kog entiteta, jednostavan oblik `trigger` |
| `trigger_state` | string | Opciono (**Obavezno** ako je definisano `trigger_entity`) | Bilo koje stanje entiteta | Stanje entiteta za otvaranje iskačućeg prozora |
| `trigger_close` | boolean | Opciono | `true` (podrazumevano) ili `false` | Zatvara iskačući prozor kada uslovi više nisu ispunjeni. Podrazumevano je `false` ako koristite stariji par `trigger_entity` i `trigger_state` |
| `open_action` | object | Opciono | Vidite [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Pokreće akciju kada se iskačući prozor otvara |
| `close_action` | object | Opciono | Vidite [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Pokreće akciju kada se iskačući prozor zatvara |
| `show_header` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikazuje/skriva zaglavlje iskačućeg prozora u potpunosti |
| `show_previous_button` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikazuje dugme za prethodni prozor pored dugmeta za zatvaranje i vraća se na prethodni iskačući prozor kada je dostupno |
| `show_close_button` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikazuje ili sakriva dugme za zatvaranje uz zadržavanje ostatka zaglavlja vidljivim |
| `buttons_position` | string | Opciono | `right` (podrazumevano) ili `left` | Pozicija dugmadi za zatvaranje i prethodni prozor u zaglavlju |
| `cards` | list | Opciono | Bilo koja Bubble Card, Home Assistant kartica ili prilagođena kartica | Definiše sadržaj vašeg iskačućeg prozora. Vidite primer iskačućeg prozora ispod. |
| Takođe imate pristup [svim podešavanjima dugmeta](#dugme) za zaglavlje iskačućeg prozora. | | Opciono | | Ako nije definisano, zaglavlje se neće prikazati |

</details>

<details>

<summary><b>CSS promenljive (vidite <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Promenljiva | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Poluprečnik zaobljenja ivica za iskačući prozor |
| `--bubble-pop-up-main-background-color` | `color` | Glavna boja pozadine za podržane elemente iskačućeg prozora |
| `--bubble-pop-up-background-color` | `color` | Boja pozadine iskačućeg prozora |
| `--bubble-backdrop-background-color` | `color` | Boja pozadinskog sloja (backdrop) |
| Takođe imate pristup [svim CSS promenljivama dugmeta](#opcije-dugmeta) za zaglavlje iskačućeg prozora. | | |

</details>


### Samostalni format iskačućeg prozora (v3.2.0+)

Od verzije v3.2.0, iskačući prozori koriste novi samostalni format u kome su kartice sadržaja definisane direktno unutar iskačućeg prozora pomoću opcije `cards`. Ovo pruža bolje performanse i novo iskustvo uređivanja zasnovano na sekcijama, prevlačenjem i puštanjem (drag-and-drop).


#### Primeri

<details>

<summary>Iskačući prozor (samostalni format)</summary>

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

<summary>Dugme za otvaranje iskačućeg prozora</summary>

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

Ova kartica je dobar pratilac kartice iskačućeg prozora, omogućavajući vam da otvorite odgovarajuće iskačuće prozore. Takođe vam omogućava da otvorite bilo koju stranicu vaše table. Pored toga, možete dodati svoje senzore pokreta/prisutnosti tako da se redosled dugmadi prilagođava prema prostoriji u koju ste upravo ušli. Ova kartica se može skrolovati, ostaje vidljiva i deluje kao footer.

> [!IMPORTANT]  
> Ova kartica mora biti poslednja u vašem prikazu (posle svake kartice i iskačućeg prozora). Ne može biti unutar bilo kog stack-a.

### Opcije horizontalnog niza dugmadi

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obavezno** | Heš iskačućeg prozora (npr. `'#kitchen'`) sa ' ' ili bilo koji link | Link za otvaranje |
| `1_name` | string | Opciono | Bilo koji tekst | Naziv za vaše dugme |
| `1_icon` | string | Opciono | Bilo koja `mdi:` ikonica | Ikonica za vaše dugme |
| `1_entity` | string | Opciono | Bilo koje svetlo ili grupa svetala | Prikazuje boju tog svetla u pozadini |
| `1_pir_sensor` | string | Opciono | Bilo koji binarni senzor | Najmanje jedan pir senzor ili više za `auto_order`, u stvari radi i sa bilo kojim tipom entiteta, na primer možete dodati grupe svetala i redosled će se menjati na osnovu poslednjeg promenjenog stanja. |
| `auto_order` | boolean | Opciono | `true` ili `false` (podrazumevano) | Menja redosled dugmadi prema poslednjem vremenu promene `_pir_sensor`, **mora biti `false` ako nemate nijedan `_pir_sensor` u svom kodu** |
| `margin` | string | Opciono | Bilo koja CSS vrednost | Koristite ovo **samo** ako vaš `horizontal-buttons-stack` nije dobro centriran na mobilnim uređajima (npr. `13px`) |
| `width_desktop` | string | Opciono | Bilo koja CSS vrednost | Širina na desktopu (`100%` podrazumevano na mobilnim uređajima) |
| `is_sidebar_hidden` | boolean | Opciono | `true` ili `false` (podrazumevano) | Popravlja poziciju horizontalnog niza dugmadi ako je bočna traka sakrivena na desktopu (samo ako ste sami napravili izmenu da je sakrijete) |
| `rise_animation` | boolean | Opciono | `true` (podrazumevano) ili `false` | Podesite ovo na `false` da onemogućite animaciju koja se aktivira nakon učitavanja stranice |
| `highlight_current_view` | boolean | Opciono | `true` ili `false` (podrazumevano) | Ističe trenutni heš/prikaz blagom animacijom |
| `hide_gradient` | boolean | Opciono | `true` ili `false` (podrazumevano) | Podesite ovo na `false` da sakrijete gradijent |

> [!IMPORTANT]  
> Promenljive koje počinju brojem definišu vaša dugmad, samo promenite taj broj da biste dodali još dugmadi (vidite primer ispod).

</details>

<details>

<summary><b>CSS promenljive (vidite <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Promenljiva | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Poluprečnik zaobljenja ivica za dugmad horizontalnog niza |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Boja pozadine za dugmad horizontalnog niza |

</details>


#### Primer

<details>

<summary>Horizontalni niz dugmadi koji se sam reorganizuje na osnovu senzora prisutnosti</summary>

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

Ova kartica je veoma svestrana. Može se koristiti kao **prekidač**, **klizač**, **stanje** ili dugme za **naziv/tekst**.

> [!TIP]
> ### Koje su razlike između svih tipova dugmadi?
>
> - **Dugme prekidača:** Ovo je podrazumevani tip dugmeta. Podrazumevano prebacuje entitet, a boja pozadine se menja u zavisnosti od stanja entiteta ili boje svetla. Njegovu akciju možete promeniti u sekciji **Tap action on card**.
>
> - **Dugme klizača:** Ovaj tip dugmeta vam omogućava da kontrolišete entitete sa podesivim opsezima. Idealan je za zatamnjivanje svetala, a njegova boja popune će se prilagoditi boji svetla. Takođe ga možete koristiti za prikaz vrednosti, poput nivoa baterije.
>   Podržani entiteti za klizače:
>   - Light (osvetljenje, brightness)
>   - Media player (jačina zvuka)
>   - Cover (pozicija)
>   - Fan (procenat)
>   - Climate (temperatura)
>   - Input number i number (vrednost)
>   - Senzor baterije (procenat, samo za čitanje)
>
>   Takođe možete koristiti bilo koji entitet sa numeričkim stanjem tako što ćete onemogućiti filter entiteta u **Slider settings**, a zatim definisati vrednosti `min` i `max`. Ova opcija je samo za čitanje.
>
> - **Dugme stanja:** Savršeno za prikaz informacija iz senzora ili bilo kog entiteta. Kada ga pritisnete, prikazaće se panel "More info" tog entiteta. Boja pozadine se ne menja.
>
> - **Dugme naziva/teksta:** Jedini tip dugmeta kome nije potreban entitet. Omogućava vam da prikažete kratak tekst, naziv ili naslov. Možete mu takođe dodati akcije. Boja pozadine se ne menja.

### Opcije dugmeta

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entitet koji se kontroliše |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Ponašanje vašeg dugmeta |
| `name` | string | Optional | Any string | Naziv vašeg dugmeta, ako nije definisan biće prikazan naziv entiteta |
| `icon` | string | Optional | Any `mdi:` icon | Ikonica za vaše dugme, ako nije definisana biće prikazana ikonica entiteta ili `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Daje prioritet ikonici umesto `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Samo za svetla.** Koristi akcentnu boju teme umesto boje svetla.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Prikazuje ili sakriva stanje vašeg `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva naziv |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva ikonicu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednje promene vašeg `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Prikazuje atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut koji se prikazuje (npr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Omogućava klizanje teksta kada sadržaj prevazilazi veličinu njegovog kontejnera |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Omogućava promenu podrazumevanih akcija pri kliku na dugme. |
| `tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri kliku na ikonicu, ako nije definisano, koristiće se `more-info` |
| `double_tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri dvostrukom kliku na ikonicu, ako nije definisano, koristiće se `none` |
| `hold_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri držanju ikonice, ako nije definisano, koristiće se `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Optional | Any number | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#pod-dugmad) | Dodaje prilagođena dugmad fiksirana desno |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u dugmetu |
| `--bubble-button-border-radius` | `px` | Poluprečnik ivice za dugme |
| `--bubble-button-icon-border-radius` | `px` | Poluprečnik ivice za kontejner ikonice dugmeta |
| `--bubble-button-icon-background-color` | `color` | Boja pozadine za kontejner ikonice dugmeta |
| `--bubble-light-white-color` | `color` | Zamenjuje podrazumevanu belu boju dugmadi/klizača svetla |
| `--bubble-light-color` | `color` | Zamenjuje boju dugmadi/klizača svetla (čak i RGB svetala) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za dugme |

</details>

Ove opcije su dostupne samo kada je `button_type` postavljen na `slider`.

<details>

<summary><b>Opcije klizača (YAML + opisi)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Minimalna vrednost klizača. Za prilagođene klizače.                                                    |
| `max_value`             | number  | Optional                        | Maksimalna vrednost klizača. Za prilagođene klizače.                                                    |
| `step`                  | number  | Optional                        | Korak vrednosti klizača.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Omogućava prethodno ponašanje klizača gde dodirujete da biste aktivirali klizač, umesto da ga držite.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Ažurira vrednost relativno u odnosu na početnu vrednost, a ne u odnosu na početnu tačku dodira.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Postavlja klizač samo za čitanje. Automatski se omogućava za neke entitete, poput senzora.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Stanje entiteta se ažurira tokom klizanja. **Ova funkcija se ne preporučuje za sve entitete.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` ili `bottom` | Menja pravac popunjavanja klizača. Sleva nadesno kada nije definisano, preslikano u [jezicima koji se pišu zdesna nalevo](#lokalizacija) |
| `slider_value_position` | string | Optional | `right`, `left`, `center` ili `hidden` | Pozicija prikaza vrednosti. Desno kada nije definisano, a levo u [jezicima koji se pišu zdesna nalevo](#lokalizacija) |
| `invert_slider_value` | boolean | Optional (`false` default) | Obrće pravac klizača (popuna od 100% odgovara minimumu). Nije dostupno za klizače boje. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Samo za svetla.** Bira režim klizača |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Samo za roletne.** Bira režim klizača (pozicija ili nagib) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Samo za svetla (režim Hue).** Prisiljava zasićenje pri podešavanju nijanse |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Samo za svetla (režim Hue).** Prisilna vrednost zasićenja (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Samo za svetla (režim osvetljenja).** Koristi akcentnu boju teme umesto boje svetla |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Samo za svetla.** Omogućava klizaču da dostigne 0%, čime se svetlo gasi. Nije dostupno uz `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Samo za svetla.** Omogućava glatke prelaze osvetljenja za podržana svetla.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Samo za svetla.** Vreme prelaza u milisekundama. Zahteva `light_transition: true`.            |

</details>

#### Primeri

<details>

<summary>Dugme klizača koje može da kontroliše osvetljenje svetla</summary>

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

<summary>Dugme sa više opcija</summary>

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

Ova kartica vam omogućava da kontrolišete entitet medija plejera.

### Opcije medija plejera

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Medija plejer koji se kontroliše |
| `name` | string | Optional | Any string | Naziv vašeg medija plejera, ako nije definisan biće prikazan naziv entiteta |
| `icon` | string | Optional | Any `mdi:` icon | Ikonica za vaš medija plejer, ako nije definisana biće prikazana ikonica entiteta ili `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Daje prioritet ikonici umesto `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Prikazuje ili sakriva stanje vašeg `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva naziv |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva ikonicu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednje promene vašeg `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Prikazuje atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut koji se prikazuje (npr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Omogućava klizanje teksta kada sadržaj prevazilazi veličinu njegovog kontejnera |
| `min_volume` | number | Optional | Any number | Minimalna vrednost klizača jačine zvuka. |
| `max_volume` | number | Optional | Any number | Maksimalna vrednost klizača jačine zvuka. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Koristi zamućenu naslovnu sliku medija kao pozadinu kartice. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava promenu podrazumevanih akcija pri kliku na dugme. |
| `tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri kliku na ikonicu, ako nije definisano, koristiće se `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri dvostrukom kliku na ikonicu, ako nije definisano, koristiće se `none`. |
| `hold_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri držanju ikonice, ako nije definisano, koristiće se `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Premešta dugmad radnji na naslovnoj slici na dno (fiksno) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Čini donju dugmad radnji punom širinom (podrazumevano: `true` kada je pozicija `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Poravnanje donje dugmadi radnji kada nije puna širina |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Optional | Any number | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#pod-dugmad) | Dodaje prilagođena dugmad fiksirana desno |
| `hide` | object | Optional | See below | Sakriva dugmad na kartici |

#### Opcije sakrivanja

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Sakriva dugme za reprodukciju/pauzu |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Sakriva dugme jačine zvuka |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Sakriva dugme za prethodno |
| `next_button` | boolean | Optional | `true` or `false` (default) | Sakriva dugme za sledeće |
| `power_button` | boolean | Optional | `true` or `false` (default) | Sakriva dugme za napajanje |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Glavna boja pozadine za medija plejer |
| `--bubble-media-player-border-radius` | `px` | Poluprečnik ivice za medija plejer |
| `--bubble-media-player-buttons-border-radius` | `px` | Poluprečnik ivice za dugmad medija plejera |
| `--bubble-media-player-slider-background-color` | `color` | Boja pozadine za klizač jačine zvuka |
| `--bubble-media-player-icon-border-radius` | `px` | Poluprečnik ivice za kontejner ikonice medija plejera |
| `--bubble-media-player-icon-background-color` | `color` | Boja pozadine za kontejner ikonice medija plejera |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za medija plejer |

</details>


#### Primeri

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

Ova kartica vam omogućava da kontrolišete vaše entitete `cover`.

### Opcije roletne

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Roletna koja se kontroliše |
| `name` | string | Optional | Any string | Naziv vaše roletne, ako nije definisan biće prikazan naziv entiteta |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Daje prioritet ikonici umesto `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Prikazuje ili sakriva stanje vašeg `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva naziv |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva ikonicu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednje promene vašeg `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Prikazuje atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut koji se prikazuje (npr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Omogućava klizanje teksta kada sadržaj prevazilazi veličinu njegovog kontejnera |
| `icon_open` | string | Optional | Any `mdi:` icon | Ikonica za otvorenu roletnu, ako nije definisana biće prikazana podrazumevana ikonica otvorene roletne |
| `icon_close` | string | Optional | Any `mdi:` icon | Ikonica za zatvorenu roletnu, ako nije definisana biće prikazana podrazumevana ikonica zatvorene roletne |
| `icon_up` | string | Optional | Any `mdi:` icon | Ikonica za dugme otvaranja roletne, ako nije definisana biće prikazana podrazumevana ikonica otvorene roletne |
| `icon_down` | string | Optional | Any `mdi:` icon | Ikonica za dugme zatvaranja roletne, ako nije definisana biće prikazana podrazumevana ikonica zatvorene roletne |
| `open_service` | string | Optional | Any service or script | Servis za otvaranje vaše roletne, podrazumevano `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Servis za zaustavljanje vaše roletne, podrazumevano `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Servis za zatvaranje vaše roletne, podrazumevano `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Pozicija dugmadi za kontrolu nagiba (prikazuje se samo ako roletna podržava nagib) |
| `open_tilt_service` | string | Optional | Any service or script | Servis za otvaranje nagiba, podrazumevano `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Servis za zatvaranje nagiba, podrazumevano `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava promenu podrazumevanih akcija pri kliku na dugme. |
| `tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri kliku na ikonicu, ako nije definisano, koristiće se `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri dvostrukom kliku na ikonicu, ako nije definisano, koristiće se `none`. |
| `hold_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri držanju ikonice, ako nije definisano, koristiće se `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Premešta kontrole medija na dno (fiksno) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Čini donje kontrole punom širinom (podrazumevano: `true` kada je pozicija `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Poravnanje donjih kontrola kada nije puna širina |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Optional | Any number | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#pod-dugmad) | Dodaje prilagođena dugmad fiksirana desno |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici roletne |
| `--bubble-cover-border-radius` | `px` | Poluprečnik ivice za karticu roletne |
| `--bubble-cover-icon-border-radius` | `px` | Poluprečnik ivice za kontejner ikonice kartice roletne |
| `--bubble-cover-icon-background-color` | `color` | Boja pozadine za kontejner ikonice kartice roletne |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za karticu roletne |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za dugmad u kartici roletne |

</details>


#### Primer

<details>

<summary>Kartica koja može da kontroliše rolo zavesu</summary>

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

## Izbor

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ova kartica vam omogućava da dodate padajući meni za vaše entitete `input_select` / `select`. Ova kartica takođe podržava pod-dugmad i sve uobičajene funkcije Bubble Card.

> [!TIP]
> Ako želite, možete imati i pod-dugmad za izbor, ova funkcija je dostupna u svim karticama koje podržavaju pod-dugmad.

### Opcije izbora

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entitet koji se kontroliše |
| `name` | string | Optional | Any string | Naziv vašeg izbora, ako nije definisan biće prikazan naziv entiteta |
| `icon` | string | Optional | Any `mdi:` icon | Ikonica za vaš izbor, ako nije definisana biće prikazana ikonica entiteta ili `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Daje prioritet ikonici umesto `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Prikazuje ili sakriva stanje vašeg `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva naziv |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Prikazuje ili sakriva ikonicu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednje promene vašeg `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Prikazuje vreme poslednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Prikazuje atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut koji se prikazuje (npr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Omogućava klizanje teksta kada sadržaj prevazilazi veličinu njegovog kontejnera |
| `tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri kliku na ikonicu, ako nije definisano, koristiće se `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri dvostrukom kliku na ikonicu, ako nije definisano, koristiće se `none`. |
| `hold_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri držanju ikonice, ako nije definisano, koristiće se `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Optional | Any number | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#pod-dugmad) | Dodaje prilagođena dugmad fiksirana desno |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici izbora |
| `--bubble-select-background-color` | `color` | Boja pozadine za karticu izbora |
| `--bubble-select-list-border-radius` | `px` | Poluprečnik ivice za padajući meni u kartici |
| `--bubble-select-list-item-accent-color` | `color` | Akcentna boja za izabranu stavku |
| `--bubble-select-list-background-color` | `color` | Boja pozadine za padajući meni u kartici |
| `--bubble-select-list-width` | `px` | Širina padajućeg menija u kartici |
| `--bubble-select-arrow-background-color` | `color` | Boja pozadine za strelicu padajućeg menija |
| `--bubble-select-button-border-radius` | `px` | Poluprečnik ivice za dugme izbora |
| `--bubble-select-border-radius` | `px` | Poluprečnik ivice za karticu izbora |
| `--bubble-select-icon-border-radius` | `px` | Poluprečnik ivice za kontejner ikonice kartice izbora |
| `--bubble-select-icon-background-color` | `color` | Boja pozadine za kontejner ikonice kartice izbora |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za karticu izbora |

</details>


#### Primeri

<details>

<summary>Kartica izbora sa listom scena</summary>

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

Ova kartica vam omogućava da kontrolišete vaše entitete `climate`.

> [!TIP]
> Meni za izbor režima je [pod-dugme](#pod-dugmad) koje se automatski dodaje pri kreiranju kartice. Zatim ga možete izmeniti ili ukloniti po želji.

### Opcije klime

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Entitet koji se kontroliše (npr. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Prilagođen naziv za karticu. Ako nije definisan, biće prikazan naziv entiteta.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Prilagođena ikonica za karticu. Ako nije definisana, koristiće se ikonica entiteta ili `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Daje prioritet ikonici u odnosu na `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Prikazuje ili sakriva trenutno stanje entiteta `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Prikazuje ili sakriva naziv entiteta.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Prikazuje ili sakriva ikonicu.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Sakriva kontrolu niže ciljne temperature ako je entitet `entity` podržava.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Sakriva kontrolu više ciljne temperature ako je entitet `entity` podržava.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Primenjuje stalnu boju pozadine kada je entitet klime UKLJUČEN.                                                              |
| `step` | number | Optional | Any number | Korak temperature. |
| `min_temp` | number | Optional | Any number | Minimalna temperatura. |
| `max_temp` | number | Optional | Any number | Maksimalna temperatura. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava promenu podrazumevanih akcija pri kliku na dugme. |
| `tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri kliku na ikonicu, ako nije definisano, koristiće se `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri dvostrukom kliku na ikonicu, ako nije definisano, koristiće se `none`. |
| `hold_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri držanju ikonice, ako nije definisano, koristiće se `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Premešta dugmad radnji klime na dno (fiksno) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Čini donju dugmad radnji punom širinom (podrazumevano: `true` kada je pozicija `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Poravnanje donje dugmadi radnji kada nije puna širina |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Optional | Any number | Broj redova (visina) (npr. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#pod-dugmad)                | Dodaje prilagođena dugmad fiksirana desno. Korisno za meni izbora režima klime.                                  |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici klime |
| `--bubble-climate-border-radius` | `px` | Poluprečnik ivice za podržane elemente kartice klime |
| `--bubble-climate-button-background-color` | `color` | Boja pozadine za dugmad kartice klime |
| `--bubble-climate-icon-border-radius` | `px` | Poluprečnik ivice za kontejner ikonice kartice klime |
| `--bubble-state-climate-fan-only-color` | `color` | Boja preklapanja za stanje samo ventilator |
| `--bubble-state-climate-dry-color` | `color` | Boja preklapanja za stanje sušenja |
| `--bubble-state-climate-cool-color` | `color` | Boja preklapanja za stanje hlađenja |
| `--bubble-state-climate-heat-color` | `color` | Boja preklapanja za stanje grejanja |
| `--bubble-state-climate-auto-color` | `color` | Boja preklapanja za automatsko stanje |
| `--bubble-state-climate-heat-cool-color` | `color` | Boja preklapanja za stanje grejanje-hlađenje |
| `--bubble-climate-accent-color` | `color` | Akcentna boja za karticu klime |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka za kontejner klime. |

</details>


#### Primeri

<details>

<summary>Kartica klime sa padajućim menijem HVAC režima</summary>

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

Ova kartica vam omogućava da prikažete vaše entitete kalendara. Njen sadržaj se može listati, tako da lako možete pregledati predstojeće događaje.

### Opcije kalendara

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Broj dana kalendara za koje se preuzimaju događaji, od sada do kraja N-tog dana (podrazumevano: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Entitet koji se kontroliše (npr. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Entitet kalendara koji se prikazuje                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Prilagođena boja za oznaku kalendara. Ako nije definisana, biće izabrana automatska boja |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Broj dana kalendara za koje se preuzimaju događaji, od sada do kraja N-tog dana (podrazumevano: 7) |
| `limit`             | number  | Optional     | A number                                        | Broj događaja koji će biti prikazani na kartici                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Prikazuje ili sakriva vreme završetka za događaje                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Prikazuje ili sakriva traku napretka događaja                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Prikazuje ili sakriva događaje koji su trenutno u toku. Višednevni događaji se procenjuju dan po dan, pa se sakriva samo dan koji je u toku, a naredni dani ostaju vidljivi |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Omogućava klizanje teksta kada sadržaj prevazilazi veličinu njegovog kontejnera |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Omogućava dodavanje akcija pri kliku na događaj. |
| `tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri kliku na dan, ako nije definisano, koristiće se `none`. |
| `double_tap_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri dvostrukom kliku na dan, ako nije definisano, koristiće se `none`. |
| `hold_action` | object | Optional | See [actions](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri držanju dana, ako nije definisano, koristiće se `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Stil rasporeda kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Optional | Any number | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#pod-dugmad) | Dodaje prilagođena dugmad fiksirana desno |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Glavna boja pozadine za podržane elemente u kartici kalendara  |
| `--bubble-calendar-border-radius`         | `px`           | Poluprečnik ivice za podržane elemente kartice kalendara |
| `--bubble-calendar-height`                | `px`           | Visina za karticu kalendara                                        |

</details>

#### Primeri

<details>

<summary>Kartica kalendara sa ograničenim brojem događaja</summary>

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

<summary>Kartica kalendara sa vremenom završetka i trakom napretka</summary>

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


## Razdvajač

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ova kartica je jednostavan razdvajač za deljenje iskačućeg prozora na kategorije/sekcije, na primer: Svetla, Uređaji, Roletne, Podešavanja, Automatizacije...

### Opcije razdvajača

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `name` | string | Opciono, ali preporučeno | Bilo koji string | Naziv za vaš razdvajač |
| `icon` | string | Opciono, ali preporučeno | Bilo koja `mdi:` ikonica | Ikonica za vaš razdvajač |
| `card_layout` | string | Opciono | `normal` (podrazumevano ako nije u prikazu sekcija), `large` (podrazumevano ako je u prikazu sekcija), `large-2-rows`, `large-sub-buttons-grid` | Raspored stilizovanja kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opciono | Bilo koji broj | Broj redova (visina) (npr. `2`) |
| `sub_button` | object | Opciono | Pogledajte [pod-dugmad](#pod-dugmad) | Dodajte prilagođena dugmad fiksirana desno |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Promenljiva | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Boja pozadine za liniju u razdvajaču |

</details>

#### Primer

<details>

<summary>Razdvajač/deliteljica za sekciju "Roletne"</summary>

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

Ova kartica služi za popunjavanje prazne kolone. Korisna je ako imate `horizontal-stack` u vašem iskačućem prozoru sa samo jednom karticom. Pogledajte donji desni ugao ovog snimka ekrana da je (ne) vidite.

### Opcije prazne kolone

Ova kartica nema opcije i ne podržava [stilizovanje](#stilizovanje), iako podržava opcije rasporeda za HA sekcije.

#### Primer

<details>

<summary>Prazna kolona u horizontalnom nizu</summary>

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

Ova kartica je namenjena isključivo pod-dugmadima. Savršena je za menije, brze akcije, informativne čipove ili fiksno podnožje pri dnu stranice.

> [!IMPORTANT]  
> Ova kartica koristi novu šemu pod-dugmadi. Koristite `sub_button.bottom` da definišete vaša dugmad. Sekcija `sub_button.main` se ignoriše.

### Opcije samo pod-dugmadi

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obavezno** | Pogledajte [pod-dugmad](#pod-dugmad) | Definišite vaše pod-dugmad koristeći sekciju `bottom` |
| `hide_main_background` | boolean | Opciono | `true` ili `false` (podrazumevano) | Uklonite pozadinu kartice |
| `footer_mode` | boolean | Opciono | `true` ili `false` (podrazumevano) | Fiksirajte karticu pri dnu stranice |
| `footer_full_width` | boolean | Opciono | `true` ili `false` (podrazumevano) | Podnožje na punoj širini (100%) |
| `footer_width` | number | Opciono | Bilo koji broj | Širina podnožja u pikselima kada je `footer_full_width` postavljeno na `false` |
| `footer_bottom_offset` | number | Opciono | Bilo koji broj | Rastojanje od dna stranice u pikselima (podrazumevano: `16`) |
| `card_layout` | string | Opciono | `normal` (podrazumevano ako nije u prikazu sekcija), `large` (podrazumevano ako je u prikazu sekcija), `large-2-rows`, `large-sub-buttons-grid` | Raspored stilizovanja kartice, pogledajte [rasporede kartica](#rasporedi-kartica) |
| `rows` | number | Opciono | Bilo koji broj | Broj redova (visina) (npr. `2`) |

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Promenljiva | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Širina podnožja kada je `footer_full_width` postavljeno na `false` |
| `--bubble-footer-bottom` | `px` | Rastojanje podnožja od dna |
| `--bubble-footer-box-shadow` | pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Senka kontejnera podnožja |

</details>

#### Primeri

<details>

<summary>Čipovi (kao na snimku ekrana)</summary>

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

<summary>Fiksni meni podnožja</summary>

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

U svakoj kartici koja podržava tu opciju, možete dodati pod-dugmad da još više prilagodite vaše kartice. Možete, na primer, napraviti dugme koje upravlja usisivačem, meteorološkom karticom, ili gotovo bilo čime što vam padne na pamet. Ova pod-dugmad podržavaju akcije dodira i većinu opcija dugmeta.

Pod-dugmad sada podržavaju tri tipa: **Podrazumevano (dugme)**, **Klizač**, i **Padajući meni/Izbor**. Možete mešati tipove u istoj kartici, postavljati pod-dugmad na vrh ili dno, i organizovati ih u grupe radi naprednijih rasporeda.

#### Raspoređivanje pod-dugmadi i grupe

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
- `main` i `bottom` su dve nezavisne sekcije. Pod-dugmad iz `bottom` su fiksirana pri dnu kartice.
- `main_layout` i `bottom_layout` prihvataju `inline` (podrazumevano) ili `rows` za vertikalno slaganje grupa.
- Grupe su objekti sa nizom `group` i opcionim `buttons_layout` (`inline` ili `column`).
- `justify_content` je dostupno samo za **donje grupe** (`start`, `center`, `end`, `fill`).
- Kada su donja pod-dugmad prisutna, raspored kartice se automatski prebacuje na `large`, osim ako izričito postavite drugi raspored.
- Nasleđeni nizovi `sub_button` su i dalje podržani i tretiraju se kao sekcija `main`.

</details>

### Opcije pod-dugmadi

<details>

<summary><b>Opcije (YAML + opis)</b></summary>

| Naziv | Tip | Zahtev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | Opciono | Bilo koji entitet | Entitet za upravljanje |
| `name` | string | Opciono | Bilo koji string | Naziv za vaše pod-dugme, ako nije definisan, prikazaće se naziv entiteta |
| `icon` | string | Opciono | Bilo koja `mdi:` ikonica | Ikonica za vaše pod-dugme, ako nije definisana, prikazaće se ikonica entiteta ili slika entiteta |
| `force_icon` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prisilno prikaži ikonicu čak i kada je dostupna slika entiteta |
| `sub_button_type` | string | Opciono | `default`, `slider` ili `select` | Izaberite tip pod-dugmeta |
| `show_background` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikaži pozadinu za vaše pod-dugme, boja će se menjati u zavisnosti od stanja entiteta |
| `state_background` | boolean | Opciono | `true` (podrazumevano) ili `false` | Koristi boju stanja kada je entitet `on` |
| `light_background` | boolean | Opciono | `true` (podrazumevano) ili `false` | Koristi boju svetla za pozadinu kada je dostupna |
| `show_state` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikaži ili sakrij ikonicu |
| `show_last_changed` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikaži vreme poslednje promene vašeg `entity` |
| `show_last_updated` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikaži vreme poslednjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Opciono | `true` ili `false` (podrazumevano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Opciono (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut vašeg `entity` | Atribut koji treba prikazati (npr. `brightness`) |
| `select_attribute` | string | Opciono | Lista atributa vašeg `entity` (pogledajte podržane opcije gore) | Ova lista atributa otvoriće padajući meni kada se klikne (npr. `effect_list`) |
| `show_arrow` | boolean | Opciono | `true` (podrazumevano) ili `false` | Prikaži ili sakrij strelicu padajućeg menija za pod-dugmad tipa izbor |
| `scrolling_effect` | boolean | Opciono | `true` (podrazumevano) ili `false` | Dozvoli klizanje teksta kada sadržaj prevazilazi veličinu kontejnera |
| `tap_action` | object | Opciono | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri kliku na pod-dugme, ako nije definisano, koristi se `more-info`. |
| `double_tap_action` | object | Opciono | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri dvostrukom kliku na pod-dugme, ako nije definisano, koristi se `none`. |
| `hold_action` | object | Opciono | Pogledajte [akcije](#akcije-dodira-dvostrukog-dodira-i-držanja) | Definiše tip akcije pri držanju pod-dugmeta, ako nije definisano, koristi se `more-info`. |
| `fill_width` | boolean | Opciono | `true` ili `false` | Popuni dostupnu širinu (podrazumevano: `false` za main, `true` za bottom) |
| `width` | number ili string | Opciono | Bilo koji broj ili CSS dužina | Prilagođena širina (`px` za sekciju main, `%` za sekciju bottom podrazumevano) |
| `custom_height` | number | Opciono | Bilo koji broj | Prilagođena visina u pikselima |
| `content_layout` | string | Opciono | `icon-left` (podrazumevano), `icon-top`, `icon-bottom`, `icon-right` | Položaj ikonice unutar pod-dugmeta |
| `always_visible` | boolean | Opciono | `true` ili `false` (podrazumevano) | **Samo klizač.** Uvek prikaži klizač umesto otvaranja pri dodiru |
| `show_button_info` | boolean | Opciono | `true` ili `false` (podrazumevano) | **Samo klizač.** Prikaži ikonicu/naziv/stanje kada je omogućeno `always_visible` |
| `visibility` | object ili list | Opciono | Pogledajte [uslove](#uslovi) | Prikaži ili sakrij pod-dugme na osnovu uslova |
| `hide_when_parent_unavailable` | boolean | Opciono | `true` ili `false` (podrazumevano) | Sakrij pod-dugme ako je nadređeni entitet kartice nedostupan |
| `css_class` | string | Opciono | Bilo koji tekst | Dodatna CSS klasa na pod-dugmetu, da biste ga ciljali u svom [stilizovanju](#stilizovanje) bez obzira na njegovo ime (na primer `My value` daje `.my-value`) |

</details>

<details>

<summary><b>Opcije klizača pod-dugmeta (isto kao klizači dugmeta)</b></summary>

<br>

Klizači pod-dugmadi podržavaju iste opcije kao klizači dugmeta, uključujući:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS promenljive (pogledajte <a href="#stilizovanje">Stilizovanje</a>)</b></summary>

| Promenljiva | Očekivana vrednost | Opis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Poluprečnik ivice za pod-dugmad |
| `--bubble-sub-button-background-color` | `color` | Boja pozadine za pod-dugmad |
| `--bubble-sub-button-outline` | `box-shadow` | Kontura dodata pod-dugmetu ili klizaču, samo kada se taj element iscrtava istom bojom kao kartica iza njega, što bi ga učinilo nevidljivim (postavite je na `none` da je uklonite) |
| `--bubble-sub-slider-border-radius` | `px` | Poluprečnik ivice za klizače pod-dugmadi |
| `--bubble-sub-slider-background-color` | `color` | Boja pozadine za klizače pod-dugmadi |
| `--bubble-sub-slider-height` | `px` | Visina za uvek vidljive klizače pod-dugmadi |
| `--bubble-sub-slider-outline` | `box-shadow` | Kontura samo za klizače pod-dugmadi, vraća se na `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Boja teksta na svetlim pozadinama pod-dugmadi |

</details>

#### Primeri

<details>

<summary>Dugme sa nekoliko pod-dugmadi za pravljenje kartice usisivača (kao na snimku ekrana)</summary>

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

<summary>Klizač dugmeta sa pod-dugmetom koje prikazuje osvetljenost i jednim koje uključuje/isključuje svetlo (kao na snimku ekrana)</summary>

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

<summary>Dugme koje prikazuje unutrašnju i spoljašnju temperaturu sa vremenskom prognozom za danas i sutra (snimak ekrana priložen)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Na moju žalost, kod mene je uvek oblačno, ali sve ikonice se menjaju u zavisnosti od vremena.

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

Bubble Card u potpunosti podržava prikaz sekcija Home Assistant-a, možete promeniti raspored kartice da bude veća, a takođe promeniti broj kolona ili redova koje kartica treba da zauzima u vašem prikazu sekcija (samo na karticama koje podržavaju tu opciju). Ovi rasporedi su takođe podržani u svim drugim tipovima prikaza.

<details>

<summary><b>Dostupni rasporedi kartica</b></summary>

| Raspored | Opis |
| --- | --- |
| `normal` | Regularni raspored (nije optimizovan za prikaz sekcija) |
| `large` | Veći raspored koji će se prilagoditi izabranim redovima u prikazu sekcija (optimizovano za prikaz sekcija) |
| `large-2-rows` | Veći raspored sa 2 reda pod-dugmadi koji će se prilagoditi izabranim redovima u prikazu sekcija (optimizovano za prikaz sekcija) |
| `large-sub-buttons-grid` | Ovaj raspored prikazuje pod-dugmad u mreži, `rows` mora biti postavljeno na najmanje `2`.

</details>

#### Primeri

<details>

<summary>Veliko dugme koje prikazuje statistiku energije sa 2 reda pod-dugmadi (snimak ekrana priložen)</summary>

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

<summary>Veliko dugme sa više redova sa 12 pod-dugmadi</summary>

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

Neke opcije se zasnivaju na uslovima, koji se pišu potpuno isto kao oni u [uslovnoj kartici](https://www.home-assistant.io/dashboards/conditional/) Home Assistant-a:

- `visibility` na [pod-dugmetu](#pod-dugmad), da biste ga prikazali ili sakrili
- `trigger` na [iskačućem prozoru](#iskačući-prozor), da biste ga otvorili kada su uslovi ispunjeni
- `checkConditionsMet(conditions, hass)` unutar vaših [šablona](#šabloni), kada vam odgovor treba u sopstvenom kodu

Vrednuje se svaki tip uslova Home Assistant-a: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, kao i grupe `and`, `or` i `not`. Rade i uslovi iz Home Assistant graditelja uslova, oni nazvani po svom domenu kao `sun.is_up`, `light.is_on`, `zone.in_zone` ili `temperature.is_value`, sa svojim podešavanjima `target`, `options`, `behavior` i `for`.

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
> Uslovi se vrednuju u vašem pregledaču, pa onih nekoliko kojima je potreban server Home Assistant-a ne mogu biti tačni: izlazak i zalazak sunca se čitaju iz entiteta `sun.sun` umesto da se ponovo izračunaju, a trajanje `for` se meri od poslednje promene stanja, bez istorije iz recorder-a.
>
> `view_columns` se prihvata ali uvek prolazi, pošto Bubble Card nikada ne raspoređuje kolone vašeg prikaza. Tip uslova koji Bubble Card ne poznaje jednom se prijavi u konzoli vašeg pregledača umesto da tiho zakaže, tako da možete razlikovati grešku u kucanju od funkcije koja nedostaje.

<br>

---

<br>

## Akcije dodira, dvostrukog dodira i držanja

Takođe možete koristiti podrazumevane akcije dodira, dvostrukog dodira i držanja iz Home Assistant-a na karticama koje podržavaju tu opciju. Na primer, ovo vam omogućava da prikažete prozor "više informacija" držanjem ikonice dugmeta ili da pokrenete servis kada se pritisne pod-dugme.

**Napomena: Kada je `double_tap_action` podešen, regularni `tap_action` će imati kašnjenje od 200ms kako bi se omogućilo prepoznavanje
dvostrukog dodira. Ako je ovo kašnjenje nepoželjno, postavite `double_tap_action` na `none` da onemogućite obradu dvostrukog dodira.**

### Opcije akcije

<details>

<summary><b>Opcije (YAML + opis)</b></summary>

| Naziv | Tip | Podržane opcije | Opis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Akcija koju treba izvršiti |
| `target` | object |  | Radi samo sa `call-service`. Prati [home-assistant sintaksu](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Bilo koja putanja vašeg dashboard-a | Putanja za navigaciju (npr. `'#kitchen'` za otvaranje iskačućeg prozora) kada je akcija definisana kao navigate |
| `url_path` | string | Bilo koji link | URL koji se otvara pri kliku (npr. `https://www.google.com`) kada je akcija `url` |
| `service` | string | Bilo koji servis | Servis koji se poziva (npr. `media_player.media_play_pause`) kada je `action` definisan kao `call-service` |
| `data` ili `service_data` | object | Bilo koji podaci servisa | Podaci servisa koje treba uključiti (npr. `entity_id: media_player.kitchen`) kada je `action` definisan kao `call-service` |
| `confirmation` | object | Pogledajte [potvrdu](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Prikaži iskačući prozor potvrde (ne Bubble Card verziju), zamenjuje podrazumevani objekat `confirmation` |

</details>

#### Primer

<details>

<summary>Dugme za otvaranje iskačućeg prozora</summary>

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

## Stilizovanje

Prilagođene stilove možete dodati da izmenite CSS svih kartica **bez korišćenja card-mod** na četiri načina:

- U editoru, idite na karticu koju želite da izmenite, zatim navigirajte do _Styling options > Custom styles & JS templates_, i dodajte svoje prilagođene stilove (pogledajte savete i primere ispod).
- U editoru (ili u [YAML](#moduli)), idite na karticu koju želite da izmenite, zatim navigirajte do _Modules_, pa napravite novi modul (biće dostupan svim karticama), ili idite u **Module Store** da instalirate bilo koji dostupan modul (više detalja o modulima možete naći [ispod](#moduli)).
- U datoteci [teme](https://www.home-assistant.io/integrations/frontend/#defining-themes) dodavanjem CSS promenljivih u YAML (dostupne su u dokumentaciji svake kartice iznad). Ovo omogućava globalne izmene.

  <details>
  
  <summary>Primer</a></summary>
  
  <br>

  Ne kopirajte liniju `Bubble:`, to je naziv teme koju koristite. Takođe treba da uklonite `--` iz promenljivih.

  Potrebno je da pokrenete akciju [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) da osvežite temu nakon bilo kakvih izmena.

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
  
- U YAML dodavanjem `styles: |` praćenim vašim prilagođenim stilovima (pogledajte savete i primere ispod).

> [!TIP]  
> **Da biste razumeli koje klase stilova mogu da se menjaju**, možete pogledati folder [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) u ovom repozitorijumu. U svakom folderu kartice naći ćete datoteku pod nazivom `styles.css`. Ove datoteke sadrže sve primenjene stilove. Ovo omogućava mnogo više mogućnosti nego CSS promenljive, ali mora da se doda pojedinačno svakoj kartici.
> 
> Takođe možete naći mnogo [primera iz zajednice](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ili neke sa [Home Assistant foruma](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) uz malo pretrage.
>
> Bubble tema za Home Assistant (kao na snimcima ekrana) može se naći [ovde](https://github.com/Clooos/Bubble).
>
> Video tutorijal uskoro stiže na mom [YouTube kanalu](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Imajte na umu da će možda biti potrebno da dodate `!important;` na neke CSS stilove koji su već definisani (pogledajte primere ispod).

> [!TIP]  
> Pod-dugmad mogu biti ciljana putem klasa zasnovanih na imenu. Na primer, pod-dugme nazvano "My sub-button" može se stilizovati sa `.my-sub-button`. Klizači pod-dugmadi takođe izlažu `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, itd.
>
> Klasa zasnovana na imenu se menja kada preimenujete pod-dugme, i prevodi se kada se prevede ime. Postavite `css_class` na pod-dugme da biste dobili sopstvenu klasu koja se nikada ne pomera, bez obzira na ime i bez obzira na jezik.

#### Primeri

<details>

<summary>Promena veličine fonta bilo koje Bubble Card kartice</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Promena boje pozadine jednog dugmeta u horizontalnom nizu dugmadi</summary>

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

<summary>Promena boje pozadine kartice</summary>

<br>

Ovo radi na svim tipovima Bubble Card kartica (osim za iskačuće prozore):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ovo radi istu stvar samo u kartici dugmeta (radi za zaglavlje iskačućeg prozora): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Da promenite boju kada je `on`, pogledajte šablone stilova ispod.

</details>

<details>

<summary>Promena boje klizača dugmeta</summary>

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

<summary>Promena boje linije razdvajača</summary>

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

<summary>Promena boje ikone</summary>

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

<summary>Promena boje pozadine kontejnera ikone</summary>

<br>

Ovo radi na svim tipovima Bubble Card kartica (osim za iskačuće prozore):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ovo radi istu stvar za zaglavlje iskačućeg prozora: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Promena veličine pod-dugmadi (savršeno za veliki raspored)</summary>

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

<summary>Promena boje pozadine drugog pod-dugmeta</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Promena veličine ikone</summary>

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

<summary>Korišćenje slike umesto ikone u pod-dugmetu</summary>

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

Samo otpremite ovu sliku u folder "pictures" (ili naziv koji želite) u "www" folderu Home Assistant-a.

</details>

<details>

<summary>Napredni primer: kreiranje horizontalnog reda pod-dugmadi (uključena je slika)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ovaj mi se zaista veoma sviđa, koristim ga kao zaglavlje na svom dashboard-u.

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

**Bubble Card ne podržava Jinja šablone**, ali napredni korisnici mogu dodati šablone u JS-u direktno u svoje [prilagođene stilove](#stilizovanje). Ovo, na primer, omogućava da dinamički promenite ikonu, tekstove ili boje elementa, da prikažete ili sakrijete element uslovno (kao pod-dugme), ili gotovo bilo šta na osnovu stanja, atributa i drugog.

> [!TIP]  
> Više informacija o JS šablonima [ovde](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Moj savet je da **uvek pogledate konzolu svog pregledača** kako biste bili sigurni da sve funkcioniše ispravno.

> [!IMPORTANT]  
> **Svi šabloni koji ne menjaju CSS svojstvo moraju biti postavljeni na kraju! Kao izmena ikone, teksta ili bilo kog elementa.**

#### Dostupne promenljive i funkcije

<details>

<summary>Promenljive</summary>

<br>

Imate pristup ovim promenljivim u većini kartica:

- `state` vraća stanje vaše definisane `entity`.
  
- `entity` vraća vaš entitet koji ste definisali kao `switch.test` u ovom primeru.
  
- `icon` može se koristiti ovako za promenu ikone `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` vraća stanje definisanog `entity` vašeg prvog pod-dugmeta, `[0]` je stanje prvog pod-dugmeta, `[1]` drugog...
  
- `subButtonIcon[0]` može se koristiti ovako za promenu ikone prvog pod-dugmeta `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` je ikona prvog pod-dugmeta, `[1]` drugog...
  
- `card` vraća element kartice u DOM-u.
  
- `hass` je napredna promenljiva koja vam daje još više kontrole, na primer možete vratiti stanje `light.kitchen` ovako `hass.states['light.kitchen'].state` ili atribut ovako `hass.states[entity].attributes.brightness`.

- `this` vraća mnogo korisnih informacija o vašoj konfiguraciji i dashboard-u, koristite ovo samo ako znate šta radite.

</details>

<details>

<summary>Funkcije</summary>

<br>

Imate pristup svim globalnim JS funkcijama, ali imate pristup i sledećem:

- `getWeatherIcon` može se koristiti za vraćanje ikone vremena na osnovu stanja koje vraća vreme. Na primer, možete uraditi ovo `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` da promenite ikonu trećeg pod-dugmeta na današnju vremensku ikonu, `.forecast[1]?.condition` je za sutra...

  Za to ćete morati da napravite šablonski senzor. Evo šta možete dodati u svoj `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` vraća `true` kada je lista [uslova](#uslovi) ispunjena, na primer `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` može se koristiti za prevod stanja (Takođe se može koristiti za dobijanje jedinice stanja, bez potrebe da je ručno dodajete).
- `hass.formatEntityAttributeValue(state, "attribute")` može se koristiti za prevod atributa (Takođe se može koristiti za dobijanje jedinice stanja, bez potrebe da je ručno dodajete).

</details>

#### Primeri

Mnogo primera možete naći ispod, ali takođe možete naći vrlo napredne šablone na mojoj [Patreon stranici](https://www.patreon.com/c/Clooos), poput jednog (mog omiljenog) koji omogućava do četiri uslovne značke postavljene oko ikona kartice. To je takođe odličan način da naučite sve mogućnosti prilagođenih stilova i šablona Bubble Card-a!

<details>
<summary>Primeri sa moje Patreon stranice</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Dodavanje značaka nalik Home Assistant-u bilo kojoj kartici</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Prikaz formatiranog datuma i vremena u razdvajaču bez korišćenja bilo kog entiteta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Prikaz stanja pod-dugmeta u dva reda</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Prilagođavanje oznaka i ikona unutar pod-dugmeta za izbor</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Dodavanje trajnog iskačućeg prozora za podsetnik koji se prikazuje samo kada je potreban</a>
</p>

<br>

</details>

<details>

<summary>Promena boje pozadine dugmeta koje je crveno kada je <code>off</code> i plavo kada je <code>on</code></summary>

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

<summary>Promena boje pozadine dugmeta na osnovu entiteta za horizontalni niz dugmadi</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Prikazivanje/sakrivanje pod-dugmeta uslovno</summary>

<br>

Ovaj prikazuje prvo pod-dugme samo kada je moj usisivač zaglavljen.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ovaj prikazuje pod-dugme kada je baterija ispod 10%. Korisno sa pod-dugmetom koje prikazuje "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Promena ikone ili ikone pod-dugmeta uslovno</summary>

<br>

Ovaj menja ikonu dugmeta samo kada je usisivač zaglavljen.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ovaj menja ikonu prvog pod-dugmeta samo kada je usisivač zaglavljen.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Promena boje ikone ili ikone pod-dugmeta uslovno</summary>

<br>

Ovaj menja boju ikone dugmeta na osnovu njegovog stanja.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ovaj menja boju ikone pod-dugmeta na osnovu njegovog stanja. `.bubble-sub-button-1` je prvo pod-dugme, zamenite `1` ako želite da promenite ikonu drugog pod-dugmeta.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animiranje ikone ventilatora uslovno</summary>

<br>

Ovaj rotira ikonu dugmeta kada je ventilator `on`.
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

<summary>Šabloniranje teksta (poput imena ili stanja)</summary>

<br>

Ovaj menja ime/stanje dugmeta sa "It's currently sunny" u zavisnosti od vremena.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ili kada se primeni na pod-dugmad:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ako želite da šablonirate stanje (`.bubble-state`), ne uključujte `show_state: true`, samo uključite `show_attribute: true` bez ikakvog atributa.

</details>

<details>

<summary>Napredni primer: promena boje pod-dugmeta kada je iskačući prozor otvoren</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Napredni primer: šabloniranje naziva razdvajača na osnovu stanja prevedenog na vaš jezik</summary>

<br>

Možete koristiti `hass.formatEntityState(state)` za prevod stanja i `hass.formatEntityAttributeValue(state, "attribute")` za prevod atributa.

Ovaj menja naziv i ikonu na osnovu vremena, "Nuageux" znači "Cloudy" (oblačno) na francuskom.

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

Moduli su moćna funkcija koja vam omogućava da sačuvate, ponovo koristite i delite svoje prilagođene stilove i šablone na svim svojim Bubble Card karticama. Umesto kopiranja i lepljenja istog koda u više kartica, možete napraviti modul i primeniti ga gde god vam je potreban. Ovo mnogo olakšava i čini efikasnijim upravljanje izgledom vašeg dashboard-a.

Ali ova funkcija je mnogo moćnija od toga, omogućava vam da sami dodate stvarne funkcije u Bubble Card editoru, koristeći sve podrazumevane opcije [Home Assistant forme](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
Birač objekata je poboljšan da prikazuje izmene uživo i da ispravno podržava atribute.

Modul može da odgovori i biraču kartica Home Assistant-a uz ugrađene [predloge za entitete](#predlozi-za-entitete): koristite `suggestions` za kartice koje može da opiše unapred, i `suggestions_code` kada moraju da se izračunaju iz vaše instalacije, na primer iskačući prozor napravljen od svih entiteta prostorije kojoj pripada izabrani entitet. Oba ključa su dokumentovana [ovde](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Takođe možete pregledati **Module Store** da pronađete i instalirate [module koje je napravila zajednica](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ili podelite svoje sopstvene kreacije!

> [!TIP]
> Kod modula funkcioniše potpuno isto kao kod u sekciji `styles` kartice. Sve iste promenljive i funkcije iz sekcije [Šabloni](#šabloni) su dostupne.

<br>

### Početno podešavanje

> [!IMPORTANT]
> Počev od v3.1.0, Bubble Card Tools je preporučeno pozadinsko skladište za module. Nasleđeni metod šablonskog senzora i dalje radi za postojeće instalacije, ali su novi moduli i funkcije Module Store-a najbolje podržani putem Bubble Card Tools.

Integracija Bubble Card Tools omogućava Module Editor i Module Store, i čuva module kao pojedinačne YAML datoteke. Postojeći moduli se automatski migriraju.

Koraci instalacije i konfiguracije su objašnjeni ovde:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

Module Editor-u možete pristupiti iz podešavanja bilo koje kartice, u sekciji **Modules**. Editor pruža dva glavna taba:

#### Tab My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Ovaj tab prikazuje sve vaše instalirane module i omogućava vam da:

- **Primenite** postojeće module na trenutnu karticu
- **Napravite** novi modul od nule
- **Izmenite** postojeće module uz pregled uživo
- **Obrišete** module koji vam više nisu potrebni
- **Pretražite** i **sortirate** module (po abecedi, nedavno, aktivni prvi)
- **Postavite globalni status** kako bi se modul automatski primenjivao na sve kartice
- **Uvezete/izvezete** module radi rezervne kopije ili deljenja
- **Pišete predloge za entitete** u editoru modula, u odeljku **Opciono: predlozi za entitete**, da bi vaš modul bio ponuđen u biraču kartica Home Assistant-a. I pravila i izračunati predlozi se proveravaju dok pišete, greška tu sprečava čuvanje, a pregled prikazuje predložene kartice za bilo koji entitet koji izaberete

#### Tab Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Ovaj tab prikazuje [sve dostupne module iz zajednice](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), i omogućava vam da:

- **Pregledate** sve module koje je napravila zajednica
- **Pretražite** i filtrirate module po imenu, kompatibilnosti ili ključnim rečima
- **Instalirate** module jednim klikom
- **Ažurirate** instalirane module kada su dostupne nove verzije

> [!TIP]
> U editoru možete omogućiti nepodržane module da testirate module koji još nisu označeni kao kompatibilni sa datim tipom kartice.

<br>

### Kako koristiti module

#### Kreiranje novog modula

<details>

<summary>Kliknite da proširite</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Idite u editor bilo koje kartice i proširite sekciju **Modules**.
2. Kliknite na **Create new module**.
3. Popunite informacije o modulu.
4. Napišite svoj CSS i/ili JavaScript kod šablona u editoru **Code**.
5. (Opciono) Napravite prilagođeni korisnički interfejs za konfiguraciju u sekciji **Editor** (poput birača boja na slici iznad, potpuna dokumentacija dostupna je [ovde](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Opciono) Napišite svoje **Predloge za entitete** da bi vaš modul bio ponuđen u biraču kartica Home Assistant-a. Panel proverava ono što pišete dok kucate, a njegov pregled prikazuje same predložene kartice za entitet po vašem izboru.
7. Kliknite **Save**.

Vaš modul je sada dostupan za korišćenje na bilo kojoj od vaših kartica!

<br>

</details>

#### Primena modula na karticu

<details>

<summary>Kliknite da proširite</summary>

<br>

- **Putem editora:**

  - Idite u editor kartice na koju želite da primenite modul.
  - Proširite sekciju **Modules**.
  - Kliknite na modul koji želite da primenite sa liste.
  - Pod "Apply to", kliknite na "This card". Modul je sada aktivan. Možete primeniti više modula na istu karticu.

- **Putem YAML-a:**

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

#### Globalna primena modula

<details>

<summary>Kliknite da proširite</summary>

<br>

Modul možete podesiti da se automatski primenjuje na sve Bubble Card kartice:

**Ovo nije dostupno za module sa editorom, jer oni zahtevaju specifičnu konfiguraciju da bi radili.**

- **Putem editora:**

  - U Module Editor-u, pronađite svoj modul u tabu **My Modules**.
  - Uključite dugme **All cards** pored imena modula.
  - Modul će sada biti automatski primenjen na sve kartice.
 
- **Putem YAML-a:**

  U vašoj YAML konfiguraciji modula (u `bubble-modules.yaml`), samo dodajte `is_global: true`.

<br>

</details>

#### Isključivanje pojedinačne kartice iz globalnog modula

<details>

<summary>Kliknite da proširite</summary>

<br>

Ako imate globalni modul ali želite da ga isključite iz određene kartice:

- **Putem editora:**
  
  - U sekciji **Modules** kartice, videćete izlistane globalne module.
  - Kliknite na globalni modul, isključite "This card" da ga isključite iz ove određene kartice.

- **Putem YAML-a:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Deljenje vašeg modula u Module Store

<details>

<summary>Kliknite da proširite</summary>

<br>

Da biste podelili svoj modul u Module Store, u Module Editor-u, pri dnu u "Export Module", kliknite na "Copy for GitHub" i nalepite sadržaj u novu diskusiju u kategoriji [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Izmenite opis** (ako je potrebno), **primer** (za YAML korisnike), i ne zaboravite da **uključite bar jedan snimak ekrana** za Module Store.

**Vaš modul postaje dostupan odmah nakon toga** (nakon osvežavanja prodavnice), pa dvaput proverite da li je sve ispravno napisano i da li modul radi kako se očekuje. Naravno, modul možete izmeniti/ažurirati i nakon što je podeljen.

<br>

</details>

#### Upravljanje verzijama

<details>

<summary>Kliknite da proširite</summary>

<br>

Module Store automatski proverava ažuriranja instaliranih modula. Kada su ažuriranja dostupna:

1. Videćete indikator ažuriranja u tabu **Module Store**.
2. Kliknite **Update** kod modula sa dostupnim ažuriranjima.
3. Potvrdite ažuriranje u Module Store-u.

<br>

</details>

#### Definisanje podržanih tipova kartica

<details>

<summary>Kliknite da proširite</summary>

<br>

Neki moduli možda nisu kompatibilni sa svim tipovima kartica. Možete odrediti koje kartice modul podržava.  
Ako želite da modul bude kompatibilan sa **svim karticama**, jednostavno izostavite polje `supported` (ili koristite opciju **All cards** u editoru).

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
<summary>Modul sa prilagođenom konfiguracijom</summary>

<br>

Ovaj modul je dostupan [ovde](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Više primera možete naći u Module Store, ili [ovde](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizacija

Bubble Card govori vašim jezikom. Njegov editor je preveden na 64 jezika koje Home Assistant podržava, a svuda gde Home Assistant već ima reč za nešto, koristi se njegova formulacija, tako da u oba interfejsa čitate iste termine.

Na dnu editora, pored broja verzije, prekidač **Automatski** prati jezik vašeg Home Assistant-a. Isključite ga i ceo editor se vraća na engleski, što je zgodno kada pratite uputstvo ili prijavljujete problem. Vaš izbor se pamti u vašem pregledaču.

I ova dokumentacija je prevedena, [na 62 jezika](languages.md), na sve osim na britanski engleski, koji koristi original. Te stranice su otvorene za svakoga, pa se formulacija koja ne odgovara vašem Home Assistant-u može ispraviti u nekoliko klikova. Engleska verzija ostaje referenca za sam sadržaj.

<br>

---

<br>

## Pomoć

Slobodno otvorite issue ako nešto ne funkcioniše kako se očekuje. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Imate pitanja ili razmišljanja o Bubble Card-u? Želite da podelite svoje dashboard-e ili otkrića? Možete otići na Home Assistant forum, na Bubble Card subreddit ili na sekciju GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Doprinos

Doprinosi su dobrodošli! Bilo da je reč o ispravkama grešaka, novim funkcijama, prevodima ili poboljšanjima dokumentacije, slobodno otvorite pull request.

Pre nego što počnete, pročitajte [vodič za programere](DEVELOPERS.md) koji objašnjava kako da podesite svoje lokalno okruženje, izgradite projekat i testirate svoje izmene.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donirajte

Posvećujem najveći deo svog slobodnog vremena da ovaj projekat učinim najboljim što može biti. Zato, ako cenite moj rad, svaka donacija bi bila odličan način da pokažete svoju podršku 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Hvala vam svima na podršci, vi ste moja najveća motivacija!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
