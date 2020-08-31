import React from "react";
import ContactForm from './contactform';
import Layout from "../components/layout";
import '../components/style.scss';


const Contact = (props) => {
  return (
    <Layout>

      <div class="container has-background-white" id="page-container">
      
          <h2 class="title is-2 has-text-centered">Appartement</h2>
          <hr class="hr" />

          <div class="container">
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact" /></form>
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