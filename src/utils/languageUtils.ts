import { CODE_SAMPLES, LANGUAGES } from "../constants/globalConstants";

// Create a mapping between language keys and display names
export const LANGUAGE_MAPPING = {
  javascript: 'JavaScript',
  python: 'Python', 
  java: 'Java',
  csharp: 'C#',
  react: 'React',
  sql: 'SQL',
  cpp: 'C++'
} as const;

// Type definitions
export type LanguageKey = keyof typeof CODE_SAMPLES;
export type LanguageName = typeof LANGUAGE_MAPPING[LanguageKey];

/**
 * Get the display name for a language key
 */
export const getLanguageDisplayName = (languageKey: LanguageKey): string => {
  return LANGUAGE_MAPPING[languageKey] || languageKey;
};

/**
 * Get the language key from display name
 */
export const getLanguageKeyFromDisplayName = (displayName: string): LanguageKey | null => {
  const entry = Object.entries(LANGUAGE_MAPPING).find(([key, name]) => name === displayName);
  return entry ? entry[0] as LanguageKey : null;
};

/**
 * Get all available language keys
 */
export const getAvailableLanguageKeys = (): LanguageKey[] => {
  return Object.keys(CODE_SAMPLES) as LanguageKey[];
};

/**
 * Get language info by key
 */
export const getLanguageInfo = (languageKey: LanguageKey) => {
  const displayName = getLanguageDisplayName(languageKey);
  const languageData = LANGUAGES.find(lang => lang.title === displayName);
  
  return {
    key: languageKey,
    displayName,
    description: languageData?.description || '',
    icon: languageData?.icon,
    color: languageData?.color || 'bg-gray-500'
  };
};

/**
 * Validate if a language key exists
 */
export const isValidLanguageKey = (key: string): key is LanguageKey => {
  return key in CODE_SAMPLES;
};
