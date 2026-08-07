<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Questa pagina è una traduzione automatica. In caso di dubbio, fa fede la [documentazione originale in inglese](../README.md). Una frase ti sembra sbagliata? Ogni aiuto è benvenuto e [correggere questa pagina](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.it.md) richiede solo un minuto: GitHub si occupa del fork e della pull request. Grazie in anticipo! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Leggi questa pagina in un'altra lingua](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card è una raccolta di schede minimaliste e personalizzabili per Home Assistant, con pop-up moderni e uno Module Store integrato con oltre 100 moduli creati dalla community.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Indice

**[`Installazione`](#installazione)**  **[`Configurazione`](#configurazione)**  **[`Suggerimenti per entità`](#suggerimenti-per-entità)**  **[`Pop-up`](#pop-up)**  **[`Pila di pulsanti orizzontale`](#pila-di-pulsanti-orizzontale)**  **[`Pulsante`](#pulsante)**  **[`Lettore multimediale`](#lettore-multimediale)**  **[`Tapparella`](#tapparella)**  **[`Selettore`](#selettore)**  **[`Clima`](#clima)**  **[`Calendario`](#calendario)**  **[`Separatore`](#separatore)**  **[`Colonna vuota`](#colonna-vuota)**  **[`Solo sotto-pulsanti`](#solo-sotto-pulsanti)**  **[`Sotto-pulsanti`](#sotto-pulsanti)**  **[`Layout delle schede`](#layout-delle-schede)**  **[`Condizioni`](#condizioni)**  **[`Azioni`](#azioni-tocco-doppio-tocco-e-pressione-prolungata)**  **[`Stile`](#stile)**  **[`Template`](#template)**  **[`Moduli`](#moduli)**  **[`Localizzazione`](#localizzazione)**  **[`Aiuto`](#aiuto)**  **[`Contribuire`](#contribuire)**  **[`Fare una donazione`](#fare-una-donazione)**

<br>

## Installazione

**Versione minima supportata di Home Assistant:** 2023.9.0

<details>

<summary>Senza HACS</summary>

<br>

1. Scarica `bubble-card.zip` dall'[ultima release](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Estrailo nella tua cartella `<config>/www`, dovresti ottenere `bubble-card.js` e accanto una cartella `translations` (quella cartella contiene i dizionari dell'editor, senza di essa l'editor resta in inglese)
3. Sulla tua dashboard clicca sull'icona in alto a destra e poi su `Modifica dashboard`
4. Clicca di nuovo su quell'icona e poi clicca su `Gestisci risorse`
5. Clicca su `Aggiungi risorsa`
6. Copia e incolla questo: `/local/bubble-card.js?v=1`
7. Clicca su `Modulo JavaScript` e poi su `Crea`
8. Torna indietro e aggiorna la pagina
9. Ora puoi cliccare su `Aggiungi scheda` in basso a destra e cercare `Bubble Card`
10. Dopo ogni aggiornamento del file dovrai modificare `/local/bubble-card.js?v=1` e cambiare il numero di versione con uno più alto

Se non funziona, prova semplicemente a svuotare la cache del browser.

</details>

<details>

<summary>Con HACS (consigliato)</summary>

<br>

Questo metodo ti permette di ricevere gli aggiornamenti direttamente sulla Home Assistant Community Store

1. Se HACS non è ancora installato, scaricalo seguendo le istruzioni su [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Procedi con la configurazione iniziale di HACS seguendo le istruzioni su [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Nella barra laterale vai su "HACS"
4. Cerca "Bubble Card", oppure clicca sul pulsante blu qui sotto
5. Clicca su "Download"
6. Torna sulla tua dashboard e clicca sull'icona in alto a destra e poi su `Modifica dashboard`
7. Ora puoi cliccare su `Aggiungi scheda` in basso a destra e cercare `Bubble Card`

Se non funziona, prova a svuotare la cache del browser/app (su tutti i tuoi dispositivi se necessario).

#### Video

Puoi anche dare un'occhiata al mio canale YouTube per dei video passo passo.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configurazione

Tutte le opzioni possono essere configurate nell'editor di Home Assistant. Ma qui sotto trovi maggiori dettagli e il codice YAML nella documentazione.

<details>

<summary><b>Opzioni principali (YAML + descrizione)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `type` | string | **Obbligatorio** | `custom:bubble-card` | Tipo di scheda |
| `card_type` | string | **Obbligatorio** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` o `sub-buttons` | Tipo di scheda Bubble Card, vedi sotto |
| `styles` | object list | Facoltativo | Qualsiasi foglio di stile CSS | Ti permette di personalizzare il CSS della tua Bubble Card, vedi [stile](#stile) |

</details>

<details>

<summary><b>Variabili CSS globali (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Raggio del bordo per tutti gli elementi supportati |
| `--bubble-main-background-color` | `color` | Colore di sfondo principale per tutti gli elementi supportati |
| `--bubble-secondary-background-color` | `color` | Colore di sfondo secondario per tutti gli elementi supportati |
| `--bubble-accent-color` | `color` | Colore d'accento per tutti gli elementi supportati |
| `--bubble-icon-border-radius` | `px` | Raggio del bordo dell'icona per tutti gli elementi supportati |
| `--bubble-icon-background-color` | `color` | Colore di sfondo dell'icona per tutti gli elementi supportati |
| `--bubble-sub-button-border-radius` | `px` | Raggio del bordo per tutti i sotto-pulsanti |
| `--bubble-sub-button-background-color` | `color` | Colore di sfondo per tutti i sotto-pulsanti |
| `--bubble-box-shadow` | vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra per tutti gli elementi supportati |
| `--bubble-border` | vedi [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Bordo per tutte le schede supportate |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Guarda questo [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) per scoprire Bubble Card e le sue possibilità.** Il mio canale YouTube è ancora nuovo e si concentra su tutorial su Home Assistant e Bubble Card. Non esitare a iscriverti per aiutarmi ad aumentare la visibilità del canale. Grazie in anticipo!

<br>

---

<br>

## Suggerimenti per entità

Da Home Assistant 2026.6, scegliere un'entità nel selettore di schede ti propone alcune schede già pronte, e Bubble Card risponde a quella domanda con le sue ricette. Scegli una luce e ti viene proposta una scheda con un cursore di luminosità, più una variante temperatura di colore, una variante colore e una variante saturazione quando la tua luce le supporta. Scegli una tapparella e ottieni il suo cursore di posizione, scegli un lettore multimediale e ottieni anche una variante con il suo elenco di sorgenti, scegli un aspirapolvere e ottieni i suoi pulsanti avvia, pausa e ritorno alla base. Ogni suggerimento è una normale configurazione Bubble Card mostrata come anteprima dal vivo, così puoi prendere quella più vicina e continuare a modificarla come al solito.

Quello che ti viene proposto dipende da cosa la tua entità sa davvero fare: una luce senza canale di luminosità riceve un interruttore invece di un cursore, una tapparella che non può inclinarsi non ha la variante inclinazione, un'entità clima ottiene le sue modalità preimpostate solo quando ne ha. Le voci classiche seguono sotto di esse quando sono pertinenti: la scheda dedicata del dominio, un semplice pulsante e un cursore.

> [!TIP]
> I moduli possono aggiungere i propri suggerimenti a quell'elenco, vedi [moduli](#moduli).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Questa scheda ti permette di creare un pop-up con qualsiasi contenuto. Ogni pop-up è **nascosto per impostazione predefinita** e può essere aperto puntando al suo link (ad es. `'#pop-up-name'`), con qualsiasi scheda che supporta l'[azione](#azioni-tocco-doppio-tocco-e-pressione-prolungata) `navigate`, oppure con la [pila di pulsanti orizzontale](#pila-di-pulsanti-orizzontale) inclusa.

> [!TIP]
> ### Trigger del pop-up 
> Questa funzione ti permette di aprire un pop-up in base allo stato di qualsiasi entità, ad esempio puoi aprire un pop-up "Sicurezza" con una telecamera quando una persona è davanti a casa tua. Puoi anche creare un aiutante di tipo interruttore (input_boolean) e attivarne l'apertura/chiusura in un'automazione.
> <details>
> <summary>Aprire un pop-up quando un <code>binary_sensor</code> è <code>on</code></summary>
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
> ### Diversi modi per chiudere un pop-up 
> Ci sono molti modi per chiudere un pop-up. Ad esempio, puoi scorrere dall'intestazione del pop-up verso il basso, fare uno scorrimento lungo all'interno del pop-up verso il basso, premere Esc su desktop, rimuovere l'hash dall'URL oppure semplicemente premere il pulsante di chiusura.
>


### Opzioni del pop-up

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obbligatorio** | Qualsiasi hash univoco (ad es. `'#kitchen'`) con ' ' | Questo è il modo in cui aprirai il tuo pop-up |
| `popup_style` | string | Facoltativo | `bubble` (predefinito) o `classic` | Definisce lo stile visivo del pop-up |
| `popup_mode` | string | Facoltativo | `default` (predefinito), `fit-content`, `centered` o `adaptive-dialog` | Definisce la modalità di layout del pop-up |
| `with_bottom_offset` | boolean | Facoltativo | `true` o `false` (predefinito) | Usato solo con `popup_mode: fit-content` o `adaptive-dialog`. Applica un offset inferiore su mobile, utile quando la tua dashboard include una scheda a piè di pagina. |
| `full_width_on_mobile` | boolean | Facoltativo | `true` o `false` (predefinito) | Usato solo con `popup_mode: centered`. Espande il pop-up alla larghezza piena dello schermo su mobile, utile su display più piccoli. |
| `performance_mode` | string | Facoltativo | `default` (predefinito) o `performance` | Ottimizza l'animazione di apertura del pop-up. `performance` ritarda leggermente il rendering del contenuto e la sfocatura dello sfondo, e disattiva anche la sfocatura del backdrop se impostata. |
| `auto_close` | string | Facoltativo | Un timeout in millisecondi (ad es. `10000` per 10s) | Chiude automaticamente il pop-up dopo un timeout |
| `close_on_click` | boolean | Facoltativo | `true` o `false` (predefinito) | Chiude automaticamente il pop-up dopo qualsiasi interazione |
| `close_by_clicking_outside` | boolean | Facoltativo | `true` (predefinito) o `false` | Chiude il pop-up cliccando al di fuori di esso |
| `width_desktop` | string | Facoltativo | Qualsiasi valore CSS | Larghezza su desktop (`100%` predefinito su mobile) |
| `margin` | string | Facoltativo | Qualsiasi valore CSS | Usa questa opzione **solo** se il tuo pop-up non è ben centrato su mobile (ad es. `13px`) |
| `margin_top_mobile` | string | Facoltativo | Qualsiasi valore CSS | Margine superiore su mobile (ad es. `-56px` se la tua intestazione è nascosta) |
| `margin_top_desktop` | string | Facoltativo | Qualsiasi valore CSS | Margine superiore su desktop (ad es. `50vh` per un pop-up a metà altezza o `calc(100vh - 400px)` per un'altezza fissa di `400px`) |
| `bg_color` | string | Facoltativo | Qualsiasi valore hex, rgb o rgba | Il colore di sfondo del tuo pop-up (ad es. `#ffffff` per uno sfondo bianco) |
| `bg_opacity` | string | Facoltativo | Qualsiasi valore da `0` a `100` | L'opacità dello sfondo del tuo pop-up (ad es. `100` per nessuna trasparenza) |
| `bg_blur` | string | Facoltativo | Qualsiasi valore da `0` a `100` | L'effetto di sfocatura dello sfondo del tuo pop-up, **funziona solo se `bg_opacity` non è impostato a `100`** (ad es. `0` per nessuna sfocatura)|
| `shadow_opacity` | string | Facoltativo | Qualsiasi valore da `0` a `100` | L'opacità dell'ombra del tuo pop-up (ad es. `0` per nasconderla) |
| `hide_backdrop` | boolean | Facoltativo | `true` o `false` (predefinito) | Imposta questo a true sul primo pop-up della tua dashboard principale per disattivare il backdrop su tutti i pop-up. |
| `background_update` | boolean | Facoltativo | `true` o `false` (predefinito) | Aggiorna il contenuto del pop-up in background (non consigliato) |
| `trigger` | object or list | Facoltativo | Vedi [condizioni](#condizioni) | Apre questo pop-up quando le condizioni sono soddisfatte |
| `trigger_entity` | string | Facoltativo | Qualsiasi entità | Apre questo pop-up in base allo stato di qualsiasi entità, la forma semplice di `trigger` |
| `trigger_state` | string | Facoltativo (**Obbligatorio** se `trigger_entity` è definito) | Qualsiasi stato dell'entità | Stato dell'entità per aprire il pop-up |
| `trigger_close` | boolean | Facoltativo | `true` o `false` | Chiude il pop-up quando le condizioni non sono più soddisfatte (predefinito: `true` con `trigger`, `false` con `trigger_state`) |
| `open_action` | object | Facoltativo | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Attiva un'azione all'apertura del pop-up |
| `close_action` | object | Facoltativo | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Attiva un'azione alla chiusura del pop-up |
| `show_header` | boolean | Facoltativo | `true` (predefinito) o `false` | Mostra/Nascondi completamente l'intestazione del pop-up |
| `show_previous_button` | boolean | Facoltativo | `true` o `false` (predefinito) | Mostra un pulsante indietro accanto al pulsante di chiusura e torna al pop-up precedente quando disponibile |
| `show_close_button` | boolean | Facoltativo | `true` (predefinito) o `false` | Mostra o nasconde il pulsante di chiusura mantenendo visibile il resto dell'intestazione |
| `buttons_position` | string | Facoltativo | `right` (predefinito) o `left` | Posizione dei pulsanti di chiusura e indietro nell'intestazione |
| `cards` | list | Facoltativo | Qualsiasi Bubble Card, scheda di Home Assistant o scheda personalizzata | Definisce il contenuto del tuo pop-up. Vedi l'esempio di pop-up qui sotto. |
| Hai anche accesso a [tutte le impostazioni del pulsante](#pulsante) per l'intestazione del pop-up. | | Facoltativo | | Se non definito, non verrà mostrata alcuna intestazione |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Raggio del bordo per il pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Colore di sfondo principale per gli elementi supportati del pop-up |
| `--bubble-pop-up-background-color` | `color` | Colore di sfondo del pop-up |
| `--bubble-backdrop-background-color` | `color` | Colore di sfondo per il backdrop |
| Hai anche accesso a [tutte le variabili CSS del pulsante](#opzioni-del-pulsante) per l'intestazione del pop-up. | | |

</details>


### Formato pop-up standalone (v3.2.0+)

Dalla v3.2.0, i pop-up usano un nuovo formato standalone in cui le schede di contenuto sono definite direttamente all'interno del pop-up tramite l'opzione `cards`. Questo offre prestazioni migliori e una nuova esperienza di modifica drag-and-drop basata su sezioni.


#### Esempi

<details>

<summary>Un pop-up (formato standalone)</summary>

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

<summary>Un pulsante per aprire il pop-up</summary>

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

## Pila di pulsanti orizzontale

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Questa scheda è un ottimo complemento alla scheda pop-up, permettendo di aprire i pop-up corrispondenti. Permette anche di aprire qualsiasi pagina della tua dashboard. Inoltre, puoi aggiungere i tuoi sensori di movimento/presenza in modo che l'ordine dei pulsanti si adatti alla stanza in cui sei appena entrato. Questa scheda è scorrevole, rimane sempre visibile e funge da piè di pagina.

> [!IMPORTANT]  
> Questa scheda deve essere l'ultima della tua vista (dopo ogni scheda e pop-up). Non può trovarsi all'interno di nessuna pila.

### Opzioni della pila di pulsanti orizzontale

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obbligatorio** | L'hash del pop-up (es. `'#kitchen'`) con ' ' oppure qualsiasi link | Un link da aprire |
| `1_name` | string | Opzionale | Qualsiasi stringa | Un nome per il tuo pulsante |
| `1_icon` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per il tuo pulsante |
| `1_entity` | string | Opzionale | Qualsiasi luce o gruppo di luci | Mostra il colore di quella luce sullo sfondo |
| `1_pir_sensor` | string | Opzionale | Qualsiasi sensore binario | Almeno un sensore di presenza o più per `auto_order`; in realtà funziona anche con qualsiasi tipo di entità, per esempio puoi aggiungere gruppi di luci e l'ordine cambierà in base all'ultimo stato modificato. |
| `auto_order` | boolean | Opzionale | `true` o `false` (predefinito) | Cambia l'ordine dei pulsanti in base all'ultimo orario di modifica dei `_pir_sensor`, **deve essere `false` se non hai nessun `_pir_sensor` nel tuo codice** |
| `margin` | string | Opzionale | Qualsiasi valore CSS | Usa questa opzione **solo** se la tua `horizontal-buttons-stack` non è ben centrata su mobile (es. `13px`) |
| `width_desktop` | string | Opzionale | Qualsiasi valore CSS | Larghezza su desktop (`100%` per impostazione predefinita su mobile) |
| `is_sidebar_hidden` | boolean | Opzionale | `true` o `false` (predefinito) | Corregge la posizione della pila di pulsanti orizzontale se la barra laterale è nascosta su desktop (solo se hai apportato tu stesso una modifica per nasconderla) |
| `rise_animation` | boolean | Opzionale | `true` (predefinito) o `false` | Imposta questa opzione su `false` per disattivare l'animazione che si attiva al caricamento della pagina |
| `highlight_current_view` | boolean | Opzionale | `true` o `false` (predefinito) | Evidenzia l'hash / vista corrente con un'animazione fluida |
| `hide_gradient` | boolean | Opzionale | `true` o `false` (predefinito) | Imposta questa opzione su `false` per nascondere il gradiente |

> [!IMPORTANT]  
> Le variabili che iniziano con un numero definiscono i tuoi pulsanti, basta cambiare questo numero per aggiungere altri pulsanti (vedi l'esempio qui sotto).

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Raggio del bordo per i pulsanti della pila di pulsanti orizzontale |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Colore di sfondo per i pulsanti della pila di pulsanti orizzontale |

</details>


#### Esempio

<details>

<summary>Una pila di pulsanti orizzontale che si riorganizza in base ai sensori di presenza</summary>

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

## Pulsante

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Questa scheda è molto versatile. Può essere usata come **interruttore**, **cursore**, **stato** o pulsante **nome/testo**.

> [!TIP]
> ### Quali sono le differenze tra tutti i tipi di pulsante?
>
> - **Pulsante interruttore:** È il tipo di pulsante predefinito. Per impostazione predefinita, attiva/disattiva un'entità e il suo colore di sfondo cambia in base allo stato dell'entità o al colore di una luce. Puoi modificarne l'azione nella sezione **Tap action on card**.
>
> - **Pulsante cursore:** Questo tipo di pulsante ti consente di controllare entità con intervalli regolabili. È ideale per regolare l'intensità delle luci, e il suo colore di riempimento si adatterà al colore della luce. Puoi anche usarlo per mostrare valori, come il livello di una batteria.
>   Entità supportate per i cursori:
>   - Luce (luminosità)
>   - Lettore multimediale (volume)
>   - Tapparella (posizione)
>   - Ventilatore (percentuale)
>   - Clima (temperatura)
>   - Input number e number (valore)
>   - Sensore batteria (percentuale, sola lettura)
>
>   Puoi anche usare qualsiasi entità con uno stato numerico disattivando il filtro delle entità in **Slider settings**, quindi definire i valori `min` e `max`. Questa opzione è in sola lettura.
>
> - **Pulsante stato:** Perfetto per mostrare informazioni da un sensore o da qualsiasi entità. Quando lo premi, mostrerà il pannello "Maggiori informazioni" dell'entità. Il suo colore di sfondo non cambia.
>
> - **Pulsante nome/testo:** L'unico tipo di pulsante che non ha bisogno di un'entità. Ti permette di mostrare un breve testo, un nome o un titolo. Puoi anche aggiungervi delle azioni. Il suo colore di sfondo non cambia.

### Opzioni del pulsante

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obbligatorio** | Qualsiasi entità | Un'entità da controllare |
| `button_type` | string | Opzionale | `switch` (predefinito), `slider`, `state` o `name` | Il comportamento del tuo pulsante |
| `name` | string | Opzionale | Qualsiasi stringa | Un nome per il tuo pulsante, se non definito verrà mostrato il nome dell'entità |
| `icon` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per il tuo pulsante, se non definita verrà mostrata l'icona dell'entità o l'`entity-picture` |
| `force_icon` | boolean | Opzionale | `true` o `false` (predefinito) | Dai priorità all'icona invece dell'`entity-picture` |
| `use_accent_color` | boolean | Opzionale (`false` predefinito) | **Solo per le luci.** Usa il colore di accento del tema invece del colore della luce.                         |
| `show_state` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra o nascondi lo stato della tua `entity` |
| `show_name` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi il nome |
| `show_icon` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi l'icona |
| `show_last_changed` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ultimo orario di modifica della tua `entity` |
| `show_last_updated` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ultimo orario di aggiornamento della tua `entity` |
| `show_attribute` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra un attributo della tua `entity` sotto il suo `name` |
| `attribute` | string | Opzionale (obbligatorio se `show_attribute` è impostato su `true`) | Un attributo della tua `entity` | L'attributo da mostrare (es. `brightness`) |
| `scrolling_effect` | boolean | Opzionale | `true` (predefinito) o `false` | Permette al testo di scorrere quando il contenuto supera le dimensioni del suo contenitore |
| `button_action` | object | Opzionale | `tap_action`, `double_tap_action` o `hold_action`, vedi sotto | Permette di modificare le azioni predefinite al clic sul pulsante. |
| `tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al clic sull'icona, se non definito verrà usato `more-info` |
| `double_tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al doppio clic sull'icona, se non definito verrà usato `none` |
| `hold_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione alla pressione prolungata sull'icona, se non definito verrà usato `more-info` |
| `card_layout` | string | Opzionale | `normal` (predefinito se non in vista a sezioni), `large` (predefinito se in vista a sezioni), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Opzionale | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |
| `sub_button` | object | Opzionale | Vedi [sotto-pulsanti](#sotto-pulsanti) | Aggiungi pulsanti personalizzati fissati a destra |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Colore di sfondo principale per gli elementi supportati nel pulsante |
| `--bubble-button-border-radius` | `px` | Raggio del bordo per il pulsante |
| `--bubble-button-icon-border-radius` | `px` | Raggio del bordo per il contenitore dell'icona del pulsante |
| `--bubble-button-icon-background-color` | `color` | Colore di sfondo per il contenitore dell'icona del pulsante |
| `--bubble-light-white-color` | `color` | Sostituisce il colore bianco predefinito dei pulsanti/cursori luce |
| `--bubble-light-color` | `color` | Sostituisce il colore dei pulsanti/cursori luce (anche luci RGB) |
| `--bubble-button-box-shadow` | Vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra del pulsante |

</details>

Queste opzioni sono disponibili solo quando `button_type` è impostato su `slider`.

<details>

<summary><b>Opzioni del cursore (YAML + descrizioni)</b></summary>

| Nome                  | Tipo    | Requisito                     | Descrizione                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opzionale                        | Il valore minimo del cursore. Per cursori personalizzati.                                                    |
| `max_value`             | number  | Opzionale                        | Il valore massimo del cursore. Per cursori personalizzati.                                                    |
| `step`                  | number  | Opzionale                        | Il valore di incremento del cursore.                                                                           |
| `tap_to_slide`          | boolean | Opzionale (`false` predefinito)      | Attiva il comportamento precedente del cursore in cui tocchi per attivarlo, invece di tenerlo premuto.        |
| `relative_slide`        | boolean | Opzionale (`false` predefinito )     | Aggiorna il valore in modo relativo rispetto al valore di partenza, invece che al punto di tocco iniziale.                      |
| `read_only_slider`      | boolean | Opzionale (`false` predefinito)      | Rende il cursore in sola lettura. Attivato automaticamente per alcune entità come i sensori.                        |
| `slider_live_update`    | boolean | Opzionale (`false` predefinito)      | Lo stato dell'entità viene aggiornato durante lo scorrimento. **Questa funzionalità non è consigliata per tutte le entità.**        |
| `slider_fill_orientation` | string | Opzionale | `left`, `right`, `top` o `bottom` | Cambia la direzione di riempimento del cursore. Da sinistra a destra quando non definito, speculare nelle [lingue da destra a sinistra](#localizzazione) |
| `slider_value_position` | string | Opzionale | `right`, `left`, `center` o `hidden` | Posizione della visualizzazione del valore. Sul lato finale quando non definito, quindi a sinistra nelle [lingue da destra a sinistra](#localizzazione) |
| `invert_slider_value` | boolean | Opzionale (`false` predefinito) | Inverti la direzione del cursore (100% di riempimento equivale al minimo). Non disponibile per i cursori colore. |
| `light_slider_type` | string | Opzionale | `brightness` (predefinito), `hue`, `saturation`, `white_temp` | **Solo per le luci.** Scegli la modalità del cursore |
| `cover_slider_type` | string | Opzionale | `position` (predefinito), `tilt_position` | **Solo per le tapparelle.** Scegli la modalità del cursore (posizione o inclinazione) |
| `hue_force_saturation` | boolean | Opzionale (`false` predefinito) | **Solo per le luci (modalità Tonalità).** Forza la saturazione durante la regolazione della tonalità |
| `hue_force_saturation_value` | number | Opzionale (`100` predefinito) | **Solo per le luci (modalità Tonalità).** Valore di saturazione forzato (0-100) |
| `use_accent_color` | boolean | Opzionale (`false` predefinito) | **Solo per le luci (modalità Luminosità).** Usa il colore di accento del tema invece del colore della luce |
| `allow_light_slider_to_0` | boolean | Opzionale (`false` predefinito)    | **Solo per le luci.** Permette al cursore di raggiungere lo 0%, il che spegne la luce. Non disponibile con `tap_to_slide`. |
| `light_transition`      | boolean | Opzionale (`false` predefinito)      | **Solo per le luci.** Attiva le transizioni fluide di luminosità per le luci supportate.                           |
| `light_transition_time` | number  | Opzionale (`500` predefinito)        | **Solo per le luci.** Il tempo di transizione in millisecondi. Richiede `light_transition: true`.            |

</details>

#### Esempi

<details>

<summary>Un pulsante cursore che può controllare la luminosità di una luce</summary>

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

<summary>Un pulsante con più opzioni</summary>

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

## Lettore multimediale

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Questa scheda ti permette di controllare un'entità lettore multimediale.

### Opzioni del lettore multimediale

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obbligatorio** | Qualsiasi lettore multimediale | Il lettore multimediale da controllare |
| `name` | string | Opzionale | Qualsiasi stringa | Un nome per il tuo lettore multimediale, se non definito verrà mostrato il nome dell'entità |
| `icon` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per il tuo lettore multimediale, se non definita verrà mostrata l'icona dell'entità o l'`entity-picture` |
| `force_icon` | boolean | Opzionale | `true` o `false` (predefinito) | Dai priorità all'icona invece dell'`entity-picture` |
| `show_state` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra o nascondi lo stato della tua `entity` |
| `show_name` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi il nome |
| `show_icon` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi l'icona |
| `show_last_changed` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ultimo orario di modifica della tua `entity` |
| `show_last_updated` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ultimo orario di aggiornamento della tua `entity` |
| `show_attribute` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra un attributo della tua `entity` sotto il suo `name` |
| `attribute` | string | Opzionale (obbligatorio se `show_attribute` è impostato su `true`) | Un attributo della tua `entity` | L'attributo da mostrare (es. `brightness`) |
| `scrolling_effect` | boolean | Opzionale | `true` (predefinito) o `false` | Permette al testo di scorrere quando il contenuto supera le dimensioni del suo contenitore |
| `min_volume` | number | Opzionale | Qualsiasi numero | Il valore minimo del cursore del volume. |
| `max_volume` | number | Opzionale | Qualsiasi numero | Il valore massimo del cursore del volume. |
| `cover_background` | boolean | Opzionale | `true` o `false` (predefinito) | Usa una copertina multimediale sfocata come sfondo della scheda. |
| `button_action` | object | Opzionale | `tap_action`, `double_tap_action` o `hold_action`, vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Permette di modificare le azioni predefinite al clic sul pulsante. |
| `tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al clic sull'icona, se non definito verrà usato `more-info`. |
| `double_tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al doppio clic sull'icona, se non definito verrà usato `none`. |
| `hold_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione alla pressione prolungata sull'icona, se non definito verrà usato `more-info`. |
| `main_buttons_position` | string | Opzionale | `default` o `bottom` | Sposta i pulsanti di azione della copertina in basso (posizione fissa) |
| `main_buttons_full_width` | boolean | Opzionale | `true` o `false` | Rende i pulsanti di azione in basso a larghezza piena (predefinito: `true` quando la posizione è `bottom`) |
| `main_buttons_alignment` | string | Opzionale | `end` (predefinito), `center`, `start`, `space-between` | Allineamento dei pulsanti di azione in basso quando non a larghezza piena |
| `card_layout` | string | Opzionale | `normal` (predefinito se non in vista a sezioni), `large` (predefinito se in vista a sezioni), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Opzionale | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |
| `sub_button` | object | Opzionale | Vedi [sotto-pulsanti](#sotto-pulsanti) | Aggiungi pulsanti personalizzati fissati a destra |
| `hide` | object | Opzionale | Vedi sotto | Nascondi pulsanti dalla scheda |

#### Opzioni di occultamento

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opzionale | `true` o `false` (predefinito) | Nascondi il pulsante riproduci/pausa |
| `volume_button` | boolean | Opzionale | `true` o `false` (predefinito) | Nascondi il pulsante volume |
| `previous_button` | boolean | Opzionale | `true` o `false` (predefinito) | Nascondi il pulsante precedente |
| `next_button` | boolean | Opzionale | `true` o `false` (predefinito) | Nascondi il pulsante successivo |
| `power_button` | boolean | Opzionale | `true` o `false` (predefinito) | Nascondi il pulsante di accensione |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Colore di sfondo principale per il lettore multimediale |
| `--bubble-media-player-border-radius` | `px` | Raggio del bordo per il lettore multimediale |
| `--bubble-media-player-buttons-border-radius` | `px` | Raggio del bordo per i pulsanti del lettore multimediale |
| `--bubble-media-player-slider-background-color` | `color` | Colore di sfondo per il cursore del volume |
| `--bubble-media-player-icon-border-radius` | `px` | Raggio del bordo per il contenitore dell'icona del lettore multimediale |
| `--bubble-media-player-icon-background-color` | `color` | Colore di sfondo per il contenitore dell'icona del lettore multimediale |
| `--bubble-media-player-box-shadow` | Vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra del lettore multimediale |

</details>


#### Esempi

<details>

<summary>Un lettore multimediale con tutte le opzioni</summary>

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

## Tapparella

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Questa scheda ti permette di controllare le tue entità `cover`.

### Opzioni della tapparella

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obbligatorio** | Qualsiasi tapparella | Una tapparella da controllare |
| `name` | string | Opzionale | Qualsiasi stringa | Un nome per la tua tapparella, se non definito verrà mostrato il nome dell'entità |
| `force_icon` | boolean | Opzionale | `true` o `false` (predefinito) | Dai priorità all'icona invece dell'`entity-picture` |
| `show_state` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra o nascondi lo stato della tua `entity` |
| `show_name` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi il nome |
| `show_icon` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi l'icona |
| `show_last_changed` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ora dell'ultima modifica della tua `entity` |
| `show_last_updated` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ora dell'ultimo aggiornamento della tua `entity` |
| `show_attribute` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra un attributo della tua `entity` sotto il suo `name` |
| `attribute` | string | Opzionale (obbligatorio se `show_attribute` è impostato su `true`) | Un attributo della tua `entity` | L'attributo da mostrare (es. `brightness`) |
| `scrolling_effect` | boolean | Opzionale | `true` (predefinito) o `false` | Permette al testo di scorrere quando il contenuto supera le dimensioni del suo contenitore |
| `icon_open` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per la tua tapparella aperta, se non definita verrà mostrata l'icona predefinita di apertura |
| `icon_close` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per la tua tapparella chiusa, se non definita verrà mostrata l'icona predefinita di chiusura |
| `icon_up` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per il pulsante di apertura della tapparella, se non definita verrà mostrata l'icona predefinita di apertura |
| `icon_down` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per il pulsante di chiusura della tapparella, se non definita verrà mostrata l'icona predefinita di chiusura |
| `open_service` | string | Opzionale | Qualsiasi servizio o script | Un servizio per aprire la tua tapparella, predefinito `cover.open_cover` |
| `stop_service` | string | Opzionale | Qualsiasi servizio o script | Un servizio per fermare la tua tapparella, predefinito `cover.stop_cover` |
| `close_service` | string | Opzionale | Qualsiasi servizio o script | Un servizio per chiudere la tua tapparella, predefinito `cover.close_cover` |
| `tilt_buttons` | string | Opzionale | `top` (predefinito), `bottom`, `left`, `right`, `hidden` | Posizione dei pulsanti di controllo dell'inclinazione (mostrati solo se la tapparella supporta l'inclinazione) |
| `open_tilt_service` | string | Opzionale | Qualsiasi servizio o script | Un servizio per aprire l'inclinazione, predefinito `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opzionale | Qualsiasi servizio o script | Un servizio per chiudere l'inclinazione, predefinito `cover.close_cover_tilt` |
| `button_action` | object | Opzionale | `tap_action`, `double_tap_action` o `hold_action`, vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Permette di cambiare le azioni predefinite al clic del pulsante. |
| `tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al tocco dell'icona, se non definito verrà usato `more-info`. |
| `double_tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al doppio tocco dell'icona, se non definito verrà usato `none`. |
| `hold_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione alla pressione prolungata dell'icona, se non definito verrà usato `more-info`. |
| `main_buttons_position` | string | Opzionale | `default` o `bottom` | Sposta i controlli multimediali in basso (fisso) |
| `main_buttons_full_width` | boolean | Opzionale | `true` o `false` | Rende i controlli inferiori a larghezza piena (predefinito: `true` quando la posizione è `bottom`) |
| `main_buttons_alignment` | string | Opzionale | `end` (predefinito), `center`, `start`, `space-between` | Allineamento dei controlli inferiori quando non a larghezza piena |
| `card_layout` | string | Opzionale | `normal` (predefinito se non in vista sezione), `large` (predefinito se in vista sezione), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Opzionale | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |
| `sub_button` | object | Opzionale | Vedi [sotto-pulsanti](#sotto-pulsanti) | Aggiungi pulsanti personalizzati fissati a destra |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Colore di sfondo principale per gli elementi supportati nella scheda tapparella |
| `--bubble-cover-border-radius` | `px` | Raggio del bordo per la scheda tapparella |
| `--bubble-cover-icon-border-radius` | `px` | Raggio del bordo per il contenitore dell'icona della scheda tapparella |
| `--bubble-cover-icon-background-color` | `color` | Colore di sfondo per il contenitore dell'icona della scheda tapparella |
| `--bubble-cover-box-shadow` | Vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra per la scheda tapparella |
| `--bubble-button-box-shadow` | Vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra per i pulsanti nella scheda tapparella |

</details>


#### Esempio

<details>

<summary>Una scheda che può controllare una tapparella avvolgibile</summary>

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

## Selettore

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Questa scheda ti permette di aggiungere un menu a tendina per le tue entità `input_select` / `select`. Questa scheda supporta anche i sotto-pulsanti e tutte le funzionalità comuni di Bubble Card.

> [!TIP]
> Puoi anche avere sotto-pulsanti selettore se lo desideri, questa funzionalità è disponibile in tutte le schede che supportano i sotto-pulsanti.

### Opzioni del selettore

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obbligatorio** | Qualsiasi entità | Un'entità da controllare |
| `name` | string | Opzionale | Qualsiasi stringa | Un nome per il tuo selettore, se non definito verrà mostrato il nome dell'entità |
| `icon` | string | Opzionale | Qualsiasi icona `mdi:` | Un'icona per il tuo selettore, se non definita verrà mostrata l'icona dell'entità o l'`entity-picture` |
| `force_icon` | boolean | Opzionale | `true` o `false` (predefinito) | Dai priorità all'icona invece dell'`entity-picture` |
| `show_state` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra o nascondi lo stato della tua `entity` |
| `show_name` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi il nome |
| `show_icon` | boolean | Opzionale | `true` (predefinito) o `false` | Mostra o nascondi l'icona |
| `show_last_changed` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ora dell'ultima modifica della tua `entity` |
| `show_last_updated` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra l'ora dell'ultimo aggiornamento della tua `entity` |
| `show_attribute` | boolean | Opzionale | `true` o `false` (predefinito) | Mostra un attributo della tua `entity` sotto il suo `name` |
| `attribute` | string | Opzionale (obbligatorio se `show_attribute` è impostato su `true`) | Un attributo della tua `entity` | L'attributo da mostrare (es. `brightness`) |
| `scrolling_effect` | boolean | Opzionale | `true` (predefinito) o `false` | Permette al testo di scorrere quando il contenuto supera le dimensioni del suo contenitore |
| `tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al tocco dell'icona, se non definito verrà usato `more-info`. |
| `double_tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al doppio tocco dell'icona, se non definito verrà usato `none`. |
| `hold_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione alla pressione prolungata dell'icona, se non definito verrà usato `more-info`. |
| `card_layout` | string | Opzionale | `normal` (predefinito se non in vista sezione), `large` (predefinito se in vista sezione), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Opzionale | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |
| `sub_button` | object | Opzionale | Vedi [sotto-pulsanti](#sotto-pulsanti) | Aggiungi pulsanti personalizzati fissati a destra |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Colore di sfondo principale per gli elementi supportati nella scheda selettore |
| `--bubble-select-background-color` | `color` | Colore di sfondo per la scheda selettore |
| `--bubble-select-list-border-radius` | `px` | Raggio del bordo per il menu a tendina nella scheda |
| `--bubble-select-list-item-accent-color` | `color` | Colore di accento per l'elemento selezionato |
| `--bubble-select-list-background-color` | `color` | Colore di sfondo per il menu a tendina nella scheda |
| `--bubble-select-list-width` | `px` | Larghezza del menu a tendina nella scheda |
| `--bubble-select-arrow-background-color` | `color` | Colore di sfondo per la freccia del menu a tendina |
| `--bubble-select-button-border-radius` | `px` | Raggio del bordo per il pulsante selettore |
| `--bubble-select-border-radius` | `px` | Raggio del bordo per la scheda selettore |
| `--bubble-select-icon-border-radius` | `px` | Raggio del bordo per il contenitore dell'icona della scheda selettore |
| `--bubble-select-icon-background-color` | `color` | Colore di sfondo per il contenitore dell'icona della scheda selettore |
| `--bubble-select-box-shadow` | Vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra per la scheda selettore |

</details>


#### Esempi

<details>

<summary>Una scheda selettore con un elenco di scene</summary>

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

## Clima

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Questa scheda ti permette di controllare le tue entità `climate`.

> [!TIP]
> Il menu di selezione della modalità è un [sotto-pulsante](#sotto-pulsanti) che viene aggiunto automaticamente alla creazione della scheda. Puoi poi modificarlo o rimuoverlo come preferisci.

### Opzioni del clima

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome                     | Tipo    | Requisito                         | Opzioni supportate                                  | Descrizione                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obbligatorio**                        | Entità clima                                   | L'entità da controllare (es. `climate.living_room`).                                                            |
| `name`                  | string  | Opzionale                            | Qualsiasi stringa                                       | Un nome personalizzato per la scheda. Se non definito, verrà mostrato il nome dell'entità.                                    |
| `icon`                  | string  | Opzionale                            | Qualsiasi icona `mdi:`                                  | Un'icona personalizzata per la scheda. Se non definita, verrà usata l'icona dell'entità o l'`entity-picture`.                   |
| `force_icon`            | boolean | Opzionale                            | `true` o `false` (predefinito)                     | Dà priorità all'icona rispetto all'`entity-picture`.                                                           |
| `show_state`            | boolean | Opzionale                            | `true` o `false` (predefinito)                     | Mostra o nascondi lo stato corrente dell'`entity`.                                                                 |
| `show_name`             | boolean | Opzionale                            | `true` (predefinito) o `false`                     | Mostra o nascondi il nome dell'entità.                                                                            |
| `show_icon`             | boolean | Opzionale                            | `true` (predefinito) o `false`                     | Mostra o nascondi l'icona.                                                                                          |
| `hide_target_temp_low`  | boolean | Opzionale (solo per entità che supportano `target_temp_low`) | `true` o `false` (predefinito) | Nasconde il controllo della temperatura target bassa, se supportato dall'`entity`.                                          |
| `hide_target_temp_high` | boolean | Opzionale (solo per entità che supportano `target_temp_high`)| `true` o `false` (predefinito) | Nasconde il controllo della temperatura target alta, se supportato dall'`entity`.                                         |
| `state_color`           | boolean | Opzionale                            | `true` o `false` (predefinito)                     | Applica un colore di sfondo costante quando l'entità clima è accesa.                                              |
| `step` | number | Opzionale | Qualsiasi numero | L'incremento della temperatura. |
| `min_temp` | number | Opzionale | Qualsiasi numero | La temperatura minima. |
| `max_temp` | number | Opzionale | Qualsiasi numero | La temperatura massima. |
| `button_action` | object | Opzionale | `tap_action`, `double_tap_action` o `hold_action`, vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Permette di cambiare le azioni predefinite al clic del pulsante. |
| `tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al tocco dell'icona, se non definito verrà usato `more-info`. |
| `double_tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al doppio tocco dell'icona, se non definito verrà usato `none`. |
| `hold_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione alla pressione prolungata dell'icona, se non definito verrà usato `more-info`. |                              |
| `main_buttons_position` | string | Opzionale | `default` o `bottom` | Sposta i pulsanti di azione del clima in basso (fisso) |
| `main_buttons_full_width` | boolean | Opzionale | `true` o `false` | Rende i pulsanti di azione inferiori a larghezza piena (predefinito: `true` quando la posizione è `bottom`) |
| `main_buttons_alignment` | string | Opzionale | `end` (predefinito), `center`, `start`, `space-between` | Allineamento dei pulsanti di azione inferiori quando non a larghezza piena |
| `card_layout` | string | Opzionale | `normal` (predefinito se non in vista sezione), `large` (predefinito se in vista sezione), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Opzionale | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |
| `sub_button`            | object  | Opzionale                            | Vedi [sotto-pulsanti](#sotto-pulsanti)                | Aggiunge pulsanti personalizzati fissati a destra. Utile per un menu di selezione della modalità clima.                                  |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Colore di sfondo principale per gli elementi supportati nella scheda clima |
| `--bubble-climate-border-radius` | `px` | Raggio del bordo per gli elementi supportati della scheda clima |
| `--bubble-climate-button-background-color` | `color` | Colore di sfondo per i pulsanti della scheda clima |
| `--bubble-climate-icon-border-radius` | `px` | Raggio del bordo per il contenitore dell'icona della scheda clima |
| `--bubble-state-climate-fan-only-color` | `color` | Colore di sovrapposizione per lo stato solo ventola |
| `--bubble-state-climate-dry-color` | `color` | Colore di sovrapposizione per lo stato deumidificazione |
| `--bubble-state-climate-cool-color` | `color` | Colore di sovrapposizione per lo stato raffreddamento |
| `--bubble-state-climate-heat-color` | `color` | Colore di sovrapposizione per lo stato riscaldamento |
| `--bubble-state-climate-auto-color` | `color` | Colore di sovrapposizione per lo stato automatico |
| `--bubble-state-climate-heat-cool-color` | `color` | Colore di sovrapposizione per lo stato riscaldamento/raffreddamento |
| `--bubble-climate-accent-color` | `color` | Colore di accento per la scheda clima |
| `--bubble-climate-box-shadow` | Vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra per il contenitore del clima. |

</details>


#### Esempi

<details>

<summary>Una scheda clima con un menu a tendina delle modalità HVAC</summary>

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

## Calendario

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Questa scheda ti permette di visualizzare le tue entità calendario. Il suo contenuto è scorrevole, così puoi facilmente sfogliare gli eventi futuri.

### Opzioni del calendario

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome                | Tipo    | Requisito  | Opzioni supportate                               | Descrizione                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Opzionale     | Qualsiasi numero (minimo: 1)                        | Numero di giorni di calendario per cui recuperare gli eventi, da ora fino alla fine dell'N-esimo giorno (predefinito: 7) |
| `entities`          | object  | **Obbligatorio** | Un oggetto entità calendario (vedi sotto)            | L'entità da controllare (es. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obbligatorio** | Un'entità calendario                               | L'entità calendario da visualizzare                                                          |
| `entities.color`    | string  | Opzionale     | Un colore                                         | Un colore personalizzato per il chip del calendario. Se non definito, verrà scelto automaticamente un colore |
| `days`              | number  | Opzionale     | Qualsiasi numero (minimo: 1)                         | Numero di giorni di calendario per cui recuperare gli eventi, da ora fino alla fine dell'N-esimo giorno (predefinito: 7) |
| `limit`             | number  | Opzionale     | Un numero                                        | Il numero di eventi che verranno mostrati nella scheda                                  |
| `show_end`          | boolean | Opzionale     | `true` o `false` (predefinito)                     | Mostra o nascondi l'ora di fine degli eventi                                                    |
| `show_progress`     | boolean | Opzionale     | `true` (predefinito) o `false`                     | Mostra o nascondi la barra di avanzamento dell'evento                                                     |
| `show_started_events`| boolean | Opzionale     | `true` (predefinito) o `false`                     | Mostra o nascondi gli eventi attualmente in corso. Gli eventi su più giorni sono valutati un giorno alla volta, quindi viene nascosto solo il giorno in corso e i giorni successivi restano visibili |
| `scrolling_effect`  | boolean | Opzionale | `true` (predefinito) o `false` | Permette al testo di scorrere quando il contenuto supera le dimensioni del suo contenitore |
| `event_action` | object | Opzionale | `tap_action`, `double_tap_action` o `hold_action`, vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Permette di aggiungere azioni al clic sull'evento. |
| `tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al tocco del giorno, se non definito verrà usato `none`. |
| `double_tap_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione al doppio tocco del giorno, se non definito verrà usato `none`. |
| `hold_action` | object | Opzionale | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisce il tipo di azione alla pressione prolungata del giorno, se non definito verrà usato `none`. |
| `card_layout` | string | Opzionale | `normal` (predefinito se non in vista sezione), `large` (predefinito se in vista sezione), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Opzionale | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |
| `sub_button` | object | Opzionale | Vedi [sotto-pulsanti](#sotto-pulsanti) | Aggiungi pulsanti personalizzati fissati a destra |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile                                  | Valore atteso | Descrizione                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Colore di sfondo principale per gli elementi supportati nella scheda calendario  |
| `--bubble-calendar-border-radius`         | `px`           | Raggio del bordo per gli elementi supportati della scheda calendario |
| `--bubble-calendar-height`                | `px`           | Altezza della scheda calendario                                        |

</details>

#### Esempi

<details>

<summary>Una scheda calendario con un numero limitato di eventi</summary>

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

<summary>Una scheda calendario con un'ora di fine e una barra di avanzamento</summary>

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


## Separatore

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Questa scheda è un semplice separatore per dividere il tuo pop-up in categorie / sezioni. Es. Luci, Dispositivi, Tapparelle, Impostazioni, Automazioni...

### Opzioni del separatore

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `name` | string | Facoltativo ma consigliato | Qualsiasi stringa | Un nome per il tuo separatore |
| `icon` | string | Facoltativo ma consigliato | Qualsiasi icona `mdi:` | Un'icona per il tuo separatore |
| `card_layout` | string | Facoltativo | `normal` (predefinito se non in vista sezioni), `large` (predefinito se in vista sezioni), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Facoltativo | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |
| `sub_button` | object | Facoltativo | Vedi [sotto-pulsanti](#sotto-pulsanti) | Aggiungi pulsanti personalizzati fissati a destra |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Colore di sfondo della linea nel separatore |

</details>

#### Esempio

<details>

<summary>Un separatore/divisore per una sezione "Tapparelle"</summary>

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

## Colonna vuota

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Questa scheda serve a riempire una colonna vuota. È utile se hai un `horizontal-stack` nel tuo pop-up con una sola scheda. Guarda l'angolo in basso a destra di questo screenshot per (non) vederla.

### Opzioni della colonna vuota

Questa scheda non ha opzioni e non supporta lo [stile](#stile), anche se supporta le opzioni di layout per le sezioni HA.

#### Esempio

<details>

<summary>Una colonna vuota in uno stack orizzontale</summary>

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

## Solo sotto-pulsanti

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Questa scheda è dedicata esclusivamente ai sotto-pulsanti. È perfetta per menu, azioni rapide, chip informativi, o un piè di pagina fisso in fondo alla pagina.

> [!IMPORTANT]  
> Questa scheda usa il nuovo schema dei sotto-pulsanti. Usa `sub_button.bottom` per definire i tuoi pulsanti. La sezione `sub_button.main` viene ignorata.

### Opzioni di solo sotto-pulsanti

<details>

<summary><b>Opzioni (YAML + descrizioni)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obbligatorio** | Vedi [sotto-pulsanti](#sotto-pulsanti) | Definisci i tuoi sotto-pulsanti usando la sezione `bottom` |
| `hide_main_background` | boolean | Facoltativo | `true` o `false` (predefinito) | Rimuovi lo sfondo della scheda |
| `footer_mode` | boolean | Facoltativo | `true` o `false` (predefinito) | Fissa la scheda in fondo alla pagina |
| `footer_full_width` | boolean | Facoltativo | `true` o `false` (predefinito) | Rendi il piè di pagina a larghezza piena (100%) |
| `footer_width` | number | Facoltativo | Qualsiasi numero | Larghezza del piè di pagina in pixel quando `footer_full_width` è `false` |
| `footer_bottom_offset` | number | Facoltativo | Qualsiasi numero | Distanza dal fondo della pagina in pixel (predefinito: `16`) |
| `card_layout` | string | Facoltativo | `normal` (predefinito se non in vista sezioni), `large` (predefinito se in vista sezioni), `large-2-rows`, `large-sub-buttons-grid` | Layout di stile della scheda, vedi [layout delle schede](#layout-delle-schede) |
| `rows` | number | Facoltativo | Qualsiasi numero | Numero di righe (altezza) (es. `2`) |

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Larghezza del piè di pagina quando `footer_full_width` è `false` |
| `--bubble-footer-bottom` | `px` | Distanza del piè di pagina dal basso |
| `--bubble-footer-box-shadow` | vedi [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombra della casella per il contenitore del piè di pagina |

</details>

#### Esempi

<details>

<summary>Chip (come nello screenshot)</summary>

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

<summary>Un menu piè di pagina fisso</summary>

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

## Sotto-pulsanti

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

In ogni scheda che supporta questa opzione, puoi aggiungere sotto-pulsanti per personalizzare ulteriormente le tue schede. Puoi, ad esempio, creare un pulsante che controlla un robot aspirapolvere, una scheda meteo, o quasi qualsiasi cosa ti venga in mente. Questi sotto-pulsanti supportano le azioni al tocco e la maggior parte delle opzioni dei pulsanti.

I sotto-pulsanti ora supportano tre tipi: **Predefinito (pulsante)**, **Cursore** e **Menu a tendina / Selezione**. Puoi mescolare i tipi nella stessa scheda, posizionare i sotto-pulsanti in alto o in basso, e organizzarli in gruppi per layout più avanzati.

#### Posizionamento e gruppi dei sotto-pulsanti

<details>

<summary><b>Struttura dei sotto-pulsanti (main / bottom + gruppi)</b></summary>

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
- `main` e `bottom` sono due sezioni indipendenti. I sotto-pulsanti bottom sono fissati in fondo alla scheda.
- `main_layout` e `bottom_layout` accettano `inline` (predefinito) o `rows` per impilare i gruppi verticalmente.
- I gruppi sono oggetti con un array `group` e un `buttons_layout` opzionale (`inline` o `column`).
- `justify_content` è disponibile solo per **i gruppi bottom** (`start`, `center`, `end`, `fill`).
- Quando sono presenti sotto-pulsanti bottom, il layout della scheda passa automaticamente a `large`, a meno che tu non imposti esplicitamente un altro layout.
- Gli array `sub_button` legacy sono ancora supportati e vengono trattati come la sezione `main`.

</details>

### Opzioni dei sotto-pulsanti

<details>

<summary><b>Opzioni (YAML + descrizione)</b></summary>

| Nome | Tipo | Requisito | Opzioni supportate | Descrizione |
| --- | --- | --- | --- | --- |
| `entity` | string | Facoltativo | Qualsiasi entità | Un'entità da controllare |
| `name` | string | Facoltativo | Qualsiasi stringa | Un nome per il tuo sotto-pulsante, se non definito verrà mostrato il nome dell'entità |
| `icon` | string | Facoltativo | Qualsiasi icona `mdi:` | Un'icona per il tuo sotto-pulsante, se non definita verrà mostrata l'icona o l'immagine dell'entità |
| `force_icon` | boolean | Facoltativo | `true` o `false` (predefinito) | Forza l'icona anche se è disponibile un'immagine dell'entità |
| `sub_button_type` | string | Facoltativo | `default`, `slider` o `select` | Scegli il tipo di sotto-pulsante |
| `show_background` | boolean | Facoltativo | `true` (predefinito) o `false` | Mostra uno sfondo per il tuo sotto-pulsante, cambierà colore in base allo stato della tua entità |
| `state_background` | boolean | Facoltativo | `true` (predefinito) o `false` | Usa il colore dello stato quando l'entità è `on` |
| `light_background` | boolean | Facoltativo | `true` (predefinito) o `false` | Usa il colore della luce per lo sfondo quando disponibile |
| `show_state` | boolean | Facoltativo | `true` o `false` (predefinito) | Mostra o nascondi lo stato della tua `entity` |
| `show_name` | boolean | Facoltativo | `true` o `false` (predefinito) | Mostra o nascondi il nome |
| `show_icon` | boolean | Facoltativo | `true` (predefinito) o `false` | Mostra o nascondi l'icona |
| `show_last_changed` | boolean | Facoltativo | `true` o `false` (predefinito) | Mostra l'orario dell'ultimo cambiamento della tua `entity` |
| `show_last_updated` | boolean | Facoltativo | `true` o `false` (predefinito) | Mostra l'orario dell'ultimo aggiornamento della tua `entity` |
| `show_attribute` | boolean | Facoltativo | `true` o `false` (predefinito) | Mostra un attributo della tua `entity` sotto il suo `name` |
| `attribute` | string | Facoltativo (obbligatorio se `show_attribute` è impostato su `true`) | Un attributo della tua `entity` | L'attributo da mostrare (es. `brightness`) |
| `select_attribute` | string | Facoltativo | Una lista di attributi della tua `entity` (vedi le opzioni supportate sopra) | Questa lista di attributi aprirà un menu a tendina se cliccata (es. `effect_list`) |
| `show_arrow` | boolean | Facoltativo | `true` (predefinito) o `false` | Mostra o nascondi la freccia del menu a tendina per i sotto-pulsanti select |
| `scrolling_effect` | boolean | Facoltativo | `true` (predefinito) o `false` | Consenti al testo di scorrere quando il contenuto supera la dimensione del contenitore |
| `tap_action` | object | Facoltativo | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisci il tipo di azione al clic del sotto-pulsante, se non definita verrà usata `more-info`. |
| `double_tap_action` | object | Facoltativo | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisci il tipo di azione al doppio clic del sotto-pulsante, se non definita verrà usata `none`. |
| `hold_action` | object | Facoltativo | Vedi [azioni](#azioni-tocco-doppio-tocco-e-pressione-prolungata) | Definisci il tipo di azione alla pressione prolungata del sotto-pulsante, se non definita verrà usata `more-info`. |
| `fill_width` | boolean | Facoltativo | `true` o `false` | Riempi la larghezza disponibile (predefinito: `false` per main, `true` per bottom) |
| `width` | number or string | Facoltativo | Qualsiasi numero o lunghezza CSS | Larghezza personalizzata (`px` per la sezione main, `%` per la sezione bottom per impostazione predefinita) |
| `custom_height` | number | Facoltativo | Qualsiasi numero | Altezza personalizzata in pixel |
| `content_layout` | string | Facoltativo | `icon-left` (predefinito), `icon-top`, `icon-bottom`, `icon-right` | Posizionamento dell'icona all'interno del sotto-pulsante |
| `always_visible` | boolean | Facoltativo | `true` o `false` (predefinito) | **Solo cursore.** Mostra sempre il cursore invece di aprirlo al tocco |
| `show_button_info` | boolean | Facoltativo | `true` o `false` (predefinito) | **Solo cursore.** Mostra icona/nome/stato quando `always_visible` è attivo |
| `visibility` | object or list | Facoltativo | Vedi [condizioni](#condizioni) | Mostra o nascondi il sotto-pulsante in base a delle condizioni |
| `hide_when_parent_unavailable` | boolean | Facoltativo | `true` o `false` (predefinito) | Nascondi il sotto-pulsante se l'entità della scheda padre non è disponibile |
| `css_class` | string | Facoltativo | Qualsiasi stringa | Una classe CSS aggiuntiva sul sotto-pulsante, per selezionarlo nel tuo [stile](#stile) qualunque sia il suo nome (ad esempio `My value` dà `.my-value`) |

</details>

<details>

<summary><b>Opzioni del sotto-pulsante cursore (uguali ai cursori dei pulsanti)</b></summary>

<br>

I sotto-pulsanti cursore supportano le stesse opzioni dei cursori dei pulsanti, tra cui:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variabili CSS (vedi <a href="#stile">Stile</a>)</b></summary>

| Variabile | Valore atteso | Descrizione |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Raggio del bordo per i sotto-pulsanti |
| `--bubble-sub-button-background-color` | `color` | Colore di sfondo per i sotto-pulsanti |
| `--bubble-sub-button-outline` | `box-shadow` | Contorno aggiunto a un sotto-pulsante o a un cursore solo quando assume lo stesso colore della scheda che ha dietro, cosa che lo renderebbe invisibile (impostalo su `none` per toglierlo) |
| `--bubble-sub-slider-border-radius` | `px` | Raggio del bordo per i sotto-pulsanti cursore |
| `--bubble-sub-slider-background-color` | `color` | Colore di sfondo per i sotto-pulsanti cursore |
| `--bubble-sub-slider-height` | `px` | Altezza per i sotto-pulsanti cursore sempre visibili |
| `--bubble-sub-slider-outline` | `box-shadow` | Contorno dei soli sotto-pulsanti cursore, ricade su `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Colore del testo sugli sfondi chiari dei sotto-pulsanti |

</details>

#### Esempi

<details>

<summary>Un pulsante con alcuni sotto-pulsanti per creare una scheda robot aspirapolvere (come nello screenshot)</summary>

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

<summary>Un pulsante cursore con un sotto-pulsante che mostra la luminosità e uno che attiva/disattiva la luce (come nello screenshot)</summary>

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

<summary>Un pulsante che mostra la temperatura interna ed esterna con il meteo di oggi e domani (screenshot incluso)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Sfortuna per me, è nuvoloso tutto il tempo, ma tutte le icone cambiano in base al meteo.

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

## Layout delle schede

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card supporta pienamente la vista a sezioni di Home Assistant: puoi cambiare il layout della scheda per renderla più grande e anche modificare il numero di colonne o righe che la scheda deve occupare nella tua vista a sezioni (solo sulle schede che supportano questa opzione). Questi layout sono supportati anche in tutti gli altri tipi di vista.

<details>

<summary><b>Layout delle schede disponibili</b></summary>

| Layout | Descrizione |
| --- | --- |
| `normal` | Il layout normale (non ottimizzato per la vista a sezioni) |
| `large` | Un layout più grande che si adatta alle righe selezionate nella vista a sezioni (ottimizzato per la vista a sezioni) |
| `large-2-rows` | Un layout più grande con 2 righe di sotto-pulsanti che si adatta alle righe selezionate nella vista a sezioni (ottimizzato per la vista a sezioni) |
| `large-sub-buttons-grid` | Questo layout mostra i sotto-pulsanti in una griglia, `rows` deve essere impostato ad almeno `2`.

</details>

#### Esempi

<details>

<summary>Un pulsante grande che mostra le statistiche energetiche con 2 righe di sotto-pulsanti (screenshot incluso)</summary>

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

<summary>Un pulsante grande con più righe e 12 sotto-pulsanti</summary>

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

## Condizioni

Alcune opzioni sono guidate da condizioni, scritte esattamente come quelle della [scheda condizionale](https://www.home-assistant.io/dashboards/conditional/) di Home Assistant:

- `visibility` su un [sotto-pulsante](#sotto-pulsanti), per mostrarlo o nasconderlo
- `trigger` su un [pop-up](#pop-up), per aprirlo quando le condizioni sono soddisfatte
- `checkConditionsMet(conditions, hass)` dentro i tuoi [template](#template), quando ti serve la risposta nel tuo codice

Viene valutato ogni tipo di condizione di Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, e i gruppi `and`, `or` e `not`. Funzionano anche le condizioni del costruttore di condizioni di Home Assistant, quelle che prendono il nome dal loro dominio come `sun.is_up`, `light.is_on`, `zone.in_zone` o `temperature.is_value`, con le loro impostazioni `target`, `options`, `behavior` e `for`.

<details>

<summary><b>Esempio</b></summary>

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
> Le condizioni vengono valutate nel tuo browser, quindi quelle poche che hanno bisogno del server Home Assistant non possono essere esatte: alba e tramonto sono letti dall'entità `sun.sun` invece di essere ricalcolati, e una durata `for` è misurata dall'ultimo cambio di stato, senza lo storico del recorder.
>
> `view_columns` è accettato ma passa sempre, dato che non è mai Bubble Card a disporre le colonne della tua vista. Un tipo di condizione che Bubble Card non conosce si segnala una volta nella console del tuo browser invece di fallire in silenzio, così puoi distinguere un errore di battitura da una funzionalità mancante.

<br>

---

<br>

## Azioni tocco, doppio tocco e pressione prolungata

Puoi anche usare le azioni predefinite di Home Assistant per il tocco, il doppio tocco e la pressione prolungata sulle schede che supportano questa opzione. Ad esempio, questo ti permette di mostrare la finestra “maggiori informazioni” tenendo premuta l'icona di un pulsante, oppure di eseguire un servizio quando viene premuto un sotto-pulsante.

**Nota: quando viene configurata una `double_tap_action`, la normale `tap_action` avrà un ritardo di 200ms per permettere il rilevamento
di un doppio tocco. Se questo ritardo non è desiderato, imposta `double_tap_action` su `none` per disabilitare la gestione del doppio tocco.**

### Opzioni dell'azione

<details>

<summary><b>Opzioni (YAML + descrizione)</b></summary>

| Nome | Tipo | Opzioni supportate | Descrizione |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Azione da eseguire |
| `target` | object |  | Funziona solo con `call-service`. Segue la [sintassi di home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Qualsiasi percorso della tua dashboard | Percorso verso cui navigare (es. `'#kitchen'` per aprire un pop-up) quando l'azione è definita come navigate |
| `url_path` | string | Qualsiasi link | URL da aprire al clic (es. `https://www.google.com`) quando `action` è `url` |
| `service` | string | Qualsiasi servizio | Servizio da chiamare (es. `media_player.media_play_pause`) quando `action` è definita come `call-service` |
| `data` o `service_data` | object | Qualsiasi dato del servizio | Dati del servizio da includere (es. `entity_id: media_player.kitchen`) quando `action` è definita come `call-service` |
| `confirmation` | object | Vedi [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Mostra un pop-up di conferma (non quello di Bubble Card), sovrascrive l'oggetto `confirmation` predefinito |

</details>

#### Esempio

<details>

<summary>Un pulsante per aprire un pop-up</summary>

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

## Stile

Puoi aggiungere stili personalizzati per modificare il CSS di tutte le schede **senza usare card-mod** in quattro modi:

- Nell'editor, vai alla scheda che vuoi modificare, poi naviga verso _Opzioni di stile > Stili personalizzati e template JS_, e aggiungi i tuoi stili personalizzati (guarda i suggerimenti e gli esempi qui sotto).
- Nell'editor (o in [YAML](#moduli)), vai alla scheda che vuoi modificare, poi naviga verso _Moduli_, quindi crea un nuovo modulo (sarà disponibile per tutte le schede), oppure vai al **Module Store** per installare un modulo disponibile (maggiori dettagli sui moduli si trovano [qui sotto](#moduli)).
- In un file di [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) aggiungendo variabili CSS in YAML (sono disponibili nella documentazione di ogni scheda qui sopra). Questo permette modifiche globali.

  <details>
  
  <summary>Esempio</a></summary>
  
  <br>

  Non copiare la riga `Bubble:`, è il nome del tema che usi. Devi anche rimuovere i `--` dalle variabili.

  Devi eseguire l'azione [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) per aggiornare il tema dopo qualsiasi modifica.

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
  
- In YAML aggiungendo `styles: |` seguito dai tuoi stili personalizzati (guarda i suggerimenti e gli esempi qui sotto).

> [!TIP]  
> **Per capire quali classi di stile possono essere modificate**, puoi dare un'occhiata alla cartella [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) in questo repository. In ogni cartella di scheda troverai un file chiamato `styles.css`. Questi file contengono tutti gli stili applicati. Questo offre molte più possibilità rispetto alle variabili CSS, ma va aggiunto individualmente a ogni scheda.
> 
> Puoi anche trovare molti [esempi della community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), oppure alcuni dal [forum di Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) facendo un po' di ricerca.
>
> Il tema Bubble per Home Assistant (come negli screenshot) si trova [qui](https://github.com/Clooos/Bubble).
>
> Un video tutorial arriverà presto sul mio [canale YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Nota che potresti dover aggiungere `!important;` ad alcuni stili CSS già definiti (vedi esempi qui sotto).

> [!TIP]  
> I sotto-pulsanti possono essere selezionati tramite classi basate sul nome. Ad esempio, un sotto-pulsante chiamato "My sub-button" può essere stilizzato con `.my-sub-button`. I sotto-pulsanti slider espongono anche `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, ecc.
>
> Una classe basata sul nome cambia quando rinomini un sotto-pulsante, ed è tradotta quando lo è il nome. Imposta `css_class` sul sotto-pulsante per ottenere una classe tutta tua che non si sposta mai, qualunque sia il suo nome e qualunque sia la lingua.

#### Esempi

<details>

<summary>Cambiare la dimensione del font di qualsiasi Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Cambiare il colore di sfondo di un singolo pulsante in una pila di pulsanti orizzontale</summary>

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

<summary>Cambiare il colore di sfondo di una scheda</summary>

<br>

Questo funziona su tutti i tipi di Bubble Card (tranne i pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Questo fa la stessa cosa solo nel pulsante di una scheda (funziona anche per l'intestazione del pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Per cambiare il colore quando è `on` dai un'occhiata ai template di stile qui sotto.

</details>

<details>

<summary>Cambiare il colore di uno slider su un pulsante</summary>

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

<summary>Cambiare il colore della linea di un separatore</summary>

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

<summary>Cambiare il colore di un'icona</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Per l'icona di una pila di pulsanti orizzontale.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Cambiare il colore di sfondo di un contenitore di icona</summary>

<br>

Questo funziona su tutti i tipi di Bubble Card (tranne i pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Questo fa la stessa cosa per l'intestazione del pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Cambiare la dimensione dei sotto-pulsanti (perfetto per il layout large)</summary>

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

<summary>Cambiare il colore di sfondo del secondo sotto-pulsante</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Cambiare la dimensione di un'icona</summary>

<br>

Per l'icona principale.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Per le icone dei sotto-pulsanti.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Usare un'immagine invece di un'icona in un sotto-pulsante</summary>

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

Basta caricare questa immagine in una cartella “pictures” (o il nome che preferisci) nella cartella “www” di Home Assistant.

</details>

<details>

<summary>Esempio avanzato: creare una riga orizzontale di sotto-pulsanti (screenshot incluso)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Adoro davvero questo esempio, lo uso come intestazione della mia dashboard.

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

## Template

**Bubble Card non supporta i template Jinja**, ma gli utenti avanzati possono aggiungere template JS direttamente nei loro [stili personalizzati](#stile). Ad esempio, questo permette di cambiare dinamicamente un'icona, i testi o i colori di un elemento, di mostrare o nascondere un elemento in modo condizionale (come un sotto-pulsante), o praticamente qualsiasi cosa in base a uno stato, un attributo e altro ancora.

> [!TIP]  
> Maggiori informazioni sui template JS [qui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Il mio consiglio è di **dare sempre un'occhiata alla console del tuo browser** per essere sicuro che tutto funzioni correttamente.

> [!IMPORTANT]  
> **Tutti i template che non modificano una proprietà CSS devono essere posizionati alla fine! Come la modifica di un'icona, di un testo o di qualsiasi elemento.**

#### Variabili e funzioni disponibili

<details>

<summary>Variabili</summary>

<br>

Hai accesso a queste variabili nella maggior parte delle schede:

- `state` restituisce lo stato della tua `entity` definita.
  
- `entity` restituisce l'entità che hai definito, come `switch.test` in questo esempio.
  
- `icon` può essere usata così per cambiare l'icona `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` restituisce lo stato della `entity` definita per il tuo primo sotto-pulsante, `[0]` è lo stato del primo sotto-pulsante, `[1]` il secondo...
  
- `subButtonIcon[0]` può essere usata così per cambiare l'icona del primo sotto-pulsante `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` è l'icona del primo sotto-pulsante, `[1]` la seconda...
  
- `card` restituisce l'elemento della scheda nel DOM.
  
- `hass` è una variabile avanzata che ti dà ancora più controllo, ad esempio puoi restituire lo stato di `light.kitchen` così `hass.states['light.kitchen'].state` oppure un attributo così `hass.states[entity].attributes.brightness`.

- `this` restituisce molte informazioni utili sulla tua configurazione e sulla tua plancia, usala solo se sai cosa stai facendo.

</details>

<details>

<summary>Funzioni</summary>

<br>

Hai accesso a tutte le funzioni JS globali, ma hai anche accesso a:

- `getWeatherIcon` può essere usata per restituire un'icona meteo in base a uno stato che restituisce il meteo. Ad esempio, puoi fare così `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` per cambiare l'icona del terzo sotto-pulsante con l'icona del meteo di oggi, `.forecast[1]?.condition` è per domani...

  Dovrai creare un sensore template per questo. Ecco cosa puoi aggiungere nel tuo `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` restituisce `true` quando un elenco di [condizioni](#condizioni) è soddisfatto, ad esempio `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` può essere usata per tradurre uno stato (può anche essere usata per ottenere l'unità di uno stato, senza doverla aggiungere manualmente).
- `hass.formatEntityAttributeValue(state, "attribute")` può essere usata per tradurre un attributo (può anche essere usata per ottenere l'unità di uno stato, senza doverla aggiungere manualmente).

</details>

#### Esempi

Puoi trovare molti esempi qui sotto, ma puoi anche trovare template molto avanzati sulla mia [pagina Patreon](https://www.patreon.com/c/Clooos), come uno (il mio preferito) che permette fino a quattro badge condizionali posizionati intorno alle icone della scheda. È anche un ottimo modo per scoprire tutte le possibilità degli stili personalizzati e dei template di Bubble Card!

<details>
<summary>Esempi dalla mia pagina Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Aggiungere badge in stile Home Assistant a qualsiasi scheda</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Mostrare data e ora formattate in un separatore senza usare alcuna entità</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Mostrare lo stato di un sotto-pulsante su due righe</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalizzare etichette e icone all'interno di un sotto-pulsante selettore</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Aggiungere un pop-up promemoria persistente che appare solo quando serve</a>
</p>

<br>

</details>

<details>

<summary>Cambiare il colore di sfondo di un pulsante che è rosso quando è <code>off</code> e blu quando è <code>on</code></summary>

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

<summary>Cambiare il colore di sfondo di un pulsante in base a un'entità per la pila di pulsanti orizzontale</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Mostrare/Nascondere un sotto-pulsante in modo condizionale</summary>

<br>

Questo mostra il primo sotto-pulsante solo quando il mio aspirapolvere è bloccato.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Questo mostra un sotto-pulsante quando la batteria è sotto il 10%. Utile con un sotto-pulsante che mostra "Batteria scarica".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Cambiare un'icona o un'icona di sotto-pulsante in modo condizionale</summary>

<br>

Questo cambia l'icona di un pulsante solo quando un aspirapolvere è bloccato.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Questo cambia l'icona del primo sotto-pulsante solo quando un aspirapolvere è bloccato.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Cambiare il colore di un'icona o di un'icona di sotto-pulsante in modo condizionale</summary>

<br>

Questo cambia il colore dell'icona di un pulsante in base al suo stato.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Questo cambia il colore dell'icona di un sotto-pulsante in base al suo stato. `.bubble-sub-button-1` è il primo sotto-pulsante, sostituisci `1` se vuoi cambiare l'icona di un altro sotto-pulsante.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animare un'icona di ventilatore in modo condizionale</summary>

<br>

Questo ruota l'icona di un pulsante quando un ventilatore è `on`.
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

<summary>Creare template per i testi (come il nome o lo stato)</summary>

<br>

Questo cambia il nome/stato di un pulsante con "Al momento è soleggiato" in base al tuo meteo.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
oppure applicato ai sotto-pulsanti:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Se vuoi creare un template per lo stato (`.bubble-state`) non attivare `show_state: true`, attiva solo `show_attribute: true` senza alcun attributo.

</details>

<details>

<summary>Esempio avanzato: Cambiare il colore di un sotto-pulsante quando un pop-up è aperto</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Esempio avanzato: Creare un template per il nome di un separatore in base a uno stato tradotto nella tua lingua</summary>

<br>

Puoi usare `hass.formatEntityState(state)` per tradurre uno stato e `hass.formatEntityAttributeValue(state, "attribute")` per tradurre un attributo.

Questo cambia il nome e l'icona in base al meteo, "Nuageux" significa "Cloudy" (nuvoloso) in francese.

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

I moduli sono una funzionalità potente che ti permette di salvare, riutilizzare e condividere i tuoi stili personalizzati e template su tutte le tue Bubble Card. Invece di copiare e incollare lo stesso codice in più schede, puoi creare un Modulo e applicarlo dove ne hai bisogno. Questo rende molto più facile ed efficiente gestire l'aspetto della tua plancia.

Ma questa funzionalità è molto più potente di così: ti permette di aggiungere vere e proprie funzionalità direttamente nell'editor di Bubble Card, usando tutte le opzioni predefinite del [form di Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Il selettore di oggetti è stato migliorato per mostrare i cambiamenti in tempo reale e per gestire correttamente gli attributi.

Un modulo può anche rispondere al selettore di schede di Home Assistant accanto ai [suggerimenti per entità](#suggerimenti-per-entità) integrati: usa `suggestions` per le schede che può descrivere in anticipo, e `suggestions_code` quando devono essere calcolate a partire dalla tua installazione, ad esempio un pop-up costruito con tutte le entità dell'area a cui appartiene l'entità scelta. Entrambe le chiavi sono documentate [qui](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Puoi anche navigare nel **Module Store** per trovare e installare [moduli creati dalla community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), oppure condividere le tue creazioni!

> [!TIP]
> Il codice di un Modulo funziona esattamente come il codice nella sezione `styles` di una scheda. Tutte le stesse variabili e funzioni della sezione [Template](#template) sono disponibili.

<br>

### Configurazione iniziale

> [!IMPORTANT]
> A partire dalla v3.1.0, Bubble Card Tools è il backend di archiviazione consigliato per i moduli. Il vecchio metodo con sensore template continua a funzionare per le configurazioni esistenti, ma i nuovi moduli e le funzionalità del Module Store sono supportati al meglio tramite Bubble Card Tools.

L'integrazione Bubble Card Tools abilita l'Editor dei moduli e il Module Store, e archivia i moduli come singoli file YAML. I moduli esistenti vengono migrati automaticamente.

I passaggi di installazione e configurazione sono spiegati qui:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### L'Editor dei moduli

Puoi accedere all'Editor dei moduli dalle impostazioni di qualsiasi scheda, nella sezione **Moduli**. L'editor offre due schede principali:

#### Scheda I miei moduli

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Questa scheda mostra tutti i tuoi moduli installati e ti permette di:

- **Applicare** i moduli esistenti alla scheda corrente
- **Creare** un nuovo modulo da zero
- **Modificare** i moduli esistenti con anteprima in tempo reale
- **Eliminare** i moduli che non ti servono più
- **Cercare** e **ordinare** i moduli (alfabetico, recenti, attivi per primi)
- **Impostare lo stato globale** per applicare un modulo automaticamente a tutte le schede
- **Importare/Esportare** moduli per backup o condivisione
- **Scrivere suggerimenti per entità** nell'editor dei moduli, sotto **Facoltativo: Suggerimenti per entità**, così il tuo modulo viene proposto nel selettore di schede di Home Assistant. Sia le regole sia i suggerimenti calcolati vengono controllati mentre scrivi, un errore lì impedisce il salvataggio, e l'anteprima mostra le schede suggerite per qualsiasi entità tu scelga

#### Scheda Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Questa scheda mostra [tutti i moduli disponibili dalla community](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), e ti permette di:

- **Sfogliare** tutti i moduli creati dalla community
- **Cercare** e filtrare i moduli per nome, compatibilità o parole chiave
- **Installare** i moduli con un clic
- **Aggiornare** i moduli installati quando sono disponibili nuove versioni

> [!TIP]
> Nell'editor, puoi attivare i moduli non supportati per testare moduli non ancora contrassegnati come compatibili con un dato tipo di scheda.

<br>

### Come usare i moduli

#### Creare un nuovo modulo

<details>

<summary>Clicca per espandere</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Vai nell'editor di qualsiasi scheda ed espandi la sezione **Moduli**.
2. Clicca su **Crea nuovo modulo**.
3. Compila le informazioni del modulo.
4. Scrivi il tuo codice template CSS e/o JavaScript nell'editor **Codice**.
5. (Opzionale) Crea un'interfaccia di configurazione personalizzata nella sezione **Editor** (come il selettore di colore nello screenshot qui sopra, documentazione completa disponibile [qui](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Facoltativo) Scrivi i tuoi **Suggerimenti per entità** così il tuo modulo viene proposto nel selettore di schede di Home Assistant. Il pannello controlla quello che scrivi mentre digiti, e la sua anteprima mostra le schede suggerite stesse per l'entità che preferisci.
7. Clicca su **Salva**.

Il tuo modulo è ora disponibile per essere usato su qualsiasi tua scheda!

<br>

</details>

#### Applicare un modulo a una scheda

<details>

<summary>Clicca per espandere</summary>

<br>

- **Tramite l'editor:**

  - Vai nell'editor della scheda a cui vuoi applicare il modulo.
  - Espandi la sezione **Moduli**.
  - Clicca sul modulo che vuoi applicare dall'elenco.
  - Sotto "Applica a", clicca su "Questa scheda". Il modulo è ora attivo. Puoi applicare più moduli alla stessa scheda.

- **Tramite YAML:**

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

#### Applicare un modulo globalmente

<details>

<summary>Clicca per espandere</summary>

<br>

Puoi impostare un modulo per applicarlo automaticamente a tutte le Bubble Card:

**Questo non è disponibile per i moduli con un editor, perché richiedono una configurazione specifica per funzionare.**

- **Tramite l'editor:**

  - Nell'Editor dei moduli, trova il tuo modulo nella scheda **I miei moduli**.
  - Attiva il pulsante **Tutte le schede** accanto al nome del modulo.
  - Il modulo verrà ora applicato automaticamente a tutte le schede.
 
- **Tramite YAML:**

  Nella configurazione YAML del tuo modulo (in `bubble-modules.yaml`), aggiungi semplicemente `is_global: true`.

<br>

</details>

#### Escludere una singola scheda da un modulo globale

<details>

<summary>Clicca per espandere</summary>

<br>

Se hai un modulo globale ma vuoi escluderlo da una scheda specifica:

- **Tramite l'editor:**
  
  - Nella sezione **Moduli** della scheda, vedrai i moduli globali elencati.
  - Clicca su un modulo globale, disattiva "Questa scheda" per escluderlo da questa scheda specifica.

- **Tramite YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Condividere il tuo modulo sul Module Store

<details>

<summary>Clicca per espandere</summary>

<br>

Per condividere il tuo Modulo sul Module Store, nell'Editor dei moduli, in fondo in "Esporta modulo", clicca su "Copia per GitHub" e incolla il contenuto in una nuova discussione nella categoria [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Modifica la descrizione** (se necessario), **l'esempio** (per gli utenti YAML), e ricordati di **includere almeno uno screenshot** per il Module Store.

**Il tuo Modulo diventa disponibile subito dopo** (dopo un aggiornamento dello Store), quindi ricontrolla che tutto sia scritto correttamente e che il Modulo funzioni come previsto. Puoi ovviamente modificare/aggiornare il Modulo dopo averlo condiviso.

<br>

</details>

#### Gestione delle versioni

<details>

<summary>Clicca per espandere</summary>

<br>

Il Module Store controlla automaticamente gli aggiornamenti dei moduli installati. Quando sono disponibili aggiornamenti:

1. Vedrai un indicatore di aggiornamento nella scheda **Module Store**.
2. Clicca su **Aggiorna** nei moduli con aggiornamenti disponibili.
3. Conferma l'aggiornamento nel Module Store.

<br>

</details>

#### Definire i tipi di scheda supportati

<details>

<summary>Clicca per espandere</summary>

<br>

Alcuni moduli potrebbero non essere compatibili con tutti i tipi di scheda. Puoi specificare quali schede un modulo supporta.  
Se vuoi che un modulo sia compatibile con **tutte le schede**, ometti semplicemente il campo `supported` (oppure usa l'opzione **Tutte le schede** nell'editor).

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

### Esempi

<details>
<summary>Modulo di stile di base</summary>

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
<summary>Modulo con configurazione personalizzata</summary>

<br>

Questo modulo è disponibile [qui](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Altri esempi si trovano nel Module Store, oppure [qui](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localizzazione

Bubble Card parla la tua lingua. Il suo editor è tradotto nelle 64 lingue supportate da Home Assistant, e ovunque Home Assistant abbia già una parola per qualcosa viene riusata la sua, così leggi gli stessi termini in entrambe le interfacce.

In fondo all'editor, accanto al numero di versione, un interruttore **Automatico** segue la lingua del tuo Home Assistant. Disattivalo e tutto l'editor torna in inglese, il che è comodo per seguire un tutorial o per segnalare un problema. La tua scelta viene ricordata nel tuo browser.

Anche questa documentazione è tradotta, [in 62 lingue](languages.md). Quelle pagine sono aperte a tutti, quindi una formulazione che non corrisponde al tuo Home Assistant può essere corretta in un paio di clic. La versione inglese resta il riferimento per il contenuto stesso.

<br>

---

<br>

## Aiuto

Sentiti libero di aprire una issue se qualcosa non funziona come previsto. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Hai domande o pensieri su Bubble Card? Vuoi condividere le tue dashboard o le tue scoperte? Puoi andare sul forum di Home Assistant, sul subreddit di Bubble Card o nella sezione GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Contribuire

I contributi sono benvenuti! Che si tratti di correzioni di bug, nuove funzionalità, traduzioni o miglioramenti alla documentazione, sentiti libero di aprire una pull request.

Prima di iniziare, leggi la [guida per sviluppatori](DEVELOPERS.md) che spiega come configurare il tuo ambiente locale, compilare il progetto e testare le tue modifiche.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Fare una donazione

Dedico gran parte del mio tempo libero a rendere questo progetto il migliore possibile. Quindi se apprezzi il mio lavoro, qualsiasi donazione sarebbe un ottimo modo per dimostrare il tuo supporto 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Grazie a tutti per il vostro supporto, siete la mia più grande motivazione!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
