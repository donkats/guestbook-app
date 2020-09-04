import React from "react";
import ContactForm from './contactform';
import Layout from "../components/layout";
import '../components/style.scss';


const Contact = (props) => {
  return (
    <Layout>

<div class="column has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Contact</h2>
        <hr class="hr" />

        <div class="container">
          U kunt contact met ons opnemen door onderstaande contactformulier in te vullen. Wij zullen dan zo
          snel mogelijk reageren.
        </div>
        <br />
        <div class="container">
          <ContactForm></ContactForm>
        </div>

      </div>

    </Layout>

  );
};

export default Contact;