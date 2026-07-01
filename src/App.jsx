import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Skeleton } from 'boneyard-js/react';
import './bones/registry'; // Boneyard skeleton registry
import './App.css';

// Artificial delay to demonstrate the Boneyard skeleton loader
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const About = lazy(() => delay(2500).then(() => import('./components/About')));
const Skills = lazy(() => delay(2500).then(() => import('./components/Skills')));
const Experience = lazy(() => delay(2500).then(() => import('./components/Experience')));
const Projects = lazy(() => delay(2500).then(() => import('./components/Projects')));
const Contact = lazy(() => delay(2500).then(() => import('./components/Contact')));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      
      <Suspense fallback={
        <Skeleton name="portfolio-content" loading={true}>
          {/* Boneyard needs a child to measure against for relative positioning */}
          <div style={{ minHeight: '3000px', width: '100%' }}></div>
        </Skeleton>
      }>
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
