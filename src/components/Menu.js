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

            <br />

            <div className="flex flex-row gap-4 justify-center items-center mb-6">
              <a
                href="https://www.instagram.com/hgevoglanyan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 496 512"
                  fill="currentColor"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.8 0 184.8 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>

              <a 
                href="https://www.tiktok.com/@hgevoglanyan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-white"
                  viewBox="0 0 496 512"
                  fill="currentColor"
              >
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
            </div>
          </section>
        </footer>
      </div>
    </aside>
  );
};

export default MobileMenu;
