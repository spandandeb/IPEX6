import React, { useState } from 'react';
import './Contact.css'; // Optional: Import CSS for styling
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setSubmitted(true); // Set submitted state to true
    
    
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false); // Reset submitted state to false
    }, 3000); // Adjust the timeout duration as needed
  };

  return (
    <div className="contact-container">
      <h2>Contact Form</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>{name}, your message is sent successfully!</p>
      )}
      <footer className="footer">
        
        <div className="icon-links">
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
        <p>&copy; 2024 Spandan Deb. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
