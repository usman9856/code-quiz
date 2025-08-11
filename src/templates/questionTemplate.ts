// Template for creating new language question sets
// Copy this file and rename it to match your language (e.g., goQuestionare.ts)

export const TEMPLATE_QUESTIONS = {
  q1: {
    question: "What is your first question about the language?",
    options: [
      "Option A - First answer choice",
      "Option B - Second answer choice", 
      "Option C - Third answer choice",
      "Option D - Fourth answer choice",
      "Option E - Fifth answer choice",
    ],
    correctAnswer: "Option B - Second answer choice", // Must exactly match one of the options above
  },
  q2: {
    question: "What is your second question?",
    options: [
      "Answer 1",
      "Answer 2", 
      "Answer 3",
      "Answer 4",
      "Answer 5",
    ],
    correctAnswer: "Answer 3",
  },
  q3: {
    question: "Your third question here?",
    options: [
      "Choice A",
      "Choice B", 
      "Choice C",
      "Choice D",
      "Choice E",
    ],
    correctAnswer: "Choice A",
  },
  q4: {
    question: "Fourth question about the programming language?",
    options: [
      "First option",
      "Second option", 
      "Third option",
      "Fourth option",
      "Fifth option",
    ],
    correctAnswer: "Third option",
  },
  q5: {
    question: "Fifth and final question?",
    options: [
      "Final option 1",
      "Final option 2", 
      "Final option 3",
      "Final option 4",
      "Final option 5",
    ],
    correctAnswer: "Final option 2",
  },
};

/* 
INSTRUCTIONS FOR USING THIS TEMPLATE:

1. Copy this file and rename it to [languagename]Questionare.ts (e.g., goQuestionare.ts, rustQuestionare.ts)

2. Replace TEMPLATE_QUESTIONS with [LANGUAGENAME]_QUESTIONS (e.g., GO_QUESTIONS, RUST_QUESTIONS)

3. Update each question object with:
   - question: Your actual question text
   - options: Array of 5 possible answers
   - correctAnswer: Must exactly match one of the options (case-sensitive)

4. You can add more questions by following the pattern (q6, q7, etc.)

5. Make sure each question has:
   ✅ A clear, specific question
   ✅ Exactly 5 options (you can have fewer, but 5 is recommended)
   ✅ One correct answer that exactly matches an option
   ✅ Options that are reasonable length (not too long)

6. Good question types:
   - Syntax questions
   - Concept explanations  
   - Code output predictions
   - Best practices
   - Language-specific features

7. After creating your questions, you'll need to:
   - Add the language to src/data/languages.json
   - Update the loadQuestions function in src/utils/languageLoader.ts
   - Create an icon component (optional, can reuse existing ones)

Example for Go language:

export const GO_QUESTIONS = {
  q1: {
    question: "What is the correct way to declare a variable in Go?",
    options: [
      "var x int = 5",
      "x := 5", 
      "int x = 5",
      "Both A and B",
      "All of the above",
    ],
    correctAnswer: "Both A and B",
  },
  // ... more questions
};
*/
