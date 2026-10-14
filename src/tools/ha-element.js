// Home Assistant's Web Awesome elements (ha-dropdown-item, ha-button, ha-switch
// and others) record a state in their constructor. On a browser without custom
// element states (Safari before 17.4), Home Assistant's polyfill writes that
// state as an attribute, and an element that leaves its constructor with one is
// refused by document.createElement (#2663). It does not throw, it reports the
// error to the page and hands back an inert element, so the item never works and
// every new list reports again. Made by the parser instead, the element is
// upgraded on the spot, where attributes are allowed, and it comes out ready,
// properties included, on every browser. Home Assistant builds its own elements
// that way.

const templates = new Map();

export function createHaElement(tag) {
    let template = templates.get(tag);
    if (!template) {
        template = document.createElement('template');
        template.innerHTML = `<${tag}></${tag}>`;
        templates.set(tag, template);
    }
    return document.importNode(template.content, true).firstElementChild;
}
