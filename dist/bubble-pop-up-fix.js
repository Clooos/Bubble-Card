// Since v3.2.0, Bubble Card Pop-up fix isn't required anymore, but this file is still included in the build to exclude 404 errors in the console.
if (typeof window !== 'undefined' && !window.__bubblePopupFixNotified) {
  window.__bubblePopupFixNotified = true
  console.warn(
    '%c[Bubble Card] %cbubble-pop-up-fix.js',
    'color:#ff9800;font-weight:bold',
    'color:#ff9800;font-weight:bold;font-family:monospace',
    'is no longer needed since v3.2.0. You can safely remove it from your configuration.yaml:\n\n'
    + '  frontend:\n'
    + '    extra_module_url:\n'
    + '      - /some_path/bubble-pop-up-fix.js  ← remove this line'
  )
}
