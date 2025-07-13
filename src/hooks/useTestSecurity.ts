import { useEffect } from "react";
import { ProcessedQuestion } from "../utils/questionUtils";

interface UseTestSecurityProps {
  testStarted: boolean;
  currentQuestionIndex: number;
  questions: ProcessedQuestion[];
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
  handleSelectAnswer: (answer: string) => void;
  setStartTime: (time: number) => void;
}

export const useTestSecurity = ({
  testStarted,
  currentQuestionIndex,
  questions,
  handleNextQuestion,
  handlePreviousQuestion,
  handleSelectAnswer,
  setStartTime
}: UseTestSecurityProps) => {
  
  // Disable right-click context menu during test
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

  // Handle keyboard shortcuts and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block common shortcuts
      if (
        (e.ctrlKey && (e.key === "c" || e.key === "p" || e.key === "s")) ||
        (e.altKey && e.key === "Tab") ||
        e.key === "F12" ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
        return false;
      }
      
      // Arrow key navigation
      if (
        e.key === "ArrowRight" &&
        currentQuestionIndex < questions.length - 1
      ) {
        handleNextQuestion();
      } else if (e.key === "ArrowLeft" && currentQuestionIndex > 0) {
        handlePreviousQuestion();
      }
      
      // Number key selection (1-5)
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

  // Prevent page refresh/navigation during test
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

  // Initialize start time when test begins
  useEffect(() => {
    if (testStarted) {
      setStartTime(Date.now());
    }
  }, [testStarted, setStartTime]);
};
