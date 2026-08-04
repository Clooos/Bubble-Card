// The pop-up shell hosts its child cards in light DOM, but stack cards
// (vertical-stack, grid, ...) render THEIR children inside a shadow root:
// closest() alone would stop there and misclassify a nested bubble card as a
// dashboard card. Walk the composed tree upwards across shadow boundaries.
export function isInsidePopupShell(element) {
    let node = element;
    while (node) {
        if (typeof node.closest === 'function' && node.closest('.bubble-pop-up')) {
            return true;
        }

        const root = typeof node.getRootNode === 'function' ? node.getRootNode() : null;
        node = root && root !== node && root.host ? root.host : null;
    }
    return false;
}
