import React, { useEffect } from 'react';

const sections = [
  { id: 'landing', label: 'LANDING' },
   { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'gaming', label: 'GAMING' },
  { id: 'contact', label: 'CONTACT' },
];

const MobileMenu = ({ onClose }) => {

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleLinkClick = (id) => {
    onClose();
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  return (
    <aside className="flex md:hidden fixed inset-0 z-40 h-full w-full bg-black px-6 pt-[1vh]">
      <div className="flex flex-col justify-center w-full">
        <div className="relative w-fit mx-auto">

          < br />
          
          <ul className="flex flex-col gap-6 uppercase text-2xl text-white">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <button
                  onClick={() => handleLinkClick(section.id)}
                  className="flex gap-2 items-center"
                >
                  <span>{section.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="absolute right-0 top-0 aspect-square h-full w-2 bg-cyan-400 blur-[50px]" />
        </div>

        < br /> 

        <footer className="relative mt-10">
          <div className="relative overflow-hidden pb-8">
            <hr className="absolute left-[-10%] h-2 w-[200vw] bg-white-400" />
            <hr className="absolute left-[-10%] h-2 w-[200vw] bg-white-400 blur-[20px]" />
          </div>
          <div className="text-4xl font-bold text-center text-white mb-6">
            < br /> Harutyun
            < br /> Gevoglanyan
          </div>
          <section className="flex flex-col gap-4 items-center mt-8 text-sm text-white-400">
            <div> 
              <br/><br /> Designed & Powered
            </div>
            <div>
              by Harutyun Gevoglanyan 
            </div>
          </section>
        </footer>
      </div>
    </aside>
  );
};

export default MobileMenu;
