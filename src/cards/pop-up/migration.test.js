import { afterEach, describe, expect, jest, test } from '@jest/globals';
import {
    createPostMigrationDialogParams,
    createStandalonePopUpConfig,
    findLegacyPopUpStack,
    getMigrationNoticeStorageKey,
    hasLegacyHorizontalStacks,
    isLegacyPopUpConfig,
    maybeShowMigrationNotice,
    migrateLegacyPopUpLovelaceConfig,
    replaceConfigAtPath,
} from './migration.js';

const originalGlobalDescriptors = {
    customElements: Object.getOwnPropertyDescriptor(globalThis, 'customElements'),
    document: Object.getOwnPropertyDescriptor(globalThis, 'document'),
    localStorage: Object.getOwnPropertyDescriptor(globalThis, 'localStorage'),
    location: Object.getOwnPropertyDescriptor(globalThis, 'location'),
    setTimeout: Object.getOwnPropertyDescriptor(globalThis, 'setTimeout'),
};

function restoreGlobalProperty(name, descriptor) {
    if (descriptor) {
        Object.defineProperty(globalThis, name, descriptor);
        return;
    }

    delete globalThis[name];
}

function setLocationPathname(pathname) {
    Object.defineProperty(globalThis, 'location', {
        configurable: true,
        value: { pathname },
    });
}

function createFakeElement(tagName) {
    const listeners = {};

    return {
        tagName: tagName.toUpperCase(),
        attributes: {},
        children: [],
        style: {},
        textContent: '',
        innerHTML: '',
        id: '',
        isConnected: false,
        open: false,
        setAttribute(name, value) {
            this.attributes[name] = String(value);
        },
        appendChild(child) {
            this.children.push(child);
            child.parentNode = this;
            child.isConnected = this.isConnected;
            return child;
        },
        remove() {
            this.isConnected = false;
            this.removed = true;
        },
        addEventListener(type, handler) {
            listeners[type] = listeners[type] || [];
            listeners[type].push(handler);
        },
        dispatchFakeEvent(type) {
            (listeners[type] || []).forEach((handler) => handler({ type }));
        },
        _listeners: listeners,
    };
}

function installMigrationNoticeHarness() {
    const storage = new Map();
    const createdElements = [];
    const body = createFakeElement('body');
    body.isConnected = true;
    let deferredCallback = null;

    Object.defineProperty(globalThis, 'localStorage', {
        configurable: true,
        value: {
            getItem: jest.fn((key) => storage.get(key) ?? null),
            setItem: jest.fn((key, value) => storage.set(key, String(value))),
        },
    });
    Object.defineProperty(globalThis, 'customElements', {
        configurable: true,
        value: {
            get: jest.fn(() => true),
            whenDefined: jest.fn(() => Promise.resolve()),
        },
    });
    Object.defineProperty(globalThis, 'document', {
        configurable: true,
        value: {
            body,
            createElement: jest.fn((tagName) => {
                const element = createFakeElement(tagName);
                createdElements.push(element);
                return element;
            }),
        },
    });
    Object.defineProperty(globalThis, 'setTimeout', {
        configurable: true,
        value: jest.fn((callback) => {
            deferredCallback = deferredCallback || callback;
            return 1;
        }),
    });

    return {
        createdElements,
        storage,
        runDeferredCallback: () => deferredCallback?.(),
    };
}

afterEach(() => {
    Object.entries(originalGlobalDescriptors).forEach(([name, descriptor]) => {
        restoreGlobalProperty(name, descriptor);
    });
});

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

const mushroomAlarmPanelCard = {
    type: 'custom:mushroom-alarm-control-panel-card',
    entity: 'alarm_control_panel.security_panel',
    name: 'Security Panel',
};

const gridCard = {
    type: 'grid',
    square: false,
    columns: 2,
    cards: [buttonCard, { ...buttonCard, entity: 'light.second' }],
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

const mixedHorizontalStackCard = {
    type: 'horizontal-stack',
    cards: [buttonCard, mushroomAlarmPanelCard],
};

describe('getMigrationNoticeStorageKey', () => {
    test.each([
        ['/home/lights', { panelUrl: 'home' }, 'bubble-card-legacy-popup-notice-home/lights'],
        ['/lovelace/kitchen', { panelUrl: 'lovelace' }, 'bubble-card-legacy-popup-notice-lovelace/kitchen'],
        ['/ha/mobile/home/overview', { panelUrl: 'home' }, 'bubble-card-legacy-popup-notice-home/overview'],
    ])('uses hass.panelUrl to scope %s to the current view', (pathname, hass, expectedKey) => {
        setLocationPathname(pathname);

        expect(getMigrationNoticeStorageKey(hass)).toBe(expectedKey);
    });
});

describe('maybeShowMigrationNotice', () => {
    test('stores dismissal on the settled view and handles touch before synthesized click', () => {
        const harness = installMigrationNoticeHarness();
        setLocationPathname('/lovelace');

        maybeShowMigrationNotice({ panelUrl: 'lovelace' });

        setLocationPathname('/lovelace/kitchen');
        harness.runDeferredCallback();

        const dismissButton = harness.createdElements.find((element) => (
            element.tagName === 'HA-BUTTON' && element.textContent.includes("don't show again")
        ));
        const remindButton = harness.createdElements.find((element) => (
            element.tagName === 'HA-BUTTON' && element.textContent === 'Remind me later'
        ));

        expect(dismissButton.attributes['data-dialog']).toBe('close');
        expect(remindButton.attributes['data-dialog']).toBe('close');

        dismissButton.dispatchFakeEvent('pointerup');
        dismissButton.dispatchFakeEvent('click');

        expect(globalThis.localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(harness.storage.get('bubble-card-legacy-popup-notice-lovelace/kitchen')).toBe('1');
        expect(harness.storage.has('bubble-card-legacy-popup-notice-lovelace')).toBe(false);
    });
});

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
            cards: [{
                ...buttonCard,
                grid_options: { columns: 12 },
            }],
        });
        expect(standaloneConfig).not.toBe(legacyPopupConfig);
        expect(standaloneConfig.cards[0]).not.toBe(buttonCard);
    });

    test('forces full-width legacy stack layout while removing inherited width bounds', () => {
        const standaloneConfig = createStandalonePopUpConfig(legacyPopupConfig, [widthConfiguredButtonCard]);

        expect(standaloneConfig.cards).toEqual([
            {
                ...buttonCard,
                grid_options: { rows: 1.5, columns: 12 },
            },
        ]);
    });

    test('keeps non-Bubble legacy stack cards full-width and auto-height', () => {
        const standaloneConfig = createStandalonePopUpConfig(legacyPopupConfig, [mushroomAlarmPanelCard]);

        expect(standaloneConfig.cards).toEqual([
            {
                ...mushroomAlarmPanelCard,
                grid_options: { columns: 12, rows: 'auto' },
            },
        ]);
    });

    test('preserves HA grid card columns while making the grid card itself full-width', () => {
        const standaloneConfig = createStandalonePopUpConfig(legacyPopupConfig, [gridCard]);

        expect(standaloneConfig.cards).toEqual([
            {
                ...gridCard,
                grid_options: { columns: 12, rows: 'auto' },
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
            cards: [
                {
                    ...buttonCard,
                    grid_options: { columns: 12 },
                },
                {
                    ...separatorCard,
                    grid_options: { columns: 12 },
                },
            ],
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
            cards: [
                {
                    ...buttonCard,
                    grid_options: { columns: 12 },
                },
                {
                    ...separatorCard,
                    grid_options: { columns: 12 },
                },
            ],
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
            cards: [{
                ...buttonCard,
                grid_options: { columns: 12 },
            }],
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
            {
                ...separatorCard,
                grid_options: { columns: 12 },
            },
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

    test('keeps flattened non-Bubble horizontal-stack cards auto-height', () => {
        const standaloneConfig = createStandalonePopUpConfig(legacyPopupConfig, [mixedHorizontalStackCard], {
            convertHorizontalStacks: true,
        });

        expect(standaloneConfig.cards).toEqual([
            {
                ...buttonCard,
                grid_options: { columns: 6 },
            },
            {
                ...mushroomAlarmPanelCard,
                grid_options: { columns: 6, rows: 'auto' },
            },
        ]);
    });

    test('migrates one nested legacy stack inside a common vertical-stack without removing siblings', () => {
        const secondLegacyPopupConfig = {
            ...legacyPopupConfig,
            hash: '#bedroom',
            name: 'Bedroom',
        };
        const secondButtonCard = {
            ...buttonCard,
            entity: 'light.bedroom',
        };
        const lovelaceConfig = {
            views: [
                {
                    cards: [
                        {
                            type: 'vertical-stack',
                            cards: [
                                {
                                    type: 'vertical-stack',
                                    title: 'Kitchen stack',
                                    cards: [legacyPopupConfig, buttonCard],
                                },
                                {
                                    type: 'vertical-stack',
                                    title: 'Bedroom stack',
                                    cards: [secondLegacyPopupConfig, secondButtonCard],
                                },
                            ],
                        },
                    ],
                },
            ],
        };

        const result = migrateLegacyPopUpLovelaceConfig(lovelaceConfig, legacyPopupConfig);

        expect(result.stackPath).toEqual(['views', 0, 'cards', 0, 'cards', 0]);
        expect(result.config.views[0].cards[0]).toEqual({
            type: 'vertical-stack',
            cards: [
                {
                    ...legacyPopupConfig,
                    cards: [{
                        ...buttonCard,
                        grid_options: { columns: 12 },
                    }],
                },
                {
                    type: 'vertical-stack',
                    title: 'Bedroom stack',
                    cards: [secondLegacyPopupConfig, secondButtonCard],
                },
            ],
        });
    });
});

describe('createPostMigrationDialogParams', () => {
    test('keeps the common stack editor open after migrating a nested legacy stack', () => {
        const secondLegacyPopupConfig = {
            ...legacyPopupConfig,
            hash: '#bedroom',
            name: 'Bedroom',
        };
        const commonStack = {
            type: 'vertical-stack',
            cards: [
                {
                    type: 'vertical-stack',
                    title: 'Kitchen stack',
                    cards: [legacyPopupConfig, buttonCard],
                },
                {
                    type: 'vertical-stack',
                    title: 'Bedroom stack',
                    cards: [secondLegacyPopupConfig, separatorCard],
                },
            ],
        };
        const lovelaceConfig = {
            views: [
                {
                    cards: [commonStack],
                },
            ],
        };
        const migration = migrateLegacyPopUpLovelaceConfig(lovelaceConfig, legacyPopupConfig);
        const saveCardConfig = jest.fn();
        const lovelace = { saveConfig: jest.fn() };

        const dialogParams = createPostMigrationDialogParams(
            {
                cardConfig: commonStack,
                saveCardConfig,
            },
            lovelaceConfig,
            migration,
            lovelace
        );

        expect(dialogParams).toMatchObject({
            lovelace,
            lovelaceConfig: migration.config,
            cardConfig: migration.config.views[0].cards[0],
        });
        expect(dialogParams.cardConfig.cards).toHaveLength(2);
        expect(dialogParams.cardConfig.cards[0]).toEqual(migration.popupConfig);
        expect(dialogParams.cardConfig.cards[1]).toEqual(commonStack.cards[1]);
        expect(dialogParams.saveCardConfig).toBe(saveCardConfig);
    });

    test('does not claim a parent stack when the active dialog edits the legacy popup itself', () => {
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
        const migration = migrateLegacyPopUpLovelaceConfig(lovelaceConfig, legacyPopupConfig);

        const dialogParams = createPostMigrationDialogParams(
            { cardConfig: legacyPopupConfig },
            lovelaceConfig,
            migration,
            { saveConfig: jest.fn() }
        );

        expect(dialogParams).toBeNull();
    });
});