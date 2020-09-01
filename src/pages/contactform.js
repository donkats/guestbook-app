import React from 'react';

const ContactForm = (props) => {

  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <p>
        <label>Naam: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Emailadres: <input type="email" name="email" /></label>
      </p>

      <p>
        <label>Onderwerp: <textarea name="subject"></textarea></label>
      </p>

      <p>
        <label>Bericht: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Verzenden</button>
      </p>
    </form>
  )
}


export default ContactForm;