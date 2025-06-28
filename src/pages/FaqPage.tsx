import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}
const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen
}) => {
  return <div className="border border-gray-700 rounded-lg mb-4 overflow-hidden">
      <button className="w-full flex items-center justify-between p-5 bg-gray-800 hover:bg-gray-750 transition-colors duration-200 text-left" onClick={toggleOpen} aria-expanded={isOpen}>
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? <ChevronUpIcon className="h-5 w-5 text-cyan-400" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400" />}
        </span>
      </button>
      {isOpen && <div className="p-5 bg-gray-800 border-t border-gray-700">
          <div className="text-gray-300">{answer}</div>
        </div>}
    </div>;
};
export const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [{
    question: 'What is CodeQuiz?',
    answer: <p>
          CodeQuiz is an interactive platform designed to help developers test
          and improve their coding skills through quizzes and assessments. Our
          platform covers multiple programming languages and frameworks,
          allowing users to evaluate their knowledge, identify areas for
          improvement, and track their progress over time.
        </p>
  }, {
    question: 'How do the quizzes work?',
    answer: <div>
          <p className="mb-3">
            Our quizzes consist of multiple-choice questions that test your
            knowledge of programming concepts, syntax, best practices, and
            problem-solving skills. Each quiz is focused on a specific language
            or framework.
          </p>
          <p>
            When you start a quiz, you'll be presented with questions one at a
            time. After completing the quiz, you'll receive detailed results
            showing your score, correct and incorrect answers, and explanations
            for each question.
          </p>
        </div>
  }, {
    question: 'Are the quizzes timed?',
    answer: <p>
          Yes, all quizzes are timed to simulate real-world pressure and help
          you improve your speed. However, the timer is flexible enough to allow
          you to think through each question properly. The time spent on each
          quiz is recorded and shown in your results, allowing you to track
          improvements in your speed over time.
        </p>
  }, {
    question: 'What programming languages are covered?',
    answer: <div>
          <p className="mb-3">
            We currently offer quizzes for the following languages and
            frameworks:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>React</li>
            <li>SQL</li>
            <li>TypeScript</li>
            <li>Ruby</li>
            <li>PHP</li>
            <li>Go</li>
            <li>Swift</li>
            <li>Kotlin</li>
            <li>Rust</li>
          </ul>
          <p className="mt-3">
            We're constantly adding new languages and updating our question
            banks to keep up with the latest developments in technology.
          </p>
        </div>
  }, {
    question: 'How difficult are the quizzes?',
    answer: <p>
          Our quizzes range from beginner to advanced levels. Each language has
          questions of varying difficulty, allowing users of all skill levels to
          benefit from our platform. As you improve, you can challenge yourself
          with more advanced quizzes to continue your learning journey.
        </p>
  }, {
    question: 'Can I retake quizzes?',
    answer: <p>
          Absolutely! You can retake any quiz as many times as you want. We
          encourage users to retake quizzes to reinforce their learning and
          track their improvement over time. Each attempt will generate a new
          set of questions from our extensive question bank to ensure you're
          always being challenged.
        </p>
  }, {
    question: 'How can I track my progress?',
    answer: <p>
          After completing each quiz, you'll receive detailed results showing
          your score, correct and incorrect answers, and time spent. You can
          download these results as PDF or text files for your records. In the
          future, we plan to add a dashboard feature that will allow you to
          visualize your progress across different languages and topics over
          time.
        </p>
  }, {
    question: 'Is CodeQuiz free to use?',
    answer: <div>
          <p className="mb-3">CodeQuiz offers both free and premium content:</p>
          <p className="mb-3">
            <strong className="text-white">Free Tier:</strong> Access to basic
            quizzes in all languages, with limited features.
          </p>
          <p>
            <strong className="text-white">Premium Tier:</strong> Full access to
            all quizzes, advanced analytics, personalized learning paths, and
            additional features to enhance your learning experience.
          </p>
        </div>
  }, {
    question: 'How are the questions created and validated?',
    answer: <p>
          Our questions are created by a team of experienced developers and
          educators who specialize in different programming languages and
          frameworks. Each question goes through a rigorous validation process
          to ensure accuracy and relevance. We also regularly update our
          question bank based on user feedback and changes in technology.
        </p>
  }, {
    question: 'Can I suggest new features or report issues?',
    answer: <p>
          Yes! We welcome user feedback and suggestions. You can contact us
          through the feedback form on our website or email us directly at
          support@codequiz.com. We're constantly working to improve the platform
          and value input from our community.
        </p>
  }];
  return <div className="w-full bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Frequently Asked</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Find answers to common questions about CodeQuiz and how it can help
            you improve your coding skills.
          </p>
        </div>
        <div className="mt-12">
          {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} toggleOpen={() => toggleFaq(index)} />)}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-300 mb-8">
            If you couldn't find the answer to your question, feel free to
            contact us directly.
          </p>
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-105">
            Contact Support
          </a>
        </div>
      </div>
    </div>;
};