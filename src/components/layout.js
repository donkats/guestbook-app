import React from 'react';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import './style.css';
import PropTypes from "prop-types";
import FullBackground from './backgroundsection';

const Layout = ({ children }) => {
  return (
    <>
      <div id="page-wrapper">
        <FullBackground>
          <Helmet />
          <Navbar />

          <main>{children}</main>

          <Footer />
        </FullBackground>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;