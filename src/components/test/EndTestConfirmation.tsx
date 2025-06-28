import React from 'react';
import { AlertCircleIcon } from 'lucide-react';
interface EndTestConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}
export const EndTestConfirmation: React.FC<EndTestConfirmationProps> = ({
  onConfirm,
  onCancel
}) => {
  return <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 border border-gray-700 shadow-xl">
        <div className="flex items-center justify-center mb-4 text-red-500">
          <AlertCircleIcon size={48} />
        </div>
        <h2 className="text-xl font-bold text-white text-center mb-4">
          End Test Confirmation
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Are you sure you want to end this test? Your progress will be saved
          and you'll be taken to the results page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onConfirm} className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-200">
            Yes, End Test
          </button>
          <button onClick={onCancel} className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors duration-200">
            Continue Test
          </button>
        </div>
      </div>
    </div>;
};