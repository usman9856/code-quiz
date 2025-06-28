import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LanguageGrid } from './components/LanguageGrid';
import { Footer } from './components/Footer';
import { TestPage } from './components/test/TestPage';
import { ResultsPage } from './components/results/ResultsPage';
export function App() {
  // Simple routing based on URL path
  const path = window.location.pathname;
  if (path === '/test') {
    return <TestPage />;
  }
  if (path === '/results') {
    return <ResultsPage />;
  }
  return <div className="min-h-screen bg-gray-900 text-white font-['Inter',sans-serif]">
      <Navbar />
      <main className="w-full">
        <Hero />
        <LanguageGrid />
      </main>
      <Footer />
    </div>;
}