import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosUtils'
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../../api/productsApi';
import Card from 'react-bootstrap/Card';
import CategoryNavbar from './CategoryNavbar/CategoryNavbar'

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get(`/products?category=${categoryName}`);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [categoryName]);


    <div className='card-flex row'>
        {products.map((product) => (
            <Card key={product.id} style={{ margin: '2%' }} className='col-md-2 col col-5'>
                <Link to={`/FrontEnd-Areeq/product/${product._id}`}>
                    <Card.Img variant='top' className='img' style={{ padding: '5%', transition: '1s' }}
                        src={product.images[0]}
                    />
                </Link>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
            </Card>
        ))}
    </div>



    return (
        <div>
            <CategoryNavbar />
            <h1>Products for {categoryName}</h1>
            <div className='card-flex row'>
                {products.map((product) => (
                    <Card key={product.id} style={{ margin: '2%' }} className='col-md-2 col col-5'>
                        <Link to={`/FrontEnd-Areeq/product/${product._id}`}>
                            <Card.Img variant='top' className='img' style={{ padding: '5%', transition: '1s' }}
                                src={product.images[0]}
                            />
                        </Link>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    );
};

export default CategoryPage;
