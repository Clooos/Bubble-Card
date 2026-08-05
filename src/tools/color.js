// Pure color math, kept apart from tools/utils.js so the modules that only need
// to read and compare colors stay importable on their own

export function hexToRgb(hex) {
    // Themes use every hex form, including the shorthand Home Assistant ships in
    // its own default themes (`#111` dark background, `#fff` light card): parsing
    // only the six digit form made those colors silently unreadable.
    const match = typeof hex === 'string' ? hex.trim().match(/^#([a-f\d]{3,8})$/i) : null;
    if (!match) return null;

    const digits = match[1];
    if (digits.length === 3 || digits.length === 4) {
        return [0, 1, 2].map(i => parseInt(digits[i] + digits[i], 16));
    }
    if (digits.length === 6 || digits.length === 8) {
        return [0, 2, 4].map(i => parseInt(digits.slice(i, i + 2), 16));
    }
    return null;
}

export function rgbStringToRgb(rgbString) {
    if (typeof rgbString !== 'string') return null;

    // Both the legacy comma form and the modern space separated one are valid
    // theme values, and computed colors can carry decimals. Percentage channels
    // are turned down on purpose since they are not on a 0-255 scale, while a
    // percentage alpha stays fine: only the three channels are guarded.
    const match = rgbString.trim()
        .match(/^rgba?\(\s*(\d+(?:\.\d+)?)(?!%)[\s,]+(\d+(?:\.\d+)?)(?!%)[\s,]+(\d+(?:\.\d+)?)(?!%)/i);
    return match ? [Math.round(+match[1]), Math.round(+match[2]), Math.round(+match[3])] : null;
}

export function calculateLuminance(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

export function adjustColor(rgb, brightness) {
  return rgb.map(channel => Math.min(255, Math.round(channel * brightness)));
}

// Compare two RGB colors to check if they are similar (within a threshold)
export function areColorsSimilar(rgb1, rgb2, threshold = 15) {
  if (!rgb1 || !rgb2 || rgb1.length !== 3 || rgb2.length !== 3) return false;
  const diff = Math.abs(rgb1[0] - rgb2[0]) + Math.abs(rgb1[1] - rgb2[1]) + Math.abs(rgb1[2] - rgb2[2]);
  return diff <= threshold;
}
