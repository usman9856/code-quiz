import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};
