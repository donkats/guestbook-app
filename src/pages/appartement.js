import React from 'react';
import Layout from "../components/layout";
import photoArrow from '../assets/rocasfotoapp.jpg';
import '../components/style.scss';

const Appartement = (props) => {

  return (
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Ons appartement</h2>
        <hr class="hr" />

        <div class="container">
          Ons appartement is gelegen aan de oceaanzijde van het complex op de 1e verdieping en is
          bereikbaar via een trap aan de voorzijde.
          </div>
        <br />
        <div class="container">
          Ons appartement is modern ingericht, met voldoende opbergmogelijkheden.
          In de woonkamer staat een ruime slaapbank en tevens een comfortabele losse stoel.
          </div>
        <br />
        <div class="container">
          De keuken is voorzien van alle apparatuur zoals een koelkast, keramische kookplaat, oven,
          magnetron, koffiezetapparaat, waterkoker, broodrooster en alle kookbenodigdheden. Er staat een
          ruime tafel met 4 stoelen waaraan u ontspannen kunt eten.
          </div>
        <br />
        <div class="container">
          Het terras, met zonneluifel, is voorzien van een tafel met 4 stoelen, bijbehorende kussens zijn
          beschikbaar. Een heerlijke terrasverhoging, waarop u heerlijk van de zon kunt genieten. Tevens is er een los ligbed 
          met kussen aanwezig.
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
        <br />
        <br />
        <div class="container">
          <h4 class="title is-4 has-text-left">Prijzen</h4>

          Ondergenoemde prijzen gelden voor het gehele jaar en zijn niet seizoensgebonden.
          <br />
          <br />

          <table class="table is-bordered">
            <tbody>
              <tr><th>Prijs per nacht (niet p.p.)</th><td>€65,-</td></tr>
              <tr><th>Eindschoonmaak</th><td>€65,-</td></tr>
              <tr><th>Maximaal aantal personen</th><td>3</td></tr>
            </tbody>
          </table>

        <p class="is-size-6">Indien u een maand of langer bij ons boekt ontvangt u van ons een offerte met aangepast, voordeliger maandtarief.</p>
        </div>

        <figure id="photo-arrow" class="image is-4by3">
          <img src={photoArrow} alt="Overzichtsfoto Rocas del Mar" />
        </figure>

      </div>

    </Layout>

  );
};

export default Appartement;