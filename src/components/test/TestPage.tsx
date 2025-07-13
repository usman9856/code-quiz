import React, { useEffect } from "react";
import { TestQuestion } from "./TestQuestion";
import { TestProgressBar } from "./TestProgressBar";
import { TestNavigation } from "./TestNavigation";
import { EndTestConfirmation } from "./EndTestConfirmation";
import { LoadingOverlay } from "./LoadingOverlay";
import { useTestLogic } from "../../hooks/useTestLogic";
import { useTestSecurity } from "../../hooks/useTestSecurity";

export const TestPage = () => {
  const {
    showEndConfirmation,
    currentQuestionIndex,
    loading,
    transitionDirection,
    testStarted,
    selectedLanguageDisplayName,
    questions,
    currentQuestion,
    currentAnswer,
    isPreviousDisabled,
    isNextDisabled,
    handleSelectAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleEndTest,
    confirmEndTest,
    cancelEndTest,
    setStartTime
  } = useTestLogic();

  // Initialize test security features
  useTestSecurity({
    testStarted,
    currentQuestionIndex,
    questions,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSelectAnswer,
    setStartTime
  });

  // Prevent back navigation during test
  useEffect(() => {
    if (testStarted) {
      const preventBackNavigation = () => {
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', preventBackNavigation);
      };
      
      preventBackNavigation();
      
      return () => {
        window.removeEventListener('popstate', preventBackNavigation);
      };
    }
  }, [testStarted]);

  if (loading) return <LoadingOverlay message="Preparing your test..." />;

  // Safety check: Don't render if questions are not loaded or current question is undefined
  if (!questions || questions.length === 0 || !currentQuestion) {
    return <LoadingOverlay message={`Loading ${selectedLanguageDisplayName} questions...`} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <TestProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div
          className={`w-full transition-all duration-300 transform ${transitionDirection === "next"
            ? "translate-x-full opacity-0"
            : transitionDirection === "prev"
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
            }`}
        >
          <TestQuestion
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={currentAnswer}
            onSelectAnswer={handleSelectAnswer}
            questionNumber={currentQuestionIndex + 1}
          />
        </div>
        <TestNavigation
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onPrevious={handlePreviousQuestion}
          onNext={handleNextQuestion}
          onEndTest={handleEndTest}
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
        />
      </div>
      {showEndConfirmation && (
        <EndTestConfirmation
          onConfirm={confirmEndTest}
          onCancel={cancelEndTest}
        />
      )}
    </div>
  );
};
