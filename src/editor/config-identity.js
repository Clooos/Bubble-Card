// Home Assistant's editors know a part of a config by the object itself. Since
// 2026.10 each row of its conditions editor is keyed on its condition object,
// and a condition that comes back as a copy has its row built again. Plugins
// that wrap every card editor hand it a deep copy of the config on each change
// (UIX, layout-card), so nothing here may count on the object it gave away
// coming back. These helpers keep an unchanged part the same object.

const isPlain = (value) => {
    if (value === null || typeof value !== 'object') return false;
    if (Array.isArray(value)) return true;
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
};

// `next`, in which every part whose content equals the same part of `previous`
// is that part of `previous`. Returns `previous` itself when nothing differs,
// and `next` itself when it has nothing in common to take from `previous`, so
// an object Home Assistant has just reported stays the one it knows.
// Neither argument is written to, both may be frozen.
export function keepEqualParts(previous, next) {
    if (previous === next || !isPlain(previous) || !isPlain(next)) return next;
    if (Array.isArray(previous) !== Array.isArray(next)) return next;

    const isList = Array.isArray(next);
    const keys = isList ? next.map((_, index) => index) : Object.keys(next);
    let same = (isList ? previous.length : Object.keys(previous).length) === keys.length;
    let taken = false;
    const merged = isList ? [] : {};
    for (const key of keys) {
        const kept = keepEqualParts(previous[key], next[key]);
        if (kept !== previous[key] || !Object.prototype.hasOwnProperty.call(previous, key)) same = false;
        if (kept !== next[key]) taken = true;
        merged[key] = kept;
    }
    if (same) return previous;
    return taken ? merged : next;
}

// Home Assistant 2026.10 adds a user who is already ticked once more each time
// its editor of a user condition is built (#2657). A user listed twice means
// nothing, so the repeats are dropped, in the conditions nested in an and, an
// or or a not as well. Returns `conditions` itself when there is nothing to drop.
export function withoutRepeatedUsers(conditions) {
    if (!Array.isArray(conditions)) return conditions;
    let changed = false;
    const cleaned = conditions.map((condition) => {
        if (!isPlain(condition) || Array.isArray(condition)) return condition;
        let result = condition;
        if (condition.condition === 'user' && Array.isArray(condition.users)) {
            const users = [...new Set(condition.users)];
            if (users.length !== condition.users.length) result = { ...result, users };
        }
        if (Array.isArray(condition.conditions)) {
            const nested = withoutRepeatedUsers(condition.conditions);
            if (nested !== condition.conditions) result = { ...result, conditions: nested };
        }
        if (result !== condition) changed = true;
        return result;
    });
    return changed ? cleaned : conditions;
}

// What to keep once the conditions editor of Home Assistant reports a change.
// Returns `current` itself when the report changes nothing, which is how the
// user it adds on its own is told from one the person really ticked.
export function acceptConditions(current, reported) {
    return keepEqualParts(current, withoutRepeatedUsers(reported));
}
