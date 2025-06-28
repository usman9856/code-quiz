import React from 'react';
export const LoadingOverlay: React.FC = () => {
  return <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-transparent border-b-transparent border-cyan-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-t-transparent border-b-transparent border-purple-500 rounded-full animate-spin animation-delay-150 animate-reverse"></div>
        <div className="absolute inset-4 border-4 border-t-transparent border-b-transparent border-blue-500 rounded-full animate-spin animation-delay-300"></div>
      </div>
      <p className="mt-6 text-lg text-white font-medium">Loading...</p>
      <p className="mt-2 text-sm text-gray-400">
        Preparing your test environment
      </p>
    </div>;
};