<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Aquesta pàgina és una traducció automàtica. En cas de dubte, preval la [documentació original en anglès](../README.md). Hi ha alguna frase que no sona bé? Tota ajuda és benvinguda, i [corregir aquesta pàgina](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.ca.md) només us portarà un minut: GitHub s'encarrega del fork i de la pull request. Moltes gràcies per endavant! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Llegiu-ho en un altre idioma](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card és una col·lecció de targetes minimalista i personalitzable per a Home Assistant, amb pop-ups moderns i un Module Store integrat que compta amb més de 100 mòduls creats per la comunitat.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Taula de continguts

**[`Instal·lació`](#installació)**  **[`Configuració`](#configuració)**  **[`Suggeriments d'entitat`](#suggeriments-dentitat)**  **[`Pop-up`](#pop-up)**  **[`Pila de botons horitzontal`](#pila-de-botons-horitzontal)**  **[`Botó`](#botó)**  **[`Reproductor multimèdia`](#reproductor-multimèdia)**  **[`Coberta`](#coberta)**  **[`Selecció`](#selecció)**  **[`Climatització`](#climatització)**  **[`Calendari`](#calendari)**  **[`Separador`](#separador)**  **[`Columna buida`](#columna-buida)**  **[`Només subbotons`](#només-subbotons)**  **[`Subbotons`](#subbotons)**  **[`Disposicions de la targeta`](#disposicions-de-la-targeta)**  **[`Condicions`](#condicions)**  **[`Accions`](#accions-de-toc-doble-toc-i-toc-llarg)**  **[`Estils`](#estils)**  **[`Plantilles`](#plantilles)**  **[`Mòduls`](#mòduls)**  **[`Localització`](#localització)**  **[`Ajuda`](#ajuda)**  **[`Contribuir`](#contribuir)**  **[`Donatius`](#donatius)**

<br>

## Instal·lació

**Versió mínima de Home Assistant compatible:** 2023.9.0

<details>

<summary>Sense HACS</summary>

<br>

1. Descarregueu `bubble-card.zip` de la [darrera versió](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Descomprimiu-lo a la vostra carpeta `<config>/www`, hauríeu d'obtenir `bubble-card.js` i una carpeta `translations` al costat (aquesta carpeta conté els diccionaris de l'editor, sense ella l'editor es queda en anglès)
3. Al vostre tauler, feu clic a la icona de la cantonada superior dreta i després a `Edita el tauler`
4. Torneu a fer clic a aquesta icona i després feu clic a `Gestiona els recursos`
5. Feu clic a `Afegeix un recurs`
6. Copieu i enganxeu això: `/local/bubble-card.js?v=1`
7. Feu clic a `Mòdul JavaScript` i després a `Crea`
8. Torneu enrere i actualitzeu la pàgina
9. Ara podeu fer clic a `Afegeix una targeta` a la cantonada inferior dreta i cercar `Bubble Card`
10. Després de cada actualització del fitxer, haureu d'editar `/local/bubble-card.js?v=1` i canviar la versió per qualsevol número superior

Si no funciona, simplement proveu de netejar la memòria cau del navegador.

</details>

<details>

<summary>Amb HACS (recomanat)</summary>

<br>

Aquest mètode us permet rebre les actualitzacions directament a la Home Assistant Community Store

1. Si encara no teniu HACS instal·lat, descarregueu-lo seguint les instruccions de [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Feu la configuració inicial de HACS seguint les instruccions de [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. A la barra lateral, aneu a "HACS"
4. Cerqueu "Bubble Card" o feu clic al botó blau de sota
5. Feu clic a "Descarrega"
6. Torneu al vostre tauler i feu clic a la icona de la cantonada superior dreta i després a `Edita el tauler`
7. Ara podeu fer clic a `Afegeix una targeta` a la cantonada inferior dreta i cercar `Bubble Card`

Si no funciona, proveu de netejar la memòria cau del navegador o de l'aplicació (a tots els vostres dispositius si cal).

#### Vídeos

També podeu fer una ullada al meu canal de YouTube per veure vídeos pas a pas.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configuració

Totes les opcions es poden configurar a l'editor de Home Assistant. Però a la documentació de sota hi trobareu més detalls i el YAML.

<details>

<summary><b>Opcions principals (YAML + descripció)</b></summary>

| Nom | Tipus | Obligatorietat | Opcions admeses | Descripció |
| --- | --- | --- | --- | --- |
| `type` | string | **Obligatori** | `custom:bubble-card` | Tipus de la targeta |
| `card_type` | string | **Obligatori** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` o `sub-buttons` | Tipus de la targeta Bubble Card, vegeu més avall |
| `styles` | object list | Opcional | Qualsevol full d'estils CSS | Us permet personalitzar el CSS de la vostra Bubble Card, vegeu [estils](#estils) |

</details>

<details>

<summary><b>Variables CSS globals (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radi de la vora per a tots els elements compatibles |
| `--bubble-main-background-color` | `color` | Color de fons principal per a tots els elements compatibles |
| `--bubble-secondary-background-color` | `color` | Color de fons secundari per a tots els elements compatibles |
| `--bubble-accent-color` | `color` | Color d'èmfasi per a tots els elements compatibles |
| `--bubble-icon-border-radius` | `px` | Radi de la vora de la icona per a tots els elements compatibles |
| `--bubble-icon-background-color` | `color` | Color de fons de la icona per a tots els elements compatibles |
| `--bubble-sub-button-border-radius` | `px` | Radi de la vora per a tots els subbotons |
| `--bubble-sub-button-background-color` | `color` | Color de fons per a tots els subbotons |
| `--bubble-box-shadow` | vegeu [box-shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra per a tots els elements compatibles |
| `--bubble-border` | vegeu [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Vora per a totes les targetes compatibles |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Mireu aquest [vídeo](https://www.youtube.com/watch?v=0hSQOlBxKKI) per descobrir Bubble Card i les seves capacitats.** El meu canal de YouTube és força nou i se centra en tutorials sobre Home Assistant i Bubble Card. No dubteu a subscriure-us-hi per ajudar a augmentar la visibilitat del meu canal. Gràcies per endavant!

<br>

---

<br>

## Suggeriments d'entitat

Des de Home Assistant 2026.6, escollir una entitat al selector de targetes us ofereix unes quantes targetes ja fetes, i Bubble Card afegeix les seves pròpies receptes a aquesta llista. Trieu un llum i se us ofereix una targeta amb un control lliscant de brillantor, més una variant de temperatura de color, una de color i una de saturació quan el vostre llum les admet. Trieu una coberta i obteniu el control lliscant de la seva posició, trieu un reproductor multimèdia i obteniu també una variant amb la llista de les seves fonts, trieu un aspirador i obteniu els seus botons d'inici, pausa i retorn a la base. Cada suggeriment és una configuració normal de Bubble Card mostrada com una previsualització en directe, així podeu agafar la més propera i continuar editant-la com sempre.

El que se us ofereix depèn del que la vostra entitat pot fer realment: un llum sense canal de brillantor rep un commutador en lloc d'un control lliscant, una coberta que no es pot inclinar no rep cap variant d'inclinació, i una entitat de climatització rep els seus modes preestablerts només quan en té. Les entrades clàssiques segueixen sota els suggeriments de Bubble Card quan són aplicables: la targeta dedicada a aquest tipus d'entitat, un botó senzill i un control lliscant.

> [!TIP]
> Els mòduls poden afegir els seus propis suggeriments a aquesta llista, vegeu [mòduls](#mòduls).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Aquesta targeta us permet crear un pop-up amb qualsevol contingut. Cada pop-up està **ocult per defecte** i es pot obrir apuntant al seu enllaç (p. ex. `'#pop-up-name'`), amb qualsevol targeta que admeti l'[acció](#accions-de-toc-doble-toc-i-toc-llarg) `navigate`, o amb la [pila de botons horitzontal](#pila-de-botons-horitzontal) que s'hi inclou.

> [!TIP]
> ### Activador del pop-up 
> Aquesta funció us permet obrir un pop-up segons l'estat de qualsevol entitat. Per exemple, podeu obrir un pop-up de "Seguretat" amb una càmera quan hi hagi una persona davant de casa vostra. També podeu crear un ajudant de commutació (input_boolean) i activar-ne l'obertura/tancament en una automatització.
> <details>
> <summary>Obrir un pop-up quan un <code>binary_sensor</code> està <code>on</code></summary>
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
> ### Diferents maneres de tancar un pop-up 
> Hi ha moltes maneres de tancar un pop-up. Per exemple, podeu lliscar des de la capçalera del pop-up cap avall, fer un lliscament llarg cap avall dins del pop-up, prémer Escape a l'escriptori, eliminar el hash de l'URL o simplement prémer el botó de tancar.
>


### Opcions del pop-up

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Obligatorietat | Opcions admeses | Descripció |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obligatori** | Qualsevol hash únic (p. ex. `'#kitchen'`) amb ' ' | Així és com obrireu el vostre pop-up |
| `popup_style` | string | Opcional | `bubble` (per defecte) o `classic` | Defineix l'estil visual del pop-up |
| `popup_mode` | string | Opcional | `default` (per defecte), `fit-content`, `centered` o `adaptive-dialog` | Defineix el mode de disposició del pop-up |
| `with_bottom_offset` | boolean | Opcional | `true` o `false` (per defecte) | Només s'utilitza amb `popup_mode: fit-content` o `adaptive-dialog`. Aplica un marge inferior al mòbil, útil quan el vostre tauler inclou una targeta de peu de pàgina. |
| `full_width_on_mobile` | boolean | Opcional | `true` o `false` (per defecte) | Només s'utilitza amb `popup_mode: centered`. Amplia el pop-up a tota l'amplada de la pantalla al mòbil, útil en pantalles petites. |
| `performance_mode` | string | Opcional | `default` (per defecte) o `performance` | Optimitza l'animació d'obertura del pop-up. `performance` retarda lleugerament la renderització del contingut i el difuminat del fons, i també desactiva el difuminat del teló de fons si està definit. |
| `auto_close` | string | Opcional | Un temps d'espera en mil·lisegons (p. ex. `10000` per a 10 s) | Tanca automàticament el pop-up després d'un temps d'espera |
| `close_on_click` | boolean | Opcional | `true` o `false` (per defecte) | Tanca automàticament el pop-up després de qualsevol interacció |
| `close_by_clicking_outside` | boolean | Opcional | `true` (per defecte) o `false` | Tanca el pop-up fent clic fora d'ell |
| `width_desktop` | string | Opcional | Qualsevol valor CSS | Amplada a l'escriptori (`100%` per defecte al mòbil) |
| `margin` | string | Opcional | Qualsevol valor CSS | Utilitzeu-ho **només** si el vostre pop-up no queda ben centrat al mòbil (p. ex. `13px`) |
| `margin_top_mobile` | string | Opcional | Qualsevol valor CSS | Marge superior al mòbil (p. ex. `-56px` si la vostra capçalera està oculta) |
| `margin_top_desktop` | string | Opcional | Qualsevol valor CSS | Marge superior a l'escriptori (p. ex. `50vh` per a un pop-up de mitja alçada o `calc(100vh - 400px)` per a una alçada fixa de `400px`) |
| `bg_color` | string | Opcional | Qualsevol valor hex, rgb o rgba | El color de fons del vostre pop-up (p. ex. `#ffffff` per a un fons blanc) |
| `bg_opacity` | string | Opcional | Qualsevol valor de `0` a `100` | L'opacitat del fons del vostre pop-up (p. ex. `100` per a cap transparència) |
| `bg_blur` | string | Opcional | Qualsevol valor de `0` a `100` | L'efecte de difuminat del fons del vostre pop-up, **això només funciona si `bg_opacity` no està definit a `100`** (p. ex. `0` per a cap difuminat)|
| `shadow_opacity` | string | Opcional | Qualsevol valor de `0` a `100` | L'opacitat de l'ombra del vostre pop-up (p. ex. `0` per ocultar-la) |
| `hide_backdrop` | boolean | Opcional | `true` o `false` (per defecte) | Definiu-ho a true al primer pop-up del vostre tauler principal per desactivar el teló de fons a tots els pop-ups. |
| `background_update` | boolean | Opcional | `true` o `false` (per defecte) | Actualitza el contingut del pop-up en segon pla (no recomanat) |
| `trigger` | object o list | Opcional | Vegeu [condicions](#condicions) | Obre aquest pop-up quan es compleixen les condicions |
| `trigger_entity` | string | Opcional | Qualsevol entitat | Obre aquest pop-up segons l'estat de qualsevol entitat, la forma simple de `trigger` |
| `trigger_state` | string | Opcional (**Obligatori** si `trigger_entity` està definit) | Qualsevol estat d'entitat | Estat de l'entitat per obrir el pop-up |
| `trigger_close` | boolean | Opcional | `true` (per defecte) o `false` | Tanca el pop-up quan les condicions deixen de complir-se. Per defecte és `false` quan feu servir la parella antiga `trigger_entity` i `trigger_state` |
| `open_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Activa una acció quan el pop-up s'obre |
| `close_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Activa una acció quan el pop-up es tanca |
| `show_header` | boolean | Opcional | `true` (per defecte) o `false` | Mostra/Oculta completament la capçalera del pop-up |
| `show_previous_button` | boolean | Opcional | `true` o `false` (per defecte) | Mostra un botó de tornar enrere al costat del botó de tancar i torna al pop-up anterior quan estigui disponible |
| `show_close_button` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta el botó de tancar mantenint visible la resta de la capçalera |
| `buttons_position` | string | Opcional | `right` (per defecte) o `left` | Posició dels botons de tancar i de tornar enrere a la capçalera |
| `cards` | list | Opcional | Qualsevol Bubble Card, targeta de Home Assistant o targeta personalitzada | Defineix el contingut del vostre pop-up. Vegeu l'exemple de pop-up més avall. |
| També teniu accés a [totes les opcions del botó](#botó) per a la capçalera del pop-up. | | Opcional | | Si no es defineix, no es mostrarà cap capçalera |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radi de la vora del pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Color de fons principal per als elements compatibles del pop-up |
| `--bubble-pop-up-background-color` | `color` | Color de fons del pop-up |
| `--bubble-backdrop-background-color` | `color` | Color de fons del teló de fons |
| També teniu accés a [totes les variables CSS del botó](#opcions-del-botó) per a la capçalera del pop-up. | | |

</details>


### Format de pop-up independent (v3.2.0+)

Des de la v3.2.0, els pop-ups utilitzen un nou format independent en què les targetes de contingut es defineixen directament dins del pop-up mitjançant l'opció `cards`. Això ofereix un millor rendiment i una nova experiència d'edició basada en seccions amb arrossegar i deixar anar.


#### Exemples

<details>

<summary>Un pop-up (format independent)</summary>

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

<summary>Un botó per obrir el pop-up</summary>

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

## Pila de botons horitzontal

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Aquesta targeta és una bona companya de la targeta de pop-up, ja que us permet obrir els pop-ups corresponents. També us permet obrir qualsevol pàgina del vostre tauler. A més, podeu afegir-hi els vostres sensors de moviment/ocupació perquè l'ordre dels botons s'adapti a l'habitació on acabeu d'entrar. Aquesta targeta és desplaçable, es manté visible i actua com a peu de pàgina.

> [!IMPORTANT]  
> Aquesta targeta ha de ser l'última de la vostra vista (després de totes les targetes i pop-ups). No pot estar dins de cap pila.

### Opcions de la pila de botons horitzontal

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Requisit | Opcions compatibles | Descripció |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obligatori** | El hash del pop-up (p. ex. `'#kitchen'`) amb ' ' o qualsevol enllaç | Un enllaç a obrir |
| `1_name` | string | Opcional | Qualsevol cadena de text | Un nom per al vostre botó |
| `1_icon` | string | Opcional | Qualsevol icona `mdi:` | Una icona per al vostre botó |
| `1_entity` | string | Opcional | Qualsevol llum o grup de llums | Mostra el color d'aquest llum al fons |
| `1_pir_sensor` | string | Opcional | Qualsevol sensor binari | Almenys un sensor PIR o més per a `auto_order`; de fet, també funciona amb qualsevol tipus d'entitat, per exemple podeu afegir grups de llums i l'ordre canviarà segons els darrers estats modificats. |
| `auto_order` | boolean | Opcional | `true` o `false` (per defecte) | Canvia l'ordre dels botons segons l'hora del darrer canvi del `_pir_sensor`, **ha de ser `false` si no teniu cap `_pir_sensor` a la vostra configuració** |
| `margin` | string | Opcional | Qualsevol valor CSS | Utilitzeu això **només** si la vostra `horizontal-buttons-stack` no queda ben centrada al mòbil (p. ex. `13px`) |
| `width_desktop` | string | Opcional | Qualsevol valor CSS | Amplada a l'escriptori (`100%` per defecte al mòbil) |
| `is_sidebar_hidden` | boolean | Opcional | `true` o `false` (per defecte) | Corregeix la posició de la pila de botons horitzontal si la barra lateral està oculta a l'escriptori (només si heu fet vosaltres mateixos una modificació per ocultar-la) |
| `rise_animation` | boolean | Opcional | `true` (per defecte) o `false` | Definiu-ho a `false` per desactivar l'animació que s'activa un cop la pàgina s'ha carregat |
| `highlight_current_view` | boolean | Opcional | `true` o `false` (per defecte) | Ressalta el hash / la vista actual amb una animació suau |
| `hide_gradient` | boolean | Opcional | `true` o `false` (per defecte) | Definiu-ho a `false` per ocultar el degradat |

> [!IMPORTANT]  
> Les variables que comencen amb un número defineixen els vostres botons; només cal canviar aquest número per afegir més botons (vegeu l'exemple de sota).

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Radi de la vora dels botons de la pila de botons horitzontal |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Color de fons dels botons de la pila de botons horitzontal |

</details>


#### Exemple

<details>

<summary>Una pila de botons horitzontal que es reorganitza segons els sensors d'ocupació</summary>

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

## Botó

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Aquesta targeta és molt versàtil. Es pot utilitzar com a botó d'**interruptor**, **lliscant**, d'**estat** o de **nom/text**.

> [!TIP]
> ### Quines són les diferències entre tots els tipus de botó?
>
> - **Botó interruptor:** Aquest és el tipus de botó per defecte. Per defecte, commuta una entitat i el seu color de fons canvia segons l'estat de l'entitat o el color d'un llum. Podeu canviar-ne l'acció a la secció **Acció de toc a la targeta**.
>
> - **Botó lliscant:** Aquest tipus de botó us permet controlar entitats amb intervals ajustables. És ideal per regular la intensitat dels llums, i el seu color d'ompliment s'adapta al color del llum. També el podeu utilitzar per mostrar valors, com ara el nivell d'una bateria.
>   Entitats compatibles amb els controls lliscants:
>   - Llum (brillantor)
>   - Reproductor multimèdia (volum)
>   - Coberta (posició)
>   - Ventilador (percentatge)
>   - Climatització (temperatura)
>   - Input number i number (valor)
>   - Sensor de bateria (percentatge, només lectura)
>
>   També podeu utilitzar qualsevol entitat amb un estat numèric desactivant el filtre d'entitats a **Configuració del control lliscant** i definint després els valors `min` i `max`. Aquesta opció és només de lectura.
>
> - **Botó d'estat:** Perfecte per mostrar informació d'un sensor o de qualsevol entitat. Quan el premeu, mostra el panell "Més informació" de l'entitat. El seu color de fons no canvia.
>
> - **Botó de nom/text:** L'únic tipus de botó que no necessita cap entitat. Us permet mostrar un text curt, un nom o un títol. També hi podeu afegir accions. El seu color de fons no canvia.

### Opcions del botó

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Requisit | Opcions compatibles | Descripció |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatori** | Qualsevol entitat | Una entitat a controlar |
| `button_type` | string | Opcional | `switch` (per defecte), `slider`, `state` o `name` | El comportament del vostre botó |
| `name` | string | Opcional | Qualsevol cadena de text | Un nom per al vostre botó; si no es defineix, es mostrarà el nom de l'entitat |
| `icon` | string | Opcional | Qualsevol icona `mdi:` | Una icona per al vostre botó; si no es defineix, es mostrarà la icona de l'entitat o l'`entity-picture` |
| `force_icon` | boolean | Opcional | `true` o `false` (per defecte) | Dona prioritat a la icona en lloc de l'`entity-picture` |
| `use_accent_color` | boolean | Opcional (`false` per defecte) | **Només per a llums.** Utilitza el color d'èmfasi del tema en lloc del color del llum.                         |
| `show_state` | boolean | Opcional | `true` o `false` (per defecte) | Mostra o oculta l'estat de la vostra `entity` |
| `show_name` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta el nom |
| `show_icon` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta la icona |
| `show_last_changed` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora del darrer canvi de la vostra `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora de la darrera actualització de la vostra `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (per defecte) | Mostra un atribut de la vostra `entity` sota el seu `name` |
| `attribute` | string | Opcional (obligatori si `show_attribute` està definit a `true`) | Un atribut de la vostra `entity` | L'atribut a mostrar (p. ex. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (per defecte) o `false` | Permet que el text es desplaci quan el contingut supera la mida del seu contenidor |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, vegeu més avall | Permet canviar les accions per defecte en fer clic al botó. |
| `tap_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer clic a la icona; si no es defineix, s'utilitzarà `more-info` |
| `double_tap_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer doble clic a la icona; si no es defineix, s'utilitzarà `none` |
| `hold_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en mantenir premuda la icona; si no es defineix, s'utilitzarà `more-info` |
| `card_layout` | string | Opcional | `normal` (per defecte fora d'una vista de seccions), `large` (per defecte en una vista de seccions), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu [disposicions de la targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol número | Nombre de files (alçada) (p. ex. `2`) |
| `sub_button` | object | Opcional | Vegeu [subbotons](#subbotons) | Afegeix botons personalitzats fixats a la dreta |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Color de fons principal dels elements compatibles del botó |
| `--bubble-button-border-radius` | `px` | Radi de la vora del botó |
| `--bubble-button-icon-border-radius` | `px` | Radi de la vora del contenidor de la icona del botó |
| `--bubble-button-icon-background-color` | `color` | Color de fons del contenidor de la icona del botó |
| `--bubble-light-white-color` | `color` | Substitueix el color blanc per defecte dels botons/controls lliscants de llum |
| `--bubble-light-color` | `color` | Substitueix el color dels botons/controls lliscants de llum (fins i tot llums RGB) |
| `--bubble-button-box-shadow` | Vegeu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra del botó |

</details>

Aquestes opcions només estan disponibles quan `button_type` està definit a `slider`.

<details>

<summary><b>Opcions del control lliscant (YAML + descripcions)</b></summary>

| Nom                  | Tipus    | Requisit                     | Descripció                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opcional                        | El valor mínim del control lliscant. Per a controls lliscants personalitzats.                                                    |
| `max_value`             | number  | Opcional                        | El valor màxim del control lliscant. Per a controls lliscants personalitzats.                                                    |
| `step`                  | number  | Opcional                        | El valor del pas del control lliscant.                                                                           |
| `tap_to_slide`          | boolean | Opcional (`false` per defecte)      | Activa el comportament anterior del control lliscant, en què toqueu per activar-lo en lloc de mantenir-lo premut.        |
| `relative_slide`        | boolean | Opcional (`false` per defecte )     | Actualitza el valor de manera relativa al valor inicial, en lloc del punt de contacte inicial.                      |
| `read_only_slider`      | boolean | Opcional (`false` per defecte)      | Fa que el control lliscant sigui només de lectura. S'activa automàticament per a algunes entitats com els sensors.                        |
| `slider_live_update`    | boolean | Opcional (`false` per defecte)      | L'estat de l'entitat s'actualitza mentre llisqueu. **Aquesta funció no es recomana per a totes les entitats.**        |
| `slider_fill_orientation` | string | Opcional | `left`, `right`, `top` o `bottom` | Canvia la direcció d'ompliment del control lliscant. D'esquerra a dreta quan no està definit, reflectit en les [llengües que s'escriuen de dreta a esquerra](#localització) |
| `slider_value_position` | string | Opcional | `right`, `left`, `center` o `hidden` | Posició de la visualització del valor. A la dreta quan no està definit, i a l'esquerra en les [llengües que s'escriuen de dreta a esquerra](#localització) |
| `invert_slider_value` | boolean | Opcional (`false` per defecte) | Inverteix la direcció del control lliscant (100% d'ompliment equival al mínim). No disponible per als controls lliscants de color. |
| `light_slider_type` | string | Opcional | `brightness` (per defecte), `hue`, `saturation`, `white_temp` | **Només per a llums.** Trieu el mode del control lliscant |
| `cover_slider_type` | string | Opcional | `position` (per defecte), `tilt_position` | **Només per a cobertes.** Trieu el mode del control lliscant (posició o inclinació) |
| `hue_force_saturation` | boolean | Opcional (`false` per defecte) | **Només per a llums (mode Hue).** Força la saturació en ajustar el to |
| `hue_force_saturation_value` | number | Opcional (`100` per defecte) | **Només per a llums (mode Hue).** Valor de saturació forçat (0-100) |
| `use_accent_color` | boolean | Opcional (`false` per defecte) | **Només per a llums (mode brillantor).** Utilitza el color d'èmfasi del tema en lloc del color del llum |
| `allow_light_slider_to_0` | boolean | Opcional (`false` per defecte)    | **Només per a llums.** Permet que el control lliscant arribi al 0%, cosa que apaga el llum. No disponible amb `tap_to_slide`. |
| `light_transition`      | boolean | Opcional (`false` per defecte)      | **Només per a llums.** Activa transicions suaus de brillantor per als llums compatibles.                           |
| `light_transition_time` | number  | Opcional (`500` per defecte)        | **Només per a llums.** El temps de transició en mil·lisegons. Requereix `light_transition: true`.            |

</details>

#### Exemples

<details>

<summary>Un botó lliscant que pot controlar la brillantor d'un llum</summary>

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

<summary>Un botó amb més opcions</summary>

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

## Reproductor multimèdia

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Aquesta targeta us permet controlar una entitat de reproductor multimèdia.

### Opcions del reproductor multimèdia

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Requisit | Opcions compatibles | Descripció |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatori** | Qualsevol reproductor multimèdia | El reproductor multimèdia a controlar |
| `name` | string | Opcional | Qualsevol cadena de text | Un nom per al vostre reproductor multimèdia; si no es defineix, es mostrarà el nom de l'entitat |
| `icon` | string | Opcional | Qualsevol icona `mdi:` | Una icona per al vostre reproductor multimèdia; si no es defineix, es mostrarà la icona de l'entitat o l'`entity-picture` |
| `force_icon` | boolean | Opcional | `true` o `false` (per defecte) | Dona prioritat a la icona en lloc de l'`entity-picture` |
| `show_state` | boolean | Opcional | `true` o `false` (per defecte) | Mostra o oculta l'estat de la vostra `entity` |
| `show_name` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta el nom |
| `show_icon` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta la icona |
| `show_last_changed` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora del darrer canvi de la vostra `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora de la darrera actualització de la vostra `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (per defecte) | Mostra un atribut de la vostra `entity` sota el seu `name` |
| `attribute` | string | Opcional (obligatori si `show_attribute` està definit a `true`) | Un atribut de la vostra `entity` | L'atribut a mostrar (p. ex. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (per defecte) o `false` | Permet que el text es desplaci quan el contingut supera la mida del seu contenidor |
| `min_volume` | number | Opcional | Qualsevol número | El valor mínim del control lliscant de volum. |
| `max_volume` | number | Opcional | Qualsevol número | El valor màxim del control lliscant de volum. |
| `cover_background` | boolean | Opcional | `true` o `false` (per defecte) | Utilitza una caràtula multimèdia difuminada com a fons de la targeta. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Permet canviar les accions per defecte en fer clic al botó. |
| `tap_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer clic a la icona; si no es defineix, s'utilitzarà `more-info`. |
| `double_tap_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer doble clic a la icona; si no es defineix, s'utilitzarà `none`. |
| `hold_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en mantenir premuda la icona; si no es defineix, s'utilitzarà `more-info`. |
| `main_buttons_position` | string | Opcional | `default` o `bottom` | Mou els botons d'acció de la caràtula a la part inferior (fixos) |
| `main_buttons_full_width` | boolean | Opcional | `true` o `false` | Fa que els botons d'acció inferiors ocupin tota l'amplada (per defecte: `true` quan la posició és `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (per defecte), `center`, `start`, `space-between` | Alineació dels botons d'acció inferiors quan no ocupen tota l'amplada |
| `card_layout` | string | Opcional | `normal` (per defecte fora d'una vista de seccions), `large` (per defecte en una vista de seccions), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu [disposicions de la targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol número | Nombre de files (alçada) (p. ex. `2`) |
| `sub_button` | object | Opcional | Vegeu [subbotons](#subbotons) | Afegeix botons personalitzats fixats a la dreta |
| `hide` | object | Opcional | Vegeu més avall | Oculta botons de la targeta |

#### Opcions d'ocultació

| Nom | Tipus | Requisit | Opcions compatibles | Descripció |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opcional | `true` o `false` (per defecte) | Oculta el botó de reproducció/pausa |
| `volume_button` | boolean | Opcional | `true` o `false` (per defecte) | Oculta el botó de volum |
| `previous_button` | boolean | Opcional | `true` o `false` (per defecte) | Oculta el botó d'anterior |
| `next_button` | boolean | Opcional | `true` o `false` (per defecte) | Oculta el botó de següent |
| `power_button` | boolean | Opcional | `true` o `false` (per defecte) | Oculta el botó d'encesa |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Color de fons principal del reproductor multimèdia |
| `--bubble-media-player-border-radius` | `px` | Radi de la vora del reproductor multimèdia |
| `--bubble-media-player-buttons-border-radius` | `px` | Radi de la vora dels botons del reproductor multimèdia |
| `--bubble-media-player-slider-background-color` | `color` | Color de fons del control lliscant de volum |
| `--bubble-media-player-icon-border-radius` | `px` | Radi de la vora del contenidor de la icona del reproductor multimèdia |
| `--bubble-media-player-icon-background-color` | `color` | Color de fons del contenidor de la icona del reproductor multimèdia |
| `--bubble-media-player-box-shadow` | Vegeu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra del reproductor multimèdia |

</details>


#### Exemples

<details>

<summary>Un reproductor multimèdia amb totes les opcions</summary>

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

## Coberta

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Aquesta targeta us permet controlar les vostres entitats `cover`.

### Opcions de coberta

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Requisit | Opcions compatibles | Descripció |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatori** | Qualsevol coberta | Una coberta a controlar |
| `name` | string | Opcional | Qualsevol text | Un nom per a la vostra coberta; si no es defineix, es mostrarà el nom de l'entitat |
| `force_icon` | boolean | Opcional | `true` o `false` (per defecte) | Prioritza la icona per sobre de l'`entity-picture` |
| `show_state` | boolean | Opcional | `true` o `false` (per defecte) | Mostra o oculta l'estat de la vostra `entity` |
| `show_name` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta el nom |
| `show_icon` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta la icona |
| `show_last_changed` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora del darrer canvi de la vostra `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora de la darrera actualització de la vostra `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (per defecte) | Mostra un atribut de la vostra `entity` sota el seu `name` |
| `attribute` | string | Opcional (obligatori si `show_attribute` està definit a `true`) | Un atribut de la vostra `entity` | L'atribut a mostrar (p. ex. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (per defecte) o `false` | Permet que el text es desplaci quan el contingut supera la mida del seu contenidor |
| `icon_open` | string | Opcional | Qualsevol icona `mdi:` | Una icona per a la vostra coberta oberta; si no es defineix, es mostrarà la icona de coberta oberta per defecte |
| `icon_close` | string | Opcional | Qualsevol icona `mdi:` | Una icona per a la vostra coberta tancada; si no es defineix, es mostrarà la icona de coberta tancada per defecte |
| `icon_up` | string | Opcional | Qualsevol icona `mdi:` | Una icona per al botó d'obertura de la coberta; si no es defineix, es mostrarà la icona de coberta oberta per defecte |
| `icon_down` | string | Opcional | Qualsevol icona `mdi:` | Una icona per al botó de tancament de la coberta; si no es defineix, es mostrarà la icona de coberta tancada per defecte |
| `open_service` | string | Opcional | Qualsevol servei o script | Un servei per obrir la vostra coberta, per defecte `cover.open_cover` |
| `stop_service` | string | Opcional | Qualsevol servei o script | Un servei per aturar la vostra coberta, per defecte `cover.stop_cover` |
| `close_service` | string | Opcional | Qualsevol servei o script | Un servei per tancar la vostra coberta, per defecte `cover.close_cover` |
| `tilt_buttons` | string | Opcional | `top` (per defecte), `bottom`, `left`, `right`, `hidden` | Posició dels botons de control d'inclinació (només es mostren si la coberta admet la inclinació) |
| `open_tilt_service` | string | Opcional | Qualsevol servei o script | Un servei per obrir la inclinació, per defecte `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opcional | Qualsevol servei o script | Un servei per tancar la inclinació, per defecte `cover.close_cover_tilt` |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Permet canviar les accions per defecte en fer clic al botó. |
| `tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer clic a la icona; si no es defineix, s'utilitzarà `more-info`. |
| `double_tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer doble clic a la icona; si no es defineix, s'utilitzarà `none`. |
| `hold_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en mantenir premuda la icona; si no es defineix, s'utilitzarà `more-info`. |
| `main_buttons_position` | string | Opcional | `default` o `bottom` | Mou els controls a la part inferior (fixos) |
| `main_buttons_full_width` | boolean | Opcional | `true` o `false` | Fa que els controls inferiors ocupin tota l'amplada (per defecte: `true` quan la posició és `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (per defecte), `center`, `start`, `space-between` | Alineació dels controls inferiors quan no ocupen tota l'amplada |
| `card_layout` | string | Opcional | `normal` (per defecte fora d'una vista de seccions), `large` (per defecte en una vista de seccions), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu les [disposicions de la targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol nombre | Nombre de files (alçada) (p. ex. `2`) |
| `sub_button` | object | Opcional | Vegeu els [subbotons](#subbotons) | Afegeix botons personalitzats fixats a la dreta |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Color de fons principal per als elements compatibles de la targeta de coberta |
| `--bubble-cover-border-radius` | `px` | Radi de la vora de la targeta de coberta |
| `--bubble-cover-icon-border-radius` | `px` | Radi de la vora del contenidor de la icona de la targeta de coberta |
| `--bubble-cover-icon-background-color` | `color` | Color de fons del contenidor de la icona de la targeta de coberta |
| `--bubble-cover-box-shadow` | Vegeu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra de la targeta de coberta |
| `--bubble-button-box-shadow` | Vegeu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra dels botons de la targeta de coberta |

</details>


#### Exemple

<details>

<summary>Una targeta que pot controlar una persiana enrotllable</summary>

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

## Selecció

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Aquesta targeta us permet afegir un menú desplegable per a les vostres entitats `input_select` / `select`. Aquesta targeta també admet els subbotons i totes les funcions comunes de Bubble Card.

> [!TIP]
> Si voleu, també podeu tenir subbotons de selecció, aquesta funció està disponible a totes les targetes que admeten els subbotons.

### Opcions de selecció

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Requisit | Opcions compatibles | Descripció |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatori** | Qualsevol entitat | Una entitat a controlar |
| `name` | string | Opcional | Qualsevol text | Un nom per a la vostra selecció; si no es defineix, es mostrarà el nom de l'entitat |
| `icon` | string | Opcional | Qualsevol icona `mdi:` | Una icona per a la vostra selecció; si no es defineix, es mostrarà la icona de l'entitat o l'`entity-picture` |
| `force_icon` | boolean | Opcional | `true` o `false` (per defecte) | Prioritza la icona per sobre de l'`entity-picture` |
| `show_state` | boolean | Opcional | `true` o `false` (per defecte) | Mostra o oculta l'estat de la vostra `entity` |
| `show_name` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta el nom |
| `show_icon` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta la icona |
| `show_last_changed` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora del darrer canvi de la vostra `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora de la darrera actualització de la vostra `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (per defecte) | Mostra un atribut de la vostra `entity` sota el seu `name` |
| `attribute` | string | Opcional (obligatori si `show_attribute` està definit a `true`) | Un atribut de la vostra `entity` | L'atribut a mostrar (p. ex. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (per defecte) o `false` | Permet que el text es desplaci quan el contingut supera la mida del seu contenidor |
| `tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer clic a la icona; si no es defineix, s'utilitzarà `more-info`. |
| `double_tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer doble clic a la icona; si no es defineix, s'utilitzarà `none`. |
| `hold_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en mantenir premuda la icona; si no es defineix, s'utilitzarà `more-info`. |
| `card_layout` | string | Opcional | `normal` (per defecte fora d'una vista de seccions), `large` (per defecte en una vista de seccions), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu les [disposicions de la targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol nombre | Nombre de files (alçada) (p. ex. `2`) |
| `sub_button` | object | Opcional | Vegeu els [subbotons](#subbotons) | Afegeix botons personalitzats fixats a la dreta |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Color de fons principal per als elements compatibles de la targeta de selecció |
| `--bubble-select-background-color` | `color` | Color de fons de la targeta de selecció |
| `--bubble-select-list-border-radius` | `px` | Radi de la vora del menú desplegable de la targeta |
| `--bubble-select-list-item-accent-color` | `color` | Color d'èmfasi de l'element seleccionat |
| `--bubble-select-list-background-color` | `color` | Color de fons del menú desplegable de la targeta |
| `--bubble-select-list-width` | `px` | Amplada del menú desplegable de la targeta |
| `--bubble-select-arrow-background-color` | `color` | Color de fons de la fletxa del desplegable |
| `--bubble-select-button-border-radius` | `px` | Radi de la vora del botó de selecció |
| `--bubble-select-border-radius` | `px` | Radi de la vora de la targeta de selecció |
| `--bubble-select-icon-border-radius` | `px` | Radi de la vora del contenidor de la icona de la targeta de selecció |
| `--bubble-select-icon-background-color` | `color` | Color de fons del contenidor de la icona de la targeta de selecció |
| `--bubble-select-box-shadow` | Vegeu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra de la targeta de selecció |

</details>


#### Exemples

<details>

<summary>Una targeta de selecció amb una llista d'escenes</summary>

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

## Climatització

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Aquesta targeta us permet controlar les vostres entitats `climate`.

> [!TIP]
> El menú de selecció de mode és un [subbotó](#subbotons) que s'afegeix automàticament en crear la targeta. Després el podeu modificar o eliminar com vulgueu.

### Opcions de climatització

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom                     | Tipus   | Requisit                            | Opcions compatibles                                | Descripció                                                                                                      |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obligatori**                      | Entitat de climatització                         | L'entitat a controlar (p. ex. `climate.living_room`).                                                           |
| `name`                  | string  | Opcional                            | Qualsevol text                                   | Un nom personalitzat per a la targeta. Si no es defineix, es mostrarà el nom de l'entitat.                      |
| `icon`                  | string  | Opcional                            | Qualsevol icona `mdi:`                           | Una icona personalitzada per a la targeta. Si no es defineix, s'utilitzarà la icona de l'entitat o l'`entity-picture`. |
| `force_icon`            | boolean | Opcional                            | `true` o `false` (per defecte)                  | Prioritza la icona per sobre de l'`entity-picture`.                                                             |
| `show_state`            | boolean | Opcional                            | `true` o `false` (per defecte)                  | Mostra o oculta l'estat actual de l'`entity`.                                                                   |
| `show_name`             | boolean | Opcional                            | `true` (per defecte) o `false`                  | Mostra o oculta el nom de l'entitat.                                                                            |
| `show_icon`             | boolean | Opcional                            | `true` (per defecte) o `false`                  | Mostra o oculta la icona.                                                                                       |
| `hide_target_temp_low`  | boolean | Opcional (només per a entitats compatibles amb `target_temp_low`) | `true` o `false` (per defecte) | Oculta el control de temperatura objectiu mínima si l'`entity` l'admet.                                         |
| `hide_target_temp_high` | boolean | Opcional (només per a entitats compatibles amb `target_temp_high`)| `true` o `false` (per defecte) | Oculta el control de temperatura objectiu màxima si l'`entity` l'admet.                                         |
| `state_color`           | boolean | Opcional                            | `true` o `false` (per defecte)                  | Aplica un color de fons constant quan l'entitat de climatització està encesa.                                   |
| `step` | number | Opcional | Qualsevol nombre | El pas de temperatura. |
| `min_temp` | number | Opcional | Qualsevol nombre | La temperatura mínima. |
| `max_temp` | number | Opcional | Qualsevol nombre | La temperatura màxima. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Permet canviar les accions per defecte en fer clic al botó. |
| `tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer clic a la icona; si no es defineix, s'utilitzarà `more-info`. |
| `double_tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer doble clic a la icona; si no es defineix, s'utilitzarà `none`. |
| `hold_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en mantenir premuda la icona; si no es defineix, s'utilitzarà `more-info`. |                              |
| `main_buttons_position` | string | Opcional | `default` o `bottom` | Mou els botons d'acció de climatització a la part inferior (fixos) |
| `main_buttons_full_width` | boolean | Opcional | `true` o `false` | Fa que els botons d'acció inferiors ocupin tota l'amplada (per defecte: `true` quan la posició és `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (per defecte), `center`, `start`, `space-between` | Alineació dels botons d'acció inferiors quan no ocupen tota l'amplada |
| `card_layout` | string | Opcional | `normal` (per defecte fora d'una vista de seccions), `large` (per defecte en una vista de seccions), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu les [disposicions de la targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol nombre | Nombre de files (alçada) (p. ex. `2`) |
| `sub_button`            | object  | Opcional                            | Vegeu els [subbotons](#subbotons)              | Afegeix botons personalitzats fixats a la dreta. Útil per a un menú de selecció de mode de climatització.       |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Color de fons principal per als elements compatibles de la targeta de climatització |
| `--bubble-climate-border-radius` | `px` | Radi de la vora dels elements compatibles de la targeta de climatització |
| `--bubble-climate-button-background-color` | `color` | Color de fons dels botons de la targeta de climatització |
| `--bubble-climate-icon-border-radius` | `px` | Radi de la vora del contenidor de la icona de la targeta de climatització |
| `--bubble-state-climate-fan-only-color` | `color` | Color de superposició per a l'estat de només ventilació |
| `--bubble-state-climate-dry-color` | `color` | Color de superposició per a l'estat d'assecatge |
| `--bubble-state-climate-cool-color` | `color` | Color de superposició per a l'estat de refredament |
| `--bubble-state-climate-heat-color` | `color` | Color de superposició per a l'estat d'escalfament |
| `--bubble-state-climate-auto-color` | `color` | Color de superposició per a l'estat automàtic |
| `--bubble-state-climate-heat-cool-color` | `color` | Color de superposició per a l'estat d'escalfament-refredament |
| `--bubble-climate-accent-color` | `color` | Color d'èmfasi de la targeta de climatització |
| `--bubble-climate-box-shadow` | Vegeu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra del contenidor de climatització. |

</details>


#### Exemples

<details>

<summary>Una targeta de climatització amb un menú desplegable de modes HVAC</summary>

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

## Calendari

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Aquesta targeta us permet mostrar les vostres entitats de calendari. El seu contingut és desplaçable, de manera que podeu consultar fàcilment els propers esdeveniments.

### Opcions de calendari

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom                 | Tipus   | Requisit     | Opcions compatibles                             | Descripció                                                                              |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Opcional     | Qualsevol nombre (mínim: 1)                    | Nombre de dies de calendari dels quals es recuperen els esdeveniments, des d'ara fins al final del dia N (per defecte: 7) |
| `entities`          | object  | **Obligatori** | Un objecte d'entitat de calendari (vegeu a sota) | L'entitat a controlar (p. ex. `calendar.main_calendar`).                                |
| `entities.entity`   | string  | **Obligatori** | Una entitat de calendari                        | L'entitat de calendari a mostrar                                                        |
| `entities.color`    | string  | Opcional     | Un color                                        | Un color personalitzat per a la marca del calendari. Si no es defineix, es triarà un color automàtic |
| `days`              | number  | Opcional     | Qualsevol nombre (mínim: 1)                     | Nombre de dies de calendari dels quals es recuperen els esdeveniments, des d'ara fins al final del dia N (per defecte: 7) |
| `limit`             | number  | Opcional     | Un nombre                                       | La quantitat d'esdeveniments que es mostraran a la targeta                              |
| `show_end`          | boolean | Opcional     | `true` o `false` (per defecte)                  | Mostra o oculta l'hora de finalització dels esdeveniments                               |
| `show_progress`     | boolean | Opcional     | `true` (per defecte) o `false`                  | Mostra o oculta la barra de progrés dels esdeveniments                                  |
| `show_started_events`| boolean | Opcional     | `true` (per defecte) o `false`                  | Mostra o oculta els esdeveniments actualment en curs. Els esdeveniments de diversos dies es valoren dia a dia, així només s'amaga el dia en curs i els dies vinents continuen visibles |
| `scrolling_effect`  | boolean | Opcional | `true` (per defecte) o `false` | Permet que el text es desplaci quan el contingut supera la mida del seu contenidor |
| `event_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Permet afegir accions en fer clic a un esdeveniment. |
| `tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer clic a un dia; si no es defineix, s'utilitzarà `none`. |
| `double_tap_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en fer doble clic a un dia; si no es defineix, s'utilitzarà `none`. |
| `hold_action` | object | Opcional | Vegeu les [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Defineix el tipus d'acció en mantenir premut un dia; si no es defineix, s'utilitzarà `none`. |
| `card_layout` | string | Opcional | `normal` (per defecte fora d'una vista de seccions), `large` (per defecte en una vista de seccions), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu les [disposicions de la targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol nombre | Nombre de files (alçada) (p. ex. `2`) |
| `sub_button` | object | Opcional | Vegeu els [subbotons](#subbotons) | Afegeix botons personalitzats fixats a la dreta |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable                                  | Valor esperat  | Descripció                                                         |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Color de fons principal per als elements compatibles de la targeta de calendari |
| `--bubble-calendar-border-radius`         | `px`           | Radi de la vora dels elements compatibles de la targeta de calendari |
| `--bubble-calendar-height`                | `px`           | Alçada de la targeta de calendari                                   |

</details>

#### Exemples

<details>

<summary>Una targeta de calendari amb una quantitat limitada d'esdeveniments</summary>

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

<summary>Una targeta de calendari amb hora de finalització i barra de progrés</summary>

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


## Separador

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Aquesta targeta és un simple separador per dividir el vostre pop-up en categories / seccions. Per exemple: Llums, Dispositius, Cobertes, Configuració, Automatitzacions...

### Opcions del separador

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Requeriment | Opcions admeses | Descripció |
| --- | --- | --- | --- | --- |
| `name` | string | Opcional però recomanat | Qualsevol cadena | Un nom per al vostre separador |
| `icon` | string | Opcional però recomanat | Qualsevol icona `mdi:` | Una icona per al vostre separador |
| `card_layout` | string | Opcional | `normal` (per defecte si no és en vista de secció), `large` (per defecte si és en vista de secció), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu [disposicions de targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol número | Nombre de files (alçada) (p. ex. `2`) |
| `sub_button` | object | Opcional | Vegeu [subbotons](#subbotons) | Afegiu botons personalitzats fixats a la dreta |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estil">Estil</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Color de fons per a la línia del separador |

</details>

#### Exemple

<details>

<summary>Un separador/divisor per a una secció de "Cobertes"</summary>

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

## Columna buida

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Aquesta targeta serveix per omplir una columna buida. És útil si teniu un `horizontal-stack` al vostre pop-up amb només una targeta. Mireu la cantonada inferior dreta d'aquesta captura de pantalla per (no) veure-la.

### Opcions de la columna buida

Aquesta targeta no té opcions i no admet [estil](#estils), tot i que sí que admet les opcions de disposició de les seccions de Home Assistant.

#### Exemple

<details>

<summary>Una columna buida dins d'una pila horitzontal</summary>

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

## Només subbotons

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Aquesta targeta està dedicada exclusivament als subbotons. És perfecta per a menús, accions ràpides, xips informatius o un peu de pàgina fix a la part inferior de la pàgina.

> [!IMPORTANT]  
> Aquesta targeta utilitza el nou esquema de subbotons. Utilitzeu `sub_button.bottom` per definir els vostres botons. La secció `sub_button.main` s'ignora.

### Opcions de només subbotons

<details>

<summary><b>Opcions (YAML + descripcions)</b></summary>

| Nom | Tipus | Requisit | Opcions admeses | Descripció |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obligatori** | Vegeu [subbotons](#subbotons) | Definiu els vostres subbotons amb la secció `bottom` |
| `hide_main_background` | boolean | Opcional | `true` o `false` (per defecte) | Elimina el fons de la targeta |
| `footer_mode` | boolean | Opcional | `true` o `false` (per defecte) | Fixa la targeta a la part inferior de la pàgina |
| `footer_full_width` | boolean | Opcional | `true` o `false` (per defecte) | Posa el peu de pàgina a amplada completa (100%) |
| `footer_width` | number | Opcional | Qualsevol nombre | Amplada del peu de pàgina en píxels quan `footer_full_width` és `false` |
| `footer_bottom_offset` | number | Opcional | Qualsevol nombre | Distància des de la part inferior de la pàgina en píxels (per defecte: `16`) |
| `card_layout` | string | Opcional | `normal` (per defecte fora de la vista de seccions), `large` (per defecte a la vista de seccions), `large-2-rows`, `large-sub-buttons-grid` | Disposició d'estil de la targeta, vegeu [disposicions de la targeta](#disposicions-de-la-targeta) |
| `rows` | number | Opcional | Qualsevol nombre | Nombre de files (alçada) (p. ex. `2`) |

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Amplada del peu de pàgina quan `footer_full_width` és `false` |
| `--bubble-footer-bottom` | `px` | Desplaçament inferior del peu de pàgina |
| `--bubble-footer-box-shadow` | vegeu [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra per al contenidor del peu de pàgina |

</details>

#### Exemples

<details>

<summary>A l'estil de xips (com a la captura de pantalla)</summary>

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

<summary>Un menú de peu de pàgina fix</summary>

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

## Subbotons

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

A totes les targetes que admeten aquesta opció, podeu afegir subbotons per personalitzar encara més les vostres targetes. Podeu, per exemple, crear un botó que controli un aspirador, una targeta de meteorologia o gairebé qualsevol cosa que se us acudeixi. Aquests subbotons admeten les accions de toc i la majoria de les opcions del botó.

Els subbotons ara admeten tres tipus: **Per defecte (botó)**, **Control lliscant** i **Menú desplegable / Selecció**. Podeu barrejar tipus a la mateixa targeta, col·locar els subbotons a dalt o a baix i organitzar-los en grups per a disposicions més avançades.

#### Col·locació i grups dels subbotons

<details>

<summary><b>Estructura dels subbotons (main / bottom + grups)</b></summary>

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

**Notes:**
- `main` i `bottom` són dues seccions independents. Els subbotons inferiors queden fixats a la part inferior de la targeta.
- `main_layout` i `bottom_layout` accepten `inline` (per defecte) o `rows` per apilar els grups verticalment.
- Els grups són objectes amb una matriu `group` i un `buttons_layout` opcional (`inline` o `column`).
- `justify_content` només està disponible per als **grups inferiors** (`start`, `center`, `end`, `fill`).
- Quan hi ha subbotons inferiors, la disposició de la targeta canvia automàticament a `large` tret que definiu explícitament una altra disposició.
- Les matrius `sub_button` antigues encara s'admeten i es tracten com la secció `main`.

</details>

### Opcions dels subbotons

<details>

<summary><b>Opcions (YAML + descripció)</b></summary>

| Nom | Tipus | Requisit | Opcions admeses | Descripció |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcional | Qualsevol entitat | Una entitat a controlar |
| `name` | string | Opcional | Qualsevol cadena | Un nom per al vostre subbotó; si no es defineix, es mostrarà el nom de l'entitat |
| `icon` | string | Opcional | Qualsevol icona `mdi:` | Una icona per al vostre subbotó; si no es defineix, es mostrarà la icona o la imatge de l'entitat |
| `force_icon` | boolean | Opcional | `true` o `false` (per defecte) | Prioritza la icona encara que hi hagi disponible una imatge de l'entitat |
| `sub_button_type` | string | Opcional | `default`, `slider` o `select` | Trieu el tipus de subbotó |
| `show_background` | boolean | Opcional | `true` (per defecte) o `false` | Mostra un fons per al vostre subbotó, que canviarà de color segons l'estat de la vostra entitat |
| `state_background` | boolean | Opcional | `true` (per defecte) o `false` | Utilitza el color de l'estat quan l'entitat està `on` |
| `light_background` | boolean | Opcional | `true` (per defecte) o `false` | Utilitza el color del llum per al fons quan estigui disponible |
| `show_state` | boolean | Opcional | `true` o `false` (per defecte) | Mostra o oculta l'estat de la vostra `entity` |
| `show_name` | boolean | Opcional | `true` o `false` (per defecte) | Mostra o oculta el nom |
| `show_icon` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta la icona |
| `show_last_changed` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora del darrer canvi de la vostra `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (per defecte) | Mostra l'hora de la darrera actualització de la vostra `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (per defecte) | Mostra un atribut de la vostra `entity` sota el seu `name` |
| `attribute` | string | Opcional (obligatori si `show_attribute` està definit a `true`) | Un atribut de la vostra `entity` | L'atribut a mostrar (p. ex. `brightness`) |
| `select_attribute` | string | Opcional | Una llista d'atributs de la vostra `entity` (vegeu les opcions admeses més amunt) | Aquesta llista d'atributs obrirà un menú desplegable en fer-hi clic (p. ex. `effect_list`) |
| `show_arrow` | boolean | Opcional | `true` (per defecte) o `false` | Mostra o oculta la fletxa del menú desplegable per als subbotons de selecció |
| `scrolling_effect` | boolean | Opcional | `true` (per defecte) o `false` | Permet que el text es desplaci quan el contingut supera la mida del contenidor |
| `tap_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Definiu el tipus d'acció en fer clic al subbotó; si no es defineix, s'utilitzarà `more-info`. |
| `double_tap_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Definiu el tipus d'acció en fer doble clic al subbotó; si no es defineix, s'utilitzarà `none`. |
| `hold_action` | object | Opcional | Vegeu [accions](#accions-de-toc-doble-toc-i-toc-llarg) | Definiu el tipus d'acció en mantenir premut el subbotó; si no es defineix, s'utilitzarà `more-info`. |
| `fill_width` | boolean | Opcional | `true` o `false` | Omple l'amplada disponible (per defecte: `false` per a main, `true` per a bottom) |
| `width` | number o string | Opcional | Qualsevol nombre o longitud CSS | Amplada personalitzada (`px` per a la secció main, `%` per a la secció bottom per defecte) |
| `custom_height` | number | Opcional | Qualsevol nombre | Alçada personalitzada en píxels |
| `content_layout` | string | Opcional | `icon-left` (per defecte), `icon-top`, `icon-bottom`, `icon-right` | Col·locació de la icona dins del subbotó |
| `always_visible` | boolean | Opcional | `true` o `false` (per defecte) | **Només control lliscant.** Mostra sempre el control lliscant en lloc d'obrir-lo en tocar |
| `show_button_info` | boolean | Opcional | `true` o `false` (per defecte) | **Només control lliscant.** Mostra la icona/el nom/l'estat quan `always_visible` està activat |
| `visibility` | object o list | Opcional | Vegeu [condicions](#condicions) | Mostra o oculta el subbotó segons condicions |
| `hide_when_parent_unavailable` | boolean | Opcional | `true` o `false` (per defecte) | Oculta el subbotó si l'entitat de la targeta principal no està disponible |
| `css_class` | string | Opcional | Qualsevol cadena | Una classe CSS addicional al subbotó, per apuntar-hi als vostres [estils](#estils) sigui quin sigui el seu nom (p. ex. `My value` dona `.my-value`) |

</details>

<details>

<summary><b>Opcions dels subbotons de control lliscant (les mateixes que als botons lliscants)</b></summary>

<br>

Els subbotons de control lliscant admeten les mateixes opcions de control lliscant que els botons lliscants, incloent-hi:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variables CSS (vegeu <a href="#estils">Estils</a>)</b></summary>

| Variable | Valor esperat | Descripció |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radi de la vora per als subbotons |
| `--bubble-sub-button-background-color` | `color` | Color de fons per als subbotons |
| `--bubble-sub-button-outline` | `box-shadow` | Contorn afegit a un subbotó o a un control lliscant, només quan aquest element es pinta del mateix color que la targeta de darrere, cosa que el faria invisible (poseu-hi `none` per treure'l) |
| `--bubble-sub-slider-border-radius` | `px` | Radi de la vora per als subbotons de control lliscant |
| `--bubble-sub-slider-background-color` | `color` | Color de fons per als subbotons de control lliscant |
| `--bubble-sub-slider-height` | `px` | Alçada per als subbotons de control lliscant sempre visibles |
| `--bubble-sub-slider-outline` | `box-shadow` | Contorn només dels subbotons de control lliscant, recorre a `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Color del text sobre fons de subbotó clars |

</details>

#### Exemples

<details>

<summary>Un botó amb alguns subbotons per fer una targeta d'aspirador (com a la captura de pantalla)</summary>

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

<summary>Un botó lliscant amb un subbotó que mostra la brillantor i un altre que commuta el llum (com a la captura de pantalla)</summary>

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

<summary>Un botó que mostra la temperatura interior i exterior amb la meteorologia d'avui i de demà (captura de pantalla inclosa)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Mala sort per a mi, està ennuvolat tota l'estona, però totes les icones canvien segons el temps.

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

## Disposicions de la targeta

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card és totalment compatible amb la vista de seccions de Home Assistant: podeu canviar la disposició de la targeta per fer-la més gran i també canviar el nombre de columnes o files que la targeta ha d'ocupar a la vista de seccions (només a les targetes que admeten aquesta opció). Aquestes disposicions també són compatibles amb tots els altres tipus de vista.

<details>

<summary><b>Disposicions de la targeta disponibles</b></summary>

| Disposició | Descripció |
| --- | --- |
| `normal` | La disposició normal (no optimitzada per a la vista de seccions) |
| `large` | Una disposició més gran que es redimensiona segons les files seleccionades a la vista de seccions (optimitzada per a la vista de seccions) |
| `large-2-rows` | Una disposició més gran amb 2 files de subbotons que es redimensiona segons les files seleccionades a la vista de seccions (optimitzada per a la vista de seccions) |
| `large-sub-buttons-grid` | Aquesta disposició mostra els subbotons en una graella, `rows` s'ha de definir com a mínim a `2`.

</details>

#### Exemples

<details>

<summary>Un botó gran que mostra estadístiques d'energia amb 2 files de subbotons (captura de pantalla inclosa)</summary>

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

<summary>Un botó gran amb diverses files amb 12 subbotons</summary>

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

## Condicions

Algunes opcions es regeixen per condicions, escrites exactament com les de la [targeta condicional](https://www.home-assistant.io/dashboards/conditional/) de Home Assistant:

- `visibility` en un [subbotó](#subbotons), per mostrar-lo o amagar-lo
- `trigger` en un [pop-up](#pop-up), per obrir-lo quan es compleixen les condicions
- `checkConditionsMet(conditions, hass)` dins de les vostres [plantilles](#plantilles), quan necessiteu la resposta al vostre propi codi

S'avalua cada tipus de condició de Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, i els grups `and`, `or` i `not`. Les condicions del constructor de condicions de Home Assistant també funcionen, les que porten el nom del seu domini com `sun.is_up`, `light.is_on`, `zone.in_zone` o `temperature.is_value`, amb els seus paràmetres `target`, `options`, `behavior` i `for`.

<details>

<summary><b>Exemple</b></summary>

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
> Les condicions s'avaluen al vostre navegador, així que les poques que necessiten el servidor de Home Assistant no poden ser exactes: la sortida i la posta del sol es llegeixen de l'entitat `sun.sun` en lloc de recalcular-se, i una durada `for` es mesura des de l'últim canvi d'estat, sense l'historial del recorder.
>
> `view_columns` s'accepta però sempre es compleix, ja que Bubble Card mai no és qui disposa les columnes de la vostra vista. Un tipus de condició que Bubble Card no coneix s'anuncia un cop a la consola del navegador en lloc de fallar en silenci, així podeu distingir una errada d'escriptura d'una funció que falta.

<br>

---

<br>

## Accions de toc, doble toc i toc llarg

També podeu utilitzar les accions de toc, de doble toc i de toc llarg per defecte de Home Assistant a les targetes que admeten aquesta opció. Per exemple, això us permet mostrar la finestra "Més informació" fent un toc llarg a la icona d'un botó, o executar un servei en prémer un subbotó.

**Nota: Quan hi ha una `double_tap_action` configurada, la `tap_action` normal té un retard de 200 ms per permetre la detecció
d'un doble toc. Si aquest retard no és desitjable, definiu `double_tap_action` a `none` per desactivar la gestió del doble toc.**

### Opcions de les accions

<details>

<summary><b>Opcions (YAML + descripció)</b></summary>

| Nom | Tipus | Opcions admeses | Descripció |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Acció que s'ha d'executar |
| `target` | object |  | Només funciona amb `call-service`. Segueix la [sintaxi de home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Qualsevol camí del vostre tauler | Camí on navegar (p. ex. `'#kitchen'` per obrir un pop-up) quan l'acció està definida com a navigate |
| `url_path` | string | Qualsevol enllaç | URL que s'obre en fer clic (p. ex. `https://www.google.com`) quan l'acció és `url` |
| `service` | string | Qualsevol servei | Servei que s'ha de cridar (p. ex. `media_player.media_play_pause`) quan `action` està definida com a `call-service` |
| `data` o `service_data` | object | Qualsevol dada de servei | Dades del servei que cal incloure (p. ex. `entity_id: media_player.kitchen`) quan `action` està definida com a `call-service` |
| `confirmation` | object | Vegeu [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Mostra un pop-up de confirmació (no un de Bubble Card), substitueix l'objecte `confirmation` per defecte |

</details>

#### Exemple

<details>

<summary>Un botó per obrir un pop-up</summary>

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

## Estils

Podeu afegir estils personalitzats per modificar el CSS de totes les targetes **sense utilitzar card-mod** de quatre maneres:

- A l'editor, aneu a la targeta que voleu modificar i, després, navegueu fins a _Opcions d'estil > Estils personalitzats i plantilles JS_, i afegiu-hi els vostres estils personalitzats (consulteu els consells i els exemples de sota).
- A l'editor (o en [YAML](#mòduls)), aneu a la targeta que voleu modificar i, després, navegueu fins a _Mòduls_, i creeu un mòdul nou (estarà disponible per a totes les targetes), o aneu al **Module Store** per instal·lar qualsevol Mòdul disponible (trobareu més detalls sobre els mòduls [més avall](#mòduls)).
- En un fitxer de [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) afegint variables CSS en YAML (les trobareu a la documentació de cada targeta, més amunt). Això permet fer modificacions globals.

  <details>
  
  <summary>Exemple</a></summary>
  
  <br>

  No copieu la línia `Bubble:`, aquest és el nom del tema que utilitzeu. També heu d'eliminar el `--` de les variables.

  Heu d'executar l'acció [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) per actualitzar el tema després de qualsevol modificació.

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
  
- En YAML afegint `styles: |` seguit dels vostres estils personalitzats (consulteu els consells i els exemples de sota).

> [!TIP]  
> **Per entendre quines classes d'estil es poden modificar**, podeu fer una ullada a la carpeta [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) d'aquest repositori. A la carpeta de cada targeta hi trobareu un fitxer anomenat `styles.css`. Aquests fitxers contenen tots els estils aplicats. Això obre moltes més possibilitats que les variables CSS, però s'ha d'afegir individualment a cada targeta.
> 
> També podeu trobar molts [exemples de la comunitat](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), o alguns al [fòrum de Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) fent una mica de cerca.
>
> El tema Bubble per a Home Assistant (com el de les captures de pantalla) es pot trobar [aquí](https://github.com/Clooos/Bubble).
>
> Aviat arribarà un vídeo tutorial al meu [canal de YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Tingueu en compte que potser haureu d'afegir `!important;` a alguns estils CSS que ja estan definits (vegeu els exemples de sota).

> [!TIP]  
> Els subbotons es poden seleccionar amb classes basades en el nom. Per exemple, un subbotó anomenat "My sub-button" es pot estilitzar amb `.my-sub-button`. Els subbotons lliscants també exposen `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> Una classe basada en el nom canvia quan reanomeneu un subbotó, i es tradueix quan el nom es tradueix. Poseu `css_class` al subbotó per tenir una classe pròpia que no es mou mai, sigui quin sigui el seu nom i sigui quina sigui la llengua.

#### Exemples

<details>

<summary>Canviar la mida de la lletra de qualsevol Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Canviar el color de fons d'un sol botó en una pila de botons horitzontal</summary>

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

<summary>Canviar el color de fons d'una targeta</summary>

<br>

Aquest funciona en tots els tipus de Bubble Card (excepte als pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Aquest fa el mateix però només en una targeta de botó (funciona per a la capçalera del pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Per canviar el color quan està en `on`, feu una ullada a les plantilles d'estil de sota.

</details>

<details>

<summary>Canviar el color d'un botó lliscant</summary>

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

<summary>Canviar el color de la línia d'un separador</summary>

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

<summary>Canviar el color d'una icona</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Per a una icona d'una pila de botons horitzontal.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Canviar el color de fons del contenidor d'una icona</summary>

<br>

Aquest funciona en tots els tipus de Bubble Card (excepte als pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Aquest fa el mateix per a la capçalera del pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Canviar la mida dels subbotons (perfecte per a la disposició gran)</summary>

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

<summary>Canviar el color de fons del segon subbotó</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Canviar la mida d'una icona</summary>

<br>

Per a la icona principal.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Per a les icones dels subbotons.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Utilitzar una imatge en lloc d'una icona en un subbotó</summary>

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

Només heu de pujar aquesta imatge en una carpeta "pictures" (o el nom que vulgueu) dins de la carpeta "www" de Home Assistant.

</details>

<details>

<summary>Exemple avançat: Crear una fila horitzontal de subbotons (captura de pantalla inclosa)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> M'encanta aquest exemple, l'utilitzo com a capçalera al meu tauler.

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

## Plantilles

**Bubble Card no admet plantilles Jinja**, però els usuaris avançats poden afegir plantilles en JS directament als seus [estils personalitzats](#estils). Per exemple, això us permet canviar dinàmicament una icona, els textos o els colors d'un element, mostrar o amagar un element de manera condicional (com un subbotó), o gairebé qualsevol cosa basant-vos en un estat, un atribut i més.

> [!TIP]  
> Trobareu més informació sobre les plantilles JS [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). El meu consell és que **feu sempre una ullada a la consola del navegador** per assegurar-vos que tot funciona correctament.

> [!IMPORTANT]  
> **Totes les plantilles que no modifiquin una propietat CSS s'han de col·locar al final! Com ara modificar una icona, un text o qualsevol element.**

#### Variables i funcions disponibles

<details>

<summary>Variables</summary>

<br>

Teniu accés a aquestes variables a la majoria de targetes:

- `state` retornarà l'estat de l'`entity` que heu definit.
  
- `entity` retornarà l'entitat que heu definit, com `switch.test` en aquest exemple.
  
- `icon` es pot utilitzar així per canviar la icona `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` retornarà l'estat de l'`entity` definida al primer subbotó, `[0]` és l'estat del primer subbotó, `[1]` el del segon...
  
- `subButtonIcon[0]` es pot utilitzar així per canviar la icona del primer subbotó `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` és la icona del primer subbotó, `[1]` la del segon...
  
- `card` retornarà l'element de la targeta al DOM.
  
- `hass` és una variable avançada que us dona encara més control, per exemple podeu retornar l'estat de `light.kitchen` així `hass.states['light.kitchen'].state` o un atribut així `hass.states[entity].attributes.brightness`.

- `this` retornarà molta informació útil sobre la vostra instal·lació i el vostre tauler, utilitzeu-ho només si sabeu què esteu fent.

</details>

<details>

<summary>Funcions</summary>

<br>

Teniu accés a totes les funcions globals de JS, però també teniu accés a:

- `getWeatherIcon` es pot utilitzar per retornar una icona meteorològica basada en un estat que retorni el temps. Per exemple, podeu fer això `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` per canviar la icona del tercer subbotó per la icona del temps d'avui, `.forecast[1]?.condition` és per a demà...

  Haureu de crear un sensor de plantilla per fer-ho. Això és el que podeu afegir al vostre `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` retorna `true` quan es compleix una llista de [condicions](#condicions), per exemple `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` es pot utilitzar per traduir un estat (també es pot utilitzar per obtenir la unitat d'un estat, sense haver d'afegir-la manualment).
- `hass.formatEntityAttributeValue(state, "attribute")` es pot utilitzar per traduir un atribut (també es pot utilitzar per obtenir la unitat d'un estat, sense haver d'afegir-la manualment).

</details>

#### Exemples

Trobareu molts exemples a continuació, però també podeu trobar plantilles molt avançades a la meva [pàgina de Patreon](https://www.patreon.com/c/Clooos), com una (la meva preferida) que permet fins a quatre insígnies condicionals col·locades al voltant de les icones de la targeta. També és una manera fantàstica de descobrir totes les possibilitats dels estils personalitzats i les plantilles de Bubble Card!

<details>
<summary>Exemples de la meva pàgina de Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Exemple 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Afegir insígnies a l'estil de Home Assistant a qualsevol targeta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Exemple 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Mostrar la data i l'hora formatades en un separador sense utilitzar cap entitat</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Exemple 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Mostrar l'estat d'un subbotó en dues línies</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Exemple 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalitzar les etiquetes i les icones dins d'un subbotó de selecció</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Exemple 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Afegir un pop-up de recordatori persistent que només apareix quan cal</a>
</p>

<br>

</details>

<details>

<summary>Canviar el color de fons d'un botó perquè sigui vermell quan està <code>off</code> i blau quan està <code>on</code></summary>

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

<summary>Canviar el color de fons d'un botó basant-se en una entitat per a la pila de botons horitzontal</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Mostrar/amagar un subbotó de manera condicional</summary>

<br>

Aquest exemple mostra el primer subbotó només quan el meu robot aspirador està encallat.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Aquest exemple mostra un subbotó quan la bateria és inferior al 10%. Útil amb un subbotó que mostri "Bateria baixa".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Canviar una icona o la icona d'un subbotó de manera condicional</summary>

<br>

Aquest exemple canvia la icona d'un botó només quan un robot aspirador està encallat.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Aquest exemple canvia la icona del primer subbotó només quan un robot aspirador està encallat.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Canviar el color d'una icona o de la icona d'un subbotó de manera condicional</summary>

<br>

Aquest exemple canvia el color de la icona d'un botó basant-se en el seu estat.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Aquest exemple canvia el color de la icona d'un subbotó basant-se en el seu estat. `.bubble-sub-button-1` és el primer subbotó, substituïu `1` si voleu canviar la icona d'un altre subbotó.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animar la icona d'un ventilador de manera condicional</summary>

<br>

Aquest exemple fa girar la icona d'un botó quan un ventilador està `on`.
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

<summary>Aplicar plantilles als textos (com el nom o l'estat)</summary>

<br>

Aquest exemple canvia el nom/estat d'un botó per "It's currently sunny" en funció del vostre temps.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
o quan s'aplica als subbotons:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Si voleu aplicar una plantilla a l'estat (`.bubble-state`), no activeu `show_state: true`, activeu només `show_attribute: true` sense cap atribut.

</details>

<details>

<summary>Exemple avançat: canviar el color d'un subbotó quan un pop-up està obert</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Exemple avançat: aplicar una plantilla al nom d'un separador basant-se en un estat traduït a la vostra llengua</summary>

<br>

Podeu utilitzar `hass.formatEntityState(state)` per traduir un estat i `hass.formatEntityAttributeValue(state, "attribute")` per traduir un atribut.

Aquest exemple canvia el nom i la icona segons el temps, "Nuageux" vol dir "Ennuvolat" en francès.

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

## Mòduls

Els mòduls són una funció potent que us permet desar, reutilitzar i compartir els vostres estils personalitzats i plantilles a totes les vostres Bubble Cards. En lloc de copiar i enganxar el mateix codi en diverses targetes, podeu crear un mòdul i aplicar-lo allà on el necessiteu. Això fa que gestionar l'aspecte del vostre tauler sigui molt més fàcil i eficient.

Però aquesta funció és molt més potent que això: us permet afegir funcions de debò vosaltres mateixos a l'editor de Bubble Card, utilitzant totes les opcions per defecte dels [formularis de Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
El selector d'objectes s'ha millorat per mostrar els canvis en directe i per admetre correctament els atributs.

Un mòdul també pot respondre al selector de targetes de Home Assistant al costat dels [suggeriments d'entitat](#suggeriments-dentitat) integrats: useu `suggestions` per a les targetes que pot descriure per endavant, i `suggestions_code` quan s'han de calcular a partir de la vostra instal·lació, per exemple un pop-up construït amb totes les entitats de l'àrea a la qual pertany l'entitat triada. Les dues claus estan documentades [aquí](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

També podeu explorar el **Module Store** per trobar i instal·lar [mòduls creats per la comunitat](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), o compartir les vostres pròpies creacions!

> [!TIP]
> El codi d'un mòdul funciona exactament igual que el codi de la secció `styles` d'una targeta. Hi teniu disponibles les mateixes variables i funcions de la secció [Plantilles](#plantilles).

<br>

### Configuració inicial

> [!IMPORTANT]
> A partir de la v3.1.0, Bubble Card Tools és el sistema d'emmagatzematge recomanat per als mòduls. El mètode antic del sensor de plantilla encara funciona per a les instal·lacions existents, però els mòduls nous i les funcions del Module Store funcionen millor amb Bubble Card Tools.

La integració Bubble Card Tools activa l'editor de mòduls i el Module Store, i desa els mòduls com a fitxers YAML individuals. Els mòduls existents es migren automàticament.

Els passos d'instal·lació i configuració s'expliquen aquí:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### L'editor de mòduls

Podeu accedir a l'editor de mòduls des de la configuració de qualsevol targeta, a la secció **Mòduls**. L'editor ofereix dues pestanyes principals:

#### Pestanya Els meus mòduls

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Aquesta pestanya mostra tots els mòduls que teniu instal·lats i us permet:

- **Aplicar** mòduls existents a la targeta actual
- **Crear** un mòdul nou des de zero
- **Editar** mòduls existents amb previsualització en directe
- **Suprimir** els mòduls que ja no necessiteu
- **Cercar** i **ordenar** els mòduls (alfabètic, recents, actius primer)
- **Definir l'estat global** perquè un mòdul s'apliqui automàticament a totes les targetes
- **Importar/Exportar** mòduls per fer còpies de seguretat o compartir-los
- **Escriure suggeriments d'entitat** a l'editor de mòduls, a **Opcional: suggeriments d'entitat**, perquè el vostre mòdul s'ofereixi al selector de targetes de Home Assistant. Tant les regles com els suggeriments calculats es comproven mentre escriviu, un error hi impedeix desar, i la previsualització mostra les targetes suggerides per a qualsevol entitat que trieu

#### Pestanya Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Aquesta pestanya mostra [tots els mòduls disponibles de la comunitat](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), i us permet:

- **Explorar** tots els mòduls creats per la comunitat
- **Cercar** i filtrar els mòduls per nom, compatibilitat o paraules clau
- **Instal·lar** mòduls amb un sol clic
- **Actualitzar** els mòduls instal·lats quan hi ha noves versions disponibles

> [!TIP]
> A l'editor, podeu activar els mòduls no compatibles per provar mòduls que encara no estan marcats com a compatibles amb un tipus de targeta determinat.

<br>

### Com utilitzar els mòduls

#### Crear un mòdul nou

<details>

<summary>Feu clic per desplegar</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Aneu a l'editor de qualsevol targeta i desplegueu la secció **Mòduls**.
2. Feu clic a **Crea un mòdul nou**.
3. Empleneu la informació del mòdul.
4. Escriviu el codi de la vostra plantilla CSS i/o JavaScript a l'editor **Codi**.
5. (Opcional) Creeu una interfície de configuració personalitzada a la secció **Editor** (com el selector de color de la captura de pantalla de dalt, documentació completa disponible [aquí](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Opcional) Escriviu els vostres **Suggeriments d'entitat** perquè el vostre mòdul s'ofereixi al selector de targetes de Home Assistant. El plafó comprova el que escriviu mentre teclegeu, i la seva previsualització mostra les mateixes targetes suggerides per a l'entitat que trieu.
7. Feu clic a **Desa**.

El vostre mòdul ja està disponible per utilitzar-lo a qualsevol de les vostres targetes!

<br>

</details>

#### Aplicar un mòdul a una targeta

<details>

<summary>Feu clic per desplegar</summary>

<br>

- **Des de l'editor:**

  - Aneu a l'editor de la targeta on voleu aplicar el mòdul.
  - Desplegueu la secció **Mòduls**.
  - Feu clic al mòdul de la llista que voleu aplicar.
  - A "Aplica a", feu clic a "Aquesta targeta". El mòdul ja està actiu. Podeu aplicar diversos mòduls a la mateixa targeta.

- **Via YAML:**

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

#### Aplicar un mòdul globalment

<details>

<summary>Feu clic per desplegar</summary>

<br>

Podeu configurar un mòdul perquè s'apliqui automàticament a totes les Bubble Cards:

**Això no està disponible per als mòduls amb editor, ja que aquests requereixen una configuració específica per funcionar.**

- **Des de l'editor:**

  - A l'editor de mòduls, trobeu el vostre mòdul a la pestanya **Els meus mòduls**.
  - Activeu el botó **Totes les targetes** al costat del nom del mòdul.
  - A partir d'ara, el mòdul s'aplicarà automàticament a totes les targetes.
 
- **Via YAML:**

  A la configuració YAML del vostre mòdul (a `bubble-modules.yaml`), només cal afegir `is_global: true`.

<br>

</details>

#### Excloure una sola targeta d'un mòdul global

<details>

<summary>Feu clic per desplegar</summary>

<br>

Si teniu un mòdul global però voleu excloure'l d'una targeta concreta:

- **Des de l'editor:**
  
  - A la secció **Mòduls** de la targeta, veureu la llista dels mòduls globals.
  - Feu clic a un mòdul global i desactiveu "Aquesta targeta" per excloure'l d'aquesta targeta concreta.

- **Via YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Compartir el vostre mòdul al Module Store

<details>

<summary>Feu clic per desplegar</summary>

<br>

Per compartir el vostre mòdul al Module Store, a l'editor de mòduls, a baix de tot a "Exporta el mòdul", feu clic a "Copia per a GitHub" i enganxeu el contingut en una discussió nova a la categoria [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Editeu la descripció** (si cal), **l'exemple** (per als usuaris de YAML), i recordeu **incloure almenys una captura de pantalla** per al Module Store.

**El vostre mòdul estarà disponible immediatament després** (després d'una actualització de l'Store), així que comproveu bé que tot estigui escrit correctament i que el mòdul funcioni com s'espera. Per descomptat, podeu editar/actualitzar el mòdul després de compartir-lo.

<br>

</details>

#### Gestió de versions

<details>

<summary>Feu clic per desplegar</summary>

<br>

El Module Store comprova automàticament si hi ha actualitzacions dels mòduls instal·lats. Quan hi ha actualitzacions disponibles:

1. Veureu un indicador d'actualització a la pestanya **Module Store**.
2. Feu clic a **Actualitza** als mòduls amb actualitzacions disponibles.
3. Confirmeu l'actualització al Module Store.

<br>

</details>

#### Definir els tipus de targeta compatibles

<details>

<summary>Feu clic per desplegar</summary>

<br>

És possible que alguns mòduls no siguin compatibles amb tots els tipus de targeta. Podeu especificar quines targetes admet un mòdul.  
Si voleu que un mòdul sigui compatible amb **totes les targetes**, simplement ometeu el camp `supported` (o utilitzeu l'opció **Totes les targetes** a l'editor).

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

### Exemples

<details>
<summary>Mòdul d'estil bàsic</summary>

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
<summary>Mòdul amb configuració personalitzada</summary>

<br>

Aquest mòdul està disponible [aquí](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Trobareu més exemples al Module Store, o [aquí](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localització

Bubble Card parla la vostra llengua. El seu editor està traduït a les 64 llengües que Home Assistant admet, i allà on Home Assistant ja té una paraula per a alguna cosa, es reutilitza la seva formulació, així llegiu els mateixos termes a totes dues interfícies.

A la part inferior de l'editor, al costat del número de versió, un interruptor **Automàtic** segueix la llengua del vostre Home Assistant. Desactiveu-lo i tot l'editor torna a l'anglès, cosa pràctica per seguir un tutorial o per informar d'un problema. La vostra tria es recorda al navegador.

Aquesta documentació també està traduïda, [a 62 llengües](languages.md), totes menys l'anglès britànic, que llegeix l'original. Aquestes pàgines són obertes a tothom, així una expressió que no coincideix amb el vostre Home Assistant es pot corregir en un parell de clics. La versió anglesa continua sent la referència per al contingut mateix.

<br>

---

<br>

## Ajuda

No dubteu a obrir una incidència si alguna cosa no funciona com s'espera. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Teniu preguntes o reflexions sobre Bubble Card? Voleu compartir els vostres taulers o els vostres descobriments? Podeu anar al fòrum de Home Assistant, al subreddit de Bubble Card o a la secció de GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Contribuir

Les contribucions són benvingudes! Ja siguin correccions d'errors, funcionalitats noves, traduccions o millores de la documentació, no dubteu a obrir una pull request.

Abans de començar, llegiu la [guia per a desenvolupadors](DEVELOPERS.md), que explica com configurar el vostre entorn local, compilar el projecte i provar els vostres canvis.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donatius

Dedico la major part del meu temps lliure a fer que aquest projecte sigui el millor possible. Així que, si valoreu la meva feina, qualsevol donatiu serà una molt bona manera de mostrar el vostre suport 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Gràcies a tothom pel vostre suport, sou la meva millor motivació!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
