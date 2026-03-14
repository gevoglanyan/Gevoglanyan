import React, { useState, useEffect } from 'react';
import Active from './Active';

const sections = ['about', 'skills', 'client-work', 'projects', 'gaming', 'contact'];

const Header = () => {
  const active = Active();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatLabel = (s) => {
    if (s === 'client-work') return 'Client Work';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#landing"
            className="text-white font-black text-lg tracking-tighter hover:text-cyan-400 transition-colors duration-200"
            style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif", fontSize: '1.4rem', letterSpacing: '0.02em' }}
          >
            HG
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`relative text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 group ${
                    active === sec ? 'text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {formatLabel(sec)}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                      active === sec ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-white block" />
            <span className="w-3 h-px bg-white/50 block" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#080808] flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
            <span
              className="text-white font-black text-xl"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              HG
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8">
            <ul className="space-y-2">
              {sections.map((sec, i) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-4 py-4 group"
                  >
                    <span className="text-white/90 text-xs font-mono">0{i + 1}</span>
                    <span
                      className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight"
                      style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
                    >
                      {formatLabel(sec)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </>
  );
};

export default Header;