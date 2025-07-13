import { CODE_SAMPLES } from "../constants/globalConstants";
import { getLanguageDisplayName } from "./languageUtils";

// Types for better type safety
export interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ProcessedQuestion extends QuestionData {
  id: string;
}

export interface UserAnswer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface TestResults {
  userName: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  score: number;
  language: string;
  timeSpent: string;
  remarks: string;
  answers: UserAnswer[];
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Process and validate questions for a given language
 */
export const processQuestionsForLanguage = (
  language: keyof typeof CODE_SAMPLES,
  totalQuestions: number = 5
): ProcessedQuestion[] => {
  try {
    const fullQuestionSet = CODE_SAMPLES[language];
    
    if (!fullQuestionSet || typeof fullQuestionSet !== 'object') {
      console.error(`No questions found for language: ${language}`);
      return [];
    }

    const questionEntries = Object.entries(fullQuestionSet);
    
    if (questionEntries.length === 0) {
      console.error(`Empty question set for language: ${language}`);
      return [];
    }

    // Shuffle questions and select the required number
    const shuffledQuestions = shuffleArray(questionEntries)
      .slice(0, Math.min(totalQuestions, questionEntries.length));

    // Process questions with validation
    const processedQuestions = shuffledQuestions.map(([id, questionData]) => {
      const q = questionData as QuestionData;
      
      // Validate question structure
      if (!q.question || !Array.isArray(q.options) || !q.correctAnswer) {
        console.error(`Invalid question structure for ${id}:`, q);
        return null;
      }

      // Validate that correctAnswer exists in options
      if (!q.options.includes(q.correctAnswer)) {
        console.error(`Correct answer "${q.correctAnswer}" not found in options for ${id}`);
        return null;
      }

      return {
        id,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer
      } as ProcessedQuestion;
    }).filter(Boolean) as ProcessedQuestion[];

    return processedQuestions;
    
  } catch (error) {
    console.error('Error processing questions:', error);
    return [];
  }
};

/**
 * Calculate test results based on user answers
 */
export const calculateTestResults = (
  questions: ProcessedQuestion[],
  answers: Record<number, string>,
  startTime: number | null,
  language: string,
  userName: string = ""
): TestResults => {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  
  const detailedAnswers: UserAnswer[] = questions.map((question, index) => {
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

  const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  
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

  return {
    userName,
    totalQuestions: questions.length,
    correctAnswers: correctCount,
    incorrectAnswers: incorrectCount,
    unanswered: unansweredCount,
    score,
    language,
    timeSpent,
    remarks,
    answers: detailedAnswers,
  };
};

/**
 * Get available languages
 */
export const getAvailableLanguages = (): string[] => {
  return Object.keys(CODE_SAMPLES);
};

/**
 * Check if a language has questions available
 */
export const hasQuestionsForLanguage = (language: string): boolean => {
  const questionSet = CODE_SAMPLES[language as keyof typeof CODE_SAMPLES];
  return questionSet && typeof questionSet === 'object' && Object.keys(questionSet).length > 0;
};
