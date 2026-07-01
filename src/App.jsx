import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

// Lazy load components that are below the fold to improve initial page load speed
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback for lazy components
const SectionLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0', color: 'var(--primary)' }}>
    <div className="loader" style={{ width: '30px', height: '30px', border: '3px solid', borderBottomColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
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
