import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-10 md:px-24 lg:px-36 bg-primary text-text border-t border-aksen/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-start">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-10 bg-aksen rounded-full"></span>
          <span className="text-aksen font-mulish font-bold uppercase tracking-wider text-sm">Learning Journey</span>
        </div>
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-ovo text-5xl">Education</h2>
          <div className="w-12 h-12 bg-third rounded-full flex items-center justify-center border border-aksen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* IWU */}
          <div className="flex gap-5 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-primary p-2 rounded-lg w-20 h-20 flex items-center justify-center border border-aksen/20">
              <img src="/img/iwu.png" alt="International Women University" className="w-16 h-16 object-contain" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-aksen font-mulish text-xs font-semibold px-2 py-0.5 bg-aksen/10 rounded-full w-max mb-2">2023 - 2027</span>
              <h3 className="font-ovo text-2xl text-text mb-1">International Women University</h3>
              <p className="font-mulish text-text/80 text-base">Bachelor of Informatics (S1)</p>
              <p className="font-mulish text-text/50 text-xs mt-2">Specializing in Software Systems and UI/UX. Active in Sound of IWU Student Choir as Vice Chairperson / Member.</p>
            </div>
          </div>

          {/* Harisenin */}
          <div className="flex gap-5 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-gradient-to-br from-third to-secondary p-2 rounded-lg w-20 h-20 flex flex-col items-center justify-center border border-aksen/40">
              <img src="/img/hari-senin.png" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-aksen font-mulish text-xs font-semibold px-2 py-0.5 bg-aksen/10 rounded-full w-max mb-2">2026 - Present</span>
              <h3 className="font-ovo text-2xl text-text mb-1">Harisenin.com</h3>
              <p className="font-mulish text-text/80 text-base">Product Manager Bootcamp (Batch 17)</p>
              <p className="font-mulish text-text/50 text-xs mt-2">Studying product life-cycle management, writing PRDs, and aligning product strategies with business/engineering.</p>
            </div>
          </div>

          {/* MySkill */}
          <div className="flex gap-5 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-primary p-2 rounded-lg w-20 h-20 flex items-center justify-center border border-aksen/20">
              <img src="/img/myskill.png" alt="MySkill" className="w-16 h-16 object-contain" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-aksen font-mulish text-xs font-semibold px-2 py-0.5 bg-aksen/10 rounded-full w-max mb-2">2024</span>
              <h3 className="font-ovo text-2xl text-text mb-1">MySkill Bootcamp</h3>
              <p className="font-mulish text-text/80 text-base">UI/UX Research & Design (Batch 16)</p>
              <p className="font-mulish text-text/50 text-xs mt-2">Completed intensive training in user research, wireframing, high-fidelity UI layouting, and interactive prototyping.</p>
            </div>
          </div>

          {/* SMKN 13 */}
          <div className="flex gap-5 p-6 bg-card border border-aksen/30 rounded-xl hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-shrink-0 bg-primary p-2 rounded-lg w-20 h-20 flex items-center justify-center border border-aksen/20">
              <img src="/img/smk.png" alt="SMKN 13 Bandung" className="w-16 h-16 object-contain" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-aksen font-mulish text-xs font-semibold px-2 py-0.5 bg-aksen/10 rounded-full w-max mb-2">2020 - 2023</span>
              <h3 className="font-ovo text-2xl text-text mb-1">SMKN 13 Bandung</h3>
              <p className="font-mulish text-text/80 text-base">Rekayasa Perangkat Lunak (RPL)</p>
              <p className="font-mulish text-text/50 text-xs mt-2">Gained core software engineering skills. Active in student council (MPK), Choir, English Club, and Music bands.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
