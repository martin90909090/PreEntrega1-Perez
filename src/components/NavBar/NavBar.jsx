import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Badge from '../Badge/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.css';

const NavBar = () => {
  const[count,] = useState(0);
  
  return (
    <Navbar expand="lg" className="bg-body-dark navbar-dark bg-dark">
      <Container className="container">
        <Navbar.Brand className="navbar-brand" href="#home">
          <img src="src/assets/img/qTronicsLogo.png" alt="brandLogo"  />
          <span>QuantumTronics</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" href="#home">Inicio</Nav.Link>
            <Nav.Link className="link" href="#link">Acerca de Nosotros</Nav.Link>
            <NavDropdown className="link" title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Computadores Cuánticos
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                AI GPUs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Server CPUs
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Gaming PCs
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="link contact-link" href="#link">Contacto</Nav.Link>
            <Nav.Link className="link" href='#link'>
              <Badge className="badge" count={count} />
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;