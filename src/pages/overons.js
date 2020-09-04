import React from "react";
import Layout from "../components/layout";
import caroxander1 from '../assets/caroxander1.jpg';
import caroxander2 from '../assets/caroxander2.jpg';
import '../components/style.scss';

const OverOns = (props) => {
  return (
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Wie zijn wij?</h2>
        <hr class="hr" />

        <div class="container">
          Wij, Xander en Caro, hebben elkaar ontmoet in 2005. Al snel konden wij onze grootste passie delen,
          door samen een groot deel van de wereld te bereizen. Op al onze mooie reizen hebben we
          fantastische landschappen, culturen, steden en mensen mogen zien. Om vervolgens ook nog even te
          kunnen ontspannen en uit te rusten gingen wij regelmatig naar Tenerife. Een eiland met een
          natuurlijke ontspannenheid en vrijwel altijd lekker, zonnig weer. Al snel werden wij “verliefd” op het
          eiland, de mensen en het heerlijke eten en drinken.
          </div>
        <br />
        <div class="container">
          In 2020 hebben wij een appartement gekocht in het rustige Costa del Silencio, in het zuidelijkste
          puntje van Tenerife.
          Het adembenemende uitzicht vanaf ons eigen balkon, de heerlijke temperaturen, de rust, het
          heerlijke eten en drinken, de relatief lage prijzen en de gemoedelijke sfeer maken het voor ons een
          echt thuis van huis.
          </div>
        <br />
        <div class="container">
          Aangezien wij beiden een fulltime baan hebben en dus niet zo vaak zelf van ons appartement
          kunnen genieten, verhuren wij het appartement ten tijden dat wij er zelf niet zijn. Mocht u net zo
          enthousiast zijn geworden als wij, neem dan gerust contact met ons op voor een reservering, vragen
          over beschikbaarheid of overige vragen.
          </div>
        <br />
        <div class="container">
          Zonnige groeten,<br />
          Xander de Graaf en Caro Landwaart
          </div>

        <br />
        <br />

        <div class="columns is-centered">
          <div class="column" id="caro-xander-1">
            <img src={caroxander1} alt="" />
          </div>
          <div class="column" id="caro-xander-2">
            <img src={caroxander2} alt="" />
          </div>
        </div>
      </div>

    </Layout>

  );
};

export default OverOns;