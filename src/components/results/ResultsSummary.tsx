import React from 'react';
import { CheckCircleIcon, XCircleIcon, HelpCircleIcon, ClockIcon } from 'lucide-react';
interface ResultsSummaryProps {
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  totalQuestions: number;
  timeSpent: string;
}
export const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  correctAnswers,
  incorrectAnswers,
  unanswered,
  timeSpent
}) => {
  return <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
      <div className="bg-gray-750 rounded-lg p-4 flex flex-col items-center justify-center border border-gray-700">
        <div className="p-2 rounded-full bg-green-500 bg-opacity-20 mb-3">
          <CheckCircleIcon size={28} className="text-green-400" />
        </div>
        <span className="text-2xl font-bold text-white">{correctAnswers}</span>
        <span className="text-sm text-gray-300">Correct</span>
      </div>
      <div className="bg-gray-750 rounded-lg p-4 flex flex-col items-center justify-center border border-gray-700">
        <div className="p-2 rounded-full bg-red-500 bg-opacity-20 mb-3">
          <XCircleIcon size={28} className="text-red-400" />
        </div>
        <span className="text-2xl font-bold text-white">
          {incorrectAnswers}
        </span>
        <span className="text-sm text-gray-300">Incorrect</span>
      </div>
      <div className="bg-gray-750 rounded-lg p-4 flex flex-col items-center justify-center border border-gray-700">
        <div className="p-2 rounded-full bg-yellow-500 bg-opacity-20 mb-3">
          <HelpCircleIcon size={28} className="text-yellow-400" />
        </div>
        <span className="text-2xl font-bold text-white">{unanswered}</span>
        <span className="text-sm text-gray-300">Unanswered</span>
      </div>
      <div className="bg-gray-750 rounded-lg p-4 flex flex-col items-center justify-center border border-gray-700">
        <div className="p-2 rounded-full bg-blue-500 bg-opacity-20 mb-3">
          <ClockIcon size={28} className="text-blue-400" />
        </div>
        <span className="text-2xl font-bold text-white">{timeSpent}</span>
        <span className="text-sm text-gray-300">Time Spent</span>
      </div>
    </div>;
};