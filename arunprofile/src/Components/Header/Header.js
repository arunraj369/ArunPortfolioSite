import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#000080" }} variant="dark">
      <Navbar.Brand as={Link} to="/" style={{ marginLeft: "10%" }}>
        <h3 style={{ color: "#ffffff" }}>Arunraj</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto" style={{ marginRight: "10%" }}>
          <Nav.Link as={Link} to="/Home">
            <h6 style={{ color: "#ffffff" }}>Home</h6>
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/Portfolio">
            <h6 style={{ color: "#ffffff" }}>Portfolio</h6>
          </Nav.Link> */}
          <Nav.Link as={Link} to="/Experience">
            <h6 style={{ color: "#ffffff" }}>Experience</h6>
          </Nav.Link>
          <Nav.Link as={Link} to="/Projects">
            <h6 style={{ color: "#ffffff" }}>Projects</h6>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            <h6 style={{ color: "#ffffff" }}>Contact</h6>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
