import React from 'react';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';
interface Answer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}
interface DetailedResultsProps {
  answers: Answer[];
}
export const DetailedResults: React.FC<DetailedResultsProps> = ({
  answers
}) => {
  return <div className="w-full bg-gray-750 rounded-lg border border-gray-700 p-4 mt-4">
      <h3 className="text-lg font-medium text-white mb-4">
        Detailed Question Analysis
      </h3>
      <div className="space-y-6">
        {answers.map((answer, index) => <div key={index} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
            <div className="flex items-start">
              <div className="mt-1 mr-3">
                {answer.isCorrect ? <div className="p-1 rounded-full bg-green-500 bg-opacity-20">
                    <CheckCircleIcon size={20} className="text-green-400" />
                  </div> : <div className="p-1 rounded-full bg-red-500 bg-opacity-20">
                    <XCircleIcon size={20} className="text-red-400" />
                  </div>}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium mb-2">
                  Question {index + 1}: {answer.question}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className={`p-3 rounded-md ${answer.isCorrect ? 'bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30' : 'bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30'}`}>
                    <p className="text-sm text-gray-400 mb-1">Your Answer:</p>
                    <p className={`text-sm ${answer.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {answer.userAnswer || 'No answer provided'}
                    </p>
                  </div>
                  {!answer.isCorrect && <div className="p-3 rounded-md bg-gray-700 border border-gray-600">
                      <p className="text-sm text-gray-400 mb-1">
                        Correct Answer:
                      </p>
                      <p className="text-sm text-green-400">
                        {answer.correctAnswer}
                      </p>
                    </div>}
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};