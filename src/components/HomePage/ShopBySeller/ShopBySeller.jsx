import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { getAllUsers } from '../../../api/userApi';
import './ShopBySeller.css';
import { Link } from 'react-router-dom';

const ShopBySeller = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    async function fetchSellers() {
      try {
        const usersData = await getAllUsers();
        setSellers(usersData);
        console.log(usersData)
      } catch (error) {
        console.error('Error fetching Sellers:', error);
      }
    }

    fetchSellers();
  }, []);

  const CustomCarousel = ({ children }) => {
    return (
      <Carousel prevIcon={null} nextIcon={null} fade={true} interval={3000}>
        {children}
      </Carousel>
    );
  };

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  };
  if (!sellers || sellers.length === 0) {
    return null; // Render null or a loading indicator while fetching sellers
  }

  return (
    <div className="ShopBySeller">
      <h2>Shop By Seller</h2>
      <CustomCarousel>
        {chunkArray(sellers, 3).map((sellerChunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              {sellerChunk.map((seller) => (
                <Card key={seller.id} style={{ margin: '2%' }}>
                  <Link to={`/FrontEnd-Areeq/seller/${seller.id}`}>
                    <Card.Img
                      variant="top"
                      className="img-seller"
                      style={{ padding: '5%', transition: '1s' }}
                      src={seller.image}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{seller.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default ShopBySeller;
