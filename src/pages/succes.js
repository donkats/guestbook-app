import React from 'react';
import Footer from '../components/footer'
import Layout from '../components/layout';

const Succes = () => (
  <div>
    <Layout>
      <div className="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Bedankt!</h2>
        <hr class="hr" />

        <div className="container">
          Bedankt voor het schrijven van een bericht in ons gastenboek. Deze zal binnen enkele minuten gepubliceerd worden.
      </div>
      </div>
      <Footer />
    </Layout>
  </div>
)

export default Succes;
