import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { FAQS } from '../constants/faqConstants';
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
        {FAQS.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} toggleOpen={() => toggleFaq(index)} />)}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-300 mb-8">
          If you couldn't find the answer to your question, feel free to
          contact us directly.
        </p>
        <a href="https://github.com/usman9856/code-quiz/issues" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-105">
          Create Issue on GitHub
        </a>
      </div>
    </div>
  </div>;
};