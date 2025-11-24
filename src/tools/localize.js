import en from "../translations/en.js";
import fr from "../translations/fr.js";
import de from "../translations/de.js";
import zh_cn from "../translations/zh_cn.js";

const languages = {
  en,
  fr,
  de,
  "zh-Hans": zh_cn
};

const DEFAULT_LANG = "en";

function getCurrentLocale(hass) {
  return hass?.locale.language ?? DEFAULT_LANG;
}

function dotStringReducer(currentObject, key) {
  return currentObject[key];
}

function getTranslatedString(key, lang) {
  try {
    const translationList = languages[lang];
    return key.split(".").reduce(dotStringReducer, translationList);
  } catch {
    return undefined;
  }
}

export default function setupTranslation(hass) {
  return function (key) {
    const lang = getCurrentLocale(hass);
    const translation = getTranslatedString(key, lang);

    if (translation) return translation;

    const defaultTranslation = getTranslatedString(key, DEFAULT_LANG);
    if (defaultTranslation) return defaultTranslation;

    return key;
  };
}