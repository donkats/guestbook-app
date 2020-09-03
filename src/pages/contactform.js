import React from 'react';

const ContactForm = (props) => {

  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <p>
        <label class="label">Naam:<br/><input type="text" name="name" /></label>
      </p>
      <p>
        <label class="label">Emailadres:<br/>
        <input type="email" name="email" /></label>
      </p>

      <p>
        <label class="label">Onderwerp:<br/>
        <textarea name="subject"></textarea></label>
      </p>

      <p>
        <label class="label">Bericht:<br/>
        <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Verzenden</button>
      </p>
    </form>
  )
}


export default ContactForm;