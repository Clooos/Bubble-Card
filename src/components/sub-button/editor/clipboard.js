// Persistent clipboard utilities for sub-buttons (shared across editor panels)

const CLIPBOARD_KEY = 'bubble-card-subbutton-clipboard';

export function loadSubButtonClipboard() {
  try {
    const raw = localStorage.getItem(CLIPBOARD_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed.payload ?? null;
  } catch (_) {
    return null;
  }
}

export function saveSubButtonClipboard(buttonConfig) {
  if (!buttonConfig) return;
  try {
    const payload = JSON.parse(JSON.stringify(buttonConfig));
    const isGroup = payload && Array.isArray(payload.buttons);
    const record = {
      type: isGroup ? 'group' : 'sub-button',
      savedAt: Date.now(),
      payload
    };
    localStorage.setItem(CLIPBOARD_KEY, JSON.stringify(record));
  } catch (_) {}
}

export function clearSubButtonClipboard() {
  try {
    localStorage.removeItem(CLIPBOARD_KEY);
  } catch (_) {}
}

