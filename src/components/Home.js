import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';
import profilePic from '../assets/profile-pic.jpg';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="hero-content">
        <img src={profilePic} alt="Foto Profil" className="profile-pic" />
        <p className="greeting">Halo, It's Me</p>
        <h1 className="name-title">Maylani Putria Lingga</h1>
        <p className="tagline">
          <span className="highlight-text">Undergraduate Informatics Students at Satya Terra Bhinneka University</span>
        </p>
        <Link to="contact" smooth={true} duration={500} className="btn-contact">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;