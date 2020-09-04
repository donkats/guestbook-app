import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-link"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>

            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/overons">
                Over ons
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
        </div>
      </nav>
    )
  }
}

export default Navbar;