import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link className="navbar-brand " to="/" style={{ marginLeft: "10%" }}>
        <h3>Arunraj</h3>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav " style={{ marginRight: "10%" }}>
          <li className="nav-item ">
            <Link className="nav-link" to="/Home">
              <h6> Home</h6>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Portfolio">
              <h6> Portfolio</h6>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Experience">
              <h6> Experience</h6>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Projects">
              <h6> Projects</h6>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <h6>Contact</h6>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
