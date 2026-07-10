import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-10 md:px-24 lg:px-36 text-text scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1 w-10 bg-aksen rounded-full"></span>
            <span className="text-aksen font-mulish font-bold uppercase tracking-wider text-sm">Who I Am</span>
          </div>
          <h2 className="font-ovo text-5xl mb-6">About Me</h2>
          <p className="font-mulish text-lg leading-relaxed text-text/80 mb-6">
            A passionate <b className="text-aksen">Tech & Creative Enthusiast, UI/UX Designer, and Product Manager</b> who loves turning ideas into user-centric digital products. With a strong background in computer software engineering and ongoing studies in informatics, I bridge the gap between user experience research, product strategy, and frontend implementation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-card border border-aksen/30 rounded-lg hover:border-aksen transition-colors duration-300">
              <h3 className="font-ovo text-xl text-aksen mb-1">Product & Design</h3>
              <p className="font-mulish text-sm text-text/70">PRD Writing, Product Strategy, UX Research, Figma</p>
            </div>
            <div className="p-4 bg-card border border-aksen/30 rounded-lg hover:border-aksen transition-colors duration-300">
              <h3 className="font-ovo text-xl text-aksen mb-1">Development</h3>
              <p className="font-mulish text-sm text-text/70">React.js, Tailwind CSS, JavaScript, Git & HTML/CSS</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-full flex justify-center">
          <div className="absolute w-[250px] h-[250px] bg-third/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="border border-aksen/40 p-8 rounded-2xl bg-card/45 backdrop-blur-md shadow-xl text-center max-w-sm">
            <div className="w-50 h-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <img className='w-full h-full object-cover' src="/img/person.png" alt="" />
            </div>
            <p className="font-ovo text-2xl mb-2 text-text">Creative & Code</p>
            <p className="font-mulish text-sm text-text/60">Bridging the gap between beautiful aesthetics and robust web development implementations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
