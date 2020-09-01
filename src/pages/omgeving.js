import React from "react";
import Layout from "../components/layout";
import '../components/style.scss';

const Omgeving = (props) => {
  return (
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Omgeving</h2>
        <hr class="hr" />


        <div class="columns">
          <div class="column">
            <strong>Adres</strong><br />
            Complex Rocas de Mar ****<br />
            Calle de Zeus 6, appartement 102<br />
            38630 Costa del Silencio<br />
            Tenerife
            </div>
          <div class="column">
            <iframe title="Google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.647608889461!2d-16.647958384866556!3d28.00467581896912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6aa211f1c1c197%3A0x3fc7306ee8f87c2a!2sRocas%20del%20Mar!5e0!3m2!1sen!2snl!4v1596660545853!5m2!1sen!2snl"
              style={{ width: '300', height: '200', frameborder: '0', borderRadius: '20px' }} allowfullscreen></iframe>
          </div>
        </div>

        <br />
        <div class="container">
          Het rustige 4-sterrencomplex beschikt over 2 grote buitenzwembaden met gefilterd zeewater,
          waarvan 1 ‘s winters verwarmd is. Een kinderbadje met zoet water en een groot zonneterras. Al
          onze gasten kunnen hier gebruik van maken met een zwembadkaart, waarvan er 2 in het
          appartement aanwezig zijn, en zo ook van de beschikbare ligbedden en parasols. Direct naast het
          zwembad bevindt zich een klein café voor hapjes en drankjes, genaamd “De Puntmuts”.
          </div>
        <br />

        {/* Boxes with general info */}

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-plane fa-3x"></i>
              </span>
            </div>

            <p>
              <strong>Vliegtijd van/naar Nederland</strong>
              <br />
              Ongeveer vier uur en een kwartier tot bijna vijf uur.
        </p>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-clock fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Tijdzone</strong>
              <br />
              UTC0; op Tenerife is het altijd één uur vroeger dan in Nederland.
        </p>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-comment fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Taal</strong>
              <br />
              Spaans; op toeristische plekken wordt redelijk Engels gesproken.
        </p>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-euro-sign fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Geld</strong>
              <br />
              Op Tenerife betaal je net als in Nederland met de euro.
        </p>
          </article>
        </div>


        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-money-bill-alt fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Prijsniveau</strong>
              <br />
              Gemiddeld liggen de prijzen iets lager dan in Nederland.
        </p>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-church fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Religie</strong>
              <br />
              Overwegend rooms-katholiek (ongeveer 90% van de bevolking).
        </p>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-tint fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Drinkwater</strong>
              <br />
              het leidingwater is niet geschikt om te drinken (wel om mee te tandenpoetsen).
        </p>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-mobile-alt fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Mobiel Netwerk</strong>
              <br />
          Goede dekking met uitzondering van sommige plekken in de bergen (o.a. rondom Masca).
        </p>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large is-center">
                <i class="fas fa-bus-alt fa-3x"></i>
              </span>
            </div>
            <p>
              <strong>Openbaar vervoer</strong>
              <br />
              Uitstekende dekking van bussen en in toeristenplaatsen goede beschikbaarheid taxi's.
        </p>
          </article>
        </div>
        <br/><br/>


        {/* Links to sightseeing activities */}

        <div class="container">
          Hieronder vindt u enkele suggesties om uw verblijf op Tenerife onvergetelijk te maken.
        </div><br />

        <div class="container">
          <strong>Vliegtickets o.a. via:</strong><br />
        <li>Ryanair, Transavia, Vliegensvlug, Thomas Cook, Easyjet, TUI en Brussels Airlines.</li>
        </div><br />

        <div class="container">
          <strong>Autoverhuur</strong><br />
            <li>Vanaf het vliegveld via Gigi rent a car.</li>
            <li>Het is ook mogelijk om een auto te huren bij een bedrijf dicht bij het complex.
            Wij kunnen eventueel een huurauto voor u reserveren bij boeking,
          u kunt dan uw auto bij het complex ophalen op de gewenste datum indien beschikbaar.</li>
          
        </div><br />

        <div class="container">
          <strong>Waterparken</strong><br />
            <li>Duikpark</li>
            <li>Waterpark Siam</li>
        </div><br />

        <div class="container">
          <strong>Dieren</strong><br />
          <li>Loro park</li>
<li>Junglepark (Recreatiepark Aquilas del Teide)</li>
<li>Monkeypark</li>
<li>Camel park</li>
<li>Dolfijnen en walvissen excursie</li>
        </div><br />

        <div class="container">
          <strong>Bezienswaardigheden</strong><br />
          <li>Piramides de Guimar</li>
          <li>Las Cañadas</li>
          <li>Masca kloof</li>
          <li>De Teide</li>
<li>Wandeltochten</li>
<li>Wijnmuseum</li>
        </div><br />

        <div class="container">
          <strong>Stranden</strong>
<li>Costa del Silencio</li>
<li>Playa de Las Americas</li>
<li>Los Cristianos</li>
        </div><br />

        <div class="container">
          <strong>Meer informatie</strong>
          <li>Goed om te weten</li>
        </div><br />

      </div>
    </Layout>

  );
};

export default Omgeving;