import React from "react";
import Layout from "../components/layout";
import '../components/style.scss';

const OverOns = (props) => {
  return (
    <Layout>
      <div class="container has-background-white" id="page-container">
      
          <h2 class="title is-2 has-text-centered">Appartement</h2>
          <hr class="hr" />

          <div class="container">
            Ons appartement is gelegen aan de oceaanzijde van het complex op de 1e verdieping en is
            bereikbaar via een trap aan de voorzijde.
          </div>
          <br />
          <div class="container">
            Ons appartement is modern ingericht, met voldoende opbergmogelijkheden.
            In de woonkamer staat een lederen bank die tevens dienst doet als ruime 2 persoons slaapbank. Ook
            staat er een comfortabele losse stoel.
          </div>
   
      </div>

    </Layout>

  );
};

export default OverOns;