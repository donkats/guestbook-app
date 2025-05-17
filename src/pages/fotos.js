import React from "react";
import Layout from "../components/layout";
import Album from './album';
import '../components/style.css';

const Fotos = (props) => {
  return (
    <Layout>
      <div className="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Foto's</h2>
        <hr class="hr" />
<div className="container">
          Let op: De foto's die u hier ziet zijn van appartement 102. Foto's van appartement 107 zullen dit najaar worden toegevoegd op deze pagina. 
        </div>
        <Album />

      </div>
    </Layout>
  );
};

export default Fotos;
