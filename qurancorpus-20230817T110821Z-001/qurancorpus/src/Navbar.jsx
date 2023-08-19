import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            {/* Logo */}
            <NavLink exact to="/" className="navbar-brand">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </NavLink>

            {/* Navbar toggler button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar items */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active" className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active" className="nav-link" to="/Translation">
                    Urdu Translation
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active" className="nav-link" to="/Grammar">
                    Grammar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active" className="nav-link" to="/FeedbackForm">
                    Feedback
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
