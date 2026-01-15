import React from 'react';
import Active from './Active';

const sections = ['landing', 'about', 'skills', 'client-work', 'projects', 'gaming', 'contact'];

const Dots = () => {
  const active = Active();

  return (
    <div className="hidden md:flex fixed right-24 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-4">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full transition border border-white ${
            active === id ? 'bg-[white]' : 'bg-white/20'
          }`}
        >
          <span className="sr-only">Go to {id}</span>
        </a>
      ))}
    </div>
  );
};

export default Dots;