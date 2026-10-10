import { createElement, forwardHaptic } from "../../tools/utils.js";

const MAX_DIGITS = 16;
const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'back', '0', 'submit'];

// The code being typed, apart from anything that draws it. It lives in this
// closure for as long as the keypad is shown and nowhere else.
export function createCodeEntry({ onChange, onSubmit, onBack, maxLength = MAX_DIGITS } = {}) {
    let code = '';
    const changed = () => onChange?.(code.length);

    return {
        get length() {
            return code.length;
        },
        press(digit) {
            if (!/^[0-9]$/.test(digit) || code.length >= maxLength) return;
            code += digit;
            changed();
        },
        // One step back. The last digit goes, and with nothing typed the keypad
        // itself does.
        back() {
            if (!code) {
                onBack?.();
                return;
            }
            code = code.slice(0, -1);
            changed();
        },
        submit() {
            if (code) onSubmit?.(code);
        },
        clear() {
            if (!code) return;
            code = '';
            changed();
        },
    };
}

// Twelve round keys and a row of dots, drawn inside the menu of a dropdown in
// place of its options. Home Assistant asks for an alarm code in a dialog of
// its own (dialog-enter-code.ts), this keeps the whole gesture in the menu.
export function createCodeKeypad({ hass, submitLabel, onSubmit, onBack } = {}) {
    const element = createElement('div', 'bubble-keypad is-empty');
    const codeLabel = hass?.localize?.('ui.card.alarm_control_panel.code') || 'Code';
    element.setAttribute('role', 'group');
    element.setAttribute('aria-label', codeLabel);
    element.tabIndex = -1;

    const display = createElement('div', 'bubble-keypad-code');
    display.textContent = codeLabel;
    element.appendChild(display);

    const entry = createCodeEntry({
        onSubmit,
        onBack,
        onChange: (length) => {
            element.classList.toggle('is-empty', length === 0);
            display.classList.remove('is-wrong');
            display.textContent = length === 0 ? codeLabel : '';
            for (let i = 0; i < length; i++) {
                display.appendChild(createElement('span', 'bubble-keypad-dot'));
            }
        },
    });

    for (const key of KEYS) {
        const button = createElement('button', 'bubble-keypad-key');
        button.type = 'button';
        button.dataset.key = key;
        if (key === 'back' || key === 'submit') {
            const icon = createElement('ha-icon');
            icon.setAttribute('icon', key === 'back' ? 'mdi:arrow-left' : 'mdi:check');
            button.appendChild(icon);
            button.classList.add(`bubble-keypad-${key}`);
            button.setAttribute('aria-label', key === 'back'
                ? (hass?.localize?.('ui.common.back') || 'Back')
                : (submitLabel || hass?.localize?.('ui.common.submit') || 'Submit'));
        } else {
            button.textContent = key;
        }
        element.appendChild(button);
    }

    const act = (key) => {
        if (key === 'back') entry.back();
        else if (key === 'submit') entry.submit();
        else entry.press(key);
    };

    element.addEventListener('click', (event) => {
        // The card under the menu has nothing to do with a key being pressed.
        event.stopPropagation();
        const key = event.target.closest?.('.bubble-keypad-key')?.dataset.key;
        if (!key) return;
        forwardHaptic('selection');
        act(key);
    });

    // A code can be typed on a real keyboard too. The menu reads keys for its
    // own options, so the ones used here stop at the keypad.
    element.addEventListener('keydown', (event) => {
        let key = null;
        if (/^[0-9]$/.test(event.key)) key = event.key;
        else if (event.key === 'Backspace') key = 'back';
        else if (event.key === 'Enter') key = 'submit';
        if (!key) return;
        event.preventDefault();
        event.stopPropagation();
        act(key);
    });

    return {
        element,
        focus() {
            element.focus?.({ preventScroll: true });
        },
        // Home Assistant refused the code. Shake the dots, then start again.
        reject() {
            display.classList.add('is-wrong');
            forwardHaptic('failure');
            setTimeout(() => entry.clear(), 400);
        },
    };
}
