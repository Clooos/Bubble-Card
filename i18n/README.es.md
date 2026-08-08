<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Esta página es una traducción automática. En caso de duda, prevalece la [documentación original en inglés](../README.md). ¿Alguna frase suena mal? Toda ayuda es bienvenida, y [corregir esta página](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.es.md) solo lleva un minuto: GitHub se encarga del fork y de la pull request. ¡Gracias de antemano! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Leer esto en otro idioma](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card es una colección de tarjetas minimalista y personalizable para Home Assistant, con pop-ups modernos y un Module Store integrado con más de 100 módulos creados por la comunidad.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Índice

**[`Instalación`](#instalación)**  **[`Configuración`](#configuración)**  **[`Sugerencias de entidad`](#sugerencias-de-entidad)**  **[`Pop-up`](#pop-up)**  **[`Pila de botones horizontal`](#pila-de-botones-horizontal)**  **[`Botón`](#botón)**  **[`Reproductor multimedia`](#reproductor-multimedia)**  **[`Persiana`](#persiana)**  **[`Selector`](#selector)**  **[`Clima`](#clima)**  **[`Calendario`](#calendario)**  **[`Separador`](#separador)**  **[`Columna vacía`](#columna-vacía)**  **[`Solo sub-botones`](#solo-sub-botones)**  **[`Sub-botones`](#sub-botones)**  **[`Diseños de tarjeta`](#diseños-de-tarjeta)**  **[`Condiciones`](#condiciones)**  **[`Acciones`](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado)**  **[`Estilos`](#estilos)**  **[`Plantillas`](#plantillas)**  **[`Módulos`](#módulos)**  **[`Localización`](#localización)**  **[`Ayuda`](#ayuda)**  **[`Contribuir`](#contribuir)**  **[`Donaciones`](#donaciones)**

<br>

## Instalación

**Versión mínima de Home Assistant compatible:** 2023.9.0

<details>

<summary>Sin HACS</summary>

<br>

1. Descarga `bubble-card.zip` de la [última versión](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Descomprímelo en tu carpeta `<config>/www`, deberías obtener `bubble-card.js` y una carpeta `translations` junto a él (esa carpeta contiene los diccionarios del editor, sin ella el editor se queda en inglés)
3. En tu dashboard, haz clic en el icono de la esquina superior derecha y luego en `Editar panel de control`
4. Haz clic de nuevo en ese icono y luego en `Gestionar recursos`
5. Haz clic en `Añadir recurso`
6. Copia y pega esto: `/local/bubble-card.js?v=1`
7. Haz clic en `Módulo JavaScript` y luego en `Crear`
8. Vuelve atrás y actualiza tu página
9. Ahora puedes hacer clic en `Añadir tarjeta` en la esquina inferior derecha y buscar `Bubble Card`
10. Después de cada actualización del archivo tendrás que editar `/local/bubble-card.js?v=1` y cambiar la versión por cualquier número superior

Si no funciona, simplemente intenta borrar la caché de tu navegador.

</details>

<details>

<summary>Con HACS (recomendado)</summary>

<br>

Este método te permite recibir las actualizaciones directamente en la Home Assistant Community Store

1. Si HACS aún no está instalado, descárgalo siguiendo las instrucciones de [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Realiza la configuración inicial de HACS siguiendo las instrucciones de [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. En tu barra lateral, ve a "HACS"
4. Busca "Bubble Card" o haz clic en el botón azul de abajo
5. Haz clic en "Descargar"
6. Vuelve a tu dashboard y haz clic en el icono de la esquina superior derecha y luego en `Editar panel de control`
7. Ahora puedes hacer clic en `Añadir tarjeta` en la esquina inferior derecha y buscar `Bubble Card`

Si no funciona, intenta borrar la caché de tu navegador/aplicación (en todos tus dispositivos si es necesario).

#### Vídeos

También puedes echar un vistazo a mi canal de YouTube para ver vídeos paso a paso.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Abrir Bubble Card en la Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configuración

Todas las opciones pueden configurarse en el editor de Home Assistant. Pero puedes encontrar más detalles y el YAML en la documentación de abajo.

<details>

<summary><b>Opciones principales (YAML + descripción)</b></summary>

| Nombre | Tipo | Requisito | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `type` | string | **Obligatorio** | `custom:bubble-card` | Tipo de la tarjeta |
| `card_type` | string | **Obligatorio** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` o `sub-buttons` | Tipo de la Bubble Card, ver más abajo |
| `styles` | object list | Opcional | Cualquier hoja de estilos CSS | Te permite personalizar el CSS de tu Bubble Card, ver [estilos](#estilos) |

</details>

<details>

<summary><b>Variables CSS globales (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radio de borde para todos los elementos compatibles |
| `--bubble-main-background-color` | `color` | Color de fondo principal para todos los elementos compatibles |
| `--bubble-secondary-background-color` | `color` | Color de fondo secundario para todos los elementos compatibles |
| `--bubble-accent-color` | `color` | Color de acento para todos los elementos compatibles |
| `--bubble-icon-border-radius` | `px` | Radio de borde del icono para todos los elementos compatibles |
| `--bubble-icon-background-color` | `color` | Color de fondo del icono para todos los elementos compatibles |
| `--bubble-sub-button-border-radius` | `px` | Radio de borde para todos los sub-botones |
| `--bubble-sub-button-background-color` | `color` | Color de fondo para todos los sub-botones |
| `--bubble-box-shadow` | ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra para todos los elementos compatibles |
| `--bubble-border` | ver [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Borde para todas las tarjetas compatibles |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Echa un vistazo a este [vídeo](https://www.youtube.com/watch?v=0hSQOlBxKKI) para descubrir Bubble Card y sus posibilidades.** Mi canal de YouTube es bastante nuevo y se centra en tutoriales sobre Home Assistant y Bubble Card. No dudes en suscribirte para ayudar a aumentar la visibilidad de mi canal. ¡Gracias de antemano!

<br>

---

<br>

## Sugerencias de entidad

Desde Home Assistant 2026.6, elegir una entidad en el selector de tarjetas te ofrece unas cuantas tarjetas ya hechas, y Bubble Card añade sus propias recetas a esa lista. Elige una luz y se te ofrece una tarjeta con un control deslizante de brillo, además de una variante con temperatura de color, otra con color y otra con saturación cuando tu luz las admite. Elige una persiana y obtienes el control deslizante de su posición, elige un reproductor multimedia y obtienes también una variante con su lista de fuentes, elige un aspirador y obtienes sus botones de inicio, pausa y vuelta a la base. Cada sugerencia es una configuración normal de Bubble Card mostrada como una vista previa en directo, así que puedes coger la más cercana y seguir editándola como siempre.

Lo que se te ofrece depende de lo que tu entidad puede hacer realmente: una luz sin canal de brillo recibe un interruptor en lugar de un control deslizante, una persiana que no puede inclinarse no recibe variante de inclinación, y una entidad de clima recibe sus modos preestablecidos solo cuando tiene alguno. Las entradas clásicas siguen debajo de las sugerencias de Bubble Card cuando corresponden: la tarjeta dedicada a ese tipo de entidad, un botón sencillo y un control deslizante.

> [!TIP]
> Los módulos pueden añadir sus propias sugerencias a esa lista, ver [módulos](#módulos).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Esta tarjeta te permite crear un pop-up con cualquier contenido. Cada pop-up está **oculto por defecto** y puede abrirse apuntando a su enlace (p. ej. `'#pop-up-name'`), con cualquier tarjeta que admita la [acción](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) `navigate`, o con la [pila de botones horizontal](#pila-de-botones-horizontal) que está incluida.

> [!TIP]
> ### Disparador del pop-up 
> Esta función te permite abrir un pop-up según el estado de cualquier entidad, por ejemplo, puedes abrir un pop-up de "Seguridad" con una cámara cuando haya una persona delante de tu casa. También puedes crear un ayudante de tipo interruptor (input_boolean) y activar su apertura/cierre en una automatización.
> <details>
> <summary>Abrir un pop-up cuando un <code>binary_sensor</code> está <code>on</code></summary>
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
> ### Diferentes formas de cerrar un pop-up 
> Hay muchas formas de cerrar un pop-up. Por ejemplo, puedes deslizar desde la cabecera del pop-up hacia abajo, hacer un deslizamiento largo dentro del pop-up hacia abajo, pulsar Escape en escritorio, eliminar el hash de la URL o simplemente pulsar el botón de cerrar.
>


### Opciones del pop-up

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Requisito | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obligatorio** | Cualquier hash único (p. ej. `'#kitchen'`) con ' ' | Así es como abrirás tu pop-up |
| `popup_style` | string | Opcional | `bubble` (por defecto) o `classic` | Define el estilo visual del pop-up |
| `popup_mode` | string | Opcional | `default` (por defecto), `fit-content`, `centered` o `adaptive-dialog` | Define el modo de diseño del pop-up |
| `with_bottom_offset` | boolean | Opcional | `true` o `false` (por defecto) | Solo se usa con `popup_mode: fit-content` o `adaptive-dialog`. Aplica un offset inferior en el móvil, útil cuando tu dashboard incluye una tarjeta en modo pie de página. |
| `full_width_on_mobile` | boolean | Opcional | `true` o `false` (por defecto) | Solo se usa con `popup_mode: centered`. Expande el pop-up a todo el ancho de la pantalla en el móvil, útil en pantallas más pequeñas. |
| `performance_mode` | string | Opcional | `default` (por defecto) o `performance` | Optimiza la animación de apertura del pop-up. `performance` retrasa ligeramente el renderizado del contenido y el desenfoque del fondo, y también desactiva el desenfoque del backdrop si está definido. |
| `auto_close` | string | Opcional | Un tiempo en milisegundos (p. ej. `10000` para 10 s) | Cierra automáticamente el pop-up tras ese tiempo |
| `close_on_click` | boolean | Opcional | `true` o `false` (por defecto) | Cierra automáticamente el pop-up tras cualquier interacción |
| `close_by_clicking_outside` | boolean | Opcional | `true` (por defecto) o `false` | Cierra el pop-up al hacer clic fuera de él |
| `width_desktop` | string | Opcional | Cualquier valor CSS | Ancho en escritorio (`100%` por defecto en el móvil) |
| `margin` | string | Opcional | Cualquier valor CSS | Usa esto **solo** si tu pop-up no está bien centrado en el móvil (p. ej. `13px`) |
| `margin_top_mobile` | string | Opcional | Cualquier valor CSS | Margen superior en el móvil (p. ej. `-56px` si tu cabecera está oculta) |
| `margin_top_desktop` | string | Opcional | Cualquier valor CSS | Margen superior en escritorio (p. ej. `50vh` para un pop-up a media altura o `calc(100vh - 400px)` para una altura fija de `400px`) |
| `bg_color` | string | Opcional | Cualquier valor hex, rgb o rgba | El color de fondo de tu pop-up (p. ej. `#ffffff` para un fondo blanco) |
| `bg_opacity` | string | Opcional | Cualquier valor de `0` a `100` | La opacidad del fondo de tu pop-up (p. ej. `100` para ninguna transparencia) |
| `bg_blur` | string | Opcional | Cualquier valor de `0` a `100` | El efecto de desenfoque del fondo de tu pop-up, **esto solo funciona si `bg_opacity` no está en `100`** (p. ej. `0` para ningún desenfoque)|
| `shadow_opacity` | string | Opcional | Cualquier valor de `0` a `100` | La opacidad de la sombra de tu pop-up (p. ej. `0` para ocultarla) |
| `hide_backdrop` | boolean | Opcional | `true` o `false` (por defecto) | Actívalo en el primer pop-up de tu dashboard principal para desactivar el backdrop en todos los pop-ups. |
| `background_update` | boolean | Opcional | `true` o `false` (por defecto) | Actualiza el contenido del pop-up en segundo plano (no recomendado) |
| `trigger` | object o list | Opcional | Ver [condiciones](#condiciones) | Abre este pop-up cuando se cumplen las condiciones |
| `trigger_entity` | string | Opcional | Cualquier entidad | Abre este pop-up según el estado de cualquier entidad, la forma simple de `trigger` |
| `trigger_state` | string | Opcional (**Obligatorio** si `trigger_entity` está definido) | Cualquier estado de entidad | Estado de la entidad para abrir el pop-up |
| `trigger_close` | boolean | Opcional | `true` (por defecto) o `false` | Cierra el pop-up cuando las condiciones dejan de cumplirse. En cambio, el valor por defecto es `false` cuando usas la pareja más antigua `trigger_entity` y `trigger_state` |
| `open_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Activa una acción cuando el pop-up se está abriendo |
| `close_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Activa una acción cuando el pop-up se está cerrando |
| `show_header` | boolean | Opcional | `true` (por defecto) o `false` | Muestra/oculta por completo la cabecera del pop-up |
| `show_previous_button` | boolean | Opcional | `true` o `false` (por defecto) | Muestra un botón de volver junto al botón de cerrar y navega de vuelta al pop-up anterior cuando esté disponible |
| `show_close_button` | boolean | Opcional | `true` (por defecto) o `false` | Muestra u oculta el botón de cerrar manteniendo visible el resto de la cabecera |
| `buttons_position` | string | Opcional | `right` (por defecto) o `left` | Posición de los botones de cerrar y de volver en la cabecera |
| `cards` | list | Opcional | Cualquier Bubble Card, tarjeta de Home Assistant o tarjeta personalizada | Define el contenido de tu pop-up. Ver el ejemplo de pop-up más abajo. |
| También tienes acceso a [todos los ajustes del botón](#botón) para la cabecera del pop-up. | | Opcional | | Si no se define, no se mostrará ninguna cabecera |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radio de borde para el pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Color de fondo principal para los elementos compatibles del pop-up |
| `--bubble-pop-up-background-color` | `color` | Color de fondo del pop-up |
| `--bubble-backdrop-background-color` | `color` | Color de fondo para el backdrop |
| También tienes acceso a [todas las variables CSS del botón](#opciones-del-botón) para la cabecera del pop-up. | | |

</details>


### Formato de pop-up independiente (v3.2.0+)

Desde la v3.2.0, los pop-ups usan un nuevo formato independiente en el que las tarjetas de contenido se definen directamente dentro del pop-up con la opción `cards`. Esto ofrece un mejor rendimiento y una nueva experiencia de edición basada en secciones con arrastrar y soltar.


#### Ejemplos

<details>

<summary>Un pop-up (formato independiente)</summary>

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

<summary>Un botón para abrir el pop-up</summary>

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

## Pila de botones horizontal

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Esta tarjeta es una buena compañera de la tarjeta pop-up, ya que te permite abrir los pop-ups correspondientes. También te permite abrir cualquier página de tu dashboard. Además, puedes añadir tus sensores de movimiento/ocupación para que el orden de los botones se adapte según la habitación en la que acabas de entrar. Esta tarjeta se puede desplazar, permanece visible y actúa como pie de página.

> [!IMPORTANT]  
> Esta tarjeta tiene que ser la última de tu vista (después de todas las tarjetas y pop-ups). No puede estar dentro de ninguna pila.

### Opciones de la pila de botones horizontal

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Obligatoriedad | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obligatorio** | El hash del pop-up (p. ej. `'#kitchen'`) con ' ' o cualquier enlace | Un enlace que abrir |
| `1_name` | string | Opcional | Cualquier cadena de texto | Un nombre para tu botón |
| `1_icon` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu botón |
| `1_entity` | string | Opcional | Cualquier luz o grupo de luces | Muestra el color de esa luz en el fondo |
| `1_pir_sensor` | string | Opcional | Cualquier sensor binario | Al menos un sensor PIR o más para `auto_order`; de hecho, también funciona con cualquier tipo de entidad, por ejemplo puedes añadir grupos de luces y el orden cambiará según los últimos cambios de estado. |
| `auto_order` | boolean | Opcional | `true` o `false` (predeterminado) | Cambia el orden de los botones según el momento del último cambio de los `_pir_sensor`, **debe ser `false` si no tienes ningún `_pir_sensor` en tu configuración** |
| `margin` | string | Opcional | Cualquier valor CSS | Usa esto **solo** si tu `horizontal-buttons-stack` no está bien centrada en el móvil (p. ej. `13px`) |
| `width_desktop` | string | Opcional | Cualquier valor CSS | Ancho en escritorio (`100%` por defecto en el móvil) |
| `is_sidebar_hidden` | boolean | Opcional | `true` o `false` (predeterminado) | Corrige la posición de la pila de botones horizontal si la barra lateral está oculta en el escritorio (solo si has hecho una modificación para ocultarla tú mismo) |
| `rise_animation` | boolean | Opcional | `true` (predeterminado) o `false` | Ponlo en `false` para desactivar la animación que se activa una vez cargada la página |
| `highlight_current_view` | boolean | Opcional | `true` o `false` (predeterminado) | Resalta el hash / la vista actual con una animación suave |
| `hide_gradient` | boolean | Opcional | `true` o `false` (predeterminado) | Ponlo en `false` para ocultar el degradado |

> [!IMPORTANT]  
> Las variables que empiezan por un número definen tus botones, solo tienes que cambiar ese número para añadir más botones (ver el ejemplo de abajo).

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Radio del borde de los botones de la pila de botones horizontal |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Color de fondo de los botones de la pila de botones horizontal |

</details>


#### Ejemplo

<details>

<summary>Una pila de botones horizontal que se reorganiza según los sensores de ocupación</summary>

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

Esta tarjeta es muy versátil. Se puede usar como botón de **interruptor**, de **control deslizante**, de **estado** o de **nombre/texto**.

> [!TIP]
> ### ¿Cuáles son las diferencias entre todos los tipos de botón?
>
> - **Botón de interruptor:** Es el tipo de botón predeterminado. De forma predeterminada, alterna una entidad y su color de fondo cambia según el estado de la entidad o el color de una luz. Puedes cambiar su acción en la sección **Acción de pulsación en la tarjeta**.
>
> - **Botón de control deslizante:** Este tipo de botón te permite controlar entidades con rangos ajustables. Es ideal para atenuar luces, y su color de relleno se adaptará al color de la luz. También puedes usarlo para mostrar valores, como el nivel de una batería.
>   Entidades compatibles con los controles deslizantes:
>   - Luz (brillo)
>   - Reproductor multimedia (volumen)
>   - Persiana (posición)
>   - Ventilador (porcentaje)
>   - Clima (temperatura)
>   - Input number y number (valor)
>   - Sensor de batería (porcentaje, solo lectura)
>
>   También puedes usar cualquier entidad con un estado numérico desactivando el filtro de entidades en **Ajustes del control deslizante** y definiendo después los valores `min` y `max`. Esta opción es de solo lectura.
>
> - **Botón de estado:** Perfecto para mostrar información de un sensor o de cualquier entidad. Cuando lo pulsas, muestra el panel "Más información" de la entidad. Su color de fondo no cambia.
>
> - **Botón de nombre/texto:** El único tipo de botón que no necesita una entidad. Te permite mostrar un texto corto, un nombre o un título. También puedes añadirle acciones. Su color de fondo no cambia.

### Opciones del botón

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Obligatoriedad | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatorio** | Cualquier entidad | Una entidad que controlar |
| `button_type` | string | Opcional | `switch` (predeterminado), `slider`, `state` o `name` | El comportamiento de tu botón |
| `name` | string | Opcional | Cualquier cadena de texto | Un nombre para tu botón; si no se define, se mostrará el nombre de la entidad |
| `icon` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu botón; si no se define, se mostrará el icono de la entidad o la `entity-picture` |
| `force_icon` | boolean | Opcional | `true` o `false` (predeterminado) | Da prioridad al icono en lugar de la `entity-picture` |
| `use_accent_color` | boolean | Opcional (`false` por defecto) | **Solo para luces.** Usa el color de acento del tema en lugar del color de la luz.                         |
| `show_state` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra u oculta el estado de tu `entity` |
| `show_name` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el nombre |
| `show_icon` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el icono |
| `show_last_changed` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra el momento del último cambio de tu `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra el momento de la última actualización de tu `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra un atributo de tu `entity` debajo de su `name` |
| `attribute` | string | Opcional (obligatorio si `show_attribute` está en `true`) | Un atributo de tu `entity` | El atributo a mostrar (p. ej. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (predeterminado) o `false` | Permite que el texto se desplace cuando el contenido supera el tamaño de su contenedor |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, ver abajo | Permite cambiar las acciones predeterminadas al pulsar el botón. |
| `tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al pulsar el icono; si no se define, se usará `more-info` |
| `double_tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al pulsar dos veces el icono; si no se define, se usará `none` |
| `hold_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al mantener pulsado el icono; si no se define, se usará `more-info` |
| `card_layout` | string | Opcional | `normal` (predeterminado si no está en una vista de secciones), `large` (predeterminado si está en una vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño visual de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |
| `sub_button` | object | Opcional | Ver [sub-botones](#sub-botones) | Añade botones personalizados fijos a la derecha |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Color de fondo principal de los elementos compatibles del botón |
| `--bubble-button-border-radius` | `px` | Radio del borde del botón |
| `--bubble-button-icon-border-radius` | `px` | Radio del borde del contenedor del icono del botón |
| `--bubble-button-icon-background-color` | `color` | Color de fondo del contenedor del icono del botón |
| `--bubble-light-white-color` | `color` | Reemplaza el color blanco predeterminado de los botones/controles deslizantes de luz |
| `--bubble-light-color` | `color` | Reemplaza el color de los botones/controles deslizantes de luz (incluso luces RGB) |
| `--bubble-button-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra del botón |

</details>

Estas opciones solo están disponibles cuando `button_type` está en `slider`.

<details>

<summary><b>Opciones del control deslizante (YAML + descripciones)</b></summary>

| Nombre                  | Tipo    | Obligatoriedad                     | Descripción                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opcional                        | El valor mínimo del control deslizante. Para controles deslizantes personalizados.                                                    |
| `max_value`             | number  | Opcional                        | El valor máximo del control deslizante. Para controles deslizantes personalizados.                                                    |
| `step`                  | number  | Opcional                        | El valor del paso del control deslizante.                                                                           |
| `tap_to_slide`          | boolean | Opcional (`false` por defecto)      | Activa el comportamiento anterior del control deslizante, en el que pulsas para activarlo en lugar de mantenerlo pulsado.        |
| `relative_slide`        | boolean | Opcional (`false` por defecto)     | Actualiza el valor con respecto al valor inicial, en lugar del punto de contacto inicial.                      |
| `read_only_slider`      | boolean | Opcional (`false` por defecto)      | Hace que el control deslizante sea de solo lectura. Se activa automáticamente para algunas entidades como los sensores.                        |
| `slider_live_update`    | boolean | Opcional (`false` por defecto)      | El estado de la entidad se actualiza mientras se desliza. **Esta función no se recomienda para todas las entidades.**        |
| `slider_fill_orientation` | string | Opcional | `left`, `right`, `top` o `bottom` | Cambia la dirección del relleno del control deslizante. De izquierda a derecha cuando no se define, reflejada en los [idiomas que se escriben de derecha a izquierda](#localización) |
| `slider_value_position` | string | Opcional | `right`, `left`, `center` o `hidden` | Posición del valor mostrado. A la derecha cuando no se define, y a la izquierda en los [idiomas que se escriben de derecha a izquierda](#localización) |
| `invert_slider_value` | boolean | Opcional (`false` por defecto) | Invierte la dirección del control deslizante (100% de relleno equivale al mínimo). No disponible para los controles deslizantes de color. |
| `light_slider_type` | string | Opcional | `brightness` (predeterminado), `hue`, `saturation`, `white_temp` | **Solo para luces.** Elige el modo del control deslizante |
| `cover_slider_type` | string | Opcional | `position` (predeterminado), `tilt_position` | **Solo para persianas.** Elige el modo del control deslizante (posición o inclinación) |
| `hue_force_saturation` | boolean | Opcional (`false` por defecto) | **Solo para luces (modo Tono).** Fuerza la saturación al ajustar el tono |
| `hue_force_saturation_value` | number | Opcional (`100` por defecto) | **Solo para luces (modo Tono).** Valor de saturación forzado (0-100) |
| `use_accent_color` | boolean | Opcional (`false` por defecto) | **Solo para luces (modo Brillo).** Usa el color de acento del tema en lugar del color de la luz |
| `allow_light_slider_to_0` | boolean | Opcional (`false` por defecto)    | **Solo para luces.** Permite que el control deslizante llegue al 0%, lo que apaga la luz. No disponible con `tap_to_slide`. |
| `light_transition`      | boolean | Opcional (`false` por defecto)      | **Solo para luces.** Activa transiciones suaves de brillo para las luces compatibles.                           |
| `light_transition_time` | number  | Opcional (`500` por defecto)        | **Solo para luces.** El tiempo de transición en milisegundos. Requiere `light_transition: true`.            |

</details>

#### Ejemplos

<details>

<summary>Un botón de control deslizante que puede controlar el brillo de una luz</summary>

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

<summary>Un botón con más opciones</summary>

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

## Reproductor multimedia

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Esta tarjeta te permite controlar una entidad de reproductor multimedia.

### Opciones del reproductor multimedia

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Obligatoriedad | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatorio** | Cualquier reproductor multimedia | El reproductor multimedia que controlar |
| `name` | string | Opcional | Cualquier cadena de texto | Un nombre para tu reproductor multimedia; si no se define, se mostrará el nombre de la entidad |
| `icon` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu reproductor multimedia; si no se define, se mostrará el icono de la entidad o la `entity-picture` |
| `force_icon` | boolean | Opcional | `true` o `false` (predeterminado) | Da prioridad al icono en lugar de la `entity-picture` |
| `show_state` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra u oculta el estado de tu `entity` |
| `show_name` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el nombre |
| `show_icon` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el icono |
| `show_last_changed` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra el momento del último cambio de tu `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra el momento de la última actualización de tu `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra un atributo de tu `entity` debajo de su `name` |
| `attribute` | string | Opcional (obligatorio si `show_attribute` está en `true`) | Un atributo de tu `entity` | El atributo a mostrar (p. ej. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (predeterminado) o `false` | Permite que el texto se desplace cuando el contenido supera el tamaño de su contenedor |
| `min_volume` | number | Opcional | Cualquier número | El valor mínimo del control deslizante de volumen. |
| `max_volume` | number | Opcional | Cualquier número | El valor máximo del control deslizante de volumen. |
| `cover_background` | boolean | Opcional | `true` o `false` (predeterminado) | Usa la carátula difuminada como fondo de la tarjeta. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Permite cambiar las acciones predeterminadas al pulsar el botón. |
| `tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al pulsar el icono; si no se define, se usará `more-info`. |
| `double_tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al pulsar dos veces el icono; si no se define, se usará `none`. |
| `hold_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al mantener pulsado el icono; si no se define, se usará `more-info`. |
| `main_buttons_position` | string | Opcional | `default` o `bottom` | Mueve los botones de acción de la carátula a la parte inferior (fija) |
| `main_buttons_full_width` | boolean | Opcional | `true` o `false` | Hace que los botones de acción inferiores ocupen todo el ancho (predeterminado: `true` cuando la posición es `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (predeterminado), `center`, `start`, `space-between` | Alineación de los botones de acción inferiores cuando no ocupan todo el ancho |
| `card_layout` | string | Opcional | `normal` (predeterminado si no está en una vista de secciones), `large` (predeterminado si está en una vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño visual de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |
| `sub_button` | object | Opcional | Ver [sub-botones](#sub-botones) | Añade botones personalizados fijos a la derecha |
| `hide` | object | Opcional | Ver abajo | Oculta botones de la tarjeta |

#### Opciones de ocultación

| Nombre | Tipo | Obligatoriedad | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opcional | `true` o `false` (predeterminado) | Oculta el botón de reproducir/pausar |
| `volume_button` | boolean | Opcional | `true` o `false` (predeterminado) | Oculta el botón de volumen |
| `previous_button` | boolean | Opcional | `true` o `false` (predeterminado) | Oculta el botón de anterior |
| `next_button` | boolean | Opcional | `true` o `false` (predeterminado) | Oculta el botón de siguiente |
| `power_button` | boolean | Opcional | `true` o `false` (predeterminado) | Oculta el botón de encendido |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Color de fondo principal del reproductor multimedia |
| `--bubble-media-player-border-radius` | `px` | Radio del borde del reproductor multimedia |
| `--bubble-media-player-buttons-border-radius` | `px` | Radio del borde de los botones del reproductor multimedia |
| `--bubble-media-player-slider-background-color` | `color` | Color de fondo del control deslizante de volumen |
| `--bubble-media-player-icon-border-radius` | `px` | Radio del borde del contenedor del icono del reproductor multimedia |
| `--bubble-media-player-icon-background-color` | `color` | Color de fondo del contenedor del icono del reproductor multimedia |
| `--bubble-media-player-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra del reproductor multimedia |

</details>


#### Ejemplos

<details>

<summary>Un reproductor multimedia con todas las opciones</summary>

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

## Persiana

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Esta tarjeta te permite controlar tus entidades `cover`.

### Opciones de persiana

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Requisito | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatorio** | Cualquier persiana | Una persiana a controlar |
| `name` | string | Opcional | Cualquier cadena | Un nombre para tu persiana, si no se define se mostrará el nombre de la entidad |
| `force_icon` | boolean | Opcional | `true` o `false` (predeterminado) | Prioriza el icono sobre la `entity-picture` |
| `show_state` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra u oculta el estado de tu `entity` |
| `show_name` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el nombre |
| `show_icon` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el icono |
| `show_last_changed` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra la hora del último cambio de tu `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra la hora de la última actualización de tu `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra un atributo de tu `entity` debajo de su `name` |
| `attribute` | string | Opcional (obligatorio si `show_attribute` está definido en `true`) | Un atributo de tu `entity` | El atributo a mostrar (p. ej. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (predeterminado) o `false` | Permite que el texto se desplace cuando el contenido supera el tamaño de su contenedor |
| `icon_open` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu persiana abierta, si no se define se mostrará el icono predeterminado de persiana abierta |
| `icon_close` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu persiana cerrada, si no se define se mostrará el icono predeterminado de persiana cerrada |
| `icon_up` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu botón de abrir la persiana, si no se define se mostrará el icono predeterminado de persiana abierta |
| `icon_down` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu botón de cerrar la persiana, si no se define se mostrará el icono predeterminado de persiana cerrada |
| `open_service` | string | Opcional | Cualquier servicio o script | Un servicio para abrir tu persiana, `cover.open_cover` de forma predeterminada |
| `stop_service` | string | Opcional | Cualquier servicio o script | Un servicio para detener tu persiana, `cover.stop_cover` de forma predeterminada |
| `close_service` | string | Opcional | Cualquier servicio o script | Un servicio para cerrar tu persiana, `cover.close_cover` de forma predeterminada |
| `tilt_buttons` | string | Opcional | `top` (predeterminado), `bottom`, `left`, `right`, `hidden` | Posición de los botones de control de inclinación (solo se muestran si la persiana admite inclinación) |
| `open_tilt_service` | string | Opcional | Cualquier servicio o script | Un servicio para abrir la inclinación, `cover.open_cover_tilt` de forma predeterminada |

| `close_tilt_service` | string | Opcional | Cualquier servicio o script | Un servicio para cerrar la inclinación, `cover.close_cover_tilt` de forma predeterminada |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Permite cambiar las acciones predeterminadas al hacer clic en el botón. |
| `tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer clic en el icono, si no se define, se usará `more-info`. |
| `double_tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer doble clic en el icono, si no se define, se usará `none`. |
| `hold_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al mantener pulsado el icono, si no se define, se usará `more-info`. |
| `main_buttons_position` | string | Opcional | `default` o `bottom` | Mueve los controles a la parte inferior (fijos) |
| `main_buttons_full_width` | boolean | Opcional | `true` o `false` | Hace que los controles inferiores ocupen todo el ancho (predeterminado: `true` cuando la posición es `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (predeterminado), `center`, `start`, `space-between` | Alineación de los controles inferiores cuando no ocupan todo el ancho |
| `card_layout` | string | Opcional | `normal` (predeterminado si no está en una vista de secciones), `large` (predeterminado si está en una vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |
| `sub_button` | object | Opcional | Ver [sub-botones](#sub-botones) | Añade botones personalizados fijos a la derecha |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Color de fondo principal para los elementos compatibles de la tarjeta de persiana |
| `--bubble-cover-border-radius` | `px` | Radio de borde de la tarjeta de persiana |
| `--bubble-cover-icon-border-radius` | `px` | Radio de borde del contenedor del icono de la tarjeta de persiana |
| `--bubble-cover-icon-background-color` | `color` | Color de fondo del contenedor del icono de la tarjeta de persiana |
| `--bubble-cover-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra de la tarjeta de persiana |
| `--bubble-button-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra de los botones de la tarjeta de persiana |

</details>


#### Ejemplo

<details>

<summary>Una tarjeta que puede controlar un estor enrollable</summary>

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

## Selector

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Esta tarjeta te permite añadir un menú desplegable para tus entidades `input_select` / `select`. Esta tarjeta también admite los sub-botones y todas las funciones comunes de Bubble Card.

> [!TIP]
> Si quieres, también puedes tener sub-botones de selección, esta función está disponible en todas las tarjetas que admiten los sub-botones.

### Opciones del selector

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Requisito | Opciones admitidas | Descripción |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obligatorio** | Cualquier entidad | Una entidad a controlar |
| `name` | string | Opcional | Cualquier cadena | Un nombre para tu selector, si no se define se mostrará el nombre de la entidad |
| `icon` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu selector, si no se define se mostrará el icono de la entidad o la `entity-picture` |
| `force_icon` | boolean | Opcional | `true` o `false` (predeterminado) | Prioriza el icono sobre la `entity-picture` |
| `show_state` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra u oculta el estado de tu `entity` |
| `show_name` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el nombre |
| `show_icon` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el icono |
| `show_last_changed` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra la hora del último cambio de tu `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra la hora de la última actualización de tu `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra un atributo de tu `entity` debajo de su `name` |
| `attribute` | string | Opcional (obligatorio si `show_attribute` está definido en `true`) | Un atributo de tu `entity` | El atributo a mostrar (p. ej. `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (predeterminado) o `false` | Permite que el texto se desplace cuando el contenido supera el tamaño de su contenedor |
| `tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer clic en el icono, si no se define, se usará `more-info`. |
| `double_tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer doble clic en el icono, si no se define, se usará `none`. |
| `hold_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al mantener pulsado el icono, si no se define, se usará `more-info`. |
| `card_layout` | string | Opcional | `normal` (predeterminado si no está en una vista de secciones), `large` (predeterminado si está en una vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |
| `sub_button` | object | Opcional | Ver [sub-botones](#sub-botones) | Añade botones personalizados fijos a la derecha |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Color de fondo principal para los elementos compatibles de la tarjeta de selector |
| `--bubble-select-background-color` | `color` | Color de fondo de la tarjeta de selector |
| `--bubble-select-list-border-radius` | `px` | Radio de borde del menú desplegable de la tarjeta |
| `--bubble-select-list-item-accent-color` | `color` | Color de acento del elemento seleccionado |
| `--bubble-select-list-background-color` | `color` | Color de fondo del menú desplegable de la tarjeta |
| `--bubble-select-list-width` | `px` | Ancho del menú desplegable de la tarjeta |
| `--bubble-select-arrow-background-color` | `color` | Color de fondo de la flecha del menú desplegable |
| `--bubble-select-button-border-radius` | `px` | Radio de borde del botón de selección |
| `--bubble-select-border-radius` | `px` | Radio de borde de la tarjeta de selector |
| `--bubble-select-icon-border-radius` | `px` | Radio de borde del contenedor del icono de la tarjeta de selector |
| `--bubble-select-icon-background-color` | `color` | Color de fondo del contenedor del icono de la tarjeta de selector |
| `--bubble-select-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra de la tarjeta de selector |

</details>


#### Ejemplos

<details>

<summary>Una tarjeta de selector con una lista de escenas</summary>

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

Esta tarjeta te permite controlar tus entidades `climate`.

> [!TIP]
> El menú de selección de modo es un [sub-botón](#sub-botones) que se añade automáticamente al crear la tarjeta. Después puedes modificarlo o eliminarlo como quieras.

### Opciones de clima

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre                   | Tipo    | Requisito                           | Opciones admitidas                                 | Descripción                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obligatorio**                     | Entidad de clima                                 | La entidad a controlar (p. ej. `climate.living_room`).                                                          |
| `name`                  | string  | Opcional                            | Cualquier cadena                                 | Un nombre personalizado para la tarjeta. Si no se define, se mostrará el nombre de la entidad.                  |
| `icon`                  | string  | Opcional                            | Cualquier icono `mdi:`                           | Un icono personalizado para la tarjeta. Si no se define, se usará el icono de la entidad o la `entity-picture`. |
| `force_icon`            | boolean | Opcional                            | `true` o `false` (predeterminado)               | Prioriza el icono sobre la `entity-picture`.                                                                    |
| `show_state`            | boolean | Opcional                            | `true` o `false` (predeterminado)               | Muestra u oculta el estado actual de la `entity`.                                                               |
| `show_name`             | boolean | Opcional                            | `true` (predeterminado) o `false`               | Muestra u oculta el nombre de la entidad.                                                                       |
| `show_icon`             | boolean | Opcional                            | `true` (predeterminado) o `false`               | Muestra u oculta el icono.                                                                                      |
| `hide_target_temp_low`  | boolean | Opcional (solo para entidades compatibles con `target_temp_low`) | `true` o `false` (predeterminado) | Oculta el control de temperatura objetivo baja si la `entity` lo admite.                                        |
| `hide_target_temp_high` | boolean | Opcional (solo para entidades compatibles con `target_temp_high`)| `true` o `false` (predeterminado) | Oculta el control de temperatura objetivo alta si la `entity` lo admite.                                        |
| `state_color`           | boolean | Opcional                            | `true` o `false` (predeterminado)               | Aplica un color de fondo constante cuando la entidad de clima está encendida.                                   |
| `step` | number | Opcional | Cualquier número | El paso de temperatura. |
| `min_temp` | number | Opcional | Cualquier número | La temperatura mínima. |
| `max_temp` | number | Opcional | Cualquier número | La temperatura máxima. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Permite cambiar las acciones predeterminadas al hacer clic en el botón. |
| `tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer clic en el icono, si no se define, se usará `more-info`. |
| `double_tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer doble clic en el icono, si no se define, se usará `none`. |
| `hold_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al mantener pulsado el icono, si no se define, se usará `more-info`. |                              |
| `main_buttons_position` | string | Opcional | `default` o `bottom` | Mueve los botones de acción de clima a la parte inferior (fijos) |
| `main_buttons_full_width` | boolean | Opcional | `true` o `false` | Hace que los botones de acción inferiores ocupen todo el ancho (predeterminado: `true` cuando la posición es `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (predeterminado), `center`, `start`, `space-between` | Alineación de los botones de acción inferiores cuando no ocupan todo el ancho |
| `card_layout` | string | Opcional | `normal` (predeterminado si no está en una vista de secciones), `large` (predeterminado si está en una vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |
| `sub_button`            | object  | Opcional                            | Ver [sub-botones](#sub-botones)                | Añade botones personalizados fijos a la derecha. Útil para un menú de selección de modos de clima.              |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Color de fondo principal para los elementos compatibles de la tarjeta de clima |
| `--bubble-climate-border-radius` | `px` | Radio de borde de los elementos compatibles de la tarjeta de clima |
| `--bubble-climate-button-background-color` | `color` | Color de fondo de los botones de la tarjeta de clima |
| `--bubble-climate-icon-border-radius` | `px` | Radio de borde del contenedor del icono de la tarjeta de clima |
| `--bubble-state-climate-fan-only-color` | `color` | Color de superposición para el estado solo ventilador |
| `--bubble-state-climate-dry-color` | `color` | Color de superposición para el estado secar |
| `--bubble-state-climate-cool-color` | `color` | Color de superposición para el estado enfriar |
| `--bubble-state-climate-heat-color` | `color` | Color de superposición para el estado calentar |
| `--bubble-state-climate-auto-color` | `color` | Color de superposición para el estado auto |
| `--bubble-state-climate-heat-cool-color` | `color` | Color de superposición para el estado calentar/enfriar |
| `--bubble-climate-accent-color` | `color` | Color de acento de la tarjeta de clima |
| `--bubble-climate-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra del contenedor de clima. |

</details>


#### Ejemplos

<details>

<summary>Una tarjeta de clima con un menú desplegable de modos HVAC</summary>

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

Esta tarjeta te permite mostrar tus entidades de calendario. Su contenido es desplazable, así que puedes consultar fácilmente los próximos eventos.

### Opciones del calendario

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre              | Tipo    | Requisito    | Opciones admitidas                              | Descripción                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Opcional     | Cualquier número (mínimo: 1)                   | Número de días del calendario para los que obtener eventos, desde ahora hasta el final del enésimo día (predeterminado: 7) |
| `entities`          | object  | **Obligatorio** | Un objeto de entidad de calendario (ver abajo) | La entidad a controlar (p. ej. `calendar.main_calendar`).                               |
| `entities.entity`   | string  | **Obligatorio** | Una entidad de calendario                       | La entidad de calendario a mostrar                                                      |
| `entities.color`    | string  | Opcional     | Un color                                        | Un color personalizado para la etiqueta del calendario. Si no se define, se elegirá un color automáticamente |
| `days`              | number  | Opcional     | Cualquier número (mínimo: 1)                    | Número de días del calendario para los que obtener eventos, desde ahora hasta el final del enésimo día (predeterminado: 7) |
| `limit`             | number  | Opcional     | Un número                                       | La cantidad de eventos que se mostrarán en la tarjeta                                   |
| `show_end`          | boolean | Opcional     | `true` o `false` (predeterminado)               | Muestra u oculta la hora de fin de los eventos                                          |
| `show_progress`     | boolean | Opcional     | `true` (predeterminado) o `false`               | Muestra u oculta la barra de progreso del evento                                        |
| `show_started_events`| boolean | Opcional     | `true` (predeterminado) o `false`               | Muestra u oculta los eventos que están actualmente en curso. Los eventos de varios días se evalúan día a día, así que solo se oculta el día en curso y los días siguientes siguen visibles |
| `scrolling_effect`  | boolean | Opcional | `true` (predeterminado) o `false` | Permite que el texto se desplace cuando el contenido supera el tamaño de su contenedor |
| `event_action` | object | Opcional | `tap_action`, `double_tap_action` o `hold_action`, ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Permite añadir acciones al hacer clic en un evento. |
| `tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer clic en el día, si no se define, se usará `none`. |
| `double_tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer doble clic en el día, si no se define, se usará `none`. |
| `hold_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al mantener pulsado el día, si no se define, se usará `none`. |
| `card_layout` | string | Opcional | `normal` (predeterminado si no está en una vista de secciones), `large` (predeterminado si está en una vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |
| `sub_button` | object | Opcional | Ver [sub-botones](#sub-botones) | Añade botones personalizados fijos a la derecha |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable                                  | Valor esperado | Descripción                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Color de fondo principal para los elementos compatibles de la tarjeta de calendario |
| `--bubble-calendar-border-radius`         | `px`           | Radio de borde de los elementos compatibles de la tarjeta de calendario |
| `--bubble-calendar-height`                | `px`           | Altura de la tarjeta de calendario                                  |

</details>

#### Ejemplos

<details>

<summary>Una tarjeta de calendario con una cantidad limitada de eventos</summary>

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

<summary>Una tarjeta de calendario con hora de fin y barra de progreso</summary>

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

Esta tarjeta es un separador sencillo para dividir tu pop-up en categorías o secciones. P. ej. Luces, Dispositivos, Persianas, Ajustes, Automatizaciones...

### Opciones del separador

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Requisito | Opciones compatibles | Descripción |
| --- | --- | --- | --- | --- |
| `name` | string | Opcional pero recomendado | Cualquier cadena | Un nombre para tu separador |
| `icon` | string | Opcional pero recomendado | Cualquier icono `mdi:` | Un icono para tu separador |
| `card_layout` | string | Opcional | `normal` (predeterminado fuera de la vista de secciones), `large` (predeterminado en la vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |
| `sub_button` | object | Opcional | Ver [sub-botones](#sub-botones) | Añade botones personalizados fijados a la derecha |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Color de fondo de la línea del separador |

</details>

#### Ejemplo

<details>

<summary>Un separador/divisor para una sección "Persianas"</summary>

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

## Columna vacía

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Esta tarjeta sirve para rellenar una columna vacía. Es útil si tienes un `horizontal-stack` en tu pop-up con una sola tarjeta. Mira la esquina inferior derecha de esta captura de pantalla para (no) verla.

### Opciones de la columna vacía

Esta tarjeta no tiene opciones y no admite [estilos](#estilos), aunque sí admite las opciones de diseño de las secciones de HA.

#### Ejemplo

<details>

<summary>Una columna vacía en una pila horizontal</summary>

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

## Solo sub-botones

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Esta tarjeta está dedicada exclusivamente a los sub-botones. Es perfecta para menús, acciones rápidas, chips informativos o un pie de página fijo en la parte inferior de la página.

> [!IMPORTANT]  
> Esta tarjeta usa el nuevo esquema de sub-botones. Usa `sub_button.bottom` para definir tus botones. La sección `sub_button.main` se ignora.

### Opciones de solo sub-botones

<details>

<summary><b>Opciones (YAML + descripciones)</b></summary>

| Nombre | Tipo | Requisito | Opciones compatibles | Descripción |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obligatorio** | Ver [sub-botones](#sub-botones) | Define tus sub-botones usando la sección `bottom` |
| `hide_main_background` | boolean | Opcional | `true` o `false` (predeterminado) | Elimina el fondo de la tarjeta |
| `footer_mode` | boolean | Opcional | `true` o `false` (predeterminado) | Fija la tarjeta en la parte inferior de la página |
| `footer_full_width` | boolean | Opcional | `true` o `false` (predeterminado) | Pone el pie de página a ancho completo (100%) |
| `footer_width` | number | Opcional | Cualquier número | Ancho del pie de página en píxeles cuando `footer_full_width` es `false` |
| `footer_bottom_offset` | number | Opcional | Cualquier número | Distancia desde la parte inferior de la página en píxeles (predeterminado: `16`) |
| `card_layout` | string | Opcional | `normal` (predeterminado fuera de la vista de secciones), `large` (predeterminado en la vista de secciones), `large-2-rows`, `large-sub-buttons-grid` | Diseño de la tarjeta, ver [diseños de tarjeta](#diseños-de-tarjeta) |
| `rows` | number | Opcional | Cualquier número | Número de filas (altura) (p. ej. `2`) |

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Ancho del pie de página cuando `footer_full_width` es `false` |
| `--bubble-footer-bottom` | `px` | Desplazamiento inferior del pie de página |
| `--bubble-footer-box-shadow` | ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra del contenedor del pie de página |

</details>

#### Ejemplos

<details>

<summary>Al estilo chips (como en la captura de pantalla)</summary>

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

<summary>Un menú fijo a pie de página</summary>

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

## Sub-botones

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

En todas las tarjetas que admiten esta opción, puedes añadir sub-botones para personalizar tus tarjetas aún más. Puedes, por ejemplo, crear un botón que controle una aspiradora, una tarjeta del tiempo o casi cualquier cosa que se te ocurra. Estos sub-botones admiten las acciones de pulsación y la mayoría de las opciones del botón.

Los sub-botones admiten ahora tres tipos: **Predeterminado (botón)**, **Control deslizante** y **Menú desplegable / Selección**. Puedes mezclar tipos en la misma tarjeta, colocar los sub-botones arriba o abajo, y organizarlos en grupos para diseños más avanzados.

#### Colocación y grupos de sub-botones

<details>

<summary><b>Estructura de los sub-botones (main / bottom + grupos)</b></summary>

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
- `main` y `bottom` son dos secciones independientes. Los sub-botones inferiores quedan fijados a la parte inferior de la tarjeta.
- `main_layout` y `bottom_layout` aceptan `inline` (predeterminado) o `rows` para apilar los grupos verticalmente.
- Los grupos son objetos con un array `group` y un `buttons_layout` opcional (`inline` o `column`).
- `justify_content` solo está disponible para los **grupos inferiores** (`start`, `center`, `end`, `fill`).
- Cuando hay sub-botones inferiores, el diseño de la tarjeta cambia automáticamente a `large` a menos que definas explícitamente otro diseño.
- Los arrays `sub_button` heredados siguen siendo compatibles y se tratan como la sección `main`.

</details>

### Opciones de los sub-botones

<details>

<summary><b>Opciones (YAML + descripción)</b></summary>

| Nombre | Tipo | Requisito | Opciones compatibles | Descripción |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcional | Cualquier entidad | Una entidad a controlar |
| `name` | string | Opcional | Cualquier cadena | Un nombre para tu sub-botón, si no se define se mostrará el nombre de la entidad |
| `icon` | string | Opcional | Cualquier icono `mdi:` | Un icono para tu sub-botón, si no se define se mostrará el icono o la imagen de la entidad |
| `force_icon` | boolean | Opcional | `true` o `false` (predeterminado) | Fuerza el icono aunque haya una imagen de entidad disponible |
| `sub_button_type` | string | Opcional | `default`, `slider` o `select` | Elige el tipo de sub-botón |
| `show_background` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra un fondo para tu sub-botón, su color cambiará según el estado de tu entidad |
| `state_background` | boolean | Opcional | `true` (predeterminado) o `false` | Usa el color del estado cuando la entidad está en `on` |
| `light_background` | boolean | Opcional | `true` (predeterminado) o `false` | Usa el color de la luz para el fondo cuando esté disponible |
| `show_state` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra u oculta el estado de tu `entity` |
| `show_name` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra u oculta el nombre |
| `show_icon` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta el icono |
| `show_last_changed` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra el tiempo desde el último cambio de tu `entity` |
| `show_last_updated` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra el tiempo desde la última actualización de tu `entity` |
| `show_attribute` | boolean | Opcional | `true` o `false` (predeterminado) | Muestra un atributo de tu `entity` debajo de su `name` |
| `attribute` | string | Opcional (obligatorio si `show_attribute` está en `true`) | Un atributo de tu `entity` | El atributo a mostrar (p. ej. `brightness`) |
| `select_attribute` | string | Opcional | Una lista de atributos de tu `entity` (ver opciones compatibles arriba) | Esta lista de atributos abrirá un menú desplegable al hacer clic (p. ej. `effect_list`) |
| `show_arrow` | boolean | Opcional | `true` (predeterminado) o `false` | Muestra u oculta la flecha del menú desplegable en los sub-botones de selección |
| `scrolling_effect` | boolean | Opcional | `true` (predeterminado) o `false` | Permite que el texto se desplace cuando el contenido supera el tamaño del contenedor |
| `tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer clic en el sub-botón, si no se define, se usará `more-info`. |
| `double_tap_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al hacer doble clic en el sub-botón, si no se define, se usará `none`. |
| `hold_action` | object | Opcional | Ver [acciones](#acciones-de-pulsación-doble-pulsación-y-mantener-pulsado) | Define el tipo de acción al mantener pulsado el sub-botón, si no se define, se usará `more-info`. |
| `fill_width` | boolean | Opcional | `true` o `false` | Rellena el ancho disponible (predeterminado: `false` para main, `true` para bottom) |
| `width` | number o string | Opcional | Cualquier número o longitud CSS | Ancho personalizado (`px` para la sección main, `%` para la sección bottom de forma predeterminada) |
| `custom_height` | number | Opcional | Cualquier número | Altura personalizada en píxeles |
| `content_layout` | string | Opcional | `icon-left` (predeterminado), `icon-top`, `icon-bottom`, `icon-right` | Colocación del icono dentro del sub-botón |
| `always_visible` | boolean | Opcional | `true` o `false` (predeterminado) | **Solo control deslizante.** Muestra siempre el control deslizante en lugar de abrirlo al pulsar |
| `show_button_info` | boolean | Opcional | `true` o `false` (predeterminado) | **Solo control deslizante.** Muestra el icono/nombre/estado cuando `always_visible` está activado |
| `visibility` | object o list | Opcional | Ver [condiciones](#condiciones) | Muestra u oculta el sub-botón según condiciones |
| `hide_when_parent_unavailable` | boolean | Opcional | `true` o `false` (predeterminado) | Oculta el sub-botón si la entidad de la tarjeta principal no está disponible |
| `css_class` | string | Opcional | Cualquier cadena | Una clase CSS adicional en el sub-botón, para apuntarlo en tus [estilos](#estilos) sea cual sea su nombre (p. ej. `My value` da `.my-value`) |

</details>

<details>

<summary><b>Opciones de los sub-botones de control deslizante (las mismas que los botones de control deslizante)</b></summary>

<br>

Los sub-botones de control deslizante admiten las mismas opciones de control deslizante que los botones de control deslizante, incluidas:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variables CSS (ver <a href="#estilos">Estilos</a>)</b></summary>

| Variable | Valor esperado | Descripción |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radio del borde de los sub-botones |
| `--bubble-sub-button-background-color` | `color` | Color de fondo de los sub-botones |
| `--bubble-sub-button-outline` | `box-shadow` | Contorno añadido a un sub-botón o a un control deslizante, solo cuando ese elemento se pinta del mismo color que la tarjeta que tiene detrás, lo que lo haría invisible (ponlo en `none` para quitarlo) |
| `--bubble-sub-slider-border-radius` | `px` | Radio del borde de los sub-botones de control deslizante |
| `--bubble-sub-slider-background-color` | `color` | Color de fondo de los sub-botones de control deslizante |
| `--bubble-sub-slider-height` | `px` | Altura de los sub-botones de control deslizante siempre visibles |
| `--bubble-sub-slider-outline` | `box-shadow` | Contorno solo de los sub-botones de control deslizante, recurre a `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Color del texto sobre fondos de sub-botón claros |

</details>

#### Ejemplos

<details>

<summary>Un botón con algunos sub-botones para crear una tarjeta de aspiradora (como en la captura de pantalla)</summary>

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

<summary>Un botón de control deslizante con un sub-botón que muestra el brillo y otro que alterna la luz (como en la captura de pantalla)</summary>

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

<summary>Un botón que muestra la temperatura interior y exterior con el tiempo de hoy y de mañana (captura de pantalla incluida)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Mala suerte para mí, está nublado todo el tiempo, pero todos los iconos cambian según el tiempo.

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

## Diseños de tarjeta

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card es totalmente compatible con la vista de secciones de Home Assistant: puedes cambiar el diseño de la tarjeta para hacerla más grande y también cambiar el número de columnas o filas que la tarjeta debe ocupar en tu vista de secciones (solo en las tarjetas que admiten esa opción). Estos diseños también son compatibles con todos los demás tipos de vista.

<details>

<summary><b>Diseños de tarjeta disponibles</b></summary>

| Diseño | Descripción |
| --- | --- |
| `normal` | El diseño normal (no optimizado para la vista de secciones) |
| `large` | Un diseño más grande que se redimensionará según las filas seleccionadas en la vista de secciones (optimizado para la vista de secciones) |
| `large-2-rows` | Un diseño más grande con 2 filas de sub-botones que se redimensionará según las filas seleccionadas en la vista de secciones (optimizado para la vista de secciones) |
| `large-sub-buttons-grid` | Este diseño muestra los sub-botones en una cuadrícula, `rows` debe estar definido en al menos `2`.

</details>

#### Ejemplos

<details>

<summary>Un botón grande que muestra estadísticas de energía con 2 filas de sub-botones (captura de pantalla incluida)</summary>

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

<summary>Un botón grande con varias filas y 12 sub-botones</summary>

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

## Condiciones

Algunas opciones se rigen por condiciones, escritas exactamente como las de la [tarjeta condicional](https://www.home-assistant.io/dashboards/conditional/) de Home Assistant:

- `visibility` en un [sub-botón](#sub-botones), para mostrarlo u ocultarlo
- `trigger` en un [pop-up](#pop-up), para abrirlo cuando se cumplen las condiciones
- `checkConditionsMet(conditions, hass)` dentro de tus [plantillas](#plantillas), cuando necesitas la respuesta en tu propio código

Se evalúa cada tipo de condición de Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, y los grupos `and`, `or` y `not`. Las condiciones del constructor de condiciones de Home Assistant también funcionan, las que llevan el nombre de su dominio como `sun.is_up`, `light.is_on`, `zone.in_zone` o `temperature.is_value`, con sus ajustes `target`, `options`, `behavior` y `for`.

<details>

<summary><b>Ejemplo</b></summary>

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
> Las condiciones se evalúan en tu navegador, así que las pocas que necesitan el servidor de Home Assistant no pueden ser exactas: el amanecer y el atardecer se leen de la entidad `sun.sun` en lugar de recalcularse, y una duración `for` se mide desde el último cambio de estado, sin el historial de recorder.
>
> `view_columns` se acepta pero siempre se cumple, ya que Bubble Card nunca es quien organiza las columnas de tu vista. Un tipo de condición que Bubble Card no conoce se anuncia una vez en la consola de tu navegador en lugar de fallar en silencio, así distingues una errata de una función que falta.

<br>

---

<br>

## Acciones de pulsación, doble pulsación y mantener pulsado

También puedes usar las acciones predeterminadas de Home Assistant de pulsación, doble pulsación y mantener pulsado en las tarjetas que admiten esta opción. Por ejemplo, esto te permite mostrar la ventana "Más información" manteniendo pulsado el icono de un botón, o ejecutar un servicio al pulsar un sub-botón.

**Nota: cuando hay una `double_tap_action` configurada, la `tap_action` normal tendrá un retardo de 200 ms para permitir la detección
de una doble pulsación. Si este retardo no te conviene, define `double_tap_action` en `none` para desactivar la gestión de la doble pulsación.**

### Opciones de acción

<details>

<summary><b>Opciones (YAML + descripción)</b></summary>

| Nombre | Tipo | Opciones admitidas | Descripción |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Acción a realizar |
| `target` | object |  | Solo funciona con `call-service`. Sigue la [sintaxis de home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Cualquier ruta de tu panel | Ruta a la que navegar (p. ej. `'#kitchen'` para abrir un pop-up) cuando la acción está definida como navigate |
| `url_path` | string | Cualquier enlace | URL que se abre al hacer clic (p. ej. `https://www.google.com`) cuando la acción es `url` |
| `service` | string | Cualquier servicio | Servicio a llamar (p. ej. `media_player.media_play_pause`) cuando `action` está definida como `call-service` |
| `data` o `service_data` | object | Cualquier dato de servicio | Datos de servicio a incluir (p. ej. `entity_id: media_player.kitchen`) cuando `action` está definida como `call-service` |
| `confirmation` | object | Ver [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Muestra un pop-up de confirmación (no uno de Bubble Card), reemplaza el objeto `confirmation` predeterminado |

</details>

#### Ejemplo

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

## Estilos

Puedes añadir estilos personalizados para modificar el CSS de todas las tarjetas **sin usar card-mod** de cuatro maneras:

- En el editor, ve a la tarjeta que quieras modificar, entra en _Opciones de estilo > Estilos personalizados y plantillas JS_ y añade tus estilos personalizados (consulta los consejos y ejemplos de abajo).
- En el editor (o en [YAML](#módulos)), ve a la tarjeta que quieras modificar, entra en _Módulos_ y crea un nuevo módulo (estará disponible para todas las tarjetas), o ve al **Module Store** para instalar cualquier módulo disponible (encontrarás más detalles sobre los módulos [más abajo](#módulos)).
- En un archivo de [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) añadiendo variables CSS en YAML (están disponibles en la documentación de cada tarjeta más arriba). Esto permite modificaciones globales.

  <details>
  
  <summary>Ejemplo</a></summary>
  
  <br>

  No copies la línea `Bubble:`, es el nombre del tema que usas. También tienes que quitar el `--` de las variables.

  Debes ejecutar la acción [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) para actualizar el tema después de cualquier modificación.

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
  
- En YAML añadiendo `styles: |` seguido de tus estilos personalizados (consulta los consejos y ejemplos de abajo).

> [!TIP]  
> **Para saber qué clases de estilo se pueden modificar**, puedes echar un vistazo a la carpeta [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) de este repositorio. En la carpeta de cada tarjeta encontrarás un archivo llamado `styles.css`. Estos archivos contienen todos los estilos aplicados. Esto ofrece muchas más posibilidades que las variables CSS, pero hay que añadirlo individualmente a cada tarjeta.
> 
> También puedes encontrar muchos [ejemplos de la comunidad](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), o algunos en el [foro de Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) buscando un poco.
>
> El tema Bubble para Home Assistant (como el de las capturas de pantalla) está disponible [aquí](https://github.com/Clooos/Bubble).
>
> ¡Pronto llegará un vídeo tutorial a mi [canal de YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Ten en cuenta que puede que tengas que añadir `!important;` a algunos estilos CSS que ya están definidos (mira los ejemplos de abajo).

> [!TIP]  
> Los sub-botones pueden seleccionarse mediante clases basadas en su nombre. Por ejemplo, un sub-botón llamado "My sub-button" puede estilizarse con `.my-sub-button`. Los sub-botones de control deslizante también exponen `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> Una clase basada en el nombre cambia cuando renombras un sub-botón, y se traduce cuando el nombre se traduce. Define `css_class` en el sub-botón para tener una clase propia que no se mueve nunca, sea cual sea su nombre y sea cual sea el idioma.

#### Ejemplos

<details>

<summary>Cambiar el tamaño de fuente de cualquier Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Cambiar el color de fondo de un solo botón en una pila de botones horizontal</summary>

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

<summary>Cambiar el color de fondo de una tarjeta</summary>

<br>

Este funciona en todos los tipos de Bubble Card (excepto en los pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Este hace lo mismo pero solo en una tarjeta de botón (funciona para la cabecera del pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Para cambiar el color cuando está en `on`, echa un vistazo a las plantillas de estilo de abajo.

</details>

<details>

<summary>Cambiar el color de un botón de control deslizante</summary>

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

<summary>Cambiar el color de la línea de un separador</summary>

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

<summary>Cambiar el color de un icono</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Para un icono de una pila de botones horizontal.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Cambiar el color de fondo del contenedor de un icono</summary>

<br>

Este funciona en todos los tipos de Bubble Card (excepto en los pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Este hace lo mismo para la cabecera del pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Cambiar el tamaño de los sub-botones (perfecto para el diseño grande)</summary>

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

<summary>Cambiar el color de fondo del segundo sub-botón</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Cambiar el tamaño de un icono</summary>

<br>

Para el icono principal.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Para los iconos de los sub-botones.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Usar una imagen en lugar de un icono en un sub-botón</summary>

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

Solo tienes que subir esta imagen a una carpeta "pictures" (o el nombre que quieras) dentro de la carpeta "www" de Home Assistant.

</details>

<details>

<summary>Ejemplo avanzado: crear una fila horizontal de sub-botones (captura de pantalla incluida)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Este me encanta, lo uso como cabecera en mi panel.

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

## Plantillas

**Bubble Card no admite plantillas Jinja**, pero los usuarios avanzados pueden añadir plantillas en JS directamente en sus [estilos personalizados](#estilos). Por ejemplo, esto te permite cambiar dinámicamente un icono, los textos o los colores de un elemento, mostrar u ocultar un elemento de forma condicional (como un sub-botón), o casi cualquier cosa basándote en un estado, un atributo y más.

> [!TIP]  
> Más información sobre las plantillas JS [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mi consejo es que **siempre eches un vistazo a la consola de tu navegador** para asegurarte de que todo funciona correctamente.

> [!IMPORTANT]  
> **¡Todas las plantillas que no modifican una propiedad CSS deben colocarse al final! Como modificar un icono, un texto o cualquier elemento.**

#### Variables y funciones disponibles

<details>

<summary>Variables</summary>

<br>

Tienes acceso a estas variables en la mayoría de las tarjetas:

- `state` devolverá el estado de la `entity` que hayas definido.
  
- `entity` devolverá la entidad que hayas definido, como `switch.test` en este ejemplo.
  
- `icon` puede usarse así para cambiar el icono `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` devolverá el estado de la `entity` definida en tu primer sub-botón, `[0]` es el estado del primer sub-botón, `[1]` el del segundo...
  
- `subButtonIcon[0]` puede usarse así para cambiar el icono del primer sub-botón `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` es el icono del primer sub-botón, `[1]` el del segundo...
  
- `card` devolverá el elemento de la tarjeta en el DOM.
  
- `hass` es una variable avanzada que te da aún más control, por ejemplo puedes obtener el estado de `light.kitchen` así `hass.states['light.kitchen'].state` o un atributo así `hass.states[entity].attributes.brightness`.

- `this` devolverá mucha información útil sobre tu instalación y tu dashboard, úsala solo si sabes lo que estás haciendo.

</details>

<details>

<summary>Funciones</summary>

<br>

Tienes acceso a todas las funciones globales de JS, pero también tienes acceso a:

- `getWeatherIcon` puede usarse para devolver un icono meteorológico basado en un estado que devuelve el tiempo. Por ejemplo, puedes hacer esto `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` para cambiar el icono del tercer sub-botón por el icono del tiempo de hoy, `.forecast[1]?.condition` es para mañana...

  Tendrás que crear un sensor de plantilla para eso. Esto es lo que puedes añadir en tu `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` devuelve `true` cuando se cumple una lista de [condiciones](#condiciones), por ejemplo `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` puede usarse para traducir un estado (también puede usarse para obtener la unidad de un estado, sin necesidad de añadirla manualmente).
- `hass.formatEntityAttributeValue(state, "attribute")` puede usarse para traducir un atributo (también puede usarse para obtener la unidad de un estado, sin necesidad de añadirla manualmente).

</details>

#### Ejemplos

Puedes encontrar muchos ejemplos más abajo, pero también puedes encontrar plantillas muy avanzadas en mi [página de Patreon](https://www.patreon.com/c/Clooos), como una (mi favorita) que permite hasta cuatro insignias condicionales colocadas alrededor de los iconos de la tarjeta. ¡También es una excelente forma de aprender todas las posibilidades de los estilos personalizados y las plantillas de Bubble Card!

<details>
<summary>Ejemplos de mi página de Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Ejemplo 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Añadir insignias al estilo de Home Assistant a cualquier tarjeta</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Ejemplo 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Mostrar la fecha y la hora con formato en un separador sin usar ninguna entidad</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Ejemplo 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Mostrar el estado de un sub-botón en dos líneas</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Ejemplo 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalizar las etiquetas y los iconos dentro de un sub-botón de tipo selector</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Ejemplo 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Añadir un pop-up de recordatorio persistente que solo aparece cuando es necesario</a>
</p>

<br>

</details>

<details>

<summary>Cambiar el color de fondo de un botón para que sea rojo cuando está <code>off</code> y azul cuando está <code>on</code></summary>

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

<summary>Cambiar el color de fondo de un botón según una entidad en la pila de botones horizontal</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Mostrar/ocultar un sub-botón de forma condicional</summary>

<br>

Este ejemplo muestra el primer sub-botón solo cuando mi aspiradora está atascada.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Este ejemplo muestra un sub-botón cuando la batería está por debajo del 10%. Útil con un sub-botón que muestra "Batería baja".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Cambiar un icono o el icono de un sub-botón de forma condicional</summary>

<br>

Este ejemplo cambia el icono de un botón solo cuando una aspiradora está atascada.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Este ejemplo cambia el icono del primer sub-botón solo cuando una aspiradora está atascada.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Cambiar el color de un icono o del icono de un sub-botón de forma condicional</summary>

<br>

Este ejemplo cambia el color del icono de un botón según su estado.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Este ejemplo cambia el color del icono de un sub-botón según su estado. `.bubble-sub-button-1` es el primer sub-botón, sustituye el `1` si quieres cambiar el icono de otro sub-botón.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animar el icono de un ventilador de forma condicional</summary>

<br>

Este ejemplo hace girar el icono de un botón cuando un ventilador está `on`.
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

<summary>Aplicar plantillas a textos (como el nombre o el estado)</summary>

<br>

Este ejemplo cambia el nombre/estado de un botón por "It's currently sunny" según tu clima.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
o aplicado a los sub-botones:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Si quieres aplicar una plantilla al estado (`.bubble-state`), no actives `show_state: true`, activa solo `show_attribute: true` sin ningún atributo.

</details>

<details>

<summary>Ejemplo avanzado: cambiar el color de un sub-botón cuando un pop-up está abierto</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Ejemplo avanzado: aplicar una plantilla al nombre de un separador basada en un estado traducido a tu idioma</summary>

<br>

Puedes usar `hass.formatEntityState(state)` para traducir un estado y `hass.formatEntityAttributeValue(state, "attribute")` para traducir un atributo.

Este ejemplo cambia el nombre y el icono según el tiempo, "Nuageux" significa "Nublado" en francés.

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

Los módulos son una potente función que te permite guardar, reutilizar y compartir tus estilos personalizados y plantillas en todas tus Bubble Cards. En lugar de copiar y pegar el mismo código en varias tarjetas, puedes crear un módulo y aplicarlo donde lo necesites. Esto hace que gestionar la apariencia de tu dashboard sea mucho más fácil y eficiente.

Pero esta función es mucho más potente que eso, te permite añadir funciones reales tú mismo en el editor de Bubble Card, ¡usando todas las opciones de los [formularios de Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) predeterminados!  
El selector de objetos se ha mejorado para mostrar los cambios en directo y admitir correctamente los atributos.

Un módulo también puede responder al selector de tarjetas de Home Assistant junto a las [sugerencias de entidad](#sugerencias-de-entidad) integradas: usa `suggestions` para las tarjetas que puede describir de antemano, y `suggestions_code` cuando tienen que calcularse a partir de tu instalación, por ejemplo un pop-up construido con todas las entidades del área a la que pertenece la entidad elegida. Ambas claves están documentadas [aquí](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

También puedes explorar el **Module Store** para encontrar e instalar [módulos creados por la comunidad](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ¡o compartir tus propias creaciones!

> [!TIP]
> El código de un módulo funciona exactamente igual que el código de la sección `styles` de una tarjeta. Todas las variables y funciones de la sección [Plantillas](#plantillas) están disponibles.

<br>

### Configuración inicial

> [!IMPORTANT]
> A partir de la v3.1.0, Bubble Card Tools es el sistema de almacenamiento recomendado para los módulos. El método antiguo del sensor de plantilla sigue funcionando para las instalaciones existentes, pero los módulos nuevos y las funciones del Module Store están mejor soportados con Bubble Card Tools.

La integración Bubble Card Tools habilita el editor de módulos y el Module Store, y almacena los módulos como archivos YAML individuales. Los módulos existentes se migran automáticamente.

Los pasos de instalación y configuración se explican aquí:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### El editor de módulos

Puedes acceder al editor de módulos desde los ajustes de cualquier tarjeta, en la sección **Módulos**. El editor ofrece dos pestañas principales:

#### Pestaña Mis módulos

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Esta pestaña muestra todos tus módulos instalados y te permite:

- **Aplicar** módulos existentes a la tarjeta actual
- **Crear** un nuevo módulo desde cero
- **Editar** módulos existentes con vista previa en directo
- **Eliminar** módulos que ya no necesites
- **Buscar** y **ordenar** módulos (alfabético, recientes, activos primero)
- **Definir el estado global** para que un módulo se aplique a todas las tarjetas automáticamente
- **Importar/Exportar** módulos para hacer copias de seguridad o compartirlos
- **Escribir sugerencias de entidad** en el editor de módulos, en **Opcional: Sugerencias de entidad**, para que tu módulo se ofrezca en el selector de tarjetas de Home Assistant. Tanto las reglas como las sugerencias calculadas se comprueban mientras escribes, un error ahí impide guardar, y la vista previa muestra las tarjetas sugeridas para cualquier entidad que elijas

#### Pestaña Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Esta pestaña muestra [todos los módulos disponibles de la comunidad](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), y te permite:

- **Explorar** todos los módulos creados por la comunidad
- **Buscar** y filtrar módulos por nombre, compatibilidad o palabras clave
- **Instalar** módulos con un clic
- **Actualizar** los módulos instalados cuando hay nuevas versiones disponibles

> [!TIP]
> En el editor, puedes activar los módulos no compatibles para probar módulos que aún no están marcados como compatibles con un tipo de tarjeta determinado.

<br>

### Cómo usar los módulos

#### Crear un nuevo módulo

<details>

<summary>Haz clic para desplegar</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Ve al editor de cualquier tarjeta y despliega la sección **Módulos**.
2. Haz clic en **Crear nuevo módulo**.
3. Rellena la información del módulo.
4. Escribe tu código de plantilla CSS y/o JavaScript en el editor de **Código**.
5. (Opcional) Crea una interfaz de configuración personalizada en la sección **Editor** (como el selector de color de la captura de arriba, documentación completa disponible [aquí](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Opcional) Escribe tus **Sugerencias de entidad** para que tu módulo se ofrezca en el selector de tarjetas de Home Assistant. El panel comprueba lo que escribes mientras tecleas, y su vista previa muestra las propias tarjetas sugeridas para la entidad que elijas.
7. Haz clic en **Guardar**.

¡Tu módulo ya está disponible para usarse en cualquiera de tus tarjetas!

<br>

</details>

#### Aplicar un módulo a una tarjeta

<details>

<summary>Haz clic para desplegar</summary>

<br>

- **Desde el editor:**

  - Ve al editor de la tarjeta a la que quieres aplicar el módulo.
  - Despliega la sección **Módulos**.
  - Haz clic en el módulo que quieres aplicar desde la lista.
  - En "Aplicar a", haz clic en "Esta tarjeta". El módulo ya está activo. Puedes aplicar varios módulos a la misma tarjeta.

- **Desde YAML:**

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

<summary>Haz clic para desplegar</summary>

<br>

Puedes configurar un módulo para que se aplique automáticamente a todas las Bubble Cards:

**Esto no está disponible para los módulos con editor, ya que requieren una configuración específica para funcionar.**

- **Desde el editor:**

  - En el editor de módulos, busca tu módulo en la pestaña **Mis módulos**.
  - Activa el botón **Todas las tarjetas** junto al nombre del módulo.
  - El módulo se aplicará ahora a todas las tarjetas automáticamente.
 
- **Desde YAML:**

  En la configuración YAML de tu módulo (en `bubble-modules.yaml`), simplemente añade `is_global: true`.

<br>

</details>

#### Excluir una tarjeta concreta de un módulo global

<details>

<summary>Haz clic para desplegar</summary>

<br>

Si tienes un módulo global pero quieres excluirlo de una tarjeta concreta:

- **Desde el editor:**
  
  - En la sección **Módulos** de la tarjeta, verás la lista de módulos globales.
  - Haz clic en un módulo global y desactiva "Esta tarjeta" para excluirlo de esta tarjeta concreta.

- **Desde YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Compartir tu módulo en el Module Store

<details>

<summary>Haz clic para desplegar</summary>

<br>

Para compartir tu módulo en el Module Store, en el editor de módulos, abajo en "Exportar módulo", haz clic en "Copiar para GitHub" y pega el contenido en una nueva discusión en la categoría [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Edita la descripción** (si es necesario), **el ejemplo** (para usuarios de YAML), y recuerda **incluir al menos una captura de pantalla** para el Module Store.

**Tu módulo estará disponible justo después** (tras una actualización de la Tienda), así que comprueba bien que todo esté correctamente escrito y que el módulo funcione como se espera. Por supuesto, puedes editar/actualizar el módulo después de compartirlo.

<br>

</details>

#### Gestión de versiones

<details>

<summary>Haz clic para desplegar</summary>

<br>

El Module Store comprueba automáticamente si hay actualizaciones de los módulos instalados. Cuando hay actualizaciones disponibles:

1. Verás un indicador de actualización en la pestaña **Module Store**.
2. Haz clic en **Actualizar** en los módulos con actualizaciones disponibles.
3. Confirma la actualización en el Module Store.

<br>

</details>

#### Definir los tipos de tarjeta compatibles

<details>

<summary>Haz clic para desplegar</summary>

<br>

Puede que algunos módulos no sean compatibles con todos los tipos de tarjeta. Puedes especificar con qué tarjetas es compatible un módulo.  
Si quieres que un módulo sea compatible con **todas las tarjetas**, simplemente omite el campo `supported` (o usa la opción **Todas las tarjetas** en el editor).

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

### Ejemplos

<details>
<summary>Módulo de estilo básico</summary>

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

Este módulo está disponible [aquí](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Puedes encontrar más ejemplos en el Module Store, o [aquí](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localización

Bubble Card habla tu idioma. Su editor está traducido a los 64 idiomas que admite Home Assistant, y allí donde Home Assistant ya tiene una palabra para algo, se reutiliza su propia formulación, así que lees los mismos términos en ambas interfaces.

En la parte inferior del editor, junto al número de versión, un interruptor **Automático** sigue el idioma de tu Home Assistant. Desactívalo y todo el editor vuelve al inglés, algo práctico para seguir un tutorial o para informar de un problema. Tu elección se recuerda en tu navegador.

Esta documentación también está traducida, [a 62 idiomas](languages.md), a todos menos al inglés británico, que muestra el original. Esas páginas están abiertas a todo el mundo, así que una expresión que no coincide con tu propio Home Assistant se puede corregir en un par de clics. La versión en inglés sigue siendo la referencia para el contenido en sí.

<br>

---

<br>

## Ayuda

No dudes en abrir una incidencia si algo no funciona como esperabas. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

¿Tienes preguntas o comentarios sobre Bubble Card? ¿Quieres compartir tus paneles o tus descubrimientos? Puedes pasarte por el foro de Home Assistant, por el subreddit de Bubble Card o por la sección Discussions de GitHub.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Contribuir

¡Las contribuciones son bienvenidas! Ya sean correcciones de errores, nuevas funcionalidades, traducciones o mejoras en la documentación, no dudes en abrir una pull request.

Antes de empezar, lee la [guía para desarrolladores](DEVELOPERS.md), que explica cómo preparar tu entorno local, compilar el proyecto y probar tus cambios.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donaciones

Dedico la mayor parte de mi tiempo libre a hacer que este proyecto sea lo mejor posible. Así que, si aprecias mi trabajo, cualquier donación sería una excelente manera de mostrar tu apoyo 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

¡Gracias a todos por vuestro apoyo, sois mi mayor motivación!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
