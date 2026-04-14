import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const isHashOnCurrentPage = jest.fn(() => false);

jest.unstable_mockModule('lit', () => ({
    html: jest.fn(),
}));

jest.unstable_mockModule('../../tools/utils.js', () => ({
    fireEvent: jest.fn(),
}));

jest.unstable_mockModule('../button/editor.js', () => ({
    renderButtonEditor: jest.fn(),
}));

jest.unstable_mockModule('./navigation-picker-bridge.js', () => ({
    isHashOnCurrentPage,
    registerPopUpHash: jest.fn(),
}));

jest.unstable_mockModule('./migration.js', () => ({
    renderLegacyMigrationNotice: jest.fn(),
}));

const {
    getPopUpHashInputState,
    normalizePopUpHashInputValue,
} = await import('./editor.js');

describe('pop-up editor hash input helpers', () => {
    beforeEach(() => {
        isHashOnCurrentPage.mockReset();
        isHashOnCurrentPage.mockReturnValue(false);
    });

    test('keeps a single non-removable hash prefix', () => {
        expect(normalizePopUpHashInputValue('')).toBe('#');
        expect(normalizePopUpHashInputValue('kitchen')).toBe('#kitchen');
        expect(normalizePopUpHashInputValue('##kitchen  ')).toBe('#kitchen');
    });

    test('treats the default prefix-only value as invalid', () => {
        const hashState = getPopUpHashInputState('#');

        expect(hashState).toEqual({
            normalizedValue: '#',
            isEmpty: true,
            isDuplicate: false,
            isValid: false,
        });
        expect(isHashOnCurrentPage).not.toHaveBeenCalled();
    });

    test('marks duplicate hashes as invalid after normalization', () => {
        isHashOnCurrentPage.mockReturnValue(true);

        const hashState = getPopUpHashInputState('kitchen', '#living-room');

        expect(isHashOnCurrentPage).toHaveBeenCalledWith('#kitchen', '#living-room');
        expect(hashState).toEqual({
            normalizedValue: '#kitchen',
            isEmpty: false,
            isDuplicate: true,
            isValid: false,
        });
    });

    test('accepts unique hashes once the placeholder has been replaced', () => {
        const hashState = getPopUpHashInputState('bedroom');

        expect(hashState).toEqual({
            normalizedValue: '#bedroom',
            isEmpty: false,
            isDuplicate: false,
            isValid: true,
        });
    });
});