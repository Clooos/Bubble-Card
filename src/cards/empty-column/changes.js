import { applyRowSize } from "../../tools/utils.js";

// The empty column is the only card whose whole job is to take up space, so it
// has to size itself from its own config: relying on the layout class (only
// added in section views) or on the grid cell Home Assistant draws around it
// meant the configured rows were ignored everywhere else: in masonry views,
// inside stacks and inside pop-ups (#2523).
export function changeHeight(context) {
    const rows = context.config.rows || context.config.grid_options?.rows;
    const hasRows = Boolean(rows) && rows !== 'auto';

    // Without an explicit row count the column must stay at 0px, a full width
    // one is how a grid row is forced to break (#2419).
    context.elements.emptyColumnCard.classList.toggle('has-rows', hasRows);

    applyRowSize(context, context.content);
}
