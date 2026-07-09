import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const boxes = [
    { 
      id: "project-manager", 
      label1: "Project Manager", 
      label2: "Portfolio", 
      title: "Harisenin", 
      caption: "PM Bootcamp (Batch 17)", 
      title2: "PLM & PRD", 
      caption2: "MVP Specifications", 
    },
    { 
      id: "uiux", 
      label1: "UI/UX Designer", 
      label2: "Portfolio", 
      title: "MySkill & Dibimbing", 
      caption: "Certified UI/UX Designer", 
      title2: "Intermediate", 
      caption2: "Design Proficiency", 
    },
    { 
      id: "frontend-dev", 
      label1: "Frontend Dev", 
      label2: "Portfolio", 
      title: "Ex-Intern & BNSP", 
      caption: "Junior Web Developer Certified", 
      title2: "Grade A", 
      caption2: "PT. Sarana Pactindo Score", 
    },
  ];

  const handleClick = (id) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <section id="portfolio" className="py-24 px-10 md:px-24 lg:px-36 bg-primary text-text border-t border-aksen/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1 w-10 bg-aksen rounded-full"></span>
            <span className="text-aksen font-mulish font-bold uppercase tracking-wider text-sm">My Work</span>
          </div>
          <h2 className="font-ovo text-5xl mb-2">My Portfolios</h2>
          <p className="font-mulish text-text/60 text-sm">Click on any card to view detailed project case studies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxes.map((box) => (
            <div
              key={box.id}
              className="border border-aksen/30 rounded-xl flex flex-col h-80 bg-card p-6 cursor-pointer hover:bg-cardHover hover:border-aksen transition-all duration-300 transform hover:-translate-y-2 group shadow-lg hover:shadow-aksen/10"
              onClick={() => handleClick(box.id)}
            >
              {/* Top Triangle Accent */}
              <div className="triangle-up mx-auto transition-transform duration-300 group-hover:scale-110"></div>
              
              <div className="relative flex-1 flex flex-col items-center justify-center font-mulish text-center text-text">
                {/* Default Label View */}
                <div className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:scale-90">
                  <p className="text-aksen font-ovo text-3xl font-bold">{box.label1}</p>
                  <p className="font-mulish font-bold text-xl uppercase tracking-wider mt-1">{box.label2}</p>
                </div>

                {/* Hover Details View */}
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 flex flex-col gap-4">
                  <div>
                    <p className="font-ovo text-3xl text-text font-semibold">{box.title}</p>
                    <p className="font-mulish text-xs text-text/60 mt-1">{box.caption}</p>
                  </div>
                  <div className="w-16 border-t border-aksen/40 mx-auto"></div>
                  <div>
                    <p className="font-ovo text-3xl text-text font-semibold">{box.title2}</p>
                    <p className="font-mulish text-xs text-text/60 mt-1">{box.caption2}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Triangle Accent */}
              <div className="triangle-down mx-auto transition-transform duration-300 group-hover:scale-110"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
