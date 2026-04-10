import { describe, test, expect } from '@jest/globals';
import {
    createStandalonePopUpConfig,
    findLegacyPopUpStack,
    hasLegacyHorizontalStacks,
    isLegacyPopUpConfig,
    migrateLegacyPopUpLovelaceConfig,
    replaceConfigAtPath,
} from './migration.js';

const legacyPopupConfig = {
    type: 'custom:bubble-card',
    card_type: 'pop-up',
    hash: '#kitchen',
    name: 'Kitchen',
    icon: 'mdi:fridge-outline',
    entity: 'light.kitchen',
};

const buttonCard = {
    type: 'custom:bubble-card',
    card_type: 'button',
    button_type: 'switch',
    entity: 'light.kitchen',
};

const widthConfiguredButtonCard = {
    ...buttonCard,
    columns: 2,
    grid_options: {
        columns: 9,
        max_columns: 10,
        min_columns: 6,
        rows: 1.5,
    },
    layout_options: {
        grid_columns: 3,
        grid_max_columns: 4,
        grid_min_columns: 2,
        grid_rows: 2,
    },
};

const separatorCard = {
    type: 'custom:bubble-card',
    card_type: 'separator',
    name: 'Lights',
};

const horizontalStackCard = {
    type: 'horizontal-stack',
    cards: [
        {
            type: 'custom:bubble-card',
            card_type: 'button',
            button_type: 'name',
            name: 'Left',
            columns: 2,
        },
        {
            type: 'custom:bubble-card',
            card_type: 'button',
            button_type: 'name',
            name: 'Right',
            grid_options: { rows: 1.4, columns: 8, min_columns: 4 },
            layout_options: { grid_columns: 2, grid_rows: 3 },
        },
    ],
};

describe('isLegacyPopUpConfig', () => {
    test('detects legacy pop-up configs without standalone cards', () => {
        expect(isLegacyPopUpConfig(legacyPopupConfig)).toBe(true);
    });

    test('ignores standalone pop-up configs', () => {
        expect(isLegacyPopUpConfig({ ...legacyPopupConfig, cards: [] })).toBe(false);
    });
});

describe('createStandalonePopUpConfig', () => {
    test('copies the legacy config and injects standalone cards', () => {
        const standaloneConfig = createStandalonePopUpConfig(legacyPopupConfig, [buttonCard]);

        expect(standaloneConfig).toEqual({
            ...legacyPopupConfig,
            cards: [buttonCard],
        });
        expect(standaloneConfig).not.toBe(legacyPopupConfig);
        expect(standaloneConfig.cards[0]).not.toBe(buttonCard);
    });

    test('removes inherited width and layout settings from migrated popup cards', () => {
        const standaloneConfig = createStandalonePopUpConfig(legacyPopupConfig, [widthConfiguredButtonCard]);

        expect(standaloneConfig.cards).toEqual([
            {
                ...buttonCard,
                grid_options: { rows: 1.5 },
            },
        ]);
    });
});

describe('findLegacyPopUpStack', () => {
    test('finds a legacy pop-up wrapped in a vertical-stack on a regular view', () => {
        const lovelaceConfig = {
            views: [
                {
                    title: 'Main',
                    cards: [
                        {
                            type: 'vertical-stack',
                            cards: [legacyPopupConfig, buttonCard, separatorCard],
                        },
                    ],
                },
            ],
        };

        const result = findLegacyPopUpStack(lovelaceConfig, legacyPopupConfig);

        expect(result).toMatchObject({
            stackPath: ['views', 0, 'cards', 0],
            popupIndex: 0,
            contentCards: [buttonCard, separatorCard],
        });
        expect(result.standaloneConfig).toEqual({
            ...legacyPopupConfig,
            cards: [buttonCard, separatorCard],
        });
    });

    test('finds a legacy pop-up inside sections view cards', () => {
        const lovelaceConfig = {
            views: [
                {
                    type: 'sections',
                    sections: [
                        {
                            cards: [
                                {
                                    type: 'vertical-stack',
                                    cards: [legacyPopupConfig, buttonCard],
                                },
                            ],
                        },
                    ],
                },
            ],
        };

        const result = findLegacyPopUpStack(lovelaceConfig, legacyPopupConfig);

        expect(result).toMatchObject({
            stackPath: ['views', 0, 'sections', 0, 'cards', 0],
            popupIndex: 0,
            contentCards: [buttonCard],
        });
    });
});

describe('hasLegacyHorizontalStacks', () => {
    test('detects migratable horizontal stacks in legacy popup content', () => {
        expect(hasLegacyHorizontalStacks([separatorCard, horizontalStackCard])).toBe(true);
        expect(hasLegacyHorizontalStacks([separatorCard, buttonCard])).toBe(false);
    });
});

describe('replaceConfigAtPath', () => {
    test('replaces a nested card config without mutating the original object', () => {
        const lovelaceConfig = {
            views: [
                {
                    cards: [
                        {
                            type: 'vertical-stack',
                            cards: [legacyPopupConfig],
                        },
                    ],
                },
            ],
        };

        const replacement = { ...legacyPopupConfig, cards: [buttonCard] };
        const updatedConfig = replaceConfigAtPath(lovelaceConfig, ['views', 0, 'cards', 0], replacement);

        expect(updatedConfig.views[0].cards[0]).toEqual(replacement);
        expect(lovelaceConfig.views[0].cards[0]).toEqual({
            type: 'vertical-stack',
            cards: [legacyPopupConfig],
        });
    });
});

describe('migrateLegacyPopUpLovelaceConfig', () => {
    test('replaces the wrapping vertical-stack with a standalone pop-up', () => {
        const lovelaceConfig = {
            views: [
                {
                    cards: [
                        {
                            type: 'vertical-stack',
                            cards: [legacyPopupConfig, buttonCard, separatorCard],
                        },
                    ],
                },
            ],
        };

        const result = migrateLegacyPopUpLovelaceConfig(lovelaceConfig, legacyPopupConfig);

        expect(result.popupPath).toEqual(['views', 0, 'cards', 0]);
        expect(result.popupConfig).toEqual({
            ...legacyPopupConfig,
            cards: [buttonCard, separatorCard],
        });
        expect(result.config.views[0].cards[0]).toEqual(result.popupConfig);
    });

    test('keeps the current popup config while matching the original hash in Lovelace', () => {
        const lovelaceConfig = {
            views: [
                {
                    cards: [
                        {
                            type: 'vertical-stack',
                            cards: [legacyPopupConfig, buttonCard],
                        },
                    ],
                },
            ],
        };

        const editedPopupConfig = {
            ...legacyPopupConfig,
            hash: '#renamed-kitchen',
            show_header: false,
        };

        const result = migrateLegacyPopUpLovelaceConfig(lovelaceConfig, editedPopupConfig, {
            matchHash: legacyPopupConfig.hash,
        });

        expect(result.popupConfig).toEqual({
            ...editedPopupConfig,
            cards: [buttonCard],
        });
    });

    test('returns null when the pop-up is already standalone', () => {
        const lovelaceConfig = {
            views: [
                {
                    cards: [{ ...legacyPopupConfig, cards: [buttonCard] }],
                },
            ],
        };

        const result = migrateLegacyPopUpLovelaceConfig(lovelaceConfig, { ...legacyPopupConfig, cards: [buttonCard] });

        expect(result).toBeNull();
    });

    test('can flatten horizontal stacks into grid cards with matching columns', () => {
        const lovelaceConfig = {
            views: [
                {
                    cards: [
                        {
                            type: 'vertical-stack',
                            cards: [legacyPopupConfig, separatorCard, horizontalStackCard],
                        },
                    ],
                },
            ],
        };

        const result = migrateLegacyPopUpLovelaceConfig(lovelaceConfig, legacyPopupConfig, {
            convertHorizontalStacks: true,
        });

        expect(result.popupConfig.cards).toEqual([
            separatorCard,
            {
                type: 'custom:bubble-card',
                card_type: 'button',
                button_type: 'name',
                name: 'Left',
                grid_options: { columns: 6 },
            },
            {
                type: 'custom:bubble-card',
                card_type: 'button',
                button_type: 'name',
                name: 'Right',
                grid_options: { rows: 1.4, columns: 6 },
            },
        ]);
    });
});