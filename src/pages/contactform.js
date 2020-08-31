import React from 'react';
import { Grid, Cell } from 'react-mdl';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Uw bericht is succesvol verzonden!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
                <Grid className="form-grid">
                    <Cell col={2}>Naam:</Cell>
                    <Cell col={3}><input type="text" name="name" value={name} onChange={this.handleChange} /></Cell>
                </Grid>
            </label>
            <label>
            <Grid className="form-grid">
                <Cell col={2}>E-mailadres:</Cell>
                <Cell col={3}><input type="email" name="email" value={email} onChange={this.handleChange} /></Cell>
            </Grid>
            </label>
            <label>
            <Grid className="form-grid">
                <Cell col={2}>Bericht:</Cell>
                <Cell col={3}><textarea name="message" value={message} onChange={this.handleChange} /></Cell>
            </Grid>
            </label>
            <button type="submit">Verzenden</button>
          </p>
        </form>
      );
    }
  }

export default ContactForm;