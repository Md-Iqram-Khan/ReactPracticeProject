import React from "react";
import { Container, Navbar } from "react-bootstrap";

const HomeBar = () => {
  return (
    <Navbar className="bg-danger text-light mb-2">
      <Container>
        <Navbar.Brand href="#home">
          <h4 className="text-uppercase text-light "> Car Solution</h4>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a className="text-decoration-none text-light mx-3" href="#login">
              Login
            </a>
            <a className="text-decoration-none text-light" href="#login">
              Register
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeBar;
