import React from 'react';

const ContactForm = (props) => {

  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <div className="field">
        <div className="control">
          <label className="label">Naam
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
        <label class="label">Email</label>
        <div class="control">
          <input
            className="input is-fullwidth"
            type="email"
            name="email"
            data-validate="require"
            required
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Onderwerp
                    <input
              className="input is-fullwidth"
              name="onderwerp"
              type="text"
            />
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Bericht
                    <textarea
              className="textarea is-fullwidth"
              rows="5"
              name="bericht"
              placeholder="Typ hier uw bericht"
            />
          </label>
        </div>
      </div>

      <p>
        <button type="submit">Verzenden</button>
      </p>
    </form>
  )
}


export default ContactForm;