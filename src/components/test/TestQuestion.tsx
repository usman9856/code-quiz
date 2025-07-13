import React from 'react';
interface TestQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: string;
  onSelectAnswer: (answer: string) => void;
  questionNumber: number;
}
export const TestQuestion: React.FC<TestQuestionProps> = ({
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
  questionNumber
}) => {
  // Safety check for undefined options
  if (!options || !Array.isArray(options) || options.length === 0) {
    return (
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl p-6 md:p-8 mb-8 border border-gray-700 shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
          <span className="text-cyan-400">Q{questionNumber}:</span> {question || 'Loading question...'}
        </h2>
        <div className="text-gray-300">Loading options...</div>
      </div>
    );
  }

  return <div className="w-full mx-auto max-w-4xl bg-gray-800 rounded-xl p-6 md:p-8 mb-8 border border-gray-700 shadow-lg">
    <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
      <span className="text-cyan-400">Q{questionNumber}:</span> {question}
    </h2>
    <div className="space-y-3">
      {options.map((option, index) => <div key={index} onClick={() => onSelectAnswer(option)} className={`p-4 rounded-lg border ${selectedAnswer === option ? 'border-cyan-500 bg-cyan-500 bg-opacity-10' : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700'} cursor-pointer transition-colors duration-200`} tabIndex={0} role="radio" aria-checked={selectedAnswer === option} aria-label={option} onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelectAnswer(option);
        }
      }}>
        <div className="flex items-start">
          <div className={`flex-shrink-0 h-5 w-5 mt-0.5 rounded-full border ${selectedAnswer === option ? 'border-cyan-500' : 'border-gray-400'} flex items-center justify-center`}>
            {selectedAnswer === option && <div className="h-3 w-3 rounded-full bg-cyan-500"></div>}
          </div>
          <div className="ml-3">
            <label className={`text-md ${selectedAnswer === option ? 'text-white' : 'text-gray-300'} cursor-pointer`}>
              <span className="text-gray-400 mr-2">{index + 1}.</span>{' '}
              {option}
            </label>
          </div>
        </div>
      </div>)}
    </div>
  </div>;
};