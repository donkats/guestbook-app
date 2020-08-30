import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './style.scss';

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

export default Layout