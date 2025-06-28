import React, { useEffect, useState } from "react";
import { TestWarningModal } from "./TestWarningModal";
import { TestQuestion } from "./TestQuestion";
import { TestProgressBar } from "./TestProgressBar";
import { TestNavigation } from "./TestNavigation";
import { EndTestConfirmation } from "./EndTestConfirmation";
import { GoogleFrame } from "./GoogleFrame";
import { LoadingOverlay } from "./LoadingOverlay";
export const TestPage = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [showEndConfirmation, setShowEndConfirmation] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [startTime, setStartTime] = useState<number | null>(null);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    "next" | "prev" | null
  >(null);
  // Sample questions data
  const questions = [
    {
      id: 1,
      question:
        "What is the correct way to declare a variable in JavaScript that cannot be reassigned?",
      options: [
        "var x = 5;",
        "let x = 5;",
        "const x = 5;",
        "static x = 5;",
        "fixed x = 5;",
      ],
      correctAnswer: "const x = 5;",
    },
    {
      id: 2,
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Float", "Object", "Undefined"],
      correctAnswer: "Float",
    },
    {
      id: 3,
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "It refers to the current function",
        "It refers to the current object",
        "It refers to the parent object",
        "It refers to the global window object",
        "It depends on how the function is called",
      ],
      correctAnswer: "It depends on how the function is called",
    },
    {
      id: 4,
      question:
        "Which method is used to add an element at the end of an array in JavaScript?",
      options: ["push()", "pop()", "append()", "concat()", "join()"],
      correctAnswer: "push()",
    },
    {
      id: 5,
      question: "What is the output of: console.log(typeof [])?",
      options: ["array", "object", "undefined", "null", "list"],
      correctAnswer: "object",
    },
  ];
  // Disable right-click
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
  // Disable keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+C, Ctrl+P, Ctrl+S, Alt+Tab, F12, PrintScreen
      if (
        (e.ctrlKey && (e.key === "c" || e.key === "p" || e.key === "s")) ||
        (e.altKey && e.key === "Tab") ||
        e.key === "F12" ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
        return false;
      }
      // Allow keyboard navigation with arrow keys
      if (
        e.key === "ArrowRight" &&
        currentQuestionIndex < questions.length - 1
      ) {
        handleNextQuestion();
      } else if (e.key === "ArrowLeft" && currentQuestionIndex > 0) {
        handlePreviousQuestion();
      }
      // Allow selecting options with number keys 1-5
      const num = parseInt(e.key);
      if (
        num >= 1 &&
        num <= 5 &&
        num <= questions[currentQuestionIndex].options.length
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
  }, [testStarted, currentQuestionIndex]);
  // Handle beforeunload event
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
  // Request fullscreen when test starts
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
      // Set start time when test begins
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
  const handleStartTest = (name: string) => {
    setUserName(name);
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setTestStarted(true);
      setLoading(false);
    }, 1500);
  };
  const handleSelectAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setTransitionDirection("next");
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setTransitionDirection(null);
      }, 300);
    } else {
      // If on the last question, calculate and show results
      calculateAndShowResults();
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setTransitionDirection("prev");
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev - 1);
        setTransitionDirection(null);
      }, 300);
    }
  };
  const handleEndTest = () => {
    setShowEndConfirmation(true);
  };
  const confirmEndTest = () => {
    setLoading(true);
    setTimeout(() => {
      calculateAndShowResults();
    }, 1000);
  };
  const calculateAndShowResults = () => {
    // Exit fullscreen
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch((err) => {
        console.error("Error attempting to exit fullscreen:", err);
      });
    }
    // Calculate results
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
    // Calculate score as percentage
    const score = Math.round((correctCount / questions.length) * 100);
    // Calculate time spent
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
    // Generate remarks based on score
    let remarks = "";
    if (score >= 90) remarks = "Excellent! You have mastered JavaScript!";
    else if (score >= 70)
      remarks = "Good job! You have a solid understanding of JavaScript.";
    else if (score >= 50)
      remarks = "Fair. Keep practicing to improve your JavaScript skills.";
    else
      remarks =
        "Needs improvement. Consider reviewing JavaScript fundamentals.";
    // Store results in sessionStorage
    const results = {
      userName,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      incorrectAnswers: incorrectCount,
      unanswered: unansweredCount,
      score,
      language: "JavaScript",
      timeSpent,
      remarks,
      answers: detailedAnswers,
    };
    sessionStorage.setItem("testResults", JSON.stringify(results));
    // Navigate to results page
    window.location.href = "/results";
  };
  const cancelEndTest = () => {
    setShowEndConfirmation(false);
  };
  if (loading) {
    return <LoadingOverlay />;
  }
  if (!testStarted) {
    return <TestWarningModal onAgree={handleStartTest} />;
  }
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <TestProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div
          className={`w-full transition-all duration-300 transform ${
            transitionDirection === "next"
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
      {/* <GoogleFrame /> */}
      {showEndConfirmation && (
        <EndTestConfirmation
          onConfirm={confirmEndTest}
          onCancel={cancelEndTest}
        />
      )}
    </div>
  );
};
