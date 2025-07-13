import { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStore } from "../store/GlobalStore";
import { 
  processQuestionsForLanguage, 
  calculateTestResults,
  ProcessedQuestion 
} from "../utils/questionUtils";
import { getLanguageDisplayName } from "../utils/languageUtils";

export const useTestLogic = () => {
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
  const userName = GlobalStore((state) => state.userName);

  const TOTAL_QUESTIONS = 5;
  
  // Process questions using the utility function (only when test starts)
  const questions = useMemo(() => {
    if (!testStarted) return [];
    console.log(`Processing questions for language: ${selectedLanguage}`);
    const processedQuestions = processQuestionsForLanguage(selectedLanguage, TOTAL_QUESTIONS);
    console.log(`Processed ${processedQuestions.length} questions`);
    return processedQuestions;
  }, [selectedLanguage, testStarted]);

  // Get display name for selected language
  const selectedLanguageDisplayName = useMemo(() => {
    return getLanguageDisplayName(selectedLanguage);
  }, [selectedLanguage]);

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

    const results = calculateTestResults(
      questions,
      answers,
      startTime,
      selectedLanguageDisplayName,
      userName
    );

    sessionStorage.setItem("testResults", JSON.stringify(results));
    navigate("/results");
  }, [questions, answers, startTime, selectedLanguageDisplayName, userName, navigate]);

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

  const handleEndTest = useCallback(() => {
    setShowEndConfirmation(true);
  }, []);

  const confirmEndTest = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      calculateAndShowResults();
    }, 1000);
  }, [calculateAndShowResults]);

  const cancelEndTest = useCallback(() => {
    setShowEndConfirmation(false);
  }, []);

  // Current question data
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex] || "";

  // Navigation states
  const isPreviousDisabled = currentQuestionIndex === 0;
  const isNextDisabled = currentQuestionIndex === questions.length - 1;

  return {
    // State
    showEndConfirmation,
    currentQuestionIndex,
    answers,
    startTime,
    loading,
    transitionDirection,
    testStarted,
    selectedLanguage,
    selectedLanguageDisplayName,
    questions,
    currentQuestion,
    currentAnswer,
    isPreviousDisabled,
    isNextDisabled,
    
    // Actions
    handleSelectAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleEndTest,
    confirmEndTest,
    cancelEndTest,
    setStartTime,
    setLoading
  };
};
