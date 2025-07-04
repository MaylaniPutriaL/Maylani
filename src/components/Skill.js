import React from 'react';
import './Skill.css';

// Impor ikon dari react-icons
// Pastikan telah menginstal 'react-icons' dengan: npm install react-icons
import { DiHtml5, DiCss3, DiJavascript, DiPython, DiJava } from 'react-icons/di';
import { DiPhp } from 'react-icons/di'; 

const skills = [
  { name: 'HTML', icon: <DiHtml5 /> },
  { name: 'CSS', icon: <DiCss3 /> },
  { name: 'PHP', icon: <DiPhp /> }, 
  { name: 'JavaScript', icon: <DiJavascript /> },
  { name: 'Java', icon: <DiJava /> }, 
  { name: 'Python', icon: <DiPython /> },
];

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-background-shapes">
        <div className="skills-shape skills-shape-1"></div>
        <div className="skills-shape skills-shape-2"></div>
        <div className="skills-shape skills-shape-3"></div>
      </div>

      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {skill.icon} 
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;