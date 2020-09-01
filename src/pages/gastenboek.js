import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout";
import Signatures from '../components/signatures';
import SignForm from '../components/sign-form';
import '../components/style.scss';


const Gastenboek = () => {
  const data = useStaticQuery(
    graphql`
			query GetSignatures {
				allSignatures {
				  nodes {
					name
					message
					_ts
					_id
				  }
				}
			}`
  );
  const [sigData, setSigData] = useState(data.allSignatures.nodes);
  return (
    <Layout>
      <div class="container has-background-white" id="page-container">

        <h2 class="title is-2 has-text-centered">Gastenboek</h2>
        <hr class="hr" />

        <div class="container">
          Ons appartement is gelegen aan de oceaanzijde van het complex op de 1e verdieping en is
          bereikbaar via een trap aan de voorzijde.
          </div>
        <br />
        <div className="container container--small">
          <section className="section is-small">
            <h2 className="title is-4">Sign here</h2>
            <SignForm setSigData={setSigData}></SignForm>
          </section>

          <section className="section">
            <h2 className="title is-5">View Signatures</h2>
            <Signatures sigData={sigData}></Signatures>
          </section>
        </div>

      </div>

    </Layout>
  )
}

export default Gastenboek;