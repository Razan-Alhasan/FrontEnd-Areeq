import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/test.png';
import { FaHome, FaSearch, FaHeart } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";
import './navbar.css'

function Mynav() {
  return (
    <Navbar expand="lg" bg='light'>
      <Container fluid>
        <div className='img'>
          <Navbar.Brand href="#"><img src={logo} alt='logo' /></Navbar.Brand></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='drop'><Nav
            className="ml-auto ml-2 ml-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown className="t" title="Home Decor" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#">Mirror</NavDropdown.Item>
              <NavDropdown.Item href="#">Wall decoration</NavDropdown.Item>
              <NavDropdown.Item href="#">Art posters</NavDropdown.Item>
              <NavDropdown.Item href="#">Olive oil woods</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Clothes" id="navbarScrollingDropdown" className="t">
              <NavDropdown.Item href="#">Palestinian dress</NavDropdown.Item>
              <NavDropdown.Item href="#"> Hijab</NavDropdown.Item>
              <NavDropdown.Item href="#">Blouse</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Accessories" id="navbarScrollingDropdown" className="t">
              <NavDropdown.Item href="/jewelry">Jewelry</NavDropdown.Item>
              <NavDropdown.Item href="#"> Medal</NavDropdown.Item>
              <NavDropdown.Item href="#">Phone covers</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Soap" id="navbarScrollingDropdown" className="t">
              <NavDropdown.Item href=""> face soap </NavDropdown.Item>
              <NavDropdown.Item href="">Body soap </NavDropdown.Item>
              <NavDropdown.Item href="">Olive oil soap </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ceramic" id="navbarScrollingDropdown" className="t">
              <NavDropdown.Item href="">Cups</NavDropdown.Item>
              <NavDropdown.Item href="">Bowls </NavDropdown.Item>
              <NavDropdown.Item href=""> Dishs</NavDropdown.Item>
            </NavDropdown>


          </Nav ></div>
          <div className='icon'>
            <Nav className='i'>
              <Nav.Link href="/home" className='b' ><FaHome /></Nav.Link>
              <Nav.Link href="/save" className='b'>
                <FaHeart />
              </Nav.Link>
              <Nav.Link href="/signin" className='b' >
                <AiOutlineUserAdd />
              </Nav.Link>
              <Nav.Link href="" className='b'>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button><FaSearch /></Button>
                </Form>
              </Nav.Link>
            </Nav>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;
