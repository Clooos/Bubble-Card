// Monotonic clock for time budgets, holds and deadlines. Date.now() jumps
// with wall-clock adjustments (NTP sync when a device wakes up), which can
// blow a step budget wide open in a single task or freeze a hold for
// seconds. performance.now() cannot jump backwards.
export function monotonicNow() {
    return (typeof performance !== 'undefined' && typeof performance.now === 'function')
        ? performance.now()
        : Date.now();
}
