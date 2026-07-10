import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 225}px, ${e.clientY - 225}px, 0)`;
        glowRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={glowRef}
      className="fixed pointer-events-none rounded-full bg-aksen/35 blur-[120px] w-[450px] h-[450px] opacity-0 transition-opacity duration-500 ease-out z-0"
      style={{
        left: 0,
        top: 0,
        transform: 'translate3d(-999px, -999px, 0)',
      }}
    />
  );
};

export default CursorGlow;
