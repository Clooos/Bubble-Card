import { addActions, addFeedback } from "../../tools/tap-actions.ts";
import { createElement, toggleEntity } from "../../tools/utils.ts";
import { getButtonType, onSliderChange } from "./helpers.ts";
import styles from "./styles.ts";

export function createStructure(context, cardContainer, container = context.elements) {
  const buttonType = getButtonType(context);

  context.dragging = false;

  container = {};
  container.buttonCardContainer = createElement('div', 'bubble-button-card-container button-container');
  container.buttonCard = createElement('div', 'bubble-button-card switch-button');
  container.nameContainer = createElement('div', 'bubble-name-container name-container');
  container.iconContainer = createElement('div', 'bubble-icon-container icon-container');
  container.name = createElement('div', 'bubble-name name');
  container.state = createElement('div', 'bubble-state state');
  container.feedback = createElement('div', 'bubble-feedback-element feedback-element');
  container.icon = createElement('ha-icon', 'bubble-icon icon');
  container.image = createElement('div', 'bubble-entity-picture entity-picture');
  container.style = createElement('style');
  container.customStyle = createElement('style');
  container.cardCustomStyle = createElement('style');

  container.feedback.style.display = 'none';
  container.style.innerText = styles;


  container.iconContainer.appendChild(container.icon);
  container.iconContainer.appendChild(container.image)

  container.nameContainer.appendChild(container.name);
  container.nameContainer.appendChild(container.state);
  container.buttonCard.appendChild(container.iconContainer);
  container.buttonCard.appendChild(container.nameContainer);
  container.buttonCard.appendChild(container.feedback);
  
  context.content.innerHTML = '';

  context.content.appendChild(container.buttonCardContainer);
  context.content.appendChild(container.style);
  context.content.appendChild(container.customStyle);

  container.buttonCardContainer.appendChild(container.buttonCard);

  if (cardContainer) {
      console.log("Append to card")
      cardContainer.appendChild(container.buttonCardContainer);
  }

  context.cardType = `button-${buttonType}`;
  context.elements = container; // Ajoutez cette ligne pour mettre à jour context.elements avec le nouveau container
}


// export function createStructure(context, container = context.elements) {
//   const buttonType = getButtonType(context);

//   context.dragging = false;

//   context.elements = {};
//   container.buttonCardContainer = createElement('div', 'bubble-button-card-container button-container');
//   container.buttonCard = createElement('div', 'bubble-button-card switch-button');
//   container.nameContainer = createElement('div', 'bubble-name-container name-container');
//   container.iconContainer = createElement('div', 'bubble-icon-container icon-container');
//   container.name = createElement('div', 'bubble-name name');
//   container.state = createElement('div', 'bubble-state state');
//   container.feedback = createElement('div', 'bubble-feedback-element feedback-element');
//   container.icon = createElement('ha-icon', 'bubble-icon icon');
//   container.image = createElement('div', 'bubble-entity-picture entity-picture');
//   container.style = createElement('style');
//   container.customStyle = createElement('style');
//   container.cardCustomStyle = createElement('style');

//   container.feedback.style.display = 'none';
//   container.style.innerText = styles;

//   container.iconContainer.appendChild(container.icon);
//   container.iconContainer.appendChild(container.image)

//   container.nameContainer.appendChild(container.name);
//   container.nameContainer.appendChild(container.state);
//   container.buttonCard.appendChild(container.iconContainer);
//   container.buttonCard.appendChild(container.nameContainer);
//   container.buttonCard.appendChild(container.feedback);
  
//   context.content.innerHTML = '';

//   context.content.appendChild(container.buttonCardContainer);
//   context.content.appendChild(container.style);
//   context.content.appendChild(container.customStyle);

//   container.buttonCardContainer.appendChild(container.buttonCard);

//   context.cardType = `button-${buttonType}`;
// }
export function createSwitchStructure(context, container = context.elements) {
  addActions(container.iconContainer, context.config);
  addFeedback(container.buttonCard, container.feedback);
  container.buttonCard.addEventListener('click', (event) => {
    if (event.target.closest('.bubble-icon-container') === null) {
      toggleEntity(context._hass, context.config.entity);
    }
  })
}
export function createCustomStructure(context, container = context.elements) {
  addActions(container.buttonCardContainer, context.config);
  addFeedback(container.buttonCard, container.feedback);
}
export function createStateStructure(context, container = context.elements) {
  addActions(container.buttonCardContainer, context.config);
  addFeedback(container.buttonCard, container.feedback);
}
export function createSliderStructure(context, container = context.elements) {
  addActions(container.iconContainer, context.config);

  let initialX = 0;

  container.rangeFill = createElement('div', 'bubble-range-fill range-fill');
  container.rangeSlider = createElement('div', 'bubble-range-slider range-slider');
  container.rangeSlider.appendChild(container.rangeFill);
  container.buttonCardContainer.appendChild(container.rangeSlider);

  container.buttonCardContainer.addEventListener('pointercancel', onPointerCancel);
  container.buttonCardContainer.addEventListener('pointerdown', (e) => {
      container.buttonCardContainer.setPointerCapture(e.pointerId);

      if (context.card.classList.contains('is-unavailable')) {
          return;
      }

      context.dragging = true;
      initialX = e.pageX || (e.touches ? e.touches[0].pageX : 0);

      container.buttonCardContainer.classList.add('is-dragging');
      container.buttonCardContainer.addEventListener('pointermove', onPointerMove);
      container.buttonCardContainer.addEventListener('pointerup', onPointerUp);
  });

  function onPointerCancel() {
    context.dragging = false;

    container.buttonCardContainer.classList.remove('is-dragging');
    container.buttonCardContainer.removeEventListener('pointermove', onPointerMove);
    container.buttonCardContainer.removeEventListener('pointerup', onPointerUp);
  }

  function onPointerMove(e) {
      e.stopPropagation();

      const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      if (Math.abs(initialX-moveX) > 10) {
        onSliderChange(context, moveX, true);
      }
  }
  function onPointerUp(e) {
      e.stopPropagation();

      context.dragging = false;

      const moveX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      onSliderChange(context, moveX);

      container.buttonCardContainer.classList.remove('is-dragging');
      container.buttonCardContainer.removeEventListener('pointermove', onPointerMove);
      container.buttonCardContainer.removeEventListener('pointerup', onPointerUp);
  }
}

export function handleButton(context, container = context.elements) {
  const buttonType = getButtonType(context, container);
  if (context.cardType !== `button-${buttonType}`) {
      createStructure(context, container);

      if (buttonType ==='switch') {
          createSwitchStructure(context, container);
      } else if (buttonType === 'slider') {
          createSliderStructure(context, container);
      } else if (buttonType ==='state') {
          createStateStructure(context, container);
      } else if (buttonType ==='custom') {
          createCustomStructure(context, container);
      }
  }
}
