import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/ARR.png';
import { FaSearch, FaHeart, FaRegUserCircle, FaHome } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";
import './Navbar.css'

function Mynav({ isSeller }) {
  return (
    <Navbar bg='light' fixed='top' expand='lg'>
      <Container fluid>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='Drop'>
            <Nav
              className="ml-auto ml-2 ml-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="" style={{ color: 'var(--main-color)', fontSize: '17.5px' }}>Home Decor</Nav.Link>
              <Nav.Link href="" style={{ color: 'var(--main-color)', fontSize: '17.5px', marginLeft: "5px" }}>Clothes</Nav.Link>
              <Nav.Link href="" style={{ color: 'var(--main-color)', fontSize: '17.5px' }}>Accessories</Nav.Link>
              <Nav.Link href="" style={{ color: 'var(--main-color)', fontSize: '17.5px' }}>Soap</Nav.Link>
              <Nav.Link href="" style={{ color: 'var(--main-color)', fontSize: '17.5px' }}>Ceramic</Nav.Link>
            </Nav ></div>

          <img src={logo} alt='logo' style={{ width: '15%', height: 'auto' }} className="logo-img" />


          <div className='Icon' >
            <Nav className='i'>
              <Nav.Link href="/signin" className='B' style={{ color: 'var(--main-color)', fontSize: '20px' }}><FaHome /></Nav.Link>
              <Nav.Link href="/" className='B' style={{ color: 'var(--main-color)', fontSize: '20px' }}><FaHeart /></Nav.Link>
              {isSeller && (
                <Nav.Link href="/" className='B' style={{ color: 'var(--main-color)', fontSize: '20px' }}><FaRegUserCircle /></Nav.Link>
              )}

              <Nav.Link href="/signin" className='B' style={{ color: 'var(--main-color)', fontSize: '20px' }}><AiOutlineUserAdd /></Nav.Link>

              <Nav.Link href="" className='B'>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button style={{ backgroundColor: 'grey', border: 'none' }}><FaSearch /></Button>
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