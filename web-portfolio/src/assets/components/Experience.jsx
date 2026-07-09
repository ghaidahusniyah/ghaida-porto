import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-10 md:px-24 lg:px-36 bg-primary text-text border-t border-aksen/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-start">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-10 bg-aksen rounded-full"></span>
          <span className="text-aksen font-mulish font-bold uppercase tracking-wider text-sm">Professional History</span>
        </div>
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-ovo text-5xl">Work Experience</h2>
          <div className="w-12 h-12 bg-third rounded-full flex items-center justify-center border border-aksen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
          </div>
        </div>

        <div className="space-y-8">
          {/* Key Account IT - Joki Proyek */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-primary p-2 rounded-lg w-24 h-24 flex items-center justify-center border border-aksen/20 text-aksen">
              <img src="/img/joki-proyek.png" alt="Joki Proyek" className="w-20 h-20 object-contain" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                <div>
                  <h3 className="font-ovo text-2xl text-text">Key Account IT</h3>
                  <p className="font-mulish text-aksen text-base">Joki Proyek</p>
                </div>
                <span className="text-text font-mulish text-xs font-semibold px-3 py-1 bg-third/80 rounded-full border border-aksen/20">Dec 2025 - Apr 2026</span>
              </div>
              <p className="font-mulish text-text/80 text-sm leading-relaxed">
                Managed critical client communication and coordinated with developer teams. Supervised and guided technical delivery scopes to ensure custom software systems and features were completed on schedule.
              </p>
            </div>
          </div>

          {/* Graphic Designer - Socmed Buddies */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-primary p-2 rounded-lg w-24 h-24 flex items-center justify-center border border-aksen/20 text-aksen">
              <img src="/img/socmed-buddies.png" alt="Socmed Buddies" className="w-20 h-20 object-contain" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                <div>
                  <h3 className="font-ovo text-2xl text-text">Graphic Designer</h3>
                  <p className="font-mulish text-aksen text-base">Socmed Buddies</p>
                </div>
                <span className="text-text font-mulish text-xs font-semibold px-3 py-1 bg-third/80 rounded-full border border-aksen/20">Aug 2025 - Nov 2025</span>
              </div>
              <p className="font-mulish text-text/80 text-sm leading-relaxed">
                Created minimalist layouts and aesthetic style assets for corporate and brand Instagram calendars. Handled layout prototyping and branding visuals to increase user CTR and match strict brief guidelines.
              </p>
            </div>
          </div>

          {/* Frontend Developer - PT. Sarana Pactindo */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-primary p-2 rounded-lg w-24 h-24 flex items-center justify-center border border-aksen/20">
              <img src="/img/PAC.png" alt="PT. Sarana Pactindo" className="w-20 h-20 object-contain" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                <div>
                  <h3 className="font-ovo text-2xl text-text">Frontend Developer</h3>
                  <p className="font-mulish text-aksen text-base">PT. Sarana Pactindo</p>
                </div>
                <span className="text-text font-mulish text-xs font-semibold px-3 py-1 bg-third/80 rounded-full border border-aksen/20">6 Months Intern</span>
              </div>
              <p className="font-mulish text-text/80 text-sm leading-relaxed">
                Developed admin dashboard systems for online banking portals and network providers. Implemented clean, responsive grids, and connected user input forms with secure backend REST endpoints. Completed projects with grade A.
              </p>
            </div>
          </div>

          {/* Content Planner - PT Renjana Indonesia Sinergi */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-primary p-2 rounded-lg w-24 h-24 flex items-center justify-center border border-aksen/20 text-aksen">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                <div>
                  <h3 className="font-ovo text-2xl text-text">Content Planner</h3>
                  <p className="font-mulish text-aksen text-base">PT. Renjana Sinergi Indonesia</p>
                </div>
                <span className="text-text font-mulish text-xs font-semibold px-3 py-1 bg-third/80 rounded-full border border-aksen/20">Jan 2024 - Apr 2024</span>
              </div>
              <p className="font-mulish text-text/80 text-sm leading-relaxed">
                Planned content calendars, mapped media targets, and researched trends. Produced written scripts and copy content briefs for creative campaign launches on digital platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
