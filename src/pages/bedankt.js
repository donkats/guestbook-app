import React from 'react';
import Footer from '../components/footer'
import Layout from '../components/layout';

const Bedankt = () => (
  <div>
    <Layout>
      <div className="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Bedankt!</h2>
        <hr class="hr" />

        <div className="container">
          Bedankt, uw bericht is succesvol verzonden! Wij zullen uw bericht zo spoedig beantwoorden,
          meestal lukt dit binnen 24 uur.
      </div>
      </div>
      <Footer />
    </Layout>
  </div>
)

export default Bedankt;
