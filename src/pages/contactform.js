import React from 'react';

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

                        Naam:
                    <input type="text" name="name" value={name} onChange={this.handleChange} />

                    </label>
                    <label>

                        E-mailadres:
                <input type="email" name="email" value={email} onChange={this.handleChange} />

                    </label>
                    <label>

                        Bericht:
                <textarea name="message" value={message} onChange={this.handleChange} />

                    </label>
                    <button type="submit">Verzenden</button>
                </p>
            </form>
        );
    }
}

export default ContactForm;