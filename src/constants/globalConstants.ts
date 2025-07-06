import { CPlusPlusIcon } from "../assets/svg/CPlusPlusIcon";
import { JavaIcon } from "../assets/svg/JavaIcon";
import { JavaScriptIcon } from "../assets/svg/JavaScriptIcon";
import { PythonIcon } from "../assets/svg/PythonIcon";
import { ReactIcon } from "../assets/svg/ReactIcon";
import { SqlIcon } from "../assets/svg/SqlIcon";

export const CODE_SAMPLES = {
    javascript: `function testKnowledge() {
  const skills = ['Logic', 'Syntax', 'Algorithms', 'Best Practices'];
  return skills.map(skill => improveSkill(skill));
}

// Start your coding journey today`,

    python: `def test_knowledge():
    skills = ["Logic", "Syntax", "Algorithms", "Best Practices"]
    return [improve_skill(skill) for skill in skills]

# Start your coding journey today`,

    java: `public List<String> testKnowledge() {
    List<String> skills = Arrays.asList("Logic", "Syntax", "Algorithms", "Best Practices");
    return skills.stream().map(skill -> improveSkill(skill)).collect(Collectors.toList());
}

// Start your coding journey today`,

    csharp: `public List<string> TestKnowledge() {
    var skills = new List<string> { "Logic", "Syntax", "Algorithms", "Best Practices" };
    return skills.Select(skill => ImproveSkill(skill)).ToList();
}

// Start your coding journey today`,
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