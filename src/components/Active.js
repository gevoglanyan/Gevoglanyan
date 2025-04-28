import { useEffect, useState } from 'react';

const sections = ['landing', 'about', 'skills', 'projects', 'gaming', 'contact'];

const Active = () => {
  const [active, setActive] = useState('landing');

  useEffect(() => {
    const handleScroll = () => {
      const buffer = 80; 
      let current = 'landing';

      for (let i = 0; i < sections.length; i++) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const nextEl = document.getElementById(sections[i + 1]);
          const nextOffset = nextEl ? nextEl.offsetTop : Number.POSITIVE_INFINITY;

          if (window.scrollY + buffer >= offsetTop && window.scrollY + buffer < nextOffset) {
            current = id;
            break;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return active;
};

export default Active;
