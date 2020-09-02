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
        <br /><br />

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
        <br /><br />


        {/* Links to sightseeing activities */}

        <div class="container">
          <h5 class="title is-5">Hieronder vindt u enkele suggesties om uw verblijf op Tenerife onvergetelijk te maken.</h5>
        </div><br />

        <div class="container">
          <strong>Vliegtickets o.a. via:</strong><br />
          <li>
            <a href="https://www.ryanair.com/nl/nl" target="_blank">Ryanair</a>,
            <a href="https://www.transavia.com/" target="_blank"> Transavia</a>,
            <a href="http://www.vliegensvlug.be/" target="_blank"> Vliegensvlug</a>,
            <a href="https://www.thomascook.com/nl-be" target="_blank"> Thomas Cook</a>,
            <a href="https://www.easyjet.com/nl" target="_blank"> Easyjet</a>,
            <a href="https://www.tui.nl/vliegtickets/" target="_blank"> TUI </a>en
            <a href="https://www.brusselsairlines.com/nl-nl/" target="_blank"> Brussels Airlines</a>.
          </li>
        </div><br />

        <div class="container">
          <strong>Autoverhuur</strong><br />
          <li>Vanaf het vliegveld via <a href="https://www.rentacar-gigi.com/nl" target="_blank">Gigi rent a car</a>.</li>
          <li>Het is ook mogelijk om een auto te huren bij een bedrijf dicht bij het complex.
          Wij kunnen eventueel een huurauto voor u reserveren bij boeking,
          u kunt dan uw auto bij het complex ophalen op de gewenste datum indien beschikbaar.</li>

        </div><br />

        <div class="container">
          <strong>Waterparken</strong><br />
          <li><a href="http://www.coralsub.com/fr/home" target="_blank">Duikpark</a></li>
          <li><a href="https://www.siampark.net/index.php/en/" target="_blank">Waterpark Siam</a></li>
        </div><br />

        <div class="container">
          <strong>Dieren</strong><br />
          <li><a href="https://www.loroparque.com/index.php/en/" target="_blank">Loro park</a></li>
          <li><a href="https://www.junglepark.es/" target="_blank">Junglepark (Recreatiepark Aquilas del Teide)</a></li>
          <li><a href="http://monkeypark.com/" target="_blank">Monkeypark</a></li>
          <li><a href="https://camelpark.es/?lang=en" target="_blank">Camel park</a></li>
          <li><a href="https://www.droomplekken.nl/spanje/zie-de-walvissen-en-dolfijnen-van-
            tenerife/" target="_blank">Dolfijnen en walvissen excursie</a></li>
        </div><br />



        <div class="container">
          <strong>Bezienswaardigheden</strong><br />
          <li><a href="https://www.droomplekken.nl/spanje/tenerife/" target="_blank">Piramides de Guimar</a></li>
          <li><a href="https://dier-en-natuur.infonu.nl/natuur/20977-las-canadas-tenerife.html" target="_blank">Las Cañadas</a></li>
          <li><a href="https://www.wandelvrouw.nl/de-masca-kloof-op-tenerife/" target="_blank">Masca kloof</a></li>
          <li><a href="http://www.tenerife-reisgids.be/tenerife-teide-vulkaan.php" target="_blank">De Teide</a></li>
          <li><a href="http://www.tenerife-reisgids.be/tenerife-wandelen.php" target="_blank">Wandeltochten</a></li>
          <li><a href="http://www.tenerife-reisgids.be/tenerife-casa-del-vino.php" target="_blank">Wijnmuseum</a></li>
        </div><br />

        <div class="container">
          <strong>Stranden</strong>
          <li><a href="http://www.tenerife-reisgids.be/tenerife-costa-del-silencio.php" target="_blank">Costa del Silencio</a></li>
          <li><a href="http://www.allesovertenerife.nl/playa-de-las-americas.htm" target="_blank">Playa de Las Americas</a></li>
          <li><a href="http://www.allesovertenerife.nl/los-cristianos.htm" target="_blank">Los Cristianos</a></li>
        </div><br />

        <div class="container">
          <strong>Meer informatie</strong>
          <li><a href="http://www.tenerife-reisgids.be/tenerife-tips.php" target="_blank">Goed om te weten</a></li>
        </div><br />

      </div>
    </Layout>

  );
};

export default Omgeving;