import { CONTRIBUTORS } from "../../constants/aboutConstants";

export const ContributionsSection = () => (
  <section className="mb-16 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-10 text-center">
      Community Contributions
    </h2>
    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
      CodeQuiz is free and community‑driven. Meet some of our top contributors,
      and consider&nbsp;
      <a
        href="https://github.com/usman9856/code-quiz"
        className="text-cyan-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        joining the project
      </a>
      !
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {CONTRIBUTORS.map((c) => (
        <div
          key={c.name}
          className={`bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:border-${c.color}-500 transition-colors duration-300`}
        >
          {/* Placeholder banner */}
          <div
            className={`h-48 bg-gradient-to-r from-${c.color}-500 to-${c.color === "yellow" ? "orange" : c.color
              }-500 flex items-center justify-center`}
          >
            <svg
              className="w-24 h-24 text-white opacity-30"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-1">{c.name}</h3>
            <p className={`text-${c.color}-400 mb-3`}>{c.role}</p>
            <p className="text-gray-300 text-sm">{c.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
