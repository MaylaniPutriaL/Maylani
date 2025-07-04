import React from 'react';
import './About.css';
import aboutImage from '../assets/about-me.jpg'; 

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Maylani is student in the Informatics Major at the Satya Terra Bhinneka University. 
            She is a person who likes to learn new things, creative, and able to work efficienly. 
            During her time as a student, she was active several national competitions and has good time management between academics and competitions.</p>
          <p>
            Di luar coding, saya gemar membaca, mendengarkan musik, makeup, travelling, badminton. Hal-hal ini menginspirasi kreativitas saya untuk belajar hal baru.
          </p>
        </div>
        <div className="about-image-container">
          <img src={aboutImage} alt="Ilustrasi Tentang Saya" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;