import React, { useState, useEffect } from 'react';
import { Mail, Download, ArrowRight, Code2, Server, Cloud } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const words = ['Full Stack Developer', 'MERN Stack Specialist', 'AWS Cloud Enthusiast', 'Security-Focused Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before delete
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="animate-glow" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }}></span>
            Available for new opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Saurav Kumar</span>
          </h1>

          <div className="hero-subtitle">
            <span>{currentText}</span>
            <span className="typing-cursor"></span>
          </div>

          <p className="hero-description">
            A results-driven Full Stack Developer with 3+ years of experience specializing in the MERN stack, robust API designs, real-time WebSockets, and secure AWS cloud deployment.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => handleScrollToSection('projects')}>
              View My Work <ArrowRight size={18} />
            </button>
            <a 
              href="/Saurav_Kumar_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Get Resume <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-title">Connect:</span>
            <a href="https://github.com/Saurav-TB-Pandey" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://linkedin.com/in/pandeysaurav" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:pandeysaurav878@gmail.com" className="hero-social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow-circle"></div>
          <div className="hero-avatar-container">
            <div className="hero-avatar-placeholder">
              <Code2 size={70} strokeWidth={1.5} />
              <div style={{ marginTop: '1rem', fontWeight: 600, fontSize: '1.2rem', fontFamily: 'var(--font-sans)' }}>&lt; MERN Specialist /&gt;</div>
            </div>
          </div>
          <div className="hero-tech-orbit">
            <div className="orbit-icon icon-1" title="React.js">
              <Code2 size={24} />
            </div>
            <div className="orbit-icon icon-2" title="Node.js & Express">
              <Server size={24} />
            </div>
            <div className="orbit-icon icon-3" title="AWS Cloud">
              <Cloud size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
