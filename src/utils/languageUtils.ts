// This file is deprecated - use src/utils/languageLoader.ts instead
// Keeping minimal exports for backward compatibility

import { 
  getLanguageConfig, 
  getEnabledLanguageKeys, 
  getAllLanguageKeys,
  isValidLanguage
} from './languageLoader';

// Type definitions
export type LanguageKey = string;
export type LanguageName = string;

/**
 * Get the display name for a language key
 * @deprecated Use getLanguageInfo from languageLoader instead
 */
export const getLanguageDisplayName = (languageKey: string): string => {
  const config = getLanguageConfig(languageKey);
  return config?.title || languageKey;
};

/**
 * Get all available language keys
 * @deprecated Use getEnabledLanguageKeys from languageLoader instead
 */
export const getAvailableLanguageKeys = (): string[] => {
  return getEnabledLanguageKeys();
};

/**
 * Get the language key from display name
 * @deprecated Use getLanguageInfo from languageLoader instead
 */
export const getLanguageKeyFromDisplayName = (displayName: string): string | null => {
  const enabledLanguages = getEnabledLanguageKeys();
  
  for (const key of enabledLanguages) {
    const config = getLanguageConfig(key);
    if (config && config.title === displayName) {
      return key;
    }
  }
  
  return null;
};

/**
 * Validate if a language key exists
 * @deprecated Use isValidLanguage from languageLoader instead
 */
export const isValidLanguageKey = (key: string): boolean => {
  return isValidLanguage(key);
};
