import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./navbar";
import Footer from "./footer";

import "./App.css";
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

function App() {
  return (
    <>
      <Navbar1 />

      <div
        style={{
          backgroundImage:
            "url(" + "https://wallpaperaccess.com/full/2741780.jpg" + ")",
        }}
      >
        <br></br>
        <br></br>
        <h1 style={{ color: "#ffffff", fontFamily: "Carter One" }}>
          FULL STOP TO FALLACIOUS CURIOSITY
        </h1>
        <div style={{ color: "white", padding: "200px" }}>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button className="btn1">Search</Button>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
