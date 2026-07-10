import React from 'react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const texts = ["Frontend Developer", "Product Manager", "UI/UX Designer"];
  const [displayedText, setDisplayedText] = useState("");
  const [fullText, setFullText] = useState(texts[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 70;

    const handleTyping = () => {
      if (!isDeleting && displayedText !== fullText) {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFullText(texts[(textIndex + 1) % texts.length]);
      } else if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, fullText, texts, textIndex]);


  return (
    <div className="h-[100vh] flex flex-col mx-auto snap-center snap-always relative overflow-hidden">
      <div className="absolute w-[200px] h-[200px] bg-aksen rounded-full blur-3xl top-16 left-20 animate-floating"></div>
      <div className="absolute w-[300px] h-[300px] bg-aksen rounded-full blur-3xl top-20 right-16 animate-circle"></div>
      <div className='hero grow content-end'>
        <div className="
        half-circle 
        max-w-6xl 
        self-end 
        rounded-t-full 
        blur-xl 
        mx-auto 
        bg-gradient-to-b 
        from-[#A64D79] 
        to-[#1a1a1d00]">
        </div>
        <div className='hero-text w-full absolute px-4 sm:px-8'>
          <h1 className="text-text py-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo leading-tight">
            Hi! I'm <span className='text-aksen'>Zalfa</span>, your{" "}
            <span className="relative">
              <span className="text-blue-400">{displayedText}</span>
              <span className="blinking-cursor absolute">|</span>
            </span>
          </h1>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 sm:mt-12 mx-auto w-12 h-12 flex items-center justify-center rounded-full border border-aksen/40 bg-text/70 text-card hover:bg-card hover:border-aksen transition-all duration-300 animate-bounce group shadow-lg hover:shadow-aksen/25"
            aria-label="Scroll to About Me"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-aksen group-hover:text-text transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
