export const FAQS = [
  {
    question: "What is CodeQuiz?",
    answer: (
      <p>
        CodeQuiz is a free, interactive platform that helps developers test
        and improve their coding skills through focused quizzes and
        assessments. We cover multiple programming languages and frameworks,
        allowing users to evaluate their knowledge, discover learning gaps,
        and track progress over time.
      </p>
    ),
  },
  {
    question: "How do the quizzes work?",
    answer: (
      <div>
        <p className="mb-3">
          Our quizzes consist of multiple-choice questions that assess your
          knowledge of programming concepts, syntax, logic, and best practices.
          Each quiz is focused on a specific language or topic.
        </p>
        <p>
          You'll be shown questions one at a time, and once you finish, you'll
          receive detailed results including your score, correct/incorrect
          answers, and explanations.
        </p>
      </div>
    ),
  },
  {
    question: "Are the quizzes timed?",
    answer: (
      <p>
        Yes — quizzes are timed to simulate real-world pressure and help you
        build speed and accuracy. However, the timer is generous enough to let
        you think through each question. Your completion time is recorded and
        shown in your results.
      </p>
    ),
  },
  {
    question: "How difficult are the quizzes?",
    answer: (
      <p>
        We offer quizzes for all skill levels — from beginner to advanced. Each
        topic includes a range of difficulty levels, so you can start with the
        basics and gradually take on more complex challenges.
      </p>
    ),
  },
  {
    question: "Can I retake quizzes?",
    answer: (
      <p>
        Absolutely! You can retake any quiz as many times as you want. Each
        attempt will pull from a growing question bank to keep the experience
        fresh and challenging.
      </p>
    ),
  },
  {
    question: "How can I track my progress?",
    answer: (
      <p>
        After each quiz, you'll get detailed results with your score,
        performance breakdown, and time taken. You can also download your
        results as PDFs or text files. We're working on adding a personal
        dashboard to visualize your long-term growth.
      </p>
    ),
  },
  {
    question: "What programming languages are covered?",
    answer: (
      <div>
        <p className="mb-3">
          CodeQuiz currently includes quizzes for a growing number of
          languages and frameworks, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>React</li>
          <li>C++</li>
          <li>SQL</li>
          <li>TypeScript</li>
        </ul>
        <p className="mt-3">
          We’re constantly expanding this list. If you’d like to contribute or
          suggest more languages, we’d love your input!
        </p>
      </div>
    ),
  },
  {
    question: "Is CodeQuiz free to use?",
    answer: (
      <div>
        <p className="mb-3">
          Yes. CodeQuiz is and will always remain{" "}
          <strong className="text-white">100% free</strong> to use.
        </p>
        <p>
          The platform is community-supported and thrives on open
          contributions. If you'd like to support the project, you can:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Contribute new questions or improvements via{" "}
            <a
              href="https://github.com/usman9856/code-quiz"
              className="text-cyan-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              our GitHub repository
            </a>
            .
          </li>
          <li>Report bugs or suggest features.</li>
          <li>Share CodeQuiz with other developers!</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How are the questions created and validated?",
    answer: (
      <p>
        Most questions are currently created by the core developer or
        generated with the help of AI, then reviewed for quality. We plan to
        open community contributions more broadly so developers can submit and
        help validate new questions collaboratively through GitHub.
      </p>
    ),
  },
  {
    question: "Can I suggest new features or report issues?",
    answer: (
      <p>
        Yes! The best way to share feedback is by{" "}
        <a
          href="https://github.com/usman9856/code-quiz/issues/new/choose"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          creating an issue on our GitHub repository
        </a>
        . We actively review all submissions and appreciate your ideas to help
        improve the platform.
      </p>
    ),
  },
];
