import React from 'react';
import { Hero } from '../components/Hero';
import { LanguageGrid } from '../components/LanguageGrid';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-['Inter',sans-serif]">
      <header className="py-6 text-center bg-gray-800">
        <h1 className="text-4xl font-bold">Welcome to the Quiz Project</h1>
        <p className="mt-2 text-lg text-gray-400">Test your knowledge in various languages and topics!</p>
      </header>

      <main className="py-10 px-4">
        {/* Hero Section */}
        <section id="hero" className="mb-12">
          <Hero />
        </section>

        {/* Language Grid Section */}
        <section id="languages" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Choose a Language</h2>
          <LanguageGrid />
        </section>

        {/* Call-to-Action Section */}
        <section id="cta" className="text-center py-8 bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-bold">Ready to Start Your Quiz?</h3>
          <p className="mt-2 text-gray-400">Pick a language, take the quiz, and see how you score!</p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
