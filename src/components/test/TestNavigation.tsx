import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from 'lucide-react';
interface TestNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onEndTest: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}
export const TestNavigation: React.FC<TestNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onEndTest,
  isPreviousDisabled,
  isNextDisabled
}) => {
  return <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-4">
      <button onClick={onPrevious} disabled={isPreviousDisabled} className={`flex items-center px-5 py-2.5 rounded-md ${isPreviousDisabled ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'} transition-colors duration-200`}>
        <ArrowLeftIcon size={16} className="mr-2" />
        Previous
      </button>
      <button onClick={onEndTest} className="px-5 py-2.5 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors duration-200 flex items-center">
        <XIcon size={16} className="mr-2" />
        End Test
      </button>
      <button onClick={onNext} className={`flex items-center px-5 py-2.5 rounded-md ${isNextDisabled ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'} transition-colors duration-200`}>
        {currentQuestion === totalQuestions ? 'Finish Test' : 'Next'}
        <ArrowRightIcon size={16} className="ml-2" />
      </button>
    </div>;
};