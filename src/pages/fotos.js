import React from "react";
import Layout from "../components/layout";
import Album from './album';
import Album107 from './album107';
import '../components/style.css';

const Fotos = () => {
  return (
    <Layout>
      <div className="container has-background-white" id="page-container">
        <h2 className="title is-2 has-text-centered">Foto's</h2>
        <hr className="hr" />
        
        <div className="container">
          Foto's appartement 102 en 107.
        </div>

        <div className="container" style={{ marginBottom: "3rem" }}>
          <h3 className="title is-4 has-text-centered">Appartement 102</h3>
          <Album />
        </div>

        <div className="container">
          <h3 className="title is-4 has-text-centered">Appartement 107</h3>
          <Album107 />
        </div>
      </div>
    </Layout>
  );
};

export default Fotos;
