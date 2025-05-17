import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <div>
    <Layout>
      <div className="container has-background-white" id="page-container">

        <h2 className="title is-2 has-text-centered">Helaas!</h2>
        <hr className="hr" />

        <div className="container">
          De door u opgevraagde pagina kon helaas niet gevonden worden. Keer terug naar{' '}
          <Link to="/"> Home</Link>.
        </div>
      </div>
      <Footer />
    </Layout>
  </div>
)

export default NotFoundPage;
