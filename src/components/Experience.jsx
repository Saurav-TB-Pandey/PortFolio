import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "SoftSensor AI",
      url: "https://www.softsensor.ai/",
      location: "Jaipur, Rajasthan",
      roles: [
        {
          title: "Senior Software Engineer L1",
          date: "Jun 2026 – Present",
          responsibilities: [
            "Spearheaded optimizations of company products, enhancing performance and efficiency through effective code improvements.",
            "Developed and implemented new features and functionalities, significantly elevating user experience and product value.",
            "Deployed applications on AWS using CI/CD practices, ensuring smooth and reliable releases through automated processes.",
            "Utilized Docker for containerization, facilitating easier deployment and scalability of microservices-based solutions.",
            "Leveraged multiple databases including PostgreSQL, MongoDB, and MySQL for efficient data management and retrieval.",
            "Collaborated within a MERN stack environment, employing React.js and Node.js to deliver dynamic and responsive web applications."
          ]
        }
      ]
    },
    {
      company: "smartData Enterprises",
      location: "Mohali, Punjab",
      roles: [
        {
          title: "Associate Software Developer - II",
          date: "Aug 2025 – Jun 2026",
          responsibilities: [
            "Lead end-to-end development of scalable web systems using MERN stack architecture",
            "Design and implement secure, modular RESTful APIs with comprehensive validation using Joi and Yup",
            "Develop real-time features using WebSocket for live notifications and seamless user interactions",
            "Optimize database queries and API endpoints for improved performance and scalability",
            "Deploy and maintain applications on AWS cloud infrastructure (EC2, S3, Textract, Lambda)",
            "Implement security best practices including JWT authentication, data encryption, and role-based access control (RBAC)",
            "Conduct code reviews and mentor junior developers on best practices"
          ]
        },
        {
          title: "Associate Software Developer - I",
          date: "Sep 2024 – Jul 2025",
          responsibilities: [
            "Developed and maintained full-stack web applications using React.js, Node.js, and Express.js",
            "Created responsive UI components using Material UI, Bootstrap, and custom CSS",
            "Integrated third-party APIs and services including payment gateways (Stripe) and notification systems",
            "Implemented state management using Redux for complex application workflows",
            "Wrote unit tests and integration tests to ensure code quality and reliability",
            "Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives"
          ]
        },
        {
          title: "Associate Software Developer Intern",
          date: "Oct 2023 – Aug 2024",
          responsibilities: [
            "Received comprehensive training in MERN stack technologies and industry best practices",
            "Collaborated with senior developers on multiple enterprise web application projects",
            "Contributed to frontend development using React.js and backend development using Node.js/Express",
            "Assisted in debugging and fixing production issues, improving application stability",
            "Documented code, system flows, and technical specifications"
          ]
        }
      ]
    },
    {
      company: "Caelius Consulting",
      location: "Mohali, Punjab",
      roles: [
        {
          title: "Technical Associate",
          date: "Feb 2023 – Aug 2023",
          responsibilities: [
            "Developed and maintained enterprise-grade APIs using the MuleSoft platform",
            "Analyzed and monitored API performance metrics, identifying and resolving response bottlenecks",
            "Supported complete API development lifecycle from requirements gathering to deployment",
            "Collaborated directly with clients to understand and document integration requirements",
            "Ensured seamless service delivery through proactive monitoring and issue resolution"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My career timeline highlighting software engineering positions, responsibilities, and achievements.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="glass-panel timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-company-title">{exp.company}</h3>
                    {exp.url ? (
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="timeline-company-link">
                        Visit website <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </div>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                
                <div className="timeline-roles-container">
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} className="timeline-role-block">
                      <span className="timeline-role-dot"></span>
                      <div className="timeline-role-header">
                        <h4 className="timeline-role-title">{role.title}</h4>
                        <span className="timeline-role-date">{role.date}</span>
                      </div>
                      <ul className="timeline-responsibilities">
                        {role.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
