import { CPlusPlusIcon } from "../assets/svg/CPlusPlusIcon";
import { JavaIcon } from "../assets/svg/JavaIcon";
import { JavaScriptIcon } from "../assets/svg/JavaScriptIcon";
import { PythonIcon } from "../assets/svg/PythonIcon";
import { ReactIcon } from "../assets/svg/ReactIcon";
import { SqlIcon } from "../assets/svg/SqlIcon";
import { CSharpIcon } from "../assets/svg/CSharpIcon";
import languagesConfig from "../data/languages.json";

// Question interface
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuestionSet {
  [key: string]: Question;
}

// Language configuration interface
export interface LanguageConfig {
  title: string;
  description: string;
  color: string;
  iconName: string;
  enabled: boolean;
}

// Icon registry for dynamic icon loading
const ICON_REGISTRY: Record<string, React.ComponentType> = {
  JavaScriptIcon,
  PythonIcon,
  JavaIcon,
  ReactIcon,
  SqlIcon,
  CPlusPlusIcon,
  CSharpIcon,
};

/**
 * Dynamically import question sets
 */
export const loadQuestions = async (languageKey: string): Promise<QuestionSet | null> => {
  try {
    switch (languageKey.toLowerCase()) {
      case 'javascript':
        const { JAVASCRIPT_QUESTIONS } = await import('../languages/javascriptQuestionare');
        return JAVASCRIPT_QUESTIONS;
      case 'python':
        const { PYTHON_QUESTIONS } = await import('../languages/pythonQuestionare');
        return PYTHON_QUESTIONS;
      case 'java':
        const { JAVA_QUESTIONS } = await import('../languages/javaQuestionare');
        return JAVA_QUESTIONS;
      case 'csharp':
        const { CSHARP_QUESTIONS } = await import('../languages/csharpQuestionare');
        return CSHARP_QUESTIONS;
      case 'react':
        const { REACT_QUESTIONS } = await import('../languages/reactQuestionare');
        return REACT_QUESTIONS;
      case 'sql':
        const { SQL_QUESTIONS } = await import('../languages/sqlQuestionare');
        return SQL_QUESTIONS;
      case 'cpp':
        const { CPP_QUESTIONS } = await import('../languages/cppQuestionare');
        return CPP_QUESTIONS;
      default:
        console.warn(`No questions found for language: ${languageKey}`);
        return null;
    }
  } catch (error) {
    console.error(`Error loading questions for ${languageKey}:`, error);
    return null;
  }
};

/**
 * Get language configuration
 */
export const getLanguageConfig = (languageKey: string): LanguageConfig | null => {
  const config = languagesConfig[languageKey as keyof typeof languagesConfig];
  return config || null;
};

/**
 * Get all enabled languages
 */
export const getEnabledLanguages = (): Array<{ key: string; config: LanguageConfig }> => {
  return Object.entries(languagesConfig)
    .filter(([_, config]) => config.enabled)
    .map(([key, config]) => ({ key, config }));
};

/**
 * Get icon component for a language
 */
export const getLanguageIcon = (iconName: string): React.ComponentType | null => {
  return ICON_REGISTRY[iconName] || null;
};

/**
 * Get complete language information with icon
 */
export const getLanguageInfo = (languageKey: string) => {
  const config = getLanguageConfig(languageKey);
  if (!config) return null;

  const IconComponent = getLanguageIcon(config.iconName);

  return {
    key: languageKey,
    title: config.title,
    description: config.description,
    color: config.color,
    icon: IconComponent,
    enabled: config.enabled
  };
};

/**
 * Validate if a language exists and is enabled
 */
export const isValidLanguage = (languageKey: string): boolean => {
  const config = getLanguageConfig(languageKey);
  return config !== null && config.enabled;
};

/**
 * Get all available language keys
 */
export const getAllLanguageKeys = (): string[] => {
  return Object.keys(languagesConfig);
};

/**
 * Get enabled language keys only
 */
export const getEnabledLanguageKeys = (): string[] => {
  return getEnabledLanguages().map(({ key }) => key);
};
