import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";

import Header from './components/Header';
import Landing from './components/Landing';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Gaming from './components/Gaming';
// import Contact from './components/Contact';
import Dots from './components/Dots';
import Menu from './components/Menu';
import Trail from './components/Trail';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [terminalLines, setTerminalLines] = useState([
    '<span class="prompt">gevoglanyan@archlinux:~$</span> <span class="command">pwd</span>',
    '/home/gevoglanyan',
    '<span class="prompt">gevoglanyan@archlinux:~$</span> <span class="command">cd portfolio</span>',
    '<span class="prompt">gevoglanyan@archlinux:~$</span> <span class="command">ls</span>',
    '<span class="output">node_modules/ public/ src/ index.html package.json README.md gevoglanyan.com</span>'
  ]);
  const [showPhase, setShowPhase] = useState('cleak');
  const [typedCommand, setTypedCommand] = useState('');
  const [cleared] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (showPhase !== 'cleak') return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= 5) {
        setTypedCommand('cleak'.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTerminalLines(prev => [...prev, '<span class="prompt">gevoglanyan@archlinux:~$</span> <span class="command">cleak</span>', '<span class="error">bash: cleak: command not found</span>']);
        setTypedCommand('');
        setTimeout(() => setShowPhase('clear'), 150);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [showPhase]);

  useEffect(() => {
    if (showPhase !== 'clear') return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= 5) {
        setTypedCommand('clear'.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTerminalLines([]);  
          setTypedCommand('');   
          setTimeout(() => {
            setShowPhase('boot');
          }, 150);
        }, 150);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [showPhase]);
  
  
  useEffect(() => {
    if (showPhase !== 'boot') return;
    let i = 0;
    const bootCommand = 'exec ./gevoglanyan.com';
    const interval = setInterval(() => {
      if (i <= bootCommand.length) {
        setTypedCommand(bootCommand.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTerminalLines(prev => [...prev, `<span class="prompt">gevoglanyan@archlinux:~$</span> <span class="command">${bootCommand}</span>`, 
                                                  '<br /><br />','Server Starting...', '<br />', 'Connecting to gevoglanyan.com']);
        setTypedCommand('');
        setTimeout(() => setShowSplash(false), 1500);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [showPhase]);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 z-50 bg-black text-[white] flex flex-col items-center justify-center p-10 font-mono text-xl text-center">
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setShowSplash(false)}
              className="bg-transparent  text-white px-6 py-2 rounded hover:hover:text-white transition"
            >
              Skip Animation
            </button>
          </div>

          <div className="w-full whitespace-pre-wrap leading-relaxed max-w-2xl">
            {!cleared && terminalLines.map((line, idx) => ( 
              <p key={idx} className="animate-pulse-once" dangerouslySetInnerHTML={{ __html: line }}></p>
            ))}
            {typedCommand && (
              <p>
                <span className="text-[white]">gevoglanyan@archlinux:~$</span> <span>{typedCommand}</span>
                <span className="animate-blink">|</span>
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-black text-[white] font-sans">
          
          <Trail />
          <Header />
          <Dots />
          
          <div className="fixed top-4 right-4 z-50 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="relative flex flex-col justify-between w-8 h-6 p-1 text-white md:hidden z-50"
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

          {isMobileMenuOpen && <Menu onClose={() => setIsMobileMenuOpen(false)} />}
          
          <main className="pt-0">
            <Landing />

            {/*
            <About />
            <Skills />
            <Projects />
            <Gaming />
            <Contact />
            */}

          </main>
          <Footer />
        </div>
      )}
      <Analytics />
    </>
  );
}

export default App;
