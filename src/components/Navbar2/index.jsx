import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import SuperIndex from '../SuperIndex/SuperIndex';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar2 = () => {
  const[count,] = useState(1);

  return (
    <Navbar expand="lg" className="bg-body-dark navbar-dark bg-dark" style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft:'50px'}}>
        <img src="src/assets/img/qTronicsLogo.png" alt="brandLogo" style={{height: '100px', width: 'auto'}} />
          <span style={{fontSize:'45px'}}>QuantumTronics</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Acerca de Nosotros</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;