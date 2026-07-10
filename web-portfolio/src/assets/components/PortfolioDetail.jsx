import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const portfolioData = {
  'project-manager': {
    title: 'Product Manager',
    subtitle: 'Harisenin Bootcamp UI/UX Designer & Product Management Batch 17',
    description: 'Defined product strategies, conducted market and user analysis, created Product Requirement Documents (PRDs), and aligned business, design, and engineering requirements throughout the product development process.',
    src: '/img/project-manager.png',
    tools: [
      'Product Discovery',
      'PRD Writing',
      'Agile Roadmapping',
      'Feature Prioritization',
      'Stakeholder Management',
      'Figma',
      'Notion',
      'Trello'
    ],
    projects: [
      {
        id: 'mediaease-prd',
        title: 'PRD MediaEase Patient Queue',
        subtitle: 'Patient Queue Management System (PRD)',
        description: 'MediaEase is a patient queue management system designed to address long waiting times and transparency issues in healthcare facilities. It streamlines booking, queue tracking, and ticket check-ins to optimize hospital workflows and patient experiences.',
        tools: ['PRD Writing', 'Figma Wireframing', 'Agile MVP Scoping', 'Success Metrics Mapping'],
        role: 'Product & Event Lead',
        timeline: '2026',
        status: 'Bootcamp MVP Proposal',
        deliverables: ['Product Requirement Document (PRD)', 'Figma Mobile Mockups', 'Spreadsheet Budgeting', 'Gantt Chart Roadmap'],
        achievements: [
          'Background: Conventional queuing in clinics and hospitals leads to 1-2 hour waiting times, crowding, and lack of transparency. MediaEase resolves this through a real-time digital queue indicator.',
          'Goal / Objectives: Launch an MVP in Q3 2026 to reduce average patient wait times by 40% and establish automated SMS/WhatsApp alerts for upcoming slots.',
          'Scope / Fitur: Incorporates User Auth, online queue booking, live queue board visualization, e-tickets with QR code arrivals, and transaction fee estimation.',
          'Out of Scope: Telemedicine consultations, e-pharmacy delivery, and PDDikti/SatuSehat integrations are excluded from Phase 1.'
        ],
        docLink: 'https://docs.google.com/document/d/1Qj55B0nEwoKMMUpEiFxyUt0DVFjJbGiBGJGBfxwrsLI/edit?usp=sharing'
      },
      {
        id: 'spmi-iwu',
        title: 'SPMI IWU Quality Assurance',
        subtitle: 'Internal Quality Assurance Portal (Real Case)',
        description: 'Sistem Penjaminan Mutu Internal (SPMI) for International Women University (IWU). Automates and digitizes academic auditing processes across all university departments, replacing physical paperwork with real-time dashboard progress metrics.',
        tools: ['Auditing System', 'Quality Indicators (SN-Dikti)', 'Process Mapping', 'Google Workspace'],
        role: 'Internal Auditor & Lead PM',
        timeline: '2026',
        status: 'Real Case System Implementation',
        deliverables: ['SPMI Auditing Standard Document', 'Process Audit Flowcharts', 'Correction Action Plans (RTL)'],
        achievements: [
          'Background: University accreditation requires strict auditing of academic standards. IWU previously audited via spreadsheets, causing data silos and major review bottlenecks.',
          'Goal / Objectives: Automate auditing workflows for 10+ departments, establishing clear review logs and tracking non-compliance correction plans (RTL) transparently.',
          'Scope / Fitur: Mapped self-evaluation portal for department heads, custom auditor verification board, and quality standards index tracker.',
          'Out of Scope: SPME (External accreditation BAN-PT) automated submissions are excluded to prioritize internal verification security.'
        ]
      },
      {
        id: 'virsign-srs',
        title: 'Virsign Blockchain Document Signer',
        subtitle: 'Blockchain Signature Verification System (SRS)',
        description: 'Software Requirements Specification (SRS) for VirSign, a blockchain-based digital signature and document verification platform designed to secure academic documents (transcripts, certificates) against tampering at IWU.',
        tools: ['SRS Writing', 'Cryptographic Scoping', 'Ethereum Blockchain', 'Information Architecture', 'Use Case Mapping'],
        role: 'Business Analyst & System Architect',
        timeline: '2025',
        status: 'Academic Project (Tugas Besar)',
        deliverables: ['Software Requirements Specification (SRS)', 'RSA Keypair Hashing Schema', 'Use Case Specification Diagram', 'Ethereum Deployment Scripts'],
        achievements: [
          'Background: Mitigates academic credential forgery by securing certificate hashes. Ensures integrity through cryptographically sealed signatures.',
          'Goal / Objectives: Define system features, data structure constraints, and design requirements for a secure multithreaded React and Node signature scanner.',
          'Scope / Fitur: Automated RSA key generation, dynamic navigational menus, SHA-256 document hashing, sequential multi-signature approval flow, and public verification lookup.',
          'Out of Scope / Constraints: Private keys must remain client-side (untransmitted to servers), session tokens are cleared on browser exit, and SPME linkups are deferred.'
        ],
        docLink: 'https://docs.google.com/document/d/1cQHwiLi51dfw-EadmJbTxw90wsOhuHpZusYI-sCGdN8/edit?usp=sharing'
      }
    ]
  },
  'uiux': {
    title: 'UI/UX Designer',
    subtitle: 'MySkill & Dibimbing',
    description: 'Designed user-centered digital experiences by applying UX research, information architecture, wireframing, high-fidelity interface design, and interactive prototyping to create intuitive and visually engaging products.',
    src: '/img/uiux.png',
    tools: ['Figma', 'FigJam', 'Auto Layout', 'UX Research', 'Interactive Prototyping'],
    projects: [
      {
        id: 'sowu-compro',
        title: 'Sound of IWU Company Profile',
        subtitle: 'Figma Interactive Prototype',
        description: 'Designed and developed an integrated website for Sound of IWU that combines a company profile with a member management system. The platform provides organizational information while streamlining member registration, data management, and administrative processes through a responsive and user-friendly interface.',
        src: '/img/uiux/sowu-compro.png',
        images: ['/img/uiux/sowu-compro.png'],
        tools: ['Figma', 'Interactive Prototyping', 'Design System', 'Typography', 'UI Design'],
        achievements: [
          'Designed user flows and responsive interfaces for both the public website and member management system.',
          'Created high-fidelity UI designs with a consistent design system to improve usability and visual consistency.',
          'Simplified member registration and administrative processes through intuitive information architecture and interface design.'
        ],
        figmaLink: 'https://www.figma.com/proto/Vy3jm6a2lKKWFEBhgSAfGz/SOWU?node-id=1-6&viewport=34%2C90%2C0.21&t=HzlmOdH2i8jcpVo7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A6&page-id=1%3A5',
        liveLink: 'https://soundofiwu.com/'
      },
      {
        id: 'mobile-ele',
        title: 'Mobile E-Learning IWU',
        subtitle: 'Mobile Interactive Prototype (Figma)',
        description: 'A responsive mobile e-learning interface concept for IWU students. Resolves standard learning management system usability issues by streamlining assignment submissions, course progression tracking, and student chats.',
        src: '/img/uiux/mobile-ele.png',
        images: ['/img/uiux/mobile-ele.png', '/img/uiux/mobile-ele-task.png'],
        layout: 'grid',
        tools: ['Figma', 'UX Research', 'Mobile Wireframing', 'Information Architecture', 'Interactive Prototyping'],
        achievements: [
          'Conducted comparative research to structure course timelines and clean student calendar interfaces.',
          'Designed mobile wireframes and high-fidelity layouts showcasing calendar schedules and task tracking cards.',
          'Developed a fully clickable mobile prototype illustrating course selection, task details, and checkout flows.'
        ],
        figmaLink: 'https://www.figma.com/proto/EBawNbWCbpgEkS6606sq7q/IMK-UAS?node-id=6-597&t=dHxOt5WrZX7ULGq0-1'
      },
      {
        id: 'rumah-makan',
        title: 'Rumah Makan Sederhana Redesign',
        subtitle: 'Web UI Redesign (Wireframe & Hi-Fi)',
        description: 'A visual and layout redesign of the famous Indonesian restaurant chain, Rumah Makan Sederhana. Optimizes branding assets, responsive web grids, menu browsing experiences, and booking flows for a clean, modern aesthetic.',
        src: '/img/uiux/rumah-makan.png',
        images: ['/img/uiux/rumah-makan.png'],
        tools: ['Figma', 'Wireframing', 'Hi-Fi UI Design', 'Branding Identity', 'Visual Hierarchy'],
        achievements: [
          'Developed low-fidelity and high-fidelity wireframes to redesign the customer ordering experience.',
          'Refined the visual design using a modern color palette, typography, and reusable UI components.',
          'Improved navigation flow and information architecture to enhance usability and accessibility.'
        ],
        figmaLink: 'https://www.figma.com/design/XJYx5SPUIUe6O0E9986m0r/REDESIGN--DIBIMBING.ID-?node-id=2-3&t=w5QR5M5Shpa6qPpG-1'
      }
    ]
  },
  'frontend-dev': {
    title: 'Frontend Developer',
    subtitle: 'SMKN 13 RPL, BNSP & S1 Informatics',
    description: 'Specialize in developing responsive frontend applications by bridging design and development. Experienced in implementing React.js, Tailwind CSS, REST API integration, and building intuitive user interfaces based on UI/UX principles.',
    src: '/img/fe.png',
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Vue.js',
      'Vuetify',
      'Tailwind CSS',
      'API Integration',
      'Git & GitHub'
    ],
    projects: [
      {
        id: 'bws-admin',
        title: 'Bank Woori Saudara Admin Portal',
        subtitle: 'Enterprise Banking Portal (Vue.js, Vuetify)',
        description: 'An enterprise admin portal designed and developed for Bank Woori Saudara. Facilitates secure banking operations, management of transaction records, client records, and access permissions. The interface is optimized using custom responsive components built on Vue.js and Vuetify.',
        src: '/img/fe-dev/bws-login.png',
        images: ['/img/fe-dev/bws-login.png', '/img/fe-dev/bws-admin.png'],
        tools: ['Vue.js', 'Vuetify', 'JavaScript', 'REST API Integration'],
        achievements: [
          'Developed responsive admin dashboard pages by translating UI designs into functional React.js components.',
          'Integrated REST APIs with form validation, loading states, pagination, and search/filter features.',
          'Built reusable components and maintained clean, modular code to improve scalability and maintainability.'
        ],
      },
      {
        id: 'sayaginet-dashboard',
        title: 'Sayaginet Operations Dashboard',
        subtitle: 'Internet Service Provider Portal (Vue.js, Vuetify)',
        description: 'An operational analytics control panel and database system for Sayaginet (Internet Service Provider). Tracks subscriber details, live bandwidth status, operational tickets, and billing details.',
        src: '/img/fe-dev/sayaginet-dashboard.png',
        images: ['/img/fe-dev/sayaginet-cover.png', '/img/fe-dev/sayaginet-dashboard.png'],
        tools: ['Vue.js', 'Vuetify', 'REST API Integration', 'JavaScript', 'SCSS'],
        achievements: [
          'Developed responsive frontend pages using React.js based on approved UI designs.',
          'Integrated REST APIs for CRUD operations, form handling, and dynamic data rendering.',
          'Created reusable components and maintained clean, modular code to support scalable development.'
        ],
      },
      {
        id: 'grad-absen',
        title: 'Graduation Attendance System',
        subtitle: 'SMKN 13 Bandung (Mobile-First, Vue.js, Vuetify)',
        description: 'Developed a web-based attendance system for the SMKN 13 Bandung graduation ceremony, enabling efficient QR code-based check-ins and real-time attendance monitoring. Successfully deployed during the event to support attendance management for over 300 graduates.',
        src: '/img/fe-dev/grad-absen.png',
        images: ['/img/fe-dev/grad-absen.png', '/img/fe-dev/grad-absen-dashboard.png'],
        layout: 'grid',
        tools: ['Vue.js', 'Vuetify', 'Mobile-First Design', 'QR Code Scanning', 'Live Statistics'],
        achievements: [
          'Developed a mobile-first QR code attendance system to streamline the graduation check-in process.',
          'Implemented real-time attendance monitoring and status updates for event organizers.',
          'Successfully supported attendance management for over 300 graduates during the graduation ceremony.'
        ],
      }
    ]
  }
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = portfolioData[id];

  const [selectedProject, setSelectedProject] = useState(null);
  const [fade, setFade] = useState(true);

  // Scroll to top on render, select first project
  useEffect(() => {
    window.scrollTo(0, 0);
    if (data && data.projects && data.projects.length > 0) {
      setSelectedProject(data.projects[0]);
    }
  }, [id, data]);

  const handleProjectSelect = (project) => {
    if (selectedProject?.id === project.id) {
      if (window.innerWidth < 1024) {
        document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    setFade(false);
    setTimeout(() => {
      setSelectedProject(project);
      setFade(true);
      setTimeout(() => {
        if (window.innerWidth < 1024) {
          document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }, 200);
  };

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-primary text-text">
        <h2 className="font-ovo text-4xl mb-4">Portfolio Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-aksen rounded-full font-mulish hover:bg-third transition-colors duration-300"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-text pt-24 pb-20 px-6 md:px-16 lg:px-36 relative">
      {/* Decorative Glow */}
      <div className="absolute w-[300px] h-[300px] bg-third/20 rounded-full blur-3xl top-24 left-10 -z-10 animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] bg-aksen/15 rounded-full blur-3xl bottom-24 right-10 -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 font-mulish text-aksen hover:text-text transition-colors duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </button>

        {/* Hero Header */}
        <div className="text-start mb-12">
          <span className="text-aksen font-mulish font-bold uppercase tracking-wider text-sm">{data.subtitle}</span>
          <h1 className="font-ovo text-5xl md:text-6xl mt-2">{data.title} Portfolio</h1>
          <div className="w-24 border-b-2 border-aksen mt-4"></div>
        </div>

        {/* Role Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 text-start">
          <div className="lg:col-span-8">
            <h3 className="font-ovo text-2xl text-aksen mb-3">Role Overview</h3>
            <p className="font-mulish text-text/80 leading-relaxed text-lg">
              {data.description}
            </p>
          </div>
          <div className="lg:col-span-4 bg-card border border-aksen/20 rounded-xl p-6">
            <h4 className="font-ovo text-xl text-aksen mb-3">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {data.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="font-mulish text-xs bg-third/40 border border-aksen/30 px-3 py-1.5 rounded-full text-text/90"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Section Divider */}
        <div className="border-t border-aksen/20 pt-12 mb-8 text-start">
          <h2 className="font-ovo text-3xl md:text-4xl text-text">Selected Projects</h2>
          <p className="font-mulish text-text/60 text-sm mt-1">Select a card below to display the project showcase and detailed specifications.</p>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data.projects.map((project) => {
            const isActive = selectedProject?.id === project.id;
            return (
              <div
                key={project.id}
                onClick={() => handleProjectSelect(project)}
                className={`group p-5 bg-card border rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 text-start ${isActive
                  ? 'border-aksen bg-cardHover shadow-lg shadow-aksen/10 scale-[1.01]'
                  : 'border-aksen/20 hover:border-aksen/60 hover:bg-cardHover/50'
                  }`}
              >
                {project.src && (
                  <div className="h-36 w-full overflow-hidden rounded-lg mb-4 bg-primary/40 relative border border-aksen/10">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                )}
                <span className="font-mulish text-[10px] text-aksen font-bold uppercase tracking-wider">{project.subtitle}</span>
                <h4 className="font-ovo text-lg text-text font-semibold mt-1 group-hover:text-aksen transition-colors">{project.title}</h4>
                <p className="font-mulish text-xs text-text/60 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                {isActive && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 w-full py-2.5 bg-aksen text-text hover:bg-third text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md shadow-aksen/15 lg:hidden"
                  >
                    <span>Lihat Detail Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 animate-bounce">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Project Details Showcase Area */}
        {selectedProject && (
          <div
            id="project-details"
            className={`transition-all duration-300 transform scroll-mt-24 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-card/65 backdrop-blur-md border border-aksen/30 rounded-2xl p-6 md:p-10 text-start shadow-xl shadow-black/30">

              {/* Media Column (Left) */}
              <div className="lg:col-span-5 space-y-4 w-full">
                {selectedProject.src ? (
                  selectedProject.images && selectedProject.images.length > 0 ? (
                    selectedProject.layout === 'grid' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                        {selectedProject.images.map((imgUrl, index) => (
                          <div key={index} className="bg-primary/50 border border-aksen/20 rounded-xl p-2 overflow-hidden shadow-lg hover:border-aksen/40 transition-colors">
                            <img
                              src={imgUrl}
                              alt={`${selectedProject.title} preview ${index + 1}`}
                              className="w-full h-auto rounded-lg object-cover border border-aksen/10 hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        {selectedProject.images.map((imgUrl, index) => (
                          <div key={index} className="bg-primary/50 border border-aksen/20 rounded-xl p-2 overflow-hidden shadow-lg hover:border-aksen/40 transition-colors">
                            <img
                              src={imgUrl}
                              alt={`${selectedProject.title} preview ${index + 1}`}
                              className="w-full h-auto rounded-lg object-cover border border-aksen/10 hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="bg-primary/50 border border-aksen/20 rounded-xl p-3 overflow-hidden shadow-lg">
                      <img
                        src={selectedProject.src}
                        alt={selectedProject.title}
                        className="w-full h-auto rounded-lg object-cover border border-aksen/10 hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  )
                ) : (
                  /* Renders a beautiful PM specifications & key deliverables dashboard card instead of screenshot */
                  <div className="bg-card/75 border border-aksen/30 rounded-xl p-6 shadow-lg shadow-black/20 text-start space-y-6 w-full">
                    <h3 className="font-ovo text-2xl text-aksen border-b border-aksen/20 pb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
                      </svg>
                      Project Specifications
                    </h3>

                    {/* Metadata indicators */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mulish text-sm text-text/80">
                      <div className="space-y-1">
                        <p className="text-aksen font-semibold text-xs uppercase tracking-wider">Role</p>
                        <p className="font-bold text-text">{selectedProject.role}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-aksen font-semibold text-xs uppercase tracking-wider">Timeline</p>
                        <p className="font-bold text-text">{selectedProject.timeline}</p>
                      </div>
                      <div className="space-y-1 sm:col-span-2 pt-2 border-t border-aksen/10">
                        <p className="text-aksen font-semibold text-xs uppercase tracking-wider">Project Type</p>
                        <p className="font-bold text-text">{selectedProject.status}</p>
                      </div>
                    </div>

                    {/* Deliverables checklist */}
                    <div className="pt-4 border-t border-aksen/10">
                      <p className="text-aksen font-ovo text-lg mb-3">Key Deliverables</p>
                      <div className="space-y-2.5">
                        {selectedProject.deliverables && selectedProject.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-primary/20 border border-aksen/10 px-4 py-2.5 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-aksen flex-shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
                            </svg>
                            <span className="font-mulish text-sm text-text/85 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Specifications (Right) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-mulish text-xs text-aksen font-bold uppercase tracking-wider">{selectedProject.subtitle}</span>
                  <h3 className="font-ovo text-3xl text-text mt-1 font-bold">{selectedProject.title}</h3>
                  <div className="w-16 border-b border-aksen/50 mt-3"></div>
                </div>

                <div>
                  <h4 className="font-ovo text-xl text-aksen mb-2">Project Overview</h4>
                  <p className="font-mulish text-sm text-text/80 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Specific project tools */}
                <div>
                  <h4 className="font-ovo text-xl text-aksen mb-3">Tools & Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="font-mulish text-xs bg-third/35 border border-aksen/25 px-3 py-1.2 rounded-md text-text/90"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specific key achievements */}
                <div>
                  <h4 className="font-ovo text-xl text-aksen mb-3">Key Highlights & Specifications</h4>
                  <div className="space-y-3.5">
                    {selectedProject.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-primary/20 border border-aksen/10 p-3.5 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-aksen flex-shrink-0 mt-0.5">
                          <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                        </svg>
                        <p className="font-mulish text-sm text-text/80 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  {selectedProject.figmaLink && (
                    <a
                      href={selectedProject.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-aksen hover:bg-third text-text font-mulish font-bold rounded-full border border-aksen/30 shadow-md shadow-aksen/10 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-aksen/20"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 12a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 8.25 12zm0-7.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 8.25 4.5zM15.75 12a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 15.75 12zm0-7.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 15.75 4.5zm-7.5 15a3.75 3.75 0 1 1 3.75-3.75 3.75 3.75 0 0 1-3.75 3.75zm0-7.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 8.25 12zm7.5 7.5a3.75 3.75 0 1 1 3.75-3.75 3.75 3.75 0 0 1-3.75 3.75zm0-7.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 15.75 12z" />
                      </svg>
                      {selectedProject.figmaLink.includes('design') ? 'View Figma Design' : 'View Figma Prototype'}
                    </a>
                  )}
                  {selectedProject.docLink && (
                    <a
                      href={selectedProject.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-aksen hover:bg-third text-text font-mulish font-bold rounded-full border border-aksen/30 shadow-md shadow-aksen/10 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-aksen/20"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                      </svg>
                      View Google Doc
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-secondary hover:bg-aksen/30 text-text font-mulish font-bold rounded-full border border-aksen/40 shadow-md flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                      </svg>
                      View Live Website
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetail;
