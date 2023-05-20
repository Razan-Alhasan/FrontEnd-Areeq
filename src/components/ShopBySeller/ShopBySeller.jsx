import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { getAllUsers } from '../../api/userApi';

const ShopBySeller = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    async function fetchSellers() {
      try {
        const usersData = await getAllUsers();
        setSellers(usersData);
      } catch (error) {
        console.error('Error fetching Sellers:', error);
      }
    }
    
    fetchSellers();
  }, []);

  return (
    <div className="ShopBySeller">
      <h2>Shop By Seller</h2>
      <div className='card-flex row'>
        {sellers.map((seller) => (
          <Card key={seller.id} style={{ margin: '2%' }} className='col-md-2 col col-5'>
            <Card.Img variant='top' className='img' style={{ padding: '5%', transition: '1s' }}
              src={seller.image}
            />
            <Card.Body>
              <Card.Title>{seller.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopBySeller;
