import { ContributionsSection } from "../components/modular/ContributionSection";
import { JourneySection } from "../components/modular/JourneySection";
import { FEATURES } from "../constants/aboutConstants";

export const AboutPage = () => {
  return (
    <div className="w-full bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">About</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              CodeQuiz
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Helping developers test and improve their coding skills through
            interactive quizzes and assessments.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-800 rounded-xl p-8 mb-16 border border-gray-700 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              At CodeQuiz, we believe that continuous learning is essential for
              developers to stay relevant in the rapidly evolving tech industry.
              Our mission is to provide a platform where developers of all
              levels can test their knowledge, identify areas for improvement,
              and track their progress over time.
            </p>
            <p className="text-gray-300">
              We're committed to creating high-quality, relevant quizzes that
              reflect real-world programming challenges and best practices.
              Whether you're preparing for a job interview, working towards a
              certification, or simply want to sharpen your skills, CodeQuiz is
              designed to help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Why Use CodeQuiz Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Why Use CodeQuiz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div
                className={`bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:${feature.borderColor} transition-colors duration-300`}
              >
                <div
                  className={`rounded-full ${feature.bgColor} bg-opacity-10 p-3 w-14 h-14 flex items-center justify-center mb-4`}
                >
                  <feature.icon size={24} className={feature.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <JourneySection /> */}
      <ContributionsSection />
    </div>

  );
};
