export const TermsOfService = () => {
  return (
    <div className="w-full bg-gray-900 py-16 text-gray-300 px-6 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Terms of Service
        </h1>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Overview</h2>
          <p>
            By using CodeQuiz, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree to these terms, you may not use the platform.
          </p>
        </section>

        {/* License */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">License</h2>
          <p>
            CodeQuiz is released under the <strong>MIT License</strong>. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the original copyright
            notice and this permission notice are included in all copies or substantial portions of the Software.
          </p>
          <p className="mt-4 italic text-sm text-gray-400">
            MIT License © 2025 Usman Muhammad
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Disclaimer</h2>
          <p>
            CodeQuiz is provided "as is", without warranty of any kind, express or implied. The author is not liable for any claims, damages, or other liabilities that may arise from the use of this platform.
          </p>
        </section>

        {/* Acceptable Use */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Acceptable Use</h2>
          <p>
            You agree to use CodeQuiz for educational and self-improvement purposes. You must not use the platform to:
          </p>
          <ul className="list-disc list-inside mt-2 pl-4 space-y-1">
            <li>Violate any laws or regulations</li>
            <li>Attempt unauthorized access to the system or data</li>
            <li>Copy or scrape content in a malicious or deceptive way</li>
            <li>Exploit the platform for commercial purposes without proper attribution</li>
          </ul>
        </section>

        {/* Contributions & Community */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Contributions</h2>
          <p>
            As the platform grows, contributions from the community are welcome. By submitting any code or content, you agree that it can be used under the MIT License and modified to align with the goals of the project.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Changes to Terms</h2>
          <p>
            These terms may be updated as the project evolves. Continued use of CodeQuiz after changes implies your acceptance of the updated terms.
          </p>
        </section>

        {/* Contact */}
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
};
