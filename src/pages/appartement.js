import React from 'react';
import Layout from "../components/layout";
import '../components/style.scss';

const Appartement = (props) => {
  return (
    <Layout>
      <div class="container  has-background-white mx6">
      
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
          <br />
          <div class="container">
            De keuken is voorzien van alle apparatuur zoals een koelkast, keramische kookplaat, oven,
            magnetron, koffiezetapparaat en senseo, broodrooster en alle kookbenodigdheden. Er staat een
            ruime tafel met 4 stoelen waaraan u ontspannen kunt eten.
          </div>
          <br />
          <div class="container">
            Het terras, met zonneluifel, is voorzien van een tafel met 4 stoelen, bijbehorende kussens zijn
            beschikbaar. Een heerlijke terrasverhoging, waarop u heerlijk van de zon kunt genieten. Om
            comfortabel te kunnen liggen is er ook een ligbedkussen aanwezig.
          </div>
          <br />
          <div class="container">
            De slaapkamer is voorzien van een 2-persoonbed van 1,80m en een ruime kledingkast. Verder
            beschikt u over een wasmachine, wasrek en strijkplank.
          </div>
          <br />
          <div class="container">
            In het appartement is een kluisje aanwezig. U kunt tevens gebruik maken van de gratis WIFI en u
            kunt uw favoriete televisiezender volgen via canal-digitaal (NL) of TV Vlaanderen (BE).
            Er zijn 2 zwembadkaarten voor de ligbedden en parasols aan het zwembad.
        </div>
   
      </div>

    </Layout>

  );
};

export default Appartement;