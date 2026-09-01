import { monotonicNow } from './monotonic-time.js';

// Home Assistant replaces the whole `hass` object whenever any entity in the
// installation changes, so every card is asked to render on every state change
// anywhere. Measured on an A10 iPad against the real dashboard: 43 renders a
// second at rest, and 78% of them with nothing the card depends on having moved.
//
// The dependency set is OBSERVED rather than declared or guessed from source
// text. Everything a template can learn about the installation arrives through
// its `hass` argument, so a proxy over that one argument sees all of it. What
// the card's own code reads is covered by the entities its config declares.
//
// Two earlier approaches were measured and dropped: a contract declared per
// module (works, but needs an API and only covers modules somebody updated) and
// a textual screen of template sources (blocked a module over a single
// `document.querySelector`, and changed no outcome at all when removed).

const canProxy = typeof Proxy === 'function';

// Everything outside `states` that the card's own code reads, compared by
// identity alongside the entity states. Home Assistant replaces each of these
// only when it really changes, so the comparison is cheap and exact. The
// registries are on the list because a card resolves names, icons and areas
// through them: leaving `entities` out let a person card go one render stale,
// which is how the list came to be checked against the source rather than
// guessed.
const HASS_KEYS = ['themes', 'locale', 'config', 'user', 'language', 'entities', 'devices', 'areas'];

// Renders that advance with the clock rather than with hass. No proxy can see
// that dependency: a media player's progress bar moves while its state object
// stays identical. These were the only false skips the shadow run ever found,
// which is why the list is exactly this and not a guess.
const CLOCK_DRIVEN_TYPES = new Set(['media-player', 'calendar']);
const CLOCK_DRIVEN_DOMAIN = 'timer.';

// A dependency set is a claim about code nobody here wrote, so no card is ever
// allowed to skip indefinitely: past this, it renders once whatever the gate
// thinks. It costs about one render per card per interval and bounds the damage
// of a dependency the proxy cannot see to that same interval.
const maxSkipMs = 10000;

function isTimerEntityId(entity) {
    return typeof entity === 'string' && entity.indexOf(CLOCK_DRIVEN_DOMAIN) === 0;
}

// Whether anything in this card renders from the clock. Walks the config once,
// on first use, and the answer is kept on the element.
export function isClockDriven(config) {
    if (!config) return true;
    if (CLOCK_DRIVEN_TYPES.has(config.card_type)) return true;
    if (config.show_last_changed || config.show_last_updated) return true;
    if (isTimerEntityId(config.entity)) return true;

    let found = false;
    const walk = (value, depth) => {
        if (found || depth > 6 || !value || typeof value !== 'object') return;
        if (Array.isArray(value)) {
            for (const item of value) walk(item, depth + 1);
            return;
        }
        if (value.show_last_changed || value.show_last_updated || isTimerEntityId(value.entity)) {
            found = true;
            return;
        }
        for (const key in value) {
            const child = value[key];
            if (child && typeof child === 'object') walk(child, depth + 1);
        }
    };
    walk(config.sub_button, 0);
    return found;
}

// Every entity the card names in its own config. The card's own code reads
// these directly, never through a template, so the proxy cannot see them.
export function collectDeclaredEntities(config) {
    const out = [];
    const push = (entity) => {
        if (typeof entity === 'string' && entity.indexOf('.') > 0 && out.indexOf(entity) === -1) {
            out.push(entity);
        }
    };
    const walk = (value, depth) => {
        if (depth > 6 || !value || typeof value !== 'object') return;
        if (Array.isArray(value)) {
            for (const item of value) walk(item, depth + 1);
            return;
        }
        push(value.entity);
        for (const key in value) {
            const child = value[key];
            if (child && typeof child === 'object') walk(child, depth + 1);
        }
    };
    if (config) {
        push(config.entity);
        walk(config.sub_button, 0);
    }
    return out;
}

function readsFor(context) {
    let reads = context._renderReads;
    if (!reads || reads.hass !== context._hass) {
        reads = context._renderReads = {
            hass: context._hass,
            ids: new Set(),
            keys: new Set(),
            all: false,
            proxy: null,
        };
    }
    return reads;
}

// The `hass` a template is handed. Reading an entity through it records that
// entity as a dependency; anything that enumerates the whole table records a
// dependency on everything, which disables the gate for that card.
export function trackedHass(context) {
    const hass = context?._hass;
    if (!hass || !canProxy) return hass;

    const reads = readsFor(context);
    if (reads.proxy) return reads.proxy;

    const states = hass.states || {};
    const statesProxy = new Proxy(states, {
        get(target, prop) {
            if (typeof prop === 'string') reads.ids.add(prop);
            return target[prop];
        },
        has(target, prop) {
            if (typeof prop === 'string') reads.ids.add(prop);
            return prop in target;
        },
        ownKeys(target) {
            reads.all = true;
            return Reflect.ownKeys(target);
        },
    });

    reads.proxy = new Proxy(hass, {
        get(target, prop) {
            if (prop === 'states') return statesProxy;
            if (typeof prop === 'string') reads.keys.add(prop);
            return target[prop];
        },
        ownKeys(target) {
            reads.all = true;
            return Reflect.ownKeys(target);
        },
    });
    return reads.proxy;
}

function gateFor(element) {
    let gate = element._renderGate;
    if (!gate || gate.config !== element.config) {
        gate = element._renderGate = {
            config: element.config,
            entities: collectDeclaredEntities(element.config),
            clockDriven: isClockDriven(element.config),
            snapshot: null,
            at: 0,
        };
    }
    return gate;
}

// True when this render cannot change anything the card shows. Every branch
// that is not certain answers false, so the gate only ever removes work it can
// account for.
export function shouldSkipRender(element) {
    if (!canProxy || !element?.config) return false;
    // The pop-up shell drives its own open sequence off this same path.
    if (element.config.card_type === 'pop-up') return false;
    if (element.editor || element.detectedEditor || element._preview) return false;

    const hass = element._hass;
    if (!hass || !hass.states) return false;

    const gate = gateFor(element);
    if (gate.clockDriven || !gate.snapshot) return false;
    if (monotonicNow() - gate.at > maxSkipMs) return false;

    // Absent reads mean the last render ran no template that could look at
    // hass: either the card has none, or they were all static. Both are cards
    // that depend on their declared entities and nothing else, which is the
    // safest case there is, so this must not be read as "unknown".
    const reads = element._renderReads;
    if (reads && reads.all) return false;

    const previous = gate.snapshot;
    for (const entity of gate.entities) {
        if (previous.states.get(entity) !== hass.states[entity]) return false;
    }
    if (reads) {
        for (const entity of reads.ids) {
            if (previous.states.get(entity) !== hass.states[entity]) return false;
        }
    }
    for (const key of previous.keys.keys()) {
        if (previous.keys.get(key) !== hass[key]) return false;
    }
    return true;
}

// Called after a render: records the exact inputs that render was built from,
// which is what the next tick is compared against.
export function noteRender(element) {
    if (!canProxy || !element?.config) return;
    const hass = element._hass;
    if (!hass || !hass.states) return;

    const gate = gateFor(element);
    const states = new Map();
    for (const entity of gate.entities) states.set(entity, hass.states[entity]);

    const reads = element._renderReads;
    if (reads) {
        for (const entity of reads.ids) states.set(entity, hass.states[entity]);
    }

    const keys = new Map();
    for (const key of HASS_KEYS) keys.set(key, hass[key]);
    if (reads) {
        for (const key of reads.keys) {
            if (key !== 'states') keys.set(key, hass[key]);
        }
    }

    gate.snapshot = { states, keys };
    gate.at = monotonicNow();
}

// A reconfigured card has a new dependency set and no valid snapshot.
export function resetRenderGate(element) {
    if (!element) return;
    element._renderGate = null;
    element._renderReads = null;
}
