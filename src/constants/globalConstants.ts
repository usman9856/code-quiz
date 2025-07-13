import { CPlusPlusIcon } from "../assets/svg/CPlusPlusIcon";
import { JavaIcon } from "../assets/svg/JavaIcon";
import { JavaScriptIcon } from "../assets/svg/JavaScriptIcon";
import { PythonIcon } from "../assets/svg/PythonIcon";
import { ReactIcon } from "../assets/svg/ReactIcon";
import { SqlIcon } from "../assets/svg/SqlIcon";

// Import quiz questions
import { JAVASCRIPT_QUESTIONS } from "../languages/javascriptQuestionare";
import { PYTHON_QUESTIONS } from "../languages/pythonQuestionare";
import { JAVA_QUESTIONS } from "../languages/javaQuestionare";
import { CSHARP_QUESTIONS } from "../languages/csharpQuestionare";
import { REACT_QUESTIONS } from "../languages/reactQuestionare";
import { SQL_QUESTIONS } from "../languages/sqlQuestionare";
import { CPP_QUESTIONS } from "../languages/cppQuestionare";

export const CODE_SAMPLES = {
    javascript: JAVASCRIPT_QUESTIONS,
    python: PYTHON_QUESTIONS,
    java: JAVA_QUESTIONS,
    csharp: CSHARP_QUESTIONS,
    react: REACT_QUESTIONS,
    sql: SQL_QUESTIONS,
    cpp: CPP_QUESTIONS,
};


export const LANGUAGES = [{
    title: 'JavaScript',
    description: 'Test your knowledge of modern JavaScript, ES6+ features, async programming, and DOM manipulation.',
    icon: JavaScriptIcon,
    color: 'bg-yellow-500'
}, {
    title: 'Python',
    description: 'Challenge your Python skills with questions on syntax, data structures, libraries, and best practices.',
    icon: PythonIcon,
    color: 'bg-blue-500'
}, {
    title: 'Java',
    description: 'Evaluate your Java programming skills with questions on OOP concepts, collections, threading, and more.',
    icon: JavaIcon,
    color: 'bg-red-500'
}, {
    title: 'React',
    description: 'Master React concepts including hooks, state management, component lifecycle, and performance optimization.',
    icon: ReactIcon,
    color: 'bg-cyan-500'
}, {
    title: 'SQL',
    description: 'Sharpen your database skills with SQL queries, joins, indexes, and database design principles.',
    icon: SqlIcon,
    color: 'bg-green-500'
}, {
    title: 'C++',
    description: 'Test your C++ knowledge on memory management, STL, templates, and object-oriented programming.',
    icon: CPlusPlusIcon,
    color: 'bg-purple-500'
}];


export const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "Languages", path: "/languages" },
    { name: "About", path: "/about" },
    // { name: "Results", path: "/result" },
];