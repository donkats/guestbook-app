import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './style.scss';
import PropTypes from "prop-types";


const Layout = ({ children }) => {
  return (
    <>
      <div id="page-wrapper">
        <Navbar />
        <div class="columns is-centered">
        <div class="column is-three-quarters">
        <main>{children}</main>
        </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout