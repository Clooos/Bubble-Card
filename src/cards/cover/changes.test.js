import { describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('../../tools/utils.js', () => ({
    getAttribute: jest.fn(),
    setLayout: jest.fn(),
    createElement: jest.fn(),
    isDocumentRTL: () => false,
}));
jest.unstable_mockModule('../../tools/icon.js', () => ({ getIcon: jest.fn() }));
jest.unstable_mockModule('../../tools/style-processor.js', () => ({ handleCustomStyles: jest.fn() }));

const { showsOpenIcon, isFullyOpen, isFullyClosed } = await import('./changes.js');

const cover = (state, attributes = {}) => ({ state, attributes });

// A cover held anywhere above the closed position reads as open in Home
// Assistant, so it must wear the open icon. Keying the icon off a 100% test
// made anything short of fully open look shut. #2586
describe('which icon a cover wears', () => {
    test('wears the open icon at a partial position', () => {
        expect(showsOpenIcon(cover('open', { current_position: 80 }))).toBe(true);
        expect(showsOpenIcon(cover('open', { current_position: 14 }))).toBe(true);
    });

    test('wears the open icon on the very first percent', () => {
        expect(showsOpenIcon(cover('open', { current_position: 1 }))).toBe(true);
    });

    test('wears the open icon when fully open', () => {
        expect(showsOpenIcon(cover('open', { current_position: 100 }))).toBe(true);
    });

    test('wears the closed icon only once fully closed', () => {
        expect(showsOpenIcon(cover('closed', { current_position: 0 }))).toBe(false);
    });

    // A cover reporting no position never had the bug, and must not gain one
    test('falls back to the state when there is no position', () => {
        expect(showsOpenIcon(cover('open'))).toBe(true);
        expect(showsOpenIcon(cover('closed'))).toBe(false);
    });

    // Moving covers report a position, so the icon follows where they are
    test('follows the position while the cover is moving', () => {
        expect(showsOpenIcon(cover('opening', { current_position: 30 }))).toBe(true);
        expect(showsOpenIcon(cover('closing', { current_position: 30 }))).toBe(true);
        expect(showsOpenIcon(cover('opening', { current_position: 0 }))).toBe(false);
    });

    // Claiming to be open about a position nobody knows would be worse than
    // staying shut, and it is what the card did before
    test('stays on the closed icon when the cover cannot be read', () => {
        expect(showsOpenIcon(cover('unavailable'))).toBe(false);
        expect(showsOpenIcon(cover('unknown'))).toBe(false);
        expect(showsOpenIcon(null)).toBe(false);
        expect(showsOpenIcon(undefined)).toBe(false);
    });

    // The two helpers stay what Home Assistant means by them: they drive the
    // open and close buttons, where 80% must still allow both
    test('leaves the fully open and fully closed tests alone', () => {
        const partial = cover('open', { current_position: 80 });
        expect(isFullyOpen(partial)).toBe(false);
        expect(isFullyClosed(partial)).toBe(false);
        expect(isFullyOpen(cover('open', { current_position: 100 }))).toBe(true);
        expect(isFullyClosed(cover('closed', { current_position: 0 }))).toBe(true);
    });
});
