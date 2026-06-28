import React from 'react';
import { HeartPulse, Car, ShieldAlert, Users, Hotel, Code } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer who bridges elegant user interfaces with robust backend architectures.
          </p>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h3 className="about-greeting">Building High-Performance Web Applications</h3>
            <p className="about-para">
              I am a results-driven Full Stack Developer with over 3 years of hands-on experience in building scalable, secure, and high-performance applications using the MERN stack. My engineering background enables me to approach problem-solving with high structure and analytical thinking.
            </p>
            <p className="about-para">
              My expertise lies in full-stack system architecture, crafting secure modular RESTful APIs with Joi/Yup, implementing real-time interactions via WebSockets, and setting up automated deployments on AWS (EC2, S3, Lambda, Textract).
            </p>

            <h4 className="about-domains-title">Industry Domain Expertise</h4>
            <div className="about-domains-grid">
              <div className="about-domain-item">
                <span className="about-domain-icon"><HeartPulse size={18} /></span>
                <span>Healthcare & NDIS</span>
              </div>
              <div className="about-domain-item">
                <span className="about-domain-icon"><Users size={18} /></span>
                <span>Aged Care & NDIS</span>
              </div>
              <div className="about-domain-item">
                <span className="about-domain-icon"><Car size={18} /></span>
                <span>Automotive Dealerships</span>
              </div>
              <div className="about-domain-item">
                <span className="about-domain-icon"><ShieldAlert size={18} /></span>
                <span>QHSE (Safety Management)</span>
              </div>
              <div className="about-domain-item">
                <span className="about-domain-icon"><Hotel size={18} /></span>
                <span>Hospitality & Tourism</span>
              </div>
              <div className="about-domain-item">
                <span className="about-domain-icon"><Code size={18} /></span>
                <span>Enterprise API Integration</span>
              </div>
            </div>
          </div>

          <div className="code-editor-wrapper">
            <div className="code-editor code-editor-about">
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot dot-red"></span>
                  <span className="code-dot dot-yellow"></span>
                  <span className="code-dot dot-green"></span>
                </div>
                <span className="code-title">saurav_profile.js</span>
                <span></span>
              </div>
              <div className="code-body">
                <div>
                  <span className="syntax-keyword">const</span> <span className="syntax-property">sauravPandey</span> <span className="syntax-punct">=</span> <span className="syntax-punct">&#123;</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">role</span><span className="syntax-punct">:</span> <span className="syntax-string">"Full Stack Developer"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">experience</span><span className="syntax-punct">:</span> <span className="syntax-string">"3+ Years"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">location</span><span className="syntax-punct">:</span> <span className="syntax-string">"Jaipur, Rajasthan, India"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">specialization</span><span className="syntax-punct">:</span> <span className="syntax-punct">[</span>
                </div>
                <div style={{ paddingLeft: '3rem' }}>
                  <span className="syntax-string">"MERN Stack"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '3rem' }}>
                  <span className="syntax-string">"TypeScript & PostgreSQL"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '3rem' }}>
                  <span className="syntax-string">"AWS Cloud Deployments"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '3rem' }}>
                  <span className="syntax-string">"HIPAA Compliant Healthcare"</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-punct">]</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">currentCompany</span><span className="syntax-punct">:</span> <span className="syntax-string">"SoftSensor AI"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">position</span><span className="syntax-punct">:</span> <span className="syntax-string">"Senior Software Engineer L1"</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">interests</span><span className="syntax-punct">:</span> <span className="syntax-punct">[</span><span className="syntax-string">"Web Dev"</span><span className="syntax-punct">,</span> <span className="syntax-string">"Cloud Computing"</span><span className="syntax-punct">,</span> <span className="syntax-string">"API Design"</span><span className="syntax-punct">]</span><span className="syntax-punct">,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="syntax-property">openForOpportunities</span><span className="syntax-punct">:</span> <span className="syntax-number">true</span>
                </div>
                <div>
                  <span className="syntax-punct">&#125;;</span>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <span className="syntax-comment">// Let's build something amazing together!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
