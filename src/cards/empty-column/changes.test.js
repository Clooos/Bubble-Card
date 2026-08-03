import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const applyRowSize = jest.fn();

jest.unstable_mockModule('../../tools/utils.js', () => ({
    applyRowSize,
}));

const { changeHeight } = await import('./changes.js');

function createContext(config = {}) {
    const classes = new Set();
    const emptyColumnCard = {
        classList: {
            toggle: (name, force) => {
                if (force) classes.add(name); else classes.delete(name);
                return classes.has(name);
            },
            contains: (name) => classes.has(name),
        },
    };
    return { config, content: {}, elements: { emptyColumnCard } };
}

const hasRows = (context) => context.elements.emptyColumnCard.classList.contains('has-rows');

describe('empty column height', () => {
    beforeEach(() => {
        applyRowSize.mockClear();
    });

    test('takes the configured rows into account', () => {
        const context = createContext({ rows: 1.676 });
        changeHeight(context);
        expect(hasRows(context)).toBe(true);
        expect(applyRowSize).toHaveBeenCalledWith(context, context.content);
    });

    test('reads the row count from grid_options as well', () => {
        const context = createContext({ grid_options: { rows: 2 } });
        changeHeight(context);
        expect(hasRows(context)).toBe(true);
    });

    // A full width auto height empty column is how a grid row is forced to
    // break, it has to stay at 0px (#2419).
    test('stays flat without an explicit row count', () => {
        const context = createContext({});
        changeHeight(context);
        expect(hasRows(context)).toBe(false);
    });

    test('stays flat on auto height', () => {
        const context = createContext({ rows: 'auto' });
        changeHeight(context);
        expect(hasRows(context)).toBe(false);
    });

    // The height must not depend on the layout class: nothing but a section
    // view ever adds it, so the rows were ignored everywhere else (#2523).
    test('does not depend on the layout class', () => {
        const context = createContext({ rows: 3, card_layout: 'normal' });
        changeHeight(context);
        expect(hasRows(context)).toBe(true);
    });

    test('drops the height again when the rows are removed', () => {
        const context = createContext({ rows: 3 });
        changeHeight(context);
        expect(hasRows(context)).toBe(true);

        delete context.config.rows;
        changeHeight(context);
        expect(hasRows(context)).toBe(false);
    });
});
