import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-2 pb-8 text-center text-lg md:text-l text-white-400">
      &copy; {new Date().getFullYear()} Gevoglanyan. All Rights Reserved.
    </footer>
  );
};

export default Footer;
