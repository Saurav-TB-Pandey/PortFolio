import React, { useState } from 'react';
import { ExternalLink, HeartHandshake, CalendarDays, CarFront, ShieldCheck, Building2, FolderGit2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Healthcare", value: "healthcare" },
    { label: "Enterprise Solutions", value: "enterprise" },
    { label: "Third-party Integrations", value: "integration" }
  ];

  const projects = [
    {
      title: "Continuity Connect",
      subtitle: "Care Provider & Aged Care Management Platform",
      desc: "A unified digital platform supporting employee, contractor, and partner care providers in Australia. Coordinates care services, compliance tracking, client documentation, scheduling, and billing.",
      techs: ["React.js", "Node.js", "PostgreSQL", "Prisma ORM", "TypeScript", "Tailwind CSS", "Stripe", "Telnyx", "LiveKit", "AWS (EC2/S3/Lambda)"],
      url: "https://continuityconnect.com.au/",
      categories: ["healthcare", "integration"],
      icon: <HeartHandshake size={48} strokeWidth={1} />,
      role: "Full Stack Developer"
    },
    {
      title: "Family Health Hub",
      subtitle: "HIPAA-Compliant Healthcare Platform",
      desc: "Led the end-to-end development of a HIPAA-compliant booking and management system for clinic bookings, dynamic patient intake forms (medical histories), and role-based staff portals.",
      techs: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI", "Bootstrap", "JWT", "SMTP", "AWS EC2", "AWS S3"],
      url: "https://familyhealthhub.com/",
      categories: ["healthcare"],
      icon: <CalendarDays size={48} strokeWidth={1} />,
      role: "Full Stack Developer (Sole Creator)"
    },
    {
      title: "AiVisor",
      subtitle: "Automotive Service Appointment Scheduler",
      desc: "Developed an appointment scheduling platform for automotive dealerships, featuring custom booking forms, Yup validation, and integration with Xtime APIs to synchronize dealer records in real-time.",
      techs: ["React.js", "Redux", "Node.js", "Express.js", "Yup", "Joi", "Xtime API Integration"],
      categories: ["integration"],
      icon: <CarFront size={48} strokeWidth={1} />,
      role: "Full Stack Developer"
    },
    {
      title: "SafeSphere",
      subtitle: "QHSE Safety Management Platform",
      desc: "A PaaS solution for construction, manufacturing, and oil & gas safety compliance. Developed incident logging, custom observation reporting, safety audits, and visual super admin dashboards.",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "CSS3", "RESTful APIs"],
      url: "https://safesphere.isafetylog.com/",
      categories: ["enterprise"],
      icon: <ShieldCheck size={48} strokeWidth={1} />,
      role: "Full Stack Developer"
    },
    {
      title: "IHG Integrations",
      subtitle: "InterContinental Hotels Group APIs",
      desc: "Developed and maintained highly scalable middleware APIs using MuleSoft for IHG's guest experience systems. Streamlined real-time reservation processing and guest services.",
      techs: ["MuleSoft", "API Development", "ESB", "RESTful APIs", "XML/JSON Transformations"],
      url: "https://www.ihg.com/",
      categories: ["enterprise", "integration"],
      icon: <Building2 size={48} strokeWidth={1} />,
      role: "API Developer"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="section" style={{ background: 'rgba(5, 8, 20, 0.3)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of production-grade systems, healthcare portals, and API networks I have built.
          </p>
        </div>

        <div className="projects-filter">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="glass-panel project-card">
              <div className="project-thumbnail">
                <span className="project-badge-top">{project.role}</span>
                <span className="project-icon-placeholder">{project.icon}</span>
              </div>
              
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 500 }}>{project.subtitle}</h4>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech-list">
                  {project.techs.map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {project.url && (
                <div className="project-footer">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
