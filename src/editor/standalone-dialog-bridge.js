export function bridgeDialogCloseToParent(dialog, reopenParent) {
    if (!dialog || typeof reopenParent !== 'function') {
        return () => {};
    }

    const hadOwnCloseDialog = Object.prototype.hasOwnProperty.call(dialog, 'closeDialog');
    const originalCloseDialog = dialog.closeDialog;

    const restoreOriginalCloseDialog = () => {
        if (dialog.closeDialog !== interceptedCloseDialog) {
            return;
        }

        if (hadOwnCloseDialog) {
            dialog.closeDialog = originalCloseDialog;
        } else {
            delete dialog.closeDialog;
        }
    };

    function callOriginalCloseDialog(...args) {
        return typeof originalCloseDialog === 'function'
            ? originalCloseDialog.call(dialog, ...args)
            : false;
    }

    function interceptedCloseDialog(...args) {
        restoreOriginalCloseDialog();

        const didClose = callOriginalCloseDialog(...args);

        if (!didClose) {
            return false;
        }

        reopenParent();
        return true;
    }

    dialog.closeDialog = interceptedCloseDialog;

    return restoreOriginalCloseDialog;
}