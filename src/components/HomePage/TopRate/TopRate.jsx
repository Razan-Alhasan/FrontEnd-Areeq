import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopRate.css';
import { getProducts } from '../../../api/productsApi';

const TopRate = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await getProducts();
                const sortedProducts = productsData.sort((a, b) => b.rating - a.rating);
                const topRatedProducts = sortedProducts.slice(0, 4);
                setProducts(topRatedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="top-rate">
            <h2>Top Rate</h2>
            <div className='card-flex row'>
                { products.map((product) => (
                    <Card key={ product.id } style={ { margin: '2%' } } className='col-md-2 col col-5'>
                        <Link to={`/FrontEnd-Areeq/product/${product._id}`}> 
                        <Card.Img variant='top' className='img' style={ { padding: '5%', transition: '1s' } }
                            src={ product.images[0] }
                        />
                        </Link> 
                        <Card.Body>
                            <Card.Title>{ product.name }</Card.Title>
                        </Card.Body>
                    </Card>
                )) }
            </div>
        </div>
    );
};
export default TopRate;
