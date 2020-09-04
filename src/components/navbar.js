import React from 'react';
import { Link } from 'gatsby';

const Navbar = (props) => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return (
    <nav className="navbar is-link is-medium" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Home</Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-end">
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
  );
}

export default Navbar;

