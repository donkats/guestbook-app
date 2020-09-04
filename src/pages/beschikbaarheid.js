import React from "react";
import BeschikbaarheidForm from './beschikbaarheidform';
import Layout from "../components/layout";
import '../components/style.scss';


const Contact = (props) => {
    return (
        <Layout>

            <div class="container has-background-white" id="page-container">

                <h2 class="title is-2 has-text-centered">Beschikbaarheid</h2>
                <hr class="hr" />

                <div class="container">
                    Het kan voorkomen dat u in een bepaalde periode ons appartement wilt huren, maar dat deze dan niet beschikbaar is.
                    Dat zou jammer zijn voor u, maar wij hebben goede contacten met meerdere eigenaren die ook hun appartement(en) aanbieden via hun eigen websites. Als u wilt, kunnen wij u rechtstreeks met hen in contact brengen, per mail-telefonisch-of via hun websites. Wij kunnen bij u aangeven welke appartementen nog vrij zijn, omdat wij ook de beschikbaarheid van elkaar in kunnen zien.
                    Wij hopen op deze manier dat u dan toch een appartement kunt huren in de door u gewenste periode.<br/><br/>
                    Alleen aanvragen met volledige NAW gegevens worden door ons in behandeling genomen.
        </div>
                <br />
                <div class="container">
                    <BeschikbaarheidForm />
                </div>

            </div>

        </Layout>

    );
};

export default Contact;