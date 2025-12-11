import { makeSectionedSubButtonsPanel } from './sectioned.js';
import { loadSubButtonClipboard } from './clipboard.js';

export function makeSubButtonPanel(editor) {
    // Initialize state for expanded panels if it doesn't exist
    if (typeof editor._expandedPanelStates === 'undefined') {
        editor._expandedPanelStates = {};
    }

    // Initialize clipboard for copy/cut operations from persistent storage
    if (typeof editor._clipboardButton === 'undefined' || editor._clipboardButton === null) {
        editor._clipboardButton = loadSubButtonClipboard() || null;
    }

    // Use the sectioned panel (Main / Bottom) with transparent migration
    return makeSectionedSubButtonsPanel(editor);
}