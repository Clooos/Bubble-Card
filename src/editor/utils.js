import { html } from 'lit';

/**
 * Provides content for an expansion panel, loading it lazily.
 * The content is rendered only after the panel has been expanded at least once.
 * The parent component is responsible for managing the `isExpanded` state and
 * triggering re-renders when it changes.
 *
 * @param {Object} context - The component instance (expected to have a `requestUpdate` method and store flags).
 * @param {string} contentKey - A unique key for this content block.
 * @param {boolean} isExpanded - True if the panel is currently expanded.
 * @param {Function} renderContentCallback - A function that returns the lit-html TemplateResult for the content.
 * @returns {TemplateResult | undefined} The content to render or undefined.
 */
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