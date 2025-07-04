import React, { useState, useRef } from 'react'; 
import emailjs from '@emailjs/browser'; 
import './Contact.css';
import gmailIcon from '../assets/icons/email.png';
import whatsappIcon from '../assets/icons/whatsapp.png';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import instagramIcon from '../assets/icons/instagram.jpeg';

function ContactSection() {
  const form = useRef(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const SERVICE_ID = 'service_zha8kbh';
    const TEMPLATE_ID = '__ejs-test-mail-service__';
    const PUBLIC_KEY = 'VulaoEUlxWqRfinrus04D';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Your message has been sent successfully!');

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('Email sending failed:', error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background-shapes">
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
        <div className="contact-shape contact-shape-3"></div>
      </div>

      <h2>Contact Me</h2> {/* Judul Contact Me */}
      <div className="contact-content">
        {/* Tambahkan ref={form} ke elemen form */}
        <form onSubmit={handleSubmit} className="contact-form" ref={form}>
          <div className="form-group">
            <label htmlFor="name">Name:</label> 
            <input
              type="text"
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label> 
            <input
              type="email"
              id="email"
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label> 
            <textarea
              id="message"
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="mailto:maylaniputrialingga2006@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="Gmail" className="social-icon" />
          </a>
          <a href="https://wa.me/6281260183937" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://github.com/MaylaniPutriaL" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/maylani-putria-lingga-10b239319" target="_blank" rel="noopener noreferrer"> {/* Perbaiki URL LinkedIn */}
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/maylaniputria_/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;