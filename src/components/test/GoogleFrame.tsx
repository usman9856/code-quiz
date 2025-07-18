import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from 'lucide-react';
export const GoogleFrame: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <div className={`w-full bg-gray-800 border-t border-gray-700 transition-all duration-300 ${isExpanded ? 'h-64' : 'h-12'}`}>
      <div className="flex items-center justify-between px-4 h-12 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <SearchIcon size={16} className="text-gray-400 mr-2" />
          <span className="text-gray-300 font-medium">Search Google</span>
        </div>
        <div>
          {isExpanded ? <ChevronDownIcon size={20} className="text-gray-400" /> : <ChevronUpIcon size={20} className="text-gray-400" />}
        </div>
      </div>
      {isExpanded && <div className="h-52 p-2">
          <iframe src="https://www.google.com" title="Google Search" className="w-full h-full rounded border border-gray-700" sandbox="allow-same-origin allow-scripts allow-forms" />
        </div>}
    </div>;
};