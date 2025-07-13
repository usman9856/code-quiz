import React, { useEffect, useState } from 'react';
import { ScoreCircle } from './ScoreCircle';
import { ResultsSummary } from './ResultsSummary';
import { ActionButtons } from './ActionButtons';
import { ShareResults } from './ShareResults';
import { DetailedResults } from './DetailedResults';
import confetti from 'canvas-confetti';
import { LoadingOverlay } from '../test/LoadingOverlay';
import { useNavigate } from 'react-router-dom';

// Default empty results structure
const createEmptyResults = () => ({
  userName: '',
  totalQuestions: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  unanswered: 0,
  score: 0,
  language: '',
  timeSpent: '00:00',
  remarks: '',
  answers: []
});
export const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState(() => {
    // Initialize with session storage data if available
    const storedResults = sessionStorage.getItem('testResults');
    if (storedResults) {
      try {
        const parsed = JSON.parse(storedResults);
        // Validate that we have actual test results
        if (parsed.totalQuestions > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse stored results', e);
      }
    }
    // If no valid results found, redirect to home
    setTimeout(() => navigate('/'), 100);
    return createEmptyResults();
  });
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Prevent back navigation from results page
    const preventBackNavigation = () => {
      window.history.pushState(null, '', window.location.href);
    };

    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };

    preventBackNavigation();
    window.addEventListener('popstate', handlePopState);

    // Set loading to false after brief delay
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Separate effect for confetti animation
  useEffect(() => {
    if (!loading && results.score >= 70 && results.totalQuestions > 0) {
      const confettiTimer = setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: {
            y: 0.6
          },
          colors: ['#00D4FF', '#FF00D4', '#FFD700', '#00FF88', '#FF4500']
        });

        // Second burst for even higher scores
        if (results.score >= 90) {
          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 60,
              origin: {
                y: 0.4
              },
              colors: ['#FFD700', '#FFA500', '#FF6347']
            });
          }, 300);
        }
      }, 2800); // Sync with score animation completion

      return () => clearTimeout(confettiTimer);
    }
  }, [loading, results.score, results.totalQuestions]);
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
    return <LoadingOverlay message="Calculating your results..." />;
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

        {/* Show remarks with fade-in animation */}
        {results.remarks && <div className={`mt-2 mb-6 text-center transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
          <p className={`text-lg font-medium ${results.score >= 90 ? 'text-green-400' : results.score >= 70 ? 'text-cyan-400' : results.score >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
            {results.remarks}
          </p>
        </div>}

        {/* Show summary with staggered animation */}
        <div className="transition-all duration-1000 delay-300">
          <ResultsSummary correctAnswers={results.correctAnswers} incorrectAnswers={results.incorrectAnswers} unanswered={results.unanswered} totalQuestions={results.totalQuestions} timeSpent={results.timeSpent} />
        </div>

        {/* Show detailed results toggle */}
        <div className="w-full mt-8 mb-4 flex justify-center transition-all duration-1000 delay-500">
          <button onClick={() => setShowDetails(!showDetails)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200">
            {showDetails ? 'Hide Detailed Results' : 'View Detailed Results'}
          </button>
        </div>

        {/* Show detailed results if toggled */}
        {showDetails && <DetailedResults answers={results.answers} />}

        {/* Show action buttons */}
        <div className="w-full border-t border-gray-700 my-8"></div>
        <div className="transition-all duration-1000 delay-700">
          <ActionButtons language={results.language} answers={results.answers} userName={results.userName} score={results.score} timeSpent={results.timeSpent} remarks={results.remarks} totalQuestions={results.totalQuestions} correctAnswers={results.correctAnswers} incorrectAnswers={results.incorrectAnswers} unanswered={results.unanswered} />
        </div>

        {/* Show share results */}
        <div className="w-full border-t border-gray-700 my-8"></div>
        <div className="transition-all duration-1000 delay-900">
          {/* <ShareResults score={results.score} language={results.language} /> */}
        </div>
      </div>
    </div>
  </div>;
};