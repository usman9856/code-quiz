import React from 'react';
import { CodeIcon, BookOpenIcon, AwardIcon, TrendingUpIcon, ClockIcon, FileTextIcon } from 'lucide-react';
export const AboutPage = () => {
  return <div className="w-full bg-gray-900 py-16">
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
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-cyan-500 transition-colors duration-300">
              <div className="rounded-full bg-cyan-500 bg-opacity-10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <CodeIcon size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Skill Improvement
              </h3>
              <p className="text-gray-300">
                Practice makes perfect. Regular testing helps reinforce your
                knowledge and improve retention of important concepts.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-purple-500 transition-colors duration-300">
              <div className="rounded-full bg-purple-500 bg-opacity-10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <FileTextIcon size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Detailed Reports
              </h3>
              <p className="text-gray-300">
                Get comprehensive feedback on your performance, including
                strengths, weaknesses, and suggestions for improvement.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-green-500 transition-colors duration-300">
              <div className="rounded-full bg-green-500 bg-opacity-10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUpIcon size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Progress Tracking
              </h3>
              <p className="text-gray-300">
                Monitor your improvement over time with our progress tracking
                features and performance analytics.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-yellow-500 transition-colors duration-300">
              <div className="rounded-full bg-yellow-500 bg-opacity-10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <BookOpenIcon size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Diverse Content
              </h3>
              <p className="text-gray-300">
                Access quizzes across multiple programming languages,
                frameworks, and difficulty levels to expand your knowledge.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-red-500 transition-colors duration-300">
              <div className="rounded-full bg-red-500 bg-opacity-10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <AwardIcon size={24} className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Certification Prep
              </h3>
              <p className="text-gray-300">
                Prepare for professional certifications with targeted quizzes
                that cover exam topics and follow similar formats.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-blue-500 transition-colors duration-300">
              <div className="rounded-full bg-blue-500 bg-opacity-10 p-3 w-14 h-14 flex items-center justify-center mb-4">
                <ClockIcon size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Time Efficiency
              </h3>
              <p className="text-gray-300">
                Short, focused quizzes allow you to practice efficiently, even
                when you only have a few minutes to spare.
              </p>
            </div>
          </div>
        </div>
        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2">2020</h3>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                    Platform Launch
                  </h4>
                  <p className="text-gray-300">
                    CodeQuiz was born with a simple mission: to help developers
                    test their knowledge and improve their skills through
                    interactive quizzes.
                  </p>
                </div>
                <div className="rounded-full bg-gray-800 border-4 border-purple-500 w-10 h-10 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              {/* Item 2 */}
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="rounded-full bg-gray-800 border-4 border-cyan-500 w-10 h-10 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2">2021</h3>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">
                    Expanded Language Support
                  </h4>
                  <p className="text-gray-300">
                    We expanded our quiz library to include more programming
                    languages and frameworks, catering to a wider audience of
                    developers.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2">2022</h3>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                    Enhanced Reporting
                  </h4>
                  <p className="text-gray-300">
                    We introduced detailed performance reports and analytics to
                    help users track their progress and identify areas for
                    improvement.
                  </p>
                </div>
                <div className="rounded-full bg-gray-800 border-4 border-purple-500 w-10 h-10 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="rounded-full bg-gray-800 border-4 border-cyan-500 w-10 h-10 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">2023</h3>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">
                    Community Features
                  </h4>
                  <p className="text-gray-300">
                    We launched community features allowing users to share their
                    results, compete with friends, and collaborate on learning
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Our Team
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            CodeQuiz is built by a passionate team of developers, educators, and
            learning specialists committed to helping the developer community
            grow and succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:border-cyan-500 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Alex Chen</h3>
                <p className="text-cyan-400 mb-3">Founder & Lead Developer</p>
                <p className="text-gray-300 text-sm">
                  Full-stack developer with a passion for education and helping
                  others improve their coding skills.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:border-purple-500 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-purple-400 mb-3">Content Director</p>
                <p className="text-gray-300 text-sm">
                  Computer science educator with experience in curriculum
                  development and technical assessment.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:border-green-500 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Miguel Rodriguez
                </h3>
                <p className="text-green-400 mb-3">UX Designer</p>
                <p className="text-gray-300 text-sm">
                  Designer focused on creating intuitive, accessible learning
                  experiences for developers of all levels.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:border-yellow-500 transition-colors duration-300">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Priya Patel
                </h3>
                <p className="text-yellow-400 mb-3">Community Manager</p>
                <p className="text-gray-300 text-sm">
                  Developer advocate who ensures CodeQuiz meets the needs of our
                  diverse user community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};