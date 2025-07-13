import React from "react";
import { CODE_SAMPLES } from "../constants/globalConstants";
import { GlobalStore } from "../store/GlobalStore";
import { useNavigate } from "react-router-dom";
import { TestWarningModal } from "./test/TestWarningModal";
import { getLanguageKeyFromDisplayName } from "../utils/languageUtils";


interface LanguageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const LanguageCard = ({
  title,
  description,
  icon,
  color,
}: LanguageCardProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [testStarting, setTestStarting] = React.useState(false);
  const setSelectedLang = GlobalStore((state) => state.setSelectedLang);
  const testStarted = GlobalStore((state) => state.testStarted);
  const setTestStarted = GlobalStore((state) => state.setTestStarted);
  const setUserName = GlobalStore((state) => state.setUserName);
  const setLoading = GlobalStore((state) => state.setLoading);
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Use the language utility function to get the correct key
    const langKey = getLanguageKeyFromDisplayName(title);

    if (langKey && langKey in CODE_SAMPLES) {
      setSelectedLang(langKey);
      console.log(`Selected language: ${title} (${langKey})`);
      setShowModal(true);
    } else {
      console.warn(`Unknown language: ${title}`);
    }
  };

  const handleStartTest = (name: string) => {
    console.log(`Starting test for user: ${name}`);
    
    setUserName(name);
    setLoading(true);

    setTimeout(() => {
      setTestStarted(true);
      setLoading(false);
      navigate("/test");
    }, 1500);
  };


  if (showModal) {
    return (
      <TestWarningModal 
        onAgree={(name) => handleStartTest(name)}
        onCancel={() => setShowModal(false)}
      />
    );
  }
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-gray-600"
    >
      <div
        className={`p-6 ${color} bg-opacity-10 flex items-center justify-center`}
      >
        <div className="w-16 h-16 flex items-center justify-center">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <div
          className={`mt-4 px-4 py-2 rounded-md text-sm font-medium text-white ${color} hover:bg-opacity-80 transition-colors duration-200 inline-block cursor-pointer`}
        >
          Take Quiz
        </div>
      </div>
    </div>
  );
};
