<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ez az oldal automatikus fordítás. Kétség esetén az [eredeti angol dokumentáció](../README.md) az irányadó. Furcsán hangzik egy mondat? Minden segítséget szívesen fogadunk, és [ennek az oldalnak a javítása](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.hu.md) csak egy percet vesz igénybe: a forkról és a pull requestről a GitHub gondoskodik. Előre is köszönjük! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Olvassa el más nyelven](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

A Bubble Card egy minimalista és testreszabható kártyagyűjtemény a Home Assistanthez, amely modern pop-upokat és egy beépített Module Store-t kínál, benne több mint 100 közösség által készített modullal.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Tartalomjegyzék

**[`Telepítés`](#telepítés)**  **[`Konfiguráció`](#konfiguráció)**  **[`Entitásjavaslatok`](#entitásjavaslatok)**  **[`Pop-up`](#pop-up)**  **[`Vízszintes gombsor`](#vízszintes-gombsor)**  **[`Gomb`](#gomb)**  **[`Médialejátszó`](#médialejátszó)**  **[`Árnyékoló`](#árnyékoló)**  **[`Választó`](#választó)**  **[`Klíma`](#klíma)**  **[`Naptár`](#naptár)**  **[`Elválasztó`](#elválasztó)**  **[`Üres oszlop`](#üres-oszlop)**  **[`Csak algombok`](#csak-algombok)**  **[`Algombok`](#algombok)**  **[`Kártyaelrendezések`](#kártyaelrendezések)**  **[`Feltételek`](#feltételek)**  **[`Műveletek`](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek)**  **[`Stílus`](#stílus)**  **[`Sablonok`](#sablonok)**  **[`Modulok`](#modulok)**  **[`Honosítás`](#honosítás)**  **[`Súgó`](#súgó)**  **[`Közreműködés`](#közreműködés)**  **[`Támogatás`](#támogatás)**

<br>

## Telepítés

**Home Assistant legalacsonyabb támogatott verziója:** 2023.9.0

<details>

<summary>HACS nélkül</summary>

<br>

1. Töltsd le a `bubble-card.zip` fájlt a [legfrissebb kiadásból](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Csomagold ki a `<config>/www` mappádba, a `bubble-card.js` fájlt és mellette egy `translations` mappát kell kapnod (ez a mappa tartalmazza a szerkesztő szótárait, nélküle a szerkesztő angolul marad)
3. Az irányítópulton kattints a jobb felső sarokban lévő ikonra, majd a `Vezérlőpult szerkesztése` gombra
4. Kattints újra arra az ikonra, majd az `Erőforrások kezelése` menüpontra
5. Kattints az `Erőforrás hozzáadása` gombra
6. Másold be a következőt: `/local/bubble-card.js?v=1`
7. Kattints a `JavaScript Module` opcióra, majd a `Létrehozás` gombra
8. Menj vissza, és frissítsd az oldalt
9. Ezután a jobb alsó sarokban a `Kártya hozzáadása` gombra kattintva rákereshetsz a `Bubble Card`-ra
10. A fájl minden frissítése után szerkesztened kell a `/local/bubble-card.js?v=1` sort, és a verziószámot egy magasabbra kell változtatnod

Ha nem működik, próbáld meg törölni a böngésződ gyorsítótárát.

</details>

<details>

<summary>HACS-szal (Ajánlott)</summary>

<br>

Ez a módszer lehetővé teszi, hogy a frissítéseket közvetlenül a Home Assistant Community Store-on keresztül kapd meg

1. Ha a HACS még nincs telepítve, töltsd le az itt található útmutató alapján: [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Végezd el a HACS kezdeti beállítását az itt található útmutató alapján: [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Az oldalsávban lépj a "HACS" menüpontra
4. Keress rá a "Bubble Card"-ra, vagy kattints az alábbi kék gombra
5. Kattints a "Letöltés" gombra
6. Menj vissza az irányítópultra, és kattints a jobb felső sarokban lévő ikonra, majd a `Vezérlőpult szerkesztése` gombra
7. Ezután a jobb alsó sarokban a `Kártya hozzáadása` gombra kattintva rákereshetsz a `Bubble Card`-ra

Ha nem működik, próbáld meg törölni a böngésződ/alkalmazásod gyorsítótárát (ha szükséges, minden eszközödön).

#### Videók

Az én YouTube-csatornámon is találsz lépésről lépésre videókat.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguráció

Minden beállítás elvégezhető a Home Assistant szerkesztőjében. De az alábbi dokumentációban több részletet és a YAML-t is megtalálod.

<details>

<summary><b>Fő beállítások (YAML + leírás)</b></summary>

| Név | Típus | Kötelezőség | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `type` | string | **Kötelező** | `custom:bubble-card` | A kártya típusa |
| `card_type` | string | **Kötelező** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` vagy `sub-buttons` | A Bubble Card típusa, lásd lentebb |
| `styles` | object list | Nem kötelező | Bármilyen CSS stíluslap | Lehetővé teszi a Bubble Card CSS testreszabását, lásd [stílus](#stílus) |

</details>

<details>

<summary><b>Globális CSS változók (lásd: <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Lekerekítés minden támogatott elemhez |
| `--bubble-main-background-color` | `color` | Fő háttérszín minden támogatott elemhez |
| `--bubble-secondary-background-color` | `color` | Másodlagos háttérszín minden támogatott elemhez |
| `--bubble-accent-color` | `color` | Kiemelőszín minden támogatott elemhez |
| `--bubble-icon-border-radius` | `px` | Ikon lekerekítése minden támogatott elemhez |
| `--bubble-icon-background-color` | `color` | Ikon háttérszíne minden támogatott elemhez |
| `--bubble-sub-button-border-radius` | `px` | Lekerekítés minden algombhoz |
| `--bubble-sub-button-background-color` | `color` | Háttérszín minden algombhoz |
| `--bubble-box-shadow` | lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Árnyék minden támogatott elemhez |
| `--bubble-border` | lásd [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Keret minden támogatott kártyához |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Nézd meg ezt a [videót](https://www.youtube.com/watch?v=0hSQOlBxKKI), hogy megismerd a Bubble Card lehetőségeit.** A YouTube-csatornám elég új, és a Home Assistantről és a Bubble Cardról szóló oktatóvideókra összpontosít. Ne habozz feliratkozni, hogy segíts növelni a csatornám láthatóságát. Előre is köszönöm!

<br>

---

<br>

## Entitásjavaslatok

A Home Assistant 2026.6 óta egy entitás kiválasztása a kártyaválasztóban néhány kész kártyát kínál fel, és a Bubble Card hozzáadja a saját receptjeit ehhez a listához. Válassz egy lámpát, és fényerő csúszkával ellátott kártyát kapsz, valamint színhőmérséklet, szín és telítettség változatot, ha a lámpád támogatja őket. Válassz egy árnyékolót, és megkapod a pozíció csúszkáját, válassz egy médialejátszót, és megkapod a forráslistájával ellátott változatot is, válassz egy robotporszívót, és megkapod az indítás, szünet és dokkolás gombjait. Minden javaslat egy szokásos Bubble Card konfiguráció, élő előnézetként megjelenítve, így kiveheted a hozzád legközelebb állót, és a megszokott módon szerkesztheted tovább.

Az, hogy mit ajánl fel, attól függ, mire képes valójában az entitásod: a fényerő csatorna nélküli lámpa csúszka helyett kapcsolót kap, a dönteni nem tudó árnyékoló nem kap döntés változatot, a klíma entitás pedig csak akkor kapja meg az előre beállított módjait, ha vannak neki. A klasszikus bejegyzések a Bubble Card javaslatai alatt következnek, ha van értelmük: az adott entitástípushoz tartozó kártya, egy egyszerű gomb és egy csúszka.

> [!TIP]
> A modulok saját javaslatokat adhatnak ehhez a listához, lásd [modulok](#modulok).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ez a kártya lehetővé teszi, hogy bármilyen tartalommal pop-upot hozz létre. Minden pop-up **alapértelmezetten rejtett**, és megnyitható a hivatkozásának megcélzásával (pl. `'#pop-up-name'`), bármilyen kártyával, amely támogatja a `navigate` [műveletet](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek), vagy a mellékelt [vízszintes gombsorral](#vízszintes-gombsor).

> [!TIP]
> ### Pop-up trigger 
> Ez a funkció lehetővé teszi, hogy egy pop-upot bármely entitás állapota alapján nyiss meg, például megnyithatsz egy "Biztonság" pop-upot egy kamerával, amikor valaki a házad előtt tartózkodik. Létrehozhatsz egy toggle helpert (input_boolean) is, és annak nyitását/zárását egy automatizálásban indíthatod.
> <details>
> <summary>Pop-up megnyitása, amikor egy <code>binary_sensor</code> <code>on</code> állapotban van</summary>
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
> ### A pop-up bezárásának különböző módjai 
> Számos módon bezárhatod a pop-upot. Például elhúzhatod a pop-up fejlécétől lefelé, hosszú húzással a pop-upon belül lefelé, az Escape billentyű megnyomásával asztali gépen, a hash eltávolításával az URL-ből, vagy egyszerűen a bezárás gombra kattintva.
>


### Pop-up beállításai

<details>

<summary><b>Beállítások (YAML + leírások)</b></summary>

| Név | Típus | Kötelezőség | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `hash` | string | **Kötelező** | Bármilyen egyedi hash (pl. `'#kitchen'`) ' ' jelekkel | Így fogod megnyitni a pop-upodat |
| `popup_style` | string | Nem kötelező | `bubble` (alapértelmezett) vagy `classic` | Meghatározza a pop-up vizuális stílusát |
| `popup_mode` | string | Nem kötelező | `default` (alapértelmezett), `fit-content`, `centered` vagy `adaptive-dialog` | Meghatározza a pop-up elrendezési módját |
| `with_bottom_offset` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | Csak `popup_mode: fit-content` vagy `adaptive-dialog` esetén használatos. Alsó térközt alkalmaz mobilon, hasznos, ha az irányítópultod tartalmaz egy lábléc kártyát. |
| `full_width_on_mobile` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | Csak `popup_mode: centered` esetén használatos. A pop-upot mobilon a képernyő teljes szélességére nyújtja, hasznos kisebb kijelzőkön. |
| `performance_mode` | string | Nem kötelező | `default` (alapértelmezett) vagy `performance` | Optimalizálja a pop-up nyitási animációját. A `performance` kissé késlelteti a tartalom megjelenítését és a háttér elmosását, valamint kikapcsolja a backdrop blurt, ha be van állítva. |
| `auto_close` | string | Nem kötelező | Egy időtúllépés ezredmásodpercben (pl. `10000` 10 másodpercért) | A pop-up automatikus bezárása egy időtúllépés után |
| `close_on_click` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | A pop-up automatikus bezárása bármilyen interakció után |
| `close_by_clicking_outside` | boolean | Nem kötelező | `true` (alapértelmezett) vagy `false` | A pop-up bezárása a rajta kívülre kattintva |
| `width_desktop` | string | Nem kötelező | Bármilyen CSS érték | Szélesség asztali gépen (mobilon alapértelmezetten `100%`) |
| `margin` | string | Nem kötelező | Bármilyen CSS érték | Ezt **csak** akkor használd, ha a pop-upod nincs jól középre igazítva mobilon (pl. `13px`) |
| `margin_top_mobile` | string | Nem kötelező | Bármilyen CSS érték | Felső térköz mobilon (pl. `-56px`, ha a fejléced rejtve van) |
| `margin_top_desktop` | string | Nem kötelező | Bármilyen CSS érték | Felső térköz asztali gépen (pl. `50vh` egy félméretű pop-uphoz, vagy `calc(100vh - 400px)` egy fix `400px` magassághoz) |
| `bg_color` | string | Nem kötelező | Bármilyen hex, rgb vagy rgba érték | A pop-up háttérszíne (pl. `#ffffff` egy fehér háttérhez) |
| `bg_opacity` | string | Nem kötelező | Bármilyen érték `0`-tól `100`-ig | A pop-up háttér átlátszatlansága (pl. `100` átlátszóság nélkül) |
| `bg_blur` | string | Nem kötelező | Bármilyen érték `0`-tól `100`-ig | A pop-up háttér elmosási effektje, **ez csak akkor működik, ha a `bg_opacity` nincs `100`-ra állítva** (pl. `0` elmosás nélkül) |
| `shadow_opacity` | string | Nem kötelező | Bármilyen érték `0`-tól `100`-ig | A pop-up árnyékának átlátszatlansága (pl. `0` az elrejtéséhez) |
| `hide_backdrop` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | Állítsd ezt true-ra a fő irányítópultod első pop-upján, hogy kikapcsold a backdropot minden pop-upon. |
| `background_update` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | A pop-up tartalmának frissítése a háttérben (nem ajánlott) |
| `trigger` | object vagy list | Nem kötelező | Lásd [feltételek](#feltételek) | Megnyitja ezt a pop-upot, ha a feltételek teljesülnek |
| `trigger_entity` | string | Nem kötelező | Bármilyen entitás | A pop-up megnyitása bármely entitás állapota alapján, a `trigger` egyszerű formája |
| `trigger_state` | string | Nem kötelező (**Kötelező**, ha a `trigger_entity` meg van adva) | Bármilyen entitásállapot | Az entitás állapota, amely megnyitja a pop-upot |
| `trigger_close` | boolean | Nem kötelező | `true` (alapértelmezett) vagy `false` | A pop-up bezárása, ha a feltételek már nem teljesülnek. Ehelyett `false` az alapértelmezés, ha a régebbi `trigger_entity` és `trigger_state` párost használod |
| `open_action` | object | Nem kötelező | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Egy művelet indítása a pop-up megnyitásakor |
| `close_action` | object | Nem kötelező | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Egy művelet indítása a pop-up bezárásakor |
| `show_header` | boolean | Nem kötelező | `true` (alapértelmezett) vagy `false` | A pop-up fejlécének teljes megjelenítése/elrejtése |
| `show_previous_button` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | Egy "előző" gomb megjelenítése a bezárás gomb mellett, amely az előző pop-upra navigál vissza, ha elérhető |
| `show_close_button` | boolean | Nem kötelező | `true` (alapértelmezett) vagy `false` | A bezárás gomb megjelenítése vagy elrejtése, miközben a fejléc többi része látható marad |
| `buttons_position` | string | Nem kötelező | `right` (alapértelmezett) vagy `left` | A bezárás és az előző gomb pozíciója a fejlécben |
| `cards` | list | Nem kötelező | Bármilyen Bubble Card, Home Assistant kártya vagy egyéni kártya | Meghatározza a pop-up tartalmát. Lásd a lenti pop-up példát. |
| A pop-up fejlécéhez [minden gombbeállítás](#gomb) elérhető. | | Nem kötelező | | Ha nincs meghatározva, nem jelenik meg fejléc |

</details>

<details>

<summary><b>CSS változók (lásd: <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Lekerekítés a pop-uphoz |
| `--bubble-pop-up-main-background-color` | `color` | Fő háttérszín a pop-up támogatott elemeihez |
| `--bubble-pop-up-background-color` | `color` | A pop-up háttérszíne |
| `--bubble-backdrop-background-color` | `color` | A backdrop háttérszíne |
| A pop-up fejlécéhez [minden gomb CSS változó](#gomb-beállításai) elérhető. | | |

</details>


### Önálló pop-up formátum (v3.2.0+)

A v3.2.0 óta a pop-upok egy új, önálló formátumot használnak, amelyben a tartalomkártyák közvetlenül a pop-upon belül vannak meghatározva a `cards` opció segítségével. Ez jobb teljesítményt és egy új, szekció alapú fogd és vidd szerkesztési élményt biztosít.


#### Példák

<details>

<summary>Egy pop-up (önálló formátum)</summary>

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

<summary>Egy gomb a pop-up megnyitásához</summary>

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

## Vízszintes gombsor

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ez a kártya jó kiegészítője a pop-up kártyának, mivel lehetővé teszi a hozzá tartozó pop-upok megnyitását. Emellett az irányítópultod bármely oldalának megnyitását is lehetővé teszi. Ezenkívül hozzáadhatod a mozgás-/jelenlétérzékelőidet, hogy a gombok sorrendje az éppen belépett szobától függően igazodjon. Ez a kártya görgethető, mindig látható marad, és lábléceként funkcionál.

> [!IMPORTANT]  
> Ennek a kártyának a nézeted utolsó elemének kell lennie (minden kártya és pop-up után). Nem lehet semmilyen stack-en belül.

### Vízszintes gombsor beállításai

<details>

<summary><b>Beállítások (YAML + leírások)</b></summary>

| Név | Típus | Kötelezőség | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Kötelező** | A pop-up hash-e (pl. `'#kitchen'`) ' ' jelekkel, vagy bármilyen link | Egy megnyitandó link |
| `1_name` | string | Nem kötelező | Bármilyen szöveg | Egy név a gombodhoz |
| `1_icon` | string | Nem kötelező | Bármilyen `mdi:` ikon | Egy ikon a gombodhoz |
| `1_entity` | string | Nem kötelező | Bármilyen lámpa vagy lámpacsoport | Az adott lámpa színének megjelenítése a háttérben |
| `1_pir_sensor` | string | Nem kötelező | Bármilyen bináris érzékelő | Legalább egy vagy több pir sensor az `auto_order`-hez, valójában bármilyen entitástípussal is működik, például hozzáadhatsz lámpacsoportokat is, és a sorrend az utolsó módosított állapotok alapján fog változni. |
| `auto_order` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | A gombok sorrendjének megváltoztatása a `_pir_sensor` utolsó módosítási ideje alapján, **`false`-nak kell lennie, ha a kódodban nincs `_pir_sensor`** |
| `margin` | string | Nem kötelező | Bármilyen CSS érték | Ezt **csak** akkor használd, ha a `horizontal-buttons-stack` nincs jól középre igazítva mobilon (pl. `13px`) |
| `width_desktop` | string | Nem kötelező | Bármilyen CSS érték | Szélesség asztali gépen (mobilon alapértelmezetten `100%`) |
| `is_sidebar_hidden` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | A vízszintes gombsor pozíciójának rögzítése, ha az oldalsáv rejtve van asztali gépen (csak akkor, ha te magad módosítottad annak elrejtését) |
| `rise_animation` | boolean | Nem kötelező | `true` (alapértelmezett) vagy `false` | Állítsd `false`-ra, hogy kikapcsold az animációt, amely az oldal betöltése után aktiválódik |
| `highlight_current_view` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | Az aktuális hash / nézet kiemelése egy lágy animációval |
| `hide_gradient` | boolean | Nem kötelező | `true` vagy `false` (alapértelmezett) | Állítsd `false`-ra a gradiens elrejtéséhez |

> [!IMPORTANT]  
> A számmal kezdődő változók határozzák meg a gombjaidat, egyszerűen változtasd meg ezt a számot további gombok hozzáadásához (lásd a lenti példát).

</details>

<details>

<summary><b>CSS változók (lásd: <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Lekerekítés a vízszintes gombsor gombjaihoz |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Háttérszín a vízszintes gombsor gombjaihoz |

</details>


#### Példa

<details>

<summary>Egy vízszintes gombsor, amely a jelenlétérzékelők alapján saját magát rendezi át</summary>

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

## Gomb

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ez a kártya rendkívül sokoldalú. Használható **kapcsolóként**, **csúszkaként**, **állapotjelzőként** vagy **név/szöveg** gombként.

> [!TIP]
> ### Mi a különbség a gombtípusok között?
>
> - **Switch gomb:** Ez az alapértelmezett gombtípus. Alapesetben egy entitást kapcsol be/ki, és a háttérszíne az entitás állapotától vagy a lámpa színétől függően változik. A műveletét a **Koppintás művelet a kártyán** részben módosíthatod.
>
> - **Slider gomb:** Ezzel a gombtípussal állítható tartományú entitásokat lehet vezérelni. Ideális lámpák fényerejének szabályozásához, és a kitöltési színe alkalmazkodik a lámpa színéhez. Értékek megjelenítésére is használható, például akkumulátorszint kijelzésére.
>   Csúszkákhoz támogatott entitások:
>   - Lámpa (fényerő)
>   - Médialejátszó (hangerő)
>   - Árnyékoló (pozíció)
>   - Ventilátor (százalék)
>   - Klíma (hőmérséklet)
>   - Input number és number (érték)
>   - Akkumulátor érzékelő (százalék, csak olvasható)
>
>   Bármely numerikus állapottal rendelkező entitáshoz is használhatod, ha kikapcsolod az entitásszűrőt a **Csúszka beállításaiban**, majd megadod a `min` és `max` értékeket. Ez az opció csak olvasható.
>
> - **State gomb:** Tökéletes egy érzékelő vagy bármely entitás információinak megjelenítésére. Megnyomásakor megjeleníti az entitás "Bővebb infó" panelét. A háttérszíne nem változik.
>
> - **Name/Text gomb:** Az egyetlen gombtípus, amelyhez nem szükséges entitás. Lehetővé teszi egy rövid szöveg, egy név vagy egy cím megjelenítését. Műveleteket is hozzáadhatsz hozzá. A háttérszíne nem változik.

### Gomb beállításai

<details>

<summary><b>Beállítások (YAML és leírások)</b></summary>

| Név | Típus | Követelmény | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `entity` | string | **Kötelező** | Bármely entitás | Vezérelendő entitás |
| `button_type` | string | Opcionális | `switch` (alapértelmezett), `slider`, `state` vagy `name` | A gomb viselkedése |
| `name` | string | Opcionális | Bármely string | A gomb neve, ha nincs megadva, az entitás neve jelenik meg |
| `icon` | string | Opcionális | Bármely `mdi:` ikon | A gomb ikonja, ha nincs megadva, az entitás ikonja vagy az `entity-picture` jelenik meg |
| `force_icon` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az ikonnak ad elsőbbséget az `entity-picture` helyett |
| `use_accent_color` | boolean | Opcionális (alapértelmezett `false`) | **Csak lámpákhoz.** A téma kiemelő színét használja a lámpa színe helyett.                         |
| `show_state` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` állapotának megjelenítése vagy elrejtése |
| `show_name` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | A név megjelenítése vagy elrejtése |
| `show_icon` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Az ikon megjelenítése vagy elrejtése |
| `show_last_changed` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó változásának időpontjának megjelenítése |
| `show_last_updated` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó frissítésének időpontjának megjelenítése |
| `show_attribute` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` egy attribútumának megjelenítése a `name` alatt |
| `attribute` | string | Opcionális (kötelező, ha a `show_attribute` értéke `true`) | Az `entity` egyik attribútuma | A megjelenítendő attribútum (pl. `brightness`) |
| `scrolling_effect` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Engedélyezi a szöveg görgetését, ha a tartalom meghaladja a konténer méretét |
| `button_action` | object | Opcionális | `tap_action`, `double_tap_action` vagy `hold_action`, lásd lent | Lehetővé teszi az alapértelmezett műveletek módosítását gombkattintáskor. |
| `tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra koppintáskor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva |
| `double_tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra dupla koppintáskor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva |
| `hold_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikon hosszú nyomásakor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett, ha szekció nézetben van), `large-2-rows`, `large-sub-buttons-grid` | A kártya stíluselrendezése, lásd [kártyaelrendezések](#kártyaelrendezések) |
| `rows` | number | Opcionális | Bármely szám | Sorok száma (magasság) (pl. `2`) |
| `sub_button` | object | Opcionális | Lásd [algombok](#algombok) | Testreszabott, jobb oldalra rögzített gombok hozzáadása |

</details>

<details>

<summary><b>CSS változók (lásd <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Fő háttérszín a gomb támogatott elemeihez |
| `--bubble-button-border-radius` | `px` | A gomb lekerekítése |
| `--bubble-button-icon-border-radius` | `px` | A gombikon konténerének lekerekítése |
| `--bubble-button-icon-background-color` | `color` | A gombikon konténerének háttérszíne |
| `--bubble-light-white-color` | `color` | Lecseréli a lámpagombok/csúszkák alapértelmezett fehér színét |
| `--bubble-light-color` | `color` | Lecseréli a lámpagombok/csúszkák színét (RGB lámpák esetén is) |
| `--bubble-button-box-shadow` | Lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | A gomb árnyéka |

</details>

Ezek a beállítások csak akkor érhetők el, ha a `button_type` értéke `slider`.

<details>

<summary><b>Csúszka beállításai (YAML és leírások)</b></summary>

| Név                  | Típus    | Követelmény                     | Leírás                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opcionális                        | A csúszka minimális értéke. Egyéni csúszkákhoz.                                                    |
| `max_value`             | number  | Opcionális                        | A csúszka maximális értéke. Egyéni csúszkákhoz.                                                    |
| `step`                  | number  | Opcionális                        | A csúszka lépésértéke.                                                                           |
| `tap_to_slide`          | boolean | Opcionális (alapértelmezett `false`)      | Bekapcsolja a korábbi csúszkaviselkedést, ahol koppintással aktiválod a csúszkát, ahelyett hogy nyomva tartanád.        |
| `relative_slide`        | boolean | Opcionális (alapértelmezett `false` )     | Az értéket a kezdőértékhez képest frissíti, nem a kezdő érintési ponthoz képest.                      |
| `read_only_slider`      | boolean | Opcionális (alapértelmezett `false`)      | Csak olvashatóvá teszi a csúszkát. Bizonyos entitásoknál, például érzékelőknél, automatikusan bekapcsol.                        |
| `slider_live_update`    | boolean | Opcionális (alapértelmezett `false`)      | Az entitás állapota csúsztatás közben frissül. **Ez a funkció nem ajánlott minden entitáshoz.**        |
| `slider_fill_orientation` | string | Opcionális | `left`, `right`, `top` vagy `bottom` | Megváltoztatja a csúszka kitöltési irányát. Balról jobbra, ha nincs megadva, tükrözve a [jobbról balra író nyelveken](#honosítás) |
| `slider_value_position` | string | Opcionális | `right`, `left`, `center` vagy `hidden` | Az érték megjelenítésének helye. Jobbra, ha nincs megadva, és balra a [jobbról balra író nyelveken](#honosítás) |
| `invert_slider_value` | boolean | Opcionális (alapértelmezett `false`) | Megfordítja a csúszka irányát (100%-os kitöltés egyenlő a minimummal). Színcsúszkáknál nem elérhető. |
| `light_slider_type` | string | Opcionális | `brightness` (alapértelmezett), `hue`, `saturation`, `white_temp` | **Csak lámpákhoz.** A csúszka módjának kiválasztása |
| `cover_slider_type` | string | Opcionális | `position` (alapértelmezett), `tilt_position` | **Csak árnyékolókhoz.** A csúszka módjának kiválasztása (pozíció vagy dőlés) |
| `hue_force_saturation` | boolean | Opcionális (alapértelmezett `false`) | **Csak lámpákhoz (Hue mód).** Telítettség kényszerítése a színárnyalat állításakor |
| `hue_force_saturation_value` | number | Opcionális (alapértelmezett `100`) | **Csak lámpákhoz (Hue mód).** A kényszerített telítettség értéke (0-100) |
| `use_accent_color` | boolean | Opcionális (alapértelmezett `false`) | **Csak lámpákhoz (Fényerő mód).** A téma kiemelő színét használja a lámpa színe helyett |
| `allow_light_slider_to_0` | boolean | Opcionális (alapértelmezett `false`)    | **Csak lámpákhoz.** Lehetővé teszi, hogy a csúszka elérje a 0%-ot, ami kikapcsolja a lámpát. A `tap_to_slide`-dal nem elérhető. |
| `light_transition`      | boolean | Opcionális (alapértelmezett `false`)      | **Csak lámpákhoz.** Bekapcsolja a fényerő-átmenetek finomítását a támogatott lámpáknál.                           |
| `light_transition_time` | number  | Opcionális (alapértelmezett `500`)        | **Csak lámpákhoz.** Az átmenet ideje ezredmásodpercben. A `light_transition: true` szükséges hozzá.            |

</details>

#### Példák

<details>

<summary>Egy csúszka gomb, amely szabályozza egy lámpa fényerejét</summary>

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

<summary>Egy gomb több beállítással</summary>

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

## Médialejátszó

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ez a kártya lehetővé teszi egy médialejátszó entitás vezérlését.

### Médialejátszó beállításai

<details>

<summary><b>Beállítások (YAML és leírások)</b></summary>

| Név | Típus | Követelmény | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `entity` | string | **Kötelező** | Bármely médialejátszó | A vezérlendő médialejátszó |
| `name` | string | Opcionális | Bármely string | A médialejátszó neve, ha nincs megadva, az entitás neve jelenik meg |
| `icon` | string | Opcionális | Bármely `mdi:` ikon | A médialejátszó ikonja, ha nincs megadva, az entitás ikonja vagy az `entity-picture` jelenik meg |
| `force_icon` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az ikonnak ad elsőbbséget az `entity-picture` helyett |
| `show_state` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` állapotának megjelenítése vagy elrejtése |
| `show_name` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | A név megjelenítése vagy elrejtése |
| `show_icon` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Az ikon megjelenítése vagy elrejtése |
| `show_last_changed` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó változásának időpontjának megjelenítése |
| `show_last_updated` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó frissítésének időpontjának megjelenítése |
| `show_attribute` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` egy attribútumának megjelenítése a `name` alatt |
| `attribute` | string | Opcionális (kötelező, ha a `show_attribute` értéke `true`) | Az `entity` egyik attribútuma | A megjelenítendő attribútum (pl. `brightness`) |
| `scrolling_effect` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Engedélyezi a szöveg görgetését, ha a tartalom meghaladja a konténer méretét |
| `min_volume` | number | Opcionális | Bármely szám | A hangerőcsúszka minimális értéke. |
| `max_volume` | number | Opcionális | Bármely szám | A hangerőcsúszka maximális értéke. |
| `cover_background` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Elmosott médiaborítót használ a kártya háttereként. |
| `button_action` | object | Opcionális | `tap_action`, `double_tap_action` vagy `hold_action`, lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Lehetővé teszi az alapértelmezett műveletek módosítását gombkattintáskor. |
| `tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra koppintáskor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |
| `double_tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra dupla koppintáskor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva. |
| `hold_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikon hosszú nyomásakor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |
| `main_buttons_position` | string | Opcionális | `default` vagy `bottom` | Az irányítógombokat az aljára helyezi (rögzítve) |
| `main_buttons_full_width` | boolean | Opcionális | `true` vagy `false` | Teljes szélességűvé teszi az alsó irányítógombokat (alapértelmezett: `true`, ha a pozíció `bottom`) |
| `main_buttons_alignment` | string | Opcionális | `end` (alapértelmezett), `center`, `start`, `space-between` | Az alsó irányítógombok igazítása, ha nem teljes szélességűek |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett, ha szekció nézetben van), `large-2-rows`, `large-sub-buttons-grid` | A kártya stíluselrendezése, lásd [kártyaelrendezések](#kártyaelrendezések) |
| `rows` | number | Opcionális | Bármely szám | Sorok száma (magasság) (pl. `2`) |
| `sub_button` | object | Opcionális | Lásd [algombok](#algombok) | Testreszabott, jobb oldalra rögzített gombok hozzáadása |
| `hide` | object | Opcionális | Lásd lent | Gombok elrejtése a kártyáról |

#### Elrejtési opciók

| Név | Típus | Követelmény | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A lejátszás/szünet gomb elrejtése |
| `volume_button` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A hangerőgomb elrejtése |
| `previous_button` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az előző gomb elrejtése |
| `next_button` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A következő gomb elrejtése |
| `power_button` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A bekapcsológomb elrejtése |

</details>

<details>

<summary><b>CSS változók (lásd <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Fő háttérszín a médialejátszóhoz |
| `--bubble-media-player-border-radius` | `px` | A médialejátszó lekerekítése |
| `--bubble-media-player-buttons-border-radius` | `px` | A médialejátszó gombjainak lekerekítése |
| `--bubble-media-player-slider-background-color` | `color` | A hangerőcsúszka háttérszíne |
| `--bubble-media-player-icon-border-radius` | `px` | A médialejátszó ikonkonténerének lekerekítése |
| `--bubble-media-player-icon-background-color` | `color` | A médialejátszó ikonkonténerének háttérszíne |
| `--bubble-media-player-box-shadow` | Lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | A médialejátszó árnyéka |

</details>


#### Példák

<details>

<summary>Egy médialejátszó az összes beállítással</summary>

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

## Árnyékoló

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ez a kártya lehetővé teszi a `cover` entitásaid vezérlését.

### Árnyékoló beállításai

<details>

<summary><b>Beállítások (YAML és leírások)</b></summary>

| Név | Típus | Követelmény | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `entity` | string | **Kötelező** | Bármely árnyékoló | Vezérelendő árnyékoló |
| `name` | string | Opcionális | Bármely string | Az árnyékoló neve, ha nincs megadva, az entitás neve jelenik meg |
| `force_icon` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az ikonnak ad elsőbbséget az `entity-picture` helyett |
| `show_state` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` állapotának megjelenítése vagy elrejtése |
| `show_name` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | A név megjelenítése vagy elrejtése |
| `show_icon` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Az ikon megjelenítése vagy elrejtése |
| `show_last_changed` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó változásának időpontjának megjelenítése |
| `show_last_updated` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó frissítésének időpontjának megjelenítése |
| `show_attribute` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` egy attribútumának megjelenítése a `name` alatt |
| `attribute` | string | Opcionális (kötelező, ha a `show_attribute` értéke `true`) | Az `entity` egyik attribútuma | A megjelenítendő attribútum (pl. `brightness`) |
| `scrolling_effect` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Engedélyezi a szöveg görgetését, ha a tartalom meghaladja a konténer méretét |
| `icon_open` | string | Opcionális | Bármely `mdi:` ikon | A nyitott árnyékoló ikonja, ha nincs megadva, az alapértelmezett nyitott árnyékoló ikon jelenik meg |
| `icon_close` | string | Opcionális | Bármely `mdi:` ikon | A zárt árnyékoló ikonja, ha nincs megadva, az alapértelmezett zárt árnyékoló ikon jelenik meg |
| `icon_up` | string | Opcionális | Bármely `mdi:` ikon | A nyitás gomb ikonja, ha nincs megadva, az alapértelmezett nyitott árnyékoló ikon jelenik meg |
| `icon_down` | string | Opcionális | Bármely `mdi:` ikon | A zárás gomb ikonja, ha nincs megadva, az alapértelmezett zárt árnyékoló ikon jelenik meg |
| `open_service` | string | Opcionális | Bármely szolgáltatás vagy script | Az árnyékoló nyitásához használt szolgáltatás, alapértelmezett a `cover.open_cover` |
| `stop_service` | string | Opcionális | Bármely szolgáltatás vagy script | Az árnyékoló megállításához használt szolgáltatás, alapértelmezett a `cover.stop_cover` |
| `close_service` | string | Opcionális | Bármely szolgáltatás vagy script | Az árnyékoló zárásához használt szolgáltatás, alapértelmezett a `cover.close_cover` |
| `tilt_buttons` | string | Opcionális | `top` (alapértelmezett), `bottom`, `left`, `right`, `hidden` | A dőlésvezérlő gombok pozíciója (csak akkor jelenik meg, ha az árnyékoló támogatja a dőlést) |
| `open_tilt_service` | string | Opcionális | Bármely szolgáltatás vagy script | A dőlés nyitásához használt szolgáltatás, alapértelmezett a `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opcionális | Bármely szolgáltatás vagy script | A dőlés zárásához használt szolgáltatás, alapértelmezett a `cover.close_cover_tilt` |
| `button_action` | object | Opcionális | `tap_action`, `double_tap_action` vagy `hold_action`, lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Lehetővé teszi az alapértelmezett műveletek módosítását gombkattintáskor. |
| `tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra koppintáskor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |
| `double_tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra dupla koppintáskor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva. |
| `hold_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikon hosszú nyomásakor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |
| `main_buttons_position` | string | Opcionális | `default` vagy `bottom` | A vezérlőket az aljára helyezi (rögzítve) |
| `main_buttons_full_width` | boolean | Opcionális | `true` vagy `false` | Teljes szélességűvé teszi az alsó vezérlőket (alapértelmezett: `true`, ha a pozíció `bottom`) |
| `main_buttons_alignment` | string | Opcionális | `end` (alapértelmezett), `center`, `start`, `space-between` | Az alsó vezérlők igazítása, ha nem teljes szélességűek |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett, ha szekció nézetben van), `large-2-rows`, `large-sub-buttons-grid` | A kártya stíluselrendezése, lásd [kártyaelrendezések](#kártyaelrendezések) |
| `rows` | number | Opcionális | Bármely szám | Sorok száma (magasság) (pl. `2`) |
| `sub_button` | object | Opcionális | Lásd [algombok](#algombok) | Testreszabott, jobb oldalra rögzített gombok hozzáadása |

</details>

<details>

<summary><b>CSS változók (lásd <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Fő háttérszín az árnyékoló kártya támogatott elemeihez |
| `--bubble-cover-border-radius` | `px` | Az árnyékoló kártya lekerekítése |
| `--bubble-cover-icon-border-radius` | `px` | Az árnyékoló kártya ikonkonténerének lekerekítése |
| `--bubble-cover-icon-background-color` | `color` | Az árnyékoló kártya ikonkonténerének háttérszíne |
| `--bubble-cover-box-shadow` | Lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Az árnyékoló kártya árnyéka |
| `--bubble-button-box-shadow` | Lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Az árnyékoló kártya gombjainak árnyéka |

</details>


#### Példa

<details>

<summary>Egy kártya, amely egy redőnyt vezérel</summary>

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

## Választó

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ez a kártya lehetővé teszi egy legördülő menü hozzáadását az `input_select` / `select` entitásaidhoz. Ez a kártya támogatja az algombokat és a Bubble Card összes közös funkcióját is.

> [!TIP]
> Ha szeretnéd, választó algombokat is használhatsz, ez a funkció minden algombokat támogató kártyán elérhető.

### Választó beállításai

<details>

<summary><b>Beállítások (YAML és leírások)</b></summary>

| Név | Típus | Követelmény | Támogatott opciók | Leírás |
| --- | --- | --- | --- | --- |
| `entity` | string | **Kötelező** | Bármely entitás | Vezérelendő entitás |
| `name` | string | Opcionális | Bármely string | A választó neve, ha nincs megadva, az entitás neve jelenik meg |
| `icon` | string | Opcionális | Bármely `mdi:` ikon | A választó ikonja, ha nincs megadva, az entitás ikonja vagy az `entity-picture` jelenik meg |
| `force_icon` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az ikonnak ad elsőbbséget az `entity-picture` helyett |
| `show_state` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` állapotának megjelenítése vagy elrejtése |
| `show_name` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | A név megjelenítése vagy elrejtése |
| `show_icon` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Az ikon megjelenítése vagy elrejtése |
| `show_last_changed` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó változásának időpontjának megjelenítése |
| `show_last_updated` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó frissítésének időpontjának megjelenítése |
| `show_attribute` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` egy attribútumának megjelenítése a `name` alatt |
| `attribute` | string | Opcionális (kötelező, ha a `show_attribute` értéke `true`) | Az `entity` egyik attribútuma | A megjelenítendő attribútum (pl. `brightness`) |
| `scrolling_effect` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Engedélyezi a szöveg görgetését, ha a tartalom meghaladja a konténer méretét |
| `tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra koppintáskor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |
| `double_tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra dupla koppintáskor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva. |
| `hold_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikon hosszú nyomásakor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett, ha szekció nézetben van), `large-2-rows`, `large-sub-buttons-grid` | A kártya stíluselrendezése, lásd [kártyaelrendezések](#kártyaelrendezések) |
| `rows` | number | Opcionális | Bármely szám | Sorok száma (magasság) (pl. `2`) |
| `sub_button` | object | Opcionális | Lásd [algombok](#algombok) | Testreszabott, jobb oldalra rögzített gombok hozzáadása |

</details>

<details>

<summary><b>CSS változók (lásd <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Fő háttérszín a választó kártya támogatott elemeihez |
| `--bubble-select-background-color` | `color` | Háttérszín a választó kártyához |
| `--bubble-select-list-border-radius` | `px` | A kártya legördülő menüjének lekerekítése |
| `--bubble-select-list-item-accent-color` | `color` | A kiválasztott elem kiemelő színe |
| `--bubble-select-list-background-color` | `color` | A kártya legördülő menüjének háttérszíne |
| `--bubble-select-list-width` | `px` | A kártya legördülő menüjének szélessége |
| `--bubble-select-arrow-background-color` | `color` | A legördülő nyíl háttérszíne |
| `--bubble-select-button-border-radius` | `px` | A választó gomb lekerekítése |
| `--bubble-select-border-radius` | `px` | A választó kártya lekerekítése |
| `--bubble-select-icon-border-radius` | `px` | A választó kártya ikonkonténerének lekerekítése |
| `--bubble-select-icon-background-color` | `color` | A választó kártya ikonkonténerének háttérszíne |
| `--bubble-select-box-shadow` | Lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | A választó kártya árnyéka |

</details>


#### Példák

<details>

<summary>Egy választó kártya jelenetek listájával</summary>

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

## Klíma

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ez a kártya lehetővé teszi a `climate` entitásaid vezérlését.

> [!TIP]
> A módválasztó menü egy [algomb](#algombok), amely automatikusan hozzáadódik a kártya létrehozásakor. Ezután tetszés szerint módosíthatod vagy eltávolíthatod.

### Klíma beállításai

<details>

<summary><b>Beállítások (YAML és leírások)</b></summary>

| Név                     | Típus    | Követelmény                         | Támogatott opciók                                  | Leírás                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Kötelező**                        | Klíma entitás                                   | A vezérlendő entitás (pl. `climate.living_room`).                                                            |
| `name`                  | string  | Opcionális                            | Bármely string                                       | A kártya egyéni neve. Ha nincs megadva, az entitás neve jelenik meg.                                    |
| `icon`                  | string  | Opcionális                            | Bármely `mdi:` ikon                                  | A kártya egyéni ikonja. Ha nincs megadva, az entitás ikonja vagy az `entity-picture` lesz használva.                   |
| `force_icon`            | boolean | Opcionális                            | `true` vagy `false` (alapértelmezett)                     | Elsőbbséget ad az ikonnak az `entity-picture` helyett.                                                           |
| `show_state`            | boolean | Opcionális                            | `true` vagy `false` (alapértelmezett)                     | Az `entity` aktuális állapotának megjelenítése vagy elrejtése.                                                                 |
| `show_name`             | boolean | Opcionális                            | `true` (alapértelmezett) vagy `false`                     | Az entitás nevének megjelenítése vagy elrejtése.                                                                            |
| `show_icon`             | boolean | Opcionális                            | `true` (alapértelmezett) vagy `false`                     | Az ikon megjelenítése vagy elrejtése.                                                                                          |
| `hide_target_temp_low`  | boolean | Opcionális (csak `target_temp_low`-t támogató entitásokhoz) | `true` vagy `false` (alapértelmezett) | Elrejti az alsó célhőmérséklet vezérlőjét, ha az `entity` támogatja.                                          |
| `hide_target_temp_high` | boolean | Opcionális (csak `target_temp_high`-ot támogató entitásokhoz)| `true` vagy `false` (alapértelmezett) | Elrejti a felső célhőmérséklet vezérlőjét, ha az `entity` támogatja.                                         |
| `state_color`           | boolean | Opcionális                            | `true` vagy `false` (alapértelmezett)                     | Állandó háttérszínt alkalmaz, amikor a klíma entitás BE van kapcsolva.                                                              |
| `step` | number | Opcionális | Bármely szám | A hőmérséklet lépésköze. |
| `min_temp` | number | Opcionális | Bármely szám | A minimális hőmérséklet. |
| `max_temp` | number | Opcionális | Bármely szám | A maximális hőmérséklet. |
| `button_action` | object | Opcionális | `tap_action`, `double_tap_action` vagy `hold_action`, lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Lehetővé teszi az alapértelmezett műveletek módosítását gombkattintáskor. |
| `tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra koppintáskor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |
| `double_tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikonra dupla koppintáskor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva. |
| `hold_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza az ikon hosszú nyomásakor végrehajtott műveletet, ha nincs megadva, a `more-info` lesz használva. |                              |
| `main_buttons_position` | string | Opcionális | `default` vagy `bottom` | A klíma vezérlőgombjait az aljára helyezi (rögzítve) |
| `main_buttons_full_width` | boolean | Opcionális | `true` vagy `false` | Teljes szélességűvé teszi az alsó vezérlőgombokat (alapértelmezett: `true`, ha a pozíció `bottom`) |
| `main_buttons_alignment` | string | Opcionális | `end` (alapértelmezett), `center`, `start`, `space-between` | Az alsó vezérlőgombok igazítása, ha nem teljes szélességűek |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett, ha szekció nézetben van), `large-2-rows`, `large-sub-buttons-grid` | A kártya stíluselrendezése, lásd [kártyaelrendezések](#kártyaelrendezések) |
| `rows` | number | Opcionális | Bármely szám | Sorok száma (magasság) (pl. `2`) |
| `sub_button`            | object  | Opcionális                            | Lásd [algombok](#algombok)                | Testreszabott, jobb oldalra rögzített gombok hozzáadása. Hasznos egy klímamód-választó menühöz.                                  |

</details>

<details>

<summary><b>CSS változók (lásd <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Fő háttérszín a klíma kártya támogatott elemeihez |
| `--bubble-climate-border-radius` | `px` | Lekerekítés a klíma kártya támogatott elemeihez |
| `--bubble-climate-button-background-color` | `color` | Háttérszín a klíma kártya gombjaihoz |
| `--bubble-climate-icon-border-radius` | `px` | A klíma kártya ikonkonténerének lekerekítése |
| `--bubble-state-climate-fan-only-color` | `color` | Fedőszín a csak ventilátor állapothoz |
| `--bubble-state-climate-dry-color` | `color` | Fedőszín a szárítás állapothoz |
| `--bubble-state-climate-cool-color` | `color` | Fedőszín a hűtés állapothoz |
| `--bubble-state-climate-heat-color` | `color` | Fedőszín a fűtés állapothoz |
| `--bubble-state-climate-auto-color` | `color` | Fedőszín az automatikus állapothoz |
| `--bubble-state-climate-heat-cool-color` | `color` | Fedőszín a fűtés-hűtés állapothoz |
| `--bubble-climate-accent-color` | `color` | Kiemelő szín a klíma kártyához |
| `--bubble-climate-box-shadow` | Lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | A klíma konténer árnyéka. |

</details>


#### Példák

<details>

<summary>Egy klíma kártya HVAC módok legördülő menüjével</summary>

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

## Naptár

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ez a kártya lehetővé teszi a naptár entitásaid megjelenítését. A tartalma görgethető, így könnyen böngészheted a közelgő eseményeket.

### Naptár beállításai

<details>

<summary><b>Beállítások (YAML és leírások)</b></summary>

| Név                | Típus    | Követelmény  | Támogatott opciók                               | Leírás                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Opcionális     | Bármely szám (minimum: 1)                        | Azon naptári napok száma, amelyekhez az eseményeket lekéri, mostantól az N-edik nap végéig (alapértelmezett: 7) |
| `entities`          | object  | **Kötelező** | Egy naptár entitás objektum (lásd lent)            | A vezérlendő entitás (pl. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Kötelező** | Egy naptár entitás                               | A megjelenítendő naptár entitás                                                          |
| `entities.color`    | string  | Opcionális     | Egy szín                                         | Egyéni szín a naptár chiphez. Ha nincs megadva, egy automatikus szín kerül kiválasztásra |
| `days`              | number  | Opcionális     | Bármely szám (minimum: 1)                         | Azon naptári napok száma, amelyekhez az eseményeket lekéri, mostantól az N-edik nap végéig (alapértelmezett: 7) |
| `limit`             | number  | Opcionális     | Egy szám                                        | A kártyán megjelenítendő események száma                                  |
| `show_end`          | boolean | Opcionális     | `true` vagy `false` (alapértelmezett)                     | Az események befejezési idejének megjelenítése vagy elrejtése                                                    |
| `show_progress`     | boolean | Opcionális     | `true` (alapértelmezett) vagy `false`                     | Az esemény állapotjelző sávjának megjelenítése vagy elrejtése                                                     |
| `show_started_events`| boolean | Opcionális     | `true` (alapértelmezett) vagy `false`                     | A jelenleg folyamatban lévő események megjelenítése vagy elrejtése. A több napon átnyúló eseményeket naponként ítéli meg, így csak a folyamatban lévő nap tűnik el, az elkövetkező napok láthatók maradnak |
| `scrolling_effect`  | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Engedélyezi a szöveg görgetését, ha a tartalom meghaladja a konténer méretét |
| `event_action` | object | Opcionális | `tap_action`, `double_tap_action` vagy `hold_action`, lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Lehetővé teszi műveletek hozzáadását esemény kattintáskor. |
| `tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza a napra koppintáskor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva. |
| `double_tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza a napra dupla koppintáskor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva. |
| `hold_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | Meghatározza a nap hosszú nyomásakor végrehajtott műveletet, ha nincs megadva, a `none` lesz használva. |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett, ha szekció nézetben van), `large-2-rows`, `large-sub-buttons-grid` | A kártya stíluselrendezése, lásd [kártyaelrendezések](#kártyaelrendezések) |
| `rows` | number | Opcionális | Bármely szám | Sorok száma (magasság) (pl. `2`) |
| `sub_button` | object | Opcionális | Lásd [algombok](#algombok) | Testreszabott, jobb oldalra rögzített gombok hozzáadása |

</details>

<details>

<summary><b>CSS változók (lásd <a href="#stílus">Stílus</a>)</b></summary>

| Változó                                  | Elvárt érték | Leírás                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Fő háttérszín a naptár kártya támogatott elemeihez  |
| `--bubble-calendar-border-radius`         | `px`           | Lekerekítés a naptár kártya támogatott elemeihez |
| `--bubble-calendar-height`                | `px`           | A naptár kártya magassága                                        |

</details>

#### Példák

<details>

<summary>Egy naptár kártya korlátozott számú eseménnyel</summary>

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

<summary>Egy naptár kártya befejezési idővel és állapotjelző sávval</summary>

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


## Elválasztó

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ez a kártya egy egyszerű elválasztó, amellyel kategóriákra / szakaszokra oszthatod a pop-upot. Például: Világítás, Eszközök, Árnyékolók, Beállítások, Automatizálások...

### Elválasztó beállításai

<details>

<summary><b>Beállítások (YAML + leírások)</b></summary>

| Név | Típus | Kötelező? | Támogatott értékek | Leírás |
| --- | --- | --- | --- | --- |
| `name` | string | Opcionális, de ajánlott | Bármilyen szöveg | Az elválasztó neve |
| `icon` | string | Opcionális, de ajánlott | Bármilyen `mdi:` ikon | Az elválasztó ikonja |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett szekció nézetben), `large-2-rows`, `large-sub-buttons-grid` | A kártya stílus-elrendezése, lásd a [kártyaelrendezések](#kártyaelrendezések) részt |
| `rows` | number | Opcionális | Bármilyen szám | Sorok száma (magasság) (pl. `2`) |
| `sub_button` | object | Opcionális | Lásd [algombok](#algombok) | Testre szabott gombok hozzáadása, jobbra rögzítve |

</details>

<details>

<summary><b>CSS változók (lásd: <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Háttérszín az elválasztó vonalához |

</details>

#### Példa

<details>

<summary>Elválasztó egy "Árnyékolók" szakaszhoz</summary>

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

## Üres oszlop

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ez a kártya egy üres oszlop kitöltésére szolgál. Akkor hasznos, ha a pop-upodban egy `horizontal-stack` csak egyetlen kártyát tartalmaz. Nézd meg ennek a képernyőképnek a jobb alsó sarkát, hogy (ne) lásd.

### Üres oszlop beállításai

Ennek a kártyának nincsenek beállításai, és nem támogatja a [stílust](#stílus), viszont támogatja a HA szekciók elrendezési beállításait.

#### Példa

<details>

<summary>Üres oszlop egy vízszintes tömbben</summary>

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

## Csak algombok

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Ez a kártya kizárólag algomboknak van szentelve. Tökéletes menükhöz, gyors műveletekhez, információs chipekhez, vagy egy rögzített láblécnek az oldal alján.

> [!IMPORTANT]  
> Ez a kártya az új algomb sémát használja. A `sub_button.bottom` mezővel definiáld a gombjaidat. A `sub_button.main` szakasz figyelmen kívül marad.

### Csak algombok beállításai

<details>

<summary><b>Beállítások (YAML + leírások)</b></summary>

| Név | Típus | Kötelező? | Támogatott értékek | Leírás |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Kötelező** | Lásd [algombok](#algombok) | Az algombok megadása a `bottom` szakasz segítségével |
| `hide_main_background` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A kártya háttér eltávolítása |
| `footer_mode` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A kártya rögzítése az oldal aljához |
| `footer_full_width` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A lábléc teljes szélességűvé tétele (100%) |
| `footer_width` | number | Opcionális | Bármilyen szám | Lábléc szélessége pixelben, ha a `footer_full_width` értéke `false` |
| `footer_bottom_offset` | number | Opcionális | Bármilyen szám | Távolság az oldal aljától pixelben (alapértelmezett: `16`) |
| `card_layout` | string | Opcionális | `normal` (alapértelmezett, ha nincs szekció nézetben), `large` (alapértelmezett szekció nézetben), `large-2-rows`, `large-sub-buttons-grid` | A kártya stílus-elrendezése, lásd a [kártyaelrendezések](#kártyaelrendezések) részt |
| `rows` | number | Opcionális | Bármilyen szám | Sorok száma (magasság) (pl. `2`) |

</details>

<details>

<summary><b>CSS változók (lásd: <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Lábléc szélessége, ha a `footer_full_width` értéke `false` |
| `--bubble-footer-bottom` | `px` | Lábléc alsó eltolása |
| `--bubble-footer-box-shadow` | lásd [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow a lábléc konténerhez |

</details>

#### Példák

<details>

<summary>Chip stílus (mint a képernyőképen)</summary>

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

<summary>Rögzített láblécmenü</summary>

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

## Algombok

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Minden kártyában, amely támogatja ezt a beállítást, algombokat adhatsz hozzá a kártyáid még jobb testreszabásához. Létrehozhatsz például egy gombot, amellyel egy porszívót, egy időjárás kártyát, vagy szinte bármit, amit csak kitalálsz, irányíthatsz. Ezek az algombok támogatják a koppintás műveleteket és a gomb legtöbb beállítását.

Az algombok most már háromféle típust támogatnak: **Alapértelmezett (gomb)**, **Csúszka** és **Legördülő / Választó**. Ugyanabban a kártyában keverheted a típusokat, elhelyezheted az algombokat felül vagy alul, és csoportokba rendezheted őket a fejlettebb elrendezésekhez.

#### Algombok elhelyezése és csoportjai

<details>

<summary><b>Algombok szerkezete (main / bottom + csoportok)</b></summary>

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

**Megjegyzések:**
- A `main` és a `bottom` két önálló szakasz. Az alsó algombok a kártya aljához vannak rögzítve.
- A `main_layout` és a `bottom_layout` a `inline` (alapértelmezett) vagy a `rows` értéket fogadja el, hogy a csoportokat függőlegesen egymásra rendezze.
- A csoportok objektumok, amelyeknek van egy `group` tömbje és egy opcionális `buttons_layout` mezője (`inline` vagy `column`).
- A `justify_content` csak **az alsó csoportoknál** érhető el (`start`, `center`, `end`, `fill`).
- Ha alsó algombok vannak jelen, a kártya elrendezése automatikusan `large` értékre vált, hacsak nem állítasz be kifejezetten másik elrendezést.
- A régi típusú `sub_button` tömbök továbbra is támogatottak, és `main` szakaszként kezelődnek.

</details>

### Algombok beállításai

<details>

<summary><b>Beállítások (YAML + leírás)</b></summary>

| Név | Típus | Kötelező? | Támogatott értékek | Leírás |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcionális | Bármilyen entitás | Az irányítandó entitás |
| `name` | string | Opcionális | Bármilyen szöveg | Az algomb neve, ha nincs megadva, az entitás nevét jeleníti meg |
| `icon` | string | Opcionális | Bármilyen `mdi:` ikon | Az algomb ikonja, ha nincs megadva, az entitás ikonját vagy képét jeleníti meg |
| `force_icon` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az ikon kényszerítése akkor is, ha elérhető entitáskép |
| `sub_button_type` | string | Opcionális | `default`, `slider` vagy `select` | Az algomb típusának kiválasztása |
| `show_background` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Háttér megjelenítése az algombhoz, amely az entitás állapota szerint változtatja a színét |
| `state_background` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Az állapotszín használata, amikor az entitás `on` |
| `light_background` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | A világítás színének használata a háttérhez, ha elérhető |
| `show_state` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` állapotának megjelenítése vagy elrejtése |
| `show_name` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | A név megjelenítése vagy elrejtése |
| `show_icon` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | Az ikon megjelenítése vagy elrejtése |
| `show_last_changed` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó változásának idejének megjelenítése |
| `show_last_updated` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` utolsó frissítésének idejének megjelenítése |
| `show_attribute` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az `entity` egy attribútumának megjelenítése a `name` alatt |
| `attribute` | string | Opcionális (kötelező, ha a `show_attribute` értéke `true`) | Az `entity` egyik attribútuma | A megjelenítendő attribútum (pl. `brightness`) |
| `select_attribute` | string | Opcionális | Az `entity` egyik attribútum listája (lásd a fenti támogatott értékeket) | Ez az attribútumlista kattintásra egy legördülő menüt nyit meg (pl. `effect_list`) |
| `show_arrow` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | A legördülő nyíl megjelenítése vagy elrejtése a választó típusú algomboknál |
| `scrolling_effect` | boolean | Opcionális | `true` (alapértelmezett) vagy `false` | A szöveg görgetésének engedélyezése, amikor a tartalom meghaladja a konténer méretét |
| `tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | A koppintáskor végrehajtandó művelet típusának megadása az algombon, ha nincs megadva, a `more-info` kerül alkalmazásra. |
| `double_tap_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | A dupla koppintáskor végrehajtandó művelet típusának megadása az algombon, ha nincs megadva, a `none` kerül alkalmazásra. |
| `hold_action` | object | Opcionális | Lásd [műveletek](#koppintás-dupla-koppintás-és-hosszú-nyomás-műveletek) | A hosszú nyomáskor végrehajtandó művelet típusának megadása az algombon, ha nincs megadva, a `more-info` kerül alkalmazásra. |
| `fill_width` | boolean | Opcionális | `true` vagy `false` | Az elérhető szélesség kitöltése (alapértelmezett: `false` a main esetén, `true` a bottom esetén) |
| `width` | number vagy string | Opcionális | Bármilyen szám vagy CSS hosszmérték | Egyedi szélesség (`px` a main szakaszhoz, `%` a bottom szakaszhoz alapértelmezetten) |
| `custom_height` | number | Opcionális | Bármilyen szám | Egyedi magasság pixelben |
| `content_layout` | string | Opcionális | `icon-left` (alapértelmezett), `icon-top`, `icon-bottom`, `icon-right` | Az ikon elhelyezése az algombon belül |
| `always_visible` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | **Csak csúszkánál.** A csúszka mindig látható legyen, ahelyett hogy koppintásra nyílna meg |
| `show_button_info` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | **Csak csúszkánál.** Ikon/név/állapot megjelenítése, ha az `always_visible` engedélyezve van |
| `visibility` | object vagy list | Opcionális | Lásd [feltételek](#feltételek) | Az algomb megjelenítése vagy elrejtése feltételek alapján |
| `hide_when_parent_unavailable` | boolean | Opcionális | `true` vagy `false` (alapértelmezett) | Az algomb elrejtése, ha a szülő kártya entitása nem elérhető |
| `css_class` | string | Opcionális | Bármely string | Egy további CSS osztály az algombon, hogy a [stílusaidban](#stílus) megcélozhasd, bármi is a neve (például a `My value` a `.my-value` osztályt adja) |

</details>

<details>

<summary><b>Csúszka algomb beállításai (ugyanaz, mint a gomb csúszkáknál)</b></summary>

<br>

A csúszka algombok ugyanazokat a csúszka beállításokat támogatják, mint a gomb csúszkák, beleértve a következőket:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS változók (lásd: <a href="#stílus">Stílus</a>)</b></summary>

| Változó | Elvárt érték | Leírás |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Lekerekítés az algombokhoz |
| `--bubble-sub-button-background-color` | `color` | Háttérszín az algombokhoz |
| `--bubble-sub-button-outline` | `box-shadow` | Körvonal, amely csak akkor kerül egy algombra vagy csúszkára, ha az adott elem ugyanolyan színnel jelenik meg, mint a mögötte lévő kártya, ami láthatatlanná tenné (állítsd `none` értékre az eltávolításához) |
| `--bubble-sub-slider-border-radius` | `px` | Lekerekítés a csúszka algombokhoz |
| `--bubble-sub-slider-background-color` | `color` | Háttérszín a csúszka algombokhoz |
| `--bubble-sub-slider-height` | `px` | Magasság az állandóan látható csúszka algomboknál |
| `--bubble-sub-slider-outline` | `box-shadow` | Csak a csúszka algombok körvonala, ennek hiányában a `--bubble-sub-button-outline` értékére esik vissza |
| `--bubble-sub-button-dark-text-color` | `color` | Szövegszín a világos algomb hátterek esetén |

</details>

#### Példák

<details>

<summary>Egy gomb néhány algombbal, amellyel egy porszívó kártyát lehet készíteni (mint a képernyőképen)</summary>

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

<summary>Egy gomb csúszka egy algombbal, amely a fényerőt mutatja, és egy másikkal, amely kapcsolja a világítást (mint a képernyőképen)</summary>

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

<summary>Egy gomb, amely a bel- és kültéri hőmérsékletet mutatja, a mai és a holnapi időjárással (képernyőkép mellékelve)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Nekem balszerencsém van, nálam mindig felhős az idő, de az összes ikon az időjárás szerint változik.

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

## Kártyaelrendezések

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

A Bubble Card teljes mértékben támogatja a Home Assistant szekció nézetet, megváltoztathatod a kártya elrendezését, hogy nagyobb legyen a kártya, és megváltoztathatod az oszlopok vagy sorok számát is, amelyeket a kártya elfoglaljon a szekció nézetben (csak azoknál a kártyáknál, amelyek támogatják ezt a beállítást). Ezek az elrendezések minden más nézettípusban is támogatottak.

<details>

<summary><b>Elérhető kártyaelrendezések</b></summary>

| Elrendezés | Leírás |
| --- | --- |
| `normal` | A hagyományos elrendezés (nincs optimalizálva a szekció nézethez) |
| `large` | Egy nagyobb elrendezés, amely a szekció nézetben a kiválasztott sorokhoz igazodik (optimalizálva a szekció nézethez) |
| `large-2-rows` | Egy nagyobb elrendezés 2 sor algombbal, amely a szekció nézetben a kiválasztott sorokhoz igazodik (optimalizálva a szekció nézethez) |
| `large-sub-buttons-grid` | Ez az elrendezés rácsban jeleníti meg az algombokat, a `rows` értékének legalább `2`-nek kell lennie.

</details>

#### Példák

<details>

<summary>Egy nagy gomb, amely energiastatisztikákat mutat 2 sor algombbal (képernyőkép mellékelve)</summary>

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

<summary>Egy nagy gomb több sorral, 12 algombbal</summary>

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

## Feltételek

Néhány beállítást feltételek vezérelnek, pontosan úgy megírva, mint a Home Assistant [feltételes kártyájának](https://www.home-assistant.io/dashboards/conditional/) feltételei:

- `visibility` egy [algombon](#algombok), a megjelenítéséhez vagy elrejtéséhez
- `trigger` egy [pop-upon](#pop-up), a megnyitásához, ha a feltételek teljesülnek
- `checkConditionsMet(conditions, hass)` a [sablonjaidban](#sablonok), amikor a saját kódodban van szükséged a válaszra

A Home Assistant minden feltételtípusa kiértékelésre kerül: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, valamint az `and`, `or` és `not` csoportok. A Home Assistant feltételszerkesztőjének feltételei is működnek, azok, amelyek a domainjükről kapták a nevüket, mint a `sun.is_up`, `light.is_on`, `zone.in_zone` vagy `temperature.is_value`, a `target`, `options`, `behavior` és `for` beállításaikkal együtt.

<details>

<summary><b>Példa</b></summary>

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
> A feltételek a böngésződben értékelődnek ki, így az a néhány, amelyiknek a Home Assistant kiszolgálójára lenne szüksége, nem lehet pontos: a napkelte és a napnyugta a `sun.sun` entitásból olvasódik ki ahelyett, hogy újraszámolódna, és a `for` időtartam az utolsó állapotváltozástól mérődik, a recorder előzményei nélkül.
>
> A `view_columns` elfogadott, de mindig teljesül, hiszen soha nem a Bubble Card rendezi el a nézeted oszlopait. Az olyan feltételtípus, amelyet a Bubble Card nem ismer, egyszer jelentkezik a böngésződ konzoljában ahelyett, hogy némán elbukna, így meg tudod különböztetni az elgépelést a hiányzó funkciótól.

<br>

---

<br>

## Koppintás, dupla koppintás és hosszú nyomás műveletek

A Home Assistant alapértelmezett koppintás, dupla koppintás és hosszú nyomás műveleteit is használhatod azokon a kártyákon, amelyek támogatják ezt a beállítást. Ez lehetővé teszi például a "több infó" ablak megjelenítését egy gomb ikonjának hosszú nyomva tartásával, vagy egy szolgáltatás futtatását egy algomb megnyomásakor.

**Megjegyzés: Ha be van állítva egy `double_tap_action`, a szokásos `tap_action` 200 ms késleltetést kap, hogy a dupla koppintás
felismerhető legyen. Ha ez a késleltetés nem kívánatos, állítsd be a `double_tap_action` értékét `none`-ra a dupla koppintás kezelésének letiltásához.**

### Művelet beállításai

<details>

<summary><b>Beállítások (YAML + leírás)</b></summary>

| Név | Típus | Támogatott értékek | Leírás |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | A végrehajtandó művelet |
| `target` | object |  | Csak a `call-service` esetén működik. A [home-assistant szintaxist](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) követi |
| `navigation_path` | string | A dashboard bármelyik útvonala | Az az útvonal, amelyre navigálni kell (pl. `'#kitchen'` egy pop-up megnyitásához), amikor a művelet navigate-ként van definiálva |
| `url_path` | string | Bármilyen link | A kattintáskor megnyitandó URL (pl. `https://www.google.com`), amikor a művelet `url` |
| `service` | string | Bármilyen szolgáltatás | A meghívandó szolgáltatás (pl. `media_player.media_play_pause`), amikor az `action` `call-service`-ként van definiálva |
| `data` vagy `service_data` | object | Bármilyen szolgáltatásadat | A beillesztendő szolgáltatásadat (pl. `entity_id: media_player.kitchen`), amikor az `action` `call-service`-ként van definiálva |
| `confirmation` | object | Lásd [megerősítés](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Megerősítő pop-up megjelenítése (nem a Bubble Card-é), felülírja az alapértelmezett `confirmation` objektumot |

</details>

#### Példa

<details>

<summary>Egy gomb, amely megnyit egy pop-upot</summary>

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

## Stílus

Négyféleképpen adhatsz hozzá egyéni stílusokat az összes kártya CSS-ének módosításához, **card-mod nélkül**:

- A szerkesztőben lépj a módosítani kívánt kártyához, majd navigálj a _Stílusbeállítások > Egyéni stílusok és JS sablonok_ menüponthoz, és add hozzá az egyéni stílusaidat (nézd meg az alábbi tippeket és példákat).
- A szerkesztőben (vagy [YAML-ben](#modulok)) lépj a módosítani kívánt kártyához, majd navigálj a _Modulok_ menüponthoz, és hozz létre egy új modult (ez elérhető lesz minden kártyán), vagy nyisd meg a **Module Store**-t bármely elérhető modul telepítéséhez (a modulokról bővebben [lentebb](#modulok) olvashatsz).
- Egy [téma](https://www.home-assistant.io/integrations/frontend/#defining-themes) fájlban CSS változók hozzáadásával YAML-ben (ezek minden kártya fenti dokumentációjában elérhetők). Ez globális módosításokat tesz lehetővé.

  <details>
  
  <summary>Példa</a></summary>
  
  <br>

  Ne másold le a `Bubble:` sort, ez a téma neve, amit használsz. A változók elejéről a `--` jelet is el kell távolítanod.

  A módosítások után a [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) műveletet kell futtatnod, hogy frissítsd a témát.

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
  
- YAML-ben a `styles: |` hozzáadásával, amit az egyéni stílusaid követnek (nézd meg az alábbi tippeket és példákat).

> [!TIP]  
> **Ahhoz, hogy megértsd, mely stílusosztályok módosíthatók**, érdemes megnézned a repository [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) mappáját. Minden kártya mappájában találsz egy `styles.css` nevű fájlt. Ezek a fájlok tartalmazzák az összes alkalmazott stílust. Ez jóval több lehetőséget kínál, mint a CSS változók, de minden kártyához külön-külön kell hozzáadni.
> 
> Rengeteg [példát találsz a közösségtől](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) is, vagy néhányat a [Home Assistant fórumon](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) egy kis keresgéléssel.
>
> A Home Assistant Bubble témája (mint a képernyőképeken) [itt](https://github.com/Clooos/Bubble) található.
>
> Hamarosan érkezik egy oktatóvideó a [YouTube csatornámon](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Kérlek vedd figyelembe, hogy néhány már meglévő CSS stílushoz hozzá kell adnod az `!important;` jelölést (lásd az alábbi példákat).

> [!TIP]  
> Az algombok név alapú osztályokkal célozhatók meg. Például egy "My sub-button" nevű algomb a `.my-sub-button` osztállyal stílusozható. A csúszka algombok is elérhetők a `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` stb. osztályokkal.
>
> A név alapú osztály megváltozik, amikor átnevezel egy algombot, és lefordul, amikor a név is le van fordítva. Állíts be `css_class` értéket az algombon, hogy saját osztályt kapj, amely soha nem mozdul el, bármi is a neve és bármelyik nyelvről legyen szó.

#### Példák

<details>

<summary>Bármely Bubble Card betűméretének módosítása</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Egyetlen gomb háttérszínének módosítása egy vízszintes gombsorban</summary>

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

<summary>Egy kártya háttérszínének módosítása</summary>

<br>

Ez minden Bubble Card típuson működik (kivéve a pop-upokat):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ez ugyanezt teszi, de csak egy gombkártyán belül (a pop-up fejlécén is működik): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Ha a színt akkor akarod megváltoztatni, amikor `on` állapotú, nézd meg az alábbi stílussablonokat.

</details>

<details>

<summary>Egy gombcsúszka színének módosítása</summary>

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

<summary>Egy elválasztó vonalszínének módosítása</summary>

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

<summary>Egy ikon színének módosítása</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Egy vízszintes gombsor ikonjához.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Egy ikontartó háttérszínének módosítása</summary>

<br>

Ez minden Bubble Card típuson működik (kivéve a pop-upokat):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ez ugyanezt teszi a pop-up fejlécén: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Az algombok méretének módosítása (tökéletes a nagy elrendezéshez)</summary>

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

<summary>A második algomb háttérszínének módosítása</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Egy ikon méretének módosítása</summary>

<br>

A fő ikonhoz.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Az algombok ikonjaihoz.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Kép használata ikon helyett egy algombban</summary>

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

Csak töltsd fel a képet egy "pictures" mappába (vagy amilyen nevet szeretnél) a Home Assistant "www" mappájában.

</details>

<details>

<summary>Haladó példa: vízszintes algombsor létrehozása (képernyőképpel)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Ezt nagyon szeretem, a saját irányítópultomon fejlécként használom.

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

## Sablonok

**A Bubble Card nem támogatja a Jinja sablonokat**, de a haladó felhasználók közvetlenül JS-ben adhatnak hozzá sablonokat az [egyéni stílusaikban](#stílus). Ez például lehetővé teszi egy ikon, egy szöveg vagy egy elem színének dinamikus megváltoztatását, egy elem feltételes megjelenítését vagy elrejtését (mint egy algomb), vagy szinte bármit egy állapot, egy attribútum és egyebek alapján.

> [!TIP]  
> A JS sablonokról bővebb információ [itt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) található. Az a tanácsom, hogy **mindig nézd meg a böngésződ konzolját**, hogy megbizonyosodj róla, minden megfelelően működik.

> [!IMPORTANT]  
> **Minden sablont, amely nem egy CSS tulajdonságot módosít, a végére kell helyezni! Mint amikor egy ikont, egy szöveget vagy bármilyen elemet módosítasz.**

#### Elérhető változók és függvények

<details>

<summary>Változók</summary>

<br>

A legtöbb kártyán elérhetők ezek a változók:

- a `state` visszaadja a beállított `entity` állapotát.
  
- az `entity` visszaadja az általad beállított entitást, mint például a `switch.test` ebben a példában.
  
- az `icon` így használható az ikon megváltoztatásához: `icon.setAttribute("icon", "mdi:lightbulb")`.

- a `subButtonState[0]` visszaadja az első algombhoz beállított `entity` állapotát, a `[0]` az első algomb állapota, a `[1]` a második...
  
- a `subButtonIcon[0]` így használható az első algomb ikonjának megváltoztatásához: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, a `[0]` az első algomb ikonja, a `[1]` a második...
  
- a `card` visszaadja a kártya elemét a DOM-ban.
  
- a `hass` egy haladó változó, amely még nagyobb kontrollt biztosít, például visszaadhatod a `light.kitchen` állapotát így: `hass.states['light.kitchen'].state`, vagy egy attribútumot így: `hass.states[entity].attributes.brightness`.

- a `this` sok hasznos információt ad vissza a rendszeredről és az irányítópultodról, csak akkor használd, ha tudod, mit csinálsz.

</details>

<details>

<summary>Függvények</summary>

<br>

Az összes globális JS függvényhez hozzáférsz, de emellett ezekhez is:

- a `getWeatherIcon` egy időjárás ikon visszaadására használható az időjárást visszaadó állapot alapján. Például ezt teheted: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, hogy a harmadik algomb ikonját a mai napi időjárás ikonjára változtasd, a `.forecast[1]?.condition` a holnapi napra vonatkozik...

  Ehhez létre kell hoznod egy sablonérzékelőt. Ezt tudod hozzáadni a `configuration.yaml` fájlodhoz:
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
- a `checkConditionsMet(conditions, hass)` `true` értéket ad vissza, ha egy [feltétel](#feltételek) lista teljesül, például `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- a `hass.formatEntityState(state)` egy állapot lefordítására használható (arra is használható, hogy egy állapot mértékegységét megkapd, anélkül, hogy kézzel kellene hozzáadnod).
- a `hass.formatEntityAttributeValue(state, "attribute")` egy attribútum lefordítására használható (arra is használható, hogy egy állapot mértékegységét megkapd, anélkül, hogy kézzel kellene hozzáadnod).

</details>

#### Példák

Rengeteg példát találsz alább, de nagyon haladó sablonokat is találhatsz a [Patreon oldalamon](https://www.patreon.com/c/Clooos), mint például az egyik (a kedvencem), amely akár négy feltételes jelvényt is lehetővé tesz a kártya ikonjai köré helyezve. Ez egyben remek módja annak is, hogy megismerd a Bubble Card egyéni stílusainak és sablonjainak összes lehetőségét!

<details>
<summary>Példák a Patreon oldalamról</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Home Assistant-szerű jelvények hozzáadása bármely kártyához</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Formázott dátum és idő megjelenítése egy elválasztóban entitás nélkül</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Egy algomb állapotának megjelenítése két sorban</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Címkék és ikonok testreszabása egy választó algombon belül</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Állandó emlékeztető pop-up hozzáadása, amely csak szükség esetén jelenik meg</a>
</p>

<br>

</details>

<details>

<summary>Egy gomb háttérszínének módosítása, amely piros, ha <code>off</code>, és kék, ha <code>on</code></summary>

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

<summary>Egy gomb háttérszínének módosítása egy entitás alapján a vízszintes gombsorban</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Egy algomb feltételes megjelenítése/elrejtése</summary>

<br>

Ez az első algombot csak akkor jeleníti meg, ha a robotporszívóm elakadt.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ez egy algombot jelenít meg, amikor az akkumulátor 10% alá esik. Hasznos egy "Alacsony akkumulátor" feliratú algombhoz.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Egy ikon vagy algomb ikon feltételes megváltoztatása</summary>

<br>

Ez egy gombikont változtat meg, csak amikor egy robotporszívó elakadt.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ez az első algomb ikonját változtatja meg, csak amikor egy robotporszívó elakadt.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Egy ikon vagy algomb ikon színének feltételes megváltoztatása</summary>

<br>

Ez egy gombikon színét változtatja meg az állapota alapján.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ez egy algomb ikonszínét változtatja meg az állapota alapján. A `.bubble-sub-button-1` az első algomb, cseréld le az `1`-et, ha egy másik algomb ikonját szeretnéd megváltoztatni.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Egy ventilátor ikon animálása feltételesen</summary>

<br>

Ez egy gombikont forgat, amikor egy ventilátor `on` állapotban van.
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

<summary>Szövegek sablonozása (mint a név vagy az állapot)</summary>

<br>

Ez egy gomb nevét/állapotát "Jelenleg napos idő van" szövegre változtatja az időjárásod alapján.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
vagy algombokra alkalmazva:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Ha az állapotot (`.bubble-state`) szeretnéd sablonozni, ne kapcsold be a `show_state: true` opciót, csak a `show_attribute: true` opciót, attribútum megadása nélkül.

</details>

<details>

<summary>Haladó példa: egy algomb színének megváltoztatása, amikor egy pop-up nyitva van</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Haladó példa: egy elválasztó nevének sablonozása egy állapot alapján, a saját nyelvedre lefordítva</summary>

<br>

Használhatod a `hass.formatEntityState(state)` függvényt egy állapot lefordítására, és a `hass.formatEntityAttributeValue(state, "attribute")` függvényt egy attribútum lefordítására.

Ez a nevet és az ikont az időjárás alapján változtatja meg, a "Nuageux" franciául "Felhős"-t jelent.

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

## Modulok

A modulok egy hatékony funkció, amellyel elmentheted, újra felhasználhatod, és megoszthatod az egyéni stílusaidat és sablonjaidat az összes Bubble Card kártyád között. Ahelyett, hogy ugyanazt a kódot másolnád be több kártyába, létrehozhatsz egy modult, és alkalmazhatod, ahol csak szükséged van rá. Ez sokkal könnyebbé és hatékonyabbá teszi az irányítópultod kinézetének kezelését.

De ez a funkció ennél sokkal erősebb, lehetővé teszi, hogy valódi funkciókat adj hozzá saját magad a Bubble Card szerkesztőjében, az összes alapértelmezett [Home Assistant űrlap](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) opció felhasználásával!  
Az objektumválasztó fejlesztésre került, hogy élőben mutassa a változásokat, és megfelelően támogassa az attribútumokat.

Egy modul a beépített [entitásjavaslatok](#entitásjavaslatok) mellett a Home Assistant kártyaválasztójának is válaszolhat: használd a `suggestions` kulcsot azokhoz a kártyákhoz, amelyeket előre le tud írni, és a `suggestions_code` kulcsot akkor, amikor a beállításodból kell kiszámolni őket, például egy pop-uphoz, amely a kiválasztott entitás területének összes entitásából épül fel. Mindkét kulcs dokumentációja [itt](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions) található.

Böngészhetsz a **Module Store**-ban is, hogy megtaláld és telepítsd a [közösség által készített modulokat](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), vagy megoszthasd a saját alkotásaidat!

> [!TIP]
> Egy modul kódja pontosan ugyanúgy működik, mint egy kártya `styles` szekciójában lévő kód. Ugyanazok a változók és függvények elérhetők, mint a [Sablonok](#sablonok) szekcióban.

<br>

### Kezdeti beállítás

> [!IMPORTANT]
> A v3.1.0 verziótól kezdve a Bubble Card Tools az ajánlott tárolási háttérrendszer a modulokhoz. A régi sablonérzékelős módszer továbbra is működik a meglévő rendszereknél, de az új modulok és a Module Store funkciók a Bubble Card Tools használatával a legjobban támogatottak.

A Bubble Card Tools integráció teszi lehetővé a Modulszerkesztőt és a Module Store-t, és egyedi YAML fájlokként tárolja a modulokat. A meglévő modulok automatikusan migrálódnak.

A telepítési és beállítási lépéseket itt találod:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### A Modulszerkesztő

A Modulszerkesztőt bármely kártya beállításaiból elérheted, a **Modulok** szekcióban. A szerkesztő két fő fület kínál:

#### Saját modulok fül

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Ez a fül megjeleníti az összes telepített modulodat, és lehetővé teszi, hogy:

- **Alkalmazd** a meglévő modulokat az aktuális kártyára
- **Létrehozz** egy új modult a semmiből
- **Szerkeszd** a meglévő modulokat élő előnézettel
- **Törölj** olyan modulokat, amelyekre már nincs szükséged
- **Keress** és **rendezz** modulokat (ábécé szerint, legutóbbi, aktívak elöl)
- **Globális állapotot** állíts be, hogy egy modul automatikusan minden kártyára alkalmazódjon
- **Importálj/exportálj** modulokat biztonsági mentéshez vagy megosztáshoz
- **Entitásjavaslatokat írni** a modulszerkesztőben, az **Opcionális: entitásjavaslatok** rész alatt, hogy a modulod felajánlásra kerüljön a Home Assistant kártyaválasztójában. A szabályok és a számított javaslatok is ellenőrzésre kerülnek írás közben, egy ottani hiba megakadályozza a mentést, az előnézet pedig bármely általad választott entitáshoz megmutatja a javasolt kártyákat

#### Module Store fül

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Ez a fül megjeleníti [a közösség összes elérhető moduljét](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), és lehetővé teszi, hogy:

- **Böngéssz** a közösség által készített összes modul között
- **Keress** és szűrj modulokat név, kompatibilitás vagy kulcsszavak alapján
- **Telepíts** modulokat egy kattintással
- **Frissítsd** a telepített modulokat, amikor új verziók érhetők el

> [!TIP]
> A szerkesztőben engedélyezheted a nem támogatott modulokat, hogy kipróbálj olyan modulokat, amelyek még nincsenek megjelölve egy adott kártyatípussal kompatibilisként.

<br>

### Hogyan használd a modulokat

#### Új modul létrehozása

<details>

<summary>Kattints a kibontáshoz</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Nyisd meg bármely kártya szerkesztőjét, és bontsd ki a **Modulok** szekciót.
2. Kattints az **Új modul létrehozása** gombra.
3. Töltsd ki a modul adatait.
4. Írd meg a CSS és/vagy JavaScript sablonkódodat a **Kód** szerkesztőben.
5. (Opcionális) Hozz létre egyéni konfigurációs felületet a **Szerkesztő** szekcióban (mint a fenti képernyőképen látható színválasztó, a teljes dokumentáció [itt](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) érhető el).
6. (Opcionális) Írd meg az **Entitásjavaslataidat**, hogy a modulod felajánlásra kerüljön a Home Assistant kártyaválasztójában. A panel gépelés közben ellenőrzi, amit írsz, az előnézete pedig magukat a javasolt kártyákat mutatja az általad választott entitáshoz.
7. Kattints a **Mentés** gombra.

A modulod mostantól elérhető bármelyik kártyádon!

<br>

</details>

#### Egy modul alkalmazása egy kártyára

<details>

<summary>Kattints a kibontáshoz</summary>

<br>

- **A szerkesztőn keresztül:**

  - Nyisd meg annak a kártyának a szerkesztőjét, amelyre a modult alkalmazni szeretnéd.
  - Bontsd ki a **Modulok** szekciót.
  - Kattints a listából a modulra, amelyet alkalmazni szeretnél.
  - Az "Alkalmazás ide" alatt kattints "Ez a kártya" gombra. A modul mostantól aktív. Egy kártyára több modult is alkalmazhatsz.

- **YAML-en keresztül:**

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

#### Egy modul globális alkalmazása

<details>

<summary>Kattints a kibontáshoz</summary>

<br>

Beállíthatod, hogy egy modul automatikusan alkalmazódjon minden Bubble Card kártyára:

**Ez nem érhető el a szerkesztővel rendelkező modulokhoz, mivel azok egy specifikus konfigurációt igényelnek a működéshez.**

- **A szerkesztőn keresztül:**

  - A Modulszerkesztőben keresd meg a modulodat a **Saját modulok** fülön.
  - Kapcsold be az **Összes kártya** gombot a modul neve mellett.
  - A modul ezután automatikusan alkalmazódik minden kártyára.
 
- **YAML-en keresztül:**

  A modul YAML konfigurációjában (a `bubble-modules.yaml` fájlban) csak add hozzá az `is_global: true` sort.

<br>

</details>

#### Egyetlen kártya kizárása egy globális modulból

<details>

<summary>Kattints a kibontáshoz</summary>

<br>

Ha van egy globális modulod, de ki szeretnéd zárni egy adott kártyából:

- **A szerkesztőn keresztül:**
  
  - A kártya **Modulok** szekciójában látni fogod a globális modulok listáját.
  - Kattints egy globális modulra, kapcsold ki az "Ez a kártya" opciót, hogy kizárd ebből a konkrét kártyából.

- **YAML-en keresztül:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### A modulod megosztása a Module Store-ban

<details>

<summary>Kattints a kibontáshoz</summary>

<br>

Ahhoz, hogy megoszd a modulodat a Module Store-ban, a Modulszerkesztőben, az alján a "Modul exportálása" résznél kattints a "Másolás GitHubhoz" gombra, majd illeszd be a tartalmat egy új beszélgetésbe a [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) kategóriában. **Szerkeszd a leírást** (ha szükséges), **a példát** (a YAML-felhasználók számára), és ne felejts el **legalább egy képernyőképet mellékelni** a Module Store-hoz.

**A modulod közvetlenül ezután elérhetővé válik** (egy Store-frissítés után), ezért ellenőrizd le kétszer, hogy minden helyesen van megírva, és a modul a várt módon működik. A modult természetesen a megosztás után is szerkesztheted/frissítheted.

<br>

</details>

#### Verziókezelés

<details>

<summary>Kattints a kibontáshoz</summary>

<br>

A Module Store automatikusan ellenőrzi a telepített modulok frissítéseit. Amikor frissítések érhetők el:

1. Egy frissítésjelzőt fogsz látni a **Module Store** fülön.
2. Kattints a **Frissítés** gombra azoknál a moduloknál, amelyeknél elérhető frissítés.
3. Erősítsd meg a frissítést a Module Store-ban.

<br>

</details>

#### A támogatott kártyatípusok megadása

<details>

<summary>Kattints a kibontáshoz</summary>

<br>

Néhány modul nem feltétlenül kompatibilis minden kártyatípussal. Megadhatod, hogy egy modul mely kártyákat támogatja.  
Ha azt szeretnéd, hogy egy modul **minden kártyával** kompatibilis legyen, egyszerűen hagyd ki a `supported` mezőt (vagy használd az **Összes kártya** opciót a szerkesztőben).

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

### Példák

<details>
<summary>Alapvető stílusmodul</summary>

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
<summary>Modul egyéni konfigurációval</summary>

<br>

Ez a modul [itt](https://github.com/Clooos/Bubble-Card/discussions/1231) érhető el.

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

További példákat találhatsz a Module Store-ban, vagy [itt](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Honosítás

A Bubble Card a te nyelveden beszél. A szerkesztője le van fordítva arra a 64 nyelvre, amelyet a Home Assistant támogat, és ahol a Home Assistantnak már van szava valamire, ott az ő megfogalmazása kerül átvételre, így mindkét felületen ugyanazokat a kifejezéseket olvasod.

A szerkesztő alján, a verziószám mellett egy **Automatikus** kapcsoló követi a Home Assistantod nyelvét. Kapcsold ki, és az egész szerkesztő visszatér angolra, ami hasznos egy útmutató követéséhez vagy egy hiba bejelentéséhez. A választásod megjegyzésre kerül a böngésződben.

Ez a dokumentáció is le van fordítva, [62 nyelvre](languages.md), a brit angol kivételével mindegyikre, az ugyanis az eredetit mutatja. Ezek az oldalak mindenki előtt nyitva állnak, így egy olyan megfogalmazás, amely nem egyezik a saját Home Assistantoddal, néhány kattintással javítható. A tartalom tekintetében az angol változat marad a referencia.

<br>

---

<br>

## Súgó

Nyugodtan nyiss egy issue-t, ha valami nem úgy működik, ahogy elvárnád. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Kérdésed vagy gondolatod van a Bubble Card-dal kapcsolatban? Szeretnéd megosztani az irányítópultjaidat vagy a felfedezéseidet? Ellátogathatsz a Home Assistant fórumra, a Bubble Card subredditre, vagy a GitHub Discussions szekcióba.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Közreműködés

A közreműködést szívesen fogadjuk! Legyen szó hibajavításokról, új funkciókról, fordításokról vagy dokumentációs javításokról, nyugodtan nyiss egy pull requestet.

Mielőtt elkezdenéd, olvasd el a [fejlesztői útmutatót](DEVELOPERS.md), amely bemutatja, hogyan állítsd be a helyi környezetedet, hogyan építsd meg a projektet, és hogyan teszteld a módosításaidat.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Támogatás

Szabadidőm nagy részét arra szánom, hogy ez a projekt a lehető legjobb legyen. Szóval ha értékeled a munkámat, bármilyen adomány remek módja lenne annak, hogy kifejezd a támogatásodat 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Köszönöm mindenkinek a támogatását, ti vagytok a legnagyobb motivációm!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
