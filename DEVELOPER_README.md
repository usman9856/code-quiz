# Code Quiz Application - Developer Guide

## 📖 Overview

This is a React TypeScript quiz application that allows users to test their knowledge of different programming languages. The application features a modular architecture that makes it easy to add new languages and questions.

## 🏗️ Architecture Overview

### Key Components
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Language System**: JSON-based configuration with dynamic loading

### Folder Structure
```
src/
├── components/           # Reusable UI components
├── data/                # Configuration files
│   └── languages.json   # Language configurations (NEW)
├── languages/           # Question files for each language
├── utils/               # Utility functions
│   ├── languageLoader.ts # Dynamic language loading (NEW)
│   └── questionUtils.ts  # Question processing utilities
├── templates/           # Templates for new languages (NEW)
└── assets/svg/          # Icon components
```

---

## 🚀 Adding a New Language (Simplified Process)

### Step 1: Create Questions File

1. Copy the template file:
   ```bash
   cp src/templates/questionTemplate.ts src/languages/yourLanguageQuestionare.ts
   ```

2. Edit the new file and replace the template with your questions:
   ```typescript
   // Example: src/languages/goQuestionare.ts
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
     q2: {
       question: "Which keyword is used to create a goroutine?",
       options: ["async", "go", "thread", "routine", "parallel"],
       correctAnswer: "go",
     },
     // Add more questions...
   };
   ```

### Step 2: Add Language Configuration

Edit `src/data/languages.json` and add your language:

```json
{
  "go": {
    "title": "Go",
    "description": "Test your knowledge of Go programming language, concurrency, and best practices.",
    "color": "bg-cyan-600",
    "iconName": "GoIcon",
    "enabled": true
  }
}
```

### Step 3: Update the Language Loader

Edit `src/utils/languageLoader.ts` and add your language to the `loadQuestions` function:

```typescript
export const loadQuestions = async (languageKey: string): Promise<QuestionSet | null> => {
  try {
    switch (languageKey.toLowerCase()) {
      // ... existing cases
      case 'go':
        const { GO_QUESTIONS } = await import('../languages/goQuestionare');
        return GO_QUESTIONS;
      default:
        console.warn(`No questions found for language: ${languageKey}`);
        return null;
    }
  } catch (error) {
    console.error(`Error loading questions for ${languageKey}:`, error);
    return null;
  }
};
```

### Step 4: Create an Icon (Optional)

1. Create `src/assets/svg/GoIcon.tsx`:
   ```typescript
   export const GoIcon = () => {
     return (
       <div>
         <svg viewBox="0 0 24 24" className="w-12 h-12 text-cyan-400 fill-current">
           {/* Your SVG path here */}
         </svg>
       </div>
     );
   };
   ```

2. Add it to the icon registry in `src/utils/languageLoader.ts`:
   ```typescript
   import { GoIcon } from "../assets/svg/GoIcon";
   
   const ICON_REGISTRY: Record<string, React.ComponentType> = {
     // ... existing icons
     GoIcon,
   };
   ```

### Step 5: Test Your Language

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the languages page and verify your new language appears

3. Take a test quiz to ensure questions load correctly

---

## 📝 Question Writing Guidelines

### Question Structure
Each question must have:
- `question`: Clear, specific question text
- `options`: Array of 5 possible answers (recommended)
- `correctAnswer`: Must exactly match one option (case-sensitive)

### Best Practices
✅ **Good Questions:**
- Test specific language features
- Have clear, unambiguous answers
- Cover different difficulty levels
- Test practical knowledge

❌ **Avoid:**
- Ambiguous questions
- Trick questions
- Questions with multiple correct answers
- Overly long options

### Example Question Types

**1. Syntax Questions:**
```typescript
{
  question: "What is the correct way to declare a constant in JavaScript?",
  options: [
    "const PI = 3.14;",
    "constant PI = 3.14;",
    "let PI = 3.14;",
    "var PI = 3.14;",
    "final PI = 3.14;"
  ],
  correctAnswer: "const PI = 3.14;"
}
```

**2. Concept Questions:**
```typescript
{
  question: "What is closure in JavaScript?",
  options: [
    "A function that has access to variables in its outer scope",
    "A way to close a program",
    "A type of loop",
    "A method to hide code",
    "A debugging technique"
  ],
  correctAnswer: "A function that has access to variables in its outer scope"
}
```

**3. Output Prediction:**
```typescript
{
  question: "What is the output of: console.log(typeof null)?",
  options: [
    "null",
    "object", 
    "undefined",
    "string",
    "boolean"
  ],
  correctAnswer: "object"
}
```

---

## 🛠️ Configuration Options

### Language Configuration (languages.json)

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Display name | "Go" |
| `description` | Brief description for UI | "Test your Go knowledge..." |
| `color` | Tailwind CSS background color | "bg-cyan-600" |
| `iconName` | Icon component name | "GoIcon" |
| `enabled` | Whether language is available | true/false |

### Available Colors
Use any Tailwind CSS background color:
- `bg-red-500`, `bg-blue-500`, `bg-green-500`
- `bg-yellow-500`, `bg-purple-500`, `bg-pink-500`
- `bg-indigo-500`, `bg-cyan-500`, `bg-gray-500`

---

## 🧪 Testing Your Changes

### Manual Testing Checklist
- [ ] Language appears on the languages page
- [ ] Language icon displays correctly
- [ ] Quiz starts when clicking on language card
- [ ] All questions load properly
- [ ] Correct answers are validated properly
- [ ] Results page shows correct score
- [ ] No console errors

### Running Tests
```bash
# Lint your code
npm run lint

# Format your code
npm run format

# Build for production (to catch TypeScript errors)
npm run build
```

---

## 🎨 Customization

### Adding Custom Icons
1. Create SVG component in `src/assets/svg/`
2. Import and register in `languageLoader.ts`
3. Reference by name in `languages.json`

### Modifying Quiz Behavior
- **Number of questions**: Modify `totalQuestions` parameter in `processQuestionsForLanguage`
- **Time limits**: Add timer logic in test components
- **Scoring**: Modify `calculateTestResults` function

### Styling Changes
- **Colors**: Update Tailwind classes in `languages.json`
- **Layout**: Modify components in `src/components/`
- **Theme**: Update global styles in `src/index.css`

---

## 🚫 Common Mistakes to Avoid

1. **Mismatched Answers**: Ensure `correctAnswer` exactly matches an option
2. **Missing Imports**: Update `languageLoader.ts` when adding new languages
3. **Invalid JSON**: Validate `languages.json` syntax
4. **Case Sensitivity**: Language keys should be lowercase
5. **Missing Icons**: Either create an icon or reuse existing ones

---

## 📁 File Templates

### New Language Questionnaire Template
```typescript
// src/languages/[language]Questionare.ts
export const [LANGUAGE]_QUESTIONS = {
  q1: {
    question: "Your question here?",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5",
    ],
    correctAnswer: "Option 2",
  },
  // Add more questions...
};
```

### Icon Component Template
```typescript
// src/assets/svg/[Language]Icon.tsx
export const [Language]Icon = () => {
  return (
    <div>
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[color]-400 fill-current">
        {/* SVG path */}
      </svg>
    </div>
  );
};
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/add-golang`
3. Follow the steps above to add your language
4. Test thoroughly
5. Commit your changes: `git commit -am 'Add Golang quiz'`
6. Push to the branch: `git push origin feature/add-golang`
7. Create a Pull Request

---

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Verify all files are properly imported
3. Ensure JSON syntax is valid
4. Review this guide for missed steps

---

## 🎯 Quick Start Summary

To add a new language:

1. **Copy template** → `src/templates/questionTemplate.ts`
2. **Add questions** → Create `src/languages/[lang]Questionare.ts`
3. **Configure language** → Add to `src/data/languages.json`
4. **Update loader** → Add case in `src/utils/languageLoader.ts`
5. **Test** → Run app and verify everything works

That's it! Your new language quiz is ready. 🎉
