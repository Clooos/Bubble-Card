import { 
    getTranslatedAttribute, 
    getOptionIcon,
    getSelectedAttribute
  } from "./helpers.js";

export function changeDropdownList(context, elements = context.elements, entity = context.config.entity, config) {
    elements.currentState = context._hass.states[entity]?.state;
  
    if (!elements.currentState) return;
  
    elements.currentList = entity?.startsWith("input_select") || entity?.startsWith("select") ? context._hass.states[entity].attributes.options : context._hass.states[entity].attributes[config.select_attribute];
  
    if (elements.previousList === elements.currentList && elements.previousState === elements.currentState) return;
  
    // Append options to the dropdown select element
    let options = elements.currentList;
    let state = elements.currentState;
  
    // Clear the dropdown list
    while (elements.dropdownSelect.firstChild) {
      elements.dropdownSelect.removeChild(elements.dropdownSelect.firstChild);
    }
  
    // Check if options is an array before iterating
    if (Array.isArray(options)) {
      options.forEach((option) => {
          const opt = document.createElement('mwc-list-item');
          opt.value = option;
    
          const icon = getOptionIcon(context, context._hass.states[entity], config.select_attribute, option);
          if (icon) {
            opt.graphic = 'icon';
            opt.appendChild(icon);
          }
    
          const translatedLabel = getTranslatedAttribute(
              context, context._hass.states[entity], 
              config.select_attribute, 
              option
          );
    
          opt.appendChild(document.createTextNode(translatedLabel));
    
          if (option === getSelectedAttribute(context._hass.states[entity], config.select_attribute)) {
              opt.setAttribute('selected', '');
          }
    
          elements.dropdownSelect.appendChild(opt);
          elements.previousList = elements.currentList;
          elements.previousState = elements.currentState;
      });
    } // End of Array.isArray check
  
    elements.dropdownContainer.appendChild(elements.dropdownSelect);
  }