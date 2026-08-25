<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Esta página é uma tradução automática. Em caso de dúvida, prevalece a [documentação original em inglês](../README.md). Alguma frase parece errada? Toda a ajuda é bem-vinda, e [corrigir esta página](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.pt.md) demora apenas um minuto: o GitHub trata do fork e do pull request. Obrigado desde já! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Leia isto noutro idioma](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card é uma coleção de cartões minimalista e personalizável para Home Assistant, com pop-ups modernos e uma Module Store integrada com mais de 100 módulos criados pela comunidade.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Índice

**[`Instalação`](#instalação)**  **[`Configuração`](#configuração)**  **[`Sugestões de entidades`](#sugestões-de-entidades)**  **[`Pop-up`](#pop-up)**  **[`Pilha de botões horizontal`](#pilha-de-botões-horizontal)**  **[`Botão`](#botão)**  **[`Leitor multimédia`](#leitor-multimédia)**  **[`Estore`](#estore)**  **[`Seleção`](#seleção)**  **[`Climatização`](#climatização)**  **[`Calendário`](#calendário)**  **[`Separador`](#separador)**  **[`Coluna vazia`](#coluna-vazia)**  **[`Apenas sub-botões`](#apenas-sub-botões)**  **[`Sub-botões`](#sub-botões)**  **[`Disposições do cartão`](#disposições-do-cartão)**  **[`Condições`](#condições)**  **[`Ações`](#ações-de-toque-duplo-toque-e-toque-longo)**  **[`Estilo`](#estilo)**  **[`Modelos`](#modelos)**  **[`Módulos`](#módulos)**  **[`Localização`](#localização)**  **[`Ajuda`](#ajuda)**  **[`Contribuir`](#contribuir)**  **[`Doar`](#doar)**

<br>

## Instalação

**Versão mínima suportada do Home Assistant:** 2023.9.0

<details>

<summary>Sem HACS</summary>

<br>

1. Descarregue este ficheiro: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Adicione este ficheiro à sua pasta `<config>/www`. Para ter o editor no seu idioma, descarregue também `bubble-card-<lang>.json` da [pasta dist](https://github.com/Clooos/Bubble-Card/tree/main/dist), por exemplo `bubble-card-fr.json`, e coloque-o ao lado de `bubble-card.js` (sem ele o editor permanece em inglês)
3. No seu dashboard clique no ícone no canto superior direito e depois em `Edit dashboard`
4. Clique novamente nesse ícone e depois em `Manage resources`
5. Clique em `Add resource`
6. Copie e cole isto: `/local/bubble-card.js?v=1`
7. Clique em `JavaScript Module` e depois em `Create`
8. Volte atrás e atualize a página
9. Já pode clicar em `Add card` no canto inferior direito e procurar por `Bubble Card`
10. Após cada atualização do ficheiro, terá de editar `/local/bubble-card.js?v=1` e alterar a versão para um número mais alto

Se não estiver a funcionar, tente limpar a cache do seu navegador.

</details>

<details>

<summary>Com HACS (Recomendado)</summary>

<br>

Este método permite obter atualizações diretamente na Home Assistant Community Store

1. Se o HACS ainda não estiver instalado, descarregue-o seguindo as instruções em [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Prossiga com a configuração inicial do HACS seguindo as instruções em [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Na sua barra lateral vá a "HACS"
4. Procure por "Bubble Card", ou clique no botão azul abaixo
5. Clique em "Download"
6. Volte ao seu dashboard e clique no ícone no canto superior direito e depois em `Edit dashboard`
7. Já pode clicar em `Add card` no canto inferior direito e procurar por `Bubble Card`

Se não estiver a funcionar, tente limpar a cache do seu navegador/aplicação (em todos os seus dispositivos, se necessário).

#### Vídeos

Também pode consultar o meu canal do YouTube para vídeos passo a passo.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configuração

Todas as opções podem ser configuradas no editor do Home Assistant. Mas pode encontrar mais detalhes e o YAML na documentação abaixo.

<details>

<summary><b>Opções principais (YAML + descrição)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `type` | string | **Obrigatório** | `custom:bubble-card` | Tipo do cartão |
| `card_type` | string | **Obrigatório** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ou `sub-buttons` | Tipo do Bubble Card, ver abaixo |
| `styles` | object list | Opcional | Qualquer folha de estilo CSS | Permite personalizar o CSS do seu Bubble Card, ver [estilo](#estilo) |

</details>

<details>

<summary><b>Variáveis CSS globais (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Raio da borda para todos os elementos suportados |
| `--bubble-main-background-color` | `color` | Cor de fundo principal para todos os elementos suportados |
| `--bubble-secondary-background-color` | `color` | Cor de fundo secundária para todos os elementos suportados |
| `--bubble-accent-color` | `color` | Cor de destaque para todos os elementos suportados |
| `--bubble-icon-border-radius` | `px` | Raio da borda do ícone para todos os elementos suportados |
| `--bubble-icon-background-color` | `color` | Cor de fundo do ícone para todos os elementos suportados |
| `--bubble-sub-button-border-radius` | `px` | Raio da borda para todos os sub-botões |
| `--bubble-sub-button-background-color` | `color` | Cor de fundo para todos os sub-botões |
| `--bubble-box-shadow` | ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra da caixa para todos os elementos suportados |
| `--bubble-border` | ver [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Borda para todos os cartões suportados |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Veja este [vídeo](https://www.youtube.com/watch?v=0hSQOlBxKKI) para conhecer o Bubble Card e as suas capacidades.** O meu canal do YouTube é bastante recente e foca-se em tutoriais sobre Home Assistant e Bubble Card. Não hesite em subscrever para ajudar a aumentar a visibilidade do meu canal. Muito obrigado desde já!

<br>

---

<br>

## Sugestões de entidades

Desde o Home Assistant 2026.6, escolher uma entidade no seletor de cartões propõe-lhe alguns cartões prontos, e o Bubble Card acrescenta as suas próprias receitas a essa lista. Escolha uma luz e é-lhe proposto um cartão com um slider de brilho, além de variantes de temperatura de cor, cor e saturação quando a sua luz as suportar. Escolha um estore e obtém o slider de posição, escolha um leitor multimédia e obtém também uma variante com a lista de fontes, escolha um aspirador e obtém os botões de iniciar, pausar e regressar à base. Cada sugestão é uma configuração normal do Bubble Card apresentada como pré-visualização ao vivo, pelo que pode ficar com a mais próxima e continuar a editá-la como sempre.

O que lhe é proposto depende do que a sua entidade sabe realmente fazer: uma luz sem canal de brilho recebe um interruptor em vez de um slider, um estore que não inclina não recebe a variante de inclinação, e uma entidade de climatização só recebe os seus modos predefinidos quando tem algum. As opções clássicas surgem por baixo das sugestões do Bubble Card quando se aplicam: o cartão dedicado a esse tipo de entidade, um botão simples e um slider.

> [!TIP]
> Os módulos podem acrescentar as suas próprias sugestões a essa lista, ver [módulos](#módulos).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Este cartão permite criar um pop-up com qualquer conteúdo. Cada pop-up está **oculto por predefinição** e pode ser aberto direcionando para a sua ligação (por exemplo, `'#pop-up-name'`), com qualquer cartão que suporte a [ação](#ações-de-toque-duplo-toque-e-toque-longo) `navigate`, ou com a [pilha de botões horizontal](#pilha-de-botões-horizontal) incluída.

> [!TIP]
> ### Gatilho do pop-up 
> Esta funcionalidade permite abrir um pop-up com base no estado de qualquer entidade, por exemplo, pode abrir um pop-up "Segurança" com uma câmara quando uma pessoa está em frente à sua casa. Também pode criar um helper de alternância (input_boolean) e acionar a sua abertura/fecho numa automação.
> <details>
> <summary>Abrir um pop-up quando um <code>binary_sensor</code> está <code>on</code></summary>
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
> ### Diferentes formas de fechar um pop-up 
> Existem várias formas de fechar um pop-up. Por exemplo, pode deslizar do cabeçalho do pop-up para baixo, fazendo um deslize longo dentro do pop-up até ao fundo, pressionando Escape no computador, removendo a hash do URL ou simplesmente pressionando o botão de fechar.
>


### Opções do pop-up

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obrigatório** | Qualquer hash único (por exemplo, `'#kitchen'`) com ' ' | É assim que irá abrir o seu pop-up |
| `popup_style` | string | Opcional | `bubble` (predefinição) ou `classic` | Define o estilo visual do pop-up |
| `popup_mode` | string | Opcional | `default` (predefinição), `fit-content`, `centered` ou `adaptive-dialog` | Define o modo de disposição do pop-up |
| `with_bottom_offset` | boolean | Opcional | `true` ou `false` (predefinição) | Usado apenas com `popup_mode: fit-content` ou `adaptive-dialog`. Aplica um desvio inferior no telemóvel, útil quando o seu dashboard inclui um cartão de rodapé. |
| `full_width_on_mobile` | boolean | Opcional | `true` ou `false` (predefinição) | Usado apenas com `popup_mode: centered`. Expande o pop-up para a largura total do ecrã no telemóvel, útil em ecrãs mais pequenos. |
| `performance_mode` | string | Opcional | `default` (predefinição) ou `performance` | Otimiza a animação de abertura do pop-up. `performance` atrasa ligeiramente a renderização do conteúdo e o desfoque de fundo, também desativa o desfoque do backdrop se estiver definido. |
| `auto_close` | string | Opcional | Um tempo limite em milissegundos (por exemplo, `10000` para 10s) | Fecha automaticamente o pop-up após um tempo limite |
| `close_on_click` | boolean | Opcional | `true` ou `false` (predefinição) | Fecha automaticamente o pop-up após qualquer interação |
| `close_by_clicking_outside` | boolean | Opcional | `true` (predefinição) ou `false` | Fecha o pop-up ao clicar fora dele |
| `width_desktop` | string | Opcional | Qualquer valor CSS | Largura no computador (`100%` por predefinição no telemóvel) |
| `margin` | string | Opcional | Qualquer valor CSS | Use isto **apenas** se o seu pop-up não estiver bem centrado no telemóvel (por exemplo, `13px`) |
| `margin_top_mobile` | string | Opcional | Qualquer valor CSS | Margem superior no telemóvel (por exemplo, `-56px` se o cabeçalho estiver oculto) |
| `margin_top_desktop` | string | Opcional | Qualquer valor CSS | Margem superior no computador (por exemplo, `50vh` para um pop-up de metade do tamanho ou `calc(100vh - 400px)` para uma altura fixa de `400px`) |
| `bg_color` | string | Opcional | Qualquer valor hex, rgb ou rgba | A cor de fundo do seu pop-up (por exemplo, `#ffffff` para um fundo branco) |
| `bg_opacity` | string | Opcional | Qualquer valor de `0` a `100` | A opacidade de fundo do seu pop-up (por exemplo, `100` para nenhuma transparência) |
| `bg_blur` | string | Opcional | Qualquer valor de `0` a `100` | O efeito de desfoque de fundo do seu pop-up, **isto só funciona se `bg_opacity` não estiver definido como `100`** (por exemplo, `0` para nenhum desfoque)|
| `shadow_opacity` | string | Opcional | Qualquer valor de `0` a `100` | A opacidade da sombra do seu pop-up (por exemplo, `0` para a ocultar) |
| `hide_backdrop` | boolean | Opcional | `true` ou `false` (predefinição) | Defina isto como true no primeiro pop-up do seu dashboard principal para desativar o backdrop em todos os pop-ups. |
| `background_update` | boolean | Opcional | `true` ou `false` (predefinição) | Atualiza o conteúdo do pop-up em segundo plano (não recomendado) |
| `trigger` | object ou list | Opcional | Ver [condições](#condições) | Abre este pop-up quando as condições são cumpridas |
| `trigger_entity` | string | Opcional | Qualquer entidade | Abre este pop-up com base no estado de qualquer entidade, a forma simples de `trigger` |
| `trigger_state` | string | Opcional (**Obrigatório** se `trigger_entity` estiver definido) | Qualquer estado de entidade | Estado da entidade para abrir o pop-up |
| `trigger_close` | boolean | Opcional | `true` (predefinição) ou `false` | Fecha o pop-up quando as condições deixam de ser cumpridas. A predefinição passa a ser `false` quando usa o par mais antigo `trigger_entity` e `trigger_state` |
| `open_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Aciona uma ação quando o pop-up está a abrir |
| `close_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Aciona uma ação quando o pop-up está a fechar |
| `show_header` | boolean | Opcional | `true` (predefinição) ou `false` | Mostra/Oculta o cabeçalho do pop-up por completo |
| `show_previous_button` | boolean | Opcional | `true` ou `false` (predefinição) | Mostra um botão anterior junto ao botão de fechar e navega de volta para o pop-up anterior quando disponível |
| `show_close_button` | boolean | Opcional | `true` (predefinição) ou `false` | Mostra ou oculta o botão de fechar mantendo o resto do cabeçalho visível |
| `buttons_position` | string | Opcional | `right` (predefinição) ou `left` | Posição dos botões de fechar e anterior no cabeçalho |
| `cards` | list | Opcional | Qualquer Bubble Card, cartão do Home Assistant ou cartão personalizado | Define o conteúdo do seu pop-up. Ver o exemplo de pop-up abaixo. |
| Também tem acesso a [todas as definições de botão](#botão) para o cabeçalho do pop-up. | | Opcional | | Se não estiver definido, nenhum cabeçalho será mostrado |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Raio da borda do pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Cor de fundo principal para os elementos suportados do pop-up |
| `--bubble-pop-up-background-color` | `color` | Cor de fundo do pop-up |
| `--bubble-backdrop-background-color` | `color` | Cor de fundo do backdrop |
| Também tem acesso a [todas as variáveis CSS do botão](#opções-do-botão) para o cabeçalho do pop-up. | | |

</details>


### Formato de pop-up autónomo (v3.2.0+)

Desde a v3.2.0, os pop-ups usam um novo formato autónomo em que os cartões de conteúdo são definidos diretamente dentro do pop-up usando a opção `cards`. Isto proporciona um melhor desempenho e uma nova experiência de edição por arrastar e soltar baseada em secções.


#### Exemplos

<details>

<summary>Um pop-up (formato autónomo)</summary>

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

<summary>Um botão para abrir o pop-up</summary>

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

## Pilha de botões horizontal

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Este cartão é um bom complemento ao cartão pop-up, permitindo abrir os pop-ups correspondentes. Também permite abrir qualquer página do seu dashboard. Além disso, pode adicionar os seus sensores de movimento/ocupação para que a ordem dos botões se adapte de acordo com a divisão em que acabou de entrar. Este cartão é deslizável, permanece visível e funciona como rodapé.

> [!IMPORTANT]  
> Este cartão tem de ser o último na sua vista (depois de todos os cartões e pop-ups). Não pode estar dentro de nenhuma pilha.

### Opções da pilha de botões horizontal

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obrigatório** | A hash do pop-up (por exemplo, `'#kitchen'`) com ' ' ou qualquer ligação | Uma ligação para abrir |
| `1_name` | string | Opcional | Qualquer string | Um nome para o seu botão |
| `1_icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu botão |
| `1_entity` | string | Opcional | Qualquer luz ou grupo de luzes | Mostra a cor dessa luz em fundo |
| `1_pir_sensor` | string | Opcional | Qualquer sensor binário | Pelo menos um sensor pir ou mais para `auto_order`, na verdade também funciona com qualquer tipo de entidade, por exemplo pode adicionar grupos de luzes e a ordem mudará com base no último estado alterado. |
| `auto_order` | boolean | Opcional | `true` ou `false` (predefinição) | Altera a ordem dos botões de acordo com a última alteração de `_pir_sensor`, **tem de ser `false` se não tiver nenhum `_pir_sensor` no seu código** |
| `margin` | string | Opcional | Qualquer valor CSS | Use isto **apenas** se a sua `horizontal-buttons-stack` não estiver bem centrada no telemóvel (por exemplo, `13px`) |
| `width_desktop` | string | Opcional | Qualquer valor CSS | Largura no computador (`100%` por predefinição no telemóvel) |
| `is_sidebar_hidden` | boolean | Opcional | `true` ou `false` (predefinição) | Corrige a posição da pilha de botões horizontal se a barra lateral estiver oculta no computador (apenas se tiver feito uma modificação para a ocultar você mesmo) |
| `rise_animation` | boolean | Opcional | `true` (predefinição) ou `false` | Defina isto como `false` para desativar a animação que é ativada assim que a página é carregada |
| `highlight_current_view` | boolean | Opcional | `true` ou `false` (predefinição) | Destaca a hash / vista atual com uma animação suave |
| `hide_gradient` | boolean | Opcional | `true` ou `false` (predefinição) | Defina isto como `false` para ocultar o gradiente |

> [!IMPORTANT]  
> As variáveis que começam com um número definem os seus botões, basta alterar esse número para adicionar mais botões (ver exemplo abaixo).

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Raio da borda para os botões da pilha de botões horizontal |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Cor de fundo para os botões da pilha de botões horizontal |

</details>


#### Exemplo

<details>

<summary>Uma pilha de botões horizontal que se reorganiza com base em sensores de ocupação</summary>

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

## Botão

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Este cartão é muito versátil. Pode ser usado como **interruptor**, **slider**, **estado** ou botão de **nome/texto**.

> [!TIP]
> ### Quais são as diferenças entre todos os tipos de botão?
>
> - **Botão interruptor:** Este é o tipo de botão padrão. Por padrão, alterna uma entidade e a sua cor de fundo muda de acordo com o estado da entidade ou com a cor de uma luz. Pode alterar a sua ação na secção **Ação de toque no cartão**.
>
> - **Botão slider:** Este tipo de botão permite controlar entidades com intervalos ajustáveis. É ideal para regular a intensidade de luzes, e a sua cor de preenchimento adapta-se à cor da luz. Também pode ser usado para mostrar valores, como o nível de uma bateria.
>   Entidades suportadas para sliders:
>   - Luz (brilho)
>   - Leitor multimédia (volume)
>   - Estore (posição)
>   - Ventoinha (percentagem)
>   - Climatização (temperatura)
>   - Input number e number (valor)
>   - Sensor de bateria (percentagem, apenas leitura)
>
>   Também pode usar qualquer entidade com estado numérico desativando o filtro de entidades em **Definições do slider**, definindo depois os valores `min` e `max`. Esta opção é apenas de leitura.
>
> - **Botão de estado:** Perfeito para mostrar informação de um sensor ou de qualquer entidade. Ao premir, mostra o painel "Mais informação" da entidade. A sua cor de fundo não muda.
>
> - **Botão de nome/texto:** O único tipo de botão que não precisa de uma entidade. Permite mostrar um texto curto, um nome ou um título. Também é possível adicionar-lhe ações. A sua cor de fundo não muda.

### Opções do botão

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer entidade | Uma entidade a controlar |
| `button_type` | string | Opcional | `switch` (padrão), `slider`, `state` ou `name` | O comportamento do seu botão |
| `name` | string | Opcional | Qualquer string | Um nome para o seu botão, se não for definido mostrará o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu botão, se não for definido mostrará o ícone da entidade ou a `entity-picture` |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `use_accent_color` | boolean | Opcional (padrão `false`) | **Apenas para luzes.** Usa a cor de destaque do tema em vez da cor da luz.                         |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a mostrar (por exemplo, `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto deslize quando o conteúdo excede o tamanho do seu contentor |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, ver abaixo | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não estiver definido, será usado `more-info` |
| `double_tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não estiver definido, será usado `none` |
| `hold_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao manter premido o ícone, se não estiver definido, será usado `more-info` |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na vista de secções), `large` (padrão se estiver na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |
| `sub_button` | object | Opcional | Ver [sub-botões](#sub-botões) | Adiciona botões personalizados fixos à direita |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no botão |
| `--bubble-button-border-radius` | `px` | Raio da margem para o botão |
| `--bubble-button-icon-border-radius` | `px` | Raio da margem para o contentor do ícone do botão |
| `--bubble-button-icon-background-color` | `color` | Cor de fundo para o contentor do ícone do botão |
| `--bubble-light-white-color` | `color` | Substitui a cor branca padrão dos botões/sliders de luz |
| `--bubble-light-color` | `color` | Substitui a cor dos botões/sliders de luz (mesmo luzes RGB) |
| `--bubble-button-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do botão |

</details>

Estas opções só estão disponíveis quando `button_type` está definido como `slider`.

<details>

<summary><b>Opções do slider (YAML + descrições)</b></summary>

| Nome                  | Tipo    | Requisito                     | Descrição                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opcional                        | O valor mínimo do slider. Para sliders personalizados.                                                    |
| `max_value`             | number  | Opcional                        | O valor máximo do slider. Para sliders personalizados.                                                    |
| `step`                  | number  | Opcional                        | O valor do passo do slider.                                                                           |
| `tap_to_slide`          | boolean | Opcional (padrão `false`)      | Ativa o comportamento anterior do slider, em que se toca para o ativar em vez de o manter premido.        |
| `relative_slide`        | boolean | Opcional (padrão `false` )     | Atualiza o valor em relação ao valor inicial, em vez do ponto de toque inicial.                      |
| `read_only_slider`      | boolean | Opcional (padrão `false`)      | Torna o slider apenas de leitura. Ativado automaticamente para algumas entidades, como sensores.                                                                 |
| `slider_live_update`    | boolean | Opcional (padrão `false`)      | O estado da entidade é atualizado durante o deslizar. **Esta funcionalidade não é recomendada para todas as entidades.**        |
| `slider_fill_orientation` | string | Opcional | `left`, `right`, `top` ou `bottom` | Altera a direção de preenchimento do slider. Da esquerda para a direita quando não definido, espelhado em [idiomas da direita para a esquerda](#localização) |
| `slider_value_position` | string | Opcional | `right`, `left`, `center` ou `hidden` | Posição da exibição do valor. À direita quando não definido, e à esquerda em [idiomas da direita para a esquerda](#localização) |
| `invert_slider_value` | boolean | Opcional (padrão `false`) | Inverte a direção do slider (preenchimento a 100% equivale ao mínimo). Não disponível para sliders de cor. |
| `light_slider_type` | string | Opcional | `brightness` (padrão), `hue`, `saturation`, `white_temp` | **Apenas para luzes.** Escolhe o modo do slider |
| `cover_slider_type` | string | Opcional | `position` (padrão), `tilt_position` | **Apenas para estores.** Escolhe o modo do slider (posição ou inclinação) |
| `hue_force_saturation` | boolean | Opcional (padrão `false`) | **Apenas para luzes (modo Hue).** Força a saturação ao ajustar o Hue |
| `hue_force_saturation_value` | number | Opcional (padrão `100`) | **Apenas para luzes (modo Hue).** Valor de saturação forçado (0-100) |
| `use_accent_color` | boolean | Opcional (padrão `false`) | **Apenas para luzes (modo Brilho).** Usa a cor de destaque do tema em vez da cor da luz |
| `allow_light_slider_to_0` | boolean | Opcional (padrão `false`)    | **Apenas para luzes.** Permite que o slider chegue a 0%, o que desliga a luz. Não disponível com `tap_to_slide`. |
| `light_transition`      | boolean | Opcional (padrão `false`)      | **Apenas para luzes.** Ativa transições suaves de brilho para luzes suportadas.                           |
| `light_transition_time` | number  | Opcional (padrão `500`)        | **Apenas para luzes.** O tempo de transição em milissegundos. Requer `light_transition: true`.            |

</details>

#### Exemplos

<details>

<summary>Um botão slider que pode controlar o brilho de uma luz</summary>

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

<summary>Um botão com mais opções</summary>

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

## Leitor multimédia

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Este cartão permite controlar uma entidade de leitor multimédia.

### Opções do leitor multimédia

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer leitor multimédia | O leitor multimédia a controlar |
| `name` | string | Opcional | Qualquer string | Um nome para o seu leitor multimédia, se não for definido mostrará o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu leitor multimédia, se não for definido mostrará o ícone da entidade ou a `entity-picture` |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a mostrar (por exemplo, `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto deslize quando o conteúdo excede o tamanho do seu contentor |
| `min_volume` | number | Opcional | Qualquer número | O valor mínimo do slider de volume. |
| `max_volume` | number | Opcional | Qualquer número | O valor máximo do slider de volume. |
| `cover_background` | boolean | Opcional | `true` ou `false` (padrão) | Usa uma capa multimédia desfocada como fundo do cartão. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não estiver definido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não estiver definido, será usado `none`. |
| `hold_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao manter premido o ícone, se não estiver definido, será usado `more-info`. |
| `main_buttons_position` | string | Opcional | `default` ou `bottom` | Move os botões de ação da capa para baixo (fixo) |
| `main_buttons_full_width` | boolean | Opcional | `true` ou `false` | Torna os botões de ação inferiores em largura total (padrão: `true` quando a posição é `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (padrão), `center`, `start`, `space-between` | Alinhamento dos botões de ação inferiores quando não estão em largura total |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na vista de secções), `large` (padrão se estiver na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |
| `sub_button` | object | Opcional | Ver [sub-botões](#sub-botões) | Adiciona botões personalizados fixos à direita |
| `hide` | object | Opcional | Ver abaixo | Oculta botões do cartão |

#### Opções de ocultação

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão de reproduzir/pausar |
| `volume_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão de volume |
| `previous_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão anterior |
| `next_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão seguinte |
| `power_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão de energia |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Cor de fundo principal para o leitor multimédia |
| `--bubble-media-player-border-radius` | `px` | Raio da margem para o leitor multimédia |
| `--bubble-media-player-buttons-border-radius` | `px` | Raio da margem para os botões do leitor multimédia |
| `--bubble-media-player-slider-background-color` | `color` | Cor de fundo para o slider de volume |
| `--bubble-media-player-icon-border-radius` | `px` | Raio da margem para o contentor do ícone do leitor multimédia |
| `--bubble-media-player-icon-background-color` | `color` | Cor de fundo para o contentor do ícone do leitor multimédia |
| `--bubble-media-player-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do leitor multimédia |

</details>


#### Exemplos

<details>

<summary>Um leitor multimédia com todas as opções</summary>

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

## Estore

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Este cartão permite controlar as suas entidades `cover`.

### Opções do estore

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer estore | Um estore a controlar |
| `name` | string | Opcional | Qualquer string | Um nome para o seu estore, se não for definido mostrará o nome da entidade |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a mostrar (por exemplo, `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto deslize quando o conteúdo excede o tamanho do seu contentor |
| `icon_open` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu estore aberto, se não for definido mostrará o ícone padrão de estore aberto |
| `icon_close` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu estore fechado, se não for definido mostrará o ícone padrão de estore fechado |
| `icon_up` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu botão de abrir estore, se não for definido mostrará o ícone padrão de abrir estore |
| `icon_down` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu botão de fechar estore, se não for definido mostrará o ícone padrão de fechar estore |
| `open_service` | string | Opcional | Qualquer serviço ou script | Um serviço para abrir o seu estore, por padrão `cover.open_cover` |
| `stop_service` | string | Opcional | Qualquer serviço ou script | Um serviço para parar o seu estore, por padrão `cover.stop_cover` |
| `close_service` | string | Opcional | Qualquer serviço ou script | Um serviço para fechar o seu estore, por padrão `cover.close_cover` |
| `tilt_buttons` | string | Opcional | `top` (padrão), `bottom`, `left`, `right`, `hidden` | Posição dos botões de controlo da inclinação (apenas mostrados se o estore suportar inclinação) |
| `open_tilt_service` | string | Opcional | Qualquer serviço ou script | Um serviço para abrir a inclinação, por padrão `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opcional | Qualquer serviço ou script | Um serviço para fechar a inclinação, por padrão `cover.close_cover_tilt` |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não estiver definido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não estiver definido, será usado `none`. |
| `hold_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao manter premido o ícone, se não estiver definido, será usado `more-info`. |
| `main_buttons_position` | string | Opcional | `default` ou `bottom` | Move os controlos multimédia para baixo (fixo) |
| `main_buttons_full_width` | boolean | Opcional | `true` ou `false` | Torna os controlos inferiores em largura total (padrão: `true` quando a posição é `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (padrão), `center`, `start`, `space-between` | Alinhamento dos controlos inferiores quando não estão em largura total |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na vista de secções), `large` (padrão se estiver na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |
| `sub_button` | object | Opcional | Ver [sub-botões](#sub-botões) | Adiciona botões personalizados fixos à direita |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no cartão de estore |
| `--bubble-cover-border-radius` | `px` | Raio da margem para o cartão de estore |
| `--bubble-cover-icon-border-radius` | `px` | Raio da margem para o contentor do ícone do cartão de estore |
| `--bubble-cover-icon-background-color` | `color` | Cor de fundo para o contentor do ícone do cartão de estore |
| `--bubble-cover-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do cartão de estore |
| `--bubble-button-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra dos botões no cartão de estore |

</details>


#### Exemplo

<details>

<summary>Um cartão que pode controlar uma persiana de rolo</summary>

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

## Seleção

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Este cartão permite adicionar um menu suspenso para as suas entidades `input_select` / `select`. Este cartão também suporta os sub-botões e todas as funcionalidades comuns do Bubble Card.

> [!TIP]
> Também pode ter sub-botões de seleção se quiser, esta funcionalidade está disponível em todos os cartões que suportam sub-botões.

### Opções de seleção

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer entidade | Uma entidade a controlar |
| `name` | string | Opcional | Qualquer string | Um nome para a sua seleção, se não for definido mostrará o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para a sua seleção, se não for definido mostrará o ícone da entidade ou a `entity-picture` |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a mostrar (por exemplo, `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto deslize quando o conteúdo excede o tamanho do seu contentor |
| `tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não estiver definido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não estiver definido, será usado `none`. |
| `hold_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao manter premido o ícone, se não estiver definido, será usado `more-info`. |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na vista de secções), `large` (padrão se estiver na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |
| `sub_button` | object | Opcional | Ver [sub-botões](#sub-botões) | Adiciona botões personalizados fixos à direita |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no cartão de seleção |
| `--bubble-select-background-color` | `color` | Cor de fundo para o cartão de seleção |
| `--bubble-select-list-border-radius` | `px` | Raio da margem para o menu suspenso no cartão |
| `--bubble-select-list-item-accent-color` | `color` | Cor de destaque para o item selecionado |
| `--bubble-select-list-background-color` | `color` | Cor de fundo para o menu suspenso no cartão |
| `--bubble-select-list-width` | `px` | Largura do menu suspenso no cartão |
| `--bubble-select-arrow-background-color` | `color` | Cor de fundo para a seta do menu suspenso |
| `--bubble-select-button-border-radius` | `px` | Raio da margem para o botão de seleção |
| `--bubble-select-border-radius` | `px` | Raio da margem para o cartão de seleção |
| `--bubble-select-icon-border-radius` | `px` | Raio da margem para o contentor do ícone do cartão de seleção |
| `--bubble-select-icon-background-color` | `color` | Cor de fundo para o contentor do ícone do cartão de seleção |
| `--bubble-select-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do cartão de seleção |

</details>


#### Exemplos

<details>

<summary>Um cartão de seleção com uma lista de cenas</summary>

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

## Climatização

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Este cartão permite controlar as suas entidades `climate`.

> [!TIP]
> O menu de seleção de modo é um [sub-botão](#sub-botões) que é adicionado automaticamente ao criar o cartão. Pode então modificá-lo ou removê-lo à vontade.

### Opções de climatização

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome                     | Tipo    | Requisito                         | Opções suportadas                                  | Descrição                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obrigatório**                        | Entidade de climatização                                   | A entidade a controlar (por exemplo, `climate.living_room`).                                                            |
| `name`                  | string  | Opcional                            | Qualquer string                                       | Um nome personalizado para o cartão. Se não for definido, mostrará o nome da entidade.                                    |
| `icon`                  | string  | Opcional                            | Qualquer ícone `mdi:`                                  | Um ícone personalizado para o cartão. Se não for definido, será usado o ícone da entidade ou a `entity-picture`.                   |
| `force_icon`            | boolean | Opcional                            | `true` ou `false` (padrão)                     | Dá prioridade ao ícone em vez da `entity-picture`.                                                           |
| `show_state`            | boolean | Opcional                            | `true` ou `false` (padrão)                     | Mostra ou oculta o estado atual da `entity`.                                                                 |
| `show_name`             | boolean | Opcional                            | `true` (padrão) ou `false`                     | Mostra ou oculta o nome da entidade.                                                                            |
| `show_icon`             | boolean | Opcional                            | `true` (padrão) ou `false`                     | Mostra ou oculta o ícone.                                                                                          |
| `hide_target_temp_low`  | boolean | Opcional (apenas para entidades que suportam `target_temp_low`) | `true` ou `false` (padrão) | Oculta o controlo da temperatura mínima alvo se suportado pela `entity`.                                          |
| `hide_target_temp_high` | boolean | Opcional (apenas para entidades que suportam `target_temp_high`)| `true` ou `false` (padrão) | Oculta o controlo da temperatura máxima alvo se suportado pela `entity`.                                         |
| `state_color`           | boolean | Opcional                            | `true` ou `false` (padrão)                     | Aplica uma cor de fundo constante quando a entidade de climatização está ligada.                                                              |
| `step` | number | Opcional | Qualquer número | O passo da temperatura. |
| `min_temp` | number | Opcional | Qualquer número | A temperatura mínima. |
| `max_temp` | number | Opcional | Qualquer número | A temperatura máxima. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não estiver definido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não estiver definido, será usado `none`. |
| `hold_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao manter premido o ícone, se não estiver definido, será usado `more-info`. |                              |
| `main_buttons_position` | string | Opcional | `default` ou `bottom` | Move os botões de ação de climatização para baixo (fixo) |
| `main_buttons_full_width` | boolean | Opcional | `true` ou `false` | Torna os botões de ação inferiores em largura total (padrão: `true` quando a posição é `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (padrão), `center`, `start`, `space-between` | Alinhamento dos botões de ação inferiores quando não estão em largura total |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na vista de secções), `large` (padrão se estiver na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |
| `sub_button`            | object  | Opcional                            | Ver [sub-botões](#sub-botões)                | Adiciona botões personalizados fixos à direita. Útil para um menu de seleção do modo de climatização.                                  |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no cartão de climatização |
| `--bubble-climate-border-radius` | `px` | Raio da margem para os elementos suportados no cartão de climatização |
| `--bubble-climate-button-background-color` | `color` | Cor de fundo para os botões do cartão de climatização |
| `--bubble-climate-icon-border-radius` | `px` | Raio da margem para o contentor do ícone do cartão de climatização |
| `--bubble-state-climate-fan-only-color` | `color` | Cor de sobreposição para o estado apenas ventoinha |
| `--bubble-state-climate-dry-color` | `color` | Cor de sobreposição para o estado seco |
| `--bubble-state-climate-cool-color` | `color` | Cor de sobreposição para o estado de arrefecimento |
| `--bubble-state-climate-heat-color` | `color` | Cor de sobreposição para o estado de aquecimento |
| `--bubble-state-climate-auto-color` | `color` | Cor de sobreposição para o estado automático |
| `--bubble-state-climate-heat-cool-color` | `color` | Cor de sobreposição para o estado de aquecimento-arrefecimento |
| `--bubble-climate-accent-color` | `color` | Cor de destaque para o cartão de climatização |
| `--bubble-climate-box-shadow` | Ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do contentor de climatização. |

</details>


#### Exemplos

<details>

<summary>Um cartão de climatização com um menu suspenso de modos HVAC</summary>

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

## Calendário

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Este cartão permite mostrar as suas entidades de calendário. O seu conteúdo é deslizável, para que possa navegar facilmente pelos próximos eventos.

### Opções do calendário

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome                | Tipo    | Requisito  | Opções suportadas                               | Descrição                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Opcional     | Qualquer número (mínimo: 1)                        | Número de dias de calendário para buscar eventos, desde agora até ao final do enésimo dia (padrão: 7) |
| `entities`          | object  | **Obrigatório** | Um objeto de entidade de calendário (ver abaixo)            | A entidade a controlar (por exemplo, `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obrigatório** | Uma entidade de calendário                               | A entidade de calendário a mostrar                                                          |
| `entities.color`    | string  | Opcional     | Uma cor                                         | Uma cor personalizada para o chip do calendário. Se não for definida, uma cor automática será escolhida |
| `days`              | number  | Opcional     | Qualquer número (mínimo: 1)                         | Número de dias de calendário para buscar eventos, desde agora até ao final do enésimo dia (padrão: 7) |
| `limit`             | number  | Opcional     | Um número                                        | A quantidade de eventos que será mostrada no cartão                                  |
| `show_end`          | boolean | Opcional     | `true` ou `false` (padrão)                     | Mostra ou oculta a hora de fim dos eventos                                                    |
| `show_progress`     | boolean | Opcional     | `true` (padrão) ou `false`                     | Mostra ou oculta a barra de progresso do evento                                                     |
| `show_started_events`| boolean | Opcional     | `true` (padrão) ou `false`                     | Mostra ou oculta os eventos que estão atualmente em curso. Os eventos de vários dias são avaliados um dia de cada vez, pelo que só o dia em curso é ocultado e os dias seguintes continuam visíveis |
| `scrolling_effect`  | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto deslize quando o conteúdo excede o tamanho do seu contentor |
| `event_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Permite adicionar ações ao clicar no evento. |
| `tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar no dia, se não estiver definido, será usado `none`. |
| `double_tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no dia, se não estiver definido, será usado `none`. |
| `hold_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao manter premido o dia, se não estiver definido, será usado `none`. |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na vista de secções), `large` (padrão se estiver na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |
| `sub_button` | object | Opcional | Ver [sub-botões](#sub-botões) | Adiciona botões personalizados fixos à direita |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável                                  | Valor esperado | Descrição                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Cor de fundo principal para os elementos suportados no cartão de calendário  |
| `--bubble-calendar-border-radius`         | `px`           | Raio da margem para os elementos suportados no cartão de calendário |
| `--bubble-calendar-height`                | `px`           | Altura do cartão de calendário                                        |

</details>

#### Exemplos

<details>

<summary>Um cartão de calendário com uma quantidade limitada de eventos</summary>

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

<summary>Um cartão de calendário com uma hora de fim e uma barra de progresso</summary>

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

Este cartão é um separador simples para dividir o seu pop-up em categorias/secções. Por exemplo: Luzes, Dispositivos, Estores, Definições, Automações...

### Opções do separador

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `name` | string | Opcional mas recomendado | Qualquer string | Um nome para o seu separador |
| `icon` | string | Opcional mas recomendado | Qualquer ícone `mdi:` | Um ícone para o seu separador |
| `card_layout` | string | Opcional | `normal` (padrão fora da vista de secções), `large` (padrão na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |
| `sub_button` | object | Opcional | Ver [sub-botões](#sub-botões) | Adicione botões personalizados fixos à direita |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Cor de fundo da linha no separador |

</details>

#### Exemplo

<details>

<summary>Um separador/divisor para uma secção "Estores"</summary>

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

## Coluna vazia

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Este cartão serve para preencher uma coluna vazia. É útil se tiver um `horizontal-stack` no seu pop-up com apenas um cartão. Repare no canto inferior direito desta captura de ecrã para (não) o ver.

### Opções da coluna vazia

Este cartão não tem opções e não suporta [estilo](#estilo), embora suporte opções de disposição para as secções do HA.

#### Exemplo

<details>

<summary>Uma coluna vazia numa pilha horizontal</summary>

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

## Apenas sub-botões

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Este cartão é dedicado apenas a sub-botões. É perfeito para menus, ações rápidas, chips informativos ou um rodapé fixo no fundo da página.

> [!IMPORTANT]  
> Este cartão usa o novo esquema de sub-botões. Use `sub_button.bottom` para definir os seus botões. A secção `sub_button.main` é ignorada.

### Opções de apenas sub-botões

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obrigatório** | Ver [sub-botões](#sub-botões) | Defina os seus sub-botões usando a secção `bottom` |
| `hide_main_background` | boolean | Opcional | `true` ou `false` (padrão) | Remove o fundo do cartão |
| `footer_mode` | boolean | Opcional | `true` ou `false` (padrão) | Fixa o cartão no fundo da página |
| `footer_full_width` | boolean | Opcional | `true` ou `false` (padrão) | Torna o rodapé em largura total (100%) |
| `footer_width` | number | Opcional | Qualquer número | Largura do rodapé em pixels quando `footer_full_width` é `false` |
| `footer_bottom_offset` | number | Opcional | Qualquer número | Distância ao fundo da página em pixels (padrão: `16`) |
| `card_layout` | string | Opcional | `normal` (padrão fora da vista de secções), `large` (padrão na vista de secções), `large-2-rows`, `large-sub-buttons-grid` | Disposição de estilo do cartão, ver [disposições do cartão](#disposições-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (por exemplo, `2`) |

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Largura do rodapé quando `footer_full_width` é `false` |
| `--bubble-footer-bottom` | `px` | Distância do rodapé ao fundo |
| `--bubble-footer-box-shadow` | ver [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra da caixa para o contentor do rodapé |

</details>

#### Exemplos

<details>

<summary>Chips (como na captura de ecrã)</summary>

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

<summary>Um menu de rodapé fixo</summary>

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

## Sub-botões

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Em qualquer cartão que suporte esta opção, pode adicionar sub-botões para personalizar ainda mais os seus cartões. Pode, por exemplo, criar um botão que controle um aspirador, um cartão de meteorologia, ou quase qualquer coisa que consiga imaginar. Estes sub-botões suportam as ações de toque e a maioria das opções do botão.

Os sub-botões suportam agora três tipos: **Padrão (botão)**, **Cursor** e **Menu suspenso/Seleção**. Pode misturar tipos no mesmo cartão, colocar sub-botões no topo ou no fundo e organizá-los em grupos para disposições mais avançadas.

#### Posicionamento e grupos de sub-botões

<details>

<summary><b>Estrutura dos sub-botões (main / bottom + grupos)</b></summary>

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
- `main` e `bottom` são duas secções independentes. Os sub-botões `bottom` ficam fixos no fundo do cartão.
- `main_layout` e `bottom_layout` aceitam `inline` (padrão) ou `rows` para empilhar os grupos verticalmente.
- Os grupos são objetos com um array `group` e um `buttons_layout` opcional (`inline` ou `column`).
- `justify_content` está disponível **apenas para grupos bottom** (`start`, `center`, `end`, `fill`).
- Quando existem sub-botões `bottom`, a disposição do cartão muda automaticamente para `large`, a menos que defina explicitamente outra disposição.
- Os arrays `sub_button` antigos continuam a ser suportados e são tratados como a secção `main`.

</details>

### Opções dos sub-botões

<details>

<summary><b>Opções (YAML + descrição)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcional | Qualquer entidade | Uma entidade a controlar |
| `name` | string | Opcional | Qualquer string | Um nome para o seu sub-botão, se não for definido mostrará o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu sub-botão, se não for definido mostrará o ícone ou a imagem da entidade |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Força o ícone mesmo que exista uma imagem de entidade disponível |
| `sub_button_type` | string | Opcional | `default`, `slider` ou `select` | Escolha o tipo de sub-botão |
| `show_background` | boolean | Opcional | `true` (padrão) ou `false` | Mostra um fundo para o seu sub-botão, mudará de cor consoante o estado da sua entidade |
| `state_background` | boolean | Opcional | `true` (padrão) ou `false` | Usa a cor do estado quando a entidade está `on` |
| `light_background` | boolean | Opcional | `true` (padrão) ou `false` | Usa a cor da luz para o fundo quando disponível |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a hora da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a mostrar (por exemplo, `brightness`) |
| `select_attribute` | string | Opcional | Uma lista de atributos da sua `entity` (ver opções suportadas acima) | Esta lista de atributos abrirá um menu suspenso se clicada (por exemplo, `effect_list`) |
| `show_arrow` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta a seta do menu suspenso para sub-botões de seleção |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto se desloque quando o conteúdo excede o tamanho do contentor |
| `tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar no sub-botão, se indefinido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no sub-botão, se indefinido, será usado `none`. |
| `hold_action` | object | Opcional | Ver [ações](#ações-de-toque-duplo-toque-e-toque-longo) | Define o tipo de ação ao manter premido o sub-botão, se indefinido, será usado `more-info`. |
| `fill_width` | boolean | Opcional | `true` ou `false` | Preenche a largura disponível (padrão: `false` para main, `true` para bottom) |
| `width` | number ou string | Opcional | Qualquer número ou comprimento CSS | Largura personalizada (`px` para a secção main, `%` para a secção bottom por padrão) |
| `custom_height` | number | Opcional | Qualquer número | Altura personalizada em pixels |
| `content_layout` | string | Opcional | `icon-left` (padrão), `icon-top`, `icon-bottom`, `icon-right` | Posicionamento do ícone dentro do sub-botão |
| `always_visible` | boolean | Opcional | `true` ou `false` (padrão) | **Apenas cursor.** Mostra sempre o cursor em vez de o abrir ao tocar |
| `show_button_info` | boolean | Opcional | `true` ou `false` (padrão) | **Apenas cursor.** Mostra ícone/nome/estado quando `always_visible` está ativado |
| `visibility` | object ou list | Opcional | Ver [condições](#condições) | Mostra ou oculta o sub-botão com base em condições |
| `hide_when_parent_unavailable` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o sub-botão se a entidade do cartão principal estiver indisponível |
| `css_class` | string | Opcional | Qualquer texto | Uma classe CSS adicional no sub-botão, para o visar nos seus [estilos](#estilo) seja qual for o seu nome (ex.: `My value` dá `.my-value`) |

</details>

<details>

<summary><b>Opções do sub-botão cursor (iguais às dos cursores de botão)</b></summary>

<br>

Os sub-botões do tipo cursor suportam as mesmas opções que os cursores de botão, incluindo:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variáveis CSS (ver <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Raio da borda dos sub-botões |
| `--bubble-sub-button-background-color` | `color` | Cor de fundo dos sub-botões |
| `--bubble-sub-button-outline` | `box-shadow` | Contorno acrescentado a um sub-botão ou a um cursor, apenas quando esse elemento é pintado com a mesma cor do cartão por trás, o que o tornaria invisível (defina `none` para o remover) |
| `--bubble-sub-slider-border-radius` | `px` | Raio da borda dos sub-botões cursor |
| `--bubble-sub-slider-background-color` | `color` | Cor de fundo dos sub-botões cursor |
| `--bubble-sub-slider-height` | `px` | Altura dos sub-botões cursor sempre visíveis |
| `--bubble-sub-slider-outline` | `box-shadow` | Contorno apenas dos sub-botões cursor, recorre a `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Cor do texto sobre fundos claros de sub-botão |

</details>

#### Exemplos

<details>

<summary>Um botão com alguns sub-botões para criar um cartão de aspirador (como na captura de ecrã)</summary>

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

<summary>Um cursor de botão com um sub-botão que mostra o brilho e outro que alterna a luz (como na captura de ecrã)</summary>

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

<summary>Um botão que mostra a temperatura interior e exterior com a meteorologia de hoje e amanhã (captura de ecrã incluída)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Má sorte para mim, está sempre nublado, mas todos os ícones mudam consoante a meteorologia.

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

## Disposições do cartão

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

O Bubble Card suporta totalmente a vista de secções do Home Assistant, pode alterar a disposição do cartão para o tornar maior e também alterar o número de colunas ou linhas que o cartão deve ocupar na sua vista de secções (apenas nos cartões que suportam esta opção). Estas disposições também são suportadas em todos os outros tipos de vista.

<details>

<summary><b>Disposições de cartão disponíveis</b></summary>

| Disposição | Descrição |
| --- | --- |
| `normal` | A disposição regular (não otimizada para a vista de secções) |
| `large` | Uma disposição maior que se redimensiona conforme as linhas selecionadas na vista de secções (otimizada para a vista de secções) |
| `large-2-rows` | Uma disposição maior com 2 linhas de sub-botões que se redimensiona conforme as linhas selecionadas na vista de secções (otimizada para a vista de secções) |
| `large-sub-buttons-grid` | Esta disposição mostra os sub-botões numa grelha, `rows` deve ser definido para pelo menos `2`.

</details>

#### Exemplos

<details>

<summary>Um botão grande que mostra estatísticas de energia com 2 linhas de sub-botões (captura de ecrã incluída)</summary>

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

<summary>Um botão grande com várias linhas com 12 sub-botões</summary>

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

## Condições

Algumas opções são regidas por condições, escritas exatamente como as do [cartão condicional](https://www.home-assistant.io/dashboards/conditional/) do Home Assistant:

- `visibility` num [sub-botão](#sub-botões), para o mostrar ou ocultar
- `trigger` num [pop-up](#pop-up), para o abrir quando as condições forem cumpridas
- `checkConditionsMet(conditions, hass)` dentro dos seus [modelos](#modelos), quando precisa da resposta no seu próprio código

Todos os tipos de condição do Home Assistant são avaliados: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, e os grupos `and`, `or` e `not`. As condições do construtor de condições do Home Assistant também funcionam, aquelas que têm o nome do seu domínio, como `sun.is_up`, `light.is_on`, `zone.in_zone` ou `temperature.is_value`, com as suas definições `target`, `options`, `behavior` e `for`.

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
> As condições são avaliadas no seu navegador, pelo que as poucas que precisam do servidor do Home Assistant não podem ser exatas: o nascer e o pôr do sol são lidos da entidade `sun.sun` em vez de recalculados, e uma duração `for` é medida desde a última mudança de estado, sem o histórico do recorder.
>
> `view_columns` é aceite mas passa sempre, já que o Bubble Card nunca é quem dispõe as colunas da sua vista. Um tipo de condição que o Bubble Card não conhece assinala-se uma vez na consola do seu navegador em vez de falhar em silêncio, para que possa distinguir um erro de escrita de uma funcionalidade em falta.

<br>

---

<br>

## Ações de toque, duplo toque e toque longo

Também pode usar as ações padrão do Home Assistant de toque, duplo toque e toque longo nos cartões que suportam esta opção. Por exemplo, isto permite mostrar a janela "mais informação" ao manter premido um ícone de botão ou executar um serviço quando um sub-botão é pressionado.

**Nota: quando um `double_tap_action` está configurado, o `tap_action` normal terá um atraso de 200ms para permitir a deteção
de um duplo toque. Se este atraso for indesejável, defina `double_tap_action` como `none` para desativar a deteção de duplo toque.**

### Opções de ação

<details>

<summary><b>Opções (YAML + descrição)</b></summary>

| Nome | Tipo | Opções suportadas | Descrição |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Ação a executar |
| `target` | object |  | Funciona apenas com `call-service`. Segue a [sintaxe do home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Qualquer caminho do seu painel | Caminho para navegar (por exemplo, `'#kitchen'` para abrir um pop-up) quando a ação é definida como navigate |
| `url_path` | string | Qualquer link | URL a abrir ao clicar (por exemplo, `https://www.google.com`) quando a ação é `url` |
| `service` | string | Qualquer serviço | Serviço a chamar (por exemplo, `media_player.media_play_pause`) quando `action` é definida como `call-service` |
| `data` ou `service_data` | object | Quaisquer dados de serviço | Dados de serviço a incluir (por exemplo, `entity_id: media_player.kitchen`) quando `action` é definida como `call-service` |
| `confirmation` | object | Ver [confirmação](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Mostra um pop-up de confirmação (não um do Bubble Card), substitui o objeto `confirmation` padrão |

</details>

#### Exemplo

<details>

<summary>Um botão para abrir um pop-up</summary>

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

Pode adicionar estilos personalizados para modificar o CSS de todos os cartões **sem usar card-mod** de quatro formas:

- No editor, vá até ao cartão que quer modificar, depois navegue até _Opções de estilo > Estilos personalizados e modelos JS_, e adicione os seus estilos personalizados (veja as dicas e exemplos abaixo).
- No editor (ou em [YAML](#módulos)), vá até ao cartão que quer modificar, depois navegue até _Módulos_, e crie um novo módulo (ficará disponível para todos os cartões), ou vá à **Module Store** para instalar qualquer Módulo disponível (mais detalhes sobre os módulos podem ser encontrados [abaixo](#módulos)).
- Num ficheiro de [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) adicionando variáveis CSS em YAML (estão disponíveis na documentação de cada cartão acima). Isto permite modificações globais.

  <details>
  
  <summary>Exemplo</a></summary>
  
  <br>

  Não copie a linha `Bubble:`, este é o nome do tema que utiliza. Também precisa de remover o `--` das variáveis.

  Precisa de executar a ação [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) para atualizar o tema após qualquer modificação.

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
  
- Em YAML adicionando `styles: |` seguido dos seus estilos personalizados (veja as dicas e exemplos abaixo).

> [!TIP]  
> **Para perceber quais classes de estilo podem ser modificadas**, pode dar uma vista de olhos à pasta [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) neste repositório. Em cada pasta de cartão, vai encontrar um ficheiro chamado `styles.css`. Estes ficheiros contêm todos os estilos aplicados. Isto permite muito mais possibilidades do que as variáveis CSS, mas precisa de ser adicionado individualmente a cada cartão.
> 
> Também pode encontrar muitos [exemplos da comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ou alguns no [fórum do Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) fazendo uma pesquisa.
>
> O tema Bubble para Home Assistant (como nas capturas de ecrã) pode ser encontrado [aqui](https://github.com/Clooos/Bubble).
>
> Brevemente estará disponível um vídeo tutorial no meu [canal do YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Note que pode ser necessário adicionar `!important;` a alguns estilos CSS já definidos (veja os exemplos abaixo).

> [!TIP]  
> Os sub-botões podem ser visados por classes baseadas no nome. Por exemplo, um sub-botão chamado "My sub-button" pode ser estilizado com `.my-sub-button`. Os sub-botões de slider também expõem `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> Uma classe baseada no nome muda quando renomeia um sub-botão, e é traduzida quando o nome também é. Defina `css_class` no sub-botão para obter uma classe sua que nunca se altera, seja qual for o nome e seja qual for o idioma.

#### Exemplos

<details>

<summary>Alterar o tamanho da fonte de qualquer Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Alterar a cor de fundo de um único botão numa pilha de botões horizontal</summary>

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

<summary>Alterar a cor de fundo de um cartão</summary>

<br>

Este funciona em todos os tipos de Bubble Card (exceto nos pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Este faz o mesmo apenas num cartão de botão (funciona no cabeçalho do pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Para alterar a cor quando está `on`, veja os modelos de estilo abaixo.

</details>

<details>

<summary>Alterar a cor de um slider de botão</summary>

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

<summary>Alterar a cor da linha de um separador</summary>

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

<summary>Alterar a cor de um ícone</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Para um ícone de pilha de botões horizontal.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Alterar a cor de fundo de um contentor de ícone</summary>

<br>

Este funciona em todos os tipos de Bubble Card (exceto nos pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Este faz o mesmo para o cabeçalho do pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Alterar o tamanho dos sub-botões (perfeito para a disposição grande)</summary>

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

<summary>Alterar a cor de fundo do segundo sub-botão</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Alterar o tamanho de um ícone</summary>

<br>

Para o ícone principal.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Para os ícones dos sub-botões.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Usar uma imagem em vez de um ícone num sub-botão</summary>

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

Basta carregar esta imagem para uma pasta "pictures" (ou o nome que quiser) na pasta "www" do Home Assistant.

</details>

<details>

<summary>Exemplo avançado: Criar uma linha horizontal de sub-botões (captura de ecrã incluída)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Adoro este, uso-o como cabeçalho no meu dashboard.

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

**O Bubble Card não suporta modelos Jinja**, mas os utilizadores avançados podem adicionar modelos em JS diretamente nos seus [estilos personalizados](#estilo). Por exemplo, isto permite alterar dinamicamente um ícone, os textos ou as cores de um elemento, mostrar ou ocultar um elemento condicionalmente (como um sub-botão), ou praticamente qualquer coisa com base num estado, num atributo e muito mais.

> [!TIP]  
> Mais informação sobre modelos JS [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). O meu conselho é **verificar sempre a consola do navegador** para garantir que tudo está a funcionar corretamente.

> [!IMPORTANT]  
> **Todos os modelos que não modificam uma propriedade CSS devem ser colocados no final! Como alterar um ícone, um texto ou qualquer elemento.**

#### Variáveis e funções disponíveis

<details>

<summary>Variáveis</summary>

<br>

Tem acesso a estas variáveis na maioria dos cartões:

- `state` devolve o estado da sua `entity` definida.
  
- `entity` devolve a entidade que definiu, como `switch.test` neste exemplo.
  
- `icon` pode ser usado assim para alterar o ícone `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` devolve o estado da `entity` definida do seu primeiro sub-botão, `[0]` é o estado do primeiro sub-botão, `[1]` o segundo...
  
- `subButtonIcon[0]` pode ser usado assim para alterar o ícone do primeiro sub-botão `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` é o ícone do primeiro sub-botão, `[1]` o segundo...
  
- `card` devolve o elemento do cartão no DOM.
  
- `hass` é uma variável avançada que permite ainda mais controlo, por exemplo, pode devolver o estado de `light.kitchen` assim `hass.states['light.kitchen'].state` ou um atributo assim `hass.states[entity].attributes.brightness`.

- `this` devolve muita informação útil sobre a sua configuração e dashboard, use isto apenas se souber o que está a fazer.

</details>

<details>

<summary>Funções</summary>

<br>

Tem acesso a todas as funções JS globais, mas também tem acesso a:

- `getWeatherIcon` pode ser usada para devolver um ícone meteorológico com base num estado que devolve o tempo. Por exemplo, pode fazer isto `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` para alterar o ícone do terceiro sub-botão para o ícone do tempo de hoje, `.forecast[1]?.condition` é para amanhã...

  Vai precisar de criar um sensor de modelo para isso. Aqui está o que pode adicionar no seu `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` devolve `true` quando uma lista de [condições](#condições) é cumprida, por exemplo `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` pode ser usado para traduzir um estado (também pode ser usado para obter a unidade de um estado, sem precisar de a adicionar manualmente).
- `hass.formatEntityAttributeValue(state, "attribute")` pode ser usado para traduzir um atributo (também pode ser usado para obter a unidade de um estado, sem precisar de a adicionar manualmente).

</details>

#### Exemplos

Pode encontrar muitos exemplos abaixo, mas também pode encontrar modelos muito avançados na minha [página do Patreon](https://www.patreon.com/c/Clooos), como um (o meu favorito) que permite até quatro emblemas condicionais colocados à volta dos ícones do cartão. É também uma ótima forma de aprender sobre todas as possibilidades dos estilos e modelos personalizados do Bubble Card!

<details>
<summary>Exemplos da minha página do Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Adicionar emblemas ao estilo do Home Assistant a qualquer cartão</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Mostrar a data e a hora formatadas num separador sem usar nenhuma entidade</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Mostrar o estado de um sub-botão em duas linhas</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalizar rótulos e ícones dentro de um sub-botão de seleção</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Adicionar um pop-up de lembrete persistente que aparece apenas quando necessário</a>
</p>

<br>

</details>

<details>

<summary>Alterar a cor de fundo de um botão que fica vermelho quando está <code>off</code> e azul quando está <code>on</code></summary>

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

<summary>Alterar a cor de fundo de um botão com base numa entidade para a pilha de botões horizontal</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Mostrar/Ocultar um sub-botão condicionalmente</summary>

<br>

Este mostra o primeiro sub-botão apenas quando o meu aspirador está preso.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Este mostra um sub-botão quando a bateria está abaixo de 10%. Útil com um sub-botão que mostra "Bateria fraca".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Alterar um ícone ou um ícone de sub-botão condicionalmente</summary>

<br>

Este altera o ícone de um botão apenas quando um aspirador está preso.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Este altera o ícone do primeiro sub-botão apenas quando um aspirador está preso.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Alterar a cor de um ícone ou de um ícone de sub-botão condicionalmente</summary>

<br>

Este altera a cor do ícone de um botão com base no seu estado.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Este altera a cor do ícone de um sub-botão com base no seu estado. `.bubble-sub-button-1` é o primeiro sub-botão, substitua `1` se quiser alterar o ícone de outro sub-botão.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animar um ícone de ventoinha condicionalmente</summary>

<br>

Este roda o ícone de um botão quando uma ventoinha está `on`.
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

<summary>Modelar textos (como nome ou estado)</summary>

<br>

Este altera o nome/estado de um botão com "Atualmente está sol" dependendo da meteorologia.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ou quando aplicado a sub-botões:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Se quiser modelar o estado (`.bubble-state`), não ative `show_state: true`, ative apenas `show_attribute: true` sem nenhum atributo.

</details>

<details>

<summary>Exemplo avançado: Alterar a cor de um sub-botão quando um pop-up está aberto</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Exemplo avançado: Modelar o nome de um separador com base num estado traduzido para o seu idioma</summary>

<br>

Pode usar `hass.formatEntityState(state)` para traduzir um estado e `hass.formatEntityAttributeValue(state, "attribute")` para traduzir um atributo.

Este altera o nome e o ícone com base na meteorologia, "Nuageux" significa "Nublado" em francês.

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

Os módulos são uma funcionalidade poderosa que lhe permite guardar, reutilizar e partilhar os seus estilos e modelos personalizados em todos os seus Bubble Cards. Em vez de copiar e colar o mesmo código em vários cartões, pode criar um Módulo e aplicá-lo onde precisar. Isto torna a gestão do aspeto do seu dashboard muito mais fácil e eficiente.

Mas esta funcionalidade é muito mais poderosa do que isso: permite-lhe adicionar funcionalidades reais por si mesmo no editor do Bubble Card, usando todas as opções padrão do [formulário do Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)!  
O seletor de objetos foi melhorado para mostrar alterações em tempo real e suportar atributos corretamente.

Um módulo pode também responder ao seletor de cartões do Home Assistant ao lado das [sugestões de entidades](#sugestões-de-entidades) integradas: use `suggestions` para os cartões que consegue descrever antecipadamente, e `suggestions_code` quando têm de ser calculados a partir da sua instalação, por exemplo um pop-up construído a partir de todas as entidades da área a que pertence a entidade escolhida. Ambas as chaves estão documentadas [aqui](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions).

Também pode navegar na **Module Store** para encontrar e instalar [módulos criados pela comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ou partilhar as suas próprias criações!

> [!TIP]
> O código de um Módulo funciona exatamente da mesma forma que o código na secção `styles` de um cartão. Todas as mesmas variáveis e funções da secção [Modelos](#modelos) estão disponíveis.

<br>

### Configuração inicial

> [!IMPORTANT]
> A partir da v3.1.0, o Bubble Card Tools é o backend de armazenamento recomendado para os módulos. O método antigo do sensor de modelo continua a funcionar para configurações existentes, mas os novos módulos e as funcionalidades da Module Store são melhor suportados através do Bubble Card Tools.

A integração Bubble Card Tools ativa o Editor de Módulos e a Module Store, e guarda os módulos como ficheiros YAML individuais. Os módulos existentes são migrados automaticamente.

Os passos de instalação e configuração são explicados aqui:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### O Editor de Módulos

Pode aceder ao Editor de Módulos a partir das definições de qualquer cartão, na secção **Módulos**. O editor tem dois separadores principais:

#### Separador Os meus módulos

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Este separador mostra todos os seus módulos instalados e permite-lhe:

- **Aplicar** módulos existentes ao cartão atual
- **Criar** um novo módulo do zero
- **Editar** módulos existentes com pré-visualização em tempo real
- **Eliminar** módulos que já não precisa
- **Pesquisar** e **ordenar** módulos (alfabético, recente, ativos primeiro)
- **Definir o estado global** para que um módulo se aplique automaticamente a todos os cartões
- **Importar/Exportar** módulos para cópia de segurança ou partilha
- **Escrever sugestões de entidades** no editor de módulos, em **Opcional: sugestões de entidades**, para que o seu módulo seja proposto no seletor de cartões do Home Assistant. Tanto as regras como as sugestões calculadas são verificadas enquanto escreve, um erro ali impede guardar, e a pré-visualização mostra os cartões sugeridos para qualquer entidade que escolher

#### Separador Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Este separador mostra [todos os módulos disponíveis da comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), e permite-lhe:

- **Explorar** todos os módulos criados pela comunidade
- **Pesquisar** e filtrar módulos por nome, compatibilidade ou palavras-chave
- **Instalar** módulos com um clique
- **Atualizar** módulos instalados quando novas versões estiverem disponíveis

> [!TIP]
> No editor, pode ativar módulos não suportados para testar módulos que ainda não estão marcados como compatíveis com um determinado tipo de cartão.

<br>

### Como usar os módulos

#### Criar um novo módulo

<details>

<summary>Clique para expandir</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Vá ao editor de qualquer cartão e expanda a secção **Módulos**.
2. Clique em **Criar novo módulo**.
3. Preencha a informação do módulo.
4. Escreva o seu código CSS e/ou modelo JavaScript no editor de **Código**.
5. (Opcional) Crie uma interface de configuração personalizada na secção **Editor** (como o seletor de cor na captura de ecrã acima, documentação completa disponível [aqui](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md)).
6. (Opcional) Escreva as suas **Sugestões de entidades** para que o seu módulo seja proposto no seletor de cartões do Home Assistant. O painel verifica o que escreve à medida que escreve, e a sua pré-visualização mostra os próprios cartões sugeridos para a entidade à sua escolha.
7. Clique em **Guardar**.

O seu módulo está agora disponível para usar em qualquer um dos seus cartões!

<br>

</details>

#### Aplicar um módulo a um cartão

<details>

<summary>Clique para expandir</summary>

<br>

- **Através do editor:**

  - Vá ao editor do cartão ao qual quer aplicar o módulo.
  - Expanda a secção **Módulos**.
  - Clique no módulo que quer aplicar a partir da lista.
  - Em "Aplicar a", clique em "Este cartão". O módulo está agora ativo. Pode aplicar vários módulos ao mesmo cartão.

- **Através de YAML:**

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

#### Aplicar um módulo globalmente

<details>

<summary>Clique para expandir</summary>

<br>

Pode definir um módulo para se aplicar automaticamente a todos os Bubble Cards:

**Isto não está disponível para módulos com editor, pois estes exigem uma configuração específica para funcionar.**

- **Através do editor:**

  - No editor de Módulos, encontre o seu módulo no separador **Os meus módulos**.
  - Ative o botão **Todos os cartões** junto ao nome do módulo.
  - O módulo será agora aplicado automaticamente a todos os cartões.
 
- **Através de YAML:**

  Na sua configuração YAML do módulo (em `bubble-modules.yaml`), basta adicionar `is_global: true`.

<br>

</details>

#### Excluir um único cartão de um módulo global

<details>

<summary>Clique para expandir</summary>

<br>

Se tiver um módulo global mas quiser excluí-lo de um cartão específico:

- **Através do editor:**
  
  - Na secção **Módulos** do cartão, verá os módulos globais listados.
  - Clique num módulo global, desative "Este cartão" para o excluir deste cartão específico.

- **Através de YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Partilhar o seu módulo na Module Store

<details>

<summary>Clique para expandir</summary>

<br>

Para partilhar o seu Módulo na Module Store, no Editor de Módulos, no fundo em "Exportar Módulo", clique em "Copiar para o GitHub" e cole o conteúdo numa nova discussão na categoria [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Edite a descrição** (se necessário), **o exemplo** (para utilizadores de YAML), e lembre-se de **incluir pelo menos uma captura de ecrã** para a Module Store.

**O seu Módulo fica disponível logo a seguir** (após uma atualização da Store), por isso confirme que está tudo corretamente escrito e que o Módulo está a funcionar como esperado. Pode, claro, editar/atualizar o Módulo depois de o partilhar.

<br>

</details>

#### Gestão de versões

<details>

<summary>Clique para expandir</summary>

<br>

A Module Store verifica automaticamente se há atualizações para os módulos instalados. Quando há atualizações disponíveis:

1. Verá um indicador de atualização no separador **Module Store**.
2. Clique em **Atualizar** nos módulos com atualizações disponíveis.
3. Confirme a atualização na Module Store.

<br>

</details>

#### Definir os tipos de cartão suportados

<details>

<summary>Clique para expandir</summary>

<br>

Alguns módulos podem não ser compatíveis com todos os tipos de cartão. Pode especificar quais os cartões que um módulo suporta.  
Se quiser que um módulo seja compatível com **todos os cartões**, basta omitir o campo `supported` (ou usar a opção **Todos os cartões** no editor).

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
<summary>Módulo com configuração personalizada</summary>

<br>

Este módulo está disponível [aqui](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Mais exemplos podem ser encontrados na Module Store, ou [aqui](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localização

O Bubble Card fala a sua língua. O seu editor está traduzido nas 64 línguas que o Home Assistant suporta, e sempre que o Home Assistant já tem uma palavra para algo, é reutilizada a formulação dele, para que leia os mesmos termos nas duas interfaces.

No fundo do editor, ao lado do número da versão, um seletor **Automático** segue a língua do seu Home Assistant. Desligue-o e todo o editor volta ao inglês, o que é prático para seguir um tutorial ou reportar um problema. A sua escolha fica memorizada no navegador.

Esta documentação também é traduzida, [em 62 línguas](languages.md), todas elas menos o inglês britânico, que usa o original. Essas páginas estão abertas a todos, pelo que uma formulação que não corresponda ao seu próprio Home Assistant pode ser corrigida em poucos cliques. A versão inglesa continua a ser a referência para o conteúdo em si.

<br>

---

<br>

## Ajuda

Sinta-se à vontade para abrir uma issue se algo não estiver a funcionar como esperado. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Tem perguntas ou opiniões sobre o Bubble Card? Quer partilhar os seus dashboards ou descobertas? Pode ir ao fórum do Home Assistant, ao subreddit do Bubble Card ou à secção GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Contribuir

As contribuições são bem-vindas! Sejam correções de erros, novas funcionalidades, traduções ou melhorias na documentação, sinta-se à vontade para abrir um pull request.

Antes de começar, leia o [guia do programador](DEVELOPERS.md), que explica como configurar o seu ambiente local, compilar o projeto e testar as suas alterações.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Doar

Dedico a maior parte do meu tempo livre a tornar este projeto o melhor possível. Por isso, se aprecia o meu trabalho, qualquer donativo seria uma ótima forma de mostrar o seu apoio 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Obrigado a todos pelo vosso apoio, são a minha maior motivação!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
