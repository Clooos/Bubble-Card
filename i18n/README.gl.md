<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Esta páxina é unha tradución automática. En caso de dúbida, prevalece a [documentación orixinal en inglés](../README.md). Hai algunha frase que soa mal? Toda a axuda é benvida, e [corrixir esta páxina](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.gl.md) só leva un minuto: GitHub encárgase do fork e da pull request. Grazas de antemán! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Ler isto noutro idioma](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card é unha colección de tarxetas minimalista e personalizable para Home Assistant, con pop-ups modernos e unha Module Store integrada con máis de 100 módulos feitos pola comunidade.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Índice

**[`Instalación`](#instalación)**  **[`Configuración`](#configuración)**  **[`Suxestións de entidades`](#suxestións-de-entidades)**  **[`Pop-up`](#pop-up)**  **[`Pila de botóns horizontal`](#pila-de-botóns-horizontal)**  **[`Botón`](#botón)**  **[`Reprodutor multimedia`](#reprodutor-multimedia)**  **[`Cuberta`](#cuberta)**  **[`Selección`](#selección)**  **[`Climatización`](#climatización)**  **[`Calendario`](#calendario)**  **[`Separador`](#separador)**  **[`Columna baleira`](#columna-baleira)**  **[`Só subbotóns`](#só-subbotóns)**  **[`Subbotóns`](#subbotóns)**  **[`Disposicións da tarxeta`](#disposicións-da-tarxeta)**  **[`Condicións`](#condicións)**  **[`Accións`](#accións-de-toque-dobre-toque-e-toque-longo)**  **[`Estilo`](#estilo)**  **[`Modelos`](#modelos)**  **[`Módulos`](#módulos)**  **[`Localización`](#localización)**  **[`Axuda`](#axuda)**  **[`Colaborar`](#colaborar)**  **[`Doar`](#doar)**

<br>

## Instalación

**Versión mínima compatible de Home Assistant:** 2023.9.0

<details>

<summary>Sen HACS</summary>

<br>

1. Descarga `bubble-card.zip` desde a [última versión](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Extráeo no teu cartafol `<config>/www`, deberías obter `bubble-card.js` e un cartafol `translations` ao seu carón (ese cartafol contén os dicionarios do editor, sen el o editor queda en inglés)
3. No teu panel principal, preme na icona da esquina superior dereita e despois en `Editar panel`
4. Preme de novo nesa icona e logo en `Xestionar recursos`
5. Preme en `Engadir recurso`
6. Copia e pega isto: `/local/bubble-card.js?v=1`
7. Preme en `Módulo JavaScript` e despois en `Crear`
8. Volve atrás e actualiza a páxina
9. Agora podes premer en `Engadir tarxeta` na esquina inferior dereita e buscar `Bubble Card`
10. Despois de cada actualización do ficheiro terás que editar `/local/bubble-card.js?v=1` e cambiar a versión por un número superior

Se non funciona, proba a limpar a caché do teu navegador.

</details>

<details>

<summary>Con HACS (Recomendado)</summary>

<br>

Este método permíteche recibir actualizacións directamente na Home Assistant Community Store

1. Se HACS aínda non está instalado, descárgao seguindo as instrucións en [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Continúa coa configuración inicial de HACS seguindo as instrucións en [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Na barra lateral vai a "HACS"
4. Busca "Bubble Card", ou preme no botón azul de abaixo
5. Preme en "Descargar"
6. Volve ao teu panel e preme na icona da esquina superior dereita e despois en `Editar panel`
7. Agora podes premer en `Engadir tarxeta` na esquina inferior dereita e buscar `Bubble Card`

Se non funciona, proba a limpar a caché do navegador/aplicación (en todos os teus dispositivos se cómpre).

#### Videos

Tamén podes botar unha ollada á miña canle de YouTube para ver videos paso a paso.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configuración

Todas as opcións pódense configurar no editor de Home Assistant. Pero podes atopar máis detalles e o YAML na documentación de embaixo.

<details>

<summary><b>Opcións principais (YAML + descrición)</b></summary>

| Nome | Tipo | Requisito | Opcións admitidas | Descrición |
| --- | --- | --- | --- | --- |
| `type` | string | **Obrigatorio** | `custom:bubble-card` | Tipo da tarxeta |
| `card_type` | string | **Obrigatorio** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ou `sub-buttons` | Tipo da Bubble Card, ver máis abaixo |
| `styles` | object list | Opcional | Calquera folla de estilos CSS | Permíteche personalizar o CSS da túa Bubble Card, ver [estilo](#estilo) |

</details>

<details>

<summary><b>Variables CSS globais (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Valor esperado | Descrición |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radio de bordo para todos os elementos admitidos |
| `--bubble-main-background-color` | `color` | Cor de fondo principal para todos os elementos admitidos |
| `--bubble-secondary-background-color` | `color` | Cor de fondo secundaria para todos os elementos admitidos |
| `--bubble-accent-color` | `color` | Cor de acento para todos os elementos admitidos |
| `--bubble-icon-border-radius` | `px` | Radio de bordo da icona para todos os elementos admitidos |
| `--bubble-icon-background-color` | `color` | Cor de fondo da icona para todos os elementos admitidos |
| `--bubble-sub-button-border-radius` | `px` | Radio de bordo para todos os subbotóns |
| `--bubble-sub-button-background-color` | `color` | Cor de fondo para todos os subbotóns |
| `--bubble-box-shadow` | ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra para todos os elementos admitidos |
| `--bubble-border` | ver [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Bordo para todas as tarxetas admitidas |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Consulta este [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) para coñecer Bubble Card e as súas capacidades.** A miña canle de YouTube é bastante nova e céntrase en titoriais sobre Home Assistant e Bubble Card. Non dubides en subscribirte para axudar a aumentar a visibilidade da miña canle. Grazas de antemán!

<br>

---

<br>

## Suxestións de entidades

Desde Home Assistant 2026.6, escoller unha entidade no selector de tarxetas ofréceche unhas cantas tarxetas xa preparadas, e Bubble Card engade as súas propias receitas a esa lista. Escolle unha luz e ofréceseche unha tarxeta cun control desprazable de brillo, ademais dunha variante de temperatura de cor, unha de cor e unha de saturación cando a túa luz as admite. Escolle unha cuberta e obtés o seu control de posición, escolle un reprodutor multimedia e obtés tamén unha variante coa súa lista de fontes, escolle un aspirador e obtés os seus botóns de iniciar, pausar e volver á base. Cada suxestión é unha configuración normal de Bubble Card mostrada como vista previa en directo, así que podes coller a máis próxima e seguir editándoa como sempre.

O que se che ofrece depende do que a túa entidade sabe facer realmente: unha luz sen canle de brillo recibe un interruptor no canto dun control desprazable, unha cuberta que non pode inclinarse non ten variante de inclinación, unha entidade de climatización só ten os seus modos predefinidos cando os posúe. As entradas clásicas veñen debaixo das suxestións de Bubble Card cando corresponden: a tarxeta dedicada a ese tipo de entidade, un botón simple e un control desprazable.

> [!TIP]
> Os módulos poden engadir as súas propias suxestións a esa lista, consulta [módulos](#módulos).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Esta tarxeta permíteche crear un pop-up con calquera contido. Cada pop-up está **oculto por defecto** e pódese abrir apuntando á súa ligazón (por exemplo, `'#pop-up-name'`), con calquera tarxeta que admita a [acción](#accións-de-toque-dobre-toque-e-toque-longo) `navigate`, ou coa [pila de botóns horizontal](#pila-de-botóns-horizontal) incluída.

> [!TIP]
> ### Activador do pop-up 
> Esta función permíteche abrir un pop-up baseándote no estado de calquera entidade, por exemplo, podes abrir un pop-up de "Seguranza" cunha cámara cando haxa unha persoa diante da túa casa. Tamén podes crear un helper de tipo toggle (input_boolean) e activar a súa apertura/peche nunha automatización.
> <details>
> <summary>Abrir un pop-up cando un <code>binary_sensor</code> está <code>on</code></summary>
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
> ### Diferentes xeitos de pechar un pop-up 
> Hai moitos xeitos de pechar un pop-up. Por exemplo, podes deslizar dende a cabeceira do pop-up cara abaixo, facendo un deslizamento longo dentro do pop-up cara abaixo, premendo Escape no escritorio, eliminando o hash da URL ou simplemente premendo o botón de peche.
>


### Opcións do pop-up

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Nome | Tipo | Requisito | Opcións admitidas | Descrición |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obrigatorio** | Calquera hash único (por exemplo, `'#kitchen'`) con ' ' | Así é como abrirás o teu pop-up |
| `popup_style` | string | Opcional | `bubble` (por defecto) ou `classic` | Define o estilo visual do pop-up |
| `popup_mode` | string | Opcional | `default` (por defecto), `fit-content`, `centered` ou `adaptive-dialog` | Define o modo de disposición do pop-up |
| `with_bottom_offset` | boolean | Opcional | `true` ou `false` (por defecto) | Só se usa con `popup_mode: fit-content` ou `adaptive-dialog`. Aplica un desprazamento inferior en móbil, útil cando o teu panel inclúe unha tarxeta de rodapé. |
| `full_width_on_mobile` | boolean | Opcional | `true` ou `false` (por defecto) | Só se usa con `popup_mode: centered`. Expande o pop-up ao ancho completo da pantalla en móbil, útil en pantallas máis pequenas. |
| `performance_mode` | string | Opcional | `default` (por defecto) ou `performance` | Optimiza a animación de apertura do pop-up. `performance` atrasa lixeiramente a renderización do contido e o desenfoque de fondo, e tamén desactiva o desenfoque do backdrop se está definido. |
| `auto_close` | string | Opcional | Un tempo límite en milisegundos (por exemplo, `10000` para 10s) | Pecha automaticamente o pop-up despois dun tempo límite |
| `close_on_click` | boolean | Opcional | `true` ou `false` (por defecto) | Pecha automaticamente o pop-up despois de calquera interacción |
| `close_by_clicking_outside` | boolean | Opcional | `true` (por defecto) ou `false` | Pecha o pop-up premendo fóra del |
| `width_desktop` | string | Opcional | Calquera valor CSS | Ancho no escritorio (`100%` por defecto en móbil) |
| `margin` | string | Opcional | Calquera valor CSS | Usa isto **só** se o teu pop-up non está ben centrado en móbil (por exemplo, `13px`) |
| `margin_top_mobile` | string | Opcional | Calquera valor CSS | Marxe superior en móbil (por exemplo, `-56px` se a túa cabeceira está oculta) |
| `margin_top_desktop` | string | Opcional | Calquera valor CSS | Marxe superior no escritorio (por exemplo, `50vh` para un pop-up de metade de tamaño ou `calc(100vh - 400px)` para unha altura fixa de `400px`) |
| `bg_color` | string | Opcional | Calquera valor hex, rgb ou rgba | A cor de fondo do teu pop-up (por exemplo, `#ffffff` para un fondo branco) |
| `bg_opacity` | string | Opcional | Calquera valor de `0` a `100` | A opacidade de fondo do teu pop-up (por exemplo, `100` para ningunha transparencia) |
| `bg_blur` | string | Opcional | Calquera valor de `0` a `100` | O efecto de desenfoque de fondo do teu pop-up, **isto só funciona se `bg_opacity` non está definido a `100`** (por exemplo, `0` para ningún desenfoque)|
| `shadow_opacity` | string | Opcional | Calquera valor de `0` a `100` | A opacidade da sombra do teu pop-up (por exemplo, `0` para ocultala) |
| `hide_backdrop` | boolean | Opcional | `true` ou `false` (por defecto) | Define isto a true no primeiro pop-up do teu panel principal para desactivar o backdrop en todos os pop-ups. |
| `background_update` | boolean | Opcional | `true` ou `false` (por defecto) | Actualiza o contido do pop-up en segundo plano (non recomendado) |
| `trigger` | object ou list | Opcional | Consulta [condicións](#condicións) | Abre este pop-up cando se cumpren as condicións |
| `trigger_entity` | string | Opcional | Calquera entidade | Abre este pop-up baseándote no estado de calquera entidade, a forma simple de `trigger` |
| `trigger_state` | string | Opcional (**Obrigatorio** se `trigger_entity` está definido) | Calquera estado de entidade | Estado da entidade para abrir o pop-up |
| `trigger_close` | boolean | Opcional | `true` (por defecto) ou `false` | Pecha o pop-up cando as condicións deixan de cumprirse. En cambio, o valor por defecto é `false` cando usas o par antigo `trigger_entity` e `trigger_state` |
| `open_action` | object | Opcional | Ver [accións](#accións-de-toque-dobre-toque-e-toque-longo) | Activa unha acción cando se abre o pop-up |
| `close_action` | object | Opcional | Ver [accións](#accións-de-toque-dobre-toque-e-toque-longo) | Activa unha acción cando se pecha o pop-up |
| `show_header` | boolean | Opcional | `true` (por defecto) ou `false` | Amosa/Oculta a cabeceira do pop-up por completo |
| `show_previous_button` | boolean | Opcional | `true` ou `false` (por defecto) | Amosa un botón anterior xunto ao botón de peche e navega de volta ao pop-up anterior cando estea dispoñible |
| `show_close_button` | boolean | Opcional | `true` (por defecto) ou `false` | Amosa ou oculta o botón de peche mantendo visible o resto da cabeceira |
| `buttons_position` | string | Opcional | `right` (por defecto) ou `left` | Posición dos botóns de peche e anterior na cabeceira |
| `cards` | list | Opcional | Calquera Bubble Card, tarxeta de Home Assistant ou tarxeta personalizada | Define o contido do teu pop-up. Ver o exemplo de pop-up de abaixo. |
| Tamén tes acceso a [todos os axustes do botón](#botón) para a cabeceira do pop-up. | | Opcional | | Se non está definido non se amosará ningunha cabeceira |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Valor esperado | Descrición |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radio de bordo do pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Cor de fondo principal para os elementos admitidos do pop-up |
| `--bubble-pop-up-background-color` | `color` | Cor de fondo do pop-up |
| `--bubble-backdrop-background-color` | `color` | Cor de fondo do backdrop |
| Tamén tes acceso a [todas as variables CSS do botón](#opcións-do-botón) para a cabeceira do pop-up. | | |

</details>


### Formato de pop-up independente (v3.2.0+)

Dende a v3.2.0, os pop-ups usan un novo formato independente onde as tarxetas de contido defínense directamente dentro do pop-up mediante a opción `cards`. Isto ofrece mellor rendemento e unha nova experiencia de edición por arrastrar e soltar baseada en seccións.


#### Exemplos

<details>

<summary>Un pop-up (formato independente)</summary>

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

<summary>Un botón para abrir o pop-up</summary>

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

## Pila de botóns horizontal

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Esta tarxeta é un bo complemento para a tarxeta de pop-up, xa que permite abrir os pop-ups correspondentes. Tamén permite abrir calquera páxina do teu panel. Ademais, podes engadir os teus sensores de movemento/ocupación para que a orde dos botóns se adapte segundo a habitación na que acabas de entrar. Esta tarxeta é desprazable, permanece visible e actúa como un rodapé.

> [!IMPORTANT]  
> Esta tarxeta ten que ser a última na túa vista (despois de cada tarxeta e pop-up). Non pode estar dentro de ningunha pila.

### Opcións da pila de botóns horizontal

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Nome | Tipo | Requisito | Opcións admitidas | Descrición |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obrigatorio** | O hash do pop-up (por exemplo, `'#kitchen'`) con ' ' ou calquera ligazón | Unha ligazón para abrir |
| `1_name` | string | Opcional | Calquera texto | Un nome para o teu botón |
| `1_icon` | string | Opcional | Calquera icona `mdi:` | Unha icona para o teu botón |
| `1_entity` | string | Opcional | Calquera luz ou grupo de luces | Amosa a cor desa luz no fondo |
| `1_pir_sensor` | string | Opcional | Calquera sensor binario | Polo menos un sensor pir ou máis para `auto_order`, de feito tamén funciona con calquera tipo de entidade, por exemplo podes engadir grupos de luces e a orde cambiará segundo o último estado cambiado. |
| `auto_order` | boolean | Opcional | `true` ou `false` (por defecto) | Cambia a orde dos botóns segundo a última hora de cambio de `_pir_sensor`, **ten que ser `false` se non tes ningún `_pir_sensor` no teu código** |
| `margin` | string | Opcional | Calquera valor CSS | Usa isto **só** se a túa `horizontal-buttons-stack` non está ben centrada en móbil (por exemplo, `13px`) |
| `width_desktop` | string | Opcional | Calquera valor CSS | Ancho no escritorio (`100%` por defecto en móbil) |
| `is_sidebar_hidden` | boolean | Opcional | `true` ou `false` (por defecto) | Fixa a posición da pila de botóns horizontal se a barra lateral está oculta no escritorio (só se ti mesmo fixeches unha modificación para ocultala) |
| `rise_animation` | boolean | Opcional | `true` (por defecto) ou `false` | Define isto a `false` para desactivar a animación que se activa unha vez cargada a páxina |
| `highlight_current_view` | boolean | Opcional | `true` ou `false` (por defecto) | Resalta o hash/vista actual cunha animación suave |
| `hide_gradient` | boolean | Opcional | `true` ou `false` (por defecto) | Define isto a `false` para ocultar o gradiente |

> [!IMPORTANT]  
> As variables que comezan por un número definen os teus botóns, simplemente cambia ese número para engadir máis botóns (ver o exemplo de abaixo).

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Valor esperado | Descrición |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Radio de bordo para os botóns da pila de botóns horizontal |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Cor de fondo para os botóns da pila de botóns horizontal |

</details>


#### Exemplo

<details>

<summary>Unha pila de botóns horizontal que se reorganiza segundo os sensores de ocupación</summary>

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

## Botón

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Esta tarxeta é moi versátil. Pódese usar como **interruptor**, **control desprazable**, **estado** ou botón de **nome/texto**.

> [!TIP]
> ### Cales son as diferenzas entre todos os tipos de botón?
>
> - **Botón interruptor:** este é o tipo de botón por defecto. Por defecto, alterna unha entidade e a súa cor de fondo cambia segundo o estado da entidade ou a cor da luz. Podes cambiar a súa acción na sección **Acción ao tocar na tarxeta**.
>
> - **Botón control desprazable:** este tipo de botón permíteche controlar entidades con rangos axustables. É ideal para regular a intensidade das luces, e a súa cor de recheo adaptarase á cor da luz. Tamén podes usalo para amosar valores, como o nivel dunha batería.
>   Entidades compatibles cos controis desprazables:
>   - Luz (brillo)
>   - Reprodutor multimedia (volume)
>   - Cuberta (posición)
>   - Ventilador (porcentaxe)
>   - Climatización (temperatura)
>   - Número de entrada e número (valor)
>   - Sensor de batería (porcentaxe, só lectura)
>
>   Tamén podes usar calquera entidade cun estado numérico desactivando o filtro de entidade en **Configuración do control desprazable**, e despois definir os valores `min` e `max`. Esta opción é só de lectura.
>
> - **Botón de estado:** perfecto para amosar información dun sensor ou calquera entidade. Ao premelo, mostrará o panel de "Máis información" da entidade. A súa cor de fondo non cambia.
>
> - **Botón de nome/texto:** o único tipo de botón que non precisa unha entidade. Permíteche amosar un texto curto, un nome ou un título. Tamén podes engadirlle accións. A súa cor de fondo non cambia.

### Opcións do botón

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | An entity to control |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | The behavior of your button |
| `name` | string | Optional | Any string | A name for your button, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon | An icon for your button, if not defined it will display the entity icon or the `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Give the priority to the icon instead of the `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **For lights only.** Use the theme's accent color instead of the light's color.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Show the last updated time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Allow to change the default actions on button click. |
| `tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon click, if undefined, `more-info` will be used |
| `double_tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon double click, if undefined, `none` will be used |
| `hold_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon hold, if undefined, `more-info` will be used |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Styling layout of the card, see [card layouts](#disposicións-da-tarxeta) |
| `rows` | number | Optional | Any number | Number of rows (height) (e.g. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subbotóns) | Add customized buttons fixed to the right |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Main background color for supported elements in the button |
| `--bubble-button-border-radius` | `px` | Border radius for the button |
| `--bubble-button-icon-border-radius` | `px` | Border radius for the button icon container |
| `--bubble-button-icon-background-color` | `color` | Background color for the button icon container |
| `--bubble-light-white-color` | `color` | Replace the default white color of light buttons/sliders |
| `--bubble-light-color` | `color` | Replace the color of light buttons/sliders (even RGB lights) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for the button |

</details>

Estas opcións só están dispoñibles cando `button_type` está definido como `slider`.

<details>

<summary><b>Opcións do control desprazable (YAML + descricións)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | The minimum value of the slider. For custom sliders.                                                    |
| `max_value`             | number  | Optional                        | The maximum value of the slider. For custom sliders.                                                    |
| `step`                  | number  | Optional                        | The step value of the slider.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Enable the previous slider behavior where you tap to activate the slider, instead of holding it.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Update value relative to the starting value, rather than the starting touch point.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Make the slider read-only. Automatically enabled for some entities like sensors.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | The entity state is updated while sliding. **This feature is not recommended for all entities.**        |
| `slider_fill_orientation` | string | Opcional | `left`, `right`, `top` ou `bottom` | Cambia a dirección de enchido do control desprazable. De esquerda a dereita se non se define, en espello nas [linguas de dereita a esquerda](#localización) |
| `slider_value_position` | string | Opcional | `right`, `left`, `center` ou `hidden` | Posición da visualización do valor. Á dereita se non se define, e á esquerda nas [linguas de dereita a esquerda](#localización) |
| `invert_slider_value` | boolean | Optional (`false` default) | Invert slider direction (100% fill equals minimum). Not available for color sliders. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **For lights only.** Choose the slider mode |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **For covers only.** Choose the slider mode (position or tilt) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **For lights only (Hue mode).** Force saturation when adjusting Hue |
| `hue_force_saturation_value` | number | Optional (`100` default) | **For lights only (Hue mode).** Forced saturation value (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **For lights only (Brightness mode).** Use the theme accent color instead of the light color |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **For lights only.** Allows the slider to reach 0%, which turns off the light. Not available with `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **For lights only.** Enable smooth brightness transitions for supported lights.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **For lights only.** The transition time in milliseconds. Requires `light_transition: true`.            |

</details>

#### Exemplos

<details>

<summary>Un botón de control desprazable que pode controlar o brillo dunha luz</summary>

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

<summary>Un botón con máis opcións</summary>

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

## Reprodutor multimedia

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Esta tarxeta permíteche controlar unha entidade de reprodutor multimedia.

### Opcións do reprodutor multimedia

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | The media player to control |
| `name` | string | Optional | Any string | A name for your media player, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon | An icon for your media player, if not defined it will display the entity icon or the `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Give the priority to the icon instead of the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Show the last updated time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `min_volume` | number | Optional | Any number | The minimum value of the volume slider. |
| `max_volume` | number | Optional | Any number | The maximum value of the volume slider. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Use a blurred media cover as the card background. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Allow to change the default actions on button click. |
| `tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon double click, if undefined, `none` will be used. |
| `hold_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon hold, if undefined, `more-info` will be used. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Move the cover action buttons to the bottom (fixed) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Make the bottom action buttons full width (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Alignment of bottom action buttons when not full width |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Styling layout of the card, see [card layouts](#disposicións-da-tarxeta) |
| `rows` | number | Optional | Any number | Number of rows (height) (e.g. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subbotóns) | Add customized buttons fixed to the right |
| `hide` | object | Optional | See below | Hide buttons from the card |

#### Opcións de ocultación

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Hide the play/pause button |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Hide the volume button |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Hide the previous button |
| `next_button` | boolean | Optional | `true` or `false` (default) | Hide the next button |
| `power_button` | boolean | Optional | `true` or `false` (default) | Hide the power button |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Main background color for the media player |
| `--bubble-media-player-border-radius` | `px` | Border radius for the media player |
| `--bubble-media-player-buttons-border-radius` | `px` | Border radius for the media player buttons |
| `--bubble-media-player-slider-background-color` | `color` | Background color for the volume slider |
| `--bubble-media-player-icon-border-radius` | `px` | Border radius for the media player icon container |
| `--bubble-media-player-icon-background-color` | `color` | Background color for the media player icon container |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for the media player |

</details>


#### Exemplos

<details>

<summary>Un reprodutor multimedia con todas as opcións</summary>

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

## Cuberta

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Esta tarxeta permíteche controlar as túas entidades `cover`.

### Opcións da cuberta

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | A cover to control |
| `name` | string | Optional | Any string | A name for your cover, if not defined it will display the entity name |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Give the priority to the icon instead of the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Show the last updated time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `icon_open` | string | Optional | Any `mdi:` icon | An icon for your open cover, if not defined it will display the default open cover icon |
| `icon_close` | string | Optional | Any `mdi:` icon | An icon for your closed cover, if not defined it will display the default closed cover icon |
| `icon_up` | string | Optional | Any `mdi:` icon | An icon for your open cover button, if not defined it will display the default open cover icon |
| `icon_down` | string | Optional | Any `mdi:` icon | An icon for your close cover button, if not defined it will display the default close cover icon |
| `open_service` | string | Optional | Any service or script | A service to open your cover, default to `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | A service to stop your cover, default to `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | A service to close your cover, default to `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Position of tilt control buttons (only shown if cover supports tilt) |
| `open_tilt_service` | string | Optional | Any service or script | A service to open tilt, default to `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | A service to close tilt, default to `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Allow to change the default actions on button click. |
| `tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon double click, if undefined, `none` will be used. |
| `hold_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon hold, if undefined, `more-info` will be used. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Move the media controls to the bottom (fixed) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Make the bottom controls full width (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Alignment of bottom controls when not full width |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Styling layout of the card, see [card layouts](#disposicións-da-tarxeta) |
| `rows` | number | Optional | Any number | Number of rows (height) (e.g. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subbotóns) | Add customized buttons fixed to the right |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Main background color for supported elements in the cover card |
| `--bubble-cover-border-radius` | `px` | Border radius for the cover card |
| `--bubble-cover-icon-border-radius` | `px` | Border radius for the cover card icon container |
| `--bubble-cover-icon-background-color` | `color` | Background color for the cover card icon container |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for the cover card |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for buttons in the cover card |

</details>


#### Exemplo

<details>

<summary>Unha tarxeta que pode controlar unha persiana enrolable</summary>

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

## Selección

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Esta tarxeta permíteche engadir un menú despregable para as túas entidades `input_select` / `select`. Esta tarxeta tamén admite os subbotóns e todas as características comúns de Bubble Card.

> [!TIP]
> Tamén podes ter subbotóns de selección se o desexas, esta característica está dispoñible en todas as tarxetas que admiten os subbotóns.

### Opcións da selección

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | An entity to control |
| `name` | string | Optional | Any string | A name for your select, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon | An icon for your select, if not defined it will display the entity icon or the `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Give the priority to the icon instead of the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show or hide the state of your `entity` |
| `show_name` | boolean | Optional | `true` (default) or `false` | Show or hide the name |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Show or hide the icon |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Show the last changed time of your `entity` |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Show the last updated time of your `entity` |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Show an attribute of your `entity` below its `name` |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | The attribute to show (e.g. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon double click, if undefined, `none` will be used. |
| `hold_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon hold, if undefined, `more-info` will be used. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Styling layout of the card, see [card layouts](#disposicións-da-tarxeta) |
| `rows` | number | Optional | Any number | Number of rows (height) (e.g. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subbotóns) | Add customized buttons fixed to the right |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Main background color for supported elements in the select card |
| `--bubble-select-background-color` | `color` | Background color for select card |
| `--bubble-select-list-border-radius` | `px` | Border radius for the dropdown menu in the card |
| `--bubble-select-list-item-accent-color` | `color` | Accent color for the selected item |
| `--bubble-select-list-background-color` | `color` | Background color for the dropdown menu in the card |
| `--bubble-select-list-width` | `px` | Width of the dropdown menu in the card |
| `--bubble-select-arrow-background-color` | `color` | Background color for dropdown arrow |
| `--bubble-select-button-border-radius` | `px` | Border radius for select button |
| `--bubble-select-border-radius` | `px` | Border radius for the select card |
| `--bubble-select-icon-border-radius` | `px` | Border radius for the select card icon container |
| `--bubble-select-icon-background-color` | `color` | Background color for the select card icon container |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for the select card |

</details>


#### Exemplos

<details>

<summary>Unha tarxeta de selección cunha lista de escenas</summary>

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

## Climatización

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Esta tarxeta permíteche controlar as túas entidades `climate`.

> [!TIP]
> O menú de selección de modo é un [subbotón](#subbotóns) que se engade automaticamente ao crear a tarxeta. Despois podes modificalo ou eliminalo como desexes.

### Opcións de climatización

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | The entity to control (e.g., `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | A custom name for the card. If not defined, it will display the entity name.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | A custom icon for the card. If not defined, the entity icon or `entity-picture` will be used.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Gives priority to the icon over the `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Show or hide the current state of the `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Show or hide the name of the entity.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Show or hide the icon.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Hides the low target temperature control if supported by the `entity`.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Hides the high target temperature control if supported by the `entity`.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Applies a constant background color when the climate entity is ON.                                              |
| `step` | number | Optional | Any number | The temperature step. |
| `min_temp` | number | Optional | Any number | The minimum temperature. |
| `max_temp` | number | Optional | Any number | The maximum temperature. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Allow to change the default actions on button click. |
| `tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon double click, if undefined, `none` will be used. |
| `hold_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on icon hold, if undefined, `more-info` will be used. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Move the climate action buttons to the bottom (fixed) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Make the bottom action buttons full width (default: `true` when position is `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Alignment of bottom action buttons when not full width |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Styling layout of the card, see [card layouts](#disposicións-da-tarxeta) |
| `rows` | number | Optional | Any number | Number of rows (height) (e.g. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#subbotóns)                | Adds custom buttons fixed to the right. Useful for a climate mode select menu.                                  |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Main background color for supported elements in the climate card |
| `--bubble-climate-border-radius` | `px` | Border radius for supported elements in the climate card elements |
| `--bubble-climate-button-background-color` | `color` | Background color for the climate card buttons |
| `--bubble-climate-icon-border-radius` | `px` | Border radius for the climate card icon container |
| `--bubble-state-climate-fan-only-color` | `color` | Overlay color for the fan-only state |
| `--bubble-state-climate-dry-color` | `color` | Overlay color for the dry state |
| `--bubble-state-climate-cool-color` | `color` | Overlay color for the cool state |
| `--bubble-state-climate-heat-color` | `color` | Overlay color for the heat state |
| `--bubble-state-climate-auto-color` | `color` | Overlay color for the auto state |
| `--bubble-state-climate-heat-cool-color` | `color` | Overlay color for the heat-cool state |
| `--bubble-climate-accent-color` | `color` | Accent color for the climate card |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow for climate container. |

</details>


#### Exemplos

<details>

<summary>Unha tarxeta de climatización cun menú despregable de modos HVAC</summary>

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

Esta tarxeta permíteche amosar as túas entidades de calendario. O seu contido é desprazable, polo que podes navegar facilmente polos próximos eventos.

### Opcións do calendario

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Number of calendar days to fetch events for, from now until the end of the Nth day (default: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | The entity to control (e.g., `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | The calendar entity to display                                                          |
| `entities.color`    | string  | Optional     | A color                                         | A custom color for the calendar chip. If not defined, an automatic color will be picked |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Number of calendar days to fetch events for, from now until the end of the Nth day (default: 7) |
| `limit`             | number  | Optional     | A number                                        | The amont of events that will be displayed on the card                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Show or hide the end time for events                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Show or hide the event progress bar                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Mostra ou agocha os eventos que están actualmente en curso. Os eventos de varios días xúlganse día a día, así que só se agocha o día en curso e os días vindeiros seguen visibles |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Allow text to scroll when the content exceeds the size of their container |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Allow to add actions on event click. |
| `tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on day click, if undefined, `none` will be used. |
| `double_tap_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on day double click, if undefined, `none` will be used. |
| `hold_action` | object | Optional | See [actions](#accións-de-toque-dobre-toque-e-toque-longo) | Define the type of action on day hold, if undefined, `none` will be used. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Styling layout of the card, see [card layouts](#disposicións-da-tarxeta) |
| `rows` | number | Optional | Any number | Number of rows (height) (e.g. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subbotóns) | Add customized buttons fixed to the right |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ------------------------------------------ | --------------- | ---------------------------------------------------------------------- |
| `--bubble-calendar-main-background-color` | `color`        | Main background color for supported elements in the calendar card  |
| `--bubble-calendar-border-radius`         | `px`           | Border radius for supported elements in the calendar card elements |
| `--bubble-calendar-height`                | `px`           | Height for the calendar card                                        |

</details>

#### Exemplos

<details>

<summary>Unha tarxeta de calendario cunha cantidade limitada de eventos</summary>

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

<summary>Unha tarxeta de calendario cunha hora de fin e unha barra de progreso</summary>

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

Esta tarxeta é un simple separador para dividir o teu pop-up en categorías/seccións. Por exemplo: Luces, Dispositivos, Cubertas, Configuración, Automatizacións...

### Opcións do separador

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Nome | Tipo | Requisito | Opcións admitidas | Descrición |
| --- | --- | --- | --- | --- |
| `name` | string | Opcional pero recomendado | Calquera texto | Un nome para o teu separador |
| `icon` | string | Opcional pero recomendado | Calquera icona `mdi:` | Unha icona para o teu separador |
| `card_layout` | string | Opcional | `normal` (por defecto se non está na vista de seccións), `large` (por defecto se está na vista de seccións), `large-2-rows`, `large-sub-buttons-grid` | Disposición de estilo da tarxeta, consulta [disposicións da tarxeta](#disposicións-da-tarxeta) |
| `rows` | number | Opcional | Calquera número | Número de filas (altura) (p. ex. `2`) |
| `sub_button` | object | Opcional | Consulta [subbotóns](#subbotóns) | Engade botóns personalizados fixados á dereita |

</details>

<details>

<summary><b>Variables CSS (consulta <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Valor esperado | Descrición |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Cor de fondo para a liña no separador |

</details>

#### Exemplo

<details>

<summary>Un separador/divisor para unha sección "Cubertas"</summary>

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

## Columna baleira

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Esta tarxeta está aquí para encher unha columna baleira. É útil se tes un `horizontal-stack` no teu pop-up con só unha tarxeta. Bota unha ollada á esquina inferior dereita desta captura para (non) velo.

### Opcións da columna baleira

Esta tarxeta non ten opcións e non admite [estilo](#estilo), aínda que si admite opcións de disposición para as seccións de HA.

#### Exemplo

<details>

<summary>Unha columna baleira nunha pila horizontal</summary>

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

## Só subbotóns

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Esta tarxeta está dedicada só aos subbotóns. É perfecta para menús, accións rápidas, chips informativos, ou un pé de páxina fixo na parte inferior da páxina.

> [!IMPORTANT]  
> Esta tarxeta usa o novo esquema de subbotóns. Usa `sub_button.bottom` para definir os teus botóns. A sección `sub_button.main` é ignorada.

### Opcións de só subbotóns

<details>

<summary><b>Opcións (YAML + descricións)</b></summary>

| Nome | Tipo | Requisito | Opcións admitidas | Descrición |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obrigatorio** | Consulta [subbotóns](#subbotóns) | Define os teus subbotóns usando a sección `bottom` |
| `hide_main_background` | boolean | Opcional | `true` ou `false` (por defecto) | Elimina o fondo da tarxeta |
| `footer_mode` | boolean | Opcional | `true` ou `false` (por defecto) | Fixa a tarxeta na parte inferior da páxina |
| `footer_full_width` | boolean | Opcional | `true` ou `false` (por defecto) | Fai que o pé de páxina ocupe todo o ancho (100%) |
| `footer_width` | number | Opcional | Calquera número | Ancho do pé de páxina en píxeles cando `footer_full_width` é `false` |
| `footer_bottom_offset` | number | Opcional | Calquera número | Distancia desde a parte inferior da páxina en píxeles (por defecto: `16`) |
| `card_layout` | string | Opcional | `normal` (por defecto se non está na vista de seccións), `large` (por defecto se está na vista de seccións), `large-2-rows`, `large-sub-buttons-grid` | Disposición de estilo da tarxeta, consulta [disposicións da tarxeta](#disposicións-da-tarxeta) |
| `rows` | number | Opcional | Calquera número | Número de filas (altura) (p. ex. `2`) |

</details>

<details>

<summary><b>Variables CSS (consulta <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Valor esperado | Descrición |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Ancho do pé de páxina cando `footer_full_width` é `false` |
| `--bubble-footer-bottom` | `px` | Desprazamento inferior do pé de páxina |
| `--bubble-footer-box-shadow` | consulta [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra da caixa para o contedor do pé de páxina |

</details>

#### Exemplos

<details>

<summary>Chips (como na captura)</summary>

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

<summary>Un menú de pé de páxina fixo</summary>

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

## Subbotóns

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

En cada tarxeta que admite esa opción, podes engadir subbotóns para personalizar aínda máis as túas tarxetas. Podes, por exemplo, crear un botón que controle un robot aspirador, unha tarxeta do tempo, ou case calquera cousa que se che ocorra. Estes subbotóns admiten as accións de toque e a maioría das opcións do botón.

Os subbotóns agora admiten tres tipos: **Por defecto (botón)**, **Slider**, e **Desprazable / Selección**. Podes combinar tipos na mesma tarxeta, colocar subbotóns arriba ou abaixo, e organizalos en grupos para disposicións máis avanzadas.

#### Colocación e grupos de subbotóns

<details>

<summary><b>Estrutura dos subbotóns (main / bottom + grupos)</b></summary>

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

**Notas:**
- `main` e `bottom` son dúas seccións independentes. Os subbotóns de `bottom` están fixados na parte inferior da tarxeta.
- `main_layout` e `bottom_layout` aceptan `inline` (por defecto) ou `rows` para amorear os grupos verticalmente.
- Os grupos son obxectos cun array `group` e un `buttons_layout` opcional (`inline` ou `column`).
- `justify_content` está dispoñible **só para grupos de bottom** (`start`, `center`, `end`, `fill`).
- Cando hai subbotóns de bottom presentes, a disposición da tarxeta cambia automaticamente a `large` a non ser que definas explicitamente outra disposición.
- Os arrays `sub_button` antigos aínda son compatibles e trátanse como a sección `main`.

</details>

### Opcións dos subbotóns

<details>

<summary><b>Opcións (YAML + descrición)</b></summary>

| Nome | Tipo | Requisito | Opcións admitidas | Descrición |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcional | Calquera entidade | Unha entidade a controlar |
| `name` | string | Opcional | Calquera texto | Un nome para o teu subbotón, se non se define amosarase o nome da entidade |
| `icon` | string | Opcional | Calquera icona `mdi:` | Unha icona para o teu subbotón, se non se define amosarase a icona da entidade ou a imaxe da entidade |
| `force_icon` | boolean | Opcional | `true` ou `false` (por defecto) | Forza a icona aínda que haxa unha imaxe de entidade dispoñible |
| `sub_button_type` | string | Opcional | `default`, `slider` ou `select` | Escolle o tipo de subbotón |
| `show_background` | boolean | Opcional | `true` (por defecto) ou `false` | Amosa un fondo para o teu subbotón, cambiará a súa cor segundo o estado da túa entidade |
| `state_background` | boolean | Opcional | `true` (por defecto) ou `false` | Usa a cor do estado cando a entidade está `on` |
| `light_background` | boolean | Opcional | `true` (por defecto) ou `false` | Usa a cor da luz para o fondo cando estea dispoñible |
| `show_state` | boolean | Opcional | `true` ou `false` (por defecto) | Amosa ou agocha o estado da túa `entity` |
| `show_name` | boolean | Opcional | `true` ou `false` (por defecto) | Amosa ou agocha o nome |
| `show_icon` | boolean | Opcional | `true` (por defecto) ou `false` | Amosa ou agocha a icona |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (por defecto) | Amosa a hora do último cambio da túa `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (por defecto) | Amosa a hora da última actualización da túa `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (por defecto) | Amosa un atributo da túa `entity` debaixo do seu `name` |
| `attribute` | string | Opcional (obrigatorio se `show_attribute` está definido como `true`) | Un atributo da túa `entity` | O atributo a amosar (p. ex. `brightness`) |
| `select_attribute` | string | Opcional | Unha lista de atributos da túa `entity` (consulta as opcións admitidas arriba) | Esta lista de atributos abrirá un desprazable se se preme (p. ex. `effect_list`) |
| `show_arrow` | boolean | Opcional | `true` (por defecto) ou `false` | Amosa ou agocha a frecha do desprazable para os subbotóns de selección |
| `scrolling_effect` | boolean | Opcional | `true` (por defecto) ou `false` | Permite que o texto se desprace cando o contido excede o tamaño do contedor |
| `tap_action` | object | Opcional | Consulta [accións](#accións-de-toque-dobre-toque-e-toque-longo) | Define o tipo de acción ao premer o subbotón, se non se define úsase `more-info`. |
| `double_tap_action` | object | Opcional | Consulta [accións](#accións-de-toque-dobre-toque-e-toque-longo) | Define o tipo de acción ao facer dobre toque no subbotón, se non se define úsase `none`. |
| `hold_action` | object | Opcional | Consulta [accións](#accións-de-toque-dobre-toque-e-toque-longo) | Define o tipo de acción ao manter premido o subbotón, se non se define úsase `more-info`. |
| `fill_width` | boolean | Opcional | `true` ou `false` | Ocupa o ancho dispoñible (por defecto: `false` para main, `true` para bottom) |
| `width` | number ou string | Opcional | Calquera número ou lonxitude CSS | Ancho personalizado (`px` para a sección main, `%` para a sección bottom por defecto) |
| `custom_height` | number | Opcional | Calquera número | Altura personalizada en píxeles |
| `content_layout` | string | Opcional | `icon-left` (por defecto), `icon-top`, `icon-bottom`, `icon-right` | Colocación da icona dentro do subbotón |
| `always_visible` | boolean | Opcional | `true` ou `false` (por defecto) | **Só slider.** Amosa sempre o slider en lugar de abrilo ao premer |
| `show_button_info` | boolean | Opcional | `true` ou `false` (por defecto) | **Só slider.** Amosa a icona/nome/estado cando `always_visible` está activado |
| `visibility` | object ou list | Opcional | Consulta [condicións](#condicións) | Amosa ou agocha o subbotón segundo condicións |
| `hide_when_parent_unavailable` | boolean | Opcional | `true` ou `false` (por defecto) | Agocha o subbotón se a entidade da tarxeta pai non está dispoñible |
| `css_class` | string | Opcional | Calquera cadea | Unha clase CSS adicional no subbotón, para apuntar a el no teu [estilo](#estilo) sexa cal sexa o seu nome (por exemplo `My value` dá `.my-value`) |

</details>

<details>

<summary><b>Opcións dos subbotóns tipo slider (igual que os sliders de botón)</b></summary>

<br>

Os subbotóns tipo slider admiten as mesmas opcións que os sliders de botón, incluíndo:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variables CSS (consulta <a href="#estilo">Estilo</a>)</b></summary>

| Variable | Valor esperado | Descrición |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Raio de bordo para os subbotóns |
| `--bubble-sub-button-background-color` | `color` | Cor de fondo para os subbotóns |
| `--bubble-sub-button-outline` | `box-shadow` | Contorno engadido a un subbotón ou a un control desprazable, só cando ese elemento se pinta da mesma cor que a tarxeta que ten detrás, o que o faría invisible (ponno en `none` para quitalo) |
| `--bubble-sub-slider-border-radius` | `px` | Raio de bordo para os subbotóns tipo slider |
| `--bubble-sub-slider-background-color` | `color` | Cor de fondo para os subbotóns tipo slider |
| `--bubble-sub-slider-height` | `px` | Altura para os subbotóns tipo slider sempre visibles |
| `--bubble-sub-slider-outline` | `box-shadow` | Contorno só dos subbotóns tipo slider, recorre a `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Cor do texto en fondos claros de subbotón |

</details>

#### Exemplos

<details>

<summary>Un botón con algúns subbotóns para facer unha tarxeta de aspirador (como na captura)</summary>

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

<summary>Un slider de botón cun subbotón que amosa o brillo e outro que acende/apaga a luz (como na captura)</summary>

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

<summary>Un botón que amosa a temperatura interior e exterior xunto co tempo de hoxe e mañá (captura incluída)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Mala sorte para min, está nubrado todo o tempo, pero todas as iconas van cambiando segundo o tempo que fai.

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

## Disposicións da tarxeta

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card admite completamente a vista de seccións de Home Assistant, podes cambiar a disposición da tarxeta para facela máis grande e tamén cambiar o número de columnas ou filas que a tarxeta debería ocupar na túa vista de seccións (só nas tarxetas que admiten esa opción). Estas disposicións tamén son compatibles en todos os demais tipos de vista.

<details>

<summary><b>Disposicións de tarxeta dispoñibles</b></summary>

| Disposición | Descrición |
| --- | --- |
| `normal` | A disposición normal (non optimizada para a vista de seccións) |
| `large` | Unha disposición máis grande que se redimensionará ás filas seleccionadas na vista de seccións (optimizada para a vista de seccións) |
| `large-2-rows` | Unha disposición máis grande con 2 filas de subbotóns que se redimensionará ás filas seleccionadas na vista de seccións (optimizada para a vista de seccións) |
| `large-sub-buttons-grid` | Esta disposición amosa os subbotóns nunha grella, `rows` débese establecer en polo menos `2`.

</details>

#### Exemplos

<details>

<summary>Un botón grande que amosa estatísticas de enerxía con 2 filas de subbotóns (captura incluída)</summary>

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

<summary>Un botón grande con varias filas con 12 subbotóns</summary>

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

## Condicións

Algunhas opcións funcionan con condicións, escritas exactamente como as da [tarxeta condicional](https://www.home-assistant.io/dashboards/conditional/) de Home Assistant:

- `visibility` nun [subbotón](#subbotóns), para mostralo ou agochalo
- `trigger` nun [pop-up](#pop-up), para abrilo cando se cumpran as condicións
- `checkConditionsMet(conditions, hass)` dentro dos teus [modelos](#modelos), cando precises a resposta no teu propio código

Avalíanse todos os tipos de condición de Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, e mais os grupos `and`, `or` e `not`. As condicións do construtor de condicións de Home Assistant tamén funcionan, as que levan o nome do seu dominio como `sun.is_up`, `light.is_on`, `zone.in_zone` ou `temperature.is_value`, cos seus axustes `target`, `options`, `behavior` e `for`.

<details>

<summary><b>Exemplo</b></summary>

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
> As condicións avalíanse no teu navegador, así que as poucas que precisan o servidor de Home Assistant non poden ser exactas: o amencer e o solpor lense da entidade `sun.sun` no canto de recalcularse, e unha duración `for` mídese desde o último cambio de estado, sen o historial do recorder.
>
> `view_columns` acéptase pero cúmprese sempre, xa que Bubble Card nunca é quen dispón as columnas da túa vista. Un tipo de condición que Bubble Card non coñece anúnciase unha vez na consola do teu navegador no canto de fallar en silencio, para que poidas distinguir unha errata dunha funcionalidade que falta.

<br>

---

<br>

## Accións de toque, dobre toque e toque longo

Tamén podes usar as accións por defecto de Home Assistant de toque, dobre toque e toque longo nas tarxetas que admiten esta opción. Por exemplo, isto permíteche amosar a xanela de "máis información" mantendo premida unha icona de botón ou executar un servizo cando se preme un subbotón.

**Nota: Cando se configura un `double_tap_action`, o `tap_action` normal terá un atraso de 200ms para permitir a detección
dun dobre toque. Se este atraso non é desexable, define `double_tap_action` como `none` para desactivar a xestión do dobre toque.**

### Opcións de acción

<details>

<summary><b>Opcións (YAML + descrición)</b></summary>

| Nome | Tipo | Opcións admitidas | Descrición |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Acción a realizar |
| `target` | object |  | Só funciona con `call-service`. Segue a [sintaxe de home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Calquera ruta do teu panel | Ruta á que navegar (p. ex. `'#kitchen'` para abrir un pop-up) cando a acción se define como navigate |
| `url_path` | string | Calquera ligazón | URL a abrir ao premer (p. ex. `https://www.google.com`) cando a acción é `url` |
| `service` | string | Calquera servizo | Servizo a chamar (p. ex. `media_player.media_play_pause`) cando `action` se define como `call-service` |
| `data` ou `service_data` | object | Calquera dato de servizo | Datos de servizo a incluír (p. ex. `entity_id: media_player.kitchen`) cando `action` se define como `call-service` |
| `confirmation` | object | Consulta [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Amosa un pop-up de confirmación (non un de Bubble Card), sobrescribe o obxecto `confirmation` por defecto |

</details>

#### Exemplo

<details>

<summary>Un botón para abrir un pop-up</summary>

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

## Estilo

Podes engadir estilos personalizados para modificar o CSS de todas as tarxetas **sen usar card-mod** de catro xeitos:

- No editor, vai á tarxeta que queres modificar e despois navega a _Opcións de estilo > Estilos personalizados e modelos JS_, e engade os teus estilos personalizados (consulta os consellos e exemplos de abaixo).
- No editor (ou en [YAML](#módulos)), vai á tarxeta que queres modificar e despois navega a _Módulos_, e crea un novo módulo (estará dispoñible para todas as tarxetas), ou vai á **Module Store** para instalar calquera módulo dispoñible (máis detalles sobre os módulos podes atopar [abaixo](#módulos)).
- Nun ficheiro de [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) engadindo variables CSS en YAML (están dispoñibles na documentación de cada tarxeta de arriba). Isto permite modificacións globais.

  <details>
  
  <summary>Exemplo</a></summary>
  
  <br>

  Non copies a liña `Bubble:`, é o nome do tema que usas. Tamén necesitas eliminar o `--` das variables.

  Necesitas executar a acción [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) para actualizar o tema despois de calquera modificación.

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
  
- En YAML engadindo `styles: |` seguido dos teus estilos personalizados (consulta os consellos e exemplos de abaixo).

> [!TIP]  
> **Para entender que clases de estilo se poden modificar**, podes botar unha ollada ao cartafol [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) neste repositorio. En cada cartafol de tarxeta, atoparás un ficheiro chamado `styles.css`. Estes ficheiros conteñen todos os estilos aplicados. Isto permite moitas máis posibilidades que as variables CSS, pero hai que engadilo individualmente a cada tarxeta.
> 
> Tamén podes atopar moitos [exemplos da comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ou algúns do [foro de Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) facendo unha pequena procura.
>
> O tema Bubble para Home Assistant (como nas capturas de pantalla) podes atopalo [aquí](https://github.com/Clooos/Bubble).
>
> En breve chegará un vídeo titorial na miña [canle de YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Ten en conta que podes ter que engadir `!important;` a algúns estilos CSS xa definidos (mira os exemplos de abaixo).

> [!TIP]  
> Os subbotóns pódense apuntar mediante clases baseadas no nome. Por exemplo, un subbotón chamado "My sub-button" pódese estilizar con `.my-sub-button`. Os subbotóns tipo slider tamén expoñen `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> Unha clase baseada no nome cambia cando renomeas un subbotón, e tradúcese cando o nome tamén o está. Define `css_class` no subbotón para obter unha clase túa que nunca se move, sexa cal sexa o seu nome e sexa cal sexa a lingua.

#### Exemplos

<details>

<summary>Cambiar o tamaño da fonte de calquera Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Cambiar a cor de fondo dun único botón nunha pila de botóns horizontal</summary>

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

<summary>Cambiar a cor de fondo dunha tarxeta</summary>

<br>

Este funciona en todos os tipos de Bubble Card (excepto nos pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Este fai o mesmo pero só nunha tarxeta de botón (funciona tamén na cabeceira do pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Para cambiar a cor cando está `on`, mira os modelos de estilo de abaixo.

</details>

<details>

<summary>Cambiar a cor dun slider de botón</summary>

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

<summary>Cambiar a cor da liña dun separador</summary>

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

<summary>Cambiar a cor dunha icona</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Para unha icona nunha pila de botóns horizontal.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Cambiar a cor de fondo dun contedor de icona</summary>

<br>

Este funciona en todos os tipos de Bubble Card (excepto nos pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Este fai o mesmo para a cabeceira do pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Cambiar o tamaño dos subbotóns (perfecto para a disposición grande)</summary>

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

<summary>Cambiar a cor de fondo do segundo subbotón</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Cambiar o tamaño dunha icona</summary>

<br>

Para a icona principal.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Para as iconas dos subbotóns.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Usar unha imaxe en vez dunha icona nun subbotón</summary>

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

Só tes que subir esta imaxe a un cartafol "pictures" (ou o nome que queiras) dentro do cartafol "www" de Home Assistant.

</details>

<details>

<summary>Exemplo avanzado: Crear unha fileira horizontal de subbotóns (captura de pantalla incluída)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Encántame este, úsoo como cabeceira no meu dashboard.

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

## Modelos

**Bubble Card non admite modelos Jinja**, pero os usuarios avanzados poden engadir modelos en JS directamente nos seus [estilos personalizados](#estilo). Por exemplo, isto permite cambiar dinamicamente unha icona, os textos ou as cores dun elemento, mostrar ou agochar un elemento condicionalmente (como un subbotón), ou case calquera cousa baseada nun estado, un atributo e máis.

> [!TIP]  
> Máis información sobre os modelos JS [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). O meu consello é **botar sempre unha ollada á consola do teu navegador** para asegurarte de que todo funciona correctamente.

> [!IMPORTANT]  
> **Todos os modelos que non modifican unha propiedade CSS deben colocarse ao final! Como modificar unha icona, un texto ou calquera elemento.**

#### Variables e funcións dispoñibles

<details>

<summary>Variables</summary>

<br>

Tes acceso a estas variables na maioría das tarxetas:

- `state` devolve o estado da túa `entity` definida.
  
- `entity` devolve a túa entidade definida como `switch.test` neste exemplo.
  
- `icon` pódese usar así para cambiar a icona `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` devolve o estado da `entity` definida do teu primeiro subbotón, `[0]` é o estado do primeiro subbotón, `[1]` o segundo...
  
- `subButtonIcon[0]` pódese usar así para cambiar a icona do primeiro subbotón `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` é a icona do primeiro subbotón, `[1]` a segunda...
  
- `card` devolve o elemento da tarxeta no DOM.
  
- `hass` é unha variable avanzada que che dá aínda máis control, por exemplo podes devolver o estado de `light.kitchen` así `hass.states['light.kitchen'].state` ou un atributo así `hass.states[entity].attributes.brightness`.

- `this` devolve moita información útil sobre a túa configuración e dashboard, úsao só se sabes o que estás a facer.

</details>

<details>

<summary>Funcións</summary>

<br>

Tes acceso a todas as funcións JS globais, pero tamén tes acceso a:

- `getWeatherIcon` pódese usar para devolver unha icona meteorolóxica baseada nun estado que devolve o tempo. Por exemplo, podes facer isto `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` para cambiar a icona do terceiro subbotón coa icona do tempo de hoxe, `.forecast[1]?.condition` é para mañá...

  Terás que crear un sensor de modelo para iso. Isto é o que podes engadir no teu `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` devolve `true` cando se cumpre unha lista de [condicións](#condicións), por exemplo `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` pódese usar para traducir un estado (tamén se pode usar para obter a unidade dun estado, sen ter que engadila manualmente).
- `hass.formatEntityAttributeValue(state, "attribute")` pódese usar para traducir un atributo (tamén se pode usar para obter a unidade dun estado, sen ter que engadila manualmente).

</details>

#### Exemplos

Podes atopar moitos exemplos abaixo, pero tamén podes atopar modelos moi avanzados na miña [páxina de Patreon](https://www.patreon.com/c/Clooos), como un (o meu favorito) que permite ata catro insignias condicionais colocadas ao redor das iconas da tarxeta. Tamén é un bo xeito de aprender sobre todas as posibilidades dos estilos personalizados e modelos de Bubble Card!

<details>
<summary>Exemplos da miña páxina de Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Engadir insignias tipo Home Assistant a calquera tarxeta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Mostrar a data e hora formatadas nun separador sen usar ningunha entidade</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Mostrar o estado dun subbotón en dúas liñas</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalizar etiquetas e iconas dentro dun subbotón de selección</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Engadir un pop-up de lembranza persistente que só aparece cando é necesario</a>
</p>

<br>

</details>

<details>

<summary>Cambiar a cor de fondo dun botón que é vermello cando está <code>off</code> e azul cando está <code>on</code></summary>

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

<summary>Cambiar a cor de fondo dun botón baseándose nunha entidade para a pila de botóns horizontal</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Mostrar/agochar un subbotón condicionalmente</summary>

<br>

Este mostra o primeiro subbotón só cando o meu robot aspirador está atascado.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Este mostra un subbotón cando a batería está por debaixo do 10%. Útil cun subbotón que mostra "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Cambiar unha icona ou icona dun subbotón condicionalmente</summary>

<br>

Este cambia a icona dun botón só cando un robot aspirador está atascado.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Este cambia a icona do primeiro subbotón só cando un robot aspirador está atascado.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Cambiar a cor dunha icona ou icona dun subbotón condicionalmente</summary>

<br>

Este cambia a cor da icona dun botón baseándose no seu estado.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Este cambia a cor da icona dun subbotón baseándose no seu estado. `.bubble-sub-button-1` é o primeiro subbotón, substitúe `1` se queres cambiar outra icona de subbotón.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animar unha icona de ventilador condicionalmente</summary>

<br>

Este rota a icona dun botón cando un ventilador está `on`.
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

<summary>Modelar textos (como o nome ou o estado)</summary>

<br>

Este cambia o nome/estado dun botón por "It's currently sunny" segundo o teu tempo.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ou cando se aplica a subbotóns:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Se queres modelar o estado (`.bubble-state`) non actives `show_state: true`, activa só `show_attribute: true` sen ningún atributo.

</details>

<details>

<summary>Exemplo avanzado: Cambiar a cor dun subbotón cando un pop-up está aberto</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Exemplo avanzado: Modelar o nome dun separador baseado nun estado traducido ao teu idioma</summary>

<br>

Podes usar `hass.formatEntityState(state)` para traducir un estado e `hass.formatEntityAttributeValue(state, "attribute")` para traducir un atributo.

Este cambia o nome e a icona segundo o tempo, "Nuageux" significa "Cloudy" en francés.

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

## Módulos

Os módulos son unha función poderosa que che permite gardar, reutilizar e compartir os teus estilos personalizados e modelos en todas as túas Bubble Cards. En vez de copiar e pegar o mesmo código en varias tarxetas, podes crear un módulo e aplicalo onde o necesites. Isto fai que xestionar o aspecto e o estilo do teu dashboard sexa moito máis doado e eficiente.

Pero esta función é moito máis poderosa ca iso, permíteche engadir funcionalidades reais ti mesmo no editor de Bubble Card, usando todas as opcións de [formulario predeterminado de Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
O selector de obxectos mellorouse para mostrar cambios en tempo real e para admitir atributos correctamente.

Un módulo tamén pode responder ao selector de tarxetas de Home Assistant xunto ás [suxestións de entidades](#suxestións-de-entidades) integradas: usa `suggestions` para as tarxetas que pode describir de antemán, e `suggestions_code` cando teñen que calcularse a partir da túa instalación, por exemplo un pop-up construído con todas as entidades da área á que pertence a entidade escollida. As dúas chaves están documentadas [aquí](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Tamén podes explorar a **Module Store** para atopar e instalar [módulos creados pola comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ou compartir as túas propias creacións!

> [!TIP]
> O código dun módulo funciona exactamente igual que o código na sección `styles` dunha tarxeta. Todas as mesmas variables e funcións da sección [Modelos](#modelos) están dispoñibles.

<br>

### Configuración inicial

> [!IMPORTANT]
> A partir da v3.1.0, Bubble Card Tools é o backend de almacenamento recomendado para os módulos. O método antigo do sensor de modelo aínda funciona para as configuracións existentes, pero os novos módulos e as funcións da Module Store admítense mellor mediante Bubble Card Tools.

A integración Bubble Card Tools activa o Module Editor e a Module Store, e almacena os módulos como ficheiros YAML individuais. Os módulos existentes migran automaticamente.

Os pasos de instalación e configuración explícanse aquí:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### O Module Editor

Podes acceder ao Module Editor desde a configuración de calquera tarxeta, na sección **Módulos**. O editor ofrece dúas pestanas principais:

#### Pestana My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Esta pestana mostra todos os teus módulos instalados e permíteche:

- **Aplicar** módulos existentes á tarxeta actual
- **Crear** un novo módulo desde cero
- **Editar** módulos existentes con vista previa en tempo real
- **Eliminar** módulos que xa non necesitas
- **Buscar** e **ordenar** módulos (alfabético, recentes, activos primeiro)
- **Establecer estado global** para que un módulo se aplique a todas as tarxetas automaticamente
- **Importar/Exportar** módulos para copia de seguranza ou para compartir
- **Escribir suxestións de entidades** no editor de módulos, en **Opcional: suxestións de entidades**, para que o teu módulo se ofreza no selector de tarxetas de Home Assistant. Tanto as regras como as suxestións calculadas compróbanse mentres escribes, un erro alí impide gardar, e a vista previa mostra as tarxetas suxeridas para calquera entidade que escollas

#### Pestana Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Esta pestana mostrará [todos os módulos dispoñibles da comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), e permíteche:

- **Explorar** todos os módulos creados pola comunidade
- **Buscar** e filtrar módulos por nome, compatibilidade ou palabras clave
- **Instalar** módulos cun só clic
- **Actualizar** os módulos instalados cando haxa novas versións dispoñibles

> [!TIP]
> No editor, podes activar módulos non admitidos para probar módulos que aínda non están marcados como compatibles cun tipo de tarxeta determinado.

<br>

### Como usar os módulos

#### Crear un novo módulo

<details>

<summary>Clic para expandir</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Vai ao editor de calquera tarxeta e despregue a sección **Módulos**.
2. Fai clic en **Create new module**.
3. Completa a información do módulo.
4. Escribe o teu código CSS e/ou modelo JavaScript no editor **Code**.
5. (Opcional) Crea unha interface de configuración personalizada na sección **Editor** (como o selector de cores da captura de pantalla de arriba, documentación completa dispoñible [aquí](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Opcional) Escribe as túas **Suxestións de entidades** para que o teu módulo se ofreza no selector de tarxetas de Home Assistant. O panel comproba o que escribes mentres tecleas, e a súa vista previa mostra as propias tarxetas suxeridas para a entidade que ti queiras.
7. Fai clic en **Save**.

O teu módulo xa está dispoñible para ser usado en calquera das túas tarxetas!

<br>

</details>

#### Aplicar un módulo a unha tarxeta

<details>

<summary>Clic para expandir</summary>

<br>

- **Mediante o editor:**

  - Vai ao editor da tarxeta á que queres aplicar o módulo.
  - Despraga a sección **Módulos**.
  - Fai clic no módulo que queres aplicar da lista.
  - En "Apply to", fai clic en "This card". O módulo xa está activo. Podes aplicar varios módulos á mesma tarxeta.

- **Mediante YAML:**

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

#### Aplicar un módulo globalmente

<details>

<summary>Clic para expandir</summary>

<br>

Podes configurar un módulo para que se aplique automaticamente a todas as Bubble Cards:

**Isto non está dispoñible para módulos con editor, xa que estes requiren unha configuración específica para funcionar.**

- **Mediante o editor:**

  - No editor de módulos, busca o teu módulo na pestana **My Modules**.
  - Activa o botón **All cards** ao lado do nome do módulo.
  - O módulo aplicarase agora a todas as tarxetas automaticamente.
 
- **Mediante YAML:**

  Na configuración YAML do teu módulo (en `bubble-modules.yaml`), engade simplemente `is_global: true`.

<br>

</details>

#### Excluír unha única tarxeta dun módulo global

<details>

<summary>Clic para expandir</summary>

<br>

Se tes un módulo global pero queres excluílo dunha tarxeta específica:

- **Mediante o editor:**
  
  - Na sección **Módulos** da tarxeta, verás os módulos globais listados.
  - Fai clic nun módulo global, desactiva "This card" para excluílo desta tarxeta específica.

- **Mediante YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Compartir o teu módulo na Module Store

<details>

<summary>Clic para expandir</summary>

<br>

Para compartir o teu módulo na Module Store, no Module Editor, ao final en "Export Module", fai clic en "Copy for GitHub" e pega o contido nunha nova discusión na categoría [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Edita a descrición** (se é necesario), **o exemplo** (para usuarios de YAML), e lembra **incluír polo menos unha captura de pantalla** para a Module Store.

**O teu módulo estará dispoñible xusto despois diso** (tras unha actualización da Store), así que comproba dúas veces que todo está correctamente escrito e que o módulo funciona como se espera. Por suposto, podes editar/actualizar o módulo despois de compartilo.

<br>

</details>

#### Xestión de versións

<details>

<summary>Clic para expandir</summary>

<br>

A Module Store comproba automaticamente se hai actualizacións para os módulos instalados. Cando hai actualizacións dispoñibles:

1. Verás un indicador de actualización na pestana **Module Store**.
2. Fai clic en **Update** nos módulos con actualizacións dispoñibles.
3. Confirma a actualización na Module Store.

<br>

</details>

#### Definir os tipos de tarxeta admitidos

<details>

<summary>Clic para expandir</summary>

<br>

Algúns módulos poden non ser compatibles con todos os tipos de tarxeta. Podes especificar con que tarxetas é compatible un módulo.  
Se queres que un módulo sexa compatible con **todas as tarxetas**, simplemente omite o campo `supported` (ou usa a opción **All cards** no editor).

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

### Exemplos

<details>
<summary>Módulo básico de estilo</summary>

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
<summary>Módulo con configuración personalizada</summary>

<br>

Este módulo está dispoñible [aquí](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Podes atopar máis exemplos na Module Store, ou [aquí](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localización

Bubble Card fala a túa lingua. O seu editor está traducido ás 64 linguas que admite Home Assistant, e alí onde Home Assistant xa ten unha palabra para algo, reutilízase a súa propia redacción, para que leas os mesmos termos nas dúas interfaces.

Na parte inferior do editor, ao lado do número de versión, un interruptor **Automático** segue a lingua do teu Home Assistant. Desactívao e todo o editor volve ao inglés, algo práctico para seguir un titorial ou para informar dun problema. A túa escolla lémbrase no teu navegador.

Esta documentación tamén está traducida, [a 62 linguas](languages.md), todas agás o inglés británico, que le o orixinal. Esas páxinas están abertas a todo o mundo, así que unha redacción que non coincide co teu propio Home Assistant pódese corrixir nun par de clics. A versión inglesa segue a ser a referencia para o contido en si.

<br>

---

<br>

## Axuda

Non dubides en abrir unha issue se algo non funciona como esperabas. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Tes preguntas ou opinións sobre Bubble Card? Queres compartir os teus dashboards ou descubrimentos? Podes ir ao foro de Home Assistant, ao subreddit de Bubble Card ou á sección de GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Colaborar

As colaboracións son benvidas! Xa sexan correccións de erros, novas funcións, traducións ou melloras na documentación, non dubides en abrir un pull request.

Antes de comezar, le a [guía para desenvolvedores](DEVELOPERS.md), que explica como configurar o teu ambiente local, construír o proxecto e probar os teus cambios.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Doar

Dedico a maior parte do meu tempo libre a facer que este proxecto sexa o mellor posible. Así que se aprecias o meu traballo, calquera doazón sería un xeito estupendo de amosar o teu apoio 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Grazas a todos polo voso apoio, todos vós sodes a miña maior motivación!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
