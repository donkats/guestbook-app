import React from "react";
import Layout from "../components/layout";
import { Link } from 'gatsby';
import '../components/style.scss';

const Home = (props) => {
  return (
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Welkom</h2>
        <hr class="hr" />

        <div class="container">
          Wij beschikken over twee prachtige appartementen op Tenerife en wij willen dit graag met u delen!
        </div>
        <br />
        <div class="container">
          De appartementen liggen in het viersterrencomplex Rocas del Mar, in het zuidelijkste
puntje van Tenerife in de plaats Costa del Silencio. Rocas del Mar ligt op twintig
minuten van de luchthaven Tenerife-Sur (TFS). Vanuit Costa del Silencio kunt u
gemakkelijk naar bekende badplaatsen zoals Adeje, Las Americas en Los
Christianos. Ook de vissersdorpjes Los Abrigos en El Medano, met hun typische
restaurantjes zijn een bezoekje waard. Toegang tot het openbaar vervoer op
loopafstand, evenals tal van restaurantjes en bars. De supermarkt Hermusa bevindt
zich naast het complex.
          </div>
        <br />
        <div class="container">
          Vanaf het balkon van het appartement kijkt u direct uit over de Atlantische Oceaan,
waar u met wat geluk de dolfijnen langs kunt zien zwemmen.
          </div>
        <br />
        <div class="container">
          Het complex beschikt over o.a. de volgende faciliteiten: twee eigen zwembaden, een
kinderbadje, een poolbar waar u terecht kunt voor een hapje en een drankje. Onze
gasten kunnen gratis gebruik maken van de zwembaden, ligbedden en parasols die
bij het complex aanwezig zijn.
          </div>
        <br />
        <div class="container">
          Kijkt u rustig rond op onze website en mocht u vragen hebben, neem dan gerust <Link to="/contact"><u>contact</u></Link> met ons op.
          Uiteraard vinden wij het leuk als u onze website deelt of
een reactie achter laat in ons gastenboek. Wij hopen u te mogen verwelkomen in ons
paradijsje op het eiland van de eeuwige lente!
          </div>
        <br />
        <div class="container">
          Met vriendelijke groet,<br />
          Xander de Graaf en Caro Landwaart
          </div>
      </div>
    </Layout>
  );
};

export default Home;
