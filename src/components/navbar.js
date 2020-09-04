import React from 'react';
import { Link } from 'gatsby';

const Navbar = (props) => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return (
    <section class="hero is-link is-medium">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Home</Link>

        <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-end has-text-centered">
        <Link to="/overons" className="navbar-item" onClick={toggleBurgerMenu}>Over ons</Link>
        <Link to="/appartement" className="navbar-item" onClick={toggleBurgerMenu}>Appartement</Link>
        <Link to="/omgeving" className="navbar-item" onClick={toggleBurgerMenu}>Omgeving</Link>
        <Link to="/beschikbaarheid" className="navbar-item" onClick={toggleBurgerMenu}>Beschikbaarheid</Link>
          <Link to="/fotos" className="navbar-item" onClick={toggleBurgerMenu}>Foto's</Link>
          <Link to="/gastenboek" className="navbar-item" onClick={toggleBurgerMenu}>Gastenboek</Link>
          <Link to="/contact" className="navbar-item" onClick={toggleBurgerMenu}>Contact</Link>
        </div>
      </div>
    </nav>
    </section>
  );
}

export default Navbar;


