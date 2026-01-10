// Handle Jinja2 template rendering and notify subscribers when changes occur

// Cache to store the unsubscribe functions and current results
const templateCache = new Map();

// Subscribers for template changes
const subscribers = new Set();
let pendingUpdate = false;

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
            const current = templateCache.get(key);
            if (!current) return;

            const previousResult = current.result;

            if (response.error) {
                console.error("Bubble Card - Template Error:", response.error);
                current.result = undefined;
            } else {
                current.result = response.result;
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
    });

    // Return undefined for the first render
    return undefined;
}

