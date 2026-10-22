import { beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./style.js', () => ({ isColorCloseToWhite: jest.fn(() => false) }));
jest.unstable_mockModule('../components/base-card/index.js', () => ({ updateContentContainerFixedClass: jest.fn(), syncMainButtonsBottomClass: jest.fn() }));
jest.unstable_mockModule('./icon.js', () => ({ getIconColor: jest.fn(() => 'var(--primary-color)') }));

// A document whose theme is nothing but the text colour Home Assistant writes.
function withThemeText(text) {
    const properties = { '--primary-text-color': text };
    const style = { length: 1, getPropertyValue: (name) => properties[name] || '' };
    globalThis.document = { documentElement: { style }, body: {} };
    globalThis.getComputedStyle = () => ({ getPropertyValue: (name) => properties[name] || '' });
}

let getSurfaceIconTone;
let relativeLuminance;
let contrastRatio;

async function load(text) {
    jest.resetModules();
    withThemeText(text);
    ({ getSurfaceIconTone } = await import('./utils.js'));
    ({ relativeLuminance, contrastRatio } = await import('./color.js'));
}

describe('WCAG contrast', () => {
    beforeEach(() => load('#e1e1e1'));

    test('goes from 1:1 to 21:1 between black and white', () => {
        expect(relativeLuminance(255, 255, 255)).toBeCloseTo(1, 5);
        expect(relativeLuminance(0, 0, 0)).toBe(0);
        expect(contrastRatio(1, 0)).toBeCloseTo(21, 5);
        expect(contrastRatio(0.3, 0.3)).toBe(1);
    });
});

describe('the icon tone on a surface, in a dark theme', () => {
    beforeEach(() => load('#e1e1e1'));

    // Painted by a dark theme at 0.84 of the lamp colour, 2200 K to 4000 K.
    // A threshold on luminance used to cut right through them.
    test('every white a bulb makes gets the dark icon', () => {
        ['rgb(214, 106, 0)', 'rgb(214, 123, 33)', 'rgb(214, 149, 92)', 'rgb(214, 162, 118)', 'rgb(214, 173, 139)', 'rgb(189, 189, 176)']
            .forEach((painted) => expect(getSurfaceIconTone(painted, {})).toEqual({ tone: 'dark', textIsLight: true }));
    });

    test('a light accent gets the dark icon it used to lack', () => {
        ['#ffeb3b', '#cddc39', '#e0e0e0', '#ffc107'].forEach((accent) => expect(getSurfaceIconTone(accent, {}).tone).toBe('dark'));
    });

    test('the default colour and deep colours keep the light text', () => {
        ['rgb(5, 107, 184)', '#9c27b0', 'rgb(0, 0, 214)', 'rgb(139, 0, 0)'].forEach((colour) => expect(getSurfaceIconTone(colour, {})).toEqual({ tone: 'light', textIsLight: true }));
    });

    test('decides nothing on a colour it cannot read', () => {
        expect(getSurfaceIconTone('not a colour', {})).toBeNull();
    });
});

describe('the icon tone on a surface, in a light theme', () => {
    beforeEach(() => load('#212121'));

    test('a navy, a violet or a deep red gets a light icon', () => {
        ['rgb(0, 0, 148)', '#9c27b0', 'rgb(161, 0, 0)', 'rgb(87, 0, 151)'].forEach((colour) => expect(getSurfaceIconTone(colour, {})).toEqual({ tone: 'light', textIsLight: false }));
    });

    test('a light colour keeps a dark icon', () => {
        ['#ffeb3b', 'rgb(248, 190, 128)', '#ff9800'].forEach((colour) => expect(getSurfaceIconTone(colour, {}).tone).toBe('dark'));
    });
});

// One surface laid over another of the same color has to step away from it,
// darker under a light text and lighter under a dark one.
describe('the step between two surfaces of the same color', () => {
    let getSurfaceStep;

    async function loadStep(text) {
        jest.resetModules();
        withThemeText(text);
        ({ getSurfaceStep } = await import('./utils.js'));
    }

    test('goes darker in a dark theme', async () => {
        await loadStep('#e1e1e1');
        expect(getSurfaceStep({}, 'rgb(17, 118, 200)', 'rgb(17, 118, 200)')).toBe('darker');
        expect(getSurfaceStep({}, 'rgb(17, 118, 200)', 'rgb(20, 120, 203)')).toBe('darker');
    });

    test('goes lighter in a light theme', async () => {
        await loadStep('#212121');
        expect(getSurfaceStep({}, 'rgb(17, 118, 200)', 'rgb(17, 118, 200)')).toBe('lighter');
    });

    test('asks for nothing when the colors differ or one is missing', async () => {
        await loadStep('#e1e1e1');
        expect(getSurfaceStep({}, 'rgb(17, 118, 200)', 'rgb(214, 115, 12)')).toBeNull();
        expect(getSurfaceStep({}, 'rgb(17, 118, 200)', '')).toBeNull();
        expect(getSurfaceStep({}, '', 'rgb(17, 118, 200)')).toBeNull();
    });
});
