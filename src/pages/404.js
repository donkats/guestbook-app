import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div class="container has-background-white" id="page-container">

      <h2 class="title is-2 has-text-centered">Helaas!</h2>
      <hr class="hr" />

      <div class="container">
        Deze pagina bestaat niet. De door u opgevraagde pagina kon niet gevonden worden. Keer terug naar
      <Link to="/">Home</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
