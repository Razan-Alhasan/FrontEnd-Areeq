import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/ARR.png';
import { FaSearch, FaHeart, FaRegUserCircle, FaHome } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";
import './Navbar.css';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosUtils';
import SearchComponent from './Search/Search';
function Mynav() {
  const [isSeller, setIsSeller] = useState(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const checkIsSeller = async () => {
      try {
        const response = await axiosInstance.get(`/user/${userId}`);
        if (response.status === 200) {
          setIsSeller(response.data.isSeller);
        }
      } catch (error) {
        console.log("Failed to check seller status:", error);
      }
    };

    if (userId) {
      checkIsSeller();
    }
  }, [userId]);

  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='Drop'>
            <Nav
              className="ml-auto ml-2 ml-lg-0"
              style={ { maxHeight: '100px' } }
              navbarScroll
            >
              <Nav.Link as={ Link } to="category/Home Decor" style={ { color: 'var(--main-color)', fontSize: '17.5px' } }>Home Decor</Nav.Link>
              <Nav.Link as={ Link } to="category/Clothes" style={ { color: 'var(--main-color)', fontSize: '17.5px' } }>Clothes</Nav.Link>
              <Nav.Link as={ Link } to="category/Accessories" style={ { color: 'var(--main-color)', fontSize: '17.5px' } }>Accessories</Nav.Link>
              <Nav.Link as={ Link } to="/FrontEnd-Areeq/category/Soap" style={ { color: 'var(--main-color)', fontSize: '17.5px' } }>Soap</Nav.Link>
              <Nav.Link as={ Link } to="/FrontEnd-Areeq/category/Ceramic" style={ { color: 'var(--main-color)', fontSize: '17.5px' } }>Ceramic</Nav.Link>
            </Nav >
          </div>

          <img src={ logo } alt='logo' style={ { width: '15%' } } className="logo-img" />


          <div className='Icon' >
            <Nav className='i'>
              <Nav.Link as={ Link } to="/FrontEnd-Areeq/home" className='B' style={ { color: 'var(--main-color)', fontSize: '20px' } } ><FaHome /></Nav.Link>
              <Nav.Link as={ Link } to="/FrontEnd-Areeq/wishlist" className='B' style={ { color: 'var(--main-color)', fontSize: '20px' } }><FaHeart /></Nav.Link>
              { isSeller && (
                <Nav.Link as={ Link } to={ `/FrontEnd-Areeq/seller/${userId}` } className='B' style={ { color: 'var(--main-color)', fontSize: '20px' } }><FaRegUserCircle /></Nav.Link>
              ) }
              <Nav.Link as={ Link } to="/FrontEnd-Areeq/signin" className='B' style={ { color: 'var(--main-color)', fontSize: '20px' } }><AiOutlineUserAdd /></Nav.Link>
              <SearchComponent />
            </Nav>
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Mynav;