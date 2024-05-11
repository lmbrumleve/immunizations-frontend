import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-success" fixed="top">
        <Container fluid>
        <Navbar.Brand href="#home">smartshot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#link">My Kids</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                New Record
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Search Records</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Find a Doctor</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Log out 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button className='btn-light btn-outline-success btn-text-success'>
            Login
            </Button>
          <Nav
            className="loginbutton"
          />
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;