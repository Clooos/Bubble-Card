// Initialize the content if it's not there yet.

export function initializeContent(context) {
    if (!context.content) {
        let shadow = context.shadowRoot || context.attachShadow({ mode: 'open' });
        let hostStyle = document.createElement("style");
        hostStyle.textContent = ":host{display:inline-block;width:100%;vertical-align:top;}";
        let card = document.createElement("ha-card");
        card.style.cssText = "background: none; border: none; box-shadow: none; border-radius: 16px;";
        let content = document.createElement("div");
        content.className = "card-content";
        content.style.padding = "0";
        card.appendChild(content);
        shadow.appendChild(hostStyle);
        shadow.appendChild(card);
        context.card = card;
        context.content = content;
    }
}
