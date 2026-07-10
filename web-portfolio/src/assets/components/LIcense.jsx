import React from 'react';

const License = () => {
  const certifications = [
    { title: "Product Management", organization: "Harisenin Bootcamp UI/UX Designer & Product Management Batch 17", year: "2026" },
    { title: "UI/UX Designer", organization: "Dibimbing 46 Faculty of Product and Design: UI/UX", year: "2025" },
    { title: "Speaker UI/UX: Design for Developer", organization: "HIMAIF International Women University", year: "2025" },
    { title: "Junior Web Developer", organization: "BNSP (Badan Nasional Sertifikasi Profesi)", year: "2025" },
    { title: "UI-UX Research & Design", organization: "MySkill UI/UX Fullstack Intensive Bootcamp Batch 16", year: "2024" },
    { title: "Frontend Developer", organization: "PT. Sarana Pactindo", year: "2023" },
  ];

  return (
    <section id="license" className="py-24 px-10 md:px-24 lg:px-36 text-text border-t border-aksen/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-ovo text-5xl mb-2">Licenses & Certifications</h2>
          <div className="w-20 border-b-2 border-aksen mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex bg-card border border-aksen/30 rounded-xl p-6 hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-1 shadow-md shadow-black/20"
            >
              <div className="flex flex-col flex-grow text-start justify-center font-mulish">
                <span className="text-aksen text-xs font-semibold mb-1">{cert.year}</span>
                <p className="font-ovo text-xl text-text font-bold leading-snug mb-1">{cert.title}</p>
                <p className="text-sm text-text/60">{cert.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default License;
