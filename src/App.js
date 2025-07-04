import React from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;