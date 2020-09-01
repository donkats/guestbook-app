import React from "react";
import Layout from "../components/layout";
import '../components/style.scss';

const Omgeving = (props) => {
  return (
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Omgeving</h2>
        <hr class="hr" />

        <div class="container">
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
        </div>
        <br />
        <div class="container">
          Het rustige 4-sterrencomplex beschikt over 2 grote buitenzwembaden met gefilterd zeewater,
          waarvan 1 ‘s winters verwarmd is. Een kinderbadje met zoet water en een groot zonneterras. Al
          onze gasten kunnen hier gebruik van maken met een zwembadkaart, waarvan er 2 in het
          appartement aanwezig zijn, en zo ook van de beschikbare ligbedden en parasols. Direct naast het
          zwembad bevindt zich een klein café voor hapjes en drankjes, genaamd “De Puntmuts”.
          </div>

      </div>

    </Layout>

  );
};

export default Omgeving;