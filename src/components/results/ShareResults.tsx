import React, { useState, Component } from 'react';
import { TwitterIcon, FacebookIcon, LinkedinIcon, CopyIcon, CheckIcon } from 'lucide-react';
interface ShareResultsProps {
  score: number;
  language: string;
}
export const ShareResults: React.FC<ShareResultsProps> = ({
  score,
  language
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  const shareText = `I scored ${score}% on the ${language} coding assessment! Try it yourself at CodeQuiz.`;
  const shareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };
  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };
  const shareLinkedin = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };
  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return <div className="w-full">
      <h3 className="text-lg font-medium text-white text-center mb-4">
        Share your results
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={shareTwitter} className="p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200" aria-label="Share on Twitter">
          <TwitterIcon size={20} />
        </button>
        <button onClick={shareFacebook} className="p-3 bg-[#1877F2] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200" aria-label="Share on Facebook">
          <FacebookIcon size={20} />
        </button>
        <button onClick={shareLinkedin} className="p-3 bg-[#0A66C2] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200" aria-label="Share on LinkedIn">
          <LinkedinIcon size={20} />
        </button>
        <button onClick={copyLink} className={`p-3 ${copied ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'} text-white rounded-full transition-colors duration-200 flex items-center gap-2`} aria-label="Copy link">
          {copied ? <CheckIcon size={20} /> : <CopyIcon size={20} />}
        </button>
      </div>
      {copied && <p className="text-green-400 text-sm text-center mt-2">
          Link copied to clipboard!
        </p>}
    </div>;
};