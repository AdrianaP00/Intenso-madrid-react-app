import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_ekhvjlh', 'template_1kql7og', {
      from_email: email,
      to_email: 'elyeestatua@gmail.com',
    }, 'ngs9p7jI_0GhMhbS9')
      .then((result) => {
        console.log(result.text);
        alert('Gracias por contactar!');
        setEmail('');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Oops, something went wrong. Please try again later.');
      });
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Contact box" />
        <h1 className="headtext__cormorant">Contactanos tramite correo</h1>
        <p className="p__opensans">para organizar tu mejores eventos</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Inserta tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="custom__button">Subscrivete</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
