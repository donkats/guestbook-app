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
          Wij zouden het leuk vinden als u een bericht achterlaat in ons gastenboek als u in ons appartement
          heeft verbleven. Wij hopen dat u een prettig verblijf heeft gehad en hopen u in de toekomst
          nogmaals te mogen ontvangen.
          </div>
        <br />

        <div class="container">
          <h2 className="title is-5">Schrijf in ons gastenboek</h2>
          <SignForm setSigData={setSigData}></SignForm>
        </div>

        <br />
        <br />

        <div class="container">
          <h2 className="title is-5">Berichten van onze bezoekers</h2>
          <Signatures sigData={sigData}></Signatures>
        </div>

      </div>

    </Layout>
  )
}

export default Gastenboek;