import React, { useState } from "react";
import { AlertTriangleIcon } from "lucide-react";

interface TestWarningModalProps {
  onAgree: (userName: string) => void;
  onCancel?: () => void;
}

export const TestWarningModal: React.FC<TestWarningModalProps> = ({
  onAgree,
  onCancel,
}) => {
  const [userName, setUserName] = useState("");
  const [showNameError, setShowNameError] = useState(false);

  const handleStartTest = () => {
    const trimmedName = userName.trim();
    if (trimmedName) {
      onAgree(trimmedName);
    } else {
      setShowNameError(true);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    if (showNameError) setShowNameError(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 border border-gray-700 shadow-xl">
        <div className="flex items-center justify-center mb-4 text-yellow-400">
          <AlertTriangleIcon size={48} />
        </div>

        <h2 className="text-xl font-bold text-white text-center mb-4">
          Knowledge Assessment Test
        </h2>

        <div className="text-gray-300 mb-6 space-y-4">
          <p>Before you begin this knowledge assessment, please note:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>This is a self-assessment tool designed for personal learning and growth</li>
            <li>You are encouraged to research and search for answers during the test</li>
            <li>This test is not official and carries no formal accreditation or certification value</li>
            <li>The primary purpose is to help you evaluate your current knowledge level</li>
            <li>Results are intended for self-reflection and identifying areas for improvement</li>
          </ul>

          <div className="mt-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Your Name (for personal record)
            </label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            {showNameError && (
              <p className="mt-1 text-sm text-red-400">
                Please enter your name before starting the test
              </p>
            )}
          </div>

          <p className="font-medium text-yellow-400 mt-4">
            Are you ready to begin the test?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleStartTest}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-md hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            I Understand, Start Assessment
          </button>
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
