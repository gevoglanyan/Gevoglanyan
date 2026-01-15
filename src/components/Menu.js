import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'landing', label: 'LANDING' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'client-work', label: 'CLIENT WORK' },
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

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      }
    })
  };

  return (
    <motion.aside
      className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex flex-col min-h-screen w-full px-8 py-20">
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center group"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2 }}
        >
          <svg
            className="w-6 h-6 text-cyan-400 group-hover:text-white transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>

        <nav className="flex-1 flex flex-col justify-center">
          <ul className="space-y-6">
            {sections.map((section, idx) => (
              <motion.li
                key={section.id}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <button
                  onClick={() => handleLinkClick(section.id)}
                  className="group flex items-center gap-4 w-full text-left"
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.5 }}
                  />
                  
                  <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-wide">
                    {section.label}
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
};

export default MobileMenu;