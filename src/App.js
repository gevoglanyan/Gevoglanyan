import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import ClientWork from './components/ClientWork';
import Projects from './components/Projects';
import Gaming from './components/Gaming';
import Contact from './components/Contact';
import Dots from './components/Dots';
import Menu from './components/Menu';
import Trail from './components/Trail';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black text-white font-sans relative">
        <Trail />
        <Header />
        <Dots />

        {/* Hamburger Menu Button - Top Left (Mobile Only) */}
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center backdrop-blur-md group"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-cyan-400 group-hover:text-white transition"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && <Menu onClose={() => setIsMobileMenuOpen(false)} />}

        <main className="pt-20 md:pt-0">
          <Landing />
          <About />
          <Skills />
          <ClientWork />
          <Projects />
          <Gaming />
          <Contact />
        </main>

        <Footer />
      </div>

      <Analytics />
    </>
  );
}

export default App;