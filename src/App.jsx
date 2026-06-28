import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
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
    </div>
  );
}

export default App;
