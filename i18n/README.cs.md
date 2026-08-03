<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Tato stránka je automatický překlad. V případě pochybností platí [originální anglická dokumentace](../README.md). Zní vám některá věta divně? Každá pomoc je vítána a [oprava této stránky](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.cs.md) zabere jen minutu: o fork i pull request se postará GitHub. Předem děkuji! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Číst tuto stránku v jiném jazyce](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card je minimalistická a přizpůsobitelná kolekce karet pro Home Assistant s moderními pop-upy a integrovaným Module Store, který nabízí přes 100 modulů vytvořených komunitou.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Obsah

**[`Instalace`](#instalace)**  **[`Konfigurace`](#konfigurace)**  **[`Pop-up`](#pop-up)**  **[`Horizontální zásobník tlačítek`](#horizontální-zásobník-tlačítek)**  **[`Tlačítko`](#tlačítko)**  **[`Přehrávač médií`](#přehrávač-médií)**  **[`Rolety`](#rolety)**  **[`Select`](#select)**  **[`Klimatizace`](#klimatizace)**  **[`Kalendář`](#kalendář)**  **[`Oddělovač`](#oddělovač)**  **[`Prázdný sloupec`](#prázdný-sloupec)**  **[`Pouze podtlačítka`](#pouze-podtlačítka)**  **[`Podtlačítka`](#podtlačítka)**  **[`Rozvržení karet`](#rozvržení-karet)**  **[`Akce`](#akce-klepnutí-dvojitého-klepnutí-a-podržení)**  **[`Styly`](#styly)**  **[`Šablony`](#šablony)**  **[`Moduly`](#moduly)**  **[`Pomoc`](#pomoc)**  **[`Přispívání`](#přispívání)**  **[`Podpořte projekt`](#podpořte-projekt)**

<br>

## Instalace

**Nejnižší podporovaná verze Home Assistant:** 2023.9.0

<details>

<summary>Bez HACS</summary>

<br>

1. Stáhněte si tento soubor: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Přidejte tento soubor do složky `<config>/www`
3. Na svém přehledu klikněte na ikonu vpravo nahoře a poté na `Upravit dashboard`
4. Klikněte znovu na tuto ikonu a poté na `Spravovat zdroje`
5. Klikněte na `Přidat zdroj`
6. Zkopírujte a vložte toto: `/local/bubble-card.js?v=1`
7. Klikněte na `JavaScript modul` a poté na `Vytvořit`
8. Vraťte se zpět a obnovte stránku
9. Nyní můžete kliknout na `Přidat kartu` vpravo dole a vyhledat `Bubble Card`
10. Po každé aktualizaci souboru budete muset upravit `/local/bubble-card.js?v=1` a změnit verzi na libovolné vyšší číslo

Pokud to nefunguje, zkuste jednoduše vymazat mezipaměť prohlížeče.

</details>

<details>

<summary>S HACS (doporučeno)</summary>

<br>

Díky této metodě budete dostávat aktualizace přímo v Home Assistant Community Store

1. Pokud ještě HACS nemáte nainstalovaný, stáhněte ho podle pokynů na [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Proveďte počáteční konfiguraci HACS podle pokynů na [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. V bočním panelu přejděte na "HACS"
4. Vyhledejte "Bubble Card", nebo klikněte na modré tlačítko níže
5. Klikněte na "Stáhnout"
6. Vraťte se na svůj přehled, klikněte na ikonu vpravo nahoře a poté na `Upravit dashboard`
7. Nyní můžete kliknout na `Přidat kartu` vpravo dole a vyhledat `Bubble Card`

Pokud to nefunguje, zkuste vymazat mezipaměť prohlížeče/aplikace (v případě potřeby na všech svých zařízeních).

#### Videa

Můžete se také podívat na můj YouTube kanál s videonávody krok za krokem.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Otevřít Bubble Card v Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurace

Všechny možnosti lze nastavit v editoru Home Assistant. Více podrobností a YAML ale najdete v dokumentaci níže.

<details>

<summary><b>Hlavní možnosti (YAML + popis)</b></summary>

| Název | Typ | Povinnost | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `type` | string | **Povinné** | `custom:bubble-card` | Typ karty |
| `card_type` | string | **Povinné** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` nebo `sub-buttons` | Typ Bubble Card, viz níže |
| `styles` | object list | Volitelné | Libovolné CSS styly | Umožňuje přizpůsobit CSS vaší Bubble Card, viz [styly](#styly) |

</details>

<details>

<summary><b>Globální proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Zaoblení rohů všech podporovaných prvků |
| `--bubble-main-background-color` | `color` | Hlavní barva pozadí všech podporovaných prvků |
| `--bubble-secondary-background-color` | `color` | Sekundární barva pozadí všech podporovaných prvků |
| `--bubble-accent-color` | `color` | Barva zvýraznění všech podporovaných prvků |
| `--bubble-icon-border-radius` | `px` | Zaoblení rohů ikon všech podporovaných prvků |
| `--bubble-icon-background-color` | `color` | Barva pozadí ikon všech podporovaných prvků |
| `--bubble-sub-button-border-radius` | `px` | Zaoblení rohů všech podtlačítek |
| `--bubble-sub-button-background-color` | `color` | Barva pozadí všech podtlačítek |
| `--bubble-box-shadow` | viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín všech podporovaných prvků |
| `--bubble-border` | viz [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Ohraničení všech podporovaných karet |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Podívejte se na toto [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) a poznejte Bubble Card a jeho možnosti.** Můj YouTube kanál je poměrně nový a zaměřuje se na návody o Home Assistant a Bubble Card. Neváhejte se přihlásit k odběru, pomůžete tím zviditelnit můj kanál. Předem děkuji!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Tato karta umožňuje vytvořit pop-up s libovolným obsahem. Každý pop-up je **ve výchozím stavu skrytý** a lze jej otevřít cílením na jeho odkaz (např. `'#pop-up-name'`), pomocí libovolné karty, která podporuje [akci](#akce-klepnutí-dvojitého-klepnutí-a-podržení) `navigate`, nebo pomocí přiloženého [horizontálního zásobníku tlačítek](#horizontální-zásobník-tlačítek).

> [!TIP]
> ### Spouštěč pop-upu 
> Tato funkce umožňuje otevřít pop-up na základě stavu libovolné entity, například můžete otevřít pop-up "Zabezpečení" s kamerou, když někdo stojí před vaším domem. Můžete si také vytvořit pomocníka typu přepínač (input_boolean) a jeho otevírání/zavírání spouštět v automatizaci.
> <details>
> <summary>Otevření pop-upu, když je <code>binary_sensor</code> ve stavu <code>on</code></summary>
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
> ### Různé způsoby zavření pop-upu 
> Pop-up lze zavřít mnoha způsoby. Můžete například přejet prstem ze záhlaví pop-upu dolů, provést dlouhé přejetí prstem uvnitř pop-upu směrem dolů, stisknout Escape na počítači, odebrat hash z URL nebo jednoduše stisknout tlačítko zavření.
>


### Možnosti pop-upu

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `hash` | string | **Povinné** | Libovolný jedinečný hash (např. `'#kitchen'`) s ' ' | Takto budete svůj pop-up otevírat |
| `popup_style` | string | Volitelné | `bubble` (výchozí) nebo `classic` | Určuje vizuální styl pop-upu |
| `popup_mode` | string | Volitelné | `default` (výchozí), `fit-content`, `centered` nebo `adaptive-dialog` | Určuje režim rozvržení pop-upu |
| `with_bottom_offset` | boolean | Volitelné | `true` nebo `false` (výchozí) | Používá se pouze s `popup_mode: fit-content` nebo `adaptive-dialog`. Přidá na mobilu odsazení odspodu, užitečné, když váš přehled obsahuje kartu zápatí. |
| `full_width_on_mobile` | boolean | Volitelné | `true` nebo `false` (výchozí) | Používá se pouze s `popup_mode: centered`. Roztáhne pop-up na mobilu na celou šířku obrazovky, užitečné na menších displejích. |
| `performance_mode` | string | Volitelné | `default` (výchozí) nebo `performance` | Optimalizuje animaci otevírání pop-upu. `performance` mírně zpozdí vykreslení obsahu a rozmazání pozadí a také vypne rozmazání pozadí za pop-upem (backdrop), pokud je nastaveno. |
| `auto_close` | string | Volitelné | Časový limit v milisekundách (např. `10000` pro 10 s) | Automaticky zavře pop-up po uplynutí časového limitu |
| `close_on_click` | boolean | Volitelné | `true` nebo `false` (výchozí) | Automaticky zavře pop-up po jakékoli interakci |
| `close_by_clicking_outside` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zavře pop-up kliknutím mimo něj |
| `width_desktop` | string | Volitelné | Libovolná hodnota CSS | Šířka na počítači (na mobilu výchozí `100%`) |
| `margin` | string | Volitelné | Libovolná hodnota CSS | Použijte **pouze** v případě, že váš pop-up není na mobilu správně vystředěný (např. `13px`) |
| `margin_top_mobile` | string | Volitelné | Libovolná hodnota CSS | Horní okraj na mobilu (např. `-56px`, pokud máte skryté záhlaví) |
| `margin_top_desktop` | string | Volitelné | Libovolná hodnota CSS | Horní okraj na počítači (např. `50vh` pro pop-up přes polovinu obrazovky nebo `calc(100vh - 400px)` pro pevnou výšku `400px`) |
| `bg_color` | string | Volitelné | Libovolná hodnota hex, rgb nebo rgba | Barva pozadí vašeho pop-upu (např. `#ffffff` pro bílé pozadí) |
| `bg_opacity` | string | Volitelné | Libovolná hodnota od `0` do `100` | Neprůhlednost pozadí vašeho pop-upu (např. `100` pro žádnou průhlednost) |
| `bg_blur` | string | Volitelné | Libovolná hodnota od `0` do `100` | Rozmazání pozadí vašeho pop-upu, **funguje pouze v případě, že `bg_opacity` není nastaveno na `100`** (např. `0` pro žádné rozmazání)|
| `shadow_opacity` | string | Volitelné | Libovolná hodnota od `0` do `100` | Neprůhlednost stínu vašeho pop-upu (např. `0` pro jeho skrytí) |
| `hide_backdrop` | boolean | Volitelné | `true` nebo `false` (výchozí) | Nastavte na true u prvního pop-upu na svém hlavním přehledu, čímž vypnete pozadí (backdrop) u všech pop-upů. |
| `background_update` | boolean | Volitelné | `true` nebo `false` (výchozí) | Aktualizuje obsah pop-upu na pozadí (nedoporučeno) |
| `trigger_entity` | string | Volitelné | Libovolná entita | Otevře tento pop-up na základě stavu libovolné entity |
| `trigger_state` | string | Volitelné (**Povinné**, pokud je definováno `trigger_entity`) | Libovolný stav entity | Stav entity, který pop-up otevře |
| `trigger_close` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zavře pop-up, když se `trigger_state` liší |
| `open_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Spustí akci při otevírání pop-upu |
| `close_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Spustí akci při zavírání pop-upu |
| `show_header` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí/skryje celé záhlaví pop-upu |
| `show_previous_button` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí tlačítko zpět vedle tlačítka zavření a umožní návrat na předchozí pop-up, pokud je k dispozici |
| `show_close_button` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje tlačítko zavření, zbytek záhlaví zůstane viditelný |
| `buttons_position` | string | Volitelné | `right` (výchozí) nebo `left` | Pozice tlačítka zavření a tlačítka zpět v záhlaví |
| `cards` | list | Volitelné | Libovolná Bubble Card, karta Home Assistant nebo vlastní karta | Určuje obsah vašeho pop-upu. Viz příklad pop-upu níže. |
| Máte také přístup ke [všem nastavením tlačítka](#tlačítko) pro záhlaví pop-upu. | | Volitelné | | Pokud není definováno, žádné záhlaví se nezobrazí |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Zaoblení rohů pop-upu |
| `--bubble-pop-up-main-background-color` | `color` | Hlavní barva pozadí podporovaných prvků pop-upu |
| `--bubble-pop-up-background-color` | `color` | Barva pozadí pop-upu |
| `--bubble-backdrop-background-color` | `color` | Barva pozadí za pop-upem (backdrop) |
| Máte také přístup ke [všem proměnným CSS tlačítka](#možnosti-tlačítka) pro záhlaví pop-upu. | | |

</details>


### Samostatný formát pop-upu (v3.2.0+)

Od verze v3.2.0 používají pop-upy nový samostatný formát, kdy jsou karty s obsahem definovány přímo uvnitř pop-upu pomocí možnosti `cards`. To přináší lepší výkon a nové úpravy přetahováním založené na sekcích.


#### Příklady

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

<summary>Tlačítko pro otevření pop-upu</summary>

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

## Horizontální zásobník tlačítek

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Tato karta je skvělým společníkem karty pop-up, protože umožňuje otevírat odpovídající pop-upy. Umožňuje také otevřít libovolnou stránku vašeho přehledu. Navíc můžete přidat senzory pohybu/obsazenosti, aby se pořadí tlačítek přizpůsobovalo místnosti, do které jste právě vstoupili. Tato karta je posuvná, zůstává viditelná a chová se jako zápatí.

> [!IMPORTANT]  
> Tato karta musí být v pohledu jako poslední (za všemi kartami a pop-upy). Nemůže být uvnitř žádného zásobníku (stack).

### Možnosti horizontálního zásobníku tlačítek

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované hodnoty | Popis |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Povinné** | Hash pop-upu (např. `'#kitchen'`) s ' ' nebo libovolný odkaz | Odkaz, který se má otevřít |
| `1_name` | string | Volitelné | Libovolný text | Název vašeho tlačítka |
| `1_icon` | string | Volitelné | Libovolná ikona `mdi:` | Ikona vašeho tlačítka |
| `1_entity` | string | Volitelné | Libovolné světlo nebo skupina světel | Zobrazí barvu daného světla na pozadí |
| `1_pir_sensor` | string | Volitelné | Libovolný binární senzor | Alespoň jeden nebo více senzorů PIR pro `auto_order`, ve skutečnosti to funguje s libovolným typem entity, můžete například přidat skupiny světel a pořadí se bude měnit podle naposledy změněných stavů. |
| `auto_order` | boolean | Volitelné | `true` nebo `false` (výchozí) | Mění pořadí tlačítek podle času poslední změny `_pir_sensor`, **musí být `false`, pokud ve své konfiguraci nemáte žádný `_pir_sensor`** |
| `margin` | string | Volitelné | Libovolná hodnota CSS | Použijte **pouze** tehdy, pokud váš `horizontal-buttons-stack` není na mobilu dobře vystředěný (např. `13px`) |
| `width_desktop` | string | Volitelné | Libovolná hodnota CSS | Šířka na počítači (na mobilu výchozí `100%`) |
| `is_sidebar_hidden` | boolean | Volitelné | `true` nebo `false` (výchozí) | Opraví pozici horizontálního zásobníku tlačítek, pokud je na počítači skrytý postranní panel (pouze pokud jste si jej skryli vlastní úpravou) |
| `rise_animation` | boolean | Volitelné | `true` (výchozí) nebo `false` | Nastavte na `false`, chcete-li vypnout animaci, která se spustí po načtení stránky |
| `highlight_current_view` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zvýrazní aktuální hash / pohled plynulou animací |
| `hide_gradient` | boolean | Volitelné | `true` nebo `false` (výchozí) | Nastavte na `false`, chcete-li skrýt přechod (gradient) |

> [!IMPORTANT]  
> Proměnné začínající číslem definují vaše tlačítka, stačí toto číslo změnit a přidat tak další tlačítka (viz příklad níže).

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Poloměr zaoblení rohů tlačítek horizontálního zásobníku tlačítek |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Barva pozadí tlačítek horizontálního zásobníku tlačítek |

</details>


#### Příklad

<details>

<summary>Horizontální zásobník tlačítek, který se sám přeuspořádává podle senzorů obsazenosti</summary>

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

## Tlačítko

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Tato karta je velmi všestranná. Lze ji použít jako tlačítko typu **přepínač**, **posuvník**, **stav** nebo **název/text**.

> [!TIP]
> ### Jaké jsou rozdíly mezi jednotlivými typy tlačítek?
>
> - **Tlačítko přepínače:** Toto je výchozí typ tlačítka. Ve výchozím nastavení přepíná entitu a barva jeho pozadí se mění podle stavu entity nebo barvy světla. Jeho akci můžete změnit v sekci **Akce klepnutí na kartu**.
>
> - **Tlačítko posuvníku:** Tento typ tlačítka umožňuje ovládat entity s nastavitelným rozsahem. Je ideální pro stmívání světel a barva jeho výplně se přizpůsobí barvě světla. Můžete jej použít i k zobrazení hodnot, například úrovně baterie.
>   Entity podporované posuvníky:
>   - Světlo (jas)
>   - Přehrávač médií (hlasitost)
>   - Rolety (pozice)
>   - Ventilátor (procenta)
>   - Klimatizace (teplota)
>   - Input number a number (hodnota)
>   - Senzor baterie (procenta, pouze pro čtení)
>
>   Můžete také použít libovolnou entitu s číselným stavem: vypněte filtr entit v sekci **Nastavení posuvníku** a poté definujte hodnoty `min` a `max`. Tato možnost je pouze pro čtení.
>
> - **Tlačítko stavu:** Ideální pro zobrazení informací ze senzoru nebo libovolné entity. Po stisknutí zobrazí panel „Více informací“ dané entity. Barva jeho pozadí se nemění.
>
> - **Tlačítko názvu/textu:** Jediný typ tlačítka, který nepotřebuje entitu. Umožňuje zobrazit krátký text, název nebo nadpis. Můžete k němu také přidat akce. Barva jeho pozadí se nemění.

### Možnosti tlačítka

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované hodnoty | Popis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Povinné** | Libovolná entita | Entita, kterou chcete ovládat |
| `button_type` | string | Volitelné | `switch` (výchozí), `slider`, `state` nebo `name` | Chování vašeho tlačítka |
| `name` | string | Volitelné | Libovolný text | Název vašeho tlačítka, pokud není definován, zobrazí se název entity |
| `icon` | string | Volitelné | Libovolná ikona `mdi:` | Ikona vašeho tlačítka, pokud není definována, zobrazí se ikona entity nebo `entity-picture` |
| `force_icon` | boolean | Volitelné | `true` nebo `false` (výchozí) | Upřednostní ikonu před `entity-picture` |
| `use_accent_color` | boolean | Volitelné (výchozí `false`) | **Pouze pro světla.** Použije barvu zvýraznění motivu místo barvy světla.                         |
| `show_state` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí nebo skryje stav vaší `entity` |
| `show_name` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje název |
| `show_icon` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje ikonu |
| `show_last_changed` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední změny vaší `entity` |
| `show_last_updated` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední aktualizace vaší `entity` |
| `show_attribute` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí atribut vaší `entity` pod jejím `name` |
| `attribute` | string | Volitelné (povinné, pokud je `show_attribute` nastaveno na `true`) | Atribut vaší `entity` | Atribut, který se má zobrazit (např. `brightness`) |
| `scrolling_effect` | boolean | Volitelné | `true` (výchozí) nebo `false` | Umožní rolování textu, když obsah přesahuje velikost svého kontejneru |
| `button_action` | object | Volitelné | `tap_action`, `double_tap_action` nebo `hold_action`, viz níže | Umožňuje změnit výchozí akce při kliknutí na tlačítko. |
| `tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při kliknutí na ikonu, pokud není definována, použije se `more-info` |
| `double_tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při dvojitém kliknutí na ikonu, pokud není definována, použije se `none` |
| `hold_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při podržení ikony, pokud není definována, použije se `more-info` |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo pohled se sekcemi), `large` (výchozí v pohledu se sekcemi), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |
| `sub_button` | object | Volitelné | Viz [podtlačítka](#podtlačítka) | Přidá přizpůsobená tlačítka ukotvená vpravo |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Hlavní barva pozadí podporovaných prvků tlačítka |
| `--bubble-button-border-radius` | `px` | Poloměr zaoblení rohů tlačítka |
| `--bubble-button-icon-border-radius` | `px` | Poloměr zaoblení rohů kontejneru ikony tlačítka |
| `--bubble-button-icon-background-color` | `color` | Barva pozadí kontejneru ikony tlačítka |
| `--bubble-light-white-color` | `color` | Nahradí výchozí bílou barvu tlačítek/posuvníků světel |
| `--bubble-light-color` | `color` | Nahradí barvu tlačítek/posuvníků světel (i RGB světel) |
| `--bubble-button-box-shadow` | Viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín tlačítka |

</details>

Tyto možnosti jsou dostupné pouze tehdy, když je `button_type` nastaveno na `slider`.

<details>

<summary><b>Možnosti posuvníku (YAML + popisy)</b></summary>

| Název                  | Typ    | Povinnost                     | Popis                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Volitelné                        | Minimální hodnota posuvníku. Pro vlastní posuvníky.                                                    |
| `max_value`             | number  | Volitelné                        | Maximální hodnota posuvníku. Pro vlastní posuvníky.                                                    |
| `step`                  | number  | Volitelné                        | Hodnota kroku posuvníku.                                                                           |
| `tap_to_slide`          | boolean | Volitelné (výchozí `false`)      | Zapne předchozí chování posuvníku, kdy jej aktivujete klepnutím místo podržení.        |
| `relative_slide`        | boolean | Volitelné (výchozí `false` )     | Aktualizuje hodnotu relativně k výchozí hodnotě místo výchozího bodu dotyku.                      |
| `read_only_slider`      | boolean | Volitelné (výchozí `false`)      | Nastaví posuvník pouze pro čtení. U některých entit, například senzorů, se zapíná automaticky.                        |
| `slider_live_update`    | boolean | Volitelné (výchozí `false`)      | Stav entity se aktualizuje už během posouvání. **Tato funkce není doporučena pro všechny entity.**        |
| `slider_fill_orientation` | string | Volitelné | `left` (výchozí), `right`, `top`, `bottom` | Změní směr výplně posuvníku |
| `slider_value_position` | string | Volitelné | `right` (výchozí), `left`, `center`, `hidden` | Pozice zobrazení hodnoty |
| `invert_slider_value` | boolean | Volitelné (výchozí `false`) | Obrátí směr posuvníku (100% výplň odpovídá minimu). Není dostupné pro barevné posuvníky. |
| `light_slider_type` | string | Volitelné | `brightness` (výchozí), `hue`, `saturation`, `white_temp` | **Pouze pro světla.** Volba režimu posuvníku |
| `cover_slider_type` | string | Volitelné | `position` (výchozí), `tilt_position` | **Pouze pro rolety.** Volba režimu posuvníku (pozice nebo naklopení) |
| `hue_force_saturation` | boolean | Volitelné (výchozí `false`) | **Pouze pro světla (režim odstínu).** Vynutí sytost při úpravě odstínu |
| `hue_force_saturation_value` | number | Volitelné (výchozí `100`) | **Pouze pro světla (režim odstínu).** Vynucená hodnota sytosti (0-100) |
| `use_accent_color` | boolean | Volitelné (výchozí `false`) | **Pouze pro světla (režim jasu).** Použije barvu zvýraznění motivu místo barvy světla |
| `allow_light_slider_to_0` | boolean | Volitelné (výchozí `false`)    | **Pouze pro světla.** Umožní posuvníku dosáhnout 0 %, čímž se světlo vypne. Není dostupné s `tap_to_slide`. |
| `light_transition`      | boolean | Volitelné (výchozí `false`)      | **Pouze pro světla.** Zapne plynulé přechody jasu u podporovaných světel.                           |
| `light_transition_time` | number  | Volitelné (výchozí `500`)        | **Pouze pro světla.** Doba přechodu v milisekundách. Vyžaduje `light_transition: true`.            |

</details>

#### Příklady

<details>

<summary>Tlačítko posuvníku, které může ovládat jas světla</summary>

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

<summary>Tlačítko s více možnostmi</summary>

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

## Přehrávač médií

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Tato karta umožňuje ovládat entitu přehrávače médií.

### Možnosti přehrávače médií

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované hodnoty | Popis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Povinné** | Libovolný přehrávač médií | Přehrávač médií, který chcete ovládat |
| `name` | string | Volitelné | Libovolný text | Název vašeho přehrávače médií, pokud není definován, zobrazí se název entity |
| `icon` | string | Volitelné | Libovolná ikona `mdi:` | Ikona vašeho přehrávače médií, pokud není definována, zobrazí se ikona entity nebo `entity-picture` |
| `force_icon` | boolean | Volitelné | `true` nebo `false` (výchozí) | Upřednostní ikonu před `entity-picture` |
| `show_state` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí nebo skryje stav vaší `entity` |
| `show_name` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje název |
| `show_icon` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje ikonu |
| `show_last_changed` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední změny vaší `entity` |
| `show_last_updated` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední aktualizace vaší `entity` |
| `show_attribute` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí atribut vaší `entity` pod jejím `name` |
| `attribute` | string | Volitelné (povinné, pokud je `show_attribute` nastaveno na `true`) | Atribut vaší `entity` | Atribut, který se má zobrazit (např. `brightness`) |
| `scrolling_effect` | boolean | Volitelné | `true` (výchozí) nebo `false` | Umožní rolování textu, když obsah přesahuje velikost svého kontejneru |
| `min_volume` | number | Volitelné | Libovolné číslo | Minimální hodnota posuvníku hlasitosti. |
| `max_volume` | number | Volitelné | Libovolné číslo | Maximální hodnota posuvníku hlasitosti. |
| `cover_background` | boolean | Volitelné | `true` nebo `false` (výchozí) | Použije rozmazaný obal média jako pozadí karty. |
| `button_action` | object | Volitelné | `tap_action`, `double_tap_action` nebo `hold_action`, viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Umožňuje změnit výchozí akce při kliknutí na tlačítko. |
| `tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při kliknutí na ikonu, pokud není definována, použije se `more-info`. |
| `double_tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při dvojitém kliknutí na ikonu, pokud není definována, použije se `none`. |
| `hold_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při podržení ikony, pokud není definována, použije se `more-info`. |
| `main_buttons_position` | string | Volitelné | `default` nebo `bottom` | Přesune akční tlačítka na obalu dolů (pevně) |
| `main_buttons_full_width` | boolean | Volitelné | `true` nebo `false` | Roztáhne spodní akční tlačítka na celou šířku (výchozí: `true`, když je pozice `bottom`) |
| `main_buttons_alignment` | string | Volitelné | `end` (výchozí), `center`, `start`, `space-between` | Zarovnání spodních akčních tlačítek, když nejsou přes celou šířku |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo pohled se sekcemi), `large` (výchozí v pohledu se sekcemi), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |
| `sub_button` | object | Volitelné | Viz [podtlačítka](#podtlačítka) | Přidá přizpůsobená tlačítka ukotvená vpravo |
| `hide` | object | Volitelné | Viz níže | Skryje tlačítka na kartě |

#### Možnosti skrytí

| Název | Typ | Povinnost | Podporované hodnoty | Popis |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Volitelné | `true` nebo `false` (výchozí) | Skryje tlačítko přehrát/pozastavit |
| `volume_button` | boolean | Volitelné | `true` nebo `false` (výchozí) | Skryje tlačítko hlasitosti |
| `previous_button` | boolean | Volitelné | `true` nebo `false` (výchozí) | Skryje tlačítko předchozí |
| `next_button` | boolean | Volitelné | `true` nebo `false` (výchozí) | Skryje tlačítko další |
| `power_button` | boolean | Volitelné | `true` nebo `false` (výchozí) | Skryje tlačítko napájení |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Hlavní barva pozadí přehrávače médií |
| `--bubble-media-player-border-radius` | `px` | Poloměr zaoblení rohů přehrávače médií |
| `--bubble-media-player-buttons-border-radius` | `px` | Poloměr zaoblení rohů tlačítek přehrávače médií |
| `--bubble-media-player-slider-background-color` | `color` | Barva pozadí posuvníku hlasitosti |
| `--bubble-media-player-icon-border-radius` | `px` | Poloměr zaoblení rohů kontejneru ikony přehrávače médií |
| `--bubble-media-player-icon-background-color` | `color` | Barva pozadí kontejneru ikony přehrávače médií |
| `--bubble-media-player-box-shadow` | Viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín přehrávače médií |

</details>


#### Příklady

<details>

<summary>Přehrávač médií se všemi možnostmi</summary>

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

Tato karta umožňuje ovládat vaše entity `cover`.

### Možnosti rolet

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Povinné** | Libovolná roleta | Roleta, kterou chcete ovládat |
| `name` | string | Volitelné | Libovolný řetězec | Název pro vaši roletu, pokud není definován, zobrazí se název entity |
| `force_icon` | boolean | Volitelné | `true` nebo `false` (výchozí) | Upřednostní ikonu před `entity-picture` |
| `show_state` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí nebo skryje stav vaší entity `entity` |
| `show_name` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje název |
| `show_icon` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje ikonu |
| `show_last_changed` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední změny vaší entity `entity` |
| `show_last_updated` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední aktualizace vaší entity `entity` |
| `show_attribute` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí atribut vaší entity `entity` pod jejím `name` |
| `attribute` | string | Volitelné (povinné, pokud je `show_attribute` nastaveno na `true`) | Atribut vaší entity `entity` | Atribut k zobrazení (např. `brightness`) |
| `scrolling_effect` | boolean | Volitelné | `true` (výchozí) nebo `false` | Umožní rolování textu, když obsah přesáhne velikost svého kontejneru |
| `icon_open` | string | Volitelné | Libovolná ikona `mdi:` | Ikona pro otevřenou roletu, pokud není definována, zobrazí se výchozí ikona otevřené rolety |
| `icon_close` | string | Volitelné | Libovolná ikona `mdi:` | Ikona pro zavřenou roletu, pokud není definována, zobrazí se výchozí ikona zavřené rolety |
| `icon_up` | string | Volitelné | Libovolná ikona `mdi:` | Ikona pro tlačítko otevření rolety, pokud není definována, zobrazí se výchozí ikona otevřené rolety |
| `icon_down` | string | Volitelné | Libovolná ikona `mdi:` | Ikona pro tlačítko zavření rolety, pokud není definována, zobrazí se výchozí ikona zavřené rolety |
| `open_service` | string | Volitelné | Libovolná služba nebo skript | Služba pro otevření rolety, výchozí je `cover.open_cover` |
| `stop_service` | string | Volitelné | Libovolná služba nebo skript | Služba pro zastavení rolety, výchozí je `cover.stop_cover` |
| `close_service` | string | Volitelné | Libovolná služba nebo skript | Služba pro zavření rolety, výchozí je `cover.close_cover` |
| `tilt_buttons` | string | Volitelné | `top` (výchozí), `bottom`, `left`, `right`, `hidden` | Pozice tlačítek naklopení (zobrazí se jen tehdy, když roleta naklopení podporuje) |
| `open_tilt_service` | string | Volitelné | Libovolná služba nebo skript | Služba pro otevření naklopení, výchozí je `cover.open_cover_tilt` |

| `close_tilt_service` | string | Volitelné | Libovolná služba nebo skript | Služba pro zavření naklopení, výchozí je `cover.close_cover_tilt` |
| `button_action` | object | Volitelné | `tap_action`, `double_tap_action` nebo `hold_action`, viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Umožní změnit výchozí akce při kliknutí na tlačítko. |
| `tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při kliknutí na ikonu, pokud není definována, použije se `more-info`. |
| `double_tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při dvojitém kliknutí na ikonu, pokud není definována, použije se `none`. |
| `hold_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při podržení ikony, pokud není definována, použije se `more-info`. |
| `main_buttons_position` | string | Volitelné | `default` nebo `bottom` | Přesune ovládací prvky dolů (napevno) |
| `main_buttons_full_width` | boolean | Volitelné | `true` nebo `false` | Roztáhne spodní ovládací prvky na celou šířku (výchozí: `true`, když je pozice `bottom`) |
| `main_buttons_alignment` | string | Volitelné | `end` (výchozí), `center`, `start`, `space-between` | Zarovnání spodních ovládacích prvků, když nejsou na celou šířku |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo pohled se sekcemi), `large` (výchozí v pohledu se sekcemi), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení stylu karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |
| `sub_button` | object | Volitelné | Viz [podtlačítka](#podtlačítka) | Přidá vlastní tlačítka ukotvená vpravo |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Hlavní barva pozadí podporovaných prvků karty rolet |
| `--bubble-cover-border-radius` | `px` | Zaoblení rohů karty rolet |
| `--bubble-cover-icon-border-radius` | `px` | Zaoblení rohů kontejneru ikony karty rolet |
| `--bubble-cover-icon-background-color` | `color` | Barva pozadí kontejneru ikony karty rolet |
| `--bubble-cover-box-shadow` | Viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín karty rolet |
| `--bubble-button-box-shadow` | Viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín tlačítek na kartě rolet |

</details>


#### Příklad

<details>

<summary>Karta, která ovládá roletu</summary>

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

Tato karta umožňuje přidat rozbalovací nabídku pro vaše entity `input_select` / `select`. Karta také podporuje podtlačítka a všechny běžné funkce Bubble Card.

> [!TIP]
> Pokud chcete, můžete mít i podtlačítka typu select, tato funkce je dostupná ve všech kartách, které podporují podtlačítka.

### Možnosti karty Select

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Povinné** | Libovolná entita | Entita, kterou chcete ovládat |
| `name` | string | Volitelné | Libovolný řetězec | Název pro vaši kartu select, pokud není definován, zobrazí se název entity |
| `icon` | string | Volitelné | Libovolná ikona `mdi:` | Ikona pro vaši kartu select, pokud není definována, zobrazí se ikona entity nebo `entity-picture` |
| `force_icon` | boolean | Volitelné | `true` nebo `false` (výchozí) | Upřednostní ikonu před `entity-picture` |
| `show_state` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí nebo skryje stav vaší entity `entity` |
| `show_name` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje název |
| `show_icon` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje ikonu |
| `show_last_changed` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední změny vaší entity `entity` |
| `show_last_updated` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední aktualizace vaší entity `entity` |
| `show_attribute` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí atribut vaší entity `entity` pod jejím `name` |
| `attribute` | string | Volitelné (povinné, pokud je `show_attribute` nastaveno na `true`) | Atribut vaší entity `entity` | Atribut k zobrazení (např. `brightness`) |
| `scrolling_effect` | boolean | Volitelné | `true` (výchozí) nebo `false` | Umožní rolování textu, když obsah přesáhne velikost svého kontejneru |
| `tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při kliknutí na ikonu, pokud není definována, použije se `more-info`. |
| `double_tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při dvojitém kliknutí na ikonu, pokud není definována, použije se `none`. |
| `hold_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při podržení ikony, pokud není definována, použije se `more-info`. |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo pohled se sekcemi), `large` (výchozí v pohledu se sekcemi), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení stylu karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |
| `sub_button` | object | Volitelné | Viz [podtlačítka](#podtlačítka) | Přidá vlastní tlačítka ukotvená vpravo |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Hlavní barva pozadí podporovaných prvků karty Select |
| `--bubble-select-background-color` | `color` | Barva pozadí karty Select |
| `--bubble-select-list-border-radius` | `px` | Zaoblení rohů rozbalovací nabídky na kartě |
| `--bubble-select-list-item-accent-color` | `color` | Barva zvýraznění vybrané položky |
| `--bubble-select-list-background-color` | `color` | Barva pozadí rozbalovací nabídky na kartě |
| `--bubble-select-list-width` | `px` | Šířka rozbalovací nabídky na kartě |
| `--bubble-select-arrow-background-color` | `color` | Barva pozadí rozbalovací šipky |
| `--bubble-select-button-border-radius` | `px` | Zaoblení rohů tlačítka výběru |
| `--bubble-select-border-radius` | `px` | Zaoblení rohů karty Select |
| `--bubble-select-icon-border-radius` | `px` | Zaoblení rohů kontejneru ikony karty Select |
| `--bubble-select-icon-background-color` | `color` | Barva pozadí kontejneru ikony karty Select |
| `--bubble-select-box-shadow` | Viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín karty Select |

</details>


#### Příklady

<details>

<summary>Karta Select se seznamem scén</summary>

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

## Klimatizace

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Tato karta umožňuje ovládat vaše entity `climate`.

> [!TIP]
> Nabídka výběru režimu je [podtlačítko](#podtlačítka), které se při vytvoření karty přidá automaticky. Můžete je pak podle libosti upravit nebo odebrat.

### Možnosti klimatizace

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název                    | Typ     | Povinnost                           | Podporované možnosti                             | Popis                                                                                                           |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Povinné**                         | Entita klimatizace                               | Entita, kterou chcete ovládat (např. `climate.living_room`).                                                    |
| `name`                  | string  | Volitelné                           | Libovolný řetězec                                | Vlastní název karty. Pokud není definován, zobrazí se název entity.                                             |
| `icon`                  | string  | Volitelné                           | Libovolná ikona `mdi:`                           | Vlastní ikona karty. Pokud není definována, použije se ikona entity nebo `entity-picture`.                      |
| `force_icon`            | boolean | Volitelné                           | `true` nebo `false` (výchozí)                   | Upřednostní ikonu před `entity-picture`.                                                                        |
| `show_state`            | boolean | Volitelné                           | `true` nebo `false` (výchozí)                   | Zobrazí nebo skryje aktuální stav entity `entity`.                                                              |
| `show_name`             | boolean | Volitelné                           | `true` (výchozí) nebo `false`                   | Zobrazí nebo skryje název entity.                                                                               |
| `show_icon`             | boolean | Volitelné                           | `true` (výchozí) nebo `false`                   | Zobrazí nebo skryje ikonu.                                                                                      |
| `hide_target_temp_low`  | boolean | Volitelné (pouze pro entity podporující `target_temp_low`) | `true` nebo `false` (výchozí) | Skryje ovládání dolní cílové teploty, pokud je entitou `entity` podporováno.                                    |
| `hide_target_temp_high` | boolean | Volitelné (pouze pro entity podporující `target_temp_high`)| `true` nebo `false` (výchozí) | Skryje ovládání horní cílové teploty, pokud je entitou `entity` podporováno.                                    |
| `state_color`           | boolean | Volitelné                           | `true` nebo `false` (výchozí)                   | Použije stálou barvu pozadí, když je entita klimatizace zapnutá.                                                |
| `step` | number | Volitelné | Libovolné číslo | Krok teploty. |
| `min_temp` | number | Volitelné | Libovolné číslo | Minimální teplota. |
| `max_temp` | number | Volitelné | Libovolné číslo | Maximální teplota. |
| `button_action` | object | Volitelné | `tap_action`, `double_tap_action` nebo `hold_action`, viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Umožní změnit výchozí akce při kliknutí na tlačítko. |
| `tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při kliknutí na ikonu, pokud není definována, použije se `more-info`. |
| `double_tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při dvojitém kliknutí na ikonu, pokud není definována, použije se `none`. |
| `hold_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při podržení ikony, pokud není definována, použije se `more-info`. |                              |
| `main_buttons_position` | string | Volitelné | `default` nebo `bottom` | Přesune tlačítka ovládání klimatizace dolů (napevno) |
| `main_buttons_full_width` | boolean | Volitelné | `true` nebo `false` | Roztáhne spodní ovládací tlačítka na celou šířku (výchozí: `true`, když je pozice `bottom`) |
| `main_buttons_alignment` | string | Volitelné | `end` (výchozí), `center`, `start`, `space-between` | Zarovnání spodních ovládacích tlačítek, když nejsou na celou šířku |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo pohled se sekcemi), `large` (výchozí v pohledu se sekcemi), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení stylu karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |
| `sub_button`            | object  | Volitelné                           | Viz [podtlačítka](#podtlačítka)                | Přidá vlastní tlačítka ukotvená vpravo. Užitečné pro nabídku výběru režimu klimatizace.                         |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Hlavní barva pozadí podporovaných prvků karty klimatizace |
| `--bubble-climate-border-radius` | `px` | Zaoblení rohů podporovaných prvků karty klimatizace |
| `--bubble-climate-button-background-color` | `color` | Barva pozadí tlačítek karty klimatizace |
| `--bubble-climate-icon-border-radius` | `px` | Zaoblení rohů kontejneru ikony karty klimatizace |
| `--bubble-state-climate-fan-only-color` | `color` | Barva překryvu pro stav fan-only |
| `--bubble-state-climate-dry-color` | `color` | Barva překryvu pro stav dry |
| `--bubble-state-climate-cool-color` | `color` | Barva překryvu pro stav cool |
| `--bubble-state-climate-heat-color` | `color` | Barva překryvu pro stav heat |
| `--bubble-state-climate-auto-color` | `color` | Barva překryvu pro stav auto |
| `--bubble-state-climate-heat-cool-color` | `color` | Barva překryvu pro stav heat-cool |
| `--bubble-climate-accent-color` | `color` | Barva zvýraznění karty klimatizace |
| `--bubble-climate-box-shadow` | Viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín kontejneru klimatizace. |

</details>


#### Příklady

<details>

<summary>Karta klimatizace s rozbalovací nabídkou režimů HVAC</summary>

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

## Kalendář

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Tato karta umožňuje zobrazit vaše entity kalendáře. Její obsah lze posouvat, takže si nadcházející události snadno prohlédnete.

### Možnosti kalendáře

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název               | Typ     | Povinnost    | Podporované možnosti                            | Popis                                                                                   |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Volitelné    | Libovolné číslo (minimum: 1)                   | Počet dní kalendáře, pro které se načtou události, od teď do konce N-tého dne (výchozí: 7) |
| `entities`          | object  | **Povinné**  | Objekt entity kalendáře (viz níže)              | Entita, kterou chcete ovládat (např. `calendar.main_calendar`).                         |
| `entities.entity`   | string  | **Povinné**  | Entita kalendáře                                | Entita kalendáře, která se má zobrazit                                                  |
| `entities.color`    | string  | Volitelné    | Barva                                           | Vlastní barva štítku kalendáře. Pokud není definována, vybere se barva automaticky      |
| `days`              | number  | Volitelné    | Libovolné číslo (minimum: 1)                    | Počet dní kalendáře, pro které se načtou události, od teď do konce N-tého dne (výchozí: 7) |
| `limit`             | number  | Volitelné    | Číslo                                           | Počet událostí, které se na kartě zobrazí                                               |
| `show_end`          | boolean | Volitelné    | `true` nebo `false` (výchozí)                   | Zobrazí nebo skryje čas konce událostí                                                  |
| `show_progress`     | boolean | Volitelné    | `true` (výchozí) nebo `false`                   | Zobrazí nebo skryje ukazatel průběhu události                                           |
| `show_started_events`| boolean | Volitelné    | `true` (výchozí) nebo `false`                   | Zobrazí nebo skryje již probíhající události                                                       |
| `scrolling_effect`  | boolean | Volitelné | `true` (výchozí) nebo `false` | Umožní rolování textu, když obsah přesáhne velikost svého kontejneru |
| `event_action` | object | Volitelné | `tap_action`, `double_tap_action` nebo `hold_action`, viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Umožní přidat akce při kliknutí na událost. |
| `tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při kliknutí na den, pokud není definována, použije se `none`. |
| `double_tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při dvojitém kliknutí na den, pokud není definována, použije se `none`. |
| `hold_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při podržení dne, pokud není definována, použije se `none`. |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo pohled se sekcemi), `large` (výchozí v pohledu se sekcemi), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení stylu karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |
| `sub_button` | object | Volitelné | Viz [podtlačítka](#podtlačítka) | Přidá vlastní tlačítka ukotvená vpravo |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná                                  | Očekávaná hodnota | Popis                                                              |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Hlavní barva pozadí podporovaných prvků karty kalendáře            |
| `--bubble-calendar-border-radius`         | `px`           | Zaoblení rohů podporovaných prvků karty kalendáře                  |
| `--bubble-calendar-height`                | `px`           | Výška karty kalendáře                                               |

</details>

#### Příklady

<details>

<summary>Karta kalendáře s omezeným počtem událostí</summary>

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

<summary>Karta kalendáře s časem konce a ukazatelem průběhu</summary>

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


## Oddělovač

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Tato karta je jednoduchý oddělovač pro rozdělení pop-upu do kategorií / sekcí, např. Světla, Zařízení, Rolety, Nastavení, Automatizace...

### Možnosti oddělovače

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `name` | string | Volitelné, ale doporučené | Libovolný řetězec | Název vašeho oddělovače |
| `icon` | string | Volitelné, ale doporučené | Libovolná ikona `mdi:` | Ikona vašeho oddělovače |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo zobrazení sekcí), `large` (výchozí v zobrazení sekcí), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení stylu karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |
| `sub_button` | object | Volitelné | Viz [podtlačítka](#podtlačítka) | Přidá vlastní tlačítka ukotvená vpravo |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Barva pozadí čáry v oddělovači |

</details>

#### Příklad

<details>

<summary>Oddělovač pro sekci „Rolety“</summary>

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

## Prázdný sloupec

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Tato karta slouží k vyplnění prázdného sloupce. Hodí se, pokud máte v pop-upu `horizontal-stack` pouze s jednou kartou. Podívejte se do pravého dolního rohu tohoto snímku obrazovky, abyste ji (ne)viděli.

### Možnosti prázdného sloupce

Tato karta nemá žádné možnosti a nepodporuje [styly](#styly), podporuje však možnosti rozvržení pro sekce HA.

#### Příklad

<details>

<summary>Prázdný sloupec v horizontálním zásobníku</summary>

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

## Pouze podtlačítka

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Tato karta je určena výhradně podtlačítkům. Je ideální pro menu, rychlé akce, informační čipy nebo pevné zápatí ve spodní části stránky.

> [!IMPORTANT]  
> Tato karta používá nové schéma podtlačítek. Svá tlačítka definujte pomocí `sub_button.bottom`. Sekce `sub_button.main` je ignorována.

### Možnosti karty Pouze podtlačítka

<details>

<summary><b>Možnosti (YAML + popisy)</b></summary>

| Název | Typ | Povinnost | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Povinné** | Viz [podtlačítka](#podtlačítka) | Definujte svá podtlačítka pomocí sekce `bottom` |
| `hide_main_background` | boolean | Volitelné | `true` nebo `false` (výchozí) | Odstraní pozadí karty |
| `footer_mode` | boolean | Volitelné | `true` nebo `false` (výchozí) | Ukotví kartu ve spodní části stránky |
| `footer_full_width` | boolean | Volitelné | `true` nebo `false` (výchozí) | Roztáhne zápatí na celou šířku (100%) |
| `footer_width` | number | Volitelné | Libovolné číslo | Šířka zápatí v pixelech, když je `footer_full_width` nastaveno na `false` |
| `footer_bottom_offset` | number | Volitelné | Libovolné číslo | Vzdálenost od spodního okraje stránky v pixelech (výchozí: `16`) |
| `card_layout` | string | Volitelné | `normal` (výchozí mimo zobrazení sekcí), `large` (výchozí v zobrazení sekcí), `large-2-rows`, `large-sub-buttons-grid` | Rozvržení stylu karty, viz [rozvržení karet](#rozvržení-karet) |
| `rows` | number | Volitelné | Libovolné číslo | Počet řádků (výška) (např. `2`) |

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Šířka zápatí, když je `footer_full_width` nastaveno na `false` |
| `--bubble-footer-bottom` | `px` | Spodní odsazení zápatí |
| `--bubble-footer-box-shadow` | viz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Stín kontejneru zápatí |

</details>

#### Příklady

<details>

<summary>Čipy (jako na snímku obrazovky)</summary>

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

<summary>Pevné menu v zápatí</summary>

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

## Podtlačítka

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Ke každé kartě, která tuto možnost podporuje, můžete přidat podtlačítka a své karty tak ještě více přizpůsobit. Můžete například vytvořit tlačítko ovládající vysavač, kartu počasí nebo téměř cokoli, co vás napadne. Tato podtlačítka podporují akce klepnutí a většinu možností tlačítka.

Podtlačítka nyní podporují tři typy: **Výchozí (tlačítko)**, **Posuvník** a **Rozbalovací nabídka / Select**. V jedné kartě můžete typy kombinovat, umisťovat podtlačítka nahoru nebo dolů a organizovat je do skupin pro pokročilejší rozvržení.

#### Umístění podtlačítek a skupiny

<details>

<summary><b>Struktura podtlačítek (main / bottom + skupiny)</b></summary>

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
- `main` a `bottom` jsou dvě nezávislé sekce. Spodní podtlačítka jsou ukotvena ke spodnímu okraji karty.
- `main_layout` a `bottom_layout` přijímají `inline` (výchozí) nebo `rows` pro svislé skládání skupin.
- Skupiny jsou objekty s polem `group` a volitelným `buttons_layout` (`inline` nebo `column`).
- `justify_content` je dostupné **pouze pro spodní skupiny** (`start`, `center`, `end`, `fill`).
- Pokud jsou přítomna spodní podtlačítka, rozvržení karty se automaticky přepne na `large`, pokud výslovně nenastavíte jiné rozvržení.
- Starší pole `sub_button` jsou stále podporována a považována za sekci `main`.

</details>

### Možnosti podtlačítek

<details>

<summary><b>Možnosti (YAML + popis)</b></summary>

| Název | Typ | Povinnost | Podporované možnosti | Popis |
| --- | --- | --- | --- | --- |
| `entity` | string | Volitelné | Libovolná entita | Entita k ovládání |
| `name` | string | Volitelné | Libovolný řetězec | Název vašeho podtlačítka, pokud není definován, zobrazí se název entity |
| `icon` | string | Volitelné | Libovolná ikona `mdi:` | Ikona vašeho podtlačítka, pokud není definována, zobrazí se ikona entity nebo obrázek entity |
| `force_icon` | boolean | Volitelné | `true` nebo `false` (výchozí) | Vynutí ikonu, i když je k dispozici obrázek entity |
| `sub_button_type` | string | Volitelné | `default`, `slider` nebo `select` | Volba typu podtlačítka |
| `show_background` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí pozadí vašeho podtlačítka, jeho barva se bude měnit podle stavu entity |
| `state_background` | boolean | Volitelné | `true` (výchozí) nebo `false` | Použije barvu stavu, když je entita `on` |
| `light_background` | boolean | Volitelné | `true` (výchozí) nebo `false` | Použije barvu světla pro pozadí, pokud je k dispozici |
| `show_state` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí nebo skryje stav vaší `entity` |
| `show_name` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí nebo skryje název |
| `show_icon` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje ikonu |
| `show_last_changed` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední změny vaší `entity` |
| `show_last_updated` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí čas poslední aktualizace vaší `entity` |
| `show_attribute` | boolean | Volitelné | `true` nebo `false` (výchozí) | Zobrazí atribut vaší `entity` pod jejím `name` |
| `attribute` | string | Volitelné (povinné, pokud je `show_attribute` nastaveno na `true`) | Atribut vaší `entity` | Atribut k zobrazení (např. `brightness`) |
| `select_attribute` | string | Volitelné | Seznam atributů z vaší `entity` (podporované možnosti viz výše) | Tento seznam atributů po kliknutí otevře rozbalovací nabídku (např. `effect_list`) |
| `show_arrow` | boolean | Volitelné | `true` (výchozí) nebo `false` | Zobrazí nebo skryje šipku rozbalovací nabídky u podtlačítek typu select |
| `scrolling_effect` | boolean | Volitelné | `true` (výchozí) nebo `false` | Povolí rolování textu, když obsah přesáhne velikost kontejneru |
| `tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při kliknutí na podtlačítko, pokud není definována, použije se `more-info`. |
| `double_tap_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při dvojitém kliknutí na podtlačítko, pokud není definována, použije se `none`. |
| `hold_action` | object | Volitelné | Viz [akce](#akce-klepnutí-dvojitého-klepnutí-a-podržení) | Definuje typ akce při podržení podtlačítka, pokud není definována, použije se `more-info`. |
| `fill_width` | boolean | Volitelné | `true` nebo `false` | Vyplní dostupnou šířku (výchozí: `false` pro main, `true` pro bottom) |
| `width` | number nebo string | Volitelné | Libovolné číslo nebo délka CSS | Vlastní šířka (ve výchozím nastavení `px` pro sekci main, `%` pro sekci bottom) |
| `custom_height` | number | Volitelné | Libovolné číslo | Vlastní výška v pixelech |
| `content_layout` | string | Volitelné | `icon-left` (výchozí), `icon-top`, `icon-bottom`, `icon-right` | Umístění ikony uvnitř podtlačítka |
| `always_visible` | boolean | Volitelné | `true` nebo `false` (výchozí) | **Pouze posuvník.** Vždy zobrazí posuvník místo jeho otevírání klepnutím |
| `show_button_info` | boolean | Volitelné | `true` nebo `false` (výchozí) | **Pouze posuvník.** Zobrazí ikonu/název/stav, když je zapnuto `always_visible` |
| `visibility` | object nebo list | Volitelné | Viz [podmínky](https://www.home-assistant.io/docs/scripts/conditions/) | Zobrazí nebo skryje podtlačítko na základě podmínek |
| `hide_when_parent_unavailable` | boolean | Volitelné | `true` nebo `false` (výchozí) | Skryje podtlačítko, pokud je entita nadřazené karty nedostupná |

</details>

<details>

<summary><b>Možnosti posuvníkových podtlačítek (stejné jako u posuvníků tlačítek)</b></summary>

<br>

Posuvníková podtlačítka podporují stejné možnosti posuvníku jako posuvníky tlačítek, včetně:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Proměnné CSS (viz <a href="#styly">Styly</a>)</b></summary>

| Proměnná | Očekávaná hodnota | Popis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Zaoblení rohů podtlačítek |
| `--bubble-sub-button-background-color` | `color` | Barva pozadí podtlačítek |
| `--bubble-sub-slider-border-radius` | `px` | Zaoblení rohů posuvníkových podtlačítek |
| `--bubble-sub-slider-background-color` | `color` | Barva pozadí posuvníkových podtlačítek |
| `--bubble-sub-slider-height` | `px` | Výška vždy viditelných posuvníkových podtlačítek |
| `--bubble-sub-button-dark-text-color` | `color` | Barva textu na světlém pozadí podtlačítek |

</details>

#### Příklady

<details>

<summary>Tlačítko s několika podtlačítky pro vytvoření karty vysavače (jako na snímku obrazovky)</summary>

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

<summary>Posuvníkové tlačítko s podtlačítkem zobrazujícím jas a podtlačítkem pro přepnutí světla (jako na snímku obrazovky)</summary>

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

<summary>Tlačítko zobrazující vnitřní a venkovní teplotu spolu s počasím pro dnešek a zítřek (včetně snímku obrazovky)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Mám smůlu, u nás je pořád zataženo, ale všechny ikony se mění podle počasí.

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

## Rozvržení karet

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card plně podporuje pohled se sekcemi Home Assistant, můžete změnit rozvržení karty tak, aby byla větší, a také změnit počet sloupců nebo řádků, které má karta v pohledu se sekcemi zabírat (pouze u karet, které tuto možnost podporují). Tato rozvržení jsou podporována i ve všech ostatních typech pohledů.

<details>

<summary><b>Dostupná rozvržení karet</b></summary>

| Rozvržení | Popis |
| --- | --- |
| `normal` | Běžné rozvržení (není optimalizované pro pohled se sekcemi) |
| `large` | Větší rozvržení, které se přizpůsobí zvolenému počtu řádků v pohledu se sekcemi (optimalizované pro pohled se sekcemi) |
| `large-2-rows` | Větší rozvržení se 2 řádky podtlačítek, které se přizpůsobí zvolenému počtu řádků v pohledu se sekcemi (optimalizované pro pohled se sekcemi) |
| `large-sub-buttons-grid` | Toto rozvržení zobrazí podtlačítka v mřížce, `rows` musí být nastaveno alespoň na `2`.

</details>

#### Příklady

<details>

<summary>Velké tlačítko zobrazující statistiky energie se 2 řádky podtlačítek (včetně snímku obrazovky)</summary>

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

<summary>Velké tlačítko s více řádky a 12 podtlačítky</summary>

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

## Akce klepnutí, dvojitého klepnutí a podržení

Na kartách, které tuto možnost podporují, můžete používat také výchozí akce Home Assistant pro klepnutí, dvojité klepnutí a podržení. Můžete tak například zobrazit okno „Více informací“ podržením ikony tlačítka nebo spustit službu při stisknutí podtlačítka.

**Poznámka: Když je nastavena akce `double_tap_action`, běžná akce `tap_action` bude mít zpoždění 200 ms, aby bylo možné
rozpoznat dvojité klepnutí. Pokud je toto zpoždění nežádoucí, nastavte `double_tap_action` na `none` a zpracování dvojitého klepnutí tím vypnete.**

### Možnosti akcí

<details>

<summary><b>Možnosti (YAML + popis)</b></summary>

| Název | Typ | Podporované možnosti | Popis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Akce, která se má provést |
| `target` | object |  | Funguje pouze s `call-service`. Řídí se [syntaxí home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Libovolná cesta ve vašem přehledu | Cesta, na kterou se má přejít (např. `'#kitchen'` pro otevření pop-upu), když je akce nastavena na navigate |
| `url_path` | string | Libovolný odkaz | URL, která se má otevřít po kliknutí (např. `https://www.google.com`), když je akce `url` |
| `service` | string | Libovolná služba | Služba, která se má zavolat (např. `media_player.media_play_pause`), když je `action` nastavena na `call-service` |
| `data` nebo `service_data` | object | Libovolná data služby | Data služby, která se mají předat (např. `entity_id: media_player.kitchen`), když je `action` nastavena na `call-service` |
| `confirmation` | object | Viz [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Zobrazí potvrzovací pop-up (nejde o pop-up Bubble Card), přepisuje výchozí objekt `confirmation` |

</details>

#### Příklad

<details>

<summary>Tlačítko pro otevření pop-upu</summary>

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

## Styly

Vlastní styly pro úpravu CSS všech karet **bez použití card-mod** můžete přidat čtyřmi způsoby:

- V editoru přejděte na kartu, kterou chcete upravit, poté otevřete _Možnosti stylu > Vlastní styly a šablony JS_ a přidejte své vlastní styly (podívejte se na tipy a příklady níže).
- V editoru (nebo v [YAML](#moduly)) přejděte na kartu, kterou chcete upravit, poté otevřete _Moduly_ a vytvořte nový modul (bude dostupný všem kartám), nebo přejděte do **Module Store** a nainstalujte libovolný dostupný modul (více podrobností o modulech najdete [níže](#moduly)).
- V souboru [tématu](https://www.home-assistant.io/integrations/frontend/#defining-themes) přidáním CSS proměnných v YAML (najdete je v dokumentaci každé karty výše). To umožňuje globální úpravy.

  <details>
  
  <summary>Příklad</a></summary>
  
  <br>

  Nekopírujte řádek `Bubble:`, to je název tématu, které používáte. Z proměnných také musíte odstranit `--`.

  Po každé úpravě musíte spustit akci [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes), aby se téma obnovilo.

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
  
- V YAML přidáním `styles: |` následovaného vašimi vlastními styly (podívejte se na tipy a příklady níže).

> [!TIP]  
> **Abyste pochopili, které třídy stylů lze upravit**, můžete se podívat do složky [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) v tomto repozitáři. Ve složce každé karty najdete soubor s názvem `styles.css`. Tyto soubory obsahují všechny aplikované styly. To nabízí mnohem více možností než CSS proměnné, ale je potřeba je přidat ke každé kartě zvlášť.
> 
> Můžete také najít spoustu [příkladů od komunity](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), nebo s trochou hledání i některé na [fóru Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/).
>
> Téma Bubble pro Home Assistant (jako na snímcích obrazovky) najdete [zde](https://github.com/Clooos/Bubble).
>
> Na mém [kanálu YouTube](https://www.youtube.com/@cloooos) brzy vyjde videonávod!

> [!IMPORTANT]  
> Upozorňujeme, že k některým již definovaným CSS stylům možná budete muset přidat `!important;` (viz příklady níže).

> [!TIP]  
> Podtlačítka lze cílit pomocí tříd odvozených z názvu. Například podtlačítko s názvem "My sub-button" lze stylovat pomocí `.my-sub-button`. Podtlačítka s posuvníkem navíc nabízejí `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` atd.

#### Příklady

<details>

<summary>Změna velikosti písma libovolné Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Změna barvy pozadí jednoho tlačítka v horizontálním zásobníku tlačítek</summary>

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

<summary>Změna barvy pozadí karty</summary>

<br>

Tento příklad funguje na všech typech Bubble Card (kromě pop-upů):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Tento dělá totéž pouze na kartě tlačítka (funguje pro záhlaví pop-upu): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Chcete-li změnit barvu, když je stav `on`, podívejte se na šablony stylů níže.

</details>

<details>

<summary>Změna barvy posuvníku tlačítka</summary>

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

<summary>Změna barvy čáry oddělovače</summary>

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

<summary>Změna barvy ikony</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Pro ikonu horizontálního zásobníku tlačítek.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Změna barvy pozadí kontejneru ikony</summary>

<br>

Tento příklad funguje na všech typech Bubble Card (kromě pop-upů):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Tento dělá totéž pro záhlaví pop-upu: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Změna velikosti podtlačítek (ideální pro rozvržení large)</summary>

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

<summary>Změna barvy pozadí druhého podtlačítka</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Změna velikosti ikony</summary>

<br>

Pro hlavní ikonu.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Pro ikony podtlačítek.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Použití obrázku místo ikony v podtlačítku</summary>

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

Stačí tento obrázek nahrát do složky „pictures“ (nebo s libovolným názvem) ve složce „www“ Home Assistant.

</details>

<details>

<summary>Pokročilý příklad: Vytvoření horizontální řady podtlačítek (včetně snímku obrazovky)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Tenhle mám opravdu rád, používám ho jako záhlaví svého přehledu.

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

## Šablony

**Bubble Card nepodporuje šablony Jinja**, ale pokročilí uživatelé mohou přidávat šablony v JS přímo ve svých [vlastních stylech](#styly). Díky tomu můžete například dynamicky měnit ikonu, texty nebo barvy prvku, podmíněně zobrazit či skrýt prvek (třeba podtlačítko), nebo téměř cokoli jiného na základě stavu, atributu a dalších hodnot.

> [!TIP]  
> Více informací o šablonách JS najdete [zde](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Doporučuji **vždy nahlédnout do konzole prohlížeče**, abyste měli jistotu, že vše funguje správně.

> [!IMPORTANT]  
> **Všechny šablony, které nemění CSS vlastnost, musí být umístěny na konci! Například změna ikony, textu nebo jakéhokoli prvku.**

#### Dostupné proměnné a funkce

<details>

<summary>Proměnné</summary>

<br>

Ve většině karet máte přístup k těmto proměnným:

- `state` vrátí stav vámi definované `entity`.
  
- `entity` vrátí entitu, kterou jste definovali, v tomto příkladu například `switch.test`.
  
- `icon` lze použít ke změně ikony takto: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` vrátí stav `entity` definované u vašeho prvního podtlačítka, `[0]` je stav prvního podtlačítka, `[1]` druhého...
  
- `subButtonIcon[0]` lze použít ke změně ikony prvního podtlačítka takto: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` je ikona prvního podtlačítka, `[1]` druhého...
  
- `card` vrátí prvek karty v DOM.
  
- `hass` je pokročilá proměnná, která vám dává ještě větší kontrolu, například můžete vrátit stav `light.kitchen` takto: `hass.states['light.kitchen'].state`, nebo atribut takto: `hass.states[entity].attributes.brightness`.

- `this` vrátí spoustu užitečných informací o vaší instalaci a dashboardu, používejte jen v případě, že víte, co děláte.

</details>

<details>

<summary>Funkce</summary>

<br>

Máte přístup ke všem globálním funkcím JS, ale navíc také k těmto:

- `getWeatherIcon` lze použít k vrácení ikony počasí na základě stavu, který vrací počasí. Můžete například napsat `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` a změnit tak ikonu třetího podtlačítka na ikonu dnešního počasí, `.forecast[1]?.condition` je pro zítřek...

  K tomu si budete muset vytvořit šablonový senzor. Toto můžete přidat do svého `configuration.yaml`:
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
- `hass.formatEntityState(state)` lze použít k přeložení stavu (lze také použít k získání jednotky stavu, aniž byste ji museli přidávat ručně).
- `hass.formatEntityAttributeValue(state, "attribute")` lze použít k přeložení atributu (lze také použít k získání jednotky stavu, aniž byste ji museli přidávat ručně).

</details>

#### Příklady

Níže najdete spoustu příkladů, ale velmi pokročilé šablony najdete i na mé [stránce na Patreonu](https://www.patreon.com/c/Clooos), například jednu (mou oblíbenou), která umožňuje až čtyři podmíněné odznaky rozmístěné kolem ikon karty. Je to také skvělý způsob, jak poznat všechny možnosti vlastních stylů a šablon Bubble Card!

<details>
<summary>Příklady z mé stránky na Patreonu</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Příklad 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Přidání odznaků ve stylu Home Assistant na libovolnou kartu</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Příklad 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Zobrazení formátovaného data a času v oddělovači bez použití jakékoli entity</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Příklad 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Zobrazení stavu podtlačítka na dvou řádcích</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Příklad 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Přizpůsobení popisků a ikon uvnitř podtlačítka typu select</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Příklad 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Přidání trvalého připomínkového pop-upu, který se zobrazí jen tehdy, když je potřeba</a>
</p>

<br>

</details>

<details>

<summary>Změna barvy pozadí tlačítka, které je červené ve stavu <code>off</code> a modré ve stavu <code>on</code></summary>

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

<summary>Změna barvy pozadí tlačítka na základě entity pro horizontální zásobník tlačítek</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Podmíněné zobrazení/skrytí podtlačítka</summary>

<br>

Tento příklad zobrazí první podtlačítko jen tehdy, když se můj vysavač zasekne.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Tento příklad zobrazí podtlačítko, když je baterie pod 10 %. Užitečné s podtlačítkem, které zobrazuje "Slabá baterie".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Podmíněná změna ikony nebo ikony podtlačítka</summary>

<br>

Tento příklad změní ikonu tlačítka jen tehdy, když se vysavač zasekne.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Tento příklad změní ikonu prvního podtlačítka jen tehdy, když se vysavač zasekne.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Podmíněná změna barvy ikony nebo ikony podtlačítka</summary>

<br>

Tento příklad mění barvu ikony tlačítka podle jejího stavu.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Tento příklad mění barvu ikony podtlačítka podle jejího stavu. `.bubble-sub-button-1` je první podtlačítko, nahraďte `1`, pokud chcete změnit ikonu jiného podtlačítka.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Podmíněná animace ikony ventilátoru</summary>

<br>

Tento příklad otáčí ikonou tlačítka, když je ventilátor ve stavu `on`.
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

<summary>Šablonování textů (například názvu nebo stavu)</summary>

<br>

Tento příklad změní název/stav tlačítka na "It's currently sunny" podle vašeho počasí.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
nebo v případě podtlačítek:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Pokud chcete šablonovat stav (`.bubble-state`), nezapínejte `show_state: true`, jen zapněte `show_attribute: true` bez jakéhokoli atributu.

</details>

<details>

<summary>Pokročilý příklad: Změna barvy podtlačítka, když je otevřený pop-up</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Pokročilý příklad: Šablonování názvu oddělovače na základě stavu přeloženého do vašeho jazyka</summary>

<br>

Můžete použít `hass.formatEntityState(state)` k přeložení stavu a `hass.formatEntityAttributeValue(state, "attribute")` k přeložení atributu.

Tento příklad mění název a ikonu podle počasí, "Nuageux" znamená francouzsky "Zataženo".

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

Moduly jsou mocná funkce, která umožňuje ukládat, znovu používat a sdílet vaše vlastní styly a šablony napříč všemi vašimi Bubble Cards. Místo kopírování stejného kódu do více karet můžete vytvořit modul a použít jej všude, kde jej potřebujete. Správa vzhledu vašeho dashboardu je tak mnohem snazší a efektivnější.

Ale tato funkce je mnohem mocnější než jen to, umožňuje vám do editoru Bubble Card přidávat skutečné funkce, a to s využitím všech výchozích možností [formulářů Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Selektor objektů byl vylepšen tak, aby zobrazoval změny živě a správně podporoval atributy.

Můžete také procházet **Module Store**, najít a nainstalovat [moduly vytvořené komunitou](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), nebo sdílet své vlastní výtvory!

> [!TIP]
> Kód modulu funguje úplně stejně jako kód v sekci `styles` karty. K dispozici jsou všechny stejné proměnné a funkce ze sekce [Šablony](#šablony).

<br>

### Prvotní nastavení

> [!IMPORTANT]
> Od verze v3.1.0 je Bubble Card Tools doporučeným úložištěm pro moduly. Starší metoda se šablonovým senzorem u stávajících instalací stále funguje, ale nové moduly a funkce Module Store jsou nejlépe podporovány přes Bubble Card Tools.

Integrace Bubble Card Tools zpřístupňuje editor modulů a Module Store a ukládá moduly jako samostatné YAML soubory. Stávající moduly jsou migrovány automaticky.

Kroky instalace a konfigurace jsou vysvětleny zde:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Editor modulů

K editoru modulů se dostanete z nastavení kterékoli karty, v sekci **Moduly**. Editor nabízí dvě hlavní záložky:

#### Záložka Moje moduly

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Tato záložka zobrazuje všechny vaše nainstalované moduly a umožňuje vám:

- **Aplikovat** existující moduly na aktuální kartu
- **Vytvořit** nový modul od nuly
- **Upravovat** existující moduly s živým náhledem
- **Mazat** moduly, které už nepotřebujete
- **Hledat** a **řadit** moduly (abecedně, podle novosti, aktivní první)
- **Nastavit globální stav**, aby se modul automaticky aplikoval na všechny karty
- **Importovat/Exportovat** moduly pro zálohu nebo sdílení

#### Záložka Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Tato záložka zobrazí [všechny dostupné moduly od komunity](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) a umožňuje vám:

- **Procházet** všechny moduly vytvořené komunitou
- **Hledat** a filtrovat moduly podle názvu, kompatibility nebo klíčových slov
- **Instalovat** moduly jedním kliknutím
- **Aktualizovat** nainstalované moduly, když jsou k dispozici nové verze

> [!TIP]
> V editoru můžete povolit nepodporované moduly a vyzkoušet tak moduly, které zatím nejsou označeny jako kompatibilní s daným typem karty.

<br>

### Jak používat moduly

#### Vytvoření nového modulu

<details>

<summary>Kliknutím rozbalíte</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Přejděte do editoru kterékoli karty a rozbalte sekci **Moduly**.
2. Klikněte na **Vytvořit nový modul**.
3. Vyplňte informace o modulu.
4. Napište kód svých CSS a/nebo JavaScript šablon do editoru **Kód**.
5. (Volitelné) Vytvořte vlastní konfigurační rozhraní v sekci **Editor** (jako výběr barvy na snímku výše, kompletní dokumentace je k dispozici [zde](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. Klikněte na **Uložit**.

Váš modul je nyní k dispozici pro použití na kterékoli z vašich karet!

<br>

</details>

#### Aplikace modulu na kartu

<details>

<summary>Kliknutím rozbalíte</summary>

<br>

- **Přes editor:**

  - Přejděte do editoru karty, na kterou chcete modul aplikovat.
  - Rozbalte sekci **Moduly**.
  - Klikněte v seznamu na modul, který chcete aplikovat.
  - V části "Použít na" klikněte na "Tato karta". Modul je nyní aktivní. Na stejnou kartu můžete aplikovat více modulů.

- **Přes YAML:**

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

#### Globální aplikace modulu

<details>

<summary>Kliknutím rozbalíte</summary>

<br>

Modul můžete nastavit tak, aby se automaticky aplikoval na všechny Bubble Cards:

**To není k dispozici pro moduly s editorem, protože ty ke svému fungování vyžadují specifickou konfiguraci.**

- **Přes editor:**

  - V editoru modulů najděte svůj modul na záložce **Moje moduly**.
  - Zapněte přepínač **Všechny karty** vedle názvu modulu.
  - Modul se nyní bude automaticky aplikovat na všechny karty.
 
- **Přes YAML:**

  Do YAML konfigurace svého modulu (v `bubble-modules.yaml`) jednoduše přidejte `is_global: true`.

<br>

</details>

#### Vyloučení jedné karty z globálního modulu

<details>

<summary>Kliknutím rozbalíte</summary>

<br>

Pokud máte globální modul, ale chcete jej vyloučit z konkrétní karty:

- **Přes editor:**
  
  - V sekci **Moduly** dané karty uvidíte seznam globálních modulů.
  - Klikněte na globální modul a vypněte "Tato karta", čímž jej z této konkrétní karty vyloučíte.

- **Přes YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Sdílení modulu do Module Store

<details>

<summary>Kliknutím rozbalíte</summary>

<br>

Chcete-li sdílet svůj modul do Module Store, v editoru modulů dole v části "Exportovat modul" klikněte na "Kopírovat pro GitHub" a vložte obsah do nové diskuze v kategorii [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Upravte popis** (pokud je to potřeba), **příklad** (pro uživatele YAML) a nezapomeňte **přiložit alespoň jeden snímek obrazovky** pro Module Store.

**Váš modul je k dispozici hned poté** (po obnovení Store), takže si dvakrát zkontrolujte, že je vše správně napsané a modul funguje podle očekávání. Modul můžete samozřejmě po sdílení upravovat/aktualizovat.

<br>

</details>

#### Správa verzí

<details>

<summary>Kliknutím rozbalíte</summary>

<br>

Module Store automaticky kontroluje aktualizace nainstalovaných modulů. Když jsou k dispozici aktualizace:

1. Na záložce **Module Store** uvidíte indikátor aktualizace.
2. Klikněte na **Aktualizovat** u modulů s dostupnými aktualizacemi.
3. Potvrďte aktualizaci v Module Store.

<br>

</details>

#### Definice podporovaných typů karet

<details>

<summary>Kliknutím rozbalíte</summary>

<br>

Některé moduly nemusí být kompatibilní se všemi typy karet. Můžete určit, které karty modul podporuje.  
Pokud chcete, aby byl modul kompatibilní se **všemi kartami**, jednoduše vynechte pole `supported` (nebo použijte možnost **Všechny karty** v editoru).

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

### Příklady

<details>
<summary>Základní stylovací modul</summary>

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
<summary>Modul s vlastní konfigurací</summary>

<br>

Tento modul je k dispozici [zde](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Další příklady najdete v Module Store nebo [zde](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Pomoc

Pokud něco nefunguje podle očekávání, neváhejte otevřít issue. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Máte otázky nebo postřehy k Bubble Card? Chcete se pochlubit svými přehledy nebo objevy? Můžete zamířit na fórum Home Assistant, na subreddit Bubble Card nebo do sekce GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Přispívání

Příspěvky jsou vítány! Ať už jde o opravy chyb, nové funkce, překlady nebo vylepšení dokumentace, neváhejte otevřít pull request.

Než začnete, přečtěte si prosím [průvodce pro vývojáře](DEVELOPERS.md), který popisuje, jak si nastavit lokální prostředí, sestavit projekt a otestovat své změny.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Podpořte projekt

Většinu svého volného času věnuji tomu, aby byl tento projekt co nejlepší. Pokud si tedy mé práce vážíte, jakýkoli dar je skvělým způsobem, jak vyjádřit podporu 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Děkuji vám všem za vaši podporu, jste mou největší motivací!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
