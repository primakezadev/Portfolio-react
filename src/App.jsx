import React from 'react';
import Hero from './components/Hero';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Navbar from './components/navbar';
import './index.css'; // We'll add smooth scroll here

function App() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Navbar />
    </>
  );
}

export default App;
