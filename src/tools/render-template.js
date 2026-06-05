// Handle Jinja2 template rendering and notify subscribers when changes occur

// Cache to store the unsubscribe functions and current results
const templateCache = new Map();

// Cache to store active subscriptions per template string to avoid duplicate subscribeMessage calls
// Key: template string, Value: { result, unsubscribed }
const activeSubscriptions = new Map();

// Cooldown tracking for failed template subscriptions to prevent subscribe → error → re-subscribe loops
// Key: template string, Value: { failCount, cooldownUntil }
const subscriptionCooldowns = new Map();
const maxSubscriptionFailures = 3;
const subscriptionCooldownMs = 10000;

// Subscribers for template changes
const subscribers = new Set();
let pendingUpdate = false;

function getSubscriptionErrorMessage(error) {
    if (error instanceof Error) {
        const errorName = error.name || 'Error';
        return error.message ? `${errorName}: ${error.message}` : errorName;
    }

    if (error && typeof error === 'object') {
        const errorName = typeof error.name === 'string' ? error.name : '';
        const errorMessage = typeof error.message === 'string' ? error.message : '';
        const errorCode = error.code !== undefined ? String(error.code) : '';
        const details = errorMessage || errorCode;

        if (errorName || details) {
            return [errorName, details].filter(Boolean).join(': ');
        }

        try {
            return JSON.stringify(error);
        } catch (_) {
            return Object.prototype.toString.call(error);
        }
    }

    return String(error);
}

function isAbortSubscriptionError(error, message) {
    return error?.name === 'AbortError' || /AbortError|Transition was skipped/i.test(message);
}

function logTemplateSubscriptionError(error) {
    const message = getSubscriptionErrorMessage(error);
    const status = isAbortSubscriptionError(error, message) ? 'aborted' : 'failed';
    console.warn(`Bubble Card - Template subscription ${status}: ${message}`);
}

function notifySubscribers() {
    if (!pendingUpdate) {
        pendingUpdate = true;
        requestAnimationFrame(() => {
            pendingUpdate = false;
            for (const callback of subscribers) {
                try {
                    callback();
                } catch (e) {
                    console.error("Error in template change subscriber:", e);
                }
            }
        });
    }
}

export const onTemplateChange = (callback) => {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
};

export const subscribeRenderTemplate = (
    conn,
    onChange,
    params
) =>
    conn.subscribeMessage((msg) => onChange(msg), {
        type: "render_template",
        ...params,
    });

export const subscribePreviewTemplate = (
    hass,
    flow_id,
    flow_type,
    user_input,
    callback
) =>
    hass.connection.subscribeMessage(callback, {
        type: "template/start_preview",
        flow_id,
        flow_type,
        user_input,
    });

export function getRenderedTemplate(hass, template, variables = {}) {
    if (!hass?.connection || !template) return undefined;

    // Create a unique key for the template and its variables
    const key = JSON.stringify({ template, variables });

    // Check if we already have a subscription
    if (templateCache.has(key)) {
        const cached = templateCache.get(key);
        // Update the timestamp to know it's still used (for future cleanup if needed)
        cached.lastAccess = Date.now();
        return cached.result;
    }

    // Check if there's already an active subscription for this template string
    // to avoid duplicate subscribeMessage calls that trigger _handleMessage
    const activeSub = activeSubscriptions.get(template);
    if (activeSub && !activeSub.unsubscribed) {
        // Reuse existing subscription, just update the cache entry
        templateCache.set(key, {
            result: activeSub.result,
            unsubscribe: undefined,
            lastAccess: Date.now(),
        });
        return activeSub.result;
    }

    // Check cooldown — skip re-subscription if this template has failed recently
    const cooldown = subscriptionCooldowns.get(template);
    if (cooldown && cooldown.failCount >= maxSubscriptionFailures && Date.now() < cooldown.cooldownUntil) {
        const remaining = Math.ceil((cooldown.cooldownUntil - Date.now()) / 1000);
        console.warn(`Bubble Card - Template subscription on cooldown (${remaining}s remaining): ${template?.substring(0, 50)}...`);
        return cooldown.result; // Return last known result if available
    }

    // Initialize the cache entry
    templateCache.set(key, {
        result: undefined,
        unsubscribe: undefined,
        lastAccess: Date.now(),
    });

    // Subscribe to the template
    subscribeRenderTemplate(
        hass.connection,
        (response) => {
            // Update the active subscription's result (shared across all callers)
            if (!activeSubscriptions.has(template)) {
                activeSubscriptions.set(template, { result: undefined, unsubscribed: false });
            }
            const current = templateCache.get(key);
            if (!current) return;

            const previousResult = current.result;

            if (response.error) {
                console.error("Bubble Card - Template Error:", response.error);
                current.result = undefined;
                activeSubscriptions.get(template).result = undefined;
            } else {
                current.result = response.result;
                activeSubscriptions.get(template).result = response.result;
            }

            // Notify components when template result changes
            if (previousResult !== current.result) {
                notifySubscribers();
            }
        },
        {
            template,
            variables,
            strict: true,
        }
    ).then((unsub) => {
        const current = templateCache.get(key);
        if (current) {
            current.unsubscribe = unsub;
        } else {
            unsub();
        }
    }).catch((error) => {
        const current = templateCache.get(key);
        if (current && current.unsubscribe === undefined) {
            templateCache.delete(key);
        }

        const activeSub = activeSubscriptions.get(template);
        if (activeSub && activeSub.unsubscribed !== true) {
            activeSub.unsubscribed = true;
            activeSubscriptions.delete(template);
        }

        // Track failures and apply cooldown after N consecutive errors
        let cooldown = subscriptionCooldowns.get(template);
        if (!cooldown) {
            cooldown = { failCount: 0, cooldownUntil: 0 };
            subscriptionCooldowns.set(template, cooldown);
        }
        cooldown.failCount++;
        cooldown.result = current?.result; // Save last known result

        if (cooldown.failCount >= maxSubscriptionFailures) {
            cooldown.cooldownUntil = Date.now() + subscriptionCooldownMs;
            console.warn(`Bubble Card - Template subscription failed ${cooldown.failCount} times, applying ${subscriptionCooldownMs/1000}s cooldown: ${template?.substring(0, 80)}...`);
        } else {
            logTemplateSubscriptionError(error);
        }
    });

    // Return undefined for the first render
    return undefined;
}

