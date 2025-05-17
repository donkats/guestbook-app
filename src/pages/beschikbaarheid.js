import React from "react";
import BeschikbaarheidForm from './beschikbaarheidform';
import Layout from "../components/layout";
import '../components/style.css';


const Contact = (props) => {
  return (
    <Layout>

      <div className="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Beschikbaarheid</h2>
        <hr class="hr" />

        <div className="container">
          Bent u geïnteresseerd in één van onze appartementen en wilt u weten of wij op de
door u gewenste data nog beschikbaarheid hebben, vult u dan onderstaand formulier
in, dan nemen wij zo spoedig mogelijk contact met u op. Als u voorkeur heeft voor
een bepaald appartement, vermeldt u dit dan bij uw vraag.
        </div>
        <br />
        <div className="container">
          <BeschikbaarheidForm />
        </div>

      </div>

    </Layout>

  );
};

export default Contact;
