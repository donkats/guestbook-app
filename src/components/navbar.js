import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

function Navbar() {

  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
    </Link>

          <Link className="navbar-item" to="/overons">
            Over Ons
    </Link>

          <Link className="navbar-item" to="/appartement">
            Appartement
    </Link>

          <Link className="navbar-item" to="/omgeving">
            Omgeving
    </Link>

          <Link className="navbar-item" to="/fotos">
            Foto's
    </Link>

          <hr className="navbar-divider" />

          <Link className="navbar-item" to="/gastenboek">
            Gastenboek
    </Link>

          <Link className="navbar-item" to="/contact">
            Contact
    </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
