import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Bedankt = () => (
  <Layout>
    <div class="container has-background-white" id="page-container">

      <h2 class="title is-2 has-text-centered">Bedankt!</h2>
      <hr class="hr" />

      <div class="container">
        Bedankt, uw bericht is succesvol verzonden! Wij zullen uw bericht zo spoedig beantwoorden,
        meestal lukt dit binnen 24 uur.
      </div>
    </div>
  </Layout>
)

export default Bedankt;
