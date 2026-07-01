import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
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

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      <LazySection fallback={<AboutSkeleton />}>
        <About />
      </LazySection>
      <LazySection fallback={<SkillsSkeleton />}>
        <Skills />
      </LazySection>
      <LazySection fallback={<ExperienceSkeleton />}>
        <Experience />
      </LazySection>
      <LazySection fallback={<ProjectsSkeleton />}>
        <Projects />
      </LazySection>
      <LazySection fallback={<ContactSkeleton />}>
        <Contact />
      </LazySection>
      
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
