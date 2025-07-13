/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Quiz app specific colors
        quiz: {
          // Primary backgrounds
          'bg-primary': '#111827', // gray-900
          'bg-secondary': '#1f2937', // gray-800
          'bg-tertiary': '#374151', // gray-700
          'bg-quaternary': '#4b5563', // gray-600
          
          // Text colors
          'text-primary': '#ffffff',
          'text-secondary': '#d1d5db', // gray-300
          'text-muted': '#9ca3af', // gray-400
          
          // Border colors
          'border-primary': '#374151', // gray-700
          'border-secondary': '#4b5563', // gray-600
          
          // Score colors
          'score-excellent': {
            'from': '#10b981', // emerald-500
            'to': '#059669'    // emerald-600
          },
          'score-good': {
            'from': '#22d3ee', // cyan-400
            'to': '#0891b2'   // cyan-600
          },
          'score-fair': {
            'from': '#fbbf24', // amber-400
            'to': '#f59e0b'   // amber-500
          },
          'score-poor': {
            'from': '#f87171', // red-400
            'to': '#ef4444'   // red-500
          },
          
          // Status colors
          'correct': '#10b981',   // emerald-500
          'incorrect': '#ef4444', // red-500
          'unanswered': '#fbbf24', // amber-400
          'info': '#3b82f6',      // blue-500
          
          // Interactive colors
          'button-primary': {
            'from': '#06b6d4', // cyan-500
            'to': '#8b5cf6'   // violet-500
          },
          'button-secondary': '#374151', // gray-700
          'button-hover': '#4b5563',     // gray-600
          
          // Confetti colors
          'confetti': {
            'cyan': '#00d4ff',
            'magenta': '#ff00d4', 
            'gold': '#ffd700',
            'green': '#00ff88',
            'orange': '#ff4500'
          }
        }
      },
    },
  },
  plugins: [],
};
