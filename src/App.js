import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
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

        <div className="fixed top-4 right-4 z-50 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="relative flex flex-col justify-between w-8 h-6 p-1 text-white z-[9999]"
          >
            <span className="block h-0.5 w-full bg-white" />
            <span className="block h-0.5 w-full bg-white" />
            <span className="block h-0.5 w-full bg-white" />
          </button>
        </div>

        {isMobileMenuOpen && <Menu onClose={() => setIsMobileMenuOpen(false)} />}

        <main className="pt-20 md:pt-0">
          <Landing />
          <About />
          <Skills />
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
