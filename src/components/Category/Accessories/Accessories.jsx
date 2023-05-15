import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accessories.css';



function Accessories (){


return (
    <div className='Category'>
    <h1>  Accessories </h1>

<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand > Filter product by : </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Rate" id="basic-nav-dropdown" style={{ fontSize: '20px' }}>
              <button >Hight to Low</button>
              <button >Low to Hight</button>
            </NavDropdown>

            <NavDropdown title="Price" id="basic-nav-dropdown" style={{ fontSize: '20px' }}>
            <button>Hight to Low</button>
            <button>Low to Hight</button>
            </NavDropdown>

            <NavDropdown title="alphabetical order" id="basic-nav-dropdown" style={{ fontSize: '20px' }}>
            <button>A - to -  Z</button>
            <button>Z - to - A</button>
            </NavDropdown>
          </Nav></Navbar.Collapse>
      </Container>
    </Navbar>
   <div className="Image">

    <Container>
      <Row>
        <Col>-</Col>
        <Col>-</Col>
        <Col>-</Col>
      </Row>
      
    </Container>
  </div>
</div>
    
  );
};

export default Accessories;