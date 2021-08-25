import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="contact" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Get in touch</h2>
      <p>
        
      </p>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
