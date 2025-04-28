import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 lg:px-24 py-20 text-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold text-[cyan] mb-6 flex items-center gap-2">
            ABOUT
          </h2>
          <p className="text-lg text-white-300 mb-4">
            Software Engineer & Gamer
          </p>
        </div>
        
        {/* Placeholder */}

        <div className="text-white-300 text-base leading-relaxed">
          <p className="mb-6"></p>
          <p className="mb-6"></p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;
