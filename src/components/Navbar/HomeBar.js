import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";

const HomeBar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar
        className="bg-danger text-light mb-2"
        sticky="top"
        collapseOnSelect
        expand="md"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link
              to="/"
              className="text-uppercase fw-bold text-light text-decoration-none "
            >
              Car Solution
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              as={HashLink}
              className="text-decoration-none text-light mx-3"
              to="/#experts"
            >
              Experts
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              to="/#services"
              className="text-decoration-none text-light mx-3"
            >
              Services
            </Nav.Link>

            {user?.email ? (
              <div>
                <Navbar.Text>
                  <span className="text-light">Hello {user?.displayName}</span>
                </Navbar.Text>
                <Button onClick={logOut} className="btn-sm-info mx-3">
                  LogOut
                </Button>
              </div>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="text-decoration-none text-light mx-3"
              >
                Login
              </Nav.Link>
            )}

            <Nav.Link
              as={Link}
              to="/register"
              className="text-decoration-none text-light mx-3"
            >
              Register
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeBar;
