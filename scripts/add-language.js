#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

function toPascalCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

function toUpperSnakeCase(str) {
  return str.replace(/\s+/g, '_').replace(/[A-Z]/g, letter => `_${letter}`).replace(/^_/, '').toUpperCase();
}

function createQuestionFile(languageName, languageKey) {
  const constantName = toUpperSnakeCase(languageName);
  const template = `export const ${constantName}_QUESTIONS = {
  q1: {
    question: "What is the correct way to declare a variable in ${languageName}?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
      "Option E",
    ],
    correctAnswer: "Option B", // Change this to the correct answer
  },
  q2: {
    question: "Which of the following is a key feature of ${languageName}?",
    options: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
    ],
    correctAnswer: "Feature 2", // Change this to the correct answer
  },
  q3: {
    question: "What is the output of this ${languageName} code?",
    options: [
      "Output A",
      "Output B",
      "Output C",
      "Output D",
      "Output E",
    ],
    correctAnswer: "Output A", // Change this to the correct answer
  },
  q4: {
    question: "Which best practice applies to ${languageName} development?",
    options: [
      "Practice A",
      "Practice B",
      "Practice C",
      "Practice D",
      "Practice E",
    ],
    correctAnswer: "Practice C", // Change this to the correct answer
  },
  q5: {
    question: "What is the purpose of this ${languageName} concept?",
    options: [
      "Purpose A",
      "Purpose B",
      "Purpose C",
      "Purpose D",
      "Purpose E",
    ],
    correctAnswer: "Purpose B", // Change this to the correct answer
  },
};

// TODO: Replace the placeholder questions above with real ${languageName} questions
// Make sure each correctAnswer exactly matches one of the options
`;

  const filePath = path.join(__dirname, '..', 'src', 'languages', `${languageKey}Questionare.ts`);
  fs.writeFileSync(filePath, template);
  console.log(`✅ Created question file: src/languages/${languageKey}Questionare.ts`);
}

function updateLanguagesJson(languageKey, languageName, description, color, iconName) {
  const jsonPath = path.join(__dirname, '..', 'src', 'data', 'languages.json');
  const languagesData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  languagesData[languageKey] = {
    title: languageName,
    description: description,
    color: color,
    iconName: iconName,
    enabled: true
  };
  
  fs.writeFileSync(jsonPath, JSON.stringify(languagesData, null, 2));
  console.log(`✅ Updated languages.json with ${languageName} configuration`);
}

function updateLanguageLoader(languageKey, languageName) {
  const loaderPath = path.join(__dirname, '..', 'src', 'utils', 'languageLoader.ts');
  const loaderContent = fs.readFileSync(loaderPath, 'utf8');
  
  const constantName = toUpperSnakeCase(languageName);
  const importStatement = `        const { ${constantName}_QUESTIONS } = await import('../languages/${languageKey}Questionare');\n        return ${constantName}_QUESTIONS;`;
  
  // Add the case before the default case
  const updatedContent = loaderContent.replace(
    /      default:\n        console\.warn/,
    `      case '${languageKey}':\n        ${importStatement}\n      default:\n        console.warn`
  );
  
  fs.writeFileSync(loaderPath, updatedContent);
  console.log(`✅ Updated languageLoader.ts with ${languageName} import`);
}

function createIconFile(languageName, iconName) {
  const iconTemplate = `export const ${iconName} = () => {
  return (
    <div>
      <svg 
        viewBox="0 0 24 24" 
        className="w-12 h-12 text-blue-400 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Replace this with your actual SVG path */}
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white">
          ${languageName.charAt(0).toUpperCase()}
        </text>
      </svg>
    </div>
  );
};

// TODO: Replace the placeholder SVG above with the actual ${languageName} icon
// You can find SVG icons at:
// - https://simpleicons.org/
// - https://devicons.github.io/devicon/
// - https://lucide.dev/
`;

  const iconPath = path.join(__dirname, '..', 'src', 'assets', 'svg', `${iconName}.tsx`);
  fs.writeFileSync(iconPath, iconTemplate);
  console.log(`✅ Created icon file: src/assets/svg/${iconName}.tsx`);
}

function updateIconRegistry(iconName) {
  const loaderPath = path.join(__dirname, '..', 'src', 'utils', 'languageLoader.ts');
  const loaderContent = fs.readFileSync(loaderPath, 'utf8');
  
  // Add import
  const importLine = `import { ${iconName} } from "../assets/svg/${iconName}";`;
  const updatedWithImport = loaderContent.replace(
    /(import { SqlIcon } from "..\/assets\/svg\/SqlIcon";)/,
    `$1\n${importLine}`
  );
  
  // Add to registry
  const registryEntry = `  ${iconName},`;
  const finalContent = updatedWithImport.replace(
    /(  CPlusPlusIcon,)/,
    `$1\n${registryEntry}`
  );
  
  fs.writeFileSync(loaderPath, finalContent);
  console.log(`✅ Updated icon registry with ${iconName}`);
}

async function main() {
  console.log('🚀 Add New Language to Code Quiz\n');
  
  try {
    const languageName = await askQuestion('Language name (e.g., "Go", "Rust", "Ruby"): ');
    if (!languageName) {
      console.log('❌ Language name is required');
      process.exit(1);
    }
    
    const languageKey = languageName.toLowerCase().replace(/\s+/g, '');
    console.log(`📝 Language key will be: ${languageKey}`);
    
    const description = await askQuestion(`Description (e.g., "Test your ${languageName} knowledge..."): `) 
      || `Test your ${languageName} programming skills and knowledge.`;
    
    const color = await askQuestion('Tailwind color class (e.g., "bg-green-500"): ') || 'bg-gray-500';
    
    const iconName = await askQuestion(`Icon component name (e.g., "${languageName}Icon"): `) 
      || `${languageName}Icon`;
    
    const createIcon = await askQuestion('Create a placeholder icon file? (y/n): ');
    
    console.log('\n🔧 Creating files...\n');
    
    // Create question file
    createQuestionFile(languageName, languageKey);
    
    // Update languages.json
    updateLanguagesJson(languageKey, languageName, description, color, iconName);
    
    // Update language loader
    updateLanguageLoader(languageKey, languageName);
    
    // Create icon file if requested
    if (createIcon.toLowerCase() === 'y') {
      createIconFile(languageName, iconName);
      updateIconRegistry(iconName);
    }
    
    console.log('\n🎉 Successfully added', languageName, 'to the quiz!');
    console.log('\n📋 Next steps:');
    console.log(`1. Edit src/languages/${languageKey}Questionare.ts with real questions`);
    console.log(`2. ${createIcon.toLowerCase() === 'y' ? `Update src/assets/svg/${iconName}.tsx with the actual icon` : `Create an icon component and update the icon registry`}`);
    console.log('3. Test the new language in the app');
    console.log('4. Run npm run dev to see your changes');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

main();
