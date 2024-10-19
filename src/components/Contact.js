import React, { useState } from 'react';
import './Contact.css'; // Optional: Import CSS for styling

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
    </div>
  );
};

export default Contact;
