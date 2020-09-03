import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

function Navbar() {

  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <section class="hero is-link is-medium">
        <div class="hero-head">
          <header class="navbar">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <button
                  onClick={() => {
                    setisActive(!isActive);
                  }}
                  className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </button>
              </div>

              <div id="navbar-rocas" className={`navbar-menu ${isActive ? "is-active" : ""}`}
              >
                <div className="navbar-start">
                  <Link className="navbar-item" to="/">
                    Home
    </Link>
                </div>
                <div className="navbar-end">
                  <Link className="navbar-item" to="/overons">
                    Over Ons
    </Link>

                  <Link className="navbar-item" to="/appartement">
                    Appartement
    </Link>

                  <Link className="navbar-item" to="/omgeving">
                    Omgeving
    </Link>

                  <Link className="navbar-item" to="/beschikbaarheid">
                    Beschikbaarheid
    </Link>

                  <Link className="navbar-item" to="/fotos">
                    Foto's
    </Link>

                  <Link className="navbar-item" to="/gastenboek">
                    Gastenboek
    </Link>

                  <Link className="navbar-item" to="/contact">
                    Contact
    </Link>
                </div>
              </div>

            </nav>
          </header>
        </div>

      </section>
    </div>
  )
}

export default Navbar;
