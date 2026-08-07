<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Cette page est une traduction automatique. En cas de doute, la [documentation originale en anglais](../README.md) fait foi. Une formulation vous semble maladroite ? Toute aide est la bienvenue et [corriger cette page](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.fr.md) ne prend qu'une minute : GitHub se charge de la copie du projet et de la pull request. Merci d'avance ! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Lire dans une autre langue](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card est une collection de cartes minimalistes et personnalisables pour Home Assistant, avec des pop-ups modernes et un Module Store intégré qui réunit plus de 100 modules créés par la communauté.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Table des matières

**[`Installation`](#installation)**  **[`Configuration`](#configuration)**  **[`Suggestions d'entité`](#suggestions-dentité)**  **[`Pop-up`](#pop-up)**  **[`Pile de boutons horizontale`](#pile-de-boutons-horizontale)**  **[`Bouton`](#bouton)**  **[`Lecteur multimédia`](#lecteur-multimédia)**  **[`Ouvrant`](#ouvrant)**  **[`Sélecteur`](#sélecteur)**  **[`Thermostat`](#thermostat)**  **[`Calendrier`](#calendrier)**  **[`Séparateur`](#séparateur)**  **[`Colonne vide`](#colonne-vide)**  **[`Sous-boutons uniquement`](#sous-boutons-uniquement)**  **[`Sous-boutons`](#sous-boutons)**  **[`Dispositions de carte`](#dispositions-de-carte)**  **[`Conditions`](#conditions)**  **[`Actions`](#actions-dappui-double-appui-et-appui-long)**  **[`Mise en forme`](#mise-en-forme)**  **[`Modèles`](#modèles)**  **[`Modules`](#modules)**  **[`Localisation`](#localisation)**  **[`Aide`](#aide)**  **[`Contribuer`](#contribuer)**  **[`Faire un don`](#faire-un-don)**

<br>

## Installation

**Version minimale de Home Assistant prise en charge :** 2023.9.0

<details>

<summary>Sans HACS</summary>

<br>

1. Téléchargez `bubble-card.zip` depuis la [dernière version](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Extrayez-le dans votre dossier `<config>/www`, vous devriez obtenir `bubble-card.js` et un dossier `translations` à côté (ce dossier contient les dictionnaires de l'éditeur, sans lui l'éditeur reste en anglais)
3. Sur votre tableau de bord, cliquez sur l'icône en haut à droite puis sur `Modifier le tableau de bord`
4. Cliquez de nouveau sur cette icône puis sur `Ressources`
5. Cliquez sur `Ajouter une ressource`
6. Copiez et collez ceci : `/local/bubble-card.js?v=1`
7. Cliquez sur `Module JavaScript` puis sur `Créer`
8. Revenez en arrière et actualisez votre page
9. Vous pouvez maintenant cliquer sur `Ajouter une carte` en bas à droite et rechercher `Bubble Card`
10. Après chaque mise à jour du fichier, vous devrez modifier `/local/bubble-card.js?v=1` et remplacer la version par un nombre plus élevé

Si cela ne fonctionne pas, essayez simplement de vider le cache de votre navigateur.

</details>

<details>

<summary>Avec HACS (recommandé)</summary>

<br>

Cette méthode vous permet de recevoir les mises à jour directement depuis le Home Assistant Community Store

1. Si HACS n'est pas encore installé, téléchargez-le en suivant les instructions sur [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Effectuez la configuration initiale de HACS en suivant les instructions sur [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Dans votre barre latérale, allez dans « HACS »
4. Recherchez « Bubble Card », ou cliquez sur le bouton bleu ci-dessous
5. Cliquez sur « Download »
6. Retournez sur votre tableau de bord et cliquez sur l'icône en haut à droite puis sur `Modifier le tableau de bord`
7. Vous pouvez maintenant cliquer sur `Ajouter une carte` en bas à droite et rechercher `Bubble Card`

Si cela ne fonctionne pas, essayez de vider le cache de votre navigateur ou de l'application (sur tous vos appareils si nécessaire).

#### Vidéos

Vous pouvez aussi jeter un œil à ma chaîne YouTube pour des vidéos pas à pas.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Configuration

Toutes les options peuvent être configurées dans l'éditeur de Home Assistant. Mais vous trouverez plus de détails et le YAML dans la documentation ci-dessous.

<details>

<summary><b>Options principales (YAML + description)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Requis** | `custom:bubble-card` | Type de la carte |
| `card_type` | string | **Requis** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ou `sub-buttons` | Type de la Bubble Card, voir ci-dessous |
| `styles` | object list | Optionnel | N'importe quelle feuille de style CSS | Vous permet de personnaliser le CSS de votre Bubble Card, voir [mise en forme](#mise-en-forme) |

</details>

<details>

<summary><b>Variables CSS globales (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Arrondi des angles de tous les éléments pris en charge |
| `--bubble-main-background-color` | `color` | Couleur de fond principale de tous les éléments pris en charge |
| `--bubble-secondary-background-color` | `color` | Couleur de fond secondaire de tous les éléments pris en charge |
| `--bubble-accent-color` | `color` | Couleur d'accentuation de tous les éléments pris en charge |
| `--bubble-icon-border-radius` | `px` | Arrondi des angles des icônes de tous les éléments pris en charge |
| `--bubble-icon-background-color` | `color` | Couleur de fond des icônes de tous les éléments pris en charge |
| `--bubble-sub-button-border-radius` | `px` | Arrondi des angles de tous les sous-boutons |
| `--bubble-sub-button-background-color` | `color` | Couleur de fond de tous les sous-boutons |
| `--bubble-box-shadow` | voir [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée de tous les éléments pris en charge |
| `--bubble-border` | voir [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Bordure de toutes les cartes prises en charge |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Regardez cette [vidéo](https://www.youtube.com/watch?v=0hSQOlBxKKI) pour découvrir Bubble Card et tout ce qu'elle sait faire.** Ma chaîne YouTube est encore toute jeune et propose des tutoriels sur Home Assistant et Bubble Card. N'hésitez pas à vous y abonner pour aider à améliorer sa visibilité. Merci d'avance !

<br>

---

<br>

## Suggestions d'entité

Depuis Home Assistant 2026.6, choisir une entité dans le sélecteur de cartes vous propose quelques cartes toutes prêtes, et Bubble Card répond à cette question avec ses propres recettes. Choisissez une lumière et on vous propose une carte avec un curseur de luminosité, plus une variante température de couleur, une variante couleur et une variante saturation quand votre lumière les prend en charge. Choisissez un ouvrant et vous obtenez son curseur de position, choisissez un lecteur multimédia et vous obtenez aussi une variante avec sa liste de sources, choisissez un aspirateur et vous obtenez ses boutons démarrer, pause et retour à la base. Chaque suggestion est une configuration Bubble Card normale affichée en aperçu en direct, donc vous pouvez prendre la plus proche et continuer à la modifier comme d'habitude.

Ce qui vous est proposé dépend de ce que votre entité sait vraiment faire : une lumière sans canal de luminosité reçoit un interrupteur plutôt qu'un curseur, un ouvrant qui ne s'incline pas n'a pas de variante inclinaison, une entité de thermostat n'a ses modes prédéfinis que lorsqu'elle en possède. Les entrées classiques suivent en dessous quand elles s'appliquent : la carte dédiée du domaine, un simple bouton et un curseur.

> [!TIP]
> Les modules peuvent ajouter leurs propres suggestions à cette liste, voir [modules](#modules).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Cette carte vous permet de créer une pop-up avec le contenu de votre choix. Chaque pop-up est **masquée par défaut** et peut être ouverte en ciblant son lien (ex. `'#pop-up-name'`), avec n'importe quelle carte qui prend en charge l'[action](#actions-dappui-double-appui-et-appui-long) `navigate`, ou avec la [pile de boutons horizontale](#pile-de-boutons-horizontale) qui est incluse.

> [!TIP]
> ### Déclencheur de la pop-up 
> Cette fonctionnalité vous permet d'ouvrir une pop-up en fonction de l'état de n'importe quelle entité. Par exemple, vous pouvez ouvrir une pop-up « Sécurité » avec une caméra lorsqu'une personne se trouve devant votre maison. Vous pouvez aussi créer un assistant à bascule (input_boolean) et déclencher son ouverture/fermeture dans une automatisation.
> <details>
> <summary>Ouvrir une pop-up lorsqu'un <code>binary_sensor</code> est <code>on</code></summary>
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
> ### Différentes façons de fermer une pop-up 
> Il existe de nombreuses façons de fermer une pop-up. Vous pouvez par exemple balayer l'en-tête de la pop-up vers le bas, faire un long balayage vers le bas à l'intérieur de la pop-up, appuyer sur Échap sur ordinateur, retirer le hash de l'URL ou tout simplement appuyer sur le bouton de fermeture.
>


### Options de la pop-up

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `hash` | string | **Requis** | N'importe quel hash unique (ex. `'#kitchen'`) avec ' ' | C'est ainsi que vous ouvrirez votre pop-up |
| `popup_style` | string | Optionnel | `bubble` (par défaut) ou `classic` | Définit le style visuel de la pop-up |
| `popup_mode` | string | Optionnel | `default` (par défaut), `fit-content`, `centered` ou `adaptive-dialog` | Définit le mode de disposition de la pop-up |
| `with_bottom_offset` | boolean | Optionnel | `true` ou `false` (par défaut) | Utilisé uniquement avec `popup_mode: fit-content` ou `adaptive-dialog`. Applique un décalage en bas sur mobile, utile lorsque votre tableau de bord comprend une carte de pied de page. |
| `full_width_on_mobile` | boolean | Optionnel | `true` ou `false` (par défaut) | Utilisé uniquement avec `popup_mode: centered`. Étend la pop-up sur toute la largeur de l'écran sur mobile, utile sur les petits écrans. |
| `performance_mode` | string | Optionnel | `default` (par défaut) ou `performance` | Optimise l'animation d'ouverture de la pop-up. `performance` retarde légèrement le rendu du contenu et le flou du fond, et désactive aussi le flou de l'arrière-plan s'il est défini. |
| `auto_close` | string | Optionnel | Un délai en millisecondes (ex. `10000` pour 10 s) | Ferme automatiquement la pop-up après un délai |
| `close_on_click` | boolean | Optionnel | `true` ou `false` (par défaut) | Ferme automatiquement la pop-up après toute interaction |
| `close_by_clicking_outside` | boolean | Optionnel | `true` (par défaut) ou `false` | Ferme la pop-up en cliquant en dehors de celle-ci |
| `width_desktop` | string | Optionnel | N'importe quelle valeur CSS | Largeur sur ordinateur (`100%` par défaut sur mobile) |
| `margin` | string | Optionnel | N'importe quelle valeur CSS | À utiliser **uniquement** si votre pop-up n'est pas bien centrée sur mobile (ex. `13px`) |
| `margin_top_mobile` | string | Optionnel | N'importe quelle valeur CSS | Marge haute sur mobile (ex. `-56px` si votre en-tête est masqué) |
| `margin_top_desktop` | string | Optionnel | N'importe quelle valeur CSS | Marge haute sur ordinateur (ex. `50vh` pour une pop-up à mi-hauteur ou `calc(100vh - 400px)` pour une hauteur fixe de `400px`) |
| `bg_color` | string | Optionnel | N'importe quelle valeur hex, rgb ou rgba | La couleur du fond de votre pop-up (ex. `#ffffff` pour un fond blanc) |
| `bg_opacity` | string | Optionnel | N'importe quelle valeur de `0` à `100` | L'opacité du fond de votre pop-up (ex. `100` pour aucune transparence) |
| `bg_blur` | string | Optionnel | N'importe quelle valeur de `0` à `100` | L'effet de flou du fond de votre pop-up, **cela ne fonctionne que si `bg_opacity` n'est pas défini à `100`** (ex. `0` pour aucun flou)|
| `shadow_opacity` | string | Optionnel | N'importe quelle valeur de `0` à `100` | L'opacité de l'ombre de votre pop-up (ex. `0` pour la masquer) |
| `hide_backdrop` | boolean | Optionnel | `true` ou `false` (par défaut) | Activez ceci sur la première pop-up de votre tableau de bord principal pour désactiver l'arrière-plan sur toutes les pop-ups. |
| `background_update` | boolean | Optionnel | `true` ou `false` (par défaut) | Met à jour le contenu de la pop-up en arrière-plan (non recommandé) |
| `trigger` | object ou list | Optionnel | Voir [conditions](#conditions) | Ouvre cette pop-up lorsque les conditions sont remplies |
| `trigger_entity` | string | Optionnel | N'importe quelle entité | Ouvre cette pop-up en fonction de l'état de n'importe quelle entité, la forme simple de `trigger` |
| `trigger_state` | string | Optionnel (**Requis** si `trigger_entity` est défini) | N'importe quel état d'entité | État de l'entité qui ouvre la pop-up |
| `trigger_close` | boolean | Optionnel | `true` ou `false` | Ferme la pop-up lorsque les conditions ne sont plus remplies (par défaut : `true` avec `trigger`, `false` avec `trigger_state`) |
| `open_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Déclenche une action à l'ouverture de la pop-up |
| `close_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Déclenche une action à la fermeture de la pop-up |
| `show_header` | boolean | Optionnel | `true` (par défaut) ou `false` | Affiche ou masque entièrement l'en-tête de la pop-up |
| `show_previous_button` | boolean | Optionnel | `true` ou `false` (par défaut) | Affiche un bouton retour à côté du bouton de fermeture et revient à la pop-up précédente lorsque c'est possible |
| `show_close_button` | boolean | Optionnel | `true` (par défaut) ou `false` | Affiche ou masque le bouton de fermeture tout en gardant le reste de l'en-tête visible |
| `buttons_position` | string | Optionnel | `right` (par défaut) ou `left` | Position des boutons de fermeture et de retour dans l'en-tête |
| `cards` | list | Optionnel | N'importe quelle Bubble Card, carte Home Assistant ou carte personnalisée | Définit le contenu de votre pop-up. Voir l'exemple de pop-up ci-dessous. |
| Vous avez aussi accès à [tous les paramètres du bouton](#bouton) pour l'en-tête de la pop-up. | | Optionnel | | Si rien n'est défini, aucun en-tête ne sera affiché |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Arrondi des angles de la pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Couleur de fond principale des éléments pris en charge de la pop-up |
| `--bubble-pop-up-background-color` | `color` | Couleur de fond de la pop-up |
| `--bubble-backdrop-background-color` | `color` | Couleur du voile d'arrière-plan |
| Vous avez aussi accès à [toutes les variables CSS du bouton](#options-du-bouton) pour l'en-tête de la pop-up. | | |

</details>


### Format de pop-up autonome (v3.2.0+)

Depuis la v3.2.0, les pop-ups utilisent un nouveau format autonome où les cartes de contenu sont définies directement dans la pop-up avec l'option `cards`. Cela offre de meilleures performances et une nouvelle expérience d'édition en glisser-déposer basée sur les sections.


#### Exemples

<details>

<summary>Une pop-up (format autonome)</summary>

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

<summary>Un bouton pour ouvrir la pop-up</summary>

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

## Pile de boutons horizontale

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Cette carte est un bon compagnon de la carte pop-up, elle vous permet d'ouvrir les pop-ups correspondantes. Elle permet aussi d'ouvrir n'importe quelle page de votre tableau de bord. Vous pouvez en plus y ajouter vos capteurs de mouvement/présence pour que l'ordre des boutons s'adapte à la pièce dans laquelle vous venez d'entrer. Cette carte est défilable, reste visible et fait office de pied de page.

> [!IMPORTANT]  
> Cette carte doit être la dernière de votre vue (après toutes les cartes et toutes les pop-ups). Elle ne peut être placée dans aucune pile.

### Options de la pile de boutons horizontale

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Requis** | Le hash de la pop-up (ex. `'#kitchen'`) avec ' ' ou n'importe quel lien | Un lien à ouvrir |
| `1_name` | string | Optionnel | N'importe quelle chaîne | Un nom pour votre bouton |
| `1_icon` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour votre bouton |
| `1_entity` | string | Optionnel | N'importe quelle lumière ou groupe de lumières | Affiche la couleur de cette lumière en arrière-plan |
| `1_pir_sensor` | string | Optionnel | N'importe quel capteur binaire | Au moins un capteur pir, voire plusieurs, pour `auto_order`. En réalité cela fonctionne aussi avec n'importe quel type d'entité, vous pouvez par exemple ajouter des groupes de lumières et l'ordre changera en fonction des derniers états modifiés. |
| `auto_order` | boolean | Optionnel | `true` ou `false` (par défaut) | Change l'ordre des boutons en fonction de la date de dernière modification des `_pir_sensor`, **doit être sur `false` si vous n'avez aucun `_pir_sensor` dans votre code** |
| `margin` | string | Optionnel | N'importe quelle valeur CSS | À utiliser **uniquement** si votre `horizontal-buttons-stack` n'est pas bien centrée sur mobile (ex. `13px`) |
| `width_desktop` | string | Optionnel | N'importe quelle valeur CSS | Largeur sur ordinateur (`100%` par défaut sur mobile) |
| `is_sidebar_hidden` | boolean | Optionnel | `true` ou `false` (par défaut) | Corrige la position de la pile de boutons horizontale si la barre latérale est masquée sur ordinateur (uniquement si vous avez fait vous-même une modification pour la masquer) |
| `rise_animation` | boolean | Optionnel | `true` (par défaut) ou `false` | Mettez ceci sur `false` pour désactiver l'animation qui se déclenche une fois la page chargée |
| `highlight_current_view` | boolean | Optionnel | `true` ou `false` (par défaut) | Met en avant le hash / la vue en cours avec une animation fluide |
| `hide_gradient` | boolean | Optionnel | `true` ou `false` (par défaut) | Mettez ceci sur `false` pour masquer le dégradé |

> [!IMPORTANT]  
> Les variables commençant par un chiffre définissent vos boutons, il suffit de changer ce chiffre pour ajouter d'autres boutons (voir l'exemple ci-dessous).

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Arrondi des angles des boutons de la pile de boutons horizontale |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Couleur de fond des boutons de la pile de boutons horizontale |

</details>


#### Exemple

<details>

<summary>Une pile de boutons horizontale qui se réorganise en fonction des capteurs de présence</summary>

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

## Bouton

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Cette carte est très polyvalente. Elle peut être utilisée comme un bouton **interrupteur**, **curseur**, **état** ou **nom/texte**.

> [!TIP]
> ### Quelles sont les différences entre tous les types de boutons ?
>
> - **Bouton interrupteur :** C'est le type de bouton par défaut. Par défaut, il bascule une entité et sa couleur de fond change en fonction de l'état de l'entité ou de la couleur d'une lumière. Vous pouvez modifier son action dans la section **Action d'appui sur la carte**.
>
> - **Bouton curseur :** Ce type de bouton vous permet de contrôler des entités avec des plages ajustables. Il est idéal pour tamiser les lumières, et sa couleur de remplissage s'adaptera à la couleur de la lumière. Vous pouvez aussi l'utiliser pour afficher des valeurs, comme un niveau de batterie.
>   Entités prises en charge pour les curseurs :
>   - Lumière (luminosité)
>   - Lecteur multimédia (volume)
>   - Ouvrant (position)
>   - Ventilateur (pourcentage)
>   - Thermostat (température)
>   - Input number et number (valeur)
>   - Capteur de batterie (pourcentage, lecture seule)
>
>   Vous pouvez aussi utiliser n'importe quelle entité avec un état numérique en désactivant le filtre d'entité dans **Paramètres du curseur**, puis définir les valeurs `min` et `max`. Cette option est en lecture seule.
>
> - **Bouton état :** Parfait pour afficher les informations d'un capteur ou de n'importe quelle entité. Lorsque vous appuyez dessus, il affichera le panneau « Plus d'infos » de l'entité. Sa couleur de fond ne change pas.
>
> - **Bouton nom/texte :** Le seul type de bouton qui n'a pas besoin d'entité. Il vous permet d'afficher un texte court, un nom ou un titre. Vous pouvez aussi y ajouter des actions. Sa couleur de fond ne change pas.

### Options du bouton

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Requis** | N'importe quelle entité | Une entité à contrôler |
| `button_type` | string | Optionnel | `switch` (par défaut), `slider`, `state` ou `name` | Le comportement de votre bouton |
| `name` | string | Optionnel | N'importe quelle chaîne | Un nom pour votre bouton, s'il n'est pas défini le nom de l'entité sera affiché |
| `icon` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour votre bouton, si elle n'est pas définie l'icône de l'entité ou l'`entity-picture` sera affichée |
| `force_icon` | boolean | Optionnel | `true` ou `false` (par défaut) | Donner la priorité à l'icône plutôt qu'à l'`entity-picture` |
| `use_accent_color` | boolean | Optionnel (`false` par défaut) | **Pour les lumières uniquement.** Utiliser la couleur d'accentuation du thème au lieu de la couleur de la lumière.                         |
| `show_state` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher ou masquer l'état de votre `entity` |
| `show_name` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer le nom |
| `show_icon` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer l'icône |
| `show_last_changed` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure du dernier changement de votre `entity` |
| `show_last_updated` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure de la dernière mise à jour de votre `entity` |
| `show_attribute` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher un attribut de votre `entity` sous son `name` |
| `attribute` | string | Optionnel (requis si `show_attribute` est défini sur `true`) | Un attribut de votre `entity` | L'attribut à afficher (ex. `brightness`) |
| `scrolling_effect` | boolean | Optionnel | `true` (par défaut) ou `false` | Permettre au texte de défiler lorsque le contenu dépasse la taille de son conteneur |
| `button_action` | object | Optionnel | `tap_action`, `double_tap_action` ou `hold_action`, voir ci-dessous | Permet de modifier les actions par défaut lors d'un clic sur le bouton. |
| `tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un clic sur l'icône, si non défini, `more-info` sera utilisé |
| `double_tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un double clic sur l'icône, si non défini, `none` sera utilisé |
| `hold_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un appui long sur l'icône, si non défini, `more-info` sera utilisé |
| `card_layout` | string | Optionnel | `normal` (par défaut hors vue en sections), `large` (par défaut en vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |
| `sub_button` | object | Optionnel | Voir [sous-boutons](#sous-boutons) | Ajouter des boutons personnalisés fixés à droite |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Couleur de fond principale des éléments pris en charge dans le bouton |
| `--bubble-button-border-radius` | `px` | Arrondi des angles du bouton |
| `--bubble-button-icon-border-radius` | `px` | Arrondi des angles du conteneur d'icône du bouton |
| `--bubble-button-icon-background-color` | `color` | Couleur de fond du conteneur d'icône du bouton |
| `--bubble-light-white-color` | `color` | Remplace la couleur blanche par défaut des boutons/curseurs de lumière |
| `--bubble-light-color` | `color` | Remplace la couleur des boutons/curseurs de lumière (même les lumières RVB) |
| `--bubble-button-box-shadow` | Voir [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée du bouton |

</details>

Ces options ne sont disponibles que lorsque `button_type` est défini sur `slider`.

<details>

<summary><b>Options du curseur (YAML + descriptions)</b></summary>

| Nom                   | Type    | Obligatoire                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optionnel                       | La valeur minimale du curseur. Pour les curseurs personnalisés.                                         |
| `max_value`             | number  | Optionnel                       | La valeur maximale du curseur. Pour les curseurs personnalisés.                                         |
| `step`                  | number  | Optionnel                       | La valeur du pas du curseur.                                                                            |
| `tap_to_slide`          | boolean | Optionnel (`false` par défaut)  | Active l'ancien comportement du curseur, où un appui active le curseur au lieu d'un appui long.         |
| `relative_slide`        | boolean | Optionnel (`false` par défaut)  | Met à jour la valeur par rapport à la valeur de départ, plutôt qu'au point de contact initial.          |
| `read_only_slider`      | boolean | Optionnel (`false` par défaut)  | Rend le curseur en lecture seule. Activé automatiquement pour certaines entités comme les capteurs.     |
| `slider_live_update`    | boolean | Optionnel (`false` par défaut)  | L'état de l'entité est mis à jour pendant le glissement. **Cette fonction n'est pas recommandée pour toutes les entités.** |
| `slider_fill_orientation` | string | Optionnel | `left`, `right`, `top` ou `bottom` | Change le sens de remplissage du curseur. De gauche à droite si non défini, en miroir dans les [langues de droite à gauche](#localisation) |
| `slider_value_position` | string | Optionnel | `right`, `left`, `center` ou `hidden` | Position d'affichage de la valeur. Du côté de la fin si non défini, donc à gauche dans les [langues de droite à gauche](#localisation) |
| `invert_slider_value` | boolean | Optionnel (`false` par défaut) | Inverse le sens du curseur (un remplissage de 100 % correspond au minimum). Non disponible pour les curseurs de couleur. |
| `light_slider_type` | string | Optionnel | `brightness` (par défaut), `hue`, `saturation`, `white_temp` | **Pour les lumières uniquement.** Choisir le mode du curseur |
| `cover_slider_type` | string | Optionnel | `position` (par défaut), `tilt_position` | **Pour les ouvrants uniquement.** Choisir le mode du curseur (position ou inclinaison) |
| `hue_force_saturation` | boolean | Optionnel (`false` par défaut) | **Pour les lumières uniquement (mode Teinte).** Forcer la saturation lors du réglage de la teinte |
| `hue_force_saturation_value` | number | Optionnel (`100` par défaut) | **Pour les lumières uniquement (mode Teinte).** Valeur de saturation forcée (0-100) |
| `use_accent_color` | boolean | Optionnel (`false` par défaut) | **Pour les lumières uniquement (mode Luminosité).** Utiliser la couleur d'accentuation du thème au lieu de la couleur de la lumière |
| `allow_light_slider_to_0` | boolean | Optionnel (`false` par défaut) | **Pour les lumières uniquement.** Permet au curseur d'atteindre 0 %, ce qui éteint la lumière. Non disponible avec `tap_to_slide`. |
| `light_transition`      | boolean | Optionnel (`false` par défaut)  | **Pour les lumières uniquement.** Active les transitions de luminosité fluides pour les lumières prises en charge. |
| `light_transition_time` | number  | Optionnel (`500` par défaut)    | **Pour les lumières uniquement.** Le temps de transition en millisecondes. Nécessite `light_transition: true`. |

</details>

#### Exemples

<details>

<summary>Un bouton curseur qui contrôle la luminosité d'une lumière</summary>

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

<summary>Un bouton avec plus d'options</summary>

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

## Lecteur multimédia

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Cette carte vous permet de contrôler une entité lecteur multimédia.

### Options du lecteur multimédia

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Requis** | N'importe quel lecteur multimédia | Le lecteur multimédia à contrôler |
| `name` | string | Optionnel | N'importe quelle chaîne | Un nom pour votre lecteur multimédia, s'il n'est pas défini le nom de l'entité sera affiché |
| `icon` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour votre lecteur multimédia, si elle n'est pas définie l'icône de l'entité ou l'`entity-picture` sera affichée |
| `force_icon` | boolean | Optionnel | `true` ou `false` (par défaut) | Donner la priorité à l'icône plutôt qu'à l'`entity-picture` |
| `show_state` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher ou masquer l'état de votre `entity` |
| `show_name` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer le nom |
| `show_icon` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer l'icône |
| `show_last_changed` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure du dernier changement de votre `entity` |
| `show_last_updated` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure de la dernière mise à jour de votre `entity` |
| `show_attribute` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher un attribut de votre `entity` sous son `name` |
| `attribute` | string | Optionnel (requis si `show_attribute` vaut `true`) | Un attribut de votre `entity` | L'attribut à afficher (ex. `brightness`) |
| `scrolling_effect` | boolean | Optionnel | `true` (par défaut) ou `false` | Permettre au texte de défiler lorsque le contenu dépasse la taille de son conteneur |
| `min_volume` | number | Optionnel | N'importe quel nombre | La valeur minimale du curseur de volume. |
| `max_volume` | number | Optionnel | N'importe quel nombre | La valeur maximale du curseur de volume. |
| `cover_background` | boolean | Optionnel | `true` ou `false` (par défaut) | Utiliser la pochette du média floutée comme arrière-plan de la carte. |
| `button_action` | object | Optionnel | `tap_action`, `double_tap_action` ou `hold_action`, voir [actions](#actions-dappui-double-appui-et-appui-long) | Permet de changer les actions par défaut au clic sur le bouton. |
| `tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au clic sur l'icône, si non défini, `more-info` sera utilisé. |
| `double_tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au double clic sur l'icône, si non défini, `none` sera utilisé. |
| `hold_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action à l'appui long sur l'icône, si non défini, `more-info` sera utilisé. |
| `main_buttons_position` | string | Optionnel | `default` ou `bottom` | Déplacer les boutons d'action en bas (fixes) |
| `main_buttons_full_width` | boolean | Optionnel | `true` ou `false` | Afficher les boutons d'action du bas en pleine largeur (par défaut : `true` lorsque la position est `bottom`) |
| `main_buttons_alignment` | string | Optionnel | `end` (par défaut), `center`, `start`, `space-between` | Alignement des boutons d'action du bas lorsqu'ils ne sont pas en pleine largeur |
| `card_layout` | string | Optionnel | `normal` (par défaut hors vue en sections), `large` (par défaut dans une vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |
| `sub_button` | object | Optionnel | Voir [sous-boutons](#sous-boutons) | Ajouter des boutons personnalisés fixés à droite |
| `hide` | object | Optionnel | Voir ci-dessous | Masquer des boutons de la carte |

#### Options de masquage

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optionnel | `true` ou `false` (par défaut) | Masquer le bouton lecture/pause |
| `volume_button` | boolean | Optionnel | `true` ou `false` (par défaut) | Masquer le bouton de volume |
| `previous_button` | boolean | Optionnel | `true` ou `false` (par défaut) | Masquer le bouton précédent |
| `next_button` | boolean | Optionnel | `true` ou `false` (par défaut) | Masquer le bouton suivant |
| `power_button` | boolean | Optionnel | `true` ou `false` (par défaut) | Masquer le bouton d'alimentation |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Couleur de fond principale du lecteur multimédia |
| `--bubble-media-player-border-radius` | `px` | Arrondi des angles du lecteur multimédia |
| `--bubble-media-player-buttons-border-radius` | `px` | Arrondi des angles des boutons du lecteur multimédia |
| `--bubble-media-player-slider-background-color` | `color` | Couleur de fond du curseur de volume |
| `--bubble-media-player-icon-border-radius` | `px` | Arrondi des angles du conteneur d'icône du lecteur multimédia |
| `--bubble-media-player-icon-background-color` | `color` | Couleur de fond du conteneur d'icône du lecteur multimédia |
| `--bubble-media-player-box-shadow` | Voir [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée du lecteur multimédia |

</details>


#### Exemples

<details>

<summary>Un lecteur multimédia avec toutes les options</summary>

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

## Ouvrant

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Cette carte vous permet de contrôler vos entités `cover`.

### Options de l'ouvrant

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Requis** | N'importe quel ouvrant | Un ouvrant à contrôler |
| `name` | string | Optionnel | N'importe quelle chaîne | Un nom pour votre ouvrant, s'il n'est pas défini le nom de l'entité sera affiché |
| `force_icon` | boolean | Optionnel | `true` ou `false` (par défaut) | Donner la priorité à l'icône plutôt qu'à l'`entity-picture` |
| `show_state` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher ou masquer l'état de votre `entity` |
| `show_name` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer le nom |
| `show_icon` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer l'icône |
| `show_last_changed` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure du dernier changement de votre `entity` |
| `show_last_updated` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure de la dernière mise à jour de votre `entity` |
| `show_attribute` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher un attribut de votre `entity` sous son `name` |
| `attribute` | string | Optionnel (requis si `show_attribute` est défini sur `true`) | Un attribut de votre `entity` | L'attribut à afficher (ex. `brightness`) |
| `scrolling_effect` | boolean | Optionnel | `true` (par défaut) ou `false` | Permettre au texte de défiler lorsque le contenu dépasse la taille de son conteneur |
| `icon_open` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour votre ouvrant ouvert, si elle n'est pas définie l'icône d'ouvrant ouvert par défaut sera affichée |
| `icon_close` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour votre ouvrant fermé, si elle n'est pas définie l'icône d'ouvrant fermé par défaut sera affichée |
| `icon_up` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour le bouton d'ouverture de votre ouvrant, si elle n'est pas définie l'icône d'ouverture par défaut sera affichée |
| `icon_down` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour le bouton de fermeture de votre ouvrant, si elle n'est pas définie l'icône de fermeture par défaut sera affichée |
| `open_service` | string | Optionnel | N'importe quel service ou script | Un service pour ouvrir votre ouvrant, `cover.open_cover` par défaut |
| `stop_service` | string | Optionnel | N'importe quel service ou script | Un service pour arrêter votre ouvrant, `cover.stop_cover` par défaut |
| `close_service` | string | Optionnel | N'importe quel service ou script | Un service pour fermer votre ouvrant, `cover.close_cover` par défaut |
| `tilt_buttons` | string | Optionnel | `top` (par défaut), `bottom`, `left`, `right`, `hidden` | Position des boutons d'inclinaison (affichés uniquement si l'ouvrant prend en charge l'inclinaison) |
| `open_tilt_service` | string | Optionnel | N'importe quel service ou script | Un service pour ouvrir l'inclinaison, `cover.open_cover_tilt` par défaut |

| `close_tilt_service` | string | Optionnel | N'importe quel service ou script | Un service pour fermer l'inclinaison, `cover.close_cover_tilt` par défaut |
| `button_action` | object | Optionnel | `tap_action`, `double_tap_action` ou `hold_action`, voir [actions](#actions-dappui-double-appui-et-appui-long) | Permet de modifier les actions par défaut lors d'un clic sur un bouton. |
| `tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un clic sur l'icône, si non défini, `more-info` sera utilisé. |
| `double_tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un double clic sur l'icône, si non défini, `none` sera utilisé. |
| `hold_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un appui long sur l'icône, si non défini, `more-info` sera utilisé. |
| `main_buttons_position` | string | Optionnel | `default` ou `bottom` | Déplacer les boutons d'action de l'ouvrant en bas (fixes) |
| `main_buttons_full_width` | boolean | Optionnel | `true` ou `false` | Afficher les contrôles du bas sur toute la largeur (par défaut : `true` lorsque la position est `bottom`) |
| `main_buttons_alignment` | string | Optionnel | `end` (par défaut), `center`, `start`, `space-between` | Alignement des contrôles du bas lorsqu'ils ne sont pas sur toute la largeur |
| `card_layout` | string | Optionnel | `normal` (par défaut hors vue en sections), `large` (par défaut dans une vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |
| `sub_button` | object | Optionnel | Voir [sous-boutons](#sous-boutons) | Ajouter des boutons personnalisés fixés à droite |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Couleur de fond principale des éléments pris en charge de la carte ouvrant |
| `--bubble-cover-border-radius` | `px` | Arrondi des angles de la carte ouvrant |
| `--bubble-cover-icon-border-radius` | `px` | Arrondi des angles du conteneur d'icône de la carte ouvrant |
| `--bubble-cover-icon-background-color` | `color` | Couleur de fond du conteneur d'icône de la carte ouvrant |
| `--bubble-cover-box-shadow` | Voir [ombre portée](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée de la carte ouvrant |
| `--bubble-button-box-shadow` | Voir [ombre portée](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée des boutons de la carte ouvrant |

</details>


#### Exemple

<details>

<summary>Une carte qui contrôle un store enrouleur</summary>

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

## Sélecteur

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Cette carte vous permet d'ajouter un menu déroulant pour vos entités `input_select` / `select`. Elle prend également en charge les sous-boutons et toutes les fonctionnalités communes de Bubble Card.

> [!TIP]
> Vous pouvez aussi avoir des sous-boutons de type sélecteur si vous le souhaitez, cette fonctionnalité est disponible dans toutes les cartes qui prennent en charge les sous-boutons.

### Options du sélecteur

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Requis** | N'importe quelle entité | Une entité à contrôler |
| `name` | string | Optionnel | N'importe quelle chaîne | Un nom pour votre sélecteur, s'il n'est pas défini le nom de l'entité sera affiché |
| `icon` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour votre sélecteur, si elle n'est pas définie l'icône de l'entité ou l'`entity-picture` sera affichée |
| `force_icon` | boolean | Optionnel | `true` ou `false` (par défaut) | Donner la priorité à l'icône plutôt qu'à l'`entity-picture` |
| `show_state` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher ou masquer l'état de votre `entity` |
| `show_name` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer le nom |
| `show_icon` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer l'icône |
| `show_last_changed` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure du dernier changement de votre `entity` |
| `show_last_updated` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher l'heure de la dernière mise à jour de votre `entity` |
| `show_attribute` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher un attribut de votre `entity` sous son `name` |
| `attribute` | string | Optionnel (requis si `show_attribute` est défini sur `true`) | Un attribut de votre `entity` | L'attribut à afficher (ex. `brightness`) |
| `scrolling_effect` | boolean | Optionnel | `true` (par défaut) ou `false` | Permettre au texte de défiler lorsque le contenu dépasse la taille de son conteneur |
| `tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un clic sur l'icône, si non défini, `more-info` sera utilisé. |
| `double_tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un double clic sur l'icône, si non défini, `none` sera utilisé. |
| `hold_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un appui long sur l'icône, si non défini, `more-info` sera utilisé. |
| `card_layout` | string | Optionnel | `normal` (par défaut hors vue en sections), `large` (par défaut dans une vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |
| `sub_button` | object | Optionnel | Voir [sous-boutons](#sous-boutons) | Ajouter des boutons personnalisés fixés à droite |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Couleur de fond principale des éléments pris en charge de la carte sélecteur |
| `--bubble-select-background-color` | `color` | Couleur de fond de la carte sélecteur |
| `--bubble-select-list-border-radius` | `px` | Arrondi des angles du menu déroulant de la carte |
| `--bubble-select-list-item-accent-color` | `color` | Couleur d'accentuation de l'élément sélectionné |
| `--bubble-select-list-background-color` | `color` | Couleur de fond du menu déroulant de la carte |
| `--bubble-select-list-width` | `px` | Largeur du menu déroulant de la carte |
| `--bubble-select-arrow-background-color` | `color` | Couleur de fond de la flèche du menu déroulant |
| `--bubble-select-button-border-radius` | `px` | Arrondi des angles du bouton de sélection |
| `--bubble-select-border-radius` | `px` | Arrondi des angles de la carte sélecteur |
| `--bubble-select-icon-border-radius` | `px` | Arrondi des angles du conteneur d'icône de la carte sélecteur |
| `--bubble-select-icon-background-color` | `color` | Couleur de fond du conteneur d'icône de la carte sélecteur |
| `--bubble-select-box-shadow` | Voir [ombre portée](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée de la carte sélecteur |

</details>


#### Exemples

<details>

<summary>Une carte sélecteur avec une liste de scènes</summary>

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

## Thermostat

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Cette carte vous permet de contrôler vos entités `climate`.

> [!TIP]
> Le menu de sélection des modes est un [sous-bouton](#sous-boutons) ajouté automatiquement à la création de la carte. Vous pouvez ensuite le modifier ou le supprimer à votre guise.

### Options du thermostat

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom                      | Type    | Obligatoire                         | Options possibles                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Requis**                          | Entité climate                                   | L'entité à contrôler (ex. `climate.living_room`).                                                               |
| `name`                  | string  | Optionnel                           | N'importe quelle chaîne                                     | Un nom personnalisé pour la carte. S'il n'est pas défini, le nom de l'entité sera affiché.                      |
| `icon`                  | string  | Optionnel                           | N'importe quelle icône `mdi:`                               | Une icône personnalisée pour la carte. Si elle n'est pas définie, l'icône de l'entité ou `entity-picture` sera utilisée. |
| `force_icon`            | boolean | Optionnel                           | `true` ou `false` (par défaut)                  | Donne la priorité à l'icône sur `entity-picture`.                                                               |
| `show_state`            | boolean | Optionnel                           | `true` ou `false` (par défaut)                  | Afficher ou masquer l'état actuel de l'`entity`.                                                                  |
| `show_name`             | boolean | Optionnel                           | `true` (par défaut) ou `false`                  | Affiche ou masque le nom de l'entité.                                                                           |
| `show_icon`             | boolean | Optionnel                           | `true` (par défaut) ou `false`                  | Affiche ou masque l'icône.                                                                                      |
| `hide_target_temp_low`  | boolean | Optionnel (uniquement pour les entités prenant en charge `target_temp_low`) | `true` ou `false` (par défaut) | Masque le contrôle de la température cible basse s'il est pris en charge par l'`entity`.                        |
| `hide_target_temp_high` | boolean | Optionnel (uniquement pour les entités prenant en charge `target_temp_high`)| `true` ou `false` (par défaut) | Masque le contrôle de la température cible haute s'il est pris en charge par l'`entity`.                        |
| `state_color`           | boolean | Optionnel                           | `true` ou `false` (par défaut)                  | Applique une couleur de fond constante lorsque l'entité climate est allumée.                                    |
| `step` | number | Optionnel | N'importe quel nombre | Le pas de température. |
| `min_temp` | number | Optionnel | N'importe quel nombre | La température minimale. |
| `max_temp` | number | Optionnel | N'importe quel nombre | La température maximale. |
| `button_action` | object | Optionnel | `tap_action`, `double_tap_action` ou `hold_action`, voir [actions](#actions-dappui-double-appui-et-appui-long) | Permet de modifier les actions par défaut au clic sur le bouton. |
| `tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au clic sur l'icône, si non défini, `more-info` sera utilisé. |
| `double_tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au double clic sur l'icône, si non défini, `none` sera utilisé. |
| `hold_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action à l'appui long sur l'icône, si non défini, `more-info` sera utilisé. |                              |
| `main_buttons_position` | string | Optionnel | `default` ou `bottom` | Déplacer les boutons d'action du thermostat en bas (fixes) |
| `main_buttons_full_width` | boolean | Optionnel | `true` ou `false` | Affiche les boutons d'action du bas sur toute la largeur (par défaut : `true` lorsque la position est `bottom`) |
| `main_buttons_alignment` | string | Optionnel | `end` (par défaut), `center`, `start`, `space-between` | Alignement des boutons d'action du bas lorsqu'ils ne sont pas en pleine largeur |
| `card_layout` | string | Optionnel | `normal` (par défaut hors vue en sections), `large` (par défaut en vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |
| `sub_button`            | object  | Optionnel                           | Voir [sous-boutons](#sous-boutons)             | Ajouter des boutons personnalisés fixés à droite. Utile pour un menu de sélection du mode du thermostat.         |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Couleur de fond principale des éléments pris en charge dans la carte thermostat |
| `--bubble-climate-border-radius` | `px` | Arrondi des angles des éléments pris en charge dans la carte thermostat |
| `--bubble-climate-button-background-color` | `color` | Couleur de fond des boutons de la carte thermostat |
| `--bubble-climate-icon-border-radius` | `px` | Arrondi des angles du conteneur d'icône de la carte thermostat |
| `--bubble-state-climate-fan-only-color` | `color` | Couleur de superposition pour l'état fan-only |
| `--bubble-state-climate-dry-color` | `color` | Couleur de superposition pour l'état dry |
| `--bubble-state-climate-cool-color` | `color` | Couleur de superposition pour l'état cool |
| `--bubble-state-climate-heat-color` | `color` | Couleur de superposition pour l'état heat |
| `--bubble-state-climate-auto-color` | `color` | Couleur de superposition pour l'état auto |
| `--bubble-state-climate-heat-cool-color` | `color` | Couleur de superposition pour l'état heat-cool |
| `--bubble-climate-accent-color` | `color` | Couleur d'accentuation de la carte thermostat |
| `--bubble-climate-box-shadow` | Voir [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée du conteneur du thermostat. |

</details>


#### Exemples

<details>

<summary>Une carte thermostat avec un menu déroulant des modes CVC</summary>

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

## Calendrier

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Cette carte vous permet d'afficher vos entités calendrier. Son contenu est défilant, vous pouvez donc parcourir facilement les événements à venir.

### Options du calendrier

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom                 | Type    | Obligatoire  | Options possibles                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | Optionnel    | N'importe quel nombre (minimum : 1)            | Nombre de jours de calendrier pour lesquels récupérer les événements, de maintenant jusqu'à la fin du Nième jour (par défaut : 7) |
| `entities`          | object  | **Requis**   | Un objet d'entité calendrier (voir ci-dessous)  | L'entité à contrôler (ex. `calendar.main_calendar`).                                    |
| `entities.entity`   | string  | **Requis**   | Une entité calendrier                           | L'entité calendrier à afficher                                                          |
| `entities.color`    | string  | Optionnel    | Une couleur                                     | Une couleur personnalisée pour la chip du calendrier. Si elle n'est pas définie, une couleur automatique sera choisie |
| `days`              | number  | Optionnel    | N'importe quel nombre (minimum : 1)             | Nombre de jours de calendrier pour lesquels récupérer les événements, de maintenant jusqu'à la fin du Nième jour (par défaut : 7) |
| `limit`             | number  | Optionnel    | Un nombre                                       | Le nombre d'événements qui seront affichés sur la carte                                 |
| `show_end`          | boolean | Optionnel    | `true` ou `false` (par défaut)                  | Affiche ou masque l'heure de fin des événements                                         |
| `show_progress`     | boolean | Optionnel    | `true` (par défaut) ou `false`                  | Affiche ou masque la barre de progression de l'événement                                |
| `show_started_events`| boolean | Optionnel   | `true` (par défaut) ou `false`                  | Affiche ou masque les événements en cours. Les événements sur plusieurs jours sont jugés jour par jour, donc seul le jour en cours est masqué et les jours à venir restent visibles |
| `scrolling_effect`  | boolean | Optionnel | `true` (par défaut) ou `false` | Permet au texte de défiler lorsque le contenu dépasse la taille de son conteneur |
| `event_action` | object | Optionnel | `tap_action`, `double_tap_action` ou `hold_action`, voir [actions](#actions-dappui-double-appui-et-appui-long) | Permet d'ajouter des actions au clic sur un événement. |
| `tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au clic sur un jour, si non défini, `none` sera utilisé. |
| `double_tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au double clic sur un jour, si non défini, `none` sera utilisé. |
| `hold_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action lors d'un appui long sur un jour, si non défini, `none` sera utilisé. |
| `card_layout` | string | Optionnel | `normal` (par défaut hors vue en sections), `large` (par défaut en vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |
| `sub_button` | object | Optionnel | Voir [sous-boutons](#sous-boutons) | Ajouter des boutons personnalisés fixés à droite |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable                                  | Valeur attendue | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Couleur de fond principale des éléments pris en charge de la carte calendrier |
| `--bubble-calendar-border-radius`         | `px`           | Arrondi des angles des éléments pris en charge de la carte calendrier  |
| `--bubble-calendar-height`                | `px`           | Hauteur de la carte calendrier                                      |

</details>

#### Exemples

<details>

<summary>Une carte calendrier avec un nombre limité d'événements</summary>

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

<summary>Une carte calendrier avec une heure de fin et une barre de progression</summary>

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


## Séparateur

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Cette carte est un simple séparateur permettant de diviser votre pop-up en catégories / sections. Ex. Lumières, Appareils, Ouvrants, Paramètres, Automatisations...

### Options du séparateur

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `name` | string | Optionnel mais recommandé | N'importe quelle chaîne | Un nom pour votre séparateur |
| `icon` | string | Optionnel mais recommandé | N'importe quelle icône `mdi:` | Une icône pour votre séparateur |
| `card_layout` | string | Optionnel | `normal` (par défaut hors vue en sections), `large` (par défaut en vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |
| `sub_button` | object | Optionnel | Voir [sous-boutons](#sous-boutons) | Ajouter des boutons personnalisés fixés à droite |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Couleur de fond de la ligne du séparateur |

</details>

#### Exemple

<details>

<summary>Un séparateur pour une section « Ouvrants »</summary>

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

## Colonne vide

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Cette carte est là pour remplir une colonne vide. C'est utile si vous avez un `horizontal-stack` dans votre pop-up avec une seule carte. Regardez le coin inférieur droit de cette capture d'écran pour (ne pas) la voir.

### Options de la colonne vide

Cette carte n'a aucune option et ne prend pas en charge la [mise en forme](#mise-en-forme), mais elle prend en charge les options de disposition des sections HA.

#### Exemple

<details>

<summary>Une colonne vide dans une pile horizontale</summary>

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

## Sous-boutons uniquement

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Cette carte est dédiée uniquement aux sous-boutons. Elle est parfaite pour les menus, les actions rapides, les chips d'information ou un pied de page fixe en bas de la page.

> [!IMPORTANT]  
> Cette carte utilise le nouveau schéma des sous-boutons. Utilisez `sub_button.bottom` pour définir vos boutons. La section `sub_button.main` est ignorée.

### Options de la carte Sous-boutons uniquement

<details>

<summary><b>Options (YAML + descriptions)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Requis** | Voir [sous-boutons](#sous-boutons) | Définissez vos sous-boutons dans la section `bottom` |
| `hide_main_background` | boolean | Optionnel | `true` ou `false` (par défaut) | Supprime le fond de la carte |
| `footer_mode` | boolean | Optionnel | `true` ou `false` (par défaut) | Fixe la carte en bas de la page |
| `footer_full_width` | boolean | Optionnel | `true` ou `false` (par défaut) | Affiche le pied de page en pleine largeur (100 %) |
| `footer_width` | number | Optionnel | N'importe quel nombre | Largeur du pied de page en pixels quand `footer_full_width` est `false` |
| `footer_bottom_offset` | number | Optionnel | N'importe quel nombre | Distance depuis le bas de la page en pixels (par défaut : `16`) |
| `card_layout` | string | Optionnel | `normal` (par défaut hors d'une vue en sections), `large` (par défaut dans une vue en sections), `large-2-rows`, `large-sub-buttons-grid` | Disposition de la carte, voir [dispositions de carte](#dispositions-de-carte) |
| `rows` | number | Optionnel | N'importe quel nombre | Nombre de lignes (hauteur) (ex. `2`) |

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Largeur du pied de page quand `footer_full_width` est `false` |
| `--bubble-footer-bottom` | `px` | Décalage du pied de page par rapport au bas |
| `--bubble-footer-box-shadow` | voir [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Ombre portée du conteneur du pied de page |

</details>

#### Exemples

<details>

<summary>Des chips (comme sur la capture d'écran)</summary>

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

<summary>Un menu de pied de page fixe</summary>

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

## Sous-boutons

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Dans chaque carte qui prend en charge cette option, vous pouvez ajouter des sous-boutons pour personnaliser encore plus vos cartes. Vous pouvez par exemple créer un bouton capable de contrôler un aspirateur, une carte météo, ou à peu près tout ce qui vous passe par la tête. Ces sous-boutons prennent en charge les actions d'appui et la plupart des options du bouton.

Les sous-boutons prennent désormais en charge trois types : **Par défaut (bouton)**, **Curseur** et **Liste déroulante / Sélection**. Vous pouvez mélanger les types dans une même carte, placer les sous-boutons en haut ou en bas, et les organiser en groupes pour des dispositions plus avancées.

#### Placement et groupes de sous-boutons

<details>

<summary><b>Structure des sous-boutons (main / bottom + groupes)</b></summary>

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

**Notes :**
- `main` et `bottom` sont deux sections indépendantes. Les sous-boutons du bas sont fixés en bas de la carte.
- `main_layout` et `bottom_layout` acceptent `inline` (par défaut) ou `rows` pour empiler les groupes verticalement.
- Les groupes sont des objets composés d'un tableau `group` et d'un `buttons_layout` optionnel (`inline` ou `column`).
- `justify_content` n'est disponible que pour **les groupes du bas** (`start`, `center`, `end`, `fill`).
- En présence de sous-boutons en bas, la disposition de la carte passe automatiquement à `large`, sauf si vous en définissez explicitement une autre.
- Les anciens tableaux `sub_button` restent pris en charge et sont traités comme la section `main`.

</details>

### Options des sous-boutons

<details>

<summary><b>Options (YAML + description)</b></summary>

| Nom | Type | Nécessité | Options possibles | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | Optionnel | N'importe quelle entité | Une entité à contrôler |
| `name` | string | Optionnel | N'importe quelle chaîne | Un nom pour votre sous-bouton, s'il n'est pas défini le nom de l'entité sera affiché |
| `icon` | string | Optionnel | N'importe quelle icône `mdi:` | Une icône pour votre sous-bouton, si elle n'est pas définie l'icône ou l'image de l'entité sera affichée |
| `force_icon` | boolean | Optionnel | `true` ou `false` (par défaut) | Force l'icône même si une image d'entité est disponible |
| `sub_button_type` | string | Optionnel | `default`, `slider` ou `select` | Choisir le type de sous-bouton |
| `show_background` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher un fond pour votre sous-bouton, sa couleur changera en fonction de l'état de votre entité |
| `state_background` | boolean | Optionnel | `true` (par défaut) ou `false` | Utiliser la couleur d'état quand l'entité est sur `on` |
| `light_background` | boolean | Optionnel | `true` (par défaut) ou `false` | Utiliser la couleur de la lumière pour le fond quand elle est disponible |
| `show_state` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher ou masquer l'état de votre `entity` |
| `show_name` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher ou masquer le nom |
| `show_icon` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer l'icône |
| `show_last_changed` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher la heure du dernier changement de votre `entity` |
| `show_last_updated` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher la heure de la dernière mise à jour de votre `entity` |
| `show_attribute` | boolean | Optionnel | `true` ou `false` (par défaut) | Afficher un attribut de votre `entity` sous son `name` |
| `attribute` | string | Optionnel (requis si `show_attribute` est défini sur `true`) | Un attribut de votre `entity` | L'attribut à afficher (ex. `brightness`) |
| `select_attribute` | string | Optionnel | Une liste d'attributs de votre `entity` (voir les options possibles ci-dessus) | Cette liste d'attributs ouvrira une liste déroulante au clic (ex. `effect_list`) |
| `show_arrow` | boolean | Optionnel | `true` (par défaut) ou `false` | Afficher ou masquer la flèche de la liste déroulante des sous-boutons de sélection |
| `scrolling_effect` | boolean | Optionnel | `true` (par défaut) ou `false` | Autoriser le texte à défiler quand le contenu dépasse la taille du conteneur |
| `tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au clic sur le sous-bouton, si non défini, `more-info` sera utilisé. |
| `double_tap_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action au double clic sur le sous-bouton, si elle n'est pas définie, `none` sera utilisée. |
| `hold_action` | object | Optionnel | Voir [actions](#actions-dappui-double-appui-et-appui-long) | Définir le type d'action à l'appui long sur le sous-bouton, si non défini, `more-info` sera utilisé. |
| `fill_width` | boolean | Optionnel | `true` ou `false` | Remplir la largeur disponible (par défaut : `false` pour main, `true` pour bottom) |
| `width` | number ou string | Optionnel | N'importe quel nombre ou longueur CSS | Largeur personnalisée (`px` pour la section main, `%` pour la section bottom par défaut) |
| `custom_height` | number | Optionnel | N'importe quel nombre | Hauteur personnalisée en pixels |
| `content_layout` | string | Optionnel | `icon-left` (par défaut), `icon-top`, `icon-bottom`, `icon-right` | Placement de l'icône dans le sous-bouton |
| `always_visible` | boolean | Optionnel | `true` ou `false` (par défaut) | **Curseur uniquement.** Toujours afficher le curseur au lieu de l'ouvrir à l'appui |
| `show_button_info` | boolean | Optionnel | `true` ou `false` (par défaut) | **Curseur uniquement.** Afficher l'icône, le nom et l'état quand `always_visible` est activé |
| `visibility` | object ou list | Optionnel | Voir [conditions](#conditions) | Afficher ou masquer le sous-bouton selon des conditions |
| `hide_when_parent_unavailable` | boolean | Optionnel | `true` ou `false` (par défaut) | Masquer le sous-bouton si l'entité de la carte parente est indisponible |
| `css_class` | string | Optionnel | N'importe quelle chaîne | Une classe CSS supplémentaire sur le sous-bouton, pour le cibler dans votre [mise en forme](#mise-en-forme) quel que soit son nom (par exemple `My value` donne `.my-value`) |

</details>

<details>

<summary><b>Options des sous-boutons curseur (identiques aux curseurs de bouton)</b></summary>

<br>

Les sous-boutons curseur prennent en charge les mêmes options que les curseurs de bouton, notamment :
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variables CSS (voir <a href="#mise-en-forme">Mise en forme</a>)</b></summary>

| Variable | Valeur attendue | Description |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Arrondi des angles des sous-boutons |
| `--bubble-sub-button-background-color` | `color` | Couleur de fond des sous-boutons |
| `--bubble-sub-button-outline` | `box-shadow` | Contour ajouté à un sous-bouton ou à un curseur uniquement lorsqu'il se peint de la même couleur que la carte derrière lui, ce qui le rendrait invisible (mettez-le à `none` pour l'enlever) |
| `--bubble-sub-slider-border-radius` | `px` | Arrondi des angles des sous-boutons curseur |
| `--bubble-sub-slider-background-color` | `color` | Couleur de fond des sous-boutons curseur |
| `--bubble-sub-slider-height` | `px` | Hauteur des sous-boutons curseur toujours visibles |
| `--bubble-sub-slider-outline` | `box-shadow` | Contour des sous-boutons curseur uniquement, se rabat sur `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Couleur du texte sur les fonds clairs de sous-bouton |

</details>

#### Exemples

<details>

<summary>Un bouton avec des sous-boutons pour créer une carte aspirateur (comme sur la capture d'écran)</summary>

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

<summary>Un bouton curseur avec un sous-bouton qui affiche la luminosité et un autre qui bascule la lumière (comme sur la capture d'écran)</summary>

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

<summary>Un bouton qui affiche la température intérieure et extérieure avec la météo d'aujourd'hui et de demain (capture d'écran incluse)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Pas de chance pour moi, il fait nuageux en permanence, mais toutes les icônes changent bien en fonction de la météo.

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

## Dispositions de carte

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card prend entièrement en charge la vue en sections de Home Assistant, vous pouvez changer la disposition de la carte pour l'agrandir et modifier le nombre de colonnes ou de lignes qu'elle doit occuper dans votre vue en sections (uniquement sur les cartes qui prennent en charge cette option). Ces dispositions fonctionnent également dans tous les autres types de vue.

<details>

<summary><b>Dispositions de carte disponibles</b></summary>

| Disposition | Description |
| --- | --- |
| `normal` | La disposition standard (non optimisée pour la vue en sections) |
| `large` | Une disposition plus grande qui s'adapte au nombre de lignes sélectionné dans la vue en sections (optimisée pour la vue en sections) |
| `large-2-rows` | Une disposition plus grande avec 2 rangées de sous-boutons qui s'adapte au nombre de lignes sélectionné dans la vue en sections (optimisée pour la vue en sections) |
| `large-sub-buttons-grid` | Cette disposition affiche les sous-boutons dans une grille, `rows` doit être défini sur `2` au minimum.

</details>

#### Exemples

<details>

<summary>Un grand bouton qui affiche des statistiques d'énergie avec 2 rangées de sous-boutons (capture d'écran incluse)</summary>

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

<summary>Un grand bouton sur plusieurs rangées avec 12 sous-boutons</summary>

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

## Conditions

Certaines options fonctionnent avec des conditions, écrites exactement comme celles de la [carte conditionnelle](https://www.home-assistant.io/dashboards/conditional/) de Home Assistant :

- `visibility` sur un [sous-bouton](#sous-boutons), pour l'afficher ou le masquer
- `trigger` sur une [pop-up](#pop-up), pour l'ouvrir lorsque les conditions sont remplies
- `checkConditionsMet(conditions, hass)` dans vos [modèles](#modèles), quand vous avez besoin de la réponse dans votre propre code

Tous les types de condition de Home Assistant sont évalués : `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, ainsi que les groupes `and`, `or` et `not`. Les conditions du constructeur de conditions de Home Assistant fonctionnent aussi, celles qui portent le nom de leur domaine comme `sun.is_up`, `light.is_on`, `zone.in_zone` ou `temperature.is_value`, avec leurs réglages `target`, `options`, `behavior` et `for`.

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
> Les conditions sont évaluées dans votre navigateur, donc les quelques-unes qui ont besoin du serveur Home Assistant ne peuvent pas être exactes : le lever et le coucher du soleil sont lus depuis l'entité `sun.sun` au lieu d'être recalculés, et une durée `for` est mesurée depuis le dernier changement d'état, sans l'historique du recorder.
>
> `view_columns` est accepté mais passe toujours, puisque ce n'est jamais Bubble Card qui met en page les colonnes de votre vue. Un type de condition que Bubble Card ne connaît pas se signale une fois dans la console de votre navigateur au lieu d'échouer en silence, pour que vous puissiez distinguer une faute de frappe d'une fonctionnalité manquante.

<br>

---

<br>

## Actions d'appui, double appui et appui long

Vous pouvez aussi utiliser les actions d'appui, de double appui et d'appui long par défaut de Home Assistant sur les cartes qui prennent en charge cette option. Par exemple, cela vous permet d'afficher la fenêtre « Plus d'infos » en maintenant l'icône d'un bouton, ou d'appeler un service lorsqu'un sous-bouton est pressé.

**Note : lorsqu'une `double_tap_action` est configurée, la `tap_action` normale est retardée de 200 ms afin de permettre la détection
du double appui. Si ce délai vous gêne, définissez `double_tap_action` sur `none` pour désactiver la gestion du double appui.**

### Options des actions

<details>

<summary><b>Options (YAML + description)</b></summary>

| Nom | Type | Options possibles | Description |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Action à effectuer |
| `target` | object |  | Fonctionne uniquement avec `call-service`. Suit la [syntaxe de Home Assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | N'importe quel chemin de votre tableau de bord | Chemin vers lequel naviguer (ex. `'#kitchen'` pour ouvrir une pop-up) lorsque l'action est définie sur navigate |
| `url_path` | string | N'importe quel lien | URL à ouvrir au clic (ex. `https://www.google.com`) lorsque l'action est `url` |
| `service` | string | N'importe quel service | Service à appeler (ex. `media_player.media_play_pause`) lorsque `action` est défini sur `call-service` |
| `data` ou `service_data` | object | N'importe quelles données de service | Données de service à inclure (ex. `entity_id: media_player.kitchen`) lorsque `action` est défini sur `call-service` |
| `confirmation` | object | Voir [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Affiche une pop-up de confirmation (pas une pop-up Bubble Card), remplace l'objet `confirmation` par défaut |

</details>

#### Exemple

<details>

<summary>Un bouton pour ouvrir une pop-up</summary>

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

## Mise en forme

Vous pouvez ajouter des styles personnalisés pour modifier le CSS de toutes les cartes **sans utiliser card-mod**, de quatre façons :

- Dans l'éditeur, ouvrez la carte que vous souhaitez modifier, allez dans _Options de mise en forme > Styles personnalisés et modèles JS_, puis ajoutez vos styles personnalisés (voir les astuces et les exemples ci-dessous).
- Dans l'éditeur (ou en [YAML](#modules)), ouvrez la carte que vous souhaitez modifier, allez dans _Modules_, puis créez un nouveau module (il sera disponible pour toutes les cartes), ou rendez-vous dans le **Module Store** pour installer l'un des modules disponibles (plus de détails sur les modules [ci-dessous](#modules)).
- Dans un fichier de [thème](https://www.home-assistant.io/integrations/frontend/#defining-themes) en ajoutant des variables CSS en YAML (elles sont indiquées dans la documentation de chaque carte ci-dessus). Cela permet des modifications globales.

  <details>
  
  <summary>Exemple</a></summary>
  
  <br>

  Ne copiez pas la ligne `Bubble:`, c'est le nom du thème que vous utilisez. Vous devez aussi retirer les `--` des variables.

  Vous devez exécuter l'action [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) pour actualiser le thème après chaque modification.

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
  
- En YAML en ajoutant `styles: |` suivi de vos styles personnalisés (voir les astuces et les exemples ci-dessous).

> [!TIP]  
> **Pour savoir quelles classes de style peuvent être modifiées**, jetez un œil au dossier [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) de ce dépôt. Dans le dossier de chaque carte, vous trouverez un fichier nommé `styles.css`. Ces fichiers contiennent tous les styles appliqués. Cela offre beaucoup plus de possibilités que les variables CSS, mais il faut les ajouter individuellement à chaque carte.
> 
> Vous trouverez aussi de nombreux [exemples de la communauté](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ou d'autres sur le [forum Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) en cherchant un peu.
>
> Le thème Bubble pour Home Assistant (celui des captures d'écran) est disponible [ici](https://github.com/Clooos/Bubble).
>
> Un tutoriel vidéo arrive bientôt sur ma [chaîne YouTube](https://www.youtube.com/@cloooos) !

> [!IMPORTANT]  
> Notez que vous devrez peut-être ajouter `!important;` à certains styles CSS déjà définis (voir les exemples ci-dessous).

> [!TIP]  
> Les sous-boutons peuvent être ciblés par des classes basées sur leur nom. Par exemple, un sous-bouton nommé « My sub-button » peut être mis en forme avec `.my-sub-button`. Les sous-boutons de type curseur exposent également `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, etc.
>
> Une classe basée sur le nom change quand vous renommez un sous-bouton, et elle est traduite quand le nom l'est. Définissez `css_class` sur le sous-bouton pour obtenir une classe à vous qui ne bouge jamais, quel que soit son nom et quelle que soit la langue.

#### Exemples

<details>

<summary>Modifier la taille de police de n'importe quelle Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Modifier la couleur de fond d'un seul bouton dans une pile de boutons horizontale</summary>

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

<summary>Modifier la couleur de fond d'une carte</summary>

<br>

Celui-ci fonctionne sur tous les types de Bubble Card (sauf les pop-ups) :

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Celui-ci fait la même chose uniquement dans une carte bouton (il fonctionne pour l'en-tête de la pop-up) : 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Pour changer la couleur quand l'état est `on`, jetez un œil aux modèles de style ci-dessous.

</details>

<details>

<summary>Modifier la couleur du curseur d'un bouton</summary>

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

<summary>Modifier la couleur de la ligne d'un séparateur</summary>

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

<summary>Modifier la couleur d'une icône</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Pour une icône de pile de boutons horizontale.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Modifier la couleur de fond d'un conteneur d'icône</summary>

<br>

Celui-ci fonctionne sur tous les types de Bubble Card (sauf les pop-ups) :

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Celui-ci fait la même chose pour l'en-tête de la pop-up : 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Modifier la taille des sous-boutons (parfait pour la disposition large)</summary>

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

<summary>Modifier la couleur de fond du deuxième sous-bouton</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Modifier la taille d'une icône</summary>

<br>

Pour l'icône principale.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Pour les icônes des sous-boutons.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Utiliser une image plutôt qu'une icône dans un sous-bouton</summary>

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

Il vous suffit de déposer cette image dans un dossier « pictures » (ou le nom que vous voulez) placé dans le dossier « www » de Home Assistant.

</details>

<details>

<summary>Exemple avancé : créer une rangée horizontale de sous-boutons (capture d'écran incluse)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> J'adore celui-ci, je l'utilise comme en-tête sur mon tableau de bord.

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

## Modèles

**Bubble Card ne prend pas en charge les modèles Jinja**, mais les utilisateurs avancés peuvent ajouter des modèles en JS directement dans leurs [styles personnalisés](#mise-en-forme). Par exemple, cela vous permet de changer dynamiquement une icône, les textes ou les couleurs d'un élément, d'afficher ou de masquer un élément de façon conditionnelle (comme un sous-bouton), ou presque tout ce que vous voulez en fonction d'un état, d'un attribut et bien plus encore.

> [!TIP]  
> Plus d'informations sur les modèles JS [ici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Mon conseil est de **toujours jeter un œil à la console de votre navigateur** pour être sûr que tout fonctionne correctement.

> [!IMPORTANT]  
> **Tous les modèles qui ne modifient pas une propriété CSS doivent être placés à la fin ! Comme la modification d'une icône, d'un texte ou de n'importe quel élément.**

#### Variables et fonctions disponibles

<details>

<summary>Variables</summary>

<br>

Vous avez accès à ces variables dans la plupart des cartes :

- `state` renverra l'état de l'`entity` que vous avez définie.
  
- `entity` renverra l'entité que vous avez définie, comme `switch.test` dans cet exemple.
  
- `icon` peut être utilisée comme ceci pour changer l'icône `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` renverra l'état de l'`entity` définie pour votre premier sous-bouton, `[0]` est l'état du premier sous-bouton, `[1]` celui du deuxième...
  
- `subButtonIcon[0]` peut être utilisée comme ceci pour changer l'icône du premier sous-bouton `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` est l'icône du premier sous-bouton, `[1]` celle du deuxième...
  
- `card` renverra l'élément de la carte dans le DOM.
  
- `hass` est une variable avancée qui vous donne encore plus de contrôle, par exemple vous pouvez renvoyer l'état de `light.kitchen` comme ceci `hass.states['light.kitchen'].state` ou un attribut comme ceci `hass.states[entity].attributes.brightness`.

- `this` renverra énormément d'informations utiles sur votre installation et votre tableau de bord, à n'utiliser que si vous savez ce que vous faites.

</details>

<details>

<summary>Fonctions</summary>

<br>

Vous avez accès à toutes les fonctions JS globales, mais aussi à celles-ci :

- `getWeatherIcon` peut être utilisée pour renvoyer une icône météo à partir d'un état qui renvoie la météo. Par exemple, vous pouvez faire ceci `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` pour remplacer l'icône du troisième sous-bouton par l'icône météo du jour, `.forecast[1]?.condition` correspond à demain...

  Vous devrez créer un capteur template pour cela. Voici ce que vous pouvez ajouter dans votre `configuration.yaml` :
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
- `checkConditionsMet(conditions, hass)` renvoie `true` quand une liste de [conditions](#conditions) est remplie, par exemple `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` peut être utilisée pour traduire un état (elle sert aussi à récupérer l'unité d'un état, sans avoir à l'ajouter manuellement).
- `hass.formatEntityAttributeValue(state, "attribute")` peut être utilisée pour traduire un attribut (elle sert aussi à récupérer l'unité d'un état, sans avoir à l'ajouter manuellement).

</details>

#### Exemples

Vous trouverez de nombreux exemples ci-dessous, mais vous trouverez aussi des modèles très avancés sur ma [page Patreon](https://www.patreon.com/c/Clooos), comme celui (mon préféré) qui permet d'ajouter jusqu'à quatre badges conditionnels autour des icônes de la carte. C'est aussi un excellent moyen de découvrir toutes les possibilités des styles personnalisés et des modèles de Bubble Card !

<details>
<summary>Exemples issus de ma page Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Exemple 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Ajouter des badges façon Home Assistant à n'importe quelle carte</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Exemple 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Afficher une date et une heure formatées dans un séparateur sans utiliser la moindre entité</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Exemple 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Afficher l'état d'un sous-bouton sur deux lignes</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Exemple 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Personnaliser les libellés et les icônes dans un sous-bouton de sélection</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Exemple 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Ajouter une pop-up de rappel persistante qui ne s'affiche que lorsque c'est nécessaire</a>
</p>

<br>

</details>

<details>

<summary>Changer la couleur de fond d'un bouton, en rouge quand il est sur <code>off</code> et en bleu quand il est sur <code>on</code></summary>

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

<summary>Changer la couleur de fond d'un bouton en fonction d'une entité, pour la pile de boutons horizontale</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Afficher/Masquer un sous-bouton de façon conditionnelle</summary>

<br>

Celui-ci affiche le premier sous-bouton uniquement quand mon aspirateur est bloqué.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Celui-ci affiche un sous-bouton quand la batterie est en dessous de 10 %. Pratique avec un sous-bouton qui affiche « Batterie faible ».
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Changer une icône ou l'icône d'un sous-bouton de façon conditionnelle</summary>

<br>

Celui-ci change l'icône d'un bouton uniquement quand un aspirateur est bloqué.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Celui-ci change l'icône du premier sous-bouton uniquement quand un aspirateur est bloqué.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Changer la couleur d'une icône ou de l'icône d'un sous-bouton de façon conditionnelle</summary>

<br>

Celui-ci change la couleur de l'icône d'un bouton en fonction de son état.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Celui-ci change la couleur de l'icône d'un sous-bouton en fonction de son état. `.bubble-sub-button-1` correspond au premier sous-bouton, remplacez `1` si vous voulez changer l'icône d'un autre sous-bouton.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animer une icône de ventilateur de façon conditionnelle</summary>

<br>

Celui-ci fait tourner l'icône d'un bouton quand un ventilateur est sur `on`.
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

<summary>Utiliser des modèles pour les textes (comme le nom ou l'état)</summary>

<br>

Celui-ci remplace le nom/l'état d'un bouton par « It's currently sunny » en fonction de votre météo.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ou, appliqué aux sous-boutons :
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Si vous voulez utiliser un modèle pour l'état (`.bubble-state`), n'activez pas `show_state: true`, activez simplement `show_attribute: true` sans aucun attribut.

</details>

<details>

<summary>Exemple avancé : changer la couleur d'un sous-bouton quand une pop-up est ouverte</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Exemple avancé : utiliser un modèle pour le nom d'un séparateur à partir d'un état traduit dans votre langue</summary>

<br>

Vous pouvez utiliser `hass.formatEntityState(state)` pour traduire un état et `hass.formatEntityAttributeValue(state, "attribute")` pour traduire un attribut.

Celui-ci change le nom et l'icône en fonction de la météo, « Nuageux » est la traduction française de « Cloudy ».

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

## Modules

Les modules sont une fonctionnalité puissante qui vous permet d'enregistrer, de réutiliser et de partager vos styles personnalisés et vos modèles sur toutes vos Bubble Cards. Au lieu de copier/coller le même code dans plusieurs cartes, vous pouvez créer un module et l'appliquer partout où vous en avez besoin. Gérer l'apparence de votre tableau de bord devient ainsi bien plus simple et bien plus efficace.

Mais cette fonctionnalité va bien plus loin que ça : elle vous permet d'ajouter vous-même de véritables fonctionnalités dans l'éditeur de Bubble Card, avec toutes les options des [formulaires Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) !  
Le sélecteur d'objet a été amélioré pour afficher les changements en direct et prendre correctement en charge les attributs.

Un module peut aussi répondre au sélecteur de cartes de Home Assistant à côté des [suggestions d'entité](#suggestions-dentité) intégrées : utilisez `suggestions` pour les cartes qu'il peut décrire à l'avance, et `suggestions_code` quand elles doivent être calculées à partir de votre installation, par exemple une pop-up construite à partir de toutes les entités de la pièce à laquelle appartient l'entité choisie. Les deux clés sont documentées [ici](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Vous pouvez aussi parcourir le **Module Store** pour trouver et installer des [modules créés par la communauté](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ou partager vos propres créations !

> [!TIP]
> Le code d'un module fonctionne exactement comme celui de la section `styles` d'une carte. Toutes les variables et fonctions de la section [Modèles](#modèles) y sont disponibles.

<br>

### Configuration initiale

> [!IMPORTANT]
> Depuis la v3.1.0, Bubble Card Tools est le moyen de stockage recommandé pour les modules. L'ancienne méthode du capteur template fonctionne toujours pour les installations existantes, mais les nouveaux modules et les fonctionnalités du Module Store sont bien mieux pris en charge avec Bubble Card Tools.

L'intégration Bubble Card Tools active l'éditeur de modules et le Module Store, et enregistre les modules dans des fichiers YAML individuels. Les modules existants sont migrés automatiquement.

Les étapes d'installation et de configuration sont expliquées ici :

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### L'éditeur de modules

Vous pouvez accéder à l'éditeur de modules depuis les paramètres de n'importe quelle carte, dans la section **Modules**. L'éditeur propose deux onglets principaux :

#### Onglet Mes modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Cet onglet affiche tous vos modules installés et vous permet de :

- **Appliquer** des modules existants à la carte en cours
- **Créer** un nouveau module en partant de zéro
- **Modifier** des modules existants avec un aperçu en direct
- **Supprimer** les modules dont vous n'avez plus besoin
- **Rechercher** et **trier** vos modules (alphabétique, récents, actifs d'abord)
- **Définir un module comme global** pour qu'il s'applique automatiquement à toutes les cartes
- **Importer/Exporter** des modules pour les sauvegarder ou les partager
- **Écrire des suggestions d'entité** dans l'éditeur de module, sous **Optionnel : Suggestions d'entité**, pour que votre module soit proposé dans le sélecteur de cartes de Home Assistant. Les règles comme les suggestions calculées sont vérifiées au fur et à mesure que vous écrivez, une erreur empêche l'enregistrement, et l'aperçu montre les cartes suggérées pour l'entité de votre choix

#### Onglet Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Cet onglet affiche [tous les modules disponibles créés par la communauté](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), et vous permet de :

- **Parcourir** tous les modules créés par la communauté
- **Rechercher** et filtrer les modules par nom, compatibilité ou mots-clés
- **Installer** des modules en un clic
- **Mettre à jour** les modules installés quand de nouvelles versions sont disponibles

> [!TIP]
> Dans l'éditeur, vous pouvez activer les modules non pris en charge pour tester des modules qui ne sont pas encore marqués comme compatibles avec un type de carte donné.

<br>

### Comment utiliser les modules

#### Créer un nouveau module

<details>

<summary>Cliquez pour développer</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Ouvrez l'éditeur de n'importe quelle carte et développez la section **Modules**.
2. Cliquez sur **Créer un nouveau module**.
3. Renseignez les informations du module.
4. Écrivez votre code CSS et/ou votre modèle JavaScript dans l'éditeur **Code**.
5. (Facultatif) Créez une interface de configuration personnalisée dans la section **Schéma d'éditeur** (comme le sélecteur de couleur sur la capture ci-dessus, documentation complète disponible [ici](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Facultatif) Écrivez vos **Suggestions d'entité** pour que votre module soit proposé dans le sélecteur de cartes de Home Assistant. Le panneau vérifie ce que vous écrivez au fil de la frappe, et son aperçu montre les cartes suggérées elles-mêmes pour l'entité de votre choix.
7. Cliquez sur **Enregistrer**.

Votre module est maintenant utilisable sur n'importe laquelle de vos cartes !

<br>

</details>

#### Appliquer un module à une carte

<details>

<summary>Cliquez pour développer</summary>

<br>

- **Depuis l'éditeur :**

  - Ouvrez l'éditeur de la carte à laquelle vous voulez appliquer le module.
  - Développez la section **Modules**.
  - Cliquez sur le module à appliquer dans la liste.
  - Sous « Appliquer à », cliquez sur « Cette carte ». Le module est maintenant actif. Vous pouvez appliquer plusieurs modules à une même carte.

- **En YAML :**

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

#### Appliquer un module globalement

<details>

<summary>Cliquez pour développer</summary>

<br>

Vous pouvez faire en sorte qu'un module s'applique automatiquement à toutes les Bubble Cards :

**Ce n'est pas possible pour les modules dotés d'un éditeur, car ceux-ci nécessitent une configuration spécifique pour fonctionner.**

- **Depuis l'éditeur :**

  - Dans l'éditeur de modules, retrouvez votre module dans l'onglet **Mes modules**.
  - Activez le bouton **Toutes les cartes** à côté du nom du module.
  - Le module sera désormais appliqué automatiquement à toutes les cartes.
 
- **En YAML :**

  Dans la configuration YAML de votre module (dans `bubble-modules.yaml`), ajoutez simplement `is_global: true`.

<br>

</details>

#### Exclure une seule carte d'un module global

<details>

<summary>Cliquez pour développer</summary>

<br>

Si vous avez un module global mais que vous voulez l'exclure d'une carte en particulier :

- **Depuis l'éditeur :**
  
  - Dans la section **Modules** de la carte, les modules globaux sont listés.
  - Cliquez sur un module global, puis désactivez « Cette carte » pour l'exclure de cette carte précise.

- **En YAML :**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Partager votre module sur le Module Store

<details>

<summary>Cliquez pour développer</summary>

<br>

Pour partager votre module sur le Module Store, dans l'éditeur de modules, tout en bas dans « Exporter le module », cliquez sur « Copier pour GitHub » et collez le contenu dans une nouvelle discussion de la catégorie [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Modifiez la description** (si besoin), **l'exemple** (pour les utilisateurs de YAML), et pensez à **inclure au moins une capture d'écran** pour le Module Store.

**Votre module devient disponible juste après** (après une actualisation du Store), alors vérifiez bien que tout est correctement écrit et que le module fonctionne comme prévu. Vous pouvez bien sûr modifier ou mettre à jour votre module une fois qu'il est partagé.

<br>

</details>

#### Gestion des versions

<details>

<summary>Cliquez pour développer</summary>

<br>

Le Module Store vérifie automatiquement les mises à jour des modules installés. Quand des mises à jour sont disponibles :

1. Un indicateur de mise à jour apparaît dans l'onglet **Module Store**.
2. Cliquez sur **Mettre à jour** dans les modules concernés.
3. Confirmez la mise à jour dans le Module Store.

<br>

</details>

#### Définir les types de carte pris en charge

<details>

<summary>Cliquez pour développer</summary>

<br>

Certains modules ne sont pas forcément compatibles avec tous les types de carte. Vous pouvez indiquer quelles cartes un module prend en charge.  
Si vous voulez qu'un module soit compatible avec **toutes les cartes**, omettez simplement le champ `supported` (ou utilisez l'option **Toutes les cartes** dans l'éditeur).

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
<summary>Module de mise en forme basique</summary>

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
<summary>Module avec configuration personnalisée</summary>

<br>

Ce module est disponible [ici](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Vous trouverez d'autres exemples dans le Module Store, ou [ici](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Localisation

Bubble Card parle votre langue. Son éditeur est traduit dans les 64 langues prises en charge par Home Assistant, et partout où Home Assistant a déjà un mot pour quelque chose, c'est sa propre formulation qui est reprise, pour que vous lisiez les mêmes termes dans les deux interfaces.

En bas de l'éditeur, à côté du numéro de version, un interrupteur **Auto** suit la langue de votre Home Assistant. Désactivez-le et tout l'éditeur repasse en anglais, ce qui est pratique pour suivre un tutoriel ou pour signaler un problème. Votre choix est mémorisé dans votre navigateur.

Cette documentation est traduite elle aussi, [en 62 langues](languages.md). Ces pages sont ouvertes à tout le monde, donc une formulation qui ne correspond pas à votre propre Home Assistant peut être corrigée en quelques clics. La version anglaise reste la référence pour le contenu lui-même.

<br>

---

<br>

## Aide

N'hésitez pas à ouvrir une issue si quelque chose ne fonctionne pas comme prévu. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Vous avez des questions ou des idées à propos de Bubble Card ? Envie de partager vos tableaux de bord ou vos découvertes ? Rendez-vous sur le forum Home Assistant, sur le subreddit Bubble Card ou dans la section GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Contribuer

Les contributions sont les bienvenues ! Qu'il s'agisse de corrections de bugs, de nouvelles fonctionnalités, de traductions ou d'améliorations de la documentation, n'hésitez pas à ouvrir une pull request.

Avant de vous lancer, lisez le [guide du développeur](DEVELOPERS.md), qui explique comment préparer votre environnement local, compiler le projet et tester vos modifications.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Faire un don

Je consacre la majeure partie de mon temps libre à faire de ce projet le meilleur possible. Alors si vous appréciez mon travail, un don serait une très belle façon de me montrer votre soutien 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Merci à toutes et à tous pour votre soutien, vous êtes ma plus grande motivation !

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
