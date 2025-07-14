export const PrivacyPolicy = () => (
  <div className="w-full bg-gray-900 py-16 text-gray-300 px-6 sm:px-8 lg:px-24">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Privacy&nbsp;Policy
      </h1>

      {/* 1 | Intro */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Introduction
        </h2>
        <p>
          CodeQuiz respects your privacy. <strong>We do not collect or store
            any personal data at this time.</strong> This page explains what we
          may collect in the future and how you can stay informed.
        </p>
      </section>

      {/* 2 | Current Data Situation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          What We Collect&nbsp;Today
        </h2>
        <p>
          <em>Nothing on our servers.</em> All quiz states (e.g.&nbsp;current
          score, selected language) are stored only in your browser’s
          local storage and cleared when you clear site data. No cookies, no
          third‑party tracking, no remote database.
        </p>
      </section>

      {/* 3 | Future, Limited Analytics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Future Lightweight&nbsp;Analytics
        </h2>
        <p>
          As the platform matures we <strong>may introduce opt‑in, anonymous
            analytics</strong> to understand how CodeQuiz is used. Metrics
          considered:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
          <li>Total quizzes taken</li>
          <li>Aggregate success / failure counts</li>
          <li>Total time spent on quizzes</li>
        </ul>
        <p className="mt-2">
          These numbers help improve question quality and difficulty curves.
          <u>No usernames, IP addresses, or personal identifiers</u> will be
          stored with this data.
        </p>
      </section>

      {/* 4 | Third‑Party & Development Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Third‑Party Resources
        </h2>
        <p>
          During development we used the following tools and services. They do
          not receive user data:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
          <li>
            <strong>Magic Patterns</strong> – UI inspiration and pattern
            library
          </li>
          <li>
            <strong>Warp</strong> – Cloud‑native terminal used in development
          </li>
          <li>
            <strong>OpenAI</strong> – AI assistance for code generation and
            content drafting
          </li>
        </ul>
      </section>

      {/* 5 | Your Choices */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Your Choices
        </h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <strong>Clear Local Data:</strong> Remove CodeQuiz data via your
            browser’s site‑data settings.
          </li>
          <li>
            <strong>Stay Anonymous:</strong> If we add analytics later you’ll
            be prompted to opt in; you can decline.
          </li>
          <li>
            <strong>Remove Contributions:</strong> Open a GitHub issue to
            delete any question or comment you provided.
          </li>
        </ul>
      </section>

      {/* 6 | Changes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
          Changes to This Policy
        </h2>
        <p>
          We’ll update this page before collecting any analytics or personal
          data. The “Last updated” date will change accordingly.
        </p>
      </section>

      {/* 7 | Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Contact</h2>
        {/* <p>
            For questions or concerns about these terms, reach out at:{" "}
            <span className="text-white font-semibold">codequiz.dev@gmail.com</span> (or update with your preferred contact).
          </p> */}
        <p>
          For questions or concerns about these terms, reach out at: <a href="https://github.com/usman9856/code-quiz/issues/" className="text-cyan-400 hover:underline" target="_blank">github</a> repository and create an issue.

        </p>
      </section>
    </div>
  </div>
);
