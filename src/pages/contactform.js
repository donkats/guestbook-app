import React, { useState } from 'react';

const ContactForm = (props) => {

  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage('Bedankt, uw bericht is succesvol verzonden! Wij zullen uw bericht zo spoedig beantwoorden, meestal lukt dit binnen 24 uur.');
  };

  return (
    <div>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={(e) => onSubmit(e)}>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <div className="field">
        <div className="control">
          <label className="label">Naam:
                    <input
              className="input is-fullwidth"
              name="naam"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div class="field">
        <div className="control">
          <label className="label">Emailadres:
          <input
              className="input is-fullwidth"
              type="email"
              name="email"
              data-validate="require"
              required
            />
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Onderwerp:
                    <input
              className="input is-fullwidth"
              name="onderwerp"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Bericht:
                    <textarea
              className="textarea is-fullwidth"
              rows="5"
              name="bericht"
              placeholder="Typ hier uw bericht"
              required
            />
          </label>
        </div>
      </div>

      <div className="buttons">
        <button className="button is-primary" type="submit">Verzenden</button>
      </div>
    </form>
    <span style={{ "margin-top": "30px", "color": "blue" }}>{message}</span>
    </div>
  )
}

export default ContactForm;