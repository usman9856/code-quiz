import React, { useState } from "react";
import { Hero } from "../components/Hero";
import { LanguageGrid } from "../components/LanguageGrid";
import { CODE_SAMPLES } from "../constants/globalConstants";

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen">
      <header>
        <h1>Welcome to the Quiz Project</h1>
        <p className="mt-2 text-lg">
          Test your knowledge in various languages and topics!
        </p>
      </header>

      <main className="py-10 px-4 space-y-6">
        <Hero />
        <LanguageGrid />
      </main>
    </div>
  );
};

export default HomePage;

{
  /* <section className="text-center py-8 bg-gray-800 rounded-lg">
  <h3 className="text-2xl font-bold">Ready to Start Your Quiz?</h3>
  <p className="mt-2 text-gray-400">
    Pick a language, take the quiz, and see how you score!
  </p>
  <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md">
    Get Started
  </button>
</section> */
}
