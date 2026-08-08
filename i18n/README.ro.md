<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Această pagină este o traducere automată. În caz de dubiu, [documentația originală în engleză](../README.md) are prioritate. Vi se pare că o frază sună greșit? Orice ajutor este binevenit, iar [corectarea acestei pagini](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ro.md) durează doar un minut: GitHub se ocupă de fork și de pull request. Vă mulțumim anticipat! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Citiți această pagină în altă limbă](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card este o colecție minimalistă și personalizabilă de carduri pentru Home Assistant, cu pop-up-uri moderne și un Module Store integrat, cu peste 100 de module create de comunitate.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Cuprins

**[`Instalare`](#instalare)**  **[`Configurare`](#configurare)**  **[`Sugestii de entități`](#sugestii-de-entități)**  **[`Pop-up`](#pop-up)**  **[`Stivă orizontală de butoane`](#stivă-orizontală-de-butoane)**  **[`Buton`](#buton)**  **[`Player media`](#player-media)**  **[`Rulou`](#rulou)**  **[`Selecție`](#selecție)**  **[`Climatizare`](#climatizare)**  **[`Calendar`](#calendar)**  **[`Separator`](#separator)**  **[`Coloană goală`](#coloană-goală)**  **[`Doar sub-butoane`](#doar-sub-butoane)**  **[`Sub-butoane`](#sub-butoane)**  **[`Aspectele cardurilor`](#aspectele-cardurilor)**  **[`Condiții`](#condiții)**  **[`Acțiuni`](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă)**  **[`Stiluri`](#stiluri)**  **[`Șabloane`](#șabloane)**  **[`Module`](#module)**  **[`Localizare`](#localizare)**  **[`Ajutor`](#ajutor)**  **[`Contribuții`](#contribuții)**  **[`Donații`](#donații)**

<br>

## Instalare

**Cea mai veche versiune de Home Assistant acceptată:** 2023.9.0

<details>

<summary>Fără HACS</summary>

<br>

1. Descarcă `bubble-card.zip` din [cea mai recentă versiune](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Dezarhivează-l în folderul `<config>/www`, ar trebui să obții `bubble-card.js` și un folder `translations` alături (acel folder conține dicționarele editorului, fără el editorul rămâne în engleză)
3. Pe dashboard, apasă pe iconița din colțul din dreapta sus, apoi pe `Edit dashboard`
4. Apasă din nou pe acea iconiță, apoi pe `Manage resources`
5. Apasă pe `Add resource`
6. Copiază și lipește: `/local/bubble-card.js?v=1`
7. Apasă pe `JavaScript Module`, apoi pe `Create`
8. Întoarce-te și reîmprospătează pagina
9. Acum poți apăsa pe `Add card` în colțul din dreapta jos și căuta `Bubble Card`
10. După fiecare actualizare a fișierului va trebui să editezi `/local/bubble-card.js?v=1` și să schimbi versiunea cu un număr mai mare

Dacă nu funcționează, încearcă să golești memoria cache a browserului.

</details>

<details>

<summary>Cu HACS (Recomandat)</summary>

<br>

Această metodă îți permite să primești actualizări direct din Home Assistant Community Store

1. Dacă HACS nu este încă instalat, descarcă-l urmând instrucțiunile de pe [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Continuă cu configurarea inițială a HACS urmând instrucțiunile de pe [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. În bara laterală, mergi la "HACS"
4. Caută "Bubble Card" sau apasă pe butonul albastru de mai jos
5. Apasă pe "Download"
6. Întoarce-te pe dashboard și apasă pe iconița din colțul din dreapta sus, apoi pe `Edit dashboard`
7. Acum poți apăsa pe `Add card` în colțul din dreapta jos și căuta `Bubble Card`

Dacă nu funcționează, încearcă să golești memoria cache a browserului/aplicației (pe toate dispozitivele tale, dacă este nevoie).

#### Videoclipuri

Poți de asemenea să arunci o privire pe canalul meu de YouTube pentru videoclipuri pas cu pas.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configurare

Toate opțiunile pot fi configurate din editorul Home Assistant. Dar poți găsi mai multe detalii și codul YAML în documentația de mai jos.

<details>

<summary><b>Opțiuni principale (YAML + descriere)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `type` | string | **Obligatoriu** | `custom:bubble-card` | Tipul cardului |
| `card_type` | string | **Obligatoriu** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` sau `sub-buttons` | Tipul cardului Bubble Card, vezi mai jos |
| `styles` | listă de obiecte | Opțional | Orice foaie de stil CSS | Îți permite să personalizezi CSS-ul cardului Bubble Card, vezi [stiluri](#stiluri) |

</details>

<details>

<summary><b>Variabile CSS globale (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Raza de bordură pentru toate elementele acceptate |
| `--bubble-main-background-color` | `color` | Culoarea principală de fundal pentru toate elementele acceptate |
| `--bubble-secondary-background-color` | `color` | Culoarea secundară de fundal pentru toate elementele acceptate |
| `--bubble-accent-color` | `color` | Culoarea de accent pentru toate elementele acceptate |
| `--bubble-icon-border-radius` | `px` | Raza de bordură a iconiței pentru toate elementele acceptate |
| `--bubble-icon-background-color` | `color` | Culoarea de fundal a iconiței pentru toate elementele acceptate |
| `--bubble-sub-button-border-radius` | `px` | Raza de bordură pentru toate sub-butoanele |
| `--bubble-sub-button-background-color` | `color` | Culoarea de fundal pentru toate sub-butoanele |
| `--bubble-box-shadow` | vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra (box shadow) pentru toate elementele acceptate |
| `--bubble-border` | vezi [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Bordura pentru toate cardurile acceptate |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Vezi acest [videoclip](https://www.youtube.com/watch?v=0hSQOlBxKKI) pentru a afla mai multe despre Bubble Card și posibilitățile sale.** Canalul meu de YouTube este destul de nou și se concentrează pe tutoriale despre Home Assistant și Bubble Card. Nu ezita să te abonezi, mă ajută să cresc vizibilitatea canalului. Îți mulțumesc anticipat!

<br>

---

<br>

## Sugestii de entități

Începând cu Home Assistant 2026.6, alegerea unei entități în selectorul de carduri îți propune câteva carduri gata făcute, iar Bubble Card adaugă propriile rețete la această listă. Alege o lumină și ți se propune un card cu un cursor de luminozitate, plus variante pentru temperatura culorii, culoare și saturație atunci când lumina ta le suportă. Alege un rulou și primești cursorul de poziție, alege un player media și primești și o variantă cu lista lui de surse, alege un aspirator și primești butoanele de pornire, pauză și revenire la stație. Fiecare sugestie este o configurație obișnuită Bubble Card afișată ca previzualizare live, așa că poți lua cea mai apropiată și să o editezi mai departe ca de obicei.

Ce ți se propune depinde de ceea ce poate face cu adevărat entitatea ta: o lumină fără canal de luminozitate primește un comutator în locul unui cursor, un rulou care nu se poate înclina nu primește varianta de înclinare, iar o entitate de climatizare primește modurile presetate doar dacă are vreunul. Intrările clasice urmează sub sugestiile Bubble Card atunci când se aplică: cardul dedicat acelui tip de entitate, un buton simplu și un cursor.

> [!TIP]
> Modulele pot adăuga propriile sugestii în acea listă, vezi [module](#module).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Acest card îți permite să creezi un pop-up cu orice conținut. Fiecare pop-up este **ascuns implicit** și poate fi deschis țintind link-ul său (de ex. `'#pop-up-name'`), cu orice card care acceptă [acțiunea](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) `navigate`, sau cu [stiva orizontală de butoane](#stivă-orizontală-de-butoane) inclusă.

> [!TIP]
> ### Declanșator de pop-up 
> Această funcție îți permite să deschizi un pop-up pe baza stării oricărei entități, de exemplu poți deschide un pop-up "Securitate" cu o cameră atunci când o persoană se află în fața casei tale. Poți de asemenea să creezi un helper de tip toggle (input_boolean) și să declanșezi deschiderea/închiderea lui într-o automatizare.
> <details>
> <summary>Deschiderea unui pop-up când un <code>binary_sensor</code> este <code>on</code></summary>
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
> ### Diferite moduri de a închide un pop-up 
> Există mai multe moduri de a închide un pop-up. De exemplu, poți glisa din antetul pop-up-ului către partea de jos, printr-o glisare lungă în interiorul pop-up-ului către partea de jos, apăsând Escape pe desktop, eliminând hash-ul din URL sau pur și simplu apăsând butonul de închidere.
>


### Opțiunile pop-up-ului

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obligatoriu** | Orice hash unic (de ex. `'#kitchen'`) cu ' ' | Așa vei deschide pop-up-ul tău |
| `popup_style` | string | Opțional | `bubble` (implicit) sau `classic` | Definește stilul vizual al pop-up-ului |
| `popup_mode` | string | Opțional | `default` (implicit), `fit-content`, `centered` sau `adaptive-dialog` | Definește modul de aspect al pop-up-ului |
| `with_bottom_offset` | boolean | Opțional | `true` sau `false` (implicit) | Folosit doar cu `popup_mode: fit-content` sau `adaptive-dialog`. Aplică un decalaj (offset) în partea de jos pe mobil, util când dashboard-ul tău include un card de subsol. |
| `full_width_on_mobile` | boolean | Opțional | `true` sau `false` (implicit) | Folosit doar cu `popup_mode: centered`. Extinde pop-up-ul la lățimea completă a ecranului pe mobil, util pe ecrane mai mici. |
| `performance_mode` | string | Opțional | `default` (implicit) sau `performance` | Optimizează animația de deschidere a pop-up-ului. `performance` întârzie ușor randarea conținutului și blur-ul de fundal, de asemenea dezactivează blur-ul de backdrop dacă este setat. |
| `auto_close` | string | Opțional | Un timeout în milisecunde (de ex. `10000` pentru 10s) | Închide automat pop-up-ul după un timeout |
| `close_on_click` | boolean | Opțional | `true` sau `false` (implicit) | Închide automat pop-up-ul după orice interacțiune |
| `close_by_clicking_outside` | boolean | Opțional | `true` (implicit) sau `false` | Închide pop-up-ul dând clic în afara lui |
| `width_desktop` | string | Opțional | Orice valoare CSS | Lățimea pe desktop (`100%` implicit pe mobil) |
| `margin` | string | Opțional | Orice valoare CSS | Folosește asta **doar** dacă pop-up-ul tău nu este bine centrat pe mobil (de ex. `13px`) |
| `margin_top_mobile` | string | Opțional | Orice valoare CSS | Marginea de sus pe mobil (de ex. `-56px` dacă antetul tău este ascuns) |
| `margin_top_desktop` | string | Opțional | Orice valoare CSS | Marginea de sus pe desktop (de ex. `50vh` pentru un pop-up de dimensiune jumătate sau `calc(100vh - 400px)` pentru o înălțime fixă de `400px`) |
| `bg_color` | string | Opțional | Orice valoare hex, rgb sau rgba | Culoarea de fundal a pop-up-ului tău (de ex. `#ffffff` pentru un fundal alb) |
| `bg_opacity` | string | Opțional | Orice valoare de la `0` la `100` | Opacitatea de fundal a pop-up-ului tău (de ex. `100` pentru nicio transparență) |
| `bg_blur` | string | Opțional | Orice valoare de la `0` la `100` | Efectul de blur al fundalului pop-up-ului tău, **funcționează doar dacă `bg_opacity` nu este setat la `100`** (de ex. `0` pentru niciun blur)|
| `shadow_opacity` | string | Opțional | Orice valoare de la `0` la `100` | Opacitatea umbrei pop-up-ului tău (de ex. `0` pentru a o ascunde) |
| `hide_backdrop` | boolean | Opțional | `true` sau `false` (implicit) | Setează asta la true pe primul pop-up al dashboard-ului tău principal pentru a dezactiva backdrop-ul pe toate pop-up-urile. |
| `background_update` | boolean | Opțional | `true` sau `false` (implicit) | Actualizează conținutul pop-up-ului în fundal (nerecomandat) |
| `trigger` | object sau list | Opțional | Vezi [condiții](#condiții) | Deschide acest pop-up când condițiile sunt îndeplinite |
| `trigger_entity` | string | Opțional | Orice entitate | Deschide acest pop-up pe baza stării oricărei entități, forma simplă a `trigger` |
| `trigger_state` | string | Opțional (**Obligatoriu** dacă `trigger_entity` este definit) | Orice stare de entitate | Starea entității pentru a deschide pop-up-ul |
| `trigger_close` | boolean | Opțional | `true` (implicit) sau `false` | Închide pop-up-ul când condițiile nu mai sunt îndeplinite. Valoarea implicită devine `false` dacă folosești perechea mai veche `trigger_entity` și `trigger_state` |
| `open_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Declanșează o acțiune la deschiderea pop-up-ului |
| `close_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Declanșează o acțiune la închiderea pop-up-ului |
| `show_header` | boolean | Opțional | `true` (implicit) sau `false` | Afișează/Ascunde complet antetul pop-up-ului |
| `show_previous_button` | boolean | Opțional | `true` sau `false` (implicit) | Afișează un buton anterior lângă butonul de închidere și navighează înapoi la pop-up-ul anterior, când este disponibil |
| `show_close_button` | boolean | Opțional | `true` (implicit) sau `false` | Afișează sau ascunde butonul de închidere, păstrând vizibil restul antetului |
| `buttons_position` | string | Opțional | `right` (implicit) sau `left` | Poziția butoanelor de închidere și anterior în antet |
| `cards` | listă | Opțional | Orice card Bubble Card, card Home Assistant sau card personalizat | Definește conținutul pop-up-ului tău. Vezi exemplul de pop-up de mai jos. |
| Ai de asemenea acces la [toate setările de buton](#buton) pentru antetul pop-up-ului. | | Opțional | | Dacă nu este definit, nu va fi afișat niciun antet |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Raza de bordură pentru pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Culoarea principală de fundal pentru elementele acceptate ale pop-up-ului |
| `--bubble-pop-up-background-color` | `color` | Culoarea de fundal a pop-up-ului |
| `--bubble-backdrop-background-color` | `color` | Culoarea de fundal pentru backdrop |
| Ai de asemenea acces la [toate variabilele CSS ale butonului](#opțiunile-butonului) pentru antetul pop-up-ului. | | |

</details>


### Formatul pop-up standalone (v3.2.0+)

Începând cu v3.2.0, pop-up-urile folosesc un nou format standalone în care cardurile de conținut sunt definite direct în interiorul pop-up-ului folosind opțiunea `cards`. Acest lucru oferă performanțe mai bune și o nouă experiență de editare drag-and-drop bazată pe secțiuni.


#### Exemple

<details>

<summary>Un pop-up (format standalone)</summary>

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

<summary>Un buton pentru a deschide pop-up-ul</summary>

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

## Stivă orizontală de butoane

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Acest card este un bun companion pentru cardul pop-up, permițându-ți să deschizi pop-up-urile corespunzătoare. De asemenea îți permite să deschizi orice pagină a dashboard-ului tău. În plus, poți adăuga senzorii tăi de mișcare/ocupare astfel încât ordinea butoanelor să se adapteze în funcție de camera în care tocmai ai intrat. Acest card este derulabil, rămâne vizibil și funcționează ca un subsol.

> [!IMPORTANT]  
> Acest card trebuie să fie ultimul din view-ul tău (după fiecare card și pop-up). Nu poate fi în interiorul niciunei stive.

### Opțiunile stivei orizontale de butoane

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obligatoriu** | Hash-ul pop-up-ului (de ex. `'#kitchen'`) cu ' ' sau orice link | Un link de deschis |
| `1_name` | string | Opțional | Orice string | Un nume pentru butonul tău |
| `1_icon` | string | Opțional | Orice iconiță `mdi:` | O iconiță pentru butonul tău |
| `1_entity` | string | Opțional | Orice lumină sau grup de lumini | Afișează culoarea acelei lumini în fundal |
| `1_pir_sensor` | string | Opțional | Orice senzor binar | Cel puțin un senzor pir sau mai mulți pentru `auto_order`, de fapt funcționează și cu orice tip de entitate, de exemplu poți adăuga grupuri de lumini și ordinea se va schimba în funcție de ultimele stări modificate. |
| `auto_order` | boolean | Opțional | `true` sau `false` (implicit) | Schimbă ordinea butoanelor în funcție de ultimul timp modificat al `_pir_sensor`, **trebuie să fie `false` dacă nu ai niciun `_pir_sensor` în codul tău** |
| `margin` | string | Opțional | Orice valoare CSS | Folosește asta **doar** dacă `horizontal-buttons-stack`-ul tău nu este bine centrat pe mobil (de ex. `13px`) |
| `width_desktop` | string | Opțional | Orice valoare CSS | Lățimea pe desktop (`100%` implicit pe mobil) |
| `is_sidebar_hidden` | boolean | Opțional | `true` sau `false` (implicit) | Fixează poziția stivei orizontale de butoane dacă bara laterală este ascunsă pe desktop (doar dacă ai făcut tu însuți o modificare pentru a o ascunde) |
| `rise_animation` | boolean | Opțional | `true` (implicit) sau `false` | Setează asta la `false` pentru a dezactiva animația care se activează la încărcarea paginii |
| `highlight_current_view` | boolean | Opțional | `true` sau `false` (implicit) | Evidențiază hash-ul / view-ul curent cu o animație fluidă |
| `hide_gradient` | boolean | Opțional | `true` sau `false` (implicit) | Setează asta la `false` pentru a ascunde gradientul |

> [!IMPORTANT]  
> Variabilele care încep cu un număr definesc butoanele tale, doar schimbă acest număr pentru a adăuga mai multe butoane (vezi exemplul de mai jos).

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Raza de bordură pentru butoanele stivei orizontale de butoane |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Culoarea de fundal pentru butoanele stivei orizontale de butoane |

</details>


#### Exemplu

<details>

<summary>O stivă orizontală de butoane care se reorganizează singură pe baza senzorilor de ocupare</summary>

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

## Buton

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Acest card este foarte versatil. Poate fi folosit ca un **comutator**, un **cursor**, o **stare** sau un buton de **nume/text**.

> [!TIP]
> ### Care sunt diferențele dintre toate tipurile de butoane?
>
> - **Buton comutator:** Acesta este tipul de buton implicit. În mod implicit, comută o entitate, iar culoarea sa de fundal se schimbă în funcție de starea entității sau de culoarea unei lumini. Poți schimba acțiunea sa în secțiunea **Acțiune la atingere pe card**.
>
> - **Buton cursor:** Acest tip de buton îți permite să controlezi entități cu intervale ajustabile. Este ideal pentru estomparea luminilor, iar culoarea sa de umplere se va adapta culorii luminii. Îl poți folosi și pentru a afișa valori, precum nivelul unei baterii.
>   Entități acceptate pentru cursoare:
>   - Lumină (luminozitate)
>   - Player media (volum)
>   - Rulou (poziție)
>   - Ventilator (procent)
>   - Climatizare (temperatură)
>   - Input number și number (valoare)
>   - Senzor de baterie (procent, doar citire)
>
>   Poți folosi și orice entitate cu o stare numerică dezactivând filtrul de entități din **Setări cursor**, apoi definind valorile `min` și `max`. Această opțiune este doar pentru citire.
>
> - **Buton de stare:** Perfect pentru afișarea informațiilor dintr-un senzor sau orice entitate. Când îl apeși, va afișa panoul "Mai multe informații" al entității. Culoarea sa de fundal nu se schimbă.
>
> - **Buton nume/text:** Singurul tip de buton care nu necesită o entitate. Îți permite să afișezi un text scurt, un nume sau un titlu. Poți adăuga și acțiuni la el. Culoarea sa de fundal nu se schimbă.

### Opțiunile butonului

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoriu** | Orice entitate | O entitate de controlat |
| `button_type` | string | Opțional | `switch` (implicit), `slider`, `state` sau `name` | Comportamentul butonului tău |
| `name` | string | Opțional | Orice șir de caractere | Un nume pentru butonul tău, dacă nu este definit va afișa numele entității |
| `icon` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru butonul tău, dacă nu este definită va afișa pictograma entității sau `entity-picture` |
| `force_icon` | boolean | Opțional | `true` sau `false` (implicit) | Acordă prioritate pictogramei în locul `entity-picture` |
| `use_accent_color` | boolean | Opțional (implicit `false`) | **Doar pentru lumini.** Folosește culoarea de accent a temei în locul culorii luminii.                         |
| `show_state` | boolean | Opțional | `true` sau `false` (implicit) | Arată sau ascunde starea entității tale `entity` |
| `show_name` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde numele |
| `show_icon` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde pictograma |
| `show_last_changed` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei schimbări a entității tale `entity` |
| `show_last_updated` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei actualizări a entității tale `entity` |
| `show_attribute` | boolean | Opțional | `true` sau `false` (implicit) | Arată un atribut al entității tale `entity` sub numele său `name` |
| `attribute` | string | Opțional (obligatoriu dacă `show_attribute` este setat pe `true`) | Un atribut al entității tale `entity` | Atributul de afișat (de exemplu, `brightness`) |
| `scrolling_effect` | boolean | Opțional | `true` (implicit) sau `false` | Permite textului să deruleze atunci când conținutul depășește dimensiunea containerului lor |
| `button_action` | object | Opțional | `tap_action`, `double_tap_action` sau `hold_action`, vezi mai jos | Permite schimbarea acțiunilor implicite la clic pe buton. |
| `tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la clic pe pictogramă, dacă nu este definit, se va folosi `more-info` |
| `double_tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la dublu clic pe pictogramă, dacă nu este definit, se va folosi `none` |
| `hold_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la apăsare lungă pe pictogramă, dacă nu este definit, se va folosi `more-info` |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu este în vizualizarea secțiuni), `large` (implicit dacă este în vizualizarea secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stil al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |
| `sub_button` | object | Opțional | Vezi [sub-butoane](#sub-butoane) | Adaugă butoane personalizate fixate la dreapta |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Culoarea principală de fundal pentru elementele acceptate din buton |
| `--bubble-button-border-radius` | `px` | Raza de bordură pentru buton |
| `--bubble-button-icon-border-radius` | `px` | Raza de bordură pentru containerul pictogramei butonului |
| `--bubble-button-icon-background-color` | `color` | Culoarea de fundal pentru containerul pictogramei butonului |
| `--bubble-light-white-color` | `color` | Înlocuiește culoarea albă implicită a butoanelor/cursoarelor de lumină |
| `--bubble-light-color` | `color` | Înlocuiește culoarea butoanelor/cursoarelor de lumină (chiar și luminile RGB) |
| `--bubble-button-box-shadow` | Vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra cutiei pentru buton |

</details>

Aceste opțiuni sunt disponibile doar atunci când `button_type` este setat pe `slider`.

<details>

<summary><b>Opțiuni cursor (YAML + descrieri)</b></summary>

| Nume                  | Tip    | Cerință                     | Descriere                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opțional                        | Valoarea minimă a cursorului. Pentru cursoare personalizate.                                                    |
| `max_value`             | number  | Opțional                        | Valoarea maximă a cursorului. Pentru cursoare personalizate.                                                    |
| `step`                  | number  | Opțional                        | Valoarea pasului cursorului.                                                                           |
| `tap_to_slide`          | boolean | Opțional (implicit `false`)      | Activează comportamentul anterior al cursorului, unde atingi pentru a activa cursorul, în loc să îl ții apăsat.        |
| `relative_slide`        | boolean | Opțional (implicit `false` )     | Actualizează valoarea relativ la valoarea de start, în loc de punctul de atingere de start.                      |
| `read_only_slider`      | boolean | Opțional (implicit `false`)      | Face cursorul doar pentru citire. Activat automat pentru unele entități precum senzorii.                        |
| `slider_live_update`    | boolean | Opțional (implicit `false`)      | Starea entității este actualizată în timp ce culisezi. **Această funcție nu este recomandată pentru toate entitățile.**        |
| `slider_fill_orientation` | string | Opțional | `left`, `right`, `top` sau `bottom` | Schimbă direcția de umplere a cursorului. De la stânga la dreapta când nu este definit, oglindit în [limbile de la dreapta la stânga](#localizare) |
| `slider_value_position` | string | Opțional | `right`, `left`, `center` sau `hidden` | Poziția afișării valorii. În dreapta când nu este definită, iar în stânga în [limbile de la dreapta la stânga](#localizare) |
| `invert_slider_value` | boolean | Opțional (implicit `false`) | Inversează direcția cursorului (umplerea 100% egalează minimul). Nu este disponibil pentru cursoarele de culoare. |
| `light_slider_type` | string | Opțional | `brightness` (implicit), `hue`, `saturation`, `white_temp` | **Doar pentru lumini.** Alege modul cursorului |
| `cover_slider_type` | string | Opțional | `position` (implicit), `tilt_position` | **Doar pentru rulouri.** Alege modul cursorului (poziție sau înclinare) |
| `hue_force_saturation` | boolean | Opțional (implicit `false`) | **Doar pentru lumini (mod Hue).** Forțează saturația la ajustarea Hue |
| `hue_force_saturation_value` | number | Opțional (implicit `100`) | **Doar pentru lumini (mod Hue).** Valoarea de saturație forțată (0-100) |
| `use_accent_color` | boolean | Opțional (implicit `false`) | **Doar pentru lumini (mod Luminozitate).** Folosește culoarea de accent a temei în locul culorii luminii |
| `allow_light_slider_to_0` | boolean | Opțional (implicit `false`)    | **Doar pentru lumini.** Permite cursorului să ajungă la 0%, ceea ce stinge lumina. Nu este disponibil cu `tap_to_slide`. |
| `light_transition`      | boolean | Opțional (implicit `false`)      | **Doar pentru lumini.** Activează tranziții line ale luminozității pentru luminile compatibile.                           |
| `light_transition_time` | number  | Opțional (implicit `500`)        | **Doar pentru lumini.** Timpul de tranziție în milisecunde. Necesită `light_transition: true`.            |

</details>

#### Exemple

<details>

<summary>Un buton cursor care poate controla luminozitatea unei lumini</summary>

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

<summary>Un buton cu mai multe opțiuni</summary>

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

## Player media

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Acest card îți permite să controlezi o entitate player media.

### Opțiunile playerului media

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoriu** | Orice player media | Playerul media de controlat |
| `name` | string | Opțional | Orice șir de caractere | Un nume pentru playerul tău media, dacă nu este definit va afișa numele entității |
| `icon` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru playerul tău media, dacă nu este definită va afișa pictograma entității sau `entity-picture` |
| `force_icon` | boolean | Opțional | `true` sau `false` (implicit) | Acordă prioritate pictogramei în locul `entity-picture` |
| `show_state` | boolean | Opțional | `true` sau `false` (implicit) | Arată sau ascunde starea entității tale `entity` |
| `show_name` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde numele |
| `show_icon` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde pictograma |
| `show_last_changed` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei schimbări a entității tale `entity` |
| `show_last_updated` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei actualizări a entității tale `entity` |
| `show_attribute` | boolean | Opțional | `true` sau `false` (implicit) | Arată un atribut al entității tale `entity` sub numele său `name` |
| `attribute` | string | Opțional (obligatoriu dacă `show_attribute` este setat pe `true`) | Un atribut al entității tale `entity` | Atributul de afișat (de exemplu, `brightness`) |
| `scrolling_effect` | boolean | Opțional | `true` (implicit) sau `false` | Permite textului să deruleze atunci când conținutul depășește dimensiunea containerului lor |
| `min_volume` | number | Opțional | Orice număr | Valoarea minimă a cursorului de volum. |
| `max_volume` | number | Opțional | Orice număr | Valoarea maximă a cursorului de volum. |
| `cover_background` | boolean | Opțional | `true` sau `false` (implicit) | Folosește o copertă media neclară ca fundal al cardului. |
| `button_action` | object | Opțional | `tap_action`, `double_tap_action` sau `hold_action`, vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Permite schimbarea acțiunilor implicite la clic pe buton. |
| `tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la clic pe pictogramă, dacă nu este definit, se va folosi `more-info`. |
| `double_tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la dublu clic pe pictogramă, dacă nu este definit, se va folosi `none`. |
| `hold_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la apăsare lungă pe pictogramă, dacă nu este definit, se va folosi `more-info`. |
| `main_buttons_position` | string | Opțional | `default` sau `bottom` | Mută butoanele de acțiune ale copertei în partea de jos (fixat) |
| `main_buttons_full_width` | boolean | Opțional | `true` sau `false` | Face ca butoanele de acțiune de jos să ocupe toată lățimea (implicit: `true` când poziția este `bottom`) |
| `main_buttons_alignment` | string | Opțional | `end` (implicit), `center`, `start`, `space-between` | Alinierea butoanelor de acțiune de jos atunci când nu ocupă toată lățimea |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu este în vizualizarea secțiuni), `large` (implicit dacă este în vizualizarea secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stil al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |
| `sub_button` | object | Opțional | Vezi [sub-butoane](#sub-butoane) | Adaugă butoane personalizate fixate la dreapta |
| `hide` | object | Opțional | Vezi mai jos | Ascunde butoane din card |

#### Opțiuni de ascundere

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opțional | `true` sau `false` (implicit) | Ascunde butonul redare/pauză |
| `volume_button` | boolean | Opțional | `true` sau `false` (implicit) | Ascunde butonul de volum |
| `previous_button` | boolean | Opțional | `true` sau `false` (implicit) | Ascunde butonul anterior |
| `next_button` | boolean | Opțional | `true` sau `false` (implicit) | Ascunde butonul următor |
| `power_button` | boolean | Opțional | `true` sau `false` (implicit) | Ascunde butonul de alimentare |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Culoarea principală de fundal pentru playerul media |
| `--bubble-media-player-border-radius` | `px` | Raza de bordură pentru playerul media |
| `--bubble-media-player-buttons-border-radius` | `px` | Raza de bordură pentru butoanele playerului media |
| `--bubble-media-player-slider-background-color` | `color` | Culoarea de fundal pentru cursorul de volum |
| `--bubble-media-player-icon-border-radius` | `px` | Raza de bordură pentru containerul pictogramei playerului media |
| `--bubble-media-player-icon-background-color` | `color` | Culoarea de fundal pentru containerul pictogramei playerului media |
| `--bubble-media-player-box-shadow` | Vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra cutiei pentru playerul media |

</details>


#### Exemple

<details>

<summary>Un player media cu toate opțiunile</summary>

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

## Rulou

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Acest card îți permite să controlezi entitățile tale `cover`.

### Opțiunile ruloului

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoriu** | Orice rulou | Un rulou de controlat |
| `name` | string | Opțional | Orice șir de caractere | Un nume pentru ruloul tău, dacă nu este definit va afișa numele entității |
| `force_icon` | boolean | Opțional | `true` sau `false` (implicit) | Acordă prioritate pictogramei în locul `entity-picture` |
| `show_state` | boolean | Opțional | `true` sau `false` (implicit) | Arată sau ascunde starea entității tale `entity` |
| `show_name` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde numele |
| `show_icon` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde pictograma |
| `show_last_changed` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei schimbări a entității tale `entity` |
| `show_last_updated` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei actualizări a entității tale `entity` |
| `show_attribute` | boolean | Opțional | `true` sau `false` (implicit) | Arată un atribut al entității tale `entity` sub numele său `name` |
| `attribute` | string | Opțional (obligatoriu dacă `show_attribute` este setat pe `true`) | Un atribut al entității tale `entity` | Atributul de afișat (de exemplu, `brightness`) |
| `scrolling_effect` | boolean | Opțional | `true` (implicit) sau `false` | Permite textului să deruleze atunci când conținutul depășește dimensiunea containerului lor |
| `icon_open` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru ruloul tău deschis, dacă nu este definită va afișa pictograma implicită de rulou deschis |
| `icon_close` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru ruloul tău închis, dacă nu este definită va afișa pictograma implicită de rulou închis |
| `icon_up` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru butonul tău de deschidere rulou, dacă nu este definită va afișa pictograma implicită de rulou deschis |
| `icon_down` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru butonul tău de închidere rulou, dacă nu este definită va afișa pictograma implicită de rulou închis |
| `open_service` | string | Opțional | Orice serviciu sau script | Un serviciu pentru a deschide ruloul tău, implicit `cover.open_cover` |
| `stop_service` | string | Opțional | Orice serviciu sau script | Un serviciu pentru a opri ruloul tău, implicit `cover.stop_cover` |
| `close_service` | string | Opțional | Orice serviciu sau script | Un serviciu pentru a închide ruloul tău, implicit `cover.close_cover` |
| `tilt_buttons` | string | Opțional | `top` (implicit), `bottom`, `left`, `right`, `hidden` | Poziția butoanelor de control al înclinării (afișate doar dacă ruloul acceptă înclinarea) |
| `open_tilt_service` | string | Opțional | Orice serviciu sau script | Un serviciu pentru a deschide înclinarea, implicit `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opțional | Orice serviciu sau script | Un serviciu pentru a închide înclinarea, implicit `cover.close_cover_tilt` |
| `button_action` | object | Opțional | `tap_action`, `double_tap_action` sau `hold_action`, vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Permite schimbarea acțiunilor implicite la clic pe buton. |
| `tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la clic pe pictogramă, dacă nu este definit, se va folosi `more-info`. |
| `double_tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la dublu clic pe pictogramă, dacă nu este definit, se va folosi `none`. |
| `hold_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la apăsare lungă pe pictogramă, dacă nu este definit, se va folosi `more-info`. |
| `main_buttons_position` | string | Opțional | `default` sau `bottom` | Mută comenzile media în partea de jos (fixat) |
| `main_buttons_full_width` | boolean | Opțional | `true` sau `false` | Face ca comenzile de jos să ocupe toată lățimea (implicit: `true` când poziția este `bottom`) |
| `main_buttons_alignment` | string | Opțional | `end` (implicit), `center`, `start`, `space-between` | Alinierea comenzilor de jos atunci când nu ocupă toată lățimea |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu este în vizualizarea secțiuni), `large` (implicit dacă este în vizualizarea secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stil al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |
| `sub_button` | object | Opțional | Vezi [sub-butoane](#sub-butoane) | Adaugă butoane personalizate fixate la dreapta |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Culoarea principală de fundal pentru elementele acceptate din cardul de rulou |
| `--bubble-cover-border-radius` | `px` | Raza de bordură pentru cardul de rulou |
| `--bubble-cover-icon-border-radius` | `px` | Raza de bordură pentru containerul pictogramei cardului de rulou |
| `--bubble-cover-icon-background-color` | `color` | Culoarea de fundal pentru containerul pictogramei cardului de rulou |
| `--bubble-cover-box-shadow` | Vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra cutiei pentru cardul de rulou |
| `--bubble-button-box-shadow` | Vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra cutiei pentru butoanele din cardul de rulou |

</details>


#### Exemplu

<details>

<summary>Un card care poate controla o jaluzea cu role</summary>

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

## Selecție

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Acest card îți permite să adaugi un meniu derulant pentru entitățile tale `input_select` / `select`. Acest card acceptă și sub-butoanele și toate funcțiile comune Bubble Card.

> [!TIP]
> Poți avea și sub-butoane de selecție dacă dorești, această funcție este disponibilă în toate cardurile care acceptă sub-butoanele.

### Opțiunile selecției

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatoriu** | Orice entitate | O entitate de controlat |
| `name` | string | Opțional | Orice șir de caractere | Un nume pentru selecția ta, dacă nu este definit va afișa numele entității |
| `icon` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru selecția ta, dacă nu este definită va afișa pictograma entității sau `entity-picture` |
| `force_icon` | boolean | Opțional | `true` sau `false` (implicit) | Acordă prioritate pictogramei în locul `entity-picture` |
| `show_state` | boolean | Opțional | `true` sau `false` (implicit) | Arată sau ascunde starea entității tale `entity` |
| `show_name` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde numele |
| `show_icon` | boolean | Opțional | `true` (implicit) sau `false` | Arată sau ascunde pictograma |
| `show_last_changed` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei schimbări a entității tale `entity` |
| `show_last_updated` | boolean | Opțional | `true` sau `false` (implicit) | Arată ora ultimei actualizări a entității tale `entity` |
| `show_attribute` | boolean | Opțional | `true` sau `false` (implicit) | Arată un atribut al entității tale `entity` sub numele său `name` |
| `attribute` | string | Opțional (obligatoriu dacă `show_attribute` este setat pe `true`) | Un atribut al entității tale `entity` | Atributul de afișat (de exemplu, `brightness`) |
| `scrolling_effect` | boolean | Opțional | `true` (implicit) sau `false` | Permite textului să deruleze atunci când conținutul depășește dimensiunea containerului lor |
| `tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la clic pe pictogramă, dacă nu este definit, se va folosi `more-info`. |
| `double_tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la dublu clic pe pictogramă, dacă nu este definit, se va folosi `none`. |
| `hold_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la apăsare lungă pe pictogramă, dacă nu este definit, se va folosi `more-info`. |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu este în vizualizarea secțiuni), `large` (implicit dacă este în vizualizarea secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stil al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |
| `sub_button` | object | Opțional | Vezi [sub-butoane](#sub-butoane) | Adaugă butoane personalizate fixate la dreapta |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Culoarea principală de fundal pentru elementele acceptate din cardul de selecție |
| `--bubble-select-background-color` | `color` | Culoarea de fundal pentru cardul de selecție |
| `--bubble-select-list-border-radius` | `px` | Raza de bordură pentru meniul derulant din card |
| `--bubble-select-list-item-accent-color` | `color` | Culoarea de accent pentru elementul selectat |
| `--bubble-select-list-background-color` | `color` | Culoarea de fundal pentru meniul derulant din card |
| `--bubble-select-list-width` | `px` | Lățimea meniului derulant din card |
| `--bubble-select-arrow-background-color` | `color` | Culoarea de fundal pentru săgeata meniului derulant |
| `--bubble-select-button-border-radius` | `px` | Raza de bordură pentru butonul de selecție |
| `--bubble-select-border-radius` | `px` | Raza de bordură pentru cardul de selecție |
| `--bubble-select-icon-border-radius` | `px` | Raza de bordură pentru containerul pictogramei cardului de selecție |
| `--bubble-select-icon-background-color` | `color` | Culoarea de fundal pentru containerul pictogramei cardului de selecție |
| `--bubble-select-box-shadow` | Vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra cutiei pentru cardul de selecție |

</details>


#### Exemple

<details>

<summary>Un card de selecție cu o listă de scene</summary>

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

## Climatizare

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Acest card îți permite să controlezi entitățile tale `climate`.

> [!TIP]
> Meniul de selecție al modului este un [sub-buton](#sub-butoane) care este adăugat automat la crearea cardului. Îl poți modifica sau elimina ulterior după cum dorești.

### Opțiunile climatizării

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume                     | Tip    | Cerință                         | Opțiuni acceptate                                  | Descriere                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obligatoriu**                        | Entitate climatizare                                   | Entitatea de controlat (de exemplu, `climate.living_room`).                                                            |
| `name`                  | string  | Opțional                            | Orice șir de caractere                                       | Un nume personalizat pentru card. Dacă nu este definit, va afișa numele entității.                                    |
| `icon`                  | string  | Opțional                            | Orice pictogramă `mdi:`                                  | O pictogramă personalizată pentru card. Dacă nu este definită, se va folosi pictograma entității sau `entity-picture`.                   |
| `force_icon`            | boolean | Opțional                            | `true` sau `false` (implicit)                     | Acordă prioritate pictogramei în locul `entity-picture`.                                                           |
| `show_state`            | boolean | Opțional                            | `true` sau `false` (implicit)                     | Arată sau ascunde starea curentă a entității `entity`.                                                                 |
| `show_name`             | boolean | Opțional                            | `true` (implicit) sau `false`                     | Arată sau ascunde numele entității.                                                                            |
| `show_icon`             | boolean | Opțional                            | `true` (implicit) sau `false`                     | Arată sau ascunde pictograma.                                                                                          |
| `hide_target_temp_low`  | boolean | Opțional (doar pentru entitățile care acceptă `target_temp_low`) | `true` sau `false` (implicit) | Ascunde controlul temperaturii țintă scăzute dacă este acceptat de entitatea `entity`.                                          |
| `hide_target_temp_high` | boolean | Opțional (doar pentru entitățile care acceptă `target_temp_high`)| `true` sau `false` (implicit) | Ascunde controlul temperaturii țintă ridicate dacă este acceptat de entitatea `entity`.                                         |
| `state_color`           | boolean | Opțional                            | `true` sau `false` (implicit)                     | Aplică o culoare de fundal constantă atunci când entitatea de climatizare este PORNITĂ.                                              |
| `step` | number | Opțional | Orice număr | Pasul temperaturii. |
| `min_temp` | number | Opțional | Orice număr | Temperatura minimă. |
| `max_temp` | number | Opțional | Orice număr | Temperatura maximă. |
| `button_action` | object | Opțional | `tap_action`, `double_tap_action` sau `hold_action`, vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Permite schimbarea acțiunilor implicite la clic pe buton. |
| `tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la clic pe pictogramă, dacă nu este definit, se va folosi `more-info`. |
| `double_tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la dublu clic pe pictogramă, dacă nu este definit, se va folosi `none`. |
| `hold_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la apăsare lungă pe pictogramă, dacă nu este definit, se va folosi `more-info`. |                              |
| `main_buttons_position` | string | Opțional | `default` sau `bottom` | Mută butoanele de acțiune ale climatizării în partea de jos (fixat) |
| `main_buttons_full_width` | boolean | Opțional | `true` sau `false` | Face ca butoanele de acțiune de jos să ocupe toată lățimea (implicit: `true` când poziția este `bottom`) |
| `main_buttons_alignment` | string | Opțional | `end` (implicit), `center`, `start`, `space-between` | Alinierea butoanelor de acțiune de jos atunci când nu ocupă toată lățimea |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu este în vizualizarea secțiuni), `large` (implicit dacă este în vizualizarea secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stil al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |
| `sub_button`            | object  | Opțional                            | Vezi [sub-butoane](#sub-butoane)                | Adaugă butoane personalizate fixate la dreapta. Util pentru un meniu de selecție a modului de climatizare.                                  |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Culoarea principală de fundal pentru elementele acceptate din cardul de climatizare |
| `--bubble-climate-border-radius` | `px` | Raza de bordură pentru elementele acceptate din cardul de climatizare |
| `--bubble-climate-button-background-color` | `color` | Culoarea de fundal pentru butoanele cardului de climatizare |
| `--bubble-climate-icon-border-radius` | `px` | Raza de bordură pentru containerul pictogramei cardului de climatizare |
| `--bubble-state-climate-fan-only-color` | `color` | Culoarea de suprapunere pentru starea doar ventilator |
| `--bubble-state-climate-dry-color` | `color` | Culoarea de suprapunere pentru starea uscat |
| `--bubble-state-climate-cool-color` | `color` | Culoarea de suprapunere pentru starea răcire |
| `--bubble-state-climate-heat-color` | `color` | Culoarea de suprapunere pentru starea încălzire |
| `--bubble-state-climate-auto-color` | `color` | Culoarea de suprapunere pentru starea automat |
| `--bubble-state-climate-heat-cool-color` | `color` | Culoarea de suprapunere pentru starea încălzire-răcire |
| `--bubble-climate-accent-color` | `color` | Culoarea de accent pentru cardul de climatizare |
| `--bubble-climate-box-shadow` | Vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra cutiei pentru containerul de climatizare. |

</details>


#### Exemple

<details>

<summary>Un card de climatizare cu un meniu derulant al modurilor HVAC</summary>

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

## Calendar

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Acest card îți permite să afișezi entitățile tale de calendar. Conținutul său este derulabil, așa că poți răsfoi cu ușurință evenimentele viitoare.

### Opțiunile calendarului

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume                | Tip    | Cerință  | Opțiuni acceptate                               | Descriere                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Opțional     | Orice număr (minim: 1)                        | Numărul de zile de calendar pentru care se preiau evenimente, de acum până la sfârșitul celei de-a N-a zile (implicit: 7) |
| `entities`          | object  | **Obligatoriu** | Un obiect entitate calendar (vezi mai jos)            | Entitatea de controlat (de exemplu, `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obligatoriu** | O entitate calendar                               | Entitatea calendar de afișat                                                          |
| `entities.color`    | string  | Opțional     | O culoare                                         | O culoare personalizată pentru cip-ul calendarului. Dacă nu este definită, se va alege automat o culoare |
| `days`              | number  | Opțional     | Orice număr (minim: 1)                         | Numărul de zile de calendar pentru care se preiau evenimente, de acum până la sfârșitul celei de-a N-a zile (implicit: 7) |
| `limit`             | number  | Opțional     | Un număr                                        | Numărul de evenimente care vor fi afișate pe card                                  |
| `show_end`          | boolean | Opțional     | `true` sau `false` (implicit)                     | Arată sau ascunde ora de sfârșit pentru evenimente                                                    |
| `show_progress`     | boolean | Opțional     | `true` (implicit) sau `false`                     | Arată sau ascunde bara de progres a evenimentului                                                     |
| `show_started_events`| boolean | Opțional     | `true` (implicit) sau `false`                     | Arată sau ascunde evenimentele care sunt în desfășurare. Evenimentele de mai multe zile sunt evaluate zi cu zi, așa că se ascunde doar ziua în curs, iar zilele următoare rămân vizibile |
| `scrolling_effect`  | boolean | Opțional | `true` (implicit) sau `false` | Permite textului să deruleze atunci când conținutul depășește dimensiunea containerului lor |
| `event_action` | object | Opțional | `tap_action`, `double_tap_action` sau `hold_action`, vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Permite adăugarea de acțiuni la clic pe eveniment. |
| `tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la clic pe zi, dacă nu este definit, se va folosi `none`. |
| `double_tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la dublu clic pe zi, dacă nu este definit, se va folosi `none`. |
| `hold_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la apăsare lungă pe zi, dacă nu este definit, se va folosi `none`. |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu este în vizualizarea secțiuni), `large` (implicit dacă este în vizualizarea secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stil al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |
| `sub_button` | object | Opțional | Vezi [sub-butoane](#sub-butoane) | Adaugă butoane personalizate fixate la dreapta |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă                                  | Valoare așteptată | Descriere                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Culoarea principală de fundal pentru elementele acceptate din cardul de calendar  |
| `--bubble-calendar-border-radius`         | `px`           | Raza de bordură pentru elementele acceptate din cardul de calendar |
| `--bubble-calendar-height`                | `px`           | Înălțimea cardului de calendar                                        |

</details>

#### Exemple

<details>

<summary>Un card de calendar cu un număr limitat de evenimente</summary>

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

<summary>Un card de calendar cu o oră de sfârșit și o bară de progres</summary>

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


## Separator

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Acest card este un separator simplu pentru a împărți pop-up-ul în categorii/secțiuni. De exemplu: Lumini, Dispozitive, Rulouri, Setări, Automatizări...

### Opțiunile separatorului

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `name` | string | Opțional, dar recomandat | Orice string | Un nume pentru separator |
| `icon` | string | Opțional, dar recomandat | Orice pictogramă `mdi:` | O pictogramă pentru separator |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu se află în vizualizarea de secțiuni), `large` (implicit dacă se află în vizualizarea de secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stilizare al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |
| `sub_button` | object | Opțional | Vezi [sub-butoane](#sub-butoane) | Adaugă butoane personalizate fixate în dreapta |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Culoarea de fundal pentru linia din separator |

</details>

#### Exemplu

<details>

<summary>Un separator/despărțitor pentru o secțiune "Rulouri"</summary>

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

## Coloană goală

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Acest card există pentru a umple o coloană goală. Este util dacă aveți un `horizontal-stack` în pop-up cu un singur card. Priviți în colțul din dreapta jos al acestei capturi de ecran ca să (nu) îl vedeți.

### Opțiunile coloanei goale

Acest card nu are opțiuni și nu acceptă [stiluri](#stiluri), deși acceptă opțiunile de aspect pentru secțiunile HA.

#### Exemplu

<details>

<summary>O coloană goală într-o stivă orizontală</summary>

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

## Doar sub-butoane

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Acest card este dedicat exclusiv sub-butoanelor. Este perfect pentru meniuri, acțiuni rapide, chip-uri informative sau un subsol fix în partea de jos a paginii.

> [!IMPORTANT]  
> Acest card folosește noua schemă de sub-butoane. Folosiți `sub_button.bottom` pentru a defini butoanele. Secțiunea `sub_button.main` este ignorată.

### Opțiunile pentru doar sub-butoane

<details>

<summary><b>Opțiuni (YAML + descrieri)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obligatoriu** | Vezi [sub-butoane](#sub-butoane) | Definiți sub-butoanele folosind secțiunea `bottom` |
| `hide_main_background` | boolean | Opțional | `true` sau `false` (implicit) | Elimină fundalul cardului |
| `footer_mode` | boolean | Opțional | `true` sau `false` (implicit) | Fixează cardul în partea de jos a paginii |
| `footer_full_width` | boolean | Opțional | `true` sau `false` (implicit) | Face subsolul lat pe toată lățimea (100%) |
| `footer_width` | number | Opțional | Orice număr | Lățimea subsolului în pixeli atunci când `footer_full_width` este `false` |
| `footer_bottom_offset` | number | Opțional | Orice număr | Distanța de la partea de jos a paginii în pixeli (implicit: `16`) |
| `card_layout` | string | Opțional | `normal` (implicit dacă nu se află în vizualizarea de secțiuni), `large` (implicit dacă se află în vizualizarea de secțiuni), `large-2-rows`, `large-sub-buttons-grid` | Aspectul de stilizare al cardului, vezi [aspectele cardurilor](#aspectele-cardurilor) |
| `rows` | number | Opțional | Orice număr | Numărul de rânduri (înălțime) (de exemplu, `2`) |

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Lățimea subsolului atunci când `footer_full_width` este `false` |
| `--bubble-footer-bottom` | `px` | Decalajul subsolului față de partea de jos |
| `--bubble-footer-box-shadow` | vezi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Umbra containerului subsolului |

</details>

#### Exemple

<details>

<summary>Chip-uri (ca în captura de ecran)</summary>

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

<summary>Un meniu de subsol fix</summary>

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

## Sub-butoane

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

În fiecare card care acceptă această opțiune, puteți adăuga sub-butoane pentru a personaliza și mai mult cardurile. Puteți, de exemplu, să creați un buton care să controleze un aspirator robot, un card meteo sau aproape orice vă puteți imagina. Aceste sub-butoane acceptă acțiunile la atingere și majoritatea opțiunilor butonului.

Sub-butoanele acceptă acum trei tipuri: **Implicit (buton)**, **Slider** și **Dropdown/Selecție**. Puteți combina tipuri în același card, puteți plasa sub-butoane sus sau jos și le puteți organiza în grupuri pentru aspecte mai avansate.

#### Plasarea și grupurile sub-butoanelor

<details>

<summary><b>Structura sub-butoanelor (main / bottom + grupuri)</b></summary>

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

**Note:**
- `main` și `bottom` sunt două secțiuni independente. Sub-butoanele `bottom` sunt fixate în partea de jos a cardului.
- `main_layout` și `bottom_layout` acceptă `inline` (implicit) sau `rows` pentru a stivui grupurile pe verticală.
- Grupurile sunt obiecte cu un array `group` și un `buttons_layout` opțional (`inline` sau `column`).
- `justify_content` este disponibil **doar pentru grupurile bottom** (`start`, `center`, `end`, `fill`).
- Când sunt prezente sub-butoane `bottom`, aspectul cardului trece automat la `large`, cu excepția cazului în care setați explicit un alt aspect.
- Array-urile `sub_button` din versiunile vechi sunt încă acceptate și tratate ca secțiunea `main`.

</details>

### Opțiunile sub-butoanelor

<details>

<summary><b>Opțiuni (YAML + descriere)</b></summary>

| Nume | Tip | Cerință | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- | --- |
| `entity` | string | Opțional | Orice entitate | O entitate de controlat |
| `name` | string | Opțional | Orice string | Un nume pentru sub-buton, dacă nu este definit se va afișa numele entității |
| `icon` | string | Opțional | Orice pictogramă `mdi:` | O pictogramă pentru sub-buton, dacă nu este definită se va afișa pictograma entității sau imaginea entității |
| `force_icon` | boolean | Opțional | `true` sau `false` (implicit) | Forțează pictograma chiar dacă este disponibilă o imagine a entității |
| `sub_button_type` | string | Opțional | `default`, `slider` sau `select` | Alege tipul sub-butonului |
| `show_background` | boolean | Opțional | `true` (implicit) sau `false` | Afișează un fundal pentru sub-buton, culoarea acestuia se va schimba în funcție de starea entității |
| `state_background` | boolean | Opțional | `true` (implicit) sau `false` | Folosește culoarea stării atunci când entitatea este `on` |
| `light_background` | boolean | Opțional | `true` (implicit) sau `false` | Folosește culoarea luminii pentru fundal, atunci când este disponibilă |
| `show_state` | boolean | Opțional | `true` sau `false` (implicit) | Afișează sau ascunde starea entității `entity` |
| `show_name` | boolean | Opțional | `true` sau `false` (implicit) | Afișează sau ascunde numele |
| `show_icon` | boolean | Opțional | `true` (implicit) sau `false` | Afișează sau ascunde pictograma |
| `show_last_changed` | boolean | Opțional | `true` sau `false` (implicit) | Afișează ora ultimei modificări a entității `entity` |
| `show_last_updated` | boolean | Opțional | `true` sau `false` (implicit) | Afișează ora ultimei actualizări a entității `entity` |
| `show_attribute` | boolean | Opțional | `true` sau `false` (implicit) | Afișează un atribut al entității `entity` sub numele acesteia (`name`) |
| `attribute` | string | Opțional (obligatoriu dacă `show_attribute` este setat pe `true`) | Un atribut al entității `entity` | Atributul de afișat (de exemplu, `brightness`) |
| `select_attribute` | string | Opțional | O listă de atribute a entității `entity` (vezi opțiunile acceptate mai sus) | Această listă de atribute va deschide un meniu derulant la clic (de exemplu, `effect_list`) |
| `show_arrow` | boolean | Opțional | `true` (implicit) sau `false` | Afișează sau ascunde săgeata meniului derulant pentru sub-butoanele de tip selecție |
| `scrolling_effect` | boolean | Opțional | `true` (implicit) sau `false` | Permite textului să se deruleze atunci când conținutul depășește dimensiunea containerului |
| `tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la clic pe sub-buton, dacă nu este definit se va folosi `more-info`. |
| `double_tap_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la dublu clic pe sub-buton, dacă nu este definit se va folosi `none`. |
| `hold_action` | object | Opțional | Vezi [acțiuni](#acțiuni-la-atingere-atingere-dublă-și-apăsare-lungă) | Definește tipul de acțiune la apăsare lungă pe sub-buton, dacă nu este definit se va folosi `more-info`. |
| `fill_width` | boolean | Opțional | `true` sau `false` | Umple lățimea disponibilă (implicit: `false` pentru main, `true` pentru bottom) |
| `width` | number sau string | Opțional | Orice număr sau lungime CSS | Lățime personalizată (`px` pentru secțiunea main, `%` pentru secțiunea bottom, implicit) |
| `custom_height` | number | Opțional | Orice număr | Înălțime personalizată în pixeli |
| `content_layout` | string | Opțional | `icon-left` (implicit), `icon-top`, `icon-bottom`, `icon-right` | Plasarea pictogramei în interiorul sub-butonului |
| `always_visible` | boolean | Opțional | `true` sau `false` (implicit) | **Doar pentru slider.** Afișează întotdeauna sliderul în loc să îl deschidă la atingere |
| `show_button_info` | boolean | Opțional | `true` sau `false` (implicit) | **Doar pentru slider.** Afișează pictograma/numele/starea atunci când `always_visible` este activat |
| `visibility` | object sau list | Opțional | Vezi [condiții](#condiții) | Afișează sau ascunde sub-butonul pe baza unor condiții |
| `hide_when_parent_unavailable` | boolean | Opțional | `true` sau `false` (implicit) | Ascunde sub-butonul dacă entitatea cardului părinte este indisponibilă |
| `css_class` | string | Opțional | Orice text | O clasă CSS suplimentară pe sub-buton, ca să îl vizezi în [stilurile](#stiluri) tale oricare i-ar fi numele (de ex. `My value` dă `.my-value`) |

</details>

<details>

<summary><b>Opțiunile sub-butonului de tip slider (identice cu sliderele de buton)</b></summary>

<br>

Sub-butoanele de tip slider acceptă aceleași opțiuni de slider ca și sliderele de buton, inclusiv:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variabile CSS (vezi <a href="#stiluri">Stiluri</a>)</b></summary>

| Variabilă | Valoare așteptată | Descriere |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Raza de rotunjire pentru sub-butoane |
| `--bubble-sub-button-background-color` | `color` | Culoarea de fundal pentru sub-butoane |
| `--bubble-sub-button-outline` | `box-shadow` | Contur adăugat unui sub-buton sau unui cursor, doar când acel element se desenează în aceeași culoare ca și cardul din spate, ceea ce l-ar face invizibil (setează-l pe `none` pentru a-l elimina) |
| `--bubble-sub-slider-border-radius` | `px` | Raza de rotunjire pentru sub-butoanele de tip slider |
| `--bubble-sub-slider-background-color` | `color` | Culoarea de fundal pentru sub-butoanele de tip slider |
| `--bubble-sub-slider-height` | `px` | Înălțimea pentru sub-butoanele de tip slider mereu vizibile |
| `--bubble-sub-slider-outline` | `box-shadow` | Conturul doar al sub-butoanelor de tip slider, revine la `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Culoarea textului pe fundaluri deschise ale sub-butonului |

</details>

#### Exemple

<details>

<summary>Un buton cu câteva sub-butoane pentru a crea un card de aspirator robot (ca în captura de ecran)</summary>

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

<summary>Un buton slider cu un sub-buton care afișează luminozitatea și unul care comută lumina (ca în captura de ecran)</summary>

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

<summary>Un buton care afișează temperatura interioară și exterioară cu vremea pentru azi și mâine (captură de ecran inclusă)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Din păcate pentru mine e mereu înnorat, dar toate pictogramele se schimbă în funcție de vreme.

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

## Aspectele cardurilor

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card acceptă pe deplin vizualizarea de secțiuni a Home Assistant, puteți schimba aspectul cardului pentru a-l face mai mare și puteți modifica și numărul de coloane sau rânduri pe care cardul trebuie să le ocupe în vizualizarea de secțiuni (doar la cardurile care acceptă această opțiune). Aceste aspecte sunt de asemenea acceptate în toate celelalte tipuri de vizualizare.

<details>

<summary><b>Aspecte disponibile pentru carduri</b></summary>

| Aspect | Descriere |
| --- | --- |
| `normal` | Aspectul obișnuit (neoptimizat pentru vizualizarea de secțiuni) |
| `large` | Un aspect mai mare care se va redimensiona la numărul de rânduri selectat în vizualizarea de secțiuni (optimizat pentru vizualizarea de secțiuni) |
| `large-2-rows` | Un aspect mai mare cu 2 rânduri de sub-butoane care se va redimensiona la numărul de rânduri selectat în vizualizarea de secțiuni (optimizat pentru vizualizarea de secțiuni) |
| `large-sub-buttons-grid` | Acest aspect va afișa sub-butoanele într-o grilă, `rows` trebuie setat la cel puțin `2`.

</details>

#### Exemple

<details>

<summary>Un buton mare care afișează statistici de energie cu 2 rânduri de sub-butoane (captură de ecran inclusă)</summary>

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

<summary>Un buton mare cu mai multe rânduri și 12 sub-butoane</summary>

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

## Condiții

Unele opțiuni sunt conduse de condiții, scrise exact ca cele ale [cardului condițional](https://www.home-assistant.io/dashboards/conditional/) din Home Assistant:

- `visibility` pe un [sub-buton](#sub-butoane), pentru a-l afișa sau a-l ascunde
- `trigger` pe un [pop-up](#pop-up), pentru a-l deschide când condițiile sunt îndeplinite
- `checkConditionsMet(conditions, hass)` în [șabloanele](#șabloane) tale, când ai nevoie de răspuns în propriul cod

Este evaluat orice tip de condiție din Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, precum și grupurile `and`, `or` și `not`. Funcționează și condițiile din constructorul de condiții al Home Assistant, cele numite după domeniul lor, precum `sun.is_up`, `light.is_on`, `zone.in_zone` sau `temperature.is_value`, cu setările lor `target`, `options`, `behavior` și `for`.

<details>

<summary><b>Exemplu</b></summary>

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
> Condițiile sunt evaluate în browserul tău, așa că acele câteva care au nevoie de serverul Home Assistant nu pot fi exacte: răsăritul și apusul sunt citite din entitatea `sun.sun` în loc să fie recalculate, iar o durată `for` este măsurată de la ultima schimbare de stare, fără istoricul din recorder.
>
> `view_columns` este acceptat, dar trece întotdeauna, deoarece Bubble Card nu este niciodată cel care aranjează coloanele vizualizării tale. Un tip de condiție pe care Bubble Card nu îl cunoaște se semnalează o dată în consola browserului în loc să eșueze în tăcere, ca să deosebești o greșeală de scriere de o funcție lipsă.

<br>

---

<br>

## Acțiuni la atingere, atingere dublă și apăsare lungă

Puteți folosi de asemenea acțiunile implicite ale Home Assistant pentru atingere, atingere dublă și apăsare lungă pe cardurile care acceptă această opțiune. De exemplu, acest lucru vă permite să afișați fereastra "more info" ținând apăsată pictograma unui buton sau să rulați un serviciu atunci când este apăsat un sub-buton.

**Notă: Când este configurat un `double_tap_action`, `tap_action` obișnuit va avea o întârziere de 200ms pentru a permite detectarea
unei atingeri duble. Dacă această întârziere este nedorită, setați `double_tap_action` pe `none` pentru a dezactiva gestionarea atingerii duble.**

### Opțiunile acțiunii

<details>

<summary><b>Opțiuni (YAML + descriere)</b></summary>

| Nume | Tip | Opțiuni acceptate | Descriere |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Acțiunea de efectuat |
| `target` | object |  | Funcționează doar cu `call-service`. Respectă [sintaxa Home Assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Orice cale a dashboard-ului | Calea către care se navighează (de exemplu, `'#kitchen'` pentru a deschide un pop-up) atunci când acțiunea este definită ca navigate |
| `url_path` | string | Orice link | URL-ul de deschis la clic (de exemplu, `https://www.google.com`) atunci când acțiunea este `url` |
| `service` | string | Orice serviciu | Serviciul de apelat (de exemplu, `media_player.media_play_pause`) atunci când `action` este definit ca `call-service` |
| `data` sau `service_data` | object | Orice date de serviciu | Datele de serviciu de inclus (de exemplu, `entity_id: media_player.kitchen`) atunci când `action` este definit ca `call-service` |
| `confirmation` | object | Vezi [confirmare](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Afișează un pop-up de confirmare (nu unul Bubble Card), suprascrie obiectul `confirmation` implicit |

</details>

#### Exemplu

<details>

<summary>Un buton pentru a deschide un pop-up</summary>

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

## Stiluri

Poți adăuga stiluri personalizate pentru a modifica CSS-ul tuturor cardurilor **fără a folosi card-mod** în patru moduri:

- În editor, mergi la cardul pe care vrei să îl modifici, apoi navighează la _Opțiuni de stil > Stiluri personalizate și șabloane JS_, și adaugă stilurile tale personalizate (verifică sfaturile și exemplele de mai jos).
- În editor (sau în [YAML](#module)), mergi la cardul pe care vrei să îl modifici, apoi navighează la _Module_, apoi creează un modul nou (va fi disponibil pentru toate cardurile), sau mergi la **Module Store** pentru a instala orice modul disponibil (mai multe detalii despre module găsești [mai jos](#module)).
- Într-un fișier de [temă](https://www.home-assistant.io/integrations/frontend/#defining-themes) adăugând variabile CSS în YAML (acestea sunt disponibile în documentația fiecărui card de mai sus). Acest lucru permite modificări globale.

  <details>
  
  <summary>Exemplu</a></summary>
  
  <br>

  Nu copia linia `Bubble:`, aceasta este numele temei pe care o folosești. De asemenea, trebuie să elimini `--` din variabile.

  Trebuie să rulezi acțiunea [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) pentru a reîmprospăta tema după orice modificare.

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
  
- În YAML adăugând `styles: |` urmat de stilurile tale personalizate (verifică sfaturile și exemplele de mai jos).

> [!TIP]  
> **Pentru a înțelege ce clase de stil pot fi modificate**, poți arunca o privire în folderul [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) din acest repository. În fiecare folder de card, vei găsi un fișier numit `styles.css`. Aceste fișiere conțin toate stilurile aplicate. Acest lucru permite mult mai multe posibilități decât variabilele CSS, dar trebuie adăugat individual la fiecare card.
> 
> Poți găsi de asemenea multe [exemple din comunitate](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), sau câteva de pe [forumul Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) căutând puțin.
>
> Tema Bubble pentru Home Assistant (ca în capturile de ecran) poate fi găsită [aici](https://github.com/Clooos/Bubble).
>
> Un tutorial video urmează în curând pe [canalul meu YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Reține că este posibil să fie nevoie să adaugi `!important;` la unele stiluri CSS deja definite (vezi exemplele de mai jos).

> [!TIP]  
> Sub-butoanele pot fi vizate prin clase bazate pe nume. De exemplu, un sub-buton numit "My sub-button" poate fi stilizat cu `.my-sub-button`. Sub-butoanele de tip slider expun de asemenea `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> O clasă bazată pe nume se schimbă când redenumești un sub-buton și este tradusă odată cu numele. Setează `css_class` pe sub-buton ca să ai o clasă proprie care nu se mișcă niciodată, oricare i-ar fi numele și oricare ar fi limba.

#### Exemple

<details>

<summary>Schimbarea dimensiunii fontului pentru orice Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Schimbarea culorii de fundal a unui singur buton într-o stivă orizontală de butoane</summary>

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

<summary>Schimbarea culorii de fundal a unui card</summary>

<br>

Acesta funcționează pe toate tipurile de Bubble Card (cu excepția pop-up-urilor):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Acesta face același lucru doar într-un card de tip buton (funcționează și pentru antetul pop-up-ului): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Pentru a schimba culoarea atunci când este `on`, aruncă o privire la șabloanele de stil de mai jos.

</details>

<details>

<summary>Schimbarea culorii unui slider de buton</summary>

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

<summary>Schimbarea culorii liniei unui separator</summary>

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

<summary>Schimbarea culorii unei iconițe</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Pentru o iconiță dintr-o stivă orizontală de butoane.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Schimbarea culorii de fundal a containerului unei iconițe</summary>

<br>

Acesta funcționează pe toate tipurile de Bubble Card (cu excepția pop-up-urilor):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Acesta face același lucru pentru antetul pop-up-ului: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Schimbarea dimensiunii sub-butoanelor (perfect pentru aspectul mare)</summary>

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

<summary>Schimbarea culorii de fundal a celui de-al doilea sub-buton</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Schimbarea dimensiunii unei iconițe</summary>

<br>

Pentru iconița principală.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Pentru iconițele sub-butoanelor.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Folosirea unei imagini în loc de o iconiță într-un sub-buton</summary>

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

Încarcă pur și simplu această imagine într-un folder "pictures" (sau numele pe care îl dorești) din folderul "www" al Home Assistant.

</details>

<details>

<summary>Exemplu avansat: crearea unui rând orizontal de sub-butoane (captură de ecran inclusă)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Chiar îmi place foarte mult acesta, îl folosesc ca antet pe dashboardul meu.

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

## Șabloane

**Bubble Card nu suportă șabloane Jinja**, dar utilizatorii avansați pot adăuga șabloane în JS direct în [stilurile personalizate](#stiluri). De exemplu, acest lucru permite schimbarea dinamică a unei iconițe, a textelor sau a culorilor unui element, afișarea sau ascunderea condiționată a unui element (cum ar fi un sub-buton), sau aproape orice altceva bazat pe o stare, un atribut și multe altele.

> [!TIP]  
> Mai multe informații despre șabloanele JS [aici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Sfatul meu este să **te uiți mereu în consola browserului** pentru a fi sigur că totul funcționează corect.

> [!IMPORTANT]  
> **Toate șabloanele care nu modifică o proprietate CSS trebuie plasate la final! Cum ar fi modificarea unei iconițe, a unui text sau a oricărui element.**

#### Variabile și funcții disponibile

<details>

<summary>Variabile</summary>

<br>

Ai acces la aceste variabile în majoritatea cardurilor:

- `state` va returna starea `entity`-ului tău definit.
  
- `entity` va returna entitatea pe care ai definit-o, cum ar fi `switch.test` în acest exemplu.
  
- `icon` poate fi folosit astfel pentru a schimba iconița `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` va returna starea `entity`-ului definit pentru primul tău sub-buton, `[0]` este starea primului sub-buton, `[1]` a celui de-al doilea...
  
- `subButtonIcon[0]` poate fi folosit astfel pentru a schimba iconița primului sub-buton `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` este iconița primului sub-buton, `[1]` a celui de-al doilea...
  
- `card` va returna elementul cardului din DOM.
  
- `hass` este o variabilă avansată care îți oferă și mai mult control, de exemplu poți returna starea `light.kitchen` astfel `hass.states['light.kitchen'].state` sau un atribut astfel `hass.states[entity].attributes.brightness`.

- `this` va returna multe informații utile despre configurația și dashboardul tău, folosește-l doar dacă știi ce faci.

</details>

<details>

<summary>Funcții</summary>

<br>

Ai acces la toate funcțiile JS globale, dar ai acces și la:

- `getWeatherIcon` poate fi folosit pentru a returna o iconiță meteo bazată pe o stare care returnează vremea. De exemplu, poți face astfel `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` pentru a schimba iconița celui de-al treilea sub-buton cu iconița vremii de azi, `.forecast[1]?.condition` este pentru mâine...

  Va trebui să creezi un senzor de tip șablon pentru asta. Iată ce poți adăuga în `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` returnează `true` când o listă de [condiții](#condiții) este îndeplinită, de exemplu `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` poate fi folosit pentru a traduce o stare (poate fi folosit și pentru a obține unitatea unei stări, fără a fi nevoie să o adaugi manual).
- `hass.formatEntityAttributeValue(state, "attribute")` poate fi folosit pentru a traduce un atribut (poate fi folosit și pentru a obține unitatea unei stări, fără a fi nevoie să o adaugi manual).

</details>

#### Exemple

Poți găsi multe exemple mai jos, dar poți găsi și șabloane foarte avansate pe [pagina mea Patreon](https://www.patreon.com/c/Clooos), cum ar fi unul (favoritul meu) care permite până la patru insigne condiționate plasate în jurul iconițelor cardului. Este de asemenea o modalitate excelentă de a învăța despre toate posibilitățile stilurilor personalizate și șabloanelor din Bubble Card!

<details>
<summary>Exemple de pe pagina mea Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Adăugarea de insigne asemănătoare Home Assistant la orice card</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Afișarea datei și orei formatate într-un separator fără a folosi vreo entitate</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Afișarea stării unui sub-buton pe două linii</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalizarea etichetelor și iconițelor într-un sub-buton de tip selecție</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Adăugarea unui pop-up de reamintire persistent care apare doar când este nevoie</a>
</p>

<br>

</details>

<details>

<summary>Schimbarea culorii de fundal a unui buton care este roșu când este <code>off</code> și albastru când este <code>on</code></summary>

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

<summary>Schimbarea culorii de fundal a unui buton pe baza unei entități pentru stiva orizontală de butoane</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Afișarea/ascunderea condiționată a unui sub-buton</summary>

<br>

Acesta afișează primul sub-buton doar atunci când robotul meu de aspirat este blocat.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Acesta afișează un sub-buton atunci când bateria este sub 10%. Util cu un sub-buton care afișează "Baterie scăzută".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Schimbarea condiționată a unei iconițe sau a iconiței unui sub-buton</summary>

<br>

Acesta schimbă iconița unui buton doar atunci când un robot de aspirat este blocat.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Acesta schimbă iconița primului sub-buton doar atunci când un robot de aspirat este blocat.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Schimbarea condiționată a culorii unei iconițe sau a iconiței unui sub-buton</summary>

<br>

Acesta schimbă culoarea iconiței unui buton pe baza stării sale.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Acesta schimbă culoarea iconiței unui sub-buton pe baza stării sale. `.bubble-sub-button-1` este primul sub-buton, înlocuiește `1` dacă vrei să schimbi iconița altui sub-buton.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animarea condiționată a unei iconițe de ventilator</summary>

<br>

Acesta rotește iconița unui buton atunci când un ventilator este `on`.
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

<summary>Șablonizarea textelor (cum ar fi numele sau starea)</summary>

<br>

Acesta schimbă numele/starea unui buton cu "Momentan este senin" în funcție de vremea ta.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
sau atunci când este aplicat pentru sub-butoane:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Dacă vrei să șablonizezi starea (`.bubble-state`) nu activa `show_state: true`, activează doar `show_attribute: true` fără niciun atribut.

</details>

<details>

<summary>Exemplu avansat: schimbarea culorii unui sub-buton atunci când un pop-up este deschis</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Exemplu avansat: șablonizarea numelui unui separator pe baza unei stări traduse în limba ta</summary>

<br>

Poți folosi `hass.formatEntityState(state)` pentru a traduce o stare și `hass.formatEntityAttributeValue(state, "attribute")` pentru a traduce un atribut.

Acesta schimbă numele și iconița pe baza vremii, "Nuageux" înseamnă "Cloudy" (înnorat) în franceză.

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

## Module

Modulele sunt o funcție puternică ce îți permite să salvezi, refolosești și distribui stilurile și șabloanele tale personalizate în toate cardurile Bubble Card. În loc să copiezi și lipești același cod în mai multe carduri, poți crea un modul și îl poți aplica oriunde ai nevoie de el. Acest lucru face gestionarea aspectului dashboardului tău mult mai simplă și mai eficientă.

Dar această funcție este mult mai puternică decât atât, îți permite să adaugi funcții reale chiar tu, în editorul Bubble Card, folosind toate opțiunile implicite ale [formularului Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Selectorul de obiecte a fost îmbunătățit pentru a afișa modificările în timp real și pentru a suporta corect atributele.

Un modul poate răspunde și selectorului de carduri din Home Assistant, alături de [sugestiile de entități](#sugestii-de-entități) integrate: folosește `suggestions` pentru cardurile pe care le poate descrie dinainte și `suggestions_code` când acestea trebuie calculate din configurația ta, de exemplu un pop-up construit din toate entitățile zonei căreia îi aparține entitatea aleasă. Ambele chei sunt documentate [aici](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Poți de asemenea răsfoi **Module Store** pentru a găsi și instala [module create de comunitate](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), sau pentru a-ți distribui propriile creații!

> [!TIP]
> Codul unui modul funcționează exact la fel ca și codul din secțiunea `styles` a unui card. Toate aceleași variabile și funcții din secțiunea [Șabloane](#șabloane) sunt disponibile.

<br>

### Configurare inițială

> [!IMPORTANT]
> Începând cu v3.1.0, Bubble Card Tools este backend-ul de stocare recomandat pentru module. Metoda veche cu senzor de tip șablon funcționează în continuare pentru configurațiile existente, dar noile module și funcțiile Module Store sunt cel mai bine suportate prin Bubble Card Tools.

Integrarea Bubble Card Tools activează Editorul de Module și Module Store, și stochează modulele ca fișiere YAML individuale. Modulele existente sunt migrate automat.

Pașii de instalare și configurare sunt explicați aici:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Editorul de Module

Poți accesa Editorul de Module din setările oricărui card, în secțiunea **Module**. Editorul oferă două file principale:

#### Fila Modulele mele

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Această filă îți arată toate modulele instalate și îți permite să:

- **Aplici** module existente la cardul curent
- **Creezi** un modul nou de la zero
- **Editezi** module existente cu previzualizare în timp real
- **Ștergi** modulele de care nu mai ai nevoie
- **Cauți** și **sortezi** modulele (alfabetic, recente, active primele)
- **Setezi statutul global** pentru ca un modul să se aplice automat tuturor cardurilor
- **Imporți/exporți** module pentru backup sau distribuire
- **Scrii sugestii de entități** în editorul de module, la **Opțional: sugestii de entități**, ca modulul tău să fie propus în selectorul de carduri din Home Assistant. Atât regulile, cât și sugestiile calculate sunt verificate pe măsură ce scrii, o eroare acolo împiedică salvarea, iar previzualizarea arată cardurile sugerate pentru orice entitate alegi

#### Fila Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Această filă va afișa [toate modulele disponibile din comunitate](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), și îți permite să:

- **Răsfoiești** toate modulele create de comunitate
- **Cauți** și filtrezi modulele după nume, compatibilitate sau cuvinte cheie
- **Instalezi** module cu un singur clic
- **Actualizezi** modulele instalate atunci când sunt disponibile versiuni noi

> [!TIP]
> În editor, poți activa modulele nesuportate pentru a testa module care nu sunt încă marcate ca fiind compatibile cu un anumit tip de card.

<br>

### Cum se folosesc modulele

#### Crearea unui modul nou

<details>

<summary>Click pentru a extinde</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Mergi la editorul oricărui card și extinde secțiunea **Module**.
2. Dă clic pe **Creează un modul nou**.
3. Completează informațiile modulului.
4. Scrie codul tău CSS și/sau șablonul JavaScript în editorul **Cod**.
5. (Opțional) Creează o interfață de configurare personalizată în secțiunea **Editor** (cum ar fi selectorul de culoare din captura de ecran de mai sus, documentația completă este disponibilă [aici](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Opțional) Scrie **Sugestiile de entități** ca modulul tău să fie propus în selectorul de carduri din Home Assistant. Panoul verifică ce scrii pe măsură ce tastezi, iar previzualizarea lui arată chiar cardurile sugerate pentru entitatea aleasă de tine.
7. Dă clic pe **Salvează**.

Modulul tău este acum disponibil pentru a fi folosit pe oricare dintre cardurile tale!

<br>

</details>

#### Aplicarea unui modul la un card

<details>

<summary>Click pentru a extinde</summary>

<br>

- **Prin editor:**

  - Mergi la editorul cardului la care vrei să aplici modulul.
  - Extinde secțiunea **Module**.
  - Dă clic pe modulul pe care vrei să îl aplici din listă.
  - Sub "Aplică la", dă clic pe "Acest card". Modulul este acum activ. Poți aplica mai multe module pe același card.

- **Prin YAML:**

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

#### Aplicarea globală a unui modul

<details>

<summary>Click pentru a extinde</summary>

<br>

Poți seta un modul să se aplice automat tuturor cardurilor Bubble Card:

**Acest lucru nu este disponibil pentru modulele cu editor, deoarece acestea necesită o configurație specifică pentru a funcționa.**

- **Prin editor:**

  - În editorul de Module, găsește-ți modulul în fila **Modulele mele**.
  - Comută butonul **Toate cardurile** de lângă numele modulului.
  - Modulul va fi acum aplicat automat tuturor cardurilor.
 
- **Prin YAML:**

  În configurația YAML a modulului tău (în `bubble-modules.yaml`), adaugă pur și simplu `is_global: true`.

<br>

</details>

#### Excluderea unui singur card dintr-un modul global

<details>

<summary>Click pentru a extinde</summary>

<br>

Dacă ai un modul global dar vrei să îl excluzi dintr-un card anume:

- **Prin editor:**
  
  - În secțiunea **Module** a cardului, vei vedea modulele globale listate.
  - Dă clic pe un modul global, dezactivează "Acest card" pentru a-l exclude din acest card anume.

- **Prin YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Distribuirea modulului tău în Module Store

<details>

<summary>Click pentru a extinde</summary>

<br>

Pentru a distribui modulul tău în Module Store, în Editorul de Module, jos la "Export Module", dă clic pe "Copy for GitHub" și lipește conținutul într-o discuție nouă în categoria [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Editează descrierea** (dacă e nevoie), **exemplul** (pentru utilizatorii de YAML), și nu uita să **incluzi cel puțin o captură de ecran** pentru Module Store.

**Modulul tău devine disponibil imediat după aceea** (după o reîmprospătare a Store-ului), așa că verifică din nou că totul este scris corect și că modulul funcționează așa cum te aștepți. Poți desigur să editezi/actualizezi modulul după ce a fost distribuit.

<br>

</details>

#### Gestionarea versiunilor

<details>

<summary>Click pentru a extinde</summary>

<br>

Module Store verifică automat actualizările modulelor instalate. Când sunt disponibile actualizări:

1. Vei vedea un indicator de actualizare în fila **Module Store**.
2. Dă clic pe **Actualizează** la modulele cu actualizări disponibile.
3. Confirmă actualizarea în Module Store.

<br>

</details>

#### Definirea tipurilor de carduri suportate

<details>

<summary>Click pentru a extinde</summary>

<br>

Este posibil ca unele module să nu fie compatibile cu toate tipurile de carduri. Poți specifica ce carduri suportă un modul.  
Dacă vrei ca un modul să fie compatibil cu **toate cardurile**, omite pur și simplu câmpul `supported` (sau folosește opțiunea **Toate cardurile** din editor).

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

### Exemple

<details>
<summary>Modul de stilizare de bază</summary>

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
<summary>Modul cu configurație personalizată</summary>

<br>

Acest modul este disponibil [aici](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Mai multe exemple pot fi găsite în Module Store, sau [aici](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localizare

Bubble Card vorbește limba ta. Editorul lui este tradus în cele 64 de limbi pe care le suportă Home Assistant, iar acolo unde Home Assistant are deja un cuvânt pentru ceva, este reluată formularea lui, ca să citești aceiași termeni în ambele interfețe.

În partea de jos a editorului, lângă numărul versiunii, un comutator **Automat** urmează limba Home Assistant. Oprește-l și tot editorul revine la engleză, ceea ce este util când urmezi un tutorial sau raportezi o problemă. Alegerea ta este reținută în browser.

Și această documentație este tradusă, [în 62 de limbi](languages.md), toate în afară de engleza britanică, care folosește originalul. Acele pagini sunt deschise tuturor, așa că o formulare care nu se potrivește cu propriul tău Home Assistant poate fi corectată din câteva clicuri. Versiunea engleză rămâne referința pentru conținutul în sine.

<br>

---

<br>

## Ajutor

Simte-te liber să deschizi o problemă (issue) dacă ceva nu funcționează cum te aștepți. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Ai întrebări sau păreri despre Bubble Card? Vrei să îți distribui dashboardurile sau descoperirile? Poți merge pe forumul Home Assistant, pe subredditul Bubble Card sau în secțiunea GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Contribuții

Contribuțiile sunt binevenite! Fie că este vorba de corectarea unor erori, funcții noi, traduceri sau îmbunătățiri ale documentației, simte-te liber să deschizi un pull request.

Înainte de a începe, te rugăm să citești [ghidul pentru dezvoltatori](DEVELOPERS.md) care acoperă cum să îți configurezi mediul local, să construiești proiectul și să îți testezi modificările.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donații

Dedic cea mai mare parte a timpului meu liber pentru a face acest proiect cât mai bun posibil. Așa că, dacă apreciezi munca mea, orice donație ar fi o modalitate excelentă de a-mi arăta susținerea ta 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Mulțumesc tuturor pentru susținere, voi toți sunteți cea mai mare motivație a mea!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
