import React, { useState, useEffect, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { TerminalSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LazySection from './components/LazySection';
import {
  AboutSkeleton,
  SkillsSkeleton,
  ExperienceSkeleton,
  ProjectsSkeleton,
  ContactSkeleton
} from './components/SkeletonLoader';
import './App.css';

import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Easter Eggs
import SecretTerminal from './components/SecretTerminal';
import DevStats from './components/DevStats';
import PersonalNote from './components/PersonalNote';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  // Global key listener for the secret terminal (` key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in an input (except the terminal input itself)
      if (e.key === '`' || e.key === '~') {
        if (e.target.tagName !== 'INPUT' || e.target.classList.contains('terminal-input')) {
          e.preventDefault();
          setIsTerminalOpen(prev => !prev);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      <div id="about">
        <LazySection fallback={<AboutSkeleton />}>
          <About />
        </LazySection>
      </div>
      <div id="skills">
        <LazySection fallback={<SkillsSkeleton />}>
          <Skills />
        </LazySection>
      </div>
      <div id="experience">
        <LazySection fallback={<ExperienceSkeleton />}>
          <Experience />
        </LazySection>
      </div>
      <div id="projects">
        <LazySection fallback={<ProjectsSkeleton />}>
          <Projects />
        </LazySection>
      </div>
      <div id="contact">
        <LazySection fallback={<ContactSkeleton />}>
          <Contact />
        </LazySection>
      </div>
      
      {/* Secret Easter Egg Overlays */}
      <SecretTerminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
        onOpenStats={() => setIsStatsOpen(true)}
        onOpenNote={() => setIsNoteOpen(true)}
      />
      <DevStats isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)} />
      <PersonalNote isOpen={isNoteOpen} onClose={() => setIsNoteOpen(false)} />
      
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-logo">
            &lt;SauravKumar /&gt;
          </div>
          <p className="footer-quote">
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Saurav Kumar. All rights reserved. Designed with visual excellence.
            <span 
              onClick={() => setIsTerminalOpen(true)}
              style={{ cursor: 'pointer', marginLeft: '10px', opacity: 0.5, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.5}
              title="SysAdmin Access"
            >
              <TerminalSquare size={14} style={{ verticalAlign: 'middle' }} />
            </span>
          </p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
