import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'License', id: 'license' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-aksen/15">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="cursor-pointer group"
        >
          <img src="/img/logo-porto.png" alt="Ghaida Logo" className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-mulish text-sm text-text/80 hover:text-aksen transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="mailto:ghaidazalfahhh@gmail.com" 
            className="font-mulish text-sm bg-third hover:bg-aksen text-text px-6 py-2 rounded-full border border-aksen/30 transition-all duration-300 shadow-md shadow-third/20"
          >
            Send Mail
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text hover:text-aksen focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-primary border-b border-aksen/15 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left font-mulish text-base text-text/80 hover:text-aksen py-1.5 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
          <a 
            href="mailto:ghaidazalfahhh@gmail.com" 
            className="font-mulish text-center text-sm bg-third hover:bg-aksen text-text py-2.5 rounded-full border border-aksen/30 transition-all duration-300 mt-2"
          >
            Send Mail
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
