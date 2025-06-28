import React from 'react';
interface TestProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}
export const TestProgressBar: React.FC<TestProgressBarProps> = ({
  currentQuestion,
  totalQuestions
}) => {
  const progress = currentQuestion / totalQuestions * 100;
  return <div className="sticky top-0 z-10 w-full bg-gray-800 border-b border-gray-700 p-3">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-300">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ease-in-out" style={{
          width: `${progress}%`
        }}></div>
        </div>
      </div>
    </div>;
};