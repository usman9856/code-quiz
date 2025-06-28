import React from 'react';
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
  color
}: LanguageCardProps) => {
  return <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-gray-600">
      <div className={`p-6 ${color} bg-opacity-10 flex items-center justify-center`}>
        <div className="w-16 h-16 flex items-center justify-center">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <a href="/test" className={`mt-4 px-4 py-2 rounded-md text-sm font-medium text-white ${color} hover:bg-opacity-80 transition-colors duration-200 inline-block`}>
          Take Quiz
        </a>
      </div>
    </div>;
};