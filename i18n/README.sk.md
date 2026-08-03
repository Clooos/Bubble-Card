<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Táto stránka je automatický preklad. V prípade pochybností platí [pôvodná anglická dokumentácia](../README.md). Znie niektorá veta zvláštne? Každá pomoc je vítaná a [oprava tejto stránky](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.sk.md) zaberie len minútu: GitHub sa postará o fork aj o pull request. Vopred ďakujeme! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Čítať v inom jazyku](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card je minimalistická a prispôsobiteľná kolekcia kariet pre Home Assistant, ktorá ponúka moderné pop-up okná a integrovaný Module Store s viac ako 100 modulmi vytvorenými komunitou.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Obsah

**[`Inštalácia`](#inštalácia)**  **[`Konfigurácia`](#konfigurácia)**  **[`Pop-up`](#pop-up)**  **[`Horizontálny zásobník tlačidiel`](#horizontálny-zásobník-tlačidiel)**  **[`Tlačidlo`](#tlačidlo)**  **[`Prehrávač médií`](#prehrávač-médií)**  **[`Rolety`](#rolety)**  **[`Select`](#select)**  **[`Klimatizácia`](#klimatizácia)**  **[`Kalendár`](#kalendár)**  **[`Oddeľovač`](#oddeľovač)**  **[`Prázdny stĺpec`](#prázdny-stĺpec)**  **[`Iba podtlačidlá`](#iba-podtlačidlá)**  **[`Podtlačidlá`](#podtlačidlá)**  **[`Rozloženia karty`](#rozloženia-karty)**  **[`Akcie`](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania)**  **[`Štýly`](#štýly)**  **[`Šablóny`](#šablóny)**  **[`Moduly`](#moduly)**  **[`Pomoc`](#pomoc)**  **[`Prispievanie`](#prispievanie)**  **[`Darovať`](#darovať)**

<br>

## Inštalácia

**Najnižšia podporovaná verzia Home Assistant:** 2023.9.0

<details>

<summary>Bez HACS</summary>

<br>

1. Stiahnite tento súbor: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Pridajte tento súbor do priečinka `<config>/www`
3. Na svojom dashboarde kliknite na ikonu vpravo hore a potom na `Upraviť dashboard`
4. Znova kliknite na túto ikonu a potom kliknite na `Spravovať zdroje`
5. Kliknite na `Pridať zdroj`
6. Skopírujte a vložte toto: `/local/bubble-card.js?v=1`
7. Kliknite na `JavaScript Module` a potom na `Vytvoriť`
8. Vráťte sa späť a obnovte stránku
9. Teraz môžete kliknúť na `Pridať kartu` vpravo dole a vyhľadať `Bubble Card`
10. Po každej aktualizácii súboru budete musieť upraviť `/local/bubble-card.js?v=1` a zmeniť verziu na akékoľvek vyššie číslo

Ak to nefunguje, skúste vymazať vyrovnávaciu pamäť prehliadača.

</details>

<details>

<summary>S HACS (odporúčané)</summary>

<br>

Táto metóda vám umožňuje dostávať aktualizácie priamo cez Home Assistant Community Store

1. Ak ešte nemáte nainštalované HACS, stiahnite si ho podľa pokynov na [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Prejdite k základnej konfigurácii HACS podľa pokynov na [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. V bočnom paneli prejdite na "HACS"
4. Vyhľadajte "Bubble Card", alebo kliknite na modré tlačidlo nižšie
5. Kliknite na "Stiahnuť"
6. Vráťte sa na svoj dashboard, kliknite na ikonu vpravo hore a potom na `Upraviť dashboard`
7. Teraz môžete kliknúť na `Pridať kartu` vpravo dole a vyhľadať `Bubble Card`

Ak to nefunguje, skúste vymazať vyrovnávaciu pamäť prehliadača/aplikácie (na všetkých vašich zariadeniach, ak je to potrebné).

#### Videá

Môžete tiež pozrieť môj YouTube kanál pre podrobné videonávody.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurácia

Všetky možnosti je možné nastaviť v editore Home Assistant. Podrobnosti a YAML však nájdete v dokumentácii nižšie.

<details>

<summary><b>Hlavné možnosti (YAML + popis)</b></summary>

| Názov | Typ | Požiadavka | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `type` | string | **Povinné** | `custom:bubble-card` | Typ karty |
| `card_type` | string | **Povinné** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` alebo `sub-buttons` | Typ karty Bubble Card, pozri nižšie |
| `styles` | object list | Voliteľné | Akékoľvek CSS štýly | Umožňuje prispôsobiť CSS vašej Bubble Card, pozri [Štýly](#štýly) |

</details>

<details>

<summary><b>Globálne CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Premenná | Očakávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Polomer zaoblenia rohov pre všetky podporované prvky |
| `--bubble-main-background-color` | `color` | Hlavná farba pozadia pre všetky podporované prvky |
| `--bubble-secondary-background-color` | `color` | Sekundárna farba pozadia pre všetky podporované prvky |
| `--bubble-accent-color` | `color` | Zvýrazňujúca farba pre všetky podporované prvky |
| `--bubble-icon-border-radius` | `px` | Polomer zaoblenia ikony pre všetky podporované prvky |
| `--bubble-icon-background-color` | `color` | Farba pozadia ikony pre všetky podporované prvky |
| `--bubble-sub-button-border-radius` | `px` | Polomer zaoblenia rohov pre všetky podtlačidlá |
| `--bubble-sub-button-background-color` | `color` | Farba pozadia pre všetky podtlačidlá |
| `--bubble-box-shadow` | pozri [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň pre všetky podporované prvky |
| `--bubble-border` | pozri [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Orámovanie pre všetky podporované karty |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Pozrite si toto [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) a spoznajte Bubble Card a jej možnosti.** Môj YouTube kanál je pomerne nový a zameriava sa na tutoriály o Home Assistant a Bubble Card. Neváhajte sa prihlásiť na odber, pomôžete tak zvýšiť viditeľnosť môjho kanála. Vopred ďakujem!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Táto karta umožňuje vytvoriť pop-up s akýmkoľvek obsahom. Každý pop-up je **predvolene skrytý** a dá sa otvoriť cielením na jeho odkaz (napr. `'#pop-up-name'`), pomocou akejkoľvek karty, ktorá podporuje akciu [`navigate`](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania), alebo pomocou [horizontálneho zásobníka tlačidiel](#horizontálny-zásobník-tlačidiel), ktorý je súčasťou balíka.

> [!TIP]
> ### Spúšťač pop-upu 
> Táto funkcia umožňuje otvoriť pop-up na základe stavu ľubovoľnej entity, napríklad môžete otvoriť pop-up "Zabezpečenie" s kamerou, keď je pred vaším domom osoba. Môžete tiež vytvoriť prepínací pomocník (input_boolean) a spúšťať jeho otváranie/zatváranie v automatizácii.
> <details>
> <summary>Otvorenie pop-upu, keď je <code>binary_sensor</code> v stave <code>on</code></summary>
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
> ### Rôzne spôsoby zatvorenia pop-upu 
> Existuje veľa spôsobov, ako zatvoriť pop-up. Môžete napríklad prejsť prstom z hlavičky pop-upu smerom nadol, urobiť dlhé potiahnutie vo vnútri pop-upu smerom nadol, stlačiť Escape na počítači, odstrániť hash z URL adresy alebo jednoducho stlačiť tlačidlo zatvorenia.
>


### Možnosti pop-upu

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Názov | Typ | Požiadavka | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `hash` | string | **Povinné** | Akýkoľvek jedinečný hash (napr. `'#kitchen'`) s ' ' | Takto svoj pop-up otvoríte |
| `popup_style` | string | Voliteľné | `bubble` (predvolené) alebo `classic` | Určuje vizuálny štýl pop-upu |
| `popup_mode` | string | Voliteľné | `default` (predvolené), `fit-content`, `centered` alebo `adaptive-dialog` | Určuje režim rozloženia pop-upu |
| `with_bottom_offset` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Používa sa iba s `popup_mode: fit-content` alebo `adaptive-dialog`. Aplikuje spodný odsadenie na mobile, užitočné, keď váš dashboard obsahuje pätu karty. |
| `full_width_on_mobile` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Používa sa iba s `popup_mode: centered`. Rozšíri pop-up na celú šírku obrazovky na mobile, užitočné na menších displejoch. |
| `performance_mode` | string | Voliteľné | `default` (predvolené) alebo `performance` | Optimalizuje otváraciu animáciu pop-upu. `performance` mierne oneskorí vykreslenie obsahu a rozostrenie pozadia, tiež vypne rozostrenie podkladu, ak je nastavené. |
| `auto_close` | string | Voliteľné | Časový limit v milisekundách (napr. `10000` pre 10 s) | Automaticky zatvorí pop-up po uplynutí časového limitu |
| `close_on_click` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Automaticky zatvorí pop-up po akejkoľvek interakcii |
| `close_by_clicking_outside` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Zatvorí pop-up kliknutím mimo neho |
| `width_desktop` | string | Voliteľné | Akákoľvek CSS hodnota | Šírka na počítači (`100%` predvolene na mobile) |
| `margin` | string | Voliteľné | Akákoľvek CSS hodnota | Použite toto **iba** ak váš pop-up nie je dobre vycentrovaný na mobile (napr. `13px`) |
| `margin_top_mobile` | string | Voliteľné | Akákoľvek CSS hodnota | Horné odsadenie na mobile (napr. `-56px`, ak je vaša hlavička skrytá) |
| `margin_top_desktop` | string | Voliteľné | Akákoľvek CSS hodnota | Horné odsadenie na počítači (napr. `50vh` pre pop-up polovičnej veľkosti alebo `calc(100vh - 400px)` pre pevnú výšku `400px`) |
| `bg_color` | string | Voliteľné | Akákoľvek hex, rgb alebo rgba hodnota | Farba pozadia vášho pop-upu (napr. `#ffffff` pre biele pozadie) |
| `bg_opacity` | string | Voliteľné | Akákoľvek hodnota od `0` do `100` | Priehľadnosť pozadia vášho pop-upu (napr. `100` pre žiadnu priehľadnosť) |
| `bg_blur` | string | Voliteľné | Akákoľvek hodnota od `0` do `100` | Efekt rozostrenia pozadia vášho pop-upu, **funguje iba ak `bg_opacity` nie je nastavené na `100`** (napr. `0` pre žiadne rozostrenie)|
| `shadow_opacity` | string | Voliteľné | Akákoľvek hodnota od `0` do `100` | Priehľadnosť tieňa vášho pop-upu (napr. `0` na jeho skrytie) |
| `hide_backdrop` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Nastavte na true pre prvý pop-up vášho hlavného dashboardu, aby ste vypli podklad pre všetky pop-upy. |
| `background_update` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Aktualizuje obsah pop-upu na pozadí (neodporúča sa) |
| `trigger_entity` | string | Voliteľné | Akákoľvek entita | Otvorí tento pop-up na základe stavu ľubovoľnej entity |
| `trigger_state` | string | Voliteľné (**Povinné**, ak je definované `trigger_entity`) | Akýkoľvek stav entity | Stav entity na otvorenie pop-upu |
| `trigger_close` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zatvorí pop-up, keď je `trigger_state` odlišný |
| `open_action` | object | Voliteľné | Pozri [akcie](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Spustí akciu pri otváraní pop-upu |
| `close_action` | object | Voliteľné | Pozri [akcie](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Spustí akciu pri zatváraní pop-upu |
| `show_header` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Zobrazí/skryje celú hlavičku pop-upu |
| `show_previous_button` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zobrazí tlačidlo späť vedľa tlačidla zatvorenia a v prípade dostupnosti sa vráti na predchádzajúci pop-up |
| `show_close_button` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Zobrazí alebo skryje tlačidlo zatvorenia, pričom zvyšok hlavičky zostane viditeľný |
| `buttons_position` | string | Voliteľné | `right` (predvolené) alebo `left` | Pozícia tlačidiel zatvorenia a späť v hlavičke |
| `cards` | list | Voliteľné | Akákoľvek Bubble Card, karta Home Assistant alebo vlastná karta | Určuje obsah vášho pop-upu. Pozri príklad pop-upu nižšie. |
| Máte tiež prístup ku [všetkým nastaveniam tlačidla](#tlačidlo) pre hlavičku pop-upu. | | Voliteľné | | Ak nie je definované, hlavička sa nezobrazí |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Premenná | Očakávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Polomer zaoblenia rohov pop-upu |
| `--bubble-pop-up-main-background-color` | `color` | Hlavná farba pozadia pre podporované prvky pop-upu |
| `--bubble-pop-up-background-color` | `color` | Farba pozadia pop-upu |
| `--bubble-backdrop-background-color` | `color` | Farba pozadia podkladu |
| Máte tiež prístup ku [všetkým CSS premenným tlačidla](#možnosti-tlačidla) pre hlavičku pop-upu. | | |

</details>


### Samostatný formát pop-upu (v3.2.0+)

Od verzie 3.2.0 pop-upy používajú nový samostatný formát, kde sú obsahové karty definované priamo vnútri pop-upu pomocou možnosti `cards`. To prináša lepší výkon a nový zážitok z úpravy pomocou drag-and-drop na základe sekcií.


#### Príklady

<details>

<summary>Pop-up (samostatný formát)</summary>

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

<summary>Tlačidlo na otvorenie pop-upu</summary>

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

## Horizontálny zásobník tlačidiel

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Táto karta je dobrým doplnkom karty pop-up a umožňuje otvárať zodpovedajúce pop-upy. Umožňuje tiež otvoriť ľubovoľnú stránku vášho dashboardu. Okrem toho môžete pridať svoje senzory pohybu/obsadenosti, aby sa poradie tlačidiel prispôsobilo podľa miestnosti, do ktorej ste práve vstúpili. Táto karta je posúvateľná, zostáva viditeľná a funguje ako päta.

> [!IMPORTANT]  
> Táto karta musí byť posledná vo vašom zobrazení (za všetkými kartami a pop-upmi). Nemôže byť vnútri žiadneho zásobníka.

### Možnosti horizontálneho zásobníka tlačidiel

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Názov | Typ | Požiadavka | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Povinné** | Hash pop-upu (napr. `'#kitchen'`) s ' ' alebo akýkoľvek odkaz | Odkaz na otvorenie |
| `1_name` | string | Voliteľné | Akýkoľvek reťazec | Názov vášho tlačidla |
| `1_icon` | string | Voliteľné | Akákoľvek ikona `mdi:` | Ikona vášho tlačidla |
| `1_entity` | string | Voliteľné | Akékoľvek svetlo alebo skupina svetiel | Zobrazí farbu daného svetla na pozadí |
| `1_pir_sensor` | string | Voliteľné | Akýkoľvek binárny senzor | Aspoň jeden pir senzor alebo viac pre `auto_order`, v skutočnosti to funguje aj s akýmkoľvek typom entity, napríklad môžete pridať skupiny svetiel a poradie sa zmení na základe času poslednej zmeny stavu. |
| `auto_order` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zmení poradie tlačidiel podľa času poslednej zmeny `_pir_sensor`, **musí byť `false`, ak vo vašom kóde nemáte žiadny `_pir_sensor`** |
| `margin` | string | Voliteľné | Akákoľvek CSS hodnota | Použite toto **iba** ak váš `horizontal-buttons-stack` nie je dobre vycentrovaný na mobile (napr. `13px`) |
| `width_desktop` | string | Voliteľné | Akákoľvek CSS hodnota | Šírka na počítači (`100%` predvolene na mobile) |
| `is_sidebar_hidden` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Opraví pozíciu horizontálneho zásobníka tlačidiel, ak je bočný panel skrytý na počítači (iba ak ste ho sami upravili tak, aby bol skrytý) |
| `rise_animation` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Nastavte na `false` na vypnutie animácie, ktorá sa aktivuje po načítaní stránky |
| `highlight_current_view` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zvýrazní aktuálny hash / zobrazenie plynulou animáciou |
| `hide_gradient` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Nastavte na `false` na skrytie prechodu (gradientu) |

> [!IMPORTANT]  
> Premenné začínajúce číslom definujú vaše tlačidlá, jednoducho zmeňte toto číslo, aby ste pridali ďalšie tlačidlá (pozri príklad nižšie).

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Premenná | Očakávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Polomer zaoblenia rohov pre tlačidlá horizontálneho zásobníka tlačidiel |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Farba pozadia pre tlačidlá horizontálneho zásobníka tlačidiel |

</details>


#### Príklad

<details>

<summary>Horizontálny zásobník tlačidiel, ktorý sa reorganizuje na základe senzorov obsadenosti</summary>

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

## Tlačidlo

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Táto karta je veľmi univerzálna. Dá sa použiť ako **prepínač**, **posuvník**, **stav** alebo tlačidlo typu **názov/text**.

> [!TIP]
> ### Aké sú rozdiely medzi jednotlivými typmi tlačidiel?
>
> - **Prepínacie tlačidlo:** Toto je predvolený typ tlačidla. V predvolenom nastavení prepína entitu a jeho farba pozadia sa mení podľa stavu entity alebo farby svetla. Jeho akciu môžete zmeniť v sekcii **Akcia po ťuknutí na kartu**.
>
> - **Posuvné tlačidlo:** Tento typ tlačidla umožňuje ovládať entity s nastaviteľným rozsahom. Je ideálny na stmievanie svetiel a jeho farba výplne sa prispôsobí farbe svetla. Môžete ho tiež použiť na zobrazenie hodnôt, napríklad úrovne batérie.
>   Podporované entity pre posuvníky:
>   - Svetlo (jas)
>   - Prehrávač médií (hlasitosť)
>   - Rolety (poloha)
>   - Ventilátor (percento)
>   - Klimatizácia (teplota)
>   - Input number a number (hodnota)
>   - Senzor batérie (percento, iba na čítanie)
>
>   Môžete tiež použiť ľubovoľnú entitu s číselným stavom, ak vypnete filter entít v nastavení **Nastavenia posuvníka** a potom definujete hodnoty `min` a `max`. Táto možnosť je iba na čítanie.
>
> - **Stavové tlačidlo:** Ideálne na zobrazenie informácií zo senzora alebo akejkoľvek entity. Po stlačení sa zobrazí panel „Viac informácií“ danej entity. Jeho farba pozadia sa nemení.
>
> - **Tlačidlo Názov/Text:** Jediný typ tlačidla, ktorý nepotrebuje entitu. Umožňuje zobraziť krátky text, názov alebo titulok. Môžete k nemu tiež pridať akcie. Jeho farba pozadia sa nemení.

### Možnosti tlačidla

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entita na ovládanie |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Správanie vášho tlačidla |
| `name` | string | Optional | Any string | Názov vášho tlačidla, ak nie je definovaný, zobrazí sa názov entity |
| `icon` | string | Optional | Any `mdi:` icon | Ikona pre vaše tlačidlo, ak nie je definovaná, zobrazí sa ikona entity alebo `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Uprednostní ikonu pred `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Iba pre svetlá.** Použije zvýrazňovaciu farbu témy namiesto farby svetla.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Zobrazí alebo skryje stav vašej `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje názov |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej zmeny vašej `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej aktualizácie vašej `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Zobrazí atribút vašej `entity` pod jej `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribút, ktorý sa má zobraziť (napr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Umožní posúvanie textu, keď obsah presiahne veľkosť kontajnera |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Umožňuje zmeniť predvolené akcie po kliknutí na tlačidlo. |
| `tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po kliknutí na ikonu, ak nie je definovaná, použije sa `more-info` |
| `double_tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po dvojitom kliknutí na ikonu, ak nie je definovaná, použije sa `none` |
| `hold_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po podržaní ikony, ak nie je definovaná, použije sa `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Optional | Any number | Počet riadkov (výška) (napr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#podtlačidlá) | Pridá vlastné tlačidlá pripevnené vpravo |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Hlavná farba pozadia pre podporované prvky v tlačidle |
| `--bubble-button-border-radius` | `px` | Polomer zaoblenia rohov pre tlačidlo |
| `--bubble-button-icon-border-radius` | `px` | Polomer zaoblenia rohov pre kontajner ikony tlačidla |
| `--bubble-button-icon-background-color` | `color` | Farba pozadia pre kontajner ikony tlačidla |
| `--bubble-light-white-color` | `color` | Nahradí predvolenú bielu farbu tlačidiel/posuvníkov svetla |
| `--bubble-light-color` | `color` | Nahradí farbu tlačidiel/posuvníkov svetla (aj RGB svetiel) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň pre tlačidlo |

</details>

Tieto možnosti sú dostupné iba vtedy, keď je `button_type` nastavený na `slider`.

<details>

<summary><b>Možnosti posuvníka (YAML + popisy)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Minimálna hodnota posuvníka. Pre vlastné posuvníky.                                                    |
| `max_value`             | number  | Optional                        | Maximálna hodnota posuvníka. Pre vlastné posuvníky.                                                    |
| `step`                  | number  | Optional                        | Krok hodnoty posuvníka.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Zapne predchádzajúce správanie posuvníka, kde ho aktivujete ťuknutím namiesto podržania.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Aktualizuje hodnotu relatívne voči počiatočnej hodnote namiesto počiatočného bodu dotyku.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Nastaví posuvník iba na čítanie. Automaticky sa zapne pre niektoré entity, napríklad senzory.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Stav entity sa aktualizuje počas posúvania. **Táto funkcia sa neodporúča pre všetky entity.**        |
| `slider_fill_orientation` | string | Optional | `left` (default), `right`, `top`, `bottom` | Zmení smer výplne posuvníka |
| `slider_value_position` | string | Optional | `right` (default), `left`, `center`, `hidden` | Pozícia zobrazenia hodnoty |
| `invert_slider_value` | boolean | Optional (`false` default) | Obráti smer posuvníka (100 % výplň sa rovná minimu). Nedostupné pre farebné posuvníky. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Iba pre svetlá.** Vyberie režim posuvníka |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Iba pre rolety.** Vyberie režim posuvníka (poloha alebo naklonenie) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Iba pre svetlá (režim Hue).** Vynúti sýtosť pri úprave odtieňa |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Iba pre svetlá (režim Hue).** Vynútená hodnota sýtosti (0 - 100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Iba pre svetlá (režim Jas).** Použije zvýrazňovaciu farbu témy namiesto farby svetla |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Iba pre svetlá.** Umožní posuvníku dosiahnuť 0 %, čo vypne svetlo. Nedostupné s `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Iba pre svetlá.** Zapne plynulé prechody jasu pre podporované svetlá.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Iba pre svetlá.** Doba prechodu v milisekundách. Vyžaduje `light_transition: true`.            |

</details>

#### Príklady

<details>

<summary>Posuvné tlačidlo, ktoré môže ovládať jas svetla</summary>

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

<summary>Tlačidlo s ďalšími možnosťami</summary>

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

## Prehrávač médií

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Táto karta vám umožňuje ovládať entitu prehrávača médií.

### Možnosti prehrávača médií

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Prehrávač médií na ovládanie |
| `name` | string | Optional | Any string | Názov vášho prehrávača médií, ak nie je definovaný, zobrazí sa názov entity |
| `icon` | string | Optional | Any `mdi:` icon | Ikona pre váš prehrávač médií, ak nie je definovaná, zobrazí sa ikona entity alebo `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Uprednostní ikonu pred `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Zobrazí alebo skryje stav vašej `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje názov |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej zmeny vašej `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej aktualizácie vašej `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Zobrazí atribút vašej `entity` pod jej `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribút, ktorý sa má zobraziť (napr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Umožní posúvanie textu, keď obsah presiahne veľkosť kontajnera |
| `min_volume` | number | Optional | Any number | Minimálna hodnota posuvníka hlasitosti. |
| `max_volume` | number | Optional | Any number | Maximálna hodnota posuvníka hlasitosti. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Použije rozmazaný obal média ako pozadie karty. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Umožňuje zmeniť predvolené akcie po kliknutí na tlačidlo. |
| `tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po kliknutí na ikonu, ak nie je definovaná, použije sa `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po dvojitom kliknutí na ikonu, ak nie je definovaná, použije sa `none`. |
| `hold_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po podržaní ikony, ak nie je definovaná, použije sa `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Presunie tlačidlá akcií obalu na spodok (pevne) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Nastaví spodné akčné tlačidlá na plnú šírku (predvolené: `true`, keď je pozícia `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Zarovnanie spodných akčných tlačidiel, keď nie sú na plnú šírku |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Optional | Any number | Počet riadkov (výška) (napr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#podtlačidlá) | Pridá vlastné tlačidlá pripevnené vpravo |
| `hide` | object | Optional | See below | Skryje tlačidlá z karty |

#### Možnosti skrytia

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Skryje tlačidlo prehrať/pozastaviť |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Skryje tlačidlo hlasitosti |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Skryje tlačidlo predchádzajúcej skladby |
| `next_button` | boolean | Optional | `true` or `false` (default) | Skryje tlačidlo ďalšej skladby |
| `power_button` | boolean | Optional | `true` or `false` (default) | Skryje tlačidlo napájania |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Hlavná farba pozadia pre prehrávač médií |
| `--bubble-media-player-border-radius` | `px` | Polomer zaoblenia rohov pre prehrávač médií |
| `--bubble-media-player-buttons-border-radius` | `px` | Polomer zaoblenia rohov pre tlačidlá prehrávača médií |
| `--bubble-media-player-slider-background-color` | `color` | Farba pozadia pre posuvník hlasitosti |
| `--bubble-media-player-icon-border-radius` | `px` | Polomer zaoblenia rohov pre kontajner ikony prehrávača médií |
| `--bubble-media-player-icon-background-color` | `color` | Farba pozadia pre kontajner ikony prehrávača médií |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň pre prehrávač médií |

</details>


#### Príklady

<details>

<summary>Prehrávač médií so všetkými možnosťami</summary>

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

## Rolety

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Táto karta vám umožňuje ovládať vaše entity `cover`.

### Možnosti roliet

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Roleta na ovládanie |
| `name` | string | Optional | Any string | Názov vašej rolety, ak nie je definovaný, zobrazí sa názov entity |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Uprednostní ikonu pred `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Zobrazí alebo skryje stav vašej `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje názov |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej zmeny vašej `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej aktualizácie vašej `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Zobrazí atribút vašej `entity` pod jej `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribút, ktorý sa má zobraziť (napr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Umožní posúvanie textu, keď obsah presiahne veľkosť kontajnera |
| `icon_open` | string | Optional | Any `mdi:` icon | Ikona pre otvorenú roletu, ak nie je definovaná, zobrazí sa predvolená ikona otvorenej rolety |
| `icon_close` | string | Optional | Any `mdi:` icon | Ikona pre zatvorenú roletu, ak nie je definovaná, zobrazí sa predvolená ikona zatvorenej rolety |
| `icon_up` | string | Optional | Any `mdi:` icon | Ikona pre tlačidlo otvorenia rolety, ak nie je definovaná, zobrazí sa predvolená ikona otvorenej rolety |
| `icon_down` | string | Optional | Any `mdi:` icon | Ikona pre tlačidlo zatvorenia rolety, ak nie je definovaná, zobrazí sa predvolená ikona zatvorenej rolety |
| `open_service` | string | Optional | Any service or script | Služba na otvorenie rolety, predvolene `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Služba na zastavenie rolety, predvolene `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Služba na zatvorenie rolety, predvolene `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Pozícia tlačidiel na ovládanie naklonenia (zobrazí sa iba ak roleta podporuje naklonenie) |
| `open_tilt_service` | string | Optional | Any service or script | Služba na otvorenie naklonenia, predvolene `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Služba na zatvorenie naklonenia, predvolene `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Umožňuje zmeniť predvolené akcie po kliknutí na tlačidlo. |
| `tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po kliknutí na ikonu, ak nie je definovaná, použije sa `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po dvojitom kliknutí na ikonu, ak nie je definovaná, použije sa `none`. |
| `hold_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po podržaní ikony, ak nie je definovaná, použije sa `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Presunie ovládacie prvky médií na spodok (pevne) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Nastaví spodné ovládacie prvky na plnú šírku (predvolené: `true`, keď je pozícia `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Zarovnanie spodných ovládacích prvkov, keď nie sú na plnú šírku |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Optional | Any number | Počet riadkov (výška) (napr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#podtlačidlá) | Pridá vlastné tlačidlá pripevnené vpravo |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Hlavná farba pozadia pre podporované prvky v karte rolety |
| `--bubble-cover-border-radius` | `px` | Polomer zaoblenia rohov pre kartu rolety |
| `--bubble-cover-icon-border-radius` | `px` | Polomer zaoblenia rohov pre kontajner ikony karty rolety |
| `--bubble-cover-icon-background-color` | `color` | Farba pozadia pre kontajner ikony karty rolety |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň pre kartu rolety |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň pre tlačidlá v karte rolety |

</details>


#### Príklad

<details>

<summary>Karta, ktorá dokáže ovládať roletu</summary>

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

Táto karta vám umožňuje pridať rozbaľovaciu ponuku pre vaše entity `input_select` / `select`. Táto karta tiež podporuje podtlačidlá a všetky bežné funkcie Bubble Card.

> [!TIP]
> Ak chcete, môžete mať aj podtlačidlá select, táto funkcia je dostupná vo všetkých kartách, ktoré podporujú podtlačidlá.

### Možnosti select

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entita na ovládanie |
| `name` | string | Optional | Any string | Názov vášho select, ak nie je definovaný, zobrazí sa názov entity |
| `icon` | string | Optional | Any `mdi:` icon | Ikona pre váš select, ak nie je definovaná, zobrazí sa ikona entity alebo `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Uprednostní ikonu pred `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Zobrazí alebo skryje stav vašej `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje názov |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Zobrazí alebo skryje ikonu |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej zmeny vašej `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Zobrazí čas poslednej aktualizácie vašej `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Zobrazí atribút vašej `entity` pod jej `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribút, ktorý sa má zobraziť (napr. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Umožní posúvanie textu, keď obsah presiahne veľkosť kontajnera |
| `tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po kliknutí na ikonu, ak nie je definovaná, použije sa `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po dvojitom kliknutí na ikonu, ak nie je definovaná, použije sa `none`. |
| `hold_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po podržaní ikony, ak nie je definovaná, použije sa `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Optional | Any number | Počet riadkov (výška) (napr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#podtlačidlá) | Pridá vlastné tlačidlá pripevnené vpravo |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Hlavná farba pozadia pre podporované prvky v karte select |
| `--bubble-select-background-color` | `color` | Farba pozadia pre kartu select |
| `--bubble-select-list-border-radius` | `px` | Polomer zaoblenia rohov pre rozbaľovaciu ponuku v karte |
| `--bubble-select-list-item-accent-color` | `color` | Zvýrazňovacia farba pre vybratú položku |
| `--bubble-select-list-background-color` | `color` | Farba pozadia pre rozbaľovaciu ponuku v karte |
| `--bubble-select-list-width` | `px` | Šírka rozbaľovacej ponuky v karte |
| `--bubble-select-arrow-background-color` | `color` | Farba pozadia pre šípku rozbaľovacej ponuky |
| `--bubble-select-button-border-radius` | `px` | Polomer zaoblenia rohov pre tlačidlo select |
| `--bubble-select-border-radius` | `px` | Polomer zaoblenia rohov pre kartu select |
| `--bubble-select-icon-border-radius` | `px` | Polomer zaoblenia rohov pre kontajner ikony karty select |
| `--bubble-select-icon-background-color` | `color` | Farba pozadia pre kontajner ikony karty select |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň pre kartu select |

</details>


#### Príklady

<details>

<summary>Karta select so zoznamom scén</summary>

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

## Klimatizácia

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Táto karta vám umožňuje ovládať vaše entity `climate`.

> [!TIP]
> Ponuka výberu režimu je [podtlačidlo](#podtlačidlá), ktoré sa automaticky pridá pri vytváraní karty. Následne ho môžete upraviť alebo odstrániť podľa potreby.

### Možnosti klimatizácie

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Entita na ovládanie (napr. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Vlastný názov karty. Ak nie je definovaný, zobrazí sa názov entity.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Vlastná ikona karty. Ak nie je definovaná, použije sa ikona entity alebo `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Uprednostní ikonu pred `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Zobrazí alebo skryje aktuálny stav `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Zobrazí alebo skryje názov entity.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Zobrazí alebo skryje ikonu.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Skryje ovládanie dolnej cieľovej teploty, ak ho `entity` podporuje.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Skryje ovládanie hornej cieľovej teploty, ak ho `entity` podporuje.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Použije stálu farbu pozadia, keď je entita klimatizácie zapnutá.                                              |
| `step` | number | Optional | Any number | Krok teploty. |
| `min_temp` | number | Optional | Any number | Minimálna teplota. |
| `max_temp` | number | Optional | Any number | Maximálna teplota. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Umožňuje zmeniť predvolené akcie po kliknutí na tlačidlo. |
| `tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po kliknutí na ikonu, ak nie je definovaná, použije sa `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po dvojitom kliknutí na ikonu, ak nie je definovaná, použije sa `none`. |
| `hold_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po podržaní ikony, ak nie je definovaná, použije sa `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Presunie akčné tlačidlá klimatizácie na spodok (pevne) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Nastaví spodné akčné tlačidlá na plnú šírku (predvolené: `true`, keď je pozícia `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Zarovnanie spodných akčných tlačidiel, keď nie sú na plnú šírku |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Optional | Any number | Počet riadkov (výška) (napr. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#podtlačidlá)                | Pridáva vlastné tlačidlá pripevnené vpravo. Užitočné pre ponuku výberu režimu klimatizácie.                                  |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Hlavná farba pozadia pre podporované prvky v karte klimatizácie |
| `--bubble-climate-border-radius` | `px` | Polomer zaoblenia rohov pre podporované prvky karty klimatizácie |
| `--bubble-climate-button-background-color` | `color` | Farba pozadia pre tlačidlá karty klimatizácie |
| `--bubble-climate-icon-border-radius` | `px` | Polomer zaoblenia rohov pre kontajner ikony karty klimatizácie |
| `--bubble-state-climate-fan-only-color` | `color` | Farba prekrytia pre stav iba ventilátor |
| `--bubble-state-climate-dry-color` | `color` | Farba prekrytia pre stav sušenia |
| `--bubble-state-climate-cool-color` | `color` | Farba prekrytia pre stav chladenia |
| `--bubble-state-climate-heat-color` | `color` | Farba prekrytia pre stav kúrenia |
| `--bubble-state-climate-auto-color` | `color` | Farba prekrytia pre automatický stav |
| `--bubble-state-climate-heat-cool-color` | `color` | Farba prekrytia pre stav kúrenie-chladenie |
| `--bubble-climate-accent-color` | `color` | Zvýrazňovacia farba pre kartu klimatizácie |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň pre kontajner klimatizácie. |

</details>


#### Príklady

<details>

<summary>Karta klimatizácie s rozbaľovacou ponukou režimov HVAC</summary>

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

## Kalendár

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Táto karta vám umožňuje zobraziť vaše entity kalendára. Jej obsah je posúvateľný, takže môžete jednoducho prehliadať nadchádzajúce udalosti.

### Možnosti kalendára

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Počet dní kalendára, za ktoré sa majú načítať udalosti, od teraz do konca N-tého dňa (predvolene: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Entita na ovládanie (napr. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Entita kalendára, ktorá sa má zobraziť                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Vlastná farba pre štítok kalendára. Ak nie je definovaná, vyberie sa automatická farba |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Počet dní kalendára, za ktoré sa majú načítať udalosti, od teraz do konca N-tého dňa (predvolene: 7) |
| `limit`             | number  | Optional     | A number                                        | Počet udalostí, ktoré sa zobrazia na karte                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Zobrazí alebo skryje čas ukončenia udalostí                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Zobrazí alebo skryje ukazovateľ priebehu udalosti                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Zobrazí alebo skryje udalosti, ktoré práve prebiehajú                                                 |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Umožní posúvanie textu, keď obsah presiahne veľkosť kontajnera |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Umožňuje pridať akcie po kliknutí na udalosť. |
| `tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po kliknutí na deň, ak nie je definovaná, použije sa `none`. |
| `double_tap_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po dvojitom kliknutí na deň, ak nie je definovaná, použije sa `none`. |
| `hold_action` | object | Optional | See [actions](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po podržaní dňa, ak nie je definovaná, použije sa `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Optional | Any number | Počet riadkov (výška) (napr. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#podtlačidlá) | Pridá vlastné tlačidlá pripevnené vpravo |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Hlavná farba pozadia pre podporované prvky v karte kalendára  |
| `--bubble-calendar-border-radius`         | `px`           | Polomer zaoblenia rohov pre podporované prvky karty kalendára |
| `--bubble-calendar-height`                | `px`           | Výška karty kalendára                                        |

</details>

#### Príklady

<details>

<summary>Karta kalendára s obmedzeným počtom udalostí</summary>

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

<summary>Karta kalendára s časom ukončenia a ukazovateľom priebehu</summary>

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


## Oddeľovač

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Táto karta je jednoduchý oddeľovač na rozdelenie vášho pop-upu do kategórií alebo sekcií, napríklad Svetlá, Zariadenia, Rolety, Nastavenia, Automatizácie...

### Možnosti oddeľovača

<details>

<summary><b>Možnosti (YAML a popisy)</b></summary>

| Názov | Typ | Požiadavka | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `name` | string | Voliteľné, ale odporúčané | Ľubovoľný reťazec | Názov vášho oddeľovača |
| `icon` | string | Voliteľné, ale odporúčané | Ľubovoľná ikona `mdi:` | Ikona pre váš oddeľovač |
| `card_layout` | string | Voliteľné | `normal` (predvolené mimo zobrazenia sekcií), `large` (predvolené v zobrazení sekcií), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Voliteľné | Ľubovoľné číslo | Počet riadkov (výška) (napr. `2`) |
| `sub_button` | object | Voliteľné | Pozri [podtlačidlá](#podtlačidlá) | Pridá vlastné tlačidlá pripevnené vpravo |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Premenná | Očakávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Farba pozadia čiary v oddeľovači |

</details>

#### Príklad

<details>

<summary>Oddeľovač/deliaca čiara pre sekciu "Rolety"</summary>

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

## Prázdny stĺpec

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Táto karta slúži na vyplnenie prázdneho stĺpca. Je užitočná, ak máte v pop-upe `horizontal-stack` len s jednou kartou. Pozrite sa do pravého dolného rohu tejto snímky obrazovky, aby ste ju (ne)videli.

### Možnosti prázdneho stĺpca

Táto karta nemá žiadne možnosti a nepodporuje [štýly](#štýly), podporuje však možnosti rozloženia pre sekcie HA.

#### Príklad

<details>

<summary>Prázdny stĺpec v horizontálnom zásobníku</summary>

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

## Iba podtlačidlá

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Táto karta je určená iba pre podtlačidlá. Je ideálna pre menu, rýchle akcie, informačné čipy alebo pevnú pätu v spodnej časti stránky.

> [!IMPORTANT]  
> Táto karta používa novú schému podtlačidiel. Na definovanie tlačidiel použite `sub_button.bottom`. Sekcia `sub_button.main` sa ignoruje.

### Možnosti karty Iba podtlačidlá

<details>

<summary><b>Možnosti (YAML a popisy)</b></summary>

| Názov | Typ | Požiadavka | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Povinné** | Pozri [podtlačidlá](#podtlačidlá) | Definujte podtlačidlá pomocou sekcie `bottom` |
| `hide_main_background` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Odstráni pozadie karty |
| `footer_mode` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Pripevní kartu v spodnej časti stránky |
| `footer_full_width` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Nastaví pätu na plnú šírku (100 %) |
| `footer_width` | number | Voliteľné | Ľubovoľné číslo | Šírka päty v pixeloch, keď je `footer_full_width` nastavené na `false` |
| `footer_bottom_offset` | number | Voliteľné | Ľubovoľné číslo | Vzdialenosť od spodnej časti stránky v pixeloch (predvolené: `16`) |
| `card_layout` | string | Voliteľné | `normal` (predvolené mimo zobrazenia sekcií), `large` (predvolené v zobrazení sekcií), `large-2-rows`, `large-sub-buttons-grid` | Štýl rozloženia karty, pozri [rozloženia karty](#rozloženia-karty) |
| `rows` | number | Voliteľné | Ľubovoľné číslo | Počet riadkov (výška) (napr. `2`) |

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Premenná | Očakávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Šírka päty, keď je `footer_full_width` nastavené na `false` |
| `--bubble-footer-bottom` | `px` | Odsadenie päty od spodnej časti |
| `--bubble-footer-box-shadow` | pozri [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Tieň (box shadow) pre kontajner päty |

</details>

#### Príklady

<details>

<summary>Čipy (ako na snímke obrazovky)</summary>

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

<summary>Pevné menu v päte stránky</summary>

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

## Podtlačidlá

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

V každej karte, ktorá túto možnosť podporuje, môžete pridať podtlačidlá a ešte viac si prispôsobiť svoje karty. Môžete napríklad vytvoriť tlačidlo, ktoré ovláda robotický vysávač, kartu počasia alebo takmer čokoľvek, čo si vymyslíte. Tieto podtlačidlá podporujú akcie ťuknutia a väčšinu možností tlačidla.

Podtlačidlá teraz podporujú tri typy: **Predvolený (tlačidlo)**, **Posuvník** a **Rozbaľovací zoznam / Select**. Typy môžete v rámci jednej karty kombinovať, umiestňovať podtlačidlá hore alebo dole a organizovať ich do skupín pre pokročilejšie rozloženia.

#### Umiestnenie podtlačidiel a skupiny

<details>

<summary><b>Štruktúra podtlačidiel (main / bottom a skupiny)</b></summary>

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

**Poznámky:**
- `main` a `bottom` sú dve nezávislé sekcie. Spodné podtlačidlá (bottom) sú pripevnené k spodnej časti karty.
- `main_layout` a `bottom_layout` akceptujú `inline` (predvolené) alebo `rows`, ktoré skupiny usporiada zvisle.
- Skupiny sú objekty s poľom `group` a voliteľným `buttons_layout` (`inline` alebo `column`).
- `justify_content` je dostupné **iba pre spodné skupiny (bottom)** (`start`, `center`, `end`, `fill`).
- Ak sú prítomné spodné podtlačidlá, rozloženie karty sa automaticky prepne na `large`, pokiaľ výslovne nenastavíte iné rozloženie.
- Staršie polia `sub_button` sú stále podporované a považujú sa za sekciu `main`.

</details>

### Možnosti podtlačidiel

<details>

<summary><b>Možnosti (YAML a popis)</b></summary>

| Názov | Typ | Požiadavka | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `entity` | string | Voliteľné | Ľubovoľná entita | Entita na ovládanie |
| `name` | string | Voliteľné | Ľubovoľný reťazec | Názov vášho podtlačidla, ak nie je definovaný, zobrazí sa názov entity |
| `icon` | string | Voliteľné | Ľubovoľná ikona `mdi:` | Ikona pre vaše podtlačidlo, ak nie je definovaná, zobrazí sa ikona entity alebo obrázok entity |
| `force_icon` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Vynúti ikonu aj v prípade, že je k dispozícii obrázok entity |
| `sub_button_type` | string | Voliteľné | `default`, `slider` alebo `select` | Zvoľte typ podtlačidla |
| `show_background` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Zobrazí pozadie podtlačidla, jeho farba sa mení podľa stavu entity |
| `state_background` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Použije farbu stavu, keď je entita `on` |
| `light_background` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Použije farbu svetla pre pozadie, ak je k dispozícii |
| `show_state` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zobrazí alebo skryje stav vašej `entity` |
| `show_name` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zobrazí alebo skryje názov |
| `show_icon` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Zobrazí alebo skryje ikonu |
| `show_last_changed` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zobrazí čas poslednej zmeny vašej `entity` |
| `show_last_updated` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zobrazí čas poslednej aktualizácie vašej `entity` |
| `show_attribute` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Zobrazí atribút vašej `entity` pod jej `name` |
| `attribute` | string | Voliteľné (povinné, ak je `show_attribute` nastavené na `true`) | Atribút z vašej `entity` | Atribút na zobrazenie (napr. `brightness`) |
| `select_attribute` | string | Voliteľné | Zoznam atribútov z vašej `entity` (pozri podporované možnosti vyššie) | Tento zoznam atribútov po kliknutí otvorí rozbaľovací zoznam (napr. `effect_list`) |
| `show_arrow` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Zobrazí alebo skryje šípku rozbaľovacieho zoznamu pri podtlačidlách typu select |
| `scrolling_effect` | boolean | Voliteľné | `true` (predvolené) alebo `false` | Umožní posúvanie textu, ak obsah presahuje veľkosť kontajnera |
| `tap_action` | object | Voliteľné | Pozri [akcie](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po kliknutí na podtlačidlo, ak nie je definované, použije sa `more-info`. |
| `double_tap_action` | object | Voliteľné | Pozri [akcie](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie po dvojitom kliknutí na podtlačidlo, ak nie je definované, použije sa `none`. |
| `hold_action` | object | Voliteľné | Pozri [akcie](#akcie-ťuknutia-dvojitého-ťuknutia-a-podržania) | Definuje typ akcie pri podržaní podtlačidla, ak nie je definované, použije sa `more-info`. |
| `fill_width` | boolean | Voliteľné | `true` alebo `false` | Vyplní dostupnú šírku (predvolené: `false` pre main, `true` pre bottom) |
| `width` | number alebo string | Voliteľné | Ľubovoľné číslo alebo dĺžka CSS | Vlastná šírka (`px` pre sekciu main, predvolene `%` pre sekciu bottom) |
| `custom_height` | number | Voliteľné | Ľubovoľné číslo | Vlastná výška v pixeloch |
| `content_layout` | string | Voliteľné | `icon-left` (predvolené), `icon-top`, `icon-bottom`, `icon-right` | Umiestnenie ikony vnútri podtlačidla |
| `always_visible` | boolean | Voliteľné | `true` alebo `false` (predvolené) | **Iba posuvník.** Vždy zobrazí posuvník namiesto jeho otvárania po ťuknutí |
| `show_button_info` | boolean | Voliteľné | `true` alebo `false` (predvolené) | **Iba posuvník.** Zobrazí ikonu/názov/stav, keď je zapnuté `always_visible` |
| `visibility` | object alebo list | Voliteľné | Pozri [podmienky](https://www.home-assistant.io/docs/scripts/conditions/) | Zobrazí alebo skryje podtlačidlo na základe podmienok |
| `hide_when_parent_unavailable` | boolean | Voliteľné | `true` alebo `false` (predvolené) | Skryje podtlačidlo, ak je nadradená entita karty nedostupná |

</details>

<details>

<summary><b>Možnosti posuvníkových podtlačidiel (rovnaké ako posuvníky tlačidla)</b></summary>

<br>

Posuvníkové podtlačidlá podporujú rovnaké možnosti posuvníka ako posuvníky tlačidla, vrátane:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS premenné (pozri <a href="#štýly">Štýly</a>)</b></summary>

| Premenná | Očakávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Polomer zaoblenia rohov pre podtlačidlá |
| `--bubble-sub-button-background-color` | `color` | Farba pozadia pre podtlačidlá |
| `--bubble-sub-slider-border-radius` | `px` | Polomer zaoblenia rohov pre posuvníkové podtlačidlá |
| `--bubble-sub-slider-background-color` | `color` | Farba pozadia pre posuvníkové podtlačidlá |
| `--bubble-sub-slider-height` | `px` | Výška pre trvalo zobrazené posuvníkové podtlačidlá |
| `--bubble-sub-button-dark-text-color` | `color` | Farba textu na svetlých pozadiach podtlačidiel |

</details>

#### Príklady

<details>

<summary>Tlačidlo s niekoľkými podtlačidlami tvoriacimi kartu vysávača (ako na snímke obrazovky)</summary>

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

<summary>Posuvníkové tlačidlo s podtlačidlom, ktoré zobrazuje jas, a podtlačidlom, ktoré prepína svetlo (ako na snímke obrazovky)</summary>

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

<summary>Tlačidlo, ktoré zobrazuje vnútornú a vonkajšiu teplotu spolu s počasím na dnes a zajtra (vrátane snímky obrazovky)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Moja smola, u mňa je stále zamračené, ale všetky ikony sa menia podľa počasia.

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

## Rozloženia karty

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card plne podporuje zobrazenie sekcií Home Assistant, takže môžete zmeniť rozloženie karty, aby bola väčšia, a tiež zmeniť počet stĺpcov alebo riadkov, ktoré má karta zaberať v zobrazení sekcií (iba pri kartách, ktoré túto možnosť podporujú). Tieto rozloženia sú podporované aj vo všetkých ostatných typoch zobrazení.

<details>

<summary><b>Dostupné rozloženia karty</b></summary>

| Rozloženie | Popis |
| --- | --- |
| `normal` | Bežné rozloženie (nie je optimalizované pre zobrazenie sekcií) |
| `large` | Väčšie rozloženie, ktoré sa prispôsobí zvoleným riadkom v zobrazení sekcií (optimalizované pre zobrazenie sekcií) |
| `large-2-rows` | Väčšie rozloženie s 2 riadkami podtlačidiel, ktoré sa prispôsobí zvoleným riadkom v zobrazení sekcií (optimalizované pre zobrazenie sekcií) |
| `large-sub-buttons-grid` | Toto rozloženie zobrazí podtlačidlá v mriežke, `rows` musí byť nastavené aspoň na `2`.

</details>

#### Príklady

<details>

<summary>Veľké tlačidlo, ktoré zobrazuje štatistiky energie s 2 riadkami podtlačidiel (vrátane snímky obrazovky)</summary>

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

<summary>Veľké tlačidlo s viacerými riadkami a 12 podtlačidlami</summary>

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

## Akcie ťuknutia, dvojitého ťuknutia a podržania

Na kartách, ktoré túto možnosť podporujú, môžete tiež použiť predvolené akcie Home Assistant pre ťuknutie, dvojité ťuknutie a podržanie. Vďaka tomu môžete napríklad zobraziť okno "viac informácií" podržaním ikony tlačidla alebo spustiť službu pri stlačení podtlačidla.

**Poznámka: Keď je nakonfigurovaná `double_tap_action`, bežná `tap_action` bude mať oneskorenie 200 ms, aby bolo možné rozpoznať
dvojité ťuknutie. Ak je toto oneskorenie nežiaduce, nastavte `double_tap_action` na `none`, čím spracovanie dvojitého ťuknutia vypnete.**

### Možnosti akcií

<details>

<summary><b>Možnosti (YAML a popis)</b></summary>

| Názov | Typ | Podporované možnosti | Popis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Akcia, ktorá sa má vykonať |
| `target` | object |  | Funguje iba s `call-service`. Riadi sa [syntaxou Home Assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Ľubovoľná cesta vášho dashboardu | Cesta, na ktorú sa má prejsť (napr. `'#kitchen'` na otvorenie pop-upu), keď je akcia definovaná ako navigate |
| `url_path` | string | Ľubovoľný odkaz | URL adresa, ktorá sa otvorí po kliknutí (napr. `https://www.google.com`), keď je akcia `url` |
| `service` | string | Ľubovoľná služba | Služba, ktorá sa má zavolať (napr. `media_player.media_play_pause`), keď je `action` definovaná ako `call-service` |
| `data` alebo `service_data` | object | Ľubovoľné dáta služby | Dáta služby, ktoré sa majú zahrnúť (napr. `entity_id: media_player.kitchen`), keď je `action` definovaná ako `call-service` |
| `confirmation` | object | Pozri [potvrdenie](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Zobrazí potvrdzovacie okno (nie okno Bubble Card), prepíše predvolený objekt `confirmation` |

</details>

#### Príklad

<details>

<summary>Tlačidlo na otvorenie pop-upu</summary>

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

## Štýly

Vlastné štýly na úpravu CSS všetkých kariet môžete pridať **bez použitia card-mod** štyrmi spôsobmi:

- V editore prejdite na kartu, ktorú chcete upraviť, potom na _Styling options > Custom styles & JS templates_, a pridajte vlastné štýly (pozrite si tipy a príklady nižšie).
- V editore (alebo v [YAML](#moduly)) prejdite na kartu, ktorú chcete upraviť, potom na _Modules_, a vytvorte nový modul (bude dostupný pre všetky karty), alebo prejdite do **Module Store** a nainštalujte niektorý z dostupných modulov (viac podrobností o moduloch nájdete [nižšie](#moduly)).
- V súbore [témy](https://www.home-assistant.io/integrations/frontend/#defining-themes) pridaním CSS premenných v YAML (tie sú dostupné v dokumentácii každej karty vyššie). Toto umožňuje globálne úpravy.

  <details>
  
  <summary>Príklad</a></summary>
  
  <br>

  Riadok `Bubble:` neprepisujte, je to len názov témy, ktorú používate. Tiež musíte z premenných odstrániť `--`.

  Po akejkoľvek úprave musíte spustiť akciu [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes), aby sa téma obnovila.

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
  
- V YAML pridaním `styles: |` a vlastných štýlov za ním (pozrite si tipy a príklady nižšie).

> [!TIP]  
> **Ak chcete zistiť, ktoré triedy štýlov možno upraviť**, pozrite sa do priečinka [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) v tomto repozitári. V každom priečinku karty nájdete súbor s názvom `styles.css`. Tieto súbory obsahujú všetky použité štýly. Toto ponúka oveľa viac možností než CSS premenné, ale treba ich pridať do každej karty jednotlivo.
> 
> Množstvo [príkladov od komunity](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) nájdete aj tam, prípadne na [fóre Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) po chvíli hľadania.
>
> Tému Bubble pre Home Assistant (ako na snímkach obrazovky) nájdete [tu](https://github.com/Clooos/Bubble).
>
> Video návod čoskoro pribudne na mojom [YouTube kanáli](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Nezabudnite, že pri niektorých už definovaných CSS štýloch budete musieť pridať `!important;` (pozrite si príklady nižšie).

> [!TIP]  
> Podtlačidlá je možné cieliť pomocou tried podľa názvu. Napríklad podtlačidlo s názvom "My sub-button" možno štylizovať pomocou `.my-sub-button`. Podtlačidlá typu slider majú tiež triedy `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` atď.

#### Príklady

<details>

<summary>Zmena veľkosti písma ľubovoľnej Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Zmena farby pozadia jedného tlačidla v horizontálnom zásobníku tlačidiel</summary>

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

<summary>Zmena farby pozadia karty</summary>

<br>

Toto funguje na všetkých typoch Bubble Card (okrem pop-upov):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Toto robí to isté iba pre kartu s tlačidlom (funguje aj pre hlavičku pop-upu): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Ak chcete zmeniť farbu pri stave `on`, pozrite si nižšie šablóny štýlov.

</details>

<details>

<summary>Zmena farby posuvníka tlačidla</summary>

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

<summary>Zmena farby čiary oddeľovača</summary>

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

<summary>Zmena farby ikony</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Pre ikonu v horizontálnom zásobníku tlačidiel.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Zmena farby pozadia kontajnera ikony</summary>

<br>

Toto funguje na všetkých typoch Bubble Card (okrem pop-upov):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Toto robí to isté pre hlavičku pop-upu: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Zmena veľkosti podtlačidiel (ideálne pre veľké rozloženie)</summary>

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

<summary>Zmena farby pozadia druhého podtlačidla</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Zmena veľkosti ikony</summary>

<br>

Pre hlavnú ikonu.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Pre ikony podtlačidiel.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Použitie obrázka namiesto ikony v podtlačidle</summary>

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

Stačí nahrať tento obrázok do priečinka "pictures" (alebo akéhokoľvek názvu, aký chcete) v priečinku "www" Home Assistant.

</details>

<details>

<summary>Pokročilý príklad: vytvorenie horizontálneho radu podtlačidiel (so snímkou obrazovky)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Tento naozaj milujem, používam ho ako hlavičku na svojom dashboarde.

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

## Šablóny

**Bubble Card nepodporuje šablóny Jinja**, ale pokročilí používatelia môžu pridávať šablóny v JS priamo do svojich [vlastných štýlov](#štýly). Toto napríklad umožňuje dynamicky meniť ikonu, texty alebo farby prvku, podmienene zobraziť či skryť prvok (napríklad podtlačidlo), alebo takmer čokoľvek na základe stavu, atribútu a podobne.

> [!TIP]  
> Viac informácií o JS šablónach [tu](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Moja rada je **vždy skontrolovať konzolu prehliadača**, aby ste sa uistili, že všetko funguje správne.

> [!IMPORTANT]  
> **Všetky šablóny, ktoré neupravujú CSS vlastnosť, musia byť umiestnené na konci! Ako napríklad úprava ikony, textu alebo iného prvku.**

#### Dostupné premenné a funkcie

<details>

<summary>Premenné</summary>

<br>

Vo väčšine kariet máte prístup k týmto premenným:

- `state` vráti stav vašej definovanej `entity`.
  
- `entity` vráti entitu, ktorú ste definovali, napríklad `switch.test` v tomto príklade.
  
- `icon` možno použiť takto na zmenu ikony `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` vráti stav `entity` definovanej pre prvé podtlačidlo, `[0]` je stav prvého podtlačidla, `[1]` druhého...
  
- `subButtonIcon[0]` možno použiť takto na zmenu ikony prvého podtlačidla `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` je ikona prvého podtlačidla, `[1]` druhého...
  
- `card` vráti prvok karty v DOM.
  
- `hass` je pokročilá premenná, ktorá poskytuje ešte väčšiu kontrolu, napríklad môžete vrátiť stav `light.kitchen` takto `hass.states['light.kitchen'].state` alebo atribút takto `hass.states[entity].attributes.brightness`.

- `this` vráti množstvo užitočných informácií o vašom nastavení a dashboarde, používajte len ak viete, čo robíte.

</details>

<details>

<summary>Funkcie</summary>

<br>

Máte prístup ku všetkým globálnym JS funkciám, ale aj k:

- `getWeatherIcon` možno použiť na vrátenie ikony počasia na základe stavu, ktorý vracia počasie. Napríklad môžete urobiť toto `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, aby ste zmenili ikonu tretieho podtlačidla na ikonu dnešného počasia, `.forecast[1]?.condition` platí pre zajtrajšok...

  Na to budete musieť vytvoriť template sensor. Toto môžete pridať do svojho `configuration.yaml`:
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
- `hass.formatEntityState(state)` možno použiť na preklad stavu (možno použiť aj na získanie jednotky stavu bez potreby ju pridávať manuálne).
- `hass.formatEntityAttributeValue(state, "attribute")` možno použiť na preklad atribútu (možno použiť aj na získanie jednotky stavu bez potreby ju pridávať manuálne).

</details>

#### Príklady

Nižšie nájdete množstvo príkladov, ale veľmi pokročilé šablóny nájdete aj na mojej [Patreon stránke](https://www.patreon.com/c/Clooos), napríklad jednu (moju obľúbenú), ktorá umožňuje až štyri podmienené odznaky umiestnené okolo ikon karty. Je to tiež skvelý spôsob, ako sa naučiť o všetkých možnostiach vlastných štýlov a šablón Bubble Card!

<details>
<summary>Príklady z mojej Patreon stránky</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Pridanie odznakov v štýle Home Assistant do ľubovoľnej karty</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Zobrazenie formátovaného dátumu a času v oddeľovači bez použitia akejkoľvek entity</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Zobrazenie stavu podtlačidla na dvoch riadkoch</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Prispôsobenie popisov a ikon vo vnútri podtlačidla typu select</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Pridanie trvalého pripomínajúceho pop-upu, ktorý sa zobrazí len keď je potrebný</a>
</p>

<br>

</details>

<details>

<summary>Zmena farby pozadia tlačidla, ktoré je červené v stave <code>off</code> a modré v stave <code>on</code></summary>

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

<summary>Zmena farby pozadia tlačidla na základe entity pre horizontálny zásobník tlačidiel</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Podmienené zobrazenie/skrytie podtlačidla</summary>

<br>

Tento zobrazuje prvé podtlačidlo len vtedy, keď je môj vysávač zaseknutý.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Tento zobrazuje podtlačidlo, keď je batéria pod 10 %. Užitočné pri podtlačidle, ktoré zobrazuje "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Podmienená zmena ikony alebo ikony podtlačidla</summary>

<br>

Tento mení ikonu tlačidla len vtedy, keď je vysávač zaseknutý.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Tento mení ikonu prvého podtlačidla len vtedy, keď je vysávač zaseknutý.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Podmienená zmena farby ikony alebo ikony podtlačidla</summary>

<br>

Tento mení farbu ikony tlačidla na základe jeho stavu.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Tento mení farbu ikony podtlačidla na základe jeho stavu. `.bubble-sub-button-1` je prvé podtlačidlo, nahraďte `1`, ak chcete zmeniť ikonu iného podtlačidla.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Podmienená animácia ikony ventilátora</summary>

<br>

Tento otáča ikonu tlačidla, keď je ventilátor v stave `on`.
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

<summary>Šablónovanie textov (ako názov alebo stav)</summary>

<br>

Tento mení názov/stav tlačidla na "It's currently sunny" v závislosti od počasia.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
alebo pri použití pre podtlačidlá:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ak chcete šablónovať stav (`.bubble-state`), neprepínajte `show_state: true`, len prepnite `show_attribute: true` bez akéhokoľvek atribútu.

</details>

<details>

<summary>Pokročilý príklad: zmena farby podtlačidla, keď je otvorený pop-up</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Pokročilý príklad: šablónovanie názvu oddeľovača na základe stavu preloženého do vášho jazyka</summary>

<br>

Na preklad stavu môžete použiť `hass.formatEntityState(state)` a na preklad atribútu `hass.formatEntityAttributeValue(state, "attribute")`.

Tento mení názov a ikonu na základe počasia, "Nuageux" znamená "Cloudy" po francúzsky.

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

## Moduly

Moduly sú výkonná funkcia, ktorá vám umožňuje uložiť, opätovne použiť a zdieľať vaše vlastné štýly a šablóny naprieč všetkými vašimi Bubble Cards. Namiesto kopírovania a vkladania rovnakého kódu do viacerých kariet môžete vytvoriť Modul a použiť ho kdekoľvek potrebujete. Vďaka tomu je správa vzhľadu a pocitu z vášho dashboardu oveľa jednoduchšia a efektívnejšia.

Táto funkcia je však oveľa výkonnejšia než to, umožňuje vám dokonca sami pridávať skutočné funkcie do editora Bubble Card, s využitím všetkých predvolených možností [formulára Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Selektor objektov bol vylepšený, aby zobrazoval zmeny naživo a správne podporoval atribúty.

Môžete tiež prehľadávať **Module Store** a nájsť a nainštalovať [moduly vytvorené komunitou](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), alebo zdieľať svoje vlastné výtvory!

> [!TIP]
> Kód Modulu funguje presne rovnako ako kód v sekcii `styles` karty. Dostupné sú všetky rovnaké premenné a funkcie zo sekcie [Šablóny](#šablóny).

<br>

### Prvotné nastavenie

> [!IMPORTANT]
> Od verzie v3.1.0 je Bubble Card Tools odporúčaným úložiskom pre moduly. Staršia metóda pomocou template sensor stále funguje pre existujúce nastavenia, ale nové moduly a funkcie Module Store sú najlepšie podporované cez Bubble Card Tools.

Integrácia Bubble Card Tools sprístupňuje Module Editor a Module Store a ukladá moduly ako jednotlivé YAML súbory. Existujúce moduly sa migrujú automaticky.

Postup inštalácie a konfigurácie je vysvetlený tu:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Editor modulov

K editoru modulov sa dostanete z nastavení ktorejkoľvek karty, v sekcii **Modules**. Editor ponúka dve hlavné karty:

#### Karta My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Táto karta zobrazuje všetky vaše nainštalované moduly a umožňuje vám:

- **Použiť** existujúce moduly na aktuálnu kartu
- **Vytvoriť** nový modul od základu
- **Upraviť** existujúce moduly s náhľadom naživo
- **Odstrániť** moduly, ktoré už nepotrebujete
- **Vyhľadávať** a **triediť** moduly (podľa abecedy, najnovšie, aktívne ako prvé)
- **Nastaviť globálny stav**, aby sa modul automaticky použil na všetky karty
- **Importovať/exportovať** moduly na zálohu alebo zdieľanie

#### Karta Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Táto karta zobrazí [všetky dostupné moduly od komunity](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) a umožňuje vám:

- **Prehľadávať** všetky moduly vytvorené komunitou
- **Vyhľadávať** a filtrovať moduly podľa názvu, kompatibility alebo kľúčových slov
- **Nainštalovať** moduly jedným kliknutím
- **Aktualizovať** nainštalované moduly, keď sú dostupné nové verzie

> [!TIP]
> V editore môžete povoliť nepodporované moduly, aby ste otestovali moduly, ktoré ešte nie sú označené ako kompatibilné s daným typom karty.

<br>

### Ako používať moduly

#### Vytvorenie nového modulu

<details>

<summary>Kliknutím rozbaliť</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Prejdite do editora ľubovoľnej karty a rozbaľte sekciu **Modules**.
2. Kliknite na **Create new module**.
3. Vyplňte informácie o module.
4. Napíšte svoj CSS a/alebo JavaScript šablónový kód v editore **Code**.
5. (Voliteľné) Vytvorte vlastné konfiguračné rozhranie v sekcii **Editor** (ako výber farby na snímke obrazovky vyššie, úplná dokumentácia je dostupná [tu](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Kliknite na **Save**.

Váš modul je teraz dostupný na použitie na ktorejkoľvek z vašich kariet!

<br>

</details>

#### Použitie modulu na kartu

<details>

<summary>Kliknutím rozbaliť</summary>

<br>

- **Cez editor:**

  - Prejdite do editora karty, na ktorú chcete modul použiť.
  - Rozbaľte sekciu **Modules**.
  - Kliknite na modul, ktorý chcete použiť, zo zoznamu.
  - Pod "Apply to" kliknite na "This card". Modul je teraz aktívny. Na tú istú kartu môžete použiť viacero modulov.

- **Cez YAML:**

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

#### Globálne použitie modulu

<details>

<summary>Kliknutím rozbaliť</summary>

<br>

Modul môžete nastaviť tak, aby sa automaticky použil na všetky Bubble Cards:

**Toto nie je dostupné pre moduly s editorom, keďže tie vyžadujú špecifickú konfiguráciu na fungovanie.**

- **Cez editor:**

  - V editore modulov nájdite váš modul na karte **My Modules**.
  - Prepnite tlačidlo **All cards** vedľa názvu modulu.
  - Modul sa teraz automaticky použije na všetky karty.
 
- **Cez YAML:**

  Vo vašej YAML konfigurácii modulu (v `bubble-modules.yaml`) jednoducho pridajte `is_global: true`.

<br>

</details>

#### Vylúčenie jednej karty z globálneho modulu

<details>

<summary>Kliknutím rozbaliť</summary>

<br>

Ak máte globálny modul, ale chcete ho vylúčiť z konkrétnej karty:

- **Cez editor:**
  
  - V sekcii **Modules** karty uvidíte zoznam globálnych modulov.
  - Kliknite na globálny modul, vypnite "This card", aby ste ho vylúčili z tejto konkrétnej karty.

- **Cez YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Zdieľanie vášho modulu do Module Store

<details>

<summary>Kliknutím rozbaliť</summary>

<br>

Ak chcete zdieľať svoj Modul do Module Store, v editore modulov, dole v "Export Module", kliknite na "Copy for GitHub" a vložte obsah do novej diskusie v kategórii [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Upravte popis** (ak treba), **príklad** (pre používateľov YAML), a nezabudnite **priložiť aspoň jednu snímku obrazovky** pre Module Store.

**Váš Modul bude dostupný hneď potom** (po obnovení Store), takže si dvakrát skontrolujte, že je všetko správne napísané a modul funguje podľa očakávania. Modul môžete samozrejme po zdieľaní ešte upravovať/aktualizovať.

<br>

</details>

#### Správa verzií

<details>

<summary>Kliknutím rozbaliť</summary>

<br>

Module Store automaticky kontroluje dostupnosť aktualizácií pre nainštalované moduly. Keď sú aktualizácie dostupné:

1. Uvidíte indikátor aktualizácie na karte **Module Store**.
2. Kliknite na **Update** pri moduloch s dostupnou aktualizáciou.
3. Potvrďte aktualizáciu v Module Store.

<br>

</details>

#### Definovanie podporovaných typov kariet

<details>

<summary>Kliknutím rozbaliť</summary>

<br>

Niektoré moduly nemusia byť kompatibilné so všetkými typmi kariet. Môžete určiť, ktoré karty modul podporuje.  
Ak chcete, aby bol modul kompatibilný so **všetkými kartami**, jednoducho vynechajte pole `supported` (alebo použite možnosť **All cards** v editore).

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

### Príklady

<details>
<summary>Základný modul štýlovania</summary>

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
<summary>Modul s vlastnou konfiguráciou</summary>

<br>

Tento modul je dostupný [tu](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Ďalšie príklady nájdete v Module Store, alebo [tu](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Pomoc

Neváhajte otvoriť issue, ak niečo nefunguje podľa očakávania. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Máte otázky alebo nápady ohľadom Bubble Card? Chcete sa podeliť o svoje dashboardy alebo objavy? Môžete zájsť na fórum Home Assistant, na subreddit Bubble Card alebo do sekcie GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Prispievanie

Príspevky sú vítané! Či už ide o opravy chýb, nové funkcie, preklady alebo vylepšenia dokumentácie, neváhajte otvoriť pull request.

Skôr než začnete, prečítajte si prosím [sprievodcu pre vývojárov](DEVELOPERS.md), ktorý popisuje, ako nastaviť lokálne prostredie, zostaviť projekt a otestovať vaše zmeny.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Darovať

Väčšinu svojho voľného času venujem tomu, aby som z tohto projektu vytvoril to najlepšie, čo môže byť. Ak si teda ceníte moju prácu, akýkoľvek dar by bol skvelým spôsobom, ako mi vyjadriť podporu 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Ďakujem vám všetkým za podporu, ste mojou najväčšou motiváciou!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
