import React, { useState, useEffect } from 'react';
import Active from './Active';

const sections = ['about', 'skills', 'projects', 'gaming', 'contact'];

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
                    {sec.toUpperCase()}
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
    </>
  );
};

export default Header;
