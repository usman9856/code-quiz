import React from "react";
import { GlobalStore } from "../../store/GlobalStore";
import { getLanguageInfo } from "../../utils/languageLoader";

export const CodeSnippet: React.FC = () => {
  const language = GlobalStore((state) => state.selectedLang);
  const languageInfo = getLanguageInfo(language);
  
  const displayText = languageInfo 
    ? `// ${languageInfo.title} Quiz\n// Test your ${languageInfo.title} knowledge\n// ${languageInfo.description}`
    : `// Code Quiz\n// Select a language to start`;

  return (
    <pre className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 text-sm text-cyan-400 font-mono leading-relaxed whitespace-pre-wrap opacity-20">
      {displayText}
    </pre>
  );
};
