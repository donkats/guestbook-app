import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <div>
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Helaas!</h2>
        <hr class="hr" />

        <div class="container">
          De door u opgevraagde pagina kon helaas niet gevonden worden. Keer terug naar
      <Link to="/"> Home</Link>.
      </div>
      </div>
      <Footer />
    </Layout>
  </div>
)

export default NotFoundPage
