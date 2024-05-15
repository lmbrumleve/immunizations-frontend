import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-success" fixed="top">
        <Container fluid>
        <Navbar.Brand href="/">smartshot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/myKids">My Kids</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/newRecord">
                New Record
              </NavDropdown.Item>
              <NavDropdown.Item href="/search">Search Records</NavDropdown.Item>
              <NavDropdown.Item href="/findDoctor">Find a Doctor</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Log out 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link className='btn btn-outline-light' to="/login">
            Login
            </Link>
          <Nav
            className="loginbutton"
          />
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;