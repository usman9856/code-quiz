export const CPP_QUESTIONS = {
  q1: {
    question: "Which of the following is NOT a valid C++ data type?",
    options: [
      "int",
      "float",
      "boolean",
      "char",
      "double",
    ],
    correctAnswer: "boolean",
  },
  q2: {
    question: "What is the correct way to declare a pointer in C++?",
    options: [
      "int ptr;",
      "int *ptr;",
      "int &ptr;",
      "pointer int ptr;",
      "int ptr*;",
    ],
    correctAnswer: "int *ptr;",
  },
  q3: {
    question: "Which operator is used to access the value pointed to by a pointer?",
    options: ["*", "&", "->", ".", "::"],
    correctAnswer: "*",
  },
  q4: {
    question: "What does the 'new' operator do in C++?",
    options: [
      "Creates a new variable",
      "Allocates memory dynamically",
      "Initializes a variable",
      "Declares a pointer",
      "Defines a function",
    ],
    correctAnswer: "Allocates memory dynamically",
  },
  q5: {
    question: "Which of the following is used to prevent memory leaks in C++?",
    options: [
      "Using 'new' without 'delete'",
      "Using 'delete' after 'new'",
      "Using only stack allocation",
      "Using garbage collection",
      "Using smart pointers",
    ],
    correctAnswer: "Using 'delete' after 'new'",
  },
};
