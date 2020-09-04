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

        <Album />

      </div>
    </Layout>
  );
};

export default Fotos;