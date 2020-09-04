import React, { useState } from 'react';

const BeschikbaarheidForm = (props) => {

  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="beschikbaarheid">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="beschikbaarheid" />

      <div className="field is-inline-block-desktop" id="field-large">
        <div className="control">
          <label className="label" id="input-margin">Volledige naam:
                    <input
              className="input"
              name="volledige naam"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div className="field is-inline-block-desktop" id="field-small">
        <div className="control">
          <label className="label">Aantal personen:
                    <input
              className="input"
              name="aantal personen"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div className="field is-inline-block-desktop" id="field-large">
        <div className="control">
          <label className="label" id="input-margin">Straatnaam:
                    <input
              className="input"
              name="straatnaam"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div className="field is-inline-block-desktop" id="field-small">
        <div className="control">
          <label className="label">Huisnummer:
                    <input
              className="input"
              name="huisnummer"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div className="field is-inline-block-desktop" id="field-medium">
        <div className="control">
          <label className="label" id="input-margin">Postcode:
                    <input
              className="input"
              name="postcode"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div className="field is-inline-block-desktop" id="field-medium">
        <div className="control">
          <label className="label">Woonplaats:
                    <input
              className="input"
              name="woonplaats"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div className="field is-inline-block-desktop" id="field-medium">
        <div className="control">
          <label className="label"  id="input-margin">Telefoonnummer:
                    <input
              className="input"
              name="telefoonnummer"
              type="text"
              required
            />
          </label>
        </div>
      </div>

      <div class="field is-inline-block-desktop" id="field-medium">
          <div className="control">
        <label className="label">Emailadres:
          <input
            className="input"
            type="email"
            name="emailadres"
            data-validate="require"
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
              name="vraag over beschikbaarheid"
              placeholder="Hier kunt u ons laten weten voor welke periode u graag zou willen boeken, natuurlijk kunt u ook overige vragen en opmerkingen hier kwijt."
              required
            />
          </label>
        </div>
      </div>

      <div className="buttons">
        <button className="button is-primary" type="submit">Verzenden</button>
      </div>
    </form>
  )
}


export default BeschikbaarheidForm;