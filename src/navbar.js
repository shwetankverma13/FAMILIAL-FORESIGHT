import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Form,
  FormControl,
  Container,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

const Navbar1 = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Familial Foresight</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-us">About</Nav.Link>
          </Nav>
          {/* <Navbar.Brand href="#home" className="navbar-brand-center">Familial Foresight</Navbar.Brand> */}

          <Nav>
            <Nav.Link href="#history">History</Nav.Link>
            <Nav.Link eventKey={2} href="#contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
