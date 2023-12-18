// Définir une fonction qui crée et envoie un événement hass-action avec la configuration et l'action à effectuer
export function sendActionEvent(element, config, action) {
  const actionConfig = {
    entity: config.entity,
    tap_action: {
      action: "more-info"
    },
    double_tap_action: {
      action: "toggle"
    },
    hold_action: {
      action: "toggle"
    }
  };

  // Créer un événement de type hass-action avec les détails de la configuration et de l'action
  const event = new Event('hass-action', {
    bubbles: true,
    composed: true,
  });
  event.detail = {
    config: actionConfig,
    action: action,
  };
  // Envoyer l'événement au gestionnaire d'événements de Home Assistant avec la méthode dispatchEvent
  element.dispatchEvent(event);
}

// Définir une fonction qui ajoute des actions à un élément en fonction de la configuration
export function addActions(element, config, hass, forwardHaptic) {
  // Extraire les actions possibles de la configuration
  let tap_action = config.tap_action;
  let double_tap_action = config.double_tap_action;
  let hold_action = config.hold_action;

  // Définir des variables pour compter le nombre de clics et le temps écoulé entre les clics
  let clickCount = 0;
  let startTime = 0;
  let endTime = 0;

  // Définir une variable pour le timeout de l'action de maintien
  let holdTimeout;

  // Ajouter un écouteur d'événement pour le clic sur l'élément
  element.addEventListener('mousedown', () => {
    // Enregistrer le temps de départ au moment du clic
    startTime = Date.now();
    // Définir un timeout pour déclencher l'action de maintien après 300 ms
    holdTimeout = setTimeout(() => {
      // Envoyer l'événement de type hold
      sendActionEvent(element, config, 'hold');
    }, 300);
  });

  element.addEventListener('mouseup', () => {
    // Annuler le timeout de l'action de maintien
    clearTimeout(holdTimeout);
    // Enregistrer le temps de fin au moment où le bouton de la souris est relâché
    endTime = Date.now();

    // Si le temps écoulé entre le clic et le relâchement du bouton de la souris est inférieur à 300 ms, considérer comme un clic simple ou double
    if (endTime - startTime < 300) {
      clickCount++;
      if (clickCount === 1) {
        setTimeout(() => {
          if (clickCount === 1) {
            // Envoyer l'événement de type tap
            sendActionEvent(element, config, 'tap');
          } else {
            // Envoyer l'événement de type double_tap
            sendActionEvent(element, config, 'double_tap');
            forwardHaptic("success");
          }
          // Réinitialiser le compteur de clics
          clickCount = 0;
        }, 300);
      }
    }
    // Réinitialiser les temps de départ et de fin
    startTime = 0;
    endTime = 0;
  });

  // Ajouter un écouteur d'événement pour le toucher sur l'élément
  element.addEventListener('touchstart', (e) => {
    forwardHaptic("light");
    // Enregistrer le temps de départ au moment du toucher
    startTime = Date.now();
    // Définir un timeout pour déclencher l'action de maintien après 300 ms
    holdTimeout = setTimeout(() => {
      // Envoyer l'événement de type hold
      sendActionEvent(element, config, 'hold');
    }, 300);
    // Empêcher le comportement par défaut pour éviter un double événement
    e.preventDefault();
  });

  element.addEventListener('touchend', (e) => {
    // Annuler le timeout de l'action de maintien
    clearTimeout(holdTimeout);
    // Enregistrer le temps de fin au moment où le toucher est relâché
    endTime = Date.now();

    // Si le temps écoulé entre le toucher et le relâchement du toucher est inférieur à 300 ms, considérer comme un toucher simple ou double
    if (endTime - startTime < 300) {
      clickCount++;
      if (clickCount === 1) {
        setTimeout(() => {
          if (clickCount === 1) {
            // Envoyer l'événement de type tap
            sendActionEvent(element, config, 'tap');
          } else {
            // Envoyer l'événement de type double_tap
            sendActionEvent(element, config, 'double_tap');
          }
          // Réinitialiser le compteur de clics
          clickCount = 0;
        }, 300);
      }
    }
    // Réinitialiser les temps de départ et de fin
    startTime = 0;
    endTime = 0;
    // Empêcher le comportement par défaut pour éviter un double événement
    e.preventDefault();
  });

  // Ajouter des écouteurs d'événements pour annuler l'action de maintien si l'utilisateur arrête de toucher ou de cliquer sur l'élément
  element.addEventListener('mouseout', () => {
    clearTimeout(holdTimeout);
  });
  element.addEventListener('touchcancel', () => {
    clearTimeout(holdTimeout);
  });
}
