import React, { useState, useEffect } from 'react';
import Active from './Active';

const sections = ['about', 'skills', 'client-work', 'projects', 'gaming', 'contact'];

const Header = () => {
  const active = Active();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatSectionName = (section) => {
    if (section === 'client-work') return 'CLIENT WORK';
    return section.toUpperCase();
  };

  return (
    <>
      {visible && (
        <nav className="hidden md:flex fixed top-8 left-0 w-full z-50 px-6 py-3 justify-center items-center bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <ul className="flex justify-center items-center gap-4 text-sm md:text-base tracking-wide text-white text-center">
            {sections.map((sec, idx) => (
              <React.Fragment key={sec}>
                <li className="flex items-center">
                  <a
                    href={`#${sec}`}
                    className={`transition duration-200 ${
                      active === sec ? 'text-white' : 'text-cyan-400 hover:text-white'
                    }`}
                  >
                    {formatSectionName(sec)}
                  </a>
                </li>
                {idx !== sections.length - 1 && (
                  <span className="text-gray-400 px-2">|</span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      )}

      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center group backdrop-blur-md"
          aria-label="Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-cyan-400 group-hover:text-white transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;