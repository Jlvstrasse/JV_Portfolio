import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/movanqaw', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an issue submitting the form.');
      }
    })
    .catch(() => alert('There was an issue submitting the form.'));
  };

  return (
    <section>
      <h2>Contact</h2>
      {submitted ? (
        <p>Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;

