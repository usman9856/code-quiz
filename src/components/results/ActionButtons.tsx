import React, { createElement } from 'react';
import { DownloadIcon, RefreshCwIcon, CodeIcon, FileTextIcon } from 'lucide-react';
import { generatePDF } from '../../utils/PDFGenerator';
interface Answer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}
interface ActionButtonsProps {
  language: string;
  answers: Answer[];
  userName: string;
  score: number;
  timeSpent: string;
  remarks: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
}
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  language,
  answers,
  userName,
  score,
  timeSpent,
  remarks,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  unanswered
}) => {
  const downloadResults = () => {
    // Create a formatted text content for the results
    const content = `
${language} Assessment Results
Name: ${userName || 'Anonymous'}
Score: ${score}%
Time Spent: ${timeSpent}
Remarks: ${remarks}
Questions Summary:
- Total Questions: ${totalQuestions}
- Correct Answers: ${correctAnswers}
- Incorrect Answers: ${incorrectAnswers}
- Unanswered: ${unanswered}
${answers.map((answer, index) => `
Question ${index + 1}: ${answer.question}
Your Answer: ${answer.userAnswer || 'No answer provided'}
Correct Answer: ${answer.correctAnswer}
Result: ${answer.isCorrect ? 'Correct' : 'Incorrect'}
`).join('\n')}
    `.trim();
    // Create a Blob with the content
    const blob = new Blob([content], {
      type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    // Create a link and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${language.toLowerCase()}_assessment_results.txt`;
    document.body.appendChild(a);
    a.click();
    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  const downloadPDF = () => {
    generatePDF({
      userName,
      language,
      score,
      timeSpent,
      remarks,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      unanswered,
      answers
    });
  };
  const handleRetakeTest = () => {
    window.location.href = '/test';
  };
  const handleTryAnotherLanguage = () => {
    window.location.href = '/';
  };
  return <div className="w-full flex flex-col md:flex-row justify-center gap-4 flex-wrap">
      <button onClick={downloadResults} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
        <DownloadIcon size={18} className="mr-2" />
        Download as Text
      </button>
      <button onClick={downloadPDF} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
        <FileTextIcon size={18} className="mr-2" />
        Download as PDF
      </button>
      <button onClick={handleRetakeTest} className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
        <RefreshCwIcon size={18} className="mr-2" />
        Retake Test
      </button>
      <button onClick={handleTryAnotherLanguage} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
        <CodeIcon size={18} className="mr-2" />
        Try Another Language
      </button>
    </div>;
};