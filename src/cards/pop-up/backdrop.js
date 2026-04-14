import { convertToRGBA } from "../../tools/style.js";
import { createElement, getCachedBodyStyles } from "../../tools/utils.js";
import { handleCustomStyles } from "../../tools/style-processor.js";
import backdropStyles from "./backdrop.css";

let backdrop;
let themeColorBackground = "";
const BACKDROP_TRANSITION_DURATION = 300;

export const backdropColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

export function updateThemeBackgroundColor() {
    const bodyStyles = getCachedBodyStyles();
    themeColorBackground =
        bodyStyles.getPropertyValue("--ha-card-background") ||
        bodyStyles.getPropertyValue("--card-background-color");

    document.body.style.setProperty(
        "--bubble-default-backdrop-background-color",
        convertToRGBA(themeColorBackground, 0.8, 0.6)
    );
}

backdropColorScheme.addEventListener("change", updateThemeBackgroundColor);
updateThemeBackgroundColor();

export function getThemeBackgroundColor() {
    return themeColorBackground;
}

export function releaseBackdropContext(context) {
    if (!backdrop) return;

    if (!context || backdrop.activeContext === context) {
        backdrop.activeContext = null;
    }

    backdrop.clearPendingBackdropContext?.(context);
}

export function getBackdrop(context) {
    if (backdrop) {
        return backdrop;
    }

    const backdropHostElement = createElement("div", "bubble-backdrop-host");
    const shadowRoot = backdropHostElement.attachShadow({ mode: "open" });

    const internalBackdropElement = createElement("div", "bubble-backdrop backdrop is-hidden");
    shadowRoot.appendChild(internalBackdropElement);

    const defaultStylesTag = createElement("style");
    defaultStylesTag.innerHTML = backdropStyles;
    shadowRoot.appendChild(defaultStylesTag);

    const backdropCustomStyle = createElement("style");
    backdropCustomStyle.dataset.bubbleTarget = "backdrop";
    shadowRoot.appendChild(backdropCustomStyle);

    document.body.appendChild(backdropHostElement);

    let backdropTransitionTimeout = null;
    let backdropHideTimeout = null;

    function clearBackdropHideTimeout() {
        if (!backdropHideTimeout) return;
        clearTimeout(backdropHideTimeout);
        backdropHideTimeout = null;
    }

    function markBackdropTransition(transitionState) {
        internalBackdropElement.classList.remove("is-opening", "is-closing");
        if (transitionState) {
            internalBackdropElement.classList.add(transitionState);
        }
        internalBackdropElement.classList.add("is-transitioning");

        if (backdropTransitionTimeout) {
            clearTimeout(backdropTransitionTimeout);
        }

        backdropTransitionTimeout = setTimeout(() => {
            internalBackdropElement.classList.remove("is-transitioning", "is-opening", "is-closing");
            backdropTransitionTimeout = null;
        }, BACKDROP_TRANSITION_DURATION);
    }

    function scheduleBackdropHide() {
        clearBackdropHideTimeout();

        backdropHideTimeout = setTimeout(() => {
            if (internalBackdropElement.classList.contains("is-hidden")) {
                backdropHostElement.style.display = "none";
                backdropHostElement.style.pointerEvents = "none";
            }
            backdropHideTimeout = null;
        }, BACKDROP_TRANSITION_DURATION);
    }

    function applyBackdropConfig(activeContext) {
        if (!activeContext?.config) return;

        const isBackdropHidden = activeContext.config.hide_backdrop ?? false;
        if (isBackdropHidden) {
            backdropHostElement.style.display = "none";
            backdropHostElement.style.pointerEvents = "none";
        } else {
            backdropHostElement.style.display = "";
            backdropHostElement.style.pointerEvents = "";
        }

        const backdropBlur = activeContext.config.backdrop_blur ?? 0;
        const hasBlur = parseFloat(backdropBlur) > 0;
        internalBackdropElement.classList.toggle("has-blur", hasBlur);

        if (hasBlur) {
            internalBackdropElement.style.setProperty("--custom-backdrop-filter", `blur(${backdropBlur}px)`);
        } else {
            internalBackdropElement.style.removeProperty("--custom-backdrop-filter");
        }
    }

    let backdropStylesUpdateScheduled = false;
    let pendingBackdropContext = null;

    function clearPendingBackdropContext(releasedContext) {
        if (!pendingBackdropContext) return;
        if (!releasedContext || pendingBackdropContext === releasedContext) {
            pendingBackdropContext = null;
        }
    }

    function scheduleBackdropStylesUpdate(styleContext, defer = true) {
        pendingBackdropContext = styleContext || pendingBackdropContext || backdrop?.activeContext;
        if (backdropStylesUpdateScheduled) return;

        backdropStylesUpdateScheduled = true;
        const run = () => {
            backdropStylesUpdateScheduled = false;
            const currentContext = pendingBackdropContext || backdrop?.activeContext;
            pendingBackdropContext = null;

            if (!currentContext) return;

            try {
                handleCustomStyles(currentContext, backdropCustomStyle);
            } catch (_) {}
        };

        if (!defer) {
            requestAnimationFrame(run);
            return;
        }

        try {
            if (typeof window.requestIdleCallback === "function") {
                window.requestIdleCallback(run, { timeout: 500 });
                return;
            }
        } catch (_) {}

        setTimeout(run, 350);
    }

    applyBackdropConfig(context);
    scheduleBackdropStylesUpdate(context, true);

    function showBackdrop(styleContext) {
        if (styleContext) {
            backdrop.activeContext = styleContext;
        }

        const activeContext = backdrop?.activeContext;
        const shouldAnimateOpen = internalBackdropElement.classList.contains("is-hidden");

        clearBackdropHideTimeout();
        backdropHostElement.style.display = "";

        if (activeContext) {
            applyBackdropConfig(activeContext);
            scheduleBackdropStylesUpdate(activeContext, false);
        }

        if (shouldAnimateOpen) {
            // Flush the hidden state once after un-hiding the host so the next class
            // toggle animates opacity instead of snapping to the visible end state.
            internalBackdropElement.getBoundingClientRect();
        }

        markBackdropTransition("is-opening");

        if (!internalBackdropElement.classList.contains("is-visible")) {
            internalBackdropElement.classList.add("is-visible");
        }
        internalBackdropElement.classList.remove("is-hidden");
    }

    function hideBackdrop() {
        markBackdropTransition("is-closing");

        if (!internalBackdropElement.classList.contains("is-hidden")) {
            internalBackdropElement.classList.add("is-hidden");
        }
        internalBackdropElement.classList.remove("is-visible");
        scheduleBackdropHide();
    }

    backdrop = {
        hideBackdrop,
        showBackdrop,
        backdropElement: internalBackdropElement,
        backdropCustomStyle,
        updateBackdropStyles: scheduleBackdropStylesUpdate,
        applyBackdropConfig,
        clearPendingBackdropContext,
        activeContext: context,
    };
    return backdrop;
}