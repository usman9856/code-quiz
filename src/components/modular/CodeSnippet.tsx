import React from "react";
import { CODE_SAMPLES } from "../../constants/globalConstants";
import { GlobalStore } from "../../store/GlobalStore";




export const CodeSnippet: React.FC = () => {
  const language = GlobalStore((state) => state.selectedLang);
  const code = CODE_SAMPLES[language] || "// Code sample not available";

  const codeString = typeof code === 'object' 
    ? JSON.stringify(code, null, 2)
    : code;

  return (
    <pre className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 text-sm text-cyan-400 font-mono leading-relaxed whitespace-pre-wrap opacity-20">
      {codeString}
    </pre>
  );
};
