import React from "react";
import Layout from "../components/layout";
import '../components/style.scss';

const Home = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container container--small">
          <section className="section is-small">
            <h2 className="title is-4">Home</h2>

          </section>

          <section className="section">
            <hr />

            <p>Home</p>
          </section>
        </div>
      </section>
    </Layout>

  );
};

export default Home;