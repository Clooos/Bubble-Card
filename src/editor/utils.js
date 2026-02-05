import { html } from 'lit';

export function getLazyLoadedPanelContent(context, contentKey, isExpanded, renderContentCallback) {
  // Initialize storage for loaded flags if it doesn't exist on the context
  if (typeof context._lazyContentLoadedFlags === 'undefined') {
    context._lazyContentLoadedFlags = {};
  }

  // If the panel is expanded and its content hasn't been marked as "loaded" yet,
  // mark it as loaded. This flag persists even if the panel is collapsed later.
  if (isExpanded && !context._lazyContentLoadedFlags[contentKey]) {
    context._lazyContentLoadedFlags[contentKey] = true;
    // A re-render cycle that calls this function again with the updated flag
    // is expected to be triggered by the parent component after isExpanded changes.
  }

  // If the content has been marked as "loaded" (i.e., panel was expanded at least once),
  // then return the result of the content rendering callback.
  // The <ha-expansion-panel> itself will handle showing/hiding this rendered content
  // based on its current expanded state.
  if (context._lazyContentLoadedFlags[contentKey]) {
    return renderContentCallback();
  }

  // If the content hasn't been loaded yet (i.e., panel was never expanded),
  // return undefined (or html``) to render nothing.
  return undefined;
}

// Check if ha-dropdown is available (new HA versions)
export function supportsHaDropdown() {
    return typeof customElements !== 'undefined' &&
           customElements.get('ha-dropdown') !== undefined;
}

// Create a complete dropdown menu with items
export function renderDropdown({ trigger, items }) {
    const renderedItems = items.map(item => {
        if (item.type === 'divider') {
            return renderDropdownDivider();
        }
        return renderDropdownItem(item);
    });

    if (supportsHaDropdown()) {
        return html`
            <ha-dropdown>
                ${trigger}
                ${renderedItems}
            </ha-dropdown>
        `;
    } else {
        return html`
            <ha-button-menu corner="BOTTOM_START" menuCorner="START" fixed @closed=${(e) => e.stopPropagation()} @click=${(e) => e.stopPropagation()}>
                ${trigger}
                ${renderedItems}
            </ha-button-menu>
        `;
    }
}

// Create dropdown item with backward compatibility
function renderDropdownItem({ icon, label, disabled = false, onClick, variant = null, type = 'item', checked = false }) {
    if (supportsHaDropdown()) {
        return html`
            <ha-dropdown-item 
                ?disabled=${disabled} 
                @click=${onClick} 
                variant=${variant || ''}
                type=${type === 'checkbox' ? 'checkbox' : ''}
                ?checked=${type === 'checkbox' ? checked : false}
            >
                ${icon ? html`<ha-icon icon="${icon}" slot="icon"></ha-icon>` : ''}
                ${label}
            </ha-dropdown-item>
        `;
    } else {
        return html`
            <mwc-list-item 
                graphic="icon" 
                ?disabled=${disabled} 
                @click=${onClick} 
                class=${variant === 'danger' ? 'warning' : ''}
                ?selected=${type === 'checkbox' ? checked : false}
            >
                ${icon ? html`<ha-icon icon="${icon}" slot="graphic"></ha-icon>` : ''}
                ${label}
            </mwc-list-item>
        `;
    }
}

// Create divider with backward compatibility
function renderDropdownDivider() {
    if (supportsHaDropdown()) {
        return html`<wa-divider role="separator" aria-orientation="horizontal" orientation="horizontal"></wa-divider>`;
    } else {
        return html`<li divider role="separator"></li>`;
    }
} 