<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Esta página é uma tradução automática. Em caso de dúvida, prevalece a [documentação original em inglês](../README.md). Alguma frase parece estranha? Toda ajuda é bem-vinda, e [corrigir esta página](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.pt-BR.md) leva apenas um minuto: o GitHub cuida do fork e do pull request. Desde já, obrigado! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Leia isto em outro idioma](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card é uma coleção de cartões minimalista e personalizável para o Home Assistant, com pop-ups modernos e uma Module Store integrada com mais de 100 módulos feitos pela comunidade.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Índice

**[`Instalação`](#instalação)**  **[`Configuração`](#configuração)**  **[`Sugestões de entidades`](#sugestões-de-entidades)**  **[`Pop-up`](#pop-up)**  **[`Pilha de botões horizontal`](#pilha-de-botões-horizontal)**  **[`Botão`](#botão)**  **[`Reprodutor de mídia`](#reprodutor-de-mídia)**  **[`Cobertura`](#cobertura)**  **[`Seleção`](#seleção)**  **[`Climatização`](#climatização)**  **[`Calendário`](#calendário)**  **[`Separador`](#separador)**  **[`Coluna vazia`](#coluna-vazia)**  **[`Apenas sub-botões`](#apenas-sub-botões)**  **[`Sub-botões`](#sub-botões)**  **[`Layouts do cartão`](#layouts-do-cartão)**  **[`Condições`](#condições)**  **[`Ações`](#ações-de-toque-toque-duplo-e-toque-longo)**  **[`Estilo`](#estilo)**  **[`Modelos`](#modelos)**  **[`Módulos`](#módulos)**  **[`Localização`](#localização)**  **[`Ajuda`](#ajuda)**  **[`Contribuir`](#contribuir)**  **[`Doar`](#doar)**

<br>

## Instalação

**Versão mais antiga do Home Assistant suportada:** 2023.9.0

<details>

<summary>Sem o HACS</summary>

<br>

1. Baixe `bubble-card.zip` da [versão mais recente](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Extraia o arquivo na sua pasta `<config>/www`, você deve obter `bubble-card.js` e uma pasta `translations` ao lado dele (essa pasta guarda os dicionários do editor, sem ela o editor continua em inglês)
3. No seu painel, clique no ícone no canto superior direito e depois em `Edit dashboard`
4. Clique novamente nesse ícone e depois em `Manage resources`
5. Clique em `Add resource`
6. Copie e cole isto: `/local/bubble-card.js?v=1`
7. Clique em `JavaScript Module` e depois em `Create`
8. Volte e atualize a página
9. Agora você pode clicar em `Add card` no canto inferior direito e procurar por `Bubble Card`
10. Após cada atualização do arquivo, você precisará editar `/local/bubble-card.js?v=1` e mudar a versão para um número mais alto

Se não estiver funcionando, tente limpar o cache do seu navegador.

</details>

<details>

<summary>Com o HACS (Recomendado)</summary>

<br>

Este método permite receber atualizações diretamente pela Home Assistant Community Store

1. Se o HACS ainda não estiver instalado, baixe-o seguindo as instruções em [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Prossiga com a configuração inicial do HACS seguindo as instruções em [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Na sua barra lateral, vá até "HACS"
4. Procure por "Bubble Card", ou clique no botão azul abaixo
5. Clique em "Download"
6. Volte para o seu painel e clique no ícone no canto superior direito e depois em `Edit dashboard`
7. Agora você pode clicar em `Add card` no canto inferior direito e procurar por `Bubble Card`

Se não estiver funcionando, tente limpar o cache do seu navegador/aplicativo (em todos os seus dispositivos, se necessário).

#### Vídeos

Você também pode dar uma olhada no meu canal do YouTube para ver vídeos passo a passo.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configuração

Todas as opções podem ser configuradas no editor do Home Assistant. Mas você pode encontrar mais detalhes e o YAML na documentação abaixo.

<details>

<summary><b>Opções principais (YAML + descrição)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `type` | string | **Obrigatório** | `custom:bubble-card` | Tipo do cartão |
| `card_type` | string | **Obrigatório** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ou `sub-buttons` | Tipo do Bubble Card, veja abaixo |
| `styles` | object list | Opcional | Qualquer folha de estilo CSS | Permite personalizar o CSS do seu Bubble Card, veja [estilo](#estilo) |

</details>

<details>

<summary><b>Variáveis CSS globais (veja <a href="#estilo">Estilo</a>)</b></summary>

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
| `--bubble-box-shadow` | veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra da caixa para todos os elementos suportados |
| `--bubble-border` | veja [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Borda para todos os cartões suportados |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Confira este [vídeo](https://www.youtube.com/watch?v=0hSQOlBxKKI) para conhecer o Bubble Card e suas capacidades.** Meu canal do YouTube é bem novo e foca em tutoriais sobre o Home Assistant e o Bubble Card. Não hesite em se inscrever para ajudar a aumentar a visibilidade do meu canal. Agradeço desde já!

<br>

---

<br>

## Sugestões de entidades

Desde o Home Assistant 2026.6, escolher uma entidade no seletor de cartões oferece alguns cartões prontos, e o Bubble Card responde a essa pergunta com suas próprias receitas. Escolha uma luz e você recebe um cartão com um controle deslizante de brilho, além de variantes de temperatura de cor, cor e saturação quando sua luz as suportar. Escolha uma cobertura e você recebe o controle deslizante de posição, escolha um reprodutor de mídia e você também recebe uma variante com a lista de fontes, escolha um aspirador e você recebe os botões de iniciar, pausar e voltar à base. Cada sugestão é uma configuração normal do Bubble Card exibida como prévia ao vivo, então você pode pegar a mais próxima e continuar editando como de costume.

O que é oferecido depende do que sua entidade realmente sabe fazer: uma luz sem canal de brilho recebe um interruptor em vez de um controle deslizante, uma cobertura que não inclina não recebe a variante de inclinação, e uma entidade de climatização só recebe seus modos predefinidos quando tem algum. As opções clássicas aparecem abaixo delas quando se aplicam: o cartão dedicado do domínio, um botão simples e um controle deslizante.

> [!TIP]
> Os módulos podem acrescentar suas próprias sugestões a essa lista, veja [módulos](#módulos).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Este cartão permite criar um pop-up com qualquer conteúdo. Cada pop-up fica **oculto por padrão** e pode ser aberto direcionando-o pelo seu link (por exemplo, `'#pop-up-name'`), com qualquer cartão que suporte a [ação](#ações-de-toque-toque-duplo-e-toque-longo) `navigate`, ou com a [pilha de botões horizontal](#pilha-de-botões-horizontal) que já vem incluída.

> [!TIP]
> ### Gatilho do pop-up 
> Esse recurso permite abrir um pop-up com base no estado de qualquer entidade, por exemplo, você pode abrir um pop-up "Segurança" com uma câmera quando uma pessoa estiver na frente da sua casa. Você também pode criar um helper do tipo alternância (input_boolean) e disparar sua abertura/fechamento em uma automação.
> <details>
> <summary>Abrindo um pop-up quando um <code>binary_sensor</code> estiver <code>on</code></summary>
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
> Existem várias formas de fechar um pop-up. Por exemplo, você pode deslizar do cabeçalho do pop-up até a parte inferior, fazendo um deslize longo dentro do pop-up até embaixo, pressionando Escape no desktop, removendo o hash da URL ou simplesmente pressionando o botão de fechar.
>


### Opções do pop-up

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `hash` | string | **Obrigatório** | Qualquer hash único (por exemplo, `'#kitchen'`) com ' ' | É assim que você vai abrir seu pop-up |
| `popup_style` | string | Opcional | `bubble` (padrão) ou `classic` | Define o estilo visual do pop-up |
| `popup_mode` | string | Opcional | `default` (padrão), `fit-content`, `centered` ou `adaptive-dialog` | Define o modo de layout do pop-up |
| `with_bottom_offset` | boolean | Opcional | `true` ou `false` (padrão) | Usado apenas com `popup_mode: fit-content` ou `adaptive-dialog`. Aplica um deslocamento inferior no celular, útil quando seu painel inclui um cartão de rodapé. |
| `full_width_on_mobile` | boolean | Opcional | `true` ou `false` (padrão) | Usado apenas com `popup_mode: centered`. Expande o pop-up para a largura total da tela no celular, útil em telas menores. |
| `performance_mode` | string | Opcional | `default` (padrão) ou `performance` | Otimiza a animação de abertura do pop-up. `performance` atrasa levemente a renderização do conteúdo e o desfoque de fundo, e também desativa o desfoque do backdrop se estiver definido. |
| `auto_close` | string | Opcional | Um tempo limite em milissegundos (por exemplo, `10000` para 10s) | Fecha automaticamente o pop-up após um tempo limite |
| `close_on_click` | boolean | Opcional | `true` ou `false` (padrão) | Fecha automaticamente o pop-up após qualquer interação |
| `close_by_clicking_outside` | boolean | Opcional | `true` (padrão) ou `false` | Fecha o pop-up ao clicar fora dele |
| `width_desktop` | string | Opcional | Qualquer valor CSS | Largura no desktop (`100%` por padrão no celular) |
| `margin` | string | Opcional | Qualquer valor CSS | Use isto **apenas** se o seu pop-up não estiver bem centralizado no celular (por exemplo, `13px`) |
| `margin_top_mobile` | string | Opcional | Qualquer valor CSS | Margem superior no celular (por exemplo, `-56px` se o seu cabeçalho estiver oculto) |
| `margin_top_desktop` | string | Opcional | Qualquer valor CSS | Margem superior no desktop (por exemplo, `50vh` para um pop-up com metade do tamanho ou `calc(100vh - 400px)` para uma altura fixa de `400px`) |
| `bg_color` | string | Opcional | Qualquer valor hex, rgb ou rgba | A cor de fundo do seu pop-up (por exemplo, `#ffffff` para um fundo branco) |
| `bg_opacity` | string | Opcional | Qualquer valor de `0` a `100` | A opacidade de fundo do seu pop-up (por exemplo, `100` para nenhuma transparência) |
| `bg_blur` | string | Opcional | Qualquer valor de `0` a `100` | O efeito de desfoque de fundo do seu pop-up, **isso só funciona se `bg_opacity` não estiver definido como `100`** (por exemplo, `0` para nenhum desfoque)|
| `shadow_opacity` | string | Opcional | Qualquer valor de `0` a `100` | A opacidade da sombra do seu pop-up (por exemplo, `0` para ocultá-la) |
| `hide_backdrop` | boolean | Opcional | `true` ou `false` (padrão) | Defina como true no primeiro pop-up do seu painel principal para desativar o backdrop em todos os pop-ups. |
| `background_update` | boolean | Opcional | `true` ou `false` (padrão) | Atualiza o conteúdo do pop-up em segundo plano (não recomendado) |
| `trigger` | object ou list | Opcional | Veja [condições](#condições) | Abre este pop-up quando as condições são atendidas |
| `trigger_entity` | string | Opcional | Qualquer entidade | Abre este pop-up com base no estado de qualquer entidade, a forma simples de `trigger` |
| `trigger_state` | string | Opcional (**Obrigatório** se `trigger_entity` estiver definido) | Qualquer estado de entidade | Estado da entidade para abrir o pop-up |
| `trigger_close` | boolean | Opcional | `true` ou `false` | Fecha o pop-up quando as condições deixam de ser atendidas (padrão: `true` com `trigger`, `false` com `trigger_state`) |
| `open_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Dispara uma ação quando o pop-up está abrindo |
| `close_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Dispara uma ação quando o pop-up está fechando |
| `show_header` | boolean | Opcional | `true` (padrão) ou `false` | Mostra/Oculta o cabeçalho do pop-up por completo |
| `show_previous_button` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um botão de voltar ao lado do botão de fechar e navega de volta para o pop-up anterior quando disponível |
| `show_close_button` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o botão de fechar mantendo o restante do cabeçalho visível |
| `buttons_position` | string | Opcional | `right` (padrão) ou `left` | Posição dos botões de fechar e voltar no cabeçalho |
| `cards` | list | Opcional | Qualquer Bubble Card, cartão do Home Assistant ou cartão personalizado | Define o conteúdo do seu pop-up. Veja o exemplo de pop-up abaixo. |
| Você também tem acesso a [todas as configurações de botão](#botão) para o cabeçalho do pop-up. | | Opcional | | Se não estiver definido, nenhum cabeçalho será exibido |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Raio da borda do pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Cor de fundo principal para os elementos suportados do pop-up |
| `--bubble-pop-up-background-color` | `color` | Cor de fundo do pop-up |
| `--bubble-backdrop-background-color` | `color` | Cor de fundo do backdrop |
| Você também tem acesso a [todas as variáveis CSS de botão](#opções-do-botão) para o cabeçalho do pop-up. | | |

</details>


### Formato autônomo do pop-up (v3.2.0+)

Desde a v3.2.0, os pop-ups usam um novo formato autônomo em que os cartões de conteúdo são definidos diretamente dentro do pop-up através da opção `cards`. Isso oferece melhor desempenho e uma nova experiência de edição por arrastar e soltar baseada em seções.


#### Exemplos

<details>

<summary>Um pop-up (formato autônomo)</summary>

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

Este cartão é um bom companheiro para o cartão de pop-up, permitindo abrir os pop-ups correspondentes. Ele também permite abrir qualquer página do seu painel. Além disso, você pode adicionar seus sensores de movimento/ocupação para que a ordem dos botões se adapte ao cômodo em que você acabou de entrar. Este cartão é rolável, permanece visível e funciona como rodapé.

> [!IMPORTANT]  
> Este cartão precisa ser o último na sua visualização (depois de todos os outros cartões e pop-ups). Ele não pode estar dentro de nenhuma pilha.

### Opções da pilha de botões horizontal

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Obrigatório** | O hash do pop-up (ex.: `'#kitchen'`) com ' ' ou qualquer link | Um link para abrir |
| `1_name` | string | Opcional | Qualquer string | Um nome para o seu botão |
| `1_icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu botão |
| `1_entity` | string | Opcional | Qualquer luz ou grupo de luzes | Exibe a cor dessa luz no fundo |
| `1_pir_sensor` | string | Opcional | Qualquer sensor binário | Ao menos um sensor de presença ou mais para `auto_order`. Na verdade, também funciona com qualquer tipo de entidade, por exemplo você pode adicionar grupos de luzes e a ordem mudará com base nos últimos estados alterados. |
| `auto_order` | boolean | Opcional | `true` ou `false` (padrão) | Muda a ordem dos botões de acordo com a última vez que o `_pir_sensor` mudou de estado, **precisa ser `false` se você não tiver nenhum `_pir_sensor` no seu código** |
| `margin` | string | Opcional | Qualquer valor CSS | Use isso **apenas** se a sua `horizontal-buttons-stack` não estiver bem centralizada no celular (ex.: `13px`) |
| `width_desktop` | string | Opcional | Qualquer valor CSS | Largura no desktop (`100%` por padrão no celular) |
| `is_sidebar_hidden` | boolean | Opcional | `true` ou `false` (padrão) | Corrige a posição da pilha de botões horizontal se a barra lateral estiver oculta no desktop (apenas se você mesmo fez uma modificação para ocultá-la) |
| `rise_animation` | boolean | Opcional | `true` (padrão) ou `false` | Defina como `false` para desativar a animação que é ativada assim que a página termina de carregar |
| `highlight_current_view` | boolean | Opcional | `true` ou `false` (padrão) | Destaca o hash / visualização atual com uma animação suave |
| `hide_gradient` | boolean | Opcional | `true` ou `false` (padrão) | Defina como `false` para ocultar o gradiente |

> [!IMPORTANT]  
> As variáveis que começam com um número definem seus botões, basta mudar esse número para adicionar mais botões (veja o exemplo abaixo).

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Raio da borda dos botões da pilha de botões horizontal |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Cor de fundo dos botões da pilha de botões horizontal |

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

Este cartão é muito versátil. Ele pode ser usado como um **interruptor**, um **controle deslizante**, um botão de **estado** ou um botão de **nome/texto**.

> [!TIP]
> ### Quais são as diferenças entre todos os tipos de botão?
>
> - **Botão interruptor:** Este é o tipo de botão padrão. Por padrão, ele alterna uma entidade e sua cor de fundo muda de acordo com o estado da entidade ou a cor de uma luz. Você pode alterar sua ação na seção **Ação de toque no cartão**.
>
> - **Botão deslizante:** Este tipo de botão permite controlar entidades com faixas ajustáveis. É ideal para regular a intensidade das luzes, e sua cor de preenchimento se adapta à cor da luz. Você também pode usá-lo para exibir valores, como o nível de uma bateria.
>   Entidades suportadas pelos controles deslizantes:
>   - Luz (brilho)
>   - Reprodutor de mídia (volume)
>   - Cobertura (posição)
>   - Ventilador (porcentagem)
>   - Climatização (temperatura)
>   - Input number e number (valor)
>   - Sensor de bateria (porcentagem, somente leitura)
>
>   Você também pode usar qualquer entidade com um estado numérico desativando o filtro de entidades em **Configurações do controle deslizante**, depois defina os valores `min` e `max`. Esta opção é somente leitura.
>
> - **Botão de estado:** Perfeito para exibir informações de um sensor ou de qualquer entidade. Ao pressioná-lo, ele mostra o painel "Mais informações" da entidade. Sua cor de fundo não muda.
>
> - **Botão de nome/texto:** O único tipo de botão que não precisa de uma entidade. Ele permite exibir um texto curto, um nome ou um título. Você também pode adicionar ações a ele. Sua cor de fundo não muda.

### Opções do botão

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer entidade | Uma entidade para controlar |
| `button_type` | string | Opcional | `switch` (padrão), `slider`, `state` ou `name` | O comportamento do seu botão |
| `name` | string | Opcional | Qualquer string | Um nome para o seu botão, se não for definido será exibido o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu botão, se não for definido será exibido o ícone da entidade ou a `entity-picture` |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `use_accent_color` | boolean | Opcional (padrão `false`) | **Apenas para luzes.** Usa a cor de destaque do tema em vez da cor da luz.                         |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a última vez que sua `entity` mudou |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a última vez que sua `entity` foi atualizada |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a exibir (ex.: `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto role quando o conteúdo excede o tamanho do seu contêiner |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, veja abaixo | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não for definido, `more-info` será usado |
| `double_tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não for definido, `none` será usado |
| `hold_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao segurar o ícone, se não for definido, `more-info` será usado |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver em uma visualização de seção), `large` (padrão se estiver em uma visualização de seção), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |
| `sub_button` | object | Opcional | Veja [sub-botões](#sub-botões) | Adiciona botões personalizados fixados à direita |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no botão |
| `--bubble-button-border-radius` | `px` | Raio da borda do botão |
| `--bubble-button-icon-border-radius` | `px` | Raio da borda do contêiner do ícone do botão |
| `--bubble-button-icon-background-color` | `color` | Cor de fundo do contêiner do ícone do botão |
| `--bubble-light-white-color` | `color` | Substitui a cor branca padrão dos botões/controles deslizantes de luz |
| `--bubble-light-color` | `color` | Substitui a cor dos botões/controles deslizantes de luz (mesmo luzes RGB) |
| `--bubble-button-box-shadow` | Veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do botão |

</details>

Estas opções só estão disponíveis quando `button_type` está definido como `slider`.

<details>

<summary><b>Opções do controle deslizante (YAML + descrições)</b></summary>

| Nome                  | Tipo    | Requisito                     | Descrição                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opcional                        | O valor mínimo do controle deslizante. Para controles deslizantes personalizados.                                                    |
| `max_value`             | number  | Opcional                        | O valor máximo do controle deslizante. Para controles deslizantes personalizados.                                                    |
| `step`                  | number  | Opcional                        | O valor do passo do controle deslizante.                                                                           |
| `tap_to_slide`          | boolean | Opcional (padrão `false`)      | Ativa o comportamento anterior do controle deslizante, em que você toca para ativá-lo, em vez de segurá-lo.        |
| `relative_slide`        | boolean | Opcional (padrão `false` )     | Atualiza o valor de forma relativa ao valor inicial, em vez do ponto de toque inicial.                      |
| `read_only_slider`      | boolean | Opcional (padrão `false`)      | Torna o controle deslizante somente leitura. Ativado automaticamente para algumas entidades, como sensores.                        |
| `slider_live_update`    | boolean | Opcional (padrão `false`)      | O estado da entidade é atualizado enquanto você desliza. **Este recurso não é recomendado para todas as entidades.**        |
| `slider_fill_orientation` | string | Opcional | `left`, `right`, `top` ou `bottom` | Muda a direção de preenchimento do controle deslizante. Da esquerda para a direita quando não definido, espelhado em [idiomas da direita para a esquerda](#localização) |
| `slider_value_position` | string | Opcional | `right`, `left`, `center` ou `hidden` | Posição da exibição do valor. No lado final quando não definido, portanto à esquerda em [idiomas da direita para a esquerda](#localização) |
| `invert_slider_value` | boolean | Opcional (padrão `false`) | Inverte a direção do controle deslizante (100% de preenchimento equivale ao mínimo). Não disponível para controles deslizantes de cor. |
| `light_slider_type` | string | Opcional | `brightness` (padrão), `hue`, `saturation`, `white_temp` | **Apenas para luzes.** Escolhe o modo do controle deslizante |
| `cover_slider_type` | string | Opcional | `position` (padrão), `tilt_position` | **Apenas para coberturas.** Escolhe o modo do controle deslizante (posição ou inclinação) |
| `hue_force_saturation` | boolean | Opcional (padrão `false`) | **Apenas para luzes (modo Matiz).** Força a saturação ao ajustar a matiz |
| `hue_force_saturation_value` | number | Opcional (padrão `100`) | **Apenas para luzes (modo Matiz).** Valor de saturação forçado (0-100) |
| `use_accent_color` | boolean | Opcional (padrão `false`) | **Apenas para luzes (modo Brilho).** Usa a cor de destaque do tema em vez da cor da luz |
| `allow_light_slider_to_0` | boolean | Opcional (padrão `false`)    | **Apenas para luzes.** Permite que o controle deslizante chegue a 0%, o que desliga a luz. Não disponível com `tap_to_slide`. |
| `light_transition`      | boolean | Opcional (padrão `false`)      | **Apenas para luzes.** Ativa transições suaves de brilho para luzes compatíveis.                           |
| `light_transition_time` | number  | Opcional (padrão `500`)        | **Apenas para luzes.** O tempo de transição em milissegundos. Requer `light_transition: true`.            |

</details>

#### Exemplos

<details>

<summary>Um botão deslizante que pode controlar o brilho de uma luz</summary>

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

## Reprodutor de mídia

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Este cartão permite controlar uma entidade de reprodutor de mídia.

### Opções do reprodutor de mídia

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer reprodutor de mídia | O reprodutor de mídia a controlar |
| `name` | string | Opcional | Qualquer string | Um nome para o seu reprodutor de mídia, se não for definido será exibido o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu reprodutor de mídia, se não for definido será exibido o ícone da entidade ou a `entity-picture` |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a última vez que sua `entity` mudou |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra a última vez que sua `entity` foi atualizada |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a exibir (ex.: `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto role quando o conteúdo excede o tamanho do seu contêiner |
| `min_volume` | number | Opcional | Qualquer número | O valor mínimo do controle deslizante de volume. |
| `max_volume` | number | Opcional | Qualquer número | O valor máximo do controle deslizante de volume. |
| `cover_background` | boolean | Opcional | `true` ou `false` (padrão) | Usa uma capa de mídia desfocada como fundo do cartão. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não for definido, `more-info` será usado. |
| `double_tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não for definido, `none` será usado. |
| `hold_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao segurar o ícone, se não for definido, `more-info` será usado. |
| `main_buttons_position` | string | Opcional | `default` ou `bottom` | Move os botões de ação da capa para baixo (fixo) |
| `main_buttons_full_width` | boolean | Opcional | `true` ou `false` | Faz os botões de ação inferiores ocuparem toda a largura (padrão: `true` quando a posição é `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (padrão), `center`, `start`, `space-between` | Alinhamento dos botões de ação inferiores quando não estão em largura total |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver em uma visualização de seção), `large` (padrão se estiver em uma visualização de seção), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |
| `sub_button` | object | Opcional | Veja [sub-botões](#sub-botões) | Adiciona botões personalizados fixados à direita |
| `hide` | object | Opcional | Veja abaixo | Oculta botões do cartão |

#### Opções de ocultação

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão de reproduzir/pausar |
| `volume_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão de volume |
| `previous_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão anterior |
| `next_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão próximo |
| `power_button` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o botão de energia |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Cor de fundo principal do reprodutor de mídia |
| `--bubble-media-player-border-radius` | `px` | Raio da borda do reprodutor de mídia |
| `--bubble-media-player-buttons-border-radius` | `px` | Raio da borda dos botões do reprodutor de mídia |
| `--bubble-media-player-slider-background-color` | `color` | Cor de fundo do controle deslizante de volume |
| `--bubble-media-player-icon-border-radius` | `px` | Raio da borda do contêiner do ícone do reprodutor de mídia |
| `--bubble-media-player-icon-background-color` | `color` | Cor de fundo do contêiner do ícone do reprodutor de mídia |
| `--bubble-media-player-box-shadow` | Veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do reprodutor de mídia |

</details>


#### Exemplos

<details>

<summary>Um reprodutor de mídia com todas as opções</summary>

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

## Cobertura

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Este cartão permite controlar suas entidades `cover`.

### Opções da cobertura

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Obrigatório | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer cobertura | Uma cobertura para controlar |
| `name` | string | Opcional | Qualquer string | Um nome para sua cobertura, se não for definido será exibido o nome da entidade |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra o horário da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra o horário da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a ser exibido (ex.: `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto role quando o conteúdo excede o tamanho do seu contêiner |
| `icon_open` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para sua cobertura aberta, se não for definido será exibido o ícone padrão de cobertura aberta |
| `icon_close` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para sua cobertura fechada, se não for definido será exibido o ícone padrão de cobertura fechada |
| `icon_up` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o botão de abertura da cobertura, se não for definido será exibido o ícone padrão de abertura de cobertura |
| `icon_down` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o botão de fechamento da cobertura, se não for definido será exibido o ícone padrão de fechamento de cobertura |
| `open_service` | string | Opcional | Qualquer serviço ou script | Um serviço para abrir sua cobertura, padrão `cover.open_cover` |
| `stop_service` | string | Opcional | Qualquer serviço ou script | Um serviço para parar sua cobertura, padrão `cover.stop_cover` |
| `close_service` | string | Opcional | Qualquer serviço ou script | Um serviço para fechar sua cobertura, padrão `cover.close_cover` |
| `tilt_buttons` | string | Opcional | `top` (padrão), `bottom`, `left`, `right`, `hidden` | Posição dos botões de controle de inclinação (exibidos apenas se a cobertura suportar inclinação) |
| `open_tilt_service` | string | Opcional | Qualquer serviço ou script | Um serviço para abrir a inclinação, padrão `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opcional | Qualquer serviço ou script | Um serviço para fechar a inclinação, padrão `cover.close_cover_tilt` |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não for definido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não for definido, será usado `none`. |
| `hold_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao segurar o ícone, se não for definido, será usado `more-info`. |
| `main_buttons_position` | string | Opcional | `default` ou `bottom` | Move os controles de mídia para baixo (fixo) |
| `main_buttons_full_width` | boolean | Opcional | `true` ou `false` | Deixa os controles inferiores em largura total (padrão: `true` quando a posição é `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (padrão), `center`, `start`, `space-between` | Alinhamento dos controles inferiores quando não estão em largura total |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na visualização de seções), `large` (padrão se estiver na visualização de seções), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |
| `sub_button` | object | Opcional | Veja [sub-botões](#sub-botões) | Adiciona botões personalizados fixados à direita |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no cartão de cobertura |
| `--bubble-cover-border-radius` | `px` | Raio da borda do cartão de cobertura |
| `--bubble-cover-icon-border-radius` | `px` | Raio da borda do contêiner do ícone do cartão de cobertura |
| `--bubble-cover-icon-background-color` | `color` | Cor de fundo do contêiner do ícone do cartão de cobertura |
| `--bubble-cover-box-shadow` | Veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do cartão de cobertura |
| `--bubble-button-box-shadow` | Veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra dos botões no cartão de cobertura |

</details>


#### Exemplo

<details>

<summary>Um cartão que pode controlar uma persiana enrolável</summary>

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

Este cartão permite adicionar um menu suspenso para suas entidades `input_select` / `select`. Este cartão também suporta os sub-botões e todos os recursos comuns do Bubble Card.

> [!TIP]
> Você também pode ter sub-botões de seleção se quiser, esse recurso está disponível em todos os cartões que suportam sub-botões.

### Opções da seleção

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Obrigatório | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | **Obrigatório** | Qualquer entidade | Uma entidade para controlar |
| `name` | string | Opcional | Qualquer string | Um nome para sua seleção, se não for definido será exibido o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para sua seleção, se não for definido será exibido o ícone da entidade ou a `entity-picture` |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Dá prioridade ao ícone em vez da `entity-picture` |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra o horário da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra o horário da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` estiver definido como `true`) | Um atributo da sua `entity` | O atributo a ser exibido (ex.: `brightness`) |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto role quando o conteúdo excede o tamanho do seu contêiner |
| `tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não for definido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não for definido, será usado `none`. |
| `hold_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao segurar o ícone, se não for definido, será usado `more-info`. |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na visualização de seções), `large` (padrão se estiver na visualização de seções), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |
| `sub_button` | object | Opcional | Veja [sub-botões](#sub-botões) | Adiciona botões personalizados fixados à direita |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no cartão de seleção |
| `--bubble-select-background-color` | `color` | Cor de fundo do cartão de seleção |
| `--bubble-select-list-border-radius` | `px` | Raio da borda do menu suspenso no cartão |
| `--bubble-select-list-item-accent-color` | `color` | Cor de destaque do item selecionado |
| `--bubble-select-list-background-color` | `color` | Cor de fundo do menu suspenso no cartão |
| `--bubble-select-list-width` | `px` | Largura do menu suspenso no cartão |
| `--bubble-select-arrow-background-color` | `color` | Cor de fundo da seta do menu suspenso |
| `--bubble-select-button-border-radius` | `px` | Raio da borda do botão de seleção |
| `--bubble-select-border-radius` | `px` | Raio da borda do cartão de seleção |
| `--bubble-select-icon-border-radius` | `px` | Raio da borda do contêiner do ícone do cartão de seleção |
| `--bubble-select-icon-background-color` | `color` | Cor de fundo do contêiner do ícone do cartão de seleção |
| `--bubble-select-box-shadow` | Veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do cartão de seleção |

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

Este cartão permite controlar suas entidades `climate`.

> [!TIP]
> O menu de seleção de modo é um [sub-botão](#sub-botões) adicionado automaticamente ao criar o cartão. Você pode então modificá-lo ou removê-lo como quiser.

### Opções da climatização

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome                     | Tipo    | Obrigatório                         | Opções suportadas                                  | Descrição                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Obrigatório**                        | Entidade de climatização                                   | A entidade a ser controlada (ex.: `climate.living_room`).                                                            |
| `name`                  | string  | Opcional                            | Qualquer string                                       | Um nome personalizado para o cartão. Se não for definido, será exibido o nome da entidade.                                    |
| `icon`                  | string  | Opcional                            | Qualquer ícone `mdi:`                                  | Um ícone personalizado para o cartão. Se não for definido, será usado o ícone da entidade ou a `entity-picture`.                   |
| `force_icon`            | boolean | Opcional                            | `true` ou `false` (padrão)                     | Dá prioridade ao ícone em vez da `entity-picture`.                                                           |
| `show_state`            | boolean | Opcional                            | `true` ou `false` (padrão)                     | Mostra ou oculta o estado atual da `entity`.                                                                 |
| `show_name`             | boolean | Opcional                            | `true` (padrão) ou `false`                     | Mostra ou oculta o nome da entidade.                                                                            |
| `show_icon`             | boolean | Opcional                            | `true` (padrão) ou `false`                     | Mostra ou oculta o ícone.                                                                                          |
| `hide_target_temp_low`  | boolean | Opcional (apenas para entidades que suportam `target_temp_low`) | `true` ou `false` (padrão) | Oculta o controle de temperatura mínima alvo, se suportado pela `entity`.                                          |
| `hide_target_temp_high` | boolean | Opcional (apenas para entidades que suportam `target_temp_high`)| `true` ou `false` (padrão) | Oculta o controle de temperatura máxima alvo, se suportado pela `entity`.                                         |
| `state_color`           | boolean | Opcional                            | `true` ou `false` (padrão)                     | Aplica uma cor de fundo constante quando a entidade de climatização está ligada.                                              |
| `step` | number | Opcional | Qualquer número | O incremento de temperatura. |
| `min_temp` | number | Opcional | Qualquer número | A temperatura mínima. |
| `max_temp` | number | Opcional | Qualquer número | A temperatura máxima. |
| `button_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Permite alterar as ações padrão ao clicar no botão. |
| `tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar no ícone, se não for definido, será usado `more-info`. |
| `double_tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no ícone, se não for definido, será usado `none`. |
| `hold_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao segurar o ícone, se não for definido, será usado `more-info`. |                              |
| `main_buttons_position` | string | Opcional | `default` ou `bottom` | Move os botões de ação da climatização para baixo (fixo) |
| `main_buttons_full_width` | boolean | Opcional | `true` ou `false` | Deixa os botões de ação inferiores em largura total (padrão: `true` quando a posição é `bottom`) |
| `main_buttons_alignment` | string | Opcional | `end` (padrão), `center`, `start`, `space-between` | Alinhamento dos botões de ação inferiores quando não estão em largura total |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na visualização de seções), `large` (padrão se estiver na visualização de seções), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |
| `sub_button`            | object  | Opcional                            | Veja [sub-botões](#sub-botões)                | Adiciona botões personalizados fixados à direita. Útil para um menu de seleção de modo de climatização.                                  |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Cor de fundo principal para os elementos suportados no cartão de climatização |
| `--bubble-climate-border-radius` | `px` | Raio da borda dos elementos suportados no cartão de climatização |
| `--bubble-climate-button-background-color` | `color` | Cor de fundo dos botões do cartão de climatização |
| `--bubble-climate-icon-border-radius` | `px` | Raio da borda do contêiner do ícone do cartão de climatização |
| `--bubble-state-climate-fan-only-color` | `color` | Cor de sobreposição para o estado somente ventilador |
| `--bubble-state-climate-dry-color` | `color` | Cor de sobreposição para o estado seco |
| `--bubble-state-climate-cool-color` | `color` | Cor de sobreposição para o estado resfriar |
| `--bubble-state-climate-heat-color` | `color` | Cor de sobreposição para o estado aquecer |
| `--bubble-state-climate-auto-color` | `color` | Cor de sobreposição para o estado automático |
| `--bubble-state-climate-heat-cool-color` | `color` | Cor de sobreposição para o estado aquecer/resfriar |
| `--bubble-climate-accent-color` | `color` | Cor de destaque do cartão de climatização |
| `--bubble-climate-box-shadow` | Veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra do contêiner de climatização. |

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

Este cartão permite exibir suas entidades de calendário. Seu conteúdo é rolável, então você pode navegar facilmente pelos próximos eventos.

### Opções do calendário

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome                | Tipo    | Obrigatório  | Opções suportadas                               | Descrição                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Opcional     | Qualquer número (mínimo: 1)                        | Número de dias do calendário para buscar eventos, a partir de agora até o fim do enésimo dia (padrão: 7) |
| `entities`          | object  | **Obrigatório** | Um objeto de entidade de calendário (veja abaixo)            | A entidade a ser controlada (ex.: `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Obrigatório** | Uma entidade de calendário                               | A entidade de calendário a ser exibida                                                          |
| `entities.color`    | string  | Opcional     | Uma cor                                         | Uma cor personalizada para o chip do calendário. Se não for definida, uma cor automática será escolhida |
| `days`              | number  | Opcional     | Qualquer número (mínimo: 1)                         | Número de dias do calendário para buscar eventos, a partir de agora até o fim do enésimo dia (padrão: 7) |
| `limit`             | number  | Opcional     | Um número                                        | A quantidade de eventos que será exibida no cartão                                  |
| `show_end`          | boolean | Opcional     | `true` ou `false` (padrão)                     | Mostra ou oculta o horário de término dos eventos                                                    |
| `show_progress`     | boolean | Opcional     | `true` (padrão) ou `false`                     | Mostra ou oculta a barra de progresso do evento                                                     |
| `show_started_events`| boolean | Opcional     | `true` (padrão) ou `false`                     | Mostra ou oculta os eventos que estão em andamento no momento. Eventos de vários dias são avaliados um dia por vez, então apenas o dia em curso é ocultado e os dias seguintes continuam visíveis |
| `scrolling_effect`  | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto role quando o conteúdo excede o tamanho do seu contêiner |
| `event_action` | object | Opcional | `tap_action`, `double_tap_action` ou `hold_action`, veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Permite adicionar ações ao clicar no evento. |
| `tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar no dia, se não for definido, será usado `none`. |
| `double_tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no dia, se não for definido, será usado `none`. |
| `hold_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao segurar o dia, se não for definido, será usado `none`. |
| `card_layout` | string | Opcional | `normal` (padrão se não estiver na visualização de seções), `large` (padrão se estiver na visualização de seções), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |
| `sub_button` | object | Opcional | Veja [sub-botões](#sub-botões) | Adiciona botões personalizados fixados à direita |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável                                  | Valor esperado | Descrição                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Cor de fundo principal para os elementos suportados no cartão de calendário  |
| `--bubble-calendar-border-radius`         | `px`           | Raio da borda dos elementos suportados no cartão de calendário |
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

<summary>Um cartão de calendário com horário de término e uma barra de progresso</summary>

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

Este cartão é um simples separador para dividir seu pop-up em categorias / seções. Ex.: Luzes, Dispositivos, Coberturas, Configurações, Automações...

### Opções do separador

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `name` | string | Opcional, mas recomendado | Qualquer string | Um nome para o seu separador |
| `icon` | string | Opcional, mas recomendado | Qualquer ícone `mdi:` | Um ícone para o seu separador |
| `card_layout` | string | Opcional | `normal` (padrão fora da visualização em seções), `large` (padrão na visualização em seções), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |
| `sub_button` | object | Opcional | Veja [sub-botões](#sub-botões) | Adiciona botões personalizados fixados à direita |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Cor de fundo da linha do separador |

</details>

#### Exemplo

<details>

<summary>Um separador/divisor para uma seção "Coberturas"</summary>

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

Este cartão está aqui para preencher uma coluna vazia. É útil se você tiver um `horizontal-stack` no seu pop-up com apenas um cartão. Olhe para o canto inferior direito desta captura de tela para (não) vê-lo.

### Opções da coluna vazia

Este cartão não tem opções e não suporta [estilo](#estilo), embora suporte as opções de layout das seções do HA.

#### Exemplo

<details>

<summary>Uma coluna vazia em uma pilha horizontal</summary>

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

Este cartão é dedicado apenas a sub-botões. É perfeito para menus, ações rápidas, chips informativos ou um rodapé fixo na parte inferior da página.

> [!IMPORTANT]  
> Este cartão usa o novo esquema de sub-botões. Use `sub_button.bottom` para definir seus botões. A seção `sub_button.main` é ignorada.

### Opções do apenas sub-botões

<details>

<summary><b>Opções (YAML + descrições)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Obrigatório** | Veja [sub-botões](#sub-botões) | Define seus sub-botões usando a seção `bottom` |
| `hide_main_background` | boolean | Opcional | `true` ou `false` (padrão) | Remove o fundo do cartão |
| `footer_mode` | boolean | Opcional | `true` ou `false` (padrão) | Fixa o cartão na parte inferior da página |
| `footer_full_width` | boolean | Opcional | `true` ou `false` (padrão) | Torna o rodapé em largura total (100%) |
| `footer_width` | number | Opcional | Qualquer número | Largura do rodapé em pixels quando `footer_full_width` é `false` |
| `footer_bottom_offset` | number | Opcional | Qualquer número | Distância da parte inferior da página em pixels (padrão: `16`) |
| `card_layout` | string | Opcional | `normal` (padrão fora da visualização em seções), `large` (padrão na visualização em seções), `large-2-rows`, `large-sub-buttons-grid` | Layout de estilo do cartão, veja [layouts do cartão](#layouts-do-cartão) |
| `rows` | number | Opcional | Qualquer número | Número de linhas (altura) (ex.: `2`) |

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Largura do rodapé quando `footer_full_width` é `false` |
| `--bubble-footer-bottom` | `px` | Distância do rodapé em relação à parte inferior |
| `--bubble-footer-box-shadow` | veja [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Sombra da caixa do contêiner do rodapé |

</details>

#### Exemplos

<details>

<summary>Chips (como na captura de tela)</summary>

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

Em todo cartão que suporta essa opção, você pode adicionar sub-botões para personalizar ainda mais seus cartões. Você pode, por exemplo, criar um botão que controle um robô aspirador, um cartão de clima, ou quase qualquer coisa que você possa imaginar. Esses sub-botões suportam as ações de toque e a maioria das opções de botão.

Os sub-botões agora suportam três tipos: **Padrão (botão)**, **Controle deslizante**, e **Menu suspenso / Seleção**. Você pode misturar tipos no mesmo cartão, posicionar sub-botões em cima ou embaixo, e organizá-los em grupos para layouts mais avançados.

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

**Observações:**
- `main` e `bottom` são duas seções independentes. Os sub-botões inferiores (bottom) ficam fixados na parte inferior do cartão.
- `main_layout` e `bottom_layout` aceitam `inline` (padrão) ou `rows` para empilhar grupos verticalmente.
- Grupos são objetos com um array `group` e um `buttons_layout` opcional (`inline` ou `column`).
- `justify_content` está disponível apenas para **grupos inferiores** (`start`, `center`, `end`, `fill`).
- Quando há sub-botões inferiores, o layout do cartão muda automaticamente para `large`, a menos que você defina outro layout explicitamente.
- Os arrays `sub_button` antigos ainda são suportados e tratados como a seção `main`.

</details>

### Opções dos sub-botões

<details>

<summary><b>Opções (YAML + descrição)</b></summary>

| Nome | Tipo | Requisito | Opções suportadas | Descrição |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcional | Qualquer entidade | Uma entidade a controlar |
| `name` | string | Opcional | Qualquer string | Um nome para o seu sub-botão, se não for definido, mostrará o nome da entidade |
| `icon` | string | Opcional | Qualquer ícone `mdi:` | Um ícone para o seu sub-botão, se não for definido, mostrará o ícone ou a imagem da entidade |
| `force_icon` | boolean | Opcional | `true` ou `false` (padrão) | Força o ícone mesmo que uma imagem de entidade esteja disponível |
| `sub_button_type` | string | Opcional | `default`, `slider` ou `select` | Escolhe o tipo do sub-botão |
| `show_background` | boolean | Opcional | `true` (padrão) ou `false` | Mostra um fundo para o seu sub-botão, mudará de cor com base no estado da sua entidade |
| `state_background` | boolean | Opcional | `true` (padrão) ou `false` | Usa a cor do estado quando a entidade está `on` |
| `light_background` | boolean | Opcional | `true` (padrão) ou `false` | Usa a cor da luz para o fundo quando disponível |
| `show_state` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o estado da sua `entity` |
| `show_name` | boolean | Opcional | `true` ou `false` (padrão) | Mostra ou oculta o nome |
| `show_icon` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta o ícone |
| `show_last_changed` | boolean | Opcional | `true` ou `false` (padrão) | Mostra o horário da última alteração da sua `entity` |
| `show_last_updated` | boolean | Opcional | `true` ou `false` (padrão) | Mostra o horário da última atualização da sua `entity` |
| `show_attribute` | boolean | Opcional | `true` ou `false` (padrão) | Mostra um atributo da sua `entity` abaixo do seu `name` |
| `attribute` | string | Opcional (obrigatório se `show_attribute` for definido como `true`) | Um atributo da sua `entity` | O atributo a mostrar (ex.: `brightness`) |
| `select_attribute` | string | Opcional | Uma lista de atributos da sua `entity` (veja as opções suportadas acima) | Essa lista de atributos abrirá um menu suspenso ao ser clicada (ex.: `effect_list`) |
| `show_arrow` | boolean | Opcional | `true` (padrão) ou `false` | Mostra ou oculta a seta do menu suspenso para sub-botões de seleção |
| `scrolling_effect` | boolean | Opcional | `true` (padrão) ou `false` | Permite que o texto role quando o conteúdo excede o tamanho do contêiner |
| `tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar no sub-botão, se não for definido, `more-info` será usado. |
| `double_tap_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao clicar duas vezes no sub-botão, se não for definido, `none` será usado. |
| `hold_action` | object | Opcional | Veja [ações](#ações-de-toque-toque-duplo-e-toque-longo) | Define o tipo de ação ao segurar o sub-botão, se não for definido, `more-info` será usado. |
| `fill_width` | boolean | Opcional | `true` ou `false` | Preenche a largura disponível (padrão: `false` para main, `true` para bottom) |
| `width` | number ou string | Opcional | Qualquer número ou comprimento CSS | Largura personalizada (`px` para a seção main, `%` para a seção bottom por padrão) |
| `custom_height` | number | Opcional | Qualquer número | Altura personalizada em pixels |
| `content_layout` | string | Opcional | `icon-left` (padrão), `icon-top`, `icon-bottom`, `icon-right` | Posicionamento do ícone dentro do sub-botão |
| `always_visible` | boolean | Opcional | `true` ou `false` (padrão) | **Somente controle deslizante.** Sempre mostra o controle deslizante em vez de abri-lo ao tocar |
| `show_button_info` | boolean | Opcional | `true` ou `false` (padrão) | **Somente controle deslizante.** Mostra ícone/nome/estado quando `always_visible` está ativado |
| `visibility` | object ou list | Opcional | Veja [condições](#condições) | Mostra ou oculta o sub-botão com base em condições |
| `hide_when_parent_unavailable` | boolean | Opcional | `true` ou `false` (padrão) | Oculta o sub-botão se a entidade do cartão pai estiver indisponível |
| `css_class` | string | Opcional | Qualquer texto | Uma classe CSS extra no sub-botão, para alcançá-lo nos seus [estilos](#estilo) qualquer que seja o nome dele (ex.: `My value` gera `.my-value`) |

</details>

<details>

<summary><b>Opções do sub-botão de controle deslizante (mesmas dos controles deslizantes de botão)</b></summary>

<br>

Os sub-botões de controle deslizante suportam as mesmas opções dos controles deslizantes de botão, incluindo:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variáveis CSS (veja <a href="#estilo">Estilo</a>)</b></summary>

| Variável | Valor esperado | Descrição |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Raio da borda dos sub-botões |
| `--bubble-sub-button-background-color` | `color` | Cor de fundo dos sub-botões |
| `--bubble-sub-button-outline` | `box-shadow` | Contorno adicionado a um sub-botão ou a um controle deslizante somente quando ele é pintado com a mesma cor do cartão atrás dele, o que o tornaria invisível (defina como `none` para removê-lo) |
| `--bubble-sub-slider-border-radius` | `px` | Raio da borda dos sub-botões de controle deslizante |
| `--bubble-sub-slider-background-color` | `color` | Cor de fundo dos sub-botões de controle deslizante |
| `--bubble-sub-slider-height` | `px` | Altura dos sub-botões de controle deslizante sempre visíveis |
| `--bubble-sub-slider-outline` | `box-shadow` | Contorno apenas dos sub-botões de controle deslizante, recorre a `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Cor do texto em fundos de sub-botão claros |

</details>

#### Exemplos

<details>

<summary>Um botão com alguns sub-botões para criar um cartão de robô aspirador (como na captura de tela)</summary>

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

<summary>Um controle deslizante de botão com um sub-botão que mostra o brilho e outro que alterna a luz (como na captura de tela)</summary>

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

<summary>Um botão que mostra a temperatura interna e externa com a previsão do tempo para hoje e amanhã (captura de tela incluída)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Azar o meu, está nublado o tempo todo, mas todos os ícones mudam com base no clima.

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

## Layouts do cartão

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

O Bubble Card oferece suporte total à visualização de seções do Home Assistant, você pode alterar o layout do cartão para deixá-lo maior e também mudar o número de colunas ou linhas que o cartão deve ocupar na sua visualização de seção (apenas nos cartões que suportam essa opção). Esses layouts também são suportados em todos os outros tipos de visualização.

<details>

<summary><b>Layouts de cartão disponíveis</b></summary>

| Layout | Descrição |
| --- | --- |
| `normal` | O layout padrão (não otimizado para a visualização de seção) |
| `large` | Um layout maior que se redimensiona conforme as linhas selecionadas na visualização de seção (otimizado para a visualização de seção) |
| `large-2-rows` | Um layout maior com 2 linhas de sub-botões que se redimensiona conforme as linhas selecionadas na visualização de seção (otimizado para a visualização de seção) |
| `large-sub-buttons-grid` | Este layout exibe os sub-botões em uma grade, `rows` precisa ser definido com pelo menos `2`.

</details>

#### Exemplos

<details>

<summary>Um botão grande que mostra estatísticas de energia com 2 linhas de sub-botões (captura de tela incluída)</summary>

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

<summary>Um botão grande com múltiplas linhas com 12 sub-botões</summary>

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

Algumas opções são governadas por condições, escritas exatamente como as do [cartão condicional](https://www.home-assistant.io/dashboards/conditional/) do Home Assistant:

- `visibility` em um [sub-botão](#sub-botões), para mostrá-lo ou ocultá-lo
- `trigger` em um [pop-up](#pop-up), para abri-lo quando as condições forem atendidas
- `checkConditionsMet(conditions, hass)` dentro dos seus [modelos](#modelos), quando você precisa da resposta no seu próprio código

Todos os tipos de condição do Home Assistant são avaliados: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, e os grupos `and`, `or` e `not`. As condições do construtor de condições do Home Assistant também funcionam, aquelas nomeadas conforme seu domínio, como `sun.is_up`, `light.is_on`, `zone.in_zone` ou `temperature.is_value`, com suas configurações `target`, `options`, `behavior` e `for`.

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
> As condições são avaliadas no seu navegador, então as poucas que precisam do servidor do Home Assistant não podem ser exatas: o nascer e o pôr do sol são lidos da entidade `sun.sun` em vez de recalculados, e uma duração `for` é medida a partir da última mudança de estado, sem o histórico do recorder.
>
> `view_columns` é aceito mas sempre passa, já que o Bubble Card nunca é quem organiza as colunas da sua visualização. Um tipo de condição que o Bubble Card não conhece se reporta uma vez no console do seu navegador em vez de falhar em silêncio, assim você distingue um erro de digitação de um recurso ausente.

<br>

---

<br>

## Ações de toque, toque duplo e toque longo

Você também pode usar as ações padrão do Home Assistant de toque, toque duplo e toque longo nos cartões que suportam essa opção. Por exemplo, isso permite exibir a janela de "mais informações" ao segurar o ícone de um botão ou executar um serviço ao pressionar um sub-botão.

**Nota: quando um `double_tap_action` é configurado, o `tap_action` normal terá um atraso de 200ms para permitir a detecção
de um toque duplo. Se esse atraso for indesejado, defina `double_tap_action` como `none` para desativar a detecção de toque duplo.**

### Opções de ação

<details>

<summary><b>Opções (YAML + descrição)</b></summary>

| Nome | Tipo | Opções suportadas | Descrição |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Ação a ser executada |
| `target` | object |  | Funciona apenas com `call-service`. Segue a [sintaxe do Home Assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Qualquer caminho do seu painel | Caminho para navegar (ex.: `'#kitchen'` para abrir um pop-up) quando a ação é definida como navigate |
| `url_path` | string | Qualquer link | URL a ser aberta ao clicar (ex.: `https://www.google.com`) quando `action` é `url` |
| `service` | string | Qualquer serviço | Serviço a ser chamado (ex.: `media_player.media_play_pause`) quando `action` é definida como `call-service` |
| `data` ou `service_data` | object | Qualquer dado de serviço | Dados do serviço a incluir (ex.: `entity_id: media_player.kitchen`) quando `action` é definida como `call-service` |
| `confirmation` | object | Veja [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Exibe um pop-up de confirmação (não um do Bubble Card), sobrescreve o objeto `confirmation` padrão |

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

Você pode adicionar estilos personalizados para modificar o CSS de todos os cartões **sem usar o card-mod** de quatro maneiras:

- No editor, vá até o cartão que deseja modificar, depois navegue até _Opções de estilo > Estilos personalizados e modelos JS_, e adicione seus estilos personalizados (confira as dicas e exemplos abaixo).
- No editor (ou em [YAML](#módulos)), vá até o cartão que deseja modificar, depois navegue até _Módulos_, então crie um novo módulo (ele ficará disponível para todos os cartões), ou vá até a **Module Store** para instalar qualquer módulo disponível (mais detalhes sobre módulos podem ser encontrados [abaixo](#módulos)).
- Em um arquivo de [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) adicionando variáveis CSS em YAML (elas estão disponíveis na documentação de cada cartão acima). Isso permite modificações globais.

  <details>
  
  <summary>Exemplo</a></summary>
  
  <br>

  Não copie a linha `Bubble:`, esse é o nome do tema que você usa. Você também precisa remover o `--` das variáveis.

  Você precisa executar a ação [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) para atualizar o tema após qualquer modificação.

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
  
- Em YAML adicionando `styles: |` seguido dos seus estilos personalizados (confira as dicas e exemplos abaixo).

> [!TIP]  
> **Para entender quais classes de estilo podem ser modificadas**, você pode dar uma olhada na pasta [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) deste repositório. Em cada pasta de cartão, você encontrará um arquivo chamado `styles.css`. Esses arquivos contêm todos os estilos aplicados. Isso permite muito mais possibilidades do que as variáveis CSS, mas precisa ser adicionado individualmente a cada cartão.
> 
> Você também pode encontrar muitos [exemplos da comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ou alguns no [fórum do Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) pesquisando um pouco.
>
> O tema Bubble para o Home Assistant (como nas capturas de tela) pode ser encontrado [aqui](https://github.com/Clooos/Bubble).
>
> Um vídeo tutorial está a caminho no meu [canal do YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Observe que talvez seja necessário adicionar `!important;` a alguns estilos CSS que já estão definidos (veja os exemplos abaixo).

> [!TIP]  
> Os sub-botões podem ser direcionados por classes baseadas no nome. Por exemplo, um sub-botão chamado "My sub-button" pode ser estilizado com `.my-sub-button`. Sub-botões de slider também expõem `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> Uma classe baseada no nome muda quando você renomeia um sub-botão, e é traduzida quando o nome também é. Defina `css_class` no sub-botão para ter uma classe sua que nunca se move, qualquer que seja o nome e qualquer que seja o idioma.

#### Exemplos

<details>

<summary>Alterando o tamanho da fonte de qualquer Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Alterando a cor de fundo de um único botão em uma pilha de botões horizontal</summary>

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

<summary>Alterando a cor de fundo de um cartão</summary>

<br>

Este funciona em todos os tipos de Bubble Card (exceto os pop-ups):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Este faz o mesmo apenas em um cartão de botão (funciona no cabeçalho do pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Para alterar a cor quando estiver `on`, dê uma olhada nos modelos de estilo abaixo.

</details>

<details>

<summary>Alterando a cor de um slider de botão</summary>

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

<summary>Alterando a cor da linha de um separador</summary>

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

<summary>Alterando a cor de um ícone</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Para o ícone de uma pilha de botões horizontal.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Alterando a cor de fundo de um contêiner de ícone</summary>

<br>

Este funciona em todos os tipos de Bubble Card (exceto os pop-ups):

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

<summary>Alterando o tamanho dos sub-botões (perfeito para o layout grande)</summary>

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

<summary>Alterando a cor de fundo do segundo sub-botão</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Alterando o tamanho de um ícone</summary>

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

<summary>Usando uma imagem em vez de um ícone em um sub-botão</summary>

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

Basta enviar essa imagem para uma pasta "pictures" (ou o nome que você quiser) na pasta "www" do Home Assistant.

</details>

<details>

<summary>Exemplo avançado: criando uma fileira horizontal de sub-botões (captura de tela incluída)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Eu realmente adoro este, uso como cabeçalho no meu painel.

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

**O Bubble Card não é compatível com modelos Jinja**, mas usuários avançados podem adicionar modelos em JS diretamente nos seus [estilos personalizados](#estilo). Por exemplo, isso permite alterar dinamicamente um ícone, os textos ou as cores de um elemento, mostrar ou ocultar um elemento condicionalmente (como um sub-botão), ou quase qualquer coisa baseada em um estado, um atributo e muito mais.

> [!TIP]  
> Mais informações sobre modelos JS [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Meu conselho é **sempre dar uma olhada no console do seu navegador** para se certificar de que tudo está funcionando corretamente.

> [!IMPORTANT]  
> **Todos os modelos que não modificam uma propriedade CSS devem ser colocados no final! Como a modificação de um ícone, um texto ou qualquer outro elemento.**

#### Variáveis e funções disponíveis

<details>

<summary>Variáveis</summary>

<br>

Você tem acesso a essas variáveis na maioria dos cartões:

- `state` retorna o estado da sua `entity` definida.
  
- `entity` retorna a entidade que você definiu, como `switch.test` neste exemplo.
  
- `icon` pode ser usado assim para alterar o ícone `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` retorna o estado da `entity` definida no seu primeiro sub-botão, `[0]` é o estado do primeiro sub-botão, `[1]` o segundo...
  
- `subButtonIcon[0]` pode ser usado assim para alterar o ícone do primeiro sub-botão `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` é o ícone do primeiro sub-botão, `[1]` o segundo...
  
- `card` retorna o elemento do cartão no DOM.
  
- `hass` é uma variável avançada que oferece ainda mais controle, por exemplo você pode retornar o estado de `light.kitchen` assim `hass.states['light.kitchen'].state` ou um atributo assim `hass.states[entity].attributes.brightness`.

- `this` retorna muitas informações úteis sobre a sua configuração e o seu painel, use isso apenas se souber o que está fazendo.

</details>

<details>

<summary>Funções</summary>

<br>

Você tem acesso a todas as funções JS globais, mas também tem acesso a:

- `getWeatherIcon` pode ser usada para retornar um ícone de clima com base em um estado que retorna o clima. Por exemplo, você pode fazer isso `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` para alterar o ícone do terceiro sub-botão para o ícone do clima de hoje, `.forecast[1]?.condition` é para amanhã...

  Você precisará criar um sensor de modelo para isso. Aqui está o que você pode adicionar no seu `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` retorna `true` quando uma lista de [condições](#condições) é atendida, por exemplo `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` pode ser usada para traduzir um estado (também pode ser usada para obter a unidade de um estado, sem precisar adicioná-la manualmente).
- `hass.formatEntityAttributeValue(state, "attribute")` pode ser usada para traduzir um atributo (também pode ser usada para obter a unidade de um estado, sem precisar adicioná-la manualmente).

</details>

#### Exemplos

Você pode encontrar muitos exemplos abaixo, mas também pode encontrar modelos bem avançados na minha [página do Patreon](https://www.patreon.com/c/Clooos), como um (meu favorito) que permite até quatro selos condicionais posicionados ao redor dos ícones do cartão. É também uma ótima forma de aprender sobre todas as possibilidades dos estilos personalizados e modelos do Bubble Card!

<details>
<summary>Exemplos da minha página do Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Adicionando selos ao estilo Home Assistant a qualquer cartão</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Mostrando data e hora formatadas em um separador sem usar nenhuma entidade</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Mostrando o estado de um sub-botão em duas linhas</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personalizando rótulos e ícones dentro de um sub-botão de seleção</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Adicionando um pop-up de lembrete persistente que aparece apenas quando necessário</a>
</p>

<br>

</details>

<details>

<summary>Alterando a cor de fundo de um botão que fica vermelho quando está <code>off</code> e azul quando está <code>on</code></summary>

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

<summary>Alterando a cor de fundo de um botão com base em uma entidade para a pilha de botões horizontal</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Mostrando/Ocultando um sub-botão condicionalmente</summary>

<br>

Este exemplo mostra o primeiro sub-botão apenas quando o meu robô aspirador está travado.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Este exemplo mostra um sub-botão quando a bateria está abaixo de 10%. Útil com um sub-botão que mostra "Bateria fraca".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Alterando um ícone ou ícone de sub-botão condicionalmente</summary>

<br>

Este exemplo altera o ícone de um botão apenas quando um robô aspirador está travado.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Este exemplo altera o ícone do primeiro sub-botão apenas quando um robô aspirador está travado.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Alterando a cor de um ícone ou ícone de sub-botão condicionalmente</summary>

<br>

Este exemplo altera a cor do ícone de um botão com base no seu estado.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Este exemplo altera a cor do ícone de um sub-botão com base no seu estado. `.bubble-sub-button-1` é o primeiro sub-botão, substitua `1` se quiser alterar o ícone de outro sub-botão.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animando um ícone de ventilador condicionalmente</summary>

<br>

Este exemplo gira o ícone de um botão quando um ventilador está `on`.
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

<summary>Aplicando modelos a textos (como nome ou estado)</summary>

<br>

Este exemplo altera o nome/estado de um botão para "Atualmente está ensolarado" dependendo do seu clima.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ou quando aplicado a sub-botões:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Se você quiser aplicar um modelo ao estado (`.bubble-state`) não ative `show_state: true`, apenas ative `show_attribute: true` sem nenhum atributo.

</details>

<details>

<summary>Exemplo avançado: Alterando a cor de um sub-botão quando um pop-up está aberto</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Exemplo avançado: Aplicando um modelo ao nome de um separador com base em um estado traduzido para o seu idioma</summary>

<br>

Você pode usar `hass.formatEntityState(state)` para traduzir um estado e `hass.formatEntityAttributeValue(state, "attribute")` para traduzir um atributo.

Este exemplo altera o nome e o ícone com base no clima, "Nuageux" significa "Nublado" em francês.

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

Os módulos são um recurso poderoso que permite salvar, reutilizar e compartilhar seus estilos personalizados e modelos em todos os seus Bubble Cards. Em vez de copiar e colar o mesmo código em vários cartões, você pode criar um Módulo e aplicá-lo onde precisar. Isso torna o gerenciamento da aparência do seu painel muito mais fácil e eficiente.

Mas esse recurso é muito mais poderoso do que isso, ele permite que você mesmo adicione recursos reais no editor do Bubble Card, usando todas as opções padrão do [formulário do Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
O seletor de objeto foi aprimorado para mostrar alterações em tempo real e para dar suporte a atributos corretamente.

Um módulo também pode responder ao seletor de cartões do Home Assistant ao lado das [sugestões de entidades](#sugestões-de-entidades) integradas: use `suggestions` para os cartões que ele consegue descrever com antecedência, e `suggestions_code` quando eles precisam ser calculados a partir da sua instalação, por exemplo um pop-up montado com todas as entidades da área à qual a entidade escolhida pertence. As duas chaves estão documentadas [aqui](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Você também pode navegar pelo **Module Store** para encontrar e instalar [módulos criados pela comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ou compartilhar suas próprias criações!

> [!TIP]
> O código de um Módulo funciona exatamente da mesma forma que o código na seção `styles` de um cartão. Todas as mesmas variáveis e funções da seção [Modelos](#modelos) estão disponíveis.

<br>

### Configuração inicial

> [!IMPORTANT]
> A partir da v3.1.0, o Bubble Card Tools é o backend de armazenamento recomendado para módulos. O método legado do sensor de modelo ainda funciona para configurações existentes, mas novos módulos e os recursos do Module Store têm melhor suporte via Bubble Card Tools.

A integração Bubble Card Tools habilita o Editor de Módulos e o Module Store, e armazena os módulos como arquivos YAML individuais. Os módulos existentes são migrados automaticamente.

As etapas de instalação e configuração estão explicadas aqui:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### O Editor de Módulos

Você pode acessar o Editor de Módulos a partir das configurações de qualquer cartão, na seção **Módulos**. O editor oferece duas abas principais:

#### Aba Meus módulos

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Esta aba mostra todos os seus módulos instalados e permite:

- **Aplicar** módulos existentes ao cartão atual
- **Criar** um novo módulo do zero
- **Editar** módulos existentes com pré-visualização em tempo real
- **Excluir** módulos que você não precisa mais
- **Pesquisar** e **ordenar** módulos (alfabético, recente, ativos primeiro)
- **Definir status global** para fazer um módulo se aplicar automaticamente a todos os cartões
- **Importar/Exportar** módulos para backup ou compartilhamento
- **Escrever sugestões de entidades** no editor de módulos, em **Opcional: sugestões de entidades**, para que seu módulo seja oferecido no seletor de cartões do Home Assistant. Tanto as regras quanto as sugestões calculadas são verificadas enquanto você escreve, um erro ali impede salvar, e a prévia mostra os cartões sugeridos para qualquer entidade que você escolher

#### Aba Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Esta aba exibe [todos os módulos disponíveis criados pela comunidade](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), e permite:

- **Navegar** por todos os módulos criados pela comunidade
- **Pesquisar** e filtrar módulos por nome, compatibilidade ou palavras-chave
- **Instalar** módulos com um clique
- **Atualizar** módulos instalados quando novas versões estiverem disponíveis

> [!TIP]
> No editor, você pode habilitar módulos não suportados para testar módulos que ainda não estão marcados como compatíveis com um determinado tipo de cartão.

<br>

### Como usar os módulos

#### Criando um novo módulo

<details>

<summary>Clique para expandir</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Vá até o editor de qualquer cartão e expanda a seção **Módulos**.
2. Clique em **Criar novo módulo**.
3. Preencha as informações do módulo.
4. Escreva seu código de estilo CSS e/ou modelo JavaScript no editor de **Código**.
5. (Opcional) Crie uma interface de configuração personalizada na seção **Editor** (como o seletor de cores na captura de tela acima, documentação completa disponível [aqui](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Opcional) Escreva suas **Sugestões de entidades** para que seu módulo seja oferecido no seletor de cartões do Home Assistant. O painel verifica o que você escreve enquanto você digita, e sua prévia mostra os próprios cartões sugeridos para a entidade da sua escolha.
7. Clique em **Salvar**.

Seu módulo agora está disponível para ser usado em qualquer um dos seus cartões!

<br>

</details>

#### Aplicando um módulo a um cartão

<details>

<summary>Clique para expandir</summary>

<br>

- **Pelo editor:**

  - Vá até o editor do cartão ao qual você deseja aplicar o módulo.
  - Expanda a seção **Módulos**.
  - Clique no módulo que você deseja aplicar na lista.
  - Em "Aplicar a", clique em "Este cartão". O módulo agora está ativo. Você pode aplicar vários módulos ao mesmo cartão.

- **Pelo YAML:**

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

#### Aplicando um módulo globalmente

<details>

<summary>Clique para expandir</summary>

<br>

Você pode configurar um módulo para se aplicar automaticamente a todos os Bubble Cards:

**Isso não está disponível para módulos com um editor, pois eles exigem uma configuração específica para funcionar.**

- **Pelo editor:**

  - No editor de Módulos, encontre seu módulo na aba **Meus módulos**.
  - Ative o botão **Todos os cartões** ao lado do nome do módulo.
  - O módulo agora será aplicado automaticamente a todos os cartões.
 
- **Pelo YAML:**

  Na sua configuração YAML do módulo (em `bubble-modules.yaml`), basta adicionar `is_global: true`.

<br>

</details>

#### Excluindo um único cartão de um módulo global

<details>

<summary>Clique para expandir</summary>

<br>

Se você tem um módulo global mas deseja excluí-lo de um cartão específico:

- **Pelo editor:**
  
  - Na seção **Módulos** do cartão, você verá os módulos globais listados.
  - Clique em um módulo global, desative "Este cartão" para excluí-lo desse cartão específico.

- **Pelo YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Compartilhando seu módulo no Module Store

<details>

<summary>Clique para expandir</summary>

<br>

Para compartilhar seu Módulo no Module Store, no Editor de Módulos, na parte inferior em "Exportar Módulo", clique em "Copiar para o GitHub" e cole o conteúdo em uma nova discussão na categoria [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Edite a descrição** (se necessário), **o exemplo** (para usuários de YAML), e lembre-se de **incluir pelo menos uma captura de tela** para o Module Store.

**Seu Módulo fica disponível logo depois disso** (após uma atualização do Store), então verifique novamente se tudo está escrito corretamente e se o Módulo está funcionando como esperado. Você pode, claro, editar/atualizar o Módulo depois de compartilhado.

<br>

</details>

#### Gerenciamento de versões

<details>

<summary>Clique para expandir</summary>

<br>

O Module Store verifica automaticamente se há atualizações para os módulos instalados. Quando há atualizações disponíveis:

1. Você verá um indicador de atualização na aba **Module Store**.
2. Clique em **Atualizar** nos módulos com atualizações disponíveis.
3. Confirme a atualização no Module Store.

<br>

</details>

#### Definindo os tipos de cartão suportados

<details>

<summary>Clique para expandir</summary>

<br>

Alguns módulos podem não ser compatíveis com todos os tipos de cartão. Você pode especificar quais cartões um módulo suporta.  
Se você quiser que um módulo seja compatível com **todos os cartões**, simplesmente omita o campo `supported` (ou use a opção **Todos os cartões** no editor).

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

Mais exemplos podem ser encontrados no Module Store, ou [aqui](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localização

O Bubble Card fala o seu idioma. Seu editor está traduzido nos 64 idiomas que o Home Assistant suporta, e sempre que o Home Assistant já tem uma palavra para algo, a formulação dele é reaproveitada, então você lê os mesmos termos nas duas interfaces.

No rodapé do editor, ao lado do número da versão, um seletor **Automático** acompanha o idioma do seu Home Assistant. Desligue-o e todo o editor volta para o inglês, o que ajuda a seguir um tutorial ou a relatar um problema. Sua escolha fica memorizada no navegador.

Esta documentação também é traduzida, [em 62 idiomas](languages.md). Essas páginas estão abertas a todos, então uma formulação que não combina com o seu próprio Home Assistant pode ser corrigida em alguns cliques. A versão em inglês continua sendo a referência para o conteúdo em si.

<br>

---

<br>

## Ajuda

Sinta-se à vontade para abrir uma issue se algo não estiver funcionando como esperado. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Tem dúvidas ou ideias sobre o Bubble Card? Quer compartilhar seus painéis ou descobertas? Você pode ir ao fórum do Home Assistant, ao subreddit do Bubble Card ou à seção de GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Contribuir

Contribuições são bem-vindas! Sejam correções de bugs, novos recursos, traduções ou melhorias na documentação, sinta-se à vontade para abrir um pull request.

Antes de começar, leia o [guia do desenvolvedor](DEVELOPERS.md), que cobre como configurar seu ambiente local, compilar o projeto e testar suas alterações.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Doar

Eu dedico a maior parte do meu tempo livre para tornar este projeto o melhor possível. Então, se você aprecia meu trabalho, qualquer doação seria uma ótima forma de mostrar seu apoio 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Obrigado a todos pelo apoio, vocês são minha maior motivação!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
