export const REACT_QUESTIONS = {
  q1: {
    question: "What is the correct way to create a functional component in React?",
    options: [
      "function MyComponent() { return <div>Hello</div>; }",
      "const MyComponent = () => <div>Hello</div>",
      "React.createComponent(() => <div>Hello</div>)",
      "Both A and B",
      "None of the above",
    ],
    correctAnswer: "Both A and B",
  },
  q2: {
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer", "useMemo"],
    correctAnswer: "useState",
  },
  q3: {
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight copy of the actual DOM",
      "A new type of DOM element",
      "A debugging tool",
      "A server-side DOM",
      "A mobile DOM",
    ],
    correctAnswer: "A lightweight copy of the actual DOM",
  },
  q4: {
    question: "Which method is used to update the state in class components?",
    options: ["updateState()", "setState()", "changeState()", "modifyState()", "state.update()"],
    correctAnswer: "setState()",
  },
  q5: {
    question: "What is JSX?",
    options: [
      "A JavaScript extension",
      "A syntax extension for JavaScript",
      "A new programming language",
      "A React library",
      "A CSS framework",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
};
