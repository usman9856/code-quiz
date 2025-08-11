# 🧠 Code Quiz Application

**Version:** 1.1.0  
_Last updated: January 2025_

Test your programming knowledge with our interactive quiz application! Challenge yourself with questions from multiple programming languages and track your progress.

## 🚀 Features

### 🎯 **Multi-Language Support**
Currently supporting quizzes for:
- **JavaScript** - Modern JS, ES6+, async programming
- **Python** - Syntax, data structures, best practices  
- **Java** - OOP concepts, collections, threading
- **React** - Hooks, state management, lifecycle
- **SQL** - Queries, joins, database design
- **C++** - Memory management, STL, templates
- **C#** - OOP, .NET framework, LINQ

### ⚡ **Interactive Experience**
- Real-time quiz interface with immediate feedback
- Randomized questions for each attempt
- Progress tracking and detailed results
- Score calculation with performance insights
- Timer and attempt tracking

### 🎨 **Modern Design**
- Clean, responsive interface built with React + TypeScript
- Tailwind CSS for beautiful styling
- Mobile-friendly design
- Smooth animations and transitions

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd code-quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🎮 How to Use

1. **Choose a Language**: Select from the available programming languages on the home page
2. **Take the Quiz**: Answer 5 randomized questions for your chosen language
3. **View Results**: See your score, time taken, and detailed breakdown of answers
4. **Try Again**: Retake quizzes to improve your score

---

## 🔧 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **PDF Generation**: jsPDF + html2canvas
- **Animations**: Canvas Confetti
- **Code Quality**: ESLint + Prettier

---

## 👨‍💻 For Developers

**Want to add a new programming language or contribute?**

See our comprehensive [Developer Guide](DEVELOPER_README.md) for:
- How to add new languages and questions
- Project architecture overview
- Coding guidelines and best practices
- Testing procedures
- Contribution guidelines

---

## 📁 Project Structure

```
src/
├── components/         # React components
├── data/              # Language configurations
├── languages/         # Question sets for each language
├── utils/             # Utility functions
├── templates/         # Templates for new languages
├── pages/             # Page components
├── assets/            # Icons and images
└── styles/            # Global styles
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Developer Guide](DEVELOPER_README.md) for detailed instructions on:

- Adding new programming languages
- Creating quiz questions
- Improving the user interface
- Reporting bugs and issues

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

---

## 🌟 Features Roadmap

- [ ] User accounts and progress tracking
- [ ] Difficulty levels for questions
- [ ] Timed quiz modes
- [ ] Leaderboards
- [ ] More programming languages
- [ ] Question categories (syntax, concepts, etc.)
- [ ] Custom quiz creation
