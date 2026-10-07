import { describe, expect, test } from '@jest/globals';
import { effectiveButtonType, hasClassicHeader, hasFullHeightSheet, isHomeAssistantStyle } from './style.js';

const popUp = (extra) => ({ card_type: 'pop-up', hash: '#kitchen', ...extra });

describe('which look a pop-up wears', () => {
    test('only the Home Assistant style answers to itself', () => {
        expect(isHomeAssistantStyle(popUp({ popup_style: 'home-assistant' }))).toBe(true);
        expect(isHomeAssistantStyle(popUp({ popup_style: 'classic' }))).toBe(false);
        expect(isHomeAssistantStyle(popUp())).toBe(false);
    });

    test('both styles that copy the more info dialog answer to its header', () => {
        expect(hasClassicHeader(popUp({ popup_style: 'classic' }))).toBe(true);
        expect(hasClassicHeader(popUp({ popup_style: 'home-assistant' }))).toBe(true);
        expect(hasClassicHeader(popUp({ popup_style: 'bubble' }))).toBe(false);
        expect(hasClassicHeader(popUp())).toBe(false);
    });
});

// On a phone the more info dialog is a sheet of one height whatever it holds,
// and a pop-up copying it changed height with every card it gained or lost.
describe('the height of the sheet in the Home Assistant style', () => {
    test('is the height of the more info dialog when nothing asks otherwise', () => {
        expect(hasFullHeightSheet(popUp({ popup_style: 'home-assistant' }))).toBe(true);
        expect(hasFullHeightSheet(popUp({ popup_style: 'home-assistant', popup_mode: 'default' }))).toBe(true);
    });

    test('follows the content once the config asks for it', () => {
        expect(hasFullHeightSheet(popUp({ popup_style: 'home-assistant', popup_mode: 'adaptive-dialog' }))).toBe(false);
        // Left there from before the style was chosen, and it says the same thing.
        expect(hasFullHeightSheet(popUp({ popup_style: 'home-assistant', popup_mode: 'fit-content' }))).toBe(false);
    });

    // The style has no centred dialog of its own, so a mode left there from
    // another style is not a request for anything.
    test('ignores a mode the style does not have', () => {
        expect(hasFullHeightSheet(popUp({ popup_style: 'home-assistant', popup_mode: 'centered' }))).toBe(true);
    });

    test('is nothing the other styles answer to', () => {
        expect(hasFullHeightSheet(popUp())).toBe(false);
        expect(hasFullHeightSheet(popUp({ popup_mode: 'default' }))).toBe(false);
        expect(hasFullHeightSheet(popUp({ popup_style: 'classic' }))).toBe(false);
        expect(hasFullHeightSheet(popUp({ popup_style: 'bubble', popup_mode: 'adaptive-dialog' }))).toBe(false);
        expect(hasFullHeightSheet(undefined)).toBe(false);
    });
});

// The single answer the card and the editor both read. create.js forces the
// config to this value before it builds the header, and every editor field that
// depends on the button type asks here rather than reading the key.
describe('the button a card really draws', () => {
    test('a header copying the more info dialog is a switch, whatever the key says', () => {
        for (const style of ['classic', 'home-assistant']) {
            for (const stored of ['name', 'slider', 'state', 'switch', undefined]) {
                expect(effectiveButtonType(popUp({ popup_style: style, button_type: stored }))).toBe('switch');
            }
        }
    });

    test('every other card is its own key, untouched', () => {
        expect(effectiveButtonType(popUp({ popup_style: 'bubble', button_type: 'slider' }))).toBe('slider');
        expect(effectiveButtonType(popUp({ button_type: 'name' }))).toBe('name');
        expect(effectiveButtonType({ card_type: 'button', button_type: 'slider' })).toBe('slider');
        expect(effectiveButtonType({ card_type: 'climate', button_type: 'name' })).toBe('name');
    });

    // A pop-up style on a card that is not a pop-up says nothing about it.
    test('a button card is never read as a pop-up header', () => {
        expect(effectiveButtonType({ card_type: 'button', popup_style: 'home-assistant', button_type: 'slider' })).toBe('slider');
    });

    test('an unset key stays unset, the caller decides its default', () => {
        expect(effectiveButtonType({ card_type: 'button' })).toBeUndefined();
        expect(effectiveButtonType(undefined)).toBeUndefined();
    });
});
