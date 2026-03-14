import React from 'react';
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
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#080808] text-white font-sans relative">
        <Header />
        <Dots />

        <main>
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