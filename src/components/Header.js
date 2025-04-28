import React from 'react';
import Active from './Active';

const sections = ['about', 'skills', 'projects', 'gaming', 'contact'];

const Header = () => {
  const active = Active();

  return (
    <>
      <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-2 max-w-5xl w-full justify-center items-center">
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
    </>
  );
};

export default Header;
