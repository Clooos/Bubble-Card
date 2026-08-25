<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ova stranica je automatski prijevod. U slučaju dvojbe, mjerodavna je [izvorna dokumentacija na engleskom](../README.md). Neka vam rečenica zvuči pogrešno? Svaka pomoć je dobrodošla, a [ispravak ove stranice](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.hr.md) traje samo minutu: GitHub se pobrine za fork i pull request. Hvala unaprijed! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Pročitajte ovo na drugom jeziku](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card je minimalistička i prilagodljiva kolekcija kartica za Home Assistant, s modernim skočnim prozorima i integriranim Module Storeom s više od 100 modula koje je izradila zajednica.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Sadržaj

**[`Instalacija`](#instalacija)**  **[`Konfiguracija`](#konfiguracija)**  **[`Prijedlozi entiteta`](#prijedlozi-entiteta)**  **[`Skočni prozor`](#skočni-prozor)**  **[`Horizontalni niz gumba`](#horizontalni-niz-gumba)**  **[`Gumb`](#gumb)**  **[`Medijski reproduktor`](#medijski-reproduktor)**  **[`Rolete`](#rolete)**  **[`Odabir`](#odabir)**  **[`Klima`](#klima)**  **[`Kalendar`](#kalendar)**  **[`Razdjelnik`](#razdjelnik)**  **[`Prazan stupac`](#prazan-stupac)**  **[`Samo podgumbi`](#samo-podgumbi)**  **[`Podgumbi`](#podgumbi)**  **[`Rasporedi kartice`](#rasporedi-kartice)**  **[`Uvjeti`](#uvjeti)**  **[`Radnje`](#radnje-dodira-dvostrukog-dodira-i-držanja)**  **[`Stiliziranje`](#stiliziranje)**  **[`Predlošci`](#predlošci)**  **[`Moduli`](#moduli)**  **[`Lokalizacija`](#lokalizacija)**  **[`Pomoć`](#pomoć)**  **[`Doprinos`](#doprinos)**  **[`Donirajte`](#donirajte)**

<br>

## Instalacija

**Najniža podržana verzija Home Assistanta:** 2023.9.0

<details>

<summary>Bez HACS-a</summary>

<br>

1. Preuzmite ovu datoteku: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Dodajte ovu datoteku u svoju mapu `<config>/www`. Da biste dobili uređivač na svom jeziku, preuzmite i `bubble-card-<lang>.json` iz [mape dist](https://github.com/Clooos/Bubble-Card/tree/main/dist), na primjer `bubble-card-fr.json`, i stavite ga pokraj `bubble-card.js` (bez nje uređivač ostaje na engleskom)
3. Na svojoj nadzornoj ploči kliknite ikonu u gornjem desnom kutu, a zatim na `Uredi nadzornu ploču`
4. Ponovno kliknite tu ikonu, a zatim kliknite na `Upravljanje resursima`
5. Kliknite na `Dodaj resurs`
6. Kopirajte i zalijepite ovo: `/local/bubble-card.js?v=1`
7. Kliknite na `JavaScript modul`, a zatim na `Stvori`
8. Vratite se i osvježite stranicu
9. Sada možete kliknuti na `Dodaj karticu` u donjem desnom kutu i pretražiti `Bubble Card`
10. Nakon svake nadogradnje datoteke morat ćete urediti `/local/bubble-card.js?v=1` i promijeniti verziju na bilo koji veći broj

Ako ne radi, pokušajte samo očistiti predmemoriju preglednika.

</details>

<details>

<summary>S HACS-om (preporučeno)</summary>

<br>

Ova metoda vam omogućuje da dobivate nadogradnje izravno putem Home Assistant Community Storea

1. Ako HACS još nije instaliran, preuzmite ga prema uputama na [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Nastavite s početnom konfiguracijom HACS-a prema uputama na [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. U bočnoj traci idite na "HACS"
4. Pretražite "Bubble Card" ili kliknite na plavi gumb ispod
5. Kliknite na "Preuzmi"
6. Vratite se na svoju nadzornu ploču i kliknite ikonu u gornjem desnom kutu, a zatim na `Uredi nadzornu ploču`
7. Sada možete kliknuti na `Dodaj karticu` u donjem desnom kutu i pretražiti `Bubble Card`

Ako ne radi, pokušajte očistiti predmemoriju preglednika/aplikacije (na svim svojim uređajima ako je potrebno).

#### Videozapisi

Također možete pogledati moj YouTube kanal za videozapise korak po korak.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguracija

Sve opcije mogu se konfigurirati u Home Assistant uređivaču. No detalje i YAML možete pronaći u dokumentaciji ispod.

<details>

<summary><b>Glavne opcije (YAML + opis)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `type` | string | **Obavezno** | `custom:bubble-card` | Tip kartice |
| `card_type` | string | **Obavezno** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ili `sub-buttons` | Tip Bubble Card kartice, vidi ispod |
| `styles` | object list | Neobavezno | Bilo koji CSS stilovi | Omogućuje vam prilagodbu CSS-a vaše Bubble Card kartice, vidi [stiliziranje](#stiliziranje) |

</details>

<details>

<summary><b>Globalne CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radijus obruba za sve podržane elemente |
| `--bubble-main-background-color` | `color` | Glavna boja pozadine za sve podržane elemente |
| `--bubble-secondary-background-color` | `color` | Sekundarna boja pozadine za sve podržane elemente |
| `--bubble-accent-color` | `color` | Boja isticanja za sve podržane elemente |
| `--bubble-icon-border-radius` | `px` | Radijus obruba ikone za sve podržane elemente |
| `--bubble-icon-background-color` | `color` | Boja pozadine ikone za sve podržane elemente |
| `--bubble-sub-button-border-radius` | `px` | Radijus obruba za sve podgumbe |
| `--bubble-sub-button-background-color` | `color` | Boja pozadine za sve podgumbe |
| `--bubble-box-shadow` | vidi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za sve podržane elemente |
| `--bubble-border` | vidi [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Obrub za sve podržane kartice |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Pogledajte ovaj [videozapis](https://www.youtube.com/watch?v=0hSQOlBxKKI) kako biste saznali više o Bubble Card kartici i njezinim mogućnostima.** Moj YouTube kanal je prilično nov i usmjeren je na vodiče o Home Assistantu i Bubble Card kartici. Ne oklijevajte se pretplatiti kako biste pomogli povećati vidljivost mog kanala. Hvala vam unaprijed!

<br>

---

<br>

## Prijedlozi entiteta

Od Home Assistanta 2026.6, odabir entiteta u biraču kartica nudi vam nekoliko gotovih kartica, a Bubble Card tom popisu dodaje vlastite recepte. Odaberite svjetlo i ponudit će vam se kartica s klizačem svjetline, uz varijantu temperature boje, varijantu boje i varijantu zasićenja kada ih vaše svjetlo podržava. Odaberite roletu i dobit ćete njezin klizač položaja, odaberite medijski reproduktor i dobit ćete i varijantu s popisom izvora, odaberite usisavač i dobit ćete njegove gumbe za pokretanje, pauzu i povratak na bazu. Svaki je prijedlog obična Bubble Card konfiguracija prikazana kao pretpregled uživo, pa možete uzeti onaj najbliži i nastaviti ga uređivati kao i obično.

Ono što vam se nudi ovisi o tome što vaš entitet doista može: svjetlo bez kanala svjetline dobiva prekidač umjesto klizača, roleta koja se ne može nagnuti nema varijantu nagiba, a klima entitet dobiva svoje unaprijed postavljene načine rada samo kada ih ima. Klasične stavke slijede ispod Bubble Card prijedloga kada su primjenjive: kartica namijenjena toj vrsti entiteta, obični gumb i klizač.

> [!TIP]
> Moduli mogu dodati vlastite prijedloge na taj popis, pogledajte [module](#moduli).

<br>

---

<br>

## Skočni prozor

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ova kartica vam omogućuje stvaranje skočnog prozora s bilo kojim sadržajem. Svaki skočni prozor je **prema zadanim postavkama skriven** i može se otvoriti ciljanjem njegove poveznice (npr. `'#pop-up-name'`), bilo kojom karticom koja podržava radnju `navigate` [radnja](#radnje-dodira-dvostrukog-dodira-i-držanja), ili pomoću uključenog [horizontalnog niza gumba](#horizontalni-niz-gumba).

> [!TIP]
> ### Okidač skočnog prozora 
> Ova značajka vam omogućuje otvaranje skočnog prozora na temelju stanja bilo kojeg entiteta, primjerice, možete otvoriti skočni prozor "Sigurnost" s kamerom kada je osoba ispred vaše kuće. Također možete stvoriti pomoćnika za preklapanje (input_boolean) i pokrenuti njegovo otvaranje/zatvaranje u automatizaciji.
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
> Postoji mnogo načina za zatvaranje skočnog prozora. Primjerice, možete povući od zaglavlja skočnog prozora prema dolje, dugim povlačenjem unutar skočnog prozora prema dolje, pritiskom na Escape na računalu, uklanjanjem hasha u URL-u ili jednostavno pritiskom na gumb za zatvaranje.
>


### Opcije skočnog prozora

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obavezno** | Bilo koji jedinstveni hash (npr. `'#kitchen'`) s ' ' | Ovako ćete otvoriti svoj skočni prozor |
| `popup_style` | string | Neobavezno | `bubble` (zadano) ili `classic` | Definira vizualni stil skočnog prozora |
| `popup_mode` | string | Neobavezno | `default` (zadano), `fit-content`, `centered` ili `adaptive-dialog` | Definira raspored skočnog prozora |
| `with_bottom_offset` | boolean | Neobavezno | `true` ili `false` (zadano) | Koristi se samo uz `popup_mode: fit-content` ili `adaptive-dialog`. Primjenjuje donji odmak na mobilnim uređajima, korisno kada vaša nadzorna ploča uključuje karticu podnožja. |
| `full_width_on_mobile` | boolean | Neobavezno | `true` ili `false` (zadano) | Koristi se samo uz `popup_mode: centered`. Proširuje skočni prozor na punu širinu zaslona na mobilnim uređajima, korisno na manjim zaslonima. |
| `performance_mode` | string | Neobavezno | `default` (zadano) ili `performance` | Optimizira animaciju otvaranja skočnog prozora. `performance` neznatno odgađa prikazivanje sadržaja i zamućenje pozadine, a također onemogućuje zamućenje pozadinskog zastora ako je postavljeno. |
| `auto_close` | string | Neobavezno | Vremensko ograničenje u milisekundama (npr. `10000` za 10 s) | Automatski zatvara skočni prozor nakon isteka vremena |
| `close_on_click` | boolean | Neobavezno | `true` ili `false` (zadano) | Automatski zatvara skočni prozor nakon bilo koje interakcije |
| `close_by_clicking_outside` | boolean | Neobavezno | `true` (zadano) ili `false` | Zatvara skočni prozor klikom izvan njega |
| `width_desktop` | string | Neobavezno | Bilo koja CSS vrijednost | Širina na računalu (`100%` prema zadanim postavkama na mobilnim uređajima) |
| `margin` | string | Neobavezno | Bilo koja CSS vrijednost | Koristite ovo **samo** ako vaš skočni prozor nije dobro centriran na mobilnim uređajima (npr. `13px`) |
| `margin_top_mobile` | string | Neobavezno | Bilo koja CSS vrijednost | Gornja margina na mobilnim uređajima (npr. `-56px` ako je vaše zaglavlje skriveno) |
| `margin_top_desktop` | string | Neobavezno | Bilo koja CSS vrijednost | Gornja margina na računalu (npr. `50vh` za skočni prozor upola manje veličine ili `calc(100vh - 400px)` za fiksnu visinu od `400px`) |
| `bg_color` | string | Neobavezno | Bilo koja hex, rgb ili rgba vrijednost | Boja pozadine vašeg skočnog prozora (npr. `#ffffff` za bijelu pozadinu) |
| `bg_opacity` | string | Neobavezno | Bilo koja vrijednost od `0` do `100` | Neprozirnost pozadine vašeg skočnog prozora (npr. `100` za potpunu neprozirnost) |
| `bg_blur` | string | Neobavezno | Bilo koja vrijednost od `0` do `100` | Efekt zamućenja pozadine vašeg skočnog prozora, **ovo radi samo ako `bg_opacity` nije postavljen na `100`** (npr. `0` za bez zamućenja)|
| `shadow_opacity` | string | Neobavezno | Bilo koja vrijednost od `0` do `100` | Neprozirnost sjene vašeg skočnog prozora (npr. `0` za skrivanje) |
| `hide_backdrop` | boolean | Neobavezno | `true` ili `false` (zadano) | Postavite ovo na true na prvom skočnom prozoru glavne nadzorne ploče kako biste onemogućili pozadinski zastor na svim skočnim prozorima. |
| `background_update` | boolean | Neobavezno | `true` ili `false` (zadano) | Ažurira sadržaj skočnog prozora u pozadini (nije preporučeno) |
| `trigger` | object ili list | Neobavezno | Pogledajte [uvjete](#uvjeti) | Otvara ovaj skočni prozor kada su uvjeti ispunjeni |
| `trigger_entity` | string | Neobavezno | Bilo koji entitet | Otvara ovaj skočni prozor na temelju stanja bilo kojeg entiteta, jednostavni oblik postavke `trigger` |
| `trigger_state` | string | Neobavezno (**Obavezno** ako je definiran `trigger_entity`) | Bilo koje stanje entiteta | Stanje entiteta za otvaranje skočnog prozora |
| `trigger_close` | boolean | Neobavezno | `true` (zadano) ili `false` | Zatvara skočni prozor kada uvjeti više nisu ispunjeni. Zadano je `false` ako umjesto toga koristite stariji par `trigger_entity` i `trigger_state` |
| `open_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Pokreće radnju pri otvaranju skočnog prozora |
| `close_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Pokreće radnju pri zatvaranju skočnog prozora |
| `show_header` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikazuje/skriva zaglavlje skočnog prozora u potpunosti |
| `show_previous_button` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikazuje gumb za povratak pored gumba za zatvaranje i vraća na prethodni skočni prozor kada je dostupan |
| `show_close_button` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikazuje ili skriva gumb za zatvaranje uz zadržavanje ostatka zaglavlja vidljivim |
| `buttons_position` | string | Neobavezno | `right` (zadano) ili `left` | Položaj gumba za zatvaranje i povratak u zaglavlju |
| `cards` | list | Neobavezno | Bilo koja Bubble Card kartica, Home Assistant kartica ili prilagođena kartica | Definira sadržaj vašeg skočnog prozora. Vidi primjer skočnog prozora ispod. |
| Također imate pristup [svim postavkama gumba](#gumb) za zaglavlje skočnog prozora. | | Neobavezno | | Ako nije definirano, zaglavlje se neće prikazati |

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radijus obruba za skočni prozor |
| `--bubble-pop-up-main-background-color` | `color` | Glavna boja pozadine za podržane elemente skočnog prozora |
| `--bubble-pop-up-background-color` | `color` | Boja pozadine skočnog prozora |
| `--bubble-backdrop-background-color` | `color` | Boja pozadine za pozadinski zastor |
| Također imate pristup [svim CSS varijablama gumba](#opcije-gumba) za zaglavlje skočnog prozora. | | |

</details>


### Samostalni format skočnog prozora (v3.2.0+)

Od verzije v3.2.0, skočni prozori koriste novi samostalni format u kojem se kartice sadržaja definiraju izravno unutar skočnog prozora pomoću opcije `cards`. Ovo pruža bolje performanse i novi iskustvo uređivanja povlačenjem i ispuštanjem temeljeno na sekcijama.


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

<summary>Gumb za otvaranje skočnog prozora</summary>

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

## Horizontalni niz gumba

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ova kartica je dobar pratitelj kartice skočnog prozora, omogućujući vam otvaranje odgovarajućih skočnih prozora. Također vam omogućuje otvaranje bilo koje stranice vaše nadzorne ploče. Uz to, možete dodati svoje senzore pokreta/prisutnosti kako bi se redoslijed gumba prilagođavao prema prostoriji u koju ste upravo ušli. Ova kartica se može pomicati, ostaje vidljiva i djeluje kao podnožje.

> [!IMPORTANT]  
> Ova kartica mora biti posljednja u vašem prikazu (nakon svake kartice i skočnog prozora). Ne može biti unutar bilo kojeg stoga.

### Opcije horizontalnog niza gumba

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obavezno** | Hash skočnog prozora (npr. `'#kitchen'`) s ' ' ili bilo koja poveznica | Poveznica za otvaranje |
| `1_name` | string | Neobavezno | Bilo koji tekst | Naziv za vaš gumb |
| `1_icon` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za vaš gumb |
| `1_entity` | string | Neobavezno | Bilo koje svjetlo ili grupa svjetla | Prikazuje boju tog svjetla u pozadini |
| `1_pir_sensor` | string | Neobavezno | Bilo koji binarni senzor | Barem jedan pir senzor ili više za `auto_order`, zapravo također radi s bilo kojim tipom entiteta, primjerice možete dodati grupe svjetla i redoslijed će se mijenjati na temelju vremena zadnje promjene stanja. |
| `auto_order` | boolean | Neobavezno | `true` ili `false` (zadano) | Mijenja redoslijed gumba prema vremenu zadnje promjene `_pir_sensor`, **mora biti `false` ako u svom kodu nemate niti jedan `_pir_sensor`** |
| `margin` | string | Neobavezno | Bilo koja CSS vrijednost | Koristite ovo **samo** ako vaš `horizontal-buttons-stack` nije dobro centriran na mobilnim uređajima (npr. `13px`) |
| `width_desktop` | string | Neobavezno | Bilo koja CSS vrijednost | Širina na računalu (`100%` prema zadanim postavkama na mobilnim uređajima) |
| `is_sidebar_hidden` | boolean | Neobavezno | `true` ili `false` (zadano) | Ispravlja položaj horizontalnog niza gumba ako je bočna traka skrivena na računalu (samo ako ste sami napravili izmjenu za njezino skrivanje) |
| `rise_animation` | boolean | Neobavezno | `true` (zadano) ili `false` | Postavite ovo na `false` kako biste onemogućili animaciju koja se aktivira nakon učitavanja stranice |
| `highlight_current_view` | boolean | Neobavezno | `true` ili `false` (zadano) | Ističe trenutni hash / prikaz glatkom animacijom |
| `hide_gradient` | boolean | Neobavezno | `true` ili `false` (zadano) | Postavite ovo na `false` kako biste sakrili gradijent |

> [!IMPORTANT]  
> Varijable koje počinju brojem definiraju vaše gumbe, samo promijenite taj broj kako biste dodali više gumba (vidi primjer ispod).

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Radijus obruba za gumbe horizontalnog niza gumba |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Boja pozadine za gumbe horizontalnog niza gumba |

</details>


#### Primjer

<details>

<summary>Horizontalni niz gumba koji se sam reorganizira na temelju senzora prisutnosti</summary>

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

Ova kartica je vrlo svestrana. Može se koristiti kao **prekidač**, **klizač**, gumb za **stanje** ili gumb za **naziv/tekst**.

> [!TIP]
> ### Koje su razlike između svih vrsta gumba?
>
> - **Gumb prekidača:** Ovo je zadana vrsta gumba. Prema zadanim postavkama prebacuje entitet, a njegova boja pozadine mijenja se ovisno o stanju entiteta ili boji svjetla. Njegovu radnju možete promijeniti u odjeljku **Radnja dodira na kartici**.
>
> - **Gumb klizača:** Ova vrsta gumba omogućuje upravljanje entitetima s podesivim rasponima. Idealna je za prigušivanje svjetla, a boja ispune prilagođava se boji svjetla. Također ga možete koristiti za prikaz vrijednosti, poput razine baterije.
>   Podržani entiteti za klizače:
>   - Svjetlo (svjetlina)
>   - Medijski reproduktor (glasnoća)
>   - Rolete (položaj)
>   - Ventilator (postotak)
>   - Klima (temperatura)
>   - Ulazni broj i broj (vrijednost)
>   - Senzor baterije (postotak, samo za čitanje)
>
>   Također možete koristiti bilo koji entitet s brojčanim stanjem tako da onemogućite filtar entiteta u **Postavkama klizača**, a zatim definirate vrijednosti `min` i `max`. Ta je opcija samo za čitanje.
>
> - **Gumb stanja:** Savršen za prikaz informacija sa senzora ili bilo kojeg entiteta. Kad ga pritisnete, prikazat će se ploča "Više informacija" tog entiteta. Njegova boja pozadine se ne mijenja.
>
> - **Gumb naziva/teksta:** Jedina vrsta gumba kojoj nije potreban entitet. Omogućuje prikaz kratkog teksta, naziva ili naslova. Možete mu dodati i radnje. Njegova boja pozadine se ne mijenja.

### Opcije gumba

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koji entitet | Entitet za upravljanje |
| `button_type` | string | Neobavezno | `switch` (zadano), `slider`, `state` ili `name` | Ponašanje vašeg gumba |
| `name` | string | Neobavezno | Bilo koji niz | Naziv za vaš gumb, ako nije definiran prikazat će se naziv entiteta |
| `icon` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za vaš gumb, ako nije definirana prikazat će se ikona entiteta ili `entity-picture` |
| `force_icon` | boolean | Neobavezno | `true` ili `false` (zadano) | Daje prioritet ikoni umjesto `entity-picture` |
| `use_accent_color` | boolean | Neobavezno (`false` zadano) | **Samo za svjetla.** Koristi naglašenu boju teme umjesto boje svjetla.                         |
| `show_state` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnje promjene vašeg `entity` |
| `show_last_updated` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Neobavezno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut iz vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobavezno | `true` (zadano) ili `false` | Dopusti pomicanje teksta kad sadržaj prelazi veličinu svog spremnika |
| `button_action` | object | Neobavezno | `tap_action`, `double_tap_action` ili `hold_action`, vidi niže | Omogućuje promjenu zadanih radnji pri kliku na gumb. |
| `tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri kliku na ikonu, ako nije definirano koristit će se `more-info` |
| `double_tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri dvostrukom kliku na ikonu, ako nije definirano koristit će se `none` |
| `hold_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri držanju ikone, ako nije definirano koristit će se `more-info` |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljka), `large` (zadano ako je u prikazu odjeljka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stiliziranja kartice, vidi [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |
| `sub_button` | object | Neobavezno | Vidi [podgumbe](#podgumbi) | Dodaje prilagođene gumbe fiksirane s desne strane |

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u gumbu |
| `--bubble-button-border-radius` | `px` | Radijus zaobljenosti ruba za gumb |
| `--bubble-button-icon-border-radius` | `px` | Radijus zaobljenosti ruba za spremnik ikone gumba |
| `--bubble-button-icon-background-color` | `color` | Boja pozadine za spremnik ikone gumba |
| `--bubble-light-white-color` | `color` | Zamjenjuje zadanu bijelu boju gumba/klizača svjetla |
| `--bubble-light-color` | `color` | Zamjenjuje boju gumba/klizača svjetla (čak i RGB svjetla) |
| `--bubble-button-box-shadow` | Vidi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za gumb |

</details>

Ove su opcije dostupne samo kad je `button_type` postavljen na `slider`.

<details>

<summary><b>Opcije klizača (YAML + opisi)</b></summary>

| Naziv                  | Tip    | Zahtjev                     | Opis                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Neobavezno                        | Minimalna vrijednost klizača. Za prilagođene klizače.                                                    |
| `max_value`             | number  | Neobavezno                        | Maksimalna vrijednost klizača. Za prilagođene klizače.                                                    |
| `step`                  | number  | Neobavezno                        | Vrijednost koraka klizača.                                                                           |
| `tap_to_slide`          | boolean | Neobavezno (`false` zadano)      | Omogućuje prijašnje ponašanje klizača, gdje ga dodirom aktivirate umjesto da ga držite.        |
| `relative_slide`        | boolean | Neobavezno (`false` zadano )     | Ažurira vrijednost relativno u odnosu na početnu vrijednost, umjesto na početnu točku dodira.                      |
| `read_only_slider`      | boolean | Neobavezno (`false` zadano)      | Postavlja klizač samo za čitanje. Automatski omogućeno za neke entitete poput senzora.                        |
| `slider_live_update`    | boolean | Neobavezno (`false` zadano)      | Stanje entiteta se ažurira tijekom klizanja. **Ova značajka se ne preporučuje za sve entitete.**        |
| `slider_fill_orientation` | string | Neobavezno | `left`, `right`, `top` ili `bottom` | Mijenja smjer ispune klizača. S lijeva na desno kada nije definirano, zrcalno u [jezicima koji se pišu zdesna nalijevo](#lokalizacija) |
| `slider_value_position` | string | Neobavezno | `right`, `left`, `center` ili `hidden` | Položaj prikaza vrijednosti. Desno kada nije definirano, a lijevo u [jezicima koji se pišu zdesna nalijevo](#lokalizacija) |
| `invert_slider_value` | boolean | Neobavezno (`false` zadano) | Obrće smjer klizača (100% ispune odgovara minimumu). Nije dostupno za klizače boje. |
| `light_slider_type` | string | Neobavezno | `brightness` (zadano), `hue`, `saturation`, `white_temp` | **Samo za svjetla.** Odaberite način rada klizača |
| `cover_slider_type` | string | Neobavezno | `position` (zadano), `tilt_position` | **Samo za rolete.** Odaberite način rada klizača (položaj ili nagib) |
| `hue_force_saturation` | boolean | Neobavezno (`false` zadano) | **Samo za svjetla (način rada Hue).** Prisili zasićenost prilikom podešavanja nijanse |
| `hue_force_saturation_value` | number | Neobavezno (`100` zadano) | **Samo za svjetla (način rada Hue).** Prisilna vrijednost zasićenosti (0-100) |
| `use_accent_color` | boolean | Neobavezno (`false` zadano) | **Samo za svjetla (način rada Brightness).** Koristi naglašenu boju teme umjesto boje svjetla |
| `allow_light_slider_to_0` | boolean | Neobavezno (`false` zadano)    | **Samo za svjetla.** Dopušta klizaču da dosegne 0%, čime se svjetlo gasi. Nije dostupno uz `tap_to_slide`. |
| `light_transition`      | boolean | Neobavezno (`false` zadano)      | **Samo za svjetla.** Omogućuje glatke prijelaze svjetline za podržana svjetla.                           |
| `light_transition_time` | number  | Neobavezno (`500` zadano)        | **Samo za svjetla.** Trajanje prijelaza u milisekundama. Zahtijeva `light_transition: true`.            |

</details>

#### Primjeri

<details>

<summary>Gumb klizača koji može upravljati svjetlinom svjetla</summary>

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

<summary>Gumb s više opcija</summary>

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

## Medijski reproduktor

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ova kartica vam omogućuje upravljanje entitetom medijskog reproduktora.

### Opcije medijskog reproduktora

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koji medijski reproduktor | Medijski reproduktor za upravljanje |
| `name` | string | Neobavezno | Bilo koji niz | Naziv za vaš medijski reproduktor, ako nije definiran prikazat će se naziv entiteta |
| `icon` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za vaš medijski reproduktor, ako nije definirana prikazat će se ikona entiteta ili `entity-picture` |
| `force_icon` | boolean | Neobavezno | `true` ili `false` (zadano) | Daje prioritet ikoni umjesto `entity-picture` |
| `show_state` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnje promjene vašeg `entity` |
| `show_last_updated` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Neobavezno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut iz vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobavezno | `true` (zadano) ili `false` | Dopusti pomicanje teksta kad sadržaj prelazi veličinu svog spremnika |
| `min_volume` | number | Neobavezno | Bilo koji broj | Minimalna vrijednost klizača glasnoće. |
| `max_volume` | number | Neobavezno | Bilo koji broj | Maksimalna vrijednost klizača glasnoće. |
| `cover_background` | boolean | Neobavezno | `true` ili `false` (zadano) | Koristi zamućeni omot medija kao pozadinu kartice. |
| `button_action` | object | Neobavezno | `tap_action`, `double_tap_action` ili `hold_action`, vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Omogućuje promjenu zadanih radnji pri kliku na gumb. |
| `tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri kliku na ikonu, ako nije definirano koristit će se `more-info`. |
| `double_tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri dvostrukom kliku na ikonu, ako nije definirano koristit će se `none`. |
| `hold_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri držanju ikone, ako nije definirano koristit će se `more-info`. |
| `main_buttons_position` | string | Neobavezno | `default` ili `bottom` | Premješta gumbe radnji omota na dno (fiksno) |
| `main_buttons_full_width` | boolean | Neobavezno | `true` ili `false` | Postavlja donje gumbe radnji na punu širinu (zadano: `true` kad je položaj `bottom`) |
| `main_buttons_alignment` | string | Neobavezno | `end` (zadano), `center`, `start`, `space-between` | Poravnanje donjih gumba radnji kad nisu pune širine |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljka), `large` (zadano ako je u prikazu odjeljka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stiliziranja kartice, vidi [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |
| `sub_button` | object | Neobavezno | Vidi [podgumbe](#podgumbi) | Dodaje prilagođene gumbe fiksirane s desne strane |
| `hide` | object | Neobavezno | Vidi niže | Sakrij gumbe s kartice |

#### Opcije skrivanja

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Neobavezno | `true` ili `false` (zadano) | Sakrij gumb za reprodukciju/pauzu |
| `volume_button` | boolean | Neobavezno | `true` ili `false` (zadano) | Sakrij gumb glasnoće |
| `previous_button` | boolean | Neobavezno | `true` ili `false` (zadano) | Sakrij gumb za prethodno |
| `next_button` | boolean | Neobavezno | `true` ili `false` (zadano) | Sakrij gumb za sljedeće |
| `power_button` | boolean | Neobavezno | `true` ili `false` (zadano) | Sakrij gumb za napajanje |

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Glavna boja pozadine za medijski reproduktor |
| `--bubble-media-player-border-radius` | `px` | Radijus zaobljenosti ruba za medijski reproduktor |
| `--bubble-media-player-buttons-border-radius` | `px` | Radijus zaobljenosti ruba za gumbe medijskog reproduktora |
| `--bubble-media-player-slider-background-color` | `color` | Boja pozadine za klizač glasnoće |
| `--bubble-media-player-icon-border-radius` | `px` | Radijus zaobljenosti ruba za spremnik ikone medijskog reproduktora |
| `--bubble-media-player-icon-background-color` | `color` | Boja pozadine za spremnik ikone medijskog reproduktora |
| `--bubble-media-player-box-shadow` | Vidi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za medijski reproduktor |

</details>


#### Primjeri

<details>

<summary>Medijski reproduktor sa svim opcijama</summary>

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

## Rolete

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ova kartica vam omogućuje upravljanje entitetima `cover`.

### Opcije roleta

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koje rolete | Rolete za upravljanje |
| `name` | string | Neobavezno | Bilo koji niz | Naziv za vaše rolete, ako nije definiran prikazat će se naziv entiteta |
| `force_icon` | boolean | Neobavezno | `true` ili `false` (zadano) | Daje prioritet ikoni umjesto `entity-picture` |
| `show_state` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnje promjene vašeg `entity` |
| `show_last_updated` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Neobavezno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut iz vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobavezno | `true` (zadano) ili `false` | Dopusti pomicanje teksta kad sadržaj prelazi veličinu svog spremnika |
| `icon_open` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za otvorene rolete, ako nije definirana prikazat će se zadana ikona otvorenih roleta |
| `icon_close` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za zatvorene rolete, ako nije definirana prikazat će se zadana ikona zatvorenih roleta |
| `icon_up` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za gumb otvaranja roleta, ako nije definirana prikazat će se zadana ikona otvorenih roleta |
| `icon_down` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za gumb zatvaranja roleta, ako nije definirana prikazat će se zadana ikona zatvorenih roleta |
| `open_service` | string | Neobavezno | Bilo koja usluga ili skripta | Usluga za otvaranje roleta, zadano `cover.open_cover` |
| `stop_service` | string | Neobavezno | Bilo koja usluga ili skripta | Usluga za zaustavljanje roleta, zadano `cover.stop_cover` |
| `close_service` | string | Neobavezno | Bilo koja usluga ili skripta | Usluga za zatvaranje roleta, zadano `cover.close_cover` |
| `tilt_buttons` | string | Neobavezno | `top` (zadano), `bottom`, `left`, `right`, `hidden` | Položaj gumba za upravljanje nagibom (prikazuje se samo ako rolete podržavaju nagib) |
| `open_tilt_service` | string | Neobavezno | Bilo koja usluga ili skripta | Usluga za otvaranje nagiba, zadano `cover.open_cover_tilt` |

| `close_tilt_service` | string | Neobavezno | Bilo koja usluga ili skripta | Usluga za zatvaranje nagiba, zadano `cover.close_cover_tilt` |
| `button_action` | object | Neobavezno | `tap_action`, `double_tap_action` ili `hold_action`, vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Omogućuje promjenu zadanih radnji pri kliku na gumb. |
| `tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri kliku na ikonu, ako nije definirano koristit će se `more-info`. |
| `double_tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri dvostrukom kliku na ikonu, ako nije definirano koristit će se `none`. |
| `hold_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri držanju ikone, ako nije definirano koristit će se `more-info`. |
| `main_buttons_position` | string | Neobavezno | `default` ili `bottom` | Premješta upravljačke gumbe na dno (fiksno) |
| `main_buttons_full_width` | boolean | Neobavezno | `true` ili `false` | Postavlja donje upravljačke gumbe na punu širinu (zadano: `true` kad je položaj `bottom`) |
| `main_buttons_alignment` | string | Neobavezno | `end` (zadano), `center`, `start`, `space-between` | Poravnanje donjih upravljačkih gumba kad nisu pune širine |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljka), `large` (zadano ako je u prikazu odjeljka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stiliziranja kartice, vidi [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |
| `sub_button` | object | Neobavezno | Vidi [podgumbe](#podgumbi) | Dodaje prilagođene gumbe fiksirane s desne strane |

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici roleta |
| `--bubble-cover-border-radius` | `px` | Radijus zaobljenosti ruba za karticu roleta |
| `--bubble-cover-icon-border-radius` | `px` | Radijus zaobljenosti ruba za spremnik ikone kartice roleta |
| `--bubble-cover-icon-background-color` | `color` | Boja pozadine za spremnik ikone kartice roleta |
| `--bubble-cover-box-shadow` | Vidi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za karticu roleta |
| `--bubble-button-box-shadow` | Vidi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za gumbe u kartici roleta |

</details>


#### Primjer

<details>

<summary>Kartica koja može upravljati roletama na kotur</summary>

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

Ova kartica vam omogućuje dodavanje padajućeg izbornika za vaše entitete `input_select` / `select`. Ova kartica također podržava podgumbe i sve uobičajene značajke Bubble Card.

> [!TIP]
> Ako želite, možete imati i podgumbe za odabir, ova je značajka dostupna u svim karticama koje podržavaju podgumbe.

### Opcije odabira

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obavezno** | Bilo koji entitet | Entitet za upravljanje |
| `name` | string | Neobavezno | Bilo koji niz | Naziv za vaš odabir, ako nije definiran prikazat će se naziv entiteta |
| `icon` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za vaš odabir, ako nije definirana prikazat će se ikona entiteta ili `entity-picture` |
| `force_icon` | boolean | Neobavezno | `true` ili `false` (zadano) | Daje prioritet ikoni umjesto `entity-picture` |
| `show_state` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnje promjene vašeg `entity` |
| `show_last_updated` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Neobavezno (obavezno ako je `show_attribute` postavljeno na `true`) | Atribut iz vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `scrolling_effect` | boolean | Neobavezno | `true` (zadano) ili `false` | Dopusti pomicanje teksta kad sadržaj prelazi veličinu svog spremnika |
| `tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri kliku na ikonu, ako nije definirano koristit će se `more-info`. |
| `double_tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri dvostrukom kliku na ikonu, ako nije definirano koristit će se `none`. |
| `hold_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri držanju ikone, ako nije definirano koristit će se `more-info`. |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljka), `large` (zadano ako je u prikazu odjeljka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stiliziranja kartice, vidi [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |
| `sub_button` | object | Neobavezno | Vidi [podgumbe](#podgumbi) | Dodaje prilagođene gumbe fiksirane s desne strane |

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici odabira |
| `--bubble-select-background-color` | `color` | Boja pozadine za karticu odabira |
| `--bubble-select-list-border-radius` | `px` | Radijus zaobljenosti ruba za padajući izbornik u kartici |
| `--bubble-select-list-item-accent-color` | `color` | Naglašena boja za odabranu stavku |
| `--bubble-select-list-background-color` | `color` | Boja pozadine za padajući izbornik u kartici |
| `--bubble-select-list-width` | `px` | Širina padajućeg izbornika u kartici |
| `--bubble-select-arrow-background-color` | `color` | Boja pozadine za strelicu padajućeg izbornika |
| `--bubble-select-button-border-radius` | `px` | Radijus zaobljenosti ruba za gumb odabira |
| `--bubble-select-border-radius` | `px` | Radijus zaobljenosti ruba za karticu odabira |
| `--bubble-select-icon-border-radius` | `px` | Radijus zaobljenosti ruba za spremnik ikone kartice odabira |
| `--bubble-select-icon-background-color` | `color` | Boja pozadine za spremnik ikone kartice odabira |
| `--bubble-select-box-shadow` | Vidi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za karticu odabira |

</details>


#### Primjeri

<details>

<summary>Kartica odabira s popisom scena</summary>

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

Ova kartica vam omogućuje upravljanje entitetima `climate`.

> [!TIP]
> Izbornik za odabir načina rada je [podgumb](#podgumbi) koji se automatski dodaje prilikom stvaranja kartice. Zatim ga možete izmijeniti ili ukloniti po želji.

### Opcije klime

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv                     | Tip    | Zahtjev                         | Podržane opcije                                  | Opis                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obavezno**                        | Entitet klime                                   | Entitet za upravljanje (npr. `climate.living_room`).                                                            |
| `name`                  | string  | Neobavezno                            | Bilo koji niz                                       | Prilagođeni naziv kartice. Ako nije definiran, prikazat će se naziv entiteta.                                    |
| `icon`                  | string  | Neobavezno                            | Bilo koja `mdi:` ikona                                  | Prilagođena ikona kartice. Ako nije definirana, koristit će se ikona entiteta ili `entity-picture`.                   |
| `force_icon`            | boolean | Neobavezno                            | `true` ili `false` (zadano)                     | Daje prioritet ikoni umjesto `entity-picture`.                                                           |
| `show_state`            | boolean | Neobavezno                            | `true` ili `false` (zadano)                     | Prikaži ili sakrij trenutačno stanje entiteta `entity`.                                                                 |
| `show_name`             | boolean | Neobavezno                            | `true` (zadano) ili `false`                     | Prikaži ili sakrij naziv entiteta.                                                                            |
| `show_icon`             | boolean | Neobavezno                            | `true` (zadano) ili `false`                     | Prikaži ili sakrij ikonu.                                                                                          |
| `hide_target_temp_low`  | boolean | Neobavezno (samo za entitete koji podržavaju `target_temp_low`) | `true` ili `false` (zadano) | Skriva kontrolu donje ciljne temperature ako je entitet `entity` podržava.                                          |
| `hide_target_temp_high` | boolean | Neobavezno (samo za entitete koji podržavaju `target_temp_high`)| `true` ili `false` (zadano) | Skriva kontrolu gornje ciljne temperature ako je entitet `entity` podržava.                                         |
| `state_color`           | boolean | Neobavezno                            | `true` ili `false` (zadano)                     | Primjenjuje stalnu boju pozadine kad je entitet klime UKLJUČEN.                                              |
| `step` | number | Neobavezno | Bilo koji broj | Korak temperature. |
| `min_temp` | number | Neobavezno | Bilo koji broj | Minimalna temperatura. |
| `max_temp` | number | Neobavezno | Bilo koji broj | Maksimalna temperatura. |
| `button_action` | object | Neobavezno | `tap_action`, `double_tap_action` ili `hold_action`, vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Omogućuje promjenu zadanih radnji pri kliku na gumb. |
| `tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri kliku na ikonu, ako nije definirano koristit će se `more-info`. |
| `double_tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri dvostrukom kliku na ikonu, ako nije definirano koristit će se `none`. |
| `hold_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri držanju ikone, ako nije definirano koristit će se `more-info`. |                              |
| `main_buttons_position` | string | Neobavezno | `default` ili `bottom` | Premješta gumbe radnji klime na dno (fiksno) |
| `main_buttons_full_width` | boolean | Neobavezno | `true` ili `false` | Postavlja donje gumbe radnji na punu širinu (zadano: `true` kad je položaj `bottom`) |
| `main_buttons_alignment` | string | Neobavezno | `end` (zadano), `center`, `start`, `space-between` | Poravnanje donjih gumba radnji kad nisu pune širine |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljka), `large` (zadano ako je u prikazu odjeljka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stiliziranja kartice, vidi [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |
| `sub_button`            | object  | Neobavezno                            | Vidi [podgumbe](#podgumbi)                | Dodaje prilagođene gumbe fiksirane s desne strane. Korisno za izbornik za odabir načina rada klime.                                  |

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Glavna boja pozadine za podržane elemente u kartici klime |
| `--bubble-climate-border-radius` | `px` | Radijus zaobljenosti ruba za podržane elemente kartice klime |
| `--bubble-climate-button-background-color` | `color` | Boja pozadine za gumbe kartice klime |
| `--bubble-climate-icon-border-radius` | `px` | Radijus zaobljenosti ruba za spremnik ikone kartice klime |
| `--bubble-state-climate-fan-only-color` | `color` | Boja preklopa za stanje fan-only |
| `--bubble-state-climate-dry-color` | `color` | Boja preklopa za stanje dry |
| `--bubble-state-climate-cool-color` | `color` | Boja preklopa za stanje cool |
| `--bubble-state-climate-heat-color` | `color` | Boja preklopa za stanje heat |
| `--bubble-state-climate-auto-color` | `color` | Boja preklopa za stanje auto |
| `--bubble-state-climate-heat-cool-color` | `color` | Boja preklopa za stanje heat-cool |
| `--bubble-climate-accent-color` | `color` | Naglašena boja za karticu klime |
| `--bubble-climate-box-shadow` | Vidi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za spremnik klime. |

</details>


#### Primjeri

<details>

<summary>Kartica klime s padajućim izbornikom HVAC načina rada</summary>

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

Ova kartica vam omogućuje prikaz vaših entiteta kalendara. Njezin sadržaj se može pomicati, tako da lako možete pregledavati nadolazeće događaje.

### Opcije kalendara

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv                | Tip    | Zahtjev  | Podržane opcije                               | Opis                                                                             |
|---------------------|---------|--------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Neobavezno     | Bilo koji broj (minimum: 1)                        | Broj dana kalendara za dohvaćanje događaja, od sada do kraja n-tog dana (zadano: 7) |
| `entities`          | object  | **Obavezno** | Objekt entiteta kalendara (vidi niže)            | Entitet za upravljanje (npr. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obavezno** | Entitet kalendara                               | Entitet kalendara za prikaz                                                          |
| `entities.color`    | string  | Neobavezno     | Boja                                         | Prilagođena boja za oznaku kalendara. Ako nije definirana, automatski će se odabrati boja |
| `days`              | number  | Neobavezno     | Bilo koji broj (minimum: 1)                         | Broj dana kalendara za dohvaćanje događaja, od sada do kraja n-tog dana (zadano: 7) |
| `limit`             | number  | Neobavezno     | Broj                                        | Broj događaja koji će se prikazati na kartici                                  |
| `show_end`          | boolean | Neobavezno     | `true` ili `false` (zadano)                     | Prikaži ili sakrij vrijeme završetka za događaje                                                    |
| `show_progress`     | boolean | Neobavezno     | `true` (zadano) ili `false`                     | Prikaži ili sakrij traku napretka događaja                                                     |
| `show_started_events`| boolean | Neobavezno     | `true` (zadano) ili `false`                     | Prikaži ili sakrij događaje koji su trenutačno u tijeku. Višednevni se događaji prosuđuju dan po dan, pa se skriva samo dan koji je u tijeku, a dani koji dolaze ostaju vidljivi |
| `scrolling_effect`  | boolean | Neobavezno | `true` (zadano) ili `false` | Dopusti pomicanje teksta kad sadržaj prelazi veličinu svog spremnika |
| `event_action` | object | Neobavezno | `tap_action`, `double_tap_action` ili `hold_action`, vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Omogućuje dodavanje radnji pri kliku na događaj. |
| `tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri kliku na dan, ako nije definirano koristit će se `none`. |
| `double_tap_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri dvostrukom kliku na dan, ako nije definirano koristit će se `none`. |
| `hold_action` | object | Neobavezno | Vidi [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definira vrstu radnje pri držanju dana, ako nije definirano koristit će se `none`. |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljka), `large` (zadano ako je u prikazu odjeljka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stiliziranja kartice, vidi [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |
| `sub_button` | object | Neobavezno | Vidi [podgumbe](#podgumbi) | Dodaje prilagođene gumbe fiksirane s desne strane |

</details>

<details>

<summary><b>CSS varijable (vidi <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla                                  | Očekivana vrijednost | Opis                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Glavna boja pozadine za podržane elemente u kartici kalendara  |
| `--bubble-calendar-border-radius`         | `px`           | Radijus zaobljenosti ruba za podržane elemente kartice kalendara |
| `--bubble-calendar-height`                | `px`           | Visina kartice kalendara                                        |

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

Ova kartica je jednostavan razdjelnik za dijeljenje vašeg skočnog prozora na kategorije / odjeljke. Npr. Svjetla, Uređaji, Rolete, Postavke, Automatizacije...

### Opcije razdjelnika

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `name` | string | Neobavezno, ali preporučeno | Bilo koji tekst | Naziv za vaš razdjelnik |
| `icon` | string | Neobavezno, ali preporučeno | Bilo koja `mdi:` ikona | Ikona za vaš razdjelnik |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljaka), `large` (zadano ako je u prikazu odjeljaka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stila kartice, pogledajte [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |
| `sub_button` | object | Neobavezno | Pogledajte [podgumbe](#podgumbi) | Dodajte prilagođene gumbe fiksirane s desne strane |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Boja pozadine za liniju u razdjelniku |

</details>

#### Primjer

<details>

<summary>Razdjelnik/pregrada za odjeljak "Rolete"</summary>

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

## Prazan stupac

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ova kartica služi za popunjavanje praznog stupca. Korisna je ako u svom skočnom prozoru imate `horizontal-stack` s samo jednom karticom. Pogledajte donji desni kut ovog snimka zaslona kako je (ne) vidite.

### Opcije praznog stupca

Ova kartica nema opcija i ne podržava [stiliziranje](#stiliziranje), no podržava opcije rasporeda za HA odjeljke.

#### Primjer

<details>

<summary>Prazan stupac u vodoravnom nizu</summary>

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

Ova kartica je namijenjena isključivo podgumbima. Savršena je za izbornike, brze radnje, informativne oznake ili fiksno podnožje na dnu stranice.

> [!IMPORTANT]  
> Ova kartica koristi novu shemu podgumba. Koristite `sub_button.bottom` za definiranje svojih gumba. Odjeljak `sub_button.main` se zanemaruje.

### Opcije za "Samo podgumbi"

<details>

<summary><b>Opcije (YAML + opisi)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obavezno** | Pogledajte [podgumbe](#podgumbi) | Definirajte svoje podgumbe koristeći odjeljak `bottom` |
| `hide_main_background` | boolean | Neobavezno | `true` ili `false` (zadano) | Uklonite pozadinu kartice |
| `footer_mode` | boolean | Neobavezno | `true` ili `false` (zadano) | Fiksirajte karticu na dnu stranice |
| `footer_full_width` | boolean | Neobavezno | `true` ili `false` (zadano) | Postavite podnožje na punu širinu (100%) |
| `footer_width` | number | Neobavezno | Bilo koji broj | Širina podnožja u pikselima kada je `footer_full_width` postavljen na `false` |
| `footer_bottom_offset` | number | Neobavezno | Bilo koji broj | Udaljenost od dna stranice u pikselima (zadano: `16`) |
| `card_layout` | string | Neobavezno | `normal` (zadano ako nije u prikazu odjeljaka), `large` (zadano ako je u prikazu odjeljaka), `large-2-rows`, `large-sub-buttons-grid` | Raspored stila kartice, pogledajte [rasporede kartice](#rasporedi-kartice) |
| `rows` | number | Neobavezno | Bilo koji broj | Broj redaka (visina) (npr. `2`) |

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Širina podnožja kada je `footer_full_width` postavljen na `false` |
| `--bubble-footer-bottom` | `px` | Odmak podnožja od dna |
| `--bubble-footer-box-shadow` | pogledajte [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sjena okvira za spremnik podnožja |

</details>

#### Primjeri

<details>

<summary>Oznake (kao na snimci zaslona)</summary>

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

<summary>Fiksni izbornik u podnožju</summary>

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

U svakoj kartici koja podržava tu opciju, možete dodati podgumbe kako biste svoje kartice dodatno prilagodili. Možete, primjerice, izraditi gumb koji upravlja usisavačem, karticom vremena, ili gotovo bilo čime što vam padne na pamet. Ovi podgumbi podržavaju radnje dodira i većinu opcija gumba.

Podgumbi sada podržavaju tri tipa: **Zadano (gumb)**, **Klizač** i **Padajući izbornik / Odabir**. Možete miješati tipove u istoj kartici, postaviti podgumbe pri vrhu ili dnu, te ih organizirati u grupe za naprednije rasporede.

#### Položaj i grupe podgumba

<details>

<summary><b>Struktura podgumba (main / bottom + grupe)</b></summary>

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
- `main` i `bottom` su dva neovisna odjeljka. Podgumbi u `bottom` fiksirani su na dno kartice.
- `main_layout` i `bottom_layout` prihvaćaju `inline` (zadano) ili `rows` za slaganje grupa okomito.
- Grupe su objekti s poljem `group` i neobaveznim `buttons_layout` (`inline` ili `column`).
- `justify_content` dostupan je **samo za grupe u bottom** (`start`, `center`, `end`, `fill`).
- Kada su prisutni podgumbi u `bottom`, raspored kartice automatski se prebacuje na `large`, osim ako izričito postavite drugi raspored.
- Stariji nizovi `sub_button` i dalje su podržani i tretiraju se kao odjeljak `main`.

</details>

### Opcije podgumba

<details>

<summary><b>Opcije (YAML + opis)</b></summary>

| Naziv | Tip | Zahtjev | Podržane opcije | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | Neobavezno | Bilo koji entitet | Entitet za upravljanje |
| `name` | string | Neobavezno | Bilo koji tekst | Naziv za vaš podgumb, ako nije definiran, prikazat će se naziv entiteta |
| `icon` | string | Neobavezno | Bilo koja `mdi:` ikona | Ikona za vaš podgumb, ako nije definirana, prikazat će se ikona entiteta ili slika entiteta |
| `force_icon` | boolean | Neobavezno | `true` ili `false` (zadano) | Prisili prikaz ikone čak i ako je dostupna slika entiteta |
| `sub_button_type` | string | Neobavezno | `default`, `slider` ili `select` | Odaberite tip podgumba |
| `show_background` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži pozadinu za vaš podgumb, boja će se mijenjati ovisno o stanju entiteta |
| `state_background` | boolean | Neobavezno | `true` (zadano) ili `false` | Koristi boju stanja kada je entitet `on` |
| `light_background` | boolean | Neobavezno | `true` (zadano) ili `false` | Koristi boju svjetla za pozadinu kada je dostupna |
| `show_state` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži ili sakrij stanje vašeg `entity` |
| `show_name` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži ili sakrij naziv |
| `show_icon` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij ikonu |
| `show_last_changed` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnje promjene vašeg `entity` |
| `show_last_updated` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži vrijeme zadnjeg ažuriranja vašeg `entity` |
| `show_attribute` | boolean | Neobavezno | `true` ili `false` (zadano) | Prikaži atribut vašeg `entity` ispod njegovog `name` |
| `attribute` | string | Neobavezno (obavezno ako je `show_attribute` postavljen na `true`) | Atribut vašeg `entity` | Atribut za prikaz (npr. `brightness`) |
| `select_attribute` | string | Neobavezno | Popis atributa vašeg `entity` (pogledajte podržane opcije iznad) | Ovaj popis atributa otvorit će padajući izbornik klikom (npr. `effect_list`) |
| `show_arrow` | boolean | Neobavezno | `true` (zadano) ili `false` | Prikaži ili sakrij strelicu padajućeg izbornika za podgumbe tipa select |
| `scrolling_effect` | boolean | Neobavezno | `true` (zadano) ili `false` | Dopusti pomicanje teksta kada sadržaj premašuje veličinu spremnika |
| `tap_action` | object | Neobavezno | Pogledajte [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definirajte tip radnje pri kliku na podgumb, ako nije definirano, koristit će se `more-info`. |
| `double_tap_action` | object | Neobavezno | Pogledajte [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definirajte tip radnje pri dvostrukom kliku na podgumb, ako nije definirano, koristit će se `none`. |
| `hold_action` | object | Neobavezno | Pogledajte [radnje](#radnje-dodira-dvostrukog-dodira-i-držanja) | Definirajte tip radnje pri držanju podgumba, ako nije definirano, koristit će se `more-info`. |
| `fill_width` | boolean | Neobavezno | `true` ili `false` | Popuni dostupnu širinu (zadano: `false` za main, `true` za bottom) |
| `width` | number ili string | Neobavezno | Bilo koji broj ili CSS duljina | Prilagođena širina (`px` za odjeljak main, `%` za odjeljak bottom prema zadanim postavkama) |
| `custom_height` | number | Neobavezno | Bilo koji broj | Prilagođena visina u pikselima |
| `content_layout` | string | Neobavezno | `icon-left` (zadano), `icon-top`, `icon-bottom`, `icon-right` | Položaj ikone unutar podgumba |
| `always_visible` | boolean | Neobavezno | `true` ili `false` (zadano) | **Samo za klizač.** Uvijek prikaži klizač umjesto otvaranja pri dodiru |
| `show_button_info` | boolean | Neobavezno | `true` ili `false` (zadano) | **Samo za klizač.** Prikaži ikonu/naziv/stanje kada je omogućen `always_visible` |
| `visibility` | object ili list | Neobavezno | Pogledajte [uvjete](#uvjeti) | Prikaži ili sakrij podgumb na temelju uvjeta |
| `hide_when_parent_unavailable` | boolean | Neobavezno | `true` ili `false` (zadano) | Sakrij podgumb ako je entitet nadređene kartice nedostupan |
| `css_class` | string | Neobavezno | Bilo koji niz | Dodatna CSS klasa na podgumbu, kako biste ga ciljali u svom [stiliziranju](#stiliziranje) bez obzira na njegov naziv (na primjer `My value` daje `.my-value`) |

</details>

<details>

<summary><b>Opcije klizača za podgumbe (isto kao klizači gumba)</b></summary>

<br>

Klizači za podgumbe podržavaju iste opcije klizača kao i klizači gumba, uključujući:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS varijable (pogledajte <a href="#stiliziranje">Stiliziranje</a>)</b></summary>

| Varijabla | Očekivana vrijednost | Opis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radijus zaobljenja rubova za podgumbe |
| `--bubble-sub-button-background-color` | `color` | Boja pozadine za podgumbe |
| `--bubble-sub-button-outline` | `box-shadow` | Obrub koji se dodaje podgumbu ili klizaču, samo kada se taj element oboji istom bojom kao kartica iza njega, zbog čega bi bio nevidljiv (postavite ga na `none` da ga uklonite) |
| `--bubble-sub-slider-border-radius` | `px` | Radijus zaobljenja rubova za podgumbe klizače |
| `--bubble-sub-slider-background-color` | `color` | Boja pozadine za podgumbe klizače |
| `--bubble-sub-slider-height` | `px` | Visina za trajno vidljive podgumbe klizače |
| `--bubble-sub-slider-outline` | `box-shadow` | Obrub samo za podgumbe klizača, vraća se na `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Boja teksta na svijetlim pozadinama podgumba |

</details>

#### Primjeri

<details>

<summary>Gumb s nekoliko podgumba za izradu kartice usisavača (kao na snimci zaslona)</summary>

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

<summary>Klizač gumba s podgumbom koji prikazuje osvjetljenje i jednim koji uključuje/isključuje svjetlo (kao na snimci zaslona)</summary>

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

<summary>Gumb koji prikazuje unutarnju i vanjsku temperaturu s vremenom za danas i sutra (snimka zaslona uključena)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Na moju nesreću, kod mene je oblačno cijelo vrijeme, ali sve ikone se mijenjaju ovisno o vremenu.

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

## Rasporedi kartice

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card u potpunosti podržava prikaz odjeljaka Home Assistant, možete promijeniti raspored kartice kako biste je povećali, a možete i promijeniti broj stupaca ili redaka koje kartica treba zauzeti u prikazu odjeljaka (samo na karticama koje podržavaju tu opciju). Ovi rasporedi podržani su i u svim ostalim tipovima prikaza.

<details>

<summary><b>Dostupni rasporedi kartice</b></summary>

| Raspored | Opis |
| --- | --- |
| `normal` | Uobičajeni raspored (nije optimiziran za prikaz odjeljaka) |
| `large` | Veći raspored koji će se prilagoditi odabranim recima u prikazu odjeljaka (optimiziran za prikaz odjeljaka) |
| `large-2-rows` | Veći raspored s 2 retka podgumba koji će se prilagoditi odabranim recima u prikazu odjeljaka (optimiziran za prikaz odjeljaka) |
| `large-sub-buttons-grid` | Ovaj raspored prikazuje podgumbe u mreži, `rows` mora biti postavljen na najmanje `2`.

</details>

#### Primjeri

<details>

<summary>Velik gumb koji prikazuje statistiku potrošnje energije s 2 retka podgumba (snimka zaslona uključena)</summary>

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

<summary>Velik gumb s više redaka i 12 podgumba</summary>

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

## Uvjeti

Neke se opcije upravljaju uvjetima, napisanima točno kao oni na [uvjetnoj kartici](https://www.home-assistant.io/dashboards/conditional/) Home Assistanta:

- `visibility` na [podgumbu](#podgumbi), za njegovo prikazivanje ili skrivanje
- `trigger` na [skočnom prozoru](#skočni-prozor), za njegovo otvaranje kada su uvjeti ispunjeni
- `checkConditionsMet(conditions, hass)` unutar vaših [predložaka](#predlošci), kada odgovor trebate u vlastitom kodu

Vrednuje se svaka vrsta uvjeta u Home Assistantu: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, kao i grupe `and`, `or` i `not`. Rade i uvjeti iz Home Assistantovog graditelja uvjeta, oni nazvani po svojoj domeni poput `sun.is_up`, `light.is_on`, `zone.in_zone` ili `temperature.is_value`, sa svojim postavkama `target`, `options`, `behavior` i `for`.

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
> Uvjeti se vrednuju u vašem pregledniku, pa onih nekoliko kojima treba Home Assistant poslužitelj ne mogu biti točni: izlazak i zalazak sunca čitaju se iz entiteta `sun.sun` umjesto da se ponovno izračunavaju, a trajanje `for` mjeri se od zadnje promjene stanja, bez povijesti recordera.
>
> `view_columns` se prihvaća, ali uvijek prolazi, jer Bubble Card nikada nije taj koji raspoređuje stupce vašeg prikaza. Vrsta uvjeta koju Bubble Card ne poznaje javi se jednom u konzoli vašeg preglednika umjesto da tiho zakaže, pa možete razlikovati tipfeler od značajke koja nedostaje.

<br>

---

<br>

## Radnje dodira, dvostrukog dodira i držanja

Također možete koristiti zadane radnje dodira, dvostrukog dodira i držanja Home Assistant na karticama koje podržavaju tu opciju. Primjerice, to vam omogućuje prikaz prozora "more info" držanjem ikone gumba ili pokretanje servisa pritiskom na podgumb.

**Napomena: Kada je konfiguriran `double_tap_action`, uobičajeni `tap_action` imat će odgodu od 200ms kako bi se omogućilo otkrivanje
dvostrukog dodira. Ako je ova odgoda nepoželjna, postavite `double_tap_action` na `none` kako biste onemogućili obradu dvostrukog dodira.**

### Opcije radnje

<details>

<summary><b>Opcije (YAML + opis)</b></summary>

| Naziv | Tip | Podržane opcije | Opis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Radnja koja se izvršava |
| `target` | object |  | Radi samo s `call-service`. Slijedi [sintaksu home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Bilo koja putanja vaše nadzorne ploče | Putanja na koju se navigira (npr. `'#kitchen'` za otvaranje skočnog prozora) kada je radnja definirana kao navigate |
| `url_path` | string | Bilo koja poveznica | URL koji se otvara klikom (npr. `https://www.google.com`) kada je radnja `url` |
| `service` | string | Bilo koji servis | Servis koji se poziva (npr. `media_player.media_play_pause`) kada je `action` definiran kao `call-service` |
| `data` ili `service_data` | object | Bilo koji podaci servisa | Podaci servisa koji se uključuju (npr. `entity_id: media_player.kitchen`) kada je `action` definiran kao `call-service` |
| `confirmation` | object | Pogledajte [potvrdu](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Prikaži skočni prozor s potvrdom (ne Bubble Card verziju), nadjačava zadani objekt `confirmation` |

</details>

#### Primjer

<details>

<summary>Gumb za otvaranje skočnog prozora</summary>

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

## Stiliziranje

Prilagođene stilove možete dodati kako biste izmijenili CSS svih kartica **bez korištenja card-mod** na četiri načina:

- U uređivaču idite na karticu koju želite izmijeniti, zatim otvorite _Opcije stiliziranja > Prilagođeni stilovi i JS predlošci_ i dodajte svoje prilagođene stilove (pogledajte savjete i primjere ispod).
- U uređivaču (ili u [YAML-u](#moduli)) idite na karticu koju želite izmijeniti, zatim otvorite _Moduli_, pa izradite novi modul (bit će dostupan svim karticama) ili otvorite **Module Store** kako biste instalirali bilo koji dostupan modul (više pojedinosti o modulima nalazi se [niže](#moduli)).
- U datoteci [teme](https://www.home-assistant.io/integrations/frontend/#defining-themes) dodavanjem CSS varijabli u YAML (dostupne su u dokumentaciji svake kartice iznad). Ovo omogućuje globalne izmjene.

  <details>
  
  <summary>Primjer</a></summary>
  
  <br>

  Nemojte kopirati redak `Bubble:`, to je naziv teme koju koristite. Također morate ukloniti `--` iz varijabli.

  Nakon svake izmjene morate pokrenuti akciju [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) kako biste osvježili temu.

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
> **Kako biste razumjeli koje se stilske klase mogu mijenjati**, pogledajte mapu [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) u ovom repozitoriju. U svakoj mapi kartice pronaći ćete datoteku pod nazivom `styles.css`. Te datoteke sadrže sve primijenjene stilove. Ovo omogućuje puno više mogućnosti nego CSS varijable, ali ih je potrebno dodati zasebno za svaku karticu.
> 
> Također možete pronaći mnoštvo [primjera zajednice](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) ili nekih s [foruma Home Assistanta](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) uz malo pretraživanja.
>
> Temu Bubble za Home Assistant (kao na snimkama zaslona) možete pronaći [ovdje](https://github.com/Clooos/Bubble).
>
> Video vodič uskoro stiže na moj [YouTube kanal](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Imajte na umu da će za neke već definirane CSS stilove možda biti potrebno dodati `!important;` (pogledajte primjere ispod).

> [!TIP]  
> Podgumbi se mogu ciljati klasama temeljenim na nazivu. Na primjer, podgumb nazvan "My sub-button" može se stilizirati s `.my-sub-button`. Podgumbi klizača također izlažu `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` itd.
>
> Klasa temeljena na nazivu mijenja se kada preimenujete podgumb, a prevodi se kada je preveden i naziv. Postavite `css_class` na podgumb da dobijete vlastitu klasu koja se nikada ne miče, bez obzira na naziv i bez obzira na jezik.

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

<summary>Promjena boje pozadine jednog gumba u horizontalnom nizu gumba</summary>

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

Ovo funkcionira na svim vrstama Bubble Card kartica (osim za skočne prozore):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ovo radi isto samo unutar kartice gumba (funkcionira i za zaglavlje skočnog prozora): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Za promjenu boje kada je stanje `on` pogledajte predloške stilova ispod.

</details>

<details>

<summary>Promjena boje klizača gumba</summary>

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

Za ikonu u horizontalnom nizu gumba.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Promjena boje pozadine spremnika ikone</summary>

<br>

Ovo funkcionira na svim vrstama Bubble Card kartica (osim za skočne prozore):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ovo radi isto za zaglavlje skočnog prozora: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Promjena veličine podgumba (savršeno za veliki raspored)</summary>

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

<summary>Promjena boje pozadine drugog podgumba</summary>

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

Za ikone podgumba.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Korištenje slike umjesto ikone u podgumbu</summary>

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

Samo prenesite tu sliku u mapu "pictures" (ili naziv po vašem izboru) unutar mape "www" Home Assistanta.

</details>

<details>

<summary>Napredni primjer: izrada horizontalnog reda podgumba (uključena snimka zaslona)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ovaj mi je posebno drag, koristim ga kao zaglavlje na svojoj nadzornoj ploči.

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

## Predlošci

**Bubble Card ne podržava Jinja predloške**, ali napredni korisnici mogu dodati predloške u JS-u izravno u svoje [prilagođene stilove](#stiliziranje). To, na primjer, omogućuje dinamičku promjenu ikone, tekstova ili boja elementa, uvjetno prikazivanje ili skrivanje elementa (poput podgumba) ili gotovo bilo što na temelju stanja, atributa i drugoga.

> [!TIP]  
> Više informacija o JS predlošcima [ovdje](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Moj je savjet da **uvijek pogledate konzolu preglednika** kako biste bili sigurni da sve radi ispravno.

> [!IMPORTANT]  
> **Svi predlošci koji ne mijenjaju CSS svojstvo moraju biti smješteni na kraju! Poput promjene ikone, teksta ili bilo kojeg elementa.**

#### Dostupne varijable i funkcije

<details>

<summary>Varijable</summary>

<br>

U većini kartica imate pristup ovim varijablama:

- `state` vraća stanje vašeg definiranog `entity`.
  
- `entity` vraća entitet koji ste definirali, poput `switch.test` u ovom primjeru.
  
- `icon` se može koristiti ovako za promjenu ikone `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` vraća stanje `entity` definiranog za vaš prvi podgumb, `[0]` je stanje prvog podgumba, `[1]` drugog...
  
- `subButtonIcon[0]` se može koristiti ovako za promjenu ikone prvog podgumba `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` je ikona prvog podgumba, `[1]` drugog...
  
- `card` vraća element kartice u DOM-u.
  
- `hass` je napredna varijabla koja vam pruža još veću kontrolu, primjerice možete vratiti stanje `light.kitchen` ovako `hass.states['light.kitchen'].state` ili atribut ovako `hass.states[entity].attributes.brightness`.

- `this` vraća mnoštvo korisnih informacija o vašoj konfiguraciji i nadzornoj ploči, koristite ovo samo ako znate što radite.

</details>

<details>

<summary>Funkcije</summary>

<br>

Imate pristup svim globalnim JS funkcijama, ali imate pristup i sljedećima:

- `getWeatherIcon` se može koristiti za vraćanje ikone vremena na temelju stanja koje vraća vrijeme. Na primjer, možete napraviti ovo `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` za promjenu ikone trećeg podgumba u ikonu današnjeg vremena, `.forecast[1]?.condition` je za sutra...

  Za to ćete morati izraditi senzor predloška. Evo što možete dodati u svoj `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` vraća `true` kada je popis [uvjeta](#uvjeti) ispunjen, na primjer `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` se može koristiti za prevođenje stanja (može se koristiti i za dobivanje jedinice stanja, bez potrebe da je ručno dodajete).
- `hass.formatEntityAttributeValue(state, "attribute")` se može koristiti za prevođenje atributa (može se koristiti i za dobivanje jedinice stanja, bez potrebe da je ručno dodajete).

</details>

#### Primjeri

Mnoštvo primjera možete pronaći ispod, ali vrlo napredne predloške možete pronaći i na mojoj [Patreon stranici](https://www.patreon.com/c/Clooos), poput jednog (mog omiljenog) koji omogućuje do četiri uvjetne značke smještene oko ikona kartice. To je ujedno i odličan način da naučite sve o mogućnostima prilagođenih stilova i predložaka Bubble Carda!

<details>
<summary>Primjeri s moje Patreon stranice</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Dodavanje znački nalik onima u Home Assistantu bilo kojoj kartici</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Prikaz formatiranog datuma i vremena u razdjelniku bez korištenja bilo kojeg entiteta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Prikaz stanja podgumba u dva retka</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Prilagodba naziva i ikona unutar podgumba za odabir</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Dodavanje trajnog skočnog prozora s podsjetnikom koji se pojavljuje samo kada je potreban</a>
</p>

<br>

</details>

<details>

<summary>Promjena boje pozadine gumba koja je crvena kada je stanje <code>off</code>, a plava kada je <code>on</code></summary>

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

<summary>Promjena boje pozadine gumba na temelju entiteta za horizontalni niz gumba</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Uvjetno prikazivanje/skrivanje podgumba</summary>

<br>

Ovaj primjer prikazuje prvi podgumb samo kada je moj usisavač zaglavljen.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ovaj primjer prikazuje podgumb kada je baterija ispod 10%. Korisno uz podgumb koji prikazuje "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Uvjetna promjena ikone ili ikone podgumba</summary>

<br>

Ovaj primjer mijenja ikonu gumba samo kada je usisavač zaglavljen.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ovaj primjer mijenja ikonu prvog podgumba samo kada je usisavač zaglavljen.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Uvjetna promjena boje ikone ili ikone podgumba</summary>

<br>

Ovaj primjer mijenja boju ikone gumba na temelju njegova stanja.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ovaj primjer mijenja boju ikone podgumba na temelju njegova stanja. `.bubble-sub-button-1` je prvi podgumb, zamijenite `1` ako želite promijeniti ikonu drugog podgumba.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Uvjetno animiranje ikone ventilatora</summary>

<br>

Ovaj primjer rotira ikonu gumba kada je ventilator u stanju `on`.
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

<summary>Predlošci teksta (poput naziva ili stanja)</summary>

<br>

Ovaj primjer mijenja naziv/stanje gumba u "It's currently sunny" ovisno o vremenu.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ili primijenjeno na podgumbe:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ako želite predloškom urediti stanje (`.bubble-state`), ne uključujte `show_state: true`, već samo uključite `show_attribute: true` bez ikakvog atributa.

</details>

<details>

<summary>Napredni primjer: promjena boje podgumba kada je skočni prozor otvoren</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Napredni primjer: predložak naziva razdjelnika na temelju stanja prevedenog na vaš jezik</summary>

<br>

Možete koristiti `hass.formatEntityState(state)` za prijevod stanja i `hass.formatEntityAttributeValue(state, "attribute")` za prijevod atributa.

Ovaj primjer mijenja naziv i ikonu na temelju vremena, "Nuageux" na francuskom znači "Oblačno".

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

Moduli su moćna značajka koja vam omogućuje spremanje, ponovno korištenje i dijeljenje vaših prilagođenih stilova i predložaka na svim vašim Bubble Card karticama. Umjesto kopiranja i lijepljenja istog koda u više kartica, možete izraditi modul i primijeniti ga gdje god vam zatreba. Ovo znatno olakšava i pojednostavljuje upravljanje izgledom vaše nadzorne ploče.

No ova je značajka mnogo moćnija od toga, omogućuje vam i da sami dodate stvarne funkcionalnosti u uređivač Bubble Carda, koristeći sve zadane opcije [Home Assistant obrasca](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
Odabirač objekata poboljšan je kako bi prikazivao promjene uživo i ispravno podržavao atribute.

Modul može odgovoriti i biraču kartica u Home Assistantu, uz ugrađene [prijedloge entiteta](#prijedlozi-entiteta): koristite `suggestions` za kartice koje može opisati unaprijed, a `suggestions_code` kada ih treba izračunati iz vaše postavljene instalacije, na primjer skočni prozor izgrađen od svih entiteta područja kojemu odabrani entitet pripada. Oba su ključa dokumentirana [ovdje](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Također možete pregledavati **Module Store** kako biste pronašli i instalirali [module koje je izradila zajednica](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ili podijelili svoje vlastite kreacije!

> [!TIP]
> Kod modula funkcionira potpuno jednako kao kod u odjeljku `styles` kartice. Dostupne su sve iste varijable i funkcije iz odjeljka [Predlošci](#predlošci).

<br>

### Početno postavljanje

> [!IMPORTANT]
> Od verzije v3.1.0, Bubble Card Tools je preporučeno pozadinsko spremište za module. Naslijeđena metoda senzora predloška i dalje radi za postojeće postave, ali su novi moduli i značajke Module Storea najbolje podržani putem Bubble Card Toolsa.

Integracija Bubble Card Tools omogućuje uređivač modula i Module Store te sprema module kao pojedinačne YAML datoteke. Postojeći moduli automatski se migriraju.

Koraci instalacije i konfiguracije objašnjeni su ovdje:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Uređivač modula

Uređivaču modula možete pristupiti iz postavki bilo koje kartice, u odjeljku **Moduli**. Uređivač nudi dvije glavne kartice (tabove):

#### Kartica Moji moduli

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Ova kartica prikazuje sve vaše instalirane module i omogućuje vam da:

- **Primijenite** postojeće module na trenutnu karticu
- **Izradite** novi modul od nule
- **Uredite** postojeće module uz pregled uživo
- **Izbrišete** module koji vam više nisu potrebni
- **Pretražujete** i **razvrstavate** module (abecedno, najnoviji, aktivni prvi)
- **Postavite globalni status** kako bi se modul automatski primijenio na sve kartice
- **Uvezete/Izvezete** module radi sigurnosne kopije ili dijeljenja
- **Napisati prijedloge entiteta** u uređivaču modula, pod **Neobavezno: prijedlozi entiteta**, kako bi se vaš modul nudio u biraču kartica u Home Assistantu. I pravila i izračunati prijedlozi provjeravaju se dok pišete, pogreška ondje sprječava spremanje, a pretpregled prikazuje predložene kartice za bilo koji entitet koji odaberete

#### Kartica Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Ova kartica prikazuje [sve dostupne module zajednice](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) i omogućuje vam da:

- **Pregledavate** sve module koje je izradila zajednica
- **Pretražujete** i filtrirate module po nazivu, kompatibilnosti ili ključnim riječima
- **Instalirate** module jednim klikom
- **Ažurirate** instalirane module kada su dostupne nove verzije

> [!TIP]
> U uređivaču možete omogućiti nepodržane module kako biste isprobali module koji još nisu označeni kao kompatibilni s određenom vrstom kartice.

<br>

### Kako koristiti module

#### Izrada novog modula

<details>

<summary>Kliknite za proširivanje</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Otvorite uređivač bilo koje kartice i proširite odjeljak **Moduli**.
2. Kliknite na **Izradi novi modul**.
3. Ispunite podatke o modulu.
4. Napišite svoj CSS i/ili JavaScript predložak koda u uređivaču **Kod**.
5. (Neobavezno) Izradite prilagođeno korisničko sučelje za konfiguraciju u odjeljku **Uređivač** (poput birača boje na gornjoj snimci zaslona, potpuna dokumentacija dostupna je [ovdje](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Neobavezno) Napišite svoje **Prijedloge entiteta** kako bi se vaš modul nudio u biraču kartica u Home Assistantu. Ploča provjerava ono što pišete dok tipkate, a njezin pretpregled prikazuje same predložene kartice za entitet po vašem izboru.
7. Kliknite **Spremi**.

Vaš je modul sada dostupan za korištenje na bilo kojoj od vaših kartica!

<br>

</details>

#### Primjena modula na karticu

<details>

<summary>Kliknite za proširivanje</summary>

<br>

- **Putem uređivača:**

  - Otvorite uređivač kartice na koju želite primijeniti modul.
  - Proširite odjeljak **Moduli**.
  - Kliknite na modul koji želite primijeniti s popisa.
  - Pod "Primijeni na", kliknite na "Ova kartica". Modul je sada aktivan. Na istu karticu možete primijeniti više modula.

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

#### Globalna primjena modula

<details>

<summary>Kliknite za proširivanje</summary>

<br>

Modul možete postaviti da se automatski primjenjuje na sve Bubble Card kartice:

**Ovo nije dostupno za module s uređivačem, jer oni zahtijevaju specifičnu konfiguraciju kako bi funkcionirali.**

- **Putem uređivača:**

  - U uređivaču modula pronađite svoj modul na kartici **Moji moduli**.
  - Uključite gumb **Sve kartice** pokraj naziva modula.
  - Modul će se sada automatski primjenjivati na sve kartice.
 
- **Putem YAML-a:**

  U svojoj YAML konfiguraciji modula (u `bubble-modules.yaml`) jednostavno dodajte `is_global: true`.

<br>

</details>

#### Isključivanje jedne kartice iz globalnog modula

<details>

<summary>Kliknite za proširivanje</summary>

<br>

Ako imate globalni modul, ali ga želite isključiti za određenu karticu:

- **Putem uređivača:**
  
  - U odjeljku **Moduli** kartice vidjet ćete popis globalnih modula.
  - Kliknite na globalni modul, isključite "Ova kartica" kako biste ga isključili za ovu određenu karticu.

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

#### Dijeljenje vašeg modula na Module Storeu

<details>

<summary>Kliknite za proširivanje</summary>

<br>

Da biste podijelili svoj modul na Module Storeu, u uređivaču modula, na dnu pod "Izvezi modul", kliknite na "Kopiraj za GitHub" i zalijepite sadržaj u novu raspravu u kategoriji [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Uredite opis** (ako je potrebno), **primjer** (za korisnike YAML-a) i ne zaboravite **priložiti barem jednu snimku zaslona** za Module Store.

**Vaš modul postaje dostupan odmah nakon toga** (nakon osvježavanja Storea), stoga dvaput provjerite je li sve ispravno napisano i modul radi kako se očekuje. Modul naravno možete uređivati/ažurirati i nakon što je podijeljen.

<br>

</details>

#### Upravljanje verzijama

<details>

<summary>Kliknite za proširivanje</summary>

<br>

Module Store automatski provjerava ima li ažuriranja za instalirane module. Kada su ažuriranja dostupna:

1. Vidjet ćete pokazatelj ažuriranja na kartici **Module Store**.
2. Kliknite **Ažuriraj** kod modula s dostupnim ažuriranjima.
3. Potvrdite ažuriranje u Module Storeu.

<br>

</details>

#### Definiranje podržanih vrsta kartica

<details>

<summary>Kliknite za proširivanje</summary>

<br>

Neki moduli možda nisu kompatibilni sa svim vrstama kartica. Možete odrediti koje kartice modul podržava.  
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
<summary>Osnovni modul stiliziranja</summary>

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

Ovaj je modul dostupan [ovdje](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Više primjera možete pronaći u Module Storeu, ili [ovdje](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizacija

Bubble Card govori vašim jezikom. Njegov je uređivač preveden na 64 jezika koje Home Assistant podržava, a gdje god Home Assistant već ima riječ za nešto, preuzima se njegova formulacija, pa u oba sučelja čitate iste pojmove.

Na dnu uređivača, pokraj broja verzije, prekidač **Automatski** prati jezik vašeg Home Assistanta. Isključite ga i cijeli se uređivač vraća na engleski, što je zgodno kada pratite vodič ili prijavljujete problem. Vaš se odabir pamti u vašem pregledniku.

I ova je dokumentacija prevedena, [na 62 jezika](languages.md), na sve osim britanskog engleskog, koji prikazuje izvornik. Te su stranice otvorene svima, pa se formulacija koja ne odgovara vašem Home Assistantu može popraviti u par klikova. Engleska verzija ostaje referenca za sam sadržaj.

<br>

---

<br>

## Pomoć

Slobodno otvorite issue ako nešto ne radi kako se očekuje. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Imate pitanja ili razmišljanja o Bubble Cardu? Želite podijeliti svoje nadzorne ploče ili otkrića? Možete otići na forum Home Assistanta, na Bubble Card subreddit ili u odjeljak GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Doprinos

Doprinosi su dobrodošli! Bilo da se radi o ispravcima grešaka, novim značajkama, prijevodima ili poboljšanjima dokumentacije, slobodno otvorite pull request.

Prije nego što počnete, pročitajte [vodič za razvojne programere](DEVELOPERS.md) koji objašnjava kako postaviti lokalno okruženje, izraditi projekt i testirati svoje izmjene.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donirajte

Većinu svog slobodnog vremena posvećujem tome da ovaj projekt bude što bolji. Stoga, ako cijenite moj rad, svaka bi donacija bila odličan način da pokažete svoju podršku 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Hvala svima na podršci, vi ste moja najveća motivacija!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
