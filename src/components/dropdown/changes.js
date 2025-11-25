import { 
    getTranslatedAttribute, 
    getOptionIcon,
    getSelectedAttribute
  } from "./helpers.js";

export function changeDropdownList(context, elements = context.elements, entity = context.config.entity, config) {
    elements.currentState = context._hass.states[entity]?.state;
  
    if (!elements.currentState) return;
  
    elements.currentList = entity?.startsWith("input_select") || entity?.startsWith("select") ? context._hass.states[entity].attributes.options : context._hass.states[entity].attributes[config.select_attribute];
    elements.currentSelectedAttribute = getSelectedAttribute(context._hass.states[entity], config.select_attribute);
    
    // Compare lists by value (not by reference) to avoid unnecessary DOM rebuilds
    function listsEqual(a, b) {
      if (!Array.isArray(a) || !Array.isArray(b)) return false;
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
    
    // Only update if the list, state or selected attribute has changed (by value)
    const sameList = listsEqual(elements.previousList, elements.currentList);
    if (sameList &&
        elements.previousState === elements.currentState && 
        elements.previousSelectedAttribute === elements.currentSelectedAttribute) return;
  
    // Append options to the dropdown select element
    let options = elements.currentList;
    let state = elements.currentState;
  
    // If only the selected attribute changed and the list is identical, just toggle the selected item
    if (sameList && Array.isArray(elements.currentList)) {
      const items = elements.dropdownSelect.querySelectorAll('mwc-list-item');
      if (items && items.length === elements.currentList.length) {
        items.forEach((item) => {
          if (item.value === elements.currentSelectedAttribute) {
            item.setAttribute('selected', '');
          } else {
            item.removeAttribute('selected');
          }
        });
        elements.previousSelectedAttribute = elements.currentSelectedAttribute;
        elements.previousState = elements.currentState;
        return;
      }
    }

    // Clear the dropdown list when list changed or size mismatch
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
    
          if (option === elements.currentSelectedAttribute) {
              opt.setAttribute('selected', '');
          }
    
          elements.dropdownSelect.appendChild(opt);
      });
    } // End of Array.isArray check
    
    // Enregistrer les valeurs actuelles pour la comparaison future
    elements.previousList = Array.isArray(elements.currentList) ? elements.currentList.slice() : elements.currentList;
    elements.previousState = elements.currentState;
    elements.previousSelectedAttribute = elements.currentSelectedAttribute;
  
    if (!elements.dropdownSelect.isConnected) {
      elements.dropdownContainer.appendChild(elements.dropdownSelect);
    }
  }