export function getLazyLoadedPanelContent(context, contentKey, isExpanded, renderContentCallback) {
  // Initialize storage for loaded flags if it doesn't exist on the context
  if (typeof context._lazyContentLoadedFlags === 'undefined') {
    context._lazyContentLoadedFlags = {};
  }

  // If the panel is expanded and its content hasn't been marked as "loaded" yet,
  // mark it as loaded. This flag persists even if the panel is collapsed later.
  if (isExpanded && !context._lazyContentLoadedFlags[contentKey]) {
    context._lazyContentLoadedFlags[contentKey] = true;
    // A re-render cycle that calls this function again with the updated flag
    // is expected to be triggered by the parent component after isExpanded changes.
  }

  // If the content has been marked as "loaded" (i.e., panel was expanded at least once),
  // then return the result of the content rendering callback.
  // The <ha-expansion-panel> itself will handle showing/hiding this rendered content
  // based on its current expanded state.
  if (context._lazyContentLoadedFlags[contentKey]) {
    return renderContentCallback();
  }

  // If the content hasn't been loaded yet (i.e., panel was never expanded),
  // return undefined (or html``) to render nothing.
  return undefined;
} 