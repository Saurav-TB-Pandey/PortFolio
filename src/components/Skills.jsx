import React from 'react';
import { Layers, Cpu, Database, Cloud } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Technologies",
      icon: <Layers size={20} />,
      type: "bars",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Redux & State Management", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS & CSS3", level: 90 },
        { name: "Material UI & Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend & Real-time",
      icon: <Cpu size={20} />,
      type: "bars",
      skills: [
        { name: "Node.js & Express.js", level: 90 },
        { name: "RESTful API Design", level: 95 },
        { name: "WebSockets (Real-time)", level: 85 },
        { name: "Prisma & Sequelize ORM", level: 85 },
        { name: "MuleSoft API Integrations", level: 75 }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database size={20} />,
      type: "bars",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Database Schema Design", level: 90 },
        { name: "Query Optimization", level: 80 }
      ]
    },
    {
      title: "Cloud, DevOps & Tools",
      icon: <Cloud size={20} />,
      type: "badges",
      skills: [
        "AWS EC2", "AWS S3", "AWS Lambda", "AWS Textract", 
        "Git & GitHub", "Jenkins CI/CD", "Docker (Basic)", 
        "Postman", "Jira", "Agile / Scrum", "HIPAA Compliance", "Xtime API"
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(5, 8, 20, 0.3)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of the technologies, tools, and platforms I work with.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index} className="glass-panel skill-card">
              <div className="skill-card-header">
                <span className="skill-card-icon">{category.icon}</span>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>

              {category.type === "bars" ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-bar">
                      <div className="skill-item-info">
                        <span className="skill-item-name">{skill.name}</span>
                        <span className="skill-item-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="skills-list">
                  {category.skills.map((skillName, sIdx) => (
                    <span key={sIdx} className="badge badge-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                      {skillName}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
