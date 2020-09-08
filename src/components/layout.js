import React from 'react';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import './style.scss';
import PropTypes from "prop-types";
import StyledFullBackground from '../components/backgroundsection';

const Layout = ({ children }) => {
  return (
    <>
      <div id="page-wrapper">
        <StyledFullBackground>
          <Helmet />
          <Navbar />

          <main>{children}</main>

          <Footer />
        </StyledFullBackground>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;