import { 
    getTranslatedAttribute, 
    getOptionIcon,
    getSelectedAttribute,
    isNewHaFrontend
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
  
    const newHa = isNewHaFrontend(context?._hass);
    // New HA uses ha-dropdown-item; old HA uses mwc-list-item
    const itemTag = newHa ? 'ha-dropdown-item' : 'mwc-list-item';
    let options = elements.currentList;
  
    // If only the selected attribute changed and the list is identical, just toggle the selected item
    if (sameList && Array.isArray(elements.currentList)) {
      const items = elements.dropdownSelect.querySelectorAll(itemTag);
      if (items && items.length === elements.currentList.length) {
        items.forEach((item) => {
          // Use data-bubble-value for reliable comparison (independent of webawesome internals)
          const itemValue = newHa ? item.dataset.bubbleValue : item.value;
          const isSelected = itemValue === elements.currentSelectedAttribute;
          if (isSelected) {
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
          const opt = document.createElement(itemTag);
          opt.value = option;
          if (newHa) {
            // Store value in a plain attribute for reliable comparison regardless of webawesome internals
            opt.dataset.bubbleValue = option;
          }
    
          const icon = getOptionIcon(context, context._hass.states[entity], config.select_attribute, option);
          if (icon) {
            if (newHa) {
              // New HA: ha-dropdown-item uses slot="icon"; no graphic property needed
              icon.slot = 'icon';
            } else {
              // Old HA: mwc-list-item uses slot="graphic" and requires graphic attribute
              opt.graphic = 'icon';
              icon.slot = 'graphic';
            }
            opt.appendChild(icon);
          }
    
          const translatedLabel = getTranslatedAttribute(
              context, context._hass.states[entity], 
              config.select_attribute, 
              option
          );
    
          opt.appendChild(document.createTextNode(translatedLabel));
    
          // Use setAttribute for synchronous attribute reflection (avoids async Lit update cycle)
          if (option === elements.currentSelectedAttribute) {
            opt.setAttribute('selected', '');
          }
    
          elements.dropdownSelect.appendChild(opt);
      });
    } // End of Array.isArray check
    
    // Store current values for future comparison
    elements.previousList = Array.isArray(elements.currentList) ? elements.currentList.slice() : elements.currentList;
    elements.previousState = elements.currentState;
    elements.previousSelectedAttribute = elements.currentSelectedAttribute;
  
    if (!elements.dropdownSelect.isConnected) {
      elements.dropdownContainer.appendChild(elements.dropdownSelect);
    }
  }