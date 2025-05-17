import React from "react";
import Layout from "../components/layout";
import Album from './album';
import '../components/style.scss';

const Fotos = (props) => {
  return (
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Foto's</h2>
        <hr class="hr" />
<div class="container">
          Let op: De foto's die u hier ziet appartement 102, foto's van appartement 107 zullen dit najaar worden toegevoegd op deze pagina. 
        </div>
        <Album />

      </div>
    </Layout>
  );
};

export default Fotos;
