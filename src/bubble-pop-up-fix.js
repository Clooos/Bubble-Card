function hideElementsUntilBubbleCard() {
    const root = document.body || document.querySelector("body");

    if (!root) {
        return;
    }

    const loadingOverlay = document.createElement("div");
    loadingOverlay.setAttribute("role", "status");
    loadingOverlay.setAttribute("aria-live", "polite");
    loadingOverlay.setAttribute("aria-atomic", "true");
    loadingOverlay.textContent = "Loading Bubble Card…";
    loadingOverlay.style.position = "fixed";
    loadingOverlay.style.top = "16px";
    loadingOverlay.style.right = "16px";
    loadingOverlay.style.zIndex = "2147483647";
    loadingOverlay.style.padding = "8px 12px";
    loadingOverlay.style.borderRadius = "8px";
    loadingOverlay.style.backgroundColor = "rgba(17, 24, 39, 0.9)";
    loadingOverlay.style.color = "#fff";
    loadingOverlay.style.fontFamily = "DejaVu Sans,Verdana,Geneva,sans-serif";
    loadingOverlay.style.fontSize = "14px";

    root.setAttribute("aria-busy", "true");
    root.appendChild(loadingOverlay);

    const clearLoadingState = function() {
        if (loadingOverlay.parentNode) {
            loadingOverlay.parentNode.removeChild(loadingOverlay);
        }

        root.removeAttribute("aria-busy");
    };

    let bubbleCard = customElements.get("bubble-card");

    if (bubbleCard) {
        clearLoadingState();
        return;
    }

    const intervalId = setInterval(function() {
        bubbleCard = customElements.get("bubble-card");

        if (bubbleCard) {
            clearInterval(intervalId);
            clearLoadingState();
        }
    }, 50);

    setTimeout(function() {
        clearInterval(intervalId);
        clearLoadingState();
    }, 1500);
}

hideElementsUntilBubbleCard();

console.info(
    `%c Bubble Card %c Pop-up fix `,
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)'
);