import React from "react";
import { Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Invoice Generator{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#features" className="me-2">
              View Invoices
            </Nav.Link>
            <Link to="/create" type="button" className="btn btn-primary ">
              Create Invoice <IconPlus />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
