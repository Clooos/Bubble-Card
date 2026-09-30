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

// The WCAG relative luminance, gamma removed, which is what a contrast ratio is
// computed from. calculateLuminance above keeps the gamma and reads a pastel as
// lighter than it looks next to a saturated colour.
export function relativeLuminance(r, g, b) {
    const linear = (channel) => {
        const value = channel / 255;
        return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

export function contrastRatio(luminanceA, luminanceB) {
    return (Math.max(luminanceA, luminanceB) + 0.05) / (Math.min(luminanceA, luminanceB) + 0.05);
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
