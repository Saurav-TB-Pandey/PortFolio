import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkeletonLoader from './components/SkeletonLoader';
import './App.css';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<SkeletonLoader />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
      
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
