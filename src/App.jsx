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

let hasLoggedEasterEgg = false;

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  // Developer Console Easter Egg
  useEffect(() => {
    if (hasLoggedEasterEgg) return;
    hasLoggedEasterEgg = true;
    
    const asciiArt = `
 ██████╗  █████╗ ██╗   ██╗██████╗  █████╗ ██╗   ██╗
██╔════╝ ██╔══██╗██║   ██║██╔══██╗██╔══██╗██║   ██║
███████╗ ███████║██║   ██║██████╔╝███████║██║   ██║
╚════██║ ██╔══██║██║   ██║██╔══██╗██╔══██║╚██╗ ██╔╝
███████║ ██║  ██║╚██████╔╝██║  ██║██║  ██║ ╚████╔╝ 
╚══════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  
    `;
    
    console.log(
      `%c${asciiArt}\n%cHello there! 👋 Welcome to the console.\n\n%cIt takes a curious mind to open the developer tools. \nI built this portfolio to showcase not just my frontend skills, but my obsession with performance, clean code, and hidden details.\n\nFeel free to poke around the source. If you're looking for an engineer who builds scalable, user-focused applications, we should definitely talk.\n\n%c📬 Email: pandeysaurav878@gmail.com\n🔗 GitHub: github.com/Saurav-TB-Pandey\n\n%c[Secret Hint]: Close this console, click anywhere on the website background, and type any special character (like @, #, or $) to unlock the hidden terminal.`,
      "color: #00F0FF; font-weight: bold; font-family: monospace;",
      "color: #8E2DE2; font-size: 20px; font-weight: bold;",
      "color: #F1F5F9; font-size: 14px; line-height: 1.6;",
      "color: #10B981; font-size: 14px; font-weight: bold; line-height: 1.6; padding: 8px 0;",
      "color: #64748B; font-size: 13px; font-style: italic;"
    );
  }, []);

  // Global key listener for the secret terminal (` key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in any input field (contact form, terminal, etc.)
      const tagName = e.target.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tagName) || e.target.isContentEditable) {
        return;
      }

      // Check if the pressed key is a special character
      const isSpecialChar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]$/.test(e.key);
      
      if (isSpecialChar) {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    
    const handleCustomOpen = () => setIsTerminalOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-terminal', handleCustomOpen);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-terminal', handleCustomOpen);
    };
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
          </p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
