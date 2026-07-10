import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
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

  return (
    <footer className="bg-secondary text-text border-t border-aksen/15 py-12 px-6 md:px-16 lg:px-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left Column: Branding and Tagline */}
        <div className="flex-1 text-center md:text-start space-y-4 max-w-sm">
          <div 
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="cursor-pointer inline-block group"
          >
            <img src="/img/logo-porto.png" alt="Ghaida Logo" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300 mx-auto md:mx-0" />
          </div>
          <p className="font-mulish text-sm text-text/70 leading-relaxed">
            Frontend Developer, UI/UX Designer, and Project Manager. Crafting functional and visually premium digital experiences.
          </p>
        </div>

        {/* Right Column: Links and Socials */}
        <div className="flex flex-col md:flex-row gap-12 text-center md:text-start">
          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-ovo text-lg text-aksen font-semibold uppercase tracking-wider text-sm mb-1">Navigation</h4>
            <button onClick={() => handleNavClick('about')} className="font-mulish text-sm text-text/70 hover:text-text text-center md:text-start transition-colors">About</button>
            <button onClick={() => handleNavClick('education')} className="font-mulish text-sm text-text/70 hover:text-text text-center md:text-start transition-colors">Education</button>
            <button onClick={() => handleNavClick('experience')} className="font-mulish text-sm text-text/70 hover:text-text text-center md:text-start transition-colors">Experience</button>
            <button onClick={() => handleNavClick('portfolio')} className="font-mulish text-sm text-text/70 hover:text-text text-center md:text-start transition-colors">Portfolios</button>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <h4 className="font-ovo text-lg text-aksen font-semibold uppercase tracking-wider text-sm mb-1">Connect</h4>
            <a href="mailto:ghaidazalfahhh@gmail.com" className="font-mulish text-sm text-text/70 hover:text-text transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/ghaida-zalfa" target="_blank" rel="noopener noreferrer" className="font-mulish text-sm text-text/70 hover:text-text transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/ghaidazalfh/profilecard/?igsh=MnJicDBnaHQ4NWxo" target="_blank" rel="noopener noreferrer" className="font-mulish text-sm text-text/70 hover:text-text transition-colors">Instagram</a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-aksen/10 my-8"></div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-text/50 font-mulish gap-2">
        <p>© {new Date().getFullYear()} Ghaida Zalfa Husniyah. All rights reserved.</p>
        <p className="flex gap-4">
          <span className="hover:text-text cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-text cursor-pointer">Terms of Service</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
