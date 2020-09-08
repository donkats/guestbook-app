import React from 'react';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import './style.scss';
import PropTypes from "prop-types";
import FullBackground from '../components/backgroundsection';

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