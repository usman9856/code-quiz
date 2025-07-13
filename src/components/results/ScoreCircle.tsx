import React, { useEffect, useState } from 'react';
interface ScoreCircleProps {
  score: number;
  colorClass: string;
  onAnimationComplete: () => void;
}
export const ScoreCircle: React.FC<ScoreCircleProps> = ({
  score,
  colorClass,
  onAnimationComplete
}) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const size = 220;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    let timer: number;
    const animateScore = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      const nextScore = Math.floor(progressRatio * score);
      const nextProgress = progressRatio * score;

      setDisplayScore(nextScore);
      setAnimatedProgress(nextProgress);

      if (progress < duration) {
        timer = requestAnimationFrame(animateScore);
      } else {
        setDisplayScore(score);
        setAnimatedProgress(score);
        onAnimationComplete();
      }
    };
    timer = requestAnimationFrame(animateScore);
    return () => {
      cancelAnimationFrame(timer);
    };
  }, [score, onAnimationComplete]);
  return <div className="relative flex items-center justify-center mb-10 mt-4">
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle cx={size / 2} cy={size / 2} r={radius} fill="transparent" stroke="#374151" // gray-700
        strokeWidth={strokeWidth} />
      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={`url(#${colorClass.replace(/\s+/g, '-')})`}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (animatedProgress / 100) * circumference}
        strokeLinecap="round"
      />
      {/* Gradient definition */}
      <defs>
        <linearGradient id={colorClass.replace(/\s+/g, '-')} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorClass.includes('green') ? '#10B981' : colorClass.includes('cyan') ? '#22D3EE' : colorClass.includes('yellow') ? '#FBBF24' : '#F87171'} />
          <stop offset="100%" stopColor={colorClass.includes('green') ? '#059669' : colorClass.includes('blue') ? '#3B82F6' : colorClass.includes('orange') ? '#F97316' : '#EF4444'} />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute flex flex-col items-center justify-center">
      <span className="text-6xl font-bold text-white">{displayScore}%</span>
      <span className="text-gray-300 text-lg mt-1">Score</span>
    </div>
  </div>;
};