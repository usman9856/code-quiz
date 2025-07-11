import React, { useEffect, useState } from 'react';
import { ScoreCircle } from './ScoreCircle';
import { ResultsSummary } from './ResultsSummary';
import { ActionButtons } from './ActionButtons';
import { ShareResults } from './ShareResults';
import { DetailedResults } from './DetailedResults';
import confetti from 'canvas-confetti';
import { LoadingOverlay } from '../test/LoadingOverlay';
// Mock test results - in a real app, this would come from the test completion
const mockResults = {
  userName: 'John Doe',
  totalQuestions: 5,
  correctAnswers: 4,
  incorrectAnswers: 1,
  unanswered: 0,
  score: 80,
  language: 'JavaScript',
  timeSpent: '12:45',
  remarks: 'Good job! You have a solid understanding of JavaScript.',
  answers: [{
    question: 'What is the correct way to declare a variable in JavaScript that cannot be reassigned?',
    userAnswer: 'const x = 5;',
    correctAnswer: 'const x = 5;',
    isCorrect: true
  }, {
    question: 'Which of the following is NOT a JavaScript data type?',
    userAnswer: 'Float',
    correctAnswer: 'Float',
    isCorrect: true
  }, {
    question: "What does the 'this' keyword refer to in JavaScript?",
    userAnswer: 'It refers to the current object',
    correctAnswer: 'It depends on how the function is called',
    isCorrect: false
  }, {
    question: 'Which method is used to add an element at the end of an array in JavaScript?',
    userAnswer: 'push()',
    correctAnswer: 'push()',
    isCorrect: true
  }, {
    question: 'What is the output of: console.log(typeof [])?',
    userAnswer: 'object',
    correctAnswer: 'object',
    isCorrect: true
  }]
};
export const ResultsPage: React.FC = () => {
  const [results, setResults] = useState(mockResults);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      // Try to get results from sessionStorage (in a real app)
      const storedResults = sessionStorage.getItem('testResults');
      let currentResults = results;
      if (storedResults) {
        try {
          const parsedResults = JSON.parse(storedResults);
          setResults(parsedResults);
          currentResults = parsedResults;
        } catch (e) {
          console.error('Failed to parse stored results', e);
        }
      }
      // Trigger confetti for high scores
      if (currentResults.score >= 70) {
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: {
              y: 0.6
            }
          });
        }, 1000);
      }
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getScoreColor = () => {
    if (results.score >= 90) return 'from-green-400 to-emerald-500';
    if (results.score >= 70) return 'from-cyan-400 to-blue-500';
    if (results.score >= 50) return 'from-yellow-400 to-orange-500';
    return 'from-orange-400 to-red-500';
  };
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  if (loading) {
    return <LoadingOverlay />;
  }
  return <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start py-12 px-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-2">Test Results</h1>
          <h2 className="text-xl text-gray-300 mb-2">
            {results.language} Assessment
          </h2>
          {results.userName && <div className="mb-6 text-center">
              <p className="text-gray-300">
                Completed by:{' '}
                <span className="text-white font-medium">
                  {results.userName}
                </span>
              </p>
            </div>}
          <ScoreCircle score={results.score} colorClass={getScoreColor()} onAnimationComplete={handleAnimationComplete} />
          {animationComplete && <>
              {results.remarks && <div className="mt-2 mb-6 text-center">
                  <p className={`text-lg font-medium ${results.score >= 90 ? 'text-green-400' : results.score >= 70 ? 'text-cyan-400' : results.score >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {results.remarks}
                  </p>
                </div>}
              <ResultsSummary correctAnswers={results.correctAnswers} incorrectAnswers={results.incorrectAnswers} unanswered={results.unanswered} totalQuestions={results.totalQuestions} timeSpent={results.timeSpent} />
              <div className="w-full mt-8 mb-4 flex justify-center">
                <button onClick={() => setShowDetails(!showDetails)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200">
                  {showDetails ? 'Hide Detailed Results' : 'View Detailed Results'}
                </button>
              </div>
              {showDetails && <DetailedResults answers={results.answers} />}
              <div className="w-full border-t border-gray-700 my-8"></div>
              <ActionButtons language={results.language} answers={results.answers} userName={results.userName} score={results.score} timeSpent={results.timeSpent} remarks={results.remarks} totalQuestions={results.totalQuestions} correctAnswers={results.correctAnswers} incorrectAnswers={results.incorrectAnswers} unanswered={results.unanswered} />
              <div className="w-full border-t border-gray-700 my-8"></div>
              <ShareResults score={results.score} language={results.language} />
            </>}
        </div>
      </div>
    </div>;
};