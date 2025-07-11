import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TestQuestion } from "./TestQuestion";
import { TestProgressBar } from "./TestProgressBar";
import { TestNavigation } from "./TestNavigation";
import { EndTestConfirmation } from "./EndTestConfirmation";
import { LoadingOverlay } from "./LoadingOverlay";
import { CODE_SAMPLES } from "../../constants/globalConstants";
import { GlobalStore } from "../../store/GlobalStore";

export const TestPage = () => {
  const navigate = useNavigate();
  const [showEndConfirmation, setShowEndConfirmation] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [startTime, setStartTime] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    "next" | "prev" | null
  >(null);

  const testStarted = GlobalStore((state) => state.testStarted);
  const selectedLanguage = GlobalStore((state) => state.selectedLang);

  const TOTAL_QUESTIONS = 5;
  const questions = useMemo(() => {
    const fullQuestionSet = CODE_SAMPLES[selectedLanguage] || {};
    return Object.entries(fullQuestionSet)
      .sort(() => Math.random() - 0.5)
      .slice(0, TOTAL_QUESTIONS)
      .map(([id, q]) => ({ id, ...(q as { question: string; options: string[]; correctAnswer: string; }) }));
  }, [selectedLanguage]);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };
    if (testStarted) {
      document.addEventListener("contextmenu", handleContextMenu);
    }
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [testStarted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === "c" || e.key === "p" || e.key === "s")) ||
        (e.altKey && e.key === "Tab") ||
        e.key === "F12" ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
        return false;
      }
      if (
        e.key === "ArrowRight" &&
        currentQuestionIndex < questions.length - 1
      ) {
        handleNextQuestion();
      } else if (e.key === "ArrowLeft" && currentQuestionIndex > 0) {
        handlePreviousQuestion();
      }
      const num = parseInt(e.key);
      if (
        num >= 1 &&
        num <= 5 &&
        num <= questions[currentQuestionIndex]?.options.length
      ) {
        handleSelectAnswer(questions[currentQuestionIndex].options[num - 1]);
      }
    };
    if (testStarted) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [testStarted, currentQuestionIndex, questions, handleNextQuestion, handlePreviousQuestion, handleSelectAnswer]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (testStarted) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [testStarted]);

  useEffect(() => {
    const enterFullscreen = async () => {
      if (testStarted && document.documentElement.requestFullscreen) {
        try {
          await document.documentElement.requestFullscreen();
        } catch (err) {
          console.error("Error attempting to enable fullscreen:", err);
        }
      }
    };
    if (testStarted) {
      enterFullscreen();
      setStartTime(Date.now());
    }
    return () => {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.error("Error attempting to exit fullscreen:", err);
        });
      }
    };
  }, [testStarted]);

  const handleSelectAnswer = useCallback((answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  }, [currentQuestionIndex]);

  const calculateAndShowResults = useCallback(() => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch((err) => {
        console.error("Error attempting to exit fullscreen:", err);
      });
    }

    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    const detailedAnswers = questions.map((question, index) => {
      const userAnswer = answers[index] || "";
      const isCorrect = userAnswer === question.correctAnswer;
      if (!userAnswer) {
        unansweredCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }
      return {
        question: question.question,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
      };
    });

    const score = Math.round((correctCount / questions.length) * 100);
    let timeSpent = "00:00";
    if (startTime) {
      const endTime = Date.now();
      const timeInSeconds = Math.floor((endTime - startTime) / 1000);
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      timeSpent = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }

    let remarks = "";
    if (score >= 90) remarks = "Excellent! You have mastered this topic!";
    else if (score >= 70) remarks = "Good job! Solid understanding.";
    else if (score >= 50) remarks = "Fair. Keep practicing to improve.";
    else remarks = "Needs improvement. Consider reviewing fundamentals.";

    const results = {
      userName: "",
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      incorrectAnswers: incorrectCount,
      unanswered: unansweredCount,
      score,
      language: selectedLanguage,
      timeSpent,
      remarks,
      answers: detailedAnswers,
    };
    sessionStorage.setItem("testResults", JSON.stringify(results));
    navigate("/results");
  }, [questions, answers, startTime, selectedLanguage, navigate]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setTransitionDirection("next");
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setTransitionDirection(null);
      }, 300);
    } else {
      calculateAndShowResults();
    }
  }, [currentQuestionIndex, questions.length, calculateAndShowResults]);

  const handlePreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setTransitionDirection("prev");
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev - 1);
        setTransitionDirection(null);
      }, 300);
    }
  }, [currentQuestionIndex]);

  const handleEndTest = () => {
    setShowEndConfirmation(true);
  };

  const confirmEndTest = () => {
    setLoading(true);
    setTimeout(() => {
      calculateAndShowResults();
    }, 1000);
  };

  const cancelEndTest = () => {
    setShowEndConfirmation(false);
  };

  if (loading) return <LoadingOverlay />;

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
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            selectedAnswer={answers[currentQuestionIndex] || ""}
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
          isPreviousDisabled={currentQuestionIndex === 0}
          isNextDisabled={currentQuestionIndex === questions.length - 1}
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
