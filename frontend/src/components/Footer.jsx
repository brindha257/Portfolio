import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Brindha K. All rights reserved.</p>
      <p className="text-gray-400 text-sm mt-2">Built with React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;